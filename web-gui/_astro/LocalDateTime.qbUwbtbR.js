import {
  S as l,
  i as d,
  s as c,
  e as m,
  t as u,
  b as _,
  d as f,
  j as h,
  h as o,
  l as p,
  m as S,
  w as g,
  M as r,
} from "./index.BGUI2HGa.js";
function y(s) {
  let e,
    i = s[0].toLocaleString("en-US", s[1]) + "",
    n;
  return {
    c() {
      (e = m("span")), (n = u(i));
    },
    l(t) {
      e = _(t, "SPAN", {});
      var a = f(e);
      (n = h(a, i)), a.forEach(o);
    },
    m(t, a) {
      p(t, e, a), S(e, n);
    },
    p(t, [a]) {
      a & 3 && i !== (i = t[0].toLocaleString("en-US", t[1]) + "") && g(n, i);
    },
    i: r,
    o: r,
    d(t) {
      t && o(e);
    },
  };
}
function L(s, e, i) {
  let { date: n } = e,
    {
      date_options: t = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !1,
      },
    } = e;
  return (
    (n = new Date(n)),
    (s.$$set = (a) => {
      "date" in a && i(0, (n = a.date)), "date_options" in a && i(1, (t = a.date_options));
    }),
    [n, t]
  );
}
class w extends l {
  constructor(e) {
    super(), d(this, e, L, y, c, { date: 0, date_options: 1 });
  }
}
export { w as default };
