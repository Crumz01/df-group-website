# DF Group — website (Next.js)

> **Just need to change the words or pictures on the site?**
> Read **[WEBSITE-GUIDE.md](WEBSITE-GUIDE.md)** instead — no coding, nothing to
> install. This file is for developers working on the code.

The DF Group (Diligent Faith) site, built in **Next.js** with a refined,
animated version of the original "Research House" design. It is a static export
hosted on Netlify at **https://diligentfaith.com**, rebuilding automatically
whenever content changes.

> Your original single-file site is still here as **`index.html`** (untouched).
> Keep it as a backup until you're happy with the new build.

---

## 1. Install Node.js (one time)

Next.js needs Node.js, which isn't installed on this laptop yet.

1. Go to **https://nodejs.org** and download the **LTS** Windows installer.
2. Run it, click through with the defaults, finish.
3. Close and reopen your terminal (PowerShell), then confirm it worked:

   ```powershell
   node --version
   npm --version
   ```

   Both should print a version number.

## 2. Install the project's packages (one time)

In this folder (`C:\Users\Windows 11\Downloads\website`):

```powershell
npm install
```

## 3. Preview it on your laptop

```powershell
npm run dev
```

Then open **http://localhost:3000** in your browser. Edit any file and the page
updates automatically. Press `Ctrl + C` in the terminal to stop.

---

## 4. Build the files to put on GoDaddy

When you're happy with it:

```powershell
npm run build
```

This creates an **`out/`** folder containing the finished static site
(`index.html`, `team/`, `news/`, `reports/`, `contact/`, and a `_next/` folder
of assets).

Optional — preview that exact build locally before uploading:

```powershell
npm run serve
```

## 5. Publish it (Netlify) — and point diligentfaith.com at it

> **Important:** the existing diligentfaith.com runs on **GoDaddy Website
> Builder** (a closed drag-and-drop editor). It has no File Manager, no FTP and
> no `public_html`, so custom site files **cannot** be uploaded into it. We host
> the new site on Netlify (free) and simply point the GoDaddy **domain** at it.
> The domain stays registered with GoDaddy.

### 5a. Put the site online (about 2 minutes, no account needed to test)

1. Go to **https://app.netlify.com/drop**
2. Drag the **`out`** folder from `C:\Users\Windows 11\Downloads\website\`
   onto that page.
3. Netlify gives you a live URL like `random-name-123.netlify.app`.
   Open it and check every page.

To keep the site and attach a real domain, create a **free Netlify account**
when prompted (the dropped site is saved to it).

### 5b. Point diligentfaith.com to it

In **Netlify**: Site → *Domain management* → **Add a custom domain** →
enter `diligentfaith.com`. Netlify then shows you the DNS records to create.

In **GoDaddy**: *My Products* → your domain → **DNS** → **Manage Zones**, then
set the records Netlify gave you — typically:

| Type  | Name  | Value                     |
|-------|-------|---------------------------|
| A     | `@`   | `75.2.60.5`               |
| CNAME | `www` | `<your-site>.netlify.app` |

DNS changes take anywhere from a few minutes to a few hours. Netlify issues a
free HTTPS certificate automatically once the domain resolves.

> Keep the old Website Builder site published until the new one is live and
> verified. Once you're happy, you can cancel the Website Builder subscription
> (keep the **domain** registration).

### Updating the site later

Change files → `npm run build` → drag the new `out` folder onto your Netlify
site again (Deploys → drag-and-drop). That's the whole update loop.

---

## Adding real team photos later

The team currently uses initials. To add a photo for someone, drop the image in
`public/team/` and, in `app/team/page.tsx`, replace that person's initials block

```tsx
<div className="person__ph" aria-hidden="true">{p.mono}</div>
```

with

```tsx
<div className="person__ph"><img src="/team/kenneth.jpg" alt={p.name} /></div>
```

The photo styling is already handled in `app/globals.css`.

---

## Project map

```
app/
  layout.tsx        Fonts, metadata, header/footer/cookie chrome
  template.tsx      Smooth transition between pages
  globals.css       All styling (the "Research House" design system)
  page.tsx          Home
  team/ news/ reports/ contact/   The other four pages
components/         Header, Footer, Hero, Reveal (scroll animation),
                    Counter, PracticeIndex, ContactForm, MagneticButton,
                    CookieBanner
public/             logo.png, favicon.png (add /team photos here)
```
