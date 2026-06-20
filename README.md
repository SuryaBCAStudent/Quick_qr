<div align="center">

<!-- Logo / Banner -->
<img src="public/favicon.svg" alt="QuickQR Logo" width="80" height="80" />

<h1>⚡ QuickQR</h1>

<p><strong>Instant QR Code Generator — Free, Fast & Private</strong></p>

<p>
  <a href="https://digitalheroesco.com" target="_blank">
    <img src="https://img.shields.io/badge/Built%20for-Digital%20Heroes-3b82f6?style=for-the-badge&logo=lightning&logoColor=white" alt="Built for Digital Heroes" />
  </a>
  &nbsp;
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  &nbsp;
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8" />
  &nbsp;
  <img src="https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge" alt="MIT License" />
</p>

<p>
  <img src="https://img.shields.io/badge/No%20Backend-100%25%20Client--Side-06b6d4?style=flat-square" />
  &nbsp;
  <img src="https://img.shields.io/badge/No%20Sign--Up-Just%20Use%20%26%20Generate-818cf8?style=flat-square" />
  &nbsp;
  <img src="https://img.shields.io/badge/Vercel-Ready-000000?style=flat-square&logo=vercel&logoColor=white" />
</p>

<br/>

> **Turn any text, link, email, phone number, or note into a clean QR code in seconds.**  
> No ads. No tracking. No data leaves your device.

<br/>

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🎨 Design System](#-design-system)
- [☁️ Deploy to Vercel](#-deploy-to-vercel)
- [🧩 Component Overview](#-component-overview)
- [♿ Accessibility](#-accessibility)
- [🔒 Privacy](#-privacy)
- [👨‍💻 Author](#-author)

---

## ✨ Features

| Feature | Description |
|---|---|
| ⚡ **Instant Generation** | QR code appears the moment you click Generate |
| 📥 **Download PNG** | Saves a clean, padded PNG with white background |
| 📋 **Copy to Clipboard** | One-click copy of your input content |
| ✅ **Inline Validation** | Friendly error messages for empty input |
| 📊 **Character Counter** | Color-coded counter (2000 char limit) |
| ⌨️ **Keyboard Shortcut** | `Ctrl + Enter` triggers generation instantly |
| 🕓 **QR History** | Last 5 codes saved in `localStorage` |
| 🔄 **Regenerate from History** | Re-use any previous QR with one click |
| 🗑️ **Delete History Items** | Remove individual entries or clear all |
| 📱 **Fully Responsive** | Mobile, tablet, and desktop layouts |
| ♿ **Accessible** | ARIA labels, keyboard nav, focus outlines |
| 🌐 **Any Content Type** | URLs, emails, phones, Wi-Fi, plain text — anything |

---

## 🛠️ Tech Stack

```
Framework    →  React 19 + Vite 8
QR Library   →  qrcode.react v4 (canvas-based)
Styling      →  Vanilla CSS with CSS Custom Properties
Storage      →  Browser localStorage (no server needed)
Deployment   →  Vercel (vercel.json pre-configured)
Fonts        →  Inter (Google Fonts)
```

**Zero dependencies on paid APIs. Zero backend. Zero database.**

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/SuryaBCAStudent/quickqr.git
cd quickqr

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **https://quickqr-tau.vercel.app/** in your browser. That's it!

### Build for Production

```bash
npm run build
```

Output goes to `dist/` — ready to upload or deploy anywhere.

### Preview Production Build Locally

```bash
npm run preview
```

---

## 📁 Project Structure

```
quickqr/
│
├── public/
│   └── favicon.svg               # Custom QR-pattern SVG favicon
│
├── src/
│   ├── main.jsx                  # React app entry point
│   ├── App.jsx                   # Root component — global state & layout
│   ├── App.css                   # App-level layout styles
│   ├── index.css                 # 🎨 Global design system (tokens, animations)
│   │
│   ├── hooks/
│   │   └── useQRHistory.js       # Custom hook — localStorage history (max 5)
│   │
│   └── components/
│       ├── Navbar.jsx / .css     # Sticky glassmorphism top bar
│       ├── Hero.jsx / .css       # Hero section with animated heading
│       ├── QRGeneratorCard.jsx   # Main input card + validation + buttons
│       ├── QRGeneratorCard.css   # Card + shared button system styles
│       ├── QRPreview.jsx / .css  # QR code canvas + download + copy
│       ├── HistoryList.jsx / .css # History section container
│       ├── HistoryItem.jsx / .css # Individual history row
│       └── Footer.jsx / .css     # Footer with author info + DH button
│
├── index.html                    # HTML entry — SEO meta tags, Inter font
├── vite.config.js                # Vite configuration
├── vercel.json                   # One-click Vercel deploy config
└── package.json
```

---

## 🎨 Design System

QuickQR uses a **CSS Custom Properties-based design token system** for consistency:

```css
/* Color Palette */
--color-primary:      #3b82f6   /* Vibrant blue */
--color-accent:       #06b6d4   /* Cyan accent */
--color-success:      #10b981   /* Emerald green */
--color-error:        #ef4444   /* Red */

/* Background */
Body: deep navy → radial gradient with floating ambient blobs

/* Cards */
Glassmorphism — backdrop-filter: blur(16px) + translucent borders

/* Typography */
Font: Inter (300–900 weight) | Letter-spacing: tight on headings

/* Animations */
fadeUp, scaleIn, shimmer, pulseGlow, spin — all CSS keyframes
```

### Visual Theme

```
🟦  Background    deep navy → midnight blue radial gradient
🔵  Primary       vibrant blue  (#3b82f6)
🩵  Accent        cyan          (#06b6d4)
✅  Success       emerald       (#10b981)
❌  Error         red           (#ef4444)
🪟  Cards         glass — white/5% + blur
📝  Text          high contrast slate whites
```

---

## ☁️ Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite via `vercel.json`.

### Option B — GitHub + Vercel Dashboard

1. Push this project to a **GitHub repo**
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. **Import** your repository
4. Framework is auto-detected as **Vite** ✅
5. Click **Deploy** — live in ~30 seconds 🚀

### Option C — Netlify / Cloudflare Pages

```bash
npm run build
# Upload the dist/ folder to any static host
```

---

## 🧩 Component Overview

### `useQRHistory` Hook
```
→ Reads from localStorage on mount
→ Deduplicates entries (same content → bumps to top)
→ Enforces max 5 items
→ Writes to localStorage on every state change
```

### `QRGeneratorCard`
```
→ Textarea with 2000-char limit
→ Color-coded character counter (yellow > 70%, red > 90%)
→ Ctrl+Enter keyboard shortcut
→ Inline ARIA error with role="alert"
→ Copy input / Clear buttons appear contextually
```

### `QRPreview`
```
→ qrcode.react QRCodeCanvas (220×220px, error correction: M)
→ Download: draws to offscreen canvas with 24px padding + white fill
→ Copy: navigator.clipboard.writeText with success state toggle
→ Glow halo animation around the QR code
```

### `HistoryItem`
```
→ formatRelativeTime() — just now / 5s ago / 3m ago / 2h ago / 1d ago
→ Delete triggers CSS exit animation (slide + fade), then removes from state
→ Regenerate scrolls to top and populates both inputText and qrValue
```

---

## ♿ Accessibility

- All interactive elements have descriptive `aria-label` attributes
- Errors use `role="alert"` + `aria-live="assertive"`
- QR preview section uses `aria-live="polite"` for screen readers
- `<time>` element with `dateTime` attribute for history timestamps
- Full keyboard navigation — Tab, Enter, Ctrl+Enter
- `:focus-visible` outlines — keyboard users see focus, mouse users don't
- `sr-only` class for visually-hidden labels
- Color contrast meets WCAG AA standards

---

## 🔒 Privacy

- **No data leaves your browser.** Ever.
- QR codes are generated entirely in-memory via `<canvas>`
- History is stored in `localStorage` — only accessible by this page
- No analytics, no cookies, no tracking scripts
- No network requests (except loading Inter font from Google Fonts)

---

## 👨‍💻 Author

<table>
  <tr>
    <td align="center">
      <strong>Surya Pratap Singh</strong><br/>
      📧 <a href="mailto:harshitsingh17069@gmail.com">harshitsingh17069@gmail.com</a>
    </td>
  </tr>
</table>

---

<div align="center">

<br/>

<a href="https://digitalheroesco.com" target="_blank">
  <img src="https://img.shields.io/badge/⚡%20Built%20for-Digital%20Heroes-3b82f6?style=for-the-badge&logoColor=white" alt="Built for Digital Heroes" />
</a>

<br/><br/>

<sub>Made with ❤️ &nbsp;|&nbsp; © 2026 QuickQR &nbsp;|&nbsp; MIT License</sub>

</div>
