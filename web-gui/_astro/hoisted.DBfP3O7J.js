import { c as Zr, a as Jr } from "./_commonjsHelpers.C4iS2aBk.js";
var Es = { exports: {} };
/*!
 * Bootstrap v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ (function (a, l) {
  (function (d, g) {
    a.exports = g();
  })(Zr, function () {
    const d = new Map(),
      g = {
        set(n, e, t) {
          d.has(n) || d.set(n, new Map());
          const i = d.get(n);
          i.has(e) || i.size === 0
            ? i.set(e, t)
            : console.error(
                `Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`,
              );
        },
        get: (n, e) => (d.has(n) && d.get(n).get(e)) || null,
        remove(n, e) {
          if (!d.has(n)) return;
          const t = d.get(n);
          t.delete(e), t.size === 0 && d.delete(n);
        },
      },
      v = "transitionend",
      I = (n) => (
        n && window.CSS && window.CSS.escape && (n = n.replace(/#([^\s"#']+)/g, (e, t) => `#${CSS.escape(t)}`)), n
      ),
      B = (n) => {
        n.dispatchEvent(new Event(v));
      },
      x = (n) => !(!n || typeof n != "object") && (n.jquery !== void 0 && (n = n[0]), n.nodeType !== void 0),
      M = (n) =>
        x(n) ? (n.jquery ? n[0] : n) : typeof n == "string" && n.length > 0 ? document.querySelector(I(n)) : null,
      F = (n) => {
        if (!x(n) || n.getClientRects().length === 0) return !1;
        const e = getComputedStyle(n).getPropertyValue("visibility") === "visible",
          t = n.closest("details:not([open])");
        if (!t) return e;
        if (t !== n) {
          const i = n.closest("summary");
          if ((i && i.parentNode !== t) || i === null) return !1;
        }
        return e;
      },
      P = (n) =>
        !n ||
        n.nodeType !== Node.ELEMENT_NODE ||
        !!n.classList.contains("disabled") ||
        (n.disabled !== void 0 ? n.disabled : n.hasAttribute("disabled") && n.getAttribute("disabled") !== "false"),
      k = (n) => {
        if (!document.documentElement.attachShadow) return null;
        if (typeof n.getRootNode == "function") {
          const e = n.getRootNode();
          return e instanceof ShadowRoot ? e : null;
        }
        return n instanceof ShadowRoot ? n : n.parentNode ? k(n.parentNode) : null;
      },
      Q = () => {},
      V = (n) => {
        n.offsetHeight;
      },
      G = () => (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null),
      Ce = [],
      q = () => document.documentElement.dir === "rtl",
      ie = (n) => {
        var e;
        (e = () => {
          const t = G();
          if (t) {
            const i = n.NAME,
              s = t.fn[i];
            (t.fn[i] = n.jQueryInterface),
              (t.fn[i].Constructor = n),
              (t.fn[i].noConflict = () => ((t.fn[i] = s), n.jQueryInterface));
          }
        }),
          document.readyState === "loading"
            ? (Ce.length ||
                document.addEventListener("DOMContentLoaded", () => {
                  for (const t of Ce) t();
                }),
              Ce.push(e))
            : e();
      },
      Z = (n, e = [], t = n) => (typeof n == "function" ? n(...e) : t),
      kn = (n, e, t = !0) => {
        if (!t) return void Z(n);
        const i =
          ((r) => {
            if (!r) return 0;
            let { transitionDuration: c, transitionDelay: h } = window.getComputedStyle(r);
            const p = Number.parseFloat(c),
              m = Number.parseFloat(h);
            return p || m
              ? ((c = c.split(",")[0]), (h = h.split(",")[0]), 1e3 * (Number.parseFloat(c) + Number.parseFloat(h)))
              : 0;
          })(e) + 5;
        let s = !1;
        const o = ({ target: r }) => {
          r === e && ((s = !0), e.removeEventListener(v, o), Z(n));
        };
        e.addEventListener(v, o),
          setTimeout(() => {
            s || B(e);
          }, i);
      },
      jt = (n, e, t, i) => {
        const s = n.length;
        let o = n.indexOf(e);
        return o === -1
          ? !t && i
            ? n[s - 1]
            : n[0]
          : ((o += t ? 1 : -1), i && (o = (o + s) % s), n[Math.max(0, Math.min(o, s - 1))]);
      },
      Ds = /[^.]*(?=\..*)\.|.*/,
      Is = /\..*/,
      Ps = /::\d+$/,
      Rt = {};
    let Sn = 1;
    const Ln = { mouseenter: "mouseover", mouseleave: "mouseout" },
      $s = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ]);
    function Dn(n, e) {
      return (e && `${e}::${Sn++}`) || n.uidEvent || Sn++;
    }
    function In(n) {
      const e = Dn(n);
      return (n.uidEvent = e), (Rt[e] = Rt[e] || {}), Rt[e];
    }
    function Pn(n, e, t = null) {
      return Object.values(n).find((i) => i.callable === e && i.delegationSelector === t);
    }
    function $n(n, e, t) {
      const i = typeof e == "string",
        s = i ? t : e || t;
      let o = Mn(n);
      return $s.has(o) || (o = n), [i, s, o];
    }
    function Nn(n, e, t, i, s) {
      if (typeof e != "string" || !n) return;
      let [o, r, c] = $n(e, t, i);
      e in Ln &&
        (r = ((w) =>
          function (y) {
            if (
              !y.relatedTarget ||
              (y.relatedTarget !== y.delegateTarget && !y.delegateTarget.contains(y.relatedTarget))
            )
              return w.call(this, y);
          })(r));
      const h = In(n),
        p = h[c] || (h[c] = {}),
        m = Pn(p, r, o ? t : null);
      if (m) return void (m.oneOff = m.oneOff && s);
      const f = Dn(r, e.replace(Ds, "")),
        E = o
          ? (function (b, w, y) {
              return function A($) {
                const R = b.querySelectorAll(w);
                for (let { target: C } = $; C && C !== this; C = C.parentNode)
                  for (const S of R)
                    if (S === C)
                      return Ht($, { delegateTarget: C }), A.oneOff && u.off(b, $.type, w, y), y.apply(C, [$]);
              };
            })(n, t, r)
          : (function (b, w) {
              return function y(A) {
                return Ht(A, { delegateTarget: b }), y.oneOff && u.off(b, A.type, w), w.apply(b, [A]);
              };
            })(n, r);
      (E.delegationSelector = o ? t : null),
        (E.callable = r),
        (E.oneOff = s),
        (E.uidEvent = f),
        (p[f] = E),
        n.addEventListener(c, E, o);
    }
    function Ft(n, e, t, i, s) {
      const o = Pn(e[t], i, s);
      o && (n.removeEventListener(t, o, !!s), delete e[t][o.uidEvent]);
    }
    function Ns(n, e, t, i) {
      const s = e[t] || {};
      for (const [o, r] of Object.entries(s)) o.includes(i) && Ft(n, e, t, r.callable, r.delegationSelector);
    }
    function Mn(n) {
      return (n = n.replace(Is, "")), Ln[n] || n;
    }
    const u = {
      on(n, e, t, i) {
        Nn(n, e, t, i, !1);
      },
      one(n, e, t, i) {
        Nn(n, e, t, i, !0);
      },
      off(n, e, t, i) {
        if (typeof e != "string" || !n) return;
        const [s, o, r] = $n(e, t, i),
          c = r !== e,
          h = In(n),
          p = h[r] || {},
          m = e.startsWith(".");
        if (o === void 0) {
          if (m) for (const f of Object.keys(h)) Ns(n, h, f, e.slice(1));
          for (const [f, E] of Object.entries(p)) {
            const b = f.replace(Ps, "");
            (c && !e.includes(b)) || Ft(n, h, r, E.callable, E.delegationSelector);
          }
        } else {
          if (!Object.keys(p).length) return;
          Ft(n, h, r, o, s ? t : null);
        }
      },
      trigger(n, e, t) {
        if (typeof e != "string" || !n) return null;
        const i = G();
        let s = null,
          o = !0,
          r = !0,
          c = !1;
        e !== Mn(e) &&
          i &&
          ((s = i.Event(e, t)),
          i(n).trigger(s),
          (o = !s.isPropagationStopped()),
          (r = !s.isImmediatePropagationStopped()),
          (c = s.isDefaultPrevented()));
        const h = Ht(new Event(e, { bubbles: o, cancelable: !0 }), t);
        return c && h.preventDefault(), r && n.dispatchEvent(h), h.defaultPrevented && s && s.preventDefault(), h;
      },
    };
    function Ht(n, e = {}) {
      for (const [t, i] of Object.entries(e))
        try {
          n[t] = i;
        } catch {
          Object.defineProperty(n, t, { configurable: !0, get: () => i });
        }
      return n;
    }
    function jn(n) {
      if (n === "true") return !0;
      if (n === "false") return !1;
      if (n === Number(n).toString()) return Number(n);
      if (n === "" || n === "null") return null;
      if (typeof n != "string") return n;
      try {
        return JSON.parse(decodeURIComponent(n));
      } catch {
        return n;
      }
    }
    function Wt(n) {
      return n.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
    }
    const _e = {
      setDataAttribute(n, e, t) {
        n.setAttribute(`data-bs-${Wt(e)}`, t);
      },
      removeDataAttribute(n, e) {
        n.removeAttribute(`data-bs-${Wt(e)}`);
      },
      getDataAttributes(n) {
        if (!n) return {};
        const e = {},
          t = Object.keys(n.dataset).filter((i) => i.startsWith("bs") && !i.startsWith("bsConfig"));
        for (const i of t) {
          let s = i.replace(/^bs/, "");
          (s = s.charAt(0).toLowerCase() + s.slice(1, s.length)), (e[s] = jn(n.dataset[i]));
        }
        return e;
      },
      getDataAttribute: (n, e) => jn(n.getAttribute(`data-bs-${Wt(e)}`)),
    };
    class tt {
      static get Default() {
        return {};
      }
      static get DefaultType() {
        return {};
      }
      static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
      _getConfig(e) {
        return (e = this._mergeConfigObj(e)), (e = this._configAfterMerge(e)), this._typeCheckConfig(e), e;
      }
      _configAfterMerge(e) {
        return e;
      }
      _mergeConfigObj(e, t) {
        const i = x(t) ? _e.getDataAttribute(t, "config") : {};
        return {
          ...this.constructor.Default,
          ...(typeof i == "object" ? i : {}),
          ...(x(t) ? _e.getDataAttributes(t) : {}),
          ...(typeof e == "object" ? e : {}),
        };
      }
      _typeCheckConfig(e, t = this.constructor.DefaultType) {
        for (const [s, o] of Object.entries(t)) {
          const r = e[s],
            c = x(r)
              ? "element"
              : (i = r) == null
                ? `${i}`
                : Object.prototype.toString
                    .call(i)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          if (!new RegExp(o).test(c))
            throw new TypeError(
              `${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${c}" but expected type "${o}".`,
            );
        }
        var i;
      }
    }
    class ue extends tt {
      constructor(e, t) {
        super(),
          (e = M(e)) &&
            ((this._element = e),
            (this._config = this._getConfig(t)),
            g.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        g.remove(this._element, this.constructor.DATA_KEY), u.off(this._element, this.constructor.EVENT_KEY);
        for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
      }
      _queueCallback(e, t, i = !0) {
        kn(e, t, i);
      }
      _getConfig(e) {
        return (
          (e = this._mergeConfigObj(e, this._element)), (e = this._configAfterMerge(e)), this._typeCheckConfig(e), e
        );
      }
      static getInstance(e) {
        return g.get(M(e), this.DATA_KEY);
      }
      static getOrCreateInstance(e, t = {}) {
        return this.getInstance(e) || new this(e, typeof t == "object" ? t : null);
      }
      static get VERSION() {
        return "5.3.3";
      }
      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
      static eventName(e) {
        return `${e}${this.EVENT_KEY}`;
      }
    }
    const Bt = (n) => {
        let e = n.getAttribute("data-bs-target");
        if (!e || e === "#") {
          let t = n.getAttribute("href");
          if (!t || (!t.includes("#") && !t.startsWith("."))) return null;
          t.includes("#") && !t.startsWith("#") && (t = `#${t.split("#")[1]}`), (e = t && t !== "#" ? t.trim() : null);
        }
        return e
          ? e
              .split(",")
              .map((t) => I(t))
              .join(",")
          : null;
      },
      _ = {
        find: (n, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, n)),
        findOne: (n, e = document.documentElement) => Element.prototype.querySelector.call(e, n),
        children: (n, e) => [].concat(...n.children).filter((t) => t.matches(e)),
        parents(n, e) {
          const t = [];
          let i = n.parentNode.closest(e);
          for (; i; ) t.push(i), (i = i.parentNode.closest(e));
          return t;
        },
        prev(n, e) {
          let t = n.previousElementSibling;
          for (; t; ) {
            if (t.matches(e)) return [t];
            t = t.previousElementSibling;
          }
          return [];
        },
        next(n, e) {
          let t = n.nextElementSibling;
          for (; t; ) {
            if (t.matches(e)) return [t];
            t = t.nextElementSibling;
          }
          return [];
        },
        focusableChildren(n) {
          const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]']
            .map((t) => `${t}:not([tabindex^="-"])`)
            .join(",");
          return this.find(e, n).filter((t) => !P(t) && F(t));
        },
        getSelectorFromElement(n) {
          const e = Bt(n);
          return e && _.findOne(e) ? e : null;
        },
        getElementFromSelector(n) {
          const e = Bt(n);
          return e ? _.findOne(e) : null;
        },
        getMultipleElementsFromSelector(n) {
          const e = Bt(n);
          return e ? _.find(e) : [];
        },
      },
      ft = (n, e = "hide") => {
        const t = `click.dismiss${n.EVENT_KEY}`,
          i = n.NAME;
        u.on(document, t, `[data-bs-dismiss="${i}"]`, function (s) {
          if ((["A", "AREA"].includes(this.tagName) && s.preventDefault(), P(this))) return;
          const o = _.getElementFromSelector(this) || this.closest(`.${i}`);
          n.getOrCreateInstance(o)[e]();
        });
      },
      Rn = ".bs.alert",
      Ms = `close${Rn}`,
      js = `closed${Rn}`;
    class nt extends ue {
      static get NAME() {
        return "alert";
      }
      close() {
        if (u.trigger(this._element, Ms).defaultPrevented) return;
        this._element.classList.remove("show");
        const e = this._element.classList.contains("fade");
        this._queueCallback(() => this._destroyElement(), this._element, e);
      }
      _destroyElement() {
        this._element.remove(), u.trigger(this._element, js), this.dispose();
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = nt.getOrCreateInstance(this);
          if (typeof e == "string") {
            if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
              throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    ft(nt, "close"), ie(nt);
    const Fn = '[data-bs-toggle="button"]';
    class it extends ue {
      static get NAME() {
        return "button";
      }
      toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = it.getOrCreateInstance(this);
          e === "toggle" && t[e]();
        });
      }
    }
    u.on(document, "click.bs.button.data-api", Fn, (n) => {
      n.preventDefault();
      const e = n.target.closest(Fn);
      it.getOrCreateInstance(e).toggle();
    }),
      ie(it);
    const Re = ".bs.swipe",
      Rs = `touchstart${Re}`,
      Fs = `touchmove${Re}`,
      Hs = `touchend${Re}`,
      Ws = `pointerdown${Re}`,
      Bs = `pointerup${Re}`,
      qs = { endCallback: null, leftCallback: null, rightCallback: null },
      zs = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
    class pt extends tt {
      constructor(e, t) {
        super(),
          (this._element = e),
          e &&
            pt.isSupported() &&
            ((this._config = this._getConfig(t)),
            (this._deltaX = 0),
            (this._supportPointerEvents = !!window.PointerEvent),
            this._initEvents());
      }
      static get Default() {
        return qs;
      }
      static get DefaultType() {
        return zs;
      }
      static get NAME() {
        return "swipe";
      }
      dispose() {
        u.off(this._element, Re);
      }
      _start(e) {
        this._supportPointerEvents
          ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX)
          : (this._deltaX = e.touches[0].clientX);
      }
      _end(e) {
        this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX),
          this._handleSwipe(),
          Z(this._config.endCallback);
      }
      _move(e) {
        this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        const e = Math.abs(this._deltaX);
        if (e <= 40) return;
        const t = e / this._deltaX;
        (this._deltaX = 0), t && Z(t > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
      _initEvents() {
        this._supportPointerEvents
          ? (u.on(this._element, Ws, (e) => this._start(e)),
            u.on(this._element, Bs, (e) => this._end(e)),
            this._element.classList.add("pointer-event"))
          : (u.on(this._element, Rs, (e) => this._start(e)),
            u.on(this._element, Fs, (e) => this._move(e)),
            u.on(this._element, Hs, (e) => this._end(e)));
      }
      _eventIsPointerPenTouch(e) {
        return this._supportPointerEvents && (e.pointerType === "pen" || e.pointerType === "touch");
      }
      static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }
    const we = ".bs.carousel",
      Hn = ".data-api",
      st = "next",
      Fe = "prev",
      He = "left",
      mt = "right",
      Vs = `slide${we}`,
      qt = `slid${we}`,
      Xs = `keydown${we}`,
      Ys = `mouseenter${we}`,
      Us = `mouseleave${we}`,
      Ks = `dragstart${we}`,
      Qs = `load${we}${Hn}`,
      Gs = `click${we}${Hn}`,
      Wn = "carousel",
      gt = "active",
      Bn = ".active",
      qn = ".carousel-item",
      Zs = Bn + qn,
      Js = { ArrowLeft: mt, ArrowRight: He },
      eo = { interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0 },
      to = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean",
      };
    class We extends ue {
      constructor(e, t) {
        super(e, t),
          (this._interval = null),
          (this._activeElement = null),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this._swipeHelper = null),
          (this._indicatorsElement = _.findOne(".carousel-indicators", this._element)),
          this._addEventListeners(),
          this._config.ride === Wn && this.cycle();
      }
      static get Default() {
        return eo;
      }
      static get DefaultType() {
        return to;
      }
      static get NAME() {
        return "carousel";
      }
      next() {
        this._slide(st);
      }
      nextWhenVisible() {
        !document.hidden && F(this._element) && this.next();
      }
      prev() {
        this._slide(Fe);
      }
      pause() {
        this._isSliding && B(this._element), this._clearInterval();
      }
      cycle() {
        this._clearInterval(),
          this._updateInterval(),
          (this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval));
      }
      _maybeEnableCycle() {
        this._config.ride && (this._isSliding ? u.one(this._element, qt, () => this.cycle()) : this.cycle());
      }
      to(e) {
        const t = this._getItems();
        if (e > t.length - 1 || e < 0) return;
        if (this._isSliding) return void u.one(this._element, qt, () => this.to(e));
        const i = this._getItemIndex(this._getActive());
        if (i === e) return;
        const s = e > i ? st : Fe;
        this._slide(s, t[e]);
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
      }
      _configAfterMerge(e) {
        return (e.defaultInterval = e.interval), e;
      }
      _addEventListeners() {
        this._config.keyboard && u.on(this._element, Xs, (e) => this._keydown(e)),
          this._config.pause === "hover" &&
            (u.on(this._element, Ys, () => this.pause()), u.on(this._element, Us, () => this._maybeEnableCycle())),
          this._config.touch && pt.isSupported() && this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        for (const t of _.find(".carousel-item img", this._element)) u.on(t, Ks, (i) => i.preventDefault());
        const e = {
          leftCallback: () => this._slide(this._directionToOrder(He)),
          rightCallback: () => this._slide(this._directionToOrder(mt)),
          endCallback: () => {
            this._config.pause === "hover" &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval)));
          },
        };
        this._swipeHelper = new pt(this._element, e);
      }
      _keydown(e) {
        if (/input|textarea/i.test(e.target.tagName)) return;
        const t = Js[e.key];
        t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
      }
      _getItemIndex(e) {
        return this._getItems().indexOf(e);
      }
      _setActiveIndicatorElement(e) {
        if (!this._indicatorsElement) return;
        const t = _.findOne(Bn, this._indicatorsElement);
        t.classList.remove(gt), t.removeAttribute("aria-current");
        const i = _.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
        i && (i.classList.add(gt), i.setAttribute("aria-current", "true"));
      }
      _updateInterval() {
        const e = this._activeElement || this._getActive();
        if (!e) return;
        const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
        this._config.interval = t || this._config.defaultInterval;
      }
      _slide(e, t = null) {
        if (this._isSliding) return;
        const i = this._getActive(),
          s = e === st,
          o = t || jt(this._getItems(), i, s, this._config.wrap);
        if (o === i) return;
        const r = this._getItemIndex(o),
          c = (f) =>
            u.trigger(this._element, f, {
              relatedTarget: o,
              direction: this._orderToDirection(e),
              from: this._getItemIndex(i),
              to: r,
            });
        if (c(Vs).defaultPrevented || !i || !o) return;
        const h = !!this._interval;
        this.pause(), (this._isSliding = !0), this._setActiveIndicatorElement(r), (this._activeElement = o);
        const p = s ? "carousel-item-start" : "carousel-item-end",
          m = s ? "carousel-item-next" : "carousel-item-prev";
        o.classList.add(m),
          V(o),
          i.classList.add(p),
          o.classList.add(p),
          this._queueCallback(
            () => {
              o.classList.remove(p, m),
                o.classList.add(gt),
                i.classList.remove(gt, m, p),
                (this._isSliding = !1),
                c(qt);
            },
            i,
            this._isAnimated(),
          ),
          h && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains("slide");
      }
      _getActive() {
        return _.findOne(Zs, this._element);
      }
      _getItems() {
        return _.find(qn, this._element);
      }
      _clearInterval() {
        this._interval && (clearInterval(this._interval), (this._interval = null));
      }
      _directionToOrder(e) {
        return q() ? (e === He ? Fe : st) : e === He ? st : Fe;
      }
      _orderToDirection(e) {
        return q() ? (e === Fe ? He : mt) : e === Fe ? mt : He;
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = We.getOrCreateInstance(this, e);
          if (typeof e != "number") {
            if (typeof e == "string") {
              if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          } else t.to(e);
        });
      }
    }
    u.on(document, Gs, "[data-bs-slide], [data-bs-slide-to]", function (n) {
      const e = _.getElementFromSelector(this);
      if (!e || !e.classList.contains(Wn)) return;
      n.preventDefault();
      const t = We.getOrCreateInstance(e),
        i = this.getAttribute("data-bs-slide-to");
      return i
        ? (t.to(i), void t._maybeEnableCycle())
        : _e.getDataAttribute(this, "slide") === "next"
          ? (t.next(), void t._maybeEnableCycle())
          : (t.prev(), void t._maybeEnableCycle());
    }),
      u.on(window, Qs, () => {
        const n = _.find('[data-bs-ride="carousel"]');
        for (const e of n) We.getOrCreateInstance(e);
      }),
      ie(We);
    const ot = ".bs.collapse",
      no = `show${ot}`,
      io = `shown${ot}`,
      so = `hide${ot}`,
      oo = `hidden${ot}`,
      ro = `click${ot}.data-api`,
      zt = "show",
      Be = "collapse",
      _t = "collapsing",
      ao = `:scope .${Be} .${Be}`,
      Vt = '[data-bs-toggle="collapse"]',
      lo = { parent: null, toggle: !0 },
      co = { parent: "(null|element)", toggle: "boolean" };
    class qe extends ue {
      constructor(e, t) {
        super(e, t), (this._isTransitioning = !1), (this._triggerArray = []);
        const i = _.find(Vt);
        for (const s of i) {
          const o = _.getSelectorFromElement(s),
            r = _.find(o).filter((c) => c === this._element);
          o !== null && r.length && this._triggerArray.push(s);
        }
        this._initializeChildren(),
          this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
          this._config.toggle && this.toggle();
      }
      static get Default() {
        return lo;
      }
      static get DefaultType() {
        return co;
      }
      static get NAME() {
        return "collapse";
      }
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown()) return;
        let e = [];
        if (
          (this._config.parent &&
            (e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing")
              .filter((s) => s !== this._element)
              .map((s) => qe.getOrCreateInstance(s, { toggle: !1 }))),
          (e.length && e[0]._isTransitioning) || u.trigger(this._element, no).defaultPrevented)
        )
          return;
        for (const s of e) s.hide();
        const t = this._getDimension();
        this._element.classList.remove(Be),
          this._element.classList.add(_t),
          (this._element.style[t] = 0),
          this._addAriaAndCollapsedClass(this._triggerArray, !0),
          (this._isTransitioning = !0);
        const i = `scroll${t[0].toUpperCase() + t.slice(1)}`;
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(_t),
              this._element.classList.add(Be, zt),
              (this._element.style[t] = ""),
              u.trigger(this._element, io);
          },
          this._element,
          !0,
        ),
          (this._element.style[t] = `${this._element[i]}px`);
      }
      hide() {
        if (this._isTransitioning || !this._isShown() || u.trigger(this._element, so).defaultPrevented) return;
        const e = this._getDimension();
        (this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`),
          V(this._element),
          this._element.classList.add(_t),
          this._element.classList.remove(Be, zt);
        for (const t of this._triggerArray) {
          const i = _.getElementFromSelector(t);
          i && !this._isShown(i) && this._addAriaAndCollapsedClass([t], !1);
        }
        (this._isTransitioning = !0),
          (this._element.style[e] = ""),
          this._queueCallback(
            () => {
              (this._isTransitioning = !1),
                this._element.classList.remove(_t),
                this._element.classList.add(Be),
                u.trigger(this._element, oo);
            },
            this._element,
            !0,
          );
      }
      _isShown(e = this._element) {
        return e.classList.contains(zt);
      }
      _configAfterMerge(e) {
        return (e.toggle = !!e.toggle), (e.parent = M(e.parent)), e;
      }
      _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
      }
      _initializeChildren() {
        if (!this._config.parent) return;
        const e = this._getFirstLevelChildren(Vt);
        for (const t of e) {
          const i = _.getElementFromSelector(t);
          i && this._addAriaAndCollapsedClass([t], this._isShown(i));
        }
      }
      _getFirstLevelChildren(e) {
        const t = _.find(ao, this._config.parent);
        return _.find(e, this._config.parent).filter((i) => !t.includes(i));
      }
      _addAriaAndCollapsedClass(e, t) {
        if (e.length) for (const i of e) i.classList.toggle("collapsed", !t), i.setAttribute("aria-expanded", t);
      }
      static jQueryInterface(e) {
        const t = {};
        return (
          typeof e == "string" && /show|hide/.test(e) && (t.toggle = !1),
          this.each(function () {
            const i = qe.getOrCreateInstance(this, t);
            if (typeof e == "string") {
              if (i[e] === void 0) throw new TypeError(`No method named "${e}"`);
              i[e]();
            }
          })
        );
      }
    }
    u.on(document, ro, Vt, function (n) {
      (n.target.tagName === "A" || (n.delegateTarget && n.delegateTarget.tagName === "A")) && n.preventDefault();
      for (const e of _.getMultipleElementsFromSelector(this)) qe.getOrCreateInstance(e, { toggle: !1 }).toggle();
    }),
      ie(qe);
    var X = "top",
      J = "bottom",
      ee = "right",
      Y = "left",
      bt = "auto",
      ze = [X, J, ee, Y],
      xe = "start",
      Ve = "end",
      zn = "clippingParents",
      Xt = "viewport",
      Xe = "popper",
      Vn = "reference",
      Yt = ze.reduce(function (n, e) {
        return n.concat([e + "-" + xe, e + "-" + Ve]);
      }, []),
      Ut = [].concat(ze, [bt]).reduce(function (n, e) {
        return n.concat([e, e + "-" + xe, e + "-" + Ve]);
      }, []),
      Xn = "beforeRead",
      Yn = "read",
      Un = "afterRead",
      Kn = "beforeMain",
      Qn = "main",
      Gn = "afterMain",
      Zn = "beforeWrite",
      Jn = "write",
      ei = "afterWrite",
      ti = [Xn, Yn, Un, Kn, Qn, Gn, Zn, Jn, ei];
    function fe(n) {
      return n ? (n.nodeName || "").toLowerCase() : null;
    }
    function te(n) {
      if (n == null) return window;
      if (n.toString() !== "[object Window]") {
        var e = n.ownerDocument;
        return (e && e.defaultView) || window;
      }
      return n;
    }
    function Oe(n) {
      return n instanceof te(n).Element || n instanceof Element;
    }
    function se(n) {
      return n instanceof te(n).HTMLElement || n instanceof HTMLElement;
    }
    function Kt(n) {
      return typeof ShadowRoot < "u" && (n instanceof te(n).ShadowRoot || n instanceof ShadowRoot);
    }
    const Qt = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (n) {
        var e = n.state;
        Object.keys(e.elements).forEach(function (t) {
          var i = e.styles[t] || {},
            s = e.attributes[t] || {},
            o = e.elements[t];
          se(o) &&
            fe(o) &&
            (Object.assign(o.style, i),
            Object.keys(s).forEach(function (r) {
              var c = s[r];
              c === !1 ? o.removeAttribute(r) : o.setAttribute(r, c === !0 ? "" : c);
            }));
        });
      },
      effect: function (n) {
        var e = n.state,
          t = {
            popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(e.elements.popper.style, t.popper),
          (e.styles = t),
          e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow),
          function () {
            Object.keys(e.elements).forEach(function (i) {
              var s = e.elements[i],
                o = e.attributes[i] || {},
                r = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : t[i]).reduce(function (c, h) {
                  return (c[h] = ""), c;
                }, {});
              se(s) &&
                fe(s) &&
                (Object.assign(s.style, r),
                Object.keys(o).forEach(function (c) {
                  s.removeAttribute(c);
                }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    };
    function pe(n) {
      return n.split("-")[0];
    }
    var ke = Math.max,
      vt = Math.min,
      Ye = Math.round;
    function Gt() {
      var n = navigator.userAgentData;
      return n != null && n.brands && Array.isArray(n.brands)
        ? n.brands
            .map(function (e) {
              return e.brand + "/" + e.version;
            })
            .join(" ")
        : navigator.userAgent;
    }
    function ni() {
      return !/^((?!chrome|android).)*safari/i.test(Gt());
    }
    function Ue(n, e, t) {
      e === void 0 && (e = !1), t === void 0 && (t = !1);
      var i = n.getBoundingClientRect(),
        s = 1,
        o = 1;
      e &&
        se(n) &&
        ((s = (n.offsetWidth > 0 && Ye(i.width) / n.offsetWidth) || 1),
        (o = (n.offsetHeight > 0 && Ye(i.height) / n.offsetHeight) || 1));
      var r = (Oe(n) ? te(n) : window).visualViewport,
        c = !ni() && t,
        h = (i.left + (c && r ? r.offsetLeft : 0)) / s,
        p = (i.top + (c && r ? r.offsetTop : 0)) / o,
        m = i.width / s,
        f = i.height / o;
      return { width: m, height: f, top: p, right: h + m, bottom: p + f, left: h, x: h, y: p };
    }
    function Zt(n) {
      var e = Ue(n),
        t = n.offsetWidth,
        i = n.offsetHeight;
      return (
        Math.abs(e.width - t) <= 1 && (t = e.width),
        Math.abs(e.height - i) <= 1 && (i = e.height),
        { x: n.offsetLeft, y: n.offsetTop, width: t, height: i }
      );
    }
    function ii(n, e) {
      var t = e.getRootNode && e.getRootNode();
      if (n.contains(e)) return !0;
      if (t && Kt(t)) {
        var i = e;
        do {
          if (i && n.isSameNode(i)) return !0;
          i = i.parentNode || i.host;
        } while (i);
      }
      return !1;
    }
    function be(n) {
      return te(n).getComputedStyle(n);
    }
    function uo(n) {
      return ["table", "td", "th"].indexOf(fe(n)) >= 0;
    }
    function Ae(n) {
      return ((Oe(n) ? n.ownerDocument : n.document) || window.document).documentElement;
    }
    function yt(n) {
      return fe(n) === "html" ? n : n.assignedSlot || n.parentNode || (Kt(n) ? n.host : null) || Ae(n);
    }
    function si(n) {
      return se(n) && be(n).position !== "fixed" ? n.offsetParent : null;
    }
    function rt(n) {
      for (var e = te(n), t = si(n); t && uo(t) && be(t).position === "static"; ) t = si(t);
      return t && (fe(t) === "html" || (fe(t) === "body" && be(t).position === "static"))
        ? e
        : t ||
            (function (i) {
              var s = /firefox/i.test(Gt());
              if (/Trident/i.test(Gt()) && se(i) && be(i).position === "fixed") return null;
              var o = yt(i);
              for (Kt(o) && (o = o.host); se(o) && ["html", "body"].indexOf(fe(o)) < 0; ) {
                var r = be(o);
                if (
                  r.transform !== "none" ||
                  r.perspective !== "none" ||
                  r.contain === "paint" ||
                  ["transform", "perspective"].indexOf(r.willChange) !== -1 ||
                  (s && r.willChange === "filter") ||
                  (s && r.filter && r.filter !== "none")
                )
                  return o;
                o = o.parentNode;
              }
              return null;
            })(n) ||
            e;
    }
    function Jt(n) {
      return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
    }
    function at(n, e, t) {
      return ke(n, vt(e, t));
    }
    function oi(n) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, n);
    }
    function ri(n, e) {
      return e.reduce(function (t, i) {
        return (t[i] = n), t;
      }, {});
    }
    const ai = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (n) {
        var e,
          t = n.state,
          i = n.name,
          s = n.options,
          o = t.elements.arrow,
          r = t.modifiersData.popperOffsets,
          c = pe(t.placement),
          h = Jt(c),
          p = [Y, ee].indexOf(c) >= 0 ? "height" : "width";
        if (o && r) {
          var m = (function (N, D) {
              return oi(
                typeof (N = typeof N == "function" ? N(Object.assign({}, D.rects, { placement: D.placement })) : N) !=
                  "number"
                  ? N
                  : ri(N, ze),
              );
            })(s.padding, t),
            f = Zt(o),
            E = h === "y" ? X : Y,
            b = h === "y" ? J : ee,
            w = t.rects.reference[p] + t.rects.reference[h] - r[h] - t.rects.popper[p],
            y = r[h] - t.rects.reference[h],
            A = rt(o),
            $ = A ? (h === "y" ? A.clientHeight || 0 : A.clientWidth || 0) : 0,
            R = w / 2 - y / 2,
            C = m[E],
            S = $ - f[p] - m[b],
            T = $ / 2 - f[p] / 2 + R,
            O = at(C, T, S),
            L = h;
          t.modifiersData[i] = (((e = {})[L] = O), (e.centerOffset = O - T), e);
        }
      },
      effect: function (n) {
        var e = n.state,
          t = n.options.element,
          i = t === void 0 ? "[data-popper-arrow]" : t;
        i != null &&
          (typeof i != "string" || (i = e.elements.popper.querySelector(i))) &&
          ii(e.elements.popper, i) &&
          (e.elements.arrow = i);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    };
    function Ke(n) {
      return n.split("-")[1];
    }
    var ho = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function li(n) {
      var e,
        t = n.popper,
        i = n.popperRect,
        s = n.placement,
        o = n.variation,
        r = n.offsets,
        c = n.position,
        h = n.gpuAcceleration,
        p = n.adaptive,
        m = n.roundOffsets,
        f = n.isFixed,
        E = r.x,
        b = E === void 0 ? 0 : E,
        w = r.y,
        y = w === void 0 ? 0 : w,
        A = typeof m == "function" ? m({ x: b, y }) : { x: b, y };
      (b = A.x), (y = A.y);
      var $ = r.hasOwnProperty("x"),
        R = r.hasOwnProperty("y"),
        C = Y,
        S = X,
        T = window;
      if (p) {
        var O = rt(t),
          L = "clientHeight",
          N = "clientWidth";
        O === te(t) &&
          be((O = Ae(t))).position !== "static" &&
          c === "absolute" &&
          ((L = "scrollHeight"), (N = "scrollWidth")),
          (s === X || ((s === Y || s === ee) && o === Ve)) &&
            ((S = J),
            (y -= (f && O === T && T.visualViewport ? T.visualViewport.height : O[L]) - i.height),
            (y *= h ? 1 : -1)),
          (s !== Y && ((s !== X && s !== J) || o !== Ve)) ||
            ((C = ee),
            (b -= (f && O === T && T.visualViewport ? T.visualViewport.width : O[N]) - i.width),
            (b *= h ? 1 : -1));
      }
      var D,
        W = Object.assign({ position: c }, p && ho),
        ne =
          m === !0
            ? (function (he, U) {
                var re = he.x,
                  ae = he.y,
                  H = U.devicePixelRatio || 1;
                return { x: Ye(re * H) / H || 0, y: Ye(ae * H) / H || 0 };
              })({ x: b, y }, te(t))
            : { x: b, y };
      return (
        (b = ne.x),
        (y = ne.y),
        h
          ? Object.assign(
              {},
              W,
              (((D = {})[S] = R ? "0" : ""),
              (D[C] = $ ? "0" : ""),
              (D.transform =
                (T.devicePixelRatio || 1) <= 1
                  ? "translate(" + b + "px, " + y + "px)"
                  : "translate3d(" + b + "px, " + y + "px, 0)"),
              D),
            )
          : Object.assign({}, W, (((e = {})[S] = R ? y + "px" : ""), (e[C] = $ ? b + "px" : ""), (e.transform = ""), e))
      );
    }
    const en = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (n) {
        var e = n.state,
          t = n.options,
          i = t.gpuAcceleration,
          s = i === void 0 || i,
          o = t.adaptive,
          r = o === void 0 || o,
          c = t.roundOffsets,
          h = c === void 0 || c,
          p = {
            placement: pe(e.placement),
            variation: Ke(e.placement),
            popper: e.elements.popper,
            popperRect: e.rects.popper,
            gpuAcceleration: s,
            isFixed: e.options.strategy === "fixed",
          };
        e.modifiersData.popperOffsets != null &&
          (e.styles.popper = Object.assign(
            {},
            e.styles.popper,
            li(
              Object.assign({}, p, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: h,
              }),
            ),
          )),
          e.modifiersData.arrow != null &&
            (e.styles.arrow = Object.assign(
              {},
              e.styles.arrow,
              li(
                Object.assign({}, p, {
                  offsets: e.modifiersData.arrow,
                  position: "absolute",
                  adaptive: !1,
                  roundOffsets: h,
                }),
              ),
            )),
          (e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement }));
      },
      data: {},
    };
    var wt = { passive: !0 };
    const tn = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (n) {
        var e = n.state,
          t = n.instance,
          i = n.options,
          s = i.scroll,
          o = s === void 0 || s,
          r = i.resize,
          c = r === void 0 || r,
          h = te(e.elements.popper),
          p = [].concat(e.scrollParents.reference, e.scrollParents.popper);
        return (
          o &&
            p.forEach(function (m) {
              m.addEventListener("scroll", t.update, wt);
            }),
          c && h.addEventListener("resize", t.update, wt),
          function () {
            o &&
              p.forEach(function (m) {
                m.removeEventListener("scroll", t.update, wt);
              }),
              c && h.removeEventListener("resize", t.update, wt);
          }
        );
      },
      data: {},
    };
    var fo = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function At(n) {
      return n.replace(/left|right|bottom|top/g, function (e) {
        return fo[e];
      });
    }
    var po = { start: "end", end: "start" };
    function ci(n) {
      return n.replace(/start|end/g, function (e) {
        return po[e];
      });
    }
    function nn(n) {
      var e = te(n);
      return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
    }
    function sn(n) {
      return Ue(Ae(n)).left + nn(n).scrollLeft;
    }
    function on(n) {
      var e = be(n),
        t = e.overflow,
        i = e.overflowX,
        s = e.overflowY;
      return /auto|scroll|overlay|hidden/.test(t + s + i);
    }
    function ui(n) {
      return ["html", "body", "#document"].indexOf(fe(n)) >= 0 ? n.ownerDocument.body : se(n) && on(n) ? n : ui(yt(n));
    }
    function lt(n, e) {
      var t;
      e === void 0 && (e = []);
      var i = ui(n),
        s = i === ((t = n.ownerDocument) == null ? void 0 : t.body),
        o = te(i),
        r = s ? [o].concat(o.visualViewport || [], on(i) ? i : []) : i,
        c = e.concat(r);
      return s ? c : c.concat(lt(yt(r)));
    }
    function rn(n) {
      return Object.assign({}, n, { left: n.x, top: n.y, right: n.x + n.width, bottom: n.y + n.height });
    }
    function di(n, e, t) {
      return e === Xt
        ? rn(
            (function (i, s) {
              var o = te(i),
                r = Ae(i),
                c = o.visualViewport,
                h = r.clientWidth,
                p = r.clientHeight,
                m = 0,
                f = 0;
              if (c) {
                (h = c.width), (p = c.height);
                var E = ni();
                (E || (!E && s === "fixed")) && ((m = c.offsetLeft), (f = c.offsetTop));
              }
              return { width: h, height: p, x: m + sn(i), y: f };
            })(n, t),
          )
        : Oe(e)
          ? (function (i, s) {
              var o = Ue(i, !1, s === "fixed");
              return (
                (o.top = o.top + i.clientTop),
                (o.left = o.left + i.clientLeft),
                (o.bottom = o.top + i.clientHeight),
                (o.right = o.left + i.clientWidth),
                (o.width = i.clientWidth),
                (o.height = i.clientHeight),
                (o.x = o.left),
                (o.y = o.top),
                o
              );
            })(e, t)
          : rn(
              (function (i) {
                var s,
                  o = Ae(i),
                  r = nn(i),
                  c = (s = i.ownerDocument) == null ? void 0 : s.body,
                  h = ke(o.scrollWidth, o.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0),
                  p = ke(o.scrollHeight, o.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0),
                  m = -r.scrollLeft + sn(i),
                  f = -r.scrollTop;
                return (
                  be(c || o).direction === "rtl" && (m += ke(o.clientWidth, c ? c.clientWidth : 0) - h),
                  { width: h, height: p, x: m, y: f }
                );
              })(Ae(n)),
            );
    }
    function hi(n) {
      var e,
        t = n.reference,
        i = n.element,
        s = n.placement,
        o = s ? pe(s) : null,
        r = s ? Ke(s) : null,
        c = t.x + t.width / 2 - i.width / 2,
        h = t.y + t.height / 2 - i.height / 2;
      switch (o) {
        case X:
          e = { x: c, y: t.y - i.height };
          break;
        case J:
          e = { x: c, y: t.y + t.height };
          break;
        case ee:
          e = { x: t.x + t.width, y: h };
          break;
        case Y:
          e = { x: t.x - i.width, y: h };
          break;
        default:
          e = { x: t.x, y: t.y };
      }
      var p = o ? Jt(o) : null;
      if (p != null) {
        var m = p === "y" ? "height" : "width";
        switch (r) {
          case xe:
            e[p] = e[p] - (t[m] / 2 - i[m] / 2);
            break;
          case Ve:
            e[p] = e[p] + (t[m] / 2 - i[m] / 2);
        }
      }
      return e;
    }
    function Qe(n, e) {
      e === void 0 && (e = {});
      var t = e,
        i = t.placement,
        s = i === void 0 ? n.placement : i,
        o = t.strategy,
        r = o === void 0 ? n.strategy : o,
        c = t.boundary,
        h = c === void 0 ? zn : c,
        p = t.rootBoundary,
        m = p === void 0 ? Xt : p,
        f = t.elementContext,
        E = f === void 0 ? Xe : f,
        b = t.altBoundary,
        w = b !== void 0 && b,
        y = t.padding,
        A = y === void 0 ? 0 : y,
        $ = oi(typeof A != "number" ? A : ri(A, ze)),
        R = E === Xe ? Vn : Xe,
        C = n.rects.popper,
        S = n.elements[w ? R : E],
        T = (function (U, re, ae, H) {
          var me =
              re === "clippingParents"
                ? (function (j) {
                    var K = lt(yt(j)),
                      le = ["absolute", "fixed"].indexOf(be(j).position) >= 0 && se(j) ? rt(j) : j;
                    return Oe(le)
                      ? K.filter(function (Te) {
                          return Oe(Te) && ii(Te, le) && fe(Te) !== "body";
                        })
                      : [];
                  })(U)
                : [].concat(re),
            ge = [].concat(me, [ae]),
            Je = ge[0],
            z = ge.reduce(
              function (j, K) {
                var le = di(U, K, H);
                return (
                  (j.top = ke(le.top, j.top)),
                  (j.right = vt(le.right, j.right)),
                  (j.bottom = vt(le.bottom, j.bottom)),
                  (j.left = ke(le.left, j.left)),
                  j
                );
              },
              di(U, Je, H),
            );
          return (z.width = z.right - z.left), (z.height = z.bottom - z.top), (z.x = z.left), (z.y = z.top), z;
        })(Oe(S) ? S : S.contextElement || Ae(n.elements.popper), h, m, r),
        O = Ue(n.elements.reference),
        L = hi({ reference: O, element: C, strategy: "absolute", placement: s }),
        N = rn(Object.assign({}, C, L)),
        D = E === Xe ? N : O,
        W = {
          top: T.top - D.top + $.top,
          bottom: D.bottom - T.bottom + $.bottom,
          left: T.left - D.left + $.left,
          right: D.right - T.right + $.right,
        },
        ne = n.modifiersData.offset;
      if (E === Xe && ne) {
        var he = ne[s];
        Object.keys(W).forEach(function (U) {
          var re = [ee, J].indexOf(U) >= 0 ? 1 : -1,
            ae = [X, J].indexOf(U) >= 0 ? "y" : "x";
          W[U] += he[ae] * re;
        });
      }
      return W;
    }
    function mo(n, e) {
      e === void 0 && (e = {});
      var t = e,
        i = t.placement,
        s = t.boundary,
        o = t.rootBoundary,
        r = t.padding,
        c = t.flipVariations,
        h = t.allowedAutoPlacements,
        p = h === void 0 ? Ut : h,
        m = Ke(i),
        f = m
          ? c
            ? Yt
            : Yt.filter(function (w) {
                return Ke(w) === m;
              })
          : ze,
        E = f.filter(function (w) {
          return p.indexOf(w) >= 0;
        });
      E.length === 0 && (E = f);
      var b = E.reduce(function (w, y) {
        return (w[y] = Qe(n, { placement: y, boundary: s, rootBoundary: o, padding: r })[pe(y)]), w;
      }, {});
      return Object.keys(b).sort(function (w, y) {
        return b[w] - b[y];
      });
    }
    const fi = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (n) {
        var e = n.state,
          t = n.options,
          i = n.name;
        if (!e.modifiersData[i]._skip) {
          for (
            var s = t.mainAxis,
              o = s === void 0 || s,
              r = t.altAxis,
              c = r === void 0 || r,
              h = t.fallbackPlacements,
              p = t.padding,
              m = t.boundary,
              f = t.rootBoundary,
              E = t.altBoundary,
              b = t.flipVariations,
              w = b === void 0 || b,
              y = t.allowedAutoPlacements,
              A = e.options.placement,
              $ = pe(A),
              R =
                h ||
                ($ !== A && w
                  ? (function (j) {
                      if (pe(j) === bt) return [];
                      var K = At(j);
                      return [ci(j), K, ci(K)];
                    })(A)
                  : [At(A)]),
              C = [A].concat(R).reduce(function (j, K) {
                return j.concat(
                  pe(K) === bt
                    ? mo(e, {
                        placement: K,
                        boundary: m,
                        rootBoundary: f,
                        padding: p,
                        flipVariations: w,
                        allowedAutoPlacements: y,
                      })
                    : K,
                );
              }, []),
              S = e.rects.reference,
              T = e.rects.popper,
              O = new Map(),
              L = !0,
              N = C[0],
              D = 0;
            D < C.length;
            D++
          ) {
            var W = C[D],
              ne = pe(W),
              he = Ke(W) === xe,
              U = [X, J].indexOf(ne) >= 0,
              re = U ? "width" : "height",
              ae = Qe(e, { placement: W, boundary: m, rootBoundary: f, altBoundary: E, padding: p }),
              H = U ? (he ? ee : Y) : he ? J : X;
            S[re] > T[re] && (H = At(H));
            var me = At(H),
              ge = [];
            if (
              (o && ge.push(ae[ne] <= 0),
              c && ge.push(ae[H] <= 0, ae[me] <= 0),
              ge.every(function (j) {
                return j;
              }))
            ) {
              (N = W), (L = !1);
              break;
            }
            O.set(W, ge);
          }
          if (L)
            for (
              var Je = function (j) {
                  var K = C.find(function (le) {
                    var Te = O.get(le);
                    if (Te)
                      return Te.slice(0, j).every(function (Dt) {
                        return Dt;
                      });
                  });
                  if (K) return (N = K), "break";
                },
                z = w ? 3 : 1;
              z > 0 && Je(z) !== "break";
              z--
            );
          e.placement !== N && ((e.modifiersData[i]._skip = !0), (e.placement = N), (e.reset = !0));
        }
      },
      requiresIfExists: ["offset"],
      data: { _skip: !1 },
    };
    function pi(n, e, t) {
      return (
        t === void 0 && (t = { x: 0, y: 0 }),
        {
          top: n.top - e.height - t.y,
          right: n.right - e.width + t.x,
          bottom: n.bottom - e.height + t.y,
          left: n.left - e.width - t.x,
        }
      );
    }
    function mi(n) {
      return [X, ee, J, Y].some(function (e) {
        return n[e] >= 0;
      });
    }
    const gi = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (n) {
          var e = n.state,
            t = n.name,
            i = e.rects.reference,
            s = e.rects.popper,
            o = e.modifiersData.preventOverflow,
            r = Qe(e, { elementContext: "reference" }),
            c = Qe(e, { altBoundary: !0 }),
            h = pi(r, i),
            p = pi(c, s, o),
            m = mi(h),
            f = mi(p);
          (e.modifiersData[t] = {
            referenceClippingOffsets: h,
            popperEscapeOffsets: p,
            isReferenceHidden: m,
            hasPopperEscaped: f,
          }),
            (e.attributes.popper = Object.assign({}, e.attributes.popper, {
              "data-popper-reference-hidden": m,
              "data-popper-escaped": f,
            }));
        },
      },
      _i = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (n) {
          var e = n.state,
            t = n.options,
            i = n.name,
            s = t.offset,
            o = s === void 0 ? [0, 0] : s,
            r = Ut.reduce(function (m, f) {
              return (
                (m[f] = (function (E, b, w) {
                  var y = pe(E),
                    A = [Y, X].indexOf(y) >= 0 ? -1 : 1,
                    $ = typeof w == "function" ? w(Object.assign({}, b, { placement: E })) : w,
                    R = $[0],
                    C = $[1];
                  return (R = R || 0), (C = (C || 0) * A), [Y, ee].indexOf(y) >= 0 ? { x: C, y: R } : { x: R, y: C };
                })(f, e.rects, o)),
                m
              );
            }, {}),
            c = r[e.placement],
            h = c.x,
            p = c.y;
          e.modifiersData.popperOffsets != null &&
            ((e.modifiersData.popperOffsets.x += h), (e.modifiersData.popperOffsets.y += p)),
            (e.modifiersData[i] = r);
        },
      },
      an = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (n) {
          var e = n.state,
            t = n.name;
          e.modifiersData[t] = hi({
            reference: e.rects.reference,
            element: e.rects.popper,
            strategy: "absolute",
            placement: e.placement,
          });
        },
        data: {},
      },
      bi = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (n) {
          var e = n.state,
            t = n.options,
            i = n.name,
            s = t.mainAxis,
            o = s === void 0 || s,
            r = t.altAxis,
            c = r !== void 0 && r,
            h = t.boundary,
            p = t.rootBoundary,
            m = t.altBoundary,
            f = t.padding,
            E = t.tether,
            b = E === void 0 || E,
            w = t.tetherOffset,
            y = w === void 0 ? 0 : w,
            A = Qe(e, { boundary: h, rootBoundary: p, padding: f, altBoundary: m }),
            $ = pe(e.placement),
            R = Ke(e.placement),
            C = !R,
            S = Jt($),
            T = S === "x" ? "y" : "x",
            O = e.modifiersData.popperOffsets,
            L = e.rects.reference,
            N = e.rects.popper,
            D = typeof y == "function" ? y(Object.assign({}, e.rects, { placement: e.placement })) : y,
            W = typeof D == "number" ? { mainAxis: D, altAxis: D } : Object.assign({ mainAxis: 0, altAxis: 0 }, D),
            ne = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
            he = { x: 0, y: 0 };
          if (O) {
            if (o) {
              var U,
                re = S === "y" ? X : Y,
                ae = S === "y" ? J : ee,
                H = S === "y" ? "height" : "width",
                me = O[S],
                ge = me + A[re],
                Je = me - A[ae],
                z = b ? -N[H] / 2 : 0,
                j = R === xe ? L[H] : N[H],
                K = R === xe ? -N[H] : -L[H],
                le = e.elements.arrow,
                Te = b && le ? Zt(le) : { width: 0, height: 0 },
                Dt = e.modifiersData["arrow#persistent"]
                  ? e.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                ss = Dt[re],
                os = Dt[ae],
                It = at(0, L[H], Te[H]),
                zr = C ? L[H] / 2 - z - It - ss - W.mainAxis : j - It - ss - W.mainAxis,
                Vr = C ? -L[H] / 2 + z + It + os + W.mainAxis : K + It + os + W.mainAxis,
                yn = e.elements.arrow && rt(e.elements.arrow),
                Xr = yn ? (S === "y" ? yn.clientTop || 0 : yn.clientLeft || 0) : 0,
                rs = (U = ne?.[S]) != null ? U : 0,
                Yr = me + Vr - rs,
                as = at(b ? vt(ge, me + zr - rs - Xr) : ge, me, b ? ke(Je, Yr) : Je);
              (O[S] = as), (he[S] = as - me);
            }
            if (c) {
              var ls,
                Ur = S === "x" ? X : Y,
                Kr = S === "x" ? J : ee,
                Me = O[T],
                Pt = T === "y" ? "height" : "width",
                cs = Me + A[Ur],
                us = Me - A[Kr],
                wn = [X, Y].indexOf($) !== -1,
                ds = (ls = ne?.[T]) != null ? ls : 0,
                hs = wn ? cs : Me - L[Pt] - N[Pt] - ds + W.altAxis,
                fs = wn ? Me + L[Pt] + N[Pt] - ds - W.altAxis : us,
                ps =
                  b && wn
                    ? (function (Qr, Gr, An) {
                        var ms = at(Qr, Gr, An);
                        return ms > An ? An : ms;
                      })(hs, Me, fs)
                    : at(b ? hs : cs, Me, b ? fs : us);
              (O[T] = ps), (he[T] = ps - Me);
            }
            e.modifiersData[i] = he;
          }
        },
        requiresIfExists: ["offset"],
      };
    function go(n, e, t) {
      t === void 0 && (t = !1);
      var i,
        s,
        o = se(e),
        r =
          se(e) &&
          (function (f) {
            var E = f.getBoundingClientRect(),
              b = Ye(E.width) / f.offsetWidth || 1,
              w = Ye(E.height) / f.offsetHeight || 1;
            return b !== 1 || w !== 1;
          })(e),
        c = Ae(e),
        h = Ue(n, r, t),
        p = { scrollLeft: 0, scrollTop: 0 },
        m = { x: 0, y: 0 };
      return (
        (o || (!o && !t)) &&
          ((fe(e) !== "body" || on(c)) &&
            (p = (i = e) !== te(i) && se(i) ? { scrollLeft: (s = i).scrollLeft, scrollTop: s.scrollTop } : nn(i)),
          se(e) ? (((m = Ue(e, !0)).x += e.clientLeft), (m.y += e.clientTop)) : c && (m.x = sn(c))),
        { x: h.left + p.scrollLeft - m.x, y: h.top + p.scrollTop - m.y, width: h.width, height: h.height }
      );
    }
    function _o(n) {
      var e = new Map(),
        t = new Set(),
        i = [];
      function s(o) {
        t.add(o.name),
          [].concat(o.requires || [], o.requiresIfExists || []).forEach(function (r) {
            if (!t.has(r)) {
              var c = e.get(r);
              c && s(c);
            }
          }),
          i.push(o);
      }
      return (
        n.forEach(function (o) {
          e.set(o.name, o);
        }),
        n.forEach(function (o) {
          t.has(o.name) || s(o);
        }),
        i
      );
    }
    var vi = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function yi() {
      for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
      return !e.some(function (i) {
        return !(i && typeof i.getBoundingClientRect == "function");
      });
    }
    function Et(n) {
      n === void 0 && (n = {});
      var e = n,
        t = e.defaultModifiers,
        i = t === void 0 ? [] : t,
        s = e.defaultOptions,
        o = s === void 0 ? vi : s;
      return function (r, c, h) {
        h === void 0 && (h = o);
        var p,
          m,
          f = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, vi, o),
            modifiersData: {},
            elements: { reference: r, popper: c },
            attributes: {},
            styles: {},
          },
          E = [],
          b = !1,
          w = {
            state: f,
            setOptions: function (A) {
              var $ = typeof A == "function" ? A(f.options) : A;
              y(),
                (f.options = Object.assign({}, o, f.options, $)),
                (f.scrollParents = {
                  reference: Oe(r) ? lt(r) : r.contextElement ? lt(r.contextElement) : [],
                  popper: lt(c),
                });
              var R,
                C,
                S = (function (T) {
                  var O = _o(T);
                  return ti.reduce(function (L, N) {
                    return L.concat(
                      O.filter(function (D) {
                        return D.phase === N;
                      }),
                    );
                  }, []);
                })(
                  ((R = [].concat(i, f.options.modifiers)),
                  (C = R.reduce(function (T, O) {
                    var L = T[O.name];
                    return (
                      (T[O.name] = L
                        ? Object.assign({}, L, O, {
                            options: Object.assign({}, L.options, O.options),
                            data: Object.assign({}, L.data, O.data),
                          })
                        : O),
                      T
                    );
                  }, {})),
                  Object.keys(C).map(function (T) {
                    return C[T];
                  })),
                );
              return (
                (f.orderedModifiers = S.filter(function (T) {
                  return T.enabled;
                })),
                f.orderedModifiers.forEach(function (T) {
                  var O = T.name,
                    L = T.options,
                    N = L === void 0 ? {} : L,
                    D = T.effect;
                  if (typeof D == "function") {
                    var W = D({ state: f, name: O, instance: w, options: N });
                    E.push(W || function () {});
                  }
                }),
                w.update()
              );
            },
            forceUpdate: function () {
              if (!b) {
                var A = f.elements,
                  $ = A.reference,
                  R = A.popper;
                if (yi($, R)) {
                  (f.rects = { reference: go($, rt(R), f.options.strategy === "fixed"), popper: Zt(R) }),
                    (f.reset = !1),
                    (f.placement = f.options.placement),
                    f.orderedModifiers.forEach(function (D) {
                      return (f.modifiersData[D.name] = Object.assign({}, D.data));
                    });
                  for (var C = 0; C < f.orderedModifiers.length; C++)
                    if (f.reset !== !0) {
                      var S = f.orderedModifiers[C],
                        T = S.fn,
                        O = S.options,
                        L = O === void 0 ? {} : O,
                        N = S.name;
                      typeof T == "function" && (f = T({ state: f, options: L, name: N, instance: w }) || f);
                    } else (f.reset = !1), (C = -1);
                }
              }
            },
            update:
              ((p = function () {
                return new Promise(function (A) {
                  w.forceUpdate(), A(f);
                });
              }),
              function () {
                return (
                  m ||
                    (m = new Promise(function (A) {
                      Promise.resolve().then(function () {
                        (m = void 0), A(p());
                      });
                    })),
                  m
                );
              }),
            destroy: function () {
              y(), (b = !0);
            },
          };
        if (!yi(r, c)) return w;
        function y() {
          E.forEach(function (A) {
            return A();
          }),
            (E = []);
        }
        return (
          w.setOptions(h).then(function (A) {
            !b && h.onFirstUpdate && h.onFirstUpdate(A);
          }),
          w
        );
      };
    }
    var bo = Et(),
      vo = Et({ defaultModifiers: [tn, an, en, Qt] }),
      ln = Et({ defaultModifiers: [tn, an, en, Qt, _i, fi, bi, ai, gi] });
    const wi = Object.freeze(
        Object.defineProperty(
          {
            __proto__: null,
            afterMain: Gn,
            afterRead: Un,
            afterWrite: ei,
            applyStyles: Qt,
            arrow: ai,
            auto: bt,
            basePlacements: ze,
            beforeMain: Kn,
            beforeRead: Xn,
            beforeWrite: Zn,
            bottom: J,
            clippingParents: zn,
            computeStyles: en,
            createPopper: ln,
            createPopperBase: bo,
            createPopperLite: vo,
            detectOverflow: Qe,
            end: Ve,
            eventListeners: tn,
            flip: fi,
            hide: gi,
            left: Y,
            main: Qn,
            modifierPhases: ti,
            offset: _i,
            placements: Ut,
            popper: Xe,
            popperGenerator: Et,
            popperOffsets: an,
            preventOverflow: bi,
            read: Yn,
            reference: Vn,
            right: ee,
            start: xe,
            top: X,
            variationPlacements: Yt,
            viewport: Xt,
            write: Jn,
          },
          Symbol.toStringTag,
          { value: "Module" },
        ),
      ),
      Ai = "dropdown",
      Se = ".bs.dropdown",
      cn = ".data-api",
      yo = "ArrowUp",
      Ei = "ArrowDown",
      wo = `hide${Se}`,
      Ao = `hidden${Se}`,
      Eo = `show${Se}`,
      To = `shown${Se}`,
      Ti = `click${Se}${cn}`,
      Ci = `keydown${Se}${cn}`,
      Co = `keyup${Se}${cn}`,
      Ge = "show",
      Le = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
      xo = `${Le}.${Ge}`,
      Tt = ".dropdown-menu",
      Oo = q() ? "top-end" : "top-start",
      ko = q() ? "top-start" : "top-end",
      So = q() ? "bottom-end" : "bottom-start",
      Lo = q() ? "bottom-start" : "bottom-end",
      Do = q() ? "left-start" : "right-start",
      Io = q() ? "right-start" : "left-start",
      Po = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle",
      },
      $o = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)",
      };
    class de extends ue {
      constructor(e, t) {
        super(e, t),
          (this._popper = null),
          (this._parent = this._element.parentNode),
          (this._menu = _.next(this._element, Tt)[0] || _.prev(this._element, Tt)[0] || _.findOne(Tt, this._parent)),
          (this._inNavbar = this._detectNavbar());
      }
      static get Default() {
        return Po;
      }
      static get DefaultType() {
        return $o;
      }
      static get NAME() {
        return Ai;
      }
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (P(this._element) || this._isShown()) return;
        const e = { relatedTarget: this._element };
        if (!u.trigger(this._element, Eo, e).defaultPrevented) {
          if (
            (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
          )
            for (const t of [].concat(...document.body.children)) u.on(t, "mouseover", Q);
          this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.add(Ge),
            this._element.classList.add(Ge),
            u.trigger(this._element, To, e);
        }
      }
      hide() {
        if (P(this._element) || !this._isShown()) return;
        const e = { relatedTarget: this._element };
        this._completeHide(e);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();
      }
      _completeHide(e) {
        if (!u.trigger(this._element, wo, e).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (const t of [].concat(...document.body.children)) u.off(t, "mouseover", Q);
          this._popper && this._popper.destroy(),
            this._menu.classList.remove(Ge),
            this._element.classList.remove(Ge),
            this._element.setAttribute("aria-expanded", "false"),
            _e.removeDataAttribute(this._menu, "popper"),
            u.trigger(this._element, Ao, e);
        }
      }
      _getConfig(e) {
        if (
          typeof (e = super._getConfig(e)).reference == "object" &&
          !x(e.reference) &&
          typeof e.reference.getBoundingClientRect != "function"
        )
          throw new TypeError(
            `${Ai.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`,
          );
        return e;
      }
      _createPopper() {
        if (wi === void 0) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let e = this._element;
        this._config.reference === "parent"
          ? (e = this._parent)
          : x(this._config.reference)
            ? (e = M(this._config.reference))
            : typeof this._config.reference == "object" && (e = this._config.reference);
        const t = this._getPopperConfig();
        this._popper = ln(e, this._menu, t);
      }
      _isShown() {
        return this._menu.classList.contains(Ge);
      }
      _getPlacement() {
        const e = this._parent;
        if (e.classList.contains("dropend")) return Do;
        if (e.classList.contains("dropstart")) return Io;
        if (e.classList.contains("dropup-center")) return "top";
        if (e.classList.contains("dropdown-center")) return "bottom";
        const t = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
        return e.classList.contains("dropup") ? (t ? ko : Oo) : t ? Lo : So;
      }
      _detectNavbar() {
        return this._element.closest(".navbar") !== null;
      }
      _getOffset() {
        const { offset: e } = this._config;
        return typeof e == "string"
          ? e.split(",").map((t) => Number.parseInt(t, 10))
          : typeof e == "function"
            ? (t) => e(t, this._element)
            : e;
      }
      _getPopperConfig() {
        const e = {
          placement: this._getPlacement(),
          modifiers: [
            { name: "preventOverflow", options: { boundary: this._config.boundary } },
            { name: "offset", options: { offset: this._getOffset() } },
          ],
        };
        return (
          (this._inNavbar || this._config.display === "static") &&
            (_e.setDataAttribute(this._menu, "popper", "static"),
            (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
          { ...e, ...Z(this._config.popperConfig, [e]) }
        );
      }
      _selectMenuItem({ key: e, target: t }) {
        const i = _.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((s) => F(s));
        i.length && jt(i, t, e === Ei, !i.includes(t)).focus();
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = de.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
      static clearMenus(e) {
        if (e.button === 2 || (e.type === "keyup" && e.key !== "Tab")) return;
        const t = _.find(xo);
        for (const i of t) {
          const s = de.getInstance(i);
          if (!s || s._config.autoClose === !1) continue;
          const o = e.composedPath(),
            r = o.includes(s._menu);
          if (
            o.includes(s._element) ||
            (s._config.autoClose === "inside" && !r) ||
            (s._config.autoClose === "outside" && r) ||
            (s._menu.contains(e.target) &&
              ((e.type === "keyup" && e.key === "Tab") || /input|select|option|textarea|form/i.test(e.target.tagName)))
          )
            continue;
          const c = { relatedTarget: s._element };
          e.type === "click" && (c.clickEvent = e), s._completeHide(c);
        }
      }
      static dataApiKeydownHandler(e) {
        const t = /input|textarea/i.test(e.target.tagName),
          i = e.key === "Escape",
          s = [yo, Ei].includes(e.key);
        if ((!s && !i) || (t && !i)) return;
        e.preventDefault();
        const o = this.matches(Le)
            ? this
            : _.prev(this, Le)[0] || _.next(this, Le)[0] || _.findOne(Le, e.delegateTarget.parentNode),
          r = de.getOrCreateInstance(o);
        if (s) return e.stopPropagation(), r.show(), void r._selectMenuItem(e);
        r._isShown() && (e.stopPropagation(), r.hide(), o.focus());
      }
    }
    u.on(document, Ci, Le, de.dataApiKeydownHandler),
      u.on(document, Ci, Tt, de.dataApiKeydownHandler),
      u.on(document, Ti, de.clearMenus),
      u.on(document, Co, de.clearMenus),
      u.on(document, Ti, Le, function (n) {
        n.preventDefault(), de.getOrCreateInstance(this).toggle();
      }),
      ie(de);
    const xi = "backdrop",
      Oi = "show",
      ki = `mousedown.bs.${xi}`,
      No = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" },
      Mo = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)",
      };
    class Si extends tt {
      constructor(e) {
        super(), (this._config = this._getConfig(e)), (this._isAppended = !1), (this._element = null);
      }
      static get Default() {
        return No;
      }
      static get DefaultType() {
        return Mo;
      }
      static get NAME() {
        return xi;
      }
      show(e) {
        if (!this._config.isVisible) return void Z(e);
        this._append();
        const t = this._getElement();
        this._config.isAnimated && V(t),
          t.classList.add(Oi),
          this._emulateAnimation(() => {
            Z(e);
          });
      }
      hide(e) {
        this._config.isVisible
          ? (this._getElement().classList.remove(Oi),
            this._emulateAnimation(() => {
              this.dispose(), Z(e);
            }))
          : Z(e);
      }
      dispose() {
        this._isAppended && (u.off(this._element, ki), this._element.remove(), (this._isAppended = !1));
      }
      _getElement() {
        if (!this._element) {
          const e = document.createElement("div");
          (e.className = this._config.className),
            this._config.isAnimated && e.classList.add("fade"),
            (this._element = e);
        }
        return this._element;
      }
      _configAfterMerge(e) {
        return (e.rootElement = M(e.rootElement)), e;
      }
      _append() {
        if (this._isAppended) return;
        const e = this._getElement();
        this._config.rootElement.append(e),
          u.on(e, ki, () => {
            Z(this._config.clickCallback);
          }),
          (this._isAppended = !0);
      }
      _emulateAnimation(e) {
        kn(e, this._getElement(), this._config.isAnimated);
      }
    }
    const Ct = ".bs.focustrap",
      jo = `focusin${Ct}`,
      Ro = `keydown.tab${Ct}`,
      Li = "backward",
      Fo = { autofocus: !0, trapElement: null },
      Ho = { autofocus: "boolean", trapElement: "element" };
    class Di extends tt {
      constructor(e) {
        super(), (this._config = this._getConfig(e)), (this._isActive = !1), (this._lastTabNavDirection = null);
      }
      static get Default() {
        return Fo;
      }
      static get DefaultType() {
        return Ho;
      }
      static get NAME() {
        return "focustrap";
      }
      activate() {
        this._isActive ||
          (this._config.autofocus && this._config.trapElement.focus(),
          u.off(document, Ct),
          u.on(document, jo, (e) => this._handleFocusin(e)),
          u.on(document, Ro, (e) => this._handleKeydown(e)),
          (this._isActive = !0));
      }
      deactivate() {
        this._isActive && ((this._isActive = !1), u.off(document, Ct));
      }
      _handleFocusin(e) {
        const { trapElement: t } = this._config;
        if (e.target === document || e.target === t || t.contains(e.target)) return;
        const i = _.focusableChildren(t);
        i.length === 0 ? t.focus() : this._lastTabNavDirection === Li ? i[i.length - 1].focus() : i[0].focus();
      }
      _handleKeydown(e) {
        e.key === "Tab" && (this._lastTabNavDirection = e.shiftKey ? Li : "forward");
      }
    }
    const Ii = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      Pi = ".sticky-top",
      xt = "padding-right",
      $i = "margin-right";
    class un {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const e = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - e);
      }
      hide() {
        const e = this.getWidth();
        this._disableOverFlow(),
          this._setElementAttributes(this._element, xt, (t) => t + e),
          this._setElementAttributes(Ii, xt, (t) => t + e),
          this._setElementAttributes(Pi, $i, (t) => t - e);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"),
          this._resetElementAttributes(this._element, xt),
          this._resetElementAttributes(Ii, xt),
          this._resetElementAttributes(Pi, $i);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), (this._element.style.overflow = "hidden");
      }
      _setElementAttributes(e, t, i) {
        const s = this.getWidth();
        this._applyManipulationCallback(e, (o) => {
          if (o !== this._element && window.innerWidth > o.clientWidth + s) return;
          this._saveInitialAttribute(o, t);
          const r = window.getComputedStyle(o).getPropertyValue(t);
          o.style.setProperty(t, `${i(Number.parseFloat(r))}px`);
        });
      }
      _saveInitialAttribute(e, t) {
        const i = e.style.getPropertyValue(t);
        i && _e.setDataAttribute(e, t, i);
      }
      _resetElementAttributes(e, t) {
        this._applyManipulationCallback(e, (i) => {
          const s = _e.getDataAttribute(i, t);
          s !== null ? (_e.removeDataAttribute(i, t), i.style.setProperty(t, s)) : i.style.removeProperty(t);
        });
      }
      _applyManipulationCallback(e, t) {
        if (x(e)) t(e);
        else for (const i of _.find(e, this._element)) t(i);
      }
    }
    const oe = ".bs.modal",
      Wo = `hide${oe}`,
      Bo = `hidePrevented${oe}`,
      Ni = `hidden${oe}`,
      Mi = `show${oe}`,
      qo = `shown${oe}`,
      zo = `resize${oe}`,
      Vo = `click.dismiss${oe}`,
      Xo = `mousedown.dismiss${oe}`,
      Yo = `keydown.dismiss${oe}`,
      Uo = `click${oe}.data-api`,
      ji = "modal-open",
      Ri = "show",
      dn = "modal-static",
      Ko = { backdrop: !0, focus: !0, keyboard: !0 },
      Qo = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
    class De extends ue {
      constructor(e, t) {
        super(e, t),
          (this._dialog = _.findOne(".modal-dialog", this._element)),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          (this._isShown = !1),
          (this._isTransitioning = !1),
          (this._scrollBar = new un()),
          this._addEventListeners();
      }
      static get Default() {
        return Ko;
      }
      static get DefaultType() {
        return Qo;
      }
      static get NAME() {
        return "modal";
      }
      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }
      show(e) {
        this._isShown ||
          this._isTransitioning ||
          u.trigger(this._element, Mi, { relatedTarget: e }).defaultPrevented ||
          ((this._isShown = !0),
          (this._isTransitioning = !0),
          this._scrollBar.hide(),
          document.body.classList.add(ji),
          this._adjustDialog(),
          this._backdrop.show(() => this._showElement(e)));
      }
      hide() {
        this._isShown &&
          !this._isTransitioning &&
          (u.trigger(this._element, Wo).defaultPrevented ||
            ((this._isShown = !1),
            (this._isTransitioning = !0),
            this._focustrap.deactivate(),
            this._element.classList.remove(Ri),
            this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
      }
      dispose() {
        u.off(window, oe),
          u.off(this._dialog, oe),
          this._backdrop.dispose(),
          this._focustrap.deactivate(),
          super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new Si({ isVisible: !!this._config.backdrop, isAnimated: this._isAnimated() });
      }
      _initializeFocusTrap() {
        return new Di({ trapElement: this._element });
      }
      _showElement(e) {
        document.body.contains(this._element) || document.body.append(this._element),
          (this._element.style.display = "block"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          (this._element.scrollTop = 0);
        const t = _.findOne(".modal-body", this._dialog);
        t && (t.scrollTop = 0),
          V(this._element),
          this._element.classList.add(Ri),
          this._queueCallback(
            () => {
              this._config.focus && this._focustrap.activate(),
                (this._isTransitioning = !1),
                u.trigger(this._element, qo, { relatedTarget: e });
            },
            this._dialog,
            this._isAnimated(),
          );
      }
      _addEventListeners() {
        u.on(this._element, Yo, (e) => {
          e.key === "Escape" && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
        }),
          u.on(window, zo, () => {
            this._isShown && !this._isTransitioning && this._adjustDialog();
          }),
          u.on(this._element, Xo, (e) => {
            u.one(this._element, Vo, (t) => {
              this._element === e.target &&
                this._element === t.target &&
                (this._config.backdrop !== "static"
                  ? this._config.backdrop && this.hide()
                  : this._triggerBackdropTransition());
            });
          });
      }
      _hideModal() {
        (this._element.style.display = "none"),
          this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._isTransitioning = !1),
          this._backdrop.hide(() => {
            document.body.classList.remove(ji),
              this._resetAdjustments(),
              this._scrollBar.reset(),
              u.trigger(this._element, Ni);
          });
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (u.trigger(this._element, Bo).defaultPrevented) return;
        const e = this._element.scrollHeight > document.documentElement.clientHeight,
          t = this._element.style.overflowY;
        t === "hidden" ||
          this._element.classList.contains(dn) ||
          (e || (this._element.style.overflowY = "hidden"),
          this._element.classList.add(dn),
          this._queueCallback(() => {
            this._element.classList.remove(dn),
              this._queueCallback(() => {
                this._element.style.overflowY = t;
              }, this._dialog);
          }, this._dialog),
          this._element.focus());
      }
      _adjustDialog() {
        const e = this._element.scrollHeight > document.documentElement.clientHeight,
          t = this._scrollBar.getWidth(),
          i = t > 0;
        if (i && !e) {
          const s = q() ? "paddingLeft" : "paddingRight";
          this._element.style[s] = `${t}px`;
        }
        if (!i && e) {
          const s = q() ? "paddingRight" : "paddingLeft";
          this._element.style[s] = `${t}px`;
        }
      }
      _resetAdjustments() {
        (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
      }
      static jQueryInterface(e, t) {
        return this.each(function () {
          const i = De.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (i[e] === void 0) throw new TypeError(`No method named "${e}"`);
            i[e](t);
          }
        });
      }
    }
    u.on(document, Uo, '[data-bs-toggle="modal"]', function (n) {
      const e = _.getElementFromSelector(this);
      ["A", "AREA"].includes(this.tagName) && n.preventDefault(),
        u.one(e, Mi, (i) => {
          i.defaultPrevented ||
            u.one(e, Ni, () => {
              F(this) && this.focus();
            });
        });
      const t = _.findOne(".modal.show");
      t && De.getInstance(t).hide(), De.getOrCreateInstance(e).toggle(this);
    }),
      ft(De),
      ie(De);
    const ve = ".bs.offcanvas",
      Fi = ".data-api",
      Go = `load${ve}${Fi}`,
      Hi = "show",
      Wi = "showing",
      Bi = "hiding",
      qi = ".offcanvas.show",
      Zo = `show${ve}`,
      Jo = `shown${ve}`,
      er = `hide${ve}`,
      zi = `hidePrevented${ve}`,
      Vi = `hidden${ve}`,
      tr = `resize${ve}`,
      nr = `click${ve}${Fi}`,
      ir = `keydown.dismiss${ve}`,
      sr = { backdrop: !0, keyboard: !0, scroll: !1 },
      or = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
    class ye extends ue {
      constructor(e, t) {
        super(e, t),
          (this._isShown = !1),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          this._addEventListeners();
      }
      static get Default() {
        return sr;
      }
      static get DefaultType() {
        return or;
      }
      static get NAME() {
        return "offcanvas";
      }
      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }
      show(e) {
        this._isShown ||
          u.trigger(this._element, Zo, { relatedTarget: e }).defaultPrevented ||
          ((this._isShown = !0),
          this._backdrop.show(),
          this._config.scroll || new un().hide(),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          this._element.classList.add(Wi),
          this._queueCallback(
            () => {
              (this._config.scroll && !this._config.backdrop) || this._focustrap.activate(),
                this._element.classList.add(Hi),
                this._element.classList.remove(Wi),
                u.trigger(this._element, Jo, { relatedTarget: e });
            },
            this._element,
            !0,
          ));
      }
      hide() {
        this._isShown &&
          (u.trigger(this._element, er).defaultPrevented ||
            (this._focustrap.deactivate(),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.add(Bi),
            this._backdrop.hide(),
            this._queueCallback(
              () => {
                this._element.classList.remove(Hi, Bi),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  this._config.scroll || new un().reset(),
                  u.trigger(this._element, Vi);
              },
              this._element,
              !0,
            )));
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      _initializeBackDrop() {
        const e = !!this._config.backdrop;
        return new Si({
          className: "offcanvas-backdrop",
          isVisible: e,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: e
            ? () => {
                this._config.backdrop !== "static" ? this.hide() : u.trigger(this._element, zi);
              }
            : null,
        });
      }
      _initializeFocusTrap() {
        return new Di({ trapElement: this._element });
      }
      _addEventListeners() {
        u.on(this._element, ir, (e) => {
          e.key === "Escape" && (this._config.keyboard ? this.hide() : u.trigger(this._element, zi));
        });
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = ye.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
              throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    u.on(document, nr, '[data-bs-toggle="offcanvas"]', function (n) {
      const e = _.getElementFromSelector(this);
      if ((["A", "AREA"].includes(this.tagName) && n.preventDefault(), P(this))) return;
      u.one(e, Vi, () => {
        F(this) && this.focus();
      });
      const t = _.findOne(qi);
      t && t !== e && ye.getInstance(t).hide(), ye.getOrCreateInstance(e).toggle(this);
    }),
      u.on(window, Go, () => {
        for (const n of _.find(qi)) ye.getOrCreateInstance(n).show();
      }),
      u.on(window, tr, () => {
        for (const n of _.find("[aria-modal][class*=show][class*=offcanvas-]"))
          getComputedStyle(n).position !== "fixed" && ye.getOrCreateInstance(n).hide();
      }),
      ft(ye),
      ie(ye);
    const Xi = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        dd: [],
        div: [],
        dl: [],
        dt: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      rr = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      ar = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
      lr = (n, e) => {
        const t = n.nodeName.toLowerCase();
        return e.includes(t)
          ? !rr.has(t) || !!ar.test(n.nodeValue)
          : e.filter((i) => i instanceof RegExp).some((i) => i.test(t));
      },
      cr = {
        allowList: Xi,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>",
      },
      ur = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string",
      },
      dr = { entry: "(string|element|function|null)", selector: "(string|element)" };
    class hr extends tt {
      constructor(e) {
        super(), (this._config = this._getConfig(e));
      }
      static get Default() {
        return cr;
      }
      static get DefaultType() {
        return ur;
      }
      static get NAME() {
        return "TemplateFactory";
      }
      getContent() {
        return Object.values(this._config.content)
          .map((e) => this._resolvePossibleFunction(e))
          .filter(Boolean);
      }
      hasContent() {
        return this.getContent().length > 0;
      }
      changeContent(e) {
        return this._checkContent(e), (this._config.content = { ...this._config.content, ...e }), this;
      }
      toHtml() {
        const e = document.createElement("div");
        e.innerHTML = this._maybeSanitize(this._config.template);
        for (const [s, o] of Object.entries(this._config.content)) this._setContent(e, o, s);
        const t = e.children[0],
          i = this._resolvePossibleFunction(this._config.extraClass);
        return i && t.classList.add(...i.split(" ")), t;
      }
      _typeCheckConfig(e) {
        super._typeCheckConfig(e), this._checkContent(e.content);
      }
      _checkContent(e) {
        for (const [t, i] of Object.entries(e)) super._typeCheckConfig({ selector: t, entry: i }, dr);
      }
      _setContent(e, t, i) {
        const s = _.findOne(i, e);
        s &&
          ((t = this._resolvePossibleFunction(t))
            ? x(t)
              ? this._putElementInTemplate(M(t), s)
              : this._config.html
                ? (s.innerHTML = this._maybeSanitize(t))
                : (s.textContent = t)
            : s.remove());
      }
      _maybeSanitize(e) {
        return this._config.sanitize
          ? (function (t, i, s) {
              if (!t.length) return t;
              if (s && typeof s == "function") return s(t);
              const o = new window.DOMParser().parseFromString(t, "text/html"),
                r = [].concat(...o.body.querySelectorAll("*"));
              for (const c of r) {
                const h = c.nodeName.toLowerCase();
                if (!Object.keys(i).includes(h)) {
                  c.remove();
                  continue;
                }
                const p = [].concat(...c.attributes),
                  m = [].concat(i["*"] || [], i[h] || []);
                for (const f of p) lr(f, m) || c.removeAttribute(f.nodeName);
              }
              return o.body.innerHTML;
            })(e, this._config.allowList, this._config.sanitizeFn)
          : e;
      }
      _resolvePossibleFunction(e) {
        return Z(e, [this]);
      }
      _putElementInTemplate(e, t) {
        if (this._config.html) return (t.innerHTML = ""), void t.append(e);
        t.textContent = e.textContent;
      }
    }
    const fr = new Set(["sanitize", "allowList", "sanitizeFn"]),
      hn = "fade",
      Ot = "show",
      Yi = ".modal",
      Ui = "hide.bs.modal",
      ct = "hover",
      fn = "focus",
      pr = { AUTO: "auto", TOP: "top", RIGHT: q() ? "left" : "right", BOTTOM: "bottom", LEFT: q() ? "right" : "left" },
      mr = {
        allowList: Xi,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus",
      },
      gr = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
      };
    class Ie extends ue {
      constructor(e, t) {
        if (wi === void 0) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(e, t),
          (this._isEnabled = !0),
          (this._timeout = 0),
          (this._isHovered = null),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this._templateFactory = null),
          (this._newContent = null),
          (this.tip = null),
          this._setListeners(),
          this._config.selector || this._fixTitle();
      }
      static get Default() {
        return mr;
      }
      static get DefaultType() {
        return gr;
      }
      static get NAME() {
        return "tooltip";
      }
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle() {
        this._isEnabled &&
          ((this._activeTrigger.click = !this._activeTrigger.click), this._isShown() ? this._leave() : this._enter());
      }
      dispose() {
        clearTimeout(this._timeout),
          u.off(this._element.closest(Yi), Ui, this._hideModalHandler),
          this._element.getAttribute("data-bs-original-title") &&
            this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
          this._disposePopper(),
          super.dispose();
      }
      show() {
        if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;
        const e = u.trigger(this._element, this.constructor.eventName("show")),
          t = (k(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
        if (e.defaultPrevented || !t) return;
        this._disposePopper();
        const i = this._getTipElement();
        this._element.setAttribute("aria-describedby", i.getAttribute("id"));
        const { container: s } = this._config;
        if (
          (this._element.ownerDocument.documentElement.contains(this.tip) ||
            (s.append(i), u.trigger(this._element, this.constructor.eventName("inserted"))),
          (this._popper = this._createPopper(i)),
          i.classList.add(Ot),
          "ontouchstart" in document.documentElement)
        )
          for (const o of [].concat(...document.body.children)) u.on(o, "mouseover", Q);
        this._queueCallback(
          () => {
            u.trigger(this._element, this.constructor.eventName("shown")),
              this._isHovered === !1 && this._leave(),
              (this._isHovered = !1);
          },
          this.tip,
          this._isAnimated(),
        );
      }
      hide() {
        if (this._isShown() && !u.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
          if ((this._getTipElement().classList.remove(Ot), "ontouchstart" in document.documentElement))
            for (const e of [].concat(...document.body.children)) u.off(e, "mouseover", Q);
          (this._activeTrigger.click = !1),
            (this._activeTrigger[fn] = !1),
            (this._activeTrigger[ct] = !1),
            (this._isHovered = null),
            this._queueCallback(
              () => {
                this._isWithActiveTrigger() ||
                  (this._isHovered || this._disposePopper(),
                  this._element.removeAttribute("aria-describedby"),
                  u.trigger(this._element, this.constructor.eventName("hidden")));
              },
              this.tip,
              this._isAnimated(),
            );
        }
      }
      update() {
        this._popper && this._popper.update();
      }
      _isWithContent() {
        return !!this._getTitle();
      }
      _getTipElement() {
        return (
          this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
        );
      }
      _createTipElement(e) {
        const t = this._getTemplateFactory(e).toHtml();
        if (!t) return null;
        t.classList.remove(hn, Ot), t.classList.add(`bs-${this.constructor.NAME}-auto`);
        const i = ((s) => {
          do s += Math.floor(1e6 * Math.random());
          while (document.getElementById(s));
          return s;
        })(this.constructor.NAME).toString();
        return t.setAttribute("id", i), this._isAnimated() && t.classList.add(hn), t;
      }
      setContent(e) {
        (this._newContent = e), this._isShown() && (this._disposePopper(), this.show());
      }
      _getTemplateFactory(e) {
        return (
          this._templateFactory
            ? this._templateFactory.changeContent(e)
            : (this._templateFactory = new hr({
                ...this._config,
                content: e,
                extraClass: this._resolvePossibleFunction(this._config.customClass),
              })),
          this._templateFactory
        );
      }
      _getContentForTemplate() {
        return { ".tooltip-inner": this._getTitle() };
      }
      _getTitle() {
        return (
          this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
        );
      }
      _initializeOnDelegatedTarget(e) {
        return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
      }
      _isAnimated() {
        return this._config.animation || (this.tip && this.tip.classList.contains(hn));
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(Ot);
      }
      _createPopper(e) {
        const t = Z(this._config.placement, [this, e, this._element]),
          i = pr[t.toUpperCase()];
        return ln(this._element, e, this._getPopperConfig(i));
      }
      _getOffset() {
        const { offset: e } = this._config;
        return typeof e == "string"
          ? e.split(",").map((t) => Number.parseInt(t, 10))
          : typeof e == "function"
            ? (t) => e(t, this._element)
            : e;
      }
      _resolvePossibleFunction(e) {
        return Z(e, [this._element]);
      }
      _getPopperConfig(e) {
        const t = {
          placement: e,
          modifiers: [
            { name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } },
            { name: "offset", options: { offset: this._getOffset() } },
            { name: "preventOverflow", options: { boundary: this._config.boundary } },
            { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } },
            {
              name: "preSetPlacement",
              enabled: !0,
              phase: "beforeMain",
              fn: (i) => {
                this._getTipElement().setAttribute("data-popper-placement", i.state.placement);
              },
            },
          ],
        };
        return { ...t, ...Z(this._config.popperConfig, [t]) };
      }
      _setListeners() {
        const e = this._config.trigger.split(" ");
        for (const t of e)
          if (t === "click")
            u.on(this._element, this.constructor.eventName("click"), this._config.selector, (i) => {
              this._initializeOnDelegatedTarget(i).toggle();
            });
          else if (t !== "manual") {
            const i = t === ct ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
              s = t === ct ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
            u.on(this._element, i, this._config.selector, (o) => {
              const r = this._initializeOnDelegatedTarget(o);
              (r._activeTrigger[o.type === "focusin" ? fn : ct] = !0), r._enter();
            }),
              u.on(this._element, s, this._config.selector, (o) => {
                const r = this._initializeOnDelegatedTarget(o);
                (r._activeTrigger[o.type === "focusout" ? fn : ct] = r._element.contains(o.relatedTarget)), r._leave();
              });
          }
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
          u.on(this._element.closest(Yi), Ui, this._hideModalHandler);
      }
      _fixTitle() {
        const e = this._element.getAttribute("title");
        e &&
          (this._element.getAttribute("aria-label") ||
            this._element.textContent.trim() ||
            this._element.setAttribute("aria-label", e),
          this._element.setAttribute("data-bs-original-title", e),
          this._element.removeAttribute("title"));
      }
      _enter() {
        this._isShown() || this._isHovered
          ? (this._isHovered = !0)
          : ((this._isHovered = !0),
            this._setTimeout(() => {
              this._isHovered && this.show();
            }, this._config.delay.show));
      }
      _leave() {
        this._isWithActiveTrigger() ||
          ((this._isHovered = !1),
          this._setTimeout(() => {
            this._isHovered || this.hide();
          }, this._config.delay.hide));
      }
      _setTimeout(e, t) {
        clearTimeout(this._timeout), (this._timeout = setTimeout(e, t));
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
      _getConfig(e) {
        const t = _e.getDataAttributes(this._element);
        for (const i of Object.keys(t)) fr.has(i) && delete t[i];
        return (
          (e = { ...t, ...(typeof e == "object" && e ? e : {}) }),
          (e = this._mergeConfigObj(e)),
          (e = this._configAfterMerge(e)),
          this._typeCheckConfig(e),
          e
        );
      }
      _configAfterMerge(e) {
        return (
          (e.container = e.container === !1 ? document.body : M(e.container)),
          typeof e.delay == "number" && (e.delay = { show: e.delay, hide: e.delay }),
          typeof e.title == "number" && (e.title = e.title.toString()),
          typeof e.content == "number" && (e.content = e.content.toString()),
          e
        );
      }
      _getDelegateConfig() {
        const e = {};
        for (const [t, i] of Object.entries(this._config)) this.constructor.Default[t] !== i && (e[t] = i);
        return (e.selector = !1), (e.trigger = "manual"), e;
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), (this._popper = null)),
          this.tip && (this.tip.remove(), (this.tip = null));
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Ie.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    ie(Ie);
    const _r = {
        ...Ie.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click",
      },
      br = { ...Ie.DefaultType, content: "(null|string|element|function)" };
    class kt extends Ie {
      static get Default() {
        return _r;
      }
      static get DefaultType() {
        return br;
      }
      static get NAME() {
        return "popover";
      }
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      _getContentForTemplate() {
        return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = kt.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0) throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    ie(kt);
    const pn = ".bs.scrollspy",
      vr = `activate${pn}`,
      Ki = `click${pn}`,
      yr = `load${pn}.data-api`,
      Ze = "active",
      mn = "[href]",
      Qi = ".nav-link",
      wr = `${Qi}, .nav-item > ${Qi}, .list-group-item`,
      Ar = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [0.1, 0.5, 1] },
      Er = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array",
      };
    class ut extends ue {
      constructor(e, t) {
        super(e, t),
          (this._targetLinks = new Map()),
          (this._observableSections = new Map()),
          (this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element),
          (this._activeTarget = null),
          (this._observer = null),
          (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
          this.refresh();
      }
      static get Default() {
        return Ar;
      }
      static get DefaultType() {
        return Er;
      }
      static get NAME() {
        return "scrollspy";
      }
      refresh() {
        this._initializeTargetsAndObservables(),
          this._maybeEnableSmoothScroll(),
          this._observer ? this._observer.disconnect() : (this._observer = this._getNewObserver());
        for (const e of this._observableSections.values()) this._observer.observe(e);
      }
      dispose() {
        this._observer.disconnect(), super.dispose();
      }
      _configAfterMerge(e) {
        return (
          (e.target = M(e.target) || document.body),
          (e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin),
          typeof e.threshold == "string" && (e.threshold = e.threshold.split(",").map((t) => Number.parseFloat(t))),
          e
        );
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll &&
          (u.off(this._config.target, Ki),
          u.on(this._config.target, Ki, mn, (e) => {
            const t = this._observableSections.get(e.target.hash);
            if (t) {
              e.preventDefault();
              const i = this._rootElement || window,
                s = t.offsetTop - this._element.offsetTop;
              if (i.scrollTo) return void i.scrollTo({ top: s, behavior: "smooth" });
              i.scrollTop = s;
            }
          }));
      }
      _getNewObserver() {
        const e = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
        return new IntersectionObserver((t) => this._observerCallback(t), e);
      }
      _observerCallback(e) {
        const t = (r) => this._targetLinks.get(`#${r.target.id}`),
          i = (r) => {
            (this._previousScrollData.visibleEntryTop = r.target.offsetTop), this._process(t(r));
          },
          s = (this._rootElement || document.documentElement).scrollTop,
          o = s >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = s;
        for (const r of e) {
          if (!r.isIntersecting) {
            (this._activeTarget = null), this._clearActiveClass(t(r));
            continue;
          }
          const c = r.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (o && c) {
            if ((i(r), !s)) return;
          } else o || c || i(r);
        }
      }
      _initializeTargetsAndObservables() {
        (this._targetLinks = new Map()), (this._observableSections = new Map());
        const e = _.find(mn, this._config.target);
        for (const t of e) {
          if (!t.hash || P(t)) continue;
          const i = _.findOne(decodeURI(t.hash), this._element);
          F(i) && (this._targetLinks.set(decodeURI(t.hash), t), this._observableSections.set(t.hash, i));
        }
      }
      _process(e) {
        this._activeTarget !== e &&
          (this._clearActiveClass(this._config.target),
          (this._activeTarget = e),
          e.classList.add(Ze),
          this._activateParents(e),
          u.trigger(this._element, vr, { relatedTarget: e }));
      }
      _activateParents(e) {
        if (e.classList.contains("dropdown-item"))
          _.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(Ze);
        else for (const t of _.parents(e, ".nav, .list-group")) for (const i of _.prev(t, wr)) i.classList.add(Ze);
      }
      _clearActiveClass(e) {
        e.classList.remove(Ze);
        const t = _.find(`${mn}.${Ze}`, e);
        for (const i of t) i.classList.remove(Ze);
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = ut.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
              throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    u.on(window, yr, () => {
      for (const n of _.find('[data-bs-spy="scroll"]')) ut.getOrCreateInstance(n);
    }),
      ie(ut);
    const Pe = ".bs.tab",
      Tr = `hide${Pe}`,
      Cr = `hidden${Pe}`,
      xr = `show${Pe}`,
      Or = `shown${Pe}`,
      kr = `click${Pe}`,
      Sr = `keydown${Pe}`,
      Lr = `load${Pe}`,
      Dr = "ArrowLeft",
      Gi = "ArrowRight",
      Ir = "ArrowUp",
      Zi = "ArrowDown",
      gn = "Home",
      Ji = "End",
      $e = "active",
      es = "fade",
      _n = "show",
      ts = ".dropdown-toggle",
      bn = `:not(${ts})`,
      ns = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      vn = `.nav-link${bn}, .list-group-item${bn}, [role="tab"]${bn}, ${ns}`,
      Pr = `.${$e}[data-bs-toggle="tab"], .${$e}[data-bs-toggle="pill"], .${$e}[data-bs-toggle="list"]`;
    class Ne extends ue {
      constructor(e) {
        super(e),
          (this._parent = this._element.closest('.list-group, .nav, [role="tablist"]')),
          this._parent &&
            (this._setInitialAttributes(this._parent, this._getChildren()),
            u.on(this._element, Sr, (t) => this._keydown(t)));
      }
      static get NAME() {
        return "tab";
      }
      show() {
        const e = this._element;
        if (this._elemIsActive(e)) return;
        const t = this._getActiveElem(),
          i = t ? u.trigger(t, Tr, { relatedTarget: e }) : null;
        u.trigger(e, xr, { relatedTarget: t }).defaultPrevented ||
          (i && i.defaultPrevented) ||
          (this._deactivate(t, e), this._activate(e, t));
      }
      _activate(e, t) {
        e &&
          (e.classList.add($e),
          this._activate(_.getElementFromSelector(e)),
          this._queueCallback(
            () => {
              e.getAttribute("role") === "tab"
                ? (e.removeAttribute("tabindex"),
                  e.setAttribute("aria-selected", !0),
                  this._toggleDropDown(e, !0),
                  u.trigger(e, Or, { relatedTarget: t }))
                : e.classList.add(_n);
            },
            e,
            e.classList.contains(es),
          ));
      }
      _deactivate(e, t) {
        e &&
          (e.classList.remove($e),
          e.blur(),
          this._deactivate(_.getElementFromSelector(e)),
          this._queueCallback(
            () => {
              e.getAttribute("role") === "tab"
                ? (e.setAttribute("aria-selected", !1),
                  e.setAttribute("tabindex", "-1"),
                  this._toggleDropDown(e, !1),
                  u.trigger(e, Cr, { relatedTarget: t }))
                : e.classList.remove(_n);
            },
            e,
            e.classList.contains(es),
          ));
      }
      _keydown(e) {
        if (![Dr, Gi, Ir, Zi, gn, Ji].includes(e.key)) return;
        e.stopPropagation(), e.preventDefault();
        const t = this._getChildren().filter((s) => !P(s));
        let i;
        if ([gn, Ji].includes(e.key)) i = t[e.key === gn ? 0 : t.length - 1];
        else {
          const s = [Gi, Zi].includes(e.key);
          i = jt(t, e.target, s, !0);
        }
        i && (i.focus({ preventScroll: !0 }), Ne.getOrCreateInstance(i).show());
      }
      _getChildren() {
        return _.find(vn, this._parent);
      }
      _getActiveElem() {
        return this._getChildren().find((e) => this._elemIsActive(e)) || null;
      }
      _setInitialAttributes(e, t) {
        this._setAttributeIfNotExists(e, "role", "tablist");
        for (const i of t) this._setInitialAttributesOnChild(i);
      }
      _setInitialAttributesOnChild(e) {
        e = this._getInnerElement(e);
        const t = this._elemIsActive(e),
          i = this._getOuterElement(e);
        e.setAttribute("aria-selected", t),
          i !== e && this._setAttributeIfNotExists(i, "role", "presentation"),
          t || e.setAttribute("tabindex", "-1"),
          this._setAttributeIfNotExists(e, "role", "tab"),
          this._setInitialAttributesOnTargetPanel(e);
      }
      _setInitialAttributesOnTargetPanel(e) {
        const t = _.getElementFromSelector(e);
        t &&
          (this._setAttributeIfNotExists(t, "role", "tabpanel"),
          e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `${e.id}`));
      }
      _toggleDropDown(e, t) {
        const i = this._getOuterElement(e);
        if (!i.classList.contains("dropdown")) return;
        const s = (o, r) => {
          const c = _.findOne(o, i);
          c && c.classList.toggle(r, t);
        };
        s(ts, $e), s(".dropdown-menu", _n), i.setAttribute("aria-expanded", t);
      }
      _setAttributeIfNotExists(e, t, i) {
        e.hasAttribute(t) || e.setAttribute(t, i);
      }
      _elemIsActive(e) {
        return e.classList.contains($e);
      }
      _getInnerElement(e) {
        return e.matches(vn) ? e : _.findOne(vn, e);
      }
      _getOuterElement(e) {
        return e.closest(".nav-item, .list-group-item") || e;
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = Ne.getOrCreateInstance(this);
          if (typeof e == "string") {
            if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
              throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    u.on(document, kr, ns, function (n) {
      ["A", "AREA"].includes(this.tagName) && n.preventDefault(), P(this) || Ne.getOrCreateInstance(this).show();
    }),
      u.on(window, Lr, () => {
        for (const n of _.find(Pr)) Ne.getOrCreateInstance(n);
      }),
      ie(Ne);
    const Ee = ".bs.toast",
      $r = `mouseover${Ee}`,
      Nr = `mouseout${Ee}`,
      Mr = `focusin${Ee}`,
      jr = `focusout${Ee}`,
      Rr = `hide${Ee}`,
      Fr = `hidden${Ee}`,
      Hr = `show${Ee}`,
      Wr = `shown${Ee}`,
      is = "hide",
      St = "show",
      Lt = "showing",
      Br = { animation: "boolean", autohide: "boolean", delay: "number" },
      qr = { animation: !0, autohide: !0, delay: 5e3 };
    class dt extends ue {
      constructor(e, t) {
        super(e, t),
          (this._timeout = null),
          (this._hasMouseInteraction = !1),
          (this._hasKeyboardInteraction = !1),
          this._setListeners();
      }
      static get Default() {
        return qr;
      }
      static get DefaultType() {
        return Br;
      }
      static get NAME() {
        return "toast";
      }
      show() {
        u.trigger(this._element, Hr).defaultPrevented ||
          (this._clearTimeout(),
          this._config.animation && this._element.classList.add("fade"),
          this._element.classList.remove(is),
          V(this._element),
          this._element.classList.add(St, Lt),
          this._queueCallback(
            () => {
              this._element.classList.remove(Lt), u.trigger(this._element, Wr), this._maybeScheduleHide();
            },
            this._element,
            this._config.animation,
          ));
      }
      hide() {
        this.isShown() &&
          (u.trigger(this._element, Rr).defaultPrevented ||
            (this._element.classList.add(Lt),
            this._queueCallback(
              () => {
                this._element.classList.add(is), this._element.classList.remove(Lt, St), u.trigger(this._element, Fr);
              },
              this._element,
              this._config.animation,
            )));
      }
      dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(St), super.dispose();
      }
      isShown() {
        return this._element.classList.contains(St);
      }
      _maybeScheduleHide() {
        this._config.autohide &&
          (this._hasMouseInteraction ||
            this._hasKeyboardInteraction ||
            (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
      }
      _onInteraction(e, t) {
        switch (e.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = t;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = t;
        }
        if (t) return void this._clearTimeout();
        const i = e.relatedTarget;
        this._element === i || this._element.contains(i) || this._maybeScheduleHide();
      }
      _setListeners() {
        u.on(this._element, $r, (e) => this._onInteraction(e, !0)),
          u.on(this._element, Nr, (e) => this._onInteraction(e, !1)),
          u.on(this._element, Mr, (e) => this._onInteraction(e, !0)),
          u.on(this._element, jr, (e) => this._onInteraction(e, !1));
      }
      _clearTimeout() {
        clearTimeout(this._timeout), (this._timeout = null);
      }
      static jQueryInterface(e) {
        return this.each(function () {
          const t = dt.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0) throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    return (
      ft(dt),
      ie(dt),
      {
        Alert: nt,
        Button: it,
        Carousel: We,
        Collapse: qe,
        Dropdown: de,
        Modal: De,
        Offcanvas: ye,
        Popover: kt,
        ScrollSpy: ut,
        Tab: Ne,
        Toast: dt,
        Tooltip: Ie,
      }
    );
  });
})(Es);
var ea = Es.exports;
const $t = Jr(ea),
  ta = document.querySelectorAll('[data-bs-toggle="tooltip"]');
[...ta].map((a) => {
  $t.Tooltip.getInstance(a) || new $t.Tooltip(a);
});
document.addEventListener("astro:after-swap", () => {
  [...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map((l) => {
    $t.Tooltip.getInstance(l) || new $t.Tooltip(l);
  });
});
const et = "data-astro-transition-persist";
function na(a) {
  for (const l of document.scripts)
    for (const d of a.scripts)
      if (
        !d.hasAttribute("data-astro-rerun") &&
        ((!l.src && l.textContent === d.textContent) || (l.src && l.type === d.type && l.src === d.src))
      ) {
        d.dataset.astroExec = "";
        break;
      }
}
function ia(a) {
  const l = document.documentElement,
    d = [...l.attributes].filter(({ name: g }) => (l.removeAttribute(g), g.startsWith("data-astro-")));
  [...a.documentElement.attributes, ...d].forEach(({ name: g, value: v }) => l.setAttribute(g, v));
}
function sa(a) {
  for (const l of Array.from(document.head.children)) {
    const d = aa(l, a);
    d ? d.remove() : l.remove();
  }
  document.head.append(...a.head.children);
}
function oa(a, l) {
  l.replaceWith(a);
  for (const d of l.querySelectorAll(`[${et}]`)) {
    const g = d.getAttribute(et),
      v = a.querySelector(`[${et}="${g}"]`);
    v &&
      (v.replaceWith(d),
      v.localName === "astro-island" &&
        la(d) &&
        (d.setAttribute("ssr", ""), d.setAttribute("props", v.getAttribute("props"))));
  }
}
const ra = () => {
    const a = document.activeElement;
    if (a?.closest(`[${et}]`)) {
      if (a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement) {
        const l = a.selectionStart,
          d = a.selectionEnd;
        return () => En({ activeElement: a, start: l, end: d });
      }
      return () => En({ activeElement: a });
    } else return () => En({ activeElement: null });
  },
  En = ({ activeElement: a, start: l, end: d }) => {
    a &&
      (a.focus(),
      (a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement) &&
        (typeof l == "number" && (a.selectionStart = l), typeof d == "number" && (a.selectionEnd = d)));
  },
  aa = (a, l) => {
    const d = a.getAttribute(et),
      g = d && l.head.querySelector(`[${et}="${d}"]`);
    if (g) return g;
    if (a.matches("link[rel=stylesheet]")) {
      const v = a.getAttribute("href");
      return l.head.querySelector(`link[rel=stylesheet][href="${v}"]`);
    }
    return null;
  },
  la = (a) => {
    const l = a.dataset.astroTransitionPersistProps;
    return l == null || l === "false";
  },
  ca = (a) => {
    na(a), ia(a), sa(a);
    const l = ra();
    oa(a.body, document.body), l();
  },
  ua = "astro:before-preparation",
  da = "astro:after-preparation",
  ha = "astro:before-swap",
  fa = "astro:after-swap",
  pa = (a) => document.dispatchEvent(new Event(a));
class Ts extends Event {
  from;
  to;
  direction;
  navigationType;
  sourceElement;
  info;
  newDocument;
  signal;
  constructor(l, d, g, v, I, B, x, M, F, P) {
    super(l, d),
      (this.from = g),
      (this.to = v),
      (this.direction = I),
      (this.navigationType = B),
      (this.sourceElement = x),
      (this.info = M),
      (this.newDocument = F),
      (this.signal = P),
      Object.defineProperties(this, {
        from: { enumerable: !0 },
        to: { enumerable: !0, writable: !0 },
        direction: { enumerable: !0, writable: !0 },
        navigationType: { enumerable: !0 },
        sourceElement: { enumerable: !0 },
        info: { enumerable: !0 },
        newDocument: { enumerable: !0, writable: !0 },
        signal: { enumerable: !0 },
      });
  }
}
class ma extends Ts {
  formData;
  loader;
  constructor(l, d, g, v, I, B, x, M, F, P) {
    super(ua, { cancelable: !0 }, l, d, g, v, I, B, x, M),
      (this.formData = F),
      (this.loader = P.bind(this, this)),
      Object.defineProperties(this, { formData: { enumerable: !0 }, loader: { enumerable: !0, writable: !0 } });
  }
}
class ga extends Ts {
  direction;
  viewTransition;
  swap;
  constructor(l, d) {
    super(ha, void 0, l.from, l.to, l.direction, l.navigationType, l.sourceElement, l.info, l.newDocument, l.signal),
      (this.direction = l.direction),
      (this.viewTransition = d),
      (this.swap = () => ca(this.newDocument)),
      Object.defineProperties(this, {
        direction: { enumerable: !0 },
        viewTransition: { enumerable: !0 },
        swap: { enumerable: !0, writable: !0 },
      });
  }
}
async function _a(a, l, d, g, v, I, B, x, M) {
  const F = new ma(a, l, d, g, v, I, window.document, B, x, M);
  return (
    document.dispatchEvent(F) &&
      (await F.loader(), F.defaultPrevented || (pa(da), F.navigationType !== "traverse" && Cn({ scrollX, scrollY }))),
    F
  );
}
function ba(a, l) {
  const d = new ga(a, l);
  return document.dispatchEvent(d), d.swap(), d;
}
const va = history.pushState.bind(history),
  Nt = history.replaceState.bind(history),
  Cn = (a) => {
    history.state && ((history.scrollRestoration = "manual"), Nt({ ...history.state, ...a }, ""));
  },
  xn = !!document.startViewTransition,
  On = () => !!document.querySelector('[name="astro-view-transitions-enabled"]'),
  Cs = (a, l) => a.pathname === l.pathname && a.search === l.search;
let ce, je, Mt;
const xs = (a) => document.dispatchEvent(new Event(a)),
  Os = () => xs("astro:page-load"),
  ya = () => {
    let a = document.createElement("div");
    a.setAttribute("aria-live", "assertive"),
      a.setAttribute("aria-atomic", "true"),
      (a.className = "astro-route-announcer"),
      document.body.append(a),
      setTimeout(() => {
        let l = document.title || document.querySelector("h1")?.textContent || location.pathname;
        a.textContent = l;
      }, 60);
  },
  gs = "data-astro-transition-persist",
  _s = "data-astro-transition",
  Tn = "data-astro-transition-fallback";
let bs,
  ht = 0;
history.state
  ? ((ht = history.state.index), scrollTo({ left: history.state.scrollX, top: history.state.scrollY }))
  : On() && (Nt({ index: ht, scrollX, scrollY }, ""), (history.scrollRestoration = "manual"));
async function wa(a, l) {
  try {
    const d = await fetch(a, l),
      v = (d.headers.get("content-type") ?? "").split(";", 1)[0].trim();
    return v !== "text/html" && v !== "application/xhtml+xml"
      ? null
      : { html: await d.text(), redirected: d.redirected ? d.url : void 0, mediaType: v };
  } catch {
    return null;
  }
}
function ks() {
  const a = document.querySelector('[name="astro-view-transitions-fallback"]');
  return a ? a.getAttribute("content") : "animate";
}
function Aa() {
  let a = Promise.resolve();
  for (const l of Array.from(document.scripts)) {
    if (l.dataset.astroExec === "") continue;
    const d = l.getAttribute("type");
    if (d && d !== "module" && d !== "text/javascript") continue;
    const g = document.createElement("script");
    g.innerHTML = l.innerHTML;
    for (const v of l.attributes) {
      if (v.name === "src") {
        const I = new Promise((B) => {
          g.onload = g.onerror = B;
        });
        a = a.then(() => I);
      }
      g.setAttribute(v.name, v.value);
    }
    (g.dataset.astroExec = ""), l.replaceWith(g);
  }
  return a;
}
const Ss = (a, l, d, g, v) => {
  const I = Cs(l, a),
    B = document.title;
  document.title = g;
  let x = !1;
  if (a.href !== location.href && !v)
    if (d.history === "replace") {
      const M = history.state;
      Nt({ ...d.state, index: M.index, scrollX: M.scrollX, scrollY: M.scrollY }, "", a.href);
    } else va({ ...d.state, index: ++ht, scrollX: 0, scrollY: 0 }, "", a.href);
  if (((document.title = B), (Mt = a), I || (scrollTo({ left: 0, top: 0, behavior: "instant" }), (x = !0)), v))
    scrollTo(v.scrollX, v.scrollY);
  else {
    if (a.hash) {
      history.scrollRestoration = "auto";
      const M = history.state;
      (location.href = a.href), history.state || (Nt(M, ""), I && window.dispatchEvent(new PopStateEvent("popstate")));
    } else x || scrollTo({ left: 0, top: 0, behavior: "instant" });
    history.scrollRestoration = "manual";
  }
};
function Ea(a) {
  const l = [];
  for (const d of a.querySelectorAll("head link[rel=stylesheet]"))
    if (
      !document.querySelector(`[${gs}="${d.getAttribute(gs)}"], link[rel=stylesheet][href="${d.getAttribute("href")}"]`)
    ) {
      const g = document.createElement("link");
      g.setAttribute("rel", "preload"),
        g.setAttribute("as", "style"),
        g.setAttribute("href", d.getAttribute("href")),
        l.push(
          new Promise((v) => {
            ["load", "error"].forEach((I) => g.addEventListener(I, v)), document.head.append(g);
          }),
        );
    }
  return l;
}
async function vs(a, l, d, g, v) {
  async function I(M) {
    function F(V) {
      const G = V.effect;
      return !G || !(G instanceof KeyframeEffect) || !G.target
        ? !1
        : window.getComputedStyle(G.target, G.pseudoElement).animationIterationCount === "infinite";
    }
    const P = document.getAnimations();
    document.documentElement.setAttribute(Tn, M);
    const Q = document.getAnimations().filter((V) => !P.includes(V) && !F(V));
    return Promise.allSettled(Q.map((V) => V.finished));
  }
  if (v === "animate" && !d.transitionSkipped && !a.signal.aborted)
    try {
      await I("old");
    } catch {}
  const B = document.title,
    x = ba(a, d.viewTransition);
  Ss(x.to, x.from, l, B, g),
    xs(fa),
    v === "animate" &&
      (!d.transitionSkipped && !x.signal.aborted
        ? I("new").finally(() => d.viewTransitionFinished())
        : d.viewTransitionFinished());
}
function Ta() {
  return ce?.controller.abort(), (ce = { controller: new AbortController() });
}
async function Ls(a, l, d, g, v) {
  const I = Ta();
  if (!On() || location.origin !== d.origin) {
    I === ce && (ce = void 0), (location.href = d.href);
    return;
  }
  const B = v ? "traverse" : g.history === "replace" ? "replace" : "push";
  if (
    (B !== "traverse" && Cn({ scrollX, scrollY }), Cs(l, d) && ((a !== "back" && d.hash) || (a === "back" && l.hash)))
  ) {
    Ss(d, l, g, document.title, v), I === ce && (ce = void 0);
    return;
  }
  const x = await _a(l, d, a, B, g.sourceElement, g.info, I.controller.signal, g.formData, M);
  if (x.defaultPrevented || x.signal.aborted) {
    I === ce && (ce = void 0), x.signal.aborted || (location.href = d.href);
    return;
  }
  async function M(k) {
    const Q = k.to.href,
      V = { signal: k.signal };
    if (k.formData) {
      V.method = "POST";
      const q =
        k.sourceElement instanceof HTMLFormElement
          ? k.sourceElement
          : k.sourceElement instanceof HTMLElement && "form" in k.sourceElement
            ? k.sourceElement.form
            : k.sourceElement?.closest("form");
      V.body =
        q?.attributes.getNamedItem("enctype")?.value === "application/x-www-form-urlencoded"
          ? new URLSearchParams(k.formData)
          : k.formData;
    }
    const G = await wa(Q, V);
    if (G === null) {
      k.preventDefault();
      return;
    }
    if (G.redirected) {
      const q = new URL(G.redirected);
      if (q.origin !== k.to.origin) {
        k.preventDefault();
        return;
      }
      k.to = q;
    }
    if (
      ((bs ??= new DOMParser()),
      (k.newDocument = bs.parseFromString(G.html, G.mediaType)),
      k.newDocument.querySelectorAll("noscript").forEach((q) => q.remove()),
      !k.newDocument.querySelector('[name="astro-view-transitions-enabled"]') && !k.formData)
    ) {
      k.preventDefault();
      return;
    }
    const Ce = Ea(k.newDocument);
    Ce.length && !k.signal.aborted && (await Promise.all(Ce));
  }
  async function F() {
    if (je && je.viewTransition) {
      try {
        je.viewTransition.skipTransition();
      } catch {}
      try {
        await je.viewTransition.updateCallbackDone;
      } catch {}
    }
    return (je = { transitionSkipped: !1 });
  }
  const P = await F();
  if (x.signal.aborted) {
    I === ce && (ce = void 0);
    return;
  }
  if ((document.documentElement.setAttribute(_s, x.direction), xn))
    P.viewTransition = document.startViewTransition(async () => await vs(x, g, P, v));
  else {
    const k = (async () => {
      await Promise.resolve(), await vs(x, g, P, v, ks());
    })();
    P.viewTransition = {
      updateCallbackDone: k,
      ready: k,
      finished: new Promise((Q) => (P.viewTransitionFinished = Q)),
      skipTransition: () => {
        (P.transitionSkipped = !0), document.documentElement.removeAttribute(Tn);
      },
    };
  }
  P.viewTransition.updateCallbackDone.finally(async () => {
    await Aa(), Os(), ya();
  }),
    P.viewTransition.finished.finally(() => {
      (P.viewTransition = void 0),
        P === je && (je = void 0),
        I === ce && (ce = void 0),
        document.documentElement.removeAttribute(_s),
        document.documentElement.removeAttribute(Tn);
    });
  try {
    await P.viewTransition.updateCallbackDone;
  } catch (k) {
    const Q = k;
    console.log("[astro]", Q.name, Q.message, Q.stack);
  }
}
async function ys(a, l) {
  await Ls("forward", Mt, new URL(a, location.href), l ?? {});
}
function Ca(a) {
  if (!On() && a.state) {
    location.reload();
    return;
  }
  if (a.state === null) return;
  const l = history.state,
    d = l.index,
    g = d > ht ? "forward" : "back";
  (ht = d), Ls(g, Mt, new URL(location.href), {}, l);
}
const ws = () => {
  history.state && (scrollX !== history.state.scrollX || scrollY !== history.state.scrollY) && Cn({ scrollX, scrollY });
};
{
  if (xn || ks() !== "none")
    if (
      ((Mt = new URL(location.href)),
      addEventListener("popstate", Ca),
      addEventListener("load", Os),
      "onscrollend" in window)
    )
      addEventListener("scrollend", ws);
    else {
      let a, l, d, g;
      const v = () => {
        if (g !== history.state?.index) {
          clearInterval(a), (a = void 0);
          return;
        }
        if (l === scrollY && d === scrollX) {
          clearInterval(a), (a = void 0), ws();
          return;
        } else (l = scrollY), (d = scrollX);
      };
      addEventListener(
        "scroll",
        () => {
          a === void 0 && ((g = history.state.index), (l = scrollY), (d = scrollX), (a = window.setInterval(v, 50)));
        },
        { passive: !0 },
      );
    }
  for (const a of document.scripts) a.dataset.astroExec = "";
}
function xa() {
  const a = document.querySelector('[name="astro-view-transitions-fallback"]');
  return a ? a.getAttribute("content") : "animate";
}
function As(a) {
  return a.dataset.astroReload !== void 0;
}
(xn || xa() !== "none") &&
  (document.addEventListener("click", (a) => {
    let l = a.target;
    if (
      (a.composed && (l = a.composedPath()[0]),
      l instanceof Element && (l = l.closest("a, area")),
      !(l instanceof HTMLAnchorElement) && !(l instanceof SVGAElement) && !(l instanceof HTMLAreaElement))
    )
      return;
    const d = l instanceof HTMLElement ? l.target : l.target.baseVal,
      g = l instanceof HTMLElement ? l.href : l.href.baseVal,
      v = new URL(g, location.href).origin;
    As(l) ||
      l.hasAttribute("download") ||
      !l.href ||
      (d && d !== "_self") ||
      v !== location.origin ||
      a.button !== 0 ||
      a.metaKey ||
      a.ctrlKey ||
      a.altKey ||
      a.shiftKey ||
      a.defaultPrevented ||
      (a.preventDefault(),
      ys(g, { history: l.dataset.astroHistory === "replace" ? "replace" : "auto", sourceElement: l }));
  }),
  document.addEventListener("submit", (a) => {
    let l = a.target;
    if (l.tagName !== "FORM" || a.defaultPrevented || As(l)) return;
    const d = l,
      g = a.submitter,
      v = new FormData(d, g),
      I = typeof d.action == "string" ? d.action : d.getAttribute("action"),
      B = typeof d.method == "string" ? d.method : d.getAttribute("method");
    let x = g?.getAttribute("formaction") ?? I ?? location.pathname;
    const M = g?.getAttribute("formmethod") ?? B ?? "get";
    if (M === "dialog" || location.origin !== new URL(x, location.href).origin) return;
    const F = { sourceElement: g ?? d };
    if (M === "get") {
      const P = new URLSearchParams(v),
        k = new URL(x);
      (k.search = P.toString()), (x = k.toString());
    } else F.formData = v;
    a.preventDefault(), ys(x, F);
  }));
