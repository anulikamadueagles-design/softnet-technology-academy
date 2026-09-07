# Softnet Technology Academy — Website

A 5-page static website for **Softnet Technology Academy**, No. 10 Kobi Makaranta Street, Asokoro Extension, Abuja.

Pages: `index.html`, `about.html`, `academics.html`, `admissions.html`, `contact.html`.
No build tools required — plain HTML, CSS (`assets/css/style.css`) and JS (`assets/js/script.js`).

---

## 1. Before you launch — replace these placeholders

I don't have the school's real contact details, so these are placeholders. Search each file for them and swap in the real values:

| Placeholder | Where | Replace with |
|---|---|---|
| `+234 000 000 0000` | every page footer, contact.html | the real school phone number |
| `info@softnettechnologyacademy.com` | every page footer, contact.html | the real school email |
| `https://www.softnettechnologyacademy.com/` | `<link rel="canonical">`, `sitemap.xml`, `robots.txt`, structured data in `index.html` | your real domain once you have one |
| `your-form-id` (in `admissions.html` and `contact.html`) | form `action` attribute | a real [Formspree](https://formspree.io) endpoint (or Getform, Basin, etc.) so enquiries actually reach an inbox — free tier is fine to start |
| Google Maps embed in `contact.html` | currently centered on "Asokoro Extension, Abuja" generally | search your exact address on Google Maps → Share → Embed a map, and paste that `src` in |
| Fee schedule | `admissions.html` | currently says fees are shared on enquiry — add a real table if you'd rather publish figures |
| `href="#"` on "David Kamsi Elvis" credit | every page footer | your portfolio or Vectors Element Tech website link |

Everything else — the copy about the school's mission, programs and values — is genuine marketing copy written for this brief. Read it over and adjust anything that doesn't match how the school actually runs (founding year, exact class sizes, WAEC/NECO details, etc. are written as reasonable defaults, not confirmed facts).

## 2. About ranking #1 for "best school in Nigeria"

Worth being upfront: no website's code can guarantee a #1 Google ranking for a competitive phrase like that — rankings depend on things outside any single site's HTML, like domain age, how many other sites link to it, and real visitor traffic over time. What this build does give you is a strong technical foundation for SEO:

- Descriptive `<title>` and meta description on every page
- One clear canonical URL per page
- `schema.org` structured data (`School` type with your address) so Google can understand what the site is
- A `sitemap.xml` and `robots.txt` so search engines can find and index every page
- Fast-loading, mobile-friendly, semantic HTML

To actually move up in rankings over time: keep the content updated, get the school listed on Google Business Profile, and get other reputable sites (education directories, local news, parent forums) to link to it.

## 3. Put it on GitHub

```bash
cd softnet-academy
git init
git add .
git commit -m "Initial site: Softnet Technology Academy"
git branch -M main
git remote add origin https://github.com/<your-username>/softnet-technology-academy.git
git push -u origin main
```

## 4. Deploy on Render

1. Go to [render.com](https://render.com) and sign in with GitHub.
2. **New +** → **Static Site**.
3. Select your `softnet-technology-academy` repo.
4. Settings:
   - **Build Command:** leave blank
   - **Publish Directory:** `.` (the repo root)
5. Click **Create Static Site**. Render will give you a live URL like `softnet-technology-academy.onrender.com` within a minute or two.
6. Once you own a real domain, add it under **Settings → Custom Domains** on Render and point your DNS at it — then update the placeholder URLs above to match.

A `render.yaml` is already included, so Render can also pick up these settings automatically via "Infrastructure as Code" if you prefer.

## 5. "Put it on Chrome"

If you meant making it installable / pinned like an app: once it's live on its own domain (not just the onrender.com subdomain), any visitor can open it in Chrome, click the **⋮ menu → Cast, save, and share → Install page as app** (or the install icon in the address bar) to add it to their device. No extra setup is needed for that — it works automatically for any live website.

If you actually meant something more specific — like submitting the site to Google Search / getting it indexed — do this once it's live:
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add your domain as a property.
3. Submit `https://yourdomain.com/sitemap.xml`.

---

**Credit:** Website by David Kamsi Elvis — Vectors Element Tech.
