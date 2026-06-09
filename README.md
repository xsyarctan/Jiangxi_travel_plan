# Jiangxi Travel Plan

A companion-facing microsite for the Jiangxi east-route trip:

**Shanghai → Nanchang → Lushan → Jingdezhen → Sanqingshan / Shangrao → Shanghai**

Live site: [https://xsyarctan.github.io/Jiangxi_travel_plan/](https://xsyarctan.github.io/Jiangxi_travel_plan/)

## What’s Inside

- A route overview map showing the intercity flow and return constraint
- A day-by-day itinerary timeline
- Commute options for flights, trains, buses, and mountain transfers
- City and resort sections for 南昌、庐山、景德镇、三清山
- Preserved hand-drawn route sketches for 庐山 and 三清山
- Lodging comparison cards with photos, location notes, booking links, pros, and concerns
- A per-person rough budget table and open decision panel

## Current Planning Questions

- Which lodging mix should the group choose: apartment-style value stays or steadier hotels?
- Should 三清山 be based around 东部金沙索道 or 南部外双溪索道?
- On the final night, should the group return directly to Shanghai or stay in Shangrao and leave the next day?

## Content Source

The site is built from the structured trip-planning data in `data/` and the image assets in `public/`.

Key files:

- `data/trip_plan.json` — route logic, daily plan, and city/resort play notes
- `data/commute_options.json` — transport legs and cost assumptions
- `data/lodging_options.json` — lodging candidates
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
