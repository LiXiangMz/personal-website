/**
 * Header: a hairline bar holding the wordmark on the left and the four section
 * links on the right. No background fill and no shadow — it sits on the paper
 * and lets the photographs start immediately underneath.
 *
 * Narrow screens: below `sm` the bar is two rows (wordmark, then the nav) and
 * the nav scrolls sideways inside its own box instead of widening the page, so
 * the layout holds down to 320px — the narrowest width WCAG 1.4.10 expects.
 * --- @ty.aicoding@1794535429488 ---
 */
import Link from "next/link"

import { sections, site } from "@/lib/content"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[87.5rem] flex-col gap-y-1 px-5 py-3 sm:h-20 sm:flex-row sm:items-center sm:justify-between sm:gap-x-8 sm:gap-y-0 sm:px-8 sm:py-0 lg:px-12">
        <Link
          href="#top"
          className="font-heading text-lg tracking-[0.02em] text-foreground transition-opacity hover:opacity-60 sm:text-xl"
        >
          {site.wordmark}
        </Link>
        <nav aria-label="Sections" className="min-w-0">
          <ul className="flex items-center gap-x-5 overflow-x-auto pb-0.5 sm:gap-x-8 sm:overflow-visible sm:pb-0">
            {sections.map((section) => (
              <li key={section.id} className="shrink-0">
                <Link
                  href={`#${section.id}`}
                  className="label-caps text-muted-foreground transition-colors hover:text-foreground"
                >
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
