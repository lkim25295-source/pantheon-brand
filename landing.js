(function bindPantheon() {
  var cfg = window.PANTHEON;
  if (!cfg) return;

  var deskUrl = cfg.deskUrl;
  var positionsHash = cfg.deskPositionsHash || "#positions";
  if (positionsHash.charAt(0) !== "#") positionsHash = "#" + positionsHash;
  var positionsUrl = deskUrl.replace(/#.*$/, "") + positionsHash;
  var policy = cfg.policy || {};
  var staff = cfg.staff || {};

  function bindExternal(nodes, href) {
    nodes.forEach(function (el) {
      el.setAttribute("href", href);
      el.setAttribute("rel", "noopener noreferrer");
      el.setAttribute("target", "_blank");
    });
  }

  bindExternal(document.querySelectorAll("[data-desk]"), deskUrl);
  bindExternal(document.querySelectorAll("[data-desk-positions]"), positionsUrl);

  document.querySelectorAll("[data-x]").forEach(function (el) {
    if (cfg.xUrl) {
      el.setAttribute("href", cfg.xUrl);
      el.setAttribute("rel", "noopener noreferrer");
      el.setAttribute("target", "_blank");
    }
  });

  var host = "";
  var positionsHost = "";
  try {
    host = new URL(deskUrl).host;
    positionsHost = new URL(positionsUrl).host + new URL(positionsUrl).hash;
  } catch (e) {
    host = deskUrl;
    positionsHost = positionsUrl;
  }

  var text = {
    boss: staff.boss,
    cos: staff.chiefOfStaff,
    handle: cfg.handle,
    deskHost: host,
    positionsHost: positionsHost,
  };
  document.querySelectorAll("[data-bind]").forEach(function (el) {
    var key = el.getAttribute("data-bind");
    if (text[key]) el.textContent = text[key];
  });

  var dd = "DD ≤ " + policy.maxDrawdownPct + "%";
  var halt = "HALT " + policy.haltProfitMultiple + "×";
  var cap = "CAP " + policy.tronCapTrx + " TRX + " + policy.tronCapUsdt + " USDT";
  document.querySelectorAll("[data-rule]").forEach(function (el) {
    var kind = el.getAttribute("data-rule");
    if (kind === "dd") el.textContent = el.textContent.indexOf("DAILY") >= 0 ? dd + " DAILY" : dd;
    if (kind === "halt") el.textContent = halt;
    if (kind === "cap" && el.classList.contains("act-code")) el.textContent = "TRON CAPS";
    else if (kind === "cap" && el.textContent.indexOf("TRON CAP") >= 0) el.textContent = "TRON " + cap;
    else if (kind === "cap") el.textContent = cap;
  });

  var clock = document.getElementById("clock");
  function tick() {
    if (!clock) return;
    var now = new Date();
    clock.textContent =
      String(now.getUTCHours()).padStart(2, "0") +
      ":" +
      String(now.getUTCMinutes()).padStart(2, "0") +
      ":" +
      String(now.getUTCSeconds()).padStart(2, "0") +
      " UTC";
  }
  tick();
  setInterval(tick, 1000);
})();
