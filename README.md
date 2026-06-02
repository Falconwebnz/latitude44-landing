# Claude Learn — Latitude 44 landing page

A single-file static landing page for **`https://latitude44.app`** that
advertises the Claude Learn mobile app. Pure HTML / CSS / vanilla JS, no
build step, deploys to any static host (GitHub Pages, Cloudflare Pages,
Vercel, Netlify).

```
landing/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── latitude44-falcon.png
    ├── latitude44-logo.png
    ├── welcome-bg.webp
    ├── screenshot1_built_in_claude.png
    ├── screenshot2_10min_90days.png
    ├── screenshot3_founders_hub.png
    └── google-play-badge.png
```

Total page weight: ~4.5 MB (mostly the three phone screenshots).

---

## Deploy to GitHub Pages with `latitude44.app` (10 min)

### 1. Create the GitHub repo

1. Sign in at https://github.com
2. Top-right → **+ → New repository**
3. Repository name: **`latitude44-landing`** (or any name you like)
4. Visibility: **Public** (required for free GitHub Pages)
5. Leave “Initialize this repository” **un-checked** — we already have the files
6. **Create repository**

### 2. Get the files from Emergent

**From Emergent:**
- Open the workspace file browser
- Navigate to `/app/landing/`
- Download the entire folder (right-click → Download, or use the VS Code download view)

You should end up with a local folder on your machine containing
`index.html`, `styles.css`, `script.js`, and the `assets/` sub-folder.

### 3. Push the files to GitHub

**Easiest way — via GitHub web UI:**
1. Open your new empty repo on github.com
2. Click **“uploading an existing file”** (link on the empty-repo screen)
3. Drag the **contents** of the `landing/` folder onto the upload zone
   (drag the files, **not** the `landing` folder itself — you want
   `index.html` to sit at the repo root)
4. Commit message: “Initial landing page” → **Commit changes**

**OR via git command-line** (if you prefer):
```bash
cd /path/to/landing
git init
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/latitude44-landing.git
git add .
git commit -m "Initial landing page"
git push -u origin main
```

### 4. Enable GitHub Pages

1. Open your repo → **Settings**
2. Left sidebar → **Pages**
3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` → `/ (root)` → **Save**
4. Within 30–60 sec, the page will say:
   > Your site is live at `https://<YOUR-USERNAME>.github.io/latitude44-landing/`
5. Click the URL — you should see your landing page render.

### 5. Point `latitude44.app` at it

**On the GitHub side:**
1. In the same **Pages** settings page → **Custom domain**
2. Enter `latitude44.app` → **Save**
3. GitHub will create a `CNAME` file in your repo automatically.
4. Check ☑ **Enforce HTTPS** (once the cert is provisioned — may take 5–10 min).

**On your domain registrar side** (wherever you bought `latitude44.app`):

Add **all four** of these A records on the **root** domain (`@`):
```
Type: A   Host: @   Value: 185.199.108.153   TTL: 3600
Type: A   Host: @   Value: 185.199.109.153   TTL: 3600
Type: A   Host: @   Value: 185.199.110.153   TTL: 3600
Type: A   Host: @   Value: 185.199.111.153   TTL: 3600
```

OR, if you prefer to also serve `www.latitude44.app`, add this CNAME:
```
Type: CNAME   Host: www   Value: <YOUR-USERNAME>.github.io   TTL: 3600
```

DNS propagation usually takes **5–60 minutes** but can take up to 24 h.
You can check with https://dnschecker.org/#A/latitude44.app

Once propagation finishes, `https://latitude44.app` will serve your
landing page directly.

---

## Updating the site later

Edit any file locally (or right in the GitHub web UI), commit it, and
GitHub Pages will redeploy automatically within ~30 sec.

No build step. No CDN to invalidate. No magic.

---

## What's on the page (sections in order)

1. **Sticky top nav** — brand mark + section links + gold CTA
2. **Hero** — navy parallax waterfall, word-by-word headline reveal, dual CTA
3. **Trust strip** — “Claude AI is built right in” reassurance
4. **Who it's for** — 8 hover-lift cards
5. **What you get** — 5 dark-themed feature cards
6. **App preview** — 3 phone screenshots in custom CSS frames
7. **Pricing** — 3 tiers (Course $9.99 / Pro $29.99 / Founder $79.99)
8. **Get the app** — official Google Play badge + ghosted “Coming soon: App Store”
9. **Footer** — brand mark + nav links + copyright + Anthropic disclosure

## Brand tokens used (mirror the in-app palette)

| Token | Hex | Where |
|---|---|---|
| `--navy-900` | `#0A1A2A` | Hero, dark sections, footer |
| `--gold-500` | `#C8A25A` | CTAs, accents, founder card |
| `--builder`  | `#1D4ED8` | “BEST VALUE” badge on Pro tier |
| `--grey-100` | `#F7F6F1` | Light sections |

Fonts: **Outfit 900** (display) + **Inter** (body), loaded from Google Fonts.

---

## Update the iOS launch wording when StoreKit ships

In `index.html`, find the `<div class="badge badge--soon">` block inside
`<section id="get">` and replace it with the live Apple App Store badge.
Also update the `.get__finepoint` line below it.
