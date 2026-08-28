import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Script from 'next/script'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import {
  GOOGLE_ANALYTICS_CONSENT_BOOTSTRAP_SCRIPT,
  GOOGLE_ANALYTICS_SRC,
} from '@/features/analytics/googleAnalytics'
import { CookieConsentManager } from '@/features/cookies/CookieConsentManager'
import { siteConfig } from '@/shared/seo/site'
import { theSeasons, montserrat, greatVibes } from '@/shared/fonts'
import '../styles/variables.css'
import '../styles/global.css'
import { CustomCursor } from '@/components/CustomCursor/CustomCursor'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: '%s | Norbert Fila',
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/profile/avatar-light.webp',
        width: 1200,
        height: 630,
        alt: 'Norbert Fila',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/profile/avatar-light.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

type RootLayoutProps = {
  children: ReactNode
}

const scrollTrackingScript = `
(() => {
  if (window.__nfScrollTrackingInstalled) return;

  const milestones = [25, 50, 75, 90];
  let sentMilestones = new Set();
  let currentPath = location.pathname + location.search;

  const resetMilestones = () => {
    currentPath = location.pathname + location.search;
    sentMilestones = new Set();
  };

  const trackScrollDepth = () => {
    if (typeof window.gtag !== 'function') return;

    const doc = document.documentElement;
    const scrollableHeight = doc.scrollHeight - window.innerHeight;
    if (scrollableHeight <= 0) return;

    const percent = Math.round((window.scrollY / scrollableHeight) * 100);

    for (const milestone of milestones) {
      if (percent >= milestone && !sentMilestones.has(milestone)) {
        sentMilestones.add(milestone);
        window.gtag('event', 'scroll_depth_reached', {
          page_path: currentPath,
          percent: milestone,
        });
      }
    }
  };

  const originalPushState = window.history.pushState.bind(window.history);
  const originalReplaceState = window.history.replaceState.bind(window.history);

  window.history.pushState = (...args) => {
    originalPushState(...args);
    queueMicrotask(resetMilestones);
    queueMicrotask(trackScrollDepth);
  };

  window.history.replaceState = (...args) => {
    originalReplaceState(...args);
    queueMicrotask(resetMilestones);
    queueMicrotask(trackScrollDepth);
  };

  window.addEventListener('popstate', () => {
    resetMilestones();
    trackScrollDepth();
  });

  window.addEventListener('scroll', trackScrollDepth, { passive: true });
  window.addEventListener('resize', trackScrollDepth, { passive: true });

  resetMilestones();
  trackScrollDepth();
  window.__nfScrollTrackingInstalled = true;
})();
`

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="pl"
      className={`${theSeasons.variable} ${montserrat.variable} ${greatVibes.variable}`}
    >
      <body>
        <Script id="google-analytics-consent" strategy="beforeInteractive">
          {GOOGLE_ANALYTICS_CONSENT_BOOTSTRAP_SCRIPT}
        </Script>
        <Script id="google-analytics" src={GOOGLE_ANALYTICS_SRC} strategy="afterInteractive" />
        <Script id="scroll-tracking" strategy="afterInteractive">
          {scrollTrackingScript}
        </Script>
        <CustomCursor />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
          <CookieConsentManager />
        </div>
      </body>
    </html>
  )
}
