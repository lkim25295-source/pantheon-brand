/**
 * PANTHEON / PTH — single source of truth for public URLs + desk policy.
 *
 * Desk deploys rotate. Change `deskUrl` here only; the landing binds every
 * "Enter desk" control from this file.
 */
window.PANTHEON = {
  deskUrl: "https://temporary-nimble-celesta-5tjwx29.vercel.app",
  /* Live lots / session P&L — desk only. Brand page never publishes a track record. */
  deskPositionsHash: "#positions",
  handle: "@PantheonPTH",
  xUrl: "https://x.com/PantheonPTH",
  pagesUrl: "https://lkim25295-source.github.io/pantheon-brand/",
  staff: {
    boss: "kim God",
    chiefOfStaff: "Prime",
  },
  /* Hard rules — policy labels, not performance. Keep in lockstep with the desk. */
  policy: {
    maxDrawdownPct: 5,
    haltProfitMultiple: 100,
    tronCapTrx: 100,
    tronCapUsdt: 1000,
  },
};
