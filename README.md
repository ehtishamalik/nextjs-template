# Industify - Next.js Multi-Purpose Agency & Portfolio Template

Industify is a premium, high-performance design template built with **Next.js 16** and **React 19**. Tailored specifically for agencies, corporate portfolios, SaaS products, and digital business sites, it provides a highly customizable foundation to build and deploy modern, responsive websites rapidly.

---

## 🌟 Key Features

- **4 Unique Landing Page Layouts**:
  - **Home Alpha**: Classic corporate look with feature slides, choice grids, and core values.
  - **Home Beta (Gamma & Delta)**: Alternative structural designs featuring hero banners, visual statistics, integration maps, and interactive CTA blocks.
- **Dynamic Services & Portfolio System**: Full listing pages and dynamic detail subpages. Pre-loaded examples include *AI & Intelligent Agents, Web & Frontend, Backend & API, and Mobile App Development*.
- **Interactive Multimedia Components**:
  - Full-screen responsive touch sliders powered by **Swiper**.
  - Pop-up modal video players via **react-modal-video**.
  - Dynamic image grids and lightboxes using **react-photo-gallery** and **fslightbox-react**.
  - Animated stat counters with **react-countup**.
- **Complete Blog System**: Standard listing grids, individual post views, and distraction-free "Blog Full" layout options.
- **Robust Developer Workflow**: Fully configured with **Biome** for instantaneous formatting and linting.
- **SEO & Search Optimized**: Ready-to-go sitemap generation via **next-sitemap**.
- **Fully Responsive Navigation**: Adapts flawlessly across screen sizes with both a slide-out `MobileHeader` and a multi-level dropdown `DesktopHeader`.

---

## 🛠️ Tech Stack & Key Dependencies

- **Core**: Next.js 16 (App Router), React 19, TypeScript
- **Sliders & Swiping**: Swiper 12
- **Gallery & Lightbox**: React Photo Gallery 8 & FsLightbox React 2
- **Interactive UI**: React Countup 6 & React Modal Video 2
- **Linter & Formatter**: Biome 2.2.0
- **SEO**: Next Sitemap 4

---

## 📂 Repository Structure

```text
├── app/                  # Next.js App Router (Routes & layout wrappers)
│   ├── blog/             # Blog page routes & post dynamics
│   ├── services/         # Services routes
│   ├── portfolio/        # Portfolio item routes
│   ├── gallery/          # Visual media gallery route
│   ├── contact/          # Interactive contact page
│   └── globals.css       # Global styles & theme custom properties
├── components/           # Reusable UI component blocks (modularized)
│   ├── home/             # Home Alpha components
│   ├── home2/            # Home Beta components
│   ├── layout/           # Shared DesktopHeader, MobileHeader, Footer
│   ├── CookiesBanner/    # User privacy banner component
│   └── ...
├── constants/            # Centralized site configurations & hardcoded text content
│   └── index.ts          # Central data store (links, titles, descriptions)
├── styles/               # Design themes, Fontello, FontAwesome icons & custom styling sheets
├── public/               # Static assets (images, logos, SVGs)
└── biome.json            # Biome linting and formatting configuration
```

---

## 🚀 Getting Started

Follow these steps to run the template locally or prepare it for production:

### 1. Installation
Install project dependencies using `npm`:
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the template.

### 3. Build & Sitemap Generation
Compile a highly optimized production bundle and automatically output the search engine sitemap:
```bash
npm run build
```
*(This triggers `next build` followed by `next-sitemap` as a post-build script).*

### 4. Code Quality: Lint & Format
Run static analysis and check for formatting compliance:
```bash
# Lint code and find issues
npm run lint

# Automatically format code matching Biome specifications
npm run format
```

---

## 🎨 Customization Guide

Industify has been architected to make custom web development extremely easy. To turn this template into your own custom website, follow these guidelines:

### 1. Update Core Content & Data
All central data (like services description, blog posts, items shown in portfolio, and pricing/details) is concentrated in one file. Open **`constants/index.ts`** to modify the content, names, links, and paths to reflect your target brand.

### 2. Replace Branding & Assets
- Swap the template logo at `/public/logo.png` with your own company or brand logo.
- Update global search engine metadata (such as the default Title and Description) in **`app/layout.tsx`**.

### 3. Styling & Color Themes
Theme parameters are managed through variables.
- Edit **`app/globals.css`** to adjust root typography values, dark mode toggles, and base color properties.
- Customize modular element layout designs inside **`styles/css/style.css`** and custom classes in **`styles/css/custom.css`**.

### 4. Adjust Header Navigation & Language Switchers
Customize headers, phone contacts, menu trees, and language options directly inside **`components/layout/desktop-header.tsx`** and **`components/layout/mobile-header.tsx`**.
