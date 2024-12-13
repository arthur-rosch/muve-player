var U = Object.defineProperty;
var tt = (i, t, e) => t in i ? U(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var h = (i, t, e) => tt(i, typeof t != "symbol" ? t + "" : t, e);
const et = {
  LoadFail: 0,
  BadSignature: 1,
  BadTimestamp: 2,
  BadSettingValue: 3,
  BadFormat: 4,
  UnknownSetting: 5
};
class it extends Error {
  constructor(e) {
    super(e.reason);
    h(this, "code");
    h(this, "line");
    this.code = e.code, this.line = e.line;
  }
}
const j = /\r?\n|\r/gm;
class st {
  constructor(t) {
    h(this, "writable");
    h(this, "readable");
    const e = new rt(t);
    this.writable = new WritableStream({
      write(s) {
        e.transform(s);
      },
      close() {
        e.close();
      }
    }), this.readable = new ReadableStream({
      start(s) {
        e.onLine = (n) => s.enqueue(n), e.onClose = () => s.close();
      }
    });
  }
}
class rt {
  constructor(t) {
    h(this, "a", "");
    h(this, "b");
    h(this, "onLine");
    h(this, "onClose");
    this.b = new TextDecoder(t);
  }
  transform(t) {
    this.a += this.b.decode(t, { stream: !0 });
    const e = this.a.split(j);
    this.a = e.pop() || "";
    for (let s = 0; s < e.length; s++)
      this.onLine(e[s].trim());
  }
  close() {
    this.a && this.onLine(this.a.trim()), this.a = "", this.onClose();
  }
}
async function nt(i, t) {
  const e = new ReadableStream({
    start(s) {
      const n = i.split(j);
      for (const r of n)
        s.enqueue(r);
      s.close();
    }
  });
  return C(e, t);
}
async function C(i, t) {
  const e = (t == null ? void 0 : t.type) ?? "vtt";
  let s;
  if (typeof e == "string")
    switch (e) {
      case "srt":
        s = (await import("./srt-parser-CWqahKwO.js")).default;
        break;
      case "ssa":
      case "ass":
        s = (await import("./ssa-parser-BqjjKy4M.js")).default;
        break;
      default:
        s = (await Promise.resolve().then(function() {
          return St;
        })).default;
    }
  else
    s = e;
  let n;
  const r = i.getReader(), l = s(), a = !!(t != null && t.strict) || !!(t != null && t.errors);
  await l.init({
    strict: !1,
    ...t,
    errors: a,
    type: e,
    cancel() {
      r.cancel(), n = l.done(!0);
    }
  });
  let o = 1;
  for (; ; ) {
    const { value: c, done: f } = await r.read();
    if (f) {
      l.parse("", o), n = l.done(!1);
      break;
    }
    l.parse(c, o), o++;
  }
  return n;
}
async function at(i, t) {
  var l, a;
  const e = await i;
  if (!e.ok || !e.body)
    return {
      metadata: {},
      cues: [],
      regions: [],
      errors: [void 0]
    };
  const s = e.headers.get("content-type") || "", n = (l = s.match(/text\/(.*?)(?:;|$)/)) == null ? void 0 : l[1], r = (a = s.match(/charset=(.*?)(?:;|$)/)) == null ? void 0 : a[1];
  return G(e.body, { type: n, encoding: r, ...t });
}
async function G(i, { encoding: t = "utf-8", ...e } = {}) {
  const s = i.pipeThrough(new st(t));
  return C(s, e);
}
class H extends EventTarget {
  constructor(e, s, n) {
    super();
    /**
     * A string that identifies the cue.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCue/id}
     */
    h(this, "id", "");
    /**
     * A `double` that represents the video time that the cue will start being displayed, in seconds.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCue/startTime}
     */
    h(this, "startTime");
    /**
     * A `double` that represents the video time that the cue will stop being displayed, in seconds.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCue/endTime}
     */
    h(this, "endTime");
    /**
     * Returns a string with the contents of the cue.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/text}
     */
    h(this, "text");
    /**
     * A `boolean` for whether the video will pause when this cue stops being displayed.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCue/pauseOnExit}
     */
    h(this, "pauseOnExit", !1);
    this.startTime = e, this.endTime = s, this.text = n;
  }
  addEventListener(e, s, n) {
    super.addEventListener(e, s, n);
  }
  removeEventListener(e, s, n) {
    super.removeEventListener(e, s, n);
  }
}
const R = typeof document > "u", lt = R ? H : window.VTTCue;
class V extends lt {
  constructor() {
    super(...arguments);
    /**
     * A `VTTRegion` object describing the video's sub-region that the cue will be drawn onto,
     * or `null` if none is assigned.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/region}
     */
    h(this, "region", null);
    /**
     * The cue writing direction.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/vertical}
     */
    h(this, "vertical", "");
    /**
     * Returns `true` if the `VTTCue.line` attribute is an integer number of lines or a percentage
     * of the video size.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/snapToLines}
     */
    h(this, "snapToLines", !0);
    /**
     * Returns the line positioning of the cue. This can be the string `'auto'` or a number whose
     * interpretation depends on the value of `VTTCue.snapToLines`.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/line}
     */
    h(this, "line", "auto");
    /**
     * Returns an enum representing the alignment of the `VTTCue.line`.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/lineAlign}
     */
    h(this, "lineAlign", "start");
    /**
     * Returns the indentation of the cue within the line. This can be the string `'auto'` or a
     * number representing the percentage of the `VTTCue.region`, or the video size if `VTTCue`.region`
     * is `null`.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/position}
     */
    h(this, "position", "auto");
    /**
     * Returns an enum representing the alignment of the cue. This is used to determine what
     * the `VTTCue.position` is anchored to. The default is `'auto'`.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/positionAlign}
     */
    h(this, "positionAlign", "auto");
    /**
     * Returns a double representing the size of the cue, as a percentage of the video size.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/size}
     */
    h(this, "size", 100);
    /**
     * Returns an enum representing the alignment of all the lines of text within the cue box.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/align}
     */
    h(this, "align", "center");
    /**
     * Additional styles associated with the cue.
     */
    h(this, "style");
  }
}
class F {
  constructor() {
    /**
     * A string that identifies the region.
     */
    h(this, "id", "");
    /**
     * A `double` representing the width of the region, as a percentage of the video.
     */
    h(this, "width", 100);
    /**
     * A `double` representing the height of the region, in number of lines.
     */
    h(this, "lines", 3);
    /**
     * A `double` representing the region anchor X offset, as a percentage of the region.
     */
    h(this, "regionAnchorX", 0);
    /**
     * A `double` representing the region anchor Y offset, as a percentage of the region.
     */
    h(this, "regionAnchorY", 100);
    /**
     * A `double` representing the viewport anchor X offset, as a percentage of the video.
     */
    h(this, "viewportAnchorX", 0);
    /**
     * A `double` representing the viewport anchor Y offset, as a percentage of the video.
     */
    h(this, "viewportAnchorY", 100);
    /**
     * An enum representing how adding new cues will move existing cues.
     */
    h(this, "scroll", "");
  }
}
const O = ",", ot = "%";
function ht(i) {
  const t = parseInt(i, 10);
  return Number.isNaN(t) ? null : t;
}
function b(i) {
  const t = parseInt(i.replace(ot, ""), 10);
  return !Number.isNaN(t) && t >= 0 && t <= 100 ? t : null;
}
function B(i) {
  if (!i.includes(O))
    return null;
  const [t, e] = i.split(O).map(b);
  return t !== null && e !== null ? [t, e] : null;
}
function ct(i) {
  const t = parseFloat(i);
  return Number.isNaN(t) ? null : t;
}
const ut = "WEBVTT", z = ",", ft = "%", w = /[:=]/, dt = /^[\s\t]*(region|vertical|line|position|size|align)[:=]/, pt = "NOTE", gt = "REGION", mt = /^REGION:?[\s\t]+/, y = /[\s\t]+/, Tt = "-->", wt = /[\s\t]*-->[\s\t]+/, vt = /start|center|end|left|right/, yt = /start|center|end/, bt = /line-(?:left|right)|center|auto/, At = /^(?:(\d{1,2}):)?(\d{2}):(\d{2})(?:\.(\d{1,3}))?$/;
var D = /* @__PURE__ */ ((i) => (i[i.None = 0] = "None", i[i.Header = 1] = "Header", i[i.Cue = 2] = "Cue", i[i.Region = 3] = "Region", i[i.Note = 4] = "Note", i))(D || {});
class W {
  constructor() {
    h(this, "h");
    h(this, "e", 0);
    h(this, "i", {});
    h(this, "j", {});
    h(this, "l", []);
    h(this, "c", null);
    h(this, "d", null);
    h(this, "m", []);
    h(this, "f");
    h(this, "n", "");
  }
  async init(t) {
    this.h = t, t.strict && (this.e = 1), t.errors && (this.f = (await import("./errors-DCJKAXTz.js")).ParseErrorBuilder);
  }
  parse(t, e) {
    var s, n, r, l, a, o;
    if (t === "")
      this.c ? (this.l.push(this.c), (n = (s = this.h).onCue) == null || n.call(s, this.c), this.c = null) : this.d ? (this.j[this.d.id] = this.d, (l = (r = this.h).onRegion) == null || l.call(r, this.d), this.d = null) : this.e === 1 && (this.k(t, e), (o = (a = this.h).onHeaderMetadata) == null || o.call(a, this.i)), this.e = 0;
    else if (this.e)
      switch (this.e) {
        case 1:
          this.k(t, e);
          break;
        case 2:
          if (this.c) {
            const c = this.c.text.length > 0;
            !c && dt.test(t) ? this.o(t.split(y), e) : this.c.text += (c ? `
` : "") + t;
          }
          break;
        case 3:
          this.p(t.split(y), e);
          break;
      }
    else if (t.startsWith(pt))
      this.e = 4;
    else if (t.startsWith(gt))
      this.e = 3, this.d = new F(), this.p(t.replace(mt, "").split(y), e);
    else if (t.includes(Tt)) {
      const c = this.q(t, e);
      c && (this.c = new V(c[0], c[1], ""), this.c.id = this.n, this.o(c[2], e)), this.e = 2;
    } else e === 1 && this.k(t, e);
    this.n = t;
  }
  done() {
    return {
      metadata: this.i,
      cues: this.l,
      regions: Object.values(this.j),
      errors: this.m
    };
  }
  k(t, e) {
    var s;
    if (e > 1) {
      if (w.test(t)) {
        const [n, r] = t.split(w);
        n && (this.i[n] = (r || "").replace(y, ""));
      }
    } else t.startsWith(ut) ? this.e = 1 : this.g((s = this.f) == null ? void 0 : s.r());
  }
  q(t, e) {
    var c, f, u;
    const [s, n = ""] = t.split(wt), [r, ...l] = n.split(y), a = E(s), o = E(r);
    if (a !== null && o !== null && o > a)
      return [a, o, l];
    a === null && this.g((c = this.f) == null ? void 0 : c.s(s, e)), o === null && this.g((f = this.f) == null ? void 0 : f.t(r, e)), a != null && o !== null && o > a && this.g((u = this.f) == null ? void 0 : u.u(a, o, e));
  }
  /**
   * @see {@link https://www.w3.org/TR/webvtt1/#region-settings-parsing}
   */
  p(t, e) {
    var n, r;
    let s;
    for (let l = 0; l < t.length; l++)
      if (w.test(t[l])) {
        s = !1;
        const [a, o] = t[l].split(w);
        switch (a) {
          case "id":
            this.d.id = o;
            break;
          case "width":
            const c = b(o);
            c !== null ? this.d.width = c : s = !0;
            break;
          case "lines":
            const f = ht(o);
            f !== null ? this.d.lines = f : s = !0;
            break;
          case "regionanchor":
            const u = B(o);
            u !== null ? (this.d.regionAnchorX = u[0], this.d.regionAnchorY = u[1]) : s = !0;
            break;
          case "viewportanchor":
            const d = B(o);
            d !== null ? (this.d.viewportAnchorX = d[0], this.d.viewportAnchorY = d[1]) : s = !0;
            break;
          case "scroll":
            o === "up" ? this.d.scroll = "up" : s = !0;
            break;
          default:
            this.g((n = this.f) == null ? void 0 : n.v(a, o, e));
        }
        s && this.g((r = this.f) == null ? void 0 : r.w(a, o, e));
      }
  }
  /**
   * @see {@link https://www.w3.org/TR/webvtt1/#cue-timings-and-settings-parsing}
   */
  o(t, e) {
    var n, r;
    let s;
    for (let l = 0; l < t.length; l++)
      if (s = !1, w.test(t[l])) {
        const [a, o] = t[l].split(w);
        switch (a) {
          case "region":
            const c = this.j[o];
            c && (this.c.region = c);
            break;
          case "vertical":
            o === "lr" || o === "rl" ? (this.c.vertical = o, this.c.region = null) : s = !0;
            break;
          case "line":
            const [f, u] = o.split(z);
            if (f.includes(ft)) {
              const v = b(f);
              v !== null ? (this.c.line = v, this.c.snapToLines = !1) : s = !0;
            } else {
              const v = ct(f);
              v !== null ? this.c.line = v : s = !0;
            }
            yt.test(u) ? this.c.lineAlign = u : u && (s = !0), this.c.line !== "auto" && (this.c.region = null);
            break;
          case "position":
            const [d, g] = o.split(z), P = b(d);
            P !== null ? this.c.position = P : s = !0, g && bt.test(g) ? this.c.positionAlign = g : g && (s = !0);
            break;
          case "size":
            const N = b(o);
            N !== null ? (this.c.size = N, N < 100 && (this.c.region = null)) : s = !0;
            break;
          case "align":
            vt.test(o) ? this.c.align = o : s = !0;
            break;
          default:
            this.g((n = this.f) == null ? void 0 : n.x(a, o, e));
        }
        s && this.g((r = this.f) == null ? void 0 : r.y(a, o, e));
      }
  }
  g(t) {
    var e, s;
    if (t) {
      if (this.m.push(t), this.h.strict)
        throw this.h.cancel(), t;
      (s = (e = this.h).onError) == null || s.call(e, t);
    }
  }
}
function E(i) {
  const t = i.match(At);
  if (!t)
    return null;
  const e = t[1] ? parseInt(t[1], 10) : 0, s = parseInt(t[2], 10), n = parseInt(t[3], 10), r = t[4] ? parseInt(t[4].padEnd(3, "0"), 10) : 0, l = e * 3600 + s * 60 + n + r / 1e3;
  return e < 0 || s < 0 || n < 0 || r < 0 || s > 59 || n > 59 ? null : l;
}
function Et() {
  return new W();
}
var St = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  VTTBlock: D,
  VTTParser: W,
  default: Et,
  parseVTTTimestamp: E
});
const kt = /[0-9]/, Nt = /[\s\t]+/, q = {
  c: "span",
  i: "i",
  b: "b",
  u: "u",
  ruby: "ruby",
  rt: "rt",
  v: "span",
  lang: "span",
  timestamp: "span"
}, _t = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&nbsp;": " ",
  "&lrm;": "‎",
  "&rlm;": "‏"
}, Ct = /&(?:amp|lt|gt|quot|#(0+)?39|nbsp|lrm|rlm);/g, Rt = /* @__PURE__ */ new Set([
  "white",
  "lime",
  "cyan",
  "red",
  "yellow",
  "magenta",
  "blue",
  "black"
]), It = /* @__PURE__ */ new Set(Object.keys(q));
function X(i) {
  var c, f;
  let t = "", e = 1, s = [], n = [], r;
  for (let u = 0; u < i.text.length; u++) {
    const d = i.text[u];
    switch (e) {
      case 1:
        d === "<" ? (o(), e = 2) : t += d;
        break;
      case 2:
        switch (d) {
          case `
`:
          case "	":
          case " ":
            l(), e = 4;
            break;
          case ".":
            l(), e = 3;
            break;
          case "/":
            e = 5;
            break;
          case ">":
            l(), e = 1;
            break;
          default:
            !t && kt.test(d) && (e = 6), t += d;
            break;
        }
        break;
      case 3:
        switch (d) {
          case "	":
          case " ":
          case `
`:
            a(), r && ((c = r.class) == null || c.trim()), e = 4;
            break;
          case ".":
            a();
            break;
          case ">":
            a(), r && ((f = r.class) == null || f.trim()), e = 1;
            break;
          default:
            t += d;
        }
        break;
      case 4:
        d === ">" ? (t = t.replace(Nt, " "), (r == null ? void 0 : r.type) === "v" ? r.voice = _(t) : (r == null ? void 0 : r.type) === "lang" && (r.lang = _(t)), t = "", e = 1) : t += d;
        break;
      case 5:
        d === ">" && (t = "", r = n.pop(), e = 1);
        break;
      case 6:
        if (d === ">") {
          const g = E(t);
          g !== null && g >= i.startTime && g <= i.endTime && (t = "timestamp", l(), r.time = g), t = "", e = 1;
        } else
          t += d;
        break;
    }
  }
  function l() {
    if (It.has(t)) {
      const u = r;
      r = Lt(t), u ? (n[n.length - 1] !== u && n.push(u), u.children.push(r)) : s.push(r);
    }
    t = "", e = 1;
  }
  function a() {
    if (r && t) {
      const u = t.replace("bg_", "");
      Rt.has(u) ? r[t.startsWith("bg_") ? "bgColor" : "color"] = u : r.class = r.class ? r.class + " " + t : t;
    }
    t = "";
  }
  function o() {
    if (!t)
      return;
    const u = { type: "text", data: _(t) };
    r ? r.children.push(u) : s.push(u), t = "";
  }
  return e === 1 && o(), s;
}
function Lt(i) {
  return {
    tagName: q[i],
    type: i,
    children: []
  };
}
function _(i) {
  return i.replace(Ct, (t) => _t[t] || "'");
}
function p(i, t, e) {
  i.style.setProperty(`--${t}`, e + "");
}
function m(i, t, e = !0) {
  i.setAttribute(`data-${t}`, e === !0 ? "" : e + "");
}
function S(i, t) {
  i.setAttribute("data-part", t);
}
function Mt(i) {
  return parseFloat(getComputedStyle(i).lineHeight) || 0;
}
function xt(i) {
  if (R)
    throw Error(
      "[media-captions] called `createVTTCueTemplate` on the server - use `renderVTTCueString`"
    );
  const t = document.createElement("template");
  return t.innerHTML = I(i), { cue: i, content: t.content };
}
function I(i, t = 0) {
  return L(X(i), t);
}
function L(i, t = 0) {
  let e, s = "";
  for (const n of i)
    if (n.type === "text")
      s += n.data;
    else {
      const r = n.type === "timestamp";
      e = {}, e.class = n.class, e.title = n.type === "v" && n.voice, e.lang = n.type === "lang" && n.lang, e["data-part"] = n.type === "v" && "voice", r && (e["data-part"] = "timed", e["data-time"] = n.time, e["data-future"] = n.time > t, e["data-past"] = n.time < t), e.style = `${n.color ? `color: ${n.color};` : ""}${n.bgColor ? `background-color: ${n.bgColor};` : ""}`;
      const l = Object.entries(e).filter((a) => a[1]).map((a) => `${a[0]}="${a[1] === !0 ? "" : a[1]}"`).join(" ");
      s += `<${n.tagName}${l ? " " + l : ""}>${L(
        n.children
      )}</${n.tagName}>`;
    }
  return s;
}
function Y(i, t) {
  if (!R)
    for (const e of i.querySelectorAll('[data-part="timed"]')) {
      const s = Number(e.getAttribute("data-time"));
      Number.isNaN(s) || (s > t ? m(e, "future") : e.removeAttribute("data-future"), s < t ? m(e, "past") : e.removeAttribute("data-past"));
    }
}
function Pt(i, t) {
  let e = null, s;
  function n() {
    r(), i(...s), s = void 0;
  }
  function r() {
    clearTimeout(e), e = null;
  }
  function l() {
    s = [].slice.call(arguments), r(), e = setTimeout(n, t);
  }
  return l;
}
const T = Symbol(0);
function M(i) {
  return i instanceof HTMLElement ? {
    top: i.offsetTop,
    width: i.clientWidth,
    height: i.clientHeight,
    left: i.offsetLeft,
    right: i.offsetLeft + i.clientWidth,
    bottom: i.offsetTop + i.clientHeight
  } : { ...i };
}
function k(i, t, e) {
  switch (t) {
    case "+x":
      i.left += e, i.right += e;
      break;
    case "-x":
      i.left -= e, i.right -= e;
      break;
    case "+y":
      i.top += e, i.bottom += e;
      break;
    case "-y":
      i.top -= e, i.bottom -= e;
      break;
  }
}
function Ot(i, t) {
  return i.left <= t.right && i.right >= t.left && i.top <= t.bottom && i.bottom >= t.top;
}
function Bt(i, t) {
  for (let e = 0; e < t.length; e++)
    if (Ot(i, t[e]))
      return t[e];
  return null;
}
function $(i, t) {
  return t.top >= 0 && t.bottom <= i.height && t.left >= 0 && t.right <= i.width;
}
function zt(i, t, e) {
  switch (e) {
    case "+x":
      return t.left < 0;
    case "-x":
      return t.right > i.width;
    case "+y":
      return t.top < 0;
    case "-y":
      return t.bottom > i.height;
  }
}
function $t(i, t) {
  const e = Math.max(0, Math.min(i.width, t.right) - Math.max(0, t.left)), s = Math.max(0, Math.min(i.height, t.bottom) - Math.max(0, t.top));
  return e * s / (i.height * i.width);
}
function x(i, t) {
  return {
    top: t.top / i.height,
    left: t.left / i.width,
    right: (i.width - t.right) / i.width,
    bottom: (i.height - t.bottom) / i.height
  };
}
function K(i, t) {
  return t.top = t.top * i.height, t.left = t.left * i.width, t.right = i.width - t.right * i.width, t.bottom = i.height - t.bottom * i.height, t;
}
const J = ["top", "left", "right", "bottom"];
function Q(i, t, e, s) {
  const n = x(t, e);
  for (const r of J)
    p(i, `${s}-${r}`, n[r] * 100 + "%");
}
function Z(i, t, e, s) {
  let n = 1, r, l = { ...t };
  for (let a = 0; a < s.length; a++) {
    for (; zt(i, t, s[a]) || $(i, t) && Bt(t, e); )
      k(t, s[a], 1);
    if ($(i, t))
      return t;
    const o = $t(i, t);
    n > o && (r = { ...t }, n = o), t = { ...l };
  }
  return r || l;
}
const A = Symbol(0);
function jt(i, t, e, s) {
  let n = e.firstElementChild, r = Vt(t), l, a = [];
  if (e[T] || (e[T] = Gt(i, e)), l = K(i, { ...e[T] }), e[A])
    a = [e[A] === "top" ? "+y" : "-y", "+x", "-x"];
  else if (t.snapToLines) {
    let o;
    switch (t.vertical) {
      case "":
        a = ["+y", "-y"], o = "height";
        break;
      case "rl":
        a = ["+x", "-x"], o = "width";
        break;
      case "lr":
        a = ["-x", "+x"], o = "width";
        break;
    }
    let c = Mt(n), f = c * Math.round(r), u = i[o] + c, d = a[0];
    Math.abs(f) > u && (f = f < 0 ? -1 : 1, f *= Math.ceil(u / c) * c), r < 0 && (f += t.vertical === "" ? i.height : i.width, a = a.reverse()), k(l, d, f);
  } else {
    const o = t.vertical === "", c = o ? "+y" : "+x", f = o ? l.height : l.width;
    k(
      l,
      c,
      (o ? i.height : i.width) * r / 100
    ), k(
      l,
      c,
      t.lineAlign === "center" ? f / 2 : t.lineAlign === "end" ? f : 0
    ), a = o ? ["-y", "+y", "-x", "+x"] : ["-x", "+x", "-y", "+y"];
  }
  return l = Z(i, l, s, a), Q(e, i, l, "cue"), l;
}
function Gt(i, t) {
  const e = M(t), s = Ht(t);
  if (t[A] = !1, s.top && (e.top = s.top, e.bottom = s.top + e.height, t[A] = "top"), s.bottom) {
    const n = i.height - s.bottom;
    e.top = n - e.height, e.bottom = n, t[A] = "bottom";
  }
  return s.left && (e.left = s.left), s.right && (e.right = i.width - s.right), x(i, e);
}
function Ht(i) {
  const t = {};
  for (const e of J)
    t[e] = parseFloat(i.style.getPropertyValue(`--cue-${e}`));
  return t;
}
function Vt(i) {
  return i.line === "auto" ? i.snapToLines ? -1 : 100 : i.line;
}
function Ft(i) {
  if (i.position === "auto")
    switch (i.align) {
      case "start":
      case "left":
        return 0;
      case "right":
      case "end":
        return 100;
      default:
        return 50;
    }
  return i.position;
}
function Dt(i, t) {
  if (i.positionAlign === "auto")
    switch (i.align) {
      case "start":
        return t === "ltr" ? "line-left" : "line-right";
      case "end":
        return t === "ltr" ? "line-right" : "line-left";
      case "center":
        return "center";
      default:
        return `line-${i.align}`;
    }
  return i.positionAlign;
}
const Wt = ["-y", "+y", "-x", "+x"];
function qt(i, t, e, s) {
  let n = Array.from(e.querySelectorAll('[data-part="cue-display"]')), r = 0, l = Math.max(0, n.length - t.lines);
  for (let o = n.length - 1; o >= l; o--)
    r += n[o].offsetHeight;
  p(e, "region-height", r + "px"), e[T] || (e[T] = x(i, M(e)));
  let a = { ...e[T] };
  return a = K(i, a), a.width = e.clientWidth, a.height = r, a.right = a.left + a.width, a.bottom = a.top + r, a = Z(i, a, s, Wt), Q(e, i, a, "region"), a;
}
class Xt {
  constructor(t, e) {
    h(this, "overlay");
    h(this, "z");
    h(this, "A", 0);
    h(this, "C", "ltr");
    h(this, "B", []);
    h(this, "D", !1);
    h(this, "E");
    h(this, "j", /* @__PURE__ */ new Map());
    h(this, "l", /* @__PURE__ */ new Map());
    h(this, "K", Pt(() => {
      this.D = !1, this.G();
      for (const t of this.j.values())
        t[T] = null;
      for (const t of this.l.values())
        t && (t[T] = null);
      this.H(!0);
    }, 50));
    this.overlay = t, this.dir = (e == null ? void 0 : e.dir) ?? "ltr", t.setAttribute("translate", "yes"), t.setAttribute("aria-live", "off"), t.setAttribute("aria-atomic", "true"), S(t, "captions"), this.G(), this.E = new ResizeObserver(this.I.bind(this)), this.E.observe(t);
  }
  /* Text direction. */
  get dir() {
    return this.C;
  }
  set dir(t) {
    this.C = t, m(this.overlay, "dir", t);
  }
  get currentTime() {
    return this.A;
  }
  set currentTime(t) {
    this.A = t, this.update();
  }
  changeTrack({ regions: t, cues: e }) {
    this.reset(), this.J(t);
    for (const s of e)
      this.l.set(s, null);
    this.update();
  }
  addCue(t) {
    this.l.set(t, null), this.update();
  }
  removeCue(t) {
    this.l.delete(t), this.update();
  }
  update(t = !1) {
    this.H(t);
  }
  reset() {
    this.l.clear(), this.j.clear(), this.B = [], this.overlay.textContent = "";
  }
  destroy() {
    this.reset(), this.E.disconnect();
  }
  I() {
    this.D = !0, this.K();
  }
  G() {
    this.z = M(this.overlay), p(this.overlay, "overlay-width", this.z.width + "px"), p(this.overlay, "overlay-height", this.z.height + "px");
  }
  H(t = !1) {
    if (!this.l.size || this.D)
      return;
    let e, s = [...this.l.keys()].filter((r) => this.A >= r.startTime && this.A <= r.endTime).sort(
      (r, l) => r.startTime !== l.startTime ? r.startTime - l.startTime : r.endTime - l.endTime
    ), n = s.map((r) => r.region);
    for (let r = 0; r < this.B.length; r++) {
      if (e = this.B[r], s[r] === e)
        continue;
      if (e.region && !n.includes(e.region)) {
        const a = this.j.get(e.region.id);
        a && (a.removeAttribute("data-active"), t = !0);
      }
      const l = this.l.get(e);
      l && (l.remove(), t = !0);
    }
    for (let r = 0; r < s.length; r++) {
      e = s[r];
      let l = this.l.get(e);
      l || this.l.set(e, l = this.L(e));
      const a = this.F(e) && this.j.get(e.region.id);
      a && !a.hasAttribute("data-active") && (requestAnimationFrame(() => m(a, "active")), t = !0), l.isConnected || ((a || this.overlay).append(l), t = !0);
    }
    if (t) {
      const r = [], l = /* @__PURE__ */ new Set();
      for (let a = s.length - 1; a >= 0; a--) {
        if (e = s[a], l.has(e.region || e))
          continue;
        const o = this.F(e), c = o ? this.j.get(e.region.id) : this.l.get(e);
        o ? r.push(qt(this.z, e.region, c, r)) : r.push(jt(this.z, e, c, r)), l.add(o ? e.region : e);
      }
    }
    Y(this.overlay, this.A), this.B = s;
  }
  J(t) {
    if (t)
      for (const e of t) {
        const s = this.M(e);
        this.j.set(e.id, s), this.overlay.append(s);
      }
  }
  M(t) {
    const e = document.createElement("div");
    return S(e, "region"), m(e, "id", t.id), m(e, "scroll", t.scroll), p(e, "region-width", t.width + "%"), p(e, "region-anchor-x", t.regionAnchorX), p(e, "region-anchor-y", t.regionAnchorY), p(e, "region-viewport-anchor-x", t.viewportAnchorX), p(e, "region-viewport-anchor-y", t.viewportAnchorY), p(e, "region-lines", t.lines), e;
  }
  L(t) {
    var l;
    const e = document.createElement("div"), s = Ft(t), n = Dt(t, this.C);
    if (S(e, "cue-display"), t.vertical !== "" && m(e, "vertical"), p(e, "cue-text-align", t.align), t.style)
      for (const a of Object.keys(t.style))
        e.style.setProperty(a, t.style[a]);
    if (this.F(t))
      p(
        e,
        "cue-offset",
        `${s - (n === "line-right" ? 100 : n === "center" ? 50 : 0)}%`
      );
    else if (p(
      e,
      "cue-writing-mode",
      t.vertical === "" ? "horizontal-tb" : t.vertical === "lr" ? "vertical-lr" : "vertical-rl"
    ), !((l = t.style) != null && l["--cue-width"])) {
      let a = s;
      n === "line-left" ? a = 100 - s : n === "center" && s <= 50 ? a = s * 2 : n === "center" && s > 50 && (a = (100 - s) * 2);
      const o = t.size < a ? t.size : a;
      t.vertical === "" ? p(e, "cue-width", o + "%") : p(e, "cue-height", o + "%");
    }
    const r = document.createElement("div");
    return S(r, "cue"), t.id && m(r, "id", t.id), r.innerHTML = I(t), e.append(r), e;
  }
  F(t) {
    return t.region && t.size === 100 && t.vertical === "" && t.line === "auto";
  }
}
const Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CaptionsRenderer: Xt,
  ParseError: it,
  ParseErrorCode: et,
  TextCue: H,
  VTTCue: V,
  VTTRegion: F,
  createVTTCueTemplate: xt,
  parseByteStream: G,
  parseResponse: at,
  parseText: nt,
  parseTextStream: C,
  parseVTTTimestamp: E,
  renderVTTCueString: I,
  renderVTTTokensString: L,
  tokenizeVTTCue: X,
  updateTimedVTTCueNodes: Y
}, Symbol.toStringTag, { value: "Module" }));
export {
  it as P,
  W as V,
  D as a,
  V as b,
  et as c,
  Kt as d,
  E as p
};
//# sourceMappingURL=prod-DTLJXtPo.js.map
