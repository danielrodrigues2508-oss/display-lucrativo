---
name: Landing Page Refinements - Final Mobile Focus
description: Comprehensive surgical adjustments to the "Comunidade Display Lucrativo" landing page, prioritizing mobile responsiveness, copy precision, and continuous autoplay carousel.
type: feature
---

# Plan - Landing Page Refinements (Final Mobile Focus)

Implement specific refinements to copy, mobile layout order, and component behavior as requested, ensuring a polished mobile experience without altering the approved structure or visual identity.

## Proposed Changes

### 1. Simulator Section
- Update subtitle with specific profit examples: "Vendendo apenas 5 Displays por dia durante 5 dias, você já chega a R$1.175 de lucro no seu bolso."
- **Mobile Optimization:**
    - Reduce overall size and padding.
    - Ensure it is 100% visible within viewport width (no horizontal cuts).
    - Compact grid layout for inputs and results.

### 2. "O que você recebe" Section
- Simplify introduction to: "O que você recebe ao entrar para a comunidade:".
- **Block 01 (Display):** 
    - Reorder mobile layout: Title -> Text -> Image.
    - Simplify text content.
- **Block 02 (Method):** Update text to focus on approach script, objections, and ticket average.
- **Block 03 (Logistics):**
    - Set subtitle color to a softer muted tone.
    - Explicitly list the 6-step flow from "VOCÊ VENDE" to "VOCÊ ENTREGA".
    - Update final logistics summary text.

### 3. Social Proof Carousel
- Increase automatic transition speed (12s duration).
- Ensure continuous loop: remove hover-pause behavior and ensure autoplay persists after manual interaction.
- Maintain compact mobile presentation.

### 4. Pricing & Offer Section
- Insert context text: "Mas entrando agora, você não vai pagar R$558."
- Update call-to-action to: "Como Aluno Fundador, você entra agora por apenas:".
- Remove all references to "Lote 1" globally.

### 5. Mobile Global Adjustments
- Permanently remove the sticky bottom CTA bar.
- Ensure all "Lote 1" badges or text occurrences are removed.
- Optimize image aspect ratios and margins for mobile flow.

## Technical Details

### Simulator Refinement
- Update `src/components/landing/Simulator.tsx` to use more aggressive mobile scaling (smaller fonts, tighter gaps) and `overflow-hidden` on the container to prevent any scroll leaking.

### Carousel Autoplay Persistence
- In `src/components/landing/ProofCarousel.tsx`, remove CSS `animation-play-state: paused` on hover. Use a triple-duplicated list for a smoother high-speed loop.

### Content Logic
- Surgical text replacements in `src/routes/index.tsx` using Tailwind `order-` classes for mobile specific sequences.
