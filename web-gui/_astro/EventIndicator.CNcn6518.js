import {
  S as d,
  i as h,
  s as v,
  c as p,
  e as g,
  b as S,
  d as b,
  h as f,
  k as r,
  I as u,
  H as _,
  l as y,
  u as k,
  o as w,
  p as I,
  q,
  r as D,
} from "./index.BGUI2HGa.js";
/* empty css                                */ function E(l) {
  let t, i, a;
  const o = l[4].default,
    n = p(o, l, l[3], null);
  return {
    c() {
      (t = g("div")), n && n.c(), this.h();
    },
    l(e) {
      t = S(e, "DIV", { class: !0 });
      var s = b(t);
      n && n.l(s), s.forEach(f), this.h();
    },
    h() {
      r(t, "class", (i = u(`event-indicator align-center d-inline-block ${l[0]}`) + " svelte-12lfmau")),
        _(t, "d-none", !l[1]);
    },
    m(e, s) {
      y(e, t, s), n && n.m(t, null), (a = !0);
    },
    p(e, [s]) {
      n && n.p && (!a || s & 8) && k(n, o, e, e[3], a ? I(o, e[3], s, null) : w(e[3]), null),
        (!a || (s & 1 && i !== (i = u(`event-indicator align-center d-inline-block ${e[0]}`) + " svelte-12lfmau"))) &&
          r(t, "class", i),
        (!a || s & 3) && _(t, "d-none", !e[1]);
    },
    i(e) {
      a || (q(n, e), (a = !0));
    },
    o(e) {
      D(n, e), (a = !1);
    },
    d(e) {
      e && f(t), n && n.d(e);
    },
  };
}
function C(l, t, i) {
  let { $$slots: a = {}, $$scope: o } = t,
    { type: n } = t,
    { timeSpan: e = [0, 0] } = t;
  const s = new Date().getTime(),
    m = e[0] < s && e[1] > s;
  return (
    (l.$$set = (c) => {
      "type" in c && i(0, (n = c.type)),
        "timeSpan" in c && i(2, (e = c.timeSpan)),
        "$$scope" in c && i(3, (o = c.$$scope));
    }),
    [n, m, e, o, a]
  );
}
class V extends d {
  constructor(t) {
    super(), h(this, t, C, E, v, { type: 0, timeSpan: 2 });
  }
}
export { V as default };
