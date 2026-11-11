/**
 * Introduction.
 *
 * A portrait held in a narrow column with generous white space beneath it, and
 * the biography set at a comfortable reading measure beside it — the only
 * section on the page with continuous prose, so it gets the widest line length
 * and the most air.
 * --- @ty.aicoding@1794387360231 ---
 */
import Image from "next/image"

import { about } from "@/lib/content"

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-20 border-t border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-[87.5rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
              <Image
                src={about.image}
                alt={about.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <dl className="mt-8 grid grid-cols-1 gap-y-4 border-t border-border pt-6">
              {about.facts.map((fact) => (
                <div key={fact.term} className="flex justify-between gap-6">
                  <dt className="label-caps text-muted-foreground">
                    {fact.term}
                  </dt>
                  <dd className="text-right text-sm">{fact.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <h2
              id="about-title"
              className="font-heading text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.1] font-light tracking-[-0.01em] text-balance"
            >
              {about.heading}
            </h2>
            <div className="mt-7 max-w-[38rem] space-y-5 text-[0.975rem] leading-[1.75] text-muted-foreground">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-pretty">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
