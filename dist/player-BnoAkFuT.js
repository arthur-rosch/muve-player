var uy = Object.defineProperty;
var l7 = (s) => {
  throw TypeError(s);
};
var dy = (s, t, e) => t in s ? uy(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var $ = (s, t, e) => dy(s, typeof t != "symbol" ? t + "" : t, e), Z2 = (s, t, e) => t.has(s) || l7("Cannot " + e);
var r = (s, t, e) => (Z2(s, t, "read from private field"), e ? e.call(s) : t.get(s)), C = (s, t, e) => t.has(s) ? l7("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(s) : t.set(s, e), g = (s, t, e, n) => (Z2(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), c = (s, t, e) => (Z2(s, t, "access private method"), e);
var u7 = (s, t, e, n) => ({
  set _(i) {
    g(s, t, i, e);
  },
  get _() {
    return r(s, t, n);
  }
});
import * as u from "react";
import li, { useLayoutEffect as hy, useEffect as ou, forwardRef as A, createElement as I, useState as wd, useRef as fy } from "react";
import * as xd from "react-dom";
import py, { createPortal as Cy } from "react-dom";
var Sd = { exports: {} }, m2 = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var my = li, gy = Symbol.for("react.element"), yy = Symbol.for("react.fragment"), vy = Object.prototype.hasOwnProperty, by = my.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, wy = { key: !0, ref: !0, __self: !0, __source: !0 };
function $d(s, t, e) {
  var n, i = {}, o = null, a = null;
  e !== void 0 && (o = "" + e), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (n in t) vy.call(t, n) && !wy.hasOwnProperty(n) && (i[n] = t[n]);
  if (s && s.defaultProps) for (n in t = s.defaultProps, t) i[n] === void 0 && (i[n] = t[n]);
  return { $$typeof: gy, type: s, key: o, ref: a, props: i, _owner: by.current };
}
m2.Fragment = yy;
m2.jsx = $d;
m2.jsxs = $d;
Sd.exports = m2;
var w = Sd.exports;
const Os = typeof document > "u", cn = Symbol(0);
let Ia = !1, Lc = !1, As = null, Mr = null, ps = null, Yt = 0, Tr = [], au = {};
const xy = () => {
}, W6 = 0, Ed = 1, Va = 2, g2 = 3;
function Sy() {
  Ia = !0, queueMicrotask(Td);
}
function Td() {
  if (!Tr.length) {
    Ia = !1;
    return;
  }
  Lc = !0;
  for (let s = 0; s < Tr.length; s++)
    Tr[s].$st !== W6 && $y(Tr[s]);
  Tr = [], Ia = !1, Lc = !1;
}
function $y(s) {
  let t = [s];
  for (; s = s[cn]; )
    s.$e && s.$st !== W6 && t.push(s);
  for (let e = t.length - 1; e >= 0; e--)
    pu(t[e]);
}
function Ey(s) {
  const t = q6();
  return Vo(t, s.length ? s.bind(null, F6.bind(t)) : s, null);
}
function O(s) {
  return Vo(As, s, null);
}
function _6(s) {
  return Vo(null, s, null);
}
function Ns() {
  Lc || Td();
}
function Io() {
  return As;
}
function Mt(s, t) {
  try {
    return Vo(t, s, null);
  } catch (e) {
    lu(t, e);
    return;
  }
}
function cu(s, t = As) {
  return t == null ? void 0 : t.$cx[s];
}
function Ty(s, t, e = As) {
  e && (e.$cx = { ...e.$cx, [s]: t });
}
function ue(s) {
  if (!s || !As)
    return s || xy;
  const t = As;
  return t.$d ? Array.isArray(t.$d) ? t.$d.push(s) : t.$d = [t.$d, s] : t.$d = s, function() {
    t.$st !== g2 && (s.call(null), y2(t.$d) ? t.$d = null : Array.isArray(t.$d) && t.$d.splice(t.$d.indexOf(s), 1));
  };
}
function F6(s = !0) {
  if (this.$st !== g2) {
    if (this.$h)
      if (Array.isArray(this.$h))
        for (let t = this.$h.length - 1; t >= 0; t--)
          F6.call(this.$h[t]);
      else
        F6.call(this.$h);
    if (s) {
      const t = this[cn];
      t && (Array.isArray(t.$h) ? t.$h.splice(t.$h.indexOf(this), 1) : t.$h = null), Ly(this);
    }
  }
}
function Ly(s) {
  s.$st = g2, s.$d && Ld(s), s.$s && Pc(s, 0), s[cn] = null, s.$s = null, s.$o = null, s.$h = null, s.$cx = au, s.$eh = null;
}
function Ld(s) {
  try {
    if (Array.isArray(s.$d))
      for (let t = s.$d.length - 1; t >= 0; t--) {
        const e = s.$d[t];
        e.call(e);
      }
    else
      s.$d.call(s.$d);
    s.$d = null;
  } catch (t) {
    lu(s, t);
  }
}
function Vo(s, t, e) {
  const n = As, i = Mr;
  As = s, Mr = e;
  try {
    return t.call(s);
  } finally {
    As = n, Mr = i;
  }
}
function lu(s, t) {
  if (!s || !s.$eh)
    throw t;
  let e = 0, n = s.$eh.length, i = t;
  for (e = 0; e < n; e++)
    try {
      s.$eh[e](i);
      break;
    } catch (o) {
      i = o;
    }
  if (e === n)
    throw i;
}
function uu() {
  return this.$st === g2 ? this.$v : (Mr && !this.$e && (!ps && Mr.$s && Mr.$s[Yt] == this ? Yt++ : ps ? ps.push(this) : ps = [this]), this.$c && pu(this), this.$v);
}
function Pd(s) {
  const t = y2(s) ? s(this.$v) : s;
  if (this.$ch(this.$v, t) && (this.$v = t, this.$o))
    for (let e = 0; e < this.$o.length; e++)
      Id(this.$o[e], Va);
  return this.$v;
}
const du = function() {
  this[cn] = null, this.$h = null, As && As.append(this);
}, Cr = du.prototype;
Cr.$cx = au;
Cr.$eh = null;
Cr.$c = null;
Cr.$d = null;
Cr.append = function(s) {
  s[cn] = this, this.$h ? Array.isArray(this.$h) ? this.$h.push(s) : this.$h = [this.$h, s] : this.$h = s, s.$cx = s.$cx === au ? this.$cx : { ...this.$cx, ...s.$cx }, this.$eh && (s.$eh = s.$eh ? [...s.$eh, ...this.$eh] : this.$eh);
};
Cr.dispose = function() {
  F6.call(this);
};
function q6() {
  return new du();
}
const Md = function(t, e, n) {
  du.call(this), this.$st = e ? Va : W6, this.$i = !1, this.$e = !1, this.$s = null, this.$o = null, this.$v = t, e && (this.$c = e), n && n.dirty && (this.$ch = n.dirty);
}, hu = Md.prototype;
Object.setPrototypeOf(hu, Cr);
hu.$ch = Py;
hu.call = uu;
function fu(s, t, e) {
  return new Md(s, t, e);
}
function Py(s, t) {
  return s !== t;
}
function y2(s) {
  return typeof s == "function";
}
function pu(s) {
  if (s.$st === Ed)
    for (let t = 0; t < s.$s.length && (pu(s.$s[t]), s.$st !== Va); t++)
      ;
  s.$st === Va ? kd(s) : s.$st = W6;
}
function My(s) {
  s.$h && F6.call(s, !1), s.$d && Ld(s), s.$eh = s[cn] ? s[cn].$eh : null;
}
function kd(s) {
  let t = ps, e = Yt;
  ps = null, Yt = 0;
  try {
    My(s);
    const n = Vo(s, s.$c, s);
    d7(s), !s.$e && s.$i ? Pd.call(s, n) : (s.$v = n, s.$i = !0);
  } catch (n) {
    d7(s), lu(s, n);
  } finally {
    ps = t, Yt = e, s.$st = W6;
  }
}
function d7(s) {
  if (ps) {
    if (s.$s && Pc(s, Yt), s.$s && Yt > 0) {
      s.$s.length = Yt + ps.length;
      for (let e = 0; e < ps.length; e++)
        s.$s[Yt + e] = ps[e];
    } else
      s.$s = ps;
    let t;
    for (let e = Yt; e < s.$s.length; e++)
      t = s.$s[e], t.$o ? t.$o.push(s) : t.$o = [s];
  } else s.$s && Yt < s.$s.length && (Pc(s, Yt), s.$s.length = Yt);
}
function Id(s, t) {
  if (!(s.$st >= t) && (s.$e && s.$st === W6 && (Tr.push(s), Ia || Sy()), s.$st = t, s.$o))
    for (let e = 0; e < s.$o.length; e++)
      Id(s.$o[e], Ed);
}
function Pc(s, t) {
  let e, n;
  for (let i = t; i < s.$s.length; i++)
    e = s.$s[i], e.$o && (n = e.$o.indexOf(s), e.$o[n] = e.$o[e.$o.length - 1], e.$o.pop());
}
function ee(s, t) {
  const e = fu(s, null, t), n = uu.bind(e);
  return n[cn] = !0, n.set = Pd.bind(e), n;
}
function ky(s) {
  return y2(s) && cn in s;
}
function e1(s, t) {
  const e = fu(
    t == null ? void 0 : t.initial,
    s,
    t
  ), n = uu.bind(e);
  return n[cn] = !0, n;
}
function Cu(s, t) {
  const e = fu(
    null,
    function() {
      let i = s();
      return y2(i) && ue(i), null;
    },
    void 0
  );
  return e.$e = !0, kd(e), F6.bind(e, !0);
}
function Vd(s) {
  return ky(s) && "set" in s;
}
function ts(...s) {
}
function Rs(s) {
  return s === null;
}
function ct(s) {
  return typeof s > "u";
}
function Ad(s) {
  return Rs(s) || ct(s);
}
function Nd(s) {
  return (s == null ? void 0 : s.constructor) === Object;
}
function qt(s) {
  return typeof s == "number" && !Number.isNaN(s);
}
function ie(s) {
  return typeof s == "string";
}
function Iy(s) {
  return typeof s == "boolean";
}
function jt(s) {
  return typeof s == "function";
}
function vt(s) {
  return Array.isArray(s);
}
const E = Os ? Vy : Cu;
function Vy(s, t) {
  var e;
  return typeof process < "u" && ((e = process.env) == null ? void 0 : e.NODE_ENV) === "test" ? Cu(s) : ts;
}
const Ay = Os ? class {
} : Event, Rd = Symbol("DOM_EVENT");
var ld, ud;
class ye extends (ud = Ay, ld = Rd, ud) {
  constructor(e, ...n) {
    var o, a;
    super(e, n[0]);
    $(this, ld, !0);
    /**
     * The event detail.
     */
    $(this, "detail");
    /**
     * The event trigger chain.
     */
    $(this, "triggers", new Ny());
    this.detail = (o = n[0]) == null ? void 0 : o.detail;
    const i = (a = n[0]) == null ? void 0 : a.trigger;
    i && this.triggers.add(i);
  }
  /**
   * The preceding event that was responsible for this event being fired.
   */
  get trigger() {
    return this.triggers.source;
  }
  /**
   * The origin event that lead to this event being fired.
   */
  get originEvent() {
    return this.triggers.origin;
  }
  /**
   * Whether the origin event was triggered by the user.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted}
   */
  get isOriginTrusted() {
    var e;
    return ((e = this.triggers.origin) == null ? void 0 : e.isTrusted) ?? !1;
  }
}
class Ny {
  constructor() {
    $(this, "chain", []);
  }
  get source() {
    return this.chain[0];
  }
  get origin() {
    return this.chain[this.chain.length - 1];
  }
  /**
   * Appends the event to the end of the chain.
   */
  add(t) {
    this.chain.push(t), mu(t) && this.chain.push(...t.triggers);
  }
  /**
   * Removes the event from the chain and returns it (if found).
   */
  remove(t) {
    return this.chain.splice(this.chain.indexOf(t), 1)[0];
  }
  /**
   * Returns whether the chain contains the given `event`.
   */
  has(t) {
    return this.chain.some((e) => e === t);
  }
  /**
   * Returns whether the chain contains the given event type.
   */
  hasType(t) {
    return !!this.findType(t);
  }
  /**
   * Returns the first event with the given `type` found in the chain.
   */
  findType(t) {
    return this.chain.find((e) => e.type === t);
  }
  /**
   * Walks an event chain on a given `event`, and invokes the given `callback` for each trigger event.
   */
  walk(t) {
    for (const e of this.chain) {
      const n = t(e);
      if (n) return [e, n];
    }
  }
  [Symbol.iterator]() {
    return this.chain.values();
  }
}
function mu(s) {
  return !!(s != null && s[Rd]);
}
function Ry(s, t) {
  if (mu(s))
    return s.triggers.walk(t);
}
function Hd(s, t) {
  return mu(s) ? s.triggers.findType(t) : void 0;
}
function Hy(s, t) {
  return !!Hd(s, t);
}
function Oy(s, t) {
  t && s.triggers.add(t);
}
class gu extends EventTarget {
  constructor() {
    super(...arguments);
    /** @internal type only */
    $(this, "$ts__events");
  }
  addEventListener(e, n, i) {
    return super.addEventListener(e, n, i);
  }
  removeEventListener(e, n, i) {
    return super.removeEventListener(e, n, i);
  }
}
function Ze(s, t, e, n) {
  return Os ? ts : (s.addEventListener(t, e, n), ue(() => s.removeEventListener(t, e, n)));
}
var Vr, Ar;
class Pe {
  constructor(t) {
    C(this, Vr);
    C(this, Ar);
    g(this, Vr, t), g(this, Ar, new AbortController()), ue(this.abort.bind(this));
  }
  get signal() {
    return r(this, Ar).signal;
  }
  add(t, e, n) {
    if (this.signal.aborted) throw Error("aborted");
    return r(this, Vr).addEventListener(t, e, {
      ...n,
      signal: n != null && n.signal ? Dy(this.signal, n.signal) : this.signal
    }), this;
  }
  remove(t, e) {
    return r(this, Vr).removeEventListener(t, e), this;
  }
  abort(t) {
    r(this, Ar).abort(t);
  }
}
Vr = new WeakMap(), Ar = new WeakMap();
function Dy(...s) {
  const t = new AbortController(), e = { signal: t.signal };
  function n(i) {
    t.abort(i.target.reason);
  }
  for (const i of s) {
    if (i.aborted) {
      t.abort(i.reason);
      break;
    }
    i.addEventListener("abort", n, e);
  }
  return t.signal;
}
function Mc(s) {
  return !!(s != null && s.type.startsWith("pointer"));
}
function y3(s) {
  return !!(s != null && s.type.startsWith("touch"));
}
function Od(s) {
  return /^(click|mouse)/.test((s == null ? void 0 : s.type) ?? "");
}
function Ao(s) {
  return !!(s != null && s.type.startsWith("key"));
}
function Dd(s) {
  return Ao(s) && s.key === "Enter";
}
function yu(s) {
  return Ao(s) && (s.key === "Enter" || s.key === " ");
}
function _d(s) {
  return s instanceof Node;
}
function J(s, t, e) {
  if (s) if (!e && e !== "" && e !== 0)
    s.removeAttribute(t);
  else {
    const n = e === !0 ? "" : e + "";
    s.getAttribute(t) !== n && s.setAttribute(t, n);
  }
  else return;
}
function kt(s, t, e) {
  if (s) !e && e !== 0 ? s.style.removeProperty(t) : s.style.setProperty(t, e + "");
  else return;
}
function _y(s, t, e) {
  s.classList[e ? "add" : "remove"](t);
}
function h7(s) {
  let t = s;
  for (; typeof t == "function"; ) t = t.call(this);
  return t;
}
function ai(s) {
  return { id: Symbol(), provide: s };
}
function ns(s, t, e = Io()) {
  var i;
  const n = !ct(t);
  Ty(s.id, n ? t : (i = s.provide) == null ? void 0 : i.call(s), e);
}
function Ye(s) {
  return cu(s.id);
}
function ln(s) {
  return !ct(cu(s.id));
}
const j2 = /* @__PURE__ */ Symbol(0), B2 = /* @__PURE__ */ Symbol(0), v2 = /* @__PURE__ */ Symbol(0), G2 = {};
var dd, Nr, Rr, w1, Hr, dn, Fd, qd, Zd, jd;
dd = v2;
class Fy {
  constructor(t, e, n) {
    C(this, dn);
    /** @internal type only */
    $(this, "$ts__events");
    /** @internal type only */
    $(this, "$ts__vars");
    /* @internal */
    $(this, dd, null);
    $(this, "$el", ee(null));
    $(this, "el", null);
    $(this, "scope", null);
    $(this, "attachScope", null);
    $(this, "connectScope", null);
    $(this, "component", null);
    $(this, "destroyed", !1);
    $(this, "props", G2);
    $(this, "attrs", null);
    $(this, "styles", null);
    $(this, "state");
    $(this, "$state");
    C(this, Nr, []);
    C(this, Rr, []);
    C(this, w1, []);
    C(this, Hr, []);
    var a;
    this.scope = e, n != null && n.scope && n.scope.append(e);
    let i = t.state, o = t.props;
    if (i && (this.$state = i.create(), this.state = new Proxy(this.$state, {
      get: (l, d) => this.$state[d]()
    }), ns(i, this.$state)), o && (this.props = qy(o), n != null && n.props))
      for (const l of Object.keys(n.props))
        (a = this.props[l]) == null || a.set(n.props[l]);
    ue(this.destroy.bind(this));
  }
  setup() {
    Mt(() => {
      for (const t of r(this, Nr)) t();
    }, this.scope);
  }
  attach(t) {
    this.el || (this.el = t, this.$el.set(t), Mt(() => {
      this.attachScope = q6(), Mt(() => {
        for (const e of r(this, Rr)) e(this.el);
        c(this, dn, Fd).call(this), c(this, dn, qd).call(this);
      }, this.attachScope);
    }, this.scope), t.dispatchEvent(new Event("attached")));
  }
  detach() {
    var t;
    (t = this.attachScope) == null || t.dispose(), this.attachScope = null, this.connectScope = null, this.el = null, this.$el.set(null);
  }
  connect() {
    !this.el || !this.attachScope || !r(this, w1).length || Mt(() => {
      this.connectScope = q6(), Mt(() => {
        for (const t of r(this, w1)) t(this.el);
      }, this.connectScope);
    }, this.attachScope);
  }
  disconnect() {
    var t;
    (t = this.connectScope) == null || t.dispose(), this.connectScope = null;
  }
  destroy() {
    if (this.destroyed) return;
    this.destroyed = !0, Mt(() => {
      for (const e of r(this, Hr)) e(this.el);
    }, this.scope);
    const t = this.el;
    this.detach(), this.scope.dispose(), r(this, Nr).length = 0, r(this, Rr).length = 0, r(this, w1).length = 0, r(this, Hr).length = 0, this.component = null, this.attrs = null, this.styles = null, this.props = G2, this.scope = null, this.state = G2, this.$state = null, t && delete t.$;
  }
  addHooks(t) {
    t.onSetup && r(this, Nr).push(t.onSetup.bind(t)), t.onAttach && r(this, Rr).push(t.onAttach.bind(t)), t.onConnect && r(this, w1).push(t.onConnect.bind(t)), t.onDestroy && r(this, Hr).push(t.onDestroy.bind(t));
  }
}
Nr = new WeakMap(), Rr = new WeakMap(), w1 = new WeakMap(), Hr = new WeakMap(), dn = new WeakSet(), Fd = function() {
  if (this.attrs)
    for (const t of Object.keys(this.attrs))
      Os ? J(this.el, t, h7.call(this.component, this.attrs[t])) : jt(this.attrs[t]) ? E(c(this, dn, Zd).bind(this, t)) : J(this.el, t, this.attrs[t]);
}, qd = function() {
  if (this.styles)
    for (const t of Object.keys(this.styles))
      Os ? kt(this.el, t, h7.call(this.component, this.styles[t])) : jt(this.styles[t]) ? E(c(this, dn, jd).bind(this, t)) : kt(this.el, t, this.styles[t]);
}, Zd = function(t) {
  J(this.el, t, this.attrs[t].call(this.component));
}, jd = function(t) {
  kt(this.el, t, this.styles[t].call(this.component));
};
function qy(s) {
  const t = {};
  for (const e of Object.keys(s)) {
    const n = s[e];
    t[e] = ee(n, n);
  }
  return t;
}
let v3 = { $$: null };
function Bd(s, t) {
  return Ey(() => {
    v3.$$ = new Fy(s, Io(), t);
    const e = new s();
    return v3.$$.component = e, v3.$$ = null, e;
  });
}
class as extends EventTarget {
  constructor() {
    super();
    /** @internal */
    $(this, "$$");
    v3.$$ && this.attach(v3);
  }
  get el() {
    return this.$$.el;
  }
  get $el() {
    return this.$$.$el();
  }
  get scope() {
    return this.$$.scope;
  }
  get attachScope() {
    return this.$$.attachScope;
  }
  get connectScope() {
    return this.$$.connectScope;
  }
  /** @internal */
  get $props() {
    return this.$$.props;
  }
  /** @internal */
  get $state() {
    return this.$$.$state;
  }
  get state() {
    return this.$$.state;
  }
  attach({ $$: e }) {
    return this.$$ = e, e.addHooks(this), this;
  }
  addEventListener(e, n, i) {
    this.listen(e, n, i);
  }
  removeEventListener(e, n, i) {
    var o;
    (o = this.el) == null || o.removeEventListener(e, n, i);
  }
  /**
   * The given callback is invoked when the component is ready to be set up.
   *
   * - This hook will run once.
   * - This hook is called both client-side and server-side.
   * - It's safe to use context inside this hook.
   * - The host element has not attached yet - wait for `onAttach`.
   */
  /**
   * This method can be used to specify attributes that should be set on the host element. Any
   * attributes that are assigned to a function will be considered a signal and updated accordingly.
   */
  setAttributes(e) {
    this.$$.attrs || (this.$$.attrs = {}), Object.assign(this.$$.attrs, e);
  }
  /**
   * This method can be used to specify styles that should set be set on the host element. Any
   * styles that are assigned to a function will be considered a signal and updated accordingly.
   */
  setStyles(e) {
    this.$$.styles || (this.$$.styles = {}), Object.assign(this.$$.styles, e);
  }
  /**
   * This method is used to satisfy the CSS variables contract specified on the current
   * component. Other CSS variables can be set via the `setStyles` method.
   */
  setCSSVars(e) {
    this.setStyles(e);
  }
  /**
   * Type-safe utility for creating component DOM events.
   */
  createEvent(e, ...n) {
    return new ye(e, n[0]);
  }
  /**
   * Creates a `DOMEvent` and dispatches it from the host element. This method is typed to
   * match all component events.
   */
  dispatch(e, ...n) {
    if (Os || !this.el) return !1;
    const i = e instanceof Event ? e : new ye(e, n[0]);
    return Object.defineProperty(i, "target", {
      get: () => this.$$.component
    }), _6(() => {
      var o, a;
      return (a = (o = this.$$)[v2]) == null || a.call(o, i), this.el.dispatchEvent(i);
    });
  }
  dispatchEvent(e) {
    return this.dispatch(e);
  }
  /**
   * Adds an event listener for the given `type` and returns a function which can be invoked to
   * remove the event listener.
   *
   * - The listener is removed if the current scope is disposed.
   * - This method is safe to use on the server (noop).
   */
  listen(e, n, i) {
    return Os || !this.el ? ts : Ze(this.el, e, n, i);
  }
}
class de extends as {
  subscribe(t) {
    return Mt(() => E(() => t(this.state)), this.$$.scope);
  }
  destroy() {
    this.$$.destroy();
  }
}
function Le(s, t, e) {
  s[j2] || (s[j2] = /* @__PURE__ */ new Set()), s[j2].add(t);
}
function ot(s, t, e) {
  s[B2] || (s[B2] = /* @__PURE__ */ new Set()), s[B2].add(t);
}
var Or;
class ci {
  constructor(t) {
    $(this, "id", Symbol(0));
    $(this, "record");
    C(this, Or);
    this.record = t, g(this, Or, Object.getOwnPropertyDescriptors(t));
  }
  create() {
    const t = {}, e = new Proxy(t, { get: (n, i) => t[i]() });
    for (const n of Object.keys(this.record)) {
      const i = r(this, Or)[n].get;
      t[n] = i ? e1(i.bind(e)) : ee(this.record[n]);
    }
    return t;
  }
  reset(t, e) {
    for (const n of Object.keys(t))
      !r(this, Or)[n].get && (!e || e(n)) && t[n].set(this.record[n]);
  }
}
Or = new WeakMap();
function K6(s) {
  return Ye(s);
}
function b2(s) {
  return s.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function vu(s) {
  return s.replace(/-./g, (t) => t[1].toUpperCase());
}
function Zy(s) {
  return jy(s).replace(/\s/g, "");
}
function jy(s) {
  return bu(s.replace(/-./g, (t) => " " + t[1].toUpperCase()));
}
function bu(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
const No = u.createContext({ current: null });
No.displayName = "Scope";
function Gd(s, ...t) {
  return u.createElement(No.Provider, { value: s }, ...t);
}
function Ud() {
  return u.useContext(No).current;
}
function wu(s) {
  const t = Ud();
  return u.useMemo(() => cu(s.id, t), [t]);
}
function Wd(s, t) {
  typeof s == "function" ? s(t) : s && (s.current = t);
}
function ke(...s) {
  return (t) => s.forEach((e) => Wd(e, t));
}
function By(s, t) {
  const e = u.forwardRef((n, i) => {
    var x, S, L, k, M, H, Z, D;
    let o = u.useContext(No), a = u.useRef(null), l = u.useRef();
    if (!l.current) {
      const P = Uy(), K = C7(s, P, n, o.current);
      P.component = K, l.current = P, a.current = K.scope;
    }
    function d() {
      let P = l.current, K = o.current;
      if (window.cancelAnimationFrame(P.destroyId), P.destroyId = -1, P.component.$$.destroyed) {
        const W = C7(s, P, n, K);
        P.component = W, P.attached = !1, P.forwardRef = !1, a.current = W.scope;
      }
      return P.el && p7(P, P.el), P.forwardRef || (Wd(i, P.component), P.forwardRef = !0), () => ra(P);
    }
    function h(P) {
      const K = l.current;
      if (!K.forwardRef) {
        K.el = P;
        return;
      }
      window.cancelAnimationFrame(K.refChangeId), K.refChangeId = window.requestAnimationFrame(() => {
        const W = l.current;
        W.refChangeId = -1, W.el !== P && (ra(W), P && p7(W, P), W.el = P);
      });
    }
    u.useEffect(() => {
      const P = l.current;
      return window.cancelAnimationFrame(P.destroyId), P.destroyId = -1, function() {
        jt(n.children) && (window.cancelAnimationFrame(P.refChangeId), P.refChangeId = -1, window.cancelAnimationFrame(P.connectId), P.connectId = -1, window.cancelAnimationFrame(P.destroyId), P.destroyId = window.requestAnimationFrame(() => {
          P.destroyId = -1, ra(P), P.component.$$.destroy(), P.component.$$[v2] = null, P.callbacks = {}, P.domCallbacks = {}, a.current = null;
        }));
      };
    }, []), u.useEffect(Ns);
    let p = l.current, { children: f, ...m } = n, y = {}, v = p.prevProps, b = Object.keys(m);
    p.callbacks = {};
    for (const P of [...v, ...b])
      if (t.props.has(P))
        p.component.$props[P].set(
          // If the prop was removed we'll use the default value provided on Component creation.
          ct(m[P]) ? (x = s.props) == null ? void 0 : x[P] : m[P]
        );
      else if ((S = t.events) != null && S.has(P) || (L = t.eventsRE) != null && L.test(P))
        p.callbacks[P] = m[P];
      else if ((k = t.domEvents) != null && k.has(P) || (M = t.domEventsRE) != null && M.test(P)) {
        let K = b2(P.slice(2));
        p.domCallbacks[K] = m[P], b.includes(P) ? p.el && !((D = p.listening) != null && D.has(K)) && (p.listening || (p.listening = /* @__PURE__ */ new Set()), p.listening.add(K), p.el.addEventListener(K, p.onDOMEvent)) : ((H = p.el) == null || H.removeEventListener(K, p.onDOMEvent), (Z = p.listening) == null || Z.delete(K));
      } else
        y[P] = m[P];
    return p.prevProps = b, Gd(
      a,
      u.createElement(Gy, {
        effect: d
      }),
      jt(f) ? f == null ? void 0 : f(
        {
          ...y,
          suppressHydrationWarning: !0,
          ref: h
        },
        p.component
      ) : f
    );
  });
  return e.displayName = s.name + "Bridge", e;
}
function Gy({ effect: s }) {
  return u.useEffect(s, []), null;
}
const f7 = /* @__PURE__ */ new Map();
function Uy() {
  const s = {
    el: null,
    prevProps: [],
    callbacks: {},
    domCallbacks: {},
    refChangeId: -1,
    connectId: -1,
    destroyId: -1,
    attached: !1,
    forwardRef: !1,
    listening: null,
    onDOMEvent(t) {
      var n, i;
      const e = ct(t.detail) ? [t] : [t.detail, t];
      (i = (n = s.domCallbacks)[t.type]) == null || i.call(n, ...e);
    }
  };
  return s;
}
function p7(s, t) {
  if (!(s.el === t && s.attached)) {
    if (s.attached && ra(s), s.domCallbacks) {
      s.listening || (s.listening = /* @__PURE__ */ new Set());
      for (const e of Object.keys(s.domCallbacks))
        s.listening.has(e) || (t.addEventListener(e, s.onDOMEvent), s.listening.add(e));
    }
    s.component.$$.attach(t), s.connectId = window.requestAnimationFrame(() => {
      s.component.$$.connect(), s.connectId = -1;
    }), s.attached = !0;
  }
}
function ra(s) {
  if (s.attached && (window.cancelAnimationFrame(s.connectId), s.connectId = -1, s.component.$$.detach(), s.attached = !1, s.el && s.listening)) {
    for (const t of s.listening)
      s.el.removeEventListener(t, s.onDOMEvent);
    s.listening.clear();
  }
}
function Wy(s) {
  var n, i;
  let t = f7.get(s.type), e = ct(s.detail) ? [s] : [s.detail, s];
  t || f7.set(s.type, t = `on${Zy(s.type)}`), (i = (n = this.callbacks)[t]) == null || i.call(n, ...e);
}
function C7(s, t, e, n) {
  const i = Bd(s, { props: e, scope: n });
  return i.$$[v2] = Wy.bind(t), i.$$.setup(), i;
}
function Kd(s, t = !1) {
  const e = typeof s;
  if (e !== "string")
    return !t && e === "function" ? Kd(s()) : t && e === "boolean" ? s + "" : s;
  const n = t ? '"' : "<", i = t ? "&quot;" : "&lt;";
  let o = s.indexOf(n), a = s.indexOf("&");
  if (o < 0 && a < 0) return s;
  let l = 0, d = "";
  for (; o >= 0 && a >= 0; )
    o < a ? (l < o && (d += s.substring(l, o)), d += i, l = o + 1, o = s.indexOf(n, l)) : (l < a && (d += s.substring(l, a)), d += "&amp;", l = a + 1, a = s.indexOf("&", l));
  if (o >= 0)
    do
      l < o && (d += s.substring(l, o)), d += i, l = o + 1, o = s.indexOf(n, l);
    while (o >= 0);
  else
    for (; a >= 0; )
      l < a && (d += s.substring(l, a)), d += "&amp;", l = a + 1, a = s.indexOf("&", l);
  return l < s.length ? d + s.substring(l) : d;
}
const Ky = /* @__PURE__ */ Symbol(0), zy = /\s+/;
function Yy(s, t) {
  const e = t.trim().split(zy);
  for (const n of e) s.add(n);
}
const Qy = /\s*:\s*/, Xy = /\s*;\s*/;
function Jy(s, t) {
  const e = t.trim().split(Xy);
  for (let n = 0; n < e.length; n++) {
    if (e[n] === "") continue;
    const [i, o] = e[n].split(Qy);
    s.set(i, o);
  }
}
class ev {
  constructor(t) {
    $(this, "keepAlive", !1);
    $(this, "forwardKeepAlive", !0);
    $(this, "$");
    $(this, "attributes", new tv());
    $(this, "style", new sv());
    $(this, "classList", new nv());
    this.$ = t;
  }
  get $props() {
    return this.$.$$.props;
  }
  get $state() {
    return this.$.$$.$state;
  }
  get state() {
    return this.$.state;
  }
  setup() {
    const t = this.$.$$;
    Mt(() => {
      this.hasAttribute("class") && Yy(this.classList.tokens, this.getAttribute("class")), this.hasAttribute("style") && Jy(this.style.tokens, this.getAttribute("style")), t.setup(), t.attach(this), this.classList.length > 0 && this.setAttribute("class", this.classList.toString()), this.style.length > 0 && this.setAttribute("style", this.style.toString()), this.keepAlive && this.setAttribute("keep-alive", "");
    }, t.scope);
  }
  getAttribute(t) {
    return this.attributes.getAttribute(t);
  }
  setAttribute(t, e) {
    this.attributes.setAttribute(t, e);
  }
  hasAttribute(t) {
    return this.attributes.hasAttribute(t);
  }
  removeAttribute(t) {
    return this.attributes.removeAttribute(t);
  }
  [Ky]() {
  }
  addEventListener() {
  }
  removeEventListener() {
  }
  dispatchEvent() {
    return !1;
  }
  subscribe() {
    return ts;
  }
  destroy() {
    this.$.destroy();
  }
}
var ws;
class tv {
  constructor() {
    C(this, ws, /* @__PURE__ */ new Map());
  }
  get length() {
    return r(this, ws).size;
  }
  get tokens() {
    return r(this, ws);
  }
  getAttribute(t) {
    return r(this, ws).get(t) ?? null;
  }
  hasAttribute(t) {
    return r(this, ws).has(t);
  }
  setAttribute(t, e) {
    r(this, ws).set(t, e + "");
  }
  removeAttribute(t) {
    r(this, ws).delete(t);
  }
  toString() {
    if (r(this, ws).size === 0) return "";
    let t = "";
    for (const [e, n] of r(this, ws))
      t += ` ${e}="${Kd(n, !0)}"`;
    return t;
  }
}
ws = new WeakMap();
var xs;
class sv {
  constructor() {
    C(this, xs, /* @__PURE__ */ new Map());
  }
  get length() {
    return r(this, xs).size;
  }
  get tokens() {
    return r(this, xs);
  }
  getPropertyValue(t) {
    return r(this, xs).get(t) ?? "";
  }
  setProperty(t, e) {
    r(this, xs).set(t, e ?? "");
  }
  removeProperty(t) {
    const e = r(this, xs).get(t);
    return r(this, xs).delete(t), e ?? "";
  }
  toString() {
    if (r(this, xs).size === 0) return "";
    let t = "";
    for (const [e, n] of r(this, xs))
      t += `${e}: ${n};`;
    return t;
  }
}
xs = new WeakMap();
var $t;
class nv {
  constructor() {
    C(this, $t, /* @__PURE__ */ new Set());
  }
  get length() {
    return r(this, $t).size;
  }
  get tokens() {
    return r(this, $t);
  }
  add(...t) {
    for (const e of t)
      r(this, $t).add(e);
  }
  contains(t) {
    return r(this, $t).has(t);
  }
  remove(t) {
    r(this, $t).delete(t);
  }
  replace(t, e) {
    return r(this, $t).has(t) ? (r(this, $t).delete(t), r(this, $t).add(e), !0) : !1;
  }
  toggle(t, e) {
    return e !== !0 && (r(this, $t).has(t) || e === !1) ? (r(this, $t).delete(t), !1) : (r(this, $t).add(t), !0);
  }
  toString() {
    return Array.from(r(this, $t)).join(" ");
  }
}
$t = new WeakMap();
const iv = {
  acceptcharset: "acceptCharset",
  "accept-charset": "acceptCharset",
  accesskey: "accessKey",
  allowfullscreen: "allowFullScreen",
  autocapitalize: "autoCapitalize",
  autocomplete: "autoComplete",
  autocorrect: "autoCorrect",
  autofocus: "autoFocus",
  autoplay: "autoPlay",
  autosave: "autoSave",
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  charset: "charSet",
  class: "className",
  classid: "classID",
  classname: "className",
  colspan: "colSpan",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  controlslist: "controlsList",
  crossorigin: "crossOrigin",
  dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
  datetime: "dateTime",
  defaultchecked: "defaultChecked",
  defaultvalue: "defaultValue",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback",
  enctype: "encType",
  enterkeyhint: "enterKeyHint",
  fetchpriority: "fetchPriority",
  for: "htmlFor",
  formmethod: "formMethod",
  formaction: "formAction",
  formenctype: "formEncType",
  formnovalidate: "formNoValidate",
  formtarget: "formTarget",
  frameborder: "frameBorder",
  hreflang: "hrefLang",
  htmlfor: "htmlFor",
  httpequiv: "httpEquiv",
  "http-equiv": "httpEquiv",
  imagesizes: "imageSizes",
  imagesrcset: "imageSrcSet",
  innerhtml: "innerHTML",
  inputmode: "inputMode",
  itemid: "itemID",
  itemprop: "itemProp",
  itemref: "itemRef",
  itemscope: "itemScope",
  itemtype: "itemType",
  keyparams: "keyParams",
  keytype: "keyType",
  marginwidth: "marginWidth",
  marginheight: "marginHeight",
  maxlength: "maxLength",
  mediagroup: "mediaGroup",
  minlength: "minLength",
  nomodule: "noModule",
  novalidate: "noValidate",
  playsinline: "playsInline",
  radiogroup: "radioGroup",
  readonly: "readOnly",
  referrerpolicy: "referrerPolicy",
  rowspan: "rowSpan",
  spellcheck: "spellCheck",
  srcdoc: "srcDoc",
  srclang: "srcLang",
  srcset: "srcSet",
  tabindex: "tabIndex",
  usemap: "useMap"
};
function rv(s, t) {
  function e(n) {
    let i = u.useContext(No), o = Bd(s, {
      props: n,
      scope: i.current
    }), a = new ev(o), l = {}, { style: d = {}, children: h, forwardRef: p, ...f } = n;
    if (t.props.size)
      for (const m of Object.keys(f))
        t.props.has(m) || (l[m] = f[m]);
    else
      l = f;
    if (a.setup(), a.hasAttribute("style")) {
      for (const [m, y] of a.style.tokens)
        d[m.startsWith("--") ? m : vu(m)] = y;
      a.removeAttribute("style");
    }
    for (const [m, y] of a.attributes.tokens) {
      const v = iv[m];
      v && (v in l || (l[v] = y), a.removeAttribute(m));
    }
    return Gd(
      { current: o.$$.scope },
      jt(h) ? h == null ? void 0 : h(
        {
          ...Object.fromEntries(a.attributes.tokens),
          ...l,
          style: d
        },
        o
      ) : h,
      u.createElement(() => (a.destroy(), null))
    );
  }
  return e.displayName = s.name + "Bridge", e;
}
function mr(s) {
  return wu(s);
}
function Be(s, t) {
  const [, e] = u.useState();
  return u.useEffect(() => Cu(() => {
    s(), e({});
  }), [t ?? s]), s();
}
function x3(s) {
  return s ? "true" : "false";
}
function ov() {
  const s = /* @__PURE__ */ new Set();
  return {
    add(...t) {
      for (const e of t) s.add(e);
    },
    empty() {
      for (const t of s) t();
      s.clear();
    }
  };
}
function av(s) {
  return Object.keys(s);
}
function Aa() {
  let s, t;
  return { promise: new Promise((n, i) => {
    s = n, t = i;
  }), resolve: s, reject: t };
}
function zd(s) {
  return new Promise((t) => setTimeout(t, s));
}
function gr(s) {
  if (Os) return ts;
  let t = -1, e;
  function n(...i) {
    e = i, !(t >= 0) && (t = window.requestAnimationFrame(() => {
      s.apply(this, e), t = -1, e = void 0;
    }));
  }
  return n;
}
const cv = Os ? ts : typeof window < "u" ? "requestIdleCallback" in window ? window.requestIdleCallback : (s) => window.setTimeout(s, 1) : ts;
function Yd(s, t) {
  return Os ? Promise.resolve() : new Promise((e) => {
    cv((n) => {
      s == null || s(n), e();
    }, t);
  });
}
function Qd(s) {
  const [, t] = u.useState(), e = u.useRef(null);
  return e.current == null && (e.current = {
    state: {},
    $update: ee({}),
    props: /* @__PURE__ */ new Set()
  }), u.useEffect(() => {
    let { state: n, $update: i, props: o } = e.current;
    return E(() => {
      for (const a of o) {
        const l = s[a]();
        n[a] = vt(l) ? [...l] : l;
      }
      i(), t({});
    });
  }, [s]), u.useMemo(() => {
    let { state: n, $update: i, props: o } = e.current, a = !1;
    return o.clear(), new Proxy(n, {
      get(l, d) {
        if (!o.has(d) && d in s) {
          o.add(d);
          const h = s[d]();
          n[d] = vt(h) ? [...h] : h, a || (i.set({}), a = !0, queueMicrotask(() => a = !1));
        }
        return n[d];
      },
      set(l, d, h) {
        return d in s || (n[d] = h), !0;
      }
    });
  }, [s]);
}
function he(s, t) {
  return Os ? rv(s, {
    props: new Set(Object.keys(s.props || {}))
  }) : By(s, {
    props: new Set(Object.keys(s.props || {})),
    events: new Set(t == null ? void 0 : t.events),
    eventsRE: t == null ? void 0 : t.eventsRegex,
    domEvents: t == null ? void 0 : t.domEvents,
    domEventsRE: t == null ? void 0 : t.domEventsRegex
  });
}
var Bt = {
  fullscreenEnabled: 0,
  fullscreenElement: 1,
  requestFullscreen: 2,
  exitFullscreen: 3,
  fullscreenchange: 4,
  fullscreenerror: 5,
  fullscreen: 6
}, m7 = [
  "webkitFullscreenEnabled",
  "webkitFullscreenElement",
  "webkitRequestFullscreen",
  "webkitExitFullscreen",
  "webkitfullscreenchange",
  "webkitfullscreenerror",
  "-webkit-full-screen"
], g7 = [
  "mozFullScreenEnabled",
  "mozFullScreenElement",
  "mozRequestFullScreen",
  "mozCancelFullScreen",
  "mozfullscreenchange",
  "mozfullscreenerror",
  "-moz-full-screen"
], y7 = [
  "msFullscreenEnabled",
  "msFullscreenElement",
  "msRequestFullscreen",
  "msExitFullscreen",
  "MSFullscreenChange",
  "MSFullscreenError",
  "-ms-fullscreen"
], Ft = typeof window < "u" && typeof window.document < "u" ? window.document : {}, ls = "fullscreenEnabled" in Ft && Object.keys(Bt) || m7[0] in Ft && m7 || g7[0] in Ft && g7 || y7[0] in Ft && y7 || [], Xi = {
  requestFullscreen: function(s) {
    return s[ls[Bt.requestFullscreen]]();
  },
  requestFullscreenFunction: function(s) {
    return s[ls[Bt.requestFullscreen]];
  },
  get exitFullscreen() {
    return Ft[ls[Bt.exitFullscreen]].bind(Ft);
  },
  get fullscreenPseudoClass() {
    return ":" + ls[Bt.fullscreen];
  },
  addEventListener: function(s, t, e) {
    return Ft.addEventListener(ls[Bt[s]], t, e);
  },
  removeEventListener: function(s, t, e) {
    return Ft.removeEventListener(ls[Bt[s]], t, e);
  },
  get fullscreenEnabled() {
    return !!Ft[ls[Bt.fullscreenEnabled]];
  },
  set fullscreenEnabled(s) {
  },
  get fullscreenElement() {
    return Ft[ls[Bt.fullscreenElement]];
  },
  set fullscreenElement(s) {
  },
  get onfullscreenchange() {
    return Ft[("on" + ls[Bt.fullscreenchange]).toLowerCase()];
  },
  set onfullscreenchange(s) {
    return Ft[("on" + ls[Bt.fullscreenchange]).toLowerCase()] = s;
  },
  get onfullscreenerror() {
    return Ft[("on" + ls[Bt.fullscreenerror]).toLowerCase()];
  },
  set onfullscreenerror(s) {
    return Ft[("on" + ls[Bt.fullscreenerror]).toLowerCase()] = s;
  }
}, u1 = lv;
function lv(s, t, e) {
  var n = null, i = null, o = e && e.leading, a = e && e.trailing;
  o == null && (o = !0), a == null && (a = !o), o == !0 && (a = !1);
  var l = function() {
    n && (clearTimeout(n), n = null);
  }, d = function() {
    var p = i;
    l(), p && p();
  }, h = function() {
    var p = o && !n, f = this, m = arguments;
    if (i = function() {
      return s.apply(f, m);
    }, n || (n = setTimeout(function() {
      if (n = null, a)
        return i();
    }, t)), p)
      return p = !1, i();
  };
  return h.cancel = l, h.flush = d, h;
}
var w2 = uv;
function uv(s, t, e) {
  var n = null, i = null, o = function() {
    n && (clearTimeout(n), i = null, n = null);
  }, a = function() {
    var d = i;
    o(), d && d();
  }, l = function() {
    if (!t)
      return s.apply(this, arguments);
    var d = this, h = arguments, p = e && !n;
    if (o(), i = function() {
      s.apply(d, h);
    }, n = setTimeout(function() {
      if (n = null, !p) {
        var f = i;
        return i = null, f();
      }
    }, t), p)
      return i();
  };
  return l.cancel = o, l.flush = a, l;
}
const v7 = (s) => typeof s == "object" && s != null && s.nodeType === 1, b7 = (s, t) => (!t || s !== "hidden") && s !== "visible" && s !== "clip", U2 = (s, t) => {
  if (s.clientHeight < s.scrollHeight || s.clientWidth < s.scrollWidth) {
    const e = getComputedStyle(s, null);
    return b7(e.overflowY, t) || b7(e.overflowX, t) || ((n) => {
      const i = ((o) => {
        if (!o.ownerDocument || !o.ownerDocument.defaultView) return null;
        try {
          return o.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(n);
      return !!i && (i.clientHeight < n.scrollHeight || i.clientWidth < n.scrollWidth);
    })(s);
  }
  return !1;
}, Bo = (s, t, e, n, i, o, a, l) => o < s && a > t || o > s && a < t ? 0 : o <= s && l <= e || a >= t && l >= e ? o - s - n : a > t && l < e || o < s && l > e ? a - t + i : 0, dv = (s) => {
  const t = s.parentElement;
  return t ?? (s.getRootNode().host || null);
}, Xd = (s, t) => {
  var e, n, i, o;
  if (typeof document > "u") return [];
  const { scrollMode: a, block: l, inline: d, boundary: h, skipOverflowHiddenElements: p } = t, f = typeof h == "function" ? h : (j) => j !== h;
  if (!v7(s)) throw new TypeError("Invalid target");
  const m = document.scrollingElement || document.documentElement, y = [];
  let v = s;
  for (; v7(v) && f(v); ) {
    if (v = dv(v), v === m) {
      y.push(v);
      break;
    }
    v != null && v === document.body && U2(v) && !U2(document.documentElement) || v != null && U2(v, p) && y.push(v);
  }
  const b = (n = (e = window.visualViewport) == null ? void 0 : e.width) != null ? n : innerWidth, x = (o = (i = window.visualViewport) == null ? void 0 : i.height) != null ? o : innerHeight, { scrollX: S, scrollY: L } = window, { height: k, width: M, top: H, right: Z, bottom: D, left: P } = s.getBoundingClientRect(), { top: K, right: W, bottom: re, left: Ce } = ((j) => {
    const G = window.getComputedStyle(j);
    return { top: parseFloat(G.scrollMarginTop) || 0, right: parseFloat(G.scrollMarginRight) || 0, bottom: parseFloat(G.scrollMarginBottom) || 0, left: parseFloat(G.scrollMarginLeft) || 0 };
  })(s);
  let se = l === "start" || l === "nearest" ? H - K : l === "end" ? D + re : H + k / 2 - K + re, ne = d === "center" ? P + M / 2 - Ce + W : d === "end" ? Z + W : P - Ce;
  const Ne = [];
  for (let j = 0; j < y.length; j++) {
    const G = y[j], { height: U, width: F, top: Se, right: We, bottom: At, left: Zs } = G.getBoundingClientRect();
    if (a === "if-needed" && H >= 0 && P >= 0 && D <= x && Z <= b && H >= Se && D <= At && P >= Zs && Z <= We) return Ne;
    const js = getComputedStyle(G), Sn = parseInt(js.borderLeftWidth, 10), cs = parseInt(js.borderTopWidth, 10), Nt = parseInt(js.borderRightWidth, 10), Bs = parseInt(js.borderBottomWidth, 10);
    let Qe = 0, Rt = 0;
    const h1 = "offsetWidth" in G ? G.offsetWidth - G.clientWidth - Sn - Nt : 0, f1 = "offsetHeight" in G ? G.offsetHeight - G.clientHeight - cs - Bs : 0, $n = "offsetWidth" in G ? G.offsetWidth === 0 ? 0 : F / G.offsetWidth : 0, xr = "offsetHeight" in G ? G.offsetHeight === 0 ? 0 : U / G.offsetHeight : 0;
    if (m === G) Qe = l === "start" ? se : l === "end" ? se - x : l === "nearest" ? Bo(L, L + x, x, cs, Bs, L + se, L + se + k, k) : se - x / 2, Rt = d === "start" ? ne : d === "center" ? ne - b / 2 : d === "end" ? ne - b : Bo(S, S + b, b, Sn, Nt, S + ne, S + ne + M, M), Qe = Math.max(0, Qe + L), Rt = Math.max(0, Rt + S);
    else {
      Qe = l === "start" ? se - Se - cs : l === "end" ? se - At + Bs + f1 : l === "nearest" ? Bo(Se, At, U, cs, Bs + f1, se, se + k, k) : se - (Se + U / 2) + f1 / 2, Rt = d === "start" ? ne - Zs - Sn : d === "center" ? ne - (Zs + F / 2) + h1 / 2 : d === "end" ? ne - We + Nt + h1 : Bo(Zs, We, F, Sn, Nt + h1, ne, ne + M, M);
      const { scrollLeft: qo, scrollTop: Zo } = G;
      Qe = xr === 0 ? 0 : Math.max(0, Math.min(Zo + Qe / xr, G.scrollHeight - U / xr + f1)), Rt = $n === 0 ? 0 : Math.max(0, Math.min(qo + Rt / $n, G.scrollWidth - F / $n + h1)), se += Zo - Qe, ne += qo - Rt;
    }
    Ne.push({ el: G, top: Qe, left: Rt });
  }
  return Ne;
};
var hv = '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0007 28.7923C15.0007 29.0152 14.9774 29.096 14.9339 29.1775C14.8903 29.259 14.8263 29.323 14.7449 29.3665C14.6634 29.4101 14.5826 29.4333 14.3597 29.4333H12.575C12.3521 29.4333 12.2713 29.4101 12.1898 29.3665C12.1083 29.323 12.0443 29.259 12.0008 29.1775C11.9572 29.096 11.934 29.0152 11.934 28.7923V12.2993L5.97496 12.3C5.75208 12.3 5.67125 12.2768 5.58977 12.2332C5.50829 12.1896 5.44434 12.1257 5.40077 12.0442C5.35719 11.9627 5.33398 11.8819 5.33398 11.659V9.87429C5.33398 9.65141 5.35719 9.57059 5.40077 9.48911C5.44434 9.40762 5.50829 9.34368 5.58977 9.3001C5.67125 9.25652 5.75208 9.23332 5.97496 9.23332H26.0263C26.2492 9.23332 26.33 9.25652 26.4115 9.3001C26.493 9.34368 26.557 9.40762 26.6005 9.48911C26.6441 9.57059 26.6673 9.65141 26.6673 9.87429V11.659C26.6673 11.8819 26.6441 11.9627 26.6005 12.0442C26.557 12.1257 26.493 12.1896 26.4115 12.2332C26.33 12.2768 26.2492 12.3 26.0263 12.3L20.067 12.2993L20.0673 28.7923C20.0673 29.0152 20.0441 29.096 20.0005 29.1775C19.957 29.259 19.893 29.323 19.8115 29.3665C19.73 29.4101 19.6492 29.4333 19.4263 29.4333H17.6416C17.4187 29.4333 17.3379 29.4101 17.2564 29.3665C17.175 29.323 17.111 29.259 17.0674 29.1775C17.0239 29.096 17.0007 29.0152 17.0007 28.7923L17 22.7663H15L15.0007 28.7923Z" fill="currentColor"/> <path d="M16.0007 7.89998C17.4734 7.89998 18.6673 6.70608 18.6673 5.23332C18.6673 3.76056 17.4734 2.56665 16.0007 2.56665C14.5279 2.56665 13.334 3.76056 13.334 5.23332C13.334 6.70608 14.5279 7.89998 16.0007 7.89998Z" fill="currentColor"/>', fv = '<path d="M5.33334 6.00001C5.33334 5.63182 5.63181 5.33334 6 5.33334H26C26.3682 5.33334 26.6667 5.63182 26.6667 6.00001V20.6667C26.6667 21.0349 26.3682 21.3333 26 21.3333H23.7072C23.4956 21.3333 23.2966 21.233 23.171 21.0628L22.1859 19.7295C21.8607 19.2894 22.1749 18.6667 22.7221 18.6667H23.3333C23.7015 18.6667 24 18.3682 24 18V8.66668C24 8.29849 23.7015 8.00001 23.3333 8.00001H8.66667C8.29848 8.00001 8 8.29849 8 8.66668V18C8 18.3682 8.29848 18.6667 8.66667 18.6667H9.29357C9.84072 18.6667 10.1549 19.2894 9.82976 19.7295L8.84467 21.0628C8.71898 21.233 8.52 21.3333 8.30848 21.3333H6C5.63181 21.3333 5.33334 21.0349 5.33334 20.6667V6.00001Z" fill="currentColor"/> <path d="M8.78528 25.6038C8.46013 26.0439 8.77431 26.6667 9.32147 26.6667L22.6785 26.6667C23.2256 26.6667 23.5398 26.0439 23.2146 25.6038L16.5358 16.5653C16.2693 16.2046 15.73 16.2047 15.4635 16.5653L8.78528 25.6038Z" fill="currentColor"/>', pv = '<path d="M17.4853 18.9093C17.4853 19.0281 17.6289 19.0875 17.7129 19.0035L22.4185 14.2979C22.6788 14.0376 23.1009 14.0376 23.3613 14.2979L24.7755 15.7122C25.0359 15.9725 25.0359 16.3946 24.7755 16.655L16.2902 25.1403C16.0299 25.4006 15.6078 25.4006 15.3474 25.1403L13.9332 23.726L13.9319 23.7247L6.86189 16.6547C6.60154 16.3944 6.60154 15.9723 6.86189 15.7119L8.2761 14.2977C8.53645 14.0373 8.95856 14.0373 9.21891 14.2977L13.9243 19.0031C14.0083 19.0871 14.1519 19.0276 14.1519 18.9088L14.1519 6.00004C14.1519 5.63185 14.4504 5.33337 14.8186 5.33337L16.8186 5.33337C17.1868 5.33337 17.4853 5.63185 17.4853 6.00004L17.4853 18.9093Z" fill="currentColor"/>', Cv = '<path d="M13.0908 14.3334C12.972 14.3334 12.9125 14.1898 12.9965 14.1058L17.7021 9.40022C17.9625 9.13987 17.9625 8.71776 17.7021 8.45741L16.2879 7.04319C16.0275 6.78284 15.6054 6.78284 15.3451 7.04319L6.8598 15.5285C6.59945 15.7888 6.59945 16.2109 6.8598 16.4713L8.27401 17.8855L8.27536 17.8868L15.3453 24.9568C15.6057 25.2172 16.0278 25.2172 16.2881 24.9568L17.7024 23.5426C17.9627 23.2822 17.9627 22.8601 17.7024 22.5998L12.9969 17.8944C12.9129 17.8104 12.9724 17.6668 13.0912 17.6668L26 17.6668C26.3682 17.6668 26.6667 17.3683 26.6667 17.0001V15.0001C26.6667 14.6319 26.3682 14.3334 26 14.3334L13.0908 14.3334Z" fill="currentColor"/>', mv = '<path d="M14.1521 13.0929C14.1521 12.9741 14.0085 12.9147 13.9245 12.9987L9.21891 17.7043C8.95856 17.9646 8.53645 17.9646 8.2761 17.7043L6.86189 16.29C6.60154 16.0297 6.60154 15.6076 6.86189 15.3472L15.3472 6.86195C15.6075 6.6016 16.0296 6.6016 16.29 6.86195L17.7042 8.27616L17.7055 8.27751L24.7755 15.3475C25.0359 15.6078 25.0359 16.0299 24.7755 16.2903L23.3613 17.7045C23.1009 17.9649 22.6788 17.9649 22.4185 17.7045L17.7131 12.9991C17.6291 12.9151 17.4855 12.9746 17.4855 13.0934V26.0022C17.4855 26.3704 17.187 26.6688 16.8188 26.6688H14.8188C14.4506 26.6688 14.1521 26.3704 14.1521 26.0022L14.1521 13.0929Z" fill="currentColor"/>', gv = '<path d="M16.6927 25.3346C16.3245 25.3346 16.026 25.0361 16.026 24.6679L16.026 7.3346C16.026 6.96641 16.3245 6.66794 16.6927 6.66794L18.6927 6.66794C19.0609 6.66794 19.3594 6.96642 19.3594 7.3346L19.3594 24.6679C19.3594 25.0361 19.0609 25.3346 18.6927 25.3346H16.6927Z" fill="currentColor"/> <path d="M24.026 25.3346C23.6578 25.3346 23.3594 25.0361 23.3594 24.6679L23.3594 7.3346C23.3594 6.96641 23.6578 6.66794 24.026 6.66794L26.026 6.66794C26.3942 6.66794 26.6927 6.96642 26.6927 7.3346V24.6679C26.6927 25.0361 26.3942 25.3346 26.026 25.3346H24.026Z" fill="currentColor"/> <path d="M5.48113 23.9407C5.38584 24.2963 5.59689 24.6619 5.95254 24.7572L7.88439 25.2748C8.24003 25.3701 8.60559 25.159 8.70089 24.8034L13.1871 8.06067C13.2824 7.70503 13.0713 7.33947 12.7157 7.24417L10.7838 6.72654C10.4282 6.63124 10.0626 6.8423 9.96733 7.19794L5.48113 23.9407Z" fill="currentColor"/>', yv = '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.9266 7.57992C25.015 7.60672 25.0886 7.64746 25.2462 7.80506L26.956 9.51488C27.1136 9.67248 27.1543 9.74604 27.1811 9.83447C27.2079 9.9229 27.2079 10.0133 27.1811 10.1018C27.1543 10.1902 27.1136 10.2638 26.956 10.4214L13.1822 24.1951C13.0246 24.3527 12.951 24.3935 12.8626 24.4203C12.797 24.4402 12.7304 24.4453 12.6642 24.4357L12.7319 24.4203C12.6435 24.4471 12.553 24.4471 12.4646 24.4203C12.3762 24.3935 12.3026 24.3527 12.145 24.1951L5.04407 17.0942C4.88647 16.9366 4.84573 16.863 4.81893 16.7746C4.79213 16.6862 4.79213 16.5957 4.81893 16.5073C4.84573 16.4189 4.88647 16.3453 5.04407 16.1877L6.7539 14.4779C6.9115 14.3203 6.98506 14.2796 7.07349 14.2528C7.16191 14.226 7.25235 14.226 7.34078 14.2528C7.42921 14.2796 7.50277 14.3203 7.66037 14.4779L12.6628 19.4808L24.3397 7.80506C24.4973 7.64746 24.5709 7.60672 24.6593 7.57992C24.7477 7.55311 24.8382 7.55311 24.9266 7.57992Z" fill="currentColor"/>', vv = '<path d="M17.947 16.095C17.999 16.043 17.999 15.9585 17.947 15.9065L11.6295 9.58899C11.3691 9.32864 11.3691 8.90653 11.6295 8.64618L13.2323 7.04341C13.4926 6.78306 13.9147 6.78306 14.1751 7.04341L21.0289 13.8973C21.0392 13.9064 21.0493 13.9158 21.0591 13.9257L22.6619 15.5285C22.9223 15.7888 22.9223 16.2109 22.6619 16.4713L14.1766 24.9565C13.9163 25.2169 13.4942 25.2169 13.2338 24.9565L11.631 23.3538C11.3707 23.0934 11.3707 22.6713 11.631 22.411L17.947 16.095Z" fill="currentColor"/>', Jd = '<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7C5.63181 7 5.33333 7.29848 5.33333 7.66667V14.8667C5.33333 14.9403 5.39361 14.9999 5.46724 15.0009C10.8844 15.0719 15.2614 19.449 15.3325 24.8661C15.3334 24.9397 15.393 25 15.4667 25H26C26.3682 25 26.6667 24.7015 26.6667 24.3333V7.66667C26.6667 7.29848 26.3682 7 26 7H6ZM17.0119 22.2294C17.0263 22.29 17.0802 22.3333 17.1425 22.3333H23.3333C23.7015 22.3333 24 22.0349 24 21.6667V10.3333C24 9.96514 23.7015 9.66667 23.3333 9.66667H8.66667C8.29848 9.66667 8 9.96514 8 10.3333V13.1909C8 13.2531 8.04332 13.3071 8.10392 13.3214C12.5063 14.3618 15.9715 17.827 17.0119 22.2294Z" fill="currentColor"/> <path d="M13.2 25C13.2736 25 13.3334 24.9398 13.3322 24.8661C13.2615 20.5544 9.77889 17.0718 5.46718 17.0011C5.39356 16.9999 5.33333 17.0597 5.33333 17.1333V18.8667C5.33333 18.9403 5.39348 18.9999 5.4671 19.0015C8.67465 19.0716 11.2617 21.6587 11.3319 24.8662C11.3335 24.9399 11.393 25 11.4667 25H13.2Z" fill="currentColor"/> <path d="M5.33333 21.1333C5.33333 21.0597 5.39332 20.9998 5.46692 21.0022C7.57033 21.0712 9.26217 22.763 9.33114 24.8664C9.33356 24.94 9.27364 25 9.2 25H6C5.63181 25 5.33333 24.7015 5.33333 24.3333V21.1333Z" fill="currentColor"/>', bv = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Jd
}), wv = '<path d="M8 28.0003C8 27.6321 8.29848 27.3336 8.66667 27.3336H23.3333C23.7015 27.3336 24 27.6321 24 28.0003V29.3336C24 29.7018 23.7015 30.0003 23.3333 30.0003H8.66667C8.29848 30.0003 8 29.7018 8 29.3336V28.0003Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66602 6.66699C4.29783 6.66699 3.99935 6.96547 3.99935 7.33366V24.667C3.99935 25.0352 4.29783 25.3337 4.66602 25.3337H27.3327C27.7009 25.3337 27.9994 25.0352 27.9994 24.667V7.33366C27.9994 6.96547 27.7009 6.66699 27.3327 6.66699H4.66602ZM8.66659 21.3333C8.2984 21.3333 7.99992 21.0349 7.99992 20.6667V11.3333C7.99992 10.9651 8.2984 10.6667 8.66659 10.6667H13.9999C14.3681 10.6667 14.6666 10.9651 14.6666 11.3333V12.6667C14.6666 13.0349 14.3681 13.3333 13.9999 13.3333H10.7999C10.7263 13.3333 10.6666 13.393 10.6666 13.4667V18.5333C10.6666 18.607 10.7263 18.6667 10.7999 18.6667H13.9999C14.3681 18.6667 14.6666 18.9651 14.6666 19.3333V20.6667C14.6666 21.0349 14.3681 21.3333 13.9999 21.3333H8.66659ZM17.9999 21.3333C17.6317 21.3333 17.3333 21.0349 17.3333 20.6667V11.3333C17.3333 10.9651 17.6317 10.6667 17.9999 10.6667H23.3333C23.7014 10.6667 23.9999 10.9651 23.9999 11.3333V12.6667C23.9999 13.0349 23.7014 13.3333 23.3333 13.3333H20.1333C20.0596 13.3333 19.9999 13.393 19.9999 13.4667V18.5333C19.9999 18.607 20.0596 18.6667 20.1333 18.6667H23.3333C23.7014 18.6667 23.9999 18.9651 23.9999 19.3333V20.6667C23.9999 21.0349 23.7014 21.3333 23.3333 21.3333H17.9999Z" fill="currentColor"/>', xv = '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.6661 6.66699C4.29791 6.66699 3.99943 6.96547 3.99943 7.33366V24.667C3.99943 25.0352 4.29791 25.3337 4.6661 25.3337H27.3328C27.701 25.3337 27.9994 25.0352 27.9994 24.667V7.33366C27.9994 6.96547 27.701 6.66699 27.3328 6.66699H4.6661ZM8.66667 21.3333C8.29848 21.3333 8 21.0349 8 20.6667V11.3333C8 10.9651 8.29848 10.6667 8.66667 10.6667H14C14.3682 10.6667 14.6667 10.9651 14.6667 11.3333V12.6667C14.6667 13.0349 14.3682 13.3333 14 13.3333H10.8C10.7264 13.3333 10.6667 13.393 10.6667 13.4667V18.5333C10.6667 18.607 10.7264 18.6667 10.8 18.6667H14C14.3682 18.6667 14.6667 18.9651 14.6667 19.3333V20.6667C14.6667 21.0349 14.3682 21.3333 14 21.3333H8.66667ZM18 21.3333C17.6318 21.3333 17.3333 21.0349 17.3333 20.6667V11.3333C17.3333 10.9651 17.6318 10.6667 18 10.6667H23.3333C23.7015 10.6667 24 10.9651 24 11.3333V12.6667C24 13.0349 23.7015 13.3333 23.3333 13.3333H20.1333C20.0597 13.3333 20 13.393 20 13.4667V18.5333C20 18.607 20.0597 18.6667 20.1333 18.6667H23.3333C23.7015 18.6667 24 18.9651 24 19.3333V20.6667C24 21.0349 23.7015 21.3333 23.3333 21.3333H18Z" fill="currentColor"/>', Sv = '<path d="M14.2225 13.7867C14.3065 13.8706 14.4501 13.8112 14.4501 13.6924V5.99955C14.4501 5.63136 14.7486 5.33289 15.1167 5.33289H16.8501C17.2183 5.33289 17.5167 5.63136 17.5167 5.99955V13.6916C17.5167 13.8104 17.6604 13.8699 17.7444 13.7859L19.9433 11.5869C20.2037 11.3266 20.6258 11.3266 20.8861 11.5869L22.1118 12.8126C22.3722 13.0729 22.3722 13.4951 22.1118 13.7554L16.4549 19.4123C16.1946 19.6726 15.772 19.6731 15.5116 19.4128L9.85479 13.7559C9.59444 13.4956 9.59444 13.0734 9.85479 12.8131L11.0804 11.5874C11.3408 11.3271 11.7629 11.3271 12.0233 11.5874L14.2225 13.7867Z" fill="currentColor"/> <path d="M5.99998 20.267C5.63179 20.267 5.33331 20.5654 5.33331 20.9336V25.9997C5.33331 26.3678 5.63179 26.6663 5.99998 26.6663H26C26.3682 26.6663 26.6666 26.3678 26.6666 25.9997V20.9336C26.6666 20.5654 26.3682 20.267 26 20.267H24.2666C23.8985 20.267 23.6 20.5654 23.6 20.9336V22.9333C23.6 23.3014 23.3015 23.5999 22.9333 23.5999H9.06638C8.69819 23.5999 8.39972 23.3014 8.39972 22.9333V20.9336C8.39972 20.5654 8.10124 20.267 7.73305 20.267H5.99998Z" fill="currentColor"/>', $v = '<path d="M16 20C18.2091 20 20 18.2092 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2092 13.7909 20 16 20Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M28 16.0058C28 18.671 23.5 25.3334 16 25.3334C8.5 25.3334 4 18.6762 4 16.0058C4 13.3354 8.50447 6.66669 16 6.66669C23.4955 6.66669 28 13.3406 28 16.0058ZM25.3318 15.9934C25.3328 16.0017 25.3328 16.0099 25.3318 16.0182C25.3274 16.0571 25.3108 16.1728 25.2485 16.3708C25.1691 16.6229 25.0352 16.9462 24.8327 17.3216C24.4264 18.0749 23.7969 18.9398 22.9567 19.754C21.2791 21.3798 18.9148 22.6667 16 22.6667C13.0845 22.6667 10.7202 21.3805 9.04298 19.7557C8.20295 18.9419 7.57362 18.0773 7.16745 17.3241C6.96499 16.9486 6.83114 16.6252 6.75172 16.3729C6.67942 16.1431 6.66856 16.0243 6.66695 16.0066L6.66695 16.005C6.66859 15.9871 6.67951 15.8682 6.75188 15.6383C6.83145 15.3854 6.96554 15.0614 7.16831 14.6853C7.57507 13.9306 8.20514 13.0644 9.04577 12.249C10.7245 10.6208 13.0886 9.33335 16 9.33335C18.9108 9.33335 21.2748 10.6215 22.9539 12.2507C23.7947 13.0664 24.4249 13.933 24.8318 14.6877C25.0346 15.0639 25.1688 15.3878 25.2483 15.6404C25.3107 15.8386 25.3274 15.9545 25.3318 15.9934Z" fill="currentColor"/>', Ev = '<path d="M15.8747 8.11857C16.3148 7.79342 16.9375 8.10759 16.9375 8.65476V14.2575C16.9375 14.3669 17.0621 14.4297 17.1501 14.3647L25.6038 8.11857C26.0439 7.79342 26.6667 8.10759 26.6667 8.65476V23.3451C26.6667 23.8923 26.0439 24.2064 25.6038 23.8813L17.1501 17.6346C17.0621 17.5695 16.9375 17.6324 16.9375 17.7418L16.9375 23.3451C16.9375 23.8923 16.3147 24.2064 15.8747 23.8813L5.93387 16.5358C5.57322 16.2693 5.57323 15.7299 5.93389 15.4634L15.8747 8.11857Z" fill="currentColor"/>', Tv = '<path d="M16.1253 8.11866C15.6852 7.7935 15.0625 8.10768 15.0625 8.65484V14.2576C15.0625 14.367 14.9379 14.4298 14.8499 14.3648L6.39615 8.11866C5.95607 7.7935 5.33331 8.10768 5.33331 8.65484V23.3452C5.33331 23.8923 5.9561 24.2065 6.39617 23.8813L14.8499 17.6347C14.9379 17.5696 15.0625 17.6325 15.0625 17.7419L15.0625 23.3452C15.0625 23.8923 15.6853 24.2065 16.1253 23.8813L26.0661 16.5358C26.4268 16.2694 26.4268 15.73 26.0661 15.4635L16.1253 8.11866Z" fill="currentColor"/>', Lv = '<path d="M19.3334 13.3333C18.9652 13.3333 18.6667 13.0349 18.6667 12.6667L18.6667 7.33333C18.6667 6.96514 18.9652 6.66666 19.3334 6.66666H21.3334C21.7015 6.66666 22 6.96514 22 7.33333V9.86666C22 9.9403 22.0597 10 22.1334 10L24.6667 10C25.0349 10 25.3334 10.2985 25.3334 10.6667V12.6667C25.3334 13.0349 25.0349 13.3333 24.6667 13.3333L19.3334 13.3333Z" fill="currentColor"/> <path d="M13.3334 19.3333C13.3334 18.9651 13.0349 18.6667 12.6667 18.6667H7.33335C6.96516 18.6667 6.66669 18.9651 6.66669 19.3333V21.3333C6.66669 21.7015 6.96516 22 7.33335 22H9.86669C9.94032 22 10 22.0597 10 22.1333L10 24.6667C10 25.0349 10.2985 25.3333 10.6667 25.3333H12.6667C13.0349 25.3333 13.3334 25.0349 13.3334 24.6667L13.3334 19.3333Z" fill="currentColor"/> <path d="M18.6667 24.6667C18.6667 25.0349 18.9652 25.3333 19.3334 25.3333H21.3334C21.7015 25.3333 22 25.0349 22 24.6667V22.1333C22 22.0597 22.0597 22 22.1334 22H24.6667C25.0349 22 25.3334 21.7015 25.3334 21.3333V19.3333C25.3334 18.9651 25.0349 18.6667 24.6667 18.6667L19.3334 18.6667C18.9652 18.6667 18.6667 18.9651 18.6667 19.3333L18.6667 24.6667Z" fill="currentColor"/> <path d="M10.6667 13.3333H12.6667C13.0349 13.3333 13.3334 13.0349 13.3334 12.6667L13.3334 10.6667V7.33333C13.3334 6.96514 13.0349 6.66666 12.6667 6.66666H10.6667C10.2985 6.66666 10 6.96514 10 7.33333L10 9.86666C10 9.9403 9.94033 10 9.86669 10L7.33335 10C6.96516 10 6.66669 10.2985 6.66669 10.6667V12.6667C6.66669 13.0349 6.96516 13.3333 7.33335 13.3333L10.6667 13.3333Z" fill="currentColor"/>', Pv = '<path d="M25.3299 7.26517C25.2958 6.929 25.0119 6.66666 24.6667 6.66666H19.3334C18.9652 6.66666 18.6667 6.96514 18.6667 7.33333V9.33333C18.6667 9.70152 18.9652 10 19.3334 10L21.8667 10C21.9403 10 22 10.0597 22 10.1333V12.6667C22 13.0349 22.2985 13.3333 22.6667 13.3333H24.6667C25.0349 13.3333 25.3334 13.0349 25.3334 12.6667V7.33333C25.3334 7.31032 25.3322 7.28758 25.3299 7.26517Z" fill="currentColor"/> <path d="M22 21.8667C22 21.9403 21.9403 22 21.8667 22L19.3334 22C18.9652 22 18.6667 22.2985 18.6667 22.6667V24.6667C18.6667 25.0349 18.9652 25.3333 19.3334 25.3333L24.6667 25.3333C25.0349 25.3333 25.3334 25.0349 25.3334 24.6667V19.3333C25.3334 18.9651 25.0349 18.6667 24.6667 18.6667H22.6667C22.2985 18.6667 22 18.9651 22 19.3333V21.8667Z" fill="currentColor"/> <path d="M12.6667 22H10.1334C10.0597 22 10 21.9403 10 21.8667V19.3333C10 18.9651 9.70154 18.6667 9.33335 18.6667H7.33335C6.96516 18.6667 6.66669 18.9651 6.66669 19.3333V24.6667C6.66669 25.0349 6.96516 25.3333 7.33335 25.3333H12.6667C13.0349 25.3333 13.3334 25.0349 13.3334 24.6667V22.6667C13.3334 22.2985 13.0349 22 12.6667 22Z" fill="currentColor"/> <path d="M10 12.6667V10.1333C10 10.0597 10.0597 10 10.1334 10L12.6667 10C13.0349 10 13.3334 9.70152 13.3334 9.33333V7.33333C13.3334 6.96514 13.0349 6.66666 12.6667 6.66666H7.33335C6.96516 6.66666 6.66669 6.96514 6.66669 7.33333V12.6667C6.66669 13.0349 6.96516 13.3333 7.33335 13.3333H9.33335C9.70154 13.3333 10 13.0349 10 12.6667Z" fill="currentColor"/>', Mv = '<path fill-rule="evenodd" clip-rule="evenodd" d="M26.6667 5.99998C26.6667 5.63179 26.3682 5.33331 26 5.33331H11.3333C10.9651 5.33331 10.6667 5.63179 10.6667 5.99998V17.5714C10.6667 17.6694 10.5644 17.7342 10.4741 17.6962C9.91823 17.4625 9.30754 17.3333 8.66667 17.3333C6.08934 17.3333 4 19.4226 4 22C4 24.5773 6.08934 26.6666 8.66667 26.6666C11.244 26.6666 13.3333 24.5773 13.3333 22V8.66665C13.3333 8.29846 13.6318 7.99998 14 7.99998L23.3333 7.99998C23.7015 7.99998 24 8.29846 24 8.66665V14.9048C24 15.0027 23.8978 15.0675 23.8075 15.0296C23.2516 14.7958 22.6409 14.6666 22 14.6666C19.4227 14.6666 17.3333 16.756 17.3333 19.3333C17.3333 21.9106 19.4227 24 22 24C24.5773 24 26.6667 21.9106 26.6667 19.3333V5.99998ZM22 21.3333C23.1046 21.3333 24 20.4379 24 19.3333C24 18.2287 23.1046 17.3333 22 17.3333C20.8954 17.3333 20 18.2287 20 19.3333C20 20.4379 20.8954 21.3333 22 21.3333ZM8.66667 24C9.77124 24 10.6667 23.1045 10.6667 22C10.6667 20.8954 9.77124 20 8.66667 20C7.5621 20 6.66667 20.8954 6.66667 22C6.66667 23.1045 7.5621 24 8.66667 24Z" fill="currentColor"/>', kv = '<path d="M17.5091 24.6594C17.5091 25.2066 16.8864 25.5208 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9991 9.36923 19.9991H4.66667C4.29848 19.9991 4 19.7006 4 19.3325V12.6658C4 12.2976 4.29848 11.9991 4.66667 11.9991H9.37115C9.39967 11.9991 9.42745 11.99 9.45039 11.973L16.4463 6.8036C16.8863 6.47842 17.5091 6.79259 17.5091 7.33977L17.5091 24.6594Z" fill="currentColor"/> <path d="M28.8621 13.6422C29.1225 13.3818 29.1225 12.9597 28.8621 12.6994L27.9193 11.7566C27.659 11.4962 27.2368 11.4962 26.9765 11.7566L24.7134 14.0197C24.6613 14.0717 24.5769 14.0717 24.5248 14.0197L22.262 11.7568C22.0016 11.4964 21.5795 11.4964 21.3191 11.7568L20.3763 12.6996C20.116 12.9599 20.116 13.382 20.3763 13.6424L22.6392 15.9053C22.6913 15.9573 22.6913 16.0418 22.6392 16.0938L20.3768 18.3562C20.1165 18.6166 20.1165 19.0387 20.3768 19.299L21.3196 20.2419C21.58 20.5022 22.0021 20.5022 22.2624 20.2418L24.5248 17.9795C24.5769 17.9274 24.6613 17.9274 24.7134 17.9795L26.976 20.2421C27.2363 20.5024 27.6585 20.5024 27.9188 20.2421L28.8616 19.2992C29.122 19.0389 29.122 18.6168 28.8616 18.3564L26.599 16.0938C26.547 16.0418 26.547 15.9573 26.599 15.9053L28.8621 13.6422Z" fill="currentColor"/>', Iv = '<path d="M26.6009 16.0725C26.6009 16.424 26.4302 17.1125 25.9409 18.0213C25.4676 18.8976 24.7542 19.8715 23.8182 20.7783C21.9489 22.5905 19.2662 24.0667 15.9342 24.0667C12.6009 24.0667 9.91958 22.5915 8.04891 20.78C7.11424 19.8736 6.40091 18.9 5.92758 18.0236C5.43824 17.1149 5.26758 16.4257 5.26758 16.0725C5.26758 15.7193 5.43824 15.0293 5.92891 14.1193C6.40224 13.2416 7.11558 12.2665 8.05158 11.3587C9.92224 9.54398 12.6049 8.06665 15.9342 8.06665C19.2636 8.06665 21.9449 9.54505 23.8169 11.3604C24.7529 12.2687 25.4662 13.2441 25.9396 14.1216C26.4302 15.0317 26.6009 15.7209 26.6009 16.0725Z" stroke="currentColor" stroke-width="3"/> <path d="M15.9336 20.0667C18.1427 20.0667 19.9336 18.2758 19.9336 16.0667C19.9336 13.8575 18.1427 12.0667 15.9336 12.0667C13.7245 12.0667 11.9336 13.8575 11.9336 16.0667C11.9336 18.2758 13.7245 20.0667 15.9336 20.0667Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M27.2323 25.0624L6.93878 4.76886C6.78118 4.61126 6.70762 4.57052 6.61919 4.54372C6.53077 4.51692 6.44033 4.51691 6.3519 4.54372C6.26347 4.57052 6.18991 4.61126 6.03231 4.76886L4.77032 6.03085C4.61272 6.18845 4.57198 6.26201 4.54518 6.35044C4.51838 6.43887 4.51838 6.5293 4.54518 6.61773C4.57198 6.70616 4.61272 6.77972 4.77032 6.93732L25.0639 27.2308C25.2215 27.3884 25.295 27.4292 25.3834 27.456C25.4719 27.4828 25.5623 27.4828 25.6507 27.456C25.7392 27.4292 25.8127 27.3885 25.9703 27.2309L27.2323 25.9689C27.3899 25.8113 27.4307 25.7377 27.4575 25.6493C27.4843 25.5608 27.4843 25.4704 27.4575 25.382C27.4307 25.2935 27.3899 25.22 27.2323 25.0624Z" fill="currentColor"/>', Vv = '<path d="M8.66667 6.66667C8.29848 6.66667 8 6.96514 8 7.33333V24.6667C8 25.0349 8.29848 25.3333 8.66667 25.3333H12.6667C13.0349 25.3333 13.3333 25.0349 13.3333 24.6667V7.33333C13.3333 6.96514 13.0349 6.66667 12.6667 6.66667H8.66667Z" fill="currentColor"/> <path d="M19.3333 6.66667C18.9651 6.66667 18.6667 6.96514 18.6667 7.33333V24.6667C18.6667 25.0349 18.9651 25.3333 19.3333 25.3333H23.3333C23.7015 25.3333 24 25.0349 24 24.6667V7.33333C24 6.96514 23.7015 6.66667 23.3333 6.66667H19.3333Z" fill="currentColor"/>', Av = '<path d="M5.33334 26V19.4667C5.33334 19.393 5.39304 19.3333 5.46668 19.3333H7.86668C7.94031 19.3333 8.00001 19.393 8.00001 19.4667V23.3333C8.00001 23.7015 8.29849 24 8.66668 24H23.3333C23.7015 24 24 23.7015 24 23.3333V8.66666C24 8.29847 23.7015 7.99999 23.3333 7.99999H19.4667C19.393 7.99999 19.3333 7.9403 19.3333 7.86666V5.46666C19.3333 5.39302 19.393 5.33333 19.4667 5.33333H26C26.3682 5.33333 26.6667 5.63181 26.6667 5.99999V26C26.6667 26.3682 26.3682 26.6667 26 26.6667H6.00001C5.63182 26.6667 5.33334 26.3682 5.33334 26Z" fill="currentColor"/> <path d="M14.0098 8.42359H10.806C10.6872 8.42359 10.6277 8.56721 10.7117 8.6512L16.5491 14.4886C16.8094 14.7489 16.8094 15.171 16.5491 15.4314L15.3234 16.657C15.0631 16.9174 14.641 16.9174 14.3806 16.657L8.63739 10.9138C8.55339 10.8298 8.40978 10.8893 8.40978 11.0081V14.0236C8.40978 14.3918 8.1113 14.6903 7.74311 14.6903H6.00978C5.64159 14.6903 5.34311 14.3918 5.34311 14.0236L5.34311 6.02359C5.34311 5.6554 5.64159 5.35692 6.00978 5.35692L14.0098 5.35692C14.378 5.35692 14.6764 5.6554 14.6764 6.02359V7.75692C14.6764 8.12511 14.378 8.42359 14.0098 8.42359Z" fill="currentColor"/>', Nv = '<path d="M16 15.3333C15.6318 15.3333 15.3333 15.6318 15.3333 16V20C15.3333 20.3682 15.6318 20.6667 16 20.6667H21.3333C21.7015 20.6667 22 20.3682 22 20V16C22 15.6318 21.7015 15.3333 21.3333 15.3333H16Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33333 7.33334C5.33333 6.96515 5.63181 6.66667 5.99999 6.66667H26C26.3682 6.66667 26.6667 6.96515 26.6667 7.33334V24.6667C26.6667 25.0349 26.3682 25.3333 26 25.3333H5.99999C5.63181 25.3333 5.33333 25.0349 5.33333 24.6667V7.33334ZM7.99999 10C7.99999 9.63182 8.29847 9.33334 8.66666 9.33334H23.3333C23.7015 9.33334 24 9.63182 24 10V22C24 22.3682 23.7015 22.6667 23.3333 22.6667H8.66666C8.29847 22.6667 7.99999 22.3682 7.99999 22V10Z" fill="currentColor"/>', Rv = '<path d="M10.6667 6.6548C10.6667 6.10764 11.2894 5.79346 11.7295 6.11862L24.377 15.4634C24.7377 15.7298 24.7377 16.2692 24.3771 16.5357L11.7295 25.8813C11.2895 26.2065 10.6667 25.8923 10.6667 25.3451L10.6667 6.6548Z" fill="currentColor"/>', Hv = '<path d="M13.9213 5.53573C14.3146 5.45804 14.6666 5.76987 14.6666 6.17079V7.57215C14.6666 7.89777 14.4305 8.17277 14.114 8.24925C12.5981 8.61559 11.2506 9.41368 10.2091 10.506C9.98474 10.7414 9.62903 10.8079 9.34742 10.6453L8.14112 9.94885C7.79394 9.7484 7.69985 9.28777 7.96359 8.98585C9.48505 7.24409 11.5636 6.00143 13.9213 5.53573Z" fill="currentColor"/> <path d="M5.88974 12.5908C6.01805 12.2101 6.46491 12.0603 6.81279 12.2611L8.01201 12.9535C8.29379 13.1162 8.41396 13.4577 8.32238 13.7699C8.11252 14.4854 7.99998 15.2424 7.99998 16.0257C7.99998 16.809 8.11252 17.566 8.32238 18.2814C8.41396 18.5936 8.29378 18.9352 8.01201 19.0979L6.82742 19.7818C6.48051 19.9821 6.03488 19.8337 5.90521 19.4547C5.5345 18.3712 5.33331 17.2091 5.33331 16C5.33331 14.8078 5.5289 13.6613 5.88974 12.5908Z" fill="currentColor"/> <path d="M8.17106 22.0852C7.82291 22.2862 7.72949 22.7486 7.99532 23.0502C9.51387 24.773 11.5799 26.0017 13.9213 26.4642C14.3146 26.5419 14.6666 26.2301 14.6666 25.8291V24.4792C14.6666 24.1536 14.4305 23.8786 14.114 23.8021C12.5981 23.4358 11.2506 22.6377 10.2091 21.5453C9.98474 21.31 9.62903 21.2435 9.34742 21.4061L8.17106 22.0852Z" fill="currentColor"/> <path d="M17.3333 25.8291C17.3333 26.2301 17.6857 26.5418 18.079 26.4641C22.9748 25.4969 26.6666 21.1796 26.6666 16C26.6666 10.8204 22.9748 6.50302 18.079 5.5358C17.6857 5.4581 17.3333 5.76987 17.3333 6.17079V7.57215C17.3333 7.89777 17.5697 8.17282 17.8862 8.24932C21.3942 9.09721 24 12.2572 24 16.0257C24 19.7942 21.3942 22.9542 17.8862 23.802C17.5697 23.8785 17.3333 24.1536 17.3333 24.4792V25.8291Z" fill="currentColor"/> <path d="M14.3961 10.4163C13.9561 10.0911 13.3333 10.4053 13.3333 10.9525L13.3333 21.0474C13.3333 21.5946 13.9561 21.9087 14.3962 21.5836L21.2273 16.5359C21.5879 16.2694 21.5879 15.73 21.2273 15.4635L14.3961 10.4163Z" fill="currentColor"/>', Ov = '<path d="M15.6038 12.2147C16.0439 12.5399 16.6667 12.2257 16.6667 11.6786V10.1789C16.6667 10.1001 16.7351 10.0384 16.8134 10.0479C20.1116 10.4494 22.6667 13.2593 22.6667 16.6659C22.6667 20.3481 19.6817 23.3332 15.9995 23.3332C12.542 23.3332 9.69927 20.7014 9.36509 17.332C9.32875 16.9655 9.03371 16.6662 8.66548 16.6662L6.66655 16.6666C6.29841 16.6666 5.99769 16.966 6.02187 17.3334C6.36494 22.5454 10.7012 26.6667 16 26.6667C21.5228 26.6667 26 22.1895 26 16.6667C26 11.4103 21.9444 7.10112 16.7916 6.69757C16.7216 6.69209 16.6667 6.63396 16.6667 6.56372V4.98824C16.6667 4.44106 16.0439 4.12689 15.6038 4.45206L11.0765 7.79738C10.7159 8.06387 10.7159 8.60326 11.0766 8.86973L15.6038 12.2147Z" fill="currentColor"/>', Dv = '<path d="M16.6667 10.3452C16.6667 10.8924 16.0439 11.2066 15.6038 10.8814L11.0766 7.5364C10.7159 7.26993 10.7159 6.73054 11.0766 6.46405L15.6038 3.11873C16.0439 2.79356 16.6667 3.10773 16.6667 3.6549V5.22682C16.6667 5.29746 16.7223 5.35579 16.7927 5.36066C22.6821 5.76757 27.3333 10.674 27.3333 16.6667C27.3333 22.9259 22.2592 28 16 28C9.96483 28 5.03145 23.2827 4.68601 17.3341C4.66466 16.9665 4.96518 16.6673 5.33339 16.6673H7.3334C7.70157 16.6673 7.99714 16.9668 8.02743 17.3337C8.36638 21.4399 11.8064 24.6667 16 24.6667C20.4183 24.6667 24 21.085 24 16.6667C24 12.5225 20.8483 9.11428 16.8113 8.70739C16.7337 8.69957 16.6667 8.76096 16.6667 8.83893V10.3452Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0879 19.679C17.4553 19.9195 17.8928 20.0398 18.4004 20.0398C18.9099 20.0398 19.3474 19.9205 19.7129 19.6818C20.0803 19.4413 20.3635 19.0938 20.5623 18.6392C20.7612 18.1847 20.8606 17.6373 20.8606 16.9972C20.8625 16.3608 20.764 15.8192 20.5652 15.3722C20.3663 14.9252 20.0822 14.5853 19.7129 14.3523C19.3455 14.1175 18.908 14 18.4004 14C17.8928 14 17.4553 14.1175 17.0879 14.3523C16.7224 14.5853 16.4402 14.9252 16.2413 15.3722C16.0443 15.8173 15.9449 16.3589 15.943 16.9972C15.9411 17.6354 16.0396 18.1818 16.2385 18.6364C16.4373 19.089 16.7205 19.4366 17.0879 19.679ZM19.1362 18.4262C18.9487 18.7349 18.7034 18.8892 18.4004 18.8892C18.1996 18.8892 18.0226 18.8211 17.8691 18.6847C17.7157 18.5464 17.5964 18.3372 17.5112 18.0568C17.4279 17.7765 17.3871 17.4233 17.389 16.9972C17.3909 16.3684 17.4847 15.9025 17.6703 15.5995C17.8559 15.2945 18.0993 15.1421 18.4004 15.1421C18.603 15.1421 18.7801 15.2093 18.9316 15.3438C19.0832 15.4782 19.2015 15.6828 19.2868 15.9574C19.372 16.2301 19.4146 16.5767 19.4146 16.9972C19.4165 17.6392 19.3237 18.1156 19.1362 18.4262Z" fill="currentColor"/> <path d="M13.7746 19.8978C13.8482 19.8978 13.9079 19.8381 13.9079 19.7644V14.2129C13.9079 14.1393 13.8482 14.0796 13.7746 14.0796H12.642C12.6171 14.0796 12.5927 14.0865 12.5716 14.0997L11.2322 14.9325C11.1931 14.9568 11.1693 14.9996 11.1693 15.0457V15.9497C11.1693 16.0539 11.2833 16.1178 11.3722 16.0635L12.464 15.396C12.4682 15.3934 12.473 15.3921 12.4779 15.3921C12.4926 15.3921 12.5045 15.404 12.5045 15.4187V19.7644C12.5045 19.8381 12.5642 19.8978 12.6378 19.8978H13.7746Z" fill="currentColor"/>', _v = '<path d="M15.3333 10.3452C15.3333 10.8924 15.9561 11.2066 16.3962 10.8814L20.9234 7.5364C21.2841 7.26993 21.2841 6.73054 20.9235 6.46405L16.3962 3.11873C15.9561 2.79356 15.3333 3.10773 15.3333 3.6549V5.22682C15.3333 5.29746 15.2778 5.35579 15.2073 5.36066C9.31791 5.76757 4.66667 10.674 4.66667 16.6667C4.66667 22.9259 9.74078 28 16 28C22.0352 28 26.9686 23.2827 27.314 17.3341C27.3354 16.9665 27.0348 16.6673 26.6666 16.6673H24.6666C24.2984 16.6673 24.0029 16.9668 23.9726 17.3337C23.6336 21.4399 20.1937 24.6667 16 24.6667C11.5817 24.6667 8 21.085 8 16.6667C8 12.5225 11.1517 9.11428 15.1887 8.70739C15.2663 8.69957 15.3333 8.76096 15.3333 8.83893V10.3452Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0879 19.679C17.4553 19.9195 17.8928 20.0398 18.4004 20.0398C18.9099 20.0398 19.3474 19.9205 19.7129 19.6818C20.0803 19.4413 20.3635 19.0938 20.5623 18.6392C20.7612 18.1847 20.8606 17.6373 20.8606 16.9972C20.8625 16.3608 20.764 15.8192 20.5652 15.3722C20.3663 14.9252 20.0822 14.5853 19.7129 14.3523C19.3455 14.1175 18.908 14 18.4004 14C17.8928 14 17.4553 14.1175 17.0879 14.3523C16.7224 14.5853 16.4402 14.9252 16.2413 15.3722C16.0443 15.8173 15.9449 16.3589 15.943 16.9972C15.9411 17.6354 16.0396 18.1818 16.2385 18.6364C16.4373 19.089 16.7205 19.4366 17.0879 19.679ZM19.1362 18.4262C18.9487 18.7349 18.7034 18.8892 18.4004 18.8892C18.1996 18.8892 18.0225 18.8211 17.8691 18.6847C17.7157 18.5464 17.5964 18.3372 17.5112 18.0568C17.4278 17.7765 17.3871 17.4233 17.389 16.9972C17.3909 16.3684 17.4847 15.9025 17.6703 15.5995C17.8559 15.2945 18.0992 15.1421 18.4004 15.1421C18.603 15.1421 18.7801 15.2093 18.9316 15.3438C19.0831 15.4782 19.2015 15.6828 19.2867 15.9574C19.372 16.2301 19.4146 16.5767 19.4146 16.9972C19.4165 17.6392 19.3237 18.1156 19.1362 18.4262Z" fill="currentColor"/> <path d="M13.7746 19.8978C13.8482 19.8978 13.9079 19.8381 13.9079 19.7644V14.2129C13.9079 14.1393 13.8482 14.0796 13.7746 14.0796H12.642C12.6171 14.0796 12.5927 14.0865 12.5716 14.0997L11.2322 14.9325C11.1931 14.9568 11.1693 14.9996 11.1693 15.0457V15.9497C11.1693 16.0539 11.2833 16.1178 11.3722 16.0635L12.464 15.396C12.4682 15.3934 12.473 15.3921 12.4779 15.3921C12.4926 15.3921 12.5045 15.404 12.5045 15.4187V19.7644C12.5045 19.8381 12.5642 19.8978 12.6378 19.8978H13.7746Z" fill="currentColor"/>', Fv = '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5722 5.33333C13.2429 5.33333 12.9629 5.57382 12.9132 5.89938L12.4063 9.21916C12.4 9.26058 12.3746 9.29655 12.3378 9.31672C12.2387 9.37118 12.1409 9.42779 12.0444 9.48648C12.0086 9.5083 11.9646 9.51242 11.9255 9.49718L8.79572 8.27692C8.48896 8.15732 8.14083 8.27958 7.9762 8.56472L5.5491 12.7686C5.38444 13.0538 5.45271 13.4165 5.70981 13.6223L8.33308 15.7225C8.3658 15.7487 8.38422 15.7887 8.38331 15.8306C8.38209 15.8867 8.38148 15.9429 8.38148 15.9993C8.38148 16.0558 8.3821 16.1121 8.38332 16.1684C8.38423 16.2102 8.36582 16.2503 8.33313 16.2765L5.7103 18.3778C5.45334 18.5836 5.38515 18.9462 5.54978 19.2314L7.97688 23.4352C8.14155 23.7205 8.48981 23.8427 8.79661 23.723L11.926 22.5016C11.9651 22.4864 12.009 22.4905 12.0449 22.5123C12.1412 22.5709 12.2388 22.6274 12.3378 22.6818C12.3745 22.7019 12.4 22.7379 12.4063 22.7793L12.9132 26.0993C12.9629 26.4249 13.2429 26.6654 13.5722 26.6654H18.4264C18.7556 26.6654 19.0356 26.425 19.0854 26.0995L19.5933 22.7801C19.5997 22.7386 19.6252 22.7027 19.6619 22.6825C19.7614 22.6279 19.8596 22.5711 19.9564 22.5121C19.9923 22.4903 20.0362 22.4862 20.0754 22.5015L23.2035 23.7223C23.5103 23.842 23.8585 23.7198 24.0232 23.4346L26.4503 19.2307C26.6149 18.9456 26.5467 18.583 26.2898 18.3771L23.6679 16.2766C23.6352 16.2504 23.6168 16.2104 23.6177 16.1685C23.619 16.1122 23.6196 16.0558 23.6196 15.9993C23.6196 15.9429 23.619 15.8866 23.6177 15.8305C23.6168 15.7886 23.6353 15.7486 23.668 15.7224L26.2903 13.623C26.5474 13.4172 26.6156 13.0544 26.451 12.7692L24.0239 8.56537C23.8592 8.28023 23.5111 8.15797 23.2043 8.27757L20.0758 9.49734C20.0367 9.51258 19.9927 9.50846 19.9569 9.48664C19.8599 9.42762 19.7616 9.37071 19.6618 9.31596C19.6251 9.2958 19.5997 9.25984 19.5933 9.21843L19.0854 5.89915C19.0356 5.57369 18.7556 5.33333 18.4264 5.33333H13.5722ZM16.0001 20.2854C18.3672 20.2854 20.2862 18.3664 20.2862 15.9993C20.2862 13.6322 18.3672 11.7132 16.0001 11.7132C13.6329 11.7132 11.714 13.6322 11.714 15.9993C11.714 18.3664 13.6329 20.2854 16.0001 20.2854Z" fill="currentColor"/>', qv = '<path d="M17.5091 24.6595C17.5091 25.2066 16.8864 25.5208 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9992 9.36923 19.9992H4.66667C4.29848 19.9992 4 19.7007 4 19.3325V12.6658C4 12.2976 4.29848 11.9992 4.66667 11.9992H9.37115C9.39967 11.9992 9.42745 11.99 9.45039 11.9731L16.4463 6.80363C16.8863 6.47845 17.5091 6.79262 17.5091 7.3398L17.5091 24.6595Z" fill="currentColor"/> <path d="M27.5091 9.33336C27.8773 9.33336 28.1758 9.63184 28.1758 10V22C28.1758 22.3682 27.8773 22.6667 27.5091 22.6667H26.1758C25.8076 22.6667 25.5091 22.3682 25.5091 22V10C25.5091 9.63184 25.8076 9.33336 26.1758 9.33336L27.5091 9.33336Z" fill="currentColor"/> <path d="M22.1758 12C22.544 12 22.8424 12.2985 22.8424 12.6667V19.3334C22.8424 19.7016 22.544 20 22.1758 20H20.8424C20.4743 20 20.1758 19.7016 20.1758 19.3334V12.6667C20.1758 12.2985 20.4743 12 20.8424 12H22.1758Z" fill="currentColor"/>', Zv = '<path d="M17.5091 24.6594C17.5091 25.2066 16.8864 25.5207 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9991 9.36923 19.9991H4.66667C4.29848 19.9991 4 19.7006 4 19.3324V12.6658C4 12.2976 4.29848 11.9991 4.66667 11.9991H9.37115C9.39967 11.9991 9.42745 11.99 9.45039 11.973L16.4463 6.80358C16.8863 6.4784 17.5091 6.79258 17.5091 7.33975L17.5091 24.6594Z" fill="currentColor"/> <path d="M22.8424 12.6667C22.8424 12.2985 22.544 12 22.1758 12H20.8424C20.4743 12 20.1758 12.2985 20.1758 12.6667V19.3333C20.1758 19.7015 20.4743 20 20.8424 20H22.1758C22.544 20 22.8424 19.7015 22.8424 19.3333V12.6667Z" fill="currentColor"/>';
const jv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: de,
  DOMEvent: ye,
  EventsController: Pe,
  EventsTarget: gu,
  Icon$0: hv,
  Icon$104: qv,
  Icon$105: Zv,
  Icon$11: Cv,
  Icon$13: mv,
  Icon$16: gv,
  Icon$19: yv,
  Icon$22: vv,
  Icon$24: Jd,
  Icon$26: wv,
  Icon$27: xv,
  Icon$31: Sv,
  Icon$33: $v,
  Icon$34: Ev,
  Icon$35: Tv,
  Icon$39: Lv,
  Icon$40: Pv,
  Icon$5: fv,
  Icon$53: Mv,
  Icon$54: kv,
  Icon$56: Iv,
  Icon$59: Vv,
  Icon$60: Av,
  Icon$61: Nv,
  Icon$62: Rv,
  Icon$63: Hv,
  Icon$74: Ov,
  Icon$77: Dv,
  Icon$8: pv,
  Icon$81: _v,
  Icon$88: Fv,
  State: ci,
  ViewController: as,
  animationFrameThrottle: gr,
  appendTriggerEvent: Oy,
  ariaBool: x3,
  camelToKebabCase: b2,
  chromecast: bv,
  composeRefs: ke,
  computed: e1,
  createContext: ai,
  createDisposalBin: ov,
  createReactComponent: he,
  createScope: q6,
  deferredPromise: Aa,
  effect: E,
  findTriggerEvent: Hd,
  fscreen: Xi,
  functionDebounce: w2,
  functionThrottle: u1,
  getScope: Io,
  hasProvidedContext: ln,
  hasTriggerEvent: Hy,
  isArray: vt,
  isBoolean: Iy,
  isDOMNode: _d,
  isFunction: jt,
  isKeyboardClick: yu,
  isKeyboardEvent: Ao,
  isMouseEvent: Od,
  isNil: Ad,
  isNull: Rs,
  isNumber: qt,
  isObject: Nd,
  isPointerEvent: Mc,
  isString: ie,
  isTouchEvent: y3,
  isUndefined: ct,
  isWriteSignal: Vd,
  kebabToCamelCase: vu,
  keysOf: av,
  listenEvent: Ze,
  method: ot,
  noop: ts,
  onDispose: ue,
  peek: O,
  prop: Le,
  provideContext: ns,
  r: Xd,
  scoped: Mt,
  setAttribute: J,
  setStyle: kt,
  signal: ee,
  tick: Ns,
  toggleClass: _y,
  untrack: _6,
  uppercaseFirstChar: bu,
  useContext: Ye,
  useReactContext: wu,
  useReactScope: Ud,
  useSignal: Be,
  useSignalRecord: Qd,
  useState: K6,
  useStateContext: mr,
  waitIdlePeriod: Yd,
  waitTimeout: zd,
  walkTriggerEventChain: Ry,
  wasEnterKeyPressed: Dd
}, Symbol.toStringTag, { value: "Module" })), Bv = ["top", "right", "bottom", "left"], t1 = Math.min, Xt = Math.max, Na = Math.round, Go = Math.floor, on = (s) => ({
  x: s,
  y: s
}), Gv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Uv = {
  start: "end",
  end: "start"
};
function kc(s, t, e) {
  return Xt(s, t1(t, e));
}
function ei(s, t) {
  return typeof s == "function" ? s(t) : s;
}
function ti(s) {
  return s.split("-")[0];
}
function z6(s) {
  return s.split("-")[1];
}
function xu(s) {
  return s === "x" ? "y" : "x";
}
function Su(s) {
  return s === "y" ? "height" : "width";
}
function s1(s) {
  return ["top", "bottom"].includes(ti(s)) ? "y" : "x";
}
function $u(s) {
  return xu(s1(s));
}
function Wv(s, t, e) {
  e === void 0 && (e = !1);
  const n = z6(s), i = $u(s), o = Su(i);
  let a = i === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (a = Ra(a)), [a, Ra(a)];
}
function Kv(s) {
  const t = Ra(s);
  return [Ic(s), t, Ic(t)];
}
function Ic(s) {
  return s.replace(/start|end/g, (t) => Uv[t]);
}
function zv(s, t, e) {
  const n = ["left", "right"], i = ["right", "left"], o = ["top", "bottom"], a = ["bottom", "top"];
  switch (s) {
    case "top":
    case "bottom":
      return e ? t ? i : n : t ? n : i;
    case "left":
    case "right":
      return t ? o : a;
    default:
      return [];
  }
}
function Yv(s, t, e, n) {
  const i = z6(s);
  let o = zv(ti(s), e === "start", n);
  return i && (o = o.map((a) => a + "-" + i), t && (o = o.concat(o.map(Ic)))), o;
}
function Ra(s) {
  return s.replace(/left|right|bottom|top/g, (t) => Gv[t]);
}
function Qv(s) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...s
  };
}
function e5(s) {
  return typeof s != "number" ? Qv(s) : {
    top: s,
    right: s,
    bottom: s,
    left: s
  };
}
function Ha(s) {
  const {
    x: t,
    y: e,
    width: n,
    height: i
  } = s;
  return {
    width: n,
    height: i,
    top: e,
    left: t,
    right: t + n,
    bottom: e + i,
    x: t,
    y: e
  };
}
function w7(s, t, e) {
  let {
    reference: n,
    floating: i
  } = s;
  const o = s1(t), a = $u(t), l = Su(a), d = ti(t), h = o === "y", p = n.x + n.width / 2 - i.width / 2, f = n.y + n.height / 2 - i.height / 2, m = n[l] / 2 - i[l] / 2;
  let y;
  switch (d) {
    case "top":
      y = {
        x: p,
        y: n.y - i.height
      };
      break;
    case "bottom":
      y = {
        x: p,
        y: n.y + n.height
      };
      break;
    case "right":
      y = {
        x: n.x + n.width,
        y: f
      };
      break;
    case "left":
      y = {
        x: n.x - i.width,
        y: f
      };
      break;
    default:
      y = {
        x: n.x,
        y: n.y
      };
  }
  switch (z6(t)) {
    case "start":
      y[a] -= m * (e && h ? -1 : 1);
      break;
    case "end":
      y[a] += m * (e && h ? -1 : 1);
      break;
  }
  return y;
}
const Xv = async (s, t, e) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: a
  } = e, l = o.filter(Boolean), d = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let h = await a.getElementRects({
    reference: s,
    floating: t,
    strategy: i
  }), {
    x: p,
    y: f
  } = w7(h, n, d), m = n, y = {}, v = 0;
  for (let b = 0; b < l.length; b++) {
    const {
      name: x,
      fn: S
    } = l[b], {
      x: L,
      y: k,
      data: M,
      reset: H
    } = await S({
      x: p,
      y: f,
      initialPlacement: n,
      placement: m,
      strategy: i,
      middlewareData: y,
      rects: h,
      platform: a,
      elements: {
        reference: s,
        floating: t
      }
    });
    p = L ?? p, f = k ?? f, y = {
      ...y,
      [x]: {
        ...y[x],
        ...M
      }
    }, H && v <= 50 && (v++, typeof H == "object" && (H.placement && (m = H.placement), H.rects && (h = H.rects === !0 ? await a.getElementRects({
      reference: s,
      floating: t,
      strategy: i
    }) : H.rects), {
      x: p,
      y: f
    } = w7(h, m, d)), b = -1);
  }
  return {
    x: p,
    y: f,
    placement: m,
    strategy: i,
    middlewareData: y
  };
};
async function S3(s, t) {
  var e;
  t === void 0 && (t = {});
  const {
    x: n,
    y: i,
    platform: o,
    rects: a,
    elements: l,
    strategy: d
  } = s, {
    boundary: h = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: y = 0
  } = ei(t, s), v = e5(y), x = l[m ? f === "floating" ? "reference" : "floating" : f], S = Ha(await o.getClippingRect({
    element: (e = await (o.isElement == null ? void 0 : o.isElement(x))) == null || e ? x : x.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)),
    boundary: h,
    rootBoundary: p,
    strategy: d
  })), L = f === "floating" ? {
    x: n,
    y: i,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, k = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), M = await (o.isElement == null ? void 0 : o.isElement(k)) ? await (o.getScale == null ? void 0 : o.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, H = Ha(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: L,
    offsetParent: k,
    strategy: d
  }) : L);
  return {
    top: (S.top - H.top + v.top) / M.y,
    bottom: (H.bottom - S.bottom + v.bottom) / M.y,
    left: (S.left - H.left + v.left) / M.x,
    right: (H.right - S.right + v.right) / M.x
  };
}
const Jv = (s) => ({
  name: "arrow",
  options: s,
  async fn(t) {
    const {
      x: e,
      y: n,
      placement: i,
      rects: o,
      platform: a,
      elements: l,
      middlewareData: d
    } = t, {
      element: h,
      padding: p = 0
    } = ei(s, t) || {};
    if (h == null)
      return {};
    const f = e5(p), m = {
      x: e,
      y: n
    }, y = $u(i), v = Su(y), b = await a.getDimensions(h), x = y === "y", S = x ? "top" : "left", L = x ? "bottom" : "right", k = x ? "clientHeight" : "clientWidth", M = o.reference[v] + o.reference[y] - m[y] - o.floating[v], H = m[y] - o.reference[y], Z = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(h));
    let D = Z ? Z[k] : 0;
    (!D || !await (a.isElement == null ? void 0 : a.isElement(Z))) && (D = l.floating[k] || o.floating[v]);
    const P = M / 2 - H / 2, K = D / 2 - b[v] / 2 - 1, W = t1(f[S], K), re = t1(f[L], K), Ce = W, se = D - b[v] - re, ne = D / 2 - b[v] / 2 + P, Ne = kc(Ce, ne, se), j = !d.arrow && z6(i) != null && ne !== Ne && o.reference[v] / 2 - (ne < Ce ? W : re) - b[v] / 2 < 0, G = j ? ne < Ce ? ne - Ce : ne - se : 0;
    return {
      [y]: m[y] + G,
      data: {
        [y]: Ne,
        centerOffset: ne - Ne - G,
        ...j && {
          alignmentOffset: G
        }
      },
      reset: j
    };
  }
}), eb = function(s) {
  return s === void 0 && (s = {}), {
    name: "flip",
    options: s,
    async fn(t) {
      var e, n;
      const {
        placement: i,
        middlewareData: o,
        rects: a,
        initialPlacement: l,
        platform: d,
        elements: h
      } = t, {
        mainAxis: p = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: y = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: b = !0,
        ...x
      } = ei(s, t);
      if ((e = o.arrow) != null && e.alignmentOffset)
        return {};
      const S = ti(i), L = s1(l), k = ti(l) === l, M = await (d.isRTL == null ? void 0 : d.isRTL(h.floating)), H = m || (k || !b ? [Ra(l)] : Kv(l)), Z = v !== "none";
      !m && Z && H.push(...Yv(l, b, v, M));
      const D = [l, ...H], P = await S3(t, x), K = [];
      let W = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (p && K.push(P[S]), f) {
        const ne = Wv(i, a, M);
        K.push(P[ne[0]], P[ne[1]]);
      }
      if (W = [...W, {
        placement: i,
        overflows: K
      }], !K.every((ne) => ne <= 0)) {
        var re, Ce;
        const ne = (((re = o.flip) == null ? void 0 : re.index) || 0) + 1, Ne = D[ne];
        if (Ne)
          return {
            data: {
              index: ne,
              overflows: W
            },
            reset: {
              placement: Ne
            }
          };
        let j = (Ce = W.filter((G) => G.overflows[0] <= 0).sort((G, U) => G.overflows[1] - U.overflows[1])[0]) == null ? void 0 : Ce.placement;
        if (!j)
          switch (y) {
            case "bestFit": {
              var se;
              const G = (se = W.filter((U) => {
                if (Z) {
                  const F = s1(U.placement);
                  return F === L || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  F === "y";
                }
                return !0;
              }).map((U) => [U.placement, U.overflows.filter((F) => F > 0).reduce((F, Se) => F + Se, 0)]).sort((U, F) => U[1] - F[1])[0]) == null ? void 0 : se[0];
              G && (j = G);
              break;
            }
            case "initialPlacement":
              j = l;
              break;
          }
        if (i !== j)
          return {
            reset: {
              placement: j
            }
          };
      }
      return {};
    }
  };
};
function x7(s, t) {
  return {
    top: s.top - t.height,
    right: s.right - t.width,
    bottom: s.bottom - t.height,
    left: s.left - t.width
  };
}
function S7(s) {
  return Bv.some((t) => s[t] >= 0);
}
const tb = function(s) {
  return s === void 0 && (s = {}), {
    name: "hide",
    options: s,
    async fn(t) {
      const {
        rects: e
      } = t, {
        strategy: n = "referenceHidden",
        ...i
      } = ei(s, t);
      switch (n) {
        case "referenceHidden": {
          const o = await S3(t, {
            ...i,
            elementContext: "reference"
          }), a = x7(o, e.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: S7(a)
            }
          };
        }
        case "escaped": {
          const o = await S3(t, {
            ...i,
            altBoundary: !0
          }), a = x7(o, e.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: S7(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function sb(s, t) {
  const {
    placement: e,
    platform: n,
    elements: i
  } = s, o = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), a = ti(e), l = z6(e), d = s1(e) === "y", h = ["left", "top"].includes(a) ? -1 : 1, p = o && d ? -1 : 1, f = ei(t, s);
  let {
    mainAxis: m,
    crossAxis: y,
    alignmentAxis: v
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return l && typeof v == "number" && (y = l === "end" ? v * -1 : v), d ? {
    x: y * p,
    y: m * h
  } : {
    x: m * h,
    y: y * p
  };
}
const nb = function(s) {
  return s === void 0 && (s = 0), {
    name: "offset",
    options: s,
    async fn(t) {
      var e, n;
      const {
        x: i,
        y: o,
        placement: a,
        middlewareData: l
      } = t, d = await sb(t, s);
      return a === ((e = l.offset) == null ? void 0 : e.placement) && (n = l.arrow) != null && n.alignmentOffset ? {} : {
        x: i + d.x,
        y: o + d.y,
        data: {
          ...d,
          placement: a
        }
      };
    }
  };
}, ib = function(s) {
  return s === void 0 && (s = {}), {
    name: "shift",
    options: s,
    async fn(t) {
      const {
        x: e,
        y: n,
        placement: i
      } = t, {
        mainAxis: o = !0,
        crossAxis: a = !1,
        limiter: l = {
          fn: (x) => {
            let {
              x: S,
              y: L
            } = x;
            return {
              x: S,
              y: L
            };
          }
        },
        ...d
      } = ei(s, t), h = {
        x: e,
        y: n
      }, p = await S3(t, d), f = s1(ti(i)), m = xu(f);
      let y = h[m], v = h[f];
      if (o) {
        const x = m === "y" ? "top" : "left", S = m === "y" ? "bottom" : "right", L = y + p[x], k = y - p[S];
        y = kc(L, y, k);
      }
      if (a) {
        const x = f === "y" ? "top" : "left", S = f === "y" ? "bottom" : "right", L = v + p[x], k = v - p[S];
        v = kc(L, v, k);
      }
      const b = l.fn({
        ...t,
        [m]: y,
        [f]: v
      });
      return {
        ...b,
        data: {
          x: b.x - e,
          y: b.y - n,
          enabled: {
            [m]: o,
            [f]: a
          }
        }
      };
    }
  };
}, rb = function(s) {
  return s === void 0 && (s = {}), {
    options: s,
    fn(t) {
      const {
        x: e,
        y: n,
        placement: i,
        rects: o,
        middlewareData: a
      } = t, {
        offset: l = 0,
        mainAxis: d = !0,
        crossAxis: h = !0
      } = ei(s, t), p = {
        x: e,
        y: n
      }, f = s1(i), m = xu(f);
      let y = p[m], v = p[f];
      const b = ei(l, t), x = typeof b == "number" ? {
        mainAxis: b,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...b
      };
      if (d) {
        const k = m === "y" ? "height" : "width", M = o.reference[m] - o.floating[k] + x.mainAxis, H = o.reference[m] + o.reference[k] - x.mainAxis;
        y < M ? y = M : y > H && (y = H);
      }
      if (h) {
        var S, L;
        const k = m === "y" ? "width" : "height", M = ["top", "left"].includes(ti(i)), H = o.reference[f] - o.floating[k] + (M && ((S = a.offset) == null ? void 0 : S[f]) || 0) + (M ? 0 : x.crossAxis), Z = o.reference[f] + o.reference[k] + (M ? 0 : ((L = a.offset) == null ? void 0 : L[f]) || 0) - (M ? x.crossAxis : 0);
        v < H ? v = H : v > Z && (v = Z);
      }
      return {
        [m]: y,
        [f]: v
      };
    }
  };
}, ob = function(s) {
  return s === void 0 && (s = {}), {
    name: "size",
    options: s,
    async fn(t) {
      var e, n;
      const {
        placement: i,
        rects: o,
        platform: a,
        elements: l
      } = t, {
        apply: d = () => {
        },
        ...h
      } = ei(s, t), p = await S3(t, h), f = ti(i), m = z6(i), y = s1(i) === "y", {
        width: v,
        height: b
      } = o.floating;
      let x, S;
      f === "top" || f === "bottom" ? (x = f, S = m === (await (a.isRTL == null ? void 0 : a.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (S = f, x = m === "end" ? "top" : "bottom");
      const L = b - p.top - p.bottom, k = v - p.left - p.right, M = t1(b - p[x], L), H = t1(v - p[S], k), Z = !t.middlewareData.shift;
      let D = M, P = H;
      if ((e = t.middlewareData.shift) != null && e.enabled.x && (P = k), (n = t.middlewareData.shift) != null && n.enabled.y && (D = L), Z && !m) {
        const W = Xt(p.left, 0), re = Xt(p.right, 0), Ce = Xt(p.top, 0), se = Xt(p.bottom, 0);
        y ? P = v - 2 * (W !== 0 || re !== 0 ? W + re : Xt(p.left, p.right)) : D = b - 2 * (Ce !== 0 || se !== 0 ? Ce + se : Xt(p.top, p.bottom));
      }
      await d({
        ...t,
        availableWidth: P,
        availableHeight: D
      });
      const K = await a.getDimensions(l.floating);
      return v !== K.width || b !== K.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function x2() {
  return typeof window < "u";
}
function Y6(s) {
  return t5(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function ss(s) {
  var t;
  return (s == null || (t = s.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function wn(s) {
  var t;
  return (t = (t5(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : t.documentElement;
}
function t5(s) {
  return x2() ? s instanceof Node || s instanceof ss(s).Node : !1;
}
function Ds(s) {
  return x2() ? s instanceof Element || s instanceof ss(s).Element : !1;
}
function un(s) {
  return x2() ? s instanceof HTMLElement || s instanceof ss(s).HTMLElement : !1;
}
function $7(s) {
  return !x2() || typeof ShadowRoot > "u" ? !1 : s instanceof ShadowRoot || s instanceof ss(s).ShadowRoot;
}
function Ro(s) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: n,
    display: i
  } = _s(s);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + e) && !["inline", "contents"].includes(i);
}
function ab(s) {
  return ["table", "td", "th"].includes(Y6(s));
}
function S2(s) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return s.matches(t);
    } catch {
      return !1;
    }
  });
}
function Eu(s) {
  const t = Tu(), e = Ds(s) ? _s(s) : s;
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (e.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (e.contain || "").includes(n));
}
function cb(s) {
  let t = n1(s);
  for (; un(t) && !Z6(t); ) {
    if (Eu(t))
      return t;
    if (S2(t))
      return null;
    t = n1(t);
  }
  return null;
}
function Tu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Z6(s) {
  return ["html", "body", "#document"].includes(Y6(s));
}
function _s(s) {
  return ss(s).getComputedStyle(s);
}
function $2(s) {
  return Ds(s) ? {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  } : {
    scrollLeft: s.scrollX,
    scrollTop: s.scrollY
  };
}
function n1(s) {
  if (Y6(s) === "html")
    return s;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    s.assignedSlot || // DOM Element detected.
    s.parentNode || // ShadowRoot detected.
    $7(s) && s.host || // Fallback.
    wn(s)
  );
  return $7(t) ? t.host : t;
}
function s5(s) {
  const t = n1(s);
  return Z6(t) ? s.ownerDocument ? s.ownerDocument.body : s.body : un(t) && Ro(t) ? t : s5(t);
}
function $3(s, t, e) {
  var n;
  t === void 0 && (t = []), e === void 0 && (e = !0);
  const i = s5(s), o = i === ((n = s.ownerDocument) == null ? void 0 : n.body), a = ss(i);
  if (o) {
    const l = Vc(a);
    return t.concat(a, a.visualViewport || [], Ro(i) ? i : [], l && e ? $3(l) : []);
  }
  return t.concat(i, $3(i, [], e));
}
function Vc(s) {
  return s.parent && Object.getPrototypeOf(s.parent) ? s.frameElement : null;
}
function n5(s) {
  const t = _s(s);
  let e = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = un(s), o = i ? s.offsetWidth : e, a = i ? s.offsetHeight : n, l = Na(e) !== o || Na(n) !== a;
  return l && (e = o, n = a), {
    width: e,
    height: n,
    $: l
  };
}
function Lu(s) {
  return Ds(s) ? s : s.contextElement;
}
function kr(s) {
  const t = Lu(s);
  if (!un(t))
    return on(1);
  const e = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: o
  } = n5(t);
  let a = (o ? Na(e.width) : e.width) / n, l = (o ? Na(e.height) : e.height) / i;
  return (!a || !Number.isFinite(a)) && (a = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: a,
    y: l
  };
}
const lb = /* @__PURE__ */ on(0);
function i5(s) {
  const t = ss(s);
  return !Tu() || !t.visualViewport ? lb : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ub(s, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== ss(s) ? !1 : t;
}
function cr(s, t, e, n) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = s.getBoundingClientRect(), o = Lu(s);
  let a = on(1);
  t && (n ? Ds(n) && (a = kr(n)) : a = kr(s));
  const l = ub(o, e, n) ? i5(o) : on(0);
  let d = (i.left + l.x) / a.x, h = (i.top + l.y) / a.y, p = i.width / a.x, f = i.height / a.y;
  if (o) {
    const m = ss(o), y = n && Ds(n) ? ss(n) : n;
    let v = m, b = Vc(v);
    for (; b && n && y !== v; ) {
      const x = kr(b), S = b.getBoundingClientRect(), L = _s(b), k = S.left + (b.clientLeft + parseFloat(L.paddingLeft)) * x.x, M = S.top + (b.clientTop + parseFloat(L.paddingTop)) * x.y;
      d *= x.x, h *= x.y, p *= x.x, f *= x.y, d += k, h += M, v = ss(b), b = Vc(v);
    }
  }
  return Ha({
    width: p,
    height: f,
    x: d,
    y: h
  });
}
function Pu(s, t) {
  const e = $2(s).scrollLeft;
  return t ? t.left + e : cr(wn(s)).left + e;
}
function r5(s, t, e) {
  e === void 0 && (e = !1);
  const n = s.getBoundingClientRect(), i = n.left + t.scrollLeft - (e ? 0 : (
    // RTL <body> scrollbar.
    Pu(s, n)
  )), o = n.top + t.scrollTop;
  return {
    x: i,
    y: o
  };
}
function db(s) {
  let {
    elements: t,
    rect: e,
    offsetParent: n,
    strategy: i
  } = s;
  const o = i === "fixed", a = wn(n), l = t ? S2(t.floating) : !1;
  if (n === a || l && o)
    return e;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = on(1);
  const p = on(0), f = un(n);
  if ((f || !f && !o) && ((Y6(n) !== "body" || Ro(a)) && (d = $2(n)), un(n))) {
    const y = cr(n);
    h = kr(n), p.x = y.x + n.clientLeft, p.y = y.y + n.clientTop;
  }
  const m = a && !f && !o ? r5(a, d, !0) : on(0);
  return {
    width: e.width * h.x,
    height: e.height * h.y,
    x: e.x * h.x - d.scrollLeft * h.x + p.x + m.x,
    y: e.y * h.y - d.scrollTop * h.y + p.y + m.y
  };
}
function hb(s) {
  return Array.from(s.getClientRects());
}
function fb(s) {
  const t = wn(s), e = $2(s), n = s.ownerDocument.body, i = Xt(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), o = Xt(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let a = -e.scrollLeft + Pu(s);
  const l = -e.scrollTop;
  return _s(n).direction === "rtl" && (a += Xt(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: o,
    x: a,
    y: l
  };
}
function pb(s, t) {
  const e = ss(s), n = wn(s), i = e.visualViewport;
  let o = n.clientWidth, a = n.clientHeight, l = 0, d = 0;
  if (i) {
    o = i.width, a = i.height;
    const h = Tu();
    (!h || h && t === "fixed") && (l = i.offsetLeft, d = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: l,
    y: d
  };
}
function Cb(s, t) {
  const e = cr(s, !0, t === "fixed"), n = e.top + s.clientTop, i = e.left + s.clientLeft, o = un(s) ? kr(s) : on(1), a = s.clientWidth * o.x, l = s.clientHeight * o.y, d = i * o.x, h = n * o.y;
  return {
    width: a,
    height: l,
    x: d,
    y: h
  };
}
function E7(s, t, e) {
  let n;
  if (t === "viewport")
    n = pb(s, e);
  else if (t === "document")
    n = fb(wn(s));
  else if (Ds(t))
    n = Cb(t, e);
  else {
    const i = i5(s);
    n = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return Ha(n);
}
function o5(s, t) {
  const e = n1(s);
  return e === t || !Ds(e) || Z6(e) ? !1 : _s(e).position === "fixed" || o5(e, t);
}
function mb(s, t) {
  const e = t.get(s);
  if (e)
    return e;
  let n = $3(s, [], !1).filter((l) => Ds(l) && Y6(l) !== "body"), i = null;
  const o = _s(s).position === "fixed";
  let a = o ? n1(s) : s;
  for (; Ds(a) && !Z6(a); ) {
    const l = _s(a), d = Eu(a);
    !d && l.position === "fixed" && (i = null), (o ? !d && !i : !d && l.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Ro(a) && !d && o5(s, a)) ? n = n.filter((p) => p !== a) : i = l, a = n1(a);
  }
  return t.set(s, n), n;
}
function gb(s) {
  let {
    element: t,
    boundary: e,
    rootBoundary: n,
    strategy: i
  } = s;
  const a = [...e === "clippingAncestors" ? S2(t) ? [] : mb(t, this._c) : [].concat(e), n], l = a[0], d = a.reduce((h, p) => {
    const f = E7(t, p, i);
    return h.top = Xt(f.top, h.top), h.right = t1(f.right, h.right), h.bottom = t1(f.bottom, h.bottom), h.left = Xt(f.left, h.left), h;
  }, E7(t, l, i));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function yb(s) {
  const {
    width: t,
    height: e
  } = n5(s);
  return {
    width: t,
    height: e
  };
}
function vb(s, t, e) {
  const n = un(t), i = wn(t), o = e === "fixed", a = cr(s, !0, o, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = on(0);
  if (n || !n && !o)
    if ((Y6(t) !== "body" || Ro(i)) && (l = $2(t)), n) {
      const m = cr(t, !0, o, t);
      d.x = m.x + t.clientLeft, d.y = m.y + t.clientTop;
    } else i && (d.x = Pu(i));
  const h = i && !n && !o ? r5(i, l) : on(0), p = a.left + l.scrollLeft - d.x - h.x, f = a.top + l.scrollTop - d.y - h.y;
  return {
    x: p,
    y: f,
    width: a.width,
    height: a.height
  };
}
function W2(s) {
  return _s(s).position === "static";
}
function T7(s, t) {
  if (!un(s) || _s(s).position === "fixed")
    return null;
  if (t)
    return t(s);
  let e = s.offsetParent;
  return wn(s) === e && (e = e.ownerDocument.body), e;
}
function a5(s, t) {
  const e = ss(s);
  if (S2(s))
    return e;
  if (!un(s)) {
    let i = n1(s);
    for (; i && !Z6(i); ) {
      if (Ds(i) && !W2(i))
        return i;
      i = n1(i);
    }
    return e;
  }
  let n = T7(s, t);
  for (; n && ab(n) && W2(n); )
    n = T7(n, t);
  return n && Z6(n) && W2(n) && !Eu(n) ? e : n || cb(s) || e;
}
const bb = async function(s) {
  const t = this.getOffsetParent || a5, e = this.getDimensions, n = await e(s.floating);
  return {
    reference: vb(s.reference, await t(s.floating), s.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function wb(s) {
  return _s(s).direction === "rtl";
}
const xb = {
  convertOffsetParentRelativeRectToViewportRelativeRect: db,
  getDocumentElement: wn,
  getClippingRect: gb,
  getOffsetParent: a5,
  getElementRects: bb,
  getClientRects: hb,
  getDimensions: yb,
  getScale: kr,
  isElement: Ds,
  isRTL: wb
};
function Sb(s, t) {
  let e = null, n;
  const i = wn(s);
  function o() {
    var l;
    clearTimeout(n), (l = e) == null || l.disconnect(), e = null;
  }
  function a(l, d) {
    l === void 0 && (l = !1), d === void 0 && (d = 1), o();
    const {
      left: h,
      top: p,
      width: f,
      height: m
    } = s.getBoundingClientRect();
    if (l || t(), !f || !m)
      return;
    const y = Go(p), v = Go(i.clientWidth - (h + f)), b = Go(i.clientHeight - (p + m)), x = Go(h), L = {
      rootMargin: -y + "px " + -v + "px " + -b + "px " + -x + "px",
      threshold: Xt(0, t1(1, d)) || 1
    };
    let k = !0;
    function M(H) {
      const Z = H[0].intersectionRatio;
      if (Z !== d) {
        if (!k)
          return a();
        Z ? a(!1, Z) : n = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      k = !1;
    }
    try {
      e = new IntersectionObserver(M, {
        ...L,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(M, L);
    }
    e.observe(s);
  }
  return a(!0), o;
}
function c5(s, t, e, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = n, h = Lu(s), p = i || o ? [...h ? $3(h) : [], ...$3(t)] : [];
  p.forEach((S) => {
    i && S.addEventListener("scroll", e, {
      passive: !0
    }), o && S.addEventListener("resize", e);
  });
  const f = h && l ? Sb(h, e) : null;
  let m = -1, y = null;
  a && (y = new ResizeObserver((S) => {
    let [L] = S;
    L && L.target === h && y && (y.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var k;
      (k = y) == null || k.observe(t);
    })), e();
  }), h && !d && y.observe(h), y.observe(t));
  let v, b = d ? cr(s) : null;
  d && x();
  function x() {
    const S = cr(s);
    b && (S.x !== b.x || S.y !== b.y || S.width !== b.width || S.height !== b.height) && e(), b = S, v = requestAnimationFrame(x);
  }
  return e(), () => {
    var S;
    p.forEach((L) => {
      i && L.removeEventListener("scroll", e), o && L.removeEventListener("resize", e);
    }), f == null || f(), (S = y) == null || S.disconnect(), y = null, d && cancelAnimationFrame(v);
  };
}
const $b = nb, l5 = ib, u5 = eb, Eb = ob, Tb = tb, L7 = Jv, Lb = rb, d5 = (s, t, e) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: xb,
    ...e
  }, o = {
    ...i.platform,
    _c: n
  };
  return Xv(s, t, {
    ...i,
    platform: o
  });
};
function Ac(s) {
  return !ie(s) && "width" in s && "height" in s && qt(s.width) && qt(s.height);
}
const q = typeof document > "u", Pb = q ? "" : (navigator == null ? void 0 : navigator.userAgent.toLowerCase()) || "", Mu = !q && /iphone|ipad|ipod|ios|crios|fxios/i.test(Pb), h5 = !q && /(iphone|ipod)/gi.test((navigator == null ? void 0 : navigator.platform) || ""), f5 = !q && !!window.chrome, Oa = !q && (!!window.safari || Mu);
function p5() {
  return Mb() && jt(screen.orientation.unlock);
}
function Mb() {
  return !q && !ct(window.screen.orientation) && !ct(window.screen.orientation.lock);
}
function C5(s, t) {
  return q ? !1 : (s || (s = document.createElement("audio")), s.canPlayType(t).length > 0);
}
function m5(s, t) {
  return q ? !1 : (s || (s = document.createElement("video")), s.canPlayType(t).length > 0);
}
function g5(s) {
  return q ? !1 : (s || (s = document.createElement("video")), s.canPlayType("application/vnd.apple.mpegurl").length > 0);
}
function y5(s) {
  return q ? !1 : !!document.pictureInPictureEnabled && !(s != null && s.disablePictureInPicture);
}
function v5(s) {
  return q ? !1 : jt(s == null ? void 0 : s.webkitSupportsPresentationMode) && jt(s == null ? void 0 : s.webkitSetPresentationMode);
}
async function kb() {
  const s = document.createElement("video");
  return s.volume = 0.5, await zd(0), s.volume === 0.5;
}
function Ib() {
  return q ? void 0 : (window == null ? void 0 : window.ManagedMediaSource) ?? (window == null ? void 0 : window.MediaSource) ?? (window == null ? void 0 : window.WebKitMediaSource);
}
function Vb() {
  return q ? void 0 : (window == null ? void 0 : window.SourceBuffer) ?? (window == null ? void 0 : window.WebKitSourceBuffer);
}
function ku() {
  if (q) return !1;
  const s = Ib();
  if (ct(s)) return !1;
  const t = s && jt(s.isTypeSupported) && s.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'), e = Vb(), n = ct(e) || !ct(e.prototype) && jt(e.prototype.appendBuffer) && jt(e.prototype.remove);
  return !!t && !!n;
}
function b5() {
  return ku();
}
var Ln;
class oa {
  constructor(t, e) {
    C(this, Ln);
    vt(t) ? g(this, Ln, t) : !ct(t) && !ct(e) ? g(this, Ln, [[t, e]]) : g(this, Ln, []);
  }
  get length() {
    return r(this, Ln).length;
  }
  start(t) {
    return r(this, Ln)[t][0] ?? 1 / 0;
  }
  end(t) {
    return r(this, Ln)[t][1] ?? 1 / 0;
  }
}
Ln = new WeakMap();
function P7(s) {
  if (!s.length) return null;
  let t = s.start(0);
  for (let e = 1; e < s.length; e++) {
    const n = s.start(e);
    n < t && (t = n);
  }
  return t;
}
function v1(s) {
  if (!s.length) return null;
  let t = s.end(0);
  for (let e = 1; e < s.length; e++) {
    const n = s.end(e);
    n > t && (t = n);
  }
  return t;
}
function Ab(s) {
  if (s.length <= 1)
    return s;
  s.sort((n, i) => n[0] - i[0]);
  let t = [], e = s[0];
  for (let n = 1; n < s.length; n++) {
    const i = s[n];
    e[1] >= i[0] - 1 ? e = [e[0], Math.max(e[1], i[1])] : (t.push(e), e = i);
  }
  return t.push(e), t;
}
function Nb(s, t, e) {
  let n = t[0], i = t[1];
  return e < n ? [e, -1] : e === n ? t : n === -1 ? (t[0] = e, t) : (e > n && (t[1] = e, i === -1 && s.push(t)), Ab(s), t);
}
const Rb = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx|flac)($|\?)/i, Hb = /* @__PURE__ */ new Set([
  "audio/mpeg",
  "audio/ogg",
  "audio/3gp",
  "audio/mp3",
  "audio/webm",
  "audio/flac",
  "audio/m4a",
  "audio/m4b",
  "audio/mp4a",
  "audio/mp4"
]), Ob = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i, Db = /* @__PURE__ */ new Set([
  "video/mp4",
  "video/webm",
  "video/3gp",
  "video/ogg",
  "video/avi",
  "video/mpeg"
]), _b = /\.(m3u8)($|\?)/i, Fb = /\.(mpd)($|\?)/i, qb = /* @__PURE__ */ new Set([
  // Apple sanctioned
  "application/vnd.apple.mpegurl",
  // Apple sanctioned for backwards compatibility
  "audio/mpegurl",
  // Very common
  "audio/x-mpegurl",
  // Very common
  "application/x-mpegurl",
  // Included for completeness
  "video/x-mpegurl",
  "video/mpegurl",
  "application/mpegurl"
]), Zb = /* @__PURE__ */ new Set(["application/dash+xml"]);
function w5({ src: s, type: t }) {
  return ie(s) ? Rb.test(s) || Hb.has(t) || s.startsWith("blob:") && t === "audio/object" : t === "audio/object";
}
function x5(s) {
  return ie(s.src) ? Ob.test(s.src) || Db.has(s.type) || s.src.startsWith("blob:") && s.type === "video/object" || Q6(s) && (q || g5()) : s.type === "video/object";
}
function Q6({ src: s, type: t }) {
  return ie(s) && _b.test(s) || qb.has(t);
}
function Iu({ src: s, type: t }) {
  return ie(s) && Fb.test(s) || Zb.has(t);
}
function jb(s) {
  return ie(s.src) && (w5(s) || x5(s) || Q6(s));
}
function Bb(s) {
  return !q && typeof window.MediaStream < "u" && s instanceof window.MediaStream;
}
function dN(s, t) {
  const e = new URL(s);
  for (const n of Object.keys(t))
    e.searchParams.set(n, t[n] + "");
  return e.toString();
}
function X6(s, t = "preconnect") {
  if (q) return !1;
  const e = document.querySelector(`link[href="${s}"]`);
  if (!Rs(e)) return !0;
  const n = document.createElement("link");
  return n.rel = t, n.href = s, n.crossOrigin = "true", document.head.append(n), !0;
}
const l3 = {};
function Gb(s) {
  if (l3[s]) return l3[s].promise;
  const t = Aa(), e = document.querySelector(`script[src="${s}"]`);
  if (!Rs(e))
    return t.resolve(), t.promise;
  l3[s] = t;
  const n = document.createElement("script");
  return n.src = s, n.onload = () => {
    t.resolve(), delete l3[s];
  }, n.onerror = () => {
    t.reject(), delete l3[s];
  }, setTimeout(() => document.head.append(n), 0), t.promise;
}
function b3(s) {
  return s === "use-credentials" ? "include" : ie(s) ? "same-origin" : void 0;
}
const Ub = Symbol(0), Wb = Symbol(0), Kb = Symbol(0), zb = Symbol(0), Yb = Symbol(0), Qb = Symbol(0), Xb = Symbol(0), ce = {
  crossOrigin: Ub,
  readyState: Wb,
  updateActiveCues: Kb,
  canLoad: zb,
  onModeChange: Yb,
  native: Qb,
  nativeHLS: Xb
};
function M7(s, t) {
  return t >= s.startTime && t < s.endTime;
}
function Vu(s, t, e) {
  let n = null, i = Io();
  function o() {
    const a = ie(t) ? [t] : t, l = s.toArray().find((d) => a.includes(d.kind) && d.mode === "showing");
    if (l !== n) {
      if (!l) {
        e(null), n = null;
        return;
      }
      l.readyState == 2 ? e(l) : (e(null), Mt(() => {
        const d = Ze(
          l,
          "load",
          () => {
            e(l), d();
          },
          { once: !0 }
        );
      }, i)), n = l;
    }
  }
  return o(), Ze(s, "mode-change", o);
}
var hd, fd, pd, Cd, P3, Pn, x1, M3, S1, Ct, Mn, Je, S5, Nc, d3, Rc, Hc, Oc;
class lr extends gu {
  constructor(e) {
    super();
    C(this, Je);
    $(this, "src");
    $(this, "content");
    $(this, "type");
    $(this, "encoding");
    $(this, "id", "");
    $(this, "label", "");
    $(this, "language", "");
    $(this, "kind");
    $(this, "default", !1);
    C(this, P3, !1);
    C(this, Pn, 0);
    C(this, x1, "disabled");
    C(this, M3, {});
    C(this, S1, []);
    C(this, Ct, []);
    C(this, Mn, []);
    /** @internal */
    $(this, Cd, 0);
    /** @internal */
    $(this, pd);
    /** @internal */
    $(this, fd, null);
    /** @internal */
    $(this, hd, null);
    for (const n of Object.keys(e)) this[n] = e[n];
    this.type || (this.type = "vtt"), !q && e.content ? c(this, Je, S5).call(this, e) : e.src || (this[ce.readyState] = 2);
  }
  static createId(e) {
    return `vds-${e.type}-${e.kind}-${e.src ?? e.label ?? "?"}`;
  }
  get metadata() {
    return r(this, M3);
  }
  get regions() {
    return r(this, S1);
  }
  get cues() {
    return r(this, Ct);
  }
  get activeCues() {
    return r(this, Mn);
  }
  /**
   * - 0: Not Loading
   * - 1: Loading
   * - 2: Ready
   * - 3: Error
   */
  get readyState() {
    return this[ce.readyState];
  }
  get mode() {
    return r(this, x1);
  }
  set mode(e) {
    this.setMode(e);
  }
  addCue(e, n) {
    var a;
    let i = 0, o = r(this, Ct).length;
    for (i = 0; i < o && !(e.endTime <= r(this, Ct)[i].startTime); i++) ;
    i === o ? r(this, Ct).push(e) : r(this, Ct).splice(i, 0, e), e instanceof TextTrackCue || (a = this[ce.native]) == null || a.track.addCue(e), this.dispatchEvent(new ye("add-cue", { detail: e, trigger: n })), M7(e, r(this, Pn)) && this[ce.updateActiveCues](r(this, Pn), n);
  }
  removeCue(e, n) {
    var o;
    const i = r(this, Ct).indexOf(e);
    if (i >= 0) {
      const a = r(this, Mn).includes(e);
      r(this, Ct).splice(i, 1), (o = this[ce.native]) == null || o.track.removeCue(e), this.dispatchEvent(new ye("remove-cue", { detail: e, trigger: n })), a && this[ce.updateActiveCues](r(this, Pn), n);
    }
  }
  setMode(e, n) {
    var i;
    r(this, x1) !== e && (g(this, x1, e), e === "disabled" ? (g(this, Mn, []), c(this, Je, Oc).call(this)) : this.readyState === 2 ? this[ce.updateActiveCues](r(this, Pn), n) : c(this, Je, Nc).call(this), this.dispatchEvent(new ye("mode-change", { detail: this, trigger: n })), (i = this[ce.onModeChange]) == null || i.call(this));
  }
  /** @internal */
  [(Cd = ce.readyState, pd = ce.crossOrigin, fd = ce.onModeChange, hd = ce.native, ce.updateActiveCues)](e, n) {
    if (g(this, Pn, e), this.mode === "disabled" || !r(this, Ct).length) return;
    const i = [];
    for (let a = 0, l = r(this, Ct).length; a < l; a++) {
      const d = r(this, Ct)[a];
      M7(d, e) && i.push(d);
    }
    let o = i.length !== r(this, Mn).length;
    if (!o) {
      for (let a = 0; a < i.length; a++)
        if (!r(this, Mn).includes(i[a])) {
          o = !0;
          break;
        }
    }
    g(this, Mn, i), o && c(this, Je, Oc).call(this, n);
  }
  /** @internal */
  [ce.canLoad]() {
    g(this, P3, !0), r(this, x1) !== "disabled" && c(this, Je, Nc).call(this);
  }
}
P3 = new WeakMap(), Pn = new WeakMap(), x1 = new WeakMap(), M3 = new WeakMap(), S1 = new WeakMap(), Ct = new WeakMap(), Mn = new WeakMap(), Je = new WeakSet(), S5 = function(e) {
  import("./prod-DTLJXtPo.js").then((n) => n.d).then(({ parseText: n, VTTCue: i, VTTRegion: o }) => {
    !ie(e.content) || e.type === "json" ? (c(this, Je, Hc).call(this, e.content, i, o), this.readyState !== 3 && c(this, Je, d3).call(this)) : n(e.content, { type: e.type }).then(({ cues: a, regions: l }) => {
      g(this, Ct, a), g(this, S1, l), c(this, Je, d3).call(this);
    });
  });
}, Nc = async function() {
  var e, n;
  if (!(!r(this, P3) || this[ce.readyState] > 0)) {
    if (this[ce.readyState] = 1, this.dispatchEvent(new ye("load-start")), !this.src) {
      c(this, Je, d3).call(this);
      return;
    }
    try {
      const { parseResponse: i, VTTCue: o, VTTRegion: a } = await import("./prod-DTLJXtPo.js").then((h) => h.d), l = (e = this[ce.crossOrigin]) == null ? void 0 : e.call(this), d = fetch(this.src, {
        headers: this.type === "json" ? { "Content-Type": "application/json" } : void 0,
        credentials: b3(l)
      });
      if (this.type === "json")
        c(this, Je, Hc).call(this, await (await d).text(), o, a);
      else {
        const { errors: h, metadata: p, regions: f, cues: m } = await i(d, {
          type: this.type,
          encoding: this.encoding
        });
        if (((n = h[0]) == null ? void 0 : n.code) === 0)
          throw h[0];
        g(this, M3, p), g(this, S1, f), g(this, Ct, m);
      }
      c(this, Je, d3).call(this);
    } catch (i) {
      c(this, Je, Rc).call(this, i);
    }
  }
}, d3 = function() {
  if (this[ce.readyState] = 2, !this.src || this.type !== "vtt") {
    const n = this[ce.native];
    if (n && !n.managed)
      for (const i of r(this, Ct)) n.track.addCue(i);
  }
  const e = new ye("load");
  this[ce.updateActiveCues](r(this, Pn), e), this.dispatchEvent(e);
}, Rc = function(e) {
  this[ce.readyState] = 3, this.dispatchEvent(new ye("error", { detail: e }));
}, Hc = function(e, n, i) {
  try {
    const { regions: o, cues: a } = ew(e, n, i);
    g(this, S1, o), g(this, Ct, a);
  } catch (o) {
    c(this, Je, Rc).call(this, o);
  }
}, Oc = function(e) {
  this.dispatchEvent(new ye("cue-change", { trigger: e }));
};
const Jb = /captions|subtitles/;
function es(s) {
  return Jb.test(s.kind);
}
function ew(s, t, e) {
  const n = ie(s) ? JSON.parse(s) : s;
  let i = [], o = [];
  return n.regions && e && (i = n.regions.map((a) => Object.assign(new e(), a))), (n.cues || vt(n)) && (o = (vt(n) ? n : n.cues).filter((a) => qt(a.startTime) && qt(a.endTime)).map((a) => Object.assign(new t(0, 0, ""), a))), { regions: i, cues: o };
}
const J6 = new ci({
  artist: "",
  artwork: null,
  audioTrack: null,
  audioTracks: [],
  autoPlay: !1,
  autoPlayError: null,
  audioGain: null,
  buffered: new oa(),
  canLoad: !1,
  canLoadPoster: !1,
  canFullscreen: !1,
  canOrientScreen: p5(),
  canPictureInPicture: !1,
  canPlay: !1,
  clipStartTime: 0,
  clipEndTime: 0,
  controls: !1,
  get iOSControls() {
    return h5 && this.mediaType === "video" && (!this.playsInline || !Xi.fullscreenEnabled && this.fullscreen);
  },
  get nativeControls() {
    return this.controls || this.iOSControls;
  },
  controlsVisible: !1,
  get controlsHidden() {
    return !this.controlsVisible;
  },
  crossOrigin: null,
  ended: !1,
  error: null,
  fullscreen: !1,
  get loop() {
    return this.providedLoop || this.userPrefersLoop;
  },
  logLevel: "silent",
  mediaType: "unknown",
  muted: !1,
  paused: !0,
  played: new oa(),
  playing: !1,
  playsInline: !1,
  pictureInPicture: !1,
  preload: "metadata",
  playbackRate: 1,
  qualities: [],
  quality: null,
  autoQuality: !1,
  canSetQuality: !0,
  canSetPlaybackRate: !0,
  canSetVolume: !1,
  canSetAudioGain: !1,
  seekable: new oa(),
  seeking: !1,
  source: { src: "", type: "" },
  sources: [],
  started: !1,
  textTracks: [],
  textTrack: null,
  get hasCaptions() {
    return this.textTracks.filter(es).length > 0;
  },
  volume: 1,
  waiting: !1,
  realCurrentTime: 0,
  get currentTime() {
    return this.ended ? this.duration : this.clipStartTime > 0 ? Math.max(0, Math.min(this.realCurrentTime - this.clipStartTime, this.duration)) : this.realCurrentTime;
  },
  providedDuration: -1,
  intrinsicDuration: 0,
  get duration() {
    return this.seekableWindow;
  },
  get title() {
    return this.providedTitle || this.inferredTitle;
  },
  get poster() {
    return this.providedPoster || this.inferredPoster;
  },
  get viewType() {
    return this.providedViewType !== "unknown" ? this.providedViewType : this.inferredViewType;
  },
  get streamType() {
    return this.providedStreamType !== "unknown" ? this.providedStreamType : this.inferredStreamType;
  },
  get currentSrc() {
    return this.source;
  },
  get bufferedStart() {
    const s = P7(this.buffered) ?? 0;
    return Math.max(s, this.clipStartTime);
  },
  get bufferedEnd() {
    const s = v1(this.buffered) ?? 0;
    return Math.min(this.seekableEnd, Math.max(0, s - this.clipStartTime));
  },
  get bufferedWindow() {
    return Math.max(0, this.bufferedEnd - this.bufferedStart);
  },
  get seekableStart() {
    if (this.isLiveDVR && this.liveDVRWindow > 0)
      return Math.max(0, this.seekableEnd - this.liveDVRWindow);
    const s = P7(this.seekable) ?? 0;
    return Math.max(s, this.clipStartTime);
  },
  get seekableEnd() {
    if (this.providedDuration > 0) return this.providedDuration;
    const s = this.liveSyncPosition > 0 ? this.liveSyncPosition : this.canPlay ? v1(this.seekable) ?? 1 / 0 : 0;
    return this.clipEndTime > 0 ? Math.min(this.clipEndTime, s) : s;
  },
  get seekableWindow() {
    const s = this.seekableEnd - this.seekableStart;
    return isNaN(s) ? 1 / 0 : Math.max(0, s);
  },
  // ~~ remote playback ~~
  canAirPlay: !1,
  canGoogleCast: !1,
  remotePlaybackState: "disconnected",
  remotePlaybackType: "none",
  remotePlaybackLoader: null,
  remotePlaybackInfo: null,
  get isAirPlayConnected() {
    return this.remotePlaybackType === "airplay" && this.remotePlaybackState === "connected";
  },
  get isGoogleCastConnected() {
    return this.remotePlaybackType === "google-cast" && this.remotePlaybackState === "connected";
  },
  // ~~ responsive design ~~
  pointer: "fine",
  orientation: "landscape",
  width: 0,
  height: 0,
  mediaWidth: 0,
  mediaHeight: 0,
  lastKeyboardAction: null,
  // ~~ user props ~~
  userBehindLiveEdge: !1,
  // ~~ live props ~~
  liveEdgeTolerance: 10,
  minLiveDVRWindow: 60,
  get canSeek() {
    return /unknown|on-demand|:dvr/.test(this.streamType) && Number.isFinite(this.duration) && (!this.isLiveDVR || this.duration >= this.liveDVRWindow);
  },
  get live() {
    return this.streamType.includes("live") || !Number.isFinite(this.duration);
  },
  get liveEdgeStart() {
    return this.live && Number.isFinite(this.seekableEnd) ? Math.max(0, this.seekableEnd - this.liveEdgeTolerance) : 0;
  },
  get liveEdge() {
    return this.live && (!this.canSeek || !this.userBehindLiveEdge && this.currentTime >= this.liveEdgeStart);
  },
  get liveEdgeWindow() {
    return this.live && Number.isFinite(this.seekableEnd) ? this.seekableEnd - this.liveEdgeStart : 0;
  },
  get isLiveDVR() {
    return /:dvr/.test(this.streamType);
  },
  get liveDVRWindow() {
    return Math.max(this.inferredLiveDVRWindow, this.minLiveDVRWindow);
  },
  // ~~ internal props ~~
  autoPlaying: !1,
  providedTitle: "",
  inferredTitle: "",
  providedLoop: !1,
  userPrefersLoop: !1,
  providedPoster: "",
  inferredPoster: "",
  inferredViewType: "unknown",
  providedViewType: "unknown",
  providedStreamType: "unknown",
  inferredStreamType: "unknown",
  liveSyncPosition: null,
  inferredLiveDVRWindow: 0,
  savedState: null
}), $5 = /* @__PURE__ */ new Set([
  "autoPlayError",
  "autoPlaying",
  "buffered",
  "canPlay",
  "error",
  "paused",
  "played",
  "playing",
  "seekable",
  "seeking",
  "waiting"
]), tw = /* @__PURE__ */ new Set([
  ...$5,
  "ended",
  "inferredPoster",
  "inferredStreamType",
  "inferredTitle",
  "intrinsicDuration",
  "inferredLiveDVRWindow",
  "liveSyncPosition",
  "realCurrentTime",
  "savedState",
  "started",
  "userBehindLiveEdge"
]);
function k7(s, t = !1) {
  const e = t ? $5 : tw;
  J6.reset(s, (n) => e.has(n)), Ns();
}
function E5(s, t) {
  const e = s + t.clipStartTime(), n = Math.floor(s) === Math.floor(t.seekableStart()), i = Math.floor(e) === Math.floor(t.seekableEnd());
  return n ? t.seekableStart() : i ? t.seekableEnd() : t.isLiveDVR() && t.liveDVRWindow() > 0 && e < t.seekableEnd() - t.liveDVRWindow() ? t.bufferedStart() : Math.min(Math.max(t.seekableStart() + 0.1, e), t.seekableEnd() - 0.1);
}
const Au = ai();
function Ae() {
  return Ye(Au);
}
var $1, Ut, Dr, Ya, Ee, Ie, sw;
class T5 {
  constructor(t = void 0) {
    C(this, Ee);
    C(this, $1, null);
    C(this, Ut, null);
    C(this, Dr, -1);
    C(this, Ya);
    g(this, Ya, t);
  }
  /**
   * Set the target from which to dispatch media requests events from. The events should bubble
   * up from this target to the player element.
   *
   * @example
   * ```ts
   * const button = document.querySelector('button');
   * remote.setTarget(button);
   * ```
   */
  setTarget(t) {
    g(this, $1, t);
  }
  /**
   * Returns the current player element. This method will attempt to find the player by
   * searching up from either the given `target` or default target set via `remote.setTarget`.
   *
   * @example
   * ```ts
   * const player = remote.getPlayer();
   * ```
   */
  getPlayer(t) {
    var e;
    return r(this, Ut) ? r(this, Ut) : ((e = t ?? r(this, $1)) == null || e.dispatchEvent(
      new ye("find-media-player", {
        detail: (n) => void g(this, Ut, n),
        bubbles: !0,
        composed: !0
      })
    ), r(this, Ut));
  }
  /**
   * Set the current player element so the remote can support toggle methods such as
   * `togglePaused` as they rely on the current media state.
   */
  setPlayer(t) {
    g(this, Ut, t);
  }
  /**
   * Dispatch a request to start the media loading process. This will only work if the media
   * player has been initialized with a custom loading strategy `load="custom">`.
   *
   * @docs {@link https://www.vidstack.io/docs/player/core-concepts/loading#load-strategies}
   */
  startLoading(t) {
    c(this, Ee, Ie).call(this, "media-start-loading", t);
  }
  /**
   * Dispatch a request to start the poster loading process. This will only work if the media
   * player has been initialized with a custom poster loading strategy `posterLoad="custom">`.
   *
   * @docs {@link https://www.vidstack.io/docs/player/core-concepts/loading#load-strategies}
   */
  startLoadingPoster(t) {
    c(this, Ee, Ie).call(this, "media-poster-start-loading", t);
  }
  /**
   * Dispatch a request to connect to AirPlay.
   *
   * @see {@link https://www.apple.com/au/airplay}
   */
  requestAirPlay(t) {
    c(this, Ee, Ie).call(this, "media-airplay-request", t);
  }
  /**
   * Dispatch a request to connect to Google Cast.
   *
   * @see {@link https://developers.google.com/cast/docs/overview}
   */
  requestGoogleCast(t) {
    c(this, Ee, Ie).call(this, "media-google-cast-request", t);
  }
  /**
   * Dispatch a request to begin/resume media playback.
   */
  play(t) {
    c(this, Ee, Ie).call(this, "media-play-request", t);
  }
  /**
   * Dispatch a request to pause media playback.
   */
  pause(t) {
    c(this, Ee, Ie).call(this, "media-pause-request", t);
  }
  /**
   * Dispatch a request to set the media volume to mute (0).
   */
  mute(t) {
    c(this, Ee, Ie).call(this, "media-mute-request", t);
  }
  /**
   * Dispatch a request to unmute the media volume and set it back to it's previous state.
   */
  unmute(t) {
    c(this, Ee, Ie).call(this, "media-unmute-request", t);
  }
  /**
   * Dispatch a request to enter fullscreen.
   *
   * @docs {@link https://www.vidstack.io/docs/player/api/fullscreen#remote-control}
   */
  enterFullscreen(t, e) {
    c(this, Ee, Ie).call(this, "media-enter-fullscreen-request", e, t);
  }
  /**
   * Dispatch a request to exit fullscreen.
   *
   * @docs {@link https://www.vidstack.io/docs/player/api/fullscreen#remote-control}
   */
  exitFullscreen(t, e) {
    c(this, Ee, Ie).call(this, "media-exit-fullscreen-request", e, t);
  }
  /**
   * Dispatch a request to lock the screen orientation.
   *
   * @docs {@link https://www.vidstack.io/docs/player/screen-orientation#remote-control}
   */
  lockScreenOrientation(t, e) {
    c(this, Ee, Ie).call(this, "media-orientation-lock-request", e, t);
  }
  /**
   * Dispatch a request to unlock the screen orientation.
   *
   * @docs {@link https://www.vidstack.io/docs/player/api/screen-orientation#remote-control}
   */
  unlockScreenOrientation(t) {
    c(this, Ee, Ie).call(this, "media-orientation-unlock-request", t);
  }
  /**
   * Dispatch a request to enter picture-in-picture mode.
   *
   * @docs {@link https://www.vidstack.io/docs/player/api/picture-in-picture#remote-control}
   */
  enterPictureInPicture(t) {
    c(this, Ee, Ie).call(this, "media-enter-pip-request", t);
  }
  /**
   * Dispatch a request to exit picture-in-picture mode.
   *
   * @docs {@link https://www.vidstack.io/docs/player/api/picture-in-picture#remote-control}
   */
  exitPictureInPicture(t) {
    c(this, Ee, Ie).call(this, "media-exit-pip-request", t);
  }
  /**
   * Notify the media player that a seeking process is happening and to seek to the given `time`.
   */
  seeking(t, e) {
    c(this, Ee, Ie).call(this, "media-seeking-request", e, t);
  }
  /**
   * Notify the media player that a seeking operation has completed and to seek to the given `time`.
   * This is generally called after a series of `remote.seeking()` calls.
   */
  seek(t, e) {
    c(this, Ee, Ie).call(this, "media-seek-request", e, t);
  }
  seekToLiveEdge(t) {
    c(this, Ee, Ie).call(this, "media-live-edge-request", t);
  }
  /**
   * Dispatch a request to update the length of the media in seconds.
   *
   * @example
   * ```ts
   * remote.changeDuration(100); // 100 seconds
   * ```
   */
  changeDuration(t, e) {
    c(this, Ee, Ie).call(this, "media-duration-change-request", e, t);
  }
  /**
   * Dispatch a request to update the clip start time. This is the time at which media playback
   * should start at.
   *
   * @example
   * ```ts
   * remote.changeClipStart(100); // start at 100 seconds
   * ```
   */
  changeClipStart(t, e) {
    c(this, Ee, Ie).call(this, "media-clip-start-change-request", e, t);
  }
  /**
   * Dispatch a request to update the clip end time. This is the time at which media playback
   * should end at.
   *
   * @example
   * ```ts
   * remote.changeClipEnd(100); // end at 100 seconds
   * ```
   */
  changeClipEnd(t, e) {
    c(this, Ee, Ie).call(this, "media-clip-end-change-request", e, t);
  }
  /**
   * Dispatch a request to update the media volume to the given `volume` level which is a value
   * between 0 and 1.
   *
   * @docs {@link https://www.vidstack.io/docs/player/api/audio-gain#remote-control}
   * @example
   * ```ts
   * remote.changeVolume(0); // 0%
   * remote.changeVolume(0.05); // 5%
   * remote.changeVolume(0.5); // 50%
   * remote.changeVolume(0.75); // 70%
   * remote.changeVolume(1); // 100%
   * ```
   */
  changeVolume(t, e) {
    c(this, Ee, Ie).call(this, "media-volume-change-request", e, Math.max(0, Math.min(1, t)));
  }
  /**
   * Dispatch a request to change the current audio track.
   *
   * @example
   * ```ts
   * remote.changeAudioTrack(1); // track at index 1
   * ```
   */
  changeAudioTrack(t, e) {
    c(this, Ee, Ie).call(this, "media-audio-track-change-request", e, t);
  }
  /**
   * Dispatch a request to change the video quality. The special value `-1` represents auto quality
   * selection.
   *
   * @example
   * ```ts
   * remote.changeQuality(-1); // auto
   * remote.changeQuality(1); // quality at index 1
   * ```
   */
  changeQuality(t, e) {
    c(this, Ee, Ie).call(this, "media-quality-change-request", e, t);
  }
  /**
   * Request auto quality selection.
   */
  requestAutoQuality(t) {
    this.changeQuality(-1, t);
  }
  /**
   * Dispatch a request to change the mode of the text track at the given index.
   *
   * @example
   * ```ts
   * remote.changeTextTrackMode(1, 'showing'); // track at index 1
   * ```
   */
  changeTextTrackMode(t, e, n) {
    c(this, Ee, Ie).call(this, "media-text-track-change-request", n, {
      index: t,
      mode: e
    });
  }
  /**
   * Dispatch a request to change the media playback rate.
   *
   * @example
   * ```ts
   * remote.changePlaybackRate(0.5); // Half the normal speed
   * remote.changePlaybackRate(1); // Normal speed
   * remote.changePlaybackRate(1.5); // 50% faster than normal
   * remote.changePlaybackRate(2); // Double the normal speed
   * ```
   */
  changePlaybackRate(t, e) {
    c(this, Ee, Ie).call(this, "media-rate-change-request", e, t);
  }
  /**
   * Dispatch a request to change the media audio gain.
   *
   * @example
   * ```ts
   * remote.changeAudioGain(1); // Disable audio gain
   * remote.changeAudioGain(1.5); // 50% louder
   * remote.changeAudioGain(2); // 100% louder
   * ```
   */
  changeAudioGain(t, e) {
    c(this, Ee, Ie).call(this, "media-audio-gain-change-request", e, t);
  }
  /**
   * Dispatch a request to resume idle tracking on controls.
   */
  resumeControls(t) {
    c(this, Ee, Ie).call(this, "media-resume-controls-request", t);
  }
  /**
   * Dispatch a request to pause controls idle tracking. Pausing tracking will result in the
   * controls being visible until `remote.resumeControls()` is called. This method
   * is generally used when building custom controls and you'd like to prevent the UI from
   * disappearing.
   *
   * @example
   * ```ts
   * // Prevent controls hiding while menu is being interacted with.
   * function onSettingsOpen() {
   *   remote.pauseControls();
   * }
   *
   * function onSettingsClose() {
   *   remote.resumeControls();
   * }
   * ```
   */
  pauseControls(t) {
    c(this, Ee, Ie).call(this, "media-pause-controls-request", t);
  }
  /**
   * Dispatch a request to toggle the media playback state.
   */
  togglePaused(t) {
    const e = this.getPlayer(t == null ? void 0 : t.target);
    e && (e.state.paused ? this.play(t) : this.pause(t));
  }
  /**
   * Dispatch a request to toggle the controls visibility.
   */
  toggleControls(t) {
    const e = this.getPlayer(t == null ? void 0 : t.target);
    e && (e.controls.showing ? e.controls.hide(0, t) : e.controls.show(0, t));
  }
  /**
   * Dispatch a request to toggle the media muted state.
   */
  toggleMuted(t) {
    const e = this.getPlayer(t == null ? void 0 : t.target);
    e && (e.state.muted ? this.unmute(t) : this.mute(t));
  }
  /**
   * Dispatch a request to toggle the media fullscreen state.
   *
   * @docs {@link https://www.vidstack.io/docs/player/api/fullscreen#remote-control}
   */
  toggleFullscreen(t, e) {
    const n = this.getPlayer(e == null ? void 0 : e.target);
    n && (n.state.fullscreen ? this.exitFullscreen(t, e) : this.enterFullscreen(t, e));
  }
  /**
   * Dispatch a request to toggle the media picture-in-picture mode.
   *
   * @docs {@link https://www.vidstack.io/docs/player/api/picture-in-picture#remote-control}
   */
  togglePictureInPicture(t) {
    const e = this.getPlayer(t == null ? void 0 : t.target);
    e && (e.state.pictureInPicture ? this.exitPictureInPicture(t) : this.enterPictureInPicture(t));
  }
  /**
   * Show captions.
   */
  showCaptions(t) {
    const e = this.getPlayer(t == null ? void 0 : t.target);
    if (!e)
      return;
    let n = e.state.textTracks, i = r(this, Dr);
    (!n[i] || !es(n[i])) && (i = -1), i === -1 && (i = n.findIndex((o) => es(o) && o.default)), i === -1 && (i = n.findIndex((o) => es(o))), i >= 0 && this.changeTextTrackMode(i, "showing", t), g(this, Dr, -1);
  }
  /**
   * Turn captions off.
   */
  disableCaptions(t) {
    const e = this.getPlayer(t == null ? void 0 : t.target);
    if (!e)
      return;
    const n = e.state.textTracks, i = e.state.textTrack;
    if (i) {
      const o = n.indexOf(i);
      this.changeTextTrackMode(o, "disabled", t), g(this, Dr, o);
    }
  }
  /**
   * Dispatch a request to toggle the current captions mode.
   */
  toggleCaptions(t) {
    const e = this.getPlayer(t == null ? void 0 : t.target);
    e && (e.state.textTrack ? this.disableCaptions() : this.showCaptions());
  }
  userPrefersLoopChange(t, e) {
    c(this, Ee, Ie).call(this, "media-user-loop-change-request", e, t);
  }
}
$1 = new WeakMap(), Ut = new WeakMap(), Dr = new WeakMap(), Ya = new WeakMap(), Ee = new WeakSet(), Ie = function(t, e, n) {
  var l, d;
  const i = new ye(t, {
    bubbles: !0,
    composed: !0,
    cancelable: !0,
    detail: n,
    trigger: e
  });
  let o = (e == null ? void 0 : e.target) || null;
  o && o instanceof de && (o = o.el), o = !o || o === document || o === window || o === document.body || ((l = r(this, Ut)) == null ? void 0 : l.el) && o instanceof Node && !r(this, Ut).el.contains(o) ? r(this, $1) ?? ((d = this.getPlayer()) == null ? void 0 : d.el) : o ?? r(this, $1), r(this, Ut) ? t === "media-play-request" && !r(this, Ut).state.canLoad ? o == null || o.dispatchEvent(i) : r(this, Ut).canPlayQueue.enqueue(t, () => o == null ? void 0 : o.dispatchEvent(i)) : o == null || o.dispatchEvent(i);
}, sw = function(t) {
};
var ze;
class nw {
  constructor() {
    $(this, "playerId", "vds-player");
    $(this, "mediaId", null);
    C(this, ze, {
      volume: null,
      muted: null,
      audioGain: null,
      time: null,
      lang: null,
      captions: null,
      rate: null,
      quality: null
    });
    $(this, "saveTimeThrottled", u1(this.saveTime.bind(this), 1e3));
  }
  async getVolume() {
    return r(this, ze).volume;
  }
  async setVolume(t) {
    r(this, ze).volume = t, this.save();
  }
  async getMuted() {
    return r(this, ze).muted;
  }
  async setMuted(t) {
    r(this, ze).muted = t, this.save();
  }
  async getTime() {
    return r(this, ze).time;
  }
  async setTime(t, e) {
    const n = t < 0;
    r(this, ze).time = n ? null : t, n || e ? this.saveTime() : this.saveTimeThrottled();
  }
  async getLang() {
    return r(this, ze).lang;
  }
  async setLang(t) {
    r(this, ze).lang = t, this.save();
  }
  async getCaptions() {
    return r(this, ze).captions;
  }
  async setCaptions(t) {
    r(this, ze).captions = t, this.save();
  }
  async getPlaybackRate() {
    return r(this, ze).rate;
  }
  async setPlaybackRate(t) {
    r(this, ze).rate = t, this.save();
  }
  async getAudioGain() {
    return r(this, ze).audioGain;
  }
  async setAudioGain(t) {
    r(this, ze).audioGain = t, this.save();
  }
  async getVideoQuality() {
    return r(this, ze).quality;
  }
  async setVideoQuality(t) {
    r(this, ze).quality = t, this.save();
  }
  onChange(t, e, n = "vds-player") {
    const i = n ? localStorage.getItem(n) : null, o = e ? localStorage.getItem(e) : null;
    this.playerId = n, this.mediaId = e, g(this, ze, {
      volume: null,
      muted: null,
      audioGain: null,
      lang: null,
      captions: null,
      rate: null,
      quality: null,
      ...i ? JSON.parse(i) : {},
      time: o ? +o : null
    });
  }
  save() {
    if (q || !this.playerId) return;
    const t = JSON.stringify({ ...r(this, ze), time: void 0 });
    localStorage.setItem(this.playerId, t);
  }
  saveTime() {
    if (q || !this.mediaId) return;
    const t = (r(this, ze).time ?? 0).toString();
    localStorage.setItem(this.mediaId, t);
  }
}
ze = new WeakMap();
const iw = Symbol(0), rw = Symbol(0), ow = Symbol(0), aw = Symbol(0), cw = Symbol(0), lw = Symbol(0), uw = Symbol(0), dw = Symbol(0), hw = Symbol(0), fe = {
  add: iw,
  remove: rw,
  reset: ow,
  select: aw,
  readonly: cw,
  setReadonly: lw,
  onReset: uw,
  onRemove: dw,
  onUserSelect: hw
};
var md;
class L5 extends gu {
  constructor() {
    super(...arguments);
    $(this, "items", []);
    /** @internal */
    $(this, md, !1);
  }
  get length() {
    return this.items.length;
  }
  get readonly() {
    return this[fe.readonly];
  }
  /**
   * Returns the index of the first occurrence of the given item, or -1 if it is not present.
   */
  indexOf(e) {
    return this.items.indexOf(e);
  }
  /**
   * Returns an item matching the given `id`, or `null` if not present.
   */
  getById(e) {
    return e === "" ? null : this.items.find((n) => n.id === e) ?? null;
  }
  /**
   * Transform list to an array.
   */
  toArray() {
    return [...this.items];
  }
  [(md = fe.readonly, Symbol.iterator)]() {
    return this.items.values();
  }
  /** @internal */
  [fe.add](e, n) {
    const i = this.items.length;
    "" + i in this || Object.defineProperty(this, i, {
      get() {
        return this.items[i];
      }
    }), !this.items.includes(e) && (this.items.push(e), this.dispatchEvent(new ye("add", { detail: e, trigger: n })));
  }
  /** @internal */
  [fe.remove](e, n) {
    var o;
    const i = this.items.indexOf(e);
    i >= 0 && ((o = this[fe.onRemove]) == null || o.call(this, e, n), this.items.splice(i, 1), this.dispatchEvent(new ye("remove", { detail: e, trigger: n })));
  }
  /** @internal */
  [fe.reset](e) {
    var n;
    for (const i of [...this.items]) this[fe.remove](i, e);
    this.items = [], this[fe.setReadonly](!1, e), (n = this[fe.onReset]) == null || n.call(this);
  }
  /** @internal */
  [fe.setReadonly](e, n) {
    this[fe.readonly] !== e && (this[fe.readonly] = e, this.dispatchEvent(new ye("readonly-change", { detail: e, trigger: n })));
  }
}
const u3 = Symbol(0);
class P5 extends L5 {
  get selected() {
    return this.items.find((t) => t.selected) ?? null;
  }
  get selectedIndex() {
    return this.items.findIndex((t) => t.selected);
  }
  /** @internal */
  [fe.onRemove](t, e) {
    this[fe.select](t, !1, e);
  }
  /** @internal */
  [fe.add](t, e) {
    t[u3] = !1, Object.defineProperty(t, "selected", {
      get() {
        return this[u3];
      },
      set: (n) => {
        var i;
        this.readonly || ((i = this[fe.onUserSelect]) == null || i.call(this), this[fe.select](t, n));
      }
    }), super[fe.add](t, e);
  }
  /** @internal */
  [fe.select](t, e, n) {
    if (e === (t == null ? void 0 : t[u3])) return;
    const i = this.selected;
    t && (t[u3] = e), (e ? i !== t : i === t) && (i && (i[u3] = !1), this.dispatchEvent(
      new ye("change", {
        detail: {
          prev: i,
          current: this.selected
        },
        trigger: n
      })
    ));
  }
}
class fw extends P5 {
}
function bt(s, t = 2) {
  return Number(s.toFixed(t));
}
function Dc(s) {
  var t;
  return ((t = String(s).split(".")[1]) == null ? void 0 : t.length) ?? 0;
}
function Nu(s, t, e) {
  return Math.max(s, Math.min(e, t));
}
function I7(s, t) {
  const e = t.composedPath()[0];
  return _d(e) && s.contains(e);
}
const _c = /* @__PURE__ */ new Set();
if (!q) {
  let s = function() {
    for (const t of _c)
      try {
        t();
      } catch {
      }
    window.requestAnimationFrame(s);
  };
  s();
}
function pw(s) {
  return _c.add(s), () => _c.delete(s);
}
function Me(s, t, e) {
  s.hasAttribute(t) || s.setAttribute(t, e);
}
function d1(s, t) {
  if (s.hasAttribute("aria-label") || s.hasAttribute("data-no-label")) return;
  if (!jt(t)) {
    J(s, "aria-label", t);
    return;
  }
  function e() {
    J(s, "aria-label", t());
  }
  q ? e() : E(e);
}
function M5(s) {
  const t = getComputedStyle(s);
  return t.display !== "none" && parseInt(t.opacity) > 0;
}
function Cw(s) {
  return !!s && ("checkVisibility" in s ? s.checkVisibility({ checkOpacity: !0, checkVisibilityCSS: !0 }) : M5(s));
}
function k5(s, t) {
  return pw(() => t(Cw(s)));
}
function I5(s, t, e) {
  for (; t; ) {
    if (t === s)
      return !0;
    if (e != null && e(t))
      break;
    t = t.parentElement;
  }
  return !1;
}
function i1(s, t) {
  return new Pe(s).add("pointerup", (e) => {
    e.button === 0 && !e.defaultPrevented && t(e);
  }).add("keydown", (e) => {
    yu(e) && t(e);
  });
}
function Ru(s) {
  return y3(s) && (s.touches.length > 1 || s.changedTouches.length > 1);
}
function V5(s) {
  if (q) return s();
  let t = Io(), e = window.requestAnimationFrame(() => {
    Mt(s, t), e = -1;
  });
  return () => void window.cancelAnimationFrame(e);
}
function A5(s, t, e, {
  offsetVarName: n,
  xOffset: i,
  yOffset: o,
  ...a
}) {
  if (!s) return;
  const l = e.replace(" ", "-").replace("-center", "");
  if (kt(s, "visibility", t ? null : "hidden"), !t) return;
  let d = e.includes("top");
  const h = (f) => e.includes("left") ? `calc(-1 * ${f})` : f, p = (f) => d ? `calc(-1 * ${f})` : f;
  return c5(t, s, () => {
    d5(t, s, {
      placement: l,
      middleware: [
        ...a.middleware ?? [],
        u5({ fallbackAxisSideDirection: "start", crossAxis: !1 }),
        l5()
      ],
      ...a
    }).then(({ x: f, y: m, middlewareData: y }) => {
      var b;
      const v = !!((b = y.flip) != null && b.index);
      d = e.includes(v ? "bottom" : "top"), s.setAttribute(
        "data-placement",
        v ? e.startsWith("top") ? e.replace("top", "bottom") : e.replace("bottom", "top") : e
      ), Object.assign(s.style, {
        top: `calc(${m + "px"} + ${p(
          o ? o + "px" : `var(--${n}-y-offset, 0px)`
        )})`,
        left: `calc(${f + "px"} + ${h(
          i ? i + "px" : `var(--${n}-x-offset, 0px)`
        )})`
      });
    });
  });
}
function mw(s) {
  return getComputedStyle(s).animationName !== "none";
}
function Da(s) {
  return s instanceof HTMLElement;
}
var k3, kn, I3, pi, ms, N5, R5, Fc, qc;
class gw {
  constructor() {
    C(this, ms);
    $(this, "priority", 0);
    C(this, k3, !0);
    C(this, kn, null);
    C(this, I3, null);
    C(this, pi, /* @__PURE__ */ new Set());
  }
  canRender(t, e) {
    return !!e;
  }
  attach(t) {
    g(this, kn, t), t && (t.textTracks.onchange = c(this, ms, qc).bind(this));
  }
  addTrack(t) {
    r(this, pi).add(t), c(this, ms, N5).call(this, t);
  }
  removeTrack(t) {
    var e, n;
    (n = (e = t[ce.native]) == null ? void 0 : e.remove) == null || n.call(e), t[ce.native] = null, r(this, pi).delete(t);
  }
  changeTrack(t) {
    const e = t == null ? void 0 : t[ce.native];
    e && e.track.mode !== "showing" && (e.track.mode = "showing"), g(this, I3, t);
  }
  setDisplay(t) {
    g(this, k3, t), c(this, ms, qc).call(this);
  }
  detach() {
    r(this, kn) && (r(this, kn).textTracks.onchange = null);
    for (const t of r(this, pi)) this.removeTrack(t);
    r(this, pi).clear(), g(this, kn, null), g(this, I3, null);
  }
}
k3 = new WeakMap(), kn = new WeakMap(), I3 = new WeakMap(), pi = new WeakMap(), ms = new WeakSet(), N5 = function(t) {
  var n;
  if (!r(this, kn)) return;
  const e = t[n = ce.native] ?? (t[n] = c(this, ms, R5).call(this, t));
  Da(e) && (r(this, kn).append(e), e.track.mode = e.default ? "showing" : "disabled");
}, R5 = function(t) {
  const e = document.createElement("track"), n = t.default || t.mode === "showing", i = t.src && t.type === "vtt";
  return e.id = t.id, e.src = i ? t.src : "", e.label = t.label, e.kind = t.kind, e.default = n, t.language && (e.srclang = t.language), n && !i && c(this, ms, Fc).call(this, t, e.track), e;
}, Fc = function(t, e) {
  var n;
  if (!(t.src && t.type === "vtt" || (n = e.cues) != null && n.length))
    for (const i of t.cues) e.addCue(i);
}, qc = function(t) {
  for (const e of r(this, pi)) {
    const n = e[ce.native];
    if (!n) continue;
    if (!r(this, k3)) {
      n.track.mode = n.managed ? "hidden" : "disabled";
      continue;
    }
    const i = n.track.mode === "showing";
    i && c(this, ms, Fc).call(this, e, n.track), e.setMode(i ? "showing" : "disabled", t);
  }
};
var E1, _r, T1, V3, A3, Wt, Gs, Xe, H5, Zc, O5, D5, _5, Lr, F5;
class yw {
  constructor(t) {
    C(this, Xe);
    C(this, E1, null);
    C(this, _r);
    C(this, T1, []);
    C(this, V3);
    C(this, A3, !1);
    C(this, Wt, null);
    C(this, Gs, null);
    g(this, V3, t);
    const e = t.textTracks;
    g(this, _r, e), E(c(this, Xe, H5).bind(this)), ue(c(this, Xe, F5).bind(this)), new Pe(e).add("add", c(this, Xe, D5).bind(this)).add("remove", c(this, Xe, _5).bind(this)).add("mode-change", c(this, Xe, Lr).bind(this));
  }
  add(t) {
    r(this, T1).push(t), _6(c(this, Xe, Lr).bind(this));
  }
  remove(t) {
    t.detach(), r(this, T1).splice(r(this, T1).indexOf(t), 1), _6(c(this, Xe, Lr).bind(this));
  }
  /** @internal */
  attachVideo(t) {
    requestAnimationFrame(() => {
      if (g(this, E1, t), t) {
        g(this, Wt, new gw()), r(this, Wt).attach(t);
        for (const e of r(this, _r)) c(this, Xe, Zc).call(this, e);
      }
      c(this, Xe, Lr).call(this);
    });
  }
}
E1 = new WeakMap(), _r = new WeakMap(), T1 = new WeakMap(), V3 = new WeakMap(), A3 = new WeakMap(), Wt = new WeakMap(), Gs = new WeakMap(), Xe = new WeakSet(), H5 = function() {
  const { nativeControls: t } = r(this, V3).$state;
  g(this, A3, t()), c(this, Xe, Lr).call(this);
}, Zc = function(t) {
  var e;
  es(t) && ((e = r(this, Wt)) == null || e.addTrack(t));
}, O5 = function(t) {
  var e;
  es(t) && ((e = r(this, Wt)) == null || e.removeTrack(t));
}, D5 = function(t) {
  c(this, Xe, Zc).call(this, t.detail);
}, _5 = function(t) {
  c(this, Xe, O5).call(this, t.detail);
}, Lr = function() {
  var n, i, o, a, l, d, h;
  const t = r(this, _r).selected;
  if (r(this, E1) && (r(this, A3) || t != null && t[ce.nativeHLS])) {
    (n = r(this, Gs)) == null || n.changeTrack(null), (i = r(this, Wt)) == null || i.setDisplay(!0), (o = r(this, Wt)) == null || o.changeTrack(t);
    return;
  }
  if ((a = r(this, Wt)) == null || a.setDisplay(!1), (l = r(this, Wt)) == null || l.changeTrack(null), !t) {
    (d = r(this, Gs)) == null || d.changeTrack(null);
    return;
  }
  const e = r(this, T1).sort((p, f) => p.priority - f.priority).find((p) => p.canRender(t, r(this, E1)));
  r(this, Gs) !== e && ((h = r(this, Gs)) == null || h.detach(), e == null || e.attach(r(this, E1)), g(this, Gs, e ?? null)), e == null || e.changeTrack(t);
}, F5 = function() {
  var t, e;
  (t = r(this, Wt)) == null || t.detach(), g(this, Wt, null), (e = r(this, Gs)) == null || e.detach(), g(this, Gs, null);
};
var gd, L1, Us, Ws, Ks, N3, Fr, R3, hn, q5, jc, Bc;
class vw extends L5 {
  constructor() {
    super();
    C(this, hn);
    C(this, L1, !1);
    C(this, Us, {});
    C(this, Ws, null);
    C(this, Ks, null);
    /** @internal */
    $(this, gd);
    C(this, N3, w2(async () => {
      var i;
      if (!r(this, L1)) return;
      !r(this, Ks) && r(this, Ws) && g(this, Ks, await r(this, Ws).getLang());
      const e = await ((i = r(this, Ws)) == null ? void 0 : i.getCaptions()), n = [
        ["captions", "subtitles"],
        "chapters",
        "descriptions",
        "metadata"
      ];
      for (const o of n) {
        const a = this.getByKind(o);
        if (a.find((f) => f.mode === "showing")) continue;
        const l = r(this, Ks) ? a.find((f) => f.language === r(this, Ks)) : null, d = vt(o) ? r(this, Us)[o.find((f) => r(this, Us)[f]) || ""] : r(this, Us)[o], h = l ?? d, p = h && es(h);
        h && (!p || e !== !1) && (h.mode = "showing", p && c(this, hn, jc).call(this, h));
      }
    }, 300));
    C(this, Fr, null);
    C(this, R3, c(this, hn, q5).bind(this));
  }
  get selected() {
    return this.items.find((n) => n.mode === "showing" && es(n)) ?? null;
  }
  get selectedIndex() {
    const e = this.selected;
    return e ? this.indexOf(e) : -1;
  }
  get preferredLang() {
    return r(this, Ks);
  }
  set preferredLang(e) {
    g(this, Ks, e), c(this, hn, Bc).call(this, e);
  }
  add(e, n) {
    const i = e instanceof lr, o = i ? e : new lr(e), a = e.kind === "captions" || e.kind === "subtitles" ? "captions" : e.kind;
    return r(this, Us)[a] && e.default && delete e.default, o.addEventListener("mode-change", r(this, R3)), this[fe.add](o, n), o[ce.crossOrigin] = this[ce.crossOrigin], r(this, L1) && o[ce.canLoad](), e.default && (r(this, Us)[a] = o), r(this, N3).call(this), this;
  }
  remove(e, n) {
    if (g(this, Fr, e), !!this.items.includes(e))
      return e === r(this, Us)[e.kind] && delete r(this, Us)[e.kind], e.mode = "disabled", e[ce.onModeChange] = null, e.removeEventListener("mode-change", r(this, R3)), this[fe.remove](e, n), g(this, Fr, null), this;
  }
  clear(e) {
    for (const n of [...this.items])
      this.remove(n, e);
    return this;
  }
  getByKind(e) {
    const n = Array.isArray(e) ? e : [e];
    return this.items.filter((i) => n.includes(i.kind));
  }
  /** @internal */
  [(gd = ce.crossOrigin, ce.canLoad)]() {
    if (!r(this, L1)) {
      for (const e of this.items) e[ce.canLoad]();
      g(this, L1, !0), r(this, N3).call(this);
    }
  }
  setStorage(e) {
    g(this, Ws, e);
  }
}
L1 = new WeakMap(), Us = new WeakMap(), Ws = new WeakMap(), Ks = new WeakMap(), N3 = new WeakMap(), Fr = new WeakMap(), R3 = new WeakMap(), hn = new WeakSet(), q5 = function(e) {
  const n = e.detail;
  if (r(this, Ws) && es(n) && n !== r(this, Fr) && c(this, hn, jc).call(this, n), n.mode === "showing") {
    const i = es(n) ? ["captions", "subtitles"] : [n.kind];
    for (const o of this.items)
      o.mode === "showing" && o != n && i.includes(o.kind) && (o.mode = "disabled");
  }
  this.dispatchEvent(
    new ye("mode-change", {
      detail: e.detail,
      trigger: e
    })
  );
}, jc = function(e) {
  var n, i;
  e.mode !== "disabled" && c(this, hn, Bc).call(this, e.language), (i = (n = r(this, Ws)) == null ? void 0 : n.setCaptions) == null || i.call(n, e.mode === "showing");
}, Bc = function(e) {
  var n, i;
  (i = (n = r(this, Ws)) == null ? void 0 : n.setLang) == null || i.call(n, g(this, Ks, e));
};
const bw = Symbol(0), ww = Symbol(0), Qt = {
  setAuto: bw,
  enableAuto: ww
};
var yd, P1;
class xw extends P5 {
  constructor() {
    super(...arguments);
    C(this, P1, !1);
    /**
     * Configures quality switching:
     *
     * - `current`: Trigger an immediate quality level switch. This will abort the current fragment
     * request if any, flush the whole buffer, and fetch fragment matching with current position
     * and requested quality level.
     *
     * - `next`: Trigger a quality level switch for next fragment. This could eventually flush
     * already buffered next fragment.
     *
     * - `load`: Set quality level for next loaded fragment.
     *
     * @see {@link https://www.vidstack.io/docs/player/api/video-quality#switch}
     * @see {@link https://github.com/video-dev/hls.js/blob/master/docs/API.md#quality-switch-control-api}
     */
    $(this, "switch", "current");
    /** @internal */
    $(this, yd);
  }
  /**
   * Whether automatic quality selection is enabled.
   */
  get auto() {
    return r(this, P1) || this.readonly;
  }
  /** @internal */
  [(yd = Qt.enableAuto, fe.onUserSelect)]() {
    this[Qt.setAuto](!1);
  }
  /** @internal */
  [fe.onReset](e) {
    this[Qt.enableAuto] = void 0, this[Qt.setAuto](!1, e);
  }
  /**
   * Request automatic quality selection (if supported). This will be a no-op if the list is
   * `readonly` as that already implies auto-selection.
   */
  autoSelect(e) {
    var n;
    this.readonly || r(this, P1) || !this[Qt.enableAuto] || ((n = this[Qt.enableAuto]) == null || n.call(this, e), this[Qt.setAuto](!0, e));
  }
  getBySrc(e) {
    return this.items.find((n) => n.src === e);
  }
  /** @internal */
  [Qt.setAuto](e, n) {
    r(this, P1) !== e && (g(this, P1, e), this.dispatchEvent(
      new ye("auto-change", {
        detail: e,
        trigger: n
      })
    ));
  }
}
P1 = new WeakMap();
function Sw(s, t) {
  return [...s].sort($w);
}
function $w(s, t) {
  return s.height === t.height ? (s.bitrate ?? 0) - (t.bitrate ?? 0) : s.height - t.height;
}
function Ew(s) {
  return (s == null ? void 0 : s.$$PROVIDER_TYPE) === "HLS";
}
function Tw(s) {
  return !q && s instanceof HTMLAudioElement;
}
function Lw(s) {
  return !q && s instanceof HTMLVideoElement;
}
function Pw(s) {
  return Tw(s) || Lw(s);
}
class yr extends as {
}
const Mw = {
  togglePaused: "k Space",
  toggleMuted: "m",
  toggleFullscreen: "f",
  togglePictureInPicture: "i",
  toggleCaptions: "c",
  seekBackward: "j J ArrowLeft",
  seekForward: "l L ArrowRight",
  volumeUp: "ArrowUp",
  volumeDown: "ArrowDown",
  speedUp: ">",
  slowDown: "<"
}, Uo = /* @__PURE__ */ new Set(["Shift", "Alt", "Meta", "Ctrl"]), kw = 'button, [role="button"]', V7 = 'input, textarea, select, [contenteditable], [role^="menuitem"], [role="timer"]';
var dt, et, Z5, j5, B5, G5, aa, M1, U5, In, Gc, W5;
class Iw extends yr {
  constructor(e) {
    super();
    C(this, et);
    C(this, dt);
    C(this, M1);
    C(this, In, null);
    g(this, dt, e);
  }
  onConnect() {
    E(c(this, et, Z5).bind(this));
  }
}
dt = new WeakMap(), et = new WeakSet(), Z5 = function() {
  const { keyDisabled: e, keyTarget: n } = this.$props;
  if (e()) return;
  const i = n() === "player" ? this.el : document, o = ee(!1);
  i === this.el ? new Pe(this.el).add("focusin", () => o.set(!0)).add("focusout", (a) => {
    this.el.contains(a.target) || o.set(!1);
  }) : (O(o) || o.set(document.querySelector("[data-media-player]") === this.el), Ze(document, "focusin", (a) => {
    const l = a.composedPath().find((d) => d instanceof Element && d.localName === "media-player");
    l !== void 0 && o.set(this.el === l);
  })), E(() => {
    o() && new Pe(i).add("keyup", c(this, et, j5).bind(this)).add("keydown", c(this, et, B5).bind(this)).add("keydown", c(this, et, G5).bind(this), { capture: !0 });
  });
}, j5 = function(e) {
  var a, l;
  const n = document.activeElement;
  if (!e.key || !this.$state.canSeek() || n != null && n.matches(V7))
    return;
  let { method: i, value: o } = c(this, et, aa).call(this, e);
  if (!ie(o) && !vt(o)) {
    (a = o == null ? void 0 : o.onKeyUp) == null || a.call(o, {
      event: e,
      player: r(this, dt).player,
      remote: r(this, dt).remote
    }), (l = o == null ? void 0 : o.callback) == null || l.call(o, e, r(this, dt).remote);
    return;
  }
  if (i != null && i.startsWith("seek") && (e.preventDefault(), e.stopPropagation(), r(this, In) ? (c(this, et, Gc).call(this, e, i === "seekForward"), g(this, In, null)) : (r(this, dt).remote.seek(r(this, M1), e), g(this, M1, void 0))), i != null && i.startsWith("volume")) {
    const d = this.el.querySelector("[data-media-volume-slider]");
    d == null || d.dispatchEvent(
      new KeyboardEvent("keyup", {
        key: i === "volumeUp" ? "Up" : "Down",
        shiftKey: e.shiftKey,
        trigger: e
      })
    );
  }
}, B5 = function(e) {
  var l, d, h, p;
  if (!e.key || Uo.has(e.key)) return;
  const n = document.activeElement;
  if (n != null && n.matches(V7) || yu(e) && (n != null && n.matches(kw)))
    return;
  let { method: i, value: o } = c(this, et, aa).call(this, e), a = !e.metaKey && /^[0-9]$/.test(e.key);
  if (!ie(o) && !vt(o) && !a) {
    (l = o == null ? void 0 : o.onKeyDown) == null || l.call(o, {
      event: e,
      player: r(this, dt).player,
      remote: r(this, dt).remote
    }), (d = o == null ? void 0 : o.callback) == null || d.call(o, e, r(this, dt).remote);
    return;
  }
  if (!i && a) {
    e.preventDefault(), e.stopPropagation(), r(this, dt).remote.seek(this.$state.duration() / 10 * Number(e.key), e);
    return;
  }
  if (i) {
    switch (e.preventDefault(), e.stopPropagation(), i) {
      case "seekForward":
      case "seekBackward":
        c(this, et, W5).call(this, e, i, i === "seekForward");
        break;
      case "volumeUp":
      case "volumeDown":
        const f = this.el.querySelector("[data-media-volume-slider]");
        if (f)
          f.dispatchEvent(
            new KeyboardEvent("keydown", {
              key: i === "volumeUp" ? "Up" : "Down",
              shiftKey: e.shiftKey,
              trigger: e
            })
          );
        else {
          const y = e.shiftKey ? 0.1 : 0.05;
          r(this, dt).remote.changeVolume(
            this.$state.volume() + (i === "volumeUp" ? +y : -y),
            e
          );
        }
        break;
      case "toggleFullscreen":
        r(this, dt).remote.toggleFullscreen("prefer-media", e);
        break;
      case "speedUp":
      case "slowDown":
        const m = this.$state.playbackRate();
        r(this, dt).remote.changePlaybackRate(
          Math.max(0.25, Math.min(2, m + (i === "speedUp" ? 0.25 : -0.25))),
          e
        );
        break;
      default:
        (p = (h = r(this, dt).remote)[i]) == null || p.call(h, e);
    }
    this.$state.lastKeyboardAction.set({
      action: i,
      event: e
    });
  }
}, G5 = function(e) {
  Pw(e.target) && c(this, et, aa).call(this, e).method && e.preventDefault();
}, aa = function(e) {
  const n = {
    ...this.$props.keyShortcuts(),
    ...r(this, dt).ariaKeys
  }, i = Object.keys(n).find((o) => {
    var h;
    const a = n[o], l = vt(a) ? a.join(" ") : ie(a) ? a : a == null ? void 0 : a.keys, d = (h = vt(l) ? l : l == null ? void 0 : l.split(" ")) == null ? void 0 : h.map(
      (p) => Aw(p).replace(/Control/g, "Ctrl").split("+")
    );
    return d == null ? void 0 : d.some((p) => {
      const f = new Set(p.filter((m) => Uo.has(m)));
      for (const m of Uo) {
        const y = m.toLowerCase() + "Key";
        if (!f.has(m) && e[y])
          return !1;
      }
      return p.every((m) => Uo.has(m) ? e[m.toLowerCase() + "Key"] : e.key === m.replace("Space", " "));
    });
  });
  return {
    method: i,
    value: i ? n[i] : null
  };
}, M1 = new WeakMap(), U5 = function(e, n) {
  const i = e.shiftKey ? 10 : 5;
  return g(this, M1, Math.max(
    0,
    Math.min(
      (r(this, M1) ?? this.$state.currentTime()) + (n === "seekForward" ? +i : -i),
      this.$state.duration()
    )
  ));
}, In = new WeakMap(), Gc = function(e, n) {
  var i;
  (i = r(this, In)) == null || i.dispatchEvent(
    new KeyboardEvent(e.type, {
      key: n ? "Right" : "Left",
      shiftKey: e.shiftKey,
      trigger: e
    })
  );
}, W5 = function(e, n, i) {
  this.$state.canSeek() && (r(this, In) || g(this, In, this.el.querySelector("[data-media-time-slider]")), r(this, In) ? c(this, et, Gc).call(this, e, i) : r(this, dt).remote.seeking(c(this, et, U5).call(this, e, n), e));
};
const Vw = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
function Aw(s) {
  return s.replace(/Shift\+(\d)/g, (t, e) => Vw[e - 1]);
}
var k1;
class Nw extends as {
  constructor(e) {
    super();
    C(this, k1);
    g(this, k1, e);
  }
  onAttach(e) {
    const { $props: n, ariaKeys: i } = Ae(), o = e.getAttribute("aria-keyshortcuts");
    if (o) {
      i[r(this, k1)] = o, q || ue(() => {
        delete i[r(this, k1)];
      });
      return;
    }
    const a = n.keyShortcuts()[r(this, k1)];
    if (a) {
      const l = vt(a) ? a.join(" ") : ie(a) ? a : a == null ? void 0 : a.keys;
      e.setAttribute("aria-keyshortcuts", vt(l) ? l.join(" ") : l);
    }
  }
}
k1 = new WeakMap();
var qr, Vn, H3, Zr, Ci, jr, Te, K5, z5, Y5, Q5, X5, J5, e4, t4, ca, Uc, h3, Wc;
class Rw extends yr {
  constructor() {
    super(...arguments);
    C(this, Te);
    C(this, qr, -2);
    C(this, Vn, !1);
    C(this, H3, ee(!1));
    C(this, Zr, ee(!1));
    C(this, Ci, null);
    C(this, jr, ee(!0));
    /**
     * The default amount of delay in milliseconds while media playback is progressing without user
     * activity to indicate an idle state (i.e., hide controls).
     *
     * @defaultValue 2000
     */
    $(this, "defaultDelay", 2e3);
  }
  /**
   * Whether controls can hide after a delay in user interaction. If this is false, controls will
   * not hide and be user controlled.
   */
  get canIdle() {
    return r(this, jr).call(this);
  }
  set canIdle(e) {
    r(this, jr).set(e);
  }
  /**
   * Whether controls visibility should be toggled when the mouse enters and leaves the player
   * container.
   *
   * @defaultValue false
   */
  get hideOnMouseLeave() {
    const { hideControlsOnMouseLeave: e } = this.$props;
    return r(this, H3).call(this) || e();
  }
  set hideOnMouseLeave(e) {
    r(this, H3).set(e);
  }
  /**
   * Whether media controls are currently visible.
   */
  get showing() {
    return this.$state.controlsVisible();
  }
  /**
   * Show controls.
   */
  show(e = 0, n) {
    c(this, Te, ca).call(this), r(this, Vn) || c(this, Te, h3).call(this, !0, e, n);
  }
  /**
   * Hide controls.
   */
  hide(e = this.defaultDelay, n) {
    c(this, Te, ca).call(this), r(this, Vn) || c(this, Te, h3).call(this, !1, e, n);
  }
  /**
   * Whether all idle tracking on controls should be paused until resumed again.
   */
  pause(e) {
    g(this, Vn, !0), c(this, Te, ca).call(this), c(this, Te, h3).call(this, !0, 0, e);
  }
  resume(e) {
    g(this, Vn, !1), !this.$state.paused() && c(this, Te, h3).call(this, !1, this.defaultDelay, e);
  }
  onConnect() {
    E(c(this, Te, K5).bind(this));
  }
}
qr = new WeakMap(), Vn = new WeakMap(), H3 = new WeakMap(), Zr = new WeakMap(), Ci = new WeakMap(), jr = new WeakMap(), Te = new WeakSet(), K5 = function() {
  const { viewType: e } = this.$state;
  if (!this.el || !r(this, jr).call(this)) return;
  if (e() === "audio") {
    this.show();
    return;
  }
  E(c(this, Te, z5).bind(this)), E(c(this, Te, Y5).bind(this));
  const n = c(this, Te, Q5).bind(this), i = c(this, Te, X5).bind(this), o = c(this, Te, J5).bind(this);
  new Pe(this.el).add("can-play", (a) => this.show(0, a)).add("play", n).add("pause", i).add("end", o).add("auto-play-fail", i);
}, z5 = function() {
  if (!this.el) return;
  const { started: e, pointer: n, paused: i } = this.$state;
  if (!e() || n() !== "fine") return;
  const o = new Pe(this.el), a = this.hideOnMouseLeave;
  (!a || !r(this, Zr).call(this)) && E(() => {
    i() || o.add("pointermove", c(this, Te, Uc).bind(this));
  }), a && o.add("mouseenter", c(this, Te, e4).bind(this)).add("mouseleave", c(this, Te, t4).bind(this));
}, Y5 = function() {
  const { paused: e, started: n, autoPlayError: i } = this.$state;
  if (e() || i() && !n()) return;
  const o = c(this, Te, Uc).bind(this);
  E(() => {
    if (!this.el) return;
    const a = this.$state.pointer(), l = a === "coarse", d = new Pe(this.el), h = [l ? "touchend" : "pointerup", "keydown"];
    for (const p of h)
      d.add(p, o, { passive: !1 });
  });
}, Q5 = function(e) {
  e.triggers.hasType("ended") || (this.show(0, e), this.hide(void 0, e));
}, X5 = function(e) {
  this.show(0, e);
}, J5 = function(e) {
  const { loop: n } = this.$state;
  n() && this.hide(0, e);
}, e4 = function(e) {
  r(this, Zr).set(!1), this.show(0, e), this.hide(void 0, e);
}, t4 = function(e) {
  r(this, Zr).set(!0), this.hide(0, e);
}, ca = function() {
  window.clearTimeout(r(this, qr)), g(this, qr, -1);
}, Uc = function(e) {
  var n;
  // @ts-expect-error
  e.MEDIA_GESTURE || r(this, Vn) || Ru(e) || (Ao(e) && (e.key === "Escape" ? ((n = this.el) == null || n.focus(), g(this, Ci, null)) : r(this, Ci) && (e.preventDefault(), requestAnimationFrame(() => {
    var i;
    (i = r(this, Ci)) == null || i.focus(), g(this, Ci, null);
  }))), this.show(0, e), this.hide(this.defaultDelay, e));
}, h3 = function(e, n, i) {
  if (n === 0) {
    c(this, Te, Wc).call(this, e, i);
    return;
  }
  g(this, qr, window.setTimeout(() => {
    this.scope && c(this, Te, Wc).call(this, e && !r(this, Vn), i);
  }, n));
}, Wc = function(e, n) {
  var i;
  this.$state.controlsVisible() !== e && (this.$state.controlsVisible.set(e), !e && document.activeElement && ((i = this.el) != null && i.contains(document.activeElement)) && (g(this, Ci, document.activeElement), requestAnimationFrame(() => {
    var o;
    (o = this.el) == null || o.focus({ preventScroll: !0 });
  })), this.dispatch("controls-change", {
    detail: e,
    trigger: n
  }));
};
const Kc = Xi.fullscreenEnabled;
var mi, Br, r1, s4, n4, i4;
class Hw extends as {
  constructor() {
    super(...arguments);
    C(this, r1);
    /**
     * Tracks whether we're the active fullscreen event listener. Fullscreen events can only be
     * listened to globally on the document so we need to know if they relate to the current host
     * element or not.
     */
    C(this, mi, !1);
    C(this, Br, !1);
  }
  get active() {
    return r(this, Br);
  }
  get supported() {
    return Kc;
  }
  onConnect() {
    new Pe(Xi).add("fullscreenchange", c(this, r1, n4).bind(this)).add("fullscreenerror", c(this, r1, i4).bind(this)), ue(c(this, r1, s4).bind(this));
  }
  async enter() {
    try {
      return g(this, mi, !0), !this.el || K2(this.el) ? void 0 : (A7(), Xi.requestFullscreen(this.el));
    } catch (e) {
      throw g(this, mi, !1), e;
    }
  }
  async exit() {
    if (!(!this.el || !K2(this.el)))
      return A7(), Xi.exitFullscreen();
  }
}
mi = new WeakMap(), Br = new WeakMap(), r1 = new WeakSet(), s4 = async function() {
  Kc && await this.exit();
}, n4 = function(e) {
  const n = K2(this.el);
  n !== r(this, Br) && (n || g(this, mi, !1), g(this, Br, n), this.dispatch("fullscreen-change", { detail: n, trigger: e }));
}, i4 = function(e) {
  r(this, mi) && (this.dispatch("fullscreen-error", { detail: null, trigger: e }), g(this, mi, !1));
};
function K2(s) {
  if (Xi.fullscreenElement === s) return !0;
  try {
    return s.matches(
      // @ts-expect-error - `fullscreenPseudoClass` is missing from `@types/fscreen`.
      Xi.fullscreenPseudoClass
    );
  } catch {
    return !1;
  }
}
function A7() {
  if (!Kc)
    throw Error(
      "[vidstack] no fullscreen API"
    );
}
var gi, An, I1, rs, r4, zc, Yc, Qc;
const Qa = class Qa extends as {
  constructor() {
    super(...arguments);
    C(this, rs);
    C(this, gi, ee(c(this, rs, Qc).call(this)));
    C(this, An, ee(!1));
    C(this, I1);
  }
  /**
   * The current screen orientation type.
   *
   * @signal
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation}
   * @see https://w3c.github.io/screen-orientation/#screen-orientation-types-and-locks
   */
  get type() {
    return r(this, gi).call(this);
  }
  /**
   * Whether the screen orientation is currently locked.
   *
   * @signal
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation}
   * @see https://w3c.github.io/screen-orientation/#screen-orientation-types-and-locks
   */
  get locked() {
    return r(this, An).call(this);
  }
  /**
   * Whether the viewport is in a portrait orientation.
   *
   * @signal
   */
  get portrait() {
    return r(this, gi).call(this).startsWith("portrait");
  }
  /**
   * Whether the viewport is in a landscape orientation.
   *
   * @signal
   */
  get landscape() {
    return r(this, gi).call(this).startsWith("landscape");
  }
  /**
   * Whether the native Screen Orientation API is available.
   */
  get supported() {
    return Qa.supported;
  }
  onConnect() {
    if (this.supported)
      Ze(screen.orientation, "change", c(this, rs, zc).bind(this));
    else {
      const e = window.matchMedia("(orientation: landscape)");
      e.onchange = c(this, rs, zc).bind(this), ue(() => e.onchange = null);
    }
    ue(c(this, rs, r4).bind(this));
  }
  /**
   * Locks the orientation of the screen to the desired orientation type using the
   * Screen Orientation API.
   *
   * @param lockType - The screen lock orientation type.
   * @throws Error - If screen orientation API is unavailable.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation}
   * @see {@link https://w3c.github.io/screen-orientation}
   */
  async lock(e) {
    O(r(this, An)) || r(this, I1) === e || (c(this, rs, Yc).call(this), await screen.orientation.lock(e), r(this, An).set(!0), g(this, I1, e));
  }
  /**
   * Unlocks the orientation of the screen to it's default state using the Screen Orientation
   * API. This method will throw an error if the API is unavailable.
   *
   * @throws Error - If screen orientation API is unavailable.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation}
   * @see {@link https://w3c.github.io/screen-orientation}
   */
  async unlock() {
    O(r(this, An)) && (c(this, rs, Yc).call(this), g(this, I1, void 0), await screen.orientation.unlock(), r(this, An).set(!1));
  }
};
gi = new WeakMap(), An = new WeakMap(), I1 = new WeakMap(), rs = new WeakSet(), r4 = async function() {
  this.supported && r(this, An).call(this) && await this.unlock();
}, zc = function(e) {
  r(this, gi).set(c(this, rs, Qc).call(this)), this.dispatch("orientation-change", {
    detail: {
      orientation: O(r(this, gi)),
      lock: r(this, I1)
    },
    trigger: e
  });
}, Yc = function() {
  if (!this.supported)
    throw Error(
      "[vidstack] no orientation API"
    );
}, Qc = function() {
  return q ? "portrait-primary" : this.supported ? window.screen.orientation.type : window.innerWidth >= window.innerHeight ? "landscape-primary" : "portrait-primary";
}, /**
 * Whether the native Screen Orientation API is available.
 */
$(Qa, "supported", p5());
let _a = Qa;
class Ow {
  constructor() {
    $(this, "name", "audio");
    $(this, "target");
  }
  canPlay(t) {
    return w5(t) ? q || !ie(t.src) || t.type === "?" || C5(this.target, t.type) : !1;
  }
  mediaType() {
    return "audio";
  }
  async load(t) {
    if (q)
      throw Error("[vidstack] can not load audio provider server-side");
    return new (await import("./vidstack-i8ZXTtoj-Dyul8B9X.js")).AudioProvider(this.target, t);
  }
}
class Hu {
  constructor() {
    $(this, "name", "video");
    $(this, "target");
  }
  canPlay(t) {
    return x5(t) ? q || !ie(t.src) || t.type === "?" || m5(this.target, t.type) : !1;
  }
  mediaType() {
    return "video";
  }
  async load(t) {
    if (q)
      throw Error("[vidstack] can not load video provider server-side");
    return new (await Promise.resolve().then(function() {
      return nx;
    })).VideoProvider(this.target, t);
  }
}
const Xa = class Xa extends Hu {
  constructor() {
    super(...arguments);
    $(this, "name", "hls");
  }
  canPlay(e) {
    return Xa.supported && Q6(e);
  }
  async load(e) {
    if (q)
      throw Error("[vidstack] can not load hls provider server-side");
    return new (await import("./vidstack-Dj0oEz46-b4GBb2_H.js")).HLSProvider(this.target, e);
  }
};
$(Xa, "supported", ku());
let Xc = Xa, la = null, Fa = [], qa = [];
function Ou() {
  return la ?? (la = new AudioContext());
}
function Dw() {
  const s = Ou(), t = s.createGain();
  return t.connect(s.destination), Fa.push(t), t;
}
function _w(s, t) {
  const e = Ou(), n = e.createMediaElementSource(s);
  return t && n.connect(t), qa.push(n), n;
}
function Fw(s) {
  const t = Fa.indexOf(s);
  t !== -1 && (Fa.splice(t, 1), s.disconnect(), o4());
}
function qw(s) {
  const t = qa.indexOf(s);
  t !== -1 && (qa.splice(t, 1), s.disconnect(), o4());
}
function o4() {
  la && Fa.length === 0 && qa.length === 0 && la.close().then(() => {
    la = null;
  });
}
var O3, Gr, Kt, us, dr, a4, Jc;
class Zw {
  constructor(t, e) {
    C(this, dr);
    C(this, O3);
    C(this, Gr);
    C(this, Kt, null);
    C(this, us, null);
    g(this, O3, t), g(this, Gr, e);
  }
  get currentGain() {
    var t, e;
    return ((e = (t = r(this, Kt)) == null ? void 0 : t.gain) == null ? void 0 : e.value) ?? null;
  }
  get supported() {
    return !0;
  }
  setGain(t) {
    const e = this.currentGain;
    if (t !== this.currentGain) {
      if (t === 1 && e !== 1) {
        this.removeGain();
        return;
      }
      r(this, Kt) || (g(this, Kt, Dw()), r(this, us) && r(this, us).connect(r(this, Kt))), r(this, us) || g(this, us, _w(r(this, O3), r(this, Kt))), r(this, Kt).gain.value = t, r(this, Gr).call(this, t);
    }
  }
  removeGain() {
    r(this, Kt) && (r(this, us) && r(this, us).connect(Ou().destination), c(this, dr, Jc).call(this), r(this, Gr).call(this, null));
  }
  destroy() {
    c(this, dr, a4).call(this), c(this, dr, Jc).call(this);
  }
}
O3 = new WeakMap(), Gr = new WeakMap(), Kt = new WeakMap(), us = new WeakMap(), dr = new WeakSet(), a4 = function() {
  if (r(this, us))
    try {
      qw(r(this, us));
    } catch {
    } finally {
      g(this, us, null);
    }
}, Jc = function() {
  if (r(this, Kt))
    try {
      Fw(r(this, Kt));
    } catch {
    } finally {
      g(this, Kt, null);
    }
};
const jw = ["focus", "blur", "visibilitychange", "pageshow", "pagehide"];
var V1, Ur, D3, Ja, c4;
class Bw {
  constructor() {
    C(this, Ja);
    C(this, V1, ee(N7()));
    C(this, Ur, ee(q ? "visible" : document.visibilityState));
    C(this, D3);
  }
  connect() {
    const t = new Pe(window), e = c(this, Ja, c4).bind(this);
    for (const n of jw)
      t.add(n, e);
    Oa && t.add("beforeunload", (n) => {
      g(this, D3, setTimeout(() => {
        n.defaultPrevented || n.returnValue.length > 0 || (r(this, V1).set("hidden"), r(this, Ur).set("hidden"));
      }, 0));
    });
  }
  /**
   * The current page state. Important to note we only account for a subset of page states, as
   * the rest aren't valuable to the player at the moment.
   *
   * - **active:** A page is in the active state if it is visible and has input focus.
   * - **passive:** A page is in the passive state if it is visible and does not have input focus.
   * - **hidden:** A page is in the hidden state if it is not visible.
   *
   * @see https://developers.google.com/web/updates/2018/07/page-lifecycle-api#states
   */
  get pageState() {
    return r(this, V1).call(this);
  }
  /**
   * The current document visibility state.
   *
   * - **visible:** The page content may be at least partially visible. In practice, this means that
   * the page is the foreground tab of a non-minimized window.
   * - **hidden:** The page content is not visible to the user. In practice this means that the
   * document is either a background tab or part of a minimized window, or the OS screen lock is
   * active.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState
   */
  get visibility() {
    return r(this, Ur).call(this);
  }
}
V1 = new WeakMap(), Ur = new WeakMap(), D3 = new WeakMap(), Ja = new WeakSet(), c4 = function(t) {
  Oa && window.clearTimeout(r(this, D3)), (t.type !== "blur" || r(this, V1).call(this) === "active") && (r(this, V1).set(N7(t)), r(this, Ur).set(document.visibilityState == "hidden" ? "hidden" : "visible"));
};
function N7(s) {
  return q || (s == null ? void 0 : s.type) === "blur" || document.visibilityState === "hidden" ? "hidden" : document.hasFocus() ? "active" : "passive";
}
var Nn, _3, F3, el;
class l4 {
  constructor(t) {
    C(this, F3);
    C(this, Nn);
    C(this, _3);
    g(this, _3, t);
  }
  start() {
    ct(r(this, Nn)) && c(this, F3, el).call(this);
  }
  stop() {
    qt(r(this, Nn)) && window.cancelAnimationFrame(r(this, Nn)), g(this, Nn, void 0);
  }
}
Nn = new WeakMap(), _3 = new WeakMap(), F3 = new WeakSet(), el = function() {
  g(this, Nn, window.requestAnimationFrame(() => {
    ct(r(this, Nn)) || (r(this, _3).call(this), c(this, F3, el).call(this));
  }));
};
var q3, ge, yi, Wr, Kr, A1, Z3, zr, T, $e, u4, Yr, Qr, d4, h4, f4, p4, e2, iu, Ke, Uw, p1, C4, tl, m4, g4, y4, ua, v4, b4, w4, x4, S4, $4, E4, T4, L4, P4, M4, k4, I4, V4, A4, N4, R4, H4;
class Gw {
  constructor(t, e) {
    C(this, T);
    C(this, q3);
    C(this, ge);
    C(this, yi, !1);
    C(this, Wr, !1);
    C(this, Kr, !1);
    C(this, A1, new l4(c(this, T, d4).bind(this)));
    C(this, Z3, new Bw());
    C(this, zr);
    /**
     * The `timeupdate` event fires surprisingly infrequently during playback, meaning your progress
     * bar (or whatever else is synced to the currentTime) moves in a choppy fashion. This helps
     * resolve that by retrieving time updates in a request animation frame loop.
     */
    C(this, Yr, 0);
    C(this, Qr, -1);
    C(this, e2);
    C(this, iu);
    g(this, q3, t), g(this, ge, e), g(this, zr, new Pe(t.media)), c(this, T, h4).call(this), r(this, Z3).connect(), E(c(this, T, L4).bind(this)), ue(c(this, T, u4).bind(this));
  }
}
q3 = new WeakMap(), ge = new WeakMap(), yi = new WeakMap(), Wr = new WeakMap(), Kr = new WeakMap(), A1 = new WeakMap(), Z3 = new WeakMap(), zr = new WeakMap(), T = new WeakSet(), $e = function() {
  return r(this, q3).media;
}, u4 = function() {
  var t;
  g(this, Wr, !1), g(this, Kr, !1), r(this, A1).stop(), r(this, zr).abort(), (t = r(this, e2)) == null || t.clear();
}, Yr = new WeakMap(), Qr = new WeakMap(), d4 = function() {
  const t = r(this, T, $e).currentTime;
  !(Oa && t - r(this, Qr) < 0.35) && r(this, Yr) !== t && (c(this, T, p1).call(this, t), g(this, Yr, t));
}, h4 = function() {
  c(this, T, Ke).call(this, "loadstart", c(this, T, C4)), c(this, T, Ke).call(this, "abort", c(this, T, tl)), c(this, T, Ke).call(this, "emptied", c(this, T, m4)), c(this, T, Ke).call(this, "error", c(this, T, H4)), c(this, T, Ke).call(this, "volumechange", c(this, T, k4));
}, f4 = function() {
  r(this, Wr) || (c(this, T, Ke).call(this, "loadeddata", c(this, T, g4)), c(this, T, Ke).call(this, "loadedmetadata", c(this, T, y4)), c(this, T, Ke).call(this, "canplay", c(this, T, w4)), c(this, T, Ke).call(this, "canplaythrough", c(this, T, x4)), c(this, T, Ke).call(this, "durationchange", c(this, T, M4)), c(this, T, Ke).call(this, "play", c(this, T, v4)), c(this, T, Ke).call(this, "progress", c(this, T, A4)), c(this, T, Ke).call(this, "stalled", c(this, T, $4)), c(this, T, Ke).call(this, "suspend", c(this, T, N4)), c(this, T, Ke).call(this, "ratechange", c(this, T, R4)), g(this, Wr, !0));
}, p4 = function() {
  r(this, Kr) || (c(this, T, Ke).call(this, "pause", c(this, T, b4)), c(this, T, Ke).call(this, "playing", c(this, T, S4)), c(this, T, Ke).call(this, "seeked", c(this, T, I4)), c(this, T, Ke).call(this, "seeking", c(this, T, V4)), c(this, T, Ke).call(this, "ended", c(this, T, T4)), c(this, T, Ke).call(this, "waiting", c(this, T, E4)), g(this, Kr, !0));
}, e2 = new WeakMap(), iu = new WeakMap(), Ke = function(t, e) {
  r(this, zr).add(t, e.bind(this));
}, Uw = function(t) {
}, p1 = function(t, e) {
  const n = Math.min(t, r(this, ge).$state.seekableEnd());
  r(this, ge).notify("time-change", n, e);
}, C4 = function(t) {
  if (r(this, T, $e).networkState === 3) {
    c(this, T, tl).call(this, t);
    return;
  }
  c(this, T, f4).call(this), r(this, ge).notify("load-start", void 0, t);
}, tl = function(t) {
  r(this, ge).notify("abort", void 0, t);
}, m4 = function() {
  r(this, ge).notify("emptied", void 0, event);
}, g4 = function(t) {
  r(this, ge).notify("loaded-data", void 0, t);
}, y4 = function(t) {
  g(this, Yr, 0), g(this, Qr, -1), c(this, T, p4).call(this), r(this, ge).notify("loaded-metadata", void 0, t), (Mu || Oa && Q6(r(this, ge).$state.source())) && r(this, ge).delegate.ready(c(this, T, ua).call(this), t);
}, ua = function() {
  return {
    provider: O(r(this, ge).$provider),
    duration: r(this, T, $e).duration,
    buffered: r(this, T, $e).buffered,
    seekable: r(this, T, $e).seekable
  };
}, v4 = function(t) {
  r(this, ge).$state.canPlay && r(this, ge).notify("play", void 0, t);
}, b4 = function(t) {
  r(this, T, $e).readyState === 1 && !r(this, yi) || (g(this, yi, !1), r(this, A1).stop(), r(this, ge).notify("pause", void 0, t));
}, w4 = function(t) {
  r(this, ge).delegate.ready(c(this, T, ua).call(this), t);
}, x4 = function(t) {
  r(this, ge).$state.started() || r(this, ge).notify("can-play-through", c(this, T, ua).call(this), t);
}, S4 = function(t) {
  r(this, T, $e).paused || (g(this, yi, !1), r(this, ge).notify("playing", void 0, t), r(this, A1).start());
}, $4 = function(t) {
  r(this, ge).notify("stalled", void 0, t), r(this, T, $e).readyState < 3 && (g(this, yi, !0), r(this, ge).notify("waiting", void 0, t));
}, E4 = function(t) {
  r(this, T, $e).readyState < 3 && (g(this, yi, !0), r(this, ge).notify("waiting", void 0, t));
}, T4 = function(t) {
  r(this, A1).stop(), c(this, T, p1).call(this, r(this, T, $e).duration, t), r(this, ge).notify("end", void 0, t), r(this, ge).$state.loop() && Ad(r(this, T, $e).controls) && (r(this, T, $e).controls = !1);
}, L4 = function() {
  const t = r(this, ge).$state.paused(), e = r(this, Z3).visibility === "hidden";
  (t || e) && Ze(r(this, T, $e), "timeupdate", c(this, T, P4).bind(this));
}, P4 = function(t) {
  c(this, T, p1).call(this, r(this, T, $e).currentTime, t);
}, M4 = function(t) {
  r(this, ge).$state.ended() && c(this, T, p1).call(this, r(this, T, $e).duration, t), r(this, ge).notify("duration-change", r(this, T, $e).duration, t);
}, k4 = function(t) {
  const e = {
    volume: r(this, T, $e).volume,
    muted: r(this, T, $e).muted
  };
  r(this, ge).notify("volume-change", e, t);
}, I4 = function(t) {
  g(this, Qr, r(this, T, $e).currentTime), c(this, T, p1).call(this, r(this, T, $e).currentTime, t), r(this, ge).notify("seeked", r(this, T, $e).currentTime, t), Math.trunc(r(this, T, $e).currentTime) === Math.trunc(r(this, T, $e).duration) && Dc(r(this, T, $e).duration) > Dc(r(this, T, $e).currentTime) && (c(this, T, p1).call(this, r(this, T, $e).duration, t), r(this, T, $e).ended || r(this, ge).player.dispatch(
    new ye("media-play-request", {
      trigger: t
    })
  ));
}, V4 = function(t) {
  r(this, ge).notify("seeking", r(this, T, $e).currentTime, t);
}, A4 = function(t) {
  const e = {
    buffered: r(this, T, $e).buffered,
    seekable: r(this, T, $e).seekable
  };
  r(this, ge).notify("progress", e, t);
}, N4 = function(t) {
  r(this, ge).notify("suspend", void 0, t);
}, R4 = function(t) {
  r(this, ge).notify("rate-change", r(this, T, $e).playbackRate, t);
}, H4 = function(t) {
  const e = r(this, T, $e).error;
  if (!e) return;
  const n = {
    message: e.message,
    code: e.code,
    mediaError: e
  };
  r(this, ge).notify("error", n, t);
};
var j3, Ss, at, Pr, O4, D4, _4, sl, F4;
class Ww {
  constructor(t, e) {
    C(this, at);
    C(this, j3);
    C(this, Ss);
    g(this, j3, t), g(this, Ss, e), r(this, at, Pr).onaddtrack = c(this, at, O4).bind(this), r(this, at, Pr).onremovetrack = c(this, at, D4).bind(this), r(this, at, Pr).onchange = c(this, at, _4).bind(this), Ze(r(this, Ss).audioTracks, "change", c(this, at, F4).bind(this));
  }
}
j3 = new WeakMap(), Ss = new WeakMap(), at = new WeakSet(), Pr = function() {
  return r(this, j3).media.audioTracks;
}, O4 = function(t) {
  const e = t.track;
  if (e.label === "") return;
  const n = e.id.toString() || `native-audio-${r(this, Ss).audioTracks.length}`, i = {
    id: n,
    label: e.label,
    language: e.language,
    kind: e.kind,
    selected: !1
  };
  r(this, Ss).audioTracks[fe.add](i, t), e.enabled && (i.selected = !0);
}, D4 = function(t) {
  const e = r(this, Ss).audioTracks.getById(t.track.id);
  e && r(this, Ss).audioTracks[fe.remove](e, t);
}, _4 = function(t) {
  let e = c(this, at, sl).call(this);
  if (!e) return;
  const n = r(this, Ss).audioTracks.getById(e.id);
  n && r(this, Ss).audioTracks[fe.select](n, !0, t);
}, sl = function() {
  return Array.from(r(this, at, Pr)).find((t) => t.enabled);
}, F4 = function(t) {
  const { current: e } = t.detail;
  if (!e) return;
  const n = r(this, at, Pr).getTrackById(e.id);
  if (n) {
    const i = c(this, at, sl).call(this);
    i && (i.enabled = !1), n.enabled = !0;
  }
};
var B3, nl;
class Kw {
  constructor(t, e) {
    C(this, B3);
    $(this, "scope", q6());
    $(this, "currentSrc", null);
    $(this, "audioGain");
    this.media = t, this.ctx = e, this.audioGain = new Zw(t, (n) => {
      this.ctx.notify("audio-gain-change", n);
    });
  }
  setup() {
    new Gw(this, this.ctx), "audioTracks" in this.media && new Ww(this, this.ctx), ue(() => {
      this.audioGain.destroy(), this.media.srcObject = null, this.media.removeAttribute("src");
      for (const t of this.media.querySelectorAll("source")) t.remove();
      this.media.load();
    });
  }
  get type() {
    return "";
  }
  setPlaybackRate(t) {
    this.media.playbackRate = t;
  }
  async play() {
    return this.media.play();
  }
  async pause() {
    return this.media.pause();
  }
  setMuted(t) {
    this.media.muted = t;
  }
  setVolume(t) {
    this.media.volume = t;
  }
  setCurrentTime(t) {
    this.media.currentTime = t;
  }
  setPlaysInline(t) {
    J(this.media, "playsinline", t);
  }
  async loadSource({ src: t, type: e }, n) {
    this.media.preload = n || "", Bb(t) ? (this.removeSource(), this.media.srcObject = t) : (this.media.srcObject = null, ie(t) ? e !== "?" ? this.appendSource({ src: t, type: e }) : (this.removeSource(), this.media.src = c(this, B3, nl).call(this, t)) : (this.removeSource(), this.media.src = window.URL.createObjectURL(t))), this.media.load(), this.currentSrc = { src: t, type: e };
  }
  /**
   * Append source so it works when requesting AirPlay since hls.js will remove it.
   */
  appendSource(t, e) {
    const n = this.media.querySelector("source[data-vds]"), i = n ?? document.createElement("source");
    J(i, "src", c(this, B3, nl).call(this, t.src)), J(i, "type", t.type !== "?" ? t.type : e), J(i, "data-vds", ""), n || this.media.append(i);
  }
  removeSource() {
    var t;
    (t = this.media.querySelector("source[data-vds]")) == null || t.remove();
  }
}
B3 = new WeakSet(), nl = function(t) {
  const { clipStartTime: e, clipEndTime: n } = this.ctx.$state, i = e(), o = n();
  return i > 0 && o > 0 ? `${t}#t=${i},${o}` : i > 0 ? `${t}#t=${i}` : o > 0 ? `${t}#t=0,${o}` : t;
};
var ds, G3, U3, N1, o1, q4, Z4, j4;
class zw {
  constructor(t, e) {
    C(this, o1);
    C(this, ds);
    C(this, G3);
    C(this, U3);
    C(this, N1, ee(!1));
    g(this, ds, t), g(this, G3, e), c(this, o1, q4).call(this);
  }
  get supported() {
    return r(this, N1).call(this);
  }
  async prompt() {
    if (!this.supported) throw Error("Not supported on this platform.");
    return this.type === "airplay" && r(this, ds).webkitShowPlaybackTargetPicker ? r(this, ds).webkitShowPlaybackTargetPicker() : r(this, ds).remote.prompt();
  }
}
ds = new WeakMap(), G3 = new WeakMap(), U3 = new WeakMap(), N1 = new WeakMap(), o1 = new WeakSet(), q4 = function() {
  var t;
  q || !((t = r(this, ds)) != null && t.remote) || !this.canPrompt || (r(this, ds).remote.watchAvailability((e) => {
    r(this, N1).set(e);
  }).catch(() => {
    r(this, N1).set(!1);
  }), E(c(this, o1, Z4).bind(this)));
}, Z4 = function() {
  if (!r(this, N1).call(this)) return;
  const t = ["connecting", "connect", "disconnect"], e = c(this, o1, j4).bind(this);
  e(), Ze(r(this, ds), "playing", e);
  const n = new Pe(r(this, ds).remote);
  for (const i of t)
    n.add(i, e);
}, j4 = function(t) {
  const e = r(this, ds).remote.state;
  if (e === r(this, U3)) return;
  const n = { type: this.type, state: e };
  r(this, G3).notify("remote-playback-change", n, t), g(this, U3, e);
};
class Yw extends zw {
  constructor() {
    super(...arguments);
    $(this, "type", "airplay");
  }
  get canPrompt() {
    return "WebKitPlaybackTargetAvailabilityEvent" in window;
  }
}
var Xr, Jr, G6, B4, G4;
class Qw {
  constructor(t, e) {
    C(this, G6);
    C(this, Xr);
    C(this, Jr);
    g(this, Xr, t), g(this, Jr, e), t.textTracks.onaddtrack = c(this, G6, B4).bind(this), ue(c(this, G6, G4).bind(this));
  }
}
Xr = new WeakMap(), Jr = new WeakMap(), G6 = new WeakSet(), B4 = function(t) {
  const e = t.track;
  if (!e || Xw(r(this, Xr), e)) return;
  const n = new lr({
    id: e.id,
    kind: e.kind,
    label: e.label ?? "",
    language: e.language,
    type: "vtt"
  });
  n[ce.native] = { track: e }, n[ce.readyState] = 2, n[ce.nativeHLS] = !0;
  let i = 0;
  const o = (a) => {
    if (e.cues)
      for (let l = i; l < e.cues.length; l++)
        n.addCue(e.cues[l], a), i++;
  };
  o(t), e.oncuechange = o, r(this, Jr).textTracks.add(n, t), n.setMode(e.mode, t);
}, G4 = function() {
  var t;
  r(this, Xr).textTracks.onaddtrack = null;
  for (const e of r(this, Jr).textTracks) {
    const n = (t = e[ce.native]) == null ? void 0 : t.track;
    n != null && n.oncuechange && (n.oncuechange = null);
  }
};
function Xw(s, t) {
  return Array.from(s.children).find((e) => e.track === t);
}
var R1, W3, U6, U4, W4, K3;
class Jw {
  constructor(t, e) {
    C(this, U6);
    C(this, R1);
    C(this, W3);
    C(this, K3, (t, e) => {
      r(this, W3).notify("picture-in-picture-change", t, e);
    });
    g(this, R1, t), g(this, W3, e), new Pe(t).add("enterpictureinpicture", c(this, U6, U4).bind(this)).add("leavepictureinpicture", c(this, U6, W4).bind(this));
  }
  get active() {
    return document.pictureInPictureElement === r(this, R1);
  }
  get supported() {
    return y5(r(this, R1));
  }
  async enter() {
    return r(this, R1).requestPictureInPicture();
  }
  exit() {
    return document.exitPictureInPicture();
  }
}
R1 = new WeakMap(), W3 = new WeakMap(), U6 = new WeakSet(), U4 = function(t) {
  r(this, K3).call(this, !0, t);
}, W4 = function(t) {
  r(this, K3).call(this, !1, t);
}, K3 = new WeakMap();
var H1, e6, zs, t2, K4;
class ex {
  constructor(t, e) {
    C(this, t2);
    C(this, H1);
    C(this, e6);
    C(this, zs, "inline");
    g(this, H1, t), g(this, e6, e), Ze(t, "webkitpresentationmodechanged", c(this, t2, K4).bind(this));
  }
  get mode() {
    return r(this, zs);
  }
  get supported() {
    return v5(r(this, H1));
  }
  async setPresentationMode(t) {
    r(this, zs) !== t && r(this, H1).webkitSetPresentationMode(t);
  }
}
H1 = new WeakMap(), e6 = new WeakMap(), zs = new WeakMap(), t2 = new WeakSet(), K4 = function(t) {
  var n;
  const e = r(this, zs);
  g(this, zs, r(this, H1).webkitPresentationMode), (n = r(this, e6).player) == null || n.dispatch(
    new ye("video-presentation-change", {
      detail: r(this, zs),
      trigger: t
    })
  ), ["fullscreen", "picture-in-picture"].forEach((i) => {
    (r(this, zs) === i || e === i) && r(this, e6).notify(`${i}-change`, r(this, zs) === i, t);
  });
};
var vi;
class tx {
  constructor(t) {
    C(this, vi);
    g(this, vi, t);
  }
  get active() {
    return r(this, vi).mode === "fullscreen";
  }
  get supported() {
    return r(this, vi).supported;
  }
  async enter() {
    r(this, vi).setPresentationMode("fullscreen");
  }
  async exit() {
    r(this, vi).setPresentationMode("inline");
  }
}
vi = new WeakMap();
var bi;
class sx {
  constructor(t) {
    C(this, bi);
    g(this, bi, t);
  }
  get active() {
    return r(this, bi).mode === "picture-in-picture";
  }
  get supported() {
    return r(this, bi).supported;
  }
  async enter() {
    r(this, bi).setPresentationMode("picture-in-picture");
  }
  async exit() {
    r(this, bi).setPresentationMode("inline");
  }
}
bi = new WeakMap();
let z4 = class extends Kw {
  constructor(e, n) {
    super(e, n);
    $(this, "$$PROVIDER_TYPE", "VIDEO");
    $(this, "airPlay");
    $(this, "fullscreen");
    $(this, "pictureInPicture");
    Mt(() => {
      if (this.airPlay = new Yw(e, n), v5(e)) {
        const i = new ex(e, n);
        this.fullscreen = new tx(i), this.pictureInPicture = new sx(i);
      } else y5(e) && (this.pictureInPicture = new Jw(e, n));
    }, this.scope);
  }
  get type() {
    return "video";
  }
  setup() {
    super.setup(), g5(this.video) && new Qw(this.video, this.ctx), this.ctx.textRenderers.attachVideo(this.video), ue(() => {
      this.ctx.textRenderers.attachVideo(null);
    }), this.type === "video" && this.ctx.notify("provider-setup", this);
  }
  /**
   * The native HTML `<video>` element.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement}
   */
  get video() {
    return this.media;
  }
};
var nx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  VideoProvider: z4
});
function R7(s) {
  try {
    return new Intl.DisplayNames(navigator.languages, { type: "language" }).of(s) ?? null;
  } catch {
    return null;
  }
}
const ix = (s) => `dash-${b2(s)}`;
var wi, Re, pe, t6, s6, Q, C1, Y4, Q4, X4, Rn, n6, J4, e0, t0, s0, n0, i0, r0, o0, xi, a0, da, il, c0, rl, l0, u0, ol;
class rx {
  constructor(t, e) {
    C(this, Q);
    C(this, wi);
    C(this, Re);
    C(this, pe, null);
    C(this, t6, /* @__PURE__ */ new Set());
    C(this, s6, null);
    $(this, "config", {});
    C(this, Rn, null);
    C(this, n6, {});
    C(this, xi, -1);
    g(this, wi, t), g(this, Re, e);
  }
  get instance() {
    return r(this, pe);
  }
  setup(t) {
    g(this, pe, t().create());
    const e = c(this, Q, X4).bind(this);
    for (const n of Object.values(t.events)) r(this, pe).on(n, e);
    r(this, pe).on(t.events.ERROR, c(this, Q, i0).bind(this));
    for (const n of r(this, t6)) n(r(this, pe));
    r(this, Re).player.dispatch("dash-instance", {
      detail: r(this, pe)
    }), r(this, pe).initialize(r(this, wi), void 0, !1), r(this, pe).updateSettings({
      streaming: {
        text: {
          // Disabling text rendering by dash.
          defaultEnabled: !1,
          dispatchForManualRendering: !0
        },
        buffer: {
          /// Enables buffer replacement when switching bitrates for faster switching.
          fastSwitchEnabled: !0
        }
      },
      ...this.config
    }), r(this, pe).on(t.events.FRAGMENT_LOADING_STARTED, c(this, Q, r0).bind(this)), r(this, pe).on(
      t.events.FRAGMENT_LOADING_COMPLETED,
      c(this, Q, o0).bind(this)
    ), r(this, pe).on(t.events.MANIFEST_LOADED, c(this, Q, n0).bind(this)), r(this, pe).on(t.events.QUALITY_CHANGE_RENDERED, c(this, Q, s0).bind(this)), r(this, pe).on(t.events.TEXT_TRACKS_ADDED, c(this, Q, e0).bind(this)), r(this, pe).on(t.events.TRACK_CHANGE_RENDERED, c(this, Q, t0).bind(this)), r(this, Re).qualities[Qt.enableAuto] = c(this, Q, c0).bind(this), Ze(r(this, Re).qualities, "change", c(this, Q, l0).bind(this)), Ze(r(this, Re).audioTracks, "change", c(this, Q, u0).bind(this)), g(this, s6, E(c(this, Q, Y4).bind(this)));
  }
  onInstance(t) {
    return r(this, t6).add(t), () => r(this, t6).delete(t);
  }
  loadSource(t) {
    var e;
    c(this, Q, ol).call(this), ie(t.src) && ((e = r(this, pe)) == null || e.attachSource(t.src));
  }
  destroy() {
    var t, e;
    c(this, Q, ol).call(this), (t = r(this, pe)) == null || t.destroy(), g(this, pe, null), (e = r(this, s6)) == null || e.call(this), g(this, s6, null);
  }
}
wi = new WeakMap(), Re = new WeakMap(), pe = new WeakMap(), t6 = new WeakMap(), s6 = new WeakMap(), Q = new WeakSet(), C1 = function(t) {
  return new ye(ix(t.type), { detail: t });
}, Y4 = function() {
  if (!r(this, Re).$state.live()) return;
  const t = new l4(c(this, Q, Q4).bind(this));
  return t.start(), t.stop.bind(t);
}, Q4 = function() {
  if (!r(this, pe)) return;
  const t = r(this, pe).duration() - r(this, pe).time();
  r(this, Re).$state.liveSyncPosition.set(isNaN(t) ? 1 / 0 : t);
}, X4 = function(t) {
  var e;
  (e = r(this, Re).player) == null || e.dispatch(c(this, Q, C1).call(this, t));
}, Rn = new WeakMap(), n6 = new WeakMap(), J4 = function(t) {
  var l;
  const e = (l = r(this, Rn)) == null ? void 0 : l[ce.native], n = (e == null ? void 0 : e.track).cues;
  if (!e || !n) return;
  const i = r(this, Rn).id, o = r(this, n6)[i] ?? 0, a = c(this, Q, C1).call(this, t);
  for (let d = o; d < n.length; d++) {
    const h = n[d];
    h.positionAlign || (h.positionAlign = "auto"), r(this, Rn).addCue(h, a);
  }
  r(this, n6)[i] = n.length;
}, e0 = function(t) {
  var o;
  if (!r(this, pe)) return;
  const e = t.tracks, n = [...r(this, wi).textTracks].filter((a) => "manualMode" in a), i = c(this, Q, C1).call(this, t);
  for (let a = 0; a < n.length; a++) {
    const l = e[a], d = n[a], h = `dash-${l.kind}-${a}`, p = new lr({
      id: h,
      label: (l == null ? void 0 : l.label) ?? ((o = l.labels.find((f) => f.text)) == null ? void 0 : o.text) ?? ((l == null ? void 0 : l.lang) && R7(l.lang)) ?? (l == null ? void 0 : l.lang) ?? void 0,
      language: l.lang ?? void 0,
      kind: l.kind,
      default: l.defaultTrack
    });
    p[ce.native] = {
      managed: !0,
      track: d
    }, p[ce.readyState] = 2, p[ce.onModeChange] = () => {
      r(this, pe) && (p.mode === "showing" ? (r(this, pe).setTextTrack(a), g(this, Rn, p)) : (r(this, pe).setTextTrack(-1), g(this, Rn, null)));
    }, r(this, Re).textTracks.add(p, i);
  }
}, t0 = function(t) {
  const { mediaType: e, newMediaInfo: n } = t;
  if (e === "audio") {
    const i = r(this, Re).audioTracks.getById(`dash-audio-${n.index}`);
    if (i) {
      const o = c(this, Q, C1).call(this, t);
      r(this, Re).audioTracks[fe.select](i, !0, o);
    }
  }
}, s0 = function(t) {
  if (t.mediaType !== "video") return;
  const e = r(this, Re).qualities[t.newQuality];
  if (e) {
    const n = c(this, Q, C1).call(this, t);
    r(this, Re).qualities[fe.select](e, !0, n);
  }
}, n0 = function(t) {
  if (r(this, Re).$state.canPlay() || !r(this, pe)) return;
  const { type: e, mediaPresentationDuration: n } = t.data, i = c(this, Q, C1).call(this, t);
  r(this, Re).notify("stream-type-change", e !== "static" ? "live" : "on-demand", i), r(this, Re).notify("duration-change", n, i), r(this, Re).qualities[Qt.setAuto](!0, i);
  const o = r(this, pe).getVideoElement(), a = r(this, pe).getTracksForTypeFromManifest(
    "video",
    t.data
  ), l = [...new Set(a.map((f) => f.mimeType))].find(
    (f) => f && m5(o, f)
  ), d = a.filter(
    (f) => l === f.mimeType
  )[0];
  let h = r(this, pe).getTracksForTypeFromManifest(
    "audio",
    t.data
  );
  const p = [...new Set(h.map((f) => f.mimeType))].find(
    (f) => f && C5(o, f)
  );
  if (h = h.filter((f) => p === f.mimeType), d.bitrateList.forEach((f, m) => {
    var v;
    const y = {
      id: ((v = f.id) == null ? void 0 : v.toString()) ?? `dash-bitrate-${m}`,
      width: f.width ?? 0,
      height: f.height ?? 0,
      bitrate: f.bandwidth ?? 0,
      codec: d.codec,
      index: m
    };
    r(this, Re).qualities[fe.add](y, i);
  }), qt(d.index)) {
    const f = r(this, Re).qualities[d.index];
    f && r(this, Re).qualities[fe.select](f, !0, i);
  }
  h.forEach((f, m) => {
    const v = f.labels.find((x) => navigator.languages.some((S) => x.lang && S.toLowerCase().startsWith(x.lang.toLowerCase()))) || f.labels[0], b = {
      id: `dash-audio-${f == null ? void 0 : f.index}`,
      label: (v == null ? void 0 : v.text) ?? (f.lang && R7(f.lang)) ?? f.lang ?? "",
      language: f.lang ?? "",
      kind: "main",
      mimeType: f.mimeType,
      codec: f.codec,
      index: m
    };
    r(this, Re).audioTracks[fe.add](b, i);
  }), o.dispatchEvent(new ye("canplay", { trigger: i }));
}, i0 = function(t) {
  const { type: e, error: n } = t;
  switch (n.code) {
    case 27:
      c(this, Q, a0).call(this, n);
      break;
    default:
      c(this, Q, il).call(this, n);
      break;
  }
}, r0 = function() {
  r(this, xi) >= 0 && c(this, Q, da).call(this);
}, o0 = function(t) {
  t.mediaType === "text" && requestAnimationFrame(c(this, Q, J4).bind(this, t));
}, xi = new WeakMap(), a0 = function(t) {
  var e;
  c(this, Q, da).call(this), (e = r(this, pe)) == null || e.play(), g(this, xi, window.setTimeout(() => {
    g(this, xi, -1), c(this, Q, il).call(this, t);
  }, 5e3));
}, da = function() {
  clearTimeout(r(this, xi)), g(this, xi, -1);
}, il = function(t) {
  r(this, Re).notify("error", {
    message: t.message ?? "",
    code: 1,
    error: t
  });
}, c0 = function() {
  var e;
  c(this, Q, rl).call(this, "video", !0);
  const { qualities: t } = r(this, Re);
  (e = r(this, pe)) == null || e.setQualityFor("video", t.selectedIndex, !0);
}, rl = function(t, e) {
  var n;
  (n = r(this, pe)) == null || n.updateSettings({
    streaming: { abr: { autoSwitchBitrate: { [t]: e } } }
  });
}, l0 = function() {
  const { qualities: t } = r(this, Re);
  !r(this, pe) || t.auto || !t.selected || (c(this, Q, rl).call(this, "video", !1), r(this, pe).setQualityFor("video", t.selectedIndex, t.switch === "current"), f5 && (r(this, wi).currentTime = r(this, wi).currentTime));
}, u0 = function() {
  if (!r(this, pe)) return;
  const { audioTracks: t } = r(this, Re), e = r(this, pe).getTracksFor("audio").find(
    (n) => t.selected && t.selected.id === `dash-audio-${n.index}`
  );
  e && r(this, pe).setCurrentTrack(e);
}, ol = function() {
  c(this, Q, da).call(this), g(this, Rn, null), g(this, n6, {});
};
function ha(s) {
  return s instanceof Error ? s : Error(typeof s == "string" ? s : JSON.stringify(s));
}
function En(s, t) {
  if (!s)
    throw Error("Assertion failed.");
}
var O1, Ys, z3, fn, d0, h0, f0, p0;
class ox {
  constructor(t, e, n) {
    C(this, fn);
    C(this, O1);
    C(this, Ys);
    C(this, z3);
    g(this, O1, t), g(this, Ys, e), g(this, z3, n), c(this, fn, d0).call(this);
  }
}
O1 = new WeakMap(), Ys = new WeakMap(), z3 = new WeakMap(), fn = new WeakSet(), d0 = async function() {
  const t = {
    onLoadStart: c(this, fn, h0).bind(this),
    onLoaded: c(this, fn, f0).bind(this),
    onLoadError: c(this, fn, p0).bind(this)
  };
  let e = await cx(r(this, O1), t);
  if (ct(e) && !ie(r(this, O1)) && (e = await ax(r(this, O1), t)), !e) return null;
  if (!window.dashjs.supportsMediaSource()) {
    const n = "[vidstack] `dash.js` is not supported in this environment";
    return r(this, Ys).player.dispatch(new ye("dash-unsupported")), r(this, Ys).notify("error", { message: n, code: 4 }), null;
  }
  return e;
}, h0 = function() {
  r(this, Ys).player.dispatch(new ye("dash-lib-load-start"));
}, f0 = function(t) {
  r(this, Ys).player.dispatch(
    new ye("dash-lib-loaded", {
      detail: t
    })
  ), r(this, z3).call(this, t);
}, p0 = function(t) {
  const e = ha(t);
  r(this, Ys).player.dispatch(
    new ye("dash-lib-load-error", {
      detail: e
    })
  ), r(this, Ys).notify("error", {
    message: e.message,
    code: 4,
    error: e
  });
};
async function ax(s, t = {}) {
  var e, n, i, o, a, l, d;
  if (!ct(s)) {
    if ((e = t.onLoadStart) == null || e.call(t), lx(s))
      return (n = t.onLoaded) == null || n.call(t, s), s;
    if (H7(s)) {
      const h = s.MediaPlayer;
      return (i = t.onLoaded) == null || i.call(t, h), h;
    }
    try {
      const h = (o = await s()) == null ? void 0 : o.default;
      if (H7(h))
        return (a = t.onLoaded) == null || a.call(t, h.MediaPlayer), h.MediaPlayer;
      if (h)
        (l = t.onLoaded) == null || l.call(t, h);
      else
        throw Error(
          ""
        );
      return h;
    } catch (h) {
      (d = t.onLoadError) == null || d.call(t, h);
    }
  }
}
async function cx(s, t = {}) {
  var e, n, i;
  if (ie(s)) {
    (e = t.onLoadStart) == null || e.call(t);
    try {
      if (await Gb(s), !jt(window.dashjs.MediaPlayer))
        throw Error(
          ""
        );
      const o = window.dashjs.MediaPlayer;
      return (n = t.onLoaded) == null || n.call(t, o), o;
    } catch (o) {
      (i = t.onLoadError) == null || i.call(t, o);
    }
  }
}
function lx(s) {
  return s && s.prototype && s.prototype !== Function;
}
function H7(s) {
  return s && "MediaPlayer" in s;
}
const ux = "https://cdn.jsdelivr.net";
var Y3, $s, Si;
class C0 extends z4 {
  constructor() {
    super(...arguments);
    $(this, "$$PROVIDER_TYPE", "DASH");
    C(this, Y3, null);
    C(this, $s, new rx(this.video, this.ctx));
    C(this, Si, `${ux}/npm/dashjs@4.7.4/dist/dash.all.min.js`);
  }
  /**
   * The `dash.js` constructor.
   */
  get ctor() {
    return r(this, Y3);
  }
  /**
   * The current `dash.js` instance.
   */
  get instance() {
    return r(this, $s).instance;
  }
  get type() {
    return "dash";
  }
  get canLiveSync() {
    return !0;
  }
  /**
   * The `dash.js` configuration object.
   *
   * @see {@link https://cdn.dashjs.org/latest/jsdoc/module-Settings.html}
   */
  get config() {
    return r(this, $s).config;
  }
  set config(e) {
    r(this, $s).config = e;
  }
  /**
   * The `dash.js` constructor (supports dynamic imports) or a URL of where it can be found.
   *
   * @defaultValue `https://cdn.jsdelivr.net/npm/dashjs@4.7.4/dist/dash.all.min.js`
   */
  get library() {
    return r(this, Si);
  }
  set library(e) {
    g(this, Si, e);
  }
  preconnect() {
    ie(r(this, Si)) && X6(r(this, Si));
  }
  setup() {
    super.setup(), new ox(r(this, Si), this.ctx, (e) => {
      g(this, Y3, e), r(this, $s).setup(e), this.ctx.notify("provider-setup", this);
      const n = O(this.ctx.$state.source);
      n && this.loadSource(n);
    });
  }
  async loadSource(e, n) {
    if (!ie(e.src)) {
      this.removeSource();
      return;
    }
    this.media.preload = n || "", this.appendSource(e, "application/x-mpegurl"), r(this, $s).loadSource(e), this.currentSrc = e;
  }
  /**
   * The given callback is invoked when a new `dash.js` instance is created and right before it's
   * attached to media.
   */
  onInstance(e) {
    const n = r(this, $s).instance;
    return n && e(n), r(this, $s).onInstance(e);
  }
  destroy() {
    r(this, $s).destroy();
  }
}
Y3 = new WeakMap(), $s = new WeakMap(), Si = new WeakMap(), /**
 * Whether `dash.js` is supported in this environment.
 */
$(C0, "supported", b5());
var dx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  DASHProvider: C0
});
const s2 = class s2 extends Hu {
  constructor() {
    super(...arguments);
    $(this, "name", "dash");
  }
  canPlay(e) {
    return s2.supported && Iu(e);
  }
  async load(e) {
    if (q)
      throw Error("[vidstack] can not load dash provider server-side");
    return new (await Promise.resolve().then(function() {
      return dx;
    })).DASHProvider(this.target, e);
  }
};
$(s2, "supported", b5());
let al = s2;
class hx {
  constructor() {
    $(this, "name", "vimeo");
    $(this, "target");
  }
  preconnect() {
    const t = [
      "https://i.vimeocdn.com",
      "https://f.vimeocdn.com",
      "https://fresnel.vimeocdn.com"
    ];
    for (const e of t)
      X6(e);
  }
  canPlay(t) {
    return ie(t.src) && t.type === "video/vimeo";
  }
  mediaType() {
    return "video";
  }
  async load(t) {
    if (q)
      throw Error("[vidstack] can not load vimeo provider server-side");
    return new (await import("./vidstack-nI3MtI8G-AXp_fcdc.js")).VimeoProvider(this.target, t);
  }
  async loadPoster(t, e, n) {
    const { resolveVimeoVideoId: i, getVimeoVideoInfo: o } = await import("./vidstack-krOAtKMi-B4IZWKdc.js");
    if (!ie(t.src)) return null;
    const { videoId: a, hash: l } = i(t.src);
    return a ? o(a, n, l).then((d) => d ? d.poster : null) : null;
  }
}
class fx {
  constructor() {
    $(this, "name", "youtube");
    $(this, "target");
  }
  preconnect() {
    const t = [
      // Botguard script.
      "https://www.google.com",
      // Posters.
      "https://i.ytimg.com",
      // Ads.
      "https://googleads.g.doubleclick.net",
      "https://static.doubleclick.net"
    ];
    for (const e of t)
      X6(e);
  }
  canPlay(t) {
    return ie(t.src) && t.type === "video/youtube";
  }
  mediaType() {
    return "video";
  }
  async load(t) {
    if (q)
      throw Error("[vidstack] can not load youtube provider server-side");
    return new (await import("./vidstack-BZcJ-w0X-Di_ahMA5.js")).YouTubeProvider(this.target, t);
  }
  async loadPoster(t, e, n) {
    const { findYouTubePoster: i, resolveYouTubeVideoId: o } = await import("./vidstack-Zc3I7oOd-DDsBgkhs.js"), a = ie(t.src) && o(t.src);
    return a ? i(a, n) : null;
  }
}
function z2(s, t) {
  const e = String(s), n = e.length;
  if (n < t) {
    const o = t - n;
    return `${"0".repeat(o)}${s}`;
  }
  return e;
}
function m0(s) {
  const t = Math.trunc(s / 3600), e = Math.trunc(s % 3600 / 60), n = Math.trunc(s % 60), i = Number((s - Math.trunc(s)).toPrecision(3));
  return {
    hours: t,
    minutes: e,
    seconds: n,
    fraction: i
  };
}
function E2(s, { padHrs: t = null, padMins: e = null, showHrs: n = !1, showMs: i = !1 } = {}) {
  const { hours: o, minutes: a, seconds: l, fraction: d } = m0(s), h = t ? z2(o, 2) : o, p = e || Rs(e) && s >= 3600 ? z2(a, 2) : a, f = z2(l, 2), m = i && d > 0 ? `.${String(d).replace(/^0?\./, "")}` : "", y = `${p}:${f}${m}`;
  return o > 0 || n ? `${h}:${y}` : y;
}
function cl(s) {
  const t = [], { hours: e, minutes: n, seconds: i } = m0(s);
  return e > 0 && t.push(`${e} hour`), n > 0 && t.push(`${n} min`), (i > 0 || t.length === 0) && t.push(`${i} sec`), t.join(" ");
}
const Y2 = Symbol(0), px = [
  "autoPlay",
  "canAirPlay",
  "canFullscreen",
  "canGoogleCast",
  "canLoad",
  "canLoadPoster",
  "canPictureInPicture",
  "canPlay",
  "canSeek",
  "ended",
  "fullscreen",
  "isAirPlayConnected",
  "isGoogleCastConnected",
  "live",
  "liveEdge",
  "loop",
  "mediaType",
  "muted",
  "paused",
  "pictureInPicture",
  "playing",
  "playsInline",
  "remotePlaybackState",
  "remotePlaybackType",
  "seeking",
  "started",
  "streamType",
  "viewType",
  "waiting"
], Cx = {
  artist: "",
  artwork: null,
  autoplay: !1,
  autoPlay: !1,
  clipStartTime: 0,
  clipEndTime: 0,
  controls: !1,
  currentTime: 0,
  crossorigin: null,
  crossOrigin: null,
  duration: -1,
  fullscreenOrientation: "landscape",
  googleCast: {},
  load: "visible",
  posterLoad: "visible",
  logLevel: "silent",
  loop: !1,
  muted: !1,
  paused: !0,
  playsinline: !1,
  playsInline: !1,
  playbackRate: 1,
  poster: "",
  preload: "metadata",
  preferNativeHLS: !1,
  src: "",
  title: "",
  controlsDelay: 2e3,
  hideControlsOnMouseLeave: !1,
  viewType: "unknown",
  streamType: "unknown",
  volume: 1,
  liveEdgeTolerance: 10,
  minLiveDVRWindow: 60,
  keyDisabled: !1,
  keyTarget: "player",
  keyShortcuts: Mw,
  storage: null
};
var Q3, D1;
class O7 extends yr {
  constructor(e, n) {
    super();
    C(this, Q3);
    C(this, D1);
    g(this, Q3, e), g(this, D1, n);
  }
  async onAttach(e) {
    if (q) return;
    const n = this.$props[r(this, Q3)]();
    if (n === "eager")
      requestAnimationFrame(r(this, D1));
    else if (n === "idle")
      Yd(r(this, D1));
    else if (n === "visible") {
      let i, o = new IntersectionObserver((a) => {
        this.scope && a[0].isIntersecting && (i == null || i(), i = void 0, r(this, D1).call(this));
      });
      o.observe(e), i = ue(() => o.disconnect());
    }
  }
}
Q3 = new WeakMap(), D1 = new WeakMap();
var X3, Es, n2, g0;
class mx {
  constructor(t, e) {
    C(this, n2);
    C(this, X3);
    C(this, Es);
    g(this, X3, t), g(this, Es, e);
  }
  notify(t, ...e) {
    q || r(this, X3).call(this, new ye(t, {
      detail: e == null ? void 0 : e[0],
      trigger: e == null ? void 0 : e[1]
    }));
  }
  async ready(t, e) {
    if (!q)
      return _6(async () => {
        var re, Ce, se, ne, Ne, j, G;
        r(this, Es);
        const {
          autoPlay: n,
          canPlay: i,
          started: o,
          duration: a,
          seekable: l,
          buffered: d,
          remotePlaybackInfo: h,
          playsInline: p,
          savedState: f,
          source: m
        } = r(this, Es).$state;
        if (i()) return;
        const y = {
          duration: (t == null ? void 0 : t.duration) ?? a(),
          seekable: (t == null ? void 0 : t.seekable) ?? l(),
          buffered: (t == null ? void 0 : t.buffered) ?? d(),
          provider: r(this, Es).$provider()
        };
        this.notify("can-play", y, e), Ns();
        let v = r(this, Es).$provider(), { storage: b, qualities: x } = r(this, Es), { muted: S, volume: L, clipStartTime: k, playbackRate: M } = r(this, Es).$props;
        await ((re = b == null ? void 0 : b.onLoad) == null ? void 0 : re.call(b, m()));
        const H = (Ce = f()) == null ? void 0 : Ce.currentTime, Z = (se = f()) == null ? void 0 : se.paused, D = await (b == null ? void 0 : b.getTime()), P = H ?? D ?? k(), K = Z === !1 || Z !== !0 && !o() && n();
        if (v) {
          v.setVolume(await (b == null ? void 0 : b.getVolume()) ?? L()), v.setMuted(S() || !!await (b == null ? void 0 : b.getMuted()));
          const U = await (b == null ? void 0 : b.getAudioGain()) ?? 1;
          U > 1 && ((Ne = (ne = v.audioGain) == null ? void 0 : ne.setGain) == null || Ne.call(ne, U)), (j = v.setPlaybackRate) == null || j.call(v, await (b == null ? void 0 : b.getPlaybackRate()) ?? M()), (G = v.setPlaysInline) == null || G.call(v, p()), P > 0 && v.setCurrentTime(P);
        }
        const W = await (b == null ? void 0 : b.getVideoQuality());
        if (W && x.length) {
          let U = null, F = 1 / 0;
          for (const Se of x) {
            const We = Math.abs(W.width - Se.width) + Math.abs(W.height - Se.height) + (W.bitrate ? Math.abs(W.bitrate - (Se.bitrate ?? 0)) : 0);
            We < F && (U = Se, F = We);
          }
          U && (U.selected = !0);
        }
        i() && K ? await c(this, n2, g0).call(this, e) : D && D > 0 && this.notify("started", void 0, e), h.set(null);
      });
  }
}
X3 = new WeakMap(), Es = new WeakMap(), n2 = new WeakSet(), g0 = async function(t) {
  const {
    player: e,
    $state: { autoPlaying: n, muted: i }
  } = r(this, Es);
  n.set(!0);
  const o = new ye("auto-play-attempt", { trigger: t });
  try {
    await e.play(o);
  } catch {
  }
};
var $i;
class gx {
  constructor() {
    C(this, $i, /* @__PURE__ */ new Map());
  }
  /**
   * Queue the given `item` under the given `key` to be processed at a later time by calling
   * `serve(key)`.
   */
  enqueue(t, e) {
    r(this, $i).set(t, e);
  }
  /**
   * Process item in queue for the given `key`.
   */
  serve(t) {
    const e = this.peek(t);
    return r(this, $i).delete(t), e;
  }
  /**
   * Peek at item in queue for the given `key`.
   */
  peek(t) {
    return r(this, $i).get(t);
  }
  /**
   * Removes queued item under the given `key`.
   */
  delete(t) {
    r(this, $i).delete(t);
  }
  /**
   * Clear all items in the queue.
   */
  clear() {
    r(this, $i).clear();
  }
}
$i = new WeakMap();
var Ei, i6, Ts, a1, ll, ul;
class y0 {
  constructor() {
    C(this, a1);
    C(this, Ei, !1);
    C(this, i6, Aa());
    C(this, Ts, /* @__PURE__ */ new Map());
  }
  /**
   * The number of callbacks that are currently in queue.
   */
  get size() {
    return r(this, Ts).size;
  }
  /**
   * Whether items in the queue are being served immediately, otherwise they're queued to
   * be processed later.
   */
  get isServing() {
    return r(this, Ei);
  }
  /**
   * Waits for the queue to be flushed (ie: start serving).
   */
  async waitForFlush() {
    r(this, Ei) || await r(this, i6).promise;
  }
  /**
   * Queue the given `callback` to be invoked at a later time by either calling the `serve()` or
   * `start()` methods. If the queue has started serving (i.e., `start()` was already called),
   * then the callback will be invoked immediately.
   *
   * @param key - Uniquely identifies this callback so duplicates are ignored.
   * @param callback - The function to call when this item in the queue is being served.
   */
  enqueue(t, e) {
    if (r(this, Ei)) {
      e();
      return;
    }
    r(this, Ts).delete(t), r(this, Ts).set(t, e);
  }
  /**
   * Invokes the callback with the given `key` in the queue (if it exists).
   */
  serve(t) {
    var e;
    (e = r(this, Ts).get(t)) == null || e(), r(this, Ts).delete(t);
  }
  /**
   * Flush all queued items and start serving future requests immediately until `stop()` is called.
   */
  start() {
    c(this, a1, ll).call(this), g(this, Ei, !0), r(this, Ts).size > 0 && c(this, a1, ll).call(this);
  }
  /**
   * Stop serving requests, they'll be queued until you begin processing again by calling `start()`.
   */
  stop() {
    g(this, Ei, !1);
  }
  /**
   * Stop serving requests, empty the request queue, and release any promises waiting for the
   * queue to flush.
   */
  reset() {
    this.stop(), r(this, Ts).clear(), c(this, a1, ul).call(this);
  }
}
Ei = new WeakMap(), i6 = new WeakMap(), Ts = new WeakMap(), a1 = new WeakSet(), ll = function() {
  for (const t of r(this, Ts).keys()) this.serve(t);
  c(this, a1, ul).call(this);
}, ul = function() {
  r(this, i6).resolve(), g(this, i6, Aa());
};
var Hn, ae, On, _1, Dn, Fe, Ti, me, v0, b0, w0, dl, r6, hl, fl, x0, S0, $0, E0, T0, L0, F1, P0, pl, Cl, vx;
class yx extends yr {
  constructor(e, n, i) {
    super();
    C(this, me);
    C(this, Hn);
    C(this, ae);
    C(this, On);
    $(this, "controls");
    C(this, _1);
    C(this, Dn);
    C(this, Fe);
    C(this, Ti, new y0());
    C(this, r6, !1);
    C(this, F1);
    g(this, Hn, e), g(this, ae, n), g(this, On, i), g(this, Fe, i.$provider), this.controls = new Rw(), g(this, _1, new Hw()), g(this, Dn, new _a());
  }
  onAttach() {
    this.listen("fullscreen-change", c(this, me, P0).bind(this));
  }
  onConnect(e) {
    const n = Object.getOwnPropertyNames(Object.getPrototypeOf(this)), i = new Pe(e), o = c(this, me, w0).bind(this);
    for (const a of n)
      a.startsWith("media-") && i.add(a, o);
    c(this, me, v0).call(this), E(c(this, me, b0).bind(this)), E(c(this, me, x0).bind(this)), E(c(this, me, S0).bind(this)), E(c(this, me, $0).bind(this)), E(c(this, me, E0).bind(this)), E(c(this, me, T0).bind(this)), E(c(this, me, L0).bind(this));
  }
  onDestroy() {
    try {
      const e = this.createEvent("destroy"), { pictureInPicture: n, fullscreen: i } = this.$state;
      i() && this.exitFullscreen("prefer-media", e), n() && this.exitPictureInPicture(e);
    } catch {
    }
    r(this, Ti).reset();
  }
  async play(e) {
    if (q) return;
    const { canPlay: n, paused: i, autoPlaying: o } = this.$state;
    if (c(this, me, dl).call(this, e) || !O(i)) return;
    e && r(this, ae).queue.enqueue("media-play-request", e);
    const a = O(o);
    try {
      const l = O(r(this, Fe));
      return Q2(l, O(n)), await l.play();
    } catch (l) {
      const d = this.createEvent("play-fail", {
        detail: ha(l),
        trigger: e
      });
      throw d.autoPlay = a, r(this, Hn).handle(d), l;
    }
  }
  async pause(e) {
    if (q) return;
    const { canPlay: n, paused: i } = this.$state;
    if (!O(i)) {
      e && r(this, ae).queue.enqueue("media-pause-request", e);
      try {
        const o = O(r(this, Fe));
        return Q2(o, O(n)), await o.pause();
      } catch (o) {
        throw r(this, ae).queue.delete("media-pause-request"), o;
      }
    }
  }
  setAudioGain(e, n) {
    const { audioGain: i, canSetAudioGain: o } = this.$state;
    if (i() === e) return;
    const a = r(this, Fe).call(this);
    if (!(a != null && a.audioGain) || !o())
      throw Error("[vidstack] audio gain api not available");
    n && r(this, ae).queue.enqueue("media-audio-gain-change-request", n), a.audioGain.setGain(e);
  }
  seekToLiveEdge(e) {
    if (q) return;
    const { canPlay: n, live: i, liveEdge: o, canSeek: a, liveSyncPosition: l, seekableEnd: d, userBehindLiveEdge: h } = this.$state;
    if (h.set(!1), O(() => !i() || o() || !a())) return;
    const p = O(r(this, Fe));
    Q2(p, O(n)), e && r(this, ae).queue.enqueue("media-seek-request", e);
    const f = d() - 2;
    p.setCurrentTime(Math.min(f, l() ?? f));
  }
  async enterFullscreen(e = "prefer-media", n) {
    if (q) return;
    const i = c(this, me, hl).call(this, e);
    if (D7(e, i), !i.active)
      return O(this.$state.pictureInPicture) && (g(this, r6, !0), await this.exitPictureInPicture(n)), n && r(this, ae).queue.enqueue("media-enter-fullscreen-request", n), i.enter();
  }
  async exitFullscreen(e = "prefer-media", n) {
    if (q) return;
    const i = c(this, me, hl).call(this, e);
    if (D7(e, i), !!i.active) {
      n && r(this, ae).queue.enqueue("media-exit-fullscreen-request", n);
      try {
        const o = await i.exit();
        return r(this, r6) && O(this.$state.canPictureInPicture) && await this.enterPictureInPicture(), o;
      } finally {
        g(this, r6, !1);
      }
    }
  }
  async enterPictureInPicture(e) {
    if (!q && (c(this, me, fl).call(this), !this.$state.pictureInPicture()))
      return e && r(this, ae).queue.enqueue("media-enter-pip-request", e), await r(this, Fe).call(this).pictureInPicture.enter();
  }
  async exitPictureInPicture(e) {
    if (!q && (c(this, me, fl).call(this), !!this.$state.pictureInPicture()))
      return e && r(this, ae).queue.enqueue("media-exit-pip-request", e), await r(this, Fe).call(this).pictureInPicture.exit();
  }
  async "media-airplay-request"(e) {
    try {
      await this.requestAirPlay(e);
    } catch {
    }
  }
  async requestAirPlay(e) {
    var n;
    try {
      const i = (n = r(this, Fe).call(this)) == null ? void 0 : n.airPlay;
      if (!(i != null && i.supported))
        throw Error("No AirPlay adapter.");
      return e && r(this, ae).queue.enqueue("media-airplay-request", e), await i.prompt();
    } catch (i) {
      throw r(this, ae).queue.delete("media-airplay-request"), i;
    }
  }
  async "media-google-cast-request"(e) {
    try {
      await this.requestGoogleCast(e);
    } catch {
    }
  }
  async requestGoogleCast(e) {
    try {
      const { canGoogleCast: n } = this.$state;
      if (!O(n)) {
        const o = Error(
          "Cast not available."
        );
        throw o.code = "CAST_NOT_AVAILABLE", o;
      }
      if (X6("https://www.gstatic.com"), !r(this, F1)) {
        const o = await import("./vidstack-BEzgE0Fx-BYg_qgK1.js").then(function(a) {
          return a.loader;
        });
        g(this, F1, new o.GoogleCastLoader());
      }
      await r(this, F1).prompt(r(this, On)), e && r(this, ae).queue.enqueue("media-google-cast-request", e);
      const i = O(this.$state.remotePlaybackState) !== "disconnected";
      i && this.$state.savedState.set({
        paused: O(this.$state.paused),
        currentTime: O(this.$state.currentTime)
      }), this.$state.remotePlaybackLoader.set(i ? r(this, F1) : null);
    } catch (n) {
      throw r(this, ae).queue.delete("media-google-cast-request"), n;
    }
  }
  "media-clip-start-change-request"(e) {
    const { clipStartTime: n } = this.$state;
    n.set(e.detail);
  }
  "media-clip-end-change-request"(e) {
    const { clipEndTime: n } = this.$state;
    n.set(e.detail), this.dispatch("duration-change", {
      detail: e.detail,
      trigger: e
    });
  }
  "media-duration-change-request"(e) {
    const { providedDuration: n, clipEndTime: i } = this.$state;
    n.set(e.detail), i() <= 0 && this.dispatch("duration-change", {
      detail: e.detail,
      trigger: e
    });
  }
  "media-audio-track-change-request"(e) {
    const { logger: n, audioTracks: i } = r(this, On);
    if (i.readonly)
      return;
    const o = e.detail, a = i[o];
    if (a) {
      const l = e.type;
      r(this, ae).queue.enqueue(l, e), a.selected = !0;
    }
  }
  async "media-enter-fullscreen-request"(e) {
    try {
      await this.enterFullscreen(e.detail, e);
    } catch (n) {
      c(this, me, pl).call(this, n, e);
    }
  }
  async "media-exit-fullscreen-request"(e) {
    try {
      await this.exitFullscreen(e.detail, e);
    } catch (n) {
      c(this, me, pl).call(this, n, e);
    }
  }
  async "media-orientation-lock-request"(e) {
    const n = e.type;
    try {
      r(this, ae).queue.enqueue(n, e), await r(this, Dn).lock(e.detail);
    } catch {
      r(this, ae).queue.delete(n);
    }
  }
  async "media-orientation-unlock-request"(e) {
    const n = e.type;
    try {
      r(this, ae).queue.enqueue(n, e), await r(this, Dn).unlock();
    } catch {
      r(this, ae).queue.delete(n);
    }
  }
  async "media-enter-pip-request"(e) {
    try {
      await this.enterPictureInPicture(e);
    } catch (n) {
      c(this, me, Cl).call(this, n, e);
    }
  }
  async "media-exit-pip-request"(e) {
    try {
      await this.exitPictureInPicture(e);
    } catch (n) {
      c(this, me, Cl).call(this, n, e);
    }
  }
  "media-live-edge-request"(e) {
    const { live: n, liveEdge: i, canSeek: o } = this.$state;
    if (!(!n() || i() || !o())) {
      r(this, ae).queue.enqueue("media-seek-request", e);
      try {
        this.seekToLiveEdge();
      } catch {
        r(this, ae).queue.delete("media-seek-request");
      }
    }
  }
  async "media-loop-request"(e) {
    try {
      r(this, ae).looping = !0, r(this, ae).replaying = !0, await this.play(e);
    } catch {
      r(this, ae).looping = !1;
    }
  }
  "media-user-loop-change-request"(e) {
    this.$state.userPrefersLoop.set(e.detail);
  }
  async "media-pause-request"(e) {
    if (!this.$state.paused())
      try {
        await this.pause(e);
      } catch {
      }
  }
  async "media-play-request"(e) {
    if (this.$state.paused())
      try {
        await this.play(e);
      } catch {
      }
  }
  "media-rate-change-request"(e) {
    const { playbackRate: n, canSetPlaybackRate: i } = this.$state;
    if (n() === e.detail || !i()) return;
    const o = r(this, Fe).call(this);
    o != null && o.setPlaybackRate && (r(this, ae).queue.enqueue("media-rate-change-request", e), o.setPlaybackRate(e.detail));
  }
  "media-audio-gain-change-request"(e) {
    try {
      this.setAudioGain(e.detail, e);
    } catch {
    }
  }
  "media-quality-change-request"(e) {
    var l, d;
    const { qualities: n, storage: i, logger: o } = r(this, On);
    if (n.readonly)
      return;
    r(this, ae).queue.enqueue("media-quality-change-request", e);
    const a = e.detail;
    if (a < 0)
      n.autoSelect(e), e.isOriginTrusted && ((l = i == null ? void 0 : i.setVideoQuality) == null || l.call(i, null));
    else {
      const h = n[a];
      h && (h.selected = !0, e.isOriginTrusted && ((d = i == null ? void 0 : i.setVideoQuality) == null || d.call(i, {
        id: h.id,
        width: h.width,
        height: h.height,
        bitrate: h.bitrate
      })));
    }
  }
  "media-pause-controls-request"(e) {
    const n = e.type;
    r(this, ae).queue.enqueue(n, e), this.controls.pause(e);
  }
  "media-resume-controls-request"(e) {
    const n = e.type;
    r(this, ae).queue.enqueue(n, e), this.controls.resume(e);
  }
  "media-seek-request"(e) {
    const { canSeek: n, ended: i, live: o, seekableEnd: a, userBehindLiveEdge: l } = this.$state, d = e.detail;
    i() && (r(this, ae).replaying = !0);
    const h = e.type;
    r(this, ae).seeking = !1, r(this, ae).queue.delete(h);
    const p = E5(d, this.$state);
    !Number.isFinite(p) || !n() || (r(this, ae).queue.enqueue(h, e), r(this, Fe).call(this).setCurrentTime(p), o() && e.isOriginTrusted && Math.abs(a() - p) >= 2 && l.set(!0));
  }
  "media-seeking-request"(e) {
    const n = e.type;
    r(this, ae).queue.enqueue(n, e), this.$state.seeking.set(!0), r(this, ae).seeking = !0;
  }
  "media-start-loading"(e) {
    if (this.$state.canLoad()) return;
    const n = e.type;
    r(this, ae).queue.enqueue(n, e), r(this, Hn).handle(this.createEvent("can-load"));
  }
  "media-poster-start-loading"(e) {
    if (this.$state.canLoadPoster()) return;
    const n = e.type;
    r(this, ae).queue.enqueue(n, e), r(this, Hn).handle(this.createEvent("can-load-poster"));
  }
  "media-text-track-change-request"(e) {
    const { index: n, mode: i } = e.detail, o = r(this, On).textTracks[n];
    if (o) {
      const a = e.type;
      r(this, ae).queue.enqueue(a, e), o.setMode(i, e);
    }
  }
  "media-mute-request"(e) {
    if (this.$state.muted()) return;
    const n = e.type;
    r(this, ae).queue.enqueue(n, e), r(this, Fe).call(this).setMuted(!0);
  }
  "media-unmute-request"(e) {
    const { muted: n, volume: i } = this.$state;
    if (!n()) return;
    const o = e.type;
    r(this, ae).queue.enqueue(o, e), r(this, On).$provider().setMuted(!1), i() === 0 && (r(this, ae).queue.enqueue(o, e), r(this, Fe).call(this).setVolume(0.25));
  }
  "media-volume-change-request"(e) {
    const { muted: n, volume: i } = this.$state, o = e.detail;
    if (i() === o) return;
    const a = e.type;
    r(this, ae).queue.enqueue(a, e), r(this, Fe).call(this).setVolume(o), o > 0 && n() && (r(this, ae).queue.enqueue(a, e), r(this, Fe).call(this).setMuted(!1));
  }
}
Hn = new WeakMap(), ae = new WeakMap(), On = new WeakMap(), _1 = new WeakMap(), Dn = new WeakMap(), Fe = new WeakMap(), Ti = new WeakMap(), me = new WeakSet(), v0 = function() {
  const { load: e } = this.$props, { canLoad: n } = this.$state;
  if (e() !== "play" || n()) return;
  const i = this.listen("media-play-request", (o) => {
    c(this, me, dl).call(this, o), i();
  });
}, b0 = function() {
  const e = r(this, Fe).call(this), n = this.$state.canPlay();
  return e && n && r(this, Ti).start(), () => {
    r(this, Ti).stop();
  };
}, w0 = function(e) {
  e.stopPropagation(), !e.defaultPrevented && this[e.type] && (O(r(this, Fe)) ? this[e.type](e) : r(this, Ti).enqueue(e.type, () => {
    O(r(this, Fe)) && this[e.type](e);
  }));
}, dl = function(e) {
  const { load: n } = this.$props, { canLoad: i } = this.$state;
  if (n() === "play" && !i()) {
    const o = this.createEvent("media-start-loading", { trigger: e });
    return this.dispatchEvent(o), r(this, Ti).enqueue("media-play-request", async () => {
      try {
        await this.play(o);
      } catch {
      }
    }), !0;
  }
  return !1;
}, r6 = new WeakMap(), hl = function(e) {
  const n = O(r(this, Fe));
  return e === "prefer-media" && r(this, _1).supported || e === "media" ? r(this, _1) : n == null ? void 0 : n.fullscreen;
}, fl = function() {
  if (!this.$state.canPictureInPicture())
    throw Error(
      "[vidstack] no pip support"
    );
}, x0 = function() {
  this.controls.defaultDelay = this.$props.controlsDelay();
}, S0 = function() {
  var i, o;
  const { canSetAudioGain: e } = this.$state, n = !!((o = (i = r(this, Fe).call(this)) == null ? void 0 : i.audioGain) != null && o.supported);
  e.set(n);
}, $0 = function() {
  var i, o;
  const { canAirPlay: e } = this.$state, n = !!((o = (i = r(this, Fe).call(this)) == null ? void 0 : i.airPlay) != null && o.supported);
  e.set(n);
}, E0 = function() {
  const { canGoogleCast: e, source: n } = this.$state, i = f5 && !Mu && jb(n());
  e.set(i);
}, T0 = function() {
  var i, o;
  const { canFullscreen: e } = this.$state, n = r(this, _1).supported || !!((o = (i = r(this, Fe).call(this)) == null ? void 0 : i.fullscreen) != null && o.supported);
  e.set(n);
}, L0 = function() {
  var i, o;
  const { canPictureInPicture: e } = this.$state, n = !!((o = (i = r(this, Fe).call(this)) == null ? void 0 : i.pictureInPicture) != null && o.supported);
  e.set(n);
}, F1 = new WeakMap(), P0 = async function(e) {
  const n = O(this.$props.fullscreenOrientation), i = e.detail;
  if (!(ct(n) || n === "none" || !r(this, Dn).supported))
    if (i) {
      if (r(this, Dn).locked) return;
      this.dispatch("media-orientation-lock-request", {
        detail: n,
        trigger: e
      });
    } else r(this, Dn).locked && this.dispatch("media-orientation-unlock-request", {
      trigger: e
    });
}, pl = function(e, n) {
  r(this, Hn).handle(
    this.createEvent("fullscreen-error", {
      detail: ha(e)
    })
  );
}, Cl = function(e, n) {
  r(this, Hn).handle(
    this.createEvent("picture-in-picture-error", {
      detail: ha(e)
    })
  );
}, vx = function(e, n, i) {
};
function Q2(s, t) {
  if (!(s && t))
    throw Error(
      "[vidstack] media not ready"
    );
}
function D7(s, t) {
  if (!(t != null && t.supported))
    throw Error(
      "[vidstack] no fullscreen support"
    );
}
class bx {
  constructor() {
    $(this, "seeking", !1);
    $(this, "looping", !1);
    $(this, "replaying", !1);
    $(this, "queue", new gx());
  }
}
const wx = /* @__PURE__ */ new Set([
  "auto-play",
  "auto-play-fail",
  "can-load",
  "sources-change",
  "source-change",
  "load-start",
  "abort",
  "error",
  "loaded-metadata",
  "loaded-data",
  "can-play",
  "play",
  "play-fail",
  "pause",
  "playing",
  "seeking",
  "seeked",
  "waiting"
]);
var Et, we, He, q1, o6, Z1, j1, _n, Li, R, M0, k0, ui, Ue, I0, V0, A0, fa, ml, gl, N0, yl, R0, H0, a6, vl, pa, O0, D0, _0, bl, wl, xl, F0, Sl, q0, c6, Z0, $l;
class xx extends yr {
  constructor(e, n) {
    super();
    C(this, R);
    C(this, Et);
    C(this, we);
    C(this, He, /* @__PURE__ */ new Map());
    C(this, q1, !1);
    C(this, o6, []);
    C(this, Z1, [-1, -1]);
    C(this, j1, !1);
    C(this, _n);
    C(this, Li, !1);
    C(this, a6, null);
    $(this, "seeking", u1(
      (e) => {
        const { seeking: n, realCurrentTime: i, paused: o } = this.$state;
        n.set(!0), i.set(e.detail), c(this, R, Ue).call(this, "media-seeking-request", e), o() && (g(this, _n, e), r(this, c6).call(this)), g(this, Z1, [-1, -1]);
      },
      150,
      { leading: !0 }
    ));
    C(this, c6, w2(() => {
      if (!r(this, _n)) return;
      g(this, j1, !0);
      const { waiting: e, playing: n } = this.$state;
      e.set(!0), n.set(!1);
      const i = this.createEvent("waiting", { trigger: r(this, _n) });
      r(this, He).set("waiting", i), this.dispatch(i), g(this, _n, void 0), g(this, j1, !1);
    }, 300));
    g(this, Et, e), g(this, we, n);
  }
  onAttach(e) {
    e.setAttribute("aria-busy", "true"), new Pe(this).add("fullscreen-change", this["fullscreen-change"].bind(this)).add("fullscreen-error", this["fullscreen-error"].bind(this)).add("orientation-change", this["orientation-change"].bind(this));
  }
  onConnect(e) {
    E(c(this, R, D0).bind(this)), c(this, R, I0).call(this), c(this, R, V0).call(this), c(this, R, A0).call(this), c(this, R, M0).call(this), ue(c(this, R, k0).bind(this));
  }
  onDestroy() {
    const { audioTracks: e, qualities: n, textTracks: i } = r(this, we);
    e[fe.reset](), n[fe.reset](), i[fe.reset](), c(this, R, pa).call(this);
  }
  handle(e) {
    if (!this.scope) return;
    const n = e.type;
    _6(() => {
      var i;
      return (i = this[e.type]) == null ? void 0 : i.call(this, e);
    }), q || (wx.has(n) && r(this, He).set(n, e), this.dispatch(e));
  }
  "provider-change"(e) {
    var o, a;
    const n = r(this, we).$provider(), i = e.detail;
    (n == null ? void 0 : n.type) !== (i == null ? void 0 : i.type) && ((o = n == null ? void 0 : n.destroy) == null || o.call(n), (a = n == null ? void 0 : n.scope) == null || a.dispose(), r(this, we).$provider.set(e.detail), n && e.detail === null && c(this, R, bl).call(this, e));
  }
  "provider-loader-change"(e) {
  }
  "auto-play"(e) {
    this.$state.autoPlayError.set(null);
  }
  "auto-play-fail"(e) {
    this.$state.autoPlayError.set(e.detail), c(this, R, ui).call(this);
  }
  "can-load"(e) {
    this.$state.canLoad.set(!0), r(this, He).set("can-load", e), r(this, we).textTracks[ce.canLoad](), c(this, R, Ue).call(this, "media-start-loading", e);
  }
  "can-load-poster"(e) {
    this.$state.canLoadPoster.set(!0), r(this, He).set("can-load-poster", e), c(this, R, Ue).call(this, "media-poster-start-loading", e);
  }
  "media-type-change"(e) {
    const n = r(this, He).get("source-change");
    n && e.triggers.add(n);
    const i = this.$state.viewType();
    this.$state.mediaType.set(e.detail);
    const o = this.$state.providedViewType(), a = o === "unknown" ? e.detail : o;
    i !== a && (q ? this.$state.inferredViewType.set(a) : setTimeout(() => {
      requestAnimationFrame(() => {
        this.scope && (this.$state.inferredViewType.set(e.detail), this.dispatch("view-type-change", {
          detail: a,
          trigger: e
        }));
      });
    }, 0));
  }
  "stream-type-change"(e) {
    const n = r(this, He).get("source-change");
    n && e.triggers.add(n);
    const { streamType: i, inferredStreamType: o } = this.$state;
    o.set(e.detail), e.detail = i();
  }
  "rate-change"(e) {
    var o;
    const { storage: n } = r(this, we), { canPlay: i } = this.$state;
    this.$state.playbackRate.set(e.detail), c(this, R, Ue).call(this, "media-rate-change-request", e), i() && ((o = n == null ? void 0 : n.setPlaybackRate) == null || o.call(n, e.detail));
  }
  "remote-playback-change"(e) {
    const { remotePlaybackState: n, remotePlaybackType: i } = this.$state, { type: o, state: a } = e.detail, l = a === "connected";
    i.set(o), n.set(a);
    const d = o === "airplay" ? "media-airplay-request" : "media-google-cast-request";
    if (l)
      c(this, R, Ue).call(this, d, e);
    else {
      const h = r(this, Et).queue.peek(d);
      h && (e.request = h, e.triggers.add(h));
    }
  }
  "sources-change"(e) {
    const n = this.$state.sources(), i = e.detail;
    this.$state.sources.set(i), c(this, R, _0).call(this, n, i, e);
  }
  "source-change"(e) {
    var i, o;
    e.isQualityChange = ((i = e.originEvent) == null ? void 0 : i.type) === "quality-change";
    const n = e.detail;
    c(this, R, bl).call(this, e, e.isQualityChange), r(this, He).set(e.type, e), this.$state.source.set(n), (o = this.el) == null || o.setAttribute("aria-busy", "true");
  }
  abort(e) {
    const n = r(this, He).get("source-change");
    n && e.triggers.add(n);
    const i = r(this, He).get("can-load");
    i && !e.triggers.hasType("can-load") && e.triggers.add(i);
  }
  "load-start"(e) {
    const n = r(this, He).get("source-change");
    n && e.triggers.add(n);
  }
  error(e) {
    this.$state.error.set(e.detail);
    const n = r(this, He).get("abort");
    n && e.triggers.add(n);
  }
  "loaded-metadata"(e) {
    const n = r(this, He).get("load-start");
    n && e.triggers.add(n);
  }
  "loaded-data"(e) {
    const n = r(this, He).get("load-start");
    n && e.triggers.add(n);
  }
  "can-play"(e) {
    var i;
    const n = r(this, He).get("loaded-metadata");
    n && e.triggers.add(n), c(this, R, wl).call(this, e.detail), (i = this.el) == null || i.setAttribute("aria-busy", "false");
  }
  "can-play-through"(e) {
    c(this, R, wl).call(this, e.detail);
    const n = r(this, He).get("can-play");
    n && e.triggers.add(n);
  }
  "duration-change"(e) {
    const { live: n, intrinsicDuration: i, providedDuration: o, clipEndTime: a, ended: l } = this.$state, d = e.detail;
    if (!n()) {
      const h = Number.isNaN(d) ? 0 : d;
      i.set(h), l() && c(this, R, Sl).call(this, e);
    }
    (o() > 0 || a() > 0) && e.stopImmediatePropagation();
  }
  progress(e) {
    const { buffered: n, seekable: i } = this.$state, { buffered: o, seekable: a } = e.detail, l = v1(o), d = o.length !== n().length, h = l !== v1(n()), p = v1(a), f = a.length !== i().length, m = p !== v1(i());
    (d || h) && n.set(o), (f || m) && i.set(a);
  }
  play(e) {
    const {
      paused: n,
      autoPlayError: i,
      ended: o,
      autoPlaying: a,
      playsInline: l,
      pointer: d,
      muted: h,
      viewType: p,
      live: f,
      userBehindLiveEdge: m
    } = this.$state;
    if (c(this, R, xl).call(this), !n()) {
      e.stopImmediatePropagation();
      return;
    }
    e.autoPlay = a();
    const y = r(this, He).get("waiting");
    y && e.triggers.add(y), c(this, R, Ue).call(this, "media-play-request", e), r(this, He).set("play", e), n.set(!1), i.set(null), e.autoPlay && (this.handle(
      this.createEvent("auto-play", {
        detail: { muted: h() },
        trigger: e
      })
    ), a.set(!1)), (o() || r(this, Et).replaying) && (r(this, Et).replaying = !1, o.set(!1), this.handle(this.createEvent("replay", { trigger: e }))), !l() && p() === "video" && d() === "coarse" && r(this, we).remote.enterFullscreen("prefer-media", e), f() && !m() && r(this, we).remote.seekToLiveEdge(e);
  }
  "play-fail"(e) {
    const { muted: n, autoPlaying: i } = this.$state, o = r(this, He).get("play");
    o && e.triggers.add(o), c(this, R, Ue).call(this, "media-play-request", e);
    const { paused: a, playing: l } = this.$state;
    a.set(!0), l.set(!1), c(this, R, ui).call(this), r(this, He).set("play-fail", e), e.autoPlay && (this.handle(
      this.createEvent("auto-play-fail", {
        detail: {
          muted: n(),
          error: e.detail
        },
        trigger: e
      })
    ), i.set(!1));
  }
  playing(e) {
    const n = r(this, He).get("play"), i = r(this, He).get("seeked");
    n ? e.triggers.add(n) : i && e.triggers.add(i), setTimeout(() => c(this, R, ui).call(this), 0);
    const {
      paused: o,
      playing: a,
      live: l,
      liveSyncPosition: d,
      seekableEnd: h,
      started: p,
      currentTime: f,
      seeking: m,
      ended: y
    } = this.$state;
    if (o.set(!1), a.set(!0), m.set(!1), y.set(!1), r(this, Et).looping) {
      r(this, Et).looping = !1;
      return;
    }
    if (l() && !p() && f() === 0) {
      const v = d() ?? h() - 2;
      Number.isFinite(v) && r(this, we).$provider().setCurrentTime(v);
    }
    this.started(e);
  }
  started(e) {
    const { started: n } = this.$state;
    n() || (n.set(!0), this.handle(this.createEvent("started", { trigger: e })));
  }
  pause(e) {
    var a;
    (a = this.el) != null && a.isConnected || g(this, Li, !0), c(this, R, Ue).call(this, "media-pause-request", e);
    const n = r(this, He).get("seeked");
    n && e.triggers.add(n);
    const { paused: i, playing: o } = this.$state;
    i.set(!0), o.set(!1), r(this, q1) && setTimeout(() => {
      this.handle(this.createEvent("end", { trigger: e })), g(this, q1, !1);
    }, 0), c(this, R, ui).call(this);
  }
  "time-change"(e) {
    if (r(this, Et).looping) {
      e.stopImmediatePropagation();
      return;
    }
    let { waiting: n, played: i, clipEndTime: o, realCurrentTime: a, currentTime: l } = this.$state, d = e.detail, h = o();
    a.set(d), c(this, R, F0).call(this), n.set(!1);
    for (const p of r(this, we).textTracks)
      p[ce.updateActiveCues](d, e);
    h > 0 && d >= h && (g(this, q1, !0), this.dispatch("media-pause-request", { trigger: e })), c(this, R, q0).call(this), this.dispatch("time-update", {
      detail: { currentTime: l(), played: i() },
      trigger: e
    });
  }
  "audio-gain-change"(e) {
    var a;
    const { storage: n } = r(this, we), { canPlay: i, audioGain: o } = this.$state;
    o.set(e.detail), c(this, R, Ue).call(this, "media-audio-gain-change-request", e), i() && ((a = n == null ? void 0 : n.setAudioGain) == null || a.call(n, o()));
  }
  "volume-change"(e) {
    var d, h;
    const { storage: n } = r(this, we), { volume: i, muted: o, canPlay: a } = this.$state, l = e.detail;
    i.set(l.volume), o.set(l.muted || l.volume === 0), c(this, R, Ue).call(this, "media-volume-change-request", e), c(this, R, Ue).call(this, l.muted ? "media-mute-request" : "media-unmute-request", e), a() && ((d = n == null ? void 0 : n.setVolume) == null || d.call(n, i()), (h = n == null ? void 0 : n.setMuted) == null || h.call(n, o()));
  }
  seeked(e) {
    const { seeking: n, currentTime: i, realCurrentTime: o, paused: a, seekableEnd: l, ended: d, live: h } = this.$state;
    if (r(this, Et).seeking)
      n.set(!0), e.stopImmediatePropagation();
    else if (n()) {
      const p = r(this, He).get("waiting");
      p && e.triggers.add(p);
      const f = r(this, He).get("seeking");
      f && !e.triggers.has(f) && e.triggers.add(f), a() && c(this, R, $l).call(this), n.set(!1), o.set(e.detail), c(this, R, Ue).call(this, "media-seek-request", e);
      const m = e == null ? void 0 : e.originEvent;
      m != null && m.isTrusted && !(m instanceof MessageEvent) && !/seek/.test(m.type) && this.started(e);
    }
    h() || (Math.floor(i()) !== Math.floor(l()) ? d.set(!1) : this.end(e));
  }
  waiting(e) {
    r(this, j1) || r(this, Et).seeking || (e.stopImmediatePropagation(), g(this, _n, e), r(this, c6).call(this));
  }
  end(e) {
    const { loop: n, ended: i } = this.$state;
    if (!(!n() && i())) {
      if (n()) {
        setTimeout(() => {
          requestAnimationFrame(() => {
            c(this, R, xl).call(this, e), this.dispatch("media-loop-request", { trigger: e });
          });
        }, 10);
        return;
      }
      setTimeout(() => c(this, R, Z0).call(this, e), 0);
    }
  }
  "fullscreen-change"(e) {
    const n = e.detail;
    this.$state.fullscreen.set(n), c(this, R, Ue).call(this, n ? "media-enter-fullscreen-request" : "media-exit-fullscreen-request", e);
  }
  "fullscreen-error"(e) {
    c(this, R, Ue).call(this, "media-enter-fullscreen-request", e), c(this, R, Ue).call(this, "media-exit-fullscreen-request", e);
  }
  "orientation-change"(e) {
    const n = e.detail.lock;
    c(this, R, Ue).call(this, n ? "media-orientation-lock-request" : "media-orientation-unlock-request", e);
  }
  "picture-in-picture-change"(e) {
    const n = e.detail;
    this.$state.pictureInPicture.set(n), c(this, R, Ue).call(this, n ? "media-enter-pip-request" : "media-exit-pip-request", e);
  }
  "picture-in-picture-error"(e) {
    c(this, R, Ue).call(this, "media-enter-pip-request", e), c(this, R, Ue).call(this, "media-exit-pip-request", e);
  }
  "title-change"(e) {
    e.trigger && (e.stopImmediatePropagation(), this.$state.inferredTitle.set(e.detail));
  }
  "poster-change"(e) {
    e.trigger && (e.stopImmediatePropagation(), this.$state.inferredPoster.set(e.detail));
  }
}
Et = new WeakMap(), we = new WeakMap(), He = new WeakMap(), q1 = new WeakMap(), o6 = new WeakMap(), Z1 = new WeakMap(), j1 = new WeakMap(), _n = new WeakMap(), Li = new WeakMap(), R = new WeakSet(), M0 = function() {
  r(this, Li) && (requestAnimationFrame(() => {
    this.scope && r(this, we).remote.play(new ye("dom-connect"));
  }), g(this, Li, !1));
}, k0 = function() {
  var e;
  r(this, Li) || (g(this, Li, !this.$state.paused()), (e = r(this, we).$provider()) == null || e.pause());
}, ui = function() {
  c(this, R, $l).call(this), g(this, q1, !1), r(this, Et).replaying = !1, r(this, Et).looping = !1, g(this, j1, !1), g(this, _n, void 0), r(this, He).clear();
}, Ue = function(e, n) {
  const i = r(this, Et).queue.serve(e);
  i && (n.request = i, n.triggers.add(i));
}, I0 = function() {
  c(this, R, fa).call(this), c(this, R, ml).call(this);
  const e = r(this, we).textTracks;
  new Pe(e).add("add", c(this, R, fa).bind(this)).add("remove", c(this, R, fa).bind(this)).add("mode-change", c(this, R, ml).bind(this));
}, V0 = function() {
  const e = r(this, we).qualities;
  new Pe(e).add("add", c(this, R, yl).bind(this)).add("remove", c(this, R, yl).bind(this)).add("change", c(this, R, R0).bind(this)).add("auto-change", c(this, R, H0).bind(this)).add("readonly-change", c(this, R, O0).bind(this));
}, A0 = function() {
  const e = r(this, we).audioTracks;
  new Pe(e).add("add", c(this, R, gl).bind(this)).add("remove", c(this, R, gl).bind(this)).add("change", c(this, R, N0).bind(this));
}, fa = function(e) {
  const { textTracks: n } = this.$state;
  n.set(r(this, we).textTracks.toArray()), this.dispatch("text-tracks-change", {
    detail: n(),
    trigger: e
  });
}, ml = function(e) {
  e && c(this, R, Ue).call(this, "media-text-track-change-request", e);
  const n = r(this, we).textTracks.selected, { textTrack: i } = this.$state;
  i() !== n && (i.set(n), this.dispatch("text-track-change", {
    detail: n,
    trigger: e
  }));
}, gl = function(e) {
  const { audioTracks: n } = this.$state;
  n.set(r(this, we).audioTracks.toArray()), this.dispatch("audio-tracks-change", {
    detail: n(),
    trigger: e
  });
}, N0 = function(e) {
  const { audioTrack: n } = this.$state;
  n.set(r(this, we).audioTracks.selected), e && c(this, R, Ue).call(this, "media-audio-track-change-request", e), this.dispatch("audio-track-change", {
    detail: n(),
    trigger: e
  });
}, yl = function(e) {
  const { qualities: n } = this.$state;
  n.set(r(this, we).qualities.toArray()), this.dispatch("qualities-change", {
    detail: n(),
    trigger: e
  });
}, R0 = function(e) {
  const { quality: n } = this.$state;
  n.set(r(this, we).qualities.selected), e && c(this, R, Ue).call(this, "media-quality-change-request", e), this.dispatch("quality-change", {
    detail: n(),
    trigger: e
  });
}, H0 = function() {
  const { qualities: e } = r(this, we), n = e.auto;
  this.$state.autoQuality.set(n), n || c(this, R, pa).call(this);
}, a6 = new WeakMap(), vl = function() {
  c(this, R, pa).call(this), g(this, a6, E(() => {
    const { qualities: e } = r(this, we), { mediaWidth: n, mediaHeight: i } = this.$state, o = n(), a = i();
    if (o === 0 || a === 0) return;
    let l = null, d = 1 / 0;
    for (const h of e) {
      const p = Math.abs(h.width - o) + Math.abs(h.height - a);
      p < d && (d = p, l = h);
    }
    l && e[fe.select](
      l,
      !0,
      new ye("resize", { detail: { width: o, height: a } })
    );
  }));
}, pa = function() {
  var e;
  (e = r(this, a6)) == null || e.call(this), g(this, a6, null);
}, O0 = function() {
  this.$state.canSetQuality.set(!r(this, we).qualities.readonly);
}, D0 = function() {
  const { canSetVolume: e, isGoogleCastConnected: n } = this.$state;
  if (n()) {
    e.set(!1);
    return;
  }
  kb().then(e.set);
}, _0 = function(e, n, i) {
  let { qualities: o } = r(this, we), a = !1, l = !1;
  for (const d of e) {
    if (!Ac(d)) continue;
    if (!n.some((p) => p.src === d.src)) {
      const p = o.getBySrc(d.src);
      p && (o[fe.remove](p, i), l = !0);
    }
  }
  l && !o.length && (this.$state.savedState.set(null), o[fe.reset](i));
  for (const d of n) {
    if (!Ac(d) || o.getBySrc(d.src)) continue;
    const h = {
      id: d.id ?? d.height + "p",
      bitrate: null,
      codec: null,
      ...d,
      selected: !1
    };
    o[fe.add](h, i), a = !0;
  }
  a && !o[Qt.enableAuto] && (c(this, R, vl).call(this), o[Qt.enableAuto] = c(this, R, vl).bind(this), o[Qt.setAuto](!0, i));
}, bl = function(e, n = !1) {
  const { audioTracks: i, qualities: o } = r(this, we);
  if (!n) {
    g(this, o6, []), g(this, Z1, [-1, -1]), i[fe.reset](e), o[fe.reset](e), k7(this.$state, n), c(this, R, ui).call(this);
    return;
  }
  k7(this.$state, n), c(this, R, ui).call(this);
}, wl = function(e) {
  const { seekable: n, buffered: i, intrinsicDuration: o, canPlay: a } = this.$state;
  a.set(!0), i.set(e.buffered), n.set(e.seekable);
  const l = v1(e.seekable) ?? 1 / 0;
  o.set(l);
}, xl = function(e) {
  if (!O(r(this, we).$provider)) return;
  const { ended: i, seekableStart: o, clipEndTime: a, currentTime: l, realCurrentTime: d, duration: h } = this.$state, p = i() || d() < o() || a() > 0 && d() >= a() || Math.abs(l() - h()) < 0.1;
  return p && this.dispatch("media-seek-request", {
    detail: o(),
    trigger: e
  }), p;
}, F0 = function() {
  const { currentTime: e, played: n, paused: i } = this.$state;
  i() || (g(this, Z1, Nb(
    r(this, o6),
    r(this, Z1),
    e()
  )), n.set(new oa(r(this, o6))));
}, // Called to update time again incase duration precision has changed.
Sl = function(e) {
  const { clipStartTime: n, clipEndTime: i, duration: o } = this.$state;
  n() > 0 || i() > 0 || this.handle(
    this.createEvent("time-change", {
      detail: o(),
      trigger: e
    })
  );
}, q0 = function() {
  var o;
  const { storage: e } = r(this, we), { canPlay: n, realCurrentTime: i } = this.$state;
  n() && ((o = e == null ? void 0 : e.setTime) == null || o.call(e, i()));
}, c6 = new WeakMap(), Z0 = function(e) {
  var d;
  const { storage: n } = r(this, we), { paused: i, seeking: o, ended: a, duration: l } = this.$state;
  c(this, R, Sl).call(this, e), i() || this.dispatch("pause", { trigger: e }), o() && this.dispatch("seeked", {
    detail: l(),
    trigger: e
  }), a.set(!0), c(this, R, ui).call(this), (d = n == null ? void 0 : n.setTime) == null || d.call(n, l(), !0), this.dispatch("ended", {
    trigger: e
  });
}, $l = function() {
  r(this, c6).cancel(), this.$state.waiting.set(!1);
};
var be, j0, B0, $x, G0, U0, W0, K0, z0, Y0, Q0, X0, J0, eh, th, sh, nh, ih;
class Sx extends yr {
  constructor() {
    super(...arguments);
    C(this, be);
  }
  onSetup() {
    if (c(this, be, j0).call(this), q) return;
    const e = [
      c(this, be, G0),
      c(this, be, W0),
      c(this, be, eh),
      c(this, be, th),
      c(this, be, z0),
      c(this, be, Q0),
      c(this, be, X0),
      c(this, be, sh),
      c(this, be, ih),
      c(this, be, nh),
      c(this, be, K0),
      c(this, be, J0),
      c(this, be, Y0),
      c(this, be, B0),
      c(this, be, U0)
    ];
    for (const n of e)
      E(n.bind(this));
  }
}
be = new WeakSet(), j0 = function() {
  var i;
  const e = {
    duration: "providedDuration",
    loop: "providedLoop",
    poster: "providedPoster",
    streamType: "providedStreamType",
    title: "providedTitle",
    viewType: "providedViewType"
  }, n = /* @__PURE__ */ new Set([
    "currentTime",
    "paused",
    "playbackRate",
    "volume"
  ]);
  for (const o of Object.keys(this.$props))
    n.has(o) || (i = this.$state[e[o] ?? o]) == null || i.set(this.$props[o]());
  this.$state.muted.set(this.$props.muted() || this.$props.volume() === 0);
}, // Sync "provided" props with internal state. Provided props are used to differentiate from
// provider inferred values.
B0 = function() {
  const { viewType: e, streamType: n, title: i, poster: o, loop: a } = this.$props, l = this.$state;
  l.providedPoster.set(o()), l.providedStreamType.set(n()), l.providedViewType.set(e()), l.providedTitle.set(i()), l.providedLoop.set(a());
}, $x = function() {
}, G0 = function() {
  const { artist: e, artwork: n } = this.$props;
  this.$state.artist.set(e()), this.$state.artwork.set(n());
}, U0 = function() {
  const { title: e } = this.$state;
  this.dispatch("title-change", { detail: e() });
}, W0 = function() {
  const e = this.$props.autoPlay() || this.$props.autoplay();
  this.$state.autoPlay.set(e), this.dispatch("auto-play-change", { detail: e });
}, K0 = function() {
  const e = this.$state.loop();
  this.dispatch("loop-change", { detail: e });
}, z0 = function() {
  const e = this.$props.controls();
  this.$state.controls.set(e);
}, Y0 = function() {
  const { poster: e } = this.$state;
  this.dispatch("poster-change", { detail: e() });
}, Q0 = function() {
  const e = this.$props.crossOrigin() ?? this.$props.crossorigin(), n = e === !0 ? "" : e;
  this.$state.crossOrigin.set(n);
}, X0 = function() {
  const { duration: e } = this.$props;
  this.dispatch("media-duration-change-request", {
    detail: e()
  });
}, J0 = function() {
  const e = this.$props.playsInline() || this.$props.playsinline();
  this.$state.playsInline.set(e), this.dispatch("plays-inline-change", { detail: e });
}, eh = function() {
  const { clipStartTime: e } = this.$props;
  this.dispatch("media-clip-start-change-request", {
    detail: e()
  });
}, th = function() {
  const { clipEndTime: e } = this.$props;
  this.dispatch("media-clip-end-change-request", {
    detail: e()
  });
}, sh = function() {
  this.dispatch("live-change", { detail: this.$state.live() });
}, nh = function() {
  this.$state.liveEdgeTolerance.set(this.$props.liveEdgeTolerance()), this.$state.minLiveDVRWindow.set(this.$props.minLiveDVRWindow());
}, ih = function() {
  this.dispatch("live-edge-change", { detail: this.$state.liveEdge() });
};
const _7 = ["play", "pause", "seekforward", "seekbackward", "seekto"];
var pn, rh, oh, ah, ch;
class Ex extends yr {
  constructor() {
    super(...arguments);
    C(this, pn);
  }
  onConnect() {
    E(c(this, pn, oh).bind(this)), E(c(this, pn, ah).bind(this));
    const e = c(this, pn, ch).bind(this);
    for (const n of _7)
      navigator.mediaSession.setActionHandler(n, e);
    ue(c(this, pn, rh).bind(this));
  }
}
pn = new WeakSet(), rh = function() {
  for (const e of _7)
    navigator.mediaSession.setActionHandler(e, null);
}, oh = function() {
  const { title: e, artist: n, artwork: i, poster: o } = this.$state;
  navigator.mediaSession.metadata = new MediaMetadata({
    title: e(),
    artist: n(),
    artwork: i() ?? [{ src: o() }]
  });
}, ah = function() {
  const { canPlay: e, paused: n } = this.$state;
  navigator.mediaSession.playbackState = e() ? n() ? "paused" : "playing" : "none";
}, ch = function(e) {
  const n = new ye("media-session-action", { detail: e });
  switch (e.action) {
    case "play":
      this.dispatch("media-play-request", { trigger: n });
      break;
    case "pause":
      this.dispatch("media-pause-request", { trigger: n });
      break;
    case "seekto":
    case "seekforward":
    case "seekbackward":
      this.dispatch("media-seek-request", {
        detail: qt(e.seekTime) ? e.seekTime : this.$state.currentTime() + (e.seekOffset ?? (e.action === "seekforward" ? 10 : -10)),
        trigger: n
      });
      break;
  }
};
let Za = ee(!1);
q || (Ze(document, "pointerdown", () => {
  Za.set(!1);
}), Ze(document, "keydown", (s) => {
  s.metaKey || s.altKey || s.ctrlKey || Za.set(!0);
}));
var Pi, Cn, lh, uh, dh, hh;
class qs extends as {
  constructor() {
    super(...arguments);
    C(this, Cn);
    C(this, Pi, ee(!1));
  }
  onConnect(e) {
    E(() => {
      const n = new Pe(e);
      if (!Za()) {
        r(this, Pi).set(!1), Wo(e, !1), n.add("pointerenter", c(this, Cn, dh).bind(this)).add("pointerleave", c(this, Cn, hh).bind(this));
        return;
      }
      const i = document.activeElement === e;
      r(this, Pi).set(i), Wo(e, i), n.add("focus", c(this, Cn, lh).bind(this)).add("blur", c(this, Cn, uh).bind(this));
    });
  }
  focused() {
    return r(this, Pi).call(this);
  }
}
Pi = new WeakMap(), Cn = new WeakSet(), lh = function() {
  r(this, Pi).set(!0), Wo(this.el, !0);
}, uh = function() {
  r(this, Pi).set(!1), Wo(this.el, !1);
}, dh = function() {
  F7(this.el, !0);
}, hh = function() {
  F7(this.el, !1);
};
function Wo(s, t) {
  J(s, "data-focus", t), J(s, "data-hocus", t);
}
function F7(s, t) {
  J(s, "data-hocus", t), J(s, "data-hover", t);
}
var rn, mt, B1, gt, _, Gt, Ca, l6, El, Tl, ph, Ch, mh, f3, Ll, gh, Pl, yh, Ml, vh, kl, bh, Il, wh, Vl, xh, Sh, $h, Eh;
let fh = (rn = class extends de {
  constructor() {
    super();
    C(this, _);
    C(this, mt);
    C(this, B1);
    C(this, gt);
    $(this, "canPlayQueue", new y0());
    $(this, "remoteControl");
    C(this, l6, !1);
    /**
     * Controls the screen orientation of the current browser window and dispatches orientation
     * change events on the player.
     */
    $(this, "orientation");
    new Sx();
    const e = {
      player: this,
      qualities: new xw(),
      audioTracks: new fw(),
      storage: null,
      $provider: ee(null),
      $providerSetup: ee(!1),
      $props: this.$props,
      $state: this.$state
    };
    e.remote = this.remoteControl = new T5(
      void 0
    ), e.remote.setPlayer(this), e.textTracks = new vw(), e.textTracks[ce.crossOrigin] = this.$state.crossOrigin, e.textRenderers = new yw(e), e.ariaKeys = {}, g(this, mt, e), ns(Au, e), this.orientation = new _a(), new qs(), new Iw(e);
    const n = new bx();
    g(this, B1, new xx(n, e)), g(this, gt, new yx(r(this, B1), n, e)), e.delegate = new mx(r(this, B1).handle.bind(r(this, B1)), e), e.notify = e.delegate.notify.bind(e.delegate), typeof navigator < "u" && "mediaSession" in navigator && new Ex(), new O7("load", this.startLoading.bind(this)), new O7("posterLoad", this.startLoadingPoster.bind(this));
  }
  onSetup() {
    c(this, _, Ch).call(this), E(c(this, _, ph).bind(this)), E(c(this, _, yh).bind(this)), E(c(this, _, gh).bind(this)), E(c(this, _, bh).bind(this)), E(c(this, _, vh).bind(this)), E(c(this, _, xh).bind(this)), E(c(this, _, wh).bind(this));
  }
  onAttach(e) {
    e.setAttribute("data-media-player", ""), Me(e, "tabindex", "0"), Me(e, "role", "region"), E(c(this, _, $h).bind(this)), q ? c(this, _, El).call(this) : E(c(this, _, El).bind(this)), q ? c(this, _, Tl).call(this) : E(c(this, _, Tl).bind(this)), Ze(e, "find-media-player", c(this, _, mh).bind(this));
  }
  onConnect(e) {
    h5 && J(e, "data-iphone", "");
    const n = window.matchMedia("(pointer: coarse)");
    c(this, _, Ll).call(this, n), n.onchange = c(this, _, Ll).bind(this);
    const i = new ResizeObserver(gr(c(this, _, f3).bind(this)));
    i.observe(e), E(c(this, _, f3).bind(this)), this.dispatch("media-player-connect", {
      detail: this,
      bubbles: !0,
      composed: !0
    }), ue(() => {
      i.disconnect(), n.onchange = null;
    });
  }
  onDestroy() {
    r(this, mt).player = null, this.canPlayQueue.reset();
  }
  /**
   * The current media provider.
   */
  get provider() {
    return r(this, _, Gt);
  }
  /**
   * Media controls settings.
   */
  get controls() {
    return r(this, gt).controls;
  }
  set controls(e) {
    r(this, _, Ca).controls.set(e);
  }
  /**
   * The title of the current media.
   */
  get title() {
    return O(this.$state.title);
  }
  set title(e) {
    if (r(this, l6)) {
      g(this, l6, !1);
      return;
    }
    r(this, _, Ca).title.set(e);
  }
  /**
   * A list of all `VideoQuality` objects representing the set of available video renditions.
   *
   * @see {@link https://vidstack.io/docs/player/api/video-quality}
   */
  get qualities() {
    return r(this, mt).qualities;
  }
  /**
   * A list of all `AudioTrack` objects representing the set of available audio tracks.
   *
   * @see {@link https://vidstack.io/docs/player/api/audio-tracks}
   */
  get audioTracks() {
    return r(this, mt).audioTracks;
  }
  /**
   * A list of all `TextTrack` objects representing the set of available text tracks.
   *
   * @see {@link https://vidstack.io/docs/player/api/text-tracks}
   */
  get textTracks() {
    return r(this, mt).textTracks;
  }
  /**
   * Contains text renderers which are responsible for loading, parsing, and rendering text
   * tracks.
   */
  get textRenderers() {
    return r(this, mt).textRenderers;
  }
  get duration() {
    return this.$state.duration();
  }
  set duration(e) {
    r(this, _, Ca).duration.set(e);
  }
  get paused() {
    return O(this.$state.paused);
  }
  set paused(e) {
    c(this, _, Pl).call(this, e);
  }
  get muted() {
    return O(this.$state.muted);
  }
  set muted(e) {
    c(this, _, Ml).call(this, e);
  }
  get currentTime() {
    return O(this.$state.currentTime);
  }
  set currentTime(e) {
    c(this, _, kl).call(this, e);
  }
  get volume() {
    return O(this.$state.volume);
  }
  set volume(e) {
    c(this, _, Il).call(this, e);
  }
  get playbackRate() {
    return O(this.$state.playbackRate);
  }
  set playbackRate(e) {
    c(this, _, Vl).call(this, e);
  }
  /**
   * Begins/resumes playback of the media. If this method is called programmatically before the
   * user has interacted with the player, the promise may be rejected subject to the browser's
   * autoplay policies. This method will throw if called before media is ready for playback.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play}
   */
  async play(e) {
    return r(this, gt).play(e);
  }
  /**
   * Pauses playback of the media. This method will throw if called before media is ready for
   * playback.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause}
   */
  async pause(e) {
    return r(this, gt).pause(e);
  }
  /**
   * Attempts to display the player in fullscreen. The promise will resolve if successful, and
   * reject if not. This method will throw if any fullscreen API is _not_ currently available.
   *
   * @see {@link https://vidstack.io/docs/player/api/fullscreen}
   */
  async enterFullscreen(e, n) {
    return r(this, gt).enterFullscreen(e, n);
  }
  /**
   * Attempts to display the player inline by exiting fullscreen. This method will throw if any
   * fullscreen API is _not_ currently available.
   *
   * @see {@link https://vidstack.io/docs/player/api/fullscreen}
   */
  async exitFullscreen(e, n) {
    return r(this, gt).exitFullscreen(e, n);
  }
  /**
   * Attempts to display the player in picture-in-picture mode. This method will throw if PIP is
   * not supported. This method will also return a `PictureInPictureWindow` if the current
   * provider supports it.
   *
   * @see {@link https://vidstack.io/docs/player/api/picture-in-picture}
   */
  enterPictureInPicture(e) {
    return r(this, gt).enterPictureInPicture(e);
  }
  /**
   * Attempts to display the player in inline by exiting picture-in-picture mode. This method
   * will throw if not supported.
   *
   * @see {@link https://vidstack.io/docs/player/api/picture-in-picture}
   */
  exitPictureInPicture(e) {
    return r(this, gt).exitPictureInPicture(e);
  }
  /**
   * Sets the current time to the live edge (i.e., `duration`). This is a no-op for non-live
   * streams and will throw if called before media is ready for playback.
   *
   * @see {@link https://vidstack.io/docs/player/api/live}
   */
  seekToLiveEdge(e) {
    r(this, gt).seekToLiveEdge(e);
  }
  /**
   * Called when media can begin loading. Calling this method will trigger the initial provider
   * loading process. Calling it more than once has no effect.
   *
   * @see {@link https://vidstack.io/docs/player/core-concepts/loading#load-strategies}
   */
  startLoading(e) {
    r(this, mt).notify("can-load", void 0, e);
  }
  /**
   * Called when the poster image can begin loading. Calling it more than once has no effect.
   *
   * @see {@link https://vidstack.io/docs/player/core-concepts/loading#load-strategies}
   */
  startLoadingPoster(e) {
    r(this, mt).notify("can-load-poster", void 0, e);
  }
  /**
   * Request Apple AirPlay picker to open.
   */
  requestAirPlay(e) {
    return r(this, gt).requestAirPlay(e);
  }
  /**
   * Request Google Cast device picker to open. The Google Cast framework will be loaded if it
   * hasn't yet.
   */
  requestGoogleCast(e) {
    return r(this, gt).requestGoogleCast(e);
  }
  /**
   * Set the audio gain, amplifying volume and enabling a maximum volume above 100%.
   *
   * @see {@link https://vidstack.io/docs/player/api/audio-gain}
   */
  setAudioGain(e, n) {
    return r(this, gt).setAudioGain(e, n);
  }
  destroy() {
    super.destroy(), r(this, mt).remote.setPlayer(null), this.dispatch("destroy");
  }
}, mt = new WeakMap(), B1 = new WeakMap(), gt = new WeakMap(), _ = new WeakSet(), Gt = function() {
  return r(this, mt).$provider();
}, Ca = function() {
  return this.$props;
}, l6 = new WeakMap(), El = function() {
  const e = this.$el, { title: n, live: i, viewType: o, providedTitle: a } = this.$state, l = i(), d = bu(o()), h = d !== "Unknown" ? `${l ? "Live " : ""}${d}` : l ? "Live" : "Media", p = n();
  J(
    this.el,
    "aria-label",
    `${h} Player` + (p ? ` - ${p}` : "")
  ), !q && (e != null && e.hasAttribute("title")) && (g(this, l6, !0), e == null || e.removeAttribute("title"));
}, Tl = function() {
  const e = this.orientation.landscape ? "landscape" : "portrait";
  this.$state.orientation.set(e), J(this.el, "data-orientation", e), c(this, _, f3).call(this);
}, ph = function() {
  this.$state.canPlay() && r(this, _, Gt) ? this.canPlayQueue.start() : this.canPlayQueue.stop();
}, Ch = function() {
  if (rn[Y2]) {
    this.setAttributes(rn[Y2]);
    return;
  }
  const e = {
    "data-load": function() {
      return this.$props.load();
    },
    "data-captions": function() {
      const i = this.$state.textTrack();
      return !!i && es(i);
    },
    "data-ios-controls": function() {
      return this.$state.iOSControls();
    },
    "data-controls": function() {
      return this.controls.showing;
    },
    "data-buffering": function() {
      const { canLoad: i, canPlay: o, waiting: a } = this.$state;
      return i() && (!o() || a());
    },
    "data-error": function() {
      const { error: i } = this.$state;
      return !!i();
    },
    "data-autoplay-error": function() {
      const { autoPlayError: i } = this.$state;
      return !!i();
    }
  }, n = {
    autoPlay: "autoplay",
    canAirPlay: "can-airplay",
    canPictureInPicture: "can-pip",
    pictureInPicture: "pip",
    playsInline: "playsinline",
    remotePlaybackState: "remote-state",
    remotePlaybackType: "remote-type",
    isAirPlayConnected: "airplay",
    isGoogleCastConnected: "google-cast"
  };
  for (const i of px) {
    const o = "data-" + (n[i] ?? b2(i));
    e[o] = function() {
      return this.$state[i]();
    };
  }
  delete e.title, rn[Y2] = e, this.setAttributes(e);
}, mh = function(e) {
  e.detail(this);
}, f3 = function() {
  if (q || !this.el) return;
  const e = this.el.clientWidth, n = this.el.clientHeight;
  this.$state.width.set(e), this.$state.height.set(n), kt(this.el, "--player-width", e + "px"), kt(this.el, "--player-height", n + "px");
}, Ll = function(e) {
  if (q) return;
  const n = e.matches ? "coarse" : "fine";
  J(this.el, "data-pointer", n), this.$state.pointer.set(n), c(this, _, f3).call(this);
}, gh = function() {
  c(this, _, Pl).call(this, this.$props.paused());
}, Pl = function(e) {
  e ? this.canPlayQueue.enqueue("paused", () => r(this, gt).pause()) : this.canPlayQueue.enqueue("paused", () => r(this, gt).play());
}, yh = function() {
  c(this, _, Ml).call(this, this.$props.muted());
}, Ml = function(e) {
  this.canPlayQueue.enqueue("muted", () => {
    r(this, _, Gt) && r(this, _, Gt).setMuted(e);
  });
}, vh = function() {
  c(this, _, kl).call(this, this.$props.currentTime());
}, kl = function(e) {
  this.canPlayQueue.enqueue("currentTime", () => {
    const { currentTime: n } = this.$state;
    e !== O(n) && O(() => {
      if (!r(this, _, Gt)) return;
      const i = E5(e, this.$state);
      Number.isFinite(i) && r(this, _, Gt).setCurrentTime(i);
    });
  });
}, bh = function() {
  c(this, _, Il).call(this, this.$props.volume());
}, Il = function(e) {
  const n = Nu(0, e, 1);
  this.canPlayQueue.enqueue("volume", () => {
    r(this, _, Gt) && r(this, _, Gt).setVolume(n);
  });
}, wh = function() {
  c(this, _, Vl).call(this, this.$props.playbackRate());
}, Vl = function(e) {
  this.canPlayQueue.enqueue("rate", () => {
    var n, i;
    r(this, _, Gt) && ((i = (n = r(this, _, Gt)).setPlaybackRate) == null || i.call(n, e));
  });
}, xh = function() {
  c(this, _, Sh).call(this, this.$props.playsInline());
}, Sh = function(e) {
  this.canPlayQueue.enqueue("playsinline", () => {
    var n, i;
    r(this, _, Gt) && ((i = (n = r(this, _, Gt)).setPlaysInline) == null || i.call(n, e));
  });
}, $h = function() {
  var i;
  let e = this.$props.storage(), n = ie(e) ? new nw() : e;
  if (n != null && n.onChange) {
    const { source: o } = this.$state, a = ie(e) ? e : (i = this.el) == null ? void 0 : i.id, l = e1(c(this, _, Eh).bind(this));
    E(() => n.onChange(o(), l(), a || void 0));
  }
  r(this, mt).storage = n, r(this, mt).textTracks.setStorage(n), ue(() => {
    var o;
    (o = n == null ? void 0 : n.onDestroy) == null || o.call(n), r(this, mt).storage = null, r(this, mt).textTracks.setStorage(null);
  });
}, Eh = function() {
  const { clipStartTime: e, clipEndTime: n } = this.$props, { source: i } = this.$state, o = i();
  return o.src ? `${o.src}:${e()}:${n()}` : null;
}, $(rn, "props", Cx), $(rn, "state", J6), rn);
const Oe = fh.prototype;
Le(Oe, "canPlayQueue");
Le(Oe, "remoteControl");
Le(Oe, "provider");
Le(Oe, "controls");
Le(Oe, "orientation");
Le(Oe, "title");
Le(Oe, "qualities");
Le(Oe, "audioTracks");
Le(Oe, "textTracks");
Le(Oe, "textRenderers");
Le(Oe, "duration");
Le(Oe, "paused");
Le(Oe, "muted");
Le(Oe, "currentTime");
Le(Oe, "volume");
Le(Oe, "playbackRate");
ot(Oe, "play");
ot(Oe, "pause");
ot(Oe, "enterFullscreen");
ot(Oe, "exitFullscreen");
ot(Oe, "enterPictureInPicture");
ot(Oe, "exitPictureInPicture");
ot(Oe, "seekToLiveEdge");
ot(Oe, "startLoading");
ot(Oe, "startLoadingPoster");
ot(Oe, "requestAirPlay");
ot(Oe, "requestGoogleCast");
ot(Oe, "setAudioGain");
function Tx(s, t) {
  return fetch(s, t).then((e) => e.text()).then((e) => /type="static"/.test(e) ? "on-demand" : "live");
}
function Th(s, t) {
  return fetch(s, t).then((e) => e.text()).then((e) => {
    const n = Lx(e);
    if (n)
      return Th(
        /^https?:/.test(n) ? n : new URL(n, s).href,
        t
      );
    const i = /EXT-X-PLAYLIST-TYPE:\s*VOD/.test(e) ? "on-demand" : "live";
    return i === "live" && Px(e) >= 10 && (/#EXT-X-DVR-ENABLED:\s*true/.test(e) || e.includes("#EXT-X-DISCONTINUITY")) ? "live:dvr" : i;
  });
}
function Lx(s) {
  const t = s.match(/#EXT-X-STREAM-INF:[^\n]+(\n[^\n]+)*/g);
  return t ? t[0].split(`
`)[1].trim() : null;
}
function Px(s) {
  const t = s.split(`
`);
  for (const e of t)
    if (e.startsWith("#EXT-X-TARGETDURATION")) {
      const n = parseFloat(e.split(":")[1]);
      if (!isNaN(n))
        return n;
    }
  return -1;
}
const Al = /* @__PURE__ */ new Map();
var u6, d6, J3, xe, Fn, st, Lh, Ph, Nl, Rl, Hl, Mh, kh, Ih;
class Mx {
  constructor(t, e, n, i = []) {
    C(this, st);
    C(this, u6, !1);
    C(this, d6);
    C(this, J3);
    C(this, xe);
    C(this, Fn);
    g(this, J3, t), g(this, xe, e), g(this, Fn, n);
    const o = new al(), a = new Xc(), l = new Hu(), d = new Ow(), h = new fx(), p = new hx(), f = [h, p];
    g(this, d6, e1(() => {
      const y = e.$state.remotePlaybackLoader(), v = e.$props.preferNativeHLS() ? [l, d, o, a, ...f, ...i] : [a, l, d, o, ...f, ...i];
      return y ? [y, ...v] : v;
    }));
    const { $state: m } = e;
    m.sources.set(q7(e.$props.src()));
    for (const y of m.sources()) {
      const v = r(this, d6).call(this).find((x) => x.canPlay(y));
      if (!v) continue;
      const b = v.mediaType(y);
      e.$state.source.set(y), e.$state.mediaType.set(b), e.$state.inferredViewType.set(b), r(this, Fn).set(v), g(this, u6, !0);
      break;
    }
  }
  connect() {
    const t = r(this, Fn).call(this);
    r(this, u6) && (c(this, st, Rl).call(this, r(this, xe).$state.source(), t), c(this, st, Hl).call(this, t), g(this, u6, !1)), E(c(this, st, Lh).bind(this)), E(c(this, st, Ph).bind(this)), E(c(this, st, Mh).bind(this)), E(c(this, st, kh).bind(this)), E(c(this, st, Ih).bind(this));
  }
}
u6 = new WeakMap(), d6 = new WeakMap(), J3 = new WeakMap(), xe = new WeakMap(), Fn = new WeakMap(), st = new WeakSet(), Lh = function() {
  r(this, xe).notify("sources-change", [
    ...q7(r(this, xe).$props.src()),
    ...r(this, J3).call(this)
  ]);
}, Ph = function() {
  var a;
  const { $state: t } = r(this, xe), e = t.sources(), n = O(t.source), i = c(this, st, Nl).call(this, n, e);
  if (((a = e[0]) == null ? void 0 : a.src) && !i.src && !i.type) {
    const { crossOrigin: l } = t, d = b3(l()), h = new AbortController();
    return Promise.all(
      e.map(
        (p) => ie(p.src) && p.type === "?" ? fetch(p.src, {
          method: "HEAD",
          credentials: d,
          signal: h.signal
        }).then((f) => (p.type = f.headers.get("content-type") || "??", Al.set(p.src, p.type), p)).catch(() => p) : p
      )
    ).then((p) => {
      if (h.signal.aborted) return;
      const f = c(this, st, Nl).call(this, O(t.source), p);
      Ns(), f.src || r(this, xe).notify("error", {
        message: "Failed to load resource.",
        code: 4
      });
    }), () => h.abort();
  }
  Ns();
}, Nl = function(t, e) {
  let n = { src: "", type: "" }, i = null, o = new ye("sources-change", { detail: { sources: e } }), a = r(this, d6).call(this), { started: l, paused: d, currentTime: h, quality: p, savedState: f } = r(this, xe).$state;
  for (const m of e) {
    const y = a.find((v) => v.canPlay(m));
    if (y) {
      n = m, i = y;
      break;
    }
  }
  if (Ac(n)) {
    const m = p(), y = e.find((v) => v.src === (m == null ? void 0 : m.src));
    O(l) ? f.set({
      paused: O(d),
      currentTime: O(h)
    }) : f.set(null), y && (n = y, o = new ye("quality-change", {
      detail: { quality: m }
    }));
  }
  return j7(t, n) || c(this, st, Rl).call(this, n, i, o), i !== O(r(this, Fn)) && c(this, st, Hl).call(this, i, o), n;
}, Rl = function(t, e, n) {
  r(this, xe).notify("source-change", t, n), r(this, xe).notify("media-type-change", (e == null ? void 0 : e.mediaType(t)) || "unknown", n);
}, Hl = function(t, e) {
  r(this, xe).$providerSetup.set(!1), r(this, xe).notify("provider-change", null, e), t && O(() => {
    var n;
    return (n = t.preconnect) == null ? void 0 : n.call(t, r(this, xe));
  }), r(this, Fn).set(t), r(this, xe).notify("provider-loader-change", t, e);
}, Mh = function() {
  const t = r(this, xe).$provider();
  if (!(!t || O(r(this, xe).$providerSetup))) {
    if (r(this, xe).$state.canLoad()) {
      Mt(() => t.setup(), t.scope), r(this, xe).$providerSetup.set(!0);
      return;
    }
    O(() => {
      var e;
      return (e = t.preconnect) == null ? void 0 : e.call(t);
    });
  }
}, kh = function() {
  if (!r(this, xe).$providerSetup()) return;
  const t = r(this, xe).$provider(), e = r(this, xe).$state.source(), n = O(r(this, xe).$state.crossOrigin), i = O(r(this, xe).$props.preferNativeHLS);
  if (!j7(t == null ? void 0 : t.currentSrc, e)) {
    if (r(this, xe).$state.canLoad()) {
      const o = new AbortController();
      return Q6(e) ? (i || !ku()) && Th(e.src, {
        credentials: b3(n),
        signal: o.signal
      }).then((a) => {
        r(this, xe).notify("stream-type-change", a);
      }).catch(ts) : Iu(e) ? Tx(e.src, {
        credentials: b3(n),
        signal: o.signal
      }).then((a) => {
        r(this, xe).notify("stream-type-change", a);
      }).catch(ts) : r(this, xe).notify("stream-type-change", "on-demand"), O(() => {
        const a = O(r(this, xe).$state.preload);
        return t == null ? void 0 : t.loadSource(e, a).catch((l) => {
        });
      }), () => o.abort();
    }
    try {
      ie(e.src) && X6(new URL(e.src).origin);
    } catch {
    }
  }
}, Ih = function() {
  const t = r(this, Fn).call(this), { providedPoster: e, source: n, canLoadPoster: i } = r(this, xe).$state;
  if (!t || !t.loadPoster || !n() || !i() || e()) return;
  const o = new AbortController(), a = new ye("source-change", { detail: n });
  return t.loadPoster(n(), r(this, xe), o).then((l) => {
    r(this, xe).notify("poster-change", l || "", a);
  }).catch(() => {
    r(this, xe).notify("poster-change", "", a);
  }), () => {
    o.abort();
  };
};
function q7(s) {
  return (vt(s) ? s : [s]).map((t) => ie(t) ? { src: t, type: Z7(t) } : { ...t, type: Z7(t.src, t.type) });
}
function Z7(s, t) {
  return ie(t) && t.length ? t : ie(s) && Al.has(s) ? Al.get(s) : !t && Q6({ src: s, type: "" }) ? "application/x-mpegurl" : !t && Iu({ src: s, type: "" }) ? "application/dash+xml" : !ie(s) || s.startsWith("blob:") ? "video/object" : s.includes("youtube") || s.includes("youtu.be") ? "video/youtube" : s.includes("vimeo") && !s.includes("progressive_redirect") && !s.includes(".m3u8") ? "video/vimeo" : "?";
}
function j7(s, t) {
  return (s == null ? void 0 : s.src) === (t == null ? void 0 : t.src) && (s == null ? void 0 : s.type) === (t == null ? void 0 : t.type);
}
var eo, Mi, to, i2, Vh;
class kx {
  constructor(t, e) {
    C(this, i2);
    C(this, eo);
    C(this, Mi);
    C(this, to, []);
    g(this, eo, t), g(this, Mi, e), E(c(this, i2, Vh).bind(this));
  }
}
eo = new WeakMap(), Mi = new WeakMap(), to = new WeakMap(), i2 = new WeakSet(), Vh = function() {
  const t = r(this, eo).call(this);
  for (const e of r(this, to))
    if (!t.some((n) => n.id === e.id)) {
      const n = e.id && r(this, Mi).textTracks.getById(e.id);
      n && r(this, Mi).textTracks.remove(n);
    }
  for (const e of t) {
    const n = e.id || lr.createId(e);
    r(this, Mi).textTracks.getById(n) || (e.id = n, r(this, Mi).textTracks.add(e));
  }
  g(this, to, t);
};
var ea, Ls, so, no, io, h6, f6, os, Nh, Ol, Dl, _l;
let Ah = (ea = class extends de {
  constructor() {
    super(...arguments);
    C(this, os);
    C(this, Ls);
    C(this, so);
    C(this, no, ee([]));
    C(this, io, ee([]));
    C(this, h6, null);
    C(this, f6, -1);
  }
  onSetup() {
    g(this, Ls, Ae()), g(this, so, new Mx(
      r(this, no),
      r(this, Ls),
      this.$state.loader,
      this.$props.loaders()
    ));
  }
  onAttach(e) {
    e.setAttribute("data-media-provider", "");
  }
  onConnect(e) {
    r(this, so).connect(), new kx(r(this, io), r(this, Ls));
    const n = new ResizeObserver(gr(c(this, os, Dl).bind(this)));
    n.observe(e);
    const i = new MutationObserver(c(this, os, _l).bind(this));
    i.observe(e, { attributes: !0, childList: !0 }), c(this, os, Dl).call(this), c(this, os, _l).call(this), ue(() => {
      n.disconnect(), i.disconnect();
    });
  }
  load(e) {
    e == null || e.setAttribute("aria-hidden", "true"), window.cancelAnimationFrame(r(this, f6)), g(this, f6, requestAnimationFrame(() => c(this, os, Nh).call(this, e))), ue(() => {
      window.cancelAnimationFrame(r(this, f6));
    });
  }
  onDestroy() {
    g(this, h6, null), c(this, os, Ol).call(this);
  }
}, Ls = new WeakMap(), so = new WeakMap(), no = new WeakMap(), io = new WeakMap(), h6 = new WeakMap(), f6 = new WeakMap(), os = new WeakSet(), Nh = function(e) {
  if (!this.scope) return;
  const n = this.$state.loader(), { $provider: i } = r(this, Ls);
  r(this, h6) === n && (n == null ? void 0 : n.target) === e && O(i) || (c(this, os, Ol).call(this), g(this, h6, n), n && (n.target = e || null), !(!n || !e) && n.load(r(this, Ls)).then((o) => {
    this.scope && O(this.$state.loader) === n && r(this, Ls).notify("provider-change", o);
  }));
}, Ol = function() {
  var e;
  (e = r(this, Ls)) == null || e.notify("provider-change", null);
}, Dl = function() {
  if (!this.el) return;
  const { player: e, $state: n } = r(this, Ls), i = this.el.offsetWidth, o = this.el.offsetHeight;
  e && (n.mediaWidth.set(i), n.mediaHeight.set(o), e.el && (kt(e.el, "--media-width", i + "px"), kt(e.el, "--media-height", o + "px")));
}, _l = function() {
  const e = [], n = [], i = this.el.children;
  for (const o of i)
    if (!o.hasAttribute("data-vds")) {
      if (o instanceof HTMLSourceElement) {
        const a = {
          id: o.id,
          src: o.src,
          type: o.type
        };
        for (const l of ["id", "src", "width", "height", "bitrate", "codec"]) {
          const d = o.getAttribute(`data-${l}`);
          ie(d) && (a[l] = /id|src|codec/.test(l) ? d : Number(d));
        }
        e.push(a);
      } else if (o instanceof HTMLTrackElement) {
        const a = {
          src: o.src,
          kind: o.track.kind,
          language: o.srclang,
          label: o.label,
          default: o.default,
          type: o.getAttribute("data-type")
        };
        n.push({
          id: o.id || lr.createId(a),
          ...a
        });
      }
    }
  r(this, no).set(e), r(this, io).set(n), Ns();
}, $(ea, "props", {
  loaders: []
}), $(ea, "state", new ci({
  loader: null
})), ea);
const Ix = Ah.prototype;
ot(Ix, "load");
var ta, Qs, p6, De, Rh, Hh, Oh, Dh, _h, ki, C6, Fh, ma, qh, m1;
let Vx = (ta = class extends de {
  constructor() {
    super(...arguments);
    C(this, De);
    C(this, Qs);
    C(this, p6, !1);
    C(this, ki, -1);
    C(this, C6, -1);
  }
  onSetup() {
    g(this, Qs, Ae());
  }
  onAttach(e) {
    e.style.display = "contents";
  }
  onConnect(e) {
    e.setAttribute("data-media-announcer", ""), Me(e, "role", "status"), Me(e, "aria-live", "polite");
    const { busy: n } = this.$state;
    this.setAttributes({
      "aria-busy": () => n() ? "true" : null
    }), g(this, p6, !0), E(c(this, De, Rh).bind(this)), E(c(this, De, _h).bind(this)), E(c(this, De, Dh).bind(this)), E(c(this, De, Hh).bind(this)), E(c(this, De, Oh).bind(this)), E(c(this, De, Fh).bind(this)), E(c(this, De, qh).bind(this)), Ns(), g(this, p6, !1);
  }
}, Qs = new WeakMap(), p6 = new WeakMap(), De = new WeakSet(), Rh = function() {
  const { paused: e } = r(this, Qs).$state;
  c(this, De, m1).call(this, e() ? "Pause" : "Play");
}, Hh = function() {
  const { fullscreen: e } = r(this, Qs).$state;
  c(this, De, m1).call(this, e() ? "Enter Fullscreen" : "Exit Fullscreen");
}, Oh = function() {
  const { pictureInPicture: e } = r(this, Qs).$state;
  c(this, De, m1).call(this, e() ? "Enter PiP" : "Exit PiP");
}, Dh = function() {
  const { textTrack: e } = r(this, Qs).$state;
  c(this, De, m1).call(this, e() ? "Closed-Captions On" : "Closed-Captions Off");
}, _h = function() {
  const { muted: e, volume: n, audioGain: i } = r(this, Qs).$state;
  c(this, De, m1).call(this, e() || n() === 0 ? "Mute" : `${Math.round(n() * (i() ?? 1) * 100)}% ${c(this, De, ma).call(this, "Volume")}`);
}, ki = new WeakMap(), C6 = new WeakMap(), Fh = function() {
  const { seeking: e, currentTime: n } = r(this, Qs).$state, i = e();
  r(this, ki) > 0 ? (window.clearTimeout(r(this, C6)), g(this, C6, window.setTimeout(() => {
    if (!this.scope) return;
    const o = O(n), a = Math.abs(o - r(this, ki));
    if (a >= 1) {
      const l = o >= r(this, ki), d = cl(a);
      c(this, De, m1).call(this, `${c(this, De, ma).call(this, l ? "Seek Forward" : "Seek Backward")} ${d}`);
    }
    g(this, ki, -1), g(this, C6, -1);
  }, 300))) : i && g(this, ki, O(n));
}, ma = function(e) {
  var i;
  const { translations: n } = this.$props;
  return ((i = n == null ? void 0 : n()) == null ? void 0 : i[e || ""]) ?? e;
}, qh = function() {
  const { label: e, busy: n } = this.$state, i = c(this, De, ma).call(this, e());
  if (r(this, p6)) return;
  n.set(!0);
  const o = window.setTimeout(() => void n.set(!1), 150);
  return this.el && J(this.el, "aria-label", i), ie(i) && this.dispatch("change", { detail: i }), () => window.clearTimeout(o);
}, m1 = function(e) {
  const { label: n } = this.$state;
  n.set(e);
}, $(ta, "props", {
  translations: null
}), $(ta, "state", new ci({
  label: null,
  busy: !1
})), ta);
var qn, si, jh, Bh, Fl;
class Zh extends de {
  constructor() {
    super(...arguments);
    C(this, si);
    C(this, qn);
  }
  onSetup() {
    g(this, qn, Ae()), E(c(this, si, Bh).bind(this));
  }
  onAttach(e) {
    const { pictureInPicture: n, fullscreen: i } = r(this, qn).$state;
    kt(e, "pointer-events", "none"), Me(e, "role", "group"), this.setAttributes({
      "data-visible": c(this, si, Fl).bind(this),
      "data-fullscreen": i,
      "data-pip": n
    }), E(() => {
      this.dispatch("change", { detail: c(this, si, Fl).call(this) });
    }), E(c(this, si, jh).bind(this)), E(() => {
      const o = i();
      for (const a of ["top", "right", "bottom", "left"])
        kt(e, `padding-${a}`, o && `env(safe-area-inset-${a})`);
    });
  }
}
qn = new WeakMap(), si = new WeakSet(), jh = function() {
  if (!this.el) return;
  const { nativeControls: e } = r(this, qn).$state, n = e();
  J(this.el, "aria-hidden", n ? "true" : null), kt(this.el, "display", n ? "none" : null);
}, Bh = function() {
  const { controls: e } = r(this, qn).player, { hideDelay: n, hideOnMouseLeave: i } = this.$props;
  e.defaultDelay = n() === 2e3 ? r(this, qn).$props.controlsDelay() : n(), e.hideOnMouseLeave = i();
}, Fl = function() {
  const { controlsVisible: e } = r(this, qn).$state;
  return e();
}, $(Zh, "props", {
  hideDelay: 2e3,
  hideOnMouseLeave: !1
});
class Ax extends de {
  onAttach(t) {
    t.style.pointerEvents || kt(t, "pointer-events", "auto");
  }
}
var Ps, Ji, Uh, G1, U1, Xs, ga, vd;
let Gh = (vd = class extends as {
  constructor(e) {
    super();
    C(this, Ji);
    C(this, Ps);
    C(this, G1, -1);
    C(this, U1, -1);
    C(this, Xs, null);
    g(this, Ps, e), E(c(this, Ji, Uh).bind(this));
  }
  onDestroy() {
    var e;
    (e = r(this, Xs)) == null || e.call(this), g(this, Xs, null);
  }
  show(e) {
    var n, i, o;
    c(this, Ji, ga).call(this), window.cancelAnimationFrame(r(this, U1)), g(this, U1, -1), (n = r(this, Xs)) == null || n.call(this), g(this, Xs, null), g(this, G1, window.setTimeout(() => {
      g(this, G1, -1);
      const a = r(this, Ps).content();
      a && a.style.removeProperty("display"), O(() => r(this, Ps).onChange(!0, e));
    }, ((o = (i = r(this, Ps)).showDelay) == null ? void 0 : o.call(i)) ?? 0));
  }
  hide(e) {
    c(this, Ji, ga).call(this), O(() => r(this, Ps).onChange(!1, e)), g(this, U1, requestAnimationFrame(() => {
      var i;
      c(this, Ji, ga).call(this), g(this, U1, -1);
      const n = r(this, Ps).content();
      if (n) {
        const o = () => {
          n.style.display = "none", g(this, Xs, null);
        };
        if (mw(n)) {
          (i = r(this, Xs)) == null || i.call(this);
          const l = Ze(n, "animationend", o, { once: !0 });
          g(this, Xs, l);
        } else
          o();
      }
    }));
  }
}, Ps = new WeakMap(), Ji = new WeakSet(), Uh = function() {
  const e = r(this, Ps).trigger();
  if (!e) {
    this.hide();
    return;
  }
  const n = this.show.bind(this), i = this.hide.bind(this);
  r(this, Ps).listen(e, n, i);
}, G1 = new WeakMap(), U1 = new WeakMap(), Xs = new WeakMap(), ga = function() {
  window.clearTimeout(r(this, G1)), g(this, G1, -1);
}, vd);
const b1 = ai();
let Nx = 0;
var hc, m6, Ii, Vi, ro, gs, Wh, Kh, zh, Yh, Qh;
let Rx = (hc = class extends de {
  constructor() {
    super();
    C(this, gs);
    C(this, m6, `media-tooltip-${++Nx}`);
    C(this, Ii, ee(null));
    C(this, Vi, ee(null));
    C(this, ro, ee(!1));
    new qs();
    const { showDelay: e } = this.$props;
    new Gh({
      trigger: r(this, Ii),
      content: r(this, Vi),
      showDelay: e,
      listen(n, i, o) {
        E(() => {
          Za() && Ze(n, "focus", i), Ze(n, "blur", o);
        }), new Pe(n).add("touchstart", (a) => a.preventDefault(), { passive: !1 }).add("mouseenter", i).add("mouseleave", o);
      },
      onChange: c(this, gs, Qh).bind(this)
    });
  }
  onAttach(e) {
    e.style.setProperty("display", "contents");
  }
  onSetup() {
    ns(b1, {
      trigger: r(this, Ii),
      content: r(this, Vi),
      showing: r(this, ro),
      attachTrigger: c(this, gs, Wh).bind(this),
      detachTrigger: c(this, gs, Kh).bind(this),
      attachContent: c(this, gs, zh).bind(this),
      detachContent: c(this, gs, Yh).bind(this)
    });
  }
}, m6 = new WeakMap(), Ii = new WeakMap(), Vi = new WeakMap(), ro = new WeakMap(), gs = new WeakSet(), Wh = function(e) {
  var i;
  r(this, Ii).set(e);
  let n = e.getAttribute("data-media-tooltip");
  n && ((i = this.el) == null || i.setAttribute(`data-media-${n}-tooltip`, "")), J(e, "data-describedby", r(this, m6));
}, Kh = function(e) {
  e.removeAttribute("data-describedby"), e.removeAttribute("aria-describedby"), r(this, Ii).set(null);
}, zh = function(e) {
  e.setAttribute("id", r(this, m6)), e.style.display = "none", Me(e, "role", "tooltip"), r(this, Vi).set(e);
}, Yh = function(e) {
  e.removeAttribute("id"), e.removeAttribute("role"), r(this, Vi).set(null);
}, Qh = function(e) {
  const n = r(this, Ii).call(this), i = r(this, Vi).call(this);
  n && J(n, "aria-describedby", e ? r(this, m6) : null);
  for (const o of [this.el, n, i])
    o && J(o, "data-visible", e);
  r(this, ro).set(e);
}, $(hc, "props", {
  showDelay: 700
}), hc);
var hr, Xh, ql, bd;
let Hx = (bd = class extends de {
  constructor() {
    super();
    C(this, hr);
    new qs();
  }
  onConnect(e) {
    ue(
      V5(() => {
        if (!this.connectScope) return;
        c(this, hr, Xh).call(this);
        const n = Ye(b1);
        ue(() => {
          const i = c(this, hr, ql).call(this);
          i && n.detachTrigger(i);
        });
      })
    );
  }
}, hr = new WeakSet(), Xh = function() {
  const e = c(this, hr, ql).call(this), n = Ye(b1);
  e && n.attachTrigger(e);
}, ql = function() {
  const e = this.el.firstElementChild;
  return (e == null ? void 0 : e.localName) === "button" || (e == null ? void 0 : e.getAttribute("role")) === "button" ? e : this.el;
}, bd);
var fc, ni, Zl, Jh, e8;
let Ox = (fc = class extends de {
  constructor() {
    super();
    C(this, ni);
    new qs();
    const { placement: e } = this.$props;
    this.setAttributes({
      "data-placement": e
    });
  }
  onAttach(e) {
    c(this, ni, Zl).call(this, e), Object.assign(e.style, {
      position: "absolute",
      top: 0,
      left: 0,
      width: "max-content"
    });
  }
  onConnect(e) {
    c(this, ni, Zl).call(this, e);
    const n = Ye(b1);
    ue(() => n.detachContent(e)), ue(
      V5(() => {
        this.connectScope && E(c(this, ni, Jh).bind(this));
      })
    );
  }
}, ni = new WeakSet(), Zl = function(e) {
  Ye(b1).attachContent(e);
}, Jh = function() {
  const { showing: e } = Ye(b1);
  if (!e()) return;
  const { placement: n, offset: i, alignOffset: o } = this.$props;
  return A5(this.el, c(this, ni, e8).call(this), n(), {
    offsetVarName: "media-tooltip",
    xOffset: o(),
    yOffset: i()
  });
}, e8 = function() {
  return Ye(b1).trigger();
}, $(fc, "props", {
  placement: "top center",
  offset: 0,
  alignOffset: 0
}), fc);
var Zn, mn, t8, s8, n8, i8;
class St extends as {
  constructor(e) {
    super();
    C(this, mn);
    C(this, Zn);
    g(this, Zn, e), new qs(), e.keyShortcut && new Nw(e.keyShortcut);
  }
  onSetup() {
    const { disabled: e } = this.$props;
    this.setAttributes({
      "data-pressed": r(this, Zn).isPresssed,
      "aria-pressed": c(this, mn, t8).bind(this),
      "aria-disabled": () => e() ? "true" : null
    });
  }
  onAttach(e) {
    Me(e, "tabindex", "0"), Me(e, "role", "button"), Me(e, "type", "button");
  }
  onConnect(e) {
    const n = i1(e, c(this, mn, n8).bind(this));
    for (const i of ["click", "touchstart"])
      n.add(i, c(this, mn, i8).bind(this), {
        passive: !0
      });
  }
}
Zn = new WeakMap(), mn = new WeakSet(), t8 = function() {
  return x3(r(this, Zn).isPresssed());
}, s8 = function(e) {
  Vd(r(this, Zn).isPresssed) && r(this, Zn).isPresssed.set((n) => !n);
}, n8 = function(e) {
  if (this.$props.disabled() || this.el.hasAttribute("data-disabled")) {
    e.preventDefault(), e.stopImmediatePropagation();
    return;
  }
  e.preventDefault(), (r(this, Zn).onPress ?? c(this, mn, s8)).call(this, e);
}, i8 = function(e) {
  this.$props.disabled() && (e.preventDefault(), e.stopImmediatePropagation());
}, $(St, "props", {
  disabled: !1
});
var pc, oo;
let r8 = (pc = class extends de {
  constructor() {
    super();
    C(this, oo, ee(!1));
    new St({
      isPresssed: r(this, oo)
    });
  }
  /**
   * Whether the toggle is currently in a `pressed` state.
   */
  get pressed() {
    return r(this, oo).call(this);
  }
}, oo = new WeakMap(), $(pc, "props", {
  disabled: !1,
  defaultPressed: !1
}), pc);
const Dx = r8.prototype;
Le(Dx, "pressed");
function _x(s) {
  return s ? "true" : "false";
}
function wt(s) {
  return () => _x(s());
}
var Cc, jn, gn, o8, a8, c8, l8;
let Fx = (Cc = class extends de {
  constructor() {
    super();
    C(this, gn);
    C(this, jn);
    new St({
      isPresssed: c(this, gn, a8).bind(this),
      onPress: c(this, gn, o8).bind(this)
    });
  }
  onSetup() {
    g(this, jn, Ae());
    const { canAirPlay: e, isAirPlayConnected: n } = r(this, jn).$state;
    this.setAttributes({
      "data-active": n,
      "data-supported": e,
      "data-state": c(this, gn, c8).bind(this),
      "aria-hidden": wt(() => !e())
    });
  }
  onAttach(e) {
    e.setAttribute("data-media-tooltip", "airplay"), d1(e, c(this, gn, l8).bind(this));
  }
}, jn = new WeakMap(), gn = new WeakSet(), o8 = function(e) {
  r(this, jn).remote.requestAirPlay(e);
}, a8 = function() {
  const { remotePlaybackType: e, remotePlaybackState: n } = r(this, jn).$state;
  return e() === "airplay" && n() !== "disconnected";
}, c8 = function() {
  const { remotePlaybackType: e, remotePlaybackState: n } = r(this, jn).$state;
  return e() === "airplay" && n();
}, l8 = function() {
  const { remotePlaybackState: e } = r(this, jn).$state;
  return `AirPlay ${e()}`;
}, $(Cc, "props", St.props), Cc);
var mc, Bn, yn, u8, d8, h8, f8;
let qx = (mc = class extends de {
  constructor() {
    super();
    C(this, yn);
    C(this, Bn);
    new St({
      isPresssed: c(this, yn, d8).bind(this),
      onPress: c(this, yn, u8).bind(this)
    });
  }
  onSetup() {
    g(this, Bn, Ae());
    const { canGoogleCast: e, isGoogleCastConnected: n } = r(this, Bn).$state;
    this.setAttributes({
      "data-active": n,
      "data-supported": e,
      "data-state": c(this, yn, h8).bind(this),
      "aria-hidden": wt(() => !e())
    });
  }
  onAttach(e) {
    e.setAttribute("data-media-tooltip", "google-cast"), d1(e, c(this, yn, f8).bind(this));
  }
}, Bn = new WeakMap(), yn = new WeakSet(), u8 = function(e) {
  r(this, Bn).remote.requestGoogleCast(e);
}, d8 = function() {
  const { remotePlaybackType: e, remotePlaybackState: n } = r(this, Bn).$state;
  return e() === "google-cast" && n() !== "disconnected";
}, h8 = function() {
  const { remotePlaybackType: e, remotePlaybackState: n } = r(this, Bn).$state;
  return e() === "google-cast" && n();
}, f8 = function() {
  const { remotePlaybackState: e } = r(this, Bn).$state;
  return `Google Cast ${e()}`;
}, $(mc, "props", St.props), mc);
var gc, W1, fr, p8, jl;
let Zx = (gc = class extends de {
  constructor() {
    super();
    C(this, fr);
    C(this, W1);
    new St({
      isPresssed: c(this, fr, jl).bind(this),
      keyShortcut: "togglePaused",
      onPress: c(this, fr, p8).bind(this)
    });
  }
  onSetup() {
    g(this, W1, Ae());
    const { paused: e, ended: n } = r(this, W1).$state;
    this.setAttributes({
      "data-paused": e,
      "data-ended": n
    });
  }
  onAttach(e) {
    e.setAttribute("data-media-tooltip", "play"), d1(e, "Play");
  }
}, W1 = new WeakMap(), fr = new WeakSet(), p8 = function(e) {
  const n = r(this, W1).remote;
  c(this, fr, jl).call(this) ? n.pause(e) : n.play(e);
}, jl = function() {
  const { paused: e } = r(this, W1).$state;
  return !e();
}, $(gc, "props", St.props), gc);
var yc, K1, vn, C8, Bl, Gl;
let jx = (yc = class extends de {
  constructor() {
    super();
    C(this, vn);
    C(this, K1);
    new St({
      isPresssed: c(this, vn, Bl).bind(this),
      keyShortcut: "toggleCaptions",
      onPress: c(this, vn, C8).bind(this)
    });
  }
  onSetup() {
    g(this, K1, Ae()), this.setAttributes({
      "data-active": c(this, vn, Bl).bind(this),
      "data-supported": () => !c(this, vn, Gl).call(this),
      "aria-hidden": wt(c(this, vn, Gl).bind(this))
    });
  }
  onAttach(e) {
    e.setAttribute("data-media-tooltip", "caption"), d1(e, "Captions");
  }
}, K1 = new WeakMap(), vn = new WeakSet(), C8 = function(e) {
  r(this, K1).remote.toggleCaptions(e);
}, Bl = function() {
  const { textTrack: e } = r(this, K1).$state, n = e();
  return !!n && es(n);
}, Gl = function() {
  const { hasCaptions: e } = r(this, K1).$state;
  return !e();
}, $(yc, "props", St.props), yc);
var vc, Ai, ii, m8, Ul, g8;
let Bx = (vc = class extends de {
  constructor() {
    super();
    C(this, ii);
    C(this, Ai);
    new St({
      isPresssed: c(this, ii, Ul).bind(this),
      keyShortcut: "toggleFullscreen",
      onPress: c(this, ii, m8).bind(this)
    });
  }
  onSetup() {
    g(this, Ai, Ae());
    const { fullscreen: e } = r(this, Ai).$state, n = c(this, ii, g8).bind(this);
    this.setAttributes({
      "data-active": e,
      "data-supported": n,
      "aria-hidden": wt(() => !n())
    });
  }
  onAttach(e) {
    e.setAttribute("data-media-tooltip", "fullscreen"), d1(e, "Fullscreen");
  }
}, Ai = new WeakMap(), ii = new WeakSet(), m8 = function(e) {
  const n = r(this, Ai).remote, i = this.$props.target();
  c(this, ii, Ul).call(this) ? n.exitFullscreen(i, e) : n.enterFullscreen(i, e);
}, Ul = function() {
  const { fullscreen: e } = r(this, Ai).$state;
  return e();
}, g8 = function() {
  const { canFullscreen: e } = r(this, Ai).$state;
  return e();
}, $(vc, "props", {
  ...St.props,
  target: "prefer-media"
}), vc);
var bc, z1, an, y8, ya, v8;
let Gx = (bc = class extends de {
  constructor() {
    super();
    C(this, an);
    C(this, z1);
    new St({
      isPresssed: c(this, an, ya).bind(this),
      keyShortcut: "toggleMuted",
      onPress: c(this, an, y8).bind(this)
    });
  }
  onSetup() {
    g(this, z1, Ae()), this.setAttributes({
      "data-muted": c(this, an, ya).bind(this),
      "data-state": c(this, an, v8).bind(this)
    });
  }
  onAttach(e) {
    e.setAttribute("data-media-mute-button", ""), e.setAttribute("data-media-tooltip", "mute"), d1(e, "Mute");
  }
}, z1 = new WeakMap(), an = new WeakSet(), y8 = function(e) {
  const n = r(this, z1).remote;
  c(this, an, ya).call(this) ? n.unmute(e) : n.mute(e);
}, ya = function() {
  const { muted: e, volume: n } = r(this, z1).$state;
  return e() || n() === 0;
}, v8 = function() {
  const { muted: e, volume: n } = r(this, z1).$state, i = n();
  if (e() || i === 0) return "muted";
  if (i >= 0.5) return "high";
  if (i < 0.5) return "low";
}, $(bc, "props", St.props), bc);
var wc, Ni, ri, b8, Wl, w8;
let Ux = (wc = class extends de {
  constructor() {
    super();
    C(this, ri);
    C(this, Ni);
    new St({
      isPresssed: c(this, ri, Wl).bind(this),
      keyShortcut: "togglePictureInPicture",
      onPress: c(this, ri, b8).bind(this)
    });
  }
  onSetup() {
    g(this, Ni, Ae());
    const { pictureInPicture: e } = r(this, Ni).$state, n = c(this, ri, w8).bind(this);
    this.setAttributes({
      "data-active": e,
      "data-supported": n,
      "aria-hidden": wt(() => !n())
    });
  }
  onAttach(e) {
    e.setAttribute("data-media-tooltip", "pip"), d1(e, "PiP");
  }
}, Ni = new WeakMap(), ri = new WeakSet(), b8 = function(e) {
  const n = r(this, Ni).remote;
  c(this, ri, Wl).call(this) ? n.exitPictureInPicture(e) : n.enterPictureInPicture(e);
}, Wl = function() {
  const { pictureInPicture: e } = r(this, Ni).$state;
  return e();
}, w8 = function() {
  const { canPictureInPicture: e } = r(this, Ni).$state;
  return e();
}, $(wc, "props", St.props), wc);
var xc, Ri, c1, x8, S8, $8;
let Wx = (xc = class extends de {
  constructor() {
    super();
    C(this, c1);
    C(this, Ri);
    new qs();
  }
  onSetup() {
    g(this, Ri, Ae());
    const { seeking: e } = r(this, Ri).$state, { seconds: n } = this.$props, i = c(this, c1, x8).bind(this);
    this.setAttributes({
      seconds: n,
      "data-seeking": e,
      "data-supported": i,
      "aria-hidden": wt(() => !i())
    });
  }
  onAttach(e) {
    Me(e, "tabindex", "0"), Me(e, "role", "button"), Me(e, "type", "button"), e.setAttribute("data-media-tooltip", "seek"), d1(e, c(this, c1, S8).bind(this));
  }
  onConnect(e) {
    i1(e, c(this, c1, $8).bind(this));
  }
}, Ri = new WeakMap(), c1 = new WeakSet(), x8 = function() {
  const { canSeek: e } = r(this, Ri).$state;
  return e();
}, S8 = function() {
  const { seconds: e } = this.$props;
  return `Seek ${e() > 0 ? "forward" : "backward"} ${e()} seconds`;
}, $8 = function(e) {
  const { seconds: n, disabled: i } = this.$props;
  if (i()) return;
  const { currentTime: o } = r(this, Ri).$state, a = o() + n();
  r(this, Ri).remote.seek(a, e);
}, $(xc, "props", {
  disabled: !1,
  seconds: 30
}), xc);
var Sc, Y1, r2, E8;
let Kx = (Sc = class extends de {
  constructor() {
    super();
    C(this, r2);
    C(this, Y1);
    new qs();
  }
  onSetup() {
    g(this, Y1, Ae());
    const { disabled: e } = this.$props, { live: n, liveEdge: i } = r(this, Y1).$state, o = () => !n();
    this.setAttributes({
      "data-edge": i,
      "data-hidden": o,
      "aria-disabled": wt(() => e() || i()),
      "aria-hidden": wt(o)
    });
  }
  onAttach(e) {
    Me(e, "tabindex", "0"), Me(e, "role", "button"), Me(e, "type", "button"), e.setAttribute("data-media-tooltip", "live");
  }
  onConnect(e) {
    i1(e, c(this, r2, E8).bind(this));
  }
}, Y1 = new WeakMap(), r2 = new WeakSet(), E8 = function(e) {
  const { disabled: n } = this.$props, { liveEdge: i } = r(this, Y1).$state;
  n() || i() || r(this, Y1).remote.seekToLiveEdge(e);
}, $(Sc, "props", {
  disabled: !1
}), Sc);
const vr = new ci({
  min: 0,
  max: 100,
  value: 0,
  step: 1,
  pointerValue: 0,
  focused: !1,
  dragging: !1,
  pointing: !1,
  hidden: !1,
  get active() {
    return this.dragging || this.focused || this.pointing;
  },
  get fillRate() {
    return B7(this.min, this.max, this.value);
  },
  get fillPercent() {
    return this.fillRate * 100;
  },
  get pointerRate() {
    return B7(this.min, this.max, this.pointerValue);
  },
  get pointerPercent() {
    return this.pointerRate * 100;
  }
});
function B7(s, t, e) {
  const n = t - s, i = e - s;
  return n > 0 ? i / n : 0;
}
var g6, Hi, o2, L8;
class T8 extends as {
  constructor(e) {
    super();
    C(this, o2);
    C(this, g6);
    C(this, Hi);
    g(this, g6, e);
  }
  onConnect(e) {
    g(this, Hi, new IntersectionObserver((n) => {
      var i, o;
      (o = (i = r(this, g6)).callback) == null || o.call(i, n, r(this, Hi));
    }, r(this, g6))), r(this, Hi).observe(e), ue(c(this, o2, L8).bind(this));
  }
}
g6 = new WeakMap(), Hi = new WeakMap(), o2 = new WeakSet(), /**
 * Disconnect any active intersection observers.
 */
L8 = function() {
  var e;
  (e = r(this, Hi)) == null || e.disconnect(), g(this, Hi, void 0);
};
const Du = ai(), w3 = ai();
function zx(s, t, e, n) {
  return Nu(s, bt(e, Dc(n)), t);
}
function Yx(s, t, e, n) {
  const i = Nu(0, e, 1), o = t - s, a = o * i, l = a / n, d = n * Math.round(l);
  return s + d;
}
const X2 = {
  Left: -1,
  ArrowLeft: -1,
  Up: 1,
  ArrowUp: 1,
  Right: 1,
  ArrowRight: 1,
  Down: -1,
  ArrowDown: -1
};
var yt, Oi, y6, B, P8, Di, Ms, Gn, M8, k8, I8, V8, A8, va, di, p3, N8, R8, H8, O8, ba, Kl, v6, Un, D8, _8, zl, Yl, F8, q8, a2;
class Qx extends as {
  constructor(e, n) {
    super();
    C(this, B);
    C(this, yt);
    C(this, Oi);
    C(this, y6);
    C(this, Di, null);
    C(this, Ms, null);
    C(this, Gn, null);
    // -------------------------------------------------------------------------------------------
    // Keyboard Events
    // -------------------------------------------------------------------------------------------
    C(this, v6);
    C(this, Un, !1);
    C(this, a2, u1(
      (e) => {
        c(this, B, di).call(this, c(this, B, p3).call(this, e), e);
      },
      20,
      { leading: !0 }
    ));
    g(this, yt, e), g(this, Oi, n);
  }
  onSetup() {
    ln(w3) && g(this, y6, Ye(w3));
  }
  onConnect(e) {
    E(c(this, B, I8).bind(this, e)), E(c(this, B, V8).bind(this, e)), r(this, yt).swipeGesture && E(c(this, B, P8).bind(this));
  }
}
yt = new WeakMap(), Oi = new WeakMap(), y6 = new WeakMap(), B = new WeakSet(), P8 = function() {
  var n;
  const { pointer: e } = r(this, Oi).$state;
  if (e() !== "coarse" || !r(this, yt).swipeGesture()) {
    g(this, Di, null);
    return;
  }
  g(this, Di, (n = r(this, Oi).player.el) == null ? void 0 : n.querySelector(
    "media-provider,[data-media-provider]"
  )), r(this, Di) && new Pe(r(this, Di)).add("touchstart", c(this, B, M8).bind(this), {
    passive: !0
  }).add("touchmove", c(this, B, k8).bind(this), { passive: !1 });
}, Di = new WeakMap(), Ms = new WeakMap(), Gn = new WeakMap(), M8 = function(e) {
  g(this, Ms, e.touches[0]);
}, k8 = function(e) {
  if (Rs(r(this, Ms)) || Ru(e)) return;
  const n = e.touches[0], i = n.clientX - r(this, Ms).clientX, o = n.clientY - r(this, Ms).clientY, a = this.$state.dragging();
  !a && Math.abs(o) > 5 || a || (e.preventDefault(), Math.abs(i) > 20 && (g(this, Ms, n), g(this, Gn, this.$state.value()), c(this, B, ba).call(this, r(this, Gn), e)));
}, I8 = function(e) {
  const { hidden: n } = this.$props;
  Ze(e, "focus", c(this, B, A8).bind(this)), !(n() || r(this, yt).isDisabled()) && new Pe(e).add("keyup", c(this, B, _8).bind(this)).add("keydown", c(this, B, D8).bind(this)).add("pointerenter", c(this, B, N8).bind(this)).add("pointermove", c(this, B, R8).bind(this)).add("pointerleave", c(this, B, H8).bind(this)).add("pointerdown", c(this, B, O8).bind(this));
}, V8 = function(e) {
  r(this, yt).isDisabled() || !this.$state.dragging() || new Pe(document).add("pointerup", c(this, B, F8).bind(this), { capture: !0 }).add("pointermove", r(this, a2).bind(this)).add("touchmove", c(this, B, q8).bind(this), {
    passive: !1
  });
}, A8 = function() {
  c(this, B, di).call(this, this.$state.value());
}, va = function(e, n) {
  var p, f, m, y;
  const { value: i, min: o, max: a, dragging: l } = this.$state, d = Math.max(o(), Math.min(e, a()));
  i.set(d);
  const h = this.createEvent("value-change", { detail: d, trigger: n });
  if (this.dispatch(h), (f = (p = r(this, yt)).onValueChange) == null || f.call(p, h), l()) {
    const v = this.createEvent("drag-value-change", { detail: d, trigger: n });
    this.dispatch(v), (y = (m = r(this, yt)).onDragValueChange) == null || y.call(m, v);
  }
}, di = function(e, n) {
  const { pointerValue: i, dragging: o } = this.$state;
  i.set(e), this.dispatch("pointer-value-change", { detail: e, trigger: n }), o() && c(this, B, va).call(this, e, n);
}, p3 = function(e) {
  let n, i = this.el.getBoundingClientRect(), { min: o, max: a } = this.$state;
  if (this.$props.orientation() === "vertical") {
    const { bottom: l, height: d } = i;
    n = (l - e.clientY) / d;
  } else if (r(this, Ms) && qt(r(this, Gn))) {
    const { width: l } = r(this, Di).getBoundingClientRect(), d = (e.clientX - r(this, Ms).clientX) / l, h = a() - o(), p = h * Math.abs(d);
    n = (d < 0 ? r(this, Gn) - p : r(this, Gn) + p) / h;
  } else {
    const { left: l, width: d } = i;
    n = (e.clientX - l) / d;
  }
  return Math.max(
    o(),
    Math.min(
      a(),
      r(this, yt).roundValue(
        Yx(o(), a(), n, r(this, yt).getStep())
      )
    )
  );
}, N8 = function(e) {
  this.$state.pointing.set(!0);
}, R8 = function(e) {
  const { dragging: n } = this.$state;
  n() || c(this, B, di).call(this, c(this, B, p3).call(this, e), e);
}, H8 = function(e) {
  this.$state.pointing.set(!1);
}, O8 = function(e) {
  if (e.button !== 0) return;
  const n = c(this, B, p3).call(this, e);
  c(this, B, ba).call(this, n, e), c(this, B, di).call(this, n, e);
}, ba = function(e, n) {
  var a, l, d, h;
  const { dragging: i } = this.$state;
  if (i()) return;
  i.set(!0), r(this, Oi).remote.pauseControls(n);
  const o = this.createEvent("drag-start", { detail: e, trigger: n });
  this.dispatch(o), (l = (a = r(this, yt)).onDragStart) == null || l.call(a, o), (h = (d = r(this, y6)) == null ? void 0 : d.onDragStart) == null || h.call(d);
}, Kl = function(e, n) {
  var a, l, d, h;
  const { dragging: i } = this.$state;
  if (!i()) return;
  i.set(!1), r(this, Oi).remote.resumeControls(n);
  const o = this.createEvent("drag-end", { detail: e, trigger: n });
  this.dispatch(o), (l = (a = r(this, yt)).onDragEnd) == null || l.call(a, o), g(this, Ms, null), g(this, Gn, null), (h = (d = r(this, y6)) == null ? void 0 : d.onDragEnd) == null || h.call(d);
}, v6 = new WeakMap(), Un = new WeakMap(), D8 = function(e) {
  if (!Object.keys(X2).includes(e.key)) return;
  const { key: i } = e, o = c(this, B, zl).call(this, e);
  if (!Rs(o)) {
    c(this, B, di).call(this, o, e), c(this, B, va).call(this, o, e);
    return;
  }
  const a = c(this, B, Yl).call(this, e);
  r(this, Un) || (g(this, Un, i === r(this, v6)), !this.$state.dragging() && r(this, Un) && c(this, B, ba).call(this, a, e)), c(this, B, di).call(this, a, e), g(this, v6, i);
}, _8 = function(e) {
  if (!Object.keys(X2).includes(e.key) || !Rs(c(this, B, zl).call(this, e))) return;
  const i = r(this, Un) ? this.$state.pointerValue() : c(this, B, Yl).call(this, e);
  c(this, B, va).call(this, i, e), c(this, B, Kl).call(this, i, e), g(this, v6, ""), g(this, Un, !1);
}, zl = function(e) {
  let n = e.key, { min: i, max: o } = this.$state;
  return n === "Home" || n === "PageUp" ? i() : n === "End" || n === "PageDown" ? o() : !e.metaKey && /^[0-9]$/.test(n) ? (o() - i()) / 10 * Number(n) : null;
}, Yl = function(e) {
  var S, L;
  const { key: n, shiftKey: i } = e;
  e.preventDefault(), e.stopPropagation();
  const { shiftKeyMultiplier: o } = this.$props, { min: a, max: l, value: d, pointerValue: h } = this.$state, p = r(this, yt).getStep(), f = r(this, yt).getKeyStep(), m = i ? f * o() : f, y = Number(X2[n]), v = m * y, b = r(this, Un) ? h() : ((L = (S = r(this, yt)).getValue) == null ? void 0 : L.call(S)) ?? d(), x = (b + v) / p;
  return Math.max(a(), Math.min(l(), Number((p * x).toFixed(3))));
}, // -------------------------------------------------------------------------------------------
// Document (Pointer Events)
// -------------------------------------------------------------------------------------------
F8 = function(e) {
  if (e.button !== 0) return;
  e.preventDefault(), e.stopImmediatePropagation();
  const n = c(this, B, p3).call(this, e);
  c(this, B, di).call(this, n, e), c(this, B, Kl).call(this, n, e);
}, q8 = function(e) {
  e.preventDefault();
}, a2 = new WeakMap();
const j6 = ai(() => ({}));
var ao, Ht, co, lo, lt, Z8, j8, B8, G8, U8, W8, K8, Ql, c2;
class is extends as {
  constructor(e) {
    super();
    C(this, lt);
    C(this, ao);
    C(this, Ht);
    C(this, co, ee(!0));
    C(this, lo, ee(!0));
    C(this, c2, gr((e, n) => {
      var i, o;
      (i = this.el) == null || i.style.setProperty("--slider-fill", e + "%"), (o = this.el) == null || o.style.setProperty("--slider-pointer", n + "%");
    }));
    g(this, Ht, e);
  }
  onSetup() {
    g(this, ao, Ae());
    const e = new qs();
    e.attach(this), this.$state.focused = e.focused.bind(e), ln(j6) || ns(j6, {
      default: "value"
    }), ns(Du, {
      orientation: this.$props.orientation,
      disabled: r(this, Ht).isDisabled,
      preview: ee(null)
    }), E(c(this, lt, B8).bind(this)), E(c(this, lt, G8).bind(this)), E(c(this, lt, U8).bind(this)), c(this, lt, K8).call(this), new Qx(r(this, Ht), r(this, ao)).attach(this), new T8({
      callback: c(this, lt, Z8).bind(this)
    }).attach(this);
  }
  onAttach(e) {
    Me(e, "role", "slider"), Me(e, "tabindex", "0"), Me(e, "autocomplete", "off"), q ? c(this, lt, Ql).call(this) : E(c(this, lt, Ql).bind(this));
  }
  onConnect(e) {
    ue(k5(e, r(this, co).set)), E(c(this, lt, j8).bind(this));
  }
}
ao = new WeakMap(), Ht = new WeakMap(), co = new WeakMap(), lo = new WeakMap(), lt = new WeakSet(), Z8 = function(e) {
  r(this, lo).set(e[0].isIntersecting);
}, // -------------------------------------------------------------------------------------------
// Watch
// -------------------------------------------------------------------------------------------
j8 = function() {
  const { hidden: e } = this.$props;
  this.$state.hidden.set(e() || !r(this, co).call(this) || !r(this, lo).bind(this));
}, B8 = function() {
  const { dragging: e, value: n, min: i, max: o } = this.$state;
  O(e) || n.set(zx(i(), o(), n(), r(this, Ht).getStep()));
}, G8 = function() {
  this.$state.step.set(r(this, Ht).getStep());
}, U8 = function() {
  if (!r(this, Ht).isDisabled()) return;
  const { dragging: e, pointing: n } = this.$state;
  e.set(!1), n.set(!1);
}, // -------------------------------------------------------------------------------------------
// ARIA
// -------------------------------------------------------------------------------------------
W8 = function() {
  return x3(r(this, Ht).isDisabled());
}, // -------------------------------------------------------------------------------------------
// Attributes
// -------------------------------------------------------------------------------------------
K8 = function() {
  const { orientation: e } = this.$props, { dragging: n, active: i, pointing: o } = this.$state;
  this.setAttributes({
    "data-dragging": n,
    "data-pointing": o,
    "data-active": i,
    "aria-disabled": c(this, lt, W8).bind(this),
    "aria-valuemin": r(this, Ht).aria.valueMin ?? this.$state.min,
    "aria-valuemax": r(this, Ht).aria.valueMax ?? this.$state.max,
    "aria-valuenow": r(this, Ht).aria.valueNow,
    "aria-valuetext": r(this, Ht).aria.valueText,
    "aria-orientation": e
  });
}, Ql = function() {
  const { fillPercent: e, pointerPercent: n } = this.$state;
  r(this, c2).call(this, bt(e(), 3), bt(n(), 3));
}, c2 = new WeakMap(), $(is, "props", {
  hidden: !1,
  disabled: !1,
  step: 1,
  keyStep: 1,
  orientation: "horizontal",
  shiftKeyMultiplier: 5
});
var sa, bn, z8, Y8, Q8, X8;
let Ho = (sa = class extends de {
  constructor() {
    super();
    C(this, bn);
    new is({
      getStep: this.$props.step,
      getKeyStep: this.$props.keyStep,
      roundValue: Math.round,
      isDisabled: this.$props.disabled,
      aria: {
        valueNow: c(this, bn, z8).bind(this),
        valueText: c(this, bn, Y8).bind(this)
      }
    });
  }
  onSetup() {
    E(c(this, bn, Q8).bind(this)), E(c(this, bn, X8).bind(this));
  }
}, bn = new WeakSet(), // -------------------------------------------------------------------------------------------
// Props
// -------------------------------------------------------------------------------------------
z8 = function() {
  const { value: e } = this.$state;
  return Math.round(e());
}, Y8 = function() {
  const { value: e, max: n } = this.$state;
  return bt(e() / n() * 100, 2) + "%";
}, // -------------------------------------------------------------------------------------------
// Watch
// -------------------------------------------------------------------------------------------
Q8 = function() {
  const { value: e } = this.$props;
  this.$state.value.set(e());
}, X8 = function() {
  const { min: e, max: n } = this.$props;
  this.$state.min.set(e()), this.$state.max.set(n());
}, $(sa, "props", {
  ...is.props,
  min: 0,
  max: 100,
  value: 0
}), $(sa, "state", vr), sa);
const Tn = /* @__PURE__ */ new Map(), Ko = /* @__PURE__ */ new Map();
var uo, b6, ho, Ge, J8, ef, Jl, e9, t9, s9, tf, wa;
const c7 = class c7 {
  constructor(t, e, n) {
    C(this, Ge);
    C(this, uo);
    C(this, b6);
    C(this, ho);
    $(this, "$images", ee([]));
    g(this, b6, t), g(this, ho, e), g(this, uo, n), E(c(this, Ge, J8).bind(this));
  }
  static create(t, e) {
    const n = Ae();
    return new c7(t, e, n);
  }
};
uo = new WeakMap(), b6 = new WeakMap(), ho = new WeakMap(), Ge = new WeakSet(), J8 = function() {
  var n;
  const { canLoad: t } = r(this, uo).$state;
  if (!t()) return;
  const e = r(this, b6).call(this);
  if (e) {
    if (ie(e) && Tn.has(e)) {
      const i = Tn.get(e);
      if (Tn.delete(e), Tn.set(e, i), Tn.size > 99) {
        const o = Tn.keys().next().value;
        Tn.delete(o);
      }
      this.$images.set(Tn.get(e));
    } else if (ie(e)) {
      const i = r(this, ho).call(this), o = e + "::" + i;
      if (!Ko.has(o)) {
        const a = new Promise(async (l, d) => {
          try {
            const h = await fetch(e, {
              credentials: b3(i)
            });
            if (h.headers.get("content-type") === "application/json") {
              const f = await h.json();
              if (vt(f))
                if (f[0] && "text" in f[0])
                  l(c(this, Ge, e9).call(this, f));
                else {
                  for (let m = 0; m < f.length; m++) {
                    const y = f[m];
                    En(Nd(y), !1), En(
                      "url" in y && ie(y.url),
                      !1
                    ), En(
                      "startTime" in y && qt(y.startTime),
                      !1
                    );
                  }
                  l(f);
                }
              else
                l(c(this, Ge, Jl).call(this, f));
              return;
            }
            import("./prod-DTLJXtPo.js").then((f) => f.d).then(async ({ parseResponse: f }) => {
              try {
                const { cues: m } = await f(h);
                l(c(this, Ge, e9).call(this, m));
              } catch (m) {
                d(m);
              }
            });
          } catch (h) {
            d(h);
          }
        }).then((l) => (Tn.set(o, l), l)).catch((l) => {
          c(this, Ge, wa).call(this, e, l);
        }).finally(() => {
          ie(o) && Ko.delete(o);
        });
        Ko.set(o, a);
      }
      (n = Ko.get(o)) == null || n.then((a) => {
        this.$images.set(a || []);
      });
    } else if (vt(e))
      try {
        this.$images.set(c(this, Ge, ef).call(this, e));
      } catch (i) {
        c(this, Ge, wa).call(this, e, i);
      }
    else
      try {
        this.$images.set(c(this, Ge, Jl).call(this, e));
      } catch (i) {
        c(this, Ge, wa).call(this, e, i);
      }
    return () => {
      this.$images.set([]);
    };
  }
}, ef = function(t) {
  const e = c(this, Ge, t9).call(this);
  return t.map((n, i) => (En(
    n.url && ie(n.url)
  ), En(
    "startTime" in n && qt(n.startTime)
  ), {
    ...n,
    url: ie(n.url) ? c(this, Ge, s9).call(this, n.url, e) : n.url
  }));
}, Jl = function(t) {
  var a;
  En(ie(t.url)), En(vt(t.tiles) && ((a = t.tiles) == null ? void 0 : a.length));
  const e = new URL(t.url), n = [], i = "tile_width" in t ? t.tile_width : t.tileWidth, o = "tile_height" in t ? t.tile_height : t.tileHeight;
  for (const l of t.tiles)
    n.push({
      url: e,
      startTime: "start" in l ? l.start : l.startTime,
      width: i,
      height: o,
      coords: { x: l.x, y: l.y }
    });
  return n;
}, e9 = function(t) {
  for (let i = 0; i < t.length; i++) {
    const o = t[i];
    En(
      "startTime" in o && qt(o.startTime)
    ), En(
      "text" in o && ie(o.text)
    );
  }
  const e = [], n = c(this, Ge, t9).call(this);
  for (const i of t) {
    const [o, a] = i.text.split("#"), l = c(this, Ge, tf).call(this, a);
    e.push({
      url: c(this, Ge, s9).call(this, o, n),
      startTime: i.startTime,
      endTime: i.endTime,
      width: l == null ? void 0 : l.w,
      height: l == null ? void 0 : l.h,
      coords: l && qt(l.x) && qt(l.y) ? { x: l.x, y: l.y } : void 0
    });
  }
  return e;
}, t9 = function() {
  let t = O(r(this, b6));
  return !ie(t) || !/^https?:/.test(t) ? location.href : t;
}, s9 = function(t, e) {
  return /^https?:/.test(t) ? new URL(t) : new URL(t, e);
}, tf = function(t) {
  if (!t) return {};
  const [e, n] = t.split("="), i = n == null ? void 0 : n.split(","), o = {};
  if (!e || !i)
    return null;
  for (let a = 0; a < e.length; a++) {
    const l = +i[a];
    isNaN(l) || (o[e[a]] = l);
  }
  return o;
}, wa = function(t, e) {
};
let Xl = c7;
var w6, x6, ve, sf, n9, nf, rf, of, af, i9, cf, lf, r9, hi, uf;
class ja extends de {
  constructor() {
    super(...arguments);
    C(this, ve);
    $(this, "media");
    C(this, w6);
    C(this, x6, []);
  }
  onSetup() {
    this.media = Ae(), g(this, w6, Xl.create(this.$props.src, this.$state.crossOrigin)), c(this, ve, n9).call(this), this.setAttributes({
      "data-loading": c(this, ve, af).bind(this),
      "data-error": c(this, ve, i9).bind(this),
      "data-hidden": this.$state.hidden,
      "aria-hidden": wt(this.$state.hidden)
    });
  }
  onConnect(e) {
    E(c(this, ve, sf).bind(this)), E(c(this, ve, cf).bind(this)), E(c(this, ve, n9).bind(this)), E(c(this, ve, nf).bind(this)), E(c(this, ve, lf).bind(this)), E(c(this, ve, r9).bind(this));
  }
  getTime() {
    return this.$props.time();
  }
}
w6 = new WeakMap(), x6 = new WeakMap(), ve = new WeakSet(), sf = function() {
  const e = this.$state.img();
  e && new Pe(e).add("load", c(this, ve, rf).bind(this)).add("error", c(this, ve, of).bind(this));
}, n9 = function() {
  const { crossOrigin: e } = this.$props, { crossOrigin: n } = this.$state, { crossOrigin: i } = this.media.$state, o = e() !== null ? e() : i();
  n.set(o === !0 ? "anonymous" : o);
}, nf = function() {
  const { src: e, loading: n, error: i } = this.$state;
  return e() && (n.set(!0), i.set(null)), () => {
    c(this, ve, uf).call(this), n.set(!1), i.set(null);
  };
}, rf = function() {
  const { loading: e, error: n } = this.$state;
  c(this, ve, r9).call(this), e.set(!1), n.set(null);
}, of = function(e) {
  const { loading: n, error: i } = this.$state;
  n.set(!1), i.set(e);
}, af = function() {
  const { loading: e, hidden: n } = this.$state;
  return !n() && e();
}, i9 = function() {
  const { error: e } = this.$state;
  return !Rs(e());
}, cf = function() {
  const { hidden: e } = this.$state, { duration: n } = this.media.$state, i = r(this, w6).$images();
  e.set(c(this, ve, i9).call(this) || !Number.isFinite(n()) || i.length === 0);
}, lf = function() {
  let e = r(this, w6).$images();
  if (!e.length) return;
  let n = this.getTime(), { src: i, activeThumbnail: o } = this.$state, a = -1, l = null;
  for (let d = e.length - 1; d >= 0; d--) {
    const h = e[d];
    if (n >= h.startTime && (!h.endTime || n < h.endTime)) {
      a = d;
      break;
    }
  }
  e[a] && (l = e[a]), o.set(l), i.set((l == null ? void 0 : l.url.href) || "");
}, r9 = function() {
  if (!this.scope || this.$state.hidden()) return;
  const e = this.el, n = this.$state.img(), i = this.$state.activeThumbnail();
  if (!n || !i || !e) return;
  let o = i.width ?? n.naturalWidth, a = (i == null ? void 0 : i.height) ?? n.naturalHeight, {
    maxWidth: l,
    maxHeight: d,
    minWidth: h,
    minHeight: p,
    width: f,
    height: m
  } = getComputedStyle(this.el);
  h === "100%" && (h = parseFloat(f) + ""), p === "100%" && (p = parseFloat(m) + "");
  let y = Math.max(parseInt(h) / o, parseInt(p) / a), v = Math.min(
    Math.max(parseInt(h), parseInt(l)) / o,
    Math.max(parseInt(p), parseInt(d)) / a
  ), b = !isNaN(v) && v < 1 ? v : y > 1 ? y : 1;
  c(this, ve, hi).call(this, e, "--thumbnail-width", `${o * b}px`), c(this, ve, hi).call(this, e, "--thumbnail-height", `${a * b}px`), c(this, ve, hi).call(this, e, "--thumbnail-aspect-ratio", String(bt(o / a, 5))), c(this, ve, hi).call(this, n, "width", `${n.naturalWidth * b}px`), c(this, ve, hi).call(this, n, "height", `${n.naturalHeight * b}px`), c(this, ve, hi).call(this, n, "transform", i.coords ? `translate(-${i.coords.x * b}px, -${i.coords.y * b}px)` : ""), c(this, ve, hi).call(this, n, "max-width", "none");
}, hi = function(e, n, i) {
  e.style.setProperty(n, i), r(this, x6).push(() => e.style.removeProperty(n));
}, uf = function() {
  for (const e of r(this, x6)) e();
  g(this, x6, []);
}, $(ja, "props", {
  src: null,
  time: 0,
  crossOrigin: null
}), $(ja, "state", new ci({
  src: "",
  img: null,
  thumbnails: [],
  activeThumbnail: null,
  crossOrigin: null,
  loading: !1,
  error: null,
  hidden: !1
}));
var fo;
class Xx extends ja {
  constructor() {
    super(...arguments);
    C(this, fo);
  }
  onAttach(e) {
    g(this, fo, K6(Ho.state));
  }
  getTime() {
    const { duration: e, clipStartTime: n } = this.media.$state;
    return n() + r(this, fo).pointerRate() * e();
  }
}
fo = new WeakMap();
var _i, po, je, df, hf, o9, ff, a9, pf, Cf, c9, mf, gf;
class Ba extends de {
  constructor() {
    super(...arguments);
    C(this, je);
    C(this, _i);
    C(this, po);
  }
  get video() {
    return this.$state.video();
  }
  onSetup() {
    g(this, _i, Ae()), g(this, po, K6(Ho.state)), c(this, je, o9).call(this), this.setAttributes({
      "data-loading": c(this, je, ff).bind(this),
      "data-hidden": this.$state.hidden,
      "data-error": c(this, je, a9).bind(this),
      "aria-hidden": wt(this.$state.hidden)
    });
  }
  onAttach(e) {
    E(c(this, je, df).bind(this)), E(c(this, je, hf).bind(this)), E(c(this, je, o9).bind(this)), E(c(this, je, pf).bind(this)), E(c(this, je, Cf).bind(this)), E(c(this, je, gf).bind(this));
  }
}
_i = new WeakMap(), po = new WeakMap(), je = new WeakSet(), df = function() {
  const e = this.$state.video();
  e && (e.readyState >= 2 && c(this, je, c9).call(this), new Pe(e).add("canplay", c(this, je, c9).bind(this)).add("error", c(this, je, mf).bind(this)));
}, hf = function() {
  const { src: e } = this.$state, { canLoad: n } = r(this, _i).$state;
  e.set(n() ? this.$props.src() : null);
}, o9 = function() {
  const { crossOrigin: e } = this.$props, { crossOrigin: n } = this.$state, { crossOrigin: i } = r(this, _i).$state, o = e() !== null ? e() : i();
  n.set(o === !0 ? "anonymous" : o);
}, ff = function() {
  const { canPlay: e, hidden: n } = this.$state;
  return !e() && !n();
}, a9 = function() {
  const { error: e } = this.$state;
  return !Rs(e);
}, pf = function() {
  const { src: e, hidden: n } = this.$state, { canLoad: i, duration: o } = r(this, _i).$state;
  n.set(i() && (!e() || c(this, je, a9).call(this) || !Number.isFinite(o())));
}, Cf = function() {
  const { src: e, canPlay: n, error: i } = this.$state;
  e(), n.set(!1), i.set(null);
}, c9 = function(e) {
  const { canPlay: n, error: i } = this.$state;
  n.set(!0), i.set(null), this.dispatch("can-play", { trigger: e });
}, mf = function(e) {
  const { canPlay: n, error: i } = this.$state;
  n.set(!1), i.set(e), this.dispatch("error", { trigger: e });
}, gf = function() {
  const { video: e, canPlay: n } = this.$state, { duration: i } = r(this, _i).$state, { pointerRate: o } = r(this, po), a = e();
  n() && a && Number.isFinite(i()) && Number.isFinite(o()) && (a.currentTime = o() * i());
}, $(Ba, "props", {
  src: null,
  crossOrigin: null
}), $(Ba, "state", new ci({
  video: null,
  src: null,
  crossOrigin: null,
  canPlay: !1,
  error: null,
  hidden: !1
}));
const Jx = Ba.prototype;
Le(Jx, "video");
var Fi, l2, Co;
class _u extends de {
  constructor() {
    super(...arguments);
    C(this, Fi);
    C(this, l2);
    C(this, Co);
  }
  onSetup() {
    g(this, Co, K6(Ho.state)), g(this, Fi, Ye(j6)), g(this, l2, e1(this.getValueText.bind(this)));
  }
  /**
   * Returns the current value formatted as text based on prop settings.
   */
  getValueText() {
    var b, x;
    const {
      type: e,
      format: n,
      decimalPlaces: i,
      padHours: o,
      padMinutes: a,
      showHours: l,
      showMs: d
    } = this.$props, { value: h, pointerValue: p, min: f, max: m } = r(this, Co), y = (n == null ? void 0 : n()) ?? r(this, Fi).default, v = e() === "current" ? h() : p();
    if (y === "percent") {
      const S = m() - f(), L = v / S * 100;
      return (r(this, Fi).percent ?? bt)(L, i()) + "%";
    } else return y === "time" ? (r(this, Fi).time ?? E2)(v, {
      padHrs: o(),
      padMins: a(),
      showHrs: l(),
      showMs: d()
    }) : (((x = (b = r(this, Fi)).value) == null ? void 0 : x.call(b, v)) ?? v.toFixed(2)) + "";
  }
}
Fi = new WeakMap(), l2 = new WeakMap(), Co = new WeakMap(), $(_u, "props", {
  type: "pointer",
  format: null,
  showHours: !1,
  showMs: !1,
  padHours: null,
  padMinutes: null,
  decimalPlaces: 2
});
const eS = _u.prototype;
ot(eS, "getValueText");
var S6, mo;
class yf extends de {
  constructor() {
    super(...arguments);
    C(this, S6);
    C(this, mo, gr(() => {
      const { disabled: e, orientation: n } = r(this, S6);
      if (e()) return;
      const i = this.el, { offset: o, noClamp: a } = this.$props;
      i && vf(i, {
        clamp: !a(),
        offset: o(),
        orientation: n()
      });
    }));
  }
  onSetup() {
    g(this, S6, Ye(Du));
    const { active: e } = K6(Ho.state);
    this.setAttributes({
      "data-visible": e
    });
  }
  onAttach(e) {
    Object.assign(e.style, {
      position: "absolute",
      top: 0,
      left: 0,
      width: "max-content"
    });
  }
  onConnect(e) {
    const { preview: n } = r(this, S6);
    n.set(e), ue(() => n.set(null)), E(r(this, mo).bind(this));
    const i = new ResizeObserver(r(this, mo).bind(this));
    i.observe(e), ue(() => i.disconnect());
  }
}
S6 = new WeakMap(), mo = new WeakMap(), $(yf, "props", {
  offset: 0,
  noClamp: !1
});
function vf(s, {
  clamp: t,
  offset: e,
  orientation: n
}) {
  const i = getComputedStyle(s), o = parseFloat(i.width), a = parseFloat(i.height), l = {
    top: null,
    right: null,
    bottom: null,
    left: null
  };
  if (l[n === "horizontal" ? "bottom" : "left"] = `calc(100% + var(--media-slider-preview-offset, ${e}px))`, n === "horizontal") {
    const d = o / 2;
    if (!t)
      l.left = `calc(var(--slider-pointer) - ${d}px)`;
    else {
      const h = `max(0px, calc(var(--slider-pointer) - ${d}px))`, p = `calc(100% - ${o}px)`;
      l.left = `min(${h}, ${p})`;
    }
  } else {
    const d = a / 2;
    if (!t)
      l.bottom = `calc(var(--slider-pointer) - ${d}px)`;
    else {
      const h = `max(${d}px, calc(var(--slider-pointer) - ${d}px))`, p = `calc(100% - ${a}px)`;
      l.bottom = `min(${h}, ${p})`;
    }
  }
  Object.assign(s.style, l);
}
var hs, ft, bf, wf, xf, Sf, $f, go, Ef, Tf, Lf;
class l9 extends de {
  constructor() {
    super(...arguments);
    C(this, ft);
    C(this, hs);
    C(this, go, u1(c(this, ft, Ef).bind(this), 25));
  }
  onSetup() {
    g(this, hs, Ae());
    const { audioGain: e } = r(this, hs).$state;
    ns(j6, {
      default: "percent",
      value(n) {
        return (n * (e() ?? 1)).toFixed(2);
      },
      percent(n) {
        return Math.round(n * (e() ?? 1));
      }
    }), new is({
      getStep: this.$props.step,
      getKeyStep: this.$props.keyStep,
      roundValue: Math.round,
      isDisabled: c(this, ft, Sf).bind(this),
      aria: {
        valueMax: c(this, ft, xf).bind(this),
        valueNow: c(this, ft, bf).bind(this),
        valueText: c(this, ft, wf).bind(this)
      },
      onDragValueChange: c(this, ft, Lf).bind(this),
      onValueChange: c(this, ft, Tf).bind(this)
    }).attach(this), E(c(this, ft, $f).bind(this));
  }
  onAttach(e) {
    e.setAttribute("data-media-volume-slider", ""), Me(e, "aria-label", "Volume");
    const { canSetVolume: n } = r(this, hs).$state;
    this.setAttributes({
      "data-supported": n,
      "aria-hidden": wt(() => !n())
    });
  }
}
hs = new WeakMap(), ft = new WeakSet(), bf = function() {
  const { value: e } = this.$state, { audioGain: n } = r(this, hs).$state;
  return Math.round(e() * (n() ?? 1));
}, wf = function() {
  const { value: e, max: n } = this.$state, { audioGain: i } = r(this, hs).$state;
  return bt(e() / n() * (i() ?? 1) * 100, 2) + "%";
}, xf = function() {
  const { audioGain: e } = r(this, hs).$state;
  return this.$state.max() * (e() ?? 1);
}, Sf = function() {
  const { disabled: e } = this.$props, { canSetVolume: n } = r(this, hs).$state;
  return e() || !n();
}, $f = function() {
  const { muted: e, volume: n } = r(this, hs).$state, i = e() ? 0 : n() * 100;
  this.$state.value.set(i), this.dispatch("value-change", { detail: i });
}, go = new WeakMap(), Ef = function(e) {
  if (!e.trigger) return;
  const n = bt(e.detail / 100, 3);
  r(this, hs).remote.changeVolume(n, e);
}, Tf = function(e) {
  r(this, go).call(this, e);
}, Lf = function(e) {
  r(this, go).call(this, e);
}, $(l9, "props", {
  ...is.props,
  keyStep: 5,
  shiftKeyMultiplier: 2
}), $(l9, "state", vr);
var qi, ut, Pf, Mf, kf, If, Vf, d9, Af, Nf;
class u9 extends de {
  constructor() {
    super(...arguments);
    C(this, ut);
    C(this, qi);
  }
  onSetup() {
    g(this, qi, Ae()), ns(j6, {
      default: "percent",
      percent: (e, n) => bt(this.$state.value(), n) + "%"
    }), new is({
      getStep: this.$props.step,
      getKeyStep: this.$props.keyStep,
      roundValue: Math.round,
      isDisabled: c(this, ut, Vf).bind(this),
      aria: {
        valueNow: c(this, ut, Pf).bind(this),
        valueText: c(this, ut, Mf).bind(this)
      },
      onDragValueChange: c(this, ut, Nf).bind(this),
      onValueChange: c(this, ut, Af).bind(this)
    }).attach(this), E(c(this, ut, kf).bind(this)), E(c(this, ut, If).bind(this));
  }
  onAttach(e) {
    e.setAttribute("data-media-audio-gain-slider", ""), Me(e, "aria-label", "Audio Boost");
    const { canSetAudioGain: n } = r(this, qi).$state;
    this.setAttributes({
      "data-supported": n,
      "aria-hidden": wt(() => !n())
    });
  }
}
qi = new WeakMap(), ut = new WeakSet(), Pf = function() {
  const { value: e } = this.$state;
  return Math.round(e());
}, Mf = function() {
  const { value: e } = this.$state;
  return e() + "%";
}, kf = function() {
  const { min: e, max: n } = this.$props;
  this.$state.min.set(e()), this.$state.max.set(n());
}, If = function() {
  const { audioGain: e } = r(this, qi).$state, n = ((e() ?? 1) - 1) * 100;
  this.$state.value.set(n), this.dispatch("value-change", { detail: n });
}, Vf = function() {
  const { disabled: e } = this.$props, { canSetAudioGain: n } = r(this, qi).$state;
  return e() || !n();
}, d9 = function(e) {
  if (!e.trigger) return;
  const n = bt(1 + e.detail / 100, 2);
  r(this, qi).remote.changeAudioGain(n, e);
}, Af = function(e) {
  c(this, ut, d9).call(this, e);
}, Nf = function(e) {
  c(this, ut, d9).call(this, e);
}, $(u9, "props", {
  ...is.props,
  step: 25,
  keyStep: 25,
  shiftKeyMultiplier: 2,
  min: 0,
  max: 300
}), $(u9, "state", vr);
var Zi, it, Rf, Hf, Of, Df, _f, Ff, yo, qf, Zf, jf;
class h9 extends de {
  constructor() {
    super(...arguments);
    C(this, it);
    C(this, Zi);
    C(this, yo, u1(c(this, it, qf).bind(this), 25));
  }
  onSetup() {
    g(this, Zi, Ae()), new is({
      getStep: this.$props.step,
      getKeyStep: this.$props.keyStep,
      roundValue: c(this, it, _f),
      isDisabled: c(this, it, Ff).bind(this),
      aria: {
        valueNow: c(this, it, Rf).bind(this),
        valueText: c(this, it, Hf).bind(this)
      },
      onDragValueChange: c(this, it, jf).bind(this),
      onValueChange: c(this, it, Zf).bind(this)
    }).attach(this), E(c(this, it, Of).bind(this)), E(c(this, it, Df).bind(this));
  }
  onAttach(e) {
    e.setAttribute("data-media-speed-slider", ""), Me(e, "aria-label", "Speed");
    const { canSetPlaybackRate: n } = r(this, Zi).$state;
    this.setAttributes({
      "data-supported": n,
      "aria-hidden": wt(() => !n())
    });
  }
}
Zi = new WeakMap(), it = new WeakSet(), Rf = function() {
  const { value: e } = this.$state;
  return e();
}, Hf = function() {
  const { value: e } = this.$state;
  return e() + "x";
}, Of = function() {
  const { min: e, max: n } = this.$props;
  this.$state.min.set(e()), this.$state.max.set(n());
}, Df = function() {
  const { playbackRate: e } = r(this, Zi).$state, n = e();
  this.$state.value.set(n), this.dispatch("value-change", { detail: n });
}, _f = function(e) {
  return bt(e, 2);
}, Ff = function() {
  const { disabled: e } = this.$props, { canSetPlaybackRate: n } = r(this, Zi).$state;
  return e() || !n();
}, yo = new WeakMap(), qf = function(e) {
  if (!e.trigger) return;
  const n = e.detail;
  r(this, Zi).remote.changePlaybackRate(n, e);
}, Zf = function(e) {
  r(this, yo).call(this, e);
}, jf = function(e) {
  r(this, yo).call(this, e);
}, $(h9, "props", {
  ...is.props,
  step: 0.25,
  keyStep: 0.25,
  shiftKeyMultiplier: 2,
  min: 0,
  max: 2
}), $(h9, "state", vr);
var ks, $6, pt, Bf, Gf, Uf, Wf, Kf, vo, zf, Yf, Qf;
class f9 extends de {
  constructor() {
    super(...arguments);
    C(this, pt);
    C(this, ks);
    C(this, $6, e1(() => {
      const { qualities: e } = r(this, ks).$state;
      return Sw(e());
    }));
    C(this, vo, u1(c(this, pt, zf).bind(this), 25));
  }
  onSetup() {
    g(this, ks, Ae()), new is({
      getStep: this.$props.step,
      getKeyStep: this.$props.keyStep,
      roundValue: Math.round,
      isDisabled: c(this, pt, Kf).bind(this),
      aria: {
        valueNow: c(this, pt, Bf).bind(this),
        valueText: c(this, pt, Gf).bind(this)
      },
      onDragValueChange: c(this, pt, Qf).bind(this),
      onValueChange: c(this, pt, Yf).bind(this)
    }).attach(this), E(c(this, pt, Uf).bind(this)), E(c(this, pt, Wf).bind(this));
  }
  onAttach(e) {
    e.setAttribute("data-media-quality-slider", ""), Me(e, "aria-label", "Video Quality");
    const { qualities: n, canSetQuality: i } = r(this, ks).$state, o = e1(() => i() && n().length > 0);
    this.setAttributes({
      "data-supported": o,
      "aria-hidden": wt(() => !o())
    });
  }
}
ks = new WeakMap(), $6 = new WeakMap(), pt = new WeakSet(), Bf = function() {
  const { value: e } = this.$state;
  return e();
}, Gf = function() {
  const { quality: e } = r(this, ks).$state;
  if (!e()) return "";
  const { height: n, bitrate: i } = e(), o = i && i > 0 ? `${(i / 1e6).toFixed(2)} Mbps` : null;
  return n ? `${n}p${o ? ` (${o})` : ""}` : "Auto";
}, Uf = function() {
  const e = r(this, $6).call(this);
  this.$state.max.set(Math.max(0, e.length - 1));
}, Wf = function() {
  let { quality: e } = r(this, ks).$state, n = r(this, $6).call(this), i = Math.max(0, n.indexOf(e()));
  this.$state.value.set(i), this.dispatch("value-change", { detail: i });
}, Kf = function() {
  const { disabled: e } = this.$props, { canSetQuality: n, qualities: i } = r(this, ks).$state;
  return e() || i().length <= 1 || !n();
}, vo = new WeakMap(), zf = function(e) {
  if (!e.trigger) return;
  const { qualities: n } = r(this, ks), i = O(r(this, $6))[e.detail];
  r(this, ks).remote.changeQuality(n.indexOf(i), e);
}, Yf = function(e) {
  r(this, vo).call(this, e);
}, Qf = function(e) {
  r(this, vo).call(this, e);
}, $(f9, "props", {
  ...is.props,
  step: 1,
  keyStep: 1,
  shiftKeyMultiplier: 1
}), $(f9, "state", vr);
var qe, E6, bo, z, Xf, Jf, ep, tp, sp, p9, np, T6, ip, rp, C9, op, m9, ap, cp, lp, up, dp, hp, g1, fp, pp, Cp;
class Ga extends de {
  constructor() {
    super();
    C(this, z);
    C(this, qe);
    C(this, E6);
    C(this, bo, ee(null));
    C(this, T6, !1);
    const { noSwipeGesture: e } = this.$props;
    new is({
      swipeGesture: () => !e(),
      getValue: c(this, z, m9).bind(this),
      getStep: c(this, z, ap).bind(this),
      getKeyStep: c(this, z, cp).bind(this),
      roundValue: c(this, z, lp),
      isDisabled: c(this, z, up).bind(this),
      aria: {
        valueNow: c(this, z, dp).bind(this),
        valueText: c(this, z, hp).bind(this)
      },
      onDragStart: c(this, z, ip).bind(this),
      onDragValueChange: c(this, z, rp).bind(this),
      onDragEnd: c(this, z, C9).bind(this),
      onValueChange: c(this, z, op).bind(this)
    });
  }
  onSetup() {
    g(this, qe, Ae()), ns(j6, {
      default: "time",
      value: c(this, z, pp).bind(this),
      time: c(this, z, Cp).bind(this)
    }), this.setAttributes({
      "data-chapters": c(this, z, Jf).bind(this)
    }), this.setStyles({
      "--slider-progress": c(this, z, Xf).bind(this)
    }), E(c(this, z, tp).bind(this)), E(c(this, z, ep).bind(this));
  }
  onAttach(e) {
    e.setAttribute("data-media-time-slider", ""), Me(e, "aria-label", "Seek");
  }
  onConnect(e) {
    E(c(this, z, sp).bind(this)), Vu(r(this, qe).textTracks, "chapters", r(this, bo).set);
  }
}
qe = new WeakMap(), E6 = new WeakMap(), bo = new WeakMap(), z = new WeakSet(), Xf = function() {
  const { bufferedEnd: e, duration: n } = r(this, qe).$state;
  return bt(Math.min(e() / Math.max(n(), 1), 1) * 100, 3) + "%";
}, Jf = function() {
  var n;
  const { duration: e } = r(this, qe).$state;
  return ((n = r(this, bo).call(this)) == null ? void 0 : n.cues.length) && Number.isFinite(e()) && e() > 0;
}, ep = function() {
  g(this, E6, u1(
    c(this, z, p9).bind(this),
    this.$props.seekingRequestThrottle()
  ));
}, tp = function() {
  if (this.$state.hidden()) return;
  const { value: e, dragging: n } = this.$state, i = c(this, z, m9).call(this);
  O(n) || (e.set(i), this.dispatch("value-change", { detail: i }));
}, sp = function() {
  const e = r(this, qe).player.el, { preview: n } = Ye(Du);
  e && n() && J(e, "data-preview", this.$state.active());
}, p9 = function(e, n) {
  r(this, qe).remote.seeking(e, n);
}, np = function(e, n, i) {
  r(this, E6).cancel();
  const { live: o } = r(this, qe).$state;
  if (o() && n >= 99) {
    r(this, qe).remote.seekToLiveEdge(i);
    return;
  }
  r(this, qe).remote.seek(e, i);
}, T6 = new WeakMap(), ip = function(e) {
  const { pauseWhileDragging: n } = this.$props;
  if (n()) {
    const { paused: i } = r(this, qe).$state;
    g(this, T6, !i()), r(this, qe).remote.pause(e);
  }
}, rp = function(e) {
  r(this, E6).call(this, c(this, z, g1).call(this, e.detail), e);
}, C9 = function(e) {
  const { seeking: n } = r(this, qe).$state;
  O(n) || c(this, z, p9).call(this, c(this, z, g1).call(this, e.detail), e);
  const i = e.detail;
  c(this, z, np).call(this, c(this, z, g1).call(this, i), i, e);
  const { pauseWhileDragging: o } = this.$props;
  o() && r(this, T6) && (r(this, qe).remote.play(e), g(this, T6, !1));
}, op = function(e) {
  const { dragging: n } = this.$state;
  n() || !e.trigger || c(this, z, C9).call(this, e);
}, // -------------------------------------------------------------------------------------------
// Props
// -------------------------------------------------------------------------------------------
m9 = function() {
  const { currentTime: e } = r(this, qe).$state;
  return c(this, z, fp).call(this, e());
}, ap = function() {
  const e = this.$props.step() / r(this, qe).$state.duration() * 100;
  return Number.isFinite(e) ? e : 1;
}, cp = function() {
  const e = this.$props.keyStep() / r(this, qe).$state.duration() * 100;
  return Number.isFinite(e) ? e : 1;
}, lp = function(e) {
  return bt(e, 3);
}, up = function() {
  const { disabled: e } = this.$props, { canSeek: n } = r(this, qe).$state;
  return e() || !n();
}, // -------------------------------------------------------------------------------------------
// ARIA
// -------------------------------------------------------------------------------------------
dp = function() {
  const { value: e } = this.$state;
  return Math.round(e());
}, hp = function() {
  const e = c(this, z, g1).call(this, this.$state.value()), { duration: n } = r(this, qe).$state;
  return Number.isFinite(e) ? `${cl(e)} out of ${cl(n())}` : "live";
}, // -------------------------------------------------------------------------------------------
// Format
// -------------------------------------------------------------------------------------------
g1 = function(e) {
  const { duration: n } = r(this, qe).$state;
  return bt(e / 100 * n(), 5);
}, fp = function(e) {
  const { liveEdge: n, duration: i } = r(this, qe).$state, o = Math.max(0, Math.min(1, n() ? 1 : Math.min(e, i()) / i()));
  return Number.isNaN(o) ? 0 : Number.isFinite(o) ? o * 100 : 100;
}, pp = function(e) {
  const n = c(this, z, g1).call(this, e), { live: i, duration: o } = r(this, qe).$state;
  return Number.isFinite(n) ? (i() ? n - o() : n).toFixed(0) : "LIVE";
}, Cp = function(e, n) {
  const i = c(this, z, g1).call(this, e), { live: o, duration: a } = r(this, qe).$state, l = o() ? i - a() : i;
  return Number.isFinite(i) ? `${l < 0 ? "-" : ""}${E2(Math.abs(l), n)}` : "LIVE";
}, $(Ga, "props", {
  ...is.props,
  step: 0.1,
  keyStep: 5,
  shiftKeyMultiplier: 2,
  pauseWhileDragging: !1,
  noSwipeGesture: !1,
  seekingRequestThrottle: 100
}), $(Ga, "state", vr);
var Ot, Q1, L6, Js, Tt, X1, Lt, Wn, J1, ji, Y, g9, y9, mp, gp, yp, vp, bp, xa, v9, b9, wp, u2, d2, xp, Sa, $a, Sp, $p, Ep, Tp, wo, Lp, Pp, Mp;
class Fu extends de {
  constructor() {
    super(...arguments);
    C(this, Y);
    C(this, Ot);
    C(this, Q1);
    C(this, L6);
    C(this, Js, null);
    C(this, Tt, []);
    C(this, X1, ee(null));
    C(this, Lt, ee([]));
    C(this, Wn, ee(-1));
    C(this, J1, ee(-1));
    C(this, ji, 0);
    C(this, u2, gr((e) => {
      var d;
      let n, i = r(this, Lt).call(this), { seekableStart: o } = r(this, Ot).$state, a = o(), l = c(this, Y, Sa).call(this, i);
      for (let h = r(this, ji); h < r(this, Tt).length; h++)
        if (n = c(this, Y, $a).call(this, i[h], e, a, l), (d = r(this, Tt)[h]) == null || d.style.setProperty("--chapter-progress", n + "%"), n < 100) {
          g(this, ji, h);
          break;
        }
    }));
    C(this, d2, e1(c(this, Y, xp).bind(this)));
    C(this, wo, w2(
      () => {
        const e = O(r(this, X1));
        !this.scope || !e || !e.cues.length || (r(this, Lt).set(c(this, Y, Sp).call(this, e.cues)), r(this, Wn).set(0), g(this, ji, 0));
      },
      150,
      !0
    ));
  }
  get cues() {
    return r(this, Lt).call(this);
  }
  get activeCue() {
    return r(this, Lt).call(this)[r(this, Wn).call(this)] || null;
  }
  get activePointerCue() {
    return r(this, Lt).call(this)[r(this, J1).call(this)] || null;
  }
  onSetup() {
    g(this, Ot, Ae()), g(this, Q1, K6(Ga.state));
  }
  onAttach(e) {
    Vu(r(this, Ot).textTracks, "chapters", c(this, Y, g9).bind(this)), E(c(this, Y, $p).bind(this));
  }
  onConnect() {
    ue(() => c(this, Y, y9).bind(this));
  }
  onDestroy() {
    c(this, Y, g9).call(this, null);
  }
  setRefs(e) {
    var n;
    if (g(this, Tt, e), (n = r(this, L6)) == null || n.dispose(), r(this, Tt).length === 1) {
      const i = r(this, Tt)[0];
      i.style.width = "100%", i.style.setProperty("--chapter-fill", "var(--slider-fill)"), i.style.setProperty("--chapter-progress", "var(--slider-progress)");
    } else r(this, Tt).length > 0 && Mt(() => c(this, Y, mp).call(this), g(this, L6, q6()));
  }
}
Ot = new WeakMap(), Q1 = new WeakMap(), L6 = new WeakMap(), Js = new WeakMap(), Tt = new WeakMap(), X1 = new WeakMap(), Lt = new WeakMap(), Wn = new WeakMap(), J1 = new WeakMap(), ji = new WeakMap(), Y = new WeakSet(), g9 = function(e) {
  O(r(this, X1)) !== e && (c(this, Y, y9).call(this), r(this, X1).set(e));
}, y9 = function() {
  var e;
  g(this, Tt, []), r(this, Lt).set([]), r(this, Wn).set(-1), r(this, J1).set(-1), g(this, ji, 0), (e = r(this, L6)) == null || e.dispose();
}, mp = function() {
  r(this, Tt).length && E(c(this, Y, gp).bind(this));
}, gp = function() {
  const { hidden: e } = r(this, Q1);
  e() || (E(c(this, Y, yp).bind(this)), E(c(this, Y, vp).bind(this)), E(c(this, Y, bp).bind(this)), E(c(this, Y, wp).bind(this)));
}, yp = function() {
  const e = r(this, Lt).call(this);
  if (!e.length) return;
  let n, { seekableStart: i, seekableEnd: o } = r(this, Ot).$state, a = i(), l = o() || e[e.length - 1].endTime, d = l - a, h = 100;
  for (let p = 0; p < e.length; p++)
    if (n = e[p], r(this, Tt)[p]) {
      const f = p === e.length - 1 ? h : bt((n.endTime - Math.max(a, n.startTime)) / d * 100, 3);
      r(this, Tt)[p].style.width = f + "%", h -= f;
    }
}, vp = function() {
  let { liveEdge: e, seekableStart: n, seekableEnd: i } = r(this, Ot).$state, { fillPercent: o, value: a } = r(this, Q1), l = r(this, Lt).call(this), d = e(), h = O(r(this, Wn)), p = l[h], f = d ? r(this, Lt).length - 1 : c(this, Y, b9).call(this, p && p.startTime / i() * 100 <= O(a) ? h : 0, o());
  d || !p ? c(this, Y, xa).call(this, 0, l.length, 100) : f > h ? c(this, Y, xa).call(this, h, f, 100) : f < h && c(this, Y, xa).call(this, f + 1, h + 1, 0);
  const m = d ? 100 : c(this, Y, $a).call(this, l[f], o(), n(), c(this, Y, Sa).call(this, l));
  c(this, Y, v9).call(this, r(this, Tt)[f], m), r(this, Wn).set(f);
}, bp = function() {
  let { pointing: e, pointerPercent: n } = r(this, Q1);
  if (!e()) {
    r(this, J1).set(-1);
    return;
  }
  const i = c(this, Y, b9).call(this, 0, n());
  r(this, J1).set(i);
}, xa = function(e, n, i) {
  for (let o = e; o < n; o++) c(this, Y, v9).call(this, r(this, Tt)[o], i);
}, v9 = function(e, n) {
  e && (e.style.setProperty("--chapter-fill", n + "%"), J(e, "data-active", n > 0 && n < 100), J(e, "data-ended", n === 100));
}, b9 = function(e, n) {
  let i = 0, o = r(this, Lt).call(this);
  if (n === 0) return 0;
  if (n === 100) return o.length - 1;
  let { seekableStart: a } = r(this, Ot).$state, l = a(), d = c(this, Y, Sa).call(this, o);
  for (let h = e; h < o.length; h++)
    if (i = c(this, Y, $a).call(this, o[h], n, l, d), i >= 0 && i < 100) return h;
  return 0;
}, wp = function() {
  r(this, u2).call(this, r(this, d2).call(this));
}, u2 = new WeakMap(), d2 = new WeakMap(), xp = function() {
  const { bufferedEnd: e, duration: n } = r(this, Ot).$state;
  return bt(Math.min(e() / Math.max(n(), 1), 1), 3) * 100;
}, Sa = function(e) {
  var o;
  const { seekableEnd: n } = r(this, Ot).$state, i = n();
  return Number.isFinite(i) ? i : ((o = e[e.length - 1]) == null ? void 0 : o.endTime) || 0;
}, $a = function(e, n, i, o) {
  if (!e || r(this, Lt).call(this).length === 0) return 0;
  const l = o - i, d = Math.max(0, e.startTime - i), h = Math.min(o, e.endTime) - i, p = d / l, f = p * 100, m = Math.min(1, p + (h - d) / l) * 100;
  return Math.max(
    0,
    bt(
      n >= m ? 100 : (n - f) / (m - f) * 100,
      3
    )
  );
}, Sp = function(e) {
  let n = [], { seekableStart: i, seekableEnd: o, duration: a } = r(this, Ot).$state, l = i(), d = o();
  e = e.filter((f) => f.startTime <= d && f.endTime >= l);
  const h = e[0];
  h && h.startTime > l && n.push(new window.VTTCue(l, h.startTime, ""));
  for (let f = 0; f < e.length - 1; f++) {
    const m = e[f], y = e[f + 1];
    if (n.push(m), y) {
      const v = y.startTime - m.endTime;
      v > 0 && n.push(new window.VTTCue(m.endTime, m.endTime + v, ""));
    }
  }
  const p = e[e.length - 1];
  if (p) {
    n.push(p);
    const f = a();
    f >= 0 && f - p.endTime > 1 && n.push(new window.VTTCue(p.endTime, a(), ""));
  }
  return n;
}, $p = function() {
  const { source: e } = r(this, Ot).$state;
  e(), c(this, Y, Ep).call(this);
}, Ep = function() {
  if (!this.scope) return;
  const { disabled: e } = this.$props;
  if (e()) {
    r(this, Lt).set([]), r(this, Wn).set(0), g(this, ji, 0);
    return;
  }
  const n = r(this, X1).call(this);
  if (n) {
    const i = r(this, wo).bind(this);
    i(), new Pe(n).add("add-cue", i).add("remove-cue", i), E(c(this, Y, Tp).bind(this));
  }
  return g(this, Js, c(this, Y, Mp).call(this)), r(this, Js) && E(c(this, Y, Lp).bind(this)), () => {
    r(this, Js) && (r(this, Js).textContent = "", g(this, Js, null));
  };
}, Tp = function() {
  r(this, Ot).$state.duration(), r(this, wo).call(this);
}, wo = new WeakMap(), Lp = function() {
  const e = this.activePointerCue || this.activeCue;
  r(this, Js) && (r(this, Js).textContent = (e == null ? void 0 : e.text) || "");
}, Pp = function() {
  let e = this.el;
  for (; e && e.getAttribute("role") !== "slider"; )
    e = e.parentElement;
  return e;
}, Mp = function() {
  const e = c(this, Y, Pp).call(this);
  return e ? e.querySelector('[data-part="chapter-title"]') : null;
}, $(Fu, "props", {
  disabled: !1
});
const T2 = Fu.prototype;
Le(T2, "cues");
Le(T2, "activeCue");
Le(T2, "activePointerCue");
ot(T2, "setRefs");
const Hs = ai();
function tS(s, t) {
  const e = Xd(s, t);
  for (const { el: n, top: i, left: o } of e)
    n.scroll({ top: i, left: o, behavior: t.behavior });
}
function sS(s, t = {}) {
  tS(s, {
    scrollMode: "if-needed",
    block: "center",
    inline: "center",
    ...t
  });
}
const nS = /* @__PURE__ */ [
  "a[href]",
  "[tabindex]",
  "input",
  "select",
  "button"
].map((s) => `${s}:not([aria-hidden='true'])`).join(","), iS = /* @__PURE__ */ new Set([
  "Escape",
  "Tab",
  "ArrowUp",
  "ArrowDown",
  "Home",
  "PageUp",
  "End",
  "PageDown",
  "Enter",
  " "
]);
var Bi, Is, Dt, xo, _e, y1, w9, kp, x9, Ip, Vp, Ea, Ap;
class rS {
  constructor(t) {
    C(this, _e);
    C(this, Bi, -1);
    C(this, Is, null);
    C(this, Dt, []);
    C(this, xo);
    g(this, xo, t);
  }
  get items() {
    return r(this, Dt);
  }
  attachMenu(t) {
    Ze(t, "focus", c(this, _e, kp).bind(this)), g(this, Is, t), ue(() => {
      g(this, Is, null);
    });
  }
  listen() {
    r(this, Is) && (this.update(), new Pe(r(this, Is)).add("keyup", c(this, _e, Ip).bind(this)).add("keydown", c(this, _e, Vp).bind(this)), ue(() => {
      g(this, Bi, -1), g(this, Dt, []);
    }));
  }
  update() {
    g(this, Bi, 0), g(this, Dt, c(this, _e, Ap).call(this));
  }
  scroll(t = c(this, _e, w9).call(this)) {
    const e = r(this, Dt)[t];
    e && requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        sS(e, {
          behavior: "smooth",
          boundary: (n) => !n.hasAttribute("data-root")
        });
      });
    });
  }
  focusActive(t = !0) {
    const e = c(this, _e, w9).call(this);
    c(this, _e, y1).call(this, e >= 0 ? e : 0, t);
  }
}
Bi = new WeakMap(), Is = new WeakMap(), Dt = new WeakMap(), xo = new WeakMap(), _e = new WeakSet(), y1 = function(t, e = !0) {
  var n;
  g(this, Bi, t), r(this, Dt)[t] ? (r(this, Dt)[t].focus({ preventScroll: !0 }), e && this.scroll(t)) : (n = r(this, Is)) == null || n.focus({ preventScroll: !0 });
}, w9 = function() {
  return r(this, Dt).findIndex(
    (t) => document.activeElement === t || t.getAttribute("role") === "menuitemradio" && t.getAttribute("aria-checked") === "true"
  );
}, kp = function() {
  r(this, Bi) >= 0 || (this.update(), this.focusActive());
}, x9 = function(t) {
  const e = t.target;
  if (Dd(t) && e instanceof Element) {
    const n = e.getAttribute("role");
    return !/a|input|select|button/.test(e.localName) && !n;
  }
  return iS.has(t.key);
}, Ip = function(t) {
  c(this, _e, x9).call(this, t) && (t.stopPropagation(), t.preventDefault());
}, Vp = function(t) {
  if (c(this, _e, x9).call(this, t))
    switch (t.stopPropagation(), t.preventDefault(), t.key) {
      case "Escape":
        r(this, xo).closeMenu(t);
        break;
      case "Tab":
        c(this, _e, y1).call(this, c(this, _e, Ea).call(this, t.shiftKey ? -1 : 1));
        break;
      case "ArrowUp":
        c(this, _e, y1).call(this, c(this, _e, Ea).call(this, -1));
        break;
      case "ArrowDown":
        c(this, _e, y1).call(this, c(this, _e, Ea).call(this, 1));
        break;
      case "Home":
      case "PageUp":
        c(this, _e, y1).call(this, 0);
        break;
      case "End":
      case "PageDown":
        c(this, _e, y1).call(this, r(this, Dt).length - 1);
        break;
    }
}, Ea = function(t) {
  var n;
  let e = r(this, Bi);
  do
    e = (e + t + r(this, Dt).length) % r(this, Dt).length;
  while (((n = r(this, Dt)[e]) == null ? void 0 : n.offsetParent) === null);
  return e;
}, Ap = function() {
  if (!r(this, Is)) return [];
  const t = r(this, Is).querySelectorAll(nS), e = [], n = (i) => i.getAttribute("role") === "menu";
  for (const i of t)
    Da(i) && i.offsetParent !== null && // does not have display: none
    I5(r(this, Is), i, n) && e.push(i);
  return e;
};
var oS = Object.defineProperty, aS = Object.getOwnPropertyDescriptor, Oo = (s, t, e, n) => {
  for (var i = aS(t, e), o = s.length - 1, a; o >= 0; o--)
    (a = s[o]) && (i = a(t, e, i) || i);
  return i && oS(t, e, i), i;
};
let cS = 0;
var $c, Vs, P6, M6, Pt, So, en, ht, Gi, Ui, er, tr, Kn, sr, $o, nr, te, Np, Rp, Hp, Op, Dp, S9, _p, k6, Fp, $9, qp, C3, Zp, jp, Bp, Gp, Up, Wp, h2, Kp, I6, f2, zp, p2, Yp, V6, A6, Qp;
let e3 = ($c = class extends de {
  constructor() {
    super();
    C(this, te);
    C(this, Vs);
    C(this, P6);
    C(this, M6);
    C(this, Pt, ee(!1));
    C(this, So, ee(!1));
    C(this, en, ee(null));
    C(this, ht, ee(null));
    C(this, Gi);
    C(this, Ui, /* @__PURE__ */ new Set());
    C(this, er, null);
    C(this, tr);
    C(this, Kn);
    C(this, sr, !1);
    C(this, $o, ee(!1));
    C(this, nr, /* @__PURE__ */ new Set());
    C(this, k6, !1);
    C(this, h2, c(this, te, Kp).bind(this));
    C(this, I6, !1);
    C(this, f2, c(this, te, zp).bind(this));
    C(this, p2, c(this, te, Yp).bind(this));
    C(this, V6, gr(() => {
      const e = O(r(this, ht));
      if (!e || q) return;
      let n = 0, i = getComputedStyle(e), o = [...e.children];
      for (const a of ["paddingTop", "paddingBottom", "borderTopWidth", "borderBottomWidth"])
        n += parseFloat(i[a]) || 0;
      for (const a of o)
        if (Da(a) && a.style.display === "contents")
          o.push(...a.children);
        else if (a.nodeType === 3)
          n += parseFloat(getComputedStyle(a).fontSize);
        else if (Da(a)) {
          if (!M5(a)) continue;
          const l = getComputedStyle(a);
          n += a.offsetHeight + (parseFloat(l.marginTop) || 0) + (parseFloat(l.marginBottom) || 0);
        }
      kt(e, "--menu-height", n + "px");
    }));
    C(this, A6, !1);
    const { showDelay: e } = this.$props;
    g(this, tr, new Gh({
      trigger: r(this, en),
      content: r(this, ht),
      showDelay: e,
      listen: (n, i, o) => {
        i1(n, (l) => {
          r(this, Pt).call(this) ? o(l) : i(l);
        });
        const a = c(this, te, Gp).call(this);
        a && i1(a, (l) => {
          l.stopPropagation(), o(l);
        });
      },
      onChange: c(this, te, Fp).bind(this)
    }));
  }
  get triggerElement() {
    return r(this, en).call(this);
  }
  get contentElement() {
    return r(this, ht).call(this);
  }
  get isSubmenu() {
    return !!r(this, Gi);
  }
  onSetup() {
    g(this, Vs, Ae());
    const e = ++cS;
    g(this, P6, `media-menu-${e}`), g(this, M6, `media-menu-button-${e}`), g(this, Kn, new rS({
      closeMenu: this.close.bind(this)
    })), ln(Hs) && g(this, Gi, Ye(Hs)), c(this, te, Np).call(this), this.setAttributes({
      "data-open": r(this, Pt),
      "data-root": !this.isSubmenu,
      "data-submenu": this.isSubmenu,
      "data-disabled": c(this, te, C3).bind(this)
    }), ns(Hs, {
      button: r(this, en),
      content: r(this, ht),
      expanded: r(this, Pt),
      hint: ee(""),
      submenu: !!r(this, Gi),
      disable: c(this, te, Zp).bind(this),
      attachMenuButton: c(this, te, Hp).bind(this),
      attachMenuItems: c(this, te, Op).bind(this),
      attachObserver: c(this, te, Dp).bind(this),
      disableMenuButton: c(this, te, _p).bind(this),
      addSubmenu: c(this, te, Wp).bind(this),
      onTransitionEvent: (n) => {
        r(this, nr).add(n), ue(() => {
          r(this, nr).delete(n);
        });
      }
    });
  }
  onAttach(e) {
    e.style.setProperty("display", "contents");
  }
  onConnect(e) {
    var n;
    E(c(this, te, Rp).bind(this)), this.isSubmenu && ((n = r(this, Gi)) == null || n.addSubmenu(this));
  }
  onDestroy() {
    r(this, en).set(null), r(this, ht).set(null), g(this, er, null), r(this, nr).clear();
  }
  open(e) {
    O(r(this, Pt)) || (r(this, tr).show(e), Ns());
  }
  close(e) {
    O(r(this, Pt)) && (r(this, tr).hide(e), Ns());
  }
}, Vs = new WeakMap(), P6 = new WeakMap(), M6 = new WeakMap(), Pt = new WeakMap(), So = new WeakMap(), en = new WeakMap(), ht = new WeakMap(), Gi = new WeakMap(), Ui = new WeakMap(), er = new WeakMap(), tr = new WeakMap(), Kn = new WeakMap(), sr = new WeakMap(), $o = new WeakMap(), nr = new WeakMap(), te = new WeakSet(), Np = function() {
  let e = -1, n = ln(w3) ? Ye(w3) : null;
  ns(w3, {
    onDragStart: () => {
      var i;
      (i = n == null ? void 0 : n.onDragStart) == null || i.call(n), window.clearTimeout(e), e = -1, g(this, sr, !0);
    },
    onDragEnd: () => {
      var i;
      (i = n == null ? void 0 : n.onDragEnd) == null || i.call(n), e = window.setTimeout(() => {
        g(this, sr, !1), e = -1;
      }, 300);
    }
  });
}, Rp = function() {
  const e = c(this, te, qp).call(this);
  this.isSubmenu || r(this, V6).call(this), c(this, te, S9).call(this, e), e && (E(() => {
    const { height: n } = r(this, Vs).$state, i = r(this, ht).call(this);
    i && kt(i, "--player-height", n() + "px");
  }), r(this, Kn).listen(), this.listen("pointerup", c(this, te, jp).bind(this)), Ze(window, "pointerup", c(this, te, Bp).bind(this)));
}, Hp = function(e) {
  const n = e.el, i = this.isSubmenu, o = wt(c(this, te, C3).bind(this));
  Me(n, "tabindex", i ? "-1" : "0"), Me(n, "role", i ? "menuitem" : "button"), J(n, "id", r(this, M6)), J(n, "aria-haspopup", "menu"), J(n, "aria-expanded", "false"), J(n, "data-root", !this.isSubmenu), J(n, "data-submenu", this.isSubmenu);
  const a = () => {
    J(n, "data-open", r(this, Pt).call(this)), J(n, "aria-disabled", o());
  };
  q ? a() : E(a), r(this, en).set(n), ue(() => {
    r(this, en).set(null);
  });
}, Op = function(e) {
  var a;
  const n = e.el;
  n.style.setProperty("display", "none"), J(n, "id", r(this, P6)), Me(n, "role", "menu"), Me(n, "tabindex", "-1"), J(n, "data-root", !this.isSubmenu), J(n, "data-submenu", this.isSubmenu), r(this, ht).set(n), ue(() => r(this, ht).set(null));
  const i = () => J(n, "data-open", r(this, Pt).call(this));
  q ? i() : E(i), r(this, Kn).attachMenu(n), c(this, te, S9).call(this, !1);
  const o = c(this, te, Qp).bind(this);
  this.isSubmenu ? (a = r(this, Gi)) == null || a.onTransitionEvent(o) : (e.listen("transitionstart", o), e.listen("transitionend", o), e.listen("animationend", r(this, V6)), e.listen("vds-menu-resize", r(this, V6)));
}, Dp = function(e) {
  g(this, er, e);
}, S9 = function(e) {
  const n = O(r(this, ht));
  n && J(n, "aria-hidden", x3(!e));
}, _p = function(e) {
  r(this, $o).set(e);
}, k6 = new WeakMap(), Fp = function(e, n) {
  var a, l, d, h, p, f;
  if (g(this, k6, Ao(n)), n == null || n.stopPropagation(), r(this, Pt).call(this) === e) return;
  if (c(this, te, C3).call(this)) {
    e && r(this, tr).hide(n);
    return;
  }
  (a = this.el) == null || a.dispatchEvent(
    new Event("vds-menu-resize", {
      bubbles: !0,
      composed: !0
    })
  );
  const i = r(this, en).call(this), o = r(this, ht).call(this);
  if (i && (J(i, "aria-controls", e && r(this, P6)), J(i, "aria-expanded", x3(e))), o && J(o, "aria-labelledby", e && r(this, M6)), r(this, Pt).set(e), c(this, te, Up).call(this, n), Ns(), r(this, k6)) {
    e ? o == null || o.focus() : i == null || i.focus();
    for (const m of [this.el, o])
      m && m.setAttribute("data-keyboard", "");
  } else
    for (const m of [this.el, o])
      m && m.removeAttribute("data-keyboard");
  if (this.dispatch(e ? "open" : "close", { trigger: n }), e)
    !this.isSubmenu && r(this, Vs).activeMenu !== this && ((l = r(this, Vs).activeMenu) == null || l.close(n), r(this, Vs).activeMenu = this), (h = (d = r(this, er)) == null ? void 0 : d.onOpen) == null || h.call(d, n);
  else {
    if (this.isSubmenu)
      for (const m of r(this, Ui)) m.close(n);
    else
      r(this, Vs).activeMenu = null;
    (f = (p = r(this, er)) == null ? void 0 : p.onClose) == null || f.call(p, n);
  }
  e && requestAnimationFrame(c(this, te, $9).bind(this));
}, $9 = function() {
  r(this, A6) || r(this, I6) || (r(this, Kn).update(), requestAnimationFrame(() => {
    r(this, k6) ? r(this, Kn).focusActive() : r(this, Kn).scroll();
  }));
}, qp = function() {
  return !c(this, te, C3).call(this) && r(this, Pt).call(this);
}, C3 = function() {
  return r(this, So).call(this) || r(this, $o).call(this);
}, Zp = function(e) {
  r(this, So).set(e);
}, jp = function(e) {
  const n = r(this, ht).call(this);
  r(this, sr) || n && I7(n, e) || e.stopPropagation();
}, Bp = function(e) {
  const n = r(this, ht).call(this);
  r(this, sr) || n && I7(n, e) || this.close(e);
}, Gp = function() {
  var n;
  const e = (n = this.el) == null ? void 0 : n.querySelector('[data-part="close-target"]');
  return this.el && e && I5(this.el, e, (i) => i.getAttribute("role") === "menu") ? e : null;
}, Up = function(e) {
  this.isSubmenu || (r(this, Pt).call(this) ? r(this, Vs).remote.pauseControls(e) : r(this, Vs).remote.resumeControls(e));
}, Wp = function(e) {
  r(this, Ui).add(e), new Pe(e).add("open", r(this, f2)).add("close", r(this, p2)), ue(r(this, h2));
}, h2 = new WeakMap(), Kp = function(e) {
  r(this, Ui).delete(e);
}, I6 = new WeakMap(), f2 = new WeakMap(), zp = function(e) {
  var i;
  g(this, I6, !0);
  const n = r(this, ht).call(this);
  this.isSubmenu && ((i = this.triggerElement) == null || i.setAttribute("aria-hidden", "true"));
  for (const o of r(this, Ui))
    if (o !== e.target)
      for (const a of [o.el, o.triggerElement])
        a == null || a.setAttribute("aria-hidden", "true");
  if (n) {
    const o = e.target.el;
    for (const a of n.children)
      a.contains(o) ? a.setAttribute("data-open", "") : a !== o && a.setAttribute("data-hidden", "");
  }
}, p2 = new WeakMap(), Yp = function(e) {
  var i;
  g(this, I6, !1);
  const n = r(this, ht).call(this);
  this.isSubmenu && ((i = this.triggerElement) == null || i.setAttribute("aria-hidden", "false"));
  for (const o of r(this, Ui))
    for (const a of [o.el, o.triggerElement])
      a == null || a.setAttribute("aria-hidden", "false");
  if (n)
    for (const o of n.children)
      o.removeAttribute("data-open"), o.removeAttribute("data-hidden");
}, V6 = new WeakMap(), A6 = new WeakMap(), Qp = function(e) {
  const n = r(this, ht).call(this);
  n && e.propertyName === "height" && (g(this, A6, e.type === "transitionstart"), J(n, "data-transition", r(this, A6) ? "height" : null), r(this, Pt).call(this) && c(this, te, $9).call(this));
  for (const i of r(this, nr)) i(e);
}, $($c, "props", {
  showDelay: 0
}), $c);
Oo([
  Le
], e3.prototype, "triggerElement");
Oo([
  Le
], e3.prototype, "contentElement");
Oo([
  Le
], e3.prototype, "isSubmenu");
Oo([
  ot
], e3.prototype, "open");
Oo([
  ot
], e3.prototype, "close");
var Wi, Eo, oi, Xp, Jp, E9;
class L2 extends de {
  constructor() {
    super();
    C(this, oi);
    C(this, Wi);
    C(this, Eo, ee(null));
    new qs();
  }
  get expanded() {
    var e;
    return ((e = r(this, Wi)) == null ? void 0 : e.expanded()) ?? !1;
  }
  onSetup() {
    g(this, Wi, Ye(Hs));
  }
  onAttach(e) {
    r(this, Wi).attachMenuButton(this), E(c(this, oi, Xp).bind(this)), Me(e, "type", "button");
  }
  onConnect(e) {
    E(c(this, oi, Jp).bind(this)), c(this, oi, E9).call(this);
    const n = new MutationObserver(c(this, oi, E9).bind(this));
    n.observe(e, { attributeFilter: ["data-part"], childList: !0, subtree: !0 }), ue(() => n.disconnect()), i1(e, (i) => {
      this.dispatch("select", { trigger: i });
    });
  }
}
Wi = new WeakMap(), Eo = new WeakMap(), oi = new WeakSet(), Xp = function() {
  r(this, Wi).disableMenuButton(this.$props.disabled());
}, Jp = function() {
  const e = r(this, Eo).call(this);
  e && E(() => {
    const n = r(this, Wi).hint();
    n && (e.textContent = n);
  });
}, E9 = function() {
  var n;
  const e = (n = this.el) == null ? void 0 : n.querySelector('[data-part="hint"]');
  r(this, Eo).set(e ?? null);
}, $(L2, "props", {
  disabled: !1
});
const lS = L2.prototype;
Le(lS, "expanded");
let uS = class extends L2 {
};
const J2 = ai();
var ir, l1, tC, sC, nC;
class eC extends de {
  constructor() {
    super();
    C(this, l1);
    C(this, ir);
    new qs();
    const { placement: e } = this.$props;
    this.setAttributes({
      "data-placement": e
    });
  }
  onAttach(e) {
    if (g(this, ir, Ye(Hs)), r(this, ir).attachMenuItems(this), ln(J2)) {
      const n = Ye(J2);
      n && (ns(J2, null), n.attach(e), ue(() => n.attach(null)));
    }
  }
  onConnect(e) {
    E(c(this, l1, tC).bind(this));
  }
}
ir = new WeakMap(), l1 = new WeakSet(), tC = function() {
  const { expanded: e } = r(this, ir);
  if (!this.el || !e()) return;
  const n = this.$props.placement();
  if (!n) return;
  Object.assign(this.el.style, {
    position: "absolute",
    top: 0,
    left: 0,
    width: "max-content"
  });
  const { offset: i, alignOffset: o } = this.$props;
  ue(
    A5(this.el, c(this, l1, nC).call(this), n, {
      offsetVarName: "media-menu",
      xOffset: o(),
      yOffset: i()
    })
  ), ue(c(this, l1, sC).bind(this));
}, sC = function() {
  this.el && (this.el.removeAttribute("style"), this.el.style.display = "none");
}, nC = function() {
  return r(this, ir).button();
}, $(eC, "props", {
  placement: null,
  offset: 0,
  alignOffset: 0
});
const T9 = ai();
var zn, Ki, ru, ys, iC, rC, C2, L9, P9;
class qu extends as {
  constructor() {
    super(...arguments);
    C(this, ys);
    C(this, zn, /* @__PURE__ */ new Set());
    C(this, Ki, ee(""));
    C(this, ru, null);
    $(this, "onValueChange");
    C(this, C2, c(this, ys, L9).bind(this));
  }
  get values() {
    return Array.from(r(this, zn)).map((e) => e.value());
  }
  get value() {
    return r(this, Ki).call(this);
  }
  set value(e) {
    c(this, ys, L9).call(this, e);
  }
  onSetup() {
    ns(T9, {
      add: c(this, ys, iC).bind(this),
      remove: c(this, ys, rC).bind(this)
    });
  }
  onAttach(e) {
    ln(Hs) || Me(e, "role", "radiogroup"), this.setAttributes({ value: r(this, Ki) });
  }
  onDestroy() {
    r(this, zn).clear();
  }
}
zn = new WeakMap(), Ki = new WeakMap(), ru = new WeakMap(), ys = new WeakSet(), iC = function(e) {
  r(this, zn).has(e) || (r(this, zn).add(e), e.onCheck = r(this, C2), e.check(e.value() === r(this, Ki).call(this)));
}, rC = function(e) {
  e.onCheck = null, r(this, zn).delete(e);
}, C2 = new WeakMap(), L9 = function(e, n) {
  var l;
  const i = O(r(this, Ki));
  if (!e || e === i) return;
  const o = c(this, ys, P9).call(this, i), a = c(this, ys, P9).call(this, e);
  o == null || o.check(!1, n), a == null || a.check(!0, n), r(this, Ki).set(e), (l = this.onValueChange) == null || l.call(this, e, n);
}, P9 = function(e) {
  for (const n of r(this, zn))
    if (e === O(n.value)) return n;
  return null;
};
var Ec, Yn, pr, M9, aC;
let oC = (Ec = class extends de {
  constructor() {
    super();
    C(this, pr);
    C(this, Yn);
    g(this, Yn, new qu()), r(this, Yn).onValueChange = c(this, pr, aC).bind(this);
  }
  /**
   * A list of radio values that belong this group.
   */
  get values() {
    return r(this, Yn).values;
  }
  /**
   * The radio value that is checked in this group.
   */
  get value() {
    return r(this, Yn).value;
  }
  set value(e) {
    r(this, Yn).value = e;
  }
  onSetup() {
    q ? c(this, pr, M9).call(this) : E(c(this, pr, M9).bind(this));
  }
}, Yn = new WeakMap(), pr = new WeakSet(), M9 = function() {
  r(this, Yn).value = this.$props.value();
}, aC = function(e, n) {
  const i = this.createEvent("change", { detail: e, trigger: n });
  this.dispatch(i);
}, $(Ec, "props", {
  value: ""
}), Ec);
const cC = oC.prototype;
Le(cC, "values");
Le(cC, "value");
var tn, rr, xt, lC, uC, dC, hC, fC, k9, pC;
class Zu extends de {
  constructor() {
    super();
    C(this, xt);
    C(this, tn, ee(!1));
    C(this, rr, {
      value: this.$props.value,
      check: c(this, xt, fC).bind(this),
      onCheck: null
    });
    new qs();
  }
  /**
   * Whether this radio is currently checked.
   */
  get checked() {
    return r(this, tn).call(this);
  }
  onSetup() {
    this.setAttributes({
      value: this.$props.value,
      "data-checked": r(this, tn),
      "aria-checked": wt(r(this, tn))
    });
  }
  onAttach(e) {
    const n = ln(Hs);
    Me(e, "tabindex", n ? "-1" : "0"), Me(e, "role", n ? "menuitemradio" : "radio"), E(c(this, xt, dC).bind(this));
  }
  onConnect(e) {
    c(this, xt, uC).call(this), i1(e, c(this, xt, hC).bind(this)), ue(c(this, xt, lC).bind(this));
  }
}
tn = new WeakMap(), rr = new WeakMap(), xt = new WeakSet(), lC = function() {
  Mt(() => {
    Ye(T9).remove(r(this, rr));
  }, this.connectScope);
}, uC = function() {
  Ye(T9).add(r(this, rr));
}, dC = function() {
  var i, o;
  const { value: e } = this.$props, n = e();
  O(r(this, tn)) && ((o = (i = r(this, rr)).onCheck) == null || o.call(i, n));
}, hC = function(e) {
  var n, i;
  O(r(this, tn)) || (c(this, xt, k9).call(this, !0, e), c(this, xt, pC).call(this, e), (i = (n = r(this, rr)).onCheck) == null || i.call(n, O(this.$props.value), e));
}, fC = function(e, n) {
  O(r(this, tn)) !== e && c(this, xt, k9).call(this, e, n);
}, k9 = function(e, n) {
  r(this, tn).set(e), this.dispatch("change", { detail: e, trigger: n });
}, pC = function(e) {
  this.dispatch("select", { trigger: e });
}, $(Zu, "props", {
  value: ""
});
const dS = Zu.prototype;
Le(dS, "checked");
var Tc, zt, N6, It, CC, sn, To, mC, I9, gC, yC, vC;
let hS = (Tc = class extends de {
  constructor() {
    super(...arguments);
    C(this, It);
    C(this, zt);
    C(this, N6, null);
    C(this, sn, 0);
    C(this, To, -1);
  }
  onSetup() {
    g(this, zt, Ae());
    const { event: e, action: n } = this.$props;
    this.setAttributes({
      event: e,
      action: n
    });
  }
  onAttach(e) {
    e.setAttribute("data-media-gesture", ""), e.style.setProperty("pointer-events", "none");
  }
  onConnect(e) {
    var n;
    g(this, N6, (n = r(this, zt).player.el) == null ? void 0 : n.querySelector(
      "[data-media-provider]"
    )), E(c(this, It, CC).bind(this));
  }
}, zt = new WeakMap(), N6 = new WeakMap(), It = new WeakSet(), CC = function() {
  let e = this.$props.event(), n = this.$props.disabled();
  !r(this, N6) || !e || n || (/^dbl/.test(e) && (e = e.split(/^dbl/)[1]), (e === "pointerup" || e === "pointerdown") && r(this, zt).$state.pointer() === "coarse" && (e = e === "pointerup" ? "touchend" : "touchstart"), Ze(
    r(this, N6),
    e,
    c(this, It, mC).bind(this),
    { passive: !1 }
  ));
}, sn = new WeakMap(), To = new WeakMap(), mC = function(e) {
  if (this.$props.disabled() || Mc(e) && (e.button !== 0 || r(this, zt).activeMenu) || y3(e) && r(this, zt).activeMenu || Ru(e) || !c(this, It, gC).call(this, e))
    return;
  e.MEDIA_GESTURE = !0, e.preventDefault();
  const n = O(this.$props.event);
  if (!(n == null ? void 0 : n.startsWith("dbl")))
    r(this, sn) === 0 && setTimeout(() => {
      r(this, sn) === 1 && c(this, It, I9).call(this, e);
    }, 250);
  else if (r(this, sn) === 1) {
    queueMicrotask(() => c(this, It, I9).call(this, e)), clearTimeout(r(this, To)), g(this, sn, 0);
    return;
  }
  r(this, sn) === 0 && g(this, To, window.setTimeout(() => {
    g(this, sn, 0);
  }, 275)), u7(this, sn)._++;
}, I9 = function(e) {
  this.el.setAttribute("data-triggered", ""), requestAnimationFrame(() => {
    c(this, It, yC).call(this) && c(this, It, vC).call(this, O(this.$props.action), e), requestAnimationFrame(() => {
      this.el.removeAttribute("data-triggered");
    });
  });
}, /** Validate event occurred in gesture bounds. */
gC = function(e) {
  if (!this.el) return !1;
  if (Mc(e) || Od(e) || y3(e)) {
    const n = y3(e) ? e.changedTouches[0] ?? e.touches[0] : void 0, i = (n == null ? void 0 : n.clientX) ?? e.clientX, o = (n == null ? void 0 : n.clientY) ?? e.clientY, a = this.el.getBoundingClientRect(), l = o >= a.top && o <= a.bottom && i >= a.left && i <= a.right;
    return e.type.includes("leave") ? !l : l;
  }
  return !0;
}, /** Validate gesture has the highest z-index in this triggered group. */
yC = function() {
  const e = r(this, zt).player.el.querySelectorAll(
    "[data-media-gesture][data-triggered]"
  );
  return Array.from(e).sort(
    (n, i) => +getComputedStyle(i).zIndex - +getComputedStyle(n).zIndex
  )[0] === this.el;
}, vC = function(e, n) {
  if (!e) return;
  const i = new ye("will-trigger", {
    detail: e,
    cancelable: !0,
    trigger: n
  });
  if (this.dispatchEvent(i), i.defaultPrevented) return;
  const [o, a] = e.replace(/:([a-z])/, "-$1").split(":");
  e.includes(":fullscreen") ? r(this, zt).remote.toggleFullscreen("prefer-media", n) : e.includes("seek:") ? r(this, zt).remote.seek(O(r(this, zt).$state.currentTime) + (+a || 0), n) : r(this, zt).remote[vu(o)](n), this.dispatch("trigger", {
    detail: e,
    trigger: n
  });
}, $(Tc, "props", {
  disabled: !1,
  event: void 0,
  action: void 0
}), Tc);
var R6, Qn, Xn, Lo, V9;
class fS {
  constructor(t) {
    C(this, Lo);
    $(this, "priority", 10);
    C(this, R6, null);
    C(this, Qn);
    C(this, Xn);
    g(this, Qn, t);
  }
  attach() {
  }
  canRender() {
    return !0;
  }
  detach() {
    var t;
    (t = r(this, Xn)) == null || t.abort(), g(this, Xn, void 0), r(this, Qn).reset(), g(this, R6, null);
  }
  changeTrack(t) {
    var e;
    !t || r(this, R6) === t || ((e = r(this, Xn)) == null || e.abort(), g(this, Xn, new Pe(t)), t.readyState < 2 ? (r(this, Qn).reset(), r(this, Xn).add("load", () => c(this, Lo, V9).call(this, t), { once: !0 })) : c(this, Lo, V9).call(this, t), r(this, Xn).add("add-cue", (n) => {
      r(this, Qn).addCue(n.detail);
    }).add("remove-cue", (n) => {
      r(this, Qn).removeCue(n.detail);
    }), g(this, R6, t));
  }
}
R6 = new WeakMap(), Qn = new WeakMap(), Xn = new WeakMap(), Lo = new WeakSet(), V9 = function(t) {
  r(this, Qn).changeTrack({
    cues: [...t.cues],
    regions: [...t.regions]
  });
};
var Jt, _t, le, Ta, bC, wC, xC, A9, SC, $C, EC, TC, N9, LC, PC, Jn, R9, La, H9, O9;
let pS = (Jt = class extends de {
  constructor() {
    super(...arguments);
    C(this, le);
    C(this, _t);
    C(this, Jn, -1);
  }
  onSetup() {
    g(this, _t, Ae()), this.setAttributes({
      "aria-hidden": wt(c(this, le, Ta).bind(this))
    });
  }
  onAttach(e) {
    e.style.setProperty("pointer-events", "none");
  }
  onConnect(e) {
    Jt.lib() || import("./prod-DTLJXtPo.js").then((n) => n.d).then((n) => Jt.lib.set(n)), E(c(this, le, bC).bind(this));
  }
}, _t = new WeakMap(), le = new WeakSet(), Ta = function() {
  const { textTrack: e, remotePlaybackState: n, iOSControls: i } = r(this, _t).$state, o = e();
  return i() || n() === "connected" || !o || !es(o);
}, bC = function() {
  if (!Jt.lib()) return;
  const { viewType: e } = r(this, _t).$state;
  return e() === "audio" ? c(this, le, wC).call(this) : c(this, le, $C).call(this);
}, wC = function() {
  return E(c(this, le, xC).bind(this)), c(this, le, N9).call(this, null), () => {
    this.el.textContent = "";
  };
}, xC = function() {
  if (c(this, le, Ta).call(this)) return;
  c(this, le, A9).call(this);
  const { textTrack: e } = r(this, _t).$state;
  Ze(e(), "cue-change", c(this, le, A9).bind(this)), E(c(this, le, SC).bind(this));
}, A9 = function() {
  this.el.textContent = "", r(this, Jn) >= 0 && c(this, le, La).call(this);
  const { realCurrentTime: e, textTrack: n } = r(this, _t).$state, { renderVTTCueString: i } = Jt.lib(), o = O(e), a = O(n).activeCues;
  for (const l of a) {
    const d = c(this, le, H9).call(this), h = c(this, le, O9).call(this);
    h.innerHTML = i(l, o), d.append(h), this.el.append(h);
  }
}, SC = function() {
  const { realCurrentTime: e } = r(this, _t).$state, { updateTimedVTTCueNodes: n } = Jt.lib();
  n(this.el, e());
}, $C = function() {
  const { CaptionsRenderer: e } = Jt.lib(), n = new e(this.el), i = new fS(n);
  return r(this, _t).textRenderers.add(i), E(c(this, le, EC).bind(this, n)), E(c(this, le, TC).bind(this, n)), c(this, le, N9).call(this, n), () => {
    this.el.textContent = "", r(this, _t).textRenderers.remove(i), n.destroy();
  };
}, EC = function(e) {
  e.dir = this.$props.textDir();
}, TC = function(e) {
  var o;
  if (c(this, le, Ta).call(this)) return;
  const { realCurrentTime: n, textTrack: i } = r(this, _t).$state;
  e.currentTime = n(), r(this, Jn) >= 0 && ((o = i()) != null && o.activeCues[0]) && c(this, le, La).call(this);
}, N9 = function(e) {
  const n = r(this, _t).player;
  if (!n) return;
  const i = c(this, le, LC).bind(this, e);
  Ze(n, "vds-font-change", i);
}, LC = function(e) {
  var i;
  if (r(this, Jn) >= 0) {
    c(this, le, R9).call(this);
    return;
  }
  const { textTrack: n } = r(this, _t).$state;
  (i = n()) != null && i.activeCues[0] ? e == null || e.update(!0) : c(this, le, PC).call(this);
}, PC = function() {
  var i, o;
  const e = c(this, le, H9).call(this);
  J(e, "data-example", "");
  const n = c(this, le, O9).call(this);
  J(n, "data-example", ""), n.textContent = this.$props.exampleText(), e == null || e.append(n), (i = this.el) == null || i.append(e), (o = this.el) == null || o.setAttribute("data-example", ""), c(this, le, R9).call(this);
}, Jn = new WeakMap(), R9 = function() {
  window.clearTimeout(r(this, Jn)), g(this, Jn, window.setTimeout(c(this, le, La).bind(this), 2500));
}, La = function() {
  var e, n;
  (e = this.el) == null || e.removeAttribute("data-example"), (n = this.el) != null && n.querySelector("[data-example]") && (this.el.textContent = ""), g(this, Jn, -1);
}, H9 = function() {
  const e = document.createElement("div");
  return J(e, "data-part", "cue-display"), e;
}, O9 = function() {
  const e = document.createElement("div");
  return J(e, "data-part", "cue"), e;
}, $(Jt, "props", {
  textDir: "ltr",
  exampleText: "Captions look like this."
}), $(Jt, "lib", ee(null)), Jt);
var na, fs, Ve, D9, MC, _9, kC, IC, Po, F9, q9, Z9, VC, j9, AC;
let CS = (na = class extends de {
  constructor() {
    super(...arguments);
    C(this, Ve);
    C(this, fs);
    C(this, Po, "");
  }
  onSetup() {
    g(this, fs, Ae()), c(this, Ve, F9).call(this), c(this, Ve, q9).call(this), c(this, Ve, Z9).call(this), c(this, Ve, _9).call(this);
  }
  onAttach(e) {
    e.style.setProperty("pointer-events", "none"), E(c(this, Ve, IC).bind(this)), E(c(this, Ve, F9).bind(this)), E(c(this, Ve, q9).bind(this)), E(c(this, Ve, Z9).bind(this)), E(c(this, Ve, _9).bind(this));
    const { started: n } = r(this, fs).$state;
    this.setAttributes({
      "data-visible": () => !n() && !this.$state.hidden(),
      "data-loading": c(this, Ve, kC).bind(this),
      "data-error": c(this, Ve, D9).bind(this),
      "data-hidden": this.$state.hidden
    });
  }
  onConnect(e) {
    E(c(this, Ve, MC).bind(this)), E(c(this, Ve, VC).bind(this));
  }
}, fs = new WeakMap(), Ve = new WeakSet(), D9 = function() {
  const { error: e } = this.$state;
  return !Rs(e());
}, MC = function() {
  const { canLoadPoster: e, poster: n } = r(this, fs).$state;
  !e() && n() && X6(n(), "preconnect");
}, _9 = function() {
  const { src: e } = this.$props, { poster: n, nativeControls: i } = r(this, fs).$state;
  this.el && J(this.el, "display", i() ? "none" : null), this.$state.hidden.set(c(this, Ve, D9).call(this) || !(e() || n()) || i());
}, kC = function() {
  const { loading: e, hidden: n } = this.$state;
  return !n() && e();
}, IC = function() {
  const e = this.$state.img();
  e && (new Pe(e).add("load", c(this, Ve, j9).bind(this)).add("error", c(this, Ve, AC).bind(this)), e.complete && c(this, Ve, j9).call(this));
}, Po = new WeakMap(), F9 = function() {
  const { poster: e } = r(this, fs).$props, { canLoadPoster: n, providedPoster: i, inferredPoster: o } = r(this, fs).$state, a = this.$props.src() || "", l = a || e() || o();
  r(this, Po) === i() && i.set(a), this.$state.src.set(n() && l.length ? l : null), g(this, Po, a);
}, q9 = function() {
  const { src: e } = this.$props, { alt: n } = this.$state, { poster: i } = r(this, fs).$state;
  n.set(e() || i() ? this.$props.alt() : null);
}, Z9 = function() {
  const { crossOrigin: e } = this.$props, { crossOrigin: n } = this.$state, { crossOrigin: i, poster: o } = r(this, fs).$state, a = e() !== null ? e() : i();
  n.set(
    /ytimg\.com|vimeo/.test(o() || "") ? null : a === !0 ? "anonymous" : a
  );
}, VC = function() {
  const { loading: e, error: n } = this.$state, { canLoadPoster: i, poster: o } = r(this, fs).$state;
  e.set(i() && !!o()), n.set(null);
}, j9 = function() {
  const { loading: e, error: n } = this.$state;
  e.set(!1), n.set(null);
}, AC = function(e) {
  const { loading: n, error: i } = this.$state;
  n.set(!1), i.set(e);
}, $(na, "props", {
  src: null,
  alt: null,
  crossOrigin: null
}), $(na, "state", new ci({
  img: null,
  src: null,
  alt: null,
  crossOrigin: null,
  loading: !0,
  error: null,
  hidden: !1
})), na);
var ia, H6, zi, Mo, ko, rt, NC, RC, HC, B9, OC, DC, G9, _C;
let mS = (ia = class extends de {
  constructor() {
    super(...arguments);
    C(this, rt);
    C(this, H6);
    C(this, zi, ee(null));
    C(this, Mo, ee(!0));
    C(this, ko, ee(!0));
  }
  onSetup() {
    g(this, H6, Ae()), c(this, rt, B9).call(this);
    const { type: e } = this.$props;
    this.setAttributes({
      "data-type": e,
      "data-remainder": c(this, rt, G9).bind(this)
    }), new T8({
      callback: c(this, rt, NC).bind(this)
    }).attach(this);
  }
  onAttach(e) {
    e.hasAttribute("role") || E(c(this, rt, OC).bind(this)), E(c(this, rt, B9).bind(this));
  }
  onConnect(e) {
    ue(k5(e, r(this, Mo).set)), E(c(this, rt, RC).bind(this)), E(c(this, rt, HC).bind(this));
  }
}, H6 = new WeakMap(), zi = new WeakMap(), Mo = new WeakMap(), ko = new WeakMap(), rt = new WeakSet(), NC = function(e) {
  r(this, ko).set(e[0].isIntersecting);
}, RC = function() {
  const { hidden: e } = this.$props;
  this.$state.hidden.set(e() || !r(this, Mo).call(this) || !r(this, ko).call(this));
}, HC = function() {
  if (!this.$props.toggle()) {
    r(this, zi).set(null);
    return;
  }
  this.el && i1(this.el, c(this, rt, _C).bind(this));
}, B9 = function() {
  const { hidden: e, timeText: n } = this.$state, { duration: i } = r(this, H6).$state;
  if (e()) return;
  const { type: o, padHours: a, padMinutes: l, showHours: d } = this.$props, h = c(this, rt, DC).call(this, o()), p = i(), f = c(this, rt, G9).call(this);
  if (!Number.isFinite(h + p)) {
    n.set("LIVE");
    return;
  }
  const m = f ? Math.max(0, p - h) : h, y = E2(m, {
    padHrs: a(),
    padMins: l(),
    showHrs: d()
  });
  n.set((f ? "-" : "") + y);
}, OC = function() {
  if (!this.el) return;
  const { toggle: e } = this.$props;
  J(this.el, "role", e() ? "timer" : null), J(this.el, "tabindex", e() ? 0 : null);
}, DC = function(e) {
  const { bufferedEnd: n, duration: i, currentTime: o } = r(this, H6).$state;
  switch (e) {
    case "buffered":
      return n();
    case "duration":
      return i();
    default:
      return o();
  }
}, G9 = function() {
  return this.$props.remainder() && r(this, zi).call(this) !== !1;
}, _C = function(e) {
  if (e.preventDefault(), r(this, zi).call(this) === null) {
    r(this, zi).set(!this.$props.remainder());
    return;
  }
  r(this, zi).set((n) => !n);
}, $(ia, "props", {
  type: "current",
  showHours: !1,
  padHours: null,
  padMinutes: null,
  remainder: !1,
  toggle: !1,
  hidden: !1
}), $(ia, "state", new ci({
  timeText: "",
  hidden: !1
})), ia);
class ju extends fh {
}
class gS extends Ah {
}
class yS extends Vx {
}
class vS extends Zh {
}
class bS extends Ax {
}
class wS extends r8 {
}
class xS extends jx {
}
class SS extends Bx {
}
class $S extends Kx {
}
class ES extends Gx {
}
class TS extends Ux {
}
class LS extends Zx {
}
class PS extends Fx {
}
class MS extends qx {
}
class kS extends Wx {
}
class IS extends Rx {
}
class VS extends Hx {
}
class AS extends Ox {
}
class FC extends Ho {
}
class NS extends Ga {
}
class RS extends l9 {
}
class HS extends u9 {
}
class OS extends h9 {
}
class DS extends f9 {
}
class _S extends Xx {
}
class FS extends _u {
}
class qS extends Ba {
}
class ZS extends yf {
}
class jS extends Fu {
}
class BS extends e3 {
}
class GS extends L2 {
}
class US extends eC {
}
class WS extends uS {
}
class KS extends oC {
}
class zS extends Zu {
}
class YS extends pS {
}
class QS extends hS {
}
class XS extends CS {
}
class qC extends ja {
}
class JS extends mS {
}
const ZC = u.forwardRef((s, t) => {
  const { children: e, ...n } = s, i = u.Children.toArray(e), o = i.find(t$);
  if (o) {
    const a = o.props.children, l = i.map((d) => d === o ? u.Children.count(a) > 1 ? u.Children.only(null) : u.isValidElement(a) ? a.props.children : null : d);
    return /* @__PURE__ */ u.createElement(U9, { ...n, ref: t }, u.isValidElement(a) ? u.cloneElement(a, void 0, l) : null);
  }
  return /* @__PURE__ */ u.createElement(U9, { ...n, ref: t }, e);
});
ZC.displayName = "Slot";
const U9 = u.forwardRef((s, t) => {
  const { children: e, ...n } = s;
  return u.isValidElement(e) ? u.cloneElement(e, {
    ...s$(n, e.props),
    ref: t ? ke(t, e.ref) : e.ref
  }) : u.Children.count(e) > 1 ? u.Children.only(null) : null;
});
U9.displayName = "SlotClone";
const e$ = ({ children: s }) => /* @__PURE__ */ u.createElement(u.Fragment, null, s);
function t$(s) {
  return u.isValidElement(s) && s.type === e$;
}
function s$(s, t) {
  const e = { ...t };
  for (const n in t) {
    const i = s[n], o = t[n];
    /^on[A-Z]/.test(n) ? i && o ? e[n] = (...l) => {
      o(...l), i(...l);
    } : i && (e[n] = i) : n === "style" ? e[n] = { ...i, ...o } : n === "className" && (e[n] = [i, o].filter(Boolean).join(" "));
  }
  return { ...s, ...e };
}
const n$ = ["button", "div", "span", "img", "video", "audio"], X = n$.reduce((s, t) => {
  const e = u.forwardRef((n, i) => {
    const { asChild: o, ...a } = n, l = o ? ZC : t;
    return /* @__PURE__ */ u.createElement(l, { ...a, ref: i });
  });
  return e.displayName = `Primitive.${t}`, { ...s, [t]: e };
}, {});
function i$(s) {
  return (s == null ? void 0 : s.$$PROVIDER_TYPE) === "REMOTION";
}
const G7 = FC.state.record, r$ = Object.keys(G7).reduce(
  (s, t) => ({
    ...s,
    [t]() {
      return G7[t];
    }
  }),
  {}
);
function ec(s, t) {
  const e = mr(vr);
  return Be((e || r$)[s]);
}
const U7 = ju.state.record, jC = Object.keys(U7).reduce(
  (s, t) => ({
    ...s,
    [t]() {
      return U7[t];
    }
  }),
  {}
);
function Zt(s, t) {
  const e = mr(J6);
  return Be((e || jC)[s]);
}
function o$(s) {
  const t = mr(J6);
  return Qd(s != null && s.current ? s.current.$state : t || jC);
}
function Do() {
  return wu(Au);
}
const a$ = he(PS, {
  domEventsRegex: /^onMedia/
}), c$ = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(a$, { ...t }, (n) => /* @__PURE__ */ u.createElement(
    X.button,
    {
      ...n,
      ref: ke(n.ref, e)
    },
    s
  ))
);
c$.displayName = "AirPlayButton";
const l$ = he(LS, {
  domEventsRegex: /^onMedia/
}), BC = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(l$, { ...t }, (n) => /* @__PURE__ */ u.createElement(
    X.button,
    {
      ...n,
      ref: ke(n.ref, e)
    },
    s
  ))
);
BC.displayName = "PlayButton";
const u$ = he(xS, {
  domEventsRegex: /^onMedia/
}), d$ = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(u$, { ...t }, (n) => /* @__PURE__ */ u.createElement(
    X.button,
    {
      ...n,
      ref: ke(n.ref, e)
    },
    s
  ))
);
d$.displayName = "CaptionButton";
const h$ = he(SS, {
  domEventsRegex: /^onMedia/
}), GC = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(h$, { ...t }, (n) => /* @__PURE__ */ u.createElement(
    X.button,
    {
      ...n,
      ref: ke(n.ref, e)
    },
    s
  ))
);
GC.displayName = "FullscreenButton";
const f$ = he(ES, {
  domEventsRegex: /^onMedia/
}), UC = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(f$, { ...t }, (n) => /* @__PURE__ */ u.createElement(
    X.button,
    {
      ...n,
      ref: ke(n.ref, e)
    },
    s
  ))
);
UC.displayName = "MuteButton";
const p$ = he(TS, {
  domEventsRegex: /^onMedia/
}), C$ = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(p$, { ...t }, (n) => /* @__PURE__ */ u.createElement(
    X.button,
    {
      ...n,
      ref: ke(n.ref, e)
    },
    s
  ))
);
C$.displayName = "PIPButton";
const m$ = he(kS, {
  domEventsRegex: /^onMedia/
}), Bu = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(m$, { ...t }, (n) => /* @__PURE__ */ u.createElement(
    X.button,
    {
      ...n,
      ref: ke(n.ref, e)
    },
    s
  ))
);
Bu.displayName = "SeekButton";
const g$ = he($S, {
  domEventsRegex: /^onMedia/
}), y$ = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(g$, { ...t }, (n) => /* @__PURE__ */ u.createElement(
    X.button,
    {
      ...n,
      ref: ke(n.ref, e)
    },
    s
  ))
);
y$.displayName = "LiveButton";
const t3 = [
  "onDragStart",
  "onDragEnd",
  "onDragValueChange",
  "onValueChange",
  "onPointerValueChange"
], v$ = he(FS), b$ = he(FC, {
  events: t3
}), w$ = u.forwardRef(({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(b$, { ...t, ref: e }, (n) => /* @__PURE__ */ u.createElement(X.div, { ...n }, s)));
w$.displayName = "Slider";
const x$ = u.forwardRef((s, t) => /* @__PURE__ */ u.createElement(X.div, { ...s, ref: t }));
x$.displayName = "SliderThumb";
const S$ = u.forwardRef((s, t) => /* @__PURE__ */ u.createElement(X.div, { ...s, ref: t }));
S$.displayName = "SliderTrack";
const $$ = u.forwardRef((s, t) => /* @__PURE__ */ u.createElement(X.div, { ...s, ref: t }));
$$.displayName = "SliderTrackFill";
const E$ = he(ZS), T$ = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(E$, { ...t }, (n) => /* @__PURE__ */ u.createElement(
    X.div,
    {
      ...n,
      ref: ke(n.ref, e)
    },
    s
  ))
);
T$.displayName = "SliderPreview";
const L$ = u.forwardRef(({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(v$, { ...t }, (n, i) => {
  const o = Be(() => i.getValueText(), i);
  return /* @__PURE__ */ u.createElement(X.div, { ...n, ref: e }, o, s);
}));
L$.displayName = "SliderValue";
const P$ = u.forwardRef(({ children: s, ...t }, e) => {
  const n = ec("min"), i = ec("max"), o = ec("step"), a = (i - n) / o;
  return /* @__PURE__ */ u.createElement(X.div, { ...t, ref: e }, Array.from({ length: Math.floor(a) + 1 }).map((l, d) => s(d)));
});
P$.displayName = "SliderSteps";
const M$ = he(RS, {
  events: t3,
  domEventsRegex: /^onMedia/
}), k$ = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(M$, { ...t, ref: e }, (n) => /* @__PURE__ */ u.createElement(X.div, { ...n }, s))
);
k$.displayName = "VolumeSlider";
function I$(s = 0, t = 0, e = "") {
  return q ? {
    startTime: s,
    endTime: t,
    text: e,
    addEventListener: ts,
    removeEventListener: ts,
    dispatchEvent: ts
  } : new window.VTTCue(s, t, e);
}
const V$ = he(qC), A$ = u.forwardRef(({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(V$, { ...t }, (n) => /* @__PURE__ */ u.createElement(
  X.div,
  {
    ...n,
    ref: ke(n.ref, e)
  },
  s
)));
A$.displayName = "Thumbnail";
const N$ = u.forwardRef(({ children: s, ...t }, e) => {
  const { src: n, img: i, crossOrigin: o } = mr(qC.state), a = Be(n), l = Be(o);
  return /* @__PURE__ */ u.createElement(
    X.img,
    {
      crossOrigin: l,
      ...t,
      src: a || void 0,
      ref: ke(i.set, e)
    },
    s
  );
});
N$.displayName = "ThumbnailImg";
const P2 = u.createContext({
  $chapters: ee(null)
});
P2.displayName = "TimeSliderContext";
const R$ = he(NS, {
  events: t3,
  domEventsRegex: /^onMedia/
}), H$ = u.forwardRef(
  ({ children: s, ...t }, e) => {
    const n = u.useMemo(() => ee(null), []);
    return /* @__PURE__ */ u.createElement(P2.Provider, { value: { $chapters: n } }, /* @__PURE__ */ u.createElement(R$, { ...t, ref: e }, (i) => /* @__PURE__ */ u.createElement(X.div, { ...i }, s)));
  }
);
H$.displayName = "TimeSlider";
const O$ = he(jS), D$ = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(O$, { ...t }, (n, i) => /* @__PURE__ */ u.createElement(
    X.div,
    {
      ...n,
      ref: ke(n.ref, e)
    },
    /* @__PURE__ */ u.createElement(WC, { instance: i }, s)
  ))
);
D$.displayName = "SliderChapters";
function WC({ instance: s, children: t }) {
  const e = Be(() => s.cues, s), n = u.useRef([]), i = u.useRef(), { $chapters: o } = u.useContext(P2);
  return i.current || (i.current = I$()), u.useEffect(() => (o.set(s), () => void o.set(null)), [s]), u.useEffect(() => {
    s.setRefs(n.current);
  }, [e]), t(e.length ? e : [i.current], (a) => {
    if (!a) {
      n.current.length = 0;
      return;
    }
    n.current.push(a);
  });
}
WC.displayName = "SliderChapterTracks";
const _$ = u.forwardRef(
  ({ children: s, ...t }, e) => {
    const { $chapters: n } = u.useContext(P2), [i, o] = u.useState();
    return u.useEffect(() => E(() => {
      const a = n(), l = (a == null ? void 0 : a.activePointerCue) || (a == null ? void 0 : a.activeCue);
      o((l == null ? void 0 : l.text) || "");
    }), []), /* @__PURE__ */ u.createElement(X.div, { ...t, ref: e }, i, s);
  }
);
_$.displayName = "SliderChapterTitle";
const F$ = u.forwardRef((s, t) => /* @__PURE__ */ u.createElement(X.div, { ...s, ref: t }));
F$.displayName = "SliderProgress";
const q$ = he(_S), Z$ = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(q$, { ...t }, (n) => /* @__PURE__ */ u.createElement(X.div, { ...n, ref: ke(n.ref, e) }, s))
);
Z$.displayName = "SliderThumbnail";
const j$ = he(qS, {
  events: ["onCanPlay", "onError"]
}), B$ = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(j$, { ...t }, (n, i) => /* @__PURE__ */ u.createElement(
    KC,
    {
      ...n,
      instance: i,
      ref: ke(n.ref, e)
    },
    s
  ))
);
B$.displayName = "SliderVideo";
const KC = u.forwardRef(
  ({ instance: s, children: t, ...e }, n) => {
    const { canLoad: i } = mr(J6), { src: o, video: a, crossOrigin: l } = s.$state, d = Be(o), h = Be(i), p = Be(l);
    return /* @__PURE__ */ u.createElement(
      X.video,
      {
        style: { maxWidth: "unset" },
        ...e,
        src: d || void 0,
        muted: !0,
        playsInline: !0,
        preload: h ? "auto" : "none",
        crossOrigin: p || void 0,
        ref: ke(a.set, n)
      },
      t
    );
  }
);
KC.displayName = "SliderVideoProvider";
const G$ = he(KS, {
  events: ["onChange"]
}), U$ = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(G$, { ...t, ref: e }, (n) => /* @__PURE__ */ u.createElement(X.div, { ...n }, s))
);
U$.displayName = "RadioGroup";
const W$ = he(zS, {
  events: ["onChange", "onSelect"]
}), K$ = u.forwardRef(({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(W$, { ...t }, (n) => /* @__PURE__ */ u.createElement(
  X.div,
  {
    ...n,
    ref: ke(n.ref, e)
  },
  s
)));
K$.displayName = "RadioItem";
const z$ = he(BS, {
  events: ["onOpen", "onClose"],
  domEventsRegex: /^onMedia/
}), Y$ = u.forwardRef(({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(z$, { ...t, ref: e }, (n, i) => /* @__PURE__ */ u.createElement(
  X.div,
  {
    ...n,
    style: { display: i.isSubmenu ? void 0 : "contents", ...n.style }
  },
  s
)));
Y$.displayName = "Menu";
const Q$ = he(GS, {
  events: ["onSelect"]
}), X$ = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(Q$, { ...t }, (n) => /* @__PURE__ */ u.createElement(
    X.button,
    {
      ...n,
      ref: ke(n.ref, e)
    },
    s
  ))
);
X$.displayName = "MenuButton";
const J$ = u.forwardRef(
  ({ container: s = null, disabled: t = !1, children: e, ...n }, i) => {
    let o = Zt("fullscreen"), a = t === "fullscreen" ? !o : !t;
    const l = u.useMemo(() => q ? null : (ie(s) ? document.querySelector(s) : s) ?? document.body, [s]);
    return !l || !a ? e : Cy(
      /* @__PURE__ */ u.createElement(
        X.div,
        {
          ...n,
          style: { display: "contents", ...n.style },
          ref: i
        },
        e
      ),
      l
    );
  }
);
J$.displayName = "MenuPortal";
const eE = he(US), tE = u.forwardRef(({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(eE, { ...t }, (n) => /* @__PURE__ */ u.createElement(
  X.div,
  {
    ...n,
    ref: ke(n.ref, e)
  },
  s
)));
tE.displayName = "MenuItems";
const sE = he(WS), nE = u.forwardRef(({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(sE, { ...t }, (n) => /* @__PURE__ */ u.createElement(
  X.div,
  {
    ...n,
    ref: ke(n.ref, e)
  },
  s
)));
nE.displayName = "MenuItem";
const iE = he(QS, {
  events: ["onWillTrigger", "onTrigger"]
}), m3 = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(iE, { ...t, ref: e }, (n) => /* @__PURE__ */ u.createElement(X.div, { ...n }, s))
);
m3.displayName = "Gesture";
const rE = he(JS), W9 = u.forwardRef(({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(rE, { ...t }, (n, i) => /* @__PURE__ */ u.createElement(
  zC,
  {
    ...n,
    instance: i,
    ref: ke(n.ref, e)
  },
  s
)));
W9.displayName = "Time";
const zC = u.forwardRef(
  ({ instance: s, children: t, ...e }, n) => {
    const { timeText: i } = s.$state, o = Be(i);
    return /* @__PURE__ */ u.createElement(X.div, { ...e, ref: n }, o, t);
  }
);
zC.displayName = "TimeText";
function oE() {
  const s = Do();
  return (s == null ? void 0 : s.player) || null;
}
const aE = he(yS, {
  events: ["onChange"]
}), cE = u.forwardRef(
  ({ style: s, children: t, ...e }, n) => /* @__PURE__ */ u.createElement(aE, { ...e }, (i) => /* @__PURE__ */ u.createElement(
    X.div,
    {
      ...i,
      style: { display: "contents", ...s },
      ref: ke(i.ref, n)
    },
    t
  ))
);
cE.displayName = "MediaAnnouncer";
const lE = he(vS), YC = u.forwardRef(({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(lE, { ...t }, (n) => /* @__PURE__ */ u.createElement(
  X.div,
  {
    ...n,
    ref: ke(n.ref, e)
  },
  s
)));
YC.displayName = "Controls";
const uE = he(bS), QC = u.forwardRef(({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(uE, { ...t }, (n) => /* @__PURE__ */ u.createElement(
  X.div,
  {
    ...n,
    ref: ke(n.ref, e)
  },
  s
)));
QC.displayName = "ControlsGroup";
var tc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Group: QC,
  Root: YC
});
const dE = he(IS);
function hE({ children: s, ...t }) {
  return /* @__PURE__ */ u.createElement(dE, { ...t }, s);
}
hE.displayName = "Tooltip";
const fE = he(VS), pE = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(fE, { ...t }, (n) => /* @__PURE__ */ u.createElement(
    X.button,
    {
      ...n,
      ref: ke(n.ref, e)
    },
    s
  ))
);
pE.displayName = "TooltipTrigger";
const CE = he(AS), mE = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(CE, { ...t }, (n) => /* @__PURE__ */ u.createElement(
    X.div,
    {
      ...n,
      ref: ke(n.ref, e)
    },
    s
  ))
);
mE.displayName = "TooltipContent";
const gE = he(MS, {
  domEventsRegex: /^onMedia/
}), yE = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(gE, { ...t }, (n) => /* @__PURE__ */ u.createElement(
    X.button,
    {
      ...n,
      ref: ke(n.ref, e)
    },
    s
  ))
);
yE.displayName = "GoogleCastButton";
const vE = he(DS, {
  events: t3,
  domEventsRegex: /^onMedia/
}), bE = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(vE, { ...t, ref: e }, (n) => /* @__PURE__ */ u.createElement(X.div, { ...n }, s))
);
bE.displayName = "QualitySlider";
const wE = he(HS, {
  events: t3,
  domEventsRegex: /^onMedia/
}), xE = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(wE, { ...t, ref: e }, (n) => /* @__PURE__ */ u.createElement(X.div, { ...n }, s))
);
xE.displayName = "AudioGainSlider";
const SE = he(OS, {
  events: t3,
  domEventsRegex: /^onMedia/
}), $E = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(SE, { ...t, ref: e }, (n) => /* @__PURE__ */ u.createElement(X.div, { ...n }, s))
);
$E.displayName = "SpeedSlider";
const EE = u.forwardRef(({ children: s, ...t }, e) => {
  const n = Zt("title");
  return /* @__PURE__ */ u.createElement(X.span, { ...t, ref: e }, n, s);
});
EE.displayName = "Title";
function TE(s) {
  const [t, e] = u.useState([]);
  return u.useEffect(() => {
    if (!s) {
      e([]);
      return;
    }
    function n() {
      s && e(s.activeCues);
    }
    return n(), Ze(s, "cue-change", n);
  }, [s]), t;
}
function LE(s) {
  const t = Do(), [e, n] = u.useState(null);
  return u.useEffect(() => Vu(t.textTracks, s, n), [s]), e;
}
function PE() {
  var e;
  const s = LE("chapters");
  return ((e = TE(s)[0]) == null ? void 0 : e.text) || "";
}
const ME = u.forwardRef(
  ({ defaultText: s = "", children: t, ...e }, n) => {
    const i = PE();
    return /* @__PURE__ */ u.createElement(X.span, { ...e, ref: n }, i || s, t);
  }
);
ME.displayName = "ChapterTitle";
const kE = he(YS), XC = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(kE, { ...t, ref: e }, (n) => /* @__PURE__ */ u.createElement(X.div, { ...n }, s))
);
XC.displayName = "Captions";
u.forwardRef(
  ({ size: s = 96, children: t, ...e }, n) => /* @__PURE__ */ u.createElement(
    "svg",
    {
      width: s,
      height: s,
      fill: "none",
      viewBox: "0 0 120 120",
      "aria-hidden": "true",
      "data-part": "root",
      ...e,
      ref: n
    },
    t
  )
);
u.forwardRef(
  ({ width: s = 8, children: t, ...e }, n) => /* @__PURE__ */ u.createElement(
    "circle",
    {
      cx: "60",
      cy: "60",
      r: "54",
      stroke: "currentColor",
      strokeWidth: s,
      "data-part": "track",
      ...e,
      ref: n
    },
    t
  )
);
u.forwardRef(
  ({ width: s = 8, fillPercent: t = 50, children: e, ...n }, i) => /* @__PURE__ */ u.createElement(
    "circle",
    {
      cx: "60",
      cy: "60",
      r: "54",
      stroke: "currentColor",
      pathLength: "100",
      strokeWidth: s,
      strokeDasharray: 100,
      strokeDashoffset: 100 - t,
      "data-part": "track-fill",
      ...n,
      ref: i
    },
    e
  )
);
const V = /* @__PURE__ */ u.forwardRef((s, t) => {
  const { width: e, height: n, size: i = null, paths: o, ...a } = s;
  return u.createElement("svg", {
    viewBox: "0 0 32 32",
    ...a,
    width: e ?? i,
    height: n ?? i,
    fill: "none",
    "aria-hidden": "true",
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    ref: t,
    dangerouslySetInnerHTML: { __html: o }
  });
});
V.displayName = "VidstackIcon";
const IE = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
var Yi, O6, or, vs, em, tm, sm, nm, im;
class JC extends de {
  constructor() {
    super();
    C(this, vs);
    C(this, Yi);
    C(this, O6);
    C(this, or);
    g(this, or, new qu()), r(this, or).onValueChange = c(this, vs, im).bind(this);
  }
  get value() {
    return r(this, or).value;
  }
  get disabled() {
    const { rates: e } = this.$props, { canSetPlaybackRate: n } = r(this, Yi).$state;
    return !n() || e().length === 0;
  }
  onSetup() {
    g(this, Yi, Ae()), ln(Hs) && g(this, O6, Ye(Hs));
  }
  onConnect(e) {
    E(c(this, vs, em).bind(this)), E(c(this, vs, tm).bind(this)), E(c(this, vs, sm).bind(this));
  }
  getOptions() {
    const { rates: e, normalLabel: n } = this.$props;
    return e().map((i) => ({
      label: i === 1 ? n : i + "×",
      value: i.toString()
    }));
  }
}
Yi = new WeakMap(), O6 = new WeakMap(), or = new WeakMap(), vs = new WeakSet(), em = function() {
  r(this, or).value = c(this, vs, nm).call(this);
}, tm = function() {
  var o;
  const { normalLabel: e } = this.$props, { playbackRate: n } = r(this, Yi).$state, i = n();
  (o = r(this, O6)) == null || o.hint.set(i === 1 ? e() : i + "×");
}, sm = function() {
  var e;
  (e = r(this, O6)) == null || e.disable(this.disabled);
}, nm = function() {
  const { playbackRate: e } = r(this, Yi).$state;
  return e().toString();
}, im = function(e, n) {
  if (this.disabled) return;
  const i = +e;
  r(this, Yi).remote.changePlaybackRate(i, n), this.dispatch("change", { detail: i, trigger: n });
}, $(JC, "props", {
  normalLabel: "Normal",
  rates: IE
});
const Gu = JC.prototype;
Le(Gu, "value");
Le(Gu, "disabled");
ot(Gu, "getOptions");
function rm(s) {
  const t = Do(), e = u.useRef();
  return e.current || (e.current = new T5()), u.useEffect(() => {
    const n = s, i = n instanceof ju, o = i ? n : t == null ? void 0 : t.player;
    e.current.setPlayer(o ?? null), e.current.setTarget(null);
  }, [t, s]), e.current;
}
const VE = [1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4];
var Qi, D6, ar, bs, am, cm, lm, um, dm;
class om extends de {
  constructor() {
    super();
    C(this, bs);
    C(this, Qi);
    C(this, D6);
    C(this, ar);
    g(this, ar, new qu()), r(this, ar).onValueChange = c(this, bs, dm).bind(this);
  }
  get value() {
    return r(this, ar).value;
  }
  get disabled() {
    const { gains: e } = this.$props, { canSetAudioGain: n } = r(this, Qi).$state;
    return !n() || e().length === 0;
  }
  onSetup() {
    g(this, Qi, Ae()), ln(Hs) && g(this, D6, Ye(Hs));
  }
  onConnect(e) {
    E(c(this, bs, am).bind(this)), E(c(this, bs, cm).bind(this)), E(c(this, bs, lm).bind(this));
  }
  getOptions() {
    const { gains: e, normalLabel: n } = this.$props;
    return e().map((i) => ({
      label: i === 1 || i === null ? n : String(i * 100) + "%",
      value: i.toString()
    }));
  }
}
Qi = new WeakMap(), D6 = new WeakMap(), ar = new WeakMap(), bs = new WeakSet(), am = function() {
  r(this, ar).value = c(this, bs, um).call(this);
}, cm = function() {
  var o;
  const { normalLabel: e } = this.$props, { audioGain: n } = r(this, Qi).$state, i = n();
  (o = r(this, D6)) == null || o.hint.set(i === 1 || i == null ? e() : String(i * 100) + "%");
}, lm = function() {
  var e;
  (e = r(this, D6)) == null || e.disable(this.disabled);
}, um = function() {
  var n;
  const { audioGain: e } = r(this, Qi).$state;
  return ((n = e()) == null ? void 0 : n.toString()) ?? "1";
}, dm = function(e, n) {
  if (this.disabled) return;
  const i = +e;
  r(this, Qi).remote.changeAudioGain(i, n), this.dispatch("change", { detail: i, trigger: n });
}, $(om, "props", {
  normalLabel: "Disabled",
  gains: VE
});
const Uu = om.prototype;
Le(Uu, "value");
Le(Uu, "disabled");
ot(Uu, "getOptions");
const AE = [
  "onAbort",
  "onAudioTrackChange",
  "onAudioTracksChange",
  "onAutoPlay",
  "onAutoPlayChange",
  "onAutoPlayFail",
  "onCanLoad",
  "onCanPlay",
  "onCanPlayThrough",
  "onControlsChange",
  "onDestroy",
  "onDurationChange",
  "onEmptied",
  "onEnd",
  "onEnded",
  "onError",
  "onFindMediaPlayer",
  "onFullscreenChange",
  "onFullscreenError",
  "onLiveChange",
  "onLiveEdgeChange",
  "onLoadedData",
  "onLoadedMetadata",
  "onLoadStart",
  "onLoopChange",
  "onOrientationChange",
  "onPause",
  "onPictureInPictureChange",
  "onPictureInPictureError",
  "onPlay",
  "onPlayFail",
  "onPlaying",
  "onPlaysInlineChange",
  "onPosterChange",
  "onProgress",
  "onProviderChange",
  "onProviderLoaderChange",
  "onProviderSetup",
  "onQualitiesChange",
  "onQualityChange",
  "onRateChange",
  "onReplay",
  "onSeeked",
  "onSeeking",
  "onSourceChange",
  "onSourceChange",
  "onStalled",
  "onStarted",
  "onStreamTypeChange",
  "onSuspend",
  "onTextTrackChange",
  "onTextTracksChange",
  "onTimeUpdate",
  "onTitleChange",
  "onVdsLog",
  "onVideoPresentationChange",
  "onVolumeChange",
  "onWaiting"
], NE = he(ju, {
  events: AE,
  eventsRegex: /^onHls/,
  domEventsRegex: /^onMedia/
}), hm = u.forwardRef(
  ({ aspectRatio: s, children: t, ...e }, n) => /* @__PURE__ */ u.createElement(
    NE,
    {
      ...e,
      src: e.src,
      ref: n,
      style: {
        aspectRatio: s,
        ...e.style
      }
    },
    (i) => /* @__PURE__ */ u.createElement(X.div, { ...i }, t)
  )
);
hm.displayName = "MediaPlayer";
const RE = he(gS), fm = u.forwardRef(
  ({ loaders: s = [], children: t, iframeProps: e, mediaProps: n, ...i }, o) => {
    const a = u.useMemo(() => s.map((l) => new l()), s);
    return /* @__PURE__ */ u.createElement(RE, { ...i, loaders: a, ref: o }, (l, d) => /* @__PURE__ */ u.createElement("div", { ...l }, /* @__PURE__ */ u.createElement(pm, { provider: d, mediaProps: n, iframeProps: e }), t));
  }
);
fm.displayName = "MediaProvider";
function pm({ provider: s, mediaProps: t, iframeProps: e }) {
  const { sources: n, crossOrigin: i, poster: o, remotePlaybackInfo: a, nativeControls: l, viewType: d } = mr(J6), { loader: h } = s.$state, { $provider: p, $providerSetup: f } = Do(), m = Be(n), y = Be(l), v = Be(i), b = Be(o), x = Be(h), S = Be(p), L = Be(f), k = Be(a), M = x == null ? void 0 : x.mediaType(), H = Be(d), Z = H === "audio", D = (x == null ? void 0 : x.name) === "youtube", P = (x == null ? void 0 : x.name) === "vimeo", K = D || P, W = (x == null ? void 0 : x.name) === "remotion", re = (x == null ? void 0 : x.name) === "google-cast", [Ce, se] = u.useState(""), [ne, Ne] = u.useState(!1);
  return u.useEffect(() => {
    !re || Ce || Promise.resolve().then(() => jv).then(function(j) {
      return j.chromecast;
    }).then((j) => {
      se(j.default);
    });
  }, [re]), u.useEffect(() => {
    Ne(!0);
  }, []), re ? /* @__PURE__ */ u.createElement(
    "div",
    {
      className: "vds-google-cast",
      ref: (j) => {
        s.load(j);
      }
    },
    /* @__PURE__ */ u.createElement(V, { paths: Ce }),
    k != null && k.deviceName ? /* @__PURE__ */ u.createElement("span", { className: "vds-google-cast-info" }, "Google Cast on", " ", /* @__PURE__ */ u.createElement("span", { className: "vds-google-cast-device-name" }, k.deviceName)) : null
  ) : W ? /* @__PURE__ */ u.createElement("div", { "data-remotion-canvas": !0 }, /* @__PURE__ */ u.createElement(
    "div",
    {
      "data-remotion-container": !0,
      ref: (j) => {
        s.load(j);
      }
    },
    i$(S) && L ? u.createElement(S.render) : null
  )) : K ? u.createElement(
    u.Fragment,
    null,
    u.createElement("iframe", {
      ...e,
      className: (e != null && e.className ? `${e.className} ` : "") + D ? "vds-youtube" : "vds-vimeo",
      suppressHydrationWarning: !0,
      tabIndex: y ? void 0 : -1,
      "aria-hidden": "true",
      "data-no-controls": y ? void 0 : "",
      ref(j) {
        s.load(j);
      }
    }),
    !y && !Z ? u.createElement("div", { className: "vds-blocker" }) : null
  ) : M ? u.createElement(M === "audio" ? "audio" : "video", {
    ...t,
    controls: y ? !0 : null,
    crossOrigin: typeof v == "boolean" ? "" : v,
    poster: M === "video" && y && b ? b : null,
    suppressHydrationWarning: !0,
    children: ne ? null : m.map(
      ({ src: j, type: G }) => ie(j) ? /* @__PURE__ */ u.createElement("source", { src: j, type: G !== "?" ? G : void 0, key: j }) : null
    ),
    ref(j) {
      s.load(j);
    }
  }) : null;
}
pm.displayName = "MediaOutlet";
function HE(s) {
  const t = Do(), e = u.useMemo(() => new lr(s), Object.values(s));
  return u.useEffect(() => (t.textTracks.add(e), () => void t.textTracks.remove(e)), [e]), e;
}
function Cm({ lang: s, ...t }) {
  return HE({ language: s, ...t }), null;
}
Cm.displayName = "Track";
const OE = he(wS), DE = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(OE, { ...t }, (n) => /* @__PURE__ */ u.createElement(
    X.button,
    {
      ...n,
      ref: ke(n.ref, e)
    },
    s
  ))
);
DE.displayName = "ToggleButton";
const _E = he(XS), mm = u.forwardRef(
  ({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(
    _E,
    {
      src: t.asChild && u.isValidElement(s) ? s.props.src : void 0,
      ...t
    },
    (n, i) => /* @__PURE__ */ u.createElement(
      gm,
      {
        ...n,
        instance: i,
        ref: ke(n.ref, e)
      },
      s
    )
  )
);
mm.displayName = "Poster";
const gm = u.forwardRef(
  ({ instance: s, children: t, ...e }, n) => {
    const { src: i, img: o, alt: a, crossOrigin: l, hidden: d } = s.$state, h = Be(i), p = Be(a), f = Be(l), m = Be(d);
    return /* @__PURE__ */ u.createElement(
      X.img,
      {
        ...e,
        src: h || void 0,
        alt: p || void 0,
        crossOrigin: f || void 0,
        ref: ke(o.set, n),
        style: { display: m ? "none" : void 0 }
      },
      t
    );
  }
);
gm.displayName = "PosterImg";
const FE = u.forwardRef(({ children: s, ...t }, e) => /* @__PURE__ */ u.createElement(
  X.div,
  {
    translate: "yes",
    "aria-live": "off",
    "aria-atomic": "true",
    ...t,
    ref: e
  },
  s
));
FE.displayName = "Caption";
const qE = u.forwardRef((s, t) => {
  const e = Zt("textTrack"), [n, i] = u.useState();
  return u.useEffect(() => {
    if (!e) return;
    function o() {
      i(e == null ? void 0 : e.activeCues[0]);
    }
    return e.addEventListener("cue-change", o), () => {
      e.removeEventListener("cue-change", o), i(void 0);
    };
  }, [e]), /* @__PURE__ */ u.createElement(
    X.span,
    {
      ...s,
      "data-part": "cue",
      dangerouslySetInnerHTML: {
        __html: (n == null ? void 0 : n.text) || ""
      },
      ref: t
    }
  );
});
qE.displayName = "CaptionText";
function ZE({
  clamp: s = !1,
  offset: t = 0,
  orientation: e = "horizontal"
} = {}) {
  const [n, i] = u.useState(null), [o, a] = u.useState(null), [l, d] = u.useState(0), [h, p] = u.useState(!1);
  return u.useEffect(() => {
    if (!n) return;
    const f = ee(!1);
    function m(y) {
      n && d(jE(n, y, e));
    }
    return E(() => {
      f() || new Pe(n).add("pointerenter", () => {
        p(!0), o == null || o.setAttribute("data-visible", "");
      }).add("pointerdown", (y) => {
        f.set(!0), m(y);
      }).add("pointerleave", () => {
        p(!1), o == null || o.removeAttribute("data-visible");
      }).add("pointermove", m), o == null || o.setAttribute("data-dragging", ""), new Pe(document).add("pointerup", (y) => {
        f.set(!1), o == null || o.removeAttribute("data-dragging"), m(y);
      }).add("pointermove", m).add("touchmove", (y) => y.preventDefault(), { passive: !1 });
    });
  }, [n]), u.useEffect(() => {
    o && o.style.setProperty("--slider-pointer", l + "%");
  }, [o, l]), u.useEffect(() => {
    if (!o) return;
    const f = () => {
      vf(o, {
        offset: t,
        clamp: s,
        orientation: e
      });
    };
    f();
    const m = new ResizeObserver(f);
    return m.observe(o), () => m.disconnect();
  }, [o, s, t, e]), {
    previewRootRef: i,
    previewRef: a,
    previewValue: l,
    isPreviewVisible: h
  };
}
function jE(s, t, e) {
  let n, i = s.getBoundingClientRect();
  if (e === "vertical") {
    const { bottom: o, height: a } = i;
    n = (o - t.clientY) / a;
  } else {
    const { left: o, width: a } = i;
    n = (t.clientX - o) / a;
  }
  return BE(Math.max(0, Math.min(100, 100 * n)));
}
function BE(s) {
  return Number(s.toFixed(3));
}
const GE = "_captions_tsk1r_9", UE = {
  captions: GE
};
function oe(s, t, { checkForDefaultPrevented: e = !0 } = {}) {
  return function(i) {
    if (s == null || s(i), e === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function WE(s, t) {
  typeof s == "function" ? s(t) : s != null && (s.current = t);
}
function M2(...s) {
  return (t) => s.forEach((e) => WE(e, t));
}
function tt(...s) {
  return u.useCallback(M2(...s), s);
}
function k2(s, t = []) {
  let e = [];
  function n(o, a) {
    const l = u.createContext(a), d = e.length;
    e = [...e, a];
    const h = (f) => {
      var S;
      const { scope: m, children: y, ...v } = f, b = ((S = m == null ? void 0 : m[s]) == null ? void 0 : S[d]) || l, x = u.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ w.jsx(b.Provider, { value: x, children: y });
    };
    h.displayName = o + "Provider";
    function p(f, m) {
      var b;
      const y = ((b = m == null ? void 0 : m[s]) == null ? void 0 : b[d]) || l, v = u.useContext(y);
      if (v) return v;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return [h, p];
  }
  const i = () => {
    const o = e.map((a) => u.createContext(a));
    return function(l) {
      const d = (l == null ? void 0 : l[s]) || o;
      return u.useMemo(
        () => ({ [`__scope${s}`]: { ...l, [s]: d } }),
        [l, d]
      );
    };
  };
  return i.scopeName = s, [n, KE(i, ...t)];
}
function KE(...s) {
  const t = s[0];
  if (s.length === 1) return t;
  const e = () => {
    const n = s.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(o) {
      const a = n.reduce((l, { useScope: d, scopeName: h }) => {
        const f = d(o)[`__scope${h}`];
        return { ...l, ...f };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return e.scopeName = t.scopeName, e;
}
var E3 = u.forwardRef((s, t) => {
  const { children: e, ...n } = s, i = u.Children.toArray(e), o = i.find(zE);
  if (o) {
    const a = o.props.children, l = i.map((d) => d === o ? u.Children.count(a) > 1 ? u.Children.only(null) : u.isValidElement(a) ? a.props.children : null : d);
    return /* @__PURE__ */ w.jsx(K9, { ...n, ref: t, children: u.isValidElement(a) ? u.cloneElement(a, void 0, l) : null });
  }
  return /* @__PURE__ */ w.jsx(K9, { ...n, ref: t, children: e });
});
E3.displayName = "Slot";
var K9 = u.forwardRef((s, t) => {
  const { children: e, ...n } = s;
  if (u.isValidElement(e)) {
    const i = QE(e);
    return u.cloneElement(e, {
      ...YE(n, e.props),
      // @ts-ignore
      ref: t ? M2(t, i) : i
    });
  }
  return u.Children.count(e) > 1 ? u.Children.only(null) : null;
});
K9.displayName = "SlotClone";
var ym = ({ children: s }) => /* @__PURE__ */ w.jsx(w.Fragment, { children: s });
function zE(s) {
  return u.isValidElement(s) && s.type === ym;
}
function YE(s, t) {
  const e = { ...t };
  for (const n in t) {
    const i = s[n], o = t[n];
    /^on[A-Z]/.test(n) ? i && o ? e[n] = (...l) => {
      o(...l), i(...l);
    } : i && (e[n] = i) : n === "style" ? e[n] = { ...i, ...o } : n === "className" && (e[n] = [i, o].filter(Boolean).join(" "));
  }
  return { ...s, ...e };
}
function QE(s) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(s.props, "ref")) == null ? void 0 : n.get, e = t && "isReactWarning" in t && t.isReactWarning;
  return e ? s.ref : (t = (i = Object.getOwnPropertyDescriptor(s, "ref")) == null ? void 0 : i.get, e = t && "isReactWarning" in t && t.isReactWarning, e ? s.props.ref : s.props.ref || s.ref);
}
var XE = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], nt = XE.reduce((s, t) => {
  const e = u.forwardRef((n, i) => {
    const { asChild: o, ...a } = n, l = o ? E3 : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ w.jsx(l, { ...a, ref: i });
  });
  return e.displayName = `Primitive.${t}`, { ...s, [t]: e };
}, {});
function vm(s, t) {
  s && xd.flushSync(() => s.dispatchEvent(t));
}
function Fs(s) {
  const t = u.useRef(s);
  return u.useEffect(() => {
    t.current = s;
  }), u.useMemo(() => (...e) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...e);
  }, []);
}
function JE(s, t = globalThis == null ? void 0 : globalThis.document) {
  const e = Fs(s);
  u.useEffect(() => {
    const n = (i) => {
      i.key === "Escape" && e(i);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [e, t]);
}
var eT = "DismissableLayer", z9 = "dismissableLayer.update", tT = "dismissableLayer.pointerDownOutside", sT = "dismissableLayer.focusOutside", W7, bm = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Wu = u.forwardRef(
  (s, t) => {
    const {
      disableOutsidePointerEvents: e = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: i,
      onFocusOutside: o,
      onInteractOutside: a,
      onDismiss: l,
      ...d
    } = s, h = u.useContext(bm), [p, f] = u.useState(null), m = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, y] = u.useState({}), v = tt(t, (D) => f(D)), b = Array.from(h.layers), [x] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), S = b.indexOf(x), L = p ? b.indexOf(p) : -1, k = h.layersWithOutsidePointerEventsDisabled.size > 0, M = L >= S, H = rT((D) => {
      const P = D.target, K = [...h.branches].some((W) => W.contains(P));
      !M || K || (i == null || i(D), a == null || a(D), D.defaultPrevented || l == null || l());
    }, m), Z = oT((D) => {
      const P = D.target;
      [...h.branches].some((W) => W.contains(P)) || (o == null || o(D), a == null || a(D), D.defaultPrevented || l == null || l());
    }, m);
    return JE((D) => {
      L === h.layers.size - 1 && (n == null || n(D), !D.defaultPrevented && l && (D.preventDefault(), l()));
    }, m), u.useEffect(() => {
      if (p)
        return e && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (W7 = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(p)), h.layers.add(p), K7(), () => {
          e && h.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = W7);
        };
    }, [p, m, e, h]), u.useEffect(() => () => {
      p && (h.layers.delete(p), h.layersWithOutsidePointerEventsDisabled.delete(p), K7());
    }, [p, h]), u.useEffect(() => {
      const D = () => y({});
      return document.addEventListener(z9, D), () => document.removeEventListener(z9, D);
    }, []), /* @__PURE__ */ w.jsx(
      nt.div,
      {
        ...d,
        ref: v,
        style: {
          pointerEvents: k ? M ? "auto" : "none" : void 0,
          ...s.style
        },
        onFocusCapture: oe(s.onFocusCapture, Z.onFocusCapture),
        onBlurCapture: oe(s.onBlurCapture, Z.onBlurCapture),
        onPointerDownCapture: oe(
          s.onPointerDownCapture,
          H.onPointerDownCapture
        )
      }
    );
  }
);
Wu.displayName = eT;
var nT = "DismissableLayerBranch", iT = u.forwardRef((s, t) => {
  const e = u.useContext(bm), n = u.useRef(null), i = tt(t, n);
  return u.useEffect(() => {
    const o = n.current;
    if (o)
      return e.branches.add(o), () => {
        e.branches.delete(o);
      };
  }, [e.branches]), /* @__PURE__ */ w.jsx(nt.div, { ...s, ref: i });
});
iT.displayName = nT;
function rT(s, t = globalThis == null ? void 0 : globalThis.document) {
  const e = Fs(s), n = u.useRef(!1), i = u.useRef(() => {
  });
  return u.useEffect(() => {
    const o = (l) => {
      if (l.target && !n.current) {
        let d = function() {
          wm(
            tT,
            e,
            h,
            { discrete: !0 }
          );
        };
        const h = { originalEvent: l };
        l.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = d, t.addEventListener("click", i.current, { once: !0 })) : d();
      } else
        t.removeEventListener("click", i.current);
      n.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", o), t.removeEventListener("click", i.current);
    };
  }, [t, e]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function oT(s, t = globalThis == null ? void 0 : globalThis.document) {
  const e = Fs(s), n = u.useRef(!1);
  return u.useEffect(() => {
    const i = (o) => {
      o.target && !n.current && wm(sT, e, { originalEvent: o }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, e]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function K7() {
  const s = new CustomEvent(z9);
  document.dispatchEvent(s);
}
function wm(s, t, e, { discrete: n }) {
  const i = e.originalEvent.target, o = new CustomEvent(s, { bubbles: !1, cancelable: !0, detail: e });
  t && i.addEventListener(s, t, { once: !0 }), n ? vm(i, o) : i.dispatchEvent(o);
}
var ur = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, aT = u.useId || (() => {
}), cT = 0;
function Ua(s) {
  const [t, e] = u.useState(aT());
  return ur(() => {
    e((n) => n ?? String(cT++));
  }, [s]), t ? `radix-${t}` : "";
}
var Pa = typeof document < "u" ? hy : ou;
function Wa(s, t) {
  if (s === t)
    return !0;
  if (typeof s != typeof t)
    return !1;
  if (typeof s == "function" && s.toString() === t.toString())
    return !0;
  let e, n, i;
  if (s && t && typeof s == "object") {
    if (Array.isArray(s)) {
      if (e = s.length, e !== t.length) return !1;
      for (n = e; n-- !== 0; )
        if (!Wa(s[n], t[n]))
          return !1;
      return !0;
    }
    if (i = Object.keys(s), e = i.length, e !== Object.keys(t).length)
      return !1;
    for (n = e; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, i[n]))
        return !1;
    for (n = e; n-- !== 0; ) {
      const o = i[n];
      if (!(o === "_owner" && s.$$typeof) && !Wa(s[o], t[o]))
        return !1;
    }
    return !0;
  }
  return s !== s && t !== t;
}
function xm(s) {
  return typeof window > "u" ? 1 : (s.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function z7(s, t) {
  const e = xm(s);
  return Math.round(t * e) / e;
}
function sc(s) {
  const t = u.useRef(s);
  return Pa(() => {
    t.current = s;
  }), t;
}
function lT(s) {
  s === void 0 && (s = {});
  const {
    placement: t = "bottom",
    strategy: e = "absolute",
    middleware: n = [],
    platform: i,
    elements: {
      reference: o,
      floating: a
    } = {},
    transform: l = !0,
    whileElementsMounted: d,
    open: h
  } = s, [p, f] = u.useState({
    x: 0,
    y: 0,
    strategy: e,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, y] = u.useState(n);
  Wa(m, n) || y(n);
  const [v, b] = u.useState(null), [x, S] = u.useState(null), L = u.useCallback((U) => {
    U !== Z.current && (Z.current = U, b(U));
  }, []), k = u.useCallback((U) => {
    U !== D.current && (D.current = U, S(U));
  }, []), M = o || v, H = a || x, Z = u.useRef(null), D = u.useRef(null), P = u.useRef(p), K = d != null, W = sc(d), re = sc(i), Ce = sc(h), se = u.useCallback(() => {
    if (!Z.current || !D.current)
      return;
    const U = {
      placement: t,
      strategy: e,
      middleware: m
    };
    re.current && (U.platform = re.current), d5(Z.current, D.current, U).then((F) => {
      const Se = {
        ...F,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: Ce.current !== !1
      };
      ne.current && !Wa(P.current, Se) && (P.current = Se, xd.flushSync(() => {
        f(Se);
      }));
    });
  }, [m, t, e, re, Ce]);
  Pa(() => {
    h === !1 && P.current.isPositioned && (P.current.isPositioned = !1, f((U) => ({
      ...U,
      isPositioned: !1
    })));
  }, [h]);
  const ne = u.useRef(!1);
  Pa(() => (ne.current = !0, () => {
    ne.current = !1;
  }), []), Pa(() => {
    if (M && (Z.current = M), H && (D.current = H), M && H) {
      if (W.current)
        return W.current(M, H, se);
      se();
    }
  }, [M, H, se, W, K]);
  const Ne = u.useMemo(() => ({
    reference: Z,
    floating: D,
    setReference: L,
    setFloating: k
  }), [L, k]), j = u.useMemo(() => ({
    reference: M,
    floating: H
  }), [M, H]), G = u.useMemo(() => {
    const U = {
      position: e,
      left: 0,
      top: 0
    };
    if (!j.floating)
      return U;
    const F = z7(j.floating, p.x), Se = z7(j.floating, p.y);
    return l ? {
      ...U,
      transform: "translate(" + F + "px, " + Se + "px)",
      ...xm(j.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: e,
      left: F,
      top: Se
    };
  }, [e, l, j.floating, p.x, p.y]);
  return u.useMemo(() => ({
    ...p,
    update: se,
    refs: Ne,
    elements: j,
    floatingStyles: G
  }), [p, se, Ne, j, G]);
}
const uT = (s) => {
  function t(e) {
    return {}.hasOwnProperty.call(e, "current");
  }
  return {
    name: "arrow",
    options: s,
    fn(e) {
      const {
        element: n,
        padding: i
      } = typeof s == "function" ? s(e) : s;
      return n && t(n) ? n.current != null ? L7({
        element: n.current,
        padding: i
      }).fn(e) : {} : n ? L7({
        element: n,
        padding: i
      }).fn(e) : {};
    }
  };
}, dT = (s, t) => ({
  ...$b(s),
  options: [s, t]
}), hT = (s, t) => ({
  ...l5(s),
  options: [s, t]
}), fT = (s, t) => ({
  ...Lb(s),
  options: [s, t]
}), pT = (s, t) => ({
  ...u5(s),
  options: [s, t]
}), CT = (s, t) => ({
  ...Eb(s),
  options: [s, t]
}), mT = (s, t) => ({
  ...Tb(s),
  options: [s, t]
}), gT = (s, t) => ({
  ...uT(s),
  options: [s, t]
});
var yT = "Arrow", Sm = u.forwardRef((s, t) => {
  const { children: e, width: n = 10, height: i = 5, ...o } = s;
  return /* @__PURE__ */ w.jsx(
    nt.svg,
    {
      ...o,
      ref: t,
      width: n,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: s.asChild ? e : /* @__PURE__ */ w.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Sm.displayName = yT;
var vT = Sm;
function bT(s, t = []) {
  let e = [];
  function n(o, a) {
    const l = u.createContext(a), d = e.length;
    e = [...e, a];
    function h(f) {
      const { scope: m, children: y, ...v } = f, b = (m == null ? void 0 : m[s][d]) || l, x = u.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ w.jsx(b.Provider, { value: x, children: y });
    }
    function p(f, m) {
      const y = (m == null ? void 0 : m[s][d]) || l, v = u.useContext(y);
      if (v) return v;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return h.displayName = o + "Provider", [h, p];
  }
  const i = () => {
    const o = e.map((a) => u.createContext(a));
    return function(l) {
      const d = (l == null ? void 0 : l[s]) || o;
      return u.useMemo(
        () => ({ [`__scope${s}`]: { ...l, [s]: d } }),
        [l, d]
      );
    };
  };
  return i.scopeName = s, [n, wT(i, ...t)];
}
function wT(...s) {
  const t = s[0];
  if (s.length === 1) return t;
  const e = () => {
    const n = s.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(o) {
      const a = n.reduce((l, { useScope: d, scopeName: h }) => {
        const f = d(o)[`__scope${h}`];
        return { ...l, ...f };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return e.scopeName = t.scopeName, e;
}
function $m(s) {
  const [t, e] = u.useState(void 0);
  return ur(() => {
    if (s) {
      e({ width: s.offsetWidth, height: s.offsetHeight });
      const n = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const o = i[0];
        let a, l;
        if ("borderBoxSize" in o) {
          const d = o.borderBoxSize, h = Array.isArray(d) ? d[0] : d;
          a = h.inlineSize, l = h.blockSize;
        } else
          a = s.offsetWidth, l = s.offsetHeight;
        e({ width: a, height: l });
      });
      return n.observe(s, { box: "border-box" }), () => n.unobserve(s);
    } else
      e(void 0);
  }, [s]), t;
}
var Ku = "Popper", [Em, I2] = bT(Ku), [xT, Tm] = Em(Ku), Lm = (s) => {
  const { __scopePopper: t, children: e } = s, [n, i] = u.useState(null);
  return /* @__PURE__ */ w.jsx(xT, { scope: t, anchor: n, onAnchorChange: i, children: e });
};
Lm.displayName = Ku;
var Pm = "PopperAnchor", Mm = u.forwardRef(
  (s, t) => {
    const { __scopePopper: e, virtualRef: n, ...i } = s, o = Tm(Pm, e), a = u.useRef(null), l = tt(t, a);
    return u.useEffect(() => {
      o.onAnchorChange((n == null ? void 0 : n.current) || a.current);
    }), n ? null : /* @__PURE__ */ w.jsx(nt.div, { ...i, ref: l });
  }
);
Mm.displayName = Pm;
var zu = "PopperContent", [ST, $T] = Em(zu), km = u.forwardRef(
  (s, t) => {
    var Nt, Bs, Qe, Rt, h1, f1;
    const {
      __scopePopper: e,
      side: n = "bottom",
      sideOffset: i = 0,
      align: o = "center",
      alignOffset: a = 0,
      arrowPadding: l = 0,
      avoidCollisions: d = !0,
      collisionBoundary: h = [],
      collisionPadding: p = 0,
      sticky: f = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: y = "optimized",
      onPlaced: v,
      ...b
    } = s, x = Tm(zu, e), [S, L] = u.useState(null), k = tt(t, ($n) => L($n)), [M, H] = u.useState(null), Z = $m(M), D = (Z == null ? void 0 : Z.width) ?? 0, P = (Z == null ? void 0 : Z.height) ?? 0, K = n + (o !== "center" ? "-" + o : ""), W = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, re = Array.isArray(h) ? h : [h], Ce = re.length > 0, se = {
      padding: W,
      boundary: re.filter(TT),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: Ce
    }, { refs: ne, floatingStyles: Ne, placement: j, isPositioned: G, middlewareData: U } = lT({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: K,
      whileElementsMounted: (...$n) => c5(...$n, {
        animationFrame: y === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        dT({ mainAxis: i + P, alignmentAxis: a }),
        d && hT({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? fT() : void 0,
          ...se
        }),
        d && pT({ ...se }),
        CT({
          ...se,
          apply: ({ elements: $n, rects: xr, availableWidth: qo, availableHeight: Zo }) => {
            const { width: cy, height: ly } = xr.reference, jo = $n.floating.style;
            jo.setProperty("--radix-popper-available-width", `${qo}px`), jo.setProperty("--radix-popper-available-height", `${Zo}px`), jo.setProperty("--radix-popper-anchor-width", `${cy}px`), jo.setProperty("--radix-popper-anchor-height", `${ly}px`);
          }
        }),
        M && gT({ element: M, padding: l }),
        LT({ arrowWidth: D, arrowHeight: P }),
        m && mT({ strategy: "referenceHidden", ...se })
      ]
    }), [F, Se] = Am(j), We = Fs(v);
    ur(() => {
      G && (We == null || We());
    }, [G, We]);
    const At = (Nt = U.arrow) == null ? void 0 : Nt.x, Zs = (Bs = U.arrow) == null ? void 0 : Bs.y, js = ((Qe = U.arrow) == null ? void 0 : Qe.centerOffset) !== 0, [Sn, cs] = u.useState();
    return ur(() => {
      S && cs(window.getComputedStyle(S).zIndex);
    }, [S]), /* @__PURE__ */ w.jsx(
      "div",
      {
        ref: ne.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Ne,
          transform: G ? Ne.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Sn,
          "--radix-popper-transform-origin": [
            (Rt = U.transformOrigin) == null ? void 0 : Rt.x,
            (h1 = U.transformOrigin) == null ? void 0 : h1.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((f1 = U.hide) == null ? void 0 : f1.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: s.dir,
        children: /* @__PURE__ */ w.jsx(
          ST,
          {
            scope: e,
            placedSide: F,
            onArrowChange: H,
            arrowX: At,
            arrowY: Zs,
            shouldHideArrow: js,
            children: /* @__PURE__ */ w.jsx(
              nt.div,
              {
                "data-side": F,
                "data-align": Se,
                ...b,
                ref: k,
                style: {
                  ...b.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: G ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
km.displayName = zu;
var Im = "PopperArrow", ET = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Vm = u.forwardRef(function(t, e) {
  const { __scopePopper: n, ...i } = t, o = $T(Im, n), a = ET[o.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ w.jsx(
      "span",
      {
        ref: o.onArrowChange,
        style: {
          position: "absolute",
          left: o.arrowX,
          top: o.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[o.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[o.placedSide],
          visibility: o.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ w.jsx(
          vT,
          {
            ...i,
            ref: e,
            style: {
              ...i.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Vm.displayName = Im;
function TT(s) {
  return s !== null;
}
var LT = (s) => ({
  name: "transformOrigin",
  options: s,
  fn(t) {
    var x, S, L;
    const { placement: e, rects: n, middlewareData: i } = t, a = ((x = i.arrow) == null ? void 0 : x.centerOffset) !== 0, l = a ? 0 : s.arrowWidth, d = a ? 0 : s.arrowHeight, [h, p] = Am(e), f = { start: "0%", center: "50%", end: "100%" }[p], m = (((S = i.arrow) == null ? void 0 : S.x) ?? 0) + l / 2, y = (((L = i.arrow) == null ? void 0 : L.y) ?? 0) + d / 2;
    let v = "", b = "";
    return h === "bottom" ? (v = a ? f : `${m}px`, b = `${-d}px`) : h === "top" ? (v = a ? f : `${m}px`, b = `${n.floating.height + d}px`) : h === "right" ? (v = `${-d}px`, b = a ? f : `${y}px`) : h === "left" && (v = `${n.floating.width + d}px`, b = a ? f : `${y}px`), { data: { x: v, y: b } };
  }
});
function Am(s) {
  const [t, e = "center"] = s.split("-");
  return [t, e];
}
var Nm = Lm, Rm = Mm, Hm = km, Om = Vm, PT = "Portal", Dm = u.forwardRef((s, t) => {
  var l;
  const { container: e, ...n } = s, [i, o] = u.useState(!1);
  ur(() => o(!0), []);
  const a = e || i && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return a ? py.createPortal(/* @__PURE__ */ w.jsx(nt.div, { ...n, ref: t }), a) : null;
});
Dm.displayName = PT;
function MT(s, t) {
  return u.useReducer((e, n) => t[e][n] ?? e, s);
}
var s3 = (s) => {
  const { present: t, children: e } = s, n = kT(t), i = typeof e == "function" ? e({ present: n.isPresent }) : u.Children.only(e), o = tt(n.ref, IT(i));
  return typeof e == "function" || n.isPresent ? u.cloneElement(i, { ref: o }) : null;
};
s3.displayName = "Presence";
function kT(s) {
  const [t, e] = u.useState(), n = u.useRef({}), i = u.useRef(s), o = u.useRef("none"), a = s ? "mounted" : "unmounted", [l, d] = MT(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return u.useEffect(() => {
    const h = zo(n.current);
    o.current = l === "mounted" ? h : "none";
  }, [l]), ur(() => {
    const h = n.current, p = i.current;
    if (p !== s) {
      const m = o.current, y = zo(h);
      s ? d("MOUNT") : y === "none" || (h == null ? void 0 : h.display) === "none" ? d("UNMOUNT") : d(p && m !== y ? "ANIMATION_OUT" : "UNMOUNT"), i.current = s;
    }
  }, [s, d]), ur(() => {
    if (t) {
      let h;
      const p = t.ownerDocument.defaultView ?? window, f = (y) => {
        const b = zo(n.current).includes(y.animationName);
        if (y.target === t && b && (d("ANIMATION_END"), !i.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", h = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, m = (y) => {
        y.target === t && (o.current = zo(n.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        p.clearTimeout(h), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      d("ANIMATION_END");
  }, [t, d]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: u.useCallback((h) => {
      h && (n.current = getComputedStyle(h)), e(h);
    }, [])
  };
}
function zo(s) {
  return (s == null ? void 0 : s.animationName) || "none";
}
function IT(s) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(s.props, "ref")) == null ? void 0 : n.get, e = t && "isReactWarning" in t && t.isReactWarning;
  return e ? s.ref : (t = (i = Object.getOwnPropertyDescriptor(s, "ref")) == null ? void 0 : i.get, e = t && "isReactWarning" in t && t.isReactWarning, e ? s.props.ref : s.props.ref || s.ref);
}
function V2({
  prop: s,
  defaultProp: t,
  onChange: e = () => {
  }
}) {
  const [n, i] = VT({ defaultProp: t, onChange: e }), o = s !== void 0, a = o ? s : n, l = Fs(e), d = u.useCallback(
    (h) => {
      if (o) {
        const f = typeof h == "function" ? h(s) : h;
        f !== s && l(f);
      } else
        i(h);
    },
    [o, s, i, l]
  );
  return [a, d];
}
function VT({
  defaultProp: s,
  onChange: t
}) {
  const e = u.useState(s), [n] = e, i = u.useRef(n), o = Fs(t);
  return u.useEffect(() => {
    i.current !== n && (o(n), i.current = n);
  }, [n, i, o]), e;
}
var AT = "VisuallyHidden", _m = u.forwardRef(
  (s, t) => /* @__PURE__ */ w.jsx(
    nt.span,
    {
      ...s,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...s.style
      }
    }
  )
);
_m.displayName = AT;
var NT = _m, [A2, HN] = k2("Tooltip", [
  I2
]), N2 = I2(), Fm = "TooltipProvider", RT = 700, Y9 = "tooltip.open", [HT, Yu] = A2(Fm), qm = (s) => {
  const {
    __scopeTooltip: t,
    delayDuration: e = RT,
    skipDelayDuration: n = 300,
    disableHoverableContent: i = !1,
    children: o
  } = s, [a, l] = u.useState(!0), d = u.useRef(!1), h = u.useRef(0);
  return u.useEffect(() => {
    const p = h.current;
    return () => window.clearTimeout(p);
  }, []), /* @__PURE__ */ w.jsx(
    HT,
    {
      scope: t,
      isOpenDelayed: a,
      delayDuration: e,
      onOpen: u.useCallback(() => {
        window.clearTimeout(h.current), l(!1);
      }, []),
      onClose: u.useCallback(() => {
        window.clearTimeout(h.current), h.current = window.setTimeout(
          () => l(!0),
          n
        );
      }, [n]),
      isPointerInTransitRef: d,
      onPointerInTransitChange: u.useCallback((p) => {
        d.current = p;
      }, []),
      disableHoverableContent: i,
      children: o
    }
  );
};
qm.displayName = Fm;
var R2 = "Tooltip", [OT, H2] = A2(R2), Zm = (s) => {
  const {
    __scopeTooltip: t,
    children: e,
    open: n,
    defaultOpen: i = !1,
    onOpenChange: o,
    disableHoverableContent: a,
    delayDuration: l
  } = s, d = Yu(R2, s.__scopeTooltip), h = N2(t), [p, f] = u.useState(null), m = Ua(), y = u.useRef(0), v = a ?? d.disableHoverableContent, b = l ?? d.delayDuration, x = u.useRef(!1), [S = !1, L] = V2({
    prop: n,
    defaultProp: i,
    onChange: (D) => {
      D ? (d.onOpen(), document.dispatchEvent(new CustomEvent(Y9))) : d.onClose(), o == null || o(D);
    }
  }), k = u.useMemo(() => S ? x.current ? "delayed-open" : "instant-open" : "closed", [S]), M = u.useCallback(() => {
    window.clearTimeout(y.current), y.current = 0, x.current = !1, L(!0);
  }, [L]), H = u.useCallback(() => {
    window.clearTimeout(y.current), y.current = 0, L(!1);
  }, [L]), Z = u.useCallback(() => {
    window.clearTimeout(y.current), y.current = window.setTimeout(() => {
      x.current = !0, L(!0), y.current = 0;
    }, b);
  }, [b, L]);
  return u.useEffect(() => () => {
    y.current && (window.clearTimeout(y.current), y.current = 0);
  }, []), /* @__PURE__ */ w.jsx(Nm, { ...h, children: /* @__PURE__ */ w.jsx(
    OT,
    {
      scope: t,
      contentId: m,
      open: S,
      stateAttribute: k,
      trigger: p,
      onTriggerChange: f,
      onTriggerEnter: u.useCallback(() => {
        d.isOpenDelayed ? Z() : M();
      }, [d.isOpenDelayed, Z, M]),
      onTriggerLeave: u.useCallback(() => {
        v ? H() : (window.clearTimeout(y.current), y.current = 0);
      }, [H, v]),
      onOpen: M,
      onClose: H,
      disableHoverableContent: v,
      children: e
    }
  ) });
};
Zm.displayName = R2;
var Q9 = "TooltipTrigger", jm = u.forwardRef(
  (s, t) => {
    const { __scopeTooltip: e, ...n } = s, i = H2(Q9, e), o = Yu(Q9, e), a = N2(e), l = u.useRef(null), d = tt(t, l, i.onTriggerChange), h = u.useRef(!1), p = u.useRef(!1), f = u.useCallback(() => h.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ w.jsx(Rm, { asChild: !0, ...a, children: /* @__PURE__ */ w.jsx(
      nt.button,
      {
        "aria-describedby": i.open ? i.contentId : void 0,
        "data-state": i.stateAttribute,
        ...n,
        ref: d,
        onPointerMove: oe(s.onPointerMove, (m) => {
          m.pointerType !== "touch" && !p.current && !o.isPointerInTransitRef.current && (i.onTriggerEnter(), p.current = !0);
        }),
        onPointerLeave: oe(s.onPointerLeave, () => {
          i.onTriggerLeave(), p.current = !1;
        }),
        onPointerDown: oe(s.onPointerDown, () => {
          h.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: oe(s.onFocus, () => {
          h.current || i.onOpen();
        }),
        onBlur: oe(s.onBlur, i.onClose),
        onClick: oe(s.onClick, i.onClose)
      }
    ) });
  }
);
jm.displayName = Q9;
var DT = "TooltipPortal", [ON, _T] = A2(DT, {
  forceMount: void 0
}), B6 = "TooltipContent", Bm = u.forwardRef(
  (s, t) => {
    const e = _T(B6, s.__scopeTooltip), { forceMount: n = e.forceMount, side: i = "top", ...o } = s, a = H2(B6, s.__scopeTooltip);
    return /* @__PURE__ */ w.jsx(s3, { present: n || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ w.jsx(Gm, { side: i, ...o, ref: t }) : /* @__PURE__ */ w.jsx(FT, { side: i, ...o, ref: t }) });
  }
), FT = u.forwardRef((s, t) => {
  const e = H2(B6, s.__scopeTooltip), n = Yu(B6, s.__scopeTooltip), i = u.useRef(null), o = tt(t, i), [a, l] = u.useState(null), { trigger: d, onClose: h } = e, p = i.current, { onPointerInTransitChange: f } = n, m = u.useCallback(() => {
    l(null), f(!1);
  }, [f]), y = u.useCallback(
    (v, b) => {
      const x = v.currentTarget, S = { x: v.clientX, y: v.clientY }, L = BT(S, x.getBoundingClientRect()), k = GT(S, L), M = UT(b.getBoundingClientRect()), H = KT([...k, ...M]);
      l(H), f(!0);
    },
    [f]
  );
  return u.useEffect(() => () => m(), [m]), u.useEffect(() => {
    if (d && p) {
      const v = (x) => y(x, p), b = (x) => y(x, d);
      return d.addEventListener("pointerleave", v), p.addEventListener("pointerleave", b), () => {
        d.removeEventListener("pointerleave", v), p.removeEventListener("pointerleave", b);
      };
    }
  }, [d, p, y, m]), u.useEffect(() => {
    if (a) {
      const v = (b) => {
        const x = b.target, S = { x: b.clientX, y: b.clientY }, L = (d == null ? void 0 : d.contains(x)) || (p == null ? void 0 : p.contains(x)), k = !WT(S, a);
        L ? m() : k && (m(), h());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [d, p, a, h, m]), /* @__PURE__ */ w.jsx(Gm, { ...s, ref: o });
}), [qT, ZT] = A2(R2, { isInside: !1 }), Gm = u.forwardRef(
  (s, t) => {
    const {
      __scopeTooltip: e,
      children: n,
      "aria-label": i,
      onEscapeKeyDown: o,
      onPointerDownOutside: a,
      ...l
    } = s, d = H2(B6, e), h = N2(e), { onClose: p } = d;
    return u.useEffect(() => (document.addEventListener(Y9, p), () => document.removeEventListener(Y9, p)), [p]), u.useEffect(() => {
      if (d.trigger) {
        const f = (m) => {
          const y = m.target;
          y != null && y.contains(d.trigger) && p();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [d.trigger, p]), /* @__PURE__ */ w.jsx(
      Wu,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: a,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ w.jsxs(
          Hm,
          {
            "data-state": d.stateAttribute,
            ...h,
            ...l,
            ref: t,
            style: {
              ...l.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ w.jsx(ym, { children: n }),
              /* @__PURE__ */ w.jsx(qT, { scope: e, isInside: !0, children: /* @__PURE__ */ w.jsx(NT, { id: d.contentId, role: "tooltip", children: i || n }) })
            ]
          }
        )
      }
    );
  }
);
Bm.displayName = B6;
var Um = "TooltipArrow", jT = u.forwardRef(
  (s, t) => {
    const { __scopeTooltip: e, ...n } = s, i = N2(e);
    return ZT(
      Um,
      e
    ).isInside ? null : /* @__PURE__ */ w.jsx(Om, { ...i, ...n, ref: t });
  }
);
jT.displayName = Um;
function BT(s, t) {
  const e = Math.abs(t.top - s.y), n = Math.abs(t.bottom - s.y), i = Math.abs(t.right - s.x), o = Math.abs(t.left - s.x);
  switch (Math.min(e, n, i, o)) {
    case o:
      return "left";
    case i:
      return "right";
    case e:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function GT(s, t, e = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push(
        { x: s.x - e, y: s.y + e },
        { x: s.x + e, y: s.y + e }
      );
      break;
    case "bottom":
      n.push(
        { x: s.x - e, y: s.y - e },
        { x: s.x + e, y: s.y - e }
      );
      break;
    case "left":
      n.push(
        { x: s.x + e, y: s.y - e },
        { x: s.x + e, y: s.y + e }
      );
      break;
    case "right":
      n.push(
        { x: s.x - e, y: s.y - e },
        { x: s.x - e, y: s.y + e }
      );
      break;
  }
  return n;
}
function UT(s) {
  const { top: t, right: e, bottom: n, left: i } = s;
  return [
    { x: i, y: t },
    { x: e, y: t },
    { x: e, y: n },
    { x: i, y: n }
  ];
}
function WT(s, t) {
  const { x: e, y: n } = s;
  let i = !1;
  for (let o = 0, a = t.length - 1; o < t.length; a = o++) {
    const l = t[o].x, d = t[o].y, h = t[a].x, p = t[a].y;
    d > n != p > n && e < (h - l) * (n - d) / (p - d) + l && (i = !i);
  }
  return i;
}
function KT(s) {
  const t = s.slice();
  return t.sort((e, n) => e.x < n.x ? -1 : e.x > n.x ? 1 : e.y < n.y ? -1 : e.y > n.y ? 1 : 0), zT(t);
}
function zT(s) {
  if (s.length <= 1) return s.slice();
  const t = [];
  for (let n = 0; n < s.length; n++) {
    const i = s[n];
    for (; t.length >= 2; ) {
      const o = t[t.length - 1], a = t[t.length - 2];
      if ((o.x - a.x) * (i.y - a.y) >= (o.y - a.y) * (i.x - a.x)) t.pop();
      else break;
    }
    t.push(i);
  }
  t.pop();
  const e = [];
  for (let n = s.length - 1; n >= 0; n--) {
    const i = s[n];
    for (; e.length >= 2; ) {
      const o = e[e.length - 1], a = e[e.length - 2];
      if ((o.x - a.x) * (i.y - a.y) >= (o.y - a.y) * (i.x - a.x)) e.pop();
      else break;
    }
    e.push(i);
  }
  return e.pop(), t.length === 1 && e.length === 1 && t[0].x === e[0].x && t[0].y === e[0].y ? t : t.concat(e);
}
var YT = qm, n3 = Zm, i3 = jm, r3 = Bm, QT = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const XT = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), xn = (s, t) => {
  const e = A(
    ({ color: n = "currentColor", size: i = 24, strokeWidth: o = 2, absoluteStrokeWidth: a, children: l, ...d }, h) => I(
      "svg",
      {
        ref: h,
        ...QT,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: a ? Number(o) * 24 / Number(i) : o,
        className: `lucide lucide-${XT(s)}`,
        ...d
      },
      [
        ...t.map(([p, f]) => I(p, f)),
        ...(Array.isArray(l) ? l : [l]) || []
      ]
    )
  );
  return e.displayName = `${s}`, e;
}, Y7 = xn("Bookmark", [
  [
    "path",
    { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }
  ]
]), JT = xn("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["polyline", { points: "22 4 12 14.01 9 11.01", key: "6xbx8j" }]
]), eL = xn("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), tL = xn("Maximize", [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
]), sL = xn("Minimize", [
  ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
  ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
  ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
  ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]
]), nL = xn("Pause", [
  ["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }],
  ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }]
]), iL = xn("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]), rL = xn("Volume1", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }]
]), oL = xn("Volume2", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }],
  ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", key: "1kegas" }]
]), aL = xn("VolumeX", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
]);
var cL = '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0007 28.7923C15.0007 29.0152 14.9774 29.096 14.9339 29.1775C14.8903 29.259 14.8263 29.323 14.7449 29.3665C14.6634 29.4101 14.5826 29.4333 14.3597 29.4333H12.575C12.3521 29.4333 12.2713 29.4101 12.1898 29.3665C12.1083 29.323 12.0443 29.259 12.0008 29.1775C11.9572 29.096 11.934 29.0152 11.934 28.7923V12.2993L5.97496 12.3C5.75208 12.3 5.67125 12.2768 5.58977 12.2332C5.50829 12.1896 5.44434 12.1257 5.40077 12.0442C5.35719 11.9627 5.33398 11.8819 5.33398 11.659V9.87429C5.33398 9.65141 5.35719 9.57059 5.40077 9.48911C5.44434 9.40762 5.50829 9.34368 5.58977 9.3001C5.67125 9.25652 5.75208 9.23332 5.97496 9.23332H26.0263C26.2492 9.23332 26.33 9.25652 26.4115 9.3001C26.493 9.34368 26.557 9.40762 26.6005 9.48911C26.6441 9.57059 26.6673 9.65141 26.6673 9.87429V11.659C26.6673 11.8819 26.6441 11.9627 26.6005 12.0442C26.557 12.1257 26.493 12.1896 26.4115 12.2332C26.33 12.2768 26.2492 12.3 26.0263 12.3L20.067 12.2993L20.0673 28.7923C20.0673 29.0152 20.0441 29.096 20.0005 29.1775C19.957 29.259 19.893 29.323 19.8115 29.3665C19.73 29.4101 19.6492 29.4333 19.4263 29.4333H17.6416C17.4187 29.4333 17.3379 29.4101 17.2564 29.3665C17.175 29.323 17.111 29.259 17.0674 29.1775C17.0239 29.096 17.0007 29.0152 17.0007 28.7923L17 22.7663H15L15.0007 28.7923Z" fill="currentColor"/> <path d="M16.0007 7.89998C17.4734 7.89998 18.6673 6.70608 18.6673 5.23332C18.6673 3.76056 17.4734 2.56665 16.0007 2.56665C14.5279 2.56665 13.334 3.76056 13.334 5.23332C13.334 6.70608 14.5279 7.89998 16.0007 7.89998Z" fill="currentColor"/>', lL = '<path d="M7.33332 6.66669C6.96513 6.66669 6.66666 6.96516 6.66666 7.33335V9.33335C6.66666 9.70154 6.96513 10 7.33332 10H20.6667C21.0348 10 21.3333 9.70154 21.3333 9.33335V7.33335C21.3333 6.96516 21.0348 6.66669 20.6667 6.66669H7.33332Z" fill="currentColor"/> <path d="M19.4404 21.8188C19.3882 21.9307 19.3681 22.0549 19.3824 22.1776L19.6028 24.0711C19.6602 24.5641 20.217 24.8238 20.6316 24.5508L22.2238 23.5026C22.327 23.4347 22.4092 23.3394 22.4614 23.2275L27.7186 11.9534C27.8742 11.6197 27.7298 11.2231 27.3962 11.0675L25.5835 10.2222C25.2498 10.0666 24.8532 10.211 24.6976 10.5447L19.4404 21.8188Z" fill="currentColor"/> <path d="M7.33332 21.3334C6.96513 21.3334 6.66666 21.6318 6.66666 22V24C6.66666 24.3682 6.96513 24.6667 7.33332 24.6667H15.3333C15.7015 24.6667 16 24.3682 16 24V22C16 21.6318 15.7015 21.3334 15.3333 21.3334H7.33332Z" fill="currentColor"/> <path d="M6.66666 14.6667C6.66666 14.2985 6.96513 14 7.33332 14H18C18.3682 14 18.6667 14.2985 18.6667 14.6667V16.6667C18.6667 17.0349 18.3682 17.3334 18 17.3334H7.33332C6.96513 17.3334 6.66666 17.0349 6.66666 16.6667V14.6667Z" fill="currentColor"/>', uL = '<path d="M7.33335 6.66667C6.96516 6.66667 6.66669 6.96515 6.66669 7.33334V9.33334C6.66669 9.70153 6.96516 10 7.33335 10H24.6667C25.0349 10 25.3334 9.70153 25.3334 9.33334V7.33334C25.3334 6.96515 25.0349 6.66667 24.6667 6.66667H7.33335Z" fill="currentColor"/> <path d="M6.66669 14.6667C6.66669 14.2985 6.96516 14 7.33335 14H18.6654C19.0336 14 19.3321 14.2985 19.3321 14.6667V16.6667C19.3321 17.0349 19.0336 17.3333 18.6654 17.3333H7.33335C6.96516 17.3333 6.66669 17.0349 6.66669 16.6667V14.6667Z" fill="currentColor"/> <path d="M25.3321 26.0039C25.3321 26.3721 25.0336 26.6706 24.6654 26.6706H23.3321C22.9639 26.6706 22.6654 26.3721 22.6654 26.0039V23.4706C22.6654 23.3969 22.6057 23.3372 22.5321 23.3372H19.9987C19.6305 23.3372 19.3321 23.0388 19.3321 22.6706V21.3372C19.3321 20.9691 19.6305 20.6706 19.9987 20.6706H22.5321C22.6057 20.6706 22.6654 20.6109 22.6654 20.5372V18.0039C22.6654 17.6357 22.9639 17.3372 23.3321 17.3372H24.6654C25.0336 17.3372 25.3321 17.6357 25.3321 18.0039V20.5372C25.3321 20.6109 25.3917 20.6706 25.4654 20.6706H27.9987C28.3669 20.6706 28.6654 20.9691 28.6654 21.3372V22.6706C28.6654 23.0388 28.3669 23.3372 27.9987 23.3372H25.4654C25.3917 23.3372 25.3321 23.3969 25.3321 23.4706V26.0039Z" fill="currentColor"/> <path d="M7.33335 21.3333C6.96516 21.3333 6.66669 21.6318 6.66669 22V24C6.66669 24.3682 6.96516 24.6667 7.33335 24.6667H15.3334C15.7015 24.6667 16 24.3682 16 24V22C16 21.6318 15.7015 21.3333 15.3334 21.3333H7.33335Z" fill="currentColor"/>', dL = '<path d="M20.6667 10.6666C20.6667 13.6122 18.2789 16 15.3333 16C12.3878 16 10 13.6122 10 10.6666C10 7.72113 12.3878 5.33331 15.3333 5.33331C18.2789 5.33331 20.6667 7.72113 20.6667 10.6666Z" fill="currentColor"/> <path d="M10.6667 18C7.72115 18 5.33334 20.3878 5.33334 23.3333V26.5333C5.33334 26.607 5.39303 26.6666 5.46667 26.6666H8.53334C8.60697 26.6666 8.66667 26.607 8.66667 26.5333V24C8.66667 22.5272 9.86058 21.3333 11.3333 21.3333H17.2C17.2736 21.3333 17.3333 21.2736 17.3333 21.2V18.1333C17.3333 18.0597 17.2736 18 17.2 18H10.6667Z" fill="currentColor"/> <path d="M26 26.6666C26.3682 26.6666 26.6667 26.3682 26.6667 26V24.6666C26.6667 24.2985 26.3682 24 26 24H23.4667C23.393 24 23.3333 23.9403 23.3333 23.8666V21.3333C23.3333 20.9651 23.0349 20.6666 22.6667 20.6666H21.3333C20.9651 20.6666 20.6667 20.9651 20.6667 21.3333V23.8666C20.6667 23.9403 20.607 24 20.5333 24H18C17.6318 24 17.3333 24.2985 17.3333 24.6666V26C17.3333 26.3682 17.6318 26.6666 18 26.6666H20.5333C20.607 26.6666 20.6667 26.7263 20.6667 26.8V29.3333C20.6667 29.7015 20.9651 30 21.3333 30H22.6667C23.0349 30 23.3333 29.7015 23.3333 29.3333V26.8C23.3333 26.7263 23.393 26.6666 23.4667 26.6666H26Z" fill="currentColor"/>', hL = '<path d="M17.1336 24.6659C17.5018 24.6659 17.8003 24.3675 17.8003 23.9993V17.9324C17.8003 17.8588 17.86 17.7991 17.9336 17.7991H23.9999C24.3681 17.7991 24.6666 17.5006 24.6666 17.1324V14.8657C24.6666 14.4976 24.3681 14.1991 23.9999 14.1991L17.9336 14.1991C17.86 14.1991 17.8003 14.1394 17.8003 14.0657V7.99928C17.8003 7.63109 17.5018 7.33261 17.1336 7.33261H14.867C14.4988 7.33261 14.2003 7.63109 14.2003 7.99928V14.0657C14.2003 14.1394 14.1406 14.1991 14.067 14.1991L7.99992 14.1991C7.63173 14.1991 7.33325 14.4976 7.33325 14.8658V17.1324C7.33325 17.5006 7.63173 17.7991 7.99992 17.7991L14.067 17.7991C14.1406 17.7991 14.2003 17.8588 14.2003 17.9324V23.9993C14.2003 24.3675 14.4988 24.6659 14.867 24.6659H17.1336Z" fill="currentColor"/>', fL = '<path d="M5.33334 6.00001C5.33334 5.63182 5.63181 5.33334 6 5.33334H26C26.3682 5.33334 26.6667 5.63182 26.6667 6.00001V20.6667C26.6667 21.0349 26.3682 21.3333 26 21.3333H23.7072C23.4956 21.3333 23.2966 21.233 23.171 21.0628L22.1859 19.7295C21.8607 19.2894 22.1749 18.6667 22.7221 18.6667H23.3333C23.7015 18.6667 24 18.3682 24 18V8.66668C24 8.29849 23.7015 8.00001 23.3333 8.00001H8.66667C8.29848 8.00001 8 8.29849 8 8.66668V18C8 18.3682 8.29848 18.6667 8.66667 18.6667H9.29357C9.84072 18.6667 10.1549 19.2894 9.82976 19.7295L8.84467 21.0628C8.71898 21.233 8.52 21.3333 8.30848 21.3333H6C5.63181 21.3333 5.33334 21.0349 5.33334 20.6667V6.00001Z" fill="currentColor"/> <path d="M8.78528 25.6038C8.46013 26.0439 8.77431 26.6667 9.32147 26.6667L22.6785 26.6667C23.2256 26.6667 23.5398 26.0439 23.2146 25.6038L16.5358 16.5653C16.2693 16.2046 15.73 16.2047 15.4635 16.5653L8.78528 25.6038Z" fill="currentColor"/>', pL = '<path d="M23.2629 22.1274C23.5232 22.3878 23.9453 22.3878 24.2057 22.1274L25.4313 20.9018C25.6917 20.6414 25.6917 20.2193 25.4313 19.959L23.2322 17.7598C23.1482 17.6758 23.2077 17.5322 23.3265 17.5322H28.8488C29.217 17.5322 29.5155 17.2337 29.5155 16.8655V15.1322C29.5155 14.764 29.217 14.4655 28.8488 14.4655H23.3261C23.2073 14.4655 23.1478 14.3219 23.2318 14.2379L25.4308 12.0389C25.6912 11.7785 25.6912 11.3564 25.4308 11.0961L24.2052 9.87043C23.9448 9.61008 23.5227 9.61008 23.2624 9.87043L17.6055 15.5273C17.3452 15.7876 17.3452 16.2097 17.6055 16.4701L23.2629 22.1274Z" fill="currentColor"/> <path d="M13.1681 14.3022L8.73714 9.87124C8.47679 9.61089 8.05468 9.61089 7.79433 9.87124L6.56868 11.0969C6.30833 11.3572 6.30833 11.7794 6.56868 12.0397L8.76784 14.2389C8.85184 14.3229 8.79235 14.4665 8.67356 14.4665L3.15118 14.4665C2.78299 14.4665 2.48451 14.765 2.48451 15.1331V16.8665C2.48451 17.2347 2.78299 17.5331 3.15118 17.5331L8.67393 17.5331C8.79272 17.5331 8.8522 17.6768 8.76821 17.7608L6.56918 19.9598C6.30883 20.2201 6.30883 20.6423 6.56917 20.9026L7.79483 22.1283C8.05518 22.3886 8.47729 22.3886 8.73764 22.1283L14.3945 16.4714C14.6548 16.211 14.6548 15.7889 14.3945 15.5286L13.1681 14.3022Z" fill="currentColor"/>', CL = '<path d="M12.0904 14.3331C11.9716 14.3331 11.9122 14.1895 11.9962 14.1055L15.7588 10.3428C16.0192 10.0824 16.0192 9.66032 15.7588 9.39997L14.3446 7.98576C14.0843 7.72541 13.6622 7.72541 13.4018 7.98576L5.85934 15.5282C5.59899 15.7886 5.59899 16.2107 5.85934 16.471L7.27356 17.8853C7.27327 17.885 7.27384 17.8855 7.27356 17.8853L13.4021 24.0138C13.6624 24.2741 14.0845 24.2741 14.3449 24.0138L15.7591 22.5995C16.0194 22.3392 16.0194 21.9171 15.7591 21.6567L11.9964 17.894C11.9124 17.81 11.9719 17.6664 12.0907 17.6664H19.6667C20.0349 17.6664 20.3334 17.3679 20.3334 16.9997V14.9997C20.3334 14.6316 20.0349 14.3331 19.6667 14.3331H12.0904Z" fill="currentColor"/> <path d="M25 7.9831C24.6318 7.9831 24.3334 8.28158 24.3334 8.64977V23.3164C24.3334 23.6846 24.6318 23.9831 25 23.9831H27C27.3682 23.9831 27.6667 23.6846 27.6667 23.3164V8.64977C27.6667 8.28158 27.3682 7.9831 27 7.9831H25Z" fill="currentColor"/>', mL = '<path d="M17.4853 18.9093C17.4853 19.0281 17.6289 19.0875 17.7129 19.0035L22.4185 14.2979C22.6788 14.0376 23.1009 14.0376 23.3613 14.2979L24.7755 15.7122C25.0359 15.9725 25.0359 16.3946 24.7755 16.655L16.2902 25.1403C16.0299 25.4006 15.6078 25.4006 15.3474 25.1403L13.9332 23.726L13.9319 23.7247L6.86189 16.6547C6.60154 16.3944 6.60154 15.9723 6.86189 15.7119L8.2761 14.2977C8.53645 14.0373 8.95856 14.0373 9.21891 14.2977L13.9243 19.0031C14.0083 19.0871 14.1519 19.0276 14.1519 18.9088L14.1519 6.00004C14.1519 5.63185 14.4504 5.33337 14.8186 5.33337L16.8186 5.33337C17.1868 5.33337 17.4853 5.63185 17.4853 6.00004L17.4853 18.9093Z" fill="currentColor"/>', gL = '<path d="M30.577 15.5268L24.9201 9.86998C24.6597 9.60963 24.2376 9.60963 23.9773 9.86998L22.7516 11.0956C22.4913 11.356 22.4913 11.7781 22.7516 12.0384L24.9508 14.2376C25.0348 14.3216 24.9753 14.4652 24.8565 14.4652L19.3341 14.4652C18.9659 14.4652 18.6675 14.7637 18.6675 15.1319V16.8652C18.6675 17.2334 18.9659 17.5319 19.3341 17.5319L24.8569 17.5319C24.9757 17.5319 25.0352 17.6755 24.9512 17.7595L22.7521 19.9585C22.4918 20.2189 22.4918 20.641 22.7521 20.9013L23.9778 22.127C24.2381 22.3873 24.6602 22.3873 24.9206 22.127L30.5774 16.4701C30.8378 16.2098 30.8373 15.7872 30.577 15.5268Z" fill="currentColor"/> <path d="M2.64825 17.6971C2.64808 17.6969 2.64843 17.6973 2.64825 17.6971L1.42309 16.4719C1.16274 16.2116 1.16225 15.789 1.4226 15.5286L7.07945 9.87177C7.3398 9.61142 7.76191 9.61142 8.02226 9.87177L9.24792 11.0974C9.50827 11.3578 9.50826 11.7799 9.24792 12.0402L7.04888 14.2393C6.96489 14.3233 7.02437 14.4669 7.14316 14.4669H12.6659C13.0341 14.4669 13.3326 14.7654 13.3326 15.1335V16.8669C13.3326 17.2351 13.0341 17.5335 12.6659 17.5335H7.14353C7.02474 17.5335 6.96525 17.6772 7.04925 17.7612L9.24841 19.9603C9.50876 20.2207 9.50876 20.6428 9.24841 20.9031L8.02276 22.1288C7.76241 22.3891 7.3403 22.3891 7.07995 22.1288L2.64825 17.6971Z" fill="currentColor"/>', yL = '<path d="M17.2412 10.3428L21.0042 14.1058C21.0882 14.1897 21.0287 14.3334 20.9099 14.3334H13.3333C12.9651 14.3334 12.6667 14.6318 12.6667 15L12.6667 17C12.6667 17.3682 12.9651 17.6667 13.3333 17.6667L20.9091 17.6667C21.0279 17.6667 21.0874 17.8103 21.0034 17.8943L17.2409 21.6567C16.9806 21.9171 16.9806 22.3392 17.2409 22.5995L18.6552 24.0138C18.9155 24.2741 19.3376 24.2741 19.598 24.0138L27.1404 16.4713C27.4008 16.2109 27.401 15.7886 27.1407 15.5282L19.5982 7.98576C19.3379 7.72541 18.9158 7.72541 18.6554 7.98576L17.2412 9.39997C16.9808 9.66032 16.9808 10.0824 17.2412 10.3428Z" fill="currentColor"/> <path d="M8 7.9831C8.36819 7.9831 8.66667 8.28158 8.66667 8.64977V23.3164C8.66667 23.6846 8.36819 23.9831 8 23.9831H6C5.63181 23.9831 5.33334 23.6846 5.33334 23.3164V8.64977C5.33334 8.28158 5.63181 7.9831 6 7.9831H8Z" fill="currentColor"/>', vL = '<path d="M13.0908 14.3334C12.972 14.3334 12.9125 14.1898 12.9965 14.1058L17.7021 9.40022C17.9625 9.13987 17.9625 8.71776 17.7021 8.45741L16.2879 7.04319C16.0275 6.78284 15.6054 6.78284 15.3451 7.04319L6.8598 15.5285C6.59945 15.7888 6.59945 16.2109 6.8598 16.4713L8.27401 17.8855L8.27536 17.8868L15.3453 24.9568C15.6057 25.2172 16.0278 25.2172 16.2881 24.9568L17.7024 23.5426C17.9627 23.2822 17.9627 22.8601 17.7024 22.5998L12.9969 17.8944C12.9129 17.8104 12.9724 17.6668 13.0912 17.6668L26 17.6668C26.3682 17.6668 26.6667 17.3683 26.6667 17.0001V15.0001C26.6667 14.6319 26.3682 14.3334 26 14.3334L13.0908 14.3334Z" fill="currentColor"/>', bL = '<path d="M18.9071 14.3335C19.0259 14.3335 19.0853 14.1898 19.0013 14.1058L14.2958 9.40025C14.0354 9.1399 14.0354 8.71779 14.2958 8.45744L15.71 7.04322C15.9703 6.78287 16.3924 6.78287 16.6528 7.04322L25.1381 15.5285C25.3984 15.7889 25.3984 16.211 25.1381 16.4713L23.7238 17.8855L23.7225 17.8869L16.6525 24.9568C16.3922 25.2172 15.9701 25.2172 15.7097 24.9568L14.2955 23.5426C14.0352 23.2823 14.0352 22.8602 14.2955 22.5998L19.0009 17.8944C19.0849 17.8104 19.0254 17.6668 18.9066 17.6668L5.99784 17.6668C5.62965 17.6668 5.33118 17.3683 5.33118 17.0001V15.0001C5.33118 14.6319 5.62965 14.3335 5.99784 14.3335L18.9071 14.3335Z" fill="currentColor"/>', wL = '<path d="M14.1521 13.0929C14.1521 12.9741 14.0085 12.9147 13.9245 12.9987L9.21891 17.7043C8.95856 17.9646 8.53645 17.9646 8.2761 17.7043L6.86189 16.29C6.60154 16.0297 6.60154 15.6076 6.86189 15.3472L15.3472 6.86195C15.6075 6.6016 16.0296 6.6016 16.29 6.86195L17.7042 8.27616L17.7055 8.27751L24.7755 15.3475C25.0359 15.6078 25.0359 16.0299 24.7755 16.2903L23.3613 17.7045C23.1009 17.9649 22.6788 17.9649 22.4185 17.7045L17.7131 12.9991C17.6291 12.9151 17.4855 12.9746 17.4855 13.0934V26.0022C17.4855 26.3704 17.187 26.6688 16.8188 26.6688H14.8188C14.4506 26.6688 14.1521 26.3704 14.1521 26.0022L14.1521 13.0929Z" fill="currentColor"/>', xL = '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9339 22.7045C15.9749 22.681 16.0252 22.681 16.0662 22.7045L24.3359 27.43C24.7804 27.684 25.3334 27.3631 25.3334 26.8512V4.66667C25.3334 4.29848 25.0349 4 24.6667 4H7.33335C6.96516 4 6.66669 4.29848 6.66669 4.66667V26.8512C6.66669 27.3631 7.21967 27.684 7.66411 27.43L15.9339 22.7045ZM16.0662 19.1724C16.0252 19.149 15.9749 19.149 15.9339 19.1724L9.93284 22.6016C9.84395 22.6524 9.73335 22.5882 9.73335 22.4858V7.2C9.73335 7.12636 9.79305 7.06667 9.86669 7.06667H22.1334C22.207 7.06667 22.2667 7.12636 22.2667 7.2V22.4858C22.2667 22.5882 22.1561 22.6524 22.0672 22.6016L16.0662 19.1724Z" fill="currentColor"/>', SL = '<path d="M16 20.5338C17.6568 20.5338 19 19.1907 19 17.5338C19 15.877 17.6568 14.5338 16 14.5338C14.3431 14.5338 13 15.877 13 17.5338C13 19.1907 14.3431 20.5338 16 20.5338Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8372 6.66666C10.5752 6.66666 10.3375 6.82016 10.2296 7.05899L9.23821 9.25486C9.21665 9.30262 9.1691 9.33332 9.11669 9.33332H5.99998C5.63179 9.33332 5.33331 9.6318 5.33331 9.99999V26C5.33331 26.3682 5.63179 26.6667 5.99998 26.6667H26C26.3682 26.6667 26.6666 26.3682 26.6666 26V9.99999C26.6666 9.6318 26.3682 9.33332 26 9.33332H22.8858C22.8334 9.33332 22.7858 9.30259 22.7643 9.25479L21.7746 7.05935C21.6669 6.82033 21.429 6.66666 21.1668 6.66666H10.8372ZM12.6493 9.33332C12.4146 9.33332 12.1971 9.45676 12.0768 9.6583L10.7179 11.935C10.6938 11.9753 10.6503 12 10.6034 12H8.66665C8.29846 12 7.99998 12.2985 7.99998 12.6667V23.3333C7.99998 23.7015 8.29846 24 8.66665 24H23.3333C23.7015 24 24 23.7015 24 23.3333V12.6667C24 12.2985 23.7015 12 23.3333 12H21.3956C21.3486 12 21.3051 11.9753 21.2811 11.9349L19.9245 9.65869C19.8043 9.45693 19.5867 9.33332 19.3518 9.33332H12.6493Z" fill="currentColor"/>', $L = '<path d="M16.6927 25.3346C16.3245 25.3346 16.026 25.0361 16.026 24.6679L16.026 7.3346C16.026 6.96641 16.3245 6.66794 16.6927 6.66794L18.6927 6.66794C19.0609 6.66794 19.3594 6.96642 19.3594 7.3346L19.3594 24.6679C19.3594 25.0361 19.0609 25.3346 18.6927 25.3346H16.6927Z" fill="currentColor"/> <path d="M24.026 25.3346C23.6578 25.3346 23.3594 25.0361 23.3594 24.6679L23.3594 7.3346C23.3594 6.96641 23.6578 6.66794 24.026 6.66794L26.026 6.66794C26.3942 6.66794 26.6927 6.96642 26.6927 7.3346V24.6679C26.6927 25.0361 26.3942 25.3346 26.026 25.3346H24.026Z" fill="currentColor"/> <path d="M5.48113 23.9407C5.38584 24.2963 5.59689 24.6619 5.95254 24.7572L7.88439 25.2748C8.24003 25.3701 8.60559 25.159 8.70089 24.8034L13.1871 8.06067C13.2824 7.70503 13.0713 7.33947 12.7157 7.24417L10.7838 6.72654C10.4282 6.63124 10.0626 6.8423 9.96733 7.19794L5.48113 23.9407Z" fill="currentColor"/>', EL = '<path fill-rule="evenodd" clip-rule="evenodd" d="M28.016 23.4605L26.8102 24.8975C26.7629 24.9539 26.6788 24.9612 26.6224 24.9139L26.2632 24.6127C26.2631 24.6127 26.2633 24.6127 26.2632 24.6127L8.23326 9.49343C8.2332 9.49349 8.23333 9.49338 8.23326 9.49343L5.37612 7.09787C5.37609 7.09795 5.37615 7.09778 5.37612 7.09787L5.37151 7.09399C5.31524 7.04662 5.30795 6.96262 5.35523 6.90627L6.56109 5.46917C6.79776 5.18712 7.21832 5.15026 7.50045 5.38684L8.98949 6.6355C9.0135 6.65563 9.04383 6.66667 9.07517 6.66667H26C26.3682 6.66667 26.6667 6.96514 26.6667 7.33333V21.3967C26.6667 21.4362 26.6841 21.4736 26.7143 21.4989L27.9337 22.5214C28.2158 22.758 28.2527 23.1784 28.016 23.4605ZM23.781 19.0391C23.8678 19.1119 24 19.0502 24 18.937V10C24 9.63181 23.7015 9.33333 23.3333 9.33333H12.5732C12.4487 9.33333 12.3921 9.48884 12.4875 9.56883L23.781 19.0391Z" fill="currentColor"/> <path d="M18.9485 22C18.9798 22 19.0102 22.011 19.0342 22.0312L21.8962 24.4312C21.9916 24.5112 21.935 24.6667 21.8105 24.6667H18.8957C18.8534 24.6667 18.8136 24.6867 18.7885 24.7208L16.5364 27.7688C16.2699 28.1295 15.7305 28.1295 15.464 27.7688L13.2117 24.7208C13.1866 24.6867 13.1468 24.6667 13.1045 24.6667H6.00001C5.63182 24.6667 5.33335 24.3682 5.33335 24V10.828C5.33335 10.7147 5.46558 10.6531 5.55235 10.7258L7.95235 12.7384C7.98256 12.7637 8.00001 12.8011 8.00001 12.8405V21.3333C8.00001 21.7015 8.29849 22 8.66668 22H18.9485Z" fill="currentColor"/>', TL = '<path d="M17.3333 15C17.3333 14.6318 17.6318 14.3334 18 14.3334H20.6667C21.0349 14.3334 21.3333 14.6318 21.3333 15V16.3334C21.3333 16.7015 21.0349 17 20.6667 17H18C17.6318 17 17.3333 16.7015 17.3333 16.3334V15Z" fill="currentColor"/> <path d="M11.3333 14.3334C10.9652 14.3334 10.6667 14.6318 10.6667 15V16.3334C10.6667 16.7015 10.9652 17 11.3333 17H14C14.3682 17 14.6667 16.7015 14.6667 16.3334V15C14.6667 14.6318 14.3682 14.3334 14 14.3334H11.3333Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33334 7.33335C5.33334 6.96516 5.63182 6.66669 6.00001 6.66669H26C26.3682 6.66669 26.6667 6.96516 26.6667 7.33335V24C26.6667 24.3682 26.3682 24.6667 26 24.6667H18.8676C18.8253 24.6667 18.7855 24.6868 18.7603 24.7208L16.5364 27.7307C16.2699 28.0914 15.7305 28.0914 15.464 27.7308L13.2399 24.7208C13.2147 24.6868 13.1749 24.6667 13.1326 24.6667H6.00001C5.63182 24.6667 5.33334 24.3682 5.33334 24V7.33335ZM8.66668 9.33335C8.29849 9.33335 8.00001 9.63183 8.00001 10V21.3334C8.00001 21.7015 8.29849 22 8.66668 22H23.3333C23.7015 22 24 21.7015 24 21.3334V10C24 9.63183 23.7015 9.33335 23.3333 9.33335H8.66668Z" fill="currentColor"/>', LL = '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.9266 7.57992C25.015 7.60672 25.0886 7.64746 25.2462 7.80506L26.956 9.51488C27.1136 9.67248 27.1543 9.74604 27.1811 9.83447C27.2079 9.9229 27.2079 10.0133 27.1811 10.1018C27.1543 10.1902 27.1136 10.2638 26.956 10.4214L13.1822 24.1951C13.0246 24.3527 12.951 24.3935 12.8626 24.4203C12.797 24.4402 12.7304 24.4453 12.6642 24.4357L12.7319 24.4203C12.6435 24.4471 12.553 24.4471 12.4646 24.4203C12.3762 24.3935 12.3026 24.3527 12.145 24.1951L5.04407 17.0942C4.88647 16.9366 4.84573 16.863 4.81893 16.7746C4.79213 16.6862 4.79213 16.5957 4.81893 16.5073C4.84573 16.4189 4.88647 16.3453 5.04407 16.1877L6.7539 14.4779C6.9115 14.3203 6.98506 14.2796 7.07349 14.2528C7.16191 14.226 7.25235 14.226 7.34078 14.2528C7.42921 14.2796 7.50277 14.3203 7.66037 14.4779L12.6628 19.4808L24.3397 7.80506C24.4973 7.64746 24.5709 7.60672 24.6593 7.57992C24.7477 7.55311 24.8382 7.55311 24.9266 7.57992Z" fill="currentColor"/>', PL = '<path d="M15.905 17.4809C15.9571 17.533 16.0415 17.533 16.0936 17.4809L22.4111 11.1635C22.6714 10.9031 23.0935 10.9031 23.3539 11.1635L24.9567 12.7662C25.217 13.0266 25.217 13.4487 24.9567 13.709L18.1028 20.5629C18.0937 20.5732 18.0842 20.5833 18.0744 20.5931L16.4716 22.1959C16.2113 22.4562 15.7892 22.4562 15.5288 22.1959L7.04353 13.7106C6.78318 13.4503 6.78318 13.0281 7.04353 12.7678L8.6463 11.165C8.90665 10.9047 9.32876 10.9047 9.58911 11.165L15.905 17.4809Z" fill="currentColor"/>', ML = '<path d="M14.8206 15.9049C14.7685 15.9569 14.7685 16.0413 14.8206 16.0934L21.1381 22.4109C21.3984 22.6712 21.3984 23.0934 21.1381 23.3537L19.5353 24.9565C19.275 25.2168 18.8529 25.2168 18.5925 24.9565L11.7386 18.1026C11.7283 18.0935 11.7183 18.084 11.7084 18.0742L10.1057 16.4714C9.84531 16.2111 9.84531 15.789 10.1057 15.5286L18.5909 7.04335C18.8513 6.783 19.2734 6.783 19.5338 7.04335L21.1365 8.64612C21.3969 8.90647 21.3969 9.32858 21.1365 9.58893L14.8206 15.9049Z" fill="currentColor"/>', kL = '<path d="M17.947 16.095C17.999 16.043 17.999 15.9585 17.947 15.9065L11.6295 9.58899C11.3691 9.32864 11.3691 8.90653 11.6295 8.64618L13.2323 7.04341C13.4926 6.78306 13.9147 6.78306 14.1751 7.04341L21.0289 13.8973C21.0392 13.9064 21.0493 13.9158 21.0591 13.9257L22.6619 15.5285C22.9223 15.7888 22.9223 16.2109 22.6619 16.4713L14.1766 24.9565C13.9163 25.2169 13.4942 25.2169 13.2338 24.9565L11.631 23.3538C11.3707 23.0934 11.3707 22.6713 11.631 22.411L17.947 16.095Z" fill="currentColor"/>', IL = '<path d="M15.905 14.8206C15.9571 14.7685 16.0415 14.7685 16.0936 14.8206L22.4111 21.1381C22.6714 21.3984 23.0935 21.3984 23.3539 21.1381L24.9567 19.5353C25.217 19.2749 25.217 18.8528 24.9567 18.5925L18.1028 11.7386C18.0937 11.7283 18.0842 11.7182 18.0744 11.7084L16.4716 10.1056C16.2113 9.84528 15.7892 9.84528 15.5288 10.1056L7.04353 18.5909C6.78318 18.8513 6.78318 19.2734 7.04353 19.5337L8.6463 21.1365C8.90665 21.3968 9.32876 21.3968 9.58911 21.1365L15.905 14.8206Z" fill="currentColor"/>', VL = '<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7C5.63181 7 5.33333 7.29848 5.33333 7.66667V14.8667C5.33333 14.9403 5.39361 14.9999 5.46724 15.0009C10.8844 15.0719 15.2614 19.449 15.3325 24.8661C15.3334 24.9397 15.393 25 15.4667 25H26C26.3682 25 26.6667 24.7015 26.6667 24.3333V7.66667C26.6667 7.29848 26.3682 7 26 7H6ZM17.0119 22.2294C17.0263 22.29 17.0802 22.3333 17.1425 22.3333H23.3333C23.7015 22.3333 24 22.0349 24 21.6667V10.3333C24 9.96514 23.7015 9.66667 23.3333 9.66667H8.66667C8.29848 9.66667 8 9.96514 8 10.3333V13.1909C8 13.2531 8.04332 13.3071 8.10392 13.3214C12.5063 14.3618 15.9715 17.827 17.0119 22.2294Z" fill="currentColor"/> <path d="M13.2 25C13.2736 25 13.3334 24.9398 13.3322 24.8661C13.2615 20.5544 9.77889 17.0718 5.46718 17.0011C5.39356 16.9999 5.33333 17.0597 5.33333 17.1333V18.8667C5.33333 18.9403 5.39348 18.9999 5.4671 19.0015C8.67465 19.0716 11.2617 21.6587 11.3319 24.8662C11.3335 24.9399 11.393 25 11.4667 25H13.2Z" fill="currentColor"/> <path d="M5.33333 21.1333C5.33333 21.0597 5.39332 20.9998 5.46692 21.0022C7.57033 21.0712 9.26217 22.763 9.33114 24.8664C9.33356 24.94 9.27364 25 9.2 25H6C5.63181 25 5.33333 24.7015 5.33333 24.3333V21.1333Z" fill="currentColor"/>', AL = '<path d="M20.144 3.294C19.7884 3.38929 19.5773 3.75485 19.6726 4.1105L20.1902 6.04235C20.2855 6.39799 20.6511 6.60905 21.0067 6.51375L22.9386 5.99611C23.2942 5.90082 23.5053 5.53526 23.41 5.17962L22.8923 3.24777C22.797 2.89212 22.4315 2.68107 22.0758 2.77636L20.144 3.294Z" fill="currentColor"/> <path d="M13.4909 5.76687C13.3956 5.41123 13.6067 5.04567 13.9623 4.95037L15.8942 4.43274C16.2498 4.33744 16.6154 4.5485 16.7107 4.90414L17.2283 6.83599C17.3236 7.19164 17.1125 7.55719 16.7569 7.65249L14.8251 8.17013C14.4694 8.26542 14.1039 8.05437 14.0086 7.69872L13.4909 5.76687Z" fill="currentColor"/> <path d="M7.78065 6.60675C7.425 6.70204 7.21395 7.0676 7.30924 7.42324L7.82688 9.3551C7.92218 9.71074 8.28773 9.9218 8.64338 9.8265L10.5752 9.30886C10.9309 9.21357 11.1419 8.84801 11.0466 8.49237L10.529 6.56051C10.4337 6.20487 10.0681 5.99382 9.7125 6.08911L7.78065 6.60675Z" fill="currentColor"/> <path d="M7.33331 12C7.7015 12 7.99998 12.2985 7.99998 12.6667V23.3333C7.99998 23.7015 8.29846 24 8.66665 24H23.3333C23.7015 24 24 23.7015 24 23.3333V12.6667C24 12.2985 24.2985 12 24.6666 12H26C26.3682 12 26.6666 12.2985 26.6666 12.6667V26C26.6666 26.3682 26.3682 26.6667 26 26.6667H5.99998C5.63179 26.6667 5.33331 26.3682 5.33331 26V12.6667C5.33331 12.2985 5.63179 12 5.99998 12H7.33331Z" fill="currentColor"/> <path d="M11.7995 12C11.4313 12 11.1328 12.2985 11.1328 12.6667V14.6667C11.1328 15.0349 11.4313 15.3333 11.7995 15.3333H13.7995C14.1676 15.3333 14.4661 15.0349 14.4661 14.6667V12.6667C14.4661 12.2985 14.1676 12 13.7995 12H11.7995Z" fill="currentColor"/> <path d="M17.5325 12.6667C17.5325 12.2985 17.831 12 18.1992 12H20.1992C20.5674 12 20.8659 12.2985 20.8659 12.6667V14.6667C20.8659 15.0349 20.5674 15.3333 20.1992 15.3333H18.1992C17.831 15.3333 17.5325 15.0349 17.5325 14.6667V12.6667Z" fill="currentColor"/>', NL = '<path d="M8 28.0003C8 27.6321 8.29848 27.3336 8.66667 27.3336H23.3333C23.7015 27.3336 24 27.6321 24 28.0003V29.3336C24 29.7018 23.7015 30.0003 23.3333 30.0003H8.66667C8.29848 30.0003 8 29.7018 8 29.3336V28.0003Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66602 6.66699C4.29783 6.66699 3.99935 6.96547 3.99935 7.33366V24.667C3.99935 25.0352 4.29783 25.3337 4.66602 25.3337H27.3327C27.7009 25.3337 27.9994 25.0352 27.9994 24.667V7.33366C27.9994 6.96547 27.7009 6.66699 27.3327 6.66699H4.66602ZM8.66659 21.3333C8.2984 21.3333 7.99992 21.0349 7.99992 20.6667V11.3333C7.99992 10.9651 8.2984 10.6667 8.66659 10.6667H13.9999C14.3681 10.6667 14.6666 10.9651 14.6666 11.3333V12.6667C14.6666 13.0349 14.3681 13.3333 13.9999 13.3333H10.7999C10.7263 13.3333 10.6666 13.393 10.6666 13.4667V18.5333C10.6666 18.607 10.7263 18.6667 10.7999 18.6667H13.9999C14.3681 18.6667 14.6666 18.9651 14.6666 19.3333V20.6667C14.6666 21.0349 14.3681 21.3333 13.9999 21.3333H8.66659ZM17.9999 21.3333C17.6317 21.3333 17.3333 21.0349 17.3333 20.6667V11.3333C17.3333 10.9651 17.6317 10.6667 17.9999 10.6667H23.3333C23.7014 10.6667 23.9999 10.9651 23.9999 11.3333V12.6667C23.9999 13.0349 23.7014 13.3333 23.3333 13.3333H20.1333C20.0596 13.3333 19.9999 13.393 19.9999 13.4667V18.5333C19.9999 18.607 20.0596 18.6667 20.1333 18.6667H23.3333C23.7014 18.6667 23.9999 18.9651 23.9999 19.3333V20.6667C23.9999 21.0349 23.7014 21.3333 23.3333 21.3333H17.9999Z" fill="currentColor"/>', RL = '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.6661 6.66699C4.29791 6.66699 3.99943 6.96547 3.99943 7.33366V24.667C3.99943 25.0352 4.29791 25.3337 4.6661 25.3337H27.3328C27.701 25.3337 27.9994 25.0352 27.9994 24.667V7.33366C27.9994 6.96547 27.701 6.66699 27.3328 6.66699H4.6661ZM8.66667 21.3333C8.29848 21.3333 8 21.0349 8 20.6667V11.3333C8 10.9651 8.29848 10.6667 8.66667 10.6667H14C14.3682 10.6667 14.6667 10.9651 14.6667 11.3333V12.6667C14.6667 13.0349 14.3682 13.3333 14 13.3333H10.8C10.7264 13.3333 10.6667 13.393 10.6667 13.4667V18.5333C10.6667 18.607 10.7264 18.6667 10.8 18.6667H14C14.3682 18.6667 14.6667 18.9651 14.6667 19.3333V20.6667C14.6667 21.0349 14.3682 21.3333 14 21.3333H8.66667ZM18 21.3333C17.6318 21.3333 17.3333 21.0349 17.3333 20.6667V11.3333C17.3333 10.9651 17.6318 10.6667 18 10.6667H23.3333C23.7015 10.6667 24 10.9651 24 11.3333V12.6667C24 13.0349 23.7015 13.3333 23.3333 13.3333H20.1333C20.0597 13.3333 20 13.393 20 13.4667V18.5333C20 18.607 20.0597 18.6667 20.1333 18.6667H23.3333C23.7015 18.6667 24 18.9651 24 19.3333V20.6667C24 21.0349 23.7015 21.3333 23.3333 21.3333H18Z" fill="currentColor"/>', HL = '<path d="M17.6667 15C17.6667 14.6318 17.9651 14.3333 18.3333 14.3333H20.3333C20.7015 14.3333 21 14.6318 21 15V17C21 17.3682 20.7015 17.6666 20.3333 17.6666H18.3333C17.9651 17.6666 17.6667 17.3682 17.6667 17V15Z" fill="currentColor"/> <path d="M11.6667 14.3333C11.2985 14.3333 11 14.6318 11 15V17C11 17.3682 11.2985 17.6666 11.6667 17.6666H13.6667C14.0349 17.6666 14.3333 17.3682 14.3333 17V15C14.3333 14.6318 14.0349 14.3333 13.6667 14.3333H11.6667Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.125 5.33331C8.53312 5.33331 4 9.86643 4 15.4583C4 21.0502 8.53312 25.5833 14.125 25.5833C16.5135 25.5833 18.6402 26.8064 20.6365 28.1176C23.0275 29.688 23.4552 27.5864 23.8755 25.5208C24.103 24.4027 24.3284 23.2951 24.8619 22.7863C26.7953 20.9423 28 18.341 28 15.4583C28 9.86643 23.4669 5.33331 17.875 5.33331H14.125ZM17.875 7.99998H14.125C10.0059 7.99998 6.66667 11.3392 6.66667 15.4583C6.66667 19.5774 10.0059 22.9166 14.125 22.9166C16.877 22.9166 19.2468 24.1025 21.1133 25.2567C21.1541 25.2819 21.2072 25.2588 21.2169 25.2119L21.2588 25.0064C21.3246 24.6827 21.4008 24.3082 21.4843 23.9558C21.5867 23.5238 21.7252 23.0127 21.9287 22.5174C22.1248 22.04 22.4512 21.4005 23.0214 20.8566C24.4491 19.4949 25.3333 17.5821 25.3333 15.4583C25.3333 11.3392 21.9941 7.99998 17.875 7.99998Z" fill="currentColor"/>', OL = '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.33334 6.00001C5.33334 5.63182 5.63182 5.33334 6.00001 5.33334H26C26.3682 5.33334 26.6667 5.63182 26.6667 6.00001V20.6667C26.6667 21.0349 26.3682 21.3333 26 21.3333H6.00001C5.63182 21.3333 5.33334 21.0349 5.33334 20.6667V6.00001ZM8.40008 9.06634C8.40008 8.69815 8.69855 8.39967 9.06674 8.39967H22.9339C23.3021 8.39967 23.6006 8.69815 23.6006 9.06634V17.6002C23.6006 17.9684 23.3021 18.2669 22.9339 18.2669H9.06674C8.69855 18.2669 8.40008 17.9684 8.40008 17.6002V9.06634Z" fill="currentColor"/> <path d="M6.00001 23.9999C5.63182 23.9999 5.33334 24.2984 5.33334 24.6666V25.9999C5.33334 26.3681 5.63182 26.6666 6.00001 26.6666H26C26.3682 26.6666 26.6667 26.3681 26.6667 25.9999V24.6666C26.6667 24.2984 26.3682 23.9999 26 23.9999H6.00001Z" fill="currentColor"/>', DL = '<path d="M4 4.66667C4 4.29848 4.29848 4 4.66667 4H18.5714C18.9396 4 19.2381 4.29848 19.2381 4.66667V9.19992C19.2381 9.27356 19.1784 9.33325 19.1048 9.33325H16.7067C16.633 9.33325 16.5733 9.27356 16.5733 9.19992V7.33333C16.5733 6.96514 16.2749 6.66667 15.9067 6.66667H7.33333C6.96514 6.66667 6.66667 6.96514 6.66667 7.33333V14C6.66667 14.3682 6.96514 14.6667 7.33333 14.6667H13.2C13.2736 14.6667 13.3333 14.7264 13.3333 14.8V17.2C13.3333 17.2736 13.2736 17.3333 13.2 17.3333H4.66667C4.29848 17.3333 4 17.0349 4 16.6667V4.66667Z" fill="currentColor"/> <path d="M13.2 22.6666C13.2736 22.6666 13.3333 22.6069 13.3333 22.5333V20.1333C13.3333 20.0596 13.2736 19.9999 13.2 19.9999H4.66667C4.29848 19.9999 4 20.2984 4 20.6666V21.9999C4 22.3681 4.29848 22.6666 4.66667 22.6666H13.2Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 12.6666C16 12.2984 16.2985 11.9999 16.6667 11.9999H27.3333C27.7015 11.9999 28 12.2984 28 12.6666V27.3333C28 27.7014 27.7015 27.9999 27.3333 27.9999H16.6667C16.2985 27.9999 16 27.7014 16 27.3333V12.6666ZM18.6667 15.3333C18.6667 14.9651 18.9651 14.6666 19.3333 14.6666H24.6667C25.0349 14.6666 25.3333 14.9651 25.3333 15.3333V24.6666C25.3333 25.0348 25.0349 25.3333 24.6667 25.3333H19.3333C18.9651 25.3333 18.6667 25.0348 18.6667 24.6666V15.3333Z" fill="currentColor"/>', _L = '<path d="M14.2225 13.7867C14.3065 13.8706 14.4501 13.8112 14.4501 13.6924V5.99955C14.4501 5.63136 14.7486 5.33289 15.1167 5.33289H16.8501C17.2183 5.33289 17.5167 5.63136 17.5167 5.99955V13.6916C17.5167 13.8104 17.6604 13.8699 17.7444 13.7859L19.9433 11.5869C20.2037 11.3266 20.6258 11.3266 20.8861 11.5869L22.1118 12.8126C22.3722 13.0729 22.3722 13.4951 22.1118 13.7554L16.4549 19.4123C16.1946 19.6726 15.772 19.6731 15.5116 19.4128L9.85479 13.7559C9.59444 13.4956 9.59444 13.0734 9.85479 12.8131L11.0804 11.5874C11.3408 11.3271 11.7629 11.3271 12.0233 11.5874L14.2225 13.7867Z" fill="currentColor"/> <path d="M5.99998 20.267C5.63179 20.267 5.33331 20.5654 5.33331 20.9336V25.9997C5.33331 26.3678 5.63179 26.6663 5.99998 26.6663H26C26.3682 26.6663 26.6666 26.3678 26.6666 25.9997V20.9336C26.6666 20.5654 26.3682 20.267 26 20.267H24.2666C23.8985 20.267 23.6 20.5654 23.6 20.9336V22.9333C23.6 23.3014 23.3015 23.5999 22.9333 23.5999H9.06638C8.69819 23.5999 8.39972 23.3014 8.39972 22.9333V20.9336C8.39972 20.5654 8.10124 20.267 7.73305 20.267H5.99998Z" fill="currentColor"/>', FL = '<path d="M24 19.3328V9.46667C24 9.39303 23.9403 9.33334 23.8667 9.33334L11.3333 9.33334C10.9652 9.33334 10.6667 9.03486 10.6667 8.66667V7.33334C10.6667 6.96515 10.9652 6.66667 11.3333 6.66667H26C26.3682 6.66667 26.6667 6.96515 26.6667 7.33334V19.3328C26.6667 19.701 26.3682 19.9994 26 19.9994H24.6667C24.2985 19.9994 24 19.701 24 19.3328Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00001 12C5.63182 12 5.33334 12.2985 5.33334 12.6667V24.6667C5.33334 25.0349 5.63182 25.3333 6.00001 25.3333H20.6672C21.0354 25.3333 21.3338 25.0349 21.3338 24.6667V12.6667C21.3338 12.2985 21.0354 12 20.6672 12H6.00001ZM8.66668 14.6667C8.29849 14.6667 8.00001 14.9651 8.00001 15.3333V22C8.00001 22.3682 8.29849 22.6667 8.66668 22.6667H18C18.3682 22.6667 18.6667 22.3682 18.6667 22V15.3333C18.6667 14.9651 18.3682 14.6667 18 14.6667H8.66668Z" fill="currentColor"/>', qL = '<path d="M16 20C18.2091 20 20 18.2092 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2092 13.7909 20 16 20Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M28 16.0058C28 18.671 23.5 25.3334 16 25.3334C8.5 25.3334 4 18.6762 4 16.0058C4 13.3354 8.50447 6.66669 16 6.66669C23.4955 6.66669 28 13.3406 28 16.0058ZM25.3318 15.9934C25.3328 16.0017 25.3328 16.0099 25.3318 16.0182C25.3274 16.0571 25.3108 16.1728 25.2485 16.3708C25.1691 16.6229 25.0352 16.9462 24.8327 17.3216C24.4264 18.0749 23.7969 18.9398 22.9567 19.754C21.2791 21.3798 18.9148 22.6667 16 22.6667C13.0845 22.6667 10.7202 21.3805 9.04298 19.7557C8.20295 18.9419 7.57362 18.0773 7.16745 17.3241C6.96499 16.9486 6.83114 16.6252 6.75172 16.3729C6.67942 16.1431 6.66856 16.0243 6.66695 16.0066L6.66695 16.005C6.66859 15.9871 6.67951 15.8682 6.75188 15.6383C6.83145 15.3854 6.96554 15.0614 7.16831 14.6853C7.57507 13.9306 8.20514 13.0644 9.04577 12.249C10.7245 10.6208 13.0886 9.33335 16 9.33335C18.9108 9.33335 21.2748 10.6215 22.9539 12.2507C23.7947 13.0664 24.4249 13.933 24.8318 14.6877C25.0346 15.0639 25.1688 15.3878 25.2483 15.6404C25.3107 15.8386 25.3274 15.9545 25.3318 15.9934Z" fill="currentColor"/>', ZL = '<path d="M15.8747 8.11857C16.3148 7.79342 16.9375 8.10759 16.9375 8.65476V14.2575C16.9375 14.3669 17.0621 14.4297 17.1501 14.3647L25.6038 8.11857C26.0439 7.79342 26.6667 8.10759 26.6667 8.65476V23.3451C26.6667 23.8923 26.0439 24.2064 25.6038 23.8813L17.1501 17.6346C17.0621 17.5695 16.9375 17.6324 16.9375 17.7418L16.9375 23.3451C16.9375 23.8923 16.3147 24.2064 15.8747 23.8813L5.93387 16.5358C5.57322 16.2693 5.57323 15.7299 5.93389 15.4634L15.8747 8.11857Z" fill="currentColor"/>', jL = '<path d="M16.1253 8.11866C15.6852 7.7935 15.0625 8.10768 15.0625 8.65484V14.2576C15.0625 14.367 14.9379 14.4298 14.8499 14.3648L6.39615 8.11866C5.95607 7.7935 5.33331 8.10768 5.33331 8.65484V23.3452C5.33331 23.8923 5.9561 24.2065 6.39617 23.8813L14.8499 17.6347C14.9379 17.5696 15.0625 17.6325 15.0625 17.7419L15.0625 23.3452C15.0625 23.8923 15.6853 24.2065 16.1253 23.8813L26.0661 16.5358C26.4268 16.2694 26.4268 15.73 26.0661 15.4635L16.1253 8.11866Z" fill="currentColor"/>', BL = '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.39995 18.8C8.39995 18.7264 8.45964 18.6667 8.53328 18.6667H17.2C17.2736 18.6667 17.3333 18.7264 17.3333 18.8V20.6667C17.3333 21.0349 17.6318 21.3333 18 21.3333H26C26.3682 21.3333 26.6666 21.0349 26.6666 20.6667V8.66668C26.6666 8.29849 26.3682 8.00001 26 8.00001H17.4666C17.393 8.00001 17.3333 7.94031 17.3333 7.86668V6.00001C17.3333 5.63182 17.0348 5.33334 16.6666 5.33334H5.99997C5.63178 5.33334 5.33328 5.63182 5.33328 6.00001V26C5.33328 26.3682 5.63176 26.6667 5.99995 26.6667H7.73328C8.10147 26.6667 8.39995 26.3682 8.39995 26V18.8ZM8.53328 16C8.45964 16 8.39995 15.9403 8.39995 15.8667V8.13334C8.39995 8.05971 8.45964 8.00001 8.53328 8.00001H14.5333C14.6069 8.00001 14.6666 8.05971 14.6666 8.13334V10.5333C14.6666 10.607 14.7263 10.6667 14.8 10.6667H23.8666C23.9403 10.6667 24 10.7264 24 10.8V18.5333C24 18.607 23.9403 18.6667 23.8666 18.6667H20.1333C20.0597 18.6667 20 18.607 20 18.5333V16.1333C20 16.0597 19.9403 16 19.8666 16H8.53328Z" fill="currentColor"/>', GL = '<path d="M19.913 6.45826V9.56817C19.913 9.68695 20.0566 9.74644 20.1406 9.66245L24.0458 5.75727C24.3061 5.49692 24.7283 5.49692 24.9886 5.75727L26.2143 6.98293C26.4746 7.24328 26.4746 7.66539 26.2143 7.92573L22.3093 11.8306C22.2253 11.9146 22.2848 12.0583 22.4036 12.0583H25.5137C25.8819 12.0583 26.1804 12.3567 26.1804 12.7249V14.4583C26.1804 14.8265 25.8819 15.1249 25.5137 15.1249L19.2468 15.1249C19.2466 15.1249 19.2469 15.1249 19.2468 15.1249H17.5137C17.1455 15.1249 16.8463 14.8265 16.8463 14.4583V6.45826C16.8463 6.09007 17.1448 5.7916 17.513 5.7916H19.2463C19.6145 5.7916 19.913 6.09007 19.913 6.45826Z" fill="currentColor"/> <path d="M9.73054 19.9416C9.84933 19.9416 9.90882 20.0852 9.82482 20.1692L5.91991 24.0741C5.65956 24.3345 5.65956 24.7566 5.91991 25.0169L7.14556 26.2426C7.40591 26.5029 7.82802 26.5029 8.08837 26.2426L11.9935 22.3374C12.0775 22.2534 12.2212 22.3129 12.2212 22.4317V25.5416C12.2212 25.9098 12.5196 26.2083 12.8878 26.2083H14.6212C14.9893 26.2083 15.2878 25.9098 15.2878 25.5416L15.2878 17.5416C15.2878 17.1734 14.9893 16.8749 14.6212 16.8749H6.62046C6.25227 16.8749 5.9538 17.1734 5.9538 17.5416V19.2749C5.9538 19.6431 6.25227 19.9416 6.62046 19.9416H9.73054Z" fill="currentColor"/>', UL = '<path d="M17.3183 12.4856L21.2231 8.58073C21.3071 8.49674 21.2476 8.35312 21.1288 8.35312H18.0189C17.6507 8.35312 17.3522 8.05464 17.3522 7.68645V5.95312C17.3522 5.58493 17.6507 5.28645 18.0189 5.28645H26.0189C26.387 5.28645 26.6862 5.58493 26.6862 5.95312V13.9531C26.6862 14.3213 26.3877 14.6198 26.0196 14.6198H24.2862C23.918 14.6198 23.6196 14.3213 23.6196 13.9531V10.8431C23.6196 10.7243 23.4759 10.6648 23.3919 10.7488L19.4867 14.6541C19.2264 14.9144 18.8043 14.9144 18.5439 14.6541L17.3183 13.4284C17.0579 13.1681 17.0579 12.7459 17.3183 12.4856Z" fill="currentColor"/> <path d="M6.1153 26.7135H14.1153C14.4835 26.7135 14.782 26.4151 14.782 26.0469V24.3135C14.782 23.9453 14.4835 23.6469 14.1153 23.6469H11.0053C10.8865 23.6469 10.827 23.5033 10.911 23.4193L14.8159 19.5144C15.0763 19.254 15.0763 18.8319 14.8159 18.5716L13.5903 17.3459C13.3299 17.0856 12.9078 17.0856 12.6474 17.3459L8.74222 21.2512C8.65822 21.3351 8.5146 21.2757 8.5146 21.1569L8.51461 18.0469C8.51461 17.6787 8.21613 17.3802 7.84794 17.3802H6.11461C5.74642 17.3802 5.44794 17.6787 5.44794 18.0469V26.0469C5.44794 26.4151 5.74711 26.7135 6.1153 26.7135Z" fill="currentColor"/>', WL = '<path d="M19.3334 13.3333C18.9652 13.3333 18.6667 13.0349 18.6667 12.6667L18.6667 7.33333C18.6667 6.96514 18.9652 6.66666 19.3334 6.66666H21.3334C21.7015 6.66666 22 6.96514 22 7.33333V9.86666C22 9.9403 22.0597 10 22.1334 10L24.6667 10C25.0349 10 25.3334 10.2985 25.3334 10.6667V12.6667C25.3334 13.0349 25.0349 13.3333 24.6667 13.3333L19.3334 13.3333Z" fill="currentColor"/> <path d="M13.3334 19.3333C13.3334 18.9651 13.0349 18.6667 12.6667 18.6667H7.33335C6.96516 18.6667 6.66669 18.9651 6.66669 19.3333V21.3333C6.66669 21.7015 6.96516 22 7.33335 22H9.86669C9.94032 22 10 22.0597 10 22.1333L10 24.6667C10 25.0349 10.2985 25.3333 10.6667 25.3333H12.6667C13.0349 25.3333 13.3334 25.0349 13.3334 24.6667L13.3334 19.3333Z" fill="currentColor"/> <path d="M18.6667 24.6667C18.6667 25.0349 18.9652 25.3333 19.3334 25.3333H21.3334C21.7015 25.3333 22 25.0349 22 24.6667V22.1333C22 22.0597 22.0597 22 22.1334 22H24.6667C25.0349 22 25.3334 21.7015 25.3334 21.3333V19.3333C25.3334 18.9651 25.0349 18.6667 24.6667 18.6667L19.3334 18.6667C18.9652 18.6667 18.6667 18.9651 18.6667 19.3333L18.6667 24.6667Z" fill="currentColor"/> <path d="M10.6667 13.3333H12.6667C13.0349 13.3333 13.3334 13.0349 13.3334 12.6667L13.3334 10.6667V7.33333C13.3334 6.96514 13.0349 6.66666 12.6667 6.66666H10.6667C10.2985 6.66666 10 6.96514 10 7.33333L10 9.86666C10 9.9403 9.94033 10 9.86669 10L7.33335 10C6.96516 10 6.66669 10.2985 6.66669 10.6667V12.6667C6.66669 13.0349 6.96516 13.3333 7.33335 13.3333L10.6667 13.3333Z" fill="currentColor"/>', KL = '<path d="M25.3299 7.26517C25.2958 6.929 25.0119 6.66666 24.6667 6.66666H19.3334C18.9652 6.66666 18.6667 6.96514 18.6667 7.33333V9.33333C18.6667 9.70152 18.9652 10 19.3334 10L21.8667 10C21.9403 10 22 10.0597 22 10.1333V12.6667C22 13.0349 22.2985 13.3333 22.6667 13.3333H24.6667C25.0349 13.3333 25.3334 13.0349 25.3334 12.6667V7.33333C25.3334 7.31032 25.3322 7.28758 25.3299 7.26517Z" fill="currentColor"/> <path d="M22 21.8667C22 21.9403 21.9403 22 21.8667 22L19.3334 22C18.9652 22 18.6667 22.2985 18.6667 22.6667V24.6667C18.6667 25.0349 18.9652 25.3333 19.3334 25.3333L24.6667 25.3333C25.0349 25.3333 25.3334 25.0349 25.3334 24.6667V19.3333C25.3334 18.9651 25.0349 18.6667 24.6667 18.6667H22.6667C22.2985 18.6667 22 18.9651 22 19.3333V21.8667Z" fill="currentColor"/> <path d="M12.6667 22H10.1334C10.0597 22 10 21.9403 10 21.8667V19.3333C10 18.9651 9.70154 18.6667 9.33335 18.6667H7.33335C6.96516 18.6667 6.66669 18.9651 6.66669 19.3333V24.6667C6.66669 25.0349 6.96516 25.3333 7.33335 25.3333H12.6667C13.0349 25.3333 13.3334 25.0349 13.3334 24.6667V22.6667C13.3334 22.2985 13.0349 22 12.6667 22Z" fill="currentColor"/> <path d="M10 12.6667V10.1333C10 10.0597 10.0597 10 10.1334 10L12.6667 10C13.0349 10 13.3334 9.70152 13.3334 9.33333V7.33333C13.3334 6.96514 13.0349 6.66666 12.6667 6.66666H7.33335C6.96516 6.66666 6.66669 6.96514 6.66669 7.33333V12.6667C6.66669 13.0349 6.96516 13.3333 7.33335 13.3333H9.33335C9.70154 13.3333 10 13.0349 10 12.6667Z" fill="currentColor"/>', zL = '<path fill-rule="evenodd" clip-rule="evenodd" d="M25.3554 17.3032L26.037 16.6363C28.6231 14.0503 28.6231 9.85896 26.037 7.27287C23.4528 4.68864 19.2596 4.68864 16.6754 7.27287L16.0953 7.85295C16.0433 7.90497 15.959 7.90503 15.9069 7.85308L15.3251 7.27287C12.739 4.68679 8.5477 4.68679 5.96161 7.27287C3.37738 9.85711 3.37738 14.0503 5.96161 16.6345L15.8995 26.5723C15.9515 26.6244 16.036 26.6244 16.088 26.5723L20.6099 22.0486C20.6321 22.0283 20.6524 22.008 20.6746 21.9858L25.3554 17.3032ZM13.1566 9.44134L15.9098 12.187C15.9619 12.239 16.0463 12.2389 16.0983 12.1869L18.8438 9.44134C20.2305 8.05471 22.4819 8.05471 23.8685 9.44134C25.2537 10.8264 25.257 13.0685 23.8786 14.4578L23.1986 15.1231L18.5107 19.8128L18.4884 19.8333L16.0876 22.235C16.0355 22.2871 15.9511 22.2871 15.899 22.235L8.13007 14.466C6.74345 13.0794 6.74345 10.828 8.13007 9.44134C9.51855 8.05286 11.7681 8.05286 13.1566 9.44134Z" fill="currentColor"/>', YL = '<path d="M17.534 10.6674C17.534 11.5143 16.8475 12.2008 16.0006 12.2008C15.1538 12.2008 14.4673 11.5143 14.4673 10.6674C14.4673 9.82061 15.1538 9.13411 16.0006 9.13411C16.8475 9.13411 17.534 9.82061 17.534 10.6674Z" fill="currentColor"/> <path d="M14.6678 14.2005C14.6678 13.8323 14.9663 13.5339 15.3345 13.5339H16.6678C17.036 13.5339 17.3345 13.8323 17.3345 14.2005V22.2005C17.3345 22.5687 17.036 22.8672 16.6678 22.8672H15.3345C14.9663 22.8672 14.6678 22.5687 14.6678 22.2005V14.2005Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16ZM24.9333 16C24.9333 20.9337 20.9337 24.9333 16 24.9333C11.0663 24.9333 7.06667 20.9337 7.06667 16C7.06667 11.0663 11.0663 7.06667 16 7.06667C20.9337 7.06667 24.9333 11.0663 24.9333 16Z" fill="currentColor"/>', QL = '<path d="M4 7.38854C4 7.3149 4.0597 7.2552 4.13333 7.2552H10.1792C10.2528 7.2552 10.3125 7.19551 10.3125 7.12187V5.46666C10.3125 5.39302 10.3722 5.33333 10.4458 5.33333H12.726C12.7997 5.33333 12.8594 5.39302 12.8594 5.46666V7.12187C12.8594 7.19551 12.9191 7.2552 12.9927 7.2552H19.0333C19.107 7.2552 19.1667 7.3149 19.1667 7.38854V9.66354C19.1667 9.73717 19.107 9.79687 19.0333 9.79687H16.7106C16.6533 9.79687 16.6021 9.83433 16.5838 9.88869C15.4447 13.2641 14.1144 15.1953 13.5156 16.0573C13.4808 16.113 15.1333 17.5629 15.4974 17.8813C15.5402 17.9187 15.5534 17.9781 15.5321 18.0308L14.6529 20.2077C14.622 20.2843 14.5295 20.3146 14.4597 20.2703C13.5546 19.6951 12.8558 19.0727 11.9724 18.1584C11.9193 18.1036 11.8302 18.1049 11.7777 18.1603C9.69726 20.3578 8.60797 21.1142 6.80933 22.179C6.7475 22.2156 6.66731 22.1967 6.62871 22.1361L5.43696 20.2647C5.39711 20.2021 5.41633 20.1189 5.47911 20.0794C7.36746 18.8903 8.68502 17.6997 10.1302 16.1862C10.1752 16.139 10.1792 16.0655 10.14 16.0134C8.91005 14.3765 8.20369 13.2435 7.313 11.3664C7.28331 11.3039 7.30645 11.2285 7.36636 11.1938L9.32729 10.0573C9.39495 10.0181 9.48168 10.0453 9.51522 10.116C10.2082 11.5756 10.9182 12.7663 11.7071 13.8661C11.7622 13.9428 11.8775 13.9384 11.9269 13.8579C12.7208 12.5654 13.2411 11.5051 13.8451 9.97878C13.8797 9.89149 13.8153 9.79687 13.7214 9.79687H4V7.38854Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8316 26.6665C17.1181 26.6665 17.3726 26.4835 17.4637 26.2119L18.4836 23.1708C18.5018 23.1165 18.5527 23.0799 18.61 23.0799H23.8867C23.9439 23.0799 23.9948 23.1165 24.0131 23.1708L25.035 26.2122C25.1262 26.4837 25.3805 26.6665 25.6669 26.6665H27.0582C27.5181 26.6665 27.8398 26.2119 27.687 25.7782L23.0292 12.5661C22.9352 12.2994 22.6832 12.1211 22.4004 12.1211H20.0915C19.8087 12.1211 19.5566 12.2996 19.4627 12.5664L14.8113 25.7785C14.6587 26.2122 14.9804 26.6665 15.4402 26.6665H16.8316ZM23.0859 20.9634C23.1771 20.9634 23.2414 20.874 23.2123 20.7876L21.3208 15.1579C21.31 15.1257 21.2798 15.104 21.2459 15.104C21.2119 15.104 21.1818 15.1257 21.171 15.1579L19.2829 20.7877C19.2539 20.8741 19.3182 20.9634 19.4093 20.9634H23.0859Z" fill="currentColor"/>', XL = '<path d="M25.4288 6.57197C22.825 3.9682 18.6044 3.9682 16.0007 6.57197L13.1722 9.4004C12.9119 9.66075 12.9119 10.0829 13.1722 10.3432L14.1151 11.286C14.3754 11.5464 14.7975 11.5464 15.0579 11.286L17.8863 8.45759C19.4487 6.89514 21.9807 6.89514 23.5431 8.45759C25.1056 10.02 25.1056 12.552 23.5431 14.1144L20.7147 16.9429C20.4544 17.2032 20.4544 17.6253 20.7147 17.8857L21.6575 18.8285C21.9179 19.0888 22.34 19.0888 22.6003 18.8285L25.4288 16.0001C28.0325 13.3963 28.0325 9.17574 25.4288 6.57197Z" fill="currentColor"/> <path d="M9.40009 13.1726C9.66044 12.9122 10.0825 12.9122 10.3429 13.1726L11.2857 14.1154C11.5461 14.3757 11.5461 14.7978 11.2857 15.0582L8.4582 17.8857C6.89575 19.4481 6.89575 21.9801 8.4582 23.5425C10.0206 25.105 12.5526 25.105 14.1151 23.5425L16.9426 20.715C17.2029 20.4547 17.625 20.4547 17.8854 20.715L18.8282 21.6578C19.0885 21.9182 19.0885 22.3403 18.8282 22.6006L16.0007 25.4282C13.3969 28.0319 9.17635 28.0319 6.57258 25.4282C3.96881 22.8244 3.96881 18.6038 6.57258 16.0001L9.40009 13.1726Z" fill="currentColor"/> <path d="M19.159 11.616C18.8987 11.3556 18.4766 11.3556 18.2162 11.616L11.6165 18.2156C11.3562 18.476 11.3562 18.8981 11.6165 19.1584L12.8422 20.3841C13.1026 20.6444 13.5247 20.6444 13.785 20.3841L20.3847 13.7844C20.645 13.5241 20.645 13.102 20.3847 12.8416L19.159 11.616Z" fill="currentColor"/>', JL = '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 4C19.6372 4 22.5941 6.91273 22.6653 10.5329C22.6668 10.6065 22.7264 10.6667 22.8 10.6667H24.6667C25.0348 10.6667 25.3333 10.9651 25.3333 11.3333V26C25.3333 26.3682 25.0348 26.6667 24.6667 26.6667H7.33332C6.96513 26.6667 6.66666 26.3682 6.66666 26V11.3333C6.66666 10.9651 6.96513 10.6667 7.33332 10.6667H9.19999C9.27363 10.6667 9.33319 10.6065 9.33464 10.5329C9.40591 6.91273 12.3628 4 16 4ZM12.0022 10.5331C11.9998 10.6067 12.0597 10.6667 12.1333 10.6667H19.8667C19.9403 10.6667 20.0002 10.6067 19.9978 10.5331C19.9273 8.38578 18.1644 6.66667 16 6.66667C13.8356 6.66667 12.0726 8.38578 12.0022 10.5331ZM9.33332 14C9.33332 13.6318 9.6318 13.3333 9.99999 13.3333H22C22.3682 13.3333 22.6667 13.6318 22.6667 14V23.3333C22.6667 23.7015 22.3682 24 22 24H9.99999C9.6318 24 9.33332 23.7015 9.33332 23.3333V14Z" fill="currentColor"/>', eP = '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.3553 6.58214C20.6472 6.33698 20.6763 5.89459 20.3892 5.64378C19.2173 4.6201 17.6841 4 16.0052 4C12.3676 4 9.4111 6.91235 9.33985 10.5329C9.3384 10.6065 9.27884 10.6667 9.2052 10.6667H7.33332C6.96513 10.6667 6.66666 10.9651 6.66666 11.3333V26C6.66666 26.3682 6.96513 26.6667 7.33332 26.6667H24.6667C25.0348 26.6667 25.3333 26.3682 25.3333 26V11.3333C25.3333 10.9651 25.0348 10.6667 24.6667 10.6667H12.1385C12.0649 10.6667 12.005 10.6067 12.0074 10.5331C12.0778 8.38532 13.8403 6.66667 16.0052 6.66667C16.4349 6.66667 16.8489 6.73438 17.237 6.85938C17.6523 6.99402 18.038 7.19469 18.3814 7.44892C18.6602 7.6553 19.0494 7.67862 19.3151 7.45556L20.3553 6.58214ZM9.33332 14C9.33332 13.6318 9.6318 13.3333 9.99999 13.3333H22C22.3682 13.3333 22.6667 13.6318 22.6667 14V23.3333C22.6667 23.7015 22.3682 24 22 24H9.99999C9.6318 24 9.33332 23.7015 9.33332 23.3333V14Z" fill="currentColor"/>', tP = '<path d="M8 13.3333C6.52724 13.3333 5.33334 14.5273 5.33334 16C5.33334 17.4728 6.52724 18.6667 8 18.6667C9.47276 18.6667 10.6667 17.4728 10.6667 16C10.6667 14.5273 9.47276 13.3333 8 13.3333Z" fill="currentColor"/> <path d="M13.3333 16C13.3333 14.5273 14.5272 13.3333 16 13.3333C17.4728 13.3333 18.6667 14.5273 18.6667 16C18.6667 17.4728 17.4728 18.6667 16 18.6667C14.5272 18.6667 13.3333 17.4728 13.3333 16Z" fill="currentColor"/> <path d="M21.3333 16C21.3333 14.5273 22.5272 13.3333 24 13.3333C25.4728 13.3333 26.6667 14.5273 26.6667 16C26.6667 17.4728 25.4728 18.6667 24 18.6667C22.5272 18.6667 21.3333 17.4728 21.3333 16Z" fill="currentColor"/>', sP = '<path d="M13.3333 8.00001C13.3333 9.47277 14.5272 10.6667 16 10.6667C17.4728 10.6667 18.6667 9.47277 18.6667 8.00001C18.6667 6.52725 17.4728 5.33334 16 5.33334C14.5272 5.33334 13.3333 6.52725 13.3333 8.00001Z" fill="currentColor"/> <path d="M16 18.6667C14.5272 18.6667 13.3333 17.4728 13.3333 16C13.3333 14.5273 14.5272 13.3333 16 13.3333C17.4728 13.3333 18.6667 14.5273 18.6667 16C18.6667 17.4728 17.4728 18.6667 16 18.6667Z" fill="currentColor"/> <path d="M16 26.6667C14.5272 26.6667 13.3333 25.4728 13.3333 24C13.3333 22.5273 14.5272 21.3333 16 21.3333C17.4728 21.3333 18.6667 22.5273 18.6667 24C18.6667 25.4728 17.4728 26.6667 16 26.6667Z" fill="currentColor"/>', nP = '<path d="M22.3257 15.8354C22.1263 15.8695 21.9256 15.7966 21.7826 15.6536L16.347 10.218C16.2039 10.0749 16.1311 9.87422 16.1652 9.67483C16.3448 8.62476 16.84 7.61813 17.6506 6.80752C19.7334 4.72472 23.1103 4.72472 25.193 6.80752C27.2758 8.89032 27.2758 12.2672 25.193 14.35C24.3824 15.1606 23.3758 15.6557 22.3257 15.8354Z" fill="currentColor"/> <path d="M15.3386 12.9809C15.0613 12.7036 14.6058 12.7244 14.3549 13.0257L5.78725 23.3142C5.56666 23.5791 5.58439 23.9685 5.82814 24.2122L7.79205 26.1761C8.03586 26.42 8.42536 26.4376 8.69024 26.2169L18.9754 17.6459C19.2766 17.3949 19.2972 16.9395 19.02 16.6623L15.3386 12.9809Z" fill="currentColor"/>', iP = '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66667 5.33334C8.29848 5.33334 8 5.63182 8 6.00001V26C8 26.3682 8.29848 26.6667 8.66667 26.6667H23.3333C23.7015 26.6667 24 26.3682 24 26V6.00001C24 5.63182 23.7015 5.33334 23.3333 5.33334H8.66667ZM11.7334 8.39967C11.3652 8.39967 11.0667 8.69815 11.0667 9.06634V22.9335C11.0667 23.3017 11.3652 23.6002 11.7334 23.6002H20.2673C20.6354 23.6002 20.9339 23.3017 20.9339 22.9335V9.06633C20.9339 8.69814 20.6354 8.39967 20.2673 8.39967H11.7334Z" fill="currentColor"/>', rP = '<path d="M11.3793 8.06476C7.08494 11.0717 6.04129 16.9905 9.04821 21.2848C12.0551 25.5791 17.9739 26.6228 22.2683 23.6159C23.1791 22.9781 23.9437 22.2093 24.5544 21.3529C24.8954 20.8746 24.4241 20.2717 23.8397 20.3315C20.7636 20.6467 17.6125 19.331 15.713 16.6181C13.8134 13.9052 13.6547 10.4942 15.003 7.71137C15.2591 7.18276 14.8537 6.53361 14.2877 6.69049C13.274 6.97145 12.2901 7.427 11.3793 8.06476Z" fill="currentColor"/>', oP = '<path d="M26.6667 5.99662C26.6667 5.62843 26.3682 5.32996 26 5.32996L11.3333 5.32996C10.9651 5.32996 10.6667 5.62843 10.6667 5.99662L10.6667 7.10189C10.6667 7.13727 10.6807 7.1712 10.7057 7.19621L13.1058 9.59459C13.1898 9.67854 13.3333 9.61904 13.3333 9.50028L13.3333 8.66329C13.3333 8.2951 13.6318 7.99662 14 7.99662L23.3333 7.99662C23.7015 7.99662 24 8.2951 24 8.66329V14.9014C24 14.9994 23.8978 15.0642 23.8075 15.0262C23.2516 14.7925 22.6409 14.6633 22 14.6633C20.9812 14.6633 20.0386 14.9898 19.2712 15.5438C19.206 15.5909 19.2001 15.6849 19.257 15.7417L21.0042 17.4878C21.0455 17.529 21.1085 17.5382 21.1614 17.5137C21.4165 17.3958 21.7005 17.33 22 17.33C23.1046 17.33 24 18.2254 24 19.33C24 19.6289 23.9344 19.9126 23.8168 20.1673C23.7924 20.2202 23.8016 20.2833 23.8429 20.3245L25.5901 22.0705C25.647 22.1274 25.7409 22.1214 25.788 22.0562C26.3409 21.2893 26.6667 20.3476 26.6667 19.33L26.6667 5.99662Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1158 25.5424C25.1678 25.4903 25.1678 25.4059 25.1157 25.3538L6.63661 6.88715C6.58454 6.83511 6.50014 6.83512 6.44808 6.88718L5.12799 8.20727C4.86764 8.46762 4.86771 8.88966 5.12815 9.14992L10.6276 14.6456C10.6526 14.6707 10.6667 14.7046 10.6667 14.74V17.5681C10.6667 17.666 10.5644 17.7309 10.4741 17.6929C9.91823 17.4591 9.30753 17.33 8.66667 17.33C6.08934 17.33 4 19.4193 4 21.9966C4 24.5739 6.08934 26.6633 8.66667 26.6633C11.244 26.6633 13.3333 24.5739 13.3333 21.9966L13.3333 17.6713C13.3333 17.5526 13.4769 17.4931 13.5609 17.577L22.8528 26.8626C23.1132 27.1229 23.5354 27.1228 23.7957 26.8624L25.1158 25.5424ZM8.66667 23.9966C9.77123 23.9966 10.6667 23.1012 10.6667 21.9966C10.6667 20.8921 9.77124 19.9966 8.66667 19.9966C7.5621 19.9966 6.66667 20.892 6.66667 21.9966C6.66667 23.1012 7.5621 23.9966 8.66667 23.9966Z" fill="currentColor"/>', aP = '<path fill-rule="evenodd" clip-rule="evenodd" d="M26.6667 5.99998C26.6667 5.63179 26.3682 5.33331 26 5.33331H11.3333C10.9651 5.33331 10.6667 5.63179 10.6667 5.99998V17.5714C10.6667 17.6694 10.5644 17.7342 10.4741 17.6962C9.91823 17.4625 9.30754 17.3333 8.66667 17.3333C6.08934 17.3333 4 19.4226 4 22C4 24.5773 6.08934 26.6666 8.66667 26.6666C11.244 26.6666 13.3333 24.5773 13.3333 22V8.66665C13.3333 8.29846 13.6318 7.99998 14 7.99998L23.3333 7.99998C23.7015 7.99998 24 8.29846 24 8.66665V14.9048C24 15.0027 23.8978 15.0675 23.8075 15.0296C23.2516 14.7958 22.6409 14.6666 22 14.6666C19.4227 14.6666 17.3333 16.756 17.3333 19.3333C17.3333 21.9106 19.4227 24 22 24C24.5773 24 26.6667 21.9106 26.6667 19.3333V5.99998ZM22 21.3333C23.1046 21.3333 24 20.4379 24 19.3333C24 18.2287 23.1046 17.3333 22 17.3333C20.8954 17.3333 20 18.2287 20 19.3333C20 20.4379 20.8954 21.3333 22 21.3333ZM8.66667 24C9.77124 24 10.6667 23.1045 10.6667 22C10.6667 20.8954 9.77124 20 8.66667 20C7.5621 20 6.66667 20.8954 6.66667 22C6.66667 23.1045 7.5621 24 8.66667 24Z" fill="currentColor"/>', cP = '<path d="M17.5091 24.6594C17.5091 25.2066 16.8864 25.5208 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9991 9.36923 19.9991H4.66667C4.29848 19.9991 4 19.7006 4 19.3325V12.6658C4 12.2976 4.29848 11.9991 4.66667 11.9991H9.37115C9.39967 11.9991 9.42745 11.99 9.45039 11.973L16.4463 6.8036C16.8863 6.47842 17.5091 6.79259 17.5091 7.33977L17.5091 24.6594Z" fill="currentColor"/> <path d="M28.8621 13.6422C29.1225 13.3818 29.1225 12.9597 28.8621 12.6994L27.9193 11.7566C27.659 11.4962 27.2368 11.4962 26.9765 11.7566L24.7134 14.0197C24.6613 14.0717 24.5769 14.0717 24.5248 14.0197L22.262 11.7568C22.0016 11.4964 21.5795 11.4964 21.3191 11.7568L20.3763 12.6996C20.116 12.9599 20.116 13.382 20.3763 13.6424L22.6392 15.9053C22.6913 15.9573 22.6913 16.0418 22.6392 16.0938L20.3768 18.3562C20.1165 18.6166 20.1165 19.0387 20.3768 19.299L21.3196 20.2419C21.58 20.5022 22.0021 20.5022 22.2624 20.2418L24.5248 17.9795C24.5769 17.9274 24.6613 17.9274 24.7134 17.9795L26.976 20.2421C27.2363 20.5024 27.6585 20.5024 27.9188 20.2421L28.8616 19.2992C29.122 19.0389 29.122 18.6168 28.8616 18.3564L26.599 16.0938C26.547 16.0418 26.547 15.9573 26.599 15.9053L28.8621 13.6422Z" fill="currentColor"/>', lP = '<path d="M6.39617 6.78532C5.9561 6.46017 5.33334 6.77434 5.33334 7.32151V24.6785C5.33334 25.2257 5.95612 25.5398 6.39619 25.2147L18.1415 16.5358C18.5021 16.2693 18.5021 15.7299 18.1415 15.4634L6.39617 6.78532Z" fill="currentColor"/> <path d="M23.5339 6.6667C23.1657 6.6667 22.8672 6.96518 22.8672 7.33337V24.6667C22.8672 25.0349 23.1657 25.3334 23.5339 25.3334H25.5339C25.902 25.3334 26.2005 25.0349 26.2005 24.6667V7.33337C26.2005 6.96518 25.902 6.6667 25.5339 6.6667H23.5339Z" fill="currentColor"/>', uP = '<path d="M26.6009 16.0725C26.6009 16.424 26.4302 17.1125 25.9409 18.0213C25.4676 18.8976 24.7542 19.8715 23.8182 20.7783C21.9489 22.5905 19.2662 24.0667 15.9342 24.0667C12.6009 24.0667 9.91958 22.5915 8.04891 20.78C7.11424 19.8736 6.40091 18.9 5.92758 18.0236C5.43824 17.1149 5.26758 16.4257 5.26758 16.0725C5.26758 15.7193 5.43824 15.0293 5.92891 14.1193C6.40224 13.2416 7.11558 12.2665 8.05158 11.3587C9.92224 9.54398 12.6049 8.06665 15.9342 8.06665C19.2636 8.06665 21.9449 9.54505 23.8169 11.3604C24.7529 12.2687 25.4662 13.2441 25.9396 14.1216C26.4302 15.0317 26.6009 15.7209 26.6009 16.0725Z" stroke="currentColor" stroke-width="3"/> <path d="M15.9336 20.0667C18.1427 20.0667 19.9336 18.2758 19.9336 16.0667C19.9336 13.8575 18.1427 12.0667 15.9336 12.0667C13.7245 12.0667 11.9336 13.8575 11.9336 16.0667C11.9336 18.2758 13.7245 20.0667 15.9336 20.0667Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M27.2323 25.0624L6.93878 4.76886C6.78118 4.61126 6.70762 4.57052 6.61919 4.54372C6.53077 4.51692 6.44033 4.51691 6.3519 4.54372C6.26347 4.57052 6.18991 4.61126 6.03231 4.76886L4.77032 6.03085C4.61272 6.18845 4.57198 6.26201 4.54518 6.35044C4.51838 6.43887 4.51838 6.5293 4.54518 6.61773C4.57198 6.70616 4.61272 6.77972 4.77032 6.93732L25.0639 27.2308C25.2215 27.3884 25.295 27.4292 25.3834 27.456C25.4719 27.4828 25.5623 27.4828 25.6507 27.456C25.7392 27.4292 25.8127 27.3885 25.9703 27.2309L27.2323 25.9689C27.3899 25.8113 27.4307 25.7377 27.4575 25.6493C27.4843 25.5608 27.4843 25.4704 27.4575 25.382C27.4307 25.2935 27.3899 25.22 27.2323 25.0624Z" fill="currentColor"/>', dP = '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.0873 13.6471C24.4011 8.96745 20.6901 5 16 5C11.3099 5 7.599 8.96745 7.9115 13.6471L8.12463 16.8194C8.13258 16.9377 8.10886 17.0559 8.05592 17.1619L5.95553 21.3689C5.73423 21.8121 6.05657 22.3333 6.55199 22.3333H11.2001C11.2737 22.3333 11.3332 22.3934 11.3353 22.467C11.406 24.9825 13.4674 27 16.0001 27C18.5327 27 20.5941 24.9825 20.6649 22.467C20.6669 22.3934 20.7264 22.3333 20.8001 22.3333H25.4481C25.9435 22.3333 26.2659 21.8121 26.0446 21.3689L23.9441 17.1618C23.8912 17.0558 23.8675 16.9377 23.8754 16.8196L24.0873 13.6471ZM17.9957 22.4667C18.0005 22.3932 17.9404 22.3333 17.8667 22.3333H14.1334C14.0598 22.3333 13.9996 22.3932 14.0044 22.4667C14.0731 23.5091 14.9403 24.3333 16.0001 24.3333C17.0598 24.3333 17.9271 23.5091 17.9957 22.4667ZM21.9986 19.6667C22.0976 19.6667 22.1621 19.5624 22.1179 19.4738L21.5583 18.353C21.2938 17.8232 21.1752 17.2326 21.2146 16.6418L21.4266 13.4687C21.6371 10.3288 19.1474 7.66667 16 7.66667C12.8532 7.66667 10.3632 10.3293 10.5722 13.4695L10.7853 16.6407C10.825 17.2319 10.7064 17.823 10.4418 18.3531L9.88224 19.4738C9.83798 19.5624 9.90245 19.6667 10.0015 19.6667H21.9986Z" fill="currentColor"/>', hP = '<path d="M25.14 25.1089C25.0171 25.2532 24.8356 25.3333 24.646 25.3333H22.8124C22.1084 25.3333 21.7734 24.1872 22.2745 23.6927C23.9161 22.0729 24.9336 19.822 24.9336 17.3333C24.9336 12.3997 20.9336 8.39973 16 8.39973C11.0664 8.39973 7.06641 12.3997 7.06641 17.3333C7.06641 19.822 8.08389 22.0729 9.72555 23.6927C10.2266 24.1872 9.89155 25.3333 9.18762 25.3333H7.35398C7.16436 25.3333 6.98294 25.2532 6.86001 25.1089C5.07703 23.015 4 20.2991 4 17.3333C4 10.7057 9.3724 5.33333 16 5.33333C22.6276 5.33333 28 10.7057 28 17.3333C28 20.2991 26.923 23.015 25.14 25.1089Z" fill="currentColor"/> <path d="M21.1992 14.3399C21.4595 14.0796 21.4595 13.6575 21.1992 13.3971L20.2564 12.4543C19.996 12.194 19.5739 12.194 19.3136 12.4543L16.4492 15.3187C16.4185 15.3493 16.3749 15.3629 16.332 15.3568C16.2236 15.3414 16.1127 15.3334 16 15.3334C14.7113 15.3334 13.6667 16.378 13.6667 17.6667C13.6667 18.9554 14.7113 20 16 20C17.2887 20 18.3333 18.9554 18.3333 17.6667C18.3333 17.5464 18.3242 17.4283 18.3067 17.313C18.3001 17.2696 18.3136 17.2255 18.3446 17.1945L21.1992 14.3399Z" fill="currentColor"/>', fP = '<path d="M8.66667 6.66667C8.29848 6.66667 8 6.96514 8 7.33333V24.6667C8 25.0349 8.29848 25.3333 8.66667 25.3333H12.6667C13.0349 25.3333 13.3333 25.0349 13.3333 24.6667V7.33333C13.3333 6.96514 13.0349 6.66667 12.6667 6.66667H8.66667Z" fill="currentColor"/> <path d="M19.3333 6.66667C18.9651 6.66667 18.6667 6.96514 18.6667 7.33333V24.6667C18.6667 25.0349 18.9651 25.3333 19.3333 25.3333H23.3333C23.7015 25.3333 24 25.0349 24 24.6667V7.33333C24 6.96514 23.7015 6.66667 23.3333 6.66667H19.3333Z" fill="currentColor"/>', pP = '<path d="M5.33334 26V19.4667C5.33334 19.393 5.39304 19.3333 5.46668 19.3333H7.86668C7.94031 19.3333 8.00001 19.393 8.00001 19.4667V23.3333C8.00001 23.7015 8.29849 24 8.66668 24H23.3333C23.7015 24 24 23.7015 24 23.3333V8.66666C24 8.29847 23.7015 7.99999 23.3333 7.99999H19.4667C19.393 7.99999 19.3333 7.9403 19.3333 7.86666V5.46666C19.3333 5.39302 19.393 5.33333 19.4667 5.33333H26C26.3682 5.33333 26.6667 5.63181 26.6667 5.99999V26C26.6667 26.3682 26.3682 26.6667 26 26.6667H6.00001C5.63182 26.6667 5.33334 26.3682 5.33334 26Z" fill="currentColor"/> <path d="M14.0098 8.42359H10.806C10.6872 8.42359 10.6277 8.56721 10.7117 8.6512L16.5491 14.4886C16.8094 14.7489 16.8094 15.171 16.5491 15.4314L15.3234 16.657C15.0631 16.9174 14.641 16.9174 14.3806 16.657L8.63739 10.9138C8.55339 10.8298 8.40978 10.8893 8.40978 11.0081V14.0236C8.40978 14.3918 8.1113 14.6903 7.74311 14.6903H6.00978C5.64159 14.6903 5.34311 14.3918 5.34311 14.0236L5.34311 6.02359C5.34311 5.6554 5.64159 5.35692 6.00978 5.35692L14.0098 5.35692C14.378 5.35692 14.6764 5.6554 14.6764 6.02359V7.75692C14.6764 8.12511 14.378 8.42359 14.0098 8.42359Z" fill="currentColor"/>', CP = '<path d="M16 15.3333C15.6318 15.3333 15.3333 15.6318 15.3333 16V20C15.3333 20.3682 15.6318 20.6667 16 20.6667H21.3333C21.7015 20.6667 22 20.3682 22 20V16C22 15.6318 21.7015 15.3333 21.3333 15.3333H16Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33333 7.33334C5.33333 6.96515 5.63181 6.66667 5.99999 6.66667H26C26.3682 6.66667 26.6667 6.96515 26.6667 7.33334V24.6667C26.6667 25.0349 26.3682 25.3333 26 25.3333H5.99999C5.63181 25.3333 5.33333 25.0349 5.33333 24.6667V7.33334ZM7.99999 10C7.99999 9.63182 8.29847 9.33334 8.66666 9.33334H23.3333C23.7015 9.33334 24 9.63182 24 10V22C24 22.3682 23.7015 22.6667 23.3333 22.6667H8.66666C8.29847 22.6667 7.99999 22.3682 7.99999 22V10Z" fill="currentColor"/>', mP = '<path d="M10.6667 6.6548C10.6667 6.10764 11.2894 5.79346 11.7295 6.11862L24.377 15.4634C24.7377 15.7298 24.7377 16.2692 24.3771 16.5357L11.7295 25.8813C11.2895 26.2065 10.6667 25.8923 10.6667 25.3451L10.6667 6.6548Z" fill="currentColor"/>', gP = '<path d="M13.9213 5.53573C14.3146 5.45804 14.6666 5.76987 14.6666 6.17079V7.57215C14.6666 7.89777 14.4305 8.17277 14.114 8.24925C12.5981 8.61559 11.2506 9.41368 10.2091 10.506C9.98474 10.7414 9.62903 10.8079 9.34742 10.6453L8.14112 9.94885C7.79394 9.7484 7.69985 9.28777 7.96359 8.98585C9.48505 7.24409 11.5636 6.00143 13.9213 5.53573Z" fill="currentColor"/> <path d="M5.88974 12.5908C6.01805 12.2101 6.46491 12.0603 6.81279 12.2611L8.01201 12.9535C8.29379 13.1162 8.41396 13.4577 8.32238 13.7699C8.11252 14.4854 7.99998 15.2424 7.99998 16.0257C7.99998 16.809 8.11252 17.566 8.32238 18.2814C8.41396 18.5936 8.29378 18.9352 8.01201 19.0979L6.82742 19.7818C6.48051 19.9821 6.03488 19.8337 5.90521 19.4547C5.5345 18.3712 5.33331 17.2091 5.33331 16C5.33331 14.8078 5.5289 13.6613 5.88974 12.5908Z" fill="currentColor"/> <path d="M8.17106 22.0852C7.82291 22.2862 7.72949 22.7486 7.99532 23.0502C9.51387 24.773 11.5799 26.0017 13.9213 26.4642C14.3146 26.5419 14.6666 26.2301 14.6666 25.8291V24.4792C14.6666 24.1536 14.4305 23.8786 14.114 23.8021C12.5981 23.4358 11.2506 22.6377 10.2091 21.5453C9.98474 21.31 9.62903 21.2435 9.34742 21.4061L8.17106 22.0852Z" fill="currentColor"/> <path d="M17.3333 25.8291C17.3333 26.2301 17.6857 26.5418 18.079 26.4641C22.9748 25.4969 26.6666 21.1796 26.6666 16C26.6666 10.8204 22.9748 6.50302 18.079 5.5358C17.6857 5.4581 17.3333 5.76987 17.3333 6.17079V7.57215C17.3333 7.89777 17.5697 8.17282 17.8862 8.24932C21.3942 9.09721 24 12.2572 24 16.0257C24 19.7942 21.3942 22.9542 17.8862 23.802C17.5697 23.8785 17.3333 24.1536 17.3333 24.4792V25.8291Z" fill="currentColor"/> <path d="M14.3961 10.4163C13.9561 10.0911 13.3333 10.4053 13.3333 10.9525L13.3333 21.0474C13.3333 21.5946 13.9561 21.9087 14.3962 21.5836L21.2273 16.5359C21.5879 16.2694 21.5879 15.73 21.2273 15.4635L14.3961 10.4163Z" fill="currentColor"/>', yP = '<path d="M12 7.66667C12 7.29848 12.2985 7 12.6666 7H26C26.3682 7 26.6666 7.29848 26.6666 7.66667V9.66667C26.6666 10.0349 26.3682 10.3333 26 10.3333H12.6666C12.2985 10.3333 12 10.0349 12 9.66667V7.66667Z" fill="currentColor"/> <path d="M12 15C12 14.6318 12.2985 14.3333 12.6666 14.3333H26C26.3682 14.3333 26.6666 14.6318 26.6666 15V17C26.6666 17.3682 26.3682 17.6667 26 17.6667H12.6666C12.2985 17.6667 12 17.3682 12 17V15Z" fill="currentColor"/> <path d="M5.99998 21.6667C5.63179 21.6667 5.33331 21.9651 5.33331 22.3333V24.3333C5.33331 24.7015 5.63179 25 5.99998 25H7.99998C8.36817 25 8.66665 24.7015 8.66665 24.3333V22.3333C8.66665 21.9651 8.36817 21.6667 7.99998 21.6667H5.99998Z" fill="currentColor"/> <path d="M12.6666 21.6667C12.2985 21.6667 12 21.9651 12 22.3333V24.3333C12 24.7015 12.2985 25 12.6666 25H26C26.3682 25 26.6666 24.7015 26.6666 24.3333V22.3333C26.6666 21.9651 26.3682 21.6667 26 21.6667H12.6666Z" fill="currentColor"/> <path d="M5.99998 14.3333C5.63179 14.3333 5.33331 14.6318 5.33331 15V17C5.33331 17.3682 5.63179 17.6667 5.99998 17.6667H7.99998C8.36817 17.6667 8.66665 17.3682 8.66665 17V15C8.66665 14.6318 8.36817 14.3333 7.99998 14.3333H5.99998Z" fill="currentColor"/> <path d="M5.99998 7C5.63179 7 5.33331 7.29848 5.33331 7.66667V9.66667C5.33331 10.0349 5.63179 10.3333 5.99998 10.3333H7.99998C8.36817 10.3333 8.66665 10.0349 8.66665 9.66667V7.66667C8.66665 7.29848 8.36817 7 7.99998 7H5.99998Z" fill="currentColor"/>', vP = '<path d="M25.1377 6.78532C25.5778 6.46017 26.2005 6.77434 26.2005 7.32151V24.6785C26.2005 25.2257 25.5777 25.5398 25.1377 25.2147L13.3924 16.5358C13.0317 16.2693 13.0317 15.7299 13.3924 15.4634L25.1377 6.78532Z" fill="currentColor"/> <path d="M8 6.6667C8.36819 6.6667 8.66667 6.96518 8.66667 7.33337V24.6667C8.66667 25.0349 8.36819 25.3334 8 25.3334H6C5.63181 25.3334 5.33333 25.0349 5.33333 24.6667V7.33337C5.33333 6.96518 5.63181 6.6667 6 6.6667H8Z" fill="currentColor"/>', bP = '<path d="M13.5178 19.8304C13.5178 20.021 13.6724 20.1756 13.863 20.1756H17.0203C17.2109 20.1756 17.3654 20.021 17.3654 19.8304C17.3722 19.1671 17.4568 18.6088 17.6193 18.1553C17.7885 17.7019 18.0422 17.3025 18.3806 16.9574C18.7258 16.6122 19.1657 16.2806 19.7004 15.9625C20.3366 15.5835 20.8882 15.1605 21.3552 14.6935C21.8222 14.2197 22.1843 13.6783 22.4414 13.0692C22.7054 12.4533 22.8374 11.7494 22.8374 10.9575C22.8374 9.77315 22.543 8.76133 21.9542 7.9221C21.3653 7.08287 20.5532 6.44329 19.5177 6.00338C18.4822 5.55669 17.291 5.33334 15.9442 5.33334C14.7192 5.33334 13.5991 5.5533 12.5839 5.99322C11.5687 6.42638 10.7531 7.08626 10.1372 7.97286C9.62803 8.70029 9.31776 9.58964 9.20642 10.6409C9.16696 11.0135 9.47146 11.323 9.84618 11.323H12.6619C13.0206 11.323 13.3043 11.0356 13.3876 10.6867C13.4552 10.4034 13.5629 10.1519 13.7107 9.9322C13.9611 9.55319 14.2826 9.26893 14.6752 9.07943C15.0677 8.88316 15.4839 8.78502 15.9239 8.78502C16.3773 8.78502 16.7902 8.87977 17.1624 9.06928C17.5414 9.25878 17.8426 9.5295 18.0659 9.88144C18.2893 10.2334 18.401 10.6428 18.401 11.1098C18.401 11.5497 18.3028 11.9491 18.1065 12.3078C17.9103 12.6597 17.6463 12.9812 17.3147 13.2722C16.9831 13.5632 16.6074 13.8441 16.1878 14.1148C15.6261 14.4668 15.1455 14.8593 14.7462 15.2925C14.3469 15.7256 14.0424 16.2941 13.8326 16.998C13.6295 17.7019 13.5246 18.646 13.5178 19.8304Z" fill="currentColor"/> <path d="M13.7919 25.9622C14.2725 26.436 14.8511 26.6728 15.5279 26.6728C15.9611 26.6728 16.3604 26.5646 16.7259 26.348C17.0913 26.1246 17.3858 25.8302 17.6091 25.4648C17.8392 25.0925 17.9577 24.683 17.9644 24.2364C17.9577 23.5731 17.7106 23.0046 17.2233 22.5308C16.736 22.0571 16.1709 21.8202 15.5279 21.8202C14.8511 21.8202 14.2725 22.0571 13.7919 22.5308C13.3182 23.0046 13.0847 23.5731 13.0915 24.2364C13.0847 24.9064 13.3182 25.4817 13.7919 25.9622Z" fill="currentColor"/>', wP = '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.33335 6C6.96516 6 6.66669 6.29848 6.66669 6.66667V13.3333C6.66669 13.7015 6.96516 14 7.33335 14H24.6667C25.0349 14 25.3334 13.7015 25.3334 13.3333V6.66667C25.3334 6.29848 25.0349 6 24.6667 6H7.33335ZM9.46669 8.66667C9.39305 8.66667 9.33335 8.72636 9.33335 8.8V11.2C9.33335 11.2736 9.39305 11.3333 9.46669 11.3333H22.5334C22.607 11.3333 22.6667 11.2736 22.6667 11.2V8.8C22.6667 8.72636 22.607 8.66667 22.5334 8.66667H9.46669Z" fill="currentColor"/> <path d="M6.66669 18C6.66669 17.6318 6.96516 17.3333 7.33335 17.3333H24.6667C25.0349 17.3333 25.3334 17.6318 25.3334 18V19.3333C25.3334 19.7015 25.0349 20 24.6667 20H7.33335C6.96516 20 6.66669 19.7015 6.66669 19.3333V18Z" fill="currentColor"/> <path d="M6.66669 24C6.66669 23.6318 6.96516 23.3333 7.33335 23.3333H24.6667C25.0349 23.3333 25.3334 23.6318 25.3334 24V25.3333C25.3334 25.7015 25.0349 26 24.6667 26H7.33335C6.96516 26 6.66669 25.7015 6.66669 25.3333V24Z" fill="currentColor"/>', xP = '<path d="M16 20.6667C18.5773 20.6667 20.6666 18.5773 20.6666 16C20.6666 13.4227 18.5773 11.3333 16 11.3333C13.4227 11.3333 11.3333 13.4227 11.3333 16C11.3333 18.5773 13.4227 20.6667 16 20.6667Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M26.6666 16C26.6666 21.891 21.891 26.6667 16 26.6667C10.1089 26.6667 5.33331 21.891 5.33331 16C5.33331 10.109 10.1089 5.33334 16 5.33334C21.891 5.33334 26.6666 10.109 26.6666 16ZM24 16C24 20.4183 20.4183 24 16 24C11.5817 24 7.99998 20.4183 7.99998 16C7.99998 11.5817 11.5817 8.00001 16 8.00001C20.4183 8.00001 24 11.5817 24 16Z" fill="currentColor"/>', SP = '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 26.6667C21.891 26.6667 26.6666 21.891 26.6666 16C26.6666 10.109 21.891 5.33334 16 5.33334C10.1089 5.33334 5.33331 10.109 5.33331 16C5.33331 21.891 10.1089 26.6667 16 26.6667ZM16 23.3333C20.0501 23.3333 23.3333 20.0501 23.3333 16C23.3333 11.9499 20.0501 8.66668 16 8.66668C11.9499 8.66668 8.66665 11.9499 8.66665 16C8.66665 20.0501 11.9499 23.3333 16 23.3333Z" fill="currentColor"/>', $P = '<path d="M22.1969 4.98846C21.7569 4.66331 21.1341 4.97748 21.1341 5.52465V7.20266C21.1341 7.27629 21.0744 7.33599 21.0008 7.33599H11.1341C8.18859 7.33599 5.80078 9.72381 5.80078 12.6693V14.6693C5.80078 15.0375 6.09925 15.336 6.46744 15.336H8.20078C8.56897 15.336 8.86744 15.0375 8.86744 14.6693V13.0691C8.86744 11.5963 10.0613 10.4024 11.5341 10.4024H21.0008C21.0744 10.4024 21.1341 10.4621 21.1341 10.5357V12.215C21.1341 12.7621 21.7569 13.0763 22.197 12.7511L26.7242 9.40583C27.0849 9.13934 27.0849 8.59995 26.7242 8.33347L22.1969 4.98846Z" fill="currentColor"/> <path d="M16 18.0001C17.1046 18.0001 18 17.1046 18 16.0001C18 14.8955 17.1046 14.0001 16 14.0001C14.8954 14.0001 14 14.8955 14 16.0001C14 17.1046 14.8954 18.0001 16 18.0001Z" fill="currentColor"/> <path d="M20.8652 24.6641H10.9986C10.9249 24.6641 10.8652 24.7238 10.8652 24.7975V26.4755C10.8652 27.0226 10.2425 27.3368 9.80241 27.0116L5.27514 23.6666C4.91448 23.4002 4.91447 22.8608 5.27512 22.5943L9.80239 19.249C10.2425 18.9238 10.8652 19.238 10.8652 19.7851V21.4644C10.8652 21.538 10.9249 21.5977 10.9986 21.5977H20.4652C21.938 21.5977 23.1319 20.4038 23.1319 18.931V17.3308C23.1319 16.9626 23.4304 16.6641 23.7986 16.6641H25.5319C25.9001 16.6641 26.1986 16.9626 26.1986 17.3308V19.3308C26.1986 22.2763 23.8108 24.6641 20.8652 24.6641Z" fill="currentColor"/>', EP = '<path d="M5.33333 12C5.33333 9.05447 7.72115 6.66666 10.6667 6.66666H21.3333C24.2788 6.66666 26.6667 9.05447 26.6667 12V20C26.6667 22.9455 24.2788 25.3333 21.3333 25.3333H21.2922C21.2185 25.3333 21.1589 25.393 21.1589 25.4667V27.1447C21.1589 27.6918 20.5361 28.006 20.096 27.6809L15.5687 24.3358C15.2081 24.0694 15.2081 23.53 15.5687 23.2635L20.096 19.9182C20.5361 19.593 21.1589 19.9072 21.1589 20.4543V22.1126C21.1589 22.1906 21.2257 22.2522 21.303 22.2415C22.6009 22.0617 23.6003 20.9477 23.6003 19.6003V12.3997C23.6003 10.927 22.4063 9.73306 20.9336 9.73306H11.0664C9.59365 9.73306 8.39974 10.927 8.39974 12.3997V19.6003C8.39974 21.073 9.59365 22.2669 11.0664 22.2669H11.5091C11.8773 22.2669 12.1758 22.5654 12.1758 22.9336V24.6667C12.1758 25.0348 11.8773 25.3333 11.5091 25.3333H10.6667C7.72115 25.3333 5.33333 22.9455 5.33333 20V12Z" fill="currentColor"/> <path d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z" fill="currentColor"/>', TP = '<path d="M10.6666 6.66666C7.72113 6.66666 5.33331 9.05447 5.33331 12V20C5.33331 22.9455 7.72113 25.3333 10.6666 25.3333H11.5091C11.8773 25.3333 12.1758 25.0348 12.1758 24.6667V22.9336C12.1758 22.5654 11.8773 22.2669 11.5091 22.2669H11.0664C9.59363 22.2669 8.39972 21.073 8.39972 19.6003V12.3997C8.39972 10.927 9.59363 9.73306 11.0664 9.73306H20.9336C22.4063 9.73306 23.6002 10.927 23.6002 12.3997V19.6003C23.6002 20.9477 22.6009 22.0617 21.303 22.2415C21.2257 22.2522 21.1588 22.1906 21.1588 22.1126V20.4543C21.1588 19.9072 20.536 19.593 20.096 19.9182L15.5687 23.2635C15.2081 23.53 15.2081 24.0694 15.5687 24.3358L20.096 27.6809C20.5361 28.006 21.1588 27.6918 21.1588 27.1447V25.4667C21.1588 25.393 21.2185 25.3333 21.2922 25.3333H21.3333C24.2788 25.3333 26.6666 22.9455 26.6666 20V12C26.6666 9.05447 24.2788 6.66666 21.3333 6.66666H10.6666Z" fill="currentColor"/>', LP = '<path d="M22.1969 4.98846C21.7569 4.66331 21.1341 4.97748 21.1341 5.52465V7.20266C21.1341 7.27629 21.0744 7.33599 21.0008 7.33599H11.1341C8.18859 7.33599 5.80078 9.72381 5.80078 12.6693V14.6693C5.80078 15.0375 6.09925 15.336 6.46744 15.336H8.20078C8.56897 15.336 8.86744 15.0375 8.86744 14.6693V13.0691C8.86744 11.5963 10.0613 10.4024 11.5341 10.4024H21.0008C21.0744 10.4024 21.1341 10.4621 21.1341 10.5357V12.215C21.1341 12.7621 21.7569 13.0763 22.197 12.7511L26.7242 9.40583C27.0849 9.13934 27.0849 8.59995 26.7242 8.33347L22.1969 4.98846Z" fill="currentColor"/> <path d="M10.8652 24.7975C10.8652 24.7238 10.9249 24.6641 10.9986 24.6641H20.8652C23.8108 24.6641 26.1986 22.2763 26.1986 19.3308V17.3308C26.1986 16.9626 25.9001 16.6641 25.5319 16.6641H23.7986C23.4304 16.6641 23.1319 16.9626 23.1319 17.3308V18.931C23.1319 20.4038 21.938 21.5977 20.4652 21.5977H10.9986C10.9249 21.5977 10.8652 21.538 10.8652 21.4644V19.7851C10.8652 19.238 10.2425 18.9238 9.80239 19.249L5.27512 22.5943C4.91447 22.8608 4.91448 23.4002 5.27514 23.6666L9.80241 27.0116C10.2425 27.3368 10.8652 27.0226 10.8652 26.4755V24.7975Z" fill="currentColor"/>', PP = '<path d="M15.6038 12.2147C16.0439 12.5399 16.6667 12.2257 16.6667 11.6786V10.1789C16.6667 10.1001 16.7351 10.0384 16.8134 10.0479C20.1116 10.4494 22.6667 13.2593 22.6667 16.6659C22.6667 20.3481 19.6817 23.3332 15.9995 23.3332C12.542 23.3332 9.69927 20.7014 9.36509 17.332C9.32875 16.9655 9.03371 16.6662 8.66548 16.6662L6.66655 16.6666C6.29841 16.6666 5.99769 16.966 6.02187 17.3334C6.36494 22.5454 10.7012 26.6667 16 26.6667C21.5228 26.6667 26 22.1895 26 16.6667C26 11.4103 21.9444 7.10112 16.7916 6.69757C16.7216 6.69209 16.6667 6.63396 16.6667 6.56372V4.98824C16.6667 4.44106 16.0439 4.12689 15.6038 4.45206L11.0765 7.79738C10.7159 8.06387 10.7159 8.60326 11.0766 8.86973L15.6038 12.2147Z" fill="currentColor"/>', MP = '<path d="M24.1559 5.23019C24.5428 4.84328 25.2053 5.06149 25.2866 5.60258L26.1226 11.1691C26.1892 11.6126 25.8078 11.994 25.3643 11.9274L19.7976 11.0916C19.2564 11.0104 19.0382 10.3479 19.4251 9.96096L20.726 8.66015C20.7811 8.60502 20.7771 8.51422 20.7167 8.46489C17.5744 5.89762 12.9359 6.07926 10.0054 9.00981C9.65698 9.35822 9.34743 9.73077 9.07673 10.1221C8.94598 10.3111 8.73407 10.4307 8.50425 10.4307H6.88409C6.40459 10.4307 6.08461 9.9401 6.31609 9.52018C6.78985 8.66079 7.39107 7.85289 8.11977 7.12419C12.0969 3.14702 18.4334 2.96713 22.6241 6.5845C22.6774 6.63054 22.7577 6.62845 22.8075 6.57864L24.1559 5.23019Z" fill="currentColor"/> <path d="M10.8151 15.5287C10.5548 15.2683 10.5548 14.8462 10.8151 14.5859L14.5864 10.8147C14.8467 10.5543 15.2688 10.5543 15.5292 10.8147L21.186 16.4715C21.4464 16.7319 21.4464 17.154 21.186 17.4143L17.4148 21.1856C17.1544 21.4459 16.7323 21.4459 16.472 21.1856L10.8151 15.5287Z" fill="currentColor"/> <path d="M6.71333 26.3974C6.79459 26.9385 7.4571 27.1567 7.844 26.7698L9.19245 25.4214C9.24227 25.3715 9.32254 25.3695 9.37587 25.4155C13.5665 29.0329 19.903 28.853 23.8801 24.8758C24.6088 24.1471 25.2101 23.3392 25.6838 22.4798C25.9153 22.0599 25.5953 21.5693 25.1158 21.5693H23.4957C23.2658 21.5693 23.0539 21.6889 22.9232 21.8779C22.6525 22.2692 22.3429 22.6418 21.9945 22.9902C19.064 25.9207 14.4255 26.1024 11.2832 23.5351C11.2228 23.4858 11.2188 23.395 11.274 23.3399L12.5748 22.039C12.9617 21.6521 12.7435 20.9896 12.2024 20.9084L6.6356 20.0726C6.19214 20.006 5.81075 20.3874 5.87734 20.8309L6.71333 26.3974Z" fill="currentColor"/>', kP = '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.1724 22.3417C20.1263 22.2956 20.0536 22.2897 20.0001 22.327C18.4883 23.3815 16.6497 24 14.6666 24C9.51199 24 5.33331 19.8213 5.33331 14.6667C5.33331 9.51202 9.51199 5.33334 14.6666 5.33334C19.8213 5.33334 24 9.51202 24 14.6667C24 16.6502 23.3813 18.4891 22.3263 20.0011C22.289 20.0546 22.2949 20.1273 22.341 20.1734L26.195 24.0274C26.4554 24.2878 26.4554 24.7099 26.195 24.9702L24.9694 26.1959C24.709 26.4562 24.2869 26.4562 24.0266 26.1959L20.1724 22.3417ZM20.9336 14.6667C20.9336 18.1278 18.1278 20.9336 14.6666 20.9336C11.2055 20.9336 8.39972 18.1278 8.39972 14.6667C8.39972 11.2055 11.2055 8.39975 14.6666 8.39975C18.1278 8.39975 20.9336 11.2055 20.9336 14.6667Z" fill="currentColor"/>', IP = '<path d="M16.6667 10.3452C16.6667 10.8924 16.0439 11.2066 15.6038 10.8814L11.0766 7.5364C10.7159 7.26993 10.7159 6.73054 11.0766 6.46405L15.6038 3.11873C16.0439 2.79356 16.6667 3.10773 16.6667 3.6549V5.22682C16.6667 5.29746 16.7223 5.35579 16.7927 5.36066C22.6821 5.76757 27.3333 10.674 27.3333 16.6667C27.3333 22.9259 22.2592 28 16 28C9.96483 28 5.03145 23.2827 4.68601 17.3341C4.66466 16.9665 4.96518 16.6673 5.33339 16.6673H7.3334C7.70157 16.6673 7.99714 16.9668 8.02743 17.3337C8.36638 21.4399 11.8064 24.6667 16 24.6667C20.4183 24.6667 24 21.085 24 16.6667C24 12.5225 20.8483 9.11428 16.8113 8.70739C16.7337 8.69957 16.6667 8.76096 16.6667 8.83893V10.3452Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0879 19.679C17.4553 19.9195 17.8928 20.0398 18.4004 20.0398C18.9099 20.0398 19.3474 19.9205 19.7129 19.6818C20.0803 19.4413 20.3635 19.0938 20.5623 18.6392C20.7612 18.1847 20.8606 17.6373 20.8606 16.9972C20.8625 16.3608 20.764 15.8192 20.5652 15.3722C20.3663 14.9252 20.0822 14.5853 19.7129 14.3523C19.3455 14.1175 18.908 14 18.4004 14C17.8928 14 17.4553 14.1175 17.0879 14.3523C16.7224 14.5853 16.4402 14.9252 16.2413 15.3722C16.0443 15.8173 15.9449 16.3589 15.943 16.9972C15.9411 17.6354 16.0396 18.1818 16.2385 18.6364C16.4373 19.089 16.7205 19.4366 17.0879 19.679ZM19.1362 18.4262C18.9487 18.7349 18.7034 18.8892 18.4004 18.8892C18.1996 18.8892 18.0226 18.8211 17.8691 18.6847C17.7157 18.5464 17.5964 18.3372 17.5112 18.0568C17.4279 17.7765 17.3871 17.4233 17.389 16.9972C17.3909 16.3684 17.4847 15.9025 17.6703 15.5995C17.8559 15.2945 18.0993 15.1421 18.4004 15.1421C18.603 15.1421 18.7801 15.2093 18.9316 15.3438C19.0832 15.4782 19.2015 15.6828 19.2868 15.9574C19.372 16.2301 19.4146 16.5767 19.4146 16.9972C19.4165 17.6392 19.3237 18.1156 19.1362 18.4262Z" fill="currentColor"/> <path d="M13.7746 19.8978C13.8482 19.8978 13.9079 19.8381 13.9079 19.7644V14.2129C13.9079 14.1393 13.8482 14.0796 13.7746 14.0796H12.642C12.6171 14.0796 12.5927 14.0865 12.5716 14.0997L11.2322 14.9325C11.1931 14.9568 11.1693 14.9996 11.1693 15.0457V15.9497C11.1693 16.0539 11.2833 16.1178 11.3722 16.0635L12.464 15.396C12.4682 15.3934 12.473 15.3921 12.4779 15.3921C12.4926 15.3921 12.5045 15.404 12.5045 15.4187V19.7644C12.5045 19.8381 12.5642 19.8978 12.6378 19.8978H13.7746Z" fill="currentColor"/>', VP = '<path d="M16.6667 10.3452C16.6667 10.8924 16.0439 11.2066 15.6038 10.8814L11.0766 7.5364C10.7159 7.26993 10.7159 6.73054 11.0766 6.46405L15.6038 3.11873C16.0439 2.79356 16.6667 3.10773 16.6667 3.6549V5.22682C16.6667 5.29746 16.7223 5.35579 16.7927 5.36066C22.6821 5.76757 27.3333 10.674 27.3333 16.6667C27.3333 22.9259 22.2592 28 16 28C9.96483 28 5.03145 23.2827 4.68601 17.3341C4.66466 16.9665 4.96518 16.6673 5.33339 16.6673H7.3334C7.70157 16.6673 7.99714 16.9668 8.02743 17.3337C8.36638 21.4399 11.8064 24.6667 16 24.6667C20.4183 24.6667 24 21.085 24 16.6667C24 12.5225 20.8483 9.11428 16.8113 8.70739C16.7337 8.69957 16.6667 8.76096 16.6667 8.83893V10.3452Z" fill="currentColor"/> <path d="M13.9647 19.8182C14.0383 19.8182 14.098 19.7585 14.098 19.6849V14.1334C14.098 14.0597 14.0383 14 13.9647 14H12.8321C12.8072 14 12.7829 14.007 12.7617 14.0201L11.4223 14.8529C11.3832 14.8773 11.3594 14.9201 11.3594 14.9662V15.8702C11.3594 15.9743 11.4734 16.0383 11.5623 15.984L12.6541 15.3164C12.6583 15.3139 12.6631 15.3125 12.668 15.3125C12.6827 15.3125 12.6946 15.3244 12.6946 15.3391V19.6849C12.6946 19.7585 12.7543 19.8182 12.828 19.8182H13.9647Z" fill="currentColor"/> <path d="M17.2808 19.6676C17.6104 19.8211 17.9873 19.8978 18.4115 19.8978C18.8642 19.8978 19.2591 19.8106 19.5962 19.6364C19.9352 19.4603 20.1985 19.2178 20.386 18.9091C20.5753 18.6004 20.67 18.2462 20.67 17.8466C20.67 17.4773 20.5905 17.1497 20.4314 16.8637C20.2742 16.5777 20.0583 16.3542 19.7837 16.1932C19.511 16.0303 19.2003 15.9489 18.8519 15.9489C18.5772 15.9489 18.332 16.0019 18.1161 16.108C17.9064 16.21 17.7531 16.3393 17.6562 16.4958C17.6524 16.5019 17.6458 16.5057 17.6386 16.5057C17.6265 16.5057 17.6171 16.4953 17.6182 16.4833L17.7379 15.254C17.7445 15.1857 17.8019 15.1336 17.8706 15.1336H20.193C20.2666 15.1336 20.3263 15.0739 20.3263 15.0002V14.1334C20.3263 14.0597 20.2666 14 20.193 14H16.7164C16.6469 14 16.589 14.0534 16.5835 14.1226L16.3501 17.0168C16.3447 17.0848 16.3914 17.1459 16.4585 17.1585L17.4904 17.3522C17.5454 17.3625 17.6001 17.3366 17.6344 17.2923C17.7078 17.1974 17.804 17.1199 17.9229 17.0597C18.0744 16.9839 18.2344 16.947 18.403 16.9489C18.581 16.9489 18.7382 16.9887 18.8746 17.0682C19.0128 17.1459 19.1208 17.2548 19.1985 17.3949C19.278 17.5351 19.3168 17.6989 19.3149 17.8864C19.3168 18.0701 19.2789 18.233 19.2013 18.375C19.1236 18.5152 19.0166 18.6241 18.8803 18.7017C18.7439 18.7794 18.5877 18.8182 18.4115 18.8182C18.1861 18.8182 17.992 18.7538 17.8291 18.625C17.6993 18.5209 17.6177 18.3903 17.5841 18.2333C17.5693 18.1639 17.5122 18.108 17.4413 18.108H16.3404C16.2656 18.108 16.2049 18.1696 16.2119 18.244C16.2393 18.5373 16.3352 18.8007 16.4996 19.0341C16.6909 19.3031 16.9513 19.5142 17.2808 19.6676Z" fill="currentColor"/>', AP = '<path d="M16.6667 10.3452C16.6667 10.8924 16.0439 11.2066 15.6038 10.8814L11.0766 7.5364C10.7159 7.26993 10.7159 6.73054 11.0766 6.46405L15.6038 3.11873C16.0439 2.79356 16.6667 3.10773 16.6667 3.6549V5.22682C16.6667 5.29746 16.7223 5.35579 16.7927 5.36066C22.6821 5.76757 27.3333 10.674 27.3333 16.6667C27.3333 22.9259 22.2592 28 16 28C9.96483 28 5.03145 23.2827 4.68601 17.3341C4.66466 16.9665 4.96518 16.6673 5.33339 16.6673H7.3334C7.70157 16.6673 7.99714 16.9668 8.02743 17.3337C8.36638 21.4399 11.8064 24.6667 16 24.6667C20.4183 24.6667 24 21.085 24 16.6667C24 12.5225 20.8483 9.11428 16.8113 8.70739C16.7337 8.69957 16.6667 8.76096 16.6667 8.83893V10.3452Z" fill="currentColor"/> <path d="M11.5845 19.75C11.9273 19.9015 12.3203 19.9773 12.7635 19.9773C13.2181 19.9773 13.6205 19.9034 13.9709 19.7557C14.3232 19.6061 14.5978 19.4015 14.7948 19.1421C14.9936 18.8807 15.0931 18.5815 15.0931 18.2443C15.0949 17.8864 14.9804 17.5881 14.7493 17.3495C14.524 17.1149 14.1917 16.97 13.7524 16.9148C13.7393 16.9131 13.7294 16.9021 13.7294 16.8889C13.7294 16.876 13.7389 16.8651 13.7516 16.8631C14.0786 16.8115 14.3468 16.6819 14.5561 16.4745C14.772 16.2623 14.879 15.9925 14.8771 15.6648C14.8771 15.3485 14.7891 15.0654 14.6129 14.8154C14.4368 14.5635 14.1906 14.3646 13.8743 14.2188C13.558 14.0729 13.1915 14 12.7749 14C12.3563 14 11.9832 14.0748 11.6556 14.2245C11.3298 14.3741 11.0722 14.5815 10.8828 14.8466C10.7184 15.0752 10.6239 15.3353 10.5994 15.6268C10.5932 15.7007 10.6536 15.7614 10.7279 15.7614H11.8072C11.8794 15.7614 11.9367 15.7034 11.9525 15.633C11.9707 15.5522 12.0043 15.4785 12.0533 15.412C12.1271 15.3116 12.2266 15.2339 12.3516 15.179C12.4785 15.1241 12.6196 15.0966 12.7749 15.0966C12.9226 15.0966 13.0523 15.1241 13.1641 15.179C13.2777 15.2339 13.3658 15.3116 13.4283 15.412C13.4927 15.5104 13.5239 15.625 13.522 15.7557C13.5239 15.8902 13.4879 16.0095 13.4141 16.1137C13.3402 16.2159 13.237 16.2955 13.1044 16.3523C12.9737 16.4091 12.8222 16.4375 12.6499 16.4375H12.2179C12.1442 16.4375 12.0845 16.4972 12.0845 16.5709V17.3042C12.0845 17.3778 12.1442 17.4375 12.2179 17.4375H12.6499C12.8468 17.4375 13.0173 17.4669 13.1612 17.5256C13.3071 17.5843 13.4198 17.6667 13.4993 17.7728C13.5789 17.8788 13.6177 18 13.6158 18.1364C13.6177 18.2728 13.5826 18.394 13.5107 18.5C13.4387 18.6042 13.3383 18.6866 13.2095 18.7472C13.0826 18.8059 12.9359 18.8353 12.7692 18.8353C12.6025 18.8353 12.4539 18.8078 12.3232 18.7529C12.1925 18.6979 12.0893 18.6222 12.0135 18.5256C11.9638 18.461 11.9292 18.3903 11.9097 18.3135C11.8921 18.2444 11.8352 18.1875 11.7639 18.1875H10.6114C10.5372 18.1875 10.4767 18.2482 10.483 18.3221C10.5081 18.6178 10.6064 18.8825 10.7777 19.1165C10.9747 19.3854 11.2436 19.5966 11.5845 19.75Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7801 19.679C18.1476 19.9195 18.5851 20.0398 19.0926 20.0398C19.6021 20.0398 20.0396 19.9205 20.4051 19.6818C20.7726 19.4413 21.0557 19.0938 21.2546 18.6392C21.4534 18.1847 21.5529 17.6373 21.5529 16.9972C21.5548 16.3608 21.4563 15.8192 21.2574 15.3722C21.0585 14.9252 20.7744 14.5853 20.4051 14.3523C20.0377 14.1175 19.6002 14 19.0926 14C18.5851 14 18.1476 14.1175 17.7801 14.3523C17.4146 14.5853 17.1324 14.9252 16.9335 15.3722C16.7366 15.8173 16.6371 16.3589 16.6352 16.9972C16.6333 17.6354 16.7318 18.1818 16.9307 18.6364C17.1296 19.089 17.4127 19.4366 17.7801 19.679ZM19.8284 18.4262C19.6409 18.7349 19.3957 18.8892 19.0926 18.8892C18.8919 18.8892 18.7148 18.8211 18.5614 18.6847C18.408 18.5464 18.2887 18.3372 18.2034 18.0568C18.1201 17.7765 18.0794 17.4233 18.0813 16.9972C18.0832 16.3684 18.1769 15.9025 18.3625 15.5995C18.5481 15.2945 18.7915 15.1421 19.0926 15.1421C19.2953 15.1421 19.4724 15.2093 19.6239 15.3438C19.7754 15.4782 19.8938 15.6828 19.979 15.9574C20.0642 16.2301 20.1068 16.5767 20.1068 16.9972C20.1087 17.6392 20.0159 18.1156 19.8284 18.4262Z" fill="currentColor"/>', NP = '<path d="M15.6038 12.2148C16.0439 12.5399 16.6667 12.2257 16.6667 11.6786V10.1789C16.6667 10.1001 16.7351 10.0384 16.8134 10.0479C20.1116 10.4494 22.6667 13.2593 22.6667 16.6659C22.6667 20.3481 19.6817 23.3332 15.9995 23.3332C12.542 23.3332 9.69927 20.7015 9.36509 17.332C9.32875 16.9655 9.03371 16.6662 8.66548 16.6662L6.66655 16.6666C6.29841 16.6666 5.99769 16.966 6.02187 17.3334C6.36494 22.5454 10.7012 26.6667 16 26.6667C21.5228 26.6667 26 22.1895 26 16.6667C26 11.4103 21.9444 7.10112 16.7916 6.69758C16.7216 6.69209 16.6667 6.63396 16.6667 6.56372V4.98824C16.6667 4.44106 16.0439 4.12689 15.6038 4.45207L11.0765 7.79738C10.7159 8.06387 10.7159 8.60327 11.0766 8.86974L15.6038 12.2148Z" fill="currentColor"/>', RP = '<path d="M15.3333 10.3452C15.3333 10.8924 15.9561 11.2066 16.3962 10.8814L20.9234 7.5364C21.2841 7.26993 21.2841 6.73054 20.9235 6.46405L16.3962 3.11873C15.9561 2.79356 15.3333 3.10773 15.3333 3.6549V5.22682C15.3333 5.29746 15.2778 5.35579 15.2073 5.36066C9.31791 5.76757 4.66667 10.674 4.66667 16.6667C4.66667 22.9259 9.74078 28 16 28C22.0352 28 26.9686 23.2827 27.314 17.3341C27.3354 16.9665 27.0348 16.6673 26.6666 16.6673H24.6666C24.2984 16.6673 24.0029 16.9668 23.9726 17.3337C23.6336 21.4399 20.1937 24.6667 16 24.6667C11.5817 24.6667 8 21.085 8 16.6667C8 12.5225 11.1517 9.11428 15.1887 8.70739C15.2663 8.69957 15.3333 8.76096 15.3333 8.83893V10.3452Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0879 19.679C17.4553 19.9195 17.8928 20.0398 18.4004 20.0398C18.9099 20.0398 19.3474 19.9205 19.7129 19.6818C20.0803 19.4413 20.3635 19.0938 20.5623 18.6392C20.7612 18.1847 20.8606 17.6373 20.8606 16.9972C20.8625 16.3608 20.764 15.8192 20.5652 15.3722C20.3663 14.9252 20.0822 14.5853 19.7129 14.3523C19.3455 14.1175 18.908 14 18.4004 14C17.8928 14 17.4553 14.1175 17.0879 14.3523C16.7224 14.5853 16.4402 14.9252 16.2413 15.3722C16.0443 15.8173 15.9449 16.3589 15.943 16.9972C15.9411 17.6354 16.0396 18.1818 16.2385 18.6364C16.4373 19.089 16.7205 19.4366 17.0879 19.679ZM19.1362 18.4262C18.9487 18.7349 18.7034 18.8892 18.4004 18.8892C18.1996 18.8892 18.0225 18.8211 17.8691 18.6847C17.7157 18.5464 17.5964 18.3372 17.5112 18.0568C17.4278 17.7765 17.3871 17.4233 17.389 16.9972C17.3909 16.3684 17.4847 15.9025 17.6703 15.5995C17.8559 15.2945 18.0992 15.1421 18.4004 15.1421C18.603 15.1421 18.7801 15.2093 18.9316 15.3438C19.0831 15.4782 19.2015 15.6828 19.2867 15.9574C19.372 16.2301 19.4146 16.5767 19.4146 16.9972C19.4165 17.6392 19.3237 18.1156 19.1362 18.4262Z" fill="currentColor"/> <path d="M13.7746 19.8978C13.8482 19.8978 13.9079 19.8381 13.9079 19.7644V14.2129C13.9079 14.1393 13.8482 14.0796 13.7746 14.0796H12.642C12.6171 14.0796 12.5927 14.0865 12.5716 14.0997L11.2322 14.9325C11.1931 14.9568 11.1693 14.9996 11.1693 15.0457V15.9497C11.1693 16.0539 11.2833 16.1178 11.3722 16.0635L12.464 15.396C12.4682 15.3934 12.473 15.3921 12.4779 15.3921C12.4926 15.3921 12.5045 15.404 12.5045 15.4187V19.7644C12.5045 19.8381 12.5642 19.8978 12.6378 19.8978H13.7746Z" fill="currentColor"/>', HP = '<path d="M15.3333 10.3452C15.3333 10.8924 15.9561 11.2066 16.3962 10.8814L20.9234 7.5364C21.2841 7.26993 21.2841 6.73054 20.9234 6.46405L16.3962 3.11873C15.9561 2.79356 15.3333 3.10773 15.3333 3.6549V5.22682C15.3333 5.29746 15.2777 5.35579 15.2073 5.36066C9.3179 5.76757 4.66666 10.674 4.66666 16.6667C4.66666 22.9259 9.74076 28 16 28C22.0352 28 26.9686 23.2827 27.314 17.3341C27.3353 16.9665 27.0348 16.6673 26.6666 16.6673H24.6666C24.2984 16.6673 24.0029 16.9668 23.9726 17.3337C23.6336 21.4399 20.1936 24.6667 16 24.6667C11.5817 24.6667 7.99999 21.085 7.99999 16.6667C7.99999 12.5225 11.1517 9.11428 15.1887 8.70739C15.2663 8.69957 15.3333 8.76096 15.3333 8.83893V10.3452Z" fill="currentColor"/> <path d="M13.9647 19.8182C14.0383 19.8182 14.098 19.7585 14.098 19.6849V14.1334C14.098 14.0597 14.0383 14 13.9647 14H12.8321C12.8072 14 12.7828 14.007 12.7617 14.0201L11.4223 14.8529C11.3832 14.8773 11.3594 14.9201 11.3594 14.9662V15.8702C11.3594 15.9743 11.4734 16.0383 11.5622 15.984L12.6541 15.3164C12.6583 15.3139 12.6631 15.3125 12.668 15.3125C12.6827 15.3125 12.6946 15.3244 12.6946 15.3391V19.6849C12.6946 19.7585 12.7543 19.8182 12.8279 19.8182H13.9647Z" fill="currentColor"/> <path d="M17.2808 19.6676C17.6104 19.8211 17.9873 19.8978 18.4115 19.8978C18.8641 19.8978 19.259 19.8106 19.5962 19.6364C19.9352 19.4603 20.1984 19.2178 20.3859 18.9091C20.5753 18.6004 20.67 18.2462 20.67 17.8466C20.67 17.4773 20.5905 17.1497 20.4314 16.8637C20.2742 16.5777 20.0583 16.3542 19.7837 16.1932C19.5109 16.0303 19.2003 15.9489 18.8518 15.9489C18.5772 15.9489 18.3319 16.0019 18.116 16.108C17.9064 16.21 17.7531 16.3393 17.6562 16.4958C17.6524 16.5019 17.6457 16.5057 17.6386 16.5057C17.6265 16.5057 17.6171 16.4953 17.6182 16.4833L17.7378 15.254C17.7445 15.1857 17.8019 15.1336 17.8706 15.1336H20.1929C20.2666 15.1336 20.3263 15.0739 20.3263 15.0002V14.1334C20.3263 14.0597 20.2666 14 20.1929 14H16.7163C16.6468 14 16.589 14.0534 16.5834 14.1226L16.3501 17.0168C16.3446 17.0848 16.3914 17.1459 16.4584 17.1585L17.4903 17.3522C17.5454 17.3625 17.6001 17.3366 17.6343 17.2923C17.7078 17.1974 17.804 17.1199 17.9229 17.0597C18.0744 16.9839 18.2344 16.947 18.403 16.9489C18.581 16.9489 18.7382 16.9887 18.8746 17.0682C19.0128 17.1459 19.1208 17.2548 19.1984 17.3949C19.278 17.5351 19.3168 17.6989 19.3149 17.8864C19.3168 18.0701 19.2789 18.233 19.2013 18.375C19.1236 18.5152 19.0166 18.6241 18.8802 18.7017C18.7439 18.7794 18.5876 18.8182 18.4115 18.8182C18.1861 18.8182 17.992 18.7538 17.8291 18.625C17.6993 18.5209 17.6176 18.3903 17.5841 18.2333C17.5692 18.1639 17.5122 18.108 17.4413 18.108H16.3404C16.2656 18.108 16.2049 18.1696 16.2119 18.244C16.2393 18.5373 16.3352 18.8007 16.4996 19.0341C16.6909 19.3031 16.9513 19.5142 17.2808 19.6676Z" fill="currentColor"/>', OP = '<path d="M15.3334 10.3452C15.3334 10.8924 15.9561 11.2066 16.3962 10.8814L20.9235 7.5364C21.2841 7.26993 21.2841 6.73054 20.9235 6.46405L16.3962 3.11873C15.9561 2.79356 15.3334 3.10773 15.3334 3.6549V5.22682C15.3334 5.29746 15.2778 5.35579 15.2073 5.36066C9.31793 5.76757 4.66669 10.674 4.66669 16.6667C4.66669 22.9259 9.74079 28 16 28C22.0352 28 26.9686 23.2827 27.314 17.3341C27.3354 16.9665 27.0349 16.6673 26.6667 16.6673H24.6666C24.2985 16.6673 24.0029 16.9668 23.9726 17.3337C23.6337 21.4399 20.1937 24.6667 16 24.6667C11.5817 24.6667 8.00002 21.085 8.00002 16.6667C8.00002 12.5225 11.1517 9.11428 15.1887 8.70739C15.2663 8.69957 15.3334 8.76096 15.3334 8.83893V10.3452Z" fill="currentColor"/> <path d="M11.5845 19.75C11.9273 19.9015 12.3203 19.9773 12.7635 19.9773C13.2181 19.9773 13.6205 19.9034 13.9709 19.7557C14.3232 19.6061 14.5978 19.4015 14.7948 19.1421C14.9936 18.8807 15.0931 18.5815 15.0931 18.2443C15.095 17.8864 14.9804 17.5881 14.7493 17.3495C14.524 17.1149 14.1917 16.97 13.7524 16.9148C13.7393 16.9131 13.7294 16.9021 13.7294 16.8889C13.7294 16.876 13.7389 16.8651 13.7516 16.8631C14.0787 16.8115 14.3468 16.6819 14.5561 16.4745C14.772 16.2623 14.879 15.9925 14.8772 15.6648C14.8772 15.3485 14.7891 15.0654 14.6129 14.8154C14.4368 14.5635 14.1906 14.3646 13.8743 14.2188C13.558 14.0729 13.1915 14 12.7749 14C12.3563 14 11.9832 14.0748 11.6556 14.2245C11.3298 14.3741 11.0722 14.5815 10.8828 14.8466C10.7184 15.0752 10.6239 15.3353 10.5994 15.6268C10.5932 15.7007 10.6537 15.7614 10.7279 15.7614H11.8072C11.8794 15.7614 11.9367 15.7034 11.9525 15.633C11.9707 15.5522 12.0043 15.4785 12.0533 15.412C12.1272 15.3116 12.2266 15.2339 12.3516 15.179C12.4785 15.1241 12.6196 15.0966 12.7749 15.0966C12.9226 15.0966 13.0523 15.1241 13.1641 15.179C13.2777 15.2339 13.3658 15.3116 13.4283 15.412C13.4927 15.5104 13.5239 15.625 13.522 15.7557C13.5239 15.8902 13.4879 16.0095 13.4141 16.1137C13.3402 16.2159 13.237 16.2955 13.1044 16.3523C12.9737 16.4091 12.8222 16.4375 12.6499 16.4375H12.2179C12.1442 16.4375 12.0845 16.4972 12.0845 16.5709V17.3042C12.0845 17.3778 12.1442 17.4375 12.2179 17.4375H12.6499C12.8468 17.4375 13.0173 17.4669 13.1612 17.5256C13.3071 17.5843 13.4198 17.6667 13.4993 17.7728C13.5789 17.8788 13.6177 18 13.6158 18.1364C13.6177 18.2728 13.5826 18.394 13.5107 18.5C13.4387 18.6042 13.3383 18.6866 13.2095 18.7472C13.0826 18.8059 12.9359 18.8353 12.7692 18.8353C12.6025 18.8353 12.4539 18.8078 12.3232 18.7529C12.1925 18.6979 12.0893 18.6222 12.0135 18.5256C11.9638 18.461 11.9292 18.3903 11.9097 18.3135C11.8921 18.2444 11.8352 18.1875 11.7639 18.1875H10.6114C10.5372 18.1875 10.4767 18.2482 10.483 18.3221C10.5081 18.6178 10.6064 18.8825 10.7777 19.1165C10.9747 19.3854 11.2436 19.5966 11.5845 19.75Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7801 19.679C18.1476 19.9195 18.5851 20.0398 19.0926 20.0398C19.6021 20.0398 20.0396 19.9205 20.4051 19.6818C20.7726 19.4413 21.0557 19.0938 21.2546 18.6392C21.4534 18.1847 21.5529 17.6373 21.5529 16.9972C21.5548 16.3608 21.4563 15.8192 21.2574 15.3722C21.0585 14.9252 20.7745 14.5853 20.4051 14.3523C20.0377 14.1175 19.6002 14 19.0926 14C18.5851 14 18.1476 14.1175 17.7801 14.3523C17.4146 14.5853 17.1324 14.9252 16.9335 15.3722C16.7366 15.8173 16.6371 16.3589 16.6352 16.9972C16.6334 17.6354 16.7318 18.1818 16.9307 18.6364C17.1296 19.089 17.4127 19.4366 17.7801 19.679ZM19.8284 18.4262C19.6409 18.7349 19.3957 18.8892 19.0926 18.8892C18.8919 18.8892 18.7148 18.8211 18.5614 18.6847C18.408 18.5464 18.2887 18.3372 18.2034 18.0568C18.1201 17.7765 18.0794 17.4233 18.0813 16.9972C18.0832 16.3684 18.1769 15.9025 18.3625 15.5995C18.5481 15.2945 18.7915 15.1421 19.0926 15.1421C19.2953 15.1421 19.4724 15.2093 19.6239 15.3438C19.7754 15.4782 19.8938 15.6828 19.979 15.9574C20.0642 16.2301 20.1068 16.5767 20.1068 16.9972C20.1087 17.6392 20.0159 18.1156 19.8284 18.4262Z" fill="currentColor"/>', DP = '<path d="M16.4167 12.2148C15.9766 12.5399 15.3538 12.2257 15.3538 11.6786V10.1789C15.3538 10.1001 15.2854 10.0384 15.2072 10.0479C11.9089 10.4494 9.35384 13.2593 9.35384 16.6659C9.35384 20.3481 12.3389 23.3332 16.0211 23.3332C19.4785 23.3332 22.3212 20.7015 22.6554 17.332C22.6918 16.9655 22.9868 16.6662 23.355 16.6662L25.354 16.6666C25.7221 16.6666 26.0228 16.966 25.9986 17.3334C25.6556 22.5454 21.3193 26.6667 16.0205 26.6667C10.4977 26.6667 6.02051 22.1895 6.02051 16.6667C6.02051 11.4103 10.0761 7.10112 15.2289 6.69758C15.2989 6.69209 15.3538 6.63396 15.3538 6.56372V4.98824C15.3538 4.44106 15.9766 4.12689 16.4167 4.45207L20.944 7.79738C21.3046 8.06387 21.3046 8.60327 20.9439 8.86974L16.4167 12.2148Z" fill="currentColor"/>', _P = '<path d="M26.269 16.5634C26.7996 16.3313 26.7996 15.6688 26.269 15.4367L6.37817 6.73581C5.76274 6.4666 5.10768 7.03376 5.40897 7.57494L8.74776 13.5721C8.76512 13.6033 8.79425 13.6262 8.82864 13.6357L16.8708 15.8653C17.001 15.9014 17.0011 16.086 16.8709 16.1222L8.83101 18.3599C8.79668 18.3694 8.7676 18.3923 8.75026 18.4235L5.40897 24.4251C5.10768 24.9663 5.76274 25.5334 6.37817 25.2642L26.269 16.5634Z" fill="currentColor"/>', FP = '<path d="M18.6669 10.4001C18.6669 10.7683 18.3684 11.0667 18.0002 11.0667H16.2668C15.8987 11.0667 15.6002 10.7683 15.6002 10.4001V9.86674C15.6002 9.7931 15.5405 9.73341 15.4669 9.73341H5.99998C5.63179 9.73341 5.33331 9.43493 5.33331 9.06674V7.33341C5.33331 6.96522 5.63179 6.66674 5.99998 6.66674H15.4669C15.5405 6.66674 15.6002 6.60704 15.6002 6.53341V6.00007C15.6002 5.63188 15.8987 5.3334 16.2668 5.3334H18.0002C18.3684 5.3334 18.6669 5.63188 18.6669 6.00007V10.4001Z" fill="currentColor"/> <path d="M11.3334 18.8668C11.7016 18.8668 12.0001 18.5683 12.0001 18.2001V13.8001C12.0001 13.4319 11.7016 13.1335 11.3334 13.1335H9.60006C9.23187 13.1335 8.93339 13.4319 8.93339 13.8001V14.3335C8.93339 14.4071 8.8737 14.4668 8.80006 14.4668H6.00006C5.63187 14.4668 5.33339 14.7653 5.33339 15.1335V16.8668C5.33339 17.235 5.63187 17.5335 6.00006 17.5335H8.80006C8.8737 17.5335 8.93339 17.5932 8.93339 17.6668V18.2001C8.93339 18.5683 9.23187 18.8668 9.60006 18.8668H11.3334Z" fill="currentColor"/> <path d="M18.6667 26.0001C18.6667 26.3683 18.3682 26.6668 18 26.6668H16.2667C15.8985 26.6668 15.6 26.3683 15.6 26.0001V25.4668C15.6 25.3931 15.5403 25.3334 15.4667 25.3334H6.00014C5.63195 25.3334 5.33348 25.0349 5.33348 24.6668V22.9334C5.33348 22.5652 5.63195 22.2668 6.00014 22.2668H15.4667C15.5403 22.2668 15.6 22.2071 15.6 22.1334V21.6001C15.6 21.2319 15.8985 20.9334 16.2667 20.9334H18C18.3682 20.9334 18.6667 21.2319 18.6667 21.6001V26.0001Z" fill="currentColor"/> <path d="M22 24.6668C22 25.0349 22.2985 25.3334 22.6667 25.3334H26.0001C26.3683 25.3334 26.6668 25.0349 26.6668 24.6668V22.9334C26.6668 22.5652 26.3683 22.2668 26.0001 22.2668H22.6667C22.2985 22.2668 22 22.5652 22 22.9334V24.6668Z" fill="currentColor"/> <path d="M16.0001 17.5335C15.6319 17.5335 15.3334 17.235 15.3334 16.8668V15.1335C15.3334 14.7653 15.6319 14.4668 16.0001 14.4668H26.0001C26.3683 14.4668 26.6667 14.7653 26.6667 15.1335V16.8668C26.6667 17.235 26.3683 17.5335 26.0001 17.5335H16.0001Z" fill="currentColor"/> <path d="M22.0002 9.06674C22.0002 9.43493 22.2987 9.73341 22.6669 9.73341H26C26.3682 9.73341 26.6666 9.43493 26.6666 9.06674V7.3334C26.6666 6.96521 26.3682 6.66674 26 6.66674H22.6669C22.2987 6.66674 22.0002 6.96522 22.0002 7.33341V9.06674Z" fill="currentColor"/>', qP = '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99998 5.33333C7.42265 5.33333 5.33331 7.42267 5.33331 9.99999C5.33331 12.5773 7.42265 14.6667 9.99998 14.6667L22 14.6667C24.5773 14.6667 26.6666 12.5774 26.6666 10.0001C26.6666 7.42275 24.5773 5.33341 22 5.33341L10.0278 5.33341L9.99998 5.33333ZM14.2387 12.4C14.135 12.4 14.0704 12.2865 14.1192 12.195C14.4686 11.5407 14.6666 10.7935 14.6666 9.99999C14.6666 9.20651 14.4686 8.45929 14.1193 7.80504C14.0704 7.71359 14.135 7.60006 14.2387 7.60006L22 7.60006C23.3255 7.60006 24.4 8.67458 24.4 10.0001C24.4 11.3255 23.3255 12.4001 22 12.4001L14.2387 12.4ZM12.4 9.99993C12.4 11.3254 11.3255 12.3999 10 12.3999C8.67451 12.3999 7.6 11.3254 7.6 9.99993C7.6 8.67445 8.67451 7.59993 10 7.59993C11.3255 7.59993 12.4 8.67445 12.4 9.99993Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33331 22C5.33331 24.5773 7.42265 26.6667 9.99998 26.6667L22 26.6667C24.5773 26.6667 26.6666 24.5773 26.6666 22C26.6666 19.4227 24.5773 17.3333 22 17.3333H9.99998C7.42265 17.3333 5.33331 19.4227 5.33331 22ZM24.4 22C24.4 23.3255 23.3255 24.4 22 24.4C20.6745 24.4 19.6 23.3255 19.6 22C19.6 20.6745 20.6745 19.6 22 19.6C23.3255 19.6 24.4 20.6745 24.4 22Z" fill="currentColor"/>', ZP = '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5722 5.33333C13.2429 5.33333 12.9629 5.57382 12.9132 5.89938L12.4063 9.21916C12.4 9.26058 12.3746 9.29655 12.3378 9.31672C12.2387 9.37118 12.1409 9.42779 12.0444 9.48648C12.0086 9.5083 11.9646 9.51242 11.9255 9.49718L8.79572 8.27692C8.48896 8.15732 8.14083 8.27958 7.9762 8.56472L5.5491 12.7686C5.38444 13.0538 5.45271 13.4165 5.70981 13.6223L8.33308 15.7225C8.3658 15.7487 8.38422 15.7887 8.38331 15.8306C8.38209 15.8867 8.38148 15.9429 8.38148 15.9993C8.38148 16.0558 8.3821 16.1121 8.38332 16.1684C8.38423 16.2102 8.36582 16.2503 8.33313 16.2765L5.7103 18.3778C5.45334 18.5836 5.38515 18.9462 5.54978 19.2314L7.97688 23.4352C8.14155 23.7205 8.48981 23.8427 8.79661 23.723L11.926 22.5016C11.9651 22.4864 12.009 22.4905 12.0449 22.5123C12.1412 22.5709 12.2388 22.6274 12.3378 22.6818C12.3745 22.7019 12.4 22.7379 12.4063 22.7793L12.9132 26.0993C12.9629 26.4249 13.2429 26.6654 13.5722 26.6654H18.4264C18.7556 26.6654 19.0356 26.425 19.0854 26.0995L19.5933 22.7801C19.5997 22.7386 19.6252 22.7027 19.6619 22.6825C19.7614 22.6279 19.8596 22.5711 19.9564 22.5121C19.9923 22.4903 20.0362 22.4862 20.0754 22.5015L23.2035 23.7223C23.5103 23.842 23.8585 23.7198 24.0232 23.4346L26.4503 19.2307C26.6149 18.9456 26.5467 18.583 26.2898 18.3771L23.6679 16.2766C23.6352 16.2504 23.6168 16.2104 23.6177 16.1685C23.619 16.1122 23.6196 16.0558 23.6196 15.9993C23.6196 15.9429 23.619 15.8866 23.6177 15.8305C23.6168 15.7886 23.6353 15.7486 23.668 15.7224L26.2903 13.623C26.5474 13.4172 26.6156 13.0544 26.451 12.7692L24.0239 8.56537C23.8592 8.28023 23.5111 8.15797 23.2043 8.27757L20.0758 9.49734C20.0367 9.51258 19.9927 9.50846 19.9569 9.48664C19.8599 9.42762 19.7616 9.37071 19.6618 9.31596C19.6251 9.2958 19.5997 9.25984 19.5933 9.21843L19.0854 5.89915C19.0356 5.57369 18.7556 5.33333 18.4264 5.33333H13.5722ZM16.0001 20.2854C18.3672 20.2854 20.2862 18.3664 20.2862 15.9993C20.2862 13.6322 18.3672 11.7132 16.0001 11.7132C13.6329 11.7132 11.714 13.6322 11.714 15.9993C11.714 18.3664 13.6329 20.2854 16.0001 20.2854Z" fill="currentColor"/>', jP = '<path d="M18.236 8.78524C17.7959 8.46009 17.1732 8.77427 17.1732 9.32143V12.3798C17.1732 12.4506 17.118 12.5089 17.0474 12.5135C15.5617 12.6091 14.0334 12.9224 12.5206 13.473C6.93931 15.5045 3.27299 20.1452 3.12081 24.7693C3.11654 24.899 3.28271 24.9521 3.36094 24.8486C5.63689 21.8364 9.7882 19.751 14.6002 19.5178C14.606 19.5175 14.6106 19.5127 14.6106 19.5069C14.6106 19.5009 14.6155 19.496 14.6215 19.496H17.0398C17.1135 19.496 17.1732 19.5557 17.1732 19.6293V22.6784C17.1732 23.2256 17.796 23.5398 18.236 23.2146L27.2746 16.5358C27.6352 16.2693 27.6352 15.7299 27.2745 15.4634L18.236 8.78524Z" fill="currentColor"/>', BP = '<path d="M21.2204 11.3458C21.2666 11.3212 21.3229 11.3262 21.3652 11.3572C21.9167 11.7613 22.5972 12 23.3333 12C25.1743 12 26.6666 10.5076 26.6666 8.66665C26.6666 6.8257 25.1743 5.33331 23.3333 5.33331C21.4924 5.33331 20 6.8257 20 8.66665C20 8.73806 20.0022 8.80896 20.0066 8.87926C20.01 8.93275 19.9826 8.98379 19.9353 9.00895L10.6918 13.9238C10.6468 13.9477 10.5924 13.9438 10.5504 13.915C10.0145 13.5472 9.36571 13.332 8.66665 13.332C6.8257 13.332 5.33331 14.8244 5.33331 16.6653C5.33331 18.5063 6.8257 19.9987 8.66665 19.9987C9.41311 19.9987 10.1023 19.7533 10.6579 19.3388C10.6974 19.3093 10.7498 19.3026 10.7949 19.3227L19.9243 23.3873C19.9712 23.4083 20.0017 23.4545 20.0044 23.5059C20.0942 25.2666 21.5502 26.6666 23.3333 26.6666C25.1743 26.6666 26.6666 25.1743 26.6666 23.3333C26.6666 21.4924 25.1743 20 23.3333 20C22.4593 20 21.6639 20.3363 21.0695 20.8866C21.0294 20.9237 20.9711 20.9344 20.9212 20.9122L12.0754 16.9738C12.0238 16.9508 11.9925 16.8977 11.9954 16.8412C11.9984 16.783 12 16.7243 12 16.6653C12 16.5598 11.9951 16.4553 11.9855 16.3522C11.9804 16.2974 12.0078 16.2442 12.0565 16.2184L21.2204 11.3458Z" fill="currentColor"/>', GP = '<path d="M22.6666 6.18871C22.6666 5.64155 23.2894 5.32737 23.7295 5.65252L28.2567 8.99753C28.6174 9.26401 28.6174 9.8034 28.2568 10.0699L23.7295 13.4152C23.2894 13.7404 22.6666 13.4262 22.6666 12.879V11.1998C22.6666 11.1262 22.607 11.0665 22.5333 11.0665H21.3333C18.6094 11.0665 16.3997 13.2748 16.3997 16.0001C16.3997 18.7253 18.6094 20.9336 21.3333 20.9336H22.5333C22.607 20.9336 22.6666 20.874 22.6666 20.8003V19.121C22.6666 18.5738 23.2894 18.2597 23.7295 18.5848L28.2567 21.9298C28.6174 22.1963 28.6174 22.7357 28.2568 23.0022L23.7295 26.3475C23.2894 26.6727 22.6666 26.3585 22.6666 25.8113V24.1334C22.6666 24.0597 22.607 24.0001 22.5333 24.0001H21.3333C18.6227 24.0001 16.2268 22.6517 14.7798 20.5891C14.725 20.5111 14.6082 20.5111 14.5535 20.5891C13.1065 22.6517 10.7106 24.0001 7.99998 24.0001H5.99998C5.63179 24.0001 5.33331 23.7016 5.33331 23.3334V21.6003C5.33331 21.2321 5.63179 20.9336 5.99998 20.9336H7.99998C10.7239 20.9336 12.9336 18.7253 12.9336 16.0001C12.9336 13.2748 10.7239 11.0665 7.99998 11.0665H5.99998C5.63179 11.0665 5.33331 10.768 5.33331 10.3998V8.66672C5.33331 8.29853 5.63179 8.00005 5.99998 8.00005H7.99998C10.7106 8.00005 13.1065 9.34843 14.5535 11.411C14.6082 11.489 14.725 11.489 14.7798 11.411C16.2268 9.34843 18.6227 8.00005 21.3333 8.00005H22.5333C22.607 8.00005 22.6666 7.94036 22.6666 7.86672V6.18871Z" fill="currentColor"/> <path d="M28.6666 18.0001C29.7712 18.0001 30.6666 17.1046 30.6666 16.0001C30.6666 14.8955 29.7712 14.0001 28.6666 14.0001C27.5621 14.0001 26.6666 14.8955 26.6666 16.0001C26.6666 17.1046 27.5621 18.0001 28.6666 18.0001Z" fill="currentColor"/>', UP = '<path d="M23.7295 5.65252C23.2894 5.32737 22.6667 5.64155 22.6667 6.18871V7.86672C22.6667 7.94036 22.607 8.00005 22.5333 8.00005H21.3333C18.6228 8.00005 16.2268 9.34843 14.7798 11.411C14.7251 11.489 14.6083 11.489 14.5536 11.411C13.1065 9.34843 10.7106 8.00005 8.00001 8.00005H6.00001C5.63182 8.00005 5.33334 8.29853 5.33334 8.66672V10.3998C5.33334 10.768 5.63182 11.0665 6.00001 11.0665H8.00001C10.724 11.0665 12.9336 13.2748 12.9336 16.0001C12.9336 18.7253 10.724 20.9336 8.00001 20.9336H6.00001C5.63182 20.9336 5.33334 21.2321 5.33334 21.6003V23.3334C5.33334 23.7016 5.63182 24.0001 6.00001 24.0001H8.00001C10.7106 24.0001 13.1065 22.6517 14.5536 20.5891C14.6083 20.5111 14.7251 20.5111 14.7798 20.5891C16.2268 22.6517 18.6228 24.0001 21.3333 24.0001H22.5333C22.607 24.0001 22.6667 24.0597 22.6667 24.1334V25.8113C22.6667 26.3585 23.2895 26.6727 23.7295 26.3475L28.2568 23.0022C28.6175 22.7357 28.6174 22.1963 28.2568 21.9298L23.7295 18.5848C23.2894 18.2597 22.6667 18.5738 22.6667 19.121V20.8003C22.6667 20.874 22.607 20.9336 22.5333 20.9336H21.3333C18.6094 20.9336 16.3997 18.7253 16.3997 16.0001C16.3997 13.2748 18.6094 11.0665 21.3333 11.0665H22.5333C22.607 11.0665 22.6667 11.1262 22.6667 11.1998V12.879C22.6667 13.4262 23.2895 13.7404 23.7295 13.4152L28.2568 10.0699C28.6175 9.8034 28.6174 9.26401 28.2568 8.99753L23.7295 5.65252Z" fill="currentColor"/>', WP = '<path d="M8.66667 8C8.29848 8 8 8.29848 8 8.66667V23.3333C8 23.7015 8.29848 24 8.66667 24H23.3333C23.7015 24 24 23.7015 24 23.3333V8.66667C24 8.29848 23.7015 8 23.3333 8H8.66667Z" fill="currentColor"/>', KP = '<path d="M14.6667 17.3333C14.6667 16.9651 14.9652 16.6667 15.3333 16.6667H20.6667C21.0349 16.6667 21.3333 16.9651 21.3333 17.3333V18.6667C21.3333 19.0349 21.0349 19.3333 20.6667 19.3333H15.3333C14.9652 19.3333 14.6667 19.0349 14.6667 18.6667V17.3333Z" fill="currentColor"/> <path d="M11.3333 12C10.9652 12 10.6667 12.2985 10.6667 12.6667V14C10.6667 14.3682 10.9652 14.6667 11.3333 14.6667H16.6667C17.0349 14.6667 17.3333 14.3682 17.3333 14V12.6667C17.3333 12.2985 17.0349 12 16.6667 12H11.3333Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33334 7.33334C5.33334 6.96515 5.63182 6.66667 6.00001 6.66667H26C26.3682 6.66667 26.6667 6.96515 26.6667 7.33334V24C26.6667 24.3682 26.3682 24.6667 26 24.6667H24.1333C24.0597 24.6667 24 24.7264 24 24.8V27.3452C24 27.8924 23.3772 28.2065 22.9372 27.8814L18.6216 24.6928C18.5986 24.6758 18.5709 24.6667 18.5423 24.6667H6.00001C5.63182 24.6667 5.33334 24.3682 5.33334 24V7.33334ZM8.66668 9.33334C8.29849 9.33334 8.00001 9.63181 8.00001 10V21.3333C8.00001 21.7015 8.29849 22 8.66668 22H23.3333C23.7015 22 24 21.7015 24 21.3333V10C24 9.63182 23.7015 9.33334 23.3333 9.33334H8.66668Z" fill="currentColor"/>', zP = '<path d="M15.332 7.33333C14.9639 7.33333 14.6654 7.03486 14.6654 6.66667V4.66667C14.6654 4.29848 14.9639 4 15.332 4H16.6654C17.0336 4 17.332 4.29848 17.332 4.66667V6.66667C17.332 7.03486 17.0336 7.33333 16.6654 7.33333H15.332Z" fill="currentColor"/> <path d="M15.332 28C14.9639 28 14.6654 27.7015 14.6654 27.3333V25.3333C14.6654 24.9651 14.9639 24.6667 15.332 24.6667H16.6654C17.0336 24.6667 17.332 24.9651 17.332 25.3333V27.3333C17.332 27.7015 17.0336 28 16.6654 28H15.332Z" fill="currentColor"/> <path d="M7.24952 12.4883C7.56838 12.6724 7.97611 12.5631 8.1602 12.2443L8.82687 11.0896C9.01096 10.7707 8.90171 10.363 8.58285 10.1789L6.8508 9.17888C6.53194 8.99479 6.12421 9.10404 5.94012 9.4229L5.27345 10.5776C5.08935 10.8965 5.1986 11.3042 5.51747 11.4883L7.24952 12.4883Z" fill="currentColor"/> <path d="M26.0581 22.5776C25.874 22.8965 25.4662 23.0057 25.1474 22.8216L23.4153 21.8216C23.0965 21.6375 22.9872 21.2298 23.1713 20.9109L23.838 19.7562C24.0221 19.4374 24.4298 19.3281 24.7487 19.5122L26.4807 20.5122C26.7996 20.6963 26.9088 21.104 26.7247 21.4229L26.0581 22.5776Z" fill="currentColor"/> <path d="M8.58285 21.8216C8.90171 21.6375 9.01096 21.2298 8.82687 20.9109L8.1602 19.7562C7.9761 19.4374 7.56838 19.3281 7.24952 19.5122L5.51747 20.5122C5.1986 20.6963 5.08935 21.104 5.27345 21.4229L5.94012 22.5776C6.12421 22.8965 6.53194 23.0057 6.8508 22.8216L8.58285 21.8216Z" fill="currentColor"/> <path d="M26.7247 10.5776C26.9088 10.8965 26.7996 11.3042 26.4807 11.4883L24.7487 12.4883C24.4298 12.6724 24.0221 12.5631 23.838 12.2443L23.1713 11.0896C22.9872 10.7707 23.0965 10.363 23.4153 10.1789L25.1474 9.17888C25.4662 8.99478 25.874 9.10403 26.0581 9.4229L26.7247 10.5776Z" fill="currentColor"/> <path d="M16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10Z" fill="currentColor"/>', YP = '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.33333 7.33334C5.33333 6.96515 5.63181 6.66667 5.99999 6.66667H26C26.3682 6.66667 26.6667 6.96515 26.6667 7.33334V24.6667C26.6667 25.0349 26.3682 25.3333 26 25.3333H5.99999C5.63181 25.3333 5.33333 25.0349 5.33333 24.6667V7.33334ZM7.99999 10C7.99999 9.63182 8.29847 9.33334 8.66666 9.33334H19.8667C19.9403 9.33334 20 9.39303 20 9.46667V22.5333C20 22.607 19.9403 22.6667 19.8667 22.6667H8.66666C8.29847 22.6667 7.99999 22.3682 7.99999 22V10Z" fill="currentColor"/>', QP = '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.33334 7.33334C5.33334 6.96515 5.63181 6.66667 6 6.66667H26C26.3682 6.66667 26.6667 6.96515 26.6667 7.33334V24.6667C26.6667 25.0349 26.3682 25.3333 26 25.3333H6C5.63181 25.3333 5.33334 25.0349 5.33334 24.6667V7.33334ZM8 10C8 9.63182 8.29848 9.33334 8.66667 9.33334H17.2C17.2736 9.33334 17.3333 9.39303 17.3333 9.46667V22.5333C17.3333 22.607 17.2736 22.6667 17.2 22.6667H8.66667C8.29848 22.6667 8 22.3682 8 22V10ZM20 22.5333C20 22.607 20.0597 22.6667 20.1333 22.6667H23.3333C23.7015 22.6667 24 22.3682 24 22V10C24 9.63182 23.7015 9.33334 23.3333 9.33334H20.1333C20.0597 9.33334 20 9.39303 20 9.46667V22.5333Z" fill="currentColor"/>', XP = '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.0774 7.34581V20.8132C21.1029 21.0075 21.0461 21.2113 20.907 21.3638C20.865 21.4114 20.8166 21.4529 20.763 21.4869L12.4613 27.7302C11.4972 28.4553 10.1559 27.618 10.3539 26.4147L11.1225 21.7442C11.1358 21.663 11.0732 21.5892 10.9909 21.5892H5.33411C4.50479 21.5892 3.87666 20.8269 4.02118 19.9958L6.1438 7.78785C6.2565 7.13969 6.80998 6.6673 7.45673 6.6673L20.4108 6.6673C20.779 6.6673 21.0774 6.97108 21.0774 7.34581ZM14.2638 19.0776C14.2772 18.9964 14.2145 18.9226 14.1323 18.9226H7.07297C6.9902 18.9226 6.92743 18.8479 6.9416 18.7664L8.56244 9.44446C8.57354 9.38059 8.62897 9.33396 8.6938 9.33396L18.2774 9.33397C18.3511 9.33397 18.4108 9.39366 18.4108 9.4673V19.8527C18.4108 19.8946 18.3911 19.9341 18.3576 19.9593L13.7857 23.3976C13.6896 23.4699 13.5545 23.388 13.574 23.2694L14.2638 19.0776Z" fill="currentColor"/> <path d="M23.3333 20.6621C23.3333 21.0303 23.6318 21.3288 24 21.3288H26C26.3682 21.3288 26.6667 21.0303 26.6667 20.6621V7.33398C26.6667 6.96579 26.3682 6.66732 26 6.66732H24C23.6318 6.66732 23.3333 6.96579 23.3333 7.33398V20.6621Z" fill="currentColor"/>', JP = '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9226 24.6542V11.1868C10.8971 10.9925 10.954 10.7887 11.093 10.6362C11.135 10.5886 11.1834 10.5471 11.237 10.5131L19.5387 4.26976C20.5028 3.54469 21.8441 4.38199 21.6461 5.5853L20.8775 10.2558C20.8642 10.337 20.9268 10.4108 21.0091 10.4108H26.6659C27.4952 10.4108 28.1233 11.1731 27.9788 12.0042L25.8562 24.2121C25.7435 24.8603 25.19 25.3327 24.5433 25.3327L11.5892 25.3327C11.221 25.3327 10.9226 25.0289 10.9226 24.6542ZM17.7362 12.9224C17.7228 13.0036 17.7855 13.0774 17.8677 13.0774H24.927C25.0098 13.0774 25.0726 13.1521 25.0584 13.2336L23.4376 22.5555C23.4265 22.6194 23.371 22.666 23.3062 22.666L13.7226 22.666C13.6489 22.666 13.5892 22.6063 13.5892 22.5327V12.1473C13.5892 12.1054 13.6089 12.0659 13.6424 12.0407L18.2143 8.60242C18.3104 8.53015 18.4455 8.61198 18.426 8.73063L17.7362 12.9224Z" fill="currentColor"/> <path d="M8.66666 11.3379C8.66666 10.9697 8.36818 10.6712 7.99999 10.6712H5.99999C5.63181 10.6712 5.33333 10.9697 5.33333 11.3379V24.666C5.33333 25.0342 5.6318 25.3327 5.99999 25.3327H7.99999C8.36818 25.3327 8.66666 25.0342 8.66666 24.666L8.66666 11.3379Z" fill="currentColor"/>', eM = '<path d="M14.6666 16.6667C14.6666 17.0349 14.9651 17.3334 15.3333 17.3334H16.6666C17.0348 17.3334 17.3333 17.0349 17.3333 16.6667V11.3334C17.3333 10.9652 17.0348 10.6667 16.6666 10.6667H15.3333C14.9651 10.6667 14.6666 10.9652 14.6666 11.3334V16.6667Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.99969C11.6318 1.99969 11.3333 2.29817 11.3333 2.66636V3.99969C11.3333 4.36788 11.6318 4.66636 12 4.66636H14.5333C14.6069 4.66636 14.6666 4.72606 14.6666 4.79969V5.29814C14.6666 5.3654 14.6162 5.42208 14.5495 5.43114C9.3446 6.13878 5.33331 10.601 5.33331 16C5.33331 21.8911 10.1089 26.6667 16 26.6667C21.891 26.6667 26.6666 21.8911 26.6666 16C26.6666 10.601 22.6554 6.13878 17.4504 5.43114C17.3838 5.42208 17.3333 5.3654 17.3333 5.29814V4.7997C17.3333 4.72606 17.393 4.66636 17.4666 4.66636H20C20.3682 4.66636 20.6666 4.36788 20.6666 3.99969V2.66636C20.6666 2.29817 20.3682 1.99969 20 1.99969H12ZM24 16C24 20.4183 20.4183 24 16 24C11.5817 24 7.99998 20.4183 7.99998 16C7.99998 11.5817 11.5817 8.00002 16 8.00002C20.4183 8.00002 24 11.5817 24 16Z" fill="currentColor"/>', tM = '<path d="M12 14C12 13.6318 12.2985 13.3333 12.6667 13.3333H15.3333C15.7015 13.3333 16 13.6318 16 14V15.3333C16 15.7015 15.7015 16 15.3333 16H12.6667C12.2985 16 12 15.7015 12 15.3333V14Z" fill="currentColor"/> <path d="M12 19.3333C12 18.9651 12.2985 18.6667 12.6667 18.6667H19.3333C19.7015 18.6667 20 18.9651 20 19.3333V20.6667C20 21.0349 19.7015 21.3333 19.3333 21.3333H12.6667C12.2985 21.3333 12 21.0349 12 20.6667V19.3333Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33332 5.33333C6.96513 5.33333 6.66666 5.63181 6.66666 5.99999V26C6.66666 26.3682 6.96513 26.6667 7.33332 26.6667H24.6667C25.0348 26.6667 25.3333 26.3682 25.3333 26V13.3892C25.3333 13.3539 25.3193 13.32 25.2943 13.295L17.3724 5.37238C17.3474 5.34738 17.3135 5.33333 17.2781 5.33333H7.33332ZM9.99999 7.99999H17.2C17.2736 7.99999 17.3333 8.05969 17.3333 8.13333V12.6667C17.3333 13.0349 17.6318 13.3333 18 13.3333H22.5333C22.607 13.3333 22.6667 13.393 22.6667 13.4667V23.3333C22.6667 23.7015 22.3682 24 22 24H9.99999C9.6318 24 9.33332 23.7015 9.33332 23.3333V8.66666C9.33332 8.29847 9.6318 7.99999 9.99999 7.99999Z" fill="currentColor"/>', sM = '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.33334 6.00001C5.33334 5.63182 5.63182 5.33334 6.00001 5.33334H26C26.3682 5.33334 26.6667 5.63182 26.6667 6.00001V20.6667C26.6667 21.0349 26.3682 21.3333 26 21.3333H6.00001C5.63182 21.3333 5.33334 21.0349 5.33334 20.6667V6.00001ZM8.40008 9.06634C8.40008 8.69815 8.69855 8.39967 9.06674 8.39967H22.9339C23.3021 8.39967 23.6006 8.69815 23.6006 9.06634V17.6002C23.6006 17.9684 23.3021 18.2669 22.9339 18.2669H9.06674C8.69855 18.2669 8.40008 17.9684 8.40008 17.6002V9.06634Z" fill="currentColor"/> <path d="M11.3333 23.9999C10.9652 23.9999 10.6667 24.2984 10.6667 24.6666V25.9999C10.6667 26.3681 10.9652 26.6666 11.3333 26.6666H20.6667C21.0349 26.6666 21.3333 26.3681 21.3333 25.9999V24.6666C21.3333 24.2984 21.0349 23.9999 20.6667 23.9999H11.3333Z" fill="currentColor"/>', nM = '<path d="M16 16C18.9455 16 21.3333 13.6122 21.3333 10.6666C21.3333 7.72113 18.9455 5.33331 16 5.33331C13.0545 5.33331 10.6667 7.72113 10.6667 10.6666C10.6667 13.6122 13.0545 16 16 16Z" fill="currentColor"/> <path d="M11.3333 18C8.38781 18 6 20.3878 6 23.3333V26.5333C6 26.607 6.0597 26.6666 6.13333 26.6666H9.2C9.27364 26.6666 9.33333 26.607 9.33333 26.5333V24C9.33333 22.5272 10.5272 21.3333 12 21.3333H20C21.4728 21.3333 22.6667 22.5272 22.6667 24V26.5333C22.6667 26.607 22.7264 26.6666 22.8 26.6666H25.8664C25.94 26.6666 25.9997 26.607 25.9997 26.5333L26 23.3333C26 20.3878 23.6122 18 20.6667 18H11.3333Z" fill="currentColor"/>', iM = '<path d="M17.5091 24.6595C17.5091 25.2066 16.8864 25.5208 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9992 9.36923 19.9992H4.66667C4.29848 19.9992 4 19.7007 4 19.3325V12.6658C4 12.2976 4.29848 11.9992 4.66667 11.9992H9.37115C9.39967 11.9992 9.42745 11.99 9.45039 11.9731L16.4463 6.80363C16.8863 6.47845 17.5091 6.79262 17.5091 7.3398L17.5091 24.6595Z" fill="currentColor"/> <path d="M27.5091 9.33336C27.8773 9.33336 28.1758 9.63184 28.1758 10V22C28.1758 22.3682 27.8773 22.6667 27.5091 22.6667H26.1758C25.8076 22.6667 25.5091 22.3682 25.5091 22V10C25.5091 9.63184 25.8076 9.33336 26.1758 9.33336L27.5091 9.33336Z" fill="currentColor"/> <path d="M22.1758 12C22.544 12 22.8424 12.2985 22.8424 12.6667V19.3334C22.8424 19.7016 22.544 20 22.1758 20H20.8424C20.4743 20 20.1758 19.7016 20.1758 19.3334V12.6667C20.1758 12.2985 20.4743 12 20.8424 12H22.1758Z" fill="currentColor"/>', rM = '<path d="M17.5091 24.6594C17.5091 25.2066 16.8864 25.5207 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9991 9.36923 19.9991H4.66667C4.29848 19.9991 4 19.7006 4 19.3324V12.6658C4 12.2976 4.29848 11.9991 4.66667 11.9991H9.37115C9.39967 11.9991 9.42745 11.99 9.45039 11.973L16.4463 6.80358C16.8863 6.4784 17.5091 6.79258 17.5091 7.33975L17.5091 24.6594Z" fill="currentColor"/> <path d="M22.8424 12.6667C22.8424 12.2985 22.544 12 22.1758 12H20.8424C20.4743 12 20.1758 12.2985 20.1758 12.6667V19.3333C20.1758 19.7015 20.4743 20 20.8424 20H22.1758C22.544 20 22.8424 19.7015 22.8424 19.3333V12.6667Z" fill="currentColor"/>', oM = '<path d="M10.2017 23.401C10.462 23.6613 10.8841 23.6613 11.1445 23.401L15.9057 18.6398C15.9577 18.5877 16.0422 18.5877 16.0942 18.6398L20.8555 23.401C21.1158 23.6613 21.5379 23.6613 21.7983 23.401L23.401 21.7982C23.6614 21.5378 23.6614 21.1157 23.401 20.8554L18.6398 16.0942C18.5878 16.0421 18.5878 15.9577 18.6398 15.9056L23.401 11.1444C23.6613 10.8841 23.6613 10.462 23.401 10.2016L21.7982 8.59886C21.5379 8.33851 21.1158 8.33851 20.8554 8.59886L16.0942 13.36C16.0422 13.4121 15.9577 13.4121 15.9057 13.36L11.1445 8.59887C10.8842 8.33852 10.4621 8.33852 10.2017 8.59887L8.59894 10.2016C8.33859 10.462 8.33859 10.8841 8.59894 11.1445L13.3601 15.9056C13.4122 15.9577 13.4122 16.0421 13.3601 16.0942L8.59889 20.8554C8.33854 21.1157 8.33854 21.5378 8.59889 21.7982L10.2017 23.401Z" fill="currentColor"/>';
const N = (s) => s ? `${s} vds-icon` : "vds-icon", aM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: cL }));
aM.displayName = "VidstackAccessibilityIcon";
const cM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: lL }));
cM.displayName = "VidstackAddNoteIcon";
const lM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: uL }));
lM.displayName = "VidstackAddPlaylistIcon";
const uM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: dL }));
uM.displayName = "VidstackAddUserIcon";
const dM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: hL }));
dM.displayName = "VidstackAddIcon";
const hM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: fL }));
hM.displayName = "VidstackAirPlayIcon";
const fM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: pL }));
fM.displayName = "VidstackArrowCollapseInIcon";
const pM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: CL }));
pM.displayName = "VidstackArrowCollapseIcon";
const CM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: mL }));
CM.displayName = "VidstackArrowDownIcon";
const mM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: gL }));
mM.displayName = "VidstackArrowExpandOutIcon";
const gM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: yL }));
gM.displayName = "VidstackArrowExpandIcon";
const yM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: vL }));
yM.displayName = "VidstackArrowLeftIcon";
const vM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: bL }));
vM.displayName = "VidstackArrowRightIcon";
const bM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: wL }));
bM.displayName = "VidstackArrowUpIcon";
const wM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: xL }));
wM.displayName = "VidstackBookmarkIcon";
const xM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: SL }));
xM.displayName = "VidstackCameraIcon";
const SM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: $L }));
SM.displayName = "VidstackChaptersIcon";
const $M = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: EL }));
$M.displayName = "VidstackChatCollapseIcon";
const EM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: TL }));
EM.displayName = "VidstackChatIcon";
const TM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: LL }));
TM.displayName = "VidstackCheckIcon";
const LM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: PL }));
LM.displayName = "VidstackChevronDownIcon";
const PM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: ML }));
PM.displayName = "VidstackChevronLeftIcon";
const MM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: kL }));
MM.displayName = "VidstackChevronRightIcon";
const kM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: IL }));
kM.displayName = "VidstackChevronUpIcon";
const IM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: VL }));
IM.displayName = "VidstackChromecastIcon";
const VM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: AL }));
VM.displayName = "VidstackClipIcon";
const AM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: NL }));
AM.displayName = "VidstackClosedCaptionsOnIcon";
const NM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: RL }));
NM.displayName = "VidstackClosedCaptionsIcon";
const RM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: HL }));
RM.displayName = "VidstackCommentIcon";
const HM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: OL }));
HM.displayName = "VidstackComputerIcon";
const OM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: DL }));
OM.displayName = "VidstackDeviceIcon";
const DM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: _L }));
DM.displayName = "VidstackDownloadIcon";
const _M = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: FL }));
_M.displayName = "VidstackEpisodesIcon";
const FM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: qL }));
FM.displayName = "VidstackEyeIcon";
const qM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: ZL }));
qM.displayName = "VidstackFastBackwardIcon";
const ZM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: jL }));
ZM.displayName = "VidstackFastForwardIcon";
const jM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: BL }));
jM.displayName = "VidstackFlagIcon";
const BM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: GL }));
BM.displayName = "VidstackFullscreenArrowExitIcon";
const GM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: UL }));
GM.displayName = "VidstackFullscreenArrowIcon";
const UM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: WL }));
UM.displayName = "VidstackFullscreenExitIcon";
const WM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: KL }));
WM.displayName = "VidstackFullscreenIcon";
const KM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: zL }));
KM.displayName = "VidstackHeartIcon";
const zM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: YL }));
zM.displayName = "VidstackInfoIcon";
const YM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: QL }));
YM.displayName = "VidstackLanguageIcon";
const QM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: XL }));
QM.displayName = "VidstackLinkIcon";
const XM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: JL }));
XM.displayName = "VidstackLockClosedIcon";
const JM = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: eP }));
JM.displayName = "VidstackLockOpenIcon";
const ek = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: tP }));
ek.displayName = "VidstackMenuHorizontalIcon";
const tk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: sP }));
tk.displayName = "VidstackMenuVerticalIcon";
const sk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: nP }));
sk.displayName = "VidstackMicrophoneIcon";
const nk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: iP }));
nk.displayName = "VidstackMobileIcon";
const ik = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: rP }));
ik.displayName = "VidstackMoonIcon";
const rk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: oP }));
rk.displayName = "VidstackMusicOffIcon";
const ok = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: aP }));
ok.displayName = "VidstackMusicIcon";
const ak = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: cP }));
ak.displayName = "VidstackMuteIcon";
const ck = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: lP }));
ck.displayName = "VidstackNextIcon";
const lk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: uP }));
lk.displayName = "VidstackNoEyeIcon";
const uk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: dP }));
uk.displayName = "VidstackNotificationIcon";
const dk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: hP }));
dk.displayName = "VidstackOdometerIcon";
const hk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: fP }));
hk.displayName = "VidstackPauseIcon";
const fk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: pP }));
fk.displayName = "VidstackPictureInPictureExitIcon";
const pk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: CP }));
pk.displayName = "VidstackPictureInPictureIcon";
const Ck = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: mP }));
Ck.displayName = "VidstackPlayIcon";
const mk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: gP }));
mk.displayName = "VidstackPlaybackSpeedCircleIcon";
const gk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: yP }));
gk.displayName = "VidstackPlaylistIcon";
const yk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: vP }));
yk.displayName = "VidstackPreviousIcon";
const vk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: bP }));
vk.displayName = "VidstackQuestionMarkIcon";
const bk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: wP }));
bk.displayName = "VidstackQueueListIcon";
const wk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: xP }));
wk.displayName = "VidstackRadioButtonSelectedIcon";
const xk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: SP }));
xk.displayName = "VidstackRadioButtonIcon";
const Sk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: $P }));
Sk.displayName = "VidstackRepeatOnIcon";
const $k = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: EP }));
$k.displayName = "VidstackRepeatSquareOnIcon";
const Ek = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: TP }));
Ek.displayName = "VidstackRepeatSquareIcon";
const Tk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: LP }));
Tk.displayName = "VidstackRepeatIcon";
const Lk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: PP }));
Lk.displayName = "VidstackReplayIcon";
const Pk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: MP }));
Pk.displayName = "VidstackRotateIcon";
const Mk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: kP }));
Mk.displayName = "VidstackSearchIcon";
const Wm = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: IP }));
Wm.displayName = "VidstackSeekBackward10Icon";
const kk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: VP }));
kk.displayName = "VidstackSeekBackward15Icon";
const Ik = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: AP }));
Ik.displayName = "VidstackSeekBackward30Icon";
const Vk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: NP }));
Vk.displayName = "VidstackSeekBackwardIcon";
const Km = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: RP }));
Km.displayName = "VidstackSeekForward10Icon";
const Ak = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: HP }));
Ak.displayName = "VidstackSeekForward15Icon";
const Nk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: OP }));
Nk.displayName = "VidstackSeekForward30Icon";
const Rk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: DP }));
Rk.displayName = "VidstackSeekForwardIcon";
const Hk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: _P }));
Hk.displayName = "VidstackSendIcon";
const Ok = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: FP }));
Ok.displayName = "VidstackSettingsMenuIcon";
const Dk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: qP }));
Dk.displayName = "VidstackSettingsSwitchIcon";
const _k = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: ZP }));
_k.displayName = "VidstackSettingsIcon";
const Fk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: jP }));
Fk.displayName = "VidstackShareArrowIcon";
const qk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: BP }));
qk.displayName = "VidstackShareIcon";
const Zk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: GP }));
Zk.displayName = "VidstackShuffleOnIcon";
const jk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: UP }));
jk.displayName = "VidstackShuffleIcon";
const Bk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: WP }));
Bk.displayName = "VidstackStopIcon";
const Gk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: KP }));
Gk.displayName = "VidstackSubtitlesIcon";
const Uk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: zP }));
Uk.displayName = "VidstackSunIcon";
const Wk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: YP }));
Wk.displayName = "VidstackTheatreModeExitIcon";
const Kk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: QP }));
Kk.displayName = "VidstackTheatreModeIcon";
const zk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: XP }));
zk.displayName = "VidstackThumbsDownIcon";
const Yk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: JP }));
Yk.displayName = "VidstackThumbsUpIcon";
const Qk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: eM }));
Qk.displayName = "VidstackTimerIcon";
const Xk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: tM }));
Xk.displayName = "VidstackTranscriptIcon";
const Jk = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: sM }));
Jk.displayName = "VidstackTvIcon";
const eI = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: nM }));
eI.displayName = "VidstackUserIcon";
const tI = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: iM }));
tI.displayName = "VidstackVolumeHighIcon";
const sI = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: rM }));
sI.displayName = "VidstackVolumeLowIcon";
const nI = /* @__PURE__ */ A((s, t) => I(V, { ...s, className: N(s.className), ref: t, paths: oM }));
nI.displayName = "VidstackXMarkIcon";
const o3 = "group ring-media-focus relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 focus-visible:ring-4 aria-disabled:hidden", a3 = "animate-out fade-out slide-out-to-bottom-2 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in data-[state=delayed-open]:slide-in-from-bottom-4 z-10 rounded-sm bg-black/90 px-2 py-0.5 text-sm font-medium text-white parent-data-[open]:hidden";
function iI({
  tooltipOffset: s = 0,
  tooltipSide: t = "top",
  tooltipAlign: e = "center"
}) {
  const n = Zt("paused");
  return /* @__PURE__ */ w.jsxs(n3, { children: [
    /* @__PURE__ */ w.jsx(i3, { asChild: !0, children: /* @__PURE__ */ w.jsx(BC, { className: o3, children: n ? /* @__PURE__ */ w.jsx(iL, { className: "w-6 h-6 translate-x-px" }) : /* @__PURE__ */ w.jsx(nL, { className: "w-6 h-6" }) }) }),
    /* @__PURE__ */ w.jsx(
      r3,
      {
        className: a3,
        side: t,
        align: e,
        sideOffset: s,
        children: n ? "Play" : "Pause"
      }
    )
  ] });
}
function rI({
  tooltipOffset: s = 0,
  tooltipSide: t = "top",
  tooltipAlign: e = "center"
}) {
  const n = Zt("volume"), i = Zt("muted");
  return /* @__PURE__ */ w.jsxs(n3, { children: [
    /* @__PURE__ */ w.jsx(i3, { asChild: !0, children: /* @__PURE__ */ w.jsx(UC, { className: o3, children: i || n == 0 ? /* @__PURE__ */ w.jsx(aL, { className: "w-6 h-6" }) : n < 0.5 ? /* @__PURE__ */ w.jsx(rL, { className: "w-6 h-6" }) : /* @__PURE__ */ w.jsx(oL, { className: "w-6 h-6" }) }) }),
    /* @__PURE__ */ w.jsx(
      r3,
      {
        className: a3,
        side: t,
        align: e,
        sideOffset: s,
        children: i ? "Unmute" : "Mute"
      }
    )
  ] });
}
function oI({
  tooltipOffset: s = 0,
  tooltipSide: t = "top",
  tooltipAlign: e = "center"
}) {
  const n = Zt("fullscreen");
  return /* @__PURE__ */ w.jsxs(n3, { children: [
    /* @__PURE__ */ w.jsx(i3, { asChild: !0, children: /* @__PURE__ */ w.jsx(GC, { className: o3, children: n ? /* @__PURE__ */ w.jsx(sL, { className: "w-6 h-6" }) : /* @__PURE__ */ w.jsx(tL, { className: "w-6 h-6" }) }) }),
    /* @__PURE__ */ w.jsx(
      r3,
      {
        className: a3,
        side: t,
        align: e,
        sideOffset: s,
        children: n ? "Exit Fullscreen" : "Enter Fullscreen"
      }
    )
  ] });
}
function aI({
  tooltipOffset: s = 0,
  tooltipSide: t = "top",
  tooltipAlign: e = "center"
}) {
  return /* @__PURE__ */ w.jsxs(n3, { children: [
    /* @__PURE__ */ w.jsx(i3, { asChild: !0, children: /* @__PURE__ */ w.jsx(
      Bu,
      {
        seconds: 10,
        className: o3,
        children: /* @__PURE__ */ w.jsx(Km, { className: "w-7 h-7" })
      }
    ) }),
    /* @__PURE__ */ w.jsx(
      r3,
      {
        className: a3,
        side: t,
        align: e,
        sideOffset: s,
        children: "Seek Forward 10s"
      }
    )
  ] });
}
function cI({
  tooltipOffset: s = 0,
  tooltipSide: t = "top",
  tooltipAlign: e = "center"
}) {
  return /* @__PURE__ */ w.jsxs(n3, { children: [
    /* @__PURE__ */ w.jsx(i3, { asChild: !0, children: /* @__PURE__ */ w.jsx(
      Bu,
      {
        seconds: -10,
        className: o3,
        children: /* @__PURE__ */ w.jsx(Wm, { className: "w-7 h-7" })
      }
    ) }),
    /* @__PURE__ */ w.jsx(
      r3,
      {
        className: a3,
        side: t,
        align: e,
        sideOffset: s,
        children: "Seek Backward 10s"
      }
    )
  ] });
}
function lI(s, t = []) {
  let e = [];
  function n(o, a) {
    const l = u.createContext(a), d = e.length;
    e = [...e, a];
    function h(f) {
      const { scope: m, children: y, ...v } = f, b = (m == null ? void 0 : m[s][d]) || l, x = u.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ w.jsx(b.Provider, { value: x, children: y });
    }
    function p(f, m) {
      const y = (m == null ? void 0 : m[s][d]) || l, v = u.useContext(y);
      if (v) return v;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return h.displayName = o + "Provider", [h, p];
  }
  const i = () => {
    const o = e.map((a) => u.createContext(a));
    return function(l) {
      const d = (l == null ? void 0 : l[s]) || o;
      return u.useMemo(
        () => ({ [`__scope${s}`]: { ...l, [s]: d } }),
        [l, d]
      );
    };
  };
  return i.scopeName = s, [n, uI(i, ...t)];
}
function uI(...s) {
  const t = s[0];
  if (s.length === 1) return t;
  const e = () => {
    const n = s.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(o) {
      const a = n.reduce((l, { useScope: d, scopeName: h }) => {
        const f = d(o)[`__scope${h}`];
        return { ...l, ...f };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return e.scopeName = t.scopeName, e;
}
function Qu(s) {
  const t = s + "CollectionProvider", [e, n] = lI(t), [i, o] = e(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (y) => {
    const { scope: v, children: b } = y, x = li.useRef(null), S = li.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ w.jsx(i, { scope: v, itemMap: S, collectionRef: x, children: b });
  };
  a.displayName = t;
  const l = s + "CollectionSlot", d = li.forwardRef(
    (y, v) => {
      const { scope: b, children: x } = y, S = o(l, b), L = tt(v, S.collectionRef);
      return /* @__PURE__ */ w.jsx(E3, { ref: L, children: x });
    }
  );
  d.displayName = l;
  const h = s + "CollectionItemSlot", p = "data-radix-collection-item", f = li.forwardRef(
    (y, v) => {
      const { scope: b, children: x, ...S } = y, L = li.useRef(null), k = tt(v, L), M = o(h, b);
      return li.useEffect(() => (M.itemMap.set(L, { ref: L, ...S }), () => void M.itemMap.delete(L))), /* @__PURE__ */ w.jsx(E3, { [p]: "", ref: k, children: x });
    }
  );
  f.displayName = h;
  function m(y) {
    const v = o(s + "CollectionConsumer", y);
    return li.useCallback(() => {
      const x = v.collectionRef.current;
      if (!x) return [];
      const S = Array.from(x.querySelectorAll(`[${p}]`));
      return Array.from(v.itemMap.values()).sort(
        (M, H) => S.indexOf(M.ref.current) - S.indexOf(H.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: a, Slot: d, ItemSlot: f },
    m,
    n
  ];
}
var dI = u.createContext(void 0);
function Xu(s) {
  const t = u.useContext(dI);
  return s || t || "ltr";
}
var nc = 0;
function hI() {
  u.useEffect(() => {
    const s = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", s[0] ?? Q7()), document.body.insertAdjacentElement("beforeend", s[1] ?? Q7()), nc++, () => {
      nc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), nc--;
    };
  }, []);
}
function Q7() {
  const s = document.createElement("span");
  return s.setAttribute("data-radix-focus-guard", ""), s.tabIndex = 0, s.style.outline = "none", s.style.opacity = "0", s.style.position = "fixed", s.style.pointerEvents = "none", s;
}
var ic = "focusScope.autoFocusOnMount", rc = "focusScope.autoFocusOnUnmount", X7 = { bubbles: !1, cancelable: !0 }, fI = "FocusScope", zm = u.forwardRef((s, t) => {
  const {
    loop: e = !1,
    trapped: n = !1,
    onMountAutoFocus: i,
    onUnmountAutoFocus: o,
    ...a
  } = s, [l, d] = u.useState(null), h = Fs(i), p = Fs(o), f = u.useRef(null), m = tt(t, (b) => d(b)), y = u.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  u.useEffect(() => {
    if (n) {
      let b = function(k) {
        if (y.paused || !l) return;
        const M = k.target;
        l.contains(M) ? f.current = M : fi(f.current, { select: !0 });
      }, x = function(k) {
        if (y.paused || !l) return;
        const M = k.relatedTarget;
        M !== null && (l.contains(M) || fi(f.current, { select: !0 }));
      }, S = function(k) {
        if (document.activeElement === document.body)
          for (const H of k)
            H.removedNodes.length > 0 && fi(l);
      };
      document.addEventListener("focusin", b), document.addEventListener("focusout", x);
      const L = new MutationObserver(S);
      return l && L.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", b), document.removeEventListener("focusout", x), L.disconnect();
      };
    }
  }, [n, l, y.paused]), u.useEffect(() => {
    if (l) {
      ed.add(y);
      const b = document.activeElement;
      if (!l.contains(b)) {
        const S = new CustomEvent(ic, X7);
        l.addEventListener(ic, h), l.dispatchEvent(S), S.defaultPrevented || (pI(vI(Ym(l)), { select: !0 }), document.activeElement === b && fi(l));
      }
      return () => {
        l.removeEventListener(ic, h), setTimeout(() => {
          const S = new CustomEvent(rc, X7);
          l.addEventListener(rc, p), l.dispatchEvent(S), S.defaultPrevented || fi(b ?? document.body, { select: !0 }), l.removeEventListener(rc, p), ed.remove(y);
        }, 0);
      };
    }
  }, [l, h, p, y]);
  const v = u.useCallback(
    (b) => {
      if (!e && !n || y.paused) return;
      const x = b.key === "Tab" && !b.altKey && !b.ctrlKey && !b.metaKey, S = document.activeElement;
      if (x && S) {
        const L = b.currentTarget, [k, M] = CI(L);
        k && M ? !b.shiftKey && S === M ? (b.preventDefault(), e && fi(k, { select: !0 })) : b.shiftKey && S === k && (b.preventDefault(), e && fi(M, { select: !0 })) : S === L && b.preventDefault();
      }
    },
    [e, n, y.paused]
  );
  return /* @__PURE__ */ w.jsx(nt.div, { tabIndex: -1, ...a, ref: m, onKeyDown: v });
});
zm.displayName = fI;
function pI(s, { select: t = !1 } = {}) {
  const e = document.activeElement;
  for (const n of s)
    if (fi(n, { select: t }), document.activeElement !== e) return;
}
function CI(s) {
  const t = Ym(s), e = J7(t, s), n = J7(t.reverse(), s);
  return [e, n];
}
function Ym(s) {
  const t = [], e = document.createTreeWalker(s, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const i = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || i ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); ) t.push(e.currentNode);
  return t;
}
function J7(s, t) {
  for (const e of s)
    if (!mI(e, { upTo: t })) return e;
}
function mI(s, { upTo: t }) {
  if (getComputedStyle(s).visibility === "hidden") return !0;
  for (; s; ) {
    if (t !== void 0 && s === t) return !1;
    if (getComputedStyle(s).display === "none") return !0;
    s = s.parentElement;
  }
  return !1;
}
function gI(s) {
  return s instanceof HTMLInputElement && "select" in s;
}
function fi(s, { select: t = !1 } = {}) {
  if (s && s.focus) {
    const e = document.activeElement;
    s.focus({ preventScroll: !0 }), s !== e && gI(s) && t && s.select();
  }
}
var ed = yI();
function yI() {
  let s = [];
  return {
    add(t) {
      const e = s[0];
      t !== e && (e == null || e.pause()), s = td(s, t), s.unshift(t);
    },
    remove(t) {
      var e;
      s = td(s, t), (e = s[0]) == null || e.resume();
    }
  };
}
function td(s, t) {
  const e = [...s], n = e.indexOf(t);
  return n !== -1 && e.splice(n, 1), e;
}
function vI(s) {
  return s.filter((t) => t.tagName !== "A");
}
function bI(s, t = []) {
  let e = [];
  function n(o, a) {
    const l = u.createContext(a), d = e.length;
    e = [...e, a];
    function h(f) {
      const { scope: m, children: y, ...v } = f, b = (m == null ? void 0 : m[s][d]) || l, x = u.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ w.jsx(b.Provider, { value: x, children: y });
    }
    function p(f, m) {
      const y = (m == null ? void 0 : m[s][d]) || l, v = u.useContext(y);
      if (v) return v;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return h.displayName = o + "Provider", [h, p];
  }
  const i = () => {
    const o = e.map((a) => u.createContext(a));
    return function(l) {
      const d = (l == null ? void 0 : l[s]) || o;
      return u.useMemo(
        () => ({ [`__scope${s}`]: { ...l, [s]: d } }),
        [l, d]
      );
    };
  };
  return i.scopeName = s, [n, wI(i, ...t)];
}
function wI(...s) {
  const t = s[0];
  if (s.length === 1) return t;
  const e = () => {
    const n = s.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(o) {
      const a = n.reduce((l, { useScope: d, scopeName: h }) => {
        const f = d(o)[`__scope${h}`];
        return { ...l, ...f };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return e.scopeName = t.scopeName, e;
}
var oc = "rovingFocusGroup.onEntryFocus", xI = { bubbles: !1, cancelable: !0 }, O2 = "RovingFocusGroup", [X9, Qm, SI] = Qu(O2), [$I, Xm] = bI(
  O2,
  [SI]
), [EI, TI] = $I(O2), Jm = u.forwardRef(
  (s, t) => /* @__PURE__ */ w.jsx(X9.Provider, { scope: s.__scopeRovingFocusGroup, children: /* @__PURE__ */ w.jsx(X9.Slot, { scope: s.__scopeRovingFocusGroup, children: /* @__PURE__ */ w.jsx(LI, { ...s, ref: t }) }) })
);
Jm.displayName = O2;
var LI = u.forwardRef((s, t) => {
  const {
    __scopeRovingFocusGroup: e,
    orientation: n,
    loop: i = !1,
    dir: o,
    currentTabStopId: a,
    defaultCurrentTabStopId: l,
    onCurrentTabStopIdChange: d,
    onEntryFocus: h,
    preventScrollOnEntryFocus: p = !1,
    ...f
  } = s, m = u.useRef(null), y = tt(t, m), v = Xu(o), [b = null, x] = V2({
    prop: a,
    defaultProp: l,
    onChange: d
  }), [S, L] = u.useState(!1), k = Fs(h), M = Qm(e), H = u.useRef(!1), [Z, D] = u.useState(0);
  return u.useEffect(() => {
    const P = m.current;
    if (P)
      return P.addEventListener(oc, k), () => P.removeEventListener(oc, k);
  }, [k]), /* @__PURE__ */ w.jsx(
    EI,
    {
      scope: e,
      orientation: n,
      dir: v,
      loop: i,
      currentTabStopId: b,
      onItemFocus: u.useCallback(
        (P) => x(P),
        [x]
      ),
      onItemShiftTab: u.useCallback(() => L(!0), []),
      onFocusableItemAdd: u.useCallback(
        () => D((P) => P + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => D((P) => P - 1),
        []
      ),
      children: /* @__PURE__ */ w.jsx(
        nt.div,
        {
          tabIndex: S || Z === 0 ? -1 : 0,
          "data-orientation": n,
          ...f,
          ref: y,
          style: { outline: "none", ...s.style },
          onMouseDown: oe(s.onMouseDown, () => {
            H.current = !0;
          }),
          onFocus: oe(s.onFocus, (P) => {
            const K = !H.current;
            if (P.target === P.currentTarget && K && !S) {
              const W = new CustomEvent(oc, xI);
              if (P.currentTarget.dispatchEvent(W), !W.defaultPrevented) {
                const re = M().filter((j) => j.focusable), Ce = re.find((j) => j.active), se = re.find((j) => j.id === b), Ne = [Ce, se, ...re].filter(
                  Boolean
                ).map((j) => j.ref.current);
                sg(Ne, p);
              }
            }
            H.current = !1;
          }),
          onBlur: oe(s.onBlur, () => L(!1))
        }
      )
    }
  );
}), eg = "RovingFocusGroupItem", tg = u.forwardRef(
  (s, t) => {
    const {
      __scopeRovingFocusGroup: e,
      focusable: n = !0,
      active: i = !1,
      tabStopId: o,
      ...a
    } = s, l = Ua(), d = o || l, h = TI(eg, e), p = h.currentTabStopId === d, f = Qm(e), { onFocusableItemAdd: m, onFocusableItemRemove: y } = h;
    return u.useEffect(() => {
      if (n)
        return m(), () => y();
    }, [n, m, y]), /* @__PURE__ */ w.jsx(
      X9.ItemSlot,
      {
        scope: e,
        id: d,
        focusable: n,
        active: i,
        children: /* @__PURE__ */ w.jsx(
          nt.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": h.orientation,
            ...a,
            ref: t,
            onMouseDown: oe(s.onMouseDown, (v) => {
              n ? h.onItemFocus(d) : v.preventDefault();
            }),
            onFocus: oe(s.onFocus, () => h.onItemFocus(d)),
            onKeyDown: oe(s.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                h.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const b = kI(v, h.orientation, h.dir);
              if (b !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let S = f().filter((L) => L.focusable).map((L) => L.ref.current);
                if (b === "last") S.reverse();
                else if (b === "prev" || b === "next") {
                  b === "prev" && S.reverse();
                  const L = S.indexOf(v.currentTarget);
                  S = h.loop ? II(S, L + 1) : S.slice(L + 1);
                }
                setTimeout(() => sg(S));
              }
            })
          }
        )
      }
    );
  }
);
tg.displayName = eg;
var PI = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function MI(s, t) {
  return t !== "rtl" ? s : s === "ArrowLeft" ? "ArrowRight" : s === "ArrowRight" ? "ArrowLeft" : s;
}
function kI(s, t, e) {
  const n = MI(s.key, e);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return PI[n];
}
function sg(s, t = !1) {
  const e = document.activeElement;
  for (const n of s)
    if (n === e || (n.focus({ preventScroll: t }), document.activeElement !== e)) return;
}
function II(s, t) {
  return s.map((e, n) => s[(t + n) % s.length]);
}
var VI = Jm, AI = tg, NI = function(s) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(s) ? s[0] : s;
  return t.ownerDocument.body;
}, Sr = /* @__PURE__ */ new WeakMap(), Yo = /* @__PURE__ */ new WeakMap(), Qo = {}, ac = 0, ng = function(s) {
  return s && (s.host || ng(s.parentNode));
}, RI = function(s, t) {
  return t.map(function(e) {
    if (s.contains(e))
      return e;
    var n = ng(e);
    return n && s.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", s, ". Doing nothing"), null);
  }).filter(function(e) {
    return !!e;
  });
}, HI = function(s, t, e, n) {
  var i = RI(t, Array.isArray(s) ? s : [s]);
  Qo[e] || (Qo[e] = /* @__PURE__ */ new WeakMap());
  var o = Qo[e], a = [], l = /* @__PURE__ */ new Set(), d = new Set(i), h = function(f) {
    !f || l.has(f) || (l.add(f), h(f.parentNode));
  };
  i.forEach(h);
  var p = function(f) {
    !f || d.has(f) || Array.prototype.forEach.call(f.children, function(m) {
      if (l.has(m))
        p(m);
      else
        try {
          var y = m.getAttribute(n), v = y !== null && y !== "false", b = (Sr.get(m) || 0) + 1, x = (o.get(m) || 0) + 1;
          Sr.set(m, b), o.set(m, x), a.push(m), b === 1 && v && Yo.set(m, !0), x === 1 && m.setAttribute(e, "true"), v || m.setAttribute(n, "true");
        } catch (S) {
          console.error("aria-hidden: cannot operate on ", m, S);
        }
    });
  };
  return p(t), l.clear(), ac++, function() {
    a.forEach(function(f) {
      var m = Sr.get(f) - 1, y = o.get(f) - 1;
      Sr.set(f, m), o.set(f, y), m || (Yo.has(f) || f.removeAttribute(n), Yo.delete(f)), y || f.removeAttribute(e);
    }), ac--, ac || (Sr = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), Yo = /* @__PURE__ */ new WeakMap(), Qo = {});
  };
}, OI = function(s, t, e) {
  e === void 0 && (e = "data-aria-hidden");
  var n = Array.from(Array.isArray(s) ? s : [s]), i = NI(s);
  return i ? (n.push.apply(n, Array.from(i.querySelectorAll("[aria-live]"))), HI(n, i, e, "aria-hidden")) : function() {
    return null;
  };
}, nn = function() {
  return nn = Object.assign || function(t) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
  }, nn.apply(this, arguments);
};
function ig(s, t) {
  var e = {};
  for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && t.indexOf(n) < 0 && (e[n] = s[n]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(s); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, n[i]) && (e[n[i]] = s[n[i]]);
  return e;
}
function DI(s, t, e) {
  if (e || arguments.length === 2) for (var n = 0, i = t.length, o; n < i; n++)
    (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return s.concat(o || Array.prototype.slice.call(t));
}
var Ma = "right-scroll-bar-position", ka = "width-before-scroll-bar", _I = "with-scroll-bars-hidden", FI = "--removed-body-scroll-bar-size";
function cc(s, t) {
  return typeof s == "function" ? s(t) : s && (s.current = t), s;
}
function qI(s, t) {
  var e = wd(function() {
    return {
      // value
      value: s,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return e.value;
        },
        set current(n) {
          var i = e.value;
          i !== n && (e.value = n, e.callback(n, i));
        }
      }
    };
  })[0];
  return e.callback = t, e.facade;
}
var ZI = typeof window < "u" ? u.useLayoutEffect : u.useEffect, sd = /* @__PURE__ */ new WeakMap();
function jI(s, t) {
  var e = qI(null, function(n) {
    return s.forEach(function(i) {
      return cc(i, n);
    });
  });
  return ZI(function() {
    var n = sd.get(e);
    if (n) {
      var i = new Set(n), o = new Set(s), a = e.current;
      i.forEach(function(l) {
        o.has(l) || cc(l, null);
      }), o.forEach(function(l) {
        i.has(l) || cc(l, a);
      });
    }
    sd.set(e, s);
  }, [s]), e;
}
function BI(s) {
  return s;
}
function GI(s, t) {
  t === void 0 && (t = BI);
  var e = [], n = !1, i = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return e.length ? e[e.length - 1] : s;
    },
    useMedium: function(o) {
      var a = t(o, n);
      return e.push(a), function() {
        e = e.filter(function(l) {
          return l !== a;
        });
      };
    },
    assignSyncMedium: function(o) {
      for (n = !0; e.length; ) {
        var a = e;
        e = [], a.forEach(o);
      }
      e = {
        push: function(l) {
          return o(l);
        },
        filter: function() {
          return e;
        }
      };
    },
    assignMedium: function(o) {
      n = !0;
      var a = [];
      if (e.length) {
        var l = e;
        e = [], l.forEach(o), a = e;
      }
      var d = function() {
        var p = a;
        a = [], p.forEach(o);
      }, h = function() {
        return Promise.resolve().then(d);
      };
      h(), e = {
        push: function(p) {
          a.push(p), h();
        },
        filter: function(p) {
          return a = a.filter(p), e;
        }
      };
    }
  };
  return i;
}
function UI(s) {
  s === void 0 && (s = {});
  var t = GI(null);
  return t.options = nn({ async: !0, ssr: !1 }, s), t;
}
var rg = function(s) {
  var t = s.sideCar, e = ig(s, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return u.createElement(n, nn({}, e));
};
rg.isSideCarExport = !0;
function WI(s, t) {
  return s.useMedium(t), rg;
}
var og = UI(), lc = function() {
}, D2 = u.forwardRef(function(s, t) {
  var e = u.useRef(null), n = u.useState({
    onScrollCapture: lc,
    onWheelCapture: lc,
    onTouchMoveCapture: lc
  }), i = n[0], o = n[1], a = s.forwardProps, l = s.children, d = s.className, h = s.removeScrollBar, p = s.enabled, f = s.shards, m = s.sideCar, y = s.noIsolation, v = s.inert, b = s.allowPinchZoom, x = s.as, S = x === void 0 ? "div" : x, L = s.gapMode, k = ig(s, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), M = m, H = jI([e, t]), Z = nn(nn({}, k), i);
  return u.createElement(
    u.Fragment,
    null,
    p && u.createElement(M, { sideCar: og, removeScrollBar: h, shards: f, noIsolation: y, inert: v, setCallbacks: o, allowPinchZoom: !!b, lockRef: e, gapMode: L }),
    a ? u.cloneElement(u.Children.only(l), nn(nn({}, Z), { ref: H })) : u.createElement(S, nn({}, Z, { className: d, ref: H }), l)
  );
});
D2.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
D2.classNames = {
  fullWidth: ka,
  zeroRight: Ma
};
var KI = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function zI() {
  if (!document)
    return null;
  var s = document.createElement("style");
  s.type = "text/css";
  var t = KI();
  return t && s.setAttribute("nonce", t), s;
}
function YI(s, t) {
  s.styleSheet ? s.styleSheet.cssText = t : s.appendChild(document.createTextNode(t));
}
function QI(s) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(s);
}
var XI = function() {
  var s = 0, t = null;
  return {
    add: function(e) {
      s == 0 && (t = zI()) && (YI(t, e), QI(t)), s++;
    },
    remove: function() {
      s--, !s && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, JI = function() {
  var s = XI();
  return function(t, e) {
    u.useEffect(function() {
      return s.add(t), function() {
        s.remove();
      };
    }, [t && e]);
  };
}, ag = function() {
  var s = JI(), t = function(e) {
    var n = e.styles, i = e.dynamic;
    return s(n, i), null;
  };
  return t;
}, eV = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, uc = function(s) {
  return parseInt(s || "", 10) || 0;
}, tV = function(s) {
  var t = window.getComputedStyle(document.body), e = t[s === "padding" ? "paddingLeft" : "marginLeft"], n = t[s === "padding" ? "paddingTop" : "marginTop"], i = t[s === "padding" ? "paddingRight" : "marginRight"];
  return [uc(e), uc(n), uc(i)];
}, sV = function(s) {
  if (s === void 0 && (s = "margin"), typeof window > "u")
    return eV;
  var t = tV(s), e = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - e + t[2] - t[0])
  };
}, nV = ag(), Ir = "data-scroll-locked", iV = function(s, t, e, n) {
  var i = s.left, o = s.top, a = s.right, l = s.gap;
  return e === void 0 && (e = "margin"), `
  .`.concat(_I, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(l, "px ").concat(n, `;
  }
  body[`).concat(Ir, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    e === "margin" && `
    padding-left: `.concat(i, `px;
    padding-top: `).concat(o, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(n, `;
    `),
    e === "padding" && "padding-right: ".concat(l, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ma, ` {
    right: `).concat(l, "px ").concat(n, `;
  }
  
  .`).concat(ka, ` {
    margin-right: `).concat(l, "px ").concat(n, `;
  }
  
  .`).concat(Ma, " .").concat(Ma, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(ka, " .").concat(ka, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Ir, `] {
    `).concat(FI, ": ").concat(l, `px;
  }
`);
}, nd = function() {
  var s = parseInt(document.body.getAttribute(Ir) || "0", 10);
  return isFinite(s) ? s : 0;
}, rV = function() {
  u.useEffect(function() {
    return document.body.setAttribute(Ir, (nd() + 1).toString()), function() {
      var s = nd() - 1;
      s <= 0 ? document.body.removeAttribute(Ir) : document.body.setAttribute(Ir, s.toString());
    };
  }, []);
}, oV = function(s) {
  var t = s.noRelative, e = s.noImportant, n = s.gapMode, i = n === void 0 ? "margin" : n;
  rV();
  var o = u.useMemo(function() {
    return sV(i);
  }, [i]);
  return u.createElement(nV, { styles: iV(o, !t, i, e ? "" : "!important") });
}, J9 = !1;
if (typeof window < "u")
  try {
    var Xo = Object.defineProperty({}, "passive", {
      get: function() {
        return J9 = !0, !0;
      }
    });
    window.addEventListener("test", Xo, Xo), window.removeEventListener("test", Xo, Xo);
  } catch {
    J9 = !1;
  }
var $r = J9 ? { passive: !1 } : !1, aV = function(s) {
  return s.tagName === "TEXTAREA";
}, cg = function(s, t) {
  if (!(s instanceof Element))
    return !1;
  var e = window.getComputedStyle(s);
  return (
    // not-not-scrollable
    e[t] !== "hidden" && // contains scroll inside self
    !(e.overflowY === e.overflowX && !aV(s) && e[t] === "visible")
  );
}, cV = function(s) {
  return cg(s, "overflowY");
}, lV = function(s) {
  return cg(s, "overflowX");
}, id = function(s, t) {
  var e = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var i = lg(s, n);
    if (i) {
      var o = ug(s, n), a = o[1], l = o[2];
      if (a > l)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== e.body);
  return !1;
}, uV = function(s) {
  var t = s.scrollTop, e = s.scrollHeight, n = s.clientHeight;
  return [
    t,
    e,
    n
  ];
}, dV = function(s) {
  var t = s.scrollLeft, e = s.scrollWidth, n = s.clientWidth;
  return [
    t,
    e,
    n
  ];
}, lg = function(s, t) {
  return s === "v" ? cV(t) : lV(t);
}, ug = function(s, t) {
  return s === "v" ? uV(t) : dV(t);
}, hV = function(s, t) {
  return s === "h" && t === "rtl" ? -1 : 1;
}, fV = function(s, t, e, n, i) {
  var o = hV(s, window.getComputedStyle(t).direction), a = o * n, l = e.target, d = t.contains(l), h = !1, p = a > 0, f = 0, m = 0;
  do {
    var y = ug(s, l), v = y[0], b = y[1], x = y[2], S = b - x - o * v;
    (v || S) && lg(s, l) && (f += S, m += v), l instanceof ShadowRoot ? l = l.host : l = l.parentNode;
  } while (
    // portaled content
    !d && l !== document.body || // self content
    d && (t.contains(l) || t === l)
  );
  return (p && (Math.abs(f) < 1 || !i) || !p && (Math.abs(m) < 1 || !i)) && (h = !0), h;
}, Jo = function(s) {
  return "changedTouches" in s ? [s.changedTouches[0].clientX, s.changedTouches[0].clientY] : [0, 0];
}, rd = function(s) {
  return [s.deltaX, s.deltaY];
}, od = function(s) {
  return s && "current" in s ? s.current : s;
}, pV = function(s, t) {
  return s[0] === t[0] && s[1] === t[1];
}, CV = function(s) {
  return `
  .block-interactivity-`.concat(s, ` {pointer-events: none;}
  .allow-interactivity-`).concat(s, ` {pointer-events: all;}
`);
}, mV = 0, Er = [];
function gV(s) {
  var t = u.useRef([]), e = u.useRef([0, 0]), n = u.useRef(), i = u.useState(mV++)[0], o = u.useState(ag)[0], a = u.useRef(s);
  u.useEffect(function() {
    a.current = s;
  }, [s]), u.useEffect(function() {
    if (s.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var b = DI([s.lockRef.current], (s.shards || []).map(od), !0).filter(Boolean);
      return b.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), b.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [s.inert, s.lockRef.current, s.shards]);
  var l = u.useCallback(function(b, x) {
    if ("touches" in b && b.touches.length === 2 || b.type === "wheel" && b.ctrlKey)
      return !a.current.allowPinchZoom;
    var S = Jo(b), L = e.current, k = "deltaX" in b ? b.deltaX : L[0] - S[0], M = "deltaY" in b ? b.deltaY : L[1] - S[1], H, Z = b.target, D = Math.abs(k) > Math.abs(M) ? "h" : "v";
    if ("touches" in b && D === "h" && Z.type === "range")
      return !1;
    var P = id(D, Z);
    if (!P)
      return !0;
    if (P ? H = D : (H = D === "v" ? "h" : "v", P = id(D, Z)), !P)
      return !1;
    if (!n.current && "changedTouches" in b && (k || M) && (n.current = H), !H)
      return !0;
    var K = n.current || H;
    return fV(K, x, b, K === "h" ? k : M, !0);
  }, []), d = u.useCallback(function(b) {
    var x = b;
    if (!(!Er.length || Er[Er.length - 1] !== o)) {
      var S = "deltaY" in x ? rd(x) : Jo(x), L = t.current.filter(function(H) {
        return H.name === x.type && (H.target === x.target || x.target === H.shadowParent) && pV(H.delta, S);
      })[0];
      if (L && L.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!L) {
        var k = (a.current.shards || []).map(od).filter(Boolean).filter(function(H) {
          return H.contains(x.target);
        }), M = k.length > 0 ? l(x, k[0]) : !a.current.noIsolation;
        M && x.cancelable && x.preventDefault();
      }
    }
  }, []), h = u.useCallback(function(b, x, S, L) {
    var k = { name: b, delta: x, target: S, should: L, shadowParent: yV(S) };
    t.current.push(k), setTimeout(function() {
      t.current = t.current.filter(function(M) {
        return M !== k;
      });
    }, 1);
  }, []), p = u.useCallback(function(b) {
    e.current = Jo(b), n.current = void 0;
  }, []), f = u.useCallback(function(b) {
    h(b.type, rd(b), b.target, l(b, s.lockRef.current));
  }, []), m = u.useCallback(function(b) {
    h(b.type, Jo(b), b.target, l(b, s.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Er.push(o), s.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", d, $r), document.addEventListener("touchmove", d, $r), document.addEventListener("touchstart", p, $r), function() {
      Er = Er.filter(function(b) {
        return b !== o;
      }), document.removeEventListener("wheel", d, $r), document.removeEventListener("touchmove", d, $r), document.removeEventListener("touchstart", p, $r);
    };
  }, []);
  var y = s.removeScrollBar, v = s.inert;
  return u.createElement(
    u.Fragment,
    null,
    v ? u.createElement(o, { styles: CV(i) }) : null,
    y ? u.createElement(oV, { gapMode: s.gapMode }) : null
  );
}
function yV(s) {
  for (var t = null; s !== null; )
    s instanceof ShadowRoot && (t = s.host, s = s.host), s = s.parentNode;
  return t;
}
const vV = WI(og, gV);
var dg = u.forwardRef(function(s, t) {
  return u.createElement(D2, nn({}, s, { ref: t, sideCar: vV }));
});
dg.classNames = D2.classNames;
var eu = ["Enter", " "], bV = ["ArrowDown", "PageUp", "Home"], hg = ["ArrowUp", "PageDown", "End"], wV = [...bV, ...hg], xV = {
  ltr: [...eu, "ArrowRight"],
  rtl: [...eu, "ArrowLeft"]
}, SV = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, _o = "Menu", [T3, $V, EV] = Qu(_o), [br, fg] = k2(_o, [
  EV,
  I2,
  Xm
]), _2 = I2(), pg = Xm(), [TV, wr] = br(_o), [LV, Fo] = br(_o), Cg = (s) => {
  const { __scopeMenu: t, open: e = !1, children: n, dir: i, onOpenChange: o, modal: a = !0 } = s, l = _2(t), [d, h] = u.useState(null), p = u.useRef(!1), f = Fs(o), m = Xu(i);
  return u.useEffect(() => {
    const y = () => {
      p.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => p.current = !1;
    return document.addEventListener("keydown", y, { capture: !0 }), () => {
      document.removeEventListener("keydown", y, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), /* @__PURE__ */ w.jsx(Nm, { ...l, children: /* @__PURE__ */ w.jsx(
    TV,
    {
      scope: t,
      open: e,
      onOpenChange: f,
      content: d,
      onContentChange: h,
      children: /* @__PURE__ */ w.jsx(
        LV,
        {
          scope: t,
          onClose: u.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: p,
          dir: m,
          modal: a,
          children: n
        }
      )
    }
  ) });
};
Cg.displayName = _o;
var PV = "MenuAnchor", Ju = u.forwardRef(
  (s, t) => {
    const { __scopeMenu: e, ...n } = s, i = _2(e);
    return /* @__PURE__ */ w.jsx(Rm, { ...i, ...n, ref: t });
  }
);
Ju.displayName = PV;
var e7 = "MenuPortal", [MV, mg] = br(e7, {
  forceMount: void 0
}), gg = (s) => {
  const { __scopeMenu: t, forceMount: e, children: n, container: i } = s, o = wr(e7, t);
  return /* @__PURE__ */ w.jsx(MV, { scope: t, forceMount: e, children: /* @__PURE__ */ w.jsx(s3, { present: e || o.open, children: /* @__PURE__ */ w.jsx(Dm, { asChild: !0, container: i, children: n }) }) });
};
gg.displayName = e7;
var Cs = "MenuContent", [kV, t7] = br(Cs), yg = u.forwardRef(
  (s, t) => {
    const e = mg(Cs, s.__scopeMenu), { forceMount: n = e.forceMount, ...i } = s, o = wr(Cs, s.__scopeMenu), a = Fo(Cs, s.__scopeMenu);
    return /* @__PURE__ */ w.jsx(T3.Provider, { scope: s.__scopeMenu, children: /* @__PURE__ */ w.jsx(s3, { present: n || o.open, children: /* @__PURE__ */ w.jsx(T3.Slot, { scope: s.__scopeMenu, children: a.modal ? /* @__PURE__ */ w.jsx(IV, { ...i, ref: t }) : /* @__PURE__ */ w.jsx(VV, { ...i, ref: t }) }) }) });
  }
), IV = u.forwardRef(
  (s, t) => {
    const e = wr(Cs, s.__scopeMenu), n = u.useRef(null), i = tt(t, n);
    return u.useEffect(() => {
      const o = n.current;
      if (o) return OI(o);
    }, []), /* @__PURE__ */ w.jsx(
      s7,
      {
        ...s,
        ref: i,
        trapFocus: e.open,
        disableOutsidePointerEvents: e.open,
        disableOutsideScroll: !0,
        onFocusOutside: oe(
          s.onFocusOutside,
          (o) => o.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => e.onOpenChange(!1)
      }
    );
  }
), VV = u.forwardRef((s, t) => {
  const e = wr(Cs, s.__scopeMenu);
  return /* @__PURE__ */ w.jsx(
    s7,
    {
      ...s,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => e.onOpenChange(!1)
    }
  );
}), s7 = u.forwardRef(
  (s, t) => {
    const {
      __scopeMenu: e,
      loop: n = !1,
      trapFocus: i,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: l,
      onEntryFocus: d,
      onEscapeKeyDown: h,
      onPointerDownOutside: p,
      onFocusOutside: f,
      onInteractOutside: m,
      onDismiss: y,
      disableOutsideScroll: v,
      ...b
    } = s, x = wr(Cs, e), S = Fo(Cs, e), L = _2(e), k = pg(e), M = $V(e), [H, Z] = u.useState(null), D = u.useRef(null), P = tt(t, D, x.onContentChange), K = u.useRef(0), W = u.useRef(""), re = u.useRef(0), Ce = u.useRef(null), se = u.useRef("right"), ne = u.useRef(0), Ne = v ? dg : u.Fragment, j = v ? { as: E3, allowPinchZoom: !0 } : void 0, G = (F) => {
      var Nt, Bs;
      const Se = W.current + F, We = M().filter((Qe) => !Qe.disabled), At = document.activeElement, Zs = (Nt = We.find((Qe) => Qe.ref.current === At)) == null ? void 0 : Nt.textValue, js = We.map((Qe) => Qe.textValue), Sn = BV(js, Se, Zs), cs = (Bs = We.find((Qe) => Qe.textValue === Sn)) == null ? void 0 : Bs.ref.current;
      (function Qe(Rt) {
        W.current = Rt, window.clearTimeout(K.current), Rt !== "" && (K.current = window.setTimeout(() => Qe(""), 1e3));
      })(Se), cs && setTimeout(() => cs.focus());
    };
    u.useEffect(() => () => window.clearTimeout(K.current), []), hI();
    const U = u.useCallback((F) => {
      var We, At;
      return se.current === ((We = Ce.current) == null ? void 0 : We.side) && UV(F, (At = Ce.current) == null ? void 0 : At.area);
    }, []);
    return /* @__PURE__ */ w.jsx(
      kV,
      {
        scope: e,
        searchRef: W,
        onItemEnter: u.useCallback(
          (F) => {
            U(F) && F.preventDefault();
          },
          [U]
        ),
        onItemLeave: u.useCallback(
          (F) => {
            var Se;
            U(F) || ((Se = D.current) == null || Se.focus(), Z(null));
          },
          [U]
        ),
        onTriggerLeave: u.useCallback(
          (F) => {
            U(F) && F.preventDefault();
          },
          [U]
        ),
        pointerGraceTimerRef: re,
        onPointerGraceIntentChange: u.useCallback((F) => {
          Ce.current = F;
        }, []),
        children: /* @__PURE__ */ w.jsx(Ne, { ...j, children: /* @__PURE__ */ w.jsx(
          zm,
          {
            asChild: !0,
            trapped: i,
            onMountAutoFocus: oe(o, (F) => {
              var Se;
              F.preventDefault(), (Se = D.current) == null || Se.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ w.jsx(
              Wu,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: h,
                onPointerDownOutside: p,
                onFocusOutside: f,
                onInteractOutside: m,
                onDismiss: y,
                children: /* @__PURE__ */ w.jsx(
                  VI,
                  {
                    asChild: !0,
                    ...k,
                    dir: S.dir,
                    orientation: "vertical",
                    loop: n,
                    currentTabStopId: H,
                    onCurrentTabStopIdChange: Z,
                    onEntryFocus: oe(d, (F) => {
                      S.isUsingKeyboardRef.current || F.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ w.jsx(
                      Hm,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Ng(x.open),
                        "data-radix-menu-content": "",
                        dir: S.dir,
                        ...L,
                        ...b,
                        ref: P,
                        style: { outline: "none", ...b.style },
                        onKeyDown: oe(b.onKeyDown, (F) => {
                          const We = F.target.closest("[data-radix-menu-content]") === F.currentTarget, At = F.ctrlKey || F.altKey || F.metaKey, Zs = F.key.length === 1;
                          We && (F.key === "Tab" && F.preventDefault(), !At && Zs && G(F.key));
                          const js = D.current;
                          if (F.target !== js || !wV.includes(F.key)) return;
                          F.preventDefault();
                          const cs = M().filter((Nt) => !Nt.disabled).map((Nt) => Nt.ref.current);
                          hg.includes(F.key) && cs.reverse(), ZV(cs);
                        }),
                        onBlur: oe(s.onBlur, (F) => {
                          F.currentTarget.contains(F.target) || (window.clearTimeout(K.current), W.current = "");
                        }),
                        onPointerMove: oe(
                          s.onPointerMove,
                          L3((F) => {
                            const Se = F.target, We = ne.current !== F.clientX;
                            if (F.currentTarget.contains(Se) && We) {
                              const At = F.clientX > ne.current ? "right" : "left";
                              se.current = At, ne.current = F.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
yg.displayName = Cs;
var AV = "MenuGroup", n7 = u.forwardRef(
  (s, t) => {
    const { __scopeMenu: e, ...n } = s;
    return /* @__PURE__ */ w.jsx(nt.div, { role: "group", ...n, ref: t });
  }
);
n7.displayName = AV;
var NV = "MenuLabel", vg = u.forwardRef(
  (s, t) => {
    const { __scopeMenu: e, ...n } = s;
    return /* @__PURE__ */ w.jsx(nt.div, { ...n, ref: t });
  }
);
vg.displayName = NV;
var Ka = "MenuItem", ad = "menu.itemSelect", F2 = u.forwardRef(
  (s, t) => {
    const { disabled: e = !1, onSelect: n, ...i } = s, o = u.useRef(null), a = Fo(Ka, s.__scopeMenu), l = t7(Ka, s.__scopeMenu), d = tt(t, o), h = u.useRef(!1), p = () => {
      const f = o.current;
      if (!e && f) {
        const m = new CustomEvent(ad, { bubbles: !0, cancelable: !0 });
        f.addEventListener(ad, (y) => n == null ? void 0 : n(y), { once: !0 }), vm(f, m), m.defaultPrevented ? h.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ w.jsx(
      bg,
      {
        ...i,
        ref: d,
        disabled: e,
        onClick: oe(s.onClick, p),
        onPointerDown: (f) => {
          var m;
          (m = s.onPointerDown) == null || m.call(s, f), h.current = !0;
        },
        onPointerUp: oe(s.onPointerUp, (f) => {
          var m;
          h.current || (m = f.currentTarget) == null || m.click();
        }),
        onKeyDown: oe(s.onKeyDown, (f) => {
          const m = l.searchRef.current !== "";
          e || m && f.key === " " || eu.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
F2.displayName = Ka;
var bg = u.forwardRef(
  (s, t) => {
    const { __scopeMenu: e, disabled: n = !1, textValue: i, ...o } = s, a = t7(Ka, e), l = pg(e), d = u.useRef(null), h = tt(t, d), [p, f] = u.useState(!1), [m, y] = u.useState("");
    return u.useEffect(() => {
      const v = d.current;
      v && y((v.textContent ?? "").trim());
    }, [o.children]), /* @__PURE__ */ w.jsx(
      T3.ItemSlot,
      {
        scope: e,
        disabled: n,
        textValue: i ?? m,
        children: /* @__PURE__ */ w.jsx(AI, { asChild: !0, ...l, focusable: !n, children: /* @__PURE__ */ w.jsx(
          nt.div,
          {
            role: "menuitem",
            "data-highlighted": p ? "" : void 0,
            "aria-disabled": n || void 0,
            "data-disabled": n ? "" : void 0,
            ...o,
            ref: h,
            onPointerMove: oe(
              s.onPointerMove,
              L3((v) => {
                n ? a.onItemLeave(v) : (a.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: oe(
              s.onPointerLeave,
              L3((v) => a.onItemLeave(v))
            ),
            onFocus: oe(s.onFocus, () => f(!0)),
            onBlur: oe(s.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), RV = "MenuCheckboxItem", wg = u.forwardRef(
  (s, t) => {
    const { checked: e = !1, onCheckedChange: n, ...i } = s;
    return /* @__PURE__ */ w.jsx(Tg, { scope: s.__scopeMenu, checked: e, children: /* @__PURE__ */ w.jsx(
      F2,
      {
        role: "menuitemcheckbox",
        "aria-checked": za(e) ? "mixed" : e,
        ...i,
        ref: t,
        "data-state": r7(e),
        onSelect: oe(
          i.onSelect,
          () => n == null ? void 0 : n(za(e) ? !0 : !e),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
wg.displayName = RV;
var xg = "MenuRadioGroup", [HV, OV] = br(
  xg,
  { value: void 0, onValueChange: () => {
  } }
), Sg = u.forwardRef(
  (s, t) => {
    const { value: e, onValueChange: n, ...i } = s, o = Fs(n);
    return /* @__PURE__ */ w.jsx(HV, { scope: s.__scopeMenu, value: e, onValueChange: o, children: /* @__PURE__ */ w.jsx(n7, { ...i, ref: t }) });
  }
);
Sg.displayName = xg;
var $g = "MenuRadioItem", Eg = u.forwardRef(
  (s, t) => {
    const { value: e, ...n } = s, i = OV($g, s.__scopeMenu), o = e === i.value;
    return /* @__PURE__ */ w.jsx(Tg, { scope: s.__scopeMenu, checked: o, children: /* @__PURE__ */ w.jsx(
      F2,
      {
        role: "menuitemradio",
        "aria-checked": o,
        ...n,
        ref: t,
        "data-state": r7(o),
        onSelect: oe(
          n.onSelect,
          () => {
            var a;
            return (a = i.onValueChange) == null ? void 0 : a.call(i, e);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Eg.displayName = $g;
var i7 = "MenuItemIndicator", [Tg, DV] = br(
  i7,
  { checked: !1 }
), Lg = u.forwardRef(
  (s, t) => {
    const { __scopeMenu: e, forceMount: n, ...i } = s, o = DV(i7, e);
    return /* @__PURE__ */ w.jsx(
      s3,
      {
        present: n || za(o.checked) || o.checked === !0,
        children: /* @__PURE__ */ w.jsx(
          nt.span,
          {
            ...i,
            ref: t,
            "data-state": r7(o.checked)
          }
        )
      }
    );
  }
);
Lg.displayName = i7;
var _V = "MenuSeparator", Pg = u.forwardRef(
  (s, t) => {
    const { __scopeMenu: e, ...n } = s;
    return /* @__PURE__ */ w.jsx(
      nt.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...n,
        ref: t
      }
    );
  }
);
Pg.displayName = _V;
var FV = "MenuArrow", Mg = u.forwardRef(
  (s, t) => {
    const { __scopeMenu: e, ...n } = s, i = _2(e);
    return /* @__PURE__ */ w.jsx(Om, { ...i, ...n, ref: t });
  }
);
Mg.displayName = FV;
var qV = "MenuSub", [DN, kg] = br(qV), g3 = "MenuSubTrigger", Ig = u.forwardRef(
  (s, t) => {
    const e = wr(g3, s.__scopeMenu), n = Fo(g3, s.__scopeMenu), i = kg(g3, s.__scopeMenu), o = t7(g3, s.__scopeMenu), a = u.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: d } = o, h = { __scopeMenu: s.__scopeMenu }, p = u.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return u.useEffect(() => p, [p]), u.useEffect(() => {
      const f = l.current;
      return () => {
        window.clearTimeout(f), d(null);
      };
    }, [l, d]), /* @__PURE__ */ w.jsx(Ju, { asChild: !0, ...h, children: /* @__PURE__ */ w.jsx(
      bg,
      {
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": e.open,
        "aria-controls": i.contentId,
        "data-state": Ng(e.open),
        ...s,
        ref: M2(t, i.onTriggerChange),
        onClick: (f) => {
          var m;
          (m = s.onClick) == null || m.call(s, f), !(s.disabled || f.defaultPrevented) && (f.currentTarget.focus(), e.open || e.onOpenChange(!0));
        },
        onPointerMove: oe(
          s.onPointerMove,
          L3((f) => {
            o.onItemEnter(f), !f.defaultPrevented && !s.disabled && !e.open && !a.current && (o.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              e.onOpenChange(!0), p();
            }, 100));
          })
        ),
        onPointerLeave: oe(
          s.onPointerLeave,
          L3((f) => {
            var y, v;
            p();
            const m = (y = e.content) == null ? void 0 : y.getBoundingClientRect();
            if (m) {
              const b = (v = e.content) == null ? void 0 : v.dataset.side, x = b === "right", S = x ? -5 : 5, L = m[x ? "left" : "right"], k = m[x ? "right" : "left"];
              o.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + S, y: f.clientY },
                  { x: L, y: m.top },
                  { x: k, y: m.top },
                  { x: k, y: m.bottom },
                  { x: L, y: m.bottom }
                ],
                side: b
              }), window.clearTimeout(l.current), l.current = window.setTimeout(
                () => o.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (o.onTriggerLeave(f), f.defaultPrevented) return;
              o.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: oe(s.onKeyDown, (f) => {
          var y;
          const m = o.searchRef.current !== "";
          s.disabled || m && f.key === " " || xV[n.dir].includes(f.key) && (e.onOpenChange(!0), (y = e.content) == null || y.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
Ig.displayName = g3;
var Vg = "MenuSubContent", Ag = u.forwardRef(
  (s, t) => {
    const e = mg(Cs, s.__scopeMenu), { forceMount: n = e.forceMount, ...i } = s, o = wr(Cs, s.__scopeMenu), a = Fo(Cs, s.__scopeMenu), l = kg(Vg, s.__scopeMenu), d = u.useRef(null), h = tt(t, d);
    return /* @__PURE__ */ w.jsx(T3.Provider, { scope: s.__scopeMenu, children: /* @__PURE__ */ w.jsx(s3, { present: n || o.open, children: /* @__PURE__ */ w.jsx(T3.Slot, { scope: s.__scopeMenu, children: /* @__PURE__ */ w.jsx(
      s7,
      {
        id: l.contentId,
        "aria-labelledby": l.triggerId,
        ...i,
        ref: h,
        align: "start",
        side: a.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (p) => {
          var f;
          a.isUsingKeyboardRef.current && ((f = d.current) == null || f.focus()), p.preventDefault();
        },
        onCloseAutoFocus: (p) => p.preventDefault(),
        onFocusOutside: oe(s.onFocusOutside, (p) => {
          p.target !== l.trigger && o.onOpenChange(!1);
        }),
        onEscapeKeyDown: oe(s.onEscapeKeyDown, (p) => {
          a.onClose(), p.preventDefault();
        }),
        onKeyDown: oe(s.onKeyDown, (p) => {
          var y;
          const f = p.currentTarget.contains(p.target), m = SV[a.dir].includes(p.key);
          f && m && (o.onOpenChange(!1), (y = l.trigger) == null || y.focus(), p.preventDefault());
        })
      }
    ) }) }) });
  }
);
Ag.displayName = Vg;
function Ng(s) {
  return s ? "open" : "closed";
}
function za(s) {
  return s === "indeterminate";
}
function r7(s) {
  return za(s) ? "indeterminate" : s ? "checked" : "unchecked";
}
function ZV(s) {
  const t = document.activeElement;
  for (const e of s)
    if (e === t || (e.focus(), document.activeElement !== t)) return;
}
function jV(s, t) {
  return s.map((e, n) => s[(t + n) % s.length]);
}
function BV(s, t, e) {
  const i = t.length > 1 && Array.from(t).every((h) => h === t[0]) ? t[0] : t, o = e ? s.indexOf(e) : -1;
  let a = jV(s, Math.max(o, 0));
  i.length === 1 && (a = a.filter((h) => h !== e));
  const d = a.find(
    (h) => h.toLowerCase().startsWith(i.toLowerCase())
  );
  return d !== e ? d : void 0;
}
function GV(s, t) {
  const { x: e, y: n } = s;
  let i = !1;
  for (let o = 0, a = t.length - 1; o < t.length; a = o++) {
    const l = t[o].x, d = t[o].y, h = t[a].x, p = t[a].y;
    d > n != p > n && e < (h - l) * (n - d) / (p - d) + l && (i = !i);
  }
  return i;
}
function UV(s, t) {
  if (!t) return !1;
  const e = { x: s.clientX, y: s.clientY };
  return GV(e, t);
}
function L3(s) {
  return (t) => t.pointerType === "mouse" ? s(t) : void 0;
}
var WV = Cg, KV = Ju, zV = gg, YV = yg, QV = n7, XV = vg, JV = F2, eA = wg, tA = Sg, sA = Eg, nA = Lg, iA = Pg, rA = Mg, oA = Ig, aA = Ag, o7 = "DropdownMenu", [cA, _N] = k2(
  o7,
  [fg]
), Vt = fg(), [lA, Rg] = cA(o7), Hg = (s) => {
  const {
    __scopeDropdownMenu: t,
    children: e,
    dir: n,
    open: i,
    defaultOpen: o,
    onOpenChange: a,
    modal: l = !0
  } = s, d = Vt(t), h = u.useRef(null), [p = !1, f] = V2({
    prop: i,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w.jsx(
    lA,
    {
      scope: t,
      triggerId: Ua(),
      triggerRef: h,
      contentId: Ua(),
      open: p,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((m) => !m), [f]),
      modal: l,
      children: /* @__PURE__ */ w.jsx(WV, { ...d, open: p, onOpenChange: f, dir: n, modal: l, children: e })
    }
  );
};
Hg.displayName = o7;
var Og = "DropdownMenuTrigger", Dg = u.forwardRef(
  (s, t) => {
    const { __scopeDropdownMenu: e, disabled: n = !1, ...i } = s, o = Rg(Og, e), a = Vt(e);
    return /* @__PURE__ */ w.jsx(KV, { asChild: !0, ...a, children: /* @__PURE__ */ w.jsx(
      nt.button,
      {
        type: "button",
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": o.open,
        "aria-controls": o.open ? o.contentId : void 0,
        "data-state": o.open ? "open" : "closed",
        "data-disabled": n ? "" : void 0,
        disabled: n,
        ...i,
        ref: M2(t, o.triggerRef),
        onPointerDown: oe(s.onPointerDown, (l) => {
          !n && l.button === 0 && l.ctrlKey === !1 && (o.onOpenToggle(), o.open || l.preventDefault());
        }),
        onKeyDown: oe(s.onKeyDown, (l) => {
          n || (["Enter", " "].includes(l.key) && o.onOpenToggle(), l.key === "ArrowDown" && o.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }
);
Dg.displayName = Og;
var uA = "DropdownMenuPortal", _g = (s) => {
  const { __scopeDropdownMenu: t, ...e } = s, n = Vt(t);
  return /* @__PURE__ */ w.jsx(zV, { ...n, ...e });
};
_g.displayName = uA;
var Fg = "DropdownMenuContent", qg = u.forwardRef(
  (s, t) => {
    const { __scopeDropdownMenu: e, ...n } = s, i = Rg(Fg, e), o = Vt(e), a = u.useRef(!1);
    return /* @__PURE__ */ w.jsx(
      YV,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...o,
        ...n,
        ref: t,
        onCloseAutoFocus: oe(s.onCloseAutoFocus, (l) => {
          var d;
          a.current || (d = i.triggerRef.current) == null || d.focus(), a.current = !1, l.preventDefault();
        }),
        onInteractOutside: oe(s.onInteractOutside, (l) => {
          const d = l.detail.originalEvent, h = d.button === 0 && d.ctrlKey === !0, p = d.button === 2 || h;
          (!i.modal || p) && (a.current = !0);
        }),
        style: {
          ...s.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
qg.displayName = Fg;
var dA = "DropdownMenuGroup", hA = u.forwardRef(
  (s, t) => {
    const { __scopeDropdownMenu: e, ...n } = s, i = Vt(e);
    return /* @__PURE__ */ w.jsx(QV, { ...i, ...n, ref: t });
  }
);
hA.displayName = dA;
var fA = "DropdownMenuLabel", pA = u.forwardRef(
  (s, t) => {
    const { __scopeDropdownMenu: e, ...n } = s, i = Vt(e);
    return /* @__PURE__ */ w.jsx(XV, { ...i, ...n, ref: t });
  }
);
pA.displayName = fA;
var CA = "DropdownMenuItem", Zg = u.forwardRef(
  (s, t) => {
    const { __scopeDropdownMenu: e, ...n } = s, i = Vt(e);
    return /* @__PURE__ */ w.jsx(JV, { ...i, ...n, ref: t });
  }
);
Zg.displayName = CA;
var mA = "DropdownMenuCheckboxItem", gA = u.forwardRef((s, t) => {
  const { __scopeDropdownMenu: e, ...n } = s, i = Vt(e);
  return /* @__PURE__ */ w.jsx(eA, { ...i, ...n, ref: t });
});
gA.displayName = mA;
var yA = "DropdownMenuRadioGroup", jg = u.forwardRef((s, t) => {
  const { __scopeDropdownMenu: e, ...n } = s, i = Vt(e);
  return /* @__PURE__ */ w.jsx(tA, { ...i, ...n, ref: t });
});
jg.displayName = yA;
var vA = "DropdownMenuRadioItem", bA = u.forwardRef((s, t) => {
  const { __scopeDropdownMenu: e, ...n } = s, i = Vt(e);
  return /* @__PURE__ */ w.jsx(sA, { ...i, ...n, ref: t });
});
bA.displayName = vA;
var wA = "DropdownMenuItemIndicator", xA = u.forwardRef((s, t) => {
  const { __scopeDropdownMenu: e, ...n } = s, i = Vt(e);
  return /* @__PURE__ */ w.jsx(nA, { ...i, ...n, ref: t });
});
xA.displayName = wA;
var SA = "DropdownMenuSeparator", $A = u.forwardRef((s, t) => {
  const { __scopeDropdownMenu: e, ...n } = s, i = Vt(e);
  return /* @__PURE__ */ w.jsx(iA, { ...i, ...n, ref: t });
});
$A.displayName = SA;
var EA = "DropdownMenuArrow", TA = u.forwardRef(
  (s, t) => {
    const { __scopeDropdownMenu: e, ...n } = s, i = Vt(e);
    return /* @__PURE__ */ w.jsx(rA, { ...i, ...n, ref: t });
  }
);
TA.displayName = EA;
var LA = "DropdownMenuSubTrigger", PA = u.forwardRef((s, t) => {
  const { __scopeDropdownMenu: e, ...n } = s, i = Vt(e);
  return /* @__PURE__ */ w.jsx(oA, { ...i, ...n, ref: t });
});
PA.displayName = LA;
var MA = "DropdownMenuSubContent", kA = u.forwardRef((s, t) => {
  const { __scopeDropdownMenu: e, ...n } = s, i = Vt(e);
  return /* @__PURE__ */ w.jsx(
    aA,
    {
      ...i,
      ...n,
      ref: t,
      style: {
        ...s.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
kA.displayName = MA;
var IA = Hg, VA = Dg, AA = _g, NA = qg, RA = Zg, HA = jg;
function OA({ children: s, startTime: t, endTime: e, className: n, ...i }) {
  return /* @__PURE__ */ w.jsx(
    RA,
    {
      className: "group relative flex w-full cursor-pointer select-none items-center justify-start rounded-md p-3 outline-none transition-colors hover:bg-white/10 data-[focus]:ring-2 data-[focus]:ring-white/20 data-[state=checked]:bg-white/5",
      ...i,
      children: /* @__PURE__ */ w.jsxs("div", { className: "flex items-center space-x-3 flex-1", children: [
        /* @__PURE__ */ w.jsxs("div", { className: "flex-shrink-0", children: [
          /* @__PURE__ */ w.jsx(eL, { className: "h-4 w-4 text-white/70 group-data-[state=checked]:hidden" }),
          /* @__PURE__ */ w.jsx(JT, { className: "text-primary hidden h-4 w-4 group-data-[state=checked]:block" })
        ] }),
        /* @__PURE__ */ w.jsxs("div", { className: "flex flex-col flex-1", children: [
          /* @__PURE__ */ w.jsx("span", { className: "text-sm font-medium text-white group-hover:text-white/90", children: s }),
          /* @__PURE__ */ w.jsxs("div", { className: "flex items-center space-x-2 mt-0.5", children: [
            /* @__PURE__ */ w.jsx("span", { className: "text-xs text-white/50", children: t }),
            /* @__PURE__ */ w.jsx("span", { className: "text-xs text-white/30", children: "-" }),
            /* @__PURE__ */ w.jsx("span", { className: "text-xs text-white/50", children: e })
          ] })
        ] })
      ] })
    }
  );
}
const DA = "z-[9999] min-w-[300px] max-w-[350px] rounded-lg border border-white/10 bg-black/95 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-top-2", cd = [
  { title: "Introduction", startTime: "00:00", endTime: "02:30" },
  { title: "Chapter 1: Basics", startTime: "02:31", endTime: "10:00" },
  { title: "Chapter 2: Advanced", startTime: "10:01", endTime: "20:00" }
];
function _A({
  side: s = "top",
  align: t = "end",
  offset: e = 0,
  tooltipSide: n = "top",
  tooltipAlign: i = "center",
  tooltipOffset: o = 0
}) {
  var d;
  const a = oE(), l = ((d = cd[0]) == null ? void 0 : d.title) ?? "None";
  return /* @__PURE__ */ w.jsxs(IA, { children: [
    /* @__PURE__ */ w.jsxs(n3, { children: [
      /* @__PURE__ */ w.jsx(i3, { asChild: !0, children: /* @__PURE__ */ w.jsx(
        VA,
        {
          "aria-label": "Chapters",
          className: o3,
          children: /* @__PURE__ */ w.jsx(Y7, { className: "w-6 h-6" })
        }
      ) }),
      /* @__PURE__ */ w.jsx(
        r3,
        {
          className: a3,
          side: n,
          align: i,
          sideOffset: o,
          children: "Chapters"
        }
      )
    ] }),
    /* @__PURE__ */ w.jsx(AA, { children: /* @__PURE__ */ w.jsxs(
      NA,
      {
        className: DA,
        side: s,
        align: t,
        sideOffset: e,
        collisionBoundary: a == null ? void 0 : a.el,
        children: [
          /* @__PURE__ */ w.jsx("div", { className: "p-4 border-b border-white/10", children: /* @__PURE__ */ w.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ w.jsx(Y7, { className: "w-5 h-5 mr-2 text-white/70" }),
            /* @__PURE__ */ w.jsx("span", { className: "font-medium", children: "Chapters" }),
            /* @__PURE__ */ w.jsx("span", { className: "ml-auto text-sm text-white/50", children: l })
          ] }) }),
          /* @__PURE__ */ w.jsx("div", { className: "p-2 max-h-[400px] overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ w.jsx(
            HA,
            {
              className: "flex flex-col space-y-1",
              value: l,
              children: cd.map((h) => (
                // @ts-ignore
                /* @__PURE__ */ w.jsx(
                  OA,
                  {
                    value: h.title,
                    startTime: h.startTime,
                    endTime: h.endTime,
                    onSelect: () => console.log(`${h.title} selected`),
                    children: h.title
                  },
                  h.title
                )
              ))
            }
          ) })
        ]
      }
    ) })
  ] });
}
function Bg(s, [t, e]) {
  return Math.min(e, Math.max(t, s));
}
function FA(s) {
  const t = u.useRef({ value: s, previous: s });
  return u.useMemo(() => (t.current.value !== s && (t.current.previous = t.current.value, t.current.value = s), t.current.previous), [s]);
}
var Gg = ["PageUp", "PageDown"], Ug = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Wg = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, c3 = "Slider", [tu, qA, ZA] = Qu(c3), [Kg, FN] = k2(c3, [
  ZA
]), [jA, q2] = Kg(c3), zg = u.forwardRef(
  (s, t) => {
    const {
      name: e,
      min: n = 0,
      max: i = 100,
      step: o = 1,
      orientation: a = "horizontal",
      disabled: l = !1,
      minStepsBetweenThumbs: d = 0,
      defaultValue: h = [n],
      value: p,
      onValueChange: f = () => {
      },
      onValueCommit: m = () => {
      },
      inverted: y = !1,
      form: v,
      ...b
    } = s, x = u.useRef(/* @__PURE__ */ new Set()), S = u.useRef(0), k = a === "horizontal" ? BA : GA, [M = [], H] = V2({
      prop: p,
      defaultProp: h,
      onChange: (re) => {
        var se;
        (se = [...x.current][S.current]) == null || se.focus(), f(re);
      }
    }), Z = u.useRef(M);
    function D(re) {
      const Ce = YA(M, re);
      W(re, Ce);
    }
    function P(re) {
      W(re, S.current);
    }
    function K() {
      const re = Z.current[S.current];
      M[S.current] !== re && m(M);
    }
    function W(re, Ce, { commit: se } = { commit: !1 }) {
      const ne = eN(o), Ne = tN(Math.round((re - n) / o) * o + n, ne), j = Bg(Ne, [n, i]);
      H((G = []) => {
        const U = KA(G, j, Ce);
        if (JA(U, d * o)) {
          S.current = U.indexOf(j);
          const F = String(U) !== String(G);
          return F && se && m(U), F ? U : G;
        } else
          return G;
      });
    }
    return /* @__PURE__ */ w.jsx(
      jA,
      {
        scope: s.__scopeSlider,
        name: e,
        disabled: l,
        min: n,
        max: i,
        valueIndexToChangeRef: S,
        thumbs: x.current,
        values: M,
        orientation: a,
        form: v,
        children: /* @__PURE__ */ w.jsx(tu.Provider, { scope: s.__scopeSlider, children: /* @__PURE__ */ w.jsx(tu.Slot, { scope: s.__scopeSlider, children: /* @__PURE__ */ w.jsx(
          k,
          {
            "aria-disabled": l,
            "data-disabled": l ? "" : void 0,
            ...b,
            ref: t,
            onPointerDown: oe(b.onPointerDown, () => {
              l || (Z.current = M);
            }),
            min: n,
            max: i,
            inverted: y,
            onSlideStart: l ? void 0 : D,
            onSlideMove: l ? void 0 : P,
            onSlideEnd: l ? void 0 : K,
            onHomeKeyDown: () => !l && W(n, 0, { commit: !0 }),
            onEndKeyDown: () => !l && W(i, M.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: re, direction: Ce }) => {
              if (!l) {
                const Ne = Gg.includes(re.key) || re.shiftKey && Ug.includes(re.key) ? 10 : 1, j = S.current, G = M[j], U = o * Ne * Ce;
                W(G + U, j, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
zg.displayName = c3;
var [Yg, Qg] = Kg(c3, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), BA = u.forwardRef(
  (s, t) => {
    const {
      min: e,
      max: n,
      dir: i,
      inverted: o,
      onSlideStart: a,
      onSlideMove: l,
      onSlideEnd: d,
      onStepKeyDown: h,
      ...p
    } = s, [f, m] = u.useState(null), y = tt(t, (k) => m(k)), v = u.useRef(), b = Xu(i), x = b === "ltr", S = x && !o || !x && o;
    function L(k) {
      const M = v.current || f.getBoundingClientRect(), H = [0, M.width], D = a7(H, S ? [e, n] : [n, e]);
      return v.current = M, D(k - M.left);
    }
    return /* @__PURE__ */ w.jsx(
      Yg,
      {
        scope: s.__scopeSlider,
        startEdge: S ? "left" : "right",
        endEdge: S ? "right" : "left",
        direction: S ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ w.jsx(
          Xg,
          {
            dir: b,
            "data-orientation": "horizontal",
            ...p,
            ref: y,
            style: {
              ...p.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (k) => {
              const M = L(k.clientX);
              a == null || a(M);
            },
            onSlideMove: (k) => {
              const M = L(k.clientX);
              l == null || l(M);
            },
            onSlideEnd: () => {
              v.current = void 0, d == null || d();
            },
            onStepKeyDown: (k) => {
              const H = Wg[S ? "from-left" : "from-right"].includes(k.key);
              h == null || h({ event: k, direction: H ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), GA = u.forwardRef(
  (s, t) => {
    const {
      min: e,
      max: n,
      inverted: i,
      onSlideStart: o,
      onSlideMove: a,
      onSlideEnd: l,
      onStepKeyDown: d,
      ...h
    } = s, p = u.useRef(null), f = tt(t, p), m = u.useRef(), y = !i;
    function v(b) {
      const x = m.current || p.current.getBoundingClientRect(), S = [0, x.height], k = a7(S, y ? [n, e] : [e, n]);
      return m.current = x, k(b - x.top);
    }
    return /* @__PURE__ */ w.jsx(
      Yg,
      {
        scope: s.__scopeSlider,
        startEdge: y ? "bottom" : "top",
        endEdge: y ? "top" : "bottom",
        size: "height",
        direction: y ? 1 : -1,
        children: /* @__PURE__ */ w.jsx(
          Xg,
          {
            "data-orientation": "vertical",
            ...h,
            ref: f,
            style: {
              ...h.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (b) => {
              const x = v(b.clientY);
              o == null || o(x);
            },
            onSlideMove: (b) => {
              const x = v(b.clientY);
              a == null || a(x);
            },
            onSlideEnd: () => {
              m.current = void 0, l == null || l();
            },
            onStepKeyDown: (b) => {
              const S = Wg[y ? "from-bottom" : "from-top"].includes(b.key);
              d == null || d({ event: b, direction: S ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), Xg = u.forwardRef(
  (s, t) => {
    const {
      __scopeSlider: e,
      onSlideStart: n,
      onSlideMove: i,
      onSlideEnd: o,
      onHomeKeyDown: a,
      onEndKeyDown: l,
      onStepKeyDown: d,
      ...h
    } = s, p = q2(c3, e);
    return /* @__PURE__ */ w.jsx(
      nt.span,
      {
        ...h,
        ref: t,
        onKeyDown: oe(s.onKeyDown, (f) => {
          f.key === "Home" ? (a(f), f.preventDefault()) : f.key === "End" ? (l(f), f.preventDefault()) : Gg.concat(Ug).includes(f.key) && (d(f), f.preventDefault());
        }),
        onPointerDown: oe(s.onPointerDown, (f) => {
          const m = f.target;
          m.setPointerCapture(f.pointerId), f.preventDefault(), p.thumbs.has(m) ? m.focus() : n(f);
        }),
        onPointerMove: oe(s.onPointerMove, (f) => {
          f.target.hasPointerCapture(f.pointerId) && i(f);
        }),
        onPointerUp: oe(s.onPointerUp, (f) => {
          const m = f.target;
          m.hasPointerCapture(f.pointerId) && (m.releasePointerCapture(f.pointerId), o(f));
        })
      }
    );
  }
), Jg = "SliderTrack", ey = u.forwardRef(
  (s, t) => {
    const { __scopeSlider: e, ...n } = s, i = q2(Jg, e);
    return /* @__PURE__ */ w.jsx(
      nt.span,
      {
        "data-disabled": i.disabled ? "" : void 0,
        "data-orientation": i.orientation,
        ...n,
        ref: t
      }
    );
  }
);
ey.displayName = Jg;
var su = "SliderRange", ty = u.forwardRef(
  (s, t) => {
    const { __scopeSlider: e, ...n } = s, i = q2(su, e), o = Qg(su, e), a = u.useRef(null), l = tt(t, a), d = i.values.length, h = i.values.map(
      (m) => ny(m, i.min, i.max)
    ), p = d > 1 ? Math.min(...h) : 0, f = 100 - Math.max(...h);
    return /* @__PURE__ */ w.jsx(
      nt.span,
      {
        "data-orientation": i.orientation,
        "data-disabled": i.disabled ? "" : void 0,
        ...n,
        ref: l,
        style: {
          ...s.style,
          [o.startEdge]: p + "%",
          [o.endEdge]: f + "%"
        }
      }
    );
  }
);
ty.displayName = su;
var nu = "SliderThumb", sy = u.forwardRef(
  (s, t) => {
    const e = qA(s.__scopeSlider), [n, i] = u.useState(null), o = tt(t, (l) => i(l)), a = u.useMemo(
      () => n ? e().findIndex((l) => l.ref.current === n) : -1,
      [e, n]
    );
    return /* @__PURE__ */ w.jsx(UA, { ...s, ref: o, index: a });
  }
), UA = u.forwardRef(
  (s, t) => {
    const { __scopeSlider: e, index: n, name: i, ...o } = s, a = q2(nu, e), l = Qg(nu, e), [d, h] = u.useState(null), p = tt(t, (L) => h(L)), f = d ? a.form || !!d.closest("form") : !0, m = $m(d), y = a.values[n], v = y === void 0 ? 0 : ny(y, a.min, a.max), b = zA(n, a.values.length), x = m == null ? void 0 : m[l.size], S = x ? QA(x, v, l.direction) : 0;
    return u.useEffect(() => {
      if (d)
        return a.thumbs.add(d), () => {
          a.thumbs.delete(d);
        };
    }, [d, a.thumbs]), /* @__PURE__ */ w.jsxs(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [l.startEdge]: `calc(${v}% + ${S}px)`
        },
        children: [
          /* @__PURE__ */ w.jsx(tu.ItemSlot, { scope: s.__scopeSlider, children: /* @__PURE__ */ w.jsx(
            nt.span,
            {
              role: "slider",
              "aria-label": s["aria-label"] || b,
              "aria-valuemin": a.min,
              "aria-valuenow": y,
              "aria-valuemax": a.max,
              "aria-orientation": a.orientation,
              "data-orientation": a.orientation,
              "data-disabled": a.disabled ? "" : void 0,
              tabIndex: a.disabled ? void 0 : 0,
              ...o,
              ref: p,
              style: y === void 0 ? { display: "none" } : s.style,
              onFocus: oe(s.onFocus, () => {
                a.valueIndexToChangeRef.current = n;
              })
            }
          ) }),
          f && /* @__PURE__ */ w.jsx(
            WA,
            {
              name: i ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: y
            },
            n
          )
        ]
      }
    );
  }
);
sy.displayName = nu;
var WA = (s) => {
  const { value: t, ...e } = s, n = u.useRef(null), i = FA(t);
  return u.useEffect(() => {
    const o = n.current, a = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(a, "value").set;
    if (i !== t && d) {
      const h = new Event("input", { bubbles: !0 });
      d.call(o, t), o.dispatchEvent(h);
    }
  }, [i, t]), /* @__PURE__ */ w.jsx("input", { style: { display: "none" }, ...e, ref: n, defaultValue: t });
};
function KA(s = [], t, e) {
  const n = [...s];
  return n[e] = t, n.sort((i, o) => i - o);
}
function ny(s, t, e) {
  const o = 100 / (e - t) * (s - t);
  return Bg(o, [0, 100]);
}
function zA(s, t) {
  return t > 2 ? `Value ${s + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][s] : void 0;
}
function YA(s, t) {
  if (s.length === 1) return 0;
  const e = s.map((i) => Math.abs(i - t)), n = Math.min(...e);
  return e.indexOf(n);
}
function QA(s, t, e) {
  const n = s / 2, o = a7([0, 50], [0, n]);
  return (n - o(t) * e) * e;
}
function XA(s) {
  return s.slice(0, -1).map((t, e) => s[e + 1] - t);
}
function JA(s, t) {
  if (t > 0) {
    const e = XA(s);
    return Math.min(...e) >= t;
  }
  return !0;
}
function a7(s, t) {
  return (e) => {
    if (s[0] === s[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (s[1] - s[0]);
    return t[0] + n * (e - s[0]);
  };
}
function eN(s) {
  return (String(s).split(".")[1] || "").length;
}
function tN(s, t) {
  const e = Math.pow(10, t);
  return Math.round(s * e) / e;
}
var iy = zg, ry = ey, oy = ty, ay = sy;
function sN() {
  const s = Zt("volume"), t = Zt("canSetVolume"), e = Zt("muted"), n = rm();
  if (!t) return null;
  const i = e ? [0] : [s * 100];
  return /* @__PURE__ */ w.jsxs(
    iy,
    {
      className: "group relative inline-flex h-7 w-full max-w-24 cursor-pointer touch-none select-none items-center outline-none",
      value: i,
      onValueChange: ([o]) => {
        n.changeVolume(o / 100);
      },
      children: [
        /* @__PURE__ */ w.jsx(ry, { className: "h-[3px] w-full rounded-sm bg-white/30 relative", children: /* @__PURE__ */ w.jsx(oy, { className: "bg-media-brand absolute h-full rounded-sm will-change-[width]" }) }),
        /* @__PURE__ */ w.jsx(
          ay,
          {
            "aria-label": "Volume",
            className: "block h-[15px] w-[15px] rounded-full border border-[#cacaca] bg-white outline-none opacity-0 ring-white/40 transition-opacity group-hocus:opacity-100 focus:opacity-100 focus:ring-4 will-change-[left]"
          }
        )
      ]
    }
  );
}
function nN({ thumbnails: s }) {
  const t = Zt("currentTime"), e = Zt("canSeek"), n = Zt("duration"), i = Zt("seeking"), o = rm(), a = 1 / n * 100, [l, d] = wd(0), { previewRootRef: h, previewRef: p, previewValue: f } = ZE({
    clamp: !0,
    offset: 6,
    orientation: "horizontal"
  }), m = f / 100 * n;
  return ou(() => {
    i || d(t / n * 100);
  }, [t, n]), /* @__PURE__ */ w.jsxs(
    iy,
    {
      className: "group relative inline-flex h-4 w-full cursor-pointer touch-none select-none items-center outline-none",
      value: [l],
      disabled: !e,
      step: Number.isFinite(a) ? a : 1,
      ref: h,
      onValueChange: ([y]) => {
        d(y), o.seeking(y / 100 * n);
      },
      onValueCommit: ([y]) => {
        o.seek(y / 100 * n);
      },
      children: [
        /* @__PURE__ */ w.jsx(ry, { className: "h-[4px] w-full rounded-sm bg-white/30 relative", children: /* @__PURE__ */ w.jsx(oy, { className: "bg-media-brand absolute h-full rounded-sm will-change-[width]" }) }),
        /* @__PURE__ */ w.jsx(
          ay,
          {
            "aria-label": "Current Time",
            className: "block h-[15px] w-[15px] rounded-full border border-[#cacaca] bg-white outline-none opacity-0 ring-white/40 transition-opacity group-hocus:opacity-100 focus:opacity-100 focus:ring-4 will-change-[left]"
          }
        ),
        /* @__PURE__ */ w.jsx(
          "div",
          {
            className: "flex flex-col items-center absolute opacity-0 data-[visible]:opacity-100 transition-opacity duration-200 will-change-[left] pointer-events-none",
            ref: p,
            children: /* @__PURE__ */ w.jsx("span", { className: "text-[13px]", children: E2(m) })
          }
        )
      ]
    }
  );
}
const dc = 30;
function iN({ thumbnails: s }) {
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx(rN, {}),
    /* @__PURE__ */ w.jsx(
      XC,
      {
        className: `${UE.captions} media-preview:opacity-0 media-controls:bottom-[85px] media-captions:opacity-100 absolute inset-0 bottom-2 z-10 select-none break-words opacity-0 transition-[opacity,bottom] duration-300`
      }
    ),
    /* @__PURE__ */ w.jsx(tc.Root, { className: "media-controls:opacity-100 absolute inset-0 z-10 flex h-full w-full flex-col bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity", children: /* @__PURE__ */ w.jsxs(YT, { children: [
      /* @__PURE__ */ w.jsx("div", { className: "flex-1" }),
      /* @__PURE__ */ w.jsxs(tc.Group, { className: "flex w-full items-center px-2", children: [
        /* @__PURE__ */ w.jsx("div", { className: "mr-2.5 flex items-center text-xs font-medium", children: /* @__PURE__ */ w.jsx(W9, { className: "time", type: "current" }) }),
        /* @__PURE__ */ w.jsx(nN, { thumbnails: s }),
        /* @__PURE__ */ w.jsx("div", { className: "ml-2.5 flex items-center text-xs font-medium", children: /* @__PURE__ */ w.jsx(W9, { className: "time", type: "duration" }) })
      ] }),
      /* @__PURE__ */ w.jsxs(tc.Group, { className: "mt-0.5 flex w-full items-center px-2 pb-2", children: [
        /* @__PURE__ */ w.jsx(iI, { tooltipAlign: "start", tooltipOffset: dc }),
        /* @__PURE__ */ w.jsx(rI, { tooltipOffset: dc }),
        /* @__PURE__ */ w.jsx(sN, {}),
        /* @__PURE__ */ w.jsx("div", { className: "flex-1" }),
        /* @__PURE__ */ w.jsx(cI, {}),
        /* @__PURE__ */ w.jsx(aI, {}),
        /* @__PURE__ */ w.jsx(_A, {}),
        /* @__PURE__ */ w.jsx(oI, { tooltipAlign: "end", tooltipOffset: dc })
      ] })
    ] }) })
  ] });
}
function rN() {
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx(
      m3,
      {
        className: "absolute inset-0 z-0 block h-full w-full",
        event: "pointerup",
        action: "toggle:paused"
      }
    ),
    /* @__PURE__ */ w.jsx(
      m3,
      {
        className: "absolute inset-0 z-0 block h-full w-full",
        event: "dblpointerup",
        action: "toggle:fullscreen"
      }
    ),
    /* @__PURE__ */ w.jsx(
      m3,
      {
        className: "absolute left-0 top-0 z-10 block h-full w-1/5",
        event: "dblpointerup",
        action: "seek:-10"
      }
    ),
    /* @__PURE__ */ w.jsx(
      m3,
      {
        className: "absolute right-0 top-0 z-10 block h-full w-1/5",
        event: "dblpointerup",
        action: "seek:10"
      }
    )
  ] });
}
const oN = [
  // Subtitles
  {
    src: "https://files.vidstack.io/sprite-fight/subs/english.vtt",
    label: "English",
    language: "en-US",
    kind: "subtitles",
    default: !0
  },
  {
    src: "https://files.vidstack.io/sprite-fight/subs/spanish.vtt",
    label: "Spanish",
    language: "es-ES",
    kind: "subtitles"
  },
  // Chapters
  {
    src: "https://files.vidstack.io/sprite-fight/chapters.vtt",
    kind: "chapters",
    language: "en-US",
    default: !0
  }
];
function qN() {
  let s = fy(null);
  const { canPictureInPicture: t, pictureInPicture: e } = o$(s);
  console.log(t, e), ou(() => s.current.subscribe(({ paused: l, viewType: d }) => {
  }), []);
  function n(l, d) {
    Ew(l) && (l.config = {});
  }
  function i(l, d) {
  }
  function o(l, d) {
    const h = d.request;
    console.log(h);
  }
  function a(l, d) {
    const h = d.request;
    console.log(h);
  }
  return /* @__PURE__ */ w.jsxs(
    hm,
    {
      className: "w-full aspect-video bg-slate-900 text-white font-sans overflow-hidden rounded-md ring-media-focus data-[focus]:ring-4",
      title: "Sprite Fight",
      src: "https://www.youtube.com/watch?v=BU8-GA0a06g",
      crossOrigin: !0,
      playsInline: !0,
      onProviderChange: n,
      onCanPlay: i,
      ref: s,
      onPictureInPictureChange: o,
      onPictureInPictureError: a,
      children: [
        /* @__PURE__ */ w.jsxs(fm, { children: [
          /* @__PURE__ */ w.jsx(
            mm,
            {
              className: "absolute inset-0 block h-full w-full rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 object-cover",
              src: "https://files.vidstack.io/sprite-fight/poster.webp",
              alt: "Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
            }
          ),
          oN.map((l) => /* @__PURE__ */ I(Cm, { ...l, key: l.src }))
        ] }),
        /* @__PURE__ */ w.jsx(iN, { thumbnails: "https://files.vidstack.io/sprite-fight/thumbnails.vtt" })
      ]
    }
  );
}
export {
  av as A,
  ue as B,
  _6 as C,
  ye as D,
  Kw as H,
  f5 as I,
  fe as L,
  qN as P,
  Qt as Q,
  l4 as R,
  lr as T,
  z4 as V,
  Yw as a,
  ie as b,
  O as c,
  ce as d,
  E as e,
  ct as f,
  ha as g,
  Gb as h,
  ku as i,
  jt as j,
  b2 as k,
  Ze as l,
  q6 as m,
  ee as n,
  oa as o,
  X6 as p,
  Aa as q,
  vt as r,
  Mt as s,
  Nd as t,
  qt as u,
  Iy as v,
  dN as w,
  q as x,
  Mu as y,
  jb as z
};
