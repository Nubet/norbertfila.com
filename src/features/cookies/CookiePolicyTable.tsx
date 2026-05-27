import { analyticsCookies, strictlyNecessaryCookies } from './cookieCatalog'
import styles from '../../views/LegalPages/LegalPages.module.css'

function CookieTable({
  title,
  rows,
}: {
  title: string
  rows: { name: string; domain: string; description: string; expiration: string }[]
}) {
  return (
    <section>
      <h3 className={styles.cookieTableTitle}>{title}</h3>
      <div className={styles.cookieTableWrap}>
        <table className={styles.cookieTable}>
          <thead>
            <tr>
              <th>Nazwa</th>
              <th>Domena</th>
              <th>Opis</th>
              <th>Ważność</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.name}-${row.domain}`}>
                <td>{row.name}</td>
                <td>{row.domain}</td>
                <td>{row.description}</td>
                <td>{row.expiration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export function CookiePolicyTable() {
  return (
    <>
      <CookieTable title="Niezbędne cookies" rows={strictlyNecessaryCookies} />
      <CookieTable title="Analityczne cookies" rows={analyticsCookies} />
    </>
  )
}
