/**
 * Footer: the email address repeated one last time, plus the two facts a
 * visitor usually looks for at the bottom of a portfolio (where the studio is,
 * who made the pictures). Kept to a single line on wide screens.
 * --- @ty.aicoding@1794387314335 ---
 */
import { site } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[87.5rem] flex-col gap-3 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p className="label-caps text-muted-foreground">
          {site.name} — {site.role}
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-foreground underline decoration-border decoration-1 underline-offset-4 transition-colors hover:decoration-foreground"
          >
            {site.email}
          </a>
          <p className="label-caps text-muted-foreground">© {site.year}</p>
        </div>
      </div>
    </footer>
  )
}
