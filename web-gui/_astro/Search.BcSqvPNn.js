import {
  S as Gr,
  i as Xr,
  s as eo,
  e as to,
  b as no,
  d as ro,
  h as on,
  k as an,
  l as oo,
  M as cn,
  L as io,
} from "./index.BGUI2HGa.js";
/* empty css                                */ /*! @docsearch/js 3.6.1 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */ function un(
  t,
  e,
) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function N(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? un(Object(n), !0).forEach(function (r) {
          ao(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : un(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
function D(t) {
  return (
    (D =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    D(t)
  );
}
function ao(t, e, n) {
  return (
    e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t
  );
}
function Mt() {
  return (
    (Mt =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }),
    Mt.apply(this, arguments)
  );
}
function Ie(t, e) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(t) ||
    (function (n, r) {
      var o = n == null ? null : (typeof Symbol < "u" && n[Symbol.iterator]) || n["@@iterator"];
      if (o != null) {
        var i,
          u,
          s = [],
          l = !0,
          f = !1;
        try {
          for (o = o.call(n); !(l = (i = o.next()).done) && (s.push(i.value), !r || s.length !== r); l = !0);
        } catch (a) {
          (f = !0), (u = a);
        } finally {
          try {
            l || o.return == null || o.return();
          } finally {
            if (f) throw u;
          }
        }
        return s;
      }
    })(t, e) ||
    fr(t, e) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function _t(t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return Ht(e);
    })(t) ||
    (function (e) {
      if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
    })(t) ||
    fr(t) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function fr(t, e) {
  if (t) {
    if (typeof t == "string") return Ht(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    return (
      n === "Object" && t.constructor && (n = t.constructor.name),
      n === "Map" || n === "Set"
        ? Array.from(t)
        : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Ht(t, e)
          : void 0
    );
  }
}
function Ht(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var j,
  He,
  mr,
  ln,
  pr,
  Et = {},
  Zt = [],
  co = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function oe(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function dr(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ee(t, e, n) {
  var r,
    o,
    i,
    u = arguments,
    s = {};
  for (i in e) i == "key" ? (r = e[i]) : i == "ref" ? (o = e[i]) : (s[i] = e[i]);
  if (arguments.length > 3) for (n = [n], i = 3; i < arguments.length; i++) n.push(u[i]);
  if ((n != null && (s.children = n), typeof t == "function" && t.defaultProps != null))
    for (i in t.defaultProps) s[i] === void 0 && (s[i] = t.defaultProps[i]);
  return Ue(t, s, r, o, null);
}
function Ue(t, e, n, r, o) {
  var i = {
    type: t,
    props: e,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: o ?? ++j.__v,
  };
  return j.vnode != null && j.vnode(i), i;
}
function pe(t) {
  return t.children;
}
function te(t, e) {
  (this.props = t), (this.context = e);
}
function nt(t, e) {
  if (e == null) return t.__ ? nt(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? nt(t) : null;
}
function vr(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return vr(t);
  }
}
function Ut(t) {
  ((!t.__d && (t.__d = !0) && He.push(t) && !jt.__r++) || ln !== j.debounceRendering) &&
    ((ln = j.debounceRendering) || mr)(jt);
}
function jt() {
  for (var t; (jt.__r = He.length); )
    (t = He.sort(function (e, n) {
      return e.__v.__b - n.__v.__b;
    })),
      (He = []),
      t.some(function (e) {
        var n, r, o, i, u, s;
        e.__d &&
          ((u = (i = (n = e).__v).__e),
          (s = n.__P) &&
            ((r = []),
            ((o = oe({}, i)).__v = i.__v + 1),
            Qt(s, i, o, n.__n, s.ownerSVGElement !== void 0, i.__h != null ? [u] : null, r, u ?? nt(i), i.__h),
            _r(r, i),
            i.__e != u && vr(i)));
      });
}
function hr(t, e, n, r, o, i, u, s, l, f) {
  var a,
    h,
    y,
    v,
    d,
    p,
    m,
    g = (r && r.__k) || Zt,
    _ = g.length;
  for (n.__k = [], a = 0; a < e.length; a++)
    if (
      (v = n.__k[a] =
        (v = e[a]) == null || typeof v == "boolean"
          ? null
          : typeof v == "string" || typeof v == "number"
            ? Ue(null, v, null, null, v)
            : Array.isArray(v)
              ? Ue(pe, { children: v }, null, null, null)
              : v.__b > 0
                ? Ue(v.type, v.props, v.key, null, v.__v)
                : v) != null
    ) {
      if (((v.__ = n), (v.__b = n.__b + 1), (y = g[a]) === null || (y && v.key == y.key && v.type === y.type)))
        g[a] = void 0;
      else
        for (h = 0; h < _; h++) {
          if ((y = g[h]) && v.key == y.key && v.type === y.type) {
            g[h] = void 0;
            break;
          }
          y = null;
        }
      Qt(t, v, (y = y || Et), o, i, u, s, l, f),
        (d = v.__e),
        (h = v.ref) && y.ref != h && (m || (m = []), y.ref && m.push(y.ref, null, v), m.push(h, v.__c || d, v)),
        d != null
          ? (p == null && (p = d),
            typeof v.type == "function" && v.__k != null && v.__k === y.__k
              ? (v.__d = l = yr(v, l, t))
              : (l = gr(t, v, y, g, d, l)),
            f || n.type !== "option" ? typeof n.type == "function" && (n.__d = l) : (t.value = ""))
          : l && y.__e == l && l.parentNode != t && (l = nt(y));
    }
  for (n.__e = p, a = _; a--; )
    g[a] != null &&
      (typeof n.type == "function" && g[a].__e != null && g[a].__e == n.__d && (n.__d = nt(r, a + 1)), Sr(g[a], g[a]));
  if (m) for (a = 0; a < m.length; a++) br(m[a], m[++a], m[++a]);
}
function yr(t, e, n) {
  var r, o;
  for (r = 0; r < t.__k.length; r++)
    (o = t.__k[r]) && ((o.__ = t), (e = typeof o.type == "function" ? yr(o, e, n) : gr(n, o, o, t.__k, o.__e, e)));
  return e;
}
function ie(t, e) {
  return (
    (e = e || []),
    t == null ||
      typeof t == "boolean" ||
      (Array.isArray(t)
        ? t.some(function (n) {
            ie(n, e);
          })
        : e.push(t)),
    e
  );
}
function gr(t, e, n, r, o, i) {
  var u, s, l;
  if (e.__d !== void 0) (u = e.__d), (e.__d = void 0);
  else if (n == null || o != i || o.parentNode == null)
    e: if (i == null || i.parentNode !== t) t.appendChild(o), (u = null);
    else {
      for (s = i, l = 0; (s = s.nextSibling) && l < r.length; l += 2) if (s == o) break e;
      t.insertBefore(o, i), (u = i);
    }
  return u !== void 0 ? u : o.nextSibling;
}
function sn(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : (t[e] = n == null ? "" : typeof n != "number" || co.test(e) ? n : n + "px");
}
function lt(t, e, n, r, o) {
  var i;
  e: if (e === "style")
    if (typeof n == "string") t.style.cssText = n;
    else {
      if ((typeof r == "string" && (t.style.cssText = r = ""), r)) for (e in r) (n && e in n) || sn(t.style, e, "");
      if (n) for (e in n) (r && n[e] === r[e]) || sn(t.style, e, n[e]);
    }
  else if (e[0] === "o" && e[1] === "n")
    (i = e !== (e = e.replace(/Capture$/, ""))),
      (e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2)),
      t.l || (t.l = {}),
      (t.l[e + i] = n),
      n ? r || t.addEventListener(e, i ? mn : fn, i) : t.removeEventListener(e, i ? mn : fn, i);
  else if (e !== "dangerouslySetInnerHTML") {
    if (o) e = e.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
    else if (e !== "href" && e !== "list" && e !== "form" && e !== "download" && e in t)
      try {
        t[e] = n ?? "";
        break e;
      } catch {}
    typeof n == "function" ||
      (n != null && (n !== !1 || (e[0] === "a" && e[1] === "r")) ? t.setAttribute(e, n) : t.removeAttribute(e));
  }
}
function fn(t) {
  this.l[t.type + !1](j.event ? j.event(t) : t);
}
function mn(t) {
  this.l[t.type + !0](j.event ? j.event(t) : t);
}
function Qt(t, e, n, r, o, i, u, s, l) {
  var f,
    a,
    h,
    y,
    v,
    d,
    p,
    m,
    g,
    _,
    b,
    S = e.type;
  if (e.constructor !== void 0) return null;
  n.__h != null && ((l = n.__h), (s = e.__e = n.__e), (e.__h = null), (i = [s])), (f = j.__b) && f(e);
  try {
    e: if (typeof S == "function") {
      if (
        ((m = e.props),
        (g = (f = S.contextType) && r[f.__c]),
        (_ = f ? (g ? g.props.value : f.__) : r),
        n.__c
          ? (p = (a = e.__c = n.__c).__ = a.__E)
          : ("prototype" in S && S.prototype.render
              ? (e.__c = a = new S(m, _))
              : ((e.__c = a = new te(m, _)), (a.constructor = S), (a.render = lo)),
            g && g.sub(a),
            (a.props = m),
            a.state || (a.state = {}),
            (a.context = _),
            (a.__n = r),
            (h = a.__d = !0),
            (a.__h = [])),
        a.__s == null && (a.__s = a.state),
        S.getDerivedStateFromProps != null &&
          (a.__s == a.state && (a.__s = oe({}, a.__s)), oe(a.__s, S.getDerivedStateFromProps(m, a.__s))),
        (y = a.props),
        (v = a.state),
        h)
      )
        S.getDerivedStateFromProps == null && a.componentWillMount != null && a.componentWillMount(),
          a.componentDidMount != null && a.__h.push(a.componentDidMount);
      else {
        if (
          (S.getDerivedStateFromProps == null &&
            m !== y &&
            a.componentWillReceiveProps != null &&
            a.componentWillReceiveProps(m, _),
          (!a.__e && a.shouldComponentUpdate != null && a.shouldComponentUpdate(m, a.__s, _) === !1) || e.__v === n.__v)
        ) {
          (a.props = m),
            (a.state = a.__s),
            e.__v !== n.__v && (a.__d = !1),
            (a.__v = e),
            (e.__e = n.__e),
            (e.__k = n.__k),
            a.__h.length && u.push(a);
          break e;
        }
        a.componentWillUpdate != null && a.componentWillUpdate(m, a.__s, _),
          a.componentDidUpdate != null &&
            a.__h.push(function () {
              a.componentDidUpdate(y, v, d);
            });
      }
      (a.context = _),
        (a.props = m),
        (a.state = a.__s),
        (f = j.__r) && f(e),
        (a.__d = !1),
        (a.__v = e),
        (a.__P = t),
        (f = a.render(a.props, a.state, a.context)),
        (a.state = a.__s),
        a.getChildContext != null && (r = oe(oe({}, r), a.getChildContext())),
        h || a.getSnapshotBeforeUpdate == null || (d = a.getSnapshotBeforeUpdate(y, v)),
        (b = f != null && f.type === pe && f.key == null ? f.props.children : f),
        hr(t, Array.isArray(b) ? b : [b], e, n, r, o, i, u, s, l),
        (a.base = e.__e),
        (e.__h = null),
        a.__h.length && u.push(a),
        p && (a.__E = a.__ = null),
        (a.__e = !1);
    } else i == null && e.__v === n.__v ? ((e.__k = n.__k), (e.__e = n.__e)) : (e.__e = uo(n.__e, e, n, r, o, i, u, l));
    (f = j.diffed) && f(e);
  } catch (O) {
    (e.__v = null), (l || i != null) && ((e.__e = s), (e.__h = !!l), (i[i.indexOf(s)] = null)), j.__e(O, e, n);
  }
}
function _r(t, e) {
  j.__c && j.__c(e, t),
    t.some(function (n) {
      try {
        (t = n.__h),
          (n.__h = []),
          t.some(function (r) {
            r.call(n);
          });
      } catch (r) {
        j.__e(r, n.__v);
      }
    });
}
function uo(t, e, n, r, o, i, u, s) {
  var l,
    f,
    a,
    h,
    y = n.props,
    v = e.props,
    d = e.type,
    p = 0;
  if ((d === "svg" && (o = !0), i != null)) {
    for (; p < i.length; p++)
      if ((l = i[p]) && (l === t || (d ? l.localName == d : l.nodeType == 3))) {
        (t = l), (i[p] = null);
        break;
      }
  }
  if (t == null) {
    if (d === null) return document.createTextNode(v);
    (t = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, v.is && v)),
      (i = null),
      (s = !1);
  }
  if (d === null) y === v || (s && t.data === v) || (t.data = v);
  else {
    if (
      ((i = i && Zt.slice.call(t.childNodes)),
      (f = (y = n.props || Et).dangerouslySetInnerHTML),
      (a = v.dangerouslySetInnerHTML),
      !s)
    ) {
      if (i != null) for (y = {}, h = 0; h < t.attributes.length; h++) y[t.attributes[h].name] = t.attributes[h].value;
      (a || f) &&
        ((a && ((f && a.__html == f.__html) || a.__html === t.innerHTML)) || (t.innerHTML = (a && a.__html) || ""));
    }
    if (
      ((function (m, g, _, b, S) {
        var O;
        for (O in _) O === "children" || O === "key" || O in g || lt(m, O, null, _[O], b);
        for (O in g)
          (S && typeof g[O] != "function") ||
            O === "children" ||
            O === "key" ||
            O === "value" ||
            O === "checked" ||
            _[O] === g[O] ||
            lt(m, O, g[O], _[O], b);
      })(t, v, y, o, s),
      a)
    )
      e.__k = [];
    else if (
      ((p = e.props.children),
      hr(t, Array.isArray(p) ? p : [p], e, n, r, o && d !== "foreignObject", i, u, t.firstChild, s),
      i != null)
    )
      for (p = i.length; p--; ) i[p] != null && dr(i[p]);
    s ||
      ("value" in v &&
        (p = v.value) !== void 0 &&
        (p !== t.value || (d === "progress" && !p)) &&
        lt(t, "value", p, y.value, !1),
      "checked" in v && (p = v.checked) !== void 0 && p !== t.checked && lt(t, "checked", p, y.checked, !1));
  }
  return t;
}
function br(t, e, n) {
  try {
    typeof t == "function" ? t(e) : (t.current = e);
  } catch (r) {
    j.__e(r, n);
  }
}
function Sr(t, e, n) {
  var r, o, i;
  if (
    (j.unmount && j.unmount(t),
    (r = t.ref) && ((r.current && r.current !== t.__e) || br(r, null, e)),
    n || typeof t.type == "function" || (n = (o = t.__e) != null),
    (t.__e = t.__d = void 0),
    (r = t.__c) != null)
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (u) {
        j.__e(u, e);
      }
    r.base = r.__P = null;
  }
  if ((r = t.__k)) for (i = 0; i < r.length; i++) r[i] && Sr(r[i], e, n);
  o != null && dr(o);
}
function lo(t, e, n) {
  return this.constructor(t, n);
}
function rt(t, e, n) {
  var r, o, i;
  j.__ && j.__(t, e),
    (o = (r = typeof n == "function") ? null : (n && n.__k) || e.__k),
    (i = []),
    Qt(
      e,
      (t = ((!r && n) || e).__k = ee(pe, null, [t])),
      o || Et,
      Et,
      e.ownerSVGElement !== void 0,
      !r && n ? [n] : o ? null : e.firstChild ? Zt.slice.call(e.childNodes) : null,
      i,
      !r && n ? n : o ? o.__e : e.firstChild,
      r,
    ),
    _r(i, t);
}
function Or(t, e) {
  rt(t, e, Or);
}
function so(t, e, n) {
  var r,
    o,
    i,
    u = arguments,
    s = oe({}, t.props);
  for (i in e) i == "key" ? (r = e[i]) : i == "ref" ? (o = e[i]) : (s[i] = e[i]);
  if (arguments.length > 3) for (n = [n], i = 3; i < arguments.length; i++) n.push(u[i]);
  return n != null && (s.children = n), Ue(t.type, s, r || t.key, o || t.ref, null);
}
(j = {
  __e: function (t, e) {
    for (var n, r, o; (e = e.__); )
      if ((n = e.__c) && !n.__)
        try {
          if (
            ((r = n.constructor) &&
              r.getDerivedStateFromError != null &&
              (n.setState(r.getDerivedStateFromError(t)), (o = n.__d)),
            n.componentDidCatch != null && (n.componentDidCatch(t), (o = n.__d)),
            o)
          )
            return (n.__E = n);
        } catch (i) {
          t = i;
        }
    throw t;
  },
  __v: 0,
}),
  (te.prototype.setState = function (t, e) {
    var n;
    (n = this.__s != null && this.__s !== this.state ? this.__s : (this.__s = oe({}, this.state))),
      typeof t == "function" && (t = t(oe({}, n), this.props)),
      t && oe(n, t),
      t != null && this.__v && (e && this.__h.push(e), Ut(this));
  }),
  (te.prototype.forceUpdate = function (t) {
    this.__v && ((this.__e = !0), t && this.__h.push(t), Ut(this));
  }),
  (te.prototype.render = pe),
  (He = []),
  (mr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
  (jt.__r = 0),
  (pr = 0);
var xe,
  K,
  pn,
  Ce = 0,
  Ft = [],
  dn = j.__b,
  vn = j.__r,
  hn = j.diffed,
  yn = j.__c,
  gn = j.unmount;
function it(t, e) {
  j.__h && j.__h(K, t, Ce || e), (Ce = 0);
  var n = K.__H || (K.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function Yt(t) {
  return (Ce = 1), wr(Er, t);
}
function wr(t, e, n) {
  var r = it(xe++, 2);
  return (
    (r.t = t),
    r.__c ||
      ((r.__ = [
        n ? n(e) : Er(void 0, e),
        function (o) {
          var i = r.t(r.__[0], o);
          r.__[0] !== i && ((r.__ = [i, r.__[1]]), r.__c.setState({}));
        },
      ]),
      (r.__c = K)),
    r.__
  );
}
function Gt(t, e) {
  var n = it(xe++, 3);
  !j.__s && Xt(n.__H, e) && ((n.__ = t), (n.__H = e), K.__H.__h.push(n));
}
function _n(t, e) {
  var n = it(xe++, 4);
  !j.__s && Xt(n.__H, e) && ((n.__ = t), (n.__H = e), K.__h.push(n));
}
function Ct(t, e) {
  var n = it(xe++, 7);
  return Xt(n.__H, e) && ((n.__ = t()), (n.__H = e), (n.__h = t)), n.__;
}
function fo() {
  Ft.forEach(function (t) {
    if (t.__P)
      try {
        t.__H.__h.forEach(bt), t.__H.__h.forEach(Bt), (t.__H.__h = []);
      } catch (e) {
        (t.__H.__h = []), j.__e(e, t.__v);
      }
  }),
    (Ft = []);
}
(j.__b = function (t) {
  (K = null), dn && dn(t);
}),
  (j.__r = function (t) {
    vn && vn(t), (xe = 0);
    var e = (K = t.__c).__H;
    e && (e.__h.forEach(bt), e.__h.forEach(Bt), (e.__h = []));
  }),
  (j.diffed = function (t) {
    hn && hn(t);
    var e = t.__c;
    e &&
      e.__H &&
      e.__H.__h.length &&
      ((Ft.push(e) !== 1 && pn === j.requestAnimationFrame) ||
        (
          (pn = j.requestAnimationFrame) ||
          function (n) {
            var r,
              o = function () {
                clearTimeout(i), bn && cancelAnimationFrame(r), setTimeout(n);
              },
              i = setTimeout(o, 100);
            bn && (r = requestAnimationFrame(o));
          }
        )(fo)),
      (K = void 0);
  }),
  (j.__c = function (t, e) {
    e.some(function (n) {
      try {
        n.__h.forEach(bt),
          (n.__h = n.__h.filter(function (r) {
            return !r.__ || Bt(r);
          }));
      } catch (r) {
        e.some(function (o) {
          o.__h && (o.__h = []);
        }),
          (e = []),
          j.__e(r, n.__v);
      }
    }),
      yn && yn(t, e);
  }),
  (j.unmount = function (t) {
    gn && gn(t);
    var e = t.__c;
    if (e && e.__H)
      try {
        e.__H.__.forEach(bt);
      } catch (n) {
        j.__e(n, e.__v);
      }
  });
var bn = typeof requestAnimationFrame == "function";
function bt(t) {
  var e = K;
  typeof t.__c == "function" && t.__c(), (K = e);
}
function Bt(t) {
  var e = K;
  (t.__c = t.__()), (K = e);
}
function Xt(t, e) {
  return (
    !t ||
    t.length !== e.length ||
    e.some(function (n, r) {
      return n !== t[r];
    })
  );
}
function Er(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function jr(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function Vt(t, e) {
  for (var n in t) if (n !== "__source" && !(n in e)) return !0;
  for (var r in e) if (r !== "__source" && t[r] !== e[r]) return !0;
  return !1;
}
function Kt(t) {
  this.props = t;
}
((Kt.prototype = new te()).isPureReactComponent = !0),
  (Kt.prototype.shouldComponentUpdate = function (t, e) {
    return Vt(this.props, t) || Vt(this.state, e);
  });
var Sn = j.__b;
j.__b = function (t) {
  t.type && t.type.__f && t.ref && ((t.props.ref = t.ref), (t.ref = null)), Sn && Sn(t);
};
var mo = (typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref")) || 3911,
  On = function (t, e) {
    return t == null ? null : ie(ie(t).map(e));
  },
  po = {
    map: On,
    forEach: On,
    count: function (t) {
      return t ? ie(t).length : 0;
    },
    only: function (t) {
      var e = ie(t);
      if (e.length !== 1) throw "Children.only";
      return e[0];
    },
    toArray: ie,
  },
  vo = j.__e;
function St() {
  (this.__u = 0), (this.t = null), (this.__b = null);
}
function Pr(t) {
  var e = t.__.__c;
  return e && e.__e && e.__e(t);
}
function Le() {
  (this.u = null), (this.o = null);
}
(j.__e = function (t, e, n) {
  if (t.then) {
    for (var r, o = e; (o = o.__); )
      if ((r = o.__c) && r.__c) return e.__e == null && ((e.__e = n.__e), (e.__k = n.__k)), r.__c(t, e);
  }
  vo(t, e, n);
}),
  ((St.prototype = new te()).__c = function (t, e) {
    var n = e.__c,
      r = this;
    r.t == null && (r.t = []), r.t.push(n);
    var o = Pr(r.__v),
      i = !1,
      u = function () {
        i || ((i = !0), (n.componentWillUnmount = n.__c), o ? o(s) : s());
      };
    (n.__c = n.componentWillUnmount),
      (n.componentWillUnmount = function () {
        u(), n.__c && n.__c();
      });
    var s = function () {
        if (!--r.__u) {
          if (r.state.__e) {
            var f = r.state.__e;
            r.__v.__k[0] = (function h(y, v, d) {
              return (
                y &&
                  ((y.__v = null),
                  (y.__k =
                    y.__k &&
                    y.__k.map(function (p) {
                      return h(p, v, d);
                    })),
                  y.__c &&
                    y.__c.__P === v &&
                    (y.__e && d.insertBefore(y.__e, y.__d), (y.__c.__e = !0), (y.__c.__P = d))),
                y
              );
            })(f, f.__c.__P, f.__c.__O);
          }
          var a;
          for (r.setState({ __e: (r.__b = null) }); (a = r.t.pop()); ) a.forceUpdate();
        }
      },
      l = e.__h === !0;
    r.__u++ || l || r.setState({ __e: (r.__b = r.__v.__k[0]) }), t.then(u, u);
  }),
  (St.prototype.componentWillUnmount = function () {
    this.t = [];
  }),
  (St.prototype.render = function (t, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"),
          r = this.__v.__k[0].__c;
        this.__v.__k[0] = (function i(u, s, l) {
          return (
            u &&
              (u.__c &&
                u.__c.__H &&
                (u.__c.__H.__.forEach(function (f) {
                  typeof f.__c == "function" && f.__c();
                }),
                (u.__c.__H = null)),
              (u = jr({}, u)).__c != null && (u.__c.__P === l && (u.__c.__P = s), (u.__c = null)),
              (u.__k =
                u.__k &&
                u.__k.map(function (f) {
                  return i(f, s, l);
                }))),
            u
          );
        })(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    var o = e.__e && ee(pe, null, t.fallback);
    return o && (o.__h = null), [ee(pe, null, e.__e ? null : t.children), o];
  });
var wn = function (t, e, n) {
  if ((++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size)))
    for (n = t.u; n; ) {
      for (; n.length > 3; ) n.pop()();
      if (n[1] < n[0]) break;
      t.u = n = n[2];
    }
};
function ho(t) {
  return (
    (this.getChildContext = function () {
      return t.context;
    }),
    t.children
  );
}
function yo(t) {
  var e = this,
    n = t.i;
  (e.componentWillUnmount = function () {
    rt(null, e.l), (e.l = null), (e.i = null);
  }),
    e.i && e.i !== n && e.componentWillUnmount(),
    t.__v
      ? (e.l ||
          ((e.i = n),
          (e.l = {
            nodeType: 1,
            parentNode: n,
            childNodes: [],
            appendChild: function (r) {
              this.childNodes.push(r), e.i.appendChild(r);
            },
            insertBefore: function (r, o) {
              this.childNodes.push(r), e.i.appendChild(r);
            },
            removeChild: function (r) {
              this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), e.i.removeChild(r);
            },
          })),
        rt(ee(ho, { context: e.context }, t.__v), e.l))
      : e.l && e.componentWillUnmount();
}
function Ir(t, e) {
  return ee(yo, { __v: t, i: e });
}
((Le.prototype = new te()).__e = function (t) {
  var e = this,
    n = Pr(e.__v),
    r = e.o.get(t);
  return (
    r[0]++,
    function (o) {
      var i = function () {
        e.props.revealOrder ? (r.push(o), wn(e, t, r)) : o();
      };
      n ? n(i) : i();
    }
  );
}),
  (Le.prototype.render = function (t) {
    (this.u = null), (this.o = new Map());
    var e = ie(t.children);
    t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
    for (var n = e.length; n--; ) this.o.set(e[n], (this.u = [1, 0, this.u]));
    return t.children;
  }),
  (Le.prototype.componentDidUpdate = Le.prototype.componentDidMount =
    function () {
      var t = this;
      this.o.forEach(function (e, n) {
        wn(t, n, e);
      });
    });
var Dr = (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) || 60103,
  go =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  _o = function (t) {
    return (typeof Symbol < "u" && D(Symbol()) == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
  };
function kr(t, e, n) {
  return e.__k == null && (e.textContent = ""), rt(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
(te.prototype.isReactComponent = {}),
  ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
    Object.defineProperty(te.prototype, t, {
      configurable: !0,
      get: function () {
        return this["UNSAFE_" + t];
      },
      set: function (e) {
        Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
      },
    });
  });
var En = j.event;
function bo() {}
function So() {
  return this.cancelBubble;
}
function Oo() {
  return this.defaultPrevented;
}
j.event = function (t) {
  return (
    En && (t = En(t)), (t.persist = bo), (t.isPropagationStopped = So), (t.isDefaultPrevented = Oo), (t.nativeEvent = t)
  );
};
var Cr,
  jn = {
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  Pn = j.vnode;
j.vnode = function (t) {
  var e = t.type,
    n = t.props,
    r = n;
  if (typeof e == "string") {
    for (var o in ((r = {}), n)) {
      var i = n[o];
      (o === "value" && "defaultValue" in n && i == null) ||
        (o === "defaultValue" && "value" in n && n.value == null
          ? (o = "value")
          : o === "download" && i === !0
            ? (i = "")
            : /ondoubleclick/i.test(o)
              ? (o = "ondblclick")
              : /^onchange(textarea|input)/i.test(o + e) && !_o(n.type)
                ? (o = "oninput")
                : /^on(Ani|Tra|Tou|BeforeInp)/.test(o)
                  ? (o = o.toLowerCase())
                  : go.test(o)
                    ? (o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase())
                    : i === null && (i = void 0),
        (r[o] = i));
    }
    e == "select" &&
      r.multiple &&
      Array.isArray(r.value) &&
      (r.value = ie(n.children).forEach(function (u) {
        u.props.selected = r.value.indexOf(u.props.value) != -1;
      })),
      e == "select" &&
        r.defaultValue != null &&
        (r.value = ie(n.children).forEach(function (u) {
          u.props.selected = r.multiple ? r.defaultValue.indexOf(u.props.value) != -1 : r.defaultValue == u.props.value;
        })),
      (t.props = r);
  }
  e &&
    n.class != n.className &&
    ((jn.enumerable = "className" in n),
    n.className != null && (r.class = n.className),
    Object.defineProperty(r, "className", jn)),
    (t.$$typeof = Dr),
    Pn && Pn(t);
};
var In = j.__r;
j.__r = function (t) {
  In && In(t), (Cr = t.__c);
};
var wo = {
  ReactCurrentDispatcher: {
    current: {
      readContext: function (t) {
        return Cr.__n[t.__c].props.value;
      },
    },
  },
};
function Dn(t) {
  return !!t && t.$$typeof === Dr;
}
(typeof performance > "u" ? "undefined" : D(performance)) == "object" &&
  typeof performance.now == "function" &&
  performance.now.bind(performance);
var c = {
    useState: Yt,
    useReducer: wr,
    useEffect: Gt,
    useLayoutEffect: _n,
    useRef: function (t) {
      return (
        (Ce = 5),
        Ct(function () {
          return { current: t };
        }, [])
      );
    },
    useImperativeHandle: function (t, e, n) {
      (Ce = 6),
        _n(
          function () {
            typeof t == "function" ? t(e()) : t && (t.current = e());
          },
          n == null ? n : n.concat(t),
        );
    },
    useMemo: Ct,
    useCallback: function (t, e) {
      return (
        (Ce = 8),
        Ct(function () {
          return t;
        }, e)
      );
    },
    useContext: function (t) {
      var e = K.context[t.__c],
        n = it(xe++, 9);
      return (n.__c = t), e ? (n.__ == null && ((n.__ = !0), e.sub(K)), e.props.value) : t.__;
    },
    useDebugValue: function (t, e) {
      j.useDebugValue && j.useDebugValue(e ? e(t) : t);
    },
    version: "16.8.0",
    Children: po,
    render: kr,
    hydrate: function (t, e, n) {
      return Or(t, e), typeof n == "function" && n(), t ? t.__c : null;
    },
    unmountComponentAtNode: function (t) {
      return !!t.__k && (rt(null, t), !0);
    },
    createPortal: Ir,
    createElement: ee,
    createContext: function (t, e) {
      var n = {
        __c: (e = "__cC" + pr++),
        __: t,
        Consumer: function (r, o) {
          return r.children(o);
        },
        Provider: function (r) {
          var o, i;
          return (
            this.getChildContext ||
              ((o = []),
              ((i = {})[e] = this),
              (this.getChildContext = function () {
                return i;
              }),
              (this.shouldComponentUpdate = function (u) {
                this.props.value !== u.value && o.some(Ut);
              }),
              (this.sub = function (u) {
                o.push(u);
                var s = u.componentWillUnmount;
                u.componentWillUnmount = function () {
                  o.splice(o.indexOf(u), 1), s && s.call(u);
                };
              })),
            r.children
          );
        },
      };
      return (n.Provider.__ = n.Consumer.contextType = n);
    },
    createFactory: function (t) {
      return ee.bind(null, t);
    },
    cloneElement: function (t) {
      return Dn(t) ? so.apply(null, arguments) : t;
    },
    createRef: function () {
      return { current: null };
    },
    Fragment: pe,
    isValidElement: Dn,
    findDOMNode: function (t) {
      return (t && (t.base || (t.nodeType === 1 && t))) || null;
    },
    Component: te,
    PureComponent: Kt,
    memo: function (t, e) {
      function n(o) {
        var i = this.props.ref,
          u = i == o.ref;
        return !u && i && (i.call ? i(null) : (i.current = null)), e ? !e(this.props, o) || !u : Vt(this.props, o);
      }
      function r(o) {
        return (this.shouldComponentUpdate = n), ee(t, o);
      }
      return (
        (r.displayName = "Memo(" + (t.displayName || t.name) + ")"),
        (r.prototype.isReactComponent = !0),
        (r.__f = !0),
        r
      );
    },
    forwardRef: function (t) {
      function e(n, r) {
        var o = jr({}, n);
        return delete o.ref, t(o, (r = n.ref || r) && (D(r) != "object" || "current" in r) ? r : null);
      }
      return (
        (e.$$typeof = mo),
        (e.render = e),
        (e.prototype.isReactComponent = e.__f = !0),
        (e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")"),
        e
      );
    },
    unstable_batchedUpdates: function (t, e) {
      return t(e);
    },
    StrictMode: pe,
    Suspense: St,
    SuspenseList: Le,
    lazy: function (t) {
      var e, n, r;
      function o(i) {
        if (
          (e ||
            (e = t()).then(
              function (u) {
                n = u.default || u;
              },
              function (u) {
                r = u;
              },
            ),
          r)
        )
          throw r;
        if (!n) throw e;
        return ee(n, i);
      }
      return (o.displayName = "Lazy"), (o.__f = !0), o;
    },
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: wo,
  },
  Eo = ["facetName", "facetQuery"];
function kn(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Fe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? kn(Object(n), !0).forEach(function (r) {
          jo(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : kn(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
function jo(t, e, n) {
  return (
    e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t
  );
}
function B() {
  return (
    (B =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }),
    B.apply(this, arguments)
  );
}
function de(t, e) {
  if (t == null) return {};
  var n,
    r,
    o = (function (u, s) {
      if (u == null) return {};
      var l,
        f,
        a = {},
        h = Object.keys(u);
      for (f = 0; f < h.length; f++) (l = h[f]), s.indexOf(l) >= 0 || (a[l] = u[l]);
      return a;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (r = 0; r < i.length; r++)
      (n = i[r]), e.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]));
  }
  return o;
}
function be(t, e) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(t) ||
    (function (n, r) {
      var o = n == null ? null : (typeof Symbol < "u" && n[Symbol.iterator]) || n["@@iterator"];
      if (o != null) {
        var i,
          u,
          s = [],
          l = !0,
          f = !1;
        try {
          for (o = o.call(n); !(l = (i = o.next()).done) && (s.push(i.value), !r || s.length !== r); l = !0);
        } catch (a) {
          (f = !0), (u = a);
        } finally {
          try {
            l || o.return == null || o.return();
          } finally {
            if (f) throw u;
          }
        }
        return s;
      }
    })(t, e) ||
    Ar(t, e) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Ar(t, e) {
  if (t) {
    if (typeof t == "string") return Wt(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    return (
      n === "Object" && t.constructor && (n = t.constructor.name),
      n === "Map" || n === "Set"
        ? Array.from(t)
        : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Wt(t, e)
          : void 0
    );
  }
}
function Wt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function Po() {
  return c.createElement(
    "svg",
    { width: "15", height: "15", className: "DocSearch-Control-Key-Icon" },
    c.createElement("path", {
      d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",
      strokeWidth: "1.2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "square",
    }),
  );
}
function xr() {
  return c.createElement(
    "svg",
    { width: "20", height: "20", className: "DocSearch-Search-Icon", viewBox: "0 0 20 20", "aria-hidden": "true" },
    c.createElement("path", {
      d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
      stroke: "currentColor",
      fill: "none",
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  );
}
var Io = ["translations"],
  Do = c.forwardRef(function (t, e) {
    var n = t.translations,
      r = n === void 0 ? {} : n,
      o = de(t, Io),
      i = r.buttonText,
      u = i === void 0 ? "Search" : i,
      s = r.buttonAriaLabel,
      l = s === void 0 ? "Search" : s,
      f = be(Yt(null), 2),
      a = f[0],
      h = f[1];
    return (
      Gt(function () {
        typeof navigator < "u" && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? h("⌘") : h("Ctrl"));
      }, []),
      c.createElement(
        "button",
        B({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": l }, o, { ref: e }),
        c.createElement(
          "span",
          { className: "DocSearch-Button-Container" },
          c.createElement(xr, null),
          c.createElement("span", { className: "DocSearch-Button-Placeholder" }, u),
        ),
        c.createElement(
          "span",
          { className: "DocSearch-Button-Keys" },
          a !== null &&
            c.createElement(
              c.Fragment,
              null,
              c.createElement(
                Cn,
                { reactsToKey: a === "Ctrl" ? "Ctrl" : "Meta" },
                a === "Ctrl" ? c.createElement(Po, null) : a,
              ),
              c.createElement(Cn, { reactsToKey: "k" }, "K"),
            ),
        ),
      )
    );
  });
function Cn(t) {
  var e = t.reactsToKey,
    n = t.children,
    r = be(Yt(!1), 2),
    o = r[0],
    i = r[1];
  return (
    Gt(
      function () {
        if (e)
          return (
            window.addEventListener("keydown", u),
            window.addEventListener("keyup", s),
            function () {
              window.removeEventListener("keydown", u), window.removeEventListener("keyup", s);
            }
          );
        function u(l) {
          l.key === e && i(!0);
        }
        function s(l) {
          (l.key !== e && l.key !== "Meta") || i(!1);
        }
      },
      [e],
    ),
    c.createElement(
      "kbd",
      { className: o ? "DocSearch-Button-Key DocSearch-Button-Key--pressed" : "DocSearch-Button-Key" },
      n,
    )
  );
}
function Nr(t, e) {
  var n = void 0;
  return function () {
    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
    n && clearTimeout(n),
      (n = setTimeout(function () {
        return t.apply(void 0, o);
      }, e));
  };
}
function ot(t) {
  return t.reduce(function (e, n) {
    return e.concat(n);
  }, []);
}
var ko = 0;
function zt(t) {
  return t.collections.length === 0
    ? 0
    : t.collections.reduce(function (e, n) {
        return e + n.items.length;
      }, 0);
}
function An(t) {
  return t !== Object(t);
}
function Tr(t, e) {
  if (t === e) return !0;
  if (An(t) || An(e) || typeof t == "function" || typeof e == "function") return t === e;
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var o = r[n];
    if (!(o in e) || !Tr(t[o], e[o])) return !1;
  }
  return !0;
}
var Ot = function () {},
  Co = [{ segment: "autocomplete-core", version: "1.9.3" }];
function xn(t) {
  var e = t.item,
    n = t.items;
  return {
    index: e.__autocomplete_indexName,
    items: [e],
    positions: [
      1 +
        n.findIndex(function (r) {
          return r.objectID === e.objectID;
        }),
    ],
    queryID: e.__autocomplete_queryID,
    algoliaSource: ["autocomplete"],
  };
}
function Nn(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var Ao = ["items"],
  xo = ["items"];
function Be(t) {
  return (
    (Be =
      typeof Symbol == "function" && D(Symbol.iterator) == "symbol"
        ? function (e) {
            return D(e);
          }
        : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype
              ? "symbol"
              : D(e);
          }),
    Be(t)
  );
}
function st(t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return At(e);
    })(t) ||
    (function (e) {
      if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
    })(t) ||
    (function (e, n) {
      if (e) {
        if (typeof e == "string") return At(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return (
          r === "Object" && e.constructor && (r = e.constructor.name),
          r === "Map" || r === "Set"
            ? Array.from(e)
            : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? At(e, n)
              : void 0
        );
      }
    })(t) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function At(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function Rr(t, e) {
  if (t == null) return {};
  var n,
    r,
    o = (function (u, s) {
      if (u == null) return {};
      var l,
        f,
        a = {},
        h = Object.keys(u);
      for (f = 0; f < h.length; f++) (l = h[f]), s.indexOf(l) >= 0 || (a[l] = u[l]);
      return a;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (r = 0; r < i.length; r++)
      (n = i[r]), e.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]));
  }
  return o;
}
function Tn(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ae(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Tn(Object(n), !0).forEach(function (r) {
          No(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Tn(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
function No(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i, u) {
        if (Be(i) !== "object" || i === null) return i;
        var s = i[Symbol.toPrimitive];
        if (s !== void 0) {
          var l = s.call(i, "string");
          if (Be(l) !== "object") return l;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(i);
      })(r);
      return Be(o) === "symbol" ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = n),
    t
  );
}
function To(t) {
  for (
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 20, n = [], r = 0;
    r < t.objectIDs.length;
    r += e
  )
    n.push(Ae(Ae({}, t), {}, { objectIDs: t.objectIDs.slice(r, r + e) }));
  return n;
}
function ft(t) {
  return t.map(function (e) {
    var n = e.items,
      r = Rr(e, Ao);
    return Ae(
      Ae({}, r),
      {},
      {
        objectIDs:
          n?.map(function (o) {
            return o.objectID;
          }) || r.objectIDs,
      },
    );
  });
}
function Ro(t) {
  var e = t.items.reduce(function (n, r) {
    var o;
    return (
      (n[r.__autocomplete_indexName] = ((o = n[r.__autocomplete_indexName]) !== null && o !== void 0 ? o : []).concat(
        r,
      )),
      n
    );
  }, {});
  return Object.keys(e).map(function (n) {
    return { index: n, items: e[n], algoliaSource: ["autocomplete"] };
  });
}
function xt(t) {
  return t.objectID && t.__autocomplete_indexName && t.__autocomplete_queryID;
}
function Ve(t) {
  return (
    (Ve =
      typeof Symbol == "function" && D(Symbol.iterator) == "symbol"
        ? function (e) {
            return D(e);
          }
        : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype
              ? "symbol"
              : D(e);
          }),
    Ve(t)
  );
}
function Oe(t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return Nt(e);
    })(t) ||
    (function (e) {
      if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
    })(t) ||
    (function (e, n) {
      if (e) {
        if (typeof e == "string") return Nt(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return (
          r === "Object" && e.constructor && (r = e.constructor.name),
          r === "Map" || r === "Set"
            ? Array.from(e)
            : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? Nt(e, n)
              : void 0
        );
      }
    })(t) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Nt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function Rn(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function me(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Rn(Object(n), !0).forEach(function (r) {
          qo(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Rn(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
function qo(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i, u) {
        if (Ve(i) !== "object" || i === null) return i;
        var s = i[Symbol.toPrimitive];
        if (s !== void 0) {
          var l = s.call(i, "string");
          if (Ve(l) !== "object") return l;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(i);
      })(r);
      return Ve(o) === "symbol" ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = n),
    t
  );
}
var Lo = "https://cdn.jsdelivr.net/npm/search-insights@".concat("2.6.0", "/dist/search-insights.min.js"),
  Mo = Nr(function (t) {
    var e = t.onItemsChange,
      n = t.items,
      r = t.insights,
      o = t.state;
    e({
      insights: r,
      insightsEvents: Ro({ items: n }).map(function (i) {
        return me({ eventName: "Items Viewed" }, i);
      }),
      state: o,
    });
  }, 400);
function Ho(t) {
  var e = (function (a) {
      return me(
        {
          onItemsChange: function (h) {
            var y = h.insights,
              v = h.insightsEvents;
            y.viewedObjectIDs.apply(
              y,
              Oe(
                v.map(function (d) {
                  return me(
                    me({}, d),
                    {},
                    { algoliaSource: [].concat(Oe(d.algoliaSource || []), ["autocomplete-internal"]) },
                  );
                }),
              ),
            );
          },
          onSelect: function (h) {
            var y = h.insights,
              v = h.insightsEvents;
            y.clickedObjectIDsAfterSearch.apply(
              y,
              Oe(
                v.map(function (d) {
                  return me(
                    me({}, d),
                    {},
                    { algoliaSource: [].concat(Oe(d.algoliaSource || []), ["autocomplete-internal"]) },
                  );
                }),
              ),
            );
          },
          onActive: Ot,
        },
        a,
      );
    })(t),
    n = e.insightsClient,
    r = e.onItemsChange,
    o = e.onSelect,
    i = e.onActive,
    u = n;
  n ||
    (typeof window < "u" &&
      (function (a) {
        var h = window,
          y = h.AlgoliaAnalyticsObject || "aa";
        typeof y == "string" && (u = h[y]),
          u ||
            ((h.AlgoliaAnalyticsObject = y),
            h[y] ||
              (h[y] = function () {
                h[y].queue || (h[y].queue = []);
                for (var v = arguments.length, d = new Array(v), p = 0; p < v; p++) d[p] = arguments[p];
                h[y].queue.push(d);
              }),
            (h[y].version = "2.6.0"),
            (u = h[y]),
            (function (v) {
              var d =
                "[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";
              try {
                var p = v.document.createElement("script");
                (p.async = !0),
                  (p.src = Lo),
                  (p.onerror = function () {
                    console.error(d);
                  }),
                  document.body.appendChild(p);
              } catch {
                console.error(d);
              }
            })(h));
      })());
  var s = (function (a) {
      var h,
        y,
        v,
        d =
          ((h = (function (m, g) {
            return (
              (function (_) {
                if (Array.isArray(_)) return _;
              })(m) ||
              (function (_, b) {
                var S = _ == null ? null : (typeof Symbol < "u" && _[Symbol.iterator]) || _["@@iterator"];
                if (S != null) {
                  var O,
                    E,
                    k,
                    P,
                    I = [],
                    w = !0,
                    T = !1;
                  try {
                    for (
                      k = (S = S.call(_)).next;
                      !(w = (O = k.call(S)).done) && (I.push(O.value), I.length !== 2);
                      w = !0
                    );
                  } catch (M) {
                    (T = !0), (E = M);
                  } finally {
                    try {
                      if (!w && S.return != null && ((P = S.return()), Object(P) !== P)) return;
                    } finally {
                      if (T) throw E;
                    }
                  }
                  return I;
                }
              })(m) ||
              (function (_, b) {
                if (_) {
                  if (typeof _ == "string") return Nn(_, 2);
                  var S = Object.prototype.toString.call(_).slice(8, -1);
                  return (
                    S === "Object" && _.constructor && (S = _.constructor.name),
                    S === "Map" || S === "Set"
                      ? Array.from(_)
                      : S === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)
                        ? Nn(_, 2)
                        : void 0
                  );
                }
              })(m) ||
              (function () {
                throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              })()
            );
          })((a.version || "").split(".").map(Number))),
          (y = h[0]),
          (v = h[1]),
          y >= 3 || (y === 2 && v >= 4) || (y === 1 && v >= 10));
      function p(m, g, _) {
        if (d && _ !== void 0) {
          var b = _[0].__autocomplete_algoliaCredentials,
            S = { "X-Algolia-Application-Id": b.appId, "X-Algolia-API-Key": b.apiKey };
          a.apply(void 0, [m].concat(st(g), [{ headers: S }]));
        } else a.apply(void 0, [m].concat(st(g)));
      }
      return {
        init: function (m, g) {
          a("init", { appId: m, apiKey: g });
        },
        setUserToken: function (m) {
          a("setUserToken", m);
        },
        clickedObjectIDsAfterSearch: function () {
          for (var m = arguments.length, g = new Array(m), _ = 0; _ < m; _++) g[_] = arguments[_];
          g.length > 0 && p("clickedObjectIDsAfterSearch", ft(g), g[0].items);
        },
        clickedObjectIDs: function () {
          for (var m = arguments.length, g = new Array(m), _ = 0; _ < m; _++) g[_] = arguments[_];
          g.length > 0 && p("clickedObjectIDs", ft(g), g[0].items);
        },
        clickedFilters: function () {
          for (var m = arguments.length, g = new Array(m), _ = 0; _ < m; _++) g[_] = arguments[_];
          g.length > 0 && a.apply(void 0, ["clickedFilters"].concat(g));
        },
        convertedObjectIDsAfterSearch: function () {
          for (var m = arguments.length, g = new Array(m), _ = 0; _ < m; _++) g[_] = arguments[_];
          g.length > 0 && p("convertedObjectIDsAfterSearch", ft(g), g[0].items);
        },
        convertedObjectIDs: function () {
          for (var m = arguments.length, g = new Array(m), _ = 0; _ < m; _++) g[_] = arguments[_];
          g.length > 0 && p("convertedObjectIDs", ft(g), g[0].items);
        },
        convertedFilters: function () {
          for (var m = arguments.length, g = new Array(m), _ = 0; _ < m; _++) g[_] = arguments[_];
          g.length > 0 && a.apply(void 0, ["convertedFilters"].concat(g));
        },
        viewedObjectIDs: function () {
          for (var m = arguments.length, g = new Array(m), _ = 0; _ < m; _++) g[_] = arguments[_];
          g.length > 0 &&
            g
              .reduce(function (b, S) {
                var O = S.items,
                  E = Rr(S, xo);
                return [].concat(
                  st(b),
                  st(
                    To(
                      Ae(
                        Ae({}, E),
                        {},
                        {
                          objectIDs:
                            O?.map(function (k) {
                              return k.objectID;
                            }) || E.objectIDs,
                        },
                      ),
                    ).map(function (k) {
                      return { items: O, payload: k };
                    }),
                  ),
                );
              }, [])
              .forEach(function (b) {
                var S = b.items;
                return p("viewedObjectIDs", [b.payload], S);
              });
        },
        viewedFilters: function () {
          for (var m = arguments.length, g = new Array(m), _ = 0; _ < m; _++) g[_] = arguments[_];
          g.length > 0 && a.apply(void 0, ["viewedFilters"].concat(g));
        },
      };
    })(u),
    l = { current: [] },
    f = Nr(function (a) {
      var h = a.state;
      if (h.isOpen) {
        var y = h.collections
          .reduce(function (v, d) {
            return [].concat(Oe(v), Oe(d.items));
          }, [])
          .filter(xt);
        Tr(
          l.current.map(function (v) {
            return v.objectID;
          }),
          y.map(function (v) {
            return v.objectID;
          }),
        ) || ((l.current = y), y.length > 0 && Mo({ onItemsChange: r, items: y, insights: s, state: h }));
      }
    }, 0);
  return {
    name: "aa.algoliaInsightsPlugin",
    subscribe: function (a) {
      var h = a.setContext,
        y = a.onSelect,
        v = a.onActive;
      u("addAlgoliaAgent", "insights-plugin"),
        h({ algoliaInsightsPlugin: { __algoliaSearchParameters: { clickAnalytics: !0 }, insights: s } }),
        y(function (d) {
          var p = d.item,
            m = d.state,
            g = d.event;
          xt(p) &&
            o({
              state: m,
              event: g,
              insights: s,
              item: p,
              insightsEvents: [me({ eventName: "Item Selected" }, xn({ item: p, items: l.current }))],
            });
        }),
        v(function (d) {
          var p = d.item,
            m = d.state,
            g = d.event;
          xt(p) &&
            i({
              state: m,
              event: g,
              insights: s,
              item: p,
              insightsEvents: [me({ eventName: "Item Active" }, xn({ item: p, items: l.current }))],
            });
        });
    },
    onStateChange: function (a) {
      var h = a.state;
      f({ state: h });
    },
    __autocomplete_pluginOptions: t,
  };
}
function wt(t, e) {
  var n = e;
  return {
    then: function (r, o) {
      return wt(t.then(mt(r, n, t), mt(o, n, t)), n);
    },
    catch: function (r) {
      return wt(t.catch(mt(r, n, t)), n);
    },
    finally: function (r) {
      return (
        r && n.onCancelList.push(r),
        wt(
          t.finally(
            mt(
              r &&
                function () {
                  return (n.onCancelList = []), r();
                },
              n,
              t,
            ),
          ),
          n,
        )
      );
    },
    cancel: function () {
      n.isCanceled = !0;
      var r = n.onCancelList;
      (n.onCancelList = []),
        r.forEach(function (o) {
          o();
        });
    },
    isCanceled: function () {
      return n.isCanceled === !0;
    },
  };
}
function qn(t) {
  return wt(t, { isCanceled: !1, onCancelList: [] });
}
function mt(t, e, n) {
  return t
    ? function (r) {
        return e.isCanceled ? r : t(r);
      }
    : n;
}
function Ln(t, e, n, r) {
  if (!n) return null;
  if (t < 0 && (e === null || (r !== null && e === 0))) return n + t;
  var o = (e === null ? -1 : e) + t;
  return o <= -1 || o >= n ? (r === null ? null : 0) : o;
}
function Mn(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Hn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Mn(Object(n), !0).forEach(function (r) {
          Uo(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Mn(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
function Uo(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i, u) {
        if (Ke(i) !== "object" || i === null) return i;
        var s = i[Symbol.toPrimitive];
        if (s !== void 0) {
          var l = s.call(i, "string");
          if (Ke(l) !== "object") return l;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(i);
      })(r);
      return Ke(o) === "symbol" ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = n),
    t
  );
}
function Ke(t) {
  return (
    (Ke =
      typeof Symbol == "function" && D(Symbol.iterator) == "symbol"
        ? function (e) {
            return D(e);
          }
        : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype
              ? "symbol"
              : D(e);
          }),
    Ke(t)
  );
}
function De(t) {
  var e = (function (o) {
    var i = o.collections
      .map(function (u) {
        return u.items.length;
      })
      .reduce(function (u, s, l) {
        var f = (u[l - 1] || 0) + s;
        return u.push(f), u;
      }, [])
      .reduce(function (u, s) {
        return s <= o.activeItemId ? u + 1 : u;
      }, 0);
    return o.collections[i];
  })(t);
  if (!e) return null;
  var n =
      e.items[
        (function (o) {
          for (var i = o.state, u = o.collection, s = !1, l = 0, f = 0; s === !1; ) {
            var a = i.collections[l];
            if (a === u) {
              s = !0;
              break;
            }
            (f += a.items.length), l++;
          }
          return i.activeItemId - f;
        })({ state: t, collection: e })
      ],
    r = e.source;
  return {
    item: n,
    itemInputValue: r.getItemInputValue({ item: n, state: t }),
    itemUrl: r.getItemUrl({ item: n, state: t }),
    source: r,
  };
}
var Fo = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
function We(t) {
  return (
    (We =
      typeof Symbol == "function" && D(Symbol.iterator) == "symbol"
        ? function (e) {
            return D(e);
          }
        : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype
              ? "symbol"
              : D(e);
          }),
    We(t)
  );
}
function Un(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Bo(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i, u) {
        if (We(i) !== "object" || i === null) return i;
        var s = i[Symbol.toPrimitive];
        if (s !== void 0) {
          var l = s.call(i, "string");
          if (We(l) !== "object") return l;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(i);
      })(r);
      return We(o) === "symbol" ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = n),
    t
  );
}
function ze(t) {
  return (
    (ze =
      typeof Symbol == "function" && D(Symbol.iterator) == "symbol"
        ? function (e) {
            return D(e);
          }
        : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype
              ? "symbol"
              : D(e);
          }),
    ze(t)
  );
}
function Fn(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function pt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Fn(Object(n), !0).forEach(function (r) {
          Vo(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Fn(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
function Vo(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i, u) {
        if (ze(i) !== "object" || i === null) return i;
        var s = i[Symbol.toPrimitive];
        if (s !== void 0) {
          var l = s.call(i, "string");
          if (ze(l) !== "object") return l;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(i);
      })(r);
      return ze(o) === "symbol" ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = n),
    t
  );
}
function Je(t) {
  return (
    (Je =
      typeof Symbol == "function" && D(Symbol.iterator) == "symbol"
        ? function (e) {
            return D(e);
          }
        : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype
              ? "symbol"
              : D(e);
          }),
    Je(t)
  );
}
function Tt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function Bn(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function we(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Bn(Object(n), !0).forEach(function (r) {
          Ko(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Bn(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
function Ko(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i, u) {
        if (Je(i) !== "object" || i === null) return i;
        var s = i[Symbol.toPrimitive];
        if (s !== void 0) {
          var l = s.call(i, "string");
          if (Je(l) !== "object") return l;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(i);
      })(r);
      return Je(o) === "symbol" ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = n),
    t
  );
}
function $e(t) {
  return (
    ($e =
      typeof Symbol == "function" && D(Symbol.iterator) == "symbol"
        ? function (e) {
            return D(e);
          }
        : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype
              ? "symbol"
              : D(e);
          }),
    $e(t)
  );
}
function Vn(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function dt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Vn(Object(n), !0).forEach(function (r) {
          qr(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Vn(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
function qr(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i, u) {
        if ($e(i) !== "object" || i === null) return i;
        var s = i[Symbol.toPrimitive];
        if (s !== void 0) {
          var l = s.call(i, "string");
          if ($e(l) !== "object") return l;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(i);
      })(r);
      return $e(o) === "symbol" ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = n),
    t
  );
}
function Ze(t) {
  return (
    (Ze =
      typeof Symbol == "function" && D(Symbol.iterator) == "symbol"
        ? function (e) {
            return D(e);
          }
        : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype
              ? "symbol"
              : D(e);
          }),
    Ze(t)
  );
}
function Kn(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ee(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Kn(Object(n), !0).forEach(function (r) {
          Wo(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Kn(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
function Wo(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i, u) {
        if (Ze(i) !== "object" || i === null) return i;
        var s = i[Symbol.toPrimitive];
        if (s !== void 0) {
          var l = s.call(i, "string");
          if (Ze(l) !== "object") return l;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(i);
      })(r);
      return Ze(o) === "symbol" ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = n),
    t
  );
}
function Lr(t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return Rt(e);
    })(t) ||
    (function (e) {
      if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
    })(t) ||
    (function (e, n) {
      if (e) {
        if (typeof e == "string") return Rt(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return (
          r === "Object" && e.constructor && (r = e.constructor.name),
          r === "Map" || r === "Set"
            ? Array.from(e)
            : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? Rt(e, n)
              : void 0
        );
      }
    })(t) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Rt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function vt(t) {
  return !!t.execute;
}
function zo(t) {
  var e = t
    .reduce(function (n, r) {
      if (!vt(r)) return n.push(r), n;
      var o = r.searchClient,
        i = r.execute,
        u = r.requesterId,
        s = r.requests,
        l = n.find(function (h) {
          return vt(r) && vt(h) && h.searchClient === o && !!u && h.requesterId === u;
        });
      if (l) {
        var f;
        (f = l.items).push.apply(f, Lr(s));
      } else {
        var a = { execute: i, requesterId: u, items: s, searchClient: o };
        n.push(a);
      }
      return n;
    }, [])
    .map(function (n) {
      if (!vt(n)) return Promise.resolve(n);
      var r = n,
        o = r.execute,
        i = r.items;
      return o({ searchClient: r.searchClient, requests: i });
    });
  return Promise.all(e).then(function (n) {
    return ot(n);
  });
}
function Qe(t) {
  return (
    (Qe =
      typeof Symbol == "function" && D(Symbol.iterator) == "symbol"
        ? function (e) {
            return D(e);
          }
        : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype
              ? "symbol"
              : D(e);
          }),
    Qe(t)
  );
}
var Jo = ["event", "nextState", "props", "query", "refresh", "store"];
function Wn(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Re(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Wn(Object(n), !0).forEach(function (r) {
          $o(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Wn(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
function $o(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i, u) {
        if (Qe(i) !== "object" || i === null) return i;
        var s = i[Symbol.toPrimitive];
        if (s !== void 0) {
          var l = s.call(i, "string");
          if (Qe(l) !== "object") return l;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(i);
      })(r);
      return Qe(o) === "symbol" ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = n),
    t
  );
}
var zn,
  qt,
  ht,
  qe = null,
  Jn =
    ((zn = -1),
    (qt = -1),
    (ht = void 0),
    function (t) {
      var e = ++zn;
      return Promise.resolve(t).then(function (n) {
        return ht && e < qt ? ht : ((qt = e), (ht = n), n);
      });
    });
function je(t) {
  var e = t.event,
    n = t.nextState,
    r = n === void 0 ? {} : n,
    o = t.props,
    i = t.query,
    u = t.refresh,
    s = t.store,
    l = (function (_, b) {
      if (_ == null) return {};
      var S,
        O,
        E = (function (P, I) {
          if (P == null) return {};
          var w,
            T,
            M = {},
            C = Object.keys(P);
          for (T = 0; T < C.length; T++) (w = C[T]), I.indexOf(w) >= 0 || (M[w] = P[w]);
          return M;
        })(_, b);
      if (Object.getOwnPropertySymbols) {
        var k = Object.getOwnPropertySymbols(_);
        for (O = 0; O < k.length; O++)
          (S = k[O]), b.indexOf(S) >= 0 || (Object.prototype.propertyIsEnumerable.call(_, S) && (E[S] = _[S]));
      }
      return E;
    })(t, Jo);
  qe && o.environment.clearTimeout(qe);
  var f = l.setCollections,
    a = l.setIsOpen,
    h = l.setQuery,
    y = l.setActiveItemId,
    v = l.setStatus;
  if ((h(i), y(o.defaultActiveItemId), !i && o.openOnFocus === !1)) {
    var d,
      p = s.getState().collections.map(function (_) {
        return Re(Re({}, _), {}, { items: [] });
      });
    v("idle"), f(p), a((d = r.isOpen) !== null && d !== void 0 ? d : o.shouldPanelOpen({ state: s.getState() }));
    var m = qn(
      Jn(p).then(function () {
        return Promise.resolve();
      }),
    );
    return s.pendingRequests.add(m);
  }
  v("loading"),
    (qe = o.environment.setTimeout(function () {
      v("stalled");
    }, o.stallThreshold));
  var g = qn(
    Jn(
      o.getSources(Re({ query: i, refresh: u, state: s.getState() }, l)).then(function (_) {
        return Promise.all(
          _.map(function (b) {
            return Promise.resolve(b.getItems(Re({ query: i, refresh: u, state: s.getState() }, l))).then(function (S) {
              return (function (O, E, k) {
                if (((I = O), !!I?.execute)) {
                  var P =
                    O.requesterId === "algolia"
                      ? Object.assign.apply(
                          Object,
                          [{}].concat(
                            Lr(
                              Object.keys(k.context).map(function (w) {
                                var T;
                                return (T = k.context[w]) === null || T === void 0
                                  ? void 0
                                  : T.__algoliaSearchParameters;
                              }),
                            ),
                          ),
                        )
                      : {};
                  return Ee(
                    Ee({}, O),
                    {},
                    {
                      requests: O.queries.map(function (w) {
                        return {
                          query:
                            O.requesterId === "algolia" ? Ee(Ee({}, w), {}, { params: Ee(Ee({}, P), w.params) }) : w,
                          sourceId: E,
                          transformResponse: O.transformResponse,
                        };
                      }),
                    },
                  );
                }
                var I;
                return { items: O, sourceId: E };
              })(S, b.sourceId, s.getState());
            });
          }),
        )
          .then(zo)
          .then(function (b) {
            return (function (S, O, E) {
              return O.map(function (k) {
                var P,
                  I = S.filter(function (C) {
                    return C.sourceId === k.sourceId;
                  }),
                  w = I.map(function (C) {
                    return C.items;
                  }),
                  T = I[0].transformResponse,
                  M = T
                    ? T({
                        results: (P = w),
                        hits: P.map(function (C) {
                          return C.hits;
                        }).filter(Boolean),
                        facetHits: P.map(function (C) {
                          var z;
                          return (z = C.facetHits) === null || z === void 0
                            ? void 0
                            : z.map(function (ae) {
                                return {
                                  label: ae.value,
                                  count: ae.count,
                                  _highlightResult: { label: { value: ae.highlighted } },
                                };
                              });
                        }).filter(Boolean),
                      })
                    : w;
                return (
                  k.onResolve({ source: k, results: w, items: M, state: E.getState() }),
                  M.every(Boolean),
                  'The `getItems` function from source "'
                    .concat(k.sourceId, '" must return an array of items but returned ')
                    .concat(
                      JSON.stringify(void 0),
                      `.

Did you forget to return items?

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`,
                    ),
                  { source: k, items: M }
                );
              });
            })(b, _, s);
          })
          .then(function (b) {
            return (function (S) {
              var O = S.props,
                E = S.state,
                k = S.collections.reduce(function (I, w) {
                  return dt(
                    dt({}, I),
                    {},
                    qr(
                      {},
                      w.source.sourceId,
                      dt(
                        dt({}, w.source),
                        {},
                        {
                          getItems: function () {
                            return ot(w.items);
                          },
                        },
                      ),
                    ),
                  );
                }, {}),
                P = O.plugins.reduce(
                  function (I, w) {
                    return w.reshape ? w.reshape(I) : I;
                  },
                  { sourcesBySourceId: k, state: E },
                ).sourcesBySourceId;
              return ot(O.reshape({ sourcesBySourceId: P, sources: Object.values(P), state: E }))
                .filter(Boolean)
                .map(function (I) {
                  return { source: I, items: I.getItems() };
                });
            })({ collections: b, props: o, state: s.getState() });
          });
      }),
    ),
  )
    .then(function (_) {
      var b;
      v("idle"), f(_);
      var S = o.shouldPanelOpen({ state: s.getState() });
      a((b = r.isOpen) !== null && b !== void 0 ? b : (o.openOnFocus && !i && S) || S);
      var O = De(s.getState());
      if (s.getState().activeItemId !== null && O) {
        var E = O.item,
          k = O.itemInputValue,
          P = O.itemUrl,
          I = O.source;
        I.onActive(
          Re({ event: e, item: E, itemInputValue: k, itemUrl: P, refresh: u, source: I, state: s.getState() }, l),
        );
      }
    })
    .finally(function () {
      v("idle"), qe && o.environment.clearTimeout(qe);
    });
  return s.pendingRequests.add(g);
}
function Ye(t) {
  return (
    (Ye =
      typeof Symbol == "function" && D(Symbol.iterator) == "symbol"
        ? function (e) {
            return D(e);
          }
        : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype
              ? "symbol"
              : D(e);
          }),
    Ye(t)
  );
}
var Zo = ["event", "props", "refresh", "store"];
function $n(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ye(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? $n(Object(n), !0).forEach(function (r) {
          Qo(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : $n(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
function Qo(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i, u) {
        if (Ye(i) !== "object" || i === null) return i;
        var s = i[Symbol.toPrimitive];
        if (s !== void 0) {
          var l = s.call(i, "string");
          if (Ye(l) !== "object") return l;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(i);
      })(r);
      return Ye(o) === "symbol" ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = n),
    t
  );
}
function Ge(t) {
  return (
    (Ge =
      typeof Symbol == "function" && D(Symbol.iterator) == "symbol"
        ? function (e) {
            return D(e);
          }
        : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype
              ? "symbol"
              : D(e);
          }),
    Ge(t)
  );
}
var Yo = ["props", "refresh", "store"],
  Go = ["inputElement", "formElement", "panelElement"],
  Xo = ["inputElement"],
  ei = ["inputElement", "maxLength"],
  ti = ["sourceIndex"],
  ni = ["sourceIndex"],
  ri = ["item", "source", "sourceIndex"];
function Zn(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function F(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Zn(Object(n), !0).forEach(function (r) {
          oi(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Zn(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
function oi(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i, u) {
        if (Ge(i) !== "object" || i === null) return i;
        var s = i[Symbol.toPrimitive];
        if (s !== void 0) {
          var l = s.call(i, "string");
          if (Ge(l) !== "object") return l;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(i);
      })(r);
      return Ge(o) === "symbol" ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = n),
    t
  );
}
function ge(t, e) {
  if (t == null) return {};
  var n,
    r,
    o = (function (u, s) {
      if (u == null) return {};
      var l,
        f,
        a = {},
        h = Object.keys(u);
      for (f = 0; f < h.length; f++) (l = h[f]), s.indexOf(l) >= 0 || (a[l] = u[l]);
      return a;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (r = 0; r < i.length; r++)
      (n = i[r]), e.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]));
  }
  return o;
}
function Xe(t) {
  return (
    (Xe =
      typeof Symbol == "function" && D(Symbol.iterator) == "symbol"
        ? function (e) {
            return D(e);
          }
        : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype
              ? "symbol"
              : D(e);
          }),
    Xe(t)
  );
}
function Qn(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ii(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Qn(Object(n), !0).forEach(function (r) {
          Mr(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Qn(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
function Mr(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i, u) {
        if (Xe(i) !== "object" || i === null) return i;
        var s = i[Symbol.toPrimitive];
        if (s !== void 0) {
          var l = s.call(i, "string");
          if (Xe(l) !== "object") return l;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(i);
      })(r);
      return Xe(o) === "symbol" ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = n),
    t
  );
}
function ai(t) {
  var e,
    n,
    r,
    o,
    i = t.plugins,
    u = t.options,
    s =
      (e = (((n = u.__autocomplete_metadata) === null || n === void 0 ? void 0 : n.userAgents) || [])[0]) === null ||
      e === void 0
        ? void 0
        : e.segment,
    l = s
      ? Mr({}, s, Object.keys(((r = u.__autocomplete_metadata) === null || r === void 0 ? void 0 : r.options) || {}))
      : {};
  return {
    plugins: i.map(function (f) {
      return { name: f.name, options: Object.keys(f.__autocomplete_pluginOptions || []) };
    }),
    options: ii({ "autocomplete-core": Object.keys(u) }, l),
    ua: Co.concat(((o = u.__autocomplete_metadata) === null || o === void 0 ? void 0 : o.userAgents) || []),
  };
}
function Yn(t) {
  var e,
    n = t.state;
  return n.isOpen === !1 || n.activeItemId === null
    ? null
    : ((e = De(n)) === null || e === void 0 ? void 0 : e.itemInputValue) || null;
}
function et(t) {
  return (
    (et =
      typeof Symbol == "function" && D(Symbol.iterator) == "symbol"
        ? function (e) {
            return D(e);
          }
        : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype
              ? "symbol"
              : D(e);
          }),
    et(t)
  );
}
function Gn(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function x(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Gn(Object(n), !0).forEach(function (r) {
          ci(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Gn(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
function ci(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i, u) {
        if (et(i) !== "object" || i === null) return i;
        var s = i[Symbol.toPrimitive];
        if (s !== void 0) {
          var l = s.call(i, "string");
          if (et(l) !== "object") return l;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(i);
      })(r);
      return et(o) === "symbol" ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = n),
    t
  );
}
var ui = function (t, e) {
  switch (e.type) {
    case "setActiveItemId":
    case "mousemove":
      return x(x({}, t), {}, { activeItemId: e.payload });
    case "setQuery":
      return x(x({}, t), {}, { query: e.payload, completion: null });
    case "setCollections":
      return x(x({}, t), {}, { collections: e.payload });
    case "setIsOpen":
      return x(x({}, t), {}, { isOpen: e.payload });
    case "setStatus":
      return x(x({}, t), {}, { status: e.payload });
    case "setContext":
      return x(x({}, t), {}, { context: x(x({}, t.context), e.payload) });
    case "ArrowDown":
      var n = x(
        x({}, t),
        {},
        {
          activeItemId: e.payload.hasOwnProperty("nextActiveItemId")
            ? e.payload.nextActiveItemId
            : Ln(1, t.activeItemId, zt(t), e.props.defaultActiveItemId),
        },
      );
      return x(x({}, n), {}, { completion: Yn({ state: n }) });
    case "ArrowUp":
      var r = x(x({}, t), {}, { activeItemId: Ln(-1, t.activeItemId, zt(t), e.props.defaultActiveItemId) });
      return x(x({}, r), {}, { completion: Yn({ state: r }) });
    case "Escape":
      return t.isOpen
        ? x(x({}, t), {}, { activeItemId: null, isOpen: !1, completion: null })
        : x(x({}, t), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
    case "submit":
      return x(x({}, t), {}, { activeItemId: null, isOpen: !1, status: "idle" });
    case "reset":
      return x(
        x({}, t),
        {},
        { activeItemId: e.props.openOnFocus === !0 ? e.props.defaultActiveItemId : null, status: "idle", query: "" },
      );
    case "focus":
      return x(
        x({}, t),
        {},
        {
          activeItemId: e.props.defaultActiveItemId,
          isOpen: (e.props.openOnFocus || !!t.query) && e.props.shouldPanelOpen({ state: t }),
        },
      );
    case "blur":
      return e.props.debug ? t : x(x({}, t), {}, { isOpen: !1, activeItemId: null });
    case "mouseleave":
      return x(x({}, t), {}, { activeItemId: e.props.defaultActiveItemId });
    default:
      return "The reducer action ".concat(JSON.stringify(e.type), " is not supported."), t;
  }
};
function tt(t) {
  return (
    (tt =
      typeof Symbol == "function" && D(Symbol.iterator) == "symbol"
        ? function (e) {
            return D(e);
          }
        : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype
              ? "symbol"
              : D(e);
          }),
    tt(t)
  );
}
function Xn(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function _e(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Xn(Object(n), !0).forEach(function (r) {
          li(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Xn(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
function li(t, e, n) {
  return (
    (e = (function (r) {
      var o = (function (i, u) {
        if (tt(i) !== "object" || i === null) return i;
        var s = i[Symbol.toPrimitive];
        if (s !== void 0) {
          var l = s.call(i, "string");
          if (tt(l) !== "object") return l;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(i);
      })(r);
      return tt(o) === "symbol" ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = n),
    t
  );
}
function si(t) {
  var e = [],
    n = (function (l, f) {
      var a,
        h = typeof window < "u" ? window : {},
        y = l.plugins || [];
      return we(
        we(
          {
            debug: !1,
            openOnFocus: !1,
            placeholder: "",
            autoFocus: !1,
            defaultActiveItemId: null,
            stallThreshold: 300,
            insights: !1,
            environment: h,
            shouldPanelOpen: function (v) {
              return zt(v.state) > 0;
            },
            reshape: function (v) {
              return v.sources;
            },
          },
          l,
        ),
        {},
        {
          id: (a = l.id) !== null && a !== void 0 ? a : "autocomplete-".concat(ko++),
          plugins: y,
          initialState: we(
            {
              activeItemId: null,
              query: "",
              completion: null,
              collections: [],
              isOpen: !1,
              status: "idle",
              context: {},
            },
            l.initialState,
          ),
          onStateChange: function (v) {
            var d;
            (d = l.onStateChange) === null || d === void 0 || d.call(l, v),
              y.forEach(function (p) {
                var m;
                return (m = p.onStateChange) === null || m === void 0 ? void 0 : m.call(p, v);
              });
          },
          onSubmit: function (v) {
            var d;
            (d = l.onSubmit) === null || d === void 0 || d.call(l, v),
              y.forEach(function (p) {
                var m;
                return (m = p.onSubmit) === null || m === void 0 ? void 0 : m.call(p, v);
              });
          },
          onReset: function (v) {
            var d;
            (d = l.onReset) === null || d === void 0 || d.call(l, v),
              y.forEach(function (p) {
                var m;
                return (m = p.onReset) === null || m === void 0 ? void 0 : m.call(p, v);
              });
          },
          getSources: function (v) {
            return Promise.all(
              []
                .concat(
                  (function (d) {
                    return (
                      (function (p) {
                        if (Array.isArray(p)) return Tt(p);
                      })(d) ||
                      (function (p) {
                        if ((typeof Symbol < "u" && p[Symbol.iterator] != null) || p["@@iterator"] != null)
                          return Array.from(p);
                      })(d) ||
                      (function (p, m) {
                        if (p) {
                          if (typeof p == "string") return Tt(p, m);
                          var g = Object.prototype.toString.call(p).slice(8, -1);
                          return (
                            g === "Object" && p.constructor && (g = p.constructor.name),
                            g === "Map" || g === "Set"
                              ? Array.from(p)
                              : g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)
                                ? Tt(p, m)
                                : void 0
                          );
                        }
                      })(d) ||
                      (function () {
                        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                      })()
                    );
                  })(
                    y.map(function (d) {
                      return d.getSources;
                    }),
                  ),
                  [l.getSources],
                )
                .filter(Boolean)
                .map(function (d) {
                  return (function (p, m) {
                    var g = [];
                    return Promise.resolve(p(m)).then(function (_) {
                      return Promise.all(
                        _.filter(function (b) {
                          return !!b;
                        }).map(function (b) {
                          if ((b.sourceId, g.includes(b.sourceId)))
                            throw new Error(
                              "[Autocomplete] The `sourceId` ".concat(JSON.stringify(b.sourceId), " is not unique."),
                            );
                          g.push(b.sourceId);
                          var S = {
                            getItemInputValue: function (E) {
                              return E.state.query;
                            },
                            getItemUrl: function () {},
                            onSelect: function (E) {
                              (0, E.setIsOpen)(!1);
                            },
                            onActive: Ot,
                            onResolve: Ot,
                          };
                          Object.keys(S).forEach(function (E) {
                            S[E].__default = !0;
                          });
                          var O = Hn(Hn({}, S), b);
                          return Promise.resolve(O);
                        }),
                      );
                    });
                  })(d, v);
                }),
            )
              .then(function (d) {
                return ot(d);
              })
              .then(function (d) {
                return d.map(function (p) {
                  return we(
                    we({}, p),
                    {},
                    {
                      onSelect: function (m) {
                        p.onSelect(m),
                          f.forEach(function (g) {
                            var _;
                            return (_ = g.onSelect) === null || _ === void 0 ? void 0 : _.call(g, m);
                          });
                      },
                      onActive: function (m) {
                        p.onActive(m),
                          f.forEach(function (g) {
                            var _;
                            return (_ = g.onActive) === null || _ === void 0 ? void 0 : _.call(g, m);
                          });
                      },
                      onResolve: function (m) {
                        p.onResolve(m),
                          f.forEach(function (g) {
                            var _;
                            return (_ = g.onResolve) === null || _ === void 0 ? void 0 : _.call(g, m);
                          });
                      },
                    },
                  );
                });
              });
          },
          navigator: we(
            {
              navigate: function (v) {
                var d = v.itemUrl;
                h.location.assign(d);
              },
              navigateNewTab: function (v) {
                var d = v.itemUrl,
                  p = h.open(d, "_blank", "noopener");
                p?.focus();
              },
              navigateNewWindow: function (v) {
                var d = v.itemUrl;
                h.open(d, "_blank", "noopener");
              },
            },
            l.navigator,
          ),
        },
      );
    })(t, e),
    r = (function (l, f, a) {
      var h,
        y = f.initialState;
      return {
        getState: function () {
          return y;
        },
        dispatch: function (v, d) {
          var p = (function (m) {
            for (var g = 1; g < arguments.length; g++) {
              var _ = arguments[g] != null ? arguments[g] : {};
              g % 2
                ? Un(Object(_), !0).forEach(function (b) {
                    Bo(m, b, _[b]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(_))
                  : Un(Object(_)).forEach(function (b) {
                      Object.defineProperty(m, b, Object.getOwnPropertyDescriptor(_, b));
                    });
            }
            return m;
          })({}, y);
          (y = l(y, { type: v, props: f, payload: d })), a({ state: y, prevState: p });
        },
        pendingRequests:
          ((h = []),
          {
            add: function (v) {
              return (
                h.push(v),
                v.finally(function () {
                  h = h.filter(function (d) {
                    return d !== v;
                  });
                })
              );
            },
            cancelAll: function () {
              h.forEach(function (v) {
                return v.cancel();
              });
            },
            isEmpty: function () {
              return h.length === 0;
            },
          }),
      };
    })(ui, n, function (l) {
      var f = l.prevState,
        a = l.state;
      n.onStateChange(_e({ prevState: f, state: a, refresh: u, navigator: n.navigator }, o));
    }),
    o = (function (l) {
      var f = l.store;
      return {
        setActiveItemId: function (a) {
          f.dispatch("setActiveItemId", a);
        },
        setQuery: function (a) {
          f.dispatch("setQuery", a);
        },
        setCollections: function (a) {
          var h = 0,
            y = a.map(function (v) {
              return pt(
                pt({}, v),
                {},
                {
                  items: ot(v.items).map(function (d) {
                    return pt(pt({}, d), {}, { __autocomplete_id: h++ });
                  }),
                },
              );
            });
          f.dispatch("setCollections", y);
        },
        setIsOpen: function (a) {
          f.dispatch("setIsOpen", a);
        },
        setStatus: function (a) {
          f.dispatch("setStatus", a);
        },
        setContext: function (a) {
          f.dispatch("setContext", a);
        },
      };
    })({ store: r }),
    i = (function (l) {
      var f = l.props,
        a = l.refresh,
        h = l.store,
        y = ge(l, Yo),
        v = function (d, p) {
          return p !== void 0 ? "".concat(d, "-").concat(p) : d;
        };
      return {
        getEnvironmentProps: function (d) {
          var p = d.inputElement,
            m = d.formElement,
            g = d.panelElement;
          function _(b) {
            (!h.getState().isOpen && h.pendingRequests.isEmpty()) ||
              b.target === p ||
              ([m, g].some(function (S) {
                return (O = S) === (E = b.target) || O.contains(E);
                var O, E;
              }) === !1 &&
                (h.dispatch("blur", null), f.debug || h.pendingRequests.cancelAll()));
          }
          return F(
            {
              onTouchStart: _,
              onMouseDown: _,
              onTouchMove: function (b) {
                h.getState().isOpen !== !1 && p === f.environment.document.activeElement && b.target !== p && p.blur();
              },
            },
            ge(d, Go),
          );
        },
        getRootProps: function (d) {
          return F(
            {
              role: "combobox",
              "aria-expanded": h.getState().isOpen,
              "aria-haspopup": "listbox",
              "aria-owns": h.getState().isOpen ? "".concat(f.id, "-list") : void 0,
              "aria-labelledby": "".concat(f.id, "-label"),
            },
            d,
          );
        },
        getFormProps: function (d) {
          return (
            d.inputElement,
            F(
              {
                action: "",
                noValidate: !0,
                role: "search",
                onSubmit: function (p) {
                  var m;
                  p.preventDefault(),
                    f.onSubmit(F({ event: p, refresh: a, state: h.getState() }, y)),
                    h.dispatch("submit", null),
                    (m = d.inputElement) === null || m === void 0 || m.blur();
                },
                onReset: function (p) {
                  var m;
                  p.preventDefault(),
                    f.onReset(F({ event: p, refresh: a, state: h.getState() }, y)),
                    h.dispatch("reset", null),
                    (m = d.inputElement) === null || m === void 0 || m.focus();
                },
              },
              ge(d, Xo),
            )
          );
        },
        getLabelProps: function (d) {
          var p = d || {},
            m = p.sourceIndex,
            g = ge(p, ti);
          return F({ htmlFor: "".concat(v(f.id, m), "-input"), id: "".concat(v(f.id, m), "-label") }, g);
        },
        getInputProps: function (d) {
          var p;
          function m(P) {
            (f.openOnFocus || h.getState().query) &&
              je(
                F(
                  { event: P, props: f, query: h.getState().completion || h.getState().query, refresh: a, store: h },
                  y,
                ),
              ),
              h.dispatch("focus", null);
          }
          var g = d || {},
            _ = (g.inputElement, g.maxLength),
            b = _ === void 0 ? 512 : _,
            S = ge(g, ei),
            O = De(h.getState()),
            E = (function (P) {
              return !!(P && P.match(Fo));
            })(((p = f.environment.navigator) === null || p === void 0 ? void 0 : p.userAgent) || ""),
            k = O != null && O.itemUrl && !E ? "go" : "search";
          return F(
            {
              "aria-autocomplete": "both",
              "aria-activedescendant":
                h.getState().isOpen && h.getState().activeItemId !== null
                  ? "".concat(f.id, "-item-").concat(h.getState().activeItemId)
                  : void 0,
              "aria-controls": h.getState().isOpen ? "".concat(f.id, "-list") : void 0,
              "aria-labelledby": "".concat(f.id, "-label"),
              value: h.getState().completion || h.getState().query,
              id: "".concat(f.id, "-input"),
              autoComplete: "off",
              autoCorrect: "off",
              autoCapitalize: "off",
              enterKeyHint: k,
              spellCheck: "false",
              autoFocus: f.autoFocus,
              placeholder: f.placeholder,
              maxLength: b,
              type: "search",
              onChange: function (P) {
                je(F({ event: P, props: f, query: P.currentTarget.value.slice(0, b), refresh: a, store: h }, y));
              },
              onKeyDown: function (P) {
                (function (I) {
                  var w = I.event,
                    T = I.props,
                    M = I.refresh,
                    C = I.store,
                    z = (function (L, ne) {
                      if (L == null) return {};
                      var $,
                        V,
                        ce = (function (Se, ue) {
                          if (Se == null) return {};
                          var Y,
                            G,
                            ct = {},
                            le = Object.keys(Se);
                          for (G = 0; G < le.length; G++) (Y = le[G]), ue.indexOf(Y) >= 0 || (ct[Y] = Se[Y]);
                          return ct;
                        })(L, ne);
                      if (Object.getOwnPropertySymbols) {
                        var Q = Object.getOwnPropertySymbols(L);
                        for (V = 0; V < Q.length; V++)
                          ($ = Q[V]),
                            ne.indexOf($) >= 0 || (Object.prototype.propertyIsEnumerable.call(L, $) && (ce[$] = L[$]));
                      }
                      return ce;
                    })(I, Zo);
                  if (w.key === "ArrowUp" || w.key === "ArrowDown") {
                    var ae = function () {
                        var L = T.environment.document.getElementById(
                          "".concat(T.id, "-item-").concat(C.getState().activeItemId),
                        );
                        L && (L.scrollIntoViewIfNeeded ? L.scrollIntoViewIfNeeded(!1) : L.scrollIntoView(!1));
                      },
                      at = function () {
                        var L = De(C.getState());
                        if (C.getState().activeItemId !== null && L) {
                          var ne = L.item,
                            $ = L.itemInputValue,
                            V = L.itemUrl,
                            ce = L.source;
                          ce.onActive(
                            ye(
                              {
                                event: w,
                                item: ne,
                                itemInputValue: $,
                                itemUrl: V,
                                refresh: M,
                                source: ce,
                                state: C.getState(),
                              },
                              z,
                            ),
                          );
                        }
                      };
                    w.preventDefault(),
                      C.getState().isOpen === !1 && (T.openOnFocus || C.getState().query)
                        ? je(ye({ event: w, props: T, query: C.getState().query, refresh: M, store: C }, z)).then(
                            function () {
                              C.dispatch(w.key, { nextActiveItemId: T.defaultActiveItemId }), at(), setTimeout(ae, 0);
                            },
                          )
                        : (C.dispatch(w.key, {}), at(), ae());
                  } else if (w.key === "Escape")
                    w.preventDefault(), C.dispatch(w.key, null), C.pendingRequests.cancelAll();
                  else if (w.key === "Tab") C.dispatch("blur", null), C.pendingRequests.cancelAll();
                  else if (w.key === "Enter") {
                    if (
                      C.getState().activeItemId === null ||
                      C.getState().collections.every(function (L) {
                        return L.items.length === 0;
                      })
                    )
                      return void (T.debug || C.pendingRequests.cancelAll());
                    w.preventDefault();
                    var ve = De(C.getState()),
                      H = ve.item,
                      he = ve.itemInputValue,
                      J = ve.itemUrl,
                      Z = ve.source;
                    if (w.metaKey || w.ctrlKey)
                      J !== void 0 &&
                        (Z.onSelect(
                          ye(
                            {
                              event: w,
                              item: H,
                              itemInputValue: he,
                              itemUrl: J,
                              refresh: M,
                              source: Z,
                              state: C.getState(),
                            },
                            z,
                          ),
                        ),
                        T.navigator.navigateNewTab({ itemUrl: J, item: H, state: C.getState() }));
                    else if (w.shiftKey)
                      J !== void 0 &&
                        (Z.onSelect(
                          ye(
                            {
                              event: w,
                              item: H,
                              itemInputValue: he,
                              itemUrl: J,
                              refresh: M,
                              source: Z,
                              state: C.getState(),
                            },
                            z,
                          ),
                        ),
                        T.navigator.navigateNewWindow({ itemUrl: J, item: H, state: C.getState() }));
                    else if (!w.altKey) {
                      if (J !== void 0)
                        return (
                          Z.onSelect(
                            ye(
                              {
                                event: w,
                                item: H,
                                itemInputValue: he,
                                itemUrl: J,
                                refresh: M,
                                source: Z,
                                state: C.getState(),
                              },
                              z,
                            ),
                          ),
                          void T.navigator.navigate({ itemUrl: J, item: H, state: C.getState() })
                        );
                      je(
                        ye({ event: w, nextState: { isOpen: !1 }, props: T, query: he, refresh: M, store: C }, z),
                      ).then(function () {
                        Z.onSelect(
                          ye(
                            {
                              event: w,
                              item: H,
                              itemInputValue: he,
                              itemUrl: J,
                              refresh: M,
                              source: Z,
                              state: C.getState(),
                            },
                            z,
                          ),
                        );
                      });
                    }
                  }
                })(F({ event: P, props: f, refresh: a, store: h }, y));
              },
              onFocus: m,
              onBlur: Ot,
              onClick: function (P) {
                d.inputElement !== f.environment.document.activeElement || h.getState().isOpen || m(P);
              },
            },
            S,
          );
        },
        getPanelProps: function (d) {
          return F(
            {
              onMouseDown: function (p) {
                p.preventDefault();
              },
              onMouseLeave: function () {
                h.dispatch("mouseleave", null);
              },
            },
            d,
          );
        },
        getListProps: function (d) {
          var p = d || {},
            m = p.sourceIndex,
            g = ge(p, ni);
          return F(
            { role: "listbox", "aria-labelledby": "".concat(v(f.id, m), "-label"), id: "".concat(v(f.id, m), "-list") },
            g,
          );
        },
        getItemProps: function (d) {
          var p = d.item,
            m = d.source,
            g = d.sourceIndex,
            _ = ge(d, ri);
          return F(
            {
              id: "".concat(v(f.id, g), "-item-").concat(p.__autocomplete_id),
              role: "option",
              "aria-selected": h.getState().activeItemId === p.__autocomplete_id,
              onMouseMove: function (b) {
                if (p.__autocomplete_id !== h.getState().activeItemId) {
                  h.dispatch("mousemove", p.__autocomplete_id);
                  var S = De(h.getState());
                  if (h.getState().activeItemId !== null && S) {
                    var O = S.item,
                      E = S.itemInputValue,
                      k = S.itemUrl,
                      P = S.source;
                    P.onActive(
                      F(
                        {
                          event: b,
                          item: O,
                          itemInputValue: E,
                          itemUrl: k,
                          refresh: a,
                          source: P,
                          state: h.getState(),
                        },
                        y,
                      ),
                    );
                  }
                }
              },
              onMouseDown: function (b) {
                b.preventDefault();
              },
              onClick: function (b) {
                var S = m.getItemInputValue({ item: p, state: h.getState() }),
                  O = m.getItemUrl({ item: p, state: h.getState() });
                (O
                  ? Promise.resolve()
                  : je(F({ event: b, nextState: { isOpen: !1 }, props: f, query: S, refresh: a, store: h }, y))
                ).then(function () {
                  m.onSelect(
                    F(
                      { event: b, item: p, itemInputValue: S, itemUrl: O, refresh: a, source: m, state: h.getState() },
                      y,
                    ),
                  );
                });
              },
            },
            _,
          );
        },
      };
    })(_e({ props: n, refresh: u, store: r, navigator: n.navigator }, o));
  function u() {
    return je(
      _e(
        {
          event: new Event("input"),
          nextState: { isOpen: r.getState().isOpen },
          props: n,
          navigator: n.navigator,
          query: r.getState().query,
          refresh: u,
          store: r,
        },
        o,
      ),
    );
  }
  if (
    t.insights &&
    !n.plugins.some(function (l) {
      return l.name === "aa.algoliaInsightsPlugin";
    })
  ) {
    var s = typeof t.insights == "boolean" ? {} : t.insights;
    n.plugins.push(Ho(s));
  }
  return (
    n.plugins.forEach(function (l) {
      var f;
      return (f = l.subscribe) === null || f === void 0
        ? void 0
        : f.call(
            l,
            _e(
              _e({}, o),
              {},
              {
                navigator: n.navigator,
                refresh: u,
                onSelect: function (a) {
                  e.push({ onSelect: a });
                },
                onActive: function (a) {
                  e.push({ onActive: a });
                },
                onResolve: function (a) {
                  e.push({ onResolve: a });
                },
              },
            ),
          );
    }),
    (function (l) {
      var f,
        a,
        h = l.metadata,
        y = l.environment;
      if (
        !((f = y.navigator) === null || f === void 0 || (a = f.userAgent) === null || a === void 0) &&
        a.includes("Algolia Crawler")
      ) {
        var v = y.document.createElement("meta"),
          d = y.document.querySelector("head");
        (v.name = "algolia:metadata"),
          setTimeout(function () {
            (v.content = JSON.stringify(h)), d.appendChild(v);
          }, 0);
      }
    })({ metadata: ai({ plugins: n.plugins, options: t }), environment: n.environment }),
    _e(_e({ refresh: u, navigator: n.navigator }, i), o)
  );
}
function fi(t) {
  var e = t.translations,
    n = (e === void 0 ? {} : e).searchByText,
    r = n === void 0 ? "Search by" : n;
  return c.createElement(
    "a",
    {
      href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(
        window.location.hostname,
        "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch",
      ),
      target: "_blank",
      rel: "noopener noreferrer",
    },
    c.createElement("span", { className: "DocSearch-Label" }, r),
    c.createElement(
      "svg",
      {
        width: "77",
        height: "19",
        "aria-label": "Algolia",
        role: "img",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 2196.2 500",
      },
      c.createElement(
        "defs",
        null,
        c.createElement("style", null, ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}"),
      ),
      c.createElement("path", {
        className: "cls-2",
        d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z",
      }),
      c.createElement("rect", {
        className: "cls-1",
        x: "1845.88",
        y: "104.73",
        width: "62.58",
        height: "277.9",
        rx: "5.9",
        ry: "5.9",
      }),
      c.createElement("path", {
        className: "cls-2",
        d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z",
      }),
      c.createElement("path", {
        className: "cls-2",
        d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z",
      }),
      c.createElement("path", {
        className: "cls-2",
        d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z",
      }),
      c.createElement("path", {
        className: "cls-2",
        d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z",
      }),
      c.createElement("path", {
        className: "cls-2",
        d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z",
      }),
      c.createElement("path", {
        className: "cls-2",
        d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z",
      }),
      c.createElement("path", {
        className: "cls-1",
        d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z",
      }),
    ),
  );
}
function yt(t) {
  return c.createElement(
    "svg",
    { width: "15", height: "15", "aria-label": t.ariaLabel, role: "img" },
    c.createElement(
      "g",
      { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2" },
      t.children,
    ),
  );
}
function mi(t) {
  var e = t.translations,
    n = e === void 0 ? {} : e,
    r = n.selectText,
    o = r === void 0 ? "to select" : r,
    i = n.selectKeyAriaLabel,
    u = i === void 0 ? "Enter key" : i,
    s = n.navigateText,
    l = s === void 0 ? "to navigate" : s,
    f = n.navigateUpKeyAriaLabel,
    a = f === void 0 ? "Arrow up" : f,
    h = n.navigateDownKeyAriaLabel,
    y = h === void 0 ? "Arrow down" : h,
    v = n.closeText,
    d = v === void 0 ? "to close" : v,
    p = n.closeKeyAriaLabel,
    m = p === void 0 ? "Escape key" : p,
    g = n.searchByText,
    _ = g === void 0 ? "Search by" : g;
  return c.createElement(
    c.Fragment,
    null,
    c.createElement("div", { className: "DocSearch-Logo" }, c.createElement(fi, { translations: { searchByText: _ } })),
    c.createElement(
      "ul",
      { className: "DocSearch-Commands" },
      c.createElement(
        "li",
        null,
        c.createElement(
          "kbd",
          { className: "DocSearch-Commands-Key" },
          c.createElement(
            yt,
            { ariaLabel: u },
            c.createElement("path", { d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" }),
          ),
        ),
        c.createElement("span", { className: "DocSearch-Label" }, o),
      ),
      c.createElement(
        "li",
        null,
        c.createElement(
          "kbd",
          { className: "DocSearch-Commands-Key" },
          c.createElement(yt, { ariaLabel: y }, c.createElement("path", { d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3" })),
        ),
        c.createElement(
          "kbd",
          { className: "DocSearch-Commands-Key" },
          c.createElement(yt, { ariaLabel: a }, c.createElement("path", { d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3" })),
        ),
        c.createElement("span", { className: "DocSearch-Label" }, l),
      ),
      c.createElement(
        "li",
        null,
        c.createElement(
          "kbd",
          { className: "DocSearch-Commands-Key" },
          c.createElement(
            yt,
            { ariaLabel: m },
            c.createElement("path", {
              d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956",
            }),
          ),
        ),
        c.createElement("span", { className: "DocSearch-Label" }, d),
      ),
    ),
  );
}
function pi(t) {
  var e = t.hit,
    n = t.children;
  return c.createElement("a", { href: e.url }, n);
}
function di() {
  return c.createElement(
    "svg",
    { viewBox: "0 0 38 38", stroke: "currentColor", strokeOpacity: ".5" },
    c.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      c.createElement(
        "g",
        { transform: "translate(1 1)", strokeWidth: "2" },
        c.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }),
        c.createElement(
          "path",
          { d: "M36 18c0-9.94-8.06-18-18-18" },
          c.createElement("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            from: "0 18 18",
            to: "360 18 18",
            dur: "1s",
            repeatCount: "indefinite",
          }),
        ),
      ),
    ),
  );
}
function vi() {
  return c.createElement(
    "svg",
    { width: "20", height: "20", viewBox: "0 0 20 20" },
    c.createElement(
      "g",
      { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" },
      c.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }),
      c.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" }),
    ),
  );
}
function Jt() {
  return c.createElement(
    "svg",
    { width: "20", height: "20", viewBox: "0 0 20 20" },
    c.createElement("path", {
      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
      stroke: "currentColor",
      fill: "none",
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  );
}
function hi() {
  return c.createElement(
    "svg",
    { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" },
    c.createElement(
      "g",
      { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" },
      c.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }),
      c.createElement("path", { d: "M8 17l-6-6 6-6" }),
    ),
  );
}
var yi = function () {
  return c.createElement(
    "svg",
    { width: "20", height: "20", viewBox: "0 0 20 20" },
    c.createElement("path", {
      d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",
      stroke: "currentColor",
      fill: "none",
      fillRule: "evenodd",
      strokeLinejoin: "round",
    }),
  );
};
function gi(t) {
  switch (t.type) {
    case "lvl1":
      return c.createElement(yi, null);
    case "content":
      return c.createElement(bi, null);
    default:
      return c.createElement(_i, null);
  }
}
function _i() {
  return c.createElement(
    "svg",
    { width: "20", height: "20", viewBox: "0 0 20 20" },
    c.createElement("path", {
      d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z",
      stroke: "currentColor",
      fill: "none",
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  );
}
function bi() {
  return c.createElement(
    "svg",
    { width: "20", height: "20", viewBox: "0 0 20 20" },
    c.createElement("path", {
      d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z",
      stroke: "currentColor",
      fill: "none",
      fillRule: "evenodd",
      strokeLinejoin: "round",
    }),
  );
}
function er() {
  return c.createElement(
    "svg",
    { width: "20", height: "20", viewBox: "0 0 20 20" },
    c.createElement("path", {
      d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z",
      stroke: "currentColor",
      fill: "none",
      fillRule: "evenodd",
      strokeLinejoin: "round",
    }),
  );
}
function Si() {
  return c.createElement(
    "svg",
    {
      width: "40",
      height: "40",
      viewBox: "0 0 20 20",
      fill: "none",
      fillRule: "evenodd",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    c.createElement("path", {
      d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0",
    }),
  );
}
function Oi() {
  return c.createElement(
    "svg",
    {
      width: "40",
      height: "40",
      viewBox: "0 0 20 20",
      fill: "none",
      fillRule: "evenodd",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    c.createElement("path", {
      d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2",
    }),
  );
}
function wi(t) {
  var e = t.translations,
    n = e === void 0 ? {} : e,
    r = n.titleText,
    o = r === void 0 ? "Unable to fetch results" : r,
    i = n.helpText,
    u = i === void 0 ? "You might want to check your network connection." : i;
  return c.createElement(
    "div",
    { className: "DocSearch-ErrorScreen" },
    c.createElement("div", { className: "DocSearch-Screen-Icon" }, c.createElement(Si, null)),
    c.createElement("p", { className: "DocSearch-Title" }, o),
    c.createElement("p", { className: "DocSearch-Help" }, u),
  );
}
var Ei = ["translations"];
function ji(t) {
  var e = t.translations,
    n = e === void 0 ? {} : e,
    r = de(t, Ei),
    o = n.noResultsText,
    i = o === void 0 ? "No results for" : o,
    u = n.suggestedQueryText,
    s = u === void 0 ? "Try searching for" : u,
    l = n.reportMissingResultsText,
    f = l === void 0 ? "Believe this query should return results?" : l,
    a = n.reportMissingResultsLinkText,
    h = a === void 0 ? "Let us know." : a,
    y = r.state.context.searchSuggestions;
  return c.createElement(
    "div",
    { className: "DocSearch-NoResults" },
    c.createElement("div", { className: "DocSearch-Screen-Icon" }, c.createElement(Oi, null)),
    c.createElement(
      "p",
      { className: "DocSearch-Title" },
      i,
      ' "',
      c.createElement("strong", null, r.state.query),
      '"',
    ),
    y &&
      y.length > 0 &&
      c.createElement(
        "div",
        { className: "DocSearch-NoResults-Prefill-List" },
        c.createElement("p", { className: "DocSearch-Help" }, s, ":"),
        c.createElement(
          "ul",
          null,
          y.slice(0, 3).reduce(function (v, d) {
            return [].concat(
              (function (p) {
                return (
                  (function (m) {
                    if (Array.isArray(m)) return Wt(m);
                  })(p) ||
                  (function (m) {
                    if ((typeof Symbol < "u" && m[Symbol.iterator] != null) || m["@@iterator"] != null)
                      return Array.from(m);
                  })(p) ||
                  Ar(p) ||
                  (function () {
                    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                  })()
                );
              })(v),
              [
                c.createElement(
                  "li",
                  { key: d },
                  c.createElement(
                    "button",
                    {
                      className: "DocSearch-Prefill",
                      key: d,
                      type: "button",
                      onClick: function () {
                        r.setQuery(d.toLowerCase() + " "), r.refresh(), r.inputRef.current.focus();
                      },
                    },
                    d,
                  ),
                ),
              ],
            );
          }, []),
        ),
      ),
    r.getMissingResultsUrl &&
      c.createElement(
        "p",
        { className: "DocSearch-Help" },
        "".concat(f, " "),
        c.createElement(
          "a",
          { href: r.getMissingResultsUrl({ query: r.state.query }), target: "_blank", rel: "noopener noreferrer" },
          h,
        ),
      ),
  );
}
var Pi = ["hit", "attribute", "tagName"];
function tr(t, e) {
  return e.split(".").reduce(function (n, r) {
    return n != null && n[r] ? n[r] : null;
  }, t);
}
function Pe(t) {
  var e = t.hit,
    n = t.attribute,
    r = t.tagName;
  return ee(
    r === void 0 ? "span" : r,
    Fe(
      Fe({}, de(t, Pi)),
      {},
      { dangerouslySetInnerHTML: { __html: tr(e, "_snippetResult.".concat(n, ".value")) || tr(e, n) } },
    ),
  );
}
function $t(t) {
  return t.collection && t.collection.items.length !== 0
    ? c.createElement(
        "section",
        { className: "DocSearch-Hits" },
        c.createElement("div", { className: "DocSearch-Hit-source" }, t.title),
        c.createElement(
          "ul",
          t.getListProps(),
          t.collection.items.map(function (e, n) {
            return c.createElement(Ii, B({ key: [t.title, e.objectID].join(":"), item: e, index: n }, t));
          }),
        ),
      )
    : null;
}
function Ii(t) {
  var e = t.item,
    n = t.index,
    r = t.renderIcon,
    o = t.renderAction,
    i = t.getItemProps,
    u = t.onItemClick,
    s = t.collection,
    l = t.hitComponent,
    f = be(c.useState(!1), 2),
    a = f[0],
    h = f[1],
    y = be(c.useState(!1), 2),
    v = y[0],
    d = y[1],
    p = c.useRef(null),
    m = l;
  return c.createElement(
    "li",
    B(
      {
        className: [
          "DocSearch-Hit",
          e.__docsearch_parent && "DocSearch-Hit--Child",
          a && "DocSearch-Hit--deleting",
          v && "DocSearch-Hit--favoriting",
        ]
          .filter(Boolean)
          .join(" "),
        onTransitionEnd: function () {
          p.current && p.current();
        },
      },
      i({
        item: e,
        source: s.source,
        onClick: function (g) {
          u(e, g);
        },
      }),
    ),
    c.createElement(
      m,
      { hit: e },
      c.createElement(
        "div",
        { className: "DocSearch-Hit-Container" },
        r({ item: e, index: n }),
        e.hierarchy[e.type] &&
          e.type === "lvl1" &&
          c.createElement(
            "div",
            { className: "DocSearch-Hit-content-wrapper" },
            c.createElement(Pe, { className: "DocSearch-Hit-title", hit: e, attribute: "hierarchy.lvl1" }),
            e.content && c.createElement(Pe, { className: "DocSearch-Hit-path", hit: e, attribute: "content" }),
          ),
        e.hierarchy[e.type] &&
          (e.type === "lvl2" || e.type === "lvl3" || e.type === "lvl4" || e.type === "lvl5" || e.type === "lvl6") &&
          c.createElement(
            "div",
            { className: "DocSearch-Hit-content-wrapper" },
            c.createElement(Pe, { className: "DocSearch-Hit-title", hit: e, attribute: "hierarchy.".concat(e.type) }),
            c.createElement(Pe, { className: "DocSearch-Hit-path", hit: e, attribute: "hierarchy.lvl1" }),
          ),
        e.type === "content" &&
          c.createElement(
            "div",
            { className: "DocSearch-Hit-content-wrapper" },
            c.createElement(Pe, { className: "DocSearch-Hit-title", hit: e, attribute: "content" }),
            c.createElement(Pe, { className: "DocSearch-Hit-path", hit: e, attribute: "hierarchy.lvl1" }),
          ),
        o({
          item: e,
          runDeleteTransition: function (g) {
            h(!0), (p.current = g);
          },
          runFavoriteTransition: function (g) {
            d(!0), (p.current = g);
          },
        }),
      ),
    ),
  );
}
function nr(t, e, n) {
  return t.reduce(function (r, o) {
    var i = e(o);
    return r.hasOwnProperty(i) || (r[i] = []), r[i].length < (n || 5) && r[i].push(o), r;
  }, {});
}
function rr(t) {
  return t;
}
function gt(t) {
  return t.button === 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
}
function Di() {}
var Hr = /(<mark>|<\/mark>)/g,
  ki = RegExp(Hr.source);
function Ur(t) {
  var e,
    n,
    r = t;
  if (!r.__docsearch_parent && !t._highlightResult) return t.hierarchy.lvl0;
  var o = (
    (r.__docsearch_parent
      ? (e = r.__docsearch_parent) === null ||
        e === void 0 ||
        (e = e._highlightResult) === null ||
        e === void 0 ||
        (e = e.hierarchy) === null ||
        e === void 0
        ? void 0
        : e.lvl0
      : (n = t._highlightResult) === null || n === void 0 || (n = n.hierarchy) === null || n === void 0
        ? void 0
        : n.lvl0) || {}
  ).value;
  return o && ki.test(o) ? o.replace(Hr, "") : o;
}
function Ci(t) {
  return c.createElement(
    "div",
    { className: "DocSearch-Dropdown-Container" },
    t.state.collections.map(function (e) {
      if (e.items.length === 0) return null;
      var n = Ur(e.items[0]);
      return c.createElement(
        $t,
        B({}, t, {
          key: e.source.sourceId,
          title: n,
          collection: e,
          renderIcon: function (r) {
            var o,
              i = r.item,
              u = r.index;
            return c.createElement(
              c.Fragment,
              null,
              i.__docsearch_parent &&
                c.createElement(
                  "svg",
                  { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" },
                  c.createElement(
                    "g",
                    {
                      stroke: "currentColor",
                      fill: "none",
                      fillRule: "evenodd",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    },
                    i.__docsearch_parent !==
                      ((o = e.items[u + 1]) === null || o === void 0 ? void 0 : o.__docsearch_parent)
                      ? c.createElement("path", { d: "M8 6v21M20 27H8.3" })
                      : c.createElement("path", { d: "M8 6v42M20 27H8.3" }),
                  ),
                ),
              c.createElement("div", { className: "DocSearch-Hit-icon" }, c.createElement(gi, { type: i.type })),
            );
          },
          renderAction: function () {
            return c.createElement("div", { className: "DocSearch-Hit-action" }, c.createElement(hi, null));
          },
        }),
      );
    }),
    t.resultsFooterComponent &&
      c.createElement(
        "section",
        { className: "DocSearch-HitsFooter" },
        c.createElement(t.resultsFooterComponent, { state: t.state }),
      ),
  );
}
var Ai = ["translations"];
function xi(t) {
  var e = t.translations,
    n = e === void 0 ? {} : e,
    r = de(t, Ai),
    o = n.recentSearchesTitle,
    i = o === void 0 ? "Recent" : o,
    u = n.noRecentSearchesText,
    s = u === void 0 ? "No recent searches" : u,
    l = n.saveRecentSearchButtonTitle,
    f = l === void 0 ? "Save this search" : l,
    a = n.removeRecentSearchButtonTitle,
    h = a === void 0 ? "Remove this search from history" : a,
    y = n.favoriteSearchesTitle,
    v = y === void 0 ? "Favorite" : y,
    d = n.removeFavoriteSearchButtonTitle,
    p = d === void 0 ? "Remove this search from favorites" : d;
  return r.state.status === "idle" && r.hasCollections === !1
    ? r.disableUserPersonalization
      ? null
      : c.createElement(
          "div",
          { className: "DocSearch-StartScreen" },
          c.createElement("p", { className: "DocSearch-Help" }, s),
        )
    : r.hasCollections === !1
      ? null
      : c.createElement(
          "div",
          { className: "DocSearch-Dropdown-Container" },
          c.createElement(
            $t,
            B({}, r, {
              title: i,
              collection: r.state.collections[0],
              renderIcon: function () {
                return c.createElement("div", { className: "DocSearch-Hit-icon" }, c.createElement(vi, null));
              },
              renderAction: function (m) {
                var g = m.item,
                  _ = m.runFavoriteTransition,
                  b = m.runDeleteTransition;
                return c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(
                    "div",
                    { className: "DocSearch-Hit-action" },
                    c.createElement(
                      "button",
                      {
                        className: "DocSearch-Hit-action-button",
                        title: f,
                        type: "submit",
                        onClick: function (S) {
                          S.preventDefault(),
                            S.stopPropagation(),
                            _(function () {
                              r.favoriteSearches.add(g), r.recentSearches.remove(g), r.refresh();
                            });
                        },
                      },
                      c.createElement(er, null),
                    ),
                  ),
                  c.createElement(
                    "div",
                    { className: "DocSearch-Hit-action" },
                    c.createElement(
                      "button",
                      {
                        className: "DocSearch-Hit-action-button",
                        title: h,
                        type: "submit",
                        onClick: function (S) {
                          S.preventDefault(),
                            S.stopPropagation(),
                            b(function () {
                              r.recentSearches.remove(g), r.refresh();
                            });
                        },
                      },
                      c.createElement(Jt, null),
                    ),
                  ),
                );
              },
            }),
          ),
          c.createElement(
            $t,
            B({}, r, {
              title: v,
              collection: r.state.collections[1],
              renderIcon: function () {
                return c.createElement("div", { className: "DocSearch-Hit-icon" }, c.createElement(er, null));
              },
              renderAction: function (m) {
                var g = m.item,
                  _ = m.runDeleteTransition;
                return c.createElement(
                  "div",
                  { className: "DocSearch-Hit-action" },
                  c.createElement(
                    "button",
                    {
                      className: "DocSearch-Hit-action-button",
                      title: p,
                      type: "submit",
                      onClick: function (b) {
                        b.preventDefault(),
                          b.stopPropagation(),
                          _(function () {
                            r.favoriteSearches.remove(g), r.refresh();
                          });
                      },
                    },
                    c.createElement(Jt, null),
                  ),
                );
              },
            }),
          ),
        );
}
var Ni = ["translations"],
  Ti = c.memo(
    function (t) {
      var e = t.translations,
        n = e === void 0 ? {} : e,
        r = de(t, Ni);
      if (r.state.status === "error") return c.createElement(wi, { translations: n?.errorScreen });
      var o = r.state.collections.some(function (i) {
        return i.items.length > 0;
      });
      return r.state.query
        ? o === !1
          ? c.createElement(ji, B({}, r, { translations: n?.noResultsScreen }))
          : c.createElement(Ci, r)
        : c.createElement(xi, B({}, r, { hasCollections: o, translations: n?.startScreen }));
    },
    function (t, e) {
      return e.state.status === "loading" || e.state.status === "stalled";
    },
  ),
  Ri = ["translations"];
function qi(t) {
  var e = t.translations,
    n = e === void 0 ? {} : e,
    r = de(t, Ri),
    o = n.resetButtonTitle,
    i = o === void 0 ? "Clear the query" : o,
    u = n.resetButtonAriaLabel,
    s = u === void 0 ? "Clear the query" : u,
    l = n.cancelButtonText,
    f = l === void 0 ? "Cancel" : l,
    a = n.cancelButtonAriaLabel,
    h = a === void 0 ? "Cancel" : a,
    y = n.searchInputLabel,
    v = y === void 0 ? "Search" : y,
    d = r.getFormProps({ inputElement: r.inputRef.current }).onReset;
  return (
    c.useEffect(
      function () {
        r.autoFocus && r.inputRef.current && r.inputRef.current.focus();
      },
      [r.autoFocus, r.inputRef],
    ),
    c.useEffect(
      function () {
        r.isFromSelection && r.inputRef.current && r.inputRef.current.select();
      },
      [r.isFromSelection, r.inputRef],
    ),
    c.createElement(
      c.Fragment,
      null,
      c.createElement(
        "form",
        {
          className: "DocSearch-Form",
          onSubmit: function (p) {
            p.preventDefault();
          },
          onReset: d,
        },
        c.createElement(
          "label",
          B({ className: "DocSearch-MagnifierLabel" }, r.getLabelProps()),
          c.createElement(xr, null),
          c.createElement("span", { className: "DocSearch-VisuallyHiddenForAccessibility" }, v),
        ),
        c.createElement("div", { className: "DocSearch-LoadingIndicator" }, c.createElement(di, null)),
        c.createElement(
          "input",
          B(
            { className: "DocSearch-Input", ref: r.inputRef },
            r.getInputProps({ inputElement: r.inputRef.current, autoFocus: r.autoFocus, maxLength: 64 }),
          ),
        ),
        c.createElement(
          "button",
          { type: "reset", title: i, className: "DocSearch-Reset", "aria-label": s, hidden: !r.state.query },
          c.createElement(Jt, null),
        ),
      ),
      c.createElement(
        "button",
        { className: "DocSearch-Cancel", type: "reset", "aria-label": h, onClick: r.onClose },
        f,
      ),
    )
  );
}
var Li = ["_highlightResult", "_snippetResult"];
function or(t) {
  var e = t.key,
    n = t.limit,
    r = n === void 0 ? 5 : n,
    o = (function (u) {
      return (function () {
        var s = "__TEST_KEY__";
        try {
          return localStorage.setItem(s, ""), localStorage.removeItem(s), !0;
        } catch {
          return !1;
        }
      })() === !1
        ? {
            setItem: function () {},
            getItem: function () {
              return [];
            },
          }
        : {
            setItem: function (s) {
              return window.localStorage.setItem(u, JSON.stringify(s));
            },
            getItem: function () {
              var s = window.localStorage.getItem(u);
              return s ? JSON.parse(s) : [];
            },
          };
    })(e),
    i = o.getItem().slice(0, r);
  return {
    add: function (u) {
      var s = u,
        l = (s._highlightResult, s._snippetResult, de(s, Li)),
        f = i.findIndex(function (a) {
          return a.objectID === l.objectID;
        });
      f > -1 && i.splice(f, 1), i.unshift(l), (i = i.slice(0, r)), o.setItem(i);
    },
    remove: function (u) {
      (i = i.filter(function (s) {
        return s.objectID !== u.objectID;
      })),
        o.setItem(i);
    },
    getAll: function () {
      return i;
    },
  };
}
function Mi(t) {
  var e,
    n = "algoliasearch-client-js-".concat(t.key),
    r = function () {
      return e === void 0 && (e = t.localStorage || window.localStorage), e;
    },
    o = function () {
      return JSON.parse(r().getItem(n) || "{}");
    },
    i = function (u) {
      r().setItem(n, JSON.stringify(u));
    };
  return {
    get: function (u, s) {
      var l =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : {
              miss: function () {
                return Promise.resolve();
              },
            };
      return Promise.resolve()
        .then(function () {
          (function () {
            var a = t.timeToLive ? 1e3 * t.timeToLive : null,
              h = o(),
              y = Object.fromEntries(
                Object.entries(h).filter(function (d) {
                  return Ie(d, 2)[1].timestamp !== void 0;
                }),
              );
            if ((i(y), a)) {
              var v = Object.fromEntries(
                Object.entries(y).filter(function (d) {
                  var p = Ie(d, 2)[1],
                    m = new Date().getTime();
                  return !(p.timestamp + a < m);
                }),
              );
              i(v);
            }
          })();
          var f = JSON.stringify(u);
          return o()[f];
        })
        .then(function (f) {
          return Promise.all([f ? f.value : s(), f !== void 0]);
        })
        .then(function (f) {
          var a = Ie(f, 2),
            h = a[0],
            y = a[1];
          return Promise.all([h, y || l.miss(h)]);
        })
        .then(function (f) {
          return Ie(f, 1)[0];
        });
    },
    set: function (u, s) {
      return Promise.resolve().then(function () {
        var l = o();
        return (
          (l[JSON.stringify(u)] = { timestamp: new Date().getTime(), value: s }), r().setItem(n, JSON.stringify(l)), s
        );
      });
    },
    delete: function (u) {
      return Promise.resolve().then(function () {
        var s = o();
        delete s[JSON.stringify(u)], r().setItem(n, JSON.stringify(s));
      });
    },
    clear: function () {
      return Promise.resolve().then(function () {
        r().removeItem(n);
      });
    },
  };
}
function Me(t) {
  var e = _t(t.caches),
    n = e.shift();
  return n === void 0
    ? {
        get: function (r, o) {
          var i =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : {
                  miss: function () {
                    return Promise.resolve();
                  },
                };
          return o()
            .then(function (u) {
              return Promise.all([u, i.miss(u)]);
            })
            .then(function (u) {
              return Ie(u, 1)[0];
            });
        },
        set: function (r, o) {
          return Promise.resolve(o);
        },
        delete: function (r) {
          return Promise.resolve();
        },
        clear: function () {
          return Promise.resolve();
        },
      }
    : {
        get: function (r, o) {
          var i =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : {
                  miss: function () {
                    return Promise.resolve();
                  },
                };
          return n.get(r, o, i).catch(function () {
            return Me({ caches: e }).get(r, o, i);
          });
        },
        set: function (r, o) {
          return n.set(r, o).catch(function () {
            return Me({ caches: e }).set(r, o);
          });
        },
        delete: function (r) {
          return n.delete(r).catch(function () {
            return Me({ caches: e }).delete(r);
          });
        },
        clear: function () {
          return n.clear().catch(function () {
            return Me({ caches: e }).clear();
          });
        },
      };
}
function Lt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { serializable: !0 },
    e = {};
  return {
    get: function (n, r) {
      var o =
          arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : {
                miss: function () {
                  return Promise.resolve();
                },
              },
        i = JSON.stringify(n);
      if (i in e) return Promise.resolve(t.serializable ? JSON.parse(e[i]) : e[i]);
      var u = r(),
        s =
          (o && o.miss) ||
          function () {
            return Promise.resolve();
          };
      return u
        .then(function (l) {
          return s(l);
        })
        .then(function () {
          return u;
        });
    },
    set: function (n, r) {
      return (e[JSON.stringify(n)] = t.serializable ? JSON.stringify(r) : r), Promise.resolve(r);
    },
    delete: function (n) {
      return delete e[JSON.stringify(n)], Promise.resolve();
    },
    clear: function () {
      return (e = {}), Promise.resolve();
    },
  };
}
function Hi(t) {
  for (var e = t.length - 1; e > 0; e--) {
    var n = Math.floor(Math.random() * (e + 1)),
      r = t[e];
    (t[e] = t[n]), (t[n] = r);
  }
  return t;
}
function Fr(t, e) {
  return (
    e &&
      Object.keys(e).forEach(function (n) {
        t[n] = e[n](t);
      }),
    t
  );
}
function Pt(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
  var o = 0;
  return t.replace(/%s/g, function () {
    return encodeURIComponent(n[o++]);
  });
}
function ir(t, e) {
  var n = t || {},
    r = n.data || {};
  return (
    Object.keys(n).forEach(function (o) {
      ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(o) === -1 && (r[o] = n[o]);
    }),
    {
      data: Object.entries(r).length > 0 ? r : void 0,
      timeout: n.timeout || e,
      headers: n.headers || {},
      queryParameters: n.queryParameters || {},
      cacheable: n.cacheable,
    }
  );
}
var ke = { Read: 1, Write: 2, Any: 3 };
function ar(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return N(N({}, t), {}, { status: e, lastUpdate: Date.now() });
}
function Br(t) {
  return typeof t == "string"
    ? { protocol: "https", url: t, accept: ke.Any }
    : { protocol: t.protocol || "https", url: t.url, accept: t.accept || ke.Any };
}
var It = "POST";
function cr(t, e, n, r) {
  var o = [],
    i = (function (y, v) {
      if (y.method !== "GET" && (y.data !== void 0 || v.data !== void 0)) {
        var d = Array.isArray(y.data) ? y.data : N(N({}, y.data), v.data);
        return JSON.stringify(d);
      }
    })(n, r),
    u = (function (y, v) {
      var d = N(N({}, y.headers), v.headers),
        p = {};
      return (
        Object.keys(d).forEach(function (m) {
          var g = d[m];
          p[m.toLowerCase()] = g;
        }),
        p
      );
    })(t, r),
    s = n.method,
    l = n.method !== "GET" ? {} : N(N({}, n.data), r.data),
    f = N(N(N({ "x-algolia-agent": t.userAgent.value }, t.queryParameters), l), r.queryParameters),
    a = 0,
    h = function y(v, d) {
      var p = v.pop();
      if (p === void 0)
        throw {
          name: "RetryError",
          message:
            "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
          transporterStackTrace: ur(o),
        };
      var m = {
          data: i,
          headers: u,
          method: s,
          url: Fi(p, n.path, f),
          connectTimeout: d(a, t.timeouts.connect),
          responseTimeout: d(a, r.timeout),
        },
        g = function (b) {
          var S = { request: m, response: b, host: p, triesLeft: v.length };
          return o.push(S), S;
        },
        _ = {
          onSuccess: function (b) {
            return (function (S) {
              try {
                return JSON.parse(S.content);
              } catch (O) {
                throw (function (E, k) {
                  return { name: "DeserializationError", message: E, response: k };
                })(O.message, S);
              }
            })(b);
          },
          onRetry: function (b) {
            var S = g(b);
            return (
              b.isTimedOut && a++,
              Promise.all([
                t.logger.info("Retryable failure", Kr(S)),
                t.hostsCache.set(p, ar(p, b.isTimedOut ? 3 : 2)),
              ]).then(function () {
                return y(v, d);
              })
            );
          },
          onFail: function (b) {
            throw (
              (g(b),
              (function (S, O) {
                var E = S.content,
                  k = S.status,
                  P = E;
                try {
                  P = JSON.parse(E).message;
                } catch {}
                return (function (I, w, T) {
                  return { name: "ApiError", message: I, status: w, transporterStackTrace: T };
                })(P, k, O);
              })(b, ur(o)))
            );
          },
        };
      return t.requester.send(m).then(function (b) {
        return (function (S, O) {
          return (function (E) {
            var k = E.status;
            return (
              E.isTimedOut ||
              (function (P) {
                var I = P.isTimedOut,
                  w = P.status;
                return !I && ~~w == 0;
              })(E) ||
              (~~(k / 100) != 2 && ~~(k / 100) != 4)
            );
          })(S)
            ? O.onRetry(S)
            : ~~(S.status / 100) == 2
              ? O.onSuccess(S)
              : O.onFail(S);
        })(b, _);
      });
    };
  return (function (y, v) {
    return Promise.all(
      v.map(function (d) {
        return y.get(d, function () {
          return Promise.resolve(ar(d));
        });
      }),
    ).then(function (d) {
      var p = d.filter(function (_) {
          return (function (b) {
            return b.status === 1 || Date.now() - b.lastUpdate > 12e4;
          })(_);
        }),
        m = d.filter(function (_) {
          return (function (b) {
            return b.status === 3 && Date.now() - b.lastUpdate <= 12e4;
          })(_);
        }),
        g = [].concat(_t(p), _t(m));
      return {
        getTimeout: function (_, b) {
          return (m.length === 0 && _ === 0 ? 1 : m.length + 3 + _) * b;
        },
        statelessHosts:
          g.length > 0
            ? g.map(function (_) {
                return Br(_);
              })
            : v,
      };
    });
  })(t.hostsCache, e).then(function (y) {
    return h(_t(y.statelessHosts).reverse(), y.getTimeout);
  });
}
function Ui(t) {
  var e = {
    value: "Algolia for JavaScript (".concat(t, ")"),
    add: function (n) {
      var r = "; ".concat(n.segment).concat(n.version !== void 0 ? " (".concat(n.version, ")") : "");
      return e.value.indexOf(r) === -1 && (e.value = "".concat(e.value).concat(r)), e;
    },
  };
  return e;
}
function Fi(t, e, n) {
  var r = Vr(n),
    o = ""
      .concat(t.protocol, "://")
      .concat(t.url, "/")
      .concat(e.charAt(0) === "/" ? e.substr(1) : e);
  return r.length && (o += "?".concat(r)), o;
}
function Vr(t) {
  return Object.keys(t)
    .map(function (e) {
      return Pt(
        "%s=%s",
        e,
        ((n = t[e]),
        Object.prototype.toString.call(n) === "[object Object]" ||
        Object.prototype.toString.call(n) === "[object Array]"
          ? JSON.stringify(t[e])
          : t[e]),
      );
      var n;
    })
    .join("&");
}
function ur(t) {
  return t.map(function (e) {
    return Kr(e);
  });
}
function Kr(t) {
  var e = t.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
  return N(N({}, t), {}, { request: N(N({}, t.request), {}, { headers: N(N({}, t.request.headers), e) }) });
}
var Bi = function (t) {
    return function (e, n) {
      return e.method === "GET" ? t.transporter.read(e, n) : t.transporter.write(e, n);
    };
  },
  Wr = function (t) {
    return function (e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return Fr({ transporter: t.transporter, appId: t.appId, indexName: e }, n.methods);
    };
  },
  lr = function (t) {
    return function (e, n) {
      var r = e.map(function (o) {
        return N(N({}, o), {}, { params: Vr(o.params || {}) });
      });
      return t.transporter.read({ method: It, path: "1/indexes/*/queries", data: { requests: r }, cacheable: !0 }, n);
    };
  },
  sr = function (t) {
    return function (e, n) {
      return Promise.all(
        e.map(function (r) {
          var o = r.params,
            i = o.facetName,
            u = o.facetQuery,
            s = (function (l, f) {
              if (l == null) return {};
              var a,
                h,
                y = (function (d, p) {
                  if (d == null) return {};
                  var m,
                    g,
                    _ = {},
                    b = Object.keys(d);
                  for (g = 0; g < b.length; g++) (m = b[g]), p.indexOf(m) >= 0 || (_[m] = d[m]);
                  return _;
                })(l, f);
              if (Object.getOwnPropertySymbols) {
                var v = Object.getOwnPropertySymbols(l);
                for (h = 0; h < v.length; h++)
                  (a = v[h]), f.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(l, a) && (y[a] = l[a]));
              }
              return y;
            })(o, Eo);
          return Wr(t)(r.indexName, { methods: { searchForFacetValues: zr } }).searchForFacetValues(
            i,
            u,
            N(N({}, n), s),
          );
        }),
      );
    };
  },
  Vi = function (t) {
    return function (e, n, r) {
      return t.transporter.read(
        {
          method: It,
          path: Pt("1/answers/%s/prediction", t.indexName),
          data: { query: e, queryLanguages: n },
          cacheable: !0,
        },
        r,
      );
    };
  },
  Ki = function (t) {
    return function (e, n) {
      return t.transporter.read(
        { method: It, path: Pt("1/indexes/%s/query", t.indexName), data: { query: e }, cacheable: !0 },
        n,
      );
    };
  },
  zr = function (t) {
    return function (e, n, r) {
      return t.transporter.read(
        {
          method: It,
          path: Pt("1/indexes/%s/facets/%s/query", t.indexName, e),
          data: { facetQuery: n },
          cacheable: !0,
        },
        r,
      );
    };
  };
function Jr(t, e, n) {
  var r = {
    appId: t,
    apiKey: e,
    timeouts: { connect: 1, read: 2, write: 30 },
    requester: {
      send: function (o) {
        return new Promise(function (i) {
          var u = new XMLHttpRequest();
          u.open(o.method, o.url, !0),
            Object.keys(o.headers).forEach(function (a) {
              return u.setRequestHeader(a, o.headers[a]);
            });
          var s,
            l = function (a, h) {
              return setTimeout(function () {
                u.abort(), i({ status: 0, content: h, isTimedOut: !0 });
              }, 1e3 * a);
            },
            f = l(o.connectTimeout, "Connection timeout");
          (u.onreadystatechange = function () {
            u.readyState > u.OPENED && s === void 0 && (clearTimeout(f), (s = l(o.responseTimeout, "Socket timeout")));
          }),
            (u.onerror = function () {
              u.status === 0 &&
                (clearTimeout(f),
                clearTimeout(s),
                i({ content: u.responseText || "Network request failed", status: u.status, isTimedOut: !1 }));
            }),
            (u.onload = function () {
              clearTimeout(f), clearTimeout(s), i({ content: u.responseText, status: u.status, isTimedOut: !1 });
            }),
            u.send(o.data);
        });
      },
    },
    logger: {
      debug: function (o, i) {
        return Promise.resolve();
      },
      info: function (o, i) {
        return Promise.resolve();
      },
      error: function (o, i) {
        return console.error(o, i), Promise.resolve();
      },
    },
    responsesCache: Lt(),
    requestsCache: Lt({ serializable: !1 }),
    hostsCache: Me({ caches: [Mi({ key: "4.19.1-".concat(t) }), Lt()] }),
    userAgent: Ui("4.19.1").add({ segment: "Browser", version: "lite" }),
    authMode: 0,
  };
  return (function (o) {
    var i = o.appId,
      u = (function (f, a, h) {
        var y = { "x-algolia-api-key": h, "x-algolia-application-id": a };
        return {
          headers: function () {
            return f === 1 ? y : {};
          },
          queryParameters: function () {
            return f === 0 ? y : {};
          },
        };
      })(o.authMode !== void 0 ? o.authMode : 1, i, o.apiKey),
      s = (function (f) {
        var a = f.hostsCache,
          h = f.logger,
          y = f.requester,
          v = f.requestsCache,
          d = f.responsesCache,
          p = f.timeouts,
          m = f.userAgent,
          g = f.hosts,
          _ = f.queryParameters,
          b = {
            hostsCache: a,
            logger: h,
            requester: y,
            requestsCache: v,
            responsesCache: d,
            timeouts: p,
            userAgent: m,
            headers: f.headers,
            queryParameters: _,
            hosts: g.map(function (S) {
              return Br(S);
            }),
            read: function (S, O) {
              var E = ir(O, b.timeouts.read),
                k = function () {
                  return cr(
                    b,
                    b.hosts.filter(function (I) {
                      return (I.accept & ke.Read) != 0;
                    }),
                    S,
                    E,
                  );
                };
              if ((E.cacheable !== void 0 ? E.cacheable : S.cacheable) !== !0) return k();
              var P = {
                request: S,
                mappedRequestOptions: E,
                transporter: { queryParameters: b.queryParameters, headers: b.headers },
              };
              return b.responsesCache.get(
                P,
                function () {
                  return b.requestsCache.get(P, function () {
                    return b.requestsCache
                      .set(P, k())
                      .then(
                        function (I) {
                          return Promise.all([b.requestsCache.delete(P), I]);
                        },
                        function (I) {
                          return Promise.all([b.requestsCache.delete(P), Promise.reject(I)]);
                        },
                      )
                      .then(function (I) {
                        var w = Ie(I, 2);
                        return w[0], w[1];
                      });
                  });
                },
                {
                  miss: function (I) {
                    return b.responsesCache.set(P, I);
                  },
                },
              );
            },
            write: function (S, O) {
              return cr(
                b,
                b.hosts.filter(function (E) {
                  return (E.accept & ke.Write) != 0;
                }),
                S,
                ir(O, b.timeouts.write),
              );
            },
          };
        return b;
      })(
        N(
          N(
            {
              hosts: [
                { url: "".concat(i, "-dsn.algolia.net"), accept: ke.Read },
                { url: "".concat(i, ".algolia.net"), accept: ke.Write },
              ].concat(
                Hi([
                  { url: "".concat(i, "-1.algolianet.com") },
                  { url: "".concat(i, "-2.algolianet.com") },
                  { url: "".concat(i, "-3.algolianet.com") },
                ]),
              ),
            },
            o,
          ),
          {},
          {
            headers: N(N({}, u.headers()), {}, { "content-type": "application/x-www-form-urlencoded" }, o.headers),
            queryParameters: N(N({}, u.queryParameters()), o.queryParameters),
          },
        ),
      ),
      l = {
        transporter: s,
        appId: i,
        addAlgoliaAgent: function (f, a) {
          s.userAgent.add({ segment: f, version: a });
        },
        clearCache: function () {
          return Promise.all([s.requestsCache.clear(), s.responsesCache.clear()]).then(function () {});
        },
      };
    return Fr(l, o.methods);
  })(
    N(
      N(N({}, r), n),
      {},
      {
        methods: {
          search: lr,
          searchForFacetValues: sr,
          multipleQueries: lr,
          multipleSearchForFacetValues: sr,
          customRequest: Bi,
          initIndex: function (o) {
            return function (i) {
              return Wr(o)(i, { methods: { search: Ki, searchForFacetValues: zr, findAnswers: Vi } });
            };
          },
        },
      },
    ),
  );
}
Jr.version = "4.19.1";
var Wi = ["footer", "searchBox"];
function zi(t) {
  var e = t.appId,
    n = t.apiKey,
    r = t.indexName,
    o = t.placeholder,
    i = o === void 0 ? "Search docs" : o,
    u = t.searchParameters,
    s = t.maxResultsPerGroup,
    l = t.onClose,
    f = l === void 0 ? Di : l,
    a = t.transformItems,
    h = a === void 0 ? rr : a,
    y = t.hitComponent,
    v = y === void 0 ? pi : y,
    d = t.resultsFooterComponent,
    p =
      d === void 0
        ? function () {
            return null;
          }
        : d,
    m = t.navigator,
    g = t.initialScrollY,
    _ = g === void 0 ? 0 : g,
    b = t.transformSearchClient,
    S = b === void 0 ? rr : b,
    O = t.disableUserPersonalization,
    E = O !== void 0 && O,
    k = t.initialQuery,
    P = k === void 0 ? "" : k,
    I = t.translations,
    w = I === void 0 ? {} : I,
    T = t.getMissingResultsUrl,
    M = t.insights,
    C = M !== void 0 && M,
    z = w.footer,
    ae = w.searchBox,
    at = de(w, Wi),
    ve = be(
      c.useState({
        query: "",
        collections: [],
        completion: null,
        context: {},
        isOpen: !1,
        activeItemId: null,
        status: "idle",
      }),
      2,
    ),
    H = ve[0],
    he = ve[1],
    J = c.useRef(null),
    Z = c.useRef(null),
    L = c.useRef(null),
    ne = c.useRef(null),
    $ = c.useRef(null),
    V = c.useRef(10),
    ce = c.useRef(typeof window < "u" ? window.getSelection().toString().slice(0, 64) : "").current,
    Q = c.useRef(P || ce).current,
    Se = (function (A, R, U) {
      return c.useMemo(
        function () {
          var W = Jr(A, R);
          return (
            W.addAlgoliaAgent("docsearch", "3.6.1"),
            /docsearch.js \(.*\)/.test(W.transporter.userAgent.value) === !1 &&
              W.addAlgoliaAgent("docsearch-react", "3.6.1"),
            U(W)
          );
        },
        [A, R, U],
      );
    })(e, n, S),
    ue = c.useRef(or({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(r), limit: 10 })).current,
    Y = c.useRef(
      or({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(r), limit: ue.getAll().length === 0 ? 7 : 4 }),
    ).current,
    G = c.useCallback(
      function (A) {
        if (!E) {
          var R = A.type === "content" ? A.__docsearch_parent : A;
          R &&
            ue.getAll().findIndex(function (U) {
              return U.objectID === R.objectID;
            }) === -1 &&
            Y.add(R);
        }
      },
      [ue, Y, E],
    ),
    ct = c.useCallback(
      function (A) {
        if (H.context.algoliaInsightsPlugin && A.__autocomplete_id) {
          var R = A,
            U = {
              eventName: "Item Selected",
              index: R.__autocomplete_indexName,
              items: [R],
              positions: [A.__autocomplete_id],
              queryID: R.__autocomplete_queryID,
            };
          H.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(U);
        }
      },
      [H.context.algoliaInsightsPlugin],
    ),
    le = c.useMemo(
      function () {
        return si({
          id: "docsearch",
          defaultActiveItemId: 0,
          placeholder: i,
          openOnFocus: !0,
          initialState: { query: Q, context: { searchSuggestions: [] } },
          insights: C,
          navigator: m,
          onStateChange: function (A) {
            he(A.state);
          },
          getSources: function (A) {
            var R = A.query,
              U = A.state,
              W = A.setContext,
              se = A.setStatus;
            if (!R)
              return E
                ? []
                : [
                    {
                      sourceId: "recentSearches",
                      onSelect: function (q) {
                        var X = q.item,
                          Ne = q.event;
                        G(X), gt(Ne) || f();
                      },
                      getItemUrl: function (q) {
                        return q.item.url;
                      },
                      getItems: function () {
                        return Y.getAll();
                      },
                    },
                    {
                      sourceId: "favoriteSearches",
                      onSelect: function (q) {
                        var X = q.item,
                          Ne = q.event;
                        G(X), gt(Ne) || f();
                      },
                      getItemUrl: function (q) {
                        return q.item.url;
                      },
                      getItems: function () {
                        return ue.getAll();
                      },
                    },
                  ];
            var fe = !!C;
            return Se.search([
              {
                query: R,
                indexName: r,
                params: Fe(
                  {
                    attributesToRetrieve: [
                      "hierarchy.lvl0",
                      "hierarchy.lvl1",
                      "hierarchy.lvl2",
                      "hierarchy.lvl3",
                      "hierarchy.lvl4",
                      "hierarchy.lvl5",
                      "hierarchy.lvl6",
                      "content",
                      "type",
                      "url",
                    ],
                    attributesToSnippet: [
                      "hierarchy.lvl1:".concat(V.current),
                      "hierarchy.lvl2:".concat(V.current),
                      "hierarchy.lvl3:".concat(V.current),
                      "hierarchy.lvl4:".concat(V.current),
                      "hierarchy.lvl5:".concat(V.current),
                      "hierarchy.lvl6:".concat(V.current),
                      "content:".concat(V.current),
                    ],
                    snippetEllipsisText: "…",
                    highlightPreTag: "<mark>",
                    highlightPostTag: "</mark>",
                    hitsPerPage: 20,
                    clickAnalytics: fe,
                  },
                  u,
                ),
              },
            ])
              .catch(function (q) {
                throw (q.name === "RetryError" && se("error"), q);
              })
              .then(function (q) {
                var X = q.results[0],
                  Ne = X.hits,
                  Qr = X.nbHits,
                  Dt = nr(
                    Ne,
                    function (kt) {
                      return Ur(kt);
                    },
                    s,
                  );
                U.context.searchSuggestions.length < Object.keys(Dt).length &&
                  W({ searchSuggestions: Object.keys(Dt) }),
                  W({ nbHits: Qr });
                var tn = {};
                return (
                  fe &&
                    (tn = {
                      __autocomplete_indexName: r,
                      __autocomplete_queryID: X.queryID,
                      __autocomplete_algoliaCredentials: { appId: e, apiKey: n },
                    }),
                  Object.values(Dt).map(function (kt, Yr) {
                    return {
                      sourceId: "hits".concat(Yr),
                      onSelect: function (re) {
                        var Te = re.item,
                          ut = re.event;
                        G(Te), gt(ut) || f();
                      },
                      getItemUrl: function (re) {
                        return re.item.url;
                      },
                      getItems: function () {
                        return Object.values(
                          nr(
                            kt,
                            function (re) {
                              return re.hierarchy.lvl1;
                            },
                            s,
                          ),
                        )
                          .map(h)
                          .map(function (re) {
                            return re.map(function (Te) {
                              var ut = null,
                                nn = re.find(function (rn) {
                                  return rn.type === "lvl1" && rn.hierarchy.lvl1 === Te.hierarchy.lvl1;
                                });
                              return (
                                Te.type !== "lvl1" && nn && (ut = nn),
                                Fe(Fe({}, Te), {}, { __docsearch_parent: ut }, tn)
                              );
                            });
                          })
                          .flat();
                      },
                    };
                  })
                );
              });
          },
        });
      },
      [r, u, s, Se, f, Y, ue, G, Q, i, m, h, E, C, e, n],
    ),
    $r = le.getEnvironmentProps,
    Zr = le.getRootProps,
    en = le.refresh;
  return (
    (function (A) {
      var R = A.getEnvironmentProps,
        U = A.panelElement,
        W = A.formElement,
        se = A.inputElement;
      c.useEffect(
        function () {
          if (U && W && se) {
            var fe = R({ panelElement: U, formElement: W, inputElement: se }),
              q = fe.onTouchStart,
              X = fe.onTouchMove;
            return (
              window.addEventListener("touchstart", q),
              window.addEventListener("touchmove", X),
              function () {
                window.removeEventListener("touchstart", q), window.removeEventListener("touchmove", X);
              }
            );
          }
        },
        [R, U, W, se],
      );
    })({ getEnvironmentProps: $r, panelElement: ne.current, formElement: L.current, inputElement: $.current }),
    (function (A) {
      var R = A.container;
      c.useEffect(
        function () {
          if (R) {
            var U = R.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"),
              W = U[0],
              se = U[U.length - 1];
            return (
              R.addEventListener("keydown", fe),
              function () {
                R.removeEventListener("keydown", fe);
              }
            );
          }
          function fe(q) {
            q.key === "Tab" &&
              (q.shiftKey
                ? document.activeElement === W && (q.preventDefault(), se.focus())
                : document.activeElement === se && (q.preventDefault(), W.focus()));
          }
        },
        [R],
      );
    })({ container: J.current }),
    c.useEffect(function () {
      return (
        document.body.classList.add("DocSearch--active"),
        function () {
          var A, R;
          document.body.classList.remove("DocSearch--active"),
            (A = (R = window).scrollTo) === null || A === void 0 || A.call(R, 0, _);
        }
      );
    }, []),
    c.useEffect(function () {
      window.matchMedia("(max-width: 768px)").matches && (V.current = 5);
    }, []),
    c.useEffect(
      function () {
        ne.current && (ne.current.scrollTop = 0);
      },
      [H.query],
    ),
    c.useEffect(
      function () {
        Q.length > 0 && (en(), $.current && $.current.focus());
      },
      [Q, en],
    ),
    c.useEffect(function () {
      function A() {
        if (Z.current) {
          var R = 0.01 * window.innerHeight;
          Z.current.style.setProperty("--docsearch-vh", "".concat(R, "px"));
        }
      }
      return (
        A(),
        window.addEventListener("resize", A),
        function () {
          window.removeEventListener("resize", A);
        }
      );
    }, []),
    c.createElement(
      "div",
      B({ ref: J }, Zr({ "aria-expanded": !0 }), {
        className: [
          "DocSearch",
          "DocSearch-Container",
          H.status === "stalled" && "DocSearch-Container--Stalled",
          H.status === "error" && "DocSearch-Container--Errored",
        ]
          .filter(Boolean)
          .join(" "),
        role: "button",
        tabIndex: 0,
        onMouseDown: function (A) {
          A.target === A.currentTarget && f();
        },
      }),
      c.createElement(
        "div",
        { className: "DocSearch-Modal", ref: Z },
        c.createElement(
          "header",
          { className: "DocSearch-SearchBar", ref: L },
          c.createElement(
            qi,
            B({}, le, {
              state: H,
              autoFocus: Q.length === 0,
              inputRef: $,
              isFromSelection: !!Q && Q === ce,
              translations: ae,
              onClose: f,
            }),
          ),
        ),
        c.createElement(
          "div",
          { className: "DocSearch-Dropdown", ref: ne },
          c.createElement(
            Ti,
            B({}, le, {
              indexName: r,
              state: H,
              hitComponent: v,
              resultsFooterComponent: p,
              disableUserPersonalization: E,
              recentSearches: Y,
              favoriteSearches: ue,
              inputRef: $,
              translations: at,
              getMissingResultsUrl: T,
              onItemClick: function (A, R) {
                ct(A), G(A), gt(R) || f();
              },
            }),
          ),
        ),
        c.createElement("footer", { className: "DocSearch-Footer" }, c.createElement(mi, { translations: z })),
      ),
    )
  );
}
function Ji(t) {
  var e,
    n,
    r = c.useRef(null),
    o = be(c.useState(!1), 2),
    i = o[0],
    u = o[1],
    s = be(c.useState(t?.initialQuery || void 0), 2),
    l = s[0],
    f = s[1],
    a = c.useCallback(
      function () {
        u(!0);
      },
      [u],
    ),
    h = c.useCallback(
      function () {
        u(!1);
      },
      [u],
    );
  return (
    (function (y) {
      var v = y.isOpen,
        d = y.onOpen,
        p = y.onClose,
        m = y.onInput,
        g = y.searchButtonRef;
      c.useEffect(
        function () {
          function _(b) {
            var S;
            ((b.keyCode === 27 && v) ||
              (((S = b.key) === null || S === void 0 ? void 0 : S.toLowerCase()) === "k" && (b.metaKey || b.ctrlKey)) ||
              (!(function (O) {
                var E = O.target,
                  k = E.tagName;
                return E.isContentEditable || k === "INPUT" || k === "SELECT" || k === "TEXTAREA";
              })(b) &&
                b.key === "/" &&
                !v)) &&
              (b.preventDefault(),
              v
                ? p()
                : document.body.classList.contains("DocSearch--active") ||
                  document.body.classList.contains("DocSearch--active") ||
                  d()),
              g &&
                g.current === document.activeElement &&
                m &&
                /[a-zA-Z0-9]/.test(String.fromCharCode(b.keyCode)) &&
                m(b);
          }
          return (
            window.addEventListener("keydown", _),
            function () {
              window.removeEventListener("keydown", _);
            }
          );
        },
        [v, d, p, m, g],
      );
    })({
      isOpen: i,
      onOpen: a,
      onClose: h,
      onInput: c.useCallback(
        function (y) {
          u(!0), f(y.key);
        },
        [u, f],
      ),
      searchButtonRef: r,
    }),
    c.createElement(
      c.Fragment,
      null,
      c.createElement(Do, {
        ref: r,
        translations: t == null || (e = t.translations) === null || e === void 0 ? void 0 : e.button,
        onClick: a,
      }),
      i &&
        Ir(
          c.createElement(
            zi,
            B({}, t, {
              initialScrollY: window.scrollY,
              initialQuery: l,
              translations: t == null || (n = t.translations) === null || n === void 0 ? void 0 : n.modal,
              onClose: h,
            }),
          ),
          document.body,
        ),
    )
  );
}
function $i(t) {
  kr(
    c.createElement(
      Ji,
      Mt({}, t, {
        transformSearchClient: function (e) {
          return e.addAlgoliaAgent("docsearch.js", "3.6.1"), t.transformSearchClient ? t.transformSearchClient(e) : e;
        },
      }),
    ),
    (function (e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window;
      return typeof e == "string" ? n.document.querySelector(e) : e;
    })(t.container, t.environment),
  );
}
function Zi(t) {
  let e;
  return {
    c() {
      (e = to("div")), this.h();
    },
    l(n) {
      (e = no(n, "DIV", { id: !0 })), ro(e).forEach(on), this.h();
    },
    h() {
      an(e, "id", t[0]);
    },
    m(n, r) {
      oo(n, e, r);
    },
    p(n, [r]) {
      r & 1 && an(e, "id", n[0]);
    },
    i: cn,
    o: cn,
    d(n) {
      n && on(e);
    },
  };
}
function Qi(t, e, n) {
  let { id: r = "" } = e;
  return (
    io(() => {
      $i({
        container: "#" + r,
        appId: "01BY3A8NRJ",
        indexName: "nf-co",
        apiKey: "c726615ab69f88b4e26bc891c97c1808",
        placeholder: "Search",
      });
    }),
    (t.$$set = (o) => {
      "id" in o && n(0, (r = o.id));
    }),
    [r]
  );
}
class Xi extends Gr {
  constructor(e) {
    super(), Xr(this, e, Qi, Zi, eo, { id: 0 });
  }
}
export { Xi as default };
