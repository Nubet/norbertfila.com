const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow'
const SITE_URL = 'https://norbertfila.com'
const INDEXNOW_KEY = '48a4f21e3c2548e9b4daf6a7e709acfd'
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`

function printUsage() {
  console.log(
    [
      'Usage: npm run indexnow -- <url-or-path> [more-urls-or-paths]',
      '   or: npm run indexnow -- --since YYYY-MM-DD',
      'Example: npm run indexnow -- /blog/jak-przyspieszyc-indeksowanie-strony /blog/jak-tworzyc-tresci-ktore-ai-bedzie-cytowac',
      'Example: npm run indexnow -- --since 2026-09-01',
    ].join('\n'),
  )
}

function normalizeUrl(value) {
  if (value.startsWith('http://') || value.startsWith('https://')) {
    return new URL(value).toString()
  }

  const path = value.startsWith('/') ? value : `/${value}`
  return new URL(path, SITE_URL).toString()
}

function isValidDate(value) {
  return !Number.isNaN(new Date(value).getTime())
}

function parseSitemapEntries(xml) {
  return [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => {
    const block = match[1]
    const loc = block.match(/<loc>(.*?)<\/loc>/)?.[1]?.trim()
    const lastmod = block.match(/<lastmod>(.*?)<\/lastmod>/)?.[1]?.trim()

    return {
      loc,
      lastmod,
    }
  })
}

async function getUrlsFromSitemap(since) {
  const response = await fetch(SITEMAP_URL)

  if (!response.ok) {
    throw new Error(`Could not fetch sitemap: ${response.status} ${response.statusText}`)
  }

  const xml = await response.text()
  const entries = parseSitemapEntries(xml)

  return entries
    .filter((entry) => entry.loc)
    .filter((entry) => {
      if (!since) {
        return true
      }

      if (!entry.lastmod) {
        return false
      }

      return new Date(entry.lastmod) > since
    })
    .map((entry) => entry.loc)
}

async function submitUrls(urlList) {
  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`IndexNow request failed with ${response.status}: ${text || response.statusText}`)
  }
}

const rawArgs = process.argv.slice(2)

if (rawArgs.length === 0 || rawArgs.includes('--help') || rawArgs.includes('-h')) {
  printUsage()
  process.exit(rawArgs.length === 0 ? 1 : 0)
}

let urlList = []
const sinceIndex = rawArgs.indexOf('--since')

if (sinceIndex !== -1) {
  const dateValue = rawArgs[sinceIndex + 1]

  if (!dateValue || !isValidDate(dateValue)) {
    console.error('Invalid or missing date. Use format YYYY-MM-DD.')
    process.exit(1)
  }

  if (rawArgs.length !== 2) {
    console.error('When using --since, do not pass manual URLs in the same command.')
    process.exit(1)
  }

  urlList = [...new Set(await getUrlsFromSitemap(new Date(dateValue)))]
} else {
  urlList = [...new Set(rawArgs.map(normalizeUrl))]
}

if (urlList.length === 0) {
  console.log('No URLs to submit.')
  process.exit(0)
}

const invalidUrl = urlList.find((url) => new URL(url).host !== new URL(SITE_URL).host)

if (invalidUrl) {
  console.error(`All submitted URLs must belong to ${SITE_URL}. Invalid: ${invalidUrl}`)
  process.exit(1)
}

await submitUrls(urlList)

console.log(`Submitted ${urlList.length} URL${urlList.length === 1 ? '' : 's'} to IndexNow.`)
for (const url of urlList) {
  console.log(`- ${url}`)
}
