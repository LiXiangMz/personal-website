/**
 * Pricing.
 *
 * Placed between the introduction and the contact block, because the decision
 * to write usually follows the decision about budget. Presented as a table
 * with real table semantics — a header row naming what is being compared, one
 * row per tier, the fee right-aligned in figures — and without cards, badges or
 * a highlighted "most popular" column. The three notes underneath answer the
 * questions the numbers raise.
 * --- @ty.aicoding@1794387370422 ---
 */
import { pricing, site } from "@/lib/content"

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-[87.5rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2
              id="pricing-title"
              className="font-heading text-3xl font-light tracking-[-0.01em] sm:text-4xl"
            >
              Pricing
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {pricing.intro}
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Session types, what each covers and the fee
              </caption>
              <thead>
                <tr className="border-b border-foreground/25">
                  <th scope="col" className="label-caps pb-3 text-muted-foreground">
                    Session
                  </th>
                  <th
                    scope="col"
                    className="label-caps hidden pb-3 text-muted-foreground sm:table-cell"
                  >
                    Includes
                  </th>
                  <th
                    scope="col"
                    className="label-caps pb-3 text-right text-muted-foreground"
                  >
                    Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricing.tiers.map((tier) => (
                  <tr
                    key={tier.name}
                    className="border-b border-border align-top"
                  >
                    <th scope="row" className="py-6 pr-4 font-normal">
                      <span className="font-heading text-xl leading-tight font-light">
                        {tier.name}
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {tier.covers}
                      </span>
                      <span className="mt-2 block text-sm text-muted-foreground sm:hidden">
                        {tier.detail}
                      </span>
                    </th>
                    <td className="hidden py-6 pr-4 text-sm leading-relaxed text-muted-foreground sm:table-cell">
                      {tier.detail}
                    </td>
                    <td className="py-6 text-right whitespace-nowrap">
                      <span className="font-heading text-xl font-light tabular-nums">
                        {tier.fee}
                      </span>
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {tier.unit}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {pricing.notes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span aria-hidden className="text-accent">
                    —
                  </span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm">
              <a
                href={`mailto:${site.email}?subject=Commission%20enquiry`}
                className="border-b border-foreground/30 pb-1 transition-colors hover:border-foreground"
              >
                Ask about a date
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
