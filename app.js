const CITY_ORDER = ["南昌", "庐山", "景德镇", "三清山"];
const ASSET_VERSION = "2026-06-10";

const COPY = {
  hero:
    "江西东线旅行计划：从南昌进入江西，先上庐山，再去景德镇，最后用三清山作为自然风景压轴。整体路线基本固定，目前主要需要一起决定的是住宿选择、三清山东部/南部入口，以及最后一天是否直接夜间回上海。",
  routeLogic:
    "这条路线的节奏是“城市缓冲 + 山上游览 + 陶瓷文化 + 自然压轴”。南昌和景德镇相对轻松，庐山和三清山消耗体力更多，所以住宿舒适度和天气备选方案比较重要。",
  lodgingNarratives: {
    南昌: "南昌段以晚到和第二天轻松吃逛为主，万寿宫与八一广场附近都能减少市区转场。",
    庐山: "庐山建议住在牯岭镇/牯岭街附近，两晚山上住宿会让东西线安排更稳。",
    景德镇: "景德镇优先考虑陶溪川附近，晚上逛街、市集和小店都更省心。",
    三清山: "三清山住宿的核心差异是东部金沙效率与南部外双溪配套，需要结合返程压力决定。"
  },
  decisionNotes: [
    "先定住宿组合，才能估算每人实际住宿成本。",
    "东部金沙更利于一日游效率，南部外双溪配套可能更成熟。",
    "当天夜回上海会压缩下山和大巴时间，上饶住一晚更松。"
  ]
};

const SKETCHES = [
  {
    title: "庐山路线图",
    src: "public/sketches/lushan_route_sketch.png",
    filename: "public/sketches/lushan_route_sketch.png",
    caption:
      "用于判断西线、东线和雨天人文路线的体力差异。后续可在旁边补真实点位重绘，但这张原始草图需要保留。"
  },
  {
    title: "三清山路线草图",
    src: "public/sketches/sanqingshan_route_sketch.png",
    filename: "public/sketches/sanqingshan_route_sketch.png",
    caption:
      "用于对比金沙索道与外双溪入口、一日中环线和傍晚返程压力。后续确认入口后再细化。"
  }
];

const state = {
  trip: null,
  commutes: [],
  lodging: {},
  budget: null,
  mapNotes: null,
  geocoded: null,
  activeCity: "全部"
};

const $ = (selector) => document.querySelector(selector);

const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const formatCost = (value) => {
  if (value === null || value === undefined || value === "") return "待确认";
  if (typeof value === "number") return `${value}¥`;
  return value;
};

const makeId = (value) =>
  String(value)
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-|-$/g, "");

const assetUrl = (path) => `${path}?v=${ASSET_VERSION}`;

const loadJson = async (path) => {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`无法读取 ${path}`);
  return response.json();
};

const loadGeocoded = async () => {
  try {
    return await loadJson("./data/geocoded_locations.json");
  } catch {
    return loadJson("./data/geocoded_locations.example.json");
  }
};

async function init() {
  try {
    const [trip, commutes, lodging, budget, mapNotes, geocoded] = await Promise.all([
      loadJson("./data/trip_plan.json"),
      loadJson("./data/commute_options.json"),
      loadJson("./data/lodging_options.json"),
      loadJson("./data/budget_model.json"),
      loadJson("./data/map_and_route_notes.json"),
      loadGeocoded()
    ]);

    Object.assign(state, { trip, commutes, lodging, budget, mapNotes, geocoded });
    renderPage();
  } catch (error) {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div class="error-box"><strong>页面数据读取失败</strong><br>${escapeHtml(error.message)}</div>`
    );
  }
}

function renderPage() {
  $("#hero-summary").textContent = COPY.hero;
  $("#route-logic-copy").textContent = COPY.routeLogic;
  renderDecisions();
  renderRouteStats();
  renderTimeline();
  renderCommutes();
  renderCities();
  renderSketches();
  renderLodgingFilters();
  renderLodging();
  renderPinList();
  renderBudget();
  setupDialog();
  initRouteMap();
  initLodgingPinMap();
}

function renderDecisions() {
  const decisions = state.trip.meta.main_decisions_remaining;
  $("#decision-grid").innerHTML = decisions
    .map(
      (decision, index) => `
        <article class="decision-card">
          <strong>${escapeHtml(decision.split("：")[0] || decision)}</strong>
          <p>${escapeHtml(COPY.decisionNotes[index] || decision)}</p>
        </article>
      `
    )
    .join("");
}

function renderRouteStats() {
  const dayCount = state.trip.days.length;
  const lodgingCount = Object.values(state.lodging).flat().length;
  const commuteCount = state.commutes.length;
  const cityCount = CITY_ORDER.length;

  $("#route-stats").innerHTML = [
    ["旅行天数", `${dayCount}天`],
    ["核心停留", `${cityCount}站`],
    ["交通段", `${commuteCount}段`],
    ["住宿候选", `${lodgingCount}个`]
  ]
    .map(([label, value]) => `<div class="stat-card"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");
}

function renderTimeline() {
  $("#timeline-list").innerHTML = state.trip.days
    .map((day, index) => {
      const dayCommutes = state.commutes.filter((item) => item.date === day.date);
      const transport =
        dayCommutes.length > 0
          ? dayCommutes.map((item) => `${item.from}→${item.to}`).join(" / ")
          : "市区游览";
      return `
        <article class="timeline-card">
          <div>
            <div class="timeline-date">${escapeHtml(day.date)}</div>
            <span class="chip">Day ${index + 1}</span>
          </div>
          <div>
            <h3>${escapeHtml(day.area)}</h3>
            <p>${escapeHtml(day.summary)}</p>
            <div class="timeline-meta">
              <span class="chip">${escapeHtml(day.lodging_area)}</span>
              <span class="chip">${escapeHtml(transport)}</span>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCommutes() {
  $("#commute-body").innerHTML = state.commutes
    .map(
      (item) => `
        <tr>
          <td>${escapeHtml(item.date)}</td>
          <td><strong>${escapeHtml(item.from)} → ${escapeHtml(item.to)}</strong></td>
          <td>${escapeHtml(item.mode)}</td>
          <td>${escapeHtml(item.preferred)}</td>
          <td>${escapeHtml(item.time)}</td>
          <td>${escapeHtml(formatCost(item.cost_cny))}</td>
          <td>${escapeHtml(item.notes)}</td>
        </tr>
      `
    )
    .join("");
}

function renderCities() {
  const sections = state.trip.play_sections;
  $("#city-grid").innerHTML = CITY_ORDER.map((city) => {
    const section = sections[city];
    const routeLines = [
      ["西线", section.west_line],
      ["东线", section.east_line],
      ["雨天备选", section.rainy_alt],
      ["路线选择", Array.isArray(section.route_options) ? section.route_options.join(" / ") : ""],
      ["一日节奏", section.one_day_note]
    ].filter(([, value]) => value);

    const spots = Array.isArray(section.candidate_spots)
      ? section.candidate_spots.map((spot) => `<span class="chip">${escapeHtml(spot)}</span>`).join("")
      : "";

    return `
      <article class="city-card" id="city-${makeId(city)}">
        <header>
          <div>
            <p class="eyebrow">${escapeHtml(city)}</p>
            <h3>${escapeHtml(section.vibe)}</h3>
          </div>
          <span class="chip">${state.lodging[city]?.length || 0}个住宿</span>
        </header>
        <p>${escapeHtml(COPY.lodgingNarratives[city] || "")}</p>
        ${spots ? `<div class="spot-list">${spots}</div>` : ""}
        ${
          routeLines.length
            ? `<div class="route-lines">${routeLines
                .map(
                  ([label, value]) =>
                    `<div class="route-line"><strong>${escapeHtml(label)}</strong>：${escapeHtml(value)}</div>`
                )
                .join("")}</div>`
            : ""
        }
      </article>
    `;
  }).join("");
}

function renderSketches() {
  $("#sketch-grid").innerHTML = SKETCHES.map(
    (sketch) => `
      <figure class="sketch-card">
        <img src="${escapeHtml(assetUrl(sketch.src))}" alt="${escapeHtml(sketch.title)}" loading="lazy" />
        <div class="sketch-placeholder">
          <div>
            <strong>缺少 ${escapeHtml(sketch.filename)}</strong><br>
            请把对应路线图放到这个路径后重新刷新页面。
          </div>
        </div>
        <figcaption><strong>${escapeHtml(sketch.title)}</strong><br>${escapeHtml(sketch.caption)}</figcaption>
      </figure>
    `
  ).join("");

  document.querySelectorAll(".sketch-card img").forEach((img) => {
    img.addEventListener("error", () => img.closest(".sketch-card").classList.add("is-missing"));
  });
}

function renderLodgingFilters() {
  const filters = ["全部", ...CITY_ORDER];
  $("#lodging-filter").innerHTML = filters
    .map(
      (city) => `
        <button type="button" data-city="${escapeHtml(city)}" aria-pressed="${city === state.activeCity}">
          ${escapeHtml(city)}
        </button>
      `
    )
    .join("");

  $("#lodging-filter").onclick = (event) => {
    const button = event.target.closest("button[data-city]");
    if (!button) return;
    state.activeCity = button.dataset.city;
    renderLodgingFilters();
    renderLodging();
  };
}

function flattenLodging() {
  return Object.entries(state.lodging).flatMap(([city, items]) =>
    items.map((item) => ({ ...item, city }))
  );
}

function imagePath(ref) {
  return `public/images/lodging/${ref}`;
}

function renderPhotoFrame(item) {
  const firstImage = item.image_refs?.[0];
  const placeholder = `
    <div class="image-placeholder">
      <div>
        <strong>缺少住宿照片</strong><br>
        预期路径：public/images/lodging/${escapeHtml(firstImage || "对应文件名")}
      </div>
    </div>
  `;

  if (!firstImage) {
    return `<div class="photo-frame is-missing">${placeholder}</div>`;
  }

  return `
    <div class="photo-frame">
      <img src="${escapeHtml(imagePath(firstImage))}" alt="${escapeHtml(item.name)}" loading="lazy" />
      <span class="photo-count">${item.image_refs.length}张</span>
      ${placeholder}
    </div>
  `;
}

function renderLodging() {
  const items = flattenLodging().filter(
    (item) => state.activeCity === "全部" || item.city === state.activeCity
  );

  $("#lodging-grid").innerHTML = items
    .map(
      (item, index) => `
        <article class="lodging-card">
          ${renderPhotoFrame(item)}
          <div class="lodging-body">
            <div class="lodging-tags">
              <span class="chip">${escapeHtml(item.city)}</span>
              <span class="chip">${escapeHtml(item.area)}</span>
              <span class="chip">${escapeHtml(item.type)}</span>
            </div>
            <h3>${escapeHtml(item.name)}</h3>
            <p>${escapeHtml(item.pros || COPY.lodgingNarratives[item.city] || "位置和房型需要进一步比较。")}</p>
            <dl class="meta-list">
              <div><dt>容量</dt><dd>${escapeHtml(item.capacity)}</dd></div>
              <div><dt>价格</dt><dd>${escapeHtml(item.price_note)}</dd></div>
              <div><dt>地址</dt><dd>${escapeHtml(item.address)}</dd></div>
            </dl>
            <div class="card-actions">
              <button type="button" class="primary-button" data-lodging-index="${index}">详情</button>
              <a class="secondary-button" href="${escapeHtml(item.booking_url)}" target="_blank" rel="noreferrer">预订链接</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".photo-frame img").forEach((img) => {
    img.addEventListener("error", () => img.closest(".photo-frame").classList.add("is-missing"));
  });

  $("#lodging-grid").onclick = (event) => {
    const button = event.target.closest("[data-lodging-index]");
    if (!button) return;
    openLodgingDialog(items[Number(button.dataset.lodgingIndex)]);
  };
}

function setupDialog() {
  const dialog = $("#lodging-dialog");
  $("#dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const inDialog =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;
    if (!inDialog) dialog.close();
  });
}

function openLodgingDialog(item) {
  const images = item.image_refs?.length ? item.image_refs : [];
  const gallery =
    images.length > 0
      ? images
          .slice(0, 5)
          .map((ref) => `<img src="${escapeHtml(imagePath(ref))}" alt="${escapeHtml(item.name)}" loading="lazy">`)
          .join("")
      : `<div class="image-placeholder" style="display:grid"><div>待补充住宿照片</div></div>`;

  $("#dialog-content").innerHTML = `
    <div class="dialog-hero">
      <div class="dialog-gallery">${gallery}</div>
      <div class="dialog-copy">
        <p class="eyebrow">${escapeHtml(item.city)} · ${escapeHtml(item.area)} · ${escapeHtml(item.type)}</p>
        <h2 id="dialog-title">${escapeHtml(item.name)}</h2>
        <p>${escapeHtml(COPY.lodgingNarratives[item.city] || "")}</p>
        <dl class="meta-list">
          <div><dt>容量</dt><dd>${escapeHtml(item.capacity)}</dd></div>
          <div><dt>价格</dt><dd>${escapeHtml(item.price_note)}</dd></div>
          <div><dt>地址</dt><dd>${escapeHtml(item.address)}</dd></div>
        </dl>
        <div class="dialog-section">
          <strong>优点</strong>
          <p>${escapeHtml(item.pros || "待补充")}</p>
        </div>
        <div class="dialog-section">
          <strong>顾虑</strong>
          <p>${escapeHtml(item.concerns || "暂无明显顾虑，仍需确认真实位置、照片和评价。")}</p>
        </div>
        <div class="card-actions">
          <a class="primary-button" href="${escapeHtml(item.booking_url)}" target="_blank" rel="noreferrer">预订链接</a>
          <a class="secondary-button" href="${escapeHtml(item.notion_url)}" target="_blank" rel="noreferrer">Notion记录</a>
        </div>
      </div>
    </div>
  `;

  document.body.classList.add("dialog-open");
  $("#lodging-dialog").showModal();
}

function renderPinList() {
  const locations = state.geocoded.lodging_locations || [];
  $("#pin-list").innerHTML = locations
    .map(
      (item) => `
        <article class="pin-item">
          <strong>${escapeHtml(item.name)}</strong>
          <span>${escapeHtml(item.city)} · ${escapeHtml(item.area || "区域待确认")}</span>
          <span>${escapeHtml(item.address)}</span>
          <span>${escapeHtml(item.coordinate_status || "位置待人工确认")}</span>
        </article>
      `
    )
    .join("");
}

function renderBudget() {
  $("#budget-grid").innerHTML = state.budget.recommended_budget_model
    .map(
      (item) => `
        <article class="budget-card">
          <strong>${escapeHtml(item.category)}</strong>
          <p>${escapeHtml(item.rough_per_person)}</p>
          <p>${escapeHtml(item.basis)}</p>
        </article>
      `
    )
    .join("");
}

function initRouteMap() {
  const mapEl = $("#route-map");
  const fallbackEl = $("#route-map-fallback");
  const routeStops = [
    {
      name: "上海",
      label: "出发",
      mode: "飞机",
      lat: 31.2304,
      lng: 121.4737,
      kind: "terminal"
    },
    {
      name: "南昌",
      label: "城市缓冲",
      mode: "市区吃逛",
      lat: 28.682,
      lng: 115.858,
      kind: "city"
    },
    {
      name: "庐山",
      label: "牯岭镇两晚",
      mode: "高铁 + 上山",
      lat: 29.571,
      lng: 115.982,
      kind: "mountain"
    },
    {
      name: "景德镇",
      label: "陶溪川",
      mode: "高铁",
      lat: 29.288,
      lng: 117.214,
      kind: "city"
    },
    {
      name: "上饶",
      label: "三清山换乘",
      mode: "高铁 + 大巴",
      lat: 28.455,
      lng: 117.971,
      kind: "transfer"
    },
    {
      name: "三清山",
      label: "自然压轴",
      mode: "索道一日游",
      lat: 28.914,
      lng: 118.072,
      kind: "mountain"
    },
    {
      name: "上海",
      label: "夜回或上饶缓冲",
      mode: "高铁",
      lat: 31.2304,
      lng: 121.4737,
      kind: "terminal"
    }
  ];

  if (!window.L) {
    mapEl.hidden = true;
    fallbackEl.hidden = false;
    fallbackEl.innerHTML = renderRouteMapFallback(routeStops);
    return;
  }

  const map = L.map(mapEl, {
    scrollWheelZoom: false,
    zoomControl: false
  });

  L.control.zoom({ position: "bottomright" }).addTo(map);
  map.attributionControl.setPrefix("路线点位为行程级近似");

  const amapTiles = L.tileLayer(
    "https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
    {
      attribution: "© 高德地图",
      maxZoom: 18,
      subdomains: ["1", "2", "3", "4"]
    }
  );
  const osmTiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap",
    maxZoom: 18
  });

  let fallbackStarted = false;
  amapTiles.on("tileerror", () => {
    if (fallbackStarted) return;
    fallbackStarted = true;
    map.removeLayer(amapTiles);
    osmTiles.addTo(map);
  });
  amapTiles.addTo(map);

  const outbound = routeStops.slice(0, 6).map((stop) => [stop.lat, stop.lng]);
  const returnLeg = [routeStops[5], routeStops[4], routeStops[6]].map((stop) => [stop.lat, stop.lng]);

  L.polyline(outbound, {
    color: "#2f5d50",
    lineCap: "round",
    lineJoin: "round",
    opacity: 0.86,
    weight: 5
  }).addTo(map);

  L.polyline(returnLeg, {
    color: "#b66542",
    dashArray: "10 12",
    lineCap: "round",
    lineJoin: "round",
    opacity: 0.9,
    weight: 5
  }).addTo(map);

  routeStops.slice(0, 6).forEach((stop, index) => {
    L.marker([stop.lat, stop.lng], {
      icon: L.divIcon({
        className: "",
        html: `
          <div class="route-marker route-marker--${escapeHtml(stop.kind)}">
            <span class="route-marker-number">${index + 1}</span>
            <span class="route-marker-label">${escapeHtml(stop.name)}</span>
          </div>
        `,
        iconAnchor: [18, 18],
        iconSize: [120, 42]
      })
    })
      .addTo(map)
      .bindPopup(
        `<strong>${escapeHtml(stop.name)}</strong><p class="map-note">${escapeHtml(stop.label)} · ${escapeHtml(
          stop.mode
        )}</p>`
      );
  });

  const legend = L.control({ position: "topleft" });
  legend.onAdd = () => {
    const div = L.DomUtil.create("div", "route-map-legend");
    div.innerHTML = `
      <strong>上海 → 江西东线 → 上海</strong>
      <span><i class="legend-line legend-line--solid"></i>去程主线</span>
      <span><i class="legend-line legend-line--dash"></i>返程待确认</span>
    `;
    return div;
  };
  legend.addTo(map);

  const bounds = L.latLngBounds([...outbound, ...returnLeg]);
  map.fitBounds(bounds, { padding: [30, 30] });

  const resizeObserver = new ResizeObserver(() => map.invalidateSize());
  resizeObserver.observe(mapEl);
  setTimeout(() => map.invalidateSize(), 150);
}

function renderRouteMapFallback(routeStops) {
  return `
    <div class="route-map-unavailable">
      <strong>在线地图暂时没有加载成功</strong>
      <p>请检查 Leaflet CDN 或地图瓦片网络；页面会在网络可用时显示高德/OSM 在线底图。</p>
      <ol>
        ${routeStops
          .slice(0, 6)
          .map((stop) => `<li>${escapeHtml(stop.name)} · ${escapeHtml(stop.label)}</li>`)
          .join("")}
      </ol>
    </div>
  `;
}

function initLodgingPinMap() {
  const mapEl = $("#lodging-pin-map");
  const locations = (state.geocoded.lodging_locations || []).filter(
    (item) => typeof item.lat === "number" && typeof item.lng === "number"
  );

  if (!window.L || locations.length === 0) {
    mapEl.innerHTML = renderPendingPinPanel();
    return;
  }

  const map = L.map(mapEl, {
    scrollWheelZoom: false,
    zoomControl: false
  });

  L.control.zoom({ position: "bottomright" }).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap"
  }).addTo(map);

  const latLngs = locations.map((item) => [item.lat, item.lng]);
  locations.forEach((item) => {
    L.circleMarker([item.lat, item.lng], {
      radius: 7,
      color: "#243233",
      weight: 2,
      fillColor: "#2f5d50",
      fillOpacity: 0.9
    })
      .addTo(map)
      .bindPopup(`<strong>${escapeHtml(item.name)}</strong><p class="map-note">${escapeHtml(item.address)}</p>`);
  });

  map.fitBounds(latLngs, { padding: [30, 30] });
}

function renderPendingPinPanel() {
  return `
    <div class="route-map-fallback">
      <svg class="route-svg" viewBox="0 0 680 380" role="img" aria-label="住宿点位待确认">
        <rect x="20" y="24" width="640" height="332" rx="8" fill="#eef4f2" stroke="#cad5d2" />
        <path d="M100 250 C180 160, 252 178, 320 132 S480 92, 570 170" fill="none" stroke="#b66542" stroke-width="5" stroke-linecap="round" />
        ${CITY_ORDER.map((city, index) => {
          const x = 108 + index * 150;
          const y = [250, 160, 132, 170][index];
          return `<circle cx="${x}" cy="${y}" r="13" fill="#2c7488" stroke="#243233" stroke-width="3" /><text x="${x - 22}" y="${y + 36}">${city}</text>`;
        }).join("")}
        <text x="72" y="70">住宿地址已保留，精确经纬度待人工确认</text>
      </svg>
    </div>
  `;
}

function renderRouteSvg(sequence) {
  const labels = sequence.length
    ? sequence.map((node) => node.name)
    : ["上海", "南昌", "九江", "庐山", "景德镇", "上饶", "三清山", "上海"];
  const positions = [
    [68, 252],
    [186, 230],
    [292, 156],
    [332, 88],
    [430, 176],
    [522, 236],
    [574, 132],
    [628, 252]
  ];
  const points = positions.map(([x, y]) => `${x},${y}`).join(" ");

  return `
    <svg class="route-svg" viewBox="0 0 700 360" role="img" aria-label="江西东线路线示意">
      <rect x="18" y="20" width="664" height="316" rx="8" fill="#eef4f2" stroke="#cad5d2" />
      <polyline points="${points}" fill="none" stroke="#b66542" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
      ${labels
        .map((label, index) => {
          const [x, y] = positions[index] || positions[positions.length - 1];
          return `
            <circle cx="${x}" cy="${y}" r="13" fill="${index === 0 || index === labels.length - 1 ? "#c5943d" : "#2c7488"}" stroke="#243233" stroke-width="3" />
            <text x="${Math.max(28, x - 24)}" y="${y + 34}">${escapeHtml(label)}</text>
          `;
        })
        .join("")}
    </svg>
  `;
}

init();
