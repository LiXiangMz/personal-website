/**
 * Root layout: typography, page metadata and the two pieces of chrome that
 * every view shares — a hairline header and a quiet footer.
 *
 * The template's Geist / Outfit / Oxanium stack is replaced by the self-hosted
 * pairing described in `app/fonts.ts`; dark mode is kept from the template but
 * defaults to light, since photographs read better on paper than on ink.
 * --- @ty.aicoding@1794387287246 ---
 */
import type { Metadata, Viewport } from "next"

import "./globals.css"
import { cormorant, inter } from "@/app/fonts"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { site } from "@/lib/content"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  metadataBase: new URL("https://xiangli.photo"),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.description,
    type: "website",
    locale: "en",
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f3" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1815" },
  ],
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
        <ThemeProvider defaultTheme="light" enableSystem={false}>
          <a
            href="#work"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:ring-1 focus:ring-border"
          >
            Skip to work
          </a>
          <SiteHeader />
          <main id="top">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
