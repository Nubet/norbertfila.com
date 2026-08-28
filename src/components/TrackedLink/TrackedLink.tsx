'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { trackAnalyticsEvent } from '@/features/analytics/googleAnalytics'

type TrackedLinkProps = {
  href: string
  className?: string
  eventName: string
  eventParams?: Record<string, unknown>
  children: ReactNode
}

export function TrackedLink({
  href,
  className,
  eventName,
  eventParams,
  children,
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackAnalyticsEvent(eventName, eventParams ?? {})}
    >
      {children}
    </Link>
  )
}
