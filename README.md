# Guy Marcozzi — moltotempo.com

Personal website for Guy Marcozzi — Independent Board Member, Executive Advisor, Speaker, Author, and host of the GeoHeroes podcast series. Pure static HTML/CSS/JS, no build step, no dependencies. Publishing target: **moltotempo.com** on Namecheap Stellar hosting (see `PUBLISH-NAMECHEAP.md`).

## Run locally

```
python3 -m http.server 8080
```

Then open http://localhost:8080. (Alternative: `npx serve`.)

## Files

```
index.html            Home
bio.html              Bio (+ one-page PDF download)
book.html             Mostly True — live Amazon listing, cover, description
speaking.html         Speaking topics + two real GBA talk cards
podcast.html          GeoHeroes episode archive (26 episodes, native players)
assets/css/main.css   All styles
assets/js/main.js     Contact constants + mobile nav + fade-up animation
assets/images/        headshot.jpg, headshot-small.jpg, book-cover.jpg, favicon.svg
assets/guy-marcozzi-bio.pdf   Generated one-page bio
GUIDE.md              Plain-English owner's guide (editing, images, videos)
PUBLISH-NAMECHEAP.md  Click-by-click publishing steps for moltotempo.com
```

## What's real (all verified)

- Bio: public LinkedIn + press coverage (Duffield CEO → Verdantas EVP, University
  of Delaware board, 2012 DE Engineer of the Year, PE/F.ASCE, UD adjunct).
- Book: *Mostly True: Observations about Life, Work and Being Human* by Marco Guy
  (Guy's pen name) — live Amazon link, real cover, description from the listing.
- Podcast: all 26 GeoHeroes episodes from the GBA Podcast's official RSS feed,
  with native audio players; Guy's own featured episode highlighted.
- Speaking: two real GBA 2021 Spring Conference talks (Key Indicators; We Were
  Hacked panel), linking to the GBA members portal.
- Contact email: guy@moltotempo.com (single edit point: top of assets/js/main.js).
- Design: reviewed by a multi-agent design panel (typography, layout, a11y,
  interaction, persuasion lenses) + graded Opus implementation passes.

## Remaining for Guy / Nick

- [ ] Confirm the "former GBA president" wording on the podcast page (sourced
      from GBA's own feed, but worth Guy's sign-off)
- [ ] Optionally replace the drafted bio wording with Guy's preferred version
- [ ] Add more board roles to bio.html if Guy wants them listed
- [ ] The speaking-talk links point at the GBA members sign-in URL supplied by
      Nick; if it ever breaks, swap in https://www.geoprofessional.org/2021-spring-conference/
      (noted in the EDIT comment)
- [ ] New GeoHeroes episodes: add a row in podcast.html (instructions in its EDIT
      comment; data comes from gbapodcast.com/rss)
- [ ] Publish: follow PUBLISH-NAMECHEAP.md, then verify https://moltotempo.com

Every editable region is wrapped in `<!-- EDIT: ... -->` comments.
