/**
 * Opening screen.
 *
 * The name is set large in Cormorant and left-aligned against a wide left
 * margin, with a single italic line beneath it and the practical sentence
 * (what I shoot, where) in small sans. The photograph then runs full-bleed,
 * edge to edge, so the first thing a visitor meets is a picture rather than a
 * card — the caption sits below it, aligned back to the text column.
 *
 * All of the wording comes from `lib/content.ts`; this file holds the layout.
 * --- @ty.aicoding@1794535442805 ---
 */
import Image from "next/image"
import Link from "next/link"

import { hero, site } from "@/lib/content"

export function Hero() {
  return (
    <section aria-labelledby="hero-name">
      <div className="mx-auto max-w-[87.5rem] px-5 pt-14 pb-10 sm:px-8 sm:pt-20 sm:pb-14 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <p className="label-caps text-accent">{site.role}</p>
            <h1
              id="hero-name"
              className="mt-5 font-heading text-[clamp(2.75rem,7.5vw,6.5rem)] leading-[0.92] font-light tracking-[-0.015em] text-balance"
            >
              {site.name}
            </h1>
            <p className="mt-4 font-heading text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-light text-muted-foreground italic">
              {site.tagline}
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {hero.intro} {site.location}.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link
                href="#work"
                className="group inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm transition-colors hover:border-foreground"
              >
                {hero.workLink}
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                >
                  ↓
                </span>
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <figure>
        <div className="relative aspect-[4/5] w-full sm:aspect-[3/2]">
          <Image
            src={hero.image}
            alt={hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mx-auto flex max-w-[87.5rem] items-baseline justify-between gap-6 px-5 pt-3 sm:px-8 lg:px-12">
          <span className="label-caps text-muted-foreground">
            {hero.caption}
          </span>
          <span className="hidden label-caps text-muted-foreground sm:block">
            {site.location}
          </span>
        </figcaption>
      </figure>
    </section>
  )
}
