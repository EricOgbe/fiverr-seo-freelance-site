# SEO Fiverr landing page

A responsive static HTML/CSS/JavaScript landing page promoting the Fiverr SEO gig.

## Run locally

Open `index.html` in a browser. No build tools or framework are required. Internet access is only used for the optional Google Fonts stylesheet; the page otherwise works without JavaScript except for the mobile menu and dynamic footer year.

## Before publishing

1. Replace `https://YOUR-DOMAIN.example/seo-audit/` in the canonical link with the final public URL, or remove the canonical link until a domain is chosen.
2. Confirm the live Fiverr gig title, package prices, deliverables and delivery times. The gig URL currently redirects to a Fiverr login page in the public web check, so the page deliberately links visitors to Fiverr for current details and does not hard-code package pricing.
3. Check the portrait and its alt text. Replace it if you prefer another professional photo.
4. Consider converting the portrait to WebP/AVIF and updating the image path once you choose your hosting setup.
5. Add a real domain-specific Open Graph image if you create one; current `og:image` is a relative path and should be changed to an absolute URL after publishing.
6. Test every Fiverr CTA, mobile navigation, contrast, keyboard navigation, and page layout on real mobile and desktop screens.
7. Connect analytics only after selecting a privacy-compliant setup and configuring any required consent. Track outbound clicks to Fiverr as the main conversion event.

## SEO notes

- Suggested primary phrase: **on-page SEO service**. Supporting phrases: **on-page SEO audit**, **website SEO audit**, **meta title optimization**, **meta description optimization**, **heading optimization**, and **image alt text optimization**. Validate search volume and difficulty for the final target market before investing in content.
- Suggested path: `/on-page-seo/` or `/seo-audit/`.
- The title and meta description are written for relevance and click clarity, not to guarantee rankings.
- The page uses a minimal WebPage JSON-LD object only. No ratings, testimonials, aggregate ratings, or unverified business credentials are marked up.
- The audit example is clearly labelled illustrative and must not be presented as a client result.
- SEO indexing is not guaranteed. The site still needs a real domain, crawlable hosting, Search Console verification, and promotion to attract visitors.

## Files

- `index.html`: page structure, copy, metadata and JSON-LD.
- `styles.css`: responsive visual design and reduced-motion support.
- `script.js`: accessible mobile menu and current year.
- `assets/profile-photo.jpg`: user-provided portrait.
