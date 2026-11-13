/**
 * The single route of the site. Sections are composed in reading order —
 * introduction, work, about, pricing, contact — so the page works as one scroll
 * with the header links acting as a contents list.
 * --- @ty.aicoding@1794387391782 ---
 */
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Hero } from "@/components/sections/hero"
import { Pricing } from "@/components/sections/pricing"
import { Work } from "@/components/sections/work"

export default function Page() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Pricing />
      <Contact />
    </>
  )
}
