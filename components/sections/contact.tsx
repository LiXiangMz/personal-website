/**
 * Contact.
 *
 * One large email link, set in the display face, is the whole point of the
 * section — it is the biggest type on the page after the name, and it is a real
 * `mailto:`. The two practical lines beside it answer "where" and "prints"
 * without turning into a form.
 * --- @ty.aicoding@1794387380929 ---
 */
import { contact, site } from "@/lib/content"

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-[87.5rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2
              id="contact-title"
              className="font-heading text-3xl font-light tracking-[-0.01em] sm:text-4xl"
            >
              {contact.heading}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              {contact.body}
            </p>
            <p className="mt-10">
              <a
                href={`mailto:${site.email}`}
                className="inline-block font-heading text-[clamp(1.5rem,4.2vw,2.75rem)] leading-none font-light break-all underline decoration-border decoration-1 underline-offset-[0.3em] transition-colors hover:decoration-foreground"
              >
                {site.email}
              </a>
            </p>
          </div>

          <dl className="lg:col-span-4 lg:col-start-9">
            {contact.channels.map((channel) => (
              <div
                key={channel.label}
                className="flex flex-col gap-1 border-b border-border py-4 first:border-t"
              >
                <dt className="label-caps text-muted-foreground">
                  {channel.label}
                </dt>
                <dd className="text-sm">
                  {"href" in channel && channel.href ? (
                    <a
                      href={channel.href}
                      className="transition-colors hover:text-accent"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    channel.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
