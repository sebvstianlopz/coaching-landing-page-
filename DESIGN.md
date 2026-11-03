---
name: Jan Medina · Coaching híbrido
description: A calm daylight gallery wall for a hybrid training coach; one deep green, light type, photographs carry the colour.
colors:
  sea-mist: "#eef1ee"
  mist-surface: "#e1e7e2"
  mist-surface-deep: "#cfd8d1"
  yunque-ink: "#141a16"
  moss-muted: "#4f5a53"
  yunque-green: "#2f4a36"
  yunque-green-press: "#233a2a"
  accent-ink: "#ffffff"
  forest-panel: "#24382b"
  forest-panel-ink: "#eef1ee"
  soft-on-forest: "#c7d3ca"
typography:
  display:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.75rem, 0.9rem + 6.6vw, 7.5rem)"
    fontWeight: 300
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 1.2rem + 2.4vw, 3.5rem)"
    fontWeight: 300
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.25rem, 1.15rem + 0.45vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.25rem, 1.15rem + 0.45vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)"
    fontWeight: 400
    lineHeight: 1.35
rounded:
  focus: "4px"
  frame: "16px"
  pill: "999px"
spacing:
  margin: "clamp(1.25rem, 5.2vw, 5.5rem)"
  gutter: "clamp(0.75rem, 1.8vw, 1.75rem)"
  section: "clamp(7rem, 14vw, 13rem)"
components:
  button-primary:
    backgroundColor: "{colors.yunque-green}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.yunque-green-press}"
    textColor: "{colors.accent-ink}"
  button-small:
    backgroundColor: "{colors.yunque-green}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.2rem"
    height: "2.75rem"
  button-light:
    backgroundColor: "{colors.forest-panel-ink}"
    textColor: "{colors.yunque-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "3.25rem"
  button-light-hover:
    backgroundColor: "{colors.accent-ink}"
    textColor: "{colors.yunque-ink}"
  photo-frame:
    backgroundColor: "{colors.mist-surface}"
    textColor: "{colors.moss-muted}"
    rounded: "{rounded.frame}"
  forest-panel:
    backgroundColor: "{colors.forest-panel}"
    textColor: "{colors.forest-panel-ink}"
    rounded: "{rounded.frame}"
    padding: "2.75rem 1.5rem 0"
  quote-card:
    backgroundColor: "{colors.mist-surface}"
    textColor: "{colors.yunque-ink}"
    typography: "{typography.lead}"
    rounded: "{rounded.frame}"
    padding: "1.75rem"
  slider-tag:
    backgroundColor: "{colors.yunque-ink}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.75rem"
  slider-knob:
    backgroundColor: "{colors.accent-ink}"
    textColor: "{colors.yunque-ink}"
    rounded: "{rounded.pill}"
    size: "3.25rem"
---

# Design System: Jan Medina · Coaching híbrido

## Overview

**Creative North Star: "The Daylight Print Wall"**

The page is a pale wall in morning light with photographs hung on it. Prints come in different sizes and aspect ratios (4:5, 3:4, 1:1, 16:10), sit off-centre on a 12-column grid, and some overlap their neighbours the way prints pinned to a wall do. The ground is a cool sea-mist neutral. A single deep forest green does all the accent work, and photographs of sea, sky and training supply the rest of the colour. Type is Hanken Grotesk: very large at weight 300 in sentence case, with small text kept quiet.

Density is low and the air is generous. Section gaps run up to 13rem, copy blocks stay narrow (22 to 46ch), and each viewport holds one idea. Depth comes from overlap and tonal steps, never from shadow. The one dark moment is a forest-green inset panel; the closing band and its button echo it.

The world rejects the category default for fitness pages: a dark gym page with red glow, stat cards and icon tiles.

**Key Characteristics:**
- Light, cool, calm ground; one green accent; colour comes from photographs.
- Light-weight display type at very large sizes, sentence case, tight negative tracking.
- Every photo and panel uses the same soft 16px corner; every button is a pill.
- Photos hang at uneven sizes and overlap; neighbouring frames differ in size or ratio.
- Flat surfaces, separated by tone steps instead of borders or shadows.
- The before/after slider is the signature interaction.

## Colors

A cool, low-chroma green-grey family on a pale ground, with one saturated-enough deep green and a near-black ink that leans green.

### Primary
- **El Yunque Green** (yunque-green): the only accent. Fills primary pill buttons, the active side of a sample before/after, the arch photo's empty ground, text selection and the focus outline. Never used for large text or decoration.
- **Pressed Yunque** (yunque-green-press): hover and active state for primary buttons only.
- **Forest Panel** (forest-panel): the ground of the one inset dark panel and of the closing band. Its ink is the sea-mist ground colour (forest-panel-ink), and secondary text on it uses Soft Fern (soft-on-forest).

### Neutral
- **Sea Mist** (sea-mist): page background and theme colour; also the light button fill on dark grounds.
- **Mist Surface** (mist-surface): one step darker. Used for empty photo frames, the quote card, the FAQ band and the footer side.
- **Deep Mist** (mist-surface-deep): two steps darker. Used for the before/after ground, the "before" sample side, and the second photo in a stacked pair, so an overlapping frame reads apart from the one under it.
- **Yunque Ink** (yunque-ink): all body and heading text on light grounds; also the fill of the slider's Antes/Después tags.
- **Moss Muted** (moss-muted): captions, figure descriptions, legal text and the labels inside empty photo slots.
- **White** (accent-ink): text on green buttons, the slider divider and knob, and the hover state of the light button.

### Named Rules
**The One Green Rule.** El Yunque green is the only hue in the system that is not neutral. A second accent colour is never added; photographs supply colour.

**The Tone-Step Rule.** Neighbouring surfaces separate by stepping down the mist ramp (sea-mist, mist-surface, mist-surface-deep), never with a border.

## Typography

**Display Font:** Hanken Grotesk 300 (with system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Hanken Grotesk 400, with 500 for buttons, the wordmark and `strong`
**Label Font:** Hanken Grotesk 400 at the small step

**Character:** one grotesque family across three self-hosted weights. The calm comes from very large, very light letters, and from leaving everything else small and plain.

### Hierarchy
The build defines five fluid size steps as tokens. Display, headline and lead share a step with other roles; the frontmatter is normative for exact values.
- **Display** (300, display step, line-height 0.98, tracking -0.035em): the hero headline only, broken into deliberate lines.
- **Headline** (300, headline step, line-height 1.04, tracking -0.03em): section titles. The same step at weight 300 also sets the large numbers in the figures list, the footer menu links, and the sample words inside the before/after slider.
- **Title** (400, lead step, line-height 1.25 to 1.3, tracking -0.01em): sub-heads inside the panel and transformation case names.
- **Lead** (400, lead step, line-height 1.4): the hero supporting line, quotes, FAQ questions, fact lists and slider remarks.
- **Body** (400, body step, line-height 1.55): running copy, kept to 34 to 46ch.
- **Label** (400, small step, line-height 1.3 to 1.35): nav links, the small nav button, captions, slider tags, footer blocks and legal text. Sentence case, no extra tracking.

### Named Rules
**The Light-at-Scale Rule.** Headings at headline size and above are weight 300 with negative tracking. Weight 500 is for buttons, the wordmark and inline emphasis only.

**The Sentence-Case Rule.** No uppercase labels or tracked-out small caps anywhere. Small text stays quiet: small step, regular weight, muted or ink colour.

## Layout

Mobile first, with one breakpoint at 52em. Below it, sections stack in one column inside a fluid side margin, and photos stagger by width (100%, 62%, 78%, 70%) and alternate left and right alignment. At 52em and above, every section becomes a 12-column grid with a fluid gutter, and photos and copy take uneven column spans (for example a 4:5 portrait across columns 7 to 11 with a square print across 2 to 4).

Overlap is a layout tool. It comes from negative margins (the hero square crosses the portrait's lower-left corner on desktop and overlaps it on phones, the arch photo drops off the panel's bottom edge, the second transformation rises beside the first). In "Cómo empezamos" a single photo is pinned (`position: sticky`) beside the steps instead of overlapping.

Rhythm: sections are separated by the section-gap token (7 to 13rem). Inside sections, gaps step through 0.75, 1.25, 1.75, 2.5 and 3.5 to 4.5rem. The two dark blocks (panel and closing band) are inset from the viewport by 0.625rem on phones and 1.25rem on desktop, so they read as framed prints rather than full-bleed bands. The closing photo is the only full-bleed image. The FAQ and the footer are text only, on the Mist Surface tone.

The page respects safe-area insets on the side margins and the bottom dock. On phones, a fixed WhatsApp dock slides up from the bottom once the hero button leaves view; it is hidden on desktop.

## Elevation & Depth

The system is flat: there is no `box-shadow` anywhere. Depth comes from overlapping frames, from tone steps on the mist ramp, and from stacking order (a smaller print sits above a larger one). The only gradient is a neutral dark scrim at the foot of the closing photograph, there so light text stays legible over a real photo. It is not an elevation device.

### Named Rules
**The Pinned-Print Rule.** When a surface needs to read as in front of another, overlap it and step its tone. Never add a shadow.

## Shapes

One soft corner: photos, the inset panel, the closing band, the quote card and the before/after frame all use the frame radius (16px). Buttons, slider tags and the slider knob are full pills or circles. The focus outline uses a small 4px corner.

The one exception to the frame corner is the arch: inside the forest panel, the main photo has a tall rounded top and a square base (`999px 999px 0 0 / 46% 46% 0 0`), cropped by the panel's bottom edge. It recalls the doors and windows of Old San Juan, and it appears once.

The full-bleed closing photo has no corner radius of its own, because it fills a rounded container.

There are no borders or hairline rules. The only drawn lines are functional: the slider's 3px white divider, the 2px chevron strokes on FAQ items, and 1px text-link underlines.

## Components

### Buttons
Calm, solid pills with a gentle press.
- **Shape:** full pill (999px), minimum height 3.25rem (2.75rem for the small variant), no border.
- **Primary:** El Yunque green fill with white text, weight 500, body step, padding 0 1.6rem.
- **Light:** sea-mist fill with ink text. Used only on forest-green grounds (the panel and the closing band); it turns white on hover.
- **Small:** primary styling at the small step, padding 0 1.2rem. Used for the top-right nav action.
- **Hover / Active:** hover (fine pointers only) darkens to Pressed Yunque in 180ms. Active scales to 0.97 in 140ms on an ease-out curve and darkens.
- **Focus:** 2px El Yunque outline with a 3px offset, switching to the sea-mist ink on dark grounds.
- **Dock:** on phones, a full-width primary pill fixed to the bottom.

### Text links
- **Inline link:** no underline at rest; a 1px underline fades in on hover, offset 0.25em.
- **Plain link** (the secondary action next to a button): always underlined, dims to 0.7 opacity on hover. Minimum height 2.75rem.

### Photo frame
The base unit of the wall.
- **Corner Style:** frame radius (16px), clipped content, image object-fit cover.
- **Background:** Mist Surface, or Deep Mist for the smaller print in an overlapping pair, or El Yunque green for the arch.
- **Empty state:** until a file exists in `assets/fotos/`, the frame shows its tone with a small muted caption at the bottom naming the slot, aspect ratio and file name. This is a durable state of the system, not a placeholder to style away.
- **Aspect ratios:** 4:5, 3:4, 1:1 and 16:10, mixed deliberately.

### Forest panel
The one dark inset block.
- Forest Panel ground, sea-mist ink, frame radius, inset from the viewport edge. Holds a headline, short title-and-body blocks in Soft Fern, a light pill button and the arch photo cropped by its bottom edge. On desktop it is at least 110svh tall.
- The closing band reuses the same ground and inset, with a full-bleed photo, a neutral scrim and a light pill button.

### Quote card
- Mist Surface ground, frame radius, padding 1.75rem, maximum width 26rem. The quote is set in lead, and the attribution in muted label.

### Accordion (FAQ)
- Native disclosure rows with no dividers. The question is set at the lead step with a 2.75rem minimum height. A two-stroke chevron drawn with 2px bars rotates over 240ms when a row opens, and the answer rises in over 260ms.

### Navigation
- The wordmark (500, body step) and inline label-size links sit top left; links appear only at 52em and above. The small solid pill sits top right as the only filled element in the nav.
- **Footer menu:** headline-size, weight-300 links. On hover, siblings dim to muted and the hovered link slides 12px right.

### Before/after slider (signature)
- A 4:5 frame with the frame radius on a Deep Mist ground. The "after" image fills it, and the "before" image is clipped from the right by `clip-path`.
- **Handle:** a 3px white vertical divider with a 3.25rem white circular knob holding an inline SVG double chevron in ink. The knob grows to 1.06 on hover and shrinks to 0.9 while dragging.
- **Tags:** ink pills reading "Antes" and "Después" in the top corners, set in white label type.
- **Input:** a visually hidden range input drives it, for keyboard and screen readers. The whole frame shows a 2px El Yunque focus outline with a 4px offset. Touch pans vertically and drags horizontally.
- **Sample state:** without real photos, each side shows a headline-size word on a solid ground (Deep Mist for before, El Yunque for after), and the tags hide.

### Motion
- Easing tokens: ease-out `cubic-bezier(0.22, 1, 0.36, 1)` for most transitions, ease-soft `cubic-bezier(0.33, 1, 0.68, 1)` for photo settles. Durations: 140ms press, 180ms hover, 240ms UI, 800ms reveal.
- Headlines rise 18px and fade in with a 90ms stagger. Content reveals 24px on scroll. Photos settle from a 0.985 scale. The hero portrait settles from 1.04 and slowly crossfades (1600ms) between portraits when more than one is supplied.
- Content stays visible without JavaScript. Under reduced motion, reveals become opacity-only fades and the crossfade stops.

## Do's and Don'ts

### Do:
- **Do** use the 16px frame radius on every photo, panel, card and slider frame, and full pills for every button and tag.
- **Do** hang photos at uneven widths and mixed aspect ratios (4:5, 3:4, 1:1, 16:10), overlapping a smaller print onto a larger one with negative margins.
- **Do** separate surfaces by stepping the mist ramp (sea-mist, mist-surface, mist-surface-deep).
- **Do** set headings at weight 300 in sentence case with negative tracking (-0.03em to -0.035em).
- **Do** keep El Yunque green for actions, focus, selection and the single forest panel.
- **Do** inset dark blocks from the viewport (0.625rem on phones, 1.25rem on desktop) so they read as framed.
- **Do** keep labelled empty photo frames working until real photos exist.

### Don't:
- **Don't** add `box-shadow` or glow to any surface; overlap and tone carry depth.
- **Don't** add borders, hairline dividers or rules between sections, cards or FAQ rows. Functional strokes (the slider divider, the chevron, link underlines) are the only lines.
- **Don't** introduce a second accent hue, a red glow or a dark full-page theme.
- **Don't** use uppercase or letter-spaced labels, eyebrows above headings, or stat cards and icon tiles.
- **Don't** repeat the arch outside the forest panel; it appears once.
- **Don't** use weights other than 300, 400 and 500, or a family other than Hanken Grotesk.
