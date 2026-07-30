# DF Group website — owner's guide

Everything below is done in a **web browser**. Nothing needs to be installed.

---

## Part 1 — How to update the website (day to day)

1. Go to **https://pagescms.org**
2. Click **Sign in with GitHub** and log in
3. Open the **df-group-website** repository
4. In the left sidebar choose what to change:
   - **Team** — add/remove people, change roles, bios, photos
   - **News** — add/remove news items
5. Make your changes in the boxes
6. Click the green **Save** button (top right)
7. Wait about **1–2 minutes**, then refresh the website — the change is live

That is the whole process. No code, no uploading files.

### Adding a person's photo
Open the person in **Team**, click the **Photo** field, upload a square image
(about 600 x 600 pixels works well), then **Save**.
Leave the photo empty and the card shows their initials instead.

### Adding a new team member
In **Team**, scroll to the section you want, click **+ Add an item**, fill in
the fields, then **Save**.

---

## Part 2 — Who to add as an editor

Anyone with access to the GitHub repository can use the editor above.

To add someone:
1. Go to `https://github.com/<owner>/df-group-website/settings/access`
2. Click **Add people**, enter their GitHub username, and confirm
3. They can then sign in at pagescms.org and edit

To remove someone, use the same screen and remove them.

---

## Part 3 — How the site works (one paragraph)

The website content is stored in the **GitHub** repository. **Netlify** watches
that repository, and every time content changes it rebuilds the site
automatically and publishes it. **Pages CMS** is just a friendly set of forms
on top of GitHub. The domain name stays registered at **GoDaddy** and points
to Netlify.

```
Edit in Pages CMS  ->  saved to GitHub  ->  Netlify rebuilds  ->  site is live
```

---

## Part 4 — Handover checklist (transferring ownership)

Do these once, so the site belongs to DF Group and not to any individual.

- [ ] Owner creates a **GitHub** account (github.com)
- [ ] Current repo owner: repo **Settings -> Danger Zone -> Transfer ownership**
      to the new account (or, better, to a GitHub **Organization** for DF Group)
- [ ] Owner accepts the transfer from the email GitHub sends
- [ ] Owner creates a **Netlify** account and chooses *Continue with GitHub*
- [ ] In Netlify: **Add new site -> Import an existing project -> GitHub ->
      df-group-website -> Deploy**
- [ ] Check the new Netlify address loads the site correctly
- [ ] Point the domain (see Part 5)
- [ ] Delete the old Netlify site once the new one is confirmed working

Note: the GitHub repository is **public**. This is required for automatic
publishing on Netlify's free plan, and is normal for a marketing website — it
contains no passwords or customer data, only the public site content.

---

## Part 5 — Pointing diligentfaith.com at the site

In **Netlify**: Site -> *Domain management* -> **Add a domain** ->
`diligentfaith.com`. Netlify shows the exact records to use.

In **GoDaddy**: *My Products* -> the domain -> **DNS** -> set:

| Type  | Name  | Value                     |
|-------|-------|---------------------------|
| A     | `@`   | `75.2.60.5`               |
| CNAME | `www` | `<your-site>.netlify.app` |

Remove any old `A`/`CNAME` records that pointed at GoDaddy Website Builder.

**Do not change MX records** — those keep company email working.

Changes usually take 15 minutes to 2 hours. Netlify adds HTTPS automatically.

**To undo:** in GoDaddy, reconnect the domain to the Website Builder site
(Websites + Marketing -> Settings -> Domain). The old site reappears. Keep the
Website Builder subscription active until the new site is confirmed working.

---

## Part 6 — What needs a developer

Editable without a developer: **team members, photos, news items.**

Needs a web developer: new page types, layout or design changes, and the
wording on the Home/Contact pages (currently set in the code).

The project is a standard **Next.js** site — any web developer can work on it.
Technical setup notes are in `README.md`.
