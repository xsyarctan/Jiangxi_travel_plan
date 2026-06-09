# Website Brief: 江西东线旅行计划

## Goal

Build a visually clear webpage for travel companions to understand and discuss the Jiangxi east-route plan.

The webpage should present:

- the whole route at a glance,
- day-by-day rhythm,
- intercity commute options,
- what to play in each city/resort,
- lodging options as visual cards/subpages,
- rough budget,
- remaining decisions.

## Tone

Companion-facing, decision-friendly, polished but not overdesigned. It should feel like a travel microsite rather than a raw itinerary.

## Suggested structure

### 1. Hero / Route Overview

Show:
- title: 江西东线旅行计划
- route: 上海 → 南昌 → 庐山 → 景德镇 → 三清山 → 上海
- date rhythm: about one week
- key open decisions:
  - lodging choices
  - 三清山东部 vs 南部住宿
  - final-night direct return to Shanghai or stay in Shangrao

### 2. Interactive or static route map

At province/intercity scale:
- Shanghai
- Nanchang
- Jiujiang/Lushan
- Jingdezhen
- Shangrao/Sanqingshan
- Shanghai return

Use pins and directional lines. Intercity commute details can appear on hover/click or in a side panel.

### 3. Daily itinerary timeline

Use cards for each day:
- date
- area
- activity summary
- lodging area
- key transport

### 4. City/resort focus sections

Each section should have:
- a short narrative
- map/pin cluster
- play route or places
- lodging cards relevant to that stop

Sections:
- 南昌
- 庐山
- 景德镇
- 三清山

### 5. Route sketches

Important: preserve the hand-drawn/handmade figures:
- 庐山路线图
- 三清山路线草图

Preferred display:
- show the original sketch image,
- optionally add a “map recreation” beside it if the code agent can geocode/reconstruct points,
- do not discard the sketch even if a real map is added.

### 6. Lodging database/subpages

Each lodging option should become a visual card and optionally a detail subpage/modal.

Card fields:
- name
- city/resort
- area
- type
- suitable capacity
- price note
- address
- booking link
- image carousel if assets available
- brief narrative sentence
- pros/concerns

Detail page fields:
- map location
- larger photos
- address
- booking link
- price
- capacity
- why choose it / why not
- nearby route relevance

### 7. Budget section

Show:
- transport baseline
- lodging depends on selected options
- tickets/索道/观光车 pending
- food pending
- buffer

Optionally provide three scenarios:
- 性价比版
- 均衡版
- 舒适版

## Design direction

A good design might use:
- warm neutral background
- map cards
- timeline
- photo-forward lodging cards
- decision badges
- compact tables only when needed
- mobile-friendly layout

Avoid:
- dense text-only page
- too many equal-weight details
- hiding the route map too low
- making lodging options look like meaningless hotel lists
