/**
 * Theme provider.
 *
 * The site is light-only: photographs are set against warm paper and there is
 * no dark counterpart. The provider is kept because the shadcn scaffold expects
 * one, but it pins `light`, ignores the system preference and — deliberately —
 * ships no keyboard shortcut: the template's bare `d` toggle changed the whole
 * site on an accidental keypress and persisted it, with no visible way back.
 * --- @ty.aicoding@1794550802814 ---
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
      enableSystem={false}
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

export { ThemeProvider }
