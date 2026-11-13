/**
 * Root layout: typography, page metadata and the two pieces of chrome that
 * every view shares — a hairline header and a quiet footer.
 *
 * The template's Geist / Outfit / Oxanium stack is replaced by the self-hosted
 * pairing described in `app/fonts.ts`. The site is light-only, so `themeColor`
 * is a single value matching `--background` in `app/globals.css` converted to
 * sRGB; `components/theme-provider.tsx` pins the theme and exposes no way to
 * switch it, which is what makes one value correct.
 *
 * `<main>` and every section carry `scroll-mt-24` (96px) as scroll margin — a
 * little more than the sticky header, which is 81px on desktop and 83px below
 * `sm`. The skip link and the section anchor jumps therefore land below the
 * bar rather than under it.
 * --- @ty.aicoding@1794551031437 ---
 */
import type { Metadata, Viewport } from "next"

import "./globals.css"
import { cormorant, inter } from "@/app/fonts"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { hero, site } from "@/lib/content"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.description,
    type: "website",
    locale: "en",
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: hero.image.src,
        width: hero.image.width,
        height: hero.image.height,
        alt: hero.alt,
      },
    ],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#fbfaf8",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        inter.variable,
        cormorant.variable,
        "font-sans"
      )}
    >
      <body className="min-h-svh bg-background text-foreground">
        <ThemeProvider>
          <a
            href="#top"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:ring-1 focus:ring-border"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="top" className="scroll-mt-24">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
