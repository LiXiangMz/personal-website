/**
 * Header: a fixed-height hairline bar holding the wordmark on the left and the
 * four section links on the right. No background fill and no shadow — it sits
 * on the paper and lets the photographs start immediately underneath.
 * --- @ty.aicoding@1794387304987 ---
 */
import Link from "next/link"

import { sections, site } from "@/lib/content"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[87.5rem] items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
        <Link
          href="#top"
          className="font-heading text-lg tracking-[0.02em] text-foreground transition-opacity hover:opacity-60 sm:text-xl"
        >
          {site.wordmark}
        </Link>
        <nav aria-label="Sections">
          <ul className="flex items-center gap-5 sm:gap-8">
            {sections.map((section) => (
              <li key={section.id}>
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
