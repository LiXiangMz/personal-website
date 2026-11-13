/**
 * Selected work.
 *
 * An asymmetric twelve-column grid rather than a uniform three-up: each frame
 * keeps its native crop, columns offset, and the vertical rhythm varies, which
 * is how a portfolio looks pinned to a wall. The cell decides only where a
 * frame sits; the frame itself carries the crop, so the caption sits directly
 * under the image at its own height. Captions are small and set under the
 * image, aligned to its outer edge.
 *
 * The heading and the "n photographs, years" line come from `lib/content.ts`,
 * where the line is derived from `works` rather than written by hand.
 * --- @ty.aicoding@1794535455860 ---
 */
import Image from "next/image"

import { workSection, works } from "@/lib/content"
import { cn } from "@/lib/utils"

/**
 * Grid cell width as a fraction of the twelve-column band, so `next/image`
 * asks for a file that matches the frame it is drawn into: a seven-column
 * frame on a 1400px container is roughly 58vw, a four-column one about 33vw.
 */
function frameSizes(cell: string) {
  const span = Number.parseInt(cell.match(/col-span-(\d+)/)?.[1] ?? "12", 10)

  return `(min-width: 640px) ${Math.round((span / 12) * 100)}vw, 100vw`
}

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-20">
      <div className="mx-auto max-w-[87.5rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-baseline sm:justify-between">
          <h2
            id="work-title"
            className="font-heading text-3xl font-light tracking-[-0.01em] sm:text-4xl"
          >
            {workSection.heading}
          </h2>
          <p className="label-caps text-muted-foreground">
            {workSection.summary}
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:mt-14 sm:grid-cols-12 sm:gap-x-8 sm:gap-y-20">
          {works.map((work) => (
            <li key={work.placeholder} className={cn("group", work.cell)}>
              <figure>
                <div
                  className={cn(
                    "relative w-full overflow-hidden bg-muted",
                    work.frame
                  )}
                >
                  <Image
                    src={work.src}
                    alt={work.alt}
                    fill
                    sizes={frameSizes(work.cell)}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                  <span className="font-heading text-lg leading-tight font-light">
                    {work.title}
                  </span>
                  <span className="shrink-0 label-caps text-muted-foreground">
                    {work.place} · {work.year}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
