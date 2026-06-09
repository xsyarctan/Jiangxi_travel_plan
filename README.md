# Jiangxi East Route Travel Website Handoff

This bundle contains structured materials for a code agent to build a visual, companion-facing webpage for the Jiangxi east-route travel plan.

## Webpage status

The first static GitHub Pages-ready webpage is implemented at `index.html`. It loads the bundled JSON files directly, so the simplest local preview is:

```bash
python3 -m http.server 5173
```

Then open:

```text
http://localhost:5173/
```

No build step or committed API secret is required. The hero route overview uses Leaflet with an online 高德/AMap raster tile layer and automatically falls back to OpenStreetMap if tile loading fails.

## Publish to GitHub Pages

This is a static site: no install or build command is needed.

1. Create a GitHub repository. For a user site, name it `<username>.github.io`; for a project site, any repository name is fine.
2. Push this folder to the repository’s `main` branch.
3. In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the source.
4. The included workflow at `.github/workflows/pages.yml` will deploy the site after each push. It publishes only `index.html`, `app.js`, `styles.css`, `data/`, `public/`, and `.nojekyll`, leaving handoff notes and raw assets out of the public Pages artifact.

Because all page, data, and asset URLs are relative, the site works both at `https://<username>.github.io/` and at `https://<username>.github.io/<repo>/`.

## Current implementation TODOs

- TODO: geocode exact lodging coordinates and replace the placeholder values in `data/geocoded_locations.json`; `data/geocoded_locations.example.json` is kept as a reset template.
- TODO: add or replace lodging photos under `public/images/lodging/` using the filenames referenced in `data/lodging_options.json`.
- TODO: keep `public/sketches/lushan_route_sketch.png` and `public/sketches/sanqingshan_route_sketch.png` available; the webpage shows visible placeholders if either sketch is missing.
- TODO: confirm whether the final night is direct return to Shanghai on June 27 or one extra night in Shangrao.

## Source
- Main source: Notion page **东线讨论版** under Route Options.
- Export prepared on 2026-06-09.
- Some raw Notion image attachment references are preserved, but actual image binaries were not downloaded in this environment.

## Contents

```text
data/
  trip_plan.json              # high-level itinerary, play sections, route logic
  commute_options.json/csv    # likely trains, buses, flight, costs
  lodging_options.json/csv    # lodging candidates grouped by city/resort
  budget_model.json           # budget assumptions and major cost categories
  map_and_route_notes.json    # map nodes, route overlay guidance, sketch assets expected

docs/
  website_brief.md            # product/design brief for the webpage
  data_schema.md              # how to interpret the data files
  implementation_notes.md     # practical build notes and caveats
  content_copy.md             # companion-facing copy fragments

prompts/
  CODEX_PROMPT.md             # ready-to-paste prompt for Codex/code agent

assets/
  README.md                   # where to place lodging photos and route sketches
  notion_image_refs/          # image-reference manifest
  manual_image_downloads/     # I manually download the images that GPT failed with Notion APP request
```

## Most important desired website behavior

The website should not feel like a text dump. It should visually answer:

1. Where are we going?
2. How do we move between cities/resorts?
3. What do we play in each city/resort?
4. Where might we lodge, and why would we choose one option over another?
5. What decision is still open?
6. What might the rough cost be?

## Missing assets to manually add

Please manually export/download from Notion or phone album:

- `public/sketches/lushan_route_sketch.png`
- `public/sketches/sanqingshan_route_sketch.png`
- Lodging photos listed in `data/lodging_options.json` under `image_refs`.

The current package includes filenames/references, not actual image binaries.
