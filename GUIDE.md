# Owner's Guide — guymarcozzi.com

Everything you need to run, edit, and publish this site. No coding experience needed — just a text editor (TextEdit on Mac works; [VS Code](https://code.visualstudio.com) is nicer).

## 1. See the site on your computer

1. Open the **Terminal** app.
2. Type `cd ` (with a space), drag this folder onto the Terminal window, press Return.
3. Paste this and press Return:
   ```
   python3 -m http.server 8080
   ```
4. Open your web browser and go to **http://localhost:8080**.
5. When you're done, go back to Terminal and press `Ctrl+C` to stop.

## 2. Change your email address or LinkedIn URL

Open `assets/js/main.js`. The very top looks like this:

```
var SITE = {
  name: "Guy Marcozzi",
  email: "guy@guymarcozzi.com",
  linkedin: "https://www.linkedin.com/in/guy-marcozzi-b12744a/"
};
```

Change the text between the quotes and save. Every email button and LinkedIn link on the site updates automatically.

**One extra step for email:** the same address is also written inside the five HTML files (so links work even if JavaScript is off). Do a find-and-replace in each file — or run this one line in Terminal from the site folder:

```
sed -i '' 's/guy@guymarcozzi.com/YOUR-REAL-EMAIL/g' *.html
```

## 3. Change any text

Open the page's HTML file. Everything meant to be edited is marked with comments like:

```
<!-- EDIT: hero headline, tagline, and supporting sentence -->
   ...text you can change...
<!-- /EDIT -->
```

Change only the text between the markers, save, and refresh your browser. Don't delete the angle-bracket tags around the text (things like `<p>` and `</p>`) — they're the structure.

## 4. Swap the headshot

1. Name your new photo `headshot.jpg` and drop it into `assets/images/`, replacing the old one (keep a copy of the original somewhere first).
2. Do the same with a square-ish crop saved as `headshot-small.jpg` (used on the Bio page).
3. Best size: about 1200–1600 pixels wide for the big one, 640 for the small one. The free tool at [squoosh.app](https://squoosh.app) shrinks photos nicely.

## 5. Add the book cover and details

Open `book.html`:

1. Save your cover image as `assets/images/book-cover.jpg`.
2. Find the comment that starts `<!-- EDIT: when the cover art is ready` and follow it — delete the gray placeholder line and un-comment the image line (remove the `<!--` and `-->` around it).
3. Fill in the title at the top of the page, the description paragraphs, and the retailer links — each spot has an `EDIT` comment telling you what goes there.

## 6. Add a speaking video

Open `speaking.html` and find the big comment block titled **HOW TO ADD A VIDEO** — it walks you through it. In short: copy the YouTube video's ID (the code after `v=` in its address), paste it into the iframe line where it says `VIDEO_ID_HERE`, un-comment the iframe, and delete the "Video coming soon" line.

## 7. Publish to the internet (GitHub Pages, free)

1. Create a free account at [github.com](https://github.com).
2. Make a new repository named, e.g., `guymarcozzi.com`. Choose "Public".
3. On the repository page, click **uploading an existing file**, drag in everything inside this folder (including the `assets` folder), and click **Commit changes**.
4. Go to **Settings → Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, choose branch **main**, folder **/ (root)**, and Save.
5. After a minute or two your site is live at `https://YOURUSERNAME.github.io/guymarcozzi.com/`.

### Point your own domain at it (Namecheap)

1. In the GitHub Pages settings, enter your domain (e.g. `guymarcozzi.com`) under "Custom domain" and save. Check "Enforce HTTPS" once it's available.
2. Log in to Namecheap → Domain List → **Manage** next to your domain → **Advanced DNS**.
3. Add these records:
   - **A Record**, Host `@`, Value `185.199.108.153`
   - **A Record**, Host `@`, Value `185.199.109.153`
   - **A Record**, Host `@`, Value `185.199.110.153`
   - **A Record**, Host `@`, Value `185.199.111.153`
   - **CNAME Record**, Host `www`, Value `YOURUSERNAME.github.io.`
4. Delete any parking-page records Namecheap put there. DNS can take up to a few hours to update.

## 8. When things look broken

- **Changed a file but nothing happened?** Hard-refresh the browser: `Cmd+Shift+R`.
- **Page looks unstyled?** You probably opened the file directly (address starts with `file://`). Use the local server from step 1 instead.
- **Broke something and can't find it?** Undo (`Cmd+Z`) in your editor, or re-download the last good copy from GitHub.
