import {
  S as m,
  i as p,
  s as d,
  B as l,
  l as r,
  M as i,
  h as c,
  e as u,
  b as h,
  g as _,
  k as b,
} from "./index.BGUI2HGa.js";
function x(s) {
  let e,
    n = "new post";
  return {
    c() {
      (e = u("span")), (e.textContent = n), this.h();
    },
    l(t) {
      (e = h(t, "SPAN", { class: !0, "data-svelte-h": !0 })), _(e) !== "svelte-of6vhl" && (e.textContent = n), this.h();
    },
    h() {
      b(
        e,
        "class",
        "float-end text-primary-emphasis border border-primary badge rounded-pill fw-normal text btn-sm text-nowrap",
      );
    },
    m(t, a) {
      r(t, e, a);
    },
    d(t) {
      t && c(e);
    },
  };
}
function S(s) {
  let e,
    n = s[0] && x();
  return {
    c() {
      n && n.c(), (e = l());
    },
    l(t) {
      n && n.l(t), (e = l());
    },
    m(t, a) {
      n && n.m(t, a), r(t, e, a);
    },
    p: i,
    i,
    o: i,
    d(t) {
      t && c(e), n && n.d(t);
    },
  };
}
function w(s, e, n) {
  let { timeSpan: t = [0, 0] } = e;
  const a = new Date().getTime(),
    f = t[0] < a && t[1] > a;
  return (
    (s.$$set = (o) => {
      "timeSpan" in o && n(1, (t = o.timeSpan));
    }),
    [f, t]
  );
}
class g extends m {
  constructor(e) {
    super(), p(this, e, w, S, d, { timeSpan: 1 });
  }
}
export { g as default };
