/**
 * Self-hosted typography.
 *
 * The template shipped with Google's Outfit + Oxanium pipeline. For a
 * photography portfolio those geometric sans faces compete with the images,
 * so they are replaced here with a two-voice pairing that is fetched at build
 * time and served from our own origin:
 *
 * - Cormorant Garamond (300) — display voice: name, section titles, figure
 *   numbers. A high-contrast old-style serif that reads calmly at large sizes.
 * - Inter (variable) — text voice: navigation, captions, body copy, prices.
 *   Neutral and legible at 13–16px where the serif would get fussy.
 *
 * Latin subset only; the copy is English, so no CJK face is loaded.
 * --- @ty.aicoding@1794386907436 ---
 */
import localFont from "next/font/local"

const cormorant = localFont({
  src: [
    {
      path: "./fonts/cormorant-garamond-300.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/cormorant-garamond-300-italic.woff2",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-heading",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
})

const inter = localFont({
  src: [
    {
      path: "./fonts/inter-var.woff2",
      weight: "300 600",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
})

export { cormorant, inter }
