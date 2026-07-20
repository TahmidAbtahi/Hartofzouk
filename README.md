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

## Showcase hero video optimization
The showcase page tries assets/showcase-hero.webm first, then .mp4, then falls back
to the static hero. To create both from the downloaded Higgsfield mp4:
  ffmpeg -i input.mp4 -an -c:v libx264 -crf 26 -preset slow -movflags +faststart assets/showcase-hero.mp4
  ffmpeg -i input.mp4 -an -c:v libvpx-vp9 -crf 36 -b:v 0 assets/showcase-hero.webm
Result: ~0.8-1.5MB webm / ~1.5-2.5MB mp4 for a 5s 720p clip. The page uses
preload="metadata" + plays only in view, so it will not slow initial page load.
(You can also upload the mp4 here in chat and the files will be converted for you.)

## Client self-service gallery (no code needed)
1. On github.com, open the repo → assets → gallery
2. "Add file" → "Upload files" → drag photos in → Commit
3. Within ~1 minute the build-gallery Action regenerates the photo list
   and the Gallery page shows them automatically (newest first).
Filenames become captions: "summer-showcase-finale.jpg" → "Summer Showcase Finale".
To reconnect Gallery in the site nav when ready: in js/main.js add back
  <li><a href="gallery.html" data-page="gallery">Gallery</a></li>
Tip: resize photos to ~1600px before upload (phones export 4-8MB originals).
