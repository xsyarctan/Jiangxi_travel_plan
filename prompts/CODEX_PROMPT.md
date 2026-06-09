# Codex Prompt: Build Jiangxi East Route Travel Webpage

You are given a handoff bundle for a companion-facing travel-plan webpage.

## Goal

Build a polished visual webpage for the Jiangxi east-route trip:

上海 → 南昌 → 庐山 → 景德镇 → 三清山 / 上饶 → 上海

The webpage should help travel companions quickly understand:
1. where we go,
2. how we move,
3. what we play inside each city/resort,
4. where we may lodge,
5. what the route looks like,
6. what decisions remain,
7. roughly how much it may cost.

## Inputs

Use the files in this bundle:

- `data/trip_plan.json`
- `data/commute_options.json`
- `data/lodging_options.json`
- `data/budget_model.json`
- `data/map_and_route_notes.json`
- `docs/website_brief.md`
- `docs/implementation_notes.md`
- `docs/content_copy.md`

## Important design requirement

Do not make this a raw Notion-style document. Make it feel like a travel microsite.

Use:
- route map / route overview near the top,
- timeline cards,
- city/resort sections,
- lodging cards with images/map slots,
- budget section,
- clear “still to decide” callout.

## Route sketch requirement

The final webpage must preserve two handmade/illustrative route figures:

- `public/sketches/lushan_route_sketch.png`
- `public/sketches/sanqingshan_route_sketch.png`

If the images are missing, render a visible placeholder box with the expected filename and instructions to add the image. Do not silently omit them.

If possible, create a parallel “map recreation” using actual map pins/lines, but keep the original sketch in the UI.

## Lodging requirement

Each lodging database is worth a subpage or at least a detail modal/expanded card.

For each lodging option, show:
- name
- city/resort
- area
- type
- suitable capacity
- price note
- address
- booking link
- image carousel or placeholder
- brief narrative sentence
- pros/concerns
- map pin if geocoded

Use `image_refs` as expected local filenames under `public/images/lodging/`.
If files are missing, show a graceful placeholder.

## Map requirement

Use either:

A. AMap/Gaode if you can set up an API key via `.env`, or  
B. Leaflet/MapLibre/OSM with manually editable coordinates.

The implementation must not require secrets committed to the repo.

Suggested approach:
1. Read addresses from `lodging_options.json`.
2. Provide a `data/geocoded_locations.example.json` file with placeholder coordinates or map queries.
3. Make the map layer robust even before coordinates are finalized.

## Suggested stack

Prefer Vite + React + TypeScript unless the existing repo suggests otherwise.

Suggested components:
- `HeroRouteOverview`
- `DecisionPanel`
- `DailyTimeline`
- `CommuteTable`
- `CitySection`
- `ResortRouteSketch`
- `LodgingCard`
- `LodgingDetail`
- `BudgetPanel`
- `MapPanel`

## Deliverables

1. A working local webpage.
2. README with how to run.
3. Data-driven components, not hard-coded scattered text.
4. Graceful missing image placeholders.
5. Clear TODO comments for:
   - geocoding exact coordinates,
   - adding lodging photos,
   - adding 庐山路线图 and 三清山路线草图,
   - confirming final return plan.

## Do not

- Do not directly copy the previous Guizhou site layout.
- Do not reduce the page to a table.
- Do not hide lodging comparison in plain text.
- Do not remove the handmade route sketches.
- Do not invent exact coordinates or ticket prices unless explicitly marked as approximate/placeholders.

## First steps

1. Inspect all JSON files.
2. Create the app structure.
3. Implement the main page with data-driven sections.
4. Add map placeholders and route sketch placeholders.
5. Add lodging cards and detail pages/modals.
6. Add budget panel.
7. Run locally and fix visual/layout issues.
