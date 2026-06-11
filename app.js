const ASSET_VERSION = "2026-06-11";

const ROUTES = {
  east: {
    label: "东线",
    status: "已基本确定",
    eyebrow: "6月21日 - 6月27日 · 7天",
    title: "江西东线旅行计划",
    summary:
      "从上海飞南昌，先用城市段缓冲，再上庐山，转去景德镇看陶瓷与街区，最后用三清山作为自然风景压轴。",
    routeLogic:
      "节奏是“城市缓冲 + 山上游览 + 陶瓷文化 + 自然压轴”。南昌和景德镇相对轻松，庐山和三清山更消耗体力，因此住宿舒适度、天气备选和最后一天返程时间最值得讨论。",
    ribbon: ["上海", "南昌", "庐山", "景德镇", "三清山", "上海"],
    cityOrder: ["南昌", "庐山", "景德镇", "三清山"],
    lodgingNarratives: {
      南昌: "南昌段以晚到和第二天轻松吃逛为主，万寿宫与八一广场附近都能减少市区转场。",
      庐山: "庐山建议住在牯岭镇或牯岭街附近，两晚山上住宿会让东西线安排更稳。",
      景德镇: "景德镇优先考虑陶溪川附近，晚上逛街、市集和小店都更省心。",
      三清山: "核心差异是东部金沙效率与南部外双溪配套，需要结合返程压力决定。"
    },
    decisionNotes: [
      "挑选合适的住宿组合，平衡位置、舒适度与价格。",
      "东部金沙更利于一日游效率，南部外双溪的住宿和餐饮配套可能更成熟。",
      "当天夜回上海会压缩下山和大巴时间，上饶住一晚会更松。"
    ],
    sketches: [
      {
        title: "庐山路线图",
        src: "public/sketches/lushan_route_sketch.png",
        caption: "用于判断西线、东线和雨天人文路线的体力差异。"
      },
      {
        title: "三清山路线草图",
        src: "public/sketches/sanqingshan_route_sketch.png",
        caption: "用于对比金沙与外双溪入口、一日中环线和傍晚返程压力。"
      }
    ],
    routeStops: [
      { name: "上海", label: "出发", mode: "飞机", lat: 31.2304, lng: 121.4737, kind: "terminal" },
      { name: "南昌", label: "城市缓冲", mode: "市区吃逛", lat: 28.682, lng: 115.858, kind: "city" },
      { name: "庐山", label: "牯岭镇两晚", mode: "高铁 + 上山", lat: 29.571, lng: 115.982, kind: "mountain" },
      { name: "景德镇", label: "陶瓷文化", mode: "高铁", lat: 29.288, lng: 117.214, kind: "city" },
      { name: "上饶", label: "三清山换乘", mode: "高铁 + 大巴", lat: 28.455, lng: 117.971, kind: "transfer" },
      { name: "三清山", label: "自然压轴", mode: "索道一日游", lat: 28.914, lng: 118.072, kind: "mountain" },
      { name: "上海", label: "夜回或上饶缓冲", mode: "高铁", lat: 31.2304, lng: 121.4737, kind: "terminal" }
    ],
    outbound: [0, 1, 2, 3, 4, 5],
    returnLeg: [5, 4, 6],
    mapLegend: "上海 → 江西东线 → 上海",
    emptyLodgingAreas: []
  },
  west: {
    label: "西线",
    status: "讨论版",
    eyebrow: "D1 - D5 · 5天",
    title: "江西西线旅行计划",
    summary:
      "从上海坐高铁到鹰潭，以龙虎山轻徒步开场，转往庐山住两晚，再到武功山用草甸与高山徒步收尾。",
    routeLogic:
      "节奏从龙虎山的自然与文化热身，进入庐山中等强度段，再把武功山放在最后。路线更短但山地密度更高，D4跨城转场、D5天气和下山后赶高铁是主要压力点。",
    ribbon: ["上海", "龙虎山", "庐山", "武功山", "上海"],
    cityOrder: ["龙虎山", "庐山", "武功山"],
    lodgingNarratives: {
      龙虎山: "住宿候选尚未录入。当前计划倾向鹰潭市区，也可以继续比较景区、鹰潭站和鹰潭北站周边。",
      庐山: "与东线共用牯岭镇和牯岭街住宿候选，山上住两晚以便按天气切换轻松版或自然风景版。",
      武功山: "优先比较游客中心或山脚住宿，重点确认早餐、上山距离和D5返程交通。"
    },
    sketches: [
      {
        title: "龙虎山游览地图",
        src: "public/sketches/longhushan_route_map.png",
        caption: "重点放在象鼻山与竹筏路线；上清古镇、大上清宫距离更远，作为低优先级选项。"
      },
      {
        title: "庐山路线图",
        src: "public/sketches/lushan_route_sketch.png",
        caption: "与东线共用，按天气和体力在轻松人文线与东线自然景观之间选择。"
      },
      {
        title: "武功山一日路线",
        src: "public/sketches/wugongshan_route_map.png",
        caption: "全程约6–7小时；需要严格控制出发、索道和下山时间，给晚间高铁留余量。"
      }
    ],
    routeStops: [
      { name: "上海", label: "出发", mode: "高铁", lat: 31.2304, lng: 121.4737, kind: "terminal" },
      { name: "鹰潭", label: "铁路落点", mode: "G1371", lat: 28.2602, lng: 117.0692, kind: "transfer" },
      { name: "龙虎山", label: "轻徒步开场", mode: "景区交通", lat: 28.064, lng: 116.994, kind: "mountain" },
      { name: "庐山", label: "山上两晚", mode: "高铁 + 索道", lat: 29.571, lng: 115.982, kind: "mountain" },
      { name: "萍乡", label: "武功山换乘", mode: "G1363", lat: 27.6229, lng: 113.8547, kind: "transfer" },
      { name: "武功山", label: "高山草甸压轴", mode: "徒步 + 索道", lat: 27.481, lng: 114.13, kind: "mountain" },
      { name: "上海", label: "晚间高铁返回", mode: "G220", lat: 31.2304, lng: 121.4737, kind: "terminal" }
    ],
    outbound: [0, 1, 2, 3, 4, 5],
    returnLeg: [5, 4, 6],
    mapLegend: "上海 → 江西西线 → 上海",
    emptyLodgingAreas: ["龙虎山"]
  }
};

const state = {
  routeId: new URLSearchParams(window.location.search).get("route") === "west" ? "west" : "east",
  east: null,
  west: null,
  activeCity: "全部",
  routeMap: null,
  lodgingMap: null,
  routeMapObserver: null
};

const $ = (selector) => document.querySelector(selector);

const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const makeId = (value) =>
  String(value)
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-|-$/g, "");

const assetUrl = (path) => `${path}?v=${ASSET_VERSION}`;

const formatCost = (value) => {
  if (value === null || value === undefined || value === "") return "待确认";
  if (typeof value === "number") return `${value}¥`;
  return value;
};

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
    const [
      eastTrip,
      eastCommutes,
      eastLodging,
      eastBudget,
      eastGeocoded,
      westTrip,
      westLodging,
      westGeocoded
    ] = await Promise.all([
      loadJson("./data/trip_plan.json"),
      loadJson("./data/commute_options.json"),
      loadJson("./data/lodging_options.json"),
      loadJson("./data/budget_model.json"),
      loadGeocoded(),
      loadJson("./data/west_route.json"),
      loadJson("./data/west_lodging_options.json"),
      loadJson("./data/west_geocoded_locations.json")
    ]);

    westLodging["庐山"] = eastLodging["庐山"];
    state.east = {
      trip: eastTrip,
      commutes: eastCommutes,
      lodging: eastLodging,
      budget: eastBudget,
      geocoded: eastGeocoded
    };
    state.west = {
      trip: westTrip,
      commutes: westTrip.commute,
      lodging: westLodging,
      budget: westTrip.budget,
      geocoded: westGeocoded
    };

    setupDialog();
    renderPage();
  } catch (error) {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div class="error-box"><strong>页面数据读取失败</strong><br>${escapeHtml(error.message)}</div>`
    );
  }
}

function routeConfig() {
  return ROUTES[state.routeId];
}

function routeData() {
  return state[state.routeId];
}

function renderPage() {
  const config = routeConfig();
  document.body.dataset.route = state.routeId;
  document.title = `${config.title}｜江西旅行计划`;

  renderRouteSwitcher();
  $("#hero-eyebrow").textContent = config.eyebrow;
  $("#route-status").textContent = config.status;
  $("#hero-title").textContent = config.title;
  $("#hero-summary").textContent = config.summary;
  $("#route-logic-copy").textContent = config.routeLogic;
  $("#route-ribbon").innerHTML = config.ribbon.map((stop) => `<span>${escapeHtml(stop)}</span>`).join("");
  $("#hero-map-shell").setAttribute("aria-label", `${config.title}在线地图`);

  renderDecisions();
  renderRouteStats();
  renderTimeline();
  renderCommutes();
  renderCities();
  renderSketches();
  renderLodgingFilters();
  renderLodging();
  renderPinList();
  renderRisks();
  renderBudget();

  destroyMaps();
  initRouteMap();
  initLodgingPinMap();
}

function renderRouteSwitcher() {
  $("#route-switcher").innerHTML = Object.entries(ROUTES)
    .map(
      ([id, route]) => `
        <button type="button" data-route="${id}" aria-pressed="${id === state.routeId}">
          <strong>${route.label}</strong>
          <span>${route.status}</span>
        </button>
      `
    )
    .join("");

  $("#route-switcher").onclick = (event) => {
    const button = event.target.closest("button[data-route]");
    if (!button || button.dataset.route === state.routeId) return;
    state.routeId = button.dataset.route;
    state.activeCity = "全部";
    const url = new URL(window.location.href);
    if (state.routeId === "west") url.searchParams.set("route", "west");
    else url.searchParams.delete("route");
    url.hash = "";
    history.replaceState({}, "", url);
    renderPage();
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };
}

function renderDecisions() {
  const data = routeData();
  let decisions;

  if (state.routeId === "east") {
    decisions = data.trip.meta.main_decisions_remaining.map((title, index) => ({
      title: title.split("：")[0] || title,
      note: routeConfig().decisionNotes[index] || title
    }));
  } else {
    decisions = data.trip.decisions.map((decision) => ({
      title: decision.title,
      note:
        decision.options.length > 0
          ? decision.options.map((option) => `${option.name}：${option.description}`).join(" ")
          : "龙虎山住宿仍待补充；庐山沿用东线候选，武功山已有三家酒店图片可供比较。"
    }));
    decisions.push({
      title: "D5返程衔接",
      note: "武功山下山后需要接上18:09萍乡出发的高铁，索道排队、景区接驳和道路拥堵都要留余量。"
    });
  }

  $("#decision-grid").innerHTML = decisions
    .map(
      (decision) => `
        <article class="decision-card">
          <strong>${escapeHtml(decision.title)}</strong>
          <p>${escapeHtml(decision.note)}</p>
        </article>
      `
    )
    .join("");
}

function renderRouteStats() {
  const config = routeConfig();
  const data = routeData();
  const dayCount = state.routeId === "east" ? data.trip.days.length : data.trip.itinerary.length;
  const lodgingCount = Object.values(data.lodging).flat().length;

  $("#route-stats").innerHTML = [
    ["旅行天数", `${dayCount}天`],
    ["核心停留", `${config.cityOrder.length}站`],
    ["交通段", `${data.commutes.length}段`],
    ["住宿候选", `${lodgingCount}个`]
  ]
    .map(([label, value]) => `<div class="stat-card"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");
}

function renderTimeline() {
  const data = routeData();
  const days =
    state.routeId === "east"
      ? data.trip.days.map((day, index) => ({
          label: day.date,
          day: `Day ${index + 1}`,
          area: day.area,
          plan: day.summary,
          lodging: day.lodging_area,
          transport: data.commutes
            .filter((item) => item.date === day.date)
            .map((item) => `${item.from}→${item.to}`)
            .join(" / ")
        }))
      : data.trip.itinerary.map((day) => ({
          label: day.day,
          day: day.day,
          area: day.area,
          plan: day.plan,
          lodging: day.lodging,
          transport: data.commutes
            .filter((item) => item.day === day.day)
            .map((item) => item.route)
            .join(" / ")
        }));

  $("#timeline-list").innerHTML = days
    .map(
      (day) => `
        <article class="timeline-card">
          <div>
            <div class="timeline-date">${escapeHtml(day.label)}</div>
            <span class="chip">${escapeHtml(day.day)}</span>
          </div>
          <div>
            <h3>${escapeHtml(day.area)}</h3>
            <p>${escapeHtml(day.plan)}</p>
            <div class="timeline-meta">
              <span class="chip">${escapeHtml(day.lodging)}</span>
              <span class="chip">${escapeHtml(day.transport || "景区 / 市内游览")}</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function normalizeCommute(item) {
  if (state.routeId === "east") {
    return {
      date: item.date,
      route: `${item.from} → ${item.to}`,
      mode: item.mode,
      preferred: item.preferred,
      time: item.time,
      cost: item.cost_cny,
      notes: item.notes
    };
  }

  return {
    date: item.day,
    route: item.route,
    mode: item.mode,
    preferred: item.preferred,
    time: item.time,
    cost: item.cost_cny,
    notes: item.cost_cny === null ? "班次、票价或接驳待确认" : "规划班次，出发前请按12306复核"
  };
}

function renderCommutes() {
  $("#commute-body").innerHTML = routeData()
    .commutes.map(normalizeCommute)
    .map(
      (item) => `
        <tr>
          <td>${escapeHtml(item.date)}</td>
          <td><strong>${escapeHtml(item.route)}</strong></td>
          <td>${escapeHtml(item.mode)}</td>
          <td>${escapeHtml(item.preferred)}</td>
          <td>${escapeHtml(item.time || "待确认")}</td>
          <td>${escapeHtml(formatCost(item.cost))}</td>
          <td>${escapeHtml(item.notes || "—")}</td>
        </tr>
      `
    )
    .join("");
}

function renderCities() {
  const config = routeConfig();
  const data = routeData();

  if (state.routeId === "east") {
    const sections = data.trip.play_sections;
    $("#city-grid").innerHTML = config.cityOrder
      .map((city) => {
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
              <div><p class="eyebrow">${escapeHtml(city)}</p><h3>${escapeHtml(section.vibe)}</h3></div>
              <span class="chip">${data.lodging[city]?.length || 0}个住宿</span>
            </header>
            <p>${escapeHtml(config.lodgingNarratives[city])}</p>
            ${spots ? `<div class="spot-list">${spots}</div>` : ""}
            <div class="route-lines">
              ${routeLines
                .map(
                  ([label, value]) =>
                    `<div class="route-line"><strong>${escapeHtml(label)}</strong>：${escapeHtml(value)}</div>`
                )
                .join("")}
            </div>
          </article>
        `;
      })
      .join("");
    return;
  }

  const paceByName = Object.fromEntries(data.trip.overview.pace.map((item) => [item.name, item.summary]));
  $("#city-grid").innerHTML = data.trip.scenic_sections
    .map((section) => {
      const city = section.title.replace("部分", "");
      const options = section.route_options || [];
      return `
        <article class="city-card" id="city-${makeId(city)}">
          <header>
            <div><p class="eyebrow">${escapeHtml(city)}</p><h3>${escapeHtml(paceByName[city] || section.summary)}</h3></div>
            <span class="chip">${data.lodging[city]?.length || 0}个住宿</span>
          </header>
          <p>${escapeHtml(section.summary)}</p>
          ${
            section.notes?.length
              ? `<ul class="note-list">${section.notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}</ul>`
              : ""
          }
          ${
            options.length
              ? `<div class="route-lines">${options
                  .map(
                    (option) => `
                      <div class="route-line">
                        <strong>${escapeHtml(option.name)}</strong>
                        ${option.route ? `：${escapeHtml(option.route)}` : ""}
                        <span>${escapeHtml(option.description)}</span>
                      </div>
                    `
                  )
                  .join("")}</div>`
              : ""
          }
        </article>
      `;
    })
    .join("");
}

function renderSketches() {
  $("#sketch-grid").innerHTML = routeConfig()
    .sketches.map(
      (sketch) => `
        <figure class="sketch-card">
          <img src="${escapeHtml(assetUrl(sketch.src))}" alt="${escapeHtml(sketch.title)}" loading="lazy" />
          <div class="sketch-placeholder"><div><strong>路线图暂未加载</strong><br>${escapeHtml(sketch.src)}</div></div>
          <figcaption><strong>${escapeHtml(sketch.title)}</strong><br>${escapeHtml(sketch.caption)}</figcaption>
        </figure>
      `
    )
    .join("");

  document.querySelectorAll(".sketch-card img").forEach((img) => {
    img.addEventListener("error", () => img.closest(".sketch-card").classList.add("is-missing"));
  });
}

function renderLodgingFilters() {
  const filters = ["全部", ...routeConfig().cityOrder];
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
  return Object.entries(routeData().lodging).flatMap(([city, items]) =>
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
      <div><strong>缺少住宿照片</strong><br>图片文件待补充</div>
    </div>
  `;

  if (!firstImage) return `<div class="photo-frame is-missing">${placeholder}</div>`;

  return `
    <div class="photo-frame">
      <img src="${escapeHtml(assetUrl(imagePath(firstImage)))}" alt="${escapeHtml(item.name)}" loading="lazy" />
      <span class="photo-count">${item.image_refs.length}张</span>
      ${placeholder}
    </div>
  `;
}

function renderLodging() {
  const config = routeConfig();
  const items = flattenLodging().filter(
    (item) => state.activeCity === "全部" || item.city === state.activeCity
  );
  const emptyAreas = config.emptyLodgingAreas.filter(
    (city) => state.activeCity === "全部" || state.activeCity === city
  );

  const emptyCards = emptyAreas
    .map(
      (city) => `
        <article class="lodging-empty">
          <span class="empty-icon">＋</span>
          <p class="eyebrow">${escapeHtml(city)}</p>
          <h3>${escapeHtml(city)}住宿待补充</h3>
          <p>${escapeHtml(config.lodgingNarratives[city])}</p>
          <span class="chip">友好空状态 · 不虚构候选</span>
        </article>
      `
    )
    .join("");

  const cards = items
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
            <p>${escapeHtml(item.pros || config.lodgingNarratives[item.city] || "位置和房型需要进一步比较。")}</p>
            <dl class="meta-list">
              <div><dt>容量</dt><dd>${escapeHtml(item.capacity)}</dd></div>
              <div><dt>价格</dt><dd>${escapeHtml(item.price_note)}</dd></div>
              <div><dt>地址</dt><dd>${escapeHtml(item.address)}</dd></div>
            </dl>
            <div class="card-actions">
              <button type="button" class="primary-button" data-lodging-index="${index}">详情</button>
              ${
                item.booking_url
                  ? `<a class="secondary-button" href="${escapeHtml(item.booking_url)}" target="_blank" rel="noreferrer">预订链接</a>`
                  : `<span class="secondary-button is-disabled">链接待补</span>`
              }
            </div>
          </div>
        </article>
      `
    )
    .join("");

  $("#lodging-grid").innerHTML =
    emptyCards || cards
      ? `${emptyCards}${cards}`
      : `<div class="lodging-empty"><h3>暂无住宿候选</h3><p>切换其他区域查看已有选项。</p></div>`;

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
          .map(
            (ref) =>
              `<img src="${escapeHtml(assetUrl(imagePath(ref)))}" alt="${escapeHtml(item.name)}" loading="lazy">`
          )
          .join("")
      : `<div class="image-placeholder" style="display:grid"><div>待补充住宿照片</div></div>`;

  $("#dialog-content").innerHTML = `
    <div class="dialog-hero">
      <div class="dialog-gallery">${gallery}</div>
      <div class="dialog-copy">
        <p class="eyebrow">${escapeHtml(item.city)} · ${escapeHtml(item.area)} · ${escapeHtml(item.type)}</p>
        <h2 id="dialog-title">${escapeHtml(item.name)}</h2>
        <p>${escapeHtml(routeConfig().lodgingNarratives[item.city] || "")}</p>
        <dl class="meta-list">
          <div><dt>容量</dt><dd>${escapeHtml(item.capacity)}</dd></div>
          <div><dt>价格</dt><dd>${escapeHtml(item.price_note)}</dd></div>
          <div><dt>地址</dt><dd>${escapeHtml(item.address)}</dd></div>
        </dl>
        <div class="dialog-section"><strong>优点</strong><p>${escapeHtml(item.pros || "待补充")}</p></div>
        <div class="dialog-section">
          <strong>顾虑</strong>
          <p>${escapeHtml(item.concerns || "仍需确认真实位置、价格和近期评价。")}</p>
        </div>
        <div class="card-actions">
          ${
            item.booking_url
              ? `<a class="primary-button" href="${escapeHtml(item.booking_url)}" target="_blank" rel="noreferrer">预订链接</a>`
              : `<span class="primary-button is-disabled">预订链接待补</span>`
          }
          ${
            item.notion_url
              ? `<a class="secondary-button" href="${escapeHtml(item.notion_url)}" target="_blank" rel="noreferrer">Notion记录</a>`
              : ""
          }
        </div>
      </div>
    </div>
  `;

  document.body.classList.add("dialog-open");
  $("#lodging-dialog").showModal();
}

function renderPinList() {
  const locations = routeData().geocoded.lodging_locations || [];
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

function renderRisks() {
  const section = $("#risks");
  if (state.routeId === "east") {
    section.hidden = true;
    return;
  }

  const labels = {
    weather: "天气",
    backup: "备选方案",
    traffic: "交通衔接",
    physical: "体力"
  };
  section.hidden = false;
  $("#risk-grid").innerHTML = Object.entries(routeData().trip.risks)
    .map(
      ([key, items]) => `
        <article class="risk-card">
          <p class="eyebrow">${escapeHtml(labels[key] || key)}</p>
          <ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </article>
      `
    )
    .join("");
}

function renderBudget() {
  let rows;
  let summary;

  if (state.routeId === "east") {
    rows =
      routeData().budget.items ||
      (routeData().budget.recommended_budget_model || []).map((item) => ({
        label: item.category,
        basis: item.basis,
        range: item.rough_per_person,
        note: ""
      }));
    const summaryRow = rows.find((row) => row["成本项"] === "预算备注");
    summary = summaryRow
      ? { label: summaryRow["估算方式"], range: summaryRow["粗略区间 / 人"] }
      : { label: "按宽裕预算", range: "4-5k¥" };
    rows = rows
      .filter((row) => row["成本项"] !== "预算备注")
      .map((row) => ({
        label: row["成本项"] || row.label,
        basis: row["估算方式"] || row.basis,
        range: row["粗略区间 / 人"] || row.range,
        note: row["备注"] || row.note
      }));
  } else {
    summary = { label: "西线宽裕估算", range: routeData().trip.budget_summary.replace(" / 人", " / 人") };
    rows = routeData().budget.map((row) => ({
      label: row.item,
      basis: row.estimate_basis,
      range: `${row.range_per_person_cny}¥`,
      note: row.note
    }));
  }

  $("#budget-grid").innerHTML = `
    <article class="budget-summary-card">
      <span>${escapeHtml(summary.label)}</span>
      <strong>${escapeHtml(summary.range)}</strong>
      <p>按人估算交通、住宿、门票索道与餐饮；实际金额以出票、订房和景区政策为准。</p>
    </article>
    <div class="budget-table-wrap">
      <table class="budget-table">
        <thead><tr><th>成本项</th><th>估算方式</th><th>粗略区间 / 人</th><th>备注</th></tr></thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <td>${escapeHtml(row.label)}</td>
                  <td>${escapeHtml(row.basis)}</td>
                  <td><strong>${escapeHtml(row.range)}</strong></td>
                  <td>${escapeHtml(row.note || "—")}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function destroyMaps() {
  state.routeMapObserver?.disconnect();
  state.routeMapObserver = null;
  state.routeMap?.remove();
  state.lodgingMap?.remove();
  state.routeMap = null;
  state.lodgingMap = null;
  $("#route-map").innerHTML = "";
  $("#lodging-pin-map").innerHTML = "";
}

function initRouteMap() {
  const mapEl = $("#route-map");
  const fallbackEl = $("#route-map-fallback");
  const config = routeConfig();
  const routeStops = config.routeStops;

  fallbackEl.hidden = true;
  mapEl.hidden = false;
  if (!window.L) {
    mapEl.hidden = true;
    fallbackEl.hidden = false;
    fallbackEl.innerHTML = renderRouteMapFallback(routeStops);
    return;
  }

  const map = L.map(mapEl, { zoomControl: true, scrollWheelZoom: false, tap: true });
  state.routeMap = map;
  map.attributionControl.setPrefix("路线点位为行程级近似");
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 18
  }).addTo(map);

  const outbound = config.outbound.map((index) => routeStops[index]).map((stop) => [stop.lat, stop.lng]);
  const returnLeg = config.returnLeg.map((index) => routeStops[index]).map((stop) => [stop.lat, stop.lng]);
  const bounds = [...outbound, ...returnLeg];

  L.polyline(outbound, {
    color: state.routeId === "east" ? "#2563eb" : "#0f766e",
    lineCap: "round",
    lineJoin: "round",
    opacity: 0.9,
    weight: 5
  }).addTo(map);
  L.polyline(returnLeg, {
    color: "#d97706",
    dashArray: "10 12",
    lineCap: "round",
    lineJoin: "round",
    opacity: 0.86,
    weight: 5
  }).addTo(map);

  routeStops.slice(0, -1).forEach((stop, index) => {
    L.marker([stop.lat, stop.lng], { icon: makeRouteIcon(stop.kind) })
      .addTo(map)
      .bindPopup(
        `<strong>${escapeHtml(stop.name)}</strong><p class="map-note">${escapeHtml(stop.label)} · ${escapeHtml(
          stop.mode
        )}</p>`
      )
      .bindTooltip(`${index + 1}. ${stop.name}`, {
        className: "route-tooltip",
        direction: "right",
        offset: [12, 0],
        permanent: true
      });
  });

  const legend = L.control({ position: "topleft" });
  legend.onAdd = () => {
    const div = L.DomUtil.create("div", "route-map-legend");
    div.innerHTML = `
      <strong>${escapeHtml(config.mapLegend)}</strong>
      <span><i class="legend-line"></i>行程主线</span>
      <span><i class="legend-line legend-line--dash"></i>返程段</span>
      <span><i class="route-dot route-dot--mountain"></i>山线 / 景区</span>
      <span><i class="route-dot route-dot--transfer"></i>换乘点</span>
    `;
    return div;
  };
  legend.addTo(map);

  map.fitBounds(bounds, { padding: [34, 34] });
  state.routeMapObserver = new ResizeObserver(() => map.invalidateSize());
  state.routeMapObserver.observe(mapEl);
  setTimeout(() => {
    map.invalidateSize();
    map.fitBounds(bounds, { padding: [34, 34] });
  }, 250);
}

function makeRouteIcon(kind) {
  return L.divIcon({
    html: `<span class="route-dot route-dot--${escapeHtml(kind)}"></span>`,
    className: "",
    iconAnchor: [9, 9],
    iconSize: [18, 18],
    popupAnchor: [0, -12]
  });
}

function renderRouteMapFallback(routeStops) {
  return `
    <div class="route-map-unavailable">
      <strong>在线地图暂时没有加载成功</strong>
      <p>路线内容仍可正常查看；网络可用时会显示在线底图。</p>
      <ol>
        ${routeStops
          .slice(0, -1)
          .map((stop) => `<li>${escapeHtml(stop.name)} · ${escapeHtml(stop.label)}</li>`)
          .join("")}
      </ol>
    </div>
  `;
}

function initLodgingPinMap() {
  const mapEl = $("#lodging-pin-map");
  const locations = (routeData().geocoded.lodging_locations || []).filter(
    (item) => typeof item.lat === "number" && typeof item.lng === "number"
  );

  if (!window.L || locations.length === 0) {
    mapEl.innerHTML = `<div class="route-map-fallback"><div class="route-map-unavailable"><strong>住宿点位待补充</strong><p>已有住宿资料仍可在右侧列表查看。</p></div></div>`;
    return;
  }

  const map = L.map(mapEl, { scrollWheelZoom: false, zoomControl: false });
  state.lodgingMap = map;
  L.control.zoom({ position: "bottomright" }).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap"
  }).addTo(map);

  const latLngs = locations.map((item) => [item.lat, item.lng]);
  const colors = {
    南昌: "#2c7488",
    庐山: "#2f5d50",
    景德镇: "#715b7d",
    三清山: "#b66542",
    武功山: "#b66542"
  };

  locations.forEach((item) => {
    L.circleMarker([item.lat, item.lng], {
      radius: 7,
      color: "#243233",
      weight: 2,
      fillColor: colors[item.city] || "#2c7488",
      fillOpacity: 0.9
    })
      .addTo(map)
      .bindPopup(
        `<strong>${escapeHtml(item.name)}</strong><p class="map-note">${escapeHtml(item.area)} · ${escapeHtml(
          item.coordinate_status || "区域级参考"
        )}</p><p class="map-note">${escapeHtml(item.address)}</p>`
      );
  });

  map.fitBounds(latLngs, { padding: [30, 30] });
  setTimeout(() => map.invalidateSize(), 200);
}

init();
