import {
    r as Y,
    g as pu
} from "../vendor-DR5RWKqR.js";
import {
    al as Xl,
    aa as wa,
    am as Ea,
    an as _a,
    G as xa,
    w as Pa,
    C as ka,
    ao as za,
    O as Ca,
    d as Na,
    ap as qo,
    aq as Yl,
    ar as Ra,
    as as Ma,
    V as On,
    e as La,
    at as Ta,
    au as Ia,
    av as Oa,
    aw as Fa,
    ax as ja,
    ay as Da,
    az as Ua
} from "../three-CFPVlYAJ.js";
import {
    s as Aa,
    p as Ba,
    c as Ha,
    a as Qa
} from "./drei-zjl_KbSs.js";
import {
    j as lt
} from "../@hy/experiences-909RjQqY.js";
var mu = {
        exports: {}
    },
    Ht = {};
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Ht.ConcurrentRoot = 1;
Ht.ContinuousEventPriority = 4;
Ht.DefaultEventPriority = 16;
Ht.DiscreteEventPriority = 1;
Ht.IdleEventPriority = 536870912;
Ht.LegacyRoot = 0;
mu.exports = Ht;
var un = mu.exports,
    vu = {
        exports: {}
    },
    hu = {
        exports: {}
    },
    gu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(o) {
    function u(L, H) {
        var U = L.length;
        L.push(H);
        e: for (; 0 < U;) {
            var W = U - 1 >>> 1,
                oe = L[W];
            if (0 < w(oe, H)) L[W] = H, L[U] = oe, U = W;
            else break e
        }
    }

    function a(L) {
        return L.length === 0 ? null : L[0]
    }

    function h(L) {
        if (L.length === 0) return null;
        var H = L[0],
            U = L.pop();
        if (U !== H) {
            L[0] = U;
            e: for (var W = 0, oe = L.length, ue = oe >>> 1; W < ue;) {
                var Le = 2 * (W + 1) - 1,
                    We = L[Le],
                    ot = Le + 1,
                    Mt = L[ot];
                if (0 > w(We, U)) ot < oe && 0 > w(Mt, We) ? (L[W] = Mt, L[ot] = U, W = ot) : (L[W] = We, L[Le] = U, W = Le);
                else if (ot < oe && 0 > w(Mt, U)) L[W] = Mt, L[ot] = U, W = ot;
                else break e
            }
        }
        return H
    }

    function w(L, H) {
        var U = L.sortIndex - H.sortIndex;
        return U !== 0 ? U : L.id - H.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var P = performance;
        o.unstable_now = function() {
            return P.now()
        }
    } else {
        var m = Date,
            M = m.now();
        o.unstable_now = function() {
            return m.now() - M
        }
    }
    var S = [],
        k = [],
        c = 1,
        p = null,
        E = 3,
        R = !1,
        C = !1,
        F = !1,
        z = typeof setTimeout == "function" ? setTimeout : null,
        _ = typeof clearTimeout == "function" ? clearTimeout : null,
        x = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function O(L) {
        for (var H = a(k); H !== null;) {
            if (H.callback === null) h(k);
            else if (H.startTime <= L) h(k), H.sortIndex = H.expirationTime, u(S, H);
            else break;
            H = a(k)
        }
    }

    function K(L) {
        if (F = !1, O(L), !C)
            if (a(S) !== null) C = !0, De(J);
            else {
                var H = a(k);
                H !== null && it(K, H.startTime - L)
            }
    }

    function J(L, H) {
        C = !1, F && (F = !1, _(ie), ie = -1), R = !0;
        var U = E;
        try {
            for (O(H), p = a(S); p !== null && (!(p.expirationTime > H) || L && !j());) {
                var W = p.callback;
                if (typeof W == "function") {
                    p.callback = null, E = p.priorityLevel;
                    var oe = W(p.expirationTime <= H);
                    H = o.unstable_now(), typeof oe == "function" ? p.callback = oe : p === a(S) && h(S), O(H)
                } else h(S);
                p = a(S)
            }
            if (p !== null) var ue = !0;
            else {
                var Le = a(k);
                Le !== null && it(K, Le.startTime - H), ue = !1
            }
            return ue
        } finally {
            p = null, E = U, R = !1
        }
    }
    var V = !1,
        $ = null,
        ie = -1,
        b = 5,
        re = -1;

    function j() {
        return !(o.unstable_now() - re < b)
    }

    function le() {
        if ($ !== null) {
            var L = o.unstable_now();
            re = L;
            var H = !0;
            try {
                H = $(!0, L)
            } finally {
                H ? he() : (V = !1, $ = null)
            }
        } else V = !1
    }
    var he;
    if (typeof x == "function") he = function() {
        x(le)
    };
    else if (typeof MessageChannel < "u") {
        var $e = new MessageChannel,
            be = $e.port2;
        $e.port1.onmessage = le, he = function() {
            be.postMessage(null)
        }
    } else he = function() {
        z(le, 0)
    };

    function De(L) {
        $ = L, V || (V = !0, he())
    }

    function it(L, H) {
        ie = z(function() {
            L(o.unstable_now())
        }, H)
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(L) {
        L.callback = null
    }, o.unstable_continueExecution = function() {
        C || R || (C = !0, De(J))
    }, o.unstable_forceFrameRate = function(L) {
        0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < L ? Math.floor(1e3 / L) : 5
    }, o.unstable_getCurrentPriorityLevel = function() {
        return E
    }, o.unstable_getFirstCallbackNode = function() {
        return a(S)
    }, o.unstable_next = function(L) {
        switch (E) {
            case 1:
            case 2:
            case 3:
                var H = 3;
                break;
            default:
                H = E
        }
        var U = E;
        E = H;
        try {
            return L()
        } finally {
            E = U
        }
    }, o.unstable_pauseExecution = function() {}, o.unstable_requestPaint = function() {}, o.unstable_runWithPriority = function(L, H) {
        switch (L) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                L = 3
        }
        var U = E;
        E = L;
        try {
            return H()
        } finally {
            E = U
        }
    }, o.unstable_scheduleCallback = function(L, H, U) {
        var W = o.unstable_now();
        switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? W + U : W) : U = W, L) {
            case 1:
                var oe = -1;
                break;
            case 2:
                oe = 250;
                break;
            case 5:
                oe = 1073741823;
                break;
            case 4:
                oe = 1e4;
                break;
            default:
                oe = 5e3
        }
        return oe = U + oe, L = {
            id: c++,
            callback: H,
            priorityLevel: L,
            startTime: U,
            expirationTime: oe,
            sortIndex: -1
        }, U > W ? (L.sortIndex = U, u(k, L), a(S) === null && L === a(k) && (F ? (_(ie), ie = -1) : F = !0, it(K, U - W))) : (L.sortIndex = oe, u(S, L), C || R || (C = !0, De(J))), L
    }, o.unstable_shouldYield = j, o.unstable_wrapCallback = function(L) {
        var H = E;
        return function() {
            var U = E;
            E = H;
            try {
                return L.apply(this, arguments)
            } finally {
                E = U
            }
        }
    }
})(gu);
hu.exports = gu;
var ni = hu.exports;
/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wa = function(u) {
    var a = {},
        h = Y,
        w = ni,
        P = Object.assign;

    function m(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var M = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        S = Symbol.for("react.element"),
        k = Symbol.for("react.portal"),
        c = Symbol.for("react.fragment"),
        p = Symbol.for("react.strict_mode"),
        E = Symbol.for("react.profiler"),
        R = Symbol.for("react.provider"),
        C = Symbol.for("react.context"),
        F = Symbol.for("react.forward_ref"),
        z = Symbol.for("react.suspense"),
        _ = Symbol.for("react.suspense_list"),
        x = Symbol.for("react.memo"),
        O = Symbol.for("react.lazy"),
        K = Symbol.for("react.offscreen"),
        J = Symbol.iterator;

    function V(e) {
        return e === null || typeof e != "object" ? null : (e = J && e[J] || e["@@iterator"], typeof e == "function" ? e : null)
    }

    function $(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case c:
                return "Fragment";
            case k:
                return "Portal";
            case E:
                return "Profiler";
            case p:
                return "StrictMode";
            case z:
                return "Suspense";
            case _:
                return "SuspenseList"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case C:
                return (e.displayName || "Context") + ".Consumer";
            case R:
                return (e._context.displayName || "Context") + ".Provider";
            case F:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case x:
                return t = e.displayName || null, t !== null ? t : $(e.type) || "Memo";
            case O:
                t = e._payload, e = e._init;
                try {
                    return $(e(t))
                } catch {}
        }
        return null
    }

    function ie(e) {
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
                return $(t);
            case 8:
                return t === p ? "StrictMode" : "Mode";
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
                if (typeof t == "string") return t
        }
        return null
    }

    function b(e) {
        var t = e,
            n = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? n : null
    }

    function re(e) {
        if (b(e) !== e) throw Error(m(188))
    }

    function j(e) {
        var t = e.alternate;
        if (!t) {
            if (t = b(e), t === null) throw Error(m(188));
            return t !== e ? null : e
        }
        for (var n = e, r = t;;) {
            var l = n.return;
            if (l === null) break;
            var i = l.alternate;
            if (i === null) {
                if (r = l.return, r !== null) {
                    n = r;
                    continue
                }
                break
            }
            if (l.child === i.child) {
                for (i = l.child; i;) {
                    if (i === n) return re(l), e;
                    if (i === r) return re(l), t;
                    i = i.sibling
                }
                throw Error(m(188))
            }
            if (n.return !== r.return) n = l, r = i;
            else {
                for (var s = !1, f = l.child; f;) {
                    if (f === n) {
                        s = !0, n = l, r = i;
                        break
                    }
                    if (f === r) {
                        s = !0, r = l, n = i;
                        break
                    }
                    f = f.sibling
                }
                if (!s) {
                    for (f = i.child; f;) {
                        if (f === n) {
                            s = !0, n = i, r = l;
                            break
                        }
                        if (f === r) {
                            s = !0, r = i, n = l;
                            break
                        }
                        f = f.sibling
                    }
                    if (!s) throw Error(m(189))
                }
            }
            if (n.alternate !== r) throw Error(m(190))
        }
        if (n.tag !== 3) throw Error(m(188));
        return n.stateNode.current === n ? e : t
    }

    function le(e) {
        return e = j(e), e !== null ? he(e) : null
    }

    function he(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null;) {
            var t = he(e);
            if (t !== null) return t;
            e = e.sibling
        }
        return null
    }

    function $e(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null;) {
            if (e.tag !== 4) {
                var t = $e(e);
                if (t !== null) return t
            }
            e = e.sibling
        }
        return null
    }
    var be = Array.isArray,
        De = u.getPublicInstance,
        it = u.getRootHostContext,
        L = u.getChildHostContext,
        H = u.prepareForCommit,
        U = u.resetAfterCommit,
        W = u.createInstance,
        oe = u.appendInitialChild,
        ue = u.finalizeInitialChildren,
        Le = u.prepareUpdate,
        We = u.shouldSetTextContent,
        ot = u.createTextInstance,
        Mt = u.scheduleTimeout,
        ju = u.cancelTimeout,
        jr = u.noTimeout,
        jn = u.isPrimaryRenderer,
        et = u.supportsMutation,
        Dn = u.supportsPersistence,
        Ue = u.supportsHydration,
        Du = u.getInstanceFromNode,
        Uu = u.preparePortalMount,
        Au = u.getCurrentEventPriority,
        Bu = u.detachDeletedInstance,
        Hu = u.supportsMicrotasks,
        Qu = u.scheduleMicrotask,
        an = u.supportsTestSelectors,
        Wu = u.findFiberRoot,
        Vu = u.getBoundingRect,
        Gu = u.getTextContent,
        cn = u.isHiddenSubtree,
        Xu = u.matchAccessibilityRole,
        Yu = u.setFocusIfFocusable,
        Ku = u.setupIntersectionObserver,
        Ju = u.appendChild,
        Zu = u.appendChildToContainer,
        qu = u.commitTextUpdate,
        $u = u.commitMount,
        bu = u.commitUpdate,
        es = u.insertBefore,
        ts = u.insertInContainerBefore,
        ns = u.removeChild,
        rs = u.removeChildFromContainer,
        si = u.resetTextContent,
        ls = u.hideInstance,
        is = u.hideTextInstance,
        os = u.unhideInstance,
        us = u.unhideTextInstance,
        ss = u.clearContainer,
        as = u.cloneInstance,
        ai = u.createContainerChildSet,
        ci = u.appendChildToContainerChildSet,
        cs = u.finalizeContainerChildren,
        fi = u.replaceContainerChildren,
        di = u.cloneHiddenInstance,
        pi = u.cloneHiddenTextInstance,
        fs = u.canHydrateInstance,
        ds = u.canHydrateTextInstance,
        ps = u.canHydrateSuspenseInstance,
        mi = u.isSuspenseInstancePending,
        Dr = u.isSuspenseInstanceFallback,
        ms = u.registerSuspenseInstanceRetry,
        fn = u.getNextHydratableSibling,
        vs = u.getFirstHydratableChild,
        hs = u.getFirstHydratableChildWithinContainer,
        gs = u.getFirstHydratableChildWithinSuspenseInstance,
        ys = u.hydrateInstance,
        Ss = u.hydrateTextInstance,
        ws = u.hydrateSuspenseInstance,
        Es = u.getNextHydratableInstanceAfterSuspenseInstance,
        vi = u.commitHydratedContainer,
        _s = u.commitHydratedSuspenseInstance,
        xs = u.clearSuspenseBoundary,
        Ps = u.clearSuspenseBoundaryFromContainer,
        ks = u.shouldDeleteUnhydratedTailInstances,
        zs = u.didNotMatchHydratedContainerTextInstance,
        Cs = u.didNotMatchHydratedTextInstance,
        Ur;

    function dn(e) {
        if (Ur === void 0) try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ur = t && t[1] || ""
        }
        return `
` + Ur + e
    }
    var Ar = !1;

    function Br(e, t) {
        if (!e || Ar) return "";
        Ar = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                        throw Error()
                    }, Object.defineProperty(t.prototype, "props", {
                        set: function() {
                            throw Error()
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (N) {
                        var r = N
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (N) {
                        r = N
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (N) {
                    r = N
                }
                e()
            }
        } catch (N) {
            if (N && r && typeof N.stack == "string") {
                for (var l = N.stack.split(`
`), i = r.stack.split(`
`), s = l.length - 1, f = i.length - 1; 1 <= s && 0 <= f && l[s] !== i[f];) f--;
                for (; 1 <= s && 0 <= f; s--, f--)
                    if (l[s] !== i[f]) {
                        if (s !== 1 || f !== 1)
                            do
                                if (s--, f--, 0 > f || l[s] !== i[f]) {
                                    var y = `
` + l[s].replace(" at new ", " at ");
                                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), y
                                }
                        while (1 <= s && 0 <= f);
                        break
                    }
            }
        } finally {
            Ar = !1, Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? dn(e) : ""
    }
    var Ns = Object.prototype.hasOwnProperty,
        Hr = [],
        Qt = -1;

    function wt(e) {
        return {
            current: e
        }
    }

    function fe(e) {
        0 > Qt || (e.current = Hr[Qt], Hr[Qt] = null, Qt--)
    }

    function ae(e, t) {
        Qt++, Hr[Qt] = e.current, e.current = t
    }
    var Et = {},
        Pe = wt(Et),
        Te = wt(!1),
        Lt = Et;

    function Wt(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Et;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var l = {},
            i;
        for (i in n) l[i] = t[i];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
    }

    function Ie(e) {
        return e = e.childContextTypes, e != null
    }

    function Un() {
        fe(Te), fe(Pe)
    }

    function hi(e, t, n) {
        if (Pe.current !== Et) throw Error(m(168));
        ae(Pe, t), ae(Te, n)
    }

    function gi(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for (var l in r)
            if (!(l in t)) throw Error(m(108, ie(e) || "Unknown", l));
        return P({}, n, r)
    }

    function An(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Et, Lt = Pe.current, ae(Pe, e), ae(Te, Te.current), !0
    }

    function yi(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(m(169));
        n ? (e = gi(e, t, Lt), r.__reactInternalMemoizedMergedChildContext = e, fe(Te), fe(Pe), ae(Pe, e)) : fe(Te), ae(Te, n)
    }
    var tt = Math.clz32 ? Math.clz32 : Ls,
        Rs = Math.log,
        Ms = Math.LN2;

    function Ls(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Rs(e) / Ms | 0) | 0
    }
    var Bn = 64,
        Hn = 4194304;

    function pn(e) {
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
                return e
        }
    }

    function Qn(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0,
            l = e.suspendedLanes,
            i = e.pingedLanes,
            s = n & 268435455;
        if (s !== 0) {
            var f = s & ~l;
            f !== 0 ? r = pn(f) : (i &= s, i !== 0 && (r = pn(i)))
        } else s = n & ~l, s !== 0 ? r = pn(s) : i !== 0 && (r = pn(i));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
            for (e = e.entanglements, t &= r; 0 < t;) n = 31 - tt(t), l = 1 << n, r |= e[n], t &= ~l;
        return r
    }

    function Ts(e, t) {
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
                return -1
        }
    }

    function Is(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
            var s = 31 - tt(i),
                f = 1 << s,
                y = l[s];
            y === -1 ? (!(f & n) || f & r) && (l[s] = Ts(f, t)) : y <= t && (e.expiredLanes |= f), i &= ~f
        }
    }

    function Qr(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }

    function Wr(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
    }

    function mn(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - tt(t), e[t] = n
    }

    function Os(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for (e = e.expirationTimes; 0 < n;) {
            var l = 31 - tt(n),
                i = 1 << l;
            t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i
        }
    }

    function Vr(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
            var r = 31 - tt(n),
                l = 1 << r;
            l & t | e[r] & t && (e[r] |= t), n &= ~l
        }
    }
    var ee = 0;

    function Si(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
    }
    var Gr = w.unstable_scheduleCallback,
        wi = w.unstable_cancelCallback,
        Fs = w.unstable_shouldYield,
        js = w.unstable_requestPaint,
        we = w.unstable_now,
        Xr = w.unstable_ImmediatePriority,
        Ds = w.unstable_UserBlockingPriority,
        Yr = w.unstable_NormalPriority,
        Us = w.unstable_IdlePriority,
        Wn = null,
        ut = null;

    function As(e) {
        if (ut && typeof ut.onCommitFiberRoot == "function") try {
            ut.onCommitFiberRoot(Wn, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
    }

    function Bs(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var st = typeof Object.is == "function" ? Object.is : Bs,
        mt = null,
        Vn = !1,
        Kr = !1;

    function Ei(e) {
        mt === null ? mt = [e] : mt.push(e)
    }

    function Hs(e) {
        Vn = !0, Ei(e)
    }

    function at() {
        if (!Kr && mt !== null) {
            Kr = !0;
            var e = 0,
                t = ee;
            try {
                var n = mt;
                for (ee = 1; e < n.length; e++) {
                    var r = n[e];
                    do r = r(!0); while (r !== null)
                }
                mt = null, Vn = !1
            } catch (l) {
                throw mt !== null && (mt = mt.slice(e + 1)), Gr(Xr, at), l
            } finally {
                ee = t, Kr = !1
            }
        }
        return null
    }
    var Qs = M.ReactCurrentBatchConfig;

    function Gn(e, t) {
        if (st(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
            var l = n[r];
            if (!Ns.call(t, l) || !st(e[l], t[l])) return !1
        }
        return !0
    }

    function Ws(e) {
        switch (e.tag) {
            case 5:
                return dn(e.type);
            case 16:
                return dn("Lazy");
            case 13:
                return dn("Suspense");
            case 19:
                return dn("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = Br(e.type, !1), e;
            case 11:
                return e = Br(e.type.render, !1), e;
            case 1:
                return e = Br(e.type, !0), e;
            default:
                return ""
        }
    }

    function nt(e, t) {
        if (e && e.defaultProps) {
            t = P({}, t), e = e.defaultProps;
            for (var n in e) t[n] === void 0 && (t[n] = e[n]);
            return t
        }
        return t
    }
    var Xn = wt(null),
        Yn = null,
        Vt = null,
        Jr = null;

    function Zr() {
        Jr = Vt = Yn = null
    }

    function _i(e, t, n) {
        jn ? (ae(Xn, t._currentValue), t._currentValue = n) : (ae(Xn, t._currentValue2), t._currentValue2 = n)
    }

    function qr(e) {
        var t = Xn.current;
        fe(Xn), jn ? e._currentValue = t : e._currentValue2 = t
    }

    function $r(e, t, n) {
        for (; e !== null;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return
        }
    }

    function Gt(e, t) {
        Yn = e, Jr = Vt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (He = !0), e.firstContext = null)
    }

    function Ve(e) {
        var t = jn ? e._currentValue : e._currentValue2;
        if (Jr !== e)
            if (e = {
                    context: e,
                    memoizedValue: t,
                    next: null
                }, Vt === null) {
                if (Yn === null) throw Error(m(308));
                Vt = e, Yn.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else Vt = Vt.next = e;
        return t
    }
    var ct = null,
        _t = !1;

    function br(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }

    function xi(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }

    function vt(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function xt(e, t) {
        var n = e.updateQueue;
        n !== null && (n = n.shared, ge !== null && e.mode & 1 && !(q & 2) ? (e = n.interleaved, e === null ? (t.next = t, ct === null ? ct = [n] : ct.push(n)) : (t.next = e.next, e.next = t), n.interleaved = t) : (e = n.pending, e === null ? t.next = t : (t.next = e.next, e.next = t), n.pending = t))
    }

    function Kn(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Vr(e, n)
        }
    }

    function Pi(e, t) {
        var n = e.updateQueue,
            r = e.alternate;
        if (r !== null && (r = r.updateQueue, n === r)) {
            var l = null,
                i = null;
            if (n = n.firstBaseUpdate, n !== null) {
                do {
                    var s = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null
                    };
                    i === null ? l = i = s : i = i.next = s, n = n.next
                } while (n !== null);
                i === null ? l = i = t : i = i.next = t
            } else l = i = t;
            n = {
                baseState: r.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects
            }, e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
    }

    function Jn(e, t, n, r) {
        var l = e.updateQueue;
        _t = !1;
        var i = l.firstBaseUpdate,
            s = l.lastBaseUpdate,
            f = l.shared.pending;
        if (f !== null) {
            l.shared.pending = null;
            var y = f,
                N = y.next;
            y.next = null, s === null ? i = N : s.next = N, s = y;
            var D = e.alternate;
            D !== null && (D = D.updateQueue, f = D.lastBaseUpdate, f !== s && (f === null ? D.firstBaseUpdate = N : f.next = N, D.lastBaseUpdate = y))
        }
        if (i !== null) {
            var G = l.baseState;
            s = 0, D = N = y = null, f = i;
            do {
                var Q = f.lane,
                    se = f.eventTime;
                if ((r & Q) === Q) {
                    D !== null && (D = D.next = {
                        eventTime: se,
                        lane: 0,
                        tag: f.tag,
                        payload: f.payload,
                        callback: f.callback,
                        next: null
                    });
                    e: {
                        var B = e,
                            Ne = f;
                        switch (Q = t, se = n, Ne.tag) {
                            case 1:
                                if (B = Ne.payload, typeof B == "function") {
                                    G = B.call(se, G, Q);
                                    break e
                                }
                                G = B;
                                break e;
                            case 3:
                                B.flags = B.flags & -65537 | 128;
                            case 0:
                                if (B = Ne.payload, Q = typeof B == "function" ? B.call(se, G, Q) : B, Q == null) break e;
                                G = P({}, G, Q);
                                break e;
                            case 2:
                                _t = !0
                        }
                    }
                    f.callback !== null && f.lane !== 0 && (e.flags |= 64, Q = l.effects, Q === null ? l.effects = [f] : Q.push(f))
                } else se = {
                    eventTime: se,
                    lane: Q,
                    tag: f.tag,
                    payload: f.payload,
                    callback: f.callback,
                    next: null
                }, D === null ? (N = D = se, y = G) : D = D.next = se, s |= Q;
                if (f = f.next, f === null) {
                    if (f = l.shared.pending, f === null) break;
                    Q = f, f = Q.next, Q.next = null, l.lastBaseUpdate = Q, l.shared.pending = null
                }
            } while (!0);
            if (D === null && (y = G), l.baseState = y, l.firstBaseUpdate = N, l.lastBaseUpdate = D, t = l.shared.interleaved, t !== null) {
                l = t;
                do s |= l.lane, l = l.next; while (l !== t)
            } else i === null && (l.shared.lanes = 0);
            en |= s, e.lanes = s, e.memoizedState = G
        }
    }

    function ki(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null)
            for (t = 0; t < e.length; t++) {
                var r = e[t],
                    l = r.callback;
                if (l !== null) {
                    if (r.callback = null, r = n, typeof l != "function") throw Error(m(191, l));
                    l.call(r)
                }
            }
    }
    var zi = new h.Component().refs;

    function el(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : P({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var Zn = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? b(e) === e : !1
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = Me(),
                l = zt(e),
                i = vt(r, l);
            i.payload = t, n != null && (i.callback = n), xt(e, i), t = Je(e, l, r), t !== null && Kn(t, e, l)
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = Me(),
                l = zt(e),
                i = vt(r, l);
            i.tag = 1, i.payload = t, n != null && (i.callback = n), xt(e, i), t = Je(e, l, r), t !== null && Kn(t, e, l)
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Me(),
                r = zt(e),
                l = vt(n, r);
            l.tag = 2, t != null && (l.callback = t), xt(e, l), t = Je(e, r, n), t !== null && Kn(t, e, r)
        }
    };

    function Ci(e, t, n, r, l, i, s) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Gn(n, r) || !Gn(l, i) : !0
    }

    function Ni(e, t, n) {
        var r = !1,
            l = Et,
            i = t.contextType;
        return typeof i == "object" && i !== null ? i = Ve(i) : (l = Ie(t) ? Lt : Pe.current, r = t.contextTypes, i = (r = r != null) ? Wt(e, l) : Et), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Zn, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t
    }

    function Ri(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Zn.enqueueReplaceState(t, t.state, null)
    }

    function tl(e, t, n, r) {
        var l = e.stateNode;
        l.props = n, l.state = e.memoizedState, l.refs = zi, br(e);
        var i = t.contextType;
        typeof i == "object" && i !== null ? l.context = Ve(i) : (i = Ie(t) ? Lt : Pe.current, l.context = Wt(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (el(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Zn.enqueueReplaceState(l, l.state, null), Jn(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
    }
    var Xt = [],
        Yt = 0,
        qn = null,
        $n = 0,
        Ge = [],
        Xe = 0,
        Tt = null,
        ht = 1,
        gt = "";

    function It(e, t) {
        Xt[Yt++] = $n, Xt[Yt++] = qn, qn = e, $n = t
    }

    function Mi(e, t, n) {
        Ge[Xe++] = ht, Ge[Xe++] = gt, Ge[Xe++] = Tt, Tt = e;
        var r = ht;
        e = gt;
        var l = 32 - tt(r) - 1;
        r &= ~(1 << l), n += 1;
        var i = 32 - tt(t) + l;
        if (30 < i) {
            var s = l - l % 5;
            i = (r & (1 << s) - 1).toString(32), r >>= s, l -= s, ht = 1 << 32 - tt(t) + l | n << l | r, gt = i + e
        } else ht = 1 << i | n << l | r, gt = e
    }

    function nl(e) {
        e.return !== null && (It(e, 1), Mi(e, 1, 0))
    }

    function rl(e) {
        for (; e === qn;) qn = Xt[--Yt], Xt[Yt] = null, $n = Xt[--Yt], Xt[Yt] = null;
        for (; e === Tt;) Tt = Ge[--Xe], Ge[Xe] = null, gt = Ge[--Xe], Ge[Xe] = null, ht = Ge[--Xe], Ge[Xe] = null
    }
    var Ae = null,
        Be = null,
        de = !1,
        vn = !1,
        rt = null;

    function Li(e, t) {
        var n = Ze(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
    }

    function Ti(e, t) {
        switch (e.tag) {
            case 5:
                return t = fs(t, e.type, e.pendingProps), t !== null ? (e.stateNode = t, Ae = e, Be = vs(t), !0) : !1;
            case 6:
                return t = ds(t, e.pendingProps), t !== null ? (e.stateNode = t, Ae = e, Be = null, !0) : !1;
            case 13:
                if (t = ps(t), t !== null) {
                    var n = Tt !== null ? {
                        id: ht,
                        overflow: gt
                    } : null;
                    return e.memoizedState = {
                        dehydrated: t,
                        treeContext: n,
                        retryLane: 1073741824
                    }, n = Ze(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ae = e, Be = null, !0
                }
                return !1;
            default:
                return !1
        }
    }

    function ll(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }

    function il(e) {
        if (de) {
            var t = Be;
            if (t) {
                var n = t;
                if (!Ti(e, t)) {
                    if (ll(e)) throw Error(m(418));
                    t = fn(n);
                    var r = Ae;
                    t && Ti(e, t) ? Li(r, n) : (e.flags = e.flags & -4097 | 2, de = !1, Ae = e)
                }
            } else {
                if (ll(e)) throw Error(m(418));
                e.flags = e.flags & -4097 | 2, de = !1, Ae = e
            }
        }
    }

    function Ii(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
        Ae = e
    }

    function hn(e) {
        if (!Ue || e !== Ae) return !1;
        if (!de) return Ii(e), de = !0, !1;
        if (e.tag !== 3 && (e.tag !== 5 || ks(e.type) && !We(e.type, e.memoizedProps))) {
            var t = Be;
            if (t) {
                if (ll(e)) {
                    for (e = Be; e;) e = fn(e);
                    throw Error(m(418))
                }
                for (; t;) Li(e, t), t = fn(t)
            }
        }
        if (Ii(e), e.tag === 13) {
            if (!Ue) throw Error(m(316));
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
            Be = Es(e)
        } else Be = Ae ? fn(e.stateNode) : null;
        return !0
    }

    function Kt() {
        Ue && (Be = Ae = null, vn = de = !1)
    }

    function ol(e) {
        rt === null ? rt = [e] : rt.push(e)
    }

    function gn(e, t, n) {
        if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner, n) {
                    if (n.tag !== 1) throw Error(m(309));
                    var r = n.stateNode
                }
                if (!r) throw Error(m(147, e));
                var l = r,
                    i = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                    var f = l.refs;
                    f === zi && (f = l.refs = {}), s === null ? delete f[i] : f[i] = s
                }, t._stringRef = i, t)
            }
            if (typeof e != "string") throw Error(m(284));
            if (!n._owner) throw Error(m(290, e))
        }
        return e
    }

    function bn(e, t) {
        throw e = Object.prototype.toString.call(t), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }

    function Oi(e) {
        var t = e._init;
        return t(e._payload)
    }

    function Fi(e) {
        function t(v, d) {
            if (e) {
                var g = v.deletions;
                g === null ? (v.deletions = [d], v.flags |= 16) : g.push(d)
            }
        }

        function n(v, d) {
            if (!e) return null;
            for (; d !== null;) t(v, d), d = d.sibling;
            return null
        }

        function r(v, d) {
            for (v = new Map; d !== null;) d.key !== null ? v.set(d.key, d) : v.set(d.index, d), d = d.sibling;
            return v
        }

        function l(v, d) {
            return v = Nt(v, d), v.index = 0, v.sibling = null, v
        }

        function i(v, d, g) {
            return v.index = g, e ? (g = v.alternate, g !== null ? (g = g.index, g < d ? (v.flags |= 2, d) : g) : (v.flags |= 2, d)) : (v.flags |= 1048576, d)
        }

        function s(v) {
            return e && v.alternate === null && (v.flags |= 2), v
        }

        function f(v, d, g, I) {
            return d === null || d.tag !== 6 ? (d = Wl(g, v.mode, I), d.return = v, d) : (d = l(d, g), d.return = v, d)
        }

        function y(v, d, g, I) {
            var A = g.type;
            return A === c ? D(v, d, g.props.children, I, g.key) : d !== null && (d.elementType === A || typeof A == "object" && A !== null && A.$$typeof === O && Oi(A) === d.type) ? (I = l(d, g.props), I.ref = gn(v, d, g), I.return = v, I) : (I = Mr(g.type, g.key, g.props, null, v.mode, I), I.ref = gn(v, d, g), I.return = v, I)
        }

        function N(v, d, g, I) {
            return d === null || d.tag !== 4 || d.stateNode.containerInfo !== g.containerInfo || d.stateNode.implementation !== g.implementation ? (d = Vl(g, v.mode, I), d.return = v, d) : (d = l(d, g.children || []), d.return = v, d)
        }

        function D(v, d, g, I, A) {
            return d === null || d.tag !== 7 ? (d = Bt(g, v.mode, I, A), d.return = v, d) : (d = l(d, g), d.return = v, d)
        }

        function G(v, d, g) {
            if (typeof d == "string" && d !== "" || typeof d == "number") return d = Wl("" + d, v.mode, g), d.return = v, d;
            if (typeof d == "object" && d !== null) {
                switch (d.$$typeof) {
                    case S:
                        return g = Mr(d.type, d.key, d.props, null, v.mode, g), g.ref = gn(v, null, d), g.return = v, g;
                    case k:
                        return d = Vl(d, v.mode, g), d.return = v, d;
                    case O:
                        var I = d._init;
                        return G(v, I(d._payload), g)
                }
                if (be(d) || V(d)) return d = Bt(d, v.mode, g, null), d.return = v, d;
                bn(v, d)
            }
            return null
        }

        function Q(v, d, g, I) {
            var A = d !== null ? d.key : null;
            if (typeof g == "string" && g !== "" || typeof g == "number") return A !== null ? null : f(v, d, "" + g, I);
            if (typeof g == "object" && g !== null) {
                switch (g.$$typeof) {
                    case S:
                        return g.key === A ? y(v, d, g, I) : null;
                    case k:
                        return g.key === A ? N(v, d, g, I) : null;
                    case O:
                        return A = g._init, Q(v, d, A(g._payload), I)
                }
                if (be(g) || V(g)) return A !== null ? null : D(v, d, g, I, null);
                bn(v, g)
            }
            return null
        }

        function se(v, d, g, I, A) {
            if (typeof I == "string" && I !== "" || typeof I == "number") return v = v.get(g) || null, f(d, v, "" + I, A);
            if (typeof I == "object" && I !== null) {
                switch (I.$$typeof) {
                    case S:
                        return v = v.get(I.key === null ? g : I.key) || null, y(d, v, I, A);
                    case k:
                        return v = v.get(I.key === null ? g : I.key) || null, N(d, v, I, A);
                    case O:
                        var Z = I._init;
                        return se(v, d, g, Z(I._payload), A)
                }
                if (be(I) || V(I)) return v = v.get(g) || null, D(d, v, I, A, null);
                bn(d, I)
            }
            return null
        }

        function B(v, d, g, I) {
            for (var A = null, Z = null, X = d, te = d = 0, _e = null; X !== null && te < g.length; te++) {
                X.index > te ? (_e = X, X = null) : _e = X.sibling;
                var ne = Q(v, X, g[te], I);
                if (ne === null) {
                    X === null && (X = _e);
                    break
                }
                e && X && ne.alternate === null && t(v, X), d = i(ne, d, te), Z === null ? A = ne : Z.sibling = ne, Z = ne, X = _e
            }
            if (te === g.length) return n(v, X), de && It(v, te), A;
            if (X === null) {
                for (; te < g.length; te++) X = G(v, g[te], I), X !== null && (d = i(X, d, te), Z === null ? A = X : Z.sibling = X, Z = X);
                return de && It(v, te), A
            }
            for (X = r(v, X); te < g.length; te++) _e = se(X, v, te, g[te], I), _e !== null && (e && _e.alternate !== null && X.delete(_e.key === null ? te : _e.key), d = i(_e, d, te), Z === null ? A = _e : Z.sibling = _e, Z = _e);
            return e && X.forEach(function(Rt) {
                return t(v, Rt)
            }), de && It(v, te), A
        }

        function Ne(v, d, g, I) {
            var A = V(g);
            if (typeof A != "function") throw Error(m(150));
            if (g = A.call(g), g == null) throw Error(m(151));
            for (var Z = A = null, X = d, te = d = 0, _e = null, ne = g.next(); X !== null && !ne.done; te++, ne = g.next()) {
                X.index > te ? (_e = X, X = null) : _e = X.sibling;
                var Rt = Q(v, X, ne.value, I);
                if (Rt === null) {
                    X === null && (X = _e);
                    break
                }
                e && X && Rt.alternate === null && t(v, X), d = i(Rt, d, te), Z === null ? A = Rt : Z.sibling = Rt, Z = Rt, X = _e
            }
            if (ne.done) return n(v, X), de && It(v, te), A;
            if (X === null) {
                for (; !ne.done; te++, ne = g.next()) ne = G(v, ne.value, I), ne !== null && (d = i(ne, d, te), Z === null ? A = ne : Z.sibling = ne, Z = ne);
                return de && It(v, te), A
            }
            for (X = r(v, X); !ne.done; te++, ne = g.next()) ne = se(X, v, te, ne.value, I), ne !== null && (e && ne.alternate !== null && X.delete(ne.key === null ? te : ne.key), d = i(ne, d, te), Z === null ? A = ne : Z.sibling = ne, Z = ne);
            return e && X.forEach(function(Sa) {
                return t(v, Sa)
            }), de && It(v, te), A
        }

        function qe(v, d, g, I) {
            if (typeof g == "object" && g !== null && g.type === c && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
                switch (g.$$typeof) {
                    case S:
                        e: {
                            for (var A = g.key, Z = d; Z !== null;) {
                                if (Z.key === A) {
                                    if (A = g.type, A === c) {
                                        if (Z.tag === 7) {
                                            n(v, Z.sibling), d = l(Z, g.props.children), d.return = v, v = d;
                                            break e
                                        }
                                    } else if (Z.elementType === A || typeof A == "object" && A !== null && A.$$typeof === O && Oi(A) === Z.type) {
                                        n(v, Z.sibling), d = l(Z, g.props), d.ref = gn(v, Z, g), d.return = v, v = d;
                                        break e
                                    }
                                    n(v, Z);
                                    break
                                } else t(v, Z);
                                Z = Z.sibling
                            }
                            g.type === c ? (d = Bt(g.props.children, v.mode, I, g.key), d.return = v, v = d) : (I = Mr(g.type, g.key, g.props, null, v.mode, I), I.ref = gn(v, d, g), I.return = v, v = I)
                        }
                        return s(v);
                    case k:
                        e: {
                            for (Z = g.key; d !== null;) {
                                if (d.key === Z)
                                    if (d.tag === 4 && d.stateNode.containerInfo === g.containerInfo && d.stateNode.implementation === g.implementation) {
                                        n(v, d.sibling), d = l(d, g.children || []), d.return = v, v = d;
                                        break e
                                    } else {
                                        n(v, d);
                                        break
                                    }
                                else t(v, d);
                                d = d.sibling
                            }
                            d = Vl(g, v.mode, I),
                            d.return = v,
                            v = d
                        }
                        return s(v);
                    case O:
                        return Z = g._init, qe(v, d, Z(g._payload), I)
                }
                if (be(g)) return B(v, d, g, I);
                if (V(g)) return Ne(v, d, g, I);
                bn(v, g)
            }
            return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, d !== null && d.tag === 6 ? (n(v, d.sibling), d = l(d, g), d.return = v, v = d) : (n(v, d), d = Wl(g, v.mode, I), d.return = v, v = d), s(v)) : n(v, d)
        }
        return qe
    }
    var Jt = Fi(!0),
        ji = Fi(!1),
        yn = {},
        Ye = wt(yn),
        Sn = wt(yn),
        Zt = wt(yn);

    function ft(e) {
        if (e === yn) throw Error(m(174));
        return e
    }

    function ul(e, t) {
        ae(Zt, t), ae(Sn, e), ae(Ye, yn), e = it(t), fe(Ye), ae(Ye, e)
    }

    function qt() {
        fe(Ye), fe(Sn), fe(Zt)
    }

    function Di(e) {
        var t = ft(Zt.current),
            n = ft(Ye.current);
        t = L(n, e.type, t), n !== t && (ae(Sn, e), ae(Ye, t))
    }

    function sl(e) {
        Sn.current === e && (fe(Ye), fe(Sn))
    }
    var pe = wt(0);

    function er(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated, n === null || mi(n) || Dr(n))) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if (t.flags & 128) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }
    var al = [];

    function cl() {
        for (var e = 0; e < al.length; e++) {
            var t = al[e];
            jn ? t._workInProgressVersionPrimary = null : t._workInProgressVersionSecondary = null
        }
        al.length = 0
    }
    var tr = M.ReactCurrentDispatcher,
        Ke = M.ReactCurrentBatchConfig,
        $t = 0,
        me = null,
        ke = null,
        Ee = null,
        nr = !1,
        wn = !1,
        En = 0,
        Vs = 0;

    function ze() {
        throw Error(m(321))
    }

    function fl(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!st(e[n], t[n])) return !1;
        return !0
    }

    function dl(e, t, n, r, l, i) {
        if ($t = i, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, tr.current = e === null || e.memoizedState === null ? Ks : Js, e = n(r, l), wn) {
            i = 0;
            do {
                if (wn = !1, En = 0, 25 <= i) throw Error(m(301));
                i += 1, Ee = ke = null, t.updateQueue = null, tr.current = Zs, e = n(r, l)
            } while (wn)
        }
        if (tr.current = ur, t = ke !== null && ke.next !== null, $t = 0, Ee = ke = me = null, nr = !1, t) throw Error(m(300));
        return e
    }

    function pl() {
        var e = En !== 0;
        return En = 0, e
    }

    function yt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ee === null ? me.memoizedState = Ee = e : Ee = Ee.next = e, Ee
    }

    function dt() {
        if (ke === null) {
            var e = me.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = ke.next;
        var t = Ee === null ? me.memoizedState : Ee.next;
        if (t !== null) Ee = t, ke = e;
        else {
            if (e === null) throw Error(m(310));
            ke = e, e = {
                memoizedState: ke.memoizedState,
                baseState: ke.baseState,
                baseQueue: ke.baseQueue,
                queue: ke.queue,
                next: null
            }, Ee === null ? me.memoizedState = Ee = e : Ee = Ee.next = e
        }
        return Ee
    }

    function Ot(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function rr(e) {
        var t = dt(),
            n = t.queue;
        if (n === null) throw Error(m(311));
        n.lastRenderedReducer = e;
        var r = ke,
            l = r.baseQueue,
            i = n.pending;
        if (i !== null) {
            if (l !== null) {
                var s = l.next;
                l.next = i.next, i.next = s
            }
            r.baseQueue = l = i, n.pending = null
        }
        if (l !== null) {
            i = l.next, r = r.baseState;
            var f = s = null,
                y = null,
                N = i;
            do {
                var D = N.lane;
                if (($t & D) === D) y !== null && (y = y.next = {
                    lane: 0,
                    action: N.action,
                    hasEagerState: N.hasEagerState,
                    eagerState: N.eagerState,
                    next: null
                }), r = N.hasEagerState ? N.eagerState : e(r, N.action);
                else {
                    var G = {
                        lane: D,
                        action: N.action,
                        hasEagerState: N.hasEagerState,
                        eagerState: N.eagerState,
                        next: null
                    };
                    y === null ? (f = y = G, s = r) : y = y.next = G, me.lanes |= D, en |= D
                }
                N = N.next
            } while (N !== null && N !== i);
            y === null ? s = r : y.next = f, st(r, t.memoizedState) || (He = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = y, n.lastRenderedState = r
        }
        if (e = n.interleaved, e !== null) {
            l = e;
            do i = l.lane, me.lanes |= i, en |= i, l = l.next; while (l !== e)
        } else l === null && (n.lanes = 0);
        return [t.memoizedState, n.dispatch]
    }

    function lr(e) {
        var t = dt(),
            n = t.queue;
        if (n === null) throw Error(m(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
            l = n.pending,
            i = t.memoizedState;
        if (l !== null) {
            n.pending = null;
            var s = l = l.next;
            do i = e(i, s.action), s = s.next; while (s !== l);
            st(i, t.memoizedState) || (He = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
        }
        return [i, r]
    }

    function Ui() {}

    function Ai(e, t) {
        var n = me,
            r = dt(),
            l = t(),
            i = !st(r.memoizedState, l);
        if (i && (r.memoizedState = l, He = !0), r = r.queue, xn(Qi.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ee !== null && Ee.memoizedState.tag & 1) {
            if (n.flags |= 2048, _n(9, Hi.bind(null, n, r, l, t), void 0, null), ge === null) throw Error(m(349));
            $t & 30 || Bi(n, t, l)
        }
        return l
    }

    function Bi(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, t = me.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
    }

    function Hi(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Wi(t) && Je(e, 1, -1)
    }

    function Qi(e, t, n) {
        return n(function() {
            Wi(t) && Je(e, 1, -1)
        })
    }

    function Wi(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !st(e, n)
        } catch {
            return !0
        }
    }

    function ml(e) {
        var t = yt();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ot,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = Ys.bind(null, me, e), [t.memoizedState, e]
    }

    function _n(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, t = me.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
    }

    function Vi() {
        return dt().memoizedState
    }

    function ir(e, t, n, r) {
        var l = yt();
        me.flags |= e, l.memoizedState = _n(1 | t, n, void 0, r === void 0 ? null : r)
    }

    function or(e, t, n, r) {
        var l = dt();
        r = r === void 0 ? null : r;
        var i = void 0;
        if (ke !== null) {
            var s = ke.memoizedState;
            if (i = s.destroy, r !== null && fl(r, s.deps)) {
                l.memoizedState = _n(t, n, i, r);
                return
            }
        }
        me.flags |= e, l.memoizedState = _n(1 | t, n, i, r)
    }

    function vl(e, t) {
        return ir(8390656, 8, e, t)
    }

    function xn(e, t) {
        return or(2048, 8, e, t)
    }

    function Gi(e, t) {
        return or(4, 2, e, t)
    }

    function Xi(e, t) {
        return or(4, 4, e, t)
    }

    function Yi(e, t) {
        if (typeof t == "function") return e = e(), t(e),
            function() {
                t(null)
            };
        if (t != null) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function Ki(e, t, n) {
        return n = n != null ? n.concat([e]) : null, or(4, 4, Yi.bind(null, t, e), n)
    }

    function hl() {}

    function Ji(e, t) {
        var n = dt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && fl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
    }

    function Zi(e, t) {
        var n = dt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && fl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
    }

    function Gs(e, t) {
        var n = ee;
        ee = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = Ke.transition;
        Ke.transition = {};
        try {
            e(!1), t()
        } finally {
            ee = n, Ke.transition = r
        }
    }

    function qi() {
        return dt().memoizedState
    }

    function Xs(e, t, n) {
        var r = zt(e);
        n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, $i(e) ? bi(t, n) : (eo(e, t, n), n = Me(), e = Je(e, r, n), e !== null && to(e, t, r))
    }

    function Ys(e, t, n) {
        var r = zt(e),
            l = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if ($i(e)) bi(t, l);
        else {
            eo(e, t, l);
            var i = e.alternate;
            if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
                var s = t.lastRenderedState,
                    f = i(s, n);
                if (l.hasEagerState = !0, l.eagerState = f, st(f, s)) return
            } catch {} finally {}
            n = Me(), e = Je(e, r, n), e !== null && to(e, t, r)
        }
    }

    function $i(e) {
        var t = e.alternate;
        return e === me || t !== null && t === me
    }

    function bi(e, t) {
        wn = nr = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
    }

    function eo(e, t, n) {
        ge !== null && e.mode & 1 && !(q & 2) ? (e = t.interleaved, e === null ? (n.next = n, ct === null ? ct = [t] : ct.push(t)) : (n.next = e.next, e.next = n), t.interleaved = n) : (e = t.pending, e === null ? n.next = n : (n.next = e.next, e.next = n), t.pending = n)
    }

    function to(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Vr(e, n)
        }
    }
    var ur = {
            readContext: Ve,
            useCallback: ze,
            useContext: ze,
            useEffect: ze,
            useImperativeHandle: ze,
            useInsertionEffect: ze,
            useLayoutEffect: ze,
            useMemo: ze,
            useReducer: ze,
            useRef: ze,
            useState: ze,
            useDebugValue: ze,
            useDeferredValue: ze,
            useTransition: ze,
            useMutableSource: ze,
            useSyncExternalStore: ze,
            useId: ze,
            unstable_isNewReconciler: !1
        },
        Ks = {
            readContext: Ve,
            useCallback: function(e, t) {
                return yt().memoizedState = [e, t === void 0 ? null : t], e
            },
            useContext: Ve,
            useEffect: vl,
            useImperativeHandle: function(e, t, n) {
                return n = n != null ? n.concat([e]) : null, ir(4194308, 4, Yi.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return ir(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                return ir(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var n = yt();
                return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
            },
            useReducer: function(e, t, n) {
                var r = yt();
                return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }, r.queue = e, e = e.dispatch = Xs.bind(null, me, e), [r.memoizedState, e]
            },
            useRef: function(e) {
                var t = yt();
                return e = {
                    current: e
                }, t.memoizedState = e
            },
            useState: ml,
            useDebugValue: hl,
            useDeferredValue: function(e) {
                var t = ml(e),
                    n = t[0],
                    r = t[1];
                return vl(function() {
                    var l = Ke.transition;
                    Ke.transition = {};
                    try {
                        r(e)
                    } finally {
                        Ke.transition = l
                    }
                }, [e]), n
            },
            useTransition: function() {
                var e = ml(!1),
                    t = e[0];
                return e = Gs.bind(null, e[1]), yt().memoizedState = e, [t, e]
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(e, t, n) {
                var r = me,
                    l = yt();
                if (de) {
                    if (n === void 0) throw Error(m(407));
                    n = n()
                } else {
                    if (n = t(), ge === null) throw Error(m(349));
                    $t & 30 || Bi(r, t, n)
                }
                l.memoizedState = n;
                var i = {
                    value: n,
                    getSnapshot: t
                };
                return l.queue = i, vl(Qi.bind(null, r, i, e), [e]), r.flags |= 2048, _n(9, Hi.bind(null, r, i, n, t), void 0, null), n
            },
            useId: function() {
                var e = yt(),
                    t = ge.identifierPrefix;
                if (de) {
                    var n = gt,
                        r = ht;
                    n = (r & ~(1 << 32 - tt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = En++, 0 < n && (t += "H" + n.toString(32)), t += ":"
                } else n = Vs++, t = ":" + t + "r" + n.toString(32) + ":";
                return e.memoizedState = t
            },
            unstable_isNewReconciler: !1
        },
        Js = {
            readContext: Ve,
            useCallback: Ji,
            useContext: Ve,
            useEffect: xn,
            useImperativeHandle: Ki,
            useInsertionEffect: Gi,
            useLayoutEffect: Xi,
            useMemo: Zi,
            useReducer: rr,
            useRef: Vi,
            useState: function() {
                return rr(Ot)
            },
            useDebugValue: hl,
            useDeferredValue: function(e) {
                var t = rr(Ot),
                    n = t[0],
                    r = t[1];
                return xn(function() {
                    var l = Ke.transition;
                    Ke.transition = {};
                    try {
                        r(e)
                    } finally {
                        Ke.transition = l
                    }
                }, [e]), n
            },
            useTransition: function() {
                var e = rr(Ot)[0],
                    t = dt().memoizedState;
                return [e, t]
            },
            useMutableSource: Ui,
            useSyncExternalStore: Ai,
            useId: qi,
            unstable_isNewReconciler: !1
        },
        Zs = {
            readContext: Ve,
            useCallback: Ji,
            useContext: Ve,
            useEffect: xn,
            useImperativeHandle: Ki,
            useInsertionEffect: Gi,
            useLayoutEffect: Xi,
            useMemo: Zi,
            useReducer: lr,
            useRef: Vi,
            useState: function() {
                return lr(Ot)
            },
            useDebugValue: hl,
            useDeferredValue: function(e) {
                var t = lr(Ot),
                    n = t[0],
                    r = t[1];
                return xn(function() {
                    var l = Ke.transition;
                    Ke.transition = {};
                    try {
                        r(e)
                    } finally {
                        Ke.transition = l
                    }
                }, [e]), n
            },
            useTransition: function() {
                var e = lr(Ot)[0],
                    t = dt().memoizedState;
                return [e, t]
            },
            useMutableSource: Ui,
            useSyncExternalStore: Ai,
            useId: qi,
            unstable_isNewReconciler: !1
        };

    function gl(e, t) {
        try {
            var n = "",
                r = t;
            do n += Ws(r), r = r.return; while (r);
            var l = n
        } catch (i) {
            l = `
Error generating stack: ` + i.message + `
` + i.stack
        }
        return {
            value: e,
            source: t,
            stack: l
        }
    }

    function yl(e, t) {
        try {
            console.error(t.value)
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    var qs = typeof WeakMap == "function" ? WeakMap : Map;

    function no(e, t, n) {
        n = vt(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            xr || (xr = !0, jl = r), yl(e, t)
        }, n
    }

    function ro(e, t, n) {
        n = vt(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var l = t.value;
            n.payload = function() {
                return r(l)
            }, n.callback = function() {
                yl(e, t)
            }
        }
        var i = e.stateNode;
        return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
            yl(e, t), typeof r != "function" && (Pt === null ? Pt = new Set([this]) : Pt.add(this));
            var s = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: s !== null ? s : ""
            })
        }), n
    }

    function lo(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new qs;
            var l = new Set;
            r.set(t, l)
        } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
        l.has(n) || (l.add(n), e = fa.bind(null, e, t, n), t.then(e, e))
    }

    function io(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return
        } while (e !== null);
        return null
    }

    function oo(e, t, n, r, l) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vt(-1, 1), t.tag = 2, xt(n, t))), n.lanes |= 1), e)
    }

    function pt(e) {
        e.flags |= 4
    }

    function uo(e, t) {
        if (e !== null && e.child === t.child) return !0;
        if (t.flags & 16) return !1;
        for (e = t.child; e !== null;) {
            if (e.flags & 12854 || e.subtreeFlags & 12854) return !1;
            e = e.sibling
        }
        return !0
    }
    var Pn, kn, sr, ar;
    if (et) Pn = function(e, t) {
        for (var n = t.child; n !== null;) {
            if (n.tag === 5 || n.tag === 6) oe(e, n.stateNode);
            else if (n.tag !== 4 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === t) break;
            for (; n.sibling === null;) {
                if (n.return === null || n.return === t) return;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }, kn = function() {}, sr = function(e, t, n, r, l) {
        if (e = e.memoizedProps, e !== r) {
            var i = t.stateNode,
                s = ft(Ye.current);
            n = Le(i, n, e, r, l, s), (t.updateQueue = n) && pt(t)
        }
    }, ar = function(e, t, n, r) {
        n !== r && pt(t)
    };
    else if (Dn) {
        Pn = function(e, t, n, r) {
            for (var l = t.child; l !== null;) {
                if (l.tag === 5) {
                    var i = l.stateNode;
                    n && r && (i = di(i, l.type, l.memoizedProps, l)), oe(e, i)
                } else if (l.tag === 6) i = l.stateNode, n && r && (i = pi(i, l.memoizedProps, l)), oe(e, i);
                else if (l.tag !== 4) {
                    if (l.tag === 22 && l.memoizedState !== null) i = l.child, i !== null && (i.return = l), Pn(e, l, !0, !0);
                    else if (l.child !== null) {
                        l.child.return = l, l = l.child;
                        continue
                    }
                }
                if (l === t) break;
                for (; l.sibling === null;) {
                    if (l.return === null || l.return === t) return;
                    l = l.return
                }
                l.sibling.return = l.return, l = l.sibling
            }
        };
        var so = function(e, t, n, r) {
            for (var l = t.child; l !== null;) {
                if (l.tag === 5) {
                    var i = l.stateNode;
                    n && r && (i = di(i, l.type, l.memoizedProps, l)), ci(e, i)
                } else if (l.tag === 6) i = l.stateNode, n && r && (i = pi(i, l.memoizedProps, l)), ci(e, i);
                else if (l.tag !== 4) {
                    if (l.tag === 22 && l.memoizedState !== null) i = l.child, i !== null && (i.return = l), so(e, l, !0, !0);
                    else if (l.child !== null) {
                        l.child.return = l, l = l.child;
                        continue
                    }
                }
                if (l === t) break;
                for (; l.sibling === null;) {
                    if (l.return === null || l.return === t) return;
                    l = l.return
                }
                l.sibling.return = l.return, l = l.sibling
            }
        };
        kn = function(e, t) {
            var n = t.stateNode;
            if (!uo(e, t)) {
                e = n.containerInfo;
                var r = ai(e);
                so(r, t, !1, !1), n.pendingChildren = r, pt(t), cs(e, r)
            }
        }, sr = function(e, t, n, r, l) {
            var i = e.stateNode,
                s = e.memoizedProps;
            if ((e = uo(e, t)) && s === r) t.stateNode = i;
            else {
                var f = t.stateNode,
                    y = ft(Ye.current),
                    N = null;
                s !== r && (N = Le(f, n, s, r, l, y)), e && N === null ? t.stateNode = i : (i = as(i, N, n, s, r, t, e, f), ue(i, n, r, l, y) && pt(t), t.stateNode = i, e ? pt(t) : Pn(i, t, !1, !1))
            }
        }, ar = function(e, t, n, r) {
            n !== r ? (e = ft(Zt.current), n = ft(Ye.current), t.stateNode = ot(r, e, n, t), pt(t)) : t.stateNode = e.stateNode
        }
    } else kn = function() {}, sr = function() {}, ar = function() {};

    function zn(e, t) {
        if (!de) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
    }

    function Ce(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            n = 0,
            r = 0;
        if (t)
            for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
        else
            for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t
    }

    function $s(e, t, n) {
        var r = t.pendingProps;
        switch (rl(t), t.tag) {
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
                return Ce(t), null;
            case 1:
                return Ie(t.type) && Un(), Ce(t), null;
            case 3:
                return r = t.stateNode, qt(), fe(Te), fe(Pe), cl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (hn(t) ? pt(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, rt !== null && (Al(rt), rt = null))), kn(e, t), Ce(t), null;
            case 5:
                sl(t), n = ft(Zt.current);
                var l = t.type;
                if (e !== null && t.stateNode != null) sr(e, t, l, r, n), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(m(166));
                        return Ce(t), null
                    }
                    if (e = ft(Ye.current), hn(t)) {
                        if (!Ue) throw Error(m(175));
                        e = ys(t.stateNode, t.type, t.memoizedProps, n, e, t, !vn), t.updateQueue = e, e !== null && pt(t)
                    } else {
                        var i = W(l, r, n, e, t);
                        Pn(i, t, !1, !1), t.stateNode = i, ue(i, l, r, n, e) && pt(t)
                    }
                    t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
                }
                return Ce(t), null;
            case 6:
                if (e && t.stateNode != null) ar(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
                    if (e = ft(Zt.current), n = ft(Ye.current), hn(t)) {
                        if (!Ue) throw Error(m(176));
                        if (e = t.stateNode, r = t.memoizedProps, (n = Ss(e, r, t, !vn)) && (l = Ae, l !== null)) switch (i = (l.mode & 1) !== 0, l.tag) {
                            case 3:
                                zs(l.stateNode.containerInfo, e, r, i);
                                break;
                            case 5:
                                Cs(l.type, l.memoizedProps, l.stateNode, e, r, i)
                        }
                        n && pt(t)
                    } else t.stateNode = ot(r, e, n, t)
                }
                return Ce(t), null;
            case 13:
                if (fe(pe), r = t.memoizedState, de && Be !== null && t.mode & 1 && !(t.flags & 128)) {
                    for (e = Be; e;) e = fn(e);
                    return Kt(), t.flags |= 98560, t
                }
                if (r !== null && r.dehydrated !== null) {
                    if (r = hn(t), e === null) {
                        if (!r) throw Error(m(318));
                        if (!Ue) throw Error(m(344));
                        if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
                        ws(e, t)
                    } else Kt(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    return Ce(t), null
                }
                return rt !== null && (Al(rt), rt = null), t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, n = !1, e === null ? hn(t) : n = e.memoizedState !== null, r && !n && (t.child.flags |= 8192, t.mode & 1 && (e === null || pe.current & 1 ? Se === 0 && (Se = 3) : Hl())), t.updateQueue !== null && (t.flags |= 4), Ce(t), null);
            case 4:
                return qt(), kn(e, t), e === null && Uu(t.stateNode.containerInfo), Ce(t), null;
            case 10:
                return qr(t.type._context), Ce(t), null;
            case 17:
                return Ie(t.type) && Un(), Ce(t), null;
            case 19:
                if (fe(pe), l = t.memoizedState, l === null) return Ce(t), null;
                if (r = (t.flags & 128) !== 0, i = l.rendering, i === null)
                    if (r) zn(l, !1);
                    else {
                        if (Se !== 0 || e !== null && e.flags & 128)
                            for (e = t.child; e !== null;) {
                                if (i = er(e), i !== null) {
                                    for (t.flags |= 128, zn(l, !1), e = i.updateQueue, e !== null && (t.updateQueue = e, t.flags |= 4), t.subtreeFlags = 0, e = n, r = t.child; r !== null;) n = r, l = e, n.flags &= 14680066, i = n.alternate, i === null ? (n.childLanes = 0, n.lanes = l, n.child = null, n.subtreeFlags = 0, n.memoizedProps = null, n.memoizedState = null, n.updateQueue = null, n.dependencies = null, n.stateNode = null) : (n.childLanes = i.childLanes, n.lanes = i.lanes, n.child = i.child, n.subtreeFlags = 0, n.deletions = null, n.memoizedProps = i.memoizedProps, n.memoizedState = i.memoizedState, n.updateQueue = i.updateQueue, n.type = i.type, l = i.dependencies, n.dependencies = l === null ? null : {
                                        lanes: l.lanes,
                                        firstContext: l.firstContext
                                    }), r = r.sibling;
                                    return ae(pe, pe.current & 1 | 2), t.child
                                }
                                e = e.sibling
                            }
                        l.tail !== null && we() > Fl && (t.flags |= 128, r = !0, zn(l, !1), t.lanes = 4194304)
                    }
                else {
                    if (!r)
                        if (e = er(i), e !== null) {
                            if (t.flags |= 128, r = !0, e = e.updateQueue, e !== null && (t.updateQueue = e, t.flags |= 4), zn(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !de) return Ce(t), null
                        } else 2 * we() - l.renderingStartTime > Fl && n !== 1073741824 && (t.flags |= 128, r = !0, zn(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (i.sibling = t.child, t.child = i) : (e = l.last, e !== null ? e.sibling = i : t.child = i, l.last = i)
                }
                return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = we(), t.sibling = null, e = pe.current, ae(pe, r ? e & 1 | 2 : e & 1), t) : (Ce(t), null);
            case 22:
            case 23:
                return Bl(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Qe & 1073741824 && (Ce(t), et && t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(m(156, t.tag))
    }
    var bs = M.ReactCurrentOwner,
        He = !1;

    function Re(e, t, n, r) {
        t.child = e === null ? ji(t, null, n, r) : Jt(t, e.child, n, r)
    }

    function ao(e, t, n, r, l) {
        n = n.render;
        var i = t.ref;
        return Gt(t, l), r = dl(e, t, n, r, i, l), n = pl(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, St(e, t, l)) : (de && n && nl(t), t.flags |= 1, Re(e, t, r, l), t.child)
    }

    function co(e, t, n, r, l) {
        if (e === null) {
            var i = n.type;
            return typeof i == "function" && !Ql(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, fo(e, t, i, r, l)) : (e = Mr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (i = e.child, !(e.lanes & l)) {
            var s = i.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Gn, n(s, r) && e.ref === t.ref) return St(e, t, l)
        }
        return t.flags |= 1, e = Nt(i, r), e.ref = t.ref, e.return = t, t.child = e
    }

    function fo(e, t, n, r, l) {
        if (e !== null && Gn(e.memoizedProps, r) && e.ref === t.ref)
            if (He = !1, (e.lanes & l) !== 0) e.flags & 131072 && (He = !0);
            else return t.lanes = e.lanes, St(e, t, l);
        return Sl(e, t, n, r, l)
    }

    function po(e, t, n) {
        var r = t.pendingProps,
            l = r.children,
            i = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden")
            if (!(t.mode & 1)) t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, ae(bt, Qe), Qe |= n;
            else if (n & 1073741824) t.memoizedState = {
            baseLanes: 0,
            cachePool: null
        }, r = i !== null ? i.baseLanes : n, ae(bt, Qe), Qe |= r;
        else return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
            baseLanes: e,
            cachePool: null
        }, t.updateQueue = null, ae(bt, Qe), Qe |= e, null;
        else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ae(bt, Qe), Qe |= r;
        return Re(e, t, l, n), t.child
    }

    function mo(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
    }

    function Sl(e, t, n, r, l) {
        var i = Ie(n) ? Lt : Pe.current;
        return i = Wt(t, i), Gt(t, l), n = dl(e, t, n, r, i, l), r = pl(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, St(e, t, l)) : (de && r && nl(t), t.flags |= 1, Re(e, t, n, l), t.child)
    }

    function vo(e, t, n, r, l) {
        if (Ie(n)) {
            var i = !0;
            An(t)
        } else i = !1;
        if (Gt(t, l), t.stateNode === null) e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), Ni(t, n, r), tl(t, n, r, l), r = !0;
        else if (e === null) {
            var s = t.stateNode,
                f = t.memoizedProps;
            s.props = f;
            var y = s.context,
                N = n.contextType;
            typeof N == "object" && N !== null ? N = Ve(N) : (N = Ie(n) ? Lt : Pe.current, N = Wt(t, N));
            var D = n.getDerivedStateFromProps,
                G = typeof D == "function" || typeof s.getSnapshotBeforeUpdate == "function";
            G || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (f !== r || y !== N) && Ri(t, s, r, N), _t = !1;
            var Q = t.memoizedState;
            s.state = Q, Jn(t, r, s, l), y = t.memoizedState, f !== r || Q !== y || Te.current || _t ? (typeof D == "function" && (el(t, n, D, r), y = t.memoizedState), (f = _t || Ci(t, n, f, r, Q, y, N)) ? (G || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = N, r = f) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
        } else {
            s = t.stateNode, xi(e, t), f = t.memoizedProps, N = t.type === t.elementType ? f : nt(t.type, f), s.props = N, G = t.pendingProps, Q = s.context, y = n.contextType, typeof y == "object" && y !== null ? y = Ve(y) : (y = Ie(n) ? Lt : Pe.current, y = Wt(t, y));
            var se = n.getDerivedStateFromProps;
            (D = typeof se == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (f !== G || Q !== y) && Ri(t, s, r, y), _t = !1, Q = t.memoizedState, s.state = Q, Jn(t, r, s, l);
            var B = t.memoizedState;
            f !== G || Q !== B || Te.current || _t ? (typeof se == "function" && (el(t, n, se, r), B = t.memoizedState), (N = _t || Ci(t, n, N, r, Q, B, y) || !1) ? (D || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, B, y), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, B, y)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || f === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = B), s.props = r, s.state = B, s.context = y, r = N) : (typeof s.componentDidUpdate != "function" || f === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), r = !1)
        }
        return wl(e, t, n, r, i, l)
    }

    function wl(e, t, n, r, l, i) {
        mo(e, t);
        var s = (t.flags & 128) !== 0;
        if (!r && !s) return l && yi(t, n, !1), St(e, t, i);
        r = t.stateNode, bs.current = t;
        var f = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && s ? (t.child = Jt(t, e.child, null, i), t.child = Jt(t, null, f, i)) : Re(e, t, f, i), t.memoizedState = r.state, l && yi(t, n, !0), t.child
    }

    function ho(e) {
        var t = e.stateNode;
        t.pendingContext ? hi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && hi(e, t.context, !1), ul(e, t.containerInfo)
    }

    function go(e, t, n, r, l) {
        return Kt(), ol(l), t.flags |= 256, Re(e, t, n, r), t.child
    }
    var cr = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function fr(e) {
        return {
            baseLanes: e,
            cachePool: null
        }
    }

    function yo(e, t, n) {
        var r = t.pendingProps,
            l = pe.current,
            i = !1,
            s = (t.flags & 128) !== 0,
            f;
        if ((f = s) || (f = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), f ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ae(pe, l & 1), e === null) return il(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? Dr(e) ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = {
            mode: "hidden",
            children: l
        }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = Lr(l, r, 0, null), e = Bt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = fr(n), t.memoizedState = cr, e) : El(t, l));
        if (l = e.memoizedState, l !== null) {
            if (f = l.dehydrated, f !== null) {
                if (s) return t.flags & 256 ? (t.flags &= -257, dr(e, t, n, Error(m(422)))) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Lr({
                    mode: "visible",
                    children: r.children
                }, l, 0, null), i = Bt(i, l, n, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Jt(t, e.child, null, n), t.child.memoizedState = fr(n), t.memoizedState = cr, i);
                if (!(t.mode & 1)) t = dr(e, t, n, null);
                else if (Dr(f)) t = dr(e, t, n, Error(m(419)));
                else if (r = (n & e.childLanes) !== 0, He || r) {
                    if (r = ge, r !== null) {
                        switch (n & -n) {
                            case 4:
                                i = 2;
                                break;
                            case 16:
                                i = 8;
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
                                i = 32;
                                break;
                            case 536870912:
                                i = 268435456;
                                break;
                            default:
                                i = 0
                        }
                        r = i & (r.suspendedLanes | n) ? 0 : i, r !== 0 && r !== l.retryLane && (l.retryLane = r, Je(e, r, -1))
                    }
                    Hl(), t = dr(e, t, n, Error(m(421)))
                } else mi(f) ? (t.flags |= 128, t.child = e.child, t = da.bind(null, e), ms(f, t), t = null) : (n = l.treeContext, Ue && (Be = gs(f), Ae = t, de = !0, rt = null, vn = !1, n !== null && (Ge[Xe++] = ht, Ge[Xe++] = gt, Ge[Xe++] = Tt, ht = n.id, gt = n.overflow, Tt = t)), t = El(t, t.pendingProps.children), t.flags |= 4096);
                return t
            }
            return i ? (r = wo(e, t, r.children, r.fallback, n), i = t.child, l = e.child.memoizedState, i.memoizedState = l === null ? fr(n) : {
                baseLanes: l.baseLanes | n,
                cachePool: null
            }, i.childLanes = e.childLanes & ~n, t.memoizedState = cr, r) : (n = So(e, t, r.children, n), t.memoizedState = null, n)
        }
        return i ? (r = wo(e, t, r.children, r.fallback, n), i = t.child, l = e.child.memoizedState, i.memoizedState = l === null ? fr(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null
        }, i.childLanes = e.childLanes & ~n, t.memoizedState = cr, r) : (n = So(e, t, r.children, n), t.memoizedState = null, n)
    }

    function El(e, t) {
        return t = Lr({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t
    }

    function So(e, t, n, r) {
        var l = e.child;
        return e = l.sibling, n = Nt(l, {
            mode: "visible",
            children: n
        }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n
    }

    function wo(e, t, n, r, l) {
        var i = t.mode;
        e = e.child;
        var s = e.sibling,
            f = {
                mode: "hidden",
                children: n
            };
        return !(i & 1) && t.child !== e ? (n = t.child, n.childLanes = 0, n.pendingProps = f, t.deletions = null) : (n = Nt(e, f), n.subtreeFlags = e.subtreeFlags & 14680064), s !== null ? r = Nt(s, r) : (r = Bt(r, i, l, null), r.flags |= 2), r.return = t, n.return = t, n.sibling = r, t.child = n, r
    }

    function dr(e, t, n, r) {
        return r !== null && ol(r), Jt(t, e.child, null, n), e = El(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function Eo(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), $r(e.return, t, n)
    }

    function _l(e, t, n, r, l) {
        var i = e.memoizedState;
        i === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: l
        } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l)
    }

    function _o(e, t, n) {
        var r = t.pendingProps,
            l = r.revealOrder,
            i = r.tail;
        if (Re(e, t, r.children, n), r = pe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && Eo(e, n, t);
                else if (e.tag === 19) Eo(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            r &= 1
        }
        if (ae(pe, r), !(t.mode & 1)) t.memoizedState = null;
        else switch (l) {
            case "forwards":
                for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && er(e) === null && (l = n), n = n.sibling;
                n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), _l(t, !1, l, n, i);
                break;
            case "backwards":
                for (n = null, l = t.child, t.child = null; l !== null;) {
                    if (e = l.alternate, e !== null && er(e) === null) {
                        t.child = l;
                        break
                    }
                    e = l.sibling, l.sibling = n, n = l, l = e
                }
                _l(t, !0, n, null, i);
                break;
            case "together":
                _l(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function St(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), en |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(m(153));
        if (t.child !== null) {
            for (e = t.child, n = Nt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Nt(e, e.pendingProps), n.return = t;
            n.sibling = null
        }
        return t.child
    }

    function ea(e, t, n) {
        switch (t.tag) {
            case 3:
                ho(t), Kt();
                break;
            case 5:
                Di(t);
                break;
            case 1:
                Ie(t.type) && An(t);
                break;
            case 4:
                ul(t, t.stateNode.containerInfo);
                break;
            case 10:
                _i(t, t.type._context, t.memoizedProps.value);
                break;
            case 13:
                var r = t.memoizedState;
                if (r !== null) return r.dehydrated !== null ? (ae(pe, pe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? yo(e, t, n) : (ae(pe, pe.current & 1), e = St(e, t, n), e !== null ? e.sibling : null);
                ae(pe, pe.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return _o(e, t, n);
                    t.flags |= 128
                }
                var l = t.memoizedState;
                if (l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ae(pe, pe.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, po(e, t, n)
        }
        return St(e, t, n)
    }

    function ta(e, t) {
        switch (rl(t), t.tag) {
            case 1:
                return Ie(t.type) && Un(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return qt(), fe(Te), fe(Pe), cl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return sl(t), null;
            case 13:
                if (fe(pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(m(340));
                    Kt()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return fe(pe), null;
            case 4:
                return qt(), null;
            case 10:
                return qr(t.type._context), null;
            case 22:
            case 23:
                return Bl(), null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var pr = !1,
        Ft = !1,
        na = typeof WeakSet == "function" ? WeakSet : Set,
        T = null;

    function mr(e, t) {
        var n = e.ref;
        if (n !== null)
            if (typeof n == "function") try {
                n(null)
            } catch (r) {
                je(e, t, r)
            } else n.current = null
    }

    function xl(e, t, n) {
        try {
            n()
        } catch (r) {
            je(e, t, r)
        }
    }
    var xo = !1;

    function ra(e, t) {
        for (H(e.containerInfo), T = t; T !== null;)
            if (e = T, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, T = t;
            else
                for (; T !== null;) {
                    e = T;
                    try {
                        var n = e.alternate;
                        if (e.flags & 1024) switch (e.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (n !== null) {
                                    var r = n.memoizedProps,
                                        l = n.memoizedState,
                                        i = e.stateNode,
                                        s = i.getSnapshotBeforeUpdate(e.elementType === e.type ? r : nt(e.type, r), l);
                                    i.__reactInternalSnapshotBeforeUpdate = s
                                }
                                break;
                            case 3:
                                et && ss(e.stateNode.containerInfo);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(m(163))
                        }
                    } catch (f) {
                        je(e, e.return, f)
                    }
                    if (t = e.sibling, t !== null) {
                        t.return = e.return, T = t;
                        break
                    }
                    T = e.return
                }
        return n = xo, xo = !1, n
    }

    function jt(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var l = r = r.next;
            do {
                if ((l.tag & e) === e) {
                    var i = l.destroy;
                    l.destroy = void 0, i !== void 0 && xl(t, n, i)
                }
                l = l.next
            } while (l !== r)
        }
    }

    function Cn(e, t) {
        if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r()
                }
                n = n.next
            } while (n !== t)
        }
    }

    function Pl(e) {
        var t = e.ref;
        if (t !== null) {
            var n = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = De(n);
                    break;
                default:
                    e = n
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }

    function Po(e, t, n) {
        if (ut && typeof ut.onCommitFiberUnmount == "function") try {
            ut.onCommitFiberUnmount(Wn, t)
        } catch {}
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (e = t.updateQueue, e !== null && (e = e.lastEffect, e !== null)) {
                    var r = e = e.next;
                    do {
                        var l = r,
                            i = l.destroy;
                        l = l.tag, i !== void 0 && (l & 2 || l & 4) && xl(t, n, i), r = r.next
                    } while (r !== e)
                }
                break;
            case 1:
                if (mr(t, n), e = t.stateNode, typeof e.componentWillUnmount == "function") try {
                    e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
                } catch (s) {
                    je(t, n, s)
                }
                break;
            case 5:
                mr(t, n);
                break;
            case 4:
                et ? Mo(e, t, n) : Dn && Dn && (t = t.stateNode.containerInfo, n = ai(t), fi(t, n))
        }
    }

    function ko(e, t, n) {
        for (var r = t;;)
            if (Po(e, r, n), r.child === null || et && r.tag === 4) {
                if (r === t) break;
                for (; r.sibling === null;) {
                    if (r.return === null || r.return === t) return;
                    r = r.return
                }
                r.sibling.return = r.return, r = r.sibling
            } else r.child.return = r, r = r.child
    }

    function zo(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, zo(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Bu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }

    function Co(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }

    function No(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || Co(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function Ro(e) {
        if (et) {
            e: {
                for (var t = e.return; t !== null;) {
                    if (Co(t)) break e;
                    t = t.return
                }
                throw Error(m(160))
            }
            var n = t;
            switch (n.tag) {
                case 5:
                    t = n.stateNode, n.flags & 32 && (si(t), n.flags &= -33), n = No(e), zl(e, n, t);
                    break;
                case 3:
                case 4:
                    t = n.stateNode.containerInfo, n = No(e), kl(e, n, t);
                    break;
                default:
                    throw Error(m(161))
            }
        }
    }

    function kl(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? ts(n, e, t) : Zu(n, e);
        else if (r !== 4 && (e = e.child, e !== null))
            for (kl(e, t, n), e = e.sibling; e !== null;) kl(e, t, n), e = e.sibling
    }

    function zl(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? es(n, e, t) : Ju(n, e);
        else if (r !== 4 && (e = e.child, e !== null))
            for (zl(e, t, n), e = e.sibling; e !== null;) zl(e, t, n), e = e.sibling
    }

    function Mo(e, t, n) {
        for (var r = t, l = !1, i, s;;) {
            if (!l) {
                l = r.return;
                e: for (;;) {
                    if (l === null) throw Error(m(160));
                    switch (i = l.stateNode, l.tag) {
                        case 5:
                            s = !1;
                            break e;
                        case 3:
                            i = i.containerInfo, s = !0;
                            break e;
                        case 4:
                            i = i.containerInfo, s = !0;
                            break e
                    }
                    l = l.return
                }
                l = !0
            }
            if (r.tag === 5 || r.tag === 6) ko(e, r, n), s ? rs(i, r.stateNode) : ns(i, r.stateNode);
            else if (r.tag === 18) s ? Ps(i, r.stateNode) : xs(i, r.stateNode);
            else if (r.tag === 4) {
                if (r.child !== null) {
                    i = r.stateNode.containerInfo, s = !0, r.child.return = r, r = r.child;
                    continue
                }
            } else if (Po(e, r, n), r.child !== null) {
                r.child.return = r, r = r.child;
                continue
            }
            if (r === t) break;
            for (; r.sibling === null;) {
                if (r.return === null || r.return === t) return;
                r = r.return, r.tag === 4 && (l = !1)
            }
            r.sibling.return = r.return, r = r.sibling
        }
    }

    function Cl(e, t) {
        if (et) {
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    jt(3, t, t.return), Cn(3, t), jt(5, t, t.return);
                    return;
                case 1:
                    return;
                case 5:
                    var n = t.stateNode;
                    if (n != null) {
                        var r = t.memoizedProps;
                        e = e !== null ? e.memoizedProps : r;
                        var l = t.type,
                            i = t.updateQueue;
                        t.updateQueue = null, i !== null && bu(n, i, l, e, r, t)
                    }
                    return;
                case 6:
                    if (t.stateNode === null) throw Error(m(162));
                    n = t.memoizedProps, qu(t.stateNode, e !== null ? e.memoizedProps : n, n);
                    return;
                case 3:
                    Ue && e !== null && e.memoizedState.isDehydrated && vi(t.stateNode.containerInfo);
                    return;
                case 12:
                    return;
                case 13:
                    vr(t);
                    return;
                case 19:
                    vr(t);
                    return;
                case 17:
                    return
            }
            throw Error(m(163))
        }
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                jt(3, t, t.return), Cn(3, t), jt(5, t, t.return);
                return;
            case 12:
                return;
            case 13:
                vr(t);
                return;
            case 19:
                vr(t);
                return;
            case 3:
                Ue && e !== null && e.memoizedState.isDehydrated && vi(t.stateNode.containerInfo);
                break;
            case 22:
            case 23:
                return
        }
        e: if (Dn) {
            switch (t.tag) {
                case 1:
                case 5:
                case 6:
                    break e;
                case 3:
                case 4:
                    t = t.stateNode, fi(t.containerInfo, t.pendingChildren);
                    break e
            }
            throw Error(m(163))
        }
    }

    function vr(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new na), t.forEach(function(r) {
                var l = pa.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(l, l))
            })
        }
    }

    function la(e, t) {
        for (T = t; T !== null;) {
            t = T;
            var n = t.deletions;
            if (n !== null)
                for (var r = 0; r < n.length; r++) {
                    var l = n[r];
                    try {
                        var i = e;
                        et ? Mo(i, l, t) : ko(i, l, t);
                        var s = l.alternate;
                        s !== null && (s.return = null), l.return = null
                    } catch (A) {
                        je(l, t, A)
                    }
                }
            if (n = t.child, t.subtreeFlags & 12854 && n !== null) n.return = t, T = n;
            else
                for (; T !== null;) {
                    t = T;
                    try {
                        var f = t.flags;
                        if (f & 32 && et && si(t.stateNode), f & 512) {
                            var y = t.alternate;
                            if (y !== null) {
                                var N = y.ref;
                                N !== null && (typeof N == "function" ? N(null) : N.current = null)
                            }
                        }
                        if (f & 8192) switch (t.tag) {
                            case 13:
                                if (t.memoizedState !== null) {
                                    var D = t.alternate;
                                    (D === null || D.memoizedState === null) && (Ol = we())
                                }
                                break;
                            case 22:
                                var G = t.memoizedState !== null,
                                    Q = t.alternate,
                                    se = Q !== null && Q.memoizedState !== null;
                                if (n = t, et) {
                                    e: if (r = n, l = G, i = null, et)
                                        for (var B = r;;) {
                                            if (B.tag === 5) {
                                                if (i === null) {
                                                    i = B;
                                                    var Ne = B.stateNode;
                                                    l ? ls(Ne) : os(B.stateNode, B.memoizedProps)
                                                }
                                            } else if (B.tag === 6) {
                                                if (i === null) {
                                                    var qe = B.stateNode;
                                                    l ? is(qe) : us(qe, B.memoizedProps)
                                                }
                                            } else if ((B.tag !== 22 && B.tag !== 23 || B.memoizedState === null || B === r) && B.child !== null) {
                                                B.child.return = B, B = B.child;
                                                continue
                                            }
                                            if (B === r) break;
                                            for (; B.sibling === null;) {
                                                if (B.return === null || B.return === r) break e;
                                                i === B && (i = null), B = B.return
                                            }
                                            i === B && (i = null), B.sibling.return = B.return, B = B.sibling
                                        }
                                }
                                if (G && !se && n.mode & 1) {
                                    T = n;
                                    for (var v = n.child; v !== null;) {
                                        for (n = T = v; T !== null;) {
                                            r = T;
                                            var d = r.child;
                                            switch (r.tag) {
                                                case 0:
                                                case 11:
                                                case 14:
                                                case 15:
                                                    jt(4, r, r.return);
                                                    break;
                                                case 1:
                                                    mr(r, r.return);
                                                    var g = r.stateNode;
                                                    if (typeof g.componentWillUnmount == "function") {
                                                        var I = r.return;
                                                        try {
                                                            g.props = r.memoizedProps, g.state = r.memoizedState, g.componentWillUnmount()
                                                        } catch (A) {
                                                            je(r, I, A)
                                                        }
                                                    }
                                                    break;
                                                case 5:
                                                    mr(r, r.return);
                                                    break;
                                                case 22:
                                                    if (r.memoizedState !== null) {
                                                        Io(n);
                                                        continue
                                                    }
                                            }
                                            d !== null ? (d.return = r, T = d) : Io(n)
                                        }
                                        v = v.sibling
                                    }
                                }
                        }
                        switch (f & 4102) {
                            case 2:
                                Ro(t), t.flags &= -3;
                                break;
                            case 6:
                                Ro(t), t.flags &= -3, Cl(t.alternate, t);
                                break;
                            case 4096:
                                t.flags &= -4097;
                                break;
                            case 4100:
                                t.flags &= -4097, Cl(t.alternate, t);
                                break;
                            case 4:
                                Cl(t.alternate, t)
                        }
                    } catch (A) {
                        je(t, t.return, A)
                    }
                    if (n = t.sibling, n !== null) {
                        n.return = t.return, T = n;
                        break
                    }
                    T = t.return
                }
        }
    }

    function ia(e, t, n) {
        T = e, Lo(e)
    }

    function Lo(e, t, n) {
        for (var r = (e.mode & 1) !== 0; T !== null;) {
            var l = T,
                i = l.child;
            if (l.tag === 22 && r) {
                var s = l.memoizedState !== null || pr;
                if (!s) {
                    var f = l.alternate,
                        y = f !== null && f.memoizedState !== null || Ft;
                    f = pr;
                    var N = Ft;
                    if (pr = s, (Ft = y) && !N)
                        for (T = l; T !== null;) s = T, y = s.child, s.tag === 22 && s.memoizedState !== null ? Oo(l) : y !== null ? (y.return = s, T = y) : Oo(l);
                    for (; i !== null;) T = i, Lo(i), i = i.sibling;
                    T = l, pr = f, Ft = N
                }
                To(e)
            } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, T = i) : To(e)
        }
    }

    function To(e) {
        for (; T !== null;) {
            var t = T;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ft || Cn(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Ft)
                                if (n === null) r.componentDidMount();
                                else {
                                    var l = t.elementType === t.type ? n.memoizedProps : nt(t.type, n.memoizedProps);
                                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                }
                            var i = t.updateQueue;
                            i !== null && ki(t, i, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (n = null, t.child !== null) switch (t.child.tag) {
                                    case 5:
                                        n = De(t.child.stateNode);
                                        break;
                                    case 1:
                                        n = t.child.stateNode
                                }
                                ki(t, s, n)
                            }
                            break;
                        case 5:
                            var f = t.stateNode;
                            n === null && t.flags & 4 && $u(f, t.type, t.memoizedProps, t);
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (Ue && t.memoizedState === null) {
                                var y = t.alternate;
                                if (y !== null) {
                                    var N = y.memoizedState;
                                    if (N !== null) {
                                        var D = N.dehydrated;
                                        D !== null && _s(D)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                            break;
                        default:
                            throw Error(m(163))
                    }
                    Ft || t.flags & 512 && Pl(t)
                } catch (G) {
                    je(t, t.return, G)
                }
            }
            if (t === e) {
                T = null;
                break
            }
            if (n = t.sibling, n !== null) {
                n.return = t.return, T = n;
                break
            }
            T = t.return
        }
    }

    function Io(e) {
        for (; T !== null;) {
            var t = T;
            if (t === e) {
                T = null;
                break
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return, T = n;
                break
            }
            T = t.return
        }
    }

    function Oo(e) {
        for (; T !== null;) {
            var t = T;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            Cn(4, t)
                        } catch (y) {
                            je(t, n, y)
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var l = t.return;
                            try {
                                r.componentDidMount()
                            } catch (y) {
                                je(t, l, y)
                            }
                        }
                        var i = t.return;
                        try {
                            Pl(t)
                        } catch (y) {
                            je(t, i, y)
                        }
                        break;
                    case 5:
                        var s = t.return;
                        try {
                            Pl(t)
                        } catch (y) {
                            je(t, s, y)
                        }
                }
            } catch (y) {
                je(t, t.return, y)
            }
            if (t === e) {
                T = null;
                break
            }
            var f = t.sibling;
            if (f !== null) {
                f.return = t.return, T = f;
                break
            }
            T = t.return
        }
    }
    var hr = 0,
        gr = 1,
        yr = 2,
        Sr = 3,
        wr = 4;
    if (typeof Symbol == "function" && Symbol.for) {
        var Nn = Symbol.for;
        hr = Nn("selector.component"), gr = Nn("selector.has_pseudo_class"), yr = Nn("selector.role"), Sr = Nn("selector.test_id"), wr = Nn("selector.text")
    }

    function Nl(e) {
        var t = Du(e);
        if (t != null) {
            if (typeof t.memoizedProps["data-testname"] != "string") throw Error(m(364));
            return t
        }
        if (e = Wu(e), e === null) throw Error(m(362));
        return e.stateNode.current
    }

    function Rl(e, t) {
        switch (t.$$typeof) {
            case hr:
                if (e.type === t.value) return !0;
                break;
            case gr:
                e: {
                    t = t.value,
                    e = [e, 0];
                    for (var n = 0; n < e.length;) {
                        var r = e[n++],
                            l = e[n++],
                            i = t[l];
                        if (r.tag !== 5 || !cn(r)) {
                            for (; i != null && Rl(r, i);) l++, i = t[l];
                            if (l === t.length) {
                                t = !0;
                                break e
                            } else
                                for (r = r.child; r !== null;) e.push(r, l), r = r.sibling
                        }
                    }
                    t = !1
                }
                return t;
            case yr:
                if (e.tag === 5 && Xu(e.stateNode, t.value)) return !0;
                break;
            case wr:
                if ((e.tag === 5 || e.tag === 6) && (e = Gu(e), e !== null && 0 <= e.indexOf(t.value))) return !0;
                break;
            case Sr:
                if (e.tag === 5 && (e = e.memoizedProps["data-testname"], typeof e == "string" && e.toLowerCase() === t.value.toLowerCase())) return !0;
                break;
            default:
                throw Error(m(365))
        }
        return !1
    }

    function Ml(e) {
        switch (e.$$typeof) {
            case hr:
                return "<" + ($(e.value) || "Unknown") + ">";
            case gr:
                return ":has(" + (Ml(e) || "") + ")";
            case yr:
                return '[role="' + e.value + '"]';
            case wr:
                return '"' + e.value + '"';
            case Sr:
                return '[data-testname="' + e.value + '"]';
            default:
                throw Error(m(365))
        }
    }

    function Fo(e, t) {
        var n = [];
        e = [e, 0];
        for (var r = 0; r < e.length;) {
            var l = e[r++],
                i = e[r++],
                s = t[i];
            if (l.tag !== 5 || !cn(l)) {
                for (; s != null && Rl(l, s);) i++, s = t[i];
                if (i === t.length) n.push(l);
                else
                    for (l = l.child; l !== null;) e.push(l, i), l = l.sibling
            }
        }
        return n
    }

    function Ll(e, t) {
        if (!an) throw Error(m(363));
        e = Nl(e), e = Fo(e, t), t = [], e = Array.from(e);
        for (var n = 0; n < e.length;) {
            var r = e[n++];
            if (r.tag === 5) cn(r) || t.push(r.stateNode);
            else
                for (r = r.child; r !== null;) e.push(r), r = r.sibling
        }
        return t
    }
    var oa = Math.ceil,
        Er = M.ReactCurrentDispatcher,
        Tl = M.ReactCurrentOwner,
        ve = M.ReactCurrentBatchConfig,
        q = 0,
        ge = null,
        ye = null,
        xe = 0,
        Qe = 0,
        bt = wt(0),
        Se = 0,
        Rn = null,
        en = 0,
        _r = 0,
        Il = 0,
        Mn = null,
        Oe = null,
        Ol = 0,
        Fl = 1 / 0;

    function tn() {
        Fl = we() + 500
    }
    var xr = !1,
        jl = null,
        Pt = null,
        Pr = !1,
        kt = null,
        kr = 0,
        Ln = 0,
        Dl = null,
        zr = -1,
        Cr = 0;

    function Me() {
        return q & 6 ? we() : zr !== -1 ? zr : zr = we()
    }

    function zt(e) {
        return e.mode & 1 ? q & 2 && xe !== 0 ? xe & -xe : Qs.transition !== null ? (Cr === 0 && (e = Bn, Bn <<= 1, !(Bn & 4194240) && (Bn = 64), Cr = e), Cr) : (e = ee, e !== 0 ? e : Au()) : 1
    }

    function Je(e, t, n) {
        if (50 < Ln) throw Ln = 0, Dl = null, Error(m(185));
        var r = Nr(e, t);
        return r === null ? null : (mn(r, t, n), (!(q & 2) || r !== ge) && (r === ge && (!(q & 2) && (_r |= t), Se === 4 && Ct(r, xe)), Fe(r, n), t === 1 && q === 0 && !(e.mode & 1) && (tn(), Vn && at())), r)
    }

    function Nr(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null
    }

    function Fe(e, t) {
        var n = e.callbackNode;
        Is(e, t);
        var r = Qn(e, e === ge ? xe : 0);
        if (r === 0) n !== null && wi(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && wi(n), t === 1) e.tag === 0 ? Hs(Do.bind(null, e)) : Ei(Do.bind(null, e)), Hu ? Qu(function() {
                q === 0 && at()
            }) : Gr(Xr, at), n = null;
            else {
                switch (Si(r)) {
                    case 1:
                        n = Xr;
                        break;
                    case 4:
                        n = Ds;
                        break;
                    case 16:
                        n = Yr;
                        break;
                    case 536870912:
                        n = Us;
                        break;
                    default:
                        n = Yr
                }
                n = Xo(n, jo.bind(null, e))
            }
            e.callbackPriority = t, e.callbackNode = n
        }
    }

    function jo(e, t) {
        if (zr = -1, Cr = 0, q & 6) throw Error(m(327));
        var n = e.callbackNode;
        if (At() && e.callbackNode !== n) return null;
        var r = Qn(e, e === ge ? xe : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Rr(e, r);
        else {
            t = r;
            var l = q;
            q |= 2;
            var i = Bo();
            (ge !== e || xe !== t) && (tn(), Dt(e, t));
            do try {
                aa();
                break
            } catch (f) {
                Ao(e, f)
            }
            while (!0);
            Zr(), Er.current = i, q = l, ye !== null ? t = 0 : (ge = null, xe = 0, t = Se)
        }
        if (t !== 0) {
            if (t === 2 && (l = Qr(e), l !== 0 && (r = l, t = Ul(e, l))), t === 1) throw n = Rn, Dt(e, 0), Ct(e, r), Fe(e, we()), n;
            if (t === 6) Ct(e, r);
            else {
                if (l = e.current.alternate, !(r & 30) && !ua(l) && (t = Rr(e, r), t === 2 && (i = Qr(e), i !== 0 && (r = i, t = Ul(e, i))), t === 1)) throw n = Rn, Dt(e, 0), Ct(e, r), Fe(e, we()), n;
                switch (e.finishedWork = l, e.finishedLanes = r, t) {
                    case 0:
                    case 1:
                        throw Error(m(345));
                    case 2:
                        Ut(e, Oe);
                        break;
                    case 3:
                        if (Ct(e, r), (r & 130023424) === r && (t = Ol + 500 - we(), 10 < t)) {
                            if (Qn(e, 0) !== 0) break;
                            if (l = e.suspendedLanes, (l & r) !== r) {
                                Me(), e.pingedLanes |= e.suspendedLanes & l;
                                break
                            }
                            e.timeoutHandle = Mt(Ut.bind(null, e, Oe), t);
                            break
                        }
                        Ut(e, Oe);
                        break;
                    case 4:
                        if (Ct(e, r), (r & 4194240) === r) break;
                        for (t = e.eventTimes, l = -1; 0 < r;) {
                            var s = 31 - tt(r);
                            i = 1 << s, s = t[s], s > l && (l = s), r &= ~i
                        }
                        if (r = l, r = we() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * oa(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = Mt(Ut.bind(null, e, Oe), r);
                            break
                        }
                        Ut(e, Oe);
                        break;
                    case 5:
                        Ut(e, Oe);
                        break;
                    default:
                        throw Error(m(329))
                }
            }
        }
        return Fe(e, we()), e.callbackNode === n ? jo.bind(null, e) : null
    }

    function Ul(e, t) {
        var n = Mn;
        return e.current.memoizedState.isDehydrated && (Dt(e, t).flags |= 256), e = Rr(e, t), e !== 2 && (t = Oe, Oe = n, t !== null && Al(t)), e
    }

    function Al(e) {
        Oe === null ? Oe = e : Oe.push.apply(Oe, e)
    }

    function ua(e) {
        for (var t = e;;) {
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null))
                    for (var r = 0; r < n.length; r++) {
                        var l = n[r],
                            i = l.getSnapshot;
                        l = l.value;
                        try {
                            if (!st(i(), l)) return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
            else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function Ct(e, t) {
        for (t &= ~Il, t &= ~_r, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - tt(t),
                r = 1 << n;
            e[n] = -1, t &= ~r
        }
    }

    function Do(e) {
        if (q & 6) throw Error(m(327));
        At();
        var t = Qn(e, 0);
        if (!(t & 1)) return Fe(e, we()), null;
        var n = Rr(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = Qr(e);
            r !== 0 && (t = r, n = Ul(e, r))
        }
        if (n === 1) throw n = Rn, Dt(e, 0), Ct(e, t), Fe(e, we()), n;
        if (n === 6) throw Error(m(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ut(e, Oe), Fe(e, we()), null
    }

    function Uo(e) {
        kt !== null && kt.tag === 0 && !(q & 6) && At();
        var t = q;
        q |= 1;
        var n = ve.transition,
            r = ee;
        try {
            if (ve.transition = null, ee = 1, e) return e()
        } finally {
            ee = r, ve.transition = n, q = t, !(q & 6) && at()
        }
    }

    function Bl() {
        Qe = bt.current, fe(bt)
    }

    function Dt(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== jr && (e.timeoutHandle = jr, ju(n)), ye !== null)
            for (n = ye.return; n !== null;) {
                var r = n;
                switch (rl(r), r.tag) {
                    case 1:
                        r = r.type.childContextTypes, r != null && Un();
                        break;
                    case 3:
                        qt(), fe(Te), fe(Pe), cl();
                        break;
                    case 5:
                        sl(r);
                        break;
                    case 4:
                        qt();
                        break;
                    case 13:
                        fe(pe);
                        break;
                    case 19:
                        fe(pe);
                        break;
                    case 10:
                        qr(r.type._context);
                        break;
                    case 22:
                    case 23:
                        Bl()
                }
                n = n.return
            }
        if (ge = e, ye = e = Nt(e.current, null), xe = Qe = t, Se = 0, Rn = null, Il = _r = en = 0, Oe = Mn = null, ct !== null) {
            for (t = 0; t < ct.length; t++)
                if (n = ct[t], r = n.interleaved, r !== null) {
                    n.interleaved = null;
                    var l = r.next,
                        i = n.pending;
                    if (i !== null) {
                        var s = i.next;
                        i.next = l, r.next = s
                    }
                    n.pending = r
                }
            ct = null
        }
        return e
    }

    function Ao(e, t) {
        do {
            var n = ye;
            try {
                if (Zr(), tr.current = ur, nr) {
                    for (var r = me.memoizedState; r !== null;) {
                        var l = r.queue;
                        l !== null && (l.pending = null), r = r.next
                    }
                    nr = !1
                }
                if ($t = 0, Ee = ke = me = null, wn = !1, En = 0, Tl.current = null, n === null || n.return === null) {
                    Se = 1, Rn = t, ye = null;
                    break
                }
                e: {
                    var i = e,
                        s = n.return,
                        f = n,
                        y = t;
                    if (t = xe, f.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
                        var N = y,
                            D = f,
                            G = D.tag;
                        if (!(D.mode & 1) && (G === 0 || G === 11 || G === 15)) {
                            var Q = D.alternate;
                            Q ? (D.updateQueue = Q.updateQueue, D.memoizedState = Q.memoizedState, D.lanes = Q.lanes) : (D.updateQueue = null, D.memoizedState = null)
                        }
                        var se = io(s);
                        if (se !== null) {
                            se.flags &= -257, oo(se, s, f, i, t), se.mode & 1 && lo(i, N, t), t = se, y = N;
                            var B = t.updateQueue;
                            if (B === null) {
                                var Ne = new Set;
                                Ne.add(y), t.updateQueue = Ne
                            } else B.add(y);
                            break e
                        } else {
                            if (!(t & 1)) {
                                lo(i, N, t), Hl();
                                break e
                            }
                            y = Error(m(426))
                        }
                    } else if (de && f.mode & 1) {
                        var qe = io(s);
                        if (qe !== null) {
                            !(qe.flags & 65536) && (qe.flags |= 256), oo(qe, s, f, i, t), ol(y);
                            break e
                        }
                    }
                    i = y,
                    Se !== 4 && (Se = 2),
                    Mn === null ? Mn = [i] : Mn.push(i),
                    y = gl(y, f),
                    f = s;do {
                        switch (f.tag) {
                            case 3:
                                f.flags |= 65536, t &= -t, f.lanes |= t;
                                var v = no(f, y, t);
                                Pi(f, v);
                                break e;
                            case 1:
                                i = y;
                                var d = f.type,
                                    g = f.stateNode;
                                if (!(f.flags & 128) && (typeof d.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Pt === null || !Pt.has(g)))) {
                                    f.flags |= 65536, t &= -t, f.lanes |= t;
                                    var I = ro(f, i, t);
                                    Pi(f, I);
                                    break e
                                }
                        }
                        f = f.return
                    } while (f !== null)
                }
                Qo(n)
            } catch (A) {
                t = A, ye === n && n !== null && (ye = n = n.return);
                continue
            }
            break
        } while (!0)
    }

    function Bo() {
        var e = Er.current;
        return Er.current = ur, e === null ? ur : e
    }

    function Hl() {
        (Se === 0 || Se === 3 || Se === 2) && (Se = 4), ge === null || !(en & 268435455) && !(_r & 268435455) || Ct(ge, xe)
    }

    function Rr(e, t) {
        var n = q;
        q |= 2;
        var r = Bo();
        ge === e && xe === t || Dt(e, t);
        do try {
            sa();
            break
        } catch (l) {
            Ao(e, l)
        }
        while (!0);
        if (Zr(), q = n, Er.current = r, ye !== null) throw Error(m(261));
        return ge = null, xe = 0, Se
    }

    function sa() {
        for (; ye !== null;) Ho(ye)
    }

    function aa() {
        for (; ye !== null && !Fs();) Ho(ye)
    }

    function Ho(e) {
        var t = Go(e.alternate, e, Qe);
        e.memoizedProps = e.pendingProps, t === null ? Qo(e) : ye = t, Tl.current = null
    }

    function Qo(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = ta(n, t), n !== null) {
                    n.flags &= 32767, ye = n;
                    return
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    Se = 6, ye = null;
                    return
                }
            } else if (n = $s(n, t, Qe), n !== null) {
                ye = n;
                return
            }
            if (t = t.sibling, t !== null) {
                ye = t;
                return
            }
            ye = t = e
        } while (t !== null);
        Se === 0 && (Se = 5)
    }

    function Ut(e, t) {
        var n = ee,
            r = ve.transition;
        try {
            ve.transition = null, ee = 1, ca(e, t, n)
        } finally {
            ve.transition = r, ee = n
        }
        return null
    }

    function ca(e, t, n) {
        do At(); while (kt !== null);
        if (q & 6) throw Error(m(327));
        var r = e.finishedWork,
            l = e.finishedLanes;
        if (r === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(m(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var i = r.lanes | r.childLanes;
        if (Os(e, i), e === ge && (ye = ge = null, xe = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Pr || (Pr = !0, Xo(Yr, function() {
                return At(), null
            })), i = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || i) {
            i = ve.transition, ve.transition = null;
            var s = ee;
            ee = 1;
            var f = q;
            q |= 4, Tl.current = null, ra(e, r), la(e, r), U(e.containerInfo), e.current = r, ia(r), js(), q = f, ee = s, ve.transition = i
        } else e.current = r;
        if (Pr && (Pr = !1, kt = e, kr = l), i = e.pendingLanes, i === 0 && (Pt = null), As(r.stateNode), Fe(e, we()), t !== null)
            for (n = e.onRecoverableError, r = 0; r < t.length; r++) n(t[r]);
        if (xr) throw xr = !1, e = jl, jl = null, e;
        return kr & 1 && e.tag !== 0 && At(), i = e.pendingLanes, i & 1 ? e === Dl ? Ln++ : (Ln = 0, Dl = e) : Ln = 0, at(), null
    }

    function At() {
        if (kt !== null) {
            var e = Si(kr),
                t = ve.transition,
                n = ee;
            try {
                if (ve.transition = null, ee = 16 > e ? 16 : e, kt === null) var r = !1;
                else {
                    if (e = kt, kt = null, kr = 0, q & 6) throw Error(m(331));
                    var l = q;
                    for (q |= 4, T = e.current; T !== null;) {
                        var i = T,
                            s = i.child;
                        if (T.flags & 16) {
                            var f = i.deletions;
                            if (f !== null) {
                                for (var y = 0; y < f.length; y++) {
                                    var N = f[y];
                                    for (T = N; T !== null;) {
                                        var D = T;
                                        switch (D.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                jt(8, D, i)
                                        }
                                        var G = D.child;
                                        if (G !== null) G.return = D, T = G;
                                        else
                                            for (; T !== null;) {
                                                D = T;
                                                var Q = D.sibling,
                                                    se = D.return;
                                                if (zo(D), D === N) {
                                                    T = null;
                                                    break
                                                }
                                                if (Q !== null) {
                                                    Q.return = se, T = Q;
                                                    break
                                                }
                                                T = se
                                            }
                                    }
                                }
                                var B = i.alternate;
                                if (B !== null) {
                                    var Ne = B.child;
                                    if (Ne !== null) {
                                        B.child = null;
                                        do {
                                            var qe = Ne.sibling;
                                            Ne.sibling = null, Ne = qe
                                        } while (Ne !== null)
                                    }
                                }
                                T = i
                            }
                        }
                        if (i.subtreeFlags & 2064 && s !== null) s.return = i, T = s;
                        else e: for (; T !== null;) {
                            if (i = T, i.flags & 2048) switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    jt(9, i, i.return)
                            }
                            var v = i.sibling;
                            if (v !== null) {
                                v.return = i.return, T = v;
                                break e
                            }
                            T = i.return
                        }
                    }
                    var d = e.current;
                    for (T = d; T !== null;) {
                        s = T;
                        var g = s.child;
                        if (s.subtreeFlags & 2064 && g !== null) g.return = s, T = g;
                        else e: for (s = d; T !== null;) {
                            if (f = T, f.flags & 2048) try {
                                switch (f.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Cn(9, f)
                                }
                            } catch (A) {
                                je(f, f.return, A)
                            }
                            if (f === s) {
                                T = null;
                                break e
                            }
                            var I = f.sibling;
                            if (I !== null) {
                                I.return = f.return, T = I;
                                break e
                            }
                            T = f.return
                        }
                    }
                    if (q = l, at(), ut && typeof ut.onPostCommitFiberRoot == "function") try {
                        ut.onPostCommitFiberRoot(Wn, e)
                    } catch {}
                    r = !0
                }
                return r
            } finally {
                ee = n, ve.transition = t
            }
        }
        return !1
    }

    function Wo(e, t, n) {
        t = gl(n, t), t = no(e, t, 1), xt(e, t), t = Me(), e = Nr(e, 1), e !== null && (mn(e, 1, t), Fe(e, t))
    }

    function je(e, t, n) {
        if (e.tag === 3) Wo(e, e, n);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    Wo(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var r = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Pt === null || !Pt.has(r))) {
                        e = gl(n, e), e = ro(t, e, 1), xt(t, e), e = Me(), t = Nr(t, 1), t !== null && (mn(t, 1, e), Fe(t, e));
                        break
                    }
                }
                t = t.return
            }
    }

    function fa(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = Me(), e.pingedLanes |= e.suspendedLanes & n, ge === e && (xe & n) === n && (Se === 4 || Se === 3 && (xe & 130023424) === xe && 500 > we() - Ol ? Dt(e, 0) : Il |= n), Fe(e, t)
    }

    function Vo(e, t) {
        t === 0 && (e.mode & 1 ? (t = Hn, Hn <<= 1, !(Hn & 130023424) && (Hn = 4194304)) : t = 1);
        var n = Me();
        e = Nr(e, t), e !== null && (mn(e, t, n), Fe(e, n))
    }

    function da(e) {
        var t = e.memoizedState,
            n = 0;
        t !== null && (n = t.retryLane), Vo(e, n)
    }

    function pa(e, t) {
        var n = 0;
        switch (e.tag) {
            case 13:
                var r = e.stateNode,
                    l = e.memoizedState;
                l !== null && (n = l.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default:
                throw Error(m(314))
        }
        r !== null && r.delete(t), Vo(e, n)
    }
    var Go;
    Go = function(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || Te.current) He = !0;
            else {
                if (!(e.lanes & n) && !(t.flags & 128)) return He = !1, ea(e, t, n);
                He = !!(e.flags & 131072)
            }
        else He = !1, de && t.flags & 1048576 && Mi(t, $n, t.index);
        switch (t.lanes = 0, t.tag) {
            case 2:
                var r = t.type;
                e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps;
                var l = Wt(t, Pe.current);
                Gt(t, n), l = dl(null, t, r, e, l, n);
                var i = pl();
                return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ie(r) ? (i = !0, An(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, br(t), l.updater = Zn, t.stateNode = l, l._reactInternals = t, tl(t, r, e, n), t = wl(null, t, r, !0, i, n)) : (t.tag = 0, de && i && nl(t), Re(null, t, l, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch (e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = va(r), e = nt(r, e), l) {
                        case 0:
                            t = Sl(null, t, r, e, n);
                            break e;
                        case 1:
                            t = vo(null, t, r, e, n);
                            break e;
                        case 11:
                            t = ao(null, t, r, e, n);
                            break e;
                        case 14:
                            t = co(null, t, r, nt(r.type, e), n);
                            break e
                    }
                    throw Error(m(306, r, ""))
                }
                return t;
            case 0:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : nt(r, l), Sl(e, t, r, l, n);
            case 1:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : nt(r, l), vo(e, t, r, l, n);
            case 3:
                e: {
                    if (ho(t), e === null) throw Error(m(387));r = t.pendingProps,
                    i = t.memoizedState,
                    l = i.element,
                    xi(e, t),
                    Jn(t, r, null, n);
                    var s = t.memoizedState;
                    if (r = s.element, Ue && i.isDehydrated)
                        if (i = {
                                element: r,
                                isDehydrated: !1,
                                cache: s.cache,
                                transitions: s.transitions
                            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                            l = Error(m(423)), t = go(e, t, r, n, l);
                            break e
                        } else if (r !== l) {
                        l = Error(m(424)), t = go(e, t, r, n, l);
                        break e
                    } else
                        for (Ue && (Be = hs(t.stateNode.containerInfo), Ae = t, de = !0, rt = null, vn = !1), n = ji(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (Kt(), r === l) {
                            t = St(e, t, n);
                            break e
                        }
                        Re(e, t, r, n)
                    }
                    t = t.child
                }
                return t;
            case 5:
                return Di(t), e === null && il(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = l.children, We(r, l) ? s = null : i !== null && We(r, i) && (t.flags |= 32), mo(e, t), Re(e, t, s, n), t.child;
            case 6:
                return e === null && il(t), null;
            case 13:
                return yo(e, t, n);
            case 4:
                return ul(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Jt(t, null, r, n) : Re(e, t, r, n), t.child;
            case 11:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : nt(r, l), ao(e, t, r, l, n);
            case 7:
                return Re(e, t, t.pendingProps, n), t.child;
            case 8:
                return Re(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Re(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, s = l.value, _i(t, r, s), i !== null)
                        if (st(i.value, s)) {
                            if (i.children === l.children && !Te.current) {
                                t = St(e, t, n);
                                break e
                            }
                        } else
                            for (i = t.child, i !== null && (i.return = t); i !== null;) {
                                var f = i.dependencies;
                                if (f !== null) {
                                    s = i.child;
                                    for (var y = f.firstContext; y !== null;) {
                                        if (y.context === r) {
                                            if (i.tag === 1) {
                                                y = vt(-1, n & -n), y.tag = 2;
                                                var N = i.updateQueue;
                                                if (N !== null) {
                                                    N = N.shared;
                                                    var D = N.pending;
                                                    D === null ? y.next = y : (y.next = D.next, D.next = y), N.pending = y
                                                }
                                            }
                                            i.lanes |= n, y = i.alternate, y !== null && (y.lanes |= n), $r(i.return, n, t), f.lanes |= n;
                                            break
                                        }
                                        y = y.next
                                    }
                                } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                                else if (i.tag === 18) {
                                    if (s = i.return, s === null) throw Error(m(341));
                                    s.lanes |= n, f = s.alternate, f !== null && (f.lanes |= n), $r(s, n, t), s = i.sibling
                                } else s = i.child;
                                if (s !== null) s.return = i;
                                else
                                    for (s = i; s !== null;) {
                                        if (s === t) {
                                            s = null;
                                            break
                                        }
                                        if (i = s.sibling, i !== null) {
                                            i.return = s.return, s = i;
                                            break
                                        }
                                        s = s.return
                                    }
                                i = s
                            }
                    Re(e, t, l.children, n),
                    t = t.child
                }
                return t;
            case 9:
                return l = t.type, r = t.pendingProps.children, Gt(t, n), l = Ve(l), r = r(l), t.flags |= 1, Re(e, t, r, n), t.child;
            case 14:
                return r = t.type, l = nt(r, t.pendingProps), l = nt(r.type, l), co(e, t, r, l, n);
            case 15:
                return fo(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : nt(r, l), e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, Ie(r) ? (e = !0, An(t)) : e = !1, Gt(t, n), Ni(t, r, l), tl(t, r, l, n), wl(null, t, r, !0, e, n);
            case 19:
                return _o(e, t, n);
            case 22:
                return po(e, t, n)
        }
        throw Error(m(156, t.tag))
    };

    function Xo(e, t) {
        return Gr(e, t)
    }

    function ma(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Ze(e, t, n, r) {
        return new ma(e, t, n, r)
    }

    function Ql(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function va(e) {
        if (typeof e == "function") return Ql(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === F) return 11;
            if (e === x) return 14
        }
        return 2
    }

    function Nt(e, t) {
        var n = e.alternate;
        return n === null ? (n = Ze(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
    }

    function Mr(e, t, n, r, l, i) {
        var s = 2;
        if (r = e, typeof e == "function") Ql(e) && (s = 1);
        else if (typeof e == "string") s = 5;
        else e: switch (e) {
            case c:
                return Bt(n.children, l, i, t);
            case p:
                s = 8, l |= 8;
                break;
            case E:
                return e = Ze(12, n, t, l | 2), e.elementType = E, e.lanes = i, e;
            case z:
                return e = Ze(13, n, t, l), e.elementType = z, e.lanes = i, e;
            case _:
                return e = Ze(19, n, t, l), e.elementType = _, e.lanes = i, e;
            case K:
                return Lr(n, l, i, t);
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case R:
                        s = 10;
                        break e;
                    case C:
                        s = 9;
                        break e;
                    case F:
                        s = 11;
                        break e;
                    case x:
                        s = 14;
                        break e;
                    case O:
                        s = 16, r = null;
                        break e
                }
                throw Error(m(130, e == null ? e : typeof e, ""))
        }
        return t = Ze(s, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t
    }

    function Bt(e, t, n, r) {
        return e = Ze(7, e, r, t), e.lanes = n, e
    }

    function Lr(e, t, n, r) {
        return e = Ze(22, e, r, t), e.elementType = K, e.lanes = n, e.stateNode = {}, e
    }

    function Wl(e, t, n) {
        return e = Ze(6, e, null, t), e.lanes = n, e
    }

    function Vl(e, t, n) {
        return t = Ze(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function ha(e, t, n, r, l) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = jr, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wr(0), this.expirationTimes = Wr(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wr(0), this.identifierPrefix = r, this.onRecoverableError = l, Ue && (this.mutableSourceEagerHydrationData = null)
    }

    function Yo(e, t, n, r, l, i, s, f, y) {
        return e = new ha(e, t, n, f, y), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ze(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null
        }, br(i), e
    }

    function Ko(e) {
        if (!e) return Et;
        e = e._reactInternals;
        e: {
            if (b(e) !== e || e.tag !== 1) throw Error(m(170));
            var t = e;do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (Ie(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                t = t.return
            } while (t !== null);
            throw Error(m(171))
        }
        if (e.tag === 1) {
            var n = e.type;
            if (Ie(n)) return gi(e, n, t)
        }
        return t
    }

    function Jo(e) {
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
        return e = le(t), e === null ? null : e.stateNode
    }

    function Zo(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }

    function Gl(e, t) {
        Zo(e, t), (e = e.alternate) && Zo(e, t)
    }

    function ga(e) {
        return e = le(e), e === null ? null : e.stateNode
    }

    function ya() {
        return null
    }
    return a.attemptContinuousHydration = function(e) {
        if (e.tag === 13) {
            var t = Me();
            Je(e, 134217728, t), Gl(e, 134217728)
        }
    }, a.attemptHydrationAtCurrentPriority = function(e) {
        if (e.tag === 13) {
            var t = Me(),
                n = zt(e);
            Je(e, n, t), Gl(e, n)
        }
    }, a.attemptSynchronousHydration = function(e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = pn(t.pendingLanes);
                    n !== 0 && (Vr(t, n | 1), Fe(t, we()), !(q & 6) && (tn(), at()))
                }
                break;
            case 13:
                var r = Me();
                Uo(function() {
                    return Je(e, 1, r)
                }), Gl(e, 1)
        }
    }, a.batchedUpdates = function(e, t) {
        var n = q;
        q |= 1;
        try {
            return e(t)
        } finally {
            q = n, q === 0 && (tn(), Vn && at())
        }
    }, a.createComponentSelector = function(e) {
        return {
            $$typeof: hr,
            value: e
        }
    }, a.createContainer = function(e, t, n, r, l, i, s) {
        return Yo(e, t, !1, null, n, r, l, i, s)
    }, a.createHasPseudoClassSelector = function(e) {
        return {
            $$typeof: gr,
            value: e
        }
    }, a.createHydrationContainer = function(e, t, n, r, l, i, s, f, y) {
        return e = Yo(n, r, !0, e, l, i, s, f, y), e.context = Ko(null), n = e.current, r = Me(), l = zt(n), i = vt(r, l), i.callback = t ? ? null, xt(n, i), e.current.lanes = l, mn(e, l, r), Fe(e, r), e
    }, a.createPortal = function(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: k,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }, a.createRoleSelector = function(e) {
        return {
            $$typeof: yr,
            value: e
        }
    }, a.createTestNameSelector = function(e) {
        return {
            $$typeof: Sr,
            value: e
        }
    }, a.createTextSelector = function(e) {
        return {
            $$typeof: wr,
            value: e
        }
    }, a.deferredUpdates = function(e) {
        var t = ee,
            n = ve.transition;
        try {
            return ve.transition = null, ee = 16, e()
        } finally {
            ee = t, ve.transition = n
        }
    }, a.discreteUpdates = function(e, t, n, r, l) {
        var i = ee,
            s = ve.transition;
        try {
            return ve.transition = null, ee = 1, e(t, n, r, l)
        } finally {
            ee = i, ve.transition = s, q === 0 && tn()
        }
    }, a.findAllNodes = Ll, a.findBoundingRects = function(e, t) {
        if (!an) throw Error(m(363));
        t = Ll(e, t), e = [];
        for (var n = 0; n < t.length; n++) e.push(Vu(t[n]));
        for (t = e.length - 1; 0 < t; t--) {
            n = e[t];
            for (var r = n.x, l = r + n.width, i = n.y, s = i + n.height, f = t - 1; 0 <= f; f--)
                if (t !== f) {
                    var y = e[f],
                        N = y.x,
                        D = N + y.width,
                        G = y.y,
                        Q = G + y.height;
                    if (r >= N && i >= G && l <= D && s <= Q) {
                        e.splice(t, 1);
                        break
                    } else if (r !== N || n.width !== y.width || Q < i || G > s) {
                        if (!(i !== G || n.height !== y.height || D < r || N > l)) {
                            N > r && (y.width += N - r, y.x = r), D < l && (y.width = l - N), e.splice(t, 1);
                            break
                        }
                    } else {
                        G > i && (y.height += G - i, y.y = i), Q < s && (y.height = s - G), e.splice(t, 1);
                        break
                    }
                }
        }
        return e
    }, a.findHostInstance = Jo, a.findHostInstanceWithNoPortals = function(e) {
        return e = j(e), e = e !== null ? $e(e) : null, e === null ? null : e.stateNode
    }, a.findHostInstanceWithWarning = function(e) {
        return Jo(e)
    }, a.flushControlled = function(e) {
        var t = q;
        q |= 1;
        var n = ve.transition,
            r = ee;
        try {
            ve.transition = null, ee = 1, e()
        } finally {
            ee = r, ve.transition = n, q = t, q === 0 && (tn(), at())
        }
    }, a.flushPassiveEffects = At, a.flushSync = Uo, a.focusWithin = function(e, t) {
        if (!an) throw Error(m(363));
        for (e = Nl(e), t = Fo(e, t), t = Array.from(t), e = 0; e < t.length;) {
            var n = t[e++];
            if (!cn(n)) {
                if (n.tag === 5 && Yu(n.stateNode)) return !0;
                for (n = n.child; n !== null;) t.push(n), n = n.sibling
            }
        }
        return !1
    }, a.getCurrentUpdatePriority = function() {
        return ee
    }, a.getFindAllNodesFailureDescription = function(e, t) {
        if (!an) throw Error(m(363));
        var n = 0,
            r = [];
        e = [Nl(e), 0];
        for (var l = 0; l < e.length;) {
            var i = e[l++],
                s = e[l++],
                f = t[s];
            if ((i.tag !== 5 || !cn(i)) && (Rl(i, f) && (r.push(Ml(f)), s++, s > n && (n = s)), s < t.length))
                for (i = i.child; i !== null;) e.push(i, s), i = i.sibling
        }
        if (n < t.length) {
            for (e = []; n < t.length; n++) e.push(Ml(t[n]));
            return `findAllNodes was able to match part of the selector:
  ` + (r.join(" > ") + `

No matching component was found for:
  `) + e.join(" > ")
        }
        return null
    }, a.getPublicRootInstance = function(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
            case 5:
                return De(e.child.stateNode);
            default:
                return e.child.stateNode
        }
    }, a.injectIntoDevTools = function(e) {
        if (e = {
                bundleType: e.bundleType,
                version: e.version,
                rendererPackageName: e.rendererPackageName,
                rendererConfig: e.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: M.ReactCurrentDispatcher,
                findHostInstanceByFiber: ga,
                findFiberByHostInstance: e.findFiberByHostInstance || ya,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.0.0-fc46dba67-20220329"
            }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") e = !1;
        else {
            var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (t.isDisabled || !t.supportsFiber) e = !0;
            else {
                try {
                    Wn = t.inject(e), ut = t
                } catch {}
                e = !!t.checkDCE
            }
        }
        return e
    }, a.isAlreadyRendering = function() {
        return !1
    }, a.observeVisibleRects = function(e, t, n, r) {
        if (!an) throw Error(m(363));
        e = Ll(e, t);
        var l = Ku(e, n, r).disconnect;
        return {
            disconnect: function() {
                l()
            }
        }
    }, a.registerMutableSourceForHydration = function(e, t) {
        var n = t._getVersion;
        n = n(t._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, n] : e.mutableSourceEagerHydrationData.push(t, n)
    }, a.runWithPriority = function(e, t) {
        var n = ee;
        try {
            return ee = e, t()
        } finally {
            ee = n
        }
    }, a.shouldError = function() {
        return null
    }, a.shouldSuspend = function() {
        return !1
    }, a.updateContainer = function(e, t, n, r) {
        var l = t.current,
            i = Me(),
            s = zt(l);
        return n = Ko(n), t.context === null ? t.context = n : t.pendingContext = n, t = vt(i, s), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), xt(l, t), e = Je(l, s, i), e !== null && Kn(e, l, s), s
    }, a
};
vu.exports = Wa;
var Va = vu.exports;
const Ga = pu(Va),
    oi = {},
    Xa = o => void Object.assign(oi, o);

function Ya(o, u) {
    function a(c, {
        args: p = [],
        attach: E,
        ...R
    }, C) {
        let F = `${c[0].toUpperCase()}${c.slice(1)}`,
            z;
        if (c === "primitive") {
            if (R.object === void 0) throw new Error("R3F: Primitives without 'object' are invalid!");
            const _ = R.object;
            z = ln(_, {
                type: c,
                root: C,
                attach: E,
                primitive: !0
            })
        } else {
            const _ = oi[F];
            if (!_) throw new Error(`R3F: ${F} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
            if (!Array.isArray(p)) throw new Error("R3F: The args prop must be an array!");
            z = ln(new _(...p), {
                type: c,
                root: C,
                attach: E,
                memoizedProps: {
                    args: p
                }
            })
        }
        return z.__r3f.attach === void 0 && (z instanceof xa ? z.__r3f.attach = "geometry" : z instanceof Pa && (z.__r3f.attach = "material")), F !== "inject" && Zl(z, R), z
    }

    function h(c, p) {
        let E = !1;
        if (p) {
            var R, C;
            (R = p.__r3f) != null && R.attach ? Jl(c, p, p.__r3f.attach) : p.isObject3D && c.isObject3D && (c.add(p), E = !0), E || (C = c.__r3f) == null || C.objects.push(p), p.__r3f || ln(p, {}), p.__r3f.parent = c, li(p), on(p)
        }
    }

    function w(c, p, E) {
        let R = !1;
        if (p) {
            var C, F;
            if ((C = p.__r3f) != null && C.attach) Jl(c, p, p.__r3f.attach);
            else if (p.isObject3D && c.isObject3D) {
                p.parent = c, p.dispatchEvent({
                    type: "added"
                }), c.dispatchEvent({
                    type: "childadded",
                    child: p
                });
                const z = c.children.filter(x => x !== p),
                    _ = z.indexOf(E);
                c.children = [...z.slice(0, _), p, ...z.slice(_)], R = !0
            }
            R || (F = c.__r3f) == null || F.objects.push(p), p.__r3f || ln(p, {}), p.__r3f.parent = c, li(p), on(p)
        }
    }

    function P(c, p, E = !1) {
        c && [...c].forEach(R => m(p, R, E))
    }

    function m(c, p, E) {
        if (p) {
            var R, C, F;
            if (p.__r3f && (p.__r3f.parent = null), (R = c.__r3f) != null && R.objects && (c.__r3f.objects = c.__r3f.objects.filter(K => K !== p)), (C = p.__r3f) != null && C.attach) nu(c, p, p.__r3f.attach);
            else if (p.isObject3D && c.isObject3D) {
                var z;
                c.remove(p), (z = p.__r3f) != null && z.root && nc(Or(p), p)
            }
            const x = (F = p.__r3f) == null ? void 0 : F.primitive,
                O = !x && (E === void 0 ? p.dispose !== null : E);
            if (!x) {
                var _;
                P((_ = p.__r3f) == null ? void 0 : _.objects, p, O), P(p.children, p, O)
            }
            if (delete p.__r3f, O && p.dispose && p.type !== "Scene") {
                const K = () => {
                    try {
                        p.dispose()
                    } catch {}
                };
                typeof IS_REACT_ACT_ENVIRONMENT > "u" ? ni.unstable_scheduleCallback(ni.unstable_IdlePriority, K) : K()
            }
            on(c)
        }
    }

    function M(c, p, E, R) {
        var C;
        const F = (C = c.__r3f) == null ? void 0 : C.parent;
        if (!F) return;
        const z = a(p, E, c.__r3f.root);
        if (c.children) {
            for (const _ of c.children) _.__r3f && h(z, _);
            c.children = c.children.filter(_ => !_.__r3f)
        }
        c.__r3f.objects.forEach(_ => h(z, _)), c.__r3f.objects = [], c.__r3f.autoRemovedBeforeAppend || m(F, c), z.parent && (z.__r3f.autoRemovedBeforeAppend = !0), h(F, z), z.raycast && z.__r3f.eventCount && Or(z).getState().internal.interaction.push(z), [R, R.alternate].forEach(_ => {
            _ !== null && (_.stateNode = z, _.ref && (typeof _.ref == "function" ? _.ref(z) : _.ref.current = z))
        })
    }
    const S = () => console.warn("Text is not allowed in the R3F tree! This could be stray whitespace or characters.");
    return {
        reconciler: Ga({
            createInstance: a,
            removeChild: m,
            appendChild: h,
            appendInitialChild: h,
            insertBefore: w,
            supportsMutation: !0,
            isPrimaryRenderer: !1,
            supportsPersistence: !1,
            supportsHydration: !1,
            noTimeout: -1,
            appendChildToContainer: (c, p) => {
                if (!p) return;
                const E = c.getState().scene;
                E.__r3f && (E.__r3f.root = c, h(E, p))
            },
            removeChildFromContainer: (c, p) => {
                p && m(c.getState().scene, p)
            },
            insertInContainerBefore: (c, p, E) => {
                if (!p || !E) return;
                const R = c.getState().scene;
                R.__r3f && w(R, p, E)
            },
            getRootHostContext: () => null,
            getChildHostContext: c => c,
            finalizeInitialChildren(c) {
                var p;
                return !!((p = c == null ? void 0 : c.__r3f) != null ? p : {}).handlers
            },
            prepareUpdate(c, p, E, R) {
                var C;
                if (((C = c == null ? void 0 : c.__r3f) != null ? C : {}).primitive && R.object && R.object !== c) return [!0]; {
                    const {
                        args: z = [],
                        children: _,
                        ...x
                    } = R, {
                        args: O = [],
                        children: K,
                        ...J
                    } = E;
                    if (!Array.isArray(z)) throw new Error("R3F: the args prop must be an array!");
                    if (z.some(($, ie) => $ !== O[ie])) return [!0];
                    const V = Pu(c, x, J, !0);
                    return V.changes.length ? [!1, V] : null
                }
            },
            commitUpdate(c, [p, E], R, C, F, z) {
                p ? M(c, R, F, z) : Zl(c, E)
            },
            commitMount(c, p, E, R) {
                var C;
                const F = (C = c.__r3f) != null ? C : {};
                c.raycast && F.handlers && F.eventCount && Or(c).getState().internal.interaction.push(c)
            },
            getPublicInstance: c => c,
            prepareForCommit: () => null,
            preparePortalMount: c => ln(c.getState().scene),
            resetAfterCommit: () => {},
            shouldSetTextContent: () => !1,
            clearContainer: () => !1,
            hideInstance(c) {
                var p;
                const {
                    attach: E,
                    parent: R
                } = (p = c.__r3f) != null ? p : {};
                E && R && nu(R, c, E), c.isObject3D && (c.visible = !1), on(c)
            },
            unhideInstance(c, p) {
                var E;
                const {
                    attach: R,
                    parent: C
                } = (E = c.__r3f) != null ? E : {};
                R && C && Jl(C, c, R), (c.isObject3D && p.visible == null || p.visible) && (c.visible = !0), on(c)
            },
            createTextInstance: S,
            hideTextInstance: S,
            unhideTextInstance: S,
            getCurrentEventPriority: () => u ? u() : un.DefaultEventPriority,
            beforeActiveInstanceBlur: () => {},
            afterActiveInstanceBlur: () => {},
            detachDeletedInstance: () => {},
            now: typeof performance < "u" && ce.fun(performance.now) ? performance.now : ce.fun(Date.now) ? Date.now : () => 0,
            scheduleTimeout: ce.fun(setTimeout) ? setTimeout : void 0,
            cancelTimeout: ce.fun(clearTimeout) ? clearTimeout : void 0
        }),
        applyProps: Zl
    }
}
var $o, bo;
const Kl = o => "colorSpace" in o || "outputColorSpace" in o,
    yu = () => {
        var o;
        return (o = oi.ColorManagement) != null ? o : null
    },
    Su = o => o && o.isOrthographicCamera,
    Ka = o => o && o.hasOwnProperty("current"),
    Fn = typeof window < "u" && (($o = window.document) != null && $o.createElement || ((bo = window.navigator) == null ? void 0 : bo.product) === "ReactNative") ? Y.useLayoutEffect : Y.useEffect;

function wu(o) {
    const u = Y.useRef(o);
    return Fn(() => void(u.current = o), [o]), u
}

function Ja({
    set: o
}) {
    return Fn(() => (o(new Promise(() => null)), () => o(!1)), [o]), null
}
class Eu extends Y.Component {
    constructor(...u) {
        super(...u), this.state = {
            error: !1
        }
    }
    componentDidCatch(u) {
        this.props.set(u)
    }
    render() {
        return this.state.error ? null : this.props.children
    }
}
Eu.getDerivedStateFromError = () => ({
    error: !0
});
const _u = "__default",
    eu = new Map,
    Za = o => o && !!o.memoized && !!o.changes;

function xu(o) {
    var u;
    const a = typeof window < "u" ? (u = window.devicePixelRatio) != null ? u : 2 : 1;
    return Array.isArray(o) ? Math.min(Math.max(o[0], a), o[1]) : o
}
const Tn = o => {
    var u;
    return (u = o.__r3f) == null ? void 0 : u.root.getState()
};

function Or(o) {
    let u = o.__r3f.root;
    for (; u.getState().previousRoot;) u = u.getState().previousRoot;
    return u
}
const ce = {
    obj: o => o === Object(o) && !ce.arr(o) && typeof o != "function",
    fun: o => typeof o == "function",
    str: o => typeof o == "string",
    num: o => typeof o == "number",
    boo: o => typeof o == "boolean",
    und: o => o === void 0,
    arr: o => Array.isArray(o),
    equ(o, u, {
        arrays: a = "shallow",
        objects: h = "reference",
        strict: w = !0
    } = {}) {
        if (typeof o != typeof u || !!o != !!u) return !1;
        if (ce.str(o) || ce.num(o) || ce.boo(o)) return o === u;
        const P = ce.obj(o);
        if (P && h === "reference") return o === u;
        const m = ce.arr(o);
        if (m && a === "reference") return o === u;
        if ((m || P) && o === u) return !0;
        let M;
        for (M in o)
            if (!(M in u)) return !1;
        if (P && a === "shallow" && h === "shallow") {
            for (M in w ? u : o)
                if (!ce.equ(o[M], u[M], {
                        strict: w,
                        objects: "reference"
                    })) return !1
        } else
            for (M in w ? u : o)
                if (o[M] !== u[M]) return !1;
        if (ce.und(M)) {
            if (m && o.length === 0 && u.length === 0 || P && Object.keys(o).length === 0 && Object.keys(u).length === 0) return !0;
            if (o !== u) return !1
        }
        return !0
    }
};

function qa(o) {
    const u = {
        nodes: {},
        materials: {}
    };
    return o && o.traverse(a => {
        a.name && (u.nodes[a.name] = a), a.material && !u.materials[a.material.name] && (u.materials[a.material.name] = a.material)
    }), u
}

function $a(o) {
    o.dispose && o.type !== "Scene" && o.dispose();
    for (const u in o) u.dispose == null || u.dispose(), delete o[u]
}

function ln(o, u) {
    const a = o;
    return a.__r3f = {
        type: "",
        root: null,
        previousAttach: null,
        memoizedProps: {},
        eventCount: 0,
        handlers: {},
        objects: [],
        parent: null,
        ...u
    }, o
}

function ri(o, u) {
    let a = o;
    if (u.includes("-")) {
        const h = u.split("-"),
            w = h.pop();
        return a = h.reduce((P, m) => P[m], o), {
            target: a,
            key: w
        }
    } else return {
        target: a,
        key: u
    }
}
const tu = /-\d+$/;

function Jl(o, u, a) {
    if (ce.str(a)) {
        if (tu.test(a)) {
            const P = a.replace(tu, ""),
                {
                    target: m,
                    key: M
                } = ri(o, P);
            Array.isArray(m[M]) || (m[M] = [])
        }
        const {
            target: h,
            key: w
        } = ri(o, a);
        u.__r3f.previousAttach = h[w], h[w] = u
    } else u.__r3f.previousAttach = a(o, u)
}

function nu(o, u, a) {
    var h, w;
    if (ce.str(a)) {
        const {
            target: P,
            key: m
        } = ri(o, a), M = u.__r3f.previousAttach;
        M === void 0 ? delete P[m] : P[m] = M
    } else(h = u.__r3f) == null || h.previousAttach == null || h.previousAttach(o, u);
    (w = u.__r3f) == null || delete w.previousAttach
}

function Pu(o, {
    children: u,
    key: a,
    ref: h,
    ...w
}, {
    children: P,
    key: m,
    ref: M,
    ...S
} = {}, k = !1) {
    const c = o.__r3f,
        p = Object.entries(w),
        E = [];
    if (k) {
        const C = Object.keys(S);
        for (let F = 0; F < C.length; F++) w.hasOwnProperty(C[F]) || p.unshift([C[F], _u + "remove"])
    }
    p.forEach(([C, F]) => {
        var z;
        if ((z = o.__r3f) != null && z.primitive && C === "object" || ce.equ(F, S[C])) return;
        if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(C)) return E.push([C, F, !0, []]);
        let _ = [];
        C.includes("-") && (_ = C.split("-")), E.push([C, F, !1, _]);
        for (const x in w) {
            const O = w[x];
            x.startsWith(`${C}-`) && E.push([x, O, !1, x.split("-")])
        }
    });
    const R = { ...w
    };
    return c != null && c.memoizedProps && c != null && c.memoizedProps.args && (R.args = c.memoizedProps.args), c != null && c.memoizedProps && c != null && c.memoizedProps.attach && (R.attach = c.memoizedProps.attach), {
        memoized: R,
        changes: E
    }
}
const ba = typeof process < "u" && !1;

function Zl(o, u) {
    var a;
    const h = o.__r3f,
        w = h == null ? void 0 : h.root,
        P = w == null || w.getState == null ? void 0 : w.getState(),
        {
            memoized: m,
            changes: M
        } = Za(u) ? u : Pu(o, u),
        S = h == null ? void 0 : h.eventCount;
    o.__r3f && (o.__r3f.memoizedProps = m);
    for (let c = 0; c < M.length; c++) {
        let [p, E, R, C] = M[c];
        if (Kl(o)) {
            const x = "srgb",
                O = "srgb-linear";
            p === "encoding" ? (p = "colorSpace", E = E === 3001 ? x : O) : p === "outputEncoding" && (p = "outputColorSpace", E = E === 3001 ? x : O)
        }
        let F = o,
            z = F[p];
        if (C.length && (z = C.reduce((_, x) => _[x], o), !(z && z.set))) {
            const [_, ...x] = C.reverse();
            F = x.reverse().reduce((O, K) => O[K], o), p = _
        }
        if (E === _u + "remove")
            if (F.constructor) {
                let _ = eu.get(F.constructor);
                _ || (_ = new F.constructor, eu.set(F.constructor, _)), E = _[p]
            } else E = 0;
        if (R && h) E ? h.handlers[p] = E : delete h.handlers[p], h.eventCount = Object.keys(h.handlers).length;
        else if (z && z.set && (z.copy || z instanceof Xl)) {
            if (Array.isArray(E)) z.fromArray ? z.fromArray(E) : z.set(...E);
            else if (z.copy && E && E.constructor && (ba ? z.constructor.name === E.constructor.name : z.constructor === E.constructor)) z.copy(E);
            else if (E !== void 0) {
                const _ = z instanceof ka;
                !_ && z.setScalar ? z.setScalar(E) : z instanceof Xl && E instanceof Xl ? z.mask = E.mask : z.set(E), !yu() && P && !P.linear && _ && z.convertSRGBToLinear()
            }
        } else if (F[p] = E, F[p] instanceof wa && F[p].format === Ea && F[p].type === _a && P) {
            const _ = F[p];
            Kl(_) && Kl(P.gl) ? _.colorSpace = P.gl.outputColorSpace : _.encoding = P.gl.outputEncoding
        }
        on(o)
    }
    if (h && h.parent && o.raycast && S !== h.eventCount) {
        const c = Or(o).getState().internal,
            p = c.interaction.indexOf(o);
        p > -1 && c.interaction.splice(p, 1), h.eventCount && c.interaction.push(o)
    }
    return !(M.length === 1 && M[0][0] === "onUpdate") && M.length && (a = o.__r3f) != null && a.parent && li(o), o
}

function on(o) {
    var u, a;
    const h = (u = o.__r3f) == null || (a = u.root) == null || a.getState == null ? void 0 : a.getState();
    h && h.internal.frames === 0 && h.invalidate()
}

function li(o) {
    o.onUpdate == null || o.onUpdate(o)
}

function ec(o, u) {
    o.manual || (Su(o) ? (o.left = u.width / -2, o.right = u.width / 2, o.top = u.height / 2, o.bottom = u.height / -2) : o.aspect = u.width / u.height, o.updateProjectionMatrix(), o.updateMatrixWorld())
}

function Tr(o) {
    return (o.eventObject || o.object).uuid + "/" + o.index + o.instanceId
}

function tc() {
    var o;
    const u = typeof self < "u" && self || typeof window < "u" && window;
    if (!u) return un.DefaultEventPriority;
    switch ((o = u.event) == null ? void 0 : o.type) {
        case "click":
        case "contextmenu":
        case "dblclick":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
            return un.DiscreteEventPriority;
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerenter":
        case "pointerleave":
        case "wheel":
            return un.ContinuousEventPriority;
        default:
            return un.DefaultEventPriority
    }
}

function ku(o, u, a, h) {
    const w = a.get(u);
    w && (a.delete(u), a.size === 0 && (o.delete(h), w.target.releasePointerCapture(h)))
}

function nc(o, u) {
    const {
        internal: a
    } = o.getState();
    a.interaction = a.interaction.filter(h => h !== u), a.initialHits = a.initialHits.filter(h => h !== u), a.hovered.forEach((h, w) => {
        (h.eventObject === u || h.object === u) && a.hovered.delete(w)
    }), a.capturedMap.forEach((h, w) => {
        ku(a.capturedMap, u, h, w)
    })
}

function rc(o) {
    function u(S) {
        const {
            internal: k
        } = o.getState(), c = S.offsetX - k.initialClick[0], p = S.offsetY - k.initialClick[1];
        return Math.round(Math.sqrt(c * c + p * p))
    }

    function a(S) {
        return S.filter(k => ["Move", "Over", "Enter", "Out", "Leave"].some(c => {
            var p;
            return (p = k.__r3f) == null ? void 0 : p.handlers["onPointer" + c]
        }))
    }

    function h(S, k) {
        const c = o.getState(),
            p = new Set,
            E = [],
            R = k ? k(c.internal.interaction) : c.internal.interaction;
        for (let _ = 0; _ < R.length; _++) {
            const x = Tn(R[_]);
            x && (x.raycaster.camera = void 0)
        }
        c.previousRoot || c.events.compute == null || c.events.compute(S, c);

        function C(_) {
            const x = Tn(_);
            if (!x || !x.events.enabled || x.raycaster.camera === null) return [];
            if (x.raycaster.camera === void 0) {
                var O;
                x.events.compute == null || x.events.compute(S, x, (O = x.previousRoot) == null ? void 0 : O.getState()), x.raycaster.camera === void 0 && (x.raycaster.camera = null)
            }
            return x.raycaster.camera ? x.raycaster.intersectObject(_, !0) : []
        }
        let F = R.flatMap(C).sort((_, x) => {
            const O = Tn(_.object),
                K = Tn(x.object);
            return !O || !K ? _.distance - x.distance : K.events.priority - O.events.priority || _.distance - x.distance
        }).filter(_ => {
            const x = Tr(_);
            return p.has(x) ? !1 : (p.add(x), !0)
        });
        c.events.filter && (F = c.events.filter(F, c));
        for (const _ of F) {
            let x = _.object;
            for (; x;) {
                var z;
                (z = x.__r3f) != null && z.eventCount && E.push({ ..._,
                    eventObject: x
                }), x = x.parent
            }
        }
        if ("pointerId" in S && c.internal.capturedMap.has(S.pointerId))
            for (let _ of c.internal.capturedMap.get(S.pointerId).values()) p.has(Tr(_.intersection)) || E.push(_.intersection);
        return E
    }

    function w(S, k, c, p) {
        const E = o.getState();
        if (S.length) {
            const R = {
                stopped: !1
            };
            for (const C of S) {
                const F = Tn(C.object) || E,
                    {
                        raycaster: z,
                        pointer: _,
                        camera: x,
                        internal: O
                    } = F,
                    K = new On(_.x, _.y, 0).unproject(x),
                    J = re => {
                        var j, le;
                        return (j = (le = O.capturedMap.get(re)) == null ? void 0 : le.has(C.eventObject)) != null ? j : !1
                    },
                    V = re => {
                        const j = {
                            intersection: C,
                            target: k.target
                        };
                        O.capturedMap.has(re) ? O.capturedMap.get(re).set(C.eventObject, j) : O.capturedMap.set(re, new Map([
                            [C.eventObject, j]
                        ])), k.target.setPointerCapture(re)
                    },
                    $ = re => {
                        const j = O.capturedMap.get(re);
                        j && ku(O.capturedMap, C.eventObject, j, re)
                    };
                let ie = {};
                for (let re in k) {
                    let j = k[re];
                    typeof j != "function" && (ie[re] = j)
                }
                let b = { ...C,
                    ...ie,
                    pointer: _,
                    intersections: S,
                    stopped: R.stopped,
                    delta: c,
                    unprojectedPoint: K,
                    ray: z.ray,
                    camera: x,
                    stopPropagation() {
                        const re = "pointerId" in k && O.capturedMap.get(k.pointerId);
                        if ((!re || re.has(C.eventObject)) && (b.stopped = R.stopped = !0, O.hovered.size && Array.from(O.hovered.values()).find(j => j.eventObject === C.eventObject))) {
                            const j = S.slice(0, S.indexOf(C));
                            P([...j, C])
                        }
                    },
                    target: {
                        hasPointerCapture: J,
                        setPointerCapture: V,
                        releasePointerCapture: $
                    },
                    currentTarget: {
                        hasPointerCapture: J,
                        setPointerCapture: V,
                        releasePointerCapture: $
                    },
                    nativeEvent: k
                };
                if (p(b), R.stopped === !0) break
            }
        }
        return S
    }

    function P(S) {
        const {
            internal: k
        } = o.getState();
        for (const c of k.hovered.values())
            if (!S.length || !S.find(p => p.object === c.object && p.index === c.index && p.instanceId === c.instanceId)) {
                const E = c.eventObject.__r3f,
                    R = E == null ? void 0 : E.handlers;
                if (k.hovered.delete(Tr(c)), E != null && E.eventCount) {
                    const C = { ...c,
                        intersections: S
                    };
                    R.onPointerOut == null || R.onPointerOut(C), R.onPointerLeave == null || R.onPointerLeave(C)
                }
            }
    }

    function m(S, k) {
        for (let c = 0; c < k.length; c++) {
            const p = k[c].__r3f;
            p == null || p.handlers.onPointerMissed == null || p.handlers.onPointerMissed(S)
        }
    }

    function M(S) {
        switch (S) {
            case "onPointerLeave":
            case "onPointerCancel":
                return () => P([]);
            case "onLostPointerCapture":
                return k => {
                    const {
                        internal: c
                    } = o.getState();
                    "pointerId" in k && c.capturedMap.has(k.pointerId) && requestAnimationFrame(() => {
                        c.capturedMap.has(k.pointerId) && (c.capturedMap.delete(k.pointerId), P([]))
                    })
                }
        }
        return function(c) {
            const {
                onPointerMissed: p,
                internal: E
            } = o.getState();
            E.lastEvent.current = c;
            const R = S === "onPointerMove",
                C = S === "onClick" || S === "onContextMenu" || S === "onDoubleClick",
                z = h(c, R ? a : void 0),
                _ = C ? u(c) : 0;
            S === "onPointerDown" && (E.initialClick = [c.offsetX, c.offsetY], E.initialHits = z.map(O => O.eventObject)), C && !z.length && _ <= 2 && (m(c, E.interaction), p && p(c)), R && P(z);

            function x(O) {
                const K = O.eventObject,
                    J = K.__r3f,
                    V = J == null ? void 0 : J.handlers;
                if (J != null && J.eventCount)
                    if (R) {
                        if (V.onPointerOver || V.onPointerEnter || V.onPointerOut || V.onPointerLeave) {
                            const $ = Tr(O),
                                ie = E.hovered.get($);
                            ie ? ie.stopped && O.stopPropagation() : (E.hovered.set($, O), V.onPointerOver == null || V.onPointerOver(O), V.onPointerEnter == null || V.onPointerEnter(O))
                        }
                        V.onPointerMove == null || V.onPointerMove(O)
                    } else {
                        const $ = V[S];
                        $ ? (!C || E.initialHits.includes(K)) && (m(c, E.interaction.filter(ie => !E.initialHits.includes(ie))), $(O)) : C && E.initialHits.includes(K) && m(c, E.interaction.filter(ie => !E.initialHits.includes(ie)))
                    }
            }
            w(z, c, _, x)
        }
    }
    return {
        handlePointer: M
    }
}
const zu = o => !!(o != null && o.render),
    Cu = Y.createContext(null),
    lc = (o, u) => {
        const a = Qa((M, S) => {
                const k = new On,
                    c = new On,
                    p = new On;

                function E(_ = S().camera, x = c, O = S().size) {
                    const {
                        width: K,
                        height: J,
                        top: V,
                        left: $
                    } = O, ie = K / J;
                    x instanceof On ? p.copy(x) : p.set(...x);
                    const b = _.getWorldPosition(k).distanceTo(p);
                    if (Su(_)) return {
                        width: K / _.zoom,
                        height: J / _.zoom,
                        top: V,
                        left: $,
                        factor: 1,
                        distance: b,
                        aspect: ie
                    }; {
                        const re = _.fov * Math.PI / 180,
                            j = 2 * Math.tan(re / 2) * b,
                            le = j * (K / J);
                        return {
                            width: le,
                            height: j,
                            top: V,
                            left: $,
                            factor: K / le,
                            distance: b,
                            aspect: ie
                        }
                    }
                }
                let R;
                const C = _ => M(x => ({
                        performance: { ...x.performance,
                            current: _
                        }
                    })),
                    F = new La;
                return {
                    set: M,
                    get: S,
                    gl: null,
                    camera: null,
                    raycaster: null,
                    events: {
                        priority: 1,
                        enabled: !0,
                        connected: !1
                    },
                    xr: null,
                    scene: null,
                    invalidate: (_ = 1) => o(S(), _),
                    advance: (_, x) => u(_, x, S()),
                    legacy: !1,
                    linear: !1,
                    flat: !1,
                    controls: null,
                    clock: new Da,
                    pointer: F,
                    mouse: F,
                    frameloop: "always",
                    onPointerMissed: void 0,
                    performance: {
                        current: 1,
                        min: .5,
                        max: 1,
                        debounce: 200,
                        regress: () => {
                            const _ = S();
                            R && clearTimeout(R), _.performance.current !== _.performance.min && C(_.performance.min), R = setTimeout(() => C(S().performance.max), _.performance.debounce)
                        }
                    },
                    size: {
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0,
                        updateStyle: !1
                    },
                    viewport: {
                        initialDpr: 0,
                        dpr: 0,
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0,
                        aspect: 0,
                        distance: 0,
                        factor: 0,
                        getCurrentViewport: E
                    },
                    setEvents: _ => M(x => ({ ...x,
                        events: { ...x.events,
                            ..._
                        }
                    })),
                    setSize: (_, x, O, K, J) => {
                        const V = S().camera,
                            $ = {
                                width: _,
                                height: x,
                                top: K || 0,
                                left: J || 0,
                                updateStyle: O
                            };
                        M(ie => ({
                            size: $,
                            viewport: { ...ie.viewport,
                                ...E(V, c, $)
                            }
                        }))
                    },
                    setDpr: _ => M(x => {
                        const O = xu(_);
                        return {
                            viewport: { ...x.viewport,
                                dpr: O,
                                initialDpr: x.viewport.initialDpr || O
                            }
                        }
                    }),
                    setFrameloop: (_ = "always") => {
                        const x = S().clock;
                        x.stop(), x.elapsedTime = 0, _ !== "never" && (x.start(), x.elapsedTime = 0), M(() => ({
                            frameloop: _
                        }))
                    },
                    previousRoot: void 0,
                    internal: {
                        active: !1,
                        priority: 0,
                        frames: 0,
                        lastEvent: Y.createRef(),
                        interaction: [],
                        hovered: new Map,
                        subscribers: [],
                        initialClick: [0, 0],
                        initialHits: [],
                        capturedMap: new Map,
                        subscribe: (_, x, O) => {
                            const K = S().internal;
                            return K.priority = K.priority + (x > 0 ? 1 : 0), K.subscribers.push({
                                ref: _,
                                priority: x,
                                store: O
                            }), K.subscribers = K.subscribers.sort((J, V) => J.priority - V.priority), () => {
                                const J = S().internal;
                                J != null && J.subscribers && (J.priority = J.priority - (x > 0 ? 1 : 0), J.subscribers = J.subscribers.filter(V => V.ref !== _))
                            }
                        }
                    }
                }
            }),
            h = a.getState();
        let w = h.size,
            P = h.viewport.dpr,
            m = h.camera;
        return a.subscribe(() => {
            const {
                camera: M,
                size: S,
                viewport: k,
                gl: c,
                set: p
            } = a.getState();
            if (S.width !== w.width || S.height !== w.height || k.dpr !== P) {
                var E;
                w = S, P = k.dpr, ec(M, S), c.setPixelRatio(k.dpr);
                const R = (E = S.updateStyle) != null ? E : typeof HTMLCanvasElement < "u" && c.domElement instanceof HTMLCanvasElement;
                c.setSize(S.width, S.height, R)
            }
            M !== m && (m = M, p(R => ({
                viewport: { ...R.viewport,
                    ...R.viewport.getCurrentViewport(M)
                }
            })))
        }), a.subscribe(M => o(M)), a
    };
let Ir, ic = new Set,
    oc = new Set,
    uc = new Set;

function ql(o, u) {
    if (o.size)
        for (const {
                callback: a
            } of o.values()) a(u)
}

function In(o, u) {
    switch (o) {
        case "before":
            return ql(ic, u);
        case "after":
            return ql(oc, u);
        case "tail":
            return ql(uc, u)
    }
}
let $l, bl;

function ei(o, u, a) {
    let h = u.clock.getDelta();
    for (u.frameloop === "never" && typeof o == "number" && (h = o - u.clock.elapsedTime, u.clock.oldTime = u.clock.elapsedTime, u.clock.elapsedTime = o), $l = u.internal.subscribers, Ir = 0; Ir < $l.length; Ir++) bl = $l[Ir], bl.ref.current(bl.store.getState(), h, a);
    return !u.internal.priority && u.gl.render && u.gl.render(u.scene, u.camera), u.internal.frames = Math.max(0, u.internal.frames - 1), u.frameloop === "always" ? 1 : u.internal.frames
}

function sc(o) {
    let u = !1,
        a = !1,
        h, w, P;

    function m(k) {
        w = requestAnimationFrame(m), u = !0, h = 0, In("before", k), a = !0;
        for (const p of o.values()) {
            var c;
            P = p.store.getState(), P.internal.active && (P.frameloop === "always" || P.internal.frames > 0) && !((c = P.gl.xr) != null && c.isPresenting) && (h += ei(k, P))
        }
        if (a = !1, In("after", k), h === 0) return In("tail", k), u = !1, cancelAnimationFrame(w)
    }

    function M(k, c = 1) {
        var p;
        if (!k) return o.forEach(E => M(E.store.getState(), c));
        (p = k.gl.xr) != null && p.isPresenting || !k.internal.active || k.frameloop === "never" || (c > 1 ? k.internal.frames = Math.min(60, k.internal.frames + c) : a ? k.internal.frames = 2 : k.internal.frames = 1, u || (u = !0, requestAnimationFrame(m)))
    }

    function S(k, c = !0, p, E) {
        if (c && In("before", k), p) ei(k, p, E);
        else
            for (const R of o.values()) ei(k, R.store.getState());
        c && In("after", k)
    }
    return {
        loop: m,
        invalidate: M,
        advance: S
    }
}

function Nu() {
    const o = Y.useContext(Cu);
    if (!o) throw new Error("R3F: Hooks can only be used within the Canvas component!");
    return o
}

function Oc(o = a => a, u) {
    return Nu()(o, u)
}

function Fc(o, u = 0) {
    const a = Nu(),
        h = a.getState().internal.subscribe,
        w = wu(o);
    return Fn(() => h(w, u, a), [u, h, a]), null
}
const ru = new WeakMap;

function Ru(o, u) {
    return function(a, ...h) {
        let w = ru.get(a);
        return w || (w = new a, ru.set(a, w)), o && o(w), Promise.all(h.map(P => new Promise((m, M) => w.load(P, S => {
            S.scene && Object.assign(S, qa(S.scene)), m(S)
        }, u, S => M(new Error(`Could not load ${P}: ${S==null?void 0:S.message}`))))))
    }
}

function Mu(o, u, a, h) {
    const w = Array.isArray(u) ? u : [u],
        P = Aa(Ru(a, h), [o, ...w], {
            equal: ce.equ
        });
    return Array.isArray(u) ? P : P[0]
}
Mu.preload = function(o, u, a) {
    const h = Array.isArray(u) ? u : [u];
    return Ba(Ru(a), [o, ...h])
};
Mu.clear = function(o, u) {
    const a = Array.isArray(u) ? u : [u];
    return Ha([o, ...a])
};
const sn = new Map,
    {
        invalidate: lu,
        advance: iu
    } = sc(sn),
    {
        reconciler: Fr,
        applyProps: nn
    } = Ya(sn, tc),
    rn = {
        objects: "shallow",
        strict: !1
    },
    ac = (o, u) => {
        const a = typeof o == "function" ? o(u) : o;
        return zu(a) ? a : new Ta({
            powerPreference: "high-performance",
            canvas: u,
            antialias: !0,
            alpha: !0,
            ...o
        })
    };

function cc(o, u) {
    const a = typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement;
    if (u) {
        const {
            width: h,
            height: w,
            top: P,
            left: m,
            updateStyle: M = a
        } = u;
        return {
            width: h,
            height: w,
            top: P,
            left: m,
            updateStyle: M
        }
    } else if (typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement && o.parentElement) {
        const {
            width: h,
            height: w,
            top: P,
            left: m
        } = o.parentElement.getBoundingClientRect();
        return {
            width: h,
            height: w,
            top: P,
            left: m,
            updateStyle: a
        }
    } else if (typeof OffscreenCanvas < "u" && o instanceof OffscreenCanvas) return {
        width: o.width,
        height: o.height,
        top: 0,
        left: 0,
        updateStyle: a
    };
    return {
        width: 0,
        height: 0,
        top: 0,
        left: 0
    }
}

function fc(o) {
    const u = sn.get(o),
        a = u == null ? void 0 : u.fiber,
        h = u == null ? void 0 : u.store;
    u && console.warn("R3F.createRoot should only be called once!");
    const w = typeof reportError == "function" ? reportError : console.error,
        P = h || lc(lu, iu),
        m = a || Fr.createContainer(P, un.ConcurrentRoot, null, !1, null, "", w, null);
    u || sn.set(o, {
        fiber: m,
        store: P
    });
    let M, S = !1,
        k;
    return {
        configure(c = {}) {
            let {
                gl: p,
                size: E,
                scene: R,
                events: C,
                onCreated: F,
                shadows: z = !1,
                linear: _ = !1,
                flat: x = !1,
                legacy: O = !1,
                orthographic: K = !1,
                frameloop: J = "always",
                dpr: V = [1, 2],
                performance: $,
                raycaster: ie,
                camera: b,
                onPointerMissed: re
            } = c, j = P.getState(), le = j.gl;
            j.gl || j.set({
                gl: le = ac(p, o)
            });
            let he = j.raycaster;
            he || j.set({
                raycaster: he = new za
            });
            const {
                params: $e,
                ...be
            } = ie || {};
            if (ce.equ(be, he, rn) || nn(he, { ...be
                }), ce.equ($e, he.params, rn) || nn(he, {
                    params: { ...he.params,
                        ...$e
                    }
                }), !j.camera || j.camera === k && !ce.equ(k, b, rn)) {
                k = b;
                const U = b instanceof Ia,
                    W = U ? b : K ? new Ca(0, 0, 0, 0, .1, 1e3) : new Na(75, 0, .1, 1e3);
                U || (W.position.z = 5, b && (nn(W, b), ("aspect" in b || "left" in b || "right" in b || "bottom" in b || "top" in b) && (W.manual = !0, W.updateProjectionMatrix())), !j.camera && !(b != null && b.rotation) && W.lookAt(0, 0, 0)), j.set({
                    camera: W
                }), he.camera = W
            }
            if (!j.scene) {
                let U;
                R instanceof qo ? U = R : (U = new qo, R && nn(U, R)), j.set({
                    scene: ln(U)
                })
            }
            if (!j.xr) {
                var De;
                const U = (ue, Le) => {
                        const We = P.getState();
                        We.frameloop !== "never" && iu(ue, !0, We, Le)
                    },
                    W = () => {
                        const ue = P.getState();
                        ue.gl.xr.enabled = ue.gl.xr.isPresenting, ue.gl.xr.setAnimationLoop(ue.gl.xr.isPresenting ? U : null), ue.gl.xr.isPresenting || lu(ue)
                    },
                    oe = {
                        connect() {
                            const ue = P.getState().gl;
                            ue.xr.addEventListener("sessionstart", W), ue.xr.addEventListener("sessionend", W)
                        },
                        disconnect() {
                            const ue = P.getState().gl;
                            ue.xr.removeEventListener("sessionstart", W), ue.xr.removeEventListener("sessionend", W)
                        }
                    };
                typeof((De = le.xr) == null ? void 0 : De.addEventListener) == "function" && oe.connect(), j.set({
                    xr: oe
                })
            }
            if (le.shadowMap) {
                const U = le.shadowMap.enabled,
                    W = le.shadowMap.type;
                if (le.shadowMap.enabled = !!z, ce.boo(z)) le.shadowMap.type = Yl;
                else if (ce.str(z)) {
                    var it;
                    const oe = {
                        basic: Oa,
                        percentage: Fa,
                        soft: Yl,
                        variance: ja
                    };
                    le.shadowMap.type = (it = oe[z]) != null ? it : Yl
                } else ce.obj(z) && Object.assign(le.shadowMap, z);
                (U !== le.shadowMap.enabled || W !== le.shadowMap.type) && (le.shadowMap.needsUpdate = !0)
            }
            const L = yu();
            L && ("enabled" in L ? L.enabled = !O : "legacyMode" in L && (L.legacyMode = O)), S || nn(le, {
                outputEncoding: _ ? 3e3 : 3001,
                toneMapping: x ? Ra : Ma
            }), j.legacy !== O && j.set(() => ({
                legacy: O
            })), j.linear !== _ && j.set(() => ({
                linear: _
            })), j.flat !== x && j.set(() => ({
                flat: x
            })), p && !ce.fun(p) && !zu(p) && !ce.equ(p, le, rn) && nn(le, p), C && !j.events.handlers && j.set({
                events: C(P)
            });
            const H = cc(o, E);
            return ce.equ(H, j.size, rn) || j.setSize(H.width, H.height, H.updateStyle, H.top, H.left), V && j.viewport.dpr !== xu(V) && j.setDpr(V), j.frameloop !== J && j.setFrameloop(J), j.onPointerMissed || j.set({
                onPointerMissed: re
            }), $ && !ce.equ($, j.performance, rn) && j.set(U => ({
                performance: { ...U.performance,
                    ...$
                }
            })), M = F, S = !0, this
        },
        render(c) {
            return S || this.configure(), Fr.updateContainer(lt.jsx(dc, {
                store: P,
                children: c,
                onCreated: M,
                rootElement: o
            }), m, null, () => {}), P
        },
        unmount() {
            Lu(o)
        }
    }
}

function dc({
    store: o,
    children: u,
    onCreated: a,
    rootElement: h
}) {
    return Fn(() => {
        const w = o.getState();
        w.set(P => ({
            internal: { ...P.internal,
                active: !0
            }
        })), a && a(w), o.getState().events.connected || w.events.connect == null || w.events.connect(h)
    }, []), lt.jsx(Cu.Provider, {
        value: o,
        children: u
    })
}

function Lu(o, u) {
    const a = sn.get(o),
        h = a == null ? void 0 : a.fiber;
    if (h) {
        const w = a == null ? void 0 : a.store.getState();
        w && (w.internal.active = !1), Fr.updateContainer(null, h, null, () => {
            w && setTimeout(() => {
                try {
                    var P, m, M, S;
                    w.events.disconnect == null || w.events.disconnect(), (P = w.gl) == null || (m = P.renderLists) == null || m.dispose == null || m.dispose(), (M = w.gl) == null || M.forceContextLoss == null || M.forceContextLoss(), (S = w.gl) != null && S.xr && w.xr.disconnect(), $a(w), sn.delete(o)
                } catch {}
            }, 500)
        })
    }
}
Fr.injectIntoDevTools({
    bundleType: 0,
    rendererPackageName: "@react-three/fiber",
    version: Y.version
});

function ii(o, u, a) {
    var h, w, P, m, M;
    u == null && (u = 100);

    function S() {
        var c = Date.now() - m;
        c < u && c >= 0 ? h = setTimeout(S, u - c) : (h = null, a || (M = o.apply(P, w), P = w = null))
    }
    var k = function() {
        P = this, w = arguments, m = Date.now();
        var c = a && !h;
        return h || (h = setTimeout(S, u)), c && (M = o.apply(P, w), P = w = null), M
    };
    return k.clear = function() {
        h && (clearTimeout(h), h = null)
    }, k.flush = function() {
        h && (M = o.apply(P, w), P = w = null, clearTimeout(h), h = null)
    }, k
}
ii.debounce = ii;
var pc = ii;
const ou = pu(pc);

function mc(o) {
    let {
        debounce: u,
        scroll: a,
        polyfill: h,
        offsetSize: w
    } = o === void 0 ? {
        debounce: 0,
        scroll: !1,
        offsetSize: !1
    } : o;
    const P = h || (typeof window > "u" ? class {} : window.ResizeObserver);
    if (!P) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
    const [m, M] = Y.useState({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0
    }), S = Y.useRef({
        element: null,
        scrollContainers: null,
        resizeObserver: null,
        lastBounds: m
    }), k = u ? typeof u == "number" ? u : u.scroll : null, c = u ? typeof u == "number" ? u : u.resize : null, p = Y.useRef(!1);
    Y.useEffect(() => (p.current = !0, () => void(p.current = !1)));
    const [E, R, C] = Y.useMemo(() => {
        const x = () => {
            if (!S.current.element) return;
            const {
                left: O,
                top: K,
                width: J,
                height: V,
                bottom: $,
                right: ie,
                x: b,
                y: re
            } = S.current.element.getBoundingClientRect(), j = {
                left: O,
                top: K,
                width: J,
                height: V,
                bottom: $,
                right: ie,
                x: b,
                y: re
            };
            S.current.element instanceof HTMLElement && w && (j.height = S.current.element.offsetHeight, j.width = S.current.element.offsetWidth), Object.freeze(j), p.current && !yc(S.current.lastBounds, j) && M(S.current.lastBounds = j)
        };
        return [x, c ? ou(x, c) : x, k ? ou(x, k) : x]
    }, [M, w, k, c]);

    function F() {
        S.current.scrollContainers && (S.current.scrollContainers.forEach(x => x.removeEventListener("scroll", C, !0)), S.current.scrollContainers = null), S.current.resizeObserver && (S.current.resizeObserver.disconnect(), S.current.resizeObserver = null)
    }

    function z() {
        S.current.element && (S.current.resizeObserver = new P(C), S.current.resizeObserver.observe(S.current.element), a && S.current.scrollContainers && S.current.scrollContainers.forEach(x => x.addEventListener("scroll", C, {
            capture: !0,
            passive: !0
        })))
    }
    const _ = x => {
        !x || x === S.current.element || (F(), S.current.element = x, S.current.scrollContainers = Tu(x), z())
    };
    return hc(C, !!a), vc(R), Y.useEffect(() => {
        F(), z()
    }, [a, C, R]), Y.useEffect(() => F, []), [_, m, E]
}

function vc(o) {
    Y.useEffect(() => {
        const u = o;
        return window.addEventListener("resize", u), () => void window.removeEventListener("resize", u)
    }, [o])
}

function hc(o, u) {
    Y.useEffect(() => {
        if (u) {
            const a = o;
            return window.addEventListener("scroll", a, {
                capture: !0,
                passive: !0
            }), () => void window.removeEventListener("scroll", a, !0)
        }
    }, [o, u])
}

function Tu(o) {
    const u = [];
    if (!o || o === document.body) return u;
    const {
        overflow: a,
        overflowX: h,
        overflowY: w
    } = window.getComputedStyle(o);
    return [a, h, w].some(P => P === "auto" || P === "scroll") && u.push(o), [...u, ...Tu(o.parentElement)]
}
const gc = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
    yc = (o, u) => gc.every(a => o[a] === u[a]);
var Sc = Object.defineProperty,
    wc = Object.defineProperties,
    Ec = Object.getOwnPropertyDescriptors,
    uu = Object.getOwnPropertySymbols,
    _c = Object.prototype.hasOwnProperty,
    xc = Object.prototype.propertyIsEnumerable,
    su = (o, u, a) => u in o ? Sc(o, u, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : o[u] = a,
    au = (o, u) => {
        for (var a in u || (u = {})) _c.call(u, a) && su(o, a, u[a]);
        if (uu)
            for (var a of uu(u)) xc.call(u, a) && su(o, a, u[a]);
        return o
    },
    Pc = (o, u) => wc(o, Ec(u)),
    cu, fu;
typeof window < "u" && ((cu = window.document) != null && cu.createElement || ((fu = window.navigator) == null ? void 0 : fu.product) === "ReactNative") ? Y.useLayoutEffect : Y.useEffect;

function Iu(o, u, a) {
    if (!o) return;
    if (a(o) === !0) return o;
    let h = o.child;
    for (; h;) {
        const w = Iu(h, u, a);
        if (w) return w;
        h = h.sibling
    }
}

function Ou(o) {
    try {
        return Object.defineProperties(o, {
            _currentRenderer: {
                get() {
                    return null
                },
                set() {}
            },
            _currentRenderer2: {
                get() {
                    return null
                },
                set() {}
            }
        })
    } catch {
        return o
    }
}
const du = console.error;
console.error = function() {
    const o = [...arguments].join("");
    if (o != null && o.startsWith("Warning:") && o.includes("useContext")) {
        console.error = du;
        return
    }
    return du.apply(this, arguments)
};
const ui = Ou(Y.createContext(null));
class Fu extends Y.Component {
    render() {
        return Y.createElement(ui.Provider, {
            value: this._reactInternals
        }, this.props.children)
    }
}

function kc() {
    const o = Y.useContext(ui);
    if (o === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
    const u = Y.useId();
    return Y.useMemo(() => {
        for (const h of [o, o == null ? void 0 : o.alternate]) {
            if (!h) continue;
            const w = Iu(h, !1, P => {
                let m = P.memoizedState;
                for (; m;) {
                    if (m.memoizedState === u) return !0;
                    m = m.next
                }
            });
            if (w) return w
        }
    }, [o, u])
}

function zc() {
    const o = kc(),
        [u] = Y.useState(() => new Map);
    u.clear();
    let a = o;
    for (; a;) {
        if (a.type && typeof a.type == "object") {
            const w = a.type._context === void 0 && a.type.Provider === a.type ? a.type : a.type._context;
            w && w !== ui && !u.has(w) && u.set(w, Y.useContext(Ou(w)))
        }
        a = a.return
    }
    return u
}

function Cc() {
    const o = zc();
    return Y.useMemo(() => Array.from(o.keys()).reduce((u, a) => h => Y.createElement(u, null, Y.createElement(a.Provider, Pc(au({}, h), {
        value: o.get(a)
    }))), u => Y.createElement(Fu, au({}, u))), [o])
}
const ti = {
    onClick: ["click", !1],
    onContextMenu: ["contextmenu", !1],
    onDoubleClick: ["dblclick", !1],
    onWheel: ["wheel", !0],
    onPointerDown: ["pointerdown", !0],
    onPointerUp: ["pointerup", !0],
    onPointerLeave: ["pointerleave", !0],
    onPointerMove: ["pointermove", !0],
    onPointerCancel: ["pointercancel", !0],
    onLostPointerCapture: ["lostpointercapture", !0]
};

function Nc(o) {
    const {
        handlePointer: u
    } = rc(o);
    return {
        priority: 1,
        enabled: !0,
        compute(a, h, w) {
            h.pointer.set(a.offsetX / h.size.width * 2 - 1, -(a.offsetY / h.size.height) * 2 + 1), h.raycaster.setFromCamera(h.pointer, h.camera)
        },
        connected: void 0,
        handlers: Object.keys(ti).reduce((a, h) => ({ ...a,
            [h]: u(h)
        }), {}),
        update: () => {
            var a;
            const {
                events: h,
                internal: w
            } = o.getState();
            (a = w.lastEvent) != null && a.current && h.handlers && h.handlers.onPointerMove(w.lastEvent.current)
        },
        connect: a => {
            var h;
            const {
                set: w,
                events: P
            } = o.getState();
            P.disconnect == null || P.disconnect(), w(m => ({
                events: { ...m.events,
                    connected: a
                }
            })), Object.entries((h = P.handlers) != null ? h : []).forEach(([m, M]) => {
                const [S, k] = ti[m];
                a.addEventListener(S, M, {
                    passive: k
                })
            })
        },
        disconnect: () => {
            const {
                set: a,
                events: h
            } = o.getState();
            if (h.connected) {
                var w;
                Object.entries((w = h.handlers) != null ? w : []).forEach(([P, m]) => {
                    if (h && h.connected instanceof HTMLElement) {
                        const [M] = ti[P];
                        h.connected.removeEventListener(M, m)
                    }
                }), a(P => ({
                    events: { ...P.events,
                        connected: void 0
                    }
                }))
            }
        }
    }
}
const Rc = Y.forwardRef(function({
        children: u,
        fallback: a,
        resize: h,
        style: w,
        gl: P,
        events: m = Nc,
        eventSource: M,
        eventPrefix: S,
        shadows: k,
        linear: c,
        flat: p,
        legacy: E,
        orthographic: R,
        frameloop: C,
        dpr: F,
        performance: z,
        raycaster: _,
        camera: x,
        scene: O,
        onPointerMissed: K,
        onCreated: J,
        ...V
    }, $) {
        Y.useMemo(() => Xa(Ua), []);
        const ie = Cc(),
            [b, re] = mc({
                scroll: !0,
                debounce: {
                    scroll: 50,
                    resize: 0
                },
                ...h
            }),
            j = Y.useRef(null),
            le = Y.useRef(null);
        Y.useImperativeHandle($, () => j.current);
        const he = wu(K),
            [$e, be] = Y.useState(!1),
            [De, it] = Y.useState(!1);
        if ($e) throw $e;
        if (De) throw De;
        const L = Y.useRef(null);
        Fn(() => {
            const U = j.current;
            re.width > 0 && re.height > 0 && U && (L.current || (L.current = fc(U)), L.current.configure({
                gl: P,
                events: m,
                shadows: k,
                linear: c,
                flat: p,
                legacy: E,
                orthographic: R,
                frameloop: C,
                dpr: F,
                performance: z,
                raycaster: _,
                camera: x,
                scene: O,
                size: re,
                onPointerMissed: (...W) => he.current == null ? void 0 : he.current(...W),
                onCreated: W => {
                    W.events.connect == null || W.events.connect(M ? Ka(M) ? M.current : M : le.current), S && W.setEvents({
                        compute: (oe, ue) => {
                            const Le = oe[S + "X"],
                                We = oe[S + "Y"];
                            ue.pointer.set(Le / ue.size.width * 2 - 1, -(We / ue.size.height) * 2 + 1), ue.raycaster.setFromCamera(ue.pointer, ue.camera)
                        }
                    }), J == null || J(W)
                }
            }), L.current.render(lt.jsx(ie, {
                children: lt.jsx(Eu, {
                    set: it,
                    children: lt.jsx(Y.Suspense, {
                        fallback: lt.jsx(Ja, {
                            set: be
                        }),
                        children: u
                    })
                })
            })))
        }), Y.useEffect(() => {
            const U = j.current;
            if (U) return () => Lu(U)
        }, []);
        const H = M ? "none" : "auto";
        return lt.jsx("div", {
            ref: le,
            style: {
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: H,
                ...w
            },
            ...V,
            children: lt.jsx("div", {
                ref: b,
                style: {
                    width: "100%",
                    height: "100%"
                },
                children: lt.jsx("canvas", {
                    ref: j,
                    style: {
                        display: "block"
                    },
                    children: a
                })
            })
        })
    }),
    Dc = Y.forwardRef(function(u, a) {
        return lt.jsx(Fu, {
            children: lt.jsx(Rc, { ...u,
                ref: a
            })
        })
    });
export {
    Dc as C, Oc as a, Fc as b, Mu as u
};
//# sourceMappingURL=fiber-CXtEzY3H.js.map