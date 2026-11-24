---
name: Editorial Ether
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#9b4422'
  on-secondary: '#ffffff'
  secondary-container: '#ff9068'
  on-secondary-container: '#752807'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#211a15'
  on-tertiary-container: '#8c827a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59b'
  on-secondary-fixed: '#380d00'
  on-secondary-fixed-variant: '#7c2d0d'
  tertiary-fixed: '#ede0d7'
  tertiary-fixed-dim: '#d0c4bc'
  on-tertiary-fixed: '#211a15'
  on-tertiary-fixed-variant: '#4d453f'
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e3e2e2'
typography:
  display:
    fontFamily: Newsreader
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Newsreader
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 46px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 30px
    fontWeight: '400'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Newsreader
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: 0em
  body-lg:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.5rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
  space-2xl: 5rem
---

## Brand & Style

This design system embodies the intersection of modern literary curation and architectural minimalism. It serves discerning audiences—designers, cultural theorists, creative directors, and knowledge workers—who demand quiet sophistication, clarity, and unencumbered focus.

The aesthetic philosophy fuses **Hyper-Minimalism** with **Ethereal Tactility**:
- **Atmospheric Space:** Generous negative space acts as a structural element, providing an expansive canvas where content commands immediate reverence.
- **Glass & Light:** Frosted alabaster glass planes float above delicate off-white surfaces, introducing depth without visual friction or heavy dropped shadows.
- **Editorial Poise:** The tension between a rigorous architectural grotesque and an expressive, literary serif delivers authoritative, timeless storytelling.
- **Restrained Warmth:** A monochromatic slate foundation elevated by purposeful, muted terracotta accents that signal editorial focus without shattering the calm.

## Colors

The palette is anchored in pristine alabaster grounds, deep carbon ink values, and an intentional flash of sun-baked terracotta.

### Palette Architecture
- **Canvas & Backgrounds:** The base canvas lives at `#fbfbfb`, moving to pure `#ffffff` for elevated interactive components and frosted translucent layers (`rgba(255, 255, 255, 0.75)`).
- **Ink & Hierarchy:** Text hierarchy strictly preserves optical contrast:
  - Primary text: Deep obsidian `#121212` for unflinching readability.
  - Secondary text: Refined graphite `#444444` for descriptive narrative and metadata.
  - Muted/Tertiary text: Slate `#767676` for low-priority timestamps and sub-captions.
- **Accent Rhythm:** Terracotta/Umber (`#c2613d`) is deployed surgically for interactive focus rings, active indicator needles, selective badge borders, and pull quotes. It must never coat mass areas or dominate the viewport.
- **Surface Borders:** Borders must remain whisper-thin, using `rgba(0, 0, 0, 0.06)` against opaque surfaces and `rgba(255, 255, 255, 0.8)` against frosted glass cards.

## Typography

Typography establishes an editorial counterpoint between the literary authority of **Newsreader** and the neutral precision of **Inter**.

- **Editorial Serifs (Newsreader):** Reserved for displays, article headers, lead paragraphs, and blockquotes. Headlines use optical italics selectively to emphasize thematic cadence.
- **Architectural Grotesque (Inter):** Deployed across dense interfaces, body text, functional controls, labels, and analytical metrics.
- **Typographic Treatment:**
  - High line-height ratios (1.5x - 1.6x) across longform body text guarantee unhurried readability.
  - Section categories and metadata utilize `label-caps` styled in uppercase with tracking to accentuate a gallery-like structure.

## Layout & Spacing

Layouts conform to a disciplined, asymmetrical 12-column grid prioritizing intentional imbalance and generous perimeter margins.

### Layout Philosophy
- **Column Grids:** 12-column fluid grid on desktop (`> 1024px`), 8 columns on tablet (`768px – 1023px`), and 4 columns on mobile (`< 767px`).
- **Whitespace Allocation:** Modules are decoupled through expansive vertical intervals (`space-xl` and `space-2xl`). Content must never feel compressed; whitespace functions as structural separation in lieu of heavy physical lines.
- **Reading Measure:** Text-heavy columns must never exceed a maximum width of `680px` to maintain optimal ocular travel.
- **Breakpoints:**
  - Mobile: `< 768px` (Fluid margins of `1.5rem`, single-column flows).
  - Tablet: `768px – 1024px` (Margins of `2.5rem`, dual-column relationships).
  - Desktop: `> 1024px` (Max container `1320px`, wide exterior canvas margins of `4rem`).

## Elevation & Depth

This system avoids high-contrast dropshadows, relying instead on ambient light dissipation and semi-translucent glass membranes.

### Depth Hierarchy
1. **Canvas Layer (Base):** Solid off-white (`#fbfbfb`), totally flat.
2. **Frosted Surface (Level 1 - Cards & Trays):**
   - Background: `rgba(255, 255, 255, 0.72)`
   - Backdrop Filter: `blur(16px) saturate(180%)`
   - Border: `1px solid rgba(255, 255, 255, 0.85)`
   - Outer Shadow: `0 4px 20px -2px rgba(0, 0, 0, 0.025), 0 2px 6px rgba(0, 0, 0, 0.015)`
3. **Elevated Floating Controls (Level 2 - Popovers, Menus, Modals):**
   - Background: `rgba(255, 255, 255, 0.92)`
   - Backdrop Filter: `blur(24px)`
   - Border: `1px solid rgba(0, 0, 0, 0.06)`
   - Ambient Shadow: `0 12px 32px -4px rgba(18, 18, 18, 0.04), 0 4px 12px rgba(0, 0, 0, 0.02)`
4. **Scrim:** Overlays use a light diffusion curtain (`rgba(251, 251, 251, 0.6)`) with `backdrop-filter: blur(8px)` to maintain the airy palette even during interrupted flows.

## Shapes

The geometric architecture balances soft precision with modern restraint.

- **Base Radius (0.25rem / 4px):** Applied to badges, inputs, buttons, and inline metadata chips. Sharp enough to feel editorial and tailored; soft enough to prevent harshness.
- **Card Radius (`rounded-lg`, 0.5rem / 8px):** Dedicated to floating panels, reading cards, dialog surfaces, and media frames.
- **Pill Exception:** Explicitly restricted to primary action chips or status bullets where circular geometry signifies continuity or real-time activity.

## Components

### Buttons & Interactive Triggers
- **Primary:** Deep carbon (`#121212`) background, crisp white (`#ffffff`) text, `4px` border radius, padding `0.625rem 1.25rem`. On hover, color transitions to deep charcoal (`#2a2a2a`) with a subtle `translateY(-1px)`.
- **Secondary / Ghost:** Transparent background with a `1px` subtle outline (`rgba(0, 0, 0, 0.1)`), deep obsidian text. Hover introduces an alabaster wash (`rgba(0, 0, 0, 0.03)`).
- **Accent Action:** Muted terracotta (`#c2613d`) fill with white text, reserved purely for focal conversion points.

### Cards & Editorial Modules
- Enclosed in frosted translucent glass (`backdrop-filter: blur(16px)`).
- Bound by a hair-thin `1px` border (`rgba(255, 255, 255, 0.8)` against light backgrounds or `rgba(0, 0, 0, 0.05)` against pure white).
- Inner padding strictly conforms to `space-lg` (`1.75rem`).
- Hover effects are quiet: border color softens to `rgba(194, 97, 61, 0.3)` and the ambient shadow extends marginally (`blur: 24px, opacity: 0.04`).

### Input Fields & Controls
- **Text Inputs:** Pristine white background, `1px` border in `rgba(0, 0, 0, 0.08)`, typography set to `body-md` in `#121212`.
- **Active State:** Focus states drop the standard blue ring entirely, shifting border color to `#121212` with an ambient glow of `0 0 0 1px #121212`.
- **Checkboxes & Radios:** Minimalist geometry, unfilled slate outline in neutral state, transitioning to carbon `#121212` fill with white iconography upon selection.

### Chips & Metadata Badges
- Micro-proportions: uppercase `label-caps`, `4px` border radius, subtle padding `0.25rem 0.5rem`.
- Background in `rgba(0, 0, 0, 0.03)` with faint border `rgba(0, 0, 0, 0.06)`. Selected or active badges carry a subtle terracotta tint (`rgba(194, 97, 61, 0.08)` fill and `#c2613d` text).

### Editorial Quote Callouts
- Sits within body copy indented by `space-lg`, bordered on the left by an unbroken `2px` terracotta line (`#c2613d`).
- Text rendered in `Newsreader` italic, 22px (`headline-sm`), line-height 32px.