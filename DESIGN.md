---
name: Jan Medina · Coaching híbrido
description: A bright daylight gallery wall for a hybrid training coach; white ground, one sky-blue family, navy ink, photographs carry the rest.
colors:
  white: "#ffffff"
  sky-wash: "#f5fafd"
  sky-pale: "#e0f2fe"
  sky-light: "#bae6fd"
  sky: "#38bdf8"
  sky-button: "#0891d1"
  sky-deep: "#0284c7"
  navy-ink: "#0f172a"
  ink-soft: "#334155"
  slate-muted: "#64748b"
  closing-ink: "#f0f9ff"
  soft-on-dark: "#cbd5e1"
typography:
  display:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.3rem, 1.1rem + 4.4vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.03
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
  button:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 700
    letterSpacing: "0.005em"
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
    backgroundColor: "{colors.sky-button}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.sky-deep}"
    textColor: "{colors.white}"
  button-cta:
    backgroundColor: "{colors.sky-button}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 1.9rem"
    height: "3.5rem"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "3.25rem"
  button-light-hover:
    backgroundColor: "{colors.sky-wash}"
    textColor: "{colors.navy-ink}"
  button-outline:
    textColor: "{colors.navy-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.3rem"
    height: "2.75rem"
  button-outline-hover:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.white}"
  social-icon:
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.pill}"
    size: "2.75rem"
  social-icon-hover:
    backgroundColor: "{colors.sky-pale}"
    textColor: "{colors.sky-deep}"
  photo-frame:
    backgroundColor: "{colors.sky-wash}"
    textColor: "{colors.slate-muted}"
    rounded: "{rounded.frame}"
  sky-panel:
    backgroundColor: "{colors.sky-light}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.frame}"
    padding: "2.75rem 1.5rem 1.5rem"
  numbers-band:
    backgroundColor: "{colors.sky-pale}"
    textColor: "{colors.navy-ink}"
  quote-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.lead}"
    rounded: "{rounded.frame}"
    padding: "1.75rem"
  closing-band:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.closing-ink}"
    rounded: "{rounded.frame}"
---

# Design System: Jan Medina · Coaching híbrido

## Overview

**Creative North Star: "The Daylight Print Wall"**

The page is a white wall in full daylight with photographs hung on it. Prints come in different sizes and aspect ratios, sit off-centre on a 12-column grid, and some overlap or hang at staggered heights the way prints pinned to a wall do. The ground is plain white. One sky-blue family does all the colour work, from a pale wash through a light sky panel to the deeper blue of the buttons, and navy ink carries the text. Photographs of Jan, his clients, sea and training supply everything else. Type is Hanken Grotesk: large and light in sentence case, with small text kept quiet and bold kept for buttons alone.

Density is low and the air is generous. Section gaps run up to 13rem, copy blocks stay narrow (22 to 46ch), and each viewport holds one idea. Depth comes from tone steps and overlap, never from shadow. The hero is the one atmospheric moment: white fading to sky with a soft glow, thin drifting sky lines behind a cutout of Jan. After it the page goes back to flat white, pale-sky bands, one light-sky panel, and a navy closing band.

The world rejects the category default for fitness pages: a dark gym page with red glow, stat cards and icon program tiles.

**Key Characteristics:**
- White ground; one sky-blue family; navy ink; colour comes from photographs.
- Large, light display type in sentence case with tight negative tracking; bold only on buttons.
- Every photo and panel uses the same soft 16px corner; every button is a pill.
- Photos hang at uneven sizes and staggered heights; neighbouring frames differ in size or position.
- Flat surfaces, separated by sky tone steps instead of borders or shadows.
- The hero's thin, slowly drifting sky wave lines behind Jan's cutout are the signature.

## Colors

A white ground, a single sky-blue family stepping from pale wash to deep button blue, and a cool navy-and-slate ink set.

### Primary
- **Button Sky** (sky-button): the fill of every solid pill button, the text-selection background and the "after" side of a sample slider. Chosen deeper than Sky so white bold 19px button text holds 3.5:1, the large-text threshold.
- **Deep Sky** (sky-deep): hover and pressed state of solid buttons, the social-icon hover colour, and the focus ring (about 4:1 on white, 3:1 on the light panel).
- **Sky** (sky): the line colour. Hero wave strokes, the nav-link hover underline and the scroll-indicator dot. Never used for text or fills.

### Secondary
- **Light Sky** (sky-light): the ground of the one inset panel, and the foot of the hero gradient.
- **Pale Sky** (sky-pale): the numbers band, the empty panel-photo and slider ground, the social-icon hover fill, and the middle of the hero gradient.
- **Sky Wash** (sky-wash): the quiet bands (FAQ and footer), empty photo frames, and the light button's hover.

### Neutral
- **White** (white): page ground and theme colour, the quote card on the pale band, the light button on sky and navy grounds, and text on solid buttons.
- **Navy Ink** (navy-ink): headings and body text on light grounds, the outline button's stroke, slider tags, and the closing band's fallback ground when no photo is present.
- **Ink Soft** (ink-soft): secondary copy that still needs weight: hero intro, nav links at rest, hero stat labels, figure descriptions, panel body text and quote attributions.
- **Slate Muted** (slate-muted): legal text, empty-frame captions and dimmed footer links.
- **Closing Ink** (closing-ink) and **Soft on Dark** (soft-on-dark): text and empty-frame captions on the navy closing band; the closing band's focus outline also switches to Closing Ink.

### Named Rules
**The One Sky Rule.** Sky blue is the only hue in the system. Navy and slate are blue-leaning neutrals, not a second accent. A second accent colour is never added; photographs supply colour.

**The Readable Button Rule.** Solid buttons use Button Sky with white text at 700 weight and 19px, never the lighter Sky. Sky is for lines; Button Sky is for fills that carry text.

**The Tone-Step Rule.** Neighbouring surfaces separate by stepping through the sky family (white, sky-wash, sky-pale, sky-light), never with a border.

## Typography

**Display Font:** Hanken Grotesk 400 (with system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Hanken Grotesk 400, with 300 for section headings, 500 for the wordmark, outline pill, hero figures and `strong`, and 700 for buttons
**Label Font:** Hanken Grotesk 400 at the small step

**Character:** one grotesque family across four self-hosted weights (300, 400, 500, 700). The calm comes from large, light letters and from keeping everything else small and plain; the only bold on the page is the button label.

### Hierarchy
The build defines five fluid size steps plus a fixed button size; the frontmatter is normative for exact values.
- **Display** (400, display step up to 72px, line-height 1.03, tracking -0.035em): the hero headline only, set as three deliberate lines on desktop. Between 52em and 75em it drops to the headline step so it clears the coach.
- **Headline** (300, headline step, line-height 1.04, tracking -0.03em): section titles. The same step at 300 also sets the figures in the numbers band and the footer menu links. The two hero stats use this step at 500 with tabular figures.
- **Title** (400, lead step, line-height 1.25 to 1.3, tracking -0.01em): panel sub-heads and transformation case names.
- **Lead** (400, lead step, line-height 1.4): quotes, FAQ questions, the fact list and, on desktop, the method steps.
- **Body** (400, body step, line-height 1.55): running copy, kept to 32 to 52ch.
- **Label** (400, small step, line-height 1.3 to 1.35): nav links, hero stat labels, captions, footer blocks and legal text. The outline pill uses this step at 500. Sentence case, no extra tracking.
- **Button** (700, 19px, tracking 0.005em): every solid and light pill.

### Named Rules
**The Light-at-Scale Rule.** Section headings are weight 300 with negative tracking; the hero headline alone is 400. Heavier weights stay small or numeric: 500 for the wordmark, outline pill, hero figures and inline emphasis, 700 only for button labels.

**The Sentence-Case Rule.** No uppercase labels or tracked-out small caps anywhere. Small text stays quiet: small step, regular weight, soft or muted ink.

## Layout

Mobile first, with one main breakpoint at 52em. Below it, sections stack in one column inside a fluid side margin. At 52em and above, every section becomes a 12-column grid with a fluid gutter, and photos and copy take uneven column spans.

The hero fills the first viewport on desktop (min-height between 40rem and 58rem). The social icons sit in column 1, stacked vertically; the headline spans columns 2 to 10 with the call-to-action pill below; the two stats stack at the top of columns 11 to 12; a thin rule spans columns 1 to 8 near the bottom, with the intro paragraph in columns 2 to 6 and the scroll indicator in column 1. The coach cutout and its wave lines are absolutely positioned across the right 56% of the hero, behind the copy. On phones the order is headline, button, photo, stats (side by side), rule, intro, then the social icons in a row; the scroll indicator is hidden.

Below the hero, client before-and-afters hang as plain, tall collage prints (1125:2000) at alternating spans and staggered heights (columns 1-6, 7-12, 2-7, 8-13 with offsets). In "Cómo empezamos" a single photo is pinned (`position: sticky`) beside the steps. The FAQ intro is also sticky beside its list.

Rhythm: sections are separated by the section-gap token (7 to 13rem). Inside sections, gaps step through 0.75, 1.25, 1.75, 2.5 and 3.5 to 4.5rem. The two inset blocks (the light-sky panel and the navy closing band) sit 0.625rem from the viewport on phones and 1.25rem on desktop, so they read as framed prints rather than full-bleed bands. The numbers and FAQ bands and the footer run full width on their sky tones.

The page respects safe-area insets on the side margins and the bottom dock. On phones, a fixed WhatsApp dock slides up from the bottom once the hero button leaves view; it is hidden on desktop.

## Elevation & Depth

The system is flat: there is no `box-shadow` anywhere. Depth comes from tone steps through the sky family, from staggered and overlapping photos, and from stacking order. Two gradients exist, each with a single job: the hero background (white to pale and light sky, plus a soft sky radial glow low behind the coach, requested by the client) and a dark scrim at the foot of the closing photograph so light text stays legible over a real photo. Neither is an elevation device.

### Named Rules
**The Pinned-Print Rule.** When a surface needs to read as in front of another, overlap it and step its tone. Never add a shadow.

**The One Atmosphere Rule.** The hero is the only place with a gradient ground and glow. Every other surface is a flat tone.

## Shapes

One soft corner: photos, the inset panel, the closing band and the quote card all use the frame radius (16px). Buttons, the outline pill, social icons and the scroll dot are full pills or circles. The focus outline uses a small 4px corner. The full-bleed closing photo has no radius of its own because it fills a rounded container. The coach cutout has no frame at all; it stands on the hero ground.

There are no borders between surfaces. The drawn lines are few and each has a role: the outline pill's 1.5px navy stroke, the 1.5px sky underline that grows under nav links, the hero's 1px wave strokes and its single 1px divider (navy at 28%), the 2px FAQ chevron strokes, and 1px text-link underlines.

## Components

### Buttons
Calm, solid pills with a gentle press.
- **Shape:** full pill (999px), no border, minimum height 3.25rem.
- **Primary:** Button Sky fill, white 700 text at 19px, padding 0 1.6rem.
- **Hero call-to-action:** the primary pill one size up (height 3.5rem, padding 0 1.9rem).
- **Light:** white fill, navy text. Used only on the light-sky panel and the navy closing band; it steps to Sky Wash on hover.
- **Outline:** a 1.5px navy stroke on a transparent fill, navy 500 text at the small step, height 2.75rem. Used once, for "Contáctame" in the hero nav; it fills navy with white text on hover.
- **Hover / Active:** hover (fine pointers only) darkens to Deep Sky in 180ms. Active scales to 0.97 in 140ms on the ease-out curve.
- **Focus:** 2px Deep Sky outline with a 3px offset, switching to Closing Ink on the closing band.
- **Dock:** on phones, a full-width primary pill fixed to the bottom.

### Text links
- **Inline link:** no underline at rest; a 1px underline fades in on hover, offset 0.25em.
- **Plain link** (a secondary action next to a button): always underlined, dims to 0.7 opacity on hover. Minimum height 2.75rem.

### Navigation
- The wordmark (500, body step) and four label-size links in Ink Soft sit top left; the links appear only at 52em and above. On hover a link turns navy and a 1.5px Sky underline grows from the left over 240ms. The outline pill sits top right.
- **Footer menu:** headline-size, weight-300 links on Sky Wash. On hover, siblings dim to Slate Muted and the hovered link slides 12px right.

### Hero (signature)
- **Ground:** white for the top 40%, fading to Pale Sky at 76% and Light Sky at the foot, with a soft Sky radial glow centred low behind the coach.
- **Coach:** a background-removed portrait of Jan, bottom-anchored on the right, no frame. It settles in over 1200ms from 36px lower and 1.03 scale.
- **Wave lines:** two ribbons of thin 1px Sky strokes (30 and 16 lines) drawn by script into an SVG behind the coach, their opacity strongest at the centre of each ribbon. They fade in over 1600ms and drift slowly (16s and 21s, alternating).
- **Social icons:** Instagram and WhatsApp as inline 22px outline SVGs in 2.75rem circular targets, navy at rest; on hover they take a Pale Sky fill and Deep Sky colour.
- **Stats:** two figures from `contenido.js` (`hero`), headline step at 500 over a small Ink Soft label, no card or frame. They rise in at 650ms and 740ms.
- **Divider and intro:** one thin rule above a short Ink Soft paragraph (32ch).
- **Scroll indicator:** a thin drawn arrow with a 5px Sky dot that slides down and fades on a 2.4s loop. Desktop only.

### Photo frame
The base unit of the wall.
- **Corner Style:** frame radius (16px), clipped content, image object-fit cover.
- **Background:** Sky Wash, or Pale Sky for the panel photo.
- **Empty state:** until a file exists in `assets/fotos/`, the frame shows its tone with a small muted caption naming the slot, aspect ratio and file name. Missing transformation collages hide instead.
- **Aspect ratios:** the transformation collages are tall (1125:2000); the method photo is 3:4; the panel photo is shown whole at its own ratio.

### Sky panel
The one inset colour block.
- Light Sky ground, navy text, frame radius, inset from the viewport edge. Holds a headline, three title-and-body blocks in Ink Soft, a light pill button, and one whole photo in the standard 16px frame, fully inside the panel.

### Numbers band and quote card
- A full-width Pale Sky band holding headline-size figures (300, tabular) beside Ink Soft descriptions. Beside them, a white quote card with the frame radius and 1.75rem padding, at most 26rem wide, the quote in lead and the attribution in Ink Soft label. The band hides when its data is empty.

### Closing band
- An inset navy block with the frame radius holding a full-bleed photo, a dark scrim, a headline, a short line and a light pill. Without a photo it stays plain navy with Closing Ink text.

### Accordion (FAQ)
- Native disclosure rows with no dividers on the Sky Wash band. The question is set in lead with a 2.75rem minimum height. A two-stroke chevron drawn with 2px bars rotates over 240ms when a row opens, and the answer rises in over 260ms.

### Motion
- Easing tokens: ease-out `cubic-bezier(0.22, 1, 0.36, 1)` for most transitions, ease-soft `cubic-bezier(0.33, 1, 0.68, 1)` for photo settles, ease-in-out for the scroll-dot loop. Durations: 140ms press, 180ms hover, 240ms UI, 800ms reveal.
- Hero headline, button and intro rise 18px and fade in with a 90ms stagger. Content reveals 24px on scroll. Photos settle from a 0.985 scale.
- Content stays visible without JavaScript. Under reduced motion, the hero drift, rises and scroll loop stop and reveals become opacity-only fades.

## Do's and Don'ts

### Do:
- **Do** use the 16px frame radius on every photo, panel and card, and full pills for every button.
- **Do** fill solid buttons with Button Sky and set their labels white, 700, 19px.
- **Do** keep Sky for thin lines and small marks (waves, underlines, the scroll dot).
- **Do** separate surfaces by stepping through the sky family (white, sky-wash, sky-pale, sky-light).
- **Do** set section headings at weight 300 in sentence case with negative tracking (-0.03em to -0.035em).
- **Do** hang photos at uneven spans and staggered heights.
- **Do** inset the panel and closing band from the viewport (0.625rem on phones, 1.25rem on desktop) so they read as framed.
- **Do** keep labelled empty photo frames working until real photos exist.

### Don't:
- **Don't** add `box-shadow` to any surface; tone steps and overlap carry depth.
- **Don't** repeat the hero's gradient ground or glow on other sections.
- **Don't** add borders or dividers between sections, cards or FAQ rows; the hero's single divider is the only rule.
- **Don't** set white text on the lighter Sky; it fails contrast.
- **Don't** introduce a second accent hue, a red glow or a dark full-page theme.
- **Don't** use uppercase or letter-spaced labels, eyebrows above headings, or stat cards and icon tiles.
- **Don't** use weight 700 outside buttons, or a family other than Hanken Grotesk.
