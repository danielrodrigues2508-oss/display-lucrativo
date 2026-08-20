---
title: Final Landing Page Adjustments
description: Apply surgical adjustments to Hero videos, Simulator text, Pricing transition, and Warranty section compactness.
type: feature
---

# Plan - Final Landing Page Adjustments

Apply four specific visual and structural adjustments to the landing page, focusing on mobile impact and compactness, while strictly preserving the approved layout and content.

## User Review Required

> [!IMPORTANT]
> I will apply exactly these 4 adjustments. No other sections, headlines, or functionalities will be changed.

- **Hero Video Size**: Increasing the video scale slightly, especially for mobile devices.
- **Simulator Headline**: Boosting the prominence of "Faça sua própria conta — use o simulador abaixo".
- **Pricing Transition**: Adding space and visual hierarchy between the "Valor percebido" and the final offer.
- **Compact Warranty**: Reducing vertical padding and spacing in the warranty section for mobile screens.

## Technical Details

### 1. Hero - Increase Video Size
- Modify `src/components/landing/VideoFan.tsx`:
    - Increase `w-[110px]` to `w-[130px]` for mobile.
    - Increase `sm:w-[130px]` to `sm:w-[150px]`.
    - Increase `lg:w-[172px]` to `lg:w-[190px]`.
    - Adjust `FanItem` mobile scales if necessary to prevent overlap.

### 2. Simulator Headline Highlight
- Modify `src/routes/index.tsx` (Section 03):
    - Change `text-2xl` to `text-3xl` (and `sm:text-4xl` to `sm:text-5xl`) for the primary "Faça sua própria conta" span.
    - Ensure it has a `block` layout with sufficient weight.

### 3. Pricing Transition
- Modify `src/routes/index.tsx` (Section 05):
    - Add `mt-12` or `mt-16` to the "Mas entrando agora..." container to create the requested "respiro" (breathing room).
    - Ensure the text "você não vai pagar R$558" is clearly separated from the list above.

### 4. Compact Warranty (Mobile)
- Modify `src/routes/index.tsx` (Section 06):
    - Reduce section padding from `py-16` to `py-8` on mobile.
    - Reduce card padding from `p-6` to `p-5` on mobile.
    - Reduce margins between elements (paragraphs, list, hairly line) specifically for the mobile view.
