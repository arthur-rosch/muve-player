var Xm = (i, n) => () => (n || i((n = { exports: {} }).exports, n), n.exports);
var x_ = Xm((D_, lu) => {
  var Si = {}, Dp = { exports: {} }, le = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var Td;
  function Jm() {
    if (Td) return le;
    Td = 1;
    var i = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), w = Symbol.iterator;
    function g(b) {
      return b === null || typeof b != "object" ? null : (b = w && b[w] || b["@@iterator"], typeof b == "function" ? b : null);
    }
    var S = { isMounted: function() {
      return !1;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, C = Object.assign, O = {};
    function I(b, F, ae) {
      this.props = b, this.context = F, this.refs = O, this.updater = ae || S;
    }
    I.prototype.isReactComponent = {}, I.prototype.setState = function(b, F) {
      if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, b, F, "setState");
    }, I.prototype.forceUpdate = function(b) {
      this.updater.enqueueForceUpdate(this, b, "forceUpdate");
    };
    function T() {
    }
    T.prototype = I.prototype;
    function R(b, F, ae) {
      this.props = b, this.context = F, this.refs = O, this.updater = ae || S;
    }
    var M = R.prototype = new T();
    M.constructor = R, C(M, I.prototype), M.isPureReactComponent = !0;
    var V = Array.isArray, B = Object.prototype.hasOwnProperty, Q = { current: null }, te = { key: !0, ref: !0, __self: !0, __source: !0 };
    function ie(b, F, ae) {
      var se, pe = {}, he = null, Ee = null;
      if (F != null) for (se in F.ref !== void 0 && (Ee = F.ref), F.key !== void 0 && (he = "" + F.key), F) B.call(F, se) && !te.hasOwnProperty(se) && (pe[se] = F[se]);
      var ge = arguments.length - 2;
      if (ge === 1) pe.children = ae;
      else if (1 < ge) {
        for (var xe = Array(ge), ht = 0; ht < ge; ht++) xe[ht] = arguments[ht + 2];
        pe.children = xe;
      }
      if (b && b.defaultProps) for (se in ge = b.defaultProps, ge) pe[se] === void 0 && (pe[se] = ge[se]);
      return { $$typeof: i, type: b, key: he, ref: Ee, props: pe, _owner: Q.current };
    }
    function ue(b, F) {
      return { $$typeof: i, type: b.type, key: F, ref: b.ref, props: b.props, _owner: b._owner };
    }
    function fe(b) {
      return typeof b == "object" && b !== null && b.$$typeof === i;
    }
    function Ue(b) {
      var F = { "=": "=0", ":": "=2" };
      return "$" + b.replace(/[=:]/g, function(ae) {
        return F[ae];
      });
    }
    var Ge = /\/+/g;
    function me(b, F) {
      return typeof b == "object" && b !== null && b.key != null ? Ue("" + b.key) : F.toString(36);
    }
    function Ae(b, F, ae, se, pe) {
      var he = typeof b;
      (he === "undefined" || he === "boolean") && (b = null);
      var Ee = !1;
      if (b === null) Ee = !0;
      else switch (he) {
        case "string":
        case "number":
          Ee = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case i:
            case n:
              Ee = !0;
          }
      }
      if (Ee) return Ee = b, pe = pe(Ee), b = se === "" ? "." + me(Ee, 0) : se, V(pe) ? (ae = "", b != null && (ae = b.replace(Ge, "$&/") + "/"), Ae(pe, F, ae, "", function(ht) {
        return ht;
      })) : pe != null && (fe(pe) && (pe = ue(pe, ae + (!pe.key || Ee && Ee.key === pe.key ? "" : ("" + pe.key).replace(Ge, "$&/") + "/") + b)), F.push(pe)), 1;
      if (Ee = 0, se = se === "" ? "." : se + ":", V(b)) for (var ge = 0; ge < b.length; ge++) {
        he = b[ge];
        var xe = se + me(he, ge);
        Ee += Ae(he, F, ae, xe, pe);
      }
      else if (xe = g(b), typeof xe == "function") for (b = xe.call(b), ge = 0; !(he = b.next()).done; ) he = he.value, xe = se + me(he, ge++), Ee += Ae(he, F, ae, xe, pe);
      else if (he === "object") throw F = String(b), Error("Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead.");
      return Ee;
    }
    function st(b, F, ae) {
      if (b == null) return b;
      var se = [], pe = 0;
      return Ae(b, se, "", "", function(he) {
        return F.call(ae, he, pe++);
      }), se;
    }
    function Ye(b) {
      if (b._status === -1) {
        var F = b._result;
        F = F(), F.then(function(ae) {
          (b._status === 0 || b._status === -1) && (b._status = 1, b._result = ae);
        }, function(ae) {
          (b._status === 0 || b._status === -1) && (b._status = 2, b._result = ae);
        }), b._status === -1 && (b._status = 0, b._result = F);
      }
      if (b._status === 1) return b._result.default;
      throw b._result;
    }
    var Oe = { current: null }, q = { transition: null }, X = { ReactCurrentDispatcher: Oe, ReactCurrentBatchConfig: q, ReactCurrentOwner: Q };
    function H() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    return le.Children = { map: st, forEach: function(b, F, ae) {
      st(b, function() {
        F.apply(this, arguments);
      }, ae);
    }, count: function(b) {
      var F = 0;
      return st(b, function() {
        F++;
      }), F;
    }, toArray: function(b) {
      return st(b, function(F) {
        return F;
      }) || [];
    }, only: function(b) {
      if (!fe(b)) throw Error("React.Children.only expected to receive a single React element child.");
      return b;
    } }, le.Component = I, le.Fragment = r, le.Profiler = s, le.PureComponent = R, le.StrictMode = a, le.Suspense = h, le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, le.act = H, le.cloneElement = function(b, F, ae) {
      if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
      var se = C({}, b.props), pe = b.key, he = b.ref, Ee = b._owner;
      if (F != null) {
        if (F.ref !== void 0 && (he = F.ref, Ee = Q.current), F.key !== void 0 && (pe = "" + F.key), b.type && b.type.defaultProps) var ge = b.type.defaultProps;
        for (xe in F) B.call(F, xe) && !te.hasOwnProperty(xe) && (se[xe] = F[xe] === void 0 && ge !== void 0 ? ge[xe] : F[xe]);
      }
      var xe = arguments.length - 2;
      if (xe === 1) se.children = ae;
      else if (1 < xe) {
        ge = Array(xe);
        for (var ht = 0; ht < xe; ht++) ge[ht] = arguments[ht + 2];
        se.children = ge;
      }
      return { $$typeof: i, type: b.type, key: pe, ref: he, props: se, _owner: Ee };
    }, le.createContext = function(b) {
      return b = { $$typeof: f, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: u, _context: b }, b.Consumer = b;
    }, le.createElement = ie, le.createFactory = function(b) {
      var F = ie.bind(null, b);
      return F.type = b, F;
    }, le.createRef = function() {
      return { current: null };
    }, le.forwardRef = function(b) {
      return { $$typeof: p, render: b };
    }, le.isValidElement = fe, le.lazy = function(b) {
      return { $$typeof: y, _payload: { _status: -1, _result: b }, _init: Ye };
    }, le.memo = function(b, F) {
      return { $$typeof: m, type: b, compare: F === void 0 ? null : F };
    }, le.startTransition = function(b) {
      var F = q.transition;
      q.transition = {};
      try {
        b();
      } finally {
        q.transition = F;
      }
    }, le.unstable_act = H, le.useCallback = function(b, F) {
      return Oe.current.useCallback(b, F);
    }, le.useContext = function(b) {
      return Oe.current.useContext(b);
    }, le.useDebugValue = function() {
    }, le.useDeferredValue = function(b) {
      return Oe.current.useDeferredValue(b);
    }, le.useEffect = function(b, F) {
      return Oe.current.useEffect(b, F);
    }, le.useId = function() {
      return Oe.current.useId();
    }, le.useImperativeHandle = function(b, F, ae) {
      return Oe.current.useImperativeHandle(b, F, ae);
    }, le.useInsertionEffect = function(b, F) {
      return Oe.current.useInsertionEffect(b, F);
    }, le.useLayoutEffect = function(b, F) {
      return Oe.current.useLayoutEffect(b, F);
    }, le.useMemo = function(b, F) {
      return Oe.current.useMemo(b, F);
    }, le.useReducer = function(b, F, ae) {
      return Oe.current.useReducer(b, F, ae);
    }, le.useRef = function(b) {
      return Oe.current.useRef(b);
    }, le.useState = function(b) {
      return Oe.current.useState(b);
    }, le.useSyncExternalStore = function(b, F, ae) {
      return Oe.current.useSyncExternalStore(b, F, ae);
    }, le.useTransition = function() {
      return Oe.current.useTransition();
    }, le.version = "18.3.1", le;
  }
  Dp.exports = Jm();
  var jp = Dp.exports;
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var Od;
  function Zm() {
    if (Od) return Si;
    Od = 1;
    var i = jp, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, s = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
    function f(p, h, m) {
      var y, w = {}, g = null, S = null;
      m !== void 0 && (g = "" + m), h.key !== void 0 && (g = "" + h.key), h.ref !== void 0 && (S = h.ref);
      for (y in h) a.call(h, y) && !u.hasOwnProperty(y) && (w[y] = h[y]);
      if (p && p.defaultProps) for (y in h = p.defaultProps, h) w[y] === void 0 && (w[y] = h[y]);
      return { $$typeof: n, type: p, key: g, ref: S, props: w, _owner: s.current };
    }
    return Si.Fragment = r, Si.jsx = f, Si.jsxs = f, Si;
  }
  Zm();
  var Mp = { exports: {} }, pt = {}, wl = { exports: {} }, El = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var xd;
  function ey() {
    return xd || (xd = 1, function(i) {
      function n(q, X) {
        var H = q.length;
        q.push(X);
        e: for (; 0 < H; ) {
          var b = H - 1 >>> 1, F = q[b];
          if (0 < s(F, X)) q[b] = X, q[H] = F, H = b;
          else break e;
        }
      }
      function r(q) {
        return q.length === 0 ? null : q[0];
      }
      function a(q) {
        if (q.length === 0) return null;
        var X = q[0], H = q.pop();
        if (H !== X) {
          q[0] = H;
          e: for (var b = 0, F = q.length, ae = F >>> 1; b < ae; ) {
            var se = 2 * (b + 1) - 1, pe = q[se], he = se + 1, Ee = q[he];
            if (0 > s(pe, H)) he < F && 0 > s(Ee, pe) ? (q[b] = Ee, q[he] = H, b = he) : (q[b] = pe, q[se] = H, b = se);
            else if (he < F && 0 > s(Ee, H)) q[b] = Ee, q[he] = H, b = he;
            else break e;
          }
        }
        return X;
      }
      function s(q, X) {
        var H = q.sortIndex - X.sortIndex;
        return H !== 0 ? H : q.id - X.id;
      }
      if (typeof performance == "object" && typeof performance.now == "function") {
        var u = performance;
        i.unstable_now = function() {
          return u.now();
        };
      } else {
        var f = Date, p = f.now();
        i.unstable_now = function() {
          return f.now() - p;
        };
      }
      var h = [], m = [], y = 1, w = null, g = 3, S = !1, C = !1, O = !1, I = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, R = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function M(q) {
        for (var X = r(m); X !== null; ) {
          if (X.callback === null) a(m);
          else if (X.startTime <= q) a(m), X.sortIndex = X.expirationTime, n(h, X);
          else break;
          X = r(m);
        }
      }
      function V(q) {
        if (O = !1, M(q), !C) if (r(h) !== null) C = !0, Ye(B);
        else {
          var X = r(m);
          X !== null && Oe(V, X.startTime - q);
        }
      }
      function B(q, X) {
        C = !1, O && (O = !1, T(ie), ie = -1), S = !0;
        var H = g;
        try {
          for (M(X), w = r(h); w !== null && (!(w.expirationTime > X) || q && !Ue()); ) {
            var b = w.callback;
            if (typeof b == "function") {
              w.callback = null, g = w.priorityLevel;
              var F = b(w.expirationTime <= X);
              X = i.unstable_now(), typeof F == "function" ? w.callback = F : w === r(h) && a(h), M(X);
            } else a(h);
            w = r(h);
          }
          if (w !== null) var ae = !0;
          else {
            var se = r(m);
            se !== null && Oe(V, se.startTime - X), ae = !1;
          }
          return ae;
        } finally {
          w = null, g = H, S = !1;
        }
      }
      var Q = !1, te = null, ie = -1, ue = 5, fe = -1;
      function Ue() {
        return !(i.unstable_now() - fe < ue);
      }
      function Ge() {
        if (te !== null) {
          var q = i.unstable_now();
          fe = q;
          var X = !0;
          try {
            X = te(!0, q);
          } finally {
            X ? me() : (Q = !1, te = null);
          }
        } else Q = !1;
      }
      var me;
      if (typeof R == "function") me = function() {
        R(Ge);
      };
      else if (typeof MessageChannel < "u") {
        var Ae = new MessageChannel(), st = Ae.port2;
        Ae.port1.onmessage = Ge, me = function() {
          st.postMessage(null);
        };
      } else me = function() {
        I(Ge, 0);
      };
      function Ye(q) {
        te = q, Q || (Q = !0, me());
      }
      function Oe(q, X) {
        ie = I(function() {
          q(i.unstable_now());
        }, X);
      }
      i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(q) {
        q.callback = null;
      }, i.unstable_continueExecution = function() {
        C || S || (C = !0, Ye(B));
      }, i.unstable_forceFrameRate = function(q) {
        0 > q || 125 < q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ue = 0 < q ? Math.floor(1e3 / q) : 5;
      }, i.unstable_getCurrentPriorityLevel = function() {
        return g;
      }, i.unstable_getFirstCallbackNode = function() {
        return r(h);
      }, i.unstable_next = function(q) {
        switch (g) {
          case 1:
          case 2:
          case 3:
            var X = 3;
            break;
          default:
            X = g;
        }
        var H = g;
        g = X;
        try {
          return q();
        } finally {
          g = H;
        }
      }, i.unstable_pauseExecution = function() {
      }, i.unstable_requestPaint = function() {
      }, i.unstable_runWithPriority = function(q, X) {
        switch (q) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            q = 3;
        }
        var H = g;
        g = q;
        try {
          return X();
        } finally {
          g = H;
        }
      }, i.unstable_scheduleCallback = function(q, X, H) {
        var b = i.unstable_now();
        switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? b + H : b) : H = b, q) {
          case 1:
            var F = -1;
            break;
          case 2:
            F = 250;
            break;
          case 5:
            F = 1073741823;
            break;
          case 4:
            F = 1e4;
            break;
          default:
            F = 5e3;
        }
        return F = H + F, q = { id: y++, callback: X, priorityLevel: q, startTime: H, expirationTime: F, sortIndex: -1 }, H > b ? (q.sortIndex = H, n(m, q), r(h) === null && q === r(m) && (O ? (T(ie), ie = -1) : O = !0, Oe(V, H - b))) : (q.sortIndex = F, n(h, q), C || S || (C = !0, Ye(B))), q;
      }, i.unstable_shouldYield = Ue, i.unstable_wrapCallback = function(q) {
        var X = g;
        return function() {
          var H = g;
          g = X;
          try {
            return q.apply(this, arguments);
          } finally {
            g = H;
          }
        };
      };
    }(El)), El;
  }
  var Cd;
  function ty() {
    return Cd || (Cd = 1, wl.exports = ey()), wl.exports;
  }
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var Id;
  function ny() {
    if (Id) return pt;
    Id = 1;
    var i = jp, n = ty();
    function r(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, o = 1; o < arguments.length; o++) t += "&args[]=" + encodeURIComponent(arguments[o]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var a = /* @__PURE__ */ new Set(), s = {};
    function u(e, t) {
      f(e, t), f(e + "Capture", t);
    }
    function f(e, t) {
      for (s[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
    }
    var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), h = Object.prototype.hasOwnProperty, m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, w = {};
    function g(e) {
      return h.call(w, e) ? !0 : h.call(y, e) ? !1 : m.test(e) ? w[e] = !0 : (y[e] = !0, !1);
    }
    function S(e, t, o, l) {
      if (o !== null && o.type === 0) return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean":
          return l ? !1 : o !== null ? !o.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
          return !1;
      }
    }
    function C(e, t, o, l) {
      if (t === null || typeof t > "u" || S(e, t, o, l)) return !0;
      if (l) return !1;
      if (o !== null) switch (o.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
      return !1;
    }
    function O(e, t, o, l, c, d, v) {
      this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = l, this.attributeNamespace = c, this.mustUseProperty = o, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = v;
    }
    var I = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
      I[e] = new O(e, 0, !1, e, null, !1, !1);
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0];
      I[t] = new O(t, 1, !1, e[1], null, !1, !1);
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      I[e] = new O(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      I[e] = new O(e, 2, !1, e, null, !1, !1);
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
      I[e] = new O(e, 3, !1, e.toLowerCase(), null, !1, !1);
    }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
      I[e] = new O(e, 3, !0, e, null, !1, !1);
    }), ["capture", "download"].forEach(function(e) {
      I[e] = new O(e, 4, !1, e, null, !1, !1);
    }), ["cols", "rows", "size", "span"].forEach(function(e) {
      I[e] = new O(e, 6, !1, e, null, !1, !1);
    }), ["rowSpan", "start"].forEach(function(e) {
      I[e] = new O(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var T = /[\-:]([a-z])/g;
    function R(e) {
      return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
      var t = e.replace(
        T,
        R
      );
      I[t] = new O(t, 1, !1, e, null, !1, !1);
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
      var t = e.replace(T, R);
      I[t] = new O(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
      var t = e.replace(T, R);
      I[t] = new O(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      I[e] = new O(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }), I.xlinkHref = new O("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
      I[e] = new O(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function M(e, t, o, l) {
      var c = I.hasOwnProperty(t) ? I[t] : null;
      (c !== null ? c.type !== 0 : l || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (C(t, o, c, l) && (o = null), l || c === null ? g(t) && (o === null ? e.removeAttribute(t) : e.setAttribute(t, "" + o)) : c.mustUseProperty ? e[c.propertyName] = o === null ? c.type === 3 ? !1 : "" : o : (t = c.attributeName, l = c.attributeNamespace, o === null ? e.removeAttribute(t) : (c = c.type, o = c === 3 || c === 4 && o === !0 ? "" : "" + o, l ? e.setAttributeNS(l, t, o) : e.setAttribute(t, o))));
    }
    var V = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, B = Symbol.for("react.element"), Q = Symbol.for("react.portal"), te = Symbol.for("react.fragment"), ie = Symbol.for("react.strict_mode"), ue = Symbol.for("react.profiler"), fe = Symbol.for("react.provider"), Ue = Symbol.for("react.context"), Ge = Symbol.for("react.forward_ref"), me = Symbol.for("react.suspense"), Ae = Symbol.for("react.suspense_list"), st = Symbol.for("react.memo"), Ye = Symbol.for("react.lazy"), Oe = Symbol.for("react.offscreen"), q = Symbol.iterator;
    function X(e) {
      return e === null || typeof e != "object" ? null : (e = q && e[q] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var H = Object.assign, b;
    function F(e) {
      if (b === void 0) try {
        throw Error();
      } catch (o) {
        var t = o.stack.trim().match(/\n( *(at )?)/);
        b = t && t[1] || "";
      }
      return `
` + b + e;
    }
    var ae = !1;
    function se(e, t) {
      if (!e || ae) return "";
      ae = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t) if (t = function() {
          throw Error();
        }, Object.defineProperty(t.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(t, []);
          } catch (j) {
            var l = j;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (j) {
            l = j;
          }
          e.call(t.prototype);
        }
        else {
          try {
            throw Error();
          } catch (j) {
            l = j;
          }
          e();
        }
      } catch (j) {
        if (j && l && typeof j.stack == "string") {
          for (var c = j.stack.split(`
`), d = l.stack.split(`
`), v = c.length - 1, _ = d.length - 1; 1 <= v && 0 <= _ && c[v] !== d[_]; ) _--;
          for (; 1 <= v && 0 <= _; v--, _--) if (c[v] !== d[_]) {
            if (v !== 1 || _ !== 1)
              do
                if (v--, _--, 0 > _ || c[v] !== d[_]) {
                  var E = `
` + c[v].replace(" at new ", " at ");
                  return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), E;
                }
              while (1 <= v && 0 <= _);
            break;
          }
        }
      } finally {
        ae = !1, Error.prepareStackTrace = o;
      }
      return (e = e ? e.displayName || e.name : "") ? F(e) : "";
    }
    function pe(e) {
      switch (e.tag) {
        case 5:
          return F(e.type);
        case 16:
          return F("Lazy");
        case 13:
          return F("Suspense");
        case 19:
          return F("SuspenseList");
        case 0:
        case 2:
        case 15:
          return e = se(e.type, !1), e;
        case 11:
          return e = se(e.type.render, !1), e;
        case 1:
          return e = se(e.type, !0), e;
        default:
          return "";
      }
    }
    function he(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case te:
          return "Fragment";
        case Q:
          return "Portal";
        case ue:
          return "Profiler";
        case ie:
          return "StrictMode";
        case me:
          return "Suspense";
        case Ae:
          return "SuspenseList";
      }
      if (typeof e == "object") switch (e.$$typeof) {
        case Ue:
          return (e.displayName || "Context") + ".Consumer";
        case fe:
          return (e._context.displayName || "Context") + ".Provider";
        case Ge:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case st:
          return t = e.displayName || null, t !== null ? t : he(e.type) || "Memo";
        case Ye:
          t = e._payload, e = e._init;
          try {
            return he(e(t));
          } catch {
          }
      }
      return null;
    }
    function Ee(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (t.displayName || "Context") + ".Consumer";
        case 10:
          return (t._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return he(t);
        case 8:
          return t === ie ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof t == "function") return t.displayName || t.name || null;
          if (typeof t == "string") return t;
      }
      return null;
    }
    function ge(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function xe(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function ht(e) {
      var t = xe(e) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), l = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
        var c = o.get, d = o.set;
        return Object.defineProperty(e, t, { configurable: !0, get: function() {
          return c.call(this);
        }, set: function(v) {
          l = "" + v, d.call(this, v);
        } }), Object.defineProperty(e, t, { enumerable: o.enumerable }), { getValue: function() {
          return l;
        }, setValue: function(v) {
          l = "" + v;
        }, stopTracking: function() {
          e._valueTracker = null, delete e[t];
        } };
      }
    }
    function Qi(e) {
      e._valueTracker || (e._valueTracker = ht(e));
    }
    function Du(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var o = t.getValue(), l = "";
      return e && (l = xe(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== o ? (t.setValue(e), !0) : !1;
    }
    function qi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Oa(e, t) {
      var o = t.checked;
      return H({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? e._wrapperState.initialChecked });
    }
    function ju(e, t) {
      var o = t.defaultValue == null ? "" : t.defaultValue, l = t.checked != null ? t.checked : t.defaultChecked;
      o = ge(t.value != null ? t.value : o), e._wrapperState = { initialChecked: l, initialValue: o, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
    }
    function Mu(e, t) {
      t = t.checked, t != null && M(e, "checked", t, !1);
    }
    function xa(e, t) {
      Mu(e, t);
      var o = ge(t.value), l = t.type;
      if (o != null) l === "number" ? (o === 0 && e.value === "" || e.value != o) && (e.value = "" + o) : e.value !== "" + o && (e.value = "" + o);
      else if (l === "submit" || l === "reset") {
        e.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ca(e, t.type, o) : t.hasOwnProperty("defaultValue") && Ca(e, t.type, ge(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function Ru(e, t, o) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type;
        if (!(l !== "submit" && l !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, o || t === e.value || (e.value = t), e.defaultValue = t;
      }
      o = e.name, o !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, o !== "" && (e.name = o);
    }
    function Ca(e, t, o) {
      (t !== "number" || qi(e.ownerDocument) !== e) && (o == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + o && (e.defaultValue = "" + o));
    }
    var Ar = Array.isArray;
    function Yn(e, t, o, l) {
      if (e = e.options, t) {
        t = {};
        for (var c = 0; c < o.length; c++) t["$" + o[c]] = !0;
        for (o = 0; o < e.length; o++) c = t.hasOwnProperty("$" + e[o].value), e[o].selected !== c && (e[o].selected = c), c && l && (e[o].defaultSelected = !0);
      } else {
        for (o = "" + ge(o), t = null, c = 0; c < e.length; c++) {
          if (e[c].value === o) {
            e[c].selected = !0, l && (e[c].defaultSelected = !0);
            return;
          }
          t !== null || e[c].disabled || (t = e[c]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Ia(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(r(91));
      return H({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
    }
    function Pu(e, t) {
      var o = t.value;
      if (o == null) {
        if (o = t.children, t = t.defaultValue, o != null) {
          if (t != null) throw Error(r(92));
          if (Ar(o)) {
            if (1 < o.length) throw Error(r(93));
            o = o[0];
          }
          t = o;
        }
        t == null && (t = ""), o = t;
      }
      e._wrapperState = { initialValue: ge(o) };
    }
    function Fu(e, t) {
      var o = ge(t.value), l = ge(t.defaultValue);
      o != null && (o = "" + o, o !== e.value && (e.value = o), t.defaultValue == null && e.defaultValue !== o && (e.defaultValue = o)), l != null && (e.defaultValue = "" + l);
    }
    function Au(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function Lu(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function Da(e, t) {
      return e == null || e === "http://www.w3.org/1999/xhtml" ? Lu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var Wi, zu = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, o, l, c) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, o, l, c);
        });
      } : e;
    }(function(e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
      else {
        for (Wi = Wi || document.createElement("div"), Wi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Wi.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
    function Lr(e, t) {
      if (t) {
        var o = e.firstChild;
        if (o && o === e.lastChild && o.nodeType === 3) {
          o.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var zr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    }, tv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(zr).forEach(function(e) {
      tv.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), zr[t] = zr[e];
      });
    });
    function Vu(e, t, o) {
      return t == null || typeof t == "boolean" || t === "" ? "" : o || typeof t != "number" || t === 0 || zr.hasOwnProperty(e) && zr[e] ? ("" + t).trim() : t + "px";
    }
    function Bu(e, t) {
      e = e.style;
      for (var o in t) if (t.hasOwnProperty(o)) {
        var l = o.indexOf("--") === 0, c = Vu(o, t[o], l);
        o === "float" && (o = "cssFloat"), l ? e.setProperty(o, c) : e[o] = c;
      }
    }
    var nv = H({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
    function ja(e, t) {
      if (t) {
        if (nv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(r(137, e));
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(r(60));
          if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(r(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(r(62));
      }
    }
    function Ma(e, t) {
      if (e.indexOf("-") === -1) return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Ra = null;
    function Pa(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var Fa = null, Kn = null, Xn = null;
    function Uu(e) {
      if (e = si(e)) {
        if (typeof Fa != "function") throw Error(r(280));
        var t = e.stateNode;
        t && (t = vo(t), Fa(e.stateNode, e.type, t));
      }
    }
    function Qu(e) {
      Kn ? Xn ? Xn.push(e) : Xn = [e] : Kn = e;
    }
    function qu() {
      if (Kn) {
        var e = Kn, t = Xn;
        if (Xn = Kn = null, Uu(e), t) for (e = 0; e < t.length; e++) Uu(t[e]);
      }
    }
    function Wu(e, t) {
      return e(t);
    }
    function $u() {
    }
    var Aa = !1;
    function Hu(e, t, o) {
      if (Aa) return e(t, o);
      Aa = !0;
      try {
        return Wu(e, t, o);
      } finally {
        Aa = !1, (Kn !== null || Xn !== null) && ($u(), qu());
      }
    }
    function Vr(e, t) {
      var o = e.stateNode;
      if (o === null) return null;
      var l = vo(o);
      if (l === null) return null;
      o = l[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (o && typeof o != "function") throw Error(r(231, t, typeof o));
      return o;
    }
    var La = !1;
    if (p) try {
      var Br = {};
      Object.defineProperty(Br, "passive", { get: function() {
        La = !0;
      } }), window.addEventListener("test", Br, Br), window.removeEventListener("test", Br, Br);
    } catch {
      La = !1;
    }
    function rv(e, t, o, l, c, d, v, _, E) {
      var j = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(o, j);
      } catch (L) {
        this.onError(L);
      }
    }
    var Ur = !1, $i = null, Hi = !1, za = null, iv = { onError: function(e) {
      Ur = !0, $i = e;
    } };
    function ov(e, t, o, l, c, d, v, _, E) {
      Ur = !1, $i = null, rv.apply(iv, arguments);
    }
    function av(e, t, o, l, c, d, v, _, E) {
      if (ov.apply(this, arguments), Ur) {
        if (Ur) {
          var j = $i;
          Ur = !1, $i = null;
        } else throw Error(r(198));
        Hi || (Hi = !0, za = j);
      }
    }
    function In(e) {
      var t = e, o = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, t.flags & 4098 && (o = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? o : null;
    }
    function Gu(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Yu(e) {
      if (In(e) !== e) throw Error(r(188));
    }
    function sv(e) {
      var t = e.alternate;
      if (!t) {
        if (t = In(e), t === null) throw Error(r(188));
        return t !== e ? null : e;
      }
      for (var o = e, l = t; ; ) {
        var c = o.return;
        if (c === null) break;
        var d = c.alternate;
        if (d === null) {
          if (l = c.return, l !== null) {
            o = l;
            continue;
          }
          break;
        }
        if (c.child === d.child) {
          for (d = c.child; d; ) {
            if (d === o) return Yu(c), e;
            if (d === l) return Yu(c), t;
            d = d.sibling;
          }
          throw Error(r(188));
        }
        if (o.return !== l.return) o = c, l = d;
        else {
          for (var v = !1, _ = c.child; _; ) {
            if (_ === o) {
              v = !0, o = c, l = d;
              break;
            }
            if (_ === l) {
              v = !0, l = c, o = d;
              break;
            }
            _ = _.sibling;
          }
          if (!v) {
            for (_ = d.child; _; ) {
              if (_ === o) {
                v = !0, o = d, l = c;
                break;
              }
              if (_ === l) {
                v = !0, l = d, o = c;
                break;
              }
              _ = _.sibling;
            }
            if (!v) throw Error(r(189));
          }
        }
        if (o.alternate !== l) throw Error(r(190));
      }
      if (o.tag !== 3) throw Error(r(188));
      return o.stateNode.current === o ? e : t;
    }
    function Ku(e) {
      return e = sv(e), e !== null ? Xu(e) : null;
    }
    function Xu(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null; ) {
        var t = Xu(e);
        if (t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var Ju = n.unstable_scheduleCallback, Zu = n.unstable_cancelCallback, lv = n.unstable_shouldYield, uv = n.unstable_requestPaint, Pe = n.unstable_now, cv = n.unstable_getCurrentPriorityLevel, Va = n.unstable_ImmediatePriority, ec = n.unstable_UserBlockingPriority, Gi = n.unstable_NormalPriority, fv = n.unstable_LowPriority, tc = n.unstable_IdlePriority, Yi = null, Pt = null;
    function dv(e) {
      if (Pt && typeof Pt.onCommitFiberRoot == "function") try {
        Pt.onCommitFiberRoot(Yi, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
    }
    var Nt = Math.clz32 ? Math.clz32 : vv, pv = Math.log, hv = Math.LN2;
    function vv(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (pv(e) / hv | 0) | 0;
    }
    var Ki = 64, Xi = 4194304;
    function Qr(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return e & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function Ji(e, t) {
      var o = e.pendingLanes;
      if (o === 0) return 0;
      var l = 0, c = e.suspendedLanes, d = e.pingedLanes, v = o & 268435455;
      if (v !== 0) {
        var _ = v & ~c;
        _ !== 0 ? l = Qr(_) : (d &= v, d !== 0 && (l = Qr(d)));
      } else v = o & ~c, v !== 0 ? l = Qr(v) : d !== 0 && (l = Qr(d));
      if (l === 0) return 0;
      if (t !== 0 && t !== l && !(t & c) && (c = l & -l, d = t & -t, c >= d || c === 16 && (d & 4194240) !== 0)) return t;
      if (l & 4 && (l |= o & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= l; 0 < t; ) o = 31 - Nt(t), c = 1 << o, l |= e[o], t &= ~c;
      return l;
    }
    function mv(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function yv(e, t) {
      for (var o = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, d = e.pendingLanes; 0 < d; ) {
        var v = 31 - Nt(d), _ = 1 << v, E = c[v];
        E === -1 ? (!(_ & o) || _ & l) && (c[v] = mv(_, t)) : E <= t && (e.expiredLanes |= _), d &= ~_;
      }
    }
    function Ba(e) {
      return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function nc() {
      var e = Ki;
      return Ki <<= 1, !(Ki & 4194240) && (Ki = 64), e;
    }
    function Ua(e) {
      for (var t = [], o = 0; 31 > o; o++) t.push(e);
      return t;
    }
    function qr(e, t, o) {
      e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Nt(t), e[t] = o;
    }
    function gv(e, t) {
      var o = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
      var l = e.eventTimes;
      for (e = e.expirationTimes; 0 < o; ) {
        var c = 31 - Nt(o), d = 1 << c;
        t[c] = 0, l[c] = -1, e[c] = -1, o &= ~d;
      }
    }
    function Qa(e, t) {
      var o = e.entangledLanes |= t;
      for (e = e.entanglements; o; ) {
        var l = 31 - Nt(o), c = 1 << l;
        c & t | e[l] & t && (e[l] |= t), o &= ~c;
      }
    }
    var _e = 0;
    function rc(e) {
      return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var ic, qa, oc, ac, sc, Wa = !1, Zi = [], tn = null, nn = null, rn = null, Wr = /* @__PURE__ */ new Map(), $r = /* @__PURE__ */ new Map(), on = [], _v = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function lc(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          tn = null;
          break;
        case "dragenter":
        case "dragleave":
          nn = null;
          break;
        case "mouseover":
        case "mouseout":
          rn = null;
          break;
        case "pointerover":
        case "pointerout":
          Wr.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          $r.delete(t.pointerId);
      }
    }
    function Hr(e, t, o, l, c, d) {
      return e === null || e.nativeEvent !== d ? (e = { blockedOn: t, domEventName: o, eventSystemFlags: l, nativeEvent: d, targetContainers: [c] }, t !== null && (t = si(t), t !== null && qa(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e);
    }
    function wv(e, t, o, l, c) {
      switch (t) {
        case "focusin":
          return tn = Hr(tn, e, t, o, l, c), !0;
        case "dragenter":
          return nn = Hr(nn, e, t, o, l, c), !0;
        case "mouseover":
          return rn = Hr(rn, e, t, o, l, c), !0;
        case "pointerover":
          var d = c.pointerId;
          return Wr.set(d, Hr(Wr.get(d) || null, e, t, o, l, c)), !0;
        case "gotpointercapture":
          return d = c.pointerId, $r.set(d, Hr($r.get(d) || null, e, t, o, l, c)), !0;
      }
      return !1;
    }
    function uc(e) {
      var t = Dn(e.target);
      if (t !== null) {
        var o = In(t);
        if (o !== null) {
          if (t = o.tag, t === 13) {
            if (t = Gu(o), t !== null) {
              e.blockedOn = t, sc(e.priority, function() {
                oc(o);
              });
              return;
            }
          } else if (t === 3 && o.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function eo(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var o = Ha(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (o === null) {
          o = e.nativeEvent;
          var l = new o.constructor(o.type, o);
          Ra = l, o.target.dispatchEvent(l), Ra = null;
        } else return t = si(o), t !== null && qa(t), e.blockedOn = o, !1;
        t.shift();
      }
      return !0;
    }
    function cc(e, t, o) {
      eo(e) && o.delete(t);
    }
    function Ev() {
      Wa = !1, tn !== null && eo(tn) && (tn = null), nn !== null && eo(nn) && (nn = null), rn !== null && eo(rn) && (rn = null), Wr.forEach(cc), $r.forEach(cc);
    }
    function Gr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Wa || (Wa = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, Ev)));
    }
    function Yr(e) {
      function t(c) {
        return Gr(c, e);
      }
      if (0 < Zi.length) {
        Gr(Zi[0], e);
        for (var o = 1; o < Zi.length; o++) {
          var l = Zi[o];
          l.blockedOn === e && (l.blockedOn = null);
        }
      }
      for (tn !== null && Gr(tn, e), nn !== null && Gr(nn, e), rn !== null && Gr(rn, e), Wr.forEach(t), $r.forEach(t), o = 0; o < on.length; o++) l = on[o], l.blockedOn === e && (l.blockedOn = null);
      for (; 0 < on.length && (o = on[0], o.blockedOn === null); ) uc(o), o.blockedOn === null && on.shift();
    }
    var Jn = V.ReactCurrentBatchConfig, to = !0;
    function Sv(e, t, o, l) {
      var c = _e, d = Jn.transition;
      Jn.transition = null;
      try {
        _e = 1, $a(e, t, o, l);
      } finally {
        _e = c, Jn.transition = d;
      }
    }
    function kv(e, t, o, l) {
      var c = _e, d = Jn.transition;
      Jn.transition = null;
      try {
        _e = 4, $a(e, t, o, l);
      } finally {
        _e = c, Jn.transition = d;
      }
    }
    function $a(e, t, o, l) {
      if (to) {
        var c = Ha(e, t, o, l);
        if (c === null) cs(e, t, l, no, o), lc(e, l);
        else if (wv(c, e, t, o, l)) l.stopPropagation();
        else if (lc(e, l), t & 4 && -1 < _v.indexOf(e)) {
          for (; c !== null; ) {
            var d = si(c);
            if (d !== null && ic(d), d = Ha(e, t, o, l), d === null && cs(e, t, l, no, o), d === c) break;
            c = d;
          }
          c !== null && l.stopPropagation();
        } else cs(e, t, l, null, o);
      }
    }
    var no = null;
    function Ha(e, t, o, l) {
      if (no = null, e = Pa(l), e = Dn(e), e !== null) if (t = In(e), t === null) e = null;
      else if (o = t.tag, o === 13) {
        if (e = Gu(t), e !== null) return e;
        e = null;
      } else if (o === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
      return no = e, null;
    }
    function fc(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (cv()) {
            case Va:
              return 1;
            case ec:
              return 4;
            case Gi:
            case fv:
              return 16;
            case tc:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var an = null, Ga = null, ro = null;
    function dc() {
      if (ro) return ro;
      var e, t = Ga, o = t.length, l, c = "value" in an ? an.value : an.textContent, d = c.length;
      for (e = 0; e < o && t[e] === c[e]; e++) ;
      var v = o - e;
      for (l = 1; l <= v && t[o - l] === c[d - l]; l++) ;
      return ro = c.slice(e, 1 < l ? 1 - l : void 0);
    }
    function io(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function oo() {
      return !0;
    }
    function pc() {
      return !1;
    }
    function vt(e) {
      function t(o, l, c, d, v) {
        this._reactName = o, this._targetInst = c, this.type = l, this.nativeEvent = d, this.target = v, this.currentTarget = null;
        for (var _ in e) e.hasOwnProperty(_) && (o = e[_], this[_] = o ? o(d) : d[_]);
        return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? oo : pc, this.isPropagationStopped = pc, this;
      }
      return H(t.prototype, { preventDefault: function() {
        this.defaultPrevented = !0;
        var o = this.nativeEvent;
        o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = oo);
      }, stopPropagation: function() {
        var o = this.nativeEvent;
        o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = oo);
      }, persist: function() {
      }, isPersistent: oo }), t;
    }
    var Zn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
      return e.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, Ya = vt(Zn), Kr = H({}, Zn, { view: 0, detail: 0 }), bv = vt(Kr), Ka, Xa, Xr, ao = H({}, Kr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Za, button: 0, buttons: 0, relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    }, movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Xr && (Xr && e.type === "mousemove" ? (Ka = e.screenX - Xr.screenX, Xa = e.screenY - Xr.screenY) : Xa = Ka = 0, Xr = e), Ka);
    }, movementY: function(e) {
      return "movementY" in e ? e.movementY : Xa;
    } }), hc = vt(ao), Nv = H({}, ao, { dataTransfer: 0 }), Tv = vt(Nv), Ov = H({}, Kr, { relatedTarget: 0 }), Ja = vt(Ov), xv = H({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cv = vt(xv), Iv = H({}, Zn, { clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    } }), Dv = vt(Iv), jv = H({}, Zn, { data: 0 }), vc = vt(jv), Mv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Rv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, Pv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Fv(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Pv[e]) ? !!t[e] : !1;
    }
    function Za() {
      return Fv;
    }
    var Av = H({}, Kr, { key: function(e) {
      if (e.key) {
        var t = Mv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = io(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Rv[e.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Za, charCode: function(e) {
      return e.type === "keypress" ? io(e) : 0;
    }, keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }, which: function(e) {
      return e.type === "keypress" ? io(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    } }), Lv = vt(Av), zv = H({}, ao, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), mc = vt(zv), Vv = H({}, Kr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Za }), Bv = vt(Vv), Uv = H({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Qv = vt(Uv), qv = H({}, ao, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Wv = vt(qv), $v = [9, 13, 27, 32], es = p && "CompositionEvent" in window, Jr = null;
    p && "documentMode" in document && (Jr = document.documentMode);
    var Hv = p && "TextEvent" in window && !Jr, yc = p && (!es || Jr && 8 < Jr && 11 >= Jr), gc = " ", _c = !1;
    function wc(e, t) {
      switch (e) {
        case "keyup":
          return $v.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Ec(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var er = !1;
    function Gv(e, t) {
      switch (e) {
        case "compositionend":
          return Ec(t);
        case "keypress":
          return t.which !== 32 ? null : (_c = !0, gc);
        case "textInput":
          return e = t.data, e === gc && _c ? null : e;
        default:
          return null;
      }
    }
    function Yv(e, t) {
      if (er) return e === "compositionend" || !es && wc(e, t) ? (e = dc(), ro = Ga = an = null, er = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return yc && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var Kv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
    function Sc(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Kv[e.type] : t === "textarea";
    }
    function kc(e, t, o, l) {
      Qu(l), t = fo(t, "onChange"), 0 < t.length && (o = new Ya("onChange", "change", null, o, l), e.push({ event: o, listeners: t }));
    }
    var Zr = null, ei = null;
    function Xv(e) {
      Bc(e, 0);
    }
    function so(e) {
      var t = or(e);
      if (Du(t)) return e;
    }
    function Jv(e, t) {
      if (e === "change") return t;
    }
    var bc = !1;
    if (p) {
      var ts;
      if (p) {
        var ns = "oninput" in document;
        if (!ns) {
          var Nc = document.createElement("div");
          Nc.setAttribute("oninput", "return;"), ns = typeof Nc.oninput == "function";
        }
        ts = ns;
      } else ts = !1;
      bc = ts && (!document.documentMode || 9 < document.documentMode);
    }
    function Tc() {
      Zr && (Zr.detachEvent("onpropertychange", Oc), ei = Zr = null);
    }
    function Oc(e) {
      if (e.propertyName === "value" && so(ei)) {
        var t = [];
        kc(t, ei, e, Pa(e)), Hu(Xv, t);
      }
    }
    function Zv(e, t, o) {
      e === "focusin" ? (Tc(), Zr = t, ei = o, Zr.attachEvent("onpropertychange", Oc)) : e === "focusout" && Tc();
    }
    function em(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown") return so(ei);
    }
    function tm(e, t) {
      if (e === "click") return so(t);
    }
    function nm(e, t) {
      if (e === "input" || e === "change") return so(t);
    }
    function rm(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Tt = typeof Object.is == "function" ? Object.is : rm;
    function ti(e, t) {
      if (Tt(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
      var o = Object.keys(e), l = Object.keys(t);
      if (o.length !== l.length) return !1;
      for (l = 0; l < o.length; l++) {
        var c = o[l];
        if (!h.call(t, c) || !Tt(e[c], t[c])) return !1;
      }
      return !0;
    }
    function xc(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Cc(e, t) {
      var o = xc(e);
      e = 0;
      for (var l; o; ) {
        if (o.nodeType === 3) {
          if (l = e + o.textContent.length, e <= t && l >= t) return { node: o, offset: t - e };
          e = l;
        }
        e: {
          for (; o; ) {
            if (o.nextSibling) {
              o = o.nextSibling;
              break e;
            }
            o = o.parentNode;
          }
          o = void 0;
        }
        o = xc(o);
      }
    }
    function Ic(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ic(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function Dc() {
      for (var e = window, t = qi(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var o = typeof t.contentWindow.location.href == "string";
        } catch {
          o = !1;
        }
        if (o) e = t.contentWindow;
        else break;
        t = qi(e.document);
      }
      return t;
    }
    function rs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function im(e) {
      var t = Dc(), o = e.focusedElem, l = e.selectionRange;
      if (t !== o && o && o.ownerDocument && Ic(o.ownerDocument.documentElement, o)) {
        if (l !== null && rs(o)) {
          if (t = l.start, e = l.end, e === void 0 && (e = t), "selectionStart" in o) o.selectionStart = t, o.selectionEnd = Math.min(e, o.value.length);
          else if (e = (t = o.ownerDocument || document) && t.defaultView || window, e.getSelection) {
            e = e.getSelection();
            var c = o.textContent.length, d = Math.min(l.start, c);
            l = l.end === void 0 ? d : Math.min(l.end, c), !e.extend && d > l && (c = l, l = d, d = c), c = Cc(o, d);
            var v = Cc(
              o,
              l
            );
            c && v && (e.rangeCount !== 1 || e.anchorNode !== c.node || e.anchorOffset !== c.offset || e.focusNode !== v.node || e.focusOffset !== v.offset) && (t = t.createRange(), t.setStart(c.node, c.offset), e.removeAllRanges(), d > l ? (e.addRange(t), e.extend(v.node, v.offset)) : (t.setEnd(v.node, v.offset), e.addRange(t)));
          }
        }
        for (t = [], e = o; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof o.focus == "function" && o.focus(), o = 0; o < t.length; o++) e = t[o], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
      }
    }
    var om = p && "documentMode" in document && 11 >= document.documentMode, tr = null, is = null, ni = null, os = !1;
    function jc(e, t, o) {
      var l = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
      os || tr == null || tr !== qi(l) || (l = tr, "selectionStart" in l && rs(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), ni && ti(ni, l) || (ni = l, l = fo(is, "onSelect"), 0 < l.length && (t = new Ya("onSelect", "select", null, t, o), e.push({ event: t, listeners: l }), t.target = tr)));
    }
    function lo(e, t) {
      var o = {};
      return o[e.toLowerCase()] = t.toLowerCase(), o["Webkit" + e] = "webkit" + t, o["Moz" + e] = "moz" + t, o;
    }
    var nr = { animationend: lo("Animation", "AnimationEnd"), animationiteration: lo("Animation", "AnimationIteration"), animationstart: lo("Animation", "AnimationStart"), transitionend: lo("Transition", "TransitionEnd") }, as = {}, Mc = {};
    p && (Mc = document.createElement("div").style, "AnimationEvent" in window || (delete nr.animationend.animation, delete nr.animationiteration.animation, delete nr.animationstart.animation), "TransitionEvent" in window || delete nr.transitionend.transition);
    function uo(e) {
      if (as[e]) return as[e];
      if (!nr[e]) return e;
      var t = nr[e], o;
      for (o in t) if (t.hasOwnProperty(o) && o in Mc) return as[e] = t[o];
      return e;
    }
    var Rc = uo("animationend"), Pc = uo("animationiteration"), Fc = uo("animationstart"), Ac = uo("transitionend"), Lc = /* @__PURE__ */ new Map(), zc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function sn(e, t) {
      Lc.set(e, t), u(t, [e]);
    }
    for (var ss = 0; ss < zc.length; ss++) {
      var ls = zc[ss], am = ls.toLowerCase(), sm = ls[0].toUpperCase() + ls.slice(1);
      sn(am, "on" + sm);
    }
    sn(Rc, "onAnimationEnd"), sn(Pc, "onAnimationIteration"), sn(Fc, "onAnimationStart"), sn("dblclick", "onDoubleClick"), sn("focusin", "onFocus"), sn("focusout", "onBlur"), sn(Ac, "onTransitionEnd"), f("onMouseEnter", ["mouseout", "mouseover"]), f("onMouseLeave", ["mouseout", "mouseover"]), f("onPointerEnter", ["pointerout", "pointerover"]), f("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var ri = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lm = new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));
    function Vc(e, t, o) {
      var l = e.type || "unknown-event";
      e.currentTarget = o, av(l, t, void 0, e), e.currentTarget = null;
    }
    function Bc(e, t) {
      t = (t & 4) !== 0;
      for (var o = 0; o < e.length; o++) {
        var l = e[o], c = l.event;
        l = l.listeners;
        e: {
          var d = void 0;
          if (t) for (var v = l.length - 1; 0 <= v; v--) {
            var _ = l[v], E = _.instance, j = _.currentTarget;
            if (_ = _.listener, E !== d && c.isPropagationStopped()) break e;
            Vc(c, _, j), d = E;
          }
          else for (v = 0; v < l.length; v++) {
            if (_ = l[v], E = _.instance, j = _.currentTarget, _ = _.listener, E !== d && c.isPropagationStopped()) break e;
            Vc(c, _, j), d = E;
          }
        }
      }
      if (Hi) throw e = za, Hi = !1, za = null, e;
    }
    function Ne(e, t) {
      var o = t[ms];
      o === void 0 && (o = t[ms] = /* @__PURE__ */ new Set());
      var l = e + "__bubble";
      o.has(l) || (Uc(t, e, 2, !1), o.add(l));
    }
    function us(e, t, o) {
      var l = 0;
      t && (l |= 4), Uc(o, e, l, t);
    }
    var co = "_reactListening" + Math.random().toString(36).slice(2);
    function ii(e) {
      if (!e[co]) {
        e[co] = !0, a.forEach(function(o) {
          o !== "selectionchange" && (lm.has(o) || us(o, !1, e), us(o, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[co] || (t[co] = !0, us("selectionchange", !1, t));
      }
    }
    function Uc(e, t, o, l) {
      switch (fc(t)) {
        case 1:
          var c = Sv;
          break;
        case 4:
          c = kv;
          break;
        default:
          c = $a;
      }
      o = c.bind(null, t, o, e), c = void 0, !La || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), l ? c !== void 0 ? e.addEventListener(t, o, { capture: !0, passive: c }) : e.addEventListener(t, o, !0) : c !== void 0 ? e.addEventListener(t, o, { passive: c }) : e.addEventListener(t, o, !1);
    }
    function cs(e, t, o, l, c) {
      var d = l;
      if (!(t & 1) && !(t & 2) && l !== null) e: for (; ; ) {
        if (l === null) return;
        var v = l.tag;
        if (v === 3 || v === 4) {
          var _ = l.stateNode.containerInfo;
          if (_ === c || _.nodeType === 8 && _.parentNode === c) break;
          if (v === 4) for (v = l.return; v !== null; ) {
            var E = v.tag;
            if ((E === 3 || E === 4) && (E = v.stateNode.containerInfo, E === c || E.nodeType === 8 && E.parentNode === c)) return;
            v = v.return;
          }
          for (; _ !== null; ) {
            if (v = Dn(_), v === null) return;
            if (E = v.tag, E === 5 || E === 6) {
              l = d = v;
              continue e;
            }
            _ = _.parentNode;
          }
        }
        l = l.return;
      }
      Hu(function() {
        var j = d, L = Pa(o), z = [];
        e: {
          var A = Lc.get(e);
          if (A !== void 0) {
            var $ = Ya, Y = e;
            switch (e) {
              case "keypress":
                if (io(o) === 0) break e;
              case "keydown":
              case "keyup":
                $ = Lv;
                break;
              case "focusin":
                Y = "focus", $ = Ja;
                break;
              case "focusout":
                Y = "blur", $ = Ja;
                break;
              case "beforeblur":
              case "afterblur":
                $ = Ja;
                break;
              case "click":
                if (o.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                $ = hc;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                $ = Tv;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                $ = Bv;
                break;
              case Rc:
              case Pc:
              case Fc:
                $ = Cv;
                break;
              case Ac:
                $ = Qv;
                break;
              case "scroll":
                $ = bv;
                break;
              case "wheel":
                $ = Wv;
                break;
              case "copy":
              case "cut":
              case "paste":
                $ = Dv;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                $ = mc;
            }
            var J = (t & 4) !== 0, Fe = !J && e === "scroll", x = J ? A !== null ? A + "Capture" : null : A;
            J = [];
            for (var k = j, D; k !== null; ) {
              D = k;
              var U = D.stateNode;
              if (D.tag === 5 && U !== null && (D = U, x !== null && (U = Vr(k, x), U != null && J.push(oi(k, U, D)))), Fe) break;
              k = k.return;
            }
            0 < J.length && (A = new $(A, Y, null, o, L), z.push({ event: A, listeners: J }));
          }
        }
        if (!(t & 7)) {
          e: {
            if (A = e === "mouseover" || e === "pointerover", $ = e === "mouseout" || e === "pointerout", A && o !== Ra && (Y = o.relatedTarget || o.fromElement) && (Dn(Y) || Y[Ut])) break e;
            if (($ || A) && (A = L.window === L ? L : (A = L.ownerDocument) ? A.defaultView || A.parentWindow : window, $ ? (Y = o.relatedTarget || o.toElement, $ = j, Y = Y ? Dn(Y) : null, Y !== null && (Fe = In(Y), Y !== Fe || Y.tag !== 5 && Y.tag !== 6) && (Y = null)) : ($ = null, Y = j), $ !== Y)) {
              if (J = hc, U = "onMouseLeave", x = "onMouseEnter", k = "mouse", (e === "pointerout" || e === "pointerover") && (J = mc, U = "onPointerLeave", x = "onPointerEnter", k = "pointer"), Fe = $ == null ? A : or($), D = Y == null ? A : or(Y), A = new J(U, k + "leave", $, o, L), A.target = Fe, A.relatedTarget = D, U = null, Dn(L) === j && (J = new J(x, k + "enter", Y, o, L), J.target = D, J.relatedTarget = Fe, U = J), Fe = U, $ && Y) t: {
                for (J = $, x = Y, k = 0, D = J; D; D = rr(D)) k++;
                for (D = 0, U = x; U; U = rr(U)) D++;
                for (; 0 < k - D; ) J = rr(J), k--;
                for (; 0 < D - k; ) x = rr(x), D--;
                for (; k--; ) {
                  if (J === x || x !== null && J === x.alternate) break t;
                  J = rr(J), x = rr(x);
                }
                J = null;
              }
              else J = null;
              $ !== null && Qc(z, A, $, J, !1), Y !== null && Fe !== null && Qc(z, Fe, Y, J, !0);
            }
          }
          e: {
            if (A = j ? or(j) : window, $ = A.nodeName && A.nodeName.toLowerCase(), $ === "select" || $ === "input" && A.type === "file") var Z = Jv;
            else if (Sc(A)) if (bc) Z = nm;
            else {
              Z = em;
              var ne = Zv;
            }
            else ($ = A.nodeName) && $.toLowerCase() === "input" && (A.type === "checkbox" || A.type === "radio") && (Z = tm);
            if (Z && (Z = Z(e, j))) {
              kc(z, Z, o, L);
              break e;
            }
            ne && ne(e, A, j), e === "focusout" && (ne = A._wrapperState) && ne.controlled && A.type === "number" && Ca(A, "number", A.value);
          }
          switch (ne = j ? or(j) : window, e) {
            case "focusin":
              (Sc(ne) || ne.contentEditable === "true") && (tr = ne, is = j, ni = null);
              break;
            case "focusout":
              ni = is = tr = null;
              break;
            case "mousedown":
              os = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              os = !1, jc(z, o, L);
              break;
            case "selectionchange":
              if (om) break;
            case "keydown":
            case "keyup":
              jc(z, o, L);
          }
          var re;
          if (es) e: {
            switch (e) {
              case "compositionstart":
                var oe = "onCompositionStart";
                break e;
              case "compositionend":
                oe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                oe = "onCompositionUpdate";
                break e;
            }
            oe = void 0;
          }
          else er ? wc(e, o) && (oe = "onCompositionEnd") : e === "keydown" && o.keyCode === 229 && (oe = "onCompositionStart");
          oe && (yc && o.locale !== "ko" && (er || oe !== "onCompositionStart" ? oe === "onCompositionEnd" && er && (re = dc()) : (an = L, Ga = "value" in an ? an.value : an.textContent, er = !0)), ne = fo(j, oe), 0 < ne.length && (oe = new vc(oe, e, null, o, L), z.push({ event: oe, listeners: ne }), re ? oe.data = re : (re = Ec(o), re !== null && (oe.data = re)))), (re = Hv ? Gv(e, o) : Yv(e, o)) && (j = fo(j, "onBeforeInput"), 0 < j.length && (L = new vc("onBeforeInput", "beforeinput", null, o, L), z.push({ event: L, listeners: j }), L.data = re));
        }
        Bc(z, t);
      });
    }
    function oi(e, t, o) {
      return { instance: e, listener: t, currentTarget: o };
    }
    function fo(e, t) {
      for (var o = t + "Capture", l = []; e !== null; ) {
        var c = e, d = c.stateNode;
        c.tag === 5 && d !== null && (c = d, d = Vr(e, o), d != null && l.unshift(oi(e, d, c)), d = Vr(e, t), d != null && l.push(oi(e, d, c))), e = e.return;
      }
      return l;
    }
    function rr(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function Qc(e, t, o, l, c) {
      for (var d = t._reactName, v = []; o !== null && o !== l; ) {
        var _ = o, E = _.alternate, j = _.stateNode;
        if (E !== null && E === l) break;
        _.tag === 5 && j !== null && (_ = j, c ? (E = Vr(o, d), E != null && v.unshift(oi(o, E, _))) : c || (E = Vr(o, d), E != null && v.push(oi(o, E, _)))), o = o.return;
      }
      v.length !== 0 && e.push({ event: t, listeners: v });
    }
    var um = /\r\n?/g, cm = /\u0000|\uFFFD/g;
    function qc(e) {
      return (typeof e == "string" ? e : "" + e).replace(um, `
`).replace(cm, "");
    }
    function po(e, t, o) {
      if (t = qc(t), qc(e) !== t && o) throw Error(r(425));
    }
    function ho() {
    }
    var fs = null, ds = null;
    function ps(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var hs = typeof setTimeout == "function" ? setTimeout : void 0, fm = typeof clearTimeout == "function" ? clearTimeout : void 0, Wc = typeof Promise == "function" ? Promise : void 0, dm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wc < "u" ? function(e) {
      return Wc.resolve(null).then(e).catch(pm);
    } : hs;
    function pm(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function vs(e, t) {
      var o = t, l = 0;
      do {
        var c = o.nextSibling;
        if (e.removeChild(o), c && c.nodeType === 8) if (o = c.data, o === "/$") {
          if (l === 0) {
            e.removeChild(c), Yr(t);
            return;
          }
          l--;
        } else o !== "$" && o !== "$?" && o !== "$!" || l++;
        o = c;
      } while (o);
      Yr(t);
    }
    function ln(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
          if (t === "/$") return null;
        }
      }
      return e;
    }
    function $c(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var o = e.data;
          if (o === "$" || o === "$!" || o === "$?") {
            if (t === 0) return e;
            t--;
          } else o === "/$" && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var ir = Math.random().toString(36).slice(2), Ft = "__reactFiber$" + ir, ai = "__reactProps$" + ir, Ut = "__reactContainer$" + ir, ms = "__reactEvents$" + ir, hm = "__reactListeners$" + ir, vm = "__reactHandles$" + ir;
    function Dn(e) {
      var t = e[Ft];
      if (t) return t;
      for (var o = e.parentNode; o; ) {
        if (t = o[Ut] || o[Ft]) {
          if (o = t.alternate, t.child !== null || o !== null && o.child !== null) for (e = $c(e); e !== null; ) {
            if (o = e[Ft]) return o;
            e = $c(e);
          }
          return t;
        }
        e = o, o = e.parentNode;
      }
      return null;
    }
    function si(e) {
      return e = e[Ft] || e[Ut], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function or(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(r(33));
    }
    function vo(e) {
      return e[ai] || null;
    }
    var ys = [], ar = -1;
    function un(e) {
      return { current: e };
    }
    function Te(e) {
      0 > ar || (e.current = ys[ar], ys[ar] = null, ar--);
    }
    function Se(e, t) {
      ar++, ys[ar] = e.current, e.current = t;
    }
    var cn = {}, Ze = un(cn), lt = un(!1), jn = cn;
    function sr(e, t) {
      var o = e.type.contextTypes;
      if (!o) return cn;
      var l = e.stateNode;
      if (l && l.__reactInternalMemoizedUnmaskedChildContext === t) return l.__reactInternalMemoizedMaskedChildContext;
      var c = {}, d;
      for (d in o) c[d] = t[d];
      return l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = c), c;
    }
    function ut(e) {
      return e = e.childContextTypes, e != null;
    }
    function mo() {
      Te(lt), Te(Ze);
    }
    function Hc(e, t, o) {
      if (Ze.current !== cn) throw Error(r(168));
      Se(Ze, t), Se(lt, o);
    }
    function Gc(e, t, o) {
      var l = e.stateNode;
      if (t = t.childContextTypes, typeof l.getChildContext != "function") return o;
      l = l.getChildContext();
      for (var c in l) if (!(c in t)) throw Error(r(108, Ee(e) || "Unknown", c));
      return H({}, o, l);
    }
    function yo(e) {
      return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || cn, jn = Ze.current, Se(Ze, e), Se(lt, lt.current), !0;
    }
    function Yc(e, t, o) {
      var l = e.stateNode;
      if (!l) throw Error(r(169));
      o ? (e = Gc(e, t, jn), l.__reactInternalMemoizedMergedChildContext = e, Te(lt), Te(Ze), Se(Ze, e)) : Te(lt), Se(lt, o);
    }
    var Qt = null, go = !1, gs = !1;
    function Kc(e) {
      Qt === null ? Qt = [e] : Qt.push(e);
    }
    function mm(e) {
      go = !0, Kc(e);
    }
    function fn() {
      if (!gs && Qt !== null) {
        gs = !0;
        var e = 0, t = _e;
        try {
          var o = Qt;
          for (_e = 1; e < o.length; e++) {
            var l = o[e];
            do
              l = l(!0);
            while (l !== null);
          }
          Qt = null, go = !1;
        } catch (c) {
          throw Qt !== null && (Qt = Qt.slice(e + 1)), Ju(Va, fn), c;
        } finally {
          _e = t, gs = !1;
        }
      }
      return null;
    }
    var lr = [], ur = 0, _o = null, wo = 0, _t = [], wt = 0, Mn = null, qt = 1, Wt = "";
    function Rn(e, t) {
      lr[ur++] = wo, lr[ur++] = _o, _o = e, wo = t;
    }
    function Xc(e, t, o) {
      _t[wt++] = qt, _t[wt++] = Wt, _t[wt++] = Mn, Mn = e;
      var l = qt;
      e = Wt;
      var c = 32 - Nt(l) - 1;
      l &= ~(1 << c), o += 1;
      var d = 32 - Nt(t) + c;
      if (30 < d) {
        var v = c - c % 5;
        d = (l & (1 << v) - 1).toString(32), l >>= v, c -= v, qt = 1 << 32 - Nt(t) + c | o << c | l, Wt = d + e;
      } else qt = 1 << d | o << c | l, Wt = e;
    }
    function _s(e) {
      e.return !== null && (Rn(e, 1), Xc(e, 1, 0));
    }
    function ws(e) {
      for (; e === _o; ) _o = lr[--ur], lr[ur] = null, wo = lr[--ur], lr[ur] = null;
      for (; e === Mn; ) Mn = _t[--wt], _t[wt] = null, Wt = _t[--wt], _t[wt] = null, qt = _t[--wt], _t[wt] = null;
    }
    var mt = null, yt = null, Ce = !1, Ot = null;
    function Jc(e, t) {
      var o = bt(5, null, null, 0);
      o.elementType = "DELETED", o.stateNode = t, o.return = e, t = e.deletions, t === null ? (e.deletions = [o], e.flags |= 16) : t.push(o);
    }
    function Zc(e, t) {
      switch (e.tag) {
        case 5:
          var o = e.type;
          return t = t.nodeType !== 1 || o.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, mt = e, yt = ln(t.firstChild), !0) : !1;
        case 6:
          return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, mt = e, yt = null, !0) : !1;
        case 13:
          return t = t.nodeType !== 8 ? null : t, t !== null ? (o = Mn !== null ? { id: qt, overflow: Wt } : null, e.memoizedState = { dehydrated: t, treeContext: o, retryLane: 1073741824 }, o = bt(18, null, null, 0), o.stateNode = t, o.return = e, e.child = o, mt = e, yt = null, !0) : !1;
        default:
          return !1;
      }
    }
    function Es(e) {
      return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function Ss(e) {
      if (Ce) {
        var t = yt;
        if (t) {
          var o = t;
          if (!Zc(e, t)) {
            if (Es(e)) throw Error(r(418));
            t = ln(o.nextSibling);
            var l = mt;
            t && Zc(e, t) ? Jc(l, o) : (e.flags = e.flags & -4097 | 2, Ce = !1, mt = e);
          }
        } else {
          if (Es(e)) throw Error(r(418));
          e.flags = e.flags & -4097 | 2, Ce = !1, mt = e;
        }
      }
    }
    function ef(e) {
      for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
      mt = e;
    }
    function Eo(e) {
      if (e !== mt) return !1;
      if (!Ce) return ef(e), Ce = !0, !1;
      var t;
      if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ps(e.type, e.memoizedProps)), t && (t = yt)) {
        if (Es(e)) throw tf(), Error(r(418));
        for (; t; ) Jc(e, t), t = ln(t.nextSibling);
      }
      if (ef(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
              var o = e.data;
              if (o === "/$") {
                if (t === 0) {
                  yt = ln(e.nextSibling);
                  break e;
                }
                t--;
              } else o !== "$" && o !== "$!" && o !== "$?" || t++;
            }
            e = e.nextSibling;
          }
          yt = null;
        }
      } else yt = mt ? ln(e.stateNode.nextSibling) : null;
      return !0;
    }
    function tf() {
      for (var e = yt; e; ) e = ln(e.nextSibling);
    }
    function cr() {
      yt = mt = null, Ce = !1;
    }
    function ks(e) {
      Ot === null ? Ot = [e] : Ot.push(e);
    }
    var ym = V.ReactCurrentBatchConfig;
    function li(e, t, o) {
      if (e = o.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (o._owner) {
          if (o = o._owner, o) {
            if (o.tag !== 1) throw Error(r(309));
            var l = o.stateNode;
          }
          if (!l) throw Error(r(147, e));
          var c = l, d = "" + e;
          return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === d ? t.ref : (t = function(v) {
            var _ = c.refs;
            v === null ? delete _[d] : _[d] = v;
          }, t._stringRef = d, t);
        }
        if (typeof e != "string") throw Error(r(284));
        if (!o._owner) throw Error(r(290, e));
      }
      return e;
    }
    function So(e, t) {
      throw e = Object.prototype.toString.call(t), Error(r(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function nf(e) {
      var t = e._init;
      return t(e._payload);
    }
    function rf(e) {
      function t(x, k) {
        if (e) {
          var D = x.deletions;
          D === null ? (x.deletions = [k], x.flags |= 16) : D.push(k);
        }
      }
      function o(x, k) {
        if (!e) return null;
        for (; k !== null; ) t(x, k), k = k.sibling;
        return null;
      }
      function l(x, k) {
        for (x = /* @__PURE__ */ new Map(); k !== null; ) k.key !== null ? x.set(k.key, k) : x.set(k.index, k), k = k.sibling;
        return x;
      }
      function c(x, k) {
        return x = _n(x, k), x.index = 0, x.sibling = null, x;
      }
      function d(x, k, D) {
        return x.index = D, e ? (D = x.alternate, D !== null ? (D = D.index, D < k ? (x.flags |= 2, k) : D) : (x.flags |= 2, k)) : (x.flags |= 1048576, k);
      }
      function v(x) {
        return e && x.alternate === null && (x.flags |= 2), x;
      }
      function _(x, k, D, U) {
        return k === null || k.tag !== 6 ? (k = hl(D, x.mode, U), k.return = x, k) : (k = c(k, D), k.return = x, k);
      }
      function E(x, k, D, U) {
        var Z = D.type;
        return Z === te ? L(x, k, D.props.children, U, D.key) : k !== null && (k.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === Ye && nf(Z) === k.type) ? (U = c(k, D.props), U.ref = li(x, k, D), U.return = x, U) : (U = $o(D.type, D.key, D.props, null, x.mode, U), U.ref = li(x, k, D), U.return = x, U);
      }
      function j(x, k, D, U) {
        return k === null || k.tag !== 4 || k.stateNode.containerInfo !== D.containerInfo || k.stateNode.implementation !== D.implementation ? (k = vl(D, x.mode, U), k.return = x, k) : (k = c(k, D.children || []), k.return = x, k);
      }
      function L(x, k, D, U, Z) {
        return k === null || k.tag !== 7 ? (k = Un(D, x.mode, U, Z), k.return = x, k) : (k = c(k, D), k.return = x, k);
      }
      function z(x, k, D) {
        if (typeof k == "string" && k !== "" || typeof k == "number") return k = hl("" + k, x.mode, D), k.return = x, k;
        if (typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case B:
              return D = $o(k.type, k.key, k.props, null, x.mode, D), D.ref = li(x, null, k), D.return = x, D;
            case Q:
              return k = vl(k, x.mode, D), k.return = x, k;
            case Ye:
              var U = k._init;
              return z(x, U(k._payload), D);
          }
          if (Ar(k) || X(k)) return k = Un(k, x.mode, D, null), k.return = x, k;
          So(x, k);
        }
        return null;
      }
      function A(x, k, D, U) {
        var Z = k !== null ? k.key : null;
        if (typeof D == "string" && D !== "" || typeof D == "number") return Z !== null ? null : _(x, k, "" + D, U);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case B:
              return D.key === Z ? E(x, k, D, U) : null;
            case Q:
              return D.key === Z ? j(x, k, D, U) : null;
            case Ye:
              return Z = D._init, A(
                x,
                k,
                Z(D._payload),
                U
              );
          }
          if (Ar(D) || X(D)) return Z !== null ? null : L(x, k, D, U, null);
          So(x, D);
        }
        return null;
      }
      function $(x, k, D, U, Z) {
        if (typeof U == "string" && U !== "" || typeof U == "number") return x = x.get(D) || null, _(k, x, "" + U, Z);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case B:
              return x = x.get(U.key === null ? D : U.key) || null, E(k, x, U, Z);
            case Q:
              return x = x.get(U.key === null ? D : U.key) || null, j(k, x, U, Z);
            case Ye:
              var ne = U._init;
              return $(x, k, D, ne(U._payload), Z);
          }
          if (Ar(U) || X(U)) return x = x.get(D) || null, L(k, x, U, Z, null);
          So(k, U);
        }
        return null;
      }
      function Y(x, k, D, U) {
        for (var Z = null, ne = null, re = k, oe = k = 0, We = null; re !== null && oe < D.length; oe++) {
          re.index > oe ? (We = re, re = null) : We = re.sibling;
          var ve = A(x, re, D[oe], U);
          if (ve === null) {
            re === null && (re = We);
            break;
          }
          e && re && ve.alternate === null && t(x, re), k = d(ve, k, oe), ne === null ? Z = ve : ne.sibling = ve, ne = ve, re = We;
        }
        if (oe === D.length) return o(x, re), Ce && Rn(x, oe), Z;
        if (re === null) {
          for (; oe < D.length; oe++) re = z(x, D[oe], U), re !== null && (k = d(re, k, oe), ne === null ? Z = re : ne.sibling = re, ne = re);
          return Ce && Rn(x, oe), Z;
        }
        for (re = l(x, re); oe < D.length; oe++) We = $(re, x, oe, D[oe], U), We !== null && (e && We.alternate !== null && re.delete(We.key === null ? oe : We.key), k = d(We, k, oe), ne === null ? Z = We : ne.sibling = We, ne = We);
        return e && re.forEach(function(wn) {
          return t(x, wn);
        }), Ce && Rn(x, oe), Z;
      }
      function J(x, k, D, U) {
        var Z = X(D);
        if (typeof Z != "function") throw Error(r(150));
        if (D = Z.call(D), D == null) throw Error(r(151));
        for (var ne = Z = null, re = k, oe = k = 0, We = null, ve = D.next(); re !== null && !ve.done; oe++, ve = D.next()) {
          re.index > oe ? (We = re, re = null) : We = re.sibling;
          var wn = A(x, re, ve.value, U);
          if (wn === null) {
            re === null && (re = We);
            break;
          }
          e && re && wn.alternate === null && t(x, re), k = d(wn, k, oe), ne === null ? Z = wn : ne.sibling = wn, ne = wn, re = We;
        }
        if (ve.done) return o(
          x,
          re
        ), Ce && Rn(x, oe), Z;
        if (re === null) {
          for (; !ve.done; oe++, ve = D.next()) ve = z(x, ve.value, U), ve !== null && (k = d(ve, k, oe), ne === null ? Z = ve : ne.sibling = ve, ne = ve);
          return Ce && Rn(x, oe), Z;
        }
        for (re = l(x, re); !ve.done; oe++, ve = D.next()) ve = $(re, x, oe, ve.value, U), ve !== null && (e && ve.alternate !== null && re.delete(ve.key === null ? oe : ve.key), k = d(ve, k, oe), ne === null ? Z = ve : ne.sibling = ve, ne = ve);
        return e && re.forEach(function(Km) {
          return t(x, Km);
        }), Ce && Rn(x, oe), Z;
      }
      function Fe(x, k, D, U) {
        if (typeof D == "object" && D !== null && D.type === te && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case B:
              e: {
                for (var Z = D.key, ne = k; ne !== null; ) {
                  if (ne.key === Z) {
                    if (Z = D.type, Z === te) {
                      if (ne.tag === 7) {
                        o(x, ne.sibling), k = c(ne, D.props.children), k.return = x, x = k;
                        break e;
                      }
                    } else if (ne.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === Ye && nf(Z) === ne.type) {
                      o(x, ne.sibling), k = c(ne, D.props), k.ref = li(x, ne, D), k.return = x, x = k;
                      break e;
                    }
                    o(x, ne);
                    break;
                  } else t(x, ne);
                  ne = ne.sibling;
                }
                D.type === te ? (k = Un(D.props.children, x.mode, U, D.key), k.return = x, x = k) : (U = $o(D.type, D.key, D.props, null, x.mode, U), U.ref = li(x, k, D), U.return = x, x = U);
              }
              return v(x);
            case Q:
              e: {
                for (ne = D.key; k !== null; ) {
                  if (k.key === ne) if (k.tag === 4 && k.stateNode.containerInfo === D.containerInfo && k.stateNode.implementation === D.implementation) {
                    o(x, k.sibling), k = c(k, D.children || []), k.return = x, x = k;
                    break e;
                  } else {
                    o(x, k);
                    break;
                  }
                  else t(x, k);
                  k = k.sibling;
                }
                k = vl(D, x.mode, U), k.return = x, x = k;
              }
              return v(x);
            case Ye:
              return ne = D._init, Fe(x, k, ne(D._payload), U);
          }
          if (Ar(D)) return Y(x, k, D, U);
          if (X(D)) return J(x, k, D, U);
          So(x, D);
        }
        return typeof D == "string" && D !== "" || typeof D == "number" ? (D = "" + D, k !== null && k.tag === 6 ? (o(x, k.sibling), k = c(k, D), k.return = x, x = k) : (o(x, k), k = hl(D, x.mode, U), k.return = x, x = k), v(x)) : o(x, k);
      }
      return Fe;
    }
    var fr = rf(!0), of = rf(!1), ko = un(null), bo = null, dr = null, bs = null;
    function Ns() {
      bs = dr = bo = null;
    }
    function Ts(e) {
      var t = ko.current;
      Te(ko), e._currentValue = t;
    }
    function Os(e, t, o) {
      for (; e !== null; ) {
        var l = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === o) break;
        e = e.return;
      }
    }
    function pr(e, t) {
      bo = e, bs = dr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ct = !0), e.firstContext = null);
    }
    function Et(e) {
      var t = e._currentValue;
      if (bs !== e) if (e = { context: e, memoizedValue: t, next: null }, dr === null) {
        if (bo === null) throw Error(r(308));
        dr = e, bo.dependencies = { lanes: 0, firstContext: e };
      } else dr = dr.next = e;
      return t;
    }
    var Pn = null;
    function xs(e) {
      Pn === null ? Pn = [e] : Pn.push(e);
    }
    function af(e, t, o, l) {
      var c = t.interleaved;
      return c === null ? (o.next = o, xs(t)) : (o.next = c.next, c.next = o), t.interleaved = o, $t(e, l);
    }
    function $t(e, t) {
      e.lanes |= t;
      var o = e.alternate;
      for (o !== null && (o.lanes |= t), o = e, e = e.return; e !== null; ) e.childLanes |= t, o = e.alternate, o !== null && (o.childLanes |= t), o = e, e = e.return;
      return o.tag === 3 ? o.stateNode : null;
    }
    var dn = !1;
    function Cs(e) {
      e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function sf(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
    }
    function Ht(e, t) {
      return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function pn(e, t, o) {
      var l = e.updateQueue;
      if (l === null) return null;
      if (l = l.shared, de & 2) {
        var c = l.pending;
        return c === null ? t.next = t : (t.next = c.next, c.next = t), l.pending = t, $t(e, o);
      }
      return c = l.interleaved, c === null ? (t.next = t, xs(l)) : (t.next = c.next, c.next = t), l.interleaved = t, $t(e, o);
    }
    function No(e, t, o) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (o & 4194240) !== 0)) {
        var l = t.lanes;
        l &= e.pendingLanes, o |= l, t.lanes = o, Qa(e, o);
      }
    }
    function lf(e, t) {
      var o = e.updateQueue, l = e.alternate;
      if (l !== null && (l = l.updateQueue, o === l)) {
        var c = null, d = null;
        if (o = o.firstBaseUpdate, o !== null) {
          do {
            var v = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
            d === null ? c = d = v : d = d.next = v, o = o.next;
          } while (o !== null);
          d === null ? c = d = t : d = d.next = t;
        } else c = d = t;
        o = { baseState: l.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: l.shared, effects: l.effects }, e.updateQueue = o;
        return;
      }
      e = o.lastBaseUpdate, e === null ? o.firstBaseUpdate = t : e.next = t, o.lastBaseUpdate = t;
    }
    function To(e, t, o, l) {
      var c = e.updateQueue;
      dn = !1;
      var d = c.firstBaseUpdate, v = c.lastBaseUpdate, _ = c.shared.pending;
      if (_ !== null) {
        c.shared.pending = null;
        var E = _, j = E.next;
        E.next = null, v === null ? d = j : v.next = j, v = E;
        var L = e.alternate;
        L !== null && (L = L.updateQueue, _ = L.lastBaseUpdate, _ !== v && (_ === null ? L.firstBaseUpdate = j : _.next = j, L.lastBaseUpdate = E));
      }
      if (d !== null) {
        var z = c.baseState;
        v = 0, L = j = E = null, _ = d;
        do {
          var A = _.lane, $ = _.eventTime;
          if ((l & A) === A) {
            L !== null && (L = L.next = {
              eventTime: $,
              lane: 0,
              tag: _.tag,
              payload: _.payload,
              callback: _.callback,
              next: null
            });
            e: {
              var Y = e, J = _;
              switch (A = t, $ = o, J.tag) {
                case 1:
                  if (Y = J.payload, typeof Y == "function") {
                    z = Y.call($, z, A);
                    break e;
                  }
                  z = Y;
                  break e;
                case 3:
                  Y.flags = Y.flags & -65537 | 128;
                case 0:
                  if (Y = J.payload, A = typeof Y == "function" ? Y.call($, z, A) : Y, A == null) break e;
                  z = H({}, z, A);
                  break e;
                case 2:
                  dn = !0;
              }
            }
            _.callback !== null && _.lane !== 0 && (e.flags |= 64, A = c.effects, A === null ? c.effects = [_] : A.push(_));
          } else $ = { eventTime: $, lane: A, tag: _.tag, payload: _.payload, callback: _.callback, next: null }, L === null ? (j = L = $, E = z) : L = L.next = $, v |= A;
          if (_ = _.next, _ === null) {
            if (_ = c.shared.pending, _ === null) break;
            A = _, _ = A.next, A.next = null, c.lastBaseUpdate = A, c.shared.pending = null;
          }
        } while (!0);
        if (L === null && (E = z), c.baseState = E, c.firstBaseUpdate = j, c.lastBaseUpdate = L, t = c.shared.interleaved, t !== null) {
          c = t;
          do
            v |= c.lane, c = c.next;
          while (c !== t);
        } else d === null && (c.shared.lanes = 0);
        Ln |= v, e.lanes = v, e.memoizedState = z;
      }
    }
    function uf(e, t, o) {
      if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
        var l = e[t], c = l.callback;
        if (c !== null) {
          if (l.callback = null, l = o, typeof c != "function") throw Error(r(191, c));
          c.call(l);
        }
      }
    }
    var ui = {}, At = un(ui), ci = un(ui), fi = un(ui);
    function Fn(e) {
      if (e === ui) throw Error(r(174));
      return e;
    }
    function Is(e, t) {
      switch (Se(fi, t), Se(ci, e), Se(At, ui), e = t.nodeType, e) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Da(null, "");
          break;
        default:
          e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Da(t, e);
      }
      Te(At), Se(At, t);
    }
    function hr() {
      Te(At), Te(ci), Te(fi);
    }
    function cf(e) {
      Fn(fi.current);
      var t = Fn(At.current), o = Da(t, e.type);
      t !== o && (Se(ci, e), Se(At, o));
    }
    function Ds(e) {
      ci.current === e && (Te(At), Te(ci));
    }
    var Ie = un(0);
    function Oo(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var o = t.memoizedState;
          if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var js = [];
    function Ms() {
      for (var e = 0; e < js.length; e++) js[e]._workInProgressVersionPrimary = null;
      js.length = 0;
    }
    var xo = V.ReactCurrentDispatcher, Rs = V.ReactCurrentBatchConfig, An = 0, De = null, Ve = null, Qe = null, Co = !1, di = !1, pi = 0, gm = 0;
    function et() {
      throw Error(r(321));
    }
    function Ps(e, t) {
      if (t === null) return !1;
      for (var o = 0; o < t.length && o < e.length; o++) if (!Tt(e[o], t[o])) return !1;
      return !0;
    }
    function Fs(e, t, o, l, c, d) {
      if (An = d, De = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, xo.current = e === null || e.memoizedState === null ? Sm : km, e = o(l, c), di) {
        d = 0;
        do {
          if (di = !1, pi = 0, 25 <= d) throw Error(r(301));
          d += 1, Qe = Ve = null, t.updateQueue = null, xo.current = bm, e = o(l, c);
        } while (di);
      }
      if (xo.current = jo, t = Ve !== null && Ve.next !== null, An = 0, Qe = Ve = De = null, Co = !1, t) throw Error(r(300));
      return e;
    }
    function As() {
      var e = pi !== 0;
      return pi = 0, e;
    }
    function Lt() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return Qe === null ? De.memoizedState = Qe = e : Qe = Qe.next = e, Qe;
    }
    function St() {
      if (Ve === null) {
        var e = De.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Ve.next;
      var t = Qe === null ? De.memoizedState : Qe.next;
      if (t !== null) Qe = t, Ve = e;
      else {
        if (e === null) throw Error(r(310));
        Ve = e, e = { memoizedState: Ve.memoizedState, baseState: Ve.baseState, baseQueue: Ve.baseQueue, queue: Ve.queue, next: null }, Qe === null ? De.memoizedState = Qe = e : Qe = Qe.next = e;
      }
      return Qe;
    }
    function hi(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ls(e) {
      var t = St(), o = t.queue;
      if (o === null) throw Error(r(311));
      o.lastRenderedReducer = e;
      var l = Ve, c = l.baseQueue, d = o.pending;
      if (d !== null) {
        if (c !== null) {
          var v = c.next;
          c.next = d.next, d.next = v;
        }
        l.baseQueue = c = d, o.pending = null;
      }
      if (c !== null) {
        d = c.next, l = l.baseState;
        var _ = v = null, E = null, j = d;
        do {
          var L = j.lane;
          if ((An & L) === L) E !== null && (E = E.next = { lane: 0, action: j.action, hasEagerState: j.hasEagerState, eagerState: j.eagerState, next: null }), l = j.hasEagerState ? j.eagerState : e(l, j.action);
          else {
            var z = {
              lane: L,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            };
            E === null ? (_ = E = z, v = l) : E = E.next = z, De.lanes |= L, Ln |= L;
          }
          j = j.next;
        } while (j !== null && j !== d);
        E === null ? v = l : E.next = _, Tt(l, t.memoizedState) || (ct = !0), t.memoizedState = l, t.baseState = v, t.baseQueue = E, o.lastRenderedState = l;
      }
      if (e = o.interleaved, e !== null) {
        c = e;
        do
          d = c.lane, De.lanes |= d, Ln |= d, c = c.next;
        while (c !== e);
      } else c === null && (o.lanes = 0);
      return [t.memoizedState, o.dispatch];
    }
    function zs(e) {
      var t = St(), o = t.queue;
      if (o === null) throw Error(r(311));
      o.lastRenderedReducer = e;
      var l = o.dispatch, c = o.pending, d = t.memoizedState;
      if (c !== null) {
        o.pending = null;
        var v = c = c.next;
        do
          d = e(d, v.action), v = v.next;
        while (v !== c);
        Tt(d, t.memoizedState) || (ct = !0), t.memoizedState = d, t.baseQueue === null && (t.baseState = d), o.lastRenderedState = d;
      }
      return [d, l];
    }
    function ff() {
    }
    function df(e, t) {
      var o = De, l = St(), c = t(), d = !Tt(l.memoizedState, c);
      if (d && (l.memoizedState = c, ct = !0), l = l.queue, Vs(vf.bind(null, o, l, e), [e]), l.getSnapshot !== t || d || Qe !== null && Qe.memoizedState.tag & 1) {
        if (o.flags |= 2048, vi(9, hf.bind(null, o, l, c, t), void 0, null), qe === null) throw Error(r(349));
        An & 30 || pf(o, t, c);
      }
      return c;
    }
    function pf(e, t, o) {
      e.flags |= 16384, e = { getSnapshot: t, value: o }, t = De.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, De.updateQueue = t, t.stores = [e]) : (o = t.stores, o === null ? t.stores = [e] : o.push(e));
    }
    function hf(e, t, o, l) {
      t.value = o, t.getSnapshot = l, mf(t) && yf(e);
    }
    function vf(e, t, o) {
      return o(function() {
        mf(t) && yf(e);
      });
    }
    function mf(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var o = t();
        return !Tt(e, o);
      } catch {
        return !0;
      }
    }
    function yf(e) {
      var t = $t(e, 1);
      t !== null && Dt(t, e, 1, -1);
    }
    function gf(e) {
      var t = Lt();
      return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: hi, lastRenderedState: e }, t.queue = e, e = e.dispatch = Em.bind(null, De, e), [t.memoizedState, e];
    }
    function vi(e, t, o, l) {
      return e = { tag: e, create: t, destroy: o, deps: l, next: null }, t = De.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, De.updateQueue = t, t.lastEffect = e.next = e) : (o = t.lastEffect, o === null ? t.lastEffect = e.next = e : (l = o.next, o.next = e, e.next = l, t.lastEffect = e)), e;
    }
    function _f() {
      return St().memoizedState;
    }
    function Io(e, t, o, l) {
      var c = Lt();
      De.flags |= e, c.memoizedState = vi(1 | t, o, void 0, l === void 0 ? null : l);
    }
    function Do(e, t, o, l) {
      var c = St();
      l = l === void 0 ? null : l;
      var d = void 0;
      if (Ve !== null) {
        var v = Ve.memoizedState;
        if (d = v.destroy, l !== null && Ps(l, v.deps)) {
          c.memoizedState = vi(t, o, d, l);
          return;
        }
      }
      De.flags |= e, c.memoizedState = vi(1 | t, o, d, l);
    }
    function wf(e, t) {
      return Io(8390656, 8, e, t);
    }
    function Vs(e, t) {
      return Do(2048, 8, e, t);
    }
    function Ef(e, t) {
      return Do(4, 2, e, t);
    }
    function Sf(e, t) {
      return Do(4, 4, e, t);
    }
    function kf(e, t) {
      if (typeof t == "function") return e = e(), t(e), function() {
        t(null);
      };
      if (t != null) return e = e(), t.current = e, function() {
        t.current = null;
      };
    }
    function bf(e, t, o) {
      return o = o != null ? o.concat([e]) : null, Do(4, 4, kf.bind(null, t, e), o);
    }
    function Bs() {
    }
    function Nf(e, t) {
      var o = St();
      t = t === void 0 ? null : t;
      var l = o.memoizedState;
      return l !== null && t !== null && Ps(t, l[1]) ? l[0] : (o.memoizedState = [e, t], e);
    }
    function Tf(e, t) {
      var o = St();
      t = t === void 0 ? null : t;
      var l = o.memoizedState;
      return l !== null && t !== null && Ps(t, l[1]) ? l[0] : (e = e(), o.memoizedState = [e, t], e);
    }
    function Of(e, t, o) {
      return An & 21 ? (Tt(o, t) || (o = nc(), De.lanes |= o, Ln |= o, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ct = !0), e.memoizedState = o);
    }
    function _m(e, t) {
      var o = _e;
      _e = o !== 0 && 4 > o ? o : 4, e(!0);
      var l = Rs.transition;
      Rs.transition = {};
      try {
        e(!1), t();
      } finally {
        _e = o, Rs.transition = l;
      }
    }
    function xf() {
      return St().memoizedState;
    }
    function wm(e, t, o) {
      var l = yn(e);
      if (o = { lane: l, action: o, hasEagerState: !1, eagerState: null, next: null }, Cf(e)) If(t, o);
      else if (o = af(e, t, o, l), o !== null) {
        var c = ot();
        Dt(o, e, l, c), Df(o, t, l);
      }
    }
    function Em(e, t, o) {
      var l = yn(e), c = { lane: l, action: o, hasEagerState: !1, eagerState: null, next: null };
      if (Cf(e)) If(t, c);
      else {
        var d = e.alternate;
        if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = t.lastRenderedReducer, d !== null)) try {
          var v = t.lastRenderedState, _ = d(v, o);
          if (c.hasEagerState = !0, c.eagerState = _, Tt(_, v)) {
            var E = t.interleaved;
            E === null ? (c.next = c, xs(t)) : (c.next = E.next, E.next = c), t.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
        o = af(e, t, c, l), o !== null && (c = ot(), Dt(o, e, l, c), Df(o, t, l));
      }
    }
    function Cf(e) {
      var t = e.alternate;
      return e === De || t !== null && t === De;
    }
    function If(e, t) {
      di = Co = !0;
      var o = e.pending;
      o === null ? t.next = t : (t.next = o.next, o.next = t), e.pending = t;
    }
    function Df(e, t, o) {
      if (o & 4194240) {
        var l = t.lanes;
        l &= e.pendingLanes, o |= l, t.lanes = o, Qa(e, o);
      }
    }
    var jo = { readContext: Et, useCallback: et, useContext: et, useEffect: et, useImperativeHandle: et, useInsertionEffect: et, useLayoutEffect: et, useMemo: et, useReducer: et, useRef: et, useState: et, useDebugValue: et, useDeferredValue: et, useTransition: et, useMutableSource: et, useSyncExternalStore: et, useId: et, unstable_isNewReconciler: !1 }, Sm = { readContext: Et, useCallback: function(e, t) {
      return Lt().memoizedState = [e, t === void 0 ? null : t], e;
    }, useContext: Et, useEffect: wf, useImperativeHandle: function(e, t, o) {
      return o = o != null ? o.concat([e]) : null, Io(
        4194308,
        4,
        kf.bind(null, t, e),
        o
      );
    }, useLayoutEffect: function(e, t) {
      return Io(4194308, 4, e, t);
    }, useInsertionEffect: function(e, t) {
      return Io(4, 2, e, t);
    }, useMemo: function(e, t) {
      var o = Lt();
      return t = t === void 0 ? null : t, e = e(), o.memoizedState = [e, t], e;
    }, useReducer: function(e, t, o) {
      var l = Lt();
      return t = o !== void 0 ? o(t) : t, l.memoizedState = l.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, l.queue = e, e = e.dispatch = wm.bind(null, De, e), [l.memoizedState, e];
    }, useRef: function(e) {
      var t = Lt();
      return e = { current: e }, t.memoizedState = e;
    }, useState: gf, useDebugValue: Bs, useDeferredValue: function(e) {
      return Lt().memoizedState = e;
    }, useTransition: function() {
      var e = gf(!1), t = e[0];
      return e = _m.bind(null, e[1]), Lt().memoizedState = e, [t, e];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(e, t, o) {
      var l = De, c = Lt();
      if (Ce) {
        if (o === void 0) throw Error(r(407));
        o = o();
      } else {
        if (o = t(), qe === null) throw Error(r(349));
        An & 30 || pf(l, t, o);
      }
      c.memoizedState = o;
      var d = { value: o, getSnapshot: t };
      return c.queue = d, wf(vf.bind(
        null,
        l,
        d,
        e
      ), [e]), l.flags |= 2048, vi(9, hf.bind(null, l, d, o, t), void 0, null), o;
    }, useId: function() {
      var e = Lt(), t = qe.identifierPrefix;
      if (Ce) {
        var o = Wt, l = qt;
        o = (l & ~(1 << 32 - Nt(l) - 1)).toString(32) + o, t = ":" + t + "R" + o, o = pi++, 0 < o && (t += "H" + o.toString(32)), t += ":";
      } else o = gm++, t = ":" + t + "r" + o.toString(32) + ":";
      return e.memoizedState = t;
    }, unstable_isNewReconciler: !1 }, km = {
      readContext: Et,
      useCallback: Nf,
      useContext: Et,
      useEffect: Vs,
      useImperativeHandle: bf,
      useInsertionEffect: Ef,
      useLayoutEffect: Sf,
      useMemo: Tf,
      useReducer: Ls,
      useRef: _f,
      useState: function() {
        return Ls(hi);
      },
      useDebugValue: Bs,
      useDeferredValue: function(e) {
        var t = St();
        return Of(t, Ve.memoizedState, e);
      },
      useTransition: function() {
        var e = Ls(hi)[0], t = St().memoizedState;
        return [e, t];
      },
      useMutableSource: ff,
      useSyncExternalStore: df,
      useId: xf,
      unstable_isNewReconciler: !1
    }, bm = { readContext: Et, useCallback: Nf, useContext: Et, useEffect: Vs, useImperativeHandle: bf, useInsertionEffect: Ef, useLayoutEffect: Sf, useMemo: Tf, useReducer: zs, useRef: _f, useState: function() {
      return zs(hi);
    }, useDebugValue: Bs, useDeferredValue: function(e) {
      var t = St();
      return Ve === null ? t.memoizedState = e : Of(t, Ve.memoizedState, e);
    }, useTransition: function() {
      var e = zs(hi)[0], t = St().memoizedState;
      return [e, t];
    }, useMutableSource: ff, useSyncExternalStore: df, useId: xf, unstable_isNewReconciler: !1 };
    function xt(e, t) {
      if (e && e.defaultProps) {
        t = H({}, t), e = e.defaultProps;
        for (var o in e) t[o] === void 0 && (t[o] = e[o]);
        return t;
      }
      return t;
    }
    function Us(e, t, o, l) {
      t = e.memoizedState, o = o(l, t), o = o == null ? t : H({}, t, o), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    var Mo = { isMounted: function(e) {
      return (e = e._reactInternals) ? In(e) === e : !1;
    }, enqueueSetState: function(e, t, o) {
      e = e._reactInternals;
      var l = ot(), c = yn(e), d = Ht(l, c);
      d.payload = t, o != null && (d.callback = o), t = pn(e, d, c), t !== null && (Dt(t, e, c, l), No(t, e, c));
    }, enqueueReplaceState: function(e, t, o) {
      e = e._reactInternals;
      var l = ot(), c = yn(e), d = Ht(l, c);
      d.tag = 1, d.payload = t, o != null && (d.callback = o), t = pn(e, d, c), t !== null && (Dt(t, e, c, l), No(t, e, c));
    }, enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var o = ot(), l = yn(e), c = Ht(o, l);
      c.tag = 2, t != null && (c.callback = t), t = pn(e, c, l), t !== null && (Dt(t, e, l, o), No(t, e, l));
    } };
    function jf(e, t, o, l, c, d, v) {
      return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, d, v) : t.prototype && t.prototype.isPureReactComponent ? !ti(o, l) || !ti(c, d) : !0;
    }
    function Mf(e, t, o) {
      var l = !1, c = cn, d = t.contextType;
      return typeof d == "object" && d !== null ? d = Et(d) : (c = ut(t) ? jn : Ze.current, l = t.contextTypes, d = (l = l != null) ? sr(e, c) : cn), t = new t(o, d), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Mo, e.stateNode = t, t._reactInternals = e, l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = c, e.__reactInternalMemoizedMaskedChildContext = d), t;
    }
    function Rf(e, t, o, l) {
      e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(o, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(o, l), t.state !== e && Mo.enqueueReplaceState(t, t.state, null);
    }
    function Qs(e, t, o, l) {
      var c = e.stateNode;
      c.props = o, c.state = e.memoizedState, c.refs = {}, Cs(e);
      var d = t.contextType;
      typeof d == "object" && d !== null ? c.context = Et(d) : (d = ut(t) ? jn : Ze.current, c.context = sr(e, d)), c.state = e.memoizedState, d = t.getDerivedStateFromProps, typeof d == "function" && (Us(e, t, d, o), c.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (t = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), t !== c.state && Mo.enqueueReplaceState(c, c.state, null), To(e, o, c, l), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function vr(e, t) {
      try {
        var o = "", l = t;
        do
          o += pe(l), l = l.return;
        while (l);
        var c = o;
      } catch (d) {
        c = `
Error generating stack: ` + d.message + `
` + d.stack;
      }
      return { value: e, source: t, stack: c, digest: null };
    }
    function qs(e, t, o) {
      return { value: e, source: null, stack: o ?? null, digest: t ?? null };
    }
    function Ws(e, t) {
      try {
        console.error(t.value);
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    var Nm = typeof WeakMap == "function" ? WeakMap : Map;
    function Pf(e, t, o) {
      o = Ht(-1, o), o.tag = 3, o.payload = { element: null };
      var l = t.value;
      return o.callback = function() {
        Vo || (Vo = !0, al = l), Ws(e, t);
      }, o;
    }
    function Ff(e, t, o) {
      o = Ht(-1, o), o.tag = 3;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var c = t.value;
        o.payload = function() {
          return l(c);
        }, o.callback = function() {
          Ws(e, t);
        };
      }
      var d = e.stateNode;
      return d !== null && typeof d.componentDidCatch == "function" && (o.callback = function() {
        Ws(e, t), typeof l != "function" && (vn === null ? vn = /* @__PURE__ */ new Set([this]) : vn.add(this));
        var v = t.stack;
        this.componentDidCatch(t.value, { componentStack: v !== null ? v : "" });
      }), o;
    }
    function Af(e, t, o) {
      var l = e.pingCache;
      if (l === null) {
        l = e.pingCache = new Nm();
        var c = /* @__PURE__ */ new Set();
        l.set(t, c);
      } else c = l.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(t, c));
      c.has(o) || (c.add(o), e = zm.bind(null, e, t, o), t.then(e, e));
    }
    function Lf(e) {
      do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return;
      } while (e !== null);
      return null;
    }
    function zf(e, t, o, l, c) {
      return e.mode & 1 ? (e.flags |= 65536, e.lanes = c, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (t = Ht(-1, 1), t.tag = 2, pn(o, t, 1))), o.lanes |= 1), e);
    }
    var Tm = V.ReactCurrentOwner, ct = !1;
    function it(e, t, o, l) {
      t.child = e === null ? of(t, null, o, l) : fr(t, e.child, o, l);
    }
    function Vf(e, t, o, l, c) {
      o = o.render;
      var d = t.ref;
      return pr(t, c), l = Fs(e, t, o, l, d, c), o = As(), e !== null && !ct ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~c, Gt(e, t, c)) : (Ce && o && _s(t), t.flags |= 1, it(e, t, l, c), t.child);
    }
    function Bf(e, t, o, l, c) {
      if (e === null) {
        var d = o.type;
        return typeof d == "function" && !pl(d) && d.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (t.tag = 15, t.type = d, Uf(e, t, d, l, c)) : (e = $o(o.type, null, l, t, t.mode, c), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (d = e.child, !(e.lanes & c)) {
        var v = d.memoizedProps;
        if (o = o.compare, o = o !== null ? o : ti, o(v, l) && e.ref === t.ref) return Gt(e, t, c);
      }
      return t.flags |= 1, e = _n(d, l), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Uf(e, t, o, l, c) {
      if (e !== null) {
        var d = e.memoizedProps;
        if (ti(d, l) && e.ref === t.ref) if (ct = !1, t.pendingProps = l = d, (e.lanes & c) !== 0) e.flags & 131072 && (ct = !0);
        else return t.lanes = e.lanes, Gt(e, t, c);
      }
      return $s(e, t, o, l, c);
    }
    function Qf(e, t, o) {
      var l = t.pendingProps, c = l.children, d = e !== null ? e.memoizedState : null;
      if (l.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Se(yr, gt), gt |= o;
      else {
        if (!(o & 1073741824)) return e = d !== null ? d.baseLanes | o : o, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Se(yr, gt), gt |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = d !== null ? d.baseLanes : o, Se(yr, gt), gt |= l;
      }
      else d !== null ? (l = d.baseLanes | o, t.memoizedState = null) : l = o, Se(yr, gt), gt |= l;
      return it(e, t, c, o), t.child;
    }
    function qf(e, t) {
      var o = t.ref;
      (e === null && o !== null || e !== null && e.ref !== o) && (t.flags |= 512, t.flags |= 2097152);
    }
    function $s(e, t, o, l, c) {
      var d = ut(o) ? jn : Ze.current;
      return d = sr(t, d), pr(t, c), o = Fs(e, t, o, l, d, c), l = As(), e !== null && !ct ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~c, Gt(e, t, c)) : (Ce && l && _s(t), t.flags |= 1, it(e, t, o, c), t.child);
    }
    function Wf(e, t, o, l, c) {
      if (ut(o)) {
        var d = !0;
        yo(t);
      } else d = !1;
      if (pr(t, c), t.stateNode === null) Po(e, t), Mf(t, o, l), Qs(t, o, l, c), l = !0;
      else if (e === null) {
        var v = t.stateNode, _ = t.memoizedProps;
        v.props = _;
        var E = v.context, j = o.contextType;
        typeof j == "object" && j !== null ? j = Et(j) : (j = ut(o) ? jn : Ze.current, j = sr(t, j));
        var L = o.getDerivedStateFromProps, z = typeof L == "function" || typeof v.getSnapshotBeforeUpdate == "function";
        z || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (_ !== l || E !== j) && Rf(t, v, l, j), dn = !1;
        var A = t.memoizedState;
        v.state = A, To(t, l, v, c), E = t.memoizedState, _ !== l || A !== E || lt.current || dn ? (typeof L == "function" && (Us(t, o, L, l), E = t.memoizedState), (_ = dn || jf(t, o, _, l, A, E, j)) ? (z || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()), typeof v.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof v.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = E), v.props = l, v.state = E, v.context = j, l = _) : (typeof v.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
      } else {
        v = t.stateNode, sf(e, t), _ = t.memoizedProps, j = t.type === t.elementType ? _ : xt(t.type, _), v.props = j, z = t.pendingProps, A = v.context, E = o.contextType, typeof E == "object" && E !== null ? E = Et(E) : (E = ut(o) ? jn : Ze.current, E = sr(t, E));
        var $ = o.getDerivedStateFromProps;
        (L = typeof $ == "function" || typeof v.getSnapshotBeforeUpdate == "function") || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (_ !== z || A !== E) && Rf(t, v, l, E), dn = !1, A = t.memoizedState, v.state = A, To(t, l, v, c);
        var Y = t.memoizedState;
        _ !== z || A !== Y || lt.current || dn ? (typeof $ == "function" && (Us(t, o, $, l), Y = t.memoizedState), (j = dn || jf(t, o, j, l, A, Y, E) || !1) ? (L || typeof v.UNSAFE_componentWillUpdate != "function" && typeof v.componentWillUpdate != "function" || (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(l, Y, E), typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(l, Y, E)), typeof v.componentDidUpdate == "function" && (t.flags |= 4), typeof v.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof v.componentDidUpdate != "function" || _ === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || _ === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = Y), v.props = l, v.state = Y, v.context = E, l = j) : (typeof v.componentDidUpdate != "function" || _ === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || _ === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), l = !1);
      }
      return Hs(e, t, o, l, d, c);
    }
    function Hs(e, t, o, l, c, d) {
      qf(e, t);
      var v = (t.flags & 128) !== 0;
      if (!l && !v) return c && Yc(t, o, !1), Gt(e, t, d);
      l = t.stateNode, Tm.current = t;
      var _ = v && typeof o.getDerivedStateFromError != "function" ? null : l.render();
      return t.flags |= 1, e !== null && v ? (t.child = fr(t, e.child, null, d), t.child = fr(t, null, _, d)) : it(e, t, _, d), t.memoizedState = l.state, c && Yc(t, o, !0), t.child;
    }
    function $f(e) {
      var t = e.stateNode;
      t.pendingContext ? Hc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Hc(e, t.context, !1), Is(e, t.containerInfo);
    }
    function Hf(e, t, o, l, c) {
      return cr(), ks(c), t.flags |= 256, it(e, t, o, l), t.child;
    }
    var Gs = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Ys(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function Gf(e, t, o) {
      var l = t.pendingProps, c = Ie.current, d = !1, v = (t.flags & 128) !== 0, _;
      if ((_ = v) || (_ = e !== null && e.memoizedState === null ? !1 : (c & 2) !== 0), _ ? (d = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (c |= 1), Se(Ie, c & 1), e === null)
        return Ss(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (v = l.children, e = l.fallback, d ? (l = t.mode, d = t.child, v = { mode: "hidden", children: v }, !(l & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = v) : d = Ho(v, l, 0, null), e = Un(e, l, o, null), d.return = t, e.return = t, d.sibling = e, t.child = d, t.child.memoizedState = Ys(o), t.memoizedState = Gs, e) : Ks(t, v));
      if (c = e.memoizedState, c !== null && (_ = c.dehydrated, _ !== null)) return Om(e, t, v, l, _, c, o);
      if (d) {
        d = l.fallback, v = t.mode, c = e.child, _ = c.sibling;
        var E = { mode: "hidden", children: l.children };
        return !(v & 1) && t.child !== c ? (l = t.child, l.childLanes = 0, l.pendingProps = E, t.deletions = null) : (l = _n(c, E), l.subtreeFlags = c.subtreeFlags & 14680064), _ !== null ? d = _n(_, d) : (d = Un(d, v, o, null), d.flags |= 2), d.return = t, l.return = t, l.sibling = d, t.child = l, l = d, d = t.child, v = e.child.memoizedState, v = v === null ? Ys(o) : { baseLanes: v.baseLanes | o, cachePool: null, transitions: v.transitions }, d.memoizedState = v, d.childLanes = e.childLanes & ~o, t.memoizedState = Gs, l;
      }
      return d = e.child, e = d.sibling, l = _n(d, { mode: "visible", children: l.children }), !(t.mode & 1) && (l.lanes = o), l.return = t, l.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = l, t.memoizedState = null, l;
    }
    function Ks(e, t) {
      return t = Ho({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function Ro(e, t, o, l) {
      return l !== null && ks(l), fr(t, e.child, null, o), e = Ks(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function Om(e, t, o, l, c, d, v) {
      if (o)
        return t.flags & 256 ? (t.flags &= -257, l = qs(Error(r(422))), Ro(e, t, v, l)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (d = l.fallback, c = t.mode, l = Ho({ mode: "visible", children: l.children }, c, 0, null), d = Un(d, c, v, null), d.flags |= 2, l.return = t, d.return = t, l.sibling = d, t.child = l, t.mode & 1 && fr(t, e.child, null, v), t.child.memoizedState = Ys(v), t.memoizedState = Gs, d);
      if (!(t.mode & 1)) return Ro(e, t, v, null);
      if (c.data === "$!") {
        if (l = c.nextSibling && c.nextSibling.dataset, l) var _ = l.dgst;
        return l = _, d = Error(r(419)), l = qs(d, l, void 0), Ro(e, t, v, l);
      }
      if (_ = (v & e.childLanes) !== 0, ct || _) {
        if (l = qe, l !== null) {
          switch (v & -v) {
            case 4:
              c = 2;
              break;
            case 16:
              c = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              c = 32;
              break;
            case 536870912:
              c = 268435456;
              break;
            default:
              c = 0;
          }
          c = c & (l.suspendedLanes | v) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, $t(e, c), Dt(l, e, c, -1));
        }
        return dl(), l = qs(Error(r(421))), Ro(e, t, v, l);
      }
      return c.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Vm.bind(null, e), c._reactRetry = t, null) : (e = d.treeContext, yt = ln(c.nextSibling), mt = t, Ce = !0, Ot = null, e !== null && (_t[wt++] = qt, _t[wt++] = Wt, _t[wt++] = Mn, qt = e.id, Wt = e.overflow, Mn = t), t = Ks(t, l.children), t.flags |= 4096, t);
    }
    function Yf(e, t, o) {
      e.lanes |= t;
      var l = e.alternate;
      l !== null && (l.lanes |= t), Os(e.return, t, o);
    }
    function Xs(e, t, o, l, c) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: l, tail: o, tailMode: c } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = l, d.tail = o, d.tailMode = c);
    }
    function Kf(e, t, o) {
      var l = t.pendingProps, c = l.revealOrder, d = l.tail;
      if (it(e, t, l.children, o), l = Ie.current, l & 2) l = l & 1 | 2, t.flags |= 128;
      else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Yf(e, o, t);
          else if (e.tag === 19) Yf(e, o, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
        l &= 1;
      }
      if (Se(Ie, l), !(t.mode & 1)) t.memoizedState = null;
      else switch (c) {
        case "forwards":
          for (o = t.child, c = null; o !== null; ) e = o.alternate, e !== null && Oo(e) === null && (c = o), o = o.sibling;
          o = c, o === null ? (c = t.child, t.child = null) : (c = o.sibling, o.sibling = null), Xs(t, !1, c, o, d);
          break;
        case "backwards":
          for (o = null, c = t.child, t.child = null; c !== null; ) {
            if (e = c.alternate, e !== null && Oo(e) === null) {
              t.child = c;
              break;
            }
            e = c.sibling, c.sibling = o, o = c, c = e;
          }
          Xs(t, !0, o, null, d);
          break;
        case "together":
          Xs(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Po(e, t) {
      !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
    }
    function Gt(e, t, o) {
      if (e !== null && (t.dependencies = e.dependencies), Ln |= t.lanes, !(o & t.childLanes)) return null;
      if (e !== null && t.child !== e.child) throw Error(r(153));
      if (t.child !== null) {
        for (e = t.child, o = _n(e, e.pendingProps), t.child = o, o.return = t; e.sibling !== null; ) e = e.sibling, o = o.sibling = _n(e, e.pendingProps), o.return = t;
        o.sibling = null;
      }
      return t.child;
    }
    function xm(e, t, o) {
      switch (t.tag) {
        case 3:
          $f(t), cr();
          break;
        case 5:
          cf(t);
          break;
        case 1:
          ut(t.type) && yo(t);
          break;
        case 4:
          Is(t, t.stateNode.containerInfo);
          break;
        case 10:
          var l = t.type._context, c = t.memoizedProps.value;
          Se(ko, l._currentValue), l._currentValue = c;
          break;
        case 13:
          if (l = t.memoizedState, l !== null)
            return l.dehydrated !== null ? (Se(Ie, Ie.current & 1), t.flags |= 128, null) : o & t.child.childLanes ? Gf(e, t, o) : (Se(Ie, Ie.current & 1), e = Gt(e, t, o), e !== null ? e.sibling : null);
          Se(Ie, Ie.current & 1);
          break;
        case 19:
          if (l = (o & t.childLanes) !== 0, e.flags & 128) {
            if (l) return Kf(e, t, o);
            t.flags |= 128;
          }
          if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Se(Ie, Ie.current), l) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, Qf(e, t, o);
      }
      return Gt(e, t, o);
    }
    var Xf, Js, Jf, Zf;
    Xf = function(e, t) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === 5 || o.tag === 6) e.appendChild(o.stateNode);
        else if (o.tag !== 4 && o.child !== null) {
          o.child.return = o, o = o.child;
          continue;
        }
        if (o === t) break;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t) return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, Js = function() {
    }, Jf = function(e, t, o, l) {
      var c = e.memoizedProps;
      if (c !== l) {
        e = t.stateNode, Fn(At.current);
        var d = null;
        switch (o) {
          case "input":
            c = Oa(e, c), l = Oa(e, l), d = [];
            break;
          case "select":
            c = H({}, c, { value: void 0 }), l = H({}, l, { value: void 0 }), d = [];
            break;
          case "textarea":
            c = Ia(e, c), l = Ia(e, l), d = [];
            break;
          default:
            typeof c.onClick != "function" && typeof l.onClick == "function" && (e.onclick = ho);
        }
        ja(o, l);
        var v;
        o = null;
        for (j in c) if (!l.hasOwnProperty(j) && c.hasOwnProperty(j) && c[j] != null) if (j === "style") {
          var _ = c[j];
          for (v in _) _.hasOwnProperty(v) && (o || (o = {}), o[v] = "");
        } else j !== "dangerouslySetInnerHTML" && j !== "children" && j !== "suppressContentEditableWarning" && j !== "suppressHydrationWarning" && j !== "autoFocus" && (s.hasOwnProperty(j) ? d || (d = []) : (d = d || []).push(j, null));
        for (j in l) {
          var E = l[j];
          if (_ = c != null ? c[j] : void 0, l.hasOwnProperty(j) && E !== _ && (E != null || _ != null)) if (j === "style") if (_) {
            for (v in _) !_.hasOwnProperty(v) || E && E.hasOwnProperty(v) || (o || (o = {}), o[v] = "");
            for (v in E) E.hasOwnProperty(v) && _[v] !== E[v] && (o || (o = {}), o[v] = E[v]);
          } else o || (d || (d = []), d.push(
            j,
            o
          )), o = E;
          else j === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, _ = _ ? _.__html : void 0, E != null && _ !== E && (d = d || []).push(j, E)) : j === "children" ? typeof E != "string" && typeof E != "number" || (d = d || []).push(j, "" + E) : j !== "suppressContentEditableWarning" && j !== "suppressHydrationWarning" && (s.hasOwnProperty(j) ? (E != null && j === "onScroll" && Ne("scroll", e), d || _ === E || (d = [])) : (d = d || []).push(j, E));
        }
        o && (d = d || []).push("style", o);
        var j = d;
        (t.updateQueue = j) && (t.flags |= 4);
      }
    }, Zf = function(e, t, o, l) {
      o !== l && (t.flags |= 4);
    };
    function mi(e, t) {
      if (!Ce) switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var o = null; t !== null; ) t.alternate !== null && (o = t), t = t.sibling;
          o === null ? e.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = e.tail;
          for (var l = null; o !== null; ) o.alternate !== null && (l = o), o = o.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
    }
    function tt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, o = 0, l = 0;
      if (t) for (var c = e.child; c !== null; ) o |= c.lanes | c.childLanes, l |= c.subtreeFlags & 14680064, l |= c.flags & 14680064, c.return = e, c = c.sibling;
      else for (c = e.child; c !== null; ) o |= c.lanes | c.childLanes, l |= c.subtreeFlags, l |= c.flags, c.return = e, c = c.sibling;
      return e.subtreeFlags |= l, e.childLanes = o, t;
    }
    function Cm(e, t, o) {
      var l = t.pendingProps;
      switch (ws(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return tt(t), null;
        case 1:
          return ut(t.type) && mo(), tt(t), null;
        case 3:
          return l = t.stateNode, hr(), Te(lt), Te(Ze), Ms(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Eo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ot !== null && (ul(Ot), Ot = null))), Js(e, t), tt(t), null;
        case 5:
          Ds(t);
          var c = Fn(fi.current);
          if (o = t.type, e !== null && t.stateNode != null) Jf(e, t, o, l, c), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
          else {
            if (!l) {
              if (t.stateNode === null) throw Error(r(166));
              return tt(t), null;
            }
            if (e = Fn(At.current), Eo(t)) {
              l = t.stateNode, o = t.type;
              var d = t.memoizedProps;
              switch (l[Ft] = t, l[ai] = d, e = (t.mode & 1) !== 0, o) {
                case "dialog":
                  Ne("cancel", l), Ne("close", l);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ne("load", l);
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ri.length; c++) Ne(ri[c], l);
                  break;
                case "source":
                  Ne("error", l);
                  break;
                case "img":
                case "image":
                case "link":
                  Ne(
                    "error",
                    l
                  ), Ne("load", l);
                  break;
                case "details":
                  Ne("toggle", l);
                  break;
                case "input":
                  ju(l, d), Ne("invalid", l);
                  break;
                case "select":
                  l._wrapperState = { wasMultiple: !!d.multiple }, Ne("invalid", l);
                  break;
                case "textarea":
                  Pu(l, d), Ne("invalid", l);
              }
              ja(o, d), c = null;
              for (var v in d) if (d.hasOwnProperty(v)) {
                var _ = d[v];
                v === "children" ? typeof _ == "string" ? l.textContent !== _ && (d.suppressHydrationWarning !== !0 && po(l.textContent, _, e), c = ["children", _]) : typeof _ == "number" && l.textContent !== "" + _ && (d.suppressHydrationWarning !== !0 && po(
                  l.textContent,
                  _,
                  e
                ), c = ["children", "" + _]) : s.hasOwnProperty(v) && _ != null && v === "onScroll" && Ne("scroll", l);
              }
              switch (o) {
                case "input":
                  Qi(l), Ru(l, d, !0);
                  break;
                case "textarea":
                  Qi(l), Au(l);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof d.onClick == "function" && (l.onclick = ho);
              }
              l = c, t.updateQueue = l, l !== null && (t.flags |= 4);
            } else {
              v = c.nodeType === 9 ? c : c.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Lu(o)), e === "http://www.w3.org/1999/xhtml" ? o === "script" ? (e = v.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof l.is == "string" ? e = v.createElement(o, { is: l.is }) : (e = v.createElement(o), o === "select" && (v = e, l.multiple ? v.multiple = !0 : l.size && (v.size = l.size))) : e = v.createElementNS(e, o), e[Ft] = t, e[ai] = l, Xf(e, t, !1, !1), t.stateNode = e;
              e: {
                switch (v = Ma(o, l), o) {
                  case "dialog":
                    Ne("cancel", e), Ne("close", e), c = l;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Ne("load", e), c = l;
                    break;
                  case "video":
                  case "audio":
                    for (c = 0; c < ri.length; c++) Ne(ri[c], e);
                    c = l;
                    break;
                  case "source":
                    Ne("error", e), c = l;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Ne(
                      "error",
                      e
                    ), Ne("load", e), c = l;
                    break;
                  case "details":
                    Ne("toggle", e), c = l;
                    break;
                  case "input":
                    ju(e, l), c = Oa(e, l), Ne("invalid", e);
                    break;
                  case "option":
                    c = l;
                    break;
                  case "select":
                    e._wrapperState = { wasMultiple: !!l.multiple }, c = H({}, l, { value: void 0 }), Ne("invalid", e);
                    break;
                  case "textarea":
                    Pu(e, l), c = Ia(e, l), Ne("invalid", e);
                    break;
                  default:
                    c = l;
                }
                ja(o, c), _ = c;
                for (d in _) if (_.hasOwnProperty(d)) {
                  var E = _[d];
                  d === "style" ? Bu(e, E) : d === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, E != null && zu(e, E)) : d === "children" ? typeof E == "string" ? (o !== "textarea" || E !== "") && Lr(e, E) : typeof E == "number" && Lr(e, "" + E) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (s.hasOwnProperty(d) ? E != null && d === "onScroll" && Ne("scroll", e) : E != null && M(e, d, E, v));
                }
                switch (o) {
                  case "input":
                    Qi(e), Ru(e, l, !1);
                    break;
                  case "textarea":
                    Qi(e), Au(e);
                    break;
                  case "option":
                    l.value != null && e.setAttribute("value", "" + ge(l.value));
                    break;
                  case "select":
                    e.multiple = !!l.multiple, d = l.value, d != null ? Yn(e, !!l.multiple, d, !1) : l.defaultValue != null && Yn(
                      e,
                      !!l.multiple,
                      l.defaultValue,
                      !0
                    );
                    break;
                  default:
                    typeof c.onClick == "function" && (e.onclick = ho);
                }
                switch (o) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l = !!l.autoFocus;
                    break e;
                  case "img":
                    l = !0;
                    break e;
                  default:
                    l = !1;
                }
              }
              l && (t.flags |= 4);
            }
            t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
          }
          return tt(t), null;
        case 6:
          if (e && t.stateNode != null) Zf(e, t, e.memoizedProps, l);
          else {
            if (typeof l != "string" && t.stateNode === null) throw Error(r(166));
            if (o = Fn(fi.current), Fn(At.current), Eo(t)) {
              if (l = t.stateNode, o = t.memoizedProps, l[Ft] = t, (d = l.nodeValue !== o) && (e = mt, e !== null)) switch (e.tag) {
                case 3:
                  po(l.nodeValue, o, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && po(l.nodeValue, o, (e.mode & 1) !== 0);
              }
              d && (t.flags |= 4);
            } else l = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(l), l[Ft] = t, t.stateNode = l;
          }
          return tt(t), null;
        case 13:
          if (Te(Ie), l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Ce && yt !== null && t.mode & 1 && !(t.flags & 128)) tf(), cr(), t.flags |= 98560, d = !1;
            else if (d = Eo(t), l !== null && l.dehydrated !== null) {
              if (e === null) {
                if (!d) throw Error(r(318));
                if (d = t.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(r(317));
                d[Ft] = t;
              } else cr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
              tt(t), d = !1;
            } else Ot !== null && (ul(Ot), Ot = null), d = !0;
            if (!d) return t.flags & 65536 ? t : null;
          }
          return t.flags & 128 ? (t.lanes = o, t) : (l = l !== null, l !== (e !== null && e.memoizedState !== null) && l && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ie.current & 1 ? Be === 0 && (Be = 3) : dl())), t.updateQueue !== null && (t.flags |= 4), tt(t), null);
        case 4:
          return hr(), Js(e, t), e === null && ii(t.stateNode.containerInfo), tt(t), null;
        case 10:
          return Ts(t.type._context), tt(t), null;
        case 17:
          return ut(t.type) && mo(), tt(t), null;
        case 19:
          if (Te(Ie), d = t.memoizedState, d === null) return tt(t), null;
          if (l = (t.flags & 128) !== 0, v = d.rendering, v === null) if (l) mi(d, !1);
          else {
            if (Be !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
              if (v = Oo(e), v !== null) {
                for (t.flags |= 128, mi(d, !1), l = v.updateQueue, l !== null && (t.updateQueue = l, t.flags |= 4), t.subtreeFlags = 0, l = o, o = t.child; o !== null; ) d = o, e = l, d.flags &= 14680066, v = d.alternate, v === null ? (d.childLanes = 0, d.lanes = e, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = v.childLanes, d.lanes = v.lanes, d.child = v.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = v.memoizedProps, d.memoizedState = v.memoizedState, d.updateQueue = v.updateQueue, d.type = v.type, e = v.dependencies, d.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), o = o.sibling;
                return Se(Ie, Ie.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
            d.tail !== null && Pe() > gr && (t.flags |= 128, l = !0, mi(d, !1), t.lanes = 4194304);
          }
          else {
            if (!l) if (e = Oo(v), e !== null) {
              if (t.flags |= 128, l = !0, o = e.updateQueue, o !== null && (t.updateQueue = o, t.flags |= 4), mi(d, !0), d.tail === null && d.tailMode === "hidden" && !v.alternate && !Ce) return tt(t), null;
            } else 2 * Pe() - d.renderingStartTime > gr && o !== 1073741824 && (t.flags |= 128, l = !0, mi(d, !1), t.lanes = 4194304);
            d.isBackwards ? (v.sibling = t.child, t.child = v) : (o = d.last, o !== null ? o.sibling = v : t.child = v, d.last = v);
          }
          return d.tail !== null ? (t = d.tail, d.rendering = t, d.tail = t.sibling, d.renderingStartTime = Pe(), t.sibling = null, o = Ie.current, Se(Ie, l ? o & 1 | 2 : o & 1), t) : (tt(t), null);
        case 22:
        case 23:
          return fl(), l = t.memoizedState !== null, e !== null && e.memoizedState !== null !== l && (t.flags |= 8192), l && t.mode & 1 ? gt & 1073741824 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(r(156, t.tag));
    }
    function Im(e, t) {
      switch (ws(t), t.tag) {
        case 1:
          return ut(t.type) && mo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
          return hr(), Te(lt), Te(Ze), Ms(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
          return Ds(t), null;
        case 13:
          if (Te(Ie), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null) throw Error(r(340));
            cr();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
          return Te(Ie), null;
        case 4:
          return hr(), null;
        case 10:
          return Ts(t.type._context), null;
        case 22:
        case 23:
          return fl(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Fo = !1, nt = !1, Dm = typeof WeakSet == "function" ? WeakSet : Set, G = null;
    function mr(e, t) {
      var o = e.ref;
      if (o !== null) if (typeof o == "function") try {
        o(null);
      } catch (l) {
        je(e, t, l);
      }
      else o.current = null;
    }
    function Zs(e, t, o) {
      try {
        o();
      } catch (l) {
        je(e, t, l);
      }
    }
    var ed = !1;
    function jm(e, t) {
      if (fs = to, e = Dc(), rs(e)) {
        if ("selectionStart" in e) var o = { start: e.selectionStart, end: e.selectionEnd };
        else e: {
          o = (o = e.ownerDocument) && o.defaultView || window;
          var l = o.getSelection && o.getSelection();
          if (l && l.rangeCount !== 0) {
            o = l.anchorNode;
            var c = l.anchorOffset, d = l.focusNode;
            l = l.focusOffset;
            try {
              o.nodeType, d.nodeType;
            } catch {
              o = null;
              break e;
            }
            var v = 0, _ = -1, E = -1, j = 0, L = 0, z = e, A = null;
            t: for (; ; ) {
              for (var $; z !== o || c !== 0 && z.nodeType !== 3 || (_ = v + c), z !== d || l !== 0 && z.nodeType !== 3 || (E = v + l), z.nodeType === 3 && (v += z.nodeValue.length), ($ = z.firstChild) !== null; )
                A = z, z = $;
              for (; ; ) {
                if (z === e) break t;
                if (A === o && ++j === c && (_ = v), A === d && ++L === l && (E = v), ($ = z.nextSibling) !== null) break;
                z = A, A = z.parentNode;
              }
              z = $;
            }
            o = _ === -1 || E === -1 ? null : { start: _, end: E };
          } else o = null;
        }
        o = o || { start: 0, end: 0 };
      } else o = null;
      for (ds = { focusedElem: e, selectionRange: o }, to = !1, G = t; G !== null; ) if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e;
      else for (; G !== null; ) {
        t = G;
        try {
          var Y = t.alternate;
          if (t.flags & 1024) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (Y !== null) {
                var J = Y.memoizedProps, Fe = Y.memoizedState, x = t.stateNode, k = x.getSnapshotBeforeUpdate(t.elementType === t.type ? J : xt(t.type, J), Fe);
                x.__reactInternalSnapshotBeforeUpdate = k;
              }
              break;
            case 3:
              var D = t.stateNode.containerInfo;
              D.nodeType === 1 ? D.textContent = "" : D.nodeType === 9 && D.documentElement && D.removeChild(D.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(r(163));
          }
        } catch (U) {
          je(t, t.return, U);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, G = e;
          break;
        }
        G = t.return;
      }
      return Y = ed, ed = !1, Y;
    }
    function yi(e, t, o) {
      var l = t.updateQueue;
      if (l = l !== null ? l.lastEffect : null, l !== null) {
        var c = l = l.next;
        do {
          if ((c.tag & e) === e) {
            var d = c.destroy;
            c.destroy = void 0, d !== void 0 && Zs(t, o, d);
          }
          c = c.next;
        } while (c !== l);
      }
    }
    function Ao(e, t) {
      if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var o = t = t.next;
        do {
          if ((o.tag & e) === e) {
            var l = o.create;
            o.destroy = l();
          }
          o = o.next;
        } while (o !== t);
      }
    }
    function el(e) {
      var t = e.ref;
      if (t !== null) {
        var o = e.stateNode;
        switch (e.tag) {
          case 5:
            e = o;
            break;
          default:
            e = o;
        }
        typeof t == "function" ? t(e) : t.current = e;
      }
    }
    function td(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, td(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ft], delete t[ai], delete t[ms], delete t[hm], delete t[vm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function nd(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function rd(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || nd(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function tl(e, t, o) {
      var l = e.tag;
      if (l === 5 || l === 6) e = e.stateNode, t ? o.nodeType === 8 ? o.parentNode.insertBefore(e, t) : o.insertBefore(e, t) : (o.nodeType === 8 ? (t = o.parentNode, t.insertBefore(e, o)) : (t = o, t.appendChild(e)), o = o._reactRootContainer, o != null || t.onclick !== null || (t.onclick = ho));
      else if (l !== 4 && (e = e.child, e !== null)) for (tl(e, t, o), e = e.sibling; e !== null; ) tl(e, t, o), e = e.sibling;
    }
    function nl(e, t, o) {
      var l = e.tag;
      if (l === 5 || l === 6) e = e.stateNode, t ? o.insertBefore(e, t) : o.appendChild(e);
      else if (l !== 4 && (e = e.child, e !== null)) for (nl(e, t, o), e = e.sibling; e !== null; ) nl(e, t, o), e = e.sibling;
    }
    var Ke = null, Ct = !1;
    function hn(e, t, o) {
      for (o = o.child; o !== null; ) id(e, t, o), o = o.sibling;
    }
    function id(e, t, o) {
      if (Pt && typeof Pt.onCommitFiberUnmount == "function") try {
        Pt.onCommitFiberUnmount(Yi, o);
      } catch {
      }
      switch (o.tag) {
        case 5:
          nt || mr(o, t);
        case 6:
          var l = Ke, c = Ct;
          Ke = null, hn(e, t, o), Ke = l, Ct = c, Ke !== null && (Ct ? (e = Ke, o = o.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(o) : e.removeChild(o)) : Ke.removeChild(o.stateNode));
          break;
        case 18:
          Ke !== null && (Ct ? (e = Ke, o = o.stateNode, e.nodeType === 8 ? vs(e.parentNode, o) : e.nodeType === 1 && vs(e, o), Yr(e)) : vs(Ke, o.stateNode));
          break;
        case 4:
          l = Ke, c = Ct, Ke = o.stateNode.containerInfo, Ct = !0, hn(e, t, o), Ke = l, Ct = c;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!nt && (l = o.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
            c = l = l.next;
            do {
              var d = c, v = d.destroy;
              d = d.tag, v !== void 0 && (d & 2 || d & 4) && Zs(o, t, v), c = c.next;
            } while (c !== l);
          }
          hn(e, t, o);
          break;
        case 1:
          if (!nt && (mr(o, t), l = o.stateNode, typeof l.componentWillUnmount == "function")) try {
            l.props = o.memoizedProps, l.state = o.memoizedState, l.componentWillUnmount();
          } catch (_) {
            je(o, t, _);
          }
          hn(e, t, o);
          break;
        case 21:
          hn(e, t, o);
          break;
        case 22:
          o.mode & 1 ? (nt = (l = nt) || o.memoizedState !== null, hn(e, t, o), nt = l) : hn(e, t, o);
          break;
        default:
          hn(e, t, o);
      }
    }
    function od(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var o = e.stateNode;
        o === null && (o = e.stateNode = new Dm()), t.forEach(function(l) {
          var c = Bm.bind(null, e, l);
          o.has(l) || (o.add(l), l.then(c, c));
        });
      }
    }
    function It(e, t) {
      var o = t.deletions;
      if (o !== null) for (var l = 0; l < o.length; l++) {
        var c = o[l];
        try {
          var d = e, v = t, _ = v;
          e: for (; _ !== null; ) {
            switch (_.tag) {
              case 5:
                Ke = _.stateNode, Ct = !1;
                break e;
              case 3:
                Ke = _.stateNode.containerInfo, Ct = !0;
                break e;
              case 4:
                Ke = _.stateNode.containerInfo, Ct = !0;
                break e;
            }
            _ = _.return;
          }
          if (Ke === null) throw Error(r(160));
          id(d, v, c), Ke = null, Ct = !1;
          var E = c.alternate;
          E !== null && (E.return = null), c.return = null;
        } catch (j) {
          je(c, t, j);
        }
      }
      if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ad(t, e), t = t.sibling;
    }
    function ad(e, t) {
      var o = e.alternate, l = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (It(t, e), zt(e), l & 4) {
            try {
              yi(3, e, e.return), Ao(3, e);
            } catch (J) {
              je(e, e.return, J);
            }
            try {
              yi(5, e, e.return);
            } catch (J) {
              je(e, e.return, J);
            }
          }
          break;
        case 1:
          It(t, e), zt(e), l & 512 && o !== null && mr(o, o.return);
          break;
        case 5:
          if (It(t, e), zt(e), l & 512 && o !== null && mr(o, o.return), e.flags & 32) {
            var c = e.stateNode;
            try {
              Lr(c, "");
            } catch (J) {
              je(e, e.return, J);
            }
          }
          if (l & 4 && (c = e.stateNode, c != null)) {
            var d = e.memoizedProps, v = o !== null ? o.memoizedProps : d, _ = e.type, E = e.updateQueue;
            if (e.updateQueue = null, E !== null) try {
              _ === "input" && d.type === "radio" && d.name != null && Mu(c, d), Ma(_, v);
              var j = Ma(_, d);
              for (v = 0; v < E.length; v += 2) {
                var L = E[v], z = E[v + 1];
                L === "style" ? Bu(c, z) : L === "dangerouslySetInnerHTML" ? zu(c, z) : L === "children" ? Lr(c, z) : M(c, L, z, j);
              }
              switch (_) {
                case "input":
                  xa(c, d);
                  break;
                case "textarea":
                  Fu(c, d);
                  break;
                case "select":
                  var A = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var $ = d.value;
                  $ != null ? Yn(c, !!d.multiple, $, !1) : A !== !!d.multiple && (d.defaultValue != null ? Yn(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : Yn(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[ai] = d;
            } catch (J) {
              je(e, e.return, J);
            }
          }
          break;
        case 6:
          if (It(t, e), zt(e), l & 4) {
            if (e.stateNode === null) throw Error(r(162));
            c = e.stateNode, d = e.memoizedProps;
            try {
              c.nodeValue = d;
            } catch (J) {
              je(e, e.return, J);
            }
          }
          break;
        case 3:
          if (It(t, e), zt(e), l & 4 && o !== null && o.memoizedState.isDehydrated) try {
            Yr(t.containerInfo);
          } catch (J) {
            je(e, e.return, J);
          }
          break;
        case 4:
          It(t, e), zt(e);
          break;
        case 13:
          It(t, e), zt(e), c = e.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (ol = Pe())), l & 4 && od(e);
          break;
        case 22:
          if (L = o !== null && o.memoizedState !== null, e.mode & 1 ? (nt = (j = nt) || L, It(t, e), nt = j) : It(t, e), zt(e), l & 8192) {
            if (j = e.memoizedState !== null, (e.stateNode.isHidden = j) && !L && e.mode & 1) for (G = e, L = e.child; L !== null; ) {
              for (z = G = L; G !== null; ) {
                switch (A = G, $ = A.child, A.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    yi(4, A, A.return);
                    break;
                  case 1:
                    mr(A, A.return);
                    var Y = A.stateNode;
                    if (typeof Y.componentWillUnmount == "function") {
                      l = A, o = A.return;
                      try {
                        t = l, Y.props = t.memoizedProps, Y.state = t.memoizedState, Y.componentWillUnmount();
                      } catch (J) {
                        je(l, o, J);
                      }
                    }
                    break;
                  case 5:
                    mr(A, A.return);
                    break;
                  case 22:
                    if (A.memoizedState !== null) {
                      ud(z);
                      continue;
                    }
                }
                $ !== null ? ($.return = A, G = $) : ud(z);
              }
              L = L.sibling;
            }
            e: for (L = null, z = e; ; ) {
              if (z.tag === 5) {
                if (L === null) {
                  L = z;
                  try {
                    c = z.stateNode, j ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (_ = z.stateNode, E = z.memoizedProps.style, v = E != null && E.hasOwnProperty("display") ? E.display : null, _.style.display = Vu("display", v));
                  } catch (J) {
                    je(e, e.return, J);
                  }
                }
              } else if (z.tag === 6) {
                if (L === null) try {
                  z.stateNode.nodeValue = j ? "" : z.memoizedProps;
                } catch (J) {
                  je(e, e.return, J);
                }
              } else if ((z.tag !== 22 && z.tag !== 23 || z.memoizedState === null || z === e) && z.child !== null) {
                z.child.return = z, z = z.child;
                continue;
              }
              if (z === e) break e;
              for (; z.sibling === null; ) {
                if (z.return === null || z.return === e) break e;
                L === z && (L = null), z = z.return;
              }
              L === z && (L = null), z.sibling.return = z.return, z = z.sibling;
            }
          }
          break;
        case 19:
          It(t, e), zt(e), l & 4 && od(e);
          break;
        case 21:
          break;
        default:
          It(
            t,
            e
          ), zt(e);
      }
    }
    function zt(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          e: {
            for (var o = e.return; o !== null; ) {
              if (nd(o)) {
                var l = o;
                break e;
              }
              o = o.return;
            }
            throw Error(r(160));
          }
          switch (l.tag) {
            case 5:
              var c = l.stateNode;
              l.flags & 32 && (Lr(c, ""), l.flags &= -33);
              var d = rd(e);
              nl(e, d, c);
              break;
            case 3:
            case 4:
              var v = l.stateNode.containerInfo, _ = rd(e);
              tl(e, _, v);
              break;
            default:
              throw Error(r(161));
          }
        } catch (E) {
          je(e, e.return, E);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Mm(e, t, o) {
      G = e, sd(e);
    }
    function sd(e, t, o) {
      for (var l = (e.mode & 1) !== 0; G !== null; ) {
        var c = G, d = c.child;
        if (c.tag === 22 && l) {
          var v = c.memoizedState !== null || Fo;
          if (!v) {
            var _ = c.alternate, E = _ !== null && _.memoizedState !== null || nt;
            _ = Fo;
            var j = nt;
            if (Fo = v, (nt = E) && !j) for (G = c; G !== null; ) v = G, E = v.child, v.tag === 22 && v.memoizedState !== null ? cd(c) : E !== null ? (E.return = v, G = E) : cd(c);
            for (; d !== null; ) G = d, sd(d), d = d.sibling;
            G = c, Fo = _, nt = j;
          }
          ld(e);
        } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, G = d) : ld(e);
      }
    }
    function ld(e) {
      for (; G !== null; ) {
        var t = G;
        if (t.flags & 8772) {
          var o = t.alternate;
          try {
            if (t.flags & 8772) switch (t.tag) {
              case 0:
              case 11:
              case 15:
                nt || Ao(5, t);
                break;
              case 1:
                var l = t.stateNode;
                if (t.flags & 4 && !nt) if (o === null) l.componentDidMount();
                else {
                  var c = t.elementType === t.type ? o.memoizedProps : xt(t.type, o.memoizedProps);
                  l.componentDidUpdate(c, o.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
                }
                var d = t.updateQueue;
                d !== null && uf(t, d, l);
                break;
              case 3:
                var v = t.updateQueue;
                if (v !== null) {
                  if (o = null, t.child !== null) switch (t.child.tag) {
                    case 5:
                      o = t.child.stateNode;
                      break;
                    case 1:
                      o = t.child.stateNode;
                  }
                  uf(t, v, o);
                }
                break;
              case 5:
                var _ = t.stateNode;
                if (o === null && t.flags & 4) {
                  o = _;
                  var E = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      E.autoFocus && o.focus();
                      break;
                    case "img":
                      E.src && (o.src = E.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var j = t.alternate;
                  if (j !== null) {
                    var L = j.memoizedState;
                    if (L !== null) {
                      var z = L.dehydrated;
                      z !== null && Yr(z);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(r(163));
            }
            nt || t.flags & 512 && el(t);
          } catch (A) {
            je(t, t.return, A);
          }
        }
        if (t === e) {
          G = null;
          break;
        }
        if (o = t.sibling, o !== null) {
          o.return = t.return, G = o;
          break;
        }
        G = t.return;
      }
    }
    function ud(e) {
      for (; G !== null; ) {
        var t = G;
        if (t === e) {
          G = null;
          break;
        }
        var o = t.sibling;
        if (o !== null) {
          o.return = t.return, G = o;
          break;
        }
        G = t.return;
      }
    }
    function cd(e) {
      for (; G !== null; ) {
        var t = G;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var o = t.return;
              try {
                Ao(4, t);
              } catch (E) {
                je(t, o, E);
              }
              break;
            case 1:
              var l = t.stateNode;
              if (typeof l.componentDidMount == "function") {
                var c = t.return;
                try {
                  l.componentDidMount();
                } catch (E) {
                  je(t, c, E);
                }
              }
              var d = t.return;
              try {
                el(t);
              } catch (E) {
                je(t, d, E);
              }
              break;
            case 5:
              var v = t.return;
              try {
                el(t);
              } catch (E) {
                je(t, v, E);
              }
          }
        } catch (E) {
          je(t, t.return, E);
        }
        if (t === e) {
          G = null;
          break;
        }
        var _ = t.sibling;
        if (_ !== null) {
          _.return = t.return, G = _;
          break;
        }
        G = t.return;
      }
    }
    var Rm = Math.ceil, Lo = V.ReactCurrentDispatcher, rl = V.ReactCurrentOwner, kt = V.ReactCurrentBatchConfig, de = 0, qe = null, Le = null, Xe = 0, gt = 0, yr = un(0), Be = 0, gi = null, Ln = 0, zo = 0, il = 0, _i = null, ft = null, ol = 0, gr = 1 / 0, Yt = null, Vo = !1, al = null, vn = null, Bo = !1, mn = null, Uo = 0, wi = 0, sl = null, Qo = -1, qo = 0;
    function ot() {
      return de & 6 ? Pe() : Qo !== -1 ? Qo : Qo = Pe();
    }
    function yn(e) {
      return e.mode & 1 ? de & 2 && Xe !== 0 ? Xe & -Xe : ym.transition !== null ? (qo === 0 && (qo = nc()), qo) : (e = _e, e !== 0 || (e = window.event, e = e === void 0 ? 16 : fc(e.type)), e) : 1;
    }
    function Dt(e, t, o, l) {
      if (50 < wi) throw wi = 0, sl = null, Error(r(185));
      qr(e, o, l), (!(de & 2) || e !== qe) && (e === qe && (!(de & 2) && (zo |= o), Be === 4 && gn(e, Xe)), dt(e, l), o === 1 && de === 0 && !(t.mode & 1) && (gr = Pe() + 500, go && fn()));
    }
    function dt(e, t) {
      var o = e.callbackNode;
      yv(e, t);
      var l = Ji(e, e === qe ? Xe : 0);
      if (l === 0) o !== null && Zu(o), e.callbackNode = null, e.callbackPriority = 0;
      else if (t = l & -l, e.callbackPriority !== t) {
        if (o != null && Zu(o), t === 1) e.tag === 0 ? mm(dd.bind(null, e)) : Kc(dd.bind(null, e)), dm(function() {
          !(de & 6) && fn();
        }), o = null;
        else {
          switch (rc(l)) {
            case 1:
              o = Va;
              break;
            case 4:
              o = ec;
              break;
            case 16:
              o = Gi;
              break;
            case 536870912:
              o = tc;
              break;
            default:
              o = Gi;
          }
          o = wd(o, fd.bind(null, e));
        }
        e.callbackPriority = t, e.callbackNode = o;
      }
    }
    function fd(e, t) {
      if (Qo = -1, qo = 0, de & 6) throw Error(r(327));
      var o = e.callbackNode;
      if (_r() && e.callbackNode !== o) return null;
      var l = Ji(e, e === qe ? Xe : 0);
      if (l === 0) return null;
      if (l & 30 || l & e.expiredLanes || t) t = Wo(e, l);
      else {
        t = l;
        var c = de;
        de |= 2;
        var d = hd();
        (qe !== e || Xe !== t) && (Yt = null, gr = Pe() + 500, Vn(e, t));
        do
          try {
            Am();
            break;
          } catch (_) {
            pd(e, _);
          }
        while (!0);
        Ns(), Lo.current = d, de = c, Le !== null ? t = 0 : (qe = null, Xe = 0, t = Be);
      }
      if (t !== 0) {
        if (t === 2 && (c = Ba(e), c !== 0 && (l = c, t = ll(e, c))), t === 1) throw o = gi, Vn(e, 0), gn(e, l), dt(e, Pe()), o;
        if (t === 6) gn(e, l);
        else {
          if (c = e.current.alternate, !(l & 30) && !Pm(c) && (t = Wo(e, l), t === 2 && (d = Ba(e), d !== 0 && (l = d, t = ll(e, d))), t === 1)) throw o = gi, Vn(e, 0), gn(e, l), dt(e, Pe()), o;
          switch (e.finishedWork = c, e.finishedLanes = l, t) {
            case 0:
            case 1:
              throw Error(r(345));
            case 2:
              Bn(e, ft, Yt);
              break;
            case 3:
              if (gn(e, l), (l & 130023424) === l && (t = ol + 500 - Pe(), 10 < t)) {
                if (Ji(e, 0) !== 0) break;
                if (c = e.suspendedLanes, (c & l) !== l) {
                  ot(), e.pingedLanes |= e.suspendedLanes & c;
                  break;
                }
                e.timeoutHandle = hs(Bn.bind(null, e, ft, Yt), t);
                break;
              }
              Bn(e, ft, Yt);
              break;
            case 4:
              if (gn(e, l), (l & 4194240) === l) break;
              for (t = e.eventTimes, c = -1; 0 < l; ) {
                var v = 31 - Nt(l);
                d = 1 << v, v = t[v], v > c && (c = v), l &= ~d;
              }
              if (l = c, l = Pe() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * Rm(l / 1960)) - l, 10 < l) {
                e.timeoutHandle = hs(Bn.bind(null, e, ft, Yt), l);
                break;
              }
              Bn(e, ft, Yt);
              break;
            case 5:
              Bn(e, ft, Yt);
              break;
            default:
              throw Error(r(329));
          }
        }
      }
      return dt(e, Pe()), e.callbackNode === o ? fd.bind(null, e) : null;
    }
    function ll(e, t) {
      var o = _i;
      return e.current.memoizedState.isDehydrated && (Vn(e, t).flags |= 256), e = Wo(e, t), e !== 2 && (t = ft, ft = o, t !== null && ul(t)), e;
    }
    function ul(e) {
      ft === null ? ft = e : ft.push.apply(ft, e);
    }
    function Pm(e) {
      for (var t = e; ; ) {
        if (t.flags & 16384) {
          var o = t.updateQueue;
          if (o !== null && (o = o.stores, o !== null)) for (var l = 0; l < o.length; l++) {
            var c = o[l], d = c.getSnapshot;
            c = c.value;
            try {
              if (!Tt(d(), c)) return !1;
            } catch {
              return !1;
            }
          }
        }
        if (o = t.child, t.subtreeFlags & 16384 && o !== null) o.return = t, t = o;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function gn(e, t) {
      for (t &= ~il, t &= ~zo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var o = 31 - Nt(t), l = 1 << o;
        e[o] = -1, t &= ~l;
      }
    }
    function dd(e) {
      if (de & 6) throw Error(r(327));
      _r();
      var t = Ji(e, 0);
      if (!(t & 1)) return dt(e, Pe()), null;
      var o = Wo(e, t);
      if (e.tag !== 0 && o === 2) {
        var l = Ba(e);
        l !== 0 && (t = l, o = ll(e, l));
      }
      if (o === 1) throw o = gi, Vn(e, 0), gn(e, t), dt(e, Pe()), o;
      if (o === 6) throw Error(r(345));
      return e.finishedWork = e.current.alternate, e.finishedLanes = t, Bn(e, ft, Yt), dt(e, Pe()), null;
    }
    function cl(e, t) {
      var o = de;
      de |= 1;
      try {
        return e(t);
      } finally {
        de = o, de === 0 && (gr = Pe() + 500, go && fn());
      }
    }
    function zn(e) {
      mn !== null && mn.tag === 0 && !(de & 6) && _r();
      var t = de;
      de |= 1;
      var o = kt.transition, l = _e;
      try {
        if (kt.transition = null, _e = 1, e) return e();
      } finally {
        _e = l, kt.transition = o, de = t, !(de & 6) && fn();
      }
    }
    function fl() {
      gt = yr.current, Te(yr);
    }
    function Vn(e, t) {
      e.finishedWork = null, e.finishedLanes = 0;
      var o = e.timeoutHandle;
      if (o !== -1 && (e.timeoutHandle = -1, fm(o)), Le !== null) for (o = Le.return; o !== null; ) {
        var l = o;
        switch (ws(l), l.tag) {
          case 1:
            l = l.type.childContextTypes, l != null && mo();
            break;
          case 3:
            hr(), Te(lt), Te(Ze), Ms();
            break;
          case 5:
            Ds(l);
            break;
          case 4:
            hr();
            break;
          case 13:
            Te(Ie);
            break;
          case 19:
            Te(Ie);
            break;
          case 10:
            Ts(l.type._context);
            break;
          case 22:
          case 23:
            fl();
        }
        o = o.return;
      }
      if (qe = e, Le = e = _n(e.current, null), Xe = gt = t, Be = 0, gi = null, il = zo = Ln = 0, ft = _i = null, Pn !== null) {
        for (t = 0; t < Pn.length; t++) if (o = Pn[t], l = o.interleaved, l !== null) {
          o.interleaved = null;
          var c = l.next, d = o.pending;
          if (d !== null) {
            var v = d.next;
            d.next = c, l.next = v;
          }
          o.pending = l;
        }
        Pn = null;
      }
      return e;
    }
    function pd(e, t) {
      do {
        var o = Le;
        try {
          if (Ns(), xo.current = jo, Co) {
            for (var l = De.memoizedState; l !== null; ) {
              var c = l.queue;
              c !== null && (c.pending = null), l = l.next;
            }
            Co = !1;
          }
          if (An = 0, Qe = Ve = De = null, di = !1, pi = 0, rl.current = null, o === null || o.return === null) {
            Be = 1, gi = t, Le = null;
            break;
          }
          e: {
            var d = e, v = o.return, _ = o, E = t;
            if (t = Xe, _.flags |= 32768, E !== null && typeof E == "object" && typeof E.then == "function") {
              var j = E, L = _, z = L.tag;
              if (!(L.mode & 1) && (z === 0 || z === 11 || z === 15)) {
                var A = L.alternate;
                A ? (L.updateQueue = A.updateQueue, L.memoizedState = A.memoizedState, L.lanes = A.lanes) : (L.updateQueue = null, L.memoizedState = null);
              }
              var $ = Lf(v);
              if ($ !== null) {
                $.flags &= -257, zf($, v, _, d, t), $.mode & 1 && Af(d, j, t), t = $, E = j;
                var Y = t.updateQueue;
                if (Y === null) {
                  var J = /* @__PURE__ */ new Set();
                  J.add(E), t.updateQueue = J;
                } else Y.add(E);
                break e;
              } else {
                if (!(t & 1)) {
                  Af(d, j, t), dl();
                  break e;
                }
                E = Error(r(426));
              }
            } else if (Ce && _.mode & 1) {
              var Fe = Lf(v);
              if (Fe !== null) {
                !(Fe.flags & 65536) && (Fe.flags |= 256), zf(Fe, v, _, d, t), ks(vr(E, _));
                break e;
              }
            }
            d = E = vr(E, _), Be !== 4 && (Be = 2), _i === null ? _i = [d] : _i.push(d), d = v;
            do {
              switch (d.tag) {
                case 3:
                  d.flags |= 65536, t &= -t, d.lanes |= t;
                  var x = Pf(d, E, t);
                  lf(d, x);
                  break e;
                case 1:
                  _ = E;
                  var k = d.type, D = d.stateNode;
                  if (!(d.flags & 128) && (typeof k.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && (vn === null || !vn.has(D)))) {
                    d.flags |= 65536, t &= -t, d.lanes |= t;
                    var U = Ff(d, _, t);
                    lf(d, U);
                    break e;
                  }
              }
              d = d.return;
            } while (d !== null);
          }
          md(o);
        } catch (Z) {
          t = Z, Le === o && o !== null && (Le = o = o.return);
          continue;
        }
        break;
      } while (!0);
    }
    function hd() {
      var e = Lo.current;
      return Lo.current = jo, e === null ? jo : e;
    }
    function dl() {
      (Be === 0 || Be === 3 || Be === 2) && (Be = 4), qe === null || !(Ln & 268435455) && !(zo & 268435455) || gn(qe, Xe);
    }
    function Wo(e, t) {
      var o = de;
      de |= 2;
      var l = hd();
      (qe !== e || Xe !== t) && (Yt = null, Vn(e, t));
      do
        try {
          Fm();
          break;
        } catch (c) {
          pd(e, c);
        }
      while (!0);
      if (Ns(), de = o, Lo.current = l, Le !== null) throw Error(r(261));
      return qe = null, Xe = 0, Be;
    }
    function Fm() {
      for (; Le !== null; ) vd(Le);
    }
    function Am() {
      for (; Le !== null && !lv(); ) vd(Le);
    }
    function vd(e) {
      var t = _d(e.alternate, e, gt);
      e.memoizedProps = e.pendingProps, t === null ? md(e) : Le = t, rl.current = null;
    }
    function md(e) {
      var t = e;
      do {
        var o = t.alternate;
        if (e = t.return, t.flags & 32768) {
          if (o = Im(o, t), o !== null) {
            o.flags &= 32767, Le = o;
            return;
          }
          if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
          else {
            Be = 6, Le = null;
            return;
          }
        } else if (o = Cm(o, t, gt), o !== null) {
          Le = o;
          return;
        }
        if (t = t.sibling, t !== null) {
          Le = t;
          return;
        }
        Le = t = e;
      } while (t !== null);
      Be === 0 && (Be = 5);
    }
    function Bn(e, t, o) {
      var l = _e, c = kt.transition;
      try {
        kt.transition = null, _e = 1, Lm(e, t, o, l);
      } finally {
        kt.transition = c, _e = l;
      }
      return null;
    }
    function Lm(e, t, o, l) {
      do
        _r();
      while (mn !== null);
      if (de & 6) throw Error(r(327));
      o = e.finishedWork;
      var c = e.finishedLanes;
      if (o === null) return null;
      if (e.finishedWork = null, e.finishedLanes = 0, o === e.current) throw Error(r(177));
      e.callbackNode = null, e.callbackPriority = 0;
      var d = o.lanes | o.childLanes;
      if (gv(e, d), e === qe && (Le = qe = null, Xe = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Bo || (Bo = !0, wd(Gi, function() {
        return _r(), null;
      })), d = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || d) {
        d = kt.transition, kt.transition = null;
        var v = _e;
        _e = 1;
        var _ = de;
        de |= 4, rl.current = null, jm(e, o), ad(o, e), im(ds), to = !!fs, ds = fs = null, e.current = o, Mm(o), uv(), de = _, _e = v, kt.transition = d;
      } else e.current = o;
      if (Bo && (Bo = !1, mn = e, Uo = c), d = e.pendingLanes, d === 0 && (vn = null), dv(o.stateNode), dt(e, Pe()), t !== null) for (l = e.onRecoverableError, o = 0; o < t.length; o++) c = t[o], l(c.value, { componentStack: c.stack, digest: c.digest });
      if (Vo) throw Vo = !1, e = al, al = null, e;
      return Uo & 1 && e.tag !== 0 && _r(), d = e.pendingLanes, d & 1 ? e === sl ? wi++ : (wi = 0, sl = e) : wi = 0, fn(), null;
    }
    function _r() {
      if (mn !== null) {
        var e = rc(Uo), t = kt.transition, o = _e;
        try {
          if (kt.transition = null, _e = 16 > e ? 16 : e, mn === null) var l = !1;
          else {
            if (e = mn, mn = null, Uo = 0, de & 6) throw Error(r(331));
            var c = de;
            for (de |= 4, G = e.current; G !== null; ) {
              var d = G, v = d.child;
              if (G.flags & 16) {
                var _ = d.deletions;
                if (_ !== null) {
                  for (var E = 0; E < _.length; E++) {
                    var j = _[E];
                    for (G = j; G !== null; ) {
                      var L = G;
                      switch (L.tag) {
                        case 0:
                        case 11:
                        case 15:
                          yi(8, L, d);
                      }
                      var z = L.child;
                      if (z !== null) z.return = L, G = z;
                      else for (; G !== null; ) {
                        L = G;
                        var A = L.sibling, $ = L.return;
                        if (td(L), L === j) {
                          G = null;
                          break;
                        }
                        if (A !== null) {
                          A.return = $, G = A;
                          break;
                        }
                        G = $;
                      }
                    }
                  }
                  var Y = d.alternate;
                  if (Y !== null) {
                    var J = Y.child;
                    if (J !== null) {
                      Y.child = null;
                      do {
                        var Fe = J.sibling;
                        J.sibling = null, J = Fe;
                      } while (J !== null);
                    }
                  }
                  G = d;
                }
              }
              if (d.subtreeFlags & 2064 && v !== null) v.return = d, G = v;
              else e: for (; G !== null; ) {
                if (d = G, d.flags & 2048) switch (d.tag) {
                  case 0:
                  case 11:
                  case 15:
                    yi(9, d, d.return);
                }
                var x = d.sibling;
                if (x !== null) {
                  x.return = d.return, G = x;
                  break e;
                }
                G = d.return;
              }
            }
            var k = e.current;
            for (G = k; G !== null; ) {
              v = G;
              var D = v.child;
              if (v.subtreeFlags & 2064 && D !== null) D.return = v, G = D;
              else e: for (v = k; G !== null; ) {
                if (_ = G, _.flags & 2048) try {
                  switch (_.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ao(9, _);
                  }
                } catch (Z) {
                  je(_, _.return, Z);
                }
                if (_ === v) {
                  G = null;
                  break e;
                }
                var U = _.sibling;
                if (U !== null) {
                  U.return = _.return, G = U;
                  break e;
                }
                G = _.return;
              }
            }
            if (de = c, fn(), Pt && typeof Pt.onPostCommitFiberRoot == "function") try {
              Pt.onPostCommitFiberRoot(Yi, e);
            } catch {
            }
            l = !0;
          }
          return l;
        } finally {
          _e = o, kt.transition = t;
        }
      }
      return !1;
    }
    function yd(e, t, o) {
      t = vr(o, t), t = Pf(e, t, 1), e = pn(e, t, 1), t = ot(), e !== null && (qr(e, 1, t), dt(e, t));
    }
    function je(e, t, o) {
      if (e.tag === 3) yd(e, e, o);
      else for (; t !== null; ) {
        if (t.tag === 3) {
          yd(t, e, o);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (vn === null || !vn.has(l))) {
            e = vr(o, e), e = Ff(t, e, 1), t = pn(t, e, 1), e = ot(), t !== null && (qr(t, 1, e), dt(t, e));
            break;
          }
        }
        t = t.return;
      }
    }
    function zm(e, t, o) {
      var l = e.pingCache;
      l !== null && l.delete(t), t = ot(), e.pingedLanes |= e.suspendedLanes & o, qe === e && (Xe & o) === o && (Be === 4 || Be === 3 && (Xe & 130023424) === Xe && 500 > Pe() - ol ? Vn(e, 0) : il |= o), dt(e, t);
    }
    function gd(e, t) {
      t === 0 && (e.mode & 1 ? (t = Xi, Xi <<= 1, !(Xi & 130023424) && (Xi = 4194304)) : t = 1);
      var o = ot();
      e = $t(e, t), e !== null && (qr(e, t, o), dt(e, o));
    }
    function Vm(e) {
      var t = e.memoizedState, o = 0;
      t !== null && (o = t.retryLane), gd(e, o);
    }
    function Bm(e, t) {
      var o = 0;
      switch (e.tag) {
        case 13:
          var l = e.stateNode, c = e.memoizedState;
          c !== null && (o = c.retryLane);
          break;
        case 19:
          l = e.stateNode;
          break;
        default:
          throw Error(r(314));
      }
      l !== null && l.delete(t), gd(e, o);
    }
    var _d;
    _d = function(e, t, o) {
      if (e !== null) if (e.memoizedProps !== t.pendingProps || lt.current) ct = !0;
      else {
        if (!(e.lanes & o) && !(t.flags & 128)) return ct = !1, xm(e, t, o);
        ct = !!(e.flags & 131072);
      }
      else ct = !1, Ce && t.flags & 1048576 && Xc(t, wo, t.index);
      switch (t.lanes = 0, t.tag) {
        case 2:
          var l = t.type;
          Po(e, t), e = t.pendingProps;
          var c = sr(t, Ze.current);
          pr(t, o), c = Fs(null, t, l, e, c, o);
          var d = As();
          return t.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ut(l) ? (d = !0, yo(t)) : d = !1, t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Cs(t), c.updater = Mo, t.stateNode = c, c._reactInternals = t, Qs(t, l, e, o), t = Hs(null, t, l, !0, d, o)) : (t.tag = 0, Ce && d && _s(t), it(null, t, c, o), t = t.child), t;
        case 16:
          l = t.elementType;
          e: {
            switch (Po(e, t), e = t.pendingProps, c = l._init, l = c(l._payload), t.type = l, c = t.tag = Qm(l), e = xt(l, e), c) {
              case 0:
                t = $s(null, t, l, e, o);
                break e;
              case 1:
                t = Wf(null, t, l, e, o);
                break e;
              case 11:
                t = Vf(null, t, l, e, o);
                break e;
              case 14:
                t = Bf(null, t, l, xt(l.type, e), o);
                break e;
            }
            throw Error(r(
              306,
              l,
              ""
            ));
          }
          return t;
        case 0:
          return l = t.type, c = t.pendingProps, c = t.elementType === l ? c : xt(l, c), $s(e, t, l, c, o);
        case 1:
          return l = t.type, c = t.pendingProps, c = t.elementType === l ? c : xt(l, c), Wf(e, t, l, c, o);
        case 3:
          e: {
            if ($f(t), e === null) throw Error(r(387));
            l = t.pendingProps, d = t.memoizedState, c = d.element, sf(e, t), To(t, l, null, o);
            var v = t.memoizedState;
            if (l = v.element, d.isDehydrated) if (d = { element: l, isDehydrated: !1, cache: v.cache, pendingSuspenseBoundaries: v.pendingSuspenseBoundaries, transitions: v.transitions }, t.updateQueue.baseState = d, t.memoizedState = d, t.flags & 256) {
              c = vr(Error(r(423)), t), t = Hf(e, t, l, o, c);
              break e;
            } else if (l !== c) {
              c = vr(Error(r(424)), t), t = Hf(e, t, l, o, c);
              break e;
            } else for (yt = ln(t.stateNode.containerInfo.firstChild), mt = t, Ce = !0, Ot = null, o = of(t, null, l, o), t.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
            else {
              if (cr(), l === c) {
                t = Gt(e, t, o);
                break e;
              }
              it(e, t, l, o);
            }
            t = t.child;
          }
          return t;
        case 5:
          return cf(t), e === null && Ss(t), l = t.type, c = t.pendingProps, d = e !== null ? e.memoizedProps : null, v = c.children, ps(l, c) ? v = null : d !== null && ps(l, d) && (t.flags |= 32), qf(e, t), it(e, t, v, o), t.child;
        case 6:
          return e === null && Ss(t), null;
        case 13:
          return Gf(e, t, o);
        case 4:
          return Is(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = fr(t, null, l, o) : it(e, t, l, o), t.child;
        case 11:
          return l = t.type, c = t.pendingProps, c = t.elementType === l ? c : xt(l, c), Vf(e, t, l, c, o);
        case 7:
          return it(e, t, t.pendingProps, o), t.child;
        case 8:
          return it(e, t, t.pendingProps.children, o), t.child;
        case 12:
          return it(e, t, t.pendingProps.children, o), t.child;
        case 10:
          e: {
            if (l = t.type._context, c = t.pendingProps, d = t.memoizedProps, v = c.value, Se(ko, l._currentValue), l._currentValue = v, d !== null) if (Tt(d.value, v)) {
              if (d.children === c.children && !lt.current) {
                t = Gt(e, t, o);
                break e;
              }
            } else for (d = t.child, d !== null && (d.return = t); d !== null; ) {
              var _ = d.dependencies;
              if (_ !== null) {
                v = d.child;
                for (var E = _.firstContext; E !== null; ) {
                  if (E.context === l) {
                    if (d.tag === 1) {
                      E = Ht(-1, o & -o), E.tag = 2;
                      var j = d.updateQueue;
                      if (j !== null) {
                        j = j.shared;
                        var L = j.pending;
                        L === null ? E.next = E : (E.next = L.next, L.next = E), j.pending = E;
                      }
                    }
                    d.lanes |= o, E = d.alternate, E !== null && (E.lanes |= o), Os(
                      d.return,
                      o,
                      t
                    ), _.lanes |= o;
                    break;
                  }
                  E = E.next;
                }
              } else if (d.tag === 10) v = d.type === t.type ? null : d.child;
              else if (d.tag === 18) {
                if (v = d.return, v === null) throw Error(r(341));
                v.lanes |= o, _ = v.alternate, _ !== null && (_.lanes |= o), Os(v, o, t), v = d.sibling;
              } else v = d.child;
              if (v !== null) v.return = d;
              else for (v = d; v !== null; ) {
                if (v === t) {
                  v = null;
                  break;
                }
                if (d = v.sibling, d !== null) {
                  d.return = v.return, v = d;
                  break;
                }
                v = v.return;
              }
              d = v;
            }
            it(e, t, c.children, o), t = t.child;
          }
          return t;
        case 9:
          return c = t.type, l = t.pendingProps.children, pr(t, o), c = Et(c), l = l(c), t.flags |= 1, it(e, t, l, o), t.child;
        case 14:
          return l = t.type, c = xt(l, t.pendingProps), c = xt(l.type, c), Bf(e, t, l, c, o);
        case 15:
          return Uf(e, t, t.type, t.pendingProps, o);
        case 17:
          return l = t.type, c = t.pendingProps, c = t.elementType === l ? c : xt(l, c), Po(e, t), t.tag = 1, ut(l) ? (e = !0, yo(t)) : e = !1, pr(t, o), Mf(t, l, c), Qs(t, l, c, o), Hs(null, t, l, !0, e, o);
        case 19:
          return Kf(e, t, o);
        case 22:
          return Qf(e, t, o);
      }
      throw Error(r(156, t.tag));
    };
    function wd(e, t) {
      return Ju(e, t);
    }
    function Um(e, t, o, l) {
      this.tag = e, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function bt(e, t, o, l) {
      return new Um(e, t, o, l);
    }
    function pl(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Qm(e) {
      if (typeof e == "function") return pl(e) ? 1 : 0;
      if (e != null) {
        if (e = e.$$typeof, e === Ge) return 11;
        if (e === st) return 14;
      }
      return 2;
    }
    function _n(e, t) {
      var o = e.alternate;
      return o === null ? (o = bt(e.tag, t, e.key, e.mode), o.elementType = e.elementType, o.type = e.type, o.stateNode = e.stateNode, o.alternate = e, e.alternate = o) : (o.pendingProps = t, o.type = e.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = e.flags & 14680064, o.childLanes = e.childLanes, o.lanes = e.lanes, o.child = e.child, o.memoizedProps = e.memoizedProps, o.memoizedState = e.memoizedState, o.updateQueue = e.updateQueue, t = e.dependencies, o.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, o.sibling = e.sibling, o.index = e.index, o.ref = e.ref, o;
    }
    function $o(e, t, o, l, c, d) {
      var v = 2;
      if (l = e, typeof e == "function") pl(e) && (v = 1);
      else if (typeof e == "string") v = 5;
      else e: switch (e) {
        case te:
          return Un(o.children, c, d, t);
        case ie:
          v = 8, c |= 8;
          break;
        case ue:
          return e = bt(12, o, t, c | 2), e.elementType = ue, e.lanes = d, e;
        case me:
          return e = bt(13, o, t, c), e.elementType = me, e.lanes = d, e;
        case Ae:
          return e = bt(19, o, t, c), e.elementType = Ae, e.lanes = d, e;
        case Oe:
          return Ho(o, c, d, t);
        default:
          if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case fe:
              v = 10;
              break e;
            case Ue:
              v = 9;
              break e;
            case Ge:
              v = 11;
              break e;
            case st:
              v = 14;
              break e;
            case Ye:
              v = 16, l = null;
              break e;
          }
          throw Error(r(130, e == null ? e : typeof e, ""));
      }
      return t = bt(v, o, t, c), t.elementType = e, t.type = l, t.lanes = d, t;
    }
    function Un(e, t, o, l) {
      return e = bt(7, e, l, t), e.lanes = o, e;
    }
    function Ho(e, t, o, l) {
      return e = bt(22, e, l, t), e.elementType = Oe, e.lanes = o, e.stateNode = { isHidden: !1 }, e;
    }
    function hl(e, t, o) {
      return e = bt(6, e, null, t), e.lanes = o, e;
    }
    function vl(e, t, o) {
      return t = bt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = o, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
    }
    function qm(e, t, o, l, c) {
      this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ua(0), this.expirationTimes = Ua(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ua(0), this.identifierPrefix = l, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
    }
    function ml(e, t, o, l, c, d, v, _, E) {
      return e = new qm(e, t, o, _, E), t === 1 ? (t = 1, d === !0 && (t |= 8)) : t = 0, d = bt(3, null, null, t), e.current = d, d.stateNode = e, d.memoizedState = { element: l, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Cs(d), e;
    }
    function Wm(e, t, o) {
      var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: Q, key: l == null ? null : "" + l, children: e, containerInfo: t, implementation: o };
    }
    function Ed(e) {
      if (!e) return cn;
      e = e._reactInternals;
      e: {
        if (In(e) !== e || e.tag !== 1) throw Error(r(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if (ut(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          t = t.return;
        } while (t !== null);
        throw Error(r(171));
      }
      if (e.tag === 1) {
        var o = e.type;
        if (ut(o)) return Gc(e, o, t);
      }
      return t;
    }
    function Sd(e, t, o, l, c, d, v, _, E) {
      return e = ml(o, l, !0, e, c, d, v, _, E), e.context = Ed(null), o = e.current, l = ot(), c = yn(o), d = Ht(l, c), d.callback = t ?? null, pn(o, d, c), e.current.lanes = c, qr(e, c, l), dt(e, l), e;
    }
    function Go(e, t, o, l) {
      var c = t.current, d = ot(), v = yn(c);
      return o = Ed(o), t.context === null ? t.context = o : t.pendingContext = o, t = Ht(d, v), t.payload = { element: e }, l = l === void 0 ? null : l, l !== null && (t.callback = l), e = pn(c, t, v), e !== null && (Dt(e, c, v, d), No(e, c, v)), v;
    }
    function Yo(e) {
      if (e = e.current, !e.child) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode;
      }
    }
    function kd(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var o = e.retryLane;
        e.retryLane = o !== 0 && o < t ? o : t;
      }
    }
    function yl(e, t) {
      kd(e, t), (e = e.alternate) && kd(e, t);
    }
    function $m() {
      return null;
    }
    var bd = typeof reportError == "function" ? reportError : function(e) {
      console.error(e);
    };
    function gl(e) {
      this._internalRoot = e;
    }
    Ko.prototype.render = gl.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      Go(e, t, null, null);
    }, Ko.prototype.unmount = gl.prototype.unmount = function() {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        zn(function() {
          Go(null, e, null, null);
        }), t[Ut] = null;
      }
    };
    function Ko(e) {
      this._internalRoot = e;
    }
    Ko.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = ac();
        e = { blockedOn: null, target: e, priority: t };
        for (var o = 0; o < on.length && t !== 0 && t < on[o].priority; o++) ;
        on.splice(o, 0, e), o === 0 && uc(e);
      }
    };
    function _l(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Xo(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function Nd() {
    }
    function Hm(e, t, o, l, c) {
      if (c) {
        if (typeof l == "function") {
          var d = l;
          l = function() {
            var j = Yo(v);
            d.call(j);
          };
        }
        var v = Sd(t, l, e, 0, null, !1, !1, "", Nd);
        return e._reactRootContainer = v, e[Ut] = v.current, ii(e.nodeType === 8 ? e.parentNode : e), zn(), v;
      }
      for (; c = e.lastChild; ) e.removeChild(c);
      if (typeof l == "function") {
        var _ = l;
        l = function() {
          var j = Yo(E);
          _.call(j);
        };
      }
      var E = ml(e, 0, !1, null, null, !1, !1, "", Nd);
      return e._reactRootContainer = E, e[Ut] = E.current, ii(e.nodeType === 8 ? e.parentNode : e), zn(function() {
        Go(t, E, o, l);
      }), E;
    }
    function Jo(e, t, o, l, c) {
      var d = o._reactRootContainer;
      if (d) {
        var v = d;
        if (typeof c == "function") {
          var _ = c;
          c = function() {
            var E = Yo(v);
            _.call(E);
          };
        }
        Go(t, v, e, c);
      } else v = Hm(o, t, e, c, l);
      return Yo(v);
    }
    ic = function(e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var o = Qr(t.pendingLanes);
            o !== 0 && (Qa(t, o | 1), dt(t, Pe()), !(de & 6) && (gr = Pe() + 500, fn()));
          }
          break;
        case 13:
          zn(function() {
            var l = $t(e, 1);
            if (l !== null) {
              var c = ot();
              Dt(l, e, 1, c);
            }
          }), yl(e, 1);
      }
    }, qa = function(e) {
      if (e.tag === 13) {
        var t = $t(e, 134217728);
        if (t !== null) {
          var o = ot();
          Dt(t, e, 134217728, o);
        }
        yl(e, 134217728);
      }
    }, oc = function(e) {
      if (e.tag === 13) {
        var t = yn(e), o = $t(e, t);
        if (o !== null) {
          var l = ot();
          Dt(o, e, t, l);
        }
        yl(e, t);
      }
    }, ac = function() {
      return _e;
    }, sc = function(e, t) {
      var o = _e;
      try {
        return _e = e, t();
      } finally {
        _e = o;
      }
    }, Fa = function(e, t, o) {
      switch (t) {
        case "input":
          if (xa(e, o), t = o.name, o.type === "radio" && t != null) {
            for (o = e; o.parentNode; ) o = o.parentNode;
            for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < o.length; t++) {
              var l = o[t];
              if (l !== e && l.form === e.form) {
                var c = vo(l);
                if (!c) throw Error(r(90));
                Du(l), xa(l, c);
              }
            }
          }
          break;
        case "textarea":
          Fu(e, o);
          break;
        case "select":
          t = o.value, t != null && Yn(e, !!o.multiple, t, !1);
      }
    }, Wu = cl, $u = zn;
    var Gm = { usingClientEntryPoint: !1, Events: [si, or, vo, Qu, qu, cl] }, Ei = { findFiberByHostInstance: Dn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ym = { bundleType: Ei.bundleType, version: Ei.version, rendererPackageName: Ei.rendererPackageName, rendererConfig: Ei.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: V.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
      return e = Ku(e), e === null ? null : e.stateNode;
    }, findFiberByHostInstance: Ei.findFiberByHostInstance || $m, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var Zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Zo.isDisabled && Zo.supportsFiber) try {
        Yi = Zo.inject(Ym), Pt = Zo;
      } catch {
      }
    }
    return pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gm, pt.createPortal = function(e, t) {
      var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_l(t)) throw Error(r(200));
      return Wm(e, t, null, o);
    }, pt.createRoot = function(e, t) {
      if (!_l(e)) throw Error(r(299));
      var o = !1, l = "", c = bd;
      return t != null && (t.unstable_strictMode === !0 && (o = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = ml(e, 1, !1, null, null, o, !1, l, c), e[Ut] = t.current, ii(e.nodeType === 8 ? e.parentNode : e), new gl(t);
    }, pt.findDOMNode = function(e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
      return e = Ku(t), e = e === null ? null : e.stateNode, e;
    }, pt.flushSync = function(e) {
      return zn(e);
    }, pt.hydrate = function(e, t, o) {
      if (!Xo(t)) throw Error(r(200));
      return Jo(null, e, t, !0, o);
    }, pt.hydrateRoot = function(e, t, o) {
      if (!_l(e)) throw Error(r(405));
      var l = o != null && o.hydratedSources || null, c = !1, d = "", v = bd;
      if (o != null && (o.unstable_strictMode === !0 && (c = !0), o.identifierPrefix !== void 0 && (d = o.identifierPrefix), o.onRecoverableError !== void 0 && (v = o.onRecoverableError)), t = Sd(t, null, e, 1, o ?? null, c, !1, d, v), e[Ut] = t.current, ii(e), l) for (e = 0; e < l.length; e++) o = l[e], c = o._getVersion, c = c(o._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [o, c] : t.mutableSourceEagerHydrationData.push(
        o,
        c
      );
      return new Ko(t);
    }, pt.render = function(e, t, o) {
      if (!Xo(t)) throw Error(r(200));
      return Jo(null, e, t, !1, o);
    }, pt.unmountComponentAtNode = function(e) {
      if (!Xo(e)) throw Error(r(40));
      return e._reactRootContainer ? (zn(function() {
        Jo(null, null, e, !1, function() {
          e._reactRootContainer = null, e[Ut] = null;
        });
      }), !0) : !1;
    }, pt.unstable_batchedUpdates = cl, pt.unstable_renderSubtreeIntoContainer = function(e, t, o, l) {
      if (!Xo(o)) throw Error(r(200));
      if (e == null || e._reactInternals === void 0) throw Error(r(38));
      return Jo(e, t, o, !1, l);
    }, pt.version = "18.3.1-next-f1338f8080-20240426", pt;
  }
  function Rp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rp);
      } catch (i) {
        console.error(i);
      }
  }
  Rp(), Mp.exports = ny();
  var ry = Mp.exports, Dd = ry;
  Dd.createRoot, Dd.hydrateRoot;
  var Al = function(i, n) {
    return Al = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (r[s] = a[s]);
    }, Al(i, n);
  };
  function Bt(i, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    Al(i, n);
    function r() {
      this.constructor = i;
    }
    i.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  }
  var N = function() {
    return N = Object.assign || function(n) {
      for (var r, a = 1, s = arguments.length; a < s; a++) {
        r = arguments[a];
        for (var u in r) Object.prototype.hasOwnProperty.call(r, u) && (n[u] = r[u]);
      }
      return n;
    }, N.apply(this, arguments);
  };
  function Kt(i, n) {
    var r = {};
    for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && n.indexOf(a) < 0 && (r[a] = i[a]);
    if (i != null && typeof Object.getOwnPropertySymbols == "function")
      for (var s = 0, a = Object.getOwnPropertySymbols(i); s < a.length; s++)
        n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(i, a[s]) && (r[a[s]] = i[a[s]]);
    return r;
  }
  function Sn(i, n, r, a) {
    function s(u) {
      return u instanceof r ? u : new r(function(f) {
        f(u);
      });
    }
    return new (r || (r = Promise))(function(u, f) {
      function p(y) {
        try {
          m(a.next(y));
        } catch (w) {
          f(w);
        }
      }
      function h(y) {
        try {
          m(a.throw(y));
        } catch (w) {
          f(w);
        }
      }
      function m(y) {
        y.done ? u(y.value) : s(y.value).then(p, h);
      }
      m((a = a.apply(i, n || [])).next());
    });
  }
  function kn(i, n) {
    var r = { label: 0, sent: function() {
      if (u[0] & 1) throw u[1];
      return u[1];
    }, trys: [], ops: [] }, a, s, u, f = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return f.next = p(0), f.throw = p(1), f.return = p(2), typeof Symbol == "function" && (f[Symbol.iterator] = function() {
      return this;
    }), f;
    function p(m) {
      return function(y) {
        return h([m, y]);
      };
    }
    function h(m) {
      if (a) throw new TypeError("Generator is already executing.");
      for (; f && (f = 0, m[0] && (r = 0)), r; ) try {
        if (a = 1, s && (u = m[0] & 2 ? s.return : m[0] ? s.throw || ((u = s.return) && u.call(s), 0) : s.next) && !(u = u.call(s, m[1])).done) return u;
        switch (s = 0, u && (m = [m[0] & 2, u.value]), m[0]) {
          case 0:
          case 1:
            u = m;
            break;
          case 4:
            return r.label++, { value: m[1], done: !1 };
          case 5:
            r.label++, s = m[1], m = [0];
            continue;
          case 7:
            m = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (u = r.trys, !(u = u.length > 0 && u[u.length - 1]) && (m[0] === 6 || m[0] === 2)) {
              r = 0;
              continue;
            }
            if (m[0] === 3 && (!u || m[1] > u[0] && m[1] < u[3])) {
              r.label = m[1];
              break;
            }
            if (m[0] === 6 && r.label < u[1]) {
              r.label = u[1], u = m;
              break;
            }
            if (u && r.label < u[2]) {
              r.label = u[2], r.ops.push(m);
              break;
            }
            u[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        m = n.call(i, r);
      } catch (y) {
        m = [6, y], s = 0;
      } finally {
        a = u = 0;
      }
      if (m[0] & 5) throw m[1];
      return { value: m[0] ? m[1] : void 0, done: !0 };
    }
  }
  function rt(i, n, r) {
    if (r || arguments.length === 2) for (var a = 0, s = n.length, u; a < s; a++)
      (u || !(a in n)) && (u || (u = Array.prototype.slice.call(n, 0, a)), u[a] = n[a]);
    return i.concat(u || Array.prototype.slice.call(n));
  }
  var Sl = "Invariant Violation", jd = Object.setPrototypeOf, iy = jd === void 0 ? function(i, n) {
    return i.__proto__ = n, i;
  } : jd, Pp = (
    /** @class */
    function(i) {
      Bt(n, i);
      function n(r) {
        r === void 0 && (r = Sl);
        var a = i.call(this, typeof r == "number" ? Sl + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
        return a.framesToPop = 1, a.name = Sl, iy(a, n.prototype), a;
      }
      return n;
    }(Error)
  );
  function Wn(i, n) {
    if (!i)
      throw new Pp(n);
  }
  var Fp = ["debug", "log", "warn", "error", "silent"], oy = Fp.indexOf("log");
  function ea(i) {
    return function() {
      if (Fp.indexOf(i) >= oy) {
        var n = console[i] || console.log;
        return n.apply(console, arguments);
      }
    };
  }
  (function(i) {
    i.debug = ea("debug"), i.log = ea("log"), i.warn = ea("warn"), i.error = ea("error");
  })(Wn || (Wn = {}));
  var uu = "3.12.2";
  function Mt(i) {
    try {
      return i();
    } catch {
    }
  }
  const Ll = Mt(function() {
    return globalThis;
  }) || Mt(function() {
    return window;
  }) || Mt(function() {
    return self;
  }) || Mt(function() {
    return global;
  }) || // We don't expect the Function constructor ever to be invoked at runtime, as
  // long as at least one of globalThis, window, self, or global is defined, so
  // we are under no obligation to make it easy for static analysis tools to
  // detect syntactic usage of the Function constructor. If you think you can
  // improve your static analysis to detect this obfuscation, think again. This
  // is an arms race you cannot win, at least not in JavaScript.
  Mt(function() {
    return Mt.constructor("return this")();
  });
  var Md = /* @__PURE__ */ new Map();
  function zl(i) {
    var n = Md.get(i) || 1;
    return Md.set(i, n + 1), "".concat(i, ":").concat(n, ":").concat(Math.random().toString(36).slice(2));
  }
  function Ap(i, n) {
    n === void 0 && (n = 0);
    var r = zl("stringifyForDisplay");
    return JSON.stringify(i, function(a, s) {
      return s === void 0 ? r : s;
    }, n).split(JSON.stringify(r)).join("<undefined>");
  }
  function ta(i) {
    return function(n) {
      for (var r = [], a = 1; a < arguments.length; a++)
        r[a - 1] = arguments[a];
      if (typeof n == "number") {
        var s = n;
        n = cu(s), n || (n = fu(s, r), r = []);
      }
      i.apply(void 0, [n].concat(r));
    };
  }
  var ee = Object.assign(function(n, r) {
    for (var a = [], s = 2; s < arguments.length; s++)
      a[s - 2] = arguments[s];
    n || Wn(n, cu(r, a) || fu(r, a));
  }, {
    debug: ta(Wn.debug),
    log: ta(Wn.log),
    warn: ta(Wn.warn),
    error: ta(Wn.error)
  });
  function at(i) {
    for (var n = [], r = 1; r < arguments.length; r++)
      n[r - 1] = arguments[r];
    return new Pp(cu(i, n) || fu(i, n));
  }
  var Rd = Symbol.for("ApolloErrorMessageHandler_" + uu);
  function Lp(i) {
    if (typeof i == "string")
      return i;
    try {
      return Ap(i, 2).slice(0, 1e3);
    } catch {
      return "<non-serializable>";
    }
  }
  function cu(i, n) {
    if (n === void 0 && (n = []), !!i)
      return Ll[Rd] && Ll[Rd](i, n.map(Lp));
  }
  function fu(i, n) {
    if (n === void 0 && (n = []), !!i)
      return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
        version: uu,
        message: i,
        args: n.map(Lp)
      })));
  }
  function ia(i, n) {
    if (!!!i)
      throw new Error(n);
  }
  function ay(i) {
    return typeof i == "object" && i !== null;
  }
  function sy(i, n) {
    if (!!!i)
      throw new Error(
        "Unexpected invariant triggered."
      );
  }
  const ly = /\r\n|[\n\r]/g;
  function Vl(i, n) {
    let r = 0, a = 1;
    for (const s of i.body.matchAll(ly)) {
      if (typeof s.index == "number" || sy(!1), s.index >= n)
        break;
      r = s.index + s[0].length, a += 1;
    }
    return {
      line: a,
      column: n + 1 - r
    };
  }
  function uy(i) {
    return zp(
      i.source,
      Vl(i.source, i.start)
    );
  }
  function zp(i, n) {
    const r = i.locationOffset.column - 1, a = "".padStart(r) + i.body, s = n.line - 1, u = i.locationOffset.line - 1, f = n.line + u, p = n.line === 1 ? r : 0, h = n.column + p, m = `${i.name}:${f}:${h}
`, y = a.split(/\r\n|[\n\r]/g), w = y[s];
    if (w.length > 120) {
      const g = Math.floor(h / 80), S = h % 80, C = [];
      for (let O = 0; O < w.length; O += 80)
        C.push(w.slice(O, O + 80));
      return m + Pd([
        [`${f} |`, C[0]],
        ...C.slice(1, g + 1).map((O) => ["|", O]),
        ["|", "^".padStart(S)],
        ["|", C[g + 1]]
      ]);
    }
    return m + Pd([
      // Lines specified like this: ["prefix", "string"],
      [`${f - 1} |`, y[s - 1]],
      [`${f} |`, w],
      ["|", "^".padStart(h)],
      [`${f + 1} |`, y[s + 1]]
    ]);
  }
  function Pd(i) {
    const n = i.filter(([a, s]) => s !== void 0), r = Math.max(...n.map(([a]) => a.length));
    return n.map(([a, s]) => a.padStart(r) + (s ? " " + s : "")).join(`
`);
  }
  function cy(i) {
    const n = i[0];
    return n == null || "kind" in n || "length" in n ? {
      nodes: n,
      source: i[1],
      positions: i[2],
      path: i[3],
      originalError: i[4],
      extensions: i[5]
    } : n;
  }
  class du extends Error {
    /**
     * An array of `{ line, column }` locations within the source GraphQL document
     * which correspond to this error.
     *
     * Errors during validation often contain multiple locations, for example to
     * point out two things with the same name. Errors during execution include a
     * single location, the field which produced the error.
     *
     * Enumerable, and appears in the result of JSON.stringify().
     */
    /**
     * An array describing the JSON-path into the execution response which
     * corresponds to this error. Only included for errors during execution.
     *
     * Enumerable, and appears in the result of JSON.stringify().
     */
    /**
     * An array of GraphQL AST Nodes corresponding to this error.
     */
    /**
     * The source GraphQL document for the first location of this error.
     *
     * Note that if this Error represents more than one node, the source may not
     * represent nodes after the first node.
     */
    /**
     * An array of character offsets within the source GraphQL document
     * which correspond to this error.
     */
    /**
     * The original error thrown from a field resolver during execution.
     */
    /**
     * Extension fields to add to the formatted error.
     */
    /**
     * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
     */
    constructor(n, ...r) {
      var a, s, u;
      const { nodes: f, source: p, positions: h, path: m, originalError: y, extensions: w } = cy(r);
      super(n), this.name = "GraphQLError", this.path = m ?? void 0, this.originalError = y ?? void 0, this.nodes = Fd(
        Array.isArray(f) ? f : f ? [f] : void 0
      );
      const g = Fd(
        (a = this.nodes) === null || a === void 0 ? void 0 : a.map((C) => C.loc).filter((C) => C != null)
      );
      this.source = p ?? (g == null || (s = g[0]) === null || s === void 0 ? void 0 : s.source), this.positions = h ?? (g == null ? void 0 : g.map((C) => C.start)), this.locations = h && p ? h.map((C) => Vl(p, C)) : g == null ? void 0 : g.map((C) => Vl(C.source, C.start));
      const S = ay(
        y == null ? void 0 : y.extensions
      ) ? y == null ? void 0 : y.extensions : void 0;
      this.extensions = (u = w ?? S) !== null && u !== void 0 ? u : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
        message: {
          writable: !0,
          enumerable: !0
        },
        name: {
          enumerable: !1
        },
        nodes: {
          enumerable: !1
        },
        source: {
          enumerable: !1
        },
        positions: {
          enumerable: !1
        },
        originalError: {
          enumerable: !1
        }
      }), y != null && y.stack ? Object.defineProperty(this, "stack", {
        value: y.stack,
        writable: !0,
        configurable: !0
      }) : Error.captureStackTrace ? Error.captureStackTrace(this, du) : Object.defineProperty(this, "stack", {
        value: Error().stack,
        writable: !0,
        configurable: !0
      });
    }
    get [Symbol.toStringTag]() {
      return "GraphQLError";
    }
    toString() {
      let n = this.message;
      if (this.nodes)
        for (const r of this.nodes)
          r.loc && (n += `

` + uy(r.loc));
      else if (this.source && this.locations)
        for (const r of this.locations)
          n += `

` + zp(this.source, r);
      return n;
    }
    toJSON() {
      const n = {
        message: this.message
      };
      return this.locations != null && (n.locations = this.locations), this.path != null && (n.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (n.extensions = this.extensions), n;
    }
  }
  function Fd(i) {
    return i === void 0 || i.length === 0 ? void 0 : i;
  }
  function He(i, n, r) {
    return new du(`Syntax Error: ${r}`, {
      source: i,
      positions: [n]
    });
  }
  class fy {
    /**
     * The character offset at which this Node begins.
     */
    /**
     * The character offset at which this Node ends.
     */
    /**
     * The Token at which this Node begins.
     */
    /**
     * The Token at which this Node ends.
     */
    /**
     * The Source document the AST represents.
     */
    constructor(n, r, a) {
      this.start = n.start, this.end = r.end, this.startToken = n, this.endToken = r, this.source = a;
    }
    get [Symbol.toStringTag]() {
      return "Location";
    }
    toJSON() {
      return {
        start: this.start,
        end: this.end
      };
    }
  }
  class Vp {
    /**
     * The kind of Token.
     */
    /**
     * The character offset at which this Node begins.
     */
    /**
     * The character offset at which this Node ends.
     */
    /**
     * The 1-indexed line number on which this Token appears.
     */
    /**
     * The 1-indexed column number at which this Token begins.
     */
    /**
     * For non-punctuation tokens, represents the interpreted value of the token.
     *
     * Note: is undefined for punctuation tokens, but typed as string for
     * convenience in the parser.
     */
    /**
     * Tokens exist as nodes in a double-linked-list amongst all tokens
     * including ignored tokens. <SOF> is always the first node and <EOF>
     * the last.
     */
    constructor(n, r, a, s, u, f) {
      this.kind = n, this.start = r, this.end = a, this.line = s, this.column = u, this.value = f, this.prev = null, this.next = null;
    }
    get [Symbol.toStringTag]() {
      return "Token";
    }
    toJSON() {
      return {
        kind: this.kind,
        value: this.value,
        line: this.line,
        column: this.column
      };
    }
  }
  const Bp = {
    Name: [],
    Document: ["definitions"],
    OperationDefinition: [
      "name",
      "variableDefinitions",
      "directives",
      "selectionSet"
    ],
    VariableDefinition: ["variable", "type", "defaultValue", "directives"],
    Variable: ["name"],
    SelectionSet: ["selections"],
    Field: ["alias", "name", "arguments", "directives", "selectionSet"],
    Argument: ["name", "value"],
    FragmentSpread: ["name", "directives"],
    InlineFragment: ["typeCondition", "directives", "selectionSet"],
    FragmentDefinition: [
      "name",
      // Note: fragment variable definitions are deprecated and will removed in v17.0.0
      "variableDefinitions",
      "typeCondition",
      "directives",
      "selectionSet"
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: ["values"],
    ObjectValue: ["fields"],
    ObjectField: ["name", "value"],
    Directive: ["name", "arguments"],
    NamedType: ["name"],
    ListType: ["type"],
    NonNullType: ["type"],
    SchemaDefinition: ["description", "directives", "operationTypes"],
    OperationTypeDefinition: ["type"],
    ScalarTypeDefinition: ["description", "name", "directives"],
    ObjectTypeDefinition: [
      "description",
      "name",
      "interfaces",
      "directives",
      "fields"
    ],
    FieldDefinition: ["description", "name", "arguments", "type", "directives"],
    InputValueDefinition: [
      "description",
      "name",
      "type",
      "defaultValue",
      "directives"
    ],
    InterfaceTypeDefinition: [
      "description",
      "name",
      "interfaces",
      "directives",
      "fields"
    ],
    UnionTypeDefinition: ["description", "name", "directives", "types"],
    EnumTypeDefinition: ["description", "name", "directives", "values"],
    EnumValueDefinition: ["description", "name", "directives"],
    InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
    DirectiveDefinition: ["description", "name", "arguments", "locations"],
    SchemaExtension: ["directives", "operationTypes"],
    ScalarTypeExtension: ["name", "directives"],
    ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
    InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
    UnionTypeExtension: ["name", "directives", "types"],
    EnumTypeExtension: ["name", "directives", "values"],
    InputObjectTypeExtension: ["name", "directives", "fields"]
  }, dy = new Set(Object.keys(Bp));
  function Ad(i) {
    const n = i == null ? void 0 : i.kind;
    return typeof n == "string" && dy.has(n);
  }
  var Sr;
  (function(i) {
    i.QUERY = "query", i.MUTATION = "mutation", i.SUBSCRIPTION = "subscription";
  })(Sr || (Sr = {}));
  var Bl;
  (function(i) {
    i.QUERY = "QUERY", i.MUTATION = "MUTATION", i.SUBSCRIPTION = "SUBSCRIPTION", i.FIELD = "FIELD", i.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", i.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", i.INLINE_FRAGMENT = "INLINE_FRAGMENT", i.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", i.SCHEMA = "SCHEMA", i.SCALAR = "SCALAR", i.OBJECT = "OBJECT", i.FIELD_DEFINITION = "FIELD_DEFINITION", i.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", i.INTERFACE = "INTERFACE", i.UNION = "UNION", i.ENUM = "ENUM", i.ENUM_VALUE = "ENUM_VALUE", i.INPUT_OBJECT = "INPUT_OBJECT", i.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
  })(Bl || (Bl = {}));
  var W;
  (function(i) {
    i.NAME = "Name", i.DOCUMENT = "Document", i.OPERATION_DEFINITION = "OperationDefinition", i.VARIABLE_DEFINITION = "VariableDefinition", i.SELECTION_SET = "SelectionSet", i.FIELD = "Field", i.ARGUMENT = "Argument", i.FRAGMENT_SPREAD = "FragmentSpread", i.INLINE_FRAGMENT = "InlineFragment", i.FRAGMENT_DEFINITION = "FragmentDefinition", i.VARIABLE = "Variable", i.INT = "IntValue", i.FLOAT = "FloatValue", i.STRING = "StringValue", i.BOOLEAN = "BooleanValue", i.NULL = "NullValue", i.ENUM = "EnumValue", i.LIST = "ListValue", i.OBJECT = "ObjectValue", i.OBJECT_FIELD = "ObjectField", i.DIRECTIVE = "Directive", i.NAMED_TYPE = "NamedType", i.LIST_TYPE = "ListType", i.NON_NULL_TYPE = "NonNullType", i.SCHEMA_DEFINITION = "SchemaDefinition", i.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", i.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", i.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", i.FIELD_DEFINITION = "FieldDefinition", i.INPUT_VALUE_DEFINITION = "InputValueDefinition", i.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", i.UNION_TYPE_DEFINITION = "UnionTypeDefinition", i.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", i.ENUM_VALUE_DEFINITION = "EnumValueDefinition", i.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", i.DIRECTIVE_DEFINITION = "DirectiveDefinition", i.SCHEMA_EXTENSION = "SchemaExtension", i.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", i.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", i.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", i.UNION_TYPE_EXTENSION = "UnionTypeExtension", i.ENUM_TYPE_EXTENSION = "EnumTypeExtension", i.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
  })(W || (W = {}));
  function Ul(i) {
    return i === 9 || i === 32;
  }
  function Ri(i) {
    return i >= 48 && i <= 57;
  }
  function Up(i) {
    return i >= 97 && i <= 122 || // A-Z
    i >= 65 && i <= 90;
  }
  function Qp(i) {
    return Up(i) || i === 95;
  }
  function py(i) {
    return Up(i) || Ri(i) || i === 95;
  }
  function hy(i) {
    var n;
    let r = Number.MAX_SAFE_INTEGER, a = null, s = -1;
    for (let f = 0; f < i.length; ++f) {
      var u;
      const p = i[f], h = vy(p);
      h !== p.length && (a = (u = a) !== null && u !== void 0 ? u : f, s = f, f !== 0 && h < r && (r = h));
    }
    return i.map((f, p) => p === 0 ? f : f.slice(r)).slice(
      (n = a) !== null && n !== void 0 ? n : 0,
      s + 1
    );
  }
  function vy(i) {
    let n = 0;
    for (; n < i.length && Ul(i.charCodeAt(n)); )
      ++n;
    return n;
  }
  function my(i, n) {
    const r = i.replace(/"""/g, '\\"""'), a = r.split(/\r\n|[\n\r]/g), s = a.length === 1, u = a.length > 1 && a.slice(1).every((S) => S.length === 0 || Ul(S.charCodeAt(0))), f = r.endsWith('\\"""'), p = i.endsWith('"') && !f, h = i.endsWith("\\"), m = p || h, y = (
      // add leading and trailing new lines only if it improves readability
      !s || i.length > 70 || m || u || f
    );
    let w = "";
    const g = s && Ul(i.charCodeAt(0));
    return (y && !g || u) && (w += `
`), w += r, (y || m) && (w += `
`), '"""' + w + '"""';
  }
  var P;
  (function(i) {
    i.SOF = "<SOF>", i.EOF = "<EOF>", i.BANG = "!", i.DOLLAR = "$", i.AMP = "&", i.PAREN_L = "(", i.PAREN_R = ")", i.SPREAD = "...", i.COLON = ":", i.EQUALS = "=", i.AT = "@", i.BRACKET_L = "[", i.BRACKET_R = "]", i.BRACE_L = "{", i.PIPE = "|", i.BRACE_R = "}", i.NAME = "Name", i.INT = "Int", i.FLOAT = "Float", i.STRING = "String", i.BLOCK_STRING = "BlockString", i.COMMENT = "Comment";
  })(P || (P = {}));
  class yy {
    /**
     * The previously focused non-ignored token.
     */
    /**
     * The currently focused non-ignored token.
     */
    /**
     * The (1-indexed) line containing the current token.
     */
    /**
     * The character offset at which the current line begins.
     */
    constructor(n) {
      const r = new Vp(P.SOF, 0, 0, 0, 0);
      this.source = n, this.lastToken = r, this.token = r, this.line = 1, this.lineStart = 0;
    }
    get [Symbol.toStringTag]() {
      return "Lexer";
    }
    /**
     * Advances the token stream to the next non-ignored token.
     */
    advance() {
      return this.lastToken = this.token, this.token = this.lookahead();
    }
    /**
     * Looks ahead and returns the next non-ignored token, but does not change
     * the state of Lexer.
     */
    lookahead() {
      let n = this.token;
      if (n.kind !== P.EOF)
        do
          if (n.next)
            n = n.next;
          else {
            const r = _y(this, n.end);
            n.next = r, r.prev = n, n = r;
          }
        while (n.kind === P.COMMENT);
      return n;
    }
  }
  function gy(i) {
    return i === P.BANG || i === P.DOLLAR || i === P.AMP || i === P.PAREN_L || i === P.PAREN_R || i === P.SPREAD || i === P.COLON || i === P.EQUALS || i === P.AT || i === P.BRACKET_L || i === P.BRACKET_R || i === P.BRACE_L || i === P.PIPE || i === P.BRACE_R;
  }
  function Mr(i) {
    return i >= 0 && i <= 55295 || i >= 57344 && i <= 1114111;
  }
  function ya(i, n) {
    return qp(i.charCodeAt(n)) && Wp(i.charCodeAt(n + 1));
  }
  function qp(i) {
    return i >= 55296 && i <= 56319;
  }
  function Wp(i) {
    return i >= 56320 && i <= 57343;
  }
  function $n(i, n) {
    const r = i.source.body.codePointAt(n);
    if (r === void 0)
      return P.EOF;
    if (r >= 32 && r <= 126) {
      const a = String.fromCodePoint(r);
      return a === '"' ? `'"'` : `"${a}"`;
    }
    return "U+" + r.toString(16).toUpperCase().padStart(4, "0");
  }
  function ze(i, n, r, a, s) {
    const u = i.line, f = 1 + r - i.lineStart;
    return new Vp(n, r, a, u, f, s);
  }
  function _y(i, n) {
    const r = i.source.body, a = r.length;
    let s = n;
    for (; s < a; ) {
      const u = r.charCodeAt(s);
      switch (u) {
        case 65279:
        case 9:
        case 32:
        case 44:
          ++s;
          continue;
        case 10:
          ++s, ++i.line, i.lineStart = s;
          continue;
        case 13:
          r.charCodeAt(s + 1) === 10 ? s += 2 : ++s, ++i.line, i.lineStart = s;
          continue;
        case 35:
          return wy(i, s);
        case 33:
          return ze(i, P.BANG, s, s + 1);
        case 36:
          return ze(i, P.DOLLAR, s, s + 1);
        case 38:
          return ze(i, P.AMP, s, s + 1);
        case 40:
          return ze(i, P.PAREN_L, s, s + 1);
        case 41:
          return ze(i, P.PAREN_R, s, s + 1);
        case 46:
          if (r.charCodeAt(s + 1) === 46 && r.charCodeAt(s + 2) === 46)
            return ze(i, P.SPREAD, s, s + 3);
          break;
        case 58:
          return ze(i, P.COLON, s, s + 1);
        case 61:
          return ze(i, P.EQUALS, s, s + 1);
        case 64:
          return ze(i, P.AT, s, s + 1);
        case 91:
          return ze(i, P.BRACKET_L, s, s + 1);
        case 93:
          return ze(i, P.BRACKET_R, s, s + 1);
        case 123:
          return ze(i, P.BRACE_L, s, s + 1);
        case 124:
          return ze(i, P.PIPE, s, s + 1);
        case 125:
          return ze(i, P.BRACE_R, s, s + 1);
        case 34:
          return r.charCodeAt(s + 1) === 34 && r.charCodeAt(s + 2) === 34 ? Ty(i, s) : Sy(i, s);
      }
      if (Ri(u) || u === 45)
        return Ey(i, s, u);
      if (Qp(u))
        return Oy(i, s);
      throw He(
        i.source,
        s,
        u === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : Mr(u) || ya(r, s) ? `Unexpected character: ${$n(i, s)}.` : `Invalid character: ${$n(i, s)}.`
      );
    }
    return ze(i, P.EOF, a, a);
  }
  function wy(i, n) {
    const r = i.source.body, a = r.length;
    let s = n + 1;
    for (; s < a; ) {
      const u = r.charCodeAt(s);
      if (u === 10 || u === 13)
        break;
      if (Mr(u))
        ++s;
      else if (ya(r, s))
        s += 2;
      else
        break;
    }
    return ze(
      i,
      P.COMMENT,
      n,
      s,
      r.slice(n + 1, s)
    );
  }
  function Ey(i, n, r) {
    const a = i.source.body;
    let s = n, u = r, f = !1;
    if (u === 45 && (u = a.charCodeAt(++s)), u === 48) {
      if (u = a.charCodeAt(++s), Ri(u))
        throw He(
          i.source,
          s,
          `Invalid number, unexpected digit after 0: ${$n(
            i,
            s
          )}.`
        );
    } else
      s = kl(i, s, u), u = a.charCodeAt(s);
    if (u === 46 && (f = !0, u = a.charCodeAt(++s), s = kl(i, s, u), u = a.charCodeAt(s)), (u === 69 || u === 101) && (f = !0, u = a.charCodeAt(++s), (u === 43 || u === 45) && (u = a.charCodeAt(++s)), s = kl(i, s, u), u = a.charCodeAt(s)), u === 46 || Qp(u))
      throw He(
        i.source,
        s,
        `Invalid number, expected digit but got: ${$n(
          i,
          s
        )}.`
      );
    return ze(
      i,
      f ? P.FLOAT : P.INT,
      n,
      s,
      a.slice(n, s)
    );
  }
  function kl(i, n, r) {
    if (!Ri(r))
      throw He(
        i.source,
        n,
        `Invalid number, expected digit but got: ${$n(
          i,
          n
        )}.`
      );
    const a = i.source.body;
    let s = n + 1;
    for (; Ri(a.charCodeAt(s)); )
      ++s;
    return s;
  }
  function Sy(i, n) {
    const r = i.source.body, a = r.length;
    let s = n + 1, u = s, f = "";
    for (; s < a; ) {
      const p = r.charCodeAt(s);
      if (p === 34)
        return f += r.slice(u, s), ze(i, P.STRING, n, s + 1, f);
      if (p === 92) {
        f += r.slice(u, s);
        const h = r.charCodeAt(s + 1) === 117 ? r.charCodeAt(s + 2) === 123 ? ky(i, s) : by(i, s) : Ny(i, s);
        f += h.value, s += h.size, u = s;
        continue;
      }
      if (p === 10 || p === 13)
        break;
      if (Mr(p))
        ++s;
      else if (ya(r, s))
        s += 2;
      else
        throw He(
          i.source,
          s,
          `Invalid character within String: ${$n(
            i,
            s
          )}.`
        );
    }
    throw He(i.source, s, "Unterminated string.");
  }
  function ky(i, n) {
    const r = i.source.body;
    let a = 0, s = 3;
    for (; s < 12; ) {
      const u = r.charCodeAt(n + s++);
      if (u === 125) {
        if (s < 5 || !Mr(a))
          break;
        return {
          value: String.fromCodePoint(a),
          size: s
        };
      }
      if (a = a << 4 | xi(u), a < 0)
        break;
    }
    throw He(
      i.source,
      n,
      `Invalid Unicode escape sequence: "${r.slice(
        n,
        n + s
      )}".`
    );
  }
  function by(i, n) {
    const r = i.source.body, a = Ld(r, n + 2);
    if (Mr(a))
      return {
        value: String.fromCodePoint(a),
        size: 6
      };
    if (qp(a) && r.charCodeAt(n + 6) === 92 && r.charCodeAt(n + 7) === 117) {
      const s = Ld(r, n + 8);
      if (Wp(s))
        return {
          value: String.fromCodePoint(a, s),
          size: 12
        };
    }
    throw He(
      i.source,
      n,
      `Invalid Unicode escape sequence: "${r.slice(n, n + 6)}".`
    );
  }
  function Ld(i, n) {
    return xi(i.charCodeAt(n)) << 12 | xi(i.charCodeAt(n + 1)) << 8 | xi(i.charCodeAt(n + 2)) << 4 | xi(i.charCodeAt(n + 3));
  }
  function xi(i) {
    return i >= 48 && i <= 57 ? i - 48 : i >= 65 && i <= 70 ? i - 55 : i >= 97 && i <= 102 ? i - 87 : -1;
  }
  function Ny(i, n) {
    const r = i.source.body;
    switch (r.charCodeAt(n + 1)) {
      case 34:
        return {
          value: '"',
          size: 2
        };
      case 92:
        return {
          value: "\\",
          size: 2
        };
      case 47:
        return {
          value: "/",
          size: 2
        };
      case 98:
        return {
          value: "\b",
          size: 2
        };
      case 102:
        return {
          value: "\f",
          size: 2
        };
      case 110:
        return {
          value: `
`,
          size: 2
        };
      case 114:
        return {
          value: "\r",
          size: 2
        };
      case 116:
        return {
          value: "	",
          size: 2
        };
    }
    throw He(
      i.source,
      n,
      `Invalid character escape sequence: "${r.slice(
        n,
        n + 2
      )}".`
    );
  }
  function Ty(i, n) {
    const r = i.source.body, a = r.length;
    let s = i.lineStart, u = n + 3, f = u, p = "";
    const h = [];
    for (; u < a; ) {
      const m = r.charCodeAt(u);
      if (m === 34 && r.charCodeAt(u + 1) === 34 && r.charCodeAt(u + 2) === 34) {
        p += r.slice(f, u), h.push(p);
        const y = ze(
          i,
          P.BLOCK_STRING,
          n,
          u + 3,
          // Return a string of the lines joined with U+000A.
          hy(h).join(`
`)
        );
        return i.line += h.length - 1, i.lineStart = s, y;
      }
      if (m === 92 && r.charCodeAt(u + 1) === 34 && r.charCodeAt(u + 2) === 34 && r.charCodeAt(u + 3) === 34) {
        p += r.slice(f, u), f = u + 1, u += 4;
        continue;
      }
      if (m === 10 || m === 13) {
        p += r.slice(f, u), h.push(p), m === 13 && r.charCodeAt(u + 1) === 10 ? u += 2 : ++u, p = "", f = u, s = u;
        continue;
      }
      if (Mr(m))
        ++u;
      else if (ya(r, u))
        u += 2;
      else
        throw He(
          i.source,
          u,
          `Invalid character within String: ${$n(
            i,
            u
          )}.`
        );
    }
    throw He(i.source, u, "Unterminated string.");
  }
  function Oy(i, n) {
    const r = i.source.body, a = r.length;
    let s = n + 1;
    for (; s < a; ) {
      const u = r.charCodeAt(s);
      if (py(u))
        ++s;
      else
        break;
    }
    return ze(
      i,
      P.NAME,
      n,
      s,
      r.slice(n, s)
    );
  }
  const xy = 10, $p = 2;
  function pu(i) {
    return ga(i, []);
  }
  function ga(i, n) {
    switch (typeof i) {
      case "string":
        return JSON.stringify(i);
      case "function":
        return i.name ? `[function ${i.name}]` : "[function]";
      case "object":
        return Cy(i, n);
      default:
        return String(i);
    }
  }
  function Cy(i, n) {
    if (i === null)
      return "null";
    if (n.includes(i))
      return "[Circular]";
    const r = [...n, i];
    if (Iy(i)) {
      const a = i.toJSON();
      if (a !== i)
        return typeof a == "string" ? a : ga(a, r);
    } else if (Array.isArray(i))
      return jy(i, r);
    return Dy(i, r);
  }
  function Iy(i) {
    return typeof i.toJSON == "function";
  }
  function Dy(i, n) {
    const r = Object.entries(i);
    return r.length === 0 ? "{}" : n.length > $p ? "[" + My(i) + "]" : "{ " + r.map(
      ([s, u]) => s + ": " + ga(u, n)
    ).join(", ") + " }";
  }
  function jy(i, n) {
    if (i.length === 0)
      return "[]";
    if (n.length > $p)
      return "[Array]";
    const r = Math.min(xy, i.length), a = i.length - r, s = [];
    for (let u = 0; u < r; ++u)
      s.push(ga(i[u], n));
    return a === 1 ? s.push("... 1 more item") : a > 1 && s.push(`... ${a} more items`), "[" + s.join(", ") + "]";
  }
  function My(i) {
    const n = Object.prototype.toString.call(i).replace(/^\[object /, "").replace(/]$/, "");
    if (n === "Object" && typeof i.constructor == "function") {
      const r = i.constructor.name;
      if (typeof r == "string" && r !== "")
        return r;
    }
    return n;
  }
  var Ry = { version: "v18.20.4", versions: { node: "18.20.4", acorn: "8.11.3", ada: "2.7.8", ares: "1.28.1", base64: "0.5.2", brotli: "1.0.9", cjs_module_lexer: "1.2.2", cldr: "44.1", icu: "74.2", llhttp: "6.1.1", modules: "108", napi: "9", nghttp2: "1.61.0", nghttp3: "0.7.0", ngtcp2: "1.3.0", openssl: "3.0.13+quic", simdutf: "5.2.4", tz: "2024a", undici: "5.28.4", unicode: "15.1", uv: "1.44.2", uvwasi: "0.0.19", v8: "10.2.154.26-node.37", zlib: "1.3.0.1-motley" }, arch: "arm64", platform: "darwin", release: { name: "node", lts: "Hydrogen", sourceUrl: "https://nodejs.org/download/release/v18.20.4/node-v18.20.4.tar.gz", headersUrl: "https://nodejs.org/download/release/v18.20.4/node-v18.20.4-headers.tar.gz" }, moduleLoadList: ["Internal Binding builtins", "Internal Binding errors", "Internal Binding util", "NativeModule internal/errors", "Internal Binding config", "Internal Binding timers", "Internal Binding async_wrap", "Internal Binding task_queue", "Internal Binding symbols", "NativeModule internal/async_hooks", "Internal Binding constants", "Internal Binding types", "Internal Binding options", "NativeModule internal/options", "NativeModule internal/util", "NativeModule internal/util/types", "NativeModule internal/validators", "NativeModule internal/linkedlist", "NativeModule internal/priority_queue", "NativeModule internal/assert", "Internal Binding icu", "NativeModule internal/util/inspect", "NativeModule internal/util/debuglog", "NativeModule internal/timers", "NativeModule events", "Internal Binding buffer", "Internal Binding string_decoder", "NativeModule internal/buffer", "NativeModule buffer", "Internal Binding messaging", "NativeModule internal/worker/js_transferable", "Internal Binding process_methods", "NativeModule internal/process/per_thread", "Internal Binding credentials", "NativeModule internal/process/promises", "NativeModule internal/fixed_queue", "NativeModule async_hooks", "NativeModule internal/process/task_queues", "NativeModule timers", "Internal Binding trace_events", "NativeModule internal/constants", "NativeModule path", "Internal Binding contextify", "NativeModule internal/vm", "NativeModule internal/process/execution", "NativeModule internal/process/warning", "NativeModule internal/querystring", "NativeModule querystring", "Internal Binding url", "Internal Binding blob", "NativeModule internal/url", "NativeModule internal/source_map/source_map_cache", "NativeModule internal/console/constructor", "NativeModule internal/console/global", "NativeModule internal/util/inspector", "Internal Binding inspector", "NativeModule util", "NativeModule internal/webidl", "Internal Binding performance", "NativeModule internal/perf/utils", "NativeModule internal/event_target", "Internal Binding mksnapshot", "NativeModule internal/v8/startup_snapshot", "NativeModule internal/process/signal", "Internal Binding fs", "NativeModule internal/fs/utils", "NativeModule fs", "NativeModule internal/idna", "NativeModule url", "NativeModule internal/modules/helpers", "NativeModule internal/modules/package_json_reader", "Internal Binding module_wrap", "NativeModule internal/modules/cjs/loader", "NativeModule internal/process/pre_execution", "NativeModule internal/modules/esm/utils", "NativeModule internal/vm/module", "NativeModule internal/inspector_async_hook", "Internal Binding wasm_web_api", "Internal Binding worker", "NativeModule internal/modules/run_main", "NativeModule internal/net", "NativeModule internal/dns/utils", "NativeModule internal/modules/esm/loader", "NativeModule internal/process/esm_loader", "NativeModule internal/modules/esm/assert", "NativeModule internal/modules/esm/module_map", "NativeModule internal/modules/esm/translators", "NativeModule internal/modules/esm/package_config", "NativeModule internal/modules/esm/formats", "NativeModule internal/modules/esm/get_format", "NativeModule internal/modules/esm/resolve", "NativeModule internal/modules/esm/handle_process_exit", "NativeModule internal/modules/esm/module_job", "NativeModule internal/modules/esm/load", "NativeModule internal/fs/rimraf", "Internal Binding fs_dir", "NativeModule internal/fs/dir", "NativeModule string_decoder", "Internal Binding fs_event_wrap", "Internal Binding uv", "NativeModule internal/fs/watchers", "NativeModule internal/streams/utils", "NativeModule internal/readline/utils", "NativeModule internal/readline/callbacks", "NativeModule internal/readline/interface", "NativeModule internal/fs/promises", "NativeModule internal/encoding", "NativeModule internal/perf/performance_entry", "NativeModule internal/perf/observe", "NativeModule internal/perf/resource_timing", "NativeModule internal/perf/nodetiming", "NativeModule internal/abort_controller", "NativeModule internal/streams/end-of-stream", "NativeModule internal/streams/destroy", "NativeModule internal/streams/legacy", "NativeModule internal/streams/add-abort-signal", "NativeModule internal/streams/buffer_list", "NativeModule internal/streams/state", "NativeModule internal/streams/from", "NativeModule internal/streams/readable", "NativeModule internal/streams/writable", "NativeModule internal/streams/duplex", "NativeModule internal/streams/pipeline", "NativeModule internal/streams/compose", "NativeModule internal/streams/operators", "NativeModule stream/promises", "NativeModule internal/streams/transform", "NativeModule internal/streams/passthrough", "NativeModule stream", "NativeModule internal/worker/io", "NativeModule internal/structured_clone", "NativeModule internal/perf/usertiming", "NativeModule internal/perf/event_loop_utilization", "NativeModule internal/histogram", "NativeModule internal/perf/timerify", "NativeModule internal/perf/performance", "NativeModule internal/perf/event_loop_delay", "NativeModule perf_hooks", "NativeModule internal/modules/esm/initialize_import_meta", "NativeModule internal/deps/cjs-module-lexer/dist/lexer", "Internal Binding stream_wrap", "Internal Binding tcp_wrap", "Internal Binding pipe_wrap", "NativeModule internal/stream_base_commons", "Internal Binding dtrace", "NativeModule internal/dtrace", "NativeModule net", "Internal Binding tty_wrap", "NativeModule internal/tty", "NativeModule tty", "Internal Binding block_list", "NativeModule internal/socketaddress", "NativeModule internal/blocklist", "Internal Binding os", "NativeModule os", "Internal Binding zlib", "NativeModule zlib", "Internal Binding crypto", "Internal Binding cares_wrap", "NativeModule internal/crypto/hashnames", "NativeModule internal/crypto/util", "NativeModule internal/tls/secure-context", "NativeModule _tls_common", "NativeModule internal/crypto/random", "NativeModule internal/crypto/pbkdf2", "NativeModule internal/crypto/scrypt", "NativeModule internal/crypto/keys", "NativeModule internal/crypto/hkdf", "NativeModule internal/crypto/keygen", "NativeModule internal/crypto/diffiehellman", "NativeModule internal/streams/lazy_transform", "NativeModule internal/crypto/cipher", "NativeModule internal/crypto/sig", "NativeModule internal/crypto/hash", "NativeModule internal/crypto/x509", "NativeModule internal/crypto/certificate", "NativeModule crypto", "Internal Binding js_stream", "NativeModule internal/js_stream_socket", "Internal Binding tls_wrap", "NativeModule _tls_wrap", "NativeModule internal/tls/secure-pair", "NativeModule tls", "NativeModule internal/fs/streams", "NativeModule fs/promises", "NativeModule internal/util/parse_args/utils", "NativeModule internal/util/parse_args/parse_args", "NativeModule internal/mime", "NativeModule internal/source_map/source_map", "NativeModule module", "Internal Binding udp_wrap", "NativeModule internal/dgram", "NativeModule diagnostics_channel", "NativeModule dgram", "Internal Binding process_wrap", "NativeModule internal/socket_list", "Internal Binding spawn_sync", "NativeModule internal/child_process", "NativeModule child_process", "NativeModule _http_agent", "Internal Binding http_parser", "NativeModule internal/freelist", "NativeModule _http_incoming", "NativeModule _http_common", "NativeModule internal/http", "NativeModule _http_outgoing", "NativeModule _http_client", "NativeModule _http_server", "NativeModule http", "NativeModule https", "NativeModule internal/crypto/webcrypto", "NativeModule internal/dns/callback_resolver", "NativeModule dns", "NativeModule internal/dns/promises", "Internal Binding signal_wrap", "NativeModule internal/util/colors", "NativeModule internal/assert/assertion_error", "NativeModule internal/assert/calltracker", "NativeModule assert", "Internal Binding serdes", "Internal Binding profiler", "Internal Binding heap_utils", "NativeModule internal/heap_utils", "NativeModule internal/promise_hooks", "Internal Binding v8", "NativeModule v8", "NativeModule internal/error_serdes", "NativeModule internal/worker", "NativeModule worker_threads", "NativeModule internal/blob", "NativeModule internal/file", "NativeModule internal/readline/emitKeypressEvents", "NativeModule internal/readline/promises", "NativeModule readline/promises", "NativeModule readline", "NativeModule constants", "NativeModule process", "Internal Binding report", "NativeModule internal/process/report"], _events: { SIGWINCH: [null, null] }, _eventsCount: 17, domain: null, _exiting: !1, config: { target_defaults: { cflags: ["-msign-return-address=all"], default_configuration: "Release", defines: ["NODE_OPENSSL_CONF_NAME=nodejs_conf", "NODE_OPENSSL_HAS_QUIC", "ICU_NO_USER_DATA_OVERRIDE"], include_dirs: [], libraries: [] }, variables: { arm_fpu: "neon", asan: 0, coverage: !1, dcheck_always_on: 0, debug_nghttp2: !1, debug_node: !1, enable_lto: !1, enable_pgo_generate: !1, enable_pgo_use: !1, error_on_warn: !1, force_dynamic_crt: 0, host_arch: "arm64", icu_data_in: "../../deps/icu-tmp/icudt74l.dat", icu_endianness: "l", icu_gyp_path: "tools/icu/icu-generic.gyp", icu_path: "deps/icu-small", icu_small: !1, icu_ver_major: "74", is_debug: 0, libdir: "lib", llvm_version: "13.0", napi_build_version: "9", node_builtin_shareable_builtins: ["deps/cjs-module-lexer/lexer.js", "deps/cjs-module-lexer/dist/lexer.js", "deps/undici/undici.js"], node_byteorder: "little", node_debug_lib: !1, node_enable_d8: !1, node_enable_v8_vtunejit: !1, node_fipsinstall: !1, node_install_corepack: !0, node_install_npm: !0, node_library_files: ["lib/_http_agent.js", "lib/_http_client.js", "lib/_http_common.js", "lib/_http_incoming.js", "lib/_http_outgoing.js", "lib/_http_server.js", "lib/_stream_duplex.js", "lib/_stream_passthrough.js", "lib/_stream_readable.js", "lib/_stream_transform.js", "lib/_stream_wrap.js", "lib/_stream_writable.js", "lib/_tls_common.js", "lib/_tls_wrap.js", "lib/assert.js", "lib/assert/strict.js", "lib/async_hooks.js", "lib/buffer.js", "lib/child_process.js", "lib/cluster.js", "lib/console.js", "lib/constants.js", "lib/crypto.js", "lib/dgram.js", "lib/diagnostics_channel.js", "lib/dns.js", "lib/dns/promises.js", "lib/domain.js", "lib/events.js", "lib/fs.js", "lib/fs/promises.js", "lib/http.js", "lib/http2.js", "lib/https.js", "lib/inspector.js", "lib/internal/abort_controller.js", "lib/internal/assert.js", "lib/internal/assert/assertion_error.js", "lib/internal/assert/calltracker.js", "lib/internal/async_hooks.js", "lib/internal/blob.js", "lib/internal/blocklist.js", "lib/internal/bootstrap/browser.js", "lib/internal/bootstrap/node.js", "lib/internal/bootstrap/realm.js", "lib/internal/bootstrap/switches/does_not_own_process_state.js", "lib/internal/bootstrap/switches/does_own_process_state.js", "lib/internal/bootstrap/switches/is_main_thread.js", "lib/internal/bootstrap/switches/is_not_main_thread.js", "lib/internal/buffer.js", "lib/internal/child_process.js", "lib/internal/child_process/serialization.js", "lib/internal/cli_table.js", "lib/internal/cluster/child.js", "lib/internal/cluster/primary.js", "lib/internal/cluster/round_robin_handle.js", "lib/internal/cluster/shared_handle.js", "lib/internal/cluster/utils.js", "lib/internal/cluster/worker.js", "lib/internal/console/constructor.js", "lib/internal/console/global.js", "lib/internal/constants.js", "lib/internal/crypto/aes.js", "lib/internal/crypto/certificate.js", "lib/internal/crypto/cfrg.js", "lib/internal/crypto/cipher.js", "lib/internal/crypto/diffiehellman.js", "lib/internal/crypto/ec.js", "lib/internal/crypto/hash.js", "lib/internal/crypto/hashnames.js", "lib/internal/crypto/hkdf.js", "lib/internal/crypto/keygen.js", "lib/internal/crypto/keys.js", "lib/internal/crypto/mac.js", "lib/internal/crypto/pbkdf2.js", "lib/internal/crypto/random.js", "lib/internal/crypto/rsa.js", "lib/internal/crypto/scrypt.js", "lib/internal/crypto/sig.js", "lib/internal/crypto/util.js", "lib/internal/crypto/webcrypto.js", "lib/internal/crypto/webidl.js", "lib/internal/crypto/x509.js", "lib/internal/debugger/inspect.js", "lib/internal/debugger/inspect_client.js", "lib/internal/debugger/inspect_repl.js", "lib/internal/dgram.js", "lib/internal/dns/callback_resolver.js", "lib/internal/dns/promises.js", "lib/internal/dns/utils.js", "lib/internal/dtrace.js", "lib/internal/encoding.js", "lib/internal/error_serdes.js", "lib/internal/errors.js", "lib/internal/event_target.js", "lib/internal/file.js", "lib/internal/fixed_queue.js", "lib/internal/freelist.js", "lib/internal/freeze_intrinsics.js", "lib/internal/fs/cp/cp-sync.js", "lib/internal/fs/cp/cp.js", "lib/internal/fs/dir.js", "lib/internal/fs/promises.js", "lib/internal/fs/read_file_context.js", "lib/internal/fs/recursive_watch.js", "lib/internal/fs/rimraf.js", "lib/internal/fs/streams.js", "lib/internal/fs/sync_write_stream.js", "lib/internal/fs/utils.js", "lib/internal/fs/watchers.js", "lib/internal/heap_utils.js", "lib/internal/histogram.js", "lib/internal/http.js", "lib/internal/http2/compat.js", "lib/internal/http2/core.js", "lib/internal/http2/util.js", "lib/internal/idna.js", "lib/internal/inspector_async_hook.js", "lib/internal/js_stream_socket.js", "lib/internal/legacy/processbinding.js", "lib/internal/linkedlist.js", "lib/internal/main/check_syntax.js", "lib/internal/main/environment.js", "lib/internal/main/eval_stdin.js", "lib/internal/main/eval_string.js", "lib/internal/main/inspect.js", "lib/internal/main/mksnapshot.js", "lib/internal/main/print_help.js", "lib/internal/main/prof_process.js", "lib/internal/main/repl.js", "lib/internal/main/run_main_module.js", "lib/internal/main/single_executable_application.js", "lib/internal/main/test_runner.js", "lib/internal/main/watch_mode.js", "lib/internal/main/worker_thread.js", "lib/internal/mime.js", "lib/internal/modules/cjs/loader.js", "lib/internal/modules/esm/assert.js", "lib/internal/modules/esm/create_dynamic_module.js", "lib/internal/modules/esm/fetch_module.js", "lib/internal/modules/esm/formats.js", "lib/internal/modules/esm/get_format.js", "lib/internal/modules/esm/handle_process_exit.js", "lib/internal/modules/esm/hooks.js", "lib/internal/modules/esm/initialize_import_meta.js", "lib/internal/modules/esm/load.js", "lib/internal/modules/esm/loader.js", "lib/internal/modules/esm/module_job.js", "lib/internal/modules/esm/module_map.js", "lib/internal/modules/esm/package_config.js", "lib/internal/modules/esm/resolve.js", "lib/internal/modules/esm/shared_constants.js", "lib/internal/modules/esm/translators.js", "lib/internal/modules/esm/utils.js", "lib/internal/modules/esm/worker.js", "lib/internal/modules/helpers.js", "lib/internal/modules/package_json_reader.js", "lib/internal/modules/run_main.js", "lib/internal/net.js", "lib/internal/options.js", "lib/internal/per_context/domexception.js", "lib/internal/per_context/messageport.js", "lib/internal/per_context/primordials.js", "lib/internal/perf/event_loop_delay.js", "lib/internal/perf/event_loop_utilization.js", "lib/internal/perf/nodetiming.js", "lib/internal/perf/observe.js", "lib/internal/perf/performance.js", "lib/internal/perf/performance_entry.js", "lib/internal/perf/resource_timing.js", "lib/internal/perf/timerify.js", "lib/internal/perf/usertiming.js", "lib/internal/perf/utils.js", "lib/internal/policy/manifest.js", "lib/internal/policy/sri.js", "lib/internal/priority_queue.js", "lib/internal/process/esm_loader.js", "lib/internal/process/execution.js", "lib/internal/process/per_thread.js", "lib/internal/process/policy.js", "lib/internal/process/pre_execution.js", "lib/internal/process/promises.js", "lib/internal/process/report.js", "lib/internal/process/signal.js", "lib/internal/process/task_queues.js", "lib/internal/process/warning.js", "lib/internal/process/worker_thread_only.js", "lib/internal/promise_hooks.js", "lib/internal/querystring.js", "lib/internal/readline/callbacks.js", "lib/internal/readline/emitKeypressEvents.js", "lib/internal/readline/interface.js", "lib/internal/readline/promises.js", "lib/internal/readline/utils.js", "lib/internal/repl.js", "lib/internal/repl/await.js", "lib/internal/repl/history.js", "lib/internal/repl/utils.js", "lib/internal/socket_list.js", "lib/internal/socketaddress.js", "lib/internal/source_map/prepare_stack_trace.js", "lib/internal/source_map/source_map.js", "lib/internal/source_map/source_map_cache.js", "lib/internal/stream_base_commons.js", "lib/internal/streams/add-abort-signal.js", "lib/internal/streams/buffer_list.js", "lib/internal/streams/compose.js", "lib/internal/streams/destroy.js", "lib/internal/streams/duplex.js", "lib/internal/streams/duplexify.js", "lib/internal/streams/end-of-stream.js", "lib/internal/streams/from.js", "lib/internal/streams/lazy_transform.js", "lib/internal/streams/legacy.js", "lib/internal/streams/operators.js", "lib/internal/streams/passthrough.js", "lib/internal/streams/pipeline.js", "lib/internal/streams/readable.js", "lib/internal/streams/state.js", "lib/internal/streams/transform.js", "lib/internal/streams/utils.js", "lib/internal/streams/writable.js", "lib/internal/structured_clone.js", "lib/internal/test/binding.js", "lib/internal/test/transfer.js", "lib/internal/test_runner/coverage.js", "lib/internal/test_runner/harness.js", "lib/internal/test_runner/mock/mock.js", "lib/internal/test_runner/mock/mock_timers.js", "lib/internal/test_runner/reporter/dot.js", "lib/internal/test_runner/reporter/junit.js", "lib/internal/test_runner/reporter/spec.js", "lib/internal/test_runner/reporter/tap.js", "lib/internal/test_runner/reporter/v8-serializer.js", "lib/internal/test_runner/runner.js", "lib/internal/test_runner/test.js", "lib/internal/test_runner/tests_stream.js", "lib/internal/test_runner/utils.js", "lib/internal/timers.js", "lib/internal/tls/secure-context.js", "lib/internal/tls/secure-pair.js", "lib/internal/trace_events_async_hooks.js", "lib/internal/tty.js", "lib/internal/url.js", "lib/internal/util.js", "lib/internal/util/colors.js", "lib/internal/util/comparisons.js", "lib/internal/util/debuglog.js", "lib/internal/util/inspect.js", "lib/internal/util/inspector.js", "lib/internal/util/iterable_weak_map.js", "lib/internal/util/parse_args/parse_args.js", "lib/internal/util/parse_args/utils.js", "lib/internal/util/types.js", "lib/internal/v8/startup_snapshot.js", "lib/internal/v8_prof_polyfill.js", "lib/internal/v8_prof_processor.js", "lib/internal/validators.js", "lib/internal/vm.js", "lib/internal/vm/module.js", "lib/internal/wasm_web_api.js", "lib/internal/watch_mode/files_watcher.js", "lib/internal/watchdog.js", "lib/internal/webidl.js", "lib/internal/webstreams/adapters.js", "lib/internal/webstreams/compression.js", "lib/internal/webstreams/encoding.js", "lib/internal/webstreams/queuingstrategies.js", "lib/internal/webstreams/readablestream.js", "lib/internal/webstreams/transfer.js", "lib/internal/webstreams/transformstream.js", "lib/internal/webstreams/util.js", "lib/internal/webstreams/writablestream.js", "lib/internal/worker.js", "lib/internal/worker/io.js", "lib/internal/worker/js_transferable.js", "lib/module.js", "lib/net.js", "lib/os.js", "lib/path.js", "lib/path/posix.js", "lib/path/win32.js", "lib/perf_hooks.js", "lib/process.js", "lib/punycode.js", "lib/querystring.js", "lib/readline.js", "lib/readline/promises.js", "lib/repl.js", "lib/stream.js", "lib/stream/consumers.js", "lib/stream/promises.js", "lib/stream/web.js", "lib/string_decoder.js", "lib/sys.js", "lib/test.js", "lib/test/reporters.js", "lib/timers.js", "lib/timers/promises.js", "lib/tls.js", "lib/trace_events.js", "lib/tty.js", "lib/url.js", "lib/util.js", "lib/util/types.js", "lib/v8.js", "lib/vm.js", "lib/wasi.js", "lib/worker_threads.js", "lib/zlib.js"], node_module_version: 108, node_no_browser_globals: !1, node_prefix: "/", node_release_urlbase: "https://nodejs.org/download/release/", node_shared: !1, node_shared_brotli: !1, node_shared_cares: !1, node_shared_http_parser: !1, node_shared_libuv: !1, node_shared_nghttp2: !1, node_shared_nghttp3: !1, node_shared_ngtcp2: !1, node_shared_openssl: !1, node_shared_zlib: !1, node_tag: "", node_target_type: "executable", node_use_bundled_v8: !0, node_use_dtrace: !0, node_use_etw: !1, node_use_node_code_cache: !0, node_use_node_snapshot: !0, node_use_openssl: !0, node_use_v8_platform: !0, node_with_ltcg: !1, node_without_node_options: !1, openssl_is_fips: !1, openssl_quic: !0, ossfuzz: !1, shlib_suffix: "108.dylib", single_executable_application: !0, target_arch: "arm64", v8_enable_31bit_smis_on_64bit_arch: 0, v8_enable_gdbjit: 0, v8_enable_hugepage: 0, v8_enable_i18n_support: 1, v8_enable_inspector: 1, v8_enable_javascript_promise_hooks: 1, v8_enable_lite_mode: 0, v8_enable_object_print: 1, v8_enable_pointer_compression: 0, v8_enable_shared_ro_heap: 1, v8_enable_webassembly: 1, v8_no_strict_aliasing: 1, v8_optimized_debug: 1, v8_promise_internal_field_count: 1, v8_random_seed: 0, v8_trace_maps: 0, v8_use_siphash: 1, want_separate_host_toolset: 0, xcode_version: "13.0" } }, allowedNodeEnvironmentFlags: {}, features: { inspector: !0, debug: !1, uv: !0, ipv6: !0, tls_alpn: !0, tls_sni: !0, tls_ocsp: !0, tls: !0, cached_builtins: !0 }, sourceMapsEnabled: !1, stdout: { connecting: !1, _hadError: !1, _parent: null, _host: null, _closeAfterHandlingError: !1, _readableState: { state: 4144, highWaterMark: 0, buffer: { head: null, tail: null, length: 0 }, length: 0, pipes: [], flowing: null, errored: null, defaultEncoding: "utf8", awaitDrainWriters: null, decoder: null, encoding: null }, _events: {}, _eventsCount: 1, _writableState: { objectMode: !1, highWaterMark: 16384, finalCalled: !1, needDrain: !1, ending: !1, ended: !1, finished: !1, destroyed: !1, decodeStrings: !1, defaultEncoding: "utf8", length: 0, writing: !1, corked: 0, sync: !0, bufferProcessing: !1, writecb: null, writelen: 0, afterWriteTickInfo: null, buffered: [], bufferedIndex: 0, allBuffers: !0, allNoop: !0, pendingcb: 0, constructed: !0, prefinished: !1, errorEmitted: !1, emitClose: !1, autoDestroy: !0, errored: null, closed: !1, closeEmitted: !1 }, allowHalfOpen: !1, _sockname: null, _pendingData: null, _pendingEncoding: "", server: null, _server: null, columns: 80, rows: 11, _type: "tty", fd: 1, _isStdio: !0 }, stdin: { connecting: !1, _hadError: !1, _parent: null, _host: null, _closeAfterHandlingError: !1, _readableState: { state: 4144, highWaterMark: 0, buffer: { head: null, tail: null, length: 0 }, length: 0, pipes: [], flowing: null, errored: null, defaultEncoding: "utf8", awaitDrainWriters: null, decoder: null, encoding: null }, _events: {}, _eventsCount: 2, _writableState: { objectMode: !1, highWaterMark: 16384, finalCalled: !1, needDrain: !1, ending: !1, ended: !1, finished: !1, destroyed: !1, decodeStrings: !1, defaultEncoding: "utf8", length: 0, writing: !1, corked: 0, sync: !0, bufferProcessing: !1, writecb: null, writelen: 0, afterWriteTickInfo: null, buffered: [], bufferedIndex: 0, allBuffers: !0, allNoop: !0, pendingcb: 0, constructed: !0, prefinished: !1, errorEmitted: !1, emitClose: !1, autoDestroy: !0, errored: null, closed: !1, closeEmitted: !1 }, allowHalfOpen: !1, _sockname: null, _pendingData: null, _pendingEncoding: "", server: null, _server: null, isRaw: !1, isTTY: !0, fd: 0 }, stderr: { connecting: !1, _hadError: !1, _parent: null, _host: null, _closeAfterHandlingError: !1, _readableState: { state: 4144, highWaterMark: 0, buffer: { head: null, tail: null, length: 0 }, length: 0, pipes: [], flowing: null, errored: null, defaultEncoding: "utf8", awaitDrainWriters: null, decoder: null, encoding: null }, _events: {}, _eventsCount: 1, _writableState: { objectMode: !1, highWaterMark: 16384, finalCalled: !1, needDrain: !1, ending: !1, ended: !1, finished: !1, destroyed: !1, decodeStrings: !1, defaultEncoding: "utf8", length: 0, writing: !1, corked: 0, sync: !0, bufferProcessing: !1, writecb: null, writelen: 0, afterWriteTickInfo: null, buffered: [], bufferedIndex: 0, allBuffers: !0, allNoop: !0, pendingcb: 0, constructed: !0, prefinished: !1, errorEmitted: !1, emitClose: !1, autoDestroy: !0, errored: null, closed: !1, closeEmitted: !1 }, allowHalfOpen: !1, _sockname: null, _pendingData: null, _pendingEncoding: "", server: null, _server: null, columns: 80, rows: 11, _type: "tty", fd: 2, _isStdio: !0 }, env: { NVM_INC: "/Users/arthurrosch/.nvm/versions/node/v18.20.4/include/node", TERM_PROGRAM: "vscode", NODE: "/Users/arthurrosch/.nvm/versions/node/v18.20.4/bin/node", INIT_CWD: "/Users/arthurrosch/Desktop/Projetos/muve-player/player", NVM_CD_FLAGS: "-q", TERM: "xterm-256color", SHELL: "/bin/zsh", HOMEBREW_REPOSITORY: "/opt/homebrew", TMPDIR: "/var/folders/4x/7syyxjms1fbb68q3xm5mvmhw0000gn/T/", npm_config_global_prefix: "/Users/arthurrosch/.nvm/versions/node/v18.20.4", TERM_PROGRAM_VERSION: "1.95.1", ZDOTDIR: "/Users/arthurrosch", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", npm_config_noproxy: "", npm_config_local_prefix: "/Users/arthurrosch/Desktop/Projetos/muve-player/player", NVM_DIR: "/Users/arthurrosch/.nvm", USER: "arthurrosch", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/arthurrosch/.nvm/versions/node/v18.20.4/etc/npmrc", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.6BGQg0Qkwi/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x47", npm_execpath: "/Users/arthurrosch/.nvm/versions/node/v18.20.4/lib/node_modules/npm/bin/npm-cli.js", PATH: "/Users/arthurrosch/Desktop/Projetos/muve-player/player/node_modules/.bin:/Users/arthurrosch/Desktop/Projetos/muve-player/node_modules/.bin:/Users/arthurrosch/Desktop/Projetos/node_modules/.bin:/Users/arthurrosch/Desktop/node_modules/.bin:/Users/arthurrosch/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/arthurrosch/.nvm/versions/node/v18.20.4/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/arthurrosch/.nvm/versions/node/v18.20.4/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/opt/local/bin:/opt/local/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/opt/X11/bin:/Library/Apple/usr/bin:/Users/arthurrosch/.nvm/versions/node/v18.20.4/bin", npm_package_json: "/Users/arthurrosch/Desktop/Projetos/muve-player/player/package.json", npm_config_userconfig: "/Users/arthurrosch/.npmrc", npm_config_init_module: "/Users/arthurrosch/.npm-init.js", USER_ZDOTDIR: "/Users/arthurrosch", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/arthurrosch/Desktop/Projetos/muve-player/player", npm_lifecycle_event: "build", EDITOR: "vi", npm_package_name: "react-radix-tailwind", LANG: "pt_BR.UTF-8", npm_config_npm_version: "10.7.0", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", XPC_FLAGS: "0x0", npm_config_node_gyp: "/Users/arthurrosch/.nvm/versions/node/v18.20.4/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "1.0.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", SHLVL: "2", HOME: "/Users/arthurrosch", VSCODE_GIT_ASKPASS_MAIN: "/private/var/folders/4x/7syyxjms1fbb68q3xm5mvmhw0000gn/T/AppTranslocation/5EE0B53D-BE41-4F1F-9DCC-E45C7B276D7A/d/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", HOMEBREW_PREFIX: "/opt/homebrew", npm_config_cache: "/Users/arthurrosch/.npm", LOGNAME: "arthurrosch", npm_lifecycle_script: "tsc && vite build", VSCODE_GIT_IPC_HANDLE: "/var/folders/4x/7syyxjms1fbb68q3xm5mvmhw0000gn/T/vscode-git-8eab1c0164.sock", NVM_BIN: "/Users/arthurrosch/.nvm/versions/node/v18.20.4/bin", npm_config_user_agent: "npm/10.7.0 node/v18.20.4 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/private/var/folders/4x/7syyxjms1fbb68q3xm5mvmhw0000gn/T/AppTranslocation/5EE0B53D-BE41-4F1F-9DCC-E45C7B276D7A/d/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/private/var/folders/4x/7syyxjms1fbb68q3xm5mvmhw0000gn/T/AppTranslocation/5EE0B53D-BE41-4F1F-9DCC-E45C7B276D7A/d/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:", HOMEBREW_CELLAR: "/opt/homebrew/Cellar", DISPLAY: "/private/tmp/com.apple.launchd.hVSUC5bXco/org.xquartz:0", npm_node_execpath: "/Users/arthurrosch/.nvm/versions/node/v18.20.4/bin/node", npm_config_prefix: "/Users/arthurrosch/.nvm/versions/node/v18.20.4", COLORTERM: "truecolor", _: "/Users/arthurrosch/Desktop/Projetos/muve-player/player/node_modules/.bin/vite", NINJA_ENV: "parentDisabled", NODE_ENV: "production" }, title: "node", argv: ["/Users/arthurrosch/.nvm/versions/node/v18.20.4/bin/node", "/Users/arthurrosch/Desktop/Projetos/muve-player/player/node_modules/.bin/vite", "build"], execArgv: [], pid: 75632, ppid: 75622, execPath: "/Users/arthurrosch/.nvm/versions/node/v18.20.4/bin/node", debugPort: 9229, argv0: "node", _preload_modules: [], report: { directory: "", filename: "", compact: !1, signal: "SIGUSR2", reportOnFatalError: !1, reportOnSignal: !1, reportOnUncaughtException: !1 }, __signal_exit_emitter__: { _events: {}, _eventsCount: 1, _maxListeners: null, count: 1, emitted: {}, infinite: !0 } };
  const Py = globalThis.process && // eslint-disable-next-line no-undef
  Ry.env.NODE_ENV === "production", Fy = (
    /* c8 ignore next 6 */
    // FIXME: https://github.com/graphql/graphql-js/issues/2317
    Py ? function(n, r) {
      return n instanceof r;
    } : function(n, r) {
      if (n instanceof r)
        return !0;
      if (typeof n == "object" && n !== null) {
        var a;
        const s = r.prototype[Symbol.toStringTag], u = (
          // We still need to support constructor's name to detect conflicts with older versions of this library.
          Symbol.toStringTag in n ? n[Symbol.toStringTag] : (a = n.constructor) === null || a === void 0 ? void 0 : a.name
        );
        if (s === u) {
          const f = pu(n);
          throw new Error(`Cannot use ${s} "${f}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
        }
      }
      return !1;
    }
  );
  class Hp {
    constructor(n, r = "GraphQL request", a = {
      line: 1,
      column: 1
    }) {
      typeof n == "string" || ia(!1, `Body must be a string. Received: ${pu(n)}.`), this.body = n, this.name = r, this.locationOffset = a, this.locationOffset.line > 0 || ia(
        !1,
        "line in locationOffset is 1-indexed and must be positive."
      ), this.locationOffset.column > 0 || ia(
        !1,
        "column in locationOffset is 1-indexed and must be positive."
      );
    }
    get [Symbol.toStringTag]() {
      return "Source";
    }
  }
  function Ay(i) {
    return Fy(i, Hp);
  }
  function Ly(i, n) {
    return new zy(i, n).parseDocument();
  }
  class zy {
    constructor(n, r = {}) {
      const a = Ay(n) ? n : new Hp(n);
      this._lexer = new yy(a), this._options = r, this._tokenCounter = 0;
    }
    /**
     * Converts a name lex token into a name parse node.
     */
    parseName() {
      const n = this.expectToken(P.NAME);
      return this.node(n, {
        kind: W.NAME,
        value: n.value
      });
    }
    // Implements the parsing rules in the Document section.
    /**
     * Document : Definition+
     */
    parseDocument() {
      return this.node(this._lexer.token, {
        kind: W.DOCUMENT,
        definitions: this.many(
          P.SOF,
          this.parseDefinition,
          P.EOF
        )
      });
    }
    /**
     * Definition :
     *   - ExecutableDefinition
     *   - TypeSystemDefinition
     *   - TypeSystemExtension
     *
     * ExecutableDefinition :
     *   - OperationDefinition
     *   - FragmentDefinition
     *
     * TypeSystemDefinition :
     *   - SchemaDefinition
     *   - TypeDefinition
     *   - DirectiveDefinition
     *
     * TypeDefinition :
     *   - ScalarTypeDefinition
     *   - ObjectTypeDefinition
     *   - InterfaceTypeDefinition
     *   - UnionTypeDefinition
     *   - EnumTypeDefinition
     *   - InputObjectTypeDefinition
     */
    parseDefinition() {
      if (this.peek(P.BRACE_L))
        return this.parseOperationDefinition();
      const n = this.peekDescription(), r = n ? this._lexer.lookahead() : this._lexer.token;
      if (r.kind === P.NAME) {
        switch (r.value) {
          case "schema":
            return this.parseSchemaDefinition();
          case "scalar":
            return this.parseScalarTypeDefinition();
          case "type":
            return this.parseObjectTypeDefinition();
          case "interface":
            return this.parseInterfaceTypeDefinition();
          case "union":
            return this.parseUnionTypeDefinition();
          case "enum":
            return this.parseEnumTypeDefinition();
          case "input":
            return this.parseInputObjectTypeDefinition();
          case "directive":
            return this.parseDirectiveDefinition();
        }
        if (n)
          throw He(
            this._lexer.source,
            this._lexer.token.start,
            "Unexpected description, descriptions are supported only on type definitions."
          );
        switch (r.value) {
          case "query":
          case "mutation":
          case "subscription":
            return this.parseOperationDefinition();
          case "fragment":
            return this.parseFragmentDefinition();
          case "extend":
            return this.parseTypeSystemExtension();
        }
      }
      throw this.unexpected(r);
    }
    // Implements the parsing rules in the Operations section.
    /**
     * OperationDefinition :
     *  - SelectionSet
     *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
     */
    parseOperationDefinition() {
      const n = this._lexer.token;
      if (this.peek(P.BRACE_L))
        return this.node(n, {
          kind: W.OPERATION_DEFINITION,
          operation: Sr.QUERY,
          name: void 0,
          variableDefinitions: [],
          directives: [],
          selectionSet: this.parseSelectionSet()
        });
      const r = this.parseOperationType();
      let a;
      return this.peek(P.NAME) && (a = this.parseName()), this.node(n, {
        kind: W.OPERATION_DEFINITION,
        operation: r,
        name: a,
        variableDefinitions: this.parseVariableDefinitions(),
        directives: this.parseDirectives(!1),
        selectionSet: this.parseSelectionSet()
      });
    }
    /**
     * OperationType : one of query mutation subscription
     */
    parseOperationType() {
      const n = this.expectToken(P.NAME);
      switch (n.value) {
        case "query":
          return Sr.QUERY;
        case "mutation":
          return Sr.MUTATION;
        case "subscription":
          return Sr.SUBSCRIPTION;
      }
      throw this.unexpected(n);
    }
    /**
     * VariableDefinitions : ( VariableDefinition+ )
     */
    parseVariableDefinitions() {
      return this.optionalMany(
        P.PAREN_L,
        this.parseVariableDefinition,
        P.PAREN_R
      );
    }
    /**
     * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
     */
    parseVariableDefinition() {
      return this.node(this._lexer.token, {
        kind: W.VARIABLE_DEFINITION,
        variable: this.parseVariable(),
        type: (this.expectToken(P.COLON), this.parseTypeReference()),
        defaultValue: this.expectOptionalToken(P.EQUALS) ? this.parseConstValueLiteral() : void 0,
        directives: this.parseConstDirectives()
      });
    }
    /**
     * Variable : $ Name
     */
    parseVariable() {
      const n = this._lexer.token;
      return this.expectToken(P.DOLLAR), this.node(n, {
        kind: W.VARIABLE,
        name: this.parseName()
      });
    }
    /**
     * ```
     * SelectionSet : { Selection+ }
     * ```
     */
    parseSelectionSet() {
      return this.node(this._lexer.token, {
        kind: W.SELECTION_SET,
        selections: this.many(
          P.BRACE_L,
          this.parseSelection,
          P.BRACE_R
        )
      });
    }
    /**
     * Selection :
     *   - Field
     *   - FragmentSpread
     *   - InlineFragment
     */
    parseSelection() {
      return this.peek(P.SPREAD) ? this.parseFragment() : this.parseField();
    }
    /**
     * Field : Alias? Name Arguments? Directives? SelectionSet?
     *
     * Alias : Name :
     */
    parseField() {
      const n = this._lexer.token, r = this.parseName();
      let a, s;
      return this.expectOptionalToken(P.COLON) ? (a = r, s = this.parseName()) : s = r, this.node(n, {
        kind: W.FIELD,
        alias: a,
        name: s,
        arguments: this.parseArguments(!1),
        directives: this.parseDirectives(!1),
        selectionSet: this.peek(P.BRACE_L) ? this.parseSelectionSet() : void 0
      });
    }
    /**
     * Arguments[Const] : ( Argument[?Const]+ )
     */
    parseArguments(n) {
      const r = n ? this.parseConstArgument : this.parseArgument;
      return this.optionalMany(P.PAREN_L, r, P.PAREN_R);
    }
    /**
     * Argument[Const] : Name : Value[?Const]
     */
    parseArgument(n = !1) {
      const r = this._lexer.token, a = this.parseName();
      return this.expectToken(P.COLON), this.node(r, {
        kind: W.ARGUMENT,
        name: a,
        value: this.parseValueLiteral(n)
      });
    }
    parseConstArgument() {
      return this.parseArgument(!0);
    }
    // Implements the parsing rules in the Fragments section.
    /**
     * Corresponds to both FragmentSpread and InlineFragment in the spec.
     *
     * FragmentSpread : ... FragmentName Directives?
     *
     * InlineFragment : ... TypeCondition? Directives? SelectionSet
     */
    parseFragment() {
      const n = this._lexer.token;
      this.expectToken(P.SPREAD);
      const r = this.expectOptionalKeyword("on");
      return !r && this.peek(P.NAME) ? this.node(n, {
        kind: W.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(!1)
      }) : this.node(n, {
        kind: W.INLINE_FRAGMENT,
        typeCondition: r ? this.parseNamedType() : void 0,
        directives: this.parseDirectives(!1),
        selectionSet: this.parseSelectionSet()
      });
    }
    /**
     * FragmentDefinition :
     *   - fragment FragmentName on TypeCondition Directives? SelectionSet
     *
     * TypeCondition : NamedType
     */
    parseFragmentDefinition() {
      const n = this._lexer.token;
      return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(n, {
        kind: W.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
        directives: this.parseDirectives(!1),
        selectionSet: this.parseSelectionSet()
      }) : this.node(n, {
        kind: W.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
        directives: this.parseDirectives(!1),
        selectionSet: this.parseSelectionSet()
      });
    }
    /**
     * FragmentName : Name but not `on`
     */
    parseFragmentName() {
      if (this._lexer.token.value === "on")
        throw this.unexpected();
      return this.parseName();
    }
    // Implements the parsing rules in the Values section.
    /**
     * Value[Const] :
     *   - [~Const] Variable
     *   - IntValue
     *   - FloatValue
     *   - StringValue
     *   - BooleanValue
     *   - NullValue
     *   - EnumValue
     *   - ListValue[?Const]
     *   - ObjectValue[?Const]
     *
     * BooleanValue : one of `true` `false`
     *
     * NullValue : `null`
     *
     * EnumValue : Name but not `true`, `false` or `null`
     */
    parseValueLiteral(n) {
      const r = this._lexer.token;
      switch (r.kind) {
        case P.BRACKET_L:
          return this.parseList(n);
        case P.BRACE_L:
          return this.parseObject(n);
        case P.INT:
          return this.advanceLexer(), this.node(r, {
            kind: W.INT,
            value: r.value
          });
        case P.FLOAT:
          return this.advanceLexer(), this.node(r, {
            kind: W.FLOAT,
            value: r.value
          });
        case P.STRING:
        case P.BLOCK_STRING:
          return this.parseStringLiteral();
        case P.NAME:
          switch (this.advanceLexer(), r.value) {
            case "true":
              return this.node(r, {
                kind: W.BOOLEAN,
                value: !0
              });
            case "false":
              return this.node(r, {
                kind: W.BOOLEAN,
                value: !1
              });
            case "null":
              return this.node(r, {
                kind: W.NULL
              });
            default:
              return this.node(r, {
                kind: W.ENUM,
                value: r.value
              });
          }
        case P.DOLLAR:
          if (n)
            if (this.expectToken(P.DOLLAR), this._lexer.token.kind === P.NAME) {
              const a = this._lexer.token.value;
              throw He(
                this._lexer.source,
                r.start,
                `Unexpected variable "$${a}" in constant value.`
              );
            } else
              throw this.unexpected(r);
          return this.parseVariable();
        default:
          throw this.unexpected();
      }
    }
    parseConstValueLiteral() {
      return this.parseValueLiteral(!0);
    }
    parseStringLiteral() {
      const n = this._lexer.token;
      return this.advanceLexer(), this.node(n, {
        kind: W.STRING,
        value: n.value,
        block: n.kind === P.BLOCK_STRING
      });
    }
    /**
     * ListValue[Const] :
     *   - [ ]
     *   - [ Value[?Const]+ ]
     */
    parseList(n) {
      const r = () => this.parseValueLiteral(n);
      return this.node(this._lexer.token, {
        kind: W.LIST,
        values: this.any(P.BRACKET_L, r, P.BRACKET_R)
      });
    }
    /**
     * ```
     * ObjectValue[Const] :
     *   - { }
     *   - { ObjectField[?Const]+ }
     * ```
     */
    parseObject(n) {
      const r = () => this.parseObjectField(n);
      return this.node(this._lexer.token, {
        kind: W.OBJECT,
        fields: this.any(P.BRACE_L, r, P.BRACE_R)
      });
    }
    /**
     * ObjectField[Const] : Name : Value[?Const]
     */
    parseObjectField(n) {
      const r = this._lexer.token, a = this.parseName();
      return this.expectToken(P.COLON), this.node(r, {
        kind: W.OBJECT_FIELD,
        name: a,
        value: this.parseValueLiteral(n)
      });
    }
    // Implements the parsing rules in the Directives section.
    /**
     * Directives[Const] : Directive[?Const]+
     */
    parseDirectives(n) {
      const r = [];
      for (; this.peek(P.AT); )
        r.push(this.parseDirective(n));
      return r;
    }
    parseConstDirectives() {
      return this.parseDirectives(!0);
    }
    /**
     * ```
     * Directive[Const] : @ Name Arguments[?Const]?
     * ```
     */
    parseDirective(n) {
      const r = this._lexer.token;
      return this.expectToken(P.AT), this.node(r, {
        kind: W.DIRECTIVE,
        name: this.parseName(),
        arguments: this.parseArguments(n)
      });
    }
    // Implements the parsing rules in the Types section.
    /**
     * Type :
     *   - NamedType
     *   - ListType
     *   - NonNullType
     */
    parseTypeReference() {
      const n = this._lexer.token;
      let r;
      if (this.expectOptionalToken(P.BRACKET_L)) {
        const a = this.parseTypeReference();
        this.expectToken(P.BRACKET_R), r = this.node(n, {
          kind: W.LIST_TYPE,
          type: a
        });
      } else
        r = this.parseNamedType();
      return this.expectOptionalToken(P.BANG) ? this.node(n, {
        kind: W.NON_NULL_TYPE,
        type: r
      }) : r;
    }
    /**
     * NamedType : Name
     */
    parseNamedType() {
      return this.node(this._lexer.token, {
        kind: W.NAMED_TYPE,
        name: this.parseName()
      });
    }
    // Implements the parsing rules in the Type Definition section.
    peekDescription() {
      return this.peek(P.STRING) || this.peek(P.BLOCK_STRING);
    }
    /**
     * Description : StringValue
     */
    parseDescription() {
      if (this.peekDescription())
        return this.parseStringLiteral();
    }
    /**
     * ```
     * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
     * ```
     */
    parseSchemaDefinition() {
      const n = this._lexer.token, r = this.parseDescription();
      this.expectKeyword("schema");
      const a = this.parseConstDirectives(), s = this.many(
        P.BRACE_L,
        this.parseOperationTypeDefinition,
        P.BRACE_R
      );
      return this.node(n, {
        kind: W.SCHEMA_DEFINITION,
        description: r,
        directives: a,
        operationTypes: s
      });
    }
    /**
     * OperationTypeDefinition : OperationType : NamedType
     */
    parseOperationTypeDefinition() {
      const n = this._lexer.token, r = this.parseOperationType();
      this.expectToken(P.COLON);
      const a = this.parseNamedType();
      return this.node(n, {
        kind: W.OPERATION_TYPE_DEFINITION,
        operation: r,
        type: a
      });
    }
    /**
     * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
     */
    parseScalarTypeDefinition() {
      const n = this._lexer.token, r = this.parseDescription();
      this.expectKeyword("scalar");
      const a = this.parseName(), s = this.parseConstDirectives();
      return this.node(n, {
        kind: W.SCALAR_TYPE_DEFINITION,
        description: r,
        name: a,
        directives: s
      });
    }
    /**
     * ObjectTypeDefinition :
     *   Description?
     *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
     */
    parseObjectTypeDefinition() {
      const n = this._lexer.token, r = this.parseDescription();
      this.expectKeyword("type");
      const a = this.parseName(), s = this.parseImplementsInterfaces(), u = this.parseConstDirectives(), f = this.parseFieldsDefinition();
      return this.node(n, {
        kind: W.OBJECT_TYPE_DEFINITION,
        description: r,
        name: a,
        interfaces: s,
        directives: u,
        fields: f
      });
    }
    /**
     * ImplementsInterfaces :
     *   - implements `&`? NamedType
     *   - ImplementsInterfaces & NamedType
     */
    parseImplementsInterfaces() {
      return this.expectOptionalKeyword("implements") ? this.delimitedMany(P.AMP, this.parseNamedType) : [];
    }
    /**
     * ```
     * FieldsDefinition : { FieldDefinition+ }
     * ```
     */
    parseFieldsDefinition() {
      return this.optionalMany(
        P.BRACE_L,
        this.parseFieldDefinition,
        P.BRACE_R
      );
    }
    /**
     * FieldDefinition :
     *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
     */
    parseFieldDefinition() {
      const n = this._lexer.token, r = this.parseDescription(), a = this.parseName(), s = this.parseArgumentDefs();
      this.expectToken(P.COLON);
      const u = this.parseTypeReference(), f = this.parseConstDirectives();
      return this.node(n, {
        kind: W.FIELD_DEFINITION,
        description: r,
        name: a,
        arguments: s,
        type: u,
        directives: f
      });
    }
    /**
     * ArgumentsDefinition : ( InputValueDefinition+ )
     */
    parseArgumentDefs() {
      return this.optionalMany(
        P.PAREN_L,
        this.parseInputValueDef,
        P.PAREN_R
      );
    }
    /**
     * InputValueDefinition :
     *   - Description? Name : Type DefaultValue? Directives[Const]?
     */
    parseInputValueDef() {
      const n = this._lexer.token, r = this.parseDescription(), a = this.parseName();
      this.expectToken(P.COLON);
      const s = this.parseTypeReference();
      let u;
      this.expectOptionalToken(P.EQUALS) && (u = this.parseConstValueLiteral());
      const f = this.parseConstDirectives();
      return this.node(n, {
        kind: W.INPUT_VALUE_DEFINITION,
        description: r,
        name: a,
        type: s,
        defaultValue: u,
        directives: f
      });
    }
    /**
     * InterfaceTypeDefinition :
     *   - Description? interface Name Directives[Const]? FieldsDefinition?
     */
    parseInterfaceTypeDefinition() {
      const n = this._lexer.token, r = this.parseDescription();
      this.expectKeyword("interface");
      const a = this.parseName(), s = this.parseImplementsInterfaces(), u = this.parseConstDirectives(), f = this.parseFieldsDefinition();
      return this.node(n, {
        kind: W.INTERFACE_TYPE_DEFINITION,
        description: r,
        name: a,
        interfaces: s,
        directives: u,
        fields: f
      });
    }
    /**
     * UnionTypeDefinition :
     *   - Description? union Name Directives[Const]? UnionMemberTypes?
     */
    parseUnionTypeDefinition() {
      const n = this._lexer.token, r = this.parseDescription();
      this.expectKeyword("union");
      const a = this.parseName(), s = this.parseConstDirectives(), u = this.parseUnionMemberTypes();
      return this.node(n, {
        kind: W.UNION_TYPE_DEFINITION,
        description: r,
        name: a,
        directives: s,
        types: u
      });
    }
    /**
     * UnionMemberTypes :
     *   - = `|`? NamedType
     *   - UnionMemberTypes | NamedType
     */
    parseUnionMemberTypes() {
      return this.expectOptionalToken(P.EQUALS) ? this.delimitedMany(P.PIPE, this.parseNamedType) : [];
    }
    /**
     * EnumTypeDefinition :
     *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
     */
    parseEnumTypeDefinition() {
      const n = this._lexer.token, r = this.parseDescription();
      this.expectKeyword("enum");
      const a = this.parseName(), s = this.parseConstDirectives(), u = this.parseEnumValuesDefinition();
      return this.node(n, {
        kind: W.ENUM_TYPE_DEFINITION,
        description: r,
        name: a,
        directives: s,
        values: u
      });
    }
    /**
     * ```
     * EnumValuesDefinition : { EnumValueDefinition+ }
     * ```
     */
    parseEnumValuesDefinition() {
      return this.optionalMany(
        P.BRACE_L,
        this.parseEnumValueDefinition,
        P.BRACE_R
      );
    }
    /**
     * EnumValueDefinition : Description? EnumValue Directives[Const]?
     */
    parseEnumValueDefinition() {
      const n = this._lexer.token, r = this.parseDescription(), a = this.parseEnumValueName(), s = this.parseConstDirectives();
      return this.node(n, {
        kind: W.ENUM_VALUE_DEFINITION,
        description: r,
        name: a,
        directives: s
      });
    }
    /**
     * EnumValue : Name but not `true`, `false` or `null`
     */
    parseEnumValueName() {
      if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null")
        throw He(
          this._lexer.source,
          this._lexer.token.start,
          `${na(
            this._lexer.token
          )} is reserved and cannot be used for an enum value.`
        );
      return this.parseName();
    }
    /**
     * InputObjectTypeDefinition :
     *   - Description? input Name Directives[Const]? InputFieldsDefinition?
     */
    parseInputObjectTypeDefinition() {
      const n = this._lexer.token, r = this.parseDescription();
      this.expectKeyword("input");
      const a = this.parseName(), s = this.parseConstDirectives(), u = this.parseInputFieldsDefinition();
      return this.node(n, {
        kind: W.INPUT_OBJECT_TYPE_DEFINITION,
        description: r,
        name: a,
        directives: s,
        fields: u
      });
    }
    /**
     * ```
     * InputFieldsDefinition : { InputValueDefinition+ }
     * ```
     */
    parseInputFieldsDefinition() {
      return this.optionalMany(
        P.BRACE_L,
        this.parseInputValueDef,
        P.BRACE_R
      );
    }
    /**
     * TypeSystemExtension :
     *   - SchemaExtension
     *   - TypeExtension
     *
     * TypeExtension :
     *   - ScalarTypeExtension
     *   - ObjectTypeExtension
     *   - InterfaceTypeExtension
     *   - UnionTypeExtension
     *   - EnumTypeExtension
     *   - InputObjectTypeDefinition
     */
    parseTypeSystemExtension() {
      const n = this._lexer.lookahead();
      if (n.kind === P.NAME)
        switch (n.value) {
          case "schema":
            return this.parseSchemaExtension();
          case "scalar":
            return this.parseScalarTypeExtension();
          case "type":
            return this.parseObjectTypeExtension();
          case "interface":
            return this.parseInterfaceTypeExtension();
          case "union":
            return this.parseUnionTypeExtension();
          case "enum":
            return this.parseEnumTypeExtension();
          case "input":
            return this.parseInputObjectTypeExtension();
        }
      throw this.unexpected(n);
    }
    /**
     * ```
     * SchemaExtension :
     *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
     *  - extend schema Directives[Const]
     * ```
     */
    parseSchemaExtension() {
      const n = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("schema");
      const r = this.parseConstDirectives(), a = this.optionalMany(
        P.BRACE_L,
        this.parseOperationTypeDefinition,
        P.BRACE_R
      );
      if (r.length === 0 && a.length === 0)
        throw this.unexpected();
      return this.node(n, {
        kind: W.SCHEMA_EXTENSION,
        directives: r,
        operationTypes: a
      });
    }
    /**
     * ScalarTypeExtension :
     *   - extend scalar Name Directives[Const]
     */
    parseScalarTypeExtension() {
      const n = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("scalar");
      const r = this.parseName(), a = this.parseConstDirectives();
      if (a.length === 0)
        throw this.unexpected();
      return this.node(n, {
        kind: W.SCALAR_TYPE_EXTENSION,
        name: r,
        directives: a
      });
    }
    /**
     * ObjectTypeExtension :
     *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
     *  - extend type Name ImplementsInterfaces? Directives[Const]
     *  - extend type Name ImplementsInterfaces
     */
    parseObjectTypeExtension() {
      const n = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("type");
      const r = this.parseName(), a = this.parseImplementsInterfaces(), s = this.parseConstDirectives(), u = this.parseFieldsDefinition();
      if (a.length === 0 && s.length === 0 && u.length === 0)
        throw this.unexpected();
      return this.node(n, {
        kind: W.OBJECT_TYPE_EXTENSION,
        name: r,
        interfaces: a,
        directives: s,
        fields: u
      });
    }
    /**
     * InterfaceTypeExtension :
     *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
     *  - extend interface Name ImplementsInterfaces? Directives[Const]
     *  - extend interface Name ImplementsInterfaces
     */
    parseInterfaceTypeExtension() {
      const n = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("interface");
      const r = this.parseName(), a = this.parseImplementsInterfaces(), s = this.parseConstDirectives(), u = this.parseFieldsDefinition();
      if (a.length === 0 && s.length === 0 && u.length === 0)
        throw this.unexpected();
      return this.node(n, {
        kind: W.INTERFACE_TYPE_EXTENSION,
        name: r,
        interfaces: a,
        directives: s,
        fields: u
      });
    }
    /**
     * UnionTypeExtension :
     *   - extend union Name Directives[Const]? UnionMemberTypes
     *   - extend union Name Directives[Const]
     */
    parseUnionTypeExtension() {
      const n = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("union");
      const r = this.parseName(), a = this.parseConstDirectives(), s = this.parseUnionMemberTypes();
      if (a.length === 0 && s.length === 0)
        throw this.unexpected();
      return this.node(n, {
        kind: W.UNION_TYPE_EXTENSION,
        name: r,
        directives: a,
        types: s
      });
    }
    /**
     * EnumTypeExtension :
     *   - extend enum Name Directives[Const]? EnumValuesDefinition
     *   - extend enum Name Directives[Const]
     */
    parseEnumTypeExtension() {
      const n = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("enum");
      const r = this.parseName(), a = this.parseConstDirectives(), s = this.parseEnumValuesDefinition();
      if (a.length === 0 && s.length === 0)
        throw this.unexpected();
      return this.node(n, {
        kind: W.ENUM_TYPE_EXTENSION,
        name: r,
        directives: a,
        values: s
      });
    }
    /**
     * InputObjectTypeExtension :
     *   - extend input Name Directives[Const]? InputFieldsDefinition
     *   - extend input Name Directives[Const]
     */
    parseInputObjectTypeExtension() {
      const n = this._lexer.token;
      this.expectKeyword("extend"), this.expectKeyword("input");
      const r = this.parseName(), a = this.parseConstDirectives(), s = this.parseInputFieldsDefinition();
      if (a.length === 0 && s.length === 0)
        throw this.unexpected();
      return this.node(n, {
        kind: W.INPUT_OBJECT_TYPE_EXTENSION,
        name: r,
        directives: a,
        fields: s
      });
    }
    /**
     * ```
     * DirectiveDefinition :
     *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
     * ```
     */
    parseDirectiveDefinition() {
      const n = this._lexer.token, r = this.parseDescription();
      this.expectKeyword("directive"), this.expectToken(P.AT);
      const a = this.parseName(), s = this.parseArgumentDefs(), u = this.expectOptionalKeyword("repeatable");
      this.expectKeyword("on");
      const f = this.parseDirectiveLocations();
      return this.node(n, {
        kind: W.DIRECTIVE_DEFINITION,
        description: r,
        name: a,
        arguments: s,
        repeatable: u,
        locations: f
      });
    }
    /**
     * DirectiveLocations :
     *   - `|`? DirectiveLocation
     *   - DirectiveLocations | DirectiveLocation
     */
    parseDirectiveLocations() {
      return this.delimitedMany(P.PIPE, this.parseDirectiveLocation);
    }
    /*
     * DirectiveLocation :
     *   - ExecutableDirectiveLocation
     *   - TypeSystemDirectiveLocation
     *
     * ExecutableDirectiveLocation : one of
     *   `QUERY`
     *   `MUTATION`
     *   `SUBSCRIPTION`
     *   `FIELD`
     *   `FRAGMENT_DEFINITION`
     *   `FRAGMENT_SPREAD`
     *   `INLINE_FRAGMENT`
     *
     * TypeSystemDirectiveLocation : one of
     *   `SCHEMA`
     *   `SCALAR`
     *   `OBJECT`
     *   `FIELD_DEFINITION`
     *   `ARGUMENT_DEFINITION`
     *   `INTERFACE`
     *   `UNION`
     *   `ENUM`
     *   `ENUM_VALUE`
     *   `INPUT_OBJECT`
     *   `INPUT_FIELD_DEFINITION`
     */
    parseDirectiveLocation() {
      const n = this._lexer.token, r = this.parseName();
      if (Object.prototype.hasOwnProperty.call(Bl, r.value))
        return r;
      throw this.unexpected(n);
    }
    // Core parsing utility functions
    /**
     * Returns a node that, if configured to do so, sets a "loc" field as a
     * location object, used to identify the place in the source that created a
     * given parsed object.
     */
    node(n, r) {
      return this._options.noLocation !== !0 && (r.loc = new fy(
        n,
        this._lexer.lastToken,
        this._lexer.source
      )), r;
    }
    /**
     * Determines if the next token is of a given kind
     */
    peek(n) {
      return this._lexer.token.kind === n;
    }
    /**
     * If the next token is of the given kind, return that token after advancing the lexer.
     * Otherwise, do not change the parser state and throw an error.
     */
    expectToken(n) {
      const r = this._lexer.token;
      if (r.kind === n)
        return this.advanceLexer(), r;
      throw He(
        this._lexer.source,
        r.start,
        `Expected ${Gp(n)}, found ${na(r)}.`
      );
    }
    /**
     * If the next token is of the given kind, return "true" after advancing the lexer.
     * Otherwise, do not change the parser state and return "false".
     */
    expectOptionalToken(n) {
      return this._lexer.token.kind === n ? (this.advanceLexer(), !0) : !1;
    }
    /**
     * If the next token is a given keyword, advance the lexer.
     * Otherwise, do not change the parser state and throw an error.
     */
    expectKeyword(n) {
      const r = this._lexer.token;
      if (r.kind === P.NAME && r.value === n)
        this.advanceLexer();
      else
        throw He(
          this._lexer.source,
          r.start,
          `Expected "${n}", found ${na(r)}.`
        );
    }
    /**
     * If the next token is a given keyword, return "true" after advancing the lexer.
     * Otherwise, do not change the parser state and return "false".
     */
    expectOptionalKeyword(n) {
      const r = this._lexer.token;
      return r.kind === P.NAME && r.value === n ? (this.advanceLexer(), !0) : !1;
    }
    /**
     * Helper function for creating an error when an unexpected lexed token is encountered.
     */
    unexpected(n) {
      const r = n ?? this._lexer.token;
      return He(
        this._lexer.source,
        r.start,
        `Unexpected ${na(r)}.`
      );
    }
    /**
     * Returns a possibly empty list of parse nodes, determined by the parseFn.
     * This list begins with a lex token of openKind and ends with a lex token of closeKind.
     * Advances the parser to the next lex token after the closing token.
     */
    any(n, r, a) {
      this.expectToken(n);
      const s = [];
      for (; !this.expectOptionalToken(a); )
        s.push(r.call(this));
      return s;
    }
    /**
     * Returns a list of parse nodes, determined by the parseFn.
     * It can be empty only if open token is missing otherwise it will always return non-empty list
     * that begins with a lex token of openKind and ends with a lex token of closeKind.
     * Advances the parser to the next lex token after the closing token.
     */
    optionalMany(n, r, a) {
      if (this.expectOptionalToken(n)) {
        const s = [];
        do
          s.push(r.call(this));
        while (!this.expectOptionalToken(a));
        return s;
      }
      return [];
    }
    /**
     * Returns a non-empty list of parse nodes, determined by the parseFn.
     * This list begins with a lex token of openKind and ends with a lex token of closeKind.
     * Advances the parser to the next lex token after the closing token.
     */
    many(n, r, a) {
      this.expectToken(n);
      const s = [];
      do
        s.push(r.call(this));
      while (!this.expectOptionalToken(a));
      return s;
    }
    /**
     * Returns a non-empty list of parse nodes, determined by the parseFn.
     * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
     * Advances the parser to the next lex token after last item in the list.
     */
    delimitedMany(n, r) {
      this.expectOptionalToken(n);
      const a = [];
      do
        a.push(r.call(this));
      while (this.expectOptionalToken(n));
      return a;
    }
    advanceLexer() {
      const { maxTokens: n } = this._options, r = this._lexer.advance();
      if (n !== void 0 && r.kind !== P.EOF && (++this._tokenCounter, this._tokenCounter > n))
        throw He(
          this._lexer.source,
          r.start,
          `Document contains more that ${n} tokens. Parsing aborted.`
        );
    }
  }
  function na(i) {
    const n = i.value;
    return Gp(i.kind) + (n != null ? ` "${n}"` : "");
  }
  function Gp(i) {
    return gy(i) ? `"${i}"` : i;
  }
  function Vy(i) {
    return `"${i.replace(By, Uy)}"`;
  }
  const By = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
  function Uy(i) {
    return Qy[i.charCodeAt(0)];
  }
  const Qy = [
    "\\u0000",
    "\\u0001",
    "\\u0002",
    "\\u0003",
    "\\u0004",
    "\\u0005",
    "\\u0006",
    "\\u0007",
    "\\b",
    "\\t",
    "\\n",
    "\\u000B",
    "\\f",
    "\\r",
    "\\u000E",
    "\\u000F",
    "\\u0010",
    "\\u0011",
    "\\u0012",
    "\\u0013",
    "\\u0014",
    "\\u0015",
    "\\u0016",
    "\\u0017",
    "\\u0018",
    "\\u0019",
    "\\u001A",
    "\\u001B",
    "\\u001C",
    "\\u001D",
    "\\u001E",
    "\\u001F",
    "",
    "",
    '\\"',
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // 2F
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // 3F
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // 4F
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\\\",
    "",
    "",
    "",
    // 5F
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // 6F
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\u007F",
    "\\u0080",
    "\\u0081",
    "\\u0082",
    "\\u0083",
    "\\u0084",
    "\\u0085",
    "\\u0086",
    "\\u0087",
    "\\u0088",
    "\\u0089",
    "\\u008A",
    "\\u008B",
    "\\u008C",
    "\\u008D",
    "\\u008E",
    "\\u008F",
    "\\u0090",
    "\\u0091",
    "\\u0092",
    "\\u0093",
    "\\u0094",
    "\\u0095",
    "\\u0096",
    "\\u0097",
    "\\u0098",
    "\\u0099",
    "\\u009A",
    "\\u009B",
    "\\u009C",
    "\\u009D",
    "\\u009E",
    "\\u009F"
  ], _a = Object.freeze({});
  function Rt(i, n, r = Bp) {
    const a = /* @__PURE__ */ new Map();
    for (const T of Object.values(W))
      a.set(T, qy(n, T));
    let s, u = Array.isArray(i), f = [i], p = -1, h = [], m = i, y, w;
    const g = [], S = [];
    do {
      p++;
      const T = p === f.length, R = T && h.length !== 0;
      if (T) {
        if (y = S.length === 0 ? void 0 : g[g.length - 1], m = w, w = S.pop(), R)
          if (u) {
            m = m.slice();
            let V = 0;
            for (const [B, Q] of h) {
              const te = B - V;
              Q === null ? (m.splice(te, 1), V++) : m[te] = Q;
            }
          } else {
            m = Object.defineProperties(
              {},
              Object.getOwnPropertyDescriptors(m)
            );
            for (const [V, B] of h)
              m[V] = B;
          }
        p = s.index, f = s.keys, h = s.edits, u = s.inArray, s = s.prev;
      } else if (w) {
        if (y = u ? p : f[p], m = w[y], m == null)
          continue;
        g.push(y);
      }
      let M;
      if (!Array.isArray(m)) {
        var C, O;
        Ad(m) || ia(!1, `Invalid AST Node: ${pu(m)}.`);
        const V = T ? (C = a.get(m.kind)) === null || C === void 0 ? void 0 : C.leave : (O = a.get(m.kind)) === null || O === void 0 ? void 0 : O.enter;
        if (M = V == null ? void 0 : V.call(n, m, y, w, g, S), M === _a)
          break;
        if (M === !1) {
          if (!T) {
            g.pop();
            continue;
          }
        } else if (M !== void 0 && (h.push([y, M]), !T))
          if (Ad(M))
            m = M;
          else {
            g.pop();
            continue;
          }
      }
      if (M === void 0 && R && h.push([y, m]), T)
        g.pop();
      else {
        var I;
        s = {
          inArray: u,
          index: p,
          keys: f,
          edits: h,
          prev: s
        }, u = Array.isArray(m), f = u ? m : (I = r[m.kind]) !== null && I !== void 0 ? I : [], p = -1, h = [], w && S.push(w), w = m;
      }
    } while (s !== void 0);
    return h.length !== 0 ? h[h.length - 1][1] : i;
  }
  function qy(i, n) {
    const r = i[n];
    return typeof r == "object" ? r : typeof r == "function" ? {
      enter: r,
      leave: void 0
    } : {
      enter: i.enter,
      leave: i.leave
    };
  }
  function Wy(i) {
    return Rt(i, Hy);
  }
  const $y = 80, Hy = {
    Name: {
      leave: (i) => i.value
    },
    Variable: {
      leave: (i) => "$" + i.name
    },
    // Document
    Document: {
      leave: (i) => K(i.definitions, `

`)
    },
    OperationDefinition: {
      leave(i) {
        const n = ce("(", K(i.variableDefinitions, ", "), ")"), r = K(
          [
            i.operation,
            K([i.name, n]),
            K(i.directives, " ")
          ],
          " "
        );
        return (r === "query" ? "" : r + " ") + i.selectionSet;
      }
    },
    VariableDefinition: {
      leave: ({ variable: i, type: n, defaultValue: r, directives: a }) => i + ": " + n + ce(" = ", r) + ce(" ", K(a, " "))
    },
    SelectionSet: {
      leave: ({ selections: i }) => jt(i)
    },
    Field: {
      leave({ alias: i, name: n, arguments: r, directives: a, selectionSet: s }) {
        const u = ce("", i, ": ") + n;
        let f = u + ce("(", K(r, ", "), ")");
        return f.length > $y && (f = u + ce(`(
`, oa(K(r, `
`)), `
)`)), K([f, K(a, " "), s], " ");
      }
    },
    Argument: {
      leave: ({ name: i, value: n }) => i + ": " + n
    },
    // Fragments
    FragmentSpread: {
      leave: ({ name: i, directives: n }) => "..." + i + ce(" ", K(n, " "))
    },
    InlineFragment: {
      leave: ({ typeCondition: i, directives: n, selectionSet: r }) => K(
        [
          "...",
          ce("on ", i),
          K(n, " "),
          r
        ],
        " "
      )
    },
    FragmentDefinition: {
      leave: ({ name: i, typeCondition: n, variableDefinitions: r, directives: a, selectionSet: s }) => (
        // or removed in the future.
        `fragment ${i}${ce("(", K(r, ", "), ")")} on ${n} ${ce("", K(a, " "), " ")}` + s
      )
    },
    // Value
    IntValue: {
      leave: ({ value: i }) => i
    },
    FloatValue: {
      leave: ({ value: i }) => i
    },
    StringValue: {
      leave: ({ value: i, block: n }) => n ? my(i) : Vy(i)
    },
    BooleanValue: {
      leave: ({ value: i }) => i ? "true" : "false"
    },
    NullValue: {
      leave: () => "null"
    },
    EnumValue: {
      leave: ({ value: i }) => i
    },
    ListValue: {
      leave: ({ values: i }) => "[" + K(i, ", ") + "]"
    },
    ObjectValue: {
      leave: ({ fields: i }) => "{" + K(i, ", ") + "}"
    },
    ObjectField: {
      leave: ({ name: i, value: n }) => i + ": " + n
    },
    // Directive
    Directive: {
      leave: ({ name: i, arguments: n }) => "@" + i + ce("(", K(n, ", "), ")")
    },
    // Type
    NamedType: {
      leave: ({ name: i }) => i
    },
    ListType: {
      leave: ({ type: i }) => "[" + i + "]"
    },
    NonNullType: {
      leave: ({ type: i }) => i + "!"
    },
    // Type System Definitions
    SchemaDefinition: {
      leave: ({ description: i, directives: n, operationTypes: r }) => ce("", i, `
`) + K(["schema", K(n, " "), jt(r)], " ")
    },
    OperationTypeDefinition: {
      leave: ({ operation: i, type: n }) => i + ": " + n
    },
    ScalarTypeDefinition: {
      leave: ({ description: i, name: n, directives: r }) => ce("", i, `
`) + K(["scalar", n, K(r, " ")], " ")
    },
    ObjectTypeDefinition: {
      leave: ({ description: i, name: n, interfaces: r, directives: a, fields: s }) => ce("", i, `
`) + K(
        [
          "type",
          n,
          ce("implements ", K(r, " & ")),
          K(a, " "),
          jt(s)
        ],
        " "
      )
    },
    FieldDefinition: {
      leave: ({ description: i, name: n, arguments: r, type: a, directives: s }) => ce("", i, `
`) + n + (zd(r) ? ce(`(
`, oa(K(r, `
`)), `
)`) : ce("(", K(r, ", "), ")")) + ": " + a + ce(" ", K(s, " "))
    },
    InputValueDefinition: {
      leave: ({ description: i, name: n, type: r, defaultValue: a, directives: s }) => ce("", i, `
`) + K(
        [n + ": " + r, ce("= ", a), K(s, " ")],
        " "
      )
    },
    InterfaceTypeDefinition: {
      leave: ({ description: i, name: n, interfaces: r, directives: a, fields: s }) => ce("", i, `
`) + K(
        [
          "interface",
          n,
          ce("implements ", K(r, " & ")),
          K(a, " "),
          jt(s)
        ],
        " "
      )
    },
    UnionTypeDefinition: {
      leave: ({ description: i, name: n, directives: r, types: a }) => ce("", i, `
`) + K(
        ["union", n, K(r, " "), ce("= ", K(a, " | "))],
        " "
      )
    },
    EnumTypeDefinition: {
      leave: ({ description: i, name: n, directives: r, values: a }) => ce("", i, `
`) + K(["enum", n, K(r, " "), jt(a)], " ")
    },
    EnumValueDefinition: {
      leave: ({ description: i, name: n, directives: r }) => ce("", i, `
`) + K([n, K(r, " ")], " ")
    },
    InputObjectTypeDefinition: {
      leave: ({ description: i, name: n, directives: r, fields: a }) => ce("", i, `
`) + K(["input", n, K(r, " "), jt(a)], " ")
    },
    DirectiveDefinition: {
      leave: ({ description: i, name: n, arguments: r, repeatable: a, locations: s }) => ce("", i, `
`) + "directive @" + n + (zd(r) ? ce(`(
`, oa(K(r, `
`)), `
)`) : ce("(", K(r, ", "), ")")) + (a ? " repeatable" : "") + " on " + K(s, " | ")
    },
    SchemaExtension: {
      leave: ({ directives: i, operationTypes: n }) => K(
        ["extend schema", K(i, " "), jt(n)],
        " "
      )
    },
    ScalarTypeExtension: {
      leave: ({ name: i, directives: n }) => K(["extend scalar", i, K(n, " ")], " ")
    },
    ObjectTypeExtension: {
      leave: ({ name: i, interfaces: n, directives: r, fields: a }) => K(
        [
          "extend type",
          i,
          ce("implements ", K(n, " & ")),
          K(r, " "),
          jt(a)
        ],
        " "
      )
    },
    InterfaceTypeExtension: {
      leave: ({ name: i, interfaces: n, directives: r, fields: a }) => K(
        [
          "extend interface",
          i,
          ce("implements ", K(n, " & ")),
          K(r, " "),
          jt(a)
        ],
        " "
      )
    },
    UnionTypeExtension: {
      leave: ({ name: i, directives: n, types: r }) => K(
        [
          "extend union",
          i,
          K(n, " "),
          ce("= ", K(r, " | "))
        ],
        " "
      )
    },
    EnumTypeExtension: {
      leave: ({ name: i, directives: n, values: r }) => K(["extend enum", i, K(n, " "), jt(r)], " ")
    },
    InputObjectTypeExtension: {
      leave: ({ name: i, directives: n, fields: r }) => K(["extend input", i, K(n, " "), jt(r)], " ")
    }
  };
  function K(i, n = "") {
    var r;
    return (r = i == null ? void 0 : i.filter((a) => a).join(n)) !== null && r !== void 0 ? r : "";
  }
  function jt(i) {
    return ce(`{
`, oa(K(i, `
`)), `
}`);
  }
  function ce(i, n, r = "") {
    return n != null && n !== "" ? i + n + r : "";
  }
  function oa(i) {
    return ce("  ", i.replace(/\n/g, `
  `));
  }
  function zd(i) {
    var n;
    return (n = i == null ? void 0 : i.some((r) => r.includes(`
`))) !== null && n !== void 0 ? n : !1;
  }
  function Vd(i) {
    return i.kind === W.FIELD || i.kind === W.FRAGMENT_SPREAD || i.kind === W.INLINE_FRAGMENT;
  }
  function Vi(i, n) {
    var r = i.directives;
    return !r || !r.length ? !0 : Ky(r).every(function(a) {
      var s = a.directive, u = a.ifArgument, f = !1;
      return u.value.kind === "Variable" ? (f = n && n[u.value.name.value], ee(f !== void 0, 78, s.name.value)) : f = u.value.value, s.name.value === "skip" ? !f : f;
    });
  }
  function Pi(i, n, r) {
    var a = new Set(i), s = a.size;
    return Rt(n, {
      Directive: function(u) {
        if (a.delete(u.name.value) && (!r || !a.size))
          return _a;
      }
    }), r ? !a.size : a.size < s;
  }
  function Gy(i) {
    return i && Pi(["client", "export"], i, !0);
  }
  function Yy(i) {
    var n = i.name.value;
    return n === "skip" || n === "include";
  }
  function Ky(i) {
    var n = [];
    return i && i.length && i.forEach(function(r) {
      if (Yy(r)) {
        var a = r.arguments, s = r.name.value;
        ee(a && a.length === 1, 79, s);
        var u = a[0];
        ee(u.name && u.name.value === "if", 80, s);
        var f = u.value;
        ee(f && (f.kind === "Variable" || f.kind === "BooleanValue"), 81, s), n.push({ directive: r, ifArgument: u });
      }
    }), n;
  }
  function Xy(i) {
    var n, r, a = (n = i.directives) === null || n === void 0 ? void 0 : n.find(function(u) {
      var f = u.name;
      return f.value === "unmask";
    });
    if (!a)
      return "mask";
    var s = (r = a.arguments) === null || r === void 0 ? void 0 : r.find(function(u) {
      var f = u.name;
      return f.value === "mode";
    });
    return globalThis.__DEV__ !== !1 && s && (s.value.kind === W.VARIABLE ? globalThis.__DEV__ !== !1 && ee.warn(82) : s.value.kind !== W.STRING ? globalThis.__DEV__ !== !1 && ee.warn(83) : s.value.value !== "migrate" && globalThis.__DEV__ !== !1 && ee.warn(84, s.value.value)), s && "value" in s.value && s.value.value === "migrate" ? "migrate" : "unmask";
  }
  const Jy = () => /* @__PURE__ */ Object.create(null), { forEach: Zy, slice: Bd } = Array.prototype, { hasOwnProperty: eg } = Object.prototype;
  class en {
    constructor(n = !0, r = Jy) {
      this.weakness = n, this.makeData = r;
    }
    lookup() {
      return this.lookupArray(arguments);
    }
    lookupArray(n) {
      let r = this;
      return Zy.call(n, (a) => r = r.getChildTrie(a)), eg.call(r, "data") ? r.data : r.data = this.makeData(Bd.call(n));
    }
    peek() {
      return this.peekArray(arguments);
    }
    peekArray(n) {
      let r = this;
      for (let a = 0, s = n.length; r && a < s; ++a) {
        const u = r.mapFor(n[a], !1);
        r = u && u.get(n[a]);
      }
      return r && r.data;
    }
    remove() {
      return this.removeArray(arguments);
    }
    removeArray(n) {
      let r;
      if (n.length) {
        const a = n[0], s = this.mapFor(a, !1), u = s && s.get(a);
        u && (r = u.removeArray(Bd.call(n, 1)), !u.data && !u.weak && !(u.strong && u.strong.size) && s.delete(a));
      } else
        r = this.data, delete this.data;
      return r;
    }
    getChildTrie(n) {
      const r = this.mapFor(n, !0);
      let a = r.get(n);
      return a || r.set(n, a = new en(this.weakness, this.makeData)), a;
    }
    mapFor(n, r) {
      return this.weakness && tg(n) ? this.weak || (r ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (r ? this.strong = /* @__PURE__ */ new Map() : void 0);
    }
  }
  function tg(i) {
    switch (typeof i) {
      case "object":
        if (i === null)
          break;
      case "function":
        return !0;
    }
    return !1;
  }
  var ng = Mt(function() {
    return navigator.product;
  }) == "ReactNative", Gn = typeof WeakMap == "function" && !(ng && !global.HermesInternal), hu = typeof WeakSet == "function", Yp = typeof Symbol == "function" && typeof Symbol.for == "function", wa = Yp && Symbol.asyncIterator;
  Mt(function() {
    return window.document.createElement;
  });
  Mt(function() {
    return navigator.userAgent.indexOf("jsdom") >= 0;
  });
  function Me(i) {
    return i !== null && typeof i == "object";
  }
  function rg(i, n) {
    var r = n, a = [];
    i.definitions.forEach(function(u) {
      if (u.kind === "OperationDefinition")
        throw at(
          85,
          u.operation,
          u.name ? " named '".concat(u.name.value, "'") : ""
        );
      u.kind === "FragmentDefinition" && a.push(u);
    }), typeof r > "u" && (ee(a.length === 1, 86, a.length), r = a[0].name.value);
    var s = N(N({}, i), { definitions: rt([
      {
        kind: "OperationDefinition",
        // OperationTypeNode is an enum
        operation: "query",
        selectionSet: {
          kind: "SelectionSet",
          selections: [
            {
              kind: "FragmentSpread",
              name: {
                kind: "Name",
                value: r
              }
            }
          ]
        }
      }
    ], i.definitions, !0) });
    return s;
  }
  function Rr(i) {
    i === void 0 && (i = []);
    var n = {};
    return i.forEach(function(r) {
      n[r.name.value] = r;
    }), n;
  }
  function Ea(i, n) {
    switch (i.kind) {
      case "InlineFragment":
        return i;
      case "FragmentSpread": {
        var r = i.name.value;
        if (typeof n == "function")
          return n(r);
        var a = n && n[r];
        return ee(a, 87, r), a || null;
      }
      default:
        return null;
    }
  }
  function ig(i) {
    var n = !0;
    return Rt(i, {
      FragmentSpread: function(r) {
        if (n = !!r.directives && r.directives.some(function(a) {
          return a.name.value === "unmask";
        }), !n)
          return _a;
      }
    }), n;
  }
  function og() {
  }
  class Ql {
    constructor(n = 1 / 0, r = og) {
      this.max = n, this.dispose = r, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
    }
    has(n) {
      return this.map.has(n);
    }
    get(n) {
      const r = this.getNode(n);
      return r && r.value;
    }
    get size() {
      return this.map.size;
    }
    getNode(n) {
      const r = this.map.get(n);
      if (r && r !== this.newest) {
        const { older: a, newer: s } = r;
        s && (s.older = a), a && (a.newer = s), r.older = this.newest, r.older.newer = r, r.newer = null, this.newest = r, r === this.oldest && (this.oldest = s);
      }
      return r;
    }
    set(n, r) {
      let a = this.getNode(n);
      return a ? a.value = r : (a = {
        key: n,
        value: r,
        newer: null,
        older: this.newest
      }, this.newest && (this.newest.newer = a), this.newest = a, this.oldest = this.oldest || a, this.map.set(n, a), a.value);
    }
    clean() {
      for (; this.oldest && this.map.size > this.max; )
        this.delete(this.oldest.key);
    }
    delete(n) {
      const r = this.map.get(n);
      return r ? (r === this.newest && (this.newest = r.older), r === this.oldest && (this.oldest = r.newer), r.newer && (r.newer.older = r.older), r.older && (r.older.newer = r.newer), this.map.delete(n), this.dispose(r.value, n), !0) : !1;
    }
  }
  function ql() {
  }
  const ag = ql, sg = typeof WeakRef < "u" ? WeakRef : function(i) {
    return { deref: () => i };
  }, lg = typeof WeakMap < "u" ? WeakMap : Map, ug = typeof FinalizationRegistry < "u" ? FinalizationRegistry : function() {
    return {
      register: ql,
      unregister: ql
    };
  }, cg = 10024;
  class da {
    constructor(n = 1 / 0, r = ag) {
      this.max = n, this.dispose = r, this.map = new lg(), this.newest = null, this.oldest = null, this.unfinalizedNodes = /* @__PURE__ */ new Set(), this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
        const a = this.unfinalizedNodes.values();
        for (let s = 0; s < cg; s++) {
          const u = a.next().value;
          if (!u)
            break;
          this.unfinalizedNodes.delete(u);
          const f = u.key;
          delete u.key, u.keyRef = new sg(f), this.registry.register(f, u, u);
        }
        this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1;
      }, this.registry = new ug(this.deleteNode.bind(this));
    }
    has(n) {
      return this.map.has(n);
    }
    get(n) {
      const r = this.getNode(n);
      return r && r.value;
    }
    getNode(n) {
      const r = this.map.get(n);
      if (r && r !== this.newest) {
        const { older: a, newer: s } = r;
        s && (s.older = a), a && (a.newer = s), r.older = this.newest, r.older.newer = r, r.newer = null, this.newest = r, r === this.oldest && (this.oldest = s);
      }
      return r;
    }
    set(n, r) {
      let a = this.getNode(n);
      return a ? a.value = r : (a = {
        key: n,
        value: r,
        newer: null,
        older: this.newest
      }, this.newest && (this.newest.newer = a), this.newest = a, this.oldest = this.oldest || a, this.scheduleFinalization(a), this.map.set(n, a), this.size++, a.value);
    }
    clean() {
      for (; this.oldest && this.size > this.max; )
        this.deleteNode(this.oldest);
    }
    deleteNode(n) {
      n === this.newest && (this.newest = n.older), n === this.oldest && (this.oldest = n.newer), n.newer && (n.newer.older = n.older), n.older && (n.older.newer = n.newer), this.size--;
      const r = n.key || n.keyRef && n.keyRef.deref();
      this.dispose(n.value, r), n.keyRef ? this.registry.unregister(n) : this.unfinalizedNodes.delete(n), r && this.map.delete(r);
    }
    delete(n) {
      const r = this.map.get(n);
      return r ? (this.deleteNode(r), !0) : !1;
    }
    scheduleFinalization(n) {
      this.unfinalizedNodes.add(n), this.finalizationScheduled || (this.finalizationScheduled = !0, queueMicrotask(this.finalize));
    }
  }
  var bl = /* @__PURE__ */ new WeakSet();
  function Kp(i) {
    i.size <= (i.max || -1) || bl.has(i) || (bl.add(i), setTimeout(function() {
      i.clean(), bl.delete(i);
    }, 100));
  }
  var Xp = function(i, n) {
    var r = new da(i, n);
    return r.set = function(a, s) {
      var u = da.prototype.set.call(this, a, s);
      return Kp(this), u;
    }, r;
  }, fg = function(i, n) {
    var r = new Ql(i, n);
    return r.set = function(a, s) {
      var u = Ql.prototype.set.call(this, a, s);
      return Kp(this), u;
    }, r;
  }, dg = Symbol.for("apollo.cacheSize"), Xt = N({}, Ll[dg]), Qn = {};
  function Jp(i, n) {
    Qn[i] = n;
  }
  var pg = globalThis.__DEV__ !== !1 ? yg : void 0, hg = globalThis.__DEV__ !== !1 ? gg : void 0, vg = globalThis.__DEV__ !== !1 ? Zp : void 0;
  function mg() {
    var i = {
      parser: 1e3,
      canonicalStringify: 1e3,
      print: 2e3,
      "documentTransform.cache": 2e3,
      "queryManager.getDocumentInfo": 2e3,
      "PersistedQueryLink.persistedQueryHashes": 2e3,
      "fragmentRegistry.transform": 2e3,
      "fragmentRegistry.lookup": 1e3,
      "fragmentRegistry.findFragmentSpreads": 4e3,
      "cache.fragmentQueryDocuments": 1e3,
      "removeTypenameFromVariables.getVariableDefinitions": 2e3,
      "inMemoryCache.maybeBroadcastWatch": 5e3,
      "inMemoryCache.executeSelectionSet": 5e4,
      "inMemoryCache.executeSubSelectedArray": 1e4
    };
    return Object.fromEntries(Object.entries(i).map(function(n) {
      var r = n[0], a = n[1];
      return [
        r,
        Xt[r] || a
      ];
    }));
  }
  function yg() {
    var i, n, r, a, s;
    if (globalThis.__DEV__ === !1)
      throw new Error("only supported in development mode");
    return {
      limits: mg(),
      sizes: N({ print: (i = Qn.print) === null || i === void 0 ? void 0 : i.call(Qn), parser: (n = Qn.parser) === null || n === void 0 ? void 0 : n.call(Qn), canonicalStringify: (r = Qn.canonicalStringify) === null || r === void 0 ? void 0 : r.call(Qn), links: $l(this.link), queryManager: {
        getDocumentInfo: this.queryManager.transformCache.size,
        documentTransforms: th(this.queryManager.documentTransform)
      } }, (s = (a = this.cache).getMemoryInternals) === null || s === void 0 ? void 0 : s.call(a))
    };
  }
  function Zp() {
    return {
      cache: {
        fragmentQueryDocuments: bn(this.getFragmentDoc)
      }
    };
  }
  function gg() {
    var i = this.config.fragments;
    return N(N({}, Zp.apply(this)), { addTypenameDocumentTransform: th(this.addTypenameTransform), inMemoryCache: {
      executeSelectionSet: bn(this.storeReader.executeSelectionSet),
      executeSubSelectedArray: bn(this.storeReader.executeSubSelectedArray),
      maybeBroadcastWatch: bn(this.maybeBroadcastWatch)
    }, fragmentRegistry: {
      findFragmentSpreads: bn(i == null ? void 0 : i.findFragmentSpreads),
      lookup: bn(i == null ? void 0 : i.lookup),
      transform: bn(i == null ? void 0 : i.transform)
    } });
  }
  function _g(i) {
    return !!i && "dirtyKey" in i;
  }
  function bn(i) {
    return _g(i) ? i.size : void 0;
  }
  function eh(i) {
    return i != null;
  }
  function th(i) {
    return Wl(i).map(function(n) {
      return { cache: n };
    });
  }
  function Wl(i) {
    return i ? rt(rt([
      bn(i == null ? void 0 : i.performWork)
    ], Wl(i == null ? void 0 : i.left), !0), Wl(i == null ? void 0 : i.right), !0).filter(eh) : [];
  }
  function $l(i) {
    var n;
    return i ? rt(rt([
      (n = i == null ? void 0 : i.getMemoryInternals) === null || n === void 0 ? void 0 : n.call(i)
    ], $l(i == null ? void 0 : i.left), !0), $l(i == null ? void 0 : i.right), !0).filter(eh) : [];
  }
  var Nn = Object.assign(function(n) {
    return JSON.stringify(n, wg);
  }, {
    reset: function() {
      kr = new fg(
        Xt.canonicalStringify || 1e3
        /* defaultCacheSizes.canonicalStringify */
      );
    }
  });
  globalThis.__DEV__ !== !1 && Jp("canonicalStringify", function() {
    return kr.size;
  });
  var kr;
  Nn.reset();
  function wg(i, n) {
    if (n && typeof n == "object") {
      var r = Object.getPrototypeOf(n);
      if (r === Object.prototype || r === null) {
        var a = Object.keys(n);
        if (a.every(Eg))
          return n;
        var s = JSON.stringify(a), u = kr.get(s);
        if (!u) {
          a.sort();
          var f = JSON.stringify(a);
          u = kr.get(f) || a, kr.set(s, u), kr.set(f, u);
        }
        var p = Object.create(r);
        return u.forEach(function(h) {
          p[h] = n[h];
        }), p;
      }
    }
    return n;
  }
  function Eg(i, n, r) {
    return n === 0 || r[n - 1] <= i;
  }
  function Tr(i) {
    return { __ref: String(i) };
  }
  function ye(i) {
    return !!(i && typeof i == "object" && typeof i.__ref == "string");
  }
  function Sg(i) {
    return Me(i) && i.kind === "Document" && Array.isArray(i.definitions);
  }
  function kg(i) {
    return i.kind === "StringValue";
  }
  function bg(i) {
    return i.kind === "BooleanValue";
  }
  function Ng(i) {
    return i.kind === "IntValue";
  }
  function Tg(i) {
    return i.kind === "FloatValue";
  }
  function Og(i) {
    return i.kind === "Variable";
  }
  function xg(i) {
    return i.kind === "ObjectValue";
  }
  function Cg(i) {
    return i.kind === "ListValue";
  }
  function Ig(i) {
    return i.kind === "EnumValue";
  }
  function Dg(i) {
    return i.kind === "NullValue";
  }
  function Cr(i, n, r, a) {
    if (Ng(r) || Tg(r))
      i[n.value] = Number(r.value);
    else if (bg(r) || kg(r))
      i[n.value] = r.value;
    else if (xg(r)) {
      var s = {};
      r.fields.map(function(f) {
        return Cr(s, f.name, f.value, a);
      }), i[n.value] = s;
    } else if (Og(r)) {
      var u = (a || {})[r.name.value];
      i[n.value] = u;
    } else if (Cg(r))
      i[n.value] = r.values.map(function(f) {
        var p = {};
        return Cr(p, n, f, a), p[n.value];
      });
    else if (Ig(r))
      i[n.value] = r.value;
    else if (Dg(r))
      i[n.value] = null;
    else
      throw at(96, n.value, r.kind);
  }
  function jg(i, n) {
    var r = null;
    i.directives && (r = {}, i.directives.forEach(function(s) {
      r[s.name.value] = {}, s.arguments && s.arguments.forEach(function(u) {
        var f = u.name, p = u.value;
        return Cr(r[s.name.value], f, p, n);
      });
    }));
    var a = null;
    return i.arguments && i.arguments.length && (a = {}, i.arguments.forEach(function(s) {
      var u = s.name, f = s.value;
      return Cr(a, u, f, n);
    })), nh(i.name.value, a, r);
  }
  var Mg = [
    "connection",
    "include",
    "skip",
    "client",
    "rest",
    "export",
    "nonreactive"
  ], ki = Nn, nh = Object.assign(function(i, n, r) {
    if (n && r && r.connection && r.connection.key)
      if (r.connection.filter && r.connection.filter.length > 0) {
        var a = r.connection.filter ? r.connection.filter : [];
        a.sort();
        var s = {};
        return a.forEach(function(p) {
          s[p] = n[p];
        }), "".concat(r.connection.key, "(").concat(ki(s), ")");
      } else
        return r.connection.key;
    var u = i;
    if (n) {
      var f = ki(n);
      u += "(".concat(f, ")");
    }
    return r && Object.keys(r).forEach(function(p) {
      Mg.indexOf(p) === -1 && (r[p] && Object.keys(r[p]).length ? u += "@".concat(p, "(").concat(ki(r[p]), ")") : u += "@".concat(p));
    }), u;
  }, {
    setStringify: function(i) {
      var n = ki;
      return ki = i, n;
    }
  });
  function Sa(i, n) {
    if (i.arguments && i.arguments.length) {
      var r = {};
      return i.arguments.forEach(function(a) {
        var s = a.name, u = a.value;
        return Cr(r, s, u, n);
      }), r;
    }
    return null;
  }
  function Jt(i) {
    return i.alias ? i.alias.value : i.name.value;
  }
  function Hl(i, n, r) {
    for (var a, s = 0, u = n.selections; s < u.length; s++) {
      var f = u[s];
      if (Tn(f)) {
        if (f.name.value === "__typename")
          return i[Jt(f)];
      } else a ? a.push(f) : a = [f];
    }
    if (typeof i.__typename == "string")
      return i.__typename;
    if (a)
      for (var p = 0, h = a; p < h.length; p++) {
        var f = h[p], m = Hl(i, Ea(f, r).selectionSet, r);
        if (typeof m == "string")
          return m;
      }
  }
  function Tn(i) {
    return i.kind === "Field";
  }
  function Rg(i) {
    return i.kind === "InlineFragment";
  }
  function Pr(i) {
    ee(i && i.kind === "Document", 88);
    var n = i.definitions.filter(function(r) {
      return r.kind !== "FragmentDefinition";
    }).map(function(r) {
      if (r.kind !== "OperationDefinition")
        throw at(89, r.kind);
      return r;
    });
    return ee(n.length <= 1, 90, n.length), i;
  }
  function Hn(i) {
    return Pr(i), i.definitions.filter(function(n) {
      return n.kind === "OperationDefinition";
    })[0];
  }
  function aa(i) {
    return i.definitions.filter(function(n) {
      return n.kind === "OperationDefinition" && !!n.name;
    }).map(function(n) {
      return n.name.value;
    })[0] || null;
  }
  function Fr(i) {
    return i.definitions.filter(function(n) {
      return n.kind === "FragmentDefinition";
    });
  }
  function rh(i) {
    var n = Hn(i);
    return ee(n && n.operation === "query", 91), n;
  }
  function ih(i) {
    ee(i.kind === "Document", 92), ee(i.definitions.length <= 1, 93);
    var n = i.definitions[0];
    return ee(n.kind === "FragmentDefinition", 94), n;
  }
  function Bi(i) {
    Pr(i);
    for (var n, r = 0, a = i.definitions; r < a.length; r++) {
      var s = a[r];
      if (s.kind === "OperationDefinition") {
        var u = s.operation;
        if (u === "query" || u === "mutation" || u === "subscription")
          return s;
      }
      s.kind === "FragmentDefinition" && !n && (n = s);
    }
    if (n)
      return n;
    throw at(95);
  }
  function vu(i) {
    var n = /* @__PURE__ */ Object.create(null), r = i && i.variableDefinitions;
    return r && r.length && r.forEach(function(a) {
      a.defaultValue && Cr(n, a.variable.name, a.defaultValue);
    }), n;
  }
  let Je = null;
  const Ud = {};
  let Pg = 1;
  const Fg = () => class {
    constructor() {
      this.id = [
        "slot",
        Pg++,
        Date.now(),
        Math.random().toString(36).slice(2)
      ].join(":");
    }
    hasValue() {
      for (let n = Je; n; n = n.parent)
        if (this.id in n.slots) {
          const r = n.slots[this.id];
          if (r === Ud)
            break;
          return n !== Je && (Je.slots[this.id] = r), !0;
        }
      return Je && (Je.slots[this.id] = Ud), !1;
    }
    getValue() {
      if (this.hasValue())
        return Je.slots[this.id];
    }
    withValue(n, r, a, s) {
      const u = {
        __proto__: null,
        [this.id]: n
      }, f = Je;
      Je = { parent: f, slots: u };
      try {
        return r.apply(s, a);
      } finally {
        Je = f;
      }
    }
    // Capture the current context and wrap a callback function so that it
    // reestablishes the captured context when called.
    static bind(n) {
      const r = Je;
      return function() {
        const a = Je;
        try {
          return Je = r, n.apply(this, arguments);
        } finally {
          Je = a;
        }
      };
    }
    // Immediately run a callback function without any captured context.
    static noContext(n, r, a) {
      if (Je) {
        const s = Je;
        try {
          return Je = null, n.apply(a, r);
        } finally {
          Je = s;
        }
      } else
        return n.apply(a, r);
    }
  };
  function Qd(i) {
    try {
      return i();
    } catch {
    }
  }
  const Nl = "@wry/context:Slot", Ag = (
    // Prefer globalThis when available.
    // https://github.com/benjamn/wryware/issues/347
    Qd(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
    // bundlers to the appropriate identifier (window, self, ...) depending on the
    // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
    Qd(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
    // back to using the Array constructor as a namespace, but that was flagged in
    // https://github.com/benjamn/wryware/issues/347, and can be avoided.
    /* @__PURE__ */ Object.create(null)
  ), qd = Ag, mu = qd[Nl] || // Earlier versions of this package stored the globalKey property on the Array
  // constructor, so we check there as well, to prevent Slot class duplication.
  Array[Nl] || function(i) {
    try {
      Object.defineProperty(qd, Nl, {
        value: i,
        enumerable: !1,
        writable: !1,
        // When it was possible for globalHost to be the Array constructor (a
        // legacy Slot dedup strategy), it was important for the property to be
        // configurable:true so it could be deleted. That does not seem to be as
        // important when globalHost is the global object, but I don't want to
        // cause similar problems again, and configurable:true seems safest.
        // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
        configurable: !0
      });
    } finally {
      return i;
    }
  }(Fg()), ka = new mu(), { hasOwnProperty: Lg } = Object.prototype, yu = Array.from || function(i) {
    const n = [];
    return i.forEach((r) => n.push(r)), n;
  };
  function gu(i) {
    const { unsubscribe: n } = i;
    typeof n == "function" && (i.unsubscribe = void 0, n());
  }
  const Fi = [], zg = 100;
  function Ir(i, n) {
    if (!i)
      throw new Error(n || "assertion failure");
  }
  function oh(i, n) {
    const r = i.length;
    return (
      // Unknown values are not equal to each other.
      r > 0 && // Both values must be ordinary (or both exceptional) to be equal.
      r === n.length && // The underlying value or exception must be the same.
      i[r - 1] === n[r - 1]
    );
  }
  function ah(i) {
    switch (i.length) {
      case 0:
        throw new Error("unknown value");
      case 1:
        return i[0];
      case 2:
        throw i[1];
    }
  }
  function sh(i) {
    return i.slice(0);
  }
  class ba {
    constructor(n) {
      this.fn = n, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++ba.count;
    }
    peek() {
      if (this.value.length === 1 && !On(this))
        return Wd(this), this.value[0];
    }
    // This is the most important method of the Entry API, because it
    // determines whether the cached this.value can be returned immediately,
    // or must be recomputed. The overall performance of the caching system
    // depends on the truth of the following observations: (1) this.dirty is
    // usually false, (2) this.dirtyChildren is usually null/empty, and thus
    // (3) valueGet(this.value) is usually returned without recomputation.
    recompute(n) {
      return Ir(!this.recomputing, "already recomputing"), Wd(this), On(this) ? Vg(this, n) : ah(this.value);
    }
    setDirty() {
      this.dirty || (this.dirty = !0, lh(this), gu(this));
    }
    dispose() {
      this.setDirty(), ph(this), _u(this, (n, r) => {
        n.setDirty(), hh(n, this);
      });
    }
    forget() {
      this.dispose();
    }
    dependOn(n) {
      n.add(this), this.deps || (this.deps = Fi.pop() || /* @__PURE__ */ new Set()), this.deps.add(n);
    }
    forgetDeps() {
      this.deps && (yu(this.deps).forEach((n) => n.delete(this)), this.deps.clear(), Fi.push(this.deps), this.deps = null);
    }
  }
  ba.count = 0;
  function Wd(i) {
    const n = ka.getValue();
    if (n)
      return i.parents.add(n), n.childValues.has(i) || n.childValues.set(i, []), On(i) ? ch(n, i) : fh(n, i), n;
  }
  function Vg(i, n) {
    return ph(i), ka.withValue(i, Bg, [i, n]), Qg(i, n) && Ug(i), ah(i.value);
  }
  function Bg(i, n) {
    i.recomputing = !0;
    const { normalizeResult: r } = i;
    let a;
    r && i.value.length === 1 && (a = sh(i.value)), i.value.length = 0;
    try {
      if (i.value[0] = i.fn.apply(null, n), r && a && !oh(a, i.value))
        try {
          i.value[0] = r(i.value[0], a[0]);
        } catch {
        }
    } catch (s) {
      i.value[1] = s;
    }
    i.recomputing = !1;
  }
  function On(i) {
    return i.dirty || !!(i.dirtyChildren && i.dirtyChildren.size);
  }
  function Ug(i) {
    i.dirty = !1, !On(i) && uh(i);
  }
  function lh(i) {
    _u(i, ch);
  }
  function uh(i) {
    _u(i, fh);
  }
  function _u(i, n) {
    const r = i.parents.size;
    if (r) {
      const a = yu(i.parents);
      for (let s = 0; s < r; ++s)
        n(a[s], i);
    }
  }
  function ch(i, n) {
    Ir(i.childValues.has(n)), Ir(On(n));
    const r = !On(i);
    if (!i.dirtyChildren)
      i.dirtyChildren = Fi.pop() || /* @__PURE__ */ new Set();
    else if (i.dirtyChildren.has(n))
      return;
    i.dirtyChildren.add(n), r && lh(i);
  }
  function fh(i, n) {
    Ir(i.childValues.has(n)), Ir(!On(n));
    const r = i.childValues.get(n);
    r.length === 0 ? i.childValues.set(n, sh(n.value)) : oh(r, n.value) || i.setDirty(), dh(i, n), !On(i) && uh(i);
  }
  function dh(i, n) {
    const r = i.dirtyChildren;
    r && (r.delete(n), r.size === 0 && (Fi.length < zg && Fi.push(r), i.dirtyChildren = null));
  }
  function ph(i) {
    i.childValues.size > 0 && i.childValues.forEach((n, r) => {
      hh(i, r);
    }), i.forgetDeps(), Ir(i.dirtyChildren === null);
  }
  function hh(i, n) {
    n.parents.delete(i), i.childValues.delete(n), dh(i, n);
  }
  function Qg(i, n) {
    if (typeof i.subscribe == "function")
      try {
        gu(i), i.unsubscribe = i.subscribe.apply(null, n);
      } catch {
        return i.setDirty(), !1;
      }
    return !0;
  }
  const qg = {
    setDirty: !0,
    dispose: !0,
    forget: !0
    // Fully remove parent Entry from LRU cache and computation graph
  };
  function vh(i) {
    const n = /* @__PURE__ */ new Map();
    function r(a) {
      const s = ka.getValue();
      if (s) {
        let u = n.get(a);
        u || n.set(a, u = /* @__PURE__ */ new Set()), s.dependOn(u);
      }
    }
    return r.dirty = function(s, u) {
      const f = n.get(s);
      if (f) {
        const p = u && Lg.call(qg, u) ? u : "setDirty";
        yu(f).forEach((h) => h[p]()), n.delete(s), gu(f);
      }
    }, r;
  }
  let $d;
  function Wg(...i) {
    return ($d || ($d = new en(typeof WeakMap == "function"))).lookupArray(i);
  }
  const Tl = /* @__PURE__ */ new Set();
  function Ai(i, { max: n = Math.pow(2, 16), keyArgs: r, makeCacheKey: a = Wg, normalizeResult: s, subscribe: u, cache: f = Ql } = /* @__PURE__ */ Object.create(null)) {
    const p = typeof f == "function" ? new f(n, (g) => g.dispose()) : f, h = function() {
      const g = a.apply(null, r ? r.apply(null, arguments) : arguments);
      if (g === void 0)
        return i.apply(null, arguments);
      let S = p.get(g);
      S || (p.set(g, S = new ba(i)), S.normalizeResult = s, S.subscribe = u, S.forget = () => p.delete(g));
      const C = S.recompute(Array.prototype.slice.call(arguments));
      return p.set(g, S), Tl.add(p), ka.hasValue() || (Tl.forEach((O) => O.clean()), Tl.clear()), C;
    };
    Object.defineProperty(h, "size", {
      get: () => p.size,
      configurable: !1,
      enumerable: !1
    }), Object.freeze(h.options = {
      max: n,
      keyArgs: r,
      makeCacheKey: a,
      normalizeResult: s,
      subscribe: u,
      cache: p
    });
    function m(g) {
      const S = g && p.get(g);
      S && S.setDirty();
    }
    h.dirtyKey = m, h.dirty = function() {
      m(a.apply(null, arguments));
    };
    function y(g) {
      const S = g && p.get(g);
      if (S)
        return S.peek();
    }
    h.peekKey = y, h.peek = function() {
      return y(a.apply(null, arguments));
    };
    function w(g) {
      return g ? p.delete(g) : !1;
    }
    return h.forgetKey = w, h.forget = function() {
      return w(a.apply(null, arguments));
    }, h.makeCacheKey = a, h.getKey = r ? function() {
      return a.apply(null, r.apply(null, arguments));
    } : a, Object.freeze(h);
  }
  function $g(i) {
    return i;
  }
  var mh = (
    /** @class */
    function() {
      function i(n, r) {
        r === void 0 && (r = /* @__PURE__ */ Object.create(null)), this.resultCache = hu ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = n, r.getCacheKey && (this.getCacheKey = r.getCacheKey), this.cached = r.cache !== !1, this.resetCache();
      }
      return i.prototype.getCacheKey = function(n) {
        return [n];
      }, i.identity = function() {
        return new i($g, { cache: !1 });
      }, i.split = function(n, r, a) {
        return a === void 0 && (a = i.identity()), Object.assign(new i(
          function(s) {
            var u = n(s) ? r : a;
            return u.transformDocument(s);
          },
          // Reasonably assume both `left` and `right` transforms handle their own caching
          { cache: !1 }
        ), { left: r, right: a });
      }, i.prototype.resetCache = function() {
        var n = this;
        if (this.cached) {
          var r = new en(Gn);
          this.performWork = Ai(i.prototype.performWork.bind(this), {
            makeCacheKey: function(a) {
              var s = n.getCacheKey(a);
              if (s)
                return ee(Array.isArray(s), 77), r.lookupArray(s);
            },
            max: Xt["documentTransform.cache"],
            cache: da
          });
        }
      }, i.prototype.performWork = function(n) {
        return Pr(n), this.transform(n);
      }, i.prototype.transformDocument = function(n) {
        if (this.resultCache.has(n))
          return n;
        var r = this.performWork(n);
        return this.resultCache.add(r), r;
      }, i.prototype.concat = function(n) {
        var r = this;
        return Object.assign(new i(
          function(a) {
            return n.transformDocument(r.transformDocument(a));
          },
          // Reasonably assume both transforms handle their own caching
          { cache: !1 }
        ), {
          left: this,
          right: n
        });
      }, i;
    }()
  ), Ii, Na = Object.assign(function(i) {
    var n = Ii.get(i);
    return n || (n = Wy(i), Ii.set(i, n)), n;
  }, {
    reset: function() {
      Ii = new Xp(
        Xt.print || 2e3
        /* defaultCacheSizes.print */
      );
    }
  });
  Na.reset();
  globalThis.__DEV__ !== !1 && Jp("print", function() {
    return Ii ? Ii.size : 0;
  });
  var Re = Array.isArray;
  function Vt(i) {
    return Array.isArray(i) && i.length > 0;
  }
  var Hd = {
    kind: W.FIELD,
    name: {
      kind: W.NAME,
      value: "__typename"
    }
  };
  function yh(i, n) {
    return !i || i.selectionSet.selections.every(function(r) {
      return r.kind === W.FRAGMENT_SPREAD && yh(n[r.name.value], n);
    });
  }
  function Hg(i) {
    return yh(Hn(i) || ih(i), Rr(Fr(i))) ? null : i;
  }
  function Gg(i) {
    var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    return i.forEach(function(a) {
      a && (a.name ? n.set(a.name, a) : a.test && r.set(a.test, a));
    }), function(a) {
      var s = n.get(a.name.value);
      return !s && r.size && r.forEach(function(u, f) {
        f(a) && (s = u);
      }), s;
    };
  }
  function Gd(i) {
    var n = /* @__PURE__ */ new Map();
    return function(a) {
      a === void 0 && (a = i);
      var s = n.get(a);
      return s || n.set(a, s = {
        // Variable and fragment spread names used directly within this
        // operation or fragment definition, as identified by key. These sets
        // will be populated during the first traversal of the document in
        // removeDirectivesFromDocument below.
        variables: /* @__PURE__ */ new Set(),
        fragmentSpreads: /* @__PURE__ */ new Set()
      }), s;
    };
  }
  function gh(i, n) {
    Pr(n);
    for (var r = Gd(""), a = Gd(""), s = function(T) {
      for (var R = 0, M = void 0; R < T.length && (M = T[R]); ++R)
        if (!Re(M)) {
          if (M.kind === W.OPERATION_DEFINITION)
            return r(M.name && M.name.value);
          if (M.kind === W.FRAGMENT_DEFINITION)
            return a(M.name.value);
        }
      return globalThis.__DEV__ !== !1 && ee.error(97), null;
    }, u = 0, f = n.definitions.length - 1; f >= 0; --f)
      n.definitions[f].kind === W.OPERATION_DEFINITION && ++u;
    var p = Gg(i), h = function(T) {
      return Vt(T) && T.map(p).some(function(R) {
        return R && R.remove;
      });
    }, m = /* @__PURE__ */ new Map(), y = !1, w = {
      enter: function(T) {
        if (h(T.directives))
          return y = !0, null;
      }
    }, g = Rt(n, {
      // These two AST node types share the same implementation, defined above.
      Field: w,
      InlineFragment: w,
      VariableDefinition: {
        enter: function() {
          return !1;
        }
      },
      Variable: {
        enter: function(T, R, M, V, B) {
          var Q = s(B);
          Q && Q.variables.add(T.name.value);
        }
      },
      FragmentSpread: {
        enter: function(T, R, M, V, B) {
          if (h(T.directives))
            return y = !0, null;
          var Q = s(B);
          Q && Q.fragmentSpreads.add(T.name.value);
        }
      },
      FragmentDefinition: {
        enter: function(T, R, M, V) {
          m.set(JSON.stringify(V), T);
        },
        leave: function(T, R, M, V) {
          var B = m.get(JSON.stringify(V));
          if (T === B)
            return T;
          if (
            // This logic applies only if the document contains one or more
            // operations, since removing all fragments from a document containing
            // only fragments makes the document useless.
            u > 0 && T.selectionSet.selections.every(function(Q) {
              return Q.kind === W.FIELD && Q.name.value === "__typename";
            })
          )
            return a(T.name.value).removed = !0, y = !0, null;
        }
      },
      Directive: {
        leave: function(T) {
          if (p(T))
            return y = !0, null;
        }
      }
    });
    if (!y)
      return n;
    var S = function(T) {
      return T.transitiveVars || (T.transitiveVars = new Set(T.variables), T.removed || T.fragmentSpreads.forEach(function(R) {
        S(a(R)).transitiveVars.forEach(function(M) {
          T.transitiveVars.add(M);
        });
      })), T;
    }, C = /* @__PURE__ */ new Set();
    g.definitions.forEach(function(T) {
      T.kind === W.OPERATION_DEFINITION ? S(r(T.name && T.name.value)).fragmentSpreads.forEach(function(R) {
        C.add(R);
      }) : T.kind === W.FRAGMENT_DEFINITION && // If there are no operations in the document, then all fragment
      // definitions count as usages of their own fragment names. This heuristic
      // prevents accidentally removing all fragment definitions from the
      // document just because it contains no operations that use the fragments.
      u === 0 && !a(T.name.value).removed && C.add(T.name.value);
    }), C.forEach(function(T) {
      S(a(T)).fragmentSpreads.forEach(function(R) {
        C.add(R);
      });
    });
    var O = function(T) {
      return !!// A fragment definition will be removed if there are no spreads that refer
      // to it, or the fragment was explicitly removed because it had no fields
      // other than __typename.
      (!C.has(T) || a(T).removed);
    }, I = {
      enter: function(T) {
        if (O(T.name.value))
          return null;
      }
    };
    return Hg(Rt(g, {
      // If the fragment is going to be removed, then leaving any dangling
      // FragmentSpread nodes with the same name would be a mistake.
      FragmentSpread: I,
      // This is where the fragment definition is actually removed.
      FragmentDefinition: I,
      OperationDefinition: {
        leave: function(T) {
          if (T.variableDefinitions) {
            var R = S(
              // If an operation is anonymous, we use the empty string as its key.
              r(T.name && T.name.value)
            ).transitiveVars;
            if (R.size < T.variableDefinitions.length)
              return N(N({}, T), { variableDefinitions: T.variableDefinitions.filter(function(M) {
                return R.has(M.variable.name.value);
              }) });
          }
        }
      }
    }));
  }
  var wu = Object.assign(function(i) {
    return Rt(i, {
      SelectionSet: {
        enter: function(n, r, a) {
          if (!(a && a.kind === W.OPERATION_DEFINITION)) {
            var s = n.selections;
            if (s) {
              var u = s.some(function(p) {
                return Tn(p) && (p.name.value === "__typename" || p.name.value.lastIndexOf("__", 0) === 0);
              });
              if (!u) {
                var f = a;
                if (!(Tn(f) && f.directives && f.directives.some(function(p) {
                  return p.name.value === "export";
                })))
                  return N(N({}, n), { selections: rt(rt([], s, !0), [Hd], !1) });
              }
            }
          }
        }
      }
    });
  }, {
    added: function(i) {
      return i === Hd;
    }
  });
  function Yg(i) {
    var n = Bi(i), r = n.operation;
    if (r === "query")
      return i;
    var a = Rt(i, {
      OperationDefinition: {
        enter: function(s) {
          return N(N({}, s), { operation: "query" });
        }
      }
    });
    return a;
  }
  function _h(i) {
    Pr(i);
    var n = gh([
      {
        test: function(r) {
          return r.name.value === "client";
        },
        remove: !0
      }
    ], i);
    return n;
  }
  function Kg(i) {
    return Pr(i), Rt(i, {
      FragmentSpread: function(n) {
        var r;
        if (!(!((r = n.directives) === null || r === void 0) && r.some(function(a) {
          return a.name.value === "unmask";
        })))
          return N(N({}, n), { directives: rt(rt([], n.directives || [], !0), [
            {
              kind: W.DIRECTIVE,
              name: { kind: W.NAME, value: "nonreactive" }
            }
          ], !1) });
      }
    });
  }
  var Xg = Object.prototype.hasOwnProperty;
  function Yd() {
    for (var i = [], n = 0; n < arguments.length; n++)
      i[n] = arguments[n];
    return Ta(i);
  }
  function Ta(i) {
    var n = i[0] || {}, r = i.length;
    if (r > 1)
      for (var a = new xn(), s = 1; s < r; ++s)
        n = a.merge(n, i[s]);
    return n;
  }
  var Jg = function(i, n, r) {
    return this.merge(i[r], n[r]);
  }, xn = (
    /** @class */
    function() {
      function i(n) {
        n === void 0 && (n = Jg), this.reconciler = n, this.isObject = Me, this.pastCopies = /* @__PURE__ */ new Set();
      }
      return i.prototype.merge = function(n, r) {
        for (var a = this, s = [], u = 2; u < arguments.length; u++)
          s[u - 2] = arguments[u];
        return Me(r) && Me(n) ? (Object.keys(r).forEach(function(f) {
          if (Xg.call(n, f)) {
            var p = n[f];
            if (r[f] !== p) {
              var h = a.reconciler.apply(a, rt([
                n,
                r,
                f
              ], s, !1));
              h !== p && (n = a.shallowCopyForMerge(n), n[f] = h);
            }
          } else
            n = a.shallowCopyForMerge(n), n[f] = r[f];
        }), n) : r;
      }, i.prototype.shallowCopyForMerge = function(n) {
        return Me(n) && (this.pastCopies.has(n) || (Array.isArray(n) ? n = n.slice(0) : n = N({ __proto__: Object.getPrototypeOf(n) }, n), this.pastCopies.add(n))), n;
      }, i;
    }()
  );
  function Zg(i, n) {
    var r = typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
    if (r) return (r = r.call(i)).next.bind(r);
    if (Array.isArray(i) || (r = e0(i)) || n) {
      r && (i = r);
      var a = 0;
      return function() {
        return a >= i.length ? { done: !0 } : { done: !1, value: i[a++] };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function e0(i, n) {
    if (i) {
      if (typeof i == "string") return Kd(i, n);
      var r = Object.prototype.toString.call(i).slice(8, -1);
      if (r === "Object" && i.constructor && (r = i.constructor.name), r === "Map" || r === "Set") return Array.from(i);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Kd(i, n);
    }
  }
  function Kd(i, n) {
    (n == null || n > i.length) && (n = i.length);
    for (var r = 0, a = new Array(n); r < n; r++)
      a[r] = i[r];
    return a;
  }
  function Xd(i, n) {
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(i, a.key, a);
    }
  }
  function Eu(i, n, r) {
    return n && Xd(i.prototype, n), r && Xd(i, r), Object.defineProperty(i, "prototype", { writable: !1 }), i;
  }
  var Su = function() {
    return typeof Symbol == "function";
  }, ku = function(i) {
    return Su() && !!Symbol[i];
  }, bu = function(i) {
    return ku(i) ? Symbol[i] : "@@" + i;
  };
  Su() && !ku("observable") && (Symbol.observable = Symbol("observable"));
  var t0 = bu("iterator"), Gl = bu("observable"), wh = bu("species");
  function pa(i, n) {
    var r = i[n];
    if (r != null) {
      if (typeof r != "function") throw new TypeError(r + " is not a function");
      return r;
    }
  }
  function bi(i) {
    var n = i.constructor;
    return n !== void 0 && (n = n[wh], n === null && (n = void 0)), n !== void 0 ? n : ke;
  }
  function n0(i) {
    return i instanceof ke;
  }
  function Dr(i) {
    Dr.log ? Dr.log(i) : setTimeout(function() {
      throw i;
    });
  }
  function sa(i) {
    Promise.resolve().then(function() {
      try {
        i();
      } catch (n) {
        Dr(n);
      }
    });
  }
  function Eh(i) {
    var n = i._cleanup;
    if (n !== void 0 && (i._cleanup = void 0, !!n))
      try {
        if (typeof n == "function")
          n();
        else {
          var r = pa(n, "unsubscribe");
          r && r.call(n);
        }
      } catch (a) {
        Dr(a);
      }
  }
  function Yl(i) {
    i._observer = void 0, i._queue = void 0, i._state = "closed";
  }
  function r0(i) {
    var n = i._queue;
    if (n) {
      i._queue = void 0, i._state = "ready";
      for (var r = 0; r < n.length && (Sh(i, n[r].type, n[r].value), i._state !== "closed"); ++r)
        ;
    }
  }
  function Sh(i, n, r) {
    i._state = "running";
    var a = i._observer;
    try {
      var s = pa(a, n);
      switch (n) {
        case "next":
          s && s.call(a, r);
          break;
        case "error":
          if (Yl(i), s) s.call(a, r);
          else throw r;
          break;
        case "complete":
          Yl(i), s && s.call(a);
          break;
      }
    } catch (u) {
      Dr(u);
    }
    i._state === "closed" ? Eh(i) : i._state === "running" && (i._state = "ready");
  }
  function Ol(i, n, r) {
    if (i._state !== "closed") {
      if (i._state === "buffering") {
        i._queue.push({
          type: n,
          value: r
        });
        return;
      }
      if (i._state !== "ready") {
        i._state = "buffering", i._queue = [{
          type: n,
          value: r
        }], sa(function() {
          return r0(i);
        });
        return;
      }
      Sh(i, n, r);
    }
  }
  var i0 = /* @__PURE__ */ function() {
    function i(r, a) {
      this._cleanup = void 0, this._observer = r, this._queue = void 0, this._state = "initializing";
      var s = new o0(this);
      try {
        this._cleanup = a.call(void 0, s);
      } catch (u) {
        s.error(u);
      }
      this._state === "initializing" && (this._state = "ready");
    }
    var n = i.prototype;
    return n.unsubscribe = function() {
      this._state !== "closed" && (Yl(this), Eh(this));
    }, Eu(i, [{
      key: "closed",
      get: function() {
        return this._state === "closed";
      }
    }]), i;
  }(), o0 = /* @__PURE__ */ function() {
    function i(r) {
      this._subscription = r;
    }
    var n = i.prototype;
    return n.next = function(a) {
      Ol(this._subscription, "next", a);
    }, n.error = function(a) {
      Ol(this._subscription, "error", a);
    }, n.complete = function() {
      Ol(this._subscription, "complete");
    }, Eu(i, [{
      key: "closed",
      get: function() {
        return this._subscription._state === "closed";
      }
    }]), i;
  }(), ke = /* @__PURE__ */ function() {
    function i(r) {
      if (!(this instanceof i)) throw new TypeError("Observable cannot be called as a function");
      if (typeof r != "function") throw new TypeError("Observable initializer must be a function");
      this._subscriber = r;
    }
    var n = i.prototype;
    return n.subscribe = function(a) {
      return (typeof a != "object" || a === null) && (a = {
        next: a,
        error: arguments[1],
        complete: arguments[2]
      }), new i0(a, this._subscriber);
    }, n.forEach = function(a) {
      var s = this;
      return new Promise(function(u, f) {
        if (typeof a != "function") {
          f(new TypeError(a + " is not a function"));
          return;
        }
        function p() {
          h.unsubscribe(), u();
        }
        var h = s.subscribe({
          next: function(m) {
            try {
              a(m, p);
            } catch (y) {
              f(y), h.unsubscribe();
            }
          },
          error: f,
          complete: u
        });
      });
    }, n.map = function(a) {
      var s = this;
      if (typeof a != "function") throw new TypeError(a + " is not a function");
      var u = bi(this);
      return new u(function(f) {
        return s.subscribe({
          next: function(p) {
            try {
              p = a(p);
            } catch (h) {
              return f.error(h);
            }
            f.next(p);
          },
          error: function(p) {
            f.error(p);
          },
          complete: function() {
            f.complete();
          }
        });
      });
    }, n.filter = function(a) {
      var s = this;
      if (typeof a != "function") throw new TypeError(a + " is not a function");
      var u = bi(this);
      return new u(function(f) {
        return s.subscribe({
          next: function(p) {
            try {
              if (!a(p)) return;
            } catch (h) {
              return f.error(h);
            }
            f.next(p);
          },
          error: function(p) {
            f.error(p);
          },
          complete: function() {
            f.complete();
          }
        });
      });
    }, n.reduce = function(a) {
      var s = this;
      if (typeof a != "function") throw new TypeError(a + " is not a function");
      var u = bi(this), f = arguments.length > 1, p = !1, h = arguments[1], m = h;
      return new u(function(y) {
        return s.subscribe({
          next: function(w) {
            var g = !p;
            if (p = !0, !g || f)
              try {
                m = a(m, w);
              } catch (S) {
                return y.error(S);
              }
            else
              m = w;
          },
          error: function(w) {
            y.error(w);
          },
          complete: function() {
            if (!p && !f) return y.error(new TypeError("Cannot reduce an empty sequence"));
            y.next(m), y.complete();
          }
        });
      });
    }, n.concat = function() {
      for (var a = this, s = arguments.length, u = new Array(s), f = 0; f < s; f++)
        u[f] = arguments[f];
      var p = bi(this);
      return new p(function(h) {
        var m, y = 0;
        function w(g) {
          m = g.subscribe({
            next: function(S) {
              h.next(S);
            },
            error: function(S) {
              h.error(S);
            },
            complete: function() {
              y === u.length ? (m = void 0, h.complete()) : w(p.from(u[y++]));
            }
          });
        }
        return w(a), function() {
          m && (m.unsubscribe(), m = void 0);
        };
      });
    }, n.flatMap = function(a) {
      var s = this;
      if (typeof a != "function") throw new TypeError(a + " is not a function");
      var u = bi(this);
      return new u(function(f) {
        var p = [], h = s.subscribe({
          next: function(y) {
            if (a)
              try {
                y = a(y);
              } catch (g) {
                return f.error(g);
              }
            var w = u.from(y).subscribe({
              next: function(g) {
                f.next(g);
              },
              error: function(g) {
                f.error(g);
              },
              complete: function() {
                var g = p.indexOf(w);
                g >= 0 && p.splice(g, 1), m();
              }
            });
            p.push(w);
          },
          error: function(y) {
            f.error(y);
          },
          complete: function() {
            m();
          }
        });
        function m() {
          h.closed && p.length === 0 && f.complete();
        }
        return function() {
          p.forEach(function(y) {
            return y.unsubscribe();
          }), h.unsubscribe();
        };
      });
    }, n[Gl] = function() {
      return this;
    }, i.from = function(a) {
      var s = typeof this == "function" ? this : i;
      if (a == null) throw new TypeError(a + " is not an object");
      var u = pa(a, Gl);
      if (u) {
        var f = u.call(a);
        if (Object(f) !== f) throw new TypeError(f + " is not an object");
        return n0(f) && f.constructor === s ? f : new s(function(p) {
          return f.subscribe(p);
        });
      }
      if (ku("iterator") && (u = pa(a, t0), u))
        return new s(function(p) {
          sa(function() {
            if (!p.closed) {
              for (var h = Zg(u.call(a)), m; !(m = h()).done; ) {
                var y = m.value;
                if (p.next(y), p.closed) return;
              }
              p.complete();
            }
          });
        });
      if (Array.isArray(a))
        return new s(function(p) {
          sa(function() {
            if (!p.closed) {
              for (var h = 0; h < a.length; ++h)
                if (p.next(a[h]), p.closed) return;
              p.complete();
            }
          });
        });
      throw new TypeError(a + " is not observable");
    }, i.of = function() {
      for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++)
        s[u] = arguments[u];
      var f = typeof this == "function" ? this : i;
      return new f(function(p) {
        sa(function() {
          if (!p.closed) {
            for (var h = 0; h < s.length; ++h)
              if (p.next(s[h]), p.closed) return;
            p.complete();
          }
        });
      });
    }, Eu(i, null, [{
      key: wh,
      get: function() {
        return this;
      }
    }]), i;
  }();
  Su() && Object.defineProperty(ke, Symbol("extensions"), {
    value: {
      symbol: Gl,
      hostReportError: Dr
    },
    configurable: !0
  });
  function a0(i) {
    var n, r = i.Symbol;
    if (typeof r == "function")
      if (r.observable)
        n = r.observable;
      else {
        typeof r.for == "function" ? n = r.for("https://github.com/benlesh/symbol-observable") : n = r("https://github.com/benlesh/symbol-observable");
        try {
          r.observable = n;
        } catch {
        }
      }
    else
      n = "@@observable";
    return n;
  }
  var wr;
  typeof self < "u" ? wr = self : typeof window < "u" ? wr = window : typeof global < "u" ? wr = global : typeof lu < "u" ? wr = lu : wr = Function("return this")();
  a0(wr);
  var Jd = ke.prototype, Zd = "@@observable";
  Jd[Zd] || (Jd[Zd] = function() {
    return this;
  });
  function s0(i) {
    return i.catch(function() {
    }), i;
  }
  var l0 = Object.prototype.toString;
  function kh(i) {
    return Kl(i);
  }
  function Kl(i, n) {
    switch (l0.call(i)) {
      case "[object Array]": {
        if (n = n || /* @__PURE__ */ new Map(), n.has(i))
          return n.get(i);
        var r = i.slice(0);
        return n.set(i, r), r.forEach(function(s, u) {
          r[u] = Kl(s, n);
        }), r;
      }
      case "[object Object]": {
        if (n = n || /* @__PURE__ */ new Map(), n.has(i))
          return n.get(i);
        var a = Object.create(Object.getPrototypeOf(i));
        return n.set(i, a), Object.keys(i).forEach(function(s) {
          a[s] = Kl(i[s], n);
        }), a;
      }
      default:
        return i;
    }
  }
  function u0(i) {
    var n = /* @__PURE__ */ new Set([i]);
    return n.forEach(function(r) {
      Me(r) && c0(r) === r && Object.getOwnPropertyNames(r).forEach(function(a) {
        Me(r[a]) && n.add(r[a]);
      });
    }), i;
  }
  function c0(i) {
    if (globalThis.__DEV__ !== !1 && !Object.isFrozen(i))
      try {
        Object.freeze(i);
      } catch (n) {
        if (n instanceof TypeError)
          return null;
        throw n;
      }
    return i;
  }
  function ha(i) {
    return globalThis.__DEV__ !== !1 && u0(i), i;
  }
  function Di(i, n, r) {
    var a = [];
    i.forEach(function(s) {
      return s[n] && a.push(s);
    }), a.forEach(function(s) {
      return s[n](r);
    });
  }
  function xl(i, n, r) {
    return new ke(function(a) {
      var s = {
        // Normally we would initialize promiseQueue to Promise.resolve(), but
        // in this case, for backwards compatibility, we need to be careful to
        // invoke the first callback synchronously.
        then: function(h) {
          return new Promise(function(m) {
            return m(h());
          });
        }
      };
      function u(h, m) {
        return function(y) {
          if (h) {
            var w = function() {
              return a.closed ? (
                /* will be swallowed */
                0
              ) : h(y);
            };
            s = s.then(w, w).then(function(g) {
              return a.next(g);
            }, function(g) {
              return a.error(g);
            });
          } else
            a[m](y);
        };
      }
      var f = {
        next: u(n, "next"),
        error: u(r, "error"),
        complete: function() {
          s.then(function() {
            return a.complete();
          });
        }
      }, p = i.subscribe(f);
      return function() {
        return p.unsubscribe();
      };
    });
  }
  function bh(i) {
    function n(r) {
      Object.defineProperty(i, r, { value: ke });
    }
    return Yp && Symbol.species && n(Symbol.species), n("@@species"), i;
  }
  function ep(i) {
    return i && typeof i.then == "function";
  }
  var Er = (
    /** @class */
    function(i) {
      Bt(n, i);
      function n(r) {
        var a = i.call(this, function(s) {
          return a.addObserver(s), function() {
            return a.removeObserver(s);
          };
        }) || this;
        return a.observers = /* @__PURE__ */ new Set(), a.promise = new Promise(function(s, u) {
          a.resolve = s, a.reject = u;
        }), a.handlers = {
          next: function(s) {
            a.sub !== null && (a.latest = ["next", s], a.notify("next", s), Di(a.observers, "next", s));
          },
          error: function(s) {
            var u = a.sub;
            u !== null && (u && setTimeout(function() {
              return u.unsubscribe();
            }), a.sub = null, a.latest = ["error", s], a.reject(s), a.notify("error", s), Di(a.observers, "error", s));
          },
          complete: function() {
            var s = a, u = s.sub, f = s.sources, p = f === void 0 ? [] : f;
            if (u !== null) {
              var h = p.shift();
              h ? ep(h) ? h.then(function(m) {
                return a.sub = m.subscribe(a.handlers);
              }, a.handlers.error) : a.sub = h.subscribe(a.handlers) : (u && setTimeout(function() {
                return u.unsubscribe();
              }), a.sub = null, a.latest && a.latest[0] === "next" ? a.resolve(a.latest[1]) : a.resolve(), a.notify("complete"), Di(a.observers, "complete"));
            }
          }
        }, a.nextResultListeners = /* @__PURE__ */ new Set(), a.cancel = function(s) {
          a.reject(s), a.sources = [], a.handlers.error(s);
        }, a.promise.catch(function(s) {
        }), typeof r == "function" && (r = [new ke(r)]), ep(r) ? r.then(function(s) {
          return a.start(s);
        }, a.handlers.error) : a.start(r), a;
      }
      return n.prototype.start = function(r) {
        this.sub === void 0 && (this.sources = Array.from(r), this.handlers.complete());
      }, n.prototype.deliverLastMessage = function(r) {
        if (this.latest) {
          var a = this.latest[0], s = r[a];
          s && s.call(r, this.latest[1]), this.sub === null && a === "next" && r.complete && r.complete();
        }
      }, n.prototype.addObserver = function(r) {
        this.observers.has(r) || (this.deliverLastMessage(r), this.observers.add(r));
      }, n.prototype.removeObserver = function(r) {
        this.observers.delete(r) && this.observers.size < 1 && this.handlers.complete();
      }, n.prototype.notify = function(r, a) {
        var s = this.nextResultListeners;
        s.size && (this.nextResultListeners = /* @__PURE__ */ new Set(), s.forEach(function(u) {
          return u(r, a);
        }));
      }, n.prototype.beforeNext = function(r) {
        var a = !1;
        this.nextResultListeners.add(function(s, u) {
          a || (a = !0, r(s, u));
        });
      }, n;
    }(ke)
  );
  bh(Er);
  function Or(i) {
    return "incremental" in i;
  }
  function f0(i) {
    return "hasNext" in i && "data" in i;
  }
  function d0(i) {
    return Or(i) || f0(i);
  }
  function p0(i) {
    return Me(i) && "payload" in i;
  }
  function Nh(i, n) {
    var r = i, a = new xn();
    return Or(n) && Vt(n.incremental) && n.incremental.forEach(function(s) {
      for (var u = s.data, f = s.path, p = f.length - 1; p >= 0; --p) {
        var h = f[p], m = !isNaN(+h), y = m ? [] : {};
        y[h] = u, u = y;
      }
      r = a.merge(r, u);
    }), r;
  }
  function la(i) {
    var n = Xl(i);
    return Vt(n);
  }
  function Xl(i) {
    var n = Vt(i.errors) ? i.errors.slice(0) : [];
    return Or(i) && Vt(i.incremental) && i.incremental.forEach(function(r) {
      r.errors && n.push.apply(n, r.errors);
    }), n;
  }
  function jr() {
    for (var i = [], n = 0; n < arguments.length; n++)
      i[n] = arguments[n];
    var r = /* @__PURE__ */ Object.create(null);
    return i.forEach(function(a) {
      a && Object.keys(a).forEach(function(s) {
        var u = a[s];
        u !== void 0 && (r[s] = u);
      });
    }), r;
  }
  function Cl(i, n) {
    return jr(i, n, n.variables && {
      variables: jr(N(N({}, i && i.variables), n.variables))
    });
  }
  function Il(i) {
    return new ke(function(n) {
      n.error(i);
    });
  }
  var Th = function(i, n, r) {
    var a = new Error(r);
    throw a.name = "ServerError", a.response = i, a.statusCode = i.status, a.result = n, a;
  };
  function h0(i) {
    for (var n = [
      "query",
      "operationName",
      "variables",
      "extensions",
      "context"
    ], r = 0, a = Object.keys(i); r < a.length; r++) {
      var s = a[r];
      if (n.indexOf(s) < 0)
        throw at(46, s);
    }
    return i;
  }
  function v0(i, n) {
    var r = N({}, i), a = function(u) {
      typeof u == "function" ? r = N(N({}, r), u(r)) : r = N(N({}, r), u);
    }, s = function() {
      return N({}, r);
    };
    return Object.defineProperty(n, "setContext", {
      enumerable: !1,
      value: a
    }), Object.defineProperty(n, "getContext", {
      enumerable: !1,
      value: s
    }), n;
  }
  function m0(i) {
    var n = {
      variables: i.variables || {},
      extensions: i.extensions || {},
      operationName: i.operationName,
      query: i.query
    };
    return n.operationName || (n.operationName = typeof n.query != "string" ? aa(n.query) || void 0 : ""), n;
  }
  function y0(i, n) {
    var r = N({}, i), a = new Set(Object.keys(i));
    return Rt(n, {
      Variable: function(s, u, f) {
        f && f.kind !== "VariableDefinition" && a.delete(s.name.value);
      }
    }), a.forEach(function(s) {
      delete r[s];
    }), r;
  }
  function tp(i, n) {
    return n ? n(i) : ke.of();
  }
  function Ni(i) {
    return typeof i == "function" ? new Ui(i) : i;
  }
  function ra(i) {
    return i.request.length <= 1;
  }
  var Ui = (
    /** @class */
    function() {
      function i(n) {
        n && (this.request = n);
      }
      return i.empty = function() {
        return new i(function() {
          return ke.of();
        });
      }, i.from = function(n) {
        return n.length === 0 ? i.empty() : n.map(Ni).reduce(function(r, a) {
          return r.concat(a);
        });
      }, i.split = function(n, r, a) {
        var s = Ni(r), u = Ni(a || new i(tp)), f;
        return ra(s) && ra(u) ? f = new i(function(p) {
          return n(p) ? s.request(p) || ke.of() : u.request(p) || ke.of();
        }) : f = new i(function(p, h) {
          return n(p) ? s.request(p, h) || ke.of() : u.request(p, h) || ke.of();
        }), Object.assign(f, { left: s, right: u });
      }, i.execute = function(n, r) {
        return n.request(v0(r.context, m0(h0(r)))) || ke.of();
      }, i.concat = function(n, r) {
        var a = Ni(n);
        if (ra(a))
          return globalThis.__DEV__ !== !1 && ee.warn(38, a), a;
        var s = Ni(r), u;
        return ra(s) ? u = new i(function(f) {
          return a.request(f, function(p) {
            return s.request(p) || ke.of();
          }) || ke.of();
        }) : u = new i(function(f, p) {
          return a.request(f, function(h) {
            return s.request(h, p) || ke.of();
          }) || ke.of();
        }), Object.assign(u, { left: a, right: s });
      }, i.prototype.split = function(n, r, a) {
        return this.concat(i.split(n, r, a || new i(tp)));
      }, i.prototype.concat = function(n) {
        return i.concat(this, n);
      }, i.prototype.request = function(n, r) {
        throw at(39);
      }, i.prototype.onError = function(n, r) {
        if (r && r.error)
          return r.error(n), !1;
        throw n;
      }, i.prototype.setOnError = function(n) {
        return this.onError = n, this;
      }, i;
    }()
  ), Jl = Ui.execute;
  function g0(i) {
    var n, r = i[Symbol.asyncIterator]();
    return n = {
      next: function() {
        return r.next();
      }
    }, n[Symbol.asyncIterator] = function() {
      return this;
    }, n;
  }
  function _0(i) {
    var n = null, r = null, a = !1, s = [], u = [];
    function f(w) {
      if (!r) {
        if (u.length) {
          var g = u.shift();
          if (Array.isArray(g) && g[0])
            return g[0]({ value: w, done: !1 });
        }
        s.push(w);
      }
    }
    function p(w) {
      r = w;
      var g = u.slice();
      g.forEach(function(S) {
        S[1](w);
      }), !n || n();
    }
    function h() {
      a = !0;
      var w = u.slice();
      w.forEach(function(g) {
        g[0]({ value: void 0, done: !0 });
      }), !n || n();
    }
    n = function() {
      n = null, i.removeListener("data", f), i.removeListener("error", p), i.removeListener("end", h), i.removeListener("finish", h), i.removeListener("close", h);
    }, i.on("data", f), i.on("error", p), i.on("end", h), i.on("finish", h), i.on("close", h);
    function m() {
      return new Promise(function(w, g) {
        if (r)
          return g(r);
        if (s.length)
          return w({ value: s.shift(), done: !1 });
        if (a)
          return w({ value: void 0, done: !0 });
        u.push([w, g]);
      });
    }
    var y = {
      next: function() {
        return m();
      }
    };
    return wa && (y[Symbol.asyncIterator] = function() {
      return this;
    }), y;
  }
  function w0(i) {
    var n = !1, r = {
      next: function() {
        return n ? Promise.resolve({
          value: void 0,
          done: !0
        }) : (n = !0, new Promise(function(a, s) {
          i.then(function(u) {
            a({ value: u, done: !1 });
          }).catch(s);
        }));
      }
    };
    return wa && (r[Symbol.asyncIterator] = function() {
      return this;
    }), r;
  }
  function np(i) {
    var n = {
      next: function() {
        return i.read();
      }
    };
    return wa && (n[Symbol.asyncIterator] = function() {
      return this;
    }), n;
  }
  function E0(i) {
    return !!i.body;
  }
  function S0(i) {
    return !!i.getReader;
  }
  function k0(i) {
    return !!(wa && i[Symbol.asyncIterator]);
  }
  function b0(i) {
    return !!i.stream;
  }
  function N0(i) {
    return !!i.arrayBuffer;
  }
  function T0(i) {
    return !!i.pipe;
  }
  function O0(i) {
    var n = i;
    if (E0(i) && (n = i.body), k0(n))
      return g0(n);
    if (S0(n))
      return np(n.getReader());
    if (b0(n))
      return np(n.stream().getReader());
    if (N0(n))
      return w0(n.arrayBuffer());
    if (T0(n))
      return _0(n);
    throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
  }
  var Nu = Symbol();
  function x0(i) {
    return i.extensions ? Array.isArray(i.extensions[Nu]) : !1;
  }
  function Oh(i) {
    return i.hasOwnProperty("graphQLErrors");
  }
  var C0 = function(i) {
    var n = rt(rt(rt([], i.graphQLErrors, !0), i.clientErrors, !0), i.protocolErrors, !0);
    return i.networkError && n.push(i.networkError), n.map(function(r) {
      return Me(r) && r.message || "Error message not found.";
    }).join(`
`);
  }, qn = (
    /** @class */
    function(i) {
      Bt(n, i);
      function n(r) {
        var a = r.graphQLErrors, s = r.protocolErrors, u = r.clientErrors, f = r.networkError, p = r.errorMessage, h = r.extraInfo, m = i.call(this, p) || this;
        return m.name = "ApolloError", m.graphQLErrors = a || [], m.protocolErrors = s || [], m.clientErrors = u || [], m.networkError = f || null, m.message = p || C0(m), m.extraInfo = h, m.cause = rt(rt(rt([
          f
        ], a || [], !0), s || [], !0), u || [], !0).find(function(y) {
          return !!y;
        }) || null, m.__proto__ = n.prototype, m;
      }
      return n;
    }(Error)
  ), rp = Object.prototype.hasOwnProperty;
  function I0(i, n) {
    return Sn(this, void 0, void 0, function() {
      var r, a, s, u, f, p, h, m, y, w, g, S, C, O, I, T, R, M, V, B, Q, te, ie, ue;
      return kn(this, function(fe) {
        switch (fe.label) {
          case 0:
            if (TextDecoder === void 0)
              throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
            r = new TextDecoder("utf-8"), a = (ue = i.headers) === null || ue === void 0 ? void 0 : ue.get("content-type"), s = "boundary=", u = a != null && a.includes(s) ? a == null ? void 0 : a.substring((a == null ? void 0 : a.indexOf(s)) + s.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", f = `\r
--`.concat(u), p = "", h = O0(i), m = !0, fe.label = 1;
          case 1:
            return m ? [4, h.next()] : [3, 3];
          case 2:
            for (y = fe.sent(), w = y.value, g = y.done, S = typeof w == "string" ? w : r.decode(w), C = p.length - f.length + 1, m = !g, p += S, O = p.indexOf(f, C); O > -1; ) {
              if (I = void 0, te = [
                p.slice(0, O),
                p.slice(O + f.length)
              ], I = te[0], p = te[1], T = I.indexOf(`\r
\r
`), R = D0(I.slice(0, T)), M = R["content-type"], M && M.toLowerCase().indexOf("application/json") === -1)
                throw new Error("Unsupported patch content type: application/json is required.");
              if (V = I.slice(T), V) {
                if (B = xh(i, V), Object.keys(B).length > 1 || "data" in B || "incremental" in B || "errors" in B || "payload" in B)
                  if (p0(B)) {
                    if (Q = {}, "payload" in B) {
                      if (Object.keys(B).length === 1 && B.payload === null)
                        return [
                          2
                          /*return*/
                        ];
                      Q = N({}, B.payload);
                    }
                    "errors" in B && (Q = N(N({}, Q), { extensions: N(N({}, "extensions" in Q ? Q.extensions : null), (ie = {}, ie[Nu] = B.errors, ie)) })), n(Q);
                  } else
                    n(B);
                else if (
                  // If the chunk contains only a "hasNext: false", we can call
                  // observer.complete() immediately.
                  Object.keys(B).length === 1 && "hasNext" in B && !B.hasNext
                )
                  return [
                    2
                    /*return*/
                  ];
              }
              O = p.indexOf(f);
            }
            return [3, 1];
          case 3:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function D0(i) {
    var n = {};
    return i.split(`
`).forEach(function(r) {
      var a = r.indexOf(":");
      if (a > -1) {
        var s = r.slice(0, a).trim().toLowerCase(), u = r.slice(a + 1).trim();
        n[s] = u;
      }
    }), n;
  }
  function xh(i, n) {
    if (i.status >= 300) {
      var r = function() {
        try {
          return JSON.parse(n);
        } catch {
          return n;
        }
      };
      Th(i, r(), "Response not successful: Received status code ".concat(i.status));
    }
    try {
      return JSON.parse(n);
    } catch (s) {
      var a = s;
      throw a.name = "ServerParseError", a.response = i, a.statusCode = i.status, a.bodyText = n, a;
    }
  }
  function j0(i, n) {
    i.result && i.result.errors && i.result.data && n.next(i.result), n.error(i);
  }
  function M0(i) {
    return function(n) {
      return n.text().then(function(r) {
        return xh(n, r);
      }).then(function(r) {
        return !Array.isArray(r) && !rp.call(r, "data") && !rp.call(r, "errors") && Th(n, r, "Server response was missing for query '".concat(Array.isArray(i) ? i.map(function(a) {
          return a.operationName;
        }) : i.operationName, "'.")), r;
      });
    };
  }
  var Zl = function(i, n) {
    var r;
    try {
      r = JSON.stringify(i);
    } catch (s) {
      var a = at(42, n, s.message);
      throw a.parseError = s, a;
    }
    return r;
  }, R0 = {
    includeQuery: !0,
    includeExtensions: !1,
    preserveHeaderCase: !1
  }, P0 = {
    // headers are case insensitive (https://stackoverflow.com/a/5259004)
    accept: "*/*",
    // The content-type header describes the type of the body of the request, and
    // so it typically only is sent with requests that actually have bodies. One
    // could imagine that Apollo Client would remove this header when constructing
    // a GET request (which has no body), but we historically have not done that.
    // This means that browsers will preflight all Apollo Client requests (even
    // GET requests). Apollo Server's CSRF prevention feature (introduced in
    // AS3.7) takes advantage of this fact and does not block requests with this
    // header. If you want to drop this header from GET requests, then you should
    // probably replace it with a `apollo-require-preflight` header, or servers
    // with CSRF prevention enabled might block your GET request. See
    // https://www.apollographql.com/docs/apollo-server/security/cors/#preventing-cross-site-request-forgery-csrf
    // for more details.
    "content-type": "application/json"
  }, F0 = {
    method: "POST"
  }, A0 = {
    http: R0,
    headers: P0,
    options: F0
  }, L0 = function(i, n) {
    return n(i);
  };
  function z0(i, n) {
    for (var r = [], a = 2; a < arguments.length; a++)
      r[a - 2] = arguments[a];
    var s = {}, u = {};
    r.forEach(function(w) {
      s = N(N(N({}, s), w.options), { headers: N(N({}, s.headers), w.headers) }), w.credentials && (s.credentials = w.credentials), u = N(N({}, u), w.http);
    }), s.headers && (s.headers = V0(s.headers, u.preserveHeaderCase));
    var f = i.operationName, p = i.extensions, h = i.variables, m = i.query, y = { operationName: f, variables: h };
    return u.includeExtensions && (y.extensions = p), u.includeQuery && (y.query = n(m, Na)), {
      options: s,
      body: y
    };
  }
  function V0(i, n) {
    if (!n) {
      var r = {};
      return Object.keys(Object(i)).forEach(function(u) {
        r[u.toLowerCase()] = i[u];
      }), r;
    }
    var a = {};
    Object.keys(Object(i)).forEach(function(u) {
      a[u.toLowerCase()] = {
        originalName: u,
        value: i[u]
      };
    });
    var s = {};
    return Object.keys(a).forEach(function(u) {
      s[a[u].originalName] = a[u].value;
    }), s;
  }
  var B0 = function(i) {
    if (!i && typeof fetch > "u")
      throw at(40);
  }, U0 = function(i, n) {
    var r = i.getContext(), a = r.uri;
    return a || (typeof n == "function" ? n(i) : n || "/graphql");
  };
  function Q0(i, n) {
    var r = [], a = function(w, g) {
      r.push("".concat(w, "=").concat(encodeURIComponent(g)));
    };
    if ("query" in n && a("query", n.query), n.operationName && a("operationName", n.operationName), n.variables) {
      var s = void 0;
      try {
        s = Zl(n.variables, "Variables map");
      } catch (w) {
        return { parseError: w };
      }
      a("variables", s);
    }
    if (n.extensions) {
      var u = void 0;
      try {
        u = Zl(n.extensions, "Extensions map");
      } catch (w) {
        return { parseError: w };
      }
      a("extensions", u);
    }
    var f = "", p = i, h = i.indexOf("#");
    h !== -1 && (f = i.substr(h), p = i.substr(0, h));
    var m = p.indexOf("?") === -1 ? "?" : "&", y = p + m + r.join("&") + f;
    return { newURI: y };
  }
  var ip = Mt(function() {
    return fetch;
  }), q0 = function(i) {
    i === void 0 && (i = {});
    var n = i.uri, r = n === void 0 ? "/graphql" : n, a = i.fetch, s = i.print, u = s === void 0 ? L0 : s, f = i.includeExtensions, p = i.preserveHeaderCase, h = i.useGETForQueries, m = i.includeUnusedVariables, y = m === void 0 ? !1 : m, w = Kt(i, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
    globalThis.__DEV__ !== !1 && B0(a || ip);
    var g = {
      http: { includeExtensions: f, preserveHeaderCase: p },
      options: w.fetchOptions,
      credentials: w.credentials,
      headers: w.headers
    };
    return new Ui(function(S) {
      var C = U0(S, r), O = S.getContext(), I = {};
      if (O.clientAwareness) {
        var T = O.clientAwareness, R = T.name, M = T.version;
        R && (I["apollographql-client-name"] = R), M && (I["apollographql-client-version"] = M);
      }
      var V = N(N({}, I), O.headers), B = {
        http: O.http,
        options: O.fetchOptions,
        credentials: O.credentials,
        headers: V
      };
      if (Pi(["client"], S.query)) {
        var Q = _h(S.query);
        if (!Q)
          return Il(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
        S.query = Q;
      }
      var te = z0(S, u, A0, g, B), ie = te.options, ue = te.body;
      ue.variables && !y && (ue.variables = y0(ue.variables, S.query));
      var fe;
      !ie.signal && typeof AbortController < "u" && (fe = new AbortController(), ie.signal = fe.signal);
      var Ue = function(X) {
        return X.kind === "OperationDefinition" && X.operation === "mutation";
      }, Ge = function(X) {
        return X.kind === "OperationDefinition" && X.operation === "subscription";
      }, me = Ge(Bi(S.query)), Ae = Pi(["defer"], S.query);
      if (h && !S.query.definitions.some(Ue) && (ie.method = "GET"), Ae || me) {
        ie.headers = ie.headers || {};
        var st = "multipart/mixed;";
        me && Ae && globalThis.__DEV__ !== !1 && ee.warn(41), me ? st += "boundary=graphql;subscriptionSpec=1.0,application/json" : Ae && (st += "deferSpec=20220824,application/json"), ie.headers.accept = st;
      }
      if (ie.method === "GET") {
        var Ye = Q0(C, ue), Oe = Ye.newURI, q = Ye.parseError;
        if (q)
          return Il(q);
        C = Oe;
      } else
        try {
          ie.body = Zl(ue, "Payload");
        } catch (X) {
          return Il(X);
        }
      return new ke(function(X) {
        var H = a || Mt(function() {
          return fetch;
        }) || ip, b = X.next.bind(X);
        return H(C, ie).then(function(F) {
          var ae;
          S.setContext({ response: F });
          var se = (ae = F.headers) === null || ae === void 0 ? void 0 : ae.get("content-type");
          return se !== null && /^multipart\/mixed/i.test(se) ? I0(F, b) : M0(S)(F).then(b);
        }).then(function() {
          fe = void 0, X.complete();
        }).catch(function(F) {
          fe = void 0, j0(F, X);
        }), function() {
          fe && fe.abort();
        };
      });
    });
  }, Ch = (
    /** @class */
    function(i) {
      Bt(n, i);
      function n(r) {
        r === void 0 && (r = {});
        var a = i.call(this, q0(r).request) || this;
        return a.options = r, a;
      }
      return n;
    }(Ui)
  );
  const { toString: op, hasOwnProperty: W0 } = Object.prototype, ap = Function.prototype.toString, eu = /* @__PURE__ */ new Map();
  function be(i, n) {
    try {
      return tu(i, n);
    } finally {
      eu.clear();
    }
  }
  function tu(i, n) {
    if (i === n)
      return !0;
    const r = op.call(i), a = op.call(n);
    if (r !== a)
      return !1;
    switch (r) {
      case "[object Array]":
        if (i.length !== n.length)
          return !1;
      case "[object Object]": {
        if (lp(i, n))
          return !0;
        const s = sp(i), u = sp(n), f = s.length;
        if (f !== u.length)
          return !1;
        for (let p = 0; p < f; ++p)
          if (!W0.call(n, s[p]))
            return !1;
        for (let p = 0; p < f; ++p) {
          const h = s[p];
          if (!tu(i[h], n[h]))
            return !1;
        }
        return !0;
      }
      case "[object Error]":
        return i.name === n.name && i.message === n.message;
      case "[object Number]":
        if (i !== i)
          return n !== n;
      case "[object Boolean]":
      case "[object Date]":
        return +i == +n;
      case "[object RegExp]":
      case "[object String]":
        return i == `${n}`;
      case "[object Map]":
      case "[object Set]": {
        if (i.size !== n.size)
          return !1;
        if (lp(i, n))
          return !0;
        const s = i.entries(), u = r === "[object Map]";
        for (; ; ) {
          const f = s.next();
          if (f.done)
            break;
          const [p, h] = f.value;
          if (!n.has(p) || u && !tu(h, n.get(p)))
            return !1;
        }
        return !0;
      }
      case "[object Uint16Array]":
      case "[object Uint8Array]":
      case "[object Uint32Array]":
      case "[object Int32Array]":
      case "[object Int8Array]":
      case "[object Int16Array]":
      case "[object ArrayBuffer]":
        i = new Uint8Array(i), n = new Uint8Array(n);
      case "[object DataView]": {
        let s = i.byteLength;
        if (s === n.byteLength)
          for (; s-- && i[s] === n[s]; )
            ;
        return s === -1;
      }
      case "[object AsyncFunction]":
      case "[object GeneratorFunction]":
      case "[object AsyncGeneratorFunction]":
      case "[object Function]": {
        const s = ap.call(i);
        return s !== ap.call(n) ? !1 : !G0(s, H0);
      }
    }
    return !1;
  }
  function sp(i) {
    return Object.keys(i).filter($0, i);
  }
  function $0(i) {
    return this[i] !== void 0;
  }
  const H0 = "{ [native code] }";
  function G0(i, n) {
    const r = i.length - n.length;
    return r >= 0 && i.indexOf(n, r) === r;
  }
  function lp(i, n) {
    let r = eu.get(i);
    if (r) {
      if (r.has(n))
        return !0;
    } else
      eu.set(i, r = /* @__PURE__ */ new Set());
    return r.add(n), !1;
  }
  function Ih(i, n, r, a) {
    var s = n.data, u = Kt(n, ["data"]), f = r.data, p = Kt(r, ["data"]);
    return be(u, p) && ua(Bi(i).selectionSet, s, f, {
      fragmentMap: Rr(Fr(i)),
      variables: a
    });
  }
  function ua(i, n, r, a) {
    if (n === r)
      return !0;
    var s = /* @__PURE__ */ new Set();
    return i.selections.every(function(u) {
      if (s.has(u) || (s.add(u), !Vi(u, a.variables)) || up(u))
        return !0;
      if (Tn(u)) {
        var f = Jt(u), p = n && n[f], h = r && r[f], m = u.selectionSet;
        if (!m)
          return be(p, h);
        var y = Array.isArray(p), w = Array.isArray(h);
        if (y !== w)
          return !1;
        if (y && w) {
          var g = p.length;
          if (h.length !== g)
            return !1;
          for (var S = 0; S < g; ++S)
            if (!ua(m, p[S], h[S], a))
              return !1;
          return !0;
        }
        return ua(m, p, h, a);
      } else {
        var C = Ea(u, a.fragmentMap);
        if (C)
          return up(C) ? !0 : ua(
            C.selectionSet,
            // Notice that we reuse the same aResult and bResult values here,
            // since the fragment ...spread does not specify a field name, but
            // consists of multiple fields (within the fragment's selection set)
            // that should be applied to the current result value(s).
            n,
            r,
            a
          );
      }
    });
  }
  function up(i) {
    return !!i.directives && i.directives.some(Y0);
  }
  function Y0(i) {
    return i.name.value === "nonreactive";
  }
  var Dh = Gn ? WeakMap : Map, jh = hu ? WeakSet : Set, Tu = new mu(), cp = !1;
  function Mh() {
    cp || (cp = !0, globalThis.__DEV__ !== !1 && ee.warn(52));
  }
  function Rh(i, n, r) {
    return Tu.withValue(!0, function() {
      var a = Ci(i, n, r, !1);
      return Object.isFrozen(i) && ha(a), a;
    });
  }
  function K0(i, n) {
    if (n.has(i))
      return n.get(i);
    var r = Array.isArray(i) ? [] : /* @__PURE__ */ Object.create(null);
    return n.set(i, r), r;
  }
  function Ci(i, n, r, a, s) {
    var u, f = r.knownChanged, p = K0(i, r.mutableTargets);
    if (Array.isArray(i)) {
      for (var h = 0, m = Array.from(i.entries()); h < m.length; h++) {
        var y = m[h], w = y[0], g = y[1];
        if (g === null) {
          p[w] = null;
          continue;
        }
        var S = Ci(g, n, r, a, globalThis.__DEV__ !== !1 ? "".concat(s || "", "[").concat(w, "]") : void 0);
        f.has(S) && f.add(p), p[w] = S;
      }
      return f.has(p) ? p : i;
    }
    for (var C = 0, O = n.selections; C < O.length; C++) {
      var I = O[C], T = void 0;
      if (a && f.add(p), I.kind === W.FIELD) {
        var R = Jt(I), M = I.selectionSet;
        if (T = p[R] || i[R], T === void 0)
          continue;
        if (M && T !== null) {
          var S = Ci(i[R], M, r, a, globalThis.__DEV__ !== !1 ? "".concat(s || "", ".").concat(R) : void 0);
          f.has(S) && (T = S);
        }
        globalThis.__DEV__ === !1 && (p[R] = T), globalThis.__DEV__ !== !1 && (a && R !== "__typename" && // either the field is not present in the memo object
        // or it has a `get` descriptor, not a `value` descriptor
        // => it is a warning accessor and we can overwrite it
        // with another accessor
        !(!((u = Object.getOwnPropertyDescriptor(p, R)) === null || u === void 0) && u.value) ? Object.defineProperty(p, R, X0(R, T, s || "", r.operationName, r.operationType)) : (delete p[R], p[R] = T));
      }
      if (I.kind === W.INLINE_FRAGMENT && (!I.typeCondition || r.cache.fragmentMatches(I, i.__typename)) && (T = Ci(i, I.selectionSet, r, a, s)), I.kind === W.FRAGMENT_SPREAD) {
        var V = I.name.value, B = r.fragmentMap[V] || (r.fragmentMap[V] = r.cache.lookupFragment(V));
        ee(B, 47, V);
        var Q = Xy(I);
        Q !== "mask" && (T = Ci(i, B.selectionSet, r, Q === "migrate", s));
      }
      f.has(T) && f.add(p);
    }
    return "__typename" in i && !("__typename" in p) && (p.__typename = i.__typename), Object.keys(p).length !== Object.keys(i).length && f.add(p), f.has(p) ? p : i;
  }
  function X0(i, n, r, a, s) {
    var u = function() {
      return Tu.getValue() || (globalThis.__DEV__ !== !1 && ee.warn(48, a ? "".concat(s, " '").concat(a, "'") : "anonymous ".concat(s), "".concat(r, ".").concat(i).replace(/^\./, "")), u = function() {
        return n;
      }), n;
    };
    return {
      get: function() {
        return u();
      },
      set: function(f) {
        u = function() {
          return f;
        };
      },
      enumerable: !0,
      configurable: !0
    };
  }
  function Ph(i, n, r, a) {
    if (!r.fragmentMatches)
      return globalThis.__DEV__ !== !1 && Mh(), i;
    var s = n.definitions.filter(function(f) {
      return f.kind === W.FRAGMENT_DEFINITION;
    });
    typeof a > "u" && (ee(s.length === 1, 49, s.length), a = s[0].name.value);
    var u = s.find(function(f) {
      return f.name.value === a;
    });
    return ee(!!u, 50, a), i == null || be(i, {}) ? i : Rh(i, u.selectionSet, {
      operationType: "fragment",
      operationName: u.name.value,
      fragmentMap: Rr(Fr(n)),
      cache: r,
      mutableTargets: new Dh(),
      knownChanged: new jh()
    });
  }
  function J0(i, n, r) {
    var a;
    if (!r.fragmentMatches)
      return globalThis.__DEV__ !== !1 && Mh(), i;
    var s = Hn(n);
    return ee(s, 51), i == null ? i : Rh(i, s.selectionSet, {
      operationType: s.operation,
      operationName: (a = s.name) === null || a === void 0 ? void 0 : a.value,
      fragmentMap: Rr(Fr(n)),
      cache: r,
      mutableTargets: new Dh(),
      knownChanged: new jh()
    });
  }
  var Fh = (
    /** @class */
    function() {
      function i() {
        this.assumeImmutableResults = !1, this.getFragmentDoc = Ai(rg, {
          max: Xt["cache.fragmentQueryDocuments"] || 1e3,
          cache: da
        });
      }
      return i.prototype.lookupFragment = function(n) {
        return null;
      }, i.prototype.batch = function(n) {
        var r = this, a = typeof n.optimistic == "string" ? n.optimistic : n.optimistic === !1 ? null : void 0, s;
        return this.performTransaction(function() {
          return s = n.update(r);
        }, a), s;
      }, i.prototype.recordOptimisticTransaction = function(n, r) {
        this.performTransaction(n, r);
      }, i.prototype.transformDocument = function(n) {
        return n;
      }, i.prototype.transformForLink = function(n) {
        return n;
      }, i.prototype.identify = function(n) {
      }, i.prototype.gc = function() {
        return [];
      }, i.prototype.modify = function(n) {
        return !1;
      }, i.prototype.readQuery = function(n, r) {
        return r === void 0 && (r = !!n.optimistic), this.read(N(N({}, n), { rootId: n.id || "ROOT_QUERY", optimistic: r }));
      }, i.prototype.watchFragment = function(n) {
        var r = this, a = n.fragment, s = n.fragmentName, u = n.from, f = n.optimistic, p = f === void 0 ? !0 : f, h = Kt(n, ["fragment", "fragmentName", "from", "optimistic"]), m = this.getFragmentDoc(a, s), y = typeof u > "u" || typeof u == "string" ? u : this.identify(u), w = !!n[Symbol.for("apollo.dataMasking")];
        if (globalThis.__DEV__ !== !1) {
          var g = s || ih(a).name.value;
          y || globalThis.__DEV__ !== !1 && ee.warn(1, g);
        }
        var S = N(N({}, h), { returnPartialData: !0, id: y, query: m, optimistic: p }), C;
        return new ke(function(O) {
          return r.watch(N(N({}, S), { immediate: !0, callback: function(I) {
            var T = w ? Ph(I.result, a, r, s) : I.result;
            if (
              // Always ensure we deliver the first result
              !(C && Ih(m, { data: C == null ? void 0 : C.result }, { data: T }))
            ) {
              var R = {
                data: T,
                complete: !!I.complete
              };
              I.missing && (R.missing = Ta(I.missing.map(function(M) {
                return M.missing;
              }))), C = N(N({}, I), { result: T }), O.next(R);
            }
          } }));
        });
      }, i.prototype.readFragment = function(n, r) {
        return r === void 0 && (r = !!n.optimistic), this.read(N(N({}, n), { query: this.getFragmentDoc(n.fragment, n.fragmentName), rootId: n.id, optimistic: r }));
      }, i.prototype.writeQuery = function(n) {
        var r = n.id, a = n.data, s = Kt(n, ["id", "data"]);
        return this.write(Object.assign(s, {
          dataId: r || "ROOT_QUERY",
          result: a
        }));
      }, i.prototype.writeFragment = function(n) {
        var r = n.id, a = n.data, s = n.fragment, u = n.fragmentName, f = Kt(n, ["id", "data", "fragment", "fragmentName"]);
        return this.write(Object.assign(f, {
          query: this.getFragmentDoc(s, u),
          dataId: r,
          result: a
        }));
      }, i.prototype.updateQuery = function(n, r) {
        return this.batch({
          update: function(a) {
            var s = a.readQuery(n), u = r(s);
            return u == null ? s : (a.writeQuery(N(N({}, n), { data: u })), u);
          }
        });
      }, i.prototype.updateFragment = function(n, r) {
        return this.batch({
          update: function(a) {
            var s = a.readFragment(n), u = r(s);
            return u == null ? s : (a.writeFragment(N(N({}, n), { data: u })), u);
          }
        });
      }, i;
    }()
  );
  globalThis.__DEV__ !== !1 && (Fh.prototype.getMemoryInternals = vg);
  var Ah = (
    /** @class */
    function(i) {
      Bt(n, i);
      function n(r, a, s, u) {
        var f, p = i.call(this, r) || this;
        if (p.message = r, p.path = a, p.query = s, p.variables = u, Array.isArray(p.path)) {
          p.missing = p.message;
          for (var h = p.path.length - 1; h >= 0; --h)
            p.missing = (f = {}, f[p.path[h]] = p.missing, f);
        } else
          p.missing = p.path;
        return p.__proto__ = n.prototype, p;
      }
      return n;
    }(Error)
  ), $e = Object.prototype.hasOwnProperty;
  function Ti(i) {
    return i == null;
  }
  function Lh(i, n) {
    var r = i.__typename, a = i.id, s = i._id;
    if (typeof r == "string" && (n && (n.keyObject = Ti(a) ? Ti(s) ? void 0 : { _id: s } : { id: a }), Ti(a) && !Ti(s) && (a = s), !Ti(a)))
      return "".concat(r, ":").concat(typeof a == "number" || typeof a == "string" ? a : JSON.stringify(a));
  }
  var zh = {
    dataIdFromObject: Lh,
    addTypename: !0,
    resultCaching: !0,
    // Thanks to the shouldCanonizeResults helper, this should be the only line
    // you have to change to reenable canonization by default in the future.
    canonizeResults: !1
  };
  function Z0(i) {
    return jr(zh, i);
  }
  function Vh(i) {
    var n = i.canonizeResults;
    return n === void 0 ? zh.canonizeResults : n;
  }
  function e_(i, n) {
    return ye(n) ? i.get(n.__ref, "__typename") : n && n.__typename;
  }
  var Bh = /^[_a-z][_0-9a-z]*/i;
  function Cn(i) {
    var n = i.match(Bh);
    return n ? n[0] : i;
  }
  function nu(i, n, r) {
    return Me(n) ? Re(n) ? n.every(function(a) {
      return nu(i, a, r);
    }) : i.selections.every(function(a) {
      if (Tn(a) && Vi(a, r)) {
        var s = Jt(a);
        return $e.call(n, s) && (!a.selectionSet || nu(a.selectionSet, n[s], r));
      }
      return !0;
    }) : !1;
  }
  function br(i) {
    return Me(i) && !ye(i) && !Re(i);
  }
  function t_() {
    return new xn();
  }
  function Uh(i, n) {
    var r = Rr(Fr(i));
    return {
      fragmentMap: r,
      lookupFragment: function(a) {
        var s = r[a];
        return !s && n && (s = n.lookup(a)), s || null;
      }
    };
  }
  var ca = /* @__PURE__ */ Object.create(null), Dl = function() {
    return ca;
  }, fp = /* @__PURE__ */ Object.create(null), Li = (
    /** @class */
    function() {
      function i(n, r) {
        var a = this;
        this.policies = n, this.group = r, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(s, u) {
          return ha(ye(s) ? a.get(s.__ref, u) : s && s[u]);
        }, this.canRead = function(s) {
          return ye(s) ? a.has(s.__ref) : typeof s == "object";
        }, this.toReference = function(s, u) {
          if (typeof s == "string")
            return Tr(s);
          if (ye(s))
            return s;
          var f = a.policies.identify(s)[0];
          if (f) {
            var p = Tr(f);
            return u && a.merge(f, s), p;
          }
        };
      }
      return i.prototype.toObject = function() {
        return N({}, this.data);
      }, i.prototype.has = function(n) {
        return this.lookup(n, !0) !== void 0;
      }, i.prototype.get = function(n, r) {
        if (this.group.depend(n, r), $e.call(this.data, n)) {
          var a = this.data[n];
          if (a && $e.call(a, r))
            return a[r];
        }
        if (r === "__typename" && $e.call(this.policies.rootTypenamesById, n))
          return this.policies.rootTypenamesById[n];
        if (this instanceof En)
          return this.parent.get(n, r);
      }, i.prototype.lookup = function(n, r) {
        if (r && this.group.depend(n, "__exists"), $e.call(this.data, n))
          return this.data[n];
        if (this instanceof En)
          return this.parent.lookup(n, r);
        if (this.policies.rootTypenamesById[n])
          return /* @__PURE__ */ Object.create(null);
      }, i.prototype.merge = function(n, r) {
        var a = this, s;
        ye(n) && (n = n.__ref), ye(r) && (r = r.__ref);
        var u = typeof n == "string" ? this.lookup(s = n) : n, f = typeof r == "string" ? this.lookup(s = r) : r;
        if (f) {
          ee(typeof s == "string", 2);
          var p = new xn(r_).merge(u, f);
          if (this.data[s] = p, p !== u && (delete this.refs[s], this.group.caching)) {
            var h = /* @__PURE__ */ Object.create(null);
            u || (h.__exists = 1), Object.keys(f).forEach(function(m) {
              if (!u || u[m] !== p[m]) {
                h[m] = 1;
                var y = Cn(m);
                y !== m && !a.policies.hasKeyArgs(p.__typename, y) && (h[y] = 1), p[m] === void 0 && !(a instanceof En) && delete p[m];
              }
            }), h.__typename && !(u && u.__typename) && // Since we return default root __typename strings
            // automatically from store.get, we don't need to dirty the
            // ROOT_QUERY.__typename field if merged.__typename is equal
            // to the default string (usually "Query").
            this.policies.rootTypenamesById[s] === p.__typename && delete h.__typename, Object.keys(h).forEach(function(m) {
              return a.group.dirty(s, m);
            });
          }
        }
      }, i.prototype.modify = function(n, r) {
        var a = this, s = this.lookup(n);
        if (s) {
          var u = /* @__PURE__ */ Object.create(null), f = !1, p = !0, h = {
            DELETE: ca,
            INVALIDATE: fp,
            isReference: ye,
            toReference: this.toReference,
            canRead: this.canRead,
            readField: function(m, y) {
              return a.policies.readField(typeof m == "string" ? {
                fieldName: m,
                from: y || Tr(n)
              } : m, { store: a });
            }
          };
          if (Object.keys(s).forEach(function(m) {
            var y = Cn(m), w = s[m];
            if (w !== void 0) {
              var g = typeof r == "function" ? r : r[m] || r[y];
              if (g) {
                var S = g === Dl ? ca : g(ha(w), N(N({}, h), { fieldName: y, storeFieldName: m, storage: a.getStorage(n, m) }));
                if (S === fp)
                  a.group.dirty(n, m);
                else if (S === ca && (S = void 0), S !== w && (u[m] = S, f = !0, w = S, globalThis.__DEV__ !== !1)) {
                  var C = function(B) {
                    if (a.lookup(B.__ref) === void 0)
                      return globalThis.__DEV__ !== !1 && ee.warn(3, B), !0;
                  };
                  if (ye(S))
                    C(S);
                  else if (Array.isArray(S))
                    for (var O = !1, I = void 0, T = 0, R = S; T < R.length; T++) {
                      var M = R[T];
                      if (ye(M)) {
                        if (O = !0, C(M))
                          break;
                      } else if (typeof M == "object" && M) {
                        var V = a.policies.identify(M)[0];
                        V && (I = M);
                      }
                      if (O && I !== void 0) {
                        globalThis.__DEV__ !== !1 && ee.warn(4, I);
                        break;
                      }
                    }
                }
              }
              w !== void 0 && (p = !1);
            }
          }), f)
            return this.merge(n, u), p && (this instanceof En ? this.data[n] = void 0 : delete this.data[n], this.group.dirty(n, "__exists")), !0;
        }
        return !1;
      }, i.prototype.delete = function(n, r, a) {
        var s, u = this.lookup(n);
        if (u) {
          var f = this.getFieldValue(u, "__typename"), p = r && a ? this.policies.getStoreFieldName({ typename: f, fieldName: r, args: a }) : r;
          return this.modify(n, p ? (s = {}, s[p] = Dl, s) : Dl);
        }
        return !1;
      }, i.prototype.evict = function(n, r) {
        var a = !1;
        return n.id && ($e.call(this.data, n.id) && (a = this.delete(n.id, n.fieldName, n.args)), this instanceof En && this !== r && (a = this.parent.evict(n, r) || a), (n.fieldName || a) && this.group.dirty(n.id, n.fieldName || "__exists")), a;
      }, i.prototype.clear = function() {
        this.replace(null);
      }, i.prototype.extract = function() {
        var n = this, r = this.toObject(), a = [];
        return this.getRootIdSet().forEach(function(s) {
          $e.call(n.policies.rootTypenamesById, s) || a.push(s);
        }), a.length && (r.__META = { extraRootIds: a.sort() }), r;
      }, i.prototype.replace = function(n) {
        var r = this;
        if (Object.keys(this.data).forEach(function(u) {
          n && $e.call(n, u) || r.delete(u);
        }), n) {
          var a = n.__META, s = Kt(n, ["__META"]);
          Object.keys(s).forEach(function(u) {
            r.merge(u, s[u]);
          }), a && a.extraRootIds.forEach(this.retain, this);
        }
      }, i.prototype.retain = function(n) {
        return this.rootIds[n] = (this.rootIds[n] || 0) + 1;
      }, i.prototype.release = function(n) {
        if (this.rootIds[n] > 0) {
          var r = --this.rootIds[n];
          return r || delete this.rootIds[n], r;
        }
        return 0;
      }, i.prototype.getRootIdSet = function(n) {
        return n === void 0 && (n = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(n.add, n), this instanceof En ? this.parent.getRootIdSet(n) : Object.keys(this.policies.rootTypenamesById).forEach(n.add, n), n;
      }, i.prototype.gc = function() {
        var n = this, r = this.getRootIdSet(), a = this.toObject();
        r.forEach(function(f) {
          $e.call(a, f) && (Object.keys(n.findChildRefIds(f)).forEach(r.add, r), delete a[f]);
        });
        var s = Object.keys(a);
        if (s.length) {
          for (var u = this; u instanceof En; )
            u = u.parent;
          s.forEach(function(f) {
            return u.delete(f);
          });
        }
        return s;
      }, i.prototype.findChildRefIds = function(n) {
        if (!$e.call(this.refs, n)) {
          var r = this.refs[n] = /* @__PURE__ */ Object.create(null), a = this.data[n];
          if (!a)
            return r;
          var s = /* @__PURE__ */ new Set([a]);
          s.forEach(function(u) {
            ye(u) && (r[u.__ref] = !0), Me(u) && Object.keys(u).forEach(function(f) {
              var p = u[f];
              Me(p) && s.add(p);
            });
          });
        }
        return this.refs[n];
      }, i.prototype.makeCacheKey = function() {
        return this.group.keyMaker.lookupArray(arguments);
      }, i;
    }()
  ), Qh = (
    /** @class */
    function() {
      function i(n, r) {
        r === void 0 && (r = null), this.caching = n, this.parent = r, this.d = null, this.resetCaching();
      }
      return i.prototype.resetCaching = function() {
        this.d = this.caching ? vh() : null, this.keyMaker = new en(Gn);
      }, i.prototype.depend = function(n, r) {
        if (this.d) {
          this.d(jl(n, r));
          var a = Cn(r);
          a !== r && this.d(jl(n, a)), this.parent && this.parent.depend(n, r);
        }
      }, i.prototype.dirty = function(n, r) {
        this.d && this.d.dirty(
          jl(n, r),
          // When storeFieldName === "__exists", that means the entity identified
          // by dataId has either disappeared from the cache or was newly added,
          // so the result caching system would do well to "forget everything it
          // knows" about that object. To achieve that kind of invalidation, we
          // not only dirty the associated result cache entry, but also remove it
          // completely from the dependency graph. For the optimism implementation
          // details, see https://github.com/benjamn/optimism/pull/195.
          r === "__exists" ? "forget" : "setDirty"
        );
      }, i;
    }()
  );
  function jl(i, n) {
    return n + "#" + i;
  }
  function dp(i, n) {
    ji(i) && i.group.depend(n, "__exists");
  }
  (function(i) {
    var n = (
      /** @class */
      function(r) {
        Bt(a, r);
        function a(s) {
          var u = s.policies, f = s.resultCaching, p = f === void 0 ? !0 : f, h = s.seed, m = r.call(this, u, new Qh(p)) || this;
          return m.stump = new n_(m), m.storageTrie = new en(Gn), h && m.replace(h), m;
        }
        return a.prototype.addLayer = function(s, u) {
          return this.stump.addLayer(s, u);
        }, a.prototype.removeLayer = function() {
          return this;
        }, a.prototype.getStorage = function() {
          return this.storageTrie.lookupArray(arguments);
        }, a;
      }(i)
    );
    i.Root = n;
  })(Li || (Li = {}));
  var En = (
    /** @class */
    function(i) {
      Bt(n, i);
      function n(r, a, s, u) {
        var f = i.call(this, a.policies, u) || this;
        return f.id = r, f.parent = a, f.replay = s, f.group = u, s(f), f;
      }
      return n.prototype.addLayer = function(r, a) {
        return new n(r, this, a, this.group);
      }, n.prototype.removeLayer = function(r) {
        var a = this, s = this.parent.removeLayer(r);
        return r === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(u) {
          var f = a.data[u], p = s.lookup(u);
          p ? f ? f !== p && Object.keys(f).forEach(function(h) {
            be(f[h], p[h]) || a.group.dirty(u, h);
          }) : (a.group.dirty(u, "__exists"), Object.keys(p).forEach(function(h) {
            a.group.dirty(u, h);
          })) : a.delete(u);
        }), s) : s === this.parent ? this : s.addLayer(this.id, this.replay);
      }, n.prototype.toObject = function() {
        return N(N({}, this.parent.toObject()), this.data);
      }, n.prototype.findChildRefIds = function(r) {
        var a = this.parent.findChildRefIds(r);
        return $e.call(this.data, r) ? N(N({}, a), i.prototype.findChildRefIds.call(this, r)) : a;
      }, n.prototype.getStorage = function() {
        for (var r = this.parent; r.parent; )
          r = r.parent;
        return r.getStorage.apply(
          r,
          // @ts-expect-error
          arguments
        );
      }, n;
    }(Li)
  ), n_ = (
    /** @class */
    function(i) {
      Bt(n, i);
      function n(r) {
        return i.call(this, "EntityStore.Stump", r, function() {
        }, new Qh(r.group.caching, r.group)) || this;
      }
      return n.prototype.removeLayer = function() {
        return this;
      }, n.prototype.merge = function(r, a) {
        return this.parent.merge(r, a);
      }, n;
    }(En)
  );
  function r_(i, n, r) {
    var a = i[r], s = n[r];
    return be(a, s) ? a : s;
  }
  function ji(i) {
    return !!(i instanceof Li && i.group.caching);
  }
  function i_(i) {
    return Me(i) ? Re(i) ? i.slice(0) : N({ __proto__: Object.getPrototypeOf(i) }, i) : i;
  }
  var pp = (
    /** @class */
    function() {
      function i() {
        this.known = new (hu ? WeakSet : Set)(), this.pool = new en(Gn), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
      }
      return i.prototype.isKnown = function(n) {
        return Me(n) && this.known.has(n);
      }, i.prototype.pass = function(n) {
        if (Me(n)) {
          var r = i_(n);
          return this.passes.set(r, n), r;
        }
        return n;
      }, i.prototype.admit = function(n) {
        var r = this;
        if (Me(n)) {
          var a = this.passes.get(n);
          if (a)
            return a;
          var s = Object.getPrototypeOf(n);
          switch (s) {
            case Array.prototype: {
              if (this.known.has(n))
                return n;
              var u = n.map(this.admit, this), f = this.pool.lookupArray(u);
              return f.array || (this.known.add(f.array = u), globalThis.__DEV__ !== !1 && Object.freeze(u)), f.array;
            }
            case null:
            case Object.prototype: {
              if (this.known.has(n))
                return n;
              var p = Object.getPrototypeOf(n), h = [p], m = this.sortedKeys(n);
              h.push(m.json);
              var y = h.length;
              m.sorted.forEach(function(S) {
                h.push(r.admit(n[S]));
              });
              var f = this.pool.lookupArray(h);
              if (!f.object) {
                var w = f.object = Object.create(p);
                this.known.add(w), m.sorted.forEach(function(S, C) {
                  w[S] = h[y + C];
                }), globalThis.__DEV__ !== !1 && Object.freeze(w);
              }
              return f.object;
            }
          }
        }
        return n;
      }, i.prototype.sortedKeys = function(n) {
        var r = Object.keys(n), a = this.pool.lookupArray(r);
        if (!a.keys) {
          r.sort();
          var s = JSON.stringify(r);
          (a.keys = this.keysByJSON.get(s)) || this.keysByJSON.set(s, a.keys = { sorted: r, json: s });
        }
        return a.keys;
      }, i;
    }()
  );
  function hp(i) {
    return [
      i.selectionSet,
      i.objectOrReference,
      i.context,
      // We split out this property so we can pass different values
      // independently without modifying options.context itself.
      i.context.canonizeResults
    ];
  }
  var o_ = (
    /** @class */
    function() {
      function i(n) {
        var r = this;
        this.knownResults = new (Gn ? WeakMap : Map)(), this.config = jr(n, {
          addTypename: n.addTypename !== !1,
          canonizeResults: Vh(n)
        }), this.canon = n.canon || new pp(), this.executeSelectionSet = Ai(function(a) {
          var s, u = a.context.canonizeResults, f = hp(a);
          f[3] = !u;
          var p = (s = r.executeSelectionSet).peek.apply(s, f);
          return p ? u ? N(N({}, p), {
            // If we previously read this result without canonizing it, we can
            // reuse that result simply by canonizing it now.
            result: r.canon.admit(p.result)
          }) : p : (dp(a.context.store, a.enclosingRef.__ref), r.execSelectionSetImpl(a));
        }, {
          max: this.config.resultCacheMaxSize || Xt["inMemoryCache.executeSelectionSet"] || 5e4,
          keyArgs: hp,
          // Note that the parameters of makeCacheKey are determined by the
          // array returned by keyArgs.
          makeCacheKey: function(a, s, u, f) {
            if (ji(u.store))
              return u.store.makeCacheKey(a, ye(s) ? s.__ref : s, u.varString, f);
          }
        }), this.executeSubSelectedArray = Ai(function(a) {
          return dp(a.context.store, a.enclosingRef.__ref), r.execSubSelectedArrayImpl(a);
        }, {
          max: this.config.resultCacheMaxSize || Xt["inMemoryCache.executeSubSelectedArray"] || 1e4,
          makeCacheKey: function(a) {
            var s = a.field, u = a.array, f = a.context;
            if (ji(f.store))
              return f.store.makeCacheKey(s, u, f.varString);
          }
        });
      }
      return i.prototype.resetCanon = function() {
        this.canon = new pp();
      }, i.prototype.diffQueryAgainstStore = function(n) {
        var r = n.store, a = n.query, s = n.rootId, u = s === void 0 ? "ROOT_QUERY" : s, f = n.variables, p = n.returnPartialData, h = p === void 0 ? !0 : p, m = n.canonizeResults, y = m === void 0 ? this.config.canonizeResults : m, w = this.config.cache.policies;
        f = N(N({}, vu(rh(a))), f);
        var g = Tr(u), S = this.executeSelectionSet({
          selectionSet: Bi(a).selectionSet,
          objectOrReference: g,
          enclosingRef: g,
          context: N({ store: r, query: a, policies: w, variables: f, varString: Nn(f), canonizeResults: y }, Uh(a, this.config.fragments))
        }), C;
        if (S.missing && (C = [
          new Ah(a_(S.missing), S.missing, a, f)
        ], !h))
          throw C[0];
        return {
          result: S.result,
          complete: !C,
          missing: C
        };
      }, i.prototype.isFresh = function(n, r, a, s) {
        if (ji(s.store) && this.knownResults.get(n) === a) {
          var u = this.executeSelectionSet.peek(
            a,
            r,
            s,
            // If result is canonical, then it could only have been previously
            // cached by the canonizing version of executeSelectionSet, so we can
            // avoid checking both possibilities here.
            this.canon.isKnown(n)
          );
          if (u && n === u.result)
            return !0;
        }
        return !1;
      }, i.prototype.execSelectionSetImpl = function(n) {
        var r = this, a = n.selectionSet, s = n.objectOrReference, u = n.enclosingRef, f = n.context;
        if (ye(s) && !f.policies.rootTypenamesById[s.__ref] && !f.store.has(s.__ref))
          return {
            result: this.canon.empty,
            missing: "Dangling reference to missing ".concat(s.__ref, " object")
          };
        var p = f.variables, h = f.policies, m = f.store, y = m.getFieldValue(s, "__typename"), w = [], g, S = new xn();
        this.config.addTypename && typeof y == "string" && !h.rootIdsByTypename[y] && w.push({ __typename: y });
        function C(M, V) {
          var B;
          return M.missing && (g = S.merge(g, (B = {}, B[V] = M.missing, B))), M.result;
        }
        var O = new Set(a.selections);
        O.forEach(function(M) {
          var V, B;
          if (Vi(M, p))
            if (Tn(M)) {
              var Q = h.readField({
                fieldName: M.name.value,
                field: M,
                variables: f.variables,
                from: s
              }, f), te = Jt(M);
              Q === void 0 ? wu.added(M) || (g = S.merge(g, (V = {}, V[te] = "Can't find field '".concat(M.name.value, "' on ").concat(ye(s) ? s.__ref + " object" : "object " + JSON.stringify(s, null, 2)), V))) : Re(Q) ? Q.length > 0 && (Q = C(r.executeSubSelectedArray({
                field: M,
                array: Q,
                enclosingRef: u,
                context: f
              }), te)) : M.selectionSet ? Q != null && (Q = C(r.executeSelectionSet({
                selectionSet: M.selectionSet,
                objectOrReference: Q,
                enclosingRef: ye(Q) ? Q : u,
                context: f
              }), te)) : f.canonizeResults && (Q = r.canon.pass(Q)), Q !== void 0 && w.push((B = {}, B[te] = Q, B));
            } else {
              var ie = Ea(M, f.lookupFragment);
              if (!ie && M.kind === W.FRAGMENT_SPREAD)
                throw at(10, M.name.value);
              ie && h.fragmentMatches(ie, y) && ie.selectionSet.selections.forEach(O.add, O);
            }
        });
        var I = Ta(w), T = { result: I, missing: g }, R = f.canonizeResults ? this.canon.admit(T) : ha(T);
        return R.result && this.knownResults.set(R.result, a), R;
      }, i.prototype.execSubSelectedArrayImpl = function(n) {
        var r = this, a = n.field, s = n.array, u = n.enclosingRef, f = n.context, p, h = new xn();
        function m(y, w) {
          var g;
          return y.missing && (p = h.merge(p, (g = {}, g[w] = y.missing, g))), y.result;
        }
        return a.selectionSet && (s = s.filter(f.store.canRead)), s = s.map(function(y, w) {
          return y === null ? null : Re(y) ? m(r.executeSubSelectedArray({
            field: a,
            array: y,
            enclosingRef: u,
            context: f
          }), w) : a.selectionSet ? m(r.executeSelectionSet({
            selectionSet: a.selectionSet,
            objectOrReference: y,
            enclosingRef: ye(y) ? y : u,
            context: f
          }), w) : (globalThis.__DEV__ !== !1 && s_(f.store, a, y), y);
        }), {
          result: f.canonizeResults ? this.canon.admit(s) : s,
          missing: p
        };
      }, i;
    }()
  );
  function a_(i) {
    try {
      JSON.stringify(i, function(n, r) {
        if (typeof r == "string")
          throw r;
        return r;
      });
    } catch (n) {
      return n;
    }
  }
  function s_(i, n, r) {
    if (!n.selectionSet) {
      var a = /* @__PURE__ */ new Set([r]);
      a.forEach(function(s) {
        Me(s) && (ee(
          !ye(s),
          11,
          e_(i, s),
          n.name.value
        ), Object.values(s).forEach(a.add, a));
      });
    }
  }
  var Ou = new mu(), vp = /* @__PURE__ */ new WeakMap();
  function Mi(i) {
    var n = vp.get(i);
    return n || vp.set(i, n = {
      vars: /* @__PURE__ */ new Set(),
      dep: vh()
    }), n;
  }
  function mp(i) {
    Mi(i).vars.forEach(function(n) {
      return n.forgetCache(i);
    });
  }
  function l_(i) {
    Mi(i).vars.forEach(function(n) {
      return n.attachCache(i);
    });
  }
  function u_(i) {
    var n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), a = function(u) {
      if (arguments.length > 0) {
        if (i !== u) {
          i = u, n.forEach(function(h) {
            Mi(h).dep.dirty(a), c_(h);
          });
          var f = Array.from(r);
          r.clear(), f.forEach(function(h) {
            return h(i);
          });
        }
      } else {
        var p = Ou.getValue();
        p && (s(p), Mi(p).dep(a));
      }
      return i;
    };
    a.onNextChange = function(u) {
      return r.add(u), function() {
        r.delete(u);
      };
    };
    var s = a.attachCache = function(u) {
      return n.add(u), Mi(u).vars.add(a), a;
    };
    return a.forgetCache = function(u) {
      return n.delete(u);
    }, a;
  }
  function c_(i) {
    i.broadcastWatches && i.broadcastWatches();
  }
  var yp = /* @__PURE__ */ Object.create(null);
  function xu(i) {
    var n = JSON.stringify(i);
    return yp[n] || (yp[n] = /* @__PURE__ */ Object.create(null));
  }
  function gp(i) {
    var n = xu(i);
    return n.keyFieldsFn || (n.keyFieldsFn = function(r, a) {
      var s = function(f, p) {
        return a.readField(p, f);
      }, u = a.keyObject = Cu(i, function(f) {
        var p = xr(
          a.storeObject,
          f,
          // Using context.readField to extract paths from context.storeObject
          // allows the extraction to see through Reference objects and respect
          // custom read functions.
          s
        );
        return p === void 0 && r !== a.storeObject && $e.call(r, f[0]) && (p = xr(r, f, Wh)), ee(p !== void 0, 5, f.join("."), r), p;
      });
      return "".concat(a.typename, ":").concat(JSON.stringify(u));
    });
  }
  function _p(i) {
    var n = xu(i);
    return n.keyArgsFn || (n.keyArgsFn = function(r, a) {
      var s = a.field, u = a.variables, f = a.fieldName, p = Cu(i, function(m) {
        var y = m[0], w = y.charAt(0);
        if (w === "@") {
          if (s && Vt(s.directives)) {
            var g = y.slice(1), S = s.directives.find(function(T) {
              return T.name.value === g;
            }), C = S && Sa(S, u);
            return C && xr(
              C,
              // If keyPath.length === 1, this code calls extractKeyPath with an
              // empty path, which works because it uses directiveArgs as the
              // extracted value.
              m.slice(1)
            );
          }
          return;
        }
        if (w === "$") {
          var O = y.slice(1);
          if (u && $e.call(u, O)) {
            var I = m.slice(0);
            return I[0] = O, xr(u, I);
          }
          return;
        }
        if (r)
          return xr(r, m);
      }), h = JSON.stringify(p);
      return (r || h !== "{}") && (f += ":" + h), f;
    });
  }
  function Cu(i, n) {
    var r = new xn();
    return qh(i).reduce(function(a, s) {
      var u, f = n(s);
      if (f !== void 0) {
        for (var p = s.length - 1; p >= 0; --p)
          f = (u = {}, u[s[p]] = f, u);
        a = r.merge(a, f);
      }
      return a;
    }, /* @__PURE__ */ Object.create(null));
  }
  function qh(i) {
    var n = xu(i);
    if (!n.paths) {
      var r = n.paths = [], a = [];
      i.forEach(function(s, u) {
        Re(s) ? (qh(s).forEach(function(f) {
          return r.push(a.concat(f));
        }), a.length = 0) : (a.push(s), Re(i[u + 1]) || (r.push(a.slice(0)), a.length = 0));
      });
    }
    return n.paths;
  }
  function Wh(i, n) {
    return i[n];
  }
  function xr(i, n, r) {
    return r = r || Wh, $h(n.reduce(function a(s, u) {
      return Re(s) ? s.map(function(f) {
        return a(f, u);
      }) : s && r(s, u);
    }, i));
  }
  function $h(i) {
    return Me(i) ? Re(i) ? i.map($h) : Cu(Object.keys(i).sort(), function(n) {
      return xr(i, n);
    }) : i;
  }
  function ru(i) {
    return i.args !== void 0 ? i.args : i.field ? Sa(i.field, i.variables) : null;
  }
  var f_ = function() {
  }, wp = function(i, n) {
    return n.fieldName;
  }, Ep = function(i, n, r) {
    var a = r.mergeObjects;
    return a(i, n);
  }, Sp = function(i, n) {
    return n;
  }, d_ = (
    /** @class */
    function() {
      function i(n) {
        this.config = n, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = N({ dataIdFromObject: Lh }, n), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), n.possibleTypes && this.addPossibleTypes(n.possibleTypes), n.typePolicies && this.addTypePolicies(n.typePolicies);
      }
      return i.prototype.identify = function(n, r) {
        var a, s = this, u = r && (r.typename || ((a = r.storeObject) === null || a === void 0 ? void 0 : a.__typename)) || n.__typename;
        if (u === this.rootTypenamesById.ROOT_QUERY)
          return ["ROOT_QUERY"];
        var f = r && r.storeObject || n, p = N(N({}, r), { typename: u, storeObject: f, readField: r && r.readField || function() {
          var w = Iu(arguments, f);
          return s.readField(w, {
            store: s.cache.data,
            variables: w.variables
          });
        } }), h, m = u && this.getTypePolicy(u), y = m && m.keyFn || this.config.dataIdFromObject;
        return Tu.withValue(!0, function() {
          for (; y; ) {
            var w = y(N(N({}, n), f), p);
            if (Re(w))
              y = gp(w);
            else {
              h = w;
              break;
            }
          }
        }), h = h ? String(h) : void 0, p.keyObject ? [h, p.keyObject] : [h];
      }, i.prototype.addTypePolicies = function(n) {
        var r = this;
        Object.keys(n).forEach(function(a) {
          var s = n[a], u = s.queryType, f = s.mutationType, p = s.subscriptionType, h = Kt(s, ["queryType", "mutationType", "subscriptionType"]);
          u && r.setRootTypename("Query", a), f && r.setRootTypename("Mutation", a), p && r.setRootTypename("Subscription", a), $e.call(r.toBeAdded, a) ? r.toBeAdded[a].push(h) : r.toBeAdded[a] = [h];
        });
      }, i.prototype.updateTypePolicy = function(n, r) {
        var a = this, s = this.getTypePolicy(n), u = r.keyFields, f = r.fields;
        function p(h, m) {
          h.merge = typeof m == "function" ? m : m === !0 ? Ep : m === !1 ? Sp : h.merge;
        }
        p(s, r.merge), s.keyFn = // Pass false to disable normalization for this typename.
        u === !1 ? f_ : Re(u) ? gp(u) : typeof u == "function" ? u : s.keyFn, f && Object.keys(f).forEach(function(h) {
          var m = a.getFieldPolicy(n, h, !0), y = f[h];
          if (typeof y == "function")
            m.read = y;
          else {
            var w = y.keyArgs, g = y.read, S = y.merge;
            m.keyFn = // Pass false to disable argument-based differentiation of
            // field identities.
            w === !1 ? wp : Re(w) ? _p(w) : typeof w == "function" ? w : m.keyFn, typeof g == "function" && (m.read = g), p(m, S);
          }
          m.read && m.merge && (m.keyFn = m.keyFn || wp);
        });
      }, i.prototype.setRootTypename = function(n, r) {
        r === void 0 && (r = n);
        var a = "ROOT_" + n.toUpperCase(), s = this.rootTypenamesById[a];
        r !== s && (ee(!s || s === n, 6, n), s && delete this.rootIdsByTypename[s], this.rootIdsByTypename[r] = a, this.rootTypenamesById[a] = r);
      }, i.prototype.addPossibleTypes = function(n) {
        var r = this;
        this.usingPossibleTypes = !0, Object.keys(n).forEach(function(a) {
          r.getSupertypeSet(a, !0), n[a].forEach(function(s) {
            r.getSupertypeSet(s, !0).add(a);
            var u = s.match(Bh);
            (!u || u[0] !== s) && r.fuzzySubtypes.set(s, new RegExp(s));
          });
        });
      }, i.prototype.getTypePolicy = function(n) {
        var r = this;
        if (!$e.call(this.typePolicies, n)) {
          var a = this.typePolicies[n] = /* @__PURE__ */ Object.create(null);
          a.fields = /* @__PURE__ */ Object.create(null);
          var s = this.supertypeMap.get(n);
          !s && this.fuzzySubtypes.size && (s = this.getSupertypeSet(n, !0), this.fuzzySubtypes.forEach(function(f, p) {
            if (f.test(n)) {
              var h = r.supertypeMap.get(p);
              h && h.forEach(function(m) {
                return s.add(m);
              });
            }
          })), s && s.size && s.forEach(function(f) {
            var p = r.getTypePolicy(f), h = p.fields, m = Kt(p, ["fields"]);
            Object.assign(a, m), Object.assign(a.fields, h);
          });
        }
        var u = this.toBeAdded[n];
        return u && u.length && u.splice(0).forEach(function(f) {
          r.updateTypePolicy(n, f);
        }), this.typePolicies[n];
      }, i.prototype.getFieldPolicy = function(n, r, a) {
        if (n) {
          var s = this.getTypePolicy(n).fields;
          return s[r] || a && (s[r] = /* @__PURE__ */ Object.create(null));
        }
      }, i.prototype.getSupertypeSet = function(n, r) {
        var a = this.supertypeMap.get(n);
        return !a && r && this.supertypeMap.set(n, a = /* @__PURE__ */ new Set()), a;
      }, i.prototype.fragmentMatches = function(n, r, a, s) {
        var u = this;
        if (!n.typeCondition)
          return !0;
        if (!r)
          return !1;
        var f = n.typeCondition.name.value;
        if (r === f)
          return !0;
        if (this.usingPossibleTypes && this.supertypeMap.has(f))
          for (var p = this.getSupertypeSet(r, !0), h = [p], m = function(C) {
            var O = u.getSupertypeSet(C, !1);
            O && O.size && h.indexOf(O) < 0 && h.push(O);
          }, y = !!(a && this.fuzzySubtypes.size), w = !1, g = 0; g < h.length; ++g) {
            var S = h[g];
            if (S.has(f))
              return p.has(f) || (w && globalThis.__DEV__ !== !1 && ee.warn(7, r, f), p.add(f)), !0;
            S.forEach(m), y && // Start checking fuzzy subtypes only after exhausting all
            // non-fuzzy subtypes (after the final iteration of the loop).
            g === h.length - 1 && // We could wait to compare fragment.selectionSet to result
            // after we verify the supertype, but this check is often less
            // expensive than that search, and we will have to do the
            // comparison anyway whenever we find a potential match.
            nu(n.selectionSet, a, s) && (y = !1, w = !0, this.fuzzySubtypes.forEach(function(C, O) {
              var I = r.match(C);
              I && I[0] === r && m(O);
            }));
          }
        return !1;
      }, i.prototype.hasKeyArgs = function(n, r) {
        var a = this.getFieldPolicy(n, r, !1);
        return !!(a && a.keyFn);
      }, i.prototype.getStoreFieldName = function(n) {
        var r = n.typename, a = n.fieldName, s = this.getFieldPolicy(r, a, !1), u, f = s && s.keyFn;
        if (f && r)
          for (var p = {
            typename: r,
            fieldName: a,
            field: n.field || null,
            variables: n.variables
          }, h = ru(n); f; ) {
            var m = f(h, p);
            if (Re(m))
              f = _p(m);
            else {
              u = m || a;
              break;
            }
          }
        return u === void 0 && (u = n.field ? jg(n.field, n.variables) : nh(a, ru(n))), u === !1 ? a : a === Cn(u) ? u : a + ":" + u;
      }, i.prototype.readField = function(n, r) {
        var a = n.from;
        if (a) {
          var s = n.field || n.fieldName;
          if (s) {
            if (n.typename === void 0) {
              var u = r.store.getFieldValue(a, "__typename");
              u && (n.typename = u);
            }
            var f = this.getStoreFieldName(n), p = Cn(f), h = r.store.getFieldValue(a, f), m = this.getFieldPolicy(n.typename, p, !1), y = m && m.read;
            if (y) {
              var w = kp(this, a, n, r, r.store.getStorage(ye(a) ? a.__ref : a, f));
              return Ou.withValue(this.cache, y, [
                h,
                w
              ]);
            }
            return h;
          }
        }
      }, i.prototype.getReadFunction = function(n, r) {
        var a = this.getFieldPolicy(n, r, !1);
        return a && a.read;
      }, i.prototype.getMergeFunction = function(n, r, a) {
        var s = this.getFieldPolicy(n, r, !1), u = s && s.merge;
        return !u && a && (s = this.getTypePolicy(a), u = s && s.merge), u;
      }, i.prototype.runMergeFunction = function(n, r, a, s, u) {
        var f = a.field, p = a.typename, h = a.merge;
        return h === Ep ? Hh(s.store)(n, r) : h === Sp ? r : (s.overwrite && (n = void 0), h(n, r, kp(
          this,
          // Unlike options.readField for read functions, we do not fall
          // back to the current object if no foreignObjOrRef is provided,
          // because it's not clear what the current object should be for
          // merge functions: the (possibly undefined) existing object, or
          // the incoming object? If you think your merge function needs
          // to read sibling fields in order to produce a new value for
          // the current field, you might want to rethink your strategy,
          // because that's a recipe for making merge behavior sensitive
          // to the order in which fields are written into the cache.
          // However, readField(name, ref) is useful for merge functions
          // that need to deduplicate child objects and references.
          void 0,
          {
            typename: p,
            fieldName: f.name.value,
            field: f,
            variables: s.variables
          },
          s,
          u || /* @__PURE__ */ Object.create(null)
        )));
      }, i;
    }()
  );
  function kp(i, n, r, a, s) {
    var u = i.getStoreFieldName(r), f = Cn(u), p = r.variables || a.variables, h = a.store, m = h.toReference, y = h.canRead;
    return {
      args: ru(r),
      field: r.field || null,
      fieldName: f,
      storeFieldName: u,
      variables: p,
      isReference: ye,
      toReference: m,
      storage: s,
      cache: i.cache,
      canRead: y,
      readField: function() {
        return i.readField(Iu(arguments, n, p), a);
      },
      mergeObjects: Hh(a.store)
    };
  }
  function Iu(i, n, r) {
    var a = i[0], s = i[1], u = i.length, f;
    return typeof a == "string" ? f = {
      fieldName: a,
      // Default to objectOrReference only when no second argument was
      // passed for the from parameter, not when undefined is explicitly
      // passed as the second argument.
      from: u > 1 ? s : n
    } : (f = N({}, a), $e.call(f, "from") || (f.from = n)), globalThis.__DEV__ !== !1 && f.from === void 0 && globalThis.__DEV__ !== !1 && ee.warn(8, Ap(Array.from(i))), f.variables === void 0 && (f.variables = r), f;
  }
  function Hh(i) {
    return function(r, a) {
      if (Re(r) || Re(a))
        throw at(9);
      if (Me(r) && Me(a)) {
        var s = i.getFieldValue(r, "__typename"), u = i.getFieldValue(a, "__typename"), f = s && u && s !== u;
        if (f)
          return a;
        if (ye(r) && br(a))
          return i.merge(r.__ref, a), r;
        if (br(r) && ye(a))
          return i.merge(r, a.__ref), a;
        if (br(r) && br(a))
          return N(N({}, r), a);
      }
      return a;
    };
  }
  function Ml(i, n, r) {
    var a = "".concat(n).concat(r), s = i.flavors.get(a);
    return s || i.flavors.set(a, s = i.clientOnly === n && i.deferred === r ? i : N(N({}, i), { clientOnly: n, deferred: r })), s;
  }
  var p_ = (
    /** @class */
    function() {
      function i(n, r, a) {
        this.cache = n, this.reader = r, this.fragments = a;
      }
      return i.prototype.writeToStore = function(n, r) {
        var a = this, s = r.query, u = r.result, f = r.dataId, p = r.variables, h = r.overwrite, m = Hn(s), y = t_();
        p = N(N({}, vu(m)), p);
        var w = N(N({ store: n, written: /* @__PURE__ */ Object.create(null), merge: function(S, C) {
          return y.merge(S, C);
        }, variables: p, varString: Nn(p) }, Uh(s, this.fragments)), { overwrite: !!h, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), g = this.processSelectionSet({
          result: u || /* @__PURE__ */ Object.create(null),
          dataId: f,
          selectionSet: m.selectionSet,
          mergeTree: { map: /* @__PURE__ */ new Map() },
          context: w
        });
        if (!ye(g))
          throw at(12, u);
        return w.incomingById.forEach(function(S, C) {
          var O = S.storeObject, I = S.mergeTree, T = S.fieldNodeSet, R = Tr(C);
          if (I && I.map.size) {
            var M = a.applyMerges(I, R, O, w);
            if (ye(M))
              return;
            O = M;
          }
          if (globalThis.__DEV__ !== !1 && !w.overwrite) {
            var V = /* @__PURE__ */ Object.create(null);
            T.forEach(function(te) {
              te.selectionSet && (V[te.name.value] = !0);
            });
            var B = function(te) {
              return V[Cn(te)] === !0;
            }, Q = function(te) {
              var ie = I && I.map.get(te);
              return !!(ie && ie.info && ie.info.merge);
            };
            Object.keys(O).forEach(function(te) {
              B(te) && !Q(te) && h_(R, O, te, w.store);
            });
          }
          n.merge(C, O);
        }), n.retain(g.__ref), g;
      }, i.prototype.processSelectionSet = function(n) {
        var r = this, a = n.dataId, s = n.result, u = n.selectionSet, f = n.context, p = n.mergeTree, h = this.cache.policies, m = /* @__PURE__ */ Object.create(null), y = a && h.rootTypenamesById[a] || Hl(s, u, f.fragmentMap) || a && f.store.get(a, "__typename");
        typeof y == "string" && (m.__typename = y);
        var w = function() {
          var M = Iu(arguments, m, f.variables);
          if (ye(M.from)) {
            var V = f.incomingById.get(M.from.__ref);
            if (V) {
              var B = h.readField(N(N({}, M), { from: V.storeObject }), f);
              if (B !== void 0)
                return B;
            }
          }
          return h.readField(M, f);
        }, g = /* @__PURE__ */ new Set();
        this.flattenFields(
          u,
          s,
          // This WriteContext will be the default context value for fields returned
          // by the flattenFields method, but some fields may be assigned a modified
          // context, depending on the presence of @client and other directives.
          f,
          y
        ).forEach(function(M, V) {
          var B, Q = Jt(V), te = s[Q];
          if (g.add(V), te !== void 0) {
            var ie = h.getStoreFieldName({
              typename: y,
              fieldName: V.name.value,
              field: V,
              variables: M.variables
            }), ue = bp(p, ie), fe = r.processFieldValue(
              te,
              V,
              // Reset context.clientOnly and context.deferred to their default
              // values before processing nested selection sets.
              V.selectionSet ? Ml(M, !1, !1) : M,
              ue
            ), Ue = void 0;
            V.selectionSet && (ye(fe) || br(fe)) && (Ue = w("__typename", fe));
            var Ge = h.getMergeFunction(y, V.name.value, Ue);
            Ge ? ue.info = {
              // TODO Check compatibility against any existing childTree.field?
              field: V,
              typename: y,
              merge: Ge
            } : Np(p, ie), m = M.merge(m, (B = {}, B[ie] = fe, B));
          } else globalThis.__DEV__ !== !1 && !M.clientOnly && !M.deferred && !wu.added(V) && // If the field has a read function, it may be a synthetic field or
          // provide a default value, so its absence from the written data should
          // not be cause for alarm.
          !h.getReadFunction(y, V.name.value) && globalThis.__DEV__ !== !1 && ee.error(13, Jt(V), s);
        });
        try {
          var S = h.identify(s, {
            typename: y,
            selectionSet: u,
            fragmentMap: f.fragmentMap,
            storeObject: m,
            readField: w
          }), C = S[0], O = S[1];
          a = a || C, O && (m = f.merge(m, O));
        } catch (M) {
          if (!a)
            throw M;
        }
        if (typeof a == "string") {
          var I = Tr(a), T = f.written[a] || (f.written[a] = []);
          if (T.indexOf(u) >= 0 || (T.push(u), this.reader && this.reader.isFresh(s, I, u, f)))
            return I;
          var R = f.incomingById.get(a);
          return R ? (R.storeObject = f.merge(R.storeObject, m), R.mergeTree = iu(R.mergeTree, p), g.forEach(function(M) {
            return R.fieldNodeSet.add(M);
          })) : f.incomingById.set(a, {
            storeObject: m,
            // Save a reference to mergeTree only if it is not empty, because
            // empty MergeTrees may be recycled by maybeRecycleChildMergeTree and
            // reused for entirely different parts of the result tree.
            mergeTree: va(p) ? void 0 : p,
            fieldNodeSet: g
          }), I;
        }
        return m;
      }, i.prototype.processFieldValue = function(n, r, a, s) {
        var u = this;
        return !r.selectionSet || n === null ? globalThis.__DEV__ !== !1 ? kh(n) : n : Re(n) ? n.map(function(f, p) {
          var h = u.processFieldValue(f, r, a, bp(s, p));
          return Np(s, p), h;
        }) : this.processSelectionSet({
          result: n,
          selectionSet: r.selectionSet,
          context: a,
          mergeTree: s
        });
      }, i.prototype.flattenFields = function(n, r, a, s) {
        s === void 0 && (s = Hl(r, n, a.fragmentMap));
        var u = /* @__PURE__ */ new Map(), f = this.cache.policies, p = new en(!1);
        return function h(m, y) {
          var w = p.lookup(
            m,
            // Because we take inheritedClientOnly and inheritedDeferred into
            // consideration here (in addition to selectionSet), it's possible for
            // the same selection set to be flattened more than once, if it appears
            // in the query with different @client and/or @directive configurations.
            y.clientOnly,
            y.deferred
          );
          w.visited || (w.visited = !0, m.selections.forEach(function(g) {
            if (Vi(g, a.variables)) {
              var S = y.clientOnly, C = y.deferred;
              if (
                // Since the presence of @client or @defer on this field can only
                // cause clientOnly or deferred to become true, we can skip the
                // forEach loop if both clientOnly and deferred are already true.
                !(S && C) && Vt(g.directives) && g.directives.forEach(function(T) {
                  var R = T.name.value;
                  if (R === "client" && (S = !0), R === "defer") {
                    var M = Sa(T, a.variables);
                    (!M || M.if !== !1) && (C = !0);
                  }
                }), Tn(g)
              ) {
                var O = u.get(g);
                O && (S = S && O.clientOnly, C = C && O.deferred), u.set(g, Ml(a, S, C));
              } else {
                var I = Ea(g, a.lookupFragment);
                if (!I && g.kind === W.FRAGMENT_SPREAD)
                  throw at(14, g.name.value);
                I && f.fragmentMatches(I, s, r, a.variables) && h(I.selectionSet, Ml(a, S, C));
              }
            }
          }));
        }(n, a), u;
      }, i.prototype.applyMerges = function(n, r, a, s, u) {
        var f, p = this;
        if (n.map.size && !ye(a)) {
          var h = (
            // Items in the same position in different arrays are not
            // necessarily related to each other, so when incoming is an array
            // we process its elements as if there was no existing data.
            !Re(a) && // Likewise, existing must be either a Reference or a StoreObject
            // in order for its fields to be safe to merge with the fields of
            // the incoming object.
            (ye(r) || br(r)) ? r : void 0
          ), m = a;
          h && !u && (u = [ye(h) ? h.__ref : h]);
          var y, w = function(g, S) {
            return Re(g) ? typeof S == "number" ? g[S] : void 0 : s.store.getFieldValue(g, String(S));
          };
          n.map.forEach(function(g, S) {
            var C = w(h, S), O = w(m, S);
            if (O !== void 0) {
              u && u.push(S);
              var I = p.applyMerges(g, C, O, s, u);
              I !== O && (y = y || /* @__PURE__ */ new Map(), y.set(S, I)), u && ee(u.pop() === S);
            }
          }), y && (a = Re(m) ? m.slice(0) : N({}, m), y.forEach(function(g, S) {
            a[S] = g;
          }));
        }
        return n.info ? this.cache.policies.runMergeFunction(r, a, n.info, s, u && (f = s.store).getStorage.apply(f, u)) : a;
      }, i;
    }()
  ), Gh = [];
  function bp(i, n) {
    var r = i.map;
    return r.has(n) || r.set(n, Gh.pop() || { map: /* @__PURE__ */ new Map() }), r.get(n);
  }
  function iu(i, n) {
    if (i === n || !n || va(n))
      return i;
    if (!i || va(i))
      return n;
    var r = i.info && n.info ? N(N({}, i.info), n.info) : i.info || n.info, a = i.map.size && n.map.size, s = a ? /* @__PURE__ */ new Map() : i.map.size ? i.map : n.map, u = { info: r, map: s };
    if (a) {
      var f = new Set(n.map.keys());
      i.map.forEach(function(p, h) {
        u.map.set(h, iu(p, n.map.get(h))), f.delete(h);
      }), f.forEach(function(p) {
        u.map.set(p, iu(n.map.get(p), i.map.get(p)));
      });
    }
    return u;
  }
  function va(i) {
    return !i || !(i.info || i.map.size);
  }
  function Np(i, n) {
    var r = i.map, a = r.get(n);
    a && va(a) && (Gh.push(a), r.delete(n));
  }
  var Tp = /* @__PURE__ */ new Set();
  function h_(i, n, r, a) {
    var s = function(w) {
      var g = a.getFieldValue(w, r);
      return typeof g == "object" && g;
    }, u = s(i);
    if (u) {
      var f = s(n);
      if (f && !ye(u) && !be(u, f) && !Object.keys(u).every(function(w) {
        return a.getFieldValue(f, w) !== void 0;
      })) {
        var p = a.getFieldValue(i, "__typename") || a.getFieldValue(n, "__typename"), h = Cn(r), m = "".concat(p, ".").concat(h);
        if (!Tp.has(m)) {
          Tp.add(m);
          var y = [];
          !Re(u) && !Re(f) && [u, f].forEach(function(w) {
            var g = a.getFieldValue(w, "__typename");
            typeof g == "string" && !y.includes(g) && y.push(g);
          }), globalThis.__DEV__ !== !1 && ee.warn(15, h, p, y.length ? "either ensure all objects of type " + y.join(" and ") + " have an ID or a custom merge function, or " : "", m, N({}, u), N({}, f));
        }
      }
    }
  }
  var Yh = (
    /** @class */
    function(i) {
      Bt(n, i);
      function n(r) {
        r === void 0 && (r = {});
        var a = i.call(this) || this;
        return a.watches = /* @__PURE__ */ new Set(), a.addTypenameTransform = new mh(wu), a.assumeImmutableResults = !0, a.makeVar = u_, a.txCount = 0, a.config = Z0(r), a.addTypename = !!a.config.addTypename, a.policies = new d_({
          cache: a,
          dataIdFromObject: a.config.dataIdFromObject,
          possibleTypes: a.config.possibleTypes,
          typePolicies: a.config.typePolicies
        }), a.init(), a;
      }
      return n.prototype.init = function() {
        var r = this.data = new Li.Root({
          policies: this.policies,
          resultCaching: this.config.resultCaching
        });
        this.optimisticData = r.stump, this.resetResultCache();
      }, n.prototype.resetResultCache = function(r) {
        var a = this, s = this.storeReader, u = this.config.fragments;
        this.storeWriter = new p_(this, this.storeReader = new o_({
          cache: this,
          addTypename: this.addTypename,
          resultCacheMaxSize: this.config.resultCacheMaxSize,
          canonizeResults: Vh(this.config),
          canon: r ? void 0 : s && s.canon,
          fragments: u
        }), u), this.maybeBroadcastWatch = Ai(function(f, p) {
          return a.broadcastWatch(f, p);
        }, {
          max: this.config.resultCacheMaxSize || Xt["inMemoryCache.maybeBroadcastWatch"] || 5e3,
          makeCacheKey: function(f) {
            var p = f.optimistic ? a.optimisticData : a.data;
            if (ji(p)) {
              var h = f.optimistic, m = f.id, y = f.variables;
              return p.makeCacheKey(
                f.query,
                // Different watches can have the same query, optimistic
                // status, rootId, and variables, but if their callbacks are
                // different, the (identical) result needs to be delivered to
                // each distinct callback. The easiest way to achieve that
                // separation is to include c.callback in the cache key for
                // maybeBroadcastWatch calls. See issue #5733.
                f.callback,
                Nn({ optimistic: h, id: m, variables: y })
              );
            }
          }
        }), (/* @__PURE__ */ new Set([this.data.group, this.optimisticData.group])).forEach(function(f) {
          return f.resetCaching();
        });
      }, n.prototype.restore = function(r) {
        return this.init(), r && this.data.replace(r), this;
      }, n.prototype.extract = function(r) {
        return r === void 0 && (r = !1), (r ? this.optimisticData : this.data).extract();
      }, n.prototype.read = function(r) {
        var a = r.returnPartialData, s = a === void 0 ? !1 : a;
        try {
          return this.storeReader.diffQueryAgainstStore(N(N({}, r), { store: r.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: s })).result || null;
        } catch (u) {
          if (u instanceof Ah)
            return null;
          throw u;
        }
      }, n.prototype.write = function(r) {
        try {
          return ++this.txCount, this.storeWriter.writeToStore(this.data, r);
        } finally {
          !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
        }
      }, n.prototype.modify = function(r) {
        if ($e.call(r, "id") && !r.id)
          return !1;
        var a = r.optimistic ? this.optimisticData : this.data;
        try {
          return ++this.txCount, a.modify(r.id || "ROOT_QUERY", r.fields);
        } finally {
          !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
        }
      }, n.prototype.diff = function(r) {
        return this.storeReader.diffQueryAgainstStore(N(N({}, r), { store: r.optimistic ? this.optimisticData : this.data, rootId: r.id || "ROOT_QUERY", config: this.config }));
      }, n.prototype.watch = function(r) {
        var a = this;
        return this.watches.size || l_(this), this.watches.add(r), r.immediate && this.maybeBroadcastWatch(r), function() {
          a.watches.delete(r) && !a.watches.size && mp(a), a.maybeBroadcastWatch.forget(r);
        };
      }, n.prototype.gc = function(r) {
        var a;
        Nn.reset(), Na.reset(), this.addTypenameTransform.resetCache(), (a = this.config.fragments) === null || a === void 0 || a.resetCaches();
        var s = this.optimisticData.gc();
        return r && !this.txCount && (r.resetResultCache ? this.resetResultCache(r.resetResultIdentities) : r.resetResultIdentities && this.storeReader.resetCanon()), s;
      }, n.prototype.retain = function(r, a) {
        return (a ? this.optimisticData : this.data).retain(r);
      }, n.prototype.release = function(r, a) {
        return (a ? this.optimisticData : this.data).release(r);
      }, n.prototype.identify = function(r) {
        if (ye(r))
          return r.__ref;
        try {
          return this.policies.identify(r)[0];
        } catch (a) {
          globalThis.__DEV__ !== !1 && ee.warn(a);
        }
      }, n.prototype.evict = function(r) {
        if (!r.id) {
          if ($e.call(r, "id"))
            return !1;
          r = N(N({}, r), { id: "ROOT_QUERY" });
        }
        try {
          return ++this.txCount, this.optimisticData.evict(r, this.data);
        } finally {
          !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
        }
      }, n.prototype.reset = function(r) {
        var a = this;
        return this.init(), Nn.reset(), r && r.discardWatches ? (this.watches.forEach(function(s) {
          return a.maybeBroadcastWatch.forget(s);
        }), this.watches.clear(), mp(this)) : this.broadcastWatches(), Promise.resolve();
      }, n.prototype.removeOptimistic = function(r) {
        var a = this.optimisticData.removeLayer(r);
        a !== this.optimisticData && (this.optimisticData = a, this.broadcastWatches());
      }, n.prototype.batch = function(r) {
        var a = this, s = r.update, u = r.optimistic, f = u === void 0 ? !0 : u, p = r.removeOptimistic, h = r.onWatchUpdated, m, y = function(g) {
          var S = a, C = S.data, O = S.optimisticData;
          ++a.txCount, g && (a.data = a.optimisticData = g);
          try {
            return m = s(a);
          } finally {
            --a.txCount, a.data = C, a.optimisticData = O;
          }
        }, w = /* @__PURE__ */ new Set();
        return h && !this.txCount && this.broadcastWatches(N(N({}, r), { onWatchUpdated: function(g) {
          return w.add(g), !1;
        } })), typeof f == "string" ? this.optimisticData = this.optimisticData.addLayer(f, y) : f === !1 ? y(this.data) : y(), typeof p == "string" && (this.optimisticData = this.optimisticData.removeLayer(p)), h && w.size ? (this.broadcastWatches(N(N({}, r), { onWatchUpdated: function(g, S) {
          var C = h.call(this, g, S);
          return C !== !1 && w.delete(g), C;
        } })), w.size && w.forEach(function(g) {
          return a.maybeBroadcastWatch.dirty(g);
        })) : this.broadcastWatches(r), m;
      }, n.prototype.performTransaction = function(r, a) {
        return this.batch({
          update: r,
          optimistic: a || a !== null
        });
      }, n.prototype.transformDocument = function(r) {
        return this.addTypenameToDocument(this.addFragmentsToDocument(r));
      }, n.prototype.fragmentMatches = function(r, a) {
        return this.policies.fragmentMatches(r, a);
      }, n.prototype.lookupFragment = function(r) {
        var a;
        return ((a = this.config.fragments) === null || a === void 0 ? void 0 : a.lookup(r)) || null;
      }, n.prototype.broadcastWatches = function(r) {
        var a = this;
        this.txCount || this.watches.forEach(function(s) {
          return a.maybeBroadcastWatch(s, r);
        });
      }, n.prototype.addFragmentsToDocument = function(r) {
        var a = this.config.fragments;
        return a ? a.transform(r) : r;
      }, n.prototype.addTypenameToDocument = function(r) {
        return this.addTypename ? this.addTypenameTransform.transformDocument(r) : r;
      }, n.prototype.broadcastWatch = function(r, a) {
        var s = r.lastDiff, u = this.diff(r);
        a && (r.optimistic && typeof a.optimistic == "string" && (u.fromOptimisticTransaction = !0), a.onWatchUpdated && a.onWatchUpdated.call(this, r, u, s) === !1) || (!s || !be(s.result, u.result)) && r.callback(r.lastDiff = u, s);
      }, n;
    }(Fh)
  );
  globalThis.__DEV__ !== !1 && (Yh.prototype.getMemoryInternals = hg);
  var we;
  (function(i) {
    i[i.loading = 1] = "loading", i[i.setVariables = 2] = "setVariables", i[i.fetchMore = 3] = "fetchMore", i[i.refetch = 4] = "refetch", i[i.poll = 6] = "poll", i[i.ready = 7] = "ready", i[i.error = 8] = "error";
  })(we || (we = {}));
  function zi(i) {
    return i ? i < 7 : !1;
  }
  var Op = Object.assign, v_ = Object.hasOwnProperty, ou = (
    /** @class */
    function(i) {
      Bt(n, i);
      function n(r) {
        var a = r.queryManager, s = r.queryInfo, u = r.options, f = i.call(this, function(I) {
          try {
            var T = I._subscription._observer;
            T && !T.error && (T.error = m_);
          } catch {
          }
          var R = !f.observers.size;
          f.observers.add(I);
          var M = f.last;
          return M && M.error ? I.error && I.error(M.error) : M && M.result && I.next && I.next(f.maskResult(M.result)), R && f.reobserve().catch(function() {
          }), function() {
            f.observers.delete(I) && !f.observers.size && f.tearDownQuery();
          };
        }) || this;
        f.observers = /* @__PURE__ */ new Set(), f.subscriptions = /* @__PURE__ */ new Set(), f.queryInfo = s, f.queryManager = a, f.waitForOwnResult = Rl(u.fetchPolicy), f.isTornDown = !1, f.subscribeToMore = f.subscribeToMore.bind(f), f.maskResult = f.maskResult.bind(f);
        var p = a.defaultOptions.watchQuery, h = p === void 0 ? {} : p, m = h.fetchPolicy, y = m === void 0 ? "cache-first" : m, w = u.fetchPolicy, g = w === void 0 ? y : w, S = u.initialFetchPolicy, C = S === void 0 ? g === "standby" ? y : g : S;
        f.options = N(N({}, u), {
          // Remember the initial options.fetchPolicy so we can revert back to this
          // policy when variables change. This information can also be specified
          // (or overridden) by providing options.initialFetchPolicy explicitly.
          initialFetchPolicy: C,
          // This ensures this.options.fetchPolicy always has a string value, in
          // case options.fetchPolicy was not provided.
          fetchPolicy: g
        }), f.queryId = s.queryId || a.generateQueryId();
        var O = Hn(f.query);
        return f.queryName = O && O.name && O.name.value, f;
      }
      return Object.defineProperty(n.prototype, "query", {
        // The `query` computed property will always reflect the document transformed
        // by the last run query. `this.options.query` will always reflect the raw
        // untransformed query to ensure document transforms with runtime conditionals
        // are run on the original document.
        get: function() {
          return this.lastQuery || this.options.query;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(n.prototype, "variables", {
        // Computed shorthand for this.options.variables, preserved for
        // backwards compatibility.
        /**
         * An object containing the variables that were provided for the query.
         */
        get: function() {
          return this.options.variables;
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype.result = function() {
        var r = this;
        return new Promise(function(a, s) {
          var u = {
            next: function(p) {
              a(p), r.observers.delete(u), r.observers.size || r.queryManager.removeQuery(r.queryId), setTimeout(function() {
                f.unsubscribe();
              }, 0);
            },
            error: s
          }, f = r.subscribe(u);
        });
      }, n.prototype.resetDiff = function() {
        this.queryInfo.resetDiff();
      }, n.prototype.getCurrentFullResult = function(r) {
        r === void 0 && (r = !0);
        var a = this.getLastResult(!0), s = this.queryInfo.networkStatus || a && a.networkStatus || we.ready, u = N(N({}, a), { loading: zi(s), networkStatus: s }), f = this.options.fetchPolicy, p = f === void 0 ? "cache-first" : f;
        if (
          // These fetch policies should never deliver data from the cache, unless
          // redelivering a previously delivered result.
          !(Rl(p) || // If this.options.query has @client(always: true) fields, we cannot
          // trust diff.result, since it was read from the cache without running
          // local resolvers (and it's too late to run resolvers now, since we must
          // return a result synchronously).
          this.queryManager.getDocumentInfo(this.query).hasForcedResolvers)
        ) if (this.waitForOwnResult)
          this.queryInfo.updateWatch();
        else {
          var h = this.queryInfo.getDiff();
          (h.complete || this.options.returnPartialData) && (u.data = h.result), be(u.data, {}) && (u.data = void 0), h.complete ? (delete u.partial, h.complete && u.networkStatus === we.loading && (p === "cache-first" || p === "cache-only") && (u.networkStatus = we.ready, u.loading = !1)) : u.partial = !0, globalThis.__DEV__ !== !1 && !h.complete && !this.options.partialRefetch && !u.loading && !u.data && !u.error && Xh(h.missing);
        }
        return r && this.updateLastResult(u), u;
      }, n.prototype.getCurrentResult = function(r) {
        return r === void 0 && (r = !0), this.maskResult(this.getCurrentFullResult(r));
      }, n.prototype.isDifferentFromLastResult = function(r, a) {
        if (!this.last)
          return !0;
        var s = this.queryManager.getDocumentInfo(this.query), u = this.queryManager.dataMasking, f = u ? s.nonReactiveQuery : this.query, p = u || s.hasNonreactiveDirective ? !Ih(f, this.last.result, r, this.variables) : !be(this.last.result, r);
        return p || a && !be(this.last.variables, a);
      }, n.prototype.getLast = function(r, a) {
        var s = this.last;
        if (s && s[r] && (!a || be(s.variables, this.variables)))
          return s[r];
      }, n.prototype.getLastResult = function(r) {
        return this.getLast("result", r);
      }, n.prototype.getLastError = function(r) {
        return this.getLast("error", r);
      }, n.prototype.resetLastResults = function() {
        delete this.last, this.isTornDown = !1;
      }, n.prototype.resetQueryStoreErrors = function() {
        this.queryManager.resetErrors(this.queryId);
      }, n.prototype.refetch = function(r) {
        var a, s = {
          // Always disable polling for refetches.
          pollInterval: 0
        }, u = this.options.fetchPolicy;
        if (u === "cache-and-network" ? s.fetchPolicy = u : u === "no-cache" ? s.fetchPolicy = "no-cache" : s.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && r && v_.call(r, "variables")) {
          var f = rh(this.query), p = f.variableDefinitions;
          (!p || !p.some(function(h) {
            return h.variable.name.value === "variables";
          })) && globalThis.__DEV__ !== !1 && ee.warn(
            21,
            r,
            ((a = f.name) === null || a === void 0 ? void 0 : a.value) || f
          );
        }
        return r && !be(this.options.variables, r) && (s.variables = this.options.variables = N(N({}, this.options.variables), r)), this.queryInfo.resetLastWrite(), this.reobserve(s, we.refetch);
      }, n.prototype.fetchMore = function(r) {
        var a = this, s = N(N({}, r.query ? r : N(N(N(N({}, this.options), { query: this.options.query }), r), { variables: N(N({}, this.options.variables), r.variables) })), {
          // The fetchMore request goes immediately to the network and does
          // not automatically write its result to the cache (hence no-cache
          // instead of network-only), because we allow the caller of
          // fetchMore to provide an updateQuery callback that determines how
          // the data gets written to the cache.
          fetchPolicy: "no-cache"
        });
        s.query = this.transformDocument(s.query);
        var u = this.queryManager.generateQueryId();
        this.lastQuery = r.query ? this.transformDocument(this.options.query) : s.query;
        var f = this.queryInfo, p = f.networkStatus;
        f.networkStatus = we.fetchMore, s.notifyOnNetworkStatusChange && this.observe();
        var h = /* @__PURE__ */ new Set(), m = r == null ? void 0 : r.updateQuery, y = this.options.fetchPolicy !== "no-cache";
        return y || ee(m, 22), this.queryManager.fetchQuery(u, s, we.fetchMore).then(function(w) {
          if (a.queryManager.removeQuery(u), f.networkStatus === we.fetchMore && (f.networkStatus = p), y)
            a.queryManager.cache.batch({
              update: function(C) {
                var O = r.updateQuery;
                O ? C.updateQuery({
                  query: a.query,
                  variables: a.variables,
                  returnPartialData: !0,
                  optimistic: !1
                }, function(I) {
                  return O(I, {
                    fetchMoreResult: w.data,
                    variables: s.variables
                  });
                }) : C.writeQuery({
                  query: s.query,
                  variables: s.variables,
                  data: w.data
                });
              },
              onWatchUpdated: function(C) {
                h.add(C.query);
              }
            });
          else {
            var g = a.getLast("result"), S = m(g.data, {
              fetchMoreResult: w.data,
              variables: s.variables
            });
            a.reportResult(N(N({}, g), { data: S }), a.variables);
          }
          return a.maskResult(w);
        }).finally(function() {
          y && !h.has(a.query) && Kh(a);
        });
      }, n.prototype.subscribeToMore = function(r) {
        var a = this, s = this.queryManager.startGraphQLSubscription({
          query: r.document,
          variables: r.variables,
          context: r.context
        }).subscribe({
          next: function(u) {
            var f = r.updateQuery;
            f && a.updateQuery(function(p, h) {
              var m = h.variables;
              return f(p, {
                subscriptionData: u,
                variables: m
              });
            });
          },
          error: function(u) {
            if (r.onError) {
              r.onError(u);
              return;
            }
            globalThis.__DEV__ !== !1 && ee.error(23, u);
          }
        });
        return this.subscriptions.add(s), function() {
          a.subscriptions.delete(s) && s.unsubscribe();
        };
      }, n.prototype.setOptions = function(r) {
        return this.reobserve(r);
      }, n.prototype.silentSetOptions = function(r) {
        var a = jr(this.options, r || {});
        Op(this.options, a);
      }, n.prototype.setVariables = function(r) {
        return be(this.variables, r) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = r, this.observers.size ? this.reobserve({
          // Reset options.fetchPolicy to its original value.
          fetchPolicy: this.options.initialFetchPolicy,
          variables: r
        }, we.setVariables) : Promise.resolve());
      }, n.prototype.updateQuery = function(r) {
        var a = this.queryManager, s = a.cache.diff({
          query: this.options.query,
          variables: this.variables,
          returnPartialData: !0,
          optimistic: !1
        }).result, u = r(s, {
          variables: this.variables
        });
        u && (a.cache.writeQuery({
          query: this.options.query,
          data: u,
          variables: this.variables
        }), a.broadcastQueries());
      }, n.prototype.startPolling = function(r) {
        this.options.pollInterval = r, this.updatePolling();
      }, n.prototype.stopPolling = function() {
        this.options.pollInterval = 0, this.updatePolling();
      }, n.prototype.applyNextFetchPolicy = function(r, a) {
        if (a.nextFetchPolicy) {
          var s = a.fetchPolicy, u = s === void 0 ? "cache-first" : s, f = a.initialFetchPolicy, p = f === void 0 ? u : f;
          u === "standby" || (typeof a.nextFetchPolicy == "function" ? a.fetchPolicy = a.nextFetchPolicy(u, {
            reason: r,
            options: a,
            observable: this,
            initialFetchPolicy: p
          }) : r === "variables-changed" ? a.fetchPolicy = p : a.fetchPolicy = a.nextFetchPolicy);
        }
        return a.fetchPolicy;
      }, n.prototype.fetch = function(r, a, s) {
        return this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, r, a, s);
      }, n.prototype.updatePolling = function() {
        var r = this;
        if (!this.queryManager.ssrMode) {
          var a = this, s = a.pollingInfo, u = a.options.pollInterval;
          if (!u || !this.hasObservers()) {
            s && (clearTimeout(s.timeout), delete this.pollingInfo);
            return;
          }
          if (!(s && s.interval === u)) {
            ee(u, 24);
            var f = s || (this.pollingInfo = {});
            f.interval = u;
            var p = function() {
              var m, y;
              r.pollingInfo && (!zi(r.queryInfo.networkStatus) && !(!((y = (m = r.options).skipPollAttempt) === null || y === void 0) && y.call(m)) ? r.reobserve({
                // Most fetchPolicy options don't make sense to use in a polling context, as
                // users wouldn't want to be polling the cache directly. However, network-only and
                // no-cache are both useful for when the user wants to control whether or not the
                // polled results are written to the cache.
                fetchPolicy: r.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
              }, we.poll).then(h, h) : h());
            }, h = function() {
              var m = r.pollingInfo;
              m && (clearTimeout(m.timeout), m.timeout = setTimeout(p, m.interval));
            };
            h();
          }
        }
      }, n.prototype.updateLastResult = function(r, a) {
        a === void 0 && (a = this.variables);
        var s = this.getLastError();
        return s && this.last && !be(a, this.last.variables) && (s = void 0), this.last = N({ result: this.queryManager.assumeImmutableResults ? r : kh(r), variables: a }, s ? { error: s } : null);
      }, n.prototype.reobserveAsConcast = function(r, a) {
        var s = this;
        this.isTornDown = !1;
        var u = (
          // Refetching uses a disposable Concast to allow refetches using different
          // options/variables, without permanently altering the options of the
          // original ObservableQuery.
          a === we.refetch || // The fetchMore method does not actually call the reobserve method, but,
          // if it did, it would definitely use a disposable Concast.
          a === we.fetchMore || // Polling uses a disposable Concast so the polling options (which force
          // fetchPolicy to be "network-only" or "no-cache") won't override the original options.
          a === we.poll
        ), f = this.options.variables, p = this.options.fetchPolicy, h = jr(this.options, r || {}), m = u ? (
          // Disposable Concast fetches receive a shallow copy of this.options
          // (merged with newOptions), leaving this.options unmodified.
          h
        ) : Op(this.options, h), y = this.transformDocument(m.query);
        this.lastQuery = y, u || (this.updatePolling(), r && r.variables && !be(r.variables, f) && // Don't mess with the fetchPolicy if it's currently "standby".
        m.fetchPolicy !== "standby" && // If we're changing the fetchPolicy anyway, don't try to change it here
        // using applyNextFetchPolicy. The explicit options.fetchPolicy wins.
        (m.fetchPolicy === p || // A `nextFetchPolicy` function has even higher priority, though,
        // so in that case `applyNextFetchPolicy` must be called.
        typeof m.nextFetchPolicy == "function") && (this.applyNextFetchPolicy("variables-changed", m), a === void 0 && (a = we.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = Rl(m.fetchPolicy));
        var w = function() {
          s.concast === C && (s.waitForOwnResult = !1);
        }, g = m.variables && N({}, m.variables), S = this.fetch(m, a, y), C = S.concast, O = S.fromLink, I = {
          next: function(T) {
            be(s.variables, g) && (w(), s.reportResult(T, g));
          },
          error: function(T) {
            be(s.variables, g) && (Oh(T) || (T = new qn({ networkError: T })), w(), s.reportError(T, g));
          }
        };
        return !u && (O || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = C, this.observer = I), C.addObserver(I), C;
      }, n.prototype.reobserve = function(r, a) {
        return s0(this.reobserveAsConcast(r, a).promise.then(this.maskResult));
      }, n.prototype.resubscribeAfterError = function() {
        for (var r = [], a = 0; a < arguments.length; a++)
          r[a] = arguments[a];
        var s = this.last;
        this.resetLastResults();
        var u = this.subscribe.apply(this, r);
        return this.last = s, u;
      }, n.prototype.observe = function() {
        this.reportResult(
          // Passing false is important so that this.getCurrentResult doesn't
          // save the fetchMore result as this.lastResult, causing it to be
          // ignored due to the this.isDifferentFromLastResult check in
          // this.reportResult.
          this.getCurrentFullResult(!1),
          this.variables
        );
      }, n.prototype.reportResult = function(r, a) {
        var s = this.getLastError(), u = this.isDifferentFromLastResult(r, a);
        (s || !r.partial || this.options.returnPartialData) && this.updateLastResult(r, a), (s || u) && Di(this.observers, "next", this.maskResult(r));
      }, n.prototype.reportError = function(r, a) {
        var s = N(N({}, this.getLastResult()), { error: r, errors: r.graphQLErrors, networkStatus: we.error, loading: !1 });
        this.updateLastResult(s, a), Di(this.observers, "error", this.last.error = r);
      }, n.prototype.hasObservers = function() {
        return this.observers.size > 0;
      }, n.prototype.tearDownQuery = function() {
        this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(r) {
          return r.unsubscribe();
        }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
      }, n.prototype.transformDocument = function(r) {
        return this.queryManager.transform(r);
      }, n.prototype.maskResult = function(r) {
        return r && "data" in r ? N(N({}, r), { data: this.queryManager.maskOperation({
          document: this.query,
          data: r.data,
          fetchPolicy: this.options.fetchPolicy,
          id: this.queryId
        }) }) : r;
      }, n;
    }(ke)
  );
  bh(ou);
  function Kh(i) {
    var n = i.options, r = n.fetchPolicy, a = n.nextFetchPolicy;
    return r === "cache-and-network" || r === "network-only" ? i.reobserve({
      fetchPolicy: "cache-first",
      // Use a temporary nextFetchPolicy function that replaces itself with the
      // previous nextFetchPolicy value and returns the original fetchPolicy.
      nextFetchPolicy: function(s, u) {
        return this.nextFetchPolicy = a, typeof this.nextFetchPolicy == "function" ? this.nextFetchPolicy(s, u) : r;
      }
    }) : i.reobserve();
  }
  function m_(i) {
    globalThis.__DEV__ !== !1 && ee.error(25, i.message, i.stack);
  }
  function Xh(i) {
    globalThis.__DEV__ !== !1 && i && globalThis.__DEV__ !== !1 && ee.debug(26, i);
  }
  function Rl(i) {
    return i === "network-only" || i === "no-cache" || i === "standby";
  }
  var Nr = new (Gn ? WeakMap : Map)();
  function Pl(i, n) {
    var r = i[n];
    typeof r == "function" && (i[n] = function() {
      return Nr.set(
        i,
        // The %1e15 allows the count to wrap around to 0 safely every
        // quadrillion evictions, so there's no risk of overflow. To be
        // clear, this is more of a pedantic principle than something
        // that matters in any conceivable practical scenario.
        (Nr.get(i) + 1) % 1e15
      ), r.apply(this, arguments);
    });
  }
  function xp(i) {
    i.notifyTimeout && (clearTimeout(i.notifyTimeout), i.notifyTimeout = void 0);
  }
  var Fl = (
    /** @class */
    function() {
      function i(n, r) {
        r === void 0 && (r = n.generateQueryId()), this.queryId = r, this.listeners = /* @__PURE__ */ new Set(), this.document = null, this.lastRequestId = 1, this.stopped = !1, this.dirty = !1, this.observableQuery = null;
        var a = this.cache = n.cache;
        Nr.has(a) || (Nr.set(a, 0), Pl(a, "evict"), Pl(a, "modify"), Pl(a, "reset"));
      }
      return i.prototype.init = function(n) {
        var r = n.networkStatus || we.loading;
        return this.variables && this.networkStatus !== we.loading && !be(this.variables, n.variables) && (r = we.setVariables), be(n.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
          document: n.document,
          variables: n.variables,
          networkError: null,
          graphQLErrors: this.graphQLErrors || [],
          networkStatus: r
        }), n.observableQuery && this.setObservableQuery(n.observableQuery), n.lastRequestId && (this.lastRequestId = n.lastRequestId), this;
      }, i.prototype.reset = function() {
        xp(this), this.dirty = !1;
      }, i.prototype.resetDiff = function() {
        this.lastDiff = void 0;
      }, i.prototype.getDiff = function() {
        var n = this.getDiffOptions();
        if (this.lastDiff && be(n, this.lastDiff.options))
          return this.lastDiff.diff;
        this.updateWatch(this.variables);
        var r = this.observableQuery;
        if (r && r.options.fetchPolicy === "no-cache")
          return { complete: !1 };
        var a = this.cache.diff(n);
        return this.updateLastDiff(a, n), a;
      }, i.prototype.updateLastDiff = function(n, r) {
        this.lastDiff = n ? {
          diff: n,
          options: r || this.getDiffOptions()
        } : void 0;
      }, i.prototype.getDiffOptions = function(n) {
        var r;
        return n === void 0 && (n = this.variables), {
          query: this.document,
          variables: n,
          returnPartialData: !0,
          optimistic: !0,
          canonizeResults: (r = this.observableQuery) === null || r === void 0 ? void 0 : r.options.canonizeResults
        };
      }, i.prototype.setDiff = function(n) {
        var r = this, a, s = this.lastDiff && this.lastDiff.diff;
        n && !n.complete && (!((a = this.observableQuery) === null || a === void 0) && a.getLastError()) || (this.updateLastDiff(n), !this.dirty && !be(s && s.result, n && n.result) && (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
          return r.notify();
        }, 0))));
      }, i.prototype.setObservableQuery = function(n) {
        var r = this;
        n !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = n, n ? (n.queryInfo = this, this.listeners.add(this.oqListener = function() {
          var a = r.getDiff();
          a.fromOptimisticTransaction ? n.observe() : Kh(n);
        })) : delete this.oqListener);
      }, i.prototype.notify = function() {
        var n = this;
        xp(this), this.shouldNotify() && this.listeners.forEach(function(r) {
          return r(n);
        }), this.dirty = !1;
      }, i.prototype.shouldNotify = function() {
        if (!this.dirty || !this.listeners.size)
          return !1;
        if (zi(this.networkStatus) && this.observableQuery) {
          var n = this.observableQuery.options.fetchPolicy;
          if (n !== "cache-only" && n !== "cache-and-network")
            return !1;
        }
        return !0;
      }, i.prototype.stop = function() {
        if (!this.stopped) {
          this.stopped = !0, this.reset(), this.cancel(), this.cancel = i.prototype.cancel;
          var n = this.observableQuery;
          n && n.stopPolling();
        }
      }, i.prototype.cancel = function() {
      }, i.prototype.updateWatch = function(n) {
        var r = this;
        n === void 0 && (n = this.variables);
        var a = this.observableQuery;
        if (!(a && a.options.fetchPolicy === "no-cache")) {
          var s = N(N({}, this.getDiffOptions(n)), { watcher: this, callback: function(u) {
            return r.setDiff(u);
          } });
          (!this.lastWatch || !be(s, this.lastWatch)) && (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = s));
        }
      }, i.prototype.resetLastWrite = function() {
        this.lastWrite = void 0;
      }, i.prototype.shouldWrite = function(n, r) {
        var a = this.lastWrite;
        return !(a && // If cache.evict has been called since the last time we wrote this
        // data into the cache, there's a chance writing this result into
        // the cache will repair what was evicted.
        a.dmCount === Nr.get(this.cache) && be(r, a.variables) && be(n.data, a.result.data));
      }, i.prototype.markResult = function(n, r, a, s) {
        var u = this, f = new xn(), p = Vt(n.errors) ? n.errors.slice(0) : [];
        if (this.reset(), "incremental" in n && Vt(n.incremental)) {
          var h = Nh(this.getDiff().result, n);
          n.data = h;
        } else if ("hasNext" in n && n.hasNext) {
          var m = this.getDiff();
          n.data = f.merge(m.result, n.data);
        }
        this.graphQLErrors = p, a.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: n.data, complete: !0 }, this.getDiffOptions(a.variables)) : s !== 0 && (au(n, a.errorPolicy) ? this.cache.performTransaction(function(y) {
          if (u.shouldWrite(n, a.variables))
            y.writeQuery({
              query: r,
              data: n.data,
              variables: a.variables,
              overwrite: s === 1
            }), u.lastWrite = {
              result: n,
              variables: a.variables,
              dmCount: Nr.get(u.cache)
            };
          else if (u.lastDiff && u.lastDiff.diff.complete) {
            n.data = u.lastDiff.diff.result;
            return;
          }
          var w = u.getDiffOptions(a.variables), g = y.diff(w);
          !u.stopped && be(u.variables, a.variables) && u.updateWatch(a.variables), u.updateLastDiff(g, w), g.complete && (n.data = g.result);
        }) : this.lastWrite = void 0);
      }, i.prototype.markReady = function() {
        return this.networkError = null, this.networkStatus = we.ready;
      }, i.prototype.markError = function(n) {
        return this.networkStatus = we.error, this.lastWrite = void 0, this.reset(), n.graphQLErrors && (this.graphQLErrors = n.graphQLErrors), n.networkError && (this.networkError = n.networkError), n;
      }, i;
    }()
  );
  function au(i, n) {
    n === void 0 && (n = "none");
    var r = n === "ignore" || n === "all", a = !la(i);
    return !a && r && i.data && (a = !0), a;
  }
  var y_ = Object.prototype.hasOwnProperty, Cp = /* @__PURE__ */ Object.create(null), g_ = (
    /** @class */
    function() {
      function i(n) {
        var r = this;
        this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new Xp(
          Xt["queryManager.getDocumentInfo"] || 2e3
          /* defaultCacheSizes["queryManager.getDocumentInfo"] */
        ), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new en(!1), this.noCacheWarningsByQueryId = /* @__PURE__ */ new Set();
        var a = new mh(
          function(u) {
            return r.cache.transformDocument(u);
          },
          // Allow the apollo cache to manage its own transform caches
          { cache: !1 }
        );
        this.cache = n.cache, this.link = n.link, this.defaultOptions = n.defaultOptions, this.queryDeduplication = n.queryDeduplication, this.clientAwareness = n.clientAwareness, this.localState = n.localState, this.ssrMode = n.ssrMode, this.assumeImmutableResults = n.assumeImmutableResults, this.dataMasking = n.dataMasking;
        var s = n.documentTransform;
        this.documentTransform = s ? a.concat(s).concat(a) : a, this.defaultContext = n.defaultContext || /* @__PURE__ */ Object.create(null), (this.onBroadcast = n.onBroadcast) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
      }
      return i.prototype.stop = function() {
        var n = this;
        this.queries.forEach(function(r, a) {
          n.stopQueryNoBroadcast(a);
        }), this.cancelPendingFetches(at(27));
      }, i.prototype.cancelPendingFetches = function(n) {
        this.fetchCancelFns.forEach(function(r) {
          return r(n);
        }), this.fetchCancelFns.clear();
      }, i.prototype.mutate = function(n) {
        return Sn(this, arguments, void 0, function(r) {
          var a, s, u, f, p, h, m, y = r.mutation, w = r.variables, g = r.optimisticResponse, S = r.updateQueries, C = r.refetchQueries, O = C === void 0 ? [] : C, I = r.awaitRefetchQueries, T = I === void 0 ? !1 : I, R = r.update, M = r.onQueryUpdated, V = r.fetchPolicy, B = V === void 0 ? ((h = this.defaultOptions.mutate) === null || h === void 0 ? void 0 : h.fetchPolicy) || "network-only" : V, Q = r.errorPolicy, te = Q === void 0 ? ((m = this.defaultOptions.mutate) === null || m === void 0 ? void 0 : m.errorPolicy) || "none" : Q, ie = r.keepRootFields, ue = r.context;
          return kn(this, function(fe) {
            switch (fe.label) {
              case 0:
                return ee(y, 28), ee(B === "network-only" || B === "no-cache", 29), a = this.generateMutationId(), y = this.cache.transformForLink(this.transform(y)), s = this.getDocumentInfo(y).hasClientExports, w = this.getVariables(y, w), s ? [4, this.localState.addExportedVariables(y, w, ue)] : [3, 2];
              case 1:
                w = fe.sent(), fe.label = 2;
              case 2:
                return u = this.mutationStore && (this.mutationStore[a] = {
                  mutation: y,
                  variables: w,
                  loading: !0,
                  error: null
                }), f = g && this.markMutationOptimistic(g, {
                  mutationId: a,
                  document: y,
                  variables: w,
                  fetchPolicy: B,
                  errorPolicy: te,
                  context: ue,
                  updateQueries: S,
                  update: R,
                  keepRootFields: ie
                }), this.broadcastQueries(), p = this, [2, new Promise(function(Ue, Ge) {
                  return xl(p.getObservableFromLink(y, N(N({}, ue), { optimisticResponse: f ? g : void 0 }), w, {}, !1), function(me) {
                    if (la(me) && te === "none")
                      throw new qn({
                        graphQLErrors: Xl(me)
                      });
                    u && (u.loading = !1, u.error = null);
                    var Ae = N({}, me);
                    return typeof O == "function" && (O = O(Ae)), te === "ignore" && la(Ae) && delete Ae.errors, p.markMutationResult({
                      mutationId: a,
                      result: Ae,
                      document: y,
                      variables: w,
                      fetchPolicy: B,
                      errorPolicy: te,
                      context: ue,
                      update: R,
                      updateQueries: S,
                      awaitRefetchQueries: T,
                      refetchQueries: O,
                      removeOptimistic: f ? a : void 0,
                      onQueryUpdated: M,
                      keepRootFields: ie
                    });
                  }).subscribe({
                    next: function(me) {
                      p.broadcastQueries(), (!("hasNext" in me) || me.hasNext === !1) && Ue(N(N({}, me), { data: p.maskOperation({
                        document: y,
                        data: me.data,
                        fetchPolicy: B,
                        id: a
                      }) }));
                    },
                    error: function(me) {
                      u && (u.loading = !1, u.error = me), f && p.cache.removeOptimistic(a), p.broadcastQueries(), Ge(me instanceof qn ? me : new qn({
                        networkError: me
                      }));
                    }
                  });
                })];
            }
          });
        });
      }, i.prototype.markMutationResult = function(n, r) {
        var a = this;
        r === void 0 && (r = this.cache);
        var s = n.result, u = [], f = n.fetchPolicy === "no-cache";
        if (!f && au(s, n.errorPolicy)) {
          if (Or(s) || u.push({
            result: s.data,
            dataId: "ROOT_MUTATION",
            query: n.document,
            variables: n.variables
          }), Or(s) && Vt(s.incremental)) {
            var p = r.diff({
              id: "ROOT_MUTATION",
              // The cache complains if passed a mutation where it expects a
              // query, so we transform mutations and subscriptions to queries
              // (only once, thanks to this.transformCache).
              query: this.getDocumentInfo(n.document).asQuery,
              variables: n.variables,
              optimistic: !1,
              returnPartialData: !0
            }), h = void 0;
            p.result && (h = Nh(p.result, s)), typeof h < "u" && (s.data = h, u.push({
              result: h,
              dataId: "ROOT_MUTATION",
              query: n.document,
              variables: n.variables
            }));
          }
          var m = n.updateQueries;
          m && this.queries.forEach(function(w, g) {
            var S = w.observableQuery, C = S && S.queryName;
            if (!(!C || !y_.call(m, C))) {
              var O = m[C], I = a.queries.get(g), T = I.document, R = I.variables, M = r.diff({
                query: T,
                variables: R,
                returnPartialData: !0,
                optimistic: !1
              }), V = M.result, B = M.complete;
              if (B && V) {
                var Q = O(V, {
                  mutationResult: s,
                  queryName: T && aa(T) || void 0,
                  queryVariables: R
                });
                Q && u.push({
                  result: Q,
                  dataId: "ROOT_QUERY",
                  query: T,
                  variables: R
                });
              }
            }
          });
        }
        if (u.length > 0 || (n.refetchQueries || "").length > 0 || n.update || n.onQueryUpdated || n.removeOptimistic) {
          var y = [];
          if (this.refetchQueries({
            updateCache: function(w) {
              f || u.forEach(function(O) {
                return w.write(O);
              });
              var g = n.update, S = !d0(s) || Or(s) && !s.hasNext;
              if (g) {
                if (!f) {
                  var C = w.diff({
                    id: "ROOT_MUTATION",
                    // The cache complains if passed a mutation where it expects a
                    // query, so we transform mutations and subscriptions to queries
                    // (only once, thanks to this.transformCache).
                    query: a.getDocumentInfo(n.document).asQuery,
                    variables: n.variables,
                    optimistic: !1,
                    returnPartialData: !0
                  });
                  C.complete && (s = N(N({}, s), { data: C.result }), "incremental" in s && delete s.incremental, "hasNext" in s && delete s.hasNext);
                }
                S && g(w, s, {
                  context: n.context,
                  variables: n.variables
                });
              }
              !f && !n.keepRootFields && S && w.modify({
                id: "ROOT_MUTATION",
                fields: function(O, I) {
                  var T = I.fieldName, R = I.DELETE;
                  return T === "__typename" ? O : R;
                }
              });
            },
            include: n.refetchQueries,
            // Write the final mutation.result to the root layer of the cache.
            optimistic: !1,
            // Remove the corresponding optimistic layer at the same time as we
            // write the final non-optimistic result.
            removeOptimistic: n.removeOptimistic,
            // Let the caller of client.mutate optionally determine the refetching
            // behavior for watched queries after the mutation.update function runs.
            // If no onQueryUpdated function was provided for this mutation, pass
            // null instead of undefined to disable the default refetching behavior.
            onQueryUpdated: n.onQueryUpdated || null
          }).forEach(function(w) {
            return y.push(w);
          }), n.awaitRefetchQueries || n.onQueryUpdated)
            return Promise.all(y).then(function() {
              return s;
            });
        }
        return Promise.resolve(s);
      }, i.prototype.markMutationOptimistic = function(n, r) {
        var a = this, s = typeof n == "function" ? n(r.variables, { IGNORE: Cp }) : n;
        return s === Cp ? !1 : (this.cache.recordOptimisticTransaction(function(u) {
          try {
            a.markMutationResult(N(N({}, r), { result: { data: s } }), u);
          } catch (f) {
            globalThis.__DEV__ !== !1 && ee.error(f);
          }
        }, r.mutationId), !0);
      }, i.prototype.fetchQuery = function(n, r, a) {
        return this.fetchConcastWithInfo(n, r, a).concast.promise;
      }, i.prototype.getQueryStore = function() {
        var n = /* @__PURE__ */ Object.create(null);
        return this.queries.forEach(function(r, a) {
          n[a] = {
            variables: r.variables,
            networkStatus: r.networkStatus,
            networkError: r.networkError,
            graphQLErrors: r.graphQLErrors
          };
        }), n;
      }, i.prototype.resetErrors = function(n) {
        var r = this.queries.get(n);
        r && (r.networkError = void 0, r.graphQLErrors = []);
      }, i.prototype.transform = function(n) {
        return this.documentTransform.transformDocument(n);
      }, i.prototype.getDocumentInfo = function(n) {
        var r = this.transformCache;
        if (!r.has(n)) {
          var a = {
            // TODO These three calls (hasClientExports, shouldForceResolvers, and
            // usesNonreactiveDirective) are performing independent full traversals
            // of the transformed document. We should consider merging these
            // traversals into a single pass in the future, though the work is
            // cached after the first time.
            hasClientExports: Gy(n),
            hasForcedResolvers: this.localState.shouldForceResolvers(n),
            hasNonreactiveDirective: Pi(["nonreactive"], n),
            nonReactiveQuery: Kg(n),
            clientQuery: this.localState.clientQuery(n),
            serverQuery: gh([
              { name: "client", remove: !0 },
              { name: "connection" },
              { name: "nonreactive" },
              { name: "unmask" }
            ], n),
            defaultVars: vu(Hn(n)),
            // Transform any mutation or subscription operations to query operations
            // so we can read/write them from/to the cache.
            asQuery: N(N({}, n), { definitions: n.definitions.map(function(s) {
              return s.kind === "OperationDefinition" && s.operation !== "query" ? N(N({}, s), { operation: "query" }) : s;
            }) })
          };
          r.set(n, a);
        }
        return r.get(n);
      }, i.prototype.getVariables = function(n, r) {
        return N(N({}, this.getDocumentInfo(n).defaultVars), r);
      }, i.prototype.watchQuery = function(n) {
        var r = this.transform(n.query);
        n = N(N({}, n), { variables: this.getVariables(r, n.variables) }), typeof n.notifyOnNetworkStatusChange > "u" && (n.notifyOnNetworkStatusChange = !1);
        var a = new Fl(this), s = new ou({
          queryManager: this,
          queryInfo: a,
          options: n
        });
        return s.lastQuery = r, this.queries.set(s.queryId, a), a.init({
          document: r,
          observableQuery: s,
          variables: s.variables
        }), s;
      }, i.prototype.query = function(n, r) {
        var a = this;
        r === void 0 && (r = this.generateQueryId()), ee(n.query, 30), ee(n.query.kind === "Document", 31), ee(!n.returnPartialData, 32), ee(!n.pollInterval, 33);
        var s = this.transform(n.query);
        return this.fetchQuery(r, N(N({}, n), { query: s })).then(function(u) {
          return u && N(N({}, u), { data: a.maskOperation({
            document: s,
            data: u.data,
            fetchPolicy: n.fetchPolicy,
            id: r
          }) });
        }).finally(function() {
          return a.stopQuery(r);
        });
      }, i.prototype.generateQueryId = function() {
        return String(this.queryIdCounter++);
      }, i.prototype.generateRequestId = function() {
        return this.requestIdCounter++;
      }, i.prototype.generateMutationId = function() {
        return String(this.mutationIdCounter++);
      }, i.prototype.stopQueryInStore = function(n) {
        this.stopQueryInStoreNoBroadcast(n), this.broadcastQueries();
      }, i.prototype.stopQueryInStoreNoBroadcast = function(n) {
        var r = this.queries.get(n);
        r && r.stop();
      }, i.prototype.clearStore = function(n) {
        return n === void 0 && (n = {
          discardWatches: !0
        }), this.cancelPendingFetches(at(34)), this.queries.forEach(function(r) {
          r.observableQuery ? r.networkStatus = we.loading : r.stop();
        }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(n);
      }, i.prototype.getObservableQueries = function(n) {
        var r = this;
        n === void 0 && (n = "active");
        var a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set();
        return Array.isArray(n) && n.forEach(function(f) {
          typeof f == "string" ? s.set(f, !1) : Sg(f) ? s.set(r.transform(f), !1) : Me(f) && f.query && u.add(f);
        }), this.queries.forEach(function(f, p) {
          var h = f.observableQuery, m = f.document;
          if (h) {
            if (n === "all") {
              a.set(p, h);
              return;
            }
            var y = h.queryName, w = h.options.fetchPolicy;
            if (w === "standby" || n === "active" && !h.hasObservers())
              return;
            (n === "active" || y && s.has(y) || m && s.has(m)) && (a.set(p, h), y && s.set(y, !0), m && s.set(m, !0));
          }
        }), u.size && u.forEach(function(f) {
          var p = zl("legacyOneTimeQuery"), h = r.getQuery(p).init({
            document: f.query,
            variables: f.variables
          }), m = new ou({
            queryManager: r,
            queryInfo: h,
            options: N(N({}, f), { fetchPolicy: "network-only" })
          });
          ee(m.queryId === p), h.setObservableQuery(m), a.set(p, m);
        }), globalThis.__DEV__ !== !1 && s.size && s.forEach(function(f, p) {
          f || globalThis.__DEV__ !== !1 && ee.warn(typeof p == "string" ? 35 : 36, p);
        }), a;
      }, i.prototype.reFetchObservableQueries = function(n) {
        var r = this;
        n === void 0 && (n = !1);
        var a = [];
        return this.getObservableQueries(n ? "all" : "active").forEach(function(s, u) {
          var f = s.options.fetchPolicy;
          s.resetLastResults(), (n || f !== "standby" && f !== "cache-only") && a.push(s.refetch()), r.getQuery(u).setDiff(null);
        }), this.broadcastQueries(), Promise.all(a);
      }, i.prototype.setObservableQuery = function(n) {
        this.getQuery(n.queryId).setObservableQuery(n);
      }, i.prototype.startGraphQLSubscription = function(n) {
        var r = this, a = n.query, s = n.variables, u = n.fetchPolicy, f = n.errorPolicy, p = f === void 0 ? "none" : f, h = n.context, m = h === void 0 ? {} : h, y = n.extensions, w = y === void 0 ? {} : y;
        a = this.transform(a), s = this.getVariables(a, s);
        var g = function(C) {
          return r.getObservableFromLink(a, m, C, w).map(function(O) {
            u !== "no-cache" && (au(O, p) && r.cache.write({
              query: a,
              result: O.data,
              dataId: "ROOT_SUBSCRIPTION",
              variables: C
            }), r.broadcastQueries());
            var I = la(O), T = x0(O);
            if (I || T) {
              var R = {};
              if (I && (R.graphQLErrors = O.errors), T && (R.protocolErrors = O.extensions[Nu]), p === "none" || T)
                throw new qn(R);
            }
            return p === "ignore" && delete O.errors, O;
          });
        };
        if (this.getDocumentInfo(a).hasClientExports) {
          var S = this.localState.addExportedVariables(a, s, m).then(g);
          return new ke(function(C) {
            var O = null;
            return S.then(function(I) {
              return O = I.subscribe(C);
            }, C.error), function() {
              return O && O.unsubscribe();
            };
          });
        }
        return g(s);
      }, i.prototype.stopQuery = function(n) {
        this.stopQueryNoBroadcast(n), this.broadcastQueries();
      }, i.prototype.stopQueryNoBroadcast = function(n) {
        this.stopQueryInStoreNoBroadcast(n), this.removeQuery(n);
      }, i.prototype.removeQuery = function(n) {
        this.fetchCancelFns.delete(n), this.queries.has(n) && (this.getQuery(n).stop(), this.queries.delete(n));
      }, i.prototype.broadcastQueries = function() {
        this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(n) {
          return n.notify();
        });
      }, i.prototype.getLocalState = function() {
        return this.localState;
      }, i.prototype.getObservableFromLink = function(n, r, a, s, u) {
        var f = this, p;
        u === void 0 && (u = (p = r == null ? void 0 : r.queryDeduplication) !== null && p !== void 0 ? p : this.queryDeduplication);
        var h, m = this.getDocumentInfo(n), y = m.serverQuery, w = m.clientQuery;
        if (y) {
          var g = this, S = g.inFlightLinkObservables, C = g.link, O = {
            query: y,
            variables: a,
            operationName: aa(y) || void 0,
            context: this.prepareContext(N(N({}, r), { forceFetch: !u })),
            extensions: s
          };
          if (r = O.context, u) {
            var I = Na(y), T = Nn(a), R = S.lookup(I, T);
            if (h = R.observable, !h) {
              var M = new Er([
                Jl(C, O)
              ]);
              h = R.observable = M, M.beforeNext(function() {
                S.remove(I, T);
              });
            }
          } else
            h = new Er([
              Jl(C, O)
            ]);
        } else
          h = new Er([ke.of({ data: {} })]), r = this.prepareContext(r);
        return w && (h = xl(h, function(V) {
          return f.localState.runResolvers({
            document: w,
            remoteResult: V,
            context: r,
            variables: a
          });
        })), h;
      }, i.prototype.getResultsFromLink = function(n, r, a) {
        var s = n.lastRequestId = this.generateRequestId(), u = this.cache.transformForLink(a.query);
        return xl(this.getObservableFromLink(u, a.context, a.variables), function(f) {
          var p = Xl(f), h = p.length > 0, m = a.errorPolicy;
          if (s >= n.lastRequestId) {
            if (h && m === "none")
              throw n.markError(new qn({
                graphQLErrors: p
              }));
            n.markResult(f, u, a, r), n.markReady();
          }
          var y = {
            data: f.data,
            loading: !1,
            networkStatus: we.ready
          };
          return h && m === "none" && (y.data = void 0), h && m !== "ignore" && (y.errors = p, y.networkStatus = we.error), y;
        }, function(f) {
          var p = Oh(f) ? f : new qn({ networkError: f });
          throw s >= n.lastRequestId && n.markError(p), p;
        });
      }, i.prototype.fetchConcastWithInfo = function(n, r, a, s) {
        var u = this;
        a === void 0 && (a = we.loading), s === void 0 && (s = r.query);
        var f = this.getVariables(s, r.variables), p = this.getQuery(n), h = this.defaultOptions.watchQuery, m = r.fetchPolicy, y = m === void 0 ? h && h.fetchPolicy || "cache-first" : m, w = r.errorPolicy, g = w === void 0 ? h && h.errorPolicy || "none" : w, S = r.returnPartialData, C = S === void 0 ? !1 : S, O = r.notifyOnNetworkStatusChange, I = O === void 0 ? !1 : O, T = r.context, R = T === void 0 ? {} : T, M = Object.assign({}, r, {
          query: s,
          variables: f,
          fetchPolicy: y,
          errorPolicy: g,
          returnPartialData: C,
          notifyOnNetworkStatusChange: I,
          context: R
        }), V = function(ue) {
          M.variables = ue;
          var fe = u.fetchQueryByPolicy(p, M, a);
          return (
            // If we're in standby, postpone advancing options.fetchPolicy using
            // applyNextFetchPolicy.
            M.fetchPolicy !== "standby" && // The "standby" policy currently returns [] from fetchQueryByPolicy, so
            // this is another way to detect when nothing was done/fetched.
            fe.sources.length > 0 && p.observableQuery && p.observableQuery.applyNextFetchPolicy("after-fetch", r), fe
          );
        }, B = function() {
          return u.fetchCancelFns.delete(n);
        };
        this.fetchCancelFns.set(n, function(ue) {
          B(), setTimeout(function() {
            return Q.cancel(ue);
          });
        });
        var Q, te;
        if (this.getDocumentInfo(M.query).hasClientExports)
          Q = new Er(this.localState.addExportedVariables(M.query, M.variables, M.context).then(V).then(function(ue) {
            return ue.sources;
          })), te = !0;
        else {
          var ie = V(M.variables);
          te = ie.fromLink, Q = new Er(ie.sources);
        }
        return Q.promise.then(B, B), {
          concast: Q,
          fromLink: te
        };
      }, i.prototype.refetchQueries = function(n) {
        var r = this, a = n.updateCache, s = n.include, u = n.optimistic, f = u === void 0 ? !1 : u, p = n.removeOptimistic, h = p === void 0 ? f ? zl("refetchQueries") : void 0 : p, m = n.onQueryUpdated, y = /* @__PURE__ */ new Map();
        s && this.getObservableQueries(s).forEach(function(g, S) {
          y.set(S, {
            oq: g,
            lastDiff: r.getQuery(S).getDiff()
          });
        });
        var w = /* @__PURE__ */ new Map();
        return a && this.cache.batch({
          update: a,
          // Since you can perform any combination of cache reads and/or writes in
          // the cache.batch update function, its optimistic option can be either
          // a boolean or a string, representing three distinct modes of
          // operation:
          //
          // * false: read/write only the root layer
          // * true: read/write the topmost layer
          // * string: read/write a fresh optimistic layer with that ID string
          //
          // When typeof optimistic === "string", a new optimistic layer will be
          // temporarily created within cache.batch with that string as its ID. If
          // we then pass that same string as the removeOptimistic option, we can
          // make cache.batch immediately remove the optimistic layer after
          // running the updateCache function, triggering only one broadcast.
          //
          // However, the refetchQueries method accepts only true or false for its
          // optimistic option (not string). We interpret true to mean a temporary
          // optimistic layer should be created, to allow efficiently rolling back
          // the effect of the updateCache function, which involves passing a
          // string instead of true as the optimistic option to cache.batch, when
          // refetchQueries receives optimistic: true.
          //
          // In other words, we are deliberately not supporting the use case of
          // writing to an *existing* optimistic layer (using the refetchQueries
          // updateCache function), since that would potentially interfere with
          // other optimistic updates in progress. Instead, you can read/write
          // only the root layer by passing optimistic: false to refetchQueries,
          // or you can read/write a brand new optimistic layer that will be
          // automatically removed by passing optimistic: true.
          optimistic: f && h || !1,
          // The removeOptimistic option can also be provided by itself, even if
          // optimistic === false, to remove some previously-added optimistic
          // layer safely and efficiently, like we do in markMutationResult.
          //
          // If an explicit removeOptimistic string is provided with optimistic:
          // true, the removeOptimistic string will determine the ID of the
          // temporary optimistic layer, in case that ever matters.
          removeOptimistic: h,
          onWatchUpdated: function(g, S, C) {
            var O = g.watcher instanceof Fl && g.watcher.observableQuery;
            if (O) {
              if (m) {
                y.delete(O.queryId);
                var I = m(O, S, C);
                return I === !0 && (I = O.refetch()), I !== !1 && w.set(O, I), I;
              }
              m !== null && y.set(O.queryId, { oq: O, lastDiff: C, diff: S });
            }
          }
        }), y.size && y.forEach(function(g, S) {
          var C = g.oq, O = g.lastDiff, I = g.diff, T;
          if (m) {
            if (!I) {
              var R = C.queryInfo;
              R.reset(), I = R.getDiff();
            }
            T = m(C, I, O);
          }
          (!m || T === !0) && (T = C.refetch()), T !== !1 && w.set(C, T), S.indexOf("legacyOneTimeQuery") >= 0 && r.stopQueryNoBroadcast(S);
        }), h && this.cache.removeOptimistic(h), w;
      }, i.prototype.maskOperation = function(n) {
        var r, a, s, u = n.document, f = n.data;
        if (globalThis.__DEV__ !== !1) {
          var p = n.fetchPolicy, h = n.id, m = (r = Hn(u)) === null || r === void 0 ? void 0 : r.operation, y = ((a = m == null ? void 0 : m[0]) !== null && a !== void 0 ? a : "o") + h;
          this.dataMasking && p === "no-cache" && !ig(u) && !this.noCacheWarningsByQueryId.has(y) && (this.noCacheWarningsByQueryId.add(y), globalThis.__DEV__ !== !1 && ee.warn(
            37,
            (s = aa(u)) !== null && s !== void 0 ? s : "Unnamed ".concat(m ?? "operation")
          ));
        }
        return this.dataMasking ? J0(f, u, this.cache) : f;
      }, i.prototype.maskFragment = function(n) {
        var r = n.data, a = n.fragment, s = n.fragmentName;
        return this.dataMasking ? Ph(r, a, this.cache, s) : r;
      }, i.prototype.fetchQueryByPolicy = function(n, r, a) {
        var s = this, u = r.query, f = r.variables, p = r.fetchPolicy, h = r.refetchWritePolicy, m = r.errorPolicy, y = r.returnPartialData, w = r.context, g = r.notifyOnNetworkStatusChange, S = n.networkStatus;
        n.init({
          document: u,
          variables: f,
          networkStatus: a
        });
        var C = function() {
          return n.getDiff();
        }, O = function(V, B) {
          B === void 0 && (B = n.networkStatus || we.loading);
          var Q = V.result;
          globalThis.__DEV__ !== !1 && !y && !be(Q, {}) && Xh(V.missing);
          var te = function(ie) {
            return ke.of(N({ data: ie, loading: zi(B), networkStatus: B }, V.complete ? null : { partial: !0 }));
          };
          return Q && s.getDocumentInfo(u).hasForcedResolvers ? s.localState.runResolvers({
            document: u,
            remoteResult: { data: Q },
            context: w,
            variables: f,
            onlyRunForcedResolvers: !0
          }).then(function(ie) {
            return te(ie.data || void 0);
          }) : m === "none" && B === we.refetch && Array.isArray(V.missing) ? te(void 0) : te(Q);
        }, I = p === "no-cache" ? 0 : a === we.refetch && h !== "merge" ? 1 : 2, T = function() {
          return s.getResultsFromLink(n, I, {
            query: u,
            variables: f,
            context: w,
            fetchPolicy: p,
            errorPolicy: m
          });
        }, R = g && typeof S == "number" && S !== a && zi(a);
        switch (p) {
          default:
          case "cache-first": {
            var M = C();
            return M.complete ? {
              fromLink: !1,
              sources: [O(M, n.markReady())]
            } : y || R ? {
              fromLink: !0,
              sources: [O(M), T()]
            } : { fromLink: !0, sources: [T()] };
          }
          case "cache-and-network": {
            var M = C();
            return M.complete || y || R ? {
              fromLink: !0,
              sources: [O(M), T()]
            } : { fromLink: !0, sources: [T()] };
          }
          case "cache-only":
            return {
              fromLink: !1,
              sources: [O(C(), n.markReady())]
            };
          case "network-only":
            return R ? {
              fromLink: !0,
              sources: [O(C()), T()]
            } : { fromLink: !0, sources: [T()] };
          case "no-cache":
            return R ? {
              fromLink: !0,
              // Note that queryInfo.getDiff() for no-cache queries does not call
              // cache.diff, but instead returns a { complete: false } stub result
              // when there is no queryInfo.diff already defined.
              sources: [O(n.getDiff()), T()]
            } : { fromLink: !0, sources: [T()] };
          case "standby":
            return { fromLink: !1, sources: [] };
        }
      }, i.prototype.getQuery = function(n) {
        return n && !this.queries.has(n) && this.queries.set(n, new Fl(this, n)), this.queries.get(n);
      }, i.prototype.prepareContext = function(n) {
        n === void 0 && (n = {});
        var r = this.localState.prepareContext(n);
        return N(N(N({}, this.defaultContext), r), { clientAwareness: this.clientAwareness });
      }, i;
    }()
  ), __ = (
    /** @class */
    function() {
      function i(n) {
        var r = n.cache, a = n.client, s = n.resolvers, u = n.fragmentMatcher;
        this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = r, a && (this.client = a), s && this.addResolvers(s), u && this.setFragmentMatcher(u);
      }
      return i.prototype.addResolvers = function(n) {
        var r = this;
        this.resolvers = this.resolvers || {}, Array.isArray(n) ? n.forEach(function(a) {
          r.resolvers = Yd(r.resolvers, a);
        }) : this.resolvers = Yd(this.resolvers, n);
      }, i.prototype.setResolvers = function(n) {
        this.resolvers = {}, this.addResolvers(n);
      }, i.prototype.getResolvers = function() {
        return this.resolvers || {};
      }, i.prototype.runResolvers = function(n) {
        return Sn(this, arguments, void 0, function(r) {
          var a = r.document, s = r.remoteResult, u = r.context, f = r.variables, p = r.onlyRunForcedResolvers, h = p === void 0 ? !1 : p;
          return kn(this, function(m) {
            return a ? [2, this.resolveDocument(a, s.data, u, f, this.fragmentMatcher, h).then(function(y) {
              return N(N({}, s), { data: y.result });
            })] : [2, s];
          });
        });
      }, i.prototype.setFragmentMatcher = function(n) {
        this.fragmentMatcher = n;
      }, i.prototype.getFragmentMatcher = function() {
        return this.fragmentMatcher;
      }, i.prototype.clientQuery = function(n) {
        return Pi(["client"], n) && this.resolvers ? n : null;
      }, i.prototype.serverQuery = function(n) {
        return _h(n);
      }, i.prototype.prepareContext = function(n) {
        var r = this.cache;
        return N(N({}, n), {
          cache: r,
          // Getting an entry's cache key is useful for local state resolvers.
          getCacheKey: function(a) {
            return r.identify(a);
          }
        });
      }, i.prototype.addExportedVariables = function(n) {
        return Sn(this, arguments, void 0, function(r, a, s) {
          return a === void 0 && (a = {}), s === void 0 && (s = {}), kn(this, function(u) {
            return r ? [2, this.resolveDocument(r, this.buildRootValueFromCache(r, a) || {}, this.prepareContext(s), a).then(function(f) {
              return N(N({}, a), f.exportedVariables);
            })] : [2, N({}, a)];
          });
        });
      }, i.prototype.shouldForceResolvers = function(n) {
        var r = !1;
        return Rt(n, {
          Directive: {
            enter: function(a) {
              if (a.name.value === "client" && a.arguments && (r = a.arguments.some(function(s) {
                return s.name.value === "always" && s.value.kind === "BooleanValue" && s.value.value === !0;
              }), r))
                return _a;
            }
          }
        }), r;
      }, i.prototype.buildRootValueFromCache = function(n, r) {
        return this.cache.diff({
          query: Yg(n),
          variables: r,
          returnPartialData: !0,
          optimistic: !1
        }).result;
      }, i.prototype.resolveDocument = function(n, r) {
        return Sn(this, arguments, void 0, function(a, s, u, f, p, h) {
          var m, y, w, g, S, C, O, I, T, R, M;
          return u === void 0 && (u = {}), f === void 0 && (f = {}), p === void 0 && (p = function() {
            return !0;
          }), h === void 0 && (h = !1), kn(this, function(V) {
            return m = Bi(a), y = Fr(a), w = Rr(y), g = this.collectSelectionsToResolve(m, w), S = m.operation, C = S ? S.charAt(0).toUpperCase() + S.slice(1) : "Query", O = this, I = O.cache, T = O.client, R = {
              fragmentMap: w,
              context: N(N({}, u), { cache: I, client: T }),
              variables: f,
              fragmentMatcher: p,
              defaultOperationType: C,
              exportedVariables: {},
              selectionsToResolve: g,
              onlyRunForcedResolvers: h
            }, M = !1, [2, this.resolveSelectionSet(m.selectionSet, M, s, R).then(function(B) {
              return {
                result: B,
                exportedVariables: R.exportedVariables
              };
            })];
          });
        });
      }, i.prototype.resolveSelectionSet = function(n, r, a, s) {
        return Sn(this, void 0, void 0, function() {
          var u, f, p, h, m, y = this;
          return kn(this, function(w) {
            return u = s.fragmentMap, f = s.context, p = s.variables, h = [a], m = function(g) {
              return Sn(y, void 0, void 0, function() {
                var S, C;
                return kn(this, function(O) {
                  return !r && !s.selectionsToResolve.has(g) ? [
                    2
                    /*return*/
                  ] : Vi(g, p) ? Tn(g) ? [2, this.resolveField(g, r, a, s).then(function(I) {
                    var T;
                    typeof I < "u" && h.push((T = {}, T[Jt(g)] = I, T));
                  })] : (Rg(g) ? S = g : (S = u[g.name.value], ee(S, 19, g.name.value)), S && S.typeCondition && (C = S.typeCondition.name.value, s.fragmentMatcher(a, C, f)) ? [2, this.resolveSelectionSet(S.selectionSet, r, a, s).then(function(I) {
                    h.push(I);
                  })] : [
                    2
                    /*return*/
                  ]) : [
                    2
                    /*return*/
                  ];
                });
              });
            }, [2, Promise.all(n.selections.map(m)).then(function() {
              return Ta(h);
            })];
          });
        });
      }, i.prototype.resolveField = function(n, r, a, s) {
        return Sn(this, void 0, void 0, function() {
          var u, f, p, h, m, y, w, g, S, C = this;
          return kn(this, function(O) {
            return a ? (u = s.variables, f = n.name.value, p = Jt(n), h = f !== p, m = a[p] || a[f], y = Promise.resolve(m), (!s.onlyRunForcedResolvers || this.shouldForceResolvers(n)) && (w = a.__typename || s.defaultOperationType, g = this.resolvers && this.resolvers[w], g && (S = g[h ? f : p], S && (y = Promise.resolve(
              // In case the resolve function accesses reactive variables,
              // set cacheSlot to the current cache instance.
              Ou.withValue(this.cache, S, [
                a,
                Sa(n, u),
                s.context,
                { field: n, fragmentMap: s.fragmentMap }
              ])
            )))), [2, y.then(function(I) {
              var T, R;
              if (I === void 0 && (I = m), n.directives && n.directives.forEach(function(V) {
                V.name.value === "export" && V.arguments && V.arguments.forEach(function(B) {
                  B.name.value === "as" && B.value.kind === "StringValue" && (s.exportedVariables[B.value.value] = I);
                });
              }), !n.selectionSet || I == null)
                return I;
              var M = (R = (T = n.directives) === null || T === void 0 ? void 0 : T.some(function(V) {
                return V.name.value === "client";
              })) !== null && R !== void 0 ? R : !1;
              if (Array.isArray(I))
                return C.resolveSubSelectedArray(n, r || M, I, s);
              if (n.selectionSet)
                return C.resolveSelectionSet(n.selectionSet, r || M, I, s);
            })]) : [2, null];
          });
        });
      }, i.prototype.resolveSubSelectedArray = function(n, r, a, s) {
        var u = this;
        return Promise.all(a.map(function(f) {
          if (f === null)
            return null;
          if (Array.isArray(f))
            return u.resolveSubSelectedArray(n, r, f, s);
          if (n.selectionSet)
            return u.resolveSelectionSet(n.selectionSet, r, f, s);
        }));
      }, i.prototype.collectSelectionsToResolve = function(n, r) {
        var a = function(f) {
          return !Array.isArray(f);
        }, s = this.selectionsToResolveCache;
        function u(f) {
          if (!s.has(f)) {
            var p = /* @__PURE__ */ new Set();
            s.set(f, p), Rt(f, {
              Directive: function(h, m, y, w, g) {
                h.name.value === "client" && g.forEach(function(S) {
                  a(S) && Vd(S) && p.add(S);
                });
              },
              FragmentSpread: function(h, m, y, w, g) {
                var S = r[h.name.value];
                ee(S, 20, h.name.value);
                var C = u(S);
                C.size > 0 && (g.forEach(function(O) {
                  a(O) && Vd(O) && p.add(O);
                }), p.add(h), C.forEach(function(O) {
                  p.add(O);
                }));
              }
            });
          }
          return s.get(f);
        }
        return u(n);
      }, i;
    }()
  ), Ip = !1, Jh = (
    /** @class */
    function() {
      function i(n) {
        var r = this, a;
        if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !n.cache)
          throw at(16);
        var s = n.uri, u = n.credentials, f = n.headers, p = n.cache, h = n.documentTransform, m = n.ssrMode, y = m === void 0 ? !1 : m, w = n.ssrForceFetchDelay, g = w === void 0 ? 0 : w, S = n.connectToDevTools, C = n.queryDeduplication, O = C === void 0 ? !0 : C, I = n.defaultOptions, T = n.defaultContext, R = n.assumeImmutableResults, M = R === void 0 ? p.assumeImmutableResults : R, V = n.resolvers, B = n.typeDefs, Q = n.fragmentMatcher, te = n.name, ie = n.version, ue = n.devtools, fe = n.dataMasking, Ue = n.link;
        Ue || (Ue = s ? new Ch({ uri: s, credentials: u, headers: f }) : Ui.empty()), this.link = Ue, this.cache = p, this.disableNetworkFetches = y || g > 0, this.queryDeduplication = O, this.defaultOptions = I || /* @__PURE__ */ Object.create(null), this.typeDefs = B, this.devtoolsConfig = N(N({}, ue), { enabled: (a = ue == null ? void 0 : ue.enabled) !== null && a !== void 0 ? a : S }), this.devtoolsConfig.enabled === void 0 && (this.devtoolsConfig.enabled = globalThis.__DEV__ !== !1), g && setTimeout(function() {
          return r.disableNetworkFetches = !1;
        }, g), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = uu, this.localState = new __({
          cache: p,
          client: this,
          resolvers: V,
          fragmentMatcher: Q
        }), this.queryManager = new g_({
          cache: this.cache,
          link: this.link,
          defaultOptions: this.defaultOptions,
          defaultContext: T,
          documentTransform: h,
          queryDeduplication: O,
          ssrMode: y,
          dataMasking: !!fe,
          clientAwareness: {
            name: te,
            version: ie
          },
          localState: this.localState,
          assumeImmutableResults: M,
          onBroadcast: this.devtoolsConfig.enabled ? function() {
            r.devToolsHookCb && r.devToolsHookCb({
              action: {},
              state: {
                queries: r.queryManager.getQueryStore(),
                mutations: r.queryManager.mutationStore || {}
              },
              dataWithOptimisticResults: r.cache.extract(!0)
            });
          } : void 0
        }), this.devtoolsConfig.enabled && this.connectToDevTools();
      }
      return i.prototype.connectToDevTools = function() {
        if (!(typeof window > "u")) {
          var n = window, r = Symbol.for("apollo.devtools");
          (n[r] = n[r] || []).push(this), n.__APOLLO_CLIENT__ = this, !Ip && globalThis.__DEV__ !== !1 && (Ip = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout(function() {
            if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
              var a = window.navigator, s = a && a.userAgent, u = void 0;
              typeof s == "string" && (s.indexOf("Chrome/") > -1 ? u = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : s.indexOf("Firefox/") > -1 && (u = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), u && globalThis.__DEV__ !== !1 && ee.log("Download the Apollo DevTools for a better development experience: %s", u);
            }
          }, 1e4));
        }
      }, Object.defineProperty(i.prototype, "documentTransform", {
        /**
         * The `DocumentTransform` used to modify GraphQL documents before a request
         * is made. If a custom `DocumentTransform` is not provided, this will be the
         * default document transform.
         */
        get: function() {
          return this.queryManager.documentTransform;
        },
        enumerable: !1,
        configurable: !0
      }), i.prototype.stop = function() {
        this.queryManager.stop();
      }, i.prototype.watchQuery = function(n) {
        return this.defaultOptions.watchQuery && (n = Cl(this.defaultOptions.watchQuery, n)), this.disableNetworkFetches && (n.fetchPolicy === "network-only" || n.fetchPolicy === "cache-and-network") && (n = N(N({}, n), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(n);
      }, i.prototype.query = function(n) {
        return this.defaultOptions.query && (n = Cl(this.defaultOptions.query, n)), ee(n.fetchPolicy !== "cache-and-network", 17), this.disableNetworkFetches && n.fetchPolicy === "network-only" && (n = N(N({}, n), { fetchPolicy: "cache-first" })), this.queryManager.query(n);
      }, i.prototype.mutate = function(n) {
        return this.defaultOptions.mutate && (n = Cl(this.defaultOptions.mutate, n)), this.queryManager.mutate(n);
      }, i.prototype.subscribe = function(n) {
        var r = this, a = this.queryManager.generateQueryId();
        return this.queryManager.startGraphQLSubscription(n).map(function(s) {
          return N(N({}, s), { data: r.queryManager.maskOperation({
            document: n.query,
            data: s.data,
            fetchPolicy: n.fetchPolicy,
            id: a
          }) });
        });
      }, i.prototype.readQuery = function(n, r) {
        return r === void 0 && (r = !1), this.cache.readQuery(n, r);
      }, i.prototype.watchFragment = function(n) {
        var r;
        return this.cache.watchFragment(N(N({}, n), (r = {}, r[Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking, r)));
      }, i.prototype.readFragment = function(n, r) {
        return r === void 0 && (r = !1), this.cache.readFragment(n, r);
      }, i.prototype.writeQuery = function(n) {
        var r = this.cache.writeQuery(n);
        return n.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
      }, i.prototype.writeFragment = function(n) {
        var r = this.cache.writeFragment(n);
        return n.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
      }, i.prototype.__actionHookForDevTools = function(n) {
        this.devToolsHookCb = n;
      }, i.prototype.__requestRaw = function(n) {
        return Jl(this.link, n);
      }, i.prototype.resetStore = function() {
        var n = this;
        return Promise.resolve().then(function() {
          return n.queryManager.clearStore({
            discardWatches: !1
          });
        }).then(function() {
          return Promise.all(n.resetStoreCallbacks.map(function(r) {
            return r();
          }));
        }).then(function() {
          return n.reFetchObservableQueries();
        });
      }, i.prototype.clearStore = function() {
        var n = this;
        return Promise.resolve().then(function() {
          return n.queryManager.clearStore({
            discardWatches: !0
          });
        }).then(function() {
          return Promise.all(n.clearStoreCallbacks.map(function(r) {
            return r();
          }));
        });
      }, i.prototype.onResetStore = function(n) {
        var r = this;
        return this.resetStoreCallbacks.push(n), function() {
          r.resetStoreCallbacks = r.resetStoreCallbacks.filter(function(a) {
            return a !== n;
          });
        };
      }, i.prototype.onClearStore = function(n) {
        var r = this;
        return this.clearStoreCallbacks.push(n), function() {
          r.clearStoreCallbacks = r.clearStoreCallbacks.filter(function(a) {
            return a !== n;
          });
        };
      }, i.prototype.reFetchObservableQueries = function(n) {
        return this.queryManager.reFetchObservableQueries(n);
      }, i.prototype.refetchQueries = function(n) {
        var r = this.queryManager.refetchQueries(n), a = [], s = [];
        r.forEach(function(f, p) {
          a.push(p), s.push(f);
        });
        var u = Promise.all(s);
        return u.queries = a, u.results = s, u.catch(function(f) {
          globalThis.__DEV__ !== !1 && ee.debug(18, f);
        }), u;
      }, i.prototype.getObservableQueries = function(n) {
        return n === void 0 && (n = "active"), this.queryManager.getObservableQueries(n);
      }, i.prototype.extract = function(n) {
        return this.cache.extract(n);
      }, i.prototype.restore = function(n) {
        return this.cache.restore(n);
      }, i.prototype.addResolvers = function(n) {
        this.localState.addResolvers(n);
      }, i.prototype.setResolvers = function(n) {
        this.localState.setResolvers(n);
      }, i.prototype.getResolvers = function() {
        return this.localState.getResolvers();
      }, i.prototype.setLocalStateFragmentMatcher = function(n) {
        this.localState.setFragmentMatcher(n);
      }, i.prototype.setLink = function(n) {
        this.link = this.queryManager.link = n;
      }, Object.defineProperty(i.prototype, "defaultContext", {
        get: function() {
          return this.queryManager.defaultContext;
        },
        enumerable: !1,
        configurable: !0
      }), i;
    }()
  );
  globalThis.__DEV__ !== !1 && (Jh.prototype.getMemoryInternals = pg);
  var fa = /* @__PURE__ */ new Map(), su = /* @__PURE__ */ new Map(), Zh = !0, ma = !1;
  function ev(i) {
    return i.replace(/[\s,]+/g, " ").trim();
  }
  function w_(i) {
    return ev(i.source.body.substring(i.start, i.end));
  }
  function E_(i) {
    var n = /* @__PURE__ */ new Set(), r = [];
    return i.definitions.forEach(function(a) {
      if (a.kind === "FragmentDefinition") {
        var s = a.name.value, u = w_(a.loc), f = su.get(s);
        f && !f.has(u) ? Zh && console.warn("Warning: fragment with name " + s + ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`) : f || su.set(s, f = /* @__PURE__ */ new Set()), f.add(u), n.has(u) || (n.add(u), r.push(a));
      } else
        r.push(a);
    }), N(N({}, i), { definitions: r });
  }
  function S_(i) {
    var n = new Set(i.definitions);
    n.forEach(function(a) {
      a.loc && delete a.loc, Object.keys(a).forEach(function(s) {
        var u = a[s];
        u && typeof u == "object" && n.add(u);
      });
    });
    var r = i.loc;
    return r && (delete r.startToken, delete r.endToken), i;
  }
  function k_(i) {
    var n = ev(i);
    if (!fa.has(n)) {
      var r = Ly(i, {
        experimentalFragmentVariables: ma,
        allowLegacyFragmentVariables: ma
      });
      if (!r || r.kind !== "Document")
        throw new Error("Not a valid GraphQL document.");
      fa.set(n, S_(E_(r)));
    }
    return fa.get(n);
  }
  function Zt(i) {
    for (var n = [], r = 1; r < arguments.length; r++)
      n[r - 1] = arguments[r];
    typeof i == "string" && (i = [i]);
    var a = i[0];
    return n.forEach(function(s, u) {
      s && s.kind === "Document" ? a += s.loc.source.body : a += s, a += i[u + 1];
    }), k_(a);
  }
  function b_() {
    fa.clear(), su.clear();
  }
  function N_() {
    Zh = !1;
  }
  function T_() {
    ma = !0;
  }
  function O_() {
    ma = !1;
  }
  var Oi = {
    gql: Zt,
    resetCaches: b_,
    disableFragmentWarnings: N_,
    enableExperimentalFragmentVariables: T_,
    disableExperimentalFragmentVariables: O_
  };
  (function(i) {
    i.gql = Oi.gql, i.resetCaches = Oi.resetCaches, i.disableFragmentWarnings = Oi.disableFragmentWarnings, i.enableExperimentalFragmentVariables = Oi.enableExperimentalFragmentVariables, i.disableExperimentalFragmentVariables = Oi.disableExperimentalFragmentVariables;
  })(Zt || (Zt = {}));
  Zt.default = Zt;
  new Jh({
    uri: "https://api-muve-player.vercel.app/graphql",
    cache: new Yh(),
    link: new Ch({
      uri: "https://api-muve-player.vercel.app/graphql"
    })
  });
  Zt`
  query getVideo($id: ID!) {
    video(id: $id) {
      id
      url
      thumbnail
      format
      duration
      type
      fictitiousProgress
      color
      colorSmartPlayers
      playAndPause
      progressBar
      timeTraveled
      videoDuration
      volumeButton
      volumeBar
      speed
      fullscreen
      smartAutoPlay
      UrlCoverSmartAutoPlay
      TextTopSmartAutoPlay
      TextButtonSmartAutoPlay
      continueWatching
      watchingNow
      watchingNowFontSize
      watchingNowBgColor
      watchingNowTextColor
      ImageVideoPause
      UrlCoverImageVideoPause
      ImageOfFinished
      chapterMenu
      buttonsActive
      UrlCoverImageOfFinished
      fictitiousProgressHeight
      VideoButtons {
        id
        buttonType
        buttonText
        buttonSize
        buttonLink
        startTime
        endTime
        buttonAfterTheVideoEnds
        backgroundColor
        textColor
        hoverBackgroundColor
        hoverTextColor
        buttonPosition
      }
      Chapter {
        id
        title
        startTime
        endTime
      }
    }
  }
`;
  Zt`
  mutation AddViewUnique(
    $videoId: ID!
    $userIp: String!
    $deviceType: String!
    $agent: String!
    $country: String!
    $region: String!
    $city: String!
  ) {
    addViewUnique(
      videoId: $videoId
      userIp: $userIp
      deviceType: $deviceType
      agent: $agent
      country: $country
      region: $region
      city: $city
    )
  }
`;
  Zt`
  mutation AddViewTimestamp(
    $videoId: ID!
    $userIp: String!
    $startTimestamp: Float!
    $endTimestamp: Float!
    $deviceType: String!
    $agent: String!
    $country: String!
    $region: String!
    $city: String!
  ) {
    addViewTimestamp(
      videoId: $videoId
      userIp: $userIp
      startTimestamp: $startTimestamp
      endTimestamp: $endTimestamp
      deviceType: $deviceType
      agent: $agent
      country: $country
      region: $region
      city: $city
    )
  }
`;
  Zt`
  mutation AddLeadInForm(
    $formId: String!
    $videoId: String!
    $name: String
    $phone: String
    $email: String
  ) {
    addLeadInForm(
      formId: $formId
      videoId: $videoId
      data: {
        name: $name
        phone: $phone
        email: $email
      }
    )
  }
`;
});
export default x_();
//# sourceMappingURL=player.js.map
