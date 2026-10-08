---
name: SynthID Detector — Google About
description: A quiet Google About-style introduction to SynthID Detector, centered on a CSS phone illustration.
colors:
  google-blue: "#4285f4"
  google-action-blue: "#1a73e8"
  google-red: "#ea4335"
  google-yellow: "#fbbc05"
  google-green: "#34a853"
  google-text: "#202124"
  muted-text: "#5f6368"
  white: "#ffffff"
  soft-gray: "#f1f3f4"
  border-gray: "#dadce0"
  hero-mist: "#e9f4fa"
  hero-blue: "#bde5ff"
  detector-screen: "#f8f9fe"
  upload-blue: "#c5eafa"
typography:
  display:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "clamp(3rem, 4vw, 4.75rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.045em"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "clamp(1rem, 1.28vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.55
  title:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "23px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.7px"
  nav:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1
  label:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "14px"
    fontWeight: 400
rounded:
  subtle: "4px"
  panel: "20px"
  button: "24px"
  phone: "57px"
  screen: "43px"
  pill: "99px"
  circular: "50%"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  navigation-active:
    textColor: "{colors.google-text}"
    typography: "{typography.nav}"
    height: "80px"
  learn-more-link:
    backgroundColor: "{colors.white}"
    textColor: "{colors.google-action-blue}"
    rounded: "{rounded.button}"
    padding: "0 18px"
    height: "48px"
  upload-panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.google-text}"
    rounded: "{rounded.panel}"
    padding: "16px 13px 12px"
    height: "156px"
  detector-phone:
    backgroundColor: "#17191b"
    rounded: "{rounded.phone}"
    width: "min(304px, 23vw)"
    height: "690px"
---

# Design System: SynthID Detector — Google About

## Overview

**Creative North Star: "Google About, Product-First"**

The page follows the supplied Google About reference: a white navigation band and familiar multicolor wordmark lead into a quiet, pale blue-gray gradient with a centered SynthID Detector phone illustration. A large centered headline and muted explanatory copy continue the introduction below the hero, followed by one restrained Learn more link and a compact footer.

Arial is intentional: no original font asset was supplied, so the implementation uses the explicit Arial/Helvetica system stack. The phone is an HTML/CSS adaptation of the reference, not a supplied product image or a functioning detector; keep its illustrative status clear.

**Key Characteristics:**
- Google About page framing with a multicolor wordmark and restrained blue active state.
- White space and centered content balanced by a softly graded hero.
- A CSS-built phone demonstration, followed by concise copy and one outlined call to action.

**The Google About Frame Rule.** Preserve the white branded header, understated blue navigation state, and pale blue-gray showcase as the page's defining visual sequence.

## Colors

The palette pairs Google blue accents and charcoal text with white and cool grays; the hero's pale blue-gray gradient is the principal large color field.

### Primary
- **Google Blue** (`google-blue`): Wordmark accents and the active-navigation indicator.
- **Google Action Blue** (`google-action-blue`): The Learn more link and keyboard focus outline.

### Secondary
- **Google Red** (`google-red`), **Google Yellow** (`google-yellow`), and **Google Green** (`google-green`): The remaining colors in the wordmark.

### Neutral
- **Google Text** (`google-text`): Main headline and primary content text.
- **Muted Text** (`muted-text`): Navigation, supporting copy, and footer text.
- **White** (`white`): Page canvas, header, and footer surface.
- **Soft Gray** (`soft-gray`): The upper, neutral portion of the hero gradient and menu hover surface.
- **Border Gray** (`border-gray`): CTA outline and footer divider.
- **Hero Mist** (`hero-mist`) and **Hero Blue** (`hero-blue`): Lower stops of the hero's pale blue-gray gradient.
- **Detector Screen** (`detector-screen`): The cool, near-white surface inside the phone illustration.
- **Upload Blue** (`upload-blue`): The illustrated file-selection pill.

**The Quiet Accent Rule.** Keep blue as a navigation, link, focus, and small mockup accent; let white, gray, and the pale hero gradient carry the larger surfaces.

## Typography

**Display Font:** Arial (with Helvetica, sans-serif fallback)  
**Body Font:** Arial (with Helvetica, sans-serif fallback)  
**Label/Mono Font:** No separate label or monospace family is used.

**Character:** The single sans-serif family keeps the wordmark surroundings, large headline, navigation, and supporting copy visually direct. Arial is the deliberate available-font choice, not a claim that the reference supplied a font asset.

### Hierarchy
- **Display** (400, `clamp(3rem, 4vw, 4.75rem)`, 1.15): Centered page headline; on narrow screens it uses a smaller responsive clamp and tighter tracking.
- **Headline** (500, 20–23px, 1.2): The phone's SynthID Detector heading, reduced for the mobile layout.
- **Title** (400, 20px, 1.2): Primary navigation labels on wider screens; the implementation reduces these to 16px on mobile.
- **Body** (400, `clamp(1rem, 1.28vw, 1.375rem)`, 1.55): Supporting page copy, constrained to a readable line length.
- **Label** (400, 14px): Footer and compact utility copy; the phone illustration uses smaller interface labels where needed.

**The Arial Without an Asset Rule.** Retain the implemented Arial/Helvetica stack unless an actual, approved font asset is added; do not imply a custom font is present.

## Layout

The page is a single centered column below a horizontal header. The header is 124px tall above the 570px hero on wide screens; content uses a 1440px maximum width, while the phone is centered and cropped by the hero's fixed-height field. The headline and supporting copy follow on white, then the centered CTA and a footer separated by a thin rule.

At widths up to 1024px the header and hero become shorter. At 767px and below, the desktop navigation becomes an expandable menu, the hero shortens to 448px, the phone scales to a fixed 238px width, and the footer stacks vertically. At 380px and below, the hero and phone shrink again. Keep the layout's observed breakpoints at 1921px (wide header alignment), 1024px, 767px, and 380px; do not treat the phone drawing as a responsive product screen.

**The Centered Showcase Rule.** Keep the illustrative phone centered in its hero field and preserve the transition from showcase to centered explanation.

## Elevation & Depth

Depth is a restrained hybrid: the hero gradient does most of the atmospheric work, while subtle shadows distinguish the phone, upload panel, mobile menu, and hovered link. Borders and inset edges define the other surfaces; avoid broad, persistent elevation.

### Shadow Vocabulary
- **Phone shell** (`0 1px 2px rgb(32 33 36 / 38%)`, with an inset edge): Separates the dark phone illustration from the gradient.
- **Upload panel** (`0 2px 7px rgb(60 64 67 / 8%)`): A faint shadow beneath the illustrated panel.
- **Mobile navigation** (`0 6px 12px rgb(60 64 67 / 12%)`): Separates the expanded menu from the page.
- **CTA hover** (`0 1px 3px rgb(60 64 67 / 18%)`): Appears only on hover.

**The State-Only Shadow Rule.** Keep shadows small and contextual; reserve the CTA shadow for hover and use the hero gradient, borders, and phone silhouette for primary depth.

## Shapes

Most page surfaces are square-edged or lightly rounded. The phone is the distinctive rounded silhouette, with a more tightly clipped screen; the upload panel and CTA use softened corners, and the file-selection control and mobile menu affordance are pill-shaped or circular. Thin gray borders define the CTA and footer divider.

## Components

### Buttons
- **Learn more link:** An outlined, pill-shaped anchor (48px high, 18px horizontal padding) uses Google Action Blue text and a right arrow. Hover gently tints its white surface and adds a small shadow; keyboard focus uses a visible blue outline with offset.
- **Illustrated file-selection control:** A compact blue pill with an upload icon and darkened blue text inside the phone mockup. It is static illustration, not an implemented upload control.

### Cards / Containers
- **Upload panel:** A near-white panel with a thin gray border, generously rounded corners, and faint shadow. It groups the illustrated media types, upload prompt, and file-selection pill inside the phone.

### Navigation
- **Primary navigation:** Muted gray labels sit in a horizontal row; the current About item uses darker text and a short blue underline. Hover darkens the label. At the mobile breakpoint, links move into a collapsible white menu with a restrained shadow; the circular menu button animates between hamburger and close marks.
- **Footer navigation:** Compact muted links wrap or stack with the footer layout and darken on hover.

### Detector Phone Illustration
- The centered CSS phone uses a dark metallic gradient shell, a cool near-white screen, compact browser-like toolbar, and simplified detector content. Its entrance animation moves upward while fading in; reduced-motion preferences shorten animation, transition, and scrolling motion. Treat it as a visual illustration only.

## Do's and Don'ts

### Do:
- **Do** retain the multicolor Google wordmark, white header, subdued active underline, and pale blue-gray hero as one visual composition.
- **Do** use the Arial/Helvetica stack and the observed responsive headline scale.
- **Do** keep the CTA outlined, pill-shaped, and visually quieter than the headline and phone.
- **Do** preserve responsive navigation and the reduced-motion behavior already present.
- **Do** describe the phone as an illustration; the static page does not analyze media.

### Don't:
- **Don't** introduce a new display font or claim a custom font asset was supplied.
- **Don't** represent the illustrated Select file control as working detector functionality.
- **Don't** replace the broad, pale hero field with a saturated color block or add heavy persistent shadows.
- **Don't** turn the phone's CSS-only details into universal component requirements for unrelated surfaces.
