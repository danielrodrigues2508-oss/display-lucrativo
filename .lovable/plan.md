---
name: Landing Page Refinements
description: Final surgical adjustments to the "Comunidade Display Lucrativo" landing page, focusing on mobile optimization and copy precision.
type: feature
---

# Plan - Landing Page Refinements

Implement final surgical adjustments to the landing page as requested, focusing on mobile responsiveness, copy updates, and component behavior.

## User Review Required

> [!IMPORTANT]
> - No structural changes or new sections will be added.
> - The visual identity (Black + Neon Green) remains intact.
> - The "Lote 1" expression will be removed globally.

## Proposed Changes

### Section 1: Simulator & Hero
- Update simulator subtitle with specific profit examples (5 displays/day for 5 days = R$1.175).
- Compact simulator UI for mobile viewports to prevent lateral overflow and improve elegance.
- Remove "Lote 1" and subtext from the Hero CTA area.

### Section 2: "O que você recebe" & Blocks
- Simplify the "O que você recebe" introduction to the specified headline.
- **Block 01 (Display):** Update copy and ensure Title -> Text -> Image order on mobile.
- **Block 02 (Method):** Update copy to include sales script, objection handling, and ticket increase details.
- **Block 03 (Logistics):** Update subtitle color to be softer (muted) and list the 6-step factory-to-client flow exactly.

### Section 3: Social Proof (Carousel)
- Increase marquee transition speed.
- Modify logic to ensure autoplay continues even after manual interaction (no pause on swipe).
- Maintain compact mobile dimensions.

### Section 4: Pricing & Offer
- Update the perceived value breakdown list.
- Insert the context text ("Mas entrando agora...") before the final offer price.
- Correct any discrepancies in the pricing anchor.

### Section 5: Global Cleanup
- Remove the "Lote 1" tag/badge from all components.
- Ensure the sticky mobile bottom bar is completely removed (previously requested, now reinforced).

## Technical Details

### Simulator Mobile Optimization
- Adjusting padding and font sizes within `src/components/landing/Simulator.tsx` using `sm:` and `max-sm:` breakpoints.
- Reducing margin/gap spacing for the mobile view.

### Component Logic
- **Carousel:** Updating `src/components/landing/ProofCarousel.tsx` CSS/JS to remove `animation-play-state: paused` on hover/interaction if present.
- **Layout Order:** Using Tailwind `order-` classes in `src/routes/index.tsx` for Block 01 mobile reordering.

### Content Consistency
- Global string search for "Lote 1" to ensure 100% removal.
