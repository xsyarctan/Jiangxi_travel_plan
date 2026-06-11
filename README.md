# Jiangxi Travel Plan

A companion-facing microsite for comparing two Jiangxi routes:

- **East:** Shanghai → Nanchang → Lushan → Jingdezhen → Sanqingshan / Shangrao → Shanghai
- **West:** Shanghai → Longhushan / Yingtan → Lushan → Wugongshan / Pingxiang → Shanghai

Live site: [https://xsyarctan.github.io/Jiangxi_travel_plan/](https://xsyarctan.github.io/Jiangxi_travel_plan/)

## What’s Inside

- A persistent East/West route switcher
- Route overview maps showing each intercity flow and return constraint
- A day-by-day itinerary timeline
- Commute options for flights, trains, buses, and mountain transfers
- City and resort sections for both route options
- Preserved route sketches for 龙虎山、庐山、武功山 and 三清山
- Lodging comparison cards with photos, location notes, booking links, pros, and concerns
- A per-person rough budget table and open decision panel
- West-route weather, traffic, backup-plan, and physical-risk callouts

## Shared Content

The west route reuses the east route's Lushan lodging options, photos, and map pins. West-only lodging images live beside the existing lodging assets in `public/images/lodging/`.

## Content Source

The site is built from the structured trip-planning data in `data/` and the image assets in `public/`.

Key files:

- `data/trip_plan.json` — route logic, daily plan, and city/resort play notes
- `data/west_route.json` — west-route itinerary, commute, budget, decisions, and risks
- `data/commute_options.json` — transport legs and cost assumptions
- `data/lodging_options.json` — lodging candidates
- `data/west_lodging_options.json` — west-only lodging candidates and explicit empty states
- `data/budget_model.json` and `data/jiangxi_budget_table.csv` — per-person rough budget table
- `public/sketches/` — route sketches preserved from planning notes
- `public/images/lodging/` — lodging screenshots and photos

## Deployment

This is a static GitHub Pages site. The included workflow publishes only the website files:

- `index.html`
- `app.js`
- `styles.css`
- `data/`
- `public/`
- `.nojekyll`

Local preview:

```bash
python3 -m http.server 5173
```

Then open [http://localhost:5173/](http://localhost:5173/).
