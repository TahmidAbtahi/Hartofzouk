# Hart of Zouk — Website

## Structure
```
index.html        Home (hero, welcome, pillars, testimonials, how-it-works, upcoming, newsletter)
events.html       Upcoming events + interactive calendar
past-events.html  100+ event archive with category filters
gallery.html      Auto-rotating strip + masonry photo grid
about.html        Story, values, dance styles, team, partners
services.html     Dance events / Studio rental / Event decor
contact.html      Contact cards, message form, Google Map
css/style.css     Shared design system (brand colors, nav, footer)
js/main.js        Shared nav + footer injection, dropdown, scroll reveals
assets/           logo.png, watermark.png  ← drop more images here
```

## Editing events
Open `events.html`, find `const EVENTS = [...]` — add/edit entries there.
The page (rows, month groups, calendar dots) renders automatically.

## Connecting Google Drive photos
1. In Drive, right-click a photo → Share → "Anyone with link" → copy link
2. Extract the FILE_ID from: drive.google.com/file/d/FILE_ID/view
3. In gallery.html / past-events.html, replace `driveId: null` with `driveId: 'FILE_ID'`

## Contact form delivery
The form is front-end only. To receive submissions, sign up at formspree.io (free),
then point the form at your Formspree endpoint.

## Hosting
Pure static files — host free on GitHub Pages, Netlify, or Cloudflare Pages.

## Cinematic hero image (Higgsfield)
The homepage hero uses an AI-generated cinematic image with a slow Ken Burns drift.
It loads `assets/hero.jpg` if present, else falls back to the hosted CDN copy.
RECOMMENDED: download the CDN image once and save it as `assets/hero.jpg` so the
site never depends on the external link:
https://d8j0ntlcm91z4.cloudfront.net/user_3ErSakflWmv1YTxDDtKFlSXTsyT/hf_20260711_021503_9312962b-70dd-467f-a9db-844731733724.png

## Summer Showcase 2026
Dedicated page: showcase.html (hero, night flow, timeline, venue + map).
Featured in the Events dropdown, homepage upcoming cards, and events.html list.
When tickets go live, replace the "Tickets released next week" pill in
showcase.html with a ticket link button.

## Past Events placeholder
Past Events now routes to Instagram (@hartofzouk) as a placeholder.
Swap the URL in js/main.js (two spots) when the archive page is ready —
past-events.html is still included in the folder, fully built.
