# Xiang Li — photography portfolio

A single-page portfolio for a landscape and commission photographer: an
introduction, a curated set of photographs, an about section, a pricing table
and a contact block with a plain `mailto:` link.

Built with Next.js (App Router) and Tailwind CSS on a shadcn/ui preset
template. The template is committed verbatim in `00d74f2`; the site itself is
the commit that follows it.

## Running it

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm start      # serve the production build
pnpm lint
pnpm typecheck
```

## Where things live

| Path | What it holds |
| --- | --- |
| `lib/content.ts` | **All copy and photo references.** Name, email, biography, works, pricing tiers, contact details. |
| `assets/photos/` | The photographs, imported by `lib/content.ts` and optimised by `next/image`. |
| `components/sections/` | One file per section: `hero`, `work`, `about`, `pricing`, `contact`. |
| `components/site-header.tsx` | The sticky hairline header and its section links. |
| `components/site-footer.tsx` | Name, role, email, year. |
| `app/globals.css` | Colour tokens, the type scale, and the two small utilities (`label-caps`, `rule-line`). |
| `app/fonts.ts` | Self-hosted Cormorant Garamond and Inter. |
| `app/layout.tsx` | Metadata, fonts, theme provider, header/footer frame. |

## Replacing the placeholder photographs

Every image currently in `assets/photos/` is a stand-in. Replace the file and
keep the name, or change the import in `lib/content.ts` — either way nothing
else needs to move.

| File | Used for | Crop it is displayed at |
| --- | --- | --- |
| `hero.jpg` | Full-bleed opening frame | 3:2 landscape (4:5 on phones) |
| `portrait.jpg` | About section portrait | 3:4 vertical |
| `work-01.jpg` | Selected work, frame 1 | 8:5 landscape |
| `work-02.jpg` | Selected work, frame 2 | 3:4 vertical |
| `work-03.jpg` | Selected work, frame 3 | 4:5 vertical |
| `work-04.jpg` | Selected work, frame 4 | 16:9 landscape |
| `work-05.jpg` | Selected work, frame 5 | 16:11 landscape |
| `work-06.jpg` | Selected work, frame 6 | 16:11 landscape |
| `work-07.jpg` | Selected work, frame 7 | 3:4 vertical |
| `work-08.jpg` | Selected work, frame 8 | 4:5 vertical |

Alongside each file, three things in `lib/content.ts` describe it and should be
updated at the same time:

- `alt` — what the photograph shows, for screen readers. It currently starts
  with `"Placeholder:"`.
- `title`, `place`, `year` — the caption under the frame.
- `placeholder` — the note naming the file and its crop; this is also the React
  key for the list item.

`hero.caption` under the opening image and `hero.alt` carry the same
placeholder wording. The `works` list uses `cell` for where a frame sits in the
twelve-column grid and `frame` for its crop; change `cell` only if you want a
different column rhythm.

## Replacing the rest of the copy

`site` in `lib/content.ts` holds the name, wordmark, role line, tagline, email
address, location and the meta description. The email address appears in five
places on the page — hero, pricing, the large contact link, the footer, and the
contact channel list — all reading from `site.email`, so one edit covers them
all.

Prices live in `pricing.tiers` (`fee` and `unit` are displayed as-is, so any
currency works) and the three lines under the table in `pricing.notes`.
