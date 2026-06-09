# Data Schema

## `trip_plan.json`

Contains:
- `meta`: title, route summary, remaining decisions.
- `days`: day-by-day itinerary.
- `play_sections`: companion-facing descriptions and route notes for 南昌, 庐山, 景德镇, 三清山.

## `commute_options.json`

Array of commute legs.

Fields:
- `date`
- `from`
- `to`
- `mode`
- `preferred`
- `time`
- `cost_cny`
- `notes`

Use this for:
- commute table,
- route map tooltips,
- daily timeline transport chips.

## `lodging_options.json`

Object keyed by city/resort:
- 南昌
- 庐山
- 景德镇
- 三清山

Each lodging item has:
- `name`
- `area`
- `type`
- `capacity`
- `price_note`
- `address`
- `booking_url`
- `pros`
- `concerns`
- `image_refs`
- `notion_url`

Use this for:
- lodging overview cards,
- per-city lodging subpages,
- map pins after geocoding.

## `budget_model.json`

Contains transport baseline and lodging price notes. The code agent may compute approximate per-person estimates after user confirms group size and room plan.

## `map_and_route_notes.json`

Contains major route nodes and map implementation notes.
