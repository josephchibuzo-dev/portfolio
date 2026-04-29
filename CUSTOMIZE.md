# 🛠 Customization Guide — Before You Go Live

A clear checklist of every change you need to make before pushing to GitHub.
Open this file in VS Code and tick things off as you go.

---

## 1. REPLACE josephchibuzo-dev IN ALL FILES

Do a **global find & replace** in VS Code:
- Press `Ctrl + Shift + H`
- Find: `josephchibuzo-dev`
- Replace with: your actual GitHub username

This updates all the canonical URLs, OG tags, and sitemap at once.

---

## 2. YOUR EMAIL — contact.html

Find this line in `contact.html`:
```
href="mailto:ezenwa.joseph@email.com"
```
Replace with your real email address.

Also update the display text just below it:
```
ezenwa.joseph@email.com  →  your real email
```

---

## 3. SOCIAL LINKS — All pages (nav footer + contact.html)

Search for `href="#"` in each file and replace with your real links:

| Platform  | Where to find your link |
|-----------|--------------------------|
| GitHub    | https://github.com/josephchibuzo-dev |
| LinkedIn  | https://linkedin.com/in/YOUR-PROFILE |
| Twitter/X | https://x.com/YOUR-HANDLE |

Also update the Twitter handle meta tag in every page head:
```
<meta name="twitter:creator" content="@ezenwa_dev" />
```
Replace `@ezenwa_dev` with your real Twitter handle.

---

## 4. YOUR PHOTO — about.html

Find the photo placeholder block:
```html
<div class="photo-placeholder">
  <div class="photo-initials">EJC</div>
  <div class="photo-glow"></div>
</div>
```

Replace with:
```html
<div class="photo-placeholder" style="padding:0; overflow:hidden;">
  <img src="images/photo.jpg" alt="Ezenwa Joseph Chibuzo" style="width:100%; height:100%; object-fit:cover;" />
</div>
```

Then create an `images/` folder and drop your photo in as `photo.jpg`.
**Tip:** Use a clear, professional headshot. Square or portrait crop works best.

---

## 5. YOUR CV — about.html

Find this line:
```html
<a href="#" class="btn btn-ghost" download>Download CV</a>
```

Replace `href="#"` with the path to your CV file:
```html
<a href="files/Ezenwa-Joseph-Chibuzo-CV.pdf" class="btn btn-ghost" download>Download CV</a>
```

Create a `files/` folder and put your CV PDF inside.

---

## 6. PROJECT LINKS — projects.html

For each project card, find the GitHub and live demo links:
```html
<a href="#" class="plink" title="GitHub" target="_blank">
<a href="#" class="plink" title="Live Demo" target="_blank">
```

Replace each `#` with the actual GitHub repo URL and live site URL.
If a project doesn't have a live demo yet, you can remove that link.

---

## 7. OG IMAGE — for social sharing previews

The `og-image.svg` file works as a social preview card but some platforms
prefer PNG. To convert it:

**Option A (Easy):** Open `og-image.svg` in Chrome → Right-click → Save as image
**Option B:** Use https://cloudconvert.com to convert SVG → PNG (1200×630)

Rename the result `og-image.png` and place it in the root folder.

Then update the meta tag in every page from:
```
og-image.svg  →  og-image.png
```

---

## 8. SITEMAP DATES — sitemap.xml

Update the `<lastmod>` dates to today's date in YYYY-MM-DD format:
```xml
<lastmod>2024-01-01</lastmod>  →  <lastmod>2024-12-15</lastmod>
```

---

## 9. GITHUB PAGES SETUP

After pushing to GitHub:
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select `Deploy from a branch`
3. Branch: `main` / Folder: `/ (root)`
4. Click **Save**
5. Wait ~2 minutes, then visit: `https://josephchibuzo-dev.github.io/REPO-NAME`

---

## 10. OPTIONAL UPGRADES (do later)

- [ ] Add Google Analytics: get your tracking ID from analytics.google.com and add the script to each page `<head>`
- [ ] Connect a custom domain (e.g. ezenwa.dev) in GitHub Pages settings
- [ ] Wire up the contact form to a real email service like **Formspree** (free): replace the form's `action` attribute with your Formspree endpoint
- [ ] Add real project screenshots as images inside each `.pcard-header`

---

**You're good to go. Push hard. 🔥**
