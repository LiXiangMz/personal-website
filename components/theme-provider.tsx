/**
 * Theme provider.
 *
 * The site is light-only: photographs are set against warm paper and there is
 * no dark counterpart. The provider is kept because the shadcn scaffold expects
 * one, but it forces `light`, ignores the system preference and — deliberately
 * — ships no keyboard shortcut: the template's bare `d` toggle changed the
 * whole site on an accidental keypress and persisted it, with no visible way
 * back.
 *
 * `forcedTheme` rather than `defaultTheme` alone: `next-themes` reads
 * `localStorage[key]` before the default, so a visitor who ran an earlier build
 * (or pressed the old `d` key) still carries `theme=dark` and would otherwise
 * land on `color-scheme: dark` — dark native scrollbars and form controls on a
 * light page. Forcing it also leaves the stored value untouched.
 * --- @ty.aicoding@1794555148069 ---
 */
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

export { ThemeProvider }
