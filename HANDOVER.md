# Handover record — DF Group website

> **If you have been asked to update the website, read `WEBSITE-GUIDE.md`
> instead.** That is the practical, step-by-step guide.
>
> This file is a record of how the site was set up and who owns what. Keep it
> for reference; you do not need it for day-to-day editing.

---

## Status: migration complete

The website moved from GoDaddy Website Builder to a custom Next.js site.

- [x] Site built and published
- [x] Code and content owned by the company GitHub account (`workklk8-oss`)
- [x] Hosting on Netlify (site `calm-kleicha-1c8872`), building from GitHub
- [x] `diligentfaith.com` pointed at Netlify
- [x] HTTPS certificate issued
- [x] Company email (Microsoft 365) unaffected

---

## Who owns what

| Thing | Where it lives | Notes |
|---|---|---|
| Domain name | GoDaddy | Renew yearly. Keep auto-renew on. |
| DNS records | GoDaddy | Only the `A` and `www CNAME` records relate to the website. |
| Content and code | GitHub `workklk8-oss/df-group-website` | Public repository. Contains no passwords or customer data. |
| Hosting | Netlify, site `calm-kleicha-1c8872` | Free plan. Rebuilds automatically on every content change. |
| Editor | pagescms.org | Stores nothing itself; reads and writes the GitHub repository. |
| Company email | Microsoft 365 | Completely separate from the website. |

---

## DNS records that point the domain at the website

Only these two relate to the website:

| Type | Name | Value |
|---|---|---|
| A | `@` | `75.2.60.5` |
| CNAME | `www` | `calm-kleicha-1c8872.netlify.app` |

**Every other DNS record is for email** (`MX`, all `TXT`, `autodiscover`,
`msoid`, `lyncdiscover`, `sip`, the `SRV` records, and the DKIM/SPF entries).
Do not change them.

### Previous values, if the old site ever needs to be restored

| Type | Name | Old value |
|---|---|---|
| A | `@` | `13.248.243.5` and `76.223.105.230` (GoDaddy Website Builder) |
| CNAME | `www` | `diligentfaith.com` |

---

## Giving someone access to edit the website

1. Go to `https://github.com/workklk8-oss/df-group-website/settings/access`
2. **Add people** -> their GitHub username -> **Write** access
3. They accept the emailed invitation
4. They sign in at pagescms.org and can edit immediately

Remove someone from the same screen. Removing their GitHub access removes their
ability to edit the website.

---

## Notes for a future developer

- Next.js with the App Router, TypeScript, static export (`output: "export"`)
- Editable content is JSON in `content/`; the editing forms are defined in
  `.pages.yml`
- Build settings for Netlify are in `netlify.toml`
- Local development instructions are in `README.md`
- The contact form uses Netlify Forms. `public/__forms.html` exists so Netlify
  can detect the form at deploy time — do not delete it.
