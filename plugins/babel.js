import {
  j as i,
  a as o,
  r as d,
  T as a,
  R as u,
  b as f,
} from "./vendor.4c73839e.js";
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
var p = { name: "117wnve", styles: "color:blue" };
const h = () =>
    i("div", {
      css: (s) => ({ color: s.colors.primary }),
      children: [o("div", { css: p, children: "such emotion" }), "much wow"],
    }),
  y = { colors: { primary: "hotpink" } };
var v = { name: "117wnve", styles: "color:blue" };
function g() {
  return (
    d.exports.useState(0),
    o(a, {
      theme: y,
      children: i("div", {
        css: v,
        children: [
          o("header", { className: "App-header", children: "so cool" }),
          o(h, {}),
        ],
      }),
    })
  );
}
u.render(
  o(f.StrictMode, { children: o(g, {}) }),
  document.getElementById("root")
);
