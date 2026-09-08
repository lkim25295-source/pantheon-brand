(function bindPantheon() {
  var cfg = window.PANTHEON;
  if (!cfg) return;

  var deskUrl = cfg.deskUrl;
  var policy = cfg.policy || {};
  var staff = cfg.staff || {};

  document.querySelectorAll("[data-desk]").forEach(function (el) {
    el.setAttribute("href", deskUrl);
    el.setAttribute("rel", "noopener noreferrer");
    el.setAttribute("target", "_blank");
  });

  document.querySelectorAll("[data-x]").forEach(function (el) {
    if (cfg.xUrl) {
      el.setAttribute("href", cfg.xUrl);
      el.setAttribute("rel", "noopener noreferrer");
      el.setAttribute("target", "_blank");
    }
  });

  var host = "";
  try {
    host = new URL(deskUrl).host;
  } catch (e) {
    host = deskUrl;
  }

  var text = {
    boss: staff.boss,
    cos: staff.chiefOfStaff,
    handle: cfg.handle,
    deskHost: host,
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
