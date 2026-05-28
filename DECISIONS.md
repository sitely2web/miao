# Design decisions — Miao

## References
- Primary: brightland.co — defines spacing philosophy, cream/black contrast, serif editorial warmth, photography treatment
- Secondary: sweetgreen.com — borrowed for menu structure, anchor navigation, location section layout

## Photography
| Section | Asset | Photographer | Source |
|---------|-------|--------------|--------|
| Hero | Top-down iced drink with dramatic shadows | azra melek | https://www.pexels.com/photo/top-view-of-iced-coffee-drink-with-shadows-37486085/ |
| The Space | Elegant café interior with plants, warm lighting | Arda Kaykısız | https://www.pexels.com/photo/plants-in-a-restaurant-18721993/ |

## Typography
- Display: Playfair Display — editorial serif, warm but not precious, high contrast strokes echo the brand's bold identity
- Body: DM Sans — humanist, clean, pairs naturally with Playfair, reads well at menu item sizes

## Spacing
- Base unit: 8px — consistent scale avoids arbitrary spacing decisions

## Colour
- --ink #111111 — primary text and dark sections, pulled directly from the brand's black signage
- --cream #F5F2EC — primary light background, echoes brightland's off-white warmth
- --warm #B8874A — accent, lifted from the interior's blonde wood and Edison lamp tones
- --amber #C97B3A — deeper accent for CTAs and active hover states
- --muted #6B6560 — secondary text and captions

## Motion
- Easing: cubic-bezier(0.25, 0.1, 0.25, 1) — smooth ease, not mechanical
- Duration: 480ms entrances — long enough to feel considered, short enough to not delay
- Trigger: IntersectionObserver at 0.2 threshold — reveals when element is meaningfully in view
- Stagger: 80ms between siblings — sequential without feeling slow

## Section decisions

### Nav
Transparent on load, fills #111 when hero scrolls out of view (IntersectionObserver). Wordmark uses Playfair Display to carry display type identity into the nav bar. Links at 0.1em tracking, cream at 70% opacity to feel embedded not harsh.

### Hero
100vh, top-down drink image. Gradient overlay heaviest at bottom (85%) where text sits, lightest at top. Headline uses italic for "without limits" in --warm to create typographic tension. AYCD price anchored in subhead. Single CTA — no second button.

### Menu
Sticky left column (pricing + heading) while right column scrolls. Pricing displayed in a bordered block with Playfair numerals. Sugar level shown as actual bars (CSS width from custom property). Flavor grid splits into two columns to show breadth without overwhelming. Extras listed with Playfair price numerals in --warm.

### The Space
Full-bleed image, gradient overlay runs left-to-right (dark left, fading right) so text panel sits left against a readable dark field. Three sentences max — cosy, late-night, artist merch. Ghost button for navigation.

### Reviews
Dark #111 background. Three quotes selected to cover different angles: drinks quality (Oscar), artist space (Emily), atmosphere (Lyric). Playfair italic for quotes, DM Sans label for names. Border-top separator instead of cards.

### Find Us
Two-column: info left, map right. Map has slight grayscale filter (20%) and contrast boost to match the cream/ink palette. Hours formatted as a table — clear, not styled as prose. Instagram link in --warm with underline treatment.

### Footer
Three-column: wordmark, address/hours meta, Instagram link. Pexels attribution in a smaller muted row below a divider.

## Polish pass notes
<!-- populated during final pass -->
