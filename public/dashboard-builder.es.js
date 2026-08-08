import ga, { forwardRef as Ps, createElement as Gi, useRef as vi, useEffect as ja } from "react";
function Zr(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Jt = { exports: {} }, It = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ba;
function Jr() {
  if (Ba) return It;
  Ba = 1;
  var n = ga, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(o, l, h) {
    var c, d = {}, u = null, g = null;
    h !== void 0 && (u = "" + h), l.key !== void 0 && (u = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (c in l) i.call(l, c) && !s.hasOwnProperty(c) && (d[c] = l[c]);
    if (o && o.defaultProps) for (c in l = o.defaultProps, l) d[c] === void 0 && (d[c] = l[c]);
    return { $$typeof: e, type: o, key: u, ref: g, props: d, _owner: a.current };
  }
  return It.Fragment = t, It.jsx = r, It.jsxs = r, It;
}
var Rt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ga;
function Kr() {
  return Ga || (Ga = 1, process.env.NODE_ENV !== "production" && (function() {
    var n = ga, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), r = Symbol.for("react.provider"), o = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), p = Symbol.iterator, f = "@@iterator";
    function x(M) {
      if (M === null || typeof M != "object")
        return null;
      var F = p && M[p] || M[f];
      return typeof F == "function" ? F : null;
    }
    var b = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(M) {
      {
        for (var F = arguments.length, K = new Array(F > 1 ? F - 1 : 0), ne = 1; ne < F; ne++)
          K[ne - 1] = arguments[ne];
        y("error", M, K);
      }
    }
    function y(M, F, K) {
      {
        var ne = b.ReactDebugCurrentFrame, pe = ne.getStackAddendum();
        pe !== "" && (F += "%s", K = K.concat([pe]));
        var Ce = K.map(function(ce) {
          return String(ce);
        });
        Ce.unshift("Warning: " + F), Function.prototype.apply.call(console[M], console, Ce);
      }
    }
    var w = !1, v = !1, C = !1, k = !1, A = !1, S;
    S = Symbol.for("react.module.reference");
    function P(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === i || M === s || A || M === a || M === h || M === c || k || M === g || w || v || C || typeof M == "object" && M !== null && (M.$$typeof === u || M.$$typeof === d || M.$$typeof === r || M.$$typeof === o || M.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === S || M.getModuleId !== void 0));
    }
    function T(M, F, K) {
      var ne = M.displayName;
      if (ne)
        return ne;
      var pe = F.displayName || F.name || "";
      return pe !== "" ? K + "(" + pe + ")" : K;
    }
    function I(M) {
      return M.displayName || "Context";
    }
    function R(M) {
      if (M == null)
        return null;
      if (typeof M.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
        return M.displayName || M.name || null;
      if (typeof M == "string")
        return M;
      switch (M) {
        case i:
          return "Fragment";
        case t:
          return "Portal";
        case s:
          return "Profiler";
        case a:
          return "StrictMode";
        case h:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case o:
            var F = M;
            return I(F) + ".Consumer";
          case r:
            var K = M;
            return I(K._context) + ".Provider";
          case l:
            return T(M, M.render, "ForwardRef");
          case d:
            var ne = M.displayName || null;
            return ne !== null ? ne : R(M.type) || "Memo";
          case u: {
            var pe = M, Ce = pe._payload, ce = pe._init;
            try {
              return R(ce(Ce));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, Y = 0, N, H, U, Q, O, _, Z;
    function ee() {
    }
    ee.__reactDisabledLog = !0;
    function W() {
      {
        if (Y === 0) {
          N = console.log, H = console.info, U = console.warn, Q = console.error, O = console.group, _ = console.groupCollapsed, Z = console.groupEnd;
          var M = {
            configurable: !0,
            enumerable: !0,
            value: ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: M,
            log: M,
            warn: M,
            error: M,
            group: M,
            groupCollapsed: M,
            groupEnd: M
          });
        }
        Y++;
      }
    }
    function se() {
      {
        if (Y--, Y === 0) {
          var M = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, M, {
              value: N
            }),
            info: z({}, M, {
              value: H
            }),
            warn: z({}, M, {
              value: U
            }),
            error: z({}, M, {
              value: Q
            }),
            group: z({}, M, {
              value: O
            }),
            groupCollapsed: z({}, M, {
              value: _
            }),
            groupEnd: z({}, M, {
              value: Z
            })
          });
        }
        Y < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = b.ReactCurrentDispatcher, G;
    function J(M, F, K) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (pe) {
            var ne = pe.stack.trim().match(/\n( *(at )?)/);
            G = ne && ne[1] || "";
          }
        return `
` + G + M;
      }
    }
    var ae = !1, te;
    {
      var ge = typeof WeakMap == "function" ? WeakMap : Map;
      te = new ge();
    }
    function V(M, F) {
      if (!M || ae)
        return "";
      {
        var K = te.get(M);
        if (K !== void 0)
          return K;
      }
      var ne;
      ae = !0;
      var pe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ce;
      Ce = B.current, B.current = null, W();
      try {
        if (F) {
          var ce = function() {
            throw Error();
          };
          if (Object.defineProperty(ce.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ce, []);
            } catch (Ne) {
              ne = Ne;
            }
            Reflect.construct(M, [], ce);
          } else {
            try {
              ce.call();
            } catch (Ne) {
              ne = Ne;
            }
            M.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ne) {
            ne = Ne;
          }
          M();
        }
      } catch (Ne) {
        if (Ne && ne && typeof Ne.stack == "string") {
          for (var he = Ne.stack.split(`
`), _e = ne.stack.split(`
`), Pe = he.length - 1, Te = _e.length - 1; Pe >= 1 && Te >= 0 && he[Pe] !== _e[Te]; )
            Te--;
          for (; Pe >= 1 && Te >= 0; Pe--, Te--)
            if (he[Pe] !== _e[Te]) {
              if (Pe !== 1 || Te !== 1)
                do
                  if (Pe--, Te--, Te < 0 || he[Pe] !== _e[Te]) {
                    var We = `
` + he[Pe].replace(" at new ", " at ");
                    return M.displayName && We.includes("<anonymous>") && (We = We.replace("<anonymous>", M.displayName)), typeof M == "function" && te.set(M, We), We;
                  }
                while (Pe >= 1 && Te >= 0);
              break;
            }
        }
      } finally {
        ae = !1, B.current = Ce, se(), Error.prepareStackTrace = pe;
      }
      var bt = M ? M.displayName || M.name : "", rt = bt ? J(bt) : "";
      return typeof M == "function" && te.set(M, rt), rt;
    }
    function ye(M, F, K) {
      return V(M, !1);
    }
    function ze(M) {
      var F = M.prototype;
      return !!(F && F.isReactComponent);
    }
    function Je(M, F, K) {
      if (M == null)
        return "";
      if (typeof M == "function")
        return V(M, ze(M));
      if (typeof M == "string")
        return J(M);
      switch (M) {
        case h:
          return J("Suspense");
        case c:
          return J("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case l:
            return ye(M.render);
          case d:
            return Je(M.type, F, K);
          case u: {
            var ne = M, pe = ne._payload, Ce = ne._init;
            try {
              return Je(Ce(pe), F, K);
            } catch {
            }
          }
        }
      return "";
    }
    var Et = Object.prototype.hasOwnProperty, Ta = {}, Ea = b.ReactDebugCurrentFrame;
    function Zt(M) {
      if (M) {
        var F = M._owner, K = Je(M.type, M._source, F ? F.type : null);
        Ea.setExtraStackFrame(K);
      } else
        Ea.setExtraStackFrame(null);
    }
    function Pr(M, F, K, ne, pe) {
      {
        var Ce = Function.call.bind(Et);
        for (var ce in M)
          if (Ce(M, ce)) {
            var he = void 0;
            try {
              if (typeof M[ce] != "function") {
                var _e = Error((ne || "React class") + ": " + K + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _e.name = "Invariant Violation", _e;
              }
              he = M[ce](F, ce, ne, K, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Pe) {
              he = Pe;
            }
            he && !(he instanceof Error) && (Zt(pe), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ne || "React class", K, ce, typeof he), Zt(null)), he instanceof Error && !(he.message in Ta) && (Ta[he.message] = !0, Zt(pe), m("Failed %s type: %s", K, he.message), Zt(null));
          }
      }
    }
    var Tr = Array.isArray;
    function fi(M) {
      return Tr(M);
    }
    function Er(M) {
      {
        var F = typeof Symbol == "function" && Symbol.toStringTag, K = F && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return K;
      }
    }
    function Ir(M) {
      try {
        return Ia(M), !1;
      } catch {
        return !0;
      }
    }
    function Ia(M) {
      return "" + M;
    }
    function Ra(M) {
      if (Ir(M))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(M)), Ia(M);
    }
    var Oa = b.ReactCurrentOwner, Rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, za, _a;
    function Or(M) {
      if (Et.call(M, "ref")) {
        var F = Object.getOwnPropertyDescriptor(M, "ref").get;
        if (F && F.isReactWarning)
          return !1;
      }
      return M.ref !== void 0;
    }
    function zr(M) {
      if (Et.call(M, "key")) {
        var F = Object.getOwnPropertyDescriptor(M, "key").get;
        if (F && F.isReactWarning)
          return !1;
      }
      return M.key !== void 0;
    }
    function _r(M, F) {
      typeof M.ref == "string" && Oa.current;
    }
    function Yr(M, F) {
      {
        var K = function() {
          za || (za = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
        };
        K.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: K,
          configurable: !0
        });
      }
    }
    function Xr(M, F) {
      {
        var K = function() {
          _a || (_a = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
        };
        K.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: K,
          configurable: !0
        });
      }
    }
    var Nr = function(M, F, K, ne, pe, Ce, ce) {
      var he = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: M,
        key: F,
        ref: K,
        props: ce,
        // Record the component responsible for creating this element.
        _owner: Ce
      };
      return he._store = {}, Object.defineProperty(he._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(he, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ne
      }), Object.defineProperty(he, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pe
      }), Object.freeze && (Object.freeze(he.props), Object.freeze(he)), he;
    };
    function Hr(M, F, K, ne, pe) {
      {
        var Ce, ce = {}, he = null, _e = null;
        K !== void 0 && (Ra(K), he = "" + K), zr(F) && (Ra(F.key), he = "" + F.key), Or(F) && (_e = F.ref, _r(F, pe));
        for (Ce in F)
          Et.call(F, Ce) && !Rr.hasOwnProperty(Ce) && (ce[Ce] = F[Ce]);
        if (M && M.defaultProps) {
          var Pe = M.defaultProps;
          for (Ce in Pe)
            ce[Ce] === void 0 && (ce[Ce] = Pe[Ce]);
        }
        if (he || _e) {
          var Te = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          he && Yr(ce, Te), _e && Xr(ce, Te);
        }
        return Nr(M, he, _e, pe, ne, Oa.current, ce);
      }
    }
    var pi = b.ReactCurrentOwner, Ya = b.ReactDebugCurrentFrame;
    function xt(M) {
      if (M) {
        var F = M._owner, K = Je(M.type, M._source, F ? F.type : null);
        Ya.setExtraStackFrame(K);
      } else
        Ya.setExtraStackFrame(null);
    }
    var xi;
    xi = !1;
    function bi(M) {
      return typeof M == "object" && M !== null && M.$$typeof === e;
    }
    function Xa() {
      {
        if (pi.current) {
          var M = R(pi.current.type);
          if (M)
            return `

Check the render method of \`` + M + "`.";
        }
        return "";
      }
    }
    function Fr(M) {
      return "";
    }
    var Na = {};
    function Dr(M) {
      {
        var F = Xa();
        if (!F) {
          var K = typeof M == "string" ? M : M.displayName || M.name;
          K && (F = `

Check the top-level render call using <` + K + ">.");
        }
        return F;
      }
    }
    function Ha(M, F) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var K = Dr(F);
        if (Na[K])
          return;
        Na[K] = !0;
        var ne = "";
        M && M._owner && M._owner !== pi.current && (ne = " It was passed a child from " + R(M._owner.type) + "."), xt(M), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', K, ne), xt(null);
      }
    }
    function Fa(M, F) {
      {
        if (typeof M != "object")
          return;
        if (fi(M))
          for (var K = 0; K < M.length; K++) {
            var ne = M[K];
            bi(ne) && Ha(ne, F);
          }
        else if (bi(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var pe = x(M);
          if (typeof pe == "function" && pe !== M.entries)
            for (var Ce = pe.call(M), ce; !(ce = Ce.next()).done; )
              bi(ce.value) && Ha(ce.value, F);
        }
      }
    }
    function Wr(M) {
      {
        var F = M.type;
        if (F == null || typeof F == "string")
          return;
        var K;
        if (typeof F == "function")
          K = F.propTypes;
        else if (typeof F == "object" && (F.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        F.$$typeof === d))
          K = F.propTypes;
        else
          return;
        if (K) {
          var ne = R(F);
          Pr(K, M.props, "prop", ne, M);
        } else if (F.PropTypes !== void 0 && !xi) {
          xi = !0;
          var pe = R(F);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pe || "Unknown");
        }
        typeof F.getDefaultProps == "function" && !F.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jr(M) {
      {
        for (var F = Object.keys(M.props), K = 0; K < F.length; K++) {
          var ne = F[K];
          if (ne !== "children" && ne !== "key") {
            xt(M), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ne), xt(null);
            break;
          }
        }
        M.ref !== null && (xt(M), m("Invalid attribute `ref` supplied to `React.Fragment`."), xt(null));
      }
    }
    var Da = {};
    function Wa(M, F, K, ne, pe, Ce) {
      {
        var ce = P(M);
        if (!ce) {
          var he = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (he += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _e = Fr();
          _e ? he += _e : he += Xa();
          var Pe;
          M === null ? Pe = "null" : fi(M) ? Pe = "array" : M !== void 0 && M.$$typeof === e ? (Pe = "<" + (R(M.type) || "Unknown") + " />", he = " Did you accidentally export a JSX literal instead of a component?") : Pe = typeof M, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Pe, he);
        }
        var Te = Hr(M, F, K, pe, Ce);
        if (Te == null)
          return Te;
        if (ce) {
          var We = F.children;
          if (We !== void 0)
            if (ne)
              if (fi(We)) {
                for (var bt = 0; bt < We.length; bt++)
                  Fa(We[bt], M);
                Object.freeze && Object.freeze(We);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fa(We, M);
        }
        if (Et.call(F, "key")) {
          var rt = R(M), Ne = Object.keys(F).filter(function($r) {
            return $r !== "key";
          }), mi = Ne.length > 0 ? "{key: someKey, " + Ne.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Da[rt + mi]) {
            var qr = Ne.length > 0 ? "{" + Ne.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, mi, rt, qr, rt), Da[rt + mi] = !0;
          }
        }
        return M === i ? jr(Te) : Wr(Te), Te;
      }
    }
    function Br(M, F, K) {
      return Wa(M, F, K, !0);
    }
    function Gr(M, F, K) {
      return Wa(M, F, K, !1);
    }
    var Vr = Gr, Ur = Br;
    Rt.Fragment = i, Rt.jsx = Vr, Rt.jsxs = Ur;
  })()), Rt;
}
var Va;
function Qr() {
  return Va || (Va = 1, process.env.NODE_ENV === "production" ? Jt.exports = Jr() : Jt.exports = Kr()), Jt.exports;
}
var E = Qr();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const en = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ts = (...n) => n.filter((e, t, i) => !!e && e.trim() !== "" && i.indexOf(e) === t).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var tn = {
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
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const an = Ps(
  ({
    color: n = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: i,
    className: a = "",
    children: s,
    iconNode: r,
    ...o
  }, l) => Gi(
    "svg",
    {
      ref: l,
      ...tn,
      width: e,
      height: e,
      stroke: n,
      strokeWidth: i ? Number(t) * 24 / Number(e) : t,
      className: Ts("lucide", a),
      ...o
    },
    [
      ...r.map(([h, c]) => Gi(h, c)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ke = (n, e) => {
  const t = Ps(
    ({ className: i, ...a }, s) => Gi(an, {
      ref: s,
      iconNode: e,
      className: Ts(`lucide-${en(n)}`, i),
      ...a
    })
  );
  return t.displayName = `${n}`, t;
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sn = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], rn = ke("ArrowDown", sn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nn = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], on = ke("ArrowLeft", nn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ln = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], hn = ke("ArrowRight", ln);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cn = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], dn = ke("ArrowUp", cn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const un = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], gn = ke("Calendar", un);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fn = [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
  ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }]
], Ua = ke("ChartNoAxesColumn", fn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pn = [
  [
    "path",
    {
      d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
      key: "pzmjnu"
    }
  ],
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }]
], xn = ke("ChartPie", pn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bn = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], mn = ke("Copy", bn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vn = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
], yn = ke("Database", vn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wn = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
], kn = ke("Download", wn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const An = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Cn = ke("Eye", An);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sn = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Es = ke("FileText", Sn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mn = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], Ln = ke("Globe", Mn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pn = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Tn = ke("Image", Pn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const En = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
], In = ke("Layers", En);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rn = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
], On = ke("LayoutGrid", Rn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zn = [["path", { d: "M5 12h14", key: "1ays0h" }]], _n = ke("Minus", zn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yn = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], Xn = ke("Monitor", Yn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nn = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Hn = ke("Plus", Nn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fn = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
], Dn = ke("Save", Fn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wn = [
  ["line", { x1: "4", x2: "4", y1: "21", y2: "14", key: "1p332r" }],
  ["line", { x1: "4", x2: "4", y1: "10", y2: "3", key: "gb41h5" }],
  ["line", { x1: "12", x2: "12", y1: "21", y2: "12", key: "hf2csr" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "3", key: "1kfi7u" }],
  ["line", { x1: "20", x2: "20", y1: "21", y2: "16", key: "1lhrwl" }],
  ["line", { x1: "20", x2: "20", y1: "12", y2: "3", key: "16vvfq" }],
  ["line", { x1: "2", x2: "6", y1: "14", y2: "14", key: "1uebub" }],
  ["line", { x1: "10", x2: "14", y1: "8", y2: "8", key: "1yglbp" }],
  ["line", { x1: "18", x2: "22", y1: "16", y2: "16", key: "1jxqpz" }]
], qa = ke("SlidersVertical", Wn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jn = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
], Bn = ke("Smartphone", jn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gn = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Vn = ke("Table", Gn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Un = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]
], qn = ke("Tablet", Un);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $n = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], Zn = ke("Trash2", $n);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jn = [
  ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
  ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }]
], Kn = ke("TrendingDown", Jn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qn = [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
], Is = ke("TrendingUp", Qn);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eo = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], to = ke("X", eo), Xl = ({
  title: n,
  isEditing: e,
  onTogglePreview: t,
  onSave: i,
  onDuplicate: a,
  onExport: s,
  onExportPNG: r,
  onExportPDF: o,
  device: l,
  onDeviceChange: h,
  dateRange: c = "all_time",
  onDateRangeChange: d
}) => /* @__PURE__ */ E.jsxs("header", { className: "h-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 flex items-center justify-between sticky top-0 z-30", children: [
  /* @__PURE__ */ E.jsxs("div", { className: "flex items-center space-x-3", children: [
    /* @__PURE__ */ E.jsx("h1", { className: "text-base font-bold text-slate-800 dark:text-slate-100", children: n }),
    /* @__PURE__ */ E.jsx("span", { className: "px-2 py-0.5 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300", children: e ? "Builder Mode" : "Preview Mode" })
  ] }),
  /* @__PURE__ */ E.jsxs("div", { className: "flex items-center space-x-3", children: [
    d && /* @__PURE__ */ E.jsxs("div", { className: "flex items-center space-x-1.5 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md text-xs", children: [
      /* @__PURE__ */ E.jsx(gn, { className: "w-3.5 h-3.5 text-slate-500" }),
      /* @__PURE__ */ E.jsxs(
        "select",
        {
          value: c,
          onChange: (u) => d(u.target.value),
          className: "bg-transparent border-none text-xs font-medium text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer",
          children: [
            /* @__PURE__ */ E.jsx("option", { value: "all_time", children: "All Time" }),
            /* @__PURE__ */ E.jsx("option", { value: "today", children: "Today" }),
            /* @__PURE__ */ E.jsx("option", { value: "last_7_days", children: "Last 7 Days" }),
            /* @__PURE__ */ E.jsx("option", { value: "this_month", children: "This Month" }),
            /* @__PURE__ */ E.jsx("option", { value: "last_30_days", children: "Last 30 Days" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ E.jsxs("div", { className: "flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg", children: [
      /* @__PURE__ */ E.jsx(
        "button",
        {
          onClick: () => h("desktop"),
          className: `p-1.5 rounded-md text-xs transition-colors ${l === "desktop" ? "bg-white dark:bg-slate-900 text-indigo-600 shadow-sm" : "text-slate-500"}`,
          title: "Desktop view",
          children: /* @__PURE__ */ E.jsx(Xn, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ E.jsx(
        "button",
        {
          onClick: () => h("tablet"),
          className: `p-1.5 rounded-md text-xs transition-colors ${l === "tablet" ? "bg-white dark:bg-slate-900 text-indigo-600 shadow-sm" : "text-slate-500"}`,
          title: "Tablet view",
          children: /* @__PURE__ */ E.jsx(qn, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ E.jsx(
        "button",
        {
          onClick: () => h("mobile"),
          className: `p-1.5 rounded-md text-xs transition-colors ${l === "mobile" ? "bg-white dark:bg-slate-900 text-indigo-600 shadow-sm" : "text-slate-500"}`,
          title: "Mobile view",
          children: /* @__PURE__ */ E.jsx(Bn, { className: "w-4 h-4" })
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ E.jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ E.jsxs(
      "button",
      {
        onClick: t,
        className: "px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md flex items-center space-x-1.5 transition-colors",
        children: [
          /* @__PURE__ */ E.jsx(Cn, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ E.jsx("span", { children: e ? "Preview" : "Edit" })
        ]
      }
    ),
    r && /* @__PURE__ */ E.jsx(
      "button",
      {
        onClick: r,
        className: "p-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md flex items-center space-x-1 text-xs",
        title: "Export to PNG Image",
        children: /* @__PURE__ */ E.jsx(Tn, { className: "w-4 h-4 text-emerald-600" })
      }
    ),
    o && /* @__PURE__ */ E.jsx(
      "button",
      {
        onClick: o,
        className: "p-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md flex items-center space-x-1 text-xs",
        title: "Export to PDF Document",
        children: /* @__PURE__ */ E.jsx(Es, { className: "w-4 h-4 text-rose-600" })
      }
    ),
    a && /* @__PURE__ */ E.jsx(
      "button",
      {
        onClick: a,
        className: "p-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md",
        title: "Duplicate dashboard",
        children: /* @__PURE__ */ E.jsx(mn, { className: "w-4 h-4" })
      }
    ),
    s && /* @__PURE__ */ E.jsx(
      "button",
      {
        onClick: s,
        className: "p-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md",
        title: "Export JSON schema",
        children: /* @__PURE__ */ E.jsx(kn, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ E.jsxs(
      "button",
      {
        onClick: i,
        className: "px-4 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm flex items-center space-x-1.5 transition-colors",
        children: [
          /* @__PURE__ */ E.jsx(Dn, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ E.jsx("span", { children: "Save" })
        ]
      }
    )
  ] })
] }), io = [
  { type: "card", title: "Stat Card", icon: On, category: "Stats" },
  { type: "stats", title: "KPI Trend", icon: Is, category: "Stats" },
  { type: "line_chart", title: "Line Chart", icon: Ua, category: "Charts" },
  { type: "bar_chart", title: "Bar Chart", icon: Ua, category: "Charts" },
  { type: "pie_chart", title: "Pie Chart", icon: xn, category: "Charts" },
  { type: "table", title: "Data Table", icon: Vn, category: "Content" },
  { type: "markdown", title: "Markdown Text", icon: Es, category: "Content" },
  { type: "iframe", title: "Web Iframe Embed", icon: Ln, category: "Embed" }
], Nl = ({ onAddWidget: n }) => /* @__PURE__ */ E.jsxs("aside", { className: "w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-4 flex flex-col h-[calc(100vh-3.5rem)] overflow-y-auto", children: [
  /* @__PURE__ */ E.jsxs("div", { className: "flex items-center space-x-2 text-slate-700 dark:text-slate-200 mb-4 font-semibold text-xs uppercase tracking-wider", children: [
    /* @__PURE__ */ E.jsx(In, { className: "w-4 h-4 text-indigo-600" }),
    /* @__PURE__ */ E.jsx("span", { children: "Widget Palette" })
  ] }),
  /* @__PURE__ */ E.jsx("div", { className: "space-y-2", children: io.map((e) => {
    const t = e.icon;
    return /* @__PURE__ */ E.jsxs(
      "div",
      {
        onClick: () => n(e.type, e.title),
        className: "p-3 bg-slate-50 dark:bg-slate-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 rounded-lg cursor-pointer transition-all flex items-center space-x-3 group",
        children: [
          /* @__PURE__ */ E.jsx("div", { className: "p-2 bg-white dark:bg-slate-800 rounded-md text-slate-600 dark:text-slate-300 group-hover:text-indigo-600", children: /* @__PURE__ */ E.jsx(t, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ E.jsxs("div", { children: [
            /* @__PURE__ */ E.jsx("h4", { className: "text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600", children: e.title }),
            /* @__PURE__ */ E.jsx("p", { className: "text-[10px] text-slate-400", children: e.category })
          ] })
        ]
      },
      e.type
    );
  }) })
] }), Hl = ({
  selectedWidget: n,
  onUpdateWidget: e,
  onDeleteWidget: t,
  onClose: i
}) => {
  if (!n)
    return /* @__PURE__ */ E.jsxs("aside", { className: "w-72 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 p-4 flex flex-col items-center justify-center text-center h-[calc(100vh-3.5rem)] text-slate-400 text-xs", children: [
      /* @__PURE__ */ E.jsx(qa, { className: "w-8 h-8 mb-2 stroke-1 text-slate-300" }),
      /* @__PURE__ */ E.jsx("p", { children: "Select a widget on the canvas to configure its properties" })
    ] });
  const a = n.data_source_config || {}, s = (r, o) => {
    e({
      ...n,
      data_source_config: {
        ...a,
        [r]: o
      }
    });
  };
  return /* @__PURE__ */ E.jsxs("aside", { className: "w-72 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 p-4 flex flex-col h-[calc(100vh-3.5rem)] overflow-y-auto", children: [
    /* @__PURE__ */ E.jsxs("div", { className: "flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800", children: [
      /* @__PURE__ */ E.jsxs("div", { className: "flex items-center space-x-2 text-slate-800 dark:text-slate-200 font-semibold text-xs uppercase tracking-wider", children: [
        /* @__PURE__ */ E.jsx(qa, { className: "w-4 h-4 text-indigo-600" }),
        /* @__PURE__ */ E.jsx("span", { children: "Widget Inspector" })
      ] }),
      /* @__PURE__ */ E.jsx("button", { onClick: i, className: "text-slate-400 hover:text-slate-600", children: /* @__PURE__ */ E.jsx(to, { className: "w-4 h-4" }) })
    ] }),
    /* @__PURE__ */ E.jsxs("div", { className: "space-y-4 text-xs", children: [
      /* @__PURE__ */ E.jsxs("div", { children: [
        /* @__PURE__ */ E.jsx("label", { className: "block text-slate-600 dark:text-slate-400 font-medium mb-1", children: "Widget Title" }),
        /* @__PURE__ */ E.jsx(
          "input",
          {
            type: "text",
            value: n.title,
            onChange: (r) => e({ ...n, title: r.target.value }),
            className: "w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          }
        )
      ] }),
      /* @__PURE__ */ E.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ E.jsxs("div", { children: [
          /* @__PURE__ */ E.jsx("label", { className: "block text-slate-600 dark:text-slate-400 font-medium mb-1", children: "Grid Width (W)" }),
          /* @__PURE__ */ E.jsx(
            "input",
            {
              type: "number",
              min: 1,
              max: 12,
              value: n.w,
              onChange: (r) => e({ ...n, w: parseInt(r.target.value) || 1 }),
              className: "w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md"
            }
          )
        ] }),
        /* @__PURE__ */ E.jsxs("div", { children: [
          /* @__PURE__ */ E.jsx("label", { className: "block text-slate-600 dark:text-slate-400 font-medium mb-1", children: "Grid Height (H)" }),
          /* @__PURE__ */ E.jsx(
            "input",
            {
              type: "number",
              min: 1,
              max: 12,
              value: n.h,
              onChange: (r) => e({ ...n, h: parseInt(r.target.value) || 1 }),
              className: "w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ E.jsxs("div", { children: [
        /* @__PURE__ */ E.jsx("label", { className: "block text-slate-600 dark:text-slate-400 font-medium mb-1", children: "Data Source Driver" }),
        /* @__PURE__ */ E.jsxs(
          "select",
          {
            value: n.data_source_type,
            onChange: (r) => e({ ...n, data_source_type: r.target.value }),
            className: "w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md text-slate-800 dark:text-slate-200",
            children: [
              /* @__PURE__ */ E.jsx("option", { value: "eloquent", children: "Eloquent Model" }),
              /* @__PURE__ */ E.jsx("option", { value: "query_builder", children: "Query Builder (DB Table)" }),
              /* @__PURE__ */ E.jsx("option", { value: "static", children: "Static Payload" }),
              /* @__PURE__ */ E.jsx("option", { value: "rest_api", children: "REST API" })
            ]
          }
        )
      ] }),
      (n.data_source_type === "eloquent" || n.data_source_type === "query_builder") && /* @__PURE__ */ E.jsxs("div", { className: "p-3 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 rounded-lg space-y-3", children: [
        /* @__PURE__ */ E.jsxs("div", { className: "flex items-center space-x-1.5 text-indigo-700 dark:text-indigo-300 font-semibold text-[11px]", children: [
          /* @__PURE__ */ E.jsx(yn, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ E.jsx("span", { children: "Visual Query Builder" })
        ] }),
        /* @__PURE__ */ E.jsxs("div", { children: [
          /* @__PURE__ */ E.jsx("label", { className: "block text-slate-600 dark:text-slate-400 font-medium mb-1", children: n.data_source_type === "eloquent" ? "Model Class" : "Table Name" }),
          /* @__PURE__ */ E.jsx(
            "input",
            {
              type: "text",
              placeholder: n.data_source_type === "eloquent" ? "App\\Models\\User" : "users",
              value: a.model || a.table || "",
              onChange: (r) => s(n.data_source_type === "eloquent" ? "model" : "table", r.target.value),
              className: "w-full px-3 py-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md text-slate-800 dark:text-slate-200"
            }
          )
        ] }),
        /* @__PURE__ */ E.jsxs("div", { children: [
          /* @__PURE__ */ E.jsx("label", { className: "block text-slate-600 dark:text-slate-400 font-medium mb-1", children: "Aggregate Function" }),
          /* @__PURE__ */ E.jsxs(
            "select",
            {
              value: a.aggregate_function || "COUNT",
              onChange: (r) => s("aggregate_function", r.target.value),
              className: "w-full px-3 py-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md text-slate-800 dark:text-slate-200",
              children: [
                /* @__PURE__ */ E.jsx("option", { value: "COUNT", children: "COUNT" }),
                /* @__PURE__ */ E.jsx("option", { value: "SUM", children: "SUM" }),
                /* @__PURE__ */ E.jsx("option", { value: "AVG", children: "AVG" }),
                /* @__PURE__ */ E.jsx("option", { value: "MIN", children: "MIN" }),
                /* @__PURE__ */ E.jsx("option", { value: "MAX", children: "MAX" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ E.jsxs("div", { children: [
          /* @__PURE__ */ E.jsx("label", { className: "block text-slate-600 dark:text-slate-400 font-medium mb-1", children: "Target Column" }),
          /* @__PURE__ */ E.jsx(
            "input",
            {
              type: "text",
              placeholder: "e.g. total_amount or *",
              value: a.aggregate_column || "*",
              onChange: (r) => s("aggregate_column", r.target.value),
              className: "w-full px-3 py-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md text-slate-800 dark:text-slate-200"
            }
          )
        ] }),
        /* @__PURE__ */ E.jsxs("div", { children: [
          /* @__PURE__ */ E.jsx("label", { className: "block text-slate-600 dark:text-slate-400 font-medium mb-1", children: "Date Grouping" }),
          /* @__PURE__ */ E.jsxs(
            "select",
            {
              value: a.group_by || "none",
              onChange: (r) => s("group_by", r.target.value),
              className: "w-full px-3 py-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md text-slate-800 dark:text-slate-200",
              children: [
                /* @__PURE__ */ E.jsx("option", { value: "none", children: "None" }),
                /* @__PURE__ */ E.jsx("option", { value: "groupByDay", children: "Daily (groupByDay)" }),
                /* @__PURE__ */ E.jsx("option", { value: "groupByMonth", children: "Monthly (groupByMonth)" }),
                /* @__PURE__ */ E.jsx("option", { value: "groupByYear", children: "Yearly (groupByYear)" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ E.jsxs("div", { children: [
        /* @__PURE__ */ E.jsx("label", { className: "block text-slate-600 dark:text-slate-400 font-medium mb-1", children: "Refresh Interval (Sec)" }),
        /* @__PURE__ */ E.jsx(
          "input",
          {
            type: "number",
            value: n.refresh_interval || 30,
            onChange: (r) => e({ ...n, refresh_interval: parseInt(r.target.value) || 30 }),
            className: "w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ E.jsx("div", { className: "mt-auto pt-4 border-t border-slate-200 dark:border-slate-800", children: /* @__PURE__ */ E.jsxs(
      "button",
      {
        onClick: () => n.id !== void 0 && t(n.id),
        className: "w-full py-2 bg-rose-50 dark:bg-rose-950/30 text-rose-600 hover:bg-rose-100 rounded-md font-semibold text-xs flex items-center justify-center space-x-1.5 transition-colors",
        children: [
          /* @__PURE__ */ E.jsx(Zn, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ E.jsx("span", { children: "Remove Widget" })
        ]
      }
    ) })
  ] });
}, ao = ({ widget: n }) => {
  var s, r, o, l, h;
  const e = ((s = n.data) == null ? void 0 : s.result) ?? ((r = n.data) == null ? void 0 : r.value) ?? 0, t = ((o = n.settings) == null ? void 0 : o.description) ?? "", i = (l = n.settings) == null ? void 0 : l.trend, a = (h = n.settings) == null ? void 0 : h.icon;
  return /* @__PURE__ */ E.jsxs("div", { className: "flex flex-col justify-between h-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm", children: [
    /* @__PURE__ */ E.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ E.jsx("span", { className: "text-sm font-medium text-slate-500 dark:text-slate-400", children: n.title }),
      a && /* @__PURE__ */ E.jsx("span", { className: "p-2 text-indigo-600 bg-indigo-50 dark:bg-indigo-950/50 rounded-md text-xs font-semibold", children: a })
    ] }),
    /* @__PURE__ */ E.jsxs("div", { className: "my-2", children: [
      /* @__PURE__ */ E.jsx("div", { className: "text-3xl font-extrabold text-slate-900 dark:text-slate-100", children: typeof e == "number" ? e.toLocaleString() : e }),
      t && /* @__PURE__ */ E.jsx("p", { className: "text-xs text-slate-500 mt-1", children: t })
    ] }),
    i !== void 0 && /* @__PURE__ */ E.jsxs("div", { className: `flex items-center text-xs font-semibold ${i >= 0 ? "text-emerald-600" : "text-rose-600"}`, children: [
      i >= 0 ? /* @__PURE__ */ E.jsx(Is, { className: "w-3.5 h-3.5 mr-1" }) : /* @__PURE__ */ E.jsx(Kn, { className: "w-3.5 h-3.5 mr-1" }),
      /* @__PURE__ */ E.jsxs("span", { children: [
        Math.abs(i),
        "% from last period"
      ] })
    ] })
  ] });
};
/*!
 * ApexCharts v4.7.0
 * (c) 2018-2025 ApexCharts
 * Released under the MIT License.
 */
function Vi(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, i = Array(e); t < e; t++) i[t] = n[t];
  return i;
}
function Rs(n) {
  if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function q(n, e) {
  if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function $a(n, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, _s(i.key), i);
  }
}
function $(n, e, t) {
  return e && $a(n.prototype, e), t && $a(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function zt(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!t) {
    if (Array.isArray(n) || (t = fa(n)) || e) {
      t && (n = t);
      var i = 0, a = function() {
      };
      return { s: a, n: function() {
        return i >= n.length ? { done: !0 } : { done: !1, value: n[i++] };
      }, e: function(l) {
        throw l;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, r = !0, o = !1;
  return { s: function() {
    t = t.call(n);
  }, n: function() {
    var l = t.next();
    return r = l.done, l;
  }, e: function(l) {
    o = !0, s = l;
  }, f: function() {
    try {
      r || t.return == null || t.return();
    } finally {
      if (o) throw s;
    }
  } };
}
function Bt(n) {
  var e = Os();
  return function() {
    var t, i = li(n);
    if (e) {
      var a = li(this).constructor;
      t = Reflect.construct(i, arguments, a);
    } else t = i.apply(this, arguments);
    return (function(s, r) {
      if (r && (typeof r == "object" || typeof r == "function")) return r;
      if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return Rs(s);
    })(this, t);
  };
}
function oi(n, e, t) {
  return (e = _s(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function li(n) {
  return li = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, li(n);
}
function Gt(n, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), e && Ui(n, e);
}
function Os() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
    })));
  } catch {
  }
  return (Os = function() {
    return !!n;
  })();
}
function Za(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    e && (i = i.filter((function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), t.push.apply(t, i);
  }
  return t;
}
function D(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Za(Object(t), !0).forEach((function(i) {
      oi(n, i, t[i]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Za(Object(t)).forEach((function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(t, i));
    }));
  }
  return n;
}
function Ui(n, e) {
  return Ui = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, i) {
    return t.__proto__ = i, t;
  }, Ui(n, e);
}
function zs(n, e) {
  return (function(t) {
    if (Array.isArray(t)) return t;
  })(n) || (function(t, i) {
    var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (a != null) {
      var s, r, o, l, h = [], c = !0, d = !1;
      try {
        if (o = (a = a.call(t)).next, i === 0) {
          if (Object(a) !== a) return;
          c = !1;
        } else for (; !(c = (s = o.call(a)).done) && (h.push(s.value), h.length !== i); c = !0) ;
      } catch (u) {
        d = !0, r = u;
      } finally {
        try {
          if (!c && a.return != null && (l = a.return(), Object(l) !== l)) return;
        } finally {
          if (d) throw r;
        }
      }
      return h;
    }
  })(n, e) || fa(n, e) || (function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function Ee(n) {
  return (function(e) {
    if (Array.isArray(e)) return Vi(e);
  })(n) || (function(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
  })(n) || fa(n) || (function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function _s(n) {
  var e = (function(t, i) {
    if (typeof t != "object" || !t) return t;
    var a = t[Symbol.toPrimitive];
    if (a !== void 0) {
      var s = a.call(t, i);
      if (typeof s != "object") return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (i === "string" ? String : Number)(t);
  })(n, "string");
  return typeof e == "symbol" ? e : e + "";
}
function kt(n) {
  return kt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, kt(n);
}
function fa(n, e) {
  if (n) {
    if (typeof n == "string") return Vi(n, e);
    var t = {}.toString.call(n).slice(8, -1);
    return t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set" ? Array.from(n) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Vi(n, e) : void 0;
  }
}
var L = (function() {
  function n() {
    q(this, n);
  }
  return $(n, [{ key: "shadeRGBColor", value: function(e, t) {
    var i = t.split(","), a = e < 0 ? 0 : 255, s = e < 0 ? -1 * e : e, r = parseInt(i[0].slice(4), 10), o = parseInt(i[1], 10), l = parseInt(i[2], 10);
    return "rgb(" + (Math.round((a - r) * s) + r) + "," + (Math.round((a - o) * s) + o) + "," + (Math.round((a - l) * s) + l) + ")";
  } }, { key: "shadeHexColor", value: function(e, t) {
    var i = parseInt(t.slice(1), 16), a = e < 0 ? 0 : 255, s = e < 0 ? -1 * e : e, r = i >> 16, o = i >> 8 & 255, l = 255 & i;
    return "#" + (16777216 + 65536 * (Math.round((a - r) * s) + r) + 256 * (Math.round((a - o) * s) + o) + (Math.round((a - l) * s) + l)).toString(16).slice(1);
  } }, { key: "shadeColor", value: function(e, t) {
    return n.isColorHex(t) ? this.shadeHexColor(e, t) : this.shadeRGBColor(e, t);
  } }], [{ key: "bind", value: function(e, t) {
    return function() {
      return e.apply(t, arguments);
    };
  } }, { key: "isObject", value: function(e) {
    return e && kt(e) === "object" && !Array.isArray(e) && e != null;
  } }, { key: "is", value: function(e, t) {
    return Object.prototype.toString.call(t) === "[object " + e + "]";
  } }, { key: "isSafari", value: function() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  } }, { key: "listToArray", value: function(e) {
    var t, i = [];
    for (t = 0; t < e.length; t++) i[t] = e[t];
    return i;
  } }, { key: "extend", value: function(e, t) {
    var i = this;
    typeof Object.assign != "function" && (Object.assign = function(s) {
      if (s == null) throw new TypeError("Cannot convert undefined or null to object");
      for (var r = Object(s), o = 1; o < arguments.length; o++) {
        var l = arguments[o];
        if (l != null) for (var h in l) l.hasOwnProperty(h) && (r[h] = l[h]);
      }
      return r;
    });
    var a = Object.assign({}, e);
    return this.isObject(e) && this.isObject(t) && Object.keys(t).forEach((function(s) {
      i.isObject(t[s]) && s in e ? a[s] = i.extend(e[s], t[s]) : Object.assign(a, oi({}, s, t[s]));
    })), a;
  } }, { key: "extendArray", value: function(e, t) {
    var i = [];
    return e.map((function(a) {
      i.push(n.extend(t, a));
    })), e = i;
  } }, { key: "monthMod", value: function(e) {
    return e % 12;
  } }, { key: "clone", value: function(e) {
    var t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new WeakMap();
    if (e === null || kt(e) !== "object") return e;
    if (i.has(e)) return i.get(e);
    if (Array.isArray(e)) {
      t = [], i.set(e, t);
      for (var a = 0; a < e.length; a++) t[a] = this.clone(e[a], i);
    } else if (e instanceof Date) t = new Date(e.getTime());
    else for (var s in t = {}, i.set(e, t), e) e.hasOwnProperty(s) && (t[s] = this.clone(e[s], i));
    return t;
  } }, { key: "log10", value: function(e) {
    return Math.log(e) / Math.LN10;
  } }, { key: "roundToBase10", value: function(e) {
    return Math.pow(10, Math.floor(Math.log10(e)));
  } }, { key: "roundToBase", value: function(e, t) {
    return Math.pow(t, Math.floor(Math.log(e) / Math.log(t)));
  } }, { key: "parseNumber", value: function(e) {
    return e === null ? e : parseFloat(e);
  } }, { key: "stripNumber", value: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    return Number.isInteger(e) ? e : parseFloat(e.toPrecision(t));
  } }, { key: "randomId", value: function() {
    return (Math.random() + 1).toString(36).substring(4);
  } }, { key: "noExponents", value: function(e) {
    return e.toString().includes("e") ? Math.round(e) : e;
  } }, { key: "elementExists", value: function(e) {
    return !(!e || !e.isConnected);
  } }, { key: "getDimensions", value: function(e) {
    var t = getComputedStyle(e, null), i = e.clientHeight, a = e.clientWidth;
    return i -= parseFloat(t.paddingTop) + parseFloat(t.paddingBottom), [a -= parseFloat(t.paddingLeft) + parseFloat(t.paddingRight), i];
  } }, { key: "getBoundingClientRect", value: function(e) {
    var t = e.getBoundingClientRect();
    return { top: t.top, right: t.right, bottom: t.bottom, left: t.left, width: e.clientWidth, height: e.clientHeight, x: t.left, y: t.top };
  } }, { key: "getLargestStringFromArr", value: function(e) {
    return e.reduce((function(t, i) {
      return Array.isArray(i) && (i = i.reduce((function(a, s) {
        return a.length > s.length ? a : s;
      }))), t.length > i.length ? t : i;
    }), 0);
  } }, { key: "hexToRgba", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "#999999", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.6;
    e.substring(0, 1) !== "#" && (e = "#999999");
    var i = e.replace("#", "");
    i = i.match(new RegExp("(.{" + i.length / 3 + "})", "g"));
    for (var a = 0; a < i.length; a++) i[a] = parseInt(i[a].length === 1 ? i[a] + i[a] : i[a], 16);
    return t !== void 0 && i.push(t), "rgba(" + i.join(",") + ")";
  } }, { key: "getOpacityFromRGBA", value: function(e) {
    return parseFloat(e.replace(/^.*,(.+)\)/, "$1"));
  } }, { key: "rgb2hex", value: function(e) {
    return (e = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && e.length === 4 ? "#" + ("0" + parseInt(e[1], 10).toString(16)).slice(-2) + ("0" + parseInt(e[2], 10).toString(16)).slice(-2) + ("0" + parseInt(e[3], 10).toString(16)).slice(-2) : "";
  } }, { key: "isColorHex", value: function(e) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(e);
  } }, { key: "getPolygonPos", value: function(e, t) {
    for (var i = [], a = 2 * Math.PI / t, s = 0; s < t; s++) {
      var r = {};
      r.x = e * Math.sin(s * a), r.y = -e * Math.cos(s * a), i.push(r);
    }
    return i;
  } }, { key: "polarToCartesian", value: function(e, t, i, a) {
    var s = (a - 90) * Math.PI / 180;
    return { x: e + i * Math.cos(s), y: t + i * Math.sin(s) };
  } }, { key: "escapeString", value: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x", i = e.toString().slice();
    return i = i.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi, t);
  } }, { key: "negToZero", value: function(e) {
    return e < 0 ? 0 : e;
  } }, { key: "moveIndexInArray", value: function(e, t, i) {
    if (i >= e.length) for (var a = i - e.length + 1; a--; ) e.push(void 0);
    return e.splice(i, 0, e.splice(t, 1)[0]), e;
  } }, { key: "extractNumber", value: function(e) {
    return parseFloat(e.replace(/[^\d.]*/g, ""));
  } }, { key: "findAncestor", value: function(e, t) {
    for (; (e = e.parentElement) && !e.classList.contains(t); ) ;
    return e;
  } }, { key: "setELstyles", value: function(e, t) {
    for (var i in t) t.hasOwnProperty(i) && (e.style.key = t[i]);
  } }, { key: "preciseAddition", value: function(e, t) {
    var i = (String(e).split(".")[1] || "").length, a = (String(t).split(".")[1] || "").length, s = Math.pow(10, Math.max(i, a));
    return (Math.round(e * s) + Math.round(t * s)) / s;
  } }, { key: "isNumber", value: function(e) {
    return !isNaN(e) && parseFloat(Number(e)) === e && !isNaN(parseInt(e, 10));
  } }, { key: "isFloat", value: function(e) {
    return Number(e) === e && e % 1 != 0;
  } }, { key: "isMsEdge", value: function() {
    var e = window.navigator.userAgent, t = e.indexOf("Edge/");
    return t > 0 && parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  } }, { key: "getGCD", value: function(e, t) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 7, a = Math.pow(10, i - Math.floor(Math.log10(Math.max(e, t))));
    for (e = Math.round(Math.abs(e) * a), t = Math.round(Math.abs(t) * a); t; ) {
      var s = t;
      t = e % t, e = s;
    }
    return e / a;
  } }, { key: "getPrimeFactors", value: function(e) {
    for (var t = [], i = 2; e >= 2; ) e % i == 0 ? (t.push(i), e /= i) : i++;
    return t;
  } }, { key: "mod", value: function(e, t) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 7, a = Math.pow(10, i - Math.floor(Math.log10(Math.max(e, t))));
    return (e = Math.round(Math.abs(e) * a)) % (t = Math.round(Math.abs(t) * a)) / a;
  } }]), n;
})(), St = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
  }
  return $(n, [{ key: "animateLine", value: function(e, t, i, a) {
    e.attr(t).animate(a).attr(i);
  } }, { key: "animateMarker", value: function(e, t, i, a) {
    e.attr({ opacity: 0 }).animate(t).attr({ opacity: 1 }).after((function() {
      a();
    }));
  } }, { key: "animateRect", value: function(e, t, i, a, s) {
    e.attr(t).animate(a).attr(i).after((function() {
      return s();
    }));
  } }, { key: "animatePathsGradually", value: function(e) {
    var t = e.el, i = e.realIndex, a = e.j, s = e.fill, r = e.pathFrom, o = e.pathTo, l = e.speed, h = e.delay, c = this.w, d = 0;
    c.config.chart.animations.animateGradually.enabled && (d = c.config.chart.animations.animateGradually.delay), c.config.chart.animations.dynamicAnimation.enabled && c.globals.dataChanged && c.config.chart.type !== "bar" && (d = 0), this.morphSVG(t, i, a, c.config.chart.type !== "line" || c.globals.comboCharts ? s : "stroke", r, o, l, h * d);
  } }, { key: "showDelayedElements", value: function() {
    this.w.globals.delayedElements.forEach((function(e) {
      var t = e.el;
      t.classList.remove("apexcharts-element-hidden"), t.classList.add("apexcharts-hidden-element-shown");
    }));
  } }, { key: "animationCompleted", value: function(e) {
    var t = this.w;
    t.globals.animationEnded || (t.globals.animationEnded = !0, this.showDelayedElements(), typeof t.config.chart.events.animationEnd == "function" && t.config.chart.events.animationEnd(this.ctx, { el: e, w: t }));
  } }, { key: "morphSVG", value: function(e, t, i, a, s, r, o, l) {
    var h = this, c = this.w;
    s || (s = e.attr("pathFrom")), r || (r = e.attr("pathTo"));
    var d = function(u) {
      return c.config.chart.type === "radar" && (o = 1), "M 0 ".concat(c.globals.gridHeight);
    };
    (!s || s.indexOf("undefined") > -1 || s.indexOf("NaN") > -1) && (s = d()), (!r.trim() || r.indexOf("undefined") > -1 || r.indexOf("NaN") > -1) && (r = d()), c.globals.shouldAnimate || (o = 1), e.plot(s).animate(1, l).plot(s).animate(o, l).plot(r).after((function() {
      L.isNumber(i) ? i === c.globals.series[c.globals.maxValsInArrayIndex].length - 2 && c.globals.shouldAnimate && h.animationCompleted(e) : a !== "none" && c.globals.shouldAnimate && (!c.globals.comboCharts && t === c.globals.series.length - 1 || c.globals.comboCharts) && h.animationCompleted(e), h.showDelayedElements();
    }));
  } }]), n;
})();
const qi = {}, Ys = [];
function le(n, e) {
  if (Array.isArray(n)) for (const t of n) le(t, e);
  else if (typeof n != "object") Xs(Object.getOwnPropertyNames(e)), qi[n] = Object.assign(qi[n] || {}, e);
  else for (const t in n) le(t, n[t]);
}
function He(n) {
  return qi[n] || {};
}
function Xs(n) {
  Ys.push(...n);
}
function pa(n, e) {
  let t;
  const i = n.length, a = [];
  for (t = 0; t < i; t++) a.push(e(n[t]));
  return a;
}
function yi(n) {
  return n % 360 * Math.PI / 180;
}
function Mt(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function Lt(n, e, t, i) {
  return e != null && t != null || (i = i || n.bbox(), e == null ? e = i.width / i.height * t : t == null && (t = i.height / i.width * e)), { width: e, height: t };
}
function $i(n, e) {
  const t = n.origin;
  let i = n.ox != null ? n.ox : n.originX != null ? n.originX : "center", a = n.oy != null ? n.oy : n.originY != null ? n.originY : "center";
  t != null && ([i, a] = Array.isArray(t) ? t : typeof t == "object" ? [t.x, t.y] : [t, t]);
  const s = typeof i == "string", r = typeof a == "string";
  if (s || r) {
    const { height: o, width: l, x: h, y: c } = e.bbox();
    s && (i = i.includes("left") ? h : i.includes("right") ? h + l : h + l / 2), r && (a = a.includes("top") ? c : a.includes("bottom") ? c + o : c + o / 2);
  }
  return [i, a];
}
const so = /* @__PURE__ */ new Set(["desc", "metadata", "title"]), Zi = (n) => so.has(n.nodeName), Ns = (n, e, t = {}) => {
  const i = { ...e };
  for (const a in i) i[a].valueOf() === t[a] && delete i[a];
  Object.keys(i).length ? n.node.setAttribute("data-svgjs", JSON.stringify(i)) : (n.node.removeAttribute("data-svgjs"), n.node.removeAttribute("svgjs:data"));
}, xa = "http://www.w3.org/2000/svg", wi = "http://www.w3.org/2000/xmlns/", Pt = "http://www.w3.org/1999/xlink", de = { window: typeof window > "u" ? null : window, document: typeof document > "u" ? null : document };
function Vt() {
  return de.window;
}
let ba = class {
};
const ut = {}, ma = "___SYMBOL___ROOT___";
function Xt(n, e = xa) {
  return de.document.createElementNS(e, n);
}
function Ye(n, e = !1) {
  if (n instanceof ba) return n;
  if (typeof n == "object") return ki(n);
  if (n == null) return new ut[ma]();
  if (typeof n == "string" && n.charAt(0) !== "<") return ki(de.document.querySelector(n));
  const t = e ? de.document.createElement("div") : Xt("svg");
  return t.innerHTML = n, n = ki(t.firstChild), t.removeChild(t.firstChild), n;
}
function Ae(n, e) {
  return e && (e instanceof de.window.Node || e.ownerDocument && e instanceof e.ownerDocument.defaultView.Node) ? e : Xt(n);
}
function Be(n) {
  if (!n) return null;
  if (n.instance instanceof ba) return n.instance;
  if (n.nodeName === "#document-fragment") return new ut.Fragment(n);
  let e = Mt(n.nodeName || "Dom");
  return e === "LinearGradient" || e === "RadialGradient" ? e = "Gradient" : ut[e] || (e = "Dom"), new ut[e](n);
}
let ki = Be;
function ue(n, e = n.name, t = !1) {
  return ut[e] = n, t && (ut[ma] = n), Xs(Object.getOwnPropertyNames(n.prototype)), n;
}
let ro = 1e3;
function Hs(n) {
  return "Svgjs" + Mt(n) + ro++;
}
function Fs(n) {
  for (let e = n.children.length - 1; e >= 0; e--) Fs(n.children[e]);
  return n.id && (n.id = Hs(n.nodeName)), n;
}
function re(n, e) {
  let t, i;
  for (i = (n = Array.isArray(n) ? n : [n]).length - 1; i >= 0; i--) for (t in e) n[i].prototype[t] = e[t];
}
function we(n) {
  return function(...e) {
    const t = e[e.length - 1];
    return !t || t.constructor !== Object || t instanceof Array ? n.apply(this, e) : n.apply(this, e.slice(0, -1)).attr(t);
  };
}
le("Dom", { siblings: function() {
  return this.parent().children();
}, position: function() {
  return this.parent().index(this);
}, next: function() {
  return this.siblings()[this.position() + 1];
}, prev: function() {
  return this.siblings()[this.position() - 1];
}, forward: function() {
  const n = this.position();
  return this.parent().add(this.remove(), n + 1), this;
}, backward: function() {
  const n = this.position();
  return this.parent().add(this.remove(), n ? n - 1 : 0), this;
}, front: function() {
  return this.parent().add(this.remove()), this;
}, back: function() {
  return this.parent().add(this.remove(), 0), this;
}, before: function(n) {
  (n = Ye(n)).remove();
  const e = this.position();
  return this.parent().add(n, e), this;
}, after: function(n) {
  (n = Ye(n)).remove();
  const e = this.position();
  return this.parent().add(n, e + 1), this;
}, insertBefore: function(n) {
  return (n = Ye(n)).before(this), this;
}, insertAfter: function(n) {
  return (n = Ye(n)).after(this), this;
} });
const Ds = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i, no = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, oo = /rgb\((\d+),(\d+),(\d+)\)/, lo = /(#[a-z_][a-z0-9\-_]*)/i, ho = /\)\s*,?\s*/, co = /\s/g, Ja = /^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i, Ka = /^rgb\(/, Qa = /^(\s+)?$/, es = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, uo = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i, Qe = /[\s,]+/, va = /[MLHVCSQTAZ]/i;
function go(n) {
  const e = Math.round(n), t = Math.max(0, Math.min(255, e)).toString(16);
  return t.length === 1 ? "0" + t : t;
}
function mt(n, e) {
  for (let t = e.length; t--; ) if (n[e[t]] == null) return !1;
  return !0;
}
function Ai(n, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? n + 6 * (e - n) * t : t < 0.5 ? e : t < 2 / 3 ? n + (e - n) * (2 / 3 - t) * 6 : n;
}
le("Dom", { classes: function() {
  const n = this.attr("class");
  return n == null ? [] : n.trim().split(Qe);
}, hasClass: function(n) {
  return this.classes().indexOf(n) !== -1;
}, addClass: function(n) {
  if (!this.hasClass(n)) {
    const e = this.classes();
    e.push(n), this.attr("class", e.join(" "));
  }
  return this;
}, removeClass: function(n) {
  return this.hasClass(n) && this.attr("class", this.classes().filter((function(e) {
    return e !== n;
  })).join(" ")), this;
}, toggleClass: function(n) {
  return this.hasClass(n) ? this.removeClass(n) : this.addClass(n);
} }), le("Dom", { css: function(n, e) {
  const t = {};
  if (arguments.length === 0) return this.node.style.cssText.split(/\s*;\s*/).filter((function(i) {
    return !!i.length;
  })).forEach((function(i) {
    const a = i.split(/\s*:\s*/);
    t[a[0]] = a[1];
  })), t;
  if (arguments.length < 2) {
    if (Array.isArray(n)) {
      for (const i of n) {
        const a = i;
        t[i] = this.node.style.getPropertyValue(a);
      }
      return t;
    }
    if (typeof n == "string") return this.node.style.getPropertyValue(n);
    if (typeof n == "object") for (const i in n) this.node.style.setProperty(i, n[i] == null || Qa.test(n[i]) ? "" : n[i]);
  }
  return arguments.length === 2 && this.node.style.setProperty(n, e == null || Qa.test(e) ? "" : e), this;
}, show: function() {
  return this.css("display", "");
}, hide: function() {
  return this.css("display", "none");
}, visible: function() {
  return this.css("display") !== "none";
} }), le("Dom", { data: function(n, e, t) {
  if (n == null) return this.data(pa((function(i, a) {
    let s;
    const r = i.length, o = [];
    for (s = 0; s < r; s++) a(i[s]) && o.push(i[s]);
    return o;
  })(this.node.attributes, ((i) => i.nodeName.indexOf("data-") === 0)), ((i) => i.nodeName.slice(5))));
  if (n instanceof Array) {
    const i = {};
    for (const a of n) i[a] = this.data(a);
    return i;
  }
  if (typeof n == "object") for (e in n) this.data(e, n[e]);
  else if (arguments.length < 2) try {
    return JSON.parse(this.attr("data-" + n));
  } catch {
    return this.attr("data-" + n);
  }
  else this.attr("data-" + n, e === null ? null : t === !0 || typeof e == "string" || typeof e == "number" ? e : JSON.stringify(e));
  return this;
} }), le("Dom", { remember: function(n, e) {
  if (typeof arguments[0] == "object") for (const t in n) this.remember(t, n[t]);
  else {
    if (arguments.length === 1) return this.memory()[n];
    this.memory()[n] = e;
  }
  return this;
}, forget: function() {
  if (arguments.length === 0) this._memory = {};
  else for (let n = arguments.length - 1; n >= 0; n--) delete this.memory()[arguments[n]];
  return this;
}, memory: function() {
  return this._memory = this._memory || {};
} });
class ve {
  constructor(...e) {
    this.init(...e);
  }
  static isColor(e) {
    return e && (e instanceof ve || this.isRgb(e) || this.test(e));
  }
  static isRgb(e) {
    return e && typeof e.r == "number" && typeof e.g == "number" && typeof e.b == "number";
  }
  static random(e = "vibrant", t) {
    const { random: i, round: a, sin: s, PI: r } = Math;
    if (e === "vibrant") {
      const o = 24 * i() + 57, l = 38 * i() + 45, h = 360 * i();
      return new ve(o, l, h, "lch");
    }
    if (e === "sine") {
      const o = a(80 * s(2 * r * (t = t ?? i()) / 0.5 + 0.01) + 150), l = a(50 * s(2 * r * t / 0.5 + 4.6) + 200), h = a(100 * s(2 * r * t / 0.5 + 2.3) + 150);
      return new ve(o, l, h);
    }
    if (e === "pastel") {
      const o = 8 * i() + 86, l = 17 * i() + 9, h = 360 * i();
      return new ve(o, l, h, "lch");
    }
    if (e === "dark") {
      const o = 10 + 10 * i(), l = 50 * i() + 86, h = 360 * i();
      return new ve(o, l, h, "lch");
    }
    if (e === "rgb") {
      const o = 255 * i(), l = 255 * i(), h = 255 * i();
      return new ve(o, l, h);
    }
    if (e === "lab") {
      const o = 100 * i(), l = 256 * i() - 128, h = 256 * i() - 128;
      return new ve(o, l, h, "lab");
    }
    if (e === "grey") {
      const o = 255 * i();
      return new ve(o, o, o);
    }
    throw new Error("Unsupported random color mode");
  }
  static test(e) {
    return typeof e == "string" && (Ja.test(e) || Ka.test(e));
  }
  cmyk() {
    const { _a: e, _b: t, _c: i } = this.rgb(), [a, s, r] = [e, t, i].map(((l) => l / 255)), o = Math.min(1 - a, 1 - s, 1 - r);
    return o === 1 ? new ve(0, 0, 0, 1, "cmyk") : new ve((1 - a - o) / (1 - o), (1 - s - o) / (1 - o), (1 - r - o) / (1 - o), o, "cmyk");
  }
  hsl() {
    const { _a: e, _b: t, _c: i } = this.rgb(), [a, s, r] = [e, t, i].map(((u) => u / 255)), o = Math.max(a, s, r), l = Math.min(a, s, r), h = (o + l) / 2, c = o === l, d = o - l;
    return new ve(360 * (c ? 0 : o === a ? ((s - r) / d + (s < r ? 6 : 0)) / 6 : o === s ? ((r - a) / d + 2) / 6 : o === r ? ((a - s) / d + 4) / 6 : 0), 100 * (c ? 0 : h > 0.5 ? d / (2 - o - l) : d / (o + l)), 100 * h, "hsl");
  }
  init(e = 0, t = 0, i = 0, a = 0, s = "rgb") {
    if (e = e || 0, this.space) for (const d in this.space) delete this[this.space[d]];
    if (typeof e == "number") s = typeof a == "string" ? a : s, a = typeof a == "string" ? 0 : a, Object.assign(this, { _a: e, _b: t, _c: i, _d: a, space: s });
    else if (e instanceof Array) this.space = t || (typeof e[3] == "string" ? e[3] : e[4]) || "rgb", Object.assign(this, { _a: e[0], _b: e[1], _c: e[2], _d: e[3] || 0 });
    else if (e instanceof Object) {
      const d = (function(u, g) {
        const p = mt(u, "rgb") ? { _a: u.r, _b: u.g, _c: u.b, _d: 0, space: "rgb" } : mt(u, "xyz") ? { _a: u.x, _b: u.y, _c: u.z, _d: 0, space: "xyz" } : mt(u, "hsl") ? { _a: u.h, _b: u.s, _c: u.l, _d: 0, space: "hsl" } : mt(u, "lab") ? { _a: u.l, _b: u.a, _c: u.b, _d: 0, space: "lab" } : mt(u, "lch") ? { _a: u.l, _b: u.c, _c: u.h, _d: 0, space: "lch" } : mt(u, "cmyk") ? { _a: u.c, _b: u.m, _c: u.y, _d: u.k, space: "cmyk" } : { _a: 0, _b: 0, _c: 0, space: "rgb" };
        return p.space = g || p.space, p;
      })(e, t);
      Object.assign(this, d);
    } else if (typeof e == "string") if (Ka.test(e)) {
      const d = e.replace(co, ""), [u, g, p] = oo.exec(d).slice(1, 4).map(((f) => parseInt(f)));
      Object.assign(this, { _a: u, _b: g, _c: p, _d: 0, space: "rgb" });
    } else {
      if (!Ja.test(e)) throw Error("Unsupported string format, can't construct Color");
      {
        const d = (f) => parseInt(f, 16), [, u, g, p] = no.exec((function(f) {
          return f.length === 4 ? ["#", f.substring(1, 2), f.substring(1, 2), f.substring(2, 3), f.substring(2, 3), f.substring(3, 4), f.substring(3, 4)].join("") : f;
        })(e)).map(d);
        Object.assign(this, { _a: u, _b: g, _c: p, _d: 0, space: "rgb" });
      }
    }
    const { _a: r, _b: o, _c: l, _d: h } = this, c = this.space === "rgb" ? { r, g: o, b: l } : this.space === "xyz" ? { x: r, y: o, z: l } : this.space === "hsl" ? { h: r, s: o, l } : this.space === "lab" ? { l: r, a: o, b: l } : this.space === "lch" ? { l: r, c: o, h: l } : this.space === "cmyk" ? { c: r, m: o, y: l, k: h } : {};
    Object.assign(this, c);
  }
  lab() {
    const { x: e, y: t, z: i } = this.xyz();
    return new ve(116 * t - 16, 500 * (e - t), 200 * (t - i), "lab");
  }
  lch() {
    const { l: e, a: t, b: i } = this.lab(), a = Math.sqrt(t ** 2 + i ** 2);
    let s = 180 * Math.atan2(i, t) / Math.PI;
    return s < 0 && (s *= -1, s = 360 - s), new ve(e, a, s, "lch");
  }
  rgb() {
    if (this.space === "rgb") return this;
    if ((e = this.space) === "lab" || e === "xyz" || e === "lch") {
      let { x: t, y: i, z: a } = this;
      if (this.space === "lab" || this.space === "lch") {
        let { l: g, a: p, b: f } = this;
        if (this.space === "lch") {
          const { c: C, h: k } = this, A = Math.PI / 180;
          p = C * Math.cos(A * k), f = C * Math.sin(A * k);
        }
        const x = (g + 16) / 116, b = p / 500 + x, m = x - f / 200, y = 16 / 116, w = 8856e-6, v = 7.787;
        t = 0.95047 * (b ** 3 > w ? b ** 3 : (b - y) / v), i = 1 * (x ** 3 > w ? x ** 3 : (x - y) / v), a = 1.08883 * (m ** 3 > w ? m ** 3 : (m - y) / v);
      }
      const s = 3.2406 * t + -1.5372 * i + -0.4986 * a, r = -0.9689 * t + 1.8758 * i + 0.0415 * a, o = 0.0557 * t + -0.204 * i + 1.057 * a, l = Math.pow, h = 31308e-7, c = s > h ? 1.055 * l(s, 1 / 2.4) - 0.055 : 12.92 * s, d = r > h ? 1.055 * l(r, 1 / 2.4) - 0.055 : 12.92 * r, u = o > h ? 1.055 * l(o, 1 / 2.4) - 0.055 : 12.92 * o;
      return new ve(255 * c, 255 * d, 255 * u);
    }
    if (this.space === "hsl") {
      let { h: t, s: i, l: a } = this;
      if (t /= 360, i /= 100, a /= 100, i === 0)
        return a *= 255, new ve(a, a, a);
      const s = a < 0.5 ? a * (1 + i) : a + i - a * i, r = 2 * a - s, o = 255 * Ai(r, s, t + 1 / 3), l = 255 * Ai(r, s, t), h = 255 * Ai(r, s, t - 1 / 3);
      return new ve(o, l, h);
    }
    if (this.space === "cmyk") {
      const { c: t, m: i, y: a, k: s } = this, r = 255 * (1 - Math.min(1, t * (1 - s) + s)), o = 255 * (1 - Math.min(1, i * (1 - s) + s)), l = 255 * (1 - Math.min(1, a * (1 - s) + s));
      return new ve(r, o, l);
    }
    return this;
    var e;
  }
  toArray() {
    const { _a: e, _b: t, _c: i, _d: a, space: s } = this;
    return [e, t, i, a, s];
  }
  toHex() {
    const [e, t, i] = this._clamped().map(go);
    return `#${e}${t}${i}`;
  }
  toRgb() {
    const [e, t, i] = this._clamped();
    return `rgb(${e},${t},${i})`;
  }
  toString() {
    return this.toHex();
  }
  xyz() {
    const { _a: e, _b: t, _c: i } = this.rgb(), [a, s, r] = [e, t, i].map(((x) => x / 255)), o = a > 0.04045 ? Math.pow((a + 0.055) / 1.055, 2.4) : a / 12.92, l = s > 0.04045 ? Math.pow((s + 0.055) / 1.055, 2.4) : s / 12.92, h = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92, c = (0.4124 * o + 0.3576 * l + 0.1805 * h) / 0.95047, d = (0.2126 * o + 0.7152 * l + 0.0722 * h) / 1, u = (0.0193 * o + 0.1192 * l + 0.9505 * h) / 1.08883, g = c > 8856e-6 ? Math.pow(c, 1 / 3) : 7.787 * c + 16 / 116, p = d > 8856e-6 ? Math.pow(d, 1 / 3) : 7.787 * d + 16 / 116, f = u > 8856e-6 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116;
    return new ve(g, p, f, "xyz");
  }
  _clamped() {
    const { _a: e, _b: t, _c: i } = this.rgb(), { max: a, min: s, round: r } = Math;
    return [e, t, i].map(((o) => a(0, s(r(o), 255))));
  }
}
class fe {
  constructor(...e) {
    this.init(...e);
  }
  clone() {
    return new fe(this);
  }
  init(e, t) {
    const s = Array.isArray(e) ? { x: e[0], y: e[1] } : typeof e == "object" ? { x: e.x, y: e.y } : { x: e, y: t };
    return this.x = s.x == null ? 0 : s.x, this.y = s.y == null ? 0 : s.y, this;
  }
  toArray() {
    return [this.x, this.y];
  }
  transform(e) {
    return this.clone().transformO(e);
  }
  transformO(e) {
    ie.isMatrixLike(e) || (e = new ie(e));
    const { x: t, y: i } = this;
    return this.x = e.a * t + e.c * i + e.e, this.y = e.b * t + e.d * i + e.f, this;
  }
}
function vt(n, e, t) {
  return Math.abs(e - n) < 1e-6;
}
class ie {
  constructor(...e) {
    this.init(...e);
  }
  static formatTransforms(e) {
    const t = e.flip === "both" || e.flip === !0, i = e.flip && (t || e.flip === "x") ? -1 : 1, a = e.flip && (t || e.flip === "y") ? -1 : 1, s = e.skew && e.skew.length ? e.skew[0] : isFinite(e.skew) ? e.skew : isFinite(e.skewX) ? e.skewX : 0, r = e.skew && e.skew.length ? e.skew[1] : isFinite(e.skew) ? e.skew : isFinite(e.skewY) ? e.skewY : 0, o = e.scale && e.scale.length ? e.scale[0] * i : isFinite(e.scale) ? e.scale * i : isFinite(e.scaleX) ? e.scaleX * i : i, l = e.scale && e.scale.length ? e.scale[1] * a : isFinite(e.scale) ? e.scale * a : isFinite(e.scaleY) ? e.scaleY * a : a, h = e.shear || 0, c = e.rotate || e.theta || 0, d = new fe(e.origin || e.around || e.ox || e.originX, e.oy || e.originY), u = d.x, g = d.y, p = new fe(e.position || e.px || e.positionX || NaN, e.py || e.positionY || NaN), f = p.x, x = p.y, b = new fe(e.translate || e.tx || e.translateX, e.ty || e.translateY), m = b.x, y = b.y, w = new fe(e.relative || e.rx || e.relativeX, e.ry || e.relativeY);
    return { scaleX: o, scaleY: l, skewX: s, skewY: r, shear: h, theta: c, rx: w.x, ry: w.y, tx: m, ty: y, ox: u, oy: g, px: f, py: x };
  }
  static fromArray(e) {
    return { a: e[0], b: e[1], c: e[2], d: e[3], e: e[4], f: e[5] };
  }
  static isMatrixLike(e) {
    return e.a != null || e.b != null || e.c != null || e.d != null || e.e != null || e.f != null;
  }
  static matrixMultiply(e, t, i) {
    const a = e.a * t.a + e.c * t.b, s = e.b * t.a + e.d * t.b, r = e.a * t.c + e.c * t.d, o = e.b * t.c + e.d * t.d, l = e.e + e.a * t.e + e.c * t.f, h = e.f + e.b * t.e + e.d * t.f;
    return i.a = a, i.b = s, i.c = r, i.d = o, i.e = l, i.f = h, i;
  }
  around(e, t, i) {
    return this.clone().aroundO(e, t, i);
  }
  aroundO(e, t, i) {
    const a = e || 0, s = t || 0;
    return this.translateO(-a, -s).lmultiplyO(i).translateO(a, s);
  }
  clone() {
    return new ie(this);
  }
  decompose(e = 0, t = 0) {
    const i = this.a, a = this.b, s = this.c, r = this.d, o = this.e, l = this.f, h = i * r - a * s, c = h > 0 ? 1 : -1, d = c * Math.sqrt(i * i + a * a), u = Math.atan2(c * a, c * i), g = 180 / Math.PI * u, p = Math.cos(u), f = Math.sin(u), x = (i * s + a * r) / h, b = s * d / (x * i - a) || r * d / (x * a + i);
    return { scaleX: d, scaleY: b, shear: x, rotate: g, translateX: o - e + e * p * d + t * (x * p * d - f * b), translateY: l - t + e * f * d + t * (x * f * d + p * b), originX: e, originY: t, a: this.a, b: this.b, c: this.c, d: this.d, e: this.e, f: this.f };
  }
  equals(e) {
    if (e === this) return !0;
    const t = new ie(e);
    return vt(this.a, t.a) && vt(this.b, t.b) && vt(this.c, t.c) && vt(this.d, t.d) && vt(this.e, t.e) && vt(this.f, t.f);
  }
  flip(e, t) {
    return this.clone().flipO(e, t);
  }
  flipO(e, t) {
    return e === "x" ? this.scaleO(-1, 1, t, 0) : e === "y" ? this.scaleO(1, -1, 0, t) : this.scaleO(-1, -1, e, t || e);
  }
  init(e) {
    const t = ie.fromArray([1, 0, 0, 1, 0, 0]);
    return e = e instanceof Oe ? e.matrixify() : typeof e == "string" ? ie.fromArray(e.split(Qe).map(parseFloat)) : Array.isArray(e) ? ie.fromArray(e) : typeof e == "object" && ie.isMatrixLike(e) ? e : typeof e == "object" ? new ie().transform(e) : arguments.length === 6 ? ie.fromArray([].slice.call(arguments)) : t, this.a = e.a != null ? e.a : t.a, this.b = e.b != null ? e.b : t.b, this.c = e.c != null ? e.c : t.c, this.d = e.d != null ? e.d : t.d, this.e = e.e != null ? e.e : t.e, this.f = e.f != null ? e.f : t.f, this;
  }
  inverse() {
    return this.clone().inverseO();
  }
  inverseO() {
    const e = this.a, t = this.b, i = this.c, a = this.d, s = this.e, r = this.f, o = e * a - t * i;
    if (!o) throw new Error("Cannot invert " + this);
    const l = a / o, h = -t / o, c = -i / o, d = e / o, u = -(l * s + c * r), g = -(h * s + d * r);
    return this.a = l, this.b = h, this.c = c, this.d = d, this.e = u, this.f = g, this;
  }
  lmultiply(e) {
    return this.clone().lmultiplyO(e);
  }
  lmultiplyO(e) {
    const t = e instanceof ie ? e : new ie(e);
    return ie.matrixMultiply(t, this, this);
  }
  multiply(e) {
    return this.clone().multiplyO(e);
  }
  multiplyO(e) {
    const t = e instanceof ie ? e : new ie(e);
    return ie.matrixMultiply(this, t, this);
  }
  rotate(e, t, i) {
    return this.clone().rotateO(e, t, i);
  }
  rotateO(e, t = 0, i = 0) {
    e = yi(e);
    const a = Math.cos(e), s = Math.sin(e), { a: r, b: o, c: l, d: h, e: c, f: d } = this;
    return this.a = r * a - o * s, this.b = o * a + r * s, this.c = l * a - h * s, this.d = h * a + l * s, this.e = c * a - d * s + i * s - t * a + t, this.f = d * a + c * s - t * s - i * a + i, this;
  }
  scale() {
    return this.clone().scaleO(...arguments);
  }
  scaleO(e, t = e, i = 0, a = 0) {
    arguments.length === 3 && (a = i, i = t, t = e);
    const { a: s, b: r, c: o, d: l, e: h, f: c } = this;
    return this.a = s * e, this.b = r * t, this.c = o * e, this.d = l * t, this.e = h * e - i * e + i, this.f = c * t - a * t + a, this;
  }
  shear(e, t, i) {
    return this.clone().shearO(e, t, i);
  }
  shearO(e, t = 0, i = 0) {
    const { a, b: s, c: r, d: o, e: l, f: h } = this;
    return this.a = a + s * e, this.c = r + o * e, this.e = l + h * e - i * e, this;
  }
  skew() {
    return this.clone().skewO(...arguments);
  }
  skewO(e, t = e, i = 0, a = 0) {
    arguments.length === 3 && (a = i, i = t, t = e), e = yi(e), t = yi(t);
    const s = Math.tan(e), r = Math.tan(t), { a: o, b: l, c: h, d: c, e: d, f: u } = this;
    return this.a = o + l * s, this.b = l + o * r, this.c = h + c * s, this.d = c + h * r, this.e = d + u * s - a * s, this.f = u + d * r - i * r, this;
  }
  skewX(e, t, i) {
    return this.skew(e, 0, t, i);
  }
  skewY(e, t, i) {
    return this.skew(0, e, t, i);
  }
  toArray() {
    return [this.a, this.b, this.c, this.d, this.e, this.f];
  }
  toString() {
    return "matrix(" + this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.e + "," + this.f + ")";
  }
  transform(e) {
    if (ie.isMatrixLike(e))
      return new ie(e).multiplyO(this);
    const t = ie.formatTransforms(e), { x: i, y: a } = new fe(t.ox, t.oy).transform(this), s = new ie().translateO(t.rx, t.ry).lmultiplyO(this).translateO(-i, -a).scaleO(t.scaleX, t.scaleY).skewO(t.skewX, t.skewY).shearO(t.shear).rotateO(t.theta).translateO(i, a);
    if (isFinite(t.px) || isFinite(t.py)) {
      const r = new fe(i, a).transform(s), o = isFinite(t.px) ? t.px - r.x : 0, l = isFinite(t.py) ? t.py - r.y : 0;
      s.translateO(o, l);
    }
    return s.translateO(t.tx, t.ty), s;
  }
  translate(e, t) {
    return this.clone().translateO(e, t);
  }
  translateO(e, t) {
    return this.e += e || 0, this.f += t || 0, this;
  }
  valueOf() {
    return { a: this.a, b: this.b, c: this.c, d: this.d, e: this.e, f: this.f };
  }
}
function et() {
  if (!et.nodes) {
    const n = Ye().size(2, 0);
    n.node.style.cssText = ["opacity: 0", "position: absolute", "left: -100%", "top: -100%", "overflow: hidden"].join(";"), n.attr("focusable", "false"), n.attr("aria-hidden", "true");
    const e = n.path().node;
    et.nodes = { svg: n, path: e };
  }
  if (!et.nodes.svg.node.parentNode) {
    const n = de.document.body || de.document.documentElement;
    et.nodes.svg.addTo(n);
  }
  return et.nodes;
}
function Ws(n) {
  return !(n.width || n.height || n.x || n.y);
}
ue(ie, "Matrix");
class Me {
  constructor(...e) {
    this.init(...e);
  }
  addOffset() {
    return this.x += de.window.pageXOffset, this.y += de.window.pageYOffset, new Me(this);
  }
  init(e) {
    return e = typeof e == "string" ? e.split(Qe).map(parseFloat) : Array.isArray(e) ? e : typeof e == "object" ? [e.left != null ? e.left : e.x, e.top != null ? e.top : e.y, e.width, e.height] : arguments.length === 4 ? [].slice.call(arguments) : [0, 0, 0, 0], this.x = e[0] || 0, this.y = e[1] || 0, this.width = this.w = e[2] || 0, this.height = this.h = e[3] || 0, this.x2 = this.x + this.w, this.y2 = this.y + this.h, this.cx = this.x + this.w / 2, this.cy = this.y + this.h / 2, this;
  }
  isNulled() {
    return Ws(this);
  }
  merge(e) {
    const t = Math.min(this.x, e.x), i = Math.min(this.y, e.y), a = Math.max(this.x + this.width, e.x + e.width) - t, s = Math.max(this.y + this.height, e.y + e.height) - i;
    return new Me(t, i, a, s);
  }
  toArray() {
    return [this.x, this.y, this.width, this.height];
  }
  toString() {
    return this.x + " " + this.y + " " + this.width + " " + this.height;
  }
  transform(e) {
    e instanceof ie || (e = new ie(e));
    let t = 1 / 0, i = -1 / 0, a = 1 / 0, s = -1 / 0;
    return [new fe(this.x, this.y), new fe(this.x2, this.y), new fe(this.x, this.y2), new fe(this.x2, this.y2)].forEach((function(r) {
      r = r.transform(e), t = Math.min(t, r.x), i = Math.max(i, r.x), a = Math.min(a, r.y), s = Math.max(s, r.y);
    })), new Me(t, a, i - t, s - a);
  }
}
function ts(n, e, t) {
  let i;
  try {
    if (i = e(n.node), Ws(i) && (a = n.node) !== de.document && !(de.document.documentElement.contains || function(s) {
      for (; s.parentNode; ) s = s.parentNode;
      return s === de.document;
    }).call(de.document.documentElement, a)) throw new Error("Element not in the dom");
  } catch {
    i = t(n);
  }
  var a;
  return i;
}
le({ viewbox: { viewbox(n, e, t, i) {
  return n == null ? new Me(this.attr("viewBox")) : this.attr("viewBox", new Me(n, e, t, i));
}, zoom(n, e) {
  let { width: t, height: i } = this.attr(["width", "height"]);
  if ((t || i) && typeof t != "string" && typeof i != "string" || (t = this.node.clientWidth, i = this.node.clientHeight), !t || !i) throw new Error("Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element");
  const a = this.viewbox(), s = t / a.width, r = i / a.height, o = Math.min(s, r);
  if (n == null) return o;
  let l = o / n;
  l === 1 / 0 && (l = Number.MAX_SAFE_INTEGER / 100), e = e || new fe(t / 2 / s + a.x, i / 2 / r + a.y);
  const h = new Me(a).transform(new ie({ scale: l, origin: e }));
  return this.viewbox(h);
} } }), ue(Me, "Box");
class gt extends Array {
  constructor(e = [], ...t) {
    if (super(e, ...t), typeof e == "number") return this;
    this.length = 0, this.push(...e);
  }
}
re([gt], { each(n, ...e) {
  return typeof n == "function" ? this.map(((t, i, a) => n.call(t, t, i, a))) : this.map(((t) => t[n](...e)));
}, toArray() {
  return Array.prototype.concat.apply([], this);
} });
const fo = ["toArray", "constructor", "each"];
function pt(n, e) {
  return new gt(pa((e || de.document).querySelectorAll(n), (function(t) {
    return Be(t);
  })));
}
gt.extend = function(n) {
  n = n.reduce(((e, t) => (fo.includes(t) || t[0] === "_" || (t in Array.prototype && (e["$" + t] = Array.prototype[t]), e[t] = function(...i) {
    return this.each(t, ...i);
  }), e)), {}), re([gt], n);
};
let po = 0;
const js = {};
function Bs(n) {
  let e = n.getEventHolder();
  return e === de.window && (e = js), e.events || (e.events = {}), e.events;
}
function ya(n) {
  return n.getEventTarget();
}
function Ke(n, e, t, i, a) {
  const s = t.bind(i || n), r = Ye(n), o = Bs(r), l = ya(r);
  e = Array.isArray(e) ? e : e.split(Qe), t._svgjsListenerId || (t._svgjsListenerId = ++po), e.forEach((function(h) {
    const c = h.split(".")[0], d = h.split(".")[1] || "*";
    o[c] = o[c] || {}, o[c][d] = o[c][d] || {}, o[c][d][t._svgjsListenerId] = s, l.addEventListener(c, s, a || !1);
  }));
}
function Ge(n, e, t, i) {
  const a = Ye(n), s = Bs(a), r = ya(a);
  (typeof t != "function" || (t = t._svgjsListenerId)) && (e = Array.isArray(e) ? e : (e || "").split(Qe)).forEach((function(o) {
    const l = o && o.split(".")[0], h = o && o.split(".")[1];
    let c, d;
    if (t) s[l] && s[l][h || "*"] && (r.removeEventListener(l, s[l][h || "*"][t], i || !1), delete s[l][h || "*"][t]);
    else if (l && h) {
      if (s[l] && s[l][h]) {
        for (d in s[l][h]) Ge(r, [l, h].join("."), d);
        delete s[l][h];
      }
    } else if (h) for (o in s) for (c in s[o]) h === c && Ge(r, [o, h].join("."));
    else if (l) {
      if (s[l]) {
        for (c in s[l]) Ge(r, [l, c].join("."));
        delete s[l];
      }
    } else {
      for (o in s) Ge(r, o);
      (function(u) {
        let g = u.getEventHolder();
        g === de.window && (g = js), g.events && (g.events = {});
      })(a);
    }
  }));
}
class Ut extends ba {
  addEventListener() {
  }
  dispatch(e, t, i) {
    return (function(a, s, r, o) {
      const l = ya(a);
      return s instanceof de.window.Event || (s = new de.window.CustomEvent(s, { detail: r, cancelable: !0, ...o })), l.dispatchEvent(s), s;
    })(this, e, t, i);
  }
  dispatchEvent(e) {
    const t = this.getEventHolder().events;
    if (!t) return !0;
    const i = t[e.type];
    for (const a in i) for (const s in i[a]) i[a][s](e);
    return !e.defaultPrevented;
  }
  fire(e, t, i) {
    return this.dispatch(e, t, i), this;
  }
  getEventHolder() {
    return this;
  }
  getEventTarget() {
    return this;
  }
  off(e, t, i) {
    return Ge(this, e, t, i), this;
  }
  on(e, t, i, a) {
    return Ke(this, e, t, i, a), this;
  }
  removeEventListener() {
  }
}
function is() {
}
ue(Ut, "EventTarget");
const Ci = 400, xo = ">", bo = 0, mo = { "fill-opacity": 1, "stroke-opacity": 1, "stroke-width": 0, "stroke-linejoin": "miter", "stroke-linecap": "butt", fill: "#000000", stroke: "#000000", opacity: 1, x: 0, y: 0, cx: 0, cy: 0, width: 0, height: 0, r: 0, rx: 0, ry: 0, offset: 0, "stop-opacity": 1, "stop-color": "#000000", "text-anchor": "start" };
class ft extends Array {
  constructor(...e) {
    super(...e), this.init(...e);
  }
  clone() {
    return new this.constructor(this);
  }
  init(e) {
    return typeof e == "number" || (this.length = 0, this.push(...this.parse(e))), this;
  }
  parse(e = []) {
    return e instanceof Array ? e : e.trim().split(Qe).map(parseFloat);
  }
  toArray() {
    return Array.prototype.concat.apply([], this);
  }
  toSet() {
    return new Set(this);
  }
  toString() {
    return this.join(" ");
  }
  valueOf() {
    const e = [];
    return e.push(...this), e;
  }
}
class oe {
  constructor(...e) {
    this.init(...e);
  }
  convert(e) {
    return new oe(this.value, e);
  }
  divide(e) {
    return e = new oe(e), new oe(this / e, this.unit || e.unit);
  }
  init(e, t) {
    return t = Array.isArray(e) ? e[1] : t, e = Array.isArray(e) ? e[0] : e, this.value = 0, this.unit = t || "", typeof e == "number" ? this.value = isNaN(e) ? 0 : isFinite(e) ? e : e < 0 ? -34e37 : 34e37 : typeof e == "string" ? (t = e.match(Ds)) && (this.value = parseFloat(t[1]), t[5] === "%" ? this.value /= 100 : t[5] === "s" && (this.value *= 1e3), this.unit = t[5]) : e instanceof oe && (this.value = e.valueOf(), this.unit = e.unit), this;
  }
  minus(e) {
    return e = new oe(e), new oe(this - e, this.unit || e.unit);
  }
  plus(e) {
    return e = new oe(e), new oe(this + e, this.unit || e.unit);
  }
  times(e) {
    return e = new oe(e), new oe(this * e, this.unit || e.unit);
  }
  toArray() {
    return [this.value, this.unit];
  }
  toJSON() {
    return this.toString();
  }
  toString() {
    return (this.unit === "%" ? ~~(1e8 * this.value) / 1e6 : this.unit === "s" ? this.value / 1e3 : this.value) + this.unit;
  }
  valueOf() {
    return this.value;
  }
}
const vo = /* @__PURE__ */ new Set(["fill", "stroke", "color", "bgcolor", "stop-color", "flood-color", "lighting-color"]), Gs = [];
class it extends Ut {
  constructor(e, t) {
    super(), this.node = e, this.type = e.nodeName, t && e !== t && this.attr(t);
  }
  add(e, t) {
    return (e = Ye(e)).removeNamespace && this.node instanceof de.window.SVGElement && e.removeNamespace(), t == null ? this.node.appendChild(e.node) : e.node !== this.node.childNodes[t] && this.node.insertBefore(e.node, this.node.childNodes[t]), this;
  }
  addTo(e, t) {
    return Ye(e).put(this, t);
  }
  children() {
    return new gt(pa(this.node.children, (function(e) {
      return Be(e);
    })));
  }
  clear() {
    for (; this.node.hasChildNodes(); ) this.node.removeChild(this.node.lastChild);
    return this;
  }
  clone(e = !0, t = !0) {
    this.writeDataToDom();
    let i = this.node.cloneNode(e);
    return t && (i = Fs(i)), new this.constructor(i);
  }
  each(e, t) {
    const i = this.children();
    let a, s;
    for (a = 0, s = i.length; a < s; a++) e.apply(i[a], [a, i]), t && i[a].each(e, t);
    return this;
  }
  element(e, t) {
    return this.put(new it(Xt(e), t));
  }
  first() {
    return Be(this.node.firstChild);
  }
  get(e) {
    return Be(this.node.childNodes[e]);
  }
  getEventHolder() {
    return this.node;
  }
  getEventTarget() {
    return this.node;
  }
  has(e) {
    return this.index(e) >= 0;
  }
  html(e, t) {
    return this.xml(e, t, "http://www.w3.org/1999/xhtml");
  }
  id(e) {
    return e !== void 0 || this.node.id || (this.node.id = Hs(this.type)), this.attr("id", e);
  }
  index(e) {
    return [].slice.call(this.node.childNodes).indexOf(e.node);
  }
  last() {
    return Be(this.node.lastChild);
  }
  matches(e) {
    const t = this.node, i = t.matches || t.matchesSelector || t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.oMatchesSelector || null;
    return i && i.call(t, e);
  }
  parent(e) {
    let t = this;
    if (!t.node.parentNode) return null;
    if (t = Be(t.node.parentNode), !e) return t;
    do
      if (typeof e == "string" ? t.matches(e) : t instanceof e) return t;
    while (t = Be(t.node.parentNode));
    return t;
  }
  put(e, t) {
    return e = Ye(e), this.add(e, t), e;
  }
  putIn(e, t) {
    return Ye(e).add(this, t);
  }
  remove() {
    return this.parent() && this.parent().removeElement(this), this;
  }
  removeElement(e) {
    return this.node.removeChild(e.node), this;
  }
  replace(e) {
    return e = Ye(e), this.node.parentNode && this.node.parentNode.replaceChild(e.node, this.node), e;
  }
  round(e = 2, t = null) {
    const i = 10 ** e, a = this.attr(t);
    for (const s in a) typeof a[s] == "number" && (a[s] = Math.round(a[s] * i) / i);
    return this.attr(a), this;
  }
  svg(e, t) {
    return this.xml(e, t, xa);
  }
  toString() {
    return this.id();
  }
  words(e) {
    return this.node.textContent = e, this;
  }
  wrap(e) {
    const t = this.parent();
    if (!t) return this.addTo(e);
    const i = t.index(this);
    return t.put(e, i).put(this);
  }
  writeDataToDom() {
    return this.each((function() {
      this.writeDataToDom();
    })), this;
  }
  xml(e, t, i) {
    if (typeof e == "boolean" && (i = t, t = e, e = null), e == null || typeof e == "function") {
      t = t == null || t, this.writeDataToDom();
      let o = this;
      if (e != null) {
        if (o = Be(o.node.cloneNode(!0)), t) {
          const l = e(o);
          if (o = l || o, l === !1) return "";
        }
        o.each((function() {
          const l = e(this), h = l || this;
          l === !1 ? this.remove() : l && this !== h && this.replace(h);
        }), !0);
      }
      return t ? o.node.outerHTML : o.node.innerHTML;
    }
    t = t != null && t;
    const a = Xt("wrapper", i), s = de.document.createDocumentFragment();
    a.innerHTML = e;
    for (let o = a.children.length; o--; ) s.appendChild(a.firstElementChild);
    const r = this.parent();
    return t ? this.replace(s) && r : this.add(s);
  }
}
re(it, { attr: function(n, e, t) {
  if (n == null) {
    n = {}, e = this.node.attributes;
    for (const i of e) n[i.nodeName] = es.test(i.nodeValue) ? parseFloat(i.nodeValue) : i.nodeValue;
    return n;
  }
  if (n instanceof Array) return n.reduce(((i, a) => (i[a] = this.attr(a), i)), {});
  if (typeof n == "object" && n.constructor === Object) for (e in n) this.attr(e, n[e]);
  else if (e === null) this.node.removeAttribute(n);
  else {
    if (e == null) return (e = this.node.getAttribute(n)) == null ? mo[n] : es.test(e) ? parseFloat(e) : e;
    typeof (e = Gs.reduce(((i, a) => a(n, i, this)), e)) == "number" ? e = new oe(e) : vo.has(n) && ve.isColor(e) ? e = new ve(e) : e.constructor === Array && (e = new ft(e)), n === "leading" ? this.leading && this.leading(e) : typeof t == "string" ? this.node.setAttributeNS(t, n, e.toString()) : this.node.setAttribute(n, e.toString()), !this.rebuild || n !== "font-size" && n !== "x" || this.rebuild();
  }
  return this;
}, find: function(n) {
  return pt(n, this.node);
}, findOne: function(n) {
  return Be(this.node.querySelector(n));
} }), ue(it, "Dom");
let Oe = class extends it {
  constructor(n, e) {
    super(n, e), this.dom = {}, this.node.instance = this, (n.hasAttribute("data-svgjs") || n.hasAttribute("svgjs:data")) && this.setData(JSON.parse(n.getAttribute("data-svgjs")) ?? JSON.parse(n.getAttribute("svgjs:data")) ?? {});
  }
  center(n, e) {
    return this.cx(n).cy(e);
  }
  cx(n) {
    return n == null ? this.x() + this.width() / 2 : this.x(n - this.width() / 2);
  }
  cy(n) {
    return n == null ? this.y() + this.height() / 2 : this.y(n - this.height() / 2);
  }
  defs() {
    const n = this.root();
    return n && n.defs();
  }
  dmove(n, e) {
    return this.dx(n).dy(e);
  }
  dx(n = 0) {
    return this.x(new oe(n).plus(this.x()));
  }
  dy(n = 0) {
    return this.y(new oe(n).plus(this.y()));
  }
  getEventHolder() {
    return this;
  }
  height(n) {
    return this.attr("height", n);
  }
  move(n, e) {
    return this.x(n).y(e);
  }
  parents(n = this.root()) {
    const e = typeof n == "string";
    e || (n = Ye(n));
    const t = new gt();
    let i = this;
    for (; (i = i.parent()) && i.node !== de.document && i.nodeName !== "#document-fragment" && (t.push(i), e || i.node !== n.node) && (!e || !i.matches(n)); ) if (i.node === this.root().node) return null;
    return t;
  }
  reference(n) {
    if (!(n = this.attr(n))) return null;
    const e = (n + "").match(lo);
    return e ? Ye(e[1]) : null;
  }
  root() {
    const n = this.parent((function(e) {
      return ut[e];
    })(ma));
    return n && n.root();
  }
  setData(n) {
    return this.dom = n, this;
  }
  size(n, e) {
    const t = Lt(this, n, e);
    return this.width(new oe(t.width)).height(new oe(t.height));
  }
  width(n) {
    return this.attr("width", n);
  }
  writeDataToDom() {
    return Ns(this, this.dom), super.writeDataToDom();
  }
  x(n) {
    return this.attr("x", n);
  }
  y(n) {
    return this.attr("y", n);
  }
};
re(Oe, { bbox: function() {
  const n = ts(this, ((e) => e.getBBox()), ((e) => {
    try {
      const t = e.clone().addTo(et().svg).show(), i = t.node.getBBox();
      return t.remove(), i;
    } catch (t) {
      throw new Error(`Getting bbox of element "${e.node.nodeName}" is not possible: ${t.toString()}`);
    }
  }));
  return new Me(n);
}, rbox: function(n) {
  const e = ts(this, ((i) => i.getBoundingClientRect()), ((i) => {
    throw new Error(`Getting rbox of element "${i.node.nodeName}" is not possible`);
  })), t = new Me(e);
  return n ? t.transform(n.screenCTM().inverseO()) : t.addOffset();
}, inside: function(n, e) {
  const t = this.bbox();
  return n > t.x && e > t.y && n < t.x + t.width && e < t.y + t.height;
}, point: function(n, e) {
  return new fe(n, e).transformO(this.screenCTM().inverseO());
}, ctm: function() {
  return new ie(this.node.getCTM());
}, screenCTM: function() {
  try {
    if (typeof this.isRoot == "function" && !this.isRoot()) {
      const n = this.rect(1, 1), e = n.node.getScreenCTM();
      return n.remove(), new ie(e);
    }
    return new ie(this.node.getScreenCTM());
  } catch {
    return console.warn(`Cannot get CTM from SVG node ${this.node.nodeName}. Is the element rendered?`), new ie();
  }
} }), ue(Oe, "Element");
const Ot = { stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"], fill: ["color", "opacity", "rule"], prefix: function(n, e) {
  return e === "color" ? n : n + "-" + e;
} };
["fill", "stroke"].forEach((function(n) {
  const e = {};
  let t;
  e[n] = function(i) {
    if (i === void 0) return this.attr(n);
    if (typeof i == "string" || i instanceof ve || ve.isRgb(i) || i instanceof Oe) this.attr(n, i);
    else for (t = Ot[n].length - 1; t >= 0; t--) i[Ot[n][t]] != null && this.attr(Ot.prefix(n, Ot[n][t]), i[Ot[n][t]]);
    return this;
  }, le(["Element", "Runner"], e);
})), le(["Element", "Runner"], { matrix: function(n, e, t, i, a, s) {
  return n == null ? new ie(this) : this.attr("transform", new ie(n, e, t, i, a, s));
}, rotate: function(n, e, t) {
  return this.transform({ rotate: n, ox: e, oy: t }, !0);
}, skew: function(n, e, t, i) {
  return arguments.length === 1 || arguments.length === 3 ? this.transform({ skew: n, ox: e, oy: t }, !0) : this.transform({ skew: [n, e], ox: t, oy: i }, !0);
}, shear: function(n, e, t) {
  return this.transform({ shear: n, ox: e, oy: t }, !0);
}, scale: function(n, e, t, i) {
  return arguments.length === 1 || arguments.length === 3 ? this.transform({ scale: n, ox: e, oy: t }, !0) : this.transform({ scale: [n, e], ox: t, oy: i }, !0);
}, translate: function(n, e) {
  return this.transform({ translate: [n, e] }, !0);
}, relative: function(n, e) {
  return this.transform({ relative: [n, e] }, !0);
}, flip: function(n = "both", e = "center") {
  return "xybothtrue".indexOf(n) === -1 && (e = n, n = "both"), this.transform({ flip: n, origin: e }, !0);
}, opacity: function(n) {
  return this.attr("opacity", n);
} }), le("radius", { radius: function(n, e = n) {
  return (this._element || this).type === "radialGradient" ? this.attr("r", new oe(n)) : this.rx(n).ry(e);
} }), le("Path", { length: function() {
  return this.node.getTotalLength();
}, pointAt: function(n) {
  return new fe(this.node.getPointAtLength(n));
} }), le(["Element", "Runner"], { font: function(n, e) {
  if (typeof n == "object") {
    for (e in n) this.font(e, n[e]);
    return this;
  }
  return n === "leading" ? this.leading(e) : n === "anchor" ? this.attr("text-anchor", e) : n === "size" || n === "family" || n === "weight" || n === "stretch" || n === "variant" || n === "style" ? this.attr("font-" + n, e) : this.attr(n, e);
} });
le("Element", ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "mouseenter", "mouseleave", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel", "contextmenu", "wheel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel"].reduce((function(n, e) {
  return n[e] = function(t) {
    return t === null ? this.off(e) : this.on(e, t), this;
  }, n;
}), {})), le("Element", { untransform: function() {
  return this.attr("transform", null);
}, matrixify: function() {
  return (this.attr("transform") || "").split(ho).slice(0, -1).map((function(e) {
    const t = e.trim().split("(");
    return [t[0], t[1].split(Qe).map((function(i) {
      return parseFloat(i);
    }))];
  })).reverse().reduce((function(e, t) {
    return t[0] === "matrix" ? e.lmultiply(ie.fromArray(t[1])) : e[t[0]].apply(e, t[1]);
  }), new ie());
}, toParent: function(n, e) {
  if (this === n) return this;
  if (Zi(this.node)) return this.addTo(n, e);
  const t = this.screenCTM(), i = n.screenCTM().inverse();
  return this.addTo(n, e).untransform().transform(i.multiply(t)), this;
}, toRoot: function(n) {
  return this.toParent(this.root(), n);
}, transform: function(n, e) {
  if (n == null || typeof n == "string") {
    const i = new ie(this).decompose();
    return n == null ? i : i[n];
  }
  ie.isMatrixLike(n) || (n = { ...n, origin: $i(n, this) });
  const t = new ie(e === !0 ? this : e || !1).transform(n);
  return this.attr("transform", t);
} });
class Xe extends Oe {
  flatten() {
    return this.each((function() {
      if (this instanceof Xe) return this.flatten().ungroup();
    })), this;
  }
  ungroup(e = this.parent(), t = e.index(this)) {
    return t = t === -1 ? e.children().length : t, this.each((function(i, a) {
      return a[a.length - i - 1].toParent(e, t);
    })), this.remove();
  }
}
ue(Xe, "Container");
class ui extends Xe {
  constructor(e, t = e) {
    super(Ae("defs", e), t);
  }
  flatten() {
    return this;
  }
  ungroup() {
    return this;
  }
}
ue(ui, "Defs");
class De extends Oe {
}
function wa(n) {
  return this.attr("rx", n);
}
function ka(n) {
  return this.attr("ry", n);
}
function Vs(n) {
  return n == null ? this.cx() - this.rx() : this.cx(n + this.rx());
}
function Us(n) {
  return n == null ? this.cy() - this.ry() : this.cy(n + this.ry());
}
function qs(n) {
  return this.attr("cx", n);
}
function $s(n) {
  return this.attr("cy", n);
}
function Zs(n) {
  return n == null ? 2 * this.rx() : this.rx(new oe(n).divide(2));
}
function Js(n) {
  return n == null ? 2 * this.ry() : this.ry(new oe(n).divide(2));
}
ue(De, "Shape");
var yo = Object.freeze({ __proto__: null, cx: qs, cy: $s, height: Js, rx: wa, ry: ka, width: Zs, x: Vs, y: Us });
class ii extends De {
  constructor(e, t = e) {
    super(Ae("ellipse", e), t);
  }
  size(e, t) {
    const i = Lt(this, e, t);
    return this.rx(new oe(i.width).divide(2)).ry(new oe(i.height).divide(2));
  }
}
re(ii, yo), le("Container", { ellipse: we((function(n = 0, e = n) {
  return this.put(new ii()).size(n, e).move(0, 0);
})) }), ue(ii, "Ellipse");
class Ks extends it {
  constructor(e = de.document.createDocumentFragment()) {
    super(e);
  }
  xml(e, t, i) {
    if (typeof e == "boolean" && (i = t, t = e, e = null), e == null || typeof e == "function") {
      const a = new it(Xt("wrapper", i));
      return a.add(this.node.cloneNode(!0)), a.xml(!1, i);
    }
    return super.xml(e, !1, i);
  }
}
function Qs(n, e) {
  return (this._element || this).type === "radialGradient" ? this.attr({ fx: new oe(n), fy: new oe(e) }) : this.attr({ x1: new oe(n), y1: new oe(e) });
}
function er(n, e) {
  return (this._element || this).type === "radialGradient" ? this.attr({ cx: new oe(n), cy: new oe(e) }) : this.attr({ x2: new oe(n), y2: new oe(e) });
}
ue(Ks, "Fragment");
var wo = Object.freeze({ __proto__: null, from: Qs, to: er });
class _t extends Xe {
  constructor(e, t) {
    super(Ae(e + "Gradient", typeof e == "string" ? null : e), t);
  }
  attr(e, t, i) {
    return e === "transform" && (e = "gradientTransform"), super.attr(e, t, i);
  }
  bbox() {
    return new Me();
  }
  targets() {
    return pt("svg [fill*=" + this.id() + "]");
  }
  toString() {
    return this.url();
  }
  update(e) {
    return this.clear(), typeof e == "function" && e.call(this, this), this;
  }
  url() {
    return "url(#" + this.id() + ")";
  }
}
re(_t, wo), le({ Container: { gradient(...n) {
  return this.defs().gradient(...n);
} }, Defs: { gradient: we((function(n, e) {
  return this.put(new _t(n)).update(e);
})) } }), ue(_t, "Gradient");
class Nt extends Xe {
  constructor(e, t = e) {
    super(Ae("pattern", e), t);
  }
  attr(e, t, i) {
    return e === "transform" && (e = "patternTransform"), super.attr(e, t, i);
  }
  bbox() {
    return new Me();
  }
  targets() {
    return pt("svg [fill*=" + this.id() + "]");
  }
  toString() {
    return this.url();
  }
  update(e) {
    return this.clear(), typeof e == "function" && e.call(this, this), this;
  }
  url() {
    return "url(#" + this.id() + ")";
  }
}
le({ Container: { pattern(...n) {
  return this.defs().pattern(...n);
} }, Defs: { pattern: we((function(n, e, t) {
  return this.put(new Nt()).update(t).attr({ x: 0, y: 0, width: n, height: e, patternUnits: "userSpaceOnUse" });
})) } }), ue(Nt, "Pattern");
let ai = class extends De {
  constructor(n, e = n) {
    super(Ae("image", n), e);
  }
  load(n, e) {
    if (!n) return this;
    const t = new de.window.Image();
    return Ke(t, "load", (function(i) {
      const a = this.parent(Nt);
      this.width() === 0 && this.height() === 0 && this.size(t.width, t.height), a instanceof Nt && a.width() === 0 && a.height() === 0 && a.size(this.width(), this.height()), typeof e == "function" && e.call(this, i);
    }), this), Ke(t, "load error", (function() {
      Ge(t);
    })), this.attr("href", t.src = n, Pt);
  }
};
var as;
as = function(n, e, t) {
  return n !== "fill" && n !== "stroke" || uo.test(e) && (e = t.root().defs().image(e)), e instanceof ai && (e = t.root().defs().pattern(0, 0, ((i) => {
    i.add(e);
  }))), e;
}, Gs.push(as), le({ Container: { image: we((function(n, e) {
  return this.put(new ai()).size(0, 0).load(n, e);
})) } }), ue(ai, "Image");
class at extends ft {
  bbox() {
    let e = -1 / 0, t = -1 / 0, i = 1 / 0, a = 1 / 0;
    return this.forEach((function(s) {
      e = Math.max(s[0], e), t = Math.max(s[1], t), i = Math.min(s[0], i), a = Math.min(s[1], a);
    })), new Me(i, a, e - i, t - a);
  }
  move(e, t) {
    const i = this.bbox();
    if (e -= i.x, t -= i.y, !isNaN(e) && !isNaN(t)) for (let a = this.length - 1; a >= 0; a--) this[a] = [this[a][0] + e, this[a][1] + t];
    return this;
  }
  parse(e = [0, 0]) {
    const t = [];
    (e = e instanceof Array ? Array.prototype.concat.apply([], e) : e.trim().split(Qe).map(parseFloat)).length % 2 != 0 && e.pop();
    for (let i = 0, a = e.length; i < a; i += 2) t.push([e[i], e[i + 1]]);
    return t;
  }
  size(e, t) {
    let i;
    const a = this.bbox();
    for (i = this.length - 1; i >= 0; i--) a.width && (this[i][0] = (this[i][0] - a.x) * e / a.width + a.x), a.height && (this[i][1] = (this[i][1] - a.y) * t / a.height + a.y);
    return this;
  }
  toLine() {
    return { x1: this[0][0], y1: this[0][1], x2: this[1][0], y2: this[1][1] };
  }
  toString() {
    const e = [];
    for (let t = 0, i = this.length; t < i; t++) e.push(this[t].join(","));
    return e.join(" ");
  }
  transform(e) {
    return this.clone().transformO(e);
  }
  transformO(e) {
    ie.isMatrixLike(e) || (e = new ie(e));
    for (let t = this.length; t--; ) {
      const [i, a] = this[t];
      this[t][0] = e.a * i + e.c * a + e.e, this[t][1] = e.b * i + e.d * a + e.f;
    }
    return this;
  }
}
const ko = at;
var Aa = Object.freeze({ __proto__: null, MorphArray: ko, height: function(n) {
  const e = this.bbox();
  return n == null ? e.height : this.size(e.width, n);
}, width: function(n) {
  const e = this.bbox();
  return n == null ? e.width : this.size(n, e.height);
}, x: function(n) {
  return n == null ? this.bbox().x : this.move(n, this.bbox().y);
}, y: function(n) {
  return n == null ? this.bbox().y : this.move(this.bbox().x, n);
} });
let ht = class extends De {
  constructor(n, e = n) {
    super(Ae("line", n), e);
  }
  array() {
    return new at([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]]);
  }
  move(n, e) {
    return this.attr(this.array().move(n, e).toLine());
  }
  plot(n, e, t, i) {
    return n == null ? this.array() : (n = e !== void 0 ? { x1: n, y1: e, x2: t, y2: i } : new at(n).toLine(), this.attr(n));
  }
  size(n, e) {
    const t = Lt(this, n, e);
    return this.attr(this.array().size(t.width, t.height).toLine());
  }
};
re(ht, Aa), le({ Container: { line: we((function(...n) {
  return ht.prototype.plot.apply(this.put(new ht()), n[0] != null ? n : [0, 0, 0, 0]);
})) } }), ue(ht, "Line");
let si = class extends Xe {
  constructor(n, e = n) {
    super(Ae("marker", n), e);
  }
  height(n) {
    return this.attr("markerHeight", n);
  }
  orient(n) {
    return this.attr("orient", n);
  }
  ref(n, e) {
    return this.attr("refX", n).attr("refY", e);
  }
  toString() {
    return "url(#" + this.id() + ")";
  }
  update(n) {
    return this.clear(), typeof n == "function" && n.call(this, this), this;
  }
  width(n) {
    return this.attr("markerWidth", n);
  }
};
function yt(n, e) {
  return function(t) {
    return t == null ? this[n] : (this[n] = t, e && e.call(this), this);
  };
}
le({ Container: { marker(...n) {
  return this.defs().marker(...n);
} }, Defs: { marker: we((function(n, e, t) {
  return this.put(new si()).size(n, e).ref(n / 2, e / 2).viewbox(0, 0, n, e).attr("orient", "auto").update(t);
})) }, marker: { marker(n, e, t, i) {
  let a = ["marker"];
  return n !== "all" && a.push(n), a = a.join("-"), n = arguments[1] instanceof si ? arguments[1] : this.defs().marker(e, t, i), this.attr(a, n);
} } }), ue(si, "Marker");
const Ao = { "-": function(n) {
  return n;
}, "<>": function(n) {
  return -Math.cos(n * Math.PI) / 2 + 0.5;
}, ">": function(n) {
  return Math.sin(n * Math.PI / 2);
}, "<": function(n) {
  return 1 - Math.cos(n * Math.PI / 2);
}, bezier: function(n, e, t, i) {
  return function(a) {
    return a < 0 ? n > 0 ? e / n * a : t > 0 ? i / t * a : 0 : a > 1 ? t < 1 ? (1 - i) / (1 - t) * a + (i - t) / (1 - t) : n < 1 ? (1 - e) / (1 - n) * a + (e - n) / (1 - n) : 1 : 3 * a * (1 - a) ** 2 * e + 3 * a ** 2 * (1 - a) * i + a ** 3;
  };
}, steps: function(n, e = "end") {
  e = e.split("-").reverse()[0];
  let t = n;
  return e === "none" ? --t : e === "both" && ++t, (i, a = !1) => {
    let s = Math.floor(i * n);
    const r = i * s % 1 == 0;
    return e !== "start" && e !== "both" || ++s, a && r && --s, i >= 0 && s < 0 && (s = 0), i <= 1 && s > t && (s = t), s / t;
  };
} };
class Ca {
  done() {
    return !1;
  }
}
class Ji extends Ca {
  constructor(e = xo) {
    super(), this.ease = Ao[e] || e;
  }
  step(e, t, i) {
    return typeof e != "number" ? i < 1 ? e : t : e + (t - e) * this.ease(i);
  }
}
class hi extends Ca {
  constructor(e) {
    super(), this.stepper = e;
  }
  done(e) {
    return e.done;
  }
  step(e, t, i, a) {
    return this.stepper(e, t, i, a);
  }
}
function ss() {
  const n = (this._duration || 500) / 1e3, e = this._overshoot || 0, t = Math.PI, i = Math.log(e / 100 + 1e-10), a = -i / Math.sqrt(t * t + i * i), s = 3.9 / (a * n);
  this.d = 2 * a * s, this.k = s * s;
}
re(class extends hi {
  constructor(n = 500, e = 0) {
    super(), this.duration(n).overshoot(e);
  }
  step(n, e, t, i) {
    if (typeof n == "string") return n;
    if (i.done = t === 1 / 0, t === 1 / 0) return e;
    if (t === 0) return n;
    t > 100 && (t = 16), t /= 1e3;
    const a = i.velocity || 0, s = -this.d * a - this.k * (n - e), r = n + a * t + s * t * t / 2;
    return i.velocity = a + s * t, i.done = Math.abs(e - r) + Math.abs(a) < 2e-3, i.done ? e : r;
  }
}, { duration: yt("_duration", ss), overshoot: yt("_overshoot", ss) });
re(class extends hi {
  constructor(n = 0.1, e = 0.01, t = 0, i = 1e3) {
    super(), this.p(n).i(e).d(t).windup(i);
  }
  step(n, e, t, i) {
    if (typeof n == "string") return n;
    if (i.done = t === 1 / 0, t === 1 / 0) return e;
    if (t === 0) return n;
    const a = e - n;
    let s = (i.integral || 0) + a * t;
    const r = (a - (i.error || 0)) / t, o = this._windup;
    return o !== !1 && (s = Math.max(-o, Math.min(s, o))), i.error = a, i.integral = s, i.done = Math.abs(a) < 1e-3, i.done ? e : n + (this.P * a + this.I * s + this.D * r);
  }
}, { windup: yt("_windup"), p: yt("P"), i: yt("I"), d: yt("D") });
const Co = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 }, Ki = { M: function(n, e, t) {
  return e.x = t.x = n[0], e.y = t.y = n[1], ["M", e.x, e.y];
}, L: function(n, e) {
  return e.x = n[0], e.y = n[1], ["L", n[0], n[1]];
}, H: function(n, e) {
  return e.x = n[0], ["H", n[0]];
}, V: function(n, e) {
  return e.y = n[0], ["V", n[0]];
}, C: function(n, e) {
  return e.x = n[4], e.y = n[5], ["C", n[0], n[1], n[2], n[3], n[4], n[5]];
}, S: function(n, e) {
  return e.x = n[2], e.y = n[3], ["S", n[0], n[1], n[2], n[3]];
}, Q: function(n, e) {
  return e.x = n[2], e.y = n[3], ["Q", n[0], n[1], n[2], n[3]];
}, T: function(n, e) {
  return e.x = n[0], e.y = n[1], ["T", n[0], n[1]];
}, Z: function(n, e, t) {
  return e.x = t.x, e.y = t.y, ["Z"];
}, A: function(n, e) {
  return e.x = n[5], e.y = n[6], ["A", n[0], n[1], n[2], n[3], n[4], n[5], n[6]];
} }, Si = "mlhvqtcsaz".split("");
for (let n = 0, e = Si.length; n < e; ++n) Ki[Si[n]] = /* @__PURE__ */ (function(t) {
  return function(i, a, s) {
    if (t === "H") i[0] = i[0] + a.x;
    else if (t === "V") i[0] = i[0] + a.y;
    else if (t === "A") i[5] = i[5] + a.x, i[6] = i[6] + a.y;
    else for (let r = 0, o = i.length; r < o; ++r) i[r] = i[r] + (r % 2 ? a.y : a.x);
    return Ki[t](i, a, s);
  };
})(Si[n].toUpperCase());
function Qi(n) {
  return n.segment.length && n.segment.length - 1 === Co[n.segment[0].toUpperCase()];
}
function So(n, e) {
  n.inNumber && nt(n, !1);
  const t = va.test(e);
  if (t) n.segment = [e];
  else {
    const i = n.lastCommand, a = i.toLowerCase(), s = i === a;
    n.segment = [a === "m" ? s ? "l" : "L" : i];
  }
  return n.inSegment = !0, n.lastCommand = n.segment[0], t;
}
function nt(n, e) {
  if (!n.inNumber) throw new Error("Parser Error");
  n.number && n.segment.push(parseFloat(n.number)), n.inNumber = e, n.number = "", n.pointSeen = !1, n.hasExponent = !1, Qi(n) && ea(n);
}
function ea(n) {
  n.inSegment = !1, n.absolute && (n.segment = (function(e) {
    const t = e.segment[0];
    return Ki[t](e.segment.slice(1), e.p, e.p0);
  })(n)), n.segments.push(n.segment);
}
function Mo(n) {
  if (!n.segment.length) return !1;
  const e = n.segment[0].toUpperCase() === "A", t = n.segment.length;
  return e && (t === 4 || t === 5);
}
function Lo(n) {
  return n.lastToken.toUpperCase() === "E";
}
const Po = /* @__PURE__ */ new Set([" ", ",", "	", `
`, "\r", "\f"]);
class qe extends ft {
  bbox() {
    return et().path.setAttribute("d", this.toString()), new Me(et.nodes.path.getBBox());
  }
  move(e, t) {
    const i = this.bbox();
    if (e -= i.x, t -= i.y, !isNaN(e) && !isNaN(t)) for (let a, s = this.length - 1; s >= 0; s--) a = this[s][0], a === "M" || a === "L" || a === "T" ? (this[s][1] += e, this[s][2] += t) : a === "H" ? this[s][1] += e : a === "V" ? this[s][1] += t : a === "C" || a === "S" || a === "Q" ? (this[s][1] += e, this[s][2] += t, this[s][3] += e, this[s][4] += t, a === "C" && (this[s][5] += e, this[s][6] += t)) : a === "A" && (this[s][6] += e, this[s][7] += t);
    return this;
  }
  parse(e = "M0 0") {
    return Array.isArray(e) && (e = Array.prototype.concat.apply([], e).toString()), (function(t, i = !0) {
      let a = 0, s = "";
      const r = { segment: [], inNumber: !1, number: "", lastToken: "", inSegment: !1, segments: [], pointSeen: !1, hasExponent: !1, absolute: i, p0: new fe(), p: new fe() };
      for (; r.lastToken = s, s = t.charAt(a++); ) if (r.inSegment || !So(r, s)) if (s !== ".") if (isNaN(parseInt(s))) if (Po.has(s)) r.inNumber && nt(r, !1);
      else if (s !== "-" && s !== "+") if (s.toUpperCase() !== "E") {
        if (va.test(s)) {
          if (r.inNumber) nt(r, !1);
          else {
            if (!Qi(r)) throw new Error("parser Error");
            ea(r);
          }
          --a;
        }
      } else r.number += s, r.hasExponent = !0;
      else {
        if (r.inNumber && !Lo(r)) {
          nt(r, !1), --a;
          continue;
        }
        r.number += s, r.inNumber = !0;
      }
      else {
        if (r.number === "0" || Mo(r)) {
          r.inNumber = !0, r.number = s, nt(r, !0);
          continue;
        }
        r.inNumber = !0, r.number += s;
      }
      else {
        if (r.pointSeen || r.hasExponent) {
          nt(r, !1), --a;
          continue;
        }
        r.inNumber = !0, r.pointSeen = !0, r.number += s;
      }
      return r.inNumber && nt(r, !1), r.inSegment && Qi(r) && ea(r), r.segments;
    })(e);
  }
  size(e, t) {
    const i = this.bbox();
    let a, s;
    for (i.width = i.width === 0 ? 1 : i.width, i.height = i.height === 0 ? 1 : i.height, a = this.length - 1; a >= 0; a--) s = this[a][0], s === "M" || s === "L" || s === "T" ? (this[a][1] = (this[a][1] - i.x) * e / i.width + i.x, this[a][2] = (this[a][2] - i.y) * t / i.height + i.y) : s === "H" ? this[a][1] = (this[a][1] - i.x) * e / i.width + i.x : s === "V" ? this[a][1] = (this[a][1] - i.y) * t / i.height + i.y : s === "C" || s === "S" || s === "Q" ? (this[a][1] = (this[a][1] - i.x) * e / i.width + i.x, this[a][2] = (this[a][2] - i.y) * t / i.height + i.y, this[a][3] = (this[a][3] - i.x) * e / i.width + i.x, this[a][4] = (this[a][4] - i.y) * t / i.height + i.y, s === "C" && (this[a][5] = (this[a][5] - i.x) * e / i.width + i.x, this[a][6] = (this[a][6] - i.y) * t / i.height + i.y)) : s === "A" && (this[a][1] = this[a][1] * e / i.width, this[a][2] = this[a][2] * t / i.height, this[a][6] = (this[a][6] - i.x) * e / i.width + i.x, this[a][7] = (this[a][7] - i.y) * t / i.height + i.y);
    return this;
  }
  toString() {
    return (function(e) {
      let t = "";
      for (let i = 0, a = e.length; i < a; i++) t += e[i][0], e[i][1] != null && (t += e[i][1], e[i][2] != null && (t += " ", t += e[i][2], e[i][3] != null && (t += " ", t += e[i][3], t += " ", t += e[i][4], e[i][5] != null && (t += " ", t += e[i][5], t += " ", t += e[i][6], e[i][7] != null && (t += " ", t += e[i][7])))));
      return t + " ";
    })(this);
  }
}
const tr = (n) => {
  const e = typeof n;
  return e === "number" ? oe : e === "string" ? ve.isColor(n) ? ve : Qe.test(n) ? va.test(n) ? qe : ft : Ds.test(n) ? oe : ta : ia.indexOf(n.constructor) > -1 ? n.constructor : Array.isArray(n) ? ft : e === "object" ? Ht : ta;
};
class ot {
  constructor(e) {
    this._stepper = e || new Ji("-"), this._from = null, this._to = null, this._type = null, this._context = null, this._morphObj = null;
  }
  at(e) {
    return this._morphObj.morph(this._from, this._to, e, this._stepper, this._context);
  }
  done() {
    return this._context.map(this._stepper.done).reduce((function(e, t) {
      return e && t;
    }), !0);
  }
  from(e) {
    return e == null ? this._from : (this._from = this._set(e), this);
  }
  stepper(e) {
    return e == null ? this._stepper : (this._stepper = e, this);
  }
  to(e) {
    return e == null ? this._to : (this._to = this._set(e), this);
  }
  type(e) {
    return e == null ? this._type : (this._type = e, this);
  }
  _set(e) {
    this._type || this.type(tr(e));
    let t = new this._type(e);
    return this._type === ve && (t = this._to ? t[this._to[4]]() : this._from ? t[this._from[4]]() : t), this._type === Ht && (t = this._to ? t.align(this._to) : this._from ? t.align(this._from) : t), t = t.toConsumable(), this._morphObj = this._morphObj || new this._type(), this._context = this._context || Array.apply(null, Array(t.length)).map(Object).map((function(i) {
      return i.done = !0, i;
    })), t;
  }
}
class ta {
  constructor(...e) {
    this.init(...e);
  }
  init(e) {
    return e = Array.isArray(e) ? e[0] : e, this.value = e, this;
  }
  toArray() {
    return [this.value];
  }
  valueOf() {
    return this.value;
  }
}
class qt {
  constructor(...e) {
    this.init(...e);
  }
  init(e) {
    return Array.isArray(e) && (e = { scaleX: e[0], scaleY: e[1], shear: e[2], rotate: e[3], translateX: e[4], translateY: e[5], originX: e[6], originY: e[7] }), Object.assign(this, qt.defaults, e), this;
  }
  toArray() {
    const e = this;
    return [e.scaleX, e.scaleY, e.shear, e.rotate, e.translateX, e.translateY, e.originX, e.originY];
  }
}
qt.defaults = { scaleX: 1, scaleY: 1, shear: 0, rotate: 0, translateX: 0, translateY: 0, originX: 0, originY: 0 };
const To = (n, e) => n[0] < e[0] ? -1 : n[0] > e[0] ? 1 : 0;
class Ht {
  constructor(...e) {
    this.init(...e);
  }
  align(e) {
    const t = this.values;
    for (let i = 0, a = t.length; i < a; ++i) {
      if (t[i + 1] === e[i + 1]) {
        if (t[i + 1] === ve && e[i + 7] !== t[i + 7]) {
          const o = e[i + 7], l = new ve(this.values.splice(i + 3, 5))[o]().toArray();
          this.values.splice(i + 3, 0, ...l);
        }
        i += t[i + 2] + 2;
        continue;
      }
      if (!e[i + 1]) return this;
      const s = new e[i + 1]().toArray(), r = t[i + 2] + 3;
      t.splice(i, r, e[i], e[i + 1], e[i + 2], ...s), i += t[i + 2] + 2;
    }
    return this;
  }
  init(e) {
    if (this.values = [], Array.isArray(e)) return void (this.values = e.slice());
    e = e || {};
    const t = [];
    for (const i in e) {
      const a = tr(e[i]), s = new a(e[i]).toArray();
      t.push([i, a, s.length, ...s]);
    }
    return t.sort(To), this.values = t.reduce(((i, a) => i.concat(a)), []), this;
  }
  toArray() {
    return this.values;
  }
  valueOf() {
    const e = {}, t = this.values;
    for (; t.length; ) {
      const i = t.shift(), a = t.shift(), s = t.shift(), r = t.splice(0, s);
      e[i] = new a(r);
    }
    return e;
  }
}
const ia = [ta, qt, Ht];
class wt extends De {
  constructor(e, t = e) {
    super(Ae("path", e), t);
  }
  array() {
    return this._array || (this._array = new qe(this.attr("d")));
  }
  clear() {
    return delete this._array, this;
  }
  height(e) {
    return e == null ? this.bbox().height : this.size(this.bbox().width, e);
  }
  move(e, t) {
    return this.attr("d", this.array().move(e, t));
  }
  plot(e) {
    return e == null ? this.array() : this.clear().attr("d", typeof e == "string" ? e : this._array = new qe(e));
  }
  size(e, t) {
    const i = Lt(this, e, t);
    return this.attr("d", this.array().size(i.width, i.height));
  }
  width(e) {
    return e == null ? this.bbox().width : this.size(e, this.bbox().height);
  }
  x(e) {
    return e == null ? this.bbox().x : this.move(e, this.bbox().y);
  }
  y(e) {
    return e == null ? this.bbox().y : this.move(this.bbox().x, e);
  }
}
wt.prototype.MorphArray = qe, le({ Container: { path: we((function(n) {
  return this.put(new wt()).plot(n || new qe());
})) } }), ue(wt, "Path");
var ir = Object.freeze({ __proto__: null, array: function() {
  return this._array || (this._array = new at(this.attr("points")));
}, clear: function() {
  return delete this._array, this;
}, move: function(n, e) {
  return this.attr("points", this.array().move(n, e));
}, plot: function(n) {
  return n == null ? this.array() : this.clear().attr("points", typeof n == "string" ? n : this._array = new at(n));
}, size: function(n, e) {
  const t = Lt(this, n, e);
  return this.attr("points", this.array().size(t.width, t.height));
} });
class ct extends De {
  constructor(e, t = e) {
    super(Ae("polygon", e), t);
  }
}
le({ Container: { polygon: we((function(n) {
  return this.put(new ct()).plot(n || new at());
})) } }), re(ct, Aa), re(ct, ir), ue(ct, "Polygon");
class dt extends De {
  constructor(e, t = e) {
    super(Ae("polyline", e), t);
  }
}
le({ Container: { polyline: we((function(n) {
  return this.put(new dt()).plot(n || new at());
})) } }), re(dt, Aa), re(dt, ir), ue(dt, "Polyline");
class ri extends De {
  constructor(e, t = e) {
    super(Ae("rect", e), t);
  }
}
re(ri, { rx: wa, ry: ka }), le({ Container: { rect: we((function(n, e) {
  return this.put(new ri()).size(n, e);
})) } }), ue(ri, "Rect");
class Mi {
  constructor() {
    this._first = null, this._last = null;
  }
  first() {
    return this._first && this._first.value;
  }
  last() {
    return this._last && this._last.value;
  }
  push(e) {
    const t = e.next !== void 0 ? e : { value: e, next: null, prev: null };
    return this._last ? (t.prev = this._last, this._last.next = t, this._last = t) : (this._last = t, this._first = t), t;
  }
  remove(e) {
    e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e === this._last && (this._last = e.prev), e === this._first && (this._first = e.next), e.prev = null, e.next = null;
  }
  shift() {
    const e = this._first;
    return e ? (this._first = e.next, this._first && (this._first.prev = null), this._last = this._first ? this._last : null, e.value) : null;
  }
}
const me = { nextDraw: null, frames: new Mi(), timeouts: new Mi(), immediates: new Mi(), timer: () => de.window.performance || de.window.Date, transforms: [], frame(n) {
  const e = me.frames.push({ run: n });
  return me.nextDraw === null && (me.nextDraw = de.window.requestAnimationFrame(me._draw)), e;
}, timeout(n, e) {
  e = e || 0;
  const t = me.timer().now() + e, i = me.timeouts.push({ run: n, time: t });
  return me.nextDraw === null && (me.nextDraw = de.window.requestAnimationFrame(me._draw)), i;
}, immediate(n) {
  const e = me.immediates.push(n);
  return me.nextDraw === null && (me.nextDraw = de.window.requestAnimationFrame(me._draw)), e;
}, cancelFrame(n) {
  n != null && me.frames.remove(n);
}, clearTimeout(n) {
  n != null && me.timeouts.remove(n);
}, cancelImmediate(n) {
  n != null && me.immediates.remove(n);
}, _draw(n) {
  let e = null;
  const t = me.timeouts.last();
  for (; (e = me.timeouts.shift()) && (n >= e.time ? e.run() : me.timeouts.push(e), e !== t); ) ;
  let i = null;
  const a = me.frames.last();
  for (; i !== a && (i = me.frames.shift()); ) i.run(n);
  let s = null;
  for (; s = me.immediates.shift(); ) s();
  me.nextDraw = me.timeouts.first() || me.frames.first() ? de.window.requestAnimationFrame(me._draw) : null;
} }, Eo = function(n) {
  const e = n.start, t = n.runner.duration();
  return { start: e, duration: t, end: e + t, runner: n.runner };
}, Io = function() {
  const n = de.window;
  return (n.performance || n.Date).now();
};
class ar extends Ut {
  constructor(e = Io) {
    super(), this._timeSource = e, this.terminate();
  }
  active() {
    return !!this._nextFrame;
  }
  finish() {
    return this.time(this.getEndTimeOfTimeline() + 1), this.pause();
  }
  getEndTime() {
    const e = this.getLastRunnerInfo(), t = e ? e.runner.duration() : 0;
    return (e ? e.start : this._time) + t;
  }
  getEndTimeOfTimeline() {
    const e = this._runners.map(((t) => t.start + t.runner.duration()));
    return Math.max(0, ...e);
  }
  getLastRunnerInfo() {
    return this.getRunnerInfoById(this._lastRunnerId);
  }
  getRunnerInfoById(e) {
    return this._runners[this._runnerIds.indexOf(e)] || null;
  }
  pause() {
    return this._paused = !0, this._continue();
  }
  persist(e) {
    return e == null ? this._persist : (this._persist = e, this);
  }
  play() {
    return this._paused = !1, this.updateTime()._continue();
  }
  reverse(e) {
    const t = this.speed();
    if (e == null) return this.speed(-t);
    const i = Math.abs(t);
    return this.speed(e ? -i : i);
  }
  schedule(e, t, i) {
    if (e == null) return this._runners.map(Eo);
    let a = 0;
    const s = this.getEndTime();
    if (t = t || 0, i == null || i === "last" || i === "after") a = s;
    else if (i === "absolute" || i === "start") a = t, t = 0;
    else if (i === "now") a = this._time;
    else if (i === "relative") {
      const l = this.getRunnerInfoById(e.id);
      l && (a = l.start + t, t = 0);
    } else {
      if (i !== "with-last") throw new Error('Invalid value for the "when" parameter');
      {
        const l = this.getLastRunnerInfo();
        a = l ? l.start : this._time;
      }
    }
    e.unschedule(), e.timeline(this);
    const r = e.persist(), o = { persist: r === null ? this._persist : r, start: a + t, runner: e };
    return this._lastRunnerId = e.id, this._runners.push(o), this._runners.sort(((l, h) => l.start - h.start)), this._runnerIds = this._runners.map(((l) => l.runner.id)), this.updateTime()._continue(), this;
  }
  seek(e) {
    return this.time(this._time + e);
  }
  source(e) {
    return e == null ? this._timeSource : (this._timeSource = e, this);
  }
  speed(e) {
    return e == null ? this._speed : (this._speed = e, this);
  }
  stop() {
    return this.time(0), this.pause();
  }
  time(e) {
    return e == null ? this._time : (this._time = e, this._continue(!0));
  }
  unschedule(e) {
    const t = this._runnerIds.indexOf(e.id);
    return t < 0 || (this._runners.splice(t, 1), this._runnerIds.splice(t, 1), e.timeline(null)), this;
  }
  updateTime() {
    return this.active() || (this._lastSourceTime = this._timeSource()), this;
  }
  _continue(e = !1) {
    return me.cancelFrame(this._nextFrame), this._nextFrame = null, e ? this._stepImmediate() : (this._paused || (this._nextFrame = me.frame(this._step)), this);
  }
  _stepFn(e = !1) {
    const t = this._timeSource();
    let i = t - this._lastSourceTime;
    e && (i = 0);
    const a = this._speed * i + (this._time - this._lastStepTime);
    this._lastSourceTime = t, e || (this._time += a, this._time = this._time < 0 ? 0 : this._time), this._lastStepTime = this._time, this.fire("time", this._time);
    for (let r = this._runners.length; r--; ) {
      const o = this._runners[r], l = o.runner;
      this._time - o.start <= 0 && l.reset();
    }
    let s = !1;
    for (let r = 0, o = this._runners.length; r < o; r++) {
      const l = this._runners[r], h = l.runner;
      let c = a;
      const d = this._time - l.start;
      if (d <= 0) {
        s = !0;
        continue;
      }
      d < c && (c = d), h.active() && (h.step(c).done ? l.persist !== !0 && h.duration() - h.time() + this._time + l.persist < this._time && (h.unschedule(), --r, --o) : s = !0);
    }
    return s && !(this._speed < 0 && this._time === 0) || this._runnerIds.length && this._speed < 0 && this._time > 0 ? this._continue() : (this.pause(), this.fire("finished")), this;
  }
  terminate() {
    this._startTime = 0, this._speed = 1, this._persist = 0, this._nextFrame = null, this._paused = !0, this._runners = [], this._runnerIds = [], this._lastRunnerId = -1, this._time = 0, this._lastSourceTime = 0, this._lastStepTime = 0, this._step = this._stepFn.bind(this, !1), this._stepImmediate = this._stepFn.bind(this, !0);
  }
}
le({ Element: { timeline: function(n) {
  return n == null ? (this._timeline = this._timeline || new ar(), this._timeline) : (this._timeline = n, this);
} } });
class Fe extends Ut {
  constructor(e) {
    super(), this.id = Fe.id++, e = typeof (e = e ?? Ci) == "function" ? new hi(e) : e, this._element = null, this._timeline = null, this.done = !1, this._queue = [], this._duration = typeof e == "number" && e, this._isDeclarative = e instanceof hi, this._stepper = this._isDeclarative ? e : new Ji(), this._history = {}, this.enabled = !0, this._time = 0, this._lastTime = 0, this._reseted = !0, this.transforms = new ie(), this.transformId = 1, this._haveReversed = !1, this._reverse = !1, this._loopsDone = 0, this._swing = !1, this._wait = 0, this._times = 1, this._frameId = null, this._persist = !!this._isDeclarative || null;
  }
  static sanitise(e, t, i) {
    let a = 1, s = !1, r = 0;
    return t = t ?? bo, i = i || "last", typeof (e = e ?? Ci) != "object" || e instanceof Ca || (t = e.delay ?? t, i = e.when ?? i, s = e.swing || s, a = e.times ?? a, r = e.wait ?? r, e = e.duration ?? Ci), { duration: e, delay: t, swing: s, times: a, wait: r, when: i };
  }
  active(e) {
    return e == null ? this.enabled : (this.enabled = e, this);
  }
  addTransform(e) {
    return this.transforms.lmultiplyO(e), this;
  }
  after(e) {
    return this.on("finished", e);
  }
  animate(e, t, i) {
    const a = Fe.sanitise(e, t, i), s = new Fe(a.duration);
    return this._timeline && s.timeline(this._timeline), this._element && s.element(this._element), s.loop(a).schedule(a.delay, a.when);
  }
  clearTransform() {
    return this.transforms = new ie(), this;
  }
  clearTransformsFromQueue() {
    this.done && this._timeline && this._timeline._runnerIds.includes(this.id) || (this._queue = this._queue.filter(((e) => !e.isTransform)));
  }
  delay(e) {
    return this.animate(0, e);
  }
  duration() {
    return this._times * (this._wait + this._duration) - this._wait;
  }
  during(e) {
    return this.queue(null, e);
  }
  ease(e) {
    return this._stepper = new Ji(e), this;
  }
  element(e) {
    return e == null ? this._element : (this._element = e, e._prepareRunner(), this);
  }
  finish() {
    return this.step(1 / 0);
  }
  loop(e, t, i) {
    return typeof e == "object" && (t = e.swing, i = e.wait, e = e.times), this._times = e || 1 / 0, this._swing = t || !1, this._wait = i || 0, this._times === !0 && (this._times = 1 / 0), this;
  }
  loops(e) {
    const t = this._duration + this._wait;
    if (e == null) {
      const s = Math.floor(this._time / t), r = (this._time - s * t) / this._duration;
      return Math.min(s + r, this._times);
    }
    const i = e % 1, a = t * Math.floor(e) + this._duration * i;
    return this.time(a);
  }
  persist(e) {
    return e == null ? this._persist : (this._persist = e, this);
  }
  position(e) {
    const t = this._time, i = this._duration, a = this._wait, s = this._times, r = this._swing, o = this._reverse;
    let l;
    if (e == null) {
      const d = function(g) {
        const p = r * Math.floor(g % (2 * (a + i)) / (a + i)), f = p && !o || !p && o, x = Math.pow(-1, f) * (g % (a + i)) / i + f;
        return Math.max(Math.min(x, 1), 0);
      }, u = s * (a + i) - a;
      return l = t <= 0 ? Math.round(d(1e-5)) : t < u ? d(t) : Math.round(d(u - 1e-5)), l;
    }
    const h = Math.floor(this.loops()), c = r && h % 2 == 0;
    return l = h + (c && !o || o && c ? e : 1 - e), this.loops(l);
  }
  progress(e) {
    return e == null ? Math.min(1, this._time / this.duration()) : this.time(e * this.duration());
  }
  queue(e, t, i, a) {
    return this._queue.push({ initialiser: e || is, runner: t || is, retarget: i, isTransform: a, initialised: !1, finished: !1 }), this.timeline() && this.timeline()._continue(), this;
  }
  reset() {
    return this._reseted || (this.time(0), this._reseted = !0), this;
  }
  reverse(e) {
    return this._reverse = e ?? !this._reverse, this;
  }
  schedule(e, t, i) {
    if (e instanceof ar || (i = t, t = e, e = this.timeline()), !e) throw Error("Runner cannot be scheduled without timeline");
    return e.schedule(this, t, i), this;
  }
  step(e) {
    if (!this.enabled) return this;
    e = e ?? 16, this._time += e;
    const t = this.position(), i = this._lastPosition !== t && this._time >= 0;
    this._lastPosition = t;
    const a = this.duration(), s = this._lastTime <= 0 && this._time > 0, r = this._lastTime < a && this._time >= a;
    this._lastTime = this._time, s && this.fire("start", this);
    const o = this._isDeclarative;
    this.done = !o && !r && this._time >= a, this._reseted = !1;
    let l = !1;
    return (i || o) && (this._initialise(i), this.transforms = new ie(), l = this._run(o ? e : t), this.fire("step", this)), this.done = this.done || l && o, r && this.fire("finished", this), this;
  }
  time(e) {
    if (e == null) return this._time;
    const t = e - this._time;
    return this.step(t), this;
  }
  timeline(e) {
    return e === void 0 ? this._timeline : (this._timeline = e, this);
  }
  unschedule() {
    const e = this.timeline();
    return e && e.unschedule(this), this;
  }
  _initialise(e) {
    if (e || this._isDeclarative) for (let t = 0, i = this._queue.length; t < i; ++t) {
      const a = this._queue[t], s = this._isDeclarative || !a.initialised && e;
      e = !a.finished, s && e && (a.initialiser.call(this), a.initialised = !0);
    }
  }
  _rememberMorpher(e, t) {
    if (this._history[e] = { morpher: t, caller: this._queue[this._queue.length - 1] }, this._isDeclarative) {
      const i = this.timeline();
      i && i.play();
    }
  }
  _run(e) {
    let t = !0;
    for (let i = 0, a = this._queue.length; i < a; ++i) {
      const s = this._queue[i], r = s.runner.call(this, e);
      s.finished = s.finished || r === !0, t = t && s.finished;
    }
    return t;
  }
  _tryRetarget(e, t, i) {
    if (this._history[e]) {
      if (!this._history[e].caller.initialised) {
        const s = this._queue.indexOf(this._history[e].caller);
        return this._queue.splice(s, 1), !1;
      }
      this._history[e].caller.retarget ? this._history[e].caller.retarget.call(this, t, i) : this._history[e].morpher.to(t), this._history[e].caller.finished = !1;
      const a = this.timeline();
      return a && a.play(), !0;
    }
    return !1;
  }
}
Fe.id = 0;
class ci {
  constructor(e = new ie(), t = -1, i = !0) {
    this.transforms = e, this.id = t, this.done = i;
  }
  clearTransformsFromQueue() {
  }
}
re([Fe, ci], { mergeWith(n) {
  return new ci(n.transforms.lmultiply(this.transforms), n.id);
} });
const sr = (n, e) => n.lmultiplyO(e), rr = (n) => n.transforms;
function Ro() {
  const n = this._transformationRunners.runners.map(rr).reduce(sr, new ie());
  this.transform(n), this._transformationRunners.merge(), this._transformationRunners.length() === 1 && (this._frameId = null);
}
class Oo {
  constructor() {
    this.runners = [], this.ids = [];
  }
  add(e) {
    if (this.runners.includes(e)) return;
    const t = e.id + 1;
    return this.runners.push(e), this.ids.push(t), this;
  }
  clearBefore(e) {
    const t = this.ids.indexOf(e + 1) || 1;
    return this.ids.splice(0, t, 0), this.runners.splice(0, t, new ci()).forEach(((i) => i.clearTransformsFromQueue())), this;
  }
  edit(e, t) {
    const i = this.ids.indexOf(e + 1);
    return this.ids.splice(i, 1, e + 1), this.runners.splice(i, 1, t), this;
  }
  getByID(e) {
    return this.runners[this.ids.indexOf(e + 1)];
  }
  length() {
    return this.ids.length;
  }
  merge() {
    let e = null;
    for (let t = 0; t < this.runners.length; ++t) {
      const i = this.runners[t];
      if (e && i.done && e.done && (!i._timeline || !i._timeline._runnerIds.includes(i.id)) && (!e._timeline || !e._timeline._runnerIds.includes(e.id))) {
        this.remove(i.id);
        const a = i.mergeWith(e);
        this.edit(e.id, a), e = a, --t;
      } else e = i;
    }
    return this;
  }
  remove(e) {
    const t = this.ids.indexOf(e + 1);
    return this.ids.splice(t, 1), this.runners.splice(t, 1), this;
  }
}
le({ Element: { animate(n, e, t) {
  const i = Fe.sanitise(n, e, t), a = this.timeline();
  return new Fe(i.duration).loop(i).element(this).timeline(a.play()).schedule(i.delay, i.when);
}, delay(n, e) {
  return this.animate(0, n, e);
}, _clearTransformRunnersBefore(n) {
  this._transformationRunners.clearBefore(n.id);
}, _currentTransform(n) {
  return this._transformationRunners.runners.filter(((e) => e.id <= n.id)).map(rr).reduce(sr, new ie());
}, _addRunner(n) {
  this._transformationRunners.add(n), me.cancelImmediate(this._frameId), this._frameId = me.immediate(Ro.bind(this));
}, _prepareRunner() {
  this._frameId == null && (this._transformationRunners = new Oo().add(new ci(new ie(this))));
} } });
re(Fe, { attr(n, e) {
  return this.styleAttr("attr", n, e);
}, css(n, e) {
  return this.styleAttr("css", n, e);
}, styleAttr(n, e, t) {
  if (typeof e == "string") return this.styleAttr(n, { [e]: t });
  let i = e;
  if (this._tryRetarget(n, i)) return this;
  let a = new ot(this._stepper).to(i), s = Object.keys(i);
  return this.queue((function() {
    a = a.from(this.element()[n](s));
  }), (function(r) {
    return this.element()[n](a.at(r).valueOf()), a.done();
  }), (function(r) {
    const o = Object.keys(r), l = (h = s, o.filter(((d) => !h.includes(d))));
    var h;
    if (l.length) {
      const d = this.element()[n](l), u = new Ht(a.from()).valueOf();
      Object.assign(u, d), a.from(u);
    }
    const c = new Ht(a.to()).valueOf();
    Object.assign(c, r), a.to(c), s = o, i = r;
  })), this._rememberMorpher(n, a), this;
}, zoom(n, e) {
  if (this._tryRetarget("zoom", n, e)) return this;
  let t = new ot(this._stepper).to(new oe(n));
  return this.queue((function() {
    t = t.from(this.element().zoom());
  }), (function(i) {
    return this.element().zoom(t.at(i), e), t.done();
  }), (function(i, a) {
    e = a, t.to(i);
  })), this._rememberMorpher("zoom", t), this;
}, transform(n, e, t) {
  if (e = n.relative || e, this._isDeclarative && !e && this._tryRetarget("transform", n)) return this;
  const i = ie.isMatrixLike(n);
  t = n.affine != null ? n.affine : t ?? !i;
  const a = new ot(this._stepper).type(t ? qt : ie);
  let s, r, o, l, h;
  return this.queue((function() {
    r = r || this.element(), s = s || $i(n, r), h = new ie(e ? void 0 : r), r._addRunner(this), e || r._clearTransformRunnersBefore(this);
  }), (function(c) {
    e || this.clearTransform();
    const { x: d, y: u } = new fe(s).transform(r._currentTransform(this));
    let g = new ie({ ...n, origin: [d, u] }), p = this._isDeclarative && o ? o : h;
    if (t) {
      g = g.decompose(d, u), p = p.decompose(d, u);
      const x = g.rotate, b = p.rotate, m = [x - 360, x, x + 360], y = m.map(((C) => Math.abs(C - b))), w = Math.min(...y), v = y.indexOf(w);
      g.rotate = m[v];
    }
    e && (i || (g.rotate = n.rotate || 0), this._isDeclarative && l && (p.rotate = l)), a.from(p), a.to(g);
    const f = a.at(c);
    return l = f.rotate, o = new ie(f), this.addTransform(o), r._addRunner(this), a.done();
  }), (function(c) {
    (c.origin || "center").toString() !== (n.origin || "center").toString() && (s = $i(c, r)), n = { ...c, origin: s };
  }), !0), this._isDeclarative && this._rememberMorpher("transform", a), this;
}, x(n) {
  return this._queueNumber("x", n);
}, y(n) {
  return this._queueNumber("y", n);
}, ax(n) {
  return this._queueNumber("ax", n);
}, ay(n) {
  return this._queueNumber("ay", n);
}, dx(n = 0) {
  return this._queueNumberDelta("x", n);
}, dy(n = 0) {
  return this._queueNumberDelta("y", n);
}, dmove(n, e) {
  return this.dx(n).dy(e);
}, _queueNumberDelta(n, e) {
  if (e = new oe(e), this._tryRetarget(n, e)) return this;
  const t = new ot(this._stepper).to(e);
  let i = null;
  return this.queue((function() {
    i = this.element()[n](), t.from(i), t.to(i + e);
  }), (function(a) {
    return this.element()[n](t.at(a)), t.done();
  }), (function(a) {
    t.to(i + new oe(a));
  })), this._rememberMorpher(n, t), this;
}, _queueObject(n, e) {
  if (this._tryRetarget(n, e)) return this;
  const t = new ot(this._stepper).to(e);
  return this.queue((function() {
    t.from(this.element()[n]());
  }), (function(i) {
    return this.element()[n](t.at(i)), t.done();
  })), this._rememberMorpher(n, t), this;
}, _queueNumber(n, e) {
  return this._queueObject(n, new oe(e));
}, cx(n) {
  return this._queueNumber("cx", n);
}, cy(n) {
  return this._queueNumber("cy", n);
}, move(n, e) {
  return this.x(n).y(e);
}, amove(n, e) {
  return this.ax(n).ay(e);
}, center(n, e) {
  return this.cx(n).cy(e);
}, size(n, e) {
  let t;
  return n && e || (t = this._element.bbox()), n || (n = t.width / t.height * e), e || (e = t.height / t.width * n), this.width(n).height(e);
}, width(n) {
  return this._queueNumber("width", n);
}, height(n) {
  return this._queueNumber("height", n);
}, plot(n, e, t, i) {
  if (arguments.length === 4) return this.plot([n, e, t, i]);
  if (this._tryRetarget("plot", n)) return this;
  const a = new ot(this._stepper).type(this._element.MorphArray).to(n);
  return this.queue((function() {
    a.from(this._element.array());
  }), (function(s) {
    return this._element.plot(a.at(s)), a.done();
  })), this._rememberMorpher("plot", a), this;
}, leading(n) {
  return this._queueNumber("leading", n);
}, viewbox(n, e, t, i) {
  return this._queueObject("viewbox", new Me(n, e, t, i));
}, update(n) {
  return typeof n != "object" ? this.update({ offset: arguments[0], color: arguments[1], opacity: arguments[2] }) : (n.opacity != null && this.attr("stop-opacity", n.opacity), n.color != null && this.attr("stop-color", n.color), n.offset != null && this.attr("offset", n.offset), this);
} }), re(Fe, { rx: wa, ry: ka, from: Qs, to: er }), ue(Fe, "Runner");
class aa extends Xe {
  constructor(e, t = e) {
    super(Ae("svg", e), t), this.namespace();
  }
  defs() {
    return this.isRoot() ? Be(this.node.querySelector("defs")) || this.put(new ui()) : this.root().defs();
  }
  isRoot() {
    return !this.node.parentNode || !(this.node.parentNode instanceof de.window.SVGElement) && this.node.parentNode.nodeName !== "#document-fragment";
  }
  namespace() {
    return this.isRoot() ? this.attr({ xmlns: xa, version: "1.1" }).attr("xmlns:xlink", Pt, wi) : this.root().namespace();
  }
  removeNamespace() {
    return this.attr({ xmlns: null, version: null }).attr("xmlns:xlink", null, wi).attr("xmlns:svgjs", null, wi);
  }
  root() {
    return this.isRoot() ? this : super.root();
  }
}
le({ Container: { nested: we((function() {
  return this.put(new aa());
})) } }), ue(aa, "Svg", !0);
let sa = class extends Xe {
  constructor(n, e = n) {
    super(Ae("symbol", n), e);
  }
};
le({ Container: { symbol: we((function() {
  return this.put(new sa());
})) } }), ue(sa, "Symbol");
var nr = Object.freeze({ __proto__: null, amove: function(n, e) {
  return this.ax(n).ay(e);
}, ax: function(n) {
  return this.attr("x", n);
}, ay: function(n) {
  return this.attr("y", n);
}, build: function(n) {
  return this._build = !!n, this;
}, center: function(n, e, t = this.bbox()) {
  return this.cx(n, t).cy(e, t);
}, cx: function(n, e = this.bbox()) {
  return n == null ? e.cx : this.attr("x", this.attr("x") + n - e.cx);
}, cy: function(n, e = this.bbox()) {
  return n == null ? e.cy : this.attr("y", this.attr("y") + n - e.cy);
}, length: function() {
  return this.node.getComputedTextLength();
}, move: function(n, e, t = this.bbox()) {
  return this.x(n, t).y(e, t);
}, plain: function(n) {
  return this._build === !1 && this.clear(), this.node.appendChild(de.document.createTextNode(n)), this;
}, x: function(n, e = this.bbox()) {
  return n == null ? e.x : this.attr("x", this.attr("x") + n - e.x);
}, y: function(n, e = this.bbox()) {
  return n == null ? e.y : this.attr("y", this.attr("y") + n - e.y);
} });
class $e extends De {
  constructor(e, t = e) {
    super(Ae("text", e), t), this.dom.leading = this.dom.leading ?? new oe(1.3), this._rebuild = !0, this._build = !1;
  }
  leading(e) {
    return e == null ? this.dom.leading : (this.dom.leading = new oe(e), this.rebuild());
  }
  rebuild(e) {
    if (typeof e == "boolean" && (this._rebuild = e), this._rebuild) {
      const t = this;
      let i = 0;
      const a = this.dom.leading;
      this.each((function(s) {
        if (Zi(this.node)) return;
        const r = de.window.getComputedStyle(this.node).getPropertyValue("font-size"), o = a * new oe(r);
        this.dom.newLined && (this.attr("x", t.attr("x")), this.text() === `
` ? i += o : (this.attr("dy", s ? o + i : 0), i = 0));
      })), this.fire("rebuild");
    }
    return this;
  }
  setData(e) {
    return this.dom = e, this.dom.leading = new oe(e.leading || 1.3), this;
  }
  writeDataToDom() {
    return Ns(this, this.dom, { leading: 1.3 }), this;
  }
  text(e) {
    if (e === void 0) {
      const t = this.node.childNodes;
      let i = 0;
      e = "";
      for (let a = 0, s = t.length; a < s; ++a) t[a].nodeName === "textPath" || Zi(t[a]) ? a === 0 && (i = a + 1) : (a !== i && t[a].nodeType !== 3 && Be(t[a]).dom.newLined === !0 && (e += `
`), e += t[a].textContent);
      return e;
    }
    if (this.clear().build(!0), typeof e == "function") e.call(this, this);
    else for (let t = 0, i = (e = (e + "").split(`
`)).length; t < i; t++) this.newLine(e[t]);
    return this.build(!1).rebuild();
  }
}
re($e, nr), le({ Container: { text: we((function(n = "") {
  return this.put(new $e()).text(n);
})), plain: we((function(n = "") {
  return this.put(new $e()).plain(n);
})) } }), ue($e, "Text");
class ni extends De {
  constructor(e, t = e) {
    super(Ae("tspan", e), t), this._build = !1;
  }
  dx(e) {
    return this.attr("dx", e);
  }
  dy(e) {
    return this.attr("dy", e);
  }
  newLine() {
    this.dom.newLined = !0;
    const e = this.parent();
    if (!(e instanceof $e)) return this;
    const t = e.index(this), i = de.window.getComputedStyle(this.node).getPropertyValue("font-size"), a = e.dom.leading * new oe(i);
    return this.dy(t ? a : 0).attr("x", e.x());
  }
  text(e) {
    return e == null ? this.node.textContent + (this.dom.newLined ? `
` : "") : (typeof e == "function" ? (this.clear().build(!0), e.call(this, this), this.build(!1)) : this.plain(e), this);
  }
}
re(ni, nr), le({ Tspan: { tspan: we((function(n = "") {
  const e = new ni();
  return this._build || this.clear(), this.put(e).text(n);
})) }, Text: { newLine: function(n = "") {
  return this.tspan(n).newLine();
} } }), ue(ni, "Tspan");
class Li extends De {
  constructor(e, t = e) {
    super(Ae("circle", e), t);
  }
  radius(e) {
    return this.attr("r", e);
  }
  rx(e) {
    return this.attr("r", e);
  }
  ry(e) {
    return this.rx(e);
  }
  size(e) {
    return this.radius(new oe(e).divide(2));
  }
}
re(Li, { x: Vs, y: Us, cx: qs, cy: $s, width: Zs, height: Js }), le({ Container: { circle: we((function(n = 0) {
  return this.put(new Li()).size(n).move(0, 0);
})) } }), ue(Li, "Circle");
class Pi extends Xe {
  constructor(e, t = e) {
    super(Ae("clipPath", e), t);
  }
  remove() {
    return this.targets().forEach((function(e) {
      e.unclip();
    })), super.remove();
  }
  targets() {
    return pt("svg [clip-path*=" + this.id() + "]");
  }
}
le({ Container: { clip: we((function() {
  return this.defs().put(new Pi());
})) }, Element: { clipper() {
  return this.reference("clip-path");
}, clipWith(n) {
  const e = n instanceof Pi ? n : this.parent().clip().add(n);
  return this.attr("clip-path", "url(#" + e.id() + ")");
}, unclip() {
  return this.attr("clip-path", null);
} } }), ue(Pi, "ClipPath");
class rs extends Oe {
  constructor(e, t = e) {
    super(Ae("foreignObject", e), t);
  }
}
le({ Container: { foreignObject: we((function(n, e) {
  return this.put(new rs()).size(n, e);
})) } }), ue(rs, "ForeignObject");
var or = Object.freeze({ __proto__: null, dmove: function(n, e) {
  return this.children().forEach(((t) => {
    let i;
    try {
      i = t.node instanceof Vt().SVGSVGElement ? new Me(t.attr(["x", "y", "width", "height"])) : t.bbox();
    } catch {
      return;
    }
    const a = new ie(t), s = a.translate(n, e).transform(a.inverse()), r = new fe(i.x, i.y).transform(s);
    t.move(r.x, r.y);
  })), this;
}, dx: function(n) {
  return this.dmove(n, 0);
}, dy: function(n) {
  return this.dmove(0, n);
}, height: function(n, e = this.bbox()) {
  return n == null ? e.height : this.size(e.width, n, e);
}, move: function(n = 0, e = 0, t = this.bbox()) {
  const i = n - t.x, a = e - t.y;
  return this.dmove(i, a);
}, size: function(n, e, t = this.bbox()) {
  const i = Lt(this, n, e, t), a = i.width / t.width, s = i.height / t.height;
  return this.children().forEach(((r) => {
    const o = new fe(t).transform(new ie(r).inverse());
    r.scale(a, s, o.x, o.y);
  })), this;
}, width: function(n, e = this.bbox()) {
  return n == null ? e.width : this.size(n, e.height, e);
}, x: function(n, e = this.bbox()) {
  return n == null ? e.x : this.move(n, e.y, e);
}, y: function(n, e = this.bbox()) {
  return n == null ? e.y : this.move(e.x, n, e);
} });
class tt extends Xe {
  constructor(e, t = e) {
    super(Ae("g", e), t);
  }
}
re(tt, or), le({ Container: { group: we((function() {
  return this.put(new tt());
})) } }), ue(tt, "G");
class Kt extends Xe {
  constructor(e, t = e) {
    super(Ae("a", e), t);
  }
  target(e) {
    return this.attr("target", e);
  }
  to(e) {
    return this.attr("href", e, Pt);
  }
}
re(Kt, or), le({ Container: { link: we((function(n) {
  return this.put(new Kt()).to(n);
})) }, Element: { unlink() {
  const n = this.linker();
  if (!n) return this;
  const e = n.parent();
  if (!e) return this.remove();
  const t = e.index(n);
  return e.add(this, t), n.remove(), this;
}, linkTo(n) {
  let e = this.linker();
  return e || (e = new Kt(), this.wrap(e)), typeof n == "function" ? n.call(e, e) : e.to(n), this;
}, linker() {
  const n = this.parent();
  return n && n.node.nodeName.toLowerCase() === "a" ? n : null;
} } }), ue(Kt, "A");
class Ti extends Xe {
  constructor(e, t = e) {
    super(Ae("mask", e), t);
  }
  remove() {
    return this.targets().forEach((function(e) {
      e.unmask();
    })), super.remove();
  }
  targets() {
    return pt("svg [mask*=" + this.id() + "]");
  }
}
le({ Container: { mask: we((function() {
  return this.defs().put(new Ti());
})) }, Element: { masker() {
  return this.reference("mask");
}, maskWith(n) {
  const e = n instanceof Ti ? n : this.parent().mask().add(n);
  return this.attr("mask", "url(#" + e.id() + ")");
}, unmask() {
  return this.attr("mask", null);
} } }), ue(Ti, "Mask");
class ns extends Oe {
  constructor(e, t = e) {
    super(Ae("stop", e), t);
  }
  update(e) {
    return (typeof e == "number" || e instanceof oe) && (e = { offset: arguments[0], color: arguments[1], opacity: arguments[2] }), e.opacity != null && this.attr("stop-opacity", e.opacity), e.color != null && this.attr("stop-color", e.color), e.offset != null && this.attr("offset", new oe(e.offset)), this;
  }
}
le({ Gradient: { stop: function(n, e, t) {
  return this.put(new ns()).update(n, e, t);
} } }), ue(ns, "Stop");
class Ei extends Oe {
  constructor(e, t = e) {
    super(Ae("style", e), t);
  }
  addText(e = "") {
    return this.node.textContent += e, this;
  }
  font(e, t, i = {}) {
    return this.rule("@font-face", { fontFamily: e, src: t, ...i });
  }
  rule(e, t) {
    return this.addText((function(i, a) {
      if (!i) return "";
      if (!a) return i;
      let s = i + "{";
      for (const r in a) s += r.replace(/([A-Z])/g, (function(o, l) {
        return "-" + l.toLowerCase();
      })) + ":" + a[r] + ";";
      return s += "}", s;
    })(e, t));
  }
}
le("Dom", { style(n, e) {
  return this.put(new Ei()).rule(n, e);
}, fontface(n, e, t) {
  return this.put(new Ei()).font(n, e, t);
} }), ue(Ei, "Style");
class Ii extends $e {
  constructor(e, t = e) {
    super(Ae("textPath", e), t);
  }
  array() {
    const e = this.track();
    return e ? e.array() : null;
  }
  plot(e) {
    const t = this.track();
    let i = null;
    return t && (i = t.plot(e)), e == null ? i : this;
  }
  track() {
    return this.reference("href");
  }
}
le({ Container: { textPath: we((function(n, e) {
  return n instanceof $e || (n = this.text(n)), n.path(e);
})) }, Text: { path: we((function(n, e = !0) {
  const t = new Ii();
  let i;
  if (n instanceof wt || (n = this.defs().path(n)), t.attr("href", "#" + n, Pt), e) for (; i = this.node.firstChild; ) t.node.appendChild(i);
  return this.put(t);
})), textPath() {
  return this.findOne("textPath");
} }, Path: { text: we((function(n) {
  return n instanceof $e || (n = new $e().addTo(this.parent()).text(n)), n.path(this);
})), targets() {
  return pt("svg textPath").filter(((n) => (n.attr("href") || "").includes(this.id())));
} } }), Ii.prototype.MorphArray = qe, ue(Ii, "TextPath");
class os extends De {
  constructor(e, t = e) {
    super(Ae("use", e), t);
  }
  use(e, t) {
    return this.attr("href", (t || "") + "#" + e, Pt);
  }
}
le({ Container: { use: we((function(n, e) {
  return this.put(new os()).use(n, e);
})) } }), ue(os, "Use");
const zo = Ye;
re([aa, sa, ai, Nt, si], He("viewbox")), re([ht, dt, ct, wt], He("marker")), re($e, He("Text")), re(wt, He("Path")), re(ui, He("Defs")), re([$e, ni], He("Tspan")), re([ri, ii, _t, Fe], He("radius")), re(Ut, He("EventTarget")), re(it, He("Dom")), re(Oe, He("Element")), re(De, He("Shape")), re([Xe, Ks], He("Container")), re(_t, He("Gradient")), re(Fe, He("Runner")), gt.extend([...new Set(Ys)]), (function(n = []) {
  ia.push(...[].concat(n));
})([oe, ve, Me, ie, ft, at, qe, fe]), re(ia, { to(n) {
  return new ot().type(this.constructor).from(this.toArray()).to(n);
}, fromArray(n) {
  return this.init(n), this;
}, toConsumable() {
  return this.toArray();
}, morph(n, e, t, i, a) {
  return this.fromArray(n.map((function(s, r) {
    return i.step(s, e[r], t, a[r], a);
  })));
} });
class Se extends Oe {
  constructor(e) {
    super(Ae("filter", e), e), this.$source = "SourceGraphic", this.$sourceAlpha = "SourceAlpha", this.$background = "BackgroundImage", this.$backgroundAlpha = "BackgroundAlpha", this.$fill = "FillPaint", this.$stroke = "StrokePaint", this.$autoSetIn = !0;
  }
  put(e, t) {
    return !(e = super.put(e, t)).attr("in") && this.$autoSetIn && e.attr("in", this.$source), e.attr("result") || e.attr("result", e.id()), e;
  }
  remove() {
    return this.targets().each("unfilter"), super.remove();
  }
  targets() {
    return pt('svg [filter*="' + this.id() + '"]');
  }
  toString() {
    return "url(#" + this.id() + ")";
  }
}
class Sa extends Oe {
  constructor(e, t) {
    super(e, t), this.result(this.id());
  }
  in(e) {
    if (e == null) {
      const t = this.attr("in");
      return this.parent() && this.parent().find(`[result="${t}"]`)[0] || t;
    }
    return this.attr("in", e);
  }
  result(e) {
    return this.attr("result", e);
  }
  toString() {
    return this.result();
  }
}
const je = (n) => function(...e) {
  for (let t = n.length; t--; ) e[t] != null && this.attr(n[t], e[t]);
}, _o = { blend: je(["in", "in2", "mode"]), colorMatrix: je(["type", "values"]), composite: je(["in", "in2", "operator"]), convolveMatrix: function(n) {
  n = new ft(n).toString(), this.attr({ order: Math.sqrt(n.split(" ").length), kernelMatrix: n });
}, diffuseLighting: je(["surfaceScale", "lightingColor", "diffuseConstant", "kernelUnitLength"]), displacementMap: je(["in", "in2", "scale", "xChannelSelector", "yChannelSelector"]), dropShadow: je(["in", "dx", "dy", "stdDeviation"]), flood: je(["flood-color", "flood-opacity"]), gaussianBlur: function(n = 0, e = n) {
  this.attr("stdDeviation", n + " " + e);
}, image: function(n) {
  this.attr("href", n, Pt);
}, morphology: je(["operator", "radius"]), offset: je(["dx", "dy"]), specularLighting: je(["surfaceScale", "lightingColor", "diffuseConstant", "specularExponent", "kernelUnitLength"]), tile: je([]), turbulence: je(["baseFrequency", "numOctaves", "seed", "stitchTiles", "type"]) };
["blend", "colorMatrix", "componentTransfer", "composite", "convolveMatrix", "diffuseLighting", "displacementMap", "dropShadow", "flood", "gaussianBlur", "image", "merge", "morphology", "offset", "specularLighting", "tile", "turbulence"].forEach(((n) => {
  const e = Mt(n), t = _o[n];
  Se[e + "Effect"] = class extends Sa {
    constructor(i) {
      super(Ae("fe" + e, i), i);
    }
    update(i) {
      return t.apply(this, i), this;
    }
  }, Se.prototype[n] = we((function(i, ...a) {
    const s = new Se[e + "Effect"]();
    return i == null ? this.put(s) : (typeof i == "function" ? i.call(s, s) : a.unshift(i), this.put(s).update(a));
  }));
})), re(Se, { merge(n) {
  const e = this.put(new Se.MergeEffect());
  return typeof n == "function" ? (n.call(e, e), e) : ((n instanceof Array ? n : [...arguments]).forEach(((t) => {
    t instanceof Se.MergeNode ? e.put(t) : e.mergeNode(t);
  })), e);
}, componentTransfer(n = {}) {
  const e = this.put(new Se.ComponentTransferEffect());
  if (typeof n == "function") return n.call(e, e), e;
  n.r || n.g || n.b || n.a || (n = { r: n, g: n, b: n, a: n });
  for (const t in n) e.add(new Se["Func" + t.toUpperCase()](n[t]));
  return e;
} });
["distantLight", "pointLight", "spotLight", "mergeNode", "FuncR", "FuncG", "FuncB", "FuncA"].forEach(((n) => {
  const e = Mt(n);
  Se[e] = class extends Sa {
    constructor(t) {
      super(Ae("fe" + e, t), t);
    }
  };
}));
["funcR", "funcG", "funcB", "funcA"].forEach((function(n) {
  const e = Se[Mt(n)], t = we((function() {
    return this.put(new e());
  }));
  Se.ComponentTransferEffect.prototype[n] = t;
}));
["distantLight", "pointLight", "spotLight"].forEach(((n) => {
  const e = Se[Mt(n)], t = we((function() {
    return this.put(new e());
  }));
  Se.DiffuseLightingEffect.prototype[n] = t, Se.SpecularLightingEffect.prototype[n] = t;
})), re(Se.MergeEffect, { mergeNode(n) {
  return this.put(new Se.MergeNode()).attr("in", n);
} }), re(ui, { filter: function(n) {
  const e = this.put(new Se());
  return typeof n == "function" && n.call(e, e), e;
} }), re(Xe, { filter: function(n) {
  return this.defs().filter(n);
} }), re(Oe, { filterWith: function(n) {
  const e = n instanceof Se ? n : this.defs().filter(n);
  return this.attr("filter", e);
}, unfilter: function(n) {
  return this.attr("filter", null);
}, filterer() {
  return this.reference("filter");
} });
const Yo = { blend: function(n, e) {
  return this.parent() && this.parent().blend(this, n, e);
}, colorMatrix: function(n, e) {
  return this.parent() && this.parent().colorMatrix(n, e).in(this);
}, componentTransfer: function(n) {
  return this.parent() && this.parent().componentTransfer(n).in(this);
}, composite: function(n, e) {
  return this.parent() && this.parent().composite(this, n, e);
}, convolveMatrix: function(n) {
  return this.parent() && this.parent().convolveMatrix(n).in(this);
}, diffuseLighting: function(n, e, t, i) {
  return this.parent() && this.parent().diffuseLighting(n, t, i).in(this);
}, displacementMap: function(n, e, t, i) {
  return this.parent() && this.parent().displacementMap(this, n, e, t, i);
}, dropShadow: function(n, e, t) {
  return this.parent() && this.parent().dropShadow(this, n, e, t).in(this);
}, flood: function(n, e) {
  return this.parent() && this.parent().flood(n, e);
}, gaussianBlur: function(n, e) {
  return this.parent() && this.parent().gaussianBlur(n, e).in(this);
}, image: function(n) {
  return this.parent() && this.parent().image(n);
}, merge: function(n) {
  return n = n instanceof Array ? n : [...n], this.parent() && this.parent().merge(this, ...n);
}, morphology: function(n, e) {
  return this.parent() && this.parent().morphology(n, e).in(this);
}, offset: function(n, e) {
  return this.parent() && this.parent().offset(n, e).in(this);
}, specularLighting: function(n, e, t, i, a) {
  return this.parent() && this.parent().specularLighting(n, t, i, a).in(this);
}, tile: function() {
  return this.parent() && this.parent().tile().in(this);
}, turbulence: function(n, e, t, i, a) {
  return this.parent() && this.parent().turbulence(n, e, t, i, a).in(this);
} };
re(Sa, Yo), re(Se.MergeEffect, { in: function(n) {
  return n instanceof Se.MergeNode ? this.add(n, 0) : this.add(new Se.MergeNode().in(n), 0), this;
} }), re([Se.CompositeEffect, Se.BlendEffect, Se.DisplacementMapEffect], { in2: function(n) {
  if (n == null) {
    const e = this.attr("in2");
    return this.parent() && this.parent().find(`[result="${e}"]`)[0] || e;
  }
  return this.attr("in2", n);
} }), Se.filter = { sepiatone: [0.343, 0.669, 0.119, 0, 0, 0.249, 0.626, 0.13, 0, 0, 0.172, 0.334, 0.111, 0, 0, 0, 0, 0, 1, 0] };
var Re = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
  }
  return $(n, [{ key: "getDefaultFilter", value: function(e, t) {
    var i = this.w;
    e.unfilter(!0), new Se().size("120%", "180%", "-5%", "-40%"), i.config.chart.dropShadow.enabled && this.dropShadow(e, i.config.chart.dropShadow, t);
  } }, { key: "applyFilter", value: function(e, t, i) {
    var a, s = this, r = this.w;
    if (e.unfilter(!0), i !== "none") {
      var o, l, h = r.config.chart.dropShadow, c = i === "lighten" ? 2 : 0.3;
      e.filterWith((function(d) {
        d.colorMatrix({ type: "matrix", values: `
          `.concat(c, ` 0 0 0 0
          0 `).concat(c, ` 0 0 0
          0 0 `).concat(c, ` 0 0
          0 0 0 1 0
        `), in: "SourceGraphic", result: "brightness" }), h.enabled && s.addShadow(d, t, h, "brightness");
      })), !h.noUserSpaceOnUse && ((o = e.filterer()) === null || o === void 0 || (l = o.node) === null || l === void 0 || l.setAttribute("filterUnits", "userSpaceOnUse")), this._scaleFilterSize((a = e.filterer()) === null || a === void 0 ? void 0 : a.node);
    } else this.getDefaultFilter(e, t);
  } }, { key: "addShadow", value: function(e, t, i, a) {
    var s, r = this.w, o = i.blur, l = i.top, h = i.left, c = i.color, d = i.opacity;
    if (c = Array.isArray(c) ? c[t] : c, ((s = r.config.chart.dropShadow.enabledOnSeries) === null || s === void 0 ? void 0 : s.length) > 0 && r.config.chart.dropShadow.enabledOnSeries.indexOf(t) === -1) return e;
    e.offset({ in: a, dx: h, dy: l, result: "offset" }), e.gaussianBlur({ in: "offset", stdDeviation: o, result: "blur" }), e.flood({ "flood-color": c, "flood-opacity": d, result: "flood" }), e.composite({ in: "flood", in2: "blur", operator: "in", result: "shadow" }), e.merge(["shadow", a]);
  } }, { key: "dropShadow", value: function(e, t) {
    var i, a, s, r, o, l = this, h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, c = this.w;
    return e.unfilter(!0), L.isMsEdge() && c.config.chart.type === "radialBar" || ((i = c.config.chart.dropShadow.enabledOnSeries) === null || i === void 0 ? void 0 : i.length) > 0 && ((s = c.config.chart.dropShadow.enabledOnSeries) === null || s === void 0 ? void 0 : s.indexOf(h)) === -1 ? e : (e.filterWith((function(d) {
      l.addShadow(d, h, t, "SourceGraphic");
    })), t.noUserSpaceOnUse || (r = e.filterer()) === null || r === void 0 || (o = r.node) === null || o === void 0 || o.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize((a = e.filterer()) === null || a === void 0 ? void 0 : a.node), e);
  } }, { key: "setSelectionFilter", value: function(e, t, i) {
    var a = this.w;
    if (a.globals.selectedDataPoints[t] !== void 0 && a.globals.selectedDataPoints[t].indexOf(i) > -1) {
      e.node.setAttribute("selected", !0);
      var s = a.config.states.active.filter;
      s !== "none" && this.applyFilter(e, t, s.type);
    }
  } }, { key: "_scaleFilterSize", value: function(e) {
    e && (function(t) {
      for (var i in t) t.hasOwnProperty(i) && e.setAttribute(i, t[i]);
    })({ width: "200%", height: "200%", x: "-50%", y: "-50%" });
  } }]), n;
})(), X = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
  }
  return $(n, [{ key: "roundPathCorners", value: function(e, t) {
    function i(A, S, P) {
      var T = S.x - A.x, I = S.y - A.y, R = Math.sqrt(T * T + I * I);
      return a(A, S, Math.min(1, P / R));
    }
    function a(A, S, P) {
      return { x: A.x + (S.x - A.x) * P, y: A.y + (S.y - A.y) * P };
    }
    function s(A, S) {
      A.length > 2 && (A[A.length - 2] = S.x, A[A.length - 1] = S.y);
    }
    function r(A) {
      return { x: parseFloat(A[A.length - 2]), y: parseFloat(A[A.length - 1]) };
    }
    e.indexOf("NaN") > -1 && (e = "");
    var o = e.split(/[,\s]/).reduce((function(A, S) {
      var P = S.match(/^([a-zA-Z])(.+)/);
      return P ? (A.push(P[1]), A.push(P[2])) : A.push(S), A;
    }), []).reduce((function(A, S) {
      return parseFloat(S) == S && A.length ? A[A.length - 1].push(S) : A.push([S]), A;
    }), []), l = [];
    if (o.length > 1) {
      var h = r(o[0]), c = null;
      o[o.length - 1][0] == "Z" && o[0].length > 2 && (c = ["L", h.x, h.y], o[o.length - 1] = c), l.push(o[0]);
      for (var d = 1; d < o.length; d++) {
        var u = l[l.length - 1], g = o[d], p = g == c ? o[1] : o[d + 1];
        if (p && u && u.length > 2 && g[0] == "L" && p.length > 2 && p[0] == "L") {
          var f, x, b = r(u), m = r(g), y = r(p);
          f = i(m, b, t), x = i(m, y, t), s(g, f), g.origPoint = m, l.push(g);
          var w = a(f, m, 0.5), v = a(m, x, 0.5), C = ["C", w.x, w.y, v.x, v.y, x.x, x.y];
          C.origPoint = m, l.push(C);
        } else l.push(g);
      }
      if (c) {
        var k = r(l[l.length - 1]);
        l.push(["Z"]), s(l[0], k);
      }
    } else l = o;
    return l.reduce((function(A, S) {
      return A + S.join(" ") + " ";
    }), "");
  } }, { key: "drawLine", value: function(e, t, i, a) {
    var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "#a8a8a8", r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, l = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "butt";
    return this.w.globals.dom.Paper.line().attr({ x1: e, y1: t, x2: i, y2: a, stroke: s, "stroke-dasharray": r, "stroke-width": o, "stroke-linecap": l });
  } }, { key: "drawRect", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "#fefefe", o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 1, l = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null, h = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : null, c = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : 0, d = this.w.globals.dom.Paper.rect();
    return d.attr({ x: e, y: t, width: i > 0 ? i : 0, height: a > 0 ? a : 0, rx: s, ry: s, opacity: o, "stroke-width": l !== null ? l : 0, stroke: h !== null ? h : "none", "stroke-dasharray": c }), d.node.setAttribute("fill", r), d;
  } }, { key: "drawPolygon", value: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "#e1e1e1", i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "none";
    return this.w.globals.dom.Paper.polygon(e).attr({ fill: a, stroke: t, "stroke-width": i });
  } }, { key: "drawCircle", value: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    e < 0 && (e = 0);
    var i = this.w.globals.dom.Paper.circle(2 * e);
    return t !== null && i.attr(t), i;
  } }, { key: "drawPath", value: function(e) {
    var t = e.d, i = t === void 0 ? "" : t, a = e.stroke, s = a === void 0 ? "#a8a8a8" : a, r = e.strokeWidth, o = r === void 0 ? 1 : r, l = e.fill, h = e.fillOpacity, c = h === void 0 ? 1 : h, d = e.strokeOpacity, u = d === void 0 ? 1 : d, g = e.classes, p = e.strokeLinecap, f = p === void 0 ? null : p, x = e.strokeDashArray, b = x === void 0 ? 0 : x, m = this.w;
    return f === null && (f = m.config.stroke.lineCap), (i.indexOf("undefined") > -1 || i.indexOf("NaN") > -1) && (i = "M 0 ".concat(m.globals.gridHeight)), m.globals.dom.Paper.path(i).attr({ fill: l, "fill-opacity": c, stroke: s, "stroke-opacity": u, "stroke-linecap": f, "stroke-width": o, "stroke-dasharray": b, class: g });
  } }, { key: "group", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, t = this.w.globals.dom.Paper.group();
    return e !== null && t.attr(e), t;
  } }, { key: "move", value: function(e, t) {
    var i = ["M", e, t].join(" ");
    return i;
  } }, { key: "line", value: function(e, t) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a = null;
    return i === null ? a = [" L", e, t].join(" ") : i === "H" ? a = [" H", e].join(" ") : i === "V" && (a = [" V", t].join(" ")), a;
  } }, { key: "curve", value: function(e, t, i, a, s, r) {
    var o = ["C", e, t, i, a, s, r].join(" ");
    return o;
  } }, { key: "quadraticCurve", value: function(e, t, i, a) {
    return ["Q", e, t, i, a].join(" ");
  } }, { key: "arc", value: function(e, t, i, a, s, r, o) {
    var l = "A";
    arguments.length > 7 && arguments[7] !== void 0 && arguments[7] && (l = "a");
    var h = [l, e, t, i, a, s, r, o].join(" ");
    return h;
  } }, { key: "renderPaths", value: function(e) {
    var t, i = e.j, a = e.realIndex, s = e.pathFrom, r = e.pathTo, o = e.stroke, l = e.strokeWidth, h = e.strokeLinecap, c = e.fill, d = e.animationDelay, u = e.initialSpeed, g = e.dataChangeSpeed, p = e.className, f = e.chartType, x = e.shouldClipToGrid, b = x === void 0 || x, m = e.bindEventsOnPaths, y = m === void 0 || m, w = e.drawShadow, v = w === void 0 || w, C = this.w, k = new Re(this.ctx), A = new St(this.ctx), S = this.w.config.chart.animations.enabled, P = S && this.w.config.chart.animations.dynamicAnimation.enabled;
    if (s && s.startsWith("M 0 0") && r) {
      var T = r.match(/^M\s+[\d.-]+\s+[\d.-]+/);
      T && (s = s.replace(/^M\s+0\s+0/, T[0]));
    }
    var I = !!(S && !C.globals.resized || P && C.globals.dataChanged && C.globals.shouldAnimate);
    I ? t = s : (t = r, C.globals.animationEnded = !0);
    var R = C.config.stroke.dashArray, z = 0;
    z = Array.isArray(R) ? R[a] : C.config.stroke.dashArray;
    var Y = this.drawPath({ d: t, stroke: o, strokeWidth: l, fill: c, fillOpacity: 1, classes: p, strokeLinecap: h, strokeDashArray: z });
    Y.attr("index", a), b && (f === "bar" && !C.globals.isHorizontal || C.globals.comboCharts ? Y.attr({ "clip-path": "url(#gridRectBarMask".concat(C.globals.cuid, ")") }) : Y.attr({ "clip-path": "url(#gridRectMask".concat(C.globals.cuid, ")") })), C.config.chart.dropShadow.enabled && v && k.dropShadow(Y, C.config.chart.dropShadow, a), y && (Y.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, Y)), Y.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, Y)), Y.node.addEventListener("mousedown", this.pathMouseDown.bind(this, Y))), Y.attr({ pathTo: r, pathFrom: s });
    var N = { el: Y, j: i, realIndex: a, pathFrom: s, pathTo: r, fill: c, strokeWidth: l, delay: d };
    return !S || C.globals.resized || C.globals.dataChanged ? !C.globals.resized && C.globals.dataChanged || A.showDelayedElements() : A.animatePathsGradually(D(D({}, N), {}, { speed: u })), C.globals.dataChanged && P && I && A.animatePathsGradually(D(D({}, N), {}, { speed: g })), Y;
  } }, { key: "drawPattern", value: function(e, t, i) {
    var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "#a8a8a8", s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    return this.w.globals.dom.Paper.pattern(t, i, (function(r) {
      e === "horizontalLines" ? r.line(0, 0, i, 0).stroke({ color: a, width: s + 1 }) : e === "verticalLines" ? r.line(0, 0, 0, t).stroke({ color: a, width: s + 1 }) : e === "slantedLines" ? r.line(0, 0, t, i).stroke({ color: a, width: s }) : e === "squares" ? r.rect(t, i).fill("none").stroke({ color: a, width: s }) : e === "circles" && r.circle(t).fill("none").stroke({ color: a, width: s });
    }));
  } }, { key: "drawGradient", value: function(e, t, i, a, s) {
    var r, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, l = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, h = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], c = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : 0, d = this.w;
    t.length < 9 && t.indexOf("#") === 0 && (t = L.hexToRgba(t, a)), i.length < 9 && i.indexOf("#") === 0 && (i = L.hexToRgba(i, s));
    var u = 0, g = 1, p = 1, f = null;
    l !== null && (u = l[0] !== void 0 ? l[0] / 100 : 0, g = l[1] !== void 0 ? l[1] / 100 : 1, p = l[2] !== void 0 ? l[2] / 100 : 1, f = l[3] !== void 0 ? l[3] / 100 : null);
    var x = !(d.config.chart.type !== "donut" && d.config.chart.type !== "pie" && d.config.chart.type !== "polarArea" && d.config.chart.type !== "bubble");
    if (r = h && h.length !== 0 ? d.globals.dom.Paper.gradient(x ? "radial" : "linear", (function(y) {
      (Array.isArray(h[c]) ? h[c] : h).forEach((function(w) {
        y.stop(w.offset / 100, w.color, w.opacity);
      }));
    })) : d.globals.dom.Paper.gradient(x ? "radial" : "linear", (function(y) {
      y.stop(u, t, a), y.stop(g, i, s), y.stop(p, i, s), f !== null && y.stop(f, t, a);
    })), x) {
      var b = d.globals.gridWidth / 2, m = d.globals.gridHeight / 2;
      d.config.chart.type !== "bubble" ? r.attr({ gradientUnits: "userSpaceOnUse", cx: b, cy: m, r: o }) : r.attr({ cx: 0.5, cy: 0.5, r: 0.8, fx: 0.2, fy: 0.2 });
    } else e === "vertical" ? r.from(0, 0).to(0, 1) : e === "diagonal" ? r.from(0, 0).to(1, 1) : e === "horizontal" ? r.from(0, 1).to(1, 1) : e === "diagonal2" && r.from(1, 0).to(0, 1);
    return r;
  } }, { key: "getTextBasedOnMaxWidth", value: function(e) {
    var t = e.text, i = e.maxWidth, a = e.fontSize, s = e.fontFamily, r = this.getTextRects(t, a, s), o = r.width / t.length, l = Math.floor(i / o);
    return i < r.width ? t.slice(0, l - 3) + "..." : t;
  } }, { key: "drawText", value: function(e) {
    var t = this, i = e.x, a = e.y, s = e.text, r = e.textAnchor, o = e.fontSize, l = e.fontFamily, h = e.fontWeight, c = e.foreColor, d = e.opacity, u = e.maxWidth, g = e.cssClass, p = g === void 0 ? "" : g, f = e.isPlainText, x = f === void 0 || f, b = e.dominantBaseline, m = b === void 0 ? "auto" : b, y = this.w;
    s === void 0 && (s = "");
    var w = s;
    r || (r = "start"), c && c.length || (c = y.config.chart.foreColor), l = l || y.config.chart.fontFamily, h = h || "regular";
    var v, C = { maxWidth: u, fontSize: o = o || "11px", fontFamily: l };
    return Array.isArray(s) ? v = y.globals.dom.Paper.text((function(k) {
      for (var A = 0; A < s.length; A++) w = s[A], u && (w = t.getTextBasedOnMaxWidth(D({ text: s[A] }, C))), A === 0 ? k.tspan(w) : k.tspan(w).newLine();
    })) : (u && (w = this.getTextBasedOnMaxWidth(D({ text: s }, C))), v = x ? y.globals.dom.Paper.plain(s) : y.globals.dom.Paper.text((function(k) {
      return k.tspan(w);
    }))), v.attr({ x: i, y: a, "text-anchor": r, "dominant-baseline": m, "font-size": o, "font-family": l, "font-weight": h, fill: c, class: "apexcharts-text " + p }), v.node.style.fontFamily = l, v.node.style.opacity = d, v;
  } }, { key: "getMarkerPath", value: function(e, t, i, a) {
    var s = "";
    switch (i) {
      case "cross":
        s = "M ".concat(e - (a /= 1.4), " ").concat(t - a, " L ").concat(e + a, " ").concat(t + a, "  M ").concat(e - a, " ").concat(t + a, " L ").concat(e + a, " ").concat(t - a);
        break;
      case "plus":
        s = "M ".concat(e - (a /= 1.12), " ").concat(t, " L ").concat(e + a, " ").concat(t, "  M ").concat(e, " ").concat(t - a, " L ").concat(e, " ").concat(t + a);
        break;
      case "star":
      case "sparkle":
        var r = 5;
        a *= 1.15, i === "sparkle" && (a /= 1.1, r = 4);
        for (var o = Math.PI / r, l = 0; l <= 2 * r; l++) {
          var h = l * o, c = l % 2 == 0 ? a : a / 2;
          s += (l === 0 ? "M" : "L") + (e + c * Math.sin(h)) + "," + (t - c * Math.cos(h));
        }
        s += "Z";
        break;
      case "triangle":
        s = "M ".concat(e, " ").concat(t - a, ` 
             L `).concat(e + a, " ").concat(t + a, ` 
             L `).concat(e - a, " ").concat(t + a, ` 
             Z`);
        break;
      case "square":
      case "rect":
        s = "M ".concat(e - (a /= 1.125), " ").concat(t - a, ` 
           L `).concat(e + a, " ").concat(t - a, ` 
           L `).concat(e + a, " ").concat(t + a, ` 
           L `).concat(e - a, " ").concat(t + a, ` 
           Z`);
        break;
      case "diamond":
        a *= 1.05, s = "M ".concat(e, " ").concat(t - a, ` 
             L `).concat(e + a, " ").concat(t, ` 
             L `).concat(e, " ").concat(t + a, ` 
             L `).concat(e - a, " ").concat(t, ` 
            Z`);
        break;
      case "line":
        s = "M ".concat(e - (a /= 1.1), " ").concat(t, ` 
           L `).concat(e + a, " ").concat(t);
        break;
      default:
        a *= 2, s = "M ".concat(e, ", ").concat(t, ` 
           m -`).concat(a / 2, `, 0 
           a `).concat(a / 2, ",").concat(a / 2, " 0 1,0 ").concat(a, `,0 
           a `).concat(a / 2, ",").concat(a / 2, " 0 1,0 -").concat(a, ",0");
    }
    return s;
  } }, { key: "drawMarkerShape", value: function(e, t, i, a, s) {
    var r = this.drawPath({ d: this.getMarkerPath(e, t, i, a, s), stroke: s.pointStrokeColor, strokeDashArray: s.pointStrokeDashArray, strokeWidth: s.pointStrokeWidth, fill: s.pointFillColor, fillOpacity: s.pointFillOpacity, strokeOpacity: s.pointStrokeOpacity });
    return r.attr({ cx: e, cy: t, shape: s.shape, class: s.class ? s.class : "" }), r;
  } }, { key: "drawMarker", value: function(e, t, i) {
    e = e || 0;
    var a = i.pSize || 0;
    return L.isNumber(t) || (a = 0, t = 0), this.drawMarkerShape(e, t, i == null ? void 0 : i.shape, a, D(D({}, i), i.shape === "line" || i.shape === "plus" || i.shape === "cross" ? { pointStrokeColor: i.pointFillColor, pointStrokeOpacity: i.pointFillOpacity } : {}));
  } }, { key: "pathMouseEnter", value: function(e, t) {
    var i = this.w, a = new Re(this.ctx), s = parseInt(e.node.getAttribute("index"), 10), r = parseInt(e.node.getAttribute("j"), 10);
    if (typeof i.config.chart.events.dataPointMouseEnter == "function" && i.config.chart.events.dataPointMouseEnter(t, this.ctx, { seriesIndex: s, dataPointIndex: r, w: i }), this.ctx.events.fireEvent("dataPointMouseEnter", [t, this.ctx, { seriesIndex: s, dataPointIndex: r, w: i }]), (i.config.states.active.filter.type === "none" || e.node.getAttribute("selected") !== "true") && i.config.states.hover.filter.type !== "none" && !i.globals.isTouchDevice) {
      var o = i.config.states.hover.filter;
      a.applyFilter(e, s, o.type);
    }
  } }, { key: "pathMouseLeave", value: function(e, t) {
    var i = this.w, a = new Re(this.ctx), s = parseInt(e.node.getAttribute("index"), 10), r = parseInt(e.node.getAttribute("j"), 10);
    typeof i.config.chart.events.dataPointMouseLeave == "function" && i.config.chart.events.dataPointMouseLeave(t, this.ctx, { seriesIndex: s, dataPointIndex: r, w: i }), this.ctx.events.fireEvent("dataPointMouseLeave", [t, this.ctx, { seriesIndex: s, dataPointIndex: r, w: i }]), i.config.states.active.filter.type !== "none" && e.node.getAttribute("selected") === "true" || i.config.states.hover.filter.type !== "none" && a.getDefaultFilter(e, s);
  } }, { key: "pathMouseDown", value: function(e, t) {
    var i = this.w, a = new Re(this.ctx), s = parseInt(e.node.getAttribute("index"), 10), r = parseInt(e.node.getAttribute("j"), 10), o = "false";
    if (e.node.getAttribute("selected") === "true") {
      if (e.node.setAttribute("selected", "false"), i.globals.selectedDataPoints[s].indexOf(r) > -1) {
        var l = i.globals.selectedDataPoints[s].indexOf(r);
        i.globals.selectedDataPoints[s].splice(l, 1);
      }
    } else {
      if (!i.config.states.active.allowMultipleDataPointsSelection && i.globals.selectedDataPoints.length > 0) {
        i.globals.selectedDataPoints = [];
        var h = i.globals.dom.Paper.find(".apexcharts-series path:not(.apexcharts-decoration-element)"), c = i.globals.dom.Paper.find(".apexcharts-series circle:not(.apexcharts-decoration-element), .apexcharts-series rect:not(.apexcharts-decoration-element)"), d = function(p) {
          Array.prototype.forEach.call(p, (function(f) {
            f.node.setAttribute("selected", "false"), a.getDefaultFilter(f, s);
          }));
        };
        d(h), d(c);
      }
      e.node.setAttribute("selected", "true"), o = "true", i.globals.selectedDataPoints[s] === void 0 && (i.globals.selectedDataPoints[s] = []), i.globals.selectedDataPoints[s].push(r);
    }
    if (o === "true") {
      var u = i.config.states.active.filter;
      if (u !== "none") a.applyFilter(e, s, u.type);
      else if (i.config.states.hover.filter !== "none" && !i.globals.isTouchDevice) {
        var g = i.config.states.hover.filter;
        a.applyFilter(e, s, g.type);
      }
    } else i.config.states.active.filter.type !== "none" && (i.config.states.hover.filter.type === "none" || i.globals.isTouchDevice ? a.getDefaultFilter(e, s) : (g = i.config.states.hover.filter, a.applyFilter(e, s, g.type)));
    typeof i.config.chart.events.dataPointSelection == "function" && i.config.chart.events.dataPointSelection(t, this.ctx, { selectedDataPoints: i.globals.selectedDataPoints, seriesIndex: s, dataPointIndex: r, w: i }), t && this.ctx.events.fireEvent("dataPointSelection", [t, this.ctx, { selectedDataPoints: i.globals.selectedDataPoints, seriesIndex: s, dataPointIndex: r, w: i }]);
  } }, { key: "rotateAroundCenter", value: function(e) {
    var t = {};
    return e && typeof e.getBBox == "function" && (t = e.getBBox()), { x: t.x + t.width / 2, y: t.y + t.height / 2 };
  } }, { key: "getTextRects", value: function(e, t, i, a) {
    var s = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], r = this.w, o = this.drawText({ x: -200, y: -200, text: e, textAnchor: "start", fontSize: t, fontFamily: i, foreColor: "#fff", opacity: 0 });
    a && o.attr("transform", a), r.globals.dom.Paper.add(o);
    var l = o.bbox();
    return s || (l = o.node.getBoundingClientRect()), o.remove(), { width: l.width, height: l.height };
  } }, { key: "placeTextWithEllipsis", value: function(e, t, i) {
    if (typeof e.getComputedTextLength == "function" && (e.textContent = t, t.length > 0 && e.getComputedTextLength() >= i / 1.1)) {
      for (var a = t.length - 3; a > 0; a -= 3) if (e.getSubStringLength(0, a) <= i / 1.1) return void (e.textContent = t.substring(0, a) + "...");
      e.textContent = ".";
    }
  } }], [{ key: "setAttrs", value: function(e, t) {
    for (var i in t) t.hasOwnProperty(i) && e.setAttribute(i, t[i]);
  } }]), n;
})(), Le = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
  }
  return $(n, [{ key: "getStackedSeriesTotals", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = this.w, i = [];
    if (t.globals.series.length === 0) return i;
    for (var a = 0; a < t.globals.series[t.globals.maxValsInArrayIndex].length; a++) {
      for (var s = 0, r = 0; r < t.globals.series.length; r++) t.globals.series[r][a] !== void 0 && e.indexOf(r) === -1 && (s += t.globals.series[r][a]);
      i.push(s);
    }
    return i;
  } }, { key: "getSeriesTotalByIndex", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    return e === null ? this.w.config.series.reduce((function(t, i) {
      return t + i;
    }), 0) : this.w.globals.series[e].reduce((function(t, i) {
      return t + i;
    }), 0);
  } }, { key: "getStackedSeriesTotalsByGroups", value: function() {
    var e = this, t = this.w, i = [];
    return t.globals.seriesGroups.forEach((function(a) {
      var s = [];
      t.config.series.forEach((function(o, l) {
        a.indexOf(t.globals.seriesNames[l]) > -1 && s.push(l);
      }));
      var r = t.globals.series.map((function(o, l) {
        return s.indexOf(l) === -1 ? l : -1;
      })).filter((function(o) {
        return o !== -1;
      }));
      i.push(e.getStackedSeriesTotals(r));
    })), i;
  } }, { key: "setSeriesYAxisMappings", value: function() {
    var e = this.w.globals, t = this.w.config, i = [], a = [], s = [], r = e.series.length > t.yaxis.length || t.yaxis.some((function(d) {
      return Array.isArray(d.seriesName);
    }));
    t.series.forEach((function(d, u) {
      s.push(u), a.push(null);
    })), t.yaxis.forEach((function(d, u) {
      i[u] = [];
    }));
    var o = [];
    t.yaxis.forEach((function(d, u) {
      var g = !1;
      if (d.seriesName) {
        var p = [];
        Array.isArray(d.seriesName) ? p = d.seriesName : p.push(d.seriesName), p.forEach((function(f) {
          t.series.forEach((function(x, b) {
            if (x.name === f) {
              var m = b;
              u === b || r ? !r || s.indexOf(b) > -1 ? i[u].push([u, b]) : console.warn("Series '" + x.name + "' referenced more than once in what looks like the new style. That is, when using either seriesName: [], or when there are more series than yaxes.") : (i[b].push([b, u]), m = u), g = !0, (m = s.indexOf(m)) !== -1 && s.splice(m, 1);
            }
          }));
        }));
      }
      g || o.push(u);
    })), i = i.map((function(d, u) {
      var g = [];
      return d.forEach((function(p) {
        a[p[1]] = p[0], g.push(p[1]);
      })), g;
    }));
    for (var l = t.yaxis.length - 1, h = 0; h < o.length && (l = o[h], i[l] = [], s); h++) {
      var c = s[0];
      s.shift(), i[l].push(c), a[c] = l;
    }
    s.forEach((function(d) {
      i[l].push(d), a[d] = l;
    })), e.seriesYAxisMap = i.map((function(d) {
      return d;
    })), e.seriesYAxisReverseMap = a.map((function(d) {
      return d;
    })), e.seriesYAxisMap.forEach((function(d, u) {
      d.forEach((function(g) {
        t.series[g] && t.series[g].group === void 0 && (t.series[g].group = "apexcharts-axis-".concat(u.toString()));
      }));
    }));
  } }, { key: "isSeriesNull", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    return (e === null ? this.w.config.series.filter((function(t) {
      return t !== null;
    })) : this.w.config.series[e].data.filter((function(t) {
      return t !== null;
    }))).length === 0;
  } }, { key: "seriesHaveSameValues", value: function(e) {
    return this.w.globals.series[e].every((function(t, i, a) {
      return t === a[0];
    }));
  } }, { key: "getCategoryLabels", value: function(e) {
    var t = this.w, i = e.slice();
    return t.config.xaxis.convertedCatToNumeric && (i = e.map((function(a, s) {
      return t.config.xaxis.labels.formatter(a - t.globals.minX + 1);
    }))), i;
  } }, { key: "getLargestSeries", value: function() {
    var e = this.w;
    e.globals.maxValsInArrayIndex = e.globals.series.map((function(t) {
      return t.length;
    })).indexOf(Math.max.apply(Math, e.globals.series.map((function(t) {
      return t.length;
    }))));
  } }, { key: "getLargestMarkerSize", value: function() {
    var e = this.w, t = 0;
    return e.globals.markers.size.forEach((function(i) {
      t = Math.max(t, i);
    })), e.config.markers.discrete && e.config.markers.discrete.length && e.config.markers.discrete.forEach((function(i) {
      t = Math.max(t, i.size);
    })), t > 0 && (e.config.markers.hover.size > 0 ? t = e.config.markers.hover.size : t += e.config.markers.hover.sizeOffset), e.globals.markers.largestSize = t, t;
  } }, { key: "getSeriesTotals", value: function() {
    var e = this.w;
    e.globals.seriesTotals = e.globals.series.map((function(t, i) {
      var a = 0;
      if (Array.isArray(t)) for (var s = 0; s < t.length; s++) a += t[s];
      else a += t;
      return a;
    }));
  } }, { key: "getSeriesTotalsXRange", value: function(e, t) {
    var i = this.w;
    return i.globals.series.map((function(a, s) {
      for (var r = 0, o = 0; o < a.length; o++) i.globals.seriesX[s][o] > e && i.globals.seriesX[s][o] < t && (r += a[o]);
      return r;
    }));
  } }, { key: "getPercentSeries", value: function() {
    var e = this.w;
    e.globals.seriesPercent = e.globals.series.map((function(t, i) {
      var a = [];
      if (Array.isArray(t)) for (var s = 0; s < t.length; s++) {
        var r = e.globals.stackedSeriesTotals[s], o = 0;
        r && (o = 100 * t[s] / r), a.push(o);
      }
      else {
        var l = 100 * t / e.globals.seriesTotals.reduce((function(h, c) {
          return h + c;
        }), 0);
        a.push(l);
      }
      return a;
    }));
  } }, { key: "getCalculatedRatios", value: function() {
    var e, t, i, a = this, s = this.w, r = s.globals, o = [], l = 0, h = [], c = 0.1, d = 0;
    if (r.yRange = [], r.isMultipleYAxis) for (var u = 0; u < r.minYArr.length; u++) r.yRange.push(Math.abs(r.minYArr[u] - r.maxYArr[u])), h.push(0);
    else r.yRange.push(Math.abs(r.minY - r.maxY));
    r.xRange = Math.abs(r.maxX - r.minX), r.zRange = Math.abs(r.maxZ - r.minZ);
    for (var g = 0; g < r.yRange.length; g++) o.push(r.yRange[g] / r.gridHeight);
    if (t = r.xRange / r.gridWidth, e = r.yRange / r.gridWidth, i = r.xRange / r.gridHeight, (l = r.zRange / r.gridHeight * 16) || (l = 1), r.minY !== Number.MIN_VALUE && Math.abs(r.minY) !== 0 && (r.hasNegs = !0), s.globals.seriesYAxisReverseMap.length > 0) {
      var p = function(x, b) {
        var m = s.config.yaxis[s.globals.seriesYAxisReverseMap[b]], y = x < 0 ? -1 : 1;
        return x = Math.abs(x), m.logarithmic && (x = a.getBaseLog(m.logBase, x)), -y * x / o[b];
      };
      if (r.isMultipleYAxis) {
        h = [];
        for (var f = 0; f < o.length; f++) h.push(p(r.minYArr[f], f));
      } else (h = []).push(p(r.minY, 0)), r.minY !== Number.MIN_VALUE && Math.abs(r.minY) !== 0 && (c = -r.minY / e, d = r.minX / t);
    } else (h = []).push(0), c = 0, d = 0;
    return { yRatio: o, invertedYRatio: e, zRatio: l, xRatio: t, invertedXRatio: i, baseLineInvertedY: c, baseLineY: h, baseLineX: d };
  } }, { key: "getLogSeries", value: function(e) {
    var t = this, i = this.w;
    return i.globals.seriesLog = e.map((function(a, s) {
      var r = i.globals.seriesYAxisReverseMap[s];
      return i.config.yaxis[r] && i.config.yaxis[r].logarithmic ? a.map((function(o) {
        return o === null ? null : t.getLogVal(i.config.yaxis[r].logBase, o, s);
      })) : a;
    })), i.globals.invalidLogScale ? e : i.globals.seriesLog;
  } }, { key: "getLogValAtSeriesIndex", value: function(e, t) {
    if (e === null) return null;
    var i = this.w, a = i.globals.seriesYAxisReverseMap[t];
    return i.config.yaxis[a] && i.config.yaxis[a].logarithmic ? this.getLogVal(i.config.yaxis[a].logBase, e, t) : e;
  } }, { key: "getBaseLog", value: function(e, t) {
    return Math.log(t) / Math.log(e);
  } }, { key: "getLogVal", value: function(e, t, i) {
    if (t <= 0) return 0;
    var a = this.w, s = a.globals.minYArr[i] === 0 ? -1 : this.getBaseLog(e, a.globals.minYArr[i]), r = (a.globals.maxYArr[i] === 0 ? 0 : this.getBaseLog(e, a.globals.maxYArr[i])) - s;
    return t < 1 ? t / r : (this.getBaseLog(e, t) - s) / r;
  } }, { key: "getLogYRatios", value: function(e) {
    var t = this, i = this.w, a = this.w.globals;
    return a.yLogRatio = e.slice(), a.logYRange = a.yRange.map((function(s, r) {
      var o = i.globals.seriesYAxisReverseMap[r];
      if (i.config.yaxis[o] && t.w.config.yaxis[o].logarithmic) {
        var l, h = -Number.MAX_VALUE, c = Number.MIN_VALUE;
        return a.seriesLog.forEach((function(d, u) {
          d.forEach((function(g) {
            i.config.yaxis[u] && i.config.yaxis[u].logarithmic && (h = Math.max(g, h), c = Math.min(g, c));
          }));
        })), l = Math.pow(a.yRange[r], Math.abs(c - h) / a.yRange[r]), a.yLogRatio[r] = l / a.gridHeight, l;
      }
    })), a.invalidLogScale ? e.slice() : a.yLogRatio;
  } }, { key: "drawSeriesByGroup", value: function(e, t, i, a) {
    var s = this.w, r = [];
    return e.series.length > 0 && t.forEach((function(o) {
      var l = [], h = [];
      e.i.forEach((function(c, d) {
        s.config.series[c].group === o && (l.push(e.series[d]), h.push(c));
      })), l.length > 0 && r.push(a.draw(l, i, h));
    })), r;
  } }], [{ key: "checkComboSeries", value: function(e, t) {
    var i = !1, a = 0, s = 0;
    return t === void 0 && (t = "line"), e.length && e[0].type !== void 0 && e.forEach((function(r) {
      r.type !== "bar" && r.type !== "column" && r.type !== "candlestick" && r.type !== "boxPlot" || a++, r.type !== void 0 && r.type !== t && s++;
    })), s > 0 && (i = !0), { comboBarCount: a, comboCharts: i };
  } }, { key: "extendArrayProps", value: function(e, t, i) {
    var a, s, r, o, l, h;
    return (a = t) !== null && a !== void 0 && a.yaxis && (t = e.extendYAxis(t, i)), (s = t) !== null && s !== void 0 && s.annotations && (t.annotations.yaxis && (t = e.extendYAxisAnnotations(t)), (r = t) !== null && r !== void 0 && (o = r.annotations) !== null && o !== void 0 && o.xaxis && (t = e.extendXAxisAnnotations(t)), (l = t) !== null && l !== void 0 && (h = l.annotations) !== null && h !== void 0 && h.points && (t = e.extendPointAnnotations(t))), t;
  } }]), n;
})(), gi = (function() {
  function n(e) {
    q(this, n), this.w = e.w, this.annoCtx = e;
  }
  return $(n, [{ key: "setOrientations", value: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, i = this.w;
    if (e.label.orientation === "vertical") {
      var a = t !== null ? t : 0, s = i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a, "']"));
      if (s !== null) {
        var r = s.getBoundingClientRect();
        s.setAttribute("x", parseFloat(s.getAttribute("x")) - r.height + 4);
        var o = e.label.position === "top" ? r.width : -r.width;
        s.setAttribute("y", parseFloat(s.getAttribute("y")) + o);
        var l = this.annoCtx.graphics.rotateAroundCenter(s), h = l.x, c = l.y;
        s.setAttribute("transform", "rotate(-90 ".concat(h, " ").concat(c, ")"));
      }
    }
  } }, { key: "addBackgroundToAnno", value: function(e, t) {
    var i = this.w;
    if (!e || !t.label.text || !String(t.label.text).trim()) return null;
    var a = i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(), s = e.getBoundingClientRect(), r = t.label.style.padding, o = r.left, l = r.right, h = r.top, c = r.bottom;
    if (t.label.orientation === "vertical") {
      var d = [o, l, h, c];
      h = d[0], c = d[1], o = d[2], l = d[3];
    }
    var u = s.left - a.left - o, g = s.top - a.top - h, p = this.annoCtx.graphics.drawRect(u - i.globals.barPadForNumericAxis, g, s.width + o + l, s.height + h + c, t.label.borderRadius, t.label.style.background, 1, t.label.borderWidth, t.label.borderColor, 0);
    return t.id && p.node.classList.add(t.id), p;
  } }, { key: "annotationsBackground", value: function() {
    var e = this, t = this.w, i = function(a, s, r) {
      var o = t.globals.dom.baseEl.querySelector(".apexcharts-".concat(r, "-annotations .apexcharts-").concat(r, "-annotation-label[rel='").concat(s, "']"));
      if (o) {
        var l = o.parentNode, h = e.addBackgroundToAnno(o, a);
        h && (l.insertBefore(h.node, o), a.label.mouseEnter && h.node.addEventListener("mouseenter", a.label.mouseEnter.bind(e, a)), a.label.mouseLeave && h.node.addEventListener("mouseleave", a.label.mouseLeave.bind(e, a)), a.label.click && h.node.addEventListener("click", a.label.click.bind(e, a)));
      }
    };
    t.config.annotations.xaxis.forEach((function(a, s) {
      return i(a, s, "xaxis");
    })), t.config.annotations.yaxis.forEach((function(a, s) {
      return i(a, s, "yaxis");
    })), t.config.annotations.points.forEach((function(a, s) {
      return i(a, s, "point");
    }));
  } }, { key: "getY1Y2", value: function(e, t) {
    var i, a = this.w, s = e === "y1" ? t.y : t.y2, r = !1;
    if (this.annoCtx.invertAxis) {
      var o = a.config.xaxis.convertedCatToNumeric ? a.globals.categoryLabels : a.globals.labels, l = o.indexOf(s), h = a.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(".concat(l + 1, ")"));
      i = h ? parseFloat(h.getAttribute("y")) : (a.globals.gridHeight / o.length - 1) * (l + 1) - a.globals.barHeight, t.seriesIndex !== void 0 && a.globals.barHeight && (i -= a.globals.barHeight / 2 * (a.globals.series.length - 1) - a.globals.barHeight * t.seriesIndex);
    } else {
      var c, d = a.globals.seriesYAxisMap[t.yAxisIndex][0], u = a.config.yaxis[t.yAxisIndex].logarithmic ? new Le(this.annoCtx.ctx).getLogVal(a.config.yaxis[t.yAxisIndex].logBase, s, d) / a.globals.yLogRatio[d] : (s - a.globals.minYArr[d]) / (a.globals.yRange[d] / a.globals.gridHeight);
      i = a.globals.gridHeight - Math.min(Math.max(u, 0), a.globals.gridHeight), r = u > a.globals.gridHeight || u < 0, !t.marker || t.y !== void 0 && t.y !== null || (i = 0), (c = a.config.yaxis[t.yAxisIndex]) !== null && c !== void 0 && c.reversed && (i = u);
    }
    return typeof s == "string" && s.includes("px") && (i = parseFloat(s)), { yP: i, clipped: r };
  } }, { key: "getX1X2", value: function(e, t) {
    var i = this.w, a = e === "x1" ? t.x : t.x2, s = this.annoCtx.invertAxis ? i.globals.minY : i.globals.minX, r = this.annoCtx.invertAxis ? i.globals.maxY : i.globals.maxX, o = this.annoCtx.invertAxis ? i.globals.yRange[0] : i.globals.xRange, l = !1, h = this.annoCtx.inversedReversedAxis ? (r - a) / (o / i.globals.gridWidth) : (a - s) / (o / i.globals.gridWidth);
    return i.config.xaxis.type !== "category" && !i.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || i.globals.dataFormatXNumeric || i.config.chart.sparkline.enabled || (h = this.getStringX(a)), typeof a == "string" && a.includes("px") && (h = parseFloat(a)), a == null && t.marker && (h = i.globals.gridWidth), t.seriesIndex !== void 0 && i.globals.barWidth && !this.annoCtx.invertAxis && (h -= i.globals.barWidth / 2 * (i.globals.series.length - 1) - i.globals.barWidth * t.seriesIndex), typeof h != "number" && (h = 0, l = !0), parseFloat(h.toFixed(10)) > parseFloat(i.globals.gridWidth.toFixed(10)) ? (h = i.globals.gridWidth, l = !0) : h < 0 && (h = 0, l = !0), { x: h, clipped: l };
  } }, { key: "getStringX", value: function(e) {
    var t = this.w, i = e;
    t.config.xaxis.convertedCatToNumeric && t.globals.categoryLabels.length && (e = t.globals.categoryLabels.indexOf(e) + 1);
    var a = t.globals.labels.map((function(r) {
      return Array.isArray(r) ? r.join(" ") : r;
    })).indexOf(e), s = t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(".concat(a + 1, ")"));
    return s && (i = parseFloat(s.getAttribute("x"))), i;
  } }]), n;
})(), Xo = (function() {
  function n(e) {
    q(this, n), this.w = e.w, this.annoCtx = e, this.invertAxis = this.annoCtx.invertAxis, this.helpers = new gi(this.annoCtx);
  }
  return $(n, [{ key: "addXaxisAnnotation", value: function(e, t, i) {
    var a, s = this.w, r = this.helpers.getX1X2("x1", e), o = r.x, l = r.clipped, h = !0, c = e.label.text, d = e.strokeDashArray;
    if (L.isNumber(o)) {
      if (e.x2 === null || e.x2 === void 0) {
        if (!l) {
          var u = this.annoCtx.graphics.drawLine(o + e.offsetX, 0 + e.offsetY, o + e.offsetX, s.globals.gridHeight + e.offsetY, e.borderColor, d, e.borderWidth);
          t.appendChild(u.node), e.id && u.node.classList.add(e.id);
        }
      } else {
        var g = this.helpers.getX1X2("x2", e);
        if (a = g.x, h = g.clipped, a < o) {
          var p = o;
          o = a, a = p;
        }
        var f = this.annoCtx.graphics.drawRect(o + e.offsetX, 0 + e.offsetY, a - o, s.globals.gridHeight + e.offsetY, 0, e.fillColor, e.opacity, 1, e.borderColor, d);
        f.node.classList.add("apexcharts-annotation-rect"), f.attr("clip-path", "url(#gridRectMask".concat(s.globals.cuid, ")")), t.appendChild(f.node), e.id && f.node.classList.add(e.id);
      }
      if (!l || !h) {
        var x = this.annoCtx.graphics.getTextRects(c, parseFloat(e.label.style.fontSize)), b = e.label.position === "top" ? 4 : e.label.position === "center" ? s.globals.gridHeight / 2 + (e.label.orientation === "vertical" ? x.width / 2 : 0) : s.globals.gridHeight, m = this.annoCtx.graphics.drawText({ x: o + e.label.offsetX, y: b + e.label.offsetY - (e.label.orientation === "vertical" ? e.label.position === "top" ? x.width / 2 - 12 : -x.width / 2 : 0), text: c, textAnchor: e.label.textAnchor, fontSize: e.label.style.fontSize, fontFamily: e.label.style.fontFamily, fontWeight: e.label.style.fontWeight, foreColor: e.label.style.color, cssClass: "apexcharts-xaxis-annotation-label ".concat(e.label.style.cssClass, " ").concat(e.id ? e.id : "") });
        m.attr({ rel: i }), t.appendChild(m.node), this.annoCtx.helpers.setOrientations(e, i);
      }
    }
  } }, { key: "drawXAxisAnnotations", value: function() {
    var e = this, t = this.w, i = this.annoCtx.graphics.group({ class: "apexcharts-xaxis-annotations" });
    return t.config.annotations.xaxis.map((function(a, s) {
      e.addXaxisAnnotation(a, i.node, s);
    })), i;
  } }]), n;
})(), Ie = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  }
  return $(n, [{ key: "isValidDate", value: function(e) {
    return typeof e != "number" && !isNaN(this.parseDate(e));
  } }, { key: "getTimeStamp", value: function(e) {
    return Date.parse(e) ? this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(e).toISOString().substr(0, 25)).getTime() : new Date(e).getTime() : e;
  } }, { key: "getDate", value: function(e) {
    return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(e).toUTCString()) : new Date(e);
  } }, { key: "parseDate", value: function(e) {
    var t = Date.parse(e);
    if (!isNaN(t)) return this.getTimeStamp(e);
    var i = Date.parse(e.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
    return i = this.getTimeStamp(i);
  } }, { key: "parseDateWithTimezone", value: function(e) {
    return Date.parse(e.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
  } }, { key: "formatDate", value: function(e, t) {
    var i = this.w.globals.locale, a = this.w.config.xaxis.labels.datetimeUTC, s = ["\0"].concat(Ee(i.months)), r = [""].concat(Ee(i.shortMonths)), o = [""].concat(Ee(i.days)), l = [""].concat(Ee(i.shortDays));
    function h(A, S) {
      var P = A + "";
      for (S = S || 2; P.length < S; ) P = "0" + P;
      return P;
    }
    var c = a ? e.getUTCFullYear() : e.getFullYear();
    t = (t = (t = t.replace(/(^|[^\\])yyyy+/g, "$1" + c)).replace(/(^|[^\\])yy/g, "$1" + c.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + c);
    var d = (a ? e.getUTCMonth() : e.getMonth()) + 1;
    t = (t = (t = (t = t.replace(/(^|[^\\])MMMM+/g, "$1" + s[0])).replace(/(^|[^\\])MMM/g, "$1" + r[0])).replace(/(^|[^\\])MM/g, "$1" + h(d))).replace(/(^|[^\\])M/g, "$1" + d);
    var u = a ? e.getUTCDate() : e.getDate();
    t = (t = (t = (t = t.replace(/(^|[^\\])dddd+/g, "$1" + o[0])).replace(/(^|[^\\])ddd/g, "$1" + l[0])).replace(/(^|[^\\])dd/g, "$1" + h(u))).replace(/(^|[^\\])d/g, "$1" + u);
    var g = a ? e.getUTCHours() : e.getHours(), p = g > 12 ? g - 12 : g === 0 ? 12 : g;
    t = (t = (t = (t = t.replace(/(^|[^\\])HH+/g, "$1" + h(g))).replace(/(^|[^\\])H/g, "$1" + g)).replace(/(^|[^\\])hh+/g, "$1" + h(p))).replace(/(^|[^\\])h/g, "$1" + p);
    var f = a ? e.getUTCMinutes() : e.getMinutes();
    t = (t = t.replace(/(^|[^\\])mm+/g, "$1" + h(f))).replace(/(^|[^\\])m/g, "$1" + f);
    var x = a ? e.getUTCSeconds() : e.getSeconds();
    t = (t = t.replace(/(^|[^\\])ss+/g, "$1" + h(x))).replace(/(^|[^\\])s/g, "$1" + x);
    var b = a ? e.getUTCMilliseconds() : e.getMilliseconds();
    t = t.replace(/(^|[^\\])fff+/g, "$1" + h(b, 3)), b = Math.round(b / 10), t = t.replace(/(^|[^\\])ff/g, "$1" + h(b)), b = Math.round(b / 10);
    var m = g < 12 ? "AM" : "PM";
    t = (t = (t = t.replace(/(^|[^\\])f/g, "$1" + b)).replace(/(^|[^\\])TT+/g, "$1" + m)).replace(/(^|[^\\])T/g, "$1" + m.charAt(0));
    var y = m.toLowerCase();
    t = (t = t.replace(/(^|[^\\])tt+/g, "$1" + y)).replace(/(^|[^\\])t/g, "$1" + y.charAt(0));
    var w = -e.getTimezoneOffset(), v = a || !w ? "Z" : w > 0 ? "+" : "-";
    if (!a) {
      var C = (w = Math.abs(w)) % 60;
      v += h(Math.floor(w / 60)) + ":" + h(C);
    }
    t = t.replace(/(^|[^\\])K/g, "$1" + v);
    var k = (a ? e.getUTCDay() : e.getDay()) + 1;
    return t = (t = (t = (t = (t = t.replace(new RegExp(o[0], "g"), o[k])).replace(new RegExp(l[0], "g"), l[k])).replace(new RegExp(s[0], "g"), s[d])).replace(new RegExp(r[0], "g"), r[d])).replace(/\\(.)/g, "$1");
  } }, { key: "getTimeUnitsfromTimestamp", value: function(e, t, i) {
    var a = this.w;
    a.config.xaxis.min !== void 0 && (e = a.config.xaxis.min), a.config.xaxis.max !== void 0 && (t = a.config.xaxis.max);
    var s = this.getDate(e), r = this.getDate(t), o = this.formatDate(s, "yyyy MM dd HH mm ss fff").split(" "), l = this.formatDate(r, "yyyy MM dd HH mm ss fff").split(" ");
    return { minMillisecond: parseInt(o[6], 10), maxMillisecond: parseInt(l[6], 10), minSecond: parseInt(o[5], 10), maxSecond: parseInt(l[5], 10), minMinute: parseInt(o[4], 10), maxMinute: parseInt(l[4], 10), minHour: parseInt(o[3], 10), maxHour: parseInt(l[3], 10), minDate: parseInt(o[2], 10), maxDate: parseInt(l[2], 10), minMonth: parseInt(o[1], 10) - 1, maxMonth: parseInt(l[1], 10) - 1, minYear: parseInt(o[0], 10), maxYear: parseInt(l[0], 10) };
  } }, { key: "isLeapYear", value: function(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  } }, { key: "calculcateLastDaysOfMonth", value: function(e, t, i) {
    return this.determineDaysOfMonths(e, t) - i;
  } }, { key: "determineDaysOfYear", value: function(e) {
    var t = 365;
    return this.isLeapYear(e) && (t = 366), t;
  } }, { key: "determineRemainingDaysOfYear", value: function(e, t, i) {
    var a = this.daysCntOfYear[t] + i;
    return t > 1 && this.isLeapYear() && a++, a;
  } }, { key: "determineDaysOfMonths", value: function(e, t) {
    var i = 30;
    switch (e = L.monthMod(e), !0) {
      case this.months30.indexOf(e) > -1:
        e === 2 && (i = this.isLeapYear(t) ? 29 : 28);
        break;
      case this.months31.indexOf(e) > -1:
      default:
        i = 31;
    }
    return i;
  } }]), n;
})(), $t = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w, this.tooltipKeyFormat = "dd MMM";
  }
  return $(n, [{ key: "xLabelFormat", value: function(e, t, i, a) {
    var s = this.w;
    if (s.config.xaxis.type === "datetime" && s.config.xaxis.labels.formatter === void 0 && s.config.tooltip.x.formatter === void 0) {
      var r = new Ie(this.ctx);
      return r.formatDate(r.getDate(t), s.config.tooltip.x.format);
    }
    return e(t, i, a);
  } }, { key: "defaultGeneralFormatter", value: function(e) {
    return Array.isArray(e) ? e.map((function(t) {
      return t;
    })) : e;
  } }, { key: "defaultYFormatter", value: function(e, t, i) {
    var a = this.w;
    if (L.isNumber(e)) if (a.globals.yValueDecimal !== 0) e = e.toFixed(t.decimalsInFloat !== void 0 ? t.decimalsInFloat : a.globals.yValueDecimal);
    else {
      var s = e.toFixed(0);
      e = e == s ? s : e.toFixed(1);
    }
    return e;
  } }, { key: "setLabelFormatters", value: function() {
    var e = this, t = this.w;
    return t.globals.xaxisTooltipFormatter = function(i) {
      return e.defaultGeneralFormatter(i);
    }, t.globals.ttKeyFormatter = function(i) {
      return e.defaultGeneralFormatter(i);
    }, t.globals.ttZFormatter = function(i) {
      return i;
    }, t.globals.legendFormatter = function(i) {
      return e.defaultGeneralFormatter(i);
    }, t.config.xaxis.labels.formatter !== void 0 ? t.globals.xLabelFormatter = t.config.xaxis.labels.formatter : t.globals.xLabelFormatter = function(i) {
      if (L.isNumber(i)) {
        if (!t.config.xaxis.convertedCatToNumeric && t.config.xaxis.type === "numeric") {
          if (L.isNumber(t.config.xaxis.decimalsInFloat)) return i.toFixed(t.config.xaxis.decimalsInFloat);
          var a = t.globals.maxX - t.globals.minX;
          return a > 0 && a < 100 ? i.toFixed(1) : i.toFixed(0);
        }
        return t.globals.isBarHorizontal && t.globals.maxY - t.globals.minYArr < 4 ? i.toFixed(1) : i.toFixed(0);
      }
      return i;
    }, typeof t.config.tooltip.x.formatter == "function" ? t.globals.ttKeyFormatter = t.config.tooltip.x.formatter : t.globals.ttKeyFormatter = t.globals.xLabelFormatter, typeof t.config.xaxis.tooltip.formatter == "function" && (t.globals.xaxisTooltipFormatter = t.config.xaxis.tooltip.formatter), (Array.isArray(t.config.tooltip.y) || t.config.tooltip.y.formatter !== void 0) && (t.globals.ttVal = t.config.tooltip.y), t.config.tooltip.z.formatter !== void 0 && (t.globals.ttZFormatter = t.config.tooltip.z.formatter), t.config.legend.formatter !== void 0 && (t.globals.legendFormatter = t.config.legend.formatter), t.config.yaxis.forEach((function(i, a) {
      i.labels.formatter !== void 0 ? t.globals.yLabelFormatters[a] = i.labels.formatter : t.globals.yLabelFormatters[a] = function(s) {
        return t.globals.xyCharts ? Array.isArray(s) ? s.map((function(r) {
          return e.defaultYFormatter(r, i, a);
        })) : e.defaultYFormatter(s, i, a) : s;
      };
    })), t.globals;
  } }, { key: "heatmapLabelFormatters", value: function() {
    var e = this.w;
    if (e.config.chart.type === "heatmap") {
      e.globals.yAxisScale[0].result = e.globals.seriesNames.slice();
      var t = e.globals.seriesNames.reduce((function(i, a) {
        return i.length > a.length ? i : a;
      }), 0);
      e.globals.yAxisScale[0].niceMax = t, e.globals.yAxisScale[0].niceMin = t;
    }
  } }]), n;
})(), st = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
  }
  return $(n, [{ key: "getLabel", value: function(e, t, i, a) {
    var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "12px", o = !(arguments.length > 6 && arguments[6] !== void 0) || arguments[6], l = this.w, h = e[a] === void 0 ? "" : e[a], c = h, d = l.globals.xLabelFormatter, u = l.config.xaxis.labels.formatter, g = !1, p = new $t(this.ctx), f = h;
    o && (c = p.xLabelFormat(d, h, f, { i: a, dateFormatter: new Ie(this.ctx).formatDate, w: l }), u !== void 0 && (c = u(h, e[a], { i: a, dateFormatter: new Ie(this.ctx).formatDate, w: l })));
    var x, b;
    t.length > 0 ? (x = t[a].unit, b = null, t.forEach((function(v) {
      v.unit === "month" ? b = "year" : v.unit === "day" ? b = "month" : v.unit === "hour" ? b = "day" : v.unit === "minute" && (b = "hour");
    })), g = b === x, i = t[a].position, c = t[a].value) : l.config.xaxis.type === "datetime" && u === void 0 && (c = ""), c === void 0 && (c = ""), c = Array.isArray(c) ? c : c.toString();
    var m = new X(this.ctx), y = {};
    y = l.globals.rotateXLabels && o ? m.getTextRects(c, parseInt(r, 10), null, "rotate(".concat(l.config.xaxis.labels.rotate, " 0 0)"), !1) : m.getTextRects(c, parseInt(r, 10));
    var w = !l.config.xaxis.labels.showDuplicates && this.ctx.timeScale;
    return !Array.isArray(c) && (String(c) === "NaN" || s.indexOf(c) >= 0 && w) && (c = ""), { x: i, text: c, textRect: y, isBold: g };
  } }, { key: "checkLabelBasedOnTickamount", value: function(e, t, i) {
    var a = this.w, s = a.config.xaxis.tickAmount;
    return s === "dataPoints" && (s = Math.round(a.globals.gridWidth / 120)), s > i || e % Math.round(i / (s + 1)) == 0 || (t.text = ""), t;
  } }, { key: "checkForOverflowingLabels", value: function(e, t, i, a, s) {
    var r = this.w;
    if (e === 0 && r.globals.skipFirstTimelinelabel && (t.text = ""), e === i - 1 && r.globals.skipLastTimelinelabel && (t.text = ""), r.config.xaxis.labels.hideOverlappingLabels && a.length > 0) {
      var o = s[s.length - 1];
      t.x < o.textRect.width / (r.globals.rotateXLabels ? Math.abs(r.config.xaxis.labels.rotate) / 12 : 1.01) + o.x && (t.text = "");
    }
    return t;
  } }, { key: "checkForReversedLabels", value: function(e, t) {
    var i = this.w;
    return i.config.yaxis[e] && i.config.yaxis[e].reversed && t.reverse(), t;
  } }, { key: "yAxisAllSeriesCollapsed", value: function(e) {
    var t = this.w.globals;
    return !t.seriesYAxisMap[e].some((function(i) {
      return t.collapsedSeriesIndices.indexOf(i) === -1;
    }));
  } }, { key: "translateYAxisIndex", value: function(e) {
    var t = this.w, i = t.globals, a = t.config.yaxis;
    return i.series.length > a.length || a.some((function(s) {
      return Array.isArray(s.seriesName);
    })) ? e : i.seriesYAxisReverseMap[e];
  } }, { key: "isYAxisHidden", value: function(e) {
    var t = this.w, i = t.config.yaxis[e];
    if (!i.show || this.yAxisAllSeriesCollapsed(e)) return !0;
    if (!i.showForNullSeries) {
      var a = t.globals.seriesYAxisMap[e], s = new Le(this.ctx);
      return a.every((function(r) {
        return s.isSeriesNull(r);
      }));
    }
    return !1;
  } }, { key: "getYAxisForeColor", value: function(e, t) {
    var i = this.w;
    return Array.isArray(e) && i.globals.yAxisScale[t] && this.ctx.theme.pushExtraColors(e, i.globals.yAxisScale[t].result.length, !1), e;
  } }, { key: "drawYAxisTicks", value: function(e, t, i, a, s, r, o) {
    var l = this.w, h = new X(this.ctx), c = l.globals.translateY + l.config.yaxis[s].labels.offsetY;
    if (l.globals.isBarHorizontal ? c = 0 : l.config.chart.type === "heatmap" && (c += r / 2), a.show && t > 0) {
      l.config.yaxis[s].opposite === !0 && (e += a.width);
      for (var d = t; d >= 0; d--) {
        var u = h.drawLine(e + i.offsetX - a.width + a.offsetX, c + a.offsetY, e + i.offsetX + a.offsetX, c + a.offsetY, a.color);
        o.add(u), c += r;
      }
    }
  } }]), n;
})(), No = (function() {
  function n(e) {
    q(this, n), this.w = e.w, this.annoCtx = e, this.helpers = new gi(this.annoCtx), this.axesUtils = new st(this.annoCtx);
  }
  return $(n, [{ key: "addYaxisAnnotation", value: function(e, t, i) {
    var a, s = this.w, r = e.strokeDashArray, o = this.helpers.getY1Y2("y1", e), l = o.yP, h = o.clipped, c = !0, d = !1, u = e.label.text;
    if (e.y2 === null || e.y2 === void 0) {
      if (!h) {
        d = !0;
        var g = this.annoCtx.graphics.drawLine(0 + e.offsetX, l + e.offsetY, this._getYAxisAnnotationWidth(e), l + e.offsetY, e.borderColor, r, e.borderWidth);
        t.appendChild(g.node), e.id && g.node.classList.add(e.id);
      }
    } else {
      if (a = (o = this.helpers.getY1Y2("y2", e)).yP, c = o.clipped, a > l) {
        var p = l;
        l = a, a = p;
      }
      if (!h || !c) {
        d = !0;
        var f = this.annoCtx.graphics.drawRect(0 + e.offsetX, a + e.offsetY, this._getYAxisAnnotationWidth(e), l - a, 0, e.fillColor, e.opacity, 1, e.borderColor, r);
        f.node.classList.add("apexcharts-annotation-rect"), f.attr("clip-path", "url(#gridRectMask".concat(s.globals.cuid, ")")), t.appendChild(f.node), e.id && f.node.classList.add(e.id);
      }
    }
    if (d) {
      var x = e.label.position === "right" ? s.globals.gridWidth : e.label.position === "center" ? s.globals.gridWidth / 2 : 0, b = this.annoCtx.graphics.drawText({ x: x + e.label.offsetX, y: (a ?? l) + e.label.offsetY - 3, text: u, textAnchor: e.label.textAnchor, fontSize: e.label.style.fontSize, fontFamily: e.label.style.fontFamily, fontWeight: e.label.style.fontWeight, foreColor: e.label.style.color, cssClass: "apexcharts-yaxis-annotation-label ".concat(e.label.style.cssClass, " ").concat(e.id ? e.id : "") });
      b.attr({ rel: i }), t.appendChild(b.node);
    }
  } }, { key: "_getYAxisAnnotationWidth", value: function(e) {
    var t = this.w;
    return t.globals.gridWidth, (e.width.indexOf("%") > -1 ? t.globals.gridWidth * parseInt(e.width, 10) / 100 : parseInt(e.width, 10)) + e.offsetX;
  } }, { key: "drawYAxisAnnotations", value: function() {
    var e = this, t = this.w, i = this.annoCtx.graphics.group({ class: "apexcharts-yaxis-annotations" });
    return t.config.annotations.yaxis.forEach((function(a, s) {
      a.yAxisIndex = e.axesUtils.translateYAxisIndex(a.yAxisIndex), e.axesUtils.isYAxisHidden(a.yAxisIndex) && e.axesUtils.yAxisAllSeriesCollapsed(a.yAxisIndex) || e.addYaxisAnnotation(a, i.node, s);
    })), i;
  } }]), n;
})(), Ho = (function() {
  function n(e) {
    q(this, n), this.w = e.w, this.annoCtx = e, this.helpers = new gi(this.annoCtx);
  }
  return $(n, [{ key: "addPointAnnotation", value: function(e, t, i) {
    if (!(this.w.globals.collapsedSeriesIndices.indexOf(e.seriesIndex) > -1)) {
      var a = this.helpers.getX1X2("x1", e), s = a.x, r = a.clipped, o = (a = this.helpers.getY1Y2("y1", e)).yP, l = a.clipped;
      if (L.isNumber(s) && !l && !r) {
        var h = { pSize: e.marker.size, pointStrokeWidth: e.marker.strokeWidth, pointFillColor: e.marker.fillColor, pointStrokeColor: e.marker.strokeColor, shape: e.marker.shape, pRadius: e.marker.radius, class: "apexcharts-point-annotation-marker ".concat(e.marker.cssClass, " ").concat(e.id ? e.id : "") }, c = this.annoCtx.graphics.drawMarker(s + e.marker.offsetX, o + e.marker.offsetY, h);
        t.appendChild(c.node);
        var d = e.label.text ? e.label.text : "", u = this.annoCtx.graphics.drawText({ x: s + e.label.offsetX, y: o + e.label.offsetY - e.marker.size - parseFloat(e.label.style.fontSize) / 1.6, text: d, textAnchor: e.label.textAnchor, fontSize: e.label.style.fontSize, fontFamily: e.label.style.fontFamily, fontWeight: e.label.style.fontWeight, foreColor: e.label.style.color, cssClass: "apexcharts-point-annotation-label ".concat(e.label.style.cssClass, " ").concat(e.id ? e.id : "") });
        if (u.attr({ rel: i }), t.appendChild(u.node), e.customSVG.SVG) {
          var g = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations-custom-svg " + e.customSVG.cssClass });
          g.attr({ transform: "translate(".concat(s + e.customSVG.offsetX, ", ").concat(o + e.customSVG.offsetY, ")") }), g.node.innerHTML = e.customSVG.SVG, t.appendChild(g.node);
        }
        if (e.image.path) {
          var p = e.image.width ? e.image.width : 20, f = e.image.height ? e.image.height : 20;
          c = this.annoCtx.addImage({ x: s + e.image.offsetX - p / 2, y: o + e.image.offsetY - f / 2, width: p, height: f, path: e.image.path, appendTo: ".apexcharts-point-annotations" });
        }
        e.mouseEnter && c.node.addEventListener("mouseenter", e.mouseEnter.bind(this, e)), e.mouseLeave && c.node.addEventListener("mouseleave", e.mouseLeave.bind(this, e)), e.click && c.node.addEventListener("click", e.click.bind(this, e));
      }
    }
  } }, { key: "drawPointAnnotations", value: function() {
    var e = this, t = this.w, i = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations" });
    return t.config.annotations.points.map((function(a, s) {
      e.addPointAnnotation(a, i.node, s);
    })), i;
  } }]), n;
})(), lr = { name: "en", options: { months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], toolbar: { exportToSVG: "Download SVG", exportToPNG: "Download PNG", exportToCSV: "Download CSV", menu: "Menu", selection: "Selection", selectionZoom: "Selection Zoom", zoomIn: "Zoom In", zoomOut: "Zoom Out", pan: "Panning", reset: "Reset Zoom" } } }, lt = (function() {
  function n() {
    q(this, n), this.yAxis = { show: !0, showAlways: !1, showForNullSeries: !0, seriesName: void 0, opposite: !1, reversed: !1, logarithmic: !1, logBase: 10, tickAmount: void 0, stepSize: void 0, forceNiceScale: !1, max: void 0, min: void 0, floating: !1, decimalsInFloat: void 0, labels: { show: !0, showDuplicates: !1, minWidth: 0, maxWidth: 160, offsetX: 0, offsetY: 0, align: void 0, rotate: 0, padding: 20, style: { colors: [], fontSize: "11px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, formatter: void 0 }, axisBorder: { show: !1, color: "#e0e0e0", width: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: !1, color: "#e0e0e0", width: 6, offsetX: 0, offsetY: 0 }, title: { text: void 0, rotate: -90, offsetY: 0, offsetX: 0, style: { color: void 0, fontSize: "11px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, tooltip: { enabled: !1, offsetX: 0 }, crosshairs: { show: !0, position: "front", stroke: { color: "#b6b6b6", width: 1, dashArray: 0 } } }, this.pointAnnotation = { id: void 0, x: 0, y: null, yAxisIndex: 0, seriesIndex: void 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, marker: { size: 4, fillColor: "#fff", strokeWidth: 2, strokeColor: "#333", shape: "circle", offsetX: 0, offsetY: 0, cssClass: "" }, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } }, customSVG: { SVG: void 0, cssClass: void 0, offsetX: 0, offsetY: 0 }, image: { path: void 0, width: 20, height: 20, offsetX: 0, offsetY: 0 } }, this.yAxisAnnotation = { id: void 0, y: 0, y2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, width: "100%", yAxisIndex: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "end", position: "right", offsetX: 0, offsetY: -3, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.xAxisAnnotation = { id: void 0, x: 0, x2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", orientation: "vertical", position: "top", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.text = { x: 0, y: 0, text: "", textAnchor: "start", foreColor: void 0, fontSize: "13px", fontFamily: void 0, fontWeight: 400, appendTo: ".apexcharts-annotations", backgroundColor: "transparent", borderColor: "#c2c2c2", borderRadius: 0, borderWidth: 0, paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2 };
  }
  return $(n, [{ key: "init", value: function() {
    return { annotations: { yaxis: [this.yAxisAnnotation], xaxis: [this.xAxisAnnotation], points: [this.pointAnnotation], texts: [], images: [], shapes: [] }, chart: { animations: { enabled: !0, speed: 800, animateGradually: { delay: 150, enabled: !0 }, dynamicAnimation: { enabled: !0, speed: 350 } }, background: "", locales: [lr], defaultLocale: "en", dropShadow: { enabled: !1, enabledOnSeries: void 0, top: 2, left: 2, blur: 4, color: "#000", opacity: 0.7 }, events: { animationEnd: void 0, beforeMount: void 0, mounted: void 0, updated: void 0, click: void 0, mouseMove: void 0, mouseLeave: void 0, xAxisLabelClick: void 0, legendClick: void 0, markerClick: void 0, selection: void 0, dataPointSelection: void 0, dataPointMouseEnter: void 0, dataPointMouseLeave: void 0, beforeZoom: void 0, beforeResetZoom: void 0, zoomed: void 0, scrolled: void 0, brushScrolled: void 0 }, foreColor: "#373d3f", fontFamily: "Helvetica, Arial, sans-serif", height: "auto", parentHeightOffset: 15, redrawOnParentResize: !0, redrawOnWindowResize: !0, id: void 0, group: void 0, nonce: void 0, offsetX: 0, offsetY: 0, selection: { enabled: !1, type: "x", fill: { color: "#24292e", opacity: 0.1 }, stroke: { width: 1, color: "#24292e", opacity: 0.4, dashArray: 3 }, xaxis: { min: void 0, max: void 0 }, yaxis: { min: void 0, max: void 0 } }, sparkline: { enabled: !1 }, brush: { enabled: !1, autoScaleYaxis: !0, target: void 0, targets: void 0 }, stacked: !1, stackOnlyBar: !0, stackType: "normal", toolbar: { show: !0, offsetX: 0, offsetY: 0, tools: { download: !0, selection: !0, zoom: !0, zoomin: !0, zoomout: !0, pan: !0, reset: !0, customIcons: [] }, export: { csv: { filename: void 0, columnDelimiter: ",", headerCategory: "category", headerValue: "value", categoryFormatter: void 0, valueFormatter: void 0 }, png: { filename: void 0 }, svg: { filename: void 0 }, scale: void 0, width: void 0 }, autoSelected: "zoom" }, type: "line", width: "100%", zoom: { enabled: !0, type: "x", autoScaleYaxis: !1, allowMouseWheelZoom: !0, zoomedArea: { fill: { color: "#90CAF9", opacity: 0.4 }, stroke: { color: "#0D47A1", opacity: 0.4, width: 1 } } } }, plotOptions: { line: { isSlopeChart: !1, colors: { threshold: 0, colorAboveThreshold: void 0, colorBelowThreshold: void 0 } }, area: { fillTo: "origin" }, bar: { horizontal: !1, columnWidth: "70%", barHeight: "70%", distributed: !1, borderRadius: 0, borderRadiusApplication: "around", borderRadiusWhenStacked: "last", rangeBarOverlap: !0, rangeBarGroupRows: !1, hideZeroBarsWhenGrouped: !1, isDumbbell: !1, dumbbellColors: void 0, isFunnel: !1, isFunnel3d: !0, colors: { ranges: [], backgroundBarColors: [], backgroundBarOpacity: 1, backgroundBarRadius: 0 }, dataLabels: { position: "top", maxItems: 100, hideOverflowingLabels: !0, orientation: "horizontal", total: { enabled: !1, formatter: void 0, offsetX: 0, offsetY: 0, style: { color: "#373d3f", fontSize: "12px", fontFamily: void 0, fontWeight: 600 } } } }, bubble: { zScaling: !0, minBubbleRadius: void 0, maxBubbleRadius: void 0 }, candlestick: { colors: { upward: "#00B746", downward: "#EF403C" }, wick: { useFillColor: !0 } }, boxPlot: { colors: { upper: "#00E396", lower: "#008FFB" } }, heatmap: { radius: 2, enableShades: !0, shadeIntensity: 0.5, reverseNegativeShade: !1, distributed: !1, useFillColorAsStroke: !1, colorScale: { inverse: !1, ranges: [], min: void 0, max: void 0 } }, treemap: { enableShades: !0, shadeIntensity: 0.5, distributed: !1, reverseNegativeShade: !1, useFillColorAsStroke: !1, borderRadius: 4, dataLabels: { format: "scale" }, colorScale: { inverse: !1, ranges: [], min: void 0, max: void 0 }, seriesTitle: { show: !0, offsetY: 1, offsetX: 1, borderColor: "#000", borderWidth: 1, borderRadius: 2, style: { background: "rgba(0, 0, 0, 0.6)", color: "#fff", fontSize: "12px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 6, right: 6, top: 2, bottom: 2 } } } }, radialBar: { inverseOrder: !1, startAngle: 0, endAngle: 360, offsetX: 0, offsetY: 0, hollow: { margin: 5, size: "50%", background: "transparent", image: void 0, imageWidth: 150, imageHeight: 150, imageOffsetX: 0, imageOffsetY: 0, imageClipped: !0, position: "front", dropShadow: { enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, track: { show: !0, startAngle: void 0, endAngle: void 0, background: "#f2f2f2", strokeWidth: "97%", opacity: 1, margin: 5, dropShadow: { enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, dataLabels: { show: !0, name: { show: !0, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: 0, formatter: function(e) {
      return e;
    } }, value: { show: !0, fontSize: "14px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 16, formatter: function(e) {
      return e + "%";
    } }, total: { show: !1, label: "Total", fontSize: "16px", fontWeight: 600, fontFamily: void 0, color: void 0, formatter: function(e) {
      return e.globals.seriesTotals.reduce((function(t, i) {
        return t + i;
      }), 0) / e.globals.series.length + "%";
    } } }, barLabels: { enabled: !1, offsetX: 0, offsetY: 0, useSeriesColors: !0, fontFamily: void 0, fontWeight: 600, fontSize: "16px", formatter: function(e) {
      return e;
    }, onClick: void 0 } }, pie: { customScale: 1, offsetX: 0, offsetY: 0, startAngle: 0, endAngle: 360, expandOnClick: !0, dataLabels: { offset: 0, minAngleToShowLabel: 10 }, donut: { size: "65%", background: "transparent", labels: { show: !1, name: { show: !0, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: -10, formatter: function(e) {
      return e;
    } }, value: { show: !0, fontSize: "20px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 10, formatter: function(e) {
      return e;
    } }, total: { show: !1, showAlways: !1, label: "Total", fontSize: "16px", fontWeight: 400, fontFamily: void 0, color: void 0, formatter: function(e) {
      return e.globals.seriesTotals.reduce((function(t, i) {
        return t + i;
      }), 0);
    } } } } }, polarArea: { rings: { strokeWidth: 1, strokeColor: "#e8e8e8" }, spokes: { strokeWidth: 1, connectorColors: "#e8e8e8" } }, radar: { size: void 0, offsetX: 0, offsetY: 0, polygons: { strokeWidth: 1, strokeColors: "#e8e8e8", connectorColors: "#e8e8e8", fill: { colors: void 0 } } } }, colors: void 0, dataLabels: { enabled: !0, enabledOnSeries: void 0, formatter: function(e) {
      return e !== null ? e : "";
    }, textAnchor: "middle", distributed: !1, offsetX: 0, offsetY: 0, style: { fontSize: "12px", fontFamily: void 0, fontWeight: 600, colors: void 0 }, background: { enabled: !0, foreColor: "#fff", backgroundColor: void 0, borderRadius: 2, padding: 4, opacity: 0.9, borderWidth: 1, borderColor: "#fff", dropShadow: { enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.8 } }, dropShadow: { enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.8 } }, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: !0, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] }, image: { src: [], width: void 0, height: void 0 }, pattern: { style: "squares", width: 6, height: 6, strokeWidth: 2 } }, forecastDataPoints: { count: 0, fillOpacity: 0.5, strokeWidth: void 0, dashArray: 4 }, grid: { show: !0, borderColor: "#e0e0e0", strokeDashArray: 0, position: "back", xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !0 } }, row: { colors: void 0, opacity: 0.5 }, column: { colors: void 0, opacity: 0.5 }, padding: { top: 0, right: 10, bottom: 0, left: 12 } }, labels: [], legend: { show: !0, showForSingleSeries: !1, showForNullSeries: !0, showForZeroSeries: !0, floating: !1, position: "bottom", horizontalAlign: "center", inverseOrder: !1, fontSize: "12px", fontFamily: void 0, fontWeight: 400, width: void 0, height: void 0, formatter: void 0, tooltipHoverFormatter: void 0, offsetX: -20, offsetY: 4, customLegendItems: [], clusterGroupedSeries: !0, clusterGroupedSeriesOrientation: "vertical", labels: { colors: void 0, useSeriesColors: !1 }, markers: { size: 7, fillColors: void 0, strokeWidth: 1, shape: void 0, offsetX: 0, offsetY: 0, customHTML: void 0, onClick: void 0 }, itemMargin: { horizontal: 5, vertical: 4 }, onItemClick: { toggleDataSeries: !0 }, onItemHover: { highlightDataSeries: !0 } }, markers: { discrete: [], size: 0, colors: void 0, strokeColors: "#fff", strokeWidth: 2, strokeOpacity: 0.9, strokeDashArray: 0, fillOpacity: 1, shape: "circle", offsetX: 0, offsetY: 0, showNullDataPoints: !0, onClick: void 0, onDblClick: void 0, hover: { size: void 0, sizeOffset: 3 } }, noData: { text: void 0, align: "center", verticalAlign: "middle", offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "14px", fontFamily: void 0 } }, responsive: [], series: void 0, states: { hover: { filter: { type: "lighten" } }, active: { allowMultipleDataPointsSelection: !1, filter: { type: "darken" } } }, title: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 0, floating: !1, style: { fontSize: "14px", fontWeight: 900, fontFamily: void 0, color: void 0 } }, subtitle: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 30, floating: !1, style: { fontSize: "12px", fontWeight: 400, fontFamily: void 0, color: void 0 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", width: 2, colors: void 0, dashArray: 0, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: !0, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] } } }, tooltip: { enabled: !0, enabledOnSeries: void 0, shared: !0, hideEmptySeries: !1, followCursor: !1, intersect: !1, inverseOrder: !1, custom: void 0, fillSeriesColor: !1, theme: "light", cssClass: "", style: { fontSize: "12px", fontFamily: void 0 }, onDatasetHover: { highlightDataSeries: !1 }, x: { show: !0, format: "dd MMM", formatter: void 0 }, y: { formatter: void 0, title: { formatter: function(e) {
      return e ? e + ": " : "";
    } } }, z: { formatter: void 0, title: "Size: " }, marker: { show: !0, fillColors: void 0 }, items: { display: "flex" }, fixed: { enabled: !1, position: "topRight", offsetX: 0, offsetY: 0 } }, xaxis: { type: "category", categories: [], convertedCatToNumeric: !1, offsetX: 0, offsetY: 0, overwriteCategories: void 0, labels: { show: !0, rotate: -45, rotateAlways: !1, hideOverlappingLabels: !0, trim: !1, minHeight: void 0, maxHeight: 120, showDuplicates: !0, style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, offsetX: 0, offsetY: 0, format: void 0, formatter: void 0, datetimeUTC: !0, datetimeFormatter: { year: "yyyy", month: "MMM 'yy", day: "dd MMM", hour: "HH:mm", minute: "HH:mm:ss", second: "HH:mm:ss" } }, group: { groups: [], style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" } }, axisBorder: { show: !0, color: "#e0e0e0", width: "100%", height: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: !0, color: "#e0e0e0", height: 6, offsetX: 0, offsetY: 0 }, stepSize: void 0, tickAmount: void 0, tickPlacement: "on", min: void 0, max: void 0, range: void 0, floating: !1, decimalsInFloat: void 0, position: "bottom", title: { text: void 0, offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "12px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, crosshairs: { show: !0, width: 1, position: "back", opacity: 0.9, stroke: { color: "#b6b6b6", width: 1, dashArray: 3 }, fill: { type: "solid", color: "#B1B9C4", gradient: { colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 } }, dropShadow: { enabled: !1, left: 0, top: 0, blur: 1, opacity: 0.8 } }, tooltip: { enabled: !0, offsetY: 0, formatter: void 0, style: { fontSize: "12px", fontFamily: void 0 } } }, yaxis: this.yAxis, theme: { mode: "", palette: "palette1", monochrome: { enabled: !1, color: "#008FFB", shadeTo: "light", shadeIntensity: 0.65 } } };
  } }]), n;
})(), Fo = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w, this.graphics = new X(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = !0), this.helpers = new gi(this), this.xAxisAnnotations = new Xo(this), this.yAxisAnnotations = new No(this), this.pointsAnnotations = new Ho(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = !0), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints;
  }
  return $(n, [{ key: "drawAxesAnnotations", value: function() {
    var e = this.w;
    if (e.globals.axisCharts && e.globals.dataPoints) {
      for (var t = this.yAxisAnnotations.drawYAxisAnnotations(), i = this.xAxisAnnotations.drawXAxisAnnotations(), a = this.pointsAnnotations.drawPointAnnotations(), s = e.config.chart.animations.enabled, r = [t, i, a], o = [i.node, t.node, a.node], l = 0; l < 3; l++) e.globals.dom.elGraphical.add(r[l]), !s || e.globals.resized || e.globals.dataChanged || e.config.chart.type !== "scatter" && e.config.chart.type !== "bubble" && e.globals.dataPoints > 1 && o[l].classList.add("apexcharts-element-hidden"), e.globals.delayedElements.push({ el: o[l], index: 0 });
      this.helpers.annotationsBackground();
    }
  } }, { key: "drawImageAnnos", value: function() {
    var e = this;
    this.w.config.annotations.images.map((function(t, i) {
      e.addImage(t, i);
    }));
  } }, { key: "drawTextAnnos", value: function() {
    var e = this;
    this.w.config.annotations.texts.map((function(t, i) {
      e.addText(t, i);
    }));
  } }, { key: "addXaxisAnnotation", value: function(e, t, i) {
    this.xAxisAnnotations.addXaxisAnnotation(e, t, i);
  } }, { key: "addYaxisAnnotation", value: function(e, t, i) {
    this.yAxisAnnotations.addYaxisAnnotation(e, t, i);
  } }, { key: "addPointAnnotation", value: function(e, t, i) {
    this.pointsAnnotations.addPointAnnotation(e, t, i);
  } }, { key: "addText", value: function(e, t) {
    var i = e.x, a = e.y, s = e.text, r = e.textAnchor, o = e.foreColor, l = e.fontSize, h = e.fontFamily, c = e.fontWeight, d = e.cssClass, u = e.backgroundColor, g = e.borderWidth, p = e.strokeDashArray, f = e.borderRadius, x = e.borderColor, b = e.appendTo, m = b === void 0 ? ".apexcharts-svg" : b, y = e.paddingLeft, w = y === void 0 ? 4 : y, v = e.paddingRight, C = v === void 0 ? 4 : v, k = e.paddingBottom, A = k === void 0 ? 2 : k, S = e.paddingTop, P = S === void 0 ? 2 : S, T = this.w, I = this.graphics.drawText({ x: i, y: a, text: s, textAnchor: r || "start", fontSize: l || "12px", fontWeight: c || "regular", fontFamily: h || T.config.chart.fontFamily, foreColor: o || T.config.chart.foreColor, cssClass: d }), R = T.globals.dom.baseEl.querySelector(m);
    R && R.appendChild(I.node);
    var z = I.bbox();
    if (s) {
      var Y = this.graphics.drawRect(z.x - w, z.y - P, z.width + w + C, z.height + A + P, f, u || "transparent", 1, g, x, p);
      R.insertBefore(Y.node, I.node);
    }
  } }, { key: "addImage", value: function(e, t) {
    var i = this.w, a = e.path, s = e.x, r = s === void 0 ? 0 : s, o = e.y, l = o === void 0 ? 0 : o, h = e.width, c = h === void 0 ? 20 : h, d = e.height, u = d === void 0 ? 20 : d, g = e.appendTo, p = g === void 0 ? ".apexcharts-svg" : g, f = i.globals.dom.Paper.image(a);
    f.size(c, u).move(r, l);
    var x = i.globals.dom.baseEl.querySelector(p);
    return x && x.appendChild(f.node), f;
  } }, { key: "addXaxisAnnotationExternal", value: function(e, t, i) {
    return this.addAnnotationExternal({ params: e, pushToMemory: t, context: i, type: "xaxis", contextMethod: i.addXaxisAnnotation }), i;
  } }, { key: "addYaxisAnnotationExternal", value: function(e, t, i) {
    return this.addAnnotationExternal({ params: e, pushToMemory: t, context: i, type: "yaxis", contextMethod: i.addYaxisAnnotation }), i;
  } }, { key: "addPointAnnotationExternal", value: function(e, t, i) {
    return this.invertAxis === void 0 && (this.invertAxis = i.w.globals.isBarHorizontal), this.addAnnotationExternal({ params: e, pushToMemory: t, context: i, type: "point", contextMethod: i.addPointAnnotation }), i;
  } }, { key: "addAnnotationExternal", value: function(e) {
    var t = e.params, i = e.pushToMemory, a = e.context, s = e.type, r = e.contextMethod, o = a, l = o.w, h = l.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations")), c = h.childNodes.length + 1, d = new lt(), u = Object.assign({}, s === "xaxis" ? d.xAxisAnnotation : s === "yaxis" ? d.yAxisAnnotation : d.pointAnnotation), g = L.extend(u, t);
    switch (s) {
      case "xaxis":
        this.addXaxisAnnotation(g, h, c);
        break;
      case "yaxis":
        this.addYaxisAnnotation(g, h, c);
        break;
      case "point":
        this.addPointAnnotation(g, h, c);
    }
    var p = l.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations .apexcharts-").concat(s, "-annotation-label[rel='").concat(c, "']")), f = this.helpers.addBackgroundToAnno(p, g);
    return f && h.insertBefore(f.node, p), i && l.globals.memory.methodsToExec.push({ context: o, id: g.id ? g.id : L.randomId(), method: r, label: "addAnnotation", params: t }), a;
  } }, { key: "clearAnnotations", value: function(e) {
    for (var t = e.w, i = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations"), a = t.globals.memory.methodsToExec.length - 1; a >= 0; a--) t.globals.memory.methodsToExec[a].label !== "addText" && t.globals.memory.methodsToExec[a].label !== "addAnnotation" || t.globals.memory.methodsToExec.splice(a, 1);
    i = L.listToArray(i), Array.prototype.forEach.call(i, (function(s) {
      for (; s.firstChild; ) s.removeChild(s.firstChild);
    }));
  } }, { key: "removeAnnotation", value: function(e, t) {
    var i = e.w, a = i.globals.dom.baseEl.querySelectorAll(".".concat(t));
    a && (i.globals.memory.methodsToExec.map((function(s, r) {
      s.id === t && i.globals.memory.methodsToExec.splice(r, 1);
    })), Object.keys(i.config.annotations).forEach((function(s) {
      var r = i.config.annotations[s];
      Array.isArray(r) && (i.config.annotations[s] = r.filter((function(o) {
        return o.id !== t;
      })));
    })), Array.prototype.forEach.call(a, (function(s) {
      s.parentElement.removeChild(s);
    })));
  } }]), n;
})(), Ri = function(n) {
  var e, t = n.isTimeline, i = n.ctx, a = n.seriesIndex, s = n.dataPointIndex, r = n.y1, o = n.y2, l = n.w, h = l.globals.seriesRangeStart[a][s], c = l.globals.seriesRangeEnd[a][s], d = l.globals.labels[s], u = l.config.series[a].name ? l.config.series[a].name : "", g = l.globals.ttKeyFormatter, p = l.config.tooltip.y.title.formatter, f = { w: l, seriesIndex: a, dataPointIndex: s, start: h, end: c };
  typeof p == "function" && (u = p(u, f)), (e = l.config.series[a].data[s]) !== null && e !== void 0 && e.x && (d = l.config.series[a].data[s].x), t || l.config.xaxis.type === "datetime" && (d = new $t(i).xLabelFormat(l.globals.ttKeyFormatter, d, d, { i: void 0, dateFormatter: new Ie(i).formatDate, w: l })), typeof g == "function" && (d = g(d, f)), Number.isFinite(r) && Number.isFinite(o) && (h = r, c = o);
  var x = "", b = "", m = l.globals.colors[a];
  if (l.config.tooltip.x.formatter === void 0) if (l.config.xaxis.type === "datetime") {
    var y = new Ie(i);
    x = y.formatDate(y.getDate(h), l.config.tooltip.x.format), b = y.formatDate(y.getDate(c), l.config.tooltip.x.format);
  } else x = h, b = c;
  else x = l.config.tooltip.x.formatter(h), b = l.config.tooltip.x.formatter(c);
  return { start: h, end: c, startVal: x, endVal: b, ylabel: d, color: m, seriesName: u };
}, Oi = function(n) {
  var e = n.color, t = n.seriesName, i = n.ylabel, a = n.start, s = n.end, r = n.seriesIndex, o = n.dataPointIndex, l = n.ctx.tooltip.tooltipLabels.getFormatters(r);
  a = l.yLbFormatter(a), s = l.yLbFormatter(s);
  var h = l.yLbFormatter(n.w.globals.series[r][o]), c = `<span class="value start-value">
  `.concat(a, `
  </span> <span class="separator">-</span> <span class="value end-value">
  `).concat(s, `
  </span>`);
  return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + e + '">' + (t || "") + '</span></div><div> <span class="category">' + i + ": </span> " + (n.w.globals.comboCharts ? n.w.config.series[r].type === "rangeArea" || n.w.config.series[r].type === "rangeBar" ? c : "<span>".concat(h, "</span>") : c) + " </div></div>";
}, Ft = (function() {
  function n(e) {
    q(this, n), this.opts = e;
  }
  return $(n, [{ key: "hideYAxis", value: function() {
    this.opts.yaxis[0].show = !1, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = !1, this.opts.yaxis[0].axisTicks.show = !1, this.opts.yaxis[0].floating = !0;
  } }, { key: "line", value: function() {
    return { dataLabels: { enabled: !1 }, stroke: { width: 5, curve: "straight" }, markers: { size: 0, hover: { sizeOffset: 6 } }, xaxis: { crosshairs: { width: 1 } } };
  } }, { key: "sparkline", value: function(e) {
    return this.hideYAxis(), L.extend(e, { grid: { show: !1, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, legend: { show: !1 }, xaxis: { labels: { show: !1 }, tooltip: { enabled: !1 }, axisBorder: { show: !1 }, axisTicks: { show: !1 } }, chart: { toolbar: { show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !1 } });
  } }, { key: "slope", value: function() {
    return this.hideYAxis(), { chart: { toolbar: { show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !0, formatter: function(e, t) {
      var i = t.w.config.series[t.seriesIndex].name;
      return e !== null ? i + ": " + e : "";
    }, background: { enabled: !1 }, offsetX: -5 }, grid: { xaxis: { lines: { show: !0 } }, yaxis: { lines: { show: !1 } } }, xaxis: { position: "top", labels: { style: { fontSize: 14, fontWeight: 900 } }, tooltip: { enabled: !1 }, crosshairs: { show: !1 } }, markers: { size: 8, hover: { sizeOffset: 1 } }, legend: { show: !1 }, tooltip: { shared: !1, intersect: !0, followCursor: !0 }, stroke: { width: 5, curve: "straight" } };
  } }, { key: "bar", value: function() {
    return { chart: { stacked: !1 }, plotOptions: { bar: { dataLabels: { position: "center" } } }, dataLabels: { style: { colors: ["#fff"] }, background: { enabled: !1 } }, stroke: { width: 0, lineCap: "square" }, fill: { opacity: 0.85 }, legend: { markers: { shape: "square" } }, tooltip: { shared: !1, intersect: !0 }, xaxis: { tooltip: { enabled: !1 }, tickPlacement: "between", crosshairs: { width: "barWidth", position: "back", fill: { type: "gradient" }, dropShadow: { enabled: !1 }, stroke: { width: 0 } } } };
  } }, { key: "funnel", value: function() {
    return this.hideYAxis(), D(D({}, this.bar()), {}, { chart: { animations: { speed: 800, animateGradually: { enabled: !1 } } }, plotOptions: { bar: { horizontal: !0, borderRadiusApplication: "around", borderRadius: 0, dataLabels: { position: "center" } } }, grid: { show: !1, padding: { left: 0, right: 0 } }, xaxis: { labels: { show: !1 }, tooltip: { enabled: !1 }, axisBorder: { show: !1 }, axisTicks: { show: !1 } } });
  } }, { key: "candlestick", value: function() {
    var e = this;
    return { stroke: { width: 1 }, fill: { opacity: 1 }, dataLabels: { enabled: !1 }, tooltip: { shared: !0, custom: function(t) {
      var i = t.seriesIndex, a = t.dataPointIndex, s = t.w;
      return e._getBoxTooltip(s, i, a, ["Open", "High", "", "Low", "Close"], "candlestick");
    } }, states: { active: { filter: { type: "none" } } }, xaxis: { crosshairs: { width: 1 } } };
  } }, { key: "boxPlot", value: function() {
    var e = this;
    return { chart: { animations: { dynamicAnimation: { enabled: !1 } } }, stroke: { width: 1, colors: ["#24292e"] }, dataLabels: { enabled: !1 }, tooltip: { shared: !0, custom: function(t) {
      var i = t.seriesIndex, a = t.dataPointIndex, s = t.w;
      return e._getBoxTooltip(s, i, a, ["Minimum", "Q1", "Median", "Q3", "Maximum"], "boxPlot");
    } }, markers: { size: 7, strokeWidth: 1, strokeColors: "#111" }, xaxis: { crosshairs: { width: 1 } } };
  } }, { key: "rangeBar", value: function() {
    return { chart: { animations: { animateGradually: !1 } }, stroke: { width: 0, lineCap: "square" }, plotOptions: { bar: { borderRadius: 0, dataLabels: { position: "center" } } }, dataLabels: { enabled: !1, formatter: function(e, t) {
      t.ctx;
      var i = t.seriesIndex, a = t.dataPointIndex, s = t.w, r = function() {
        var o = s.globals.seriesRangeStart[i][a];
        return s.globals.seriesRangeEnd[i][a] - o;
      };
      return s.globals.comboCharts ? s.config.series[i].type === "rangeBar" || s.config.series[i].type === "rangeArea" ? r() : e : r();
    }, background: { enabled: !1 }, style: { colors: ["#fff"] } }, markers: { size: 10 }, tooltip: { shared: !1, followCursor: !0, custom: function(e) {
      return e.w.config.plotOptions && e.w.config.plotOptions.bar && e.w.config.plotOptions.bar.horizontal ? (function(t) {
        var i = Ri(D(D({}, t), {}, { isTimeline: !0 })), a = i.color, s = i.seriesName, r = i.ylabel, o = i.startVal, l = i.endVal;
        return Oi(D(D({}, t), {}, { color: a, seriesName: s, ylabel: r, start: o, end: l }));
      })(e) : (function(t) {
        var i = Ri(t), a = i.color, s = i.seriesName, r = i.ylabel, o = i.start, l = i.end;
        return Oi(D(D({}, t), {}, { color: a, seriesName: s, ylabel: r, start: o, end: l }));
      })(e);
    } }, xaxis: { tickPlacement: "between", tooltip: { enabled: !1 }, crosshairs: { stroke: { width: 0 } } } };
  } }, { key: "dumbbell", value: function(e) {
    var t, i;
    return (t = e.plotOptions.bar) !== null && t !== void 0 && t.barHeight || (e.plotOptions.bar.barHeight = 2), (i = e.plotOptions.bar) !== null && i !== void 0 && i.columnWidth || (e.plotOptions.bar.columnWidth = 2), e;
  } }, { key: "area", value: function() {
    return { stroke: { width: 4, fill: { type: "solid", gradient: { inverseColors: !1, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } } }, fill: { type: "gradient", gradient: { inverseColors: !1, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } }, markers: { size: 0, hover: { sizeOffset: 6 } }, tooltip: { followCursor: !1 } };
  } }, { key: "rangeArea", value: function() {
    return { stroke: { curve: "straight", width: 0 }, fill: { type: "solid", opacity: 0.6 }, markers: { size: 0 }, states: { hover: { filter: { type: "none" } }, active: { filter: { type: "none" } } }, tooltip: { intersect: !1, shared: !0, followCursor: !0, custom: function(e) {
      return (function(t) {
        var i = Ri(t), a = i.color, s = i.seriesName, r = i.ylabel, o = i.start, l = i.end;
        return Oi(D(D({}, t), {}, { color: a, seriesName: s, ylabel: r, start: o, end: l }));
      })(e);
    } } };
  } }, { key: "brush", value: function(e) {
    return L.extend(e, { chart: { toolbar: { autoSelected: "selection", show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !1 }, stroke: { width: 1 }, tooltip: { enabled: !1 }, xaxis: { tooltip: { enabled: !1 } } });
  } }, { key: "stacked100", value: function(e) {
    e.dataLabels = e.dataLabels || {}, e.dataLabels.formatter = e.dataLabels.formatter || void 0;
    var t = e.dataLabels.formatter;
    return e.yaxis.forEach((function(i, a) {
      e.yaxis[a].min = 0, e.yaxis[a].max = 100;
    })), e.chart.type === "bar" && (e.dataLabels.formatter = t || function(i) {
      return typeof i == "number" && i ? i.toFixed(0) + "%" : i;
    }), e;
  } }, { key: "stackedBars", value: function() {
    var e = this.bar();
    return D(D({}, e), {}, { plotOptions: D(D({}, e.plotOptions), {}, { bar: D(D({}, e.plotOptions.bar), {}, { borderRadiusApplication: "end", borderRadiusWhenStacked: "last" }) }) });
  } }, { key: "convertCatToNumeric", value: function(e) {
    return e.xaxis.convertedCatToNumeric = !0, e;
  } }, { key: "convertCatToNumericXaxis", value: function(e, t, i) {
    e.xaxis.type = "numeric", e.xaxis.labels = e.xaxis.labels || {}, e.xaxis.labels.formatter = e.xaxis.labels.formatter || function(r) {
      return L.isNumber(r) ? Math.floor(r) : r;
    };
    var a = e.xaxis.labels.formatter, s = e.xaxis.categories && e.xaxis.categories.length ? e.xaxis.categories : e.labels;
    return i && i.length && (s = i.map((function(r) {
      return Array.isArray(r) ? r : String(r);
    }))), s && s.length && (e.xaxis.labels.formatter = function(r) {
      return L.isNumber(r) ? a(s[Math.floor(r) - 1]) : a(r);
    }), e.xaxis.categories = [], e.labels = [], e.xaxis.tickAmount = e.xaxis.tickAmount || "dataPoints", e;
  } }, { key: "bubble", value: function() {
    return { dataLabels: { style: { colors: ["#fff"] } }, tooltip: { shared: !1, intersect: !0 }, xaxis: { crosshairs: { width: 0 } }, fill: { type: "solid", gradient: { shade: "light", inverse: !0, shadeIntensity: 0.55, opacityFrom: 0.4, opacityTo: 0.8 } } };
  } }, { key: "scatter", value: function() {
    return { dataLabels: { enabled: !1 }, tooltip: { shared: !1, intersect: !0 }, markers: { size: 6, strokeWidth: 1, hover: { sizeOffset: 2 } } };
  } }, { key: "heatmap", value: function() {
    return { chart: { stacked: !1 }, fill: { opacity: 1 }, dataLabels: { style: { colors: ["#fff"] } }, stroke: { colors: ["#fff"] }, tooltip: { followCursor: !0, marker: { show: !1 }, x: { show: !1 } }, legend: { position: "top", markers: { shape: "square" } }, grid: { padding: { right: 20 } } };
  } }, { key: "treemap", value: function() {
    return { chart: { zoom: { enabled: !1 } }, dataLabels: { style: { fontSize: 14, fontWeight: 600, colors: ["#fff"] } }, stroke: { show: !0, width: 2, colors: ["#fff"] }, legend: { show: !1 }, fill: { opacity: 1, gradient: { stops: [0, 100] } }, tooltip: { followCursor: !0, x: { show: !1 } }, grid: { padding: { left: 0, right: 0 } }, xaxis: { crosshairs: { show: !1 }, tooltip: { enabled: !1 } } };
  } }, { key: "pie", value: function() {
    return { chart: { toolbar: { show: !1 } }, plotOptions: { pie: { donut: { labels: { show: !1 } } } }, dataLabels: { formatter: function(e) {
      return e.toFixed(1) + "%";
    }, style: { colors: ["#fff"] }, background: { enabled: !1 }, dropShadow: { enabled: !0 } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", stops: [0, 100] } }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
  } }, { key: "donut", value: function() {
    return { chart: { toolbar: { show: !1 } }, dataLabels: { formatter: function(e) {
      return e.toFixed(1) + "%";
    }, style: { colors: ["#fff"] }, background: { enabled: !1 }, dropShadow: { enabled: !0 } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", shadeIntensity: 0.35, stops: [80, 100], opacityFrom: 1, opacityTo: 1 } }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
  } }, { key: "polarArea", value: function() {
    return { chart: { toolbar: { show: !1 } }, dataLabels: { formatter: function(e) {
      return e.toFixed(1) + "%";
    }, enabled: !1 }, stroke: { show: !0, width: 2 }, fill: { opacity: 0.7 }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
  } }, { key: "radar", value: function() {
    return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY ? this.opts.yaxis[0].labels.offsetY : 6, { dataLabels: { enabled: !1, style: { fontSize: "11px" } }, stroke: { width: 2 }, markers: { size: 5, strokeWidth: 1, strokeOpacity: 1 }, fill: { opacity: 0.2 }, tooltip: { shared: !1, intersect: !0, followCursor: !0 }, grid: { show: !1, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, xaxis: { labels: { formatter: function(e) {
      return e;
    }, style: { colors: ["#a8a8a8"], fontSize: "11px" } }, tooltip: { enabled: !1 }, crosshairs: { show: !1 } } };
  } }, { key: "radialBar", value: function() {
    return { chart: { animations: { dynamicAnimation: { enabled: !0, speed: 800 } }, toolbar: { show: !1 } }, fill: { gradient: { shade: "dark", shadeIntensity: 0.4, inverseColors: !1, type: "diagonal2", opacityFrom: 1, opacityTo: 1, stops: [70, 98, 100] } }, legend: { show: !1, position: "right" }, tooltip: { enabled: !1, fillSeriesColor: !0 }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
  } }, { key: "_getBoxTooltip", value: function(e, t, i, a, s) {
    var r = e.globals.seriesCandleO[t][i], o = e.globals.seriesCandleH[t][i], l = e.globals.seriesCandleM[t][i], h = e.globals.seriesCandleL[t][i], c = e.globals.seriesCandleC[t][i];
    return e.config.series[t].type && e.config.series[t].type !== s ? `<div class="apexcharts-custom-tooltip">
          `.concat(e.config.series[t].name ? e.config.series[t].name : "series-" + (t + 1), ": <strong>").concat(e.globals.series[t][i], `</strong>
        </div>`) : '<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(e.config.chart.type, '">') + "<div>".concat(a[0], ': <span class="value">') + r + "</span></div>" + "<div>".concat(a[1], ': <span class="value">') + o + "</span></div>" + (l ? "<div>".concat(a[2], ': <span class="value">') + l + "</span></div>" : "") + "<div>".concat(a[3], ': <span class="value">') + h + "</span></div>" + "<div>".concat(a[4], ': <span class="value">') + c + "</span></div></div>";
  } }]), n;
})(), Dt = (function() {
  function n(e) {
    q(this, n), this.opts = e;
  }
  return $(n, [{ key: "init", value: function(e) {
    var t = e.responsiveOverride, i = this.opts, a = new lt(), s = new Ft(i);
    this.chartType = i.chart.type, i = this.extendYAxis(i), i = this.extendAnnotations(i);
    var r = a.init(), o = {};
    if (i && kt(i) === "object") {
      var l, h, c, d, u, g, p, f, x, b, m = {};
      m = ["line", "area", "bar", "candlestick", "boxPlot", "rangeBar", "rangeArea", "bubble", "scatter", "heatmap", "treemap", "pie", "polarArea", "donut", "radar", "radialBar"].indexOf(i.chart.type) !== -1 ? s[i.chart.type]() : s.line(), (l = i.plotOptions) !== null && l !== void 0 && (h = l.bar) !== null && h !== void 0 && h.isFunnel && (m = s.funnel()), i.chart.stacked && i.chart.type === "bar" && (m = s.stackedBars()), (c = i.chart.brush) !== null && c !== void 0 && c.enabled && (m = s.brush(m)), (d = i.plotOptions) !== null && d !== void 0 && (u = d.line) !== null && u !== void 0 && u.isSlopeChart && (m = s.slope()), i.chart.stacked && i.chart.stackType === "100%" && (i = s.stacked100(i)), (g = i.plotOptions) !== null && g !== void 0 && (p = g.bar) !== null && p !== void 0 && p.isDumbbell && (i = s.dumbbell(i)), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(i), i.xaxis = i.xaxis || window.Apex.xaxis || {}, t || (i.xaxis.convertedCatToNumeric = !1), ((f = (i = this.checkForCatToNumericXAxis(this.chartType, m, i)).chart.sparkline) !== null && f !== void 0 && f.enabled || (x = window.Apex.chart) !== null && x !== void 0 && (b = x.sparkline) !== null && b !== void 0 && b.enabled) && (m = s.sparkline(m)), o = L.extend(r, m);
    }
    var y = L.extend(o, window.Apex);
    return r = L.extend(y, i), r = this.handleUserInputErrors(r);
  } }, { key: "checkForCatToNumericXAxis", value: function(e, t, i) {
    var a, s, r = new Ft(i), o = (e === "bar" || e === "boxPlot") && ((a = i.plotOptions) === null || a === void 0 || (s = a.bar) === null || s === void 0 ? void 0 : s.horizontal), l = e === "pie" || e === "polarArea" || e === "donut" || e === "radar" || e === "radialBar" || e === "heatmap", h = i.xaxis.type !== "datetime" && i.xaxis.type !== "numeric", c = i.xaxis.tickPlacement ? i.xaxis.tickPlacement : t.xaxis && t.xaxis.tickPlacement;
    return o || l || !h || c === "between" || (i = r.convertCatToNumeric(i)), i;
  } }, { key: "extendYAxis", value: function(e, t) {
    var i = new lt();
    (e.yaxis === void 0 || !e.yaxis || Array.isArray(e.yaxis) && e.yaxis.length === 0) && (e.yaxis = {}), e.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (e.yaxis = L.extend(e.yaxis, window.Apex.yaxis)), e.yaxis.constructor !== Array ? e.yaxis = [L.extend(i.yAxis, e.yaxis)] : e.yaxis = L.extendArray(e.yaxis, i.yAxis);
    var a = !1;
    e.yaxis.forEach((function(r) {
      r.logarithmic && (a = !0);
    }));
    var s = e.series;
    return t && !s && (s = t.config.series), a && s.length !== e.yaxis.length && s.length && (e.yaxis = s.map((function(r, o) {
      if (r.name || (s[o].name = "series-".concat(o + 1)), e.yaxis[o]) return e.yaxis[o].seriesName = s[o].name, e.yaxis[o];
      var l = L.extend(i.yAxis, e.yaxis[0]);
      return l.show = !1, l;
    }))), a && s.length > 1 && s.length !== e.yaxis.length && console.warn("A multi-series logarithmic chart should have equal number of series and y-axes"), e;
  } }, { key: "extendAnnotations", value: function(e) {
    return e.annotations === void 0 && (e.annotations = {}, e.annotations.yaxis = [], e.annotations.xaxis = [], e.annotations.points = []), e = this.extendYAxisAnnotations(e), e = this.extendXAxisAnnotations(e), e = this.extendPointAnnotations(e);
  } }, { key: "extendYAxisAnnotations", value: function(e) {
    var t = new lt();
    return e.annotations.yaxis = L.extendArray(e.annotations.yaxis !== void 0 ? e.annotations.yaxis : [], t.yAxisAnnotation), e;
  } }, { key: "extendXAxisAnnotations", value: function(e) {
    var t = new lt();
    return e.annotations.xaxis = L.extendArray(e.annotations.xaxis !== void 0 ? e.annotations.xaxis : [], t.xAxisAnnotation), e;
  } }, { key: "extendPointAnnotations", value: function(e) {
    var t = new lt();
    return e.annotations.points = L.extendArray(e.annotations.points !== void 0 ? e.annotations.points : [], t.pointAnnotation), e;
  } }, { key: "checkForDarkTheme", value: function(e) {
    e.theme && e.theme.mode === "dark" && (e.tooltip || (e.tooltip = {}), e.tooltip.theme !== "light" && (e.tooltip.theme = "dark"), e.chart.foreColor || (e.chart.foreColor = "#f6f7f8"), e.theme.palette || (e.theme.palette = "palette4"));
  } }, { key: "handleUserInputErrors", value: function(e) {
    var t = e;
    if (t.tooltip.shared && t.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
    if (t.chart.type === "bar" && t.plotOptions.bar.horizontal) {
      if (t.yaxis.length > 1) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
      t.yaxis[0].reversed && (t.yaxis[0].opposite = !0), t.xaxis.tooltip.enabled = !1, t.yaxis[0].tooltip.enabled = !1, t.chart.zoom.enabled = !1;
    }
    return t.chart.type !== "bar" && t.chart.type !== "rangeBar" || t.tooltip.shared && t.xaxis.crosshairs.width === "barWidth" && t.series.length > 1 && (t.xaxis.crosshairs.width = "tickWidth"), t.chart.type !== "candlestick" && t.chart.type !== "boxPlot" || t.yaxis[0].reversed && (console.warn("Reversed y-axis in ".concat(t.chart.type, " chart is not supported.")), t.yaxis[0].reversed = !1), t;
  } }]), n;
})(), hr = (function() {
  function n() {
    q(this, n);
  }
  return $(n, [{ key: "initGlobalVars", value: function(e) {
    e.series = [], e.seriesCandleO = [], e.seriesCandleH = [], e.seriesCandleM = [], e.seriesCandleL = [], e.seriesCandleC = [], e.seriesRangeStart = [], e.seriesRangeEnd = [], e.seriesRange = [], e.seriesPercent = [], e.seriesGoals = [], e.seriesX = [], e.seriesZ = [], e.seriesNames = [], e.seriesTotals = [], e.seriesLog = [], e.seriesColors = [], e.stackedSeriesTotals = [], e.seriesXvalues = [], e.seriesYvalues = [], e.labels = [], e.hasXaxisGroups = !1, e.groups = [], e.barGroups = [], e.lineGroups = [], e.areaGroups = [], e.hasSeriesGroups = !1, e.seriesGroups = [], e.categoryLabels = [], e.timescaleLabels = [], e.noLabelsProvided = !1, e.resizeTimer = null, e.selectionResizeTimer = null, e.lastWheelExecution = 0, e.delayedElements = [], e.pointsArray = [], e.dataLabelsRects = [], e.isXNumeric = !1, e.skipLastTimelinelabel = !1, e.skipFirstTimelinelabel = !1, e.isDataXYZ = !1, e.isMultiLineX = !1, e.isMultipleYAxis = !1, e.maxY = -Number.MAX_VALUE, e.minY = Number.MIN_VALUE, e.minYArr = [], e.maxYArr = [], e.maxX = -Number.MAX_VALUE, e.minX = Number.MAX_VALUE, e.initialMaxX = -Number.MAX_VALUE, e.initialMinX = Number.MAX_VALUE, e.maxDate = 0, e.minDate = Number.MAX_VALUE, e.minZ = Number.MAX_VALUE, e.maxZ = -Number.MAX_VALUE, e.minXDiff = Number.MAX_VALUE, e.yAxisScale = [], e.xAxisScale = null, e.xAxisTicksPositions = [], e.yLabelsCoords = [], e.yTitleCoords = [], e.barPadForNumericAxis = 0, e.padHorizontal = 0, e.xRange = 0, e.yRange = [], e.zRange = 0, e.dataPoints = 0, e.xTickAmount = 0, e.multiAxisTickAmount = 0;
  } }, { key: "globalVars", value: function(e) {
    return { chartID: null, cuid: null, events: { beforeMount: [], mounted: [], updated: [], clicked: [], selection: [], dataPointSelection: [], zoomed: [], scrolled: [] }, colors: [], clientX: null, clientY: null, fill: { colors: [] }, stroke: { colors: [] }, dataLabels: { style: { colors: [] } }, radarPolygons: { fill: { colors: [] } }, markers: { colors: [], size: e.markers.size, largestSize: 0 }, animationEnded: !1, isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints, isDirty: !1, isExecCalled: !1, initialConfig: null, initialSeries: [], lastXAxis: [], lastYAxis: [], columnSeries: null, labels: [], timescaleLabels: [], noLabelsProvided: !1, allSeriesCollapsed: !1, collapsedSeries: [], collapsedSeriesIndices: [], ancillaryCollapsedSeries: [], ancillaryCollapsedSeriesIndices: [], risingSeries: [], dataFormatXNumeric: !1, capturedSeriesIndex: -1, capturedDataPointIndex: -1, selectedDataPoints: [], invalidLogScale: !1, ignoreYAxisIndexes: [], maxValsInArrayIndex: 0, radialSize: 0, selection: void 0, zoomEnabled: e.chart.toolbar.autoSelected === "zoom" && e.chart.toolbar.tools.zoom && e.chart.zoom.enabled, panEnabled: e.chart.toolbar.autoSelected === "pan" && e.chart.toolbar.tools.pan, selectionEnabled: e.chart.toolbar.autoSelected === "selection" && e.chart.toolbar.tools.selection, yaxis: null, mousedown: !1, lastClientPosition: {}, visibleXRange: void 0, yValueDecimal: 0, total: 0, SVGNS: "http://www.w3.org/2000/svg", svgWidth: 0, svgHeight: 0, noData: !1, locale: {}, dom: {}, memory: { methodsToExec: [] }, shouldAnimate: !0, skipLastTimelinelabel: !1, skipFirstTimelinelabel: !1, delayedElements: [], axisCharts: !0, isDataXYZ: !1, isSlopeChart: e.plotOptions.line.isSlopeChart, resized: !1, resizeTimer: null, comboCharts: !1, dataChanged: !1, previousPaths: [], allSeriesHasEqualX: !0, pointsArray: [], dataLabelsRects: [], lastDrawnDataLabelsIndexes: [], hasNullValues: !1, zoomed: !1, gridWidth: 0, gridHeight: 0, rotateXLabels: !1, defaultLabels: !1, xLabelFormatter: void 0, yLabelFormatters: [], xaxisTooltipFormatter: void 0, ttKeyFormatter: void 0, ttVal: void 0, ttZFormatter: void 0, LINE_HEIGHT_RATIO: 1.618, xAxisLabelsHeight: 0, xAxisGroupLabelsHeight: 0, xAxisLabelsWidth: 0, yAxisLabelsWidth: 0, scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, translateYAxisX: [], yAxisWidths: [], translateXAxisY: 0, translateXAxisX: 0, tooltip: null, niceScaleAllowedMagMsd: [[1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10], [1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10]], niceScaleDefaultTicks: [1, 2, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 12, 12, 12, 12, 12, 12, 12, 12, 12, 24], seriesYAxisMap: [], seriesYAxisReverseMap: [] };
  } }, { key: "init", value: function(e) {
    var t = this.globalVars(e);
    return this.initGlobalVars(t), t.initialConfig = L.extend({}, e), t.initialSeries = L.clone(e.series), t.lastXAxis = L.clone(t.initialConfig.xaxis), t.lastYAxis = L.clone(t.initialConfig.yaxis), t;
  } }]), n;
})(), Do = (function() {
  function n(e) {
    q(this, n), this.opts = e;
  }
  return $(n, [{ key: "init", value: function() {
    var e = new Dt(this.opts).init({ responsiveOverride: !1 });
    return { config: e, globals: new hr().init(e) };
  } }]), n;
})(), Ze = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w, this.opts = null, this.seriesIndex = 0, this.patternIDs = [];
  }
  return $(n, [{ key: "clippedImgArea", value: function(e) {
    var t = this.w, i = t.config, a = parseInt(t.globals.gridWidth, 10), s = parseInt(t.globals.gridHeight, 10), r = a > s ? a : s, o = e.image, l = 0, h = 0;
    e.width === void 0 && e.height === void 0 ? i.fill.image.width !== void 0 && i.fill.image.height !== void 0 ? (l = i.fill.image.width + 1, h = i.fill.image.height) : (l = r + 1, h = r) : (l = e.width, h = e.height);
    var c = document.createElementNS(t.globals.SVGNS, "pattern");
    X.setAttrs(c, { id: e.patternID, patternUnits: e.patternUnits ? e.patternUnits : "userSpaceOnUse", width: l + "px", height: h + "px" });
    var d = document.createElementNS(t.globals.SVGNS, "image");
    c.appendChild(d), d.setAttributeNS(window.SVG.xlink, "href", o), X.setAttrs(d, { x: 0, y: 0, preserveAspectRatio: "none", width: l + "px", height: h + "px" }), d.style.opacity = e.opacity, t.globals.dom.elDefs.node.appendChild(c);
  } }, { key: "getSeriesIndex", value: function(e) {
    var t = this.w, i = t.config.chart.type;
    return (i === "bar" || i === "rangeBar") && t.config.plotOptions.bar.distributed || i === "heatmap" || i === "treemap" ? this.seriesIndex = e.seriesNumber : this.seriesIndex = e.seriesNumber % t.globals.series.length, this.seriesIndex;
  } }, { key: "computeColorStops", value: function(e, t) {
    var i, a = this.w, s = null, r = null, o = zt(e);
    try {
      for (o.s(); !(i = o.n()).done; ) {
        var l = i.value;
        l >= t.threshold ? (s === null || l > s) && (s = l) : (r === null || l < r) && (r = l);
      }
    } catch (d) {
      o.e(d);
    } finally {
      o.f();
    }
    s === null && (s = t.threshold), r === null && (r = t.threshold);
    var h = s - t.threshold + (t.threshold - r);
    h === 0 && (h = 1);
    var c = 100 - (t.threshold - r) / h * 100;
    return [{ offset: c = Math.max(0, Math.min(c, 100)), color: t.colorAboveThreshold, opacity: a.config.fill.opacity }, { offset: 0, color: t.colorBelowThreshold, opacity: a.config.fill.opacity }];
  } }, { key: "fillPath", value: function(e) {
    var t, i, a, s = this.w;
    this.opts = e;
    var r, o, l, h = this.w.config;
    this.seriesIndex = this.getSeriesIndex(e);
    var c = h.plotOptions.line.colors.colorAboveThreshold && h.plotOptions.line.colors.colorBelowThreshold, d = this.getFillColors()[this.seriesIndex];
    s.globals.seriesColors[this.seriesIndex] !== void 0 && (d = s.globals.seriesColors[this.seriesIndex]), typeof d == "function" && (d = d({ seriesIndex: this.seriesIndex, dataPointIndex: e.dataPointIndex, value: e.value, w: s }));
    var u, g, p, f = e.fillType ? e.fillType : this.getFillType(this.seriesIndex), x = Array.isArray(h.fill.opacity) ? h.fill.opacity[this.seriesIndex] : h.fill.opacity, b = f === "gradient" || c;
    e.color && (d = e.color), (t = s.config.series[this.seriesIndex]) !== null && t !== void 0 && (i = t.data) !== null && i !== void 0 && (a = i[e.dataPointIndex]) !== null && a !== void 0 && a.fillColor && (d = (u = s.config.series[this.seriesIndex]) === null || u === void 0 || (g = u.data) === null || g === void 0 || (p = g[e.dataPointIndex]) === null || p === void 0 ? void 0 : p.fillColor), d || (d = "#fff", console.warn("undefined color - ApexCharts"));
    var m = d;
    if (d.indexOf("rgb") === -1 ? d.indexOf("#") === -1 ? m = d : d.length < 9 && (m = L.hexToRgba(d, x)) : d.indexOf("rgba") > -1 ? x = L.getOpacityFromRGBA(d) : m = L.hexToRgba(L.rgb2hex(d), x), e.opacity && (x = e.opacity), f === "pattern" && (o = this.handlePatternFill({ fillConfig: e.fillConfig, patternFill: o, fillColor: d, fillOpacity: x, defaultColor: m })), b) {
      var y = Ee(h.fill.gradient.colorStops) || [], w = h.fill.gradient.type;
      c && (y[this.seriesIndex] = this.computeColorStops(s.globals.series[this.seriesIndex], h.plotOptions.line.colors), w = "vertical"), l = this.handleGradientFill({ type: w, fillConfig: e.fillConfig, fillColor: d, fillOpacity: x, colorStops: y, i: this.seriesIndex });
    }
    if (f === "image") {
      var v = h.fill.image.src, C = e.patternID ? e.patternID : "", k = "pattern".concat(s.globals.cuid).concat(e.seriesNumber + 1).concat(C);
      this.patternIDs.indexOf(k) === -1 && (this.clippedImgArea({ opacity: x, image: Array.isArray(v) ? e.seriesNumber < v.length ? v[e.seriesNumber] : v[0] : v, width: e.width ? e.width : void 0, height: e.height ? e.height : void 0, patternUnits: e.patternUnits, patternID: k }), this.patternIDs.push(k)), r = "url(#".concat(k, ")");
    } else r = b ? l : f === "pattern" ? o : m;
    return e.solid && (r = m), r;
  } }, { key: "getFillType", value: function(e) {
    var t = this.w;
    return Array.isArray(t.config.fill.type) ? t.config.fill.type[e] : t.config.fill.type;
  } }, { key: "getFillColors", value: function() {
    var e = this.w, t = e.config, i = this.opts, a = [];
    return e.globals.comboCharts ? e.config.series[this.seriesIndex].type === "line" ? Array.isArray(e.globals.stroke.colors) ? a = e.globals.stroke.colors : a.push(e.globals.stroke.colors) : Array.isArray(e.globals.fill.colors) ? a = e.globals.fill.colors : a.push(e.globals.fill.colors) : t.chart.type === "line" ? Array.isArray(e.globals.stroke.colors) ? a = e.globals.stroke.colors : a.push(e.globals.stroke.colors) : Array.isArray(e.globals.fill.colors) ? a = e.globals.fill.colors : a.push(e.globals.fill.colors), i.fillColors !== void 0 && (a = [], Array.isArray(i.fillColors) ? a = i.fillColors.slice() : a.push(i.fillColors)), a;
  } }, { key: "handlePatternFill", value: function(e) {
    var t = e.fillConfig, i = e.patternFill, a = e.fillColor, s = e.fillOpacity, r = e.defaultColor, o = this.w.config.fill;
    t && (o = t);
    var l = this.opts, h = new X(this.ctx), c = Array.isArray(o.pattern.strokeWidth) ? o.pattern.strokeWidth[this.seriesIndex] : o.pattern.strokeWidth, d = a;
    return Array.isArray(o.pattern.style) ? i = o.pattern.style[l.seriesNumber] !== void 0 ? h.drawPattern(o.pattern.style[l.seriesNumber], o.pattern.width, o.pattern.height, d, c, s) : r : i = h.drawPattern(o.pattern.style, o.pattern.width, o.pattern.height, d, c, s), i;
  } }, { key: "handleGradientFill", value: function(e) {
    var t = e.type, i = e.fillColor, a = e.fillOpacity, s = e.fillConfig, r = e.colorStops, o = e.i, l = this.w.config.fill;
    s && (l = D(D({}, l), s));
    var h = this.opts, c = new X(this.ctx), d = new L();
    t = t || l.gradient.type;
    var u, g = i, p = l.gradient.opacityFrom === void 0 ? a : Array.isArray(l.gradient.opacityFrom) ? l.gradient.opacityFrom[o] : l.gradient.opacityFrom;
    g.indexOf("rgba") > -1 && (p = L.getOpacityFromRGBA(g));
    var f = l.gradient.opacityTo === void 0 ? a : Array.isArray(l.gradient.opacityTo) ? l.gradient.opacityTo[o] : l.gradient.opacityTo;
    if (l.gradient.gradientToColors === void 0 || l.gradient.gradientToColors.length === 0) u = l.gradient.shade === "dark" ? d.shadeColor(-1 * parseFloat(l.gradient.shadeIntensity), i.indexOf("rgb") > -1 ? L.rgb2hex(i) : i) : d.shadeColor(parseFloat(l.gradient.shadeIntensity), i.indexOf("rgb") > -1 ? L.rgb2hex(i) : i);
    else if (l.gradient.gradientToColors[h.seriesNumber]) {
      var x = l.gradient.gradientToColors[h.seriesNumber];
      u = x, x.indexOf("rgba") > -1 && (f = L.getOpacityFromRGBA(x));
    } else u = i;
    if (l.gradient.gradientFrom && (g = l.gradient.gradientFrom), l.gradient.gradientTo && (u = l.gradient.gradientTo), l.gradient.inverseColors) {
      var b = g;
      g = u, u = b;
    }
    return g.indexOf("rgb") > -1 && (g = L.rgb2hex(g)), u.indexOf("rgb") > -1 && (u = L.rgb2hex(u)), c.drawGradient(t, g, u, p, f, h.size, l.gradient.stops, r, o);
  } }]), n;
})(), Tt = (function() {
  function n(e, t) {
    q(this, n), this.ctx = e, this.w = e.w;
  }
  return $(n, [{ key: "setGlobalMarkerSize", value: function() {
    var e = this.w;
    if (e.globals.markers.size = Array.isArray(e.config.markers.size) ? e.config.markers.size : [e.config.markers.size], e.globals.markers.size.length > 0) {
      if (e.globals.markers.size.length < e.globals.series.length + 1) for (var t = 0; t <= e.globals.series.length; t++) e.globals.markers.size[t] === void 0 && e.globals.markers.size.push(e.globals.markers.size[0]);
    } else e.globals.markers.size = e.config.series.map((function(i) {
      return e.config.markers.size;
    }));
  } }, { key: "plotChartMarkers", value: function(e) {
    var t = e.pointsPos, i = e.seriesIndex, a = e.j, s = e.pSize, r = e.alwaysDrawMarker, o = r !== void 0 && r, l = e.isVirtualPoint, h = l !== void 0 && l, c = this.w, d = i, u = t, g = null, p = new X(this.ctx), f = c.config.markers.discrete && c.config.markers.discrete.length;
    if (Array.isArray(u.x)) for (var x = 0; x < u.x.length; x++) {
      var b = void 0, m = a, y = !L.isNumber(u.y[x]);
      c.globals.markers.largestSize === 0 && c.globals.hasNullValues && c.globals.series[d][a + 1] !== null && !h && (y = !0), a === 1 && x === 0 && (m = 0), a === 1 && x === 1 && (m = 1);
      var w = "apexcharts-marker";
      if (c.config.chart.type !== "line" && c.config.chart.type !== "area" || c.globals.comboCharts || c.config.tooltip.intersect || (w += " no-pointer-events"), (Array.isArray(c.config.markers.size) ? c.globals.markers.size[i] > 0 : c.config.markers.size > 0) || o || f) {
        y || (w += " w".concat(L.randomId()));
        var v = this.getMarkerConfig({ cssClass: w, seriesIndex: i, dataPointIndex: m });
        c.config.series[d].data[m] && (c.config.series[d].data[m].fillColor && (v.pointFillColor = c.config.series[d].data[m].fillColor), c.config.series[d].data[m].strokeColor && (v.pointStrokeColor = c.config.series[d].data[m].strokeColor)), s !== void 0 && (v.pSize = s), (u.x[x] < -c.globals.markers.largestSize || u.x[x] > c.globals.gridWidth + c.globals.markers.largestSize || u.y[x] < -c.globals.markers.largestSize || u.y[x] > c.globals.gridHeight + c.globals.markers.largestSize) && (v.pSize = 0), !y && ((c.globals.markers.size[i] > 0 || o || f) && !g && (g = p.group({ class: o || f ? "" : "apexcharts-series-markers" })).attr("clip-path", "url(#gridRectMarkerMask".concat(c.globals.cuid, ")")), (b = p.drawMarker(u.x[x], u.y[x], v)).attr("rel", m), b.attr("j", m), b.attr("index", i), b.node.setAttribute("default-marker-size", v.pSize), new Re(this.ctx).setSelectionFilter(b, i, m), this.addEvents(b), g && g.add(b));
      } else c.globals.pointsArray[i] === void 0 && (c.globals.pointsArray[i] = []), c.globals.pointsArray[i].push([u.x[x], u.y[x]]);
    }
    return g;
  } }, { key: "getMarkerConfig", value: function(e) {
    var t = e.cssClass, i = e.seriesIndex, a = e.dataPointIndex, s = a === void 0 ? null : a, r = e.radius, o = r === void 0 ? null : r, l = e.size, h = l === void 0 ? null : l, c = e.strokeWidth, d = c === void 0 ? null : c, u = this.w, g = this.getMarkerStyle(i), p = h === null ? u.globals.markers.size[i] : h, f = u.config.markers;
    return s !== null && f.discrete.length && f.discrete.map((function(x) {
      x.seriesIndex === i && x.dataPointIndex === s && (g.pointStrokeColor = x.strokeColor, g.pointFillColor = x.fillColor, p = x.size, g.pointShape = x.shape);
    })), { pSize: o === null ? p : o, pRadius: o !== null ? o : f.radius, pointStrokeWidth: d !== null ? d : Array.isArray(f.strokeWidth) ? f.strokeWidth[i] : f.strokeWidth, pointStrokeColor: g.pointStrokeColor, pointFillColor: g.pointFillColor, shape: g.pointShape || (Array.isArray(f.shape) ? f.shape[i] : f.shape), class: t, pointStrokeOpacity: Array.isArray(f.strokeOpacity) ? f.strokeOpacity[i] : f.strokeOpacity, pointStrokeDashArray: Array.isArray(f.strokeDashArray) ? f.strokeDashArray[i] : f.strokeDashArray, pointFillOpacity: Array.isArray(f.fillOpacity) ? f.fillOpacity[i] : f.fillOpacity, seriesIndex: i };
  } }, { key: "addEvents", value: function(e) {
    var t = this.w, i = new X(this.ctx);
    e.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this.ctx, e)), e.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this.ctx, e)), e.node.addEventListener("mousedown", i.pathMouseDown.bind(this.ctx, e)), e.node.addEventListener("click", t.config.markers.onClick), e.node.addEventListener("dblclick", t.config.markers.onDblClick), e.node.addEventListener("touchstart", i.pathMouseDown.bind(this.ctx, e), { passive: !0 });
  } }, { key: "getMarkerStyle", value: function(e) {
    var t = this.w, i = t.globals.markers.colors, a = t.config.markers.strokeColor || t.config.markers.strokeColors;
    return { pointStrokeColor: Array.isArray(a) ? a[e] : a, pointFillColor: Array.isArray(i) ? i[e] : i };
  } }]), n;
})(), cr = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w, this.initialAnim = this.w.config.chart.animations.enabled;
  }
  return $(n, [{ key: "draw", value: function(e, t, i) {
    var a = this.w, s = new X(this.ctx), r = i.realIndex, o = i.pointsPos, l = i.zRatio, h = i.elParent, c = s.group({ class: "apexcharts-series-markers apexcharts-series-".concat(a.config.chart.type) });
    if (c.attr("clip-path", "url(#gridRectMarkerMask".concat(a.globals.cuid, ")")), Array.isArray(o.x)) for (var d = 0; d < o.x.length; d++) {
      var u = t + 1, g = !0;
      t === 0 && d === 0 && (u = 0), t === 0 && d === 1 && (u = 1);
      var p = a.globals.markers.size[r];
      if (l !== 1 / 0) {
        var f = a.config.plotOptions.bubble;
        p = a.globals.seriesZ[r][u], f.zScaling && (p /= l), f.minBubbleRadius && p < f.minBubbleRadius && (p = f.minBubbleRadius), f.maxBubbleRadius && p > f.maxBubbleRadius && (p = f.maxBubbleRadius);
      }
      var x = o.x[d], b = o.y[d];
      if (p = p || 0, b !== null && a.globals.series[r][u] !== void 0 || (g = !1), g) {
        var m = this.drawPoint(x, b, p, r, u, t);
        c.add(m);
      }
      h.add(c);
    }
  } }, { key: "drawPoint", value: function(e, t, i, a, s, r) {
    var o = this.w, l = a, h = new St(this.ctx), c = new Re(this.ctx), d = new Ze(this.ctx), u = new Tt(this.ctx), g = new X(this.ctx), p = u.getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: l, dataPointIndex: s, radius: o.config.chart.type === "bubble" || o.globals.comboCharts && o.config.series[a] && o.config.series[a].type === "bubble" ? i : null }), f = d.fillPath({ seriesNumber: a, dataPointIndex: s, color: p.pointFillColor, patternUnits: "objectBoundingBox", value: o.globals.series[a][r] }), x = g.drawMarker(e, t, p);
    if (o.config.series[l].data[s] && o.config.series[l].data[s].fillColor && (f = o.config.series[l].data[s].fillColor), x.attr({ fill: f }), o.config.chart.dropShadow.enabled) {
      var b = o.config.chart.dropShadow;
      c.dropShadow(x, b, a);
    }
    if (!this.initialAnim || o.globals.dataChanged || o.globals.resized) o.globals.animationEnded = !0;
    else {
      var m = o.config.chart.animations.speed;
      h.animateMarker(x, m, o.globals.easing, (function() {
        window.setTimeout((function() {
          h.animationCompleted(x);
        }), 100);
      }));
    }
    return x.attr({ rel: s, j: s, index: a, "default-marker-size": p.pSize }), c.setSelectionFilter(x, a, s), u.addEvents(x), x.node.classList.add("apexcharts-marker"), x;
  } }, { key: "centerTextInBubble", value: function(e) {
    var t = this.w;
    return { y: e += parseInt(t.config.dataLabels.style.fontSize, 10) / 4 };
  } }]), n;
})(), At = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
  }
  return $(n, [{ key: "dataLabelsCorrection", value: function(e, t, i, a, s, r, o) {
    var l = this.w, h = !1, c = new X(this.ctx).getTextRects(i, o), d = c.width, u = c.height;
    t < 0 && (t = 0), t > l.globals.gridHeight + u && (t = l.globals.gridHeight + u / 2), l.globals.dataLabelsRects[a] === void 0 && (l.globals.dataLabelsRects[a] = []), l.globals.dataLabelsRects[a].push({ x: e, y: t, width: d, height: u });
    var g = l.globals.dataLabelsRects[a].length - 2, p = l.globals.lastDrawnDataLabelsIndexes[a] !== void 0 ? l.globals.lastDrawnDataLabelsIndexes[a][l.globals.lastDrawnDataLabelsIndexes[a].length - 1] : 0;
    if (l.globals.dataLabelsRects[a][g] !== void 0) {
      var f = l.globals.dataLabelsRects[a][p];
      (e > f.x + f.width || t > f.y + f.height || t + u < f.y || e + d < f.x) && (h = !0);
    }
    return (s === 0 || r) && (h = !0), { x: e, y: t, textRects: c, drawnextLabel: h };
  } }, { key: "drawDataLabel", value: function(e) {
    var t = this, i = e.type, a = e.pos, s = e.i, r = e.j, o = e.isRangeStart, l = e.strokeWidth, h = l === void 0 ? 2 : l, c = this.w, d = new X(this.ctx), u = c.config.dataLabels, g = 0, p = 0, f = r, x = null;
    if (c.globals.collapsedSeriesIndices.indexOf(s) !== -1 || !u.enabled || !Array.isArray(a.x)) return x;
    x = d.group({ class: "apexcharts-data-labels" });
    for (var b = 0; b < a.x.length; b++) if (g = a.x[b] + u.offsetX, p = a.y[b] + u.offsetY + h, !isNaN(g)) {
      r === 1 && b === 0 && (f = 0), r === 1 && b === 1 && (f = 1);
      var m = c.globals.series[s][f];
      i === "rangeArea" && (m = o ? c.globals.seriesRangeStart[s][f] : c.globals.seriesRangeEnd[s][f]);
      var y = "", w = function(C) {
        return c.config.dataLabels.formatter(C, { ctx: t.ctx, seriesIndex: s, dataPointIndex: f, w: c });
      };
      c.config.chart.type === "bubble" ? (y = w(m = c.globals.seriesZ[s][f]), p = a.y[b], p = new cr(this.ctx).centerTextInBubble(p, s, f).y) : m !== void 0 && (y = w(m));
      var v = c.config.dataLabels.textAnchor;
      c.globals.isSlopeChart && (v = f === 0 ? "end" : f === c.config.series[s].data.length - 1 ? "start" : "middle"), this.plotDataLabelsText({ x: g, y: p, text: y, i: s, j: f, parent: x, offsetCorrection: !0, dataLabelsConfig: c.config.dataLabels, textAnchor: v });
    }
    return x;
  } }, { key: "plotDataLabelsText", value: function(e) {
    var t = this.w, i = new X(this.ctx), a = e.x, s = e.y, r = e.i, o = e.j, l = e.text, h = e.textAnchor, c = e.fontSize, d = e.parent, u = e.dataLabelsConfig, g = e.color, p = e.alwaysDrawDataLabel, f = e.offsetCorrection, x = e.className, b = null;
    if (Array.isArray(t.config.dataLabels.enabledOnSeries) && t.config.dataLabels.enabledOnSeries.indexOf(r) < 0) return b;
    var m = { x: a, y: s, drawnextLabel: !0, textRects: null };
    f && (m = this.dataLabelsCorrection(a, s, l, r, o, p, parseInt(u.style.fontSize, 10))), t.globals.zoomed || (a = m.x, s = m.y), m.textRects && (a < -20 - m.textRects.width || a > t.globals.gridWidth + m.textRects.width + 30) && (l = "");
    var y = t.globals.dataLabels.style.colors[r];
    ((t.config.chart.type === "bar" || t.config.chart.type === "rangeBar") && t.config.plotOptions.bar.distributed || t.config.dataLabels.distributed) && (y = t.globals.dataLabels.style.colors[o]), typeof y == "function" && (y = y({ series: t.globals.series, seriesIndex: r, dataPointIndex: o, w: t })), g && (y = g);
    var w = u.offsetX, v = u.offsetY;
    if (t.config.chart.type !== "bar" && t.config.chart.type !== "rangeBar" || (w = 0, v = 0), t.globals.isSlopeChart && (o !== 0 && (w = -2 * u.offsetX + 5), o !== 0 && o !== t.config.series[r].data.length - 1 && (w = 0)), m.drawnextLabel) {
      if ((b = i.drawText({ width: 100, height: parseInt(u.style.fontSize, 10), x: a + w, y: s + v, foreColor: y, textAnchor: h || u.textAnchor, text: l, fontSize: c || u.style.fontSize, fontFamily: u.style.fontFamily, fontWeight: u.style.fontWeight || "normal" })).attr({ class: x || "apexcharts-datalabel", cx: a, cy: s }), u.dropShadow.enabled) {
        var C = u.dropShadow;
        new Re(this.ctx).dropShadow(b, C);
      }
      d.add(b), t.globals.lastDrawnDataLabelsIndexes[r] === void 0 && (t.globals.lastDrawnDataLabelsIndexes[r] = []), t.globals.lastDrawnDataLabelsIndexes[r].push(o);
    }
    return b;
  } }, { key: "addBackgroundToDataLabel", value: function(e, t) {
    var i = this.w, a = i.config.dataLabels.background, s = a.padding, r = a.padding / 2, o = t.width, l = t.height, h = new X(this.ctx).drawRect(t.x - s, t.y - r / 2, o + 2 * s, l + r, a.borderRadius, i.config.chart.background !== "transparent" && i.config.chart.background ? i.config.chart.background : "#fff", a.opacity, a.borderWidth, a.borderColor);
    return a.dropShadow.enabled && new Re(this.ctx).dropShadow(h, a.dropShadow), h;
  } }, { key: "dataLabelsBackground", value: function() {
    var e = this.w;
    if (e.config.chart.type !== "bubble") for (var t = e.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), i = 0; i < t.length; i++) {
      var a = t[i], s = a.getBBox(), r = null;
      if (s.width && s.height && (r = this.addBackgroundToDataLabel(a, s)), r) {
        a.parentNode.insertBefore(r.node, a);
        var o = e.config.dataLabels.background.backgroundColor || a.getAttribute("fill");
        e.config.chart.animations.enabled && !e.globals.resized && !e.globals.dataChanged ? r.animate().attr({ fill: o }) : r.attr({ fill: o }), a.setAttribute("fill", e.config.dataLabels.background.foreColor);
      }
    }
  } }, { key: "bringForward", value: function() {
    for (var e = this.w, t = e.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), i = e.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"), a = 0; a < t.length; a++) i && i.insertBefore(t[a], i.nextSibling);
  } }]), n;
})(), Ve = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w, this.legendInactiveClass = "legend-mouseover-inactive";
  }
  return $(n, [{ key: "getAllSeriesEls", value: function() {
    return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series");
  } }, { key: "getSeriesByName", value: function(e) {
    return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(L.escapeString(e), "']"));
  } }, { key: "isSeriesHidden", value: function(e) {
    var t = this.getSeriesByName(e), i = parseInt(t.getAttribute("data:realIndex"), 10);
    return { isHidden: t.classList.contains("apexcharts-series-collapsed"), realIndex: i };
  } }, { key: "addCollapsedClassToSeries", value: function(e, t) {
    var i = this.w;
    function a(s) {
      for (var r = 0; r < s.length; r++) s[r].index === t && e.node.classList.add("apexcharts-series-collapsed");
    }
    a(i.globals.collapsedSeries), a(i.globals.ancillaryCollapsedSeries);
  } }, { key: "toggleSeries", value: function(e) {
    var t = this.isSeriesHidden(e);
    return this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex, t.isHidden), t.isHidden;
  } }, { key: "showSeries", value: function(e) {
    var t = this.isSeriesHidden(e);
    t.isHidden && this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex, !0);
  } }, { key: "hideSeries", value: function(e) {
    var t = this.isSeriesHidden(e);
    t.isHidden || this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex, !1);
  } }, { key: "resetSeries", value: function() {
    var e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], a = this.w, s = L.clone(a.globals.initialSeries);
    a.globals.previousPaths = [], i ? (a.globals.collapsedSeries = [], a.globals.ancillaryCollapsedSeries = [], a.globals.collapsedSeriesIndices = [], a.globals.ancillaryCollapsedSeriesIndices = []) : s = this.emptyCollapsedSeries(s), a.config.series = s, e && (t && (a.globals.zoomed = !1, this.ctx.updateHelpers.revertDefaultAxisMinMax()), this.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled));
  } }, { key: "emptyCollapsedSeries", value: function(e) {
    for (var t = this.w, i = 0; i < e.length; i++) t.globals.collapsedSeriesIndices.indexOf(i) > -1 && (e[i].data = []);
    return e;
  } }, { key: "highlightSeries", value: function(e) {
    var t = this.w, i = this.getSeriesByName(e), a = parseInt(i == null ? void 0 : i.getAttribute("data:realIndex"), 10), s = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis"), r = null, o = null, l = null;
    if (t.globals.axisCharts || t.config.chart.type === "radialBar") if (t.globals.axisCharts) {
      r = t.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(a, "']")), o = t.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(a, "']"));
      var h = t.globals.seriesYAxisReverseMap[a];
      l = t.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(h, "']"));
    } else r = t.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a + 1, "']"));
    else r = t.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a + 1, "'] path"));
    for (var c = 0; c < s.length; c++) s[c].classList.add(this.legendInactiveClass);
    if (r) t.globals.axisCharts || r.parentNode.classList.remove(this.legendInactiveClass), r.classList.remove(this.legendInactiveClass), o !== null && o.classList.remove(this.legendInactiveClass), l !== null && l.classList.remove(this.legendInactiveClass);
    else for (var d = 0; d < s.length; d++) s[d].classList.remove(this.legendInactiveClass);
  } }, { key: "toggleSeriesOnHover", value: function(e, t) {
    var i = this.w;
    t || (t = e.target);
    var a = i.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis");
    if (e.type === "mousemove") {
      var s = parseInt(t.getAttribute("rel"), 10) - 1;
      this.highlightSeries(i.globals.seriesNames[s]);
    } else if (e.type === "mouseout") for (var r = 0; r < a.length; r++) a[r].classList.remove(this.legendInactiveClass);
  } }, { key: "highlightRangeInSeries", value: function(e, t) {
    var i = this, a = this.w, s = a.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"), r = function(h) {
      for (var c = 0; c < s.length; c++) s[c].classList[h](i.legendInactiveClass);
    };
    if (e.type === "mousemove") {
      var o = parseInt(t.getAttribute("rel"), 10) - 1;
      r("add");
      var l = a.config.plotOptions.heatmap.colorScale.ranges;
      (function(h, c) {
        for (var d = 0; d < s.length; d++) {
          var u = Number(s[d].getAttribute("val"));
          u >= h.from && (u < h.to || h.to === c && u === c) && s[d].classList.remove(i.legendInactiveClass);
        }
      })(l[o], l.reduce((function(h, c) {
        return Math.max(h, c.to);
      }), 0));
    } else e.type === "mouseout" && r("remove");
  } }, { key: "getActiveConfigSeriesIndex", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "asc", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = this.w, a = 0;
    if (i.config.series.length > 1) {
      for (var s = i.config.series.map((function(o, l) {
        return o.data && o.data.length > 0 && i.globals.collapsedSeriesIndices.indexOf(l) === -1 && (!i.globals.comboCharts || t.length === 0 || t.length && t.indexOf(i.config.series[l].type) > -1) ? l : -1;
      })), r = e === "asc" ? 0 : s.length - 1; e === "asc" ? r < s.length : r >= 0; e === "asc" ? r++ : r--) if (s[r] !== -1) {
        a = s[r];
        break;
      }
    }
    return a;
  } }, { key: "getBarSeriesIndices", value: function() {
    return this.w.globals.comboCharts ? this.w.config.series.map((function(e, t) {
      return e.type === "bar" || e.type === "column" ? t : -1;
    })).filter((function(e) {
      return e !== -1;
    })) : this.w.config.series.map((function(e, t) {
      return t;
    }));
  } }, { key: "getPreviousPaths", value: function() {
    var e = this.w;
    function t(r, o, l) {
      for (var h = r[o].childNodes, c = { type: l, paths: [], realIndex: r[o].getAttribute("data:realIndex") }, d = 0; d < h.length; d++) if (h[d].hasAttribute("pathTo")) {
        var u = h[d].getAttribute("pathTo");
        c.paths.push({ d: u });
      }
      e.globals.previousPaths.push(c);
    }
    e.globals.previousPaths = [], ["line", "area", "bar", "rangebar", "rangeArea", "candlestick", "radar"].forEach((function(r) {
      for (var o, l = (o = r, e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(o, "-series .apexcharts-series"))), h = 0; h < l.length; h++) t(l, h, r);
    }));
    var i = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e.config.chart.type, " .apexcharts-series"));
    if (i.length > 0) for (var a = function(r) {
      for (var o = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e.config.chart.type, " .apexcharts-series[data\\:realIndex='").concat(r, "'] rect")), l = [], h = function(d) {
        var u = function(p) {
          return o[d].getAttribute(p);
        }, g = { x: parseFloat(u("x")), y: parseFloat(u("y")), width: parseFloat(u("width")), height: parseFloat(u("height")) };
        l.push({ rect: g, color: o[d].getAttribute("color") });
      }, c = 0; c < o.length; c++) h(c);
      e.globals.previousPaths.push(l);
    }, s = 0; s < i.length; s++) a(s);
    e.globals.axisCharts || (e.globals.previousPaths = e.globals.series);
  } }, { key: "clearPreviousPaths", value: function() {
    var e = this.w;
    e.globals.previousPaths = [], e.globals.allSeriesCollapsed = !1;
  } }, { key: "handleNoData", value: function() {
    var e = this.w, t = e.config.noData, i = new X(this.ctx), a = e.globals.svgWidth / 2, s = e.globals.svgHeight / 2, r = "middle";
    if (e.globals.noData = !0, e.globals.animationEnded = !0, t.align === "left" ? (a = 10, r = "start") : t.align === "right" && (a = e.globals.svgWidth - 10, r = "end"), t.verticalAlign === "top" ? s = 50 : t.verticalAlign === "bottom" && (s = e.globals.svgHeight - 50), a += t.offsetX, s = s + parseInt(t.style.fontSize, 10) + 2 + t.offsetY, t.text !== void 0 && t.text !== "") {
      var o = i.drawText({ x: a, y: s, text: t.text, textAnchor: r, fontSize: t.style.fontSize, fontFamily: t.style.fontFamily, foreColor: t.style.color, opacity: 1, class: "apexcharts-text-nodata" });
      e.globals.dom.Paper.add(o);
    }
  } }, { key: "setNullSeriesToZeroValues", value: function(e) {
    for (var t = this.w, i = 0; i < e.length; i++) if (e[i].length === 0) for (var a = 0; a < e[t.globals.maxValsInArrayIndex].length; a++) e[i].push(0);
    return e;
  } }, { key: "hasAllSeriesEqualX", value: function() {
    for (var e = !0, t = this.w, i = this.filteredSeriesX(), a = 0; a < i.length - 1; a++) if (i[a][0] !== i[a + 1][0]) {
      e = !1;
      break;
    }
    return t.globals.allSeriesHasEqualX = e, e;
  } }, { key: "filteredSeriesX", value: function() {
    var e = this.w.globals.seriesX.map((function(t) {
      return t.length > 0 ? t : [];
    }));
    return e;
  } }]), n;
})(), Ma = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.seriesGoals = [], this.coreUtils = new Le(this.ctx);
  }
  return $(n, [{ key: "isMultiFormat", value: function() {
    return this.isFormatXY() || this.isFormat2DArray();
  } }, { key: "isFormatXY", value: function() {
    var e = this.w.config.series.slice(), t = new Ve(this.ctx);
    if (this.activeSeriesIndex = t.getActiveConfigSeriesIndex(), e[this.activeSeriesIndex].data !== void 0 && e[this.activeSeriesIndex].data.length > 0 && e[this.activeSeriesIndex].data[0] !== null && e[this.activeSeriesIndex].data[0].x !== void 0 && e[this.activeSeriesIndex].data[0] !== null) return !0;
  } }, { key: "isFormat2DArray", value: function() {
    var e = this.w.config.series.slice(), t = new Ve(this.ctx);
    if (this.activeSeriesIndex = t.getActiveConfigSeriesIndex(), e[this.activeSeriesIndex].data !== void 0 && e[this.activeSeriesIndex].data.length > 0 && e[this.activeSeriesIndex].data[0] !== void 0 && e[this.activeSeriesIndex].data[0] !== null && e[this.activeSeriesIndex].data[0].constructor === Array) return !0;
  } }, { key: "handleFormat2DArray", value: function(e, t) {
    for (var i = this.w.config, a = this.w.globals, s = i.chart.type === "boxPlot" || i.series[t].type === "boxPlot", r = 0; r < e[t].data.length; r++) if (e[t].data[r][1] !== void 0 && (Array.isArray(e[t].data[r][1]) && e[t].data[r][1].length === 4 && !s ? this.twoDSeries.push(L.parseNumber(e[t].data[r][1][3])) : e[t].data[r].length >= 5 ? this.twoDSeries.push(L.parseNumber(e[t].data[r][4])) : this.twoDSeries.push(L.parseNumber(e[t].data[r][1])), a.dataFormatXNumeric = !0), i.xaxis.type === "datetime") {
      var o = new Date(e[t].data[r][0]);
      o = new Date(o).getTime(), this.twoDSeriesX.push(o);
    } else this.twoDSeriesX.push(e[t].data[r][0]);
    for (var l = 0; l < e[t].data.length; l++) e[t].data[l][2] !== void 0 && (this.threeDSeries.push(e[t].data[l][2]), a.isDataXYZ = !0);
  } }, { key: "handleFormatXY", value: function(e, t) {
    var i = this.w.config, a = this.w.globals, s = new Ie(this.ctx), r = t;
    a.collapsedSeriesIndices.indexOf(t) > -1 && (r = this.activeSeriesIndex);
    for (var o = 0; o < e[t].data.length; o++) e[t].data[o].y !== void 0 && (Array.isArray(e[t].data[o].y) ? this.twoDSeries.push(L.parseNumber(e[t].data[o].y[e[t].data[o].y.length - 1])) : this.twoDSeries.push(L.parseNumber(e[t].data[o].y))), e[t].data[o].goals !== void 0 && Array.isArray(e[t].data[o].goals) ? (this.seriesGoals[t] === void 0 && (this.seriesGoals[t] = []), this.seriesGoals[t].push(e[t].data[o].goals)) : (this.seriesGoals[t] === void 0 && (this.seriesGoals[t] = []), this.seriesGoals[t].push(null));
    for (var l = 0; l < e[r].data.length; l++) {
      var h = typeof e[r].data[l].x == "string", c = Array.isArray(e[r].data[l].x), d = !c && !!s.isValidDate(e[r].data[l].x);
      if (h || d) if (h || i.xaxis.convertedCatToNumeric) {
        var u = a.isBarHorizontal && a.isRangeData;
        i.xaxis.type !== "datetime" || u ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(e[r].data[l].x), isNaN(e[r].data[l].x) || this.w.config.xaxis.type === "category" || typeof e[r].data[l].x == "string" || (a.isXNumeric = !0)) : this.twoDSeriesX.push(s.parseDate(e[r].data[l].x));
      } else i.xaxis.type === "datetime" ? this.twoDSeriesX.push(s.parseDate(e[r].data[l].x.toString())) : (a.dataFormatXNumeric = !0, a.isXNumeric = !0, this.twoDSeriesX.push(parseFloat(e[r].data[l].x)));
      else c ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(e[r].data[l].x)) : (a.isXNumeric = !0, a.dataFormatXNumeric = !0, this.twoDSeriesX.push(e[r].data[l].x));
    }
    if (e[t].data[0] && e[t].data[0].z !== void 0) {
      for (var g = 0; g < e[t].data.length; g++) this.threeDSeries.push(e[t].data[g].z);
      a.isDataXYZ = !0;
    }
  } }, { key: "handleRangeData", value: function(e, t) {
    var i = this.w.globals, a = {};
    return this.isFormat2DArray() ? a = this.handleRangeDataFormat("array", e, t) : this.isFormatXY() && (a = this.handleRangeDataFormat("xy", e, t)), i.seriesRangeStart[t] = a.start === void 0 ? [] : a.start, i.seriesRangeEnd[t] = a.end === void 0 ? [] : a.end, i.seriesRange[t] = a.rangeUniques, i.seriesRange.forEach((function(s, r) {
      s && s.forEach((function(o, l) {
        o.y.forEach((function(h, c) {
          for (var d = 0; d < o.y.length; d++) if (c !== d) {
            var u = h.y1, g = h.y2, p = o.y[d].y1;
            u <= o.y[d].y2 && p <= g && (o.overlaps.indexOf(h.rangeName) < 0 && o.overlaps.push(h.rangeName), o.overlaps.indexOf(o.y[d].rangeName) < 0 && o.overlaps.push(o.y[d].rangeName));
          }
        }));
      }));
    })), a;
  } }, { key: "handleCandleStickBoxData", value: function(e, t) {
    var i = this.w.globals, a = {};
    return this.isFormat2DArray() ? a = this.handleCandleStickBoxDataFormat("array", e, t) : this.isFormatXY() && (a = this.handleCandleStickBoxDataFormat("xy", e, t)), i.seriesCandleO[t] = a.o, i.seriesCandleH[t] = a.h, i.seriesCandleM[t] = a.m, i.seriesCandleL[t] = a.l, i.seriesCandleC[t] = a.c, a;
  } }, { key: "handleRangeDataFormat", value: function(e, t, i) {
    var a = [], s = [], r = t[i].data.filter((function(c, d, u) {
      return d === u.findIndex((function(g) {
        return g.x === c.x;
      }));
    })).map((function(c, d) {
      return { x: c.x, overlaps: [], y: [] };
    }));
    if (e === "array") for (var o = 0; o < t[i].data.length; o++) Array.isArray(t[i].data[o]) ? (a.push(t[i].data[o][1][0]), s.push(t[i].data[o][1][1])) : (a.push(t[i].data[o]), s.push(t[i].data[o]));
    else if (e === "xy") for (var l = function(c) {
      var d = Array.isArray(t[i].data[c].y), u = L.randomId(), g = t[i].data[c].x, p = { y1: d ? t[i].data[c].y[0] : t[i].data[c].y, y2: d ? t[i].data[c].y[1] : t[i].data[c].y, rangeName: u };
      t[i].data[c].rangeName = u;
      var f = r.findIndex((function(x) {
        return x.x === g;
      }));
      r[f].y.push(p), a.push(p.y1), s.push(p.y2);
    }, h = 0; h < t[i].data.length; h++) l(h);
    return { start: a, end: s, rangeUniques: r };
  } }, { key: "handleCandleStickBoxDataFormat", value: function(e, t, i) {
    var a = this.w, s = a.config.chart.type === "boxPlot" || a.config.series[i].type === "boxPlot", r = [], o = [], l = [], h = [], c = [];
    if (e === "array") if (s && t[i].data[0].length === 6 || !s && t[i].data[0].length === 5) for (var d = 0; d < t[i].data.length; d++) r.push(t[i].data[d][1]), o.push(t[i].data[d][2]), s ? (l.push(t[i].data[d][3]), h.push(t[i].data[d][4]), c.push(t[i].data[d][5])) : (h.push(t[i].data[d][3]), c.push(t[i].data[d][4]));
    else for (var u = 0; u < t[i].data.length; u++) Array.isArray(t[i].data[u][1]) && (r.push(t[i].data[u][1][0]), o.push(t[i].data[u][1][1]), s ? (l.push(t[i].data[u][1][2]), h.push(t[i].data[u][1][3]), c.push(t[i].data[u][1][4])) : (h.push(t[i].data[u][1][2]), c.push(t[i].data[u][1][3])));
    else if (e === "xy") for (var g = 0; g < t[i].data.length; g++) Array.isArray(t[i].data[g].y) && (r.push(t[i].data[g].y[0]), o.push(t[i].data[g].y[1]), s ? (l.push(t[i].data[g].y[2]), h.push(t[i].data[g].y[3]), c.push(t[i].data[g].y[4])) : (h.push(t[i].data[g].y[2]), c.push(t[i].data[g].y[3])));
    return { o: r, h: o, m: l, l: h, c };
  } }, { key: "parseDataAxisCharts", value: function(e) {
    var t = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.ctx, a = this.w.config, s = this.w.globals, r = new Ie(i), o = a.labels.length > 0 ? a.labels.slice() : a.xaxis.categories.slice();
    s.isRangeBar = a.chart.type === "rangeBar" && s.isBarHorizontal, s.hasXaxisGroups = a.xaxis.type === "category" && a.xaxis.group.groups.length > 0, s.hasXaxisGroups && (s.groups = a.xaxis.group.groups), e.forEach((function(g, p) {
      g.name !== void 0 ? s.seriesNames.push(g.name) : s.seriesNames.push("series-" + parseInt(p + 1, 10));
    })), this.coreUtils.setSeriesYAxisMappings();
    var l = [], h = Ee(new Set(a.series.map((function(g) {
      return g.group;
    }))));
    a.series.forEach((function(g, p) {
      var f = h.indexOf(g.group);
      l[f] || (l[f] = []), l[f].push(s.seriesNames[p]);
    })), s.seriesGroups = l;
    for (var c = function() {
      for (var g = 0; g < o.length; g++) if (typeof o[g] == "string") {
        if (!r.isValidDate(o[g])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
        t.twoDSeriesX.push(r.parseDate(o[g]));
      } else t.twoDSeriesX.push(o[g]);
    }, d = 0; d < e.length; d++) {
      if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], e[d].data === void 0) return void console.error("It is a possibility that you may have not included 'data' property in series.");
      if (a.chart.type !== "rangeBar" && a.chart.type !== "rangeArea" && e[d].type !== "rangeBar" && e[d].type !== "rangeArea" || (s.isRangeData = !0, this.handleRangeData(e, d)), this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(e, d) : this.isFormatXY() && this.handleFormatXY(e, d), a.chart.type !== "candlestick" && e[d].type !== "candlestick" && a.chart.type !== "boxPlot" && e[d].type !== "boxPlot" || this.handleCandleStickBoxData(e, d), s.series.push(this.twoDSeries), s.labels.push(this.twoDSeriesX), s.seriesX.push(this.twoDSeriesX), s.seriesGoals = this.seriesGoals, d !== this.activeSeriesIndex || this.fallbackToCategory || (s.isXNumeric = !0);
      else {
        a.xaxis.type === "datetime" ? (s.isXNumeric = !0, c(), s.seriesX.push(this.twoDSeriesX)) : a.xaxis.type === "numeric" && (s.isXNumeric = !0, o.length > 0 && (this.twoDSeriesX = o, s.seriesX.push(this.twoDSeriesX))), s.labels.push(this.twoDSeriesX);
        var u = e[d].data.map((function(g) {
          return L.parseNumber(g);
        }));
        s.series.push(u);
      }
      s.seriesZ.push(this.threeDSeries), e[d].color !== void 0 ? s.seriesColors.push(e[d].color) : s.seriesColors.push(void 0);
    }
    return this.w;
  } }, { key: "parseDataNonAxisCharts", value: function(e) {
    var t = this.w.globals, i = this.w.config;
    t.series = e.slice(), t.seriesNames = i.labels.slice();
    for (var a = 0; a < t.series.length; a++) t.seriesNames[a] === void 0 && t.seriesNames.push("series-" + (a + 1));
    return this.w;
  } }, { key: "handleExternalLabelsData", value: function(e) {
    var t = this.w.config, i = this.w.globals;
    t.xaxis.categories.length > 0 ? i.labels = t.xaxis.categories : t.labels.length > 0 ? i.labels = t.labels.slice() : this.fallbackToCategory ? (i.labels = i.labels[0], i.seriesRange.length && (i.seriesRange.map((function(a) {
      a.forEach((function(s) {
        i.labels.indexOf(s.x) < 0 && s.x && i.labels.push(s.x);
      }));
    })), i.labels = Array.from(new Set(i.labels.map(JSON.stringify)), JSON.parse)), t.xaxis.convertedCatToNumeric && (new Ft(t).convertCatToNumericXaxis(t, this.ctx, i.seriesX[0]), this._generateExternalLabels(e))) : this._generateExternalLabels(e);
  } }, { key: "_generateExternalLabels", value: function(e) {
    var t = this.w.globals, i = this.w.config, a = [];
    if (t.axisCharts) {
      if (t.series.length > 0) if (this.isFormatXY()) for (var s = i.series.map((function(d, u) {
        return d.data.filter((function(g, p, f) {
          return f.findIndex((function(x) {
            return x.x === g.x;
          })) === p;
        }));
      })), r = s.reduce((function(d, u, g, p) {
        return p[d].length > u.length ? d : g;
      }), 0), o = 0; o < s[r].length; o++) a.push(o + 1);
      else for (var l = 0; l < t.series[t.maxValsInArrayIndex].length; l++) a.push(l + 1);
      t.seriesX = [];
      for (var h = 0; h < e.length; h++) t.seriesX.push(a);
      this.w.globals.isBarHorizontal || (t.isXNumeric = !0);
    }
    if (a.length === 0) {
      a = t.axisCharts ? [] : t.series.map((function(d, u) {
        return u + 1;
      }));
      for (var c = 0; c < e.length; c++) t.seriesX.push(a);
    }
    t.labels = a, i.xaxis.convertedCatToNumeric && (t.categoryLabels = a.map((function(d) {
      return i.xaxis.labels.formatter(d);
    }))), t.noLabelsProvided = !0;
  } }, { key: "parseData", value: function(e) {
    var t = this.w, i = t.config, a = t.globals;
    if (this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = !1, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), a.axisCharts ? (this.parseDataAxisCharts(e), this.coreUtils.getLargestSeries()) : this.parseDataNonAxisCharts(e), i.chart.stacked) {
      var s = new Ve(this.ctx);
      a.series = s.setNullSeriesToZeroValues(a.series);
    }
    this.coreUtils.getSeriesTotals(), a.axisCharts && (a.stackedSeriesTotals = this.coreUtils.getStackedSeriesTotals(), a.stackedSeriesTotalsByGroups = this.coreUtils.getStackedSeriesTotalsByGroups()), this.coreUtils.getPercentSeries(), a.dataFormatXNumeric || a.isXNumeric && (i.xaxis.type !== "numeric" || i.labels.length !== 0 || i.xaxis.categories.length !== 0) || this.handleExternalLabelsData(e);
    for (var r = this.coreUtils.getCategoryLabels(a.labels), o = 0; o < r.length; o++) if (Array.isArray(r[o])) {
      a.isMultiLineX = !0;
      break;
    }
  } }, { key: "excludeCollapsedSeriesInYAxis", value: function() {
    var e = this.w, t = [];
    e.globals.seriesYAxisMap.forEach((function(i, a) {
      var s = 0;
      i.forEach((function(r) {
        e.globals.collapsedSeriesIndices.indexOf(r) !== -1 && s++;
      })), s > 0 && s == i.length && t.push(a);
    })), e.globals.ignoreYAxisIndexes = t.map((function(i) {
      return i;
    }));
  } }]), n;
})(), Yt = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
  }
  return $(n, [{ key: "svgStringToNode", value: function(e) {
    return new DOMParser().parseFromString(e, "image/svg+xml").documentElement;
  } }, { key: "scaleSvgNode", value: function(e, t) {
    var i = parseFloat(e.getAttributeNS(null, "width")), a = parseFloat(e.getAttributeNS(null, "height"));
    e.setAttributeNS(null, "width", i * t), e.setAttributeNS(null, "height", a * t), e.setAttributeNS(null, "viewBox", "0 0 " + i + " " + a);
  } }, { key: "getSvgString", value: function(e) {
    var t = this;
    return new Promise((function(i) {
      var a = t.w, s = e || a.config.chart.toolbar.export.scale || a.config.chart.toolbar.export.width / a.globals.svgWidth;
      s || (s = 1);
      var r = a.globals.svgWidth * s, o = a.globals.svgHeight * s, l = a.globals.dom.elWrap.cloneNode(!0);
      l.style.width = r + "px", l.style.height = o + "px";
      var h = new XMLSerializer().serializeToString(l), c = `
        <svg xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="apexcharts-svg"
          xmlns:data="ApexChartsNS"
          transform="translate(0, 0)"
          width="`.concat(a.globals.svgWidth, 'px" height="').concat(a.globals.svgHeight, `px">
          <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml" style="width:`).concat(r, "px; height:").concat(o, `px;">
            <style type="text/css">
              .apexcharts-tooltip, .apexcharts-toolbar, .apexcharts-xaxistooltip, .apexcharts-yaxistooltip, .apexcharts-xcrosshairs, .apexcharts-ycrosshairs, .apexcharts-zoom-rect, .apexcharts-selection-rect {
                display: none;
              }
            </style>
              `).concat(h, `
            </div>
          </foreignObject>
        </svg>
      `), d = t.svgStringToNode(c);
      s !== 1 && t.scaleSvgNode(d, s), t.convertImagesToBase64(d).then((function() {
        c = new XMLSerializer().serializeToString(d), i(c.replace(/&nbsp;/g, "&#160;"));
      }));
    }));
  } }, { key: "convertImagesToBase64", value: function(e) {
    var t = this, i = e.getElementsByTagName("image"), a = Array.from(i).map((function(s) {
      var r = s.getAttributeNS("http://www.w3.org/1999/xlink", "href");
      return r && !r.startsWith("data:") ? t.getBase64FromUrl(r).then((function(o) {
        s.setAttributeNS("http://www.w3.org/1999/xlink", "href", o);
      })).catch((function(o) {
        console.error("Error converting image to base64:", o);
      })) : Promise.resolve();
    }));
    return Promise.all(a);
  } }, { key: "getBase64FromUrl", value: function(e) {
    return new Promise((function(t, i) {
      var a = new Image();
      a.crossOrigin = "Anonymous", a.onload = function() {
        var s = document.createElement("canvas");
        s.width = a.width, s.height = a.height, s.getContext("2d").drawImage(a, 0, 0), t(s.toDataURL());
      }, a.onerror = i, a.src = e;
    }));
  } }, { key: "svgUrl", value: function() {
    var e = this;
    return new Promise((function(t) {
      e.getSvgString().then((function(i) {
        var a = new Blob([i], { type: "image/svg+xml;charset=utf-8" });
        t(URL.createObjectURL(a));
      }));
    }));
  } }, { key: "dataURI", value: function(e) {
    var t = this;
    return new Promise((function(i) {
      var a = t.w, s = e ? e.scale || e.width / a.globals.svgWidth : 1, r = document.createElement("canvas");
      r.width = a.globals.svgWidth * s, r.height = parseInt(a.globals.dom.elWrap.style.height, 10) * s;
      var o = a.config.chart.background !== "transparent" && a.config.chart.background ? a.config.chart.background : "#fff", l = r.getContext("2d");
      l.fillStyle = o, l.fillRect(0, 0, r.width * s, r.height * s), t.getSvgString(s).then((function(h) {
        var c = "data:image/svg+xml," + encodeURIComponent(h), d = new Image();
        d.crossOrigin = "anonymous", d.onload = function() {
          if (l.drawImage(d, 0, 0), r.msToBlob) {
            var u = r.msToBlob();
            i({ blob: u });
          } else {
            var g = r.toDataURL("image/png");
            i({ imgURI: g });
          }
        }, d.src = c;
      }));
    }));
  } }, { key: "exportToSVG", value: function() {
    var e = this;
    this.svgUrl().then((function(t) {
      e.triggerDownload(t, e.w.config.chart.toolbar.export.svg.filename, ".svg");
    }));
  } }, { key: "exportToPng", value: function() {
    var e = this, t = this.w.config.chart.toolbar.export.scale, i = this.w.config.chart.toolbar.export.width, a = t ? { scale: t } : i ? { width: i } : void 0;
    this.dataURI(a).then((function(s) {
      var r = s.imgURI, o = s.blob;
      o ? navigator.msSaveOrOpenBlob(o, e.w.globals.chartID + ".png") : e.triggerDownload(r, e.w.config.chart.toolbar.export.png.filename, ".png");
    }));
  } }, { key: "exportToCSV", value: function(e) {
    var t = this, i = e.series, a = e.fileName, s = e.columnDelimiter, r = s === void 0 ? "," : s, o = e.lineDelimiter, l = o === void 0 ? `
` : o, h = this.w;
    i || (i = h.config.series);
    var c = [], d = [], u = "", g = h.globals.series.map((function(v, C) {
      return h.globals.collapsedSeriesIndices.indexOf(C) === -1 ? v : [];
    })), p = function(v) {
      return typeof h.config.chart.toolbar.export.csv.categoryFormatter == "function" ? h.config.chart.toolbar.export.csv.categoryFormatter(v) : h.config.xaxis.type === "datetime" && String(v).length >= 10 ? new Date(v).toDateString() : L.isNumber(v) ? v : v.split(r).join("");
    }, f = function(v) {
      return typeof h.config.chart.toolbar.export.csv.valueFormatter == "function" ? h.config.chart.toolbar.export.csv.valueFormatter(v) : v;
    }, x = Math.max.apply(Math, Ee(i.map((function(v) {
      return v.data ? v.data.length : 0;
    })))), b = new Ma(this.ctx), m = new st(this.ctx), y = function(v) {
      var C = "";
      if (h.globals.axisCharts) {
        if (h.config.xaxis.type === "category" || h.config.xaxis.convertedCatToNumeric) if (h.globals.isBarHorizontal) {
          var k = h.globals.yLabelFormatters[0], A = new Ve(t.ctx).getActiveConfigSeriesIndex();
          C = k(h.globals.labels[v], { seriesIndex: A, dataPointIndex: v, w: h });
        } else C = m.getLabel(h.globals.labels, h.globals.timescaleLabels, 0, v).text;
        h.config.xaxis.type === "datetime" && (h.config.xaxis.categories.length ? C = h.config.xaxis.categories[v] : h.config.labels.length && (C = h.config.labels[v]));
      } else C = h.config.labels[v];
      return C === null ? "nullvalue" : (Array.isArray(C) && (C = C.join(" ")), L.isNumber(C) ? C : C.split(r).join(""));
    }, w = function(v, C) {
      if (c.length && C === 0 && d.push(c.join(r)), v.data) {
        v.data = v.data.length && v.data || Ee(Array(x)).map((function() {
          return "";
        }));
        for (var k = 0; k < v.data.length; k++) {
          c = [];
          var A = y(k);
          if (A !== "nullvalue") {
            if (A || (b.isFormatXY() ? A = i[C].data[k].x : b.isFormat2DArray() && (A = i[C].data[k] ? i[C].data[k][0] : "")), C === 0) {
              c.push(p(A));
              for (var S = 0; S < h.globals.series.length; S++) {
                var P, T = b.isFormatXY() ? (P = i[S].data[k]) === null || P === void 0 ? void 0 : P.y : g[S][k];
                c.push(f(T));
              }
            }
            (h.config.chart.type === "candlestick" || v.type && v.type === "candlestick") && (c.pop(), c.push(h.globals.seriesCandleO[C][k]), c.push(h.globals.seriesCandleH[C][k]), c.push(h.globals.seriesCandleL[C][k]), c.push(h.globals.seriesCandleC[C][k])), (h.config.chart.type === "boxPlot" || v.type && v.type === "boxPlot") && (c.pop(), c.push(h.globals.seriesCandleO[C][k]), c.push(h.globals.seriesCandleH[C][k]), c.push(h.globals.seriesCandleM[C][k]), c.push(h.globals.seriesCandleL[C][k]), c.push(h.globals.seriesCandleC[C][k])), h.config.chart.type === "rangeBar" && (c.pop(), c.push(h.globals.seriesRangeStart[C][k]), c.push(h.globals.seriesRangeEnd[C][k])), c.length && d.push(c.join(r));
          }
        }
      }
    };
    c.push(h.config.chart.toolbar.export.csv.headerCategory), h.config.chart.type === "boxPlot" ? (c.push("minimum"), c.push("q1"), c.push("median"), c.push("q3"), c.push("maximum")) : h.config.chart.type === "candlestick" ? (c.push("open"), c.push("high"), c.push("low"), c.push("close")) : h.config.chart.type === "rangeBar" ? (c.push("minimum"), c.push("maximum")) : i.map((function(v, C) {
      var k = (v.name ? v.name : "series-".concat(C)) + "";
      h.globals.axisCharts && c.push(k.split(r).join("") ? k.split(r).join("") : "series-".concat(C));
    })), h.globals.axisCharts || (c.push(h.config.chart.toolbar.export.csv.headerValue), d.push(c.join(r))), h.globals.allSeriesHasEqualX || !h.globals.axisCharts || h.config.xaxis.categories.length || h.config.labels.length ? i.map((function(v, C) {
      h.globals.axisCharts ? w(v, C) : ((c = []).push(p(h.globals.labels[C])), c.push(f(g[C])), d.push(c.join(r)));
    })) : (function() {
      var v = /* @__PURE__ */ new Set(), C = {};
      i.forEach((function(k, A) {
        k == null || k.data.forEach((function(S) {
          var P, T;
          if (b.isFormatXY()) P = S.x, T = S.y;
          else {
            if (!b.isFormat2DArray()) return;
            P = S[0], T = S[1];
          }
          C[P] || (C[P] = Array(i.length).fill("")), C[P][A] = f(T), v.add(P);
        }));
      })), c.length && d.push(c.join(r)), Array.from(v).sort().forEach((function(k) {
        d.push([p(k), C[k].join(r)]);
      }));
    })(), u += d.join(l), this.triggerDownload("data:text/csv; charset=utf-8," + encodeURIComponent("\uFEFF" + u), a || h.config.chart.toolbar.export.csv.filename, ".csv");
  } }, { key: "triggerDownload", value: function(e, t, i) {
    var a = document.createElement("a");
    a.href = e, a.download = (t || this.w.globals.chartID) + i, document.body.appendChild(a), a.click(), document.body.removeChild(a);
  } }]), n;
})(), Wt = (function() {
  function n(e, t) {
    q(this, n), this.ctx = e, this.elgrid = t, this.w = e.w;
    var i = this.w;
    this.axesUtils = new st(e), this.xaxisLabels = i.globals.labels.slice(), i.globals.timescaleLabels.length > 0 && !i.globals.isBarHorizontal && (this.xaxisLabels = i.globals.timescaleLabels.slice()), i.config.xaxis.overwriteCategories && (this.xaxisLabels = i.config.xaxis.overwriteCategories), this.drawnLabels = [], this.drawnLabelsRects = [], i.config.xaxis.position === "top" ? this.offY = 0 : this.offY = i.globals.gridHeight, this.offY = this.offY + i.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = i.config.chart.type === "bar" && i.config.plotOptions.bar.horizontal, this.xaxisFontSize = i.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = i.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = i.config.xaxis.labels.style.colors, this.xaxisBorderWidth = i.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = i.config.yaxis[0].axisBorder.width.toString()), this.xaxisBorderWidth.indexOf("%") > -1 ? this.xaxisBorderWidth = i.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = i.config.xaxis.axisBorder.height, this.yaxis = i.config.yaxis[0];
  }
  return $(n, [{ key: "drawXaxis", value: function() {
    var e = this.w, t = new X(this.ctx), i = t.group({ class: "apexcharts-xaxis", transform: "translate(".concat(e.config.xaxis.offsetX, ", ").concat(e.config.xaxis.offsetY, ")") }), a = t.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(e.globals.translateXAxisX, ", ").concat(e.globals.translateXAxisY, ")") });
    i.add(a);
    for (var s = [], r = 0; r < this.xaxisLabels.length; r++) s.push(this.xaxisLabels[r]);
    if (this.drawXAxisLabelAndGroup(!0, t, a, s, e.globals.isXNumeric, (function(p, f) {
      return f;
    })), e.globals.hasXaxisGroups) {
      var o = e.globals.groups;
      s = [];
      for (var l = 0; l < o.length; l++) s.push(o[l].title);
      var h = {};
      e.config.xaxis.group.style && (h.xaxisFontSize = e.config.xaxis.group.style.fontSize, h.xaxisFontFamily = e.config.xaxis.group.style.fontFamily, h.xaxisForeColors = e.config.xaxis.group.style.colors, h.fontWeight = e.config.xaxis.group.style.fontWeight, h.cssClass = e.config.xaxis.group.style.cssClass), this.drawXAxisLabelAndGroup(!1, t, a, s, !1, (function(p, f) {
        return o[p].cols * f;
      }), h);
    }
    if (e.config.xaxis.title.text !== void 0) {
      var c = t.group({ class: "apexcharts-xaxis-title" }), d = t.drawText({ x: e.globals.gridWidth / 2 + e.config.xaxis.title.offsetX, y: this.offY + parseFloat(this.xaxisFontSize) + (e.config.xaxis.position === "bottom" ? e.globals.xAxisLabelsHeight : -e.globals.xAxisLabelsHeight - 10) + e.config.xaxis.title.offsetY, text: e.config.xaxis.title.text, textAnchor: "middle", fontSize: e.config.xaxis.title.style.fontSize, fontFamily: e.config.xaxis.title.style.fontFamily, fontWeight: e.config.xaxis.title.style.fontWeight, foreColor: e.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text " + e.config.xaxis.title.style.cssClass });
      c.add(d), i.add(c);
    }
    if (e.config.xaxis.axisBorder.show) {
      var u = e.globals.barPadForNumericAxis, g = t.drawLine(e.globals.padHorizontal + e.config.xaxis.axisBorder.offsetX - u, this.offY, this.xaxisBorderWidth + u, this.offY, e.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
      this.elgrid && this.elgrid.elGridBorders && e.config.grid.show ? this.elgrid.elGridBorders.add(g) : i.add(g);
    }
    return i;
  } }, { key: "drawXAxisLabelAndGroup", value: function(e, t, i, a, s, r) {
    var o, l = this, h = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : {}, c = [], d = [], u = this.w, g = h.xaxisFontSize || this.xaxisFontSize, p = h.xaxisFontFamily || this.xaxisFontFamily, f = h.xaxisForeColors || this.xaxisForeColors, x = h.fontWeight || u.config.xaxis.labels.style.fontWeight, b = h.cssClass || u.config.xaxis.labels.style.cssClass, m = u.globals.padHorizontal, y = a.length, w = u.config.xaxis.type === "category" ? u.globals.dataPoints : y;
    if (w === 0 && y > w && (w = y), s) {
      var v = Math.max(Number(u.config.xaxis.tickAmount) || 1, w > 1 ? w - 1 : w);
      o = u.globals.gridWidth / Math.min(v, y - 1), m = m + r(0, o) / 2 + u.config.xaxis.labels.offsetX;
    } else o = u.globals.gridWidth / w, m = m + r(0, o) + u.config.xaxis.labels.offsetX;
    for (var C = function(A) {
      var S = m - r(A, o) / 2 + u.config.xaxis.labels.offsetX;
      A === 0 && y === 1 && o / 2 === m && w === 1 && (S = u.globals.gridWidth / 2);
      var P = l.axesUtils.getLabel(a, u.globals.timescaleLabels, S, A, c, g, e), T = 28;
      if (u.globals.rotateXLabels && e && (T = 22), u.config.xaxis.title.text && u.config.xaxis.position === "top" && (T += parseFloat(u.config.xaxis.title.style.fontSize) + 2), e || (T = T + parseFloat(g) + (u.globals.xAxisLabelsHeight - u.globals.xAxisGroupLabelsHeight) + (u.globals.rotateXLabels ? 10 : 0)), P = u.config.xaxis.tickAmount !== void 0 && u.config.xaxis.tickAmount !== "dataPoints" && u.config.xaxis.type !== "datetime" ? l.axesUtils.checkLabelBasedOnTickamount(A, P, y) : l.axesUtils.checkForOverflowingLabels(A, P, y, c, d), u.config.xaxis.labels.show) {
        var I = t.drawText({ x: P.x, y: l.offY + u.config.xaxis.labels.offsetY + T - (u.config.xaxis.position === "top" ? u.globals.xAxisHeight + u.config.xaxis.axisTicks.height - 2 : 0), text: P.text, textAnchor: "middle", fontWeight: P.isBold ? 600 : x, fontSize: g, fontFamily: p, foreColor: Array.isArray(f) ? e && u.config.xaxis.convertedCatToNumeric ? f[u.globals.minX + A - 1] : f[A] : f, isPlainText: !1, cssClass: (e ? "apexcharts-xaxis-label " : "apexcharts-xaxis-group-label ") + b });
        if (i.add(I), I.on("click", (function(z) {
          if (typeof u.config.chart.events.xAxisLabelClick == "function") {
            var Y = Object.assign({}, u, { labelIndex: A });
            u.config.chart.events.xAxisLabelClick(z, l.ctx, Y);
          }
        })), e) {
          var R = document.createElementNS(u.globals.SVGNS, "title");
          R.textContent = Array.isArray(P.text) ? P.text.join(" ") : P.text, I.node.appendChild(R), P.text !== "" && (c.push(P.text), d.push(P));
        }
      }
      A < y - 1 && (m += r(A + 1, o));
    }, k = 0; k <= y - 1; k++) C(k);
  } }, { key: "drawXaxisInversed", value: function(e) {
    var t, i, a = this, s = this.w, r = new X(this.ctx), o = s.config.yaxis[0].opposite ? s.globals.translateYAxisX[e] : 0, l = r.group({ class: "apexcharts-yaxis apexcharts-xaxis-inversed", rel: e }), h = r.group({ class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g", transform: "translate(" + o + ", 0)" });
    l.add(h);
    var c = [];
    if (s.config.yaxis[e].show) for (var d = 0; d < this.xaxisLabels.length; d++) c.push(this.xaxisLabels[d]);
    t = s.globals.gridHeight / c.length, i = -t / 2.2;
    var u = s.globals.yLabelFormatters[0], g = s.config.yaxis[0].labels;
    if (g.show) for (var p = function(v) {
      var C = c[v] === void 0 ? "" : c[v];
      C = u(C, { seriesIndex: e, dataPointIndex: v, w: s });
      var k = a.axesUtils.getYAxisForeColor(g.style.colors, e), A = 0;
      Array.isArray(C) && (A = C.length / 2 * parseInt(g.style.fontSize, 10));
      var S = g.offsetX - 15, P = "end";
      a.yaxis.opposite && (P = "start"), s.config.yaxis[0].labels.align === "left" ? (S = g.offsetX, P = "start") : s.config.yaxis[0].labels.align === "center" ? (S = g.offsetX, P = "middle") : s.config.yaxis[0].labels.align === "right" && (P = "end");
      var T = r.drawText({ x: S, y: i + t + g.offsetY - A, text: C, textAnchor: P, foreColor: Array.isArray(k) ? k[v] : k, fontSize: g.style.fontSize, fontFamily: g.style.fontFamily, fontWeight: g.style.fontWeight, isPlainText: !1, cssClass: "apexcharts-yaxis-label " + g.style.cssClass, maxWidth: g.maxWidth });
      h.add(T), T.on("click", (function(z) {
        if (typeof s.config.chart.events.xAxisLabelClick == "function") {
          var Y = Object.assign({}, s, { labelIndex: v });
          s.config.chart.events.xAxisLabelClick(z, a.ctx, Y);
        }
      }));
      var I = document.createElementNS(s.globals.SVGNS, "title");
      if (I.textContent = Array.isArray(C) ? C.join(" ") : C, T.node.appendChild(I), s.config.yaxis[e].labels.rotate !== 0) {
        var R = r.rotateAroundCenter(T.node);
        T.node.setAttribute("transform", "rotate(".concat(s.config.yaxis[e].labels.rotate, " 0 ").concat(R.y, ")"));
      }
      i += t;
    }, f = 0; f <= c.length - 1; f++) p(f);
    if (s.config.yaxis[0].title.text !== void 0) {
      var x = r.group({ class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed", transform: "translate(" + o + ", 0)" }), b = r.drawText({ x: s.config.yaxis[0].title.offsetX, y: s.globals.gridHeight / 2 + s.config.yaxis[0].title.offsetY, text: s.config.yaxis[0].title.text, textAnchor: "middle", foreColor: s.config.yaxis[0].title.style.color, fontSize: s.config.yaxis[0].title.style.fontSize, fontWeight: s.config.yaxis[0].title.style.fontWeight, fontFamily: s.config.yaxis[0].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text " + s.config.yaxis[0].title.style.cssClass });
      x.add(b), l.add(x);
    }
    var m = 0;
    this.isCategoryBarHorizontal && s.config.yaxis[0].opposite && (m = s.globals.gridWidth);
    var y = s.config.xaxis.axisBorder;
    if (y.show) {
      var w = r.drawLine(s.globals.padHorizontal + y.offsetX + m, 1 + y.offsetY, s.globals.padHorizontal + y.offsetX + m, s.globals.gridHeight + y.offsetY, y.color, 0);
      this.elgrid && this.elgrid.elGridBorders && s.config.grid.show ? this.elgrid.elGridBorders.add(w) : l.add(w);
    }
    return s.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(m, c.length, s.config.yaxis[0].axisBorder, s.config.yaxis[0].axisTicks, 0, t, l), l;
  } }, { key: "drawXaxisTicks", value: function(e, t, i) {
    var a = this.w, s = e;
    if (!(e < 0 || e - 2 > a.globals.gridWidth)) {
      var r = this.offY + a.config.xaxis.axisTicks.offsetY;
      if (t = t + r + a.config.xaxis.axisTicks.height, a.config.xaxis.position === "top" && (t = r - a.config.xaxis.axisTicks.height), a.config.xaxis.axisTicks.show) {
        var o = new X(this.ctx).drawLine(e + a.config.xaxis.axisTicks.offsetX, r + a.config.xaxis.offsetY, s + a.config.xaxis.axisTicks.offsetX, t + a.config.xaxis.offsetY, a.config.xaxis.axisTicks.color);
        i.add(o), o.node.classList.add("apexcharts-xaxis-tick");
      }
    }
  } }, { key: "getXAxisTicksPositions", value: function() {
    var e = this.w, t = [], i = this.xaxisLabels.length, a = e.globals.padHorizontal;
    if (e.globals.timescaleLabels.length > 0) for (var s = 0; s < i; s++) a = this.xaxisLabels[s].position, t.push(a);
    else for (var r = i, o = 0; o < r; o++) {
      var l = r;
      e.globals.isXNumeric && e.config.chart.type !== "bar" && (l -= 1), a += e.globals.gridWidth / l, t.push(a);
    }
    return t;
  } }, { key: "xAxisLabelCorrections", value: function() {
    var e = this.w, t = new X(this.ctx), i = e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"), a = e.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"), s = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"), r = e.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");
    if (e.globals.rotateXLabels || e.config.xaxis.labels.rotateAlways) for (var o = 0; o < a.length; o++) {
      var l = t.rotateAroundCenter(a[o]);
      l.y = l.y - 1, l.x = l.x + 1, a[o].setAttribute("transform", "rotate(".concat(e.config.xaxis.labels.rotate, " ").concat(l.x, " ").concat(l.y, ")")), a[o].setAttribute("text-anchor", "end"), i.setAttribute("transform", "translate(0, ".concat(-10, ")"));
      var h = a[o].childNodes;
      e.config.xaxis.labels.trim && Array.prototype.forEach.call(h, (function(g) {
        t.placeTextWithEllipsis(g, g.textContent, e.globals.xAxisLabelsHeight - (e.config.legend.position === "bottom" ? 20 : 10));
      }));
    }
    else (function() {
      for (var g = e.globals.gridWidth / (e.globals.labels.length + 1), p = 0; p < a.length; p++) {
        var f = a[p].childNodes;
        e.config.xaxis.labels.trim && e.config.xaxis.type !== "datetime" && Array.prototype.forEach.call(f, (function(x) {
          t.placeTextWithEllipsis(x, x.textContent, g);
        }));
      }
    })();
    if (s.length > 0) {
      var c = s[s.length - 1].getBBox(), d = s[0].getBBox();
      c.x < -20 && s[s.length - 1].parentNode.removeChild(s[s.length - 1]), d.x + d.width > e.globals.gridWidth && !e.globals.isBarHorizontal && s[0].parentNode.removeChild(s[0]);
      for (var u = 0; u < r.length; u++) t.placeTextWithEllipsis(r[u], r[u].textContent, e.config.yaxis[0].labels.maxWidth - (e.config.yaxis[0].title.text ? 2 * parseFloat(e.config.yaxis[0].title.style.fontSize) : 0) - 15);
    }
  } }]), n;
})(), dr = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
    var t = this.w;
    this.xaxisLabels = t.globals.labels.slice(), this.axesUtils = new st(e), this.isRangeBar = t.globals.seriesRange.length && t.globals.isBarHorizontal, t.globals.timescaleLabels.length > 0 && (this.xaxisLabels = t.globals.timescaleLabels.slice());
  }
  return $(n, [{ key: "drawGridArea", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, t = this.w, i = new X(this.ctx);
    e || (e = i.group({ class: "apexcharts-grid" }));
    var a = i.drawLine(t.globals.padHorizontal, 1, t.globals.padHorizontal, t.globals.gridHeight, "transparent"), s = i.drawLine(t.globals.padHorizontal, t.globals.gridHeight, t.globals.gridWidth, t.globals.gridHeight, "transparent");
    return e.add(s), e.add(a), e;
  } }, { key: "drawGrid", value: function() {
    if (this.w.globals.axisCharts) {
      var e = this.renderGrid();
      return this.drawGridArea(e.el), e;
    }
    return null;
  } }, { key: "createGridMask", value: function() {
    var e = this.w, t = e.globals, i = new X(this.ctx), a = Array.isArray(e.config.stroke.width) ? Math.max.apply(Math, Ee(e.config.stroke.width)) : e.config.stroke.width, s = function(c) {
      var d = document.createElementNS(t.SVGNS, "clipPath");
      return d.setAttribute("id", c), d;
    };
    t.dom.elGridRectMask = s("gridRectMask".concat(t.cuid)), t.dom.elGridRectBarMask = s("gridRectBarMask".concat(t.cuid)), t.dom.elGridRectMarkerMask = s("gridRectMarkerMask".concat(t.cuid)), t.dom.elForecastMask = s("forecastMask".concat(t.cuid)), t.dom.elNonForecastMask = s("nonForecastMask".concat(t.cuid));
    var r = 0, o = 0;
    (["bar", "rangeBar", "candlestick", "boxPlot"].includes(e.config.chart.type) || e.globals.comboBarCount > 0) && e.globals.isXNumeric && !e.globals.isBarHorizontal && (r = Math.max(e.config.grid.padding.left, t.barPadForNumericAxis), o = Math.max(e.config.grid.padding.right, t.barPadForNumericAxis)), t.dom.elGridRect = i.drawRect(-a / 2 - 2, -a / 2 - 2, t.gridWidth + a + 4, t.gridHeight + a + 4, 0, "#fff"), t.dom.elGridRectBar = i.drawRect(-a / 2 - r - 2, -a / 2 - 2, t.gridWidth + a + o + r + 4, t.gridHeight + a + 4, 0, "#fff");
    var l = e.globals.markers.largestSize;
    t.dom.elGridRectMarker = i.drawRect(-l, -l, t.gridWidth + 2 * l, t.gridHeight + 2 * l, 0, "#fff"), t.dom.elGridRectMask.appendChild(t.dom.elGridRect.node), t.dom.elGridRectBarMask.appendChild(t.dom.elGridRectBar.node), t.dom.elGridRectMarkerMask.appendChild(t.dom.elGridRectMarker.node);
    var h = t.dom.baseEl.querySelector("defs");
    h.appendChild(t.dom.elGridRectMask), h.appendChild(t.dom.elGridRectBarMask), h.appendChild(t.dom.elGridRectMarkerMask), h.appendChild(t.dom.elForecastMask), h.appendChild(t.dom.elNonForecastMask);
  } }, { key: "_drawGridLines", value: function(e) {
    var t = e.i, i = e.x1, a = e.y1, s = e.x2, r = e.y2, o = e.xCount, l = e.parent, h = this.w;
    if (!(t === 0 && h.globals.skipFirstTimelinelabel || t === o - 1 && h.globals.skipLastTimelinelabel && !h.config.xaxis.labels.formatter || h.config.chart.type === "radar")) {
      h.config.grid.xaxis.lines.show && this._drawGridLine({ i: t, x1: i, y1: a, x2: s, y2: r, xCount: o, parent: l });
      var c = 0;
      if (h.globals.hasXaxisGroups && h.config.xaxis.tickPlacement === "between") {
        var d = h.globals.groups;
        if (d) {
          for (var u = 0, g = 0; u < t && g < d.length; g++) u += d[g].cols;
          u === t && (c = 0.6 * h.globals.xAxisLabelsHeight);
        }
      }
      new Wt(this.ctx).drawXaxisTicks(i, c, h.globals.dom.elGraphical);
    }
  } }, { key: "_drawGridLine", value: function(e) {
    var t = e.i, i = e.x1, a = e.y1, s = e.x2, r = e.y2, o = e.xCount, l = e.parent, h = this.w, c = l.node.classList.contains("apexcharts-gridlines-horizontal"), d = h.globals.barPadForNumericAxis, u = a === 0 && r === 0 || i === 0 && s === 0 || a === h.globals.gridHeight && r === h.globals.gridHeight || h.globals.isBarHorizontal && (t === 0 || t === o - 1), g = new X(this).drawLine(i - (c ? d : 0), a, s + (c ? d : 0), r, h.config.grid.borderColor, h.config.grid.strokeDashArray);
    g.node.classList.add("apexcharts-gridline"), u && h.config.grid.show ? this.elGridBorders.add(g) : l.add(g);
  } }, { key: "_drawGridBandRect", value: function(e) {
    var t = e.c, i = e.x1, a = e.y1, s = e.x2, r = e.y2, o = e.type, l = this.w, h = new X(this.ctx), c = l.globals.barPadForNumericAxis, d = l.config.grid[o].colors[t], u = h.drawRect(i - (o === "row" ? c : 0), a, s + (o === "row" ? 2 * c : 0), r, 0, d, l.config.grid[o].opacity);
    this.elg.add(u), u.attr("clip-path", "url(#gridRectMask".concat(l.globals.cuid, ")")), u.node.classList.add("apexcharts-grid-".concat(o));
  } }, { key: "_drawXYLines", value: function(e) {
    var t = this, i = e.xCount, a = e.tickAmount, s = this.w;
    if (s.config.grid.xaxis.lines.show || s.config.xaxis.axisTicks.show) {
      var r, o = s.globals.padHorizontal, l = s.globals.gridHeight;
      s.globals.timescaleLabels.length ? (function(p) {
        for (var f = p.xC, x = p.x1, b = p.y1, m = p.x2, y = p.y2, w = 0; w < f; w++) x = t.xaxisLabels[w].position, m = t.xaxisLabels[w].position, t._drawGridLines({ i: w, x1: x, y1: b, x2: m, y2: y, xCount: i, parent: t.elgridLinesV });
      })({ xC: i, x1: o, y1: 0, x2: r, y2: l }) : (s.globals.isXNumeric && (i = s.globals.xAxisScale.result.length), (function(p) {
        for (var f = p.xC, x = p.x1, b = p.y1, m = p.x2, y = p.y2, w = 0; w < f + (s.globals.isXNumeric ? 0 : 1); w++) w === 0 && f === 1 && s.globals.dataPoints === 1 && (m = x = s.globals.gridWidth / 2), t._drawGridLines({ i: w, x1: x, y1: b, x2: m, y2: y, xCount: i, parent: t.elgridLinesV }), m = x += s.globals.gridWidth / (s.globals.isXNumeric ? f - 1 : f);
      })({ xC: i, x1: o, y1: 0, x2: r, y2: l }));
    }
    if (s.config.grid.yaxis.lines.show) {
      var h = 0, c = 0, d = s.globals.gridWidth, u = a + 1;
      this.isRangeBar && (u = s.globals.labels.length);
      for (var g = 0; g < u + (this.isRangeBar ? 1 : 0); g++) this._drawGridLine({ i: g, xCount: u + (this.isRangeBar ? 1 : 0), x1: 0, y1: h, x2: d, y2: c, parent: this.elgridLinesH }), c = h += s.globals.gridHeight / (this.isRangeBar ? u : a);
    }
  } }, { key: "_drawInvertedXYLines", value: function(e) {
    var t = e.xCount, i = this.w;
    if (i.config.grid.xaxis.lines.show || i.config.xaxis.axisTicks.show) for (var a, s = i.globals.padHorizontal, r = i.globals.gridHeight, o = 0; o < t + 1; o++)
      i.config.grid.xaxis.lines.show && this._drawGridLine({ i: o, xCount: t + 1, x1: s, y1: 0, x2: a, y2: r, parent: this.elgridLinesV }), new Wt(this.ctx).drawXaxisTicks(s, 0, i.globals.dom.elGraphical), a = s += i.globals.gridWidth / t;
    if (i.config.grid.yaxis.lines.show) for (var l = 0, h = 0, c = i.globals.gridWidth, d = 0; d < i.globals.dataPoints + 1; d++) this._drawGridLine({ i: d, xCount: i.globals.dataPoints + 1, x1: 0, y1: l, x2: c, y2: h, parent: this.elgridLinesH }), h = l += i.globals.gridHeight / i.globals.dataPoints;
  } }, { key: "renderGrid", value: function() {
    var e = this.w, t = e.globals, i = new X(this.ctx);
    this.elg = i.group({ class: "apexcharts-grid" }), this.elgridLinesH = i.group({ class: "apexcharts-gridlines-horizontal" }), this.elgridLinesV = i.group({ class: "apexcharts-gridlines-vertical" }), this.elGridBorders = i.group({ class: "apexcharts-grid-borders" }), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), e.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide(), this.elGridBorders.hide());
    for (var a = 0; a < t.seriesYAxisMap.length && t.ignoreYAxisIndexes.includes(a); ) a++;
    a === t.seriesYAxisMap.length && (a = 0);
    var s, r = t.yAxisScale[a].result.length - 1;
    if (!t.isBarHorizontal || this.isRangeBar) {
      var o, l, h;
      s = this.xaxisLabels.length, this.isRangeBar && (r = t.labels.length, e.config.xaxis.tickAmount && e.config.xaxis.labels.formatter && (s = e.config.xaxis.tickAmount), ((o = t.yAxisScale) === null || o === void 0 || (l = o[a]) === null || l === void 0 || (h = l.result) === null || h === void 0 ? void 0 : h.length) > 0 && e.config.xaxis.type !== "datetime" && (s = t.yAxisScale[a].result.length - 1)), this._drawXYLines({ xCount: s, tickAmount: r });
    } else s = r, r = t.xTickAmount, this._drawInvertedXYLines({ xCount: s, tickAmount: r });
    return this.drawGridBands(s, r), { el: this.elg, elGridBorders: this.elGridBorders, xAxisTickWidth: t.gridWidth / s };
  } }, { key: "drawGridBands", value: function(e, t) {
    var i, a, s = this, r = this.w;
    if (((i = r.config.grid.row.colors) === null || i === void 0 ? void 0 : i.length) > 0 && (function(p, f, x, b, m, y) {
      for (var w = 0, v = 0; w < f; w++, v++) v >= r.config.grid[p].colors.length && (v = 0), s._drawGridBandRect({ c: v, x1: x, y1: b, x2: m, y2: y, type: p }), b += r.globals.gridHeight / t;
    })("row", t, 0, 0, r.globals.gridWidth, r.globals.gridHeight / t), ((a = r.config.grid.column.colors) === null || a === void 0 ? void 0 : a.length) > 0) {
      var o = r.globals.isBarHorizontal || r.config.xaxis.tickPlacement !== "on" || r.config.xaxis.type !== "category" && !r.config.xaxis.convertedCatToNumeric ? e : e - 1;
      r.globals.isXNumeric && (o = r.globals.xAxisScale.result.length - 1);
      for (var l = r.globals.padHorizontal, h = r.globals.padHorizontal + r.globals.gridWidth / o, c = r.globals.gridHeight, d = 0, u = 0; d < e; d++, u++) {
        var g;
        u >= r.config.grid.column.colors.length && (u = 0), r.config.xaxis.type === "datetime" && (l = this.xaxisLabels[d].position, h = (((g = this.xaxisLabels[d + 1]) === null || g === void 0 ? void 0 : g.position) || r.globals.gridWidth) - this.xaxisLabels[d].position), this._drawGridBandRect({ c: u, x1: l, y1: 0, x2: h, y2: c, type: "column" }), l += r.globals.gridWidth / o;
      }
    }
  } }]), n;
})(), ur = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w, this.coreUtils = new Le(this.ctx);
  }
  return $(n, [{ key: "niceScale", value: function(e, t) {
    var i, a, s, r, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, l = 1e-11, h = this.w, c = h.globals;
    c.isBarHorizontal ? (i = h.config.xaxis, a = Math.max((c.svgWidth - 100) / 25, 2)) : (i = h.config.yaxis[o], a = Math.max((c.svgHeight - 100) / 15, 2)), L.isNumber(a) || (a = 10), s = i.min !== void 0 && i.min !== null, r = i.max !== void 0 && i.min !== null;
    var d = i.stepSize !== void 0 && i.stepSize !== null, u = i.tickAmount !== void 0 && i.tickAmount !== null, g = u ? i.tickAmount : c.niceScaleDefaultTicks[Math.min(Math.round(a / 2), c.niceScaleDefaultTicks.length - 1)];
    if (c.isMultipleYAxis && !u && c.multiAxisTickAmount > 0 && (g = c.multiAxisTickAmount, u = !0), g = g === "dataPoints" ? c.dataPoints - 1 : Math.abs(Math.round(g)), (e === Number.MIN_VALUE && t === 0 || !L.isNumber(e) && !L.isNumber(t) || e === Number.MIN_VALUE && t === -Number.MAX_VALUE) && (e = L.isNumber(i.min) ? i.min : 0, t = L.isNumber(i.max) ? i.max : e + g, c.allSeriesCollapsed = !1), e > t) {
      console.warn("axis.min cannot be greater than axis.max: swapping min and max");
      var p = t;
      t = e, e = p;
    } else e === t && (e = e === 0 ? 0 : e - 1, t = t === 0 ? 2 : t + 1);
    var f = [];
    g < 1 && (g = 1);
    var x = g, b = Math.abs(t - e);
    !s && e > 0 && e / b < 0.15 && (e = 0, s = !0), !r && t < 0 && -t / b < 0.15 && (t = 0, r = !0);
    var m = (b = Math.abs(t - e)) / x, y = m, w = Math.floor(Math.log10(y)), v = Math.pow(10, w), C = Math.ceil(y / v);
    if (m = y = (C = c.niceScaleAllowedMagMsd[c.yValueDecimal === 0 ? 0 : 1][C]) * v, c.isBarHorizontal && i.stepSize && i.type !== "datetime" ? (m = i.stepSize, d = !0) : d && (m = i.stepSize), d && i.forceNiceScale) {
      var k = Math.floor(Math.log10(m));
      m *= Math.pow(10, w - k);
    }
    if (s && r) {
      var A = b / x;
      if (u) if (d) if (L.mod(b, m) != 0) {
        var S = L.getGCD(m, A);
        m = A / S < 10 ? S : A;
      } else L.mod(m, A) == 0 ? m = A : (A = m, u = !1);
      else m = A;
      else if (d) L.mod(b, m) == 0 ? A = m : m = A;
      else if (L.mod(b, m) == 0) A = m;
      else {
        A = b / (x = Math.ceil(b / m));
        var P = L.getGCD(b, m);
        b / P < a && (A = P), m = A;
      }
      x = Math.round(b / m);
    } else {
      if (s || r) {
        if (r) if (u) e = t - m * x;
        else {
          var T = e;
          e = m * Math.floor(e / m), Math.abs(t - e) / L.getGCD(b, m) > a && (e = t - m * g, e += m * Math.floor((T - e) / m));
        }
        else if (s) if (u) t = e + m * x;
        else {
          var I = t;
          t = m * Math.ceil(t / m), Math.abs(t - e) / L.getGCD(b, m) > a && (t = e + m * g, t += m * Math.ceil((I - t) / m));
        }
      } else if (c.isMultipleYAxis && u) {
        var R = m * Math.floor(e / m), z = R + m * x;
        z < t && (m *= 2), z = t, t = (e = R) + m * x, b = Math.abs(t - e), e > 0 && e < Math.abs(z - t) && (e = 0, t = m * x), t < 0 && -t < Math.abs(R - e) && (t = 0, e = -m * x);
      } else e = m * Math.floor(e / m), t = m * Math.ceil(t / m);
      b = Math.abs(t - e), m = L.getGCD(b, m), x = Math.round(b / m);
    }
    if (u || s || r || (x = Math.ceil((b - l) / (m + l))) > 16 && L.getPrimeFactors(x).length < 2 && x++, !u && i.forceNiceScale && c.yValueDecimal === 0 && x > b && (x = b, m = Math.round(b / x)), x > a && (!u && !d || i.forceNiceScale)) {
      var Y = L.getPrimeFactors(x), N = Y.length - 1, H = x;
      e: for (var U = 0; U < N; U++) for (var Q = 0; Q <= N - U; Q++) {
        for (var O = Math.min(Q + U, N), _ = H, Z = 1, ee = Q; ee <= O; ee++) Z *= Y[ee];
        if ((_ /= Z) < a) {
          H = _;
          break e;
        }
      }
      m = H === x ? b : b / H, x = Math.round(b / m);
    }
    c.isMultipleYAxis && c.multiAxisTickAmount == 0 && c.ignoreYAxisIndexes.indexOf(o) < 0 && (c.multiAxisTickAmount = x);
    var W = e - m, se = m * l;
    do
      W += m, f.push(L.stripNumber(W, 7));
    while (t - W > se);
    return { result: f, niceMin: f[0], niceMax: f[f.length - 1] };
  } }, { key: "linearScale", value: function(e, t) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 10, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0, r = Math.abs(t - e), o = [];
    if (e === t) return { result: o = [e], niceMin: o[0], niceMax: o[o.length - 1] };
    (i = this._adjustTicksForSmallRange(i, a, r)) === "dataPoints" && (i = this.w.globals.dataPoints - 1), s || (s = r / i), s = Math.round(100 * (s + Number.EPSILON)) / 100, i === Number.MAX_VALUE && (i = 5, s = 1);
    for (var l = e; i >= 0; ) o.push(l), l = L.preciseAddition(l, s), i -= 1;
    return { result: o, niceMin: o[0], niceMax: o[o.length - 1] };
  } }, { key: "logarithmicScaleNice", value: function(e, t, i) {
    t <= 0 && (t = Math.max(e, i)), e <= 0 && (e = Math.min(t, i));
    for (var a = [], s = Math.ceil(Math.log(t) / Math.log(i) + 1), r = Math.floor(Math.log(e) / Math.log(i)); r < s; r++) a.push(Math.pow(i, r));
    return { result: a, niceMin: a[0], niceMax: a[a.length - 1] };
  } }, { key: "logarithmicScale", value: function(e, t, i) {
    t <= 0 && (t = Math.max(e, i)), e <= 0 && (e = Math.min(t, i));
    for (var a = [], s = Math.log(t) / Math.log(i), r = Math.log(e) / Math.log(i), o = s - r, l = Math.round(o), h = o / l, c = 0, d = r; c < l; c++, d += h) a.push(Math.pow(i, d));
    return a.push(Math.pow(i, s)), { result: a, niceMin: e, niceMax: t };
  } }, { key: "_adjustTicksForSmallRange", value: function(e, t, i) {
    var a = e;
    if (t !== void 0 && this.w.config.yaxis[t].labels.formatter && this.w.config.yaxis[t].tickAmount === void 0) {
      var s = Number(this.w.config.yaxis[t].labels.formatter(1));
      L.isNumber(s) && this.w.globals.yValueDecimal === 0 && (a = Math.ceil(i));
    }
    return a < e ? a : e;
  } }, { key: "setYScaleForIndex", value: function(e, t, i) {
    var a = this.w.globals, s = this.w.config, r = a.isBarHorizontal ? s.xaxis : s.yaxis[e];
    a.yAxisScale[e] === void 0 && (a.yAxisScale[e] = []);
    var o = Math.abs(i - t);
    r.logarithmic && o <= 5 && (a.invalidLogScale = !0), r.logarithmic && o > 5 ? (a.allSeriesCollapsed = !1, a.yAxisScale[e] = r.forceNiceScale ? this.logarithmicScaleNice(t, i, r.logBase) : this.logarithmicScale(t, i, r.logBase)) : i !== -Number.MAX_VALUE && L.isNumber(i) && t !== Number.MAX_VALUE && L.isNumber(t) ? (a.allSeriesCollapsed = !1, a.yAxisScale[e] = this.niceScale(t, i, e)) : a.yAxisScale[e] = this.niceScale(Number.MIN_VALUE, 0, e);
  } }, { key: "setXScale", value: function(e, t) {
    var i = this.w, a = i.globals;
    if (t !== -Number.MAX_VALUE && L.isNumber(t)) {
      var s = a.xTickAmount;
      a.xAxisScale = this.linearScale(e, t, s, 0, i.config.xaxis.stepSize);
    } else a.xAxisScale = this.linearScale(0, 10, 10);
    return a.xAxisScale;
  } }, { key: "scaleMultipleYAxes", value: function() {
    var e = this, t = this.w.config, i = this.w.globals;
    this.coreUtils.setSeriesYAxisMappings();
    var a = i.seriesYAxisMap, s = i.minYArr, r = i.maxYArr;
    i.allSeriesCollapsed = !0, i.barGroups = [], a.forEach((function(o, l) {
      var h = [];
      o.forEach((function(c) {
        var d, u = (d = t.series[c]) === null || d === void 0 ? void 0 : d.group;
        h.indexOf(u) < 0 && h.push(u);
      })), o.length > 0 ? (function() {
        var c, d, u = Number.MAX_VALUE, g = -Number.MAX_VALUE, p = u, f = g;
        if (t.chart.stacked) (function() {
          var m = new Array(i.dataPoints).fill(0), y = [], w = [], v = [];
          h.forEach((function() {
            y.push(m.map((function() {
              return Number.MIN_VALUE;
            }))), w.push(m.map((function() {
              return Number.MIN_VALUE;
            }))), v.push(m.map((function() {
              return Number.MIN_VALUE;
            })));
          }));
          for (var C = function(A) {
            !c && t.series[o[A]].type && (c = t.series[o[A]].type);
            var S = o[A];
            d = t.series[S].group ? t.series[S].group : "axis-".concat(l), !(i.collapsedSeriesIndices.indexOf(S) < 0 && i.ancillaryCollapsedSeriesIndices.indexOf(S) < 0) || (i.allSeriesCollapsed = !1, h.forEach((function(P, T) {
              if (t.series[S].group === P) for (var I = 0; I < i.series[S].length; I++) {
                var R = i.series[S][I];
                R >= 0 ? w[T][I] += R : v[T][I] += R, y[T][I] += R, p = Math.min(p, R), f = Math.max(f, R);
              }
            }))), c !== "bar" && c !== "column" || i.barGroups.push(d);
          }, k = 0; k < o.length; k++) C(k);
          c || (c = t.chart.type), c === "bar" || c === "column" ? h.forEach((function(A, S) {
            u = Math.min(u, Math.min.apply(null, v[S])), g = Math.max(g, Math.max.apply(null, w[S]));
          })) : (h.forEach((function(A, S) {
            p = Math.min(p, Math.min.apply(null, y[S])), f = Math.max(f, Math.max.apply(null, y[S]));
          })), u = p, g = f), u === Number.MIN_VALUE && g === Number.MIN_VALUE && (g = -Number.MAX_VALUE);
        })();
        else for (var x = 0; x < o.length; x++) {
          var b = o[x];
          u = Math.min(u, s[b]), g = Math.max(g, r[b]), !(i.collapsedSeriesIndices.indexOf(b) < 0 && i.ancillaryCollapsedSeriesIndices.indexOf(b) < 0) || (i.allSeriesCollapsed = !1);
        }
        t.yaxis[l].min !== void 0 && (u = typeof t.yaxis[l].min == "function" ? t.yaxis[l].min(u) : t.yaxis[l].min), t.yaxis[l].max !== void 0 && (g = typeof t.yaxis[l].max == "function" ? t.yaxis[l].max(g) : t.yaxis[l].max), i.barGroups = i.barGroups.filter((function(m, y, w) {
          return w.indexOf(m) === y;
        })), e.setYScaleForIndex(l, u, g), o.forEach((function(m) {
          s[m] = i.yAxisScale[l].niceMin, r[m] = i.yAxisScale[l].niceMax;
        }));
      })() : e.setYScaleForIndex(l, 0, -Number.MAX_VALUE);
    }));
  } }]), n;
})(), ra = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w, this.scales = new ur(e);
  }
  return $(n, [{ key: "init", value: function() {
    this.setYRange(), this.setXRange(), this.setZRange();
  } }, { key: "getMinYMaxY", value: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -Number.MAX_VALUE, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, s = this.w.config, r = this.w.globals, o = -Number.MAX_VALUE, l = Number.MIN_VALUE;
    a === null && (a = e + 1);
    var h = r.series, c = h, d = h;
    s.chart.type === "candlestick" ? (c = r.seriesCandleL, d = r.seriesCandleH) : s.chart.type === "boxPlot" ? (c = r.seriesCandleO, d = r.seriesCandleC) : r.isRangeData && (c = r.seriesRangeStart, d = r.seriesRangeEnd);
    var u = !1;
    if (r.seriesX.length >= a) {
      var g, p = (g = r.brushSource) === null || g === void 0 ? void 0 : g.w.config.chart.brush;
      (s.chart.zoom.enabled && s.chart.zoom.autoScaleYaxis || p != null && p.enabled && p != null && p.autoScaleYaxis) && (u = !0);
    }
    for (var f = e; f < a; f++) {
      r.dataPoints = Math.max(r.dataPoints, h[f].length);
      var x = s.series[f].type;
      r.categoryLabels.length && (r.dataPoints = r.categoryLabels.filter((function(S) {
        return S !== void 0;
      })).length), r.labels.length && s.xaxis.type !== "datetime" && r.series.reduce((function(S, P) {
        return S + P.length;
      }), 0) !== 0 && (r.dataPoints = Math.max(r.dataPoints, r.labels.length));
      var b = 0, m = h[f].length - 1;
      if (u) {
        if (s.xaxis.min) for (; b < m && r.seriesX[f][b] < s.xaxis.min; b++) ;
        if (s.xaxis.max) for (; m > b && r.seriesX[f][m] > s.xaxis.max; m--) ;
      }
      for (var y = b; y <= m && y < r.series[f].length; y++) {
        var w = h[f][y];
        if (w !== null && L.isNumber(w)) {
          var v, C, k, A;
          switch (((v = d[f]) === null || v === void 0 ? void 0 : v[y]) !== void 0 && (o = Math.max(o, d[f][y]), t = Math.min(t, d[f][y])), ((C = c[f]) === null || C === void 0 ? void 0 : C[y]) !== void 0 && (t = Math.min(t, c[f][y]), i = Math.max(i, c[f][y])), x) {
            case "candlestick":
              r.seriesCandleC[f][y] !== void 0 && (o = Math.max(o, r.seriesCandleH[f][y]), t = Math.min(t, r.seriesCandleL[f][y]));
              break;
            case "boxPlot":
              r.seriesCandleC[f][y] !== void 0 && (o = Math.max(o, r.seriesCandleC[f][y]), t = Math.min(t, r.seriesCandleO[f][y]));
          }
          x && x !== "candlestick" && x !== "boxPlot" && x !== "rangeArea" && x !== "rangeBar" && (o = Math.max(o, r.series[f][y]), t = Math.min(t, r.series[f][y])), r.seriesGoals[f] && r.seriesGoals[f][y] && Array.isArray(r.seriesGoals[f][y]) && r.seriesGoals[f][y].forEach((function(S) {
            o = Math.max(o, S.value), t = Math.min(t, S.value);
          })), i = o, w = L.noExponents(w), L.isFloat(w) && (r.yValueDecimal = Math.max(r.yValueDecimal, w.toString().split(".")[1].length)), l > ((k = c[f]) === null || k === void 0 ? void 0 : k[y]) && ((A = c[f]) === null || A === void 0 ? void 0 : A[y]) < 0 && (l = c[f][y]);
        } else r.hasNullValues = !0;
      }
      x !== "bar" && x !== "column" || (l < 0 && o < 0 && (o = 0, i = Math.max(i, 0)), l === Number.MIN_VALUE && (l = 0, t = Math.min(t, 0)));
    }
    return s.chart.type === "rangeBar" && r.seriesRangeStart.length && r.isBarHorizontal && (l = t), s.chart.type === "bar" && (l < 0 && o < 0 && (o = 0), l === Number.MIN_VALUE && (l = 0)), { minY: l, maxY: o, lowestY: t, highestY: i };
  } }, { key: "setYRange", value: function() {
    var e = this.w.globals, t = this.w.config;
    e.maxY = -Number.MAX_VALUE, e.minY = Number.MIN_VALUE;
    var i, a = Number.MAX_VALUE;
    if (e.isMultipleYAxis) {
      a = Number.MAX_VALUE;
      for (var s = 0; s < e.series.length; s++) i = this.getMinYMaxY(s), e.minYArr[s] = i.lowestY, e.maxYArr[s] = i.highestY, a = Math.min(a, i.lowestY);
    }
    return i = this.getMinYMaxY(0, a, null, e.series.length), t.chart.type === "bar" ? (e.minY = i.minY, e.maxY = i.maxY) : (e.minY = i.lowestY, e.maxY = i.highestY), a = i.lowestY, t.chart.stacked && this._setStackedMinMax(), t.chart.type === "line" || t.chart.type === "area" || t.chart.type === "scatter" || t.chart.type === "candlestick" || t.chart.type === "boxPlot" || t.chart.type === "rangeBar" && !e.isBarHorizontal ? e.minY === Number.MIN_VALUE && a !== -Number.MAX_VALUE && a !== e.maxY && (e.minY = a) : e.minY = e.minY !== Number.MIN_VALUE ? Math.min(i.minY, e.minY) : i.minY, t.yaxis.forEach((function(r, o) {
      r.max !== void 0 && (typeof r.max == "number" ? e.maxYArr[o] = r.max : typeof r.max == "function" && (e.maxYArr[o] = r.max(e.isMultipleYAxis ? e.maxYArr[o] : e.maxY)), e.maxY = e.maxYArr[o]), r.min !== void 0 && (typeof r.min == "number" ? e.minYArr[o] = r.min : typeof r.min == "function" && (e.minYArr[o] = r.min(e.isMultipleYAxis ? e.minYArr[o] === Number.MIN_VALUE ? 0 : e.minYArr[o] : e.minY)), e.minY = e.minYArr[o]);
    })), e.isBarHorizontal && ["min", "max"].forEach((function(r) {
      t.xaxis[r] !== void 0 && typeof t.xaxis[r] == "number" && (r === "min" ? e.minY = t.xaxis[r] : e.maxY = t.xaxis[r]);
    })), e.isMultipleYAxis ? (this.scales.scaleMultipleYAxes(), e.minY = a) : (this.scales.setYScaleForIndex(0, e.minY, e.maxY), e.minY = e.yAxisScale[0].niceMin, e.maxY = e.yAxisScale[0].niceMax, e.minYArr[0] = e.minY, e.maxYArr[0] = e.maxY), e.barGroups = [], e.lineGroups = [], e.areaGroups = [], t.series.forEach((function(r) {
      switch (r.type || t.chart.type) {
        case "bar":
        case "column":
          e.barGroups.push(r.group);
          break;
        case "line":
          e.lineGroups.push(r.group);
          break;
        case "area":
          e.areaGroups.push(r.group);
      }
    })), e.barGroups = e.barGroups.filter((function(r, o, l) {
      return l.indexOf(r) === o;
    })), e.lineGroups = e.lineGroups.filter((function(r, o, l) {
      return l.indexOf(r) === o;
    })), e.areaGroups = e.areaGroups.filter((function(r, o, l) {
      return l.indexOf(r) === o;
    })), { minY: e.minY, maxY: e.maxY, minYArr: e.minYArr, maxYArr: e.maxYArr, yAxisScale: e.yAxisScale };
  } }, { key: "setXRange", value: function() {
    var e = this.w.globals, t = this.w.config, i = t.xaxis.type === "numeric" || t.xaxis.type === "datetime" || t.xaxis.type === "category" && !e.noLabelsProvided || e.noLabelsProvided || e.isXNumeric;
    if (e.isXNumeric && (function() {
      for (var l = 0; l < e.series.length; l++) if (e.labels[l]) for (var h = 0; h < e.labels[l].length; h++) e.labels[l][h] !== null && L.isNumber(e.labels[l][h]) && (e.maxX = Math.max(e.maxX, e.labels[l][h]), e.initialMaxX = Math.max(e.maxX, e.labels[l][h]), e.minX = Math.min(e.minX, e.labels[l][h]), e.initialMinX = Math.min(e.minX, e.labels[l][h]));
    })(), e.noLabelsProvided && t.xaxis.categories.length === 0 && (e.maxX = e.labels[e.labels.length - 1], e.initialMaxX = e.labels[e.labels.length - 1], e.minX = 1, e.initialMinX = 1), e.isXNumeric || e.noLabelsProvided || e.dataFormatXNumeric) {
      var a = 10;
      if (t.xaxis.tickAmount === void 0) a = Math.round(e.svgWidth / 150), t.xaxis.type === "numeric" && e.dataPoints < 30 && (a = e.dataPoints - 1), a > e.dataPoints && e.dataPoints !== 0 && (a = e.dataPoints - 1);
      else if (t.xaxis.tickAmount === "dataPoints") {
        if (e.series.length > 1 && (a = e.series[e.maxValsInArrayIndex].length - 1), e.isXNumeric) {
          var s = Math.round(e.maxX - e.minX);
          s < 30 && (a = s - 1);
        }
      } else a = t.xaxis.tickAmount;
      if (e.xTickAmount = a, t.xaxis.max !== void 0 && typeof t.xaxis.max == "number" && (e.maxX = t.xaxis.max), t.xaxis.min !== void 0 && typeof t.xaxis.min == "number" && (e.minX = t.xaxis.min), t.xaxis.range !== void 0 && (e.minX = e.maxX - t.xaxis.range), e.minX !== Number.MAX_VALUE && e.maxX !== -Number.MAX_VALUE) if (t.xaxis.convertedCatToNumeric && !e.dataFormatXNumeric) {
        for (var r = [], o = e.minX - 1; o < e.maxX; o++) r.push(o + 1);
        e.xAxisScale = { result: r, niceMin: r[0], niceMax: r[r.length - 1] };
      } else e.xAxisScale = this.scales.setXScale(e.minX, e.maxX);
      else e.xAxisScale = this.scales.linearScale(0, a, a, 0, t.xaxis.stepSize), e.noLabelsProvided && e.labels.length > 0 && (e.xAxisScale = this.scales.linearScale(1, e.labels.length, a - 1, 0, t.xaxis.stepSize), e.seriesX = e.labels.slice());
      i && (e.labels = e.xAxisScale.result.slice());
    }
    return e.isBarHorizontal && e.labels.length && (e.xTickAmount = e.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), { minX: e.minX, maxX: e.maxX };
  } }, { key: "setZRange", value: function() {
    var e = this.w.globals;
    if (e.isDataXYZ) {
      for (var t = 0; t < e.series.length; t++) if (e.seriesZ[t] !== void 0) for (var i = 0; i < e.seriesZ[t].length; i++) e.seriesZ[t][i] !== null && L.isNumber(e.seriesZ[t][i]) && (e.maxZ = Math.max(e.maxZ, e.seriesZ[t][i]), e.minZ = Math.min(e.minZ, e.seriesZ[t][i]));
    }
  } }, { key: "_handleSingleDataPoint", value: function() {
    var e = this.w.globals, t = this.w.config;
    if (e.minX === e.maxX) {
      var i = new Ie(this.ctx);
      if (t.xaxis.type === "datetime") {
        var a = i.getDate(e.minX);
        t.xaxis.labels.datetimeUTC ? a.setUTCDate(a.getUTCDate() - 2) : a.setDate(a.getDate() - 2), e.minX = new Date(a).getTime();
        var s = i.getDate(e.maxX);
        t.xaxis.labels.datetimeUTC ? s.setUTCDate(s.getUTCDate() + 2) : s.setDate(s.getDate() + 2), e.maxX = new Date(s).getTime();
      } else (t.xaxis.type === "numeric" || t.xaxis.type === "category" && !e.noLabelsProvided) && (e.minX = e.minX - 2, e.initialMinX = e.minX, e.maxX = e.maxX + 2, e.initialMaxX = e.maxX);
    }
  } }, { key: "_getMinXDiff", value: function() {
    var e = this.w.globals;
    e.isXNumeric && e.seriesX.forEach((function(t, i) {
      if (t.length) {
        t.length === 1 && t.push(e.seriesX[e.maxValsInArrayIndex][e.seriesX[e.maxValsInArrayIndex].length - 1]);
        var a = t.slice();
        a.sort((function(s, r) {
          return s - r;
        })), a.forEach((function(s, r) {
          if (r > 0) {
            var o = s - a[r - 1];
            o > 0 && (e.minXDiff = Math.min(o, e.minXDiff));
          }
        })), e.dataPoints !== 1 && e.minXDiff !== Number.MAX_VALUE || (e.minXDiff = 0.5);
      }
    }));
  } }, { key: "_setStackedMinMax", value: function() {
    var e = this, t = this.w.globals;
    if (t.series.length) {
      var i = t.seriesGroups;
      i.length || (i = [this.w.globals.seriesNames.map((function(r) {
        return r;
      }))]);
      var a = {}, s = {};
      i.forEach((function(r) {
        a[r] = [], s[r] = [], e.w.config.series.map((function(o, l) {
          return r.indexOf(t.seriesNames[l]) > -1 ? l : null;
        })).filter((function(o) {
          return o !== null;
        })).forEach((function(o) {
          for (var l = 0; l < t.series[t.maxValsInArrayIndex].length; l++) {
            var h, c, d, u;
            a[r][l] === void 0 && (a[r][l] = 0, s[r][l] = 0), (e.w.config.chart.stacked && !t.comboCharts || e.w.config.chart.stacked && t.comboCharts && (!e.w.config.chart.stackOnlyBar || ((h = e.w.config.series) === null || h === void 0 || (c = h[o]) === null || c === void 0 ? void 0 : c.type) === "bar" || ((d = e.w.config.series) === null || d === void 0 || (u = d[o]) === null || u === void 0 ? void 0 : u.type) === "column")) && t.series[o][l] !== null && L.isNumber(t.series[o][l]) && (t.series[o][l] > 0 ? a[r][l] += parseFloat(t.series[o][l]) + 1e-4 : s[r][l] += parseFloat(t.series[o][l]));
          }
        }));
      })), Object.entries(a).forEach((function(r) {
        var o = zs(r, 1)[0];
        a[o].forEach((function(l, h) {
          t.maxY = Math.max(t.maxY, a[o][h]), t.minY = Math.min(t.minY, s[o][h]);
        }));
      }));
    }
  } }]), n;
})(), La = (function() {
  function n(e, t) {
    q(this, n), this.ctx = e, this.elgrid = t, this.w = e.w;
    var i = this.w;
    this.xaxisFontSize = i.config.xaxis.labels.style.fontSize, this.axisFontFamily = i.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = i.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = i.config.chart.type === "bar" && i.config.plotOptions.bar.horizontal, this.xAxisoffX = i.config.xaxis.position === "bottom" ? i.globals.gridHeight : 0, this.drawnLabels = [], this.axesUtils = new st(e);
  }
  return $(n, [{ key: "drawYaxis", value: function(e) {
    var t = this.w, i = new X(this.ctx), a = t.config.yaxis[e].labels.style, s = a.fontSize, r = a.fontFamily, o = a.fontWeight, l = i.group({ class: "apexcharts-yaxis", rel: e, transform: "translate(".concat(t.globals.translateYAxisX[e], ", 0)") });
    if (this.axesUtils.isYAxisHidden(e)) return l;
    var h = i.group({ class: "apexcharts-yaxis-texts-g" });
    l.add(h);
    var c = t.globals.yAxisScale[e].result.length - 1, d = t.globals.gridHeight / c, u = t.globals.yLabelFormatters[e], g = this.axesUtils.checkForReversedLabels(e, t.globals.yAxisScale[e].result.slice());
    if (t.config.yaxis[e].labels.show) {
      var p = t.globals.translateY + t.config.yaxis[e].labels.offsetY;
      t.globals.isBarHorizontal ? p = 0 : t.config.chart.type === "heatmap" && (p -= d / 2), p += parseInt(s, 10) / 3;
      for (var f = c; f >= 0; f--) {
        var x = u(g[f], f, t), b = t.config.yaxis[e].labels.padding;
        t.config.yaxis[e].opposite && t.config.yaxis.length !== 0 && (b *= -1);
        var m = this.getTextAnchor(t.config.yaxis[e].labels.align, t.config.yaxis[e].opposite), y = this.axesUtils.getYAxisForeColor(a.colors, e), w = Array.isArray(y) ? y[f] : y, v = L.listToArray(t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(e, "'] .apexcharts-yaxis-label tspan"))).map((function(k) {
          return k.textContent;
        })), C = i.drawText({ x: b, y: p, text: v.includes(x) && !t.config.yaxis[e].labels.showDuplicates ? "" : x, textAnchor: m, fontSize: s, fontFamily: r, fontWeight: o, maxWidth: t.config.yaxis[e].labels.maxWidth, foreColor: w, isPlainText: !1, cssClass: "apexcharts-yaxis-label ".concat(a.cssClass) });
        h.add(C), this.addTooltip(C, x), t.config.yaxis[e].labels.rotate !== 0 && this.rotateLabel(i, C, firstLabel, t.config.yaxis[e].labels.rotate), p += d;
      }
    }
    return this.addYAxisTitle(i, l, e), this.addAxisBorder(i, l, e, c, d), l;
  } }, { key: "getTextAnchor", value: function(e, t) {
    return e === "left" ? "start" : e === "center" ? "middle" : e === "right" ? "end" : t ? "start" : "end";
  } }, { key: "addTooltip", value: function(e, t) {
    var i = document.createElementNS(this.w.globals.SVGNS, "title");
    i.textContent = Array.isArray(t) ? t.join(" ") : t, e.node.appendChild(i);
  } }, { key: "rotateLabel", value: function(e, t, i, a) {
    var s = e.rotateAroundCenter(i.node), r = e.rotateAroundCenter(t.node);
    t.node.setAttribute("transform", "rotate(".concat(a, " ").concat(s.x, " ").concat(r.y, ")"));
  } }, { key: "addYAxisTitle", value: function(e, t, i) {
    var a = this.w;
    if (a.config.yaxis[i].title.text !== void 0) {
      var s = e.group({ class: "apexcharts-yaxis-title" }), r = a.config.yaxis[i].opposite ? a.globals.translateYAxisX[i] : 0, o = e.drawText({ x: r, y: a.globals.gridHeight / 2 + a.globals.translateY + a.config.yaxis[i].title.offsetY, text: a.config.yaxis[i].title.text, textAnchor: "end", foreColor: a.config.yaxis[i].title.style.color, fontSize: a.config.yaxis[i].title.style.fontSize, fontWeight: a.config.yaxis[i].title.style.fontWeight, fontFamily: a.config.yaxis[i].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text ".concat(a.config.yaxis[i].title.style.cssClass) });
      s.add(o), t.add(s);
    }
  } }, { key: "addAxisBorder", value: function(e, t, i, a, s) {
    var r = this.w, o = r.config.yaxis[i].axisBorder, l = 31 + o.offsetX;
    if (r.config.yaxis[i].opposite && (l = -31 - o.offsetX), o.show) {
      var h = e.drawLine(l, r.globals.translateY + o.offsetY - 2, l, r.globals.gridHeight + r.globals.translateY + o.offsetY + 2, o.color, 0, o.width);
      t.add(h);
    }
    r.config.yaxis[i].axisTicks.show && this.axesUtils.drawYAxisTicks(l, a, o, r.config.yaxis[i].axisTicks, i, s, t);
  } }, { key: "drawYaxisInversed", value: function(e) {
    var t = this.w, i = new X(this.ctx), a = i.group({ class: "apexcharts-xaxis apexcharts-yaxis-inversed" }), s = i.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(t.globals.translateXAxisX, ", ").concat(t.globals.translateXAxisY, ")") });
    a.add(s);
    var r = t.globals.yAxisScale[e].result.length - 1, o = t.globals.gridWidth / r + 0.1, l = o + t.config.xaxis.labels.offsetX, h = t.globals.xLabelFormatter, c = this.axesUtils.checkForReversedLabels(e, t.globals.yAxisScale[e].result.slice()), d = t.globals.timescaleLabels;
    if (d.length > 0 && (this.xaxisLabels = d.slice(), r = (c = d.slice()).length), t.config.xaxis.labels.show) for (var u = d.length ? 0 : r; d.length ? u < d.length : u >= 0; d.length ? u++ : u--) {
      var g = h(c[u], u, t), p = t.globals.gridWidth + t.globals.padHorizontal - (l - o + t.config.xaxis.labels.offsetX);
      if (d.length) {
        var f = this.axesUtils.getLabel(c, d, p, u, this.drawnLabels, this.xaxisFontSize);
        p = f.x, g = f.text, this.drawnLabels.push(f.text), u === 0 && t.globals.skipFirstTimelinelabel && (g = ""), u === c.length - 1 && t.globals.skipLastTimelinelabel && (g = "");
      }
      var x = i.drawText({ x: p, y: this.xAxisoffX + t.config.xaxis.labels.offsetY + 30 - (t.config.xaxis.position === "top" ? t.globals.xAxisHeight + t.config.xaxis.axisTicks.height - 2 : 0), text: g, textAnchor: "middle", foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[e] : this.xaxisForeColors, fontSize: this.xaxisFontSize, fontFamily: this.xaxisFontFamily, fontWeight: t.config.xaxis.labels.style.fontWeight, isPlainText: !1, cssClass: "apexcharts-xaxis-label ".concat(t.config.xaxis.labels.style.cssClass) });
      s.add(x), x.tspan(g), this.addTooltip(x, g), l += o;
    }
    return this.inversedYAxisTitleText(a), this.inversedYAxisBorder(a), a;
  } }, { key: "inversedYAxisBorder", value: function(e) {
    var t = this.w, i = new X(this.ctx), a = t.config.xaxis.axisBorder;
    if (a.show) {
      var s = 0;
      t.config.chart.type === "bar" && t.globals.isXNumeric && (s -= 15);
      var r = i.drawLine(t.globals.padHorizontal + s + a.offsetX, this.xAxisoffX, t.globals.gridWidth, this.xAxisoffX, a.color, 0, a.height);
      this.elgrid && this.elgrid.elGridBorders && t.config.grid.show ? this.elgrid.elGridBorders.add(r) : e.add(r);
    }
  } }, { key: "inversedYAxisTitleText", value: function(e) {
    var t = this.w, i = new X(this.ctx);
    if (t.config.xaxis.title.text !== void 0) {
      var a = i.group({ class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed" }), s = i.drawText({ x: t.globals.gridWidth / 2 + t.config.xaxis.title.offsetX, y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(t.config.xaxis.title.style.fontSize) + t.config.xaxis.title.offsetY + 20, text: t.config.xaxis.title.text, textAnchor: "middle", fontSize: t.config.xaxis.title.style.fontSize, fontFamily: t.config.xaxis.title.style.fontFamily, fontWeight: t.config.xaxis.title.style.fontWeight, foreColor: t.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text ".concat(t.config.xaxis.title.style.cssClass) });
      a.add(s), e.add(a);
    }
  } }, { key: "yAxisTitleRotate", value: function(e, t) {
    var i = this.w, a = new X(this.ctx), s = i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(e, "'] .apexcharts-yaxis-texts-g")), r = s ? s.getBoundingClientRect() : { width: 0, height: 0 }, o = i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(e, "'] .apexcharts-yaxis-title text")), l = o ? o.getBoundingClientRect() : { width: 0, height: 0 };
    if (o) {
      var h = this.xPaddingForYAxisTitle(e, r, l, t);
      o.setAttribute("x", h.xPos - (t ? 10 : 0));
      var c = a.rotateAroundCenter(o);
      o.setAttribute("transform", "rotate(".concat(t ? -1 * i.config.yaxis[e].title.rotate : i.config.yaxis[e].title.rotate, " ").concat(c.x, " ").concat(c.y, ")"));
    }
  } }, { key: "xPaddingForYAxisTitle", value: function(e, t, i, a) {
    var s = this.w, r = 0, o = 10;
    return s.config.yaxis[e].title.text === void 0 || e < 0 ? { xPos: r, padd: 0 } : (a ? r = t.width + s.config.yaxis[e].title.offsetX + i.width / 2 + o / 2 : (r = -1 * t.width + s.config.yaxis[e].title.offsetX + o / 2 + i.width / 2, s.globals.isBarHorizontal && (o = 25, r = -1 * t.width - s.config.yaxis[e].title.offsetX - o)), { xPos: r, padd: o });
  } }, { key: "setYAxisXPosition", value: function(e, t) {
    var i = this.w, a = 0, s = 0, r = 18, o = 1;
    i.config.yaxis.length > 1 && (this.multipleYs = !0), i.config.yaxis.forEach((function(l, h) {
      var c = i.globals.ignoreYAxisIndexes.includes(h) || !l.show || l.floating || e[h].width === 0, d = e[h].width + t[h].width;
      l.opposite ? i.globals.isBarHorizontal ? (s = i.globals.gridWidth + i.globals.translateX - 1, i.globals.translateYAxisX[h] = s - l.labels.offsetX) : (s = i.globals.gridWidth + i.globals.translateX + o, c || (o += d + 20), i.globals.translateYAxisX[h] = s - l.labels.offsetX + 20) : (a = i.globals.translateX - r, c || (r += d + 20), i.globals.translateYAxisX[h] = a + l.labels.offsetX);
    }));
  } }, { key: "setYAxisTextAlignments", value: function() {
    var e = this.w;
    L.listToArray(e.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis")).forEach((function(t, i) {
      var a = e.config.yaxis[i];
      if (a && !a.floating && a.labels.align !== void 0) {
        var s = e.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i, "'] .apexcharts-yaxis-texts-g")), r = L.listToArray(e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i, "'] .apexcharts-yaxis-label"))), o = s.getBoundingClientRect();
        r.forEach((function(l) {
          l.setAttribute("text-anchor", a.labels.align);
        })), a.labels.align !== "left" || a.opposite ? a.labels.align === "center" ? s.setAttribute("transform", "translate(".concat(o.width / 2 * (a.opposite ? 1 : -1), ", 0)")) : a.labels.align === "right" && a.opposite && s.setAttribute("transform", "translate(".concat(o.width, ", 0)")) : s.setAttribute("transform", "translate(-".concat(o.width, ", 0)"));
      }
    }));
  } }]), n;
})(), Wo = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w, this.documentEvent = L.bind(this.documentEvent, this);
  }
  return $(n, [{ key: "addEventListener", value: function(e, t) {
    var i = this.w;
    i.globals.events.hasOwnProperty(e) ? i.globals.events[e].push(t) : i.globals.events[e] = [t];
  } }, { key: "removeEventListener", value: function(e, t) {
    var i = this.w;
    if (i.globals.events.hasOwnProperty(e)) {
      var a = i.globals.events[e].indexOf(t);
      a !== -1 && i.globals.events[e].splice(a, 1);
    }
  } }, { key: "fireEvent", value: function(e, t) {
    var i = this.w;
    if (i.globals.events.hasOwnProperty(e)) {
      t && t.length || (t = []);
      for (var a = i.globals.events[e], s = a.length, r = 0; r < s; r++) a[r].apply(null, t);
    }
  } }, { key: "setupEventHandlers", value: function() {
    var e = this, t = this.w, i = this.ctx, a = t.globals.dom.baseEl.querySelector(t.globals.chartClass);
    this.ctx.eventList.forEach((function(s) {
      a.addEventListener(s, (function(r) {
        var o = r.target.getAttribute("i") === null && t.globals.capturedSeriesIndex !== -1 ? t.globals.capturedSeriesIndex : r.target.getAttribute("i"), l = r.target.getAttribute("j") === null && t.globals.capturedDataPointIndex !== -1 ? t.globals.capturedDataPointIndex : r.target.getAttribute("j"), h = Object.assign({}, t, { seriesIndex: t.globals.axisCharts ? o : 0, dataPointIndex: l });
        r.type === "mousemove" || r.type === "touchmove" ? typeof t.config.chart.events.mouseMove == "function" && t.config.chart.events.mouseMove(r, i, h) : r.type === "mouseleave" || r.type === "touchleave" ? typeof t.config.chart.events.mouseLeave == "function" && t.config.chart.events.mouseLeave(r, i, h) : (r.type === "mouseup" && r.which === 1 || r.type === "touchend") && (typeof t.config.chart.events.click == "function" && t.config.chart.events.click(r, i, h), i.ctx.events.fireEvent("click", [r, i, h]));
      }), { capture: !1, passive: !0 });
    })), this.ctx.eventList.forEach((function(s) {
      t.globals.dom.baseEl.addEventListener(s, e.documentEvent, { passive: !0 });
    })), this.ctx.core.setupBrushHandler();
  } }, { key: "documentEvent", value: function(e) {
    var t = this.w, i = e.target.className;
    if (e.type === "click") {
      var a = t.globals.dom.baseEl.querySelector(".apexcharts-menu");
      a && a.classList.contains("apexcharts-menu-open") && i !== "apexcharts-menu-icon" && a.classList.remove("apexcharts-menu-open");
    }
    t.globals.clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX, t.globals.clientY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;
  } }]), n;
})(), jo = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
  }
  return $(n, [{ key: "setCurrentLocaleValues", value: function(e) {
    var t = this.w.config.chart.locales;
    window.Apex.chart && window.Apex.chart.locales && window.Apex.chart.locales.length > 0 && (t = this.w.config.chart.locales.concat(window.Apex.chart.locales));
    var i = t.filter((function(s) {
      return s.name === e;
    }))[0];
    if (!i) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
    var a = L.extend(lr, i);
    this.w.globals.locale = a.options;
  } }]), n;
})(), Bo = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
  }
  return $(n, [{ key: "drawAxis", value: function(e, t) {
    var i, a, s = this, r = this.w.globals, o = this.w.config, l = new Wt(this.ctx, t), h = new La(this.ctx, t);
    r.axisCharts && e !== "radar" && (r.isBarHorizontal ? (a = h.drawYaxisInversed(0), i = l.drawXaxisInversed(0), r.dom.elGraphical.add(i), r.dom.elGraphical.add(a)) : (i = l.drawXaxis(), r.dom.elGraphical.add(i), o.yaxis.map((function(c, d) {
      if (r.ignoreYAxisIndexes.indexOf(d) === -1 && (a = h.drawYaxis(d), r.dom.Paper.add(a), s.w.config.grid.position === "back")) {
        var u = r.dom.Paper.children()[1];
        u.remove(), r.dom.Paper.add(u);
      }
    }))));
  } }]), n;
})(), na = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
  }
  return $(n, [{ key: "drawXCrosshairs", value: function() {
    var e = this.w, t = new X(this.ctx), i = new Re(this.ctx), a = e.config.xaxis.crosshairs.fill.gradient, s = e.config.xaxis.crosshairs.dropShadow, r = e.config.xaxis.crosshairs.fill.type, o = a.colorFrom, l = a.colorTo, h = a.opacityFrom, c = a.opacityTo, d = a.stops, u = s.enabled, g = s.left, p = s.top, f = s.blur, x = s.color, b = s.opacity, m = e.config.xaxis.crosshairs.fill.color;
    if (e.config.xaxis.crosshairs.show) {
      r === "gradient" && (m = t.drawGradient("vertical", o, l, h, c, null, d, null));
      var y = t.drawRect();
      e.config.xaxis.crosshairs.width === 1 && (y = t.drawLine());
      var w = e.globals.gridHeight;
      (!L.isNumber(w) || w < 0) && (w = 0);
      var v = e.config.xaxis.crosshairs.width;
      (!L.isNumber(v) || v < 0) && (v = 0), y.attr({ class: "apexcharts-xcrosshairs", x: 0, y: 0, y2: w, width: v, height: w, fill: m, filter: "none", "fill-opacity": e.config.xaxis.crosshairs.opacity, stroke: e.config.xaxis.crosshairs.stroke.color, "stroke-width": e.config.xaxis.crosshairs.stroke.width, "stroke-dasharray": e.config.xaxis.crosshairs.stroke.dashArray }), u && (y = i.dropShadow(y, { left: g, top: p, blur: f, color: x, opacity: b })), e.globals.dom.elGraphical.add(y);
    }
  } }, { key: "drawYCrosshairs", value: function() {
    var e = this.w, t = new X(this.ctx), i = e.config.yaxis[0].crosshairs, a = e.globals.barPadForNumericAxis;
    if (e.config.yaxis[0].crosshairs.show) {
      var s = t.drawLine(-a, 0, e.globals.gridWidth + a, 0, i.stroke.color, i.stroke.dashArray, i.stroke.width);
      s.attr({ class: "apexcharts-ycrosshairs" }), e.globals.dom.elGraphical.add(s);
    }
    var r = t.drawLine(-a, 0, e.globals.gridWidth + a, 0, i.stroke.color, 0, 0);
    r.attr({ class: "apexcharts-ycrosshairs-hidden" }), e.globals.dom.elGraphical.add(r);
  } }]), n;
})(), Go = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
  }
  return $(n, [{ key: "checkResponsiveConfig", value: function(e) {
    var t = this, i = this.w, a = i.config;
    if (a.responsive.length !== 0) {
      var s = a.responsive.slice();
      s.sort((function(h, c) {
        return h.breakpoint > c.breakpoint ? 1 : c.breakpoint > h.breakpoint ? -1 : 0;
      })).reverse();
      var r = new Dt({}), o = function() {
        var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = s[0].breakpoint, d = window.innerWidth > 0 ? window.innerWidth : screen.width;
        if (d > c) {
          var u = L.clone(i.globals.initialConfig);
          u.series = L.clone(i.config.series);
          var g = Le.extendArrayProps(r, u, i);
          h = L.extend(g, h), h = L.extend(i.config, h), t.overrideResponsiveOptions(h);
        } else for (var p = 0; p < s.length; p++) d < s[p].breakpoint && (h = Le.extendArrayProps(r, s[p].options, i), h = L.extend(i.config, h), t.overrideResponsiveOptions(h));
      };
      if (e) {
        var l = Le.extendArrayProps(r, e, i);
        l = L.extend(i.config, l), o(l = L.extend(l, e));
      } else o({});
    }
  } }, { key: "overrideResponsiveOptions", value: function(e) {
    var t = new Dt(e).init({ responsiveOverride: !0 });
    this.w.config = t;
  } }]), n;
})(), Vo = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w, this.colors = [], this.isColorFn = !1, this.isHeatmapDistributed = this.checkHeatmapDistributed(), this.isBarDistributed = this.checkBarDistributed();
  }
  return $(n, [{ key: "checkHeatmapDistributed", value: function() {
    var e = this.w.config, t = e.chart, i = e.plotOptions;
    return t.type === "treemap" && i.treemap && i.treemap.distributed || t.type === "heatmap" && i.heatmap && i.heatmap.distributed;
  } }, { key: "checkBarDistributed", value: function() {
    var e = this.w.config, t = e.chart, i = e.plotOptions;
    return i.bar && i.bar.distributed && (t.type === "bar" || t.type === "rangeBar");
  } }, { key: "init", value: function() {
    this.setDefaultColors();
  } }, { key: "setDefaultColors", value: function() {
    var e = this.w, t = new L();
    e.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(e.config.theme.mode || "light"));
    var i = Ee(e.config.colors || e.config.fill.colors || []);
    e.globals.colors = this.getColors(i), this.applySeriesColors(e.globals.seriesColors, e.globals.colors), e.config.theme.monochrome.enabled && (e.globals.colors = this.getMonochromeColors(e.config.theme.monochrome, e.globals.series, t));
    var a = e.globals.colors.slice();
    this.pushExtraColors(e.globals.colors), this.applyColorTypes(["fill", "stroke"], a), this.applyDataLabelsColors(a), this.applyRadarPolygonsColors(), this.applyMarkersColors(a);
  } }, { key: "getColors", value: function(e) {
    var t = this, i = this.w;
    return e && e.length !== 0 ? Array.isArray(e) && e.length > 0 && typeof e[0] == "function" ? (this.isColorFn = !0, i.config.series.map((function(a, s) {
      var r = e[s] || e[0];
      return typeof r == "function" ? r({ value: i.globals.axisCharts ? i.globals.series[s][0] || 0 : i.globals.series[s], seriesIndex: s, dataPointIndex: s, w: t.w }) : r;
    }))) : e : this.predefined();
  } }, { key: "applySeriesColors", value: function(e, t) {
    e.forEach((function(i, a) {
      i && (t[a] = i);
    }));
  } }, { key: "getMonochromeColors", value: function(e, t, i) {
    var a = e.color, s = e.shadeIntensity, r = e.shadeTo, o = this.isBarDistributed || this.isHeatmapDistributed ? t[0].length * t.length : t.length, l = 1 / (o / s), h = 0;
    return Array.from({ length: o }, (function() {
      var c = r === "dark" ? i.shadeColor(-1 * h, a) : i.shadeColor(h, a);
      return h += l, c;
    }));
  } }, { key: "applyColorTypes", value: function(e, t) {
    var i = this, a = this.w;
    e.forEach((function(s) {
      a.globals[s].colors = a.config[s].colors === void 0 ? i.isColorFn ? a.config.colors : t : a.config[s].colors.slice(), i.pushExtraColors(a.globals[s].colors);
    }));
  } }, { key: "applyDataLabelsColors", value: function(e) {
    var t = this.w;
    t.globals.dataLabels.style.colors = t.config.dataLabels.style.colors === void 0 ? e : t.config.dataLabels.style.colors.slice(), this.pushExtraColors(t.globals.dataLabels.style.colors, 50);
  } }, { key: "applyRadarPolygonsColors", value: function() {
    var e = this.w;
    e.globals.radarPolygons.fill.colors = e.config.plotOptions.radar.polygons.fill.colors === void 0 ? [e.config.theme.mode === "dark" ? "#343A3F" : "none"] : e.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(e.globals.radarPolygons.fill.colors, 20);
  } }, { key: "applyMarkersColors", value: function(e) {
    var t = this.w;
    t.globals.markers.colors = t.config.markers.colors === void 0 ? e : t.config.markers.colors.slice(), this.pushExtraColors(t.globals.markers.colors);
  } }, { key: "pushExtraColors", value: function(e, t) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a = this.w, s = t || a.globals.series.length;
    if (i === null && (i = this.isBarDistributed || this.isHeatmapDistributed || a.config.chart.type === "heatmap" && a.config.plotOptions.heatmap && a.config.plotOptions.heatmap.colorScale.inverse), i && a.globals.series.length && (s = a.globals.series[a.globals.maxValsInArrayIndex].length * a.globals.series.length), e.length < s) for (var r = s - e.length, o = 0; o < r; o++) e.push(e[o]);
  } }, { key: "updateThemeOptions", value: function(e) {
    e.chart = e.chart || {}, e.tooltip = e.tooltip || {};
    var t = e.theme.mode, i = t === "dark" ? "palette4" : t === "light" ? "palette1" : e.theme.palette || "palette1", a = t === "dark" ? "#f6f7f8" : t === "light" ? "#373d3f" : e.chart.foreColor || "#373d3f";
    return e.tooltip.theme = t || "light", e.chart.foreColor = a, e.theme.palette = i, e;
  } }, { key: "predefined", value: function() {
    var e = { palette1: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"], palette2: ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"], palette3: ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"], palette4: ["#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"], palette5: ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"], palette6: ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"], palette7: ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"], palette8: ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"], palette9: ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"], palette10: ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"], default: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"] };
    return e[this.w.config.theme.palette] || e.default;
  } }]), n;
})(), Uo = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
  }
  return $(n, [{ key: "draw", value: function() {
    this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle");
  } }, { key: "drawTitleSubtitle", value: function(e) {
    var t = this.w, i = e === "title" ? t.config.title : t.config.subtitle, a = t.globals.svgWidth / 2, s = i.offsetY, r = "middle";
    if (i.align === "left" ? (a = 10, r = "start") : i.align === "right" && (a = t.globals.svgWidth - 10, r = "end"), a += i.offsetX, s = s + parseInt(i.style.fontSize, 10) + i.margin / 2, i.text !== void 0) {
      var o = new X(this.ctx).drawText({ x: a, y: s, text: i.text, textAnchor: r, fontSize: i.style.fontSize, fontFamily: i.style.fontFamily, fontWeight: i.style.fontWeight, foreColor: i.style.color, opacity: 1 });
      o.node.setAttribute("class", "apexcharts-".concat(e, "-text")), t.globals.dom.Paper.add(o);
    }
  } }]), n;
})(), qo = (function() {
  function n(e) {
    q(this, n), this.w = e.w, this.dCtx = e;
  }
  return $(n, [{ key: "getTitleSubtitleCoords", value: function(e) {
    var t = this.w, i = 0, a = 0, s = e === "title" ? t.config.title.floating : t.config.subtitle.floating, r = t.globals.dom.baseEl.querySelector(".apexcharts-".concat(e, "-text"));
    if (r !== null && !s) {
      var o = r.getBoundingClientRect();
      i = o.width, a = t.globals.axisCharts ? o.height + 5 : o.height;
    }
    return { width: i, height: a };
  } }, { key: "getLegendsRect", value: function() {
    var e = this.w, t = e.globals.dom.elLegendWrap;
    e.config.legend.height || e.config.legend.position !== "top" && e.config.legend.position !== "bottom" || (t.style.maxHeight = e.globals.svgHeight / 2 + "px");
    var i = Object.assign({}, L.getBoundingClientRect(t));
    return t !== null && !e.config.legend.floating && e.config.legend.show ? this.dCtx.lgRect = { x: i.x, y: i.y, height: i.height, width: i.height === 0 ? 0 : i.width } : this.dCtx.lgRect = { x: 0, y: 0, height: 0, width: 0 }, e.config.legend.position !== "left" && e.config.legend.position !== "right" || 1.5 * this.dCtx.lgRect.width > e.globals.svgWidth && (this.dCtx.lgRect.width = e.globals.svgWidth / 1.5), this.dCtx.lgRect;
  } }, { key: "getDatalabelsRect", value: function() {
    var e = this, t = this.w, i = [];
    t.config.series.forEach((function(l, h) {
      l.data.forEach((function(c, d) {
        var u;
        u = t.globals.series[h][d], a = t.config.dataLabels.formatter(u, { ctx: e.dCtx.ctx, seriesIndex: h, dataPointIndex: d, w: t }), i.push(a);
      }));
    }));
    var a = L.getLargestStringFromArr(i), s = new X(this.dCtx.ctx), r = t.config.dataLabels.style, o = s.getTextRects(a, parseInt(r.fontSize), r.fontFamily);
    return { width: 1.05 * o.width, height: o.height };
  } }, { key: "getLargestStringFromMultiArr", value: function(e, t) {
    var i = e;
    if (this.w.globals.isMultiLineX) {
      var a = t.map((function(r, o) {
        return Array.isArray(r) ? r.length : 1;
      })), s = Math.max.apply(Math, Ee(a));
      i = t[a.indexOf(s)];
    }
    return i;
  } }]), n;
})(), $o = (function() {
  function n(e) {
    q(this, n), this.w = e.w, this.dCtx = e;
  }
  return $(n, [{ key: "getxAxisLabelsCoords", value: function() {
    var e, t = this.w, i = t.globals.labels.slice();
    if (t.config.xaxis.convertedCatToNumeric && i.length === 0 && (i = t.globals.categoryLabels), t.globals.timescaleLabels.length > 0) {
      var a = this.getxAxisTimeScaleLabelsCoords();
      e = { width: a.width, height: a.height }, t.globals.rotateXLabels = !1;
    } else {
      this.dCtx.lgWidthForSideLegends = t.config.legend.position !== "left" && t.config.legend.position !== "right" || t.config.legend.floating ? 0 : this.dCtx.lgRect.width;
      var s = t.globals.xLabelFormatter, r = L.getLargestStringFromArr(i), o = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r, i);
      t.globals.isBarHorizontal && (o = r = t.globals.yAxisScale[0].result.reduce((function(p, f) {
        return p.length > f.length ? p : f;
      }), 0));
      var l = new $t(this.dCtx.ctx), h = r;
      r = l.xLabelFormat(s, r, h, { i: void 0, dateFormatter: new Ie(this.dCtx.ctx).formatDate, w: t }), o = l.xLabelFormat(s, o, h, { i: void 0, dateFormatter: new Ie(this.dCtx.ctx).formatDate, w: t }), (t.config.xaxis.convertedCatToNumeric && r === void 0 || String(r).trim() === "") && (o = r = "1");
      var c = new X(this.dCtx.ctx), d = c.getTextRects(r, t.config.xaxis.labels.style.fontSize), u = d;
      if (r !== o && (u = c.getTextRects(o, t.config.xaxis.labels.style.fontSize)), (e = { width: d.width >= u.width ? d.width : u.width, height: d.height >= u.height ? d.height : u.height }).width * i.length > t.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && t.config.xaxis.labels.rotate !== 0 || t.config.xaxis.labels.rotateAlways) {
        if (!t.globals.isBarHorizontal) {
          t.globals.rotateXLabels = !0;
          var g = function(p) {
            return c.getTextRects(p, t.config.xaxis.labels.style.fontSize, t.config.xaxis.labels.style.fontFamily, "rotate(".concat(t.config.xaxis.labels.rotate, " 0 0)"), !1);
          };
          d = g(r), r !== o && (u = g(o)), e.height = (d.height > u.height ? d.height : u.height) / 1.5, e.width = d.width > u.width ? d.width : u.width;
        }
      } else t.globals.rotateXLabels = !1;
    }
    return t.config.xaxis.labels.show || (e = { width: 0, height: 0 }), { width: e.width, height: e.height };
  } }, { key: "getxAxisGroupLabelsCoords", value: function() {
    var e, t = this.w;
    if (!t.globals.hasXaxisGroups) return { width: 0, height: 0 };
    var i, a = ((e = t.config.xaxis.group.style) === null || e === void 0 ? void 0 : e.fontSize) || t.config.xaxis.labels.style.fontSize, s = t.globals.groups.map((function(d) {
      return d.title;
    })), r = L.getLargestStringFromArr(s), o = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r, s), l = new X(this.dCtx.ctx), h = l.getTextRects(r, a), c = h;
    return r !== o && (c = l.getTextRects(o, a)), i = { width: h.width >= c.width ? h.width : c.width, height: h.height >= c.height ? h.height : c.height }, t.config.xaxis.labels.show || (i = { width: 0, height: 0 }), { width: i.width, height: i.height };
  } }, { key: "getxAxisTitleCoords", value: function() {
    var e = this.w, t = 0, i = 0;
    if (e.config.xaxis.title.text !== void 0) {
      var a = new X(this.dCtx.ctx).getTextRects(e.config.xaxis.title.text, e.config.xaxis.title.style.fontSize);
      t = a.width, i = a.height;
    }
    return { width: t, height: i };
  } }, { key: "getxAxisTimeScaleLabelsCoords", value: function() {
    var e, t = this.w;
    this.dCtx.timescaleLabels = t.globals.timescaleLabels.slice();
    var i = this.dCtx.timescaleLabels.map((function(s) {
      return s.value;
    })), a = i.reduce((function(s, r) {
      return s === void 0 ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : s.length > r.length ? s : r;
    }), 0);
    return 1.05 * (e = new X(this.dCtx.ctx).getTextRects(a, t.config.xaxis.labels.style.fontSize)).width * i.length > t.globals.gridWidth && t.config.xaxis.labels.rotate !== 0 && (t.globals.overlappingXLabels = !0), e;
  } }, { key: "additionalPaddingXLabels", value: function(e) {
    var t = this, i = this.w, a = i.globals, s = i.config, r = s.xaxis.type, o = e.width;
    a.skipLastTimelinelabel = !1, a.skipFirstTimelinelabel = !1;
    var l = i.config.yaxis[0].opposite && i.globals.isBarHorizontal, h = function(c, d) {
      s.yaxis.length > 1 && (function(u) {
        return a.collapsedSeriesIndices.indexOf(u) !== -1;
      })(d) || (function(u) {
        if (t.dCtx.timescaleLabels && t.dCtx.timescaleLabels.length) {
          var g = t.dCtx.timescaleLabels[0], p = t.dCtx.timescaleLabels[t.dCtx.timescaleLabels.length - 1].position + o / 1.75 - t.dCtx.yAxisWidthRight, f = g.position - o / 1.75 + t.dCtx.yAxisWidthLeft, x = i.config.legend.position === "right" && t.dCtx.lgRect.width > 0 ? t.dCtx.lgRect.width : 0;
          p > a.svgWidth - a.translateX - x && (a.skipLastTimelinelabel = !0), f < -(u.show && !u.floating || s.chart.type !== "bar" && s.chart.type !== "candlestick" && s.chart.type !== "rangeBar" && s.chart.type !== "boxPlot" ? 10 : o / 1.75) && (a.skipFirstTimelinelabel = !0);
        } else r === "datetime" ? t.dCtx.gridPad.right < o && !a.rotateXLabels && (a.skipLastTimelinelabel = !0) : r !== "datetime" && t.dCtx.gridPad.right < o / 2 - t.dCtx.yAxisWidthRight && !a.rotateXLabels && !i.config.xaxis.labels.trim && (t.dCtx.xPadRight = o / 2 + 1);
      })(c);
    };
    s.yaxis.forEach((function(c, d) {
      l ? (t.dCtx.gridPad.left < o && (t.dCtx.xPadLeft = o / 2 + 1), t.dCtx.xPadRight = o / 2 + 1) : h(c, d);
    }));
  } }]), n;
})(), Zo = (function() {
  function n(e) {
    q(this, n), this.w = e.w, this.dCtx = e;
  }
  return $(n, [{ key: "getyAxisLabelsCoords", value: function() {
    var e = this, t = this.w, i = [], a = 10, s = new st(this.dCtx.ctx);
    return t.config.yaxis.map((function(r, o) {
      var l = { seriesIndex: o, dataPointIndex: -1, w: t }, h = t.globals.yAxisScale[o], c = 0;
      if (!s.isYAxisHidden(o) && r.labels.show && r.labels.minWidth !== void 0 && (c = r.labels.minWidth), !s.isYAxisHidden(o) && r.labels.show && h.result.length) {
        var d = t.globals.yLabelFormatters[o], u = h.niceMin === Number.MIN_VALUE ? 0 : h.niceMin, g = h.result.reduce((function(w, v) {
          var C, k;
          return ((C = String(d(w, l))) === null || C === void 0 ? void 0 : C.length) > ((k = String(d(v, l))) === null || k === void 0 ? void 0 : k.length) ? w : v;
        }), u), p = g = d(g, l);
        if (g !== void 0 && g.length !== 0 || (g = h.niceMax), t.globals.isBarHorizontal) {
          a = 0;
          var f = t.globals.labels.slice();
          g = L.getLargestStringFromArr(f), g = d(g, { seriesIndex: o, dataPointIndex: -1, w: t }), p = e.dCtx.dimHelpers.getLargestStringFromMultiArr(g, f);
        }
        var x = new X(e.dCtx.ctx), b = "rotate(".concat(r.labels.rotate, " 0 0)"), m = x.getTextRects(g, r.labels.style.fontSize, r.labels.style.fontFamily, b, !1), y = m;
        g !== p && (y = x.getTextRects(p, r.labels.style.fontSize, r.labels.style.fontFamily, b, !1)), i.push({ width: (c > y.width || c > m.width ? c : y.width > m.width ? y.width : m.width) + a, height: y.height > m.height ? y.height : m.height });
      } else i.push({ width: 0, height: 0 });
    })), i;
  } }, { key: "getyAxisTitleCoords", value: function() {
    var e = this, t = this.w, i = [];
    return t.config.yaxis.map((function(a, s) {
      if (a.show && a.title.text !== void 0) {
        var r = new X(e.dCtx.ctx), o = "rotate(".concat(a.title.rotate, " 0 0)"), l = r.getTextRects(a.title.text, a.title.style.fontSize, a.title.style.fontFamily, o, !1);
        i.push({ width: l.width, height: l.height });
      } else i.push({ width: 0, height: 0 });
    })), i;
  } }, { key: "getTotalYAxisWidth", value: function() {
    var e = this.w, t = 0, i = 0, a = 0, s = e.globals.yAxisScale.length > 1 ? 10 : 0, r = new st(this.dCtx.ctx), o = function(l, h) {
      var c = e.config.yaxis[h].floating, d = 0;
      l.width > 0 && !c ? (d = l.width + s, (function(u) {
        return e.globals.ignoreYAxisIndexes.indexOf(u) > -1;
      })(h) && (d = d - l.width - s)) : d = c || r.isYAxisHidden(h) ? 0 : 5, e.config.yaxis[h].opposite ? a += d : i += d, t += d;
    };
    return e.globals.yLabelsCoords.map((function(l, h) {
      o(l, h);
    })), e.globals.yTitleCoords.map((function(l, h) {
      o(l, h);
    })), e.globals.isBarHorizontal && !e.config.yaxis[0].floating && (t = e.globals.yLabelsCoords[0].width + e.globals.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = i, this.dCtx.yAxisWidthRight = a, t;
  } }]), n;
})(), Jo = (function() {
  function n(e) {
    q(this, n), this.w = e.w, this.dCtx = e;
  }
  return $(n, [{ key: "gridPadForColumnsInNumericAxis", value: function(e) {
    var t = this.w, i = t.config, a = t.globals;
    if (a.noData || a.collapsedSeries.length + a.ancillaryCollapsedSeries.length === i.series.length) return 0;
    var s = function(g) {
      return ["bar", "rangeBar", "candlestick", "boxPlot"].includes(g);
    }, r = i.chart.type, o = 0, l = s(r) ? i.series.length : 1;
    a.comboBarCount > 0 && (l = a.comboBarCount), a.collapsedSeries.forEach((function(g) {
      s(g.type) && (l -= 1);
    })), i.chart.stacked && (l = 1);
    var h = s(r) || a.comboBarCount > 0, c = Math.abs(a.initialMaxX - a.initialMinX);
    if (h && a.isXNumeric && !a.isBarHorizontal && l > 0 && c !== 0) {
      c <= 3 && (c = a.dataPoints);
      var d = c / e, u = a.minXDiff && a.minXDiff / d > 0 ? a.minXDiff / d : 0;
      u > e / 2 && (u /= 2), (o = u * parseInt(i.plotOptions.bar.columnWidth, 10) / 100) < 1 && (o = 1), a.barPadForNumericAxis = o;
    }
    return o;
  } }, { key: "gridPadFortitleSubtitle", value: function() {
    var e = this, t = this.w, i = t.globals, a = this.dCtx.isSparkline || !i.axisCharts ? 0 : 10;
    ["title", "subtitle"].forEach((function(o) {
      t.config[o].text !== void 0 ? a += t.config[o].margin : a += e.dCtx.isSparkline || !i.axisCharts ? 0 : 5;
    })), !t.config.legend.show || t.config.legend.position !== "bottom" || t.config.legend.floating || i.axisCharts || (a += 10);
    var s = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"), r = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
    i.gridHeight -= s.height + r.height + a, i.translateY += s.height + r.height + a;
  } }, { key: "setGridXPosForDualYAxis", value: function(e, t) {
    var i = this.w, a = new st(this.dCtx.ctx);
    i.config.yaxis.forEach((function(s, r) {
      i.globals.ignoreYAxisIndexes.indexOf(r) !== -1 || s.floating || a.isYAxisHidden(r) || (s.opposite && (i.globals.translateX -= t[r].width + e[r].width + parseInt(s.labels.style.fontSize, 10) / 1.2 + 12), i.globals.translateX < 2 && (i.globals.translateX = 2));
    }));
  } }]), n;
})(), di = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new qo(this), this.dimYAxis = new Zo(this), this.dimXAxis = new $o(this), this.dimGrid = new Jo(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0;
  }
  return $(n, [{ key: "plotCoords", value: function() {
    var e = this, t = this.w, i = t.globals;
    this.lgRect = this.dimHelpers.getLegendsRect(), this.datalabelsCoords = { width: 0, height: 0 };
    var a = Array.isArray(t.config.stroke.width) ? Math.max.apply(Math, Ee(t.config.stroke.width)) : t.config.stroke.width;
    this.isSparkline && ((t.config.markers.discrete.length > 0 || t.config.markers.size > 0) && Object.entries(this.gridPad).forEach((function(r) {
      var o = zs(r, 2), l = o[0], h = o[1];
      e.gridPad[l] = Math.max(h, e.w.globals.markers.largestSize / 1.5);
    })), this.gridPad.top = Math.max(a / 2, this.gridPad.top), this.gridPad.bottom = Math.max(a / 2, this.gridPad.bottom)), i.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), i.gridHeight = i.gridHeight - this.gridPad.top - this.gridPad.bottom, i.gridWidth = i.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft;
    var s = this.dimGrid.gridPadForColumnsInNumericAxis(i.gridWidth);
    i.gridWidth = i.gridWidth - 2 * s, i.translateX = i.translateX + this.gridPad.left + this.xPadLeft + (s > 0 ? s : 0), i.translateY = i.translateY + this.gridPad.top;
  } }, { key: "setDimensionsForAxisCharts", value: function() {
    var e = this, t = this.w, i = t.globals, a = this.dimYAxis.getyAxisLabelsCoords(), s = this.dimYAxis.getyAxisTitleCoords();
    i.isSlopeChart && (this.datalabelsCoords = this.dimHelpers.getDatalabelsRect()), t.globals.yLabelsCoords = [], t.globals.yTitleCoords = [], t.config.yaxis.map((function(g, p) {
      t.globals.yLabelsCoords.push({ width: a[p].width, index: p }), t.globals.yTitleCoords.push({ width: s[p].width, index: p });
    })), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth();
    var r = this.dimXAxis.getxAxisLabelsCoords(), o = this.dimXAxis.getxAxisGroupLabelsCoords(), l = this.dimXAxis.getxAxisTitleCoords();
    this.conditionalChecksForAxisCoords(r, l, o), i.translateXAxisY = t.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, i.translateXAxisX = t.globals.rotateXLabels && t.globals.isXNumeric && t.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, t.globals.isBarHorizontal && (i.rotateXLabels = !1, i.translateXAxisY = parseInt(t.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), i.translateXAxisY = i.translateXAxisY + t.config.xaxis.labels.offsetY, i.translateXAxisX = i.translateXAxisX + t.config.xaxis.labels.offsetX;
    var h = this.yAxisWidth, c = this.xAxisHeight;
    i.xAxisLabelsHeight = this.xAxisHeight - l.height, i.xAxisGroupLabelsHeight = i.xAxisLabelsHeight - r.height, i.xAxisLabelsWidth = this.xAxisWidth, i.xAxisHeight = this.xAxisHeight;
    var d = 10;
    (t.config.chart.type === "radar" || this.isSparkline) && (h = 0, c = 0), this.isSparkline && (this.lgRect = { height: 0, width: 0 }), (this.isSparkline || t.config.chart.type === "treemap") && (h = 0, c = 0, d = 0), this.isSparkline || t.config.chart.type === "treemap" || this.dimXAxis.additionalPaddingXLabels(r);
    var u = function() {
      i.translateX = h + e.datalabelsCoords.width, i.gridHeight = i.svgHeight - e.lgRect.height - c - (e.isSparkline || t.config.chart.type === "treemap" ? 0 : t.globals.rotateXLabels ? 10 : 15), i.gridWidth = i.svgWidth - h - 2 * e.datalabelsCoords.width;
    };
    switch (t.config.xaxis.position === "top" && (d = i.xAxisHeight - t.config.xaxis.axisTicks.height - 5), t.config.legend.position) {
      case "bottom":
        i.translateY = d, u();
        break;
      case "top":
        i.translateY = this.lgRect.height + d, u();
        break;
      case "left":
        i.translateY = d, i.translateX = this.lgRect.width + h + this.datalabelsCoords.width, i.gridHeight = i.svgHeight - c - 12, i.gridWidth = i.svgWidth - this.lgRect.width - h - 2 * this.datalabelsCoords.width;
        break;
      case "right":
        i.translateY = d, i.translateX = h + this.datalabelsCoords.width, i.gridHeight = i.svgHeight - c - 12, i.gridWidth = i.svgWidth - this.lgRect.width - h - 2 * this.datalabelsCoords.width - 5;
        break;
      default:
        throw new Error("Legend position not supported");
    }
    this.dimGrid.setGridXPosForDualYAxis(s, a), new La(this.ctx).setYAxisXPosition(a, s);
  } }, { key: "setDimensionsForNonAxisCharts", value: function() {
    var e = this.w, t = e.globals, i = e.config, a = 0;
    e.config.legend.show && !e.config.legend.floating && (a = 20);
    var s = i.chart.type === "pie" || i.chart.type === "polarArea" || i.chart.type === "donut" ? "pie" : "radialBar", r = i.plotOptions[s].offsetY, o = i.plotOptions[s].offsetX;
    if (!i.legend.show || i.legend.floating) {
      t.gridHeight = t.svgHeight;
      var l = t.dom.elWrap.getBoundingClientRect().width;
      return t.gridWidth = Math.min(l, t.gridHeight), t.translateY = r, void (t.translateX = o + (t.svgWidth - t.gridWidth) / 2);
    }
    switch (i.legend.position) {
      case "bottom":
        t.gridHeight = t.svgHeight - this.lgRect.height, t.gridWidth = t.svgWidth, t.translateY = r - 10, t.translateX = o + (t.svgWidth - t.gridWidth) / 2;
        break;
      case "top":
        t.gridHeight = t.svgHeight - this.lgRect.height, t.gridWidth = t.svgWidth, t.translateY = this.lgRect.height + r + 10, t.translateX = o + (t.svgWidth - t.gridWidth) / 2;
        break;
      case "left":
        t.gridWidth = t.svgWidth - this.lgRect.width - a, t.gridHeight = i.chart.height !== "auto" ? t.svgHeight : t.gridWidth, t.translateY = r, t.translateX = o + this.lgRect.width + a;
        break;
      case "right":
        t.gridWidth = t.svgWidth - this.lgRect.width - a - 5, t.gridHeight = i.chart.height !== "auto" ? t.svgHeight : t.gridWidth, t.translateY = r, t.translateX = o + 10;
        break;
      default:
        throw new Error("Legend position not supported");
    }
  } }, { key: "conditionalChecksForAxisCoords", value: function(e, t, i) {
    var a = this.w, s = a.globals.hasXaxisGroups ? 2 : 1, r = i.height + e.height + t.height, o = a.globals.isMultiLineX ? 1.2 : a.globals.LINE_HEIGHT_RATIO, l = a.globals.rotateXLabels ? 22 : 10, h = a.globals.rotateXLabels && a.config.legend.position === "bottom" ? 10 : 0;
    this.xAxisHeight = r * o + s * l + h, this.xAxisWidth = e.width, this.xAxisHeight - t.height > a.config.xaxis.labels.maxHeight && (this.xAxisHeight = a.config.xaxis.labels.maxHeight), a.config.xaxis.labels.minHeight && this.xAxisHeight < a.config.xaxis.labels.minHeight && (this.xAxisHeight = a.config.xaxis.labels.minHeight), a.config.xaxis.floating && (this.xAxisHeight = 0);
    var c = 0, d = 0;
    a.config.yaxis.forEach((function(u) {
      c += u.labels.minWidth, d += u.labels.maxWidth;
    })), this.yAxisWidth < c && (this.yAxisWidth = c), this.yAxisWidth > d && (this.yAxisWidth = d);
  } }]), n;
})(), Ko = (function() {
  function n(e) {
    q(this, n), this.w = e.w, this.lgCtx = e;
  }
  return $(n, [{ key: "getLegendStyles", value: function() {
    var e, t, i, a = document.createElement("style");
    a.setAttribute("type", "text/css");
    var s = ((e = this.lgCtx.ctx) === null || e === void 0 || (t = e.opts) === null || t === void 0 || (i = t.chart) === null || i === void 0 ? void 0 : i.nonce) || this.w.config.chart.nonce;
    s && a.setAttribute("nonce", s);
    var r = document.createTextNode(`
      .apexcharts-flip-y {
        transform: scaleY(-1) translateY(-100%);
        transform-origin: top;
        transform-box: fill-box;
      }
      .apexcharts-flip-x {
        transform: scaleX(-1);
        transform-origin: center;
        transform-box: fill-box;
      }
      .apexcharts-legend {
        display: flex;
        overflow: auto;
        padding: 0 10px;
      }
      .apexcharts-legend.apexcharts-legend-group-horizontal {
        flex-direction: column;
      }
      .apexcharts-legend-group {
        display: flex;
      }
      .apexcharts-legend-group-vertical {
        flex-direction: column-reverse;
      }
      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {
        flex-wrap: wrap
      }
      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {
        flex-direction: column;
        bottom: 0;
      }
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {
        justify-content: flex-start;
        align-items: flex-start;
      }
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {
        justify-content: center;
        align-items: center;
      }
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {
        justify-content: flex-end;
        align-items: flex-end;
      }
      .apexcharts-legend-series {
        cursor: pointer;
        line-height: normal;
        display: flex;
        align-items: center;
      }
      .apexcharts-legend-text {
        position: relative;
        font-size: 14px;
      }
      .apexcharts-legend-text *, .apexcharts-legend-marker * {
        pointer-events: none;
      }
      .apexcharts-legend-marker {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-right: 1px;
      }

      .apexcharts-legend-series.apexcharts-no-click {
        cursor: auto;
      }
      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {
        display: none !important;
      }
      .apexcharts-inactive-legend {
        opacity: 0.45;
      }

    `);
    return a.appendChild(r), a;
  } }, { key: "getLegendDimensions", value: function() {
    var e = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(), t = e.width;
    return { clwh: e.height, clww: t };
  } }, { key: "appendToForeignObject", value: function() {
    this.w.globals.dom.elLegendForeign.appendChild(this.getLegendStyles());
  } }, { key: "toggleDataSeries", value: function(e, t) {
    var i = this, a = this.w;
    if (a.globals.axisCharts || a.config.chart.type === "radialBar") {
      a.globals.resized = !0;
      var s = null, r = null;
      a.globals.risingSeries = [], a.globals.axisCharts ? (s = a.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e, "']")), r = parseInt(s.getAttribute("data:realIndex"), 10)) : (s = a.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(e + 1, "']")), r = parseInt(s.getAttribute("rel"), 10) - 1), t ? [{ cs: a.globals.collapsedSeries, csi: a.globals.collapsedSeriesIndices }, { cs: a.globals.ancillaryCollapsedSeries, csi: a.globals.ancillaryCollapsedSeriesIndices }].forEach((function(c) {
        i.riseCollapsedSeries(c.cs, c.csi, r);
      })) : this.hideSeries({ seriesEl: s, realIndex: r });
    } else {
      var o = a.globals.dom.Paper.findOne(" .apexcharts-series[rel='".concat(e + 1, "'] path")), l = a.config.chart.type;
      if (l === "pie" || l === "polarArea" || l === "donut") {
        var h = a.config.plotOptions.pie.donut.labels;
        new X(this.lgCtx.ctx).pathMouseDown(o, null), this.lgCtx.ctx.pie.printDataLabelsInner(o.node, h);
      }
      o.fire("click");
    }
  } }, { key: "getSeriesAfterCollapsing", value: function(e) {
    var t = e.realIndex, i = this.w, a = i.globals, s = L.clone(i.config.series);
    if (a.axisCharts) {
      var r = i.config.yaxis[a.seriesYAxisReverseMap[t]], o = { index: t, data: s[t].data.slice(), type: s[t].type || i.config.chart.type };
      if (r && r.show && r.showAlways) a.ancillaryCollapsedSeriesIndices.indexOf(t) < 0 && (a.ancillaryCollapsedSeries.push(o), a.ancillaryCollapsedSeriesIndices.push(t));
      else if (a.collapsedSeriesIndices.indexOf(t) < 0) {
        a.collapsedSeries.push(o), a.collapsedSeriesIndices.push(t);
        var l = a.risingSeries.indexOf(t);
        a.risingSeries.splice(l, 1);
      }
    } else a.collapsedSeries.push({ index: t, data: s[t] }), a.collapsedSeriesIndices.push(t);
    return a.allSeriesCollapsed = a.collapsedSeries.length + a.ancillaryCollapsedSeries.length === i.config.series.length, this._getSeriesBasedOnCollapsedState(s);
  } }, { key: "hideSeries", value: function(e) {
    for (var t = e.seriesEl, i = e.realIndex, a = this.w, s = this.getSeriesAfterCollapsing({ realIndex: i }), r = t.childNodes, o = 0; o < r.length; o++) r[o].classList.contains("apexcharts-series-markers-wrap") && (r[o].classList.contains("apexcharts-hide") ? r[o].classList.remove("apexcharts-hide") : r[o].classList.add("apexcharts-hide"));
    this.lgCtx.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled);
  } }, { key: "riseCollapsedSeries", value: function(e, t, i) {
    var a = this.w, s = L.clone(a.config.series);
    if (e.length > 0) {
      for (var r = 0; r < e.length; r++) e[r].index === i && (a.globals.axisCharts ? s[i].data = e[r].data.slice() : s[i] = e[r].data, typeof s[i] != "number" && (s[i].hidden = !1), e.splice(r, 1), t.splice(r, 1), a.globals.risingSeries.push(i));
      s = this._getSeriesBasedOnCollapsedState(s), this.lgCtx.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled);
    }
  } }, { key: "_getSeriesBasedOnCollapsedState", value: function(e) {
    var t = this.w, i = 0;
    return t.globals.axisCharts ? e.forEach((function(a, s) {
      t.globals.collapsedSeriesIndices.indexOf(s) < 0 && t.globals.ancillaryCollapsedSeriesIndices.indexOf(s) < 0 || (e[s].data = [], i++);
    })) : e.forEach((function(a, s) {
      !t.globals.collapsedSeriesIndices.indexOf(s) < 0 && (e[s] = 0, i++);
    })), t.globals.allSeriesCollapsed = i === e.length, e;
  } }]), n;
})(), gr = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = this.w.config.chart.type === "bar" && this.w.config.plotOptions.bar.distributed && this.w.config.series.length === 1, this.legendHelpers = new Ko(this);
  }
  return $(n, [{ key: "init", value: function() {
    var e = this.w, t = e.globals, i = e.config, a = i.legend.showForSingleSeries && t.series.length === 1 || this.isBarsDistributed || t.series.length > 1;
    if (this.legendHelpers.appendToForeignObject(), (a || !t.axisCharts) && i.legend.show) {
      for (; t.dom.elLegendWrap.firstChild; ) t.dom.elLegendWrap.removeChild(t.dom.elLegendWrap.firstChild);
      this.drawLegends(), i.legend.position === "bottom" || i.legend.position === "top" ? this.legendAlignHorizontal() : i.legend.position !== "right" && i.legend.position !== "left" || this.legendAlignVertical();
    }
  } }, { key: "createLegendMarker", value: function(e) {
    var t = e.i, i = e.fillcolor, a = this.w, s = document.createElement("span");
    s.classList.add("apexcharts-legend-marker");
    var r = a.config.legend.markers.shape || a.config.markers.shape, o = r;
    Array.isArray(r) && (o = r[t]);
    var l = Array.isArray(a.config.legend.markers.size) ? parseFloat(a.config.legend.markers.size[t]) : parseFloat(a.config.legend.markers.size), h = Array.isArray(a.config.legend.markers.offsetX) ? parseFloat(a.config.legend.markers.offsetX[t]) : parseFloat(a.config.legend.markers.offsetX), c = Array.isArray(a.config.legend.markers.offsetY) ? parseFloat(a.config.legend.markers.offsetY[t]) : parseFloat(a.config.legend.markers.offsetY), d = Array.isArray(a.config.legend.markers.strokeWidth) ? parseFloat(a.config.legend.markers.strokeWidth[t]) : parseFloat(a.config.legend.markers.strokeWidth), u = s.style;
    if (u.height = 2 * (l + d) + "px", u.width = 2 * (l + d) + "px", u.left = h + "px", u.top = c + "px", a.config.legend.markers.customHTML) u.background = "transparent", u.color = i[t], Array.isArray(a.config.legend.markers.customHTML) ? a.config.legend.markers.customHTML[t] && (s.innerHTML = a.config.legend.markers.customHTML[t]()) : s.innerHTML = a.config.legend.markers.customHTML();
    else {
      var g = new Tt(this.ctx).getMarkerConfig({ cssClass: "apexcharts-legend-marker apexcharts-marker apexcharts-marker-".concat(o), seriesIndex: t, strokeWidth: d, size: l }), p = window.SVG().addTo(s).size("100%", "100%"), f = new X(this.ctx).drawMarker(0, 0, D(D({}, g), {}, { pointFillColor: Array.isArray(i) ? i[t] : g.pointFillColor, shape: o }));
      a.globals.dom.Paper.find(".apexcharts-legend-marker.apexcharts-marker").forEach((function(x) {
        x.node.classList.contains("apexcharts-marker-triangle") ? x.node.style.transform = "translate(50%, 45%)" : x.node.style.transform = "translate(50%, 50%)";
      })), p.add(f);
    }
    return s;
  } }, { key: "drawLegends", value: function() {
    var e = this, t = this, i = this.w, a = i.config.legend.fontFamily, s = i.globals.seriesNames, r = i.config.legend.markers.fillColors ? i.config.legend.markers.fillColors.slice() : i.globals.colors.slice();
    if (i.config.chart.type === "heatmap") {
      var o = i.config.plotOptions.heatmap.colorScale.ranges;
      s = o.map((function(g) {
        return g.name ? g.name : g.from + " - " + g.to;
      })), r = o.map((function(g) {
        return g.color;
      }));
    } else this.isBarsDistributed && (s = i.globals.labels.slice());
    i.config.legend.customLegendItems.length && (s = i.config.legend.customLegendItems);
    var l = i.globals.legendFormatter, h = i.config.legend.inverseOrder, c = [];
    i.globals.seriesGroups.length > 1 && i.config.legend.clusterGroupedSeries && i.globals.seriesGroups.forEach((function(g, p) {
      c[p] = document.createElement("div"), c[p].classList.add("apexcharts-legend-group", "apexcharts-legend-group-".concat(p)), i.config.legend.clusterGroupedSeriesOrientation === "horizontal" ? i.globals.dom.elLegendWrap.classList.add("apexcharts-legend-group-horizontal") : c[p].classList.add("apexcharts-legend-group-vertical");
    }));
    for (var d = function(g) {
      var p, f = l(s[g], { seriesIndex: g, w: i }), x = !1, b = !1;
      if (i.globals.collapsedSeries.length > 0) for (var m = 0; m < i.globals.collapsedSeries.length; m++) i.globals.collapsedSeries[m].index === g && (x = !0);
      if (i.globals.ancillaryCollapsedSeriesIndices.length > 0) for (var y = 0; y < i.globals.ancillaryCollapsedSeriesIndices.length; y++) i.globals.ancillaryCollapsedSeriesIndices[y] === g && (b = !0);
      var w = e.createLegendMarker({ i: g, fillcolor: r });
      X.setAttrs(w, { rel: g + 1, "data:collapsed": x || b }), (x || b) && w.classList.add("apexcharts-inactive-legend");
      var v = document.createElement("div"), C = document.createElement("span");
      C.classList.add("apexcharts-legend-text"), C.innerHTML = Array.isArray(f) ? f.join(" ") : f;
      var k = i.config.legend.labels.useSeriesColors ? i.globals.colors[g] : Array.isArray(i.config.legend.labels.colors) ? (p = i.config.legend.labels.colors) === null || p === void 0 ? void 0 : p[g] : i.config.legend.labels.colors;
      k || (k = i.config.chart.foreColor), C.style.color = k, C.style.fontSize = parseFloat(i.config.legend.fontSize) + "px", C.style.fontWeight = i.config.legend.fontWeight, C.style.fontFamily = a || i.config.chart.fontFamily, X.setAttrs(C, { rel: g + 1, i: g, "data:default-text": encodeURIComponent(f), "data:collapsed": x || b }), v.appendChild(w), v.appendChild(C);
      var A = new Le(e.ctx);
      i.config.legend.showForZeroSeries || A.getSeriesTotalByIndex(g) === 0 && A.seriesHaveSameValues(g) && !A.isSeriesNull(g) && i.globals.collapsedSeriesIndices.indexOf(g) === -1 && i.globals.ancillaryCollapsedSeriesIndices.indexOf(g) === -1 && v.classList.add("apexcharts-hidden-zero-series"), i.config.legend.showForNullSeries || A.isSeriesNull(g) && i.globals.collapsedSeriesIndices.indexOf(g) === -1 && i.globals.ancillaryCollapsedSeriesIndices.indexOf(g) === -1 && v.classList.add("apexcharts-hidden-null-series"), c.length ? i.globals.seriesGroups.forEach((function(S, P) {
        var T;
        S.includes((T = i.config.series[g]) === null || T === void 0 ? void 0 : T.name) && (i.globals.dom.elLegendWrap.appendChild(c[P]), c[P].appendChild(v));
      })) : i.globals.dom.elLegendWrap.appendChild(v), i.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(i.config.legend.horizontalAlign)), i.globals.dom.elLegendWrap.classList.add("apx-legend-position-" + i.config.legend.position), v.classList.add("apexcharts-legend-series"), v.style.margin = "".concat(i.config.legend.itemMargin.vertical, "px ").concat(i.config.legend.itemMargin.horizontal, "px"), i.globals.dom.elLegendWrap.style.width = i.config.legend.width ? i.config.legend.width + "px" : "", i.globals.dom.elLegendWrap.style.height = i.config.legend.height ? i.config.legend.height + "px" : "", X.setAttrs(v, { rel: g + 1, seriesName: L.escapeString(s[g]), "data:collapsed": x || b }), (x || b) && v.classList.add("apexcharts-inactive-legend"), i.config.legend.onItemClick.toggleDataSeries || v.classList.add("apexcharts-no-click");
    }, u = h ? s.length - 1 : 0; h ? u >= 0 : u <= s.length - 1; h ? u-- : u++) d(u);
    i.globals.dom.elWrap.addEventListener("click", t.onLegendClick, !0), i.config.legend.onItemHover.highlightDataSeries && i.config.legend.customLegendItems.length === 0 && (i.globals.dom.elWrap.addEventListener("mousemove", t.onLegendHovered, !0), i.globals.dom.elWrap.addEventListener("mouseout", t.onLegendHovered, !0));
  } }, { key: "setLegendWrapXY", value: function(e, t) {
    var i = this.w, a = i.globals.dom.elLegendWrap, s = a.clientHeight, r = 0, o = 0;
    if (i.config.legend.position === "bottom") o = i.globals.svgHeight - Math.min(s, i.globals.svgHeight / 2) - 5;
    else if (i.config.legend.position === "top") {
      var l = new di(this.ctx), h = l.dimHelpers.getTitleSubtitleCoords("title").height, c = l.dimHelpers.getTitleSubtitleCoords("subtitle").height;
      o = (h > 0 ? h - 10 : 0) + (c > 0 ? c - 10 : 0);
    }
    a.style.position = "absolute", r = r + e + i.config.legend.offsetX, o = o + t + i.config.legend.offsetY, a.style.left = r + "px", a.style.top = o + "px", i.config.legend.position === "right" && (a.style.left = "auto", a.style.right = 25 + i.config.legend.offsetX + "px"), ["width", "height"].forEach((function(d) {
      a.style[d] && (a.style[d] = parseInt(i.config.legend[d], 10) + "px");
    }));
  } }, { key: "legendAlignHorizontal", value: function() {
    var e = this.w;
    e.globals.dom.elLegendWrap.style.right = 0;
    var t = new di(this.ctx), i = t.dimHelpers.getTitleSubtitleCoords("title"), a = t.dimHelpers.getTitleSubtitleCoords("subtitle"), s = 0;
    e.config.legend.position === "top" && (s = i.height + a.height + e.config.title.margin + e.config.subtitle.margin - 10), this.setLegendWrapXY(20, s);
  } }, { key: "legendAlignVertical", value: function() {
    var e = this.w, t = this.legendHelpers.getLegendDimensions(), i = 0;
    e.config.legend.position === "left" && (i = 20), e.config.legend.position === "right" && (i = e.globals.svgWidth - t.clww - 10), this.setLegendWrapXY(i, 20);
  } }, { key: "onLegendHovered", value: function(e) {
    var t = this.w, i = e.target.classList.contains("apexcharts-legend-series") || e.target.classList.contains("apexcharts-legend-text") || e.target.classList.contains("apexcharts-legend-marker");
    if (t.config.chart.type === "heatmap" || this.isBarsDistributed) {
      if (i) {
        var a = parseInt(e.target.getAttribute("rel"), 10) - 1;
        this.ctx.events.fireEvent("legendHover", [this.ctx, a, this.w]), new Ve(this.ctx).highlightRangeInSeries(e, e.target);
      }
    } else !e.target.classList.contains("apexcharts-inactive-legend") && i && new Ve(this.ctx).toggleSeriesOnHover(e, e.target);
  } }, { key: "onLegendClick", value: function(e) {
    var t = this.w;
    if (!t.config.legend.customLegendItems.length && (e.target.classList.contains("apexcharts-legend-series") || e.target.classList.contains("apexcharts-legend-text") || e.target.classList.contains("apexcharts-legend-marker"))) {
      var i = parseInt(e.target.getAttribute("rel"), 10) - 1, a = e.target.getAttribute("data:collapsed") === "true", s = this.w.config.chart.events.legendClick;
      typeof s == "function" && s(this.ctx, i, this.w), this.ctx.events.fireEvent("legendClick", [this.ctx, i, this.w]);
      var r = this.w.config.legend.markers.onClick;
      typeof r == "function" && e.target.classList.contains("apexcharts-legend-marker") && (r(this.ctx, i, this.w), this.ctx.events.fireEvent("legendMarkerClick", [this.ctx, i, this.w])), t.config.chart.type !== "treemap" && t.config.chart.type !== "heatmap" && !this.isBarsDistributed && t.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(i, a);
    }
  } }]), n;
})(), fr = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
    var t = this.w;
    this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = t.globals.minX, this.maxX = t.globals.maxX;
  }
  return $(n, [{ key: "createToolbar", value: function() {
    var e = this, t = this.w, i = function() {
      return document.createElement("div");
    }, a = i();
    if (a.setAttribute("class", "apexcharts-toolbar"), a.style.top = t.config.chart.toolbar.offsetY + "px", a.style.right = 3 - t.config.chart.toolbar.offsetX + "px", t.globals.dom.elWrap.appendChild(a), this.elZoom = i(), this.elZoomIn = i(), this.elZoomOut = i(), this.elPan = i(), this.elSelection = i(), this.elZoomReset = i(), this.elMenuIcon = i(), this.elMenu = i(), this.elCustomIcons = [], this.t = t.config.chart.toolbar.tools, Array.isArray(this.t.customIcons)) for (var s = 0; s < this.t.customIcons.length; s++) this.elCustomIcons.push(i());
    var r = [], o = function(d, u, g) {
      var p = d.toLowerCase();
      e.t[p] && t.config.chart.zoom.enabled && r.push({ el: u, icon: typeof e.t[p] == "string" ? e.t[p] : g, title: e.localeValues[d], class: "apexcharts-".concat(p, "-icon") });
    };
    o("zoomIn", this.elZoomIn, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
`), o("zoomOut", this.elZoomOut, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
`);
    var l = function(d) {
      e.t[d] && t.config.chart[d].enabled && r.push({ el: d === "zoom" ? e.elZoom : e.elSelection, icon: typeof e.t[d] == "string" ? e.t[d] : d === "zoom" ? `<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
</svg>` : `<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>
</svg>`, title: e.localeValues[d === "zoom" ? "selectionZoom" : "selection"], class: t.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-".concat(d, "-icon") });
    };
    l("zoom"), l("selection"), this.t.pan && t.config.chart.zoom.enabled && r.push({ el: this.elPan, icon: typeof this.t.pan == "string" ? this.t.pan : `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    <defs>
        <path d="M0 0h24v24H0z" id="a"/>
    </defs>
    <clipPath id="b">
        <use overflow="visible" xlink:href="#a"/>
    </clipPath>
    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>
</svg>`, title: this.localeValues.pan, class: t.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-pan-icon" }), o("reset", this.elZoomReset, `<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`), this.t.download && r.push({ el: this.elMenuIcon, icon: typeof this.t.download == "string" ? this.t.download : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>', title: this.localeValues.menu, class: "apexcharts-menu-icon" });
    for (var h = 0; h < this.elCustomIcons.length; h++) r.push({ el: this.elCustomIcons[h], icon: this.t.customIcons[h].icon, title: this.t.customIcons[h].title, index: this.t.customIcons[h].index, class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[h].class });
    r.forEach((function(d, u) {
      d.index && L.moveIndexInArray(r, u, d.index);
    }));
    for (var c = 0; c < r.length; c++) X.setAttrs(r[c].el, { class: r[c].class, title: r[c].title }), r[c].el.innerHTML = r[c].icon, a.appendChild(r[c].el);
    this._createHamburgerMenu(a), t.globals.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : t.globals.panEnabled ? this.elPan.classList.add(this.selectedClass) : t.globals.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners();
  } }, { key: "_createHamburgerMenu", value: function(e) {
    this.elMenuItems = [], e.appendChild(this.elMenu), X.setAttrs(this.elMenu, { class: "apexcharts-menu" });
    for (var t = [{ name: "exportSVG", title: this.localeValues.exportToSVG }, { name: "exportPNG", title: this.localeValues.exportToPNG }, { name: "exportCSV", title: this.localeValues.exportToCSV }], i = 0; i < t.length; i++) this.elMenuItems.push(document.createElement("div")), this.elMenuItems[i].innerHTML = t[i].title, X.setAttrs(this.elMenuItems[i], { class: "apexcharts-menu-item ".concat(t[i].name), title: t[i].title }), this.elMenu.appendChild(this.elMenuItems[i]);
  } }, { key: "addToolbarEventListeners", value: function() {
    var e = this;
    this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), this.elZoom.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach((function(i) {
      i.classList.contains("exportSVG") ? i.addEventListener("click", e.handleDownload.bind(e, "svg")) : i.classList.contains("exportPNG") ? i.addEventListener("click", e.handleDownload.bind(e, "png")) : i.classList.contains("exportCSV") && i.addEventListener("click", e.handleDownload.bind(e, "csv"));
    }));
    for (var t = 0; t < this.t.customIcons.length; t++) this.elCustomIcons[t].addEventListener("click", this.t.customIcons[t].click.bind(this, this.ctx, this.ctx.w));
  } }, { key: "toggleZoomSelection", value: function(e) {
    this.ctx.getSyncedCharts().forEach((function(t) {
      t.ctx.toolbar.toggleOtherControls();
      var i = e === "selection" ? t.ctx.toolbar.elSelection : t.ctx.toolbar.elZoom, a = e === "selection" ? "selectionEnabled" : "zoomEnabled";
      t.w.globals[a] = !t.w.globals[a], i.classList.contains(t.ctx.toolbar.selectedClass) ? i.classList.remove(t.ctx.toolbar.selectedClass) : i.classList.add(t.ctx.toolbar.selectedClass);
    }));
  } }, { key: "getToolbarIconsReference", value: function() {
    var e = this.w;
    this.elZoom || (this.elZoom = e.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = e.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = e.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"));
  } }, { key: "enableZoomPanFromToolbar", value: function(e) {
    this.toggleOtherControls(), e === "pan" ? this.w.globals.panEnabled = !0 : this.w.globals.zoomEnabled = !0;
    var t = e === "pan" ? this.elPan : this.elZoom, i = e === "pan" ? this.elZoom : this.elPan;
    t && t.classList.add(this.selectedClass), i && i.classList.remove(this.selectedClass);
  } }, { key: "togglePanning", value: function() {
    this.ctx.getSyncedCharts().forEach((function(e) {
      e.ctx.toolbar.toggleOtherControls(), e.w.globals.panEnabled = !e.w.globals.panEnabled, e.ctx.toolbar.elPan.classList.contains(e.ctx.toolbar.selectedClass) ? e.ctx.toolbar.elPan.classList.remove(e.ctx.toolbar.selectedClass) : e.ctx.toolbar.elPan.classList.add(e.ctx.toolbar.selectedClass);
    }));
  } }, { key: "toggleOtherControls", value: function() {
    var e = this, t = this.w;
    t.globals.panEnabled = !1, t.globals.zoomEnabled = !1, t.globals.selectionEnabled = !1, this.getToolbarIconsReference(), [this.elPan, this.elSelection, this.elZoom].forEach((function(i) {
      i && i.classList.remove(e.selectedClass);
    }));
  } }, { key: "handleZoomIn", value: function() {
    var e = this.w;
    e.globals.isRangeBar && (this.minX = e.globals.minY, this.maxX = e.globals.maxY);
    var t = (this.minX + this.maxX) / 2, i = (this.minX + t) / 2, a = (this.maxX + t) / 2, s = this._getNewMinXMaxX(i, a);
    e.globals.disableZoomIn || this.zoomUpdateOptions(s.minX, s.maxX);
  } }, { key: "handleZoomOut", value: function() {
    var e = this.w;
    if (e.globals.isRangeBar && (this.minX = e.globals.minY, this.maxX = e.globals.maxY), !(e.config.xaxis.type === "datetime" && new Date(this.minX).getUTCFullYear() < 1e3)) {
      var t = (this.minX + this.maxX) / 2, i = this.minX - (t - this.minX), a = this.maxX - (t - this.maxX), s = this._getNewMinXMaxX(i, a);
      e.globals.disableZoomOut || this.zoomUpdateOptions(s.minX, s.maxX);
    }
  } }, { key: "_getNewMinXMaxX", value: function(e, t) {
    var i = this.w.config.xaxis.convertedCatToNumeric;
    return { minX: i ? Math.floor(e) : e, maxX: i ? Math.floor(t) : t };
  } }, { key: "zoomUpdateOptions", value: function(e, t) {
    var i = this.w;
    if (e !== void 0 || t !== void 0) {
      if (!(i.config.xaxis.convertedCatToNumeric && (e < 1 && (e = 1, t = i.globals.dataPoints), t - e < 2))) {
        var a = { min: e, max: t }, s = this.getBeforeZoomRange(a);
        s && (a = s.xaxis);
        var r = { xaxis: a }, o = L.clone(i.globals.initialConfig.yaxis);
        i.config.chart.group || (r.yaxis = o), this.w.globals.zoomed = !0, this.ctx.updateHelpers._updateOptions(r, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(a, o);
      }
    } else this.handleZoomReset();
  } }, { key: "zoomCallback", value: function(e, t) {
    typeof this.ev.zoomed == "function" && (this.ev.zoomed(this.ctx, { xaxis: e, yaxis: t }), this.ctx.events.fireEvent("zoomed", { xaxis: e, yaxis: t }));
  } }, { key: "getBeforeZoomRange", value: function(e, t) {
    var i = null;
    return typeof this.ev.beforeZoom == "function" && (i = this.ev.beforeZoom(this, { xaxis: e, yaxis: t })), i;
  } }, { key: "toggleMenu", value: function() {
    var e = this;
    window.setTimeout((function() {
      e.elMenu.classList.contains("apexcharts-menu-open") ? e.elMenu.classList.remove("apexcharts-menu-open") : e.elMenu.classList.add("apexcharts-menu-open");
    }), 0);
  } }, { key: "handleDownload", value: function(e) {
    var t = this.w, i = new Yt(this.ctx);
    switch (e) {
      case "svg":
        i.exportToSVG(this.ctx);
        break;
      case "png":
        i.exportToPng(this.ctx);
        break;
      case "csv":
        i.exportToCSV({ series: t.config.series, columnDelimiter: t.config.chart.toolbar.export.csv.columnDelimiter });
    }
  } }, { key: "handleZoomReset", value: function(e) {
    this.ctx.getSyncedCharts().forEach((function(t) {
      var i = t.w;
      if (i.globals.lastXAxis.min = i.globals.initialConfig.xaxis.min, i.globals.lastXAxis.max = i.globals.initialConfig.xaxis.max, t.updateHelpers.revertDefaultAxisMinMax(), typeof i.config.chart.events.beforeResetZoom == "function") {
        var a = i.config.chart.events.beforeResetZoom(t, i);
        a && t.updateHelpers.revertDefaultAxisMinMax(a);
      }
      typeof i.config.chart.events.zoomed == "function" && t.ctx.toolbar.zoomCallback({ min: i.config.xaxis.min, max: i.config.xaxis.max }), i.globals.zoomed = !1;
      var s = t.ctx.series.emptyCollapsedSeries(L.clone(i.globals.initialSeries));
      t.updateHelpers._updateSeries(s, i.config.chart.animations.dynamicAnimation.enabled);
    }));
  } }, { key: "destroy", value: function() {
    this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null;
  } }]), n;
})(), Qo = (function(n) {
  Gt(t, fr);
  var e = Bt(t);
  function t(i) {
    var a;
    return q(this, t), (a = e.call(this, i)).ctx = i, a.w = i.w, a.dragged = !1, a.graphics = new X(a.ctx), a.eventList = ["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend", "wheel"], a.clientX = 0, a.clientY = 0, a.startX = 0, a.endX = 0, a.dragX = 0, a.startY = 0, a.endY = 0, a.dragY = 0, a.moveDirection = "none", a.debounceTimer = null, a.debounceDelay = 100, a.wheelDelay = 400, a;
  }
  return $(t, [{ key: "init", value: function(i) {
    var a = this, s = i.xyRatios, r = this.w, o = this;
    this.xyRatios = s, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = r.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.constraints = new Me(0, 0, r.globals.gridWidth, r.globals.gridHeight), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), r.globals.dom.Paper.add(this.zoomRect), r.globals.dom.Paper.add(this.selectionRect), r.config.chart.selection.type === "x" ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, minY: 0, maxX: r.globals.gridWidth, maxY: r.globals.gridHeight }).on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")) : r.config.chart.selection.type === "y" ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, maxX: r.globals.gridWidth }).on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = r.globals.dom.baseEl.querySelector("".concat(r.globals.chartClass, " .apexcharts-svg")), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach((function(l) {
      a.hoverArea.addEventListener(l, o.svgMouseEvents.bind(o, s), { capture: !1, passive: !0 });
    })), r.config.chart.zoom.enabled && r.config.chart.zoom.allowMouseWheelZoom && this.hoverArea.addEventListener("wheel", o.mouseWheelEvent.bind(o), { capture: !1, passive: !1 });
  } }, { key: "destroy", value: function() {
    this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null;
  } }, { key: "svgMouseEvents", value: function(i, a) {
    var s = this.w, r = this.ctx.toolbar, o = s.globals.zoomEnabled ? s.config.chart.zoom.type : s.config.chart.selection.type, l = s.config.chart.toolbar.autoSelected;
    if (a.shiftKey ? (this.shiftWasPressed = !0, r.enableZoomPanFromToolbar(l === "pan" ? "zoom" : "pan")) : this.shiftWasPressed && (r.enableZoomPanFromToolbar(l), this.shiftWasPressed = !1), a.target) {
      var h, c = a.target.classList;
      if (a.target.parentNode && a.target.parentNode !== null && (h = a.target.parentNode.classList), !(c.contains("apexcharts-legend-marker") || c.contains("apexcharts-legend-text") || h && h.contains("apexcharts-toolbar"))) {
        if (this.clientX = a.type === "touchmove" || a.type === "touchstart" ? a.touches[0].clientX : a.type === "touchend" ? a.changedTouches[0].clientX : a.clientX, this.clientY = a.type === "touchmove" || a.type === "touchstart" ? a.touches[0].clientY : a.type === "touchend" ? a.changedTouches[0].clientY : a.clientY, a.type === "mousedown" && a.which === 1 || a.type === "touchstart") {
          var d = this.gridRect.getBoundingClientRect();
          this.startX = this.clientX - d.left - s.globals.barPadForNumericAxis, this.startY = this.clientY - d.top, this.dragged = !1, this.w.globals.mousedown = !0;
        }
        (a.type === "mousemove" && a.which === 1 || a.type === "touchmove") && (this.dragged = !0, s.globals.panEnabled ? (s.globals.selection = null, this.w.globals.mousedown && this.panDragging({ context: this, zoomtype: o, xyRatios: i })) : (this.w.globals.mousedown && s.globals.zoomEnabled || this.w.globals.mousedown && s.globals.selectionEnabled) && (this.selection = this.selectionDrawing({ context: this, zoomtype: o }))), a.type !== "mouseup" && a.type !== "touchend" && a.type !== "mouseleave" || this.handleMouseUp({ zoomtype: o }), this.makeSelectionRectDraggable();
      }
    }
  } }, { key: "handleMouseUp", value: function(i) {
    var a, s = i.zoomtype, r = i.isResized, o = this.w, l = (a = this.gridRect) === null || a === void 0 ? void 0 : a.getBoundingClientRect();
    l && (this.w.globals.mousedown || r) && (this.endX = this.clientX - l.left - o.globals.barPadForNumericAxis, this.endY = this.clientY - l.top, this.dragX = Math.abs(this.endX - this.startX), this.dragY = Math.abs(this.endY - this.startY), (o.globals.zoomEnabled || o.globals.selectionEnabled) && this.selectionDrawn({ context: this, zoomtype: s })), o.globals.zoomEnabled && this.hideSelectionRect(this.selectionRect), this.dragged = !1, this.w.globals.mousedown = !1;
  } }, { key: "mouseWheelEvent", value: function(i) {
    var a = this, s = this.w;
    i.preventDefault();
    var r = Date.now();
    r - s.globals.lastWheelExecution > this.wheelDelay && (this.executeMouseWheelZoom(i), s.globals.lastWheelExecution = r), this.debounceTimer && clearTimeout(this.debounceTimer), this.debounceTimer = setTimeout((function() {
      r - s.globals.lastWheelExecution > a.wheelDelay && (a.executeMouseWheelZoom(i), s.globals.lastWheelExecution = r);
    }), this.debounceDelay);
  } }, { key: "executeMouseWheelZoom", value: function(i) {
    var a, s = this.w;
    this.minX = s.globals.isRangeBar ? s.globals.minY : s.globals.minX, this.maxX = s.globals.isRangeBar ? s.globals.maxY : s.globals.maxX;
    var r = (a = this.gridRect) === null || a === void 0 ? void 0 : a.getBoundingClientRect();
    if (r) {
      var o, l, h, c = (i.clientX - r.left) / r.width, d = this.minX, u = this.maxX, g = u - d;
      if (i.deltaY < 0) {
        var p = d + c * g;
        l = p - (o = 0.5 * g) / 2, h = p + o / 2;
      } else l = d - (o = 1.5 * g) / 2, h = u + o / 2;
      if (!s.globals.isRangeBar) {
        l = Math.max(l, s.globals.initialMinX), h = Math.min(h, s.globals.initialMaxX);
        var f = 0.01 * (s.globals.initialMaxX - s.globals.initialMinX);
        if (h - l < f) {
          var x = (l + h) / 2;
          l = x - f / 2, h = x + f / 2;
        }
      }
      var b = this._getNewMinXMaxX(l, h);
      isNaN(b.minX) || isNaN(b.maxX) || this.zoomUpdateOptions(b.minX, b.maxX);
    }
  } }, { key: "makeSelectionRectDraggable", value: function() {
    var i = this, a = this.w;
    if (this.selectionRect) {
      var s = this.selectionRect.node.getBoundingClientRect();
      s.width > 0 && s.height > 0 && (this.selectionRect.select(!1).resize(!1), this.selectionRect.select({ createRot: function() {
      }, updateRot: function() {
      }, createHandle: function(r, o, l, h, c) {
        return c === "l" || c === "r" ? r.circle(8).css({ "stroke-width": 1, stroke: "#333", fill: "#fff" }) : r.circle(0);
      }, updateHandle: function(r, o) {
        return r.center(o[0], o[1]);
      } }).resize().on("resize", (function() {
        var r = a.globals.zoomEnabled ? a.config.chart.zoom.type : a.config.chart.selection.type;
        i.handleMouseUp({ zoomtype: r, isResized: !0 });
      })));
    }
  } }, { key: "preselectedSelection", value: function() {
    var i = this.w, a = this.xyRatios;
    if (!i.globals.zoomEnabled) {
      if (i.globals.selection !== void 0 && i.globals.selection !== null) this.drawSelectionRect(D(D({}, i.globals.selection), {}, { translateX: i.globals.translateX, translateY: i.globals.translateY }));
      else if (i.config.chart.selection.xaxis.min !== void 0 && i.config.chart.selection.xaxis.max !== void 0) {
        var s = (i.config.chart.selection.xaxis.min - i.globals.minX) / a.xRatio, r = i.globals.gridWidth - (i.globals.maxX - i.config.chart.selection.xaxis.max) / a.xRatio - s;
        i.globals.isRangeBar && (s = (i.config.chart.selection.xaxis.min - i.globals.yAxisScale[0].niceMin) / a.invertedYRatio, r = (i.config.chart.selection.xaxis.max - i.config.chart.selection.xaxis.min) / a.invertedYRatio);
        var o = { x: s, y: 0, width: r, height: i.globals.gridHeight, translateX: i.globals.translateX, translateY: i.globals.translateY, selectionEnabled: !0 };
        this.drawSelectionRect(o), this.makeSelectionRectDraggable(), typeof i.config.chart.events.selection == "function" && i.config.chart.events.selection(this.ctx, { xaxis: { min: i.config.chart.selection.xaxis.min, max: i.config.chart.selection.xaxis.max }, yaxis: {} });
      }
    }
  } }, { key: "drawSelectionRect", value: function(i) {
    var a = i.x, s = i.y, r = i.width, o = i.height, l = i.translateX, h = l === void 0 ? 0 : l, c = i.translateY, d = c === void 0 ? 0 : c, u = this.w, g = this.zoomRect, p = this.selectionRect;
    if (this.dragged || u.globals.selection !== null) {
      var f = { transform: "translate(" + h + ", " + d + ")" };
      u.globals.zoomEnabled && this.dragged && (r < 0 && (r = 1), g.attr({ x: a, y: s, width: r, height: o, fill: u.config.chart.zoom.zoomedArea.fill.color, "fill-opacity": u.config.chart.zoom.zoomedArea.fill.opacity, stroke: u.config.chart.zoom.zoomedArea.stroke.color, "stroke-width": u.config.chart.zoom.zoomedArea.stroke.width, "stroke-opacity": u.config.chart.zoom.zoomedArea.stroke.opacity }), X.setAttrs(g.node, f)), u.globals.selectionEnabled && (p.attr({ x: a, y: s, width: r > 0 ? r : 0, height: o > 0 ? o : 0, fill: u.config.chart.selection.fill.color, "fill-opacity": u.config.chart.selection.fill.opacity, stroke: u.config.chart.selection.stroke.color, "stroke-width": u.config.chart.selection.stroke.width, "stroke-dasharray": u.config.chart.selection.stroke.dashArray, "stroke-opacity": u.config.chart.selection.stroke.opacity }), X.setAttrs(p.node, f));
    }
  } }, { key: "hideSelectionRect", value: function(i) {
    i && i.attr({ x: 0, y: 0, width: 0, height: 0 });
  } }, { key: "selectionDrawing", value: function(i) {
    var a = i.context, s = i.zoomtype, r = this.w, o = a, l = this.gridRect.getBoundingClientRect(), h = o.startX - 1, c = o.startY, d = !1, u = !1, g = o.clientX - l.left - r.globals.barPadForNumericAxis, p = o.clientY - l.top, f = g - h, x = p - c, b = { translateX: r.globals.translateX, translateY: r.globals.translateY };
    return Math.abs(f + h) > r.globals.gridWidth ? f = r.globals.gridWidth - h : g < 0 && (f = h), h > g && (d = !0, f = Math.abs(f)), c > p && (u = !0, x = Math.abs(x)), b = D(D({}, b = s === "x" ? { x: d ? h - f : h, y: 0, width: f, height: r.globals.gridHeight } : s === "y" ? { x: 0, y: u ? c - x : c, width: r.globals.gridWidth, height: x } : { x: d ? h - f : h, y: u ? c - x : c, width: f, height: x }), {}, { translateX: r.globals.translateX, translateY: r.globals.translateY }), o.drawSelectionRect(b), o.selectionDragging("resizing"), b;
  } }, { key: "selectionDragging", value: function(i, a) {
    var s = this, r = this.w;
    if (a) {
      a.preventDefault();
      var o = a.detail, l = o.handler, h = o.box, c = h.x, d = h.y;
      c < this.constraints.x && (c = this.constraints.x), d < this.constraints.y && (d = this.constraints.y), h.x2 > this.constraints.x2 && (c = this.constraints.x2 - h.w), h.y2 > this.constraints.y2 && (d = this.constraints.y2 - h.h), l.move(c, d);
      var u = this.xyRatios, g = this.selectionRect, p = 0;
      i === "resizing" && (p = 30);
      var f = function(b) {
        return parseFloat(g.node.getAttribute(b));
      }, x = { x: f("x"), y: f("y"), width: f("width"), height: f("height") };
      r.globals.selection = x, typeof r.config.chart.events.selection == "function" && r.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout((function() {
        var b, m, y, w, v = s.gridRect.getBoundingClientRect(), C = g.node.getBoundingClientRect();
        r.globals.isRangeBar ? (b = r.globals.yAxisScale[0].niceMin + (C.left - v.left) * u.invertedYRatio, m = r.globals.yAxisScale[0].niceMin + (C.right - v.left) * u.invertedYRatio, y = 0, w = 1) : (b = r.globals.xAxisScale.niceMin + (C.left - v.left) * u.xRatio, m = r.globals.xAxisScale.niceMin + (C.right - v.left) * u.xRatio, y = r.globals.yAxisScale[0].niceMin + (v.bottom - C.bottom) * u.yRatio[0], w = r.globals.yAxisScale[0].niceMax - (C.top - v.top) * u.yRatio[0]);
        var k = { xaxis: { min: b, max: m }, yaxis: { min: y, max: w } };
        r.config.chart.events.selection(s.ctx, k), r.config.chart.brush.enabled && r.config.chart.events.brushScrolled !== void 0 && r.config.chart.events.brushScrolled(s.ctx, k);
      }), p));
    }
  } }, { key: "selectionDrawn", value: function(i) {
    var a, s, r = i.context, o = i.zoomtype, l = this.w, h = r, c = this.xyRatios, d = this.ctx.toolbar, u = l.globals.zoomEnabled ? h.zoomRect.node.getBoundingClientRect() : h.selectionRect.node.getBoundingClientRect(), g = h.gridRect.getBoundingClientRect(), p = u.left - g.left - l.globals.barPadForNumericAxis, f = u.right - g.left - l.globals.barPadForNumericAxis, x = u.top - g.top, b = u.bottom - g.top;
    l.globals.isRangeBar ? (a = l.globals.yAxisScale[0].niceMin + p * c.invertedYRatio, s = l.globals.yAxisScale[0].niceMin + f * c.invertedYRatio) : (a = l.globals.xAxisScale.niceMin + p * c.xRatio, s = l.globals.xAxisScale.niceMin + f * c.xRatio);
    var m = [], y = [];
    if (l.config.yaxis.forEach((function(P, T) {
      var I = l.globals.seriesYAxisMap[T][0], R = l.globals.yAxisScale[T].niceMax - c.yRatio[I] * x, z = l.globals.yAxisScale[T].niceMax - c.yRatio[I] * b;
      m.push(R), y.push(z);
    })), h.dragged && (h.dragX > 10 || h.dragY > 10) && a !== s) {
      if (l.globals.zoomEnabled) {
        var w = L.clone(l.globals.initialConfig.yaxis), v = L.clone(l.globals.initialConfig.xaxis);
        if (l.globals.zoomed = !0, l.config.xaxis.convertedCatToNumeric && (a = Math.floor(a), s = Math.floor(s), a < 1 && (a = 1, s = l.globals.dataPoints), s - a < 2 && (s = a + 1)), o !== "xy" && o !== "x" || (v = { min: a, max: s }), o !== "xy" && o !== "y" || w.forEach((function(P, T) {
          w[T].min = y[T], w[T].max = m[T];
        })), d) {
          var C = d.getBeforeZoomRange(v, w);
          C && (v = C.xaxis ? C.xaxis : v, w = C.yaxis ? C.yaxis : w);
        }
        var k = { xaxis: v };
        l.config.chart.group || (k.yaxis = w), h.ctx.updateHelpers._updateOptions(k, !1, h.w.config.chart.animations.dynamicAnimation.enabled), typeof l.config.chart.events.zoomed == "function" && d.zoomCallback(v, w);
      } else if (l.globals.selectionEnabled) {
        var A, S = null;
        A = { min: a, max: s }, o !== "xy" && o !== "y" || (S = L.clone(l.config.yaxis)).forEach((function(P, T) {
          S[T].min = y[T], S[T].max = m[T];
        })), l.globals.selection = h.selection, typeof l.config.chart.events.selection == "function" && l.config.chart.events.selection(h.ctx, { xaxis: A, yaxis: S });
      }
    }
  } }, { key: "panDragging", value: function(i) {
    var a = i.context, s = this.w, r = a;
    if (s.globals.lastClientPosition.x !== void 0) {
      var o = s.globals.lastClientPosition.x - r.clientX, l = s.globals.lastClientPosition.y - r.clientY;
      Math.abs(o) > Math.abs(l) && o > 0 ? this.moveDirection = "left" : Math.abs(o) > Math.abs(l) && o < 0 ? this.moveDirection = "right" : Math.abs(l) > Math.abs(o) && l > 0 ? this.moveDirection = "up" : Math.abs(l) > Math.abs(o) && l < 0 && (this.moveDirection = "down");
    }
    s.globals.lastClientPosition = { x: r.clientX, y: r.clientY };
    var h = s.globals.isRangeBar ? s.globals.minY : s.globals.minX, c = s.globals.isRangeBar ? s.globals.maxY : s.globals.maxX;
    r.panScrolled(h, c);
  } }, { key: "panScrolled", value: function(i, a) {
    var s = this.w, r = this.xyRatios, o = L.clone(s.globals.initialConfig.yaxis), l = r.xRatio, h = s.globals.minX, c = s.globals.maxX;
    s.globals.isRangeBar && (l = r.invertedYRatio, h = s.globals.minY, c = s.globals.maxY), this.moveDirection === "left" ? (i = h + s.globals.gridWidth / 15 * l, a = c + s.globals.gridWidth / 15 * l) : this.moveDirection === "right" && (i = h - s.globals.gridWidth / 15 * l, a = c - s.globals.gridWidth / 15 * l), s.globals.isRangeBar || (i < s.globals.initialMinX || a > s.globals.initialMaxX) && (i = h, a = c);
    var d = { xaxis: { min: i, max: a } };
    s.config.chart.group || (d.yaxis = o), this.updateScrolledChart(d, i, a);
  } }, { key: "updateScrolledChart", value: function(i, a, s) {
    var r = this.w;
    if (this.ctx.updateHelpers._updateOptions(i, !1, !1), typeof r.config.chart.events.scrolled == "function") {
      var o = { xaxis: { min: a, max: s } };
      r.config.chart.events.scrolled(this.ctx, o), this.ctx.events.fireEvent("scrolled", o);
    }
  } }]), t;
})(), pr = (function() {
  function n(e) {
    q(this, n), this.w = e.w, this.ttCtx = e, this.ctx = e.ctx;
  }
  return $(n, [{ key: "getNearestValues", value: function(e) {
    var t = e.hoverArea, i = e.elGrid, a = e.clientX, s = e.clientY, r = this.w, o = i.getBoundingClientRect(), l = o.width, h = o.height, c = l / (r.globals.dataPoints - 1), d = h / r.globals.dataPoints, u = this.hasBars();
    !r.globals.comboCharts && !u || r.config.xaxis.convertedCatToNumeric || (c = l / r.globals.dataPoints);
    var g = a - o.left - r.globals.barPadForNumericAxis, p = s - o.top;
    g < 0 || p < 0 || g > l || p > h ? (t.classList.remove("hovering-zoom"), t.classList.remove("hovering-pan")) : r.globals.zoomEnabled ? (t.classList.remove("hovering-pan"), t.classList.add("hovering-zoom")) : r.globals.panEnabled && (t.classList.remove("hovering-zoom"), t.classList.add("hovering-pan"));
    var f = Math.round(g / c), x = Math.floor(p / d);
    u && !r.config.xaxis.convertedCatToNumeric && (f = Math.ceil(g / c), f -= 1);
    var b = null, m = null, y = r.globals.seriesXvalues.map((function(A) {
      return A.filter((function(S) {
        return L.isNumber(S);
      }));
    })), w = r.globals.seriesYvalues.map((function(A) {
      return A.filter((function(S) {
        return L.isNumber(S);
      }));
    }));
    if (r.globals.isXNumeric) {
      var v = this.ttCtx.getElGrid().getBoundingClientRect(), C = g * (v.width / l), k = p * (v.height / h);
      b = (m = this.closestInMultiArray(C, k, y, w)).index, f = m.j, b !== null && r.globals.hasNullValues && (y = r.globals.seriesXvalues[b], f = (m = this.closestInArray(C, y)).j);
    }
    return r.globals.capturedSeriesIndex = b === null ? -1 : b, (!f || f < 1) && (f = 0), r.globals.isBarHorizontal ? r.globals.capturedDataPointIndex = x : r.globals.capturedDataPointIndex = f, { capturedSeries: b, j: r.globals.isBarHorizontal ? x : f, hoverX: g, hoverY: p };
  } }, { key: "getFirstActiveXArray", value: function(e) {
    for (var t = this.w, i = 0, a = e.map((function(r, o) {
      return r.length > 0 ? o : -1;
    })), s = 0; s < a.length; s++) if (a[s] !== -1 && t.globals.collapsedSeriesIndices.indexOf(s) === -1 && t.globals.ancillaryCollapsedSeriesIndices.indexOf(s) === -1) {
      i = a[s];
      break;
    }
    return i;
  } }, { key: "closestInMultiArray", value: function(e, t, i, a) {
    for (var s, r = this.w, o = 1 / 0, l = null, h = null, c = 0; c < i.length; c++) if (s = c, r.globals.collapsedSeriesIndices.indexOf(s) === -1 && r.globals.ancillaryCollapsedSeriesIndices.indexOf(s) === -1) for (var d = i[c], u = a[c], g = Math.min(d.length, u.length), p = 0; p < g; p++) {
      var f = e - d[p], x = Math.sqrt(f * f);
      if (!r.globals.allSeriesHasEqualX) {
        var b = t - u[p];
        x = Math.sqrt(f * f + b * b);
      }
      x < o && (o = x, l = c, h = p);
    }
    return { index: l, j: h };
  } }, { key: "closestInArray", value: function(e, t) {
    for (var i = t[0], a = null, s = Math.abs(e - i), r = 0; r < t.length; r++) {
      var o = Math.abs(e - t[r]);
      o < s && (s = o, a = r);
    }
    return { j: a };
  } }, { key: "isXoverlap", value: function(e) {
    var t = [], i = this.w.globals.seriesX.filter((function(s) {
      return s[0] !== void 0;
    }));
    if (i.length > 0) for (var a = 0; a < i.length - 1; a++) i[a][e] !== void 0 && i[a + 1][e] !== void 0 && i[a][e] !== i[a + 1][e] && t.push("unEqual");
    return t.length === 0;
  } }, { key: "isInitialSeriesSameLen", value: function() {
    for (var e = !0, t = this.w.globals.initialSeries, i = 0; i < t.length - 1; i++) if (t[i].data.length !== t[i + 1].data.length) {
      e = !1;
      break;
    }
    return e;
  } }, { key: "getBarsHeight", value: function(e) {
    return Ee(e).reduce((function(t, i) {
      return t + i.getBBox().height;
    }), 0);
  } }, { key: "getElMarkers", value: function(e) {
    return typeof e == "number" ? this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:realIndex='".concat(e, "'] .apexcharts-series-markers-wrap > *")) : this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap > *");
  } }, { key: "getAllMarkers", value: function() {
    var e = this, t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], i = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");
    i = Ee(i), t && (i = i.filter((function(s) {
      var r = Number(s.getAttribute("data:realIndex"));
      return e.w.globals.collapsedSeriesIndices.indexOf(r) === -1;
    }))), i.sort((function(s, r) {
      var o = Number(s.getAttribute("data:realIndex")), l = Number(r.getAttribute("data:realIndex"));
      return l < o ? 1 : l > o ? -1 : 0;
    }));
    var a = [];
    return i.forEach((function(s) {
      a.push(s.querySelector(".apexcharts-marker"));
    })), a;
  } }, { key: "hasMarkers", value: function(e) {
    return this.getElMarkers(e).length > 0;
  } }, { key: "getPathFromPoint", value: function(e, t) {
    var i = Number(e.getAttribute("cx")), a = Number(e.getAttribute("cy")), s = e.getAttribute("shape");
    return new X(this.ctx).getMarkerPath(i, a, s, t);
  } }, { key: "getElBars", value: function() {
    return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series");
  } }, { key: "hasBars", value: function() {
    return this.getElBars().length > 0;
  } }, { key: "getHoverMarkerSize", value: function(e) {
    var t = this.w, i = t.config.markers.hover.size;
    return i === void 0 && (i = t.globals.markers.size[e] + t.config.markers.hover.sizeOffset), i;
  } }, { key: "toggleAllTooltipSeriesGroups", value: function(e) {
    var t = this.w, i = this.ttCtx;
    i.allTooltipSeriesGroups.length === 0 && (i.allTooltipSeriesGroups = t.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
    for (var a = i.allTooltipSeriesGroups, s = 0; s < a.length; s++) e === "enable" ? (a[s].classList.add("apexcharts-active"), a[s].style.display = t.config.tooltip.items.display) : (a[s].classList.remove("apexcharts-active"), a[s].style.display = "none");
  } }]), n;
})(), el = (function() {
  function n(e) {
    q(this, n), this.w = e.w, this.ctx = e.ctx, this.ttCtx = e, this.tooltipUtil = new pr(e);
  }
  return $(n, [{ key: "drawSeriesTexts", value: function(e) {
    var t = e.shared, i = t === void 0 || t, a = e.ttItems, s = e.i, r = s === void 0 ? 0 : s, o = e.j, l = o === void 0 ? null : o, h = e.y1, c = e.y2, d = e.e, u = this.w;
    u.config.tooltip.custom !== void 0 ? this.handleCustomTooltip({ i: r, j: l, y1: h, y2: c, w: u }) : this.toggleActiveInactiveSeries(i, r);
    var g = this.getValuesToPrint({ i: r, j: l });
    this.printLabels({ i: r, j: l, values: g, ttItems: a, shared: i, e: d });
    var p = this.ttCtx.getElTooltip();
    this.ttCtx.tooltipRect.ttWidth = p.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = p.getBoundingClientRect().height;
  } }, { key: "printLabels", value: function(e) {
    var t, i = this, a = e.i, s = e.j, r = e.values, o = e.ttItems, l = e.shared, h = e.e, c = this.w, d = [], u = function(v) {
      return c.globals.seriesGoals[v] && c.globals.seriesGoals[v][s] && Array.isArray(c.globals.seriesGoals[v][s]);
    }, g = r.xVal, p = r.zVal, f = r.xAxisTTVal, x = "", b = c.globals.colors[a];
    s !== null && c.config.plotOptions.bar.distributed && (b = c.globals.colors[s]);
    for (var m = function(v, C) {
      var k = i.getFormatters(a);
      x = i.getSeriesName({ fn: k.yLbTitleFormatter, index: a, seriesIndex: a, j: s }), c.config.chart.type === "treemap" && (x = k.yLbTitleFormatter(String(c.config.series[a].data[s].x), { series: c.globals.series, seriesIndex: a, dataPointIndex: s, w: c }));
      var A = c.config.tooltip.inverseOrder ? C : v;
      if (c.globals.axisCharts) {
        var S = function(I) {
          var R, z, Y, N;
          return c.globals.isRangeData ? k.yLbFormatter((R = c.globals.seriesRangeStart) === null || R === void 0 || (z = R[I]) === null || z === void 0 ? void 0 : z[s], { series: c.globals.seriesRangeStart, seriesIndex: I, dataPointIndex: s, w: c }) + " - " + k.yLbFormatter((Y = c.globals.seriesRangeEnd) === null || Y === void 0 || (N = Y[I]) === null || N === void 0 ? void 0 : N[s], { series: c.globals.seriesRangeEnd, seriesIndex: I, dataPointIndex: s, w: c }) : k.yLbFormatter(c.globals.series[I][s], { series: c.globals.series, seriesIndex: I, dataPointIndex: s, w: c });
        };
        if (l) k = i.getFormatters(A), x = i.getSeriesName({ fn: k.yLbTitleFormatter, index: A, seriesIndex: a, j: s }), b = c.globals.colors[A], t = S(A), u(A) && (d = c.globals.seriesGoals[A][s].map((function(I) {
          return { attrs: I, val: k.yLbFormatter(I.value, { seriesIndex: A, dataPointIndex: s, w: c }) };
        })));
        else {
          var P, T = h == null || (P = h.target) === null || P === void 0 ? void 0 : P.getAttribute("fill");
          T && (T.indexOf("url") !== -1 ? T.indexOf("Pattern") !== -1 && (b = c.globals.dom.baseEl.querySelector(T.substr(4).slice(0, -1)).childNodes[0].getAttribute("stroke")) : b = T), t = S(a), u(a) && Array.isArray(c.globals.seriesGoals[a][s]) && (d = c.globals.seriesGoals[a][s].map((function(I) {
            return { attrs: I, val: k.yLbFormatter(I.value, { seriesIndex: a, dataPointIndex: s, w: c }) };
          })));
        }
      }
      s === null && (t = k.yLbFormatter(c.globals.series[a], D(D({}, c), {}, { seriesIndex: a, dataPointIndex: a }))), i.DOMHandling({ i: a, t: A, j: s, ttItems: o, values: { val: t, goalVals: d, xVal: g, xAxisTTVal: f, zVal: p }, seriesName: x, shared: l, pColor: b });
    }, y = 0, w = c.globals.series.length - 1; y < c.globals.series.length; y++, w--) m(y, w);
  } }, { key: "getFormatters", value: function(e) {
    var t, i = this.w, a = i.globals.yLabelFormatters[e];
    return i.globals.ttVal !== void 0 ? Array.isArray(i.globals.ttVal) ? (a = i.globals.ttVal[e] && i.globals.ttVal[e].formatter, t = i.globals.ttVal[e] && i.globals.ttVal[e].title && i.globals.ttVal[e].title.formatter) : (a = i.globals.ttVal.formatter, typeof i.globals.ttVal.title.formatter == "function" && (t = i.globals.ttVal.title.formatter)) : t = i.config.tooltip.y.title.formatter, typeof a != "function" && (a = i.globals.yLabelFormatters[0] ? i.globals.yLabelFormatters[0] : function(s) {
      return s;
    }), typeof t != "function" && (t = function(s) {
      return s ? s + ": " : "";
    }), { yLbFormatter: a, yLbTitleFormatter: t };
  } }, { key: "getSeriesName", value: function(e) {
    var t = e.fn, i = e.index, a = e.seriesIndex, s = e.j, r = this.w;
    return t(String(r.globals.seriesNames[i]), { series: r.globals.series, seriesIndex: a, dataPointIndex: s, w: r });
  } }, { key: "DOMHandling", value: function(e) {
    e.i;
    var t = e.t, i = e.j, a = e.ttItems, s = e.values, r = e.seriesName, o = e.shared, l = e.pColor, h = this.w, c = this.ttCtx, d = s.val, u = s.goalVals, g = s.xVal, p = s.xAxisTTVal, f = s.zVal, x = null;
    x = a[t].children, h.config.tooltip.fillSeriesColor && (a[t].style.backgroundColor = l, x[0].style.display = "none"), c.showTooltipTitle && (c.tooltipTitle === null && (c.tooltipTitle = h.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), c.tooltipTitle.innerHTML = g), c.isXAxisTooltipEnabled && (c.xaxisTooltipText.innerHTML = p !== "" ? p : g);
    var b = a[t].querySelector(".apexcharts-tooltip-text-y-label");
    b && (b.innerHTML = r || "");
    var m = a[t].querySelector(".apexcharts-tooltip-text-y-value");
    m && (m.innerHTML = d !== void 0 ? d : ""), x[0] && x[0].classList.contains("apexcharts-tooltip-marker") && (h.config.tooltip.marker.fillColors && Array.isArray(h.config.tooltip.marker.fillColors) && (l = h.config.tooltip.marker.fillColors[t]), h.config.tooltip.fillSeriesColor ? x[0].style.backgroundColor = l : x[0].style.color = l), h.config.tooltip.marker.show || (x[0].style.display = "none");
    var y = a[t].querySelector(".apexcharts-tooltip-text-goals-label"), w = a[t].querySelector(".apexcharts-tooltip-text-goals-value");
    if (u.length && h.globals.seriesGoals[t]) {
      var v = function() {
        var A = "<div>", S = "<div>";
        u.forEach((function(P, T) {
          A += ' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(P.attrs.strokeColor, '; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(P.attrs.name, "</div>"), S += "<div>".concat(P.val, "</div>");
        })), y.innerHTML = A + "</div>", w.innerHTML = S + "</div>";
      };
      o ? h.globals.seriesGoals[t][i] && Array.isArray(h.globals.seriesGoals[t][i]) ? v() : (y.innerHTML = "", w.innerHTML = "") : v();
    } else y.innerHTML = "", w.innerHTML = "";
    if (f !== null && (a[t].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = h.config.tooltip.z.title, a[t].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = f !== void 0 ? f : ""), o && x[0]) {
      if (h.config.tooltip.hideEmptySeries) {
        var C = a[t].querySelector(".apexcharts-tooltip-marker"), k = a[t].querySelector(".apexcharts-tooltip-text");
        parseFloat(d) == 0 ? (C.style.display = "none", k.style.display = "none") : (C.style.display = "block", k.style.display = "block");
      }
      d == null || h.globals.ancillaryCollapsedSeriesIndices.indexOf(t) > -1 || h.globals.collapsedSeriesIndices.indexOf(t) > -1 || Array.isArray(c.tConfig.enabledOnSeries) && c.tConfig.enabledOnSeries.indexOf(t) === -1 ? x[0].parentNode.style.display = "none" : x[0].parentNode.style.display = h.config.tooltip.items.display;
    } else Array.isArray(c.tConfig.enabledOnSeries) && c.tConfig.enabledOnSeries.indexOf(t) === -1 && (x[0].parentNode.style.display = "none");
  } }, { key: "toggleActiveInactiveSeries", value: function(e, t) {
    var i = this.w;
    if (e) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
    else {
      this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
      var a = i.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group-".concat(t));
      a && (a.classList.add("apexcharts-active"), a.style.display = i.config.tooltip.items.display);
    }
  } }, { key: "getValuesToPrint", value: function(e) {
    var t = e.i, i = e.j, a = this.w, s = this.ctx.series.filteredSeriesX(), r = "", o = "", l = null, h = null, c = { series: a.globals.series, seriesIndex: t, dataPointIndex: i, w: a }, d = a.globals.ttZFormatter;
    i === null ? h = a.globals.series[t] : a.globals.isXNumeric && a.config.chart.type !== "treemap" ? (r = s[t][i], s[t].length === 0 && (r = s[this.tooltipUtil.getFirstActiveXArray(s)][i])) : r = new Ma(this.ctx).isFormatXY() ? a.config.series[t].data[i] !== void 0 ? a.config.series[t].data[i].x : "" : a.globals.labels[i] !== void 0 ? a.globals.labels[i] : "";
    var u = r;
    return a.globals.isXNumeric && a.config.xaxis.type === "datetime" ? r = new $t(this.ctx).xLabelFormat(a.globals.ttKeyFormatter, u, u, { i: void 0, dateFormatter: new Ie(this.ctx).formatDate, w: this.w }) : r = a.globals.isBarHorizontal ? a.globals.yLabelFormatters[0](u, c) : a.globals.xLabelFormatter(u, c), a.config.tooltip.x.formatter !== void 0 && (r = a.globals.ttKeyFormatter(u, c)), a.globals.seriesZ.length > 0 && a.globals.seriesZ[t].length > 0 && (l = d(a.globals.seriesZ[t][i], a)), o = typeof a.config.xaxis.tooltip.formatter == "function" ? a.globals.xaxisTooltipFormatter(u, c) : r, { val: Array.isArray(h) ? h.join(" ") : h, xVal: Array.isArray(r) ? r.join(" ") : r, xAxisTTVal: Array.isArray(o) ? o.join(" ") : o, zVal: l };
  } }, { key: "handleCustomTooltip", value: function(e) {
    var t = e.i, i = e.j, a = e.y1, s = e.y2, r = e.w, o = this.ttCtx.getElTooltip(), l = r.config.tooltip.custom;
    Array.isArray(l) && l[t] && (l = l[t]);
    var h = l({ ctx: this.ctx, series: r.globals.series, seriesIndex: t, dataPointIndex: i, y1: a, y2: s, w: r });
    typeof h == "string" || typeof h == "number" ? o.innerHTML = h : (h instanceof Element || typeof h.nodeName == "string") && (o.innerHTML = "", o.appendChild(h.cloneNode(!0)));
  } }]), n;
})(), xr = (function() {
  function n(e) {
    q(this, n), this.ttCtx = e, this.ctx = e.ctx, this.w = e.w;
  }
  return $(n, [{ key: "moveXCrosshairs", value: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, i = this.ttCtx, a = this.w, s = i.getElXCrosshairs(), r = e - i.xcrosshairsWidth / 2, o = a.globals.labels.slice().length;
    if (t !== null && (r = a.globals.gridWidth / o * t), s === null || a.globals.isBarHorizontal || (s.setAttribute("x", r), s.setAttribute("x1", r), s.setAttribute("x2", r), s.setAttribute("y2", a.globals.gridHeight), s.classList.add("apexcharts-active")), r < 0 && (r = 0), r > a.globals.gridWidth && (r = a.globals.gridWidth), i.isXAxisTooltipEnabled) {
      var l = r;
      a.config.xaxis.crosshairs.width !== "tickWidth" && a.config.xaxis.crosshairs.width !== "barWidth" || (l = r + i.xcrosshairsWidth / 2), this.moveXAxisTooltip(l);
    }
  } }, { key: "moveYCrosshairs", value: function(e) {
    var t = this.ttCtx;
    t.ycrosshairs !== null && X.setAttrs(t.ycrosshairs, { y1: e, y2: e }), t.ycrosshairsHidden !== null && X.setAttrs(t.ycrosshairsHidden, { y1: e, y2: e });
  } }, { key: "moveXAxisTooltip", value: function(e) {
    var t = this.w, i = this.ttCtx;
    if (i.xaxisTooltip !== null && i.xcrosshairsWidth !== 0) {
      i.xaxisTooltip.classList.add("apexcharts-active");
      var a = i.xaxisOffY + t.config.xaxis.tooltip.offsetY + t.globals.translateY + 1 + t.config.xaxis.offsetY;
      if (e -= i.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(e)) {
        e += t.globals.translateX;
        var s;
        s = new X(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML), i.xaxisTooltipText.style.minWidth = s.width + "px", i.xaxisTooltip.style.left = e + "px", i.xaxisTooltip.style.top = a + "px";
      }
    }
  } }, { key: "moveYAxisTooltip", value: function(e) {
    var t = this.w, i = this.ttCtx;
    i.yaxisTTEls === null && (i.yaxisTTEls = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
    var a = parseInt(i.ycrosshairsHidden.getAttribute("y1"), 10), s = t.globals.translateY + a, r = i.yaxisTTEls[e].getBoundingClientRect(), o = r.height, l = t.globals.translateYAxisX[e] - 2;
    t.config.yaxis[e].opposite && (l -= r.width), s -= o / 2, t.globals.ignoreYAxisIndexes.indexOf(e) === -1 && s > 0 && s < t.globals.gridHeight ? (i.yaxisTTEls[e].classList.add("apexcharts-active"), i.yaxisTTEls[e].style.top = s + "px", i.yaxisTTEls[e].style.left = l + t.config.yaxis[e].tooltip.offsetX + "px") : i.yaxisTTEls[e].classList.remove("apexcharts-active");
  } }, { key: "moveTooltip", value: function(e, t) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a = this.w, s = this.ttCtx, r = s.getElTooltip(), o = s.tooltipRect, l = i !== null ? parseFloat(i) : 1, h = parseFloat(e) + l + 5, c = parseFloat(t) + l / 2;
    if (h > a.globals.gridWidth / 2 && (h = h - o.ttWidth - l - 10), h > a.globals.gridWidth - o.ttWidth - 10 && (h = a.globals.gridWidth - o.ttWidth), h < -20 && (h = -20), a.config.tooltip.followCursor) {
      var d = s.getElGrid().getBoundingClientRect();
      (h = s.e.clientX - d.left) > a.globals.gridWidth / 2 && (h -= s.tooltipRect.ttWidth), (c = s.e.clientY + a.globals.translateY - d.top) > a.globals.gridHeight / 2 && (c -= s.tooltipRect.ttHeight);
    } else a.globals.isBarHorizontal || o.ttHeight / 2 + c > a.globals.gridHeight && (c = a.globals.gridHeight - o.ttHeight + a.globals.translateY);
    isNaN(h) || (h += a.globals.translateX, r.style.left = h + "px", r.style.top = c + "px");
  } }, { key: "moveMarkers", value: function(e, t) {
    var i = this.w, a = this.ttCtx;
    if (i.globals.markers.size[e] > 0) for (var s = i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(e, "'] .apexcharts-marker")), r = 0; r < s.length; r++) parseInt(s[r].getAttribute("rel"), 10) === t && (a.marker.resetPointsSize(), a.marker.enlargeCurrentPoint(t, s[r]));
    else a.marker.resetPointsSize(), this.moveDynamicPointOnHover(t, e);
  } }, { key: "moveDynamicPointOnHover", value: function(e, t) {
    var i, a, s, r, o = this.w, l = this.ttCtx, h = new X(this.ctx), c = o.globals.pointsArray, d = l.tooltipUtil.getHoverMarkerSize(t), u = o.config.series[t].type;
    if (!u || u !== "column" && u !== "candlestick" && u !== "boxPlot") {
      s = (i = c[t][e]) === null || i === void 0 ? void 0 : i[0], r = ((a = c[t][e]) === null || a === void 0 ? void 0 : a[1]) || 0;
      var g = o.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t, "'] .apexcharts-series-markers path"));
      if (g && r < o.globals.gridHeight && r > 0) {
        var p = g.getAttribute("shape"), f = h.getMarkerPath(s, r, p, 1.5 * d);
        g.setAttribute("d", f);
      }
      this.moveXCrosshairs(s), l.fixedTooltip || this.moveTooltip(s, r, d);
    }
  } }, { key: "moveDynamicPointsOnHover", value: function(e) {
    var t, i = this.ttCtx, a = i.w, s = 0, r = 0, o = a.globals.pointsArray, l = new Ve(this.ctx), h = new X(this.ctx);
    t = l.getActiveConfigSeriesIndex("asc", ["line", "area", "scatter", "bubble"]);
    var c = i.tooltipUtil.getHoverMarkerSize(t);
    if (o[t] && (s = o[t][e][0], r = o[t][e][1]), !isNaN(s)) {
      var d = i.tooltipUtil.getAllMarkers();
      if (d.length) for (var u = 0; u < a.globals.series.length; u++) {
        var g = o[u];
        if (a.globals.comboCharts && g === void 0 && d.splice(u, 0, null), g && g.length) {
          var p = o[u][e][1], f = void 0;
          d[u].setAttribute("cx", s);
          var x = d[u].getAttribute("shape");
          if (a.config.chart.type === "rangeArea" && !a.globals.comboCharts) {
            var b = e + a.globals.series[u].length;
            f = o[u][b][1], p -= Math.abs(p - f) / 2;
          }
          if (p !== null && !isNaN(p) && p < a.globals.gridHeight + c && p + c > 0) {
            var m = h.getMarkerPath(s, p, x, c);
            d[u].setAttribute("d", m);
          } else d[u].setAttribute("d", "");
        }
      }
      this.moveXCrosshairs(s), i.fixedTooltip || this.moveTooltip(s, r || a.globals.gridHeight, c);
    }
  } }, { key: "moveStickyTooltipOverBars", value: function(e, t) {
    var i = this.w, a = this.ttCtx, s = i.globals.columnSeries ? i.globals.columnSeries.length : i.globals.series.length;
    i.config.chart.stacked && (s = i.globals.barGroups.length);
    var r = s >= 2 && s % 2 == 0 ? Math.floor(s / 2) : Math.floor(s / 2) + 1;
    i.globals.isBarHorizontal && (r = new Ve(this.ctx).getActiveConfigSeriesIndex("desc") + 1);
    var o = i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(r, "'] path[j='").concat(e, "'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(r, "'] path[j='").concat(e, "'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(r, "'] path[j='").concat(e, "'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(r, "'] path[j='").concat(e, "']"));
    o || typeof t != "number" || (o = i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[data\\:realIndex='".concat(t, "'] path[j='").concat(e, `'],
        .apexcharts-candlestick-series .apexcharts-series[data\\:realIndex='`).concat(t, "'] path[j='").concat(e, `'],
        .apexcharts-boxPlot-series .apexcharts-series[data\\:realIndex='`).concat(t, "'] path[j='").concat(e, `'],
        .apexcharts-rangebar-series .apexcharts-series[data\\:realIndex='`).concat(t, "'] path[j='").concat(e, "']")));
    var l = o ? parseFloat(o.getAttribute("cx")) : 0, h = o ? parseFloat(o.getAttribute("cy")) : 0, c = o ? parseFloat(o.getAttribute("barWidth")) : 0, d = a.getElGrid().getBoundingClientRect(), u = o && (o.classList.contains("apexcharts-candlestick-area") || o.classList.contains("apexcharts-boxPlot-area"));
    i.globals.isXNumeric ? (o && !u && (l -= s % 2 != 0 ? c / 2 : 0), o && u && (l -= c / 2)) : i.globals.isBarHorizontal || (l = a.xAxisTicksPositions[e - 1] + a.dataPointsDividedWidth / 2, isNaN(l) && (l = a.xAxisTicksPositions[e] - a.dataPointsDividedWidth / 2)), i.globals.isBarHorizontal ? h -= a.tooltipRect.ttHeight : i.config.tooltip.followCursor ? h = a.e.clientY - d.top - a.tooltipRect.ttHeight / 2 : h + a.tooltipRect.ttHeight + 15 > i.globals.gridHeight && (h = i.globals.gridHeight), i.globals.isBarHorizontal || this.moveXCrosshairs(l), a.fixedTooltip || this.moveTooltip(l, h || i.globals.gridHeight);
  } }]), n;
})(), tl = (function() {
  function n(e) {
    q(this, n), this.w = e.w, this.ttCtx = e, this.ctx = e.ctx, this.tooltipPosition = new xr(e);
  }
  return $(n, [{ key: "drawDynamicPoints", value: function() {
    var e = this.w, t = new X(this.ctx), i = new Tt(this.ctx), a = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
    a = Ee(a), e.config.chart.stacked && a.sort((function(d, u) {
      return parseFloat(d.getAttribute("data:realIndex")) - parseFloat(u.getAttribute("data:realIndex"));
    }));
    for (var s = 0; s < a.length; s++) {
      var r = a[s].querySelector(".apexcharts-series-markers-wrap");
      if (r !== null) {
        var o = void 0, l = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4));
        e.config.chart.type !== "line" && e.config.chart.type !== "area" || e.globals.comboCharts || e.config.tooltip.intersect || (l += " no-pointer-events");
        var h = i.getMarkerConfig({ cssClass: l, seriesIndex: Number(r.getAttribute("data:realIndex")) });
        (o = t.drawMarker(0, 0, h)).node.setAttribute("default-marker-size", 0);
        var c = document.createElementNS(e.globals.SVGNS, "g");
        c.classList.add("apexcharts-series-markers"), c.appendChild(o.node), r.appendChild(c);
      }
    }
  } }, { key: "enlargeCurrentPoint", value: function(e, t) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, s = this.w;
    s.config.chart.type !== "bubble" && this.newPointSize(e, t);
    var r = t.getAttribute("cx"), o = t.getAttribute("cy");
    if (i !== null && a !== null && (r = i, o = a), this.tooltipPosition.moveXCrosshairs(r), !this.fixedTooltip) {
      if (s.config.chart.type === "radar") {
        var l = this.ttCtx.getElGrid().getBoundingClientRect();
        r = this.ttCtx.e.clientX - l.left;
      }
      this.tooltipPosition.moveTooltip(r, o, s.config.markers.hover.size);
    }
  } }, { key: "enlargePoints", value: function(e) {
    for (var t = this.w, i = this, a = this.ttCtx, s = e, r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), o = t.config.markers.hover.size, l = 0; l < r.length; l++) {
      var h = r[l].getAttribute("rel"), c = r[l].getAttribute("index");
      if (o === void 0 && (o = t.globals.markers.size[c] + t.config.markers.hover.sizeOffset), s === parseInt(h, 10)) {
        i.newPointSize(s, r[l]);
        var d = r[l].getAttribute("cx"), u = r[l].getAttribute("cy");
        i.tooltipPosition.moveXCrosshairs(d), a.fixedTooltip || i.tooltipPosition.moveTooltip(d, u, o);
      } else i.oldPointSize(r[l]);
    }
  } }, { key: "newPointSize", value: function(e, t) {
    var i = this.w, a = i.config.markers.hover.size, s = e === 0 ? t.parentNode.firstChild : t.parentNode.lastChild;
    if (s.getAttribute("default-marker-size") !== "0") {
      var r = parseInt(s.getAttribute("index"), 10);
      a === void 0 && (a = i.globals.markers.size[r] + i.config.markers.hover.sizeOffset), a < 0 && (a = 0);
      var o = this.ttCtx.tooltipUtil.getPathFromPoint(t, a);
      t.setAttribute("d", o);
    }
  } }, { key: "oldPointSize", value: function(e) {
    var t = parseFloat(e.getAttribute("default-marker-size")), i = this.ttCtx.tooltipUtil.getPathFromPoint(e, t);
    e.setAttribute("d", i);
  } }, { key: "resetPointsSize", value: function() {
    for (var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), t = 0; t < e.length; t++) {
      var i = parseFloat(e[t].getAttribute("default-marker-size"));
      if (L.isNumber(i) && i > 0) {
        var a = this.ttCtx.tooltipUtil.getPathFromPoint(e[t], i);
        e[t].setAttribute("d", a);
      } else e[t].setAttribute("d", "M0,0");
    }
  } }]), n;
})(), il = (function() {
  function n(e) {
    q(this, n), this.w = e.w;
    var t = this.w;
    this.ttCtx = e, this.isVerticalGroupedRangeBar = !t.globals.isBarHorizontal && t.config.chart.type === "rangeBar" && t.config.plotOptions.bar.rangeBarGroupRows;
  }
  return $(n, [{ key: "getAttr", value: function(e, t) {
    return parseFloat(e.target.getAttribute(t));
  } }, { key: "handleHeatTreeTooltip", value: function(e) {
    var t = e.e, i = e.opt, a = e.x, s = e.y, r = e.type, o = this.ttCtx, l = this.w;
    if (t.target.classList.contains("apexcharts-".concat(r, "-rect"))) {
      var h = this.getAttr(t, "i"), c = this.getAttr(t, "j"), d = this.getAttr(t, "cx"), u = this.getAttr(t, "cy"), g = this.getAttr(t, "width"), p = this.getAttr(t, "height");
      if (o.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: h, j: c, shared: !1, e: t }), l.globals.capturedSeriesIndex = h, l.globals.capturedDataPointIndex = c, a = d + o.tooltipRect.ttWidth / 2 + g, s = u + o.tooltipRect.ttHeight / 2 - p / 2, o.tooltipPosition.moveXCrosshairs(d + g / 2), a > l.globals.gridWidth / 2 && (a = d - o.tooltipRect.ttWidth / 2 + g), o.w.config.tooltip.followCursor) {
        var f = l.globals.dom.elWrap.getBoundingClientRect();
        a = l.globals.clientX - f.left - (a > l.globals.gridWidth / 2 ? o.tooltipRect.ttWidth : 0), s = l.globals.clientY - f.top - (s > l.globals.gridHeight / 2 ? o.tooltipRect.ttHeight : 0);
      }
    }
    return { x: a, y: s };
  } }, { key: "handleMarkerTooltip", value: function(e) {
    var t, i, a = e.e, s = e.opt, r = e.x, o = e.y, l = this.w, h = this.ttCtx;
    if (a.target.classList.contains("apexcharts-marker")) {
      var c = parseInt(s.paths.getAttribute("cx"), 10), d = parseInt(s.paths.getAttribute("cy"), 10), u = parseFloat(s.paths.getAttribute("val"));
      if (i = parseInt(s.paths.getAttribute("rel"), 10), t = parseInt(s.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, h.intersect) {
        var g = L.findAncestor(s.paths, "apexcharts-series");
        g && (t = parseInt(g.getAttribute("data:realIndex"), 10));
      }
      if (h.tooltipLabels.drawSeriesTexts({ ttItems: s.ttItems, i: t, j: i, shared: !h.showOnIntersect && l.config.tooltip.shared, e: a }), a.type === "mouseup" && h.markerClick(a, t, i), l.globals.capturedSeriesIndex = t, l.globals.capturedDataPointIndex = i, r = c, o = d + l.globals.translateY - 1.4 * h.tooltipRect.ttHeight, h.w.config.tooltip.followCursor) {
        var p = h.getElGrid().getBoundingClientRect();
        o = h.e.clientY + l.globals.translateY - p.top;
      }
      u < 0 && (o = d), h.marker.enlargeCurrentPoint(i, s.paths, r, o);
    }
    return { x: r, y: o };
  } }, { key: "handleBarTooltip", value: function(e) {
    var t, i, a = e.e, s = e.opt, r = this.w, o = this.ttCtx, l = o.getElTooltip(), h = 0, c = 0, d = 0, u = this.getBarTooltipXY({ e: a, opt: s });
    if (u.j !== null || u.barHeight !== 0 || u.barWidth !== 0) {
      t = u.i;
      var g = u.j;
      if (r.globals.capturedSeriesIndex = t, r.globals.capturedDataPointIndex = g, r.globals.isBarHorizontal && o.tooltipUtil.hasBars() || !r.config.tooltip.shared ? (c = u.x, d = u.y, i = Array.isArray(r.config.stroke.width) ? r.config.stroke.width[t] : r.config.stroke.width, h = c) : r.globals.comboCharts || r.config.tooltip.shared || (h /= 2), isNaN(d) && (d = r.globals.svgHeight - o.tooltipRect.ttHeight), parseInt(s.paths.parentNode.getAttribute("data:realIndex"), 10), c + o.tooltipRect.ttWidth > r.globals.gridWidth ? c -= o.tooltipRect.ttWidth : c < 0 && (c = 0), o.w.config.tooltip.followCursor) {
        var p = o.getElGrid().getBoundingClientRect();
        d = o.e.clientY - p.top;
      }
      o.tooltip === null && (o.tooltip = r.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), r.config.tooltip.shared || (r.globals.comboBarCount > 0 ? o.tooltipPosition.moveXCrosshairs(h + i / 2) : o.tooltipPosition.moveXCrosshairs(h)), !o.fixedTooltip && (!r.config.tooltip.shared || r.globals.isBarHorizontal && o.tooltipUtil.hasBars()) && (d = d + r.globals.translateY - o.tooltipRect.ttHeight / 2, l.style.left = c + r.globals.translateX + "px", l.style.top = d + "px");
    }
  } }, { key: "getBarTooltipXY", value: function(e) {
    var t = this, i = e.e, a = e.opt, s = this.w, r = null, o = this.ttCtx, l = 0, h = 0, c = 0, d = 0, u = 0, g = i.target.classList;
    if (g.contains("apexcharts-bar-area") || g.contains("apexcharts-candlestick-area") || g.contains("apexcharts-boxPlot-area") || g.contains("apexcharts-rangebar-area")) {
      var p = i.target, f = p.getBoundingClientRect(), x = a.elGrid.getBoundingClientRect(), b = f.height;
      u = f.height;
      var m = f.width, y = parseInt(p.getAttribute("cx"), 10), w = parseInt(p.getAttribute("cy"), 10);
      d = parseFloat(p.getAttribute("barWidth"));
      var v = i.type === "touchmove" ? i.touches[0].clientX : i.clientX;
      r = parseInt(p.getAttribute("j"), 10), l = parseInt(p.parentNode.getAttribute("rel"), 10) - 1;
      var C = p.getAttribute("data-range-y1"), k = p.getAttribute("data-range-y2");
      s.globals.comboCharts && (l = parseInt(p.parentNode.getAttribute("data:realIndex"), 10));
      var A = function(P) {
        return s.globals.isXNumeric ? y - m / 2 : t.isVerticalGroupedRangeBar ? y + m / 2 : y - o.dataPointsDividedWidth + m / 2;
      }, S = function() {
        return w - o.dataPointsDividedHeight + b / 2 - o.tooltipRect.ttHeight / 2;
      };
      o.tooltipLabels.drawSeriesTexts({ ttItems: a.ttItems, i: l, j: r, y1: C ? parseInt(C, 10) : null, y2: k ? parseInt(k, 10) : null, shared: !o.showOnIntersect && s.config.tooltip.shared, e: i }), s.config.tooltip.followCursor ? s.globals.isBarHorizontal ? (h = v - x.left + 15, c = S()) : (h = A(), c = i.clientY - x.top - o.tooltipRect.ttHeight / 2 - 15) : s.globals.isBarHorizontal ? ((h = y) < o.xyRatios.baseLineInvertedY && (h = y - o.tooltipRect.ttWidth), c = S()) : (h = A(), c = w);
    }
    return { x: h, y: c, barHeight: u, barWidth: d, i: l, j: r };
  } }]), n;
})(), al = (function() {
  function n(e) {
    q(this, n), this.w = e.w, this.ttCtx = e;
  }
  return $(n, [{ key: "drawXaxisTooltip", value: function() {
    var e = this.w, t = this.ttCtx, i = e.config.xaxis.position === "bottom";
    t.xaxisOffY = i ? e.globals.gridHeight + 1 : -e.globals.xAxisHeight - e.config.xaxis.axisTicks.height + 3;
    var a = i ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top", s = e.globals.dom.elWrap;
    t.isXAxisTooltipEnabled && e.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") === null && (t.xaxisTooltip = document.createElement("div"), t.xaxisTooltip.setAttribute("class", a + " apexcharts-theme-" + e.config.tooltip.theme), s.appendChild(t.xaxisTooltip), t.xaxisTooltipText = document.createElement("div"), t.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), t.xaxisTooltipText.style.fontFamily = e.config.xaxis.tooltip.style.fontFamily || e.config.chart.fontFamily, t.xaxisTooltipText.style.fontSize = e.config.xaxis.tooltip.style.fontSize, t.xaxisTooltip.appendChild(t.xaxisTooltipText));
  } }, { key: "drawYaxisTooltip", value: function() {
    for (var e = this.w, t = this.ttCtx, i = 0; i < e.config.yaxis.length; i++) {
      var a = e.config.yaxis[i].opposite || e.config.yaxis[i].crosshairs.opposite;
      t.yaxisOffX = a ? e.globals.gridWidth + 1 : 1;
      var s = "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i, a ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left"), r = e.globals.dom.elWrap;
      e.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i)) === null && (t.yaxisTooltip = document.createElement("div"), t.yaxisTooltip.setAttribute("class", s + " apexcharts-theme-" + e.config.tooltip.theme), r.appendChild(t.yaxisTooltip), i === 0 && (t.yaxisTooltipText = []), t.yaxisTooltipText[i] = document.createElement("div"), t.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"), t.yaxisTooltip.appendChild(t.yaxisTooltipText[i]));
    }
  } }, { key: "setXCrosshairWidth", value: function() {
    var e = this.w, t = this.ttCtx, i = t.getElXCrosshairs();
    if (t.xcrosshairsWidth = parseInt(e.config.xaxis.crosshairs.width, 10), e.globals.comboCharts) {
      var a = e.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
      if (a !== null && e.config.xaxis.crosshairs.width === "barWidth") {
        var s = parseFloat(a.getAttribute("barWidth"));
        t.xcrosshairsWidth = s;
      } else if (e.config.xaxis.crosshairs.width === "tickWidth") {
        var r = e.globals.labels.length;
        t.xcrosshairsWidth = e.globals.gridWidth / r;
      }
    } else if (e.config.xaxis.crosshairs.width === "tickWidth") {
      var o = e.globals.labels.length;
      t.xcrosshairsWidth = e.globals.gridWidth / o;
    } else if (e.config.xaxis.crosshairs.width === "barWidth") {
      var l = e.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
      if (l !== null) {
        var h = parseFloat(l.getAttribute("barWidth"));
        t.xcrosshairsWidth = h;
      } else t.xcrosshairsWidth = 1;
    }
    e.globals.isBarHorizontal && (t.xcrosshairsWidth = 0), i !== null && t.xcrosshairsWidth > 0 && i.setAttribute("width", t.xcrosshairsWidth);
  } }, { key: "handleYCrosshair", value: function() {
    var e = this.w, t = this.ttCtx;
    t.ycrosshairs = e.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), t.ycrosshairsHidden = e.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden");
  } }, { key: "drawYaxisTooltipText", value: function(e, t, i) {
    var a = this.ttCtx, s = this.w, r = s.globals, o = r.seriesYAxisMap[e];
    if (a.yaxisTooltips[e] && o.length > 0) {
      var l = r.yLabelFormatters[e], h = a.getElGrid().getBoundingClientRect(), c = o[0], d = 0;
      i.yRatio.length > 1 && (d = c);
      var u = (t - h.top) * i.yRatio[d], g = r.maxYArr[c] - r.minYArr[c], p = r.minYArr[c] + (g - u);
      s.config.yaxis[e].reversed && (p = r.maxYArr[c] - (g - u)), a.tooltipPosition.moveYCrosshairs(t - h.top), a.yaxisTooltipText[e].innerHTML = l(p), a.tooltipPosition.moveYAxisTooltip(e);
    }
  } }]), n;
})(), ls = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
    var t = this.w;
    this.tConfig = t.config.tooltip, this.tooltipUtil = new pr(this), this.tooltipLabels = new el(this), this.tooltipPosition = new xr(this), this.marker = new tl(this), this.intersect = new il(this), this.axesTooltip = new al(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !t.globals.isBarHorizontal && this.tConfig.shared, this.lastHoverTime = Date.now();
  }
  return $(n, [{ key: "getElTooltip", value: function(e) {
    return e || (e = this), e.w.globals.dom.baseEl ? e.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip") : null;
  } }, { key: "getElXCrosshairs", value: function() {
    return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs");
  } }, { key: "getElGrid", value: function() {
    return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid");
  } }, { key: "drawTooltip", value: function(e) {
    var t = this.w;
    this.xyRatios = e, this.isXAxisTooltipEnabled = t.config.xaxis.tooltip.enabled && t.globals.axisCharts, this.yaxisTooltips = t.config.yaxis.map((function(r, o) {
      return !!(r.show && r.tooltip.enabled && t.globals.axisCharts);
    })), this.allTooltipSeriesGroups = [], t.globals.axisCharts || (this.showTooltipTitle = !1);
    var i = document.createElement("div");
    if (i.classList.add("apexcharts-tooltip"), t.config.tooltip.cssClass && i.classList.add(t.config.tooltip.cssClass), i.classList.add("apexcharts-theme-".concat(this.tConfig.theme || "light")), t.globals.dom.elWrap.appendChild(i), t.globals.axisCharts) {
      this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
      var a = new Wt(this.ctx);
      this.xAxisTicksPositions = a.getXAxisTicksPositions();
    }
    if (!t.globals.comboCharts && !this.tConfig.intersect && t.config.chart.type !== "rangeBar" || this.tConfig.shared || (this.showOnIntersect = !0), t.config.markers.size !== 0 && t.globals.markers.largestSize !== 0 || this.marker.drawDynamicPoints(this), t.globals.collapsedSeries.length !== t.globals.series.length) {
      this.dataPointsDividedHeight = t.globals.gridHeight / t.globals.dataPoints, this.dataPointsDividedWidth = t.globals.gridWidth / t.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || t.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, i.appendChild(this.tooltipTitle));
      var s = t.globals.series.length;
      (t.globals.xyCharts || t.globals.comboCharts) && this.tConfig.shared && (s = this.showOnIntersect ? 1 : t.globals.series.length), this.legendLabels = t.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(s), this.addSVGEvents();
    }
  } }, { key: "createTTElements", value: function(e) {
    for (var t = this, i = this.w, a = [], s = this.getElTooltip(), r = function(l) {
      var h = document.createElement("div");
      h.classList.add("apexcharts-tooltip-series-group", "apexcharts-tooltip-series-group-".concat(l)), h.style.order = i.config.tooltip.inverseOrder ? e - l : l + 1;
      var c = document.createElement("span");
      c.classList.add("apexcharts-tooltip-marker"), i.config.tooltip.fillSeriesColor ? c.style.backgroundColor = i.globals.colors[l] : c.style.color = i.globals.colors[l];
      var d = i.config.markers.shape, u = d;
      Array.isArray(d) && (u = d[l]), c.setAttribute("shape", u), h.appendChild(c);
      var g = document.createElement("div");
      g.classList.add("apexcharts-tooltip-text"), g.style.fontFamily = t.tConfig.style.fontFamily || i.config.chart.fontFamily, g.style.fontSize = t.tConfig.style.fontSize, ["y", "goals", "z"].forEach((function(p) {
        var f = document.createElement("div");
        f.classList.add("apexcharts-tooltip-".concat(p, "-group"));
        var x = document.createElement("span");
        x.classList.add("apexcharts-tooltip-text-".concat(p, "-label")), f.appendChild(x);
        var b = document.createElement("span");
        b.classList.add("apexcharts-tooltip-text-".concat(p, "-value")), f.appendChild(b), g.appendChild(f);
      })), h.appendChild(g), s.appendChild(h), a.push(h);
    }, o = 0; o < e; o++) r(o);
    return a;
  } }, { key: "addSVGEvents", value: function() {
    var e = this.w, t = e.config.chart.type, i = this.getElTooltip(), a = !(t !== "bar" && t !== "candlestick" && t !== "boxPlot" && t !== "rangeBar"), s = t === "area" || t === "line" || t === "scatter" || t === "bubble" || t === "radar", r = e.globals.dom.Paper.node, o = this.getElGrid();
    o && (this.seriesBound = o.getBoundingClientRect());
    var l, h = [], c = [], d = { hoverArea: r, elGrid: o, tooltipEl: i, tooltipY: h, tooltipX: c, ttItems: this.ttItems };
    if (e.globals.axisCharts && (s ? l = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : a ? l = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area") : t !== "heatmap" && t !== "treemap" || (l = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), l && l.length)) for (var u = 0; u < l.length; u++) h.push(l[u].getAttribute("cy")), c.push(l[u].getAttribute("cx"));
    if (e.globals.xyCharts && !this.showOnIntersect || e.globals.comboCharts && !this.showOnIntersect || a && this.tooltipUtil.hasBars() && this.tConfig.shared) this.addPathsEventListeners([r], d);
    else if (a && !e.globals.comboCharts || s && this.showOnIntersect) this.addDatapointEventsListeners(d);
    else if (!e.globals.axisCharts || t === "heatmap" || t === "treemap") {
      var g = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
      this.addPathsEventListeners(g, d);
    }
    if (this.showOnIntersect) {
      var p = e.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");
      p.length > 0 && this.addPathsEventListeners(p, d), this.tooltipUtil.hasBars() && !this.tConfig.shared && this.addDatapointEventsListeners(d);
    }
  } }, { key: "drawFixedTooltipRect", value: function() {
    var e = this.w, t = this.getElTooltip(), i = t.getBoundingClientRect(), a = i.width + 10, s = i.height + 10, r = this.tConfig.fixed.offsetX, o = this.tConfig.fixed.offsetY, l = this.tConfig.fixed.position.toLowerCase();
    return l.indexOf("right") > -1 && (r = r + e.globals.svgWidth - a + 10), l.indexOf("bottom") > -1 && (o = o + e.globals.svgHeight - s - 10), t.style.left = r + "px", t.style.top = o + "px", { x: r, y: o, ttWidth: a, ttHeight: s };
  } }, { key: "addDatapointEventsListeners", value: function(e) {
    var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");
    this.addPathsEventListeners(t, e);
  } }, { key: "addPathsEventListeners", value: function(e, t) {
    for (var i = this, a = function(r) {
      var o = { paths: e[r], tooltipEl: t.tooltipEl, tooltipY: t.tooltipY, tooltipX: t.tooltipX, elGrid: t.elGrid, hoverArea: t.hoverArea, ttItems: t.ttItems };
      ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map((function(l) {
        return e[r].addEventListener(l, i.onSeriesHover.bind(i, o), { capture: !1, passive: !0 });
      }));
    }, s = 0; s < e.length; s++) a(s);
  } }, { key: "onSeriesHover", value: function(e, t) {
    var i = this, a = Date.now() - this.lastHoverTime;
    a >= 20 ? this.seriesHover(e, t) : (clearTimeout(this.seriesHoverTimeout), this.seriesHoverTimeout = setTimeout((function() {
      i.seriesHover(e, t);
    }), 20 - a));
  } }, { key: "seriesHover", value: function(e, t) {
    var i = this;
    this.lastHoverTime = Date.now();
    var a = [], s = this.w;
    s.config.chart.group && (a = this.ctx.getGroupedCharts()), s.globals.axisCharts && (s.globals.minX === -1 / 0 && s.globals.maxX === 1 / 0 || s.globals.dataPoints === 0) || (a.length ? a.forEach((function(r) {
      var o = i.getElTooltip(r), l = { paths: e.paths, tooltipEl: o, tooltipY: e.tooltipY, tooltipX: e.tooltipX, elGrid: e.elGrid, hoverArea: e.hoverArea, ttItems: r.w.globals.tooltip.ttItems };
      r.w.globals.minX === i.w.globals.minX && r.w.globals.maxX === i.w.globals.maxX && r.w.globals.tooltip.seriesHoverByContext({ chartCtx: r, ttCtx: r.w.globals.tooltip, opt: l, e: t });
    })) : this.seriesHoverByContext({ chartCtx: this.ctx, ttCtx: this.w.globals.tooltip, opt: e, e: t }));
  } }, { key: "seriesHoverByContext", value: function(e) {
    var t = e.chartCtx, i = e.ttCtx, a = e.opt, s = e.e, r = t.w, o = this.getElTooltip(t);
    o && (i.tooltipRect = { x: 0, y: 0, ttWidth: o.getBoundingClientRect().width, ttHeight: o.getBoundingClientRect().height }, i.e = s, i.tooltipUtil.hasBars() && !r.globals.comboCharts && !i.isBarShared && this.tConfig.onDatasetHover.highlightDataSeries && new Ve(t).toggleSeriesOnHover(s, s.target.parentNode), r.globals.axisCharts ? i.axisChartsTooltips({ e: s, opt: a, tooltipRect: i.tooltipRect }) : i.nonAxisChartsTooltips({ e: s, opt: a, tooltipRect: i.tooltipRect }), i.fixedTooltip && i.drawFixedTooltipRect());
  } }, { key: "axisChartsTooltips", value: function(e) {
    var t, i, a = e.e, s = e.opt, r = this.w, o = s.elGrid.getBoundingClientRect(), l = a.type === "touchmove" ? a.touches[0].clientX : a.clientX, h = a.type === "touchmove" ? a.touches[0].clientY : a.clientY;
    if (this.clientY = h, this.clientX = l, r.globals.capturedSeriesIndex = -1, r.globals.capturedDataPointIndex = -1, h < o.top || h > o.top + o.height) this.handleMouseOut(s);
    else {
      if (Array.isArray(this.tConfig.enabledOnSeries) && !r.config.tooltip.shared) {
        var c = parseInt(s.paths.getAttribute("index"), 10);
        if (this.tConfig.enabledOnSeries.indexOf(c) < 0) return void this.handleMouseOut(s);
      }
      var d = this.getElTooltip(), u = this.getElXCrosshairs(), g = [];
      r.config.chart.group && (g = this.ctx.getSyncedCharts());
      var p = r.globals.xyCharts || r.config.chart.type === "bar" && !r.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || r.globals.comboCharts && this.tooltipUtil.hasBars();
      if (a.type === "mousemove" || a.type === "touchmove" || a.type === "mouseup") {
        if (r.globals.collapsedSeries.length + r.globals.ancillaryCollapsedSeries.length === r.globals.series.length) return;
        u !== null && u.classList.add("apexcharts-active");
        var f = this.yaxisTooltips.filter((function(m) {
          return m === !0;
        }));
        if (this.ycrosshairs !== null && f.length && this.ycrosshairs.classList.add("apexcharts-active"), p && !this.showOnIntersect || g.length > 1) this.handleStickyTooltip(a, l, h, s);
        else if (r.config.chart.type === "heatmap" || r.config.chart.type === "treemap") {
          var x = this.intersect.handleHeatTreeTooltip({ e: a, opt: s, x: t, y: i, type: r.config.chart.type });
          t = x.x, i = x.y, d.style.left = t + "px", d.style.top = i + "px";
        } else this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({ e: a, opt: s }), this.tooltipUtil.hasMarkers() && this.intersect.handleMarkerTooltip({ e: a, opt: s, x: t, y: i });
        if (this.yaxisTooltips.length) for (var b = 0; b < r.config.yaxis.length; b++) this.axesTooltip.drawYaxisTooltipText(b, h, this.xyRatios);
        r.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"), s.tooltipEl.classList.add("apexcharts-active");
      } else a.type !== "mouseout" && a.type !== "touchend" || this.handleMouseOut(s);
    }
  } }, { key: "nonAxisChartsTooltips", value: function(e) {
    var t = e.e, i = e.opt, a = e.tooltipRect, s = this.w, r = i.paths.getAttribute("rel"), o = this.getElTooltip(), l = s.globals.dom.elWrap.getBoundingClientRect();
    if (t.type === "mousemove" || t.type === "touchmove") {
      s.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"), o.classList.add("apexcharts-active"), this.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: parseInt(r, 10) - 1, shared: !1 });
      var h = s.globals.clientX - l.left - a.ttWidth / 2, c = s.globals.clientY - l.top - a.ttHeight - 10;
      if (o.style.left = h + "px", o.style.top = c + "px", s.config.legend.tooltipHoverFormatter) {
        var d = r - 1, u = (0, s.config.legend.tooltipHoverFormatter)(this.legendLabels[d].getAttribute("data:default-text"), { seriesIndex: d, dataPointIndex: d, w: s });
        this.legendLabels[d].innerHTML = u;
      }
    } else t.type !== "mouseout" && t.type !== "touchend" || (o.classList.remove("apexcharts-active"), s.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"), s.config.legend.tooltipHoverFormatter && this.legendLabels.forEach((function(g) {
      var p = g.getAttribute("data:default-text");
      g.innerHTML = decodeURIComponent(p);
    })));
  } }, { key: "handleStickyTooltip", value: function(e, t, i, a) {
    var s = this.w, r = this.tooltipUtil.getNearestValues({ context: this, hoverArea: a.hoverArea, elGrid: a.elGrid, clientX: t, clientY: i }), o = r.j, l = r.capturedSeries;
    s.globals.collapsedSeriesIndices.includes(l) && (l = null);
    var h = a.elGrid.getBoundingClientRect();
    if (r.hoverX < 0 || r.hoverX > h.width) this.handleMouseOut(a);
    else if (l !== null) this.handleStickyCapturedSeries(e, l, a, o);
    else if (this.tooltipUtil.isXoverlap(o) || s.globals.isBarHorizontal) {
      var c = s.globals.series.findIndex((function(d, u) {
        return !s.globals.collapsedSeriesIndices.includes(u);
      }));
      this.create(e, this, c, o, a.ttItems);
    }
  } }, { key: "handleStickyCapturedSeries", value: function(e, t, i, a) {
    var s = this.w;
    if (!this.tConfig.shared && s.globals.series[t][a] === null) return void this.handleMouseOut(i);
    if (s.globals.series[t][a] !== void 0) this.tConfig.shared && this.tooltipUtil.isXoverlap(a) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(e, this, t, a, i.ttItems) : this.create(e, this, t, a, i.ttItems, !1);
    else if (this.tooltipUtil.isXoverlap(a)) {
      var r = s.globals.series.findIndex((function(o, l) {
        return !s.globals.collapsedSeriesIndices.includes(l);
      }));
      this.create(e, this, r, a, i.ttItems);
    }
  } }, { key: "deactivateHoverFilter", value: function() {
    for (var e = this.w, t = new X(this.ctx), i = e.globals.dom.Paper.find(".apexcharts-bar-area"), a = 0; a < i.length; a++) t.pathMouseLeave(i[a]);
  } }, { key: "handleMouseOut", value: function(e) {
    var t = this.w, i = this.getElXCrosshairs();
    if (t.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"), e.tooltipEl.classList.remove("apexcharts-active"), this.deactivateHoverFilter(), t.config.chart.type !== "bubble" && this.marker.resetPointsSize(), i !== null && i.classList.remove("apexcharts-active"), this.ycrosshairs !== null && this.ycrosshairs.classList.remove("apexcharts-active"), this.isXAxisTooltipEnabled && this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) {
      this.yaxisTTEls === null && (this.yaxisTTEls = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
      for (var a = 0; a < this.yaxisTTEls.length; a++) this.yaxisTTEls[a].classList.remove("apexcharts-active");
    }
    t.config.legend.tooltipHoverFormatter && this.legendLabels.forEach((function(s) {
      var r = s.getAttribute("data:default-text");
      s.innerHTML = decodeURIComponent(r);
    }));
  } }, { key: "markerClick", value: function(e, t, i) {
    var a = this.w;
    typeof a.config.chart.events.markerClick == "function" && a.config.chart.events.markerClick(e, this.ctx, { seriesIndex: t, dataPointIndex: i, w: a }), this.ctx.events.fireEvent("markerClick", [e, this.ctx, { seriesIndex: t, dataPointIndex: i, w: a }]);
  } }, { key: "create", value: function(e, t, i, a, s) {
    var r, o, l, h, c, d, u, g, p, f, x, b, m, y, w, v, C = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, k = this.w, A = t;
    e.type === "mouseup" && this.markerClick(e, i, a), C === null && (C = this.tConfig.shared);
    var S = this.tooltipUtil.hasMarkers(i), P = this.tooltipUtil.getElBars(), T = function() {
      k.globals.markers.largestSize > 0 ? A.marker.enlargePoints(a) : A.tooltipPosition.moveDynamicPointsOnHover(a);
    };
    if (k.config.legend.tooltipHoverFormatter) {
      var I = k.config.legend.tooltipHoverFormatter, R = Array.from(this.legendLabels);
      R.forEach((function(ee) {
        var W = ee.getAttribute("data:default-text");
        ee.innerHTML = decodeURIComponent(W);
      }));
      for (var z = 0; z < R.length; z++) {
        var Y = R[z], N = parseInt(Y.getAttribute("i"), 10), H = decodeURIComponent(Y.getAttribute("data:default-text")), U = I(H, { seriesIndex: C ? N : i, dataPointIndex: a, w: k });
        if (C) Y.innerHTML = k.globals.collapsedSeriesIndices.indexOf(N) < 0 ? U : H;
        else if (Y.innerHTML = N === i ? U : H, i === N) break;
      }
    }
    var Q = D(D({ ttItems: s, i, j: a }, ((r = k.globals.seriesRange) === null || r === void 0 || (o = r[i]) === null || o === void 0 || (l = o[a]) === null || l === void 0 || (h = l.y[0]) === null || h === void 0 ? void 0 : h.y1) !== void 0 && { y1: (c = k.globals.seriesRange) === null || c === void 0 || (d = c[i]) === null || d === void 0 || (u = d[a]) === null || u === void 0 || (g = u.y[0]) === null || g === void 0 ? void 0 : g.y1 }), ((p = k.globals.seriesRange) === null || p === void 0 || (f = p[i]) === null || f === void 0 || (x = f[a]) === null || x === void 0 || (b = x.y[0]) === null || b === void 0 ? void 0 : b.y2) !== void 0 && { y2: (m = k.globals.seriesRange) === null || m === void 0 || (y = m[i]) === null || y === void 0 || (w = y[a]) === null || w === void 0 || (v = w.y[0]) === null || v === void 0 ? void 0 : v.y2 });
    if (C) {
      if (A.tooltipLabels.drawSeriesTexts(D(D({}, Q), {}, { shared: !this.showOnIntersect && this.tConfig.shared })), S) T();
      else if (this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(P), this.barSeriesHeight > 0)) {
        var O = new X(this.ctx), _ = k.globals.dom.Paper.find(".apexcharts-bar-area[j='".concat(a, "']"));
        this.deactivateHoverFilter(), A.tooltipUtil.getAllMarkers(!0).length && !this.barSeriesHeight && T(), A.tooltipPosition.moveStickyTooltipOverBars(a, i);
        for (var Z = 0; Z < _.length; Z++) O.pathMouseEnter(_[Z]);
      }
    } else A.tooltipLabels.drawSeriesTexts(D({ shared: !1 }, Q)), this.tooltipUtil.hasBars() && A.tooltipPosition.moveStickyTooltipOverBars(a, i), S && A.tooltipPosition.moveMarkers(i, a);
  } }]), n;
})(), sl = (function() {
  function n(e) {
    q(this, n), this.w = e.w, this.barCtx = e, this.totalFormatter = this.w.config.plotOptions.bar.dataLabels.total.formatter, this.totalFormatter || (this.totalFormatter = this.w.config.dataLabels.formatter);
  }
  return $(n, [{ key: "handleBarDataLabels", value: function(e) {
    var t, i, a = e.x, s = e.y, r = e.y1, o = e.y2, l = e.i, h = e.j, c = e.realIndex, d = e.columnGroupIndex, u = e.series, g = e.barHeight, p = e.barWidth, f = e.barXPosition, x = e.barYPosition, b = e.visibleSeries, m = this.w, y = new X(this.barCtx.ctx), w = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[c] : this.barCtx.strokeWidth;
    m.globals.isXNumeric && !m.globals.isBarHorizontal ? (t = a + parseFloat(p * (b + 1)), i = s + parseFloat(g * (b + 1)) - w) : (t = a + parseFloat(p * b), i = s + parseFloat(g * b));
    var v, C = null, k = a, A = s, S = {}, P = m.config.dataLabels, T = this.barCtx.barOptions.dataLabels, I = this.barCtx.barOptions.dataLabels.total;
    x !== void 0 && this.barCtx.isRangeBar && (i = x, A = x), f !== void 0 && this.barCtx.isVerticalGroupedRangeBar && (t = f, k = f);
    var R = P.offsetX, z = P.offsetY, Y = { width: 0, height: 0 };
    if (m.config.dataLabels.enabled) {
      var N = m.globals.series[l][h];
      Y = y.getTextRects(m.config.dataLabels.formatter ? m.config.dataLabels.formatter(N, D(D({}, m), {}, { seriesIndex: l, dataPointIndex: h, w: m })) : m.globals.yLabelFormatters[0](N), parseFloat(P.style.fontSize));
    }
    var H = { x: a, y: s, i: l, j: h, realIndex: c, columnGroupIndex: d, bcx: t, bcy: i, barHeight: g, barWidth: p, textRects: Y, strokeWidth: w, dataLabelsX: k, dataLabelsY: A, dataLabelsConfig: P, barDataLabelsConfig: T, barTotalDataLabelsConfig: I, offX: R, offY: z };
    return S = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(H) : this.calculateColumnsDataLabelsPosition(H), v = this.drawCalculatedDataLabels({ x: S.dataLabelsX, y: S.dataLabelsY, val: this.barCtx.isRangeBar ? [r, o] : m.config.chart.stackType === "100%" ? u[c][h] : m.globals.series[c][h], i: c, j: h, barWidth: p, barHeight: g, textRects: Y, dataLabelsConfig: P }), m.config.chart.stacked && I.enabled && (C = this.drawTotalDataLabels({ x: S.totalDataLabelsX, y: S.totalDataLabelsY, barWidth: p, barHeight: g, realIndex: c, textAnchor: S.totalDataLabelsAnchor, val: this.getStackedTotalDataLabel({ realIndex: c, j: h }), dataLabelsConfig: P, barTotalDataLabelsConfig: I })), { dataLabelsPos: S, dataLabels: v, totalDataLabels: C };
  } }, { key: "getStackedTotalDataLabel", value: function(e) {
    var t = e.realIndex, i = e.j, a = this.w, s = this.barCtx.stackedSeriesTotals[i];
    return this.totalFormatter && (s = this.totalFormatter(s, D(D({}, a), {}, { seriesIndex: t, dataPointIndex: i, w: a }))), s;
  } }, { key: "calculateColumnsDataLabelsPosition", value: function(e) {
    var t = this, i = this.w, a = e.i, s = e.j, r = e.realIndex;
    e.columnGroupIndex;
    var o, l, h = e.y, c = e.bcx, d = e.barWidth, u = e.barHeight, g = e.textRects, p = e.dataLabelsX, f = e.dataLabelsY, x = e.dataLabelsConfig, b = e.barDataLabelsConfig, m = e.barTotalDataLabelsConfig, y = e.strokeWidth, w = e.offX, v = e.offY, C = c;
    u = Math.abs(u);
    var k = i.config.plotOptions.bar.dataLabels.orientation === "vertical", A = this.barCtx.barHelpers.getZeroValueEncounters({ i: a, j: s }).zeroEncounters;
    c -= y / 2;
    var S = i.globals.gridWidth / i.globals.dataPoints;
    this.barCtx.isVerticalGroupedRangeBar ? p += d / 2 : (p = i.globals.isXNumeric ? c - d / 2 + w : c - S + d / 2 + w, !i.config.chart.stacked && A > 0 && i.config.plotOptions.bar.hideZeroBarsWhenGrouped && (p -= d * A)), k && (p = p + g.height / 2 - y / 2 - 2);
    var P = i.globals.series[a][s] < 0, T = h;
    switch (this.barCtx.isReversed && (T = h + (P ? u : -u)), b.position) {
      case "center":
        f = k ? P ? T - u / 2 + v : T + u / 2 - v : P ? T - u / 2 + g.height / 2 + v : T + u / 2 + g.height / 2 - v;
        break;
      case "bottom":
        f = k ? P ? T - u + v : T + u - v : P ? T - u + g.height + y + v : T + u - g.height / 2 + y - v;
        break;
      case "top":
        f = k ? P ? T + v : T - v : P ? T - g.height / 2 - v : T + g.height + v;
    }
    var I = T;
    if (i.globals.seriesGroups.forEach((function(Y) {
      var N;
      (N = t.barCtx[Y.join(",")]) === null || N === void 0 || N.prevY.forEach((function(H) {
        I = P ? Math.max(H[s], I) : Math.min(H[s], I);
      }));
    })), this.barCtx.lastActiveBarSerieIndex === r && m.enabled) {
      var R = new X(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: r, j: s }), x.fontSize);
      o = P ? I - R.height / 2 - v - m.offsetY + 18 : I + R.height + v + m.offsetY - 18;
      var z = S;
      l = C + (i.globals.isXNumeric ? -d * i.globals.barGroups.length / 2 : i.globals.barGroups.length * d / 2 - (i.globals.barGroups.length - 1) * d - z) + m.offsetX;
    }
    return i.config.chart.stacked || (f < 0 ? f = 0 + y : f + g.height / 3 > i.globals.gridHeight && (f = i.globals.gridHeight - y)), { bcx: c, bcy: h, dataLabelsX: p, dataLabelsY: f, totalDataLabelsX: l, totalDataLabelsY: o, totalDataLabelsAnchor: "middle" };
  } }, { key: "calculateBarsDataLabelsPosition", value: function(e) {
    var t = this, i = this.w, a = e.x, s = e.i, r = e.j, o = e.realIndex, l = e.bcy, h = e.barHeight, c = e.barWidth, d = e.textRects, u = e.dataLabelsX, g = e.strokeWidth, p = e.dataLabelsConfig, f = e.barDataLabelsConfig, x = e.barTotalDataLabelsConfig, b = e.offX, m = e.offY, y = i.globals.gridHeight / i.globals.dataPoints, w = this.barCtx.barHelpers.getZeroValueEncounters({ i: s, j: r }).zeroEncounters;
    c = Math.abs(c);
    var v, C, k = l - (this.barCtx.isRangeBar ? 0 : y) + h / 2 + d.height / 2 + m - 3;
    !i.config.chart.stacked && w > 0 && i.config.plotOptions.bar.hideZeroBarsWhenGrouped && (k -= h * w);
    var A = "start", S = i.globals.series[s][r] < 0, P = a;
    switch (this.barCtx.isReversed && (P = a + (S ? -c : c), A = S ? "start" : "end"), f.position) {
      case "center":
        u = S ? P + c / 2 - b : Math.max(d.width / 2, P - c / 2) + b;
        break;
      case "bottom":
        u = S ? P + c - g - b : P - c + g + b;
        break;
      case "top":
        u = S ? P - g - b : P - g + b;
    }
    var T = P;
    if (i.globals.seriesGroups.forEach((function(R) {
      var z;
      (z = t.barCtx[R.join(",")]) === null || z === void 0 || z.prevX.forEach((function(Y) {
        T = S ? Math.min(Y[r], T) : Math.max(Y[r], T);
      }));
    })), this.barCtx.lastActiveBarSerieIndex === o && x.enabled) {
      var I = new X(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: o, j: r }), p.fontSize);
      S ? (v = T - g - b - x.offsetX, A = "end") : v = T + b + x.offsetX + (this.barCtx.isReversed ? -(c + g) : g), C = k - d.height / 2 + I.height / 2 + x.offsetY + g, i.globals.barGroups.length > 1 && (C -= i.globals.barGroups.length / 2 * (h / 2));
    }
    return i.config.chart.stacked || (p.textAnchor === "start" ? u - d.width < 0 ? u = S ? d.width + g : g : u + d.width > i.globals.gridWidth && (u = S ? i.globals.gridWidth - g : i.globals.gridWidth - d.width - g) : p.textAnchor === "middle" ? u - d.width / 2 < 0 ? u = d.width / 2 + g : u + d.width / 2 > i.globals.gridWidth && (u = i.globals.gridWidth - d.width / 2 - g) : p.textAnchor === "end" && (u < 1 ? u = d.width + g : u + 1 > i.globals.gridWidth && (u = i.globals.gridWidth - d.width - g))), { bcx: a, bcy: l, dataLabelsX: u, dataLabelsY: k, totalDataLabelsX: v, totalDataLabelsY: C, totalDataLabelsAnchor: A };
  } }, { key: "drawCalculatedDataLabels", value: function(e) {
    var t = e.x, i = e.y, a = e.val, s = e.i, r = e.j, o = e.textRects, l = e.barHeight, h = e.barWidth, c = e.dataLabelsConfig, d = this.w, u = "rotate(0)";
    d.config.plotOptions.bar.dataLabels.orientation === "vertical" && (u = "rotate(-90, ".concat(t, ", ").concat(i, ")"));
    var g = new At(this.barCtx.ctx), p = new X(this.barCtx.ctx), f = c.formatter, x = null, b = d.globals.collapsedSeriesIndices.indexOf(s) > -1;
    if (c.enabled && !b) {
      x = p.group({ class: "apexcharts-data-labels", transform: u });
      var m = "";
      a !== void 0 && (m = f(a, D(D({}, d), {}, { seriesIndex: s, dataPointIndex: r, w: d }))), !a && d.config.plotOptions.bar.hideZeroBarsWhenGrouped && (m = "");
      var y = d.globals.series[s][r] < 0, w = d.config.plotOptions.bar.dataLabels.position;
      d.config.plotOptions.bar.dataLabels.orientation === "vertical" && (w === "top" && (c.textAnchor = y ? "end" : "start"), w === "center" && (c.textAnchor = "middle"), w === "bottom" && (c.textAnchor = y ? "end" : "start")), this.barCtx.isRangeBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && h < p.getTextRects(m, parseFloat(c.style.fontSize)).width && (m = ""), d.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? o.width / 1.6 > Math.abs(h) && (m = "") : o.height / 1.6 > Math.abs(l) && (m = ""));
      var v = D({}, c);
      this.barCtx.isHorizontal && a < 0 && (c.textAnchor === "start" ? v.textAnchor = "end" : c.textAnchor === "end" && (v.textAnchor = "start")), g.plotDataLabelsText({ x: t, y: i, text: m, i: s, j: r, parent: x, dataLabelsConfig: v, alwaysDrawDataLabel: !0, offsetCorrection: !0 });
    }
    return x;
  } }, { key: "drawTotalDataLabels", value: function(e) {
    var t = e.x, i = e.y, a = e.val, s = e.realIndex, r = e.textAnchor, o = e.barTotalDataLabelsConfig;
    this.w;
    var l, h = new X(this.barCtx.ctx);
    return o.enabled && t !== void 0 && i !== void 0 && this.barCtx.lastActiveBarSerieIndex === s && (l = h.drawText({ x: t, y: i, foreColor: o.style.color, text: a, textAnchor: r, fontFamily: o.style.fontFamily, fontSize: o.style.fontSize, fontWeight: o.style.fontWeight })), l;
  } }]), n;
})(), rl = (function() {
  function n(e) {
    q(this, n), this.w = e.w, this.barCtx = e;
  }
  return $(n, [{ key: "initVariables", value: function(e) {
    var t = this.w;
    this.barCtx.series = e, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1;
    for (var i = 0; i < e.length; i++) if (e[i].length > 0 && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += e[i].length), t.globals.isXNumeric) for (var a = 0; a < e[i].length; a++) t.globals.seriesX[i][a] > t.globals.minX && t.globals.seriesX[i][a] < t.globals.maxX && this.barCtx.visibleItems++;
    else this.barCtx.visibleItems = t.globals.dataPoints;
    this.arrBorderRadius = this.createBorderRadiusArr(t.globals.series), L.isSafari() && (this.arrBorderRadius = this.arrBorderRadius.map((function(s) {
      return s.map((function(r) {
        return "none";
      }));
    }))), this.barCtx.seriesLen === 0 && (this.barCtx.seriesLen = 1), this.barCtx.zeroSerieses = [], t.globals.comboCharts || this.checkZeroSeries({ series: e });
  } }, { key: "initialPositions", value: function(e) {
    var t, i, a, s, r, o, l, h, c = this.w, d = c.globals.dataPoints;
    this.barCtx.isRangeBar && (d = c.globals.labels.length);
    var u = this.barCtx.seriesLen;
    if (c.config.plotOptions.bar.rangeBarGroupRows && (u = 1), this.barCtx.isHorizontal) r = (a = c.globals.gridHeight / d) / u, c.globals.isXNumeric && (r = (a = c.globals.gridHeight / this.barCtx.totalItems) / this.barCtx.seriesLen), r = r * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, String(this.barCtx.barOptions.barHeight).indexOf("%") === -1 && (r = parseInt(this.barCtx.barOptions.barHeight, 10)), h = this.barCtx.baseLineInvertedY + c.globals.padHorizontal + (this.barCtx.isReversed ? c.globals.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), this.barCtx.isFunnel && (h = c.globals.gridWidth / 2), i = (a - r * this.barCtx.seriesLen) / 2;
    else {
      if (s = c.globals.gridWidth / this.barCtx.visibleItems, c.config.xaxis.convertedCatToNumeric && (s = c.globals.gridWidth / c.globals.dataPoints), o = s / u * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, c.globals.isXNumeric) {
        var g = this.barCtx.xRatio;
        c.globals.minXDiff && c.globals.minXDiff !== 0.5 && c.globals.minXDiff / g > 0 && (s = c.globals.minXDiff / g), (o = s / u * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100) < 1 && (o = 1);
      }
      String(this.barCtx.barOptions.columnWidth).indexOf("%") === -1 && (o = parseInt(this.barCtx.barOptions.columnWidth, 10)), l = c.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.translationsIndex] - (this.barCtx.isReversed ? c.globals.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.translationsIndex] : 0), c.globals.isXNumeric ? t = this.barCtx.getBarXForNumericXAxis({ x: t, j: 0, realIndex: e, barWidth: o }).x : t = c.globals.padHorizontal + L.noExponents(s - o * this.barCtx.seriesLen) / 2;
    }
    return c.globals.barHeight = r, c.globals.barWidth = o, { x: t, y: i, yDivision: a, xDivision: s, barHeight: r, barWidth: o, zeroH: l, zeroW: h };
  } }, { key: "initializeStackedPrevVars", value: function(e) {
    e.w.globals.seriesGroups.forEach((function(t) {
      e[t] || (e[t] = {}), e[t].prevY = [], e[t].prevX = [], e[t].prevYF = [], e[t].prevXF = [], e[t].prevYVal = [], e[t].prevXVal = [];
    }));
  } }, { key: "initializeStackedXYVars", value: function(e) {
    e.w.globals.seriesGroups.forEach((function(t) {
      e[t] || (e[t] = {}), e[t].xArrj = [], e[t].xArrjF = [], e[t].xArrjVal = [], e[t].yArrj = [], e[t].yArrjF = [], e[t].yArrjVal = [];
    }));
  } }, { key: "getPathFillColor", value: function(e, t, i, a) {
    var s, r, o, l, h = this.w, c = this.barCtx.ctx.fill, d = null, u = this.barCtx.barOptions.distributed ? i : t, g = !1;
    return this.barCtx.barOptions.colors.ranges.length > 0 && this.barCtx.barOptions.colors.ranges.map((function(p) {
      e[t][i] >= p.from && e[t][i] <= p.to && (d = p.color, g = !0);
    })), { color: c.fillPath({ seriesNumber: this.barCtx.barOptions.distributed ? u : a, dataPointIndex: i, color: d, value: e[t][i], fillConfig: (s = h.config.series[t].data[i]) === null || s === void 0 ? void 0 : s.fill, fillType: (r = h.config.series[t].data[i]) !== null && r !== void 0 && (o = r.fill) !== null && o !== void 0 && o.type ? (l = h.config.series[t].data[i]) === null || l === void 0 ? void 0 : l.fill.type : Array.isArray(h.config.fill.type) ? h.config.fill.type[a] : h.config.fill.type }), useRangeColor: g };
  } }, { key: "getStrokeWidth", value: function(e, t, i) {
    var a = 0, s = this.w;
    return this.barCtx.series[e][t] === void 0 || this.barCtx.series[e][t] === null ? this.barCtx.isNullValue = !0 : this.barCtx.isNullValue = !1, s.config.stroke.show && (this.barCtx.isNullValue || (a = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[i] : this.barCtx.strokeWidth)), a;
  } }, { key: "createBorderRadiusArr", value: function(e) {
    var t, i = this.w, a = !this.w.config.chart.stacked || i.config.plotOptions.bar.borderRadius <= 0, s = e.length, r = 0 | ((t = e[0]) === null || t === void 0 ? void 0 : t.length), o = Array.from({ length: s }, (function() {
      return Array(r).fill(a ? "top" : "none");
    }));
    if (a) return o;
    for (var l = 0; l < r; l++) {
      for (var h = [], c = [], d = 0, u = 0; u < s; u++) {
        var g = e[u][l];
        g > 0 ? (h.push(u), d++) : g < 0 && (c.push(u), d++);
      }
      if (h.length > 0 && c.length === 0) if (h.length === 1) o[h[0]][l] = "both";
      else {
        var p, f = h[0], x = h[h.length - 1], b = zt(h);
        try {
          for (b.s(); !(p = b.n()).done; ) {
            var m = p.value;
            o[m][l] = m === f ? "bottom" : m === x ? "top" : "none";
          }
        } catch (N) {
          b.e(N);
        } finally {
          b.f();
        }
      }
      else if (c.length > 0 && h.length === 0) if (c.length === 1) o[c[0]][l] = "both";
      else {
        var y, w = Math.max.apply(Math, c), v = Math.min.apply(Math, c), C = zt(c);
        try {
          for (C.s(); !(y = C.n()).done; ) {
            var k = y.value;
            o[k][l] = k === w ? "bottom" : k === v ? "top" : "none";
          }
        } catch (N) {
          C.e(N);
        } finally {
          C.f();
        }
      }
      else if (h.length > 0 && c.length > 0) {
        var A, S = h[h.length - 1], P = zt(h);
        try {
          for (P.s(); !(A = P.n()).done; ) {
            var T = A.value;
            o[T][l] = T === S ? "top" : "none";
          }
        } catch (N) {
          P.e(N);
        } finally {
          P.f();
        }
        var I, R = Math.max.apply(Math, c), z = zt(c);
        try {
          for (z.s(); !(I = z.n()).done; ) {
            var Y = I.value;
            o[Y][l] = Y === R ? "bottom" : "none";
          }
        } catch (N) {
          z.e(N);
        } finally {
          z.f();
        }
      } else d === 1 && (o[h[0] || c[0]][l] = "both");
    }
    return o;
  } }, { key: "barBackground", value: function(e) {
    var t = e.j, i = e.i, a = e.x1, s = e.x2, r = e.y1, o = e.y2, l = e.elSeries, h = this.w, c = new X(this.barCtx.ctx), d = new Ve(this.barCtx.ctx).getActiveConfigSeriesIndex();
    if (this.barCtx.barOptions.colors.backgroundBarColors.length > 0 && d === i) {
      t >= this.barCtx.barOptions.colors.backgroundBarColors.length && (t %= this.barCtx.barOptions.colors.backgroundBarColors.length);
      var u = this.barCtx.barOptions.colors.backgroundBarColors[t], g = c.drawRect(a !== void 0 ? a : 0, r !== void 0 ? r : 0, s !== void 0 ? s : h.globals.gridWidth, o !== void 0 ? o : h.globals.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, u, this.barCtx.barOptions.colors.backgroundBarOpacity);
      l.add(g), g.node.classList.add("apexcharts-backgroundBar");
    }
  } }, { key: "getColumnPaths", value: function(e) {
    var t, i = e.barWidth, a = e.barXPosition, s = e.y1, r = e.y2, o = e.strokeWidth, l = e.isReversed, h = e.series, c = e.seriesGroup, d = e.realIndex, u = e.i, g = e.j, p = e.w, f = new X(this.barCtx.ctx);
    (o = Array.isArray(o) ? o[d] : o) || (o = 0);
    var x = i, b = a;
    (t = p.config.series[d].data[g]) !== null && t !== void 0 && t.columnWidthOffset && (b = a - p.config.series[d].data[g].columnWidthOffset / 2, x = i + p.config.series[d].data[g].columnWidthOffset);
    var m = o / 2, y = b + m, w = b + x - m, v = (h[u][g] >= 0 ? 1 : -1) * (l ? -1 : 1);
    s += 1e-3 - m * v, r += 1e-3 + m * v;
    var C = f.move(y, s), k = f.move(y, s), A = f.line(w, s);
    if (p.globals.previousPaths.length > 0 && (k = this.barCtx.getPreviousPath(d, g, !1)), C = C + f.line(y, r) + f.line(w, r) + A + (p.config.plotOptions.bar.borderRadiusApplication === "around" || this.arrBorderRadius[d][g] === "both" ? " Z" : " z"), k = k + f.line(y, s) + A + A + A + A + A + f.line(y, s) + (p.config.plotOptions.bar.borderRadiusApplication === "around" || this.arrBorderRadius[d][g] === "both" ? " Z" : " z"), this.arrBorderRadius[d][g] !== "none" && (C = f.roundPathCorners(C, p.config.plotOptions.bar.borderRadius)), p.config.chart.stacked) {
      var S = this.barCtx;
      (S = this.barCtx[c]).yArrj.push(r - m * v), S.yArrjF.push(Math.abs(s - r + o * v)), S.yArrjVal.push(this.barCtx.series[u][g]);
    }
    return { pathTo: C, pathFrom: k };
  } }, { key: "getBarpaths", value: function(e) {
    var t, i = e.barYPosition, a = e.barHeight, s = e.x1, r = e.x2, o = e.strokeWidth, l = e.isReversed, h = e.series, c = e.seriesGroup, d = e.realIndex, u = e.i, g = e.j, p = e.w, f = new X(this.barCtx.ctx);
    (o = Array.isArray(o) ? o[d] : o) || (o = 0);
    var x = i, b = a;
    (t = p.config.series[d].data[g]) !== null && t !== void 0 && t.barHeightOffset && (x = i - p.config.series[d].data[g].barHeightOffset / 2, b = a + p.config.series[d].data[g].barHeightOffset);
    var m = o / 2, y = x + m, w = x + b - m, v = (h[u][g] >= 0 ? 1 : -1) * (l ? -1 : 1);
    s += 1e-3 + m * v, r += 1e-3 - m * v;
    var C = f.move(s, y), k = f.move(s, y);
    p.globals.previousPaths.length > 0 && (k = this.barCtx.getPreviousPath(d, g, !1));
    var A = f.line(s, w);
    if (C = C + f.line(r, y) + f.line(r, w) + A + (p.config.plotOptions.bar.borderRadiusApplication === "around" || this.arrBorderRadius[d][g] === "both" ? " Z" : " z"), k = k + f.line(s, y) + A + A + A + A + A + f.line(s, y) + (p.config.plotOptions.bar.borderRadiusApplication === "around" || this.arrBorderRadius[d][g] === "both" ? " Z" : " z"), this.arrBorderRadius[d][g] !== "none" && (C = f.roundPathCorners(C, p.config.plotOptions.bar.borderRadius)), p.config.chart.stacked) {
      var S = this.barCtx;
      (S = this.barCtx[c]).xArrj.push(r + m * v), S.xArrjF.push(Math.abs(s - r - o * v)), S.xArrjVal.push(this.barCtx.series[u][g]);
    }
    return { pathTo: C, pathFrom: k };
  } }, { key: "checkZeroSeries", value: function(e) {
    for (var t = e.series, i = this.w, a = 0; a < t.length; a++) {
      for (var s = 0, r = 0; r < t[i.globals.maxValsInArrayIndex].length; r++) s += t[a][r];
      s === 0 && this.barCtx.zeroSerieses.push(a);
    }
  } }, { key: "getXForValue", value: function(e, t) {
    var i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2] ? t : null;
    return e != null && (i = t + e / this.barCtx.invertedYRatio - 2 * (this.barCtx.isReversed ? e / this.barCtx.invertedYRatio : 0)), i;
  } }, { key: "getYForValue", value: function(e, t, i) {
    var a = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3] ? t : null;
    return e != null && (a = t - e / this.barCtx.yRatio[i] + 2 * (this.barCtx.isReversed ? e / this.barCtx.yRatio[i] : 0)), a;
  } }, { key: "getGoalValues", value: function(e, t, i, a, s, r) {
    var o = this, l = this.w, h = [], c = function(g, p) {
      var f;
      h.push((oi(f = {}, e, e === "x" ? o.getXForValue(g, t, !1) : o.getYForValue(g, i, r, !1)), oi(f, "attrs", p), f));
    };
    if (l.globals.seriesGoals[a] && l.globals.seriesGoals[a][s] && Array.isArray(l.globals.seriesGoals[a][s]) && l.globals.seriesGoals[a][s].forEach((function(g) {
      c(g.value, g);
    })), this.barCtx.barOptions.isDumbbell && l.globals.seriesRange.length) {
      var d = this.barCtx.barOptions.dumbbellColors ? this.barCtx.barOptions.dumbbellColors : l.globals.colors, u = { strokeHeight: e === "x" ? 0 : l.globals.markers.size[a], strokeWidth: e === "x" ? l.globals.markers.size[a] : 0, strokeDashArray: 0, strokeLineCap: "round", strokeColor: Array.isArray(d[a]) ? d[a][0] : d[a] };
      c(l.globals.seriesRangeStart[a][s], u), c(l.globals.seriesRangeEnd[a][s], D(D({}, u), {}, { strokeColor: Array.isArray(d[a]) ? d[a][1] : d[a] }));
    }
    return h;
  } }, { key: "drawGoalLine", value: function(e) {
    var t = e.barXPosition, i = e.barYPosition, a = e.goalX, s = e.goalY, r = e.barWidth, o = e.barHeight, l = new X(this.barCtx.ctx), h = l.group({ className: "apexcharts-bar-goals-groups" });
    h.node.classList.add("apexcharts-element-hidden"), this.barCtx.w.globals.delayedElements.push({ el: h.node }), h.attr("clip-path", "url(#gridRectMarkerMask".concat(this.barCtx.w.globals.cuid, ")"));
    var c = null;
    return this.barCtx.isHorizontal ? Array.isArray(a) && a.forEach((function(d) {
      if (d.x >= -1 && d.x <= l.w.globals.gridWidth + 1) {
        var u = d.attrs.strokeHeight !== void 0 ? d.attrs.strokeHeight : o / 2, g = i + u + o / 2;
        c = l.drawLine(d.x, g - 2 * u, d.x, g, d.attrs.strokeColor ? d.attrs.strokeColor : void 0, d.attrs.strokeDashArray, d.attrs.strokeWidth ? d.attrs.strokeWidth : 2, d.attrs.strokeLineCap), h.add(c);
      }
    })) : Array.isArray(s) && s.forEach((function(d) {
      if (d.y >= -1 && d.y <= l.w.globals.gridHeight + 1) {
        var u = d.attrs.strokeWidth !== void 0 ? d.attrs.strokeWidth : r / 2, g = t + u + r / 2;
        c = l.drawLine(g - 2 * u, d.y, g, d.y, d.attrs.strokeColor ? d.attrs.strokeColor : void 0, d.attrs.strokeDashArray, d.attrs.strokeHeight ? d.attrs.strokeHeight : 2, d.attrs.strokeLineCap), h.add(c);
      }
    })), h;
  } }, { key: "drawBarShadow", value: function(e) {
    var t = e.prevPaths, i = e.currPaths, a = e.color, s = this.w, r = t.x, o = t.x1, l = t.barYPosition, h = i.x, c = i.x1, d = i.barYPosition, u = l + i.barHeight, g = new X(this.barCtx.ctx), p = new L(), f = g.move(o, u) + g.line(r, u) + g.line(h, d) + g.line(c, d) + g.line(o, u) + (s.config.plotOptions.bar.borderRadiusApplication === "around" || this.arrBorderRadius[realIndex][j] === "both" ? " Z" : " z");
    return g.drawPath({ d: f, fill: p.shadeColor(0.5, L.rgb2hex(a)), stroke: "none", strokeWidth: 0, fillOpacity: 1, classes: "apexcharts-bar-shadow apexcharts-decoration-element" });
  } }, { key: "getZeroValueEncounters", value: function(e) {
    var t, i = e.i, a = e.j, s = this.w, r = 0, o = 0;
    return (s.config.plotOptions.bar.horizontal ? s.globals.series.map((function(l, h) {
      return h;
    })) : ((t = s.globals.columnSeries) === null || t === void 0 ? void 0 : t.i.map((function(l) {
      return l;
    }))) || []).forEach((function(l) {
      var h = s.globals.seriesPercent[l][a];
      h && r++, l < i && h === 0 && o++;
    })), { nonZeroColumns: r, zeroEncounters: o };
  } }, { key: "getGroupIndex", value: function(e) {
    var t = this.w, i = t.globals.seriesGroups.findIndex((function(r) {
      return r.indexOf(t.globals.seriesNames[e]) > -1;
    })), a = this.barCtx.columnGroupIndices, s = a.indexOf(i);
    return s < 0 && (a.push(i), s = a.length - 1), { groupIndex: i, columnGroupIndex: s };
  } }]), n;
})(), Ct = (function() {
  function n(e, t) {
    q(this, n), this.ctx = e, this.w = e.w;
    var i = this.w;
    this.barOptions = i.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = i.config.stroke.width, this.isNullValue = !1, this.isRangeBar = i.globals.seriesRange.length && this.isHorizontal, this.isVerticalGroupedRangeBar = !i.globals.isBarHorizontal && i.globals.seriesRange.length && i.config.plotOptions.bar.rangeBarGroupRows, this.isFunnel = this.barOptions.isFunnel, this.xyRatios = t, this.xyRatios !== null && (this.xRatio = t.xRatio, this.yRatio = t.yRatio, this.invertedXRatio = t.invertedXRatio, this.invertedYRatio = t.invertedYRatio, this.baseLineY = t.baseLineY, this.baseLineInvertedY = t.baseLineInvertedY), this.yaxisIndex = 0, this.translationsIndex = 0, this.seriesLen = 0, this.pathArr = [];
    var a = new Ve(this.ctx);
    this.lastActiveBarSerieIndex = a.getActiveConfigSeriesIndex("desc", ["bar", "column"]), this.columnGroupIndices = [];
    var s = a.getBarSeriesIndices(), r = new Le(this.ctx);
    this.stackedSeriesTotals = r.getStackedSeriesTotals(this.w.config.series.map((function(o, l) {
      return s.indexOf(l) === -1 ? l : -1;
    })).filter((function(o) {
      return o !== -1;
    }))), this.barHelpers = new rl(this);
  }
  return $(n, [{ key: "draw", value: function(e, t) {
    var i = this.w, a = new X(this.ctx), s = new Le(this.ctx, i);
    e = s.getLogSeries(e), this.series = e, this.yRatio = s.getLogYRatios(this.yRatio), this.barHelpers.initVariables(e);
    var r = a.group({ class: "apexcharts-bar-series apexcharts-plot-series" });
    i.config.dataLabels.enabled && this.totalItems > this.barOptions.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering - ApexCharts");
    for (var o = 0, l = 0; o < e.length; o++, l++) {
      var h, c, d, u, g = void 0, p = void 0, f = [], x = [], b = i.globals.comboCharts ? t[o] : o, m = this.barHelpers.getGroupIndex(b).columnGroupIndex, y = a.group({ class: "apexcharts-series", rel: o + 1, seriesName: L.escapeString(i.globals.seriesNames[b]), "data:realIndex": b });
      this.ctx.series.addCollapsedClassToSeries(y, b), e[o].length > 0 && (this.visibleI = this.visibleI + 1);
      var w = 0, v = 0;
      this.yRatio.length > 1 && (this.yaxisIndex = i.globals.seriesYAxisReverseMap[b], this.translationsIndex = b);
      var C = this.translationsIndex;
      this.isReversed = i.config.yaxis[this.yaxisIndex] && i.config.yaxis[this.yaxisIndex].reversed;
      var k = this.barHelpers.initialPositions(b);
      p = k.y, w = k.barHeight, c = k.yDivision, u = k.zeroW, g = k.x, v = k.barWidth, h = k.xDivision, d = k.zeroH, this.isHorizontal || x.push(g + v / 2);
      var A = a.group({ class: "apexcharts-datalabels", "data:realIndex": b });
      i.globals.delayedElements.push({ el: A.node }), A.node.classList.add("apexcharts-element-hidden");
      var S = a.group({ class: "apexcharts-bar-goals-markers" }), P = a.group({ class: "apexcharts-bar-shadows" });
      i.globals.delayedElements.push({ el: P.node }), P.node.classList.add("apexcharts-element-hidden");
      for (var T = 0; T < e[o].length; T++) {
        var I = this.barHelpers.getStrokeWidth(o, T, b), R = null, z = { indexes: { i: o, j: T, realIndex: b, translationsIndex: C, bc: l }, x: g, y: p, strokeWidth: I, elSeries: y };
        this.isHorizontal ? (R = this.drawBarPaths(D(D({}, z), {}, { barHeight: w, zeroW: u, yDivision: c })), v = this.series[o][T] / this.invertedYRatio) : (R = this.drawColumnPaths(D(D({}, z), {}, { xDivision: h, barWidth: v, zeroH: d })), w = this.series[o][T] / this.yRatio[C]);
        var Y = this.barHelpers.getPathFillColor(e, o, T, b);
        if (this.isFunnel && this.barOptions.isFunnel3d && this.pathArr.length && T > 0) {
          var N, H = this.barHelpers.drawBarShadow({ color: typeof Y.color == "string" && ((N = Y.color) === null || N === void 0 ? void 0 : N.indexOf("url")) === -1 ? Y.color : L.hexToRgba(i.globals.colors[o]), prevPaths: this.pathArr[this.pathArr.length - 1], currPaths: R });
          P.add(H), i.config.chart.dropShadow.enabled && new Re(this.ctx).dropShadow(H, i.config.chart.dropShadow, b);
        }
        this.pathArr.push(R);
        var U = this.barHelpers.drawGoalLine({ barXPosition: R.barXPosition, barYPosition: R.barYPosition, goalX: R.goalX, goalY: R.goalY, barHeight: w, barWidth: v });
        U && S.add(U), p = R.y, g = R.x, T > 0 && x.push(g + v / 2), f.push(p), this.renderSeries(D(D({ realIndex: b, pathFill: Y.color }, Y.useRangeColor ? { lineFill: Y.color } : {}), {}, { j: T, i: o, columnGroupIndex: m, pathFrom: R.pathFrom, pathTo: R.pathTo, strokeWidth: I, elSeries: y, x: g, y: p, series: e, barHeight: Math.abs(R.barHeight ? R.barHeight : w), barWidth: Math.abs(R.barWidth ? R.barWidth : v), elDataLabelsWrap: A, elGoalsMarkers: S, elBarShadows: P, visibleSeries: this.visibleI, type: "bar" }));
      }
      i.globals.seriesXvalues[b] = x, i.globals.seriesYvalues[b] = f, r.add(y);
    }
    return r;
  } }, { key: "renderSeries", value: function(e) {
    var t = e.realIndex, i = e.pathFill, a = e.lineFill, s = e.j, r = e.i, o = e.columnGroupIndex, l = e.pathFrom, h = e.pathTo, c = e.strokeWidth, d = e.elSeries, u = e.x, g = e.y, p = e.y1, f = e.y2, x = e.series, b = e.barHeight, m = e.barWidth, y = e.barXPosition, w = e.barYPosition, v = e.elDataLabelsWrap, C = e.elGoalsMarkers, k = e.elBarShadows, A = e.visibleSeries, S = e.type, P = e.classes, T = this.w, I = new X(this.ctx), R = !1;
    if (!a) {
      var z = typeof T.globals.stroke.colors[t] == "function" ? (function(Q) {
        var O, _ = T.config.stroke.colors;
        return Array.isArray(_) && _.length > 0 && ((O = _[Q]) || (O = ""), typeof O == "function") ? O({ value: T.globals.series[Q][s], dataPointIndex: s, w: T }) : O;
      })(t) : T.globals.stroke.colors[t];
      a = this.barOptions.distributed ? T.globals.stroke.colors[s] : z;
    }
    var Y = new sl(this).handleBarDataLabels({ x: u, y: g, y1: p, y2: f, i: r, j: s, series: x, realIndex: t, columnGroupIndex: o, barHeight: b, barWidth: m, barXPosition: y, barYPosition: w, visibleSeries: A });
    T.globals.isBarHorizontal || (Y.dataLabelsPos.dataLabelsX + m < 0 || Y.dataLabelsPos.dataLabelsX - m > T.globals.gridWidth) && (R = !0), T.config.series[r].data[s] && T.config.series[r].data[s].strokeColor && (a = T.config.series[r].data[s].strokeColor), this.isNullValue && (i = "none");
    var N = s / T.config.chart.animations.animateGradually.delay * (T.config.chart.animations.speed / T.globals.dataPoints) / 2.4;
    if (!R) {
      var H = I.renderPaths({ i: r, j: s, realIndex: t, pathFrom: l, pathTo: h, stroke: a, strokeWidth: c, strokeLineCap: T.config.stroke.lineCap, fill: i, animationDelay: N, initialSpeed: T.config.chart.animations.speed, dataChangeSpeed: T.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(S, "-area ").concat(P), chartType: S });
      H.attr("clip-path", "url(#gridRectBarMask".concat(T.globals.cuid, ")"));
      var U = T.config.forecastDataPoints;
      U.count > 0 && s >= T.globals.dataPoints - U.count && (H.node.setAttribute("stroke-dasharray", U.dashArray), H.node.setAttribute("stroke-width", U.strokeWidth), H.node.setAttribute("fill-opacity", U.fillOpacity)), p !== void 0 && f !== void 0 && (H.attr("data-range-y1", p), H.attr("data-range-y2", f)), new Re(this.ctx).setSelectionFilter(H, t, s), d.add(H), H.attr({ cy: Y.dataLabelsPos.bcy, cx: Y.dataLabelsPos.bcx, j: s, val: T.globals.series[r][s], barHeight: b, barWidth: m }), Y.dataLabels !== null && v.add(Y.dataLabels), Y.totalDataLabels && v.add(Y.totalDataLabels), d.add(v), C && d.add(C), k && d.add(k);
    }
    return d;
  } }, { key: "drawBarPaths", value: function(e) {
    var t, i = e.indexes, a = e.barHeight, s = e.strokeWidth, r = e.zeroW, o = e.x, l = e.y, h = e.yDivision, c = e.elSeries, d = this.w, u = i.i, g = i.j;
    if (d.globals.isXNumeric) t = (l = (d.globals.seriesX[u][g] - d.globals.minX) / this.invertedXRatio - a) + a * this.visibleI;
    else if (d.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
      var p = this.barHelpers.getZeroValueEncounters({ i: u, j: g }), f = p.nonZeroColumns, x = p.zeroEncounters;
      f > 0 && (a = this.seriesLen * a / f), t = l + a * this.visibleI, t -= a * x;
    } else t = l + a * this.visibleI;
    this.isFunnel && (r -= (this.barHelpers.getXForValue(this.series[u][g], r) - r) / 2), o = this.barHelpers.getXForValue(this.series[u][g], r);
    var b = this.barHelpers.getBarpaths({ barYPosition: t, barHeight: a, x1: r, x2: o, strokeWidth: s, isReversed: this.isReversed, series: this.series, realIndex: i.realIndex, i: u, j: g, w: d });
    return d.globals.isXNumeric || (l += h), this.barHelpers.barBackground({ j: g, i: u, y1: t - a * this.visibleI, y2: a * this.seriesLen, elSeries: c }), { pathTo: b.pathTo, pathFrom: b.pathFrom, x1: r, x: o, y: l, goalX: this.barHelpers.getGoalValues("x", r, null, u, g), barYPosition: t, barHeight: a };
  } }, { key: "drawColumnPaths", value: function(e) {
    var t, i = e.indexes, a = e.x, s = e.y, r = e.xDivision, o = e.barWidth, l = e.zeroH, h = e.strokeWidth, c = e.elSeries, d = this.w, u = i.realIndex, g = i.translationsIndex, p = i.i, f = i.j, x = i.bc;
    if (d.globals.isXNumeric) {
      var b = this.getBarXForNumericXAxis({ x: a, j: f, realIndex: u, barWidth: o });
      a = b.x, t = b.barXPosition;
    } else if (d.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
      var m = this.barHelpers.getZeroValueEncounters({ i: p, j: f }), y = m.nonZeroColumns, w = m.zeroEncounters;
      y > 0 && (o = this.seriesLen * o / y), t = a + o * this.visibleI, t -= o * w;
    } else t = a + o * this.visibleI;
    s = this.barHelpers.getYForValue(this.series[p][f], l, g);
    var v = this.barHelpers.getColumnPaths({ barXPosition: t, barWidth: o, y1: l, y2: s, strokeWidth: h, isReversed: this.isReversed, series: this.series, realIndex: u, i: p, j: f, w: d });
    return d.globals.isXNumeric || (a += r), this.barHelpers.barBackground({ bc: x, j: f, i: p, x1: t - h / 2 - o * this.visibleI, x2: o * this.seriesLen + h / 2, elSeries: c }), { pathTo: v.pathTo, pathFrom: v.pathFrom, x: a, y: s, goalY: this.barHelpers.getGoalValues("y", null, l, p, f, g), barXPosition: t, barWidth: o };
  } }, { key: "getBarXForNumericXAxis", value: function(e) {
    var t = e.x, i = e.barWidth, a = e.realIndex, s = e.j, r = this.w, o = a;
    return r.globals.seriesX[a].length || (o = r.globals.maxValsInArrayIndex), L.isNumber(r.globals.seriesX[o][s]) && (t = (r.globals.seriesX[o][s] - r.globals.minX) / this.xRatio - i * this.seriesLen / 2), { barXPosition: t + i * this.visibleI, x: t };
  } }, { key: "getPreviousPath", value: function(e, t) {
    for (var i = this.w, a = "M 0 0", s = 0; s < i.globals.previousPaths.length; s++) {
      var r = i.globals.previousPaths[s];
      r.paths && r.paths.length > 0 && parseInt(r.realIndex, 10) === parseInt(e, 10) && i.globals.previousPaths[s].paths[t] !== void 0 && (a = i.globals.previousPaths[s].paths[t].d);
    }
    return a;
  } }]), n;
})(), hs = (function(n) {
  Gt(t, Ct);
  var e = Bt(t);
  function t() {
    return q(this, t), e.apply(this, arguments);
  }
  return $(t, [{ key: "draw", value: function(i, a) {
    var s = this, r = this.w;
    this.graphics = new X(this.ctx), this.bar = new Ct(this.ctx, this.xyRatios);
    var o = new Le(this.ctx, r);
    i = o.getLogSeries(i), this.yRatio = o.getLogYRatios(this.yRatio), this.barHelpers.initVariables(i), r.config.chart.stackType === "100%" && (i = r.globals.comboCharts ? a.map((function(p) {
      return r.globals.seriesPercent[p];
    })) : r.globals.seriesPercent.slice()), this.series = i, this.barHelpers.initializeStackedPrevVars(this);
    for (var l = this.graphics.group({ class: "apexcharts-bar-series apexcharts-plot-series" }), h = 0, c = 0, d = function(p, f) {
      var x = void 0, b = void 0, m = void 0, y = void 0, w = r.globals.comboCharts ? a[p] : p, v = s.barHelpers.getGroupIndex(w), C = v.groupIndex, k = v.columnGroupIndex;
      s.groupCtx = s[r.globals.seriesGroups[C]];
      var A = [], S = [], P = 0;
      s.yRatio.length > 1 && (s.yaxisIndex = r.globals.seriesYAxisReverseMap[w][0], P = w), s.isReversed = r.config.yaxis[s.yaxisIndex] && r.config.yaxis[s.yaxisIndex].reversed;
      var T = s.graphics.group({ class: "apexcharts-series", seriesName: L.escapeString(r.globals.seriesNames[w]), rel: p + 1, "data:realIndex": w });
      s.ctx.series.addCollapsedClassToSeries(T, w);
      var I = s.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": w }), R = s.graphics.group({ class: "apexcharts-bar-goals-markers" }), z = 0, Y = 0, N = s.initialPositions(h, c, x, b, m, y, P);
      c = N.y, z = N.barHeight, b = N.yDivision, y = N.zeroW, h = N.x, Y = N.barWidth, x = N.xDivision, m = N.zeroH, r.globals.barHeight = z, r.globals.barWidth = Y, s.barHelpers.initializeStackedXYVars(s), s.groupCtx.prevY.length === 1 && s.groupCtx.prevY[0].every((function(se) {
        return isNaN(se);
      })) && (s.groupCtx.prevY[0] = s.groupCtx.prevY[0].map((function() {
        return m;
      })), s.groupCtx.prevYF[0] = s.groupCtx.prevYF[0].map((function() {
        return 0;
      })));
      for (var H = 0; H < r.globals.dataPoints; H++) {
        var U = s.barHelpers.getStrokeWidth(p, H, w), Q = { indexes: { i: p, j: H, realIndex: w, translationsIndex: P, bc: f }, strokeWidth: U, x: h, y: c, elSeries: T, columnGroupIndex: k, seriesGroup: r.globals.seriesGroups[C] }, O = null;
        s.isHorizontal ? (O = s.drawStackedBarPaths(D(D({}, Q), {}, { zeroW: y, barHeight: z, yDivision: b })), Y = s.series[p][H] / s.invertedYRatio) : (O = s.drawStackedColumnPaths(D(D({}, Q), {}, { xDivision: x, barWidth: Y, zeroH: m })), z = s.series[p][H] / s.yRatio[P]);
        var _ = s.barHelpers.drawGoalLine({ barXPosition: O.barXPosition, barYPosition: O.barYPosition, goalX: O.goalX, goalY: O.goalY, barHeight: z, barWidth: Y });
        _ && R.add(_), c = O.y, h = O.x, A.push(h), S.push(c);
        var Z = s.barHelpers.getPathFillColor(i, p, H, w), ee = "", W = r.globals.isBarHorizontal ? "apexcharts-flip-x" : "apexcharts-flip-y";
        (s.barHelpers.arrBorderRadius[w][H] === "bottom" && r.globals.series[w][H] > 0 || s.barHelpers.arrBorderRadius[w][H] === "top" && r.globals.series[w][H] < 0) && (ee = W), T = s.renderSeries(D(D({ realIndex: w, pathFill: Z.color }, Z.useRangeColor ? { lineFill: Z.color } : {}), {}, { j: H, i: p, columnGroupIndex: k, pathFrom: O.pathFrom, pathTo: O.pathTo, strokeWidth: U, elSeries: T, x: h, y: c, series: i, barHeight: z, barWidth: Y, elDataLabelsWrap: I, elGoalsMarkers: R, type: "bar", visibleSeries: k, classes: ee }));
      }
      r.globals.seriesXvalues[w] = A, r.globals.seriesYvalues[w] = S, s.groupCtx.prevY.push(s.groupCtx.yArrj), s.groupCtx.prevYF.push(s.groupCtx.yArrjF), s.groupCtx.prevYVal.push(s.groupCtx.yArrjVal), s.groupCtx.prevX.push(s.groupCtx.xArrj), s.groupCtx.prevXF.push(s.groupCtx.xArrjF), s.groupCtx.prevXVal.push(s.groupCtx.xArrjVal), l.add(T);
    }, u = 0, g = 0; u < i.length; u++, g++) d(u, g);
    return l;
  } }, { key: "initialPositions", value: function(i, a, s, r, o, l, h) {
    var c, d, u = this.w;
    if (this.isHorizontal) {
      r = u.globals.gridHeight / u.globals.dataPoints;
      var g = u.config.plotOptions.bar.barHeight;
      c = String(g).indexOf("%") === -1 ? parseInt(g, 10) : r * parseInt(g, 10) / 100, l = u.globals.padHorizontal + (this.isReversed ? u.globals.gridWidth - this.baseLineInvertedY : this.baseLineInvertedY), a = (r - c) / 2;
    } else {
      d = s = u.globals.gridWidth / u.globals.dataPoints;
      var p = u.config.plotOptions.bar.columnWidth;
      u.globals.isXNumeric && u.globals.dataPoints > 1 ? d = (s = u.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : String(p).indexOf("%") === -1 ? d = parseInt(p, 10) : d *= parseInt(p, 10) / 100, o = this.isReversed ? this.baseLineY[h] : u.globals.gridHeight - this.baseLineY[h], i = u.globals.padHorizontal + (s - d) / 2;
    }
    var f = u.globals.barGroups.length || 1;
    return { x: i, y: a, yDivision: r, xDivision: s, barHeight: c / f, barWidth: d / f, zeroH: o, zeroW: l };
  } }, { key: "drawStackedBarPaths", value: function(i) {
    for (var a, s = i.indexes, r = i.barHeight, o = i.strokeWidth, l = i.zeroW, h = i.x, c = i.y, d = i.columnGroupIndex, u = i.seriesGroup, g = i.yDivision, p = i.elSeries, f = this.w, x = c + d * r, b = s.i, m = s.j, y = s.realIndex, w = s.translationsIndex, v = 0, C = 0; C < this.groupCtx.prevXF.length; C++) v += this.groupCtx.prevXF[C][m];
    var k = b;
    if (f.config.series[y].name && (k = u.indexOf(f.config.series[y].name)), k > 0) {
      var A = l;
      this.groupCtx.prevXVal[k - 1][m] < 0 ? A = this.series[b][m] >= 0 ? this.groupCtx.prevX[k - 1][m] + v - 2 * (this.isReversed ? v : 0) : this.groupCtx.prevX[k - 1][m] : this.groupCtx.prevXVal[k - 1][m] >= 0 && (A = this.series[b][m] >= 0 ? this.groupCtx.prevX[k - 1][m] : this.groupCtx.prevX[k - 1][m] - v + 2 * (this.isReversed ? v : 0)), a = A;
    } else a = l;
    h = this.series[b][m] === null ? a : a + this.series[b][m] / this.invertedYRatio - 2 * (this.isReversed ? this.series[b][m] / this.invertedYRatio : 0);
    var S = this.barHelpers.getBarpaths({ barYPosition: x, barHeight: r, x1: a, x2: h, strokeWidth: o, isReversed: this.isReversed, series: this.series, realIndex: s.realIndex, seriesGroup: u, i: b, j: m, w: f });
    return this.barHelpers.barBackground({ j: m, i: b, y1: x, y2: r, elSeries: p }), c += g, { pathTo: S.pathTo, pathFrom: S.pathFrom, goalX: this.barHelpers.getGoalValues("x", l, null, b, m, w), barXPosition: a, barYPosition: x, x: h, y: c };
  } }, { key: "drawStackedColumnPaths", value: function(i) {
    var a = i.indexes, s = i.x, r = i.y, o = i.xDivision, l = i.barWidth, h = i.zeroH, c = i.columnGroupIndex, d = i.seriesGroup, u = i.elSeries, g = this.w, p = a.i, f = a.j, x = a.bc, b = a.realIndex, m = a.translationsIndex;
    if (g.globals.isXNumeric) {
      var y = g.globals.seriesX[b][f];
      y || (y = 0), s = (y - g.globals.minX) / this.xRatio - l / 2 * g.globals.barGroups.length;
    }
    for (var w, v = s + c * l, C = 0, k = 0; k < this.groupCtx.prevYF.length; k++) C += isNaN(this.groupCtx.prevYF[k][f]) ? 0 : this.groupCtx.prevYF[k][f];
    var A = p;
    if (d && (A = d.indexOf(g.globals.seriesNames[b])), A > 0 && !g.globals.isXNumeric || A > 0 && g.globals.isXNumeric && g.globals.seriesX[b - 1][f] === g.globals.seriesX[b][f]) {
      var S, P, T, I = Math.min(this.yRatio.length + 1, b + 1);
      if (this.groupCtx.prevY[A - 1] !== void 0 && this.groupCtx.prevY[A - 1].length) for (var R = 1; R < I; R++) {
        var z;
        if (!isNaN((z = this.groupCtx.prevY[A - R]) === null || z === void 0 ? void 0 : z[f])) {
          T = this.groupCtx.prevY[A - R][f];
          break;
        }
      }
      for (var Y = 1; Y < I; Y++) {
        var N, H;
        if (((N = this.groupCtx.prevYVal[A - Y]) === null || N === void 0 ? void 0 : N[f]) < 0) {
          P = this.series[p][f] >= 0 ? T - C + 2 * (this.isReversed ? C : 0) : T;
          break;
        }
        if (((H = this.groupCtx.prevYVal[A - Y]) === null || H === void 0 ? void 0 : H[f]) >= 0) {
          P = this.series[p][f] >= 0 ? T : T + C - 2 * (this.isReversed ? C : 0);
          break;
        }
      }
      P === void 0 && (P = g.globals.gridHeight), w = (S = this.groupCtx.prevYF[0]) !== null && S !== void 0 && S.every((function(Q) {
        return Q === 0;
      })) && this.groupCtx.prevYF.slice(1, A).every((function(Q) {
        return Q.every((function(O) {
          return isNaN(O);
        }));
      })) ? h : P;
    } else w = h;
    r = this.series[p][f] ? w - this.series[p][f] / this.yRatio[m] + 2 * (this.isReversed ? this.series[p][f] / this.yRatio[m] : 0) : w;
    var U = this.barHelpers.getColumnPaths({ barXPosition: v, barWidth: l, y1: w, y2: r, yRatio: this.yRatio[m], strokeWidth: this.strokeWidth, isReversed: this.isReversed, series: this.series, seriesGroup: d, realIndex: a.realIndex, i: p, j: f, w: g });
    return this.barHelpers.barBackground({ bc: x, j: f, i: p, x1: v, x2: l, elSeries: u }), { pathTo: U.pathTo, pathFrom: U.pathFrom, goalY: this.barHelpers.getGoalValues("y", null, h, p, f), barXPosition: v, x: g.globals.isXNumeric ? s : s + o, y: r };
  } }]), t;
})(), zi = (function(n) {
  Gt(t, Ct);
  var e = Bt(t);
  function t() {
    return q(this, t), e.apply(this, arguments);
  }
  return $(t, [{ key: "draw", value: function(i, a, s) {
    var r = this, o = this.w, l = new X(this.ctx), h = o.globals.comboCharts ? a : o.config.chart.type, c = new Ze(this.ctx);
    this.candlestickOptions = this.w.config.plotOptions.candlestick, this.boxOptions = this.w.config.plotOptions.boxPlot, this.isHorizontal = o.config.plotOptions.bar.horizontal, this.isOHLC = this.candlestickOptions && this.candlestickOptions.type === "ohlc";
    var d = new Le(this.ctx, o);
    i = d.getLogSeries(i), this.series = i, this.yRatio = d.getLogYRatios(this.yRatio), this.barHelpers.initVariables(i);
    for (var u = l.group({ class: "apexcharts-".concat(h, "-series apexcharts-plot-series") }), g = function(f) {
      r.isBoxPlot = o.config.chart.type === "boxPlot" || o.config.series[f].type === "boxPlot";
      var x, b, m, y, w = void 0, v = void 0, C = [], k = [], A = o.globals.comboCharts ? s[f] : f, S = r.barHelpers.getGroupIndex(A).columnGroupIndex, P = l.group({ class: "apexcharts-series", seriesName: L.escapeString(o.globals.seriesNames[A]), rel: f + 1, "data:realIndex": A });
      r.ctx.series.addCollapsedClassToSeries(P, A), i[f].length > 0 && (r.visibleI = r.visibleI + 1);
      var T, I, R = 0;
      r.yRatio.length > 1 && (r.yaxisIndex = o.globals.seriesYAxisReverseMap[A][0], R = A);
      var z = r.barHelpers.initialPositions(A);
      v = z.y, T = z.barHeight, b = z.yDivision, y = z.zeroW, w = z.x, I = z.barWidth, x = z.xDivision, m = z.zeroH, k.push(w + I / 2);
      for (var Y = l.group({ class: "apexcharts-datalabels", "data:realIndex": A }), N = l.group({ class: "apexcharts-bar-goals-markers" }), H = function(Q) {
        var O = r.barHelpers.getStrokeWidth(f, Q, A), _ = null, Z = { indexes: { i: f, j: Q, realIndex: A, translationsIndex: R }, x: w, y: v, strokeWidth: O, elSeries: P };
        _ = r.isHorizontal ? r.drawHorizontalBoxPaths(D(D({}, Z), {}, { yDivision: b, barHeight: T, zeroW: y })) : r.drawVerticalBoxPaths(D(D({}, Z), {}, { xDivision: x, barWidth: I, zeroH: m })), v = _.y, w = _.x;
        var ee = r.barHelpers.drawGoalLine({ barXPosition: _.barXPosition, barYPosition: _.barYPosition, goalX: _.goalX, goalY: _.goalY, barHeight: T, barWidth: I });
        ee && N.add(ee), Q > 0 && k.push(w + I / 2), C.push(v), _.pathTo.forEach((function(W, se) {
          var B = !r.isBoxPlot && r.candlestickOptions.wick.useFillColor ? _.color[se] : o.globals.stroke.colors[f], G = c.fillPath({ seriesNumber: A, dataPointIndex: Q, color: _.color[se], value: i[f][Q] });
          r.renderSeries({ realIndex: A, pathFill: G, lineFill: B, j: Q, i: f, pathFrom: _.pathFrom, pathTo: W, strokeWidth: O, elSeries: P, x: w, y: v, series: i, columnGroupIndex: S, barHeight: T, barWidth: I, elDataLabelsWrap: Y, elGoalsMarkers: N, visibleSeries: r.visibleI, type: o.config.chart.type });
        }));
      }, U = 0; U < o.globals.dataPoints; U++) H(U);
      o.globals.seriesXvalues[A] = k, o.globals.seriesYvalues[A] = C, u.add(P);
    }, p = 0; p < i.length; p++) g(p);
    return u;
  } }, { key: "drawVerticalBoxPaths", value: function(i) {
    var a = i.indexes, s = i.x;
    i.y;
    var r = i.xDivision, o = i.barWidth, l = i.zeroH, h = i.strokeWidth, c = this.w, d = new X(this.ctx), u = a.i, g = a.j, p = c.config.plotOptions.candlestick.colors, f = this.boxOptions.colors, x = a.realIndex, b = function(U) {
      return Array.isArray(U) ? U[x] : U;
    }, m = b(p.upward), y = b(p.downward), w = this.yRatio[a.translationsIndex], v = this.getOHLCValue(x, g), C = l, k = l, A = v.o < v.c ? [m] : [y];
    this.isBoxPlot && (A = [b(f.lower), b(f.upper)]);
    var S = Math.min(v.o, v.c), P = Math.max(v.o, v.c), T = v.m;
    c.globals.isXNumeric && (s = (c.globals.seriesX[x][g] - c.globals.minX) / this.xRatio - o / 2);
    var I = s + o * this.visibleI;
    this.series[u][g] === void 0 || this.series[u][g] === null ? (S = l, P = l) : (S = l - S / w, P = l - P / w, C = l - v.h / w, k = l - v.l / w, T = l - v.m / w);
    var R = d.move(I, l), z = d.move(I + o / 2, S);
    if (c.globals.previousPaths.length > 0 && (z = this.getPreviousPath(x, g, !0)), this.isOHLC) {
      var Y = I + o / 2, N = l - v.o / w, H = l - v.c / w;
      R = [d.move(Y, C) + d.line(Y, k) + d.move(Y, N) + d.line(I, N) + d.move(Y, H) + d.line(I + o, H)];
    } else R = this.isBoxPlot ? [d.move(I, S) + d.line(I + o / 2, S) + d.line(I + o / 2, C) + d.line(I + o / 4, C) + d.line(I + o - o / 4, C) + d.line(I + o / 2, C) + d.line(I + o / 2, S) + d.line(I + o, S) + d.line(I + o, T) + d.line(I, T) + d.line(I, S + h / 2), d.move(I, T) + d.line(I + o, T) + d.line(I + o, P) + d.line(I + o / 2, P) + d.line(I + o / 2, k) + d.line(I + o - o / 4, k) + d.line(I + o / 4, k) + d.line(I + o / 2, k) + d.line(I + o / 2, P) + d.line(I, P) + d.line(I, T) + "z"] : [d.move(I, P) + d.line(I + o / 2, P) + d.line(I + o / 2, C) + d.line(I + o / 2, P) + d.line(I + o, P) + d.line(I + o, S) + d.line(I + o / 2, S) + d.line(I + o / 2, k) + d.line(I + o / 2, S) + d.line(I, S) + d.line(I, P - h / 2)];
    return z += d.move(I, S), c.globals.isXNumeric || (s += r), { pathTo: R, pathFrom: z, x: s, y: P, goalY: this.barHelpers.getGoalValues("y", null, l, u, g, a.translationsIndex), barXPosition: I, color: A };
  } }, { key: "drawHorizontalBoxPaths", value: function(i) {
    var a = i.indexes;
    i.x;
    var s = i.y, r = i.yDivision, o = i.barHeight, l = i.zeroW, h = i.strokeWidth, c = this.w, d = new X(this.ctx), u = a.i, g = a.j, p = this.boxOptions.colors.lower;
    this.isBoxPlot && (p = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
    var f = this.invertedYRatio, x = a.realIndex, b = this.getOHLCValue(x, g), m = l, y = l, w = Math.min(b.o, b.c), v = Math.max(b.o, b.c), C = b.m;
    c.globals.isXNumeric && (s = (c.globals.seriesX[x][g] - c.globals.minX) / this.invertedXRatio - o / 2);
    var k = s + o * this.visibleI;
    this.series[u][g] === void 0 || this.series[u][g] === null ? (w = l, v = l) : (w = l + w / f, v = l + v / f, m = l + b.h / f, y = l + b.l / f, C = l + b.m / f);
    var A = d.move(l, k), S = d.move(w, k + o / 2);
    return c.globals.previousPaths.length > 0 && (S = this.getPreviousPath(x, g, !0)), A = [d.move(w, k) + d.line(w, k + o / 2) + d.line(m, k + o / 2) + d.line(m, k + o / 2 - o / 4) + d.line(m, k + o / 2 + o / 4) + d.line(m, k + o / 2) + d.line(w, k + o / 2) + d.line(w, k + o) + d.line(C, k + o) + d.line(C, k) + d.line(w + h / 2, k), d.move(C, k) + d.line(C, k + o) + d.line(v, k + o) + d.line(v, k + o / 2) + d.line(y, k + o / 2) + d.line(y, k + o - o / 4) + d.line(y, k + o / 4) + d.line(y, k + o / 2) + d.line(v, k + o / 2) + d.line(v, k) + d.line(C, k) + "z"], S += d.move(w, k), c.globals.isXNumeric || (s += r), { pathTo: A, pathFrom: S, x: v, y: s, goalX: this.barHelpers.getGoalValues("x", l, null, u, g), barYPosition: k, color: p };
  } }, { key: "getOHLCValue", value: function(i, a) {
    var s = this.w, r = new Le(this.ctx, s), o = r.getLogValAtSeriesIndex(s.globals.seriesCandleH[i][a], i), l = r.getLogValAtSeriesIndex(s.globals.seriesCandleO[i][a], i), h = r.getLogValAtSeriesIndex(s.globals.seriesCandleM[i][a], i), c = r.getLogValAtSeriesIndex(s.globals.seriesCandleC[i][a], i), d = r.getLogValAtSeriesIndex(s.globals.seriesCandleL[i][a], i);
    return { o: this.isBoxPlot ? o : l, h: this.isBoxPlot ? l : o, m: h, l: this.isBoxPlot ? c : d, c: this.isBoxPlot ? d : c };
  } }]), t;
})(), br = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
  }
  return $(n, [{ key: "checkColorRange", value: function() {
    var e = this.w, t = !1, i = e.config.plotOptions[e.config.chart.type];
    return i.colorScale.ranges.length > 0 && i.colorScale.ranges.map((function(a, s) {
      a.from <= 0 && (t = !0);
    })), t;
  } }, { key: "getShadeColor", value: function(e, t, i, a) {
    var s = this.w, r = 1, o = s.config.plotOptions[e].shadeIntensity, l = this.determineColor(e, t, i);
    s.globals.hasNegs || a ? r = s.config.plotOptions[e].reverseNegativeShade ? l.percent < 0 ? l.percent / 100 * (1.25 * o) : (1 - l.percent / 100) * (1.25 * o) : l.percent <= 0 ? 1 - (1 + l.percent / 100) * o : (1 - l.percent / 100) * o : (r = 1 - l.percent / 100, e === "treemap" && (r = (1 - l.percent / 100) * (1.25 * o)));
    var h = l.color, c = new L();
    if (s.config.plotOptions[e].enableShades) if (this.w.config.theme.mode === "dark") {
      var d = c.shadeColor(-1 * r, l.color);
      h = L.hexToRgba(L.isColorHex(d) ? d : L.rgb2hex(d), s.config.fill.opacity);
    } else {
      var u = c.shadeColor(r, l.color);
      h = L.hexToRgba(L.isColorHex(u) ? u : L.rgb2hex(u), s.config.fill.opacity);
    }
    return { color: h, colorProps: l };
  } }, { key: "determineColor", value: function(e, t, i) {
    var a = this.w, s = a.globals.series[t][i], r = a.config.plotOptions[e], o = r.colorScale.inverse ? i : t;
    r.distributed && a.config.chart.type === "treemap" && (o = i);
    var l = a.globals.colors[o], h = null, c = Math.min.apply(Math, Ee(a.globals.series[t])), d = Math.max.apply(Math, Ee(a.globals.series[t]));
    r.distributed || e !== "heatmap" || (c = a.globals.minY, d = a.globals.maxY), r.colorScale.min !== void 0 && (c = r.colorScale.min < a.globals.minY ? r.colorScale.min : a.globals.minY, d = r.colorScale.max > a.globals.maxY ? r.colorScale.max : a.globals.maxY);
    var u = Math.abs(d) + Math.abs(c), g = 100 * s / (u === 0 ? u - 1e-6 : u);
    return r.colorScale.ranges.length > 0 && r.colorScale.ranges.map((function(p, f) {
      if (s >= p.from && s <= p.to) {
        l = p.color, h = p.foreColor ? p.foreColor : null, c = p.from, d = p.to;
        var x = Math.abs(d) + Math.abs(c);
        g = 100 * s / (x === 0 ? x - 1e-6 : x);
      }
    })), { color: l, foreColor: h, percent: g };
  } }, { key: "calculateDataLabels", value: function(e) {
    var t = e.text, i = e.x, a = e.y, s = e.i, r = e.j, o = e.colorProps, l = e.fontSize, h = this.w.config.dataLabels, c = new X(this.ctx), d = new At(this.ctx), u = null;
    if (h.enabled) {
      u = c.group({ class: "apexcharts-data-labels" });
      var g = h.offsetX, p = h.offsetY, f = i + g, x = a + parseFloat(h.style.fontSize) / 3 + p;
      d.plotDataLabelsText({ x: f, y: x, text: t, i: s, j: r, color: o.foreColor, parent: u, fontSize: l, dataLabelsConfig: h });
    }
    return u;
  } }, { key: "addListeners", value: function(e) {
    var t = new X(this.ctx);
    e.node.addEventListener("mouseenter", t.pathMouseEnter.bind(this, e)), e.node.addEventListener("mouseleave", t.pathMouseLeave.bind(this, e)), e.node.addEventListener("mousedown", t.pathMouseDown.bind(this, e));
  } }]), n;
})(), nl = (function() {
  function n(e, t) {
    q(this, n), this.ctx = e, this.w = e.w, this.xRatio = t.xRatio, this.yRatio = t.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new br(e), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0;
  }
  return $(n, [{ key: "draw", value: function(e) {
    var t = this.w, i = new X(this.ctx), a = i.group({ class: "apexcharts-heatmap" });
    a.attr("clip-path", "url(#gridRectMask".concat(t.globals.cuid, ")"));
    var s = t.globals.gridWidth / t.globals.dataPoints, r = t.globals.gridHeight / t.globals.series.length, o = 0, l = !1;
    this.negRange = this.helpers.checkColorRange();
    var h = e.slice();
    t.config.yaxis[0].reversed && (l = !0, h.reverse());
    for (var c = l ? 0 : h.length - 1; l ? c < h.length : c >= 0; l ? c++ : c--) {
      var d = i.group({ class: "apexcharts-series apexcharts-heatmap-series", seriesName: L.escapeString(t.globals.seriesNames[c]), rel: c + 1, "data:realIndex": c });
      if (this.ctx.series.addCollapsedClassToSeries(d, c), t.config.chart.dropShadow.enabled) {
        var u = t.config.chart.dropShadow;
        new Re(this.ctx).dropShadow(d, u, c);
      }
      for (var g = 0, p = t.config.plotOptions.heatmap.shadeIntensity, f = 0, x = 0; x < t.globals.dataPoints; x++) if (t.globals.seriesX.length && !t.globals.allSeriesHasEqualX && t.globals.minX + t.globals.minXDiff * x < t.globals.seriesX[c][f]) g += s;
      else {
        if (f >= h[c].length) break;
        var b = this.helpers.getShadeColor(t.config.chart.type, c, f, this.negRange), m = b.color, y = b.colorProps;
        t.config.fill.type === "image" && (m = new Ze(this.ctx).fillPath({ seriesNumber: c, dataPointIndex: f, opacity: t.globals.hasNegs ? y.percent < 0 ? 1 - (1 + y.percent / 100) : p + y.percent / 100 : y.percent / 100, patternID: L.randomId(), width: t.config.fill.image.width ? t.config.fill.image.width : s, height: t.config.fill.image.height ? t.config.fill.image.height : r }));
        var w = this.rectRadius, v = i.drawRect(g, o, s, r, w);
        if (v.attr({ cx: g, cy: o }), v.node.classList.add("apexcharts-heatmap-rect"), d.add(v), v.attr({ fill: m, i: c, index: c, j: f, val: e[c][f], "stroke-width": this.strokeWidth, stroke: t.config.plotOptions.heatmap.useFillColorAsStroke ? m : t.globals.stroke.colors[0], color: m }), this.helpers.addListeners(v), t.config.chart.animations.enabled && !t.globals.dataChanged) {
          var C = 1;
          t.globals.resized || (C = t.config.chart.animations.speed), this.animateHeatMap(v, g, o, s, r, C);
        }
        if (t.globals.dataChanged) {
          var k = 1;
          if (this.dynamicAnim.enabled && t.globals.shouldAnimate) {
            k = this.dynamicAnim.speed;
            var A = t.globals.previousPaths[c] && t.globals.previousPaths[c][f] && t.globals.previousPaths[c][f].color;
            A || (A = "rgba(255, 255, 255, 0)"), this.animateHeatColor(v, L.isColorHex(A) ? A : L.rgb2hex(A), L.isColorHex(m) ? m : L.rgb2hex(m), k);
          }
        }
        var S = (0, t.config.dataLabels.formatter)(t.globals.series[c][f], { value: t.globals.series[c][f], seriesIndex: c, dataPointIndex: f, w: t }), P = this.helpers.calculateDataLabels({ text: S, x: g + s / 2, y: o + r / 2, i: c, j: f, colorProps: y, series: h });
        P !== null && d.add(P), g += s, f++;
      }
      o += r, a.add(d);
    }
    var T = t.globals.yAxisScale[0].result.slice();
    return t.config.yaxis[0].reversed ? T.unshift("") : T.push(""), t.globals.yAxisScale[0].result = T, a;
  } }, { key: "animateHeatMap", value: function(e, t, i, a, s, r) {
    var o = new St(this.ctx);
    o.animateRect(e, { x: t + a / 2, y: i + s / 2, width: 0, height: 0 }, { x: t, y: i, width: a, height: s }, r, (function() {
      o.animationCompleted(e);
    }));
  } }, { key: "animateHeatColor", value: function(e, t, i, a) {
    e.attr({ fill: t }).animate(a).attr({ fill: i });
  } }]), n;
})(), mr = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
  }
  return $(n, [{ key: "drawYAxisTexts", value: function(e, t, i, a) {
    var s = this.w, r = s.config.yaxis[0], o = s.globals.yLabelFormatters[0];
    return new X(this.ctx).drawText({ x: e + r.labels.offsetX, y: t + r.labels.offsetY, text: o(a, i), textAnchor: "middle", fontSize: r.labels.style.fontSize, fontFamily: r.labels.style.fontFamily, foreColor: Array.isArray(r.labels.style.colors) ? r.labels.style.colors[i] : r.labels.style.colors });
  } }]), n;
})(), vr = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
    var t = this.w;
    this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = t.globals.stroke.colors !== void 0 ? t.globals.stroke.colors : t.globals.colors, this.defaultSize = Math.min(t.globals.gridWidth, t.globals.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = t.globals.gridWidth / 2, t.config.chart.type === "radialBar" ? this.fullAngle = 360 : this.fullAngle = Math.abs(t.config.plotOptions.pie.endAngle - t.config.plotOptions.pie.startAngle), this.initialAngle = t.config.plotOptions.pie.startAngle % this.fullAngle, t.globals.radialSize = this.defaultSize / 2.05 - t.config.stroke.width - (t.config.chart.sparkline.enabled ? 0 : t.config.chart.dropShadow.blur), this.donutSize = t.globals.radialSize * parseInt(t.config.plotOptions.pie.donut.size, 10) / 100;
    var i = t.config.plotOptions.pie.customScale, a = t.globals.gridWidth / 2, s = t.globals.gridHeight / 2;
    this.translateX = a - a * i, this.translateY = s - s * i, this.dataLabelsGroup = new X(this.ctx).group({ class: "apexcharts-datalabels-group", transform: "translate(".concat(this.translateX, ", ").concat(this.translateY, ") scale(").concat(i, ")") }), this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = [];
  }
  return $(n, [{ key: "draw", value: function(e) {
    var t = this, i = this.w, a = new X(this.ctx), s = a.group({ class: "apexcharts-pie" });
    if (i.globals.noData) return s;
    for (var r = 0, o = 0; o < e.length; o++) r += L.negToZero(e[o]);
    var l = [], h = a.group();
    r === 0 && (r = 1e-5), e.forEach((function(y) {
      t.maxY = Math.max(t.maxY, y);
    })), i.config.yaxis[0].max && (this.maxY = i.config.yaxis[0].max), i.config.grid.position === "back" && this.chartType === "polarArea" && this.drawPolarElements(s);
    for (var c = 0; c < e.length; c++) {
      var d = this.fullAngle * L.negToZero(e[c]) / r;
      l.push(d), this.chartType === "polarArea" ? (l[c] = this.fullAngle / e.length, this.sliceSizes.push(i.globals.radialSize * e[c] / this.maxY)) : this.sliceSizes.push(i.globals.radialSize);
    }
    if (i.globals.dataChanged) {
      for (var u, g = 0, p = 0; p < i.globals.previousPaths.length; p++) g += L.negToZero(i.globals.previousPaths[p]);
      for (var f = 0; f < i.globals.previousPaths.length; f++) u = this.fullAngle * L.negToZero(i.globals.previousPaths[f]) / g, this.prevSectorAngleArr.push(u);
    }
    if (this.donutSize < 0 && (this.donutSize = 0), this.chartType === "donut") {
      var x = a.drawCircle(this.donutSize);
      x.attr({ cx: this.centerX, cy: this.centerY, fill: i.config.plotOptions.pie.donut.background ? i.config.plotOptions.pie.donut.background : "transparent" }), h.add(x);
    }
    var b = this.drawArcs(l, e);
    if (this.sliceLabels.forEach((function(y) {
      b.add(y);
    })), h.attr({ transform: "translate(".concat(this.translateX, ", ").concat(this.translateY, ") scale(").concat(i.config.plotOptions.pie.customScale, ")") }), h.add(b), s.add(h), this.donutDataLabels.show) {
      var m = this.renderInnerDataLabels(this.dataLabelsGroup, this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show });
      s.add(m);
    }
    return i.config.grid.position === "front" && this.chartType === "polarArea" && this.drawPolarElements(s), s;
  } }, { key: "drawArcs", value: function(e, t) {
    var i = this.w, a = new Re(this.ctx), s = new X(this.ctx), r = new Ze(this.ctx), o = s.group({ class: "apexcharts-slices" }), l = this.initialAngle, h = this.initialAngle, c = this.initialAngle, d = this.initialAngle;
    this.strokeWidth = i.config.stroke.show ? i.config.stroke.width : 0;
    for (var u = 0; u < e.length; u++) {
      var g = s.group({ class: "apexcharts-series apexcharts-pie-series", seriesName: L.escapeString(i.globals.seriesNames[u]), rel: u + 1, "data:realIndex": u });
      o.add(g), h = d, c = (l = c) + e[u], d = h + this.prevSectorAngleArr[u];
      var p = c < l ? this.fullAngle + c - l : c - l, f = r.fillPath({ seriesNumber: u, size: this.sliceSizes[u], value: t[u] }), x = this.getChangedPath(h, d), b = s.drawPath({ d: x, stroke: Array.isArray(this.lineColorArr) ? this.lineColorArr[u] : this.lineColorArr, strokeWidth: 0, fill: f, fillOpacity: i.config.fill.opacity, classes: "apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(u) });
      if (b.attr({ index: 0, j: u }), a.setSelectionFilter(b, 0, u), i.config.chart.dropShadow.enabled) {
        var m = i.config.chart.dropShadow;
        a.dropShadow(b, m, u);
      }
      this.addListeners(b, this.donutDataLabels), X.setAttrs(b.node, { "data:angle": p, "data:startAngle": l, "data:strokeWidth": this.strokeWidth, "data:value": t[u] });
      var y = { x: 0, y: 0 };
      this.chartType === "pie" || this.chartType === "polarArea" ? y = L.polarToCartesian(this.centerX, this.centerY, i.globals.radialSize / 1.25 + i.config.plotOptions.pie.dataLabels.offset, (l + p / 2) % this.fullAngle) : this.chartType === "donut" && (y = L.polarToCartesian(this.centerX, this.centerY, (i.globals.radialSize + this.donutSize) / 2 + i.config.plotOptions.pie.dataLabels.offset, (l + p / 2) % this.fullAngle)), g.add(b);
      var w = 0;
      if (!this.initialAnim || i.globals.resized || i.globals.dataChanged ? this.animBeginArr.push(0) : ((w = p / this.fullAngle * i.config.chart.animations.speed) === 0 && (w = 1), this.animDur = w + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && i.globals.dataChanged ? this.animatePaths(b, { size: this.sliceSizes[u], endAngle: c, startAngle: l, prevStartAngle: h, prevEndAngle: d, animateStartingPos: !0, i: u, animBeginArr: this.animBeginArr, shouldSetPrevPaths: !0, dur: i.config.chart.animations.dynamicAnimation.speed }) : this.animatePaths(b, { size: this.sliceSizes[u], endAngle: c, startAngle: l, i: u, totalItems: e.length - 1, animBeginArr: this.animBeginArr, dur: w }), i.config.plotOptions.pie.expandOnClick && this.chartType !== "polarArea" && b.node.addEventListener("mouseup", this.pieClicked.bind(this, u)), i.globals.selectedDataPoints[0] !== void 0 && i.globals.selectedDataPoints[0].indexOf(u) > -1 && this.pieClicked(u), i.config.dataLabels.enabled) {
        var v = y.x, C = y.y, k = 100 * p / this.fullAngle + "%";
        if (p !== 0 && i.config.plotOptions.pie.dataLabels.minAngleToShowLabel < e[u]) {
          var A = i.config.dataLabels.formatter;
          A !== void 0 && (k = A(i.globals.seriesPercent[u][0], { seriesIndex: u, w: i }));
          var S = i.globals.dataLabels.style.colors[u], P = s.group({ class: "apexcharts-datalabels" }), T = s.drawText({ x: v, y: C, text: k, textAnchor: "middle", fontSize: i.config.dataLabels.style.fontSize, fontFamily: i.config.dataLabels.style.fontFamily, fontWeight: i.config.dataLabels.style.fontWeight, foreColor: S });
          if (P.add(T), i.config.dataLabels.dropShadow.enabled) {
            var I = i.config.dataLabels.dropShadow;
            a.dropShadow(T, I);
          }
          T.node.classList.add("apexcharts-pie-label"), i.config.chart.animations.animate && i.globals.resized === !1 && (T.node.classList.add("apexcharts-pie-label-delay"), T.node.style.animationDelay = i.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(P);
        }
      }
    }
    return o;
  } }, { key: "addListeners", value: function(e, t) {
    var i = new X(this.ctx);
    e.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this, e)), e.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this, e)), e.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, e.node, t)), e.node.addEventListener("mousedown", i.pathMouseDown.bind(this, e)), this.donutDataLabels.total.showAlways || (e.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, e.node, t)), e.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, e.node, t)));
  } }, { key: "animatePaths", value: function(e, t) {
    var i = this.w, a = t.endAngle < t.startAngle ? this.fullAngle + t.endAngle - t.startAngle : t.endAngle - t.startAngle, s = a, r = t.startAngle, o = t.startAngle;
    t.prevStartAngle !== void 0 && t.prevEndAngle !== void 0 && (r = t.prevEndAngle, s = t.prevEndAngle < t.prevStartAngle ? this.fullAngle + t.prevEndAngle - t.prevStartAngle : t.prevEndAngle - t.prevStartAngle), t.i === i.config.series.length - 1 && (a + o > this.fullAngle ? t.endAngle = t.endAngle - (a + o) : a + o < this.fullAngle && (t.endAngle = t.endAngle + (this.fullAngle - (a + o)))), a === this.fullAngle && (a = this.fullAngle - 0.01), this.animateArc(e, r, o, a, s, t);
  } }, { key: "animateArc", value: function(e, t, i, a, s, r) {
    var o, l = this, h = this.w, c = new St(this.ctx), d = r.size;
    (isNaN(t) || isNaN(s)) && (t = i, s = a, r.dur = 0);
    var u = a, g = i, p = t < i ? this.fullAngle + t - i : t - i;
    h.globals.dataChanged && r.shouldSetPrevPaths && r.prevEndAngle && (o = l.getPiePath({ me: l, startAngle: r.prevStartAngle, angle: r.prevEndAngle < r.prevStartAngle ? this.fullAngle + r.prevEndAngle - r.prevStartAngle : r.prevEndAngle - r.prevStartAngle, size: d }), e.attr({ d: o })), r.dur !== 0 ? e.animate(r.dur, r.animBeginArr[r.i]).after((function() {
      l.chartType !== "pie" && l.chartType !== "donut" && l.chartType !== "polarArea" || this.animate(h.config.chart.animations.dynamicAnimation.speed).attr({ "stroke-width": l.strokeWidth }), r.i === h.config.series.length - 1 && c.animationCompleted(e);
    })).during((function(f) {
      u = p + (a - p) * f, r.animateStartingPos && (u = s + (a - s) * f, g = t - s + (i - (t - s)) * f), o = l.getPiePath({ me: l, startAngle: g, angle: u, size: d }), e.node.setAttribute("data:pathOrig", o), e.attr({ d: o });
    })) : (o = l.getPiePath({ me: l, startAngle: g, angle: a, size: d }), r.isTrack || (h.globals.animationEnded = !0), e.node.setAttribute("data:pathOrig", o), e.attr({ d: o, "stroke-width": l.strokeWidth }));
  } }, { key: "pieClicked", value: function(e) {
    var t, i = this.w, a = this, s = a.sliceSizes[e] + (i.config.plotOptions.pie.expandOnClick ? 4 : 0), r = i.globals.dom.Paper.findOne(".apexcharts-".concat(a.chartType.toLowerCase(), "-slice-").concat(e));
    if (r.attr("data:pieClicked") !== "true") {
      var o = i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");
      Array.prototype.forEach.call(o, (function(d) {
        d.setAttribute("data:pieClicked", "false");
        var u = d.getAttribute("data:pathOrig");
        u && d.setAttribute("d", u);
      })), i.globals.capturedDataPointIndex = e, r.attr("data:pieClicked", "true");
      var l = parseInt(r.attr("data:startAngle"), 10), h = parseInt(r.attr("data:angle"), 10);
      t = a.getPiePath({ me: a, startAngle: l, angle: h, size: s }), h !== 360 && r.plot(t);
    } else {
      r.attr({ "data:pieClicked": "false" }), this.revertDataLabelsInner(r.node, this.donutDataLabels);
      var c = r.attr("data:pathOrig");
      r.attr({ d: c });
    }
  } }, { key: "getChangedPath", value: function(e, t) {
    var i = "";
    return this.dynamicAnim && this.w.globals.dataChanged && (i = this.getPiePath({ me: this, startAngle: e, angle: t - e, size: this.size })), i;
  } }, { key: "getPiePath", value: function(e) {
    var t, i = e.me, a = e.startAngle, s = e.angle, r = e.size, o = new X(this.ctx), l = a, h = Math.PI * (l - 90) / 180, c = s + a;
    Math.ceil(c) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (c = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - 0.01), Math.ceil(c) > this.fullAngle && (c -= this.fullAngle);
    var d = Math.PI * (c - 90) / 180, u = i.centerX + r * Math.cos(h), g = i.centerY + r * Math.sin(h), p = i.centerX + r * Math.cos(d), f = i.centerY + r * Math.sin(d), x = L.polarToCartesian(i.centerX, i.centerY, i.donutSize, c), b = L.polarToCartesian(i.centerX, i.centerY, i.donutSize, l), m = s > 180 ? 1 : 0, y = ["M", u, g, "A", r, r, 0, m, 1, p, f];
    return t = i.chartType === "donut" ? [].concat(y, ["L", x.x, x.y, "A", i.donutSize, i.donutSize, 0, m, 0, b.x, b.y, "L", u, g, "z"]).join(" ") : i.chartType === "pie" || i.chartType === "polarArea" ? [].concat(y, ["L", i.centerX, i.centerY, "L", u, g]).join(" ") : [].concat(y).join(" "), o.roundPathCorners(t, 2 * this.strokeWidth);
  } }, { key: "drawPolarElements", value: function(e) {
    var t = this.w, i = new ur(this.ctx), a = new X(this.ctx), s = new mr(this.ctx), r = a.group(), o = a.group(), l = i.niceScale(0, Math.ceil(this.maxY), 0), h = l.result.reverse(), c = l.result.length;
    this.maxY = l.niceMax;
    for (var d = t.globals.radialSize, u = d / (c - 1), g = 0; g < c - 1; g++) {
      var p = a.drawCircle(d);
      if (p.attr({ cx: this.centerX, cy: this.centerY, fill: "none", "stroke-width": t.config.plotOptions.polarArea.rings.strokeWidth, stroke: t.config.plotOptions.polarArea.rings.strokeColor }), t.config.yaxis[0].show) {
        var f = s.drawYAxisTexts(this.centerX, this.centerY - d + parseInt(t.config.yaxis[0].labels.style.fontSize, 10) / 2, g, h[g]);
        o.add(f);
      }
      r.add(p), d -= u;
    }
    this.drawSpokes(e), e.add(r), e.add(o);
  } }, { key: "renderInnerDataLabels", value: function(e, t, i) {
    var a = this.w, s = new X(this.ctx), r = t.total.show;
    e.node.innerHTML = "", e.node.style.opacity = i.opacity;
    var o, l, h = i.centerX, c = this.donutDataLabels.total.label ? i.centerY : i.centerY - i.centerY / 6;
    o = t.name.color === void 0 ? a.globals.colors[0] : t.name.color;
    var d = t.name.fontSize, u = t.name.fontFamily, g = t.name.fontWeight;
    l = t.value.color === void 0 ? a.config.chart.foreColor : t.value.color;
    var p = t.value.formatter, f = "", x = "";
    if (r ? (o = t.total.color, d = t.total.fontSize, u = t.total.fontFamily, g = t.total.fontWeight, x = this.donutDataLabels.total.label ? t.total.label : "", f = t.total.formatter(a)) : a.globals.series.length === 1 && (f = p(a.globals.series[0], a), x = a.globals.seriesNames[0]), x && (x = t.name.formatter(x, t.total.show, a)), t.name.show) {
      var b = s.drawText({ x: h, y: c + parseFloat(t.name.offsetY), text: x, textAnchor: "middle", foreColor: o, fontSize: d, fontWeight: g, fontFamily: u });
      b.node.classList.add("apexcharts-datalabel-label"), e.add(b);
    }
    if (t.value.show) {
      var m = t.name.show ? parseFloat(t.value.offsetY) + 16 : t.value.offsetY, y = s.drawText({ x: h, y: c + m, text: f, textAnchor: "middle", foreColor: l, fontWeight: t.value.fontWeight, fontSize: t.value.fontSize, fontFamily: t.value.fontFamily });
      y.node.classList.add("apexcharts-datalabel-value"), e.add(y);
    }
    return e;
  } }, { key: "printInnerLabels", value: function(e, t, i, a) {
    var s, r = this.w;
    a ? s = e.name.color === void 0 ? r.globals.colors[parseInt(a.parentNode.getAttribute("rel"), 10) - 1] : e.name.color : r.globals.series.length > 1 && e.total.show && (s = e.total.color);
    var o = r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"), l = r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
    i = (0, e.value.formatter)(i, r), a || typeof e.total.formatter != "function" || (i = e.total.formatter(r));
    var h = t === e.total.label;
    t = this.donutDataLabels.total.label ? e.name.formatter(t, h, r) : "", o !== null && (o.textContent = t), l !== null && (l.textContent = i), o !== null && (o.style.fill = s);
  } }, { key: "printDataLabelsInner", value: function(e, t) {
    var i = this.w, a = e.getAttribute("data:value"), s = i.globals.seriesNames[parseInt(e.parentNode.getAttribute("rel"), 10) - 1];
    i.globals.series.length > 1 && this.printInnerLabels(t, s, a, e);
    var r = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
    r !== null && (r.style.opacity = 1);
  } }, { key: "drawSpokes", value: function(e) {
    var t = this, i = this.w, a = new X(this.ctx), s = i.config.plotOptions.polarArea.spokes;
    if (s.strokeWidth !== 0) {
      for (var r = [], o = 360 / i.globals.series.length, l = 0; l < i.globals.series.length; l++) r.push(L.polarToCartesian(this.centerX, this.centerY, i.globals.radialSize, i.config.plotOptions.pie.startAngle + o * l));
      r.forEach((function(h, c) {
        var d = a.drawLine(h.x, h.y, t.centerX, t.centerY, Array.isArray(s.connectorColors) ? s.connectorColors[c] : s.connectorColors);
        e.add(d);
      }));
    }
  } }, { key: "revertDataLabelsInner", value: function() {
    var e = this.w;
    if (this.donutDataLabels.show) {
      var t = e.globals.dom.Paper.findOne(".apexcharts-datalabels-group"), i = this.renderInnerDataLabels(t, this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show });
      e.globals.dom.Paper.findOne(".apexcharts-radialbar, .apexcharts-pie").add(i);
    }
  } }]), n;
})(), ol = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0;
    var t = this.w;
    this.graphics = new X(this.ctx), this.lineColorArr = t.globals.stroke.colors !== void 0 ? t.globals.stroke.colors : t.globals.colors, this.defaultSize = t.globals.svgHeight < t.globals.svgWidth ? t.globals.gridHeight : t.globals.gridWidth, this.isLog = t.config.yaxis[0].logarithmic, this.logBase = t.config.yaxis[0].logBase, this.coreUtils = new Le(this.ctx), this.maxValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, t.globals.maxY, 0) : t.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, this.w.globals.minY, 0) : t.globals.minY, this.polygons = t.config.plotOptions.radar.polygons, this.strokeWidth = t.config.stroke.show ? t.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - t.config.chart.dropShadow.blur, t.config.xaxis.labels.show && (this.size = this.size - t.globals.xAxisLabelsWidth / 1.75), t.config.plotOptions.radar.size !== void 0 && (this.size = t.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = [];
  }
  return $(n, [{ key: "draw", value: function(e) {
    var t = this, i = this.w, a = new Ze(this.ctx), s = [], r = new At(this.ctx);
    e.length && (this.dataPointsLen = e[i.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen;
    var o = i.globals.gridWidth / 2, l = i.globals.gridHeight / 2, h = o + i.config.plotOptions.radar.offsetX, c = l + i.config.plotOptions.radar.offsetY, d = this.graphics.group({ class: "apexcharts-radar-series apexcharts-plot-series", transform: "translate(".concat(h || 0, ", ").concat(c || 0, ")") }), u = [], g = null, p = null;
    if (this.yaxisLabels = this.graphics.group({ class: "apexcharts-yaxis" }), e.forEach((function(x, b) {
      var m = x.length === i.globals.dataPoints, y = t.graphics.group().attr({ class: "apexcharts-series", "data:longestSeries": m, seriesName: L.escapeString(i.globals.seriesNames[b]), rel: b + 1, "data:realIndex": b });
      t.dataRadiusOfPercent[b] = [], t.dataRadius[b] = [], t.angleArr[b] = [], x.forEach((function(R, z) {
        var Y = Math.abs(t.maxValue - t.minValue);
        R -= t.minValue, t.isLog && (R = t.coreUtils.getLogVal(t.logBase, R, 0)), t.dataRadiusOfPercent[b][z] = R / Y, t.dataRadius[b][z] = t.dataRadiusOfPercent[b][z] * t.size, t.angleArr[b][z] = z * t.disAngle;
      })), u = t.getDataPointsPos(t.dataRadius[b], t.angleArr[b]);
      var w = t.createPaths(u, { x: 0, y: 0 });
      g = t.graphics.group({ class: "apexcharts-series-markers-wrap apexcharts-element-hidden" }), p = t.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": b }), i.globals.delayedElements.push({ el: g.node, index: b });
      var v = { i: b, realIndex: b, animationDelay: b, initialSpeed: i.config.chart.animations.speed, dataChangeSpeed: i.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-radar", shouldClipToGrid: !1, bindEventsOnPaths: !1, stroke: i.globals.stroke.colors[b], strokeLineCap: i.config.stroke.lineCap }, C = null;
      i.globals.previousPaths.length > 0 && (C = t.getPreviousPath(b));
      for (var k = 0; k < w.linePathsTo.length; k++) {
        var A = t.graphics.renderPaths(D(D({}, v), {}, { pathFrom: C === null ? w.linePathsFrom[k] : C, pathTo: w.linePathsTo[k], strokeWidth: Array.isArray(t.strokeWidth) ? t.strokeWidth[b] : t.strokeWidth, fill: "none", drawShadow: !1 }));
        y.add(A);
        var S = a.fillPath({ seriesNumber: b }), P = t.graphics.renderPaths(D(D({}, v), {}, { pathFrom: C === null ? w.areaPathsFrom[k] : C, pathTo: w.areaPathsTo[k], strokeWidth: 0, fill: S, drawShadow: !1 }));
        if (i.config.chart.dropShadow.enabled) {
          var T = new Re(t.ctx), I = i.config.chart.dropShadow;
          T.dropShadow(P, Object.assign({}, I, { noUserSpaceOnUse: !0 }), b);
        }
        y.add(P);
      }
      x.forEach((function(R, z) {
        var Y = new Tt(t.ctx).getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: b, dataPointIndex: z }), N = t.graphics.drawMarker(u[z].x, u[z].y, Y);
        N.attr("rel", z), N.attr("j", z), N.attr("index", b), N.node.setAttribute("default-marker-size", Y.pSize);
        var H = t.graphics.group({ class: "apexcharts-series-markers" });
        H && H.add(N), g.add(H), y.add(g);
        var U = i.config.dataLabels;
        if (U.enabled) {
          var Q = U.formatter(i.globals.series[b][z], { seriesIndex: b, dataPointIndex: z, w: i });
          r.plotDataLabelsText({ x: u[z].x, y: u[z].y, text: Q, textAnchor: "middle", i: b, j: b, parent: p, offsetCorrection: !1, dataLabelsConfig: D({}, U) });
        }
        y.add(p);
      })), s.push(y);
    })), this.drawPolygons({ parent: d }), i.config.xaxis.labels.show) {
      var f = this.drawXAxisTexts();
      d.add(f);
    }
    return s.forEach((function(x) {
      d.add(x);
    })), d.add(this.yaxisLabels), d;
  } }, { key: "drawPolygons", value: function(e) {
    for (var t = this, i = this.w, a = e.parent, s = new mr(this.ctx), r = i.globals.yAxisScale[0].result.reverse(), o = r.length, l = [], h = this.size / (o - 1), c = 0; c < o; c++) l[c] = h * c;
    l.reverse();
    var d = [], u = [];
    l.forEach((function(g, p) {
      var f = L.getPolygonPos(g, t.dataPointsLen), x = "";
      f.forEach((function(b, m) {
        if (p === 0) {
          var y = t.graphics.drawLine(b.x, b.y, 0, 0, Array.isArray(t.polygons.connectorColors) ? t.polygons.connectorColors[m] : t.polygons.connectorColors);
          u.push(y);
        }
        m === 0 && t.yaxisLabelsTextsPos.push({ x: b.x, y: b.y }), x += b.x + "," + b.y + " ";
      })), d.push(x);
    })), d.forEach((function(g, p) {
      var f = t.polygons.strokeColors, x = t.polygons.strokeWidth, b = t.graphics.drawPolygon(g, Array.isArray(f) ? f[p] : f, Array.isArray(x) ? x[p] : x, i.globals.radarPolygons.fill.colors[p]);
      a.add(b);
    })), u.forEach((function(g) {
      a.add(g);
    })), i.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach((function(g, p) {
      var f = s.drawYAxisTexts(g.x, g.y, p, r[p]);
      t.yaxisLabels.add(f);
    }));
  } }, { key: "drawXAxisTexts", value: function() {
    var e = this, t = this.w, i = t.config.xaxis.labels, a = this.graphics.group({ class: "apexcharts-xaxis" }), s = L.getPolygonPos(this.size, this.dataPointsLen);
    return t.globals.labels.forEach((function(r, o) {
      var l = t.config.xaxis.labels.formatter, h = new At(e.ctx);
      if (s[o]) {
        var c = e.getTextPos(s[o], e.size), d = l(r, { seriesIndex: -1, dataPointIndex: o, w: t });
        h.plotDataLabelsText({ x: c.newX, y: c.newY, text: d, textAnchor: c.textAnchor, i: o, j: o, parent: a, className: "apexcharts-xaxis-label", color: Array.isArray(i.style.colors) && i.style.colors[o] ? i.style.colors[o] : "#a8a8a8", dataLabelsConfig: D({ textAnchor: c.textAnchor, dropShadow: { enabled: !1 } }, i), offsetCorrection: !1 }).on("click", (function(u) {
          if (typeof t.config.chart.events.xAxisLabelClick == "function") {
            var g = Object.assign({}, t, { labelIndex: o });
            t.config.chart.events.xAxisLabelClick(u, e.ctx, g);
          }
        }));
      }
    })), a;
  } }, { key: "createPaths", value: function(e, t) {
    var i = this, a = [], s = [], r = [], o = [];
    if (e.length) {
      s = [this.graphics.move(t.x, t.y)], o = [this.graphics.move(t.x, t.y)];
      var l = this.graphics.move(e[0].x, e[0].y), h = this.graphics.move(e[0].x, e[0].y);
      e.forEach((function(c, d) {
        l += i.graphics.line(c.x, c.y), h += i.graphics.line(c.x, c.y), d === e.length - 1 && (l += "Z", h += "Z");
      })), a.push(l), r.push(h);
    }
    return { linePathsFrom: s, linePathsTo: a, areaPathsFrom: o, areaPathsTo: r };
  } }, { key: "getTextPos", value: function(e, t) {
    var i = "middle", a = e.x, s = e.y;
    return Math.abs(e.x) >= 10 ? e.x > 0 ? (i = "start", a += 10) : e.x < 0 && (i = "end", a -= 10) : i = "middle", Math.abs(e.y) >= t - 10 && (e.y < 0 ? s -= 10 : e.y > 0 && (s += 10)), { textAnchor: i, newX: a, newY: s };
  } }, { key: "getPreviousPath", value: function(e) {
    for (var t = this.w, i = null, a = 0; a < t.globals.previousPaths.length; a++) {
      var s = t.globals.previousPaths[a];
      s.paths.length > 0 && parseInt(s.realIndex, 10) === parseInt(e, 10) && t.globals.previousPaths[a].paths[0] !== void 0 && (i = t.globals.previousPaths[a].paths[0].d);
    }
    return i;
  } }, { key: "getDataPointsPos", value: function(e, t) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.dataPointsLen;
    e = e || [], t = t || [];
    for (var a = [], s = 0; s < i; s++) {
      var r = {};
      r.x = e[s] * Math.sin(t[s]), r.y = -e[s] * Math.cos(t[s]), a.push(r);
    }
    return a;
  } }]), n;
})(), ll = (function(n) {
  Gt(t, vr);
  var e = Bt(t);
  function t(i) {
    var a;
    q(this, t), (a = e.call(this, i)).ctx = i, a.w = i.w, a.animBeginArr = [0], a.animDur = 0;
    var s = a.w;
    return a.startAngle = s.config.plotOptions.radialBar.startAngle, a.endAngle = s.config.plotOptions.radialBar.endAngle, a.totalAngle = Math.abs(s.config.plotOptions.radialBar.endAngle - s.config.plotOptions.radialBar.startAngle), a.trackStartAngle = s.config.plotOptions.radialBar.track.startAngle, a.trackEndAngle = s.config.plotOptions.radialBar.track.endAngle, a.barLabels = a.w.config.plotOptions.radialBar.barLabels, a.donutDataLabels = a.w.config.plotOptions.radialBar.dataLabels, a.radialDataLabels = a.donutDataLabels, a.trackStartAngle || (a.trackStartAngle = a.startAngle), a.trackEndAngle || (a.trackEndAngle = a.endAngle), a.endAngle === 360 && (a.endAngle = 359.99), a.margin = parseInt(s.config.plotOptions.radialBar.track.margin, 10), a.onBarLabelClick = a.onBarLabelClick.bind(Rs(a)), a;
  }
  return $(t, [{ key: "draw", value: function(i) {
    var a = this.w, s = new X(this.ctx), r = s.group({ class: "apexcharts-radialbar" });
    if (a.globals.noData) return r;
    var o = s.group(), l = this.defaultSize / 2, h = a.globals.gridWidth / 2, c = this.defaultSize / 2.05;
    a.config.chart.sparkline.enabled || (c = c - a.config.stroke.width - a.config.chart.dropShadow.blur);
    var d = a.globals.fill.colors;
    if (a.config.plotOptions.radialBar.track.show) {
      var u = this.drawTracks({ size: c, centerX: h, centerY: l, colorArr: d, series: i });
      o.add(u);
    }
    var g = this.drawArcs({ size: c, centerX: h, centerY: l, colorArr: d, series: i }), p = 360;
    a.config.plotOptions.radialBar.startAngle < 0 && (p = this.totalAngle);
    var f = (360 - p) / 360;
    if (a.globals.radialSize = c - c * f, this.radialDataLabels.value.show) {
      var x = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY);
      a.globals.radialSize += x * f;
    }
    return o.add(g.g), a.config.plotOptions.radialBar.hollow.position === "front" && (g.g.add(g.elHollow), g.dataLabels && g.g.add(g.dataLabels)), r.add(o), r;
  } }, { key: "drawTracks", value: function(i) {
    var a = this.w, s = new X(this.ctx), r = s.group({ class: "apexcharts-tracks" }), o = new Re(this.ctx), l = new Ze(this.ctx), h = this.getStrokeWidth(i);
    i.size = i.size - h / 2;
    for (var c = 0; c < i.series.length; c++) {
      var d = s.group({ class: "apexcharts-radialbar-track apexcharts-track" });
      r.add(d), d.attr({ rel: c + 1 }), i.size = i.size - h - this.margin;
      var u = a.config.plotOptions.radialBar.track, g = l.fillPath({ seriesNumber: 0, size: i.size, fillColors: Array.isArray(u.background) ? u.background[c] : u.background, solid: !0 }), p = this.trackStartAngle, f = this.trackEndAngle;
      Math.abs(f) + Math.abs(p) >= 360 && (f = 360 - Math.abs(this.startAngle) - 0.1);
      var x = s.drawPath({ d: "", stroke: g, strokeWidth: h * parseInt(u.strokeWidth, 10) / 100, fill: "none", strokeOpacity: u.opacity, classes: "apexcharts-radialbar-area" });
      if (u.dropShadow.enabled) {
        var b = u.dropShadow;
        o.dropShadow(x, b);
      }
      d.add(x), x.attr("id", "apexcharts-radialbarTrack-" + c), this.animatePaths(x, { centerX: i.centerX, centerY: i.centerY, endAngle: f, startAngle: p, size: i.size, i: c, totalItems: 2, animBeginArr: 0, dur: 0, isTrack: !0 });
    }
    return r;
  } }, { key: "drawArcs", value: function(i) {
    var a = this.w, s = new X(this.ctx), r = new Ze(this.ctx), o = new Re(this.ctx), l = s.group(), h = this.getStrokeWidth(i);
    i.size = i.size - h / 2;
    var c = a.config.plotOptions.radialBar.hollow.background, d = i.size - h * i.series.length - this.margin * i.series.length - h * parseInt(a.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2, u = d - a.config.plotOptions.radialBar.hollow.margin;
    a.config.plotOptions.radialBar.hollow.image !== void 0 && (c = this.drawHollowImage(i, l, d, c));
    var g = this.drawHollow({ size: u, centerX: i.centerX, centerY: i.centerY, fill: c || "transparent" });
    if (a.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
      var p = a.config.plotOptions.radialBar.hollow.dropShadow;
      o.dropShadow(g, p);
    }
    var f = 1;
    !this.radialDataLabels.total.show && a.globals.series.length > 1 && (f = 0);
    var x = null;
    if (this.radialDataLabels.show) {
      var b = a.globals.dom.Paper.findOne(".apexcharts-datalabels-group");
      x = this.renderInnerDataLabels(b, this.radialDataLabels, { hollowSize: d, centerX: i.centerX, centerY: i.centerY, opacity: f });
    }
    a.config.plotOptions.radialBar.hollow.position === "back" && (l.add(g), x && l.add(x));
    var m = !1;
    a.config.plotOptions.radialBar.inverseOrder && (m = !0);
    for (var y = m ? i.series.length - 1 : 0; m ? y >= 0 : y < i.series.length; m ? y-- : y++) {
      var w = s.group({ class: "apexcharts-series apexcharts-radial-series", seriesName: L.escapeString(a.globals.seriesNames[y]) });
      l.add(w), w.attr({ rel: y + 1, "data:realIndex": y }), this.ctx.series.addCollapsedClassToSeries(w, y), i.size = i.size - h - this.margin;
      var v = r.fillPath({ seriesNumber: y, size: i.size, value: i.series[y] }), C = this.startAngle, k = void 0, A = L.negToZero(i.series[y] > 100 ? 100 : i.series[y]) / 100, S = Math.round(this.totalAngle * A) + this.startAngle, P = void 0;
      a.globals.dataChanged && (k = this.startAngle, P = Math.round(this.totalAngle * L.negToZero(a.globals.previousPaths[y]) / 100) + k), Math.abs(S) + Math.abs(C) > 360 && (S -= 0.01), Math.abs(P) + Math.abs(k) > 360 && (P -= 0.01);
      var T = S - C, I = Array.isArray(a.config.stroke.dashArray) ? a.config.stroke.dashArray[y] : a.config.stroke.dashArray, R = s.drawPath({ d: "", stroke: v, strokeWidth: h, fill: "none", fillOpacity: a.config.fill.opacity, classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + y, strokeDashArray: I });
      if (X.setAttrs(R.node, { "data:angle": T, "data:value": i.series[y] }), a.config.chart.dropShadow.enabled) {
        var z = a.config.chart.dropShadow;
        o.dropShadow(R, z, y);
      }
      if (o.setSelectionFilter(R, 0, y), this.addListeners(R, this.radialDataLabels), w.add(R), R.attr({ index: 0, j: y }), this.barLabels.enabled) {
        var Y = L.polarToCartesian(i.centerX, i.centerY, i.size, C), N = this.barLabels.formatter(a.globals.seriesNames[y], { seriesIndex: y, w: a }), H = ["apexcharts-radialbar-label"];
        this.barLabels.onClick || H.push("apexcharts-no-click");
        var U = this.barLabels.useSeriesColors ? a.globals.colors[y] : a.config.chart.foreColor;
        U || (U = a.config.chart.foreColor);
        var Q = Y.x + this.barLabels.offsetX, O = Y.y + this.barLabels.offsetY, _ = s.drawText({ x: Q, y: O, text: N, textAnchor: "end", dominantBaseline: "middle", fontFamily: this.barLabels.fontFamily, fontWeight: this.barLabels.fontWeight, fontSize: this.barLabels.fontSize, foreColor: U, cssClass: H.join(" ") });
        _.on("click", this.onBarLabelClick), _.attr({ rel: y + 1 }), C !== 0 && _.attr({ "transform-origin": "".concat(Q, " ").concat(O), transform: "rotate(".concat(C, " 0 0)") }), w.add(_);
      }
      var Z = 0;
      !this.initialAnim || a.globals.resized || a.globals.dataChanged || (Z = a.config.chart.animations.speed), a.globals.dataChanged && (Z = a.config.chart.animations.dynamicAnimation.speed), this.animDur = Z / (1.2 * i.series.length) + this.animDur, this.animBeginArr.push(this.animDur), this.animatePaths(R, { centerX: i.centerX, centerY: i.centerY, endAngle: S, startAngle: C, prevEndAngle: P, prevStartAngle: k, size: i.size, i: y, totalItems: 2, animBeginArr: this.animBeginArr, dur: Z, shouldSetPrevPaths: !0 });
    }
    return { g: l, elHollow: g, dataLabels: x };
  } }, { key: "drawHollow", value: function(i) {
    var a = new X(this.ctx).drawCircle(2 * i.size);
    return a.attr({ class: "apexcharts-radialbar-hollow", cx: i.centerX, cy: i.centerY, r: i.size, fill: i.fill }), a;
  } }, { key: "drawHollowImage", value: function(i, a, s, r) {
    var o = this.w, l = new Ze(this.ctx), h = L.randomId(), c = o.config.plotOptions.radialBar.hollow.image;
    if (o.config.plotOptions.radialBar.hollow.imageClipped) l.clippedImgArea({ width: s, height: s, image: c, patternID: "pattern".concat(o.globals.cuid).concat(h) }), r = "url(#pattern".concat(o.globals.cuid).concat(h, ")");
    else {
      var d = o.config.plotOptions.radialBar.hollow.imageWidth, u = o.config.plotOptions.radialBar.hollow.imageHeight;
      if (d === void 0 && u === void 0) {
        var g = o.globals.dom.Paper.image(c, (function(f) {
          this.move(i.centerX - f.width / 2 + o.config.plotOptions.radialBar.hollow.imageOffsetX, i.centerY - f.height / 2 + o.config.plotOptions.radialBar.hollow.imageOffsetY);
        }));
        a.add(g);
      } else {
        var p = o.globals.dom.Paper.image(c, (function(f) {
          this.move(i.centerX - d / 2 + o.config.plotOptions.radialBar.hollow.imageOffsetX, i.centerY - u / 2 + o.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(d, u);
        }));
        a.add(p);
      }
    }
    return r;
  } }, { key: "getStrokeWidth", value: function(i) {
    var a = this.w;
    return i.size * (100 - parseInt(a.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (i.series.length + 1) - this.margin;
  } }, { key: "onBarLabelClick", value: function(i) {
    var a = parseInt(i.target.getAttribute("rel"), 10) - 1, s = this.barLabels.onClick, r = this.w;
    s && s(r.globals.seriesNames[a], { w: r, seriesIndex: a });
  } }]), t;
})(), hl = (function(n) {
  Gt(t, Ct);
  var e = Bt(t);
  function t() {
    return q(this, t), e.apply(this, arguments);
  }
  return $(t, [{ key: "draw", value: function(i, a) {
    var s = this.w, r = new X(this.ctx);
    this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = i, this.seriesRangeStart = s.globals.seriesRangeStart, this.seriesRangeEnd = s.globals.seriesRangeEnd, this.barHelpers.initVariables(i);
    for (var o = r.group({ class: "apexcharts-rangebar-series apexcharts-plot-series" }), l = 0; l < i.length; l++) {
      var h, c, d, u, g = void 0, p = void 0, f = s.globals.comboCharts ? a[l] : l, x = this.barHelpers.getGroupIndex(f).columnGroupIndex, b = r.group({ class: "apexcharts-series", seriesName: L.escapeString(s.globals.seriesNames[f]), rel: l + 1, "data:realIndex": f });
      this.ctx.series.addCollapsedClassToSeries(b, f), i[l].length > 0 && (this.visibleI = this.visibleI + 1);
      var m = 0, y = 0, w = 0;
      this.yRatio.length > 1 && (this.yaxisIndex = s.globals.seriesYAxisReverseMap[f][0], w = f);
      var v = this.barHelpers.initialPositions(f);
      p = v.y, u = v.zeroW, g = v.x, y = v.barWidth, m = v.barHeight, h = v.xDivision, c = v.yDivision, d = v.zeroH;
      for (var C = r.group({ class: "apexcharts-datalabels", "data:realIndex": f }), k = r.group({ class: "apexcharts-rangebar-goals-markers" }), A = 0; A < s.globals.dataPoints; A++) {
        var S = this.barHelpers.getStrokeWidth(l, A, f), P = this.seriesRangeStart[l][A], T = this.seriesRangeEnd[l][A], I = null, R = null, z = null, Y = { x: g, y: p, strokeWidth: S, elSeries: b }, N = this.seriesLen;
        if (s.config.plotOptions.bar.rangeBarGroupRows && (N = 1), s.config.series[l].data[A] === void 0) break;
        if (this.isHorizontal) {
          z = p + m * this.visibleI;
          var H = (c - m * N) / 2;
          if (s.config.series[l].data[A].x) {
            var U = this.detectOverlappingBars({ i: l, j: A, barYPosition: z, srty: H, barHeight: m, yDivision: c, initPositions: v });
            m = U.barHeight, z = U.barYPosition;
          }
          y = (I = this.drawRangeBarPaths(D({ indexes: { i: l, j: A, realIndex: f }, barHeight: m, barYPosition: z, zeroW: u, yDivision: c, y1: P, y2: T }, Y))).barWidth;
        } else {
          s.globals.isXNumeric && (g = (s.globals.seriesX[l][A] - s.globals.minX) / this.xRatio - y / 2), R = g + y * this.visibleI;
          var Q = (h - y * N) / 2;
          if (s.config.series[l].data[A].x) {
            var O = this.detectOverlappingBars({ i: l, j: A, barXPosition: R, srtx: Q, barWidth: y, xDivision: h, initPositions: v });
            y = O.barWidth, R = O.barXPosition;
          }
          m = (I = this.drawRangeColumnPaths(D({ indexes: { i: l, j: A, realIndex: f, translationsIndex: w }, barWidth: y, barXPosition: R, zeroH: d, xDivision: h }, Y))).barHeight;
        }
        var _ = this.barHelpers.drawGoalLine({ barXPosition: I.barXPosition, barYPosition: z, goalX: I.goalX, goalY: I.goalY, barHeight: m, barWidth: y });
        _ && k.add(_), p = I.y, g = I.x;
        var Z = this.barHelpers.getPathFillColor(i, l, A, f);
        this.renderSeries({ realIndex: f, pathFill: Z.color, lineFill: Z.useRangeColor ? Z.color : s.globals.stroke.colors[f], j: A, i: l, x: g, y: p, y1: P, y2: T, pathFrom: I.pathFrom, pathTo: I.pathTo, strokeWidth: S, elSeries: b, series: i, barHeight: m, barWidth: y, barXPosition: R, barYPosition: z, columnGroupIndex: x, elDataLabelsWrap: C, elGoalsMarkers: k, visibleSeries: this.visibleI, type: "rangebar" });
      }
      o.add(b);
    }
    return o;
  } }, { key: "detectOverlappingBars", value: function(i) {
    var a = i.i, s = i.j, r = i.barYPosition, o = i.barXPosition, l = i.srty, h = i.srtx, c = i.barHeight, d = i.barWidth, u = i.yDivision, g = i.xDivision, p = i.initPositions, f = this.w, x = [], b = f.config.series[a].data[s].rangeName, m = f.config.series[a].data[s].x, y = Array.isArray(m) ? m.join(" ") : m, w = f.globals.labels.map((function(C) {
      return Array.isArray(C) ? C.join(" ") : C;
    })).indexOf(y), v = f.globals.seriesRange[a].findIndex((function(C) {
      return C.x === y && C.overlaps.length > 0;
    }));
    return this.isHorizontal ? (r = f.config.plotOptions.bar.rangeBarGroupRows ? l + u * w : l + c * this.visibleI + u * w, v > -1 && !f.config.plotOptions.bar.rangeBarOverlap && (x = f.globals.seriesRange[a][v].overlaps).indexOf(b) > -1 && (r = (c = p.barHeight / x.length) * this.visibleI + u * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + c * (this.visibleI + x.indexOf(b)) + u * w)) : (w > -1 && !f.globals.timescaleLabels.length && (o = f.config.plotOptions.bar.rangeBarGroupRows ? h + g * w : h + d * this.visibleI + g * w), v > -1 && !f.config.plotOptions.bar.rangeBarOverlap && (x = f.globals.seriesRange[a][v].overlaps).indexOf(b) > -1 && (o = (d = p.barWidth / x.length) * this.visibleI + g * (100 - parseInt(this.barOptions.barWidth, 10)) / 100 / 2 + d * (this.visibleI + x.indexOf(b)) + g * w)), { barYPosition: r, barXPosition: o, barHeight: c, barWidth: d };
  } }, { key: "drawRangeColumnPaths", value: function(i) {
    var a = i.indexes, s = i.x, r = i.xDivision, o = i.barWidth, l = i.barXPosition, h = i.zeroH, c = this.w, d = a.i, u = a.j, g = a.realIndex, p = a.translationsIndex, f = this.yRatio[p], x = this.getRangeValue(g, u), b = Math.min(x.start, x.end), m = Math.max(x.start, x.end);
    this.series[d][u] === void 0 || this.series[d][u] === null ? b = h : (b = h - b / f, m = h - m / f);
    var y = Math.abs(m - b), w = this.barHelpers.getColumnPaths({ barXPosition: l, barWidth: o, y1: b, y2: m, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, realIndex: g, i: g, j: u, w: c });
    if (c.globals.isXNumeric) {
      var v = this.getBarXForNumericXAxis({ x: s, j: u, realIndex: g, barWidth: o });
      s = v.x, l = v.barXPosition;
    } else s += r;
    return { pathTo: w.pathTo, pathFrom: w.pathFrom, barHeight: y, x: s, y: x.start < 0 && x.end < 0 ? b : m, goalY: this.barHelpers.getGoalValues("y", null, h, d, u, p), barXPosition: l };
  } }, { key: "preventBarOverflow", value: function(i) {
    var a = this.w;
    return i < 0 && (i = 0), i > a.globals.gridWidth && (i = a.globals.gridWidth), i;
  } }, { key: "drawRangeBarPaths", value: function(i) {
    var a = i.indexes, s = i.y, r = i.y1, o = i.y2, l = i.yDivision, h = i.barHeight, c = i.barYPosition, d = i.zeroW, u = this.w, g = a.realIndex, p = a.j, f = this.preventBarOverflow(d + r / this.invertedYRatio), x = this.preventBarOverflow(d + o / this.invertedYRatio), b = this.getRangeValue(g, p), m = Math.abs(x - f), y = this.barHelpers.getBarpaths({ barYPosition: c, barHeight: h, x1: f, x2: x, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, i: g, realIndex: g, j: p, w: u });
    return u.globals.isXNumeric || (s += l), { pathTo: y.pathTo, pathFrom: y.pathFrom, barWidth: m, x: b.start < 0 && b.end < 0 ? f : x, goalX: this.barHelpers.getGoalValues("x", d, null, g, p), y: s };
  } }, { key: "getRangeValue", value: function(i, a) {
    var s = this.w;
    return { start: s.globals.seriesRangeStart[i][a], end: s.globals.seriesRangeEnd[i][a] };
  } }]), t;
})(), cl = (function() {
  function n(e) {
    q(this, n), this.w = e.w, this.lineCtx = e;
  }
  return $(n, [{ key: "sameValueSeriesFix", value: function(e, t) {
    var i = this.w;
    if ((i.config.fill.type === "gradient" || i.config.fill.type[e] === "gradient") && new Le(this.lineCtx.ctx, i).seriesHaveSameValues(e)) {
      var a = t[e].slice();
      a[a.length - 1] = a[a.length - 1] + 1e-6, t[e] = a;
    }
    return t;
  } }, { key: "calculatePoints", value: function(e) {
    var t = e.series, i = e.realIndex, a = e.x, s = e.y, r = e.i, o = e.j, l = e.prevY, h = this.w, c = [], d = [], u = this.lineCtx.categoryAxisCorrection + h.config.markers.offsetX;
    return h.globals.isXNumeric && (u = (h.globals.seriesX[i][0] - h.globals.minX) / this.lineCtx.xRatio + h.config.markers.offsetX), o === 0 && (c.push(u), d.push(L.isNumber(t[r][0]) ? l + h.config.markers.offsetY : null)), c.push(a + h.config.markers.offsetX), d.push(L.isNumber(t[r][o + 1]) ? s + h.config.markers.offsetY : null), { x: c, y: d };
  } }, { key: "checkPreviousPaths", value: function(e) {
    for (var t = e.pathFromLine, i = e.pathFromArea, a = e.realIndex, s = this.w, r = 0; r < s.globals.previousPaths.length; r++) {
      var o = s.globals.previousPaths[r];
      (o.type === "line" || o.type === "area") && o.paths.length > 0 && parseInt(o.realIndex, 10) === parseInt(a, 10) && (o.type === "line" ? (this.lineCtx.appendPathFrom = !1, t = s.globals.previousPaths[r].paths[0].d) : o.type === "area" && (this.lineCtx.appendPathFrom = !1, i = s.globals.previousPaths[r].paths[0].d, s.config.stroke.show && s.globals.previousPaths[r].paths[1] && (t = s.globals.previousPaths[r].paths[1].d)));
    }
    return { pathFromLine: t, pathFromArea: i };
  } }, { key: "determineFirstPrevY", value: function(e) {
    var t, i, a, s = e.i, r = e.realIndex, o = e.series, l = e.prevY, h = e.lineYPosition, c = e.translationsIndex, d = this.w, u = d.config.chart.stacked && !d.globals.comboCharts || d.config.chart.stacked && d.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || ((t = this.w.config.series[r]) === null || t === void 0 ? void 0 : t.type) === "bar" || ((i = this.w.config.series[r]) === null || i === void 0 ? void 0 : i.type) === "column");
    if (((a = o[s]) === null || a === void 0 ? void 0 : a[0]) !== void 0) l = (h = u && s > 0 ? this.lineCtx.prevSeriesY[s - 1][0] : this.lineCtx.zeroY) - o[s][0] / this.lineCtx.yRatio[c] + 2 * (this.lineCtx.isReversed ? o[s][0] / this.lineCtx.yRatio[c] : 0);
    else if (u && s > 0 && o[s][0] === void 0) {
      for (var g = s - 1; g >= 0; g--) if (o[g][0] !== null && o[g][0] !== void 0) {
        l = h = this.lineCtx.prevSeriesY[g][0];
        break;
      }
    }
    return { prevY: l, lineYPosition: h };
  } }]), n;
})(), dl = function(n) {
  for (var e, t, i, a, s = (function(c) {
    for (var d = [], u = c[0], g = c[1], p = d[0] = _i(u, g), f = 1, x = c.length - 1; f < x; f++) u = g, g = c[f + 1], d[f] = 0.5 * (p + (p = _i(u, g)));
    return d[f] = p, d;
  })(n), r = n.length - 1, o = [], l = 0; l < r; l++) i = _i(n[l], n[l + 1]), Math.abs(i) < 1e-6 ? s[l] = s[l + 1] = 0 : (a = (e = s[l] / i) * e + (t = s[l + 1] / i) * t) > 9 && (a = 3 * i / Math.sqrt(a), s[l] = a * e, s[l + 1] = a * t);
  for (var h = 0; h <= r; h++) a = (n[Math.min(r, h + 1)][0] - n[Math.max(0, h - 1)][0]) / (6 * (1 + s[h] * s[h])), o.push([a || 0, s[h] * a || 0]);
  return o;
}, ul = function(n) {
  var e = dl(n), t = n[1], i = n[0], a = [], s = e[1], r = e[0];
  a.push(i, [i[0] + r[0], i[1] + r[1], t[0] - s[0], t[1] - s[1], t[0], t[1]]);
  for (var o = 2, l = e.length; o < l; o++) {
    var h = n[o], c = e[o];
    a.push([h[0] - c[0], h[1] - c[1], h[0], h[1]]);
  }
  return a;
}, gl = function(n, e, t) {
  var i = n.slice(e, t);
  if (e) {
    if (t - e > 1 && i[1].length < 6) {
      var a = i[0].length;
      i[1] = [2 * i[0][a - 2] - i[0][a - 4], 2 * i[0][a - 1] - i[0][a - 3]].concat(i[1]);
    }
    i[0] = i[0].slice(-2);
  }
  return i;
};
function _i(n, e) {
  return (e[1] - n[1]) / (e[0] - n[0]);
}
var Yi = (function() {
  function n(e, t, i) {
    q(this, n), this.ctx = e, this.w = e.w, this.xyRatios = t, this.pointsChart = !(this.w.config.chart.type !== "bubble" && this.w.config.chart.type !== "scatter") || i, this.scatter = new cr(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new cl(this), this.markers = new Tt(this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0;
  }
  return $(n, [{ key: "draw", value: function(e, t, i, a) {
    var s, r = this.w, o = new X(this.ctx), l = r.globals.comboCharts ? t : r.config.chart.type, h = o.group({ class: "apexcharts-".concat(l, "-series apexcharts-plot-series") }), c = new Le(this.ctx, r);
    this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, e = c.getLogSeries(e), this.yRatio = c.getLogYRatios(this.yRatio), this.prevSeriesY = [];
    for (var d = [], u = 0; u < e.length; u++) {
      e = this.lineHelpers.sameValueSeriesFix(u, e);
      var g = r.globals.comboCharts ? i[u] : u, p = this.yRatio.length > 1 ? g : 0;
      this._initSerieVariables(e, u, g);
      var f = [], x = [], b = [], m = r.globals.padHorizontal + this.categoryAxisCorrection;
      this.ctx.series.addCollapsedClassToSeries(this.elSeries, g), r.globals.isXNumeric && r.globals.seriesX.length > 0 && (m = (r.globals.seriesX[g][0] - r.globals.minX) / this.xRatio), b.push(m);
      var y, w = m, v = void 0, C = w, k = this.zeroY, A = this.zeroY;
      k = this.lineHelpers.determineFirstPrevY({ i: u, realIndex: g, series: e, prevY: k, lineYPosition: 0, translationsIndex: p }).prevY, r.config.stroke.curve === "monotoneCubic" && e[u][0] === null ? f.push(null) : f.push(k), y = k, l === "rangeArea" && (v = A = this.lineHelpers.determineFirstPrevY({ i: u, realIndex: g, series: a, prevY: A, lineYPosition: 0, translationsIndex: p }).prevY, x.push(f[0] !== null ? A : null));
      var S = this._calculatePathsFrom({ type: l, series: e, i: u, realIndex: g, translationsIndex: p, prevX: C, prevY: k, prevY2: A }), P = [f[0]], T = [x[0]], I = { type: l, series: e, realIndex: g, translationsIndex: p, i: u, x: m, y: 1, pX: w, pY: y, pathsFrom: S, linePaths: [], areaPaths: [], seriesIndex: i, lineYPosition: 0, xArrj: b, yArrj: f, y2Arrj: x, seriesRangeEnd: a }, R = this._iterateOverDataPoints(D(D({}, I), {}, { iterations: l === "rangeArea" ? e[u].length - 1 : void 0, isRangeStart: !0 }));
      if (l === "rangeArea") {
        for (var z = this._calculatePathsFrom({ series: a, i: u, realIndex: g, prevX: C, prevY: A }), Y = this._iterateOverDataPoints(D(D({}, I), {}, { series: a, xArrj: [m], yArrj: P, y2Arrj: T, pY: v, areaPaths: R.areaPaths, pathsFrom: z, iterations: a[u].length - 1, isRangeStart: !1 })), N = R.linePaths.length / 2, H = 0; H < N; H++) R.linePaths[H] = Y.linePaths[H + N] + R.linePaths[H];
        R.linePaths.splice(N), R.pathFromLine = Y.pathFromLine + R.pathFromLine;
      } else R.pathFromArea += "z";
      this._handlePaths({ type: l, realIndex: g, i: u, paths: R }), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), d.push(this.elSeries);
    }
    if (((s = r.config.series[0]) === null || s === void 0 ? void 0 : s.zIndex) !== void 0 && d.sort((function(O, _) {
      return Number(O.node.getAttribute("zIndex")) - Number(_.node.getAttribute("zIndex"));
    })), r.config.chart.stacked) for (var U = d.length - 1; U >= 0; U--) h.add(d[U]);
    else for (var Q = 0; Q < d.length; Q++) h.add(d[Q]);
    return h;
  } }, { key: "_initSerieVariables", value: function(e, t, i) {
    var a = this.w, s = new X(this.ctx);
    this.xDivision = a.globals.gridWidth / (a.globals.dataPoints - (a.config.xaxis.tickPlacement === "on" ? 1 : 0)), this.strokeWidth = Array.isArray(a.config.stroke.width) ? a.config.stroke.width[i] : a.config.stroke.width;
    var r = 0;
    if (this.yRatio.length > 1 && (this.yaxisIndex = a.globals.seriesYAxisReverseMap[i], r = i), this.isReversed = a.config.yaxis[this.yaxisIndex] && a.config.yaxis[this.yaxisIndex].reversed, this.zeroY = a.globals.gridHeight - this.baseLineY[r] - (this.isReversed ? a.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[r] : 0), this.areaBottomY = this.zeroY, (this.zeroY > a.globals.gridHeight || a.config.plotOptions.area.fillTo === "end") && (this.areaBottomY = a.globals.gridHeight), this.categoryAxisCorrection = this.xDivision / 2, this.elSeries = s.group({ class: "apexcharts-series", zIndex: a.config.series[i].zIndex !== void 0 ? a.config.series[i].zIndex : i, seriesName: L.escapeString(a.globals.seriesNames[i]) }), this.elPointsMain = s.group({ class: "apexcharts-series-markers-wrap", "data:realIndex": i }), a.globals.hasNullValues) {
      var o = this.markers.plotChartMarkers({ pointsPos: { x: [0], y: [a.globals.gridHeight + a.globals.markers.largestSize] }, seriesIndex: t, j: 0, pSize: 0.1, alwaysDrawMarker: !0, isVirtualPoint: !0 });
      o !== null && this.elPointsMain.add(o);
    }
    this.elDataLabelsWrap = s.group({ class: "apexcharts-datalabels", "data:realIndex": i });
    var l = e[t].length === a.globals.dataPoints;
    this.elSeries.attr({ "data:longestSeries": l, rel: t + 1, "data:realIndex": i }), this.appendPathFrom = !0;
  } }, { key: "_calculatePathsFrom", value: function(e) {
    var t, i, a, s, r = e.type, o = e.series, l = e.i, h = e.realIndex, c = e.translationsIndex, d = e.prevX, u = e.prevY, g = e.prevY2, p = this.w, f = new X(this.ctx);
    if (o[l][0] === null) {
      for (var x = 0; x < o[l].length; x++) if (o[l][x] !== null) {
        d = this.xDivision * x, u = this.zeroY - o[l][x] / this.yRatio[c], t = f.move(d, u), i = f.move(d, this.areaBottomY);
        break;
      }
    } else t = f.move(d, u), r === "rangeArea" && (t = f.move(d, g) + f.line(d, u)), i = f.move(d, this.areaBottomY) + f.line(d, u);
    if (a = f.move(0, this.areaBottomY) + f.line(0, this.areaBottomY), s = f.move(0, this.areaBottomY) + f.line(0, this.areaBottomY), p.globals.previousPaths.length > 0) {
      var b = this.lineHelpers.checkPreviousPaths({ pathFromLine: a, pathFromArea: s, realIndex: h });
      a = b.pathFromLine, s = b.pathFromArea;
    }
    return { prevX: d, prevY: u, linePath: t, areaPath: i, pathFromLine: a, pathFromArea: s };
  } }, { key: "_handlePaths", value: function(e) {
    var t = e.type, i = e.realIndex, a = e.i, s = e.paths, r = this.w, o = new X(this.ctx), l = new Ze(this.ctx);
    this.prevSeriesY.push(s.yArrj), r.globals.seriesXvalues[i] = s.xArrj, r.globals.seriesYvalues[i] = s.yArrj;
    var h = r.config.forecastDataPoints;
    if (h.count > 0 && t !== "rangeArea") {
      var c = r.globals.seriesXvalues[i][r.globals.seriesXvalues[i].length - h.count - 1], d = o.drawRect(c, 0, r.globals.gridWidth, r.globals.gridHeight, 0);
      r.globals.dom.elForecastMask.appendChild(d.node);
      var u = o.drawRect(0, 0, c, r.globals.gridHeight, 0);
      r.globals.dom.elNonForecastMask.appendChild(u.node);
    }
    this.pointsChart || r.globals.delayedElements.push({ el: this.elPointsMain.node, index: i });
    var g = { i: a, realIndex: i, animationDelay: a, initialSpeed: r.config.chart.animations.speed, dataChangeSpeed: r.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(t) };
    if (t === "area") for (var p = l.fillPath({ seriesNumber: i }), f = 0; f < s.areaPaths.length; f++) {
      var x = o.renderPaths(D(D({}, g), {}, { pathFrom: s.pathFromArea, pathTo: s.areaPaths[f], stroke: "none", strokeWidth: 0, strokeLineCap: null, fill: p }));
      this.elSeries.add(x);
    }
    if (r.config.stroke.show && !this.pointsChart) {
      var b = null;
      if (t === "line") b = l.fillPath({ seriesNumber: i, i: a });
      else if (r.config.stroke.fill.type === "solid") b = r.globals.stroke.colors[i];
      else {
        var m = r.config.fill;
        r.config.fill = r.config.stroke.fill, b = l.fillPath({ seriesNumber: i, i: a }), r.config.fill = m;
      }
      for (var y = 0; y < s.linePaths.length; y++) {
        var w = b;
        t === "rangeArea" && (w = l.fillPath({ seriesNumber: i }));
        var v = D(D({}, g), {}, { pathFrom: s.pathFromLine, pathTo: s.linePaths[y], stroke: b, strokeWidth: this.strokeWidth, strokeLineCap: r.config.stroke.lineCap, fill: t === "rangeArea" ? w : "none" }), C = o.renderPaths(v);
        if (this.elSeries.add(C), C.attr("fill-rule", "evenodd"), h.count > 0 && t !== "rangeArea") {
          var k = o.renderPaths(v);
          k.node.setAttribute("stroke-dasharray", h.dashArray), h.strokeWidth && k.node.setAttribute("stroke-width", h.strokeWidth), this.elSeries.add(k), k.attr("clip-path", "url(#forecastMask".concat(r.globals.cuid, ")")), C.attr("clip-path", "url(#nonForecastMask".concat(r.globals.cuid, ")"));
        }
      }
    }
  } }, { key: "_iterateOverDataPoints", value: function(e) {
    var t, i, a = this, s = e.type, r = e.series, o = e.iterations, l = e.realIndex, h = e.translationsIndex, c = e.i, d = e.x, u = e.y, g = e.pX, p = e.pY, f = e.pathsFrom, x = e.linePaths, b = e.areaPaths, m = e.seriesIndex, y = e.lineYPosition, w = e.xArrj, v = e.yArrj, C = e.y2Arrj, k = e.isRangeStart, A = e.seriesRangeEnd, S = this.w, P = new X(this.ctx), T = this.yRatio, I = f.prevY, R = f.linePath, z = f.areaPath, Y = f.pathFromLine, N = f.pathFromArea, H = L.isNumber(S.globals.minYArr[l]) ? S.globals.minYArr[l] : S.globals.minY;
    o || (o = S.globals.dataPoints > 1 ? S.globals.dataPoints - 1 : S.globals.dataPoints);
    var U = function(ae, te) {
      return te - ae / T[h] + 2 * (a.isReversed ? ae / T[h] : 0);
    }, Q = u, O = S.config.chart.stacked && !S.globals.comboCharts || S.config.chart.stacked && S.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || ((t = this.w.config.series[l]) === null || t === void 0 ? void 0 : t.type) === "bar" || ((i = this.w.config.series[l]) === null || i === void 0 ? void 0 : i.type) === "column"), _ = S.config.stroke.curve;
    Array.isArray(_) && (_ = Array.isArray(m) ? _[m[c]] : _[c]);
    for (var Z, ee = 0, W = 0; W < o && r[c].length !== 0; W++) {
      var se = r[c][W + 1] === void 0 || r[c][W + 1] === null;
      if (S.globals.isXNumeric) {
        var B = S.globals.seriesX[l][W + 1];
        S.globals.seriesX[l][W + 1] === void 0 && (B = S.globals.seriesX[l][o - 1]), d = (B - S.globals.minX) / this.xRatio;
      } else d += this.xDivision;
      O ? c > 0 && S.globals.collapsedSeries.length < S.config.series.length - 1 ? y = this.prevSeriesY[(function(ae) {
        for (var te = ae; te > 0; te--) {
          if (!(S.globals.collapsedSeriesIndices.indexOf((m == null ? void 0 : m[te]) || te) > -1)) return te;
          te--;
        }
        return 0;
      })(c - 1)][W + 1] : y = this.zeroY : y = this.zeroY, se ? u = U(H, y) : (u = U(r[c][W + 1], y), s === "rangeArea" && (Q = U(A[c][W + 1], y))), w.push(r[c][W + 1] === null ? null : d), !se || S.config.stroke.curve !== "smooth" && S.config.stroke.curve !== "monotoneCubic" ? (v.push(u), C.push(Q)) : (v.push(null), C.push(null));
      var G = this.lineHelpers.calculatePoints({ series: r, x: d, y: u, realIndex: l, i: c, j: W, prevY: I }), J = this._createPaths({ type: s, series: r, i: c, realIndex: l, j: W, x: d, y: u, y2: Q, xArrj: w, yArrj: v, y2Arrj: C, pX: g, pY: p, pathState: ee, segmentStartX: Z, linePath: R, areaPath: z, linePaths: x, areaPaths: b, curve: _, isRangeStart: k });
      b = J.areaPaths, x = J.linePaths, g = J.pX, p = J.pY, ee = J.pathState, Z = J.segmentStartX, z = J.areaPath, R = J.linePath, !this.appendPathFrom || S.globals.hasNullValues || _ === "monotoneCubic" && s === "rangeArea" || (Y += P.line(d, this.areaBottomY), N += P.line(d, this.areaBottomY)), this.handleNullDataPoints(r, G, c, W, l), this._handleMarkersAndLabels({ type: s, pointsPos: G, i: c, j: W, realIndex: l, isRangeStart: k });
    }
    return { yArrj: v, xArrj: w, pathFromArea: N, areaPaths: b, pathFromLine: Y, linePaths: x, linePath: R, areaPath: z };
  } }, { key: "_handleMarkersAndLabels", value: function(e) {
    var t = e.type, i = e.pointsPos, a = e.isRangeStart, s = e.i, r = e.j, o = e.realIndex, l = this.w, h = new At(this.ctx);
    if (this.pointsChart) this.scatter.draw(this.elSeries, r, { realIndex: o, pointsPos: i, zRatio: this.zRatio, elParent: this.elPointsMain });
    else {
      l.globals.series[s].length > 1 && this.elPointsMain.node.classList.add("apexcharts-element-hidden");
      var c = this.markers.plotChartMarkers({ pointsPos: i, seriesIndex: o, j: r + 1 });
      c !== null && this.elPointsMain.add(c);
    }
    var d = h.drawDataLabel({ type: t, isRangeStart: a, pos: i, i: o, j: r + 1 });
    d !== null && this.elDataLabelsWrap.add(d);
  } }, { key: "_createPaths", value: function(e) {
    var t = e.type, i = e.series, a = e.i;
    e.realIndex;
    var s, r = e.j, o = e.x, l = e.y, h = e.xArrj, c = e.yArrj, d = e.y2, u = e.y2Arrj, g = e.pX, p = e.pY, f = e.pathState, x = e.segmentStartX, b = e.linePath, m = e.areaPath, y = e.linePaths, w = e.areaPaths, v = e.curve, C = e.isRangeStart, k = new X(this.ctx), A = this.areaBottomY, S = t === "rangeArea", P = t === "rangeArea" && C;
    switch (v) {
      case "monotoneCubic":
        var T = C ? c : u;
        switch (f) {
          case 0:
            if (T[r + 1] === null) break;
            f = 1;
          case 1:
            if (!(S ? h.length === i[a].length : r === i[a].length - 2)) break;
          case 2:
            var I = C ? h : h.slice().reverse(), R = C ? T : T.slice().reverse(), z = (s = R, I.map((function(B, G) {
              return [B, s[G]];
            })).filter((function(B) {
              return B[1] !== null;
            }))), Y = z.length > 1 ? ul(z) : z, N = [];
            S && (P ? w = z : N = w.reverse());
            var H = 0, U = 0;
            if ((function(B, G) {
              for (var J = (function(V) {
                var ye = [], ze = 0;
                return V.forEach((function(Je) {
                  Je !== null ? ze++ : ze > 0 && (ye.push(ze), ze = 0);
                })), ze > 0 && ye.push(ze), ye;
              })(B), ae = [], te = 0, ge = 0; te < J.length; ge += J[te++]) ae[te] = gl(G, ge, ge + J[te]);
              return ae;
            })(R, Y).forEach((function(B) {
              H++;
              var G = (function(te) {
                for (var ge = "", V = 0; V < te.length; V++) {
                  var ye = te[V], ze = ye.length;
                  ze > 4 ? (ge += "C".concat(ye[0], ", ").concat(ye[1]), ge += ", ".concat(ye[2], ", ").concat(ye[3]), ge += ", ".concat(ye[4], ", ").concat(ye[5])) : ze > 2 && (ge += "S".concat(ye[0], ", ").concat(ye[1]), ge += ", ".concat(ye[2], ", ").concat(ye[3]));
                }
                return ge;
              })(B), J = U, ae = (U += B.length) - 1;
              P ? b = k.move(z[J][0], z[J][1]) + G : S ? b = k.move(N[J][0], N[J][1]) + k.line(z[J][0], z[J][1]) + G + k.line(N[ae][0], N[ae][1]) : (b = k.move(z[J][0], z[J][1]) + G, m = b + k.line(z[ae][0], A) + k.line(z[J][0], A) + "z", w.push(m)), y.push(b);
            })), S && H > 1 && !P) {
              var Q = y.slice(H).reverse();
              y.splice(H), Q.forEach((function(B) {
                return y.push(B);
              }));
            }
            f = 0;
        }
        break;
      case "smooth":
        var O = 0.35 * (o - g);
        if (i[a][r] === null) f = 0;
        else switch (f) {
          case 0:
            if (x = g, b = P ? k.move(g, u[r]) + k.line(g, p) : k.move(g, p), m = k.move(g, p), i[a][r + 1] === null || i[a][r + 1] === void 0) {
              y.push(b), w.push(m);
              break;
            }
            if (f = 1, r < i[a].length - 2) {
              var _ = k.curve(g + O, p, o - O, l, o, l);
              b += _, m += _;
              break;
            }
          case 1:
            if (i[a][r + 1] === null) b += P ? k.line(g, d) : k.move(g, p), m += k.line(g, A) + k.line(x, A) + "z", y.push(b), w.push(m), f = -1;
            else {
              var Z = k.curve(g + O, p, o - O, l, o, l);
              b += Z, m += Z, r >= i[a].length - 2 && (P && (b += k.curve(o, l, o, l, o, d) + k.move(o, d)), m += k.curve(o, l, o, l, o, A) + k.line(x, A) + "z", y.push(b), w.push(m), f = -1);
            }
        }
        g = o, p = l;
        break;
      default:
        var ee = function(B, G, J) {
          var ae = [];
          switch (B) {
            case "stepline":
              ae = k.line(G, null, "H") + k.line(null, J, "V");
              break;
            case "linestep":
              ae = k.line(null, J, "V") + k.line(G, null, "H");
              break;
            case "straight":
              ae = k.line(G, J);
          }
          return ae;
        };
        if (i[a][r] === null) f = 0;
        else switch (f) {
          case 0:
            if (x = g, b = P ? k.move(g, u[r]) + k.line(g, p) : k.move(g, p), m = k.move(g, p), i[a][r + 1] === null || i[a][r + 1] === void 0) {
              y.push(b), w.push(m);
              break;
            }
            if (f = 1, r < i[a].length - 2) {
              var W = ee(v, o, l);
              b += W, m += W;
              break;
            }
          case 1:
            if (i[a][r + 1] === null) b += P ? k.line(g, d) : k.move(g, p), m += k.line(g, A) + k.line(x, A) + "z", y.push(b), w.push(m), f = -1;
            else {
              var se = ee(v, o, l);
              b += se, m += se, r >= i[a].length - 2 && (P && (b += k.line(o, d)), m += k.line(o, A) + k.line(x, A) + "z", y.push(b), w.push(m), f = -1);
            }
        }
        g = o, p = l;
    }
    return { linePaths: y, areaPaths: w, pX: g, pY: p, pathState: f, segmentStartX: x, linePath: b, areaPath: m };
  } }, { key: "handleNullDataPoints", value: function(e, t, i, a, s) {
    var r = this.w;
    if (e[i][a] === null && r.config.markers.showNullDataPoints || e[i].length === 1) {
      var o = this.strokeWidth - r.config.markers.strokeWidth / 2;
      o > 0 || (o = 0);
      var l = this.markers.plotChartMarkers({ pointsPos: t, seriesIndex: s, j: a + 1, pSize: o, alwaysDrawMarker: !0 });
      l !== null && this.elPointsMain.add(l);
    }
  } }]), n;
})();
window.TreemapSquared = {}, window.TreemapSquared.generate = /* @__PURE__ */ (function() {
  function n(o, l, h, c) {
    this.xoffset = o, this.yoffset = l, this.height = c, this.width = h, this.shortestEdge = function() {
      return Math.min(this.height, this.width);
    }, this.getCoordinates = function(d) {
      var u, g = [], p = this.xoffset, f = this.yoffset, x = s(d) / this.height, b = s(d) / this.width;
      if (this.width >= this.height) for (u = 0; u < d.length; u++) g.push([p, f, p + x, f + d[u] / x]), f += d[u] / x;
      else for (u = 0; u < d.length; u++) g.push([p, f, p + d[u] / b, f + b]), p += d[u] / b;
      return g;
    }, this.cutArea = function(d) {
      var u;
      if (this.width >= this.height) {
        var g = d / this.height, p = this.width - g;
        u = new n(this.xoffset + g, this.yoffset, p, this.height);
      } else {
        var f = d / this.width, x = this.height - f;
        u = new n(this.xoffset, this.yoffset + f, this.width, x);
      }
      return u;
    };
  }
  function e(o, l, h, c, d) {
    c = c === void 0 ? 0 : c, d = d === void 0 ? 0 : d;
    var u = t((function(g, p) {
      var f, x = [], b = p / s(g);
      for (f = 0; f < g.length; f++) x[f] = g[f] * b;
      return x;
    })(o, l * h), [], new n(c, d, l, h), []);
    return (function(g) {
      var p, f, x = [];
      for (p = 0; p < g.length; p++) for (f = 0; f < g[p].length; f++) x.push(g[p][f]);
      return x;
    })(u);
  }
  function t(o, l, h, c) {
    var d, u, g;
    if (o.length !== 0) return d = h.shortestEdge(), (function(p, f, x) {
      var b;
      if (p.length === 0) return !0;
      (b = p.slice()).push(f);
      var m = i(p, x), y = i(b, x);
      return m >= y;
    })(l, u = o[0], d) ? (l.push(u), t(o.slice(1), l, h, c)) : (g = h.cutArea(s(l), c), c.push(h.getCoordinates(l)), t(o, [], g, c)), c;
    c.push(h.getCoordinates(l));
  }
  function i(o, l) {
    var h = Math.min.apply(Math, o), c = Math.max.apply(Math, o), d = s(o);
    return Math.max(Math.pow(l, 2) * c / Math.pow(d, 2), Math.pow(d, 2) / (Math.pow(l, 2) * h));
  }
  function a(o) {
    return o && o.constructor === Array;
  }
  function s(o) {
    var l, h = 0;
    for (l = 0; l < o.length; l++) h += o[l];
    return h;
  }
  function r(o) {
    var l, h = 0;
    if (a(o[0])) for (l = 0; l < o.length; l++) h += r(o[l]);
    else h = s(o);
    return h;
  }
  return function o(l, h, c, d, u) {
    d = d === void 0 ? 0 : d, u = u === void 0 ? 0 : u;
    var g, p, f = [], x = [];
    if (a(l[0])) {
      for (p = 0; p < l.length; p++) f[p] = r(l[p]);
      for (g = e(f, h, c, d, u), p = 0; p < l.length; p++) x.push(o(l[p], g[p][2] - g[p][0], g[p][3] - g[p][1], g[p][0], g[p][1]));
    } else x = e(l, h, c, d, u);
    return x;
  };
})();
var fl = (function() {
  function n(e, t) {
    q(this, n), this.ctx = e, this.w = e.w, this.strokeWidth = this.w.config.stroke.width, this.helpers = new br(e), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = [];
  }
  return $(n, [{ key: "draw", value: function(e) {
    var t = this, i = this.w, a = new X(this.ctx), s = new Ze(this.ctx), r = a.group({ class: "apexcharts-treemap" });
    if (i.globals.noData) return r;
    var o = [];
    return e.forEach((function(l) {
      var h = l.map((function(c) {
        return Math.abs(c);
      }));
      o.push(h);
    })), this.negRange = this.helpers.checkColorRange(), i.config.series.forEach((function(l, h) {
      l.data.forEach((function(c) {
        Array.isArray(t.labels[h]) || (t.labels[h] = []), t.labels[h].push(c.x);
      }));
    })), window.TreemapSquared.generate(o, i.globals.gridWidth, i.globals.gridHeight).forEach((function(l, h) {
      var c = a.group({ class: "apexcharts-series apexcharts-treemap-series", seriesName: L.escapeString(i.globals.seriesNames[h]), rel: h + 1, "data:realIndex": h });
      if (i.config.chart.dropShadow.enabled) {
        var d = i.config.chart.dropShadow;
        new Re(t.ctx).dropShadow(r, d, h);
      }
      var u = a.group({ class: "apexcharts-data-labels" }), g = { xMin: 1 / 0, yMin: 1 / 0, xMax: -1 / 0, yMax: -1 / 0 };
      l.forEach((function(Y, N) {
        var H = Y[0], U = Y[1], Q = Y[2], O = Y[3];
        g.xMin = Math.min(g.xMin, H), g.yMin = Math.min(g.yMin, U), g.xMax = Math.max(g.xMax, Q), g.yMax = Math.max(g.yMax, O);
        var _ = t.helpers.getShadeColor(i.config.chart.type, h, N, t.negRange), Z = _.color, ee = s.fillPath({ color: Z, seriesNumber: h, dataPointIndex: N }), W = a.drawRect(H, U, Q - H, O - U, i.config.plotOptions.treemap.borderRadius, "#fff", 1, t.strokeWidth, i.config.plotOptions.treemap.useFillColorAsStroke ? Z : i.globals.stroke.colors[h]);
        W.attr({ cx: H, cy: U, index: h, i: h, j: N, width: Q - H, height: O - U, fill: ee }), W.node.classList.add("apexcharts-treemap-rect"), t.helpers.addListeners(W);
        var se = { x: H + (Q - H) / 2, y: U + (O - U) / 2, width: 0, height: 0 }, B = { x: H, y: U, width: Q - H, height: O - U };
        if (i.config.chart.animations.enabled && !i.globals.dataChanged) {
          var G = 1;
          i.globals.resized || (G = i.config.chart.animations.speed), t.animateTreemap(W, se, B, G);
        }
        if (i.globals.dataChanged) {
          var J = 1;
          t.dynamicAnim.enabled && i.globals.shouldAnimate && (J = t.dynamicAnim.speed, i.globals.previousPaths[h] && i.globals.previousPaths[h][N] && i.globals.previousPaths[h][N].rect && (se = i.globals.previousPaths[h][N].rect), t.animateTreemap(W, se, B, J));
        }
        var ae = t.getFontSize(Y), te = i.config.dataLabels.formatter(t.labels[h][N], { value: i.globals.series[h][N], seriesIndex: h, dataPointIndex: N, w: i });
        i.config.plotOptions.treemap.dataLabels.format === "truncate" && (ae = parseInt(i.config.dataLabels.style.fontSize, 10), te = t.truncateLabels(te, ae, H, U, Q, O));
        var ge = null;
        i.globals.series[h][N] && (ge = t.helpers.calculateDataLabels({ text: te, x: (H + Q) / 2, y: (U + O) / 2 + t.strokeWidth / 2 + ae / 3, i: h, j: N, colorProps: _, fontSize: ae, series: e })), i.config.dataLabels.enabled && ge && t.rotateToFitLabel(ge, ae, te, H, U, Q, O), c.add(W), ge !== null && c.add(ge);
      }));
      var p = i.config.plotOptions.treemap.seriesTitle;
      if (i.config.series.length > 1 && p && p.show) {
        var f = i.config.series[h].name || "";
        if (f && g.xMin < 1 / 0 && g.yMin < 1 / 0) {
          var x = p.offsetX, b = p.offsetY, m = p.borderColor, y = p.borderWidth, w = p.borderRadius, v = p.style, C = v.color || i.config.chart.foreColor, k = { left: v.padding.left, right: v.padding.right, top: v.padding.top, bottom: v.padding.bottom }, A = a.getTextRects(f, v.fontSize, v.fontFamily), S = A.width + k.left + k.right, P = A.height + k.top + k.bottom, T = g.xMin + (x || 0), I = g.yMin + (b || 0), R = a.drawRect(T, I, S, P, w, v.background, 1, y, m), z = a.drawText({ x: T + k.left, y: I + k.top + 0.75 * A.height, text: f, fontSize: v.fontSize, fontFamily: v.fontFamily, fontWeight: v.fontWeight, foreColor: C, cssClass: v.cssClass || "" });
          c.add(R), c.add(z);
        }
      }
      c.add(u), r.add(c);
    })), r;
  } }, { key: "getFontSize", value: function(e) {
    var t = this.w, i = (function a(s) {
      var r, o = 0;
      if (Array.isArray(s[0])) for (r = 0; r < s.length; r++) o += a(s[r]);
      else for (r = 0; r < s.length; r++) o += s[r].length;
      return o;
    })(this.labels) / (function a(s) {
      var r, o = 0;
      if (Array.isArray(s[0])) for (r = 0; r < s.length; r++) o += a(s[r]);
      else for (r = 0; r < s.length; r++) o += 1;
      return o;
    })(this.labels);
    return (function(a, s) {
      var r = a * s, o = Math.pow(r, 0.5);
      return Math.min(o / i, parseInt(t.config.dataLabels.style.fontSize, 10));
    })(e[2] - e[0], e[3] - e[1]);
  } }, { key: "rotateToFitLabel", value: function(e, t, i, a, s, r, o) {
    var l = new X(this.ctx), h = l.getTextRects(i, t);
    if (h.width + this.w.config.stroke.width + 5 > r - a && h.width <= o - s) {
      var c = l.rotateAroundCenter(e.node);
      e.node.setAttribute("transform", "rotate(-90 ".concat(c.x, " ").concat(c.y, ") translate(").concat(h.height / 3, ")"));
    }
  } }, { key: "truncateLabels", value: function(e, t, i, a, s, r) {
    var o = new X(this.ctx), l = o.getTextRects(e, t).width + this.w.config.stroke.width + 5 > s - i && r - a > s - i ? r - a : s - i, h = o.getTextBasedOnMaxWidth({ text: e, maxWidth: l, fontSize: t });
    return e.length !== h.length && l / t < 5 ? "" : h;
  } }, { key: "animateTreemap", value: function(e, t, i, a) {
    var s = new St(this.ctx);
    s.animateRect(e, t, i, a, (function() {
      s.animationCompleted(e);
    }));
  } }]), n;
})(), yr = 86400, pl = 10 / yr, xl = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w, this.timeScaleArray = [], this.utc = this.w.config.xaxis.labels.datetimeUTC;
  }
  return $(n, [{ key: "calculateTimeScaleTicks", value: function(e, t) {
    var i = this, a = this.w;
    if (a.globals.allSeriesCollapsed) return a.globals.labels = [], a.globals.timescaleLabels = [], [];
    var s = new Ie(this.ctx), r = (t - e) / 864e5;
    this.determineInterval(r), a.globals.disableZoomIn = !1, a.globals.disableZoomOut = !1, r < pl ? a.globals.disableZoomIn = !0 : r > 5e4 && (a.globals.disableZoomOut = !0);
    var o = s.getTimeUnitsfromTimestamp(e, t, this.utc), l = a.globals.gridWidth / r, h = l / 24, c = h / 60, d = c / 60, u = Math.floor(24 * r), g = Math.floor(1440 * r), p = Math.floor(r * yr), f = Math.floor(r), x = Math.floor(r / 30), b = Math.floor(r / 365), m = { minMillisecond: o.minMillisecond, minSecond: o.minSecond, minMinute: o.minMinute, minHour: o.minHour, minDate: o.minDate, minMonth: o.minMonth, minYear: o.minYear }, y = { firstVal: m, currentMillisecond: m.minMillisecond, currentSecond: m.minSecond, currentMinute: m.minMinute, currentHour: m.minHour, currentMonthDate: m.minDate, currentDate: m.minDate, currentMonth: m.minMonth, currentYear: m.minYear, daysWidthOnXAxis: l, hoursWidthOnXAxis: h, minutesWidthOnXAxis: c, secondsWidthOnXAxis: d, numberOfSeconds: p, numberOfMinutes: g, numberOfHours: u, numberOfDays: f, numberOfMonths: x, numberOfYears: b };
    switch (this.tickInterval) {
      case "years":
        this.generateYearScale(y);
        break;
      case "months":
      case "half_year":
        this.generateMonthScale(y);
        break;
      case "months_days":
      case "months_fortnight":
      case "days":
      case "week_days":
        this.generateDayScale(y);
        break;
      case "hours":
        this.generateHourScale(y);
        break;
      case "minutes_fives":
      case "minutes":
        this.generateMinuteScale(y);
        break;
      case "seconds_tens":
      case "seconds_fives":
      case "seconds":
        this.generateSecondScale(y);
    }
    var w = this.timeScaleArray.map((function(v) {
      var C = { position: v.position, unit: v.unit, year: v.year, day: v.day ? v.day : 1, hour: v.hour ? v.hour : 0, month: v.month + 1 };
      return v.unit === "month" ? D(D({}, C), {}, { day: 1, value: v.value + 1 }) : v.unit === "day" || v.unit === "hour" ? D(D({}, C), {}, { value: v.value }) : v.unit === "minute" ? D(D({}, C), {}, { value: v.value, minute: v.value }) : v.unit === "second" ? D(D({}, C), {}, { value: v.value, minute: v.minute, second: v.second }) : v;
    }));
    return w.filter((function(v) {
      var C = 1, k = Math.ceil(a.globals.gridWidth / 120), A = v.value;
      a.config.xaxis.tickAmount !== void 0 && (k = a.config.xaxis.tickAmount), w.length > k && (C = Math.floor(w.length / k));
      var S = !1, P = !1;
      switch (i.tickInterval) {
        case "years":
          v.unit === "year" && (S = !0);
          break;
        case "half_year":
          C = 7, v.unit === "year" && (S = !0);
          break;
        case "months":
          C = 1, v.unit === "year" && (S = !0);
          break;
        case "months_fortnight":
          C = 15, v.unit !== "year" && v.unit !== "month" || (S = !0), A === 30 && (P = !0);
          break;
        case "months_days":
          C = 10, v.unit === "month" && (S = !0), A === 30 && (P = !0);
          break;
        case "week_days":
          C = 8, v.unit === "month" && (S = !0);
          break;
        case "days":
          C = 1, v.unit === "month" && (S = !0);
          break;
        case "hours":
          v.unit === "day" && (S = !0);
          break;
        case "minutes_fives":
        case "seconds_fives":
          A % 5 != 0 && (P = !0);
          break;
        case "seconds_tens":
          A % 10 != 0 && (P = !0);
      }
      if (i.tickInterval === "hours" || i.tickInterval === "minutes_fives" || i.tickInterval === "seconds_tens" || i.tickInterval === "seconds_fives") {
        if (!P) return !0;
      } else if ((A % C == 0 || S) && !P) return !0;
    }));
  } }, { key: "recalcDimensionsBasedOnFormat", value: function(e, t) {
    var i = this.w, a = this.formatDates(e), s = this.removeOverlappingTS(a);
    i.globals.timescaleLabels = s.slice(), new di(this.ctx).plotCoords();
  } }, { key: "determineInterval", value: function(e) {
    var t = 24 * e, i = 60 * t;
    switch (!0) {
      case e / 365 > 5:
        this.tickInterval = "years";
        break;
      case e > 800:
        this.tickInterval = "half_year";
        break;
      case e > 180:
        this.tickInterval = "months";
        break;
      case e > 90:
        this.tickInterval = "months_fortnight";
        break;
      case e > 60:
        this.tickInterval = "months_days";
        break;
      case e > 30:
        this.tickInterval = "week_days";
        break;
      case e > 2:
        this.tickInterval = "days";
        break;
      case t > 2.4:
        this.tickInterval = "hours";
        break;
      case i > 15:
        this.tickInterval = "minutes_fives";
        break;
      case i > 5:
        this.tickInterval = "minutes";
        break;
      case i > 1:
        this.tickInterval = "seconds_tens";
        break;
      case 60 * i > 20:
        this.tickInterval = "seconds_fives";
        break;
      default:
        this.tickInterval = "seconds";
    }
  } }, { key: "generateYearScale", value: function(e) {
    var t = e.firstVal, i = e.currentMonth, a = e.currentYear, s = e.daysWidthOnXAxis, r = e.numberOfYears, o = t.minYear, l = 0, h = new Ie(this.ctx), c = "year";
    if (t.minDate > 1 || t.minMonth > 0) {
      var d = h.determineRemainingDaysOfYear(t.minYear, t.minMonth, t.minDate);
      l = (h.determineDaysOfYear(t.minYear) - d + 1) * s, o = t.minYear + 1, this.timeScaleArray.push({ position: l, value: o, unit: c, year: o, month: L.monthMod(i + 1) });
    } else t.minDate === 1 && t.minMonth === 0 && this.timeScaleArray.push({ position: l, value: o, unit: c, year: a, month: L.monthMod(i + 1) });
    for (var u = o, g = l, p = 0; p < r; p++) u++, g = h.determineDaysOfYear(u - 1) * s + g, this.timeScaleArray.push({ position: g, value: u, unit: c, year: u, month: 1 });
  } }, { key: "generateMonthScale", value: function(e) {
    var t = e.firstVal, i = e.currentMonthDate, a = e.currentMonth, s = e.currentYear, r = e.daysWidthOnXAxis, o = e.numberOfMonths, l = a, h = 0, c = new Ie(this.ctx), d = "month", u = 0;
    if (t.minDate > 1) {
      h = (c.determineDaysOfMonths(a + 1, t.minYear) - i + 1) * r, l = L.monthMod(a + 1);
      var g = s + u, p = L.monthMod(l), f = l;
      l === 0 && (d = "year", f = g, p = 1, g += u += 1), this.timeScaleArray.push({ position: h, value: f, unit: d, year: g, month: p });
    } else this.timeScaleArray.push({ position: h, value: l, unit: d, year: s, month: L.monthMod(a) });
    for (var x = l + 1, b = h, m = 0, y = 1; m < o; m++, y++) {
      (x = L.monthMod(x)) === 0 ? (d = "year", u += 1) : d = "month";
      var w = this._getYear(s, x, u);
      b = c.determineDaysOfMonths(x, w) * r + b;
      var v = x === 0 ? w : x;
      this.timeScaleArray.push({ position: b, value: v, unit: d, year: w, month: x === 0 ? 1 : x }), x++;
    }
  } }, { key: "generateDayScale", value: function(e) {
    var t = e.firstVal, i = e.currentMonth, a = e.currentYear, s = e.hoursWidthOnXAxis, r = e.numberOfDays, o = new Ie(this.ctx), l = "day", h = t.minDate + 1, c = h, d = function(y, w, v) {
      return y > o.determineDaysOfMonths(w + 1, v) && (c = 1, l = "month", g = w += 1), w;
    }, u = (24 - t.minHour) * s, g = h, p = d(c, i, a);
    t.minHour === 0 && t.minDate === 1 ? (u = 0, g = L.monthMod(t.minMonth), l = "month", c = t.minDate) : t.minDate !== 1 && t.minHour === 0 && t.minMinute === 0 && (u = 0, h = t.minDate, g = h, p = d(c = h, i, a), g !== 1 && (l = "day")), this.timeScaleArray.push({ position: u, value: g, unit: l, year: this._getYear(a, p, 0), month: L.monthMod(p), day: c });
    for (var f = u, x = 0; x < r; x++) {
      l = "day", p = d(c += 1, p, this._getYear(a, p, 0));
      var b = this._getYear(a, p, 0);
      f = 24 * s + f;
      var m = c === 1 ? L.monthMod(p) : c;
      this.timeScaleArray.push({ position: f, value: m, unit: l, year: b, month: L.monthMod(p), day: m });
    }
  } }, { key: "generateHourScale", value: function(e) {
    var t = e.firstVal, i = e.currentDate, a = e.currentMonth, s = e.currentYear, r = e.minutesWidthOnXAxis, o = e.numberOfHours, l = new Ie(this.ctx), h = "hour", c = function(C, k) {
      return C > l.determineDaysOfMonths(k + 1, s) && (x = 1, k += 1), { month: k, date: x };
    }, d = function(C, k) {
      return C > l.determineDaysOfMonths(k + 1, s) ? k += 1 : k;
    }, u = 60 - (t.minMinute + t.minSecond / 60), g = u * r, p = t.minHour + 1, f = p;
    u === 60 && (g = 0, f = p = t.minHour);
    var x = i;
    f >= 24 && (f = 0, h = "day", p = x += 1);
    var b = c(x, a).month;
    b = d(x, b), p > 31 && (p = x = 1), this.timeScaleArray.push({ position: g, value: p, unit: h, day: x, hour: f, year: s, month: L.monthMod(b) }), f++;
    for (var m = g, y = 0; y < o; y++) {
      h = "hour", f >= 24 && (f = 0, h = "day", b = c(x += 1, b).month, b = d(x, b));
      var w = this._getYear(s, b, 0);
      m = 60 * r + m;
      var v = f === 0 ? x : f;
      this.timeScaleArray.push({ position: m, value: v, unit: h, hour: f, day: x, year: w, month: L.monthMod(b) }), f++;
    }
  } }, { key: "generateMinuteScale", value: function(e) {
    for (var t = e.currentMillisecond, i = e.currentSecond, a = e.currentMinute, s = e.currentHour, r = e.currentDate, o = e.currentMonth, l = e.currentYear, h = e.minutesWidthOnXAxis, c = e.secondsWidthOnXAxis, d = e.numberOfMinutes, u = a + 1, g = r, p = o, f = l, x = s, b = (60 - i - t / 1e3) * c, m = 0; m < d; m++) u >= 60 && (u = 0, (x += 1) === 24 && (x = 0)), this.timeScaleArray.push({ position: b, value: u, unit: "minute", hour: x, minute: u, day: g, year: this._getYear(f, p, 0), month: L.monthMod(p) }), b += h, u++;
  } }, { key: "generateSecondScale", value: function(e) {
    for (var t = e.currentMillisecond, i = e.currentSecond, a = e.currentMinute, s = e.currentHour, r = e.currentDate, o = e.currentMonth, l = e.currentYear, h = e.secondsWidthOnXAxis, c = e.numberOfSeconds, d = i + 1, u = a, g = r, p = o, f = l, x = s, b = (1e3 - t) / 1e3 * h, m = 0; m < c; m++) d >= 60 && (d = 0, ++u >= 60 && (u = 0, ++x === 24 && (x = 0))), this.timeScaleArray.push({ position: b, value: d, unit: "second", hour: x, minute: u, second: d, day: g, year: this._getYear(f, p, 0), month: L.monthMod(p) }), b += h, d++;
  } }, { key: "createRawDateString", value: function(e, t) {
    var i = e.year;
    return e.month === 0 && (e.month = 1), i += "-" + ("0" + e.month.toString()).slice(-2), e.unit === "day" ? i += e.unit === "day" ? "-" + ("0" + t).slice(-2) : "-01" : i += "-" + ("0" + (e.day ? e.day : "1")).slice(-2), e.unit === "hour" ? i += e.unit === "hour" ? "T" + ("0" + t).slice(-2) : "T00" : i += "T" + ("0" + (e.hour ? e.hour : "0")).slice(-2), e.unit === "minute" ? i += ":" + ("0" + t).slice(-2) : i += ":" + (e.minute ? ("0" + e.minute).slice(-2) : "00"), e.unit === "second" ? i += ":" + ("0" + t).slice(-2) : i += ":00", this.utc && (i += ".000Z"), i;
  } }, { key: "formatDates", value: function(e) {
    var t = this, i = this.w;
    return e.map((function(a) {
      var s = a.value.toString(), r = new Ie(t.ctx), o = t.createRawDateString(a, s), l = r.getDate(r.parseDate(o));
      if (t.utc || (l = r.getDate(r.parseDateWithTimezone(o))), i.config.xaxis.labels.format === void 0) {
        var h = "dd MMM", c = i.config.xaxis.labels.datetimeFormatter;
        a.unit === "year" && (h = c.year), a.unit === "month" && (h = c.month), a.unit === "day" && (h = c.day), a.unit === "hour" && (h = c.hour), a.unit === "minute" && (h = c.minute), a.unit === "second" && (h = c.second), s = r.formatDate(l, h);
      } else s = r.formatDate(l, i.config.xaxis.labels.format);
      return { dateString: o, position: a.position, value: s, unit: a.unit, year: a.year, month: a.month };
    }));
  } }, { key: "removeOverlappingTS", value: function(e) {
    var t, i = this, a = new X(this.ctx), s = !1;
    e.length > 0 && e[0].value && e.every((function(l) {
      return l.value.length === e[0].value.length;
    })) && (s = !0, t = a.getTextRects(e[0].value).width);
    var r = 0, o = e.map((function(l, h) {
      if (h > 0 && i.w.config.xaxis.labels.hideOverlappingLabels) {
        var c = s ? t : a.getTextRects(e[r].value).width, d = e[r].position;
        return l.position > d + c + 10 ? (r = h, l) : null;
      }
      return l;
    }));
    return o = o.filter((function(l) {
      return l !== null;
    }));
  } }, { key: "_getYear", value: function(e, t, i) {
    return e + Math.floor(t / 12) + i;
  } }]), n;
})(), bl = (function() {
  function n(e, t) {
    q(this, n), this.ctx = t, this.w = t.w, this.el = e;
  }
  return $(n, [{ key: "setupElements", value: function() {
    var e = this.w, t = e.globals, i = e.config, a = i.chart.type;
    t.axisCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble", "radar", "heatmap", "treemap"].includes(a), t.xyCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble"].includes(a), t.isBarHorizontal = ["bar", "rangeBar", "boxPlot"].includes(a) && i.plotOptions.bar.horizontal, t.chartClass = ".apexcharts".concat(t.chartID), t.dom.baseEl = this.el, t.dom.elWrap = document.createElement("div"), X.setAttrs(t.dom.elWrap, { id: t.chartClass.substring(1), class: "apexcharts-canvas ".concat(t.chartClass.substring(1)) }), this.el.appendChild(t.dom.elWrap), t.dom.Paper = window.SVG().addTo(t.dom.elWrap), t.dom.Paper.attr({ class: "apexcharts-svg", "xmlns:data": "ApexChartsNS", transform: "translate(".concat(i.chart.offsetX, ", ").concat(i.chart.offsetY, ")") }), t.dom.Paper.node.style.background = i.theme.mode !== "dark" || i.chart.background ? i.theme.mode !== "light" || i.chart.background ? i.chart.background : "#fff" : "#343A3F", this.setSVGDimensions(), t.dom.elLegendForeign = document.createElementNS(t.SVGNS, "foreignObject"), X.setAttrs(t.dom.elLegendForeign, { x: 0, y: 0, width: t.svgWidth, height: t.svgHeight }), t.dom.elLegendWrap = document.createElement("div"), t.dom.elLegendWrap.classList.add("apexcharts-legend"), t.dom.elWrap.appendChild(t.dom.elLegendWrap), t.dom.Paper.node.appendChild(t.dom.elLegendForeign), t.dom.elGraphical = t.dom.Paper.group().attr({ class: "apexcharts-inner apexcharts-graphical" }), t.dom.elDefs = t.dom.Paper.defs(), t.dom.Paper.add(t.dom.elGraphical), t.dom.elGraphical.add(t.dom.elDefs);
  } }, { key: "plotChartType", value: function(e, t) {
    var i = this.w, a = this.ctx, s = i.config, r = i.globals, o = { line: { series: [], i: [] }, area: { series: [], i: [] }, scatter: { series: [], i: [] }, bubble: { series: [], i: [] }, bar: { series: [], i: [] }, candlestick: { series: [], i: [] }, boxPlot: { series: [], i: [] }, rangeBar: { series: [], i: [] }, rangeArea: { series: [], seriesRangeEnd: [], i: [] } }, l = s.chart.type || "line", h = null, c = 0;
    r.series.forEach((function(C, k) {
      var A = e[k].type === "column" ? "bar" : e[k].type || (l === "column" ? "bar" : l);
      o[A] ? (A === "rangeArea" ? (o[A].series.push(r.seriesRangeStart[k]), o[A].seriesRangeEnd.push(r.seriesRangeEnd[k])) : o[A].series.push(C), o[A].i.push(k), A === "bar" && (i.globals.columnSeries = o.bar)) : ["heatmap", "treemap", "pie", "donut", "polarArea", "radialBar", "radar"].includes(A) ? h = A : console.warn("You have specified an unrecognized series type (".concat(A, ").")), l !== A && A !== "scatter" && c++;
    })), c > 0 && (h && console.warn("Chart or series type ".concat(h, " cannot appear with other chart or series types.")), o.bar.series.length > 0 && s.plotOptions.bar.horizontal && (c -= o.bar.series.length, o.bar = { series: [], i: [] }, i.globals.columnSeries = { series: [], i: [] }, console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"))), r.comboCharts || (r.comboCharts = c > 0);
    var d = new Yi(a, t), u = new zi(a, t);
    a.pie = new vr(a);
    var g = new ll(a);
    a.rangeBar = new hl(a, t);
    var p = new ol(a), f = [];
    if (r.comboCharts) {
      var x, b, m = new Le(a);
      if (o.area.series.length > 0 && (x = f).push.apply(x, Ee(m.drawSeriesByGroup(o.area, r.areaGroups, "area", d))), o.bar.series.length > 0) if (s.chart.stacked) {
        var y = new hs(a, t);
        f.push(y.draw(o.bar.series, o.bar.i));
      } else a.bar = new Ct(a, t), f.push(a.bar.draw(o.bar.series, o.bar.i));
      if (o.rangeArea.series.length > 0 && f.push(d.draw(o.rangeArea.series, "rangeArea", o.rangeArea.i, o.rangeArea.seriesRangeEnd)), o.line.series.length > 0 && (b = f).push.apply(b, Ee(m.drawSeriesByGroup(o.line, r.lineGroups, "line", d))), o.candlestick.series.length > 0 && f.push(u.draw(o.candlestick.series, "candlestick", o.candlestick.i)), o.boxPlot.series.length > 0 && f.push(u.draw(o.boxPlot.series, "boxPlot", o.boxPlot.i)), o.rangeBar.series.length > 0 && f.push(a.rangeBar.draw(o.rangeBar.series, o.rangeBar.i)), o.scatter.series.length > 0) {
        var w = new Yi(a, t, !0);
        f.push(w.draw(o.scatter.series, "scatter", o.scatter.i));
      }
      if (o.bubble.series.length > 0) {
        var v = new Yi(a, t, !0);
        f.push(v.draw(o.bubble.series, "bubble", o.bubble.i));
      }
    } else switch (s.chart.type) {
      case "line":
        f = d.draw(r.series, "line");
        break;
      case "area":
        f = d.draw(r.series, "area");
        break;
      case "bar":
        s.chart.stacked ? f = new hs(a, t).draw(r.series) : (a.bar = new Ct(a, t), f = a.bar.draw(r.series));
        break;
      case "candlestick":
        f = new zi(a, t).draw(r.series, "candlestick");
        break;
      case "boxPlot":
        f = new zi(a, t).draw(r.series, s.chart.type);
        break;
      case "rangeBar":
        f = a.rangeBar.draw(r.series);
        break;
      case "rangeArea":
        f = d.draw(r.seriesRangeStart, "rangeArea", void 0, r.seriesRangeEnd);
        break;
      case "heatmap":
        f = new nl(a, t).draw(r.series);
        break;
      case "treemap":
        f = new fl(a, t).draw(r.series);
        break;
      case "pie":
      case "donut":
      case "polarArea":
        f = a.pie.draw(r.series);
        break;
      case "radialBar":
        f = g.draw(r.series);
        break;
      case "radar":
        f = p.draw(r.series);
        break;
      default:
        f = d.draw(r.series);
    }
    return f;
  } }, { key: "setSVGDimensions", value: function() {
    var e = this.w, t = e.globals, i = e.config;
    i.chart.width = i.chart.width || "100%", i.chart.height = i.chart.height || "auto", t.svgWidth = i.chart.width, t.svgHeight = i.chart.height;
    var a = L.getDimensions(this.el), s = i.chart.width.toString().split(/[0-9]+/g).pop();
    s === "%" ? L.isNumber(a[0]) && (a[0].width === 0 && (a = L.getDimensions(this.el.parentNode)), t.svgWidth = a[0] * parseInt(i.chart.width, 10) / 100) : s !== "px" && s !== "" || (t.svgWidth = parseInt(i.chart.width, 10));
    var r = String(i.chart.height).toString().split(/[0-9]+/g).pop();
    if (t.svgHeight !== "auto" && t.svgHeight !== "") if (r === "%") {
      var o = L.getDimensions(this.el.parentNode);
      t.svgHeight = o[1] * parseInt(i.chart.height, 10) / 100;
    } else t.svgHeight = parseInt(i.chart.height, 10);
    else t.svgHeight = t.axisCharts ? t.svgWidth / 1.61 : t.svgWidth / 1.2;
    if (t.svgWidth = Math.max(t.svgWidth, 0), t.svgHeight = Math.max(t.svgHeight, 0), X.setAttrs(t.dom.Paper.node, { width: t.svgWidth, height: t.svgHeight }), r !== "%") {
      var l = i.chart.sparkline.enabled ? 0 : t.axisCharts ? i.chart.parentHeightOffset : 0;
      t.dom.Paper.node.parentNode.parentNode.style.minHeight = "".concat(t.svgHeight + l, "px");
    }
    t.dom.elWrap.style.width = "".concat(t.svgWidth, "px"), t.dom.elWrap.style.height = "".concat(t.svgHeight, "px");
  } }, { key: "shiftGraphPosition", value: function() {
    var e = this.w.globals, t = e.translateY, i = e.translateX;
    X.setAttrs(e.dom.elGraphical.node, { transform: "translate(".concat(i, ", ").concat(t, ")") });
  } }, { key: "resizeNonAxisCharts", value: function() {
    var e = this.w, t = e.globals, i = 0, a = e.config.chart.sparkline.enabled ? 1 : 15;
    a += e.config.grid.padding.bottom, ["top", "bottom"].includes(e.config.legend.position) && e.config.legend.show && !e.config.legend.floating && (i = new gr(this.ctx).legendHelpers.getLegendDimensions().clwh + 7);
    var s = e.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"), r = 2.05 * e.globals.radialSize;
    if (s && !e.config.chart.sparkline.enabled && e.config.plotOptions.radialBar.startAngle !== 0) {
      var o = L.getBoundingClientRect(s);
      r = o.bottom;
      var l = o.bottom - o.top;
      r = Math.max(2.05 * e.globals.radialSize, l);
    }
    var h = Math.ceil(r + t.translateY + i + a);
    t.dom.elLegendForeign && t.dom.elLegendForeign.setAttribute("height", h), e.config.chart.height && String(e.config.chart.height).includes("%") || (t.dom.elWrap.style.height = "".concat(h, "px"), X.setAttrs(t.dom.Paper.node, { height: h }), t.dom.Paper.node.parentNode.parentNode.style.minHeight = "".concat(h, "px"));
  } }, { key: "coreCalculations", value: function() {
    new ra(this.ctx).init();
  } }, { key: "resetGlobals", value: function() {
    var e = this, t = function() {
      return e.w.config.series.map((function() {
        return [];
      }));
    }, i = new hr(), a = this.w.globals;
    i.initGlobalVars(a), a.seriesXvalues = t(), a.seriesYvalues = t();
  } }, { key: "isMultipleY", value: function() {
    return !!(Array.isArray(this.w.config.yaxis) && this.w.config.yaxis.length > 1) && (this.w.globals.isMultipleYAxis = !0, !0);
  } }, { key: "xySettings", value: function() {
    var e = this.w, t = null;
    if (e.globals.axisCharts) {
      if (e.config.xaxis.crosshairs.position === "back" && new na(this.ctx).drawXCrosshairs(), e.config.yaxis[0].crosshairs.position === "back" && new na(this.ctx).drawYCrosshairs(), e.config.xaxis.type === "datetime" && e.config.xaxis.labels.formatter === void 0) {
        this.ctx.timeScale = new xl(this.ctx);
        var i = [];
        isFinite(e.globals.minX) && isFinite(e.globals.maxX) && !e.globals.isBarHorizontal ? i = this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minX, e.globals.maxX) : e.globals.isBarHorizontal && (i = this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minY, e.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(i);
      }
      t = new Le(this.ctx).getCalculatedRatios();
    }
    return t;
  } }, { key: "updateSourceChart", value: function(e) {
    this.ctx.w.globals.selection = void 0, this.ctx.updateHelpers._updateOptions({ chart: { selection: { xaxis: { min: e.w.globals.minX, max: e.w.globals.maxX } } } }, !1, !1);
  } }, { key: "setupBrushHandler", value: function() {
    var e = this, t = this.ctx, i = this.w;
    if (i.config.chart.brush.enabled && typeof i.config.chart.events.selection != "function") {
      var a = Array.isArray(i.config.chart.brush.targets) ? i.config.chart.brush.targets : [i.config.chart.brush.target];
      a.forEach((function(s) {
        var r = t.constructor.getChartByID(s);
        r.w.globals.brushSource = e.ctx, typeof r.w.config.chart.events.zoomed != "function" && (r.w.config.chart.events.zoomed = function() {
          return e.updateSourceChart(r);
        }), typeof r.w.config.chart.events.scrolled != "function" && (r.w.config.chart.events.scrolled = function() {
          return e.updateSourceChart(r);
        });
      })), i.config.chart.events.selection = function(s, r) {
        a.forEach((function(o) {
          t.constructor.getChartByID(o).ctx.updateHelpers._updateOptions({ xaxis: { min: r.xaxis.min, max: r.xaxis.max } }, !1, !1, !1, !1);
        }));
      };
    }
  } }]), n;
})(), ml = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
  }
  return $(n, [{ key: "_updateOptions", value: function(e) {
    var t = this, i = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], a = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], s = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], r = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
    return new Promise((function(o) {
      var l = [t.ctx];
      s && (l = t.ctx.getSyncedCharts()), t.ctx.w.globals.isExecCalled && (l = [t.ctx], t.ctx.w.globals.isExecCalled = !1), l.forEach((function(h, c) {
        var d = h.w;
        if (d.globals.shouldAnimate = a, i || (d.globals.resized = !0, d.globals.dataChanged = !0, a && h.series.getPreviousPaths()), e && kt(e) === "object" && (h.config = new Dt(e), e = Le.extendArrayProps(h.config, e, d), h.w.globals.chartID !== t.ctx.w.globals.chartID && delete e.series, d.config = L.extend(d.config, e), r && (d.globals.lastXAxis = e.xaxis ? L.clone(e.xaxis) : [], d.globals.lastYAxis = e.yaxis ? L.clone(e.yaxis) : [], d.globals.initialConfig = L.extend({}, d.config), d.globals.initialSeries = L.clone(d.config.series), e.series))) {
          for (var u = 0; u < d.globals.collapsedSeriesIndices.length; u++) {
            var g = d.config.series[d.globals.collapsedSeriesIndices[u]];
            d.globals.collapsedSeries[u].data = d.globals.axisCharts ? g.data.slice() : g;
          }
          for (var p = 0; p < d.globals.ancillaryCollapsedSeriesIndices.length; p++) {
            var f = d.config.series[d.globals.ancillaryCollapsedSeriesIndices[p]];
            d.globals.ancillaryCollapsedSeries[p].data = d.globals.axisCharts ? f.data.slice() : f;
          }
          h.series.emptyCollapsedSeries(d.config.series);
        }
        return h.update(e).then((function() {
          c === l.length - 1 && o(h);
        }));
      }));
    }));
  } }, { key: "_updateSeries", value: function(e, t) {
    var i = this, a = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    return new Promise((function(s) {
      var r, o = i.w;
      return o.globals.shouldAnimate = t, o.globals.dataChanged = !0, t && i.ctx.series.getPreviousPaths(), o.globals.axisCharts ? ((r = e.map((function(l, h) {
        return i._extendSeries(l, h);
      }))).length === 0 && (r = [{ data: [] }]), o.config.series = r) : o.config.series = e.slice(), a && (o.globals.initialConfig.series = L.clone(o.config.series), o.globals.initialSeries = L.clone(o.config.series)), i.ctx.update().then((function() {
        s(i.ctx);
      }));
    }));
  } }, { key: "_extendSeries", value: function(e, t) {
    var i = this.w, a = i.config.series[t];
    return D(D({}, i.config.series[t]), {}, { name: e.name ? e.name : a == null ? void 0 : a.name, color: e.color ? e.color : a == null ? void 0 : a.color, type: e.type ? e.type : a == null ? void 0 : a.type, group: e.group ? e.group : a == null ? void 0 : a.group, hidden: e.hidden !== void 0 ? e.hidden : a == null ? void 0 : a.hidden, data: e.data ? e.data : a == null ? void 0 : a.data, zIndex: e.zIndex !== void 0 ? e.zIndex : t });
  } }, { key: "toggleDataPointSelection", value: function(e, t) {
    var i = this.w, a = null, s = ".apexcharts-series[data\\:realIndex='".concat(e, "']");
    return i.globals.axisCharts ? a = i.globals.dom.Paper.findOne("".concat(s, " path[j='").concat(t, "'], ").concat(s, " circle[j='").concat(t, "'], ").concat(s, " rect[j='").concat(t, "']")) : t === void 0 && (a = i.globals.dom.Paper.findOne("".concat(s, " path[j='").concat(e, "']")), i.config.chart.type !== "pie" && i.config.chart.type !== "polarArea" && i.config.chart.type !== "donut" || this.ctx.pie.pieClicked(e)), a ? (new X(this.ctx).pathMouseDown(a, null), a.node ? a.node : null) : (console.warn("toggleDataPointSelection: Element not found"), null);
  } }, { key: "forceXAxisUpdate", value: function(e) {
    var t = this.w;
    if (["min", "max"].forEach((function(a) {
      e.xaxis[a] !== void 0 && (t.config.xaxis[a] = e.xaxis[a], t.globals.lastXAxis[a] = e.xaxis[a]);
    })), e.xaxis.categories && e.xaxis.categories.length && (t.config.xaxis.categories = e.xaxis.categories), t.config.xaxis.convertedCatToNumeric) {
      var i = new Ft(e);
      e = i.convertCatToNumericXaxis(e, this.ctx);
    }
    return e;
  } }, { key: "forceYAxisUpdate", value: function(e) {
    return e.chart && e.chart.stacked && e.chart.stackType === "100%" && (Array.isArray(e.yaxis) ? e.yaxis.forEach((function(t, i) {
      e.yaxis[i].min = 0, e.yaxis[i].max = 100;
    })) : (e.yaxis.min = 0, e.yaxis.max = 100)), e;
  } }, { key: "revertDefaultAxisMinMax", value: function(e) {
    var t = this, i = this.w, a = i.globals.lastXAxis, s = i.globals.lastYAxis;
    e && e.xaxis && (a = e.xaxis), e && e.yaxis && (s = e.yaxis), i.config.xaxis.min = a.min, i.config.xaxis.max = a.max;
    var r = function(o) {
      s[o] !== void 0 && (i.config.yaxis[o].min = s[o].min, i.config.yaxis[o].max = s[o].max);
    };
    i.config.yaxis.map((function(o, l) {
      i.globals.zoomed || s[l] !== void 0 ? r(l) : t.ctx.opts.yaxis[l] !== void 0 && (o.min = t.ctx.opts.yaxis[l].min, o.max = t.ctx.opts.yaxis[l].max);
    }));
  } }]), n;
})();
(function() {
  function n() {
    for (var s = arguments.length > 0 && arguments[0] !== d ? arguments[0] : [], r = arguments.length > 1 ? arguments[1] : d, o = arguments.length > 2 ? arguments[2] : d, l = arguments.length > 3 ? arguments[3] : d, h = arguments.length > 4 ? arguments[4] : d, c = arguments.length > 5 ? arguments[5] : d, d = arguments.length > 6 ? arguments[6] : d, u = s.slice(r, o || d), g = l.slice(h, c || d), p = 0, f = { pos: [0, 0], start: [0, 0] }, x = { pos: [0, 0], start: [0, 0] }; u[p] = e.call(f, u[p]), g[p] = e.call(x, g[p]), u[p][0] != g[p][0] || u[p][0] == "M" || u[p][0] == "A" && (u[p][4] != g[p][4] || u[p][5] != g[p][5]) ? (Array.prototype.splice.apply(u, [p, 1].concat(i.call(f, u[p]))), Array.prototype.splice.apply(g, [p, 1].concat(i.call(x, g[p])))) : (u[p] = t.call(f, u[p]), g[p] = t.call(x, g[p])), !(++p == u.length && p == g.length); )
      p == u.length && u.push(["C", f.pos[0], f.pos[1], f.pos[0], f.pos[1], f.pos[0], f.pos[1]]), p == g.length && g.push(["C", x.pos[0], x.pos[1], x.pos[0], x.pos[1], x.pos[0], x.pos[1]]);
    return { start: u, dest: g };
  }
  function e(s) {
    switch (s[0]) {
      case "z":
      case "Z":
        s[0] = "L", s[1] = this.start[0], s[2] = this.start[1];
        break;
      case "H":
        s[0] = "L", s[2] = this.pos[1];
        break;
      case "V":
        s[0] = "L", s[2] = s[1], s[1] = this.pos[0];
        break;
      case "T":
        s[0] = "Q", s[3] = s[1], s[4] = s[2], s[1] = this.reflection[1], s[2] = this.reflection[0];
        break;
      case "S":
        s[0] = "C", s[6] = s[4], s[5] = s[3], s[4] = s[2], s[3] = s[1], s[2] = this.reflection[1], s[1] = this.reflection[0];
    }
    return s;
  }
  function t(s) {
    var r = s.length;
    return this.pos = [s[r - 2], s[r - 1]], "SCQT".indexOf(s[0]) != -1 && (this.reflection = [2 * this.pos[0] - s[r - 4], 2 * this.pos[1] - s[r - 3]]), s;
  }
  function i(s) {
    var r = [s];
    switch (s[0]) {
      case "M":
        return this.pos = this.start = [s[1], s[2]], r;
      case "L":
        s[5] = s[3] = s[1], s[6] = s[4] = s[2], s[1] = this.pos[0], s[2] = this.pos[1];
        break;
      case "Q":
        s[6] = s[4], s[5] = s[3], s[4] = 1 * s[4] / 3 + 2 * s[2] / 3, s[3] = 1 * s[3] / 3 + 2 * s[1] / 3, s[2] = 1 * this.pos[1] / 3 + 2 * s[2] / 3, s[1] = 1 * this.pos[0] / 3 + 2 * s[1] / 3;
        break;
      case "A":
        r = (function(o, l) {
          var h, c, d, u, g, p, f, x, b, m, y, w, v, C, k, A, S, P, T, I, R, z, Y, N, H, U, Q = Math.abs(l[1]), O = Math.abs(l[2]), _ = l[3] % 360, Z = l[4], ee = l[5], W = l[6], se = l[7], B = new fe(o), G = new fe(W, se), J = [];
          if (Q === 0 || O === 0 || B.x === G.x && B.y === G.y) return [["C", B.x, B.y, G.x, G.y, G.x, G.y]];
          for (h = new fe((B.x - G.x) / 2, (B.y - G.y) / 2).transform(new ie().rotate(_)), c = h.x * h.x / (Q * Q) + h.y * h.y / (O * O), c > 1 && (Q *= c = Math.sqrt(c), O *= c), d = new ie().rotate(_).scale(1 / Q, 1 / O).rotate(-_), B = B.transform(d), G = G.transform(d), u = [G.x - B.x, G.y - B.y], p = u[0] * u[0] + u[1] * u[1], g = Math.sqrt(p), u[0] /= g, u[1] /= g, f = p < 4 ? Math.sqrt(1 - p / 4) : 0, Z === ee && (f *= -1), x = new fe((G.x + B.x) / 2 + f * -u[1], (G.y + B.y) / 2 + f * u[0]), b = new fe(B.x - x.x, B.y - x.y), m = new fe(G.x - x.x, G.y - x.y), y = Math.acos(b.x / Math.sqrt(b.x * b.x + b.y * b.y)), b.y < 0 && (y *= -1), w = Math.acos(m.x / Math.sqrt(m.x * m.x + m.y * m.y)), m.y < 0 && (w *= -1), ee && y > w && (w += 2 * Math.PI), !ee && y < w && (w -= 2 * Math.PI), C = Math.ceil(2 * Math.abs(y - w) / Math.PI), A = [], S = y, v = (w - y) / C, k = 4 * Math.tan(v / 4) / 3, R = 0; R <= C; R++) T = Math.cos(S), P = Math.sin(S), I = new fe(x.x + T, x.y + P), A[R] = [new fe(I.x + k * P, I.y - k * T), I, new fe(I.x - k * P, I.y + k * T)], S += v;
          for (A[0][0] = A[0][1].clone(), A[A.length - 1][2] = A[A.length - 1][1].clone(), d = new ie().rotate(_).scale(Q, O).rotate(-_), R = 0, z = A.length; R < z; R++) A[R][0] = A[R][0].transform(d), A[R][1] = A[R][1].transform(d), A[R][2] = A[R][2].transform(d);
          for (R = 1, z = A.length; R < z; R++) Y = (I = A[R - 1][2]).x, N = I.y, H = (I = A[R][0]).x, U = I.y, W = (I = A[R][1]).x, se = I.y, J.push(["C", Y, N, H, U, W, se]);
          return J;
        })(this.pos, s), s = r[0];
    }
    return s[0] = "C", this.pos = [s[5], s[6]], this.reflection = [2 * s[5] - s[3], 2 * s[6] - s[4]], r;
  }
  function a() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 ? arguments[1] : void 0;
    if (r === !1) return !1;
    for (var o = r, l = s.length; o < l; ++o) if (s[o][0] == "M") return o;
    return !1;
  }
  re(qe, { morph: function(s, r, o, l, h) {
    for (var c = this.parse(s), d = this.parse(r), u = 0, g = 0, p = !1, f = !1; u !== !1 || g !== !1; ) {
      var x;
      p = a(c, u !== !1 && u + 1), f = a(d, g !== !1 && g + 1), u === !1 && (u = (x = new qe(b.start).bbox()).height == 0 || x.width == 0 ? c.push(c[0]) - 1 : c.push(["M", x.x + x.width / 2, x.y + x.height / 2]) - 1), g === !1 && (g = (x = new qe(b.dest).bbox()).height == 0 || x.width == 0 ? d.push(d[0]) - 1 : d.push(["M", x.x + x.width / 2, x.y + x.height / 2]) - 1);
      var b = n(c, u, p, d, g, f);
      c = c.slice(0, u).concat(b.start, p === !1 ? [] : c.slice(p)), d = d.slice(0, g).concat(b.dest, f === !1 ? [] : d.slice(f)), u = p !== !1 && u + b.start.length, g = f !== !1 && g + b.dest.length;
    }
    this._array = c, this.destination = new qe(), this.destination._array = d;
    var m = this.fromArray(c.map((function(y, w) {
      var v = d[w].map((function(C, k) {
        return k === 0 ? C : l.step(y[k], d[w][k], o, h[w], h);
      }));
      return v;
    })));
    return m;
  } });
})();
const cs = (n) => (n.changedTouches && (n = n.changedTouches[0]), { x: n.clientX, y: n.clientY });
class vl {
  constructor(e) {
    e.remember("_draggable", this), this.el = e, this.drag = this.drag.bind(this), this.startDrag = this.startDrag.bind(this), this.endDrag = this.endDrag.bind(this);
  }
  init(e) {
    e ? (this.el.on("mousedown.drag", this.startDrag), this.el.on("touchstart.drag", this.startDrag, { passive: !1 })) : (this.el.off("mousedown.drag"), this.el.off("touchstart.drag"));
  }
  startDrag(e) {
    const t = !e.type.indexOf("mouse");
    if (t && e.which !== 1 && e.buttons !== 0 || this.el.dispatch("beforedrag", { event: e, handler: this }).defaultPrevented) return;
    e.preventDefault(), e.stopPropagation(), this.init(!1), this.box = this.el.bbox(), this.lastClick = this.el.point(cs(e));
    const i = (t ? "mouseup" : "touchend") + ".drag";
    Ke(window, (t ? "mousemove" : "touchmove") + ".drag", this.drag, this, { passive: !1 }), Ke(window, i, this.endDrag, this, { passive: !1 }), this.el.fire("dragstart", { event: e, handler: this, box: this.box });
  }
  drag(e) {
    const { box: t, lastClick: i } = this, a = this.el.point(cs(e)), s = a.x - i.x, r = a.y - i.y;
    if (!s && !r) return t;
    const o = t.x + s, l = t.y + r;
    this.box = new Me(o, l, t.w, t.h), this.lastClick = a, this.el.dispatch("dragmove", { event: e, handler: this, box: this.box }).defaultPrevented || this.move(o, l);
  }
  move(e, t) {
    this.el.type === "svg" ? tt.prototype.move.call(this.el, e, t) : this.el.move(e, t);
  }
  endDrag(e) {
    this.drag(e), this.el.fire("dragend", { event: e, handler: this, box: this.box }), Ge(window, "mousemove.drag"), Ge(window, "touchmove.drag"), Ge(window, "mouseup.drag"), Ge(window, "touchend.drag"), this.init(!0);
  }
}
/*!
* @svgdotjs/svg.select.js - An extension of svg.js which allows to select elements with mouse
* @version 4.0.1
* https://github.com/svgdotjs/svg.select.js
*
* @copyright Ulrich-Matthias Schäfer
* @license MIT
*
* BUILT: Mon Jul 01 2024 15:04:42 GMT+0200 (Central European Summer Time)
*/
function oa(n, e, t, i = null) {
  return function(a) {
    a.preventDefault(), a.stopPropagation();
    var s = a.pageX || a.touches[0].pageX, r = a.pageY || a.touches[0].pageY;
    e.fire(n, { x: s, y: r, event: a, index: i, points: t });
  };
}
function la([n, e], { a: t, b: i, c: a, d: s, e: r, f: o }) {
  return [n * t + e * a + r, n * i + e * s + o];
}
re(Oe, { draggable(n = !0) {
  return (this.remember("_draggable") || new vl(this)).init(n), this;
} });
let wr = class {
  constructor(n) {
    this.el = n, n.remember("_selectHandler", this), this.selection = new tt(), this.order = ["lt", "t", "rt", "r", "rb", "b", "lb", "l", "rot"], this.mutationHandler = this.mutationHandler.bind(this);
    const e = Vt();
    this.observer = new e.MutationObserver(this.mutationHandler);
  }
  init(n) {
    this.createHandle = n.createHandle || this.createHandleFn, this.createRot = n.createRot || this.createRotFn, this.updateHandle = n.updateHandle || this.updateHandleFn, this.updateRot = n.updateRot || this.updateRotFn, this.el.root().put(this.selection), this.updatePoints(), this.createSelection(), this.createResizeHandles(), this.updateResizeHandles(), this.createRotationHandle(), this.updateRotationHandle(), this.observer.observe(this.el.node, { attributes: !0 });
  }
  active(n, e) {
    if (!n) return this.selection.clear().remove(), void this.observer.disconnect();
    this.init(e);
  }
  createSelection() {
    this.selection.polygon(this.handlePoints).addClass("svg_select_shape");
  }
  updateSelection() {
    this.selection.get(0).plot(this.handlePoints);
  }
  createResizeHandles() {
    this.handlePoints.forEach(((n, e, t) => {
      const i = this.order[e];
      this.createHandle.call(this, this.selection, n, e, t, i), this.selection.get(e + 1).addClass("svg_select_handle svg_select_handle_" + i).on("mousedown.selection touchstart.selection", oa(i, this.el, this.handlePoints, e));
    }));
  }
  createHandleFn(n) {
    n.polyline();
  }
  updateHandleFn(n, e, t, i) {
    const a = i.at(t - 1), s = i[(t + 1) % i.length], r = e, o = [r[0] - a[0], r[1] - a[1]], l = [r[0] - s[0], r[1] - s[1]], h = Math.sqrt(o[0] * o[0] + o[1] * o[1]), c = Math.sqrt(l[0] * l[0] + l[1] * l[1]), d = [o[0] / h, o[1] / h], u = [l[0] / c, l[1] / c], g = [r[0] - 10 * d[0], r[1] - 10 * d[1]], p = [r[0] - 10 * u[0], r[1] - 10 * u[1]];
    n.plot([g, r, p]);
  }
  updateResizeHandles() {
    this.handlePoints.forEach(((n, e, t) => {
      const i = this.order[e];
      this.updateHandle.call(this, this.selection.get(e + 1), n, e, t, i);
    }));
  }
  createRotFn(n) {
    n.line(), n.circle(5);
  }
  getPoint(n) {
    return this.handlePoints[this.order.indexOf(n)];
  }
  getPointHandle(n) {
    return this.selection.get(this.order.indexOf(n) + 1);
  }
  updateRotFn(n, e) {
    const t = this.getPoint("t");
    n.get(0).plot(t[0], t[1], e[0], e[1]), n.get(1).center(e[0], e[1]);
  }
  createRotationHandle() {
    const n = this.selection.group().addClass("svg_select_handle_rot").on("mousedown.selection touchstart.selection", oa("rot", this.el, this.handlePoints));
    this.createRot.call(this, n);
  }
  updateRotationHandle() {
    const n = this.selection.findOne("g.svg_select_handle_rot");
    this.updateRot(n, this.rotationPoint, this.handlePoints);
  }
  updatePoints() {
    const n = this.el.bbox(), e = this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());
    this.handlePoints = this.getHandlePoints(n).map(((t) => la(t, e))), this.rotationPoint = la(this.getRotationPoint(n), e);
  }
  getHandlePoints({ x: n, x2: e, y: t, y2: i, cx: a, cy: s } = this.el.bbox()) {
    return [[n, t], [a, t], [e, t], [e, s], [e, i], [a, i], [n, i], [n, s]];
  }
  getRotationPoint({ y: n, cx: e } = this.el.bbox()) {
    return [e, n - 20];
  }
  mutationHandler() {
    this.updatePoints(), this.updateSelection(), this.updateResizeHandles(), this.updateRotationHandle();
  }
};
const ds = (n) => function(e = !0, t = {}) {
  typeof e == "object" && (t = e, e = !0);
  let i = this.remember("_" + n.name);
  return i || (e.prototype instanceof wr ? (i = new e(this), e = !0) : i = new n(this), this.remember("_" + n.name, i)), i.active(e, t), this;
};
/*!
* @svgdotjs/svg.resize.js - An extension for svg.js which allows to resize elements which are selected
* @version 2.0.4
* https://github.com/svgdotjs/svg.resize.js
*
* @copyright [object Object]
* @license MIT
*
* BUILT: Fri Sep 13 2024 12:43:14 GMT+0200 (Central European Summer Time)
*/
/*!
* @svgdotjs/svg.select.js - An extension of svg.js which allows to select elements with mouse
* @version 4.0.1
* https://github.com/svgdotjs/svg.select.js
*
* @copyright Ulrich-Matthias Schäfer
* @license MIT
*
* BUILT: Mon Jul 01 2024 15:04:42 GMT+0200 (Central European Summer Time)
*/
function ha(n, e, t, i = null) {
  return function(a) {
    a.preventDefault(), a.stopPropagation();
    var s = a.pageX || a.touches[0].pageX, r = a.pageY || a.touches[0].pageY;
    e.fire(n, { x: s, y: r, event: a, index: i, points: t });
  };
}
function ca([n, e], { a: t, b: i, c: a, d: s, e: r, f: o }) {
  return [n * t + e * a + r, n * i + e * s + o];
}
re(Oe, { select: ds(wr) }), re([ct, dt, ht], { pointSelect: ds(class {
  constructor(n) {
    this.el = n, n.remember("_pointSelectHandler", this), this.selection = new tt(), this.order = ["lt", "t", "rt", "r", "rb", "b", "lb", "l", "rot"], this.mutationHandler = this.mutationHandler.bind(this);
    const e = Vt();
    this.observer = new e.MutationObserver(this.mutationHandler);
  }
  init(n) {
    this.createHandle = n.createHandle || this.createHandleFn, this.updateHandle = n.updateHandle || this.updateHandleFn, this.el.root().put(this.selection), this.updatePoints(), this.createSelection(), this.createPointHandles(), this.updatePointHandles(), this.observer.observe(this.el.node, { attributes: !0 });
  }
  active(n, e) {
    if (!n) return this.selection.clear().remove(), void this.observer.disconnect();
    this.init(e);
  }
  createSelection() {
    this.selection.polygon(this.points).addClass("svg_select_shape_pointSelect");
  }
  updateSelection() {
    this.selection.get(0).plot(this.points);
  }
  createPointHandles() {
    this.points.forEach(((n, e, t) => {
      this.createHandle.call(this, this.selection, n, e, t), this.selection.get(e + 1).addClass("svg_select_handle_point").on("mousedown.selection touchstart.selection", oa("point", this.el, this.points, e));
    }));
  }
  createHandleFn(n) {
    n.circle(5);
  }
  updateHandleFn(n, e) {
    n.center(e[0], e[1]);
  }
  updatePointHandles() {
    this.points.forEach(((n, e, t) => {
      this.updateHandle.call(this, this.selection.get(e + 1), n, e, t);
    }));
  }
  updatePoints() {
    const n = this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());
    this.points = this.el.array().map(((e) => la(e, n)));
  }
  mutationHandler() {
    this.updatePoints(), this.updateSelection(), this.updatePointHandles();
  }
}) });
class kr {
  constructor(e) {
    this.el = e, e.remember("_selectHandler", this), this.selection = new tt(), this.order = ["lt", "t", "rt", "r", "rb", "b", "lb", "l", "rot"], this.mutationHandler = this.mutationHandler.bind(this);
    const t = Vt();
    this.observer = new t.MutationObserver(this.mutationHandler);
  }
  init(e) {
    this.createHandle = e.createHandle || this.createHandleFn, this.createRot = e.createRot || this.createRotFn, this.updateHandle = e.updateHandle || this.updateHandleFn, this.updateRot = e.updateRot || this.updateRotFn, this.el.root().put(this.selection), this.updatePoints(), this.createSelection(), this.createResizeHandles(), this.updateResizeHandles(), this.createRotationHandle(), this.updateRotationHandle(), this.observer.observe(this.el.node, { attributes: !0 });
  }
  active(e, t) {
    if (!e) return this.selection.clear().remove(), void this.observer.disconnect();
    this.init(t);
  }
  createSelection() {
    this.selection.polygon(this.handlePoints).addClass("svg_select_shape");
  }
  updateSelection() {
    this.selection.get(0).plot(this.handlePoints);
  }
  createResizeHandles() {
    this.handlePoints.forEach(((e, t, i) => {
      const a = this.order[t];
      this.createHandle.call(this, this.selection, e, t, i, a), this.selection.get(t + 1).addClass("svg_select_handle svg_select_handle_" + a).on("mousedown.selection touchstart.selection", ha(a, this.el, this.handlePoints, t));
    }));
  }
  createHandleFn(e) {
    e.polyline();
  }
  updateHandleFn(e, t, i, a) {
    const s = a.at(i - 1), r = a[(i + 1) % a.length], o = t, l = [o[0] - s[0], o[1] - s[1]], h = [o[0] - r[0], o[1] - r[1]], c = Math.sqrt(l[0] * l[0] + l[1] * l[1]), d = Math.sqrt(h[0] * h[0] + h[1] * h[1]), u = [l[0] / c, l[1] / c], g = [h[0] / d, h[1] / d], p = [o[0] - 10 * u[0], o[1] - 10 * u[1]], f = [o[0] - 10 * g[0], o[1] - 10 * g[1]];
    e.plot([p, o, f]);
  }
  updateResizeHandles() {
    this.handlePoints.forEach(((e, t, i) => {
      const a = this.order[t];
      this.updateHandle.call(this, this.selection.get(t + 1), e, t, i, a);
    }));
  }
  createRotFn(e) {
    e.line(), e.circle(5);
  }
  getPoint(e) {
    return this.handlePoints[this.order.indexOf(e)];
  }
  getPointHandle(e) {
    return this.selection.get(this.order.indexOf(e) + 1);
  }
  updateRotFn(e, t) {
    const i = this.getPoint("t");
    e.get(0).plot(i[0], i[1], t[0], t[1]), e.get(1).center(t[0], t[1]);
  }
  createRotationHandle() {
    const e = this.selection.group().addClass("svg_select_handle_rot").on("mousedown.selection touchstart.selection", ha("rot", this.el, this.handlePoints));
    this.createRot.call(this, e);
  }
  updateRotationHandle() {
    const e = this.selection.findOne("g.svg_select_handle_rot");
    this.updateRot(e, this.rotationPoint, this.handlePoints);
  }
  updatePoints() {
    const e = this.el.bbox(), t = this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());
    this.handlePoints = this.getHandlePoints(e).map(((i) => ca(i, t))), this.rotationPoint = ca(this.getRotationPoint(e), t);
  }
  getHandlePoints({ x: e, x2: t, y: i, y2: a, cx: s, cy: r } = this.el.bbox()) {
    return [[e, i], [s, i], [t, i], [t, r], [t, a], [s, a], [e, a], [e, r]];
  }
  getRotationPoint({ y: e, cx: t } = this.el.bbox()) {
    return [t, e - 20];
  }
  mutationHandler() {
    this.updatePoints(), this.updateSelection(), this.updateResizeHandles(), this.updateRotationHandle();
  }
}
const us = (n) => function(e = !0, t = {}) {
  typeof e == "object" && (t = e, e = !0);
  let i = this.remember("_" + n.name);
  return i || (e.prototype instanceof kr ? (i = new e(this), e = !0) : i = new n(this), this.remember("_" + n.name, i)), i.active(e, t), this;
};
re(Oe, { select: us(kr) }), re([ct, dt, ht], { pointSelect: us(class {
  constructor(n) {
    this.el = n, n.remember("_pointSelectHandler", this), this.selection = new tt(), this.order = ["lt", "t", "rt", "r", "rb", "b", "lb", "l", "rot"], this.mutationHandler = this.mutationHandler.bind(this);
    const e = Vt();
    this.observer = new e.MutationObserver(this.mutationHandler);
  }
  init(n) {
    this.createHandle = n.createHandle || this.createHandleFn, this.updateHandle = n.updateHandle || this.updateHandleFn, this.el.root().put(this.selection), this.updatePoints(), this.createSelection(), this.createPointHandles(), this.updatePointHandles(), this.observer.observe(this.el.node, { attributes: !0 });
  }
  active(n, e) {
    if (!n) return this.selection.clear().remove(), void this.observer.disconnect();
    this.init(e);
  }
  createSelection() {
    this.selection.polygon(this.points).addClass("svg_select_shape_pointSelect");
  }
  updateSelection() {
    this.selection.get(0).plot(this.points);
  }
  createPointHandles() {
    this.points.forEach(((n, e, t) => {
      this.createHandle.call(this, this.selection, n, e, t), this.selection.get(e + 1).addClass("svg_select_handle_point").on("mousedown.selection touchstart.selection", ha("point", this.el, this.points, e));
    }));
  }
  createHandleFn(n) {
    n.circle(5);
  }
  updateHandleFn(n, e) {
    n.center(e[0], e[1]);
  }
  updatePointHandles() {
    this.points.forEach(((n, e, t) => {
      this.updateHandle.call(this, this.selection.get(e + 1), n, e, t);
    }));
  }
  updatePoints() {
    const n = this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());
    this.points = this.el.array().map(((e) => ca(e, n)));
  }
  mutationHandler() {
    this.updatePoints(), this.updateSelection(), this.updatePointHandles();
  }
}) });
const Qt = (n) => (n.changedTouches && (n = n.changedTouches[0]), { x: n.clientX, y: n.clientY }), gs = (n) => {
  let e = 1 / 0, t = 1 / 0, i = -1 / 0, a = -1 / 0;
  for (let s = 0; s < n.length; s++) {
    const r = n[s];
    e = Math.min(e, r[0]), t = Math.min(t, r[1]), i = Math.max(i, r[0]), a = Math.max(a, r[1]);
  }
  return new Me(e, t, i - e, a - t);
};
class fs {
  constructor(e) {
    this.el = e, e.remember("_ResizeHandler", this), this.lastCoordinates = null, this.eventType = "", this.lastEvent = null, this.handleResize = this.handleResize.bind(this), this.resize = this.resize.bind(this), this.endResize = this.endResize.bind(this), this.rotate = this.rotate.bind(this), this.movePoint = this.movePoint.bind(this);
  }
  active(e, t) {
    this.preserveAspectRatio = t.preserveAspectRatio ?? !1, this.aroundCenter = t.aroundCenter ?? !1, this.grid = t.grid ?? 0, this.degree = t.degree ?? 0, this.el.off(".resize"), e && (this.el.on(["lt.resize", "rt.resize", "rb.resize", "lb.resize", "t.resize", "r.resize", "b.resize", "l.resize", "rot.resize", "point.resize"], this.handleResize), this.lastEvent && (this.eventType === "rot" ? this.rotate(this.lastEvent) : this.eventType === "point" ? this.movePoint(this.lastEvent) : this.resize(this.lastEvent)));
  }
  handleResize(e) {
    this.eventType = e.type;
    const { event: t, index: i, points: a } = e.detail, s = !t.type.indexOf("mouse");
    if (s && (t.which || t.buttons) !== 1 || this.el.dispatch("beforeresize", { event: e, handler: this }).defaultPrevented) return;
    this.box = this.el.bbox(), this.startPoint = this.el.point(Qt(t)), this.index = i, this.points = a.slice();
    const r = (s ? "mousemove" : "touchmove") + ".resize", o = (s ? "mouseup" : "touchcancel.resize touchend") + ".resize";
    e.type === "point" ? Ke(window, r, this.movePoint) : e.type === "rot" ? Ke(window, r, this.rotate) : Ke(window, r, this.resize), Ke(window, o, this.endResize);
  }
  resize(e) {
    this.lastEvent = e;
    const t = this.snapToGrid(this.el.point(Qt(e)));
    let i = t.x - this.startPoint.x, a = t.y - this.startPoint.y;
    this.preserveAspectRatio && this.aroundCenter && (i *= 2, a *= 2);
    const s = this.box.x + i, r = this.box.y + a, o = this.box.x2 + i, l = this.box.y2 + a;
    let h = new Me(this.box);
    if (this.eventType.includes("l") && (h.x = Math.min(s, this.box.x2), h.x2 = Math.max(s, this.box.x2)), this.eventType.includes("r") && (h.x = Math.min(o, this.box.x), h.x2 = Math.max(o, this.box.x)), this.eventType.includes("t") && (h.y = Math.min(r, this.box.y2), h.y2 = Math.max(r, this.box.y2)), this.eventType.includes("b") && (h.y = Math.min(l, this.box.y), h.y2 = Math.max(l, this.box.y)), h.width = h.x2 - h.x, h.height = h.y2 - h.y, this.preserveAspectRatio) {
      const c = h.width / this.box.width, d = h.height / this.box.height, u = ["lt", "t", "rt", "r", "rb", "b", "lb", "l"], g = (u.indexOf(this.eventType) + 4) % u.length, p = this.aroundCenter ? [this.box.cx, this.box.cy] : this.points[g];
      let f = this.eventType.includes("t") || this.eventType.includes("b") ? d : c;
      f = this.eventType.length === 2 ? Math.max(c, d) : f, h = (function(x, b, m) {
        const y = [[x.x, x.y], [x.x + x.width, x.y], [x.x + x.width, x.y + x.height], [x.x, x.y + x.height]].map((([w, v]) => {
          const C = w - b[0], k = (v - b[1]) * m;
          return [C * m + b[0], k + b[1]];
        }));
        return gs(y);
      })(this.box, p, f);
    }
    this.el.dispatch("resize", { box: new Me(h), angle: 0, eventType: this.eventType, event: e, handler: this }).defaultPrevented || this.el.size(h.width, h.height).move(h.x, h.y);
  }
  movePoint(e) {
    this.lastEvent = e;
    const { x: t, y: i } = this.snapToGrid(this.el.point(Qt(e))), a = this.el.array().slice();
    a[this.index] = [t, i], this.el.dispatch("resize", { box: gs(a), angle: 0, eventType: this.eventType, event: e, handler: this }).defaultPrevented || this.el.plot(a);
  }
  rotate(e) {
    this.lastEvent = e;
    const t = this.startPoint, i = this.el.point(Qt(e)), { cx: a, cy: s } = this.box, r = t.x - a, o = t.y - s, l = i.x - a, h = i.y - s, c = Math.sqrt(r * r + o * o) * Math.sqrt(l * l + h * h);
    if (c === 0) return;
    let d = Math.acos((r * l + o * h) / c) / Math.PI * 180;
    if (!d) return;
    i.x < t.x && (d = -d);
    const u = new ie(this.el), { x: g, y: p } = new fe(a, s).transformO(u), { rotate: f } = u.decompose(), x = this.snapToAngle(f + d) - f;
    this.el.dispatch("resize", { box: this.box, angle: x, eventType: this.eventType, event: e, handler: this }).defaultPrevented || this.el.transform(u.rotateO(x, g, p));
  }
  endResize(e) {
    this.eventType !== "rot" && this.eventType !== "point" && this.resize(e), this.lastEvent = null, this.eventType = "", Ge(window, "mousemove.resize touchmove.resize"), Ge(window, "mouseup.resize touchend.resize");
  }
  snapToGrid(e) {
    return this.grid && (e.x = Math.round(e.x / this.grid) * this.grid, e.y = Math.round(e.y / this.grid) * this.grid), e;
  }
  snapToAngle(e) {
    return this.degree && (e = Math.round(e / this.degree) * this.degree), e;
  }
}
re(Oe, { resize: function(n = !0, e = {}) {
  typeof n == "object" && (e = n, n = !0);
  let t = this.remember("_ResizeHandler");
  return t || (n.prototype instanceof fs ? (t = new n(this), n = !0) : t = new fs(this), this.remember("_resizeHandler", t)), t.active(n, e), this;
} }), window.SVG === void 0 && (window.SVG = zo), window.Apex === void 0 && (window.Apex = {});
var ps = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
  }
  return $(n, [{ key: "initModules", value: function() {
    this.ctx.publicMethods = ["updateOptions", "updateSeries", "appendData", "appendSeries", "isSeriesHidden", "highlightSeries", "toggleSeries", "showSeries", "hideSeries", "setLocale", "resetSeries", "zoomX", "toggleDataPointSelection", "dataURI", "exportToCSV", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "clearAnnotations", "removeAnnotation", "paper", "destroy"], this.ctx.eventList = ["click", "mousedown", "mousemove", "mouseleave", "touchstart", "touchmove", "touchleave", "mouseup", "touchend"], this.ctx.animations = new St(this.ctx), this.ctx.axes = new Bo(this.ctx), this.ctx.core = new bl(this.ctx.el, this.ctx), this.ctx.config = new Dt({}), this.ctx.data = new Ma(this.ctx), this.ctx.grid = new dr(this.ctx), this.ctx.graphics = new X(this.ctx), this.ctx.coreUtils = new Le(this.ctx), this.ctx.crosshairs = new na(this.ctx), this.ctx.events = new Wo(this.ctx), this.ctx.exports = new Yt(this.ctx), this.ctx.fill = new Ze(this.ctx), this.ctx.localization = new jo(this.ctx), this.ctx.options = new lt(), this.ctx.responsive = new Go(this.ctx), this.ctx.series = new Ve(this.ctx), this.ctx.theme = new Vo(this.ctx), this.ctx.formatters = new $t(this.ctx), this.ctx.titleSubtitle = new Uo(this.ctx), this.ctx.legend = new gr(this.ctx), this.ctx.toolbar = new fr(this.ctx), this.ctx.tooltip = new ls(this.ctx), this.ctx.dimensions = new di(this.ctx), this.ctx.updateHelpers = new ml(this.ctx), this.ctx.zoomPanSelection = new Qo(this.ctx), this.ctx.w.globals.tooltip = new ls(this.ctx);
  } }]), n;
})(), xs = (function() {
  function n(e) {
    q(this, n), this.ctx = e, this.w = e.w;
  }
  return $(n, [{ key: "clear", value: function(e) {
    var t = e.isUpdating;
    this.ctx.zoomPanSelection && this.ctx.zoomPanSelection.destroy(), this.ctx.toolbar && this.ctx.toolbar.destroy(), this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx.zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx.toolbar = null, this.ctx.localization = null, this.ctx.w.globals.tooltip = null, this.clearDomElements({ isUpdating: t });
  } }, { key: "killSVG", value: function(e) {
    e.each((function() {
      this.removeClass("*"), this.off();
    }), !0), e.clear();
  } }, { key: "clearDomElements", value: function(e) {
    var t = this, i = e.isUpdating, a = this.w.globals.dom.Paper.node;
    a.parentNode && a.parentNode.parentNode && !i && (a.parentNode.parentNode.style.minHeight = "unset");
    var s = this.w.globals.dom.baseEl;
    s && this.ctx.eventList.forEach((function(o) {
      s.removeEventListener(o, t.ctx.events.documentEvent);
    }));
    var r = this.w.globals.dom;
    if (this.ctx.el !== null) for (; this.ctx.el.firstChild; ) this.ctx.el.removeChild(this.ctx.el.firstChild);
    this.killSVG(r.Paper), r.Paper.remove(), r.elWrap = null, r.elGraphical = null, r.elLegendWrap = null, r.elLegendForeign = null, r.baseEl = null, r.elGridRect = null, r.elGridRectMask = null, r.elGridRectBarMask = null, r.elGridRectMarkerMask = null, r.elForecastMask = null, r.elNonForecastMask = null, r.elDefs = null;
  } }]), n;
})(), Xi = /* @__PURE__ */ new WeakMap(), yl = (function() {
  function n(e, t) {
    q(this, n), this.opts = t, this.ctx = this, this.w = new Do(t).init(), this.el = e, this.w.globals.cuid = L.randomId(), this.w.globals.chartID = this.w.config.chart.id ? L.escapeString(this.w.config.chart.id) : this.w.globals.cuid, new ps(this).initModules(), this.lastUpdateOptions = null, this.create = L.bind(this.create, this), this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this);
  }
  return $(n, [{ key: "render", value: function() {
    var e = this;
    return new Promise((function(t, i) {
      if (L.elementExists(e.el)) {
        Apex._chartInstances === void 0 && (Apex._chartInstances = []), e.w.config.chart.id && Apex._chartInstances.push({ id: e.w.globals.chartID, group: e.w.config.chart.group, chart: e }), e.setLocale(e.w.config.chart.defaultLocale);
        var a = e.w.config.chart.events.beforeMount;
        typeof a == "function" && a(e, e.w), e.events.fireEvent("beforeMount", [e, e.w]), window.addEventListener("resize", e.windowResizeHandler), (function(u, g) {
          var p = !1;
          if (u.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
            var f = u.getBoundingClientRect();
            u.style.display !== "none" && f.width !== 0 || (p = !0);
          }
          var x = new ResizeObserver((function(b) {
            p && g.call(u, b), p = !0;
          }));
          u.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Array.from(u.children).forEach((function(b) {
            return x.observe(b);
          })) : x.observe(u), Xi.set(g, x);
        })(e.el.parentNode, e.parentResizeHandler);
        var s = e.el.getRootNode && e.el.getRootNode(), r = L.is("ShadowRoot", s), o = e.el.ownerDocument, l = r ? s.getElementById("apexcharts-css") : o.getElementById("apexcharts-css");
        if (!l) {
          var h;
          (l = document.createElement("style")).id = "apexcharts-css", l.textContent = `@keyframes opaque {
  0% {
    opacity: 0
  }

  to {
    opacity: 1
  }
}

@keyframes resizeanim {

  0%,
  to {
    opacity: 0
  }
}

.apexcharts-canvas {
  position: relative;
  direction: ltr !important;
  user-select: none
}

.apexcharts-canvas ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 6px
}

.apexcharts-canvas ::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5)
}

.apexcharts-inner {
  position: relative
}

.apexcharts-text tspan {
  font-family: inherit
}

rect.legend-mouseover-inactive,
.legend-mouseover-inactive rect,
.legend-mouseover-inactive path,
.legend-mouseover-inactive circle,
.legend-mouseover-inactive line,
.legend-mouseover-inactive text.apexcharts-yaxis-title-text,
.legend-mouseover-inactive text.apexcharts-yaxis-label {
  transition: .15s ease all;
  opacity: .2
}

.apexcharts-legend-text {
  padding-left: 15px;
  margin-left: -15px;
}

.apexcharts-series-collapsed {
  opacity: 0
}

.apexcharts-tooltip {
  border-radius: 5px;
  box-shadow: 2px 2px 6px -4px #999;
  cursor: default;
  font-size: 14px;
  left: 62px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
  z-index: 12;
  transition: .15s ease all
}

.apexcharts-tooltip.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-tooltip.apexcharts-theme-light {
  border: 1px solid #e3e3e3;
  background: rgba(255, 255, 255, .96)
}

.apexcharts-tooltip.apexcharts-theme-dark {
  color: #fff;
  background: rgba(30, 30, 30, .8)
}

.apexcharts-tooltip * {
  font-family: inherit
}

.apexcharts-tooltip-title {
  padding: 6px;
  font-size: 15px;
  margin-bottom: 4px
}

.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {
  background: #eceff1;
  border-bottom: 1px solid #ddd
}

.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {
  background: rgba(0, 0, 0, .7);
  border-bottom: 1px solid #333
}

.apexcharts-tooltip-text-goals-value,
.apexcharts-tooltip-text-y-value,
.apexcharts-tooltip-text-z-value {
  display: inline-block;
  margin-left: 5px;
  font-weight: 600
}

.apexcharts-tooltip-text-goals-label:empty,
.apexcharts-tooltip-text-goals-value:empty,
.apexcharts-tooltip-text-y-label:empty,
.apexcharts-tooltip-text-y-value:empty,
.apexcharts-tooltip-text-z-value:empty,
.apexcharts-tooltip-title:empty {
  display: none
}

.apexcharts-tooltip-text-goals-label,
.apexcharts-tooltip-text-goals-value {
  padding: 6px 0 5px
}

.apexcharts-tooltip-goals-group,
.apexcharts-tooltip-text-goals-label,
.apexcharts-tooltip-text-goals-value {
  display: flex
}

.apexcharts-tooltip-text-goals-label:not(:empty),
.apexcharts-tooltip-text-goals-value:not(:empty) {
  margin-top: -6px
}

.apexcharts-tooltip-marker {
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
  font-size: 16px;
  line-height: 16px;
  margin-right: 4px;
  text-align: center;
  vertical-align: middle;
  color: inherit;
}

.apexcharts-tooltip-marker::before {
  content: "";
  display: inline-block;
  width: 100%;
  text-align: center;
  color: currentcolor;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  font-size: 26px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 14px;
  font-weight: 900;
}

.apexcharts-tooltip-marker[shape="circle"]::before {
  content: "\\25CF";
}

.apexcharts-tooltip-marker[shape="square"]::before,
.apexcharts-tooltip-marker[shape="rect"]::before {
  content: "\\25A0";
  transform: translate(-1px, -2px);
}

.apexcharts-tooltip-marker[shape="line"]::before {
  content: "\\2500";
}

.apexcharts-tooltip-marker[shape="diamond"]::before {
  content: "\\25C6";
  font-size: 28px;
}

.apexcharts-tooltip-marker[shape="triangle"]::before {
  content: "\\25B2";
  font-size: 22px;
}

.apexcharts-tooltip-marker[shape="cross"]::before {
  content: "\\2715";
  font-size: 18px;
}

.apexcharts-tooltip-marker[shape="plus"]::before {
  content: "\\2715";
  transform: rotate(45deg) translate(-1px, -1px);
  font-size: 18px;
}

.apexcharts-tooltip-marker[shape="star"]::before {
  content: "\\2605";
  font-size: 18px;
}

.apexcharts-tooltip-marker[shape="sparkle"]::before {
  content: "\\2726";
  font-size: 20px;
}

.apexcharts-tooltip-series-group {
  padding: 0 10px;
  display: none;
  text-align: left;
  justify-content: left;
  align-items: center
}

.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {
  opacity: 1
}

.apexcharts-tooltip-series-group.apexcharts-active,
.apexcharts-tooltip-series-group:last-child {
  padding-bottom: 4px
}

.apexcharts-tooltip-y-group {
  padding: 6px 0 5px
}

.apexcharts-custom-tooltip,
.apexcharts-tooltip-box {
  padding: 4px 8px
}

.apexcharts-tooltip-boxPlot {
  display: flex;
  flex-direction: column-reverse
}

.apexcharts-tooltip-box>div {
  margin: 4px 0
}

.apexcharts-tooltip-box span.value {
  font-weight: 700
}

.apexcharts-tooltip-rangebar {
  padding: 5px 8px
}

.apexcharts-tooltip-rangebar .category {
  font-weight: 600;
  color: #777
}

.apexcharts-tooltip-rangebar .series-name {
  font-weight: 700;
  display: block;
  margin-bottom: 5px
}

.apexcharts-xaxistooltip,
.apexcharts-yaxistooltip {
  opacity: 0;
  pointer-events: none;
  color: #373d3f;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  background: #eceff1;
  border: 1px solid #90a4ae
}

.apexcharts-xaxistooltip {
  padding: 9px 10px;
  transition: .15s ease all
}

.apexcharts-xaxistooltip.apexcharts-theme-dark {
  background: rgba(0, 0, 0, .7);
  border: 1px solid rgba(0, 0, 0, .5);
  color: #fff
}

.apexcharts-xaxistooltip:after,
.apexcharts-xaxistooltip:before {
  left: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none
}

.apexcharts-xaxistooltip:after {
  border-color: transparent;
  border-width: 6px;
  margin-left: -6px
}

.apexcharts-xaxistooltip:before {
  border-color: transparent;
  border-width: 7px;
  margin-left: -7px
}

.apexcharts-xaxistooltip-bottom:after,
.apexcharts-xaxistooltip-bottom:before {
  bottom: 100%
}

.apexcharts-xaxistooltip-top:after,
.apexcharts-xaxistooltip-top:before {
  top: 100%
}

.apexcharts-xaxistooltip-bottom:after {
  border-bottom-color: #eceff1
}

.apexcharts-xaxistooltip-bottom:before {
  border-bottom-color: #90a4ae
}

.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,
.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {
  border-bottom-color: rgba(0, 0, 0, .5)
}

.apexcharts-xaxistooltip-top:after {
  border-top-color: #eceff1
}

.apexcharts-xaxistooltip-top:before {
  border-top-color: #90a4ae
}

.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,
.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {
  border-top-color: rgba(0, 0, 0, .5)
}

.apexcharts-xaxistooltip.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-yaxistooltip {
  padding: 4px 10px
}

.apexcharts-yaxistooltip.apexcharts-theme-dark {
  background: rgba(0, 0, 0, .7);
  border: 1px solid rgba(0, 0, 0, .5);
  color: #fff
}

.apexcharts-yaxistooltip:after,
.apexcharts-yaxistooltip:before {
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none
}

.apexcharts-yaxistooltip:after {
  border-color: transparent;
  border-width: 6px;
  margin-top: -6px
}

.apexcharts-yaxistooltip:before {
  border-color: transparent;
  border-width: 7px;
  margin-top: -7px
}

.apexcharts-yaxistooltip-left:after,
.apexcharts-yaxistooltip-left:before {
  left: 100%
}

.apexcharts-yaxistooltip-right:after,
.apexcharts-yaxistooltip-right:before {
  right: 100%
}

.apexcharts-yaxistooltip-left:after {
  border-left-color: #eceff1
}

.apexcharts-yaxistooltip-left:before {
  border-left-color: #90a4ae
}

.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,
.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {
  border-left-color: rgba(0, 0, 0, .5)
}

.apexcharts-yaxistooltip-right:after {
  border-right-color: #eceff1
}

.apexcharts-yaxistooltip-right:before {
  border-right-color: #90a4ae
}

.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,
.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {
  border-right-color: rgba(0, 0, 0, .5)
}

.apexcharts-yaxistooltip.apexcharts-active {
  opacity: 1
}

.apexcharts-yaxistooltip-hidden {
  display: none
}

.apexcharts-xcrosshairs,
.apexcharts-ycrosshairs {
  pointer-events: none;
  opacity: 0;
  transition: .15s ease all
}

.apexcharts-xcrosshairs.apexcharts-active,
.apexcharts-ycrosshairs.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-ycrosshairs-hidden {
  opacity: 0
}

.apexcharts-selection-rect {
  cursor: move
}

.svg_select_shape {
  stroke-width: 1;
  stroke-dasharray: 10 10;
  stroke: black;
  stroke-opacity: 0.1;
  pointer-events: none;
  fill: none;
}

.svg_select_handle {
  stroke-width: 3;
  stroke: black;
  fill: none;
}

.svg_select_handle_r {
  cursor: e-resize;
}

.svg_select_handle_l {
  cursor: w-resize;
}

.apexcharts-svg.apexcharts-zoomable.hovering-zoom {
  cursor: crosshair
}

.apexcharts-svg.apexcharts-zoomable.hovering-pan {
  cursor: move
}

.apexcharts-menu-icon,
.apexcharts-pan-icon,
.apexcharts-reset-icon,
.apexcharts-selection-icon,
.apexcharts-toolbar-custom-icon,
.apexcharts-zoom-icon,
.apexcharts-zoomin-icon,
.apexcharts-zoomout-icon {
  cursor: pointer;
  width: 20px;
  height: 20px;
  line-height: 24px;
  color: #6e8192;
  text-align: center
}

.apexcharts-menu-icon svg,
.apexcharts-reset-icon svg,
.apexcharts-zoom-icon svg,
.apexcharts-zoomin-icon svg,
.apexcharts-zoomout-icon svg {
  fill: #6e8192
}

.apexcharts-selection-icon svg {
  fill: #444;
  transform: scale(.76)
}

.apexcharts-theme-dark .apexcharts-menu-icon svg,
.apexcharts-theme-dark .apexcharts-pan-icon svg,
.apexcharts-theme-dark .apexcharts-reset-icon svg,
.apexcharts-theme-dark .apexcharts-selection-icon svg,
.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,
.apexcharts-theme-dark .apexcharts-zoom-icon svg,
.apexcharts-theme-dark .apexcharts-zoomin-icon svg,
.apexcharts-theme-dark .apexcharts-zoomout-icon svg {
  fill: #f3f4f5
}

.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,
.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,
.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {
  fill: #008ffb
}

.apexcharts-theme-light .apexcharts-menu-icon:hover svg,
.apexcharts-theme-light .apexcharts-reset-icon:hover svg,
.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,
.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,
.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,
.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {
  fill: #333
}

.apexcharts-menu-icon,
.apexcharts-selection-icon {
  position: relative
}

.apexcharts-reset-icon {
  margin-left: 5px
}

.apexcharts-menu-icon,
.apexcharts-reset-icon,
.apexcharts-zoom-icon {
  transform: scale(.85)
}

.apexcharts-zoomin-icon,
.apexcharts-zoomout-icon {
  transform: scale(.7)
}

.apexcharts-zoomout-icon {
  margin-right: 3px
}

.apexcharts-pan-icon {
  transform: scale(.62);
  position: relative;
  left: 1px;
  top: 0
}

.apexcharts-pan-icon svg {
  fill: #fff;
  stroke: #6e8192;
  stroke-width: 2
}

.apexcharts-pan-icon.apexcharts-selected svg {
  stroke: #008ffb
}

.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {
  stroke: #333
}

.apexcharts-toolbar {
  position: absolute;
  z-index: 11;
  max-width: 176px;
  text-align: right;
  border-radius: 3px;
  padding: 0 6px 2px;
  display: flex;
  justify-content: space-between;
  align-items: center
}

.apexcharts-menu {
  background: #fff;
  position: absolute;
  top: 100%;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 3px;
  right: 10px;
  opacity: 0;
  min-width: 110px;
  transition: .15s ease all;
  pointer-events: none
}

.apexcharts-menu.apexcharts-menu-open {
  opacity: 1;
  pointer-events: all;
  transition: .15s ease all
}

.apexcharts-menu-item {
  padding: 6px 7px;
  font-size: 12px;
  cursor: pointer
}

.apexcharts-theme-light .apexcharts-menu-item:hover {
  background: #eee
}

.apexcharts-theme-dark .apexcharts-menu {
  background: rgba(0, 0, 0, .7);
  color: #fff
}

@media screen and (min-width:768px) {
  .apexcharts-canvas:hover .apexcharts-toolbar {
    opacity: 1
  }
}

.apexcharts-canvas .apexcharts-element-hidden,
.apexcharts-datalabel.apexcharts-element-hidden,
.apexcharts-hide .apexcharts-series-points {
  opacity: 0;
}

.apexcharts-hidden-element-shown {
  opacity: 1;
  transition: 0.25s ease all;
}

.apexcharts-datalabel,
.apexcharts-datalabel-label,
.apexcharts-datalabel-value,
.apexcharts-datalabels,
.apexcharts-pie-label {
  cursor: default;
  pointer-events: none
}

.apexcharts-pie-label-delay {
  opacity: 0;
  animation-name: opaque;
  animation-duration: .3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease
}

.apexcharts-radialbar-label {
  cursor: pointer;
}

.apexcharts-annotation-rect,
.apexcharts-area-series .apexcharts-area,
.apexcharts-gridline,
.apexcharts-line,
.apexcharts-point-annotation-label,
.apexcharts-radar-series path:not(.apexcharts-marker),
.apexcharts-radar-series polygon,
.apexcharts-toolbar svg,
.apexcharts-tooltip .apexcharts-marker,
.apexcharts-xaxis-annotation-label,
.apexcharts-yaxis-annotation-label,
.apexcharts-zoom-rect,
.no-pointer-events {
  pointer-events: none
}

.apexcharts-tooltip-active .apexcharts-marker {
  transition: .15s ease all
}

.apexcharts-radar-series .apexcharts-yaxis {
  pointer-events: none;
}

.resize-triggers {
  animation: 1ms resizeanim;
  visibility: hidden;
  opacity: 0;
  height: 100%;
  width: 100%;
  overflow: hidden
}

.contract-trigger:before,
.resize-triggers,
.resize-triggers>div {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0
}

.resize-triggers>div {
  height: 100%;
  width: 100%;
  background: #eee;
  overflow: auto
}

.contract-trigger:before {
  overflow: hidden;
  width: 200%;
  height: 200%
}

.apexcharts-bar-goals-markers {
  pointer-events: none
}

.apexcharts-bar-shadows {
  pointer-events: none
}

.apexcharts-rangebar-goals-markers {
  pointer-events: none
}

.apexcharts-disable-transitions * {
  transition: none !important;
}`;
          var c = ((h = e.opts.chart) === null || h === void 0 ? void 0 : h.nonce) || e.w.config.chart.nonce;
          c && l.setAttribute("nonce", c), r ? s.prepend(l) : o.head.appendChild(l);
        }
        var d = e.create(e.w.config.series, {});
        if (!d) return t(e);
        e.mount(d).then((function() {
          typeof e.w.config.chart.events.mounted == "function" && e.w.config.chart.events.mounted(e, e.w), e.events.fireEvent("mounted", [e, e.w]), t(d);
        })).catch((function(u) {
          i(u);
        }));
      } else i(new Error("Element not found"));
    }));
  } }, { key: "create", value: function(e, t) {
    var i = this, a = this.w;
    new ps(this).initModules();
    var s = this.w.globals;
    if (s.noData = !1, s.animationEnded = !1, !L.elementExists(this.el) || (this.responsive.checkResponsiveConfig(t), a.config.xaxis.convertedCatToNumeric && new Ft(a.config).convertCatToNumericXaxis(a.config, this.ctx), this.core.setupElements(), a.config.chart.type === "treemap" && (a.config.grid.show = !1, a.config.yaxis[0].show = !1), s.svgWidth === 0)) return s.animationEnded = !0, null;
    var r = e;
    e.forEach((function(u, g) {
      u.hidden && (r = i.legend.legendHelpers.getSeriesAfterCollapsing({ realIndex: g }));
    }));
    var o = Le.checkComboSeries(r, a.config.chart.type);
    s.comboCharts = o.comboCharts, s.comboBarCount = o.comboBarCount;
    var l = r.every((function(u) {
      return u.data && u.data.length === 0;
    }));
    (r.length === 0 || l && s.collapsedSeries.length < 1) && this.series.handleNoData(), this.events.setupEventHandlers(), this.data.parseData(r), this.theme.init(), new Tt(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), s.noData && s.collapsedSeries.length !== s.series.length && !a.config.legend.showForSingleSeries || this.legend.init(), this.series.hasAllSeriesEqualX(), s.axisCharts && (this.core.coreCalculations(), a.config.xaxis.type !== "category" && this.formatters.setLabelFormatters(), this.ctx.toolbar.minX = a.globals.minX, this.ctx.toolbar.maxX = a.globals.maxX), this.formatters.heatmapLabelFormatters(), new Le(this).getLargestMarkerSize(), this.dimensions.plotCoords();
    var h = this.core.xySettings();
    this.grid.createGridMask();
    var c = this.core.plotChartType(r, h), d = new At(this);
    return d.bringForward(), a.config.dataLabels.background.enabled && d.dataLabelsBackground(), this.core.shiftGraphPosition(), a.globals.dataPoints > 50 && a.globals.dom.elWrap.classList.add("apexcharts-disable-transitions"), { elGraph: c, xyRatios: h, dimensions: { plot: { left: a.globals.translateX, top: a.globals.translateY, width: a.globals.gridWidth, height: a.globals.gridHeight } } };
  } }, { key: "mount", value: function() {
    var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, i = this, a = i.w;
    return new Promise((function(s, r) {
      if (i.el === null) return r(new Error("Not enough data to display or target element not found"));
      (t === null || a.globals.allSeriesCollapsed) && i.series.handleNoData(), i.grid = new dr(i);
      var o, l, h = i.grid.drawGrid();
      if (i.annotations = new Fo(i), i.annotations.drawImageAnnos(), i.annotations.drawTextAnnos(), a.config.grid.position === "back" && (h && a.globals.dom.elGraphical.add(h.el), h != null && (o = h.elGridBorders) !== null && o !== void 0 && o.node && a.globals.dom.elGraphical.add(h.elGridBorders)), Array.isArray(t.elGraph)) for (var c = 0; c < t.elGraph.length; c++) a.globals.dom.elGraphical.add(t.elGraph[c]);
      else a.globals.dom.elGraphical.add(t.elGraph);
      a.config.grid.position === "front" && (h && a.globals.dom.elGraphical.add(h.el), h != null && (l = h.elGridBorders) !== null && l !== void 0 && l.node && a.globals.dom.elGraphical.add(h.elGridBorders)), a.config.xaxis.crosshairs.position === "front" && i.crosshairs.drawXCrosshairs(), a.config.yaxis[0].crosshairs.position === "front" && i.crosshairs.drawYCrosshairs(), a.config.chart.type !== "treemap" && i.axes.drawAxis(a.config.chart.type, h);
      var d = new Wt(e.ctx, h), u = new La(e.ctx, h);
      if (h !== null && (d.xAxisLabelCorrections(h.xAxisTickWidth), u.setYAxisTextAlignments(), a.config.yaxis.map((function(p, f) {
        a.globals.ignoreYAxisIndexes.indexOf(f) === -1 && u.yAxisTitleRotate(f, p.opposite);
      }))), i.annotations.drawAxesAnnotations(), !a.globals.noData) {
        if (a.config.tooltip.enabled && !a.globals.noData && i.w.globals.tooltip.drawTooltip(t.xyRatios), a.globals.axisCharts && (a.globals.isXNumeric || a.config.xaxis.convertedCatToNumeric || a.globals.isRangeBar)) (a.config.chart.zoom.enabled || a.config.chart.selection && a.config.chart.selection.enabled || a.config.chart.pan && a.config.chart.pan.enabled) && i.zoomPanSelection.init({ xyRatios: t.xyRatios });
        else {
          var g = a.config.chart.toolbar.tools;
          ["zoom", "zoomin", "zoomout", "selection", "pan", "reset"].forEach((function(p) {
            g[p] = !1;
          }));
        }
        a.config.chart.toolbar.show && !a.globals.allSeriesCollapsed && i.toolbar.createToolbar();
      }
      a.globals.memory.methodsToExec.length > 0 && a.globals.memory.methodsToExec.forEach((function(p) {
        p.method(p.params, !1, p.context);
      })), a.globals.axisCharts || a.globals.noData || i.core.resizeNonAxisCharts(), s(i);
    }));
  } }, { key: "destroy", value: function() {
    window.removeEventListener("resize", this.windowResizeHandler), (function(t, i) {
      var a = Xi.get(i);
      a && (a.disconnect(), Xi.delete(i));
    })(this.el.parentNode, this.parentResizeHandler);
    var e = this.w.config.chart.id;
    e && Apex._chartInstances.forEach((function(t, i) {
      t.id === L.escapeString(e) && Apex._chartInstances.splice(i, 1);
    })), new xs(this.ctx).clear({ isUpdating: !1 });
  } }, { key: "updateOptions", value: function(e) {
    var t = this, i = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], a = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], s = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], r = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], o = this.w;
    return o.globals.selection = void 0, this.lastUpdateOptions && JSON.stringify(this.lastUpdateOptions) === JSON.stringify(e) ? this : (this.lastUpdateOptions = L.clone(e), e.series && (this.series.resetSeries(!1, !0, !1), e.series.length && e.series[0].data && (e.series = e.series.map((function(l, h) {
      return t.updateHelpers._extendSeries(l, h);
    }))), this.updateHelpers.revertDefaultAxisMinMax()), e.xaxis && (e = this.updateHelpers.forceXAxisUpdate(e)), e.yaxis && (e = this.updateHelpers.forceYAxisUpdate(e)), o.globals.collapsedSeriesIndices.length > 0 && this.series.clearPreviousPaths(), e.theme && (e = this.theme.updateThemeOptions(e)), this.updateHelpers._updateOptions(e, i, a, s, r));
  } }, { key: "updateSeries", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
    return this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(e, t, i);
  } }, { key: "appendSeries", value: function(e) {
    var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], a = this.w.config.series.slice();
    return a.push(e), this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(a, t, i);
  } }, { key: "appendData", value: function(e) {
    var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = this;
    i.w.globals.dataChanged = !0, i.series.getPreviousPaths();
    for (var a = i.w.config.series.slice(), s = 0; s < a.length; s++) if (e[s] !== null && e[s] !== void 0) for (var r = 0; r < e[s].data.length; r++) a[s].data.push(e[s].data[r]);
    return i.w.config.series = a, t && (i.w.globals.initialSeries = L.clone(i.w.config.series)), this.update();
  } }, { key: "update", value: function(e) {
    var t = this;
    return new Promise((function(i, a) {
      if (t.lastUpdateOptions && JSON.stringify(t.lastUpdateOptions) === JSON.stringify(e)) return i(t);
      t.lastUpdateOptions = L.clone(e), new xs(t.ctx).clear({ isUpdating: !0 });
      var s = t.create(t.w.config.series, e);
      if (!s) return i(t);
      t.mount(s).then((function() {
        typeof t.w.config.chart.events.updated == "function" && t.w.config.chart.events.updated(t, t.w), t.events.fireEvent("updated", [t, t.w]), t.w.globals.isDirty = !0, i(t);
      })).catch((function(r) {
        a(r);
      }));
    }));
  } }, { key: "getSyncedCharts", value: function() {
    var e = this.getGroupedCharts(), t = [this];
    return e.length && (t = [], e.forEach((function(i) {
      t.push(i);
    }))), t;
  } }, { key: "getGroupedCharts", value: function() {
    var e = this;
    return Apex._chartInstances.filter((function(t) {
      if (t.group) return !0;
    })).map((function(t) {
      return e.w.config.chart.group === t.group ? t.chart : e;
    }));
  } }, { key: "toggleSeries", value: function(e) {
    return this.series.toggleSeries(e);
  } }, { key: "highlightSeriesOnLegendHover", value: function(e, t) {
    return this.series.toggleSeriesOnHover(e, t);
  } }, { key: "showSeries", value: function(e) {
    this.series.showSeries(e);
  } }, { key: "hideSeries", value: function(e) {
    this.series.hideSeries(e);
  } }, { key: "highlightSeries", value: function(e) {
    this.series.highlightSeries(e);
  } }, { key: "isSeriesHidden", value: function(e) {
    this.series.isSeriesHidden(e);
  } }, { key: "resetSeries", value: function() {
    var e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
    this.series.resetSeries(e, t);
  } }, { key: "addEventListener", value: function(e, t) {
    this.events.addEventListener(e, t);
  } }, { key: "removeEventListener", value: function(e, t) {
    this.events.removeEventListener(e, t);
  } }, { key: "addXaxisAnnotation", value: function(e) {
    var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, a = this;
    i && (a = i), a.annotations.addXaxisAnnotationExternal(e, t, a);
  } }, { key: "addYaxisAnnotation", value: function(e) {
    var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, a = this;
    i && (a = i), a.annotations.addYaxisAnnotationExternal(e, t, a);
  } }, { key: "addPointAnnotation", value: function(e) {
    var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, a = this;
    i && (a = i), a.annotations.addPointAnnotationExternal(e, t, a);
  } }, { key: "clearAnnotations", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0, t = this;
    e && (t = e), t.annotations.clearAnnotations(t);
  } }, { key: "removeAnnotation", value: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, i = this;
    t && (i = t), i.annotations.removeAnnotation(i, e);
  } }, { key: "getChartArea", value: function() {
    return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner");
  } }, { key: "getSeriesTotalXRange", value: function(e, t) {
    return this.coreUtils.getSeriesTotalsXRange(e, t);
  } }, { key: "getHighestValueInSeries", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return new ra(this.ctx).getMinYMaxY(e).highestY;
  } }, { key: "getLowestValueInSeries", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return new ra(this.ctx).getMinYMaxY(e).lowestY;
  } }, { key: "getSeriesTotal", value: function() {
    return this.w.globals.seriesTotals;
  } }, { key: "toggleDataPointSelection", value: function(e, t) {
    return this.updateHelpers.toggleDataPointSelection(e, t);
  } }, { key: "zoomX", value: function(e, t) {
    this.ctx.toolbar.zoomUpdateOptions(e, t);
  } }, { key: "setLocale", value: function(e) {
    this.localization.setCurrentLocaleValues(e);
  } }, { key: "dataURI", value: function(e) {
    return new Yt(this.ctx).dataURI(e);
  } }, { key: "getSvgString", value: function(e) {
    return new Yt(this.ctx).getSvgString(e);
  } }, { key: "exportToCSV", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return new Yt(this.ctx).exportToCSV(e);
  } }, { key: "paper", value: function() {
    return this.w.globals.dom.Paper;
  } }, { key: "_parentResizeCallback", value: function() {
    this.w.globals.animationEnded && this.w.config.chart.redrawOnParentResize && this._windowResize();
  } }, { key: "_windowResize", value: function() {
    var e = this;
    clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout((function() {
      e.w.globals.resized = !0, e.w.globals.dataChanged = !1, e.ctx.update();
    }), 150);
  } }, { key: "_windowResizeHandler", value: function() {
    var e = this.w.config.chart.redrawOnWindowResize;
    typeof e == "function" && (e = e()), e && this._windowResize();
  } }], [{ key: "getChartByID", value: function(e) {
    var t = L.escapeString(e);
    if (Apex._chartInstances) {
      var i = Apex._chartInstances.filter((function(a) {
        return a.id === t;
      }))[0];
      return i && i.chart;
    }
  } }, { key: "initOnLoad", value: function() {
    for (var e = document.querySelectorAll("[data-apexcharts]"), t = 0; t < e.length; t++)
      new n(e[t], JSON.parse(e[t].getAttribute("data-options"))).render();
  } }, { key: "exec", value: function(e, t) {
    var i = this.getChartByID(e);
    if (i) {
      i.w.globals.isExecCalled = !0;
      var a = null;
      if (i.publicMethods.indexOf(t) !== -1) {
        for (var s = arguments.length, r = new Array(s > 2 ? s - 2 : 0), o = 2; o < s; o++) r[o - 2] = arguments[o];
        a = i[t].apply(i, r);
      }
      return a;
    }
  } }, { key: "merge", value: function(e, t) {
    return L.extend(e, t);
  } }]), n;
})(), ei = { exports: {} }, ti = { exports: {} }, xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bs;
function wl() {
  if (bs) return xe;
  bs = 1;
  var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, i = n ? Symbol.for("react.fragment") : 60107, a = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114, r = n ? Symbol.for("react.provider") : 60109, o = n ? Symbol.for("react.context") : 60110, l = n ? Symbol.for("react.async_mode") : 60111, h = n ? Symbol.for("react.concurrent_mode") : 60111, c = n ? Symbol.for("react.forward_ref") : 60112, d = n ? Symbol.for("react.suspense") : 60113, u = n ? Symbol.for("react.suspense_list") : 60120, g = n ? Symbol.for("react.memo") : 60115, p = n ? Symbol.for("react.lazy") : 60116, f = n ? Symbol.for("react.block") : 60121, x = n ? Symbol.for("react.fundamental") : 60117, b = n ? Symbol.for("react.responder") : 60118, m = n ? Symbol.for("react.scope") : 60119;
  function y(v) {
    if (typeof v == "object" && v !== null) {
      var C = v.$$typeof;
      switch (C) {
        case e:
          switch (v = v.type, v) {
            case l:
            case h:
            case i:
            case s:
            case a:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case o:
                case c:
                case p:
                case g:
                case r:
                  return v;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  function w(v) {
    return y(v) === h;
  }
  return xe.AsyncMode = l, xe.ConcurrentMode = h, xe.ContextConsumer = o, xe.ContextProvider = r, xe.Element = e, xe.ForwardRef = c, xe.Fragment = i, xe.Lazy = p, xe.Memo = g, xe.Portal = t, xe.Profiler = s, xe.StrictMode = a, xe.Suspense = d, xe.isAsyncMode = function(v) {
    return w(v) || y(v) === l;
  }, xe.isConcurrentMode = w, xe.isContextConsumer = function(v) {
    return y(v) === o;
  }, xe.isContextProvider = function(v) {
    return y(v) === r;
  }, xe.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, xe.isForwardRef = function(v) {
    return y(v) === c;
  }, xe.isFragment = function(v) {
    return y(v) === i;
  }, xe.isLazy = function(v) {
    return y(v) === p;
  }, xe.isMemo = function(v) {
    return y(v) === g;
  }, xe.isPortal = function(v) {
    return y(v) === t;
  }, xe.isProfiler = function(v) {
    return y(v) === s;
  }, xe.isStrictMode = function(v) {
    return y(v) === a;
  }, xe.isSuspense = function(v) {
    return y(v) === d;
  }, xe.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === i || v === h || v === s || v === a || v === d || v === u || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === g || v.$$typeof === r || v.$$typeof === o || v.$$typeof === c || v.$$typeof === x || v.$$typeof === b || v.$$typeof === m || v.$$typeof === f);
  }, xe.typeOf = y, xe;
}
var be = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ms;
function kl() {
  return ms || (ms = 1, process.env.NODE_ENV !== "production" && (function() {
    var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, i = n ? Symbol.for("react.fragment") : 60107, a = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114, r = n ? Symbol.for("react.provider") : 60109, o = n ? Symbol.for("react.context") : 60110, l = n ? Symbol.for("react.async_mode") : 60111, h = n ? Symbol.for("react.concurrent_mode") : 60111, c = n ? Symbol.for("react.forward_ref") : 60112, d = n ? Symbol.for("react.suspense") : 60113, u = n ? Symbol.for("react.suspense_list") : 60120, g = n ? Symbol.for("react.memo") : 60115, p = n ? Symbol.for("react.lazy") : 60116, f = n ? Symbol.for("react.block") : 60121, x = n ? Symbol.for("react.fundamental") : 60117, b = n ? Symbol.for("react.responder") : 60118, m = n ? Symbol.for("react.scope") : 60119;
    function y(V) {
      return typeof V == "string" || typeof V == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      V === i || V === h || V === s || V === a || V === d || V === u || typeof V == "object" && V !== null && (V.$$typeof === p || V.$$typeof === g || V.$$typeof === r || V.$$typeof === o || V.$$typeof === c || V.$$typeof === x || V.$$typeof === b || V.$$typeof === m || V.$$typeof === f);
    }
    function w(V) {
      if (typeof V == "object" && V !== null) {
        var ye = V.$$typeof;
        switch (ye) {
          case e:
            var ze = V.type;
            switch (ze) {
              case l:
              case h:
              case i:
              case s:
              case a:
              case d:
                return ze;
              default:
                var Je = ze && ze.$$typeof;
                switch (Je) {
                  case o:
                  case c:
                  case p:
                  case g:
                  case r:
                    return Je;
                  default:
                    return ye;
                }
            }
          case t:
            return ye;
        }
      }
    }
    var v = l, C = h, k = o, A = r, S = e, P = c, T = i, I = p, R = g, z = t, Y = s, N = a, H = d, U = !1;
    function Q(V) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(V) || w(V) === l;
    }
    function O(V) {
      return w(V) === h;
    }
    function _(V) {
      return w(V) === o;
    }
    function Z(V) {
      return w(V) === r;
    }
    function ee(V) {
      return typeof V == "object" && V !== null && V.$$typeof === e;
    }
    function W(V) {
      return w(V) === c;
    }
    function se(V) {
      return w(V) === i;
    }
    function B(V) {
      return w(V) === p;
    }
    function G(V) {
      return w(V) === g;
    }
    function J(V) {
      return w(V) === t;
    }
    function ae(V) {
      return w(V) === s;
    }
    function te(V) {
      return w(V) === a;
    }
    function ge(V) {
      return w(V) === d;
    }
    be.AsyncMode = v, be.ConcurrentMode = C, be.ContextConsumer = k, be.ContextProvider = A, be.Element = S, be.ForwardRef = P, be.Fragment = T, be.Lazy = I, be.Memo = R, be.Portal = z, be.Profiler = Y, be.StrictMode = N, be.Suspense = H, be.isAsyncMode = Q, be.isConcurrentMode = O, be.isContextConsumer = _, be.isContextProvider = Z, be.isElement = ee, be.isForwardRef = W, be.isFragment = se, be.isLazy = B, be.isMemo = G, be.isPortal = J, be.isProfiler = ae, be.isStrictMode = te, be.isSuspense = ge, be.isValidElementType = y, be.typeOf = w;
  })()), be;
}
var vs;
function Ar() {
  return vs || (vs = 1, process.env.NODE_ENV === "production" ? ti.exports = wl() : ti.exports = kl()), ti.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ni, ys;
function Al() {
  if (ys) return Ni;
  ys = 1;
  var n = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function i(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var r = {}, o = 0; o < 10; o++)
        r["_" + String.fromCharCode(o)] = o;
      var l = Object.getOwnPropertyNames(r).map(function(c) {
        return r[c];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        h[c] = c;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ni = a() ? Object.assign : function(s, r) {
    for (var o, l = i(s), h, c = 1; c < arguments.length; c++) {
      o = Object(arguments[c]);
      for (var d in o)
        e.call(o, d) && (l[d] = o[d]);
      if (n) {
        h = n(o);
        for (var u = 0; u < h.length; u++)
          t.call(o, h[u]) && (l[h[u]] = o[h[u]]);
      }
    }
    return l;
  }, Ni;
}
var Hi, ws;
function Pa() {
  if (ws) return Hi;
  ws = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Hi = n, Hi;
}
var Fi, ks;
function Cr() {
  return ks || (ks = 1, Fi = Function.call.bind(Object.prototype.hasOwnProperty)), Fi;
}
var Di, As;
function Cl() {
  if (As) return Di;
  As = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = /* @__PURE__ */ Pa(), t = {}, i = /* @__PURE__ */ Cr();
    n = function(s) {
      var r = "Warning: " + s;
      typeof console < "u" && console.error(r);
      try {
        throw new Error(r);
      } catch {
      }
    };
  }
  function a(s, r, o, l, h) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in s)
        if (i(s, c)) {
          var d;
          try {
            if (typeof s[c] != "function") {
              var u = Error(
                (l || "React class") + ": " + o + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw u.name = "Invariant Violation", u;
            }
            d = s[c](r, c, l, o, null, e);
          } catch (p) {
            d = p;
          }
          if (d && !(d instanceof Error) && n(
            (l || "React class") + ": type specification of " + o + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in t)) {
            t[d.message] = !0;
            var g = h ? h() : "";
            n(
              "Failed " + o + " type: " + d.message + (g ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Di = a, Di;
}
var Wi, Cs;
function Sl() {
  if (Cs) return Wi;
  Cs = 1;
  var n = Ar(), e = Al(), t = /* @__PURE__ */ Pa(), i = /* @__PURE__ */ Cr(), a = /* @__PURE__ */ Cl(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(o) {
    var l = "Warning: " + o;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function r() {
    return null;
  }
  return Wi = function(o, l) {
    var h = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function d(O) {
      var _ = O && (h && O[h] || O[c]);
      if (typeof _ == "function")
        return _;
    }
    var u = "<<anonymous>>", g = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: m(),
      arrayOf: y,
      element: w(),
      elementType: v(),
      instanceOf: C,
      node: P(),
      objectOf: A,
      oneOf: k,
      oneOfType: S,
      shape: I,
      exact: R
    };
    function p(O, _) {
      return O === _ ? O !== 0 || 1 / O === 1 / _ : O !== O && _ !== _;
    }
    function f(O, _) {
      this.message = O, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function x(O) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, Z = 0;
      function ee(se, B, G, J, ae, te, ge) {
        if (J = J || u, te = te || G, ge !== t) {
          if (l) {
            var V = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw V.name = "Invariant Violation", V;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = J + ":" + G;
            !_[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            Z < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + te + "` prop on `" + J + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[ye] = !0, Z++);
          }
        }
        return B[G] == null ? se ? B[G] === null ? new f("The " + ae + " `" + te + "` is marked as required " + ("in `" + J + "`, but its value is `null`.")) : new f("The " + ae + " `" + te + "` is marked as required in " + ("`" + J + "`, but its value is `undefined`.")) : null : O(B, G, J, ae, te);
      }
      var W = ee.bind(null, !1);
      return W.isRequired = ee.bind(null, !0), W;
    }
    function b(O) {
      function _(Z, ee, W, se, B, G) {
        var J = Z[ee], ae = N(J);
        if (ae !== O) {
          var te = H(J);
          return new f(
            "Invalid " + se + " `" + B + "` of type " + ("`" + te + "` supplied to `" + W + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return x(_);
    }
    function m() {
      return x(r);
    }
    function y(O) {
      function _(Z, ee, W, se, B) {
        if (typeof O != "function")
          return new f("Property `" + B + "` of component `" + W + "` has invalid PropType notation inside arrayOf.");
        var G = Z[ee];
        if (!Array.isArray(G)) {
          var J = N(G);
          return new f("Invalid " + se + " `" + B + "` of type " + ("`" + J + "` supplied to `" + W + "`, expected an array."));
        }
        for (var ae = 0; ae < G.length; ae++) {
          var te = O(G, ae, W, se, B + "[" + ae + "]", t);
          if (te instanceof Error)
            return te;
        }
        return null;
      }
      return x(_);
    }
    function w() {
      function O(_, Z, ee, W, se) {
        var B = _[Z];
        if (!o(B)) {
          var G = N(B);
          return new f("Invalid " + W + " `" + se + "` of type " + ("`" + G + "` supplied to `" + ee + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(O);
    }
    function v() {
      function O(_, Z, ee, W, se) {
        var B = _[Z];
        if (!n.isValidElementType(B)) {
          var G = N(B);
          return new f("Invalid " + W + " `" + se + "` of type " + ("`" + G + "` supplied to `" + ee + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(O);
    }
    function C(O) {
      function _(Z, ee, W, se, B) {
        if (!(Z[ee] instanceof O)) {
          var G = O.name || u, J = Q(Z[ee]);
          return new f("Invalid " + se + " `" + B + "` of type " + ("`" + J + "` supplied to `" + W + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return x(_);
    }
    function k(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), r;
      function _(Z, ee, W, se, B) {
        for (var G = Z[ee], J = 0; J < O.length; J++)
          if (p(G, O[J]))
            return null;
        var ae = JSON.stringify(O, function(ge, V) {
          var ye = H(V);
          return ye === "symbol" ? String(V) : V;
        });
        return new f("Invalid " + se + " `" + B + "` of value `" + String(G) + "` " + ("supplied to `" + W + "`, expected one of " + ae + "."));
      }
      return x(_);
    }
    function A(O) {
      function _(Z, ee, W, se, B) {
        if (typeof O != "function")
          return new f("Property `" + B + "` of component `" + W + "` has invalid PropType notation inside objectOf.");
        var G = Z[ee], J = N(G);
        if (J !== "object")
          return new f("Invalid " + se + " `" + B + "` of type " + ("`" + J + "` supplied to `" + W + "`, expected an object."));
        for (var ae in G)
          if (i(G, ae)) {
            var te = O(G, ae, W, se, B + "." + ae, t);
            if (te instanceof Error)
              return te;
          }
        return null;
      }
      return x(_);
    }
    function S(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), r;
      for (var _ = 0; _ < O.length; _++) {
        var Z = O[_];
        if (typeof Z != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + U(Z) + " at index " + _ + "."
          ), r;
      }
      function ee(W, se, B, G, J) {
        for (var ae = [], te = 0; te < O.length; te++) {
          var ge = O[te], V = ge(W, se, B, G, J, t);
          if (V == null)
            return null;
          V.data && i(V.data, "expectedType") && ae.push(V.data.expectedType);
        }
        var ye = ae.length > 0 ? ", expected one of type [" + ae.join(", ") + "]" : "";
        return new f("Invalid " + G + " `" + J + "` supplied to " + ("`" + B + "`" + ye + "."));
      }
      return x(ee);
    }
    function P() {
      function O(_, Z, ee, W, se) {
        return z(_[Z]) ? null : new f("Invalid " + W + " `" + se + "` supplied to " + ("`" + ee + "`, expected a ReactNode."));
      }
      return x(O);
    }
    function T(O, _, Z, ee, W) {
      return new f(
        (O || "React class") + ": " + _ + " type `" + Z + "." + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + W + "`."
      );
    }
    function I(O) {
      function _(Z, ee, W, se, B) {
        var G = Z[ee], J = N(G);
        if (J !== "object")
          return new f("Invalid " + se + " `" + B + "` of type `" + J + "` " + ("supplied to `" + W + "`, expected `object`."));
        for (var ae in O) {
          var te = O[ae];
          if (typeof te != "function")
            return T(W, se, B, ae, H(te));
          var ge = te(G, ae, W, se, B + "." + ae, t);
          if (ge)
            return ge;
        }
        return null;
      }
      return x(_);
    }
    function R(O) {
      function _(Z, ee, W, se, B) {
        var G = Z[ee], J = N(G);
        if (J !== "object")
          return new f("Invalid " + se + " `" + B + "` of type `" + J + "` " + ("supplied to `" + W + "`, expected `object`."));
        var ae = e({}, Z[ee], O);
        for (var te in ae) {
          var ge = O[te];
          if (i(O, te) && typeof ge != "function")
            return T(W, se, B, te, H(ge));
          if (!ge)
            return new f(
              "Invalid " + se + " `" + B + "` key `" + te + "` supplied to `" + W + "`.\nBad object: " + JSON.stringify(Z[ee], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var V = ge(G, te, W, se, B + "." + te, t);
          if (V)
            return V;
        }
        return null;
      }
      return x(_);
    }
    function z(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(z);
          if (O === null || o(O))
            return !0;
          var _ = d(O);
          if (_) {
            var Z = _.call(O), ee;
            if (_ !== O.entries) {
              for (; !(ee = Z.next()).done; )
                if (!z(ee.value))
                  return !1;
            } else
              for (; !(ee = Z.next()).done; ) {
                var W = ee.value;
                if (W && !z(W[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Y(O, _) {
      return O === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function N(O) {
      var _ = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : Y(_, O) ? "symbol" : _;
    }
    function H(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var _ = N(O);
      if (_ === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function U(O) {
      var _ = H(O);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function Q(O) {
      return !O.constructor || !O.constructor.name ? u : O.constructor.name;
    }
    return g.checkPropTypes = a, g.resetWarningCache = a.resetWarningCache, g.PropTypes = g, g;
  }, Wi;
}
var ji, Ss;
function Ml() {
  if (Ss) return ji;
  Ss = 1;
  var n = /* @__PURE__ */ Pa();
  function e() {
  }
  function t() {
  }
  return t.resetWarningCache = e, ji = function() {
    function i(r, o, l, h, c, d) {
      if (d !== n) {
        var u = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw u.name = "Invariant Violation", u;
      }
    }
    i.isRequired = i;
    function a() {
      return i;
    }
    var s = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: a,
      element: i,
      elementType: i,
      instanceOf: a,
      node: i,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: t,
      resetWarningCache: e
    };
    return s.PropTypes = s, s;
  }, ji;
}
var Ms;
function Ll() {
  if (Ms) return ei.exports;
  if (Ms = 1, process.env.NODE_ENV !== "production") {
    var n = Ar(), e = !0;
    ei.exports = /* @__PURE__ */ Sl()(n.isElement, e);
  } else
    ei.exports = /* @__PURE__ */ Ml()();
  return ei.exports;
}
var Pl = /* @__PURE__ */ Ll();
const Ue = /* @__PURE__ */ Zr(Pl);
function Tl(n, e, t) {
  return (e = (function(i) {
    var a = (function(s, r) {
      if (typeof s != "object" || !s) return s;
      var o = s[Symbol.toPrimitive];
      if (o !== void 0) {
        var l = o.call(s, r);
        if (typeof l != "object") return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(s);
    })(i, "string");
    return typeof a == "symbol" ? a : a + "";
  })(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function da() {
  return da = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t) ({}).hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, da.apply(null, arguments);
}
function Ls(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    e && (i = i.filter((function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), t.push.apply(t, i);
  }
  return t;
}
function Sr(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ls(Object(t), !0).forEach((function(i) {
      Tl(n, i, t[i]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Ls(Object(t)).forEach((function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(t, i));
    }));
  }
  return n;
}
function jt(n) {
  return jt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, jt(n);
}
var El = ["type", "width", "height", "series", "options", "chartRef"];
function Bi(n) {
  return n && jt(n) === "object" && !Array.isArray(n);
}
function Mr(n, e) {
  var t = Sr({}, n);
  return Bi(n) && Bi(e) && Object.keys(e).forEach((function(i) {
    Bi(e[i]) ? t[i] = i in n ? Mr(n[i], e[i]) : e[i] : t[i] = e[i];
  })), t;
}
function ua(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new WeakSet();
  if (n === e) return !0;
  if (jt(n) !== "object" || n === null || jt(e) !== "object" || e === null) return !1;
  if (t.has(n) || t.has(e)) return !0;
  t.add(n), t.add(e);
  var i = Object.keys(n), a = Object.keys(e);
  if (i.length !== a.length) return !1;
  for (var s = 0, r = i; s < r.length; s++) {
    var o = r[s];
    if (!a.includes(o) || !ua(n[o], e[o], t)) return !1;
  }
  return !0;
}
var Il = ["type", "series", "options", "width", "height", "chartRef"];
function Lr(n) {
  var e = n.type, t = e === void 0 ? "line" : e, i = n.width, a = i === void 0 ? "100%" : i, s = n.height, r = s === void 0 ? "auto" : s, o = n.series, l = n.options, h = n.chartRef, c = (function(y, w) {
    if (y == null) return {};
    var v, C, k = (function(S, P) {
      if (S == null) return {};
      var T = {};
      for (var I in S) if ({}.hasOwnProperty.call(S, I)) {
        if (P.includes(I)) continue;
        T[I] = S[I];
      }
      return T;
    })(y, w);
    if (Object.getOwnPropertySymbols) {
      var A = Object.getOwnPropertySymbols(y);
      for (C = 0; C < A.length; C++) v = A[C], w.includes(v) || {}.propertyIsEnumerable.call(y, v) && (k[v] = y[v]);
    }
    return k;
  })(n, El), d = vi(null), u = vi(null), g = vi(null), p = h || g, f = function() {
    return Mr(l, { chart: { type: t, height: r, width: a }, series: o });
  };
  ja((function() {
    return p.current = new yl(d.current, f()), p.current.render(), u.current = l, function() {
      p.current && typeof p.current.destroy == "function" && p.current.destroy();
    };
  }), []), ja((function() {
    if (p.current && p.current.w) {
      var y = !ua(p.current.w.config.series, o), w = !ua(u.current, l) || r !== p.current.opts.chart.height || a !== p.current.opts.chart.width;
      (y || w) && (y ? w ? p.current.updateOptions(f()) : p.current.updateSeries(o) : p.current.updateOptions(f())), u.current = l;
    }
  }), [l, o, r, a]);
  var x, b, m = (x = Il, b = Sr({}, c), x.forEach((function(y) {
    delete b[y];
  })), b);
  return ga.createElement("div", da({ ref: d }, m));
}
Lr.propTypes = { type: Ue.string.isRequired, series: Ue.array.isRequired, options: Ue.object.isRequired, width: Ue.oneOfType([Ue.string, Ue.number]), height: Ue.oneOfType([Ue.string, Ue.number]), chartRef: Ue.shape({ current: Ue.any }) };
const Rl = ({ widget: n }) => {
  var a, s, r, o, l;
  const e = ((a = n.settings) == null ? void 0 : a.chart_type) || n.type.replace("_chart", "") || "line", t = {
    chart: {
      id: `chart-${n.id}`,
      toolbar: { show: !1 },
      fontFamily: "Inter, sans-serif",
      background: "transparent"
    },
    title: {
      text: n.title,
      align: "left",
      style: { fontSize: "14px", fontWeight: "600", color: "#64748b" }
    },
    stroke: { curve: "smooth", width: 2 },
    colors: ["#4f46e5", "#10b981", "#f59e0b", "#ef4444"],
    xaxis: {
      categories: ((r = (s = n.data) == null ? void 0 : s.raw) == null ? void 0 : r.categories) || ["Jan", "Feb", "Mar", "Apr", "May"]
    }
  }, i = ((l = (o = n.data) == null ? void 0 : o.raw) == null ? void 0 : l.series) || [
    {
      name: n.title,
      data: [30, 40, 45, 50, 49]
    }
  ];
  return /* @__PURE__ */ E.jsx("div", { className: "h-full w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm", children: /* @__PURE__ */ E.jsx(Lr, { options: t, series: i, type: e, height: "100%", width: "100%" }) });
}, Ol = ({ widget: n }) => {
  var i, a, s;
  const e = Array.isArray((i = n.data) == null ? void 0 : i.result) ? n.data.result : [], t = ((a = n.settings) == null ? void 0 : a.columns) || (e.length > 0 ? Object.keys(e[0]) : ["ID", "Name", "Status"]);
  return /* @__PURE__ */ E.jsxs("div", { className: "h-full w-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm overflow-hidden flex flex-col", children: [
    /* @__PURE__ */ E.jsxs("div", { className: "flex items-center justify-between text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3", children: [
      /* @__PURE__ */ E.jsx("span", { children: n.title }),
      ((s = n.settings) == null ? void 0 : s.data_table) && /* @__PURE__ */ E.jsx("span", { className: "text-[10px] uppercase font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-950/50 px-2 py-0.5 rounded", children: "DataTable Driver" })
    ] }),
    /* @__PURE__ */ E.jsx("div", { className: "overflow-x-auto flex-1", children: /* @__PURE__ */ E.jsxs("table", { className: "min-w-full divide-y divide-slate-200 dark:divide-slate-800 text-xs", children: [
      /* @__PURE__ */ E.jsx("thead", { className: "bg-slate-50 dark:bg-slate-800/50", children: /* @__PURE__ */ E.jsx("tr", { children: t.map((r, o) => /* @__PURE__ */ E.jsx("th", { className: "px-3 py-2 text-left font-medium text-slate-500 uppercase tracking-wider", children: r }, o)) }) }),
      /* @__PURE__ */ E.jsx("tbody", { className: "divide-y divide-slate-200 dark:divide-slate-800", children: e.length > 0 ? e.map((r, o) => /* @__PURE__ */ E.jsx("tr", { className: "hover:bg-slate-50 dark:hover:bg-slate-800/30", children: t.map((l, h) => /* @__PURE__ */ E.jsx("td", { className: "px-3 py-2 text-slate-700 dark:text-slate-300", children: zl(r[l]) }, h)) }, o)) : /* @__PURE__ */ E.jsx("tr", { children: /* @__PURE__ */ E.jsx("td", { colSpan: t.length, className: "px-3 py-4 text-center text-slate-400", children: "No table data available" }) }) })
    ] }) })
  ] });
};
function zl(n) {
  if (n == null) return /* @__PURE__ */ E.jsx("span", { className: "text-slate-400", children: "-" });
  const e = String(n);
  return ["active", "completed", "success", "healthy", "admin"].includes(e.toLowerCase()) ? /* @__PURE__ */ E.jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300", children: e }) : ["inactive", "failed", "failing", "danger", "banned"].includes(e.toLowerCase()) ? /* @__PURE__ */ E.jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300", children: e }) : ["pending", "warning", "editor"].includes(e.toLowerCase()) ? /* @__PURE__ */ E.jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300", children: e }) : typeof n == "object" ? JSON.stringify(n) : e;
}
const _l = ({ widget: n }) => {
  var i, a;
  const e = ((i = n.settings) == null ? void 0 : i.probes) || ["database", "cache"], t = ((a = n.data) == null ? void 0 : a.probes) || [
    { name: "Database Connection", status: "healthy", latency_ms: 12 },
    { name: "Redis Cache", status: "healthy", latency_ms: 4 }
  ];
  return /* @__PURE__ */ E.jsxs("div", { className: "flex flex-col justify-between h-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm space-y-3", children: [
    /* @__PURE__ */ E.jsxs("div", { className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2", children: [
      /* @__PURE__ */ E.jsx("span", { className: "text-sm font-semibold text-slate-800 dark:text-slate-200", children: n.title || "System Diagnostics" }),
      /* @__PURE__ */ E.jsxs("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300", children: [
        /* @__PURE__ */ E.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" }),
        "Live Probes"
      ] })
    ] }),
    /* @__PURE__ */ E.jsx("div", { className: "space-y-2 flex-1 overflow-y-auto", children: t.map((s, r) => {
      const o = s.status === "healthy";
      return /* @__PURE__ */ E.jsxs("div", { className: "flex items-center justify-between p-2 rounded-md bg-slate-50 dark:bg-slate-800/50", children: [
        /* @__PURE__ */ E.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ E.jsx("span", { className: `w-2 h-2 rounded-full ${o ? "bg-emerald-500" : "bg-rose-500"}` }),
          /* @__PURE__ */ E.jsx("span", { className: "text-xs font-medium text-slate-700 dark:text-slate-300", children: s.name || e[r] })
        ] }),
        /* @__PURE__ */ E.jsxs("div", { className: "flex items-center space-x-2 text-xs", children: [
          s.latency_ms && /* @__PURE__ */ E.jsxs("span", { className: "text-slate-400", children: [
            s.latency_ms,
            "ms"
          ] }),
          /* @__PURE__ */ E.jsx("span", { className: `px-1.5 py-0.5 rounded font-semibold text-[10px] uppercase ${o ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300" : "bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300"}`, children: s.status || "healthy" })
        ] })
      ] }, r);
    }) })
  ] });
}, Fl = ({
  widgets: n,
  selectedWidgetId: e,
  onSelectWidget: t,
  isEditing: i,
  onUpdateWidget: a
}) => {
  const s = (l, h, c, d) => {
    if (d.stopPropagation(), !a) return;
    const u = Math.min(Math.max((l.w || 6) + h, 1), 12), g = Math.min(Math.max((l.h || 4) + c, 1), 12);
    a({
      ...l,
      w: u,
      h: g
    });
  }, r = (l, h, c, d) => {
    if (d.stopPropagation(), !a) return;
    const u = Math.min(Math.max((l.x || 0) + h, 0), 11), g = Math.max((l.y || 0) + c, 0);
    a({
      ...l,
      x: u,
      y: g
    });
  }, o = (l) => {
    var h, c;
    switch (l.type) {
      case "card":
      case "stats":
        return /* @__PURE__ */ E.jsx(ao, { widget: l });
      case "line_chart":
      case "bar_chart":
      case "pie_chart":
      case "area_chart":
        return /* @__PURE__ */ E.jsx(Rl, { widget: l });
      case "table":
        return /* @__PURE__ */ E.jsx(Ol, { widget: l });
      case "status_probe":
        return /* @__PURE__ */ E.jsx(_l, { widget: l });
      case "markdown":
        return /* @__PURE__ */ E.jsxs("div", { className: "h-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm", children: [
          /* @__PURE__ */ E.jsx("h4", { className: "font-bold mb-2 text-sm text-slate-800 dark:text-slate-200", children: l.title }),
          /* @__PURE__ */ E.jsx("div", { className: "text-xs text-slate-600 dark:text-slate-400", children: ((h = l.settings) == null ? void 0 : h.content) || "Markdown Content Placeholder" })
        ] });
      case "iframe":
        return /* @__PURE__ */ E.jsxs("div", { className: "h-full w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm overflow-hidden flex flex-col", children: [
          /* @__PURE__ */ E.jsx("div", { className: "p-2 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-600", children: l.title }),
          /* @__PURE__ */ E.jsx("iframe", { src: ((c = l.settings) == null ? void 0 : c.url) || "https://example.com", className: "w-full flex-1 border-none", title: l.title })
        ] });
      default:
        return /* @__PURE__ */ E.jsxs("div", { className: "h-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm flex flex-col items-center justify-center text-xs text-slate-400", children: [
          /* @__PURE__ */ E.jsx("span", { children: l.title }),
          /* @__PURE__ */ E.jsxs("span", { className: "text-[10px] text-indigo-500", children: [
            "[",
            l.type,
            "]"
          ] })
        ] });
    }
  };
  return /* @__PURE__ */ E.jsx("div", { id: "dashboard-canvas-grid", className: "flex-1 p-6 bg-slate-100 dark:bg-slate-950 min-h-[calc(100vh-3.5rem)] overflow-y-auto", children: n.length === 0 ? /* @__PURE__ */ E.jsxs("div", { className: "h-64 border-2 border-dashed border-slate-300 dark:border-slate-800 rounded-xl flex flex-col items-center justify-center text-slate-400 text-xs", children: [
    /* @__PURE__ */ E.jsx("p", { className: "font-medium", children: "Canvas is empty" }),
    /* @__PURE__ */ E.jsx("p", { className: "mt-1", children: "Add widgets from the left palette to build your dashboard layout" })
  ] }) : /* @__PURE__ */ E.jsx("div", { className: "grid grid-cols-12 gap-4", children: n.map((l, h) => {
    const c = e === l.id || e === void 0 && h === 0, d = Math.min(Math.max(l.w, 1), 12);
    return /* @__PURE__ */ E.jsxs(
      "div",
      {
        onClick: () => t(l),
        style: { gridColumn: `span ${d} / span ${d}` },
        className: `relative group cursor-pointer transition-all duration-150 ${i && c ? "ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-slate-950 rounded-lg" : ""}`,
        children: [
          i && c && /* @__PURE__ */ E.jsxs("div", { className: "absolute -top-3 right-2 z-20 flex items-center space-x-1 bg-indigo-600 text-white p-1 rounded-md shadow-md text-[10px]", children: [
            /* @__PURE__ */ E.jsx("button", { onClick: (u) => r(l, -1, 0, u), className: "hover:bg-indigo-700 p-0.5 rounded", title: "Move Left", children: /* @__PURE__ */ E.jsx(on, { className: "w-3 h-3" }) }),
            /* @__PURE__ */ E.jsx("button", { onClick: (u) => r(l, 1, 0, u), className: "hover:bg-indigo-700 p-0.5 rounded", title: "Move Right", children: /* @__PURE__ */ E.jsx(hn, { className: "w-3 h-3" }) }),
            /* @__PURE__ */ E.jsx("button", { onClick: (u) => r(l, 0, -1, u), className: "hover:bg-indigo-700 p-0.5 rounded", title: "Move Up", children: /* @__PURE__ */ E.jsx(dn, { className: "w-3 h-3" }) }),
            /* @__PURE__ */ E.jsx("button", { onClick: (u) => r(l, 0, 1, u), className: "hover:bg-indigo-700 p-0.5 rounded", title: "Move Down", children: /* @__PURE__ */ E.jsx(rn, { className: "w-3 h-3" }) }),
            /* @__PURE__ */ E.jsx("span", { className: "w-px h-3 bg-indigo-400 my-auto" }),
            /* @__PURE__ */ E.jsxs("button", { onClick: (u) => s(l, 1, 0, u), className: "hover:bg-indigo-700 p-0.5 rounded flex items-center", title: "Increase Width", children: [
              /* @__PURE__ */ E.jsx("span", { children: "W" }),
              /* @__PURE__ */ E.jsx(Hn, { className: "w-2.5 h-2.5 ml-0.5" })
            ] }),
            /* @__PURE__ */ E.jsxs("button", { onClick: (u) => s(l, -1, 0, u), className: "hover:bg-indigo-700 p-0.5 rounded flex items-center", title: "Decrease Width", children: [
              /* @__PURE__ */ E.jsx("span", { children: "W" }),
              /* @__PURE__ */ E.jsx(_n, { className: "w-2.5 h-2.5 ml-0.5" })
            ] })
          ] }),
          o(l)
        ]
      },
      l.id || h
    );
  }) }) });
}, Dl = "1.0.0";
export {
  Rl as ApexChartRenderer,
  Fl as CanvasGrid,
  Nl as LeftSidebar,
  Hl as RightSidebar,
  ao as StatCardRenderer,
  Ol as TableRenderer,
  Xl as TopToolbar,
  Dl as version
};
