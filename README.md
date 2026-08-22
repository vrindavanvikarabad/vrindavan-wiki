# Project Vrindavan — website

The website for Project Vrindavan: 3.5 acres at the foothills of Anantagiri, Telangana.

| | |
|---|---|
| **Live site** | https://thevrindavan.org |
| **GitHub Pages URL** | https://vrindavanvikarabad.github.io/vrindavan-wiki/ (redirects to the custom domain) |
| **Repo** | https://github.com/vrindavanvikarabad/vrindavan-wiki |
| **Hosting** | GitHub Pages, published by GitHub Actions on every push to `main` |
| **Stack** | Vite + React 19 + TypeScript + React Router + MDX + Tailwind CSS v4 |

---

## 1. Quick start

You need [Node.js](https://nodejs.org) 20 or newer (that's what CI uses).

```bash
npm install        # once, after cloning
npm run dev        # dev server at http://localhost:5173 — edits appear instantly
npm run build      # type-check + production build into dist/
npm run preview    # serve dist/ locally, to check the real build before pushing
```

There are only those three scripts (see [package.json](package.json)). `npm run build` runs
`tsc -b && vite build`, so **a TypeScript error fails the build** — and therefore fails the
deploy. If `npm run build` passes locally, the deploy will almost certainly pass too.

---

## 2. Project organization

```
vrindavan/
├── index.html                 ← the single HTML page; loads fonts + mounts React
├── vite.config.ts             ← build config (base path, MDX, React, Tailwind plugins)
├── package.json               ← dependencies and the dev/build/preview scripts
├── tsconfig*.json             ← TypeScript settings (app + node split)
│
├── .github/workflows/
│   └── pages.yml              ← the deploy pipeline: build → upload → publish to Pages
│
├── public/                    ← copied verbatim into dist/, filenames untouched
│   ├── CNAME                  ← "thevrindavan.org" — keeps the custom domain across deploys
│   └── favicon.svg
│
├── src/
│   ├── main.tsx               ← entry point: React root, Router, MDX provider
│   ├── App.tsx                ← the route table (URL → page component)
│   ├── index.css              ← Tailwind import + the colour/font theme
│   ├── navItems.ts            ← the header nav list, in one place
│   ├── galleryImages.ts       ← single source of truth for every photo + caption
│   ├── mdx.d.ts               ← tells TypeScript that `import X from "./foo.mdx"` is legal
│   │
│   ├── pages/                 ← one file per URL: Home, About, Space, Experience,
│   │                            Location, Gallery, Team, Credits, NotFound
│   ├── components/            ← reusable UI pieces used by pages and MDX content
│   ├── content/               ← the long-form prose, as MDX: About, Space,
│   │                            Experience, Location
│   └── assets/
│       ├── vrindavan-banner.jpeg
│       └── gallery/           ← every photograph on the site (web-sized .jpg)
│
├── latest_photos/             ← raw photo drops, staging only; not used by the site
└── dist/                      ← build output. Generated, git-ignored, never edit
```

### The split worth understanding

Three folders under `src/` look similar but do different jobs:

- **`pages/`** — a page is *layout*: which hero photo, what title, and which content to drop in.
  Pages are short. [About.tsx](src/pages/About.tsx) is 24 lines: a `<Hero>` and a `<Prose>` wrapper
  around the MDX file.
- **`content/`** — a `.mdx` file is *words*. Markdown, plus the ability to drop a React component
  mid-paragraph. This is where you edit text without touching code.
- **`components/`** — reusable building blocks. `Hero`, `Carousel`, `Callout`, `PullQuote`,
  `Stats`, `FeatureCard`, `CTA`, `SectionTitle`, `Prose`, `Header`, `Footer`, `Layout`,
  `MdxLink`, `YouTube`.

So: **to change wording, edit `src/content/*.mdx`. To change structure or design, edit
`src/pages/` or `src/components/`.**

---

## 3. The technologies — and a React primer using this codebase

### What each piece does

| Tool | Job here |
|---|---|
| **React 19** | Builds the UI out of components. Describe what the page should look like for a given state; React updates the DOM. |
| **TypeScript** | Types on component props. Pass a `Hero` the wrong prop and the build fails instead of the page breaking. |
| **Vite** | Dev server (instant hot reload) and production bundler. Also hashes and optimizes images. |
| **React Router v7** | Maps URLs to page components, client-side — clicking a nav link swaps content without reloading the page. |
| **MDX** | Markdown that can contain React components. Powers `src/content/`. |
| **Tailwind CSS v4** | Styling via utility classes in the markup, plus `@tailwindcss/typography` for prose. No separate `.css` files per component. |
| **Embla Carousel** | The photo sliders (+ its autoplay plugin). |

Everything is static: the build produces plain HTML/CSS/JS. **There is no server, no database, and
no backend.** That's what makes GitHub Pages sufficient.

### React in eight ideas, each with real code from this repo

#### a) A component is a function that returns markup

That markup-looking syntax is JSX. It compiles to plain JavaScript.

```tsx
// src/pages/Space.tsx
export default function Space() {
  return (
    <>
      <Hero image={img} title="The space" height="short" align="start" />
      <Prose>
        <Content />
      </Prose>
    </>
  );
}
```

`<>...</>` is a *fragment* — "several things, no extra wrapper element." Component names must be
capitalised; lowercase means a real HTML tag.

#### b) Props are the function's arguments, typed

```tsx
// src/components/Callout.tsx
type Props = {
  title?: string;                          // ? = optional
  variant?: "info" | "quote" | "tip";      // only these three strings are allowed
  children: ReactNode;                     // whatever is nested inside the tag
};

export default function Callout({ title, variant = "info", children }: Props) { ... }
```

Called from MDX as `<Callout title="Our mission" variant="quote">…</Callout>`. Misspell `variant`
as `"qoute"` and `npm run build` refuses — that's the TypeScript payoff.

#### c) `children` is how components compose

`Prose` doesn't know or care what it wraps; it just styles whatever it is given:

```tsx
// src/components/Prose.tsx
export default function Prose({ children }: Props) {
  return <article className="mx-auto max-w-2xl px-6 py-20">
    <div className="prose prose-lg prose-headings:font-serif ...">{children}</div>
  </article>;
}
```

`Hero` does the same for the call-to-action buttons on the home page. Note `className`, not
`class` — `class` is a reserved word in JavaScript.

#### d) Curly braces escape from markup back into JavaScript

```tsx
<div>{selectedIndex + 1} / {slides.length}</div>       // src/components/Carousel.tsx
```

Anything inside `{}` is an expression. That's also how values are passed as props:
`image={img}` passes a variable, `title="Gallery"` passes a literal string.

#### e) Lists come from `.map()`, and every item needs a `key`

```tsx
// src/pages/Gallery.tsx
{galleryImages.map((img) => (
  <figure key={img.src} className="break-inside-avoid">
    <img src={img.src} alt={img.alt} loading="lazy" className="w-full rounded-md" />
    <figcaption className="mt-1.5 text-xs text-earth-500">{img.caption}</figcaption>
  </figure>
))}
```

The `key` is React's identity tag for each item, so it can tell what changed instead of rebuilding
the whole list. Adding a photo to `galleryImages.ts` makes it appear here automatically — no
change to the page.

#### f) State: `useState` — data that changes, and re-renders the UI when it does

```tsx
// src/components/Carousel.tsx
const [selectedIndex, setSelectedIndex] = useState(0);
```

`selectedIndex` is the current value; `setSelectedIndex(3)` changes it *and* tells React to
re-render this component. You never touch the DOM by hand — you change state and let the markup
be re-derived. That's the whole mental model: **UI = f(state)**.

#### g) Effects: `useEffect` — run something after render, in response to a change

```tsx
// src/components/Layout.tsx
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);      // dependency array: re-run only when the URL path changes
  return null;
}
```

Without this, navigating from the bottom of one page would land you mid-way down the next one.
A component returning `null` renders nothing — it exists purely for that behaviour.

`Carousel` uses the same hook to subscribe to Embla's `select` event, and returns a cleanup
function (`emblaApi.off(...)`) that React runs on unmount — the standard subscribe/unsubscribe
pattern.

#### h) Routing: URLs in, components out

```tsx
// src/App.tsx
<Routes>
  <Route element={<Layout />}>          {/* shared header/footer wrapper */}
    <Route index element={<Home />} />  {/* "/" */}
    <Route path="about" element={<About />} />
    <Route path="gallery" element={<Gallery />} />
    <Route path="*" element={<NotFound />} />   {/* anything unmatched */}
  </Route>
</Routes>
```

`Layout` renders `<Outlet />` — the placeholder where the matched child page goes. Navigation uses
`<Link to="/about">` rather than `<a href>`, so React Router intercepts the click and swaps
components instead of reloading the page.

### Two project-specific patterns

**Images are imported, not referenced by path.**

```tsx
import img from "../assets/gallery/mattillu-approach.jpg";
```

Vite turns that into a hashed URL like `/assets/mattillu-approach-a1b2c3.jpg`. The hash means
browsers can cache aggressively and still pick up a changed photo instantly. Consequence: photos
belong in `src/assets/` (processed), not `public/` (copied as-is).

**Photos are data.** [galleryImages.ts](src/galleryImages.ts) is one typed list of
`{ src, alt, caption, category }`, plus a helper:

```ts
export function imagesByCategory(...categories: GalleryCategory[]): GalleryImage[] {
  return galleryImages.filter((img) => categories.includes(img.category));
}
```

So content can pull a themed slider in one line — from inside MDX:

```mdx
<Carousel slides={imagesByCategory("mattillu", "zen", "amphitheatre")} />
```

**How MDX links stay working.** `main.tsx` maps every `<a>` in MDX to
[MdxLink](src/components/MdxLink.tsx), which sends internal links through React Router and opens
external ones in a new tab:

```tsx
const mdxComponents = { a: MdxLink };
// <MDXProvider components={mdxComponents}> wraps the whole app
```

That's why plain markdown links (`[the gallery](/gallery)`) navigate correctly without a full page
reload.

---

## 4. Common edits

**Change wording** → edit the relevant `src/content/*.mdx`. Markdown, so `##` is a heading,
`**bold**` is bold. Components like `<Callout>`, `<PullQuote>`, `<Carousel>` must be imported at
the top of that MDX file (they already are, in each).

**Add photos**
1. Drop web-sized `.jpg` files into `src/assets/gallery/` with descriptive kebab-case names.
   (`latest_photos/` is a raw staging area — the site never reads from it.)
2. Add an entry to [galleryImages.ts](src/galleryImages.ts): `import`, then an object with
   `src`, `alt`, `caption`, `category`. Pick an existing `GalleryCategory` or add one to the union type.
3. It now appears in the Gallery grid, the main carousel, and any category slider that includes it.

Keep files reasonably sized — the largest photos here are ~560 kB and that's already on the
heavy side for a phone connection.

**Add a page**
1. Create `src/pages/Thing.tsx` (copy `Space.tsx` as the template).
2. Optionally create `src/content/Thing.mdx` for the prose.
3. Register the route in [App.tsx](src/App.tsx): `<Route path="thing" element={<Thing />} />`.
4. Add it to [navItems.ts](src/navItems.ts) if it should appear in the header.

**Colours and fonts** live in the `@theme` block in [index.css](src/index.css) — `forest`
(brand green), `cream` (backgrounds), `earth` (text), `clay` (terracotta accent), with `Fraunces`
for headings and `Inter` for body. Changing `--color-forest-700` there updates every
`text-forest-700` on the site.

> **Known TODO:** [Team.tsx](src/pages/Team.tsx) still has placeholder names and bios.

---

## 5. Hosting: what actually serves the traffic

**GitHub Pages serves every request.** GitHub's CDN returns the static files; the response headers
say `server: GitHub.com`. There is no other host, no AWS, nothing to pay for or patch.

The published files come from a **GitHub Actions workflow**, not from a branch. That distinction
matters: there is no `gh-pages` branch to look at, and `dist/` is deliberately git-ignored — you
never commit build output. [.github/workflows/pages.yml](.github/workflows/pages.yml) does it:

```
push to main  →  checkout  →  npm ci  →  npm run build
              →  cp dist/index.html dist/404.html
              →  upload-pages-artifact (dist/)
              →  deploy-pages  →  live on thevrindavan.org
```

Two details in there are load-bearing:

- **`cp dist/index.html dist/404.html`** — this is a single-page app: only `index.html` really
  exists, and React Router invents the rest of the URLs client-side. If someone opens
  `thevrindavan.org/gallery` directly, GitHub looks for a file at `/gallery`, doesn't find one, and
  serves `404.html`. Because that file *is* the app, React boots, reads the URL, and renders the
  Gallery page. Delete this step and every deep link 404s.
- **`permissions: pages: write` + `id-token: write`** — required for the deploy to authenticate.

### Setting this up from scratch (already done; recorded for reference)

1. Push the repo to GitHub.
2. Add `.github/workflows/pages.yml` (as above).
3. **Settings → Pages → Build and deployment → Source: GitHub Actions.** Not "Deploy from a
   branch" — this is the step people miss.
4. Push to `main`. Watch **Actions** tab; the `deploy` job prints the live URL.
5. Confirm `vite.config.ts` `base` matches where the site is served from (see §7).

### Deploying a change

Just push to `main`:

```bash
git add -A && git commit -m "Add new photos" && git push
```

Then watch the **Actions** tab (or `gh run list --workflow=pages.yml` if you have the GitHub CLI).
A build takes a couple of minutes; the CDN can take another minute to show it. If a build fails,
the previous version stays live — a broken build cannot take down the site.

---

## 6. Custom domain: thevrindavan.org via GoDaddy

The domain is registered at [GoDaddy](https://www.godaddy.com/en-in) (nameservers
`ns51/ns52.domaincontrol.com`). Two halves have to agree: **DNS at GoDaddy** points the domain at
GitHub, and **GitHub** accepts requests for that name.

### At GoDaddy — DNS Management → Records

This is the "some 443 or something" you half-remember. It's actually two things, neither of which
is a port you type into GoDaddy: the **four A records** below, and GitHub's **Enforce HTTPS**
toggle (HTTPS being port 443). GoDaddy needs only the records.

Four `A` records for the apex domain, all with name `@`:

| Type | Name | Value | TTL |
|---|---|---|---|
| A | @ | `185.199.108.153` | 600 |
| A | @ | `185.199.109.153` | 600 |
| A | @ | `185.199.110.153` | 600 |
| A | @ | `185.199.111.153` | 600 |

Those are GitHub Pages' anycast IPs — four for redundancy. Plus one `CNAME` so `www` works:

| Type | Name | Value | TTL |
|---|---|---|---|
| CNAME | www | `vrindavanvikarabad.github.io` | 600 |

Also: **delete GoDaddy's default parked `A` record** (it points `@` at a GoDaddy landing page) and
turn off any domain **Forwarding**, or you'll get GoDaddy's parking page instead of the site.
GitHub also publishes IPv6 `AAAA` records (`2606:50c0:8000::153` … `8003::153`) — optional, nice
to have.

Verify from a terminal — this is the live, current state:

```bash
$ dig +short thevrindavan.org A
185.199.110.153
185.199.109.153
185.199.108.153
185.199.111.153

$ dig +short www.thevrindavan.org CNAME
vrindavanvikarabad.github.io.
```

### At GitHub — Settings → Pages

1. **Custom domain** → `thevrindavan.org` → Save. GitHub checks DNS; expect a green tick.
2. Wait for the TLS certificate to be issued (usually minutes, occasionally up to an hour),
   then tick **Enforce HTTPS** so `http://` visitors are redirected to `https://`.

### The `public/CNAME` file — don't delete it

[public/CNAME](public/CNAME) contains exactly `thevrindavan.org`. With Actions-based deploys, the
published artifact *is* the site, and GitHub reads the custom domain from a `CNAME` file at its
root. Without that file, a deploy can wipe the custom-domain setting and the site falls back to
`github.io`. It lives in `public/` because Vite copies that folder into `dist/` untouched.

---

## 7. The one gotcha that will bite you: `base` ↔ `basename`

Two settings must agree, or the site loads and renders **nothing** — a blank page with a working
tab title and favicon. (This exact bug happened once; the tell-tale sign is HTML that loads while
the body stays empty.)

| Serving from | `vite.config.ts` `base` | `src/main.tsx` `basename` |
|---|---|---|
| Custom domain root — `thevrindavan.org` (**current**) | `"/"` | `"/"` |
| Pages project site — `…github.io/vrindavan-wiki/` | `"/vrindavan-wiki/"` | `"/vrindavan-wiki"` |

`base` prefixes built asset URLs; `basename` tells React Router what part of the path to ignore.
If `basename` is `/vrindavan-wiki` but the real path is `/`, no route matches and React renders an
empty outlet — hence the blank page. Every internal link goes through React Router, so this one
value is the only place the prefix is set: fix it there and all links follow.

---

## 8. Troubleshooting

| Symptom | Likely cause |
|---|---|
| Blank page, but tab title/favicon appear | `base`/`basename` mismatch — §7. Check the browser console for 404s on `/assets/*.js`. |
| Deep links like `/gallery` 404 on refresh | The `404.html` copy step in the workflow is missing or failed. |
| Site reverted to `github.io`, custom domain unset | `public/CNAME` missing from the build. |
| `thevrindavan.org` shows a GoDaddy parking page | Leftover default A record or Forwarding still enabled at GoDaddy. |
| "Domain does not resolve to the GitHub Pages server" in Settings → Pages | DNS not propagated yet, or an A record has a typo. Confirm with `dig +short thevrindavan.org A`. |
| Push didn't change the live site | Check the Actions run. A red build means the old version is still being served — the deploy never ran. |
| Deploy is green but you see the old page | CDN/browser cache; `cache-control` is 600s. Hard-reload, wait a minute. |
| Build fails locally on a type error | That's the point — `npm run build` runs `tsc -b` first. Fix the type, don't bypass it. |

Useful checks:

```bash
curl -sSI https://thevrindavan.org | head -5     # expect: HTTP/2 200, server: GitHub.com
npm run build && npm run preview                  # test the real build before pushing
```
