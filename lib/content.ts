/**
 * All editable site copy lives here.
 *
 * Everything marked "Placeholder" is scaffolding to be replaced by the owner:
 * the photographer's name, the biography, the email address, the client list
 * and every photograph under `assets/photos/`. Section copy is written to be
 * read as-is until then.
 *
 * Section headings, table headers and link labels live here too, next to the
 * copy they belong with — the components hold layout only. The work-section
 * count and year range are derived from `works`, so adding or removing a
 * photograph keeps that line true.
 * --- @ty.aicoding@1794535335110 ---
 */
import type { StaticImageData } from "next/image"

import heroImage from "@/assets/photos/hero.jpg"
import portraitImage from "@/assets/photos/portrait.jpg"
import work01 from "@/assets/photos/work-01.jpg"
import work02 from "@/assets/photos/work-02.jpg"
import work03 from "@/assets/photos/work-03.jpg"
import work04 from "@/assets/photos/work-04.jpg"
import work05 from "@/assets/photos/work-05.jpg"
import work06 from "@/assets/photos/work-06.jpg"
import work07 from "@/assets/photos/work-07.jpg"
import work08 from "@/assets/photos/work-08.jpg"

export type Section = {
  id: string
  label: string
}

export type Photograph = {
  src: StaticImageData
  alt: string
  title: string
  place: string
  year: string
  /** Grid placement only — keeps the column rhythm. */
  cell: string
  /** Crop of the frame itself, applied to the image box under the caption. */
  frame: string
  /** Placeholder source, kept next to the frame it belongs to. */
  placeholder: string
}

export type PriceTier = {
  name: string
  covers: string
  detail: string
  fee: string
  unit: string
}

/** Placeholder identity — replace with the owner's real name and address.
 * --- @ty.aicoding@1794558527385 ---
 */
export const site = {
  name: "Alex Morgan",
  wordmark: "Alex Morgan",
  role: "Landscape & commission photography",
  tagline: "Light, held still.",
  email: "hello@example.com",
  location: "Shanghai, working wherever the light is",
  /** Placeholder domain — used for canonical URLs and social cards. */
  url: "https://alexmorgan.example",
  description:
    "Landscape and commission photography by Alex Morgan — coastlines, forests and weather, photographed in the first and last hours of daylight.",
  year: 2026,
}

export const sections: Section[] = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
]

export const hero = {
  image: heroImage,
  alt: "Placeholder: low sun over a wide field, long shadows across the grass",
  caption: "Field study, late summer — placeholder image",
  intro:
    "Coastlines, forests and weather, photographed in the first and last hours of daylight.",
  workLink: "Selected work",
}

export const about = {
  image: portraitImage,
  alt: "Placeholder: portrait of the photographer outdoors",
  heading: "I photograph the quiet end of the day.",
  paragraphs: [
    "I work on coastlines, in forests and in weather — usually in the two hours after sunrise or before dusk, when the land stops performing and settles into itself. Most of what I keep is a record of that short window: still water, low cloud, a field after rain.",
    "I studied painting before I picked up a camera, and it shows. I compose slowly, print large, and would rather make twelve photographs that hold up on a wall than a thousand that only work on a phone.",
    "Commissions are mostly landscape and place: hotels and retreats, architecture in its setting, editorial features about land and travel, and the occasional portrait made outdoors.",
  ],
  facts: [
    { term: "Subjects", detail: "Coast, forest, weather, land in use" },
    { term: "Based", detail: "Shanghai; travels for commissions" },
    { term: "Prints", detail: "Archival pigment, editions of 15" },
    { term: "Formats", detail: "Digital and 4×5 film" },
  ],
}

export const works: Photograph[] = [
  {
    src: work01,
    alt: "Placeholder: mist sitting in a valley between dark ridges",
    title: "Valley, before the sun",
    place: "Anhui",
    year: "2025",
    cell: "sm:col-span-7",
    frame: "aspect-[8/5]",
    placeholder: "work-01.jpg — replace with a landscape frame, 8:5",
  },
  {
    src: work02,
    alt: "Placeholder: dense green forest after rain",
    title: "After rain",
    place: "Zhejiang",
    year: "2025",
    cell: "sm:col-span-4 sm:col-start-9",
    frame: "aspect-[3/4]",
    placeholder: "work-02.jpg — replace with a vertical frame, 3:4",
  },
  {
    src: work03,
    alt: "Placeholder: still lake reflecting a pale sky",
    title: "Still water, no wind",
    place: "Yunnan",
    year: "2024",
    cell: "sm:col-span-5",
    frame: "aspect-[4/5]",
    placeholder: "work-03.jpg — replace with a vertical frame, 4:5",
  },
  {
    src: work04,
    alt: "Placeholder: snow-covered ridge under a break in the cloud",
    title: "Ridge line",
    place: "Sichuan",
    year: "2024",
    cell: "sm:col-span-6 sm:col-start-7",
    frame: "aspect-[16/9]",
    placeholder: "work-04.jpg — replace with a wide frame, 16:9",
  },
  {
    src: work05,
    alt: "Placeholder: single tree in an open field at dusk",
    title: "One tree, last light",
    place: "Inner Mongolia",
    year: "2024",
    cell: "sm:col-span-6",
    frame: "aspect-[16/11]",
    placeholder: "work-05.jpg — replace with a landscape frame, 16:11",
  },
  {
    src: work06,
    alt: "Placeholder: long grass moving in evening wind",
    title: "Wind across the field",
    place: "Inner Mongolia",
    year: "2023",
    cell: "sm:col-span-5 sm:col-start-8",
    frame: "aspect-[16/11]",
    placeholder: "work-06.jpg — replace with a landscape frame, 16:11",
  },
  {
    src: work07,
    alt: "Placeholder: pale sky over a shoreline at low tide",
    title: "Tide line",
    place: "Fujian",
    year: "2023",
    cell: "sm:col-span-4",
    frame: "aspect-[3/4]",
    placeholder: "work-07.jpg — replace with a vertical frame, 3:4",
  },
  {
    src: work08,
    alt: "Placeholder: road disappearing into low cloud",
    title: "Road into cloud",
    place: "Guizhou",
    year: "2023",
    cell: "sm:col-span-7 sm:col-start-6",
    frame: "aspect-[4/5]",
    placeholder: "work-08.jpg — replace with a vertical frame, 4:5",
  },
]

/**
 * Span of `year` across the given photographs, for the line above the grid.
 * Returns an empty string when no entry carries a parsable year.
 * --- @ty.aicoding@1794550723086 ---
 */
function yearRange(list: Photograph[]) {
  const years = list
    .map((work) => Number.parseInt(work.year, 10))
    .filter((year) => Number.isFinite(year))

  if (years.length === 0) {
    return ""
  }

  const first = Math.min(...years)
  const last = Math.max(...years)

  return first === last ? `${first}` : `${first}—${last}`
}

/**
 * Heading and the small line above the grid. The count and the year span are
 * derived from `works`, so adding or removing a photograph keeps them true.
 * With no parsable years the line stops after the count rather than trailing a
 * dangling separator.
 * --- @ty.aicoding@1794550723086 ---
 */
function summaryLine(list: Photograph[]) {
  const count = `${list.length} ${list.length === 1 ? "photograph" : "photographs"}`
  const range = yearRange(list)

  return range ? `${count}, ${range}` : count
}

/**
 * Heading and the small line above the grid.
 * --- @ty.aicoding@1794550723086 ---
 */
export const workSection = {
  heading: "Selected work",
  summary: summaryLine(works),
}

export const pricing = {
  heading: "Pricing",
  caption: "Session types, what each covers and the fee",
  columns: {
    session: "Session",
    includes: "Includes",
    fee: "Fee",
  },
  cta: "Ask about a date",
  intro:
    "Three ways to work together. Fees below are for photography and editing; travel outside Shanghai is quoted at cost, and licensing is agreed in writing before the shoot.",
  tiers: [
    {
      name: "Half day",
      covers: "Four hours, one location",
      detail: "25 edited frames, delivered in 10 working days",
      fee: "¥6,000",
      unit: "per session",
    },
    {
      name: "Full day",
      covers: "Eight hours, up to two locations",
      detail: "60 edited frames, delivered in 15 working days",
      fee: "¥11,000",
      unit: "per session",
    },
    {
      name: "Commission",
      covers: "Editorial, hospitality, architecture in place",
      detail: "Day rate, usage and exclusivity quoted together",
      fee: "On request",
      unit: "project",
    },
  ] satisfies PriceTier[],
  notes: [
    "A 50% deposit holds the date; the balance is due on delivery.",
    "Frames are delivered as high-resolution files with a print-ready set.",
    "Prints are sold separately, in editions of 15, from ¥2,400.",
  ],
}

export const contact = {
  heading: "Tell me about the place.",
  body: "Send a few lines about the project — where it is, roughly when, and what the photographs need to do. I answer every enquiry within two working days.",
  channels: [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Studio", value: "Shanghai, by appointment" },
    { label: "Prints", value: "Editions and sizes on request" },
  ],
}
