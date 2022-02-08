import {
  j as i,
  a as o,
  r as d,
  T as u,
  R as a,
  b as f,
} from "../dist/assets/vendor.4c73839e.js";
const m = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) c(e);
  new MutationObserver((e) => {
    for (const r of e)
      if (r.type === "childList")
        for (const n of r.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && c(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(e) {
    const r = {};
    return (
      e.integrity && (r.integrity = e.integrity),
      e.referrerpolicy && (r.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (r.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function c(e) {
    if (e.ep) return;
    e.ep = !0;
    const r = l(e);
    fetch(e.href, r);
  }
};
m();
const p = () =>
    i("div", {
      css: (s) => ({ color: s.colors.primary }),
      children: [
        o("div", { css: { color: "blue" }, children: "such emotion" }),
        "much wow",
      ],
    }),
  h = { colors: { primary: "hotpink" } };
function y() {
  return (
    d.exports.useState(0),
    o(u, {
      theme: h,
      children: i("div", {
        css: { color: "blue" },
        children: [
          o("header", { className: "App-header", children: "so cool" }),
          o(p, {}),
        ],
      }),
    })
  );
}
a.render(
  o(f.StrictMode, { children: o(y, {}) }),
  document.getElementById("root")
);
