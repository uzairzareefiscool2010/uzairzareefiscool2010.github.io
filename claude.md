# ANY ASSUMPTIONS MUST BE ASKED BEFORE STARTING PROJECT

# Build a Password-Gated Animated Event App

Create a polished web application based on the supplied PDF storyboard and existing project assets.

## 1. Project Assets – IMPORTANT

The project contains two important folders:

- `gfx/` – Images, logos, graphics and visual assets.
- `reference/` – Original PDF storyboard and visual reference.

Instructions:
- Inspect both folders before coding.
- Examine the PDF to understand the intended layout and animation sequence.
- Identify and reuse the existing assets.
- Do not create substitutes for assets that already exist.
- Do not rename, move or delete existing assets.
- Preserve image quality and aspect ratios.
- Use correct relative paths.

## 2. Visual Direction – Dark Hacking Mainframe

- Pure black background (#000000).
- Futuristic computer mainframe / cybersecurity terminal atmosphere.
- Subtle green digital elements, scrolling code, terminal text, grid lines and data streams.
- Neon green (#00FF41) as the primary visual colour.
- Cinematic, immersive and professional.

**Logo and typography treatment:**
- The event logo must be neon green with a controlled glow.
- ALL interface text must also use neon styling.
- This includes headings, labels, password instructions, buttons, terminal text and animated typography.
- Use vibrant neon green with subtle outer glow effects.
- Vary glow intensity to establish visual hierarchy.
- Ensure text remains sharp and readable.
- Preserve the original logo's shape and proportions.
- Use CSS filters or masking for the logo if necessary.

**Colour exception:** The incorrect-password `WRONG` message must remain bright red.

No pastel backgrounds or orange spirals.

## 3. Initial Screen – Password Entry

Display a centred interface containing:
- Neon-green event logo.
- Neon-green event title: **MAJLIS ANUGERAH MUTIARA GEMILANG 2026**
- Neon-green password label and instructions.
- Password input field with neon-green borders and focus effects.
- Neon-green submit button.
- Subtle animated terminal effects in the background.

## 4. Password Functionality

- Expected password: `ANUGERAH`
- Case-sensitive validation.
- Support submission using the button or Enter key.

**Incorrect password:**
- Display `WRONG` in HUGE, bold, bright red typography.
- Add a brief glitch/flicker animation.
- Keep the user on the password screen.
- Clear the error when the user starts typing again.

**Correct password:**
- Trigger the animation sequence exactly once.
- Prevent repeated submissions from restarting the animation.

## 5. Animation Sequence

Follow the PDF storyboard.

**Stage A – Scattered Elements**
- Display individual letters, event typography, logo and decorative elements scattered across the screen.
- Use assets from `gfx/`.
- Incorporate digital glitches, green data streams and visual distortions.
- All text and logo elements should retain their neon-green treatment.

**Stage B – Centre Collapse**
- Animate all visible letters, text, logo and decorative elements towards the exact centre of the screen.
- Create a dramatic reverse-explosion / Big Bang-style convergence.
- Keep movement coordinated and smooth.

**Stage C – White Flash**
- Once everything converges, trigger a full-screen bright white flash.
- The flash/explosion sequence should take approximately 3 seconds.
- Gradually transition from the flash into the final poster.

**Stage D – Final Poster (CRITICAL)**

- Locate the existing final poster image inside `gfx/`.
- Use the actual image file as the final screen.
- Display it exactly as supplied.
- DO NOT recreate, redesign, regenerate, edit, recolour, crop, filter, animate or apply effects to the poster image.
- NO neon glow, CSS filters, overlays, glitch effects, colour adjustments or text additions on top of the poster.
- Preserve the original image's aspect ratio and full composition.
- Scale it proportionally to fit the screen while keeping the entire poster visible.
- Do not stretch or distort it.
- The image must remain completely untouched from beginning to end.

The animation and white flash should transition into the poster, but once revealed, the poster itself must remain static and untouched.

## 6. Technical Requirements

- Inspect the existing project structure before modifying anything.
- Use the existing framework and conventions.
- Use CSS animations or an existing animation library.
- Ensure smooth transitions and responsive scaling.
- Keep code modular and maintainable.
- Avoid unnecessary dependencies.
- Implement working password validation and animations, not static mockups.
- Test both correct and incorrect password scenarios.
- Ensure the final poster image loads correctly.

## 7. Strict Instructions

- Black is the dominant background colour.
- Neon green is the primary accent and text colour.
- All interface typography must have a neon appearance.
- The logo must be neon green with a controlled glow.
- The `WRONG` error must remain bright red.
- The final poster must be the original `gfx/` image, completely untouched.
- No pastel backgrounds or orange spirals.
- Reuse existing project assets.
- Do not modify or ignore the reference PDF.
- Do not introduce unrelated features or additional pages.

**Expected result:** A futuristic black-mainframe password screen with neon-green branding and typography, functional password validation, a massive red WRONG message for incorrect input, and a cinematic animation that ultimately reveals the original, unmodified event poster.

