var pv = Object.defineProperty;
var U7 = (n) => {
  throw TypeError(n);
};
var Cv = (n, t, e) => t in n ? pv(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var $ = (n, t, e) => Cv(n, typeof t != "symbol" ? t + "" : t, e), pc = (n, t, e) => t.has(n) || U7("Cannot " + e);
var r = (n, t, e) => (pc(n, t, "read from private field"), e ? e.call(n) : t.get(n)), C = (n, t, e) => t.has(n) ? U7("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e), g = (n, t, e, s) => (pc(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), c = (n, t, e) => (pc(n, t, "access private method"), e);
var K7 = (n, t, e, s) => ({
  set _(i) {
    g(n, t, i, e);
  },
  get _() {
    return r(n, t, s);
  }
});
import * as u from "react";
import Gs, { useLayoutEffect as mv, useEffect as A9, forwardRef as R, createElement as V, useState as a5, useRef as gv } from "react";
import * as c5 from "react-dom";
import yv, { createPortal as vv } from "react-dom";
var Jc = { exports: {} }, Mo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z7;
function bv() {
  if (z7) return Mo;
  z7 = 1;
  var n = Gs, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, d, h) {
    var p, f = {}, m = null, y = null;
    h !== void 0 && (m = "" + h), d.key !== void 0 && (m = "" + d.key), d.ref !== void 0 && (y = d.ref);
    for (p in d) s.call(d, p) && !o.hasOwnProperty(p) && (f[p] = d[p]);
    if (l && l.defaultProps) for (p in d = l.defaultProps, d) f[p] === void 0 && (f[p] = d[p]);
    return { $$typeof: t, type: l, key: m, ref: y, props: f, _owner: i.current };
  }
  return Mo.Fragment = e, Mo.jsx = a, Mo.jsxs = a, Mo;
}
var Io = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y7;
function wv() {
  return Y7 || (Y7 = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Gs, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), v = Symbol.iterator, b = "@@iterator";
    function S(x) {
      if (x === null || typeof x != "object")
        return null;
      var H = v && x[v] || x[b];
      return typeof H == "function" ? H : null;
    }
    var E = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(x) {
      {
        for (var H = arguments.length, Z = new Array(H > 1 ? H - 1 : 0), le = 1; le < H; le++)
          Z[le - 1] = arguments[le];
        I("error", x, Z);
      }
    }
    function I(x, H, Z) {
      {
        var le = E.ReactDebugCurrentFrame, De = le.getStackAddendum();
        De !== "" && (H += "%s", Z = Z.concat([De]));
        var Ge = Z.map(function(Le) {
          return String(Le);
        });
        Ge.unshift("Warning: " + H), Function.prototype.apply.call(console[x], console, Ge);
      }
    }
    var M = !1, D = !1, B = !1, F = !1, k = !1, Q;
    Q = Symbol.for("react.module.reference");
    function X(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === s || x === o || k || x === i || x === h || x === p || F || x === y || M || D || B || typeof x == "object" && x !== null && (x.$$typeof === m || x.$$typeof === f || x.$$typeof === a || x.$$typeof === l || x.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === Q || x.getModuleId !== void 0));
    }
    function ae(x, H, Z) {
      var le = x.displayName;
      if (le)
        return le;
      var De = H.displayName || H.name || "";
      return De !== "" ? Z + "(" + De + ")" : Z;
    }
    function me(x) {
      return x.displayName || "Context";
    }
    function Y(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case s:
          return "Fragment";
        case e:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case h:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case l:
            var H = x;
            return me(H) + ".Consumer";
          case a:
            var Z = x;
            return me(Z._context) + ".Provider";
          case d:
            return ae(x, x.render, "ForwardRef");
          case f:
            var le = x.displayName || null;
            return le !== null ? le : Y(x.type) || "Memo";
          case m: {
            var De = x, Ge = De._payload, Le = De._init;
            try {
              return Y(Le(Ge));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, Ee = 0, G, U, K, q, xe, Ke, Pt;
    function rn() {
    }
    rn.__reactDisabledLog = !0;
    function En() {
      {
        if (Ee === 0) {
          G = console.log, U = console.info, K = console.warn, q = console.error, xe = console.group, Ke = console.groupCollapsed, Pt = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: rn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        Ee++;
      }
    }
    function Dn() {
      {
        if (Ee--, Ee === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, x, {
              value: G
            }),
            info: J({}, x, {
              value: U
            }),
            warn: J({}, x, {
              value: K
            }),
            error: J({}, x, {
              value: q
            }),
            group: J({}, x, {
              value: xe
            }),
            groupCollapsed: J({}, x, {
              value: Ke
            }),
            groupEnd: J({}, x, {
              value: Pt
            })
          });
        }
        Ee < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ht = E.ReactCurrentDispatcher, xt;
    function Dt(x, H, Z) {
      {
        if (xt === void 0)
          try {
            throw Error();
          } catch (De) {
            var le = De.stack.trim().match(/\n( *(at )?)/);
            xt = le && le[1] || "";
          }
        return `
` + xt + x;
      }
    }
    var ze = !1, gt;
    {
      var Fs = typeof WeakMap == "function" ? WeakMap : Map;
      gt = new Fs();
    }
    function as(x, H) {
      if (!x || ze)
        return "";
      {
        var Z = gt.get(x);
        if (Z !== void 0)
          return Z;
      }
      var le;
      ze = !0;
      var De = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ge;
      Ge = Ht.current, Ht.current = null, En();
      try {
        if (H) {
          var Le = function() {
            throw Error();
          };
          if (Object.defineProperty(Le.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Le, []);
            } catch (zt) {
              le = zt;
            }
            Reflect.construct(x, [], Le);
          } else {
            try {
              Le.call();
            } catch (zt) {
              le = zt;
            }
            x.call(Le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (zt) {
            le = zt;
          }
          x();
        }
      } catch (zt) {
        if (zt && le && typeof zt.stack == "string") {
          for (var Se = zt.stack.split(`
`), _t = le.stack.split(`
`), ot = Se.length - 1, ft = _t.length - 1; ot >= 1 && ft >= 0 && Se[ot] !== _t[ft]; )
            ft--;
          for (; ot >= 1 && ft >= 0; ot--, ft--)
            if (Se[ot] !== _t[ft]) {
              if (ot !== 1 || ft !== 1)
                do
                  if (ot--, ft--, ft < 0 || Se[ot] !== _t[ft]) {
                    var $n = `
` + Se[ot].replace(" at new ", " at ");
                    return x.displayName && $n.includes("<anonymous>") && ($n = $n.replace("<anonymous>", x.displayName)), typeof x == "function" && gt.set(x, $n), $n;
                  }
                while (ot >= 1 && ft >= 0);
              break;
            }
        }
      } finally {
        ze = !1, Ht.current = Ge, Dn(), Error.prepareStackTrace = De;
      }
      var j1 = x ? x.displayName || x.name : "", Ir = j1 ? Dt(j1) : "";
      return typeof x == "function" && gt.set(x, Ir), Ir;
    }
    function _n(x, H, Z) {
      return as(x, !1);
    }
    function Li(x) {
      var H = x.prototype;
      return !!(H && H.isReactComponent);
    }
    function js(x, H, Z) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return as(x, Li(x));
      if (typeof x == "string")
        return Dt(x);
      switch (x) {
        case h:
          return Dt("Suspense");
        case p:
          return Dt("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case d:
            return _n(x.render);
          case f:
            return js(x.type, H, Z);
          case m: {
            var le = x, De = le._payload, Ge = le._init;
            try {
              return js(Ge(De), H, Z);
            } catch {
            }
          }
        }
      return "";
    }
    var cs = Object.prototype.hasOwnProperty, la = {}, ua = E.ReactDebugCurrentFrame;
    function qs(x) {
      if (x) {
        var H = x._owner, Z = js(x.type, x._source, H ? H.type : null);
        ua.setExtraStackFrame(Z);
      } else
        ua.setExtraStackFrame(null);
    }
    function Wy(x, H, Z, le, De) {
      {
        var Ge = Function.call.bind(cs);
        for (var Le in x)
          if (Ge(x, Le)) {
            var Se = void 0;
            try {
              if (typeof x[Le] != "function") {
                var _t = Error((le || "React class") + ": " + Z + " type `" + Le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[Le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _t.name = "Invariant Violation", _t;
              }
              Se = x[Le](H, Le, le, Z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ot) {
              Se = ot;
            }
            Se && !(Se instanceof Error) && (qs(De), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", le || "React class", Z, Le, typeof Se), qs(null)), Se instanceof Error && !(Se.message in la) && (la[Se.message] = !0, qs(De), P("Failed %s type: %s", Z, Se.message), qs(null));
          }
      }
    }
    var Uy = Array.isArray;
    function cc(x) {
      return Uy(x);
    }
    function Ky(x) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, Z = H && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return Z;
      }
    }
    function zy(x) {
      try {
        return H7(x), !1;
      } catch {
        return !0;
      }
    }
    function H7(x) {
      return "" + x;
    }
    function O7(x) {
      if (zy(x))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ky(x)), H7(x);
    }
    var ko = E.ReactCurrentOwner, Yy = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, D7, _7, lc;
    lc = {};
    function Qy(x) {
      if (cs.call(x, "ref")) {
        var H = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function Xy(x) {
      if (cs.call(x, "key")) {
        var H = Object.getOwnPropertyDescriptor(x, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function Jy(x, H) {
      if (typeof x.ref == "string" && ko.current && H && ko.current.stateNode !== H) {
        var Z = Y(ko.current.type);
        lc[Z] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(ko.current.type), x.ref), lc[Z] = !0);
      }
    }
    function ev(x, H) {
      {
        var Z = function() {
          D7 || (D7 = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        Z.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: Z,
          configurable: !0
        });
      }
    }
    function tv(x, H) {
      {
        var Z = function() {
          _7 || (_7 = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        Z.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: Z,
          configurable: !0
        });
      }
    }
    var nv = function(x, H, Z, le, De, Ge, Le) {
      var Se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: x,
        key: H,
        ref: Z,
        props: Le,
        // Record the component responsible for creating this element.
        _owner: Ge
      };
      return Se._store = {}, Object.defineProperty(Se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.defineProperty(Se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: De
      }), Object.freeze && (Object.freeze(Se.props), Object.freeze(Se)), Se;
    };
    function sv(x, H, Z, le, De) {
      {
        var Ge, Le = {}, Se = null, _t = null;
        Z !== void 0 && (O7(Z), Se = "" + Z), Xy(H) && (O7(H.key), Se = "" + H.key), Qy(H) && (_t = H.ref, Jy(H, De));
        for (Ge in H)
          cs.call(H, Ge) && !Yy.hasOwnProperty(Ge) && (Le[Ge] = H[Ge]);
        if (x && x.defaultProps) {
          var ot = x.defaultProps;
          for (Ge in ot)
            Le[Ge] === void 0 && (Le[Ge] = ot[Ge]);
        }
        if (Se || _t) {
          var ft = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          Se && ev(Le, ft), _t && tv(Le, ft);
        }
        return nv(x, Se, _t, De, le, ko.current, Le);
      }
    }
    var uc = E.ReactCurrentOwner, F7 = E.ReactDebugCurrentFrame;
    function F1(x) {
      if (x) {
        var H = x._owner, Z = js(x.type, x._source, H ? H.type : null);
        F7.setExtraStackFrame(Z);
      } else
        F7.setExtraStackFrame(null);
    }
    var dc;
    dc = !1;
    function hc(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function j7() {
      {
        if (uc.current) {
          var x = Y(uc.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function iv(x) {
      return "";
    }
    var q7 = {};
    function rv(x) {
      {
        var H = j7();
        if (!H) {
          var Z = typeof x == "string" ? x : x.displayName || x.name;
          Z && (H = `

Check the top-level render call using <` + Z + ">.");
        }
        return H;
      }
    }
    function Z7(x, H) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var Z = rv(H);
        if (q7[Z])
          return;
        q7[Z] = !0;
        var le = "";
        x && x._owner && x._owner !== uc.current && (le = " It was passed a child from " + Y(x._owner.type) + "."), F1(x), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Z, le), F1(null);
      }
    }
    function B7(x, H) {
      {
        if (typeof x != "object")
          return;
        if (cc(x))
          for (var Z = 0; Z < x.length; Z++) {
            var le = x[Z];
            hc(le) && Z7(le, H);
          }
        else if (hc(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var De = S(x);
          if (typeof De == "function" && De !== x.entries)
            for (var Ge = De.call(x), Le; !(Le = Ge.next()).done; )
              hc(Le.value) && Z7(Le.value, H);
        }
      }
    }
    function ov(x) {
      {
        var H = x.type;
        if (H == null || typeof H == "string")
          return;
        var Z;
        if (typeof H == "function")
          Z = H.propTypes;
        else if (typeof H == "object" && (H.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        H.$$typeof === f))
          Z = H.propTypes;
        else
          return;
        if (Z) {
          var le = Y(H);
          Wy(Z, x.props, "prop", le, x);
        } else if (H.PropTypes !== void 0 && !dc) {
          dc = !0;
          var De = Y(H);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", De || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function av(x) {
      {
        for (var H = Object.keys(x.props), Z = 0; Z < H.length; Z++) {
          var le = H[Z];
          if (le !== "children" && le !== "key") {
            F1(x), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", le), F1(null);
            break;
          }
        }
        x.ref !== null && (F1(x), P("Invalid attribute `ref` supplied to `React.Fragment`."), F1(null));
      }
    }
    var G7 = {};
    function W7(x, H, Z, le, De, Ge) {
      {
        var Le = X(x);
        if (!Le) {
          var Se = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (Se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _t = iv();
          _t ? Se += _t : Se += j7();
          var ot;
          x === null ? ot = "null" : cc(x) ? ot = "array" : x !== void 0 && x.$$typeof === t ? (ot = "<" + (Y(x.type) || "Unknown") + " />", Se = " Did you accidentally export a JSX literal instead of a component?") : ot = typeof x, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ot, Se);
        }
        var ft = sv(x, H, Z, De, Ge);
        if (ft == null)
          return ft;
        if (Le) {
          var $n = H.children;
          if ($n !== void 0)
            if (le)
              if (cc($n)) {
                for (var j1 = 0; j1 < $n.length; j1++)
                  B7($n[j1], x);
                Object.freeze && Object.freeze($n);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              B7($n, x);
        }
        if (cs.call(H, "key")) {
          var Ir = Y(x), zt = Object.keys(H).filter(function(fv) {
            return fv !== "key";
          }), fc = zt.length > 0 ? "{key: someKey, " + zt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!G7[Ir + fc]) {
            var hv = zt.length > 0 ? "{" + zt.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fc, Ir, hv, Ir), G7[Ir + fc] = !0;
          }
        }
        return x === s ? av(ft) : ov(ft), ft;
      }
    }
    function cv(x, H, Z) {
      return W7(x, H, Z, !0);
    }
    function lv(x, H, Z) {
      return W7(x, H, Z, !1);
    }
    var uv = lv, dv = cv;
    Io.Fragment = s, Io.jsx = uv, Io.jsxs = dv;
  }()), Io;
}
process.env.NODE_ENV === "production" ? Jc.exports = bv() : Jc.exports = wv();
var w = Jc.exports;
const ns = typeof document > "u", $s = Symbol(0);
let Xa = !1, el = !1, Xn = null, K1 = null, In = null, hn = 0, G1 = [], R9 = {};
const xv = () => {
}, fo = 0, l5 = 1, Ja = 2, O2 = 3;
function Sv() {
  Xa = !0, queueMicrotask(u5);
}
function u5() {
  if (!G1.length) {
    Xa = !1;
    return;
  }
  el = !0;
  for (let n = 0; n < G1.length; n++)
    G1[n].$st !== fo && Ev(G1[n]);
  G1 = [], Xa = !1, el = !1;
}
function Ev(n) {
  let t = [n];
  for (; n = n[$s]; )
    n.$e && n.$st !== fo && t.push(n);
  for (let e = t.length - 1; e >= 0; e--)
    j9(t[e]);
}
function $v(n) {
  const t = oo();
  return ea(t, n.length ? n.bind(null, ro.bind(t)) : n, null);
}
function _(n) {
  return ea(Xn, n, null);
}
function io(n) {
  return ea(null, n, null);
}
function Jn() {
  el || u5();
}
function J3() {
  return Xn;
}
function Gt(n, t) {
  try {
    return ea(t, n, null);
  } catch (e) {
    H9(t, e);
    return;
  }
}
function N9(n, t = Xn) {
  return t == null ? void 0 : t.$cx[n];
}
function Tv(n, t, e = Xn) {
  e && (e.$cx = { ...e.$cx, [n]: t });
}
function pe(n) {
  if (!n || !Xn)
    return n || xv;
  const t = Xn;
  return t.$d ? Array.isArray(t.$d) ? t.$d.push(n) : t.$d = [t.$d, n] : t.$d = n, function() {
    t.$st !== O2 && (n.call(null), D2(t.$d) ? t.$d = null : Array.isArray(t.$d) && t.$d.splice(t.$d.indexOf(n), 1));
  };
}
function ro(n = !0) {
  if (this.$st !== O2) {
    if (this.$h)
      if (Array.isArray(this.$h))
        for (let t = this.$h.length - 1; t >= 0; t--)
          ro.call(this.$h[t]);
      else
        ro.call(this.$h);
    if (n) {
      const t = this[$s];
      t && (Array.isArray(t.$h) ? t.$h.splice(t.$h.indexOf(this), 1) : t.$h = null), Pv(this);
    }
  }
}
function Pv(n) {
  n.$st = O2, n.$d && d5(n), n.$s && tl(n, 0), n[$s] = null, n.$s = null, n.$o = null, n.$h = null, n.$cx = R9, n.$eh = null;
}
function d5(n) {
  try {
    if (Array.isArray(n.$d))
      for (let t = n.$d.length - 1; t >= 0; t--) {
        const e = n.$d[t];
        e.call(e);
      }
    else
      n.$d.call(n.$d);
    n.$d = null;
  } catch (t) {
    H9(n, t);
  }
}
function ea(n, t, e) {
  const s = Xn, i = K1;
  Xn = n, K1 = e;
  try {
    return t.call(n);
  } finally {
    Xn = s, K1 = i;
  }
}
function H9(n, t) {
  if (!n || !n.$eh)
    throw t;
  let e = 0, s = n.$eh.length, i = t;
  for (e = 0; e < s; e++)
    try {
      n.$eh[e](i);
      break;
    } catch (o) {
      i = o;
    }
  if (e === s)
    throw i;
}
function O9() {
  return this.$st === O2 ? this.$v : (K1 && !this.$e && (!In && K1.$s && K1.$s[hn] == this ? hn++ : In ? In.push(this) : In = [this]), this.$c && j9(this), this.$v);
}
function h5(n) {
  const t = D2(n) ? n(this.$v) : n;
  if (this.$ch(this.$v, t) && (this.$v = t, this.$o))
    for (let e = 0; e < this.$o.length; e++)
      C5(this.$o[e], Ja);
  return this.$v;
}
const D9 = function() {
  this[$s] = null, this.$h = null, Xn && Xn.append(this);
}, A1 = D9.prototype;
A1.$cx = R9;
A1.$eh = null;
A1.$c = null;
A1.$d = null;
A1.append = function(n) {
  n[$s] = this, this.$h ? Array.isArray(this.$h) ? this.$h.push(n) : this.$h = [this.$h, n] : this.$h = n, n.$cx = n.$cx === R9 ? this.$cx : { ...this.$cx, ...n.$cx }, this.$eh && (n.$eh = n.$eh ? [...n.$eh, ...this.$eh] : this.$eh);
};
A1.dispose = function() {
  ro.call(this);
};
function oo() {
  return new D9();
}
const f5 = function(t, e, s) {
  D9.call(this), this.$st = e ? Ja : fo, this.$i = !1, this.$e = !1, this.$s = null, this.$o = null, this.$v = t, e && (this.$c = e), s && s.dirty && (this.$ch = s.dirty);
}, _9 = f5.prototype;
Object.setPrototypeOf(_9, A1);
_9.$ch = Lv;
_9.call = O9;
function F9(n, t, e) {
  return new f5(n, t, e);
}
function Lv(n, t) {
  return n !== t;
}
function D2(n) {
  return typeof n == "function";
}
function j9(n) {
  if (n.$st === l5)
    for (let t = 0; t < n.$s.length && (j9(n.$s[t]), n.$st !== Ja); t++)
      ;
  n.$st === Ja ? p5(n) : n.$st = fo;
}
function kv(n) {
  n.$h && ro.call(n, !1), n.$d && d5(n), n.$eh = n[$s] ? n[$s].$eh : null;
}
function p5(n) {
  let t = In, e = hn;
  In = null, hn = 0;
  try {
    kv(n);
    const s = ea(n, n.$c, n);
    Q7(n), !n.$e && n.$i ? h5.call(n, s) : (n.$v = s, n.$i = !0);
  } catch (s) {
    Q7(n), H9(n, s);
  } finally {
    In = t, hn = e, n.$st = fo;
  }
}
function Q7(n) {
  if (In) {
    if (n.$s && tl(n, hn), n.$s && hn > 0) {
      n.$s.length = hn + In.length;
      for (let e = 0; e < In.length; e++)
        n.$s[hn + e] = In[e];
    } else
      n.$s = In;
    let t;
    for (let e = hn; e < n.$s.length; e++)
      t = n.$s[e], t.$o ? t.$o.push(n) : t.$o = [n];
  } else n.$s && hn < n.$s.length && (tl(n, hn), n.$s.length = hn);
}
function C5(n, t) {
  if (!(n.$st >= t) && (n.$e && n.$st === fo && (G1.push(n), Xa || Sv()), n.$st = t, n.$o))
    for (let e = 0; e < n.$o.length; e++)
      C5(n.$o[e], l5);
}
function tl(n, t) {
  let e, s;
  for (let i = t; i < n.$s.length; i++)
    e = n.$s[i], e.$o && (s = e.$o.indexOf(n), e.$o[s] = e.$o[e.$o.length - 1], e.$o.pop());
}
function re(n, t) {
  const e = F9(n, null, t), s = O9.bind(e);
  return s[$s] = !0, s.set = h5.bind(e), s;
}
function Mv(n) {
  return D2(n) && $s in n;
}
function vr(n, t) {
  const e = F9(
    t == null ? void 0 : t.initial,
    n,
    t
  ), s = O9.bind(e);
  return s[$s] = !0, s;
}
function q9(n, t) {
  const e = F9(
    null,
    function() {
      let i = n();
      return D2(i) && pe(i), null;
    },
    void 0
  );
  return e.$e = !0, p5(e), ro.bind(e, !0);
}
function m5(n) {
  return Mv(n) && "set" in n;
}
function gn(...n) {
}
function es(n) {
  return n === null;
}
function vt(n) {
  return typeof n > "u";
}
function g5(n) {
  return es(n) || vt(n);
}
function y5(n) {
  return (n == null ? void 0 : n.constructor) === Object;
}
function tn(n) {
  return typeof n == "number" && !Number.isNaN(n);
}
function ce(n) {
  return typeof n == "string";
}
function Iv(n) {
  return typeof n == "boolean";
}
function sn(n) {
  return typeof n == "function";
}
function Vt(n) {
  return Array.isArray(n);
}
const T = ns ? Vv : q9;
function Vv(n, t) {
  var e;
  return typeof process < "u" && ((e = process.env) == null ? void 0 : e.NODE_ENV) === "test" ? q9(n) : gn;
}
const Av = ns ? class {
} : Event, v5 = Symbol("DOM_EVENT");
var zd, Yd;
class $e extends (Yd = Av, zd = v5, Yd) {
  constructor(e, ...s) {
    var o, a;
    super(e, s[0]);
    $(this, zd, !0);
    /**
     * The event detail.
     */
    $(this, "detail");
    /**
     * The event trigger chain.
     */
    $(this, "triggers", new Rv());
    this.detail = (o = s[0]) == null ? void 0 : o.detail;
    const i = (a = s[0]) == null ? void 0 : a.trigger;
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
class Rv {
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
    this.chain.push(t), Z9(t) && this.chain.push(...t.triggers);
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
      const s = t(e);
      if (s) return [e, s];
    }
  }
  [Symbol.iterator]() {
    return this.chain.values();
  }
}
function Z9(n) {
  return !!(n != null && n[v5]);
}
function Nv(n, t) {
  if (Z9(n))
    return n.triggers.walk(t);
}
function b5(n, t) {
  return Z9(n) ? n.triggers.findType(t) : void 0;
}
function Hv(n, t) {
  return !!b5(n, t);
}
function Ov(n, t) {
  t && n.triggers.add(t);
}
class B9 extends EventTarget {
  constructor() {
    super(...arguments);
    /** @internal type only */
    $(this, "$ts__events");
  }
  addEventListener(e, s, i) {
    return super.addEventListener(e, s, i);
  }
  removeEventListener(e, s, i) {
    return super.removeEventListener(e, s, i);
  }
}
function Xe(n, t, e, s) {
  return ns ? gn : (n.addEventListener(t, e, s), pe(() => n.removeEventListener(t, e, s)));
}
var Q1, X1;
class Ne {
  constructor(t) {
    C(this, Q1);
    C(this, X1);
    g(this, Q1, t), g(this, X1, new AbortController()), pe(this.abort.bind(this));
  }
  get signal() {
    return r(this, X1).signal;
  }
  add(t, e, s) {
    if (this.signal.aborted) throw Error("aborted");
    return r(this, Q1).addEventListener(t, e, {
      ...s,
      signal: s != null && s.signal ? Dv(this.signal, s.signal) : this.signal
    }), this;
  }
  remove(t, e) {
    return r(this, Q1).removeEventListener(t, e), this;
  }
  abort(t) {
    r(this, X1).abort(t);
  }
}
Q1 = new WeakMap(), X1 = new WeakMap();
function Dv(...n) {
  const t = new AbortController(), e = { signal: t.signal };
  function s(i) {
    t.abort(i.target.reason);
  }
  for (const i of n) {
    if (i.aborted) {
      t.abort(i.reason);
      break;
    }
    i.addEventListener("abort", s, e);
  }
  return t.signal;
}
function nl(n) {
  return !!(n != null && n.type.startsWith("pointer"));
}
function jo(n) {
  return !!(n != null && n.type.startsWith("touch"));
}
function w5(n) {
  return /^(click|mouse)/.test((n == null ? void 0 : n.type) ?? "");
}
function ta(n) {
  return !!(n != null && n.type.startsWith("key"));
}
function x5(n) {
  return ta(n) && n.key === "Enter";
}
function G9(n) {
  return ta(n) && (n.key === "Enter" || n.key === " ");
}
function S5(n) {
  return n instanceof Node;
}
function ie(n, t, e) {
  if (n) if (!e && e !== "" && e !== 0)
    n.removeAttribute(t);
  else {
    const s = e === !0 ? "" : e + "";
    n.getAttribute(t) !== s && n.setAttribute(t, s);
  }
  else return;
}
function Wt(n, t, e) {
  if (n) !e && e !== 0 ? n.style.removeProperty(t) : n.style.setProperty(t, e + "");
  else return;
}
function _v(n, t, e) {
  n.classList[e ? "add" : "remove"](t);
}
function X7(n) {
  let t = n;
  for (; typeof t == "function"; ) t = t.call(this);
  return t;
}
function Ti(n) {
  return { id: Symbol(), provide: n };
}
function vn(n, t, e = J3()) {
  var i;
  const s = !vt(t);
  Tv(n.id, s ? t : (i = n.provide) == null ? void 0 : i.call(n), e);
}
function rt(n) {
  return N9(n.id);
}
function Ts(n) {
  return !vt(N9(n.id));
}
const Cc = /* @__PURE__ */ Symbol(0), mc = /* @__PURE__ */ Symbol(0), _2 = /* @__PURE__ */ Symbol(0), gc = {};
var Qd, J1, e6, _r, t6, Ls, E5, $5, T5, P5;
Qd = _2;
class Fv {
  constructor(t, e, s) {
    C(this, Ls);
    /** @internal type only */
    $(this, "$ts__events");
    /** @internal type only */
    $(this, "$ts__vars");
    /* @internal */
    $(this, Qd, null);
    $(this, "$el", re(null));
    $(this, "el", null);
    $(this, "scope", null);
    $(this, "attachScope", null);
    $(this, "connectScope", null);
    $(this, "component", null);
    $(this, "destroyed", !1);
    $(this, "props", gc);
    $(this, "attrs", null);
    $(this, "styles", null);
    $(this, "state");
    $(this, "$state");
    C(this, J1, []);
    C(this, e6, []);
    C(this, _r, []);
    C(this, t6, []);
    var a;
    this.scope = e, s != null && s.scope && s.scope.append(e);
    let i = t.state, o = t.props;
    if (i && (this.$state = i.create(), this.state = new Proxy(this.$state, {
      get: (l, d) => this.$state[d]()
    }), vn(i, this.$state)), o && (this.props = jv(o), s != null && s.props))
      for (const l of Object.keys(s.props))
        (a = this.props[l]) == null || a.set(s.props[l]);
    pe(this.destroy.bind(this));
  }
  setup() {
    Gt(() => {
      for (const t of r(this, J1)) t();
    }, this.scope);
  }
  attach(t) {
    this.el || (this.el = t, this.$el.set(t), Gt(() => {
      this.attachScope = oo(), Gt(() => {
        for (const e of r(this, e6)) e(this.el);
        c(this, Ls, E5).call(this), c(this, Ls, $5).call(this);
      }, this.attachScope);
    }, this.scope), t.dispatchEvent(new Event("attached")));
  }
  detach() {
    var t;
    (t = this.attachScope) == null || t.dispose(), this.attachScope = null, this.connectScope = null, this.el = null, this.$el.set(null);
  }
  connect() {
    !this.el || !this.attachScope || !r(this, _r).length || Gt(() => {
      this.connectScope = oo(), Gt(() => {
        for (const t of r(this, _r)) t(this.el);
      }, this.connectScope);
    }, this.attachScope);
  }
  disconnect() {
    var t;
    (t = this.connectScope) == null || t.dispose(), this.connectScope = null;
  }
  destroy() {
    if (this.destroyed) return;
    this.destroyed = !0, Gt(() => {
      for (const e of r(this, t6)) e(this.el);
    }, this.scope);
    const t = this.el;
    this.detach(), this.scope.dispose(), r(this, J1).length = 0, r(this, e6).length = 0, r(this, _r).length = 0, r(this, t6).length = 0, this.component = null, this.attrs = null, this.styles = null, this.props = gc, this.scope = null, this.state = gc, this.$state = null, t && delete t.$;
  }
  addHooks(t) {
    t.onSetup && r(this, J1).push(t.onSetup.bind(t)), t.onAttach && r(this, e6).push(t.onAttach.bind(t)), t.onConnect && r(this, _r).push(t.onConnect.bind(t)), t.onDestroy && r(this, t6).push(t.onDestroy.bind(t));
  }
}
J1 = new WeakMap(), e6 = new WeakMap(), _r = new WeakMap(), t6 = new WeakMap(), Ls = new WeakSet(), E5 = function() {
  if (this.attrs)
    for (const t of Object.keys(this.attrs))
      ns ? ie(this.el, t, X7.call(this.component, this.attrs[t])) : sn(this.attrs[t]) ? T(c(this, Ls, T5).bind(this, t)) : ie(this.el, t, this.attrs[t]);
}, $5 = function() {
  if (this.styles)
    for (const t of Object.keys(this.styles))
      ns ? Wt(this.el, t, X7.call(this.component, this.styles[t])) : sn(this.styles[t]) ? T(c(this, Ls, P5).bind(this, t)) : Wt(this.el, t, this.styles[t]);
}, T5 = function(t) {
  ie(this.el, t, this.attrs[t].call(this.component));
}, P5 = function(t) {
  Wt(this.el, t, this.styles[t].call(this.component));
};
function jv(n) {
  const t = {};
  for (const e of Object.keys(n)) {
    const s = n[e];
    t[e] = re(s, s);
  }
  return t;
}
let qo = { $$: null };
function L5(n, t) {
  return $v(() => {
    qo.$$ = new Fv(n, J3(), t);
    const e = new n();
    return qo.$$.component = e, qo.$$ = null, e;
  });
}
class Sn extends EventTarget {
  constructor() {
    super();
    /** @internal */
    $(this, "$$");
    qo.$$ && this.attach(qo);
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
  addEventListener(e, s, i) {
    this.listen(e, s, i);
  }
  removeEventListener(e, s, i) {
    var o;
    (o = this.el) == null || o.removeEventListener(e, s, i);
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
  createEvent(e, ...s) {
    return new $e(e, s[0]);
  }
  /**
   * Creates a `DOMEvent` and dispatches it from the host element. This method is typed to
   * match all component events.
   */
  dispatch(e, ...s) {
    if (ns || !this.el) return !1;
    const i = e instanceof Event ? e : new $e(e, s[0]);
    return Object.defineProperty(i, "target", {
      get: () => this.$$.component
    }), io(() => {
      var o, a;
      return (a = (o = this.$$)[_2]) == null || a.call(o, i), this.el.dispatchEvent(i);
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
  listen(e, s, i) {
    return ns || !this.el ? gn : Xe(this.el, e, s, i);
  }
}
class Ce extends Sn {
  subscribe(t) {
    return Gt(() => T(() => t(this.state)), this.$$.scope);
  }
  destroy() {
    this.$$.destroy();
  }
}
function Re(n, t, e) {
  n[Cc] || (n[Cc] = /* @__PURE__ */ new Set()), n[Cc].add(t);
}
function mt(n, t, e) {
  n[mc] || (n[mc] = /* @__PURE__ */ new Set()), n[mc].add(t);
}
var n6;
class Pi {
  constructor(t) {
    $(this, "id", Symbol(0));
    $(this, "record");
    C(this, n6);
    this.record = t, g(this, n6, Object.getOwnPropertyDescriptors(t));
  }
  create() {
    const t = {}, e = new Proxy(t, { get: (s, i) => t[i]() });
    for (const s of Object.keys(this.record)) {
      const i = r(this, n6)[s].get;
      t[s] = i ? vr(i.bind(e)) : re(this.record[s]);
    }
    return t;
  }
  reset(t, e) {
    for (const s of Object.keys(t))
      !r(this, n6)[s].get && (!e || e(s)) && t[s].set(this.record[s]);
  }
}
n6 = new WeakMap();
function po(n) {
  return rt(n);
}
function F2(n) {
  return n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function W9(n) {
  return n.replace(/-./g, (t) => t[1].toUpperCase());
}
function qv(n) {
  return Zv(n).replace(/\s/g, "");
}
function Zv(n) {
  return U9(n.replace(/-./g, (t) => " " + t[1].toUpperCase()));
}
function U9(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
const na = u.createContext({ current: null });
na.displayName = "Scope";
function k5(n, ...t) {
  return u.createElement(na.Provider, { value: n }, ...t);
}
function M5() {
  return u.useContext(na).current;
}
function K9(n) {
  const t = M5();
  return u.useMemo(() => N9(n.id, t), [t]);
}
function I5(n, t) {
  typeof n == "function" ? n(t) : n && (n.current = t);
}
function Oe(...n) {
  return (t) => n.forEach((e) => I5(e, t));
}
function Bv(n, t) {
  const e = u.forwardRef((s, i) => {
    var S, E, P, I, M, D, B, F;
    let o = u.useContext(na), a = u.useRef(null), l = u.useRef();
    if (!l.current) {
      const k = Wv(), Q = td(n, k, s, o.current);
      k.component = Q, l.current = k, a.current = Q.scope;
    }
    function d() {
      let k = l.current, Q = o.current;
      if (window.cancelAnimationFrame(k.destroyId), k.destroyId = -1, k.component.$$.destroyed) {
        const X = td(n, k, s, Q);
        k.component = X, k.attached = !1, k.forwardRef = !1, a.current = X.scope;
      }
      return k.el && ed(k, k.el), k.forwardRef || (I5(i, k.component), k.forwardRef = !0), () => Ta(k);
    }
    function h(k) {
      const Q = l.current;
      if (!Q.forwardRef) {
        Q.el = k;
        return;
      }
      window.cancelAnimationFrame(Q.refChangeId), Q.refChangeId = window.requestAnimationFrame(() => {
        const X = l.current;
        X.refChangeId = -1, X.el !== k && (Ta(X), k && ed(X, k), X.el = k);
      });
    }
    u.useEffect(() => {
      const k = l.current;
      return window.cancelAnimationFrame(k.destroyId), k.destroyId = -1, function() {
        sn(s.children) && (window.cancelAnimationFrame(k.refChangeId), k.refChangeId = -1, window.cancelAnimationFrame(k.connectId), k.connectId = -1, window.cancelAnimationFrame(k.destroyId), k.destroyId = window.requestAnimationFrame(() => {
          k.destroyId = -1, Ta(k), k.component.$$.destroy(), k.component.$$[_2] = null, k.callbacks = {}, k.domCallbacks = {}, a.current = null;
        }));
      };
    }, []), u.useEffect(Jn);
    let p = l.current, { children: f, ...m } = s, y = {}, v = p.prevProps, b = Object.keys(m);
    p.callbacks = {};
    for (const k of [...v, ...b])
      if (t.props.has(k))
        p.component.$props[k].set(
          // If the prop was removed we'll use the default value provided on Component creation.
          vt(m[k]) ? (S = n.props) == null ? void 0 : S[k] : m[k]
        );
      else if ((E = t.events) != null && E.has(k) || (P = t.eventsRE) != null && P.test(k))
        p.callbacks[k] = m[k];
      else if ((I = t.domEvents) != null && I.has(k) || (M = t.domEventsRE) != null && M.test(k)) {
        let Q = F2(k.slice(2));
        p.domCallbacks[Q] = m[k], b.includes(k) ? p.el && !((F = p.listening) != null && F.has(Q)) && (p.listening || (p.listening = /* @__PURE__ */ new Set()), p.listening.add(Q), p.el.addEventListener(Q, p.onDOMEvent)) : ((D = p.el) == null || D.removeEventListener(Q, p.onDOMEvent), (B = p.listening) == null || B.delete(Q));
      } else
        y[k] = m[k];
    return p.prevProps = b, k5(
      a,
      u.createElement(Gv, {
        effect: d
      }),
      sn(f) ? f == null ? void 0 : f(
        {
          ...y,
          suppressHydrationWarning: !0,
          ref: h
        },
        p.component
      ) : f
    );
  });
  return e.displayName = n.name + "Bridge", e;
}
function Gv({ effect: n }) {
  return u.useEffect(n, []), null;
}
const J7 = /* @__PURE__ */ new Map();
function Wv() {
  const n = {
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
      var s, i;
      const e = vt(t.detail) ? [t] : [t.detail, t];
      (i = (s = n.domCallbacks)[t.type]) == null || i.call(s, ...e);
    }
  };
  return n;
}
function ed(n, t) {
  if (!(n.el === t && n.attached)) {
    if (n.attached && Ta(n), n.domCallbacks) {
      n.listening || (n.listening = /* @__PURE__ */ new Set());
      for (const e of Object.keys(n.domCallbacks))
        n.listening.has(e) || (t.addEventListener(e, n.onDOMEvent), n.listening.add(e));
    }
    n.component.$$.attach(t), n.connectId = window.requestAnimationFrame(() => {
      n.component.$$.connect(), n.connectId = -1;
    }), n.attached = !0;
  }
}
function Ta(n) {
  if (n.attached && (window.cancelAnimationFrame(n.connectId), n.connectId = -1, n.component.$$.detach(), n.attached = !1, n.el && n.listening)) {
    for (const t of n.listening)
      n.el.removeEventListener(t, n.onDOMEvent);
    n.listening.clear();
  }
}
function Uv(n) {
  var s, i;
  let t = J7.get(n.type), e = vt(n.detail) ? [n] : [n.detail, n];
  t || J7.set(n.type, t = `on${qv(n.type)}`), (i = (s = this.callbacks)[t]) == null || i.call(s, ...e);
}
function td(n, t, e, s) {
  const i = L5(n, { props: e, scope: s });
  return i.$$[_2] = Uv.bind(t), i.$$.setup(), i;
}
function V5(n, t = !1) {
  const e = typeof n;
  if (e !== "string")
    return !t && e === "function" ? V5(n()) : t && e === "boolean" ? n + "" : n;
  const s = t ? '"' : "<", i = t ? "&quot;" : "&lt;";
  let o = n.indexOf(s), a = n.indexOf("&");
  if (o < 0 && a < 0) return n;
  let l = 0, d = "";
  for (; o >= 0 && a >= 0; )
    o < a ? (l < o && (d += n.substring(l, o)), d += i, l = o + 1, o = n.indexOf(s, l)) : (l < a && (d += n.substring(l, a)), d += "&amp;", l = a + 1, a = n.indexOf("&", l));
  if (o >= 0)
    do
      l < o && (d += n.substring(l, o)), d += i, l = o + 1, o = n.indexOf(s, l);
    while (o >= 0);
  else
    for (; a >= 0; )
      l < a && (d += n.substring(l, a)), d += "&amp;", l = a + 1, a = n.indexOf("&", l);
  return l < n.length ? d + n.substring(l) : d;
}
const Kv = /* @__PURE__ */ Symbol(0), zv = /\s+/;
function Yv(n, t) {
  const e = t.trim().split(zv);
  for (const s of e) n.add(s);
}
const Qv = /\s*:\s*/, Xv = /\s*;\s*/;
function Jv(n, t) {
  const e = t.trim().split(Xv);
  for (let s = 0; s < e.length; s++) {
    if (e[s] === "") continue;
    const [i, o] = e[s].split(Qv);
    n.set(i, o);
  }
}
class eb {
  constructor(t) {
    $(this, "keepAlive", !1);
    $(this, "forwardKeepAlive", !0);
    $(this, "$");
    $(this, "attributes", new tb());
    $(this, "style", new nb());
    $(this, "classList", new sb());
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
    Gt(() => {
      this.hasAttribute("class") && Yv(this.classList.tokens, this.getAttribute("class")), this.hasAttribute("style") && Jv(this.style.tokens, this.getAttribute("style")), t.setup(), t.attach(this), this.classList.length > 0 && this.setAttribute("class", this.classList.toString()), this.style.length > 0 && this.setAttribute("style", this.style.toString()), this.keepAlive && this.setAttribute("keep-alive", "");
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
  [Kv]() {
  }
  addEventListener() {
  }
  removeEventListener() {
  }
  dispatchEvent() {
    return !1;
  }
  subscribe() {
    return gn;
  }
  destroy() {
    this.$.destroy();
  }
}
var Fn;
class tb {
  constructor() {
    C(this, Fn, /* @__PURE__ */ new Map());
  }
  get length() {
    return r(this, Fn).size;
  }
  get tokens() {
    return r(this, Fn);
  }
  getAttribute(t) {
    return r(this, Fn).get(t) ?? null;
  }
  hasAttribute(t) {
    return r(this, Fn).has(t);
  }
  setAttribute(t, e) {
    r(this, Fn).set(t, e + "");
  }
  removeAttribute(t) {
    r(this, Fn).delete(t);
  }
  toString() {
    if (r(this, Fn).size === 0) return "";
    let t = "";
    for (const [e, s] of r(this, Fn))
      t += ` ${e}="${V5(s, !0)}"`;
    return t;
  }
}
Fn = new WeakMap();
var jn;
class nb {
  constructor() {
    C(this, jn, /* @__PURE__ */ new Map());
  }
  get length() {
    return r(this, jn).size;
  }
  get tokens() {
    return r(this, jn);
  }
  getPropertyValue(t) {
    return r(this, jn).get(t) ?? "";
  }
  setProperty(t, e) {
    r(this, jn).set(t, e ?? "");
  }
  removeProperty(t) {
    const e = r(this, jn).get(t);
    return r(this, jn).delete(t), e ?? "";
  }
  toString() {
    if (r(this, jn).size === 0) return "";
    let t = "";
    for (const [e, s] of r(this, jn))
      t += `${e}: ${s};`;
    return t;
  }
}
jn = new WeakMap();
var Ft;
class sb {
  constructor() {
    C(this, Ft, /* @__PURE__ */ new Set());
  }
  get length() {
    return r(this, Ft).size;
  }
  get tokens() {
    return r(this, Ft);
  }
  add(...t) {
    for (const e of t)
      r(this, Ft).add(e);
  }
  contains(t) {
    return r(this, Ft).has(t);
  }
  remove(t) {
    r(this, Ft).delete(t);
  }
  replace(t, e) {
    return r(this, Ft).has(t) ? (r(this, Ft).delete(t), r(this, Ft).add(e), !0) : !1;
  }
  toggle(t, e) {
    return e !== !0 && (r(this, Ft).has(t) || e === !1) ? (r(this, Ft).delete(t), !1) : (r(this, Ft).add(t), !0);
  }
  toString() {
    return Array.from(r(this, Ft)).join(" ");
  }
}
Ft = new WeakMap();
const ib = {
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
function rb(n, t) {
  function e(s) {
    let i = u.useContext(na), o = L5(n, {
      props: s,
      scope: i.current
    }), a = new eb(o), l = {}, { style: d = {}, children: h, forwardRef: p, ...f } = s;
    if (t.props.size)
      for (const m of Object.keys(f))
        t.props.has(m) || (l[m] = f[m]);
    else
      l = f;
    if (a.setup(), a.hasAttribute("style")) {
      for (const [m, y] of a.style.tokens)
        d[m.startsWith("--") ? m : W9(m)] = y;
      a.removeAttribute("style");
    }
    for (const [m, y] of a.attributes.tokens) {
      const v = ib[m];
      v && (v in l || (l[v] = y), a.removeAttribute(m));
    }
    return k5(
      { current: o.$$.scope },
      sn(h) ? h == null ? void 0 : h(
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
  return e.displayName = n.name + "Bridge", e;
}
function R1(n) {
  return K9(n);
}
function et(n, t) {
  const [, e] = u.useState();
  return u.useEffect(() => q9(() => {
    n(), e({});
  }), [t ?? n]), n();
}
function Go(n) {
  return n ? "true" : "false";
}
function ob() {
  const n = /* @__PURE__ */ new Set();
  return {
    add(...t) {
      for (const e of t) n.add(e);
    },
    empty() {
      for (const t of n) t();
      n.clear();
    }
  };
}
function ab(n) {
  return Object.keys(n);
}
function e2() {
  let n, t;
  return { promise: new Promise((s, i) => {
    n = s, t = i;
  }), resolve: n, reject: t };
}
function A5(n) {
  return new Promise((t) => setTimeout(t, n));
}
function N1(n) {
  if (ns) return gn;
  let t = -1, e;
  function s(...i) {
    e = i, !(t >= 0) && (t = window.requestAnimationFrame(() => {
      n.apply(this, e), t = -1, e = void 0;
    }));
  }
  return s;
}
const cb = ns ? gn : typeof window < "u" ? "requestIdleCallback" in window ? window.requestIdleCallback : (n) => window.setTimeout(n, 1) : gn;
function R5(n, t) {
  return ns ? Promise.resolve() : new Promise((e) => {
    cb((s) => {
      n == null || n(s), e();
    }, t);
  });
}
function N5(n) {
  const [, t] = u.useState(), e = u.useRef(null);
  return e.current == null && (e.current = {
    state: {},
    $update: re({}),
    props: /* @__PURE__ */ new Set()
  }), u.useEffect(() => {
    let { state: s, $update: i, props: o } = e.current;
    return T(() => {
      for (const a of o) {
        const l = n[a]();
        s[a] = Vt(l) ? [...l] : l;
      }
      i(), t({});
    });
  }, [n]), u.useMemo(() => {
    let { state: s, $update: i, props: o } = e.current, a = !1;
    return o.clear(), new Proxy(s, {
      get(l, d) {
        if (!o.has(d) && d in n) {
          o.add(d);
          const h = n[d]();
          s[d] = Vt(h) ? [...h] : h, a || (i.set({}), a = !0, queueMicrotask(() => a = !1));
        }
        return s[d];
      },
      set(l, d, h) {
        return d in n || (s[d] = h), !0;
      }
    });
  }, [n]);
}
function ge(n, t) {
  return ns ? rb(n, {
    props: new Set(Object.keys(n.props || {}))
  }) : Bv(n, {
    props: new Set(Object.keys(n.props || {})),
    events: new Set(t == null ? void 0 : t.events),
    eventsRE: t == null ? void 0 : t.eventsRegex,
    domEvents: t == null ? void 0 : t.domEvents,
    domEventsRE: t == null ? void 0 : t.domEventsRegex
  });
}
var on = {
  fullscreenEnabled: 0,
  fullscreenElement: 1,
  requestFullscreen: 2,
  exitFullscreen: 3,
  fullscreenchange: 4,
  fullscreenerror: 5,
  fullscreen: 6
}, nd = [
  "webkitFullscreenEnabled",
  "webkitFullscreenElement",
  "webkitRequestFullscreen",
  "webkitExitFullscreen",
  "webkitfullscreenchange",
  "webkitfullscreenerror",
  "-webkit-full-screen"
], sd = [
  "mozFullScreenEnabled",
  "mozFullScreenElement",
  "mozRequestFullScreen",
  "mozCancelFullScreen",
  "mozfullscreenchange",
  "mozfullscreenerror",
  "-moz-full-screen"
], id = [
  "msFullscreenEnabled",
  "msFullscreenElement",
  "msRequestFullscreen",
  "msExitFullscreen",
  "MSFullscreenChange",
  "MSFullscreenError",
  "-ms-fullscreen"
], en = typeof window < "u" && typeof window.document < "u" ? window.document : {}, Tn = "fullscreenEnabled" in en && Object.keys(on) || nd[0] in en && nd || sd[0] in en && sd || id[0] in en && id || [], gr = {
  requestFullscreen: function(n) {
    return n[Tn[on.requestFullscreen]]();
  },
  requestFullscreenFunction: function(n) {
    return n[Tn[on.requestFullscreen]];
  },
  get exitFullscreen() {
    return en[Tn[on.exitFullscreen]].bind(en);
  },
  get fullscreenPseudoClass() {
    return ":" + Tn[on.fullscreen];
  },
  addEventListener: function(n, t, e) {
    return en.addEventListener(Tn[on[n]], t, e);
  },
  removeEventListener: function(n, t, e) {
    return en.removeEventListener(Tn[on[n]], t, e);
  },
  get fullscreenEnabled() {
    return !!en[Tn[on.fullscreenEnabled]];
  },
  set fullscreenEnabled(n) {
  },
  get fullscreenElement() {
    return en[Tn[on.fullscreenElement]];
  },
  set fullscreenElement(n) {
  },
  get onfullscreenchange() {
    return en[("on" + Tn[on.fullscreenchange]).toLowerCase()];
  },
  set onfullscreenchange(n) {
    return en[("on" + Tn[on.fullscreenchange]).toLowerCase()] = n;
  },
  get onfullscreenerror() {
    return en[("on" + Tn[on.fullscreenerror]).toLowerCase()];
  },
  set onfullscreenerror(n) {
    return en[("on" + Tn[on.fullscreenerror]).toLowerCase()] = n;
  }
}, kr = lb;
function lb(n, t, e) {
  var s = null, i = null, o = e && e.leading, a = e && e.trailing;
  o == null && (o = !0), a == null && (a = !o), o == !0 && (a = !1);
  var l = function() {
    s && (clearTimeout(s), s = null);
  }, d = function() {
    var p = i;
    l(), p && p();
  }, h = function() {
    var p = o && !s, f = this, m = arguments;
    if (i = function() {
      return n.apply(f, m);
    }, s || (s = setTimeout(function() {
      if (s = null, a)
        return i();
    }, t)), p)
      return p = !1, i();
  };
  return h.cancel = l, h.flush = d, h;
}
var j2 = ub;
function ub(n, t, e) {
  var s = null, i = null, o = function() {
    s && (clearTimeout(s), i = null, s = null);
  }, a = function() {
    var d = i;
    o(), d && d();
  }, l = function() {
    if (!t)
      return n.apply(this, arguments);
    var d = this, h = arguments, p = e && !s;
    if (o(), i = function() {
      n.apply(d, h);
    }, s = setTimeout(function() {
      if (s = null, !p) {
        var f = i;
        return i = null, f();
      }
    }, t), p)
      return i();
  };
  return l.cancel = o, l.flush = a, l;
}
const rd = (n) => typeof n == "object" && n != null && n.nodeType === 1, od = (n, t) => (!t || n !== "hidden") && n !== "visible" && n !== "clip", yc = (n, t) => {
  if (n.clientHeight < n.scrollHeight || n.clientWidth < n.scrollWidth) {
    const e = getComputedStyle(n, null);
    return od(e.overflowY, t) || od(e.overflowX, t) || ((s) => {
      const i = ((o) => {
        if (!o.ownerDocument || !o.ownerDocument.defaultView) return null;
        try {
          return o.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(s);
      return !!i && (i.clientHeight < s.scrollHeight || i.clientWidth < s.scrollWidth);
    })(n);
  }
  return !1;
}, da = (n, t, e, s, i, o, a, l) => o < n && a > t || o > n && a < t ? 0 : o <= n && l <= e || a >= t && l >= e ? o - n - s : a > t && l < e || o < n && l > e ? a - t + i : 0, db = (n) => {
  const t = n.parentElement;
  return t ?? (n.getRootNode().host || null);
}, H5 = (n, t) => {
  var e, s, i, o;
  if (typeof document > "u") return [];
  const { scrollMode: a, block: l, inline: d, boundary: h, skipOverflowHiddenElements: p } = t, f = typeof h == "function" ? h : (G) => G !== h;
  if (!rd(n)) throw new TypeError("Invalid target");
  const m = document.scrollingElement || document.documentElement, y = [];
  let v = n;
  for (; rd(v) && f(v); ) {
    if (v = db(v), v === m) {
      y.push(v);
      break;
    }
    v != null && v === document.body && yc(v) && !yc(document.documentElement) || v != null && yc(v, p) && y.push(v);
  }
  const b = (s = (e = window.visualViewport) == null ? void 0 : e.width) != null ? s : innerWidth, S = (o = (i = window.visualViewport) == null ? void 0 : i.height) != null ? o : innerHeight, { scrollX: E, scrollY: P } = window, { height: I, width: M, top: D, right: B, bottom: F, left: k } = n.getBoundingClientRect(), { top: Q, right: X, bottom: ae, left: me } = ((G) => {
    const U = window.getComputedStyle(G);
    return { top: parseFloat(U.scrollMarginTop) || 0, right: parseFloat(U.scrollMarginRight) || 0, bottom: parseFloat(U.scrollMarginBottom) || 0, left: parseFloat(U.scrollMarginLeft) || 0 };
  })(n);
  let Y = l === "start" || l === "nearest" ? D - Q : l === "end" ? F + ae : D + I / 2 - Q + ae, J = d === "center" ? k + M / 2 - me + X : d === "end" ? B + X : k - me;
  const Ee = [];
  for (let G = 0; G < y.length; G++) {
    const U = y[G], { height: K, width: q, top: xe, right: Ke, bottom: Pt, left: rn } = U.getBoundingClientRect();
    if (a === "if-needed" && D >= 0 && k >= 0 && F <= S && B <= b && D >= xe && F <= Pt && k >= rn && B <= Ke) return Ee;
    const En = getComputedStyle(U), Dn = parseInt(En.borderLeftWidth, 10), Ht = parseInt(En.borderTopWidth, 10), xt = parseInt(En.borderRightWidth, 10), Dt = parseInt(En.borderBottomWidth, 10);
    let ze = 0, gt = 0;
    const Fs = "offsetWidth" in U ? U.offsetWidth - U.clientWidth - Dn - xt : 0, as = "offsetHeight" in U ? U.offsetHeight - U.clientHeight - Ht - Dt : 0, _n = "offsetWidth" in U ? U.offsetWidth === 0 ? 0 : q / U.offsetWidth : 0, Li = "offsetHeight" in U ? U.offsetHeight === 0 ? 0 : K / U.offsetHeight : 0;
    if (m === U) ze = l === "start" ? Y : l === "end" ? Y - S : l === "nearest" ? da(P, P + S, S, Ht, Dt, P + Y, P + Y + I, I) : Y - S / 2, gt = d === "start" ? J : d === "center" ? J - b / 2 : d === "end" ? J - b : da(E, E + b, b, Dn, xt, E + J, E + J + M, M), ze = Math.max(0, ze + P), gt = Math.max(0, gt + E);
    else {
      ze = l === "start" ? Y - xe - Ht : l === "end" ? Y - Pt + Dt + as : l === "nearest" ? da(xe, Pt, K, Ht, Dt + as, Y, Y + I, I) : Y - (xe + K / 2) + as / 2, gt = d === "start" ? J - rn - Dn : d === "center" ? J - (rn + q / 2) + Fs / 2 : d === "end" ? J - Ke + xt + Fs : da(rn, Ke, q, Dn, xt + Fs, J, J + M, M);
      const { scrollLeft: js, scrollTop: cs } = U;
      ze = Li === 0 ? 0 : Math.max(0, Math.min(cs + ze / Li, U.scrollHeight - K / Li + as)), gt = _n === 0 ? 0 : Math.max(0, Math.min(js + gt / _n, U.scrollWidth - q / _n + Fs)), Y += cs - ze, J += js - gt;
    }
    Ee.push({ el: U, top: ze, left: gt });
  }
  return Ee;
};
var hb = '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0007 28.7923C15.0007 29.0152 14.9774 29.096 14.9339 29.1775C14.8903 29.259 14.8263 29.323 14.7449 29.3665C14.6634 29.4101 14.5826 29.4333 14.3597 29.4333H12.575C12.3521 29.4333 12.2713 29.4101 12.1898 29.3665C12.1083 29.323 12.0443 29.259 12.0008 29.1775C11.9572 29.096 11.934 29.0152 11.934 28.7923V12.2993L5.97496 12.3C5.75208 12.3 5.67125 12.2768 5.58977 12.2332C5.50829 12.1896 5.44434 12.1257 5.40077 12.0442C5.35719 11.9627 5.33398 11.8819 5.33398 11.659V9.87429C5.33398 9.65141 5.35719 9.57059 5.40077 9.48911C5.44434 9.40762 5.50829 9.34368 5.58977 9.3001C5.67125 9.25652 5.75208 9.23332 5.97496 9.23332H26.0263C26.2492 9.23332 26.33 9.25652 26.4115 9.3001C26.493 9.34368 26.557 9.40762 26.6005 9.48911C26.6441 9.57059 26.6673 9.65141 26.6673 9.87429V11.659C26.6673 11.8819 26.6441 11.9627 26.6005 12.0442C26.557 12.1257 26.493 12.1896 26.4115 12.2332C26.33 12.2768 26.2492 12.3 26.0263 12.3L20.067 12.2993L20.0673 28.7923C20.0673 29.0152 20.0441 29.096 20.0005 29.1775C19.957 29.259 19.893 29.323 19.8115 29.3665C19.73 29.4101 19.6492 29.4333 19.4263 29.4333H17.6416C17.4187 29.4333 17.3379 29.4101 17.2564 29.3665C17.175 29.323 17.111 29.259 17.0674 29.1775C17.0239 29.096 17.0007 29.0152 17.0007 28.7923L17 22.7663H15L15.0007 28.7923Z" fill="currentColor"/> <path d="M16.0007 7.89998C17.4734 7.89998 18.6673 6.70608 18.6673 5.23332C18.6673 3.76056 17.4734 2.56665 16.0007 2.56665C14.5279 2.56665 13.334 3.76056 13.334 5.23332C13.334 6.70608 14.5279 7.89998 16.0007 7.89998Z" fill="currentColor"/>', fb = '<path d="M5.33334 6.00001C5.33334 5.63182 5.63181 5.33334 6 5.33334H26C26.3682 5.33334 26.6667 5.63182 26.6667 6.00001V20.6667C26.6667 21.0349 26.3682 21.3333 26 21.3333H23.7072C23.4956 21.3333 23.2966 21.233 23.171 21.0628L22.1859 19.7295C21.8607 19.2894 22.1749 18.6667 22.7221 18.6667H23.3333C23.7015 18.6667 24 18.3682 24 18V8.66668C24 8.29849 23.7015 8.00001 23.3333 8.00001H8.66667C8.29848 8.00001 8 8.29849 8 8.66668V18C8 18.3682 8.29848 18.6667 8.66667 18.6667H9.29357C9.84072 18.6667 10.1549 19.2894 9.82976 19.7295L8.84467 21.0628C8.71898 21.233 8.52 21.3333 8.30848 21.3333H6C5.63181 21.3333 5.33334 21.0349 5.33334 20.6667V6.00001Z" fill="currentColor"/> <path d="M8.78528 25.6038C8.46013 26.0439 8.77431 26.6667 9.32147 26.6667L22.6785 26.6667C23.2256 26.6667 23.5398 26.0439 23.2146 25.6038L16.5358 16.5653C16.2693 16.2046 15.73 16.2047 15.4635 16.5653L8.78528 25.6038Z" fill="currentColor"/>', pb = '<path d="M17.4853 18.9093C17.4853 19.0281 17.6289 19.0875 17.7129 19.0035L22.4185 14.2979C22.6788 14.0376 23.1009 14.0376 23.3613 14.2979L24.7755 15.7122C25.0359 15.9725 25.0359 16.3946 24.7755 16.655L16.2902 25.1403C16.0299 25.4006 15.6078 25.4006 15.3474 25.1403L13.9332 23.726L13.9319 23.7247L6.86189 16.6547C6.60154 16.3944 6.60154 15.9723 6.86189 15.7119L8.2761 14.2977C8.53645 14.0373 8.95856 14.0373 9.21891 14.2977L13.9243 19.0031C14.0083 19.0871 14.1519 19.0276 14.1519 18.9088L14.1519 6.00004C14.1519 5.63185 14.4504 5.33337 14.8186 5.33337L16.8186 5.33337C17.1868 5.33337 17.4853 5.63185 17.4853 6.00004L17.4853 18.9093Z" fill="currentColor"/>', Cb = '<path d="M13.0908 14.3334C12.972 14.3334 12.9125 14.1898 12.9965 14.1058L17.7021 9.40022C17.9625 9.13987 17.9625 8.71776 17.7021 8.45741L16.2879 7.04319C16.0275 6.78284 15.6054 6.78284 15.3451 7.04319L6.8598 15.5285C6.59945 15.7888 6.59945 16.2109 6.8598 16.4713L8.27401 17.8855L8.27536 17.8868L15.3453 24.9568C15.6057 25.2172 16.0278 25.2172 16.2881 24.9568L17.7024 23.5426C17.9627 23.2822 17.9627 22.8601 17.7024 22.5998L12.9969 17.8944C12.9129 17.8104 12.9724 17.6668 13.0912 17.6668L26 17.6668C26.3682 17.6668 26.6667 17.3683 26.6667 17.0001V15.0001C26.6667 14.6319 26.3682 14.3334 26 14.3334L13.0908 14.3334Z" fill="currentColor"/>', mb = '<path d="M14.1521 13.0929C14.1521 12.9741 14.0085 12.9147 13.9245 12.9987L9.21891 17.7043C8.95856 17.9646 8.53645 17.9646 8.2761 17.7043L6.86189 16.29C6.60154 16.0297 6.60154 15.6076 6.86189 15.3472L15.3472 6.86195C15.6075 6.6016 16.0296 6.6016 16.29 6.86195L17.7042 8.27616L17.7055 8.27751L24.7755 15.3475C25.0359 15.6078 25.0359 16.0299 24.7755 16.2903L23.3613 17.7045C23.1009 17.9649 22.6788 17.9649 22.4185 17.7045L17.7131 12.9991C17.6291 12.9151 17.4855 12.9746 17.4855 13.0934V26.0022C17.4855 26.3704 17.187 26.6688 16.8188 26.6688H14.8188C14.4506 26.6688 14.1521 26.3704 14.1521 26.0022L14.1521 13.0929Z" fill="currentColor"/>', gb = '<path d="M16.6927 25.3346C16.3245 25.3346 16.026 25.0361 16.026 24.6679L16.026 7.3346C16.026 6.96641 16.3245 6.66794 16.6927 6.66794L18.6927 6.66794C19.0609 6.66794 19.3594 6.96642 19.3594 7.3346L19.3594 24.6679C19.3594 25.0361 19.0609 25.3346 18.6927 25.3346H16.6927Z" fill="currentColor"/> <path d="M24.026 25.3346C23.6578 25.3346 23.3594 25.0361 23.3594 24.6679L23.3594 7.3346C23.3594 6.96641 23.6578 6.66794 24.026 6.66794L26.026 6.66794C26.3942 6.66794 26.6927 6.96642 26.6927 7.3346V24.6679C26.6927 25.0361 26.3942 25.3346 26.026 25.3346H24.026Z" fill="currentColor"/> <path d="M5.48113 23.9407C5.38584 24.2963 5.59689 24.6619 5.95254 24.7572L7.88439 25.2748C8.24003 25.3701 8.60559 25.159 8.70089 24.8034L13.1871 8.06067C13.2824 7.70503 13.0713 7.33947 12.7157 7.24417L10.7838 6.72654C10.4282 6.63124 10.0626 6.8423 9.96733 7.19794L5.48113 23.9407Z" fill="currentColor"/>', yb = '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.9266 7.57992C25.015 7.60672 25.0886 7.64746 25.2462 7.80506L26.956 9.51488C27.1136 9.67248 27.1543 9.74604 27.1811 9.83447C27.2079 9.9229 27.2079 10.0133 27.1811 10.1018C27.1543 10.1902 27.1136 10.2638 26.956 10.4214L13.1822 24.1951C13.0246 24.3527 12.951 24.3935 12.8626 24.4203C12.797 24.4402 12.7304 24.4453 12.6642 24.4357L12.7319 24.4203C12.6435 24.4471 12.553 24.4471 12.4646 24.4203C12.3762 24.3935 12.3026 24.3527 12.145 24.1951L5.04407 17.0942C4.88647 16.9366 4.84573 16.863 4.81893 16.7746C4.79213 16.6862 4.79213 16.5957 4.81893 16.5073C4.84573 16.4189 4.88647 16.3453 5.04407 16.1877L6.7539 14.4779C6.9115 14.3203 6.98506 14.2796 7.07349 14.2528C7.16191 14.226 7.25235 14.226 7.34078 14.2528C7.42921 14.2796 7.50277 14.3203 7.66037 14.4779L12.6628 19.4808L24.3397 7.80506C24.4973 7.64746 24.5709 7.60672 24.6593 7.57992C24.7477 7.55311 24.8382 7.55311 24.9266 7.57992Z" fill="currentColor"/>', vb = '<path d="M17.947 16.095C17.999 16.043 17.999 15.9585 17.947 15.9065L11.6295 9.58899C11.3691 9.32864 11.3691 8.90653 11.6295 8.64618L13.2323 7.04341C13.4926 6.78306 13.9147 6.78306 14.1751 7.04341L21.0289 13.8973C21.0392 13.9064 21.0493 13.9158 21.0591 13.9257L22.6619 15.5285C22.9223 15.7888 22.9223 16.2109 22.6619 16.4713L14.1766 24.9565C13.9163 25.2169 13.4942 25.2169 13.2338 24.9565L11.631 23.3538C11.3707 23.0934 11.3707 22.6713 11.631 22.411L17.947 16.095Z" fill="currentColor"/>', O5 = '<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7C5.63181 7 5.33333 7.29848 5.33333 7.66667V14.8667C5.33333 14.9403 5.39361 14.9999 5.46724 15.0009C10.8844 15.0719 15.2614 19.449 15.3325 24.8661C15.3334 24.9397 15.393 25 15.4667 25H26C26.3682 25 26.6667 24.7015 26.6667 24.3333V7.66667C26.6667 7.29848 26.3682 7 26 7H6ZM17.0119 22.2294C17.0263 22.29 17.0802 22.3333 17.1425 22.3333H23.3333C23.7015 22.3333 24 22.0349 24 21.6667V10.3333C24 9.96514 23.7015 9.66667 23.3333 9.66667H8.66667C8.29848 9.66667 8 9.96514 8 10.3333V13.1909C8 13.2531 8.04332 13.3071 8.10392 13.3214C12.5063 14.3618 15.9715 17.827 17.0119 22.2294Z" fill="currentColor"/> <path d="M13.2 25C13.2736 25 13.3334 24.9398 13.3322 24.8661C13.2615 20.5544 9.77889 17.0718 5.46718 17.0011C5.39356 16.9999 5.33333 17.0597 5.33333 17.1333V18.8667C5.33333 18.9403 5.39348 18.9999 5.4671 19.0015C8.67465 19.0716 11.2617 21.6587 11.3319 24.8662C11.3335 24.9399 11.393 25 11.4667 25H13.2Z" fill="currentColor"/> <path d="M5.33333 21.1333C5.33333 21.0597 5.39332 20.9998 5.46692 21.0022C7.57033 21.0712 9.26217 22.763 9.33114 24.8664C9.33356 24.94 9.27364 25 9.2 25H6C5.63181 25 5.33333 24.7015 5.33333 24.3333V21.1333Z" fill="currentColor"/>', bb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: O5
}), wb = '<path d="M8 28.0003C8 27.6321 8.29848 27.3336 8.66667 27.3336H23.3333C23.7015 27.3336 24 27.6321 24 28.0003V29.3336C24 29.7018 23.7015 30.0003 23.3333 30.0003H8.66667C8.29848 30.0003 8 29.7018 8 29.3336V28.0003Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66602 6.66699C4.29783 6.66699 3.99935 6.96547 3.99935 7.33366V24.667C3.99935 25.0352 4.29783 25.3337 4.66602 25.3337H27.3327C27.7009 25.3337 27.9994 25.0352 27.9994 24.667V7.33366C27.9994 6.96547 27.7009 6.66699 27.3327 6.66699H4.66602ZM8.66659 21.3333C8.2984 21.3333 7.99992 21.0349 7.99992 20.6667V11.3333C7.99992 10.9651 8.2984 10.6667 8.66659 10.6667H13.9999C14.3681 10.6667 14.6666 10.9651 14.6666 11.3333V12.6667C14.6666 13.0349 14.3681 13.3333 13.9999 13.3333H10.7999C10.7263 13.3333 10.6666 13.393 10.6666 13.4667V18.5333C10.6666 18.607 10.7263 18.6667 10.7999 18.6667H13.9999C14.3681 18.6667 14.6666 18.9651 14.6666 19.3333V20.6667C14.6666 21.0349 14.3681 21.3333 13.9999 21.3333H8.66659ZM17.9999 21.3333C17.6317 21.3333 17.3333 21.0349 17.3333 20.6667V11.3333C17.3333 10.9651 17.6317 10.6667 17.9999 10.6667H23.3333C23.7014 10.6667 23.9999 10.9651 23.9999 11.3333V12.6667C23.9999 13.0349 23.7014 13.3333 23.3333 13.3333H20.1333C20.0596 13.3333 19.9999 13.393 19.9999 13.4667V18.5333C19.9999 18.607 20.0596 18.6667 20.1333 18.6667H23.3333C23.7014 18.6667 23.9999 18.9651 23.9999 19.3333V20.6667C23.9999 21.0349 23.7014 21.3333 23.3333 21.3333H17.9999Z" fill="currentColor"/>', xb = '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.6661 6.66699C4.29791 6.66699 3.99943 6.96547 3.99943 7.33366V24.667C3.99943 25.0352 4.29791 25.3337 4.6661 25.3337H27.3328C27.701 25.3337 27.9994 25.0352 27.9994 24.667V7.33366C27.9994 6.96547 27.701 6.66699 27.3328 6.66699H4.6661ZM8.66667 21.3333C8.29848 21.3333 8 21.0349 8 20.6667V11.3333C8 10.9651 8.29848 10.6667 8.66667 10.6667H14C14.3682 10.6667 14.6667 10.9651 14.6667 11.3333V12.6667C14.6667 13.0349 14.3682 13.3333 14 13.3333H10.8C10.7264 13.3333 10.6667 13.393 10.6667 13.4667V18.5333C10.6667 18.607 10.7264 18.6667 10.8 18.6667H14C14.3682 18.6667 14.6667 18.9651 14.6667 19.3333V20.6667C14.6667 21.0349 14.3682 21.3333 14 21.3333H8.66667ZM18 21.3333C17.6318 21.3333 17.3333 21.0349 17.3333 20.6667V11.3333C17.3333 10.9651 17.6318 10.6667 18 10.6667H23.3333C23.7015 10.6667 24 10.9651 24 11.3333V12.6667C24 13.0349 23.7015 13.3333 23.3333 13.3333H20.1333C20.0597 13.3333 20 13.393 20 13.4667V18.5333C20 18.607 20.0597 18.6667 20.1333 18.6667H23.3333C23.7015 18.6667 24 18.9651 24 19.3333V20.6667C24 21.0349 23.7015 21.3333 23.3333 21.3333H18Z" fill="currentColor"/>', Sb = '<path d="M14.2225 13.7867C14.3065 13.8706 14.4501 13.8112 14.4501 13.6924V5.99955C14.4501 5.63136 14.7486 5.33289 15.1167 5.33289H16.8501C17.2183 5.33289 17.5167 5.63136 17.5167 5.99955V13.6916C17.5167 13.8104 17.6604 13.8699 17.7444 13.7859L19.9433 11.5869C20.2037 11.3266 20.6258 11.3266 20.8861 11.5869L22.1118 12.8126C22.3722 13.0729 22.3722 13.4951 22.1118 13.7554L16.4549 19.4123C16.1946 19.6726 15.772 19.6731 15.5116 19.4128L9.85479 13.7559C9.59444 13.4956 9.59444 13.0734 9.85479 12.8131L11.0804 11.5874C11.3408 11.3271 11.7629 11.3271 12.0233 11.5874L14.2225 13.7867Z" fill="currentColor"/> <path d="M5.99998 20.267C5.63179 20.267 5.33331 20.5654 5.33331 20.9336V25.9997C5.33331 26.3678 5.63179 26.6663 5.99998 26.6663H26C26.3682 26.6663 26.6666 26.3678 26.6666 25.9997V20.9336C26.6666 20.5654 26.3682 20.267 26 20.267H24.2666C23.8985 20.267 23.6 20.5654 23.6 20.9336V22.9333C23.6 23.3014 23.3015 23.5999 22.9333 23.5999H9.06638C8.69819 23.5999 8.39972 23.3014 8.39972 22.9333V20.9336C8.39972 20.5654 8.10124 20.267 7.73305 20.267H5.99998Z" fill="currentColor"/>', Eb = '<path d="M16 20C18.2091 20 20 18.2092 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2092 13.7909 20 16 20Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M28 16.0058C28 18.671 23.5 25.3334 16 25.3334C8.5 25.3334 4 18.6762 4 16.0058C4 13.3354 8.50447 6.66669 16 6.66669C23.4955 6.66669 28 13.3406 28 16.0058ZM25.3318 15.9934C25.3328 16.0017 25.3328 16.0099 25.3318 16.0182C25.3274 16.0571 25.3108 16.1728 25.2485 16.3708C25.1691 16.6229 25.0352 16.9462 24.8327 17.3216C24.4264 18.0749 23.7969 18.9398 22.9567 19.754C21.2791 21.3798 18.9148 22.6667 16 22.6667C13.0845 22.6667 10.7202 21.3805 9.04298 19.7557C8.20295 18.9419 7.57362 18.0773 7.16745 17.3241C6.96499 16.9486 6.83114 16.6252 6.75172 16.3729C6.67942 16.1431 6.66856 16.0243 6.66695 16.0066L6.66695 16.005C6.66859 15.9871 6.67951 15.8682 6.75188 15.6383C6.83145 15.3854 6.96554 15.0614 7.16831 14.6853C7.57507 13.9306 8.20514 13.0644 9.04577 12.249C10.7245 10.6208 13.0886 9.33335 16 9.33335C18.9108 9.33335 21.2748 10.6215 22.9539 12.2507C23.7947 13.0664 24.4249 13.933 24.8318 14.6877C25.0346 15.0639 25.1688 15.3878 25.2483 15.6404C25.3107 15.8386 25.3274 15.9545 25.3318 15.9934Z" fill="currentColor"/>', $b = '<path d="M15.8747 8.11857C16.3148 7.79342 16.9375 8.10759 16.9375 8.65476V14.2575C16.9375 14.3669 17.0621 14.4297 17.1501 14.3647L25.6038 8.11857C26.0439 7.79342 26.6667 8.10759 26.6667 8.65476V23.3451C26.6667 23.8923 26.0439 24.2064 25.6038 23.8813L17.1501 17.6346C17.0621 17.5695 16.9375 17.6324 16.9375 17.7418L16.9375 23.3451C16.9375 23.8923 16.3147 24.2064 15.8747 23.8813L5.93387 16.5358C5.57322 16.2693 5.57323 15.7299 5.93389 15.4634L15.8747 8.11857Z" fill="currentColor"/>', Tb = '<path d="M16.1253 8.11866C15.6852 7.7935 15.0625 8.10768 15.0625 8.65484V14.2576C15.0625 14.367 14.9379 14.4298 14.8499 14.3648L6.39615 8.11866C5.95607 7.7935 5.33331 8.10768 5.33331 8.65484V23.3452C5.33331 23.8923 5.9561 24.2065 6.39617 23.8813L14.8499 17.6347C14.9379 17.5696 15.0625 17.6325 15.0625 17.7419L15.0625 23.3452C15.0625 23.8923 15.6853 24.2065 16.1253 23.8813L26.0661 16.5358C26.4268 16.2694 26.4268 15.73 26.0661 15.4635L16.1253 8.11866Z" fill="currentColor"/>', Pb = '<path d="M19.3334 13.3333C18.9652 13.3333 18.6667 13.0349 18.6667 12.6667L18.6667 7.33333C18.6667 6.96514 18.9652 6.66666 19.3334 6.66666H21.3334C21.7015 6.66666 22 6.96514 22 7.33333V9.86666C22 9.9403 22.0597 10 22.1334 10L24.6667 10C25.0349 10 25.3334 10.2985 25.3334 10.6667V12.6667C25.3334 13.0349 25.0349 13.3333 24.6667 13.3333L19.3334 13.3333Z" fill="currentColor"/> <path d="M13.3334 19.3333C13.3334 18.9651 13.0349 18.6667 12.6667 18.6667H7.33335C6.96516 18.6667 6.66669 18.9651 6.66669 19.3333V21.3333C6.66669 21.7015 6.96516 22 7.33335 22H9.86669C9.94032 22 10 22.0597 10 22.1333L10 24.6667C10 25.0349 10.2985 25.3333 10.6667 25.3333H12.6667C13.0349 25.3333 13.3334 25.0349 13.3334 24.6667L13.3334 19.3333Z" fill="currentColor"/> <path d="M18.6667 24.6667C18.6667 25.0349 18.9652 25.3333 19.3334 25.3333H21.3334C21.7015 25.3333 22 25.0349 22 24.6667V22.1333C22 22.0597 22.0597 22 22.1334 22H24.6667C25.0349 22 25.3334 21.7015 25.3334 21.3333V19.3333C25.3334 18.9651 25.0349 18.6667 24.6667 18.6667L19.3334 18.6667C18.9652 18.6667 18.6667 18.9651 18.6667 19.3333L18.6667 24.6667Z" fill="currentColor"/> <path d="M10.6667 13.3333H12.6667C13.0349 13.3333 13.3334 13.0349 13.3334 12.6667L13.3334 10.6667V7.33333C13.3334 6.96514 13.0349 6.66666 12.6667 6.66666H10.6667C10.2985 6.66666 10 6.96514 10 7.33333L10 9.86666C10 9.9403 9.94033 10 9.86669 10L7.33335 10C6.96516 10 6.66669 10.2985 6.66669 10.6667V12.6667C6.66669 13.0349 6.96516 13.3333 7.33335 13.3333L10.6667 13.3333Z" fill="currentColor"/>', Lb = '<path d="M25.3299 7.26517C25.2958 6.929 25.0119 6.66666 24.6667 6.66666H19.3334C18.9652 6.66666 18.6667 6.96514 18.6667 7.33333V9.33333C18.6667 9.70152 18.9652 10 19.3334 10L21.8667 10C21.9403 10 22 10.0597 22 10.1333V12.6667C22 13.0349 22.2985 13.3333 22.6667 13.3333H24.6667C25.0349 13.3333 25.3334 13.0349 25.3334 12.6667V7.33333C25.3334 7.31032 25.3322 7.28758 25.3299 7.26517Z" fill="currentColor"/> <path d="M22 21.8667C22 21.9403 21.9403 22 21.8667 22L19.3334 22C18.9652 22 18.6667 22.2985 18.6667 22.6667V24.6667C18.6667 25.0349 18.9652 25.3333 19.3334 25.3333L24.6667 25.3333C25.0349 25.3333 25.3334 25.0349 25.3334 24.6667V19.3333C25.3334 18.9651 25.0349 18.6667 24.6667 18.6667H22.6667C22.2985 18.6667 22 18.9651 22 19.3333V21.8667Z" fill="currentColor"/> <path d="M12.6667 22H10.1334C10.0597 22 10 21.9403 10 21.8667V19.3333C10 18.9651 9.70154 18.6667 9.33335 18.6667H7.33335C6.96516 18.6667 6.66669 18.9651 6.66669 19.3333V24.6667C6.66669 25.0349 6.96516 25.3333 7.33335 25.3333H12.6667C13.0349 25.3333 13.3334 25.0349 13.3334 24.6667V22.6667C13.3334 22.2985 13.0349 22 12.6667 22Z" fill="currentColor"/> <path d="M10 12.6667V10.1333C10 10.0597 10.0597 10 10.1334 10L12.6667 10C13.0349 10 13.3334 9.70152 13.3334 9.33333V7.33333C13.3334 6.96514 13.0349 6.66666 12.6667 6.66666H7.33335C6.96516 6.66666 6.66669 6.96514 6.66669 7.33333V12.6667C6.66669 13.0349 6.96516 13.3333 7.33335 13.3333H9.33335C9.70154 13.3333 10 13.0349 10 12.6667Z" fill="currentColor"/>', kb = '<path fill-rule="evenodd" clip-rule="evenodd" d="M26.6667 5.99998C26.6667 5.63179 26.3682 5.33331 26 5.33331H11.3333C10.9651 5.33331 10.6667 5.63179 10.6667 5.99998V17.5714C10.6667 17.6694 10.5644 17.7342 10.4741 17.6962C9.91823 17.4625 9.30754 17.3333 8.66667 17.3333C6.08934 17.3333 4 19.4226 4 22C4 24.5773 6.08934 26.6666 8.66667 26.6666C11.244 26.6666 13.3333 24.5773 13.3333 22V8.66665C13.3333 8.29846 13.6318 7.99998 14 7.99998L23.3333 7.99998C23.7015 7.99998 24 8.29846 24 8.66665V14.9048C24 15.0027 23.8978 15.0675 23.8075 15.0296C23.2516 14.7958 22.6409 14.6666 22 14.6666C19.4227 14.6666 17.3333 16.756 17.3333 19.3333C17.3333 21.9106 19.4227 24 22 24C24.5773 24 26.6667 21.9106 26.6667 19.3333V5.99998ZM22 21.3333C23.1046 21.3333 24 20.4379 24 19.3333C24 18.2287 23.1046 17.3333 22 17.3333C20.8954 17.3333 20 18.2287 20 19.3333C20 20.4379 20.8954 21.3333 22 21.3333ZM8.66667 24C9.77124 24 10.6667 23.1045 10.6667 22C10.6667 20.8954 9.77124 20 8.66667 20C7.5621 20 6.66667 20.8954 6.66667 22C6.66667 23.1045 7.5621 24 8.66667 24Z" fill="currentColor"/>', Mb = '<path d="M17.5091 24.6594C17.5091 25.2066 16.8864 25.5208 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9991 9.36923 19.9991H4.66667C4.29848 19.9991 4 19.7006 4 19.3325V12.6658C4 12.2976 4.29848 11.9991 4.66667 11.9991H9.37115C9.39967 11.9991 9.42745 11.99 9.45039 11.973L16.4463 6.8036C16.8863 6.47842 17.5091 6.79259 17.5091 7.33977L17.5091 24.6594Z" fill="currentColor"/> <path d="M28.8621 13.6422C29.1225 13.3818 29.1225 12.9597 28.8621 12.6994L27.9193 11.7566C27.659 11.4962 27.2368 11.4962 26.9765 11.7566L24.7134 14.0197C24.6613 14.0717 24.5769 14.0717 24.5248 14.0197L22.262 11.7568C22.0016 11.4964 21.5795 11.4964 21.3191 11.7568L20.3763 12.6996C20.116 12.9599 20.116 13.382 20.3763 13.6424L22.6392 15.9053C22.6913 15.9573 22.6913 16.0418 22.6392 16.0938L20.3768 18.3562C20.1165 18.6166 20.1165 19.0387 20.3768 19.299L21.3196 20.2419C21.58 20.5022 22.0021 20.5022 22.2624 20.2418L24.5248 17.9795C24.5769 17.9274 24.6613 17.9274 24.7134 17.9795L26.976 20.2421C27.2363 20.5024 27.6585 20.5024 27.9188 20.2421L28.8616 19.2992C29.122 19.0389 29.122 18.6168 28.8616 18.3564L26.599 16.0938C26.547 16.0418 26.547 15.9573 26.599 15.9053L28.8621 13.6422Z" fill="currentColor"/>', Ib = '<path d="M26.6009 16.0725C26.6009 16.424 26.4302 17.1125 25.9409 18.0213C25.4676 18.8976 24.7542 19.8715 23.8182 20.7783C21.9489 22.5905 19.2662 24.0667 15.9342 24.0667C12.6009 24.0667 9.91958 22.5915 8.04891 20.78C7.11424 19.8736 6.40091 18.9 5.92758 18.0236C5.43824 17.1149 5.26758 16.4257 5.26758 16.0725C5.26758 15.7193 5.43824 15.0293 5.92891 14.1193C6.40224 13.2416 7.11558 12.2665 8.05158 11.3587C9.92224 9.54398 12.6049 8.06665 15.9342 8.06665C19.2636 8.06665 21.9449 9.54505 23.8169 11.3604C24.7529 12.2687 25.4662 13.2441 25.9396 14.1216C26.4302 15.0317 26.6009 15.7209 26.6009 16.0725Z" stroke="currentColor" stroke-width="3"/> <path d="M15.9336 20.0667C18.1427 20.0667 19.9336 18.2758 19.9336 16.0667C19.9336 13.8575 18.1427 12.0667 15.9336 12.0667C13.7245 12.0667 11.9336 13.8575 11.9336 16.0667C11.9336 18.2758 13.7245 20.0667 15.9336 20.0667Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M27.2323 25.0624L6.93878 4.76886C6.78118 4.61126 6.70762 4.57052 6.61919 4.54372C6.53077 4.51692 6.44033 4.51691 6.3519 4.54372C6.26347 4.57052 6.18991 4.61126 6.03231 4.76886L4.77032 6.03085C4.61272 6.18845 4.57198 6.26201 4.54518 6.35044C4.51838 6.43887 4.51838 6.5293 4.54518 6.61773C4.57198 6.70616 4.61272 6.77972 4.77032 6.93732L25.0639 27.2308C25.2215 27.3884 25.295 27.4292 25.3834 27.456C25.4719 27.4828 25.5623 27.4828 25.6507 27.456C25.7392 27.4292 25.8127 27.3885 25.9703 27.2309L27.2323 25.9689C27.3899 25.8113 27.4307 25.7377 27.4575 25.6493C27.4843 25.5608 27.4843 25.4704 27.4575 25.382C27.4307 25.2935 27.3899 25.22 27.2323 25.0624Z" fill="currentColor"/>', Vb = '<path d="M8.66667 6.66667C8.29848 6.66667 8 6.96514 8 7.33333V24.6667C8 25.0349 8.29848 25.3333 8.66667 25.3333H12.6667C13.0349 25.3333 13.3333 25.0349 13.3333 24.6667V7.33333C13.3333 6.96514 13.0349 6.66667 12.6667 6.66667H8.66667Z" fill="currentColor"/> <path d="M19.3333 6.66667C18.9651 6.66667 18.6667 6.96514 18.6667 7.33333V24.6667C18.6667 25.0349 18.9651 25.3333 19.3333 25.3333H23.3333C23.7015 25.3333 24 25.0349 24 24.6667V7.33333C24 6.96514 23.7015 6.66667 23.3333 6.66667H19.3333Z" fill="currentColor"/>', Ab = '<path d="M5.33334 26V19.4667C5.33334 19.393 5.39304 19.3333 5.46668 19.3333H7.86668C7.94031 19.3333 8.00001 19.393 8.00001 19.4667V23.3333C8.00001 23.7015 8.29849 24 8.66668 24H23.3333C23.7015 24 24 23.7015 24 23.3333V8.66666C24 8.29847 23.7015 7.99999 23.3333 7.99999H19.4667C19.393 7.99999 19.3333 7.9403 19.3333 7.86666V5.46666C19.3333 5.39302 19.393 5.33333 19.4667 5.33333H26C26.3682 5.33333 26.6667 5.63181 26.6667 5.99999V26C26.6667 26.3682 26.3682 26.6667 26 26.6667H6.00001C5.63182 26.6667 5.33334 26.3682 5.33334 26Z" fill="currentColor"/> <path d="M14.0098 8.42359H10.806C10.6872 8.42359 10.6277 8.56721 10.7117 8.6512L16.5491 14.4886C16.8094 14.7489 16.8094 15.171 16.5491 15.4314L15.3234 16.657C15.0631 16.9174 14.641 16.9174 14.3806 16.657L8.63739 10.9138C8.55339 10.8298 8.40978 10.8893 8.40978 11.0081V14.0236C8.40978 14.3918 8.1113 14.6903 7.74311 14.6903H6.00978C5.64159 14.6903 5.34311 14.3918 5.34311 14.0236L5.34311 6.02359C5.34311 5.6554 5.64159 5.35692 6.00978 5.35692L14.0098 5.35692C14.378 5.35692 14.6764 5.6554 14.6764 6.02359V7.75692C14.6764 8.12511 14.378 8.42359 14.0098 8.42359Z" fill="currentColor"/>', Rb = '<path d="M16 15.3333C15.6318 15.3333 15.3333 15.6318 15.3333 16V20C15.3333 20.3682 15.6318 20.6667 16 20.6667H21.3333C21.7015 20.6667 22 20.3682 22 20V16C22 15.6318 21.7015 15.3333 21.3333 15.3333H16Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33333 7.33334C5.33333 6.96515 5.63181 6.66667 5.99999 6.66667H26C26.3682 6.66667 26.6667 6.96515 26.6667 7.33334V24.6667C26.6667 25.0349 26.3682 25.3333 26 25.3333H5.99999C5.63181 25.3333 5.33333 25.0349 5.33333 24.6667V7.33334ZM7.99999 10C7.99999 9.63182 8.29847 9.33334 8.66666 9.33334H23.3333C23.7015 9.33334 24 9.63182 24 10V22C24 22.3682 23.7015 22.6667 23.3333 22.6667H8.66666C8.29847 22.6667 7.99999 22.3682 7.99999 22V10Z" fill="currentColor"/>', Nb = '<path d="M10.6667 6.6548C10.6667 6.10764 11.2894 5.79346 11.7295 6.11862L24.377 15.4634C24.7377 15.7298 24.7377 16.2692 24.3771 16.5357L11.7295 25.8813C11.2895 26.2065 10.6667 25.8923 10.6667 25.3451L10.6667 6.6548Z" fill="currentColor"/>', Hb = '<path d="M13.9213 5.53573C14.3146 5.45804 14.6666 5.76987 14.6666 6.17079V7.57215C14.6666 7.89777 14.4305 8.17277 14.114 8.24925C12.5981 8.61559 11.2506 9.41368 10.2091 10.506C9.98474 10.7414 9.62903 10.8079 9.34742 10.6453L8.14112 9.94885C7.79394 9.7484 7.69985 9.28777 7.96359 8.98585C9.48505 7.24409 11.5636 6.00143 13.9213 5.53573Z" fill="currentColor"/> <path d="M5.88974 12.5908C6.01805 12.2101 6.46491 12.0603 6.81279 12.2611L8.01201 12.9535C8.29379 13.1162 8.41396 13.4577 8.32238 13.7699C8.11252 14.4854 7.99998 15.2424 7.99998 16.0257C7.99998 16.809 8.11252 17.566 8.32238 18.2814C8.41396 18.5936 8.29378 18.9352 8.01201 19.0979L6.82742 19.7818C6.48051 19.9821 6.03488 19.8337 5.90521 19.4547C5.5345 18.3712 5.33331 17.2091 5.33331 16C5.33331 14.8078 5.5289 13.6613 5.88974 12.5908Z" fill="currentColor"/> <path d="M8.17106 22.0852C7.82291 22.2862 7.72949 22.7486 7.99532 23.0502C9.51387 24.773 11.5799 26.0017 13.9213 26.4642C14.3146 26.5419 14.6666 26.2301 14.6666 25.8291V24.4792C14.6666 24.1536 14.4305 23.8786 14.114 23.8021C12.5981 23.4358 11.2506 22.6377 10.2091 21.5453C9.98474 21.31 9.62903 21.2435 9.34742 21.4061L8.17106 22.0852Z" fill="currentColor"/> <path d="M17.3333 25.8291C17.3333 26.2301 17.6857 26.5418 18.079 26.4641C22.9748 25.4969 26.6666 21.1796 26.6666 16C26.6666 10.8204 22.9748 6.50302 18.079 5.5358C17.6857 5.4581 17.3333 5.76987 17.3333 6.17079V7.57215C17.3333 7.89777 17.5697 8.17282 17.8862 8.24932C21.3942 9.09721 24 12.2572 24 16.0257C24 19.7942 21.3942 22.9542 17.8862 23.802C17.5697 23.8785 17.3333 24.1536 17.3333 24.4792V25.8291Z" fill="currentColor"/> <path d="M14.3961 10.4163C13.9561 10.0911 13.3333 10.4053 13.3333 10.9525L13.3333 21.0474C13.3333 21.5946 13.9561 21.9087 14.3962 21.5836L21.2273 16.5359C21.5879 16.2694 21.5879 15.73 21.2273 15.4635L14.3961 10.4163Z" fill="currentColor"/>', Ob = '<path d="M15.6038 12.2147C16.0439 12.5399 16.6667 12.2257 16.6667 11.6786V10.1789C16.6667 10.1001 16.7351 10.0384 16.8134 10.0479C20.1116 10.4494 22.6667 13.2593 22.6667 16.6659C22.6667 20.3481 19.6817 23.3332 15.9995 23.3332C12.542 23.3332 9.69927 20.7014 9.36509 17.332C9.32875 16.9655 9.03371 16.6662 8.66548 16.6662L6.66655 16.6666C6.29841 16.6666 5.99769 16.966 6.02187 17.3334C6.36494 22.5454 10.7012 26.6667 16 26.6667C21.5228 26.6667 26 22.1895 26 16.6667C26 11.4103 21.9444 7.10112 16.7916 6.69757C16.7216 6.69209 16.6667 6.63396 16.6667 6.56372V4.98824C16.6667 4.44106 16.0439 4.12689 15.6038 4.45206L11.0765 7.79738C10.7159 8.06387 10.7159 8.60326 11.0766 8.86973L15.6038 12.2147Z" fill="currentColor"/>', Db = '<path d="M16.6667 10.3452C16.6667 10.8924 16.0439 11.2066 15.6038 10.8814L11.0766 7.5364C10.7159 7.26993 10.7159 6.73054 11.0766 6.46405L15.6038 3.11873C16.0439 2.79356 16.6667 3.10773 16.6667 3.6549V5.22682C16.6667 5.29746 16.7223 5.35579 16.7927 5.36066C22.6821 5.76757 27.3333 10.674 27.3333 16.6667C27.3333 22.9259 22.2592 28 16 28C9.96483 28 5.03145 23.2827 4.68601 17.3341C4.66466 16.9665 4.96518 16.6673 5.33339 16.6673H7.3334C7.70157 16.6673 7.99714 16.9668 8.02743 17.3337C8.36638 21.4399 11.8064 24.6667 16 24.6667C20.4183 24.6667 24 21.085 24 16.6667C24 12.5225 20.8483 9.11428 16.8113 8.70739C16.7337 8.69957 16.6667 8.76096 16.6667 8.83893V10.3452Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0879 19.679C17.4553 19.9195 17.8928 20.0398 18.4004 20.0398C18.9099 20.0398 19.3474 19.9205 19.7129 19.6818C20.0803 19.4413 20.3635 19.0938 20.5623 18.6392C20.7612 18.1847 20.8606 17.6373 20.8606 16.9972C20.8625 16.3608 20.764 15.8192 20.5652 15.3722C20.3663 14.9252 20.0822 14.5853 19.7129 14.3523C19.3455 14.1175 18.908 14 18.4004 14C17.8928 14 17.4553 14.1175 17.0879 14.3523C16.7224 14.5853 16.4402 14.9252 16.2413 15.3722C16.0443 15.8173 15.9449 16.3589 15.943 16.9972C15.9411 17.6354 16.0396 18.1818 16.2385 18.6364C16.4373 19.089 16.7205 19.4366 17.0879 19.679ZM19.1362 18.4262C18.9487 18.7349 18.7034 18.8892 18.4004 18.8892C18.1996 18.8892 18.0226 18.8211 17.8691 18.6847C17.7157 18.5464 17.5964 18.3372 17.5112 18.0568C17.4279 17.7765 17.3871 17.4233 17.389 16.9972C17.3909 16.3684 17.4847 15.9025 17.6703 15.5995C17.8559 15.2945 18.0993 15.1421 18.4004 15.1421C18.603 15.1421 18.7801 15.2093 18.9316 15.3438C19.0832 15.4782 19.2015 15.6828 19.2868 15.9574C19.372 16.2301 19.4146 16.5767 19.4146 16.9972C19.4165 17.6392 19.3237 18.1156 19.1362 18.4262Z" fill="currentColor"/> <path d="M13.7746 19.8978C13.8482 19.8978 13.9079 19.8381 13.9079 19.7644V14.2129C13.9079 14.1393 13.8482 14.0796 13.7746 14.0796H12.642C12.6171 14.0796 12.5927 14.0865 12.5716 14.0997L11.2322 14.9325C11.1931 14.9568 11.1693 14.9996 11.1693 15.0457V15.9497C11.1693 16.0539 11.2833 16.1178 11.3722 16.0635L12.464 15.396C12.4682 15.3934 12.473 15.3921 12.4779 15.3921C12.4926 15.3921 12.5045 15.404 12.5045 15.4187V19.7644C12.5045 19.8381 12.5642 19.8978 12.6378 19.8978H13.7746Z" fill="currentColor"/>', _b = '<path d="M15.3333 10.3452C15.3333 10.8924 15.9561 11.2066 16.3962 10.8814L20.9234 7.5364C21.2841 7.26993 21.2841 6.73054 20.9235 6.46405L16.3962 3.11873C15.9561 2.79356 15.3333 3.10773 15.3333 3.6549V5.22682C15.3333 5.29746 15.2778 5.35579 15.2073 5.36066C9.31791 5.76757 4.66667 10.674 4.66667 16.6667C4.66667 22.9259 9.74078 28 16 28C22.0352 28 26.9686 23.2827 27.314 17.3341C27.3354 16.9665 27.0348 16.6673 26.6666 16.6673H24.6666C24.2984 16.6673 24.0029 16.9668 23.9726 17.3337C23.6336 21.4399 20.1937 24.6667 16 24.6667C11.5817 24.6667 8 21.085 8 16.6667C8 12.5225 11.1517 9.11428 15.1887 8.70739C15.2663 8.69957 15.3333 8.76096 15.3333 8.83893V10.3452Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0879 19.679C17.4553 19.9195 17.8928 20.0398 18.4004 20.0398C18.9099 20.0398 19.3474 19.9205 19.7129 19.6818C20.0803 19.4413 20.3635 19.0938 20.5623 18.6392C20.7612 18.1847 20.8606 17.6373 20.8606 16.9972C20.8625 16.3608 20.764 15.8192 20.5652 15.3722C20.3663 14.9252 20.0822 14.5853 19.7129 14.3523C19.3455 14.1175 18.908 14 18.4004 14C17.8928 14 17.4553 14.1175 17.0879 14.3523C16.7224 14.5853 16.4402 14.9252 16.2413 15.3722C16.0443 15.8173 15.9449 16.3589 15.943 16.9972C15.9411 17.6354 16.0396 18.1818 16.2385 18.6364C16.4373 19.089 16.7205 19.4366 17.0879 19.679ZM19.1362 18.4262C18.9487 18.7349 18.7034 18.8892 18.4004 18.8892C18.1996 18.8892 18.0225 18.8211 17.8691 18.6847C17.7157 18.5464 17.5964 18.3372 17.5112 18.0568C17.4278 17.7765 17.3871 17.4233 17.389 16.9972C17.3909 16.3684 17.4847 15.9025 17.6703 15.5995C17.8559 15.2945 18.0992 15.1421 18.4004 15.1421C18.603 15.1421 18.7801 15.2093 18.9316 15.3438C19.0831 15.4782 19.2015 15.6828 19.2867 15.9574C19.372 16.2301 19.4146 16.5767 19.4146 16.9972C19.4165 17.6392 19.3237 18.1156 19.1362 18.4262Z" fill="currentColor"/> <path d="M13.7746 19.8978C13.8482 19.8978 13.9079 19.8381 13.9079 19.7644V14.2129C13.9079 14.1393 13.8482 14.0796 13.7746 14.0796H12.642C12.6171 14.0796 12.5927 14.0865 12.5716 14.0997L11.2322 14.9325C11.1931 14.9568 11.1693 14.9996 11.1693 15.0457V15.9497C11.1693 16.0539 11.2833 16.1178 11.3722 16.0635L12.464 15.396C12.4682 15.3934 12.473 15.3921 12.4779 15.3921C12.4926 15.3921 12.5045 15.404 12.5045 15.4187V19.7644C12.5045 19.8381 12.5642 19.8978 12.6378 19.8978H13.7746Z" fill="currentColor"/>', Fb = '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5722 5.33333C13.2429 5.33333 12.9629 5.57382 12.9132 5.89938L12.4063 9.21916C12.4 9.26058 12.3746 9.29655 12.3378 9.31672C12.2387 9.37118 12.1409 9.42779 12.0444 9.48648C12.0086 9.5083 11.9646 9.51242 11.9255 9.49718L8.79572 8.27692C8.48896 8.15732 8.14083 8.27958 7.9762 8.56472L5.5491 12.7686C5.38444 13.0538 5.45271 13.4165 5.70981 13.6223L8.33308 15.7225C8.3658 15.7487 8.38422 15.7887 8.38331 15.8306C8.38209 15.8867 8.38148 15.9429 8.38148 15.9993C8.38148 16.0558 8.3821 16.1121 8.38332 16.1684C8.38423 16.2102 8.36582 16.2503 8.33313 16.2765L5.7103 18.3778C5.45334 18.5836 5.38515 18.9462 5.54978 19.2314L7.97688 23.4352C8.14155 23.7205 8.48981 23.8427 8.79661 23.723L11.926 22.5016C11.9651 22.4864 12.009 22.4905 12.0449 22.5123C12.1412 22.5709 12.2388 22.6274 12.3378 22.6818C12.3745 22.7019 12.4 22.7379 12.4063 22.7793L12.9132 26.0993C12.9629 26.4249 13.2429 26.6654 13.5722 26.6654H18.4264C18.7556 26.6654 19.0356 26.425 19.0854 26.0995L19.5933 22.7801C19.5997 22.7386 19.6252 22.7027 19.6619 22.6825C19.7614 22.6279 19.8596 22.5711 19.9564 22.5121C19.9923 22.4903 20.0362 22.4862 20.0754 22.5015L23.2035 23.7223C23.5103 23.842 23.8585 23.7198 24.0232 23.4346L26.4503 19.2307C26.6149 18.9456 26.5467 18.583 26.2898 18.3771L23.6679 16.2766C23.6352 16.2504 23.6168 16.2104 23.6177 16.1685C23.619 16.1122 23.6196 16.0558 23.6196 15.9993C23.6196 15.9429 23.619 15.8866 23.6177 15.8305C23.6168 15.7886 23.6353 15.7486 23.668 15.7224L26.2903 13.623C26.5474 13.4172 26.6156 13.0544 26.451 12.7692L24.0239 8.56537C23.8592 8.28023 23.5111 8.15797 23.2043 8.27757L20.0758 9.49734C20.0367 9.51258 19.9927 9.50846 19.9569 9.48664C19.8599 9.42762 19.7616 9.37071 19.6618 9.31596C19.6251 9.2958 19.5997 9.25984 19.5933 9.21843L19.0854 5.89915C19.0356 5.57369 18.7556 5.33333 18.4264 5.33333H13.5722ZM16.0001 20.2854C18.3672 20.2854 20.2862 18.3664 20.2862 15.9993C20.2862 13.6322 18.3672 11.7132 16.0001 11.7132C13.6329 11.7132 11.714 13.6322 11.714 15.9993C11.714 18.3664 13.6329 20.2854 16.0001 20.2854Z" fill="currentColor"/>', jb = '<path d="M17.5091 24.6595C17.5091 25.2066 16.8864 25.5208 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9992 9.36923 19.9992H4.66667C4.29848 19.9992 4 19.7007 4 19.3325V12.6658C4 12.2976 4.29848 11.9992 4.66667 11.9992H9.37115C9.39967 11.9992 9.42745 11.99 9.45039 11.9731L16.4463 6.80363C16.8863 6.47845 17.5091 6.79262 17.5091 7.3398L17.5091 24.6595Z" fill="currentColor"/> <path d="M27.5091 9.33336C27.8773 9.33336 28.1758 9.63184 28.1758 10V22C28.1758 22.3682 27.8773 22.6667 27.5091 22.6667H26.1758C25.8076 22.6667 25.5091 22.3682 25.5091 22V10C25.5091 9.63184 25.8076 9.33336 26.1758 9.33336L27.5091 9.33336Z" fill="currentColor"/> <path d="M22.1758 12C22.544 12 22.8424 12.2985 22.8424 12.6667V19.3334C22.8424 19.7016 22.544 20 22.1758 20H20.8424C20.4743 20 20.1758 19.7016 20.1758 19.3334V12.6667C20.1758 12.2985 20.4743 12 20.8424 12H22.1758Z" fill="currentColor"/>', qb = '<path d="M17.5091 24.6594C17.5091 25.2066 16.8864 25.5207 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9991 9.36923 19.9991H4.66667C4.29848 19.9991 4 19.7006 4 19.3324V12.6658C4 12.2976 4.29848 11.9991 4.66667 11.9991H9.37115C9.39967 11.9991 9.42745 11.99 9.45039 11.973L16.4463 6.80358C16.8863 6.4784 17.5091 6.79258 17.5091 7.33975L17.5091 24.6594Z" fill="currentColor"/> <path d="M22.8424 12.6667C22.8424 12.2985 22.544 12 22.1758 12H20.8424C20.4743 12 20.1758 12.2985 20.1758 12.6667V19.3333C20.1758 19.7015 20.4743 20 20.8424 20H22.1758C22.544 20 22.8424 19.7015 22.8424 19.3333V12.6667Z" fill="currentColor"/>';
const Zb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: Ce,
  DOMEvent: $e,
  EventsController: Ne,
  EventsTarget: B9,
  Icon$0: hb,
  Icon$104: jb,
  Icon$105: qb,
  Icon$11: Cb,
  Icon$13: mb,
  Icon$16: gb,
  Icon$19: yb,
  Icon$22: vb,
  Icon$24: O5,
  Icon$26: wb,
  Icon$27: xb,
  Icon$31: Sb,
  Icon$33: Eb,
  Icon$34: $b,
  Icon$35: Tb,
  Icon$39: Pb,
  Icon$40: Lb,
  Icon$5: fb,
  Icon$53: kb,
  Icon$54: Mb,
  Icon$56: Ib,
  Icon$59: Vb,
  Icon$60: Ab,
  Icon$61: Rb,
  Icon$62: Nb,
  Icon$63: Hb,
  Icon$74: Ob,
  Icon$77: Db,
  Icon$8: pb,
  Icon$81: _b,
  Icon$88: Fb,
  State: Pi,
  ViewController: Sn,
  animationFrameThrottle: N1,
  appendTriggerEvent: Ov,
  ariaBool: Go,
  camelToKebabCase: F2,
  chromecast: bb,
  composeRefs: Oe,
  computed: vr,
  createContext: Ti,
  createDisposalBin: ob,
  createReactComponent: ge,
  createScope: oo,
  deferredPromise: e2,
  effect: T,
  findTriggerEvent: b5,
  fscreen: gr,
  functionDebounce: j2,
  functionThrottle: kr,
  getScope: J3,
  hasProvidedContext: Ts,
  hasTriggerEvent: Hv,
  isArray: Vt,
  isBoolean: Iv,
  isDOMNode: S5,
  isFunction: sn,
  isKeyboardClick: G9,
  isKeyboardEvent: ta,
  isMouseEvent: w5,
  isNil: g5,
  isNull: es,
  isNumber: tn,
  isObject: y5,
  isPointerEvent: nl,
  isString: ce,
  isTouchEvent: jo,
  isUndefined: vt,
  isWriteSignal: m5,
  kebabToCamelCase: W9,
  keysOf: ab,
  listenEvent: Xe,
  method: mt,
  noop: gn,
  onDispose: pe,
  peek: _,
  prop: Re,
  provideContext: vn,
  r: H5,
  scoped: Gt,
  setAttribute: ie,
  setStyle: Wt,
  signal: re,
  tick: Jn,
  toggleClass: _v,
  untrack: io,
  uppercaseFirstChar: U9,
  useContext: rt,
  useReactContext: K9,
  useReactScope: M5,
  useSignal: et,
  useSignalRecord: N5,
  useState: po,
  useStateContext: R1,
  waitIdlePeriod: R5,
  waitTimeout: A5,
  walkTriggerEventChain: Nv,
  wasEnterKeyPressed: x5
}, Symbol.toStringTag, { value: "Module" })), Bb = ["top", "right", "bottom", "left"], br = Math.min, pn = Math.max, t2 = Math.round, ha = Math.floor, Ss = (n) => ({
  x: n,
  y: n
}), Gb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Wb = {
  start: "end",
  end: "start"
};
function sl(n, t, e) {
  return pn(n, br(t, e));
}
function vi(n, t) {
  return typeof n == "function" ? n(t) : n;
}
function bi(n) {
  return n.split("-")[0];
}
function Co(n) {
  return n.split("-")[1];
}
function z9(n) {
  return n === "x" ? "y" : "x";
}
function Y9(n) {
  return n === "y" ? "height" : "width";
}
function wr(n) {
  return ["top", "bottom"].includes(bi(n)) ? "y" : "x";
}
function Q9(n) {
  return z9(wr(n));
}
function Ub(n, t, e) {
  e === void 0 && (e = !1);
  const s = Co(n), i = Q9(n), o = Y9(i);
  let a = i === "x" ? s === (e ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (a = n2(a)), [a, n2(a)];
}
function Kb(n) {
  const t = n2(n);
  return [il(n), t, il(t)];
}
function il(n) {
  return n.replace(/start|end/g, (t) => Wb[t]);
}
function zb(n, t, e) {
  const s = ["left", "right"], i = ["right", "left"], o = ["top", "bottom"], a = ["bottom", "top"];
  switch (n) {
    case "top":
    case "bottom":
      return e ? t ? i : s : t ? s : i;
    case "left":
    case "right":
      return t ? o : a;
    default:
      return [];
  }
}
function Yb(n, t, e, s) {
  const i = Co(n);
  let o = zb(bi(n), e === "start", s);
  return i && (o = o.map((a) => a + "-" + i), t && (o = o.concat(o.map(il)))), o;
}
function n2(n) {
  return n.replace(/left|right|bottom|top/g, (t) => Gb[t]);
}
function Qb(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function D5(n) {
  return typeof n != "number" ? Qb(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function s2(n) {
  const {
    x: t,
    y: e,
    width: s,
    height: i
  } = n;
  return {
    width: s,
    height: i,
    top: e,
    left: t,
    right: t + s,
    bottom: e + i,
    x: t,
    y: e
  };
}
function ad(n, t, e) {
  let {
    reference: s,
    floating: i
  } = n;
  const o = wr(t), a = Q9(t), l = Y9(a), d = bi(t), h = o === "y", p = s.x + s.width / 2 - i.width / 2, f = s.y + s.height / 2 - i.height / 2, m = s[l] / 2 - i[l] / 2;
  let y;
  switch (d) {
    case "top":
      y = {
        x: p,
        y: s.y - i.height
      };
      break;
    case "bottom":
      y = {
        x: p,
        y: s.y + s.height
      };
      break;
    case "right":
      y = {
        x: s.x + s.width,
        y: f
      };
      break;
    case "left":
      y = {
        x: s.x - i.width,
        y: f
      };
      break;
    default:
      y = {
        x: s.x,
        y: s.y
      };
  }
  switch (Co(t)) {
    case "start":
      y[a] -= m * (e && h ? -1 : 1);
      break;
    case "end":
      y[a] += m * (e && h ? -1 : 1);
      break;
  }
  return y;
}
const Xb = async (n, t, e) => {
  const {
    placement: s = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: a
  } = e, l = o.filter(Boolean), d = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let h = await a.getElementRects({
    reference: n,
    floating: t,
    strategy: i
  }), {
    x: p,
    y: f
  } = ad(h, s, d), m = s, y = {}, v = 0;
  for (let b = 0; b < l.length; b++) {
    const {
      name: S,
      fn: E
    } = l[b], {
      x: P,
      y: I,
      data: M,
      reset: D
    } = await E({
      x: p,
      y: f,
      initialPlacement: s,
      placement: m,
      strategy: i,
      middlewareData: y,
      rects: h,
      platform: a,
      elements: {
        reference: n,
        floating: t
      }
    });
    p = P ?? p, f = I ?? f, y = {
      ...y,
      [S]: {
        ...y[S],
        ...M
      }
    }, D && v <= 50 && (v++, typeof D == "object" && (D.placement && (m = D.placement), D.rects && (h = D.rects === !0 ? await a.getElementRects({
      reference: n,
      floating: t,
      strategy: i
    }) : D.rects), {
      x: p,
      y: f
    } = ad(h, m, d)), b = -1);
  }
  return {
    x: p,
    y: f,
    placement: m,
    strategy: i,
    middlewareData: y
  };
};
async function Wo(n, t) {
  var e;
  t === void 0 && (t = {});
  const {
    x: s,
    y: i,
    platform: o,
    rects: a,
    elements: l,
    strategy: d
  } = n, {
    boundary: h = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: y = 0
  } = vi(t, n), v = D5(y), S = l[m ? f === "floating" ? "reference" : "floating" : f], E = s2(await o.getClippingRect({
    element: (e = await (o.isElement == null ? void 0 : o.isElement(S))) == null || e ? S : S.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)),
    boundary: h,
    rootBoundary: p,
    strategy: d
  })), P = f === "floating" ? {
    x: s,
    y: i,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, I = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), M = await (o.isElement == null ? void 0 : o.isElement(I)) ? await (o.getScale == null ? void 0 : o.getScale(I)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, D = s2(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: P,
    offsetParent: I,
    strategy: d
  }) : P);
  return {
    top: (E.top - D.top + v.top) / M.y,
    bottom: (D.bottom - E.bottom + v.bottom) / M.y,
    left: (E.left - D.left + v.left) / M.x,
    right: (D.right - E.right + v.right) / M.x
  };
}
const Jb = (n) => ({
  name: "arrow",
  options: n,
  async fn(t) {
    const {
      x: e,
      y: s,
      placement: i,
      rects: o,
      platform: a,
      elements: l,
      middlewareData: d
    } = t, {
      element: h,
      padding: p = 0
    } = vi(n, t) || {};
    if (h == null)
      return {};
    const f = D5(p), m = {
      x: e,
      y: s
    }, y = Q9(i), v = Y9(y), b = await a.getDimensions(h), S = y === "y", E = S ? "top" : "left", P = S ? "bottom" : "right", I = S ? "clientHeight" : "clientWidth", M = o.reference[v] + o.reference[y] - m[y] - o.floating[v], D = m[y] - o.reference[y], B = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(h));
    let F = B ? B[I] : 0;
    (!F || !await (a.isElement == null ? void 0 : a.isElement(B))) && (F = l.floating[I] || o.floating[v]);
    const k = M / 2 - D / 2, Q = F / 2 - b[v] / 2 - 1, X = br(f[E], Q), ae = br(f[P], Q), me = X, Y = F - b[v] - ae, J = F / 2 - b[v] / 2 + k, Ee = sl(me, J, Y), G = !d.arrow && Co(i) != null && J !== Ee && o.reference[v] / 2 - (J < me ? X : ae) - b[v] / 2 < 0, U = G ? J < me ? J - me : J - Y : 0;
    return {
      [y]: m[y] + U,
      data: {
        [y]: Ee,
        centerOffset: J - Ee - U,
        ...G && {
          alignmentOffset: U
        }
      },
      reset: G
    };
  }
}), ew = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(t) {
      var e, s;
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
        ...S
      } = vi(n, t);
      if ((e = o.arrow) != null && e.alignmentOffset)
        return {};
      const E = bi(i), P = wr(l), I = bi(l) === l, M = await (d.isRTL == null ? void 0 : d.isRTL(h.floating)), D = m || (I || !b ? [n2(l)] : Kb(l)), B = v !== "none";
      !m && B && D.push(...Yb(l, b, v, M));
      const F = [l, ...D], k = await Wo(t, S), Q = [];
      let X = ((s = o.flip) == null ? void 0 : s.overflows) || [];
      if (p && Q.push(k[E]), f) {
        const J = Ub(i, a, M);
        Q.push(k[J[0]], k[J[1]]);
      }
      if (X = [...X, {
        placement: i,
        overflows: Q
      }], !Q.every((J) => J <= 0)) {
        var ae, me;
        const J = (((ae = o.flip) == null ? void 0 : ae.index) || 0) + 1, Ee = F[J];
        if (Ee)
          return {
            data: {
              index: J,
              overflows: X
            },
            reset: {
              placement: Ee
            }
          };
        let G = (me = X.filter((U) => U.overflows[0] <= 0).sort((U, K) => U.overflows[1] - K.overflows[1])[0]) == null ? void 0 : me.placement;
        if (!G)
          switch (y) {
            case "bestFit": {
              var Y;
              const U = (Y = X.filter((K) => {
                if (B) {
                  const q = wr(K.placement);
                  return q === P || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  q === "y";
                }
                return !0;
              }).map((K) => [K.placement, K.overflows.filter((q) => q > 0).reduce((q, xe) => q + xe, 0)]).sort((K, q) => K[1] - q[1])[0]) == null ? void 0 : Y[0];
              U && (G = U);
              break;
            }
            case "initialPlacement":
              G = l;
              break;
          }
        if (i !== G)
          return {
            reset: {
              placement: G
            }
          };
      }
      return {};
    }
  };
};
function cd(n, t) {
  return {
    top: n.top - t.height,
    right: n.right - t.width,
    bottom: n.bottom - t.height,
    left: n.left - t.width
  };
}
function ld(n) {
  return Bb.some((t) => n[t] >= 0);
}
const tw = function(n) {
  return n === void 0 && (n = {}), {
    name: "hide",
    options: n,
    async fn(t) {
      const {
        rects: e
      } = t, {
        strategy: s = "referenceHidden",
        ...i
      } = vi(n, t);
      switch (s) {
        case "referenceHidden": {
          const o = await Wo(t, {
            ...i,
            elementContext: "reference"
          }), a = cd(o, e.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: ld(a)
            }
          };
        }
        case "escaped": {
          const o = await Wo(t, {
            ...i,
            altBoundary: !0
          }), a = cd(o, e.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: ld(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function nw(n, t) {
  const {
    placement: e,
    platform: s,
    elements: i
  } = n, o = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), a = bi(e), l = Co(e), d = wr(e) === "y", h = ["left", "top"].includes(a) ? -1 : 1, p = o && d ? -1 : 1, f = vi(t, n);
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
const sw = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(t) {
      var e, s;
      const {
        x: i,
        y: o,
        placement: a,
        middlewareData: l
      } = t, d = await nw(t, n);
      return a === ((e = l.offset) == null ? void 0 : e.placement) && (s = l.arrow) != null && s.alignmentOffset ? {} : {
        x: i + d.x,
        y: o + d.y,
        data: {
          ...d,
          placement: a
        }
      };
    }
  };
}, iw = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(t) {
      const {
        x: e,
        y: s,
        placement: i
      } = t, {
        mainAxis: o = !0,
        crossAxis: a = !1,
        limiter: l = {
          fn: (S) => {
            let {
              x: E,
              y: P
            } = S;
            return {
              x: E,
              y: P
            };
          }
        },
        ...d
      } = vi(n, t), h = {
        x: e,
        y: s
      }, p = await Wo(t, d), f = wr(bi(i)), m = z9(f);
      let y = h[m], v = h[f];
      if (o) {
        const S = m === "y" ? "top" : "left", E = m === "y" ? "bottom" : "right", P = y + p[S], I = y - p[E];
        y = sl(P, y, I);
      }
      if (a) {
        const S = f === "y" ? "top" : "left", E = f === "y" ? "bottom" : "right", P = v + p[S], I = v - p[E];
        v = sl(P, v, I);
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
          y: b.y - s,
          enabled: {
            [m]: o,
            [f]: a
          }
        }
      };
    }
  };
}, rw = function(n) {
  return n === void 0 && (n = {}), {
    options: n,
    fn(t) {
      const {
        x: e,
        y: s,
        placement: i,
        rects: o,
        middlewareData: a
      } = t, {
        offset: l = 0,
        mainAxis: d = !0,
        crossAxis: h = !0
      } = vi(n, t), p = {
        x: e,
        y: s
      }, f = wr(i), m = z9(f);
      let y = p[m], v = p[f];
      const b = vi(l, t), S = typeof b == "number" ? {
        mainAxis: b,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...b
      };
      if (d) {
        const I = m === "y" ? "height" : "width", M = o.reference[m] - o.floating[I] + S.mainAxis, D = o.reference[m] + o.reference[I] - S.mainAxis;
        y < M ? y = M : y > D && (y = D);
      }
      if (h) {
        var E, P;
        const I = m === "y" ? "width" : "height", M = ["top", "left"].includes(bi(i)), D = o.reference[f] - o.floating[I] + (M && ((E = a.offset) == null ? void 0 : E[f]) || 0) + (M ? 0 : S.crossAxis), B = o.reference[f] + o.reference[I] + (M ? 0 : ((P = a.offset) == null ? void 0 : P[f]) || 0) - (M ? S.crossAxis : 0);
        v < D ? v = D : v > B && (v = B);
      }
      return {
        [m]: y,
        [f]: v
      };
    }
  };
}, ow = function(n) {
  return n === void 0 && (n = {}), {
    name: "size",
    options: n,
    async fn(t) {
      var e, s;
      const {
        placement: i,
        rects: o,
        platform: a,
        elements: l
      } = t, {
        apply: d = () => {
        },
        ...h
      } = vi(n, t), p = await Wo(t, h), f = bi(i), m = Co(i), y = wr(i) === "y", {
        width: v,
        height: b
      } = o.floating;
      let S, E;
      f === "top" || f === "bottom" ? (S = f, E = m === (await (a.isRTL == null ? void 0 : a.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (E = f, S = m === "end" ? "top" : "bottom");
      const P = b - p.top - p.bottom, I = v - p.left - p.right, M = br(b - p[S], P), D = br(v - p[E], I), B = !t.middlewareData.shift;
      let F = M, k = D;
      if ((e = t.middlewareData.shift) != null && e.enabled.x && (k = I), (s = t.middlewareData.shift) != null && s.enabled.y && (F = P), B && !m) {
        const X = pn(p.left, 0), ae = pn(p.right, 0), me = pn(p.top, 0), Y = pn(p.bottom, 0);
        y ? k = v - 2 * (X !== 0 || ae !== 0 ? X + ae : pn(p.left, p.right)) : F = b - 2 * (me !== 0 || Y !== 0 ? me + Y : pn(p.top, p.bottom));
      }
      await d({
        ...t,
        availableWidth: k,
        availableHeight: F
      });
      const Q = await a.getDimensions(l.floating);
      return v !== Q.width || b !== Q.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function q2() {
  return typeof window < "u";
}
function mo(n) {
  return _5(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function yn(n) {
  var t;
  return (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ds(n) {
  var t;
  return (t = (_5(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : t.documentElement;
}
function _5(n) {
  return q2() ? n instanceof Node || n instanceof yn(n).Node : !1;
}
function ss(n) {
  return q2() ? n instanceof Element || n instanceof yn(n).Element : !1;
}
function Ps(n) {
  return q2() ? n instanceof HTMLElement || n instanceof yn(n).HTMLElement : !1;
}
function ud(n) {
  return !q2() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof yn(n).ShadowRoot;
}
function sa(n) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: s,
    display: i
  } = is(n);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + e) && !["inline", "contents"].includes(i);
}
function aw(n) {
  return ["table", "td", "th"].includes(mo(n));
}
function Z2(n) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return n.matches(t);
    } catch {
      return !1;
    }
  });
}
function X9(n) {
  const t = J9(), e = ss(n) ? is(n) : n;
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((s) => (e.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (e.contain || "").includes(s));
}
function cw(n) {
  let t = xr(n);
  for (; Ps(t) && !ao(t); ) {
    if (X9(t))
      return t;
    if (Z2(t))
      return null;
    t = xr(t);
  }
  return null;
}
function J9() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ao(n) {
  return ["html", "body", "#document"].includes(mo(n));
}
function is(n) {
  return yn(n).getComputedStyle(n);
}
function B2(n) {
  return ss(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function xr(n) {
  if (mo(n) === "html")
    return n;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    ud(n) && n.host || // Fallback.
    Ds(n)
  );
  return ud(t) ? t.host : t;
}
function F5(n) {
  const t = xr(n);
  return ao(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : Ps(t) && sa(t) ? t : F5(t);
}
function Uo(n, t, e) {
  var s;
  t === void 0 && (t = []), e === void 0 && (e = !0);
  const i = F5(n), o = i === ((s = n.ownerDocument) == null ? void 0 : s.body), a = yn(i);
  if (o) {
    const l = rl(a);
    return t.concat(a, a.visualViewport || [], sa(i) ? i : [], l && e ? Uo(l) : []);
  }
  return t.concat(i, Uo(i, [], e));
}
function rl(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function j5(n) {
  const t = is(n);
  let e = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = Ps(n), o = i ? n.offsetWidth : e, a = i ? n.offsetHeight : s, l = t2(e) !== o || t2(s) !== a;
  return l && (e = o, s = a), {
    width: e,
    height: s,
    $: l
  };
}
function e7(n) {
  return ss(n) ? n : n.contextElement;
}
function z1(n) {
  const t = e7(n);
  if (!Ps(t))
    return Ss(1);
  const e = t.getBoundingClientRect(), {
    width: s,
    height: i,
    $: o
  } = j5(t);
  let a = (o ? t2(e.width) : e.width) / s, l = (o ? t2(e.height) : e.height) / i;
  return (!a || !Number.isFinite(a)) && (a = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: a,
    y: l
  };
}
const lw = /* @__PURE__ */ Ss(0);
function q5(n) {
  const t = yn(n);
  return !J9() || !t.visualViewport ? lw : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function uw(n, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== yn(n) ? !1 : t;
}
function T1(n, t, e, s) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = n.getBoundingClientRect(), o = e7(n);
  let a = Ss(1);
  t && (s ? ss(s) && (a = z1(s)) : a = z1(n));
  const l = uw(o, e, s) ? q5(o) : Ss(0);
  let d = (i.left + l.x) / a.x, h = (i.top + l.y) / a.y, p = i.width / a.x, f = i.height / a.y;
  if (o) {
    const m = yn(o), y = s && ss(s) ? yn(s) : s;
    let v = m, b = rl(v);
    for (; b && s && y !== v; ) {
      const S = z1(b), E = b.getBoundingClientRect(), P = is(b), I = E.left + (b.clientLeft + parseFloat(P.paddingLeft)) * S.x, M = E.top + (b.clientTop + parseFloat(P.paddingTop)) * S.y;
      d *= S.x, h *= S.y, p *= S.x, f *= S.y, d += I, h += M, v = yn(b), b = rl(v);
    }
  }
  return s2({
    width: p,
    height: f,
    x: d,
    y: h
  });
}
function t7(n, t) {
  const e = B2(n).scrollLeft;
  return t ? t.left + e : T1(Ds(n)).left + e;
}
function Z5(n, t, e) {
  e === void 0 && (e = !1);
  const s = n.getBoundingClientRect(), i = s.left + t.scrollLeft - (e ? 0 : (
    // RTL <body> scrollbar.
    t7(n, s)
  )), o = s.top + t.scrollTop;
  return {
    x: i,
    y: o
  };
}
function dw(n) {
  let {
    elements: t,
    rect: e,
    offsetParent: s,
    strategy: i
  } = n;
  const o = i === "fixed", a = Ds(s), l = t ? Z2(t.floating) : !1;
  if (s === a || l && o)
    return e;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = Ss(1);
  const p = Ss(0), f = Ps(s);
  if ((f || !f && !o) && ((mo(s) !== "body" || sa(a)) && (d = B2(s)), Ps(s))) {
    const y = T1(s);
    h = z1(s), p.x = y.x + s.clientLeft, p.y = y.y + s.clientTop;
  }
  const m = a && !f && !o ? Z5(a, d, !0) : Ss(0);
  return {
    width: e.width * h.x,
    height: e.height * h.y,
    x: e.x * h.x - d.scrollLeft * h.x + p.x + m.x,
    y: e.y * h.y - d.scrollTop * h.y + p.y + m.y
  };
}
function hw(n) {
  return Array.from(n.getClientRects());
}
function fw(n) {
  const t = Ds(n), e = B2(n), s = n.ownerDocument.body, i = pn(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth), o = pn(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
  let a = -e.scrollLeft + t7(n);
  const l = -e.scrollTop;
  return is(s).direction === "rtl" && (a += pn(t.clientWidth, s.clientWidth) - i), {
    width: i,
    height: o,
    x: a,
    y: l
  };
}
function pw(n, t) {
  const e = yn(n), s = Ds(n), i = e.visualViewport;
  let o = s.clientWidth, a = s.clientHeight, l = 0, d = 0;
  if (i) {
    o = i.width, a = i.height;
    const h = J9();
    (!h || h && t === "fixed") && (l = i.offsetLeft, d = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: l,
    y: d
  };
}
function Cw(n, t) {
  const e = T1(n, !0, t === "fixed"), s = e.top + n.clientTop, i = e.left + n.clientLeft, o = Ps(n) ? z1(n) : Ss(1), a = n.clientWidth * o.x, l = n.clientHeight * o.y, d = i * o.x, h = s * o.y;
  return {
    width: a,
    height: l,
    x: d,
    y: h
  };
}
function dd(n, t, e) {
  let s;
  if (t === "viewport")
    s = pw(n, e);
  else if (t === "document")
    s = fw(Ds(n));
  else if (ss(t))
    s = Cw(t, e);
  else {
    const i = q5(n);
    s = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return s2(s);
}
function B5(n, t) {
  const e = xr(n);
  return e === t || !ss(e) || ao(e) ? !1 : is(e).position === "fixed" || B5(e, t);
}
function mw(n, t) {
  const e = t.get(n);
  if (e)
    return e;
  let s = Uo(n, [], !1).filter((l) => ss(l) && mo(l) !== "body"), i = null;
  const o = is(n).position === "fixed";
  let a = o ? xr(n) : n;
  for (; ss(a) && !ao(a); ) {
    const l = is(a), d = X9(a);
    !d && l.position === "fixed" && (i = null), (o ? !d && !i : !d && l.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || sa(a) && !d && B5(n, a)) ? s = s.filter((p) => p !== a) : i = l, a = xr(a);
  }
  return t.set(n, s), s;
}
function gw(n) {
  let {
    element: t,
    boundary: e,
    rootBoundary: s,
    strategy: i
  } = n;
  const a = [...e === "clippingAncestors" ? Z2(t) ? [] : mw(t, this._c) : [].concat(e), s], l = a[0], d = a.reduce((h, p) => {
    const f = dd(t, p, i);
    return h.top = pn(f.top, h.top), h.right = br(f.right, h.right), h.bottom = br(f.bottom, h.bottom), h.left = pn(f.left, h.left), h;
  }, dd(t, l, i));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function yw(n) {
  const {
    width: t,
    height: e
  } = j5(n);
  return {
    width: t,
    height: e
  };
}
function vw(n, t, e) {
  const s = Ps(t), i = Ds(t), o = e === "fixed", a = T1(n, !0, o, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = Ss(0);
  if (s || !s && !o)
    if ((mo(t) !== "body" || sa(i)) && (l = B2(t)), s) {
      const m = T1(t, !0, o, t);
      d.x = m.x + t.clientLeft, d.y = m.y + t.clientTop;
    } else i && (d.x = t7(i));
  const h = i && !s && !o ? Z5(i, l) : Ss(0), p = a.left + l.scrollLeft - d.x - h.x, f = a.top + l.scrollTop - d.y - h.y;
  return {
    x: p,
    y: f,
    width: a.width,
    height: a.height
  };
}
function vc(n) {
  return is(n).position === "static";
}
function hd(n, t) {
  if (!Ps(n) || is(n).position === "fixed")
    return null;
  if (t)
    return t(n);
  let e = n.offsetParent;
  return Ds(n) === e && (e = e.ownerDocument.body), e;
}
function G5(n, t) {
  const e = yn(n);
  if (Z2(n))
    return e;
  if (!Ps(n)) {
    let i = xr(n);
    for (; i && !ao(i); ) {
      if (ss(i) && !vc(i))
        return i;
      i = xr(i);
    }
    return e;
  }
  let s = hd(n, t);
  for (; s && aw(s) && vc(s); )
    s = hd(s, t);
  return s && ao(s) && vc(s) && !X9(s) ? e : s || cw(n) || e;
}
const bw = async function(n) {
  const t = this.getOffsetParent || G5, e = this.getDimensions, s = await e(n.floating);
  return {
    reference: vw(n.reference, await t(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function ww(n) {
  return is(n).direction === "rtl";
}
const xw = {
  convertOffsetParentRelativeRectToViewportRelativeRect: dw,
  getDocumentElement: Ds,
  getClippingRect: gw,
  getOffsetParent: G5,
  getElementRects: bw,
  getClientRects: hw,
  getDimensions: yw,
  getScale: z1,
  isElement: ss,
  isRTL: ww
};
function Sw(n, t) {
  let e = null, s;
  const i = Ds(n);
  function o() {
    var l;
    clearTimeout(s), (l = e) == null || l.disconnect(), e = null;
  }
  function a(l, d) {
    l === void 0 && (l = !1), d === void 0 && (d = 1), o();
    const {
      left: h,
      top: p,
      width: f,
      height: m
    } = n.getBoundingClientRect();
    if (l || t(), !f || !m)
      return;
    const y = ha(p), v = ha(i.clientWidth - (h + f)), b = ha(i.clientHeight - (p + m)), S = ha(h), P = {
      rootMargin: -y + "px " + -v + "px " + -b + "px " + -S + "px",
      threshold: pn(0, br(1, d)) || 1
    };
    let I = !0;
    function M(D) {
      const B = D[0].intersectionRatio;
      if (B !== d) {
        if (!I)
          return a();
        B ? a(!1, B) : s = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      I = !1;
    }
    try {
      e = new IntersectionObserver(M, {
        ...P,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(M, P);
    }
    e.observe(n);
  }
  return a(!0), o;
}
function W5(n, t, e, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = s, h = e7(n), p = i || o ? [...h ? Uo(h) : [], ...Uo(t)] : [];
  p.forEach((E) => {
    i && E.addEventListener("scroll", e, {
      passive: !0
    }), o && E.addEventListener("resize", e);
  });
  const f = h && l ? Sw(h, e) : null;
  let m = -1, y = null;
  a && (y = new ResizeObserver((E) => {
    let [P] = E;
    P && P.target === h && y && (y.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var I;
      (I = y) == null || I.observe(t);
    })), e();
  }), h && !d && y.observe(h), y.observe(t));
  let v, b = d ? T1(n) : null;
  d && S();
  function S() {
    const E = T1(n);
    b && (E.x !== b.x || E.y !== b.y || E.width !== b.width || E.height !== b.height) && e(), b = E, v = requestAnimationFrame(S);
  }
  return e(), () => {
    var E;
    p.forEach((P) => {
      i && P.removeEventListener("scroll", e), o && P.removeEventListener("resize", e);
    }), f == null || f(), (E = y) == null || E.disconnect(), y = null, d && cancelAnimationFrame(v);
  };
}
const Ew = sw, U5 = iw, K5 = ew, $w = ow, Tw = tw, fd = Jb, Pw = rw, z5 = (n, t, e) => {
  const s = /* @__PURE__ */ new Map(), i = {
    platform: xw,
    ...e
  }, o = {
    ...i.platform,
    _c: s
  };
  return Xb(n, t, {
    ...i,
    platform: o
  });
};
function ol(n) {
  return !ce(n) && "width" in n && "height" in n && tn(n.width) && tn(n.height);
}
const W = typeof document > "u", Lw = W ? "" : (navigator == null ? void 0 : navigator.userAgent.toLowerCase()) || "", n7 = !W && /iphone|ipad|ipod|ios|crios|fxios/i.test(Lw), Y5 = !W && /(iphone|ipod)/gi.test((navigator == null ? void 0 : navigator.platform) || ""), Q5 = !W && !!window.chrome, i2 = !W && (!!window.safari || n7);
function X5() {
  return kw() && sn(screen.orientation.unlock);
}
function kw() {
  return !W && !vt(window.screen.orientation) && !vt(window.screen.orientation.lock);
}
function J5(n, t) {
  return W ? !1 : (n || (n = document.createElement("audio")), n.canPlayType(t).length > 0);
}
function e4(n, t) {
  return W ? !1 : (n || (n = document.createElement("video")), n.canPlayType(t).length > 0);
}
function t4(n) {
  return W ? !1 : (n || (n = document.createElement("video")), n.canPlayType("application/vnd.apple.mpegurl").length > 0);
}
function n4(n) {
  return W ? !1 : !!document.pictureInPictureEnabled && !(n != null && n.disablePictureInPicture);
}
function s4(n) {
  return W ? !1 : sn(n == null ? void 0 : n.webkitSupportsPresentationMode) && sn(n == null ? void 0 : n.webkitSetPresentationMode);
}
async function Mw() {
  const n = document.createElement("video");
  return n.volume = 0.5, await A5(0), n.volume === 0.5;
}
function Iw() {
  return W ? void 0 : (window == null ? void 0 : window.ManagedMediaSource) ?? (window == null ? void 0 : window.MediaSource) ?? (window == null ? void 0 : window.WebKitMediaSource);
}
function Vw() {
  return W ? void 0 : (window == null ? void 0 : window.SourceBuffer) ?? (window == null ? void 0 : window.WebKitSourceBuffer);
}
function s7() {
  if (W) return !1;
  const n = Iw();
  if (vt(n)) return !1;
  const t = n && sn(n.isTypeSupported) && n.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'), e = Vw(), s = vt(e) || !vt(e.prototype) && sn(e.prototype.appendBuffer) && sn(e.prototype.remove);
  return !!t && !!s;
}
function i4() {
  return s7();
}
var Ws;
class Pa {
  constructor(t, e) {
    C(this, Ws);
    Vt(t) ? g(this, Ws, t) : !vt(t) && !vt(e) ? g(this, Ws, [[t, e]]) : g(this, Ws, []);
  }
  get length() {
    return r(this, Ws).length;
  }
  start(t) {
    return r(this, Ws)[t][0] ?? 1 / 0;
  }
  end(t) {
    return r(this, Ws)[t][1] ?? 1 / 0;
  }
}
Ws = new WeakMap();
function pd(n) {
  if (!n.length) return null;
  let t = n.start(0);
  for (let e = 1; e < n.length; e++) {
    const s = n.start(e);
    s < t && (t = s);
  }
  return t;
}
function Or(n) {
  if (!n.length) return null;
  let t = n.end(0);
  for (let e = 1; e < n.length; e++) {
    const s = n.end(e);
    s > t && (t = s);
  }
  return t;
}
function Aw(n) {
  if (n.length <= 1)
    return n;
  n.sort((s, i) => s[0] - i[0]);
  let t = [], e = n[0];
  for (let s = 1; s < n.length; s++) {
    const i = n[s];
    e[1] >= i[0] - 1 ? e = [e[0], Math.max(e[1], i[1])] : (t.push(e), e = i);
  }
  return t.push(e), t;
}
function Rw(n, t, e) {
  let s = t[0], i = t[1];
  return e < s ? [e, -1] : e === s ? t : s === -1 ? (t[0] = e, t) : (e > s && (t[1] = e, i === -1 && n.push(t)), Aw(n), t);
}
const Nw = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx|flac)($|\?)/i, Hw = /* @__PURE__ */ new Set([
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
]), Ow = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i, Dw = /* @__PURE__ */ new Set([
  "video/mp4",
  "video/webm",
  "video/3gp",
  "video/ogg",
  "video/avi",
  "video/mpeg"
]), _w = /\.(m3u8)($|\?)/i, Fw = /\.(mpd)($|\?)/i, jw = /* @__PURE__ */ new Set([
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
]), qw = /* @__PURE__ */ new Set(["application/dash+xml"]);
function r4({ src: n, type: t }) {
  return ce(n) ? Nw.test(n) || Hw.has(t) || n.startsWith("blob:") && t === "audio/object" : t === "audio/object";
}
function o4(n) {
  return ce(n.src) ? Ow.test(n.src) || Dw.has(n.type) || n.src.startsWith("blob:") && n.type === "video/object" || go(n) && (W || t4()) : n.type === "video/object";
}
function go({ src: n, type: t }) {
  return ce(n) && _w.test(n) || jw.has(t);
}
function i7({ src: n, type: t }) {
  return ce(n) && Fw.test(n) || qw.has(t);
}
function Zw(n) {
  return ce(n.src) && (r4(n) || o4(n) || go(n));
}
function Bw(n) {
  return !W && typeof window.MediaStream < "u" && n instanceof window.MediaStream;
}
function dN(n, t) {
  const e = new URL(n);
  for (const s of Object.keys(t))
    e.searchParams.set(s, t[s] + "");
  return e.toString();
}
function yo(n, t = "preconnect") {
  if (W) return !1;
  const e = document.querySelector(`link[href="${n}"]`);
  if (!es(e)) return !0;
  const s = document.createElement("link");
  return s.rel = t, s.href = n, s.crossOrigin = "true", document.head.append(s), !0;
}
const Vo = {};
function Gw(n) {
  if (Vo[n]) return Vo[n].promise;
  const t = e2(), e = document.querySelector(`script[src="${n}"]`);
  if (!es(e))
    return t.resolve(), t.promise;
  Vo[n] = t;
  const s = document.createElement("script");
  return s.src = n, s.onload = () => {
    t.resolve(), delete Vo[n];
  }, s.onerror = () => {
    t.reject(), delete Vo[n];
  }, setTimeout(() => document.head.append(s), 0), t.promise;
}
function Zo(n) {
  return n === "use-credentials" ? "include" : ce(n) ? "same-origin" : void 0;
}
const Ww = Symbol(0), Uw = Symbol(0), Kw = Symbol(0), zw = Symbol(0), Yw = Symbol(0), Qw = Symbol(0), Xw = Symbol(0), he = {
  crossOrigin: Ww,
  readyState: Uw,
  updateActiveCues: Kw,
  canLoad: zw,
  onModeChange: Yw,
  native: Qw,
  nativeHLS: Xw
};
function Cd(n, t) {
  return t >= n.startTime && t < n.endTime;
}
function r7(n, t, e) {
  let s = null, i = J3();
  function o() {
    const a = ce(t) ? [t] : t, l = n.toArray().find((d) => a.includes(d.kind) && d.mode === "showing");
    if (l !== s) {
      if (!l) {
        e(null), s = null;
        return;
      }
      l.readyState == 2 ? e(l) : (e(null), Gt(() => {
        const d = Xe(
          l,
          "load",
          () => {
            e(l), d();
          },
          { once: !0 }
        );
      }, i)), s = l;
    }
  }
  return o(), Xe(n, "mode-change", o);
}
var Xd, Jd, e5, t5, Qo, Us, Fr, Xo, jr, Lt, Ks, ct, a4, al, Ro, cl, ll, ul;
class P1 extends B9 {
  constructor(e) {
    super();
    C(this, ct);
    $(this, "src");
    $(this, "content");
    $(this, "type");
    $(this, "encoding");
    $(this, "id", "");
    $(this, "label", "");
    $(this, "language", "");
    $(this, "kind");
    $(this, "default", !1);
    C(this, Qo, !1);
    C(this, Us, 0);
    C(this, Fr, "disabled");
    C(this, Xo, {});
    C(this, jr, []);
    C(this, Lt, []);
    C(this, Ks, []);
    /** @internal */
    $(this, t5, 0);
    /** @internal */
    $(this, e5);
    /** @internal */
    $(this, Jd, null);
    /** @internal */
    $(this, Xd, null);
    for (const s of Object.keys(e)) this[s] = e[s];
    this.type || (this.type = "vtt"), !W && e.content ? c(this, ct, a4).call(this, e) : e.src || (this[he.readyState] = 2);
  }
  static createId(e) {
    return `vds-${e.type}-${e.kind}-${e.src ?? e.label ?? "?"}`;
  }
  get metadata() {
    return r(this, Xo);
  }
  get regions() {
    return r(this, jr);
  }
  get cues() {
    return r(this, Lt);
  }
  get activeCues() {
    return r(this, Ks);
  }
  /**
   * - 0: Not Loading
   * - 1: Loading
   * - 2: Ready
   * - 3: Error
   */
  get readyState() {
    return this[he.readyState];
  }
  get mode() {
    return r(this, Fr);
  }
  set mode(e) {
    this.setMode(e);
  }
  addCue(e, s) {
    var a;
    let i = 0, o = r(this, Lt).length;
    for (i = 0; i < o && !(e.endTime <= r(this, Lt)[i].startTime); i++) ;
    i === o ? r(this, Lt).push(e) : r(this, Lt).splice(i, 0, e), e instanceof TextTrackCue || (a = this[he.native]) == null || a.track.addCue(e), this.dispatchEvent(new $e("add-cue", { detail: e, trigger: s })), Cd(e, r(this, Us)) && this[he.updateActiveCues](r(this, Us), s);
  }
  removeCue(e, s) {
    var o;
    const i = r(this, Lt).indexOf(e);
    if (i >= 0) {
      const a = r(this, Ks).includes(e);
      r(this, Lt).splice(i, 1), (o = this[he.native]) == null || o.track.removeCue(e), this.dispatchEvent(new $e("remove-cue", { detail: e, trigger: s })), a && this[he.updateActiveCues](r(this, Us), s);
    }
  }
  setMode(e, s) {
    var i;
    r(this, Fr) !== e && (g(this, Fr, e), e === "disabled" ? (g(this, Ks, []), c(this, ct, ul).call(this)) : this.readyState === 2 ? this[he.updateActiveCues](r(this, Us), s) : c(this, ct, al).call(this), this.dispatchEvent(new $e("mode-change", { detail: this, trigger: s })), (i = this[he.onModeChange]) == null || i.call(this));
  }
  /** @internal */
  [(t5 = he.readyState, e5 = he.crossOrigin, Jd = he.onModeChange, Xd = he.native, he.updateActiveCues)](e, s) {
    if (g(this, Us, e), this.mode === "disabled" || !r(this, Lt).length) return;
    const i = [];
    for (let a = 0, l = r(this, Lt).length; a < l; a++) {
      const d = r(this, Lt)[a];
      Cd(d, e) && i.push(d);
    }
    let o = i.length !== r(this, Ks).length;
    if (!o) {
      for (let a = 0; a < i.length; a++)
        if (!r(this, Ks).includes(i[a])) {
          o = !0;
          break;
        }
    }
    g(this, Ks, i), o && c(this, ct, ul).call(this, s);
  }
  /** @internal */
  [he.canLoad]() {
    g(this, Qo, !0), r(this, Fr) !== "disabled" && c(this, ct, al).call(this);
  }
}
Qo = new WeakMap(), Us = new WeakMap(), Fr = new WeakMap(), Xo = new WeakMap(), jr = new WeakMap(), Lt = new WeakMap(), Ks = new WeakMap(), ct = new WeakSet(), a4 = function(e) {
  import("./prod-DTLJXtPo.js").then((s) => s.d).then(({ parseText: s, VTTCue: i, VTTRegion: o }) => {
    !ce(e.content) || e.type === "json" ? (c(this, ct, ll).call(this, e.content, i, o), this.readyState !== 3 && c(this, ct, Ro).call(this)) : s(e.content, { type: e.type }).then(({ cues: a, regions: l }) => {
      g(this, Lt, a), g(this, jr, l), c(this, ct, Ro).call(this);
    });
  });
}, al = async function() {
  var e, s;
  if (!(!r(this, Qo) || this[he.readyState] > 0)) {
    if (this[he.readyState] = 1, this.dispatchEvent(new $e("load-start")), !this.src) {
      c(this, ct, Ro).call(this);
      return;
    }
    try {
      const { parseResponse: i, VTTCue: o, VTTRegion: a } = await import("./prod-DTLJXtPo.js").then((h) => h.d), l = (e = this[he.crossOrigin]) == null ? void 0 : e.call(this), d = fetch(this.src, {
        headers: this.type === "json" ? { "Content-Type": "application/json" } : void 0,
        credentials: Zo(l)
      });
      if (this.type === "json")
        c(this, ct, ll).call(this, await (await d).text(), o, a);
      else {
        const { errors: h, metadata: p, regions: f, cues: m } = await i(d, {
          type: this.type,
          encoding: this.encoding
        });
        if (((s = h[0]) == null ? void 0 : s.code) === 0)
          throw h[0];
        g(this, Xo, p), g(this, jr, f), g(this, Lt, m);
      }
      c(this, ct, Ro).call(this);
    } catch (i) {
      c(this, ct, cl).call(this, i);
    }
  }
}, Ro = function() {
  if (this[he.readyState] = 2, !this.src || this.type !== "vtt") {
    const s = this[he.native];
    if (s && !s.managed)
      for (const i of r(this, Lt)) s.track.addCue(i);
  }
  const e = new $e("load");
  this[he.updateActiveCues](r(this, Us), e), this.dispatchEvent(e);
}, cl = function(e) {
  this[he.readyState] = 3, this.dispatchEvent(new $e("error", { detail: e }));
}, ll = function(e, s, i) {
  try {
    const { regions: o, cues: a } = ex(e, s, i);
    g(this, jr, o), g(this, Lt, a);
  } catch (o) {
    c(this, ct, cl).call(this, o);
  }
}, ul = function(e) {
  this.dispatchEvent(new $e("cue-change", { trigger: e }));
};
const Jw = /captions|subtitles/;
function mn(n) {
  return Jw.test(n.kind);
}
function ex(n, t, e) {
  const s = ce(n) ? JSON.parse(n) : n;
  let i = [], o = [];
  return s.regions && e && (i = s.regions.map((a) => Object.assign(new e(), a))), (s.cues || Vt(s)) && (o = (Vt(s) ? s : s.cues).filter((a) => tn(a.startTime) && tn(a.endTime)).map((a) => Object.assign(new t(0, 0, ""), a))), { regions: i, cues: o };
}
const vo = new Pi({
  artist: "",
  artwork: null,
  audioTrack: null,
  audioTracks: [],
  autoPlay: !1,
  autoPlayError: null,
  audioGain: null,
  buffered: new Pa(),
  canLoad: !1,
  canLoadPoster: !1,
  canFullscreen: !1,
  canOrientScreen: X5(),
  canPictureInPicture: !1,
  canPlay: !1,
  clipStartTime: 0,
  clipEndTime: 0,
  controls: !1,
  get iOSControls() {
    return Y5 && this.mediaType === "video" && (!this.playsInline || !gr.fullscreenEnabled && this.fullscreen);
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
  played: new Pa(),
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
  seekable: new Pa(),
  seeking: !1,
  source: { src: "", type: "" },
  sources: [],
  started: !1,
  textTracks: [],
  textTrack: null,
  get hasCaptions() {
    return this.textTracks.filter(mn).length > 0;
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
    const n = pd(this.buffered) ?? 0;
    return Math.max(n, this.clipStartTime);
  },
  get bufferedEnd() {
    const n = Or(this.buffered) ?? 0;
    return Math.min(this.seekableEnd, Math.max(0, n - this.clipStartTime));
  },
  get bufferedWindow() {
    return Math.max(0, this.bufferedEnd - this.bufferedStart);
  },
  get seekableStart() {
    if (this.isLiveDVR && this.liveDVRWindow > 0)
      return Math.max(0, this.seekableEnd - this.liveDVRWindow);
    const n = pd(this.seekable) ?? 0;
    return Math.max(n, this.clipStartTime);
  },
  get seekableEnd() {
    if (this.providedDuration > 0) return this.providedDuration;
    const n = this.liveSyncPosition > 0 ? this.liveSyncPosition : this.canPlay ? Or(this.seekable) ?? 1 / 0 : 0;
    return this.clipEndTime > 0 ? Math.min(this.clipEndTime, n) : n;
  },
  get seekableWindow() {
    const n = this.seekableEnd - this.seekableStart;
    return isNaN(n) ? 1 / 0 : Math.max(0, n);
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
}), c4 = /* @__PURE__ */ new Set([
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
]), tx = /* @__PURE__ */ new Set([
  ...c4,
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
function md(n, t = !1) {
  const e = t ? c4 : tx;
  vo.reset(n, (s) => e.has(s)), Jn();
}
function l4(n, t) {
  const e = n + t.clipStartTime(), s = Math.floor(n) === Math.floor(t.seekableStart()), i = Math.floor(e) === Math.floor(t.seekableEnd());
  return s ? t.seekableStart() : i ? t.seekableEnd() : t.isLiveDVR() && t.liveDVRWindow() > 0 && e < t.seekableEnd() - t.liveDVRWindow() ? t.bufferedStart() : Math.min(Math.max(t.seekableStart() + 0.1, e), t.seekableEnd() - 0.1);
}
const o7 = Ti();
function je() {
  return rt(o7);
}
var qr, cn, s6, g2, Ve, _e, nx;
class u4 {
  constructor(t = void 0) {
    C(this, Ve);
    C(this, qr, null);
    C(this, cn, null);
    C(this, s6, -1);
    C(this, g2);
    g(this, g2, t);
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
    g(this, qr, t);
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
    return r(this, cn) ? r(this, cn) : ((e = t ?? r(this, qr)) == null || e.dispatchEvent(
      new $e("find-media-player", {
        detail: (s) => void g(this, cn, s),
        bubbles: !0,
        composed: !0
      })
    ), r(this, cn));
  }
  /**
   * Set the current player element so the remote can support toggle methods such as
   * `togglePaused` as they rely on the current media state.
   */
  setPlayer(t) {
    g(this, cn, t);
  }
  /**
   * Dispatch a request to start the media loading process. This will only work if the media
   * player has been initialized with a custom loading strategy `load="custom">`.
   *
   * @docs {@link https://www.vidstack.io/docs/player/core-concepts/loading#load-strategies}
   */
  startLoading(t) {
    c(this, Ve, _e).call(this, "media-start-loading", t);
  }
  /**
   * Dispatch a request to start the poster loading process. This will only work if the media
   * player has been initialized with a custom poster loading strategy `posterLoad="custom">`.
   *
   * @docs {@link https://www.vidstack.io/docs/player/core-concepts/loading#load-strategies}
   */
  startLoadingPoster(t) {
    c(this, Ve, _e).call(this, "media-poster-start-loading", t);
  }
  /**
   * Dispatch a request to connect to AirPlay.
   *
   * @see {@link https://www.apple.com/au/airplay}
   */
  requestAirPlay(t) {
    c(this, Ve, _e).call(this, "media-airplay-request", t);
  }
  /**
   * Dispatch a request to connect to Google Cast.
   *
   * @see {@link https://developers.google.com/cast/docs/overview}
   */
  requestGoogleCast(t) {
    c(this, Ve, _e).call(this, "media-google-cast-request", t);
  }
  /**
   * Dispatch a request to begin/resume media playback.
   */
  play(t) {
    c(this, Ve, _e).call(this, "media-play-request", t);
  }
  /**
   * Dispatch a request to pause media playback.
   */
  pause(t) {
    c(this, Ve, _e).call(this, "media-pause-request", t);
  }
  /**
   * Dispatch a request to set the media volume to mute (0).
   */
  mute(t) {
    c(this, Ve, _e).call(this, "media-mute-request", t);
  }
  /**
   * Dispatch a request to unmute the media volume and set it back to it's previous state.
   */
  unmute(t) {
    c(this, Ve, _e).call(this, "media-unmute-request", t);
  }
  /**
   * Dispatch a request to enter fullscreen.
   *
   * @docs {@link https://www.vidstack.io/docs/player/api/fullscreen#remote-control}
   */
  enterFullscreen(t, e) {
    c(this, Ve, _e).call(this, "media-enter-fullscreen-request", e, t);
  }
  /**
   * Dispatch a request to exit fullscreen.
   *
   * @docs {@link https://www.vidstack.io/docs/player/api/fullscreen#remote-control}
   */
  exitFullscreen(t, e) {
    c(this, Ve, _e).call(this, "media-exit-fullscreen-request", e, t);
  }
  /**
   * Dispatch a request to lock the screen orientation.
   *
   * @docs {@link https://www.vidstack.io/docs/player/screen-orientation#remote-control}
   */
  lockScreenOrientation(t, e) {
    c(this, Ve, _e).call(this, "media-orientation-lock-request", e, t);
  }
  /**
   * Dispatch a request to unlock the screen orientation.
   *
   * @docs {@link https://www.vidstack.io/docs/player/api/screen-orientation#remote-control}
   */
  unlockScreenOrientation(t) {
    c(this, Ve, _e).call(this, "media-orientation-unlock-request", t);
  }
  /**
   * Dispatch a request to enter picture-in-picture mode.
   *
   * @docs {@link https://www.vidstack.io/docs/player/api/picture-in-picture#remote-control}
   */
  enterPictureInPicture(t) {
    c(this, Ve, _e).call(this, "media-enter-pip-request", t);
  }
  /**
   * Dispatch a request to exit picture-in-picture mode.
   *
   * @docs {@link https://www.vidstack.io/docs/player/api/picture-in-picture#remote-control}
   */
  exitPictureInPicture(t) {
    c(this, Ve, _e).call(this, "media-exit-pip-request", t);
  }
  /**
   * Notify the media player that a seeking process is happening and to seek to the given `time`.
   */
  seeking(t, e) {
    c(this, Ve, _e).call(this, "media-seeking-request", e, t);
  }
  /**
   * Notify the media player that a seeking operation has completed and to seek to the given `time`.
   * This is generally called after a series of `remote.seeking()` calls.
   */
  seek(t, e) {
    c(this, Ve, _e).call(this, "media-seek-request", e, t);
  }
  seekToLiveEdge(t) {
    c(this, Ve, _e).call(this, "media-live-edge-request", t);
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
    c(this, Ve, _e).call(this, "media-duration-change-request", e, t);
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
    c(this, Ve, _e).call(this, "media-clip-start-change-request", e, t);
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
    c(this, Ve, _e).call(this, "media-clip-end-change-request", e, t);
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
    c(this, Ve, _e).call(this, "media-volume-change-request", e, Math.max(0, Math.min(1, t)));
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
    c(this, Ve, _e).call(this, "media-audio-track-change-request", e, t);
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
    c(this, Ve, _e).call(this, "media-quality-change-request", e, t);
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
  changeTextTrackMode(t, e, s) {
    c(this, Ve, _e).call(this, "media-text-track-change-request", s, {
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
    c(this, Ve, _e).call(this, "media-rate-change-request", e, t);
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
    c(this, Ve, _e).call(this, "media-audio-gain-change-request", e, t);
  }
  /**
   * Dispatch a request to resume idle tracking on controls.
   */
  resumeControls(t) {
    c(this, Ve, _e).call(this, "media-resume-controls-request", t);
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
    c(this, Ve, _e).call(this, "media-pause-controls-request", t);
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
    const s = this.getPlayer(e == null ? void 0 : e.target);
    s && (s.state.fullscreen ? this.exitFullscreen(t, e) : this.enterFullscreen(t, e));
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
    let s = e.state.textTracks, i = r(this, s6);
    (!s[i] || !mn(s[i])) && (i = -1), i === -1 && (i = s.findIndex((o) => mn(o) && o.default)), i === -1 && (i = s.findIndex((o) => mn(o))), i >= 0 && this.changeTextTrackMode(i, "showing", t), g(this, s6, -1);
  }
  /**
   * Turn captions off.
   */
  disableCaptions(t) {
    const e = this.getPlayer(t == null ? void 0 : t.target);
    if (!e)
      return;
    const s = e.state.textTracks, i = e.state.textTrack;
    if (i) {
      const o = s.indexOf(i);
      this.changeTextTrackMode(o, "disabled", t), g(this, s6, o);
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
    c(this, Ve, _e).call(this, "media-user-loop-change-request", e, t);
  }
}
qr = new WeakMap(), cn = new WeakMap(), s6 = new WeakMap(), g2 = new WeakMap(), Ve = new WeakSet(), _e = function(t, e, s) {
  var l, d;
  const i = new $e(t, {
    bubbles: !0,
    composed: !0,
    cancelable: !0,
    detail: s,
    trigger: e
  });
  let o = (e == null ? void 0 : e.target) || null;
  o && o instanceof Ce && (o = o.el), o = !o || o === document || o === window || o === document.body || ((l = r(this, cn)) == null ? void 0 : l.el) && o instanceof Node && !r(this, cn).el.contains(o) ? r(this, qr) ?? ((d = this.getPlayer()) == null ? void 0 : d.el) : o ?? r(this, qr), r(this, cn) ? t === "media-play-request" && !r(this, cn).state.canLoad ? o == null || o.dispatchEvent(i) : r(this, cn).canPlayQueue.enqueue(t, () => o == null ? void 0 : o.dispatchEvent(i)) : o == null || o.dispatchEvent(i);
}, nx = function(t) {
};
var it;
class sx {
  constructor() {
    $(this, "playerId", "vds-player");
    $(this, "mediaId", null);
    C(this, it, {
      volume: null,
      muted: null,
      audioGain: null,
      time: null,
      lang: null,
      captions: null,
      rate: null,
      quality: null
    });
    $(this, "saveTimeThrottled", kr(this.saveTime.bind(this), 1e3));
  }
  async getVolume() {
    return r(this, it).volume;
  }
  async setVolume(t) {
    r(this, it).volume = t, this.save();
  }
  async getMuted() {
    return r(this, it).muted;
  }
  async setMuted(t) {
    r(this, it).muted = t, this.save();
  }
  async getTime() {
    return r(this, it).time;
  }
  async setTime(t, e) {
    const s = t < 0;
    r(this, it).time = s ? null : t, s || e ? this.saveTime() : this.saveTimeThrottled();
  }
  async getLang() {
    return r(this, it).lang;
  }
  async setLang(t) {
    r(this, it).lang = t, this.save();
  }
  async getCaptions() {
    return r(this, it).captions;
  }
  async setCaptions(t) {
    r(this, it).captions = t, this.save();
  }
  async getPlaybackRate() {
    return r(this, it).rate;
  }
  async setPlaybackRate(t) {
    r(this, it).rate = t, this.save();
  }
  async getAudioGain() {
    return r(this, it).audioGain;
  }
  async setAudioGain(t) {
    r(this, it).audioGain = t, this.save();
  }
  async getVideoQuality() {
    return r(this, it).quality;
  }
  async setVideoQuality(t) {
    r(this, it).quality = t, this.save();
  }
  onChange(t, e, s = "vds-player") {
    const i = s ? localStorage.getItem(s) : null, o = e ? localStorage.getItem(e) : null;
    this.playerId = s, this.mediaId = e, g(this, it, {
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
    if (W || !this.playerId) return;
    const t = JSON.stringify({ ...r(this, it), time: void 0 });
    localStorage.setItem(this.playerId, t);
  }
  saveTime() {
    if (W || !this.mediaId) return;
    const t = (r(this, it).time ?? 0).toString();
    localStorage.setItem(this.mediaId, t);
  }
}
it = new WeakMap();
const ix = Symbol(0), rx = Symbol(0), ox = Symbol(0), ax = Symbol(0), cx = Symbol(0), lx = Symbol(0), ux = Symbol(0), dx = Symbol(0), hx = Symbol(0), ye = {
  add: ix,
  remove: rx,
  reset: ox,
  select: ax,
  readonly: cx,
  setReadonly: lx,
  onReset: ux,
  onRemove: dx,
  onUserSelect: hx
};
var n5;
class d4 extends B9 {
  constructor() {
    super(...arguments);
    $(this, "items", []);
    /** @internal */
    $(this, n5, !1);
  }
  get length() {
    return this.items.length;
  }
  get readonly() {
    return this[ye.readonly];
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
    return e === "" ? null : this.items.find((s) => s.id === e) ?? null;
  }
  /**
   * Transform list to an array.
   */
  toArray() {
    return [...this.items];
  }
  [(n5 = ye.readonly, Symbol.iterator)]() {
    return this.items.values();
  }
  /** @internal */
  [ye.add](e, s) {
    const i = this.items.length;
    "" + i in this || Object.defineProperty(this, i, {
      get() {
        return this.items[i];
      }
    }), !this.items.includes(e) && (this.items.push(e), this.dispatchEvent(new $e("add", { detail: e, trigger: s })));
  }
  /** @internal */
  [ye.remove](e, s) {
    var o;
    const i = this.items.indexOf(e);
    i >= 0 && ((o = this[ye.onRemove]) == null || o.call(this, e, s), this.items.splice(i, 1), this.dispatchEvent(new $e("remove", { detail: e, trigger: s })));
  }
  /** @internal */
  [ye.reset](e) {
    var s;
    for (const i of [...this.items]) this[ye.remove](i, e);
    this.items = [], this[ye.setReadonly](!1, e), (s = this[ye.onReset]) == null || s.call(this);
  }
  /** @internal */
  [ye.setReadonly](e, s) {
    this[ye.readonly] !== e && (this[ye.readonly] = e, this.dispatchEvent(new $e("readonly-change", { detail: e, trigger: s })));
  }
}
const Ao = Symbol(0);
class h4 extends d4 {
  get selected() {
    return this.items.find((t) => t.selected) ?? null;
  }
  get selectedIndex() {
    return this.items.findIndex((t) => t.selected);
  }
  /** @internal */
  [ye.onRemove](t, e) {
    this[ye.select](t, !1, e);
  }
  /** @internal */
  [ye.add](t, e) {
    t[Ao] = !1, Object.defineProperty(t, "selected", {
      get() {
        return this[Ao];
      },
      set: (s) => {
        var i;
        this.readonly || ((i = this[ye.onUserSelect]) == null || i.call(this), this[ye.select](t, s));
      }
    }), super[ye.add](t, e);
  }
  /** @internal */
  [ye.select](t, e, s) {
    if (e === (t == null ? void 0 : t[Ao])) return;
    const i = this.selected;
    t && (t[Ao] = e), (e ? i !== t : i === t) && (i && (i[Ao] = !1), this.dispatchEvent(
      new $e("change", {
        detail: {
          prev: i,
          current: this.selected
        },
        trigger: s
      })
    ));
  }
}
class fx extends h4 {
}
function At(n, t = 2) {
  return Number(n.toFixed(t));
}
function dl(n) {
  var t;
  return ((t = String(n).split(".")[1]) == null ? void 0 : t.length) ?? 0;
}
function a7(n, t, e) {
  return Math.max(n, Math.min(e, t));
}
function gd(n, t) {
  const e = t.composedPath()[0];
  return S5(e) && n.contains(e);
}
const hl = /* @__PURE__ */ new Set();
if (!W) {
  let n = function() {
    for (const t of hl)
      try {
        t();
      } catch {
      }
    window.requestAnimationFrame(n);
  };
  n();
}
function px(n) {
  return hl.add(n), () => hl.delete(n);
}
function He(n, t, e) {
  n.hasAttribute(t) || n.setAttribute(t, e);
}
function Mr(n, t) {
  if (n.hasAttribute("aria-label") || n.hasAttribute("data-no-label")) return;
  if (!sn(t)) {
    ie(n, "aria-label", t);
    return;
  }
  function e() {
    ie(n, "aria-label", t());
  }
  W ? e() : T(e);
}
function f4(n) {
  const t = getComputedStyle(n);
  return t.display !== "none" && parseInt(t.opacity) > 0;
}
function Cx(n) {
  return !!n && ("checkVisibility" in n ? n.checkVisibility({ checkOpacity: !0, checkVisibilityCSS: !0 }) : f4(n));
}
function p4(n, t) {
  return px(() => t(Cx(n)));
}
function C4(n, t, e) {
  for (; t; ) {
    if (t === n)
      return !0;
    if (e != null && e(t))
      break;
    t = t.parentElement;
  }
  return !1;
}
function Sr(n, t) {
  return new Ne(n).add("pointerup", (e) => {
    e.button === 0 && !e.defaultPrevented && t(e);
  }).add("keydown", (e) => {
    G9(e) && t(e);
  });
}
function c7(n) {
  return jo(n) && (n.touches.length > 1 || n.changedTouches.length > 1);
}
function m4(n) {
  if (W) return n();
  let t = J3(), e = window.requestAnimationFrame(() => {
    Gt(n, t), e = -1;
  });
  return () => void window.cancelAnimationFrame(e);
}
function g4(n, t, e, {
  offsetVarName: s,
  xOffset: i,
  yOffset: o,
  ...a
}) {
  if (!n) return;
  const l = e.replace(" ", "-").replace("-center", "");
  if (Wt(n, "visibility", t ? null : "hidden"), !t) return;
  let d = e.includes("top");
  const h = (f) => e.includes("left") ? `calc(-1 * ${f})` : f, p = (f) => d ? `calc(-1 * ${f})` : f;
  return W5(t, n, () => {
    z5(t, n, {
      placement: l,
      middleware: [
        ...a.middleware ?? [],
        K5({ fallbackAxisSideDirection: "start", crossAxis: !1 }),
        U5()
      ],
      ...a
    }).then(({ x: f, y: m, middlewareData: y }) => {
      var b;
      const v = !!((b = y.flip) != null && b.index);
      d = e.includes(v ? "bottom" : "top"), n.setAttribute(
        "data-placement",
        v ? e.startsWith("top") ? e.replace("top", "bottom") : e.replace("bottom", "top") : e
      ), Object.assign(n.style, {
        top: `calc(${m + "px"} + ${p(
          o ? o + "px" : `var(--${s}-y-offset, 0px)`
        )})`,
        left: `calc(${f + "px"} + ${h(
          i ? i + "px" : `var(--${s}-x-offset, 0px)`
        )})`
      });
    });
  });
}
function mx(n) {
  return getComputedStyle(n).animationName !== "none";
}
function r2(n) {
  return n instanceof HTMLElement;
}
var Jo, zs, e3, Ai, An, y4, v4, fl, pl;
class gx {
  constructor() {
    C(this, An);
    $(this, "priority", 0);
    C(this, Jo, !0);
    C(this, zs, null);
    C(this, e3, null);
    C(this, Ai, /* @__PURE__ */ new Set());
  }
  canRender(t, e) {
    return !!e;
  }
  attach(t) {
    g(this, zs, t), t && (t.textTracks.onchange = c(this, An, pl).bind(this));
  }
  addTrack(t) {
    r(this, Ai).add(t), c(this, An, y4).call(this, t);
  }
  removeTrack(t) {
    var e, s;
    (s = (e = t[he.native]) == null ? void 0 : e.remove) == null || s.call(e), t[he.native] = null, r(this, Ai).delete(t);
  }
  changeTrack(t) {
    const e = t == null ? void 0 : t[he.native];
    e && e.track.mode !== "showing" && (e.track.mode = "showing"), g(this, e3, t);
  }
  setDisplay(t) {
    g(this, Jo, t), c(this, An, pl).call(this);
  }
  detach() {
    r(this, zs) && (r(this, zs).textTracks.onchange = null);
    for (const t of r(this, Ai)) this.removeTrack(t);
    r(this, Ai).clear(), g(this, zs, null), g(this, e3, null);
  }
}
Jo = new WeakMap(), zs = new WeakMap(), e3 = new WeakMap(), Ai = new WeakMap(), An = new WeakSet(), y4 = function(t) {
  var s;
  if (!r(this, zs)) return;
  const e = t[s = he.native] ?? (t[s] = c(this, An, v4).call(this, t));
  r2(e) && (r(this, zs).append(e), e.track.mode = e.default ? "showing" : "disabled");
}, v4 = function(t) {
  const e = document.createElement("track"), s = t.default || t.mode === "showing", i = t.src && t.type === "vtt";
  return e.id = t.id, e.src = i ? t.src : "", e.label = t.label, e.kind = t.kind, e.default = s, t.language && (e.srclang = t.language), s && !i && c(this, An, fl).call(this, t, e.track), e;
}, fl = function(t, e) {
  var s;
  if (!(t.src && t.type === "vtt" || (s = e.cues) != null && s.length))
    for (const i of t.cues) e.addCue(i);
}, pl = function(t) {
  for (const e of r(this, Ai)) {
    const s = e[he.native];
    if (!s) continue;
    if (!r(this, Jo)) {
      s.track.mode = s.managed ? "hidden" : "disabled";
      continue;
    }
    const i = s.track.mode === "showing";
    i && c(this, An, fl).call(this, e, s.track), e.setMode(i ? "showing" : "disabled", t);
  }
};
var Zr, i6, Br, t3, n3, ln, ls, at, b4, Cl, w4, x4, S4, W1, E4;
class yx {
  constructor(t) {
    C(this, at);
    C(this, Zr, null);
    C(this, i6);
    C(this, Br, []);
    C(this, t3);
    C(this, n3, !1);
    C(this, ln, null);
    C(this, ls, null);
    g(this, t3, t);
    const e = t.textTracks;
    g(this, i6, e), T(c(this, at, b4).bind(this)), pe(c(this, at, E4).bind(this)), new Ne(e).add("add", c(this, at, x4).bind(this)).add("remove", c(this, at, S4).bind(this)).add("mode-change", c(this, at, W1).bind(this));
  }
  add(t) {
    r(this, Br).push(t), io(c(this, at, W1).bind(this));
  }
  remove(t) {
    t.detach(), r(this, Br).splice(r(this, Br).indexOf(t), 1), io(c(this, at, W1).bind(this));
  }
  /** @internal */
  attachVideo(t) {
    requestAnimationFrame(() => {
      if (g(this, Zr, t), t) {
        g(this, ln, new gx()), r(this, ln).attach(t);
        for (const e of r(this, i6)) c(this, at, Cl).call(this, e);
      }
      c(this, at, W1).call(this);
    });
  }
}
Zr = new WeakMap(), i6 = new WeakMap(), Br = new WeakMap(), t3 = new WeakMap(), n3 = new WeakMap(), ln = new WeakMap(), ls = new WeakMap(), at = new WeakSet(), b4 = function() {
  const { nativeControls: t } = r(this, t3).$state;
  g(this, n3, t()), c(this, at, W1).call(this);
}, Cl = function(t) {
  var e;
  mn(t) && ((e = r(this, ln)) == null || e.addTrack(t));
}, w4 = function(t) {
  var e;
  mn(t) && ((e = r(this, ln)) == null || e.removeTrack(t));
}, x4 = function(t) {
  c(this, at, Cl).call(this, t.detail);
}, S4 = function(t) {
  c(this, at, w4).call(this, t.detail);
}, W1 = function() {
  var s, i, o, a, l, d, h;
  const t = r(this, i6).selected;
  if (r(this, Zr) && (r(this, n3) || t != null && t[he.nativeHLS])) {
    (s = r(this, ls)) == null || s.changeTrack(null), (i = r(this, ln)) == null || i.setDisplay(!0), (o = r(this, ln)) == null || o.changeTrack(t);
    return;
  }
  if ((a = r(this, ln)) == null || a.setDisplay(!1), (l = r(this, ln)) == null || l.changeTrack(null), !t) {
    (d = r(this, ls)) == null || d.changeTrack(null);
    return;
  }
  const e = r(this, Br).sort((p, f) => p.priority - f.priority).find((p) => p.canRender(t, r(this, Zr)));
  r(this, ls) !== e && ((h = r(this, ls)) == null || h.detach(), e == null || e.attach(r(this, Zr)), g(this, ls, e ?? null)), e == null || e.changeTrack(t);
}, E4 = function() {
  var t, e;
  (t = r(this, ln)) == null || t.detach(), g(this, ln, null), (e = r(this, ls)) == null || e.detach(), g(this, ls, null);
};
var s5, Gr, us, ds, hs, s3, r6, i3, ks, $4, ml, gl;
class vx extends d4 {
  constructor() {
    super();
    C(this, ks);
    C(this, Gr, !1);
    C(this, us, {});
    C(this, ds, null);
    C(this, hs, null);
    /** @internal */
    $(this, s5);
    C(this, s3, j2(async () => {
      var i;
      if (!r(this, Gr)) return;
      !r(this, hs) && r(this, ds) && g(this, hs, await r(this, ds).getLang());
      const e = await ((i = r(this, ds)) == null ? void 0 : i.getCaptions()), s = [
        ["captions", "subtitles"],
        "chapters",
        "descriptions",
        "metadata"
      ];
      for (const o of s) {
        const a = this.getByKind(o);
        if (a.find((f) => f.mode === "showing")) continue;
        const l = r(this, hs) ? a.find((f) => f.language === r(this, hs)) : null, d = Vt(o) ? r(this, us)[o.find((f) => r(this, us)[f]) || ""] : r(this, us)[o], h = l ?? d, p = h && mn(h);
        h && (!p || e !== !1) && (h.mode = "showing", p && c(this, ks, ml).call(this, h));
      }
    }, 300));
    C(this, r6, null);
    C(this, i3, c(this, ks, $4).bind(this));
  }
  get selected() {
    return this.items.find((s) => s.mode === "showing" && mn(s)) ?? null;
  }
  get selectedIndex() {
    const e = this.selected;
    return e ? this.indexOf(e) : -1;
  }
  get preferredLang() {
    return r(this, hs);
  }
  set preferredLang(e) {
    g(this, hs, e), c(this, ks, gl).call(this, e);
  }
  add(e, s) {
    const i = e instanceof P1, o = i ? e : new P1(e), a = e.kind === "captions" || e.kind === "subtitles" ? "captions" : e.kind;
    return r(this, us)[a] && e.default && delete e.default, o.addEventListener("mode-change", r(this, i3)), this[ye.add](o, s), o[he.crossOrigin] = this[he.crossOrigin], r(this, Gr) && o[he.canLoad](), e.default && (r(this, us)[a] = o), r(this, s3).call(this), this;
  }
  remove(e, s) {
    if (g(this, r6, e), !!this.items.includes(e))
      return e === r(this, us)[e.kind] && delete r(this, us)[e.kind], e.mode = "disabled", e[he.onModeChange] = null, e.removeEventListener("mode-change", r(this, i3)), this[ye.remove](e, s), g(this, r6, null), this;
  }
  clear(e) {
    for (const s of [...this.items])
      this.remove(s, e);
    return this;
  }
  getByKind(e) {
    const s = Array.isArray(e) ? e : [e];
    return this.items.filter((i) => s.includes(i.kind));
  }
  /** @internal */
  [(s5 = he.crossOrigin, he.canLoad)]() {
    if (!r(this, Gr)) {
      for (const e of this.items) e[he.canLoad]();
      g(this, Gr, !0), r(this, s3).call(this);
    }
  }
  setStorage(e) {
    g(this, ds, e);
  }
}
Gr = new WeakMap(), us = new WeakMap(), ds = new WeakMap(), hs = new WeakMap(), s3 = new WeakMap(), r6 = new WeakMap(), i3 = new WeakMap(), ks = new WeakSet(), $4 = function(e) {
  const s = e.detail;
  if (r(this, ds) && mn(s) && s !== r(this, r6) && c(this, ks, ml).call(this, s), s.mode === "showing") {
    const i = mn(s) ? ["captions", "subtitles"] : [s.kind];
    for (const o of this.items)
      o.mode === "showing" && o != s && i.includes(o.kind) && (o.mode = "disabled");
  }
  this.dispatchEvent(
    new $e("mode-change", {
      detail: e.detail,
      trigger: e
    })
  );
}, ml = function(e) {
  var s, i;
  e.mode !== "disabled" && c(this, ks, gl).call(this, e.language), (i = (s = r(this, ds)) == null ? void 0 : s.setCaptions) == null || i.call(s, e.mode === "showing");
}, gl = function(e) {
  var s, i;
  (i = (s = r(this, ds)) == null ? void 0 : s.setLang) == null || i.call(s, g(this, hs, e));
};
const bx = Symbol(0), wx = Symbol(0), fn = {
  setAuto: bx,
  enableAuto: wx
};
var i5, Wr;
class xx extends h4 {
  constructor() {
    super(...arguments);
    C(this, Wr, !1);
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
    $(this, i5);
  }
  /**
   * Whether automatic quality selection is enabled.
   */
  get auto() {
    return r(this, Wr) || this.readonly;
  }
  /** @internal */
  [(i5 = fn.enableAuto, ye.onUserSelect)]() {
    this[fn.setAuto](!1);
  }
  /** @internal */
  [ye.onReset](e) {
    this[fn.enableAuto] = void 0, this[fn.setAuto](!1, e);
  }
  /**
   * Request automatic quality selection (if supported). This will be a no-op if the list is
   * `readonly` as that already implies auto-selection.
   */
  autoSelect(e) {
    var s;
    this.readonly || r(this, Wr) || !this[fn.enableAuto] || ((s = this[fn.enableAuto]) == null || s.call(this, e), this[fn.setAuto](!0, e));
  }
  getBySrc(e) {
    return this.items.find((s) => s.src === e);
  }
  /** @internal */
  [fn.setAuto](e, s) {
    r(this, Wr) !== e && (g(this, Wr, e), this.dispatchEvent(
      new $e("auto-change", {
        detail: e,
        trigger: s
      })
    ));
  }
}
Wr = new WeakMap();
function Sx(n, t) {
  return [...n].sort(Ex);
}
function Ex(n, t) {
  return n.height === t.height ? (n.bitrate ?? 0) - (t.bitrate ?? 0) : n.height - t.height;
}
function $x(n) {
  return (n == null ? void 0 : n.$$PROVIDER_TYPE) === "HLS";
}
function Tx(n) {
  return !W && n instanceof HTMLAudioElement;
}
function Px(n) {
  return !W && n instanceof HTMLVideoElement;
}
function Lx(n) {
  return Tx(n) || Px(n);
}
class H1 extends Sn {
}
const kx = {
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
}, fa = /* @__PURE__ */ new Set(["Shift", "Alt", "Meta", "Ctrl"]), Mx = 'button, [role="button"]', yd = 'input, textarea, select, [contenteditable], [role^="menuitem"], [role="timer"]';
var St, lt, T4, P4, L4, k4, La, Ur, M4, Ys, yl, I4;
class Ix extends H1 {
  constructor(e) {
    super();
    C(this, lt);
    C(this, St);
    C(this, Ur);
    C(this, Ys, null);
    g(this, St, e);
  }
  onConnect() {
    T(c(this, lt, T4).bind(this));
  }
}
St = new WeakMap(), lt = new WeakSet(), T4 = function() {
  const { keyDisabled: e, keyTarget: s } = this.$props;
  if (e()) return;
  const i = s() === "player" ? this.el : document, o = re(!1);
  i === this.el ? new Ne(this.el).add("focusin", () => o.set(!0)).add("focusout", (a) => {
    this.el.contains(a.target) || o.set(!1);
  }) : (_(o) || o.set(document.querySelector("[data-media-player]") === this.el), Xe(document, "focusin", (a) => {
    const l = a.composedPath().find((d) => d instanceof Element && d.localName === "media-player");
    l !== void 0 && o.set(this.el === l);
  })), T(() => {
    o() && new Ne(i).add("keyup", c(this, lt, P4).bind(this)).add("keydown", c(this, lt, L4).bind(this)).add("keydown", c(this, lt, k4).bind(this), { capture: !0 });
  });
}, P4 = function(e) {
  var a, l;
  const s = document.activeElement;
  if (!e.key || !this.$state.canSeek() || s != null && s.matches(yd))
    return;
  let { method: i, value: o } = c(this, lt, La).call(this, e);
  if (!ce(o) && !Vt(o)) {
    (a = o == null ? void 0 : o.onKeyUp) == null || a.call(o, {
      event: e,
      player: r(this, St).player,
      remote: r(this, St).remote
    }), (l = o == null ? void 0 : o.callback) == null || l.call(o, e, r(this, St).remote);
    return;
  }
  if (i != null && i.startsWith("seek") && (e.preventDefault(), e.stopPropagation(), r(this, Ys) ? (c(this, lt, yl).call(this, e, i === "seekForward"), g(this, Ys, null)) : (r(this, St).remote.seek(r(this, Ur), e), g(this, Ur, void 0))), i != null && i.startsWith("volume")) {
    const d = this.el.querySelector("[data-media-volume-slider]");
    d == null || d.dispatchEvent(
      new KeyboardEvent("keyup", {
        key: i === "volumeUp" ? "Up" : "Down",
        shiftKey: e.shiftKey,
        trigger: e
      })
    );
  }
}, L4 = function(e) {
  var l, d, h, p;
  if (!e.key || fa.has(e.key)) return;
  const s = document.activeElement;
  if (s != null && s.matches(yd) || G9(e) && (s != null && s.matches(Mx)))
    return;
  let { method: i, value: o } = c(this, lt, La).call(this, e), a = !e.metaKey && /^[0-9]$/.test(e.key);
  if (!ce(o) && !Vt(o) && !a) {
    (l = o == null ? void 0 : o.onKeyDown) == null || l.call(o, {
      event: e,
      player: r(this, St).player,
      remote: r(this, St).remote
    }), (d = o == null ? void 0 : o.callback) == null || d.call(o, e, r(this, St).remote);
    return;
  }
  if (!i && a) {
    e.preventDefault(), e.stopPropagation(), r(this, St).remote.seek(this.$state.duration() / 10 * Number(e.key), e);
    return;
  }
  if (i) {
    switch (e.preventDefault(), e.stopPropagation(), i) {
      case "seekForward":
      case "seekBackward":
        c(this, lt, I4).call(this, e, i, i === "seekForward");
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
          r(this, St).remote.changeVolume(
            this.$state.volume() + (i === "volumeUp" ? +y : -y),
            e
          );
        }
        break;
      case "toggleFullscreen":
        r(this, St).remote.toggleFullscreen("prefer-media", e);
        break;
      case "speedUp":
      case "slowDown":
        const m = this.$state.playbackRate();
        r(this, St).remote.changePlaybackRate(
          Math.max(0.25, Math.min(2, m + (i === "speedUp" ? 0.25 : -0.25))),
          e
        );
        break;
      default:
        (p = (h = r(this, St).remote)[i]) == null || p.call(h, e);
    }
    this.$state.lastKeyboardAction.set({
      action: i,
      event: e
    });
  }
}, k4 = function(e) {
  Lx(e.target) && c(this, lt, La).call(this, e).method && e.preventDefault();
}, La = function(e) {
  const s = {
    ...this.$props.keyShortcuts(),
    ...r(this, St).ariaKeys
  }, i = Object.keys(s).find((o) => {
    var h;
    const a = s[o], l = Vt(a) ? a.join(" ") : ce(a) ? a : a == null ? void 0 : a.keys, d = (h = Vt(l) ? l : l == null ? void 0 : l.split(" ")) == null ? void 0 : h.map(
      (p) => Ax(p).replace(/Control/g, "Ctrl").split("+")
    );
    return d == null ? void 0 : d.some((p) => {
      const f = new Set(p.filter((m) => fa.has(m)));
      for (const m of fa) {
        const y = m.toLowerCase() + "Key";
        if (!f.has(m) && e[y])
          return !1;
      }
      return p.every((m) => fa.has(m) ? e[m.toLowerCase() + "Key"] : e.key === m.replace("Space", " "));
    });
  });
  return {
    method: i,
    value: i ? s[i] : null
  };
}, Ur = new WeakMap(), M4 = function(e, s) {
  const i = e.shiftKey ? 10 : 5;
  return g(this, Ur, Math.max(
    0,
    Math.min(
      (r(this, Ur) ?? this.$state.currentTime()) + (s === "seekForward" ? +i : -i),
      this.$state.duration()
    )
  ));
}, Ys = new WeakMap(), yl = function(e, s) {
  var i;
  (i = r(this, Ys)) == null || i.dispatchEvent(
    new KeyboardEvent(e.type, {
      key: s ? "Right" : "Left",
      shiftKey: e.shiftKey,
      trigger: e
    })
  );
}, I4 = function(e, s, i) {
  this.$state.canSeek() && (r(this, Ys) || g(this, Ys, this.el.querySelector("[data-media-time-slider]")), r(this, Ys) ? c(this, lt, yl).call(this, e, i) : r(this, St).remote.seeking(c(this, lt, M4).call(this, e, s), e));
};
const Vx = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
function Ax(n) {
  return n.replace(/Shift\+(\d)/g, (t, e) => Vx[e - 1]);
}
var Kr;
class Rx extends Sn {
  constructor(e) {
    super();
    C(this, Kr);
    g(this, Kr, e);
  }
  onAttach(e) {
    const { $props: s, ariaKeys: i } = je(), o = e.getAttribute("aria-keyshortcuts");
    if (o) {
      i[r(this, Kr)] = o, W || pe(() => {
        delete i[r(this, Kr)];
      });
      return;
    }
    const a = s.keyShortcuts()[r(this, Kr)];
    if (a) {
      const l = Vt(a) ? a.join(" ") : ce(a) ? a : a == null ? void 0 : a.keys;
      e.setAttribute("aria-keyshortcuts", Vt(l) ? l.join(" ") : l);
    }
  }
}
Kr = new WeakMap();
var o6, Qs, r3, a6, Ri, c6, Ae, V4, A4, R4, N4, H4, O4, D4, _4, ka, vl, No, bl;
class Nx extends H1 {
  constructor() {
    super(...arguments);
    C(this, Ae);
    C(this, o6, -2);
    C(this, Qs, !1);
    C(this, r3, re(!1));
    C(this, a6, re(!1));
    C(this, Ri, null);
    C(this, c6, re(!0));
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
    return r(this, c6).call(this);
  }
  set canIdle(e) {
    r(this, c6).set(e);
  }
  /**
   * Whether controls visibility should be toggled when the mouse enters and leaves the player
   * container.
   *
   * @defaultValue false
   */
  get hideOnMouseLeave() {
    const { hideControlsOnMouseLeave: e } = this.$props;
    return r(this, r3).call(this) || e();
  }
  set hideOnMouseLeave(e) {
    r(this, r3).set(e);
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
  show(e = 0, s) {
    c(this, Ae, ka).call(this), r(this, Qs) || c(this, Ae, No).call(this, !0, e, s);
  }
  /**
   * Hide controls.
   */
  hide(e = this.defaultDelay, s) {
    c(this, Ae, ka).call(this), r(this, Qs) || c(this, Ae, No).call(this, !1, e, s);
  }
  /**
   * Whether all idle tracking on controls should be paused until resumed again.
   */
  pause(e) {
    g(this, Qs, !0), c(this, Ae, ka).call(this), c(this, Ae, No).call(this, !0, 0, e);
  }
  resume(e) {
    g(this, Qs, !1), !this.$state.paused() && c(this, Ae, No).call(this, !1, this.defaultDelay, e);
  }
  onConnect() {
    T(c(this, Ae, V4).bind(this));
  }
}
o6 = new WeakMap(), Qs = new WeakMap(), r3 = new WeakMap(), a6 = new WeakMap(), Ri = new WeakMap(), c6 = new WeakMap(), Ae = new WeakSet(), V4 = function() {
  const { viewType: e } = this.$state;
  if (!this.el || !r(this, c6).call(this)) return;
  if (e() === "audio") {
    this.show();
    return;
  }
  T(c(this, Ae, A4).bind(this)), T(c(this, Ae, R4).bind(this));
  const s = c(this, Ae, N4).bind(this), i = c(this, Ae, H4).bind(this), o = c(this, Ae, O4).bind(this);
  new Ne(this.el).add("can-play", (a) => this.show(0, a)).add("play", s).add("pause", i).add("end", o).add("auto-play-fail", i);
}, A4 = function() {
  if (!this.el) return;
  const { started: e, pointer: s, paused: i } = this.$state;
  if (!e() || s() !== "fine") return;
  const o = new Ne(this.el), a = this.hideOnMouseLeave;
  (!a || !r(this, a6).call(this)) && T(() => {
    i() || o.add("pointermove", c(this, Ae, vl).bind(this));
  }), a && o.add("mouseenter", c(this, Ae, D4).bind(this)).add("mouseleave", c(this, Ae, _4).bind(this));
}, R4 = function() {
  const { paused: e, started: s, autoPlayError: i } = this.$state;
  if (e() || i() && !s()) return;
  const o = c(this, Ae, vl).bind(this);
  T(() => {
    if (!this.el) return;
    const a = this.$state.pointer(), l = a === "coarse", d = new Ne(this.el), h = [l ? "touchend" : "pointerup", "keydown"];
    for (const p of h)
      d.add(p, o, { passive: !1 });
  });
}, N4 = function(e) {
  e.triggers.hasType("ended") || (this.show(0, e), this.hide(void 0, e));
}, H4 = function(e) {
  this.show(0, e);
}, O4 = function(e) {
  const { loop: s } = this.$state;
  s() && this.hide(0, e);
}, D4 = function(e) {
  r(this, a6).set(!1), this.show(0, e), this.hide(void 0, e);
}, _4 = function(e) {
  r(this, a6).set(!0), this.hide(0, e);
}, ka = function() {
  window.clearTimeout(r(this, o6)), g(this, o6, -1);
}, vl = function(e) {
  var s;
  // @ts-expect-error
  e.MEDIA_GESTURE || r(this, Qs) || c7(e) || (ta(e) && (e.key === "Escape" ? ((s = this.el) == null || s.focus(), g(this, Ri, null)) : r(this, Ri) && (e.preventDefault(), requestAnimationFrame(() => {
    var i;
    (i = r(this, Ri)) == null || i.focus(), g(this, Ri, null);
  }))), this.show(0, e), this.hide(this.defaultDelay, e));
}, No = function(e, s, i) {
  if (s === 0) {
    c(this, Ae, bl).call(this, e, i);
    return;
  }
  g(this, o6, window.setTimeout(() => {
    this.scope && c(this, Ae, bl).call(this, e && !r(this, Qs), i);
  }, s));
}, bl = function(e, s) {
  var i;
  this.$state.controlsVisible() !== e && (this.$state.controlsVisible.set(e), !e && document.activeElement && ((i = this.el) != null && i.contains(document.activeElement)) && (g(this, Ri, document.activeElement), requestAnimationFrame(() => {
    var o;
    (o = this.el) == null || o.focus({ preventScroll: !0 });
  })), this.dispatch("controls-change", {
    detail: e,
    trigger: s
  }));
};
const wl = gr.fullscreenEnabled;
var Ni, l6, Er, F4, j4, q4;
class Hx extends Sn {
  constructor() {
    super(...arguments);
    C(this, Er);
    /**
     * Tracks whether we're the active fullscreen event listener. Fullscreen events can only be
     * listened to globally on the document so we need to know if they relate to the current host
     * element or not.
     */
    C(this, Ni, !1);
    C(this, l6, !1);
  }
  get active() {
    return r(this, l6);
  }
  get supported() {
    return wl;
  }
  onConnect() {
    new Ne(gr).add("fullscreenchange", c(this, Er, j4).bind(this)).add("fullscreenerror", c(this, Er, q4).bind(this)), pe(c(this, Er, F4).bind(this));
  }
  async enter() {
    try {
      return g(this, Ni, !0), !this.el || bc(this.el) ? void 0 : (vd(), gr.requestFullscreen(this.el));
    } catch (e) {
      throw g(this, Ni, !1), e;
    }
  }
  async exit() {
    if (!(!this.el || !bc(this.el)))
      return vd(), gr.exitFullscreen();
  }
}
Ni = new WeakMap(), l6 = new WeakMap(), Er = new WeakSet(), F4 = async function() {
  wl && await this.exit();
}, j4 = function(e) {
  const s = bc(this.el);
  s !== r(this, l6) && (s || g(this, Ni, !1), g(this, l6, s), this.dispatch("fullscreen-change", { detail: s, trigger: e }));
}, q4 = function(e) {
  r(this, Ni) && (this.dispatch("fullscreen-error", { detail: null, trigger: e }), g(this, Ni, !1));
};
function bc(n) {
  if (gr.fullscreenElement === n) return !0;
  try {
    return n.matches(
      // @ts-expect-error - `fullscreenPseudoClass` is missing from `@types/fscreen`.
      gr.fullscreenPseudoClass
    );
  } catch {
    return !1;
  }
}
function vd() {
  if (!wl)
    throw Error(
      "[vidstack] no fullscreen API"
    );
}
var Hi, Xs, zr, wn, Z4, xl, Sl, El;
const y2 = class y2 extends Sn {
  constructor() {
    super(...arguments);
    C(this, wn);
    C(this, Hi, re(c(this, wn, El).call(this)));
    C(this, Xs, re(!1));
    C(this, zr);
  }
  /**
   * The current screen orientation type.
   *
   * @signal
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation}
   * @see https://w3c.github.io/screen-orientation/#screen-orientation-types-and-locks
   */
  get type() {
    return r(this, Hi).call(this);
  }
  /**
   * Whether the screen orientation is currently locked.
   *
   * @signal
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation}
   * @see https://w3c.github.io/screen-orientation/#screen-orientation-types-and-locks
   */
  get locked() {
    return r(this, Xs).call(this);
  }
  /**
   * Whether the viewport is in a portrait orientation.
   *
   * @signal
   */
  get portrait() {
    return r(this, Hi).call(this).startsWith("portrait");
  }
  /**
   * Whether the viewport is in a landscape orientation.
   *
   * @signal
   */
  get landscape() {
    return r(this, Hi).call(this).startsWith("landscape");
  }
  /**
   * Whether the native Screen Orientation API is available.
   */
  get supported() {
    return y2.supported;
  }
  onConnect() {
    if (this.supported)
      Xe(screen.orientation, "change", c(this, wn, xl).bind(this));
    else {
      const e = window.matchMedia("(orientation: landscape)");
      e.onchange = c(this, wn, xl).bind(this), pe(() => e.onchange = null);
    }
    pe(c(this, wn, Z4).bind(this));
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
    _(r(this, Xs)) || r(this, zr) === e || (c(this, wn, Sl).call(this), await screen.orientation.lock(e), r(this, Xs).set(!0), g(this, zr, e));
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
    _(r(this, Xs)) && (c(this, wn, Sl).call(this), g(this, zr, void 0), await screen.orientation.unlock(), r(this, Xs).set(!1));
  }
};
Hi = new WeakMap(), Xs = new WeakMap(), zr = new WeakMap(), wn = new WeakSet(), Z4 = async function() {
  this.supported && r(this, Xs).call(this) && await this.unlock();
}, xl = function(e) {
  r(this, Hi).set(c(this, wn, El).call(this)), this.dispatch("orientation-change", {
    detail: {
      orientation: _(r(this, Hi)),
      lock: r(this, zr)
    },
    trigger: e
  });
}, Sl = function() {
  if (!this.supported)
    throw Error(
      "[vidstack] no orientation API"
    );
}, El = function() {
  return W ? "portrait-primary" : this.supported ? window.screen.orientation.type : window.innerWidth >= window.innerHeight ? "landscape-primary" : "portrait-primary";
}, /**
 * Whether the native Screen Orientation API is available.
 */
$(y2, "supported", X5());
let o2 = y2;
class Ox {
  constructor() {
    $(this, "name", "audio");
    $(this, "target");
  }
  canPlay(t) {
    return r4(t) ? W || !ce(t.src) || t.type === "?" || J5(this.target, t.type) : !1;
  }
  mediaType() {
    return "audio";
  }
  async load(t) {
    if (W)
      throw Error("[vidstack] can not load audio provider server-side");
    return new (await import("./vidstack-i8ZXTtoj-CV-OhwpL.js")).AudioProvider(this.target, t);
  }
}
class l7 {
  constructor() {
    $(this, "name", "video");
    $(this, "target");
  }
  canPlay(t) {
    return o4(t) ? W || !ce(t.src) || t.type === "?" || e4(this.target, t.type) : !1;
  }
  mediaType() {
    return "video";
  }
  async load(t) {
    if (W)
      throw Error("[vidstack] can not load video provider server-side");
    return new (await Promise.resolve().then(function() {
      return sS;
    })).VideoProvider(this.target, t);
  }
}
const v2 = class v2 extends l7 {
  constructor() {
    super(...arguments);
    $(this, "name", "hls");
  }
  canPlay(e) {
    return v2.supported && go(e);
  }
  async load(e) {
    if (W)
      throw Error("[vidstack] can not load hls provider server-side");
    return new (await import("./vidstack-Dj0oEz46-CNhbhGye.js")).HLSProvider(this.target, e);
  }
};
$(v2, "supported", s7());
let $l = v2, Ma = null, a2 = [], c2 = [];
function u7() {
  return Ma ?? (Ma = new AudioContext());
}
function Dx() {
  const n = u7(), t = n.createGain();
  return t.connect(n.destination), a2.push(t), t;
}
function _x(n, t) {
  const e = u7(), s = e.createMediaElementSource(n);
  return t && s.connect(t), c2.push(s), s;
}
function Fx(n) {
  const t = a2.indexOf(n);
  t !== -1 && (a2.splice(t, 1), n.disconnect(), B4());
}
function jx(n) {
  const t = c2.indexOf(n);
  t !== -1 && (c2.splice(t, 1), n.disconnect(), B4());
}
function B4() {
  Ma && a2.length === 0 && c2.length === 0 && Ma.close().then(() => {
    Ma = null;
  });
}
var o3, u6, un, Pn, k1, G4, Tl;
class qx {
  constructor(t, e) {
    C(this, k1);
    C(this, o3);
    C(this, u6);
    C(this, un, null);
    C(this, Pn, null);
    g(this, o3, t), g(this, u6, e);
  }
  get currentGain() {
    var t, e;
    return ((e = (t = r(this, un)) == null ? void 0 : t.gain) == null ? void 0 : e.value) ?? null;
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
      r(this, un) || (g(this, un, Dx()), r(this, Pn) && r(this, Pn).connect(r(this, un))), r(this, Pn) || g(this, Pn, _x(r(this, o3), r(this, un))), r(this, un).gain.value = t, r(this, u6).call(this, t);
    }
  }
  removeGain() {
    r(this, un) && (r(this, Pn) && r(this, Pn).connect(u7().destination), c(this, k1, Tl).call(this), r(this, u6).call(this, null));
  }
  destroy() {
    c(this, k1, G4).call(this), c(this, k1, Tl).call(this);
  }
}
o3 = new WeakMap(), u6 = new WeakMap(), un = new WeakMap(), Pn = new WeakMap(), k1 = new WeakSet(), G4 = function() {
  if (r(this, Pn))
    try {
      jx(r(this, Pn));
    } catch {
    } finally {
      g(this, Pn, null);
    }
}, Tl = function() {
  if (r(this, un))
    try {
      Fx(r(this, un));
    } catch {
    } finally {
      g(this, un, null);
    }
};
const Zx = ["focus", "blur", "visibilitychange", "pageshow", "pagehide"];
var Yr, d6, a3, b2, W4;
class Bx {
  constructor() {
    C(this, b2);
    C(this, Yr, re(bd()));
    C(this, d6, re(W ? "visible" : document.visibilityState));
    C(this, a3);
  }
  connect() {
    const t = new Ne(window), e = c(this, b2, W4).bind(this);
    for (const s of Zx)
      t.add(s, e);
    i2 && t.add("beforeunload", (s) => {
      g(this, a3, setTimeout(() => {
        s.defaultPrevented || s.returnValue.length > 0 || (r(this, Yr).set("hidden"), r(this, d6).set("hidden"));
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
    return r(this, Yr).call(this);
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
    return r(this, d6).call(this);
  }
}
Yr = new WeakMap(), d6 = new WeakMap(), a3 = new WeakMap(), b2 = new WeakSet(), W4 = function(t) {
  i2 && window.clearTimeout(r(this, a3)), (t.type !== "blur" || r(this, Yr).call(this) === "active") && (r(this, Yr).set(bd(t)), r(this, d6).set(document.visibilityState == "hidden" ? "hidden" : "visible"));
};
function bd(n) {
  return W || (n == null ? void 0 : n.type) === "blur" || document.visibilityState === "hidden" ? "hidden" : document.hasFocus() ? "active" : "passive";
}
var Js, c3, l3, Pl;
class U4 {
  constructor(t) {
    C(this, l3);
    C(this, Js);
    C(this, c3);
    g(this, c3, t);
  }
  start() {
    vt(r(this, Js)) && c(this, l3, Pl).call(this);
  }
  stop() {
    tn(r(this, Js)) && window.cancelAnimationFrame(r(this, Js)), g(this, Js, void 0);
  }
}
Js = new WeakMap(), c3 = new WeakMap(), l3 = new WeakSet(), Pl = function() {
  g(this, Js, window.requestAnimationFrame(() => {
    vt(r(this, Js)) || (r(this, c3).call(this), c(this, l3, Pl).call(this));
  }));
};
var u3, we, Oi, h6, f6, Qr, d3, p6, L, Ie, K4, C6, m6, z4, Y4, Q4, X4, w2, I9, st, Wx, Vr, J4, Ll, e0, t0, n0, Ia, s0, i0, r0, o0, a0, c0, l0, u0, d0, h0, f0, p0, C0, m0, g0, y0, v0, b0;
class Gx {
  constructor(t, e) {
    C(this, L);
    C(this, u3);
    C(this, we);
    C(this, Oi, !1);
    C(this, h6, !1);
    C(this, f6, !1);
    C(this, Qr, new U4(c(this, L, z4).bind(this)));
    C(this, d3, new Bx());
    C(this, p6);
    /**
     * The `timeupdate` event fires surprisingly infrequently during playback, meaning your progress
     * bar (or whatever else is synced to the currentTime) moves in a choppy fashion. This helps
     * resolve that by retrieving time updates in a request animation frame loop.
     */
    C(this, C6, 0);
    C(this, m6, -1);
    C(this, w2);
    C(this, I9);
    g(this, u3, t), g(this, we, e), g(this, p6, new Ne(t.media)), c(this, L, Y4).call(this), r(this, d3).connect(), T(c(this, L, d0).bind(this)), pe(c(this, L, K4).bind(this));
  }
}
u3 = new WeakMap(), we = new WeakMap(), Oi = new WeakMap(), h6 = new WeakMap(), f6 = new WeakMap(), Qr = new WeakMap(), d3 = new WeakMap(), p6 = new WeakMap(), L = new WeakSet(), Ie = function() {
  return r(this, u3).media;
}, K4 = function() {
  var t;
  g(this, h6, !1), g(this, f6, !1), r(this, Qr).stop(), r(this, p6).abort(), (t = r(this, w2)) == null || t.clear();
}, C6 = new WeakMap(), m6 = new WeakMap(), z4 = function() {
  const t = r(this, L, Ie).currentTime;
  !(i2 && t - r(this, m6) < 0.35) && r(this, C6) !== t && (c(this, L, Vr).call(this, t), g(this, C6, t));
}, Y4 = function() {
  c(this, L, st).call(this, "loadstart", c(this, L, J4)), c(this, L, st).call(this, "abort", c(this, L, Ll)), c(this, L, st).call(this, "emptied", c(this, L, e0)), c(this, L, st).call(this, "error", c(this, L, b0)), c(this, L, st).call(this, "volumechange", c(this, L, p0));
}, Q4 = function() {
  r(this, h6) || (c(this, L, st).call(this, "loadeddata", c(this, L, t0)), c(this, L, st).call(this, "loadedmetadata", c(this, L, n0)), c(this, L, st).call(this, "canplay", c(this, L, r0)), c(this, L, st).call(this, "canplaythrough", c(this, L, o0)), c(this, L, st).call(this, "durationchange", c(this, L, f0)), c(this, L, st).call(this, "play", c(this, L, s0)), c(this, L, st).call(this, "progress", c(this, L, g0)), c(this, L, st).call(this, "stalled", c(this, L, c0)), c(this, L, st).call(this, "suspend", c(this, L, y0)), c(this, L, st).call(this, "ratechange", c(this, L, v0)), g(this, h6, !0));
}, X4 = function() {
  r(this, f6) || (c(this, L, st).call(this, "pause", c(this, L, i0)), c(this, L, st).call(this, "playing", c(this, L, a0)), c(this, L, st).call(this, "seeked", c(this, L, C0)), c(this, L, st).call(this, "seeking", c(this, L, m0)), c(this, L, st).call(this, "ended", c(this, L, u0)), c(this, L, st).call(this, "waiting", c(this, L, l0)), g(this, f6, !0));
}, w2 = new WeakMap(), I9 = new WeakMap(), st = function(t, e) {
  r(this, p6).add(t, e.bind(this));
}, Wx = function(t) {
}, Vr = function(t, e) {
  const s = Math.min(t, r(this, we).$state.seekableEnd());
  r(this, we).notify("time-change", s, e);
}, J4 = function(t) {
  if (r(this, L, Ie).networkState === 3) {
    c(this, L, Ll).call(this, t);
    return;
  }
  c(this, L, Q4).call(this), r(this, we).notify("load-start", void 0, t);
}, Ll = function(t) {
  r(this, we).notify("abort", void 0, t);
}, e0 = function() {
  r(this, we).notify("emptied", void 0, event);
}, t0 = function(t) {
  r(this, we).notify("loaded-data", void 0, t);
}, n0 = function(t) {
  g(this, C6, 0), g(this, m6, -1), c(this, L, X4).call(this), r(this, we).notify("loaded-metadata", void 0, t), (n7 || i2 && go(r(this, we).$state.source())) && r(this, we).delegate.ready(c(this, L, Ia).call(this), t);
}, Ia = function() {
  return {
    provider: _(r(this, we).$provider),
    duration: r(this, L, Ie).duration,
    buffered: r(this, L, Ie).buffered,
    seekable: r(this, L, Ie).seekable
  };
}, s0 = function(t) {
  r(this, we).$state.canPlay && r(this, we).notify("play", void 0, t);
}, i0 = function(t) {
  r(this, L, Ie).readyState === 1 && !r(this, Oi) || (g(this, Oi, !1), r(this, Qr).stop(), r(this, we).notify("pause", void 0, t));
}, r0 = function(t) {
  r(this, we).delegate.ready(c(this, L, Ia).call(this), t);
}, o0 = function(t) {
  r(this, we).$state.started() || r(this, we).notify("can-play-through", c(this, L, Ia).call(this), t);
}, a0 = function(t) {
  r(this, L, Ie).paused || (g(this, Oi, !1), r(this, we).notify("playing", void 0, t), r(this, Qr).start());
}, c0 = function(t) {
  r(this, we).notify("stalled", void 0, t), r(this, L, Ie).readyState < 3 && (g(this, Oi, !0), r(this, we).notify("waiting", void 0, t));
}, l0 = function(t) {
  r(this, L, Ie).readyState < 3 && (g(this, Oi, !0), r(this, we).notify("waiting", void 0, t));
}, u0 = function(t) {
  r(this, Qr).stop(), c(this, L, Vr).call(this, r(this, L, Ie).duration, t), r(this, we).notify("end", void 0, t), r(this, we).$state.loop() && g5(r(this, L, Ie).controls) && (r(this, L, Ie).controls = !1);
}, d0 = function() {
  const t = r(this, we).$state.paused(), e = r(this, d3).visibility === "hidden";
  (t || e) && Xe(r(this, L, Ie), "timeupdate", c(this, L, h0).bind(this));
}, h0 = function(t) {
  c(this, L, Vr).call(this, r(this, L, Ie).currentTime, t);
}, f0 = function(t) {
  r(this, we).$state.ended() && c(this, L, Vr).call(this, r(this, L, Ie).duration, t), r(this, we).notify("duration-change", r(this, L, Ie).duration, t);
}, p0 = function(t) {
  const e = {
    volume: r(this, L, Ie).volume,
    muted: r(this, L, Ie).muted
  };
  r(this, we).notify("volume-change", e, t);
}, C0 = function(t) {
  g(this, m6, r(this, L, Ie).currentTime), c(this, L, Vr).call(this, r(this, L, Ie).currentTime, t), r(this, we).notify("seeked", r(this, L, Ie).currentTime, t), Math.trunc(r(this, L, Ie).currentTime) === Math.trunc(r(this, L, Ie).duration) && dl(r(this, L, Ie).duration) > dl(r(this, L, Ie).currentTime) && (c(this, L, Vr).call(this, r(this, L, Ie).duration, t), r(this, L, Ie).ended || r(this, we).player.dispatch(
    new $e("media-play-request", {
      trigger: t
    })
  ));
}, m0 = function(t) {
  r(this, we).notify("seeking", r(this, L, Ie).currentTime, t);
}, g0 = function(t) {
  const e = {
    buffered: r(this, L, Ie).buffered,
    seekable: r(this, L, Ie).seekable
  };
  r(this, we).notify("progress", e, t);
}, y0 = function(t) {
  r(this, we).notify("suspend", void 0, t);
}, v0 = function(t) {
  r(this, we).notify("rate-change", r(this, L, Ie).playbackRate, t);
}, b0 = function(t) {
  const e = r(this, L, Ie).error;
  if (!e) return;
  const s = {
    message: e.message,
    code: e.code,
    mediaError: e
  };
  r(this, we).notify("error", s, t);
};
var h3, qn, yt, U1, w0, x0, S0, kl, E0;
class Ux {
  constructor(t, e) {
    C(this, yt);
    C(this, h3);
    C(this, qn);
    g(this, h3, t), g(this, qn, e), r(this, yt, U1).onaddtrack = c(this, yt, w0).bind(this), r(this, yt, U1).onremovetrack = c(this, yt, x0).bind(this), r(this, yt, U1).onchange = c(this, yt, S0).bind(this), Xe(r(this, qn).audioTracks, "change", c(this, yt, E0).bind(this));
  }
}
h3 = new WeakMap(), qn = new WeakMap(), yt = new WeakSet(), U1 = function() {
  return r(this, h3).media.audioTracks;
}, w0 = function(t) {
  const e = t.track;
  if (e.label === "") return;
  const s = e.id.toString() || `native-audio-${r(this, qn).audioTracks.length}`, i = {
    id: s,
    label: e.label,
    language: e.language,
    kind: e.kind,
    selected: !1
  };
  r(this, qn).audioTracks[ye.add](i, t), e.enabled && (i.selected = !0);
}, x0 = function(t) {
  const e = r(this, qn).audioTracks.getById(t.track.id);
  e && r(this, qn).audioTracks[ye.remove](e, t);
}, S0 = function(t) {
  let e = c(this, yt, kl).call(this);
  if (!e) return;
  const s = r(this, qn).audioTracks.getById(e.id);
  s && r(this, qn).audioTracks[ye.select](s, !0, t);
}, kl = function() {
  return Array.from(r(this, yt, U1)).find((t) => t.enabled);
}, E0 = function(t) {
  const { current: e } = t.detail;
  if (!e) return;
  const s = r(this, yt, U1).getTrackById(e.id);
  if (s) {
    const i = c(this, yt, kl).call(this);
    i && (i.enabled = !1), s.enabled = !0;
  }
};
var f3, Ml;
class Kx {
  constructor(t, e) {
    C(this, f3);
    $(this, "scope", oo());
    $(this, "currentSrc", null);
    $(this, "audioGain");
    this.media = t, this.ctx = e, this.audioGain = new qx(t, (s) => {
      this.ctx.notify("audio-gain-change", s);
    });
  }
  setup() {
    new Gx(this, this.ctx), "audioTracks" in this.media && new Ux(this, this.ctx), pe(() => {
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
    ie(this.media, "playsinline", t);
  }
  async loadSource({ src: t, type: e }, s) {
    this.media.preload = s || "", Bw(t) ? (this.removeSource(), this.media.srcObject = t) : (this.media.srcObject = null, ce(t) ? e !== "?" ? this.appendSource({ src: t, type: e }) : (this.removeSource(), this.media.src = c(this, f3, Ml).call(this, t)) : (this.removeSource(), this.media.src = window.URL.createObjectURL(t))), this.media.load(), this.currentSrc = { src: t, type: e };
  }
  /**
   * Append source so it works when requesting AirPlay since hls.js will remove it.
   */
  appendSource(t, e) {
    const s = this.media.querySelector("source[data-vds]"), i = s ?? document.createElement("source");
    ie(i, "src", c(this, f3, Ml).call(this, t.src)), ie(i, "type", t.type !== "?" ? t.type : e), ie(i, "data-vds", ""), s || this.media.append(i);
  }
  removeSource() {
    var t;
    (t = this.media.querySelector("source[data-vds]")) == null || t.remove();
  }
}
f3 = new WeakSet(), Ml = function(t) {
  const { clipStartTime: e, clipEndTime: s } = this.ctx.$state, i = e(), o = s();
  return i > 0 && o > 0 ? `${t}#t=${i},${o}` : i > 0 ? `${t}#t=${i}` : o > 0 ? `${t}#t=0,${o}` : t;
};
var Ln, p3, C3, Xr, $r, $0, T0, P0;
class zx {
  constructor(t, e) {
    C(this, $r);
    C(this, Ln);
    C(this, p3);
    C(this, C3);
    C(this, Xr, re(!1));
    g(this, Ln, t), g(this, p3, e), c(this, $r, $0).call(this);
  }
  get supported() {
    return r(this, Xr).call(this);
  }
  async prompt() {
    if (!this.supported) throw Error("Not supported on this platform.");
    return this.type === "airplay" && r(this, Ln).webkitShowPlaybackTargetPicker ? r(this, Ln).webkitShowPlaybackTargetPicker() : r(this, Ln).remote.prompt();
  }
}
Ln = new WeakMap(), p3 = new WeakMap(), C3 = new WeakMap(), Xr = new WeakMap(), $r = new WeakSet(), $0 = function() {
  var t;
  W || !((t = r(this, Ln)) != null && t.remote) || !this.canPrompt || (r(this, Ln).remote.watchAvailability((e) => {
    r(this, Xr).set(e);
  }).catch(() => {
    r(this, Xr).set(!1);
  }), T(c(this, $r, T0).bind(this)));
}, T0 = function() {
  if (!r(this, Xr).call(this)) return;
  const t = ["connecting", "connect", "disconnect"], e = c(this, $r, P0).bind(this);
  e(), Xe(r(this, Ln), "playing", e);
  const s = new Ne(r(this, Ln).remote);
  for (const i of t)
    s.add(i, e);
}, P0 = function(t) {
  const e = r(this, Ln).remote.state;
  if (e === r(this, C3)) return;
  const s = { type: this.type, state: e };
  r(this, p3).notify("remote-playback-change", s, t), g(this, C3, e);
};
class Yx extends zx {
  constructor() {
    super(...arguments);
    $(this, "type", "airplay");
  }
  get canPrompt() {
    return "WebKitPlaybackTargetAvailabilityEvent" in window;
  }
}
var g6, y6, uo, L0, k0;
class Qx {
  constructor(t, e) {
    C(this, uo);
    C(this, g6);
    C(this, y6);
    g(this, g6, t), g(this, y6, e), t.textTracks.onaddtrack = c(this, uo, L0).bind(this), pe(c(this, uo, k0).bind(this));
  }
}
g6 = new WeakMap(), y6 = new WeakMap(), uo = new WeakSet(), L0 = function(t) {
  const e = t.track;
  if (!e || Xx(r(this, g6), e)) return;
  const s = new P1({
    id: e.id,
    kind: e.kind,
    label: e.label ?? "",
    language: e.language,
    type: "vtt"
  });
  s[he.native] = { track: e }, s[he.readyState] = 2, s[he.nativeHLS] = !0;
  let i = 0;
  const o = (a) => {
    if (e.cues)
      for (let l = i; l < e.cues.length; l++)
        s.addCue(e.cues[l], a), i++;
  };
  o(t), e.oncuechange = o, r(this, y6).textTracks.add(s, t), s.setMode(e.mode, t);
}, k0 = function() {
  var t;
  r(this, g6).textTracks.onaddtrack = null;
  for (const e of r(this, y6).textTracks) {
    const s = (t = e[he.native]) == null ? void 0 : t.track;
    s != null && s.oncuechange && (s.oncuechange = null);
  }
};
function Xx(n, t) {
  return Array.from(n.children).find((e) => e.track === t);
}
var Jr, m3, ho, M0, I0, g3;
class Jx {
  constructor(t, e) {
    C(this, ho);
    C(this, Jr);
    C(this, m3);
    C(this, g3, (t, e) => {
      r(this, m3).notify("picture-in-picture-change", t, e);
    });
    g(this, Jr, t), g(this, m3, e), new Ne(t).add("enterpictureinpicture", c(this, ho, M0).bind(this)).add("leavepictureinpicture", c(this, ho, I0).bind(this));
  }
  get active() {
    return document.pictureInPictureElement === r(this, Jr);
  }
  get supported() {
    return n4(r(this, Jr));
  }
  async enter() {
    return r(this, Jr).requestPictureInPicture();
  }
  exit() {
    return document.exitPictureInPicture();
  }
}
Jr = new WeakMap(), m3 = new WeakMap(), ho = new WeakSet(), M0 = function(t) {
  r(this, g3).call(this, !0, t);
}, I0 = function(t) {
  r(this, g3).call(this, !1, t);
}, g3 = new WeakMap();
var e1, v6, fs, x2, V0;
class eS {
  constructor(t, e) {
    C(this, x2);
    C(this, e1);
    C(this, v6);
    C(this, fs, "inline");
    g(this, e1, t), g(this, v6, e), Xe(t, "webkitpresentationmodechanged", c(this, x2, V0).bind(this));
  }
  get mode() {
    return r(this, fs);
  }
  get supported() {
    return s4(r(this, e1));
  }
  async setPresentationMode(t) {
    r(this, fs) !== t && r(this, e1).webkitSetPresentationMode(t);
  }
}
e1 = new WeakMap(), v6 = new WeakMap(), fs = new WeakMap(), x2 = new WeakSet(), V0 = function(t) {
  var s;
  const e = r(this, fs);
  g(this, fs, r(this, e1).webkitPresentationMode), (s = r(this, v6).player) == null || s.dispatch(
    new $e("video-presentation-change", {
      detail: r(this, fs),
      trigger: t
    })
  ), ["fullscreen", "picture-in-picture"].forEach((i) => {
    (r(this, fs) === i || e === i) && r(this, v6).notify(`${i}-change`, r(this, fs) === i, t);
  });
};
var Di;
class tS {
  constructor(t) {
    C(this, Di);
    g(this, Di, t);
  }
  get active() {
    return r(this, Di).mode === "fullscreen";
  }
  get supported() {
    return r(this, Di).supported;
  }
  async enter() {
    r(this, Di).setPresentationMode("fullscreen");
  }
  async exit() {
    r(this, Di).setPresentationMode("inline");
  }
}
Di = new WeakMap();
var _i;
class nS {
  constructor(t) {
    C(this, _i);
    g(this, _i, t);
  }
  get active() {
    return r(this, _i).mode === "picture-in-picture";
  }
  get supported() {
    return r(this, _i).supported;
  }
  async enter() {
    r(this, _i).setPresentationMode("picture-in-picture");
  }
  async exit() {
    r(this, _i).setPresentationMode("inline");
  }
}
_i = new WeakMap();
let A0 = class extends Kx {
  constructor(e, s) {
    super(e, s);
    $(this, "$$PROVIDER_TYPE", "VIDEO");
    $(this, "airPlay");
    $(this, "fullscreen");
    $(this, "pictureInPicture");
    Gt(() => {
      if (this.airPlay = new Yx(e, s), s4(e)) {
        const i = new eS(e, s);
        this.fullscreen = new tS(i), this.pictureInPicture = new nS(i);
      } else n4(e) && (this.pictureInPicture = new Jx(e, s));
    }, this.scope);
  }
  get type() {
    return "video";
  }
  setup() {
    super.setup(), t4(this.video) && new Qx(this.video, this.ctx), this.ctx.textRenderers.attachVideo(this.video), pe(() => {
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
var sS = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  VideoProvider: A0
});
function wd(n) {
  try {
    return new Intl.DisplayNames(navigator.languages, { type: "language" }).of(n) ?? null;
  } catch {
    return null;
  }
}
const iS = (n) => `dash-${F2(n)}`;
var Fi, qe, ve, b6, w6, ne, Ar, R0, N0, H0, ei, x6, O0, D0, _0, F0, j0, q0, Z0, B0, ji, G0, Va, Il, W0, Vl, U0, K0, Al;
class rS {
  constructor(t, e) {
    C(this, ne);
    C(this, Fi);
    C(this, qe);
    C(this, ve, null);
    C(this, b6, /* @__PURE__ */ new Set());
    C(this, w6, null);
    $(this, "config", {});
    C(this, ei, null);
    C(this, x6, {});
    C(this, ji, -1);
    g(this, Fi, t), g(this, qe, e);
  }
  get instance() {
    return r(this, ve);
  }
  setup(t) {
    g(this, ve, t().create());
    const e = c(this, ne, H0).bind(this);
    for (const s of Object.values(t.events)) r(this, ve).on(s, e);
    r(this, ve).on(t.events.ERROR, c(this, ne, q0).bind(this));
    for (const s of r(this, b6)) s(r(this, ve));
    r(this, qe).player.dispatch("dash-instance", {
      detail: r(this, ve)
    }), r(this, ve).initialize(r(this, Fi), void 0, !1), r(this, ve).updateSettings({
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
    }), r(this, ve).on(t.events.FRAGMENT_LOADING_STARTED, c(this, ne, Z0).bind(this)), r(this, ve).on(
      t.events.FRAGMENT_LOADING_COMPLETED,
      c(this, ne, B0).bind(this)
    ), r(this, ve).on(t.events.MANIFEST_LOADED, c(this, ne, j0).bind(this)), r(this, ve).on(t.events.QUALITY_CHANGE_RENDERED, c(this, ne, F0).bind(this)), r(this, ve).on(t.events.TEXT_TRACKS_ADDED, c(this, ne, D0).bind(this)), r(this, ve).on(t.events.TRACK_CHANGE_RENDERED, c(this, ne, _0).bind(this)), r(this, qe).qualities[fn.enableAuto] = c(this, ne, W0).bind(this), Xe(r(this, qe).qualities, "change", c(this, ne, U0).bind(this)), Xe(r(this, qe).audioTracks, "change", c(this, ne, K0).bind(this)), g(this, w6, T(c(this, ne, R0).bind(this)));
  }
  onInstance(t) {
    return r(this, b6).add(t), () => r(this, b6).delete(t);
  }
  loadSource(t) {
    var e;
    c(this, ne, Al).call(this), ce(t.src) && ((e = r(this, ve)) == null || e.attachSource(t.src));
  }
  destroy() {
    var t, e;
    c(this, ne, Al).call(this), (t = r(this, ve)) == null || t.destroy(), g(this, ve, null), (e = r(this, w6)) == null || e.call(this), g(this, w6, null);
  }
}
Fi = new WeakMap(), qe = new WeakMap(), ve = new WeakMap(), b6 = new WeakMap(), w6 = new WeakMap(), ne = new WeakSet(), Ar = function(t) {
  return new $e(iS(t.type), { detail: t });
}, R0 = function() {
  if (!r(this, qe).$state.live()) return;
  const t = new U4(c(this, ne, N0).bind(this));
  return t.start(), t.stop.bind(t);
}, N0 = function() {
  if (!r(this, ve)) return;
  const t = r(this, ve).duration() - r(this, ve).time();
  r(this, qe).$state.liveSyncPosition.set(isNaN(t) ? 1 / 0 : t);
}, H0 = function(t) {
  var e;
  (e = r(this, qe).player) == null || e.dispatch(c(this, ne, Ar).call(this, t));
}, ei = new WeakMap(), x6 = new WeakMap(), O0 = function(t) {
  var l;
  const e = (l = r(this, ei)) == null ? void 0 : l[he.native], s = (e == null ? void 0 : e.track).cues;
  if (!e || !s) return;
  const i = r(this, ei).id, o = r(this, x6)[i] ?? 0, a = c(this, ne, Ar).call(this, t);
  for (let d = o; d < s.length; d++) {
    const h = s[d];
    h.positionAlign || (h.positionAlign = "auto"), r(this, ei).addCue(h, a);
  }
  r(this, x6)[i] = s.length;
}, D0 = function(t) {
  var o;
  if (!r(this, ve)) return;
  const e = t.tracks, s = [...r(this, Fi).textTracks].filter((a) => "manualMode" in a), i = c(this, ne, Ar).call(this, t);
  for (let a = 0; a < s.length; a++) {
    const l = e[a], d = s[a], h = `dash-${l.kind}-${a}`, p = new P1({
      id: h,
      label: (l == null ? void 0 : l.label) ?? ((o = l.labels.find((f) => f.text)) == null ? void 0 : o.text) ?? ((l == null ? void 0 : l.lang) && wd(l.lang)) ?? (l == null ? void 0 : l.lang) ?? void 0,
      language: l.lang ?? void 0,
      kind: l.kind,
      default: l.defaultTrack
    });
    p[he.native] = {
      managed: !0,
      track: d
    }, p[he.readyState] = 2, p[he.onModeChange] = () => {
      r(this, ve) && (p.mode === "showing" ? (r(this, ve).setTextTrack(a), g(this, ei, p)) : (r(this, ve).setTextTrack(-1), g(this, ei, null)));
    }, r(this, qe).textTracks.add(p, i);
  }
}, _0 = function(t) {
  const { mediaType: e, newMediaInfo: s } = t;
  if (e === "audio") {
    const i = r(this, qe).audioTracks.getById(`dash-audio-${s.index}`);
    if (i) {
      const o = c(this, ne, Ar).call(this, t);
      r(this, qe).audioTracks[ye.select](i, !0, o);
    }
  }
}, F0 = function(t) {
  if (t.mediaType !== "video") return;
  const e = r(this, qe).qualities[t.newQuality];
  if (e) {
    const s = c(this, ne, Ar).call(this, t);
    r(this, qe).qualities[ye.select](e, !0, s);
  }
}, j0 = function(t) {
  if (r(this, qe).$state.canPlay() || !r(this, ve)) return;
  const { type: e, mediaPresentationDuration: s } = t.data, i = c(this, ne, Ar).call(this, t);
  r(this, qe).notify("stream-type-change", e !== "static" ? "live" : "on-demand", i), r(this, qe).notify("duration-change", s, i), r(this, qe).qualities[fn.setAuto](!0, i);
  const o = r(this, ve).getVideoElement(), a = r(this, ve).getTracksForTypeFromManifest(
    "video",
    t.data
  ), l = [...new Set(a.map((f) => f.mimeType))].find(
    (f) => f && e4(o, f)
  ), d = a.filter(
    (f) => l === f.mimeType
  )[0];
  let h = r(this, ve).getTracksForTypeFromManifest(
    "audio",
    t.data
  );
  const p = [...new Set(h.map((f) => f.mimeType))].find(
    (f) => f && J5(o, f)
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
    r(this, qe).qualities[ye.add](y, i);
  }), tn(d.index)) {
    const f = r(this, qe).qualities[d.index];
    f && r(this, qe).qualities[ye.select](f, !0, i);
  }
  h.forEach((f, m) => {
    const v = f.labels.find((S) => navigator.languages.some((E) => S.lang && E.toLowerCase().startsWith(S.lang.toLowerCase()))) || f.labels[0], b = {
      id: `dash-audio-${f == null ? void 0 : f.index}`,
      label: (v == null ? void 0 : v.text) ?? (f.lang && wd(f.lang)) ?? f.lang ?? "",
      language: f.lang ?? "",
      kind: "main",
      mimeType: f.mimeType,
      codec: f.codec,
      index: m
    };
    r(this, qe).audioTracks[ye.add](b, i);
  }), o.dispatchEvent(new $e("canplay", { trigger: i }));
}, q0 = function(t) {
  const { type: e, error: s } = t;
  switch (s.code) {
    case 27:
      c(this, ne, G0).call(this, s);
      break;
    default:
      c(this, ne, Il).call(this, s);
      break;
  }
}, Z0 = function() {
  r(this, ji) >= 0 && c(this, ne, Va).call(this);
}, B0 = function(t) {
  t.mediaType === "text" && requestAnimationFrame(c(this, ne, O0).bind(this, t));
}, ji = new WeakMap(), G0 = function(t) {
  var e;
  c(this, ne, Va).call(this), (e = r(this, ve)) == null || e.play(), g(this, ji, window.setTimeout(() => {
    g(this, ji, -1), c(this, ne, Il).call(this, t);
  }, 5e3));
}, Va = function() {
  clearTimeout(r(this, ji)), g(this, ji, -1);
}, Il = function(t) {
  r(this, qe).notify("error", {
    message: t.message ?? "",
    code: 1,
    error: t
  });
}, W0 = function() {
  var e;
  c(this, ne, Vl).call(this, "video", !0);
  const { qualities: t } = r(this, qe);
  (e = r(this, ve)) == null || e.setQualityFor("video", t.selectedIndex, !0);
}, Vl = function(t, e) {
  var s;
  (s = r(this, ve)) == null || s.updateSettings({
    streaming: { abr: { autoSwitchBitrate: { [t]: e } } }
  });
}, U0 = function() {
  const { qualities: t } = r(this, qe);
  !r(this, ve) || t.auto || !t.selected || (c(this, ne, Vl).call(this, "video", !1), r(this, ve).setQualityFor("video", t.selectedIndex, t.switch === "current"), Q5 && (r(this, Fi).currentTime = r(this, Fi).currentTime));
}, K0 = function() {
  if (!r(this, ve)) return;
  const { audioTracks: t } = r(this, qe), e = r(this, ve).getTracksFor("audio").find(
    (s) => t.selected && t.selected.id === `dash-audio-${s.index}`
  );
  e && r(this, ve).setCurrentTrack(e);
}, Al = function() {
  c(this, ne, Va).call(this), g(this, ei, null), g(this, x6, {});
};
function Aa(n) {
  return n instanceof Error ? n : Error(typeof n == "string" ? n : JSON.stringify(n));
}
function Zs(n, t) {
  if (!n)
    throw Error("Assertion failed.");
}
var t1, ps, y3, Ms, z0, Y0, Q0, X0;
class oS {
  constructor(t, e, s) {
    C(this, Ms);
    C(this, t1);
    C(this, ps);
    C(this, y3);
    g(this, t1, t), g(this, ps, e), g(this, y3, s), c(this, Ms, z0).call(this);
  }
}
t1 = new WeakMap(), ps = new WeakMap(), y3 = new WeakMap(), Ms = new WeakSet(), z0 = async function() {
  const t = {
    onLoadStart: c(this, Ms, Y0).bind(this),
    onLoaded: c(this, Ms, Q0).bind(this),
    onLoadError: c(this, Ms, X0).bind(this)
  };
  let e = await cS(r(this, t1), t);
  if (vt(e) && !ce(r(this, t1)) && (e = await aS(r(this, t1), t)), !e) return null;
  if (!window.dashjs.supportsMediaSource()) {
    const s = "[vidstack] `dash.js` is not supported in this environment";
    return r(this, ps).player.dispatch(new $e("dash-unsupported")), r(this, ps).notify("error", { message: s, code: 4 }), null;
  }
  return e;
}, Y0 = function() {
  r(this, ps).player.dispatch(new $e("dash-lib-load-start"));
}, Q0 = function(t) {
  r(this, ps).player.dispatch(
    new $e("dash-lib-loaded", {
      detail: t
    })
  ), r(this, y3).call(this, t);
}, X0 = function(t) {
  const e = Aa(t);
  r(this, ps).player.dispatch(
    new $e("dash-lib-load-error", {
      detail: e
    })
  ), r(this, ps).notify("error", {
    message: e.message,
    code: 4,
    error: e
  });
};
async function aS(n, t = {}) {
  var e, s, i, o, a, l, d;
  if (!vt(n)) {
    if ((e = t.onLoadStart) == null || e.call(t), lS(n))
      return (s = t.onLoaded) == null || s.call(t, n), n;
    if (xd(n)) {
      const h = n.MediaPlayer;
      return (i = t.onLoaded) == null || i.call(t, h), h;
    }
    try {
      const h = (o = await n()) == null ? void 0 : o.default;
      if (xd(h))
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
async function cS(n, t = {}) {
  var e, s, i;
  if (ce(n)) {
    (e = t.onLoadStart) == null || e.call(t);
    try {
      if (await Gw(n), !sn(window.dashjs.MediaPlayer))
        throw Error(
          ""
        );
      const o = window.dashjs.MediaPlayer;
      return (s = t.onLoaded) == null || s.call(t, o), o;
    } catch (o) {
      (i = t.onLoadError) == null || i.call(t, o);
    }
  }
}
function lS(n) {
  return n && n.prototype && n.prototype !== Function;
}
function xd(n) {
  return n && "MediaPlayer" in n;
}
const uS = "https://cdn.jsdelivr.net";
var v3, Zn, qi;
class J0 extends A0 {
  constructor() {
    super(...arguments);
    $(this, "$$PROVIDER_TYPE", "DASH");
    C(this, v3, null);
    C(this, Zn, new rS(this.video, this.ctx));
    C(this, qi, `${uS}/npm/dashjs@4.7.4/dist/dash.all.min.js`);
  }
  /**
   * The `dash.js` constructor.
   */
  get ctor() {
    return r(this, v3);
  }
  /**
   * The current `dash.js` instance.
   */
  get instance() {
    return r(this, Zn).instance;
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
    return r(this, Zn).config;
  }
  set config(e) {
    r(this, Zn).config = e;
  }
  /**
   * The `dash.js` constructor (supports dynamic imports) or a URL of where it can be found.
   *
   * @defaultValue `https://cdn.jsdelivr.net/npm/dashjs@4.7.4/dist/dash.all.min.js`
   */
  get library() {
    return r(this, qi);
  }
  set library(e) {
    g(this, qi, e);
  }
  preconnect() {
    ce(r(this, qi)) && yo(r(this, qi));
  }
  setup() {
    super.setup(), new oS(r(this, qi), this.ctx, (e) => {
      g(this, v3, e), r(this, Zn).setup(e), this.ctx.notify("provider-setup", this);
      const s = _(this.ctx.$state.source);
      s && this.loadSource(s);
    });
  }
  async loadSource(e, s) {
    if (!ce(e.src)) {
      this.removeSource();
      return;
    }
    this.media.preload = s || "", this.appendSource(e, "application/x-mpegurl"), r(this, Zn).loadSource(e), this.currentSrc = e;
  }
  /**
   * The given callback is invoked when a new `dash.js` instance is created and right before it's
   * attached to media.
   */
  onInstance(e) {
    const s = r(this, Zn).instance;
    return s && e(s), r(this, Zn).onInstance(e);
  }
  destroy() {
    r(this, Zn).destroy();
  }
}
v3 = new WeakMap(), Zn = new WeakMap(), qi = new WeakMap(), /**
 * Whether `dash.js` is supported in this environment.
 */
$(J0, "supported", i4());
var dS = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  DASHProvider: J0
});
const S2 = class S2 extends l7 {
  constructor() {
    super(...arguments);
    $(this, "name", "dash");
  }
  canPlay(e) {
    return S2.supported && i7(e);
  }
  async load(e) {
    if (W)
      throw Error("[vidstack] can not load dash provider server-side");
    return new (await Promise.resolve().then(function() {
      return dS;
    })).DASHProvider(this.target, e);
  }
};
$(S2, "supported", i4());
let Rl = S2;
class hS {
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
      yo(e);
  }
  canPlay(t) {
    return ce(t.src) && t.type === "video/vimeo";
  }
  mediaType() {
    return "video";
  }
  async load(t) {
    if (W)
      throw Error("[vidstack] can not load vimeo provider server-side");
    return new (await import("./vidstack-nI3MtI8G-CnyAgVyJ.js")).VimeoProvider(this.target, t);
  }
  async loadPoster(t, e, s) {
    const { resolveVimeoVideoId: i, getVimeoVideoInfo: o } = await import("./vidstack-krOAtKMi-B4IZWKdc.js");
    if (!ce(t.src)) return null;
    const { videoId: a, hash: l } = i(t.src);
    return a ? o(a, s, l).then((d) => d ? d.poster : null) : null;
  }
}
class fS {
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
      yo(e);
  }
  canPlay(t) {
    return ce(t.src) && t.type === "video/youtube";
  }
  mediaType() {
    return "video";
  }
  async load(t) {
    if (W)
      throw Error("[vidstack] can not load youtube provider server-side");
    return new (await import("./vidstack-BZcJ-w0X-DpGCeoAG.js")).YouTubeProvider(this.target, t);
  }
  async loadPoster(t, e, s) {
    const { findYouTubePoster: i, resolveYouTubeVideoId: o } = await import("./vidstack-Zc3I7oOd-DDsBgkhs.js"), a = ce(t.src) && o(t.src);
    return a ? i(a, s) : null;
  }
}
function wc(n, t) {
  const e = String(n), s = e.length;
  if (s < t) {
    const o = t - s;
    return `${"0".repeat(o)}${n}`;
  }
  return e;
}
function eh(n) {
  const t = Math.trunc(n / 3600), e = Math.trunc(n % 3600 / 60), s = Math.trunc(n % 60), i = Number((n - Math.trunc(n)).toPrecision(3));
  return {
    hours: t,
    minutes: e,
    seconds: s,
    fraction: i
  };
}
function G2(n, { padHrs: t = null, padMins: e = null, showHrs: s = !1, showMs: i = !1 } = {}) {
  const { hours: o, minutes: a, seconds: l, fraction: d } = eh(n), h = t ? wc(o, 2) : o, p = e || es(e) && n >= 3600 ? wc(a, 2) : a, f = wc(l, 2), m = i && d > 0 ? `.${String(d).replace(/^0?\./, "")}` : "", y = `${p}:${f}${m}`;
  return o > 0 || s ? `${h}:${y}` : y;
}
function Nl(n) {
  const t = [], { hours: e, minutes: s, seconds: i } = eh(n);
  return e > 0 && t.push(`${e} hour`), s > 0 && t.push(`${s} min`), (i > 0 || t.length === 0) && t.push(`${i} sec`), t.join(" ");
}
const xc = Symbol(0), pS = [
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
], CS = {
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
  keyShortcuts: kx,
  storage: null
};
var b3, n1;
class Sd extends H1 {
  constructor(e, s) {
    super();
    C(this, b3);
    C(this, n1);
    g(this, b3, e), g(this, n1, s);
  }
  async onAttach(e) {
    if (W) return;
    const s = this.$props[r(this, b3)]();
    if (s === "eager")
      requestAnimationFrame(r(this, n1));
    else if (s === "idle")
      R5(r(this, n1));
    else if (s === "visible") {
      let i, o = new IntersectionObserver((a) => {
        this.scope && a[0].isIntersecting && (i == null || i(), i = void 0, r(this, n1).call(this));
      });
      o.observe(e), i = pe(() => o.disconnect());
    }
  }
}
b3 = new WeakMap(), n1 = new WeakMap();
var w3, Bn, E2, th;
class mS {
  constructor(t, e) {
    C(this, E2);
    C(this, w3);
    C(this, Bn);
    g(this, w3, t), g(this, Bn, e);
  }
  notify(t, ...e) {
    W || r(this, w3).call(this, new $e(t, {
      detail: e == null ? void 0 : e[0],
      trigger: e == null ? void 0 : e[1]
    }));
  }
  async ready(t, e) {
    if (!W)
      return io(async () => {
        var ae, me, Y, J, Ee, G, U;
        r(this, Bn);
        const {
          autoPlay: s,
          canPlay: i,
          started: o,
          duration: a,
          seekable: l,
          buffered: d,
          remotePlaybackInfo: h,
          playsInline: p,
          savedState: f,
          source: m
        } = r(this, Bn).$state;
        if (i()) return;
        const y = {
          duration: (t == null ? void 0 : t.duration) ?? a(),
          seekable: (t == null ? void 0 : t.seekable) ?? l(),
          buffered: (t == null ? void 0 : t.buffered) ?? d(),
          provider: r(this, Bn).$provider()
        };
        this.notify("can-play", y, e), Jn();
        let v = r(this, Bn).$provider(), { storage: b, qualities: S } = r(this, Bn), { muted: E, volume: P, clipStartTime: I, playbackRate: M } = r(this, Bn).$props;
        await ((ae = b == null ? void 0 : b.onLoad) == null ? void 0 : ae.call(b, m()));
        const D = (me = f()) == null ? void 0 : me.currentTime, B = (Y = f()) == null ? void 0 : Y.paused, F = await (b == null ? void 0 : b.getTime()), k = D ?? F ?? I(), Q = B === !1 || B !== !0 && !o() && s();
        if (v) {
          v.setVolume(await (b == null ? void 0 : b.getVolume()) ?? P()), v.setMuted(E() || !!await (b == null ? void 0 : b.getMuted()));
          const K = await (b == null ? void 0 : b.getAudioGain()) ?? 1;
          K > 1 && ((Ee = (J = v.audioGain) == null ? void 0 : J.setGain) == null || Ee.call(J, K)), (G = v.setPlaybackRate) == null || G.call(v, await (b == null ? void 0 : b.getPlaybackRate()) ?? M()), (U = v.setPlaysInline) == null || U.call(v, p()), k > 0 && v.setCurrentTime(k);
        }
        const X = await (b == null ? void 0 : b.getVideoQuality());
        if (X && S.length) {
          let K = null, q = 1 / 0;
          for (const xe of S) {
            const Ke = Math.abs(X.width - xe.width) + Math.abs(X.height - xe.height) + (X.bitrate ? Math.abs(X.bitrate - (xe.bitrate ?? 0)) : 0);
            Ke < q && (K = xe, q = Ke);
          }
          K && (K.selected = !0);
        }
        i() && Q ? await c(this, E2, th).call(this, e) : F && F > 0 && this.notify("started", void 0, e), h.set(null);
      });
  }
}
w3 = new WeakMap(), Bn = new WeakMap(), E2 = new WeakSet(), th = async function(t) {
  const {
    player: e,
    $state: { autoPlaying: s, muted: i }
  } = r(this, Bn);
  s.set(!0);
  const o = new $e("auto-play-attempt", { trigger: t });
  try {
    await e.play(o);
  } catch {
  }
};
var Zi;
class gS {
  constructor() {
    C(this, Zi, /* @__PURE__ */ new Map());
  }
  /**
   * Queue the given `item` under the given `key` to be processed at a later time by calling
   * `serve(key)`.
   */
  enqueue(t, e) {
    r(this, Zi).set(t, e);
  }
  /**
   * Process item in queue for the given `key`.
   */
  serve(t) {
    const e = this.peek(t);
    return r(this, Zi).delete(t), e;
  }
  /**
   * Peek at item in queue for the given `key`.
   */
  peek(t) {
    return r(this, Zi).get(t);
  }
  /**
   * Removes queued item under the given `key`.
   */
  delete(t) {
    r(this, Zi).delete(t);
  }
  /**
   * Clear all items in the queue.
   */
  clear() {
    r(this, Zi).clear();
  }
}
Zi = new WeakMap();
var Bi, S6, Gn, Tr, Hl, Ol;
class nh {
  constructor() {
    C(this, Tr);
    C(this, Bi, !1);
    C(this, S6, e2());
    C(this, Gn, /* @__PURE__ */ new Map());
  }
  /**
   * The number of callbacks that are currently in queue.
   */
  get size() {
    return r(this, Gn).size;
  }
  /**
   * Whether items in the queue are being served immediately, otherwise they're queued to
   * be processed later.
   */
  get isServing() {
    return r(this, Bi);
  }
  /**
   * Waits for the queue to be flushed (ie: start serving).
   */
  async waitForFlush() {
    r(this, Bi) || await r(this, S6).promise;
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
    if (r(this, Bi)) {
      e();
      return;
    }
    r(this, Gn).delete(t), r(this, Gn).set(t, e);
  }
  /**
   * Invokes the callback with the given `key` in the queue (if it exists).
   */
  serve(t) {
    var e;
    (e = r(this, Gn).get(t)) == null || e(), r(this, Gn).delete(t);
  }
  /**
   * Flush all queued items and start serving future requests immediately until `stop()` is called.
   */
  start() {
    c(this, Tr, Hl).call(this), g(this, Bi, !0), r(this, Gn).size > 0 && c(this, Tr, Hl).call(this);
  }
  /**
   * Stop serving requests, they'll be queued until you begin processing again by calling `start()`.
   */
  stop() {
    g(this, Bi, !1);
  }
  /**
   * Stop serving requests, empty the request queue, and release any promises waiting for the
   * queue to flush.
   */
  reset() {
    this.stop(), r(this, Gn).clear(), c(this, Tr, Ol).call(this);
  }
}
Bi = new WeakMap(), S6 = new WeakMap(), Gn = new WeakMap(), Tr = new WeakSet(), Hl = function() {
  for (const t of r(this, Gn).keys()) this.serve(t);
  c(this, Tr, Ol).call(this);
}, Ol = function() {
  r(this, S6).resolve(), g(this, S6, e2());
};
var ti, de, ni, s1, si, Ye, Gi, be, sh, ih, rh, Dl, E6, _l, Fl, oh, ah, ch, lh, uh, dh, i1, hh, jl, ql, vS;
class yS extends H1 {
  constructor(e, s, i) {
    super();
    C(this, be);
    C(this, ti);
    C(this, de);
    C(this, ni);
    $(this, "controls");
    C(this, s1);
    C(this, si);
    C(this, Ye);
    C(this, Gi, new nh());
    C(this, E6, !1);
    C(this, i1);
    g(this, ti, e), g(this, de, s), g(this, ni, i), g(this, Ye, i.$provider), this.controls = new Nx(), g(this, s1, new Hx()), g(this, si, new o2());
  }
  onAttach() {
    this.listen("fullscreen-change", c(this, be, hh).bind(this));
  }
  onConnect(e) {
    const s = Object.getOwnPropertyNames(Object.getPrototypeOf(this)), i = new Ne(e), o = c(this, be, rh).bind(this);
    for (const a of s)
      a.startsWith("media-") && i.add(a, o);
    c(this, be, sh).call(this), T(c(this, be, ih).bind(this)), T(c(this, be, oh).bind(this)), T(c(this, be, ah).bind(this)), T(c(this, be, ch).bind(this)), T(c(this, be, lh).bind(this)), T(c(this, be, uh).bind(this)), T(c(this, be, dh).bind(this));
  }
  onDestroy() {
    try {
      const e = this.createEvent("destroy"), { pictureInPicture: s, fullscreen: i } = this.$state;
      i() && this.exitFullscreen("prefer-media", e), s() && this.exitPictureInPicture(e);
    } catch {
    }
    r(this, Gi).reset();
  }
  async play(e) {
    if (W) return;
    const { canPlay: s, paused: i, autoPlaying: o } = this.$state;
    if (c(this, be, Dl).call(this, e) || !_(i)) return;
    e && r(this, de).queue.enqueue("media-play-request", e);
    const a = _(o);
    try {
      const l = _(r(this, Ye));
      return Sc(l, _(s)), await l.play();
    } catch (l) {
      const d = this.createEvent("play-fail", {
        detail: Aa(l),
        trigger: e
      });
      throw d.autoPlay = a, r(this, ti).handle(d), l;
    }
  }
  async pause(e) {
    if (W) return;
    const { canPlay: s, paused: i } = this.$state;
    if (!_(i)) {
      e && r(this, de).queue.enqueue("media-pause-request", e);
      try {
        const o = _(r(this, Ye));
        return Sc(o, _(s)), await o.pause();
      } catch (o) {
        throw r(this, de).queue.delete("media-pause-request"), o;
      }
    }
  }
  setAudioGain(e, s) {
    const { audioGain: i, canSetAudioGain: o } = this.$state;
    if (i() === e) return;
    const a = r(this, Ye).call(this);
    if (!(a != null && a.audioGain) || !o())
      throw Error("[vidstack] audio gain api not available");
    s && r(this, de).queue.enqueue("media-audio-gain-change-request", s), a.audioGain.setGain(e);
  }
  seekToLiveEdge(e) {
    if (W) return;
    const { canPlay: s, live: i, liveEdge: o, canSeek: a, liveSyncPosition: l, seekableEnd: d, userBehindLiveEdge: h } = this.$state;
    if (h.set(!1), _(() => !i() || o() || !a())) return;
    const p = _(r(this, Ye));
    Sc(p, _(s)), e && r(this, de).queue.enqueue("media-seek-request", e);
    const f = d() - 2;
    p.setCurrentTime(Math.min(f, l() ?? f));
  }
  async enterFullscreen(e = "prefer-media", s) {
    if (W) return;
    const i = c(this, be, _l).call(this, e);
    if (Ed(e, i), !i.active)
      return _(this.$state.pictureInPicture) && (g(this, E6, !0), await this.exitPictureInPicture(s)), s && r(this, de).queue.enqueue("media-enter-fullscreen-request", s), i.enter();
  }
  async exitFullscreen(e = "prefer-media", s) {
    if (W) return;
    const i = c(this, be, _l).call(this, e);
    if (Ed(e, i), !!i.active) {
      s && r(this, de).queue.enqueue("media-exit-fullscreen-request", s);
      try {
        const o = await i.exit();
        return r(this, E6) && _(this.$state.canPictureInPicture) && await this.enterPictureInPicture(), o;
      } finally {
        g(this, E6, !1);
      }
    }
  }
  async enterPictureInPicture(e) {
    if (!W && (c(this, be, Fl).call(this), !this.$state.pictureInPicture()))
      return e && r(this, de).queue.enqueue("media-enter-pip-request", e), await r(this, Ye).call(this).pictureInPicture.enter();
  }
  async exitPictureInPicture(e) {
    if (!W && (c(this, be, Fl).call(this), !!this.$state.pictureInPicture()))
      return e && r(this, de).queue.enqueue("media-exit-pip-request", e), await r(this, Ye).call(this).pictureInPicture.exit();
  }
  async "media-airplay-request"(e) {
    try {
      await this.requestAirPlay(e);
    } catch {
    }
  }
  async requestAirPlay(e) {
    var s;
    try {
      const i = (s = r(this, Ye).call(this)) == null ? void 0 : s.airPlay;
      if (!(i != null && i.supported))
        throw Error("No AirPlay adapter.");
      return e && r(this, de).queue.enqueue("media-airplay-request", e), await i.prompt();
    } catch (i) {
      throw r(this, de).queue.delete("media-airplay-request"), i;
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
      const { canGoogleCast: s } = this.$state;
      if (!_(s)) {
        const o = Error(
          "Cast not available."
        );
        throw o.code = "CAST_NOT_AVAILABLE", o;
      }
      if (yo("https://www.gstatic.com"), !r(this, i1)) {
        const o = await import("./vidstack-BEzgE0Fx-C_1YRTco.js").then(function(a) {
          return a.loader;
        });
        g(this, i1, new o.GoogleCastLoader());
      }
      await r(this, i1).prompt(r(this, ni)), e && r(this, de).queue.enqueue("media-google-cast-request", e);
      const i = _(this.$state.remotePlaybackState) !== "disconnected";
      i && this.$state.savedState.set({
        paused: _(this.$state.paused),
        currentTime: _(this.$state.currentTime)
      }), this.$state.remotePlaybackLoader.set(i ? r(this, i1) : null);
    } catch (s) {
      throw r(this, de).queue.delete("media-google-cast-request"), s;
    }
  }
  "media-clip-start-change-request"(e) {
    const { clipStartTime: s } = this.$state;
    s.set(e.detail);
  }
  "media-clip-end-change-request"(e) {
    const { clipEndTime: s } = this.$state;
    s.set(e.detail), this.dispatch("duration-change", {
      detail: e.detail,
      trigger: e
    });
  }
  "media-duration-change-request"(e) {
    const { providedDuration: s, clipEndTime: i } = this.$state;
    s.set(e.detail), i() <= 0 && this.dispatch("duration-change", {
      detail: e.detail,
      trigger: e
    });
  }
  "media-audio-track-change-request"(e) {
    const { logger: s, audioTracks: i } = r(this, ni);
    if (i.readonly)
      return;
    const o = e.detail, a = i[o];
    if (a) {
      const l = e.type;
      r(this, de).queue.enqueue(l, e), a.selected = !0;
    }
  }
  async "media-enter-fullscreen-request"(e) {
    try {
      await this.enterFullscreen(e.detail, e);
    } catch (s) {
      c(this, be, jl).call(this, s, e);
    }
  }
  async "media-exit-fullscreen-request"(e) {
    try {
      await this.exitFullscreen(e.detail, e);
    } catch (s) {
      c(this, be, jl).call(this, s, e);
    }
  }
  async "media-orientation-lock-request"(e) {
    const s = e.type;
    try {
      r(this, de).queue.enqueue(s, e), await r(this, si).lock(e.detail);
    } catch {
      r(this, de).queue.delete(s);
    }
  }
  async "media-orientation-unlock-request"(e) {
    const s = e.type;
    try {
      r(this, de).queue.enqueue(s, e), await r(this, si).unlock();
    } catch {
      r(this, de).queue.delete(s);
    }
  }
  async "media-enter-pip-request"(e) {
    try {
      await this.enterPictureInPicture(e);
    } catch (s) {
      c(this, be, ql).call(this, s, e);
    }
  }
  async "media-exit-pip-request"(e) {
    try {
      await this.exitPictureInPicture(e);
    } catch (s) {
      c(this, be, ql).call(this, s, e);
    }
  }
  "media-live-edge-request"(e) {
    const { live: s, liveEdge: i, canSeek: o } = this.$state;
    if (!(!s() || i() || !o())) {
      r(this, de).queue.enqueue("media-seek-request", e);
      try {
        this.seekToLiveEdge();
      } catch {
        r(this, de).queue.delete("media-seek-request");
      }
    }
  }
  async "media-loop-request"(e) {
    try {
      r(this, de).looping = !0, r(this, de).replaying = !0, await this.play(e);
    } catch {
      r(this, de).looping = !1;
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
    const { playbackRate: s, canSetPlaybackRate: i } = this.$state;
    if (s() === e.detail || !i()) return;
    const o = r(this, Ye).call(this);
    o != null && o.setPlaybackRate && (r(this, de).queue.enqueue("media-rate-change-request", e), o.setPlaybackRate(e.detail));
  }
  "media-audio-gain-change-request"(e) {
    try {
      this.setAudioGain(e.detail, e);
    } catch {
    }
  }
  "media-quality-change-request"(e) {
    var l, d;
    const { qualities: s, storage: i, logger: o } = r(this, ni);
    if (s.readonly)
      return;
    r(this, de).queue.enqueue("media-quality-change-request", e);
    const a = e.detail;
    if (a < 0)
      s.autoSelect(e), e.isOriginTrusted && ((l = i == null ? void 0 : i.setVideoQuality) == null || l.call(i, null));
    else {
      const h = s[a];
      h && (h.selected = !0, e.isOriginTrusted && ((d = i == null ? void 0 : i.setVideoQuality) == null || d.call(i, {
        id: h.id,
        width: h.width,
        height: h.height,
        bitrate: h.bitrate
      })));
    }
  }
  "media-pause-controls-request"(e) {
    const s = e.type;
    r(this, de).queue.enqueue(s, e), this.controls.pause(e);
  }
  "media-resume-controls-request"(e) {
    const s = e.type;
    r(this, de).queue.enqueue(s, e), this.controls.resume(e);
  }
  "media-seek-request"(e) {
    const { canSeek: s, ended: i, live: o, seekableEnd: a, userBehindLiveEdge: l } = this.$state, d = e.detail;
    i() && (r(this, de).replaying = !0);
    const h = e.type;
    r(this, de).seeking = !1, r(this, de).queue.delete(h);
    const p = l4(d, this.$state);
    !Number.isFinite(p) || !s() || (r(this, de).queue.enqueue(h, e), r(this, Ye).call(this).setCurrentTime(p), o() && e.isOriginTrusted && Math.abs(a() - p) >= 2 && l.set(!0));
  }
  "media-seeking-request"(e) {
    const s = e.type;
    r(this, de).queue.enqueue(s, e), this.$state.seeking.set(!0), r(this, de).seeking = !0;
  }
  "media-start-loading"(e) {
    if (this.$state.canLoad()) return;
    const s = e.type;
    r(this, de).queue.enqueue(s, e), r(this, ti).handle(this.createEvent("can-load"));
  }
  "media-poster-start-loading"(e) {
    if (this.$state.canLoadPoster()) return;
    const s = e.type;
    r(this, de).queue.enqueue(s, e), r(this, ti).handle(this.createEvent("can-load-poster"));
  }
  "media-text-track-change-request"(e) {
    const { index: s, mode: i } = e.detail, o = r(this, ni).textTracks[s];
    if (o) {
      const a = e.type;
      r(this, de).queue.enqueue(a, e), o.setMode(i, e);
    }
  }
  "media-mute-request"(e) {
    if (this.$state.muted()) return;
    const s = e.type;
    r(this, de).queue.enqueue(s, e), r(this, Ye).call(this).setMuted(!0);
  }
  "media-unmute-request"(e) {
    const { muted: s, volume: i } = this.$state;
    if (!s()) return;
    const o = e.type;
    r(this, de).queue.enqueue(o, e), r(this, ni).$provider().setMuted(!1), i() === 0 && (r(this, de).queue.enqueue(o, e), r(this, Ye).call(this).setVolume(0.25));
  }
  "media-volume-change-request"(e) {
    const { muted: s, volume: i } = this.$state, o = e.detail;
    if (i() === o) return;
    const a = e.type;
    r(this, de).queue.enqueue(a, e), r(this, Ye).call(this).setVolume(o), o > 0 && s() && (r(this, de).queue.enqueue(a, e), r(this, Ye).call(this).setMuted(!1));
  }
}
ti = new WeakMap(), de = new WeakMap(), ni = new WeakMap(), s1 = new WeakMap(), si = new WeakMap(), Ye = new WeakMap(), Gi = new WeakMap(), be = new WeakSet(), sh = function() {
  const { load: e } = this.$props, { canLoad: s } = this.$state;
  if (e() !== "play" || s()) return;
  const i = this.listen("media-play-request", (o) => {
    c(this, be, Dl).call(this, o), i();
  });
}, ih = function() {
  const e = r(this, Ye).call(this), s = this.$state.canPlay();
  return e && s && r(this, Gi).start(), () => {
    r(this, Gi).stop();
  };
}, rh = function(e) {
  e.stopPropagation(), !e.defaultPrevented && this[e.type] && (_(r(this, Ye)) ? this[e.type](e) : r(this, Gi).enqueue(e.type, () => {
    _(r(this, Ye)) && this[e.type](e);
  }));
}, Dl = function(e) {
  const { load: s } = this.$props, { canLoad: i } = this.$state;
  if (s() === "play" && !i()) {
    const o = this.createEvent("media-start-loading", { trigger: e });
    return this.dispatchEvent(o), r(this, Gi).enqueue("media-play-request", async () => {
      try {
        await this.play(o);
      } catch {
      }
    }), !0;
  }
  return !1;
}, E6 = new WeakMap(), _l = function(e) {
  const s = _(r(this, Ye));
  return e === "prefer-media" && r(this, s1).supported || e === "media" ? r(this, s1) : s == null ? void 0 : s.fullscreen;
}, Fl = function() {
  if (!this.$state.canPictureInPicture())
    throw Error(
      "[vidstack] no pip support"
    );
}, oh = function() {
  this.controls.defaultDelay = this.$props.controlsDelay();
}, ah = function() {
  var i, o;
  const { canSetAudioGain: e } = this.$state, s = !!((o = (i = r(this, Ye).call(this)) == null ? void 0 : i.audioGain) != null && o.supported);
  e.set(s);
}, ch = function() {
  var i, o;
  const { canAirPlay: e } = this.$state, s = !!((o = (i = r(this, Ye).call(this)) == null ? void 0 : i.airPlay) != null && o.supported);
  e.set(s);
}, lh = function() {
  const { canGoogleCast: e, source: s } = this.$state, i = Q5 && !n7 && Zw(s());
  e.set(i);
}, uh = function() {
  var i, o;
  const { canFullscreen: e } = this.$state, s = r(this, s1).supported || !!((o = (i = r(this, Ye).call(this)) == null ? void 0 : i.fullscreen) != null && o.supported);
  e.set(s);
}, dh = function() {
  var i, o;
  const { canPictureInPicture: e } = this.$state, s = !!((o = (i = r(this, Ye).call(this)) == null ? void 0 : i.pictureInPicture) != null && o.supported);
  e.set(s);
}, i1 = new WeakMap(), hh = async function(e) {
  const s = _(this.$props.fullscreenOrientation), i = e.detail;
  if (!(vt(s) || s === "none" || !r(this, si).supported))
    if (i) {
      if (r(this, si).locked) return;
      this.dispatch("media-orientation-lock-request", {
        detail: s,
        trigger: e
      });
    } else r(this, si).locked && this.dispatch("media-orientation-unlock-request", {
      trigger: e
    });
}, jl = function(e, s) {
  r(this, ti).handle(
    this.createEvent("fullscreen-error", {
      detail: Aa(e)
    })
  );
}, ql = function(e, s) {
  r(this, ti).handle(
    this.createEvent("picture-in-picture-error", {
      detail: Aa(e)
    })
  );
}, vS = function(e, s, i) {
};
function Sc(n, t) {
  if (!(n && t))
    throw Error(
      "[vidstack] media not ready"
    );
}
function Ed(n, t) {
  if (!(t != null && t.supported))
    throw Error(
      "[vidstack] no fullscreen support"
    );
}
class bS {
  constructor() {
    $(this, "seeking", !1);
    $(this, "looping", !1);
    $(this, "replaying", !1);
    $(this, "queue", new gS());
  }
}
const wS = /* @__PURE__ */ new Set([
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
var jt, ke, Ze, r1, $6, o1, a1, ii, Wi, O, fh, ph, ki, nt, Ch, mh, gh, Ra, Zl, Bl, yh, Gl, vh, bh, T6, Wl, Na, wh, xh, Sh, Ul, Kl, zl, Eh, Yl, $h, P6, Th, Ql;
class xS extends H1 {
  constructor(e, s) {
    super();
    C(this, O);
    C(this, jt);
    C(this, ke);
    C(this, Ze, /* @__PURE__ */ new Map());
    C(this, r1, !1);
    C(this, $6, []);
    C(this, o1, [-1, -1]);
    C(this, a1, !1);
    C(this, ii);
    C(this, Wi, !1);
    C(this, T6, null);
    $(this, "seeking", kr(
      (e) => {
        const { seeking: s, realCurrentTime: i, paused: o } = this.$state;
        s.set(!0), i.set(e.detail), c(this, O, nt).call(this, "media-seeking-request", e), o() && (g(this, ii, e), r(this, P6).call(this)), g(this, o1, [-1, -1]);
      },
      150,
      { leading: !0 }
    ));
    C(this, P6, j2(() => {
      if (!r(this, ii)) return;
      g(this, a1, !0);
      const { waiting: e, playing: s } = this.$state;
      e.set(!0), s.set(!1);
      const i = this.createEvent("waiting", { trigger: r(this, ii) });
      r(this, Ze).set("waiting", i), this.dispatch(i), g(this, ii, void 0), g(this, a1, !1);
    }, 300));
    g(this, jt, e), g(this, ke, s);
  }
  onAttach(e) {
    e.setAttribute("aria-busy", "true"), new Ne(this).add("fullscreen-change", this["fullscreen-change"].bind(this)).add("fullscreen-error", this["fullscreen-error"].bind(this)).add("orientation-change", this["orientation-change"].bind(this));
  }
  onConnect(e) {
    T(c(this, O, xh).bind(this)), c(this, O, Ch).call(this), c(this, O, mh).call(this), c(this, O, gh).call(this), c(this, O, fh).call(this), pe(c(this, O, ph).bind(this));
  }
  onDestroy() {
    const { audioTracks: e, qualities: s, textTracks: i } = r(this, ke);
    e[ye.reset](), s[ye.reset](), i[ye.reset](), c(this, O, Na).call(this);
  }
  handle(e) {
    if (!this.scope) return;
    const s = e.type;
    io(() => {
      var i;
      return (i = this[e.type]) == null ? void 0 : i.call(this, e);
    }), W || (wS.has(s) && r(this, Ze).set(s, e), this.dispatch(e));
  }
  "provider-change"(e) {
    var o, a;
    const s = r(this, ke).$provider(), i = e.detail;
    (s == null ? void 0 : s.type) !== (i == null ? void 0 : i.type) && ((o = s == null ? void 0 : s.destroy) == null || o.call(s), (a = s == null ? void 0 : s.scope) == null || a.dispose(), r(this, ke).$provider.set(e.detail), s && e.detail === null && c(this, O, Ul).call(this, e));
  }
  "provider-loader-change"(e) {
  }
  "auto-play"(e) {
    this.$state.autoPlayError.set(null);
  }
  "auto-play-fail"(e) {
    this.$state.autoPlayError.set(e.detail), c(this, O, ki).call(this);
  }
  "can-load"(e) {
    this.$state.canLoad.set(!0), r(this, Ze).set("can-load", e), r(this, ke).textTracks[he.canLoad](), c(this, O, nt).call(this, "media-start-loading", e);
  }
  "can-load-poster"(e) {
    this.$state.canLoadPoster.set(!0), r(this, Ze).set("can-load-poster", e), c(this, O, nt).call(this, "media-poster-start-loading", e);
  }
  "media-type-change"(e) {
    const s = r(this, Ze).get("source-change");
    s && e.triggers.add(s);
    const i = this.$state.viewType();
    this.$state.mediaType.set(e.detail);
    const o = this.$state.providedViewType(), a = o === "unknown" ? e.detail : o;
    i !== a && (W ? this.$state.inferredViewType.set(a) : setTimeout(() => {
      requestAnimationFrame(() => {
        this.scope && (this.$state.inferredViewType.set(e.detail), this.dispatch("view-type-change", {
          detail: a,
          trigger: e
        }));
      });
    }, 0));
  }
  "stream-type-change"(e) {
    const s = r(this, Ze).get("source-change");
    s && e.triggers.add(s);
    const { streamType: i, inferredStreamType: o } = this.$state;
    o.set(e.detail), e.detail = i();
  }
  "rate-change"(e) {
    var o;
    const { storage: s } = r(this, ke), { canPlay: i } = this.$state;
    this.$state.playbackRate.set(e.detail), c(this, O, nt).call(this, "media-rate-change-request", e), i() && ((o = s == null ? void 0 : s.setPlaybackRate) == null || o.call(s, e.detail));
  }
  "remote-playback-change"(e) {
    const { remotePlaybackState: s, remotePlaybackType: i } = this.$state, { type: o, state: a } = e.detail, l = a === "connected";
    i.set(o), s.set(a);
    const d = o === "airplay" ? "media-airplay-request" : "media-google-cast-request";
    if (l)
      c(this, O, nt).call(this, d, e);
    else {
      const h = r(this, jt).queue.peek(d);
      h && (e.request = h, e.triggers.add(h));
    }
  }
  "sources-change"(e) {
    const s = this.$state.sources(), i = e.detail;
    this.$state.sources.set(i), c(this, O, Sh).call(this, s, i, e);
  }
  "source-change"(e) {
    var i, o;
    e.isQualityChange = ((i = e.originEvent) == null ? void 0 : i.type) === "quality-change";
    const s = e.detail;
    c(this, O, Ul).call(this, e, e.isQualityChange), r(this, Ze).set(e.type, e), this.$state.source.set(s), (o = this.el) == null || o.setAttribute("aria-busy", "true");
  }
  abort(e) {
    const s = r(this, Ze).get("source-change");
    s && e.triggers.add(s);
    const i = r(this, Ze).get("can-load");
    i && !e.triggers.hasType("can-load") && e.triggers.add(i);
  }
  "load-start"(e) {
    const s = r(this, Ze).get("source-change");
    s && e.triggers.add(s);
  }
  error(e) {
    this.$state.error.set(e.detail);
    const s = r(this, Ze).get("abort");
    s && e.triggers.add(s);
  }
  "loaded-metadata"(e) {
    const s = r(this, Ze).get("load-start");
    s && e.triggers.add(s);
  }
  "loaded-data"(e) {
    const s = r(this, Ze).get("load-start");
    s && e.triggers.add(s);
  }
  "can-play"(e) {
    var i;
    const s = r(this, Ze).get("loaded-metadata");
    s && e.triggers.add(s), c(this, O, Kl).call(this, e.detail), (i = this.el) == null || i.setAttribute("aria-busy", "false");
  }
  "can-play-through"(e) {
    c(this, O, Kl).call(this, e.detail);
    const s = r(this, Ze).get("can-play");
    s && e.triggers.add(s);
  }
  "duration-change"(e) {
    const { live: s, intrinsicDuration: i, providedDuration: o, clipEndTime: a, ended: l } = this.$state, d = e.detail;
    if (!s()) {
      const h = Number.isNaN(d) ? 0 : d;
      i.set(h), l() && c(this, O, Yl).call(this, e);
    }
    (o() > 0 || a() > 0) && e.stopImmediatePropagation();
  }
  progress(e) {
    const { buffered: s, seekable: i } = this.$state, { buffered: o, seekable: a } = e.detail, l = Or(o), d = o.length !== s().length, h = l !== Or(s()), p = Or(a), f = a.length !== i().length, m = p !== Or(i());
    (d || h) && s.set(o), (f || m) && i.set(a);
  }
  play(e) {
    const {
      paused: s,
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
    if (c(this, O, zl).call(this), !s()) {
      e.stopImmediatePropagation();
      return;
    }
    e.autoPlay = a();
    const y = r(this, Ze).get("waiting");
    y && e.triggers.add(y), c(this, O, nt).call(this, "media-play-request", e), r(this, Ze).set("play", e), s.set(!1), i.set(null), e.autoPlay && (this.handle(
      this.createEvent("auto-play", {
        detail: { muted: h() },
        trigger: e
      })
    ), a.set(!1)), (o() || r(this, jt).replaying) && (r(this, jt).replaying = !1, o.set(!1), this.handle(this.createEvent("replay", { trigger: e }))), !l() && p() === "video" && d() === "coarse" && r(this, ke).remote.enterFullscreen("prefer-media", e), f() && !m() && r(this, ke).remote.seekToLiveEdge(e);
  }
  "play-fail"(e) {
    const { muted: s, autoPlaying: i } = this.$state, o = r(this, Ze).get("play");
    o && e.triggers.add(o), c(this, O, nt).call(this, "media-play-request", e);
    const { paused: a, playing: l } = this.$state;
    a.set(!0), l.set(!1), c(this, O, ki).call(this), r(this, Ze).set("play-fail", e), e.autoPlay && (this.handle(
      this.createEvent("auto-play-fail", {
        detail: {
          muted: s(),
          error: e.detail
        },
        trigger: e
      })
    ), i.set(!1));
  }
  playing(e) {
    const s = r(this, Ze).get("play"), i = r(this, Ze).get("seeked");
    s ? e.triggers.add(s) : i && e.triggers.add(i), setTimeout(() => c(this, O, ki).call(this), 0);
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
    if (o.set(!1), a.set(!0), m.set(!1), y.set(!1), r(this, jt).looping) {
      r(this, jt).looping = !1;
      return;
    }
    if (l() && !p() && f() === 0) {
      const v = d() ?? h() - 2;
      Number.isFinite(v) && r(this, ke).$provider().setCurrentTime(v);
    }
    this.started(e);
  }
  started(e) {
    const { started: s } = this.$state;
    s() || (s.set(!0), this.handle(this.createEvent("started", { trigger: e })));
  }
  pause(e) {
    var a;
    (a = this.el) != null && a.isConnected || g(this, Wi, !0), c(this, O, nt).call(this, "media-pause-request", e);
    const s = r(this, Ze).get("seeked");
    s && e.triggers.add(s);
    const { paused: i, playing: o } = this.$state;
    i.set(!0), o.set(!1), r(this, r1) && setTimeout(() => {
      this.handle(this.createEvent("end", { trigger: e })), g(this, r1, !1);
    }, 0), c(this, O, ki).call(this);
  }
  "time-change"(e) {
    if (r(this, jt).looping) {
      e.stopImmediatePropagation();
      return;
    }
    let { waiting: s, played: i, clipEndTime: o, realCurrentTime: a, currentTime: l } = this.$state, d = e.detail, h = o();
    a.set(d), c(this, O, Eh).call(this), s.set(!1);
    for (const p of r(this, ke).textTracks)
      p[he.updateActiveCues](d, e);
    h > 0 && d >= h && (g(this, r1, !0), this.dispatch("media-pause-request", { trigger: e })), c(this, O, $h).call(this), this.dispatch("time-update", {
      detail: { currentTime: l(), played: i() },
      trigger: e
    });
  }
  "audio-gain-change"(e) {
    var a;
    const { storage: s } = r(this, ke), { canPlay: i, audioGain: o } = this.$state;
    o.set(e.detail), c(this, O, nt).call(this, "media-audio-gain-change-request", e), i() && ((a = s == null ? void 0 : s.setAudioGain) == null || a.call(s, o()));
  }
  "volume-change"(e) {
    var d, h;
    const { storage: s } = r(this, ke), { volume: i, muted: o, canPlay: a } = this.$state, l = e.detail;
    i.set(l.volume), o.set(l.muted || l.volume === 0), c(this, O, nt).call(this, "media-volume-change-request", e), c(this, O, nt).call(this, l.muted ? "media-mute-request" : "media-unmute-request", e), a() && ((d = s == null ? void 0 : s.setVolume) == null || d.call(s, i()), (h = s == null ? void 0 : s.setMuted) == null || h.call(s, o()));
  }
  seeked(e) {
    const { seeking: s, currentTime: i, realCurrentTime: o, paused: a, seekableEnd: l, ended: d, live: h } = this.$state;
    if (r(this, jt).seeking)
      s.set(!0), e.stopImmediatePropagation();
    else if (s()) {
      const p = r(this, Ze).get("waiting");
      p && e.triggers.add(p);
      const f = r(this, Ze).get("seeking");
      f && !e.triggers.has(f) && e.triggers.add(f), a() && c(this, O, Ql).call(this), s.set(!1), o.set(e.detail), c(this, O, nt).call(this, "media-seek-request", e);
      const m = e == null ? void 0 : e.originEvent;
      m != null && m.isTrusted && !(m instanceof MessageEvent) && !/seek/.test(m.type) && this.started(e);
    }
    h() || (Math.floor(i()) !== Math.floor(l()) ? d.set(!1) : this.end(e));
  }
  waiting(e) {
    r(this, a1) || r(this, jt).seeking || (e.stopImmediatePropagation(), g(this, ii, e), r(this, P6).call(this));
  }
  end(e) {
    const { loop: s, ended: i } = this.$state;
    if (!(!s() && i())) {
      if (s()) {
        setTimeout(() => {
          requestAnimationFrame(() => {
            c(this, O, zl).call(this, e), this.dispatch("media-loop-request", { trigger: e });
          });
        }, 10);
        return;
      }
      setTimeout(() => c(this, O, Th).call(this, e), 0);
    }
  }
  "fullscreen-change"(e) {
    const s = e.detail;
    this.$state.fullscreen.set(s), c(this, O, nt).call(this, s ? "media-enter-fullscreen-request" : "media-exit-fullscreen-request", e);
  }
  "fullscreen-error"(e) {
    c(this, O, nt).call(this, "media-enter-fullscreen-request", e), c(this, O, nt).call(this, "media-exit-fullscreen-request", e);
  }
  "orientation-change"(e) {
    const s = e.detail.lock;
    c(this, O, nt).call(this, s ? "media-orientation-lock-request" : "media-orientation-unlock-request", e);
  }
  "picture-in-picture-change"(e) {
    const s = e.detail;
    this.$state.pictureInPicture.set(s), c(this, O, nt).call(this, s ? "media-enter-pip-request" : "media-exit-pip-request", e);
  }
  "picture-in-picture-error"(e) {
    c(this, O, nt).call(this, "media-enter-pip-request", e), c(this, O, nt).call(this, "media-exit-pip-request", e);
  }
  "title-change"(e) {
    e.trigger && (e.stopImmediatePropagation(), this.$state.inferredTitle.set(e.detail));
  }
  "poster-change"(e) {
    e.trigger && (e.stopImmediatePropagation(), this.$state.inferredPoster.set(e.detail));
  }
}
jt = new WeakMap(), ke = new WeakMap(), Ze = new WeakMap(), r1 = new WeakMap(), $6 = new WeakMap(), o1 = new WeakMap(), a1 = new WeakMap(), ii = new WeakMap(), Wi = new WeakMap(), O = new WeakSet(), fh = function() {
  r(this, Wi) && (requestAnimationFrame(() => {
    this.scope && r(this, ke).remote.play(new $e("dom-connect"));
  }), g(this, Wi, !1));
}, ph = function() {
  var e;
  r(this, Wi) || (g(this, Wi, !this.$state.paused()), (e = r(this, ke).$provider()) == null || e.pause());
}, ki = function() {
  c(this, O, Ql).call(this), g(this, r1, !1), r(this, jt).replaying = !1, r(this, jt).looping = !1, g(this, a1, !1), g(this, ii, void 0), r(this, Ze).clear();
}, nt = function(e, s) {
  const i = r(this, jt).queue.serve(e);
  i && (s.request = i, s.triggers.add(i));
}, Ch = function() {
  c(this, O, Ra).call(this), c(this, O, Zl).call(this);
  const e = r(this, ke).textTracks;
  new Ne(e).add("add", c(this, O, Ra).bind(this)).add("remove", c(this, O, Ra).bind(this)).add("mode-change", c(this, O, Zl).bind(this));
}, mh = function() {
  const e = r(this, ke).qualities;
  new Ne(e).add("add", c(this, O, Gl).bind(this)).add("remove", c(this, O, Gl).bind(this)).add("change", c(this, O, vh).bind(this)).add("auto-change", c(this, O, bh).bind(this)).add("readonly-change", c(this, O, wh).bind(this));
}, gh = function() {
  const e = r(this, ke).audioTracks;
  new Ne(e).add("add", c(this, O, Bl).bind(this)).add("remove", c(this, O, Bl).bind(this)).add("change", c(this, O, yh).bind(this));
}, Ra = function(e) {
  const { textTracks: s } = this.$state;
  s.set(r(this, ke).textTracks.toArray()), this.dispatch("text-tracks-change", {
    detail: s(),
    trigger: e
  });
}, Zl = function(e) {
  e && c(this, O, nt).call(this, "media-text-track-change-request", e);
  const s = r(this, ke).textTracks.selected, { textTrack: i } = this.$state;
  i() !== s && (i.set(s), this.dispatch("text-track-change", {
    detail: s,
    trigger: e
  }));
}, Bl = function(e) {
  const { audioTracks: s } = this.$state;
  s.set(r(this, ke).audioTracks.toArray()), this.dispatch("audio-tracks-change", {
    detail: s(),
    trigger: e
  });
}, yh = function(e) {
  const { audioTrack: s } = this.$state;
  s.set(r(this, ke).audioTracks.selected), e && c(this, O, nt).call(this, "media-audio-track-change-request", e), this.dispatch("audio-track-change", {
    detail: s(),
    trigger: e
  });
}, Gl = function(e) {
  const { qualities: s } = this.$state;
  s.set(r(this, ke).qualities.toArray()), this.dispatch("qualities-change", {
    detail: s(),
    trigger: e
  });
}, vh = function(e) {
  const { quality: s } = this.$state;
  s.set(r(this, ke).qualities.selected), e && c(this, O, nt).call(this, "media-quality-change-request", e), this.dispatch("quality-change", {
    detail: s(),
    trigger: e
  });
}, bh = function() {
  const { qualities: e } = r(this, ke), s = e.auto;
  this.$state.autoQuality.set(s), s || c(this, O, Na).call(this);
}, T6 = new WeakMap(), Wl = function() {
  c(this, O, Na).call(this), g(this, T6, T(() => {
    const { qualities: e } = r(this, ke), { mediaWidth: s, mediaHeight: i } = this.$state, o = s(), a = i();
    if (o === 0 || a === 0) return;
    let l = null, d = 1 / 0;
    for (const h of e) {
      const p = Math.abs(h.width - o) + Math.abs(h.height - a);
      p < d && (d = p, l = h);
    }
    l && e[ye.select](
      l,
      !0,
      new $e("resize", { detail: { width: o, height: a } })
    );
  }));
}, Na = function() {
  var e;
  (e = r(this, T6)) == null || e.call(this), g(this, T6, null);
}, wh = function() {
  this.$state.canSetQuality.set(!r(this, ke).qualities.readonly);
}, xh = function() {
  const { canSetVolume: e, isGoogleCastConnected: s } = this.$state;
  if (s()) {
    e.set(!1);
    return;
  }
  Mw().then(e.set);
}, Sh = function(e, s, i) {
  let { qualities: o } = r(this, ke), a = !1, l = !1;
  for (const d of e) {
    if (!ol(d)) continue;
    if (!s.some((p) => p.src === d.src)) {
      const p = o.getBySrc(d.src);
      p && (o[ye.remove](p, i), l = !0);
    }
  }
  l && !o.length && (this.$state.savedState.set(null), o[ye.reset](i));
  for (const d of s) {
    if (!ol(d) || o.getBySrc(d.src)) continue;
    const h = {
      id: d.id ?? d.height + "p",
      bitrate: null,
      codec: null,
      ...d,
      selected: !1
    };
    o[ye.add](h, i), a = !0;
  }
  a && !o[fn.enableAuto] && (c(this, O, Wl).call(this), o[fn.enableAuto] = c(this, O, Wl).bind(this), o[fn.setAuto](!0, i));
}, Ul = function(e, s = !1) {
  const { audioTracks: i, qualities: o } = r(this, ke);
  if (!s) {
    g(this, $6, []), g(this, o1, [-1, -1]), i[ye.reset](e), o[ye.reset](e), md(this.$state, s), c(this, O, ki).call(this);
    return;
  }
  md(this.$state, s), c(this, O, ki).call(this);
}, Kl = function(e) {
  const { seekable: s, buffered: i, intrinsicDuration: o, canPlay: a } = this.$state;
  a.set(!0), i.set(e.buffered), s.set(e.seekable);
  const l = Or(e.seekable) ?? 1 / 0;
  o.set(l);
}, zl = function(e) {
  if (!_(r(this, ke).$provider)) return;
  const { ended: i, seekableStart: o, clipEndTime: a, currentTime: l, realCurrentTime: d, duration: h } = this.$state, p = i() || d() < o() || a() > 0 && d() >= a() || Math.abs(l() - h()) < 0.1;
  return p && this.dispatch("media-seek-request", {
    detail: o(),
    trigger: e
  }), p;
}, Eh = function() {
  const { currentTime: e, played: s, paused: i } = this.$state;
  i() || (g(this, o1, Rw(
    r(this, $6),
    r(this, o1),
    e()
  )), s.set(new Pa(r(this, $6))));
}, // Called to update time again incase duration precision has changed.
Yl = function(e) {
  const { clipStartTime: s, clipEndTime: i, duration: o } = this.$state;
  s() > 0 || i() > 0 || this.handle(
    this.createEvent("time-change", {
      detail: o(),
      trigger: e
    })
  );
}, $h = function() {
  var o;
  const { storage: e } = r(this, ke), { canPlay: s, realCurrentTime: i } = this.$state;
  s() && ((o = e == null ? void 0 : e.setTime) == null || o.call(e, i()));
}, P6 = new WeakMap(), Th = function(e) {
  var d;
  const { storage: s } = r(this, ke), { paused: i, seeking: o, ended: a, duration: l } = this.$state;
  c(this, O, Yl).call(this, e), i() || this.dispatch("pause", { trigger: e }), o() && this.dispatch("seeked", {
    detail: l(),
    trigger: e
  }), a.set(!0), c(this, O, ki).call(this), (d = s == null ? void 0 : s.setTime) == null || d.call(s, l(), !0), this.dispatch("ended", {
    trigger: e
  });
}, Ql = function() {
  r(this, P6).cancel(), this.$state.waiting.set(!1);
};
var Pe, Ph, Lh, ES, kh, Mh, Ih, Vh, Ah, Rh, Nh, Hh, Oh, Dh, _h, Fh, jh, qh;
class SS extends H1 {
  constructor() {
    super(...arguments);
    C(this, Pe);
  }
  onSetup() {
    if (c(this, Pe, Ph).call(this), W) return;
    const e = [
      c(this, Pe, kh),
      c(this, Pe, Ih),
      c(this, Pe, Dh),
      c(this, Pe, _h),
      c(this, Pe, Ah),
      c(this, Pe, Nh),
      c(this, Pe, Hh),
      c(this, Pe, Fh),
      c(this, Pe, qh),
      c(this, Pe, jh),
      c(this, Pe, Vh),
      c(this, Pe, Oh),
      c(this, Pe, Rh),
      c(this, Pe, Lh),
      c(this, Pe, Mh)
    ];
    for (const s of e)
      T(s.bind(this));
  }
}
Pe = new WeakSet(), Ph = function() {
  var i;
  const e = {
    duration: "providedDuration",
    loop: "providedLoop",
    poster: "providedPoster",
    streamType: "providedStreamType",
    title: "providedTitle",
    viewType: "providedViewType"
  }, s = /* @__PURE__ */ new Set([
    "currentTime",
    "paused",
    "playbackRate",
    "volume"
  ]);
  for (const o of Object.keys(this.$props))
    s.has(o) || (i = this.$state[e[o] ?? o]) == null || i.set(this.$props[o]());
  this.$state.muted.set(this.$props.muted() || this.$props.volume() === 0);
}, // Sync "provided" props with internal state. Provided props are used to differentiate from
// provider inferred values.
Lh = function() {
  const { viewType: e, streamType: s, title: i, poster: o, loop: a } = this.$props, l = this.$state;
  l.providedPoster.set(o()), l.providedStreamType.set(s()), l.providedViewType.set(e()), l.providedTitle.set(i()), l.providedLoop.set(a());
}, ES = function() {
}, kh = function() {
  const { artist: e, artwork: s } = this.$props;
  this.$state.artist.set(e()), this.$state.artwork.set(s());
}, Mh = function() {
  const { title: e } = this.$state;
  this.dispatch("title-change", { detail: e() });
}, Ih = function() {
  const e = this.$props.autoPlay() || this.$props.autoplay();
  this.$state.autoPlay.set(e), this.dispatch("auto-play-change", { detail: e });
}, Vh = function() {
  const e = this.$state.loop();
  this.dispatch("loop-change", { detail: e });
}, Ah = function() {
  const e = this.$props.controls();
  this.$state.controls.set(e);
}, Rh = function() {
  const { poster: e } = this.$state;
  this.dispatch("poster-change", { detail: e() });
}, Nh = function() {
  const e = this.$props.crossOrigin() ?? this.$props.crossorigin(), s = e === !0 ? "" : e;
  this.$state.crossOrigin.set(s);
}, Hh = function() {
  const { duration: e } = this.$props;
  this.dispatch("media-duration-change-request", {
    detail: e()
  });
}, Oh = function() {
  const e = this.$props.playsInline() || this.$props.playsinline();
  this.$state.playsInline.set(e), this.dispatch("plays-inline-change", { detail: e });
}, Dh = function() {
  const { clipStartTime: e } = this.$props;
  this.dispatch("media-clip-start-change-request", {
    detail: e()
  });
}, _h = function() {
  const { clipEndTime: e } = this.$props;
  this.dispatch("media-clip-end-change-request", {
    detail: e()
  });
}, Fh = function() {
  this.dispatch("live-change", { detail: this.$state.live() });
}, jh = function() {
  this.$state.liveEdgeTolerance.set(this.$props.liveEdgeTolerance()), this.$state.minLiveDVRWindow.set(this.$props.minLiveDVRWindow());
}, qh = function() {
  this.dispatch("live-edge-change", { detail: this.$state.liveEdge() });
};
const $d = ["play", "pause", "seekforward", "seekbackward", "seekto"];
var Is, Zh, Bh, Gh, Wh;
class $S extends H1 {
  constructor() {
    super(...arguments);
    C(this, Is);
  }
  onConnect() {
    T(c(this, Is, Bh).bind(this)), T(c(this, Is, Gh).bind(this));
    const e = c(this, Is, Wh).bind(this);
    for (const s of $d)
      navigator.mediaSession.setActionHandler(s, e);
    pe(c(this, Is, Zh).bind(this));
  }
}
Is = new WeakSet(), Zh = function() {
  for (const e of $d)
    navigator.mediaSession.setActionHandler(e, null);
}, Bh = function() {
  const { title: e, artist: s, artwork: i, poster: o } = this.$state;
  navigator.mediaSession.metadata = new MediaMetadata({
    title: e(),
    artist: s(),
    artwork: i() ?? [{ src: o() }]
  });
}, Gh = function() {
  const { canPlay: e, paused: s } = this.$state;
  navigator.mediaSession.playbackState = e() ? s() ? "paused" : "playing" : "none";
}, Wh = function(e) {
  const s = new $e("media-session-action", { detail: e });
  switch (e.action) {
    case "play":
      this.dispatch("media-play-request", { trigger: s });
      break;
    case "pause":
      this.dispatch("media-pause-request", { trigger: s });
      break;
    case "seekto":
    case "seekforward":
    case "seekbackward":
      this.dispatch("media-seek-request", {
        detail: tn(e.seekTime) ? e.seekTime : this.$state.currentTime() + (e.seekOffset ?? (e.action === "seekforward" ? 10 : -10)),
        trigger: s
      });
      break;
  }
};
let l2 = re(!1);
W || (Xe(document, "pointerdown", () => {
  l2.set(!1);
}), Xe(document, "keydown", (n) => {
  n.metaKey || n.altKey || n.ctrlKey || l2.set(!0);
}));
var Ui, Vs, Uh, Kh, zh, Yh;
class os extends Sn {
  constructor() {
    super(...arguments);
    C(this, Vs);
    C(this, Ui, re(!1));
  }
  onConnect(e) {
    T(() => {
      const s = new Ne(e);
      if (!l2()) {
        r(this, Ui).set(!1), pa(e, !1), s.add("pointerenter", c(this, Vs, zh).bind(this)).add("pointerleave", c(this, Vs, Yh).bind(this));
        return;
      }
      const i = document.activeElement === e;
      r(this, Ui).set(i), pa(e, i), s.add("focus", c(this, Vs, Uh).bind(this)).add("blur", c(this, Vs, Kh).bind(this));
    });
  }
  focused() {
    return r(this, Ui).call(this);
  }
}
Ui = new WeakMap(), Vs = new WeakSet(), Uh = function() {
  r(this, Ui).set(!0), pa(this.el, !0);
}, Kh = function() {
  r(this, Ui).set(!1), pa(this.el, !1);
}, zh = function() {
  Td(this.el, !0);
}, Yh = function() {
  Td(this.el, !1);
};
function pa(n, t) {
  ie(n, "data-focus", t), ie(n, "data-hocus", t);
}
function Td(n, t) {
  ie(n, "data-hocus", t), ie(n, "data-hover", t);
}
var xs, kt, c1, Mt, j, an, Ha, L6, Xl, Jl, Xh, Jh, e8, Ho, eu, t8, tu, n8, nu, s8, su, i8, iu, r8, ru, o8, a8, c8, l8;
let Qh = (xs = class extends Ce {
  constructor() {
    super();
    C(this, j);
    C(this, kt);
    C(this, c1);
    C(this, Mt);
    $(this, "canPlayQueue", new nh());
    $(this, "remoteControl");
    C(this, L6, !1);
    /**
     * Controls the screen orientation of the current browser window and dispatches orientation
     * change events on the player.
     */
    $(this, "orientation");
    new SS();
    const e = {
      player: this,
      qualities: new xx(),
      audioTracks: new fx(),
      storage: null,
      $provider: re(null),
      $providerSetup: re(!1),
      $props: this.$props,
      $state: this.$state
    };
    e.remote = this.remoteControl = new u4(
      void 0
    ), e.remote.setPlayer(this), e.textTracks = new vx(), e.textTracks[he.crossOrigin] = this.$state.crossOrigin, e.textRenderers = new yx(e), e.ariaKeys = {}, g(this, kt, e), vn(o7, e), this.orientation = new o2(), new os(), new Ix(e);
    const s = new bS();
    g(this, c1, new xS(s, e)), g(this, Mt, new yS(r(this, c1), s, e)), e.delegate = new mS(r(this, c1).handle.bind(r(this, c1)), e), e.notify = e.delegate.notify.bind(e.delegate), typeof navigator < "u" && "mediaSession" in navigator && new $S(), new Sd("load", this.startLoading.bind(this)), new Sd("posterLoad", this.startLoadingPoster.bind(this));
  }
  onSetup() {
    c(this, j, Jh).call(this), T(c(this, j, Xh).bind(this)), T(c(this, j, n8).bind(this)), T(c(this, j, t8).bind(this)), T(c(this, j, i8).bind(this)), T(c(this, j, s8).bind(this)), T(c(this, j, o8).bind(this)), T(c(this, j, r8).bind(this));
  }
  onAttach(e) {
    e.setAttribute("data-media-player", ""), He(e, "tabindex", "0"), He(e, "role", "region"), T(c(this, j, c8).bind(this)), W ? c(this, j, Xl).call(this) : T(c(this, j, Xl).bind(this)), W ? c(this, j, Jl).call(this) : T(c(this, j, Jl).bind(this)), Xe(e, "find-media-player", c(this, j, e8).bind(this));
  }
  onConnect(e) {
    Y5 && ie(e, "data-iphone", "");
    const s = window.matchMedia("(pointer: coarse)");
    c(this, j, eu).call(this, s), s.onchange = c(this, j, eu).bind(this);
    const i = new ResizeObserver(N1(c(this, j, Ho).bind(this)));
    i.observe(e), T(c(this, j, Ho).bind(this)), this.dispatch("media-player-connect", {
      detail: this,
      bubbles: !0,
      composed: !0
    }), pe(() => {
      i.disconnect(), s.onchange = null;
    });
  }
  onDestroy() {
    r(this, kt).player = null, this.canPlayQueue.reset();
  }
  /**
   * The current media provider.
   */
  get provider() {
    return r(this, j, an);
  }
  /**
   * Media controls settings.
   */
  get controls() {
    return r(this, Mt).controls;
  }
  set controls(e) {
    r(this, j, Ha).controls.set(e);
  }
  /**
   * The title of the current media.
   */
  get title() {
    return _(this.$state.title);
  }
  set title(e) {
    if (r(this, L6)) {
      g(this, L6, !1);
      return;
    }
    r(this, j, Ha).title.set(e);
  }
  /**
   * A list of all `VideoQuality` objects representing the set of available video renditions.
   *
   * @see {@link https://vidstack.io/docs/player/api/video-quality}
   */
  get qualities() {
    return r(this, kt).qualities;
  }
  /**
   * A list of all `AudioTrack` objects representing the set of available audio tracks.
   *
   * @see {@link https://vidstack.io/docs/player/api/audio-tracks}
   */
  get audioTracks() {
    return r(this, kt).audioTracks;
  }
  /**
   * A list of all `TextTrack` objects representing the set of available text tracks.
   *
   * @see {@link https://vidstack.io/docs/player/api/text-tracks}
   */
  get textTracks() {
    return r(this, kt).textTracks;
  }
  /**
   * Contains text renderers which are responsible for loading, parsing, and rendering text
   * tracks.
   */
  get textRenderers() {
    return r(this, kt).textRenderers;
  }
  get duration() {
    return this.$state.duration();
  }
  set duration(e) {
    r(this, j, Ha).duration.set(e);
  }
  get paused() {
    return _(this.$state.paused);
  }
  set paused(e) {
    c(this, j, tu).call(this, e);
  }
  get muted() {
    return _(this.$state.muted);
  }
  set muted(e) {
    c(this, j, nu).call(this, e);
  }
  get currentTime() {
    return _(this.$state.currentTime);
  }
  set currentTime(e) {
    c(this, j, su).call(this, e);
  }
  get volume() {
    return _(this.$state.volume);
  }
  set volume(e) {
    c(this, j, iu).call(this, e);
  }
  get playbackRate() {
    return _(this.$state.playbackRate);
  }
  set playbackRate(e) {
    c(this, j, ru).call(this, e);
  }
  /**
   * Begins/resumes playback of the media. If this method is called programmatically before the
   * user has interacted with the player, the promise may be rejected subject to the browser's
   * autoplay policies. This method will throw if called before media is ready for playback.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play}
   */
  async play(e) {
    return r(this, Mt).play(e);
  }
  /**
   * Pauses playback of the media. This method will throw if called before media is ready for
   * playback.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause}
   */
  async pause(e) {
    return r(this, Mt).pause(e);
  }
  /**
   * Attempts to display the player in fullscreen. The promise will resolve if successful, and
   * reject if not. This method will throw if any fullscreen API is _not_ currently available.
   *
   * @see {@link https://vidstack.io/docs/player/api/fullscreen}
   */
  async enterFullscreen(e, s) {
    return r(this, Mt).enterFullscreen(e, s);
  }
  /**
   * Attempts to display the player inline by exiting fullscreen. This method will throw if any
   * fullscreen API is _not_ currently available.
   *
   * @see {@link https://vidstack.io/docs/player/api/fullscreen}
   */
  async exitFullscreen(e, s) {
    return r(this, Mt).exitFullscreen(e, s);
  }
  /**
   * Attempts to display the player in picture-in-picture mode. This method will throw if PIP is
   * not supported. This method will also return a `PictureInPictureWindow` if the current
   * provider supports it.
   *
   * @see {@link https://vidstack.io/docs/player/api/picture-in-picture}
   */
  enterPictureInPicture(e) {
    return r(this, Mt).enterPictureInPicture(e);
  }
  /**
   * Attempts to display the player in inline by exiting picture-in-picture mode. This method
   * will throw if not supported.
   *
   * @see {@link https://vidstack.io/docs/player/api/picture-in-picture}
   */
  exitPictureInPicture(e) {
    return r(this, Mt).exitPictureInPicture(e);
  }
  /**
   * Sets the current time to the live edge (i.e., `duration`). This is a no-op for non-live
   * streams and will throw if called before media is ready for playback.
   *
   * @see {@link https://vidstack.io/docs/player/api/live}
   */
  seekToLiveEdge(e) {
    r(this, Mt).seekToLiveEdge(e);
  }
  /**
   * Called when media can begin loading. Calling this method will trigger the initial provider
   * loading process. Calling it more than once has no effect.
   *
   * @see {@link https://vidstack.io/docs/player/core-concepts/loading#load-strategies}
   */
  startLoading(e) {
    r(this, kt).notify("can-load", void 0, e);
  }
  /**
   * Called when the poster image can begin loading. Calling it more than once has no effect.
   *
   * @see {@link https://vidstack.io/docs/player/core-concepts/loading#load-strategies}
   */
  startLoadingPoster(e) {
    r(this, kt).notify("can-load-poster", void 0, e);
  }
  /**
   * Request Apple AirPlay picker to open.
   */
  requestAirPlay(e) {
    return r(this, Mt).requestAirPlay(e);
  }
  /**
   * Request Google Cast device picker to open. The Google Cast framework will be loaded if it
   * hasn't yet.
   */
  requestGoogleCast(e) {
    return r(this, Mt).requestGoogleCast(e);
  }
  /**
   * Set the audio gain, amplifying volume and enabling a maximum volume above 100%.
   *
   * @see {@link https://vidstack.io/docs/player/api/audio-gain}
   */
  setAudioGain(e, s) {
    return r(this, Mt).setAudioGain(e, s);
  }
  destroy() {
    super.destroy(), r(this, kt).remote.setPlayer(null), this.dispatch("destroy");
  }
}, kt = new WeakMap(), c1 = new WeakMap(), Mt = new WeakMap(), j = new WeakSet(), an = function() {
  return r(this, kt).$provider();
}, Ha = function() {
  return this.$props;
}, L6 = new WeakMap(), Xl = function() {
  const e = this.$el, { title: s, live: i, viewType: o, providedTitle: a } = this.$state, l = i(), d = U9(o()), h = d !== "Unknown" ? `${l ? "Live " : ""}${d}` : l ? "Live" : "Media", p = s();
  ie(
    this.el,
    "aria-label",
    `${h} Player` + (p ? ` - ${p}` : "")
  ), !W && (e != null && e.hasAttribute("title")) && (g(this, L6, !0), e == null || e.removeAttribute("title"));
}, Jl = function() {
  const e = this.orientation.landscape ? "landscape" : "portrait";
  this.$state.orientation.set(e), ie(this.el, "data-orientation", e), c(this, j, Ho).call(this);
}, Xh = function() {
  this.$state.canPlay() && r(this, j, an) ? this.canPlayQueue.start() : this.canPlayQueue.stop();
}, Jh = function() {
  if (xs[xc]) {
    this.setAttributes(xs[xc]);
    return;
  }
  const e = {
    "data-load": function() {
      return this.$props.load();
    },
    "data-captions": function() {
      const i = this.$state.textTrack();
      return !!i && mn(i);
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
  }, s = {
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
  for (const i of pS) {
    const o = "data-" + (s[i] ?? F2(i));
    e[o] = function() {
      return this.$state[i]();
    };
  }
  delete e.title, xs[xc] = e, this.setAttributes(e);
}, e8 = function(e) {
  e.detail(this);
}, Ho = function() {
  if (W || !this.el) return;
  const e = this.el.clientWidth, s = this.el.clientHeight;
  this.$state.width.set(e), this.$state.height.set(s), Wt(this.el, "--player-width", e + "px"), Wt(this.el, "--player-height", s + "px");
}, eu = function(e) {
  if (W) return;
  const s = e.matches ? "coarse" : "fine";
  ie(this.el, "data-pointer", s), this.$state.pointer.set(s), c(this, j, Ho).call(this);
}, t8 = function() {
  c(this, j, tu).call(this, this.$props.paused());
}, tu = function(e) {
  e ? this.canPlayQueue.enqueue("paused", () => r(this, Mt).pause()) : this.canPlayQueue.enqueue("paused", () => r(this, Mt).play());
}, n8 = function() {
  c(this, j, nu).call(this, this.$props.muted());
}, nu = function(e) {
  this.canPlayQueue.enqueue("muted", () => {
    r(this, j, an) && r(this, j, an).setMuted(e);
  });
}, s8 = function() {
  c(this, j, su).call(this, this.$props.currentTime());
}, su = function(e) {
  this.canPlayQueue.enqueue("currentTime", () => {
    const { currentTime: s } = this.$state;
    e !== _(s) && _(() => {
      if (!r(this, j, an)) return;
      const i = l4(e, this.$state);
      Number.isFinite(i) && r(this, j, an).setCurrentTime(i);
    });
  });
}, i8 = function() {
  c(this, j, iu).call(this, this.$props.volume());
}, iu = function(e) {
  const s = a7(0, e, 1);
  this.canPlayQueue.enqueue("volume", () => {
    r(this, j, an) && r(this, j, an).setVolume(s);
  });
}, r8 = function() {
  c(this, j, ru).call(this, this.$props.playbackRate());
}, ru = function(e) {
  this.canPlayQueue.enqueue("rate", () => {
    var s, i;
    r(this, j, an) && ((i = (s = r(this, j, an)).setPlaybackRate) == null || i.call(s, e));
  });
}, o8 = function() {
  c(this, j, a8).call(this, this.$props.playsInline());
}, a8 = function(e) {
  this.canPlayQueue.enqueue("playsinline", () => {
    var s, i;
    r(this, j, an) && ((i = (s = r(this, j, an)).setPlaysInline) == null || i.call(s, e));
  });
}, c8 = function() {
  var i;
  let e = this.$props.storage(), s = ce(e) ? new sx() : e;
  if (s != null && s.onChange) {
    const { source: o } = this.$state, a = ce(e) ? e : (i = this.el) == null ? void 0 : i.id, l = vr(c(this, j, l8).bind(this));
    T(() => s.onChange(o(), l(), a || void 0));
  }
  r(this, kt).storage = s, r(this, kt).textTracks.setStorage(s), pe(() => {
    var o;
    (o = s == null ? void 0 : s.onDestroy) == null || o.call(s), r(this, kt).storage = null, r(this, kt).textTracks.setStorage(null);
  });
}, l8 = function() {
  const { clipStartTime: e, clipEndTime: s } = this.$props, { source: i } = this.$state, o = i();
  return o.src ? `${o.src}:${e()}:${s()}` : null;
}, $(xs, "props", CS), $(xs, "state", vo), xs);
const Be = Qh.prototype;
Re(Be, "canPlayQueue");
Re(Be, "remoteControl");
Re(Be, "provider");
Re(Be, "controls");
Re(Be, "orientation");
Re(Be, "title");
Re(Be, "qualities");
Re(Be, "audioTracks");
Re(Be, "textTracks");
Re(Be, "textRenderers");
Re(Be, "duration");
Re(Be, "paused");
Re(Be, "muted");
Re(Be, "currentTime");
Re(Be, "volume");
Re(Be, "playbackRate");
mt(Be, "play");
mt(Be, "pause");
mt(Be, "enterFullscreen");
mt(Be, "exitFullscreen");
mt(Be, "enterPictureInPicture");
mt(Be, "exitPictureInPicture");
mt(Be, "seekToLiveEdge");
mt(Be, "startLoading");
mt(Be, "startLoadingPoster");
mt(Be, "requestAirPlay");
mt(Be, "requestGoogleCast");
mt(Be, "setAudioGain");
function TS(n, t) {
  return fetch(n, t).then((e) => e.text()).then((e) => /type="static"/.test(e) ? "on-demand" : "live");
}
function u8(n, t) {
  return fetch(n, t).then((e) => e.text()).then((e) => {
    const s = PS(e);
    if (s)
      return u8(
        /^https?:/.test(s) ? s : new URL(s, n).href,
        t
      );
    const i = /EXT-X-PLAYLIST-TYPE:\s*VOD/.test(e) ? "on-demand" : "live";
    return i === "live" && LS(e) >= 10 && (/#EXT-X-DVR-ENABLED:\s*true/.test(e) || e.includes("#EXT-X-DISCONTINUITY")) ? "live:dvr" : i;
  });
}
function PS(n) {
  const t = n.match(/#EXT-X-STREAM-INF:[^\n]+(\n[^\n]+)*/g);
  return t ? t[0].split(`
`)[1].trim() : null;
}
function LS(n) {
  const t = n.split(`
`);
  for (const e of t)
    if (e.startsWith("#EXT-X-TARGETDURATION")) {
      const s = parseFloat(e.split(":")[1]);
      if (!isNaN(s))
        return s;
    }
  return -1;
}
const ou = /* @__PURE__ */ new Map();
var k6, M6, x3, Me, ri, dt, d8, h8, au, cu, lu, f8, p8, C8;
class kS {
  constructor(t, e, s, i = []) {
    C(this, dt);
    C(this, k6, !1);
    C(this, M6);
    C(this, x3);
    C(this, Me);
    C(this, ri);
    g(this, x3, t), g(this, Me, e), g(this, ri, s);
    const o = new Rl(), a = new $l(), l = new l7(), d = new Ox(), h = new fS(), p = new hS(), f = [h, p];
    g(this, M6, vr(() => {
      const y = e.$state.remotePlaybackLoader(), v = e.$props.preferNativeHLS() ? [l, d, o, a, ...f, ...i] : [a, l, d, o, ...f, ...i];
      return y ? [y, ...v] : v;
    }));
    const { $state: m } = e;
    m.sources.set(Pd(e.$props.src()));
    for (const y of m.sources()) {
      const v = r(this, M6).call(this).find((S) => S.canPlay(y));
      if (!v) continue;
      const b = v.mediaType(y);
      e.$state.source.set(y), e.$state.mediaType.set(b), e.$state.inferredViewType.set(b), r(this, ri).set(v), g(this, k6, !0);
      break;
    }
  }
  connect() {
    const t = r(this, ri).call(this);
    r(this, k6) && (c(this, dt, cu).call(this, r(this, Me).$state.source(), t), c(this, dt, lu).call(this, t), g(this, k6, !1)), T(c(this, dt, d8).bind(this)), T(c(this, dt, h8).bind(this)), T(c(this, dt, f8).bind(this)), T(c(this, dt, p8).bind(this)), T(c(this, dt, C8).bind(this));
  }
}
k6 = new WeakMap(), M6 = new WeakMap(), x3 = new WeakMap(), Me = new WeakMap(), ri = new WeakMap(), dt = new WeakSet(), d8 = function() {
  r(this, Me).notify("sources-change", [
    ...Pd(r(this, Me).$props.src()),
    ...r(this, x3).call(this)
  ]);
}, h8 = function() {
  var a;
  const { $state: t } = r(this, Me), e = t.sources(), s = _(t.source), i = c(this, dt, au).call(this, s, e);
  if (((a = e[0]) == null ? void 0 : a.src) && !i.src && !i.type) {
    const { crossOrigin: l } = t, d = Zo(l()), h = new AbortController();
    return Promise.all(
      e.map(
        (p) => ce(p.src) && p.type === "?" ? fetch(p.src, {
          method: "HEAD",
          credentials: d,
          signal: h.signal
        }).then((f) => (p.type = f.headers.get("content-type") || "??", ou.set(p.src, p.type), p)).catch(() => p) : p
      )
    ).then((p) => {
      if (h.signal.aborted) return;
      const f = c(this, dt, au).call(this, _(t.source), p);
      Jn(), f.src || r(this, Me).notify("error", {
        message: "Failed to load resource.",
        code: 4
      });
    }), () => h.abort();
  }
  Jn();
}, au = function(t, e) {
  let s = { src: "", type: "" }, i = null, o = new $e("sources-change", { detail: { sources: e } }), a = r(this, M6).call(this), { started: l, paused: d, currentTime: h, quality: p, savedState: f } = r(this, Me).$state;
  for (const m of e) {
    const y = a.find((v) => v.canPlay(m));
    if (y) {
      s = m, i = y;
      break;
    }
  }
  if (ol(s)) {
    const m = p(), y = e.find((v) => v.src === (m == null ? void 0 : m.src));
    _(l) ? f.set({
      paused: _(d),
      currentTime: _(h)
    }) : f.set(null), y && (s = y, o = new $e("quality-change", {
      detail: { quality: m }
    }));
  }
  return kd(t, s) || c(this, dt, cu).call(this, s, i, o), i !== _(r(this, ri)) && c(this, dt, lu).call(this, i, o), s;
}, cu = function(t, e, s) {
  r(this, Me).notify("source-change", t, s), r(this, Me).notify("media-type-change", (e == null ? void 0 : e.mediaType(t)) || "unknown", s);
}, lu = function(t, e) {
  r(this, Me).$providerSetup.set(!1), r(this, Me).notify("provider-change", null, e), t && _(() => {
    var s;
    return (s = t.preconnect) == null ? void 0 : s.call(t, r(this, Me));
  }), r(this, ri).set(t), r(this, Me).notify("provider-loader-change", t, e);
}, f8 = function() {
  const t = r(this, Me).$provider();
  if (!(!t || _(r(this, Me).$providerSetup))) {
    if (r(this, Me).$state.canLoad()) {
      Gt(() => t.setup(), t.scope), r(this, Me).$providerSetup.set(!0);
      return;
    }
    _(() => {
      var e;
      return (e = t.preconnect) == null ? void 0 : e.call(t);
    });
  }
}, p8 = function() {
  if (!r(this, Me).$providerSetup()) return;
  const t = r(this, Me).$provider(), e = r(this, Me).$state.source(), s = _(r(this, Me).$state.crossOrigin), i = _(r(this, Me).$props.preferNativeHLS);
  if (!kd(t == null ? void 0 : t.currentSrc, e)) {
    if (r(this, Me).$state.canLoad()) {
      const o = new AbortController();
      return go(e) ? (i || !s7()) && u8(e.src, {
        credentials: Zo(s),
        signal: o.signal
      }).then((a) => {
        r(this, Me).notify("stream-type-change", a);
      }).catch(gn) : i7(e) ? TS(e.src, {
        credentials: Zo(s),
        signal: o.signal
      }).then((a) => {
        r(this, Me).notify("stream-type-change", a);
      }).catch(gn) : r(this, Me).notify("stream-type-change", "on-demand"), _(() => {
        const a = _(r(this, Me).$state.preload);
        return t == null ? void 0 : t.loadSource(e, a).catch((l) => {
        });
      }), () => o.abort();
    }
    try {
      ce(e.src) && yo(new URL(e.src).origin);
    } catch {
    }
  }
}, C8 = function() {
  const t = r(this, ri).call(this), { providedPoster: e, source: s, canLoadPoster: i } = r(this, Me).$state;
  if (!t || !t.loadPoster || !s() || !i() || e()) return;
  const o = new AbortController(), a = new $e("source-change", { detail: s });
  return t.loadPoster(s(), r(this, Me), o).then((l) => {
    r(this, Me).notify("poster-change", l || "", a);
  }).catch(() => {
    r(this, Me).notify("poster-change", "", a);
  }), () => {
    o.abort();
  };
};
function Pd(n) {
  return (Vt(n) ? n : [n]).map((t) => ce(t) ? { src: t, type: Ld(t) } : { ...t, type: Ld(t.src, t.type) });
}
function Ld(n, t) {
  return ce(t) && t.length ? t : ce(n) && ou.has(n) ? ou.get(n) : !t && go({ src: n, type: "" }) ? "application/x-mpegurl" : !t && i7({ src: n, type: "" }) ? "application/dash+xml" : !ce(n) || n.startsWith("blob:") ? "video/object" : n.includes("youtube") || n.includes("youtu.be") ? "video/youtube" : n.includes("vimeo") && !n.includes("progressive_redirect") && !n.includes(".m3u8") ? "video/vimeo" : "?";
}
function kd(n, t) {
  return (n == null ? void 0 : n.src) === (t == null ? void 0 : t.src) && (n == null ? void 0 : n.type) === (t == null ? void 0 : t.type);
}
var S3, Ki, E3, $2, m8;
class MS {
  constructor(t, e) {
    C(this, $2);
    C(this, S3);
    C(this, Ki);
    C(this, E3, []);
    g(this, S3, t), g(this, Ki, e), T(c(this, $2, m8).bind(this));
  }
}
S3 = new WeakMap(), Ki = new WeakMap(), E3 = new WeakMap(), $2 = new WeakSet(), m8 = function() {
  const t = r(this, S3).call(this);
  for (const e of r(this, E3))
    if (!t.some((s) => s.id === e.id)) {
      const s = e.id && r(this, Ki).textTracks.getById(e.id);
      s && r(this, Ki).textTracks.remove(s);
    }
  for (const e of t) {
    const s = e.id || P1.createId(e);
    r(this, Ki).textTracks.getById(s) || (e.id = s, r(this, Ki).textTracks.add(e));
  }
  g(this, E3, t);
};
var wa, Wn, $3, T3, P3, I6, V6, xn, y8, uu, du, hu;
let g8 = (wa = class extends Ce {
  constructor() {
    super(...arguments);
    C(this, xn);
    C(this, Wn);
    C(this, $3);
    C(this, T3, re([]));
    C(this, P3, re([]));
    C(this, I6, null);
    C(this, V6, -1);
  }
  onSetup() {
    g(this, Wn, je()), g(this, $3, new kS(
      r(this, T3),
      r(this, Wn),
      this.$state.loader,
      this.$props.loaders()
    ));
  }
  onAttach(e) {
    e.setAttribute("data-media-provider", "");
  }
  onConnect(e) {
    r(this, $3).connect(), new MS(r(this, P3), r(this, Wn));
    const s = new ResizeObserver(N1(c(this, xn, du).bind(this)));
    s.observe(e);
    const i = new MutationObserver(c(this, xn, hu).bind(this));
    i.observe(e, { attributes: !0, childList: !0 }), c(this, xn, du).call(this), c(this, xn, hu).call(this), pe(() => {
      s.disconnect(), i.disconnect();
    });
  }
  load(e) {
    e == null || e.setAttribute("aria-hidden", "true"), window.cancelAnimationFrame(r(this, V6)), g(this, V6, requestAnimationFrame(() => c(this, xn, y8).call(this, e))), pe(() => {
      window.cancelAnimationFrame(r(this, V6));
    });
  }
  onDestroy() {
    g(this, I6, null), c(this, xn, uu).call(this);
  }
}, Wn = new WeakMap(), $3 = new WeakMap(), T3 = new WeakMap(), P3 = new WeakMap(), I6 = new WeakMap(), V6 = new WeakMap(), xn = new WeakSet(), y8 = function(e) {
  if (!this.scope) return;
  const s = this.$state.loader(), { $provider: i } = r(this, Wn);
  r(this, I6) === s && (s == null ? void 0 : s.target) === e && _(i) || (c(this, xn, uu).call(this), g(this, I6, s), s && (s.target = e || null), !(!s || !e) && s.load(r(this, Wn)).then((o) => {
    this.scope && _(this.$state.loader) === s && r(this, Wn).notify("provider-change", o);
  }));
}, uu = function() {
  var e;
  (e = r(this, Wn)) == null || e.notify("provider-change", null);
}, du = function() {
  if (!this.el) return;
  const { player: e, $state: s } = r(this, Wn), i = this.el.offsetWidth, o = this.el.offsetHeight;
  e && (s.mediaWidth.set(i), s.mediaHeight.set(o), e.el && (Wt(e.el, "--media-width", i + "px"), Wt(e.el, "--media-height", o + "px")));
}, hu = function() {
  const e = [], s = [], i = this.el.children;
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
          ce(d) && (a[l] = /id|src|codec/.test(l) ? d : Number(d));
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
        s.push({
          id: o.id || P1.createId(a),
          ...a
        });
      }
    }
  r(this, T3).set(e), r(this, P3).set(s), Jn();
}, $(wa, "props", {
  loaders: []
}), $(wa, "state", new Pi({
  loader: null
})), wa);
const IS = g8.prototype;
mt(IS, "load");
var xa, Cs, A6, We, v8, b8, w8, x8, S8, zi, R6, E8, Oa, $8, Rr;
let VS = (xa = class extends Ce {
  constructor() {
    super(...arguments);
    C(this, We);
    C(this, Cs);
    C(this, A6, !1);
    C(this, zi, -1);
    C(this, R6, -1);
  }
  onSetup() {
    g(this, Cs, je());
  }
  onAttach(e) {
    e.style.display = "contents";
  }
  onConnect(e) {
    e.setAttribute("data-media-announcer", ""), He(e, "role", "status"), He(e, "aria-live", "polite");
    const { busy: s } = this.$state;
    this.setAttributes({
      "aria-busy": () => s() ? "true" : null
    }), g(this, A6, !0), T(c(this, We, v8).bind(this)), T(c(this, We, S8).bind(this)), T(c(this, We, x8).bind(this)), T(c(this, We, b8).bind(this)), T(c(this, We, w8).bind(this)), T(c(this, We, E8).bind(this)), T(c(this, We, $8).bind(this)), Jn(), g(this, A6, !1);
  }
}, Cs = new WeakMap(), A6 = new WeakMap(), We = new WeakSet(), v8 = function() {
  const { paused: e } = r(this, Cs).$state;
  c(this, We, Rr).call(this, e() ? "Pause" : "Play");
}, b8 = function() {
  const { fullscreen: e } = r(this, Cs).$state;
  c(this, We, Rr).call(this, e() ? "Enter Fullscreen" : "Exit Fullscreen");
}, w8 = function() {
  const { pictureInPicture: e } = r(this, Cs).$state;
  c(this, We, Rr).call(this, e() ? "Enter PiP" : "Exit PiP");
}, x8 = function() {
  const { textTrack: e } = r(this, Cs).$state;
  c(this, We, Rr).call(this, e() ? "Closed-Captions On" : "Closed-Captions Off");
}, S8 = function() {
  const { muted: e, volume: s, audioGain: i } = r(this, Cs).$state;
  c(this, We, Rr).call(this, e() || s() === 0 ? "Mute" : `${Math.round(s() * (i() ?? 1) * 100)}% ${c(this, We, Oa).call(this, "Volume")}`);
}, zi = new WeakMap(), R6 = new WeakMap(), E8 = function() {
  const { seeking: e, currentTime: s } = r(this, Cs).$state, i = e();
  r(this, zi) > 0 ? (window.clearTimeout(r(this, R6)), g(this, R6, window.setTimeout(() => {
    if (!this.scope) return;
    const o = _(s), a = Math.abs(o - r(this, zi));
    if (a >= 1) {
      const l = o >= r(this, zi), d = Nl(a);
      c(this, We, Rr).call(this, `${c(this, We, Oa).call(this, l ? "Seek Forward" : "Seek Backward")} ${d}`);
    }
    g(this, zi, -1), g(this, R6, -1);
  }, 300))) : i && g(this, zi, _(s));
}, Oa = function(e) {
  var i;
  const { translations: s } = this.$props;
  return ((i = s == null ? void 0 : s()) == null ? void 0 : i[e || ""]) ?? e;
}, $8 = function() {
  const { label: e, busy: s } = this.$state, i = c(this, We, Oa).call(this, e());
  if (r(this, A6)) return;
  s.set(!0);
  const o = window.setTimeout(() => void s.set(!1), 150);
  return this.el && ie(this.el, "aria-label", i), ce(i) && this.dispatch("change", { detail: i }), () => window.clearTimeout(o);
}, Rr = function(e) {
  const { label: s } = this.$state;
  s.set(e);
}, $(xa, "props", {
  translations: null
}), $(xa, "state", new Pi({
  label: null,
  busy: !1
})), xa);
var oi, wi, P8, L8, fu;
class T8 extends Ce {
  constructor() {
    super(...arguments);
    C(this, wi);
    C(this, oi);
  }
  onSetup() {
    g(this, oi, je()), T(c(this, wi, L8).bind(this));
  }
  onAttach(e) {
    const { pictureInPicture: s, fullscreen: i } = r(this, oi).$state;
    Wt(e, "pointer-events", "none"), He(e, "role", "group"), this.setAttributes({
      "data-visible": c(this, wi, fu).bind(this),
      "data-fullscreen": i,
      "data-pip": s
    }), T(() => {
      this.dispatch("change", { detail: c(this, wi, fu).call(this) });
    }), T(c(this, wi, P8).bind(this)), T(() => {
      const o = i();
      for (const a of ["top", "right", "bottom", "left"])
        Wt(e, `padding-${a}`, o && `env(safe-area-inset-${a})`);
    });
  }
}
oi = new WeakMap(), wi = new WeakSet(), P8 = function() {
  if (!this.el) return;
  const { nativeControls: e } = r(this, oi).$state, s = e();
  ie(this.el, "aria-hidden", s ? "true" : null), Wt(this.el, "display", s ? "none" : null);
}, L8 = function() {
  const { controls: e } = r(this, oi).player, { hideDelay: s, hideOnMouseLeave: i } = this.$props;
  e.defaultDelay = s() === 2e3 ? r(this, oi).$props.controlsDelay() : s(), e.hideOnMouseLeave = i();
}, fu = function() {
  const { controlsVisible: e } = r(this, oi).$state;
  return e();
}, $(T8, "props", {
  hideDelay: 2e3,
  hideOnMouseLeave: !1
});
class AS extends Ce {
  onAttach(t) {
    t.style.pointerEvents || Wt(t, "pointer-events", "auto");
  }
}
var Un, yr, M8, l1, u1, ms, Da, r5;
let k8 = (r5 = class extends Sn {
  constructor(e) {
    super();
    C(this, yr);
    C(this, Un);
    C(this, l1, -1);
    C(this, u1, -1);
    C(this, ms, null);
    g(this, Un, e), T(c(this, yr, M8).bind(this));
  }
  onDestroy() {
    var e;
    (e = r(this, ms)) == null || e.call(this), g(this, ms, null);
  }
  show(e) {
    var s, i, o;
    c(this, yr, Da).call(this), window.cancelAnimationFrame(r(this, u1)), g(this, u1, -1), (s = r(this, ms)) == null || s.call(this), g(this, ms, null), g(this, l1, window.setTimeout(() => {
      g(this, l1, -1);
      const a = r(this, Un).content();
      a && a.style.removeProperty("display"), _(() => r(this, Un).onChange(!0, e));
    }, ((o = (i = r(this, Un)).showDelay) == null ? void 0 : o.call(i)) ?? 0));
  }
  hide(e) {
    c(this, yr, Da).call(this), _(() => r(this, Un).onChange(!1, e)), g(this, u1, requestAnimationFrame(() => {
      var i;
      c(this, yr, Da).call(this), g(this, u1, -1);
      const s = r(this, Un).content();
      if (s) {
        const o = () => {
          s.style.display = "none", g(this, ms, null);
        };
        if (mx(s)) {
          (i = r(this, ms)) == null || i.call(this);
          const l = Xe(s, "animationend", o, { once: !0 });
          g(this, ms, l);
        } else
          o();
      }
    }));
  }
}, Un = new WeakMap(), yr = new WeakSet(), M8 = function() {
  const e = r(this, Un).trigger();
  if (!e) {
    this.hide();
    return;
  }
  const s = this.show.bind(this), i = this.hide.bind(this);
  r(this, Un).listen(e, s, i);
}, l1 = new WeakMap(), u1 = new WeakMap(), ms = new WeakMap(), Da = function() {
  window.clearTimeout(r(this, l1)), g(this, l1, -1);
}, r5);
const Dr = Ti();
let RS = 0;
var Dc, N6, Yi, Qi, L3, Rn, I8, V8, A8, R8, N8;
let NS = (Dc = class extends Ce {
  constructor() {
    super();
    C(this, Rn);
    C(this, N6, `media-tooltip-${++RS}`);
    C(this, Yi, re(null));
    C(this, Qi, re(null));
    C(this, L3, re(!1));
    new os();
    const { showDelay: e } = this.$props;
    new k8({
      trigger: r(this, Yi),
      content: r(this, Qi),
      showDelay: e,
      listen(s, i, o) {
        T(() => {
          l2() && Xe(s, "focus", i), Xe(s, "blur", o);
        }), new Ne(s).add("touchstart", (a) => a.preventDefault(), { passive: !1 }).add("mouseenter", i).add("mouseleave", o);
      },
      onChange: c(this, Rn, N8).bind(this)
    });
  }
  onAttach(e) {
    e.style.setProperty("display", "contents");
  }
  onSetup() {
    vn(Dr, {
      trigger: r(this, Yi),
      content: r(this, Qi),
      showing: r(this, L3),
      attachTrigger: c(this, Rn, I8).bind(this),
      detachTrigger: c(this, Rn, V8).bind(this),
      attachContent: c(this, Rn, A8).bind(this),
      detachContent: c(this, Rn, R8).bind(this)
    });
  }
}, N6 = new WeakMap(), Yi = new WeakMap(), Qi = new WeakMap(), L3 = new WeakMap(), Rn = new WeakSet(), I8 = function(e) {
  var i;
  r(this, Yi).set(e);
  let s = e.getAttribute("data-media-tooltip");
  s && ((i = this.el) == null || i.setAttribute(`data-media-${s}-tooltip`, "")), ie(e, "data-describedby", r(this, N6));
}, V8 = function(e) {
  e.removeAttribute("data-describedby"), e.removeAttribute("aria-describedby"), r(this, Yi).set(null);
}, A8 = function(e) {
  e.setAttribute("id", r(this, N6)), e.style.display = "none", He(e, "role", "tooltip"), r(this, Qi).set(e);
}, R8 = function(e) {
  e.removeAttribute("id"), e.removeAttribute("role"), r(this, Qi).set(null);
}, N8 = function(e) {
  const s = r(this, Yi).call(this), i = r(this, Qi).call(this);
  s && ie(s, "aria-describedby", e ? r(this, N6) : null);
  for (const o of [this.el, s, i])
    o && ie(o, "data-visible", e);
  r(this, L3).set(e);
}, $(Dc, "props", {
  showDelay: 700
}), Dc);
var M1, H8, pu, o5;
let HS = (o5 = class extends Ce {
  constructor() {
    super();
    C(this, M1);
    new os();
  }
  onConnect(e) {
    pe(
      m4(() => {
        if (!this.connectScope) return;
        c(this, M1, H8).call(this);
        const s = rt(Dr);
        pe(() => {
          const i = c(this, M1, pu).call(this);
          i && s.detachTrigger(i);
        });
      })
    );
  }
}, M1 = new WeakSet(), H8 = function() {
  const e = c(this, M1, pu).call(this), s = rt(Dr);
  e && s.attachTrigger(e);
}, pu = function() {
  const e = this.el.firstElementChild;
  return (e == null ? void 0 : e.localName) === "button" || (e == null ? void 0 : e.getAttribute("role")) === "button" ? e : this.el;
}, o5);
var _c, xi, Cu, O8, D8;
let OS = (_c = class extends Ce {
  constructor() {
    super();
    C(this, xi);
    new os();
    const { placement: e } = this.$props;
    this.setAttributes({
      "data-placement": e
    });
  }
  onAttach(e) {
    c(this, xi, Cu).call(this, e), Object.assign(e.style, {
      position: "absolute",
      top: 0,
      left: 0,
      width: "max-content"
    });
  }
  onConnect(e) {
    c(this, xi, Cu).call(this, e);
    const s = rt(Dr);
    pe(() => s.detachContent(e)), pe(
      m4(() => {
        this.connectScope && T(c(this, xi, O8).bind(this));
      })
    );
  }
}, xi = new WeakSet(), Cu = function(e) {
  rt(Dr).attachContent(e);
}, O8 = function() {
  const { showing: e } = rt(Dr);
  if (!e()) return;
  const { placement: s, offset: i, alignOffset: o } = this.$props;
  return g4(this.el, c(this, xi, D8).call(this), s(), {
    offsetVarName: "media-tooltip",
    xOffset: o(),
    yOffset: i()
  });
}, D8 = function() {
  return rt(Dr).trigger();
}, $(_c, "props", {
  placement: "top center",
  offset: 0,
  alignOffset: 0
}), _c);
var ai, As, _8, F8, j8, q8;
class Ot extends Sn {
  constructor(e) {
    super();
    C(this, As);
    C(this, ai);
    g(this, ai, e), new os(), e.keyShortcut && new Rx(e.keyShortcut);
  }
  onSetup() {
    const { disabled: e } = this.$props;
    this.setAttributes({
      "data-pressed": r(this, ai).isPresssed,
      "aria-pressed": c(this, As, _8).bind(this),
      "aria-disabled": () => e() ? "true" : null
    });
  }
  onAttach(e) {
    He(e, "tabindex", "0"), He(e, "role", "button"), He(e, "type", "button");
  }
  onConnect(e) {
    const s = Sr(e, c(this, As, j8).bind(this));
    for (const i of ["click", "touchstart"])
      s.add(i, c(this, As, q8).bind(this), {
        passive: !0
      });
  }
}
ai = new WeakMap(), As = new WeakSet(), _8 = function() {
  return Go(r(this, ai).isPresssed());
}, F8 = function(e) {
  m5(r(this, ai).isPresssed) && r(this, ai).isPresssed.set((s) => !s);
}, j8 = function(e) {
  if (this.$props.disabled() || this.el.hasAttribute("data-disabled")) {
    e.preventDefault(), e.stopImmediatePropagation();
    return;
  }
  e.preventDefault(), (r(this, ai).onPress ?? c(this, As, F8)).call(this, e);
}, q8 = function(e) {
  this.$props.disabled() && (e.preventDefault(), e.stopImmediatePropagation());
}, $(Ot, "props", {
  disabled: !1
});
var Fc, k3;
let Z8 = (Fc = class extends Ce {
  constructor() {
    super();
    C(this, k3, re(!1));
    new Ot({
      isPresssed: r(this, k3)
    });
  }
  /**
   * Whether the toggle is currently in a `pressed` state.
   */
  get pressed() {
    return r(this, k3).call(this);
  }
}, k3 = new WeakMap(), $(Fc, "props", {
  disabled: !1,
  defaultPressed: !1
}), Fc);
const DS = Z8.prototype;
Re(DS, "pressed");
function _S(n) {
  return n ? "true" : "false";
}
function Rt(n) {
  return () => _S(n());
}
var jc, ci, Rs, B8, G8, W8, U8;
let FS = (jc = class extends Ce {
  constructor() {
    super();
    C(this, Rs);
    C(this, ci);
    new Ot({
      isPresssed: c(this, Rs, G8).bind(this),
      onPress: c(this, Rs, B8).bind(this)
    });
  }
  onSetup() {
    g(this, ci, je());
    const { canAirPlay: e, isAirPlayConnected: s } = r(this, ci).$state;
    this.setAttributes({
      "data-active": s,
      "data-supported": e,
      "data-state": c(this, Rs, W8).bind(this),
      "aria-hidden": Rt(() => !e())
    });
  }
  onAttach(e) {
    e.setAttribute("data-media-tooltip", "airplay"), Mr(e, c(this, Rs, U8).bind(this));
  }
}, ci = new WeakMap(), Rs = new WeakSet(), B8 = function(e) {
  r(this, ci).remote.requestAirPlay(e);
}, G8 = function() {
  const { remotePlaybackType: e, remotePlaybackState: s } = r(this, ci).$state;
  return e() === "airplay" && s() !== "disconnected";
}, W8 = function() {
  const { remotePlaybackType: e, remotePlaybackState: s } = r(this, ci).$state;
  return e() === "airplay" && s();
}, U8 = function() {
  const { remotePlaybackState: e } = r(this, ci).$state;
  return `AirPlay ${e()}`;
}, $(jc, "props", Ot.props), jc);
var qc, li, Ns, K8, z8, Y8, Q8;
let jS = (qc = class extends Ce {
  constructor() {
    super();
    C(this, Ns);
    C(this, li);
    new Ot({
      isPresssed: c(this, Ns, z8).bind(this),
      onPress: c(this, Ns, K8).bind(this)
    });
  }
  onSetup() {
    g(this, li, je());
    const { canGoogleCast: e, isGoogleCastConnected: s } = r(this, li).$state;
    this.setAttributes({
      "data-active": s,
      "data-supported": e,
      "data-state": c(this, Ns, Y8).bind(this),
      "aria-hidden": Rt(() => !e())
    });
  }
  onAttach(e) {
    e.setAttribute("data-media-tooltip", "google-cast"), Mr(e, c(this, Ns, Q8).bind(this));
  }
}, li = new WeakMap(), Ns = new WeakSet(), K8 = function(e) {
  r(this, li).remote.requestGoogleCast(e);
}, z8 = function() {
  const { remotePlaybackType: e, remotePlaybackState: s } = r(this, li).$state;
  return e() === "google-cast" && s() !== "disconnected";
}, Y8 = function() {
  const { remotePlaybackType: e, remotePlaybackState: s } = r(this, li).$state;
  return e() === "google-cast" && s();
}, Q8 = function() {
  const { remotePlaybackState: e } = r(this, li).$state;
  return `Google Cast ${e()}`;
}, $(qc, "props", Ot.props), qc);
var Zc, d1, I1, X8, mu;
let qS = (Zc = class extends Ce {
  constructor() {
    super();
    C(this, I1);
    C(this, d1);
    new Ot({
      isPresssed: c(this, I1, mu).bind(this),
      keyShortcut: "togglePaused",
      onPress: c(this, I1, X8).bind(this)
    });
  }
  onSetup() {
    g(this, d1, je());
    const { paused: e, ended: s } = r(this, d1).$state;
    this.setAttributes({
      "data-paused": e,
      "data-ended": s
    });
  }
  onAttach(e) {
    e.setAttribute("data-media-tooltip", "play"), Mr(e, "Play");
  }
}, d1 = new WeakMap(), I1 = new WeakSet(), X8 = function(e) {
  const s = r(this, d1).remote;
  c(this, I1, mu).call(this) ? s.pause(e) : s.play(e);
}, mu = function() {
  const { paused: e } = r(this, d1).$state;
  return !e();
}, $(Zc, "props", Ot.props), Zc);
var Bc, h1, Hs, J8, gu, yu;
let ZS = (Bc = class extends Ce {
  constructor() {
    super();
    C(this, Hs);
    C(this, h1);
    new Ot({
      isPresssed: c(this, Hs, gu).bind(this),
      keyShortcut: "toggleCaptions",
      onPress: c(this, Hs, J8).bind(this)
    });
  }
  onSetup() {
    g(this, h1, je()), this.setAttributes({
      "data-active": c(this, Hs, gu).bind(this),
      "data-supported": () => !c(this, Hs, yu).call(this),
      "aria-hidden": Rt(c(this, Hs, yu).bind(this))
    });
  }
  onAttach(e) {
    e.setAttribute("data-media-tooltip", "caption"), Mr(e, "Captions");
  }
}, h1 = new WeakMap(), Hs = new WeakSet(), J8 = function(e) {
  r(this, h1).remote.toggleCaptions(e);
}, gu = function() {
  const { textTrack: e } = r(this, h1).$state, s = e();
  return !!s && mn(s);
}, yu = function() {
  const { hasCaptions: e } = r(this, h1).$state;
  return !e();
}, $(Bc, "props", Ot.props), Bc);
var Gc, Xi, Si, ef, vu, tf;
let BS = (Gc = class extends Ce {
  constructor() {
    super();
    C(this, Si);
    C(this, Xi);
    new Ot({
      isPresssed: c(this, Si, vu).bind(this),
      keyShortcut: "toggleFullscreen",
      onPress: c(this, Si, ef).bind(this)
    });
  }
  onSetup() {
    g(this, Xi, je());
    const { fullscreen: e } = r(this, Xi).$state, s = c(this, Si, tf).bind(this);
    this.setAttributes({
      "data-active": e,
      "data-supported": s,
      "aria-hidden": Rt(() => !s())
    });
  }
  onAttach(e) {
    e.setAttribute("data-media-tooltip", "fullscreen"), Mr(e, "Fullscreen");
  }
}, Xi = new WeakMap(), Si = new WeakSet(), ef = function(e) {
  const s = r(this, Xi).remote, i = this.$props.target();
  c(this, Si, vu).call(this) ? s.exitFullscreen(i, e) : s.enterFullscreen(i, e);
}, vu = function() {
  const { fullscreen: e } = r(this, Xi).$state;
  return e();
}, tf = function() {
  const { canFullscreen: e } = r(this, Xi).$state;
  return e();
}, $(Gc, "props", {
  ...Ot.props,
  target: "prefer-media"
}), Gc);
var Wc, f1, Es, nf, _a, sf;
let GS = (Wc = class extends Ce {
  constructor() {
    super();
    C(this, Es);
    C(this, f1);
    new Ot({
      isPresssed: c(this, Es, _a).bind(this),
      keyShortcut: "toggleMuted",
      onPress: c(this, Es, nf).bind(this)
    });
  }
  onSetup() {
    g(this, f1, je()), this.setAttributes({
      "data-muted": c(this, Es, _a).bind(this),
      "data-state": c(this, Es, sf).bind(this)
    });
  }
  onAttach(e) {
    e.setAttribute("data-media-mute-button", ""), e.setAttribute("data-media-tooltip", "mute"), Mr(e, "Mute");
  }
}, f1 = new WeakMap(), Es = new WeakSet(), nf = function(e) {
  const s = r(this, f1).remote;
  c(this, Es, _a).call(this) ? s.unmute(e) : s.mute(e);
}, _a = function() {
  const { muted: e, volume: s } = r(this, f1).$state;
  return e() || s() === 0;
}, sf = function() {
  const { muted: e, volume: s } = r(this, f1).$state, i = s();
  if (e() || i === 0) return "muted";
  if (i >= 0.5) return "high";
  if (i < 0.5) return "low";
}, $(Wc, "props", Ot.props), Wc);
var Uc, Ji, Ei, rf, bu, of;
let WS = (Uc = class extends Ce {
  constructor() {
    super();
    C(this, Ei);
    C(this, Ji);
    new Ot({
      isPresssed: c(this, Ei, bu).bind(this),
      keyShortcut: "togglePictureInPicture",
      onPress: c(this, Ei, rf).bind(this)
    });
  }
  onSetup() {
    g(this, Ji, je());
    const { pictureInPicture: e } = r(this, Ji).$state, s = c(this, Ei, of).bind(this);
    this.setAttributes({
      "data-active": e,
      "data-supported": s,
      "aria-hidden": Rt(() => !s())
    });
  }
  onAttach(e) {
    e.setAttribute("data-media-tooltip", "pip"), Mr(e, "PiP");
  }
}, Ji = new WeakMap(), Ei = new WeakSet(), rf = function(e) {
  const s = r(this, Ji).remote;
  c(this, Ei, bu).call(this) ? s.exitPictureInPicture(e) : s.enterPictureInPicture(e);
}, bu = function() {
  const { pictureInPicture: e } = r(this, Ji).$state;
  return e();
}, of = function() {
  const { canPictureInPicture: e } = r(this, Ji).$state;
  return e();
}, $(Uc, "props", Ot.props), Uc);
var Kc, er, Pr, af, cf, lf;
let US = (Kc = class extends Ce {
  constructor() {
    super();
    C(this, Pr);
    C(this, er);
    new os();
  }
  onSetup() {
    g(this, er, je());
    const { seeking: e } = r(this, er).$state, { seconds: s } = this.$props, i = c(this, Pr, af).bind(this);
    this.setAttributes({
      seconds: s,
      "data-seeking": e,
      "data-supported": i,
      "aria-hidden": Rt(() => !i())
    });
  }
  onAttach(e) {
    He(e, "tabindex", "0"), He(e, "role", "button"), He(e, "type", "button"), e.setAttribute("data-media-tooltip", "seek"), Mr(e, c(this, Pr, cf).bind(this));
  }
  onConnect(e) {
    Sr(e, c(this, Pr, lf).bind(this));
  }
}, er = new WeakMap(), Pr = new WeakSet(), af = function() {
  const { canSeek: e } = r(this, er).$state;
  return e();
}, cf = function() {
  const { seconds: e } = this.$props;
  return `Seek ${e() > 0 ? "forward" : "backward"} ${e()} seconds`;
}, lf = function(e) {
  const { seconds: s, disabled: i } = this.$props;
  if (i()) return;
  const { currentTime: o } = r(this, er).$state, a = o() + s();
  r(this, er).remote.seek(a, e);
}, $(Kc, "props", {
  disabled: !1,
  seconds: 30
}), Kc);
var zc, p1, T2, uf;
let KS = (zc = class extends Ce {
  constructor() {
    super();
    C(this, T2);
    C(this, p1);
    new os();
  }
  onSetup() {
    g(this, p1, je());
    const { disabled: e } = this.$props, { live: s, liveEdge: i } = r(this, p1).$state, o = () => !s();
    this.setAttributes({
      "data-edge": i,
      "data-hidden": o,
      "aria-disabled": Rt(() => e() || i()),
      "aria-hidden": Rt(o)
    });
  }
  onAttach(e) {
    He(e, "tabindex", "0"), He(e, "role", "button"), He(e, "type", "button"), e.setAttribute("data-media-tooltip", "live");
  }
  onConnect(e) {
    Sr(e, c(this, T2, uf).bind(this));
  }
}, p1 = new WeakMap(), T2 = new WeakSet(), uf = function(e) {
  const { disabled: s } = this.$props, { liveEdge: i } = r(this, p1).$state;
  s() || i() || r(this, p1).remote.seekToLiveEdge(e);
}, $(zc, "props", {
  disabled: !1
}), zc);
const O1 = new Pi({
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
    return Md(this.min, this.max, this.value);
  },
  get fillPercent() {
    return this.fillRate * 100;
  },
  get pointerRate() {
    return Md(this.min, this.max, this.pointerValue);
  },
  get pointerPercent() {
    return this.pointerRate * 100;
  }
});
function Md(n, t, e) {
  const s = t - n, i = e - n;
  return s > 0 ? i / s : 0;
}
var H6, tr, P2, hf;
class df extends Sn {
  constructor(e) {
    super();
    C(this, P2);
    C(this, H6);
    C(this, tr);
    g(this, H6, e);
  }
  onConnect(e) {
    g(this, tr, new IntersectionObserver((s) => {
      var i, o;
      (o = (i = r(this, H6)).callback) == null || o.call(i, s, r(this, tr));
    }, r(this, H6))), r(this, tr).observe(e), pe(c(this, P2, hf).bind(this));
  }
}
H6 = new WeakMap(), tr = new WeakMap(), P2 = new WeakSet(), /**
 * Disconnect any active intersection observers.
 */
hf = function() {
  var e;
  (e = r(this, tr)) == null || e.disconnect(), g(this, tr, void 0);
};
const d7 = Ti(), Bo = Ti();
function zS(n, t, e, s) {
  return a7(n, At(e, dl(s)), t);
}
function YS(n, t, e, s) {
  const i = a7(0, e, 1), o = t - n, a = o * i, l = a / s, d = s * Math.round(l);
  return n + d;
}
const Ec = {
  Left: -1,
  ArrowLeft: -1,
  Up: 1,
  ArrowUp: 1,
  Right: 1,
  ArrowRight: 1,
  Down: -1,
  ArrowDown: -1
};
var It, nr, O6, z, ff, sr, Kn, ui, pf, Cf, mf, gf, yf, Fa, Mi, Oo, vf, bf, wf, xf, ja, wu, D6, di, Sf, Ef, xu, Su, $f, Tf, L2;
class QS extends Sn {
  constructor(e, s) {
    super();
    C(this, z);
    C(this, It);
    C(this, nr);
    C(this, O6);
    C(this, sr, null);
    C(this, Kn, null);
    C(this, ui, null);
    // -------------------------------------------------------------------------------------------
    // Keyboard Events
    // -------------------------------------------------------------------------------------------
    C(this, D6);
    C(this, di, !1);
    C(this, L2, kr(
      (e) => {
        c(this, z, Mi).call(this, c(this, z, Oo).call(this, e), e);
      },
      20,
      { leading: !0 }
    ));
    g(this, It, e), g(this, nr, s);
  }
  onSetup() {
    Ts(Bo) && g(this, O6, rt(Bo));
  }
  onConnect(e) {
    T(c(this, z, mf).bind(this, e)), T(c(this, z, gf).bind(this, e)), r(this, It).swipeGesture && T(c(this, z, ff).bind(this));
  }
}
It = new WeakMap(), nr = new WeakMap(), O6 = new WeakMap(), z = new WeakSet(), ff = function() {
  var s;
  const { pointer: e } = r(this, nr).$state;
  if (e() !== "coarse" || !r(this, It).swipeGesture()) {
    g(this, sr, null);
    return;
  }
  g(this, sr, (s = r(this, nr).player.el) == null ? void 0 : s.querySelector(
    "media-provider,[data-media-provider]"
  )), r(this, sr) && new Ne(r(this, sr)).add("touchstart", c(this, z, pf).bind(this), {
    passive: !0
  }).add("touchmove", c(this, z, Cf).bind(this), { passive: !1 });
}, sr = new WeakMap(), Kn = new WeakMap(), ui = new WeakMap(), pf = function(e) {
  g(this, Kn, e.touches[0]);
}, Cf = function(e) {
  if (es(r(this, Kn)) || c7(e)) return;
  const s = e.touches[0], i = s.clientX - r(this, Kn).clientX, o = s.clientY - r(this, Kn).clientY, a = this.$state.dragging();
  !a && Math.abs(o) > 5 || a || (e.preventDefault(), Math.abs(i) > 20 && (g(this, Kn, s), g(this, ui, this.$state.value()), c(this, z, ja).call(this, r(this, ui), e)));
}, mf = function(e) {
  const { hidden: s } = this.$props;
  Xe(e, "focus", c(this, z, yf).bind(this)), !(s() || r(this, It).isDisabled()) && new Ne(e).add("keyup", c(this, z, Ef).bind(this)).add("keydown", c(this, z, Sf).bind(this)).add("pointerenter", c(this, z, vf).bind(this)).add("pointermove", c(this, z, bf).bind(this)).add("pointerleave", c(this, z, wf).bind(this)).add("pointerdown", c(this, z, xf).bind(this));
}, gf = function(e) {
  r(this, It).isDisabled() || !this.$state.dragging() || new Ne(document).add("pointerup", c(this, z, $f).bind(this), { capture: !0 }).add("pointermove", r(this, L2).bind(this)).add("touchmove", c(this, z, Tf).bind(this), {
    passive: !1
  });
}, yf = function() {
  c(this, z, Mi).call(this, this.$state.value());
}, Fa = function(e, s) {
  var p, f, m, y;
  const { value: i, min: o, max: a, dragging: l } = this.$state, d = Math.max(o(), Math.min(e, a()));
  i.set(d);
  const h = this.createEvent("value-change", { detail: d, trigger: s });
  if (this.dispatch(h), (f = (p = r(this, It)).onValueChange) == null || f.call(p, h), l()) {
    const v = this.createEvent("drag-value-change", { detail: d, trigger: s });
    this.dispatch(v), (y = (m = r(this, It)).onDragValueChange) == null || y.call(m, v);
  }
}, Mi = function(e, s) {
  const { pointerValue: i, dragging: o } = this.$state;
  i.set(e), this.dispatch("pointer-value-change", { detail: e, trigger: s }), o() && c(this, z, Fa).call(this, e, s);
}, Oo = function(e) {
  let s, i = this.el.getBoundingClientRect(), { min: o, max: a } = this.$state;
  if (this.$props.orientation() === "vertical") {
    const { bottom: l, height: d } = i;
    s = (l - e.clientY) / d;
  } else if (r(this, Kn) && tn(r(this, ui))) {
    const { width: l } = r(this, sr).getBoundingClientRect(), d = (e.clientX - r(this, Kn).clientX) / l, h = a() - o(), p = h * Math.abs(d);
    s = (d < 0 ? r(this, ui) - p : r(this, ui) + p) / h;
  } else {
    const { left: l, width: d } = i;
    s = (e.clientX - l) / d;
  }
  return Math.max(
    o(),
    Math.min(
      a(),
      r(this, It).roundValue(
        YS(o(), a(), s, r(this, It).getStep())
      )
    )
  );
}, vf = function(e) {
  this.$state.pointing.set(!0);
}, bf = function(e) {
  const { dragging: s } = this.$state;
  s() || c(this, z, Mi).call(this, c(this, z, Oo).call(this, e), e);
}, wf = function(e) {
  this.$state.pointing.set(!1);
}, xf = function(e) {
  if (e.button !== 0) return;
  const s = c(this, z, Oo).call(this, e);
  c(this, z, ja).call(this, s, e), c(this, z, Mi).call(this, s, e);
}, ja = function(e, s) {
  var a, l, d, h;
  const { dragging: i } = this.$state;
  if (i()) return;
  i.set(!0), r(this, nr).remote.pauseControls(s);
  const o = this.createEvent("drag-start", { detail: e, trigger: s });
  this.dispatch(o), (l = (a = r(this, It)).onDragStart) == null || l.call(a, o), (h = (d = r(this, O6)) == null ? void 0 : d.onDragStart) == null || h.call(d);
}, wu = function(e, s) {
  var a, l, d, h;
  const { dragging: i } = this.$state;
  if (!i()) return;
  i.set(!1), r(this, nr).remote.resumeControls(s);
  const o = this.createEvent("drag-end", { detail: e, trigger: s });
  this.dispatch(o), (l = (a = r(this, It)).onDragEnd) == null || l.call(a, o), g(this, Kn, null), g(this, ui, null), (h = (d = r(this, O6)) == null ? void 0 : d.onDragEnd) == null || h.call(d);
}, D6 = new WeakMap(), di = new WeakMap(), Sf = function(e) {
  if (!Object.keys(Ec).includes(e.key)) return;
  const { key: i } = e, o = c(this, z, xu).call(this, e);
  if (!es(o)) {
    c(this, z, Mi).call(this, o, e), c(this, z, Fa).call(this, o, e);
    return;
  }
  const a = c(this, z, Su).call(this, e);
  r(this, di) || (g(this, di, i === r(this, D6)), !this.$state.dragging() && r(this, di) && c(this, z, ja).call(this, a, e)), c(this, z, Mi).call(this, a, e), g(this, D6, i);
}, Ef = function(e) {
  if (!Object.keys(Ec).includes(e.key) || !es(c(this, z, xu).call(this, e))) return;
  const i = r(this, di) ? this.$state.pointerValue() : c(this, z, Su).call(this, e);
  c(this, z, Fa).call(this, i, e), c(this, z, wu).call(this, i, e), g(this, D6, ""), g(this, di, !1);
}, xu = function(e) {
  let s = e.key, { min: i, max: o } = this.$state;
  return s === "Home" || s === "PageUp" ? i() : s === "End" || s === "PageDown" ? o() : !e.metaKey && /^[0-9]$/.test(s) ? (o() - i()) / 10 * Number(s) : null;
}, Su = function(e) {
  var E, P;
  const { key: s, shiftKey: i } = e;
  e.preventDefault(), e.stopPropagation();
  const { shiftKeyMultiplier: o } = this.$props, { min: a, max: l, value: d, pointerValue: h } = this.$state, p = r(this, It).getStep(), f = r(this, It).getKeyStep(), m = i ? f * o() : f, y = Number(Ec[s]), v = m * y, b = r(this, di) ? h() : ((P = (E = r(this, It)).getValue) == null ? void 0 : P.call(E)) ?? d(), S = (b + v) / p;
  return Math.max(a(), Math.min(l(), Number((p * S).toFixed(3))));
}, // -------------------------------------------------------------------------------------------
// Document (Pointer Events)
// -------------------------------------------------------------------------------------------
$f = function(e) {
  if (e.button !== 0) return;
  e.preventDefault(), e.stopImmediatePropagation();
  const s = c(this, z, Oo).call(this, e);
  c(this, z, Mi).call(this, s, e), c(this, z, wu).call(this, s, e);
}, Tf = function(e) {
  e.preventDefault();
}, L2 = new WeakMap();
const co = Ti(() => ({}));
var M3, Yt, I3, V3, bt, Pf, Lf, kf, Mf, If, Vf, Af, Eu, k2;
class bn extends Sn {
  constructor(e) {
    super();
    C(this, bt);
    C(this, M3);
    C(this, Yt);
    C(this, I3, re(!0));
    C(this, V3, re(!0));
    C(this, k2, N1((e, s) => {
      var i, o;
      (i = this.el) == null || i.style.setProperty("--slider-fill", e + "%"), (o = this.el) == null || o.style.setProperty("--slider-pointer", s + "%");
    }));
    g(this, Yt, e);
  }
  onSetup() {
    g(this, M3, je());
    const e = new os();
    e.attach(this), this.$state.focused = e.focused.bind(e), Ts(co) || vn(co, {
      default: "value"
    }), vn(d7, {
      orientation: this.$props.orientation,
      disabled: r(this, Yt).isDisabled,
      preview: re(null)
    }), T(c(this, bt, kf).bind(this)), T(c(this, bt, Mf).bind(this)), T(c(this, bt, If).bind(this)), c(this, bt, Af).call(this), new QS(r(this, Yt), r(this, M3)).attach(this), new df({
      callback: c(this, bt, Pf).bind(this)
    }).attach(this);
  }
  onAttach(e) {
    He(e, "role", "slider"), He(e, "tabindex", "0"), He(e, "autocomplete", "off"), W ? c(this, bt, Eu).call(this) : T(c(this, bt, Eu).bind(this));
  }
  onConnect(e) {
    pe(p4(e, r(this, I3).set)), T(c(this, bt, Lf).bind(this));
  }
}
M3 = new WeakMap(), Yt = new WeakMap(), I3 = new WeakMap(), V3 = new WeakMap(), bt = new WeakSet(), Pf = function(e) {
  r(this, V3).set(e[0].isIntersecting);
}, // -------------------------------------------------------------------------------------------
// Watch
// -------------------------------------------------------------------------------------------
Lf = function() {
  const { hidden: e } = this.$props;
  this.$state.hidden.set(e() || !r(this, I3).call(this) || !r(this, V3).bind(this));
}, kf = function() {
  const { dragging: e, value: s, min: i, max: o } = this.$state;
  _(e) || s.set(zS(i(), o(), s(), r(this, Yt).getStep()));
}, Mf = function() {
  this.$state.step.set(r(this, Yt).getStep());
}, If = function() {
  if (!r(this, Yt).isDisabled()) return;
  const { dragging: e, pointing: s } = this.$state;
  e.set(!1), s.set(!1);
}, // -------------------------------------------------------------------------------------------
// ARIA
// -------------------------------------------------------------------------------------------
Vf = function() {
  return Go(r(this, Yt).isDisabled());
}, // -------------------------------------------------------------------------------------------
// Attributes
// -------------------------------------------------------------------------------------------
Af = function() {
  const { orientation: e } = this.$props, { dragging: s, active: i, pointing: o } = this.$state;
  this.setAttributes({
    "data-dragging": s,
    "data-pointing": o,
    "data-active": i,
    "aria-disabled": c(this, bt, Vf).bind(this),
    "aria-valuemin": r(this, Yt).aria.valueMin ?? this.$state.min,
    "aria-valuemax": r(this, Yt).aria.valueMax ?? this.$state.max,
    "aria-valuenow": r(this, Yt).aria.valueNow,
    "aria-valuetext": r(this, Yt).aria.valueText,
    "aria-orientation": e
  });
}, Eu = function() {
  const { fillPercent: e, pointerPercent: s } = this.$state;
  r(this, k2).call(this, At(e(), 3), At(s(), 3));
}, k2 = new WeakMap(), $(bn, "props", {
  hidden: !1,
  disabled: !1,
  step: 1,
  keyStep: 1,
  orientation: "horizontal",
  shiftKeyMultiplier: 5
});
var Sa, Os, Rf, Nf, Hf, Of;
let ia = (Sa = class extends Ce {
  constructor() {
    super();
    C(this, Os);
    new bn({
      getStep: this.$props.step,
      getKeyStep: this.$props.keyStep,
      roundValue: Math.round,
      isDisabled: this.$props.disabled,
      aria: {
        valueNow: c(this, Os, Rf).bind(this),
        valueText: c(this, Os, Nf).bind(this)
      }
    });
  }
  onSetup() {
    T(c(this, Os, Hf).bind(this)), T(c(this, Os, Of).bind(this));
  }
}, Os = new WeakSet(), // -------------------------------------------------------------------------------------------
// Props
// -------------------------------------------------------------------------------------------
Rf = function() {
  const { value: e } = this.$state;
  return Math.round(e());
}, Nf = function() {
  const { value: e, max: s } = this.$state;
  return At(e() / s() * 100, 2) + "%";
}, // -------------------------------------------------------------------------------------------
// Watch
// -------------------------------------------------------------------------------------------
Hf = function() {
  const { value: e } = this.$props;
  this.$state.value.set(e());
}, Of = function() {
  const { min: e, max: s } = this.$props;
  this.$state.min.set(e()), this.$state.max.set(s());
}, $(Sa, "props", {
  ...bn.props,
  min: 0,
  max: 100,
  value: 0
}), $(Sa, "state", O1), Sa);
const Bs = /* @__PURE__ */ new Map(), Ca = /* @__PURE__ */ new Map();
var A3, _6, R3, tt, Df, _f, Tu, Pu, Lu, ku, Ff, qa;
const N7 = class N7 {
  constructor(t, e, s) {
    C(this, tt);
    C(this, A3);
    C(this, _6);
    C(this, R3);
    $(this, "$images", re([]));
    g(this, _6, t), g(this, R3, e), g(this, A3, s), T(c(this, tt, Df).bind(this));
  }
  static create(t, e) {
    const s = je();
    return new N7(t, e, s);
  }
};
A3 = new WeakMap(), _6 = new WeakMap(), R3 = new WeakMap(), tt = new WeakSet(), Df = function() {
  var s;
  const { canLoad: t } = r(this, A3).$state;
  if (!t()) return;
  const e = r(this, _6).call(this);
  if (e) {
    if (ce(e) && Bs.has(e)) {
      const i = Bs.get(e);
      if (Bs.delete(e), Bs.set(e, i), Bs.size > 99) {
        const o = Bs.keys().next().value;
        Bs.delete(o);
      }
      this.$images.set(Bs.get(e));
    } else if (ce(e)) {
      const i = r(this, R3).call(this), o = e + "::" + i;
      if (!Ca.has(o)) {
        const a = new Promise(async (l, d) => {
          try {
            const h = await fetch(e, {
              credentials: Zo(i)
            });
            if (h.headers.get("content-type") === "application/json") {
              const f = await h.json();
              if (Vt(f))
                if (f[0] && "text" in f[0])
                  l(c(this, tt, Pu).call(this, f));
                else {
                  for (let m = 0; m < f.length; m++) {
                    const y = f[m];
                    Zs(y5(y), !1), Zs(
                      "url" in y && ce(y.url),
                      !1
                    ), Zs(
                      "startTime" in y && tn(y.startTime),
                      !1
                    );
                  }
                  l(f);
                }
              else
                l(c(this, tt, Tu).call(this, f));
              return;
            }
            import("./prod-DTLJXtPo.js").then((f) => f.d).then(async ({ parseResponse: f }) => {
              try {
                const { cues: m } = await f(h);
                l(c(this, tt, Pu).call(this, m));
              } catch (m) {
                d(m);
              }
            });
          } catch (h) {
            d(h);
          }
        }).then((l) => (Bs.set(o, l), l)).catch((l) => {
          c(this, tt, qa).call(this, e, l);
        }).finally(() => {
          ce(o) && Ca.delete(o);
        });
        Ca.set(o, a);
      }
      (s = Ca.get(o)) == null || s.then((a) => {
        this.$images.set(a || []);
      });
    } else if (Vt(e))
      try {
        this.$images.set(c(this, tt, _f).call(this, e));
      } catch (i) {
        c(this, tt, qa).call(this, e, i);
      }
    else
      try {
        this.$images.set(c(this, tt, Tu).call(this, e));
      } catch (i) {
        c(this, tt, qa).call(this, e, i);
      }
    return () => {
      this.$images.set([]);
    };
  }
}, _f = function(t) {
  const e = c(this, tt, Lu).call(this);
  return t.map((s, i) => (Zs(
    s.url && ce(s.url)
  ), Zs(
    "startTime" in s && tn(s.startTime)
  ), {
    ...s,
    url: ce(s.url) ? c(this, tt, ku).call(this, s.url, e) : s.url
  }));
}, Tu = function(t) {
  var a;
  Zs(ce(t.url)), Zs(Vt(t.tiles) && ((a = t.tiles) == null ? void 0 : a.length));
  const e = new URL(t.url), s = [], i = "tile_width" in t ? t.tile_width : t.tileWidth, o = "tile_height" in t ? t.tile_height : t.tileHeight;
  for (const l of t.tiles)
    s.push({
      url: e,
      startTime: "start" in l ? l.start : l.startTime,
      width: i,
      height: o,
      coords: { x: l.x, y: l.y }
    });
  return s;
}, Pu = function(t) {
  for (let i = 0; i < t.length; i++) {
    const o = t[i];
    Zs(
      "startTime" in o && tn(o.startTime)
    ), Zs(
      "text" in o && ce(o.text)
    );
  }
  const e = [], s = c(this, tt, Lu).call(this);
  for (const i of t) {
    const [o, a] = i.text.split("#"), l = c(this, tt, Ff).call(this, a);
    e.push({
      url: c(this, tt, ku).call(this, o, s),
      startTime: i.startTime,
      endTime: i.endTime,
      width: l == null ? void 0 : l.w,
      height: l == null ? void 0 : l.h,
      coords: l && tn(l.x) && tn(l.y) ? { x: l.x, y: l.y } : void 0
    });
  }
  return e;
}, Lu = function() {
  let t = _(r(this, _6));
  return !ce(t) || !/^https?:/.test(t) ? location.href : t;
}, ku = function(t, e) {
  return /^https?:/.test(t) ? new URL(t) : new URL(t, e);
}, Ff = function(t) {
  if (!t) return {};
  const [e, s] = t.split("="), i = s == null ? void 0 : s.split(","), o = {};
  if (!e || !i)
    return null;
  for (let a = 0; a < e.length; a++) {
    const l = +i[a];
    isNaN(l) || (o[e[a]] = l);
  }
  return o;
}, qa = function(t, e) {
};
let $u = N7;
var F6, j6, Te, jf, Mu, qf, Zf, Bf, Gf, Iu, Wf, Uf, Vu, Ii, Kf;
class u2 extends Ce {
  constructor() {
    super(...arguments);
    C(this, Te);
    $(this, "media");
    C(this, F6);
    C(this, j6, []);
  }
  onSetup() {
    this.media = je(), g(this, F6, $u.create(this.$props.src, this.$state.crossOrigin)), c(this, Te, Mu).call(this), this.setAttributes({
      "data-loading": c(this, Te, Gf).bind(this),
      "data-error": c(this, Te, Iu).bind(this),
      "data-hidden": this.$state.hidden,
      "aria-hidden": Rt(this.$state.hidden)
    });
  }
  onConnect(e) {
    T(c(this, Te, jf).bind(this)), T(c(this, Te, Wf).bind(this)), T(c(this, Te, Mu).bind(this)), T(c(this, Te, qf).bind(this)), T(c(this, Te, Uf).bind(this)), T(c(this, Te, Vu).bind(this));
  }
  getTime() {
    return this.$props.time();
  }
}
F6 = new WeakMap(), j6 = new WeakMap(), Te = new WeakSet(), jf = function() {
  const e = this.$state.img();
  e && new Ne(e).add("load", c(this, Te, Zf).bind(this)).add("error", c(this, Te, Bf).bind(this));
}, Mu = function() {
  const { crossOrigin: e } = this.$props, { crossOrigin: s } = this.$state, { crossOrigin: i } = this.media.$state, o = e() !== null ? e() : i();
  s.set(o === !0 ? "anonymous" : o);
}, qf = function() {
  const { src: e, loading: s, error: i } = this.$state;
  return e() && (s.set(!0), i.set(null)), () => {
    c(this, Te, Kf).call(this), s.set(!1), i.set(null);
  };
}, Zf = function() {
  const { loading: e, error: s } = this.$state;
  c(this, Te, Vu).call(this), e.set(!1), s.set(null);
}, Bf = function(e) {
  const { loading: s, error: i } = this.$state;
  s.set(!1), i.set(e);
}, Gf = function() {
  const { loading: e, hidden: s } = this.$state;
  return !s() && e();
}, Iu = function() {
  const { error: e } = this.$state;
  return !es(e());
}, Wf = function() {
  const { hidden: e } = this.$state, { duration: s } = this.media.$state, i = r(this, F6).$images();
  e.set(c(this, Te, Iu).call(this) || !Number.isFinite(s()) || i.length === 0);
}, Uf = function() {
  let e = r(this, F6).$images();
  if (!e.length) return;
  let s = this.getTime(), { src: i, activeThumbnail: o } = this.$state, a = -1, l = null;
  for (let d = e.length - 1; d >= 0; d--) {
    const h = e[d];
    if (s >= h.startTime && (!h.endTime || s < h.endTime)) {
      a = d;
      break;
    }
  }
  e[a] && (l = e[a]), o.set(l), i.set((l == null ? void 0 : l.url.href) || "");
}, Vu = function() {
  if (!this.scope || this.$state.hidden()) return;
  const e = this.el, s = this.$state.img(), i = this.$state.activeThumbnail();
  if (!s || !i || !e) return;
  let o = i.width ?? s.naturalWidth, a = (i == null ? void 0 : i.height) ?? s.naturalHeight, {
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
  c(this, Te, Ii).call(this, e, "--thumbnail-width", `${o * b}px`), c(this, Te, Ii).call(this, e, "--thumbnail-height", `${a * b}px`), c(this, Te, Ii).call(this, e, "--thumbnail-aspect-ratio", String(At(o / a, 5))), c(this, Te, Ii).call(this, s, "width", `${s.naturalWidth * b}px`), c(this, Te, Ii).call(this, s, "height", `${s.naturalHeight * b}px`), c(this, Te, Ii).call(this, s, "transform", i.coords ? `translate(-${i.coords.x * b}px, -${i.coords.y * b}px)` : ""), c(this, Te, Ii).call(this, s, "max-width", "none");
}, Ii = function(e, s, i) {
  e.style.setProperty(s, i), r(this, j6).push(() => e.style.removeProperty(s));
}, Kf = function() {
  for (const e of r(this, j6)) e();
  g(this, j6, []);
}, $(u2, "props", {
  src: null,
  time: 0,
  crossOrigin: null
}), $(u2, "state", new Pi({
  src: "",
  img: null,
  thumbnails: [],
  activeThumbnail: null,
  crossOrigin: null,
  loading: !1,
  error: null,
  hidden: !1
}));
var N3;
class XS extends u2 {
  constructor() {
    super(...arguments);
    C(this, N3);
  }
  onAttach(e) {
    g(this, N3, po(ia.state));
  }
  getTime() {
    const { duration: e, clipStartTime: s } = this.media.$state;
    return s() + r(this, N3).pointerRate() * e();
  }
}
N3 = new WeakMap();
var ir, H3, Je, zf, Yf, Au, Qf, Ru, Xf, Jf, Nu, ep, tp;
class d2 extends Ce {
  constructor() {
    super(...arguments);
    C(this, Je);
    C(this, ir);
    C(this, H3);
  }
  get video() {
    return this.$state.video();
  }
  onSetup() {
    g(this, ir, je()), g(this, H3, po(ia.state)), c(this, Je, Au).call(this), this.setAttributes({
      "data-loading": c(this, Je, Qf).bind(this),
      "data-hidden": this.$state.hidden,
      "data-error": c(this, Je, Ru).bind(this),
      "aria-hidden": Rt(this.$state.hidden)
    });
  }
  onAttach(e) {
    T(c(this, Je, zf).bind(this)), T(c(this, Je, Yf).bind(this)), T(c(this, Je, Au).bind(this)), T(c(this, Je, Xf).bind(this)), T(c(this, Je, Jf).bind(this)), T(c(this, Je, tp).bind(this));
  }
}
ir = new WeakMap(), H3 = new WeakMap(), Je = new WeakSet(), zf = function() {
  const e = this.$state.video();
  e && (e.readyState >= 2 && c(this, Je, Nu).call(this), new Ne(e).add("canplay", c(this, Je, Nu).bind(this)).add("error", c(this, Je, ep).bind(this)));
}, Yf = function() {
  const { src: e } = this.$state, { canLoad: s } = r(this, ir).$state;
  e.set(s() ? this.$props.src() : null);
}, Au = function() {
  const { crossOrigin: e } = this.$props, { crossOrigin: s } = this.$state, { crossOrigin: i } = r(this, ir).$state, o = e() !== null ? e() : i();
  s.set(o === !0 ? "anonymous" : o);
}, Qf = function() {
  const { canPlay: e, hidden: s } = this.$state;
  return !e() && !s();
}, Ru = function() {
  const { error: e } = this.$state;
  return !es(e);
}, Xf = function() {
  const { src: e, hidden: s } = this.$state, { canLoad: i, duration: o } = r(this, ir).$state;
  s.set(i() && (!e() || c(this, Je, Ru).call(this) || !Number.isFinite(o())));
}, Jf = function() {
  const { src: e, canPlay: s, error: i } = this.$state;
  e(), s.set(!1), i.set(null);
}, Nu = function(e) {
  const { canPlay: s, error: i } = this.$state;
  s.set(!0), i.set(null), this.dispatch("can-play", { trigger: e });
}, ep = function(e) {
  const { canPlay: s, error: i } = this.$state;
  s.set(!1), i.set(e), this.dispatch("error", { trigger: e });
}, tp = function() {
  const { video: e, canPlay: s } = this.$state, { duration: i } = r(this, ir).$state, { pointerRate: o } = r(this, H3), a = e();
  s() && a && Number.isFinite(i()) && Number.isFinite(o()) && (a.currentTime = o() * i());
}, $(d2, "props", {
  src: null,
  crossOrigin: null
}), $(d2, "state", new Pi({
  video: null,
  src: null,
  crossOrigin: null,
  canPlay: !1,
  error: null,
  hidden: !1
}));
const JS = d2.prototype;
Re(JS, "video");
var rr, M2, O3;
class h7 extends Ce {
  constructor() {
    super(...arguments);
    C(this, rr);
    C(this, M2);
    C(this, O3);
  }
  onSetup() {
    g(this, O3, po(ia.state)), g(this, rr, rt(co)), g(this, M2, vr(this.getValueText.bind(this)));
  }
  /**
   * Returns the current value formatted as text based on prop settings.
   */
  getValueText() {
    var b, S;
    const {
      type: e,
      format: s,
      decimalPlaces: i,
      padHours: o,
      padMinutes: a,
      showHours: l,
      showMs: d
    } = this.$props, { value: h, pointerValue: p, min: f, max: m } = r(this, O3), y = (s == null ? void 0 : s()) ?? r(this, rr).default, v = e() === "current" ? h() : p();
    if (y === "percent") {
      const E = m() - f(), P = v / E * 100;
      return (r(this, rr).percent ?? At)(P, i()) + "%";
    } else return y === "time" ? (r(this, rr).time ?? G2)(v, {
      padHrs: o(),
      padMins: a(),
      showHrs: l(),
      showMs: d()
    }) : (((S = (b = r(this, rr)).value) == null ? void 0 : S.call(b, v)) ?? v.toFixed(2)) + "";
  }
}
rr = new WeakMap(), M2 = new WeakMap(), O3 = new WeakMap(), $(h7, "props", {
  type: "pointer",
  format: null,
  showHours: !1,
  showMs: !1,
  padHours: null,
  padMinutes: null,
  decimalPlaces: 2
});
const eE = h7.prototype;
mt(eE, "getValueText");
var q6, D3;
class np extends Ce {
  constructor() {
    super(...arguments);
    C(this, q6);
    C(this, D3, N1(() => {
      const { disabled: e, orientation: s } = r(this, q6);
      if (e()) return;
      const i = this.el, { offset: o, noClamp: a } = this.$props;
      i && sp(i, {
        clamp: !a(),
        offset: o(),
        orientation: s()
      });
    }));
  }
  onSetup() {
    g(this, q6, rt(d7));
    const { active: e } = po(ia.state);
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
    const { preview: s } = r(this, q6);
    s.set(e), pe(() => s.set(null)), T(r(this, D3).bind(this));
    const i = new ResizeObserver(r(this, D3).bind(this));
    i.observe(e), pe(() => i.disconnect());
  }
}
q6 = new WeakMap(), D3 = new WeakMap(), $(np, "props", {
  offset: 0,
  noClamp: !1
});
function sp(n, {
  clamp: t,
  offset: e,
  orientation: s
}) {
  const i = getComputedStyle(n), o = parseFloat(i.width), a = parseFloat(i.height), l = {
    top: null,
    right: null,
    bottom: null,
    left: null
  };
  if (l[s === "horizontal" ? "bottom" : "left"] = `calc(100% + var(--media-slider-preview-offset, ${e}px))`, s === "horizontal") {
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
  Object.assign(n.style, l);
}
var kn, $t, ip, rp, op, ap, cp, _3, lp, up, dp;
class Hu extends Ce {
  constructor() {
    super(...arguments);
    C(this, $t);
    C(this, kn);
    C(this, _3, kr(c(this, $t, lp).bind(this), 25));
  }
  onSetup() {
    g(this, kn, je());
    const { audioGain: e } = r(this, kn).$state;
    vn(co, {
      default: "percent",
      value(s) {
        return (s * (e() ?? 1)).toFixed(2);
      },
      percent(s) {
        return Math.round(s * (e() ?? 1));
      }
    }), new bn({
      getStep: this.$props.step,
      getKeyStep: this.$props.keyStep,
      roundValue: Math.round,
      isDisabled: c(this, $t, ap).bind(this),
      aria: {
        valueMax: c(this, $t, op).bind(this),
        valueNow: c(this, $t, ip).bind(this),
        valueText: c(this, $t, rp).bind(this)
      },
      onDragValueChange: c(this, $t, dp).bind(this),
      onValueChange: c(this, $t, up).bind(this)
    }).attach(this), T(c(this, $t, cp).bind(this));
  }
  onAttach(e) {
    e.setAttribute("data-media-volume-slider", ""), He(e, "aria-label", "Volume");
    const { canSetVolume: s } = r(this, kn).$state;
    this.setAttributes({
      "data-supported": s,
      "aria-hidden": Rt(() => !s())
    });
  }
}
kn = new WeakMap(), $t = new WeakSet(), ip = function() {
  const { value: e } = this.$state, { audioGain: s } = r(this, kn).$state;
  return Math.round(e() * (s() ?? 1));
}, rp = function() {
  const { value: e, max: s } = this.$state, { audioGain: i } = r(this, kn).$state;
  return At(e() / s() * (i() ?? 1) * 100, 2) + "%";
}, op = function() {
  const { audioGain: e } = r(this, kn).$state;
  return this.$state.max() * (e() ?? 1);
}, ap = function() {
  const { disabled: e } = this.$props, { canSetVolume: s } = r(this, kn).$state;
  return e() || !s();
}, cp = function() {
  const { muted: e, volume: s } = r(this, kn).$state, i = e() ? 0 : s() * 100;
  this.$state.value.set(i), this.dispatch("value-change", { detail: i });
}, _3 = new WeakMap(), lp = function(e) {
  if (!e.trigger) return;
  const s = At(e.detail / 100, 3);
  r(this, kn).remote.changeVolume(s, e);
}, up = function(e) {
  r(this, _3).call(this, e);
}, dp = function(e) {
  r(this, _3).call(this, e);
}, $(Hu, "props", {
  ...bn.props,
  keyStep: 5,
  shiftKeyMultiplier: 2
}), $(Hu, "state", O1);
var or, wt, hp, fp, pp, Cp, mp, Du, gp, yp;
class Ou extends Ce {
  constructor() {
    super(...arguments);
    C(this, wt);
    C(this, or);
  }
  onSetup() {
    g(this, or, je()), vn(co, {
      default: "percent",
      percent: (e, s) => At(this.$state.value(), s) + "%"
    }), new bn({
      getStep: this.$props.step,
      getKeyStep: this.$props.keyStep,
      roundValue: Math.round,
      isDisabled: c(this, wt, mp).bind(this),
      aria: {
        valueNow: c(this, wt, hp).bind(this),
        valueText: c(this, wt, fp).bind(this)
      },
      onDragValueChange: c(this, wt, yp).bind(this),
      onValueChange: c(this, wt, gp).bind(this)
    }).attach(this), T(c(this, wt, pp).bind(this)), T(c(this, wt, Cp).bind(this));
  }
  onAttach(e) {
    e.setAttribute("data-media-audio-gain-slider", ""), He(e, "aria-label", "Audio Boost");
    const { canSetAudioGain: s } = r(this, or).$state;
    this.setAttributes({
      "data-supported": s,
      "aria-hidden": Rt(() => !s())
    });
  }
}
or = new WeakMap(), wt = new WeakSet(), hp = function() {
  const { value: e } = this.$state;
  return Math.round(e());
}, fp = function() {
  const { value: e } = this.$state;
  return e() + "%";
}, pp = function() {
  const { min: e, max: s } = this.$props;
  this.$state.min.set(e()), this.$state.max.set(s());
}, Cp = function() {
  const { audioGain: e } = r(this, or).$state, s = ((e() ?? 1) - 1) * 100;
  this.$state.value.set(s), this.dispatch("value-change", { detail: s });
}, mp = function() {
  const { disabled: e } = this.$props, { canSetAudioGain: s } = r(this, or).$state;
  return e() || !s();
}, Du = function(e) {
  if (!e.trigger) return;
  const s = At(1 + e.detail / 100, 2);
  r(this, or).remote.changeAudioGain(s, e);
}, gp = function(e) {
  c(this, wt, Du).call(this, e);
}, yp = function(e) {
  c(this, wt, Du).call(this, e);
}, $(Ou, "props", {
  ...bn.props,
  step: 25,
  keyStep: 25,
  shiftKeyMultiplier: 2,
  min: 0,
  max: 300
}), $(Ou, "state", O1);
var ar, pt, vp, bp, wp, xp, Sp, Ep, F3, $p, Tp, Pp;
class _u extends Ce {
  constructor() {
    super(...arguments);
    C(this, pt);
    C(this, ar);
    C(this, F3, kr(c(this, pt, $p).bind(this), 25));
  }
  onSetup() {
    g(this, ar, je()), new bn({
      getStep: this.$props.step,
      getKeyStep: this.$props.keyStep,
      roundValue: c(this, pt, Sp),
      isDisabled: c(this, pt, Ep).bind(this),
      aria: {
        valueNow: c(this, pt, vp).bind(this),
        valueText: c(this, pt, bp).bind(this)
      },
      onDragValueChange: c(this, pt, Pp).bind(this),
      onValueChange: c(this, pt, Tp).bind(this)
    }).attach(this), T(c(this, pt, wp).bind(this)), T(c(this, pt, xp).bind(this));
  }
  onAttach(e) {
    e.setAttribute("data-media-speed-slider", ""), He(e, "aria-label", "Speed");
    const { canSetPlaybackRate: s } = r(this, ar).$state;
    this.setAttributes({
      "data-supported": s,
      "aria-hidden": Rt(() => !s())
    });
  }
}
ar = new WeakMap(), pt = new WeakSet(), vp = function() {
  const { value: e } = this.$state;
  return e();
}, bp = function() {
  const { value: e } = this.$state;
  return e() + "x";
}, wp = function() {
  const { min: e, max: s } = this.$props;
  this.$state.min.set(e()), this.$state.max.set(s());
}, xp = function() {
  const { playbackRate: e } = r(this, ar).$state, s = e();
  this.$state.value.set(s), this.dispatch("value-change", { detail: s });
}, Sp = function(e) {
  return At(e, 2);
}, Ep = function() {
  const { disabled: e } = this.$props, { canSetPlaybackRate: s } = r(this, ar).$state;
  return e() || !s();
}, F3 = new WeakMap(), $p = function(e) {
  if (!e.trigger) return;
  const s = e.detail;
  r(this, ar).remote.changePlaybackRate(s, e);
}, Tp = function(e) {
  r(this, F3).call(this, e);
}, Pp = function(e) {
  r(this, F3).call(this, e);
}, $(_u, "props", {
  ...bn.props,
  step: 0.25,
  keyStep: 0.25,
  shiftKeyMultiplier: 2,
  min: 0,
  max: 2
}), $(_u, "state", O1);
var zn, Z6, Tt, Lp, kp, Mp, Ip, Vp, j3, Ap, Rp, Np;
class Fu extends Ce {
  constructor() {
    super(...arguments);
    C(this, Tt);
    C(this, zn);
    C(this, Z6, vr(() => {
      const { qualities: e } = r(this, zn).$state;
      return Sx(e());
    }));
    C(this, j3, kr(c(this, Tt, Ap).bind(this), 25));
  }
  onSetup() {
    g(this, zn, je()), new bn({
      getStep: this.$props.step,
      getKeyStep: this.$props.keyStep,
      roundValue: Math.round,
      isDisabled: c(this, Tt, Vp).bind(this),
      aria: {
        valueNow: c(this, Tt, Lp).bind(this),
        valueText: c(this, Tt, kp).bind(this)
      },
      onDragValueChange: c(this, Tt, Np).bind(this),
      onValueChange: c(this, Tt, Rp).bind(this)
    }).attach(this), T(c(this, Tt, Mp).bind(this)), T(c(this, Tt, Ip).bind(this));
  }
  onAttach(e) {
    e.setAttribute("data-media-quality-slider", ""), He(e, "aria-label", "Video Quality");
    const { qualities: s, canSetQuality: i } = r(this, zn).$state, o = vr(() => i() && s().length > 0);
    this.setAttributes({
      "data-supported": o,
      "aria-hidden": Rt(() => !o())
    });
  }
}
zn = new WeakMap(), Z6 = new WeakMap(), Tt = new WeakSet(), Lp = function() {
  const { value: e } = this.$state;
  return e();
}, kp = function() {
  const { quality: e } = r(this, zn).$state;
  if (!e()) return "";
  const { height: s, bitrate: i } = e(), o = i && i > 0 ? `${(i / 1e6).toFixed(2)} Mbps` : null;
  return s ? `${s}p${o ? ` (${o})` : ""}` : "Auto";
}, Mp = function() {
  const e = r(this, Z6).call(this);
  this.$state.max.set(Math.max(0, e.length - 1));
}, Ip = function() {
  let { quality: e } = r(this, zn).$state, s = r(this, Z6).call(this), i = Math.max(0, s.indexOf(e()));
  this.$state.value.set(i), this.dispatch("value-change", { detail: i });
}, Vp = function() {
  const { disabled: e } = this.$props, { canSetQuality: s, qualities: i } = r(this, zn).$state;
  return e() || i().length <= 1 || !s();
}, j3 = new WeakMap(), Ap = function(e) {
  if (!e.trigger) return;
  const { qualities: s } = r(this, zn), i = _(r(this, Z6))[e.detail];
  r(this, zn).remote.changeQuality(s.indexOf(i), e);
}, Rp = function(e) {
  r(this, j3).call(this, e);
}, Np = function(e) {
  r(this, j3).call(this, e);
}, $(Fu, "props", {
  ...bn.props,
  step: 1,
  keyStep: 1,
  shiftKeyMultiplier: 1
}), $(Fu, "state", O1);
var Qe, B6, q3, ee, Hp, Op, Dp, _p, Fp, ju, jp, G6, qp, Zp, qu, Bp, Zu, Gp, Wp, Up, Kp, zp, Yp, Nr, Qp, Xp, Jp;
class h2 extends Ce {
  constructor() {
    super();
    C(this, ee);
    C(this, Qe);
    C(this, B6);
    C(this, q3, re(null));
    C(this, G6, !1);
    const { noSwipeGesture: e } = this.$props;
    new bn({
      swipeGesture: () => !e(),
      getValue: c(this, ee, Zu).bind(this),
      getStep: c(this, ee, Gp).bind(this),
      getKeyStep: c(this, ee, Wp).bind(this),
      roundValue: c(this, ee, Up),
      isDisabled: c(this, ee, Kp).bind(this),
      aria: {
        valueNow: c(this, ee, zp).bind(this),
        valueText: c(this, ee, Yp).bind(this)
      },
      onDragStart: c(this, ee, qp).bind(this),
      onDragValueChange: c(this, ee, Zp).bind(this),
      onDragEnd: c(this, ee, qu).bind(this),
      onValueChange: c(this, ee, Bp).bind(this)
    });
  }
  onSetup() {
    g(this, Qe, je()), vn(co, {
      default: "time",
      value: c(this, ee, Xp).bind(this),
      time: c(this, ee, Jp).bind(this)
    }), this.setAttributes({
      "data-chapters": c(this, ee, Op).bind(this)
    }), this.setStyles({
      "--slider-progress": c(this, ee, Hp).bind(this)
    }), T(c(this, ee, _p).bind(this)), T(c(this, ee, Dp).bind(this));
  }
  onAttach(e) {
    e.setAttribute("data-media-time-slider", ""), He(e, "aria-label", "Seek");
  }
  onConnect(e) {
    T(c(this, ee, Fp).bind(this)), r7(r(this, Qe).textTracks, "chapters", r(this, q3).set);
  }
}
Qe = new WeakMap(), B6 = new WeakMap(), q3 = new WeakMap(), ee = new WeakSet(), Hp = function() {
  const { bufferedEnd: e, duration: s } = r(this, Qe).$state;
  return At(Math.min(e() / Math.max(s(), 1), 1) * 100, 3) + "%";
}, Op = function() {
  var s;
  const { duration: e } = r(this, Qe).$state;
  return ((s = r(this, q3).call(this)) == null ? void 0 : s.cues.length) && Number.isFinite(e()) && e() > 0;
}, Dp = function() {
  g(this, B6, kr(
    c(this, ee, ju).bind(this),
    this.$props.seekingRequestThrottle()
  ));
}, _p = function() {
  if (this.$state.hidden()) return;
  const { value: e, dragging: s } = this.$state, i = c(this, ee, Zu).call(this);
  _(s) || (e.set(i), this.dispatch("value-change", { detail: i }));
}, Fp = function() {
  const e = r(this, Qe).player.el, { preview: s } = rt(d7);
  e && s() && ie(e, "data-preview", this.$state.active());
}, ju = function(e, s) {
  r(this, Qe).remote.seeking(e, s);
}, jp = function(e, s, i) {
  r(this, B6).cancel();
  const { live: o } = r(this, Qe).$state;
  if (o() && s >= 99) {
    r(this, Qe).remote.seekToLiveEdge(i);
    return;
  }
  r(this, Qe).remote.seek(e, i);
}, G6 = new WeakMap(), qp = function(e) {
  const { pauseWhileDragging: s } = this.$props;
  if (s()) {
    const { paused: i } = r(this, Qe).$state;
    g(this, G6, !i()), r(this, Qe).remote.pause(e);
  }
}, Zp = function(e) {
  r(this, B6).call(this, c(this, ee, Nr).call(this, e.detail), e);
}, qu = function(e) {
  const { seeking: s } = r(this, Qe).$state;
  _(s) || c(this, ee, ju).call(this, c(this, ee, Nr).call(this, e.detail), e);
  const i = e.detail;
  c(this, ee, jp).call(this, c(this, ee, Nr).call(this, i), i, e);
  const { pauseWhileDragging: o } = this.$props;
  o() && r(this, G6) && (r(this, Qe).remote.play(e), g(this, G6, !1));
}, Bp = function(e) {
  const { dragging: s } = this.$state;
  s() || !e.trigger || c(this, ee, qu).call(this, e);
}, // -------------------------------------------------------------------------------------------
// Props
// -------------------------------------------------------------------------------------------
Zu = function() {
  const { currentTime: e } = r(this, Qe).$state;
  return c(this, ee, Qp).call(this, e());
}, Gp = function() {
  const e = this.$props.step() / r(this, Qe).$state.duration() * 100;
  return Number.isFinite(e) ? e : 1;
}, Wp = function() {
  const e = this.$props.keyStep() / r(this, Qe).$state.duration() * 100;
  return Number.isFinite(e) ? e : 1;
}, Up = function(e) {
  return At(e, 3);
}, Kp = function() {
  const { disabled: e } = this.$props, { canSeek: s } = r(this, Qe).$state;
  return e() || !s();
}, // -------------------------------------------------------------------------------------------
// ARIA
// -------------------------------------------------------------------------------------------
zp = function() {
  const { value: e } = this.$state;
  return Math.round(e());
}, Yp = function() {
  const e = c(this, ee, Nr).call(this, this.$state.value()), { duration: s } = r(this, Qe).$state;
  return Number.isFinite(e) ? `${Nl(e)} out of ${Nl(s())}` : "live";
}, // -------------------------------------------------------------------------------------------
// Format
// -------------------------------------------------------------------------------------------
Nr = function(e) {
  const { duration: s } = r(this, Qe).$state;
  return At(e / 100 * s(), 5);
}, Qp = function(e) {
  const { liveEdge: s, duration: i } = r(this, Qe).$state, o = Math.max(0, Math.min(1, s() ? 1 : Math.min(e, i()) / i()));
  return Number.isNaN(o) ? 0 : Number.isFinite(o) ? o * 100 : 100;
}, Xp = function(e) {
  const s = c(this, ee, Nr).call(this, e), { live: i, duration: o } = r(this, Qe).$state;
  return Number.isFinite(s) ? (i() ? s - o() : s).toFixed(0) : "LIVE";
}, Jp = function(e, s) {
  const i = c(this, ee, Nr).call(this, e), { live: o, duration: a } = r(this, Qe).$state, l = o() ? i - a() : i;
  return Number.isFinite(i) ? `${l < 0 ? "-" : ""}${G2(Math.abs(l), s)}` : "LIVE";
}, $(h2, "props", {
  ...bn.props,
  step: 0.1,
  keyStep: 5,
  shiftKeyMultiplier: 2,
  pauseWhileDragging: !1,
  noSwipeGesture: !1,
  seekingRequestThrottle: 100
}), $(h2, "state", O1);
var Qt, C1, W6, gs, qt, m1, Zt, hi, g1, cr, te, Bu, Gu, eC, tC, nC, sC, iC, Za, Wu, Uu, rC, I2, V2, oC, Ba, Ga, aC, cC, lC, uC, Z3, dC, hC, fC;
class f7 extends Ce {
  constructor() {
    super(...arguments);
    C(this, te);
    C(this, Qt);
    C(this, C1);
    C(this, W6);
    C(this, gs, null);
    C(this, qt, []);
    C(this, m1, re(null));
    C(this, Zt, re([]));
    C(this, hi, re(-1));
    C(this, g1, re(-1));
    C(this, cr, 0);
    C(this, I2, N1((e) => {
      var d;
      let s, i = r(this, Zt).call(this), { seekableStart: o } = r(this, Qt).$state, a = o(), l = c(this, te, Ba).call(this, i);
      for (let h = r(this, cr); h < r(this, qt).length; h++)
        if (s = c(this, te, Ga).call(this, i[h], e, a, l), (d = r(this, qt)[h]) == null || d.style.setProperty("--chapter-progress", s + "%"), s < 100) {
          g(this, cr, h);
          break;
        }
    }));
    C(this, V2, vr(c(this, te, oC).bind(this)));
    C(this, Z3, j2(
      () => {
        const e = _(r(this, m1));
        !this.scope || !e || !e.cues.length || (r(this, Zt).set(c(this, te, aC).call(this, e.cues)), r(this, hi).set(0), g(this, cr, 0));
      },
      150,
      !0
    ));
  }
  get cues() {
    return r(this, Zt).call(this);
  }
  get activeCue() {
    return r(this, Zt).call(this)[r(this, hi).call(this)] || null;
  }
  get activePointerCue() {
    return r(this, Zt).call(this)[r(this, g1).call(this)] || null;
  }
  onSetup() {
    g(this, Qt, je()), g(this, C1, po(h2.state));
  }
  onAttach(e) {
    r7(r(this, Qt).textTracks, "chapters", c(this, te, Bu).bind(this)), T(c(this, te, cC).bind(this));
  }
  onConnect() {
    pe(() => c(this, te, Gu).bind(this));
  }
  onDestroy() {
    c(this, te, Bu).call(this, null);
  }
  setRefs(e) {
    var s;
    if (g(this, qt, e), (s = r(this, W6)) == null || s.dispose(), r(this, qt).length === 1) {
      const i = r(this, qt)[0];
      i.style.width = "100%", i.style.setProperty("--chapter-fill", "var(--slider-fill)"), i.style.setProperty("--chapter-progress", "var(--slider-progress)");
    } else r(this, qt).length > 0 && Gt(() => c(this, te, eC).call(this), g(this, W6, oo()));
  }
}
Qt = new WeakMap(), C1 = new WeakMap(), W6 = new WeakMap(), gs = new WeakMap(), qt = new WeakMap(), m1 = new WeakMap(), Zt = new WeakMap(), hi = new WeakMap(), g1 = new WeakMap(), cr = new WeakMap(), te = new WeakSet(), Bu = function(e) {
  _(r(this, m1)) !== e && (c(this, te, Gu).call(this), r(this, m1).set(e));
}, Gu = function() {
  var e;
  g(this, qt, []), r(this, Zt).set([]), r(this, hi).set(-1), r(this, g1).set(-1), g(this, cr, 0), (e = r(this, W6)) == null || e.dispose();
}, eC = function() {
  r(this, qt).length && T(c(this, te, tC).bind(this));
}, tC = function() {
  const { hidden: e } = r(this, C1);
  e() || (T(c(this, te, nC).bind(this)), T(c(this, te, sC).bind(this)), T(c(this, te, iC).bind(this)), T(c(this, te, rC).bind(this)));
}, nC = function() {
  const e = r(this, Zt).call(this);
  if (!e.length) return;
  let s, { seekableStart: i, seekableEnd: o } = r(this, Qt).$state, a = i(), l = o() || e[e.length - 1].endTime, d = l - a, h = 100;
  for (let p = 0; p < e.length; p++)
    if (s = e[p], r(this, qt)[p]) {
      const f = p === e.length - 1 ? h : At((s.endTime - Math.max(a, s.startTime)) / d * 100, 3);
      r(this, qt)[p].style.width = f + "%", h -= f;
    }
}, sC = function() {
  let { liveEdge: e, seekableStart: s, seekableEnd: i } = r(this, Qt).$state, { fillPercent: o, value: a } = r(this, C1), l = r(this, Zt).call(this), d = e(), h = _(r(this, hi)), p = l[h], f = d ? r(this, Zt).length - 1 : c(this, te, Uu).call(this, p && p.startTime / i() * 100 <= _(a) ? h : 0, o());
  d || !p ? c(this, te, Za).call(this, 0, l.length, 100) : f > h ? c(this, te, Za).call(this, h, f, 100) : f < h && c(this, te, Za).call(this, f + 1, h + 1, 0);
  const m = d ? 100 : c(this, te, Ga).call(this, l[f], o(), s(), c(this, te, Ba).call(this, l));
  c(this, te, Wu).call(this, r(this, qt)[f], m), r(this, hi).set(f);
}, iC = function() {
  let { pointing: e, pointerPercent: s } = r(this, C1);
  if (!e()) {
    r(this, g1).set(-1);
    return;
  }
  const i = c(this, te, Uu).call(this, 0, s());
  r(this, g1).set(i);
}, Za = function(e, s, i) {
  for (let o = e; o < s; o++) c(this, te, Wu).call(this, r(this, qt)[o], i);
}, Wu = function(e, s) {
  e && (e.style.setProperty("--chapter-fill", s + "%"), ie(e, "data-active", s > 0 && s < 100), ie(e, "data-ended", s === 100));
}, Uu = function(e, s) {
  let i = 0, o = r(this, Zt).call(this);
  if (s === 0) return 0;
  if (s === 100) return o.length - 1;
  let { seekableStart: a } = r(this, Qt).$state, l = a(), d = c(this, te, Ba).call(this, o);
  for (let h = e; h < o.length; h++)
    if (i = c(this, te, Ga).call(this, o[h], s, l, d), i >= 0 && i < 100) return h;
  return 0;
}, rC = function() {
  r(this, I2).call(this, r(this, V2).call(this));
}, I2 = new WeakMap(), V2 = new WeakMap(), oC = function() {
  const { bufferedEnd: e, duration: s } = r(this, Qt).$state;
  return At(Math.min(e() / Math.max(s(), 1), 1), 3) * 100;
}, Ba = function(e) {
  var o;
  const { seekableEnd: s } = r(this, Qt).$state, i = s();
  return Number.isFinite(i) ? i : ((o = e[e.length - 1]) == null ? void 0 : o.endTime) || 0;
}, Ga = function(e, s, i, o) {
  if (!e || r(this, Zt).call(this).length === 0) return 0;
  const l = o - i, d = Math.max(0, e.startTime - i), h = Math.min(o, e.endTime) - i, p = d / l, f = p * 100, m = Math.min(1, p + (h - d) / l) * 100;
  return Math.max(
    0,
    At(
      s >= m ? 100 : (s - f) / (m - f) * 100,
      3
    )
  );
}, aC = function(e) {
  let s = [], { seekableStart: i, seekableEnd: o, duration: a } = r(this, Qt).$state, l = i(), d = o();
  e = e.filter((f) => f.startTime <= d && f.endTime >= l);
  const h = e[0];
  h && h.startTime > l && s.push(new window.VTTCue(l, h.startTime, ""));
  for (let f = 0; f < e.length - 1; f++) {
    const m = e[f], y = e[f + 1];
    if (s.push(m), y) {
      const v = y.startTime - m.endTime;
      v > 0 && s.push(new window.VTTCue(m.endTime, m.endTime + v, ""));
    }
  }
  const p = e[e.length - 1];
  if (p) {
    s.push(p);
    const f = a();
    f >= 0 && f - p.endTime > 1 && s.push(new window.VTTCue(p.endTime, a(), ""));
  }
  return s;
}, cC = function() {
  const { source: e } = r(this, Qt).$state;
  e(), c(this, te, lC).call(this);
}, lC = function() {
  if (!this.scope) return;
  const { disabled: e } = this.$props;
  if (e()) {
    r(this, Zt).set([]), r(this, hi).set(0), g(this, cr, 0);
    return;
  }
  const s = r(this, m1).call(this);
  if (s) {
    const i = r(this, Z3).bind(this);
    i(), new Ne(s).add("add-cue", i).add("remove-cue", i), T(c(this, te, uC).bind(this));
  }
  return g(this, gs, c(this, te, fC).call(this)), r(this, gs) && T(c(this, te, dC).bind(this)), () => {
    r(this, gs) && (r(this, gs).textContent = "", g(this, gs, null));
  };
}, uC = function() {
  r(this, Qt).$state.duration(), r(this, Z3).call(this);
}, Z3 = new WeakMap(), dC = function() {
  const e = this.activePointerCue || this.activeCue;
  r(this, gs) && (r(this, gs).textContent = (e == null ? void 0 : e.text) || "");
}, hC = function() {
  let e = this.el;
  for (; e && e.getAttribute("role") !== "slider"; )
    e = e.parentElement;
  return e;
}, fC = function() {
  const e = c(this, te, hC).call(this);
  return e ? e.querySelector('[data-part="chapter-title"]') : null;
}, $(f7, "props", {
  disabled: !1
});
const W2 = f7.prototype;
Re(W2, "cues");
Re(W2, "activeCue");
Re(W2, "activePointerCue");
mt(W2, "setRefs");
const ts = Ti();
function tE(n, t) {
  const e = H5(n, t);
  for (const { el: s, top: i, left: o } of e)
    s.scroll({ top: i, left: o, behavior: t.behavior });
}
function nE(n, t = {}) {
  tE(n, {
    scrollMode: "if-needed",
    block: "center",
    inline: "center",
    ...t
  });
}
const sE = /* @__PURE__ */ [
  "a[href]",
  "[tabindex]",
  "input",
  "select",
  "button"
].map((n) => `${n}:not([aria-hidden='true'])`).join(","), iE = /* @__PURE__ */ new Set([
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
var lr, Yn, Xt, B3, Ue, Hr, Ku, pC, zu, CC, mC, Wa, gC;
class rE {
  constructor(t) {
    C(this, Ue);
    C(this, lr, -1);
    C(this, Yn, null);
    C(this, Xt, []);
    C(this, B3);
    g(this, B3, t);
  }
  get items() {
    return r(this, Xt);
  }
  attachMenu(t) {
    Xe(t, "focus", c(this, Ue, pC).bind(this)), g(this, Yn, t), pe(() => {
      g(this, Yn, null);
    });
  }
  listen() {
    r(this, Yn) && (this.update(), new Ne(r(this, Yn)).add("keyup", c(this, Ue, CC).bind(this)).add("keydown", c(this, Ue, mC).bind(this)), pe(() => {
      g(this, lr, -1), g(this, Xt, []);
    }));
  }
  update() {
    g(this, lr, 0), g(this, Xt, c(this, Ue, gC).call(this));
  }
  scroll(t = c(this, Ue, Ku).call(this)) {
    const e = r(this, Xt)[t];
    e && requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        nE(e, {
          behavior: "smooth",
          boundary: (s) => !s.hasAttribute("data-root")
        });
      });
    });
  }
  focusActive(t = !0) {
    const e = c(this, Ue, Ku).call(this);
    c(this, Ue, Hr).call(this, e >= 0 ? e : 0, t);
  }
}
lr = new WeakMap(), Yn = new WeakMap(), Xt = new WeakMap(), B3 = new WeakMap(), Ue = new WeakSet(), Hr = function(t, e = !0) {
  var s;
  g(this, lr, t), r(this, Xt)[t] ? (r(this, Xt)[t].focus({ preventScroll: !0 }), e && this.scroll(t)) : (s = r(this, Yn)) == null || s.focus({ preventScroll: !0 });
}, Ku = function() {
  return r(this, Xt).findIndex(
    (t) => document.activeElement === t || t.getAttribute("role") === "menuitemradio" && t.getAttribute("aria-checked") === "true"
  );
}, pC = function() {
  r(this, lr) >= 0 || (this.update(), this.focusActive());
}, zu = function(t) {
  const e = t.target;
  if (x5(t) && e instanceof Element) {
    const s = e.getAttribute("role");
    return !/a|input|select|button/.test(e.localName) && !s;
  }
  return iE.has(t.key);
}, CC = function(t) {
  c(this, Ue, zu).call(this, t) && (t.stopPropagation(), t.preventDefault());
}, mC = function(t) {
  if (c(this, Ue, zu).call(this, t))
    switch (t.stopPropagation(), t.preventDefault(), t.key) {
      case "Escape":
        r(this, B3).closeMenu(t);
        break;
      case "Tab":
        c(this, Ue, Hr).call(this, c(this, Ue, Wa).call(this, t.shiftKey ? -1 : 1));
        break;
      case "ArrowUp":
        c(this, Ue, Hr).call(this, c(this, Ue, Wa).call(this, -1));
        break;
      case "ArrowDown":
        c(this, Ue, Hr).call(this, c(this, Ue, Wa).call(this, 1));
        break;
      case "Home":
      case "PageUp":
        c(this, Ue, Hr).call(this, 0);
        break;
      case "End":
      case "PageDown":
        c(this, Ue, Hr).call(this, r(this, Xt).length - 1);
        break;
    }
}, Wa = function(t) {
  var s;
  let e = r(this, lr);
  do
    e = (e + t + r(this, Xt).length) % r(this, Xt).length;
  while (((s = r(this, Xt)[e]) == null ? void 0 : s.offsetParent) === null);
  return e;
}, gC = function() {
  if (!r(this, Yn)) return [];
  const t = r(this, Yn).querySelectorAll(sE), e = [], s = (i) => i.getAttribute("role") === "menu";
  for (const i of t)
    r2(i) && i.offsetParent !== null && // does not have display: none
    C4(r(this, Yn), i, s) && e.push(i);
  return e;
};
var oE = Object.defineProperty, aE = Object.getOwnPropertyDescriptor, ra = (n, t, e, s) => {
  for (var i = aE(t, e), o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (i = a(t, e, i) || i);
  return i && oE(t, e, i), i;
};
let cE = 0;
var Yc, Qn, U6, K6, Bt, G3, ys, Et, ur, dr, y1, v1, fi, b1, W3, w1, oe, yC, vC, bC, wC, xC, Yu, SC, z6, EC, Qu, $C, Do, TC, PC, LC, kC, MC, IC, A2, VC, Y6, R2, AC, N2, RC, Q6, X6, NC;
let bo = (Yc = class extends Ce {
  constructor() {
    super();
    C(this, oe);
    C(this, Qn);
    C(this, U6);
    C(this, K6);
    C(this, Bt, re(!1));
    C(this, G3, re(!1));
    C(this, ys, re(null));
    C(this, Et, re(null));
    C(this, ur);
    C(this, dr, /* @__PURE__ */ new Set());
    C(this, y1, null);
    C(this, v1);
    C(this, fi);
    C(this, b1, !1);
    C(this, W3, re(!1));
    C(this, w1, /* @__PURE__ */ new Set());
    C(this, z6, !1);
    C(this, A2, c(this, oe, VC).bind(this));
    C(this, Y6, !1);
    C(this, R2, c(this, oe, AC).bind(this));
    C(this, N2, c(this, oe, RC).bind(this));
    C(this, Q6, N1(() => {
      const e = _(r(this, Et));
      if (!e || W) return;
      let s = 0, i = getComputedStyle(e), o = [...e.children];
      for (const a of ["paddingTop", "paddingBottom", "borderTopWidth", "borderBottomWidth"])
        s += parseFloat(i[a]) || 0;
      for (const a of o)
        if (r2(a) && a.style.display === "contents")
          o.push(...a.children);
        else if (a.nodeType === 3)
          s += parseFloat(getComputedStyle(a).fontSize);
        else if (r2(a)) {
          if (!f4(a)) continue;
          const l = getComputedStyle(a);
          s += a.offsetHeight + (parseFloat(l.marginTop) || 0) + (parseFloat(l.marginBottom) || 0);
        }
      Wt(e, "--menu-height", s + "px");
    }));
    C(this, X6, !1);
    const { showDelay: e } = this.$props;
    g(this, v1, new k8({
      trigger: r(this, ys),
      content: r(this, Et),
      showDelay: e,
      listen: (s, i, o) => {
        Sr(s, (l) => {
          r(this, Bt).call(this) ? o(l) : i(l);
        });
        const a = c(this, oe, kC).call(this);
        a && Sr(a, (l) => {
          l.stopPropagation(), o(l);
        });
      },
      onChange: c(this, oe, EC).bind(this)
    }));
  }
  get triggerElement() {
    return r(this, ys).call(this);
  }
  get contentElement() {
    return r(this, Et).call(this);
  }
  get isSubmenu() {
    return !!r(this, ur);
  }
  onSetup() {
    g(this, Qn, je());
    const e = ++cE;
    g(this, U6, `media-menu-${e}`), g(this, K6, `media-menu-button-${e}`), g(this, fi, new rE({
      closeMenu: this.close.bind(this)
    })), Ts(ts) && g(this, ur, rt(ts)), c(this, oe, yC).call(this), this.setAttributes({
      "data-open": r(this, Bt),
      "data-root": !this.isSubmenu,
      "data-submenu": this.isSubmenu,
      "data-disabled": c(this, oe, Do).bind(this)
    }), vn(ts, {
      button: r(this, ys),
      content: r(this, Et),
      expanded: r(this, Bt),
      hint: re(""),
      submenu: !!r(this, ur),
      disable: c(this, oe, TC).bind(this),
      attachMenuButton: c(this, oe, bC).bind(this),
      attachMenuItems: c(this, oe, wC).bind(this),
      attachObserver: c(this, oe, xC).bind(this),
      disableMenuButton: c(this, oe, SC).bind(this),
      addSubmenu: c(this, oe, IC).bind(this),
      onTransitionEvent: (s) => {
        r(this, w1).add(s), pe(() => {
          r(this, w1).delete(s);
        });
      }
    });
  }
  onAttach(e) {
    e.style.setProperty("display", "contents");
  }
  onConnect(e) {
    var s;
    T(c(this, oe, vC).bind(this)), this.isSubmenu && ((s = r(this, ur)) == null || s.addSubmenu(this));
  }
  onDestroy() {
    r(this, ys).set(null), r(this, Et).set(null), g(this, y1, null), r(this, w1).clear();
  }
  open(e) {
    _(r(this, Bt)) || (r(this, v1).show(e), Jn());
  }
  close(e) {
    _(r(this, Bt)) && (r(this, v1).hide(e), Jn());
  }
}, Qn = new WeakMap(), U6 = new WeakMap(), K6 = new WeakMap(), Bt = new WeakMap(), G3 = new WeakMap(), ys = new WeakMap(), Et = new WeakMap(), ur = new WeakMap(), dr = new WeakMap(), y1 = new WeakMap(), v1 = new WeakMap(), fi = new WeakMap(), b1 = new WeakMap(), W3 = new WeakMap(), w1 = new WeakMap(), oe = new WeakSet(), yC = function() {
  let e = -1, s = Ts(Bo) ? rt(Bo) : null;
  vn(Bo, {
    onDragStart: () => {
      var i;
      (i = s == null ? void 0 : s.onDragStart) == null || i.call(s), window.clearTimeout(e), e = -1, g(this, b1, !0);
    },
    onDragEnd: () => {
      var i;
      (i = s == null ? void 0 : s.onDragEnd) == null || i.call(s), e = window.setTimeout(() => {
        g(this, b1, !1), e = -1;
      }, 300);
    }
  });
}, vC = function() {
  const e = c(this, oe, $C).call(this);
  this.isSubmenu || r(this, Q6).call(this), c(this, oe, Yu).call(this, e), e && (T(() => {
    const { height: s } = r(this, Qn).$state, i = r(this, Et).call(this);
    i && Wt(i, "--player-height", s() + "px");
  }), r(this, fi).listen(), this.listen("pointerup", c(this, oe, PC).bind(this)), Xe(window, "pointerup", c(this, oe, LC).bind(this)));
}, bC = function(e) {
  const s = e.el, i = this.isSubmenu, o = Rt(c(this, oe, Do).bind(this));
  He(s, "tabindex", i ? "-1" : "0"), He(s, "role", i ? "menuitem" : "button"), ie(s, "id", r(this, K6)), ie(s, "aria-haspopup", "menu"), ie(s, "aria-expanded", "false"), ie(s, "data-root", !this.isSubmenu), ie(s, "data-submenu", this.isSubmenu);
  const a = () => {
    ie(s, "data-open", r(this, Bt).call(this)), ie(s, "aria-disabled", o());
  };
  W ? a() : T(a), r(this, ys).set(s), pe(() => {
    r(this, ys).set(null);
  });
}, wC = function(e) {
  var a;
  const s = e.el;
  s.style.setProperty("display", "none"), ie(s, "id", r(this, U6)), He(s, "role", "menu"), He(s, "tabindex", "-1"), ie(s, "data-root", !this.isSubmenu), ie(s, "data-submenu", this.isSubmenu), r(this, Et).set(s), pe(() => r(this, Et).set(null));
  const i = () => ie(s, "data-open", r(this, Bt).call(this));
  W ? i() : T(i), r(this, fi).attachMenu(s), c(this, oe, Yu).call(this, !1);
  const o = c(this, oe, NC).bind(this);
  this.isSubmenu ? (a = r(this, ur)) == null || a.onTransitionEvent(o) : (e.listen("transitionstart", o), e.listen("transitionend", o), e.listen("animationend", r(this, Q6)), e.listen("vds-menu-resize", r(this, Q6)));
}, xC = function(e) {
  g(this, y1, e);
}, Yu = function(e) {
  const s = _(r(this, Et));
  s && ie(s, "aria-hidden", Go(!e));
}, SC = function(e) {
  r(this, W3).set(e);
}, z6 = new WeakMap(), EC = function(e, s) {
  var a, l, d, h, p, f;
  if (g(this, z6, ta(s)), s == null || s.stopPropagation(), r(this, Bt).call(this) === e) return;
  if (c(this, oe, Do).call(this)) {
    e && r(this, v1).hide(s);
    return;
  }
  (a = this.el) == null || a.dispatchEvent(
    new Event("vds-menu-resize", {
      bubbles: !0,
      composed: !0
    })
  );
  const i = r(this, ys).call(this), o = r(this, Et).call(this);
  if (i && (ie(i, "aria-controls", e && r(this, U6)), ie(i, "aria-expanded", Go(e))), o && ie(o, "aria-labelledby", e && r(this, K6)), r(this, Bt).set(e), c(this, oe, MC).call(this, s), Jn(), r(this, z6)) {
    e ? o == null || o.focus() : i == null || i.focus();
    for (const m of [this.el, o])
      m && m.setAttribute("data-keyboard", "");
  } else
    for (const m of [this.el, o])
      m && m.removeAttribute("data-keyboard");
  if (this.dispatch(e ? "open" : "close", { trigger: s }), e)
    !this.isSubmenu && r(this, Qn).activeMenu !== this && ((l = r(this, Qn).activeMenu) == null || l.close(s), r(this, Qn).activeMenu = this), (h = (d = r(this, y1)) == null ? void 0 : d.onOpen) == null || h.call(d, s);
  else {
    if (this.isSubmenu)
      for (const m of r(this, dr)) m.close(s);
    else
      r(this, Qn).activeMenu = null;
    (f = (p = r(this, y1)) == null ? void 0 : p.onClose) == null || f.call(p, s);
  }
  e && requestAnimationFrame(c(this, oe, Qu).bind(this));
}, Qu = function() {
  r(this, X6) || r(this, Y6) || (r(this, fi).update(), requestAnimationFrame(() => {
    r(this, z6) ? r(this, fi).focusActive() : r(this, fi).scroll();
  }));
}, $C = function() {
  return !c(this, oe, Do).call(this) && r(this, Bt).call(this);
}, Do = function() {
  return r(this, G3).call(this) || r(this, W3).call(this);
}, TC = function(e) {
  r(this, G3).set(e);
}, PC = function(e) {
  const s = r(this, Et).call(this);
  r(this, b1) || s && gd(s, e) || e.stopPropagation();
}, LC = function(e) {
  const s = r(this, Et).call(this);
  r(this, b1) || s && gd(s, e) || this.close(e);
}, kC = function() {
  var s;
  const e = (s = this.el) == null ? void 0 : s.querySelector('[data-part="close-target"]');
  return this.el && e && C4(this.el, e, (i) => i.getAttribute("role") === "menu") ? e : null;
}, MC = function(e) {
  this.isSubmenu || (r(this, Bt).call(this) ? r(this, Qn).remote.pauseControls(e) : r(this, Qn).remote.resumeControls(e));
}, IC = function(e) {
  r(this, dr).add(e), new Ne(e).add("open", r(this, R2)).add("close", r(this, N2)), pe(r(this, A2));
}, A2 = new WeakMap(), VC = function(e) {
  r(this, dr).delete(e);
}, Y6 = new WeakMap(), R2 = new WeakMap(), AC = function(e) {
  var i;
  g(this, Y6, !0);
  const s = r(this, Et).call(this);
  this.isSubmenu && ((i = this.triggerElement) == null || i.setAttribute("aria-hidden", "true"));
  for (const o of r(this, dr))
    if (o !== e.target)
      for (const a of [o.el, o.triggerElement])
        a == null || a.setAttribute("aria-hidden", "true");
  if (s) {
    const o = e.target.el;
    for (const a of s.children)
      a.contains(o) ? a.setAttribute("data-open", "") : a !== o && a.setAttribute("data-hidden", "");
  }
}, N2 = new WeakMap(), RC = function(e) {
  var i;
  g(this, Y6, !1);
  const s = r(this, Et).call(this);
  this.isSubmenu && ((i = this.triggerElement) == null || i.setAttribute("aria-hidden", "false"));
  for (const o of r(this, dr))
    for (const a of [o.el, o.triggerElement])
      a == null || a.setAttribute("aria-hidden", "false");
  if (s)
    for (const o of s.children)
      o.removeAttribute("data-open"), o.removeAttribute("data-hidden");
}, Q6 = new WeakMap(), X6 = new WeakMap(), NC = function(e) {
  const s = r(this, Et).call(this);
  s && e.propertyName === "height" && (g(this, X6, e.type === "transitionstart"), ie(s, "data-transition", r(this, X6) ? "height" : null), r(this, Bt).call(this) && c(this, oe, Qu).call(this));
  for (const i of r(this, w1)) i(e);
}, $(Yc, "props", {
  showDelay: 0
}), Yc);
ra([
  Re
], bo.prototype, "triggerElement");
ra([
  Re
], bo.prototype, "contentElement");
ra([
  Re
], bo.prototype, "isSubmenu");
ra([
  mt
], bo.prototype, "open");
ra([
  mt
], bo.prototype, "close");
var hr, U3, $i, HC, OC, Xu;
class U2 extends Ce {
  constructor() {
    super();
    C(this, $i);
    C(this, hr);
    C(this, U3, re(null));
    new os();
  }
  get expanded() {
    var e;
    return ((e = r(this, hr)) == null ? void 0 : e.expanded()) ?? !1;
  }
  onSetup() {
    g(this, hr, rt(ts));
  }
  onAttach(e) {
    r(this, hr).attachMenuButton(this), T(c(this, $i, HC).bind(this)), He(e, "type", "button");
  }
  onConnect(e) {
    T(c(this, $i, OC).bind(this)), c(this, $i, Xu).call(this);
    const s = new MutationObserver(c(this, $i, Xu).bind(this));
    s.observe(e, { attributeFilter: ["data-part"], childList: !0, subtree: !0 }), pe(() => s.disconnect()), Sr(e, (i) => {
      this.dispatch("select", { trigger: i });
    });
  }
}
hr = new WeakMap(), U3 = new WeakMap(), $i = new WeakSet(), HC = function() {
  r(this, hr).disableMenuButton(this.$props.disabled());
}, OC = function() {
  const e = r(this, U3).call(this);
  e && T(() => {
    const s = r(this, hr).hint();
    s && (e.textContent = s);
  });
}, Xu = function() {
  var s;
  const e = (s = this.el) == null ? void 0 : s.querySelector('[data-part="hint"]');
  r(this, U3).set(e ?? null);
}, $(U2, "props", {
  disabled: !1
});
const lE = U2.prototype;
Re(lE, "expanded");
let uE = class extends U2 {
};
const $c = Ti();
var x1, Lr, _C, FC, jC;
class DC extends Ce {
  constructor() {
    super();
    C(this, Lr);
    C(this, x1);
    new os();
    const { placement: e } = this.$props;
    this.setAttributes({
      "data-placement": e
    });
  }
  onAttach(e) {
    if (g(this, x1, rt(ts)), r(this, x1).attachMenuItems(this), Ts($c)) {
      const s = rt($c);
      s && (vn($c, null), s.attach(e), pe(() => s.attach(null)));
    }
  }
  onConnect(e) {
    T(c(this, Lr, _C).bind(this));
  }
}
x1 = new WeakMap(), Lr = new WeakSet(), _C = function() {
  const { expanded: e } = r(this, x1);
  if (!this.el || !e()) return;
  const s = this.$props.placement();
  if (!s) return;
  Object.assign(this.el.style, {
    position: "absolute",
    top: 0,
    left: 0,
    width: "max-content"
  });
  const { offset: i, alignOffset: o } = this.$props;
  pe(
    g4(this.el, c(this, Lr, jC).call(this), s, {
      offsetVarName: "media-menu",
      xOffset: o(),
      yOffset: i()
    })
  ), pe(c(this, Lr, FC).bind(this));
}, FC = function() {
  this.el && (this.el.removeAttribute("style"), this.el.style.display = "none");
}, jC = function() {
  return r(this, x1).button();
}, $(DC, "props", {
  placement: null,
  offset: 0,
  alignOffset: 0
});
const Ju = Ti();
var pi, fr, V9, Nn, qC, ZC, H2, e9, t9;
class p7 extends Sn {
  constructor() {
    super(...arguments);
    C(this, Nn);
    C(this, pi, /* @__PURE__ */ new Set());
    C(this, fr, re(""));
    C(this, V9, null);
    $(this, "onValueChange");
    C(this, H2, c(this, Nn, e9).bind(this));
  }
  get values() {
    return Array.from(r(this, pi)).map((e) => e.value());
  }
  get value() {
    return r(this, fr).call(this);
  }
  set value(e) {
    c(this, Nn, e9).call(this, e);
  }
  onSetup() {
    vn(Ju, {
      add: c(this, Nn, qC).bind(this),
      remove: c(this, Nn, ZC).bind(this)
    });
  }
  onAttach(e) {
    Ts(ts) || He(e, "role", "radiogroup"), this.setAttributes({ value: r(this, fr) });
  }
  onDestroy() {
    r(this, pi).clear();
  }
}
pi = new WeakMap(), fr = new WeakMap(), V9 = new WeakMap(), Nn = new WeakSet(), qC = function(e) {
  r(this, pi).has(e) || (r(this, pi).add(e), e.onCheck = r(this, H2), e.check(e.value() === r(this, fr).call(this)));
}, ZC = function(e) {
  e.onCheck = null, r(this, pi).delete(e);
}, H2 = new WeakMap(), e9 = function(e, s) {
  var l;
  const i = _(r(this, fr));
  if (!e || e === i) return;
  const o = c(this, Nn, t9).call(this, i), a = c(this, Nn, t9).call(this, e);
  o == null || o.check(!1, s), a == null || a.check(!0, s), r(this, fr).set(e), (l = this.onValueChange) == null || l.call(this, e, s);
}, t9 = function(e) {
  for (const s of r(this, pi))
    if (e === _(s.value)) return s;
  return null;
};
var Qc, Ci, V1, n9, GC;
let BC = (Qc = class extends Ce {
  constructor() {
    super();
    C(this, V1);
    C(this, Ci);
    g(this, Ci, new p7()), r(this, Ci).onValueChange = c(this, V1, GC).bind(this);
  }
  /**
   * A list of radio values that belong this group.
   */
  get values() {
    return r(this, Ci).values;
  }
  /**
   * The radio value that is checked in this group.
   */
  get value() {
    return r(this, Ci).value;
  }
  set value(e) {
    r(this, Ci).value = e;
  }
  onSetup() {
    W ? c(this, V1, n9).call(this) : T(c(this, V1, n9).bind(this));
  }
}, Ci = new WeakMap(), V1 = new WeakSet(), n9 = function() {
  r(this, Ci).value = this.$props.value();
}, GC = function(e, s) {
  const i = this.createEvent("change", { detail: e, trigger: s });
  this.dispatch(i);
}, $(Qc, "props", {
  value: ""
}), Qc);
const WC = BC.prototype;
Re(WC, "values");
Re(WC, "value");
var vs, S1, Nt, UC, KC, zC, YC, QC, s9, XC;
class C7 extends Ce {
  constructor() {
    super();
    C(this, Nt);
    C(this, vs, re(!1));
    C(this, S1, {
      value: this.$props.value,
      check: c(this, Nt, QC).bind(this),
      onCheck: null
    });
    new os();
  }
  /**
   * Whether this radio is currently checked.
   */
  get checked() {
    return r(this, vs).call(this);
  }
  onSetup() {
    this.setAttributes({
      value: this.$props.value,
      "data-checked": r(this, vs),
      "aria-checked": Rt(r(this, vs))
    });
  }
  onAttach(e) {
    const s = Ts(ts);
    He(e, "tabindex", s ? "-1" : "0"), He(e, "role", s ? "menuitemradio" : "radio"), T(c(this, Nt, zC).bind(this));
  }
  onConnect(e) {
    c(this, Nt, KC).call(this), Sr(e, c(this, Nt, YC).bind(this)), pe(c(this, Nt, UC).bind(this));
  }
}
vs = new WeakMap(), S1 = new WeakMap(), Nt = new WeakSet(), UC = function() {
  Gt(() => {
    rt(Ju).remove(r(this, S1));
  }, this.connectScope);
}, KC = function() {
  rt(Ju).add(r(this, S1));
}, zC = function() {
  var i, o;
  const { value: e } = this.$props, s = e();
  _(r(this, vs)) && ((o = (i = r(this, S1)).onCheck) == null || o.call(i, s));
}, YC = function(e) {
  var s, i;
  _(r(this, vs)) || (c(this, Nt, s9).call(this, !0, e), c(this, Nt, XC).call(this, e), (i = (s = r(this, S1)).onCheck) == null || i.call(s, _(this.$props.value), e));
}, QC = function(e, s) {
  _(r(this, vs)) !== e && c(this, Nt, s9).call(this, e, s);
}, s9 = function(e, s) {
  r(this, vs).set(e), this.dispatch("change", { detail: e, trigger: s });
}, XC = function(e) {
  this.dispatch("select", { trigger: e });
}, $(C7, "props", {
  value: ""
});
const dE = C7.prototype;
Re(dE, "checked");
var Xc, dn, J6, Ut, JC, bs, K3, em, i9, tm, nm, sm;
let hE = (Xc = class extends Ce {
  constructor() {
    super(...arguments);
    C(this, Ut);
    C(this, dn);
    C(this, J6, null);
    C(this, bs, 0);
    C(this, K3, -1);
  }
  onSetup() {
    g(this, dn, je());
    const { event: e, action: s } = this.$props;
    this.setAttributes({
      event: e,
      action: s
    });
  }
  onAttach(e) {
    e.setAttribute("data-media-gesture", ""), e.style.setProperty("pointer-events", "none");
  }
  onConnect(e) {
    var s;
    g(this, J6, (s = r(this, dn).player.el) == null ? void 0 : s.querySelector(
      "[data-media-provider]"
    )), T(c(this, Ut, JC).bind(this));
  }
}, dn = new WeakMap(), J6 = new WeakMap(), Ut = new WeakSet(), JC = function() {
  let e = this.$props.event(), s = this.$props.disabled();
  !r(this, J6) || !e || s || (/^dbl/.test(e) && (e = e.split(/^dbl/)[1]), (e === "pointerup" || e === "pointerdown") && r(this, dn).$state.pointer() === "coarse" && (e = e === "pointerup" ? "touchend" : "touchstart"), Xe(
    r(this, J6),
    e,
    c(this, Ut, em).bind(this),
    { passive: !1 }
  ));
}, bs = new WeakMap(), K3 = new WeakMap(), em = function(e) {
  if (this.$props.disabled() || nl(e) && (e.button !== 0 || r(this, dn).activeMenu) || jo(e) && r(this, dn).activeMenu || c7(e) || !c(this, Ut, tm).call(this, e))
    return;
  e.MEDIA_GESTURE = !0, e.preventDefault();
  const s = _(this.$props.event);
  if (!(s == null ? void 0 : s.startsWith("dbl")))
    r(this, bs) === 0 && setTimeout(() => {
      r(this, bs) === 1 && c(this, Ut, i9).call(this, e);
    }, 250);
  else if (r(this, bs) === 1) {
    queueMicrotask(() => c(this, Ut, i9).call(this, e)), clearTimeout(r(this, K3)), g(this, bs, 0);
    return;
  }
  r(this, bs) === 0 && g(this, K3, window.setTimeout(() => {
    g(this, bs, 0);
  }, 275)), K7(this, bs)._++;
}, i9 = function(e) {
  this.el.setAttribute("data-triggered", ""), requestAnimationFrame(() => {
    c(this, Ut, nm).call(this) && c(this, Ut, sm).call(this, _(this.$props.action), e), requestAnimationFrame(() => {
      this.el.removeAttribute("data-triggered");
    });
  });
}, /** Validate event occurred in gesture bounds. */
tm = function(e) {
  if (!this.el) return !1;
  if (nl(e) || w5(e) || jo(e)) {
    const s = jo(e) ? e.changedTouches[0] ?? e.touches[0] : void 0, i = (s == null ? void 0 : s.clientX) ?? e.clientX, o = (s == null ? void 0 : s.clientY) ?? e.clientY, a = this.el.getBoundingClientRect(), l = o >= a.top && o <= a.bottom && i >= a.left && i <= a.right;
    return e.type.includes("leave") ? !l : l;
  }
  return !0;
}, /** Validate gesture has the highest z-index in this triggered group. */
nm = function() {
  const e = r(this, dn).player.el.querySelectorAll(
    "[data-media-gesture][data-triggered]"
  );
  return Array.from(e).sort(
    (s, i) => +getComputedStyle(i).zIndex - +getComputedStyle(s).zIndex
  )[0] === this.el;
}, sm = function(e, s) {
  if (!e) return;
  const i = new $e("will-trigger", {
    detail: e,
    cancelable: !0,
    trigger: s
  });
  if (this.dispatchEvent(i), i.defaultPrevented) return;
  const [o, a] = e.replace(/:([a-z])/, "-$1").split(":");
  e.includes(":fullscreen") ? r(this, dn).remote.toggleFullscreen("prefer-media", s) : e.includes("seek:") ? r(this, dn).remote.seek(_(r(this, dn).$state.currentTime) + (+a || 0), s) : r(this, dn).remote[W9(o)](s), this.dispatch("trigger", {
    detail: e,
    trigger: s
  });
}, $(Xc, "props", {
  disabled: !1,
  event: void 0,
  action: void 0
}), Xc);
var eo, mi, gi, z3, r9;
class fE {
  constructor(t) {
    C(this, z3);
    $(this, "priority", 10);
    C(this, eo, null);
    C(this, mi);
    C(this, gi);
    g(this, mi, t);
  }
  attach() {
  }
  canRender() {
    return !0;
  }
  detach() {
    var t;
    (t = r(this, gi)) == null || t.abort(), g(this, gi, void 0), r(this, mi).reset(), g(this, eo, null);
  }
  changeTrack(t) {
    var e;
    !t || r(this, eo) === t || ((e = r(this, gi)) == null || e.abort(), g(this, gi, new Ne(t)), t.readyState < 2 ? (r(this, mi).reset(), r(this, gi).add("load", () => c(this, z3, r9).call(this, t), { once: !0 })) : c(this, z3, r9).call(this, t), r(this, gi).add("add-cue", (s) => {
      r(this, mi).addCue(s.detail);
    }).add("remove-cue", (s) => {
      r(this, mi).removeCue(s.detail);
    }), g(this, eo, t));
  }
}
eo = new WeakMap(), mi = new WeakMap(), gi = new WeakMap(), z3 = new WeakSet(), r9 = function(t) {
  r(this, mi).changeTrack({
    cues: [...t.cues],
    regions: [...t.regions]
  });
};
var Cn, Jt, fe, Ua, im, rm, om, o9, am, cm, lm, um, a9, dm, hm, yi, c9, Ka, l9, u9;
let pE = (Cn = class extends Ce {
  constructor() {
    super(...arguments);
    C(this, fe);
    C(this, Jt);
    C(this, yi, -1);
  }
  onSetup() {
    g(this, Jt, je()), this.setAttributes({
      "aria-hidden": Rt(c(this, fe, Ua).bind(this))
    });
  }
  onAttach(e) {
    e.style.setProperty("pointer-events", "none");
  }
  onConnect(e) {
    Cn.lib() || import("./prod-DTLJXtPo.js").then((s) => s.d).then((s) => Cn.lib.set(s)), T(c(this, fe, im).bind(this));
  }
}, Jt = new WeakMap(), fe = new WeakSet(), Ua = function() {
  const { textTrack: e, remotePlaybackState: s, iOSControls: i } = r(this, Jt).$state, o = e();
  return i() || s() === "connected" || !o || !mn(o);
}, im = function() {
  if (!Cn.lib()) return;
  const { viewType: e } = r(this, Jt).$state;
  return e() === "audio" ? c(this, fe, rm).call(this) : c(this, fe, cm).call(this);
}, rm = function() {
  return T(c(this, fe, om).bind(this)), c(this, fe, a9).call(this, null), () => {
    this.el.textContent = "";
  };
}, om = function() {
  if (c(this, fe, Ua).call(this)) return;
  c(this, fe, o9).call(this);
  const { textTrack: e } = r(this, Jt).$state;
  Xe(e(), "cue-change", c(this, fe, o9).bind(this)), T(c(this, fe, am).bind(this));
}, o9 = function() {
  this.el.textContent = "", r(this, yi) >= 0 && c(this, fe, Ka).call(this);
  const { realCurrentTime: e, textTrack: s } = r(this, Jt).$state, { renderVTTCueString: i } = Cn.lib(), o = _(e), a = _(s).activeCues;
  for (const l of a) {
    const d = c(this, fe, l9).call(this), h = c(this, fe, u9).call(this);
    h.innerHTML = i(l, o), d.append(h), this.el.append(h);
  }
}, am = function() {
  const { realCurrentTime: e } = r(this, Jt).$state, { updateTimedVTTCueNodes: s } = Cn.lib();
  s(this.el, e());
}, cm = function() {
  const { CaptionsRenderer: e } = Cn.lib(), s = new e(this.el), i = new fE(s);
  return r(this, Jt).textRenderers.add(i), T(c(this, fe, lm).bind(this, s)), T(c(this, fe, um).bind(this, s)), c(this, fe, a9).call(this, s), () => {
    this.el.textContent = "", r(this, Jt).textRenderers.remove(i), s.destroy();
  };
}, lm = function(e) {
  e.dir = this.$props.textDir();
}, um = function(e) {
  var o;
  if (c(this, fe, Ua).call(this)) return;
  const { realCurrentTime: s, textTrack: i } = r(this, Jt).$state;
  e.currentTime = s(), r(this, yi) >= 0 && ((o = i()) != null && o.activeCues[0]) && c(this, fe, Ka).call(this);
}, a9 = function(e) {
  const s = r(this, Jt).player;
  if (!s) return;
  const i = c(this, fe, dm).bind(this, e);
  Xe(s, "vds-font-change", i);
}, dm = function(e) {
  var i;
  if (r(this, yi) >= 0) {
    c(this, fe, c9).call(this);
    return;
  }
  const { textTrack: s } = r(this, Jt).$state;
  (i = s()) != null && i.activeCues[0] ? e == null || e.update(!0) : c(this, fe, hm).call(this);
}, hm = function() {
  var i, o;
  const e = c(this, fe, l9).call(this);
  ie(e, "data-example", "");
  const s = c(this, fe, u9).call(this);
  ie(s, "data-example", ""), s.textContent = this.$props.exampleText(), e == null || e.append(s), (i = this.el) == null || i.append(e), (o = this.el) == null || o.setAttribute("data-example", ""), c(this, fe, c9).call(this);
}, yi = new WeakMap(), c9 = function() {
  window.clearTimeout(r(this, yi)), g(this, yi, window.setTimeout(c(this, fe, Ka).bind(this), 2500));
}, Ka = function() {
  var e, s;
  (e = this.el) == null || e.removeAttribute("data-example"), (s = this.el) != null && s.querySelector("[data-example]") && (this.el.textContent = ""), g(this, yi, -1);
}, l9 = function() {
  const e = document.createElement("div");
  return ie(e, "data-part", "cue-display"), e;
}, u9 = function() {
  const e = document.createElement("div");
  return ie(e, "data-part", "cue"), e;
}, $(Cn, "props", {
  textDir: "ltr",
  exampleText: "Captions look like this."
}), $(Cn, "lib", re(null)), Cn);
var Ea, Mn, Fe, d9, fm, h9, pm, Cm, Y3, f9, p9, C9, mm, m9, gm;
let CE = (Ea = class extends Ce {
  constructor() {
    super(...arguments);
    C(this, Fe);
    C(this, Mn);
    C(this, Y3, "");
  }
  onSetup() {
    g(this, Mn, je()), c(this, Fe, f9).call(this), c(this, Fe, p9).call(this), c(this, Fe, C9).call(this), c(this, Fe, h9).call(this);
  }
  onAttach(e) {
    e.style.setProperty("pointer-events", "none"), T(c(this, Fe, Cm).bind(this)), T(c(this, Fe, f9).bind(this)), T(c(this, Fe, p9).bind(this)), T(c(this, Fe, C9).bind(this)), T(c(this, Fe, h9).bind(this));
    const { started: s } = r(this, Mn).$state;
    this.setAttributes({
      "data-visible": () => !s() && !this.$state.hidden(),
      "data-loading": c(this, Fe, pm).bind(this),
      "data-error": c(this, Fe, d9).bind(this),
      "data-hidden": this.$state.hidden
    });
  }
  onConnect(e) {
    T(c(this, Fe, fm).bind(this)), T(c(this, Fe, mm).bind(this));
  }
}, Mn = new WeakMap(), Fe = new WeakSet(), d9 = function() {
  const { error: e } = this.$state;
  return !es(e());
}, fm = function() {
  const { canLoadPoster: e, poster: s } = r(this, Mn).$state;
  !e() && s() && yo(s(), "preconnect");
}, h9 = function() {
  const { src: e } = this.$props, { poster: s, nativeControls: i } = r(this, Mn).$state;
  this.el && ie(this.el, "display", i() ? "none" : null), this.$state.hidden.set(c(this, Fe, d9).call(this) || !(e() || s()) || i());
}, pm = function() {
  const { loading: e, hidden: s } = this.$state;
  return !s() && e();
}, Cm = function() {
  const e = this.$state.img();
  e && (new Ne(e).add("load", c(this, Fe, m9).bind(this)).add("error", c(this, Fe, gm).bind(this)), e.complete && c(this, Fe, m9).call(this));
}, Y3 = new WeakMap(), f9 = function() {
  const { poster: e } = r(this, Mn).$props, { canLoadPoster: s, providedPoster: i, inferredPoster: o } = r(this, Mn).$state, a = this.$props.src() || "", l = a || e() || o();
  r(this, Y3) === i() && i.set(a), this.$state.src.set(s() && l.length ? l : null), g(this, Y3, a);
}, p9 = function() {
  const { src: e } = this.$props, { alt: s } = this.$state, { poster: i } = r(this, Mn).$state;
  s.set(e() || i() ? this.$props.alt() : null);
}, C9 = function() {
  const { crossOrigin: e } = this.$props, { crossOrigin: s } = this.$state, { crossOrigin: i, poster: o } = r(this, Mn).$state, a = e() !== null ? e() : i();
  s.set(
    /ytimg\.com|vimeo/.test(o() || "") ? null : a === !0 ? "anonymous" : a
  );
}, mm = function() {
  const { loading: e, error: s } = this.$state, { canLoadPoster: i, poster: o } = r(this, Mn).$state;
  e.set(i() && !!o()), s.set(null);
}, m9 = function() {
  const { loading: e, error: s } = this.$state;
  e.set(!1), s.set(null);
}, gm = function(e) {
  const { loading: s, error: i } = this.$state;
  s.set(!1), i.set(e);
}, $(Ea, "props", {
  src: null,
  alt: null,
  crossOrigin: null
}), $(Ea, "state", new Pi({
  img: null,
  src: null,
  alt: null,
  crossOrigin: null,
  loading: !0,
  error: null,
  hidden: !1
})), Ea);
var $a, to, pr, Q3, X3, Ct, ym, vm, bm, g9, wm, xm, y9, Sm;
let mE = ($a = class extends Ce {
  constructor() {
    super(...arguments);
    C(this, Ct);
    C(this, to);
    C(this, pr, re(null));
    C(this, Q3, re(!0));
    C(this, X3, re(!0));
  }
  onSetup() {
    g(this, to, je()), c(this, Ct, g9).call(this);
    const { type: e } = this.$props;
    this.setAttributes({
      "data-type": e,
      "data-remainder": c(this, Ct, y9).bind(this)
    }), new df({
      callback: c(this, Ct, ym).bind(this)
    }).attach(this);
  }
  onAttach(e) {
    e.hasAttribute("role") || T(c(this, Ct, wm).bind(this)), T(c(this, Ct, g9).bind(this));
  }
  onConnect(e) {
    pe(p4(e, r(this, Q3).set)), T(c(this, Ct, vm).bind(this)), T(c(this, Ct, bm).bind(this));
  }
}, to = new WeakMap(), pr = new WeakMap(), Q3 = new WeakMap(), X3 = new WeakMap(), Ct = new WeakSet(), ym = function(e) {
  r(this, X3).set(e[0].isIntersecting);
}, vm = function() {
  const { hidden: e } = this.$props;
  this.$state.hidden.set(e() || !r(this, Q3).call(this) || !r(this, X3).call(this));
}, bm = function() {
  if (!this.$props.toggle()) {
    r(this, pr).set(null);
    return;
  }
  this.el && Sr(this.el, c(this, Ct, Sm).bind(this));
}, g9 = function() {
  const { hidden: e, timeText: s } = this.$state, { duration: i } = r(this, to).$state;
  if (e()) return;
  const { type: o, padHours: a, padMinutes: l, showHours: d } = this.$props, h = c(this, Ct, xm).call(this, o()), p = i(), f = c(this, Ct, y9).call(this);
  if (!Number.isFinite(h + p)) {
    s.set("LIVE");
    return;
  }
  const m = f ? Math.max(0, p - h) : h, y = G2(m, {
    padHrs: a(),
    padMins: l(),
    showHrs: d()
  });
  s.set((f ? "-" : "") + y);
}, wm = function() {
  if (!this.el) return;
  const { toggle: e } = this.$props;
  ie(this.el, "role", e() ? "timer" : null), ie(this.el, "tabindex", e() ? 0 : null);
}, xm = function(e) {
  const { bufferedEnd: s, duration: i, currentTime: o } = r(this, to).$state;
  switch (e) {
    case "buffered":
      return s();
    case "duration":
      return i();
    default:
      return o();
  }
}, y9 = function() {
  return this.$props.remainder() && r(this, pr).call(this) !== !1;
}, Sm = function(e) {
  if (e.preventDefault(), r(this, pr).call(this) === null) {
    r(this, pr).set(!this.$props.remainder());
    return;
  }
  r(this, pr).set((s) => !s);
}, $($a, "props", {
  type: "current",
  showHours: !1,
  padHours: null,
  padMinutes: null,
  remainder: !1,
  toggle: !1,
  hidden: !1
}), $($a, "state", new Pi({
  timeText: "",
  hidden: !1
})), $a);
class m7 extends Qh {
}
class gE extends g8 {
}
class yE extends VS {
}
class vE extends T8 {
}
class bE extends AS {
}
class wE extends Z8 {
}
class xE extends ZS {
}
class SE extends BS {
}
class EE extends KS {
}
class $E extends GS {
}
class TE extends WS {
}
class PE extends qS {
}
class LE extends FS {
}
class kE extends jS {
}
class ME extends US {
}
class IE extends NS {
}
class VE extends HS {
}
class AE extends OS {
}
class Em extends ia {
}
class RE extends h2 {
}
class NE extends Hu {
}
class HE extends Ou {
}
class OE extends _u {
}
class DE extends Fu {
}
class _E extends XS {
}
class FE extends h7 {
}
class jE extends d2 {
}
class qE extends np {
}
class ZE extends f7 {
}
class BE extends bo {
}
class GE extends U2 {
}
class WE extends DC {
}
class UE extends uE {
}
class KE extends BC {
}
class zE extends C7 {
}
class YE extends pE {
}
class QE extends hE {
}
class XE extends CE {
}
class $m extends u2 {
}
class JE extends mE {
}
const Tm = u.forwardRef((n, t) => {
  const { children: e, ...s } = n, i = u.Children.toArray(e), o = i.find(t$);
  if (o) {
    const a = o.props.children, l = i.map((d) => d === o ? u.Children.count(a) > 1 ? u.Children.only(null) : u.isValidElement(a) ? a.props.children : null : d);
    return /* @__PURE__ */ u.createElement(v9, { ...s, ref: t }, u.isValidElement(a) ? u.cloneElement(a, void 0, l) : null);
  }
  return /* @__PURE__ */ u.createElement(v9, { ...s, ref: t }, e);
});
Tm.displayName = "Slot";
const v9 = u.forwardRef((n, t) => {
  const { children: e, ...s } = n;
  return u.isValidElement(e) ? u.cloneElement(e, {
    ...n$(s, e.props),
    ref: t ? Oe(t, e.ref) : e.ref
  }) : u.Children.count(e) > 1 ? u.Children.only(null) : null;
});
v9.displayName = "SlotClone";
const e$ = ({ children: n }) => /* @__PURE__ */ u.createElement(u.Fragment, null, n);
function t$(n) {
  return u.isValidElement(n) && n.type === e$;
}
function n$(n, t) {
  const e = { ...t };
  for (const s in t) {
    const i = n[s], o = t[s];
    /^on[A-Z]/.test(s) ? i && o ? e[s] = (...l) => {
      o(...l), i(...l);
    } : i && (e[s] = i) : s === "style" ? e[s] = { ...i, ...o } : s === "className" && (e[s] = [i, o].filter(Boolean).join(" "));
  }
  return { ...n, ...e };
}
const s$ = ["button", "div", "span", "img", "video", "audio"], se = s$.reduce((n, t) => {
  const e = u.forwardRef((s, i) => {
    const { asChild: o, ...a } = s, l = o ? Tm : t;
    return /* @__PURE__ */ u.createElement(l, { ...a, ref: i });
  });
  return e.displayName = `Primitive.${t}`, { ...n, [t]: e };
}, {});
function i$(n) {
  return (n == null ? void 0 : n.$$PROVIDER_TYPE) === "REMOTION";
}
const Id = Em.state.record, r$ = Object.keys(Id).reduce(
  (n, t) => ({
    ...n,
    [t]() {
      return Id[t];
    }
  }),
  {}
);
function Tc(n, t) {
  const e = R1(O1);
  return et((e || r$)[n]);
}
const Vd = m7.state.record, Pm = Object.keys(Vd).reduce(
  (n, t) => ({
    ...n,
    [t]() {
      return Vd[t];
    }
  }),
  {}
);
function nn(n, t) {
  const e = R1(vo);
  return et((e || Pm)[n]);
}
function o$(n) {
  const t = R1(vo);
  return N5(n != null && n.current ? n.current.$state : t || Pm);
}
function oa() {
  return K9(o7);
}
const a$ = ge(LE, {
  domEventsRegex: /^onMedia/
}), c$ = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(a$, { ...t }, (s) => /* @__PURE__ */ u.createElement(
    se.button,
    {
      ...s,
      ref: Oe(s.ref, e)
    },
    n
  ))
);
c$.displayName = "AirPlayButton";
const l$ = ge(PE, {
  domEventsRegex: /^onMedia/
}), Lm = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(l$, { ...t }, (s) => /* @__PURE__ */ u.createElement(
    se.button,
    {
      ...s,
      ref: Oe(s.ref, e)
    },
    n
  ))
);
Lm.displayName = "PlayButton";
const u$ = ge(xE, {
  domEventsRegex: /^onMedia/
}), d$ = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(u$, { ...t }, (s) => /* @__PURE__ */ u.createElement(
    se.button,
    {
      ...s,
      ref: Oe(s.ref, e)
    },
    n
  ))
);
d$.displayName = "CaptionButton";
const h$ = ge(SE, {
  domEventsRegex: /^onMedia/
}), km = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(h$, { ...t }, (s) => /* @__PURE__ */ u.createElement(
    se.button,
    {
      ...s,
      ref: Oe(s.ref, e)
    },
    n
  ))
);
km.displayName = "FullscreenButton";
const f$ = ge($E, {
  domEventsRegex: /^onMedia/
}), Mm = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(f$, { ...t }, (s) => /* @__PURE__ */ u.createElement(
    se.button,
    {
      ...s,
      ref: Oe(s.ref, e)
    },
    n
  ))
);
Mm.displayName = "MuteButton";
const p$ = ge(TE, {
  domEventsRegex: /^onMedia/
}), C$ = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(p$, { ...t }, (s) => /* @__PURE__ */ u.createElement(
    se.button,
    {
      ...s,
      ref: Oe(s.ref, e)
    },
    n
  ))
);
C$.displayName = "PIPButton";
const m$ = ge(ME, {
  domEventsRegex: /^onMedia/
}), g7 = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(m$, { ...t }, (s) => /* @__PURE__ */ u.createElement(
    se.button,
    {
      ...s,
      ref: Oe(s.ref, e)
    },
    n
  ))
);
g7.displayName = "SeekButton";
const g$ = ge(EE, {
  domEventsRegex: /^onMedia/
}), y$ = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(g$, { ...t }, (s) => /* @__PURE__ */ u.createElement(
    se.button,
    {
      ...s,
      ref: Oe(s.ref, e)
    },
    n
  ))
);
y$.displayName = "LiveButton";
const wo = [
  "onDragStart",
  "onDragEnd",
  "onDragValueChange",
  "onValueChange",
  "onPointerValueChange"
], v$ = ge(FE), b$ = ge(Em, {
  events: wo
}), w$ = u.forwardRef(({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(b$, { ...t, ref: e }, (s) => /* @__PURE__ */ u.createElement(se.div, { ...s }, n)));
w$.displayName = "Slider";
const x$ = u.forwardRef((n, t) => /* @__PURE__ */ u.createElement(se.div, { ...n, ref: t }));
x$.displayName = "SliderThumb";
const S$ = u.forwardRef((n, t) => /* @__PURE__ */ u.createElement(se.div, { ...n, ref: t }));
S$.displayName = "SliderTrack";
const E$ = u.forwardRef((n, t) => /* @__PURE__ */ u.createElement(se.div, { ...n, ref: t }));
E$.displayName = "SliderTrackFill";
const $$ = ge(qE), T$ = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement($$, { ...t }, (s) => /* @__PURE__ */ u.createElement(
    se.div,
    {
      ...s,
      ref: Oe(s.ref, e)
    },
    n
  ))
);
T$.displayName = "SliderPreview";
const P$ = u.forwardRef(({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(v$, { ...t }, (s, i) => {
  const o = et(() => i.getValueText(), i);
  return /* @__PURE__ */ u.createElement(se.div, { ...s, ref: e }, o, n);
}));
P$.displayName = "SliderValue";
const L$ = u.forwardRef(({ children: n, ...t }, e) => {
  const s = Tc("min"), i = Tc("max"), o = Tc("step"), a = (i - s) / o;
  return /* @__PURE__ */ u.createElement(se.div, { ...t, ref: e }, Array.from({ length: Math.floor(a) + 1 }).map((l, d) => n(d)));
});
L$.displayName = "SliderSteps";
const k$ = ge(NE, {
  events: wo,
  domEventsRegex: /^onMedia/
}), M$ = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(k$, { ...t, ref: e }, (s) => /* @__PURE__ */ u.createElement(se.div, { ...s }, n))
);
M$.displayName = "VolumeSlider";
function I$(n = 0, t = 0, e = "") {
  return W ? {
    startTime: n,
    endTime: t,
    text: e,
    addEventListener: gn,
    removeEventListener: gn,
    dispatchEvent: gn
  } : new window.VTTCue(n, t, e);
}
const V$ = ge($m), A$ = u.forwardRef(({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(V$, { ...t }, (s) => /* @__PURE__ */ u.createElement(
  se.div,
  {
    ...s,
    ref: Oe(s.ref, e)
  },
  n
)));
A$.displayName = "Thumbnail";
const R$ = u.forwardRef(({ children: n, ...t }, e) => {
  const { src: s, img: i, crossOrigin: o } = R1($m.state), a = et(s), l = et(o);
  return /* @__PURE__ */ u.createElement(
    se.img,
    {
      crossOrigin: l,
      ...t,
      src: a || void 0,
      ref: Oe(i.set, e)
    },
    n
  );
});
R$.displayName = "ThumbnailImg";
const K2 = u.createContext({
  $chapters: re(null)
});
K2.displayName = "TimeSliderContext";
const N$ = ge(RE, {
  events: wo,
  domEventsRegex: /^onMedia/
}), H$ = u.forwardRef(
  ({ children: n, ...t }, e) => {
    const s = u.useMemo(() => re(null), []);
    return /* @__PURE__ */ u.createElement(K2.Provider, { value: { $chapters: s } }, /* @__PURE__ */ u.createElement(N$, { ...t, ref: e }, (i) => /* @__PURE__ */ u.createElement(se.div, { ...i }, n)));
  }
);
H$.displayName = "TimeSlider";
const O$ = ge(ZE), D$ = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(O$, { ...t }, (s, i) => /* @__PURE__ */ u.createElement(
    se.div,
    {
      ...s,
      ref: Oe(s.ref, e)
    },
    /* @__PURE__ */ u.createElement(Im, { instance: i }, n)
  ))
);
D$.displayName = "SliderChapters";
function Im({ instance: n, children: t }) {
  const e = et(() => n.cues, n), s = u.useRef([]), i = u.useRef(), { $chapters: o } = u.useContext(K2);
  return i.current || (i.current = I$()), u.useEffect(() => (o.set(n), () => void o.set(null)), [n]), u.useEffect(() => {
    n.setRefs(s.current);
  }, [e]), t(e.length ? e : [i.current], (a) => {
    if (!a) {
      s.current.length = 0;
      return;
    }
    s.current.push(a);
  });
}
Im.displayName = "SliderChapterTracks";
const _$ = u.forwardRef(
  ({ children: n, ...t }, e) => {
    const { $chapters: s } = u.useContext(K2), [i, o] = u.useState();
    return u.useEffect(() => T(() => {
      const a = s(), l = (a == null ? void 0 : a.activePointerCue) || (a == null ? void 0 : a.activeCue);
      o((l == null ? void 0 : l.text) || "");
    }), []), /* @__PURE__ */ u.createElement(se.div, { ...t, ref: e }, i, n);
  }
);
_$.displayName = "SliderChapterTitle";
const F$ = u.forwardRef((n, t) => /* @__PURE__ */ u.createElement(se.div, { ...n, ref: t }));
F$.displayName = "SliderProgress";
const j$ = ge(_E), q$ = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(j$, { ...t }, (s) => /* @__PURE__ */ u.createElement(se.div, { ...s, ref: Oe(s.ref, e) }, n))
);
q$.displayName = "SliderThumbnail";
const Z$ = ge(jE, {
  events: ["onCanPlay", "onError"]
}), B$ = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(Z$, { ...t }, (s, i) => /* @__PURE__ */ u.createElement(
    Vm,
    {
      ...s,
      instance: i,
      ref: Oe(s.ref, e)
    },
    n
  ))
);
B$.displayName = "SliderVideo";
const Vm = u.forwardRef(
  ({ instance: n, children: t, ...e }, s) => {
    const { canLoad: i } = R1(vo), { src: o, video: a, crossOrigin: l } = n.$state, d = et(o), h = et(i), p = et(l);
    return /* @__PURE__ */ u.createElement(
      se.video,
      {
        style: { maxWidth: "unset" },
        ...e,
        src: d || void 0,
        muted: !0,
        playsInline: !0,
        preload: h ? "auto" : "none",
        crossOrigin: p || void 0,
        ref: Oe(a.set, s)
      },
      t
    );
  }
);
Vm.displayName = "SliderVideoProvider";
const G$ = ge(KE, {
  events: ["onChange"]
}), W$ = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(G$, { ...t, ref: e }, (s) => /* @__PURE__ */ u.createElement(se.div, { ...s }, n))
);
W$.displayName = "RadioGroup";
const U$ = ge(zE, {
  events: ["onChange", "onSelect"]
}), K$ = u.forwardRef(({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(U$, { ...t }, (s) => /* @__PURE__ */ u.createElement(
  se.div,
  {
    ...s,
    ref: Oe(s.ref, e)
  },
  n
)));
K$.displayName = "RadioItem";
const z$ = ge(BE, {
  events: ["onOpen", "onClose"],
  domEventsRegex: /^onMedia/
}), Y$ = u.forwardRef(({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(z$, { ...t, ref: e }, (s, i) => /* @__PURE__ */ u.createElement(
  se.div,
  {
    ...s,
    style: { display: i.isSubmenu ? void 0 : "contents", ...s.style }
  },
  n
)));
Y$.displayName = "Menu";
const Q$ = ge(GE, {
  events: ["onSelect"]
}), X$ = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(Q$, { ...t }, (s) => /* @__PURE__ */ u.createElement(
    se.button,
    {
      ...s,
      ref: Oe(s.ref, e)
    },
    n
  ))
);
X$.displayName = "MenuButton";
const J$ = u.forwardRef(
  ({ container: n = null, disabled: t = !1, children: e, ...s }, i) => {
    let o = nn("fullscreen"), a = t === "fullscreen" ? !o : !t;
    const l = u.useMemo(() => W ? null : (ce(n) ? document.querySelector(n) : n) ?? document.body, [n]);
    return !l || !a ? e : vv(
      /* @__PURE__ */ u.createElement(
        se.div,
        {
          ...s,
          style: { display: "contents", ...s.style },
          ref: i
        },
        e
      ),
      l
    );
  }
);
J$.displayName = "MenuPortal";
const eT = ge(WE), tT = u.forwardRef(({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(eT, { ...t }, (s) => /* @__PURE__ */ u.createElement(
  se.div,
  {
    ...s,
    ref: Oe(s.ref, e)
  },
  n
)));
tT.displayName = "MenuItems";
const nT = ge(UE), sT = u.forwardRef(({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(nT, { ...t }, (s) => /* @__PURE__ */ u.createElement(
  se.div,
  {
    ...s,
    ref: Oe(s.ref, e)
  },
  n
)));
sT.displayName = "MenuItem";
const iT = ge(QE, {
  events: ["onWillTrigger", "onTrigger"]
}), _o = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(iT, { ...t, ref: e }, (s) => /* @__PURE__ */ u.createElement(se.div, { ...s }, n))
);
_o.displayName = "Gesture";
const rT = ge(JE), b9 = u.forwardRef(({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(rT, { ...t }, (s, i) => /* @__PURE__ */ u.createElement(
  Am,
  {
    ...s,
    instance: i,
    ref: Oe(s.ref, e)
  },
  n
)));
b9.displayName = "Time";
const Am = u.forwardRef(
  ({ instance: n, children: t, ...e }, s) => {
    const { timeText: i } = n.$state, o = et(i);
    return /* @__PURE__ */ u.createElement(se.div, { ...e, ref: s }, o, t);
  }
);
Am.displayName = "TimeText";
function oT() {
  const n = oa();
  return (n == null ? void 0 : n.player) || null;
}
const aT = ge(yE, {
  events: ["onChange"]
}), cT = u.forwardRef(
  ({ style: n, children: t, ...e }, s) => /* @__PURE__ */ u.createElement(aT, { ...e }, (i) => /* @__PURE__ */ u.createElement(
    se.div,
    {
      ...i,
      style: { display: "contents", ...n },
      ref: Oe(i.ref, s)
    },
    t
  ))
);
cT.displayName = "MediaAnnouncer";
const lT = ge(vE), Rm = u.forwardRef(({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(lT, { ...t }, (s) => /* @__PURE__ */ u.createElement(
  se.div,
  {
    ...s,
    ref: Oe(s.ref, e)
  },
  n
)));
Rm.displayName = "Controls";
const uT = ge(bE), Nm = u.forwardRef(({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(uT, { ...t }, (s) => /* @__PURE__ */ u.createElement(
  se.div,
  {
    ...s,
    ref: Oe(s.ref, e)
  },
  n
)));
Nm.displayName = "ControlsGroup";
var Pc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Group: Nm,
  Root: Rm
});
const dT = ge(IE);
function hT({ children: n, ...t }) {
  return /* @__PURE__ */ u.createElement(dT, { ...t }, n);
}
hT.displayName = "Tooltip";
const fT = ge(VE), pT = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(fT, { ...t }, (s) => /* @__PURE__ */ u.createElement(
    se.button,
    {
      ...s,
      ref: Oe(s.ref, e)
    },
    n
  ))
);
pT.displayName = "TooltipTrigger";
const CT = ge(AE), mT = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(CT, { ...t }, (s) => /* @__PURE__ */ u.createElement(
    se.div,
    {
      ...s,
      ref: Oe(s.ref, e)
    },
    n
  ))
);
mT.displayName = "TooltipContent";
const gT = ge(kE, {
  domEventsRegex: /^onMedia/
}), yT = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(gT, { ...t }, (s) => /* @__PURE__ */ u.createElement(
    se.button,
    {
      ...s,
      ref: Oe(s.ref, e)
    },
    n
  ))
);
yT.displayName = "GoogleCastButton";
const vT = ge(DE, {
  events: wo,
  domEventsRegex: /^onMedia/
}), bT = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(vT, { ...t, ref: e }, (s) => /* @__PURE__ */ u.createElement(se.div, { ...s }, n))
);
bT.displayName = "QualitySlider";
const wT = ge(HE, {
  events: wo,
  domEventsRegex: /^onMedia/
}), xT = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(wT, { ...t, ref: e }, (s) => /* @__PURE__ */ u.createElement(se.div, { ...s }, n))
);
xT.displayName = "AudioGainSlider";
const ST = ge(OE, {
  events: wo,
  domEventsRegex: /^onMedia/
}), ET = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(ST, { ...t, ref: e }, (s) => /* @__PURE__ */ u.createElement(se.div, { ...s }, n))
);
ET.displayName = "SpeedSlider";
const $T = u.forwardRef(({ children: n, ...t }, e) => {
  const s = nn("title");
  return /* @__PURE__ */ u.createElement(se.span, { ...t, ref: e }, s, n);
});
$T.displayName = "Title";
function TT(n) {
  const [t, e] = u.useState([]);
  return u.useEffect(() => {
    if (!n) {
      e([]);
      return;
    }
    function s() {
      n && e(n.activeCues);
    }
    return s(), Xe(n, "cue-change", s);
  }, [n]), t;
}
function PT(n) {
  const t = oa(), [e, s] = u.useState(null);
  return u.useEffect(() => r7(t.textTracks, n, s), [n]), e;
}
function LT() {
  var e;
  const n = PT("chapters");
  return ((e = TT(n)[0]) == null ? void 0 : e.text) || "";
}
const kT = u.forwardRef(
  ({ defaultText: n = "", children: t, ...e }, s) => {
    const i = LT();
    return /* @__PURE__ */ u.createElement(se.span, { ...e, ref: s }, i || n, t);
  }
);
kT.displayName = "ChapterTitle";
const MT = ge(YE), Hm = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(MT, { ...t, ref: e }, (s) => /* @__PURE__ */ u.createElement(se.div, { ...s }, n))
);
Hm.displayName = "Captions";
u.forwardRef(
  ({ size: n = 96, children: t, ...e }, s) => /* @__PURE__ */ u.createElement(
    "svg",
    {
      width: n,
      height: n,
      fill: "none",
      viewBox: "0 0 120 120",
      "aria-hidden": "true",
      "data-part": "root",
      ...e,
      ref: s
    },
    t
  )
);
u.forwardRef(
  ({ width: n = 8, children: t, ...e }, s) => /* @__PURE__ */ u.createElement(
    "circle",
    {
      cx: "60",
      cy: "60",
      r: "54",
      stroke: "currentColor",
      strokeWidth: n,
      "data-part": "track",
      ...e,
      ref: s
    },
    t
  )
);
u.forwardRef(
  ({ width: n = 8, fillPercent: t = 50, children: e, ...s }, i) => /* @__PURE__ */ u.createElement(
    "circle",
    {
      cx: "60",
      cy: "60",
      r: "54",
      stroke: "currentColor",
      pathLength: "100",
      strokeWidth: n,
      strokeDasharray: 100,
      strokeDashoffset: 100 - t,
      "data-part": "track-fill",
      ...s,
      ref: i
    },
    e
  )
);
const A = /* @__PURE__ */ u.forwardRef((n, t) => {
  const { width: e, height: s, size: i = null, paths: o, ...a } = n;
  return u.createElement("svg", {
    viewBox: "0 0 32 32",
    ...a,
    width: e ?? i,
    height: s ?? i,
    fill: "none",
    "aria-hidden": "true",
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    ref: t,
    dangerouslySetInnerHTML: { __html: o }
  });
});
A.displayName = "VidstackIcon";
const IT = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
var Cr, no, E1, Hn, Dm, _m, Fm, jm, qm;
class Om extends Ce {
  constructor() {
    super();
    C(this, Hn);
    C(this, Cr);
    C(this, no);
    C(this, E1);
    g(this, E1, new p7()), r(this, E1).onValueChange = c(this, Hn, qm).bind(this);
  }
  get value() {
    return r(this, E1).value;
  }
  get disabled() {
    const { rates: e } = this.$props, { canSetPlaybackRate: s } = r(this, Cr).$state;
    return !s() || e().length === 0;
  }
  onSetup() {
    g(this, Cr, je()), Ts(ts) && g(this, no, rt(ts));
  }
  onConnect(e) {
    T(c(this, Hn, Dm).bind(this)), T(c(this, Hn, _m).bind(this)), T(c(this, Hn, Fm).bind(this));
  }
  getOptions() {
    const { rates: e, normalLabel: s } = this.$props;
    return e().map((i) => ({
      label: i === 1 ? s : i + "×",
      value: i.toString()
    }));
  }
}
Cr = new WeakMap(), no = new WeakMap(), E1 = new WeakMap(), Hn = new WeakSet(), Dm = function() {
  r(this, E1).value = c(this, Hn, jm).call(this);
}, _m = function() {
  var o;
  const { normalLabel: e } = this.$props, { playbackRate: s } = r(this, Cr).$state, i = s();
  (o = r(this, no)) == null || o.hint.set(i === 1 ? e() : i + "×");
}, Fm = function() {
  var e;
  (e = r(this, no)) == null || e.disable(this.disabled);
}, jm = function() {
  const { playbackRate: e } = r(this, Cr).$state;
  return e().toString();
}, qm = function(e, s) {
  if (this.disabled) return;
  const i = +e;
  r(this, Cr).remote.changePlaybackRate(i, s), this.dispatch("change", { detail: i, trigger: s });
}, $(Om, "props", {
  normalLabel: "Normal",
  rates: IT
});
const y7 = Om.prototype;
Re(y7, "value");
Re(y7, "disabled");
mt(y7, "getOptions");
function Zm(n) {
  const t = oa(), e = u.useRef();
  return e.current || (e.current = new u4()), u.useEffect(() => {
    const s = n, i = s instanceof m7, o = i ? s : t == null ? void 0 : t.player;
    e.current.setPlayer(o ?? null), e.current.setTarget(null);
  }, [t, n]), e.current;
}
const VT = [1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4];
var mr, so, $1, On, Gm, Wm, Um, Km, zm;
class Bm extends Ce {
  constructor() {
    super();
    C(this, On);
    C(this, mr);
    C(this, so);
    C(this, $1);
    g(this, $1, new p7()), r(this, $1).onValueChange = c(this, On, zm).bind(this);
  }
  get value() {
    return r(this, $1).value;
  }
  get disabled() {
    const { gains: e } = this.$props, { canSetAudioGain: s } = r(this, mr).$state;
    return !s() || e().length === 0;
  }
  onSetup() {
    g(this, mr, je()), Ts(ts) && g(this, so, rt(ts));
  }
  onConnect(e) {
    T(c(this, On, Gm).bind(this)), T(c(this, On, Wm).bind(this)), T(c(this, On, Um).bind(this));
  }
  getOptions() {
    const { gains: e, normalLabel: s } = this.$props;
    return e().map((i) => ({
      label: i === 1 || i === null ? s : String(i * 100) + "%",
      value: i.toString()
    }));
  }
}
mr = new WeakMap(), so = new WeakMap(), $1 = new WeakMap(), On = new WeakSet(), Gm = function() {
  r(this, $1).value = c(this, On, Km).call(this);
}, Wm = function() {
  var o;
  const { normalLabel: e } = this.$props, { audioGain: s } = r(this, mr).$state, i = s();
  (o = r(this, so)) == null || o.hint.set(i === 1 || i == null ? e() : String(i * 100) + "%");
}, Um = function() {
  var e;
  (e = r(this, so)) == null || e.disable(this.disabled);
}, Km = function() {
  var s;
  const { audioGain: e } = r(this, mr).$state;
  return ((s = e()) == null ? void 0 : s.toString()) ?? "1";
}, zm = function(e, s) {
  if (this.disabled) return;
  const i = +e;
  r(this, mr).remote.changeAudioGain(i, s), this.dispatch("change", { detail: i, trigger: s });
}, $(Bm, "props", {
  normalLabel: "Disabled",
  gains: VT
});
const v7 = Bm.prototype;
Re(v7, "value");
Re(v7, "disabled");
mt(v7, "getOptions");
const AT = [
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
], RT = ge(m7, {
  events: AT,
  eventsRegex: /^onHls/,
  domEventsRegex: /^onMedia/
}), Ym = u.forwardRef(
  ({ aspectRatio: n, children: t, ...e }, s) => /* @__PURE__ */ u.createElement(
    RT,
    {
      ...e,
      src: e.src,
      ref: s,
      style: {
        aspectRatio: n,
        ...e.style
      }
    },
    (i) => /* @__PURE__ */ u.createElement(se.div, { ...i }, t)
  )
);
Ym.displayName = "MediaPlayer";
const NT = ge(gE), Qm = u.forwardRef(
  ({ loaders: n = [], children: t, iframeProps: e, mediaProps: s, ...i }, o) => {
    const a = u.useMemo(() => n.map((l) => new l()), n);
    return /* @__PURE__ */ u.createElement(NT, { ...i, loaders: a, ref: o }, (l, d) => /* @__PURE__ */ u.createElement("div", { ...l }, /* @__PURE__ */ u.createElement(Xm, { provider: d, mediaProps: s, iframeProps: e }), t));
  }
);
Qm.displayName = "MediaProvider";
function Xm({ provider: n, mediaProps: t, iframeProps: e }) {
  const { sources: s, crossOrigin: i, poster: o, remotePlaybackInfo: a, nativeControls: l, viewType: d } = R1(vo), { loader: h } = n.$state, { $provider: p, $providerSetup: f } = oa(), m = et(s), y = et(l), v = et(i), b = et(o), S = et(h), E = et(p), P = et(f), I = et(a), M = S == null ? void 0 : S.mediaType(), D = et(d), B = D === "audio", F = (S == null ? void 0 : S.name) === "youtube", k = (S == null ? void 0 : S.name) === "vimeo", Q = F || k, X = (S == null ? void 0 : S.name) === "remotion", ae = (S == null ? void 0 : S.name) === "google-cast", [me, Y] = u.useState(""), [J, Ee] = u.useState(!1);
  return u.useEffect(() => {
    !ae || me || Promise.resolve().then(() => Zb).then(function(G) {
      return G.chromecast;
    }).then((G) => {
      Y(G.default);
    });
  }, [ae]), u.useEffect(() => {
    Ee(!0);
  }, []), ae ? /* @__PURE__ */ u.createElement(
    "div",
    {
      className: "vds-google-cast",
      ref: (G) => {
        n.load(G);
      }
    },
    /* @__PURE__ */ u.createElement(A, { paths: me }),
    I != null && I.deviceName ? /* @__PURE__ */ u.createElement("span", { className: "vds-google-cast-info" }, "Google Cast on", " ", /* @__PURE__ */ u.createElement("span", { className: "vds-google-cast-device-name" }, I.deviceName)) : null
  ) : X ? /* @__PURE__ */ u.createElement("div", { "data-remotion-canvas": !0 }, /* @__PURE__ */ u.createElement(
    "div",
    {
      "data-remotion-container": !0,
      ref: (G) => {
        n.load(G);
      }
    },
    i$(E) && P ? u.createElement(E.render) : null
  )) : Q ? u.createElement(
    u.Fragment,
    null,
    u.createElement("iframe", {
      ...e,
      className: (e != null && e.className ? `${e.className} ` : "") + F ? "vds-youtube" : "vds-vimeo",
      suppressHydrationWarning: !0,
      tabIndex: y ? void 0 : -1,
      "aria-hidden": "true",
      "data-no-controls": y ? void 0 : "",
      ref(G) {
        n.load(G);
      }
    }),
    !y && !B ? u.createElement("div", { className: "vds-blocker" }) : null
  ) : M ? u.createElement(M === "audio" ? "audio" : "video", {
    ...t,
    controls: y ? !0 : null,
    crossOrigin: typeof v == "boolean" ? "" : v,
    poster: M === "video" && y && b ? b : null,
    suppressHydrationWarning: !0,
    children: J ? null : m.map(
      ({ src: G, type: U }) => ce(G) ? /* @__PURE__ */ u.createElement("source", { src: G, type: U !== "?" ? U : void 0, key: G }) : null
    ),
    ref(G) {
      n.load(G);
    }
  }) : null;
}
Xm.displayName = "MediaOutlet";
function HT(n) {
  const t = oa(), e = u.useMemo(() => new P1(n), Object.values(n));
  return u.useEffect(() => (t.textTracks.add(e), () => void t.textTracks.remove(e)), [e]), e;
}
function Jm({ lang: n, ...t }) {
  return HT({ language: n, ...t }), null;
}
Jm.displayName = "Track";
const OT = ge(wE), DT = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(OT, { ...t }, (s) => /* @__PURE__ */ u.createElement(
    se.button,
    {
      ...s,
      ref: Oe(s.ref, e)
    },
    n
  ))
);
DT.displayName = "ToggleButton";
const _T = ge(XE), eg = u.forwardRef(
  ({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(
    _T,
    {
      src: t.asChild && u.isValidElement(n) ? n.props.src : void 0,
      ...t
    },
    (s, i) => /* @__PURE__ */ u.createElement(
      tg,
      {
        ...s,
        instance: i,
        ref: Oe(s.ref, e)
      },
      n
    )
  )
);
eg.displayName = "Poster";
const tg = u.forwardRef(
  ({ instance: n, children: t, ...e }, s) => {
    const { src: i, img: o, alt: a, crossOrigin: l, hidden: d } = n.$state, h = et(i), p = et(a), f = et(l), m = et(d);
    return /* @__PURE__ */ u.createElement(
      se.img,
      {
        ...e,
        src: h || void 0,
        alt: p || void 0,
        crossOrigin: f || void 0,
        ref: Oe(o.set, s),
        style: { display: m ? "none" : void 0 }
      },
      t
    );
  }
);
tg.displayName = "PosterImg";
const FT = u.forwardRef(({ children: n, ...t }, e) => /* @__PURE__ */ u.createElement(
  se.div,
  {
    translate: "yes",
    "aria-live": "off",
    "aria-atomic": "true",
    ...t,
    ref: e
  },
  n
));
FT.displayName = "Caption";
const jT = u.forwardRef((n, t) => {
  const e = nn("textTrack"), [s, i] = u.useState();
  return u.useEffect(() => {
    if (!e) return;
    function o() {
      i(e == null ? void 0 : e.activeCues[0]);
    }
    return e.addEventListener("cue-change", o), () => {
      e.removeEventListener("cue-change", o), i(void 0);
    };
  }, [e]), /* @__PURE__ */ u.createElement(
    se.span,
    {
      ...n,
      "data-part": "cue",
      dangerouslySetInnerHTML: {
        __html: (s == null ? void 0 : s.text) || ""
      },
      ref: t
    }
  );
});
jT.displayName = "CaptionText";
function qT({
  clamp: n = !1,
  offset: t = 0,
  orientation: e = "horizontal"
} = {}) {
  const [s, i] = u.useState(null), [o, a] = u.useState(null), [l, d] = u.useState(0), [h, p] = u.useState(!1);
  return u.useEffect(() => {
    if (!s) return;
    const f = re(!1);
    function m(y) {
      s && d(ZT(s, y, e));
    }
    return T(() => {
      f() || new Ne(s).add("pointerenter", () => {
        p(!0), o == null || o.setAttribute("data-visible", "");
      }).add("pointerdown", (y) => {
        f.set(!0), m(y);
      }).add("pointerleave", () => {
        p(!1), o == null || o.removeAttribute("data-visible");
      }).add("pointermove", m), o == null || o.setAttribute("data-dragging", ""), new Ne(document).add("pointerup", (y) => {
        f.set(!1), o == null || o.removeAttribute("data-dragging"), m(y);
      }).add("pointermove", m).add("touchmove", (y) => y.preventDefault(), { passive: !1 });
    });
  }, [s]), u.useEffect(() => {
    o && o.style.setProperty("--slider-pointer", l + "%");
  }, [o, l]), u.useEffect(() => {
    if (!o) return;
    const f = () => {
      sp(o, {
        offset: t,
        clamp: n,
        orientation: e
      });
    };
    f();
    const m = new ResizeObserver(f);
    return m.observe(o), () => m.disconnect();
  }, [o, n, t, e]), {
    previewRootRef: i,
    previewRef: a,
    previewValue: l,
    isPreviewVisible: h
  };
}
function ZT(n, t, e) {
  let s, i = n.getBoundingClientRect();
  if (e === "vertical") {
    const { bottom: o, height: a } = i;
    s = (o - t.clientY) / a;
  } else {
    const { left: o, width: a } = i;
    s = (t.clientX - o) / a;
  }
  return BT(Math.max(0, Math.min(100, 100 * s)));
}
function BT(n) {
  return Number(n.toFixed(3));
}
const GT = "_captions_tsk1r_9", WT = {
  captions: GT
};
function ue(n, t, { checkForDefaultPrevented: e = !0 } = {}) {
  return function(i) {
    if (n == null || n(i), e === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function UT(n, t) {
  typeof n == "function" ? n(t) : n != null && (n.current = t);
}
function z2(...n) {
  return (t) => n.forEach((e) => UT(e, t));
}
function ut(...n) {
  return u.useCallback(z2(...n), n);
}
function Y2(n, t = []) {
  let e = [];
  function s(o, a) {
    const l = u.createContext(a), d = e.length;
    e = [...e, a];
    const h = (f) => {
      var E;
      const { scope: m, children: y, ...v } = f, b = ((E = m == null ? void 0 : m[n]) == null ? void 0 : E[d]) || l, S = u.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ w.jsx(b.Provider, { value: S, children: y });
    };
    h.displayName = o + "Provider";
    function p(f, m) {
      var b;
      const y = ((b = m == null ? void 0 : m[n]) == null ? void 0 : b[d]) || l, v = u.useContext(y);
      if (v) return v;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return [h, p];
  }
  const i = () => {
    const o = e.map((a) => u.createContext(a));
    return function(l) {
      const d = (l == null ? void 0 : l[n]) || o;
      return u.useMemo(
        () => ({ [`__scope${n}`]: { ...l, [n]: d } }),
        [l, d]
      );
    };
  };
  return i.scopeName = n, [s, KT(i, ...t)];
}
function KT(...n) {
  const t = n[0];
  if (n.length === 1) return t;
  const e = () => {
    const s = n.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(o) {
      const a = s.reduce((l, { useScope: d, scopeName: h }) => {
        const f = d(o)[`__scope${h}`];
        return { ...l, ...f };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return e.scopeName = t.scopeName, e;
}
var Ko = u.forwardRef((n, t) => {
  const { children: e, ...s } = n, i = u.Children.toArray(e), o = i.find(zT);
  if (o) {
    const a = o.props.children, l = i.map((d) => d === o ? u.Children.count(a) > 1 ? u.Children.only(null) : u.isValidElement(a) ? a.props.children : null : d);
    return /* @__PURE__ */ w.jsx(w9, { ...s, ref: t, children: u.isValidElement(a) ? u.cloneElement(a, void 0, l) : null });
  }
  return /* @__PURE__ */ w.jsx(w9, { ...s, ref: t, children: e });
});
Ko.displayName = "Slot";
var w9 = u.forwardRef((n, t) => {
  const { children: e, ...s } = n;
  if (u.isValidElement(e)) {
    const i = QT(e);
    return u.cloneElement(e, {
      ...YT(s, e.props),
      // @ts-ignore
      ref: t ? z2(t, i) : i
    });
  }
  return u.Children.count(e) > 1 ? u.Children.only(null) : null;
});
w9.displayName = "SlotClone";
var ng = ({ children: n }) => /* @__PURE__ */ w.jsx(w.Fragment, { children: n });
function zT(n) {
  return u.isValidElement(n) && n.type === ng;
}
function YT(n, t) {
  const e = { ...t };
  for (const s in t) {
    const i = n[s], o = t[s];
    /^on[A-Z]/.test(s) ? i && o ? e[s] = (...l) => {
      o(...l), i(...l);
    } : i && (e[s] = i) : s === "style" ? e[s] = { ...i, ...o } : s === "className" && (e[s] = [i, o].filter(Boolean).join(" "));
  }
  return { ...n, ...e };
}
function QT(n) {
  var s, i;
  let t = (s = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : s.get, e = t && "isReactWarning" in t && t.isReactWarning;
  return e ? n.ref : (t = (i = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : i.get, e = t && "isReactWarning" in t && t.isReactWarning, e ? n.props.ref : n.props.ref || n.ref);
}
var XT = [
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
], ht = XT.reduce((n, t) => {
  const e = u.forwardRef((s, i) => {
    const { asChild: o, ...a } = s, l = o ? Ko : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ w.jsx(l, { ...a, ref: i });
  });
  return e.displayName = `Primitive.${t}`, { ...n, [t]: e };
}, {});
function sg(n, t) {
  n && c5.flushSync(() => n.dispatchEvent(t));
}
function rs(n) {
  const t = u.useRef(n);
  return u.useEffect(() => {
    t.current = n;
  }), u.useMemo(() => (...e) => {
    var s;
    return (s = t.current) == null ? void 0 : s.call(t, ...e);
  }, []);
}
function JT(n, t = globalThis == null ? void 0 : globalThis.document) {
  const e = rs(n);
  u.useEffect(() => {
    const s = (i) => {
      i.key === "Escape" && e(i);
    };
    return t.addEventListener("keydown", s, { capture: !0 }), () => t.removeEventListener("keydown", s, { capture: !0 });
  }, [e, t]);
}
var eP = "DismissableLayer", x9 = "dismissableLayer.update", tP = "dismissableLayer.pointerDownOutside", nP = "dismissableLayer.focusOutside", Ad, ig = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), b7 = u.forwardRef(
  (n, t) => {
    const {
      disableOutsidePointerEvents: e = !1,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      onFocusOutside: o,
      onInteractOutside: a,
      onDismiss: l,
      ...d
    } = n, h = u.useContext(ig), [p, f] = u.useState(null), m = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, y] = u.useState({}), v = ut(t, (F) => f(F)), b = Array.from(h.layers), [S] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), E = b.indexOf(S), P = p ? b.indexOf(p) : -1, I = h.layersWithOutsidePointerEventsDisabled.size > 0, M = P >= E, D = rP((F) => {
      const k = F.target, Q = [...h.branches].some((X) => X.contains(k));
      !M || Q || (i == null || i(F), a == null || a(F), F.defaultPrevented || l == null || l());
    }, m), B = oP((F) => {
      const k = F.target;
      [...h.branches].some((X) => X.contains(k)) || (o == null || o(F), a == null || a(F), F.defaultPrevented || l == null || l());
    }, m);
    return JT((F) => {
      P === h.layers.size - 1 && (s == null || s(F), !F.defaultPrevented && l && (F.preventDefault(), l()));
    }, m), u.useEffect(() => {
      if (p)
        return e && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (Ad = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(p)), h.layers.add(p), Rd(), () => {
          e && h.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Ad);
        };
    }, [p, m, e, h]), u.useEffect(() => () => {
      p && (h.layers.delete(p), h.layersWithOutsidePointerEventsDisabled.delete(p), Rd());
    }, [p, h]), u.useEffect(() => {
      const F = () => y({});
      return document.addEventListener(x9, F), () => document.removeEventListener(x9, F);
    }, []), /* @__PURE__ */ w.jsx(
      ht.div,
      {
        ...d,
        ref: v,
        style: {
          pointerEvents: I ? M ? "auto" : "none" : void 0,
          ...n.style
        },
        onFocusCapture: ue(n.onFocusCapture, B.onFocusCapture),
        onBlurCapture: ue(n.onBlurCapture, B.onBlurCapture),
        onPointerDownCapture: ue(
          n.onPointerDownCapture,
          D.onPointerDownCapture
        )
      }
    );
  }
);
b7.displayName = eP;
var sP = "DismissableLayerBranch", iP = u.forwardRef((n, t) => {
  const e = u.useContext(ig), s = u.useRef(null), i = ut(t, s);
  return u.useEffect(() => {
    const o = s.current;
    if (o)
      return e.branches.add(o), () => {
        e.branches.delete(o);
      };
  }, [e.branches]), /* @__PURE__ */ w.jsx(ht.div, { ...n, ref: i });
});
iP.displayName = sP;
function rP(n, t = globalThis == null ? void 0 : globalThis.document) {
  const e = rs(n), s = u.useRef(!1), i = u.useRef(() => {
  });
  return u.useEffect(() => {
    const o = (l) => {
      if (l.target && !s.current) {
        let d = function() {
          rg(
            tP,
            e,
            h,
            { discrete: !0 }
          );
        };
        const h = { originalEvent: l };
        l.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = d, t.addEventListener("click", i.current, { once: !0 })) : d();
      } else
        t.removeEventListener("click", i.current);
      s.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", o), t.removeEventListener("click", i.current);
    };
  }, [t, e]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => s.current = !0
  };
}
function oP(n, t = globalThis == null ? void 0 : globalThis.document) {
  const e = rs(n), s = u.useRef(!1);
  return u.useEffect(() => {
    const i = (o) => {
      o.target && !s.current && rg(nP, e, { originalEvent: o }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, e]), {
    onFocusCapture: () => s.current = !0,
    onBlurCapture: () => s.current = !1
  };
}
function Rd() {
  const n = new CustomEvent(x9);
  document.dispatchEvent(n);
}
function rg(n, t, e, { discrete: s }) {
  const i = e.originalEvent.target, o = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: e });
  t && i.addEventListener(n, t, { once: !0 }), s ? sg(i, o) : i.dispatchEvent(o);
}
var L1 = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, aP = u.useId || (() => {
}), cP = 0;
function f2(n) {
  const [t, e] = u.useState(aP());
  return L1(() => {
    e((s) => s ?? String(cP++));
  }, [n]), t ? `radix-${t}` : "";
}
var za = typeof document < "u" ? mv : A9;
function p2(n, t) {
  if (n === t)
    return !0;
  if (typeof n != typeof t)
    return !1;
  if (typeof n == "function" && n.toString() === t.toString())
    return !0;
  let e, s, i;
  if (n && t && typeof n == "object") {
    if (Array.isArray(n)) {
      if (e = n.length, e !== t.length) return !1;
      for (s = e; s-- !== 0; )
        if (!p2(n[s], t[s]))
          return !1;
      return !0;
    }
    if (i = Object.keys(n), e = i.length, e !== Object.keys(t).length)
      return !1;
    for (s = e; s-- !== 0; )
      if (!{}.hasOwnProperty.call(t, i[s]))
        return !1;
    for (s = e; s-- !== 0; ) {
      const o = i[s];
      if (!(o === "_owner" && n.$$typeof) && !p2(n[o], t[o]))
        return !1;
    }
    return !0;
  }
  return n !== n && t !== t;
}
function og(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Nd(n, t) {
  const e = og(n);
  return Math.round(t * e) / e;
}
function Lc(n) {
  const t = u.useRef(n);
  return za(() => {
    t.current = n;
  }), t;
}
function lP(n) {
  n === void 0 && (n = {});
  const {
    placement: t = "bottom",
    strategy: e = "absolute",
    middleware: s = [],
    platform: i,
    elements: {
      reference: o,
      floating: a
    } = {},
    transform: l = !0,
    whileElementsMounted: d,
    open: h
  } = n, [p, f] = u.useState({
    x: 0,
    y: 0,
    strategy: e,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, y] = u.useState(s);
  p2(m, s) || y(s);
  const [v, b] = u.useState(null), [S, E] = u.useState(null), P = u.useCallback((K) => {
    K !== B.current && (B.current = K, b(K));
  }, []), I = u.useCallback((K) => {
    K !== F.current && (F.current = K, E(K));
  }, []), M = o || v, D = a || S, B = u.useRef(null), F = u.useRef(null), k = u.useRef(p), Q = d != null, X = Lc(d), ae = Lc(i), me = Lc(h), Y = u.useCallback(() => {
    if (!B.current || !F.current)
      return;
    const K = {
      placement: t,
      strategy: e,
      middleware: m
    };
    ae.current && (K.platform = ae.current), z5(B.current, F.current, K).then((q) => {
      const xe = {
        ...q,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: me.current !== !1
      };
      J.current && !p2(k.current, xe) && (k.current = xe, c5.flushSync(() => {
        f(xe);
      }));
    });
  }, [m, t, e, ae, me]);
  za(() => {
    h === !1 && k.current.isPositioned && (k.current.isPositioned = !1, f((K) => ({
      ...K,
      isPositioned: !1
    })));
  }, [h]);
  const J = u.useRef(!1);
  za(() => (J.current = !0, () => {
    J.current = !1;
  }), []), za(() => {
    if (M && (B.current = M), D && (F.current = D), M && D) {
      if (X.current)
        return X.current(M, D, Y);
      Y();
    }
  }, [M, D, Y, X, Q]);
  const Ee = u.useMemo(() => ({
    reference: B,
    floating: F,
    setReference: P,
    setFloating: I
  }), [P, I]), G = u.useMemo(() => ({
    reference: M,
    floating: D
  }), [M, D]), U = u.useMemo(() => {
    const K = {
      position: e,
      left: 0,
      top: 0
    };
    if (!G.floating)
      return K;
    const q = Nd(G.floating, p.x), xe = Nd(G.floating, p.y);
    return l ? {
      ...K,
      transform: "translate(" + q + "px, " + xe + "px)",
      ...og(G.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: e,
      left: q,
      top: xe
    };
  }, [e, l, G.floating, p.x, p.y]);
  return u.useMemo(() => ({
    ...p,
    update: Y,
    refs: Ee,
    elements: G,
    floatingStyles: U
  }), [p, Y, Ee, G, U]);
}
const uP = (n) => {
  function t(e) {
    return {}.hasOwnProperty.call(e, "current");
  }
  return {
    name: "arrow",
    options: n,
    fn(e) {
      const {
        element: s,
        padding: i
      } = typeof n == "function" ? n(e) : n;
      return s && t(s) ? s.current != null ? fd({
        element: s.current,
        padding: i
      }).fn(e) : {} : s ? fd({
        element: s,
        padding: i
      }).fn(e) : {};
    }
  };
}, dP = (n, t) => ({
  ...Ew(n),
  options: [n, t]
}), hP = (n, t) => ({
  ...U5(n),
  options: [n, t]
}), fP = (n, t) => ({
  ...Pw(n),
  options: [n, t]
}), pP = (n, t) => ({
  ...K5(n),
  options: [n, t]
}), CP = (n, t) => ({
  ...$w(n),
  options: [n, t]
}), mP = (n, t) => ({
  ...Tw(n),
  options: [n, t]
}), gP = (n, t) => ({
  ...uP(n),
  options: [n, t]
});
var yP = "Arrow", ag = u.forwardRef((n, t) => {
  const { children: e, width: s = 10, height: i = 5, ...o } = n;
  return /* @__PURE__ */ w.jsx(
    ht.svg,
    {
      ...o,
      ref: t,
      width: s,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: n.asChild ? e : /* @__PURE__ */ w.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
ag.displayName = yP;
var vP = ag;
function bP(n, t = []) {
  let e = [];
  function s(o, a) {
    const l = u.createContext(a), d = e.length;
    e = [...e, a];
    function h(f) {
      const { scope: m, children: y, ...v } = f, b = (m == null ? void 0 : m[n][d]) || l, S = u.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ w.jsx(b.Provider, { value: S, children: y });
    }
    function p(f, m) {
      const y = (m == null ? void 0 : m[n][d]) || l, v = u.useContext(y);
      if (v) return v;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return h.displayName = o + "Provider", [h, p];
  }
  const i = () => {
    const o = e.map((a) => u.createContext(a));
    return function(l) {
      const d = (l == null ? void 0 : l[n]) || o;
      return u.useMemo(
        () => ({ [`__scope${n}`]: { ...l, [n]: d } }),
        [l, d]
      );
    };
  };
  return i.scopeName = n, [s, wP(i, ...t)];
}
function wP(...n) {
  const t = n[0];
  if (n.length === 1) return t;
  const e = () => {
    const s = n.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(o) {
      const a = s.reduce((l, { useScope: d, scopeName: h }) => {
        const f = d(o)[`__scope${h}`];
        return { ...l, ...f };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return e.scopeName = t.scopeName, e;
}
function cg(n) {
  const [t, e] = u.useState(void 0);
  return L1(() => {
    if (n) {
      e({ width: n.offsetWidth, height: n.offsetHeight });
      const s = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const o = i[0];
        let a, l;
        if ("borderBoxSize" in o) {
          const d = o.borderBoxSize, h = Array.isArray(d) ? d[0] : d;
          a = h.inlineSize, l = h.blockSize;
        } else
          a = n.offsetWidth, l = n.offsetHeight;
        e({ width: a, height: l });
      });
      return s.observe(n, { box: "border-box" }), () => s.unobserve(n);
    } else
      e(void 0);
  }, [n]), t;
}
var w7 = "Popper", [lg, Q2] = bP(w7), [xP, ug] = lg(w7), dg = (n) => {
  const { __scopePopper: t, children: e } = n, [s, i] = u.useState(null);
  return /* @__PURE__ */ w.jsx(xP, { scope: t, anchor: s, onAnchorChange: i, children: e });
};
dg.displayName = w7;
var hg = "PopperAnchor", fg = u.forwardRef(
  (n, t) => {
    const { __scopePopper: e, virtualRef: s, ...i } = n, o = ug(hg, e), a = u.useRef(null), l = ut(t, a);
    return u.useEffect(() => {
      o.onAnchorChange((s == null ? void 0 : s.current) || a.current);
    }), s ? null : /* @__PURE__ */ w.jsx(ht.div, { ...i, ref: l });
  }
);
fg.displayName = hg;
var x7 = "PopperContent", [SP, EP] = lg(x7), pg = u.forwardRef(
  (n, t) => {
    var xt, Dt, ze, gt, Fs, as;
    const {
      __scopePopper: e,
      side: s = "bottom",
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
    } = n, S = ug(x7, e), [E, P] = u.useState(null), I = ut(t, (_n) => P(_n)), [M, D] = u.useState(null), B = cg(M), F = (B == null ? void 0 : B.width) ?? 0, k = (B == null ? void 0 : B.height) ?? 0, Q = s + (o !== "center" ? "-" + o : ""), X = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, ae = Array.isArray(h) ? h : [h], me = ae.length > 0, Y = {
      padding: X,
      boundary: ae.filter(TP),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: me
    }, { refs: J, floatingStyles: Ee, placement: G, isPositioned: U, middlewareData: K } = lP({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: Q,
      whileElementsMounted: (..._n) => W5(..._n, {
        animationFrame: y === "always"
      }),
      elements: {
        reference: S.anchor
      },
      middleware: [
        dP({ mainAxis: i + k, alignmentAxis: a }),
        d && hP({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? fP() : void 0,
          ...Y
        }),
        d && pP({ ...Y }),
        CP({
          ...Y,
          apply: ({ elements: _n, rects: Li, availableWidth: js, availableHeight: cs }) => {
            const { width: la, height: ua } = Li.reference, qs = _n.floating.style;
            qs.setProperty("--radix-popper-available-width", `${js}px`), qs.setProperty("--radix-popper-available-height", `${cs}px`), qs.setProperty("--radix-popper-anchor-width", `${la}px`), qs.setProperty("--radix-popper-anchor-height", `${ua}px`);
          }
        }),
        M && gP({ element: M, padding: l }),
        PP({ arrowWidth: F, arrowHeight: k }),
        m && mP({ strategy: "referenceHidden", ...Y })
      ]
    }), [q, xe] = gg(G), Ke = rs(v);
    L1(() => {
      U && (Ke == null || Ke());
    }, [U, Ke]);
    const Pt = (xt = K.arrow) == null ? void 0 : xt.x, rn = (Dt = K.arrow) == null ? void 0 : Dt.y, En = ((ze = K.arrow) == null ? void 0 : ze.centerOffset) !== 0, [Dn, Ht] = u.useState();
    return L1(() => {
      E && Ht(window.getComputedStyle(E).zIndex);
    }, [E]), /* @__PURE__ */ w.jsx(
      "div",
      {
        ref: J.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Ee,
          transform: U ? Ee.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Dn,
          "--radix-popper-transform-origin": [
            (gt = K.transformOrigin) == null ? void 0 : gt.x,
            (Fs = K.transformOrigin) == null ? void 0 : Fs.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((as = K.hide) == null ? void 0 : as.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: n.dir,
        children: /* @__PURE__ */ w.jsx(
          SP,
          {
            scope: e,
            placedSide: q,
            onArrowChange: D,
            arrowX: Pt,
            arrowY: rn,
            shouldHideArrow: En,
            children: /* @__PURE__ */ w.jsx(
              ht.div,
              {
                "data-side": q,
                "data-align": xe,
                ...b,
                ref: I,
                style: {
                  ...b.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: U ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
pg.displayName = x7;
var Cg = "PopperArrow", $P = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, mg = u.forwardRef(function(t, e) {
  const { __scopePopper: s, ...i } = t, o = EP(Cg, s), a = $P[o.placedSide];
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
          vP,
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
mg.displayName = Cg;
function TP(n) {
  return n !== null;
}
var PP = (n) => ({
  name: "transformOrigin",
  options: n,
  fn(t) {
    var S, E, P;
    const { placement: e, rects: s, middlewareData: i } = t, a = ((S = i.arrow) == null ? void 0 : S.centerOffset) !== 0, l = a ? 0 : n.arrowWidth, d = a ? 0 : n.arrowHeight, [h, p] = gg(e), f = { start: "0%", center: "50%", end: "100%" }[p], m = (((E = i.arrow) == null ? void 0 : E.x) ?? 0) + l / 2, y = (((P = i.arrow) == null ? void 0 : P.y) ?? 0) + d / 2;
    let v = "", b = "";
    return h === "bottom" ? (v = a ? f : `${m}px`, b = `${-d}px`) : h === "top" ? (v = a ? f : `${m}px`, b = `${s.floating.height + d}px`) : h === "right" ? (v = `${-d}px`, b = a ? f : `${y}px`) : h === "left" && (v = `${s.floating.width + d}px`, b = a ? f : `${y}px`), { data: { x: v, y: b } };
  }
});
function gg(n) {
  const [t, e = "center"] = n.split("-");
  return [t, e];
}
var yg = dg, vg = fg, bg = pg, wg = mg, LP = "Portal", xg = u.forwardRef((n, t) => {
  var l;
  const { container: e, ...s } = n, [i, o] = u.useState(!1);
  L1(() => o(!0), []);
  const a = e || i && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return a ? yv.createPortal(/* @__PURE__ */ w.jsx(ht.div, { ...s, ref: t }), a) : null;
});
xg.displayName = LP;
function kP(n, t) {
  return u.useReducer((e, s) => t[e][s] ?? e, n);
}
var xo = (n) => {
  const { present: t, children: e } = n, s = MP(t), i = typeof e == "function" ? e({ present: s.isPresent }) : u.Children.only(e), o = ut(s.ref, IP(i));
  return typeof e == "function" || s.isPresent ? u.cloneElement(i, { ref: o }) : null;
};
xo.displayName = "Presence";
function MP(n) {
  const [t, e] = u.useState(), s = u.useRef({}), i = u.useRef(n), o = u.useRef("none"), a = n ? "mounted" : "unmounted", [l, d] = kP(a, {
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
    const h = ma(s.current);
    o.current = l === "mounted" ? h : "none";
  }, [l]), L1(() => {
    const h = s.current, p = i.current;
    if (p !== n) {
      const m = o.current, y = ma(h);
      n ? d("MOUNT") : y === "none" || (h == null ? void 0 : h.display) === "none" ? d("UNMOUNT") : d(p && m !== y ? "ANIMATION_OUT" : "UNMOUNT"), i.current = n;
    }
  }, [n, d]), L1(() => {
    if (t) {
      let h;
      const p = t.ownerDocument.defaultView ?? window, f = (y) => {
        const b = ma(s.current).includes(y.animationName);
        if (y.target === t && b && (d("ANIMATION_END"), !i.current)) {
          const S = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", h = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S);
          });
        }
      }, m = (y) => {
        y.target === t && (o.current = ma(s.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        p.clearTimeout(h), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      d("ANIMATION_END");
  }, [t, d]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: u.useCallback((h) => {
      h && (s.current = getComputedStyle(h)), e(h);
    }, [])
  };
}
function ma(n) {
  return (n == null ? void 0 : n.animationName) || "none";
}
function IP(n) {
  var s, i;
  let t = (s = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : s.get, e = t && "isReactWarning" in t && t.isReactWarning;
  return e ? n.ref : (t = (i = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : i.get, e = t && "isReactWarning" in t && t.isReactWarning, e ? n.props.ref : n.props.ref || n.ref);
}
function X2({
  prop: n,
  defaultProp: t,
  onChange: e = () => {
  }
}) {
  const [s, i] = VP({ defaultProp: t, onChange: e }), o = n !== void 0, a = o ? n : s, l = rs(e), d = u.useCallback(
    (h) => {
      if (o) {
        const f = typeof h == "function" ? h(n) : h;
        f !== n && l(f);
      } else
        i(h);
    },
    [o, n, i, l]
  );
  return [a, d];
}
function VP({
  defaultProp: n,
  onChange: t
}) {
  const e = u.useState(n), [s] = e, i = u.useRef(s), o = rs(t);
  return u.useEffect(() => {
    i.current !== s && (o(s), i.current = s);
  }, [s, i, o]), e;
}
var AP = "VisuallyHidden", Sg = u.forwardRef(
  (n, t) => /* @__PURE__ */ w.jsx(
    ht.span,
    {
      ...n,
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
        ...n.style
      }
    }
  )
);
Sg.displayName = AP;
var RP = Sg, [J2, HN] = Y2("Tooltip", [
  Q2
]), ec = Q2(), Eg = "TooltipProvider", NP = 700, S9 = "tooltip.open", [HP, S7] = J2(Eg), $g = (n) => {
  const {
    __scopeTooltip: t,
    delayDuration: e = NP,
    skipDelayDuration: s = 300,
    disableHoverableContent: i = !1,
    children: o
  } = n, [a, l] = u.useState(!0), d = u.useRef(!1), h = u.useRef(0);
  return u.useEffect(() => {
    const p = h.current;
    return () => window.clearTimeout(p);
  }, []), /* @__PURE__ */ w.jsx(
    HP,
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
          s
        );
      }, [s]),
      isPointerInTransitRef: d,
      onPointerInTransitChange: u.useCallback((p) => {
        d.current = p;
      }, []),
      disableHoverableContent: i,
      children: o
    }
  );
};
$g.displayName = Eg;
var tc = "Tooltip", [OP, nc] = J2(tc), Tg = (n) => {
  const {
    __scopeTooltip: t,
    children: e,
    open: s,
    defaultOpen: i = !1,
    onOpenChange: o,
    disableHoverableContent: a,
    delayDuration: l
  } = n, d = S7(tc, n.__scopeTooltip), h = ec(t), [p, f] = u.useState(null), m = f2(), y = u.useRef(0), v = a ?? d.disableHoverableContent, b = l ?? d.delayDuration, S = u.useRef(!1), [E = !1, P] = X2({
    prop: s,
    defaultProp: i,
    onChange: (F) => {
      F ? (d.onOpen(), document.dispatchEvent(new CustomEvent(S9))) : d.onClose(), o == null || o(F);
    }
  }), I = u.useMemo(() => E ? S.current ? "delayed-open" : "instant-open" : "closed", [E]), M = u.useCallback(() => {
    window.clearTimeout(y.current), y.current = 0, S.current = !1, P(!0);
  }, [P]), D = u.useCallback(() => {
    window.clearTimeout(y.current), y.current = 0, P(!1);
  }, [P]), B = u.useCallback(() => {
    window.clearTimeout(y.current), y.current = window.setTimeout(() => {
      S.current = !0, P(!0), y.current = 0;
    }, b);
  }, [b, P]);
  return u.useEffect(() => () => {
    y.current && (window.clearTimeout(y.current), y.current = 0);
  }, []), /* @__PURE__ */ w.jsx(yg, { ...h, children: /* @__PURE__ */ w.jsx(
    OP,
    {
      scope: t,
      contentId: m,
      open: E,
      stateAttribute: I,
      trigger: p,
      onTriggerChange: f,
      onTriggerEnter: u.useCallback(() => {
        d.isOpenDelayed ? B() : M();
      }, [d.isOpenDelayed, B, M]),
      onTriggerLeave: u.useCallback(() => {
        v ? D() : (window.clearTimeout(y.current), y.current = 0);
      }, [D, v]),
      onOpen: M,
      onClose: D,
      disableHoverableContent: v,
      children: e
    }
  ) });
};
Tg.displayName = tc;
var E9 = "TooltipTrigger", Pg = u.forwardRef(
  (n, t) => {
    const { __scopeTooltip: e, ...s } = n, i = nc(E9, e), o = S7(E9, e), a = ec(e), l = u.useRef(null), d = ut(t, l, i.onTriggerChange), h = u.useRef(!1), p = u.useRef(!1), f = u.useCallback(() => h.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ w.jsx(vg, { asChild: !0, ...a, children: /* @__PURE__ */ w.jsx(
      ht.button,
      {
        "aria-describedby": i.open ? i.contentId : void 0,
        "data-state": i.stateAttribute,
        ...s,
        ref: d,
        onPointerMove: ue(n.onPointerMove, (m) => {
          m.pointerType !== "touch" && !p.current && !o.isPointerInTransitRef.current && (i.onTriggerEnter(), p.current = !0);
        }),
        onPointerLeave: ue(n.onPointerLeave, () => {
          i.onTriggerLeave(), p.current = !1;
        }),
        onPointerDown: ue(n.onPointerDown, () => {
          h.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: ue(n.onFocus, () => {
          h.current || i.onOpen();
        }),
        onBlur: ue(n.onBlur, i.onClose),
        onClick: ue(n.onClick, i.onClose)
      }
    ) });
  }
);
Pg.displayName = E9;
var DP = "TooltipPortal", [ON, _P] = J2(DP, {
  forceMount: void 0
}), lo = "TooltipContent", Lg = u.forwardRef(
  (n, t) => {
    const e = _P(lo, n.__scopeTooltip), { forceMount: s = e.forceMount, side: i = "top", ...o } = n, a = nc(lo, n.__scopeTooltip);
    return /* @__PURE__ */ w.jsx(xo, { present: s || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ w.jsx(kg, { side: i, ...o, ref: t }) : /* @__PURE__ */ w.jsx(FP, { side: i, ...o, ref: t }) });
  }
), FP = u.forwardRef((n, t) => {
  const e = nc(lo, n.__scopeTooltip), s = S7(lo, n.__scopeTooltip), i = u.useRef(null), o = ut(t, i), [a, l] = u.useState(null), { trigger: d, onClose: h } = e, p = i.current, { onPointerInTransitChange: f } = s, m = u.useCallback(() => {
    l(null), f(!1);
  }, [f]), y = u.useCallback(
    (v, b) => {
      const S = v.currentTarget, E = { x: v.clientX, y: v.clientY }, P = BP(E, S.getBoundingClientRect()), I = GP(E, P), M = WP(b.getBoundingClientRect()), D = KP([...I, ...M]);
      l(D), f(!0);
    },
    [f]
  );
  return u.useEffect(() => () => m(), [m]), u.useEffect(() => {
    if (d && p) {
      const v = (S) => y(S, p), b = (S) => y(S, d);
      return d.addEventListener("pointerleave", v), p.addEventListener("pointerleave", b), () => {
        d.removeEventListener("pointerleave", v), p.removeEventListener("pointerleave", b);
      };
    }
  }, [d, p, y, m]), u.useEffect(() => {
    if (a) {
      const v = (b) => {
        const S = b.target, E = { x: b.clientX, y: b.clientY }, P = (d == null ? void 0 : d.contains(S)) || (p == null ? void 0 : p.contains(S)), I = !UP(E, a);
        P ? m() : I && (m(), h());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [d, p, a, h, m]), /* @__PURE__ */ w.jsx(kg, { ...n, ref: o });
}), [jP, qP] = J2(tc, { isInside: !1 }), kg = u.forwardRef(
  (n, t) => {
    const {
      __scopeTooltip: e,
      children: s,
      "aria-label": i,
      onEscapeKeyDown: o,
      onPointerDownOutside: a,
      ...l
    } = n, d = nc(lo, e), h = ec(e), { onClose: p } = d;
    return u.useEffect(() => (document.addEventListener(S9, p), () => document.removeEventListener(S9, p)), [p]), u.useEffect(() => {
      if (d.trigger) {
        const f = (m) => {
          const y = m.target;
          y != null && y.contains(d.trigger) && p();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [d.trigger, p]), /* @__PURE__ */ w.jsx(
      b7,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: a,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ w.jsxs(
          bg,
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
              /* @__PURE__ */ w.jsx(ng, { children: s }),
              /* @__PURE__ */ w.jsx(jP, { scope: e, isInside: !0, children: /* @__PURE__ */ w.jsx(RP, { id: d.contentId, role: "tooltip", children: i || s }) })
            ]
          }
        )
      }
    );
  }
);
Lg.displayName = lo;
var Mg = "TooltipArrow", ZP = u.forwardRef(
  (n, t) => {
    const { __scopeTooltip: e, ...s } = n, i = ec(e);
    return qP(
      Mg,
      e
    ).isInside ? null : /* @__PURE__ */ w.jsx(wg, { ...i, ...s, ref: t });
  }
);
ZP.displayName = Mg;
function BP(n, t) {
  const e = Math.abs(t.top - n.y), s = Math.abs(t.bottom - n.y), i = Math.abs(t.right - n.x), o = Math.abs(t.left - n.x);
  switch (Math.min(e, s, i, o)) {
    case o:
      return "left";
    case i:
      return "right";
    case e:
      return "top";
    case s:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function GP(n, t, e = 5) {
  const s = [];
  switch (t) {
    case "top":
      s.push(
        { x: n.x - e, y: n.y + e },
        { x: n.x + e, y: n.y + e }
      );
      break;
    case "bottom":
      s.push(
        { x: n.x - e, y: n.y - e },
        { x: n.x + e, y: n.y - e }
      );
      break;
    case "left":
      s.push(
        { x: n.x + e, y: n.y - e },
        { x: n.x + e, y: n.y + e }
      );
      break;
    case "right":
      s.push(
        { x: n.x - e, y: n.y - e },
        { x: n.x - e, y: n.y + e }
      );
      break;
  }
  return s;
}
function WP(n) {
  const { top: t, right: e, bottom: s, left: i } = n;
  return [
    { x: i, y: t },
    { x: e, y: t },
    { x: e, y: s },
    { x: i, y: s }
  ];
}
function UP(n, t) {
  const { x: e, y: s } = n;
  let i = !1;
  for (let o = 0, a = t.length - 1; o < t.length; a = o++) {
    const l = t[o].x, d = t[o].y, h = t[a].x, p = t[a].y;
    d > s != p > s && e < (h - l) * (s - d) / (p - d) + l && (i = !i);
  }
  return i;
}
function KP(n) {
  const t = n.slice();
  return t.sort((e, s) => e.x < s.x ? -1 : e.x > s.x ? 1 : e.y < s.y ? -1 : e.y > s.y ? 1 : 0), zP(t);
}
function zP(n) {
  if (n.length <= 1) return n.slice();
  const t = [];
  for (let s = 0; s < n.length; s++) {
    const i = n[s];
    for (; t.length >= 2; ) {
      const o = t[t.length - 1], a = t[t.length - 2];
      if ((o.x - a.x) * (i.y - a.y) >= (o.y - a.y) * (i.x - a.x)) t.pop();
      else break;
    }
    t.push(i);
  }
  t.pop();
  const e = [];
  for (let s = n.length - 1; s >= 0; s--) {
    const i = n[s];
    for (; e.length >= 2; ) {
      const o = e[e.length - 1], a = e[e.length - 2];
      if ((o.x - a.x) * (i.y - a.y) >= (o.y - a.y) * (i.x - a.x)) e.pop();
      else break;
    }
    e.push(i);
  }
  return e.pop(), t.length === 1 && e.length === 1 && t[0].x === e[0].x && t[0].y === e[0].y ? t : t.concat(e);
}
var YP = $g, So = Tg, Eo = Pg, $o = Lg, QP = {
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
const XP = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _s = (n, t) => {
  const e = R(
    ({ color: s = "currentColor", size: i = 24, strokeWidth: o = 2, absoluteStrokeWidth: a, children: l, ...d }, h) => V(
      "svg",
      {
        ref: h,
        ...QP,
        width: i,
        height: i,
        stroke: s,
        strokeWidth: a ? Number(o) * 24 / Number(i) : o,
        className: `lucide lucide-${XP(n)}`,
        ...d
      },
      [
        ...t.map(([p, f]) => V(p, f)),
        ...(Array.isArray(l) ? l : [l]) || []
      ]
    )
  );
  return e.displayName = `${n}`, e;
}, Hd = _s("Bookmark", [
  [
    "path",
    { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }
  ]
]), JP = _s("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["polyline", { points: "22 4 12 14.01 9 11.01", key: "6xbx8j" }]
]), eL = _s("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), tL = _s("Maximize", [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
]), nL = _s("Minimize", [
  ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
  ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
  ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
  ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]
]), sL = _s("Pause", [
  ["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }],
  ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }]
]), iL = _s("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]), rL = _s("Volume1", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }]
]), oL = _s("Volume2", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }],
  ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", key: "1kegas" }]
]), aL = _s("VolumeX", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
]);
var cL = '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0007 28.7923C15.0007 29.0152 14.9774 29.096 14.9339 29.1775C14.8903 29.259 14.8263 29.323 14.7449 29.3665C14.6634 29.4101 14.5826 29.4333 14.3597 29.4333H12.575C12.3521 29.4333 12.2713 29.4101 12.1898 29.3665C12.1083 29.323 12.0443 29.259 12.0008 29.1775C11.9572 29.096 11.934 29.0152 11.934 28.7923V12.2993L5.97496 12.3C5.75208 12.3 5.67125 12.2768 5.58977 12.2332C5.50829 12.1896 5.44434 12.1257 5.40077 12.0442C5.35719 11.9627 5.33398 11.8819 5.33398 11.659V9.87429C5.33398 9.65141 5.35719 9.57059 5.40077 9.48911C5.44434 9.40762 5.50829 9.34368 5.58977 9.3001C5.67125 9.25652 5.75208 9.23332 5.97496 9.23332H26.0263C26.2492 9.23332 26.33 9.25652 26.4115 9.3001C26.493 9.34368 26.557 9.40762 26.6005 9.48911C26.6441 9.57059 26.6673 9.65141 26.6673 9.87429V11.659C26.6673 11.8819 26.6441 11.9627 26.6005 12.0442C26.557 12.1257 26.493 12.1896 26.4115 12.2332C26.33 12.2768 26.2492 12.3 26.0263 12.3L20.067 12.2993L20.0673 28.7923C20.0673 29.0152 20.0441 29.096 20.0005 29.1775C19.957 29.259 19.893 29.323 19.8115 29.3665C19.73 29.4101 19.6492 29.4333 19.4263 29.4333H17.6416C17.4187 29.4333 17.3379 29.4101 17.2564 29.3665C17.175 29.323 17.111 29.259 17.0674 29.1775C17.0239 29.096 17.0007 29.0152 17.0007 28.7923L17 22.7663H15L15.0007 28.7923Z" fill="currentColor"/> <path d="M16.0007 7.89998C17.4734 7.89998 18.6673 6.70608 18.6673 5.23332C18.6673 3.76056 17.4734 2.56665 16.0007 2.56665C14.5279 2.56665 13.334 3.76056 13.334 5.23332C13.334 6.70608 14.5279 7.89998 16.0007 7.89998Z" fill="currentColor"/>', lL = '<path d="M7.33332 6.66669C6.96513 6.66669 6.66666 6.96516 6.66666 7.33335V9.33335C6.66666 9.70154 6.96513 10 7.33332 10H20.6667C21.0348 10 21.3333 9.70154 21.3333 9.33335V7.33335C21.3333 6.96516 21.0348 6.66669 20.6667 6.66669H7.33332Z" fill="currentColor"/> <path d="M19.4404 21.8188C19.3882 21.9307 19.3681 22.0549 19.3824 22.1776L19.6028 24.0711C19.6602 24.5641 20.217 24.8238 20.6316 24.5508L22.2238 23.5026C22.327 23.4347 22.4092 23.3394 22.4614 23.2275L27.7186 11.9534C27.8742 11.6197 27.7298 11.2231 27.3962 11.0675L25.5835 10.2222C25.2498 10.0666 24.8532 10.211 24.6976 10.5447L19.4404 21.8188Z" fill="currentColor"/> <path d="M7.33332 21.3334C6.96513 21.3334 6.66666 21.6318 6.66666 22V24C6.66666 24.3682 6.96513 24.6667 7.33332 24.6667H15.3333C15.7015 24.6667 16 24.3682 16 24V22C16 21.6318 15.7015 21.3334 15.3333 21.3334H7.33332Z" fill="currentColor"/> <path d="M6.66666 14.6667C6.66666 14.2985 6.96513 14 7.33332 14H18C18.3682 14 18.6667 14.2985 18.6667 14.6667V16.6667C18.6667 17.0349 18.3682 17.3334 18 17.3334H7.33332C6.96513 17.3334 6.66666 17.0349 6.66666 16.6667V14.6667Z" fill="currentColor"/>', uL = '<path d="M7.33335 6.66667C6.96516 6.66667 6.66669 6.96515 6.66669 7.33334V9.33334C6.66669 9.70153 6.96516 10 7.33335 10H24.6667C25.0349 10 25.3334 9.70153 25.3334 9.33334V7.33334C25.3334 6.96515 25.0349 6.66667 24.6667 6.66667H7.33335Z" fill="currentColor"/> <path d="M6.66669 14.6667C6.66669 14.2985 6.96516 14 7.33335 14H18.6654C19.0336 14 19.3321 14.2985 19.3321 14.6667V16.6667C19.3321 17.0349 19.0336 17.3333 18.6654 17.3333H7.33335C6.96516 17.3333 6.66669 17.0349 6.66669 16.6667V14.6667Z" fill="currentColor"/> <path d="M25.3321 26.0039C25.3321 26.3721 25.0336 26.6706 24.6654 26.6706H23.3321C22.9639 26.6706 22.6654 26.3721 22.6654 26.0039V23.4706C22.6654 23.3969 22.6057 23.3372 22.5321 23.3372H19.9987C19.6305 23.3372 19.3321 23.0388 19.3321 22.6706V21.3372C19.3321 20.9691 19.6305 20.6706 19.9987 20.6706H22.5321C22.6057 20.6706 22.6654 20.6109 22.6654 20.5372V18.0039C22.6654 17.6357 22.9639 17.3372 23.3321 17.3372H24.6654C25.0336 17.3372 25.3321 17.6357 25.3321 18.0039V20.5372C25.3321 20.6109 25.3917 20.6706 25.4654 20.6706H27.9987C28.3669 20.6706 28.6654 20.9691 28.6654 21.3372V22.6706C28.6654 23.0388 28.3669 23.3372 27.9987 23.3372H25.4654C25.3917 23.3372 25.3321 23.3969 25.3321 23.4706V26.0039Z" fill="currentColor"/> <path d="M7.33335 21.3333C6.96516 21.3333 6.66669 21.6318 6.66669 22V24C6.66669 24.3682 6.96516 24.6667 7.33335 24.6667H15.3334C15.7015 24.6667 16 24.3682 16 24V22C16 21.6318 15.7015 21.3333 15.3334 21.3333H7.33335Z" fill="currentColor"/>', dL = '<path d="M20.6667 10.6666C20.6667 13.6122 18.2789 16 15.3333 16C12.3878 16 10 13.6122 10 10.6666C10 7.72113 12.3878 5.33331 15.3333 5.33331C18.2789 5.33331 20.6667 7.72113 20.6667 10.6666Z" fill="currentColor"/> <path d="M10.6667 18C7.72115 18 5.33334 20.3878 5.33334 23.3333V26.5333C5.33334 26.607 5.39303 26.6666 5.46667 26.6666H8.53334C8.60697 26.6666 8.66667 26.607 8.66667 26.5333V24C8.66667 22.5272 9.86058 21.3333 11.3333 21.3333H17.2C17.2736 21.3333 17.3333 21.2736 17.3333 21.2V18.1333C17.3333 18.0597 17.2736 18 17.2 18H10.6667Z" fill="currentColor"/> <path d="M26 26.6666C26.3682 26.6666 26.6667 26.3682 26.6667 26V24.6666C26.6667 24.2985 26.3682 24 26 24H23.4667C23.393 24 23.3333 23.9403 23.3333 23.8666V21.3333C23.3333 20.9651 23.0349 20.6666 22.6667 20.6666H21.3333C20.9651 20.6666 20.6667 20.9651 20.6667 21.3333V23.8666C20.6667 23.9403 20.607 24 20.5333 24H18C17.6318 24 17.3333 24.2985 17.3333 24.6666V26C17.3333 26.3682 17.6318 26.6666 18 26.6666H20.5333C20.607 26.6666 20.6667 26.7263 20.6667 26.8V29.3333C20.6667 29.7015 20.9651 30 21.3333 30H22.6667C23.0349 30 23.3333 29.7015 23.3333 29.3333V26.8C23.3333 26.7263 23.393 26.6666 23.4667 26.6666H26Z" fill="currentColor"/>', hL = '<path d="M17.1336 24.6659C17.5018 24.6659 17.8003 24.3675 17.8003 23.9993V17.9324C17.8003 17.8588 17.86 17.7991 17.9336 17.7991H23.9999C24.3681 17.7991 24.6666 17.5006 24.6666 17.1324V14.8657C24.6666 14.4976 24.3681 14.1991 23.9999 14.1991L17.9336 14.1991C17.86 14.1991 17.8003 14.1394 17.8003 14.0657V7.99928C17.8003 7.63109 17.5018 7.33261 17.1336 7.33261H14.867C14.4988 7.33261 14.2003 7.63109 14.2003 7.99928V14.0657C14.2003 14.1394 14.1406 14.1991 14.067 14.1991L7.99992 14.1991C7.63173 14.1991 7.33325 14.4976 7.33325 14.8658V17.1324C7.33325 17.5006 7.63173 17.7991 7.99992 17.7991L14.067 17.7991C14.1406 17.7991 14.2003 17.8588 14.2003 17.9324V23.9993C14.2003 24.3675 14.4988 24.6659 14.867 24.6659H17.1336Z" fill="currentColor"/>', fL = '<path d="M5.33334 6.00001C5.33334 5.63182 5.63181 5.33334 6 5.33334H26C26.3682 5.33334 26.6667 5.63182 26.6667 6.00001V20.6667C26.6667 21.0349 26.3682 21.3333 26 21.3333H23.7072C23.4956 21.3333 23.2966 21.233 23.171 21.0628L22.1859 19.7295C21.8607 19.2894 22.1749 18.6667 22.7221 18.6667H23.3333C23.7015 18.6667 24 18.3682 24 18V8.66668C24 8.29849 23.7015 8.00001 23.3333 8.00001H8.66667C8.29848 8.00001 8 8.29849 8 8.66668V18C8 18.3682 8.29848 18.6667 8.66667 18.6667H9.29357C9.84072 18.6667 10.1549 19.2894 9.82976 19.7295L8.84467 21.0628C8.71898 21.233 8.52 21.3333 8.30848 21.3333H6C5.63181 21.3333 5.33334 21.0349 5.33334 20.6667V6.00001Z" fill="currentColor"/> <path d="M8.78528 25.6038C8.46013 26.0439 8.77431 26.6667 9.32147 26.6667L22.6785 26.6667C23.2256 26.6667 23.5398 26.0439 23.2146 25.6038L16.5358 16.5653C16.2693 16.2046 15.73 16.2047 15.4635 16.5653L8.78528 25.6038Z" fill="currentColor"/>', pL = '<path d="M23.2629 22.1274C23.5232 22.3878 23.9453 22.3878 24.2057 22.1274L25.4313 20.9018C25.6917 20.6414 25.6917 20.2193 25.4313 19.959L23.2322 17.7598C23.1482 17.6758 23.2077 17.5322 23.3265 17.5322H28.8488C29.217 17.5322 29.5155 17.2337 29.5155 16.8655V15.1322C29.5155 14.764 29.217 14.4655 28.8488 14.4655H23.3261C23.2073 14.4655 23.1478 14.3219 23.2318 14.2379L25.4308 12.0389C25.6912 11.7785 25.6912 11.3564 25.4308 11.0961L24.2052 9.87043C23.9448 9.61008 23.5227 9.61008 23.2624 9.87043L17.6055 15.5273C17.3452 15.7876 17.3452 16.2097 17.6055 16.4701L23.2629 22.1274Z" fill="currentColor"/> <path d="M13.1681 14.3022L8.73714 9.87124C8.47679 9.61089 8.05468 9.61089 7.79433 9.87124L6.56868 11.0969C6.30833 11.3572 6.30833 11.7794 6.56868 12.0397L8.76784 14.2389C8.85184 14.3229 8.79235 14.4665 8.67356 14.4665L3.15118 14.4665C2.78299 14.4665 2.48451 14.765 2.48451 15.1331V16.8665C2.48451 17.2347 2.78299 17.5331 3.15118 17.5331L8.67393 17.5331C8.79272 17.5331 8.8522 17.6768 8.76821 17.7608L6.56918 19.9598C6.30883 20.2201 6.30883 20.6423 6.56917 20.9026L7.79483 22.1283C8.05518 22.3886 8.47729 22.3886 8.73764 22.1283L14.3945 16.4714C14.6548 16.211 14.6548 15.7889 14.3945 15.5286L13.1681 14.3022Z" fill="currentColor"/>', CL = '<path d="M12.0904 14.3331C11.9716 14.3331 11.9122 14.1895 11.9962 14.1055L15.7588 10.3428C16.0192 10.0824 16.0192 9.66032 15.7588 9.39997L14.3446 7.98576C14.0843 7.72541 13.6622 7.72541 13.4018 7.98576L5.85934 15.5282C5.59899 15.7886 5.59899 16.2107 5.85934 16.471L7.27356 17.8853C7.27327 17.885 7.27384 17.8855 7.27356 17.8853L13.4021 24.0138C13.6624 24.2741 14.0845 24.2741 14.3449 24.0138L15.7591 22.5995C16.0194 22.3392 16.0194 21.9171 15.7591 21.6567L11.9964 17.894C11.9124 17.81 11.9719 17.6664 12.0907 17.6664H19.6667C20.0349 17.6664 20.3334 17.3679 20.3334 16.9997V14.9997C20.3334 14.6316 20.0349 14.3331 19.6667 14.3331H12.0904Z" fill="currentColor"/> <path d="M25 7.9831C24.6318 7.9831 24.3334 8.28158 24.3334 8.64977V23.3164C24.3334 23.6846 24.6318 23.9831 25 23.9831H27C27.3682 23.9831 27.6667 23.6846 27.6667 23.3164V8.64977C27.6667 8.28158 27.3682 7.9831 27 7.9831H25Z" fill="currentColor"/>', mL = '<path d="M17.4853 18.9093C17.4853 19.0281 17.6289 19.0875 17.7129 19.0035L22.4185 14.2979C22.6788 14.0376 23.1009 14.0376 23.3613 14.2979L24.7755 15.7122C25.0359 15.9725 25.0359 16.3946 24.7755 16.655L16.2902 25.1403C16.0299 25.4006 15.6078 25.4006 15.3474 25.1403L13.9332 23.726L13.9319 23.7247L6.86189 16.6547C6.60154 16.3944 6.60154 15.9723 6.86189 15.7119L8.2761 14.2977C8.53645 14.0373 8.95856 14.0373 9.21891 14.2977L13.9243 19.0031C14.0083 19.0871 14.1519 19.0276 14.1519 18.9088L14.1519 6.00004C14.1519 5.63185 14.4504 5.33337 14.8186 5.33337L16.8186 5.33337C17.1868 5.33337 17.4853 5.63185 17.4853 6.00004L17.4853 18.9093Z" fill="currentColor"/>', gL = '<path d="M30.577 15.5268L24.9201 9.86998C24.6597 9.60963 24.2376 9.60963 23.9773 9.86998L22.7516 11.0956C22.4913 11.356 22.4913 11.7781 22.7516 12.0384L24.9508 14.2376C25.0348 14.3216 24.9753 14.4652 24.8565 14.4652L19.3341 14.4652C18.9659 14.4652 18.6675 14.7637 18.6675 15.1319V16.8652C18.6675 17.2334 18.9659 17.5319 19.3341 17.5319L24.8569 17.5319C24.9757 17.5319 25.0352 17.6755 24.9512 17.7595L22.7521 19.9585C22.4918 20.2189 22.4918 20.641 22.7521 20.9013L23.9778 22.127C24.2381 22.3873 24.6602 22.3873 24.9206 22.127L30.5774 16.4701C30.8378 16.2098 30.8373 15.7872 30.577 15.5268Z" fill="currentColor"/> <path d="M2.64825 17.6971C2.64808 17.6969 2.64843 17.6973 2.64825 17.6971L1.42309 16.4719C1.16274 16.2116 1.16225 15.789 1.4226 15.5286L7.07945 9.87177C7.3398 9.61142 7.76191 9.61142 8.02226 9.87177L9.24792 11.0974C9.50827 11.3578 9.50826 11.7799 9.24792 12.0402L7.04888 14.2393C6.96489 14.3233 7.02437 14.4669 7.14316 14.4669H12.6659C13.0341 14.4669 13.3326 14.7654 13.3326 15.1335V16.8669C13.3326 17.2351 13.0341 17.5335 12.6659 17.5335H7.14353C7.02474 17.5335 6.96525 17.6772 7.04925 17.7612L9.24841 19.9603C9.50876 20.2207 9.50876 20.6428 9.24841 20.9031L8.02276 22.1288C7.76241 22.3891 7.3403 22.3891 7.07995 22.1288L2.64825 17.6971Z" fill="currentColor"/>', yL = '<path d="M17.2412 10.3428L21.0042 14.1058C21.0882 14.1897 21.0287 14.3334 20.9099 14.3334H13.3333C12.9651 14.3334 12.6667 14.6318 12.6667 15L12.6667 17C12.6667 17.3682 12.9651 17.6667 13.3333 17.6667L20.9091 17.6667C21.0279 17.6667 21.0874 17.8103 21.0034 17.8943L17.2409 21.6567C16.9806 21.9171 16.9806 22.3392 17.2409 22.5995L18.6552 24.0138C18.9155 24.2741 19.3376 24.2741 19.598 24.0138L27.1404 16.4713C27.4008 16.2109 27.401 15.7886 27.1407 15.5282L19.5982 7.98576C19.3379 7.72541 18.9158 7.72541 18.6554 7.98576L17.2412 9.39997C16.9808 9.66032 16.9808 10.0824 17.2412 10.3428Z" fill="currentColor"/> <path d="M8 7.9831C8.36819 7.9831 8.66667 8.28158 8.66667 8.64977V23.3164C8.66667 23.6846 8.36819 23.9831 8 23.9831H6C5.63181 23.9831 5.33334 23.6846 5.33334 23.3164V8.64977C5.33334 8.28158 5.63181 7.9831 6 7.9831H8Z" fill="currentColor"/>', vL = '<path d="M13.0908 14.3334C12.972 14.3334 12.9125 14.1898 12.9965 14.1058L17.7021 9.40022C17.9625 9.13987 17.9625 8.71776 17.7021 8.45741L16.2879 7.04319C16.0275 6.78284 15.6054 6.78284 15.3451 7.04319L6.8598 15.5285C6.59945 15.7888 6.59945 16.2109 6.8598 16.4713L8.27401 17.8855L8.27536 17.8868L15.3453 24.9568C15.6057 25.2172 16.0278 25.2172 16.2881 24.9568L17.7024 23.5426C17.9627 23.2822 17.9627 22.8601 17.7024 22.5998L12.9969 17.8944C12.9129 17.8104 12.9724 17.6668 13.0912 17.6668L26 17.6668C26.3682 17.6668 26.6667 17.3683 26.6667 17.0001V15.0001C26.6667 14.6319 26.3682 14.3334 26 14.3334L13.0908 14.3334Z" fill="currentColor"/>', bL = '<path d="M18.9071 14.3335C19.0259 14.3335 19.0853 14.1898 19.0013 14.1058L14.2958 9.40025C14.0354 9.1399 14.0354 8.71779 14.2958 8.45744L15.71 7.04322C15.9703 6.78287 16.3924 6.78287 16.6528 7.04322L25.1381 15.5285C25.3984 15.7889 25.3984 16.211 25.1381 16.4713L23.7238 17.8855L23.7225 17.8869L16.6525 24.9568C16.3922 25.2172 15.9701 25.2172 15.7097 24.9568L14.2955 23.5426C14.0352 23.2823 14.0352 22.8602 14.2955 22.5998L19.0009 17.8944C19.0849 17.8104 19.0254 17.6668 18.9066 17.6668L5.99784 17.6668C5.62965 17.6668 5.33118 17.3683 5.33118 17.0001V15.0001C5.33118 14.6319 5.62965 14.3335 5.99784 14.3335L18.9071 14.3335Z" fill="currentColor"/>', wL = '<path d="M14.1521 13.0929C14.1521 12.9741 14.0085 12.9147 13.9245 12.9987L9.21891 17.7043C8.95856 17.9646 8.53645 17.9646 8.2761 17.7043L6.86189 16.29C6.60154 16.0297 6.60154 15.6076 6.86189 15.3472L15.3472 6.86195C15.6075 6.6016 16.0296 6.6016 16.29 6.86195L17.7042 8.27616L17.7055 8.27751L24.7755 15.3475C25.0359 15.6078 25.0359 16.0299 24.7755 16.2903L23.3613 17.7045C23.1009 17.9649 22.6788 17.9649 22.4185 17.7045L17.7131 12.9991C17.6291 12.9151 17.4855 12.9746 17.4855 13.0934V26.0022C17.4855 26.3704 17.187 26.6688 16.8188 26.6688H14.8188C14.4506 26.6688 14.1521 26.3704 14.1521 26.0022L14.1521 13.0929Z" fill="currentColor"/>', xL = '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9339 22.7045C15.9749 22.681 16.0252 22.681 16.0662 22.7045L24.3359 27.43C24.7804 27.684 25.3334 27.3631 25.3334 26.8512V4.66667C25.3334 4.29848 25.0349 4 24.6667 4H7.33335C6.96516 4 6.66669 4.29848 6.66669 4.66667V26.8512C6.66669 27.3631 7.21967 27.684 7.66411 27.43L15.9339 22.7045ZM16.0662 19.1724C16.0252 19.149 15.9749 19.149 15.9339 19.1724L9.93284 22.6016C9.84395 22.6524 9.73335 22.5882 9.73335 22.4858V7.2C9.73335 7.12636 9.79305 7.06667 9.86669 7.06667H22.1334C22.207 7.06667 22.2667 7.12636 22.2667 7.2V22.4858C22.2667 22.5882 22.1561 22.6524 22.0672 22.6016L16.0662 19.1724Z" fill="currentColor"/>', SL = '<path d="M16 20.5338C17.6568 20.5338 19 19.1907 19 17.5338C19 15.877 17.6568 14.5338 16 14.5338C14.3431 14.5338 13 15.877 13 17.5338C13 19.1907 14.3431 20.5338 16 20.5338Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8372 6.66666C10.5752 6.66666 10.3375 6.82016 10.2296 7.05899L9.23821 9.25486C9.21665 9.30262 9.1691 9.33332 9.11669 9.33332H5.99998C5.63179 9.33332 5.33331 9.6318 5.33331 9.99999V26C5.33331 26.3682 5.63179 26.6667 5.99998 26.6667H26C26.3682 26.6667 26.6666 26.3682 26.6666 26V9.99999C26.6666 9.6318 26.3682 9.33332 26 9.33332H22.8858C22.8334 9.33332 22.7858 9.30259 22.7643 9.25479L21.7746 7.05935C21.6669 6.82033 21.429 6.66666 21.1668 6.66666H10.8372ZM12.6493 9.33332C12.4146 9.33332 12.1971 9.45676 12.0768 9.6583L10.7179 11.935C10.6938 11.9753 10.6503 12 10.6034 12H8.66665C8.29846 12 7.99998 12.2985 7.99998 12.6667V23.3333C7.99998 23.7015 8.29846 24 8.66665 24H23.3333C23.7015 24 24 23.7015 24 23.3333V12.6667C24 12.2985 23.7015 12 23.3333 12H21.3956C21.3486 12 21.3051 11.9753 21.2811 11.9349L19.9245 9.65869C19.8043 9.45693 19.5867 9.33332 19.3518 9.33332H12.6493Z" fill="currentColor"/>', EL = '<path d="M16.6927 25.3346C16.3245 25.3346 16.026 25.0361 16.026 24.6679L16.026 7.3346C16.026 6.96641 16.3245 6.66794 16.6927 6.66794L18.6927 6.66794C19.0609 6.66794 19.3594 6.96642 19.3594 7.3346L19.3594 24.6679C19.3594 25.0361 19.0609 25.3346 18.6927 25.3346H16.6927Z" fill="currentColor"/> <path d="M24.026 25.3346C23.6578 25.3346 23.3594 25.0361 23.3594 24.6679L23.3594 7.3346C23.3594 6.96641 23.6578 6.66794 24.026 6.66794L26.026 6.66794C26.3942 6.66794 26.6927 6.96642 26.6927 7.3346V24.6679C26.6927 25.0361 26.3942 25.3346 26.026 25.3346H24.026Z" fill="currentColor"/> <path d="M5.48113 23.9407C5.38584 24.2963 5.59689 24.6619 5.95254 24.7572L7.88439 25.2748C8.24003 25.3701 8.60559 25.159 8.70089 24.8034L13.1871 8.06067C13.2824 7.70503 13.0713 7.33947 12.7157 7.24417L10.7838 6.72654C10.4282 6.63124 10.0626 6.8423 9.96733 7.19794L5.48113 23.9407Z" fill="currentColor"/>', $L = '<path fill-rule="evenodd" clip-rule="evenodd" d="M28.016 23.4605L26.8102 24.8975C26.7629 24.9539 26.6788 24.9612 26.6224 24.9139L26.2632 24.6127C26.2631 24.6127 26.2633 24.6127 26.2632 24.6127L8.23326 9.49343C8.2332 9.49349 8.23333 9.49338 8.23326 9.49343L5.37612 7.09787C5.37609 7.09795 5.37615 7.09778 5.37612 7.09787L5.37151 7.09399C5.31524 7.04662 5.30795 6.96262 5.35523 6.90627L6.56109 5.46917C6.79776 5.18712 7.21832 5.15026 7.50045 5.38684L8.98949 6.6355C9.0135 6.65563 9.04383 6.66667 9.07517 6.66667H26C26.3682 6.66667 26.6667 6.96514 26.6667 7.33333V21.3967C26.6667 21.4362 26.6841 21.4736 26.7143 21.4989L27.9337 22.5214C28.2158 22.758 28.2527 23.1784 28.016 23.4605ZM23.781 19.0391C23.8678 19.1119 24 19.0502 24 18.937V10C24 9.63181 23.7015 9.33333 23.3333 9.33333H12.5732C12.4487 9.33333 12.3921 9.48884 12.4875 9.56883L23.781 19.0391Z" fill="currentColor"/> <path d="M18.9485 22C18.9798 22 19.0102 22.011 19.0342 22.0312L21.8962 24.4312C21.9916 24.5112 21.935 24.6667 21.8105 24.6667H18.8957C18.8534 24.6667 18.8136 24.6867 18.7885 24.7208L16.5364 27.7688C16.2699 28.1295 15.7305 28.1295 15.464 27.7688L13.2117 24.7208C13.1866 24.6867 13.1468 24.6667 13.1045 24.6667H6.00001C5.63182 24.6667 5.33335 24.3682 5.33335 24V10.828C5.33335 10.7147 5.46558 10.6531 5.55235 10.7258L7.95235 12.7384C7.98256 12.7637 8.00001 12.8011 8.00001 12.8405V21.3333C8.00001 21.7015 8.29849 22 8.66668 22H18.9485Z" fill="currentColor"/>', TL = '<path d="M17.3333 15C17.3333 14.6318 17.6318 14.3334 18 14.3334H20.6667C21.0349 14.3334 21.3333 14.6318 21.3333 15V16.3334C21.3333 16.7015 21.0349 17 20.6667 17H18C17.6318 17 17.3333 16.7015 17.3333 16.3334V15Z" fill="currentColor"/> <path d="M11.3333 14.3334C10.9652 14.3334 10.6667 14.6318 10.6667 15V16.3334C10.6667 16.7015 10.9652 17 11.3333 17H14C14.3682 17 14.6667 16.7015 14.6667 16.3334V15C14.6667 14.6318 14.3682 14.3334 14 14.3334H11.3333Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33334 7.33335C5.33334 6.96516 5.63182 6.66669 6.00001 6.66669H26C26.3682 6.66669 26.6667 6.96516 26.6667 7.33335V24C26.6667 24.3682 26.3682 24.6667 26 24.6667H18.8676C18.8253 24.6667 18.7855 24.6868 18.7603 24.7208L16.5364 27.7307C16.2699 28.0914 15.7305 28.0914 15.464 27.7308L13.2399 24.7208C13.2147 24.6868 13.1749 24.6667 13.1326 24.6667H6.00001C5.63182 24.6667 5.33334 24.3682 5.33334 24V7.33335ZM8.66668 9.33335C8.29849 9.33335 8.00001 9.63183 8.00001 10V21.3334C8.00001 21.7015 8.29849 22 8.66668 22H23.3333C23.7015 22 24 21.7015 24 21.3334V10C24 9.63183 23.7015 9.33335 23.3333 9.33335H8.66668Z" fill="currentColor"/>', PL = '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.9266 7.57992C25.015 7.60672 25.0886 7.64746 25.2462 7.80506L26.956 9.51488C27.1136 9.67248 27.1543 9.74604 27.1811 9.83447C27.2079 9.9229 27.2079 10.0133 27.1811 10.1018C27.1543 10.1902 27.1136 10.2638 26.956 10.4214L13.1822 24.1951C13.0246 24.3527 12.951 24.3935 12.8626 24.4203C12.797 24.4402 12.7304 24.4453 12.6642 24.4357L12.7319 24.4203C12.6435 24.4471 12.553 24.4471 12.4646 24.4203C12.3762 24.3935 12.3026 24.3527 12.145 24.1951L5.04407 17.0942C4.88647 16.9366 4.84573 16.863 4.81893 16.7746C4.79213 16.6862 4.79213 16.5957 4.81893 16.5073C4.84573 16.4189 4.88647 16.3453 5.04407 16.1877L6.7539 14.4779C6.9115 14.3203 6.98506 14.2796 7.07349 14.2528C7.16191 14.226 7.25235 14.226 7.34078 14.2528C7.42921 14.2796 7.50277 14.3203 7.66037 14.4779L12.6628 19.4808L24.3397 7.80506C24.4973 7.64746 24.5709 7.60672 24.6593 7.57992C24.7477 7.55311 24.8382 7.55311 24.9266 7.57992Z" fill="currentColor"/>', LL = '<path d="M15.905 17.4809C15.9571 17.533 16.0415 17.533 16.0936 17.4809L22.4111 11.1635C22.6714 10.9031 23.0935 10.9031 23.3539 11.1635L24.9567 12.7662C25.217 13.0266 25.217 13.4487 24.9567 13.709L18.1028 20.5629C18.0937 20.5732 18.0842 20.5833 18.0744 20.5931L16.4716 22.1959C16.2113 22.4562 15.7892 22.4562 15.5288 22.1959L7.04353 13.7106C6.78318 13.4503 6.78318 13.0281 7.04353 12.7678L8.6463 11.165C8.90665 10.9047 9.32876 10.9047 9.58911 11.165L15.905 17.4809Z" fill="currentColor"/>', kL = '<path d="M14.8206 15.9049C14.7685 15.9569 14.7685 16.0413 14.8206 16.0934L21.1381 22.4109C21.3984 22.6712 21.3984 23.0934 21.1381 23.3537L19.5353 24.9565C19.275 25.2168 18.8529 25.2168 18.5925 24.9565L11.7386 18.1026C11.7283 18.0935 11.7183 18.084 11.7084 18.0742L10.1057 16.4714C9.84531 16.2111 9.84531 15.789 10.1057 15.5286L18.5909 7.04335C18.8513 6.783 19.2734 6.783 19.5338 7.04335L21.1365 8.64612C21.3969 8.90647 21.3969 9.32858 21.1365 9.58893L14.8206 15.9049Z" fill="currentColor"/>', ML = '<path d="M17.947 16.095C17.999 16.043 17.999 15.9585 17.947 15.9065L11.6295 9.58899C11.3691 9.32864 11.3691 8.90653 11.6295 8.64618L13.2323 7.04341C13.4926 6.78306 13.9147 6.78306 14.1751 7.04341L21.0289 13.8973C21.0392 13.9064 21.0493 13.9158 21.0591 13.9257L22.6619 15.5285C22.9223 15.7888 22.9223 16.2109 22.6619 16.4713L14.1766 24.9565C13.9163 25.2169 13.4942 25.2169 13.2338 24.9565L11.631 23.3538C11.3707 23.0934 11.3707 22.6713 11.631 22.411L17.947 16.095Z" fill="currentColor"/>', IL = '<path d="M15.905 14.8206C15.9571 14.7685 16.0415 14.7685 16.0936 14.8206L22.4111 21.1381C22.6714 21.3984 23.0935 21.3984 23.3539 21.1381L24.9567 19.5353C25.217 19.2749 25.217 18.8528 24.9567 18.5925L18.1028 11.7386C18.0937 11.7283 18.0842 11.7182 18.0744 11.7084L16.4716 10.1056C16.2113 9.84528 15.7892 9.84528 15.5288 10.1056L7.04353 18.5909C6.78318 18.8513 6.78318 19.2734 7.04353 19.5337L8.6463 21.1365C8.90665 21.3968 9.32876 21.3968 9.58911 21.1365L15.905 14.8206Z" fill="currentColor"/>', VL = '<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7C5.63181 7 5.33333 7.29848 5.33333 7.66667V14.8667C5.33333 14.9403 5.39361 14.9999 5.46724 15.0009C10.8844 15.0719 15.2614 19.449 15.3325 24.8661C15.3334 24.9397 15.393 25 15.4667 25H26C26.3682 25 26.6667 24.7015 26.6667 24.3333V7.66667C26.6667 7.29848 26.3682 7 26 7H6ZM17.0119 22.2294C17.0263 22.29 17.0802 22.3333 17.1425 22.3333H23.3333C23.7015 22.3333 24 22.0349 24 21.6667V10.3333C24 9.96514 23.7015 9.66667 23.3333 9.66667H8.66667C8.29848 9.66667 8 9.96514 8 10.3333V13.1909C8 13.2531 8.04332 13.3071 8.10392 13.3214C12.5063 14.3618 15.9715 17.827 17.0119 22.2294Z" fill="currentColor"/> <path d="M13.2 25C13.2736 25 13.3334 24.9398 13.3322 24.8661C13.2615 20.5544 9.77889 17.0718 5.46718 17.0011C5.39356 16.9999 5.33333 17.0597 5.33333 17.1333V18.8667C5.33333 18.9403 5.39348 18.9999 5.4671 19.0015C8.67465 19.0716 11.2617 21.6587 11.3319 24.8662C11.3335 24.9399 11.393 25 11.4667 25H13.2Z" fill="currentColor"/> <path d="M5.33333 21.1333C5.33333 21.0597 5.39332 20.9998 5.46692 21.0022C7.57033 21.0712 9.26217 22.763 9.33114 24.8664C9.33356 24.94 9.27364 25 9.2 25H6C5.63181 25 5.33333 24.7015 5.33333 24.3333V21.1333Z" fill="currentColor"/>', AL = '<path d="M20.144 3.294C19.7884 3.38929 19.5773 3.75485 19.6726 4.1105L20.1902 6.04235C20.2855 6.39799 20.6511 6.60905 21.0067 6.51375L22.9386 5.99611C23.2942 5.90082 23.5053 5.53526 23.41 5.17962L22.8923 3.24777C22.797 2.89212 22.4315 2.68107 22.0758 2.77636L20.144 3.294Z" fill="currentColor"/> <path d="M13.4909 5.76687C13.3956 5.41123 13.6067 5.04567 13.9623 4.95037L15.8942 4.43274C16.2498 4.33744 16.6154 4.5485 16.7107 4.90414L17.2283 6.83599C17.3236 7.19164 17.1125 7.55719 16.7569 7.65249L14.8251 8.17013C14.4694 8.26542 14.1039 8.05437 14.0086 7.69872L13.4909 5.76687Z" fill="currentColor"/> <path d="M7.78065 6.60675C7.425 6.70204 7.21395 7.0676 7.30924 7.42324L7.82688 9.3551C7.92218 9.71074 8.28773 9.9218 8.64338 9.8265L10.5752 9.30886C10.9309 9.21357 11.1419 8.84801 11.0466 8.49237L10.529 6.56051C10.4337 6.20487 10.0681 5.99382 9.7125 6.08911L7.78065 6.60675Z" fill="currentColor"/> <path d="M7.33331 12C7.7015 12 7.99998 12.2985 7.99998 12.6667V23.3333C7.99998 23.7015 8.29846 24 8.66665 24H23.3333C23.7015 24 24 23.7015 24 23.3333V12.6667C24 12.2985 24.2985 12 24.6666 12H26C26.3682 12 26.6666 12.2985 26.6666 12.6667V26C26.6666 26.3682 26.3682 26.6667 26 26.6667H5.99998C5.63179 26.6667 5.33331 26.3682 5.33331 26V12.6667C5.33331 12.2985 5.63179 12 5.99998 12H7.33331Z" fill="currentColor"/> <path d="M11.7995 12C11.4313 12 11.1328 12.2985 11.1328 12.6667V14.6667C11.1328 15.0349 11.4313 15.3333 11.7995 15.3333H13.7995C14.1676 15.3333 14.4661 15.0349 14.4661 14.6667V12.6667C14.4661 12.2985 14.1676 12 13.7995 12H11.7995Z" fill="currentColor"/> <path d="M17.5325 12.6667C17.5325 12.2985 17.831 12 18.1992 12H20.1992C20.5674 12 20.8659 12.2985 20.8659 12.6667V14.6667C20.8659 15.0349 20.5674 15.3333 20.1992 15.3333H18.1992C17.831 15.3333 17.5325 15.0349 17.5325 14.6667V12.6667Z" fill="currentColor"/>', RL = '<path d="M8 28.0003C8 27.6321 8.29848 27.3336 8.66667 27.3336H23.3333C23.7015 27.3336 24 27.6321 24 28.0003V29.3336C24 29.7018 23.7015 30.0003 23.3333 30.0003H8.66667C8.29848 30.0003 8 29.7018 8 29.3336V28.0003Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66602 6.66699C4.29783 6.66699 3.99935 6.96547 3.99935 7.33366V24.667C3.99935 25.0352 4.29783 25.3337 4.66602 25.3337H27.3327C27.7009 25.3337 27.9994 25.0352 27.9994 24.667V7.33366C27.9994 6.96547 27.7009 6.66699 27.3327 6.66699H4.66602ZM8.66659 21.3333C8.2984 21.3333 7.99992 21.0349 7.99992 20.6667V11.3333C7.99992 10.9651 8.2984 10.6667 8.66659 10.6667H13.9999C14.3681 10.6667 14.6666 10.9651 14.6666 11.3333V12.6667C14.6666 13.0349 14.3681 13.3333 13.9999 13.3333H10.7999C10.7263 13.3333 10.6666 13.393 10.6666 13.4667V18.5333C10.6666 18.607 10.7263 18.6667 10.7999 18.6667H13.9999C14.3681 18.6667 14.6666 18.9651 14.6666 19.3333V20.6667C14.6666 21.0349 14.3681 21.3333 13.9999 21.3333H8.66659ZM17.9999 21.3333C17.6317 21.3333 17.3333 21.0349 17.3333 20.6667V11.3333C17.3333 10.9651 17.6317 10.6667 17.9999 10.6667H23.3333C23.7014 10.6667 23.9999 10.9651 23.9999 11.3333V12.6667C23.9999 13.0349 23.7014 13.3333 23.3333 13.3333H20.1333C20.0596 13.3333 19.9999 13.393 19.9999 13.4667V18.5333C19.9999 18.607 20.0596 18.6667 20.1333 18.6667H23.3333C23.7014 18.6667 23.9999 18.9651 23.9999 19.3333V20.6667C23.9999 21.0349 23.7014 21.3333 23.3333 21.3333H17.9999Z" fill="currentColor"/>', NL = '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.6661 6.66699C4.29791 6.66699 3.99943 6.96547 3.99943 7.33366V24.667C3.99943 25.0352 4.29791 25.3337 4.6661 25.3337H27.3328C27.701 25.3337 27.9994 25.0352 27.9994 24.667V7.33366C27.9994 6.96547 27.701 6.66699 27.3328 6.66699H4.6661ZM8.66667 21.3333C8.29848 21.3333 8 21.0349 8 20.6667V11.3333C8 10.9651 8.29848 10.6667 8.66667 10.6667H14C14.3682 10.6667 14.6667 10.9651 14.6667 11.3333V12.6667C14.6667 13.0349 14.3682 13.3333 14 13.3333H10.8C10.7264 13.3333 10.6667 13.393 10.6667 13.4667V18.5333C10.6667 18.607 10.7264 18.6667 10.8 18.6667H14C14.3682 18.6667 14.6667 18.9651 14.6667 19.3333V20.6667C14.6667 21.0349 14.3682 21.3333 14 21.3333H8.66667ZM18 21.3333C17.6318 21.3333 17.3333 21.0349 17.3333 20.6667V11.3333C17.3333 10.9651 17.6318 10.6667 18 10.6667H23.3333C23.7015 10.6667 24 10.9651 24 11.3333V12.6667C24 13.0349 23.7015 13.3333 23.3333 13.3333H20.1333C20.0597 13.3333 20 13.393 20 13.4667V18.5333C20 18.607 20.0597 18.6667 20.1333 18.6667H23.3333C23.7015 18.6667 24 18.9651 24 19.3333V20.6667C24 21.0349 23.7015 21.3333 23.3333 21.3333H18Z" fill="currentColor"/>', HL = '<path d="M17.6667 15C17.6667 14.6318 17.9651 14.3333 18.3333 14.3333H20.3333C20.7015 14.3333 21 14.6318 21 15V17C21 17.3682 20.7015 17.6666 20.3333 17.6666H18.3333C17.9651 17.6666 17.6667 17.3682 17.6667 17V15Z" fill="currentColor"/> <path d="M11.6667 14.3333C11.2985 14.3333 11 14.6318 11 15V17C11 17.3682 11.2985 17.6666 11.6667 17.6666H13.6667C14.0349 17.6666 14.3333 17.3682 14.3333 17V15C14.3333 14.6318 14.0349 14.3333 13.6667 14.3333H11.6667Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.125 5.33331C8.53312 5.33331 4 9.86643 4 15.4583C4 21.0502 8.53312 25.5833 14.125 25.5833C16.5135 25.5833 18.6402 26.8064 20.6365 28.1176C23.0275 29.688 23.4552 27.5864 23.8755 25.5208C24.103 24.4027 24.3284 23.2951 24.8619 22.7863C26.7953 20.9423 28 18.341 28 15.4583C28 9.86643 23.4669 5.33331 17.875 5.33331H14.125ZM17.875 7.99998H14.125C10.0059 7.99998 6.66667 11.3392 6.66667 15.4583C6.66667 19.5774 10.0059 22.9166 14.125 22.9166C16.877 22.9166 19.2468 24.1025 21.1133 25.2567C21.1541 25.2819 21.2072 25.2588 21.2169 25.2119L21.2588 25.0064C21.3246 24.6827 21.4008 24.3082 21.4843 23.9558C21.5867 23.5238 21.7252 23.0127 21.9287 22.5174C22.1248 22.04 22.4512 21.4005 23.0214 20.8566C24.4491 19.4949 25.3333 17.5821 25.3333 15.4583C25.3333 11.3392 21.9941 7.99998 17.875 7.99998Z" fill="currentColor"/>', OL = '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.33334 6.00001C5.33334 5.63182 5.63182 5.33334 6.00001 5.33334H26C26.3682 5.33334 26.6667 5.63182 26.6667 6.00001V20.6667C26.6667 21.0349 26.3682 21.3333 26 21.3333H6.00001C5.63182 21.3333 5.33334 21.0349 5.33334 20.6667V6.00001ZM8.40008 9.06634C8.40008 8.69815 8.69855 8.39967 9.06674 8.39967H22.9339C23.3021 8.39967 23.6006 8.69815 23.6006 9.06634V17.6002C23.6006 17.9684 23.3021 18.2669 22.9339 18.2669H9.06674C8.69855 18.2669 8.40008 17.9684 8.40008 17.6002V9.06634Z" fill="currentColor"/> <path d="M6.00001 23.9999C5.63182 23.9999 5.33334 24.2984 5.33334 24.6666V25.9999C5.33334 26.3681 5.63182 26.6666 6.00001 26.6666H26C26.3682 26.6666 26.6667 26.3681 26.6667 25.9999V24.6666C26.6667 24.2984 26.3682 23.9999 26 23.9999H6.00001Z" fill="currentColor"/>', DL = '<path d="M4 4.66667C4 4.29848 4.29848 4 4.66667 4H18.5714C18.9396 4 19.2381 4.29848 19.2381 4.66667V9.19992C19.2381 9.27356 19.1784 9.33325 19.1048 9.33325H16.7067C16.633 9.33325 16.5733 9.27356 16.5733 9.19992V7.33333C16.5733 6.96514 16.2749 6.66667 15.9067 6.66667H7.33333C6.96514 6.66667 6.66667 6.96514 6.66667 7.33333V14C6.66667 14.3682 6.96514 14.6667 7.33333 14.6667H13.2C13.2736 14.6667 13.3333 14.7264 13.3333 14.8V17.2C13.3333 17.2736 13.2736 17.3333 13.2 17.3333H4.66667C4.29848 17.3333 4 17.0349 4 16.6667V4.66667Z" fill="currentColor"/> <path d="M13.2 22.6666C13.2736 22.6666 13.3333 22.6069 13.3333 22.5333V20.1333C13.3333 20.0596 13.2736 19.9999 13.2 19.9999H4.66667C4.29848 19.9999 4 20.2984 4 20.6666V21.9999C4 22.3681 4.29848 22.6666 4.66667 22.6666H13.2Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 12.6666C16 12.2984 16.2985 11.9999 16.6667 11.9999H27.3333C27.7015 11.9999 28 12.2984 28 12.6666V27.3333C28 27.7014 27.7015 27.9999 27.3333 27.9999H16.6667C16.2985 27.9999 16 27.7014 16 27.3333V12.6666ZM18.6667 15.3333C18.6667 14.9651 18.9651 14.6666 19.3333 14.6666H24.6667C25.0349 14.6666 25.3333 14.9651 25.3333 15.3333V24.6666C25.3333 25.0348 25.0349 25.3333 24.6667 25.3333H19.3333C18.9651 25.3333 18.6667 25.0348 18.6667 24.6666V15.3333Z" fill="currentColor"/>', _L = '<path d="M14.2225 13.7867C14.3065 13.8706 14.4501 13.8112 14.4501 13.6924V5.99955C14.4501 5.63136 14.7486 5.33289 15.1167 5.33289H16.8501C17.2183 5.33289 17.5167 5.63136 17.5167 5.99955V13.6916C17.5167 13.8104 17.6604 13.8699 17.7444 13.7859L19.9433 11.5869C20.2037 11.3266 20.6258 11.3266 20.8861 11.5869L22.1118 12.8126C22.3722 13.0729 22.3722 13.4951 22.1118 13.7554L16.4549 19.4123C16.1946 19.6726 15.772 19.6731 15.5116 19.4128L9.85479 13.7559C9.59444 13.4956 9.59444 13.0734 9.85479 12.8131L11.0804 11.5874C11.3408 11.3271 11.7629 11.3271 12.0233 11.5874L14.2225 13.7867Z" fill="currentColor"/> <path d="M5.99998 20.267C5.63179 20.267 5.33331 20.5654 5.33331 20.9336V25.9997C5.33331 26.3678 5.63179 26.6663 5.99998 26.6663H26C26.3682 26.6663 26.6666 26.3678 26.6666 25.9997V20.9336C26.6666 20.5654 26.3682 20.267 26 20.267H24.2666C23.8985 20.267 23.6 20.5654 23.6 20.9336V22.9333C23.6 23.3014 23.3015 23.5999 22.9333 23.5999H9.06638C8.69819 23.5999 8.39972 23.3014 8.39972 22.9333V20.9336C8.39972 20.5654 8.10124 20.267 7.73305 20.267H5.99998Z" fill="currentColor"/>', FL = '<path d="M24 19.3328V9.46667C24 9.39303 23.9403 9.33334 23.8667 9.33334L11.3333 9.33334C10.9652 9.33334 10.6667 9.03486 10.6667 8.66667V7.33334C10.6667 6.96515 10.9652 6.66667 11.3333 6.66667H26C26.3682 6.66667 26.6667 6.96515 26.6667 7.33334V19.3328C26.6667 19.701 26.3682 19.9994 26 19.9994H24.6667C24.2985 19.9994 24 19.701 24 19.3328Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00001 12C5.63182 12 5.33334 12.2985 5.33334 12.6667V24.6667C5.33334 25.0349 5.63182 25.3333 6.00001 25.3333H20.6672C21.0354 25.3333 21.3338 25.0349 21.3338 24.6667V12.6667C21.3338 12.2985 21.0354 12 20.6672 12H6.00001ZM8.66668 14.6667C8.29849 14.6667 8.00001 14.9651 8.00001 15.3333V22C8.00001 22.3682 8.29849 22.6667 8.66668 22.6667H18C18.3682 22.6667 18.6667 22.3682 18.6667 22V15.3333C18.6667 14.9651 18.3682 14.6667 18 14.6667H8.66668Z" fill="currentColor"/>', jL = '<path d="M16 20C18.2091 20 20 18.2092 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2092 13.7909 20 16 20Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M28 16.0058C28 18.671 23.5 25.3334 16 25.3334C8.5 25.3334 4 18.6762 4 16.0058C4 13.3354 8.50447 6.66669 16 6.66669C23.4955 6.66669 28 13.3406 28 16.0058ZM25.3318 15.9934C25.3328 16.0017 25.3328 16.0099 25.3318 16.0182C25.3274 16.0571 25.3108 16.1728 25.2485 16.3708C25.1691 16.6229 25.0352 16.9462 24.8327 17.3216C24.4264 18.0749 23.7969 18.9398 22.9567 19.754C21.2791 21.3798 18.9148 22.6667 16 22.6667C13.0845 22.6667 10.7202 21.3805 9.04298 19.7557C8.20295 18.9419 7.57362 18.0773 7.16745 17.3241C6.96499 16.9486 6.83114 16.6252 6.75172 16.3729C6.67942 16.1431 6.66856 16.0243 6.66695 16.0066L6.66695 16.005C6.66859 15.9871 6.67951 15.8682 6.75188 15.6383C6.83145 15.3854 6.96554 15.0614 7.16831 14.6853C7.57507 13.9306 8.20514 13.0644 9.04577 12.249C10.7245 10.6208 13.0886 9.33335 16 9.33335C18.9108 9.33335 21.2748 10.6215 22.9539 12.2507C23.7947 13.0664 24.4249 13.933 24.8318 14.6877C25.0346 15.0639 25.1688 15.3878 25.2483 15.6404C25.3107 15.8386 25.3274 15.9545 25.3318 15.9934Z" fill="currentColor"/>', qL = '<path d="M15.8747 8.11857C16.3148 7.79342 16.9375 8.10759 16.9375 8.65476V14.2575C16.9375 14.3669 17.0621 14.4297 17.1501 14.3647L25.6038 8.11857C26.0439 7.79342 26.6667 8.10759 26.6667 8.65476V23.3451C26.6667 23.8923 26.0439 24.2064 25.6038 23.8813L17.1501 17.6346C17.0621 17.5695 16.9375 17.6324 16.9375 17.7418L16.9375 23.3451C16.9375 23.8923 16.3147 24.2064 15.8747 23.8813L5.93387 16.5358C5.57322 16.2693 5.57323 15.7299 5.93389 15.4634L15.8747 8.11857Z" fill="currentColor"/>', ZL = '<path d="M16.1253 8.11866C15.6852 7.7935 15.0625 8.10768 15.0625 8.65484V14.2576C15.0625 14.367 14.9379 14.4298 14.8499 14.3648L6.39615 8.11866C5.95607 7.7935 5.33331 8.10768 5.33331 8.65484V23.3452C5.33331 23.8923 5.9561 24.2065 6.39617 23.8813L14.8499 17.6347C14.9379 17.5696 15.0625 17.6325 15.0625 17.7419L15.0625 23.3452C15.0625 23.8923 15.6853 24.2065 16.1253 23.8813L26.0661 16.5358C26.4268 16.2694 26.4268 15.73 26.0661 15.4635L16.1253 8.11866Z" fill="currentColor"/>', BL = '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.39995 18.8C8.39995 18.7264 8.45964 18.6667 8.53328 18.6667H17.2C17.2736 18.6667 17.3333 18.7264 17.3333 18.8V20.6667C17.3333 21.0349 17.6318 21.3333 18 21.3333H26C26.3682 21.3333 26.6666 21.0349 26.6666 20.6667V8.66668C26.6666 8.29849 26.3682 8.00001 26 8.00001H17.4666C17.393 8.00001 17.3333 7.94031 17.3333 7.86668V6.00001C17.3333 5.63182 17.0348 5.33334 16.6666 5.33334H5.99997C5.63178 5.33334 5.33328 5.63182 5.33328 6.00001V26C5.33328 26.3682 5.63176 26.6667 5.99995 26.6667H7.73328C8.10147 26.6667 8.39995 26.3682 8.39995 26V18.8ZM8.53328 16C8.45964 16 8.39995 15.9403 8.39995 15.8667V8.13334C8.39995 8.05971 8.45964 8.00001 8.53328 8.00001H14.5333C14.6069 8.00001 14.6666 8.05971 14.6666 8.13334V10.5333C14.6666 10.607 14.7263 10.6667 14.8 10.6667H23.8666C23.9403 10.6667 24 10.7264 24 10.8V18.5333C24 18.607 23.9403 18.6667 23.8666 18.6667H20.1333C20.0597 18.6667 20 18.607 20 18.5333V16.1333C20 16.0597 19.9403 16 19.8666 16H8.53328Z" fill="currentColor"/>', GL = '<path d="M19.913 6.45826V9.56817C19.913 9.68695 20.0566 9.74644 20.1406 9.66245L24.0458 5.75727C24.3061 5.49692 24.7283 5.49692 24.9886 5.75727L26.2143 6.98293C26.4746 7.24328 26.4746 7.66539 26.2143 7.92573L22.3093 11.8306C22.2253 11.9146 22.2848 12.0583 22.4036 12.0583H25.5137C25.8819 12.0583 26.1804 12.3567 26.1804 12.7249V14.4583C26.1804 14.8265 25.8819 15.1249 25.5137 15.1249L19.2468 15.1249C19.2466 15.1249 19.2469 15.1249 19.2468 15.1249H17.5137C17.1455 15.1249 16.8463 14.8265 16.8463 14.4583V6.45826C16.8463 6.09007 17.1448 5.7916 17.513 5.7916H19.2463C19.6145 5.7916 19.913 6.09007 19.913 6.45826Z" fill="currentColor"/> <path d="M9.73054 19.9416C9.84933 19.9416 9.90882 20.0852 9.82482 20.1692L5.91991 24.0741C5.65956 24.3345 5.65956 24.7566 5.91991 25.0169L7.14556 26.2426C7.40591 26.5029 7.82802 26.5029 8.08837 26.2426L11.9935 22.3374C12.0775 22.2534 12.2212 22.3129 12.2212 22.4317V25.5416C12.2212 25.9098 12.5196 26.2083 12.8878 26.2083H14.6212C14.9893 26.2083 15.2878 25.9098 15.2878 25.5416L15.2878 17.5416C15.2878 17.1734 14.9893 16.8749 14.6212 16.8749H6.62046C6.25227 16.8749 5.9538 17.1734 5.9538 17.5416V19.2749C5.9538 19.6431 6.25227 19.9416 6.62046 19.9416H9.73054Z" fill="currentColor"/>', WL = '<path d="M17.3183 12.4856L21.2231 8.58073C21.3071 8.49674 21.2476 8.35312 21.1288 8.35312H18.0189C17.6507 8.35312 17.3522 8.05464 17.3522 7.68645V5.95312C17.3522 5.58493 17.6507 5.28645 18.0189 5.28645H26.0189C26.387 5.28645 26.6862 5.58493 26.6862 5.95312V13.9531C26.6862 14.3213 26.3877 14.6198 26.0196 14.6198H24.2862C23.918 14.6198 23.6196 14.3213 23.6196 13.9531V10.8431C23.6196 10.7243 23.4759 10.6648 23.3919 10.7488L19.4867 14.6541C19.2264 14.9144 18.8043 14.9144 18.5439 14.6541L17.3183 13.4284C17.0579 13.1681 17.0579 12.7459 17.3183 12.4856Z" fill="currentColor"/> <path d="M6.1153 26.7135H14.1153C14.4835 26.7135 14.782 26.4151 14.782 26.0469V24.3135C14.782 23.9453 14.4835 23.6469 14.1153 23.6469H11.0053C10.8865 23.6469 10.827 23.5033 10.911 23.4193L14.8159 19.5144C15.0763 19.254 15.0763 18.8319 14.8159 18.5716L13.5903 17.3459C13.3299 17.0856 12.9078 17.0856 12.6474 17.3459L8.74222 21.2512C8.65822 21.3351 8.5146 21.2757 8.5146 21.1569L8.51461 18.0469C8.51461 17.6787 8.21613 17.3802 7.84794 17.3802H6.11461C5.74642 17.3802 5.44794 17.6787 5.44794 18.0469V26.0469C5.44794 26.4151 5.74711 26.7135 6.1153 26.7135Z" fill="currentColor"/>', UL = '<path d="M19.3334 13.3333C18.9652 13.3333 18.6667 13.0349 18.6667 12.6667L18.6667 7.33333C18.6667 6.96514 18.9652 6.66666 19.3334 6.66666H21.3334C21.7015 6.66666 22 6.96514 22 7.33333V9.86666C22 9.9403 22.0597 10 22.1334 10L24.6667 10C25.0349 10 25.3334 10.2985 25.3334 10.6667V12.6667C25.3334 13.0349 25.0349 13.3333 24.6667 13.3333L19.3334 13.3333Z" fill="currentColor"/> <path d="M13.3334 19.3333C13.3334 18.9651 13.0349 18.6667 12.6667 18.6667H7.33335C6.96516 18.6667 6.66669 18.9651 6.66669 19.3333V21.3333C6.66669 21.7015 6.96516 22 7.33335 22H9.86669C9.94032 22 10 22.0597 10 22.1333L10 24.6667C10 25.0349 10.2985 25.3333 10.6667 25.3333H12.6667C13.0349 25.3333 13.3334 25.0349 13.3334 24.6667L13.3334 19.3333Z" fill="currentColor"/> <path d="M18.6667 24.6667C18.6667 25.0349 18.9652 25.3333 19.3334 25.3333H21.3334C21.7015 25.3333 22 25.0349 22 24.6667V22.1333C22 22.0597 22.0597 22 22.1334 22H24.6667C25.0349 22 25.3334 21.7015 25.3334 21.3333V19.3333C25.3334 18.9651 25.0349 18.6667 24.6667 18.6667L19.3334 18.6667C18.9652 18.6667 18.6667 18.9651 18.6667 19.3333L18.6667 24.6667Z" fill="currentColor"/> <path d="M10.6667 13.3333H12.6667C13.0349 13.3333 13.3334 13.0349 13.3334 12.6667L13.3334 10.6667V7.33333C13.3334 6.96514 13.0349 6.66666 12.6667 6.66666H10.6667C10.2985 6.66666 10 6.96514 10 7.33333L10 9.86666C10 9.9403 9.94033 10 9.86669 10L7.33335 10C6.96516 10 6.66669 10.2985 6.66669 10.6667V12.6667C6.66669 13.0349 6.96516 13.3333 7.33335 13.3333L10.6667 13.3333Z" fill="currentColor"/>', KL = '<path d="M25.3299 7.26517C25.2958 6.929 25.0119 6.66666 24.6667 6.66666H19.3334C18.9652 6.66666 18.6667 6.96514 18.6667 7.33333V9.33333C18.6667 9.70152 18.9652 10 19.3334 10L21.8667 10C21.9403 10 22 10.0597 22 10.1333V12.6667C22 13.0349 22.2985 13.3333 22.6667 13.3333H24.6667C25.0349 13.3333 25.3334 13.0349 25.3334 12.6667V7.33333C25.3334 7.31032 25.3322 7.28758 25.3299 7.26517Z" fill="currentColor"/> <path d="M22 21.8667C22 21.9403 21.9403 22 21.8667 22L19.3334 22C18.9652 22 18.6667 22.2985 18.6667 22.6667V24.6667C18.6667 25.0349 18.9652 25.3333 19.3334 25.3333L24.6667 25.3333C25.0349 25.3333 25.3334 25.0349 25.3334 24.6667V19.3333C25.3334 18.9651 25.0349 18.6667 24.6667 18.6667H22.6667C22.2985 18.6667 22 18.9651 22 19.3333V21.8667Z" fill="currentColor"/> <path d="M12.6667 22H10.1334C10.0597 22 10 21.9403 10 21.8667V19.3333C10 18.9651 9.70154 18.6667 9.33335 18.6667H7.33335C6.96516 18.6667 6.66669 18.9651 6.66669 19.3333V24.6667C6.66669 25.0349 6.96516 25.3333 7.33335 25.3333H12.6667C13.0349 25.3333 13.3334 25.0349 13.3334 24.6667V22.6667C13.3334 22.2985 13.0349 22 12.6667 22Z" fill="currentColor"/> <path d="M10 12.6667V10.1333C10 10.0597 10.0597 10 10.1334 10L12.6667 10C13.0349 10 13.3334 9.70152 13.3334 9.33333V7.33333C13.3334 6.96514 13.0349 6.66666 12.6667 6.66666H7.33335C6.96516 6.66666 6.66669 6.96514 6.66669 7.33333V12.6667C6.66669 13.0349 6.96516 13.3333 7.33335 13.3333H9.33335C9.70154 13.3333 10 13.0349 10 12.6667Z" fill="currentColor"/>', zL = '<path fill-rule="evenodd" clip-rule="evenodd" d="M25.3554 17.3032L26.037 16.6363C28.6231 14.0503 28.6231 9.85896 26.037 7.27287C23.4528 4.68864 19.2596 4.68864 16.6754 7.27287L16.0953 7.85295C16.0433 7.90497 15.959 7.90503 15.9069 7.85308L15.3251 7.27287C12.739 4.68679 8.5477 4.68679 5.96161 7.27287C3.37738 9.85711 3.37738 14.0503 5.96161 16.6345L15.8995 26.5723C15.9515 26.6244 16.036 26.6244 16.088 26.5723L20.6099 22.0486C20.6321 22.0283 20.6524 22.008 20.6746 21.9858L25.3554 17.3032ZM13.1566 9.44134L15.9098 12.187C15.9619 12.239 16.0463 12.2389 16.0983 12.1869L18.8438 9.44134C20.2305 8.05471 22.4819 8.05471 23.8685 9.44134C25.2537 10.8264 25.257 13.0685 23.8786 14.4578L23.1986 15.1231L18.5107 19.8128L18.4884 19.8333L16.0876 22.235C16.0355 22.2871 15.9511 22.2871 15.899 22.235L8.13007 14.466C6.74345 13.0794 6.74345 10.828 8.13007 9.44134C9.51855 8.05286 11.7681 8.05286 13.1566 9.44134Z" fill="currentColor"/>', YL = '<path d="M17.534 10.6674C17.534 11.5143 16.8475 12.2008 16.0006 12.2008C15.1538 12.2008 14.4673 11.5143 14.4673 10.6674C14.4673 9.82061 15.1538 9.13411 16.0006 9.13411C16.8475 9.13411 17.534 9.82061 17.534 10.6674Z" fill="currentColor"/> <path d="M14.6678 14.2005C14.6678 13.8323 14.9663 13.5339 15.3345 13.5339H16.6678C17.036 13.5339 17.3345 13.8323 17.3345 14.2005V22.2005C17.3345 22.5687 17.036 22.8672 16.6678 22.8672H15.3345C14.9663 22.8672 14.6678 22.5687 14.6678 22.2005V14.2005Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16ZM24.9333 16C24.9333 20.9337 20.9337 24.9333 16 24.9333C11.0663 24.9333 7.06667 20.9337 7.06667 16C7.06667 11.0663 11.0663 7.06667 16 7.06667C20.9337 7.06667 24.9333 11.0663 24.9333 16Z" fill="currentColor"/>', QL = '<path d="M4 7.38854C4 7.3149 4.0597 7.2552 4.13333 7.2552H10.1792C10.2528 7.2552 10.3125 7.19551 10.3125 7.12187V5.46666C10.3125 5.39302 10.3722 5.33333 10.4458 5.33333H12.726C12.7997 5.33333 12.8594 5.39302 12.8594 5.46666V7.12187C12.8594 7.19551 12.9191 7.2552 12.9927 7.2552H19.0333C19.107 7.2552 19.1667 7.3149 19.1667 7.38854V9.66354C19.1667 9.73717 19.107 9.79687 19.0333 9.79687H16.7106C16.6533 9.79687 16.6021 9.83433 16.5838 9.88869C15.4447 13.2641 14.1144 15.1953 13.5156 16.0573C13.4808 16.113 15.1333 17.5629 15.4974 17.8813C15.5402 17.9187 15.5534 17.9781 15.5321 18.0308L14.6529 20.2077C14.622 20.2843 14.5295 20.3146 14.4597 20.2703C13.5546 19.6951 12.8558 19.0727 11.9724 18.1584C11.9193 18.1036 11.8302 18.1049 11.7777 18.1603C9.69726 20.3578 8.60797 21.1142 6.80933 22.179C6.7475 22.2156 6.66731 22.1967 6.62871 22.1361L5.43696 20.2647C5.39711 20.2021 5.41633 20.1189 5.47911 20.0794C7.36746 18.8903 8.68502 17.6997 10.1302 16.1862C10.1752 16.139 10.1792 16.0655 10.14 16.0134C8.91005 14.3765 8.20369 13.2435 7.313 11.3664C7.28331 11.3039 7.30645 11.2285 7.36636 11.1938L9.32729 10.0573C9.39495 10.0181 9.48168 10.0453 9.51522 10.116C10.2082 11.5756 10.9182 12.7663 11.7071 13.8661C11.7622 13.9428 11.8775 13.9384 11.9269 13.8579C12.7208 12.5654 13.2411 11.5051 13.8451 9.97878C13.8797 9.89149 13.8153 9.79687 13.7214 9.79687H4V7.38854Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8316 26.6665C17.1181 26.6665 17.3726 26.4835 17.4637 26.2119L18.4836 23.1708C18.5018 23.1165 18.5527 23.0799 18.61 23.0799H23.8867C23.9439 23.0799 23.9948 23.1165 24.0131 23.1708L25.035 26.2122C25.1262 26.4837 25.3805 26.6665 25.6669 26.6665H27.0582C27.5181 26.6665 27.8398 26.2119 27.687 25.7782L23.0292 12.5661C22.9352 12.2994 22.6832 12.1211 22.4004 12.1211H20.0915C19.8087 12.1211 19.5566 12.2996 19.4627 12.5664L14.8113 25.7785C14.6587 26.2122 14.9804 26.6665 15.4402 26.6665H16.8316ZM23.0859 20.9634C23.1771 20.9634 23.2414 20.874 23.2123 20.7876L21.3208 15.1579C21.31 15.1257 21.2798 15.104 21.2459 15.104C21.2119 15.104 21.1818 15.1257 21.171 15.1579L19.2829 20.7877C19.2539 20.8741 19.3182 20.9634 19.4093 20.9634H23.0859Z" fill="currentColor"/>', XL = '<path d="M25.4288 6.57197C22.825 3.9682 18.6044 3.9682 16.0007 6.57197L13.1722 9.4004C12.9119 9.66075 12.9119 10.0829 13.1722 10.3432L14.1151 11.286C14.3754 11.5464 14.7975 11.5464 15.0579 11.286L17.8863 8.45759C19.4487 6.89514 21.9807 6.89514 23.5431 8.45759C25.1056 10.02 25.1056 12.552 23.5431 14.1144L20.7147 16.9429C20.4544 17.2032 20.4544 17.6253 20.7147 17.8857L21.6575 18.8285C21.9179 19.0888 22.34 19.0888 22.6003 18.8285L25.4288 16.0001C28.0325 13.3963 28.0325 9.17574 25.4288 6.57197Z" fill="currentColor"/> <path d="M9.40009 13.1726C9.66044 12.9122 10.0825 12.9122 10.3429 13.1726L11.2857 14.1154C11.5461 14.3757 11.5461 14.7978 11.2857 15.0582L8.4582 17.8857C6.89575 19.4481 6.89575 21.9801 8.4582 23.5425C10.0206 25.105 12.5526 25.105 14.1151 23.5425L16.9426 20.715C17.2029 20.4547 17.625 20.4547 17.8854 20.715L18.8282 21.6578C19.0885 21.9182 19.0885 22.3403 18.8282 22.6006L16.0007 25.4282C13.3969 28.0319 9.17635 28.0319 6.57258 25.4282C3.96881 22.8244 3.96881 18.6038 6.57258 16.0001L9.40009 13.1726Z" fill="currentColor"/> <path d="M19.159 11.616C18.8987 11.3556 18.4766 11.3556 18.2162 11.616L11.6165 18.2156C11.3562 18.476 11.3562 18.8981 11.6165 19.1584L12.8422 20.3841C13.1026 20.6444 13.5247 20.6444 13.785 20.3841L20.3847 13.7844C20.645 13.5241 20.645 13.102 20.3847 12.8416L19.159 11.616Z" fill="currentColor"/>', JL = '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 4C19.6372 4 22.5941 6.91273 22.6653 10.5329C22.6668 10.6065 22.7264 10.6667 22.8 10.6667H24.6667C25.0348 10.6667 25.3333 10.9651 25.3333 11.3333V26C25.3333 26.3682 25.0348 26.6667 24.6667 26.6667H7.33332C6.96513 26.6667 6.66666 26.3682 6.66666 26V11.3333C6.66666 10.9651 6.96513 10.6667 7.33332 10.6667H9.19999C9.27363 10.6667 9.33319 10.6065 9.33464 10.5329C9.40591 6.91273 12.3628 4 16 4ZM12.0022 10.5331C11.9998 10.6067 12.0597 10.6667 12.1333 10.6667H19.8667C19.9403 10.6667 20.0002 10.6067 19.9978 10.5331C19.9273 8.38578 18.1644 6.66667 16 6.66667C13.8356 6.66667 12.0726 8.38578 12.0022 10.5331ZM9.33332 14C9.33332 13.6318 9.6318 13.3333 9.99999 13.3333H22C22.3682 13.3333 22.6667 13.6318 22.6667 14V23.3333C22.6667 23.7015 22.3682 24 22 24H9.99999C9.6318 24 9.33332 23.7015 9.33332 23.3333V14Z" fill="currentColor"/>', ek = '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.3553 6.58214C20.6472 6.33698 20.6763 5.89459 20.3892 5.64378C19.2173 4.6201 17.6841 4 16.0052 4C12.3676 4 9.4111 6.91235 9.33985 10.5329C9.3384 10.6065 9.27884 10.6667 9.2052 10.6667H7.33332C6.96513 10.6667 6.66666 10.9651 6.66666 11.3333V26C6.66666 26.3682 6.96513 26.6667 7.33332 26.6667H24.6667C25.0348 26.6667 25.3333 26.3682 25.3333 26V11.3333C25.3333 10.9651 25.0348 10.6667 24.6667 10.6667H12.1385C12.0649 10.6667 12.005 10.6067 12.0074 10.5331C12.0778 8.38532 13.8403 6.66667 16.0052 6.66667C16.4349 6.66667 16.8489 6.73438 17.237 6.85938C17.6523 6.99402 18.038 7.19469 18.3814 7.44892C18.6602 7.6553 19.0494 7.67862 19.3151 7.45556L20.3553 6.58214ZM9.33332 14C9.33332 13.6318 9.6318 13.3333 9.99999 13.3333H22C22.3682 13.3333 22.6667 13.6318 22.6667 14V23.3333C22.6667 23.7015 22.3682 24 22 24H9.99999C9.6318 24 9.33332 23.7015 9.33332 23.3333V14Z" fill="currentColor"/>', tk = '<path d="M8 13.3333C6.52724 13.3333 5.33334 14.5273 5.33334 16C5.33334 17.4728 6.52724 18.6667 8 18.6667C9.47276 18.6667 10.6667 17.4728 10.6667 16C10.6667 14.5273 9.47276 13.3333 8 13.3333Z" fill="currentColor"/> <path d="M13.3333 16C13.3333 14.5273 14.5272 13.3333 16 13.3333C17.4728 13.3333 18.6667 14.5273 18.6667 16C18.6667 17.4728 17.4728 18.6667 16 18.6667C14.5272 18.6667 13.3333 17.4728 13.3333 16Z" fill="currentColor"/> <path d="M21.3333 16C21.3333 14.5273 22.5272 13.3333 24 13.3333C25.4728 13.3333 26.6667 14.5273 26.6667 16C26.6667 17.4728 25.4728 18.6667 24 18.6667C22.5272 18.6667 21.3333 17.4728 21.3333 16Z" fill="currentColor"/>', nk = '<path d="M13.3333 8.00001C13.3333 9.47277 14.5272 10.6667 16 10.6667C17.4728 10.6667 18.6667 9.47277 18.6667 8.00001C18.6667 6.52725 17.4728 5.33334 16 5.33334C14.5272 5.33334 13.3333 6.52725 13.3333 8.00001Z" fill="currentColor"/> <path d="M16 18.6667C14.5272 18.6667 13.3333 17.4728 13.3333 16C13.3333 14.5273 14.5272 13.3333 16 13.3333C17.4728 13.3333 18.6667 14.5273 18.6667 16C18.6667 17.4728 17.4728 18.6667 16 18.6667Z" fill="currentColor"/> <path d="M16 26.6667C14.5272 26.6667 13.3333 25.4728 13.3333 24C13.3333 22.5273 14.5272 21.3333 16 21.3333C17.4728 21.3333 18.6667 22.5273 18.6667 24C18.6667 25.4728 17.4728 26.6667 16 26.6667Z" fill="currentColor"/>', sk = '<path d="M22.3257 15.8354C22.1263 15.8695 21.9256 15.7966 21.7826 15.6536L16.347 10.218C16.2039 10.0749 16.1311 9.87422 16.1652 9.67483C16.3448 8.62476 16.84 7.61813 17.6506 6.80752C19.7334 4.72472 23.1103 4.72472 25.193 6.80752C27.2758 8.89032 27.2758 12.2672 25.193 14.35C24.3824 15.1606 23.3758 15.6557 22.3257 15.8354Z" fill="currentColor"/> <path d="M15.3386 12.9809C15.0613 12.7036 14.6058 12.7244 14.3549 13.0257L5.78725 23.3142C5.56666 23.5791 5.58439 23.9685 5.82814 24.2122L7.79205 26.1761C8.03586 26.42 8.42536 26.4376 8.69024 26.2169L18.9754 17.6459C19.2766 17.3949 19.2972 16.9395 19.02 16.6623L15.3386 12.9809Z" fill="currentColor"/>', ik = '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66667 5.33334C8.29848 5.33334 8 5.63182 8 6.00001V26C8 26.3682 8.29848 26.6667 8.66667 26.6667H23.3333C23.7015 26.6667 24 26.3682 24 26V6.00001C24 5.63182 23.7015 5.33334 23.3333 5.33334H8.66667ZM11.7334 8.39967C11.3652 8.39967 11.0667 8.69815 11.0667 9.06634V22.9335C11.0667 23.3017 11.3652 23.6002 11.7334 23.6002H20.2673C20.6354 23.6002 20.9339 23.3017 20.9339 22.9335V9.06633C20.9339 8.69814 20.6354 8.39967 20.2673 8.39967H11.7334Z" fill="currentColor"/>', rk = '<path d="M11.3793 8.06476C7.08494 11.0717 6.04129 16.9905 9.04821 21.2848C12.0551 25.5791 17.9739 26.6228 22.2683 23.6159C23.1791 22.9781 23.9437 22.2093 24.5544 21.3529C24.8954 20.8746 24.4241 20.2717 23.8397 20.3315C20.7636 20.6467 17.6125 19.331 15.713 16.6181C13.8134 13.9052 13.6547 10.4942 15.003 7.71137C15.2591 7.18276 14.8537 6.53361 14.2877 6.69049C13.274 6.97145 12.2901 7.427 11.3793 8.06476Z" fill="currentColor"/>', ok = '<path d="M26.6667 5.99662C26.6667 5.62843 26.3682 5.32996 26 5.32996L11.3333 5.32996C10.9651 5.32996 10.6667 5.62843 10.6667 5.99662L10.6667 7.10189C10.6667 7.13727 10.6807 7.1712 10.7057 7.19621L13.1058 9.59459C13.1898 9.67854 13.3333 9.61904 13.3333 9.50028L13.3333 8.66329C13.3333 8.2951 13.6318 7.99662 14 7.99662L23.3333 7.99662C23.7015 7.99662 24 8.2951 24 8.66329V14.9014C24 14.9994 23.8978 15.0642 23.8075 15.0262C23.2516 14.7925 22.6409 14.6633 22 14.6633C20.9812 14.6633 20.0386 14.9898 19.2712 15.5438C19.206 15.5909 19.2001 15.6849 19.257 15.7417L21.0042 17.4878C21.0455 17.529 21.1085 17.5382 21.1614 17.5137C21.4165 17.3958 21.7005 17.33 22 17.33C23.1046 17.33 24 18.2254 24 19.33C24 19.6289 23.9344 19.9126 23.8168 20.1673C23.7924 20.2202 23.8016 20.2833 23.8429 20.3245L25.5901 22.0705C25.647 22.1274 25.7409 22.1214 25.788 22.0562C26.3409 21.2893 26.6667 20.3476 26.6667 19.33L26.6667 5.99662Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1158 25.5424C25.1678 25.4903 25.1678 25.4059 25.1157 25.3538L6.63661 6.88715C6.58454 6.83511 6.50014 6.83512 6.44808 6.88718L5.12799 8.20727C4.86764 8.46762 4.86771 8.88966 5.12815 9.14992L10.6276 14.6456C10.6526 14.6707 10.6667 14.7046 10.6667 14.74V17.5681C10.6667 17.666 10.5644 17.7309 10.4741 17.6929C9.91823 17.4591 9.30753 17.33 8.66667 17.33C6.08934 17.33 4 19.4193 4 21.9966C4 24.5739 6.08934 26.6633 8.66667 26.6633C11.244 26.6633 13.3333 24.5739 13.3333 21.9966L13.3333 17.6713C13.3333 17.5526 13.4769 17.4931 13.5609 17.577L22.8528 26.8626C23.1132 27.1229 23.5354 27.1228 23.7957 26.8624L25.1158 25.5424ZM8.66667 23.9966C9.77123 23.9966 10.6667 23.1012 10.6667 21.9966C10.6667 20.8921 9.77124 19.9966 8.66667 19.9966C7.5621 19.9966 6.66667 20.892 6.66667 21.9966C6.66667 23.1012 7.5621 23.9966 8.66667 23.9966Z" fill="currentColor"/>', ak = '<path fill-rule="evenodd" clip-rule="evenodd" d="M26.6667 5.99998C26.6667 5.63179 26.3682 5.33331 26 5.33331H11.3333C10.9651 5.33331 10.6667 5.63179 10.6667 5.99998V17.5714C10.6667 17.6694 10.5644 17.7342 10.4741 17.6962C9.91823 17.4625 9.30754 17.3333 8.66667 17.3333C6.08934 17.3333 4 19.4226 4 22C4 24.5773 6.08934 26.6666 8.66667 26.6666C11.244 26.6666 13.3333 24.5773 13.3333 22V8.66665C13.3333 8.29846 13.6318 7.99998 14 7.99998L23.3333 7.99998C23.7015 7.99998 24 8.29846 24 8.66665V14.9048C24 15.0027 23.8978 15.0675 23.8075 15.0296C23.2516 14.7958 22.6409 14.6666 22 14.6666C19.4227 14.6666 17.3333 16.756 17.3333 19.3333C17.3333 21.9106 19.4227 24 22 24C24.5773 24 26.6667 21.9106 26.6667 19.3333V5.99998ZM22 21.3333C23.1046 21.3333 24 20.4379 24 19.3333C24 18.2287 23.1046 17.3333 22 17.3333C20.8954 17.3333 20 18.2287 20 19.3333C20 20.4379 20.8954 21.3333 22 21.3333ZM8.66667 24C9.77124 24 10.6667 23.1045 10.6667 22C10.6667 20.8954 9.77124 20 8.66667 20C7.5621 20 6.66667 20.8954 6.66667 22C6.66667 23.1045 7.5621 24 8.66667 24Z" fill="currentColor"/>', ck = '<path d="M17.5091 24.6594C17.5091 25.2066 16.8864 25.5208 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9991 9.36923 19.9991H4.66667C4.29848 19.9991 4 19.7006 4 19.3325V12.6658C4 12.2976 4.29848 11.9991 4.66667 11.9991H9.37115C9.39967 11.9991 9.42745 11.99 9.45039 11.973L16.4463 6.8036C16.8863 6.47842 17.5091 6.79259 17.5091 7.33977L17.5091 24.6594Z" fill="currentColor"/> <path d="M28.8621 13.6422C29.1225 13.3818 29.1225 12.9597 28.8621 12.6994L27.9193 11.7566C27.659 11.4962 27.2368 11.4962 26.9765 11.7566L24.7134 14.0197C24.6613 14.0717 24.5769 14.0717 24.5248 14.0197L22.262 11.7568C22.0016 11.4964 21.5795 11.4964 21.3191 11.7568L20.3763 12.6996C20.116 12.9599 20.116 13.382 20.3763 13.6424L22.6392 15.9053C22.6913 15.9573 22.6913 16.0418 22.6392 16.0938L20.3768 18.3562C20.1165 18.6166 20.1165 19.0387 20.3768 19.299L21.3196 20.2419C21.58 20.5022 22.0021 20.5022 22.2624 20.2418L24.5248 17.9795C24.5769 17.9274 24.6613 17.9274 24.7134 17.9795L26.976 20.2421C27.2363 20.5024 27.6585 20.5024 27.9188 20.2421L28.8616 19.2992C29.122 19.0389 29.122 18.6168 28.8616 18.3564L26.599 16.0938C26.547 16.0418 26.547 15.9573 26.599 15.9053L28.8621 13.6422Z" fill="currentColor"/>', lk = '<path d="M6.39617 6.78532C5.9561 6.46017 5.33334 6.77434 5.33334 7.32151V24.6785C5.33334 25.2257 5.95612 25.5398 6.39619 25.2147L18.1415 16.5358C18.5021 16.2693 18.5021 15.7299 18.1415 15.4634L6.39617 6.78532Z" fill="currentColor"/> <path d="M23.5339 6.6667C23.1657 6.6667 22.8672 6.96518 22.8672 7.33337V24.6667C22.8672 25.0349 23.1657 25.3334 23.5339 25.3334H25.5339C25.902 25.3334 26.2005 25.0349 26.2005 24.6667V7.33337C26.2005 6.96518 25.902 6.6667 25.5339 6.6667H23.5339Z" fill="currentColor"/>', uk = '<path d="M26.6009 16.0725C26.6009 16.424 26.4302 17.1125 25.9409 18.0213C25.4676 18.8976 24.7542 19.8715 23.8182 20.7783C21.9489 22.5905 19.2662 24.0667 15.9342 24.0667C12.6009 24.0667 9.91958 22.5915 8.04891 20.78C7.11424 19.8736 6.40091 18.9 5.92758 18.0236C5.43824 17.1149 5.26758 16.4257 5.26758 16.0725C5.26758 15.7193 5.43824 15.0293 5.92891 14.1193C6.40224 13.2416 7.11558 12.2665 8.05158 11.3587C9.92224 9.54398 12.6049 8.06665 15.9342 8.06665C19.2636 8.06665 21.9449 9.54505 23.8169 11.3604C24.7529 12.2687 25.4662 13.2441 25.9396 14.1216C26.4302 15.0317 26.6009 15.7209 26.6009 16.0725Z" stroke="currentColor" stroke-width="3"/> <path d="M15.9336 20.0667C18.1427 20.0667 19.9336 18.2758 19.9336 16.0667C19.9336 13.8575 18.1427 12.0667 15.9336 12.0667C13.7245 12.0667 11.9336 13.8575 11.9336 16.0667C11.9336 18.2758 13.7245 20.0667 15.9336 20.0667Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M27.2323 25.0624L6.93878 4.76886C6.78118 4.61126 6.70762 4.57052 6.61919 4.54372C6.53077 4.51692 6.44033 4.51691 6.3519 4.54372C6.26347 4.57052 6.18991 4.61126 6.03231 4.76886L4.77032 6.03085C4.61272 6.18845 4.57198 6.26201 4.54518 6.35044C4.51838 6.43887 4.51838 6.5293 4.54518 6.61773C4.57198 6.70616 4.61272 6.77972 4.77032 6.93732L25.0639 27.2308C25.2215 27.3884 25.295 27.4292 25.3834 27.456C25.4719 27.4828 25.5623 27.4828 25.6507 27.456C25.7392 27.4292 25.8127 27.3885 25.9703 27.2309L27.2323 25.9689C27.3899 25.8113 27.4307 25.7377 27.4575 25.6493C27.4843 25.5608 27.4843 25.4704 27.4575 25.382C27.4307 25.2935 27.3899 25.22 27.2323 25.0624Z" fill="currentColor"/>', dk = '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.0873 13.6471C24.4011 8.96745 20.6901 5 16 5C11.3099 5 7.599 8.96745 7.9115 13.6471L8.12463 16.8194C8.13258 16.9377 8.10886 17.0559 8.05592 17.1619L5.95553 21.3689C5.73423 21.8121 6.05657 22.3333 6.55199 22.3333H11.2001C11.2737 22.3333 11.3332 22.3934 11.3353 22.467C11.406 24.9825 13.4674 27 16.0001 27C18.5327 27 20.5941 24.9825 20.6649 22.467C20.6669 22.3934 20.7264 22.3333 20.8001 22.3333H25.4481C25.9435 22.3333 26.2659 21.8121 26.0446 21.3689L23.9441 17.1618C23.8912 17.0558 23.8675 16.9377 23.8754 16.8196L24.0873 13.6471ZM17.9957 22.4667C18.0005 22.3932 17.9404 22.3333 17.8667 22.3333H14.1334C14.0598 22.3333 13.9996 22.3932 14.0044 22.4667C14.0731 23.5091 14.9403 24.3333 16.0001 24.3333C17.0598 24.3333 17.9271 23.5091 17.9957 22.4667ZM21.9986 19.6667C22.0976 19.6667 22.1621 19.5624 22.1179 19.4738L21.5583 18.353C21.2938 17.8232 21.1752 17.2326 21.2146 16.6418L21.4266 13.4687C21.6371 10.3288 19.1474 7.66667 16 7.66667C12.8532 7.66667 10.3632 10.3293 10.5722 13.4695L10.7853 16.6407C10.825 17.2319 10.7064 17.823 10.4418 18.3531L9.88224 19.4738C9.83798 19.5624 9.90245 19.6667 10.0015 19.6667H21.9986Z" fill="currentColor"/>', hk = '<path d="M25.14 25.1089C25.0171 25.2532 24.8356 25.3333 24.646 25.3333H22.8124C22.1084 25.3333 21.7734 24.1872 22.2745 23.6927C23.9161 22.0729 24.9336 19.822 24.9336 17.3333C24.9336 12.3997 20.9336 8.39973 16 8.39973C11.0664 8.39973 7.06641 12.3997 7.06641 17.3333C7.06641 19.822 8.08389 22.0729 9.72555 23.6927C10.2266 24.1872 9.89155 25.3333 9.18762 25.3333H7.35398C7.16436 25.3333 6.98294 25.2532 6.86001 25.1089C5.07703 23.015 4 20.2991 4 17.3333C4 10.7057 9.3724 5.33333 16 5.33333C22.6276 5.33333 28 10.7057 28 17.3333C28 20.2991 26.923 23.015 25.14 25.1089Z" fill="currentColor"/> <path d="M21.1992 14.3399C21.4595 14.0796 21.4595 13.6575 21.1992 13.3971L20.2564 12.4543C19.996 12.194 19.5739 12.194 19.3136 12.4543L16.4492 15.3187C16.4185 15.3493 16.3749 15.3629 16.332 15.3568C16.2236 15.3414 16.1127 15.3334 16 15.3334C14.7113 15.3334 13.6667 16.378 13.6667 17.6667C13.6667 18.9554 14.7113 20 16 20C17.2887 20 18.3333 18.9554 18.3333 17.6667C18.3333 17.5464 18.3242 17.4283 18.3067 17.313C18.3001 17.2696 18.3136 17.2255 18.3446 17.1945L21.1992 14.3399Z" fill="currentColor"/>', fk = '<path d="M8.66667 6.66667C8.29848 6.66667 8 6.96514 8 7.33333V24.6667C8 25.0349 8.29848 25.3333 8.66667 25.3333H12.6667C13.0349 25.3333 13.3333 25.0349 13.3333 24.6667V7.33333C13.3333 6.96514 13.0349 6.66667 12.6667 6.66667H8.66667Z" fill="currentColor"/> <path d="M19.3333 6.66667C18.9651 6.66667 18.6667 6.96514 18.6667 7.33333V24.6667C18.6667 25.0349 18.9651 25.3333 19.3333 25.3333H23.3333C23.7015 25.3333 24 25.0349 24 24.6667V7.33333C24 6.96514 23.7015 6.66667 23.3333 6.66667H19.3333Z" fill="currentColor"/>', pk = '<path d="M5.33334 26V19.4667C5.33334 19.393 5.39304 19.3333 5.46668 19.3333H7.86668C7.94031 19.3333 8.00001 19.393 8.00001 19.4667V23.3333C8.00001 23.7015 8.29849 24 8.66668 24H23.3333C23.7015 24 24 23.7015 24 23.3333V8.66666C24 8.29847 23.7015 7.99999 23.3333 7.99999H19.4667C19.393 7.99999 19.3333 7.9403 19.3333 7.86666V5.46666C19.3333 5.39302 19.393 5.33333 19.4667 5.33333H26C26.3682 5.33333 26.6667 5.63181 26.6667 5.99999V26C26.6667 26.3682 26.3682 26.6667 26 26.6667H6.00001C5.63182 26.6667 5.33334 26.3682 5.33334 26Z" fill="currentColor"/> <path d="M14.0098 8.42359H10.806C10.6872 8.42359 10.6277 8.56721 10.7117 8.6512L16.5491 14.4886C16.8094 14.7489 16.8094 15.171 16.5491 15.4314L15.3234 16.657C15.0631 16.9174 14.641 16.9174 14.3806 16.657L8.63739 10.9138C8.55339 10.8298 8.40978 10.8893 8.40978 11.0081V14.0236C8.40978 14.3918 8.1113 14.6903 7.74311 14.6903H6.00978C5.64159 14.6903 5.34311 14.3918 5.34311 14.0236L5.34311 6.02359C5.34311 5.6554 5.64159 5.35692 6.00978 5.35692L14.0098 5.35692C14.378 5.35692 14.6764 5.6554 14.6764 6.02359V7.75692C14.6764 8.12511 14.378 8.42359 14.0098 8.42359Z" fill="currentColor"/>', Ck = '<path d="M16 15.3333C15.6318 15.3333 15.3333 15.6318 15.3333 16V20C15.3333 20.3682 15.6318 20.6667 16 20.6667H21.3333C21.7015 20.6667 22 20.3682 22 20V16C22 15.6318 21.7015 15.3333 21.3333 15.3333H16Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33333 7.33334C5.33333 6.96515 5.63181 6.66667 5.99999 6.66667H26C26.3682 6.66667 26.6667 6.96515 26.6667 7.33334V24.6667C26.6667 25.0349 26.3682 25.3333 26 25.3333H5.99999C5.63181 25.3333 5.33333 25.0349 5.33333 24.6667V7.33334ZM7.99999 10C7.99999 9.63182 8.29847 9.33334 8.66666 9.33334H23.3333C23.7015 9.33334 24 9.63182 24 10V22C24 22.3682 23.7015 22.6667 23.3333 22.6667H8.66666C8.29847 22.6667 7.99999 22.3682 7.99999 22V10Z" fill="currentColor"/>', mk = '<path d="M10.6667 6.6548C10.6667 6.10764 11.2894 5.79346 11.7295 6.11862L24.377 15.4634C24.7377 15.7298 24.7377 16.2692 24.3771 16.5357L11.7295 25.8813C11.2895 26.2065 10.6667 25.8923 10.6667 25.3451L10.6667 6.6548Z" fill="currentColor"/>', gk = '<path d="M13.9213 5.53573C14.3146 5.45804 14.6666 5.76987 14.6666 6.17079V7.57215C14.6666 7.89777 14.4305 8.17277 14.114 8.24925C12.5981 8.61559 11.2506 9.41368 10.2091 10.506C9.98474 10.7414 9.62903 10.8079 9.34742 10.6453L8.14112 9.94885C7.79394 9.7484 7.69985 9.28777 7.96359 8.98585C9.48505 7.24409 11.5636 6.00143 13.9213 5.53573Z" fill="currentColor"/> <path d="M5.88974 12.5908C6.01805 12.2101 6.46491 12.0603 6.81279 12.2611L8.01201 12.9535C8.29379 13.1162 8.41396 13.4577 8.32238 13.7699C8.11252 14.4854 7.99998 15.2424 7.99998 16.0257C7.99998 16.809 8.11252 17.566 8.32238 18.2814C8.41396 18.5936 8.29378 18.9352 8.01201 19.0979L6.82742 19.7818C6.48051 19.9821 6.03488 19.8337 5.90521 19.4547C5.5345 18.3712 5.33331 17.2091 5.33331 16C5.33331 14.8078 5.5289 13.6613 5.88974 12.5908Z" fill="currentColor"/> <path d="M8.17106 22.0852C7.82291 22.2862 7.72949 22.7486 7.99532 23.0502C9.51387 24.773 11.5799 26.0017 13.9213 26.4642C14.3146 26.5419 14.6666 26.2301 14.6666 25.8291V24.4792C14.6666 24.1536 14.4305 23.8786 14.114 23.8021C12.5981 23.4358 11.2506 22.6377 10.2091 21.5453C9.98474 21.31 9.62903 21.2435 9.34742 21.4061L8.17106 22.0852Z" fill="currentColor"/> <path d="M17.3333 25.8291C17.3333 26.2301 17.6857 26.5418 18.079 26.4641C22.9748 25.4969 26.6666 21.1796 26.6666 16C26.6666 10.8204 22.9748 6.50302 18.079 5.5358C17.6857 5.4581 17.3333 5.76987 17.3333 6.17079V7.57215C17.3333 7.89777 17.5697 8.17282 17.8862 8.24932C21.3942 9.09721 24 12.2572 24 16.0257C24 19.7942 21.3942 22.9542 17.8862 23.802C17.5697 23.8785 17.3333 24.1536 17.3333 24.4792V25.8291Z" fill="currentColor"/> <path d="M14.3961 10.4163C13.9561 10.0911 13.3333 10.4053 13.3333 10.9525L13.3333 21.0474C13.3333 21.5946 13.9561 21.9087 14.3962 21.5836L21.2273 16.5359C21.5879 16.2694 21.5879 15.73 21.2273 15.4635L14.3961 10.4163Z" fill="currentColor"/>', yk = '<path d="M12 7.66667C12 7.29848 12.2985 7 12.6666 7H26C26.3682 7 26.6666 7.29848 26.6666 7.66667V9.66667C26.6666 10.0349 26.3682 10.3333 26 10.3333H12.6666C12.2985 10.3333 12 10.0349 12 9.66667V7.66667Z" fill="currentColor"/> <path d="M12 15C12 14.6318 12.2985 14.3333 12.6666 14.3333H26C26.3682 14.3333 26.6666 14.6318 26.6666 15V17C26.6666 17.3682 26.3682 17.6667 26 17.6667H12.6666C12.2985 17.6667 12 17.3682 12 17V15Z" fill="currentColor"/> <path d="M5.99998 21.6667C5.63179 21.6667 5.33331 21.9651 5.33331 22.3333V24.3333C5.33331 24.7015 5.63179 25 5.99998 25H7.99998C8.36817 25 8.66665 24.7015 8.66665 24.3333V22.3333C8.66665 21.9651 8.36817 21.6667 7.99998 21.6667H5.99998Z" fill="currentColor"/> <path d="M12.6666 21.6667C12.2985 21.6667 12 21.9651 12 22.3333V24.3333C12 24.7015 12.2985 25 12.6666 25H26C26.3682 25 26.6666 24.7015 26.6666 24.3333V22.3333C26.6666 21.9651 26.3682 21.6667 26 21.6667H12.6666Z" fill="currentColor"/> <path d="M5.99998 14.3333C5.63179 14.3333 5.33331 14.6318 5.33331 15V17C5.33331 17.3682 5.63179 17.6667 5.99998 17.6667H7.99998C8.36817 17.6667 8.66665 17.3682 8.66665 17V15C8.66665 14.6318 8.36817 14.3333 7.99998 14.3333H5.99998Z" fill="currentColor"/> <path d="M5.99998 7C5.63179 7 5.33331 7.29848 5.33331 7.66667V9.66667C5.33331 10.0349 5.63179 10.3333 5.99998 10.3333H7.99998C8.36817 10.3333 8.66665 10.0349 8.66665 9.66667V7.66667C8.66665 7.29848 8.36817 7 7.99998 7H5.99998Z" fill="currentColor"/>', vk = '<path d="M25.1377 6.78532C25.5778 6.46017 26.2005 6.77434 26.2005 7.32151V24.6785C26.2005 25.2257 25.5777 25.5398 25.1377 25.2147L13.3924 16.5358C13.0317 16.2693 13.0317 15.7299 13.3924 15.4634L25.1377 6.78532Z" fill="currentColor"/> <path d="M8 6.6667C8.36819 6.6667 8.66667 6.96518 8.66667 7.33337V24.6667C8.66667 25.0349 8.36819 25.3334 8 25.3334H6C5.63181 25.3334 5.33333 25.0349 5.33333 24.6667V7.33337C5.33333 6.96518 5.63181 6.6667 6 6.6667H8Z" fill="currentColor"/>', bk = '<path d="M13.5178 19.8304C13.5178 20.021 13.6724 20.1756 13.863 20.1756H17.0203C17.2109 20.1756 17.3654 20.021 17.3654 19.8304C17.3722 19.1671 17.4568 18.6088 17.6193 18.1553C17.7885 17.7019 18.0422 17.3025 18.3806 16.9574C18.7258 16.6122 19.1657 16.2806 19.7004 15.9625C20.3366 15.5835 20.8882 15.1605 21.3552 14.6935C21.8222 14.2197 22.1843 13.6783 22.4414 13.0692C22.7054 12.4533 22.8374 11.7494 22.8374 10.9575C22.8374 9.77315 22.543 8.76133 21.9542 7.9221C21.3653 7.08287 20.5532 6.44329 19.5177 6.00338C18.4822 5.55669 17.291 5.33334 15.9442 5.33334C14.7192 5.33334 13.5991 5.5533 12.5839 5.99322C11.5687 6.42638 10.7531 7.08626 10.1372 7.97286C9.62803 8.70029 9.31776 9.58964 9.20642 10.6409C9.16696 11.0135 9.47146 11.323 9.84618 11.323H12.6619C13.0206 11.323 13.3043 11.0356 13.3876 10.6867C13.4552 10.4034 13.5629 10.1519 13.7107 9.9322C13.9611 9.55319 14.2826 9.26893 14.6752 9.07943C15.0677 8.88316 15.4839 8.78502 15.9239 8.78502C16.3773 8.78502 16.7902 8.87977 17.1624 9.06928C17.5414 9.25878 17.8426 9.5295 18.0659 9.88144C18.2893 10.2334 18.401 10.6428 18.401 11.1098C18.401 11.5497 18.3028 11.9491 18.1065 12.3078C17.9103 12.6597 17.6463 12.9812 17.3147 13.2722C16.9831 13.5632 16.6074 13.8441 16.1878 14.1148C15.6261 14.4668 15.1455 14.8593 14.7462 15.2925C14.3469 15.7256 14.0424 16.2941 13.8326 16.998C13.6295 17.7019 13.5246 18.646 13.5178 19.8304Z" fill="currentColor"/> <path d="M13.7919 25.9622C14.2725 26.436 14.8511 26.6728 15.5279 26.6728C15.9611 26.6728 16.3604 26.5646 16.7259 26.348C17.0913 26.1246 17.3858 25.8302 17.6091 25.4648C17.8392 25.0925 17.9577 24.683 17.9644 24.2364C17.9577 23.5731 17.7106 23.0046 17.2233 22.5308C16.736 22.0571 16.1709 21.8202 15.5279 21.8202C14.8511 21.8202 14.2725 22.0571 13.7919 22.5308C13.3182 23.0046 13.0847 23.5731 13.0915 24.2364C13.0847 24.9064 13.3182 25.4817 13.7919 25.9622Z" fill="currentColor"/>', wk = '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.33335 6C6.96516 6 6.66669 6.29848 6.66669 6.66667V13.3333C6.66669 13.7015 6.96516 14 7.33335 14H24.6667C25.0349 14 25.3334 13.7015 25.3334 13.3333V6.66667C25.3334 6.29848 25.0349 6 24.6667 6H7.33335ZM9.46669 8.66667C9.39305 8.66667 9.33335 8.72636 9.33335 8.8V11.2C9.33335 11.2736 9.39305 11.3333 9.46669 11.3333H22.5334C22.607 11.3333 22.6667 11.2736 22.6667 11.2V8.8C22.6667 8.72636 22.607 8.66667 22.5334 8.66667H9.46669Z" fill="currentColor"/> <path d="M6.66669 18C6.66669 17.6318 6.96516 17.3333 7.33335 17.3333H24.6667C25.0349 17.3333 25.3334 17.6318 25.3334 18V19.3333C25.3334 19.7015 25.0349 20 24.6667 20H7.33335C6.96516 20 6.66669 19.7015 6.66669 19.3333V18Z" fill="currentColor"/> <path d="M6.66669 24C6.66669 23.6318 6.96516 23.3333 7.33335 23.3333H24.6667C25.0349 23.3333 25.3334 23.6318 25.3334 24V25.3333C25.3334 25.7015 25.0349 26 24.6667 26H7.33335C6.96516 26 6.66669 25.7015 6.66669 25.3333V24Z" fill="currentColor"/>', xk = '<path d="M16 20.6667C18.5773 20.6667 20.6666 18.5773 20.6666 16C20.6666 13.4227 18.5773 11.3333 16 11.3333C13.4227 11.3333 11.3333 13.4227 11.3333 16C11.3333 18.5773 13.4227 20.6667 16 20.6667Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M26.6666 16C26.6666 21.891 21.891 26.6667 16 26.6667C10.1089 26.6667 5.33331 21.891 5.33331 16C5.33331 10.109 10.1089 5.33334 16 5.33334C21.891 5.33334 26.6666 10.109 26.6666 16ZM24 16C24 20.4183 20.4183 24 16 24C11.5817 24 7.99998 20.4183 7.99998 16C7.99998 11.5817 11.5817 8.00001 16 8.00001C20.4183 8.00001 24 11.5817 24 16Z" fill="currentColor"/>', Sk = '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 26.6667C21.891 26.6667 26.6666 21.891 26.6666 16C26.6666 10.109 21.891 5.33334 16 5.33334C10.1089 5.33334 5.33331 10.109 5.33331 16C5.33331 21.891 10.1089 26.6667 16 26.6667ZM16 23.3333C20.0501 23.3333 23.3333 20.0501 23.3333 16C23.3333 11.9499 20.0501 8.66668 16 8.66668C11.9499 8.66668 8.66665 11.9499 8.66665 16C8.66665 20.0501 11.9499 23.3333 16 23.3333Z" fill="currentColor"/>', Ek = '<path d="M22.1969 4.98846C21.7569 4.66331 21.1341 4.97748 21.1341 5.52465V7.20266C21.1341 7.27629 21.0744 7.33599 21.0008 7.33599H11.1341C8.18859 7.33599 5.80078 9.72381 5.80078 12.6693V14.6693C5.80078 15.0375 6.09925 15.336 6.46744 15.336H8.20078C8.56897 15.336 8.86744 15.0375 8.86744 14.6693V13.0691C8.86744 11.5963 10.0613 10.4024 11.5341 10.4024H21.0008C21.0744 10.4024 21.1341 10.4621 21.1341 10.5357V12.215C21.1341 12.7621 21.7569 13.0763 22.197 12.7511L26.7242 9.40583C27.0849 9.13934 27.0849 8.59995 26.7242 8.33347L22.1969 4.98846Z" fill="currentColor"/> <path d="M16 18.0001C17.1046 18.0001 18 17.1046 18 16.0001C18 14.8955 17.1046 14.0001 16 14.0001C14.8954 14.0001 14 14.8955 14 16.0001C14 17.1046 14.8954 18.0001 16 18.0001Z" fill="currentColor"/> <path d="M20.8652 24.6641H10.9986C10.9249 24.6641 10.8652 24.7238 10.8652 24.7975V26.4755C10.8652 27.0226 10.2425 27.3368 9.80241 27.0116L5.27514 23.6666C4.91448 23.4002 4.91447 22.8608 5.27512 22.5943L9.80239 19.249C10.2425 18.9238 10.8652 19.238 10.8652 19.7851V21.4644C10.8652 21.538 10.9249 21.5977 10.9986 21.5977H20.4652C21.938 21.5977 23.1319 20.4038 23.1319 18.931V17.3308C23.1319 16.9626 23.4304 16.6641 23.7986 16.6641H25.5319C25.9001 16.6641 26.1986 16.9626 26.1986 17.3308V19.3308C26.1986 22.2763 23.8108 24.6641 20.8652 24.6641Z" fill="currentColor"/>', $k = '<path d="M5.33333 12C5.33333 9.05447 7.72115 6.66666 10.6667 6.66666H21.3333C24.2788 6.66666 26.6667 9.05447 26.6667 12V20C26.6667 22.9455 24.2788 25.3333 21.3333 25.3333H21.2922C21.2185 25.3333 21.1589 25.393 21.1589 25.4667V27.1447C21.1589 27.6918 20.5361 28.006 20.096 27.6809L15.5687 24.3358C15.2081 24.0694 15.2081 23.53 15.5687 23.2635L20.096 19.9182C20.5361 19.593 21.1589 19.9072 21.1589 20.4543V22.1126C21.1589 22.1906 21.2257 22.2522 21.303 22.2415C22.6009 22.0617 23.6003 20.9477 23.6003 19.6003V12.3997C23.6003 10.927 22.4063 9.73306 20.9336 9.73306H11.0664C9.59365 9.73306 8.39974 10.927 8.39974 12.3997V19.6003C8.39974 21.073 9.59365 22.2669 11.0664 22.2669H11.5091C11.8773 22.2669 12.1758 22.5654 12.1758 22.9336V24.6667C12.1758 25.0348 11.8773 25.3333 11.5091 25.3333H10.6667C7.72115 25.3333 5.33333 22.9455 5.33333 20V12Z" fill="currentColor"/> <path d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z" fill="currentColor"/>', Tk = '<path d="M10.6666 6.66666C7.72113 6.66666 5.33331 9.05447 5.33331 12V20C5.33331 22.9455 7.72113 25.3333 10.6666 25.3333H11.5091C11.8773 25.3333 12.1758 25.0348 12.1758 24.6667V22.9336C12.1758 22.5654 11.8773 22.2669 11.5091 22.2669H11.0664C9.59363 22.2669 8.39972 21.073 8.39972 19.6003V12.3997C8.39972 10.927 9.59363 9.73306 11.0664 9.73306H20.9336C22.4063 9.73306 23.6002 10.927 23.6002 12.3997V19.6003C23.6002 20.9477 22.6009 22.0617 21.303 22.2415C21.2257 22.2522 21.1588 22.1906 21.1588 22.1126V20.4543C21.1588 19.9072 20.536 19.593 20.096 19.9182L15.5687 23.2635C15.2081 23.53 15.2081 24.0694 15.5687 24.3358L20.096 27.6809C20.5361 28.006 21.1588 27.6918 21.1588 27.1447V25.4667C21.1588 25.393 21.2185 25.3333 21.2922 25.3333H21.3333C24.2788 25.3333 26.6666 22.9455 26.6666 20V12C26.6666 9.05447 24.2788 6.66666 21.3333 6.66666H10.6666Z" fill="currentColor"/>', Pk = '<path d="M22.1969 4.98846C21.7569 4.66331 21.1341 4.97748 21.1341 5.52465V7.20266C21.1341 7.27629 21.0744 7.33599 21.0008 7.33599H11.1341C8.18859 7.33599 5.80078 9.72381 5.80078 12.6693V14.6693C5.80078 15.0375 6.09925 15.336 6.46744 15.336H8.20078C8.56897 15.336 8.86744 15.0375 8.86744 14.6693V13.0691C8.86744 11.5963 10.0613 10.4024 11.5341 10.4024H21.0008C21.0744 10.4024 21.1341 10.4621 21.1341 10.5357V12.215C21.1341 12.7621 21.7569 13.0763 22.197 12.7511L26.7242 9.40583C27.0849 9.13934 27.0849 8.59995 26.7242 8.33347L22.1969 4.98846Z" fill="currentColor"/> <path d="M10.8652 24.7975C10.8652 24.7238 10.9249 24.6641 10.9986 24.6641H20.8652C23.8108 24.6641 26.1986 22.2763 26.1986 19.3308V17.3308C26.1986 16.9626 25.9001 16.6641 25.5319 16.6641H23.7986C23.4304 16.6641 23.1319 16.9626 23.1319 17.3308V18.931C23.1319 20.4038 21.938 21.5977 20.4652 21.5977H10.9986C10.9249 21.5977 10.8652 21.538 10.8652 21.4644V19.7851C10.8652 19.238 10.2425 18.9238 9.80239 19.249L5.27512 22.5943C4.91447 22.8608 4.91448 23.4002 5.27514 23.6666L9.80241 27.0116C10.2425 27.3368 10.8652 27.0226 10.8652 26.4755V24.7975Z" fill="currentColor"/>', Lk = '<path d="M15.6038 12.2147C16.0439 12.5399 16.6667 12.2257 16.6667 11.6786V10.1789C16.6667 10.1001 16.7351 10.0384 16.8134 10.0479C20.1116 10.4494 22.6667 13.2593 22.6667 16.6659C22.6667 20.3481 19.6817 23.3332 15.9995 23.3332C12.542 23.3332 9.69927 20.7014 9.36509 17.332C9.32875 16.9655 9.03371 16.6662 8.66548 16.6662L6.66655 16.6666C6.29841 16.6666 5.99769 16.966 6.02187 17.3334C6.36494 22.5454 10.7012 26.6667 16 26.6667C21.5228 26.6667 26 22.1895 26 16.6667C26 11.4103 21.9444 7.10112 16.7916 6.69757C16.7216 6.69209 16.6667 6.63396 16.6667 6.56372V4.98824C16.6667 4.44106 16.0439 4.12689 15.6038 4.45206L11.0765 7.79738C10.7159 8.06387 10.7159 8.60326 11.0766 8.86973L15.6038 12.2147Z" fill="currentColor"/>', kk = '<path d="M24.1559 5.23019C24.5428 4.84328 25.2053 5.06149 25.2866 5.60258L26.1226 11.1691C26.1892 11.6126 25.8078 11.994 25.3643 11.9274L19.7976 11.0916C19.2564 11.0104 19.0382 10.3479 19.4251 9.96096L20.726 8.66015C20.7811 8.60502 20.7771 8.51422 20.7167 8.46489C17.5744 5.89762 12.9359 6.07926 10.0054 9.00981C9.65698 9.35822 9.34743 9.73077 9.07673 10.1221C8.94598 10.3111 8.73407 10.4307 8.50425 10.4307H6.88409C6.40459 10.4307 6.08461 9.9401 6.31609 9.52018C6.78985 8.66079 7.39107 7.85289 8.11977 7.12419C12.0969 3.14702 18.4334 2.96713 22.6241 6.5845C22.6774 6.63054 22.7577 6.62845 22.8075 6.57864L24.1559 5.23019Z" fill="currentColor"/> <path d="M10.8151 15.5287C10.5548 15.2683 10.5548 14.8462 10.8151 14.5859L14.5864 10.8147C14.8467 10.5543 15.2688 10.5543 15.5292 10.8147L21.186 16.4715C21.4464 16.7319 21.4464 17.154 21.186 17.4143L17.4148 21.1856C17.1544 21.4459 16.7323 21.4459 16.472 21.1856L10.8151 15.5287Z" fill="currentColor"/> <path d="M6.71333 26.3974C6.79459 26.9385 7.4571 27.1567 7.844 26.7698L9.19245 25.4214C9.24227 25.3715 9.32254 25.3695 9.37587 25.4155C13.5665 29.0329 19.903 28.853 23.8801 24.8758C24.6088 24.1471 25.2101 23.3392 25.6838 22.4798C25.9153 22.0599 25.5953 21.5693 25.1158 21.5693H23.4957C23.2658 21.5693 23.0539 21.6889 22.9232 21.8779C22.6525 22.2692 22.3429 22.6418 21.9945 22.9902C19.064 25.9207 14.4255 26.1024 11.2832 23.5351C11.2228 23.4858 11.2188 23.395 11.274 23.3399L12.5748 22.039C12.9617 21.6521 12.7435 20.9896 12.2024 20.9084L6.6356 20.0726C6.19214 20.006 5.81075 20.3874 5.87734 20.8309L6.71333 26.3974Z" fill="currentColor"/>', Mk = '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.1724 22.3417C20.1263 22.2956 20.0536 22.2897 20.0001 22.327C18.4883 23.3815 16.6497 24 14.6666 24C9.51199 24 5.33331 19.8213 5.33331 14.6667C5.33331 9.51202 9.51199 5.33334 14.6666 5.33334C19.8213 5.33334 24 9.51202 24 14.6667C24 16.6502 23.3813 18.4891 22.3263 20.0011C22.289 20.0546 22.2949 20.1273 22.341 20.1734L26.195 24.0274C26.4554 24.2878 26.4554 24.7099 26.195 24.9702L24.9694 26.1959C24.709 26.4562 24.2869 26.4562 24.0266 26.1959L20.1724 22.3417ZM20.9336 14.6667C20.9336 18.1278 18.1278 20.9336 14.6666 20.9336C11.2055 20.9336 8.39972 18.1278 8.39972 14.6667C8.39972 11.2055 11.2055 8.39975 14.6666 8.39975C18.1278 8.39975 20.9336 11.2055 20.9336 14.6667Z" fill="currentColor"/>', Ik = '<path d="M16.6667 10.3452C16.6667 10.8924 16.0439 11.2066 15.6038 10.8814L11.0766 7.5364C10.7159 7.26993 10.7159 6.73054 11.0766 6.46405L15.6038 3.11873C16.0439 2.79356 16.6667 3.10773 16.6667 3.6549V5.22682C16.6667 5.29746 16.7223 5.35579 16.7927 5.36066C22.6821 5.76757 27.3333 10.674 27.3333 16.6667C27.3333 22.9259 22.2592 28 16 28C9.96483 28 5.03145 23.2827 4.68601 17.3341C4.66466 16.9665 4.96518 16.6673 5.33339 16.6673H7.3334C7.70157 16.6673 7.99714 16.9668 8.02743 17.3337C8.36638 21.4399 11.8064 24.6667 16 24.6667C20.4183 24.6667 24 21.085 24 16.6667C24 12.5225 20.8483 9.11428 16.8113 8.70739C16.7337 8.69957 16.6667 8.76096 16.6667 8.83893V10.3452Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0879 19.679C17.4553 19.9195 17.8928 20.0398 18.4004 20.0398C18.9099 20.0398 19.3474 19.9205 19.7129 19.6818C20.0803 19.4413 20.3635 19.0938 20.5623 18.6392C20.7612 18.1847 20.8606 17.6373 20.8606 16.9972C20.8625 16.3608 20.764 15.8192 20.5652 15.3722C20.3663 14.9252 20.0822 14.5853 19.7129 14.3523C19.3455 14.1175 18.908 14 18.4004 14C17.8928 14 17.4553 14.1175 17.0879 14.3523C16.7224 14.5853 16.4402 14.9252 16.2413 15.3722C16.0443 15.8173 15.9449 16.3589 15.943 16.9972C15.9411 17.6354 16.0396 18.1818 16.2385 18.6364C16.4373 19.089 16.7205 19.4366 17.0879 19.679ZM19.1362 18.4262C18.9487 18.7349 18.7034 18.8892 18.4004 18.8892C18.1996 18.8892 18.0226 18.8211 17.8691 18.6847C17.7157 18.5464 17.5964 18.3372 17.5112 18.0568C17.4279 17.7765 17.3871 17.4233 17.389 16.9972C17.3909 16.3684 17.4847 15.9025 17.6703 15.5995C17.8559 15.2945 18.0993 15.1421 18.4004 15.1421C18.603 15.1421 18.7801 15.2093 18.9316 15.3438C19.0832 15.4782 19.2015 15.6828 19.2868 15.9574C19.372 16.2301 19.4146 16.5767 19.4146 16.9972C19.4165 17.6392 19.3237 18.1156 19.1362 18.4262Z" fill="currentColor"/> <path d="M13.7746 19.8978C13.8482 19.8978 13.9079 19.8381 13.9079 19.7644V14.2129C13.9079 14.1393 13.8482 14.0796 13.7746 14.0796H12.642C12.6171 14.0796 12.5927 14.0865 12.5716 14.0997L11.2322 14.9325C11.1931 14.9568 11.1693 14.9996 11.1693 15.0457V15.9497C11.1693 16.0539 11.2833 16.1178 11.3722 16.0635L12.464 15.396C12.4682 15.3934 12.473 15.3921 12.4779 15.3921C12.4926 15.3921 12.5045 15.404 12.5045 15.4187V19.7644C12.5045 19.8381 12.5642 19.8978 12.6378 19.8978H13.7746Z" fill="currentColor"/>', Vk = '<path d="M16.6667 10.3452C16.6667 10.8924 16.0439 11.2066 15.6038 10.8814L11.0766 7.5364C10.7159 7.26993 10.7159 6.73054 11.0766 6.46405L15.6038 3.11873C16.0439 2.79356 16.6667 3.10773 16.6667 3.6549V5.22682C16.6667 5.29746 16.7223 5.35579 16.7927 5.36066C22.6821 5.76757 27.3333 10.674 27.3333 16.6667C27.3333 22.9259 22.2592 28 16 28C9.96483 28 5.03145 23.2827 4.68601 17.3341C4.66466 16.9665 4.96518 16.6673 5.33339 16.6673H7.3334C7.70157 16.6673 7.99714 16.9668 8.02743 17.3337C8.36638 21.4399 11.8064 24.6667 16 24.6667C20.4183 24.6667 24 21.085 24 16.6667C24 12.5225 20.8483 9.11428 16.8113 8.70739C16.7337 8.69957 16.6667 8.76096 16.6667 8.83893V10.3452Z" fill="currentColor"/> <path d="M13.9647 19.8182C14.0383 19.8182 14.098 19.7585 14.098 19.6849V14.1334C14.098 14.0597 14.0383 14 13.9647 14H12.8321C12.8072 14 12.7829 14.007 12.7617 14.0201L11.4223 14.8529C11.3832 14.8773 11.3594 14.9201 11.3594 14.9662V15.8702C11.3594 15.9743 11.4734 16.0383 11.5623 15.984L12.6541 15.3164C12.6583 15.3139 12.6631 15.3125 12.668 15.3125C12.6827 15.3125 12.6946 15.3244 12.6946 15.3391V19.6849C12.6946 19.7585 12.7543 19.8182 12.828 19.8182H13.9647Z" fill="currentColor"/> <path d="M17.2808 19.6676C17.6104 19.8211 17.9873 19.8978 18.4115 19.8978C18.8642 19.8978 19.2591 19.8106 19.5962 19.6364C19.9352 19.4603 20.1985 19.2178 20.386 18.9091C20.5753 18.6004 20.67 18.2462 20.67 17.8466C20.67 17.4773 20.5905 17.1497 20.4314 16.8637C20.2742 16.5777 20.0583 16.3542 19.7837 16.1932C19.511 16.0303 19.2003 15.9489 18.8519 15.9489C18.5772 15.9489 18.332 16.0019 18.1161 16.108C17.9064 16.21 17.7531 16.3393 17.6562 16.4958C17.6524 16.5019 17.6458 16.5057 17.6386 16.5057C17.6265 16.5057 17.6171 16.4953 17.6182 16.4833L17.7379 15.254C17.7445 15.1857 17.8019 15.1336 17.8706 15.1336H20.193C20.2666 15.1336 20.3263 15.0739 20.3263 15.0002V14.1334C20.3263 14.0597 20.2666 14 20.193 14H16.7164C16.6469 14 16.589 14.0534 16.5835 14.1226L16.3501 17.0168C16.3447 17.0848 16.3914 17.1459 16.4585 17.1585L17.4904 17.3522C17.5454 17.3625 17.6001 17.3366 17.6344 17.2923C17.7078 17.1974 17.804 17.1199 17.9229 17.0597C18.0744 16.9839 18.2344 16.947 18.403 16.9489C18.581 16.9489 18.7382 16.9887 18.8746 17.0682C19.0128 17.1459 19.1208 17.2548 19.1985 17.3949C19.278 17.5351 19.3168 17.6989 19.3149 17.8864C19.3168 18.0701 19.2789 18.233 19.2013 18.375C19.1236 18.5152 19.0166 18.6241 18.8803 18.7017C18.7439 18.7794 18.5877 18.8182 18.4115 18.8182C18.1861 18.8182 17.992 18.7538 17.8291 18.625C17.6993 18.5209 17.6177 18.3903 17.5841 18.2333C17.5693 18.1639 17.5122 18.108 17.4413 18.108H16.3404C16.2656 18.108 16.2049 18.1696 16.2119 18.244C16.2393 18.5373 16.3352 18.8007 16.4996 19.0341C16.6909 19.3031 16.9513 19.5142 17.2808 19.6676Z" fill="currentColor"/>', Ak = '<path d="M16.6667 10.3452C16.6667 10.8924 16.0439 11.2066 15.6038 10.8814L11.0766 7.5364C10.7159 7.26993 10.7159 6.73054 11.0766 6.46405L15.6038 3.11873C16.0439 2.79356 16.6667 3.10773 16.6667 3.6549V5.22682C16.6667 5.29746 16.7223 5.35579 16.7927 5.36066C22.6821 5.76757 27.3333 10.674 27.3333 16.6667C27.3333 22.9259 22.2592 28 16 28C9.96483 28 5.03145 23.2827 4.68601 17.3341C4.66466 16.9665 4.96518 16.6673 5.33339 16.6673H7.3334C7.70157 16.6673 7.99714 16.9668 8.02743 17.3337C8.36638 21.4399 11.8064 24.6667 16 24.6667C20.4183 24.6667 24 21.085 24 16.6667C24 12.5225 20.8483 9.11428 16.8113 8.70739C16.7337 8.69957 16.6667 8.76096 16.6667 8.83893V10.3452Z" fill="currentColor"/> <path d="M11.5845 19.75C11.9273 19.9015 12.3203 19.9773 12.7635 19.9773C13.2181 19.9773 13.6205 19.9034 13.9709 19.7557C14.3232 19.6061 14.5978 19.4015 14.7948 19.1421C14.9936 18.8807 15.0931 18.5815 15.0931 18.2443C15.0949 17.8864 14.9804 17.5881 14.7493 17.3495C14.524 17.1149 14.1917 16.97 13.7524 16.9148C13.7393 16.9131 13.7294 16.9021 13.7294 16.8889C13.7294 16.876 13.7389 16.8651 13.7516 16.8631C14.0786 16.8115 14.3468 16.6819 14.5561 16.4745C14.772 16.2623 14.879 15.9925 14.8771 15.6648C14.8771 15.3485 14.7891 15.0654 14.6129 14.8154C14.4368 14.5635 14.1906 14.3646 13.8743 14.2188C13.558 14.0729 13.1915 14 12.7749 14C12.3563 14 11.9832 14.0748 11.6556 14.2245C11.3298 14.3741 11.0722 14.5815 10.8828 14.8466C10.7184 15.0752 10.6239 15.3353 10.5994 15.6268C10.5932 15.7007 10.6536 15.7614 10.7279 15.7614H11.8072C11.8794 15.7614 11.9367 15.7034 11.9525 15.633C11.9707 15.5522 12.0043 15.4785 12.0533 15.412C12.1271 15.3116 12.2266 15.2339 12.3516 15.179C12.4785 15.1241 12.6196 15.0966 12.7749 15.0966C12.9226 15.0966 13.0523 15.1241 13.1641 15.179C13.2777 15.2339 13.3658 15.3116 13.4283 15.412C13.4927 15.5104 13.5239 15.625 13.522 15.7557C13.5239 15.8902 13.4879 16.0095 13.4141 16.1137C13.3402 16.2159 13.237 16.2955 13.1044 16.3523C12.9737 16.4091 12.8222 16.4375 12.6499 16.4375H12.2179C12.1442 16.4375 12.0845 16.4972 12.0845 16.5709V17.3042C12.0845 17.3778 12.1442 17.4375 12.2179 17.4375H12.6499C12.8468 17.4375 13.0173 17.4669 13.1612 17.5256C13.3071 17.5843 13.4198 17.6667 13.4993 17.7728C13.5789 17.8788 13.6177 18 13.6158 18.1364C13.6177 18.2728 13.5826 18.394 13.5107 18.5C13.4387 18.6042 13.3383 18.6866 13.2095 18.7472C13.0826 18.8059 12.9359 18.8353 12.7692 18.8353C12.6025 18.8353 12.4539 18.8078 12.3232 18.7529C12.1925 18.6979 12.0893 18.6222 12.0135 18.5256C11.9638 18.461 11.9292 18.3903 11.9097 18.3135C11.8921 18.2444 11.8352 18.1875 11.7639 18.1875H10.6114C10.5372 18.1875 10.4767 18.2482 10.483 18.3221C10.5081 18.6178 10.6064 18.8825 10.7777 19.1165C10.9747 19.3854 11.2436 19.5966 11.5845 19.75Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7801 19.679C18.1476 19.9195 18.5851 20.0398 19.0926 20.0398C19.6021 20.0398 20.0396 19.9205 20.4051 19.6818C20.7726 19.4413 21.0557 19.0938 21.2546 18.6392C21.4534 18.1847 21.5529 17.6373 21.5529 16.9972C21.5548 16.3608 21.4563 15.8192 21.2574 15.3722C21.0585 14.9252 20.7744 14.5853 20.4051 14.3523C20.0377 14.1175 19.6002 14 19.0926 14C18.5851 14 18.1476 14.1175 17.7801 14.3523C17.4146 14.5853 17.1324 14.9252 16.9335 15.3722C16.7366 15.8173 16.6371 16.3589 16.6352 16.9972C16.6333 17.6354 16.7318 18.1818 16.9307 18.6364C17.1296 19.089 17.4127 19.4366 17.7801 19.679ZM19.8284 18.4262C19.6409 18.7349 19.3957 18.8892 19.0926 18.8892C18.8919 18.8892 18.7148 18.8211 18.5614 18.6847C18.408 18.5464 18.2887 18.3372 18.2034 18.0568C18.1201 17.7765 18.0794 17.4233 18.0813 16.9972C18.0832 16.3684 18.1769 15.9025 18.3625 15.5995C18.5481 15.2945 18.7915 15.1421 19.0926 15.1421C19.2953 15.1421 19.4724 15.2093 19.6239 15.3438C19.7754 15.4782 19.8938 15.6828 19.979 15.9574C20.0642 16.2301 20.1068 16.5767 20.1068 16.9972C20.1087 17.6392 20.0159 18.1156 19.8284 18.4262Z" fill="currentColor"/>', Rk = '<path d="M15.6038 12.2148C16.0439 12.5399 16.6667 12.2257 16.6667 11.6786V10.1789C16.6667 10.1001 16.7351 10.0384 16.8134 10.0479C20.1116 10.4494 22.6667 13.2593 22.6667 16.6659C22.6667 20.3481 19.6817 23.3332 15.9995 23.3332C12.542 23.3332 9.69927 20.7015 9.36509 17.332C9.32875 16.9655 9.03371 16.6662 8.66548 16.6662L6.66655 16.6666C6.29841 16.6666 5.99769 16.966 6.02187 17.3334C6.36494 22.5454 10.7012 26.6667 16 26.6667C21.5228 26.6667 26 22.1895 26 16.6667C26 11.4103 21.9444 7.10112 16.7916 6.69758C16.7216 6.69209 16.6667 6.63396 16.6667 6.56372V4.98824C16.6667 4.44106 16.0439 4.12689 15.6038 4.45207L11.0765 7.79738C10.7159 8.06387 10.7159 8.60327 11.0766 8.86974L15.6038 12.2148Z" fill="currentColor"/>', Nk = '<path d="M15.3333 10.3452C15.3333 10.8924 15.9561 11.2066 16.3962 10.8814L20.9234 7.5364C21.2841 7.26993 21.2841 6.73054 20.9235 6.46405L16.3962 3.11873C15.9561 2.79356 15.3333 3.10773 15.3333 3.6549V5.22682C15.3333 5.29746 15.2778 5.35579 15.2073 5.36066C9.31791 5.76757 4.66667 10.674 4.66667 16.6667C4.66667 22.9259 9.74078 28 16 28C22.0352 28 26.9686 23.2827 27.314 17.3341C27.3354 16.9665 27.0348 16.6673 26.6666 16.6673H24.6666C24.2984 16.6673 24.0029 16.9668 23.9726 17.3337C23.6336 21.4399 20.1937 24.6667 16 24.6667C11.5817 24.6667 8 21.085 8 16.6667C8 12.5225 11.1517 9.11428 15.1887 8.70739C15.2663 8.69957 15.3333 8.76096 15.3333 8.83893V10.3452Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0879 19.679C17.4553 19.9195 17.8928 20.0398 18.4004 20.0398C18.9099 20.0398 19.3474 19.9205 19.7129 19.6818C20.0803 19.4413 20.3635 19.0938 20.5623 18.6392C20.7612 18.1847 20.8606 17.6373 20.8606 16.9972C20.8625 16.3608 20.764 15.8192 20.5652 15.3722C20.3663 14.9252 20.0822 14.5853 19.7129 14.3523C19.3455 14.1175 18.908 14 18.4004 14C17.8928 14 17.4553 14.1175 17.0879 14.3523C16.7224 14.5853 16.4402 14.9252 16.2413 15.3722C16.0443 15.8173 15.9449 16.3589 15.943 16.9972C15.9411 17.6354 16.0396 18.1818 16.2385 18.6364C16.4373 19.089 16.7205 19.4366 17.0879 19.679ZM19.1362 18.4262C18.9487 18.7349 18.7034 18.8892 18.4004 18.8892C18.1996 18.8892 18.0225 18.8211 17.8691 18.6847C17.7157 18.5464 17.5964 18.3372 17.5112 18.0568C17.4278 17.7765 17.3871 17.4233 17.389 16.9972C17.3909 16.3684 17.4847 15.9025 17.6703 15.5995C17.8559 15.2945 18.0992 15.1421 18.4004 15.1421C18.603 15.1421 18.7801 15.2093 18.9316 15.3438C19.0831 15.4782 19.2015 15.6828 19.2867 15.9574C19.372 16.2301 19.4146 16.5767 19.4146 16.9972C19.4165 17.6392 19.3237 18.1156 19.1362 18.4262Z" fill="currentColor"/> <path d="M13.7746 19.8978C13.8482 19.8978 13.9079 19.8381 13.9079 19.7644V14.2129C13.9079 14.1393 13.8482 14.0796 13.7746 14.0796H12.642C12.6171 14.0796 12.5927 14.0865 12.5716 14.0997L11.2322 14.9325C11.1931 14.9568 11.1693 14.9996 11.1693 15.0457V15.9497C11.1693 16.0539 11.2833 16.1178 11.3722 16.0635L12.464 15.396C12.4682 15.3934 12.473 15.3921 12.4779 15.3921C12.4926 15.3921 12.5045 15.404 12.5045 15.4187V19.7644C12.5045 19.8381 12.5642 19.8978 12.6378 19.8978H13.7746Z" fill="currentColor"/>', Hk = '<path d="M15.3333 10.3452C15.3333 10.8924 15.9561 11.2066 16.3962 10.8814L20.9234 7.5364C21.2841 7.26993 21.2841 6.73054 20.9234 6.46405L16.3962 3.11873C15.9561 2.79356 15.3333 3.10773 15.3333 3.6549V5.22682C15.3333 5.29746 15.2777 5.35579 15.2073 5.36066C9.3179 5.76757 4.66666 10.674 4.66666 16.6667C4.66666 22.9259 9.74076 28 16 28C22.0352 28 26.9686 23.2827 27.314 17.3341C27.3353 16.9665 27.0348 16.6673 26.6666 16.6673H24.6666C24.2984 16.6673 24.0029 16.9668 23.9726 17.3337C23.6336 21.4399 20.1936 24.6667 16 24.6667C11.5817 24.6667 7.99999 21.085 7.99999 16.6667C7.99999 12.5225 11.1517 9.11428 15.1887 8.70739C15.2663 8.69957 15.3333 8.76096 15.3333 8.83893V10.3452Z" fill="currentColor"/> <path d="M13.9647 19.8182C14.0383 19.8182 14.098 19.7585 14.098 19.6849V14.1334C14.098 14.0597 14.0383 14 13.9647 14H12.8321C12.8072 14 12.7828 14.007 12.7617 14.0201L11.4223 14.8529C11.3832 14.8773 11.3594 14.9201 11.3594 14.9662V15.8702C11.3594 15.9743 11.4734 16.0383 11.5622 15.984L12.6541 15.3164C12.6583 15.3139 12.6631 15.3125 12.668 15.3125C12.6827 15.3125 12.6946 15.3244 12.6946 15.3391V19.6849C12.6946 19.7585 12.7543 19.8182 12.8279 19.8182H13.9647Z" fill="currentColor"/> <path d="M17.2808 19.6676C17.6104 19.8211 17.9873 19.8978 18.4115 19.8978C18.8641 19.8978 19.259 19.8106 19.5962 19.6364C19.9352 19.4603 20.1984 19.2178 20.3859 18.9091C20.5753 18.6004 20.67 18.2462 20.67 17.8466C20.67 17.4773 20.5905 17.1497 20.4314 16.8637C20.2742 16.5777 20.0583 16.3542 19.7837 16.1932C19.5109 16.0303 19.2003 15.9489 18.8518 15.9489C18.5772 15.9489 18.3319 16.0019 18.116 16.108C17.9064 16.21 17.7531 16.3393 17.6562 16.4958C17.6524 16.5019 17.6457 16.5057 17.6386 16.5057C17.6265 16.5057 17.6171 16.4953 17.6182 16.4833L17.7378 15.254C17.7445 15.1857 17.8019 15.1336 17.8706 15.1336H20.1929C20.2666 15.1336 20.3263 15.0739 20.3263 15.0002V14.1334C20.3263 14.0597 20.2666 14 20.1929 14H16.7163C16.6468 14 16.589 14.0534 16.5834 14.1226L16.3501 17.0168C16.3446 17.0848 16.3914 17.1459 16.4584 17.1585L17.4903 17.3522C17.5454 17.3625 17.6001 17.3366 17.6343 17.2923C17.7078 17.1974 17.804 17.1199 17.9229 17.0597C18.0744 16.9839 18.2344 16.947 18.403 16.9489C18.581 16.9489 18.7382 16.9887 18.8746 17.0682C19.0128 17.1459 19.1208 17.2548 19.1984 17.3949C19.278 17.5351 19.3168 17.6989 19.3149 17.8864C19.3168 18.0701 19.2789 18.233 19.2013 18.375C19.1236 18.5152 19.0166 18.6241 18.8802 18.7017C18.7439 18.7794 18.5876 18.8182 18.4115 18.8182C18.1861 18.8182 17.992 18.7538 17.8291 18.625C17.6993 18.5209 17.6176 18.3903 17.5841 18.2333C17.5692 18.1639 17.5122 18.108 17.4413 18.108H16.3404C16.2656 18.108 16.2049 18.1696 16.2119 18.244C16.2393 18.5373 16.3352 18.8007 16.4996 19.0341C16.6909 19.3031 16.9513 19.5142 17.2808 19.6676Z" fill="currentColor"/>', Ok = '<path d="M15.3334 10.3452C15.3334 10.8924 15.9561 11.2066 16.3962 10.8814L20.9235 7.5364C21.2841 7.26993 21.2841 6.73054 20.9235 6.46405L16.3962 3.11873C15.9561 2.79356 15.3334 3.10773 15.3334 3.6549V5.22682C15.3334 5.29746 15.2778 5.35579 15.2073 5.36066C9.31793 5.76757 4.66669 10.674 4.66669 16.6667C4.66669 22.9259 9.74079 28 16 28C22.0352 28 26.9686 23.2827 27.314 17.3341C27.3354 16.9665 27.0349 16.6673 26.6667 16.6673H24.6666C24.2985 16.6673 24.0029 16.9668 23.9726 17.3337C23.6337 21.4399 20.1937 24.6667 16 24.6667C11.5817 24.6667 8.00002 21.085 8.00002 16.6667C8.00002 12.5225 11.1517 9.11428 15.1887 8.70739C15.2663 8.69957 15.3334 8.76096 15.3334 8.83893V10.3452Z" fill="currentColor"/> <path d="M11.5845 19.75C11.9273 19.9015 12.3203 19.9773 12.7635 19.9773C13.2181 19.9773 13.6205 19.9034 13.9709 19.7557C14.3232 19.6061 14.5978 19.4015 14.7948 19.1421C14.9936 18.8807 15.0931 18.5815 15.0931 18.2443C15.095 17.8864 14.9804 17.5881 14.7493 17.3495C14.524 17.1149 14.1917 16.97 13.7524 16.9148C13.7393 16.9131 13.7294 16.9021 13.7294 16.8889C13.7294 16.876 13.7389 16.8651 13.7516 16.8631C14.0787 16.8115 14.3468 16.6819 14.5561 16.4745C14.772 16.2623 14.879 15.9925 14.8772 15.6648C14.8772 15.3485 14.7891 15.0654 14.6129 14.8154C14.4368 14.5635 14.1906 14.3646 13.8743 14.2188C13.558 14.0729 13.1915 14 12.7749 14C12.3563 14 11.9832 14.0748 11.6556 14.2245C11.3298 14.3741 11.0722 14.5815 10.8828 14.8466C10.7184 15.0752 10.6239 15.3353 10.5994 15.6268C10.5932 15.7007 10.6537 15.7614 10.7279 15.7614H11.8072C11.8794 15.7614 11.9367 15.7034 11.9525 15.633C11.9707 15.5522 12.0043 15.4785 12.0533 15.412C12.1272 15.3116 12.2266 15.2339 12.3516 15.179C12.4785 15.1241 12.6196 15.0966 12.7749 15.0966C12.9226 15.0966 13.0523 15.1241 13.1641 15.179C13.2777 15.2339 13.3658 15.3116 13.4283 15.412C13.4927 15.5104 13.5239 15.625 13.522 15.7557C13.5239 15.8902 13.4879 16.0095 13.4141 16.1137C13.3402 16.2159 13.237 16.2955 13.1044 16.3523C12.9737 16.4091 12.8222 16.4375 12.6499 16.4375H12.2179C12.1442 16.4375 12.0845 16.4972 12.0845 16.5709V17.3042C12.0845 17.3778 12.1442 17.4375 12.2179 17.4375H12.6499C12.8468 17.4375 13.0173 17.4669 13.1612 17.5256C13.3071 17.5843 13.4198 17.6667 13.4993 17.7728C13.5789 17.8788 13.6177 18 13.6158 18.1364C13.6177 18.2728 13.5826 18.394 13.5107 18.5C13.4387 18.6042 13.3383 18.6866 13.2095 18.7472C13.0826 18.8059 12.9359 18.8353 12.7692 18.8353C12.6025 18.8353 12.4539 18.8078 12.3232 18.7529C12.1925 18.6979 12.0893 18.6222 12.0135 18.5256C11.9638 18.461 11.9292 18.3903 11.9097 18.3135C11.8921 18.2444 11.8352 18.1875 11.7639 18.1875H10.6114C10.5372 18.1875 10.4767 18.2482 10.483 18.3221C10.5081 18.6178 10.6064 18.8825 10.7777 19.1165C10.9747 19.3854 11.2436 19.5966 11.5845 19.75Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7801 19.679C18.1476 19.9195 18.5851 20.0398 19.0926 20.0398C19.6021 20.0398 20.0396 19.9205 20.4051 19.6818C20.7726 19.4413 21.0557 19.0938 21.2546 18.6392C21.4534 18.1847 21.5529 17.6373 21.5529 16.9972C21.5548 16.3608 21.4563 15.8192 21.2574 15.3722C21.0585 14.9252 20.7745 14.5853 20.4051 14.3523C20.0377 14.1175 19.6002 14 19.0926 14C18.5851 14 18.1476 14.1175 17.7801 14.3523C17.4146 14.5853 17.1324 14.9252 16.9335 15.3722C16.7366 15.8173 16.6371 16.3589 16.6352 16.9972C16.6334 17.6354 16.7318 18.1818 16.9307 18.6364C17.1296 19.089 17.4127 19.4366 17.7801 19.679ZM19.8284 18.4262C19.6409 18.7349 19.3957 18.8892 19.0926 18.8892C18.8919 18.8892 18.7148 18.8211 18.5614 18.6847C18.408 18.5464 18.2887 18.3372 18.2034 18.0568C18.1201 17.7765 18.0794 17.4233 18.0813 16.9972C18.0832 16.3684 18.1769 15.9025 18.3625 15.5995C18.5481 15.2945 18.7915 15.1421 19.0926 15.1421C19.2953 15.1421 19.4724 15.2093 19.6239 15.3438C19.7754 15.4782 19.8938 15.6828 19.979 15.9574C20.0642 16.2301 20.1068 16.5767 20.1068 16.9972C20.1087 17.6392 20.0159 18.1156 19.8284 18.4262Z" fill="currentColor"/>', Dk = '<path d="M16.4167 12.2148C15.9766 12.5399 15.3538 12.2257 15.3538 11.6786V10.1789C15.3538 10.1001 15.2854 10.0384 15.2072 10.0479C11.9089 10.4494 9.35384 13.2593 9.35384 16.6659C9.35384 20.3481 12.3389 23.3332 16.0211 23.3332C19.4785 23.3332 22.3212 20.7015 22.6554 17.332C22.6918 16.9655 22.9868 16.6662 23.355 16.6662L25.354 16.6666C25.7221 16.6666 26.0228 16.966 25.9986 17.3334C25.6556 22.5454 21.3193 26.6667 16.0205 26.6667C10.4977 26.6667 6.02051 22.1895 6.02051 16.6667C6.02051 11.4103 10.0761 7.10112 15.2289 6.69758C15.2989 6.69209 15.3538 6.63396 15.3538 6.56372V4.98824C15.3538 4.44106 15.9766 4.12689 16.4167 4.45207L20.944 7.79738C21.3046 8.06387 21.3046 8.60327 20.9439 8.86974L16.4167 12.2148Z" fill="currentColor"/>', _k = '<path d="M26.269 16.5634C26.7996 16.3313 26.7996 15.6688 26.269 15.4367L6.37817 6.73581C5.76274 6.4666 5.10768 7.03376 5.40897 7.57494L8.74776 13.5721C8.76512 13.6033 8.79425 13.6262 8.82864 13.6357L16.8708 15.8653C17.001 15.9014 17.0011 16.086 16.8709 16.1222L8.83101 18.3599C8.79668 18.3694 8.7676 18.3923 8.75026 18.4235L5.40897 24.4251C5.10768 24.9663 5.76274 25.5334 6.37817 25.2642L26.269 16.5634Z" fill="currentColor"/>', Fk = '<path d="M18.6669 10.4001C18.6669 10.7683 18.3684 11.0667 18.0002 11.0667H16.2668C15.8987 11.0667 15.6002 10.7683 15.6002 10.4001V9.86674C15.6002 9.7931 15.5405 9.73341 15.4669 9.73341H5.99998C5.63179 9.73341 5.33331 9.43493 5.33331 9.06674V7.33341C5.33331 6.96522 5.63179 6.66674 5.99998 6.66674H15.4669C15.5405 6.66674 15.6002 6.60704 15.6002 6.53341V6.00007C15.6002 5.63188 15.8987 5.3334 16.2668 5.3334H18.0002C18.3684 5.3334 18.6669 5.63188 18.6669 6.00007V10.4001Z" fill="currentColor"/> <path d="M11.3334 18.8668C11.7016 18.8668 12.0001 18.5683 12.0001 18.2001V13.8001C12.0001 13.4319 11.7016 13.1335 11.3334 13.1335H9.60006C9.23187 13.1335 8.93339 13.4319 8.93339 13.8001V14.3335C8.93339 14.4071 8.8737 14.4668 8.80006 14.4668H6.00006C5.63187 14.4668 5.33339 14.7653 5.33339 15.1335V16.8668C5.33339 17.235 5.63187 17.5335 6.00006 17.5335H8.80006C8.8737 17.5335 8.93339 17.5932 8.93339 17.6668V18.2001C8.93339 18.5683 9.23187 18.8668 9.60006 18.8668H11.3334Z" fill="currentColor"/> <path d="M18.6667 26.0001C18.6667 26.3683 18.3682 26.6668 18 26.6668H16.2667C15.8985 26.6668 15.6 26.3683 15.6 26.0001V25.4668C15.6 25.3931 15.5403 25.3334 15.4667 25.3334H6.00014C5.63195 25.3334 5.33348 25.0349 5.33348 24.6668V22.9334C5.33348 22.5652 5.63195 22.2668 6.00014 22.2668H15.4667C15.5403 22.2668 15.6 22.2071 15.6 22.1334V21.6001C15.6 21.2319 15.8985 20.9334 16.2667 20.9334H18C18.3682 20.9334 18.6667 21.2319 18.6667 21.6001V26.0001Z" fill="currentColor"/> <path d="M22 24.6668C22 25.0349 22.2985 25.3334 22.6667 25.3334H26.0001C26.3683 25.3334 26.6668 25.0349 26.6668 24.6668V22.9334C26.6668 22.5652 26.3683 22.2668 26.0001 22.2668H22.6667C22.2985 22.2668 22 22.5652 22 22.9334V24.6668Z" fill="currentColor"/> <path d="M16.0001 17.5335C15.6319 17.5335 15.3334 17.235 15.3334 16.8668V15.1335C15.3334 14.7653 15.6319 14.4668 16.0001 14.4668H26.0001C26.3683 14.4668 26.6667 14.7653 26.6667 15.1335V16.8668C26.6667 17.235 26.3683 17.5335 26.0001 17.5335H16.0001Z" fill="currentColor"/> <path d="M22.0002 9.06674C22.0002 9.43493 22.2987 9.73341 22.6669 9.73341H26C26.3682 9.73341 26.6666 9.43493 26.6666 9.06674V7.3334C26.6666 6.96521 26.3682 6.66674 26 6.66674H22.6669C22.2987 6.66674 22.0002 6.96522 22.0002 7.33341V9.06674Z" fill="currentColor"/>', jk = '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99998 5.33333C7.42265 5.33333 5.33331 7.42267 5.33331 9.99999C5.33331 12.5773 7.42265 14.6667 9.99998 14.6667L22 14.6667C24.5773 14.6667 26.6666 12.5774 26.6666 10.0001C26.6666 7.42275 24.5773 5.33341 22 5.33341L10.0278 5.33341L9.99998 5.33333ZM14.2387 12.4C14.135 12.4 14.0704 12.2865 14.1192 12.195C14.4686 11.5407 14.6666 10.7935 14.6666 9.99999C14.6666 9.20651 14.4686 8.45929 14.1193 7.80504C14.0704 7.71359 14.135 7.60006 14.2387 7.60006L22 7.60006C23.3255 7.60006 24.4 8.67458 24.4 10.0001C24.4 11.3255 23.3255 12.4001 22 12.4001L14.2387 12.4ZM12.4 9.99993C12.4 11.3254 11.3255 12.3999 10 12.3999C8.67451 12.3999 7.6 11.3254 7.6 9.99993C7.6 8.67445 8.67451 7.59993 10 7.59993C11.3255 7.59993 12.4 8.67445 12.4 9.99993Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33331 22C5.33331 24.5773 7.42265 26.6667 9.99998 26.6667L22 26.6667C24.5773 26.6667 26.6666 24.5773 26.6666 22C26.6666 19.4227 24.5773 17.3333 22 17.3333H9.99998C7.42265 17.3333 5.33331 19.4227 5.33331 22ZM24.4 22C24.4 23.3255 23.3255 24.4 22 24.4C20.6745 24.4 19.6 23.3255 19.6 22C19.6 20.6745 20.6745 19.6 22 19.6C23.3255 19.6 24.4 20.6745 24.4 22Z" fill="currentColor"/>', qk = '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5722 5.33333C13.2429 5.33333 12.9629 5.57382 12.9132 5.89938L12.4063 9.21916C12.4 9.26058 12.3746 9.29655 12.3378 9.31672C12.2387 9.37118 12.1409 9.42779 12.0444 9.48648C12.0086 9.5083 11.9646 9.51242 11.9255 9.49718L8.79572 8.27692C8.48896 8.15732 8.14083 8.27958 7.9762 8.56472L5.5491 12.7686C5.38444 13.0538 5.45271 13.4165 5.70981 13.6223L8.33308 15.7225C8.3658 15.7487 8.38422 15.7887 8.38331 15.8306C8.38209 15.8867 8.38148 15.9429 8.38148 15.9993C8.38148 16.0558 8.3821 16.1121 8.38332 16.1684C8.38423 16.2102 8.36582 16.2503 8.33313 16.2765L5.7103 18.3778C5.45334 18.5836 5.38515 18.9462 5.54978 19.2314L7.97688 23.4352C8.14155 23.7205 8.48981 23.8427 8.79661 23.723L11.926 22.5016C11.9651 22.4864 12.009 22.4905 12.0449 22.5123C12.1412 22.5709 12.2388 22.6274 12.3378 22.6818C12.3745 22.7019 12.4 22.7379 12.4063 22.7793L12.9132 26.0993C12.9629 26.4249 13.2429 26.6654 13.5722 26.6654H18.4264C18.7556 26.6654 19.0356 26.425 19.0854 26.0995L19.5933 22.7801C19.5997 22.7386 19.6252 22.7027 19.6619 22.6825C19.7614 22.6279 19.8596 22.5711 19.9564 22.5121C19.9923 22.4903 20.0362 22.4862 20.0754 22.5015L23.2035 23.7223C23.5103 23.842 23.8585 23.7198 24.0232 23.4346L26.4503 19.2307C26.6149 18.9456 26.5467 18.583 26.2898 18.3771L23.6679 16.2766C23.6352 16.2504 23.6168 16.2104 23.6177 16.1685C23.619 16.1122 23.6196 16.0558 23.6196 15.9993C23.6196 15.9429 23.619 15.8866 23.6177 15.8305C23.6168 15.7886 23.6353 15.7486 23.668 15.7224L26.2903 13.623C26.5474 13.4172 26.6156 13.0544 26.451 12.7692L24.0239 8.56537C23.8592 8.28023 23.5111 8.15797 23.2043 8.27757L20.0758 9.49734C20.0367 9.51258 19.9927 9.50846 19.9569 9.48664C19.8599 9.42762 19.7616 9.37071 19.6618 9.31596C19.6251 9.2958 19.5997 9.25984 19.5933 9.21843L19.0854 5.89915C19.0356 5.57369 18.7556 5.33333 18.4264 5.33333H13.5722ZM16.0001 20.2854C18.3672 20.2854 20.2862 18.3664 20.2862 15.9993C20.2862 13.6322 18.3672 11.7132 16.0001 11.7132C13.6329 11.7132 11.714 13.6322 11.714 15.9993C11.714 18.3664 13.6329 20.2854 16.0001 20.2854Z" fill="currentColor"/>', Zk = '<path d="M18.236 8.78524C17.7959 8.46009 17.1732 8.77427 17.1732 9.32143V12.3798C17.1732 12.4506 17.118 12.5089 17.0474 12.5135C15.5617 12.6091 14.0334 12.9224 12.5206 13.473C6.93931 15.5045 3.27299 20.1452 3.12081 24.7693C3.11654 24.899 3.28271 24.9521 3.36094 24.8486C5.63689 21.8364 9.7882 19.751 14.6002 19.5178C14.606 19.5175 14.6106 19.5127 14.6106 19.5069C14.6106 19.5009 14.6155 19.496 14.6215 19.496H17.0398C17.1135 19.496 17.1732 19.5557 17.1732 19.6293V22.6784C17.1732 23.2256 17.796 23.5398 18.236 23.2146L27.2746 16.5358C27.6352 16.2693 27.6352 15.7299 27.2745 15.4634L18.236 8.78524Z" fill="currentColor"/>', Bk = '<path d="M21.2204 11.3458C21.2666 11.3212 21.3229 11.3262 21.3652 11.3572C21.9167 11.7613 22.5972 12 23.3333 12C25.1743 12 26.6666 10.5076 26.6666 8.66665C26.6666 6.8257 25.1743 5.33331 23.3333 5.33331C21.4924 5.33331 20 6.8257 20 8.66665C20 8.73806 20.0022 8.80896 20.0066 8.87926C20.01 8.93275 19.9826 8.98379 19.9353 9.00895L10.6918 13.9238C10.6468 13.9477 10.5924 13.9438 10.5504 13.915C10.0145 13.5472 9.36571 13.332 8.66665 13.332C6.8257 13.332 5.33331 14.8244 5.33331 16.6653C5.33331 18.5063 6.8257 19.9987 8.66665 19.9987C9.41311 19.9987 10.1023 19.7533 10.6579 19.3388C10.6974 19.3093 10.7498 19.3026 10.7949 19.3227L19.9243 23.3873C19.9712 23.4083 20.0017 23.4545 20.0044 23.5059C20.0942 25.2666 21.5502 26.6666 23.3333 26.6666C25.1743 26.6666 26.6666 25.1743 26.6666 23.3333C26.6666 21.4924 25.1743 20 23.3333 20C22.4593 20 21.6639 20.3363 21.0695 20.8866C21.0294 20.9237 20.9711 20.9344 20.9212 20.9122L12.0754 16.9738C12.0238 16.9508 11.9925 16.8977 11.9954 16.8412C11.9984 16.783 12 16.7243 12 16.6653C12 16.5598 11.9951 16.4553 11.9855 16.3522C11.9804 16.2974 12.0078 16.2442 12.0565 16.2184L21.2204 11.3458Z" fill="currentColor"/>', Gk = '<path d="M22.6666 6.18871C22.6666 5.64155 23.2894 5.32737 23.7295 5.65252L28.2567 8.99753C28.6174 9.26401 28.6174 9.8034 28.2568 10.0699L23.7295 13.4152C23.2894 13.7404 22.6666 13.4262 22.6666 12.879V11.1998C22.6666 11.1262 22.607 11.0665 22.5333 11.0665H21.3333C18.6094 11.0665 16.3997 13.2748 16.3997 16.0001C16.3997 18.7253 18.6094 20.9336 21.3333 20.9336H22.5333C22.607 20.9336 22.6666 20.874 22.6666 20.8003V19.121C22.6666 18.5738 23.2894 18.2597 23.7295 18.5848L28.2567 21.9298C28.6174 22.1963 28.6174 22.7357 28.2568 23.0022L23.7295 26.3475C23.2894 26.6727 22.6666 26.3585 22.6666 25.8113V24.1334C22.6666 24.0597 22.607 24.0001 22.5333 24.0001H21.3333C18.6227 24.0001 16.2268 22.6517 14.7798 20.5891C14.725 20.5111 14.6082 20.5111 14.5535 20.5891C13.1065 22.6517 10.7106 24.0001 7.99998 24.0001H5.99998C5.63179 24.0001 5.33331 23.7016 5.33331 23.3334V21.6003C5.33331 21.2321 5.63179 20.9336 5.99998 20.9336H7.99998C10.7239 20.9336 12.9336 18.7253 12.9336 16.0001C12.9336 13.2748 10.7239 11.0665 7.99998 11.0665H5.99998C5.63179 11.0665 5.33331 10.768 5.33331 10.3998V8.66672C5.33331 8.29853 5.63179 8.00005 5.99998 8.00005H7.99998C10.7106 8.00005 13.1065 9.34843 14.5535 11.411C14.6082 11.489 14.725 11.489 14.7798 11.411C16.2268 9.34843 18.6227 8.00005 21.3333 8.00005H22.5333C22.607 8.00005 22.6666 7.94036 22.6666 7.86672V6.18871Z" fill="currentColor"/> <path d="M28.6666 18.0001C29.7712 18.0001 30.6666 17.1046 30.6666 16.0001C30.6666 14.8955 29.7712 14.0001 28.6666 14.0001C27.5621 14.0001 26.6666 14.8955 26.6666 16.0001C26.6666 17.1046 27.5621 18.0001 28.6666 18.0001Z" fill="currentColor"/>', Wk = '<path d="M23.7295 5.65252C23.2894 5.32737 22.6667 5.64155 22.6667 6.18871V7.86672C22.6667 7.94036 22.607 8.00005 22.5333 8.00005H21.3333C18.6228 8.00005 16.2268 9.34843 14.7798 11.411C14.7251 11.489 14.6083 11.489 14.5536 11.411C13.1065 9.34843 10.7106 8.00005 8.00001 8.00005H6.00001C5.63182 8.00005 5.33334 8.29853 5.33334 8.66672V10.3998C5.33334 10.768 5.63182 11.0665 6.00001 11.0665H8.00001C10.724 11.0665 12.9336 13.2748 12.9336 16.0001C12.9336 18.7253 10.724 20.9336 8.00001 20.9336H6.00001C5.63182 20.9336 5.33334 21.2321 5.33334 21.6003V23.3334C5.33334 23.7016 5.63182 24.0001 6.00001 24.0001H8.00001C10.7106 24.0001 13.1065 22.6517 14.5536 20.5891C14.6083 20.5111 14.7251 20.5111 14.7798 20.5891C16.2268 22.6517 18.6228 24.0001 21.3333 24.0001H22.5333C22.607 24.0001 22.6667 24.0597 22.6667 24.1334V25.8113C22.6667 26.3585 23.2895 26.6727 23.7295 26.3475L28.2568 23.0022C28.6175 22.7357 28.6174 22.1963 28.2568 21.9298L23.7295 18.5848C23.2894 18.2597 22.6667 18.5738 22.6667 19.121V20.8003C22.6667 20.874 22.607 20.9336 22.5333 20.9336H21.3333C18.6094 20.9336 16.3997 18.7253 16.3997 16.0001C16.3997 13.2748 18.6094 11.0665 21.3333 11.0665H22.5333C22.607 11.0665 22.6667 11.1262 22.6667 11.1998V12.879C22.6667 13.4262 23.2895 13.7404 23.7295 13.4152L28.2568 10.0699C28.6175 9.8034 28.6174 9.26401 28.2568 8.99753L23.7295 5.65252Z" fill="currentColor"/>', Uk = '<path d="M8.66667 8C8.29848 8 8 8.29848 8 8.66667V23.3333C8 23.7015 8.29848 24 8.66667 24H23.3333C23.7015 24 24 23.7015 24 23.3333V8.66667C24 8.29848 23.7015 8 23.3333 8H8.66667Z" fill="currentColor"/>', Kk = '<path d="M14.6667 17.3333C14.6667 16.9651 14.9652 16.6667 15.3333 16.6667H20.6667C21.0349 16.6667 21.3333 16.9651 21.3333 17.3333V18.6667C21.3333 19.0349 21.0349 19.3333 20.6667 19.3333H15.3333C14.9652 19.3333 14.6667 19.0349 14.6667 18.6667V17.3333Z" fill="currentColor"/> <path d="M11.3333 12C10.9652 12 10.6667 12.2985 10.6667 12.6667V14C10.6667 14.3682 10.9652 14.6667 11.3333 14.6667H16.6667C17.0349 14.6667 17.3333 14.3682 17.3333 14V12.6667C17.3333 12.2985 17.0349 12 16.6667 12H11.3333Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33334 7.33334C5.33334 6.96515 5.63182 6.66667 6.00001 6.66667H26C26.3682 6.66667 26.6667 6.96515 26.6667 7.33334V24C26.6667 24.3682 26.3682 24.6667 26 24.6667H24.1333C24.0597 24.6667 24 24.7264 24 24.8V27.3452C24 27.8924 23.3772 28.2065 22.9372 27.8814L18.6216 24.6928C18.5986 24.6758 18.5709 24.6667 18.5423 24.6667H6.00001C5.63182 24.6667 5.33334 24.3682 5.33334 24V7.33334ZM8.66668 9.33334C8.29849 9.33334 8.00001 9.63181 8.00001 10V21.3333C8.00001 21.7015 8.29849 22 8.66668 22H23.3333C23.7015 22 24 21.7015 24 21.3333V10C24 9.63182 23.7015 9.33334 23.3333 9.33334H8.66668Z" fill="currentColor"/>', zk = '<path d="M15.332 7.33333C14.9639 7.33333 14.6654 7.03486 14.6654 6.66667V4.66667C14.6654 4.29848 14.9639 4 15.332 4H16.6654C17.0336 4 17.332 4.29848 17.332 4.66667V6.66667C17.332 7.03486 17.0336 7.33333 16.6654 7.33333H15.332Z" fill="currentColor"/> <path d="M15.332 28C14.9639 28 14.6654 27.7015 14.6654 27.3333V25.3333C14.6654 24.9651 14.9639 24.6667 15.332 24.6667H16.6654C17.0336 24.6667 17.332 24.9651 17.332 25.3333V27.3333C17.332 27.7015 17.0336 28 16.6654 28H15.332Z" fill="currentColor"/> <path d="M7.24952 12.4883C7.56838 12.6724 7.97611 12.5631 8.1602 12.2443L8.82687 11.0896C9.01096 10.7707 8.90171 10.363 8.58285 10.1789L6.8508 9.17888C6.53194 8.99479 6.12421 9.10404 5.94012 9.4229L5.27345 10.5776C5.08935 10.8965 5.1986 11.3042 5.51747 11.4883L7.24952 12.4883Z" fill="currentColor"/> <path d="M26.0581 22.5776C25.874 22.8965 25.4662 23.0057 25.1474 22.8216L23.4153 21.8216C23.0965 21.6375 22.9872 21.2298 23.1713 20.9109L23.838 19.7562C24.0221 19.4374 24.4298 19.3281 24.7487 19.5122L26.4807 20.5122C26.7996 20.6963 26.9088 21.104 26.7247 21.4229L26.0581 22.5776Z" fill="currentColor"/> <path d="M8.58285 21.8216C8.90171 21.6375 9.01096 21.2298 8.82687 20.9109L8.1602 19.7562C7.9761 19.4374 7.56838 19.3281 7.24952 19.5122L5.51747 20.5122C5.1986 20.6963 5.08935 21.104 5.27345 21.4229L5.94012 22.5776C6.12421 22.8965 6.53194 23.0057 6.8508 22.8216L8.58285 21.8216Z" fill="currentColor"/> <path d="M26.7247 10.5776C26.9088 10.8965 26.7996 11.3042 26.4807 11.4883L24.7487 12.4883C24.4298 12.6724 24.0221 12.5631 23.838 12.2443L23.1713 11.0896C22.9872 10.7707 23.0965 10.363 23.4153 10.1789L25.1474 9.17888C25.4662 8.99478 25.874 9.10403 26.0581 9.4229L26.7247 10.5776Z" fill="currentColor"/> <path d="M16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10Z" fill="currentColor"/>', Yk = '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.33333 7.33334C5.33333 6.96515 5.63181 6.66667 5.99999 6.66667H26C26.3682 6.66667 26.6667 6.96515 26.6667 7.33334V24.6667C26.6667 25.0349 26.3682 25.3333 26 25.3333H5.99999C5.63181 25.3333 5.33333 25.0349 5.33333 24.6667V7.33334ZM7.99999 10C7.99999 9.63182 8.29847 9.33334 8.66666 9.33334H19.8667C19.9403 9.33334 20 9.39303 20 9.46667V22.5333C20 22.607 19.9403 22.6667 19.8667 22.6667H8.66666C8.29847 22.6667 7.99999 22.3682 7.99999 22V10Z" fill="currentColor"/>', Qk = '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.33334 7.33334C5.33334 6.96515 5.63181 6.66667 6 6.66667H26C26.3682 6.66667 26.6667 6.96515 26.6667 7.33334V24.6667C26.6667 25.0349 26.3682 25.3333 26 25.3333H6C5.63181 25.3333 5.33334 25.0349 5.33334 24.6667V7.33334ZM8 10C8 9.63182 8.29848 9.33334 8.66667 9.33334H17.2C17.2736 9.33334 17.3333 9.39303 17.3333 9.46667V22.5333C17.3333 22.607 17.2736 22.6667 17.2 22.6667H8.66667C8.29848 22.6667 8 22.3682 8 22V10ZM20 22.5333C20 22.607 20.0597 22.6667 20.1333 22.6667H23.3333C23.7015 22.6667 24 22.3682 24 22V10C24 9.63182 23.7015 9.33334 23.3333 9.33334H20.1333C20.0597 9.33334 20 9.39303 20 9.46667V22.5333Z" fill="currentColor"/>', Xk = '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.0774 7.34581V20.8132C21.1029 21.0075 21.0461 21.2113 20.907 21.3638C20.865 21.4114 20.8166 21.4529 20.763 21.4869L12.4613 27.7302C11.4972 28.4553 10.1559 27.618 10.3539 26.4147L11.1225 21.7442C11.1358 21.663 11.0732 21.5892 10.9909 21.5892H5.33411C4.50479 21.5892 3.87666 20.8269 4.02118 19.9958L6.1438 7.78785C6.2565 7.13969 6.80998 6.6673 7.45673 6.6673L20.4108 6.6673C20.779 6.6673 21.0774 6.97108 21.0774 7.34581ZM14.2638 19.0776C14.2772 18.9964 14.2145 18.9226 14.1323 18.9226H7.07297C6.9902 18.9226 6.92743 18.8479 6.9416 18.7664L8.56244 9.44446C8.57354 9.38059 8.62897 9.33396 8.6938 9.33396L18.2774 9.33397C18.3511 9.33397 18.4108 9.39366 18.4108 9.4673V19.8527C18.4108 19.8946 18.3911 19.9341 18.3576 19.9593L13.7857 23.3976C13.6896 23.4699 13.5545 23.388 13.574 23.2694L14.2638 19.0776Z" fill="currentColor"/> <path d="M23.3333 20.6621C23.3333 21.0303 23.6318 21.3288 24 21.3288H26C26.3682 21.3288 26.6667 21.0303 26.6667 20.6621V7.33398C26.6667 6.96579 26.3682 6.66732 26 6.66732H24C23.6318 6.66732 23.3333 6.96579 23.3333 7.33398V20.6621Z" fill="currentColor"/>', Jk = '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9226 24.6542V11.1868C10.8971 10.9925 10.954 10.7887 11.093 10.6362C11.135 10.5886 11.1834 10.5471 11.237 10.5131L19.5387 4.26976C20.5028 3.54469 21.8441 4.38199 21.6461 5.5853L20.8775 10.2558C20.8642 10.337 20.9268 10.4108 21.0091 10.4108H26.6659C27.4952 10.4108 28.1233 11.1731 27.9788 12.0042L25.8562 24.2121C25.7435 24.8603 25.19 25.3327 24.5433 25.3327L11.5892 25.3327C11.221 25.3327 10.9226 25.0289 10.9226 24.6542ZM17.7362 12.9224C17.7228 13.0036 17.7855 13.0774 17.8677 13.0774H24.927C25.0098 13.0774 25.0726 13.1521 25.0584 13.2336L23.4376 22.5555C23.4265 22.6194 23.371 22.666 23.3062 22.666L13.7226 22.666C13.6489 22.666 13.5892 22.6063 13.5892 22.5327V12.1473C13.5892 12.1054 13.6089 12.0659 13.6424 12.0407L18.2143 8.60242C18.3104 8.53015 18.4455 8.61198 18.426 8.73063L17.7362 12.9224Z" fill="currentColor"/> <path d="M8.66666 11.3379C8.66666 10.9697 8.36818 10.6712 7.99999 10.6712H5.99999C5.63181 10.6712 5.33333 10.9697 5.33333 11.3379V24.666C5.33333 25.0342 5.6318 25.3327 5.99999 25.3327H7.99999C8.36818 25.3327 8.66666 25.0342 8.66666 24.666L8.66666 11.3379Z" fill="currentColor"/>', eM = '<path d="M14.6666 16.6667C14.6666 17.0349 14.9651 17.3334 15.3333 17.3334H16.6666C17.0348 17.3334 17.3333 17.0349 17.3333 16.6667V11.3334C17.3333 10.9652 17.0348 10.6667 16.6666 10.6667H15.3333C14.9651 10.6667 14.6666 10.9652 14.6666 11.3334V16.6667Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.99969C11.6318 1.99969 11.3333 2.29817 11.3333 2.66636V3.99969C11.3333 4.36788 11.6318 4.66636 12 4.66636H14.5333C14.6069 4.66636 14.6666 4.72606 14.6666 4.79969V5.29814C14.6666 5.3654 14.6162 5.42208 14.5495 5.43114C9.3446 6.13878 5.33331 10.601 5.33331 16C5.33331 21.8911 10.1089 26.6667 16 26.6667C21.891 26.6667 26.6666 21.8911 26.6666 16C26.6666 10.601 22.6554 6.13878 17.4504 5.43114C17.3838 5.42208 17.3333 5.3654 17.3333 5.29814V4.7997C17.3333 4.72606 17.393 4.66636 17.4666 4.66636H20C20.3682 4.66636 20.6666 4.36788 20.6666 3.99969V2.66636C20.6666 2.29817 20.3682 1.99969 20 1.99969H12ZM24 16C24 20.4183 20.4183 24 16 24C11.5817 24 7.99998 20.4183 7.99998 16C7.99998 11.5817 11.5817 8.00002 16 8.00002C20.4183 8.00002 24 11.5817 24 16Z" fill="currentColor"/>', tM = '<path d="M12 14C12 13.6318 12.2985 13.3333 12.6667 13.3333H15.3333C15.7015 13.3333 16 13.6318 16 14V15.3333C16 15.7015 15.7015 16 15.3333 16H12.6667C12.2985 16 12 15.7015 12 15.3333V14Z" fill="currentColor"/> <path d="M12 19.3333C12 18.9651 12.2985 18.6667 12.6667 18.6667H19.3333C19.7015 18.6667 20 18.9651 20 19.3333V20.6667C20 21.0349 19.7015 21.3333 19.3333 21.3333H12.6667C12.2985 21.3333 12 21.0349 12 20.6667V19.3333Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33332 5.33333C6.96513 5.33333 6.66666 5.63181 6.66666 5.99999V26C6.66666 26.3682 6.96513 26.6667 7.33332 26.6667H24.6667C25.0348 26.6667 25.3333 26.3682 25.3333 26V13.3892C25.3333 13.3539 25.3193 13.32 25.2943 13.295L17.3724 5.37238C17.3474 5.34738 17.3135 5.33333 17.2781 5.33333H7.33332ZM9.99999 7.99999H17.2C17.2736 7.99999 17.3333 8.05969 17.3333 8.13333V12.6667C17.3333 13.0349 17.6318 13.3333 18 13.3333H22.5333C22.607 13.3333 22.6667 13.393 22.6667 13.4667V23.3333C22.6667 23.7015 22.3682 24 22 24H9.99999C9.6318 24 9.33332 23.7015 9.33332 23.3333V8.66666C9.33332 8.29847 9.6318 7.99999 9.99999 7.99999Z" fill="currentColor"/>', nM = '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.33334 6.00001C5.33334 5.63182 5.63182 5.33334 6.00001 5.33334H26C26.3682 5.33334 26.6667 5.63182 26.6667 6.00001V20.6667C26.6667 21.0349 26.3682 21.3333 26 21.3333H6.00001C5.63182 21.3333 5.33334 21.0349 5.33334 20.6667V6.00001ZM8.40008 9.06634C8.40008 8.69815 8.69855 8.39967 9.06674 8.39967H22.9339C23.3021 8.39967 23.6006 8.69815 23.6006 9.06634V17.6002C23.6006 17.9684 23.3021 18.2669 22.9339 18.2669H9.06674C8.69855 18.2669 8.40008 17.9684 8.40008 17.6002V9.06634Z" fill="currentColor"/> <path d="M11.3333 23.9999C10.9652 23.9999 10.6667 24.2984 10.6667 24.6666V25.9999C10.6667 26.3681 10.9652 26.6666 11.3333 26.6666H20.6667C21.0349 26.6666 21.3333 26.3681 21.3333 25.9999V24.6666C21.3333 24.2984 21.0349 23.9999 20.6667 23.9999H11.3333Z" fill="currentColor"/>', sM = '<path d="M16 16C18.9455 16 21.3333 13.6122 21.3333 10.6666C21.3333 7.72113 18.9455 5.33331 16 5.33331C13.0545 5.33331 10.6667 7.72113 10.6667 10.6666C10.6667 13.6122 13.0545 16 16 16Z" fill="currentColor"/> <path d="M11.3333 18C8.38781 18 6 20.3878 6 23.3333V26.5333C6 26.607 6.0597 26.6666 6.13333 26.6666H9.2C9.27364 26.6666 9.33333 26.607 9.33333 26.5333V24C9.33333 22.5272 10.5272 21.3333 12 21.3333H20C21.4728 21.3333 22.6667 22.5272 22.6667 24V26.5333C22.6667 26.607 22.7264 26.6666 22.8 26.6666H25.8664C25.94 26.6666 25.9997 26.607 25.9997 26.5333L26 23.3333C26 20.3878 23.6122 18 20.6667 18H11.3333Z" fill="currentColor"/>', iM = '<path d="M17.5091 24.6595C17.5091 25.2066 16.8864 25.5208 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9992 9.36923 19.9992H4.66667C4.29848 19.9992 4 19.7007 4 19.3325V12.6658C4 12.2976 4.29848 11.9992 4.66667 11.9992H9.37115C9.39967 11.9992 9.42745 11.99 9.45039 11.9731L16.4463 6.80363C16.8863 6.47845 17.5091 6.79262 17.5091 7.3398L17.5091 24.6595Z" fill="currentColor"/> <path d="M27.5091 9.33336C27.8773 9.33336 28.1758 9.63184 28.1758 10V22C28.1758 22.3682 27.8773 22.6667 27.5091 22.6667H26.1758C25.8076 22.6667 25.5091 22.3682 25.5091 22V10C25.5091 9.63184 25.8076 9.33336 26.1758 9.33336L27.5091 9.33336Z" fill="currentColor"/> <path d="M22.1758 12C22.544 12 22.8424 12.2985 22.8424 12.6667V19.3334C22.8424 19.7016 22.544 20 22.1758 20H20.8424C20.4743 20 20.1758 19.7016 20.1758 19.3334V12.6667C20.1758 12.2985 20.4743 12 20.8424 12H22.1758Z" fill="currentColor"/>', rM = '<path d="M17.5091 24.6594C17.5091 25.2066 16.8864 25.5207 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9991 9.36923 19.9991H4.66667C4.29848 19.9991 4 19.7006 4 19.3324V12.6658C4 12.2976 4.29848 11.9991 4.66667 11.9991H9.37115C9.39967 11.9991 9.42745 11.99 9.45039 11.973L16.4463 6.80358C16.8863 6.4784 17.5091 6.79258 17.5091 7.33975L17.5091 24.6594Z" fill="currentColor"/> <path d="M22.8424 12.6667C22.8424 12.2985 22.544 12 22.1758 12H20.8424C20.4743 12 20.1758 12.2985 20.1758 12.6667V19.3333C20.1758 19.7015 20.4743 20 20.8424 20H22.1758C22.544 20 22.8424 19.7015 22.8424 19.3333V12.6667Z" fill="currentColor"/>', oM = '<path d="M10.2017 23.401C10.462 23.6613 10.8841 23.6613 11.1445 23.401L15.9057 18.6398C15.9577 18.5877 16.0422 18.5877 16.0942 18.6398L20.8555 23.401C21.1158 23.6613 21.5379 23.6613 21.7983 23.401L23.401 21.7982C23.6614 21.5378 23.6614 21.1157 23.401 20.8554L18.6398 16.0942C18.5878 16.0421 18.5878 15.9577 18.6398 15.9056L23.401 11.1444C23.6613 10.8841 23.6613 10.462 23.401 10.2016L21.7982 8.59886C21.5379 8.33851 21.1158 8.33851 20.8554 8.59886L16.0942 13.36C16.0422 13.4121 15.9577 13.4121 15.9057 13.36L11.1445 8.59887C10.8842 8.33852 10.4621 8.33852 10.2017 8.59887L8.59894 10.2016C8.33859 10.462 8.33859 10.8841 8.59894 11.1445L13.3601 15.9056C13.4122 15.9577 13.4122 16.0421 13.3601 16.0942L8.59889 20.8554C8.33854 21.1157 8.33854 21.5378 8.59889 21.7982L10.2017 23.401Z" fill="currentColor"/>';
const N = (n) => n ? `${n} vds-icon` : "vds-icon", aM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: cL }));
aM.displayName = "VidstackAccessibilityIcon";
const cM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: lL }));
cM.displayName = "VidstackAddNoteIcon";
const lM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: uL }));
lM.displayName = "VidstackAddPlaylistIcon";
const uM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: dL }));
uM.displayName = "VidstackAddUserIcon";
const dM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: hL }));
dM.displayName = "VidstackAddIcon";
const hM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: fL }));
hM.displayName = "VidstackAirPlayIcon";
const fM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: pL }));
fM.displayName = "VidstackArrowCollapseInIcon";
const pM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: CL }));
pM.displayName = "VidstackArrowCollapseIcon";
const CM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: mL }));
CM.displayName = "VidstackArrowDownIcon";
const mM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: gL }));
mM.displayName = "VidstackArrowExpandOutIcon";
const gM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: yL }));
gM.displayName = "VidstackArrowExpandIcon";
const yM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: vL }));
yM.displayName = "VidstackArrowLeftIcon";
const vM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: bL }));
vM.displayName = "VidstackArrowRightIcon";
const bM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: wL }));
bM.displayName = "VidstackArrowUpIcon";
const wM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: xL }));
wM.displayName = "VidstackBookmarkIcon";
const xM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: SL }));
xM.displayName = "VidstackCameraIcon";
const SM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: EL }));
SM.displayName = "VidstackChaptersIcon";
const EM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: $L }));
EM.displayName = "VidstackChatCollapseIcon";
const $M = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: TL }));
$M.displayName = "VidstackChatIcon";
const TM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: PL }));
TM.displayName = "VidstackCheckIcon";
const PM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: LL }));
PM.displayName = "VidstackChevronDownIcon";
const LM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: kL }));
LM.displayName = "VidstackChevronLeftIcon";
const kM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: ML }));
kM.displayName = "VidstackChevronRightIcon";
const MM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: IL }));
MM.displayName = "VidstackChevronUpIcon";
const IM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: VL }));
IM.displayName = "VidstackChromecastIcon";
const VM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: AL }));
VM.displayName = "VidstackClipIcon";
const AM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: RL }));
AM.displayName = "VidstackClosedCaptionsOnIcon";
const RM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: NL }));
RM.displayName = "VidstackClosedCaptionsIcon";
const NM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: HL }));
NM.displayName = "VidstackCommentIcon";
const HM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: OL }));
HM.displayName = "VidstackComputerIcon";
const OM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: DL }));
OM.displayName = "VidstackDeviceIcon";
const DM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: _L }));
DM.displayName = "VidstackDownloadIcon";
const _M = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: FL }));
_M.displayName = "VidstackEpisodesIcon";
const FM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: jL }));
FM.displayName = "VidstackEyeIcon";
const jM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: qL }));
jM.displayName = "VidstackFastBackwardIcon";
const qM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: ZL }));
qM.displayName = "VidstackFastForwardIcon";
const ZM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: BL }));
ZM.displayName = "VidstackFlagIcon";
const BM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: GL }));
BM.displayName = "VidstackFullscreenArrowExitIcon";
const GM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: WL }));
GM.displayName = "VidstackFullscreenArrowIcon";
const WM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: UL }));
WM.displayName = "VidstackFullscreenExitIcon";
const UM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: KL }));
UM.displayName = "VidstackFullscreenIcon";
const KM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: zL }));
KM.displayName = "VidstackHeartIcon";
const zM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: YL }));
zM.displayName = "VidstackInfoIcon";
const YM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: QL }));
YM.displayName = "VidstackLanguageIcon";
const QM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: XL }));
QM.displayName = "VidstackLinkIcon";
const XM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: JL }));
XM.displayName = "VidstackLockClosedIcon";
const JM = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: ek }));
JM.displayName = "VidstackLockOpenIcon";
const eI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: tk }));
eI.displayName = "VidstackMenuHorizontalIcon";
const tI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: nk }));
tI.displayName = "VidstackMenuVerticalIcon";
const nI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: sk }));
nI.displayName = "VidstackMicrophoneIcon";
const sI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: ik }));
sI.displayName = "VidstackMobileIcon";
const iI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: rk }));
iI.displayName = "VidstackMoonIcon";
const rI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: ok }));
rI.displayName = "VidstackMusicOffIcon";
const oI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: ak }));
oI.displayName = "VidstackMusicIcon";
const aI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: ck }));
aI.displayName = "VidstackMuteIcon";
const cI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: lk }));
cI.displayName = "VidstackNextIcon";
const lI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: uk }));
lI.displayName = "VidstackNoEyeIcon";
const uI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: dk }));
uI.displayName = "VidstackNotificationIcon";
const dI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: hk }));
dI.displayName = "VidstackOdometerIcon";
const hI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: fk }));
hI.displayName = "VidstackPauseIcon";
const fI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: pk }));
fI.displayName = "VidstackPictureInPictureExitIcon";
const pI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Ck }));
pI.displayName = "VidstackPictureInPictureIcon";
const CI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: mk }));
CI.displayName = "VidstackPlayIcon";
const mI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: gk }));
mI.displayName = "VidstackPlaybackSpeedCircleIcon";
const gI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: yk }));
gI.displayName = "VidstackPlaylistIcon";
const yI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: vk }));
yI.displayName = "VidstackPreviousIcon";
const vI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: bk }));
vI.displayName = "VidstackQuestionMarkIcon";
const bI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: wk }));
bI.displayName = "VidstackQueueListIcon";
const wI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: xk }));
wI.displayName = "VidstackRadioButtonSelectedIcon";
const xI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Sk }));
xI.displayName = "VidstackRadioButtonIcon";
const SI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Ek }));
SI.displayName = "VidstackRepeatOnIcon";
const EI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: $k }));
EI.displayName = "VidstackRepeatSquareOnIcon";
const $I = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Tk }));
$I.displayName = "VidstackRepeatSquareIcon";
const TI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Pk }));
TI.displayName = "VidstackRepeatIcon";
const PI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Lk }));
PI.displayName = "VidstackReplayIcon";
const LI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: kk }));
LI.displayName = "VidstackRotateIcon";
const kI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Mk }));
kI.displayName = "VidstackSearchIcon";
const Ig = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Ik }));
Ig.displayName = "VidstackSeekBackward10Icon";
const MI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Vk }));
MI.displayName = "VidstackSeekBackward15Icon";
const II = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Ak }));
II.displayName = "VidstackSeekBackward30Icon";
const VI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Rk }));
VI.displayName = "VidstackSeekBackwardIcon";
const Vg = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Nk }));
Vg.displayName = "VidstackSeekForward10Icon";
const AI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Hk }));
AI.displayName = "VidstackSeekForward15Icon";
const RI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Ok }));
RI.displayName = "VidstackSeekForward30Icon";
const NI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Dk }));
NI.displayName = "VidstackSeekForwardIcon";
const HI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: _k }));
HI.displayName = "VidstackSendIcon";
const OI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Fk }));
OI.displayName = "VidstackSettingsMenuIcon";
const DI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: jk }));
DI.displayName = "VidstackSettingsSwitchIcon";
const _I = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: qk }));
_I.displayName = "VidstackSettingsIcon";
const FI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Zk }));
FI.displayName = "VidstackShareArrowIcon";
const jI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Bk }));
jI.displayName = "VidstackShareIcon";
const qI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Gk }));
qI.displayName = "VidstackShuffleOnIcon";
const ZI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Wk }));
ZI.displayName = "VidstackShuffleIcon";
const BI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Uk }));
BI.displayName = "VidstackStopIcon";
const GI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Kk }));
GI.displayName = "VidstackSubtitlesIcon";
const WI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: zk }));
WI.displayName = "VidstackSunIcon";
const UI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Yk }));
UI.displayName = "VidstackTheatreModeExitIcon";
const KI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Qk }));
KI.displayName = "VidstackTheatreModeIcon";
const zI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Xk }));
zI.displayName = "VidstackThumbsDownIcon";
const YI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: Jk }));
YI.displayName = "VidstackThumbsUpIcon";
const QI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: eM }));
QI.displayName = "VidstackTimerIcon";
const XI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: tM }));
XI.displayName = "VidstackTranscriptIcon";
const JI = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: nM }));
JI.displayName = "VidstackTvIcon";
const eV = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: sM }));
eV.displayName = "VidstackUserIcon";
const tV = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: iM }));
tV.displayName = "VidstackVolumeHighIcon";
const nV = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: rM }));
nV.displayName = "VidstackVolumeLowIcon";
const sV = /* @__PURE__ */ R((n, t) => V(A, { ...n, className: N(n.className), ref: t, paths: oM }));
sV.displayName = "VidstackXMarkIcon";
const To = "group ring-media-focus relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 focus-visible:ring-4 aria-disabled:hidden", Po = "animate-out fade-out slide-out-to-bottom-2 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in data-[state=delayed-open]:slide-in-from-bottom-4 z-10 rounded-sm bg-black/90 px-2 py-0.5 text-sm font-medium text-white parent-data-[open]:hidden";
function iV({
  tooltipOffset: n = 0,
  tooltipSide: t = "top",
  tooltipAlign: e = "center"
}) {
  const s = nn("paused");
  return /* @__PURE__ */ w.jsxs(So, { children: [
    /* @__PURE__ */ w.jsx(Eo, { asChild: !0, children: /* @__PURE__ */ w.jsx(Lm, { className: To, children: s ? /* @__PURE__ */ w.jsx(iL, { className: "w-6 h-6 translate-x-px" }) : /* @__PURE__ */ w.jsx(sL, { className: "w-6 h-6" }) }) }),
    /* @__PURE__ */ w.jsx(
      $o,
      {
        className: Po,
        side: t,
        align: e,
        sideOffset: n,
        children: s ? "Play" : "Pause"
      }
    )
  ] });
}
function rV({
  tooltipOffset: n = 0,
  tooltipSide: t = "top",
  tooltipAlign: e = "center"
}) {
  const s = nn("volume"), i = nn("muted");
  return /* @__PURE__ */ w.jsxs(So, { children: [
    /* @__PURE__ */ w.jsx(Eo, { asChild: !0, children: /* @__PURE__ */ w.jsx(Mm, { className: To, children: i || s == 0 ? /* @__PURE__ */ w.jsx(aL, { className: "w-6 h-6" }) : s < 0.5 ? /* @__PURE__ */ w.jsx(rL, { className: "w-6 h-6" }) : /* @__PURE__ */ w.jsx(oL, { className: "w-6 h-6" }) }) }),
    /* @__PURE__ */ w.jsx(
      $o,
      {
        className: Po,
        side: t,
        align: e,
        sideOffset: n,
        children: i ? "Unmute" : "Mute"
      }
    )
  ] });
}
function oV({
  tooltipOffset: n = 0,
  tooltipSide: t = "top",
  tooltipAlign: e = "center"
}) {
  const s = nn("fullscreen");
  return /* @__PURE__ */ w.jsxs(So, { children: [
    /* @__PURE__ */ w.jsx(Eo, { asChild: !0, children: /* @__PURE__ */ w.jsx(km, { className: To, children: s ? /* @__PURE__ */ w.jsx(nL, { className: "w-6 h-6" }) : /* @__PURE__ */ w.jsx(tL, { className: "w-6 h-6" }) }) }),
    /* @__PURE__ */ w.jsx(
      $o,
      {
        className: Po,
        side: t,
        align: e,
        sideOffset: n,
        children: s ? "Exit Fullscreen" : "Enter Fullscreen"
      }
    )
  ] });
}
function aV({
  tooltipOffset: n = 0,
  tooltipSide: t = "top",
  tooltipAlign: e = "center"
}) {
  return /* @__PURE__ */ w.jsxs(So, { children: [
    /* @__PURE__ */ w.jsx(Eo, { asChild: !0, children: /* @__PURE__ */ w.jsx(
      g7,
      {
        seconds: 10,
        className: To,
        children: /* @__PURE__ */ w.jsx(Vg, { className: "w-7 h-7" })
      }
    ) }),
    /* @__PURE__ */ w.jsx(
      $o,
      {
        className: Po,
        side: t,
        align: e,
        sideOffset: n,
        children: "Seek Forward 10s"
      }
    )
  ] });
}
function cV({
  tooltipOffset: n = 0,
  tooltipSide: t = "top",
  tooltipAlign: e = "center"
}) {
  return /* @__PURE__ */ w.jsxs(So, { children: [
    /* @__PURE__ */ w.jsx(Eo, { asChild: !0, children: /* @__PURE__ */ w.jsx(
      g7,
      {
        seconds: -10,
        className: To,
        children: /* @__PURE__ */ w.jsx(Ig, { className: "w-7 h-7" })
      }
    ) }),
    /* @__PURE__ */ w.jsx(
      $o,
      {
        className: Po,
        side: t,
        align: e,
        sideOffset: n,
        children: "Seek Backward 10s"
      }
    )
  ] });
}
function lV(n, t = []) {
  let e = [];
  function s(o, a) {
    const l = u.createContext(a), d = e.length;
    e = [...e, a];
    function h(f) {
      const { scope: m, children: y, ...v } = f, b = (m == null ? void 0 : m[n][d]) || l, S = u.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ w.jsx(b.Provider, { value: S, children: y });
    }
    function p(f, m) {
      const y = (m == null ? void 0 : m[n][d]) || l, v = u.useContext(y);
      if (v) return v;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return h.displayName = o + "Provider", [h, p];
  }
  const i = () => {
    const o = e.map((a) => u.createContext(a));
    return function(l) {
      const d = (l == null ? void 0 : l[n]) || o;
      return u.useMemo(
        () => ({ [`__scope${n}`]: { ...l, [n]: d } }),
        [l, d]
      );
    };
  };
  return i.scopeName = n, [s, uV(i, ...t)];
}
function uV(...n) {
  const t = n[0];
  if (n.length === 1) return t;
  const e = () => {
    const s = n.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(o) {
      const a = s.reduce((l, { useScope: d, scopeName: h }) => {
        const f = d(o)[`__scope${h}`];
        return { ...l, ...f };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return e.scopeName = t.scopeName, e;
}
function E7(n) {
  const t = n + "CollectionProvider", [e, s] = lV(t), [i, o] = e(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (y) => {
    const { scope: v, children: b } = y, S = Gs.useRef(null), E = Gs.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ w.jsx(i, { scope: v, itemMap: E, collectionRef: S, children: b });
  };
  a.displayName = t;
  const l = n + "CollectionSlot", d = Gs.forwardRef(
    (y, v) => {
      const { scope: b, children: S } = y, E = o(l, b), P = ut(v, E.collectionRef);
      return /* @__PURE__ */ w.jsx(Ko, { ref: P, children: S });
    }
  );
  d.displayName = l;
  const h = n + "CollectionItemSlot", p = "data-radix-collection-item", f = Gs.forwardRef(
    (y, v) => {
      const { scope: b, children: S, ...E } = y, P = Gs.useRef(null), I = ut(v, P), M = o(h, b);
      return Gs.useEffect(() => (M.itemMap.set(P, { ref: P, ...E }), () => void M.itemMap.delete(P))), /* @__PURE__ */ w.jsx(Ko, { [p]: "", ref: I, children: S });
    }
  );
  f.displayName = h;
  function m(y) {
    const v = o(n + "CollectionConsumer", y);
    return Gs.useCallback(() => {
      const S = v.collectionRef.current;
      if (!S) return [];
      const E = Array.from(S.querySelectorAll(`[${p}]`));
      return Array.from(v.itemMap.values()).sort(
        (M, D) => E.indexOf(M.ref.current) - E.indexOf(D.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: a, Slot: d, ItemSlot: f },
    m,
    s
  ];
}
var dV = u.createContext(void 0);
function $7(n) {
  const t = u.useContext(dV);
  return n || t || "ltr";
}
var kc = 0;
function hV() {
  u.useEffect(() => {
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", n[0] ?? Od()), document.body.insertAdjacentElement("beforeend", n[1] ?? Od()), kc++, () => {
      kc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), kc--;
    };
  }, []);
}
function Od() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.outline = "none", n.style.opacity = "0", n.style.position = "fixed", n.style.pointerEvents = "none", n;
}
var Mc = "focusScope.autoFocusOnMount", Ic = "focusScope.autoFocusOnUnmount", Dd = { bubbles: !1, cancelable: !0 }, fV = "FocusScope", Ag = u.forwardRef((n, t) => {
  const {
    loop: e = !1,
    trapped: s = !1,
    onMountAutoFocus: i,
    onUnmountAutoFocus: o,
    ...a
  } = n, [l, d] = u.useState(null), h = rs(i), p = rs(o), f = u.useRef(null), m = ut(t, (b) => d(b)), y = u.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  u.useEffect(() => {
    if (s) {
      let b = function(I) {
        if (y.paused || !l) return;
        const M = I.target;
        l.contains(M) ? f.current = M : Vi(f.current, { select: !0 });
      }, S = function(I) {
        if (y.paused || !l) return;
        const M = I.relatedTarget;
        M !== null && (l.contains(M) || Vi(f.current, { select: !0 }));
      }, E = function(I) {
        if (document.activeElement === document.body)
          for (const D of I)
            D.removedNodes.length > 0 && Vi(l);
      };
      document.addEventListener("focusin", b), document.addEventListener("focusout", S);
      const P = new MutationObserver(E);
      return l && P.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", b), document.removeEventListener("focusout", S), P.disconnect();
      };
    }
  }, [s, l, y.paused]), u.useEffect(() => {
    if (l) {
      Fd.add(y);
      const b = document.activeElement;
      if (!l.contains(b)) {
        const E = new CustomEvent(Mc, Dd);
        l.addEventListener(Mc, h), l.dispatchEvent(E), E.defaultPrevented || (pV(vV(Rg(l)), { select: !0 }), document.activeElement === b && Vi(l));
      }
      return () => {
        l.removeEventListener(Mc, h), setTimeout(() => {
          const E = new CustomEvent(Ic, Dd);
          l.addEventListener(Ic, p), l.dispatchEvent(E), E.defaultPrevented || Vi(b ?? document.body, { select: !0 }), l.removeEventListener(Ic, p), Fd.remove(y);
        }, 0);
      };
    }
  }, [l, h, p, y]);
  const v = u.useCallback(
    (b) => {
      if (!e && !s || y.paused) return;
      const S = b.key === "Tab" && !b.altKey && !b.ctrlKey && !b.metaKey, E = document.activeElement;
      if (S && E) {
        const P = b.currentTarget, [I, M] = CV(P);
        I && M ? !b.shiftKey && E === M ? (b.preventDefault(), e && Vi(I, { select: !0 })) : b.shiftKey && E === I && (b.preventDefault(), e && Vi(M, { select: !0 })) : E === P && b.preventDefault();
      }
    },
    [e, s, y.paused]
  );
  return /* @__PURE__ */ w.jsx(ht.div, { tabIndex: -1, ...a, ref: m, onKeyDown: v });
});
Ag.displayName = fV;
function pV(n, { select: t = !1 } = {}) {
  const e = document.activeElement;
  for (const s of n)
    if (Vi(s, { select: t }), document.activeElement !== e) return;
}
function CV(n) {
  const t = Rg(n), e = _d(t, n), s = _d(t.reverse(), n);
  return [e, s];
}
function Rg(n) {
  const t = [], e = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (s) => {
      const i = s.tagName === "INPUT" && s.type === "hidden";
      return s.disabled || s.hidden || i ? NodeFilter.FILTER_SKIP : s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); ) t.push(e.currentNode);
  return t;
}
function _d(n, t) {
  for (const e of n)
    if (!mV(e, { upTo: t })) return e;
}
function mV(n, { upTo: t }) {
  if (getComputedStyle(n).visibility === "hidden") return !0;
  for (; n; ) {
    if (t !== void 0 && n === t) return !1;
    if (getComputedStyle(n).display === "none") return !0;
    n = n.parentElement;
  }
  return !1;
}
function gV(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
function Vi(n, { select: t = !1 } = {}) {
  if (n && n.focus) {
    const e = document.activeElement;
    n.focus({ preventScroll: !0 }), n !== e && gV(n) && t && n.select();
  }
}
var Fd = yV();
function yV() {
  let n = [];
  return {
    add(t) {
      const e = n[0];
      t !== e && (e == null || e.pause()), n = jd(n, t), n.unshift(t);
    },
    remove(t) {
      var e;
      n = jd(n, t), (e = n[0]) == null || e.resume();
    }
  };
}
function jd(n, t) {
  const e = [...n], s = e.indexOf(t);
  return s !== -1 && e.splice(s, 1), e;
}
function vV(n) {
  return n.filter((t) => t.tagName !== "A");
}
function bV(n, t = []) {
  let e = [];
  function s(o, a) {
    const l = u.createContext(a), d = e.length;
    e = [...e, a];
    function h(f) {
      const { scope: m, children: y, ...v } = f, b = (m == null ? void 0 : m[n][d]) || l, S = u.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ w.jsx(b.Provider, { value: S, children: y });
    }
    function p(f, m) {
      const y = (m == null ? void 0 : m[n][d]) || l, v = u.useContext(y);
      if (v) return v;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return h.displayName = o + "Provider", [h, p];
  }
  const i = () => {
    const o = e.map((a) => u.createContext(a));
    return function(l) {
      const d = (l == null ? void 0 : l[n]) || o;
      return u.useMemo(
        () => ({ [`__scope${n}`]: { ...l, [n]: d } }),
        [l, d]
      );
    };
  };
  return i.scopeName = n, [s, wV(i, ...t)];
}
function wV(...n) {
  const t = n[0];
  if (n.length === 1) return t;
  const e = () => {
    const s = n.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(o) {
      const a = s.reduce((l, { useScope: d, scopeName: h }) => {
        const f = d(o)[`__scope${h}`];
        return { ...l, ...f };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return e.scopeName = t.scopeName, e;
}
var Vc = "rovingFocusGroup.onEntryFocus", xV = { bubbles: !1, cancelable: !0 }, sc = "RovingFocusGroup", [$9, Ng, SV] = E7(sc), [EV, Hg] = bV(
  sc,
  [SV]
), [$V, TV] = EV(sc), Og = u.forwardRef(
  (n, t) => /* @__PURE__ */ w.jsx($9.Provider, { scope: n.__scopeRovingFocusGroup, children: /* @__PURE__ */ w.jsx($9.Slot, { scope: n.__scopeRovingFocusGroup, children: /* @__PURE__ */ w.jsx(PV, { ...n, ref: t }) }) })
);
Og.displayName = sc;
var PV = u.forwardRef((n, t) => {
  const {
    __scopeRovingFocusGroup: e,
    orientation: s,
    loop: i = !1,
    dir: o,
    currentTabStopId: a,
    defaultCurrentTabStopId: l,
    onCurrentTabStopIdChange: d,
    onEntryFocus: h,
    preventScrollOnEntryFocus: p = !1,
    ...f
  } = n, m = u.useRef(null), y = ut(t, m), v = $7(o), [b = null, S] = X2({
    prop: a,
    defaultProp: l,
    onChange: d
  }), [E, P] = u.useState(!1), I = rs(h), M = Ng(e), D = u.useRef(!1), [B, F] = u.useState(0);
  return u.useEffect(() => {
    const k = m.current;
    if (k)
      return k.addEventListener(Vc, I), () => k.removeEventListener(Vc, I);
  }, [I]), /* @__PURE__ */ w.jsx(
    $V,
    {
      scope: e,
      orientation: s,
      dir: v,
      loop: i,
      currentTabStopId: b,
      onItemFocus: u.useCallback(
        (k) => S(k),
        [S]
      ),
      onItemShiftTab: u.useCallback(() => P(!0), []),
      onFocusableItemAdd: u.useCallback(
        () => F((k) => k + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => F((k) => k - 1),
        []
      ),
      children: /* @__PURE__ */ w.jsx(
        ht.div,
        {
          tabIndex: E || B === 0 ? -1 : 0,
          "data-orientation": s,
          ...f,
          ref: y,
          style: { outline: "none", ...n.style },
          onMouseDown: ue(n.onMouseDown, () => {
            D.current = !0;
          }),
          onFocus: ue(n.onFocus, (k) => {
            const Q = !D.current;
            if (k.target === k.currentTarget && Q && !E) {
              const X = new CustomEvent(Vc, xV);
              if (k.currentTarget.dispatchEvent(X), !X.defaultPrevented) {
                const ae = M().filter((G) => G.focusable), me = ae.find((G) => G.active), Y = ae.find((G) => G.id === b), Ee = [me, Y, ...ae].filter(
                  Boolean
                ).map((G) => G.ref.current);
                Fg(Ee, p);
              }
            }
            D.current = !1;
          }),
          onBlur: ue(n.onBlur, () => P(!1))
        }
      )
    }
  );
}), Dg = "RovingFocusGroupItem", _g = u.forwardRef(
  (n, t) => {
    const {
      __scopeRovingFocusGroup: e,
      focusable: s = !0,
      active: i = !1,
      tabStopId: o,
      ...a
    } = n, l = f2(), d = o || l, h = TV(Dg, e), p = h.currentTabStopId === d, f = Ng(e), { onFocusableItemAdd: m, onFocusableItemRemove: y } = h;
    return u.useEffect(() => {
      if (s)
        return m(), () => y();
    }, [s, m, y]), /* @__PURE__ */ w.jsx(
      $9.ItemSlot,
      {
        scope: e,
        id: d,
        focusable: s,
        active: i,
        children: /* @__PURE__ */ w.jsx(
          ht.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": h.orientation,
            ...a,
            ref: t,
            onMouseDown: ue(n.onMouseDown, (v) => {
              s ? h.onItemFocus(d) : v.preventDefault();
            }),
            onFocus: ue(n.onFocus, () => h.onItemFocus(d)),
            onKeyDown: ue(n.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                h.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const b = MV(v, h.orientation, h.dir);
              if (b !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let E = f().filter((P) => P.focusable).map((P) => P.ref.current);
                if (b === "last") E.reverse();
                else if (b === "prev" || b === "next") {
                  b === "prev" && E.reverse();
                  const P = E.indexOf(v.currentTarget);
                  E = h.loop ? IV(E, P + 1) : E.slice(P + 1);
                }
                setTimeout(() => Fg(E));
              }
            })
          }
        )
      }
    );
  }
);
_g.displayName = Dg;
var LV = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function kV(n, t) {
  return t !== "rtl" ? n : n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n;
}
function MV(n, t, e) {
  const s = kV(n.key, e);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(s)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(s)))
    return LV[s];
}
function Fg(n, t = !1) {
  const e = document.activeElement;
  for (const s of n)
    if (s === e || (s.focus({ preventScroll: t }), document.activeElement !== e)) return;
}
function IV(n, t) {
  return n.map((e, s) => n[(t + s) % n.length]);
}
var VV = Og, AV = _g, RV = function(n) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(n) ? n[0] : n;
  return t.ownerDocument.body;
}, q1 = /* @__PURE__ */ new WeakMap(), ga = /* @__PURE__ */ new WeakMap(), ya = {}, Ac = 0, jg = function(n) {
  return n && (n.host || jg(n.parentNode));
}, NV = function(n, t) {
  return t.map(function(e) {
    if (n.contains(e))
      return e;
    var s = jg(e);
    return s && n.contains(s) ? s : (console.error("aria-hidden", e, "in not contained inside", n, ". Doing nothing"), null);
  }).filter(function(e) {
    return !!e;
  });
}, HV = function(n, t, e, s) {
  var i = NV(t, Array.isArray(n) ? n : [n]);
  ya[e] || (ya[e] = /* @__PURE__ */ new WeakMap());
  var o = ya[e], a = [], l = /* @__PURE__ */ new Set(), d = new Set(i), h = function(f) {
    !f || l.has(f) || (l.add(f), h(f.parentNode));
  };
  i.forEach(h);
  var p = function(f) {
    !f || d.has(f) || Array.prototype.forEach.call(f.children, function(m) {
      if (l.has(m))
        p(m);
      else
        try {
          var y = m.getAttribute(s), v = y !== null && y !== "false", b = (q1.get(m) || 0) + 1, S = (o.get(m) || 0) + 1;
          q1.set(m, b), o.set(m, S), a.push(m), b === 1 && v && ga.set(m, !0), S === 1 && m.setAttribute(e, "true"), v || m.setAttribute(s, "true");
        } catch (E) {
          console.error("aria-hidden: cannot operate on ", m, E);
        }
    });
  };
  return p(t), l.clear(), Ac++, function() {
    a.forEach(function(f) {
      var m = q1.get(f) - 1, y = o.get(f) - 1;
      q1.set(f, m), o.set(f, y), m || (ga.has(f) || f.removeAttribute(s), ga.delete(f)), y || f.removeAttribute(e);
    }), Ac--, Ac || (q1 = /* @__PURE__ */ new WeakMap(), q1 = /* @__PURE__ */ new WeakMap(), ga = /* @__PURE__ */ new WeakMap(), ya = {});
  };
}, OV = function(n, t, e) {
  e === void 0 && (e = "data-aria-hidden");
  var s = Array.from(Array.isArray(n) ? n : [n]), i = RV(n);
  return i ? (s.push.apply(s, Array.from(i.querySelectorAll("[aria-live]"))), HV(s, i, e, "aria-hidden")) : function() {
    return null;
  };
}, ws = function() {
  return ws = Object.assign || function(t) {
    for (var e, s = 1, i = arguments.length; s < i; s++) {
      e = arguments[s];
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
  }, ws.apply(this, arguments);
};
function qg(n, t) {
  var e = {};
  for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && t.indexOf(s) < 0 && (e[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, s = Object.getOwnPropertySymbols(n); i < s.length; i++)
      t.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[i]) && (e[s[i]] = n[s[i]]);
  return e;
}
function DV(n, t, e) {
  if (e || arguments.length === 2) for (var s = 0, i = t.length, o; s < i; s++)
    (o || !(s in t)) && (o || (o = Array.prototype.slice.call(t, 0, s)), o[s] = t[s]);
  return n.concat(o || Array.prototype.slice.call(t));
}
var Ya = "right-scroll-bar-position", Qa = "width-before-scroll-bar", _V = "with-scroll-bars-hidden", FV = "--removed-body-scroll-bar-size";
function Rc(n, t) {
  return typeof n == "function" ? n(t) : n && (n.current = t), n;
}
function jV(n, t) {
  var e = a5(function() {
    return {
      // value
      value: n,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return e.value;
        },
        set current(s) {
          var i = e.value;
          i !== s && (e.value = s, e.callback(s, i));
        }
      }
    };
  })[0];
  return e.callback = t, e.facade;
}
var qV = typeof window < "u" ? u.useLayoutEffect : u.useEffect, qd = /* @__PURE__ */ new WeakMap();
function ZV(n, t) {
  var e = jV(null, function(s) {
    return n.forEach(function(i) {
      return Rc(i, s);
    });
  });
  return qV(function() {
    var s = qd.get(e);
    if (s) {
      var i = new Set(s), o = new Set(n), a = e.current;
      i.forEach(function(l) {
        o.has(l) || Rc(l, null);
      }), o.forEach(function(l) {
        i.has(l) || Rc(l, a);
      });
    }
    qd.set(e, n);
  }, [n]), e;
}
function BV(n) {
  return n;
}
function GV(n, t) {
  t === void 0 && (t = BV);
  var e = [], s = !1, i = {
    read: function() {
      if (s)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return e.length ? e[e.length - 1] : n;
    },
    useMedium: function(o) {
      var a = t(o, s);
      return e.push(a), function() {
        e = e.filter(function(l) {
          return l !== a;
        });
      };
    },
    assignSyncMedium: function(o) {
      for (s = !0; e.length; ) {
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
      s = !0;
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
function WV(n) {
  n === void 0 && (n = {});
  var t = GV(null);
  return t.options = ws({ async: !0, ssr: !1 }, n), t;
}
var Zg = function(n) {
  var t = n.sideCar, e = qg(n, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var s = t.read();
  if (!s)
    throw new Error("Sidecar medium not found");
  return u.createElement(s, ws({}, e));
};
Zg.isSideCarExport = !0;
function UV(n, t) {
  return n.useMedium(t), Zg;
}
var Bg = WV(), Nc = function() {
}, ic = u.forwardRef(function(n, t) {
  var e = u.useRef(null), s = u.useState({
    onScrollCapture: Nc,
    onWheelCapture: Nc,
    onTouchMoveCapture: Nc
  }), i = s[0], o = s[1], a = n.forwardProps, l = n.children, d = n.className, h = n.removeScrollBar, p = n.enabled, f = n.shards, m = n.sideCar, y = n.noIsolation, v = n.inert, b = n.allowPinchZoom, S = n.as, E = S === void 0 ? "div" : S, P = n.gapMode, I = qg(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), M = m, D = ZV([e, t]), B = ws(ws({}, I), i);
  return u.createElement(
    u.Fragment,
    null,
    p && u.createElement(M, { sideCar: Bg, removeScrollBar: h, shards: f, noIsolation: y, inert: v, setCallbacks: o, allowPinchZoom: !!b, lockRef: e, gapMode: P }),
    a ? u.cloneElement(u.Children.only(l), ws(ws({}, B), { ref: D })) : u.createElement(E, ws({}, B, { className: d, ref: D }), l)
  );
});
ic.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ic.classNames = {
  fullWidth: Qa,
  zeroRight: Ya
};
var KV = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function zV() {
  if (!document)
    return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var t = KV();
  return t && n.setAttribute("nonce", t), n;
}
function YV(n, t) {
  n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t));
}
function QV(n) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(n);
}
var XV = function() {
  var n = 0, t = null;
  return {
    add: function(e) {
      n == 0 && (t = zV()) && (YV(t, e), QV(t)), n++;
    },
    remove: function() {
      n--, !n && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, JV = function() {
  var n = XV();
  return function(t, e) {
    u.useEffect(function() {
      return n.add(t), function() {
        n.remove();
      };
    }, [t && e]);
  };
}, Gg = function() {
  var n = JV(), t = function(e) {
    var s = e.styles, i = e.dynamic;
    return n(s, i), null;
  };
  return t;
}, eA = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Hc = function(n) {
  return parseInt(n || "", 10) || 0;
}, tA = function(n) {
  var t = window.getComputedStyle(document.body), e = t[n === "padding" ? "paddingLeft" : "marginLeft"], s = t[n === "padding" ? "paddingTop" : "marginTop"], i = t[n === "padding" ? "paddingRight" : "marginRight"];
  return [Hc(e), Hc(s), Hc(i)];
}, nA = function(n) {
  if (n === void 0 && (n = "margin"), typeof window > "u")
    return eA;
  var t = tA(n), e = document.documentElement.clientWidth, s = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, s - e + t[2] - t[0])
  };
}, sA = Gg(), Y1 = "data-scroll-locked", iA = function(n, t, e, s) {
  var i = n.left, o = n.top, a = n.right, l = n.gap;
  return e === void 0 && (e = "margin"), `
  .`.concat(_V, ` {
   overflow: hidden `).concat(s, `;
   padding-right: `).concat(l, "px ").concat(s, `;
  }
  body[`).concat(Y1, `] {
    overflow: hidden `).concat(s, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(s, ";"),
    e === "margin" && `
    padding-left: `.concat(i, `px;
    padding-top: `).concat(o, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(s, `;
    `),
    e === "padding" && "padding-right: ".concat(l, "px ").concat(s, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ya, ` {
    right: `).concat(l, "px ").concat(s, `;
  }
  
  .`).concat(Qa, ` {
    margin-right: `).concat(l, "px ").concat(s, `;
  }
  
  .`).concat(Ya, " .").concat(Ya, ` {
    right: 0 `).concat(s, `;
  }
  
  .`).concat(Qa, " .").concat(Qa, ` {
    margin-right: 0 `).concat(s, `;
  }
  
  body[`).concat(Y1, `] {
    `).concat(FV, ": ").concat(l, `px;
  }
`);
}, Zd = function() {
  var n = parseInt(document.body.getAttribute(Y1) || "0", 10);
  return isFinite(n) ? n : 0;
}, rA = function() {
  u.useEffect(function() {
    return document.body.setAttribute(Y1, (Zd() + 1).toString()), function() {
      var n = Zd() - 1;
      n <= 0 ? document.body.removeAttribute(Y1) : document.body.setAttribute(Y1, n.toString());
    };
  }, []);
}, oA = function(n) {
  var t = n.noRelative, e = n.noImportant, s = n.gapMode, i = s === void 0 ? "margin" : s;
  rA();
  var o = u.useMemo(function() {
    return nA(i);
  }, [i]);
  return u.createElement(sA, { styles: iA(o, !t, i, e ? "" : "!important") });
}, T9 = !1;
if (typeof window < "u")
  try {
    var va = Object.defineProperty({}, "passive", {
      get: function() {
        return T9 = !0, !0;
      }
    });
    window.addEventListener("test", va, va), window.removeEventListener("test", va, va);
  } catch {
    T9 = !1;
  }
var Z1 = T9 ? { passive: !1 } : !1, aA = function(n) {
  return n.tagName === "TEXTAREA";
}, Wg = function(n, t) {
  if (!(n instanceof Element))
    return !1;
  var e = window.getComputedStyle(n);
  return (
    // not-not-scrollable
    e[t] !== "hidden" && // contains scroll inside self
    !(e.overflowY === e.overflowX && !aA(n) && e[t] === "visible")
  );
}, cA = function(n) {
  return Wg(n, "overflowY");
}, lA = function(n) {
  return Wg(n, "overflowX");
}, Bd = function(n, t) {
  var e = t.ownerDocument, s = t;
  do {
    typeof ShadowRoot < "u" && s instanceof ShadowRoot && (s = s.host);
    var i = Ug(n, s);
    if (i) {
      var o = Kg(n, s), a = o[1], l = o[2];
      if (a > l)
        return !0;
    }
    s = s.parentNode;
  } while (s && s !== e.body);
  return !1;
}, uA = function(n) {
  var t = n.scrollTop, e = n.scrollHeight, s = n.clientHeight;
  return [
    t,
    e,
    s
  ];
}, dA = function(n) {
  var t = n.scrollLeft, e = n.scrollWidth, s = n.clientWidth;
  return [
    t,
    e,
    s
  ];
}, Ug = function(n, t) {
  return n === "v" ? cA(t) : lA(t);
}, Kg = function(n, t) {
  return n === "v" ? uA(t) : dA(t);
}, hA = function(n, t) {
  return n === "h" && t === "rtl" ? -1 : 1;
}, fA = function(n, t, e, s, i) {
  var o = hA(n, window.getComputedStyle(t).direction), a = o * s, l = e.target, d = t.contains(l), h = !1, p = a > 0, f = 0, m = 0;
  do {
    var y = Kg(n, l), v = y[0], b = y[1], S = y[2], E = b - S - o * v;
    (v || E) && Ug(n, l) && (f += E, m += v), l instanceof ShadowRoot ? l = l.host : l = l.parentNode;
  } while (
    // portaled content
    !d && l !== document.body || // self content
    d && (t.contains(l) || t === l)
  );
  return (p && (Math.abs(f) < 1 || !i) || !p && (Math.abs(m) < 1 || !i)) && (h = !0), h;
}, ba = function(n) {
  return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, Gd = function(n) {
  return [n.deltaX, n.deltaY];
}, Wd = function(n) {
  return n && "current" in n ? n.current : n;
}, pA = function(n, t) {
  return n[0] === t[0] && n[1] === t[1];
}, CA = function(n) {
  return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
}, mA = 0, B1 = [];
function gA(n) {
  var t = u.useRef([]), e = u.useRef([0, 0]), s = u.useRef(), i = u.useState(mA++)[0], o = u.useState(Gg)[0], a = u.useRef(n);
  u.useEffect(function() {
    a.current = n;
  }, [n]), u.useEffect(function() {
    if (n.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var b = DV([n.lockRef.current], (n.shards || []).map(Wd), !0).filter(Boolean);
      return b.forEach(function(S) {
        return S.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), b.forEach(function(S) {
          return S.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [n.inert, n.lockRef.current, n.shards]);
  var l = u.useCallback(function(b, S) {
    if ("touches" in b && b.touches.length === 2 || b.type === "wheel" && b.ctrlKey)
      return !a.current.allowPinchZoom;
    var E = ba(b), P = e.current, I = "deltaX" in b ? b.deltaX : P[0] - E[0], M = "deltaY" in b ? b.deltaY : P[1] - E[1], D, B = b.target, F = Math.abs(I) > Math.abs(M) ? "h" : "v";
    if ("touches" in b && F === "h" && B.type === "range")
      return !1;
    var k = Bd(F, B);
    if (!k)
      return !0;
    if (k ? D = F : (D = F === "v" ? "h" : "v", k = Bd(F, B)), !k)
      return !1;
    if (!s.current && "changedTouches" in b && (I || M) && (s.current = D), !D)
      return !0;
    var Q = s.current || D;
    return fA(Q, S, b, Q === "h" ? I : M, !0);
  }, []), d = u.useCallback(function(b) {
    var S = b;
    if (!(!B1.length || B1[B1.length - 1] !== o)) {
      var E = "deltaY" in S ? Gd(S) : ba(S), P = t.current.filter(function(D) {
        return D.name === S.type && (D.target === S.target || S.target === D.shadowParent) && pA(D.delta, E);
      })[0];
      if (P && P.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!P) {
        var I = (a.current.shards || []).map(Wd).filter(Boolean).filter(function(D) {
          return D.contains(S.target);
        }), M = I.length > 0 ? l(S, I[0]) : !a.current.noIsolation;
        M && S.cancelable && S.preventDefault();
      }
    }
  }, []), h = u.useCallback(function(b, S, E, P) {
    var I = { name: b, delta: S, target: E, should: P, shadowParent: yA(E) };
    t.current.push(I), setTimeout(function() {
      t.current = t.current.filter(function(M) {
        return M !== I;
      });
    }, 1);
  }, []), p = u.useCallback(function(b) {
    e.current = ba(b), s.current = void 0;
  }, []), f = u.useCallback(function(b) {
    h(b.type, Gd(b), b.target, l(b, n.lockRef.current));
  }, []), m = u.useCallback(function(b) {
    h(b.type, ba(b), b.target, l(b, n.lockRef.current));
  }, []);
  u.useEffect(function() {
    return B1.push(o), n.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", d, Z1), document.addEventListener("touchmove", d, Z1), document.addEventListener("touchstart", p, Z1), function() {
      B1 = B1.filter(function(b) {
        return b !== o;
      }), document.removeEventListener("wheel", d, Z1), document.removeEventListener("touchmove", d, Z1), document.removeEventListener("touchstart", p, Z1);
    };
  }, []);
  var y = n.removeScrollBar, v = n.inert;
  return u.createElement(
    u.Fragment,
    null,
    v ? u.createElement(o, { styles: CA(i) }) : null,
    y ? u.createElement(oA, { gapMode: n.gapMode }) : null
  );
}
function yA(n) {
  for (var t = null; n !== null; )
    n instanceof ShadowRoot && (t = n.host, n = n.host), n = n.parentNode;
  return t;
}
const vA = UV(Bg, gA);
var zg = u.forwardRef(function(n, t) {
  return u.createElement(ic, ws({}, n, { ref: t, sideCar: vA }));
});
zg.classNames = ic.classNames;
var P9 = ["Enter", " "], bA = ["ArrowDown", "PageUp", "Home"], Yg = ["ArrowUp", "PageDown", "End"], wA = [...bA, ...Yg], xA = {
  ltr: [...P9, "ArrowRight"],
  rtl: [...P9, "ArrowLeft"]
}, SA = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, aa = "Menu", [zo, EA, $A] = E7(aa), [D1, Qg] = Y2(aa, [
  $A,
  Q2,
  Hg
]), rc = Q2(), Xg = Hg(), [TA, _1] = D1(aa), [PA, ca] = D1(aa), Jg = (n) => {
  const { __scopeMenu: t, open: e = !1, children: s, dir: i, onOpenChange: o, modal: a = !0 } = n, l = rc(t), [d, h] = u.useState(null), p = u.useRef(!1), f = rs(o), m = $7(i);
  return u.useEffect(() => {
    const y = () => {
      p.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => p.current = !1;
    return document.addEventListener("keydown", y, { capture: !0 }), () => {
      document.removeEventListener("keydown", y, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), /* @__PURE__ */ w.jsx(yg, { ...l, children: /* @__PURE__ */ w.jsx(
    TA,
    {
      scope: t,
      open: e,
      onOpenChange: f,
      content: d,
      onContentChange: h,
      children: /* @__PURE__ */ w.jsx(
        PA,
        {
          scope: t,
          onClose: u.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: p,
          dir: m,
          modal: a,
          children: s
        }
      )
    }
  ) });
};
Jg.displayName = aa;
var LA = "MenuAnchor", T7 = u.forwardRef(
  (n, t) => {
    const { __scopeMenu: e, ...s } = n, i = rc(e);
    return /* @__PURE__ */ w.jsx(vg, { ...i, ...s, ref: t });
  }
);
T7.displayName = LA;
var P7 = "MenuPortal", [kA, ey] = D1(P7, {
  forceMount: void 0
}), ty = (n) => {
  const { __scopeMenu: t, forceMount: e, children: s, container: i } = n, o = _1(P7, t);
  return /* @__PURE__ */ w.jsx(kA, { scope: t, forceMount: e, children: /* @__PURE__ */ w.jsx(xo, { present: e || o.open, children: /* @__PURE__ */ w.jsx(xg, { asChild: !0, container: i, children: s }) }) });
};
ty.displayName = P7;
var Vn = "MenuContent", [MA, L7] = D1(Vn), ny = u.forwardRef(
  (n, t) => {
    const e = ey(Vn, n.__scopeMenu), { forceMount: s = e.forceMount, ...i } = n, o = _1(Vn, n.__scopeMenu), a = ca(Vn, n.__scopeMenu);
    return /* @__PURE__ */ w.jsx(zo.Provider, { scope: n.__scopeMenu, children: /* @__PURE__ */ w.jsx(xo, { present: s || o.open, children: /* @__PURE__ */ w.jsx(zo.Slot, { scope: n.__scopeMenu, children: a.modal ? /* @__PURE__ */ w.jsx(IA, { ...i, ref: t }) : /* @__PURE__ */ w.jsx(VA, { ...i, ref: t }) }) }) });
  }
), IA = u.forwardRef(
  (n, t) => {
    const e = _1(Vn, n.__scopeMenu), s = u.useRef(null), i = ut(t, s);
    return u.useEffect(() => {
      const o = s.current;
      if (o) return OV(o);
    }, []), /* @__PURE__ */ w.jsx(
      k7,
      {
        ...n,
        ref: i,
        trapFocus: e.open,
        disableOutsidePointerEvents: e.open,
        disableOutsideScroll: !0,
        onFocusOutside: ue(
          n.onFocusOutside,
          (o) => o.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => e.onOpenChange(!1)
      }
    );
  }
), VA = u.forwardRef((n, t) => {
  const e = _1(Vn, n.__scopeMenu);
  return /* @__PURE__ */ w.jsx(
    k7,
    {
      ...n,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => e.onOpenChange(!1)
    }
  );
}), k7 = u.forwardRef(
  (n, t) => {
    const {
      __scopeMenu: e,
      loop: s = !1,
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
    } = n, S = _1(Vn, e), E = ca(Vn, e), P = rc(e), I = Xg(e), M = EA(e), [D, B] = u.useState(null), F = u.useRef(null), k = ut(t, F, S.onContentChange), Q = u.useRef(0), X = u.useRef(""), ae = u.useRef(0), me = u.useRef(null), Y = u.useRef("right"), J = u.useRef(0), Ee = v ? zg : u.Fragment, G = v ? { as: Ko, allowPinchZoom: !0 } : void 0, U = (q) => {
      var xt, Dt;
      const xe = X.current + q, Ke = M().filter((ze) => !ze.disabled), Pt = document.activeElement, rn = (xt = Ke.find((ze) => ze.ref.current === Pt)) == null ? void 0 : xt.textValue, En = Ke.map((ze) => ze.textValue), Dn = BA(En, xe, rn), Ht = (Dt = Ke.find((ze) => ze.textValue === Dn)) == null ? void 0 : Dt.ref.current;
      (function ze(gt) {
        X.current = gt, window.clearTimeout(Q.current), gt !== "" && (Q.current = window.setTimeout(() => ze(""), 1e3));
      })(xe), Ht && setTimeout(() => Ht.focus());
    };
    u.useEffect(() => () => window.clearTimeout(Q.current), []), hV();
    const K = u.useCallback((q) => {
      var Ke, Pt;
      return Y.current === ((Ke = me.current) == null ? void 0 : Ke.side) && WA(q, (Pt = me.current) == null ? void 0 : Pt.area);
    }, []);
    return /* @__PURE__ */ w.jsx(
      MA,
      {
        scope: e,
        searchRef: X,
        onItemEnter: u.useCallback(
          (q) => {
            K(q) && q.preventDefault();
          },
          [K]
        ),
        onItemLeave: u.useCallback(
          (q) => {
            var xe;
            K(q) || ((xe = F.current) == null || xe.focus(), B(null));
          },
          [K]
        ),
        onTriggerLeave: u.useCallback(
          (q) => {
            K(q) && q.preventDefault();
          },
          [K]
        ),
        pointerGraceTimerRef: ae,
        onPointerGraceIntentChange: u.useCallback((q) => {
          me.current = q;
        }, []),
        children: /* @__PURE__ */ w.jsx(Ee, { ...G, children: /* @__PURE__ */ w.jsx(
          Ag,
          {
            asChild: !0,
            trapped: i,
            onMountAutoFocus: ue(o, (q) => {
              var xe;
              q.preventDefault(), (xe = F.current) == null || xe.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ w.jsx(
              b7,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: h,
                onPointerDownOutside: p,
                onFocusOutside: f,
                onInteractOutside: m,
                onDismiss: y,
                children: /* @__PURE__ */ w.jsx(
                  VV,
                  {
                    asChild: !0,
                    ...I,
                    dir: E.dir,
                    orientation: "vertical",
                    loop: s,
                    currentTabStopId: D,
                    onCurrentTabStopIdChange: B,
                    onEntryFocus: ue(d, (q) => {
                      E.isUsingKeyboardRef.current || q.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ w.jsx(
                      bg,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": yy(S.open),
                        "data-radix-menu-content": "",
                        dir: E.dir,
                        ...P,
                        ...b,
                        ref: k,
                        style: { outline: "none", ...b.style },
                        onKeyDown: ue(b.onKeyDown, (q) => {
                          const Ke = q.target.closest("[data-radix-menu-content]") === q.currentTarget, Pt = q.ctrlKey || q.altKey || q.metaKey, rn = q.key.length === 1;
                          Ke && (q.key === "Tab" && q.preventDefault(), !Pt && rn && U(q.key));
                          const En = F.current;
                          if (q.target !== En || !wA.includes(q.key)) return;
                          q.preventDefault();
                          const Ht = M().filter((xt) => !xt.disabled).map((xt) => xt.ref.current);
                          Yg.includes(q.key) && Ht.reverse(), qA(Ht);
                        }),
                        onBlur: ue(n.onBlur, (q) => {
                          q.currentTarget.contains(q.target) || (window.clearTimeout(Q.current), X.current = "");
                        }),
                        onPointerMove: ue(
                          n.onPointerMove,
                          Yo((q) => {
                            const xe = q.target, Ke = J.current !== q.clientX;
                            if (q.currentTarget.contains(xe) && Ke) {
                              const Pt = q.clientX > J.current ? "right" : "left";
                              Y.current = Pt, J.current = q.clientX;
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
ny.displayName = Vn;
var AA = "MenuGroup", M7 = u.forwardRef(
  (n, t) => {
    const { __scopeMenu: e, ...s } = n;
    return /* @__PURE__ */ w.jsx(ht.div, { role: "group", ...s, ref: t });
  }
);
M7.displayName = AA;
var RA = "MenuLabel", sy = u.forwardRef(
  (n, t) => {
    const { __scopeMenu: e, ...s } = n;
    return /* @__PURE__ */ w.jsx(ht.div, { ...s, ref: t });
  }
);
sy.displayName = RA;
var C2 = "MenuItem", Ud = "menu.itemSelect", oc = u.forwardRef(
  (n, t) => {
    const { disabled: e = !1, onSelect: s, ...i } = n, o = u.useRef(null), a = ca(C2, n.__scopeMenu), l = L7(C2, n.__scopeMenu), d = ut(t, o), h = u.useRef(!1), p = () => {
      const f = o.current;
      if (!e && f) {
        const m = new CustomEvent(Ud, { bubbles: !0, cancelable: !0 });
        f.addEventListener(Ud, (y) => s == null ? void 0 : s(y), { once: !0 }), sg(f, m), m.defaultPrevented ? h.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ w.jsx(
      iy,
      {
        ...i,
        ref: d,
        disabled: e,
        onClick: ue(n.onClick, p),
        onPointerDown: (f) => {
          var m;
          (m = n.onPointerDown) == null || m.call(n, f), h.current = !0;
        },
        onPointerUp: ue(n.onPointerUp, (f) => {
          var m;
          h.current || (m = f.currentTarget) == null || m.click();
        }),
        onKeyDown: ue(n.onKeyDown, (f) => {
          const m = l.searchRef.current !== "";
          e || m && f.key === " " || P9.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
oc.displayName = C2;
var iy = u.forwardRef(
  (n, t) => {
    const { __scopeMenu: e, disabled: s = !1, textValue: i, ...o } = n, a = L7(C2, e), l = Xg(e), d = u.useRef(null), h = ut(t, d), [p, f] = u.useState(!1), [m, y] = u.useState("");
    return u.useEffect(() => {
      const v = d.current;
      v && y((v.textContent ?? "").trim());
    }, [o.children]), /* @__PURE__ */ w.jsx(
      zo.ItemSlot,
      {
        scope: e,
        disabled: s,
        textValue: i ?? m,
        children: /* @__PURE__ */ w.jsx(AV, { asChild: !0, ...l, focusable: !s, children: /* @__PURE__ */ w.jsx(
          ht.div,
          {
            role: "menuitem",
            "data-highlighted": p ? "" : void 0,
            "aria-disabled": s || void 0,
            "data-disabled": s ? "" : void 0,
            ...o,
            ref: h,
            onPointerMove: ue(
              n.onPointerMove,
              Yo((v) => {
                s ? a.onItemLeave(v) : (a.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: ue(
              n.onPointerLeave,
              Yo((v) => a.onItemLeave(v))
            ),
            onFocus: ue(n.onFocus, () => f(!0)),
            onBlur: ue(n.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), NA = "MenuCheckboxItem", ry = u.forwardRef(
  (n, t) => {
    const { checked: e = !1, onCheckedChange: s, ...i } = n;
    return /* @__PURE__ */ w.jsx(uy, { scope: n.__scopeMenu, checked: e, children: /* @__PURE__ */ w.jsx(
      oc,
      {
        role: "menuitemcheckbox",
        "aria-checked": m2(e) ? "mixed" : e,
        ...i,
        ref: t,
        "data-state": V7(e),
        onSelect: ue(
          i.onSelect,
          () => s == null ? void 0 : s(m2(e) ? !0 : !e),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
ry.displayName = NA;
var oy = "MenuRadioGroup", [HA, OA] = D1(
  oy,
  { value: void 0, onValueChange: () => {
  } }
), ay = u.forwardRef(
  (n, t) => {
    const { value: e, onValueChange: s, ...i } = n, o = rs(s);
    return /* @__PURE__ */ w.jsx(HA, { scope: n.__scopeMenu, value: e, onValueChange: o, children: /* @__PURE__ */ w.jsx(M7, { ...i, ref: t }) });
  }
);
ay.displayName = oy;
var cy = "MenuRadioItem", ly = u.forwardRef(
  (n, t) => {
    const { value: e, ...s } = n, i = OA(cy, n.__scopeMenu), o = e === i.value;
    return /* @__PURE__ */ w.jsx(uy, { scope: n.__scopeMenu, checked: o, children: /* @__PURE__ */ w.jsx(
      oc,
      {
        role: "menuitemradio",
        "aria-checked": o,
        ...s,
        ref: t,
        "data-state": V7(o),
        onSelect: ue(
          s.onSelect,
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
ly.displayName = cy;
var I7 = "MenuItemIndicator", [uy, DA] = D1(
  I7,
  { checked: !1 }
), dy = u.forwardRef(
  (n, t) => {
    const { __scopeMenu: e, forceMount: s, ...i } = n, o = DA(I7, e);
    return /* @__PURE__ */ w.jsx(
      xo,
      {
        present: s || m2(o.checked) || o.checked === !0,
        children: /* @__PURE__ */ w.jsx(
          ht.span,
          {
            ...i,
            ref: t,
            "data-state": V7(o.checked)
          }
        )
      }
    );
  }
);
dy.displayName = I7;
var _A = "MenuSeparator", hy = u.forwardRef(
  (n, t) => {
    const { __scopeMenu: e, ...s } = n;
    return /* @__PURE__ */ w.jsx(
      ht.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...s,
        ref: t
      }
    );
  }
);
hy.displayName = _A;
var FA = "MenuArrow", fy = u.forwardRef(
  (n, t) => {
    const { __scopeMenu: e, ...s } = n, i = rc(e);
    return /* @__PURE__ */ w.jsx(wg, { ...i, ...s, ref: t });
  }
);
fy.displayName = FA;
var jA = "MenuSub", [DN, py] = D1(jA), Fo = "MenuSubTrigger", Cy = u.forwardRef(
  (n, t) => {
    const e = _1(Fo, n.__scopeMenu), s = ca(Fo, n.__scopeMenu), i = py(Fo, n.__scopeMenu), o = L7(Fo, n.__scopeMenu), a = u.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: d } = o, h = { __scopeMenu: n.__scopeMenu }, p = u.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return u.useEffect(() => p, [p]), u.useEffect(() => {
      const f = l.current;
      return () => {
        window.clearTimeout(f), d(null);
      };
    }, [l, d]), /* @__PURE__ */ w.jsx(T7, { asChild: !0, ...h, children: /* @__PURE__ */ w.jsx(
      iy,
      {
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": e.open,
        "aria-controls": i.contentId,
        "data-state": yy(e.open),
        ...n,
        ref: z2(t, i.onTriggerChange),
        onClick: (f) => {
          var m;
          (m = n.onClick) == null || m.call(n, f), !(n.disabled || f.defaultPrevented) && (f.currentTarget.focus(), e.open || e.onOpenChange(!0));
        },
        onPointerMove: ue(
          n.onPointerMove,
          Yo((f) => {
            o.onItemEnter(f), !f.defaultPrevented && !n.disabled && !e.open && !a.current && (o.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              e.onOpenChange(!0), p();
            }, 100));
          })
        ),
        onPointerLeave: ue(
          n.onPointerLeave,
          Yo((f) => {
            var y, v;
            p();
            const m = (y = e.content) == null ? void 0 : y.getBoundingClientRect();
            if (m) {
              const b = (v = e.content) == null ? void 0 : v.dataset.side, S = b === "right", E = S ? -5 : 5, P = m[S ? "left" : "right"], I = m[S ? "right" : "left"];
              o.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + E, y: f.clientY },
                  { x: P, y: m.top },
                  { x: I, y: m.top },
                  { x: I, y: m.bottom },
                  { x: P, y: m.bottom }
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
        onKeyDown: ue(n.onKeyDown, (f) => {
          var y;
          const m = o.searchRef.current !== "";
          n.disabled || m && f.key === " " || xA[s.dir].includes(f.key) && (e.onOpenChange(!0), (y = e.content) == null || y.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
Cy.displayName = Fo;
var my = "MenuSubContent", gy = u.forwardRef(
  (n, t) => {
    const e = ey(Vn, n.__scopeMenu), { forceMount: s = e.forceMount, ...i } = n, o = _1(Vn, n.__scopeMenu), a = ca(Vn, n.__scopeMenu), l = py(my, n.__scopeMenu), d = u.useRef(null), h = ut(t, d);
    return /* @__PURE__ */ w.jsx(zo.Provider, { scope: n.__scopeMenu, children: /* @__PURE__ */ w.jsx(xo, { present: s || o.open, children: /* @__PURE__ */ w.jsx(zo.Slot, { scope: n.__scopeMenu, children: /* @__PURE__ */ w.jsx(
      k7,
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
        onFocusOutside: ue(n.onFocusOutside, (p) => {
          p.target !== l.trigger && o.onOpenChange(!1);
        }),
        onEscapeKeyDown: ue(n.onEscapeKeyDown, (p) => {
          a.onClose(), p.preventDefault();
        }),
        onKeyDown: ue(n.onKeyDown, (p) => {
          var y;
          const f = p.currentTarget.contains(p.target), m = SA[a.dir].includes(p.key);
          f && m && (o.onOpenChange(!1), (y = l.trigger) == null || y.focus(), p.preventDefault());
        })
      }
    ) }) }) });
  }
);
gy.displayName = my;
function yy(n) {
  return n ? "open" : "closed";
}
function m2(n) {
  return n === "indeterminate";
}
function V7(n) {
  return m2(n) ? "indeterminate" : n ? "checked" : "unchecked";
}
function qA(n) {
  const t = document.activeElement;
  for (const e of n)
    if (e === t || (e.focus(), document.activeElement !== t)) return;
}
function ZA(n, t) {
  return n.map((e, s) => n[(t + s) % n.length]);
}
function BA(n, t, e) {
  const i = t.length > 1 && Array.from(t).every((h) => h === t[0]) ? t[0] : t, o = e ? n.indexOf(e) : -1;
  let a = ZA(n, Math.max(o, 0));
  i.length === 1 && (a = a.filter((h) => h !== e));
  const d = a.find(
    (h) => h.toLowerCase().startsWith(i.toLowerCase())
  );
  return d !== e ? d : void 0;
}
function GA(n, t) {
  const { x: e, y: s } = n;
  let i = !1;
  for (let o = 0, a = t.length - 1; o < t.length; a = o++) {
    const l = t[o].x, d = t[o].y, h = t[a].x, p = t[a].y;
    d > s != p > s && e < (h - l) * (s - d) / (p - d) + l && (i = !i);
  }
  return i;
}
function WA(n, t) {
  if (!t) return !1;
  const e = { x: n.clientX, y: n.clientY };
  return GA(e, t);
}
function Yo(n) {
  return (t) => t.pointerType === "mouse" ? n(t) : void 0;
}
var UA = Jg, KA = T7, zA = ty, YA = ny, QA = M7, XA = sy, JA = oc, eR = ry, tR = ay, nR = ly, sR = dy, iR = hy, rR = fy, oR = Cy, aR = gy, A7 = "DropdownMenu", [cR, _N] = Y2(
  A7,
  [Qg]
), Kt = Qg(), [lR, vy] = cR(A7), by = (n) => {
  const {
    __scopeDropdownMenu: t,
    children: e,
    dir: s,
    open: i,
    defaultOpen: o,
    onOpenChange: a,
    modal: l = !0
  } = n, d = Kt(t), h = u.useRef(null), [p = !1, f] = X2({
    prop: i,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w.jsx(
    lR,
    {
      scope: t,
      triggerId: f2(),
      triggerRef: h,
      contentId: f2(),
      open: p,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((m) => !m), [f]),
      modal: l,
      children: /* @__PURE__ */ w.jsx(UA, { ...d, open: p, onOpenChange: f, dir: s, modal: l, children: e })
    }
  );
};
by.displayName = A7;
var wy = "DropdownMenuTrigger", xy = u.forwardRef(
  (n, t) => {
    const { __scopeDropdownMenu: e, disabled: s = !1, ...i } = n, o = vy(wy, e), a = Kt(e);
    return /* @__PURE__ */ w.jsx(KA, { asChild: !0, ...a, children: /* @__PURE__ */ w.jsx(
      ht.button,
      {
        type: "button",
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": o.open,
        "aria-controls": o.open ? o.contentId : void 0,
        "data-state": o.open ? "open" : "closed",
        "data-disabled": s ? "" : void 0,
        disabled: s,
        ...i,
        ref: z2(t, o.triggerRef),
        onPointerDown: ue(n.onPointerDown, (l) => {
          !s && l.button === 0 && l.ctrlKey === !1 && (o.onOpenToggle(), o.open || l.preventDefault());
        }),
        onKeyDown: ue(n.onKeyDown, (l) => {
          s || (["Enter", " "].includes(l.key) && o.onOpenToggle(), l.key === "ArrowDown" && o.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }
);
xy.displayName = wy;
var uR = "DropdownMenuPortal", Sy = (n) => {
  const { __scopeDropdownMenu: t, ...e } = n, s = Kt(t);
  return /* @__PURE__ */ w.jsx(zA, { ...s, ...e });
};
Sy.displayName = uR;
var Ey = "DropdownMenuContent", $y = u.forwardRef(
  (n, t) => {
    const { __scopeDropdownMenu: e, ...s } = n, i = vy(Ey, e), o = Kt(e), a = u.useRef(!1);
    return /* @__PURE__ */ w.jsx(
      YA,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...o,
        ...s,
        ref: t,
        onCloseAutoFocus: ue(n.onCloseAutoFocus, (l) => {
          var d;
          a.current || (d = i.triggerRef.current) == null || d.focus(), a.current = !1, l.preventDefault();
        }),
        onInteractOutside: ue(n.onInteractOutside, (l) => {
          const d = l.detail.originalEvent, h = d.button === 0 && d.ctrlKey === !0, p = d.button === 2 || h;
          (!i.modal || p) && (a.current = !0);
        }),
        style: {
          ...n.style,
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
$y.displayName = Ey;
var dR = "DropdownMenuGroup", hR = u.forwardRef(
  (n, t) => {
    const { __scopeDropdownMenu: e, ...s } = n, i = Kt(e);
    return /* @__PURE__ */ w.jsx(QA, { ...i, ...s, ref: t });
  }
);
hR.displayName = dR;
var fR = "DropdownMenuLabel", pR = u.forwardRef(
  (n, t) => {
    const { __scopeDropdownMenu: e, ...s } = n, i = Kt(e);
    return /* @__PURE__ */ w.jsx(XA, { ...i, ...s, ref: t });
  }
);
pR.displayName = fR;
var CR = "DropdownMenuItem", Ty = u.forwardRef(
  (n, t) => {
    const { __scopeDropdownMenu: e, ...s } = n, i = Kt(e);
    return /* @__PURE__ */ w.jsx(JA, { ...i, ...s, ref: t });
  }
);
Ty.displayName = CR;
var mR = "DropdownMenuCheckboxItem", gR = u.forwardRef((n, t) => {
  const { __scopeDropdownMenu: e, ...s } = n, i = Kt(e);
  return /* @__PURE__ */ w.jsx(eR, { ...i, ...s, ref: t });
});
gR.displayName = mR;
var yR = "DropdownMenuRadioGroup", Py = u.forwardRef((n, t) => {
  const { __scopeDropdownMenu: e, ...s } = n, i = Kt(e);
  return /* @__PURE__ */ w.jsx(tR, { ...i, ...s, ref: t });
});
Py.displayName = yR;
var vR = "DropdownMenuRadioItem", bR = u.forwardRef((n, t) => {
  const { __scopeDropdownMenu: e, ...s } = n, i = Kt(e);
  return /* @__PURE__ */ w.jsx(nR, { ...i, ...s, ref: t });
});
bR.displayName = vR;
var wR = "DropdownMenuItemIndicator", xR = u.forwardRef((n, t) => {
  const { __scopeDropdownMenu: e, ...s } = n, i = Kt(e);
  return /* @__PURE__ */ w.jsx(sR, { ...i, ...s, ref: t });
});
xR.displayName = wR;
var SR = "DropdownMenuSeparator", ER = u.forwardRef((n, t) => {
  const { __scopeDropdownMenu: e, ...s } = n, i = Kt(e);
  return /* @__PURE__ */ w.jsx(iR, { ...i, ...s, ref: t });
});
ER.displayName = SR;
var $R = "DropdownMenuArrow", TR = u.forwardRef(
  (n, t) => {
    const { __scopeDropdownMenu: e, ...s } = n, i = Kt(e);
    return /* @__PURE__ */ w.jsx(rR, { ...i, ...s, ref: t });
  }
);
TR.displayName = $R;
var PR = "DropdownMenuSubTrigger", LR = u.forwardRef((n, t) => {
  const { __scopeDropdownMenu: e, ...s } = n, i = Kt(e);
  return /* @__PURE__ */ w.jsx(oR, { ...i, ...s, ref: t });
});
LR.displayName = PR;
var kR = "DropdownMenuSubContent", MR = u.forwardRef((n, t) => {
  const { __scopeDropdownMenu: e, ...s } = n, i = Kt(e);
  return /* @__PURE__ */ w.jsx(
    aR,
    {
      ...i,
      ...s,
      ref: t,
      style: {
        ...n.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
MR.displayName = kR;
var IR = by, VR = xy, AR = Sy, RR = $y, NR = Ty, HR = Py;
function OR({ children: n, startTime: t, endTime: e, className: s, ...i }) {
  return /* @__PURE__ */ w.jsx(
    NR,
    {
      className: "group relative flex w-full cursor-pointer select-none items-center justify-start rounded-md p-3 outline-none transition-colors hover:bg-white/10 data-[focus]:ring-2 data-[focus]:ring-white/20 data-[state=checked]:bg-white/5",
      ...i,
      children: /* @__PURE__ */ w.jsxs("div", { className: "flex items-center space-x-3 flex-1", children: [
        /* @__PURE__ */ w.jsxs("div", { className: "flex-shrink-0", children: [
          /* @__PURE__ */ w.jsx(eL, { className: "h-4 w-4 text-white/70 group-data-[state=checked]:hidden" }),
          /* @__PURE__ */ w.jsx(JP, { className: "text-primary hidden h-4 w-4 group-data-[state=checked]:block" })
        ] }),
        /* @__PURE__ */ w.jsxs("div", { className: "flex flex-col flex-1", children: [
          /* @__PURE__ */ w.jsx("span", { className: "text-sm font-medium text-white group-hover:text-white/90", children: n }),
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
const DR = "z-[9999] min-w-[300px] max-w-[350px] rounded-lg border border-white/10 bg-black/95 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-top-2", Kd = [
  { title: "Introduction", startTime: "00:00", endTime: "02:30" },
  { title: "Chapter 1: Basics", startTime: "02:31", endTime: "10:00" },
  { title: "Chapter 2: Advanced", startTime: "10:01", endTime: "20:00" }
];
function _R({
  side: n = "top",
  align: t = "end",
  offset: e = 0,
  tooltipSide: s = "top",
  tooltipAlign: i = "center",
  tooltipOffset: o = 0
}) {
  var d;
  const a = oT(), l = ((d = Kd[0]) == null ? void 0 : d.title) ?? "None";
  return /* @__PURE__ */ w.jsxs(IR, { children: [
    /* @__PURE__ */ w.jsxs(So, { children: [
      /* @__PURE__ */ w.jsx(Eo, { asChild: !0, children: /* @__PURE__ */ w.jsx(
        VR,
        {
          "aria-label": "Chapters",
          className: To,
          children: /* @__PURE__ */ w.jsx(Hd, { className: "w-6 h-6" })
        }
      ) }),
      /* @__PURE__ */ w.jsx(
        $o,
        {
          className: Po,
          side: s,
          align: i,
          sideOffset: o,
          children: "Chapters"
        }
      )
    ] }),
    /* @__PURE__ */ w.jsx(AR, { children: /* @__PURE__ */ w.jsxs(
      RR,
      {
        className: DR,
        side: n,
        align: t,
        sideOffset: e,
        collisionBoundary: a == null ? void 0 : a.el,
        children: [
          /* @__PURE__ */ w.jsx("div", { className: "p-4 border-b border-white/10", children: /* @__PURE__ */ w.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ w.jsx(Hd, { className: "w-5 h-5 mr-2 text-white/70" }),
            /* @__PURE__ */ w.jsx("span", { className: "font-medium", children: "Chapters" }),
            /* @__PURE__ */ w.jsx("span", { className: "ml-auto text-sm text-white/50", children: l })
          ] }) }),
          /* @__PURE__ */ w.jsx("div", { className: "p-2 max-h-[400px] overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ w.jsx(
            HR,
            {
              className: "flex flex-col space-y-1",
              value: l,
              children: Kd.map((h) => (
                // @ts-ignore
                /* @__PURE__ */ w.jsx(
                  OR,
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
function Ly(n, [t, e]) {
  return Math.min(e, Math.max(t, n));
}
function FR(n) {
  const t = u.useRef({ value: n, previous: n });
  return u.useMemo(() => (t.current.value !== n && (t.current.previous = t.current.value, t.current.value = n), t.current.previous), [n]);
}
var ky = ["PageUp", "PageDown"], My = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Iy = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, Lo = "Slider", [L9, jR, qR] = E7(Lo), [Vy, FN] = Y2(Lo, [
  qR
]), [ZR, ac] = Vy(Lo), Ay = u.forwardRef(
  (n, t) => {
    const {
      name: e,
      min: s = 0,
      max: i = 100,
      step: o = 1,
      orientation: a = "horizontal",
      disabled: l = !1,
      minStepsBetweenThumbs: d = 0,
      defaultValue: h = [s],
      value: p,
      onValueChange: f = () => {
      },
      onValueCommit: m = () => {
      },
      inverted: y = !1,
      form: v,
      ...b
    } = n, S = u.useRef(/* @__PURE__ */ new Set()), E = u.useRef(0), I = a === "horizontal" ? BR : GR, [M = [], D] = X2({
      prop: p,
      defaultProp: h,
      onChange: (ae) => {
        var Y;
        (Y = [...S.current][E.current]) == null || Y.focus(), f(ae);
      }
    }), B = u.useRef(M);
    function F(ae) {
      const me = YR(M, ae);
      X(ae, me);
    }
    function k(ae) {
      X(ae, E.current);
    }
    function Q() {
      const ae = B.current[E.current];
      M[E.current] !== ae && m(M);
    }
    function X(ae, me, { commit: Y } = { commit: !1 }) {
      const J = eN(o), Ee = tN(Math.round((ae - s) / o) * o + s, J), G = Ly(Ee, [s, i]);
      D((U = []) => {
        const K = KR(U, G, me);
        if (JR(K, d * o)) {
          E.current = K.indexOf(G);
          const q = String(K) !== String(U);
          return q && Y && m(K), q ? K : U;
        } else
          return U;
      });
    }
    return /* @__PURE__ */ w.jsx(
      ZR,
      {
        scope: n.__scopeSlider,
        name: e,
        disabled: l,
        min: s,
        max: i,
        valueIndexToChangeRef: E,
        thumbs: S.current,
        values: M,
        orientation: a,
        form: v,
        children: /* @__PURE__ */ w.jsx(L9.Provider, { scope: n.__scopeSlider, children: /* @__PURE__ */ w.jsx(L9.Slot, { scope: n.__scopeSlider, children: /* @__PURE__ */ w.jsx(
          I,
          {
            "aria-disabled": l,
            "data-disabled": l ? "" : void 0,
            ...b,
            ref: t,
            onPointerDown: ue(b.onPointerDown, () => {
              l || (B.current = M);
            }),
            min: s,
            max: i,
            inverted: y,
            onSlideStart: l ? void 0 : F,
            onSlideMove: l ? void 0 : k,
            onSlideEnd: l ? void 0 : Q,
            onHomeKeyDown: () => !l && X(s, 0, { commit: !0 }),
            onEndKeyDown: () => !l && X(i, M.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: ae, direction: me }) => {
              if (!l) {
                const Ee = ky.includes(ae.key) || ae.shiftKey && My.includes(ae.key) ? 10 : 1, G = E.current, U = M[G], K = o * Ee * me;
                X(U + K, G, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
Ay.displayName = Lo;
var [Ry, Ny] = Vy(Lo, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), BR = u.forwardRef(
  (n, t) => {
    const {
      min: e,
      max: s,
      dir: i,
      inverted: o,
      onSlideStart: a,
      onSlideMove: l,
      onSlideEnd: d,
      onStepKeyDown: h,
      ...p
    } = n, [f, m] = u.useState(null), y = ut(t, (I) => m(I)), v = u.useRef(), b = $7(i), S = b === "ltr", E = S && !o || !S && o;
    function P(I) {
      const M = v.current || f.getBoundingClientRect(), D = [0, M.width], F = R7(D, E ? [e, s] : [s, e]);
      return v.current = M, F(I - M.left);
    }
    return /* @__PURE__ */ w.jsx(
      Ry,
      {
        scope: n.__scopeSlider,
        startEdge: E ? "left" : "right",
        endEdge: E ? "right" : "left",
        direction: E ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ w.jsx(
          Hy,
          {
            dir: b,
            "data-orientation": "horizontal",
            ...p,
            ref: y,
            style: {
              ...p.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (I) => {
              const M = P(I.clientX);
              a == null || a(M);
            },
            onSlideMove: (I) => {
              const M = P(I.clientX);
              l == null || l(M);
            },
            onSlideEnd: () => {
              v.current = void 0, d == null || d();
            },
            onStepKeyDown: (I) => {
              const D = Iy[E ? "from-left" : "from-right"].includes(I.key);
              h == null || h({ event: I, direction: D ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), GR = u.forwardRef(
  (n, t) => {
    const {
      min: e,
      max: s,
      inverted: i,
      onSlideStart: o,
      onSlideMove: a,
      onSlideEnd: l,
      onStepKeyDown: d,
      ...h
    } = n, p = u.useRef(null), f = ut(t, p), m = u.useRef(), y = !i;
    function v(b) {
      const S = m.current || p.current.getBoundingClientRect(), E = [0, S.height], I = R7(E, y ? [s, e] : [e, s]);
      return m.current = S, I(b - S.top);
    }
    return /* @__PURE__ */ w.jsx(
      Ry,
      {
        scope: n.__scopeSlider,
        startEdge: y ? "bottom" : "top",
        endEdge: y ? "top" : "bottom",
        size: "height",
        direction: y ? 1 : -1,
        children: /* @__PURE__ */ w.jsx(
          Hy,
          {
            "data-orientation": "vertical",
            ...h,
            ref: f,
            style: {
              ...h.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (b) => {
              const S = v(b.clientY);
              o == null || o(S);
            },
            onSlideMove: (b) => {
              const S = v(b.clientY);
              a == null || a(S);
            },
            onSlideEnd: () => {
              m.current = void 0, l == null || l();
            },
            onStepKeyDown: (b) => {
              const E = Iy[y ? "from-bottom" : "from-top"].includes(b.key);
              d == null || d({ event: b, direction: E ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), Hy = u.forwardRef(
  (n, t) => {
    const {
      __scopeSlider: e,
      onSlideStart: s,
      onSlideMove: i,
      onSlideEnd: o,
      onHomeKeyDown: a,
      onEndKeyDown: l,
      onStepKeyDown: d,
      ...h
    } = n, p = ac(Lo, e);
    return /* @__PURE__ */ w.jsx(
      ht.span,
      {
        ...h,
        ref: t,
        onKeyDown: ue(n.onKeyDown, (f) => {
          f.key === "Home" ? (a(f), f.preventDefault()) : f.key === "End" ? (l(f), f.preventDefault()) : ky.concat(My).includes(f.key) && (d(f), f.preventDefault());
        }),
        onPointerDown: ue(n.onPointerDown, (f) => {
          const m = f.target;
          m.setPointerCapture(f.pointerId), f.preventDefault(), p.thumbs.has(m) ? m.focus() : s(f);
        }),
        onPointerMove: ue(n.onPointerMove, (f) => {
          f.target.hasPointerCapture(f.pointerId) && i(f);
        }),
        onPointerUp: ue(n.onPointerUp, (f) => {
          const m = f.target;
          m.hasPointerCapture(f.pointerId) && (m.releasePointerCapture(f.pointerId), o(f));
        })
      }
    );
  }
), Oy = "SliderTrack", Dy = u.forwardRef(
  (n, t) => {
    const { __scopeSlider: e, ...s } = n, i = ac(Oy, e);
    return /* @__PURE__ */ w.jsx(
      ht.span,
      {
        "data-disabled": i.disabled ? "" : void 0,
        "data-orientation": i.orientation,
        ...s,
        ref: t
      }
    );
  }
);
Dy.displayName = Oy;
var k9 = "SliderRange", _y = u.forwardRef(
  (n, t) => {
    const { __scopeSlider: e, ...s } = n, i = ac(k9, e), o = Ny(k9, e), a = u.useRef(null), l = ut(t, a), d = i.values.length, h = i.values.map(
      (m) => jy(m, i.min, i.max)
    ), p = d > 1 ? Math.min(...h) : 0, f = 100 - Math.max(...h);
    return /* @__PURE__ */ w.jsx(
      ht.span,
      {
        "data-orientation": i.orientation,
        "data-disabled": i.disabled ? "" : void 0,
        ...s,
        ref: l,
        style: {
          ...n.style,
          [o.startEdge]: p + "%",
          [o.endEdge]: f + "%"
        }
      }
    );
  }
);
_y.displayName = k9;
var M9 = "SliderThumb", Fy = u.forwardRef(
  (n, t) => {
    const e = jR(n.__scopeSlider), [s, i] = u.useState(null), o = ut(t, (l) => i(l)), a = u.useMemo(
      () => s ? e().findIndex((l) => l.ref.current === s) : -1,
      [e, s]
    );
    return /* @__PURE__ */ w.jsx(WR, { ...n, ref: o, index: a });
  }
), WR = u.forwardRef(
  (n, t) => {
    const { __scopeSlider: e, index: s, name: i, ...o } = n, a = ac(M9, e), l = Ny(M9, e), [d, h] = u.useState(null), p = ut(t, (P) => h(P)), f = d ? a.form || !!d.closest("form") : !0, m = cg(d), y = a.values[s], v = y === void 0 ? 0 : jy(y, a.min, a.max), b = zR(s, a.values.length), S = m == null ? void 0 : m[l.size], E = S ? QR(S, v, l.direction) : 0;
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
          [l.startEdge]: `calc(${v}% + ${E}px)`
        },
        children: [
          /* @__PURE__ */ w.jsx(L9.ItemSlot, { scope: n.__scopeSlider, children: /* @__PURE__ */ w.jsx(
            ht.span,
            {
              role: "slider",
              "aria-label": n["aria-label"] || b,
              "aria-valuemin": a.min,
              "aria-valuenow": y,
              "aria-valuemax": a.max,
              "aria-orientation": a.orientation,
              "data-orientation": a.orientation,
              "data-disabled": a.disabled ? "" : void 0,
              tabIndex: a.disabled ? void 0 : 0,
              ...o,
              ref: p,
              style: y === void 0 ? { display: "none" } : n.style,
              onFocus: ue(n.onFocus, () => {
                a.valueIndexToChangeRef.current = s;
              })
            }
          ) }),
          f && /* @__PURE__ */ w.jsx(
            UR,
            {
              name: i ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: y
            },
            s
          )
        ]
      }
    );
  }
);
Fy.displayName = M9;
var UR = (n) => {
  const { value: t, ...e } = n, s = u.useRef(null), i = FR(t);
  return u.useEffect(() => {
    const o = s.current, a = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(a, "value").set;
    if (i !== t && d) {
      const h = new Event("input", { bubbles: !0 });
      d.call(o, t), o.dispatchEvent(h);
    }
  }, [i, t]), /* @__PURE__ */ w.jsx("input", { style: { display: "none" }, ...e, ref: s, defaultValue: t });
};
function KR(n = [], t, e) {
  const s = [...n];
  return s[e] = t, s.sort((i, o) => i - o);
}
function jy(n, t, e) {
  const o = 100 / (e - t) * (n - t);
  return Ly(o, [0, 100]);
}
function zR(n, t) {
  return t > 2 ? `Value ${n + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][n] : void 0;
}
function YR(n, t) {
  if (n.length === 1) return 0;
  const e = n.map((i) => Math.abs(i - t)), s = Math.min(...e);
  return e.indexOf(s);
}
function QR(n, t, e) {
  const s = n / 2, o = R7([0, 50], [0, s]);
  return (s - o(t) * e) * e;
}
function XR(n) {
  return n.slice(0, -1).map((t, e) => n[e + 1] - t);
}
function JR(n, t) {
  if (t > 0) {
    const e = XR(n);
    return Math.min(...e) >= t;
  }
  return !0;
}
function R7(n, t) {
  return (e) => {
    if (n[0] === n[1] || t[0] === t[1]) return t[0];
    const s = (t[1] - t[0]) / (n[1] - n[0]);
    return t[0] + s * (e - n[0]);
  };
}
function eN(n) {
  return (String(n).split(".")[1] || "").length;
}
function tN(n, t) {
  const e = Math.pow(10, t);
  return Math.round(n * e) / e;
}
var qy = Ay, Zy = Dy, By = _y, Gy = Fy;
function nN() {
  const n = nn("volume"), t = nn("canSetVolume"), e = nn("muted"), s = Zm();
  if (!t) return null;
  const i = e ? [0] : [n * 100];
  return /* @__PURE__ */ w.jsxs(
    qy,
    {
      className: "group relative inline-flex h-7 w-full max-w-24 cursor-pointer touch-none select-none items-center outline-none",
      value: i,
      onValueChange: ([o]) => {
        s.changeVolume(o / 100);
      },
      children: [
        /* @__PURE__ */ w.jsx(Zy, { className: "h-[3px] w-full rounded-sm bg-white/30 relative", children: /* @__PURE__ */ w.jsx(By, { className: "bg-media-brand absolute h-full rounded-sm will-change-[width]" }) }),
        /* @__PURE__ */ w.jsx(
          Gy,
          {
            "aria-label": "Volume",
            className: "block h-[15px] w-[15px] rounded-full border border-[#cacaca] bg-white outline-none opacity-0 ring-white/40 transition-opacity group-hocus:opacity-100 focus:opacity-100 focus:ring-4 will-change-[left]"
          }
        )
      ]
    }
  );
}
function sN({ thumbnails: n }) {
  const t = nn("currentTime"), e = nn("canSeek"), s = nn("duration"), i = nn("seeking"), o = Zm(), a = 1 / s * 100, [l, d] = a5(0), { previewRootRef: h, previewRef: p, previewValue: f } = qT({
    clamp: !0,
    offset: 6,
    orientation: "horizontal"
  }), m = f / 100 * s;
  return A9(() => {
    i || d(t / s * 100);
  }, [t, s]), /* @__PURE__ */ w.jsxs(
    qy,
    {
      className: "group relative inline-flex h-4 w-full cursor-pointer touch-none select-none items-center outline-none",
      value: [l],
      disabled: !e,
      step: Number.isFinite(a) ? a : 1,
      ref: h,
      onValueChange: ([y]) => {
        d(y), o.seeking(y / 100 * s);
      },
      onValueCommit: ([y]) => {
        o.seek(y / 100 * s);
      },
      children: [
        /* @__PURE__ */ w.jsx(Zy, { className: "h-[4px] w-full rounded-sm bg-white/30 relative", children: /* @__PURE__ */ w.jsx(By, { className: "bg-media-brand absolute h-full rounded-sm will-change-[width]" }) }),
        /* @__PURE__ */ w.jsx(
          Gy,
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
            children: /* @__PURE__ */ w.jsx("span", { className: "text-[13px]", children: G2(m) })
          }
        )
      ]
    }
  );
}
const Oc = 30;
function iN({ thumbnails: n }) {
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx(rN, {}),
    /* @__PURE__ */ w.jsx(
      Hm,
      {
        className: `${WT.captions} media-preview:opacity-0 media-controls:bottom-[85px] media-captions:opacity-100 absolute inset-0 bottom-2 z-10 select-none break-words opacity-0 transition-[opacity,bottom] duration-300`
      }
    ),
    /* @__PURE__ */ w.jsx(Pc.Root, { className: "media-controls:opacity-100 absolute inset-0 z-10 flex h-full w-full flex-col bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity", children: /* @__PURE__ */ w.jsxs(YP, { children: [
      /* @__PURE__ */ w.jsx("div", { className: "flex-1" }),
      /* @__PURE__ */ w.jsxs(Pc.Group, { className: "flex w-full items-center px-2", children: [
        /* @__PURE__ */ w.jsx("div", { className: "mr-2.5 flex items-center text-xs font-medium", children: /* @__PURE__ */ w.jsx(b9, { className: "time", type: "current" }) }),
        /* @__PURE__ */ w.jsx(sN, { thumbnails: n }),
        /* @__PURE__ */ w.jsx("div", { className: "ml-2.5 flex items-center text-xs font-medium", children: /* @__PURE__ */ w.jsx(b9, { className: "time", type: "duration" }) })
      ] }),
      /* @__PURE__ */ w.jsxs(Pc.Group, { className: "mt-0.5 flex w-full items-center px-2 pb-2", children: [
        /* @__PURE__ */ w.jsx(iV, { tooltipAlign: "start", tooltipOffset: Oc }),
        /* @__PURE__ */ w.jsx(rV, { tooltipOffset: Oc }),
        /* @__PURE__ */ w.jsx(nN, {}),
        /* @__PURE__ */ w.jsx("div", { className: "flex-1" }),
        /* @__PURE__ */ w.jsx(cV, {}),
        /* @__PURE__ */ w.jsx(aV, {}),
        /* @__PURE__ */ w.jsx(_R, {}),
        /* @__PURE__ */ w.jsx(oV, { tooltipAlign: "end", tooltipOffset: Oc })
      ] })
    ] }) })
  ] });
}
function rN() {
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx(
      _o,
      {
        className: "absolute inset-0 z-0 block h-full w-full",
        event: "pointerup",
        action: "toggle:paused"
      }
    ),
    /* @__PURE__ */ w.jsx(
      _o,
      {
        className: "absolute inset-0 z-0 block h-full w-full",
        event: "dblpointerup",
        action: "toggle:fullscreen"
      }
    ),
    /* @__PURE__ */ w.jsx(
      _o,
      {
        className: "absolute left-0 top-0 z-10 block h-full w-1/5",
        event: "dblpointerup",
        action: "seek:-10"
      }
    ),
    /* @__PURE__ */ w.jsx(
      _o,
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
function jN() {
  let n = gv(null);
  const { canPictureInPicture: t, pictureInPicture: e } = o$(n);
  console.log(t, e), A9(() => n.current.subscribe(({ paused: l, viewType: d }) => {
  }), []);
  function s(l, d) {
    $x(l) && (l.config = {});
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
    Ym,
    {
      className: "w-full aspect-video bg-slate-900 text-white font-sans overflow-hidden rounded-md ring-media-focus data-[focus]:ring-4",
      title: "Sprite Fight",
      src: "https://www.youtube.com/watch?v=BU8-GA0a06g",
      crossOrigin: !0,
      playsInline: !0,
      onProviderChange: s,
      onCanPlay: i,
      ref: n,
      onPictureInPictureChange: o,
      onPictureInPictureError: a,
      children: [
        /* @__PURE__ */ w.jsxs(Qm, { children: [
          /* @__PURE__ */ w.jsx(
            eg,
            {
              className: "absolute inset-0 block h-full w-full rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 object-cover",
              src: "https://files.vidstack.io/sprite-fight/poster.webp",
              alt: "Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
            }
          ),
          oN.map((l) => /* @__PURE__ */ V(Jm, { ...l, key: l.src }))
        ] }),
        /* @__PURE__ */ w.jsx(iN, { thumbnails: "https://files.vidstack.io/sprite-fight/thumbnails.vtt" })
      ]
    }
  );
}
export {
  ab as A,
  pe as B,
  io as C,
  $e as D,
  Kx as H,
  Q5 as I,
  ye as L,
  jN as P,
  fn as Q,
  U4 as R,
  P1 as T,
  A0 as V,
  Yx as a,
  ce as b,
  _ as c,
  he as d,
  T as e,
  vt as f,
  Aa as g,
  Gw as h,
  s7 as i,
  sn as j,
  F2 as k,
  Xe as l,
  oo as m,
  re as n,
  Pa as o,
  yo as p,
  e2 as q,
  Vt as r,
  Gt as s,
  y5 as t,
  tn as u,
  Iv as v,
  dN as w,
  W as x,
  n7 as y,
  Zw as z
};
