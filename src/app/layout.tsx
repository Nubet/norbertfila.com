import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import { defaultMetadata } from '@/shared/seo/defaultSeo'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { DisableAnimationOnMobile } from '@/components/DisableAnimationOnMobile/DisableAnimationOnMobile'
import {
  GOOGLE_ANALYTICS_CONSENT_BOOTSTRAP_SCRIPT,
  GOOGLE_ANALYTICS_ID,
} from '@/features/analytics/googleAnalytics'
import { CookieConsentManager } from '@/features/cookies/CookieConsentManager'
import { theSeasons, montserrat, greatVibes } from '@/shared/fonts'
import '../styles/variables.css'
import '../styles/global.css'
import { CustomCursorLoader } from '@/components/CustomCursor/CustomCursorLoader'

export const metadata: Metadata = defaultMetadata

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
      <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
      <body>
        <Script
          id="google-analytics-consent"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: GOOGLE_ANALYTICS_CONSENT_BOOTSTRAP_SCRIPT }}
        />
        <Script
          id="scroll-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: scrollTrackingScript }}
        />
        <CustomCursorLoader />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <DisableAnimationOnMobile>
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </DisableAnimationOnMobile>
          <CookieConsentManager />
        </div>
      </body>
    </html>
  )
}
