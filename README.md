# Happy Minds Tuition - PWA

This is a modern, production-ready Progressive Web App (PWA) built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```

## Instructions for Customization

### 1. Replace Formspree Endpoint
The registration form uses Formspree to handle submissions without a backend.
1. Create a free account at [Formspree](https://formspree.io/).
2. Create a new form and copy your unique form endpoint URL (e.g., `https://formspree.io/f/your-form-id`).
3. Open `components/RegistrationForm.tsx`.
4. Locate the `FORMSPREE_ENDPOINT` constant around line 11:
   ```typescript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id';
   ```
5. Replace the placeholder URL with your actual Formspree endpoint.

### 2. Replace App Icons
The app currently uses a placeholder SVG icon for the PWA manifest and favicon.
1. Create your custom logo/icon. For best results, create a `512x512` PNG image.
2. Replace the existing icon in the `public/icons/` directory.
3. If you use PNGs instead of SVG:
   - Update `public/manifest.json` to point to your new PNG files (e.g., `icon-192x192.png` and `icon-512x512.png`) and change the `type` to `image/png`.
   - Update `app/layout.tsx` to point the `<link rel="icon">` and `<link rel="apple-touch-icon">` tags to your new icons.
   - Update `public/sw.js` to cache your new icon files in the `urlsToCache` array.

### 3. Deploy to GitHub Pages
This project is configured to be compatible with Next.js static exports, which is required for GitHub Pages.

1. **Update `next.config.ts`**:
   Change `output: 'standalone'` to `output: 'export'` in your `next.config.ts` file.
   ```typescript
   const nextConfig: NextConfig = {
     // ...
     output: 'export',
     // ...
   };
   ```
   *Note: If you are deploying to a subpath (e.g., `https://username.github.io/repo-name/`), you will also need to set the `basePath` in `next.config.ts`.*

2. **Build the project**:
   ```bash
   npm run build
   ```
   This will generate an `out` directory containing the static HTML/CSS/JS files.

3. **Deploy the `out` directory**:
   You can use the `gh-pages` npm package or GitHub Actions to deploy the contents of the `out` directory to your `gh-pages` branch.

   **Using `gh-pages` package:**
   ```bash
   npm install -g gh-pages
   gh-pages -d out
   ```

   **Using GitHub Actions:**
   Create a `.github/workflows/deploy.yml` file to automate deployment on push to the `main` branch.

## Features
- **PWA Ready**: Installable on mobile and desktop devices with offline fallback.
- **Responsive**: Mobile-first design that scales beautifully to tablets and desktops.
- **Accessible**: Semantic HTML and ARIA attributes for screen readers.
- **Performance**: Optimized images, lazy loading, and smooth Framer Motion animations.
