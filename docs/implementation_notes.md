# Implementation Notes

## Recommended tech stack

Choose one of:

### Option A: Vite + React + TypeScript
Good for interactive maps, cards, filters, and future GitHub Pages deployment.

Suggested packages:
- React
- Vite
- TypeScript
- Leaflet or MapLibre
- TailwindCSS or CSS modules
- shadcn/ui optional, if already available

### Option B: Static HTML/CSS/JS
Good if the goal is a small portable microsite.

## Map choices

Chinese travel map accuracy may be better with AMap/Gaode, but this requires an API key.

If using AMap:
- put key in `.env`
- never commit secrets
- use address strings from `lodging_options.json`
- geocode once and cache coordinates into `data/geocoded_locations.json`

If using Leaflet/OSM:
- test Chinese location search and tiles carefully.
- may need manual coordinates.

## Image handling

This bundle does not include actual Notion images. It includes the expected filenames/references.

Create these folders in the implementation:

```text
public/images/lodging/
public/sketches/
```

Expected sketch assets:
- `public/sketches/lushan_route_sketch.png`
- `public/sketches/sanqingshan_route_sketch.png`

Lodging images can use filenames from each lodging item's `image_refs`.

## Pages / Routes

Suggested:
- `/` main overview
- `/lodging` all lodging comparison
- `/lodging/nanchang`
- `/lodging/lushan`
- `/lodging/jingdezhen`
- `/lodging/sanqingshan`

Or, for a simpler static site:
- one page with anchor links.

## Geocoding workflow

1. Read all addresses from `lodging_options.json`.
2. Geocode with chosen provider.
3. Save results to `data/geocoded_locations.json`.
4. Render map pins from cached coordinates.
5. If geocode confidence is low, display “位置待人工确认”.

## Important caveat

Do not overfit to the previous Guizhou project. It is only a conceptual reference. This Jiangxi route has a fixed route; the focus is:
- what to play inside each city/resort,
- lodging comparison,
- route sketches,
- commute constraints,
- final-day return decision.
