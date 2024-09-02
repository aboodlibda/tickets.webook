import {
    r as y,
    R as Es
} from "./vendor-DR5RWKqR.js";
const Ke = y.createContext({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    }),
    ae = y.createContext({}),
    ce = y.createContext(null),
    le = typeof document < "u",
    bt = le ? y.useLayoutEffect : y.useEffect,
    Bs = y.createContext({
        strict: !1
    }),
    _e = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
    er = "framerAppearId",
    Fs = "data-" + _e(er);

function nr(t, e, n, s) {
    const {
        visualElement: i
    } = y.useContext(ae), o = y.useContext(Bs), r = y.useContext(ce), a = y.useContext(Ke).reducedMotion, c = y.useRef();
    s = s || o.renderer, !c.current && s && (c.current = s(t, {
        visualState: e,
        parent: i,
        props: n,
        presenceContext: r,
        blockInitialAnimation: r ? r.initial === !1 : !1,
        reducedMotionConfig: a
    }));
    const l = c.current;
    y.useInsertionEffect(() => {
        l && l.update(n, r)
    });
    const u = y.useRef(!!(n[Fs] && !window.HandoffComplete));
    return bt(() => {
        l && (l.render(), u.current && l.animationState && l.animationState.animateChanges())
    }), y.useEffect(() => {
        l && (l.updateFeatures(), !u.current && l.animationState && l.animationState.animateChanges(), u.current && (u.current = !1, window.HandoffComplete = !0))
    }), l
}

function gt(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}

function sr(t, e, n) {
    return y.useCallback(s => {
        s && t.mount && t.mount(s), e && (s ? e.mount(s) : e.unmount()), n && (typeof n == "function" ? n(s) : gt(n) && (n.current = s))
    }, [e])
}

function jt(t) {
    return typeof t == "string" || Array.isArray(t)
}

function ue(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
const Xe = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Ye = ["initial", ...Xe];

function fe(t) {
    return ue(t.animate) || Ye.some(e => jt(t[e]))
}

function ks(t) {
    return !!(fe(t) || t.variants)
}

function ir(t, e) {
    if (fe(t)) {
        const {
            initial: n,
            animate: s
        } = t;
        return {
            initial: n === !1 || jt(n) ? n : void 0,
            animate: jt(s) ? s : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}

function rr(t) {
    const {
        initial: e,
        animate: n
    } = ir(t, y.useContext(ae));
    return y.useMemo(() => ({
        initial: e,
        animate: n
    }), [Tn(e), Tn(n)])
}

function Tn(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const bn = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    It = {};
for (const t in bn) It[t] = {
    isEnabled: e => bn[t].some(n => !!e[n])
};

function or(t) {
    for (const e in t) It[e] = { ...It[e],
        ...t[e]
    }
}
const qe = y.createContext({}),
    Os = y.createContext({}),
    ar = Symbol.for("motionComponentSymbol");

function cr({
    preloadedFeatures: t,
    createVisualElement: e,
    useRender: n,
    useVisualState: s,
    Component: i
}) {
    t && or(t);

    function o(a, c) {
        let l;
        const u = { ...y.useContext(Ke),
                ...a,
                layoutId: lr(a)
            },
            {
                isStatic: f
            } = u,
            h = rr(a),
            d = s(a, f);
        if (!f && le) {
            h.visualElement = nr(i, d, u, e);
            const p = y.useContext(Os),
                m = y.useContext(Bs).strict;
            h.visualElement && (l = h.visualElement.loadFeatures(u, m, t, p))
        }
        return y.createElement(ae.Provider, {
            value: h
        }, l && h.visualElement ? y.createElement(l, {
            visualElement: h.visualElement,
            ...u
        }) : null, n(i, a, sr(d, h.visualElement, c), d, f, h.visualElement))
    }
    const r = y.forwardRef(o);
    return r[ar] = i, r
}

function lr({
    layoutId: t
}) {
    const e = y.useContext(qe).id;
    return e && t !== void 0 ? e + "-" + t : t
}

function ur(t) {
    function e(s, i = {}) {
        return cr(t(s, i))
    }
    if (typeof Proxy > "u") return e;
    const n = new Map;
    return new Proxy(e, {
        get: (s, i) => (n.has(i) || n.set(i, e(i)), n.get(i))
    })
}
const fr = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Ze(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(fr.indexOf(t) > -1 || /[A-Z]/.test(t))
}
const Jt = {};

function hr(t) {
    Object.assign(Jt, t)
}
const Ut = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    ft = new Set(Ut);

function js(t, {
    layout: e,
    layoutId: n
}) {
    return ft.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Jt[t] || t === "opacity")
}
const j = t => !!(t && t.getVelocity),
    dr = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    pr = Ut.length;

function mr(t, {
    enableHardwareAcceleration: e = !0,
    allowTransformNone: n = !0
}, s, i) {
    let o = "";
    for (let r = 0; r < pr; r++) {
        const a = Ut[r];
        if (t[a] !== void 0) {
            const c = dr[a] || a;
            o += `${c}(${t[a]}) `
        }
    }
    return e && !t.z && (o += "translateZ(0)"), o = o.trim(), i ? o = i(t, s ? "" : o) : n && s && (o = "none"), o
}
const Is = t => e => typeof e == "string" && e.startsWith(t),
    Us = Is("--"),
    Le = Is("var(--"),
    gr = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
    yr = (t, e) => e && typeof t == "number" ? e.transform(t) : t,
    et = (t, e, n) => Math.min(Math.max(n, t), e),
    ht = {
        test: t => typeof t == "number",
        parse: parseFloat,
        transform: t => t
    },
    Lt = { ...ht,
        transform: t => et(0, 1, t)
    },
    Gt = { ...ht,
        default: 1
    },
    Et = t => Math.round(t * 1e5) / 1e5,
    he = /(-)?([\d]*\.?[\d])+/g,
    Ws = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
    vr = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

function Wt(t) {
    return typeof t == "string"
}
const Nt = t => ({
        test: e => Wt(e) && e.endsWith(t) && e.split(" ").length === 1,
        parse: parseFloat,
        transform: e => `${e}${t}`
    }),
    Z = Nt("deg"),
    $ = Nt("%"),
    b = Nt("px"),
    xr = Nt("vh"),
    Pr = Nt("vw"),
    Vn = { ...$,
        parse: t => $.parse(t) / 100,
        transform: t => $.transform(t * 100)
    },
    Sn = { ...ht,
        transform: Math.round
    },
    Ns = {
        borderWidth: b,
        borderTopWidth: b,
        borderRightWidth: b,
        borderBottomWidth: b,
        borderLeftWidth: b,
        borderRadius: b,
        radius: b,
        borderTopLeftRadius: b,
        borderTopRightRadius: b,
        borderBottomRightRadius: b,
        borderBottomLeftRadius: b,
        width: b,
        maxWidth: b,
        height: b,
        maxHeight: b,
        size: b,
        top: b,
        right: b,
        bottom: b,
        left: b,
        padding: b,
        paddingTop: b,
        paddingRight: b,
        paddingBottom: b,
        paddingLeft: b,
        margin: b,
        marginTop: b,
        marginRight: b,
        marginBottom: b,
        marginLeft: b,
        rotate: Z,
        rotateX: Z,
        rotateY: Z,
        rotateZ: Z,
        scale: Gt,
        scaleX: Gt,
        scaleY: Gt,
        scaleZ: Gt,
        skew: Z,
        skewX: Z,
        skewY: Z,
        distance: b,
        translateX: b,
        translateY: b,
        translateZ: b,
        x: b,
        y: b,
        z: b,
        perspective: b,
        transformPerspective: b,
        opacity: Lt,
        originX: Vn,
        originY: Vn,
        originZ: b,
        zIndex: Sn,
        fillOpacity: Lt,
        strokeOpacity: Lt,
        numOctaves: Sn
    };

function Je(t, e, n, s) {
    const {
        style: i,
        vars: o,
        transform: r,
        transformOrigin: a
    } = t;
    let c = !1,
        l = !1,
        u = !0;
    for (const f in e) {
        const h = e[f];
        if (Us(f)) {
            o[f] = h;
            continue
        }
        const d = Ns[f],
            p = yr(h, d);
        if (ft.has(f)) {
            if (c = !0, r[f] = p, !u) continue;
            h !== (d.default || 0) && (u = !1)
        } else f.startsWith("origin") ? (l = !0, a[f] = p) : i[f] = p
    }
    if (e.transform || (c || s ? i.transform = mr(t.transform, n, u, s) : i.transform && (i.transform = "none")), l) {
        const {
            originX: f = "50%",
            originY: h = "50%",
            originZ: d = 0
        } = a;
        i.transformOrigin = `${f} ${h} ${d}`
    }
}
const Qe = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function zs(t, e, n) {
    for (const s in e) !j(e[s]) && !js(s, n) && (t[s] = e[s])
}

function Tr({
    transformTemplate: t
}, e, n) {
    return y.useMemo(() => {
        const s = Qe();
        return Je(s, e, {
            enableHardwareAcceleration: !n
        }, t), Object.assign({}, s.vars, s.style)
    }, [e])
}

function br(t, e, n) {
    const s = t.style || {},
        i = {};
    return zs(i, s, t), Object.assign(i, Tr(t, e, n)), t.transformValues ? t.transformValues(i) : i
}

function Vr(t, e, n) {
    const s = {},
        i = br(t, e, n);
    return t.drag && t.dragListener !== !1 && (s.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag==="x"?"y":"x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (s.tabIndex = 0), s.style = i, s
}
const Sr = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function Qt(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Sr.has(t)
}
let Hs = t => !Qt(t);

function Ar(t) {
    t && (Hs = e => e.startsWith("on") ? !Qt(e) : t(e))
}
try {
    Ar(require("@emotion/is-prop-valid").default)
} catch {}

function Cr(t, e, n) {
    const s = {};
    for (const i in t) i === "values" && typeof t.values == "object" || (Hs(i) || n === !0 && Qt(i) || !e && !Qt(i) || t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
    return s
}

function An(t, e, n) {
    return typeof t == "string" ? t : b.transform(e + n * t)
}

function wr(t, e, n) {
    const s = An(e, t.x, t.width),
        i = An(n, t.y, t.height);
    return `${s} ${i}`
}
const Mr = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    Dr = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function Rr(t, e, n = 1, s = 0, i = !0) {
    t.pathLength = 1;
    const o = i ? Mr : Dr;
    t[o.offset] = b.transform(-s);
    const r = b.transform(e),
        a = b.transform(n);
    t[o.array] = `${r} ${a}`
}

function tn(t, {
    attrX: e,
    attrY: n,
    attrScale: s,
    originX: i,
    originY: o,
    pathLength: r,
    pathSpacing: a = 1,
    pathOffset: c = 0,
    ...l
}, u, f, h) {
    if (Je(t, l, u, h), f) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style, t.style = {};
    const {
        attrs: d,
        style: p,
        dimensions: m
    } = t;
    d.transform && (m && (p.transform = d.transform), delete d.transform), m && (i !== void 0 || o !== void 0 || p.transform) && (p.transformOrigin = wr(m, i !== void 0 ? i : .5, o !== void 0 ? o : .5)), e !== void 0 && (d.x = e), n !== void 0 && (d.y = n), s !== void 0 && (d.scale = s), r !== void 0 && Rr(d, r, a, c, !1)
}
const Gs = () => ({ ...Qe(),
        attrs: {}
    }),
    en = t => typeof t == "string" && t.toLowerCase() === "svg";

function Lr(t, e, n, s) {
    const i = y.useMemo(() => {
        const o = Gs();
        return tn(o, e, {
            enableHardwareAcceleration: !1
        }, en(s), t.transformTemplate), { ...o.attrs,
            style: { ...o.style
            }
        }
    }, [e]);
    if (t.style) {
        const o = {};
        zs(o, t.style, t), i.style = { ...o,
            ...i.style
        }
    }
    return i
}

function Er(t = !1) {
    return (n, s, i, {
        latestValues: o
    }, r) => {
        const c = (Ze(n) ? Lr : Vr)(s, o, r, n),
            u = { ...Cr(s, typeof n == "string", t),
                ...c,
                ref: i
            },
            {
                children: f
            } = s,
            h = y.useMemo(() => j(f) ? f.get() : f, [f]);
        return y.createElement(n, { ...u,
            children: h
        })
    }
}

function $s(t, {
    style: e,
    vars: n
}, s, i) {
    Object.assign(t.style, e, i && i.getProjectionStyles(s));
    for (const o in n) t.style.setProperty(o, n[o])
}
const Ks = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function _s(t, e, n, s) {
    $s(t, e, void 0, s);
    for (const i in e.attrs) t.setAttribute(Ks.has(i) ? i : _e(i), e.attrs[i])
}

function nn(t, e) {
    const {
        style: n
    } = t, s = {};
    for (const i in n)(j(n[i]) || e.style && j(e.style[i]) || js(i, t)) && (s[i] = n[i]);
    return s
}

function Xs(t, e) {
    const n = nn(t, e);
    for (const s in t)
        if (j(t[s]) || j(e[s])) {
            const i = Ut.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
            n[i] = t[s]
        }
    return n
}

function sn(t, e, n, s = {}, i = {}) {
    return typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, s, i)), typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, s, i)), e
}

function Vt(t) {
    const e = y.useRef(null);
    return e.current === null && (e.current = t()), e.current
}
const te = t => Array.isArray(t),
    Br = t => !!(t && typeof t == "object" && t.mix && t.toValue),
    Fr = t => te(t) ? t[t.length - 1] || 0 : t;

function Xt(t) {
    const e = j(t) ? t.get() : t;
    return Br(e) ? e.toValue() : e
}

function kr({
    scrapeMotionValuesFromProps: t,
    createRenderState: e,
    onMount: n
}, s, i, o) {
    const r = {
        latestValues: Or(s, i, o, t),
        renderState: e()
    };
    return n && (r.mount = a => n(s, a, r)), r
}
const Ys = t => (e, n) => {
    const s = y.useContext(ae),
        i = y.useContext(ce),
        o = () => kr(t, e, s, i);
    return n ? o() : Vt(o)
};

function Or(t, e, n, s) {
    const i = {},
        o = s(t, {});
    for (const h in o) i[h] = Xt(o[h]);
    let {
        initial: r,
        animate: a
    } = t;
    const c = fe(t),
        l = ks(t);
    e && l && !c && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
    let u = n ? n.initial === !1 : !1;
    u = u || r === !1;
    const f = u ? a : r;
    return f && typeof f != "boolean" && !ue(f) && (Array.isArray(f) ? f : [f]).forEach(d => {
        const p = sn(t, d);
        if (!p) return;
        const {
            transitionEnd: m,
            transition: x,
            ...T
        } = p;
        for (const v in T) {
            let g = T[v];
            if (Array.isArray(g)) {
                const P = u ? g.length - 1 : 0;
                g = g[P]
            }
            g !== null && (i[v] = g)
        }
        for (const v in m) i[v] = m[v]
    }), i
}
const L = t => t;
class Cn {
    constructor() {
        this.order = [], this.scheduled = new Set
    }
    add(e) {
        if (!this.scheduled.has(e)) return this.scheduled.add(e), this.order.push(e), !0
    }
    remove(e) {
        const n = this.order.indexOf(e);
        n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(e))
    }
    clear() {
        this.order.length = 0, this.scheduled.clear()
    }
}

function jr(t) {
    let e = new Cn,
        n = new Cn,
        s = 0,
        i = !1,
        o = !1;
    const r = new WeakSet,
        a = {
            schedule: (c, l = !1, u = !1) => {
                const f = u && i,
                    h = f ? e : n;
                return l && r.add(c), h.add(c) && f && i && (s = e.order.length), c
            },
            cancel: c => {
                n.remove(c), r.delete(c)
            },
            process: c => {
                if (i) {
                    o = !0;
                    return
                }
                if (i = !0, [e, n] = [n, e], n.clear(), s = e.order.length, s)
                    for (let l = 0; l < s; l++) {
                        const u = e.order[l];
                        u(c), r.has(u) && (a.schedule(u), t())
                    }
                i = !1, o && (o = !1, a.process(c))
            }
        };
    return a
}
const $t = ["prepare", "read", "update", "preRender", "render", "postRender"],
    Ir = 40;

function Ur(t, e) {
    let n = !1,
        s = !0;
    const i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        o = $t.reduce((f, h) => (f[h] = jr(() => n = !0), f), {}),
        r = f => o[f].process(i),
        a = () => {
            const f = performance.now();
            n = !1, i.delta = s ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, Ir), 1), i.timestamp = f, i.isProcessing = !0, $t.forEach(r), i.isProcessing = !1, n && e && (s = !1, t(a))
        },
        c = () => {
            n = !0, s = !0, i.isProcessing || t(a)
        };
    return {
        schedule: $t.reduce((f, h) => {
            const d = o[h];
            return f[h] = (p, m = !1, x = !1) => (n || c(), d.schedule(p, m, x)), f
        }, {}),
        cancel: f => $t.forEach(h => o[h].cancel(f)),
        state: i,
        steps: o
    }
}
const {
    schedule: A,
    cancel: G,
    state: F,
    steps: ye
} = Ur(typeof requestAnimationFrame < "u" ? requestAnimationFrame : L, !0), Wr = {
    useVisualState: Ys({
        scrapeMotionValuesFromProps: Xs,
        createRenderState: Gs,
        onMount: (t, e, {
            renderState: n,
            latestValues: s
        }) => {
            A.read(() => {
                try {
                    n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }), A.render(() => {
                tn(n, s, {
                    enableHardwareAcceleration: !1
                }, en(e.tagName), t.transformTemplate), _s(e, n)
            })
        }
    })
}, Nr = {
    useVisualState: Ys({
        scrapeMotionValuesFromProps: nn,
        createRenderState: Qe
    })
};

function zr(t, {
    forwardMotionProps: e = !1
}, n, s) {
    return { ...Ze(t) ? Wr : Nr,
        preloadedFeatures: n,
        useRender: Er(e),
        createVisualElement: s,
        Component: t
    }
}

function _(t, e, n, s = {
    passive: !0
}) {
    return t.addEventListener(e, n, s), () => t.removeEventListener(e, n)
}
const qs = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1;

function de(t, e = "page") {
    return {
        point: {
            x: t[e + "X"],
            y: t[e + "Y"]
        }
    }
}
const Hr = t => e => qs(e) && t(e, de(e));

function X(t, e, n, s) {
    return _(t, e, Hr(n), s)
}
const Gr = (t, e) => n => e(t(n)),
    tt = (...t) => t.reduce(Gr);

function Zs(t) {
    let e = null;
    return () => {
        const n = () => {
            e = null
        };
        return e === null ? (e = t, n) : !1
    }
}
const wn = Zs("dragHorizontal"),
    Mn = Zs("dragVertical");

function Js(t) {
    let e = !1;
    if (t === "y") e = Mn();
    else if (t === "x") e = wn();
    else {
        const n = wn(),
            s = Mn();
        n && s ? e = () => {
            n(), s()
        } : (n && n(), s && s())
    }
    return e
}

function Qs() {
    const t = Js(!0);
    return t ? (t(), !1) : !0
}
class st {
    constructor(e) {
        this.isMounted = !1, this.node = e
    }
    update() {}
}

function Dn(t, e) {
    const n = "pointer" + (e ? "enter" : "leave"),
        s = "onHover" + (e ? "Start" : "End"),
        i = (o, r) => {
            if (o.pointerType === "touch" || Qs()) return;
            const a = t.getProps();
            t.animationState && a.whileHover && t.animationState.setActive("whileHover", e), a[s] && A.update(() => a[s](o, r))
        };
    return X(t.current, n, i, {
        passive: !t.getProps()[s]
    })
}
class $r extends st {
    mount() {
        this.unmount = tt(Dn(this.node, !0), Dn(this.node, !1))
    }
    unmount() {}
}
class Kr extends st {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = tt(_(this.node.current, "focus", () => this.onFocus()), _(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const ti = (t, e) => e ? t === e ? !0 : ti(t, e.parentElement) : !1;

function ve(t, e) {
    if (!e) return;
    const n = new PointerEvent("pointer" + t);
    e(n, de(n))
}
class _r extends st {
    constructor() {
        super(...arguments), this.removeStartListeners = L, this.removeEndListeners = L, this.removeAccessibleListeners = L, this.startPointerPress = (e, n) => {
            if (this.isPressing) return;
            this.removeEndListeners();
            const s = this.node.getProps(),
                o = X(window, "pointerup", (a, c) => {
                    if (!this.checkPressEnd()) return;
                    const {
                        onTap: l,
                        onTapCancel: u,
                        globalTapTarget: f
                    } = this.node.getProps();
                    A.update(() => {
                        !f && !ti(this.node.current, a.target) ? u && u(a, c) : l && l(a, c)
                    })
                }, {
                    passive: !(s.onTap || s.onPointerUp)
                }),
                r = X(window, "pointercancel", (a, c) => this.cancelPress(a, c), {
                    passive: !(s.onTapCancel || s.onPointerCancel)
                });
            this.removeEndListeners = tt(o, r), this.startPress(e, n)
        }, this.startAccessiblePress = () => {
            const e = o => {
                    if (o.key !== "Enter" || this.isPressing) return;
                    const r = a => {
                        a.key !== "Enter" || !this.checkPressEnd() || ve("up", (c, l) => {
                            const {
                                onTap: u
                            } = this.node.getProps();
                            u && A.update(() => u(c, l))
                        })
                    };
                    this.removeEndListeners(), this.removeEndListeners = _(this.node.current, "keyup", r), ve("down", (a, c) => {
                        this.startPress(a, c)
                    })
                },
                n = _(this.node.current, "keydown", e),
                s = () => {
                    this.isPressing && ve("cancel", (o, r) => this.cancelPress(o, r))
                },
                i = _(this.node.current, "blur", s);
            this.removeAccessibleListeners = tt(n, i)
        }
    }
    startPress(e, n) {
        this.isPressing = !0;
        const {
            onTapStart: s,
            whileTap: i
        } = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), s && A.update(() => s(e, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Qs()
    }
    cancelPress(e, n) {
        if (!this.checkPressEnd()) return;
        const {
            onTapCancel: s
        } = this.node.getProps();
        s && A.update(() => s(e, n))
    }
    mount() {
        const e = this.node.getProps(),
            n = X(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(e.onTapStart || e.onPointerStart)
            }),
            s = _(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = tt(n, s)
    }
    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
    }
}
const Ee = new WeakMap,
    xe = new WeakMap,
    Xr = t => {
        const e = Ee.get(t.target);
        e && e(t)
    },
    Yr = t => {
        t.forEach(Xr)
    };

function qr({
    root: t,
    ...e
}) {
    const n = t || document;
    xe.has(n) || xe.set(n, {});
    const s = xe.get(n),
        i = JSON.stringify(e);
    return s[i] || (s[i] = new IntersectionObserver(Yr, {
        root: t,
        ...e
    })), s[i]
}

function Zr(t, e, n) {
    const s = qr(e);
    return Ee.set(t, n), s.observe(t), () => {
        Ee.delete(t), s.unobserve(t)
    }
}
const Jr = {
    some: 0,
    all: 1
};
class Qr extends st {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: e = {}
        } = this.node.getProps(), {
            root: n,
            margin: s,
            amount: i = "some",
            once: o
        } = e, r = {
            root: n ? n.current : void 0,
            rootMargin: s,
            threshold: typeof i == "number" ? i : Jr[i]
        }, a = c => {
            const {
                isIntersecting: l
            } = c;
            if (this.isInView === l || (this.isInView = l, o && !l && this.hasEnteredView)) return;
            l && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", l);
            const {
                onViewportEnter: u,
                onViewportLeave: f
            } = this.node.getProps(), h = l ? u : f;
            h && h(c)
        };
        return Zr(this.node.current, r, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: e,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(to(e, n)) && this.startObserver()
    }
    unmount() {}
}

function to({
    viewport: t = {}
}, {
    viewport: e = {}
} = {}) {
    return n => t[n] !== e[n]
}
const eo = {
    inView: {
        Feature: Qr
    },
    tap: {
        Feature: _r
    },
    focus: {
        Feature: Kr
    },
    hover: {
        Feature: $r
    }
};

function ei(t, e) {
    if (!Array.isArray(e)) return !1;
    const n = e.length;
    if (n !== t.length) return !1;
    for (let s = 0; s < n; s++)
        if (e[s] !== t[s]) return !1;
    return !0
}

function no(t) {
    const e = {};
    return t.values.forEach((n, s) => e[s] = n.get()), e
}

function so(t) {
    const e = {};
    return t.values.forEach((n, s) => e[s] = n.getVelocity()), e
}

function pe(t, e, n) {
    const s = t.getProps();
    return sn(s, e, n !== void 0 ? n : s.custom, no(t), so(t))
}
let io = L,
    ee = L;
const ut = t => t * 1e3,
    Y = t => t / 1e3,
    ro = {
        current: !1
    },
    ni = t => Array.isArray(t) && typeof t[0] == "number";

function si(t) {
    return !!(!t || typeof t == "string" && ii[t] || ni(t) || Array.isArray(t) && t.every(si))
}
const Rt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
    ii = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Rt([0, .65, .55, 1]),
        circOut: Rt([.55, 0, 1, .45]),
        backIn: Rt([.31, .01, .66, -.59]),
        backOut: Rt([.33, 1.53, .69, .99])
    };

function ri(t) {
    if (t) return ni(t) ? Rt(t) : Array.isArray(t) ? t.map(ri) : ii[t]
}

function oo(t, e, n, {
    delay: s = 0,
    duration: i,
    repeat: o = 0,
    repeatType: r = "loop",
    ease: a,
    times: c
} = {}) {
    const l = {
        [e]: n
    };
    c && (l.offset = c);
    const u = ri(a);
    return Array.isArray(u) && (l.easing = u), t.animate(l, {
        delay: s,
        duration: i,
        easing: Array.isArray(u) ? "linear" : u,
        fill: "both",
        iterations: o + 1,
        direction: r === "reverse" ? "alternate" : "normal"
    })
}

function ao(t, {
    repeat: e,
    repeatType: n = "loop"
}) {
    const s = e && n !== "loop" && e % 2 === 1 ? 0 : t.length - 1;
    return t[s]
}
const oi = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
    co = 1e-7,
    lo = 12;

function uo(t, e, n, s, i) {
    let o, r, a = 0;
    do r = e + (n - e) / 2, o = oi(r, s, i) - t, o > 0 ? n = r : e = r; while (Math.abs(o) > co && ++a < lo);
    return r
}

function zt(t, e, n, s) {
    if (t === e && n === s) return L;
    const i = o => uo(o, 0, 1, t, n);
    return o => o === 0 || o === 1 ? o : oi(i(o), e, s)
}
const fo = zt(.42, 0, 1, 1),
    ho = zt(0, 0, .58, 1),
    ai = zt(.42, 0, .58, 1),
    po = t => Array.isArray(t) && typeof t[0] != "number",
    ci = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
    li = t => e => 1 - t(1 - e),
    rn = t => 1 - Math.sin(Math.acos(t)),
    ui = li(rn),
    mo = ci(rn),
    fi = zt(.33, 1.53, .69, .99),
    on = li(fi),
    go = ci(on),
    yo = t => (t *= 2) < 1 ? .5 * on(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
    Rn = {
        linear: L,
        easeIn: fo,
        easeInOut: ai,
        easeOut: ho,
        circIn: rn,
        circInOut: mo,
        circOut: ui,
        backIn: on,
        backInOut: go,
        backOut: fi,
        anticipate: yo
    },
    Ln = t => {
        if (Array.isArray(t)) {
            ee(t.length === 4);
            const [e, n, s, i] = t;
            return zt(e, n, s, i)
        } else if (typeof t == "string") return ee(Rn[t] !== void 0), Rn[t];
        return t
    },
    an = (t, e) => n => !!(Wt(n) && vr.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
    hi = (t, e, n) => s => {
        if (!Wt(s)) return s;
        const [i, o, r, a] = s.match(he);
        return {
            [t]: parseFloat(i),
            [e]: parseFloat(o),
            [n]: parseFloat(r),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    },
    vo = t => et(0, 255, t),
    Pe = { ...ht,
        transform: t => Math.round(vo(t))
    },
    lt = {
        test: an("rgb", "red"),
        parse: hi("red", "green", "blue"),
        transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: s = 1
        }) => "rgba(" + Pe.transform(t) + ", " + Pe.transform(e) + ", " + Pe.transform(n) + ", " + Et(Lt.transform(s)) + ")"
    };

function xo(t) {
    let e = "",
        n = "",
        s = "",
        i = "";
    return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, s += s, i += i), {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(s, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Be = {
        test: an("#"),
        parse: xo,
        transform: lt.transform
    },
    yt = {
        test: an("hsl", "hue"),
        parse: hi("hue", "saturation", "lightness"),
        transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: s = 1
        }) => "hsla(" + Math.round(t) + ", " + $.transform(Et(e)) + ", " + $.transform(Et(n)) + ", " + Et(Lt.transform(s)) + ")"
    },
    O = {
        test: t => lt.test(t) || Be.test(t) || yt.test(t),
        parse: t => lt.test(t) ? lt.parse(t) : yt.test(t) ? yt.parse(t) : Be.parse(t),
        transform: t => Wt(t) ? t : t.hasOwnProperty("red") ? lt.transform(t) : yt.transform(t)
    },
    R = (t, e, n) => -n * t + n * e + t;

function Te(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}

function Po({
    hue: t,
    saturation: e,
    lightness: n,
    alpha: s
}) {
    t /= 360, e /= 100, n /= 100;
    let i = 0,
        o = 0,
        r = 0;
    if (!e) i = o = r = n;
    else {
        const a = n < .5 ? n * (1 + e) : n + e - n * e,
            c = 2 * n - a;
        i = Te(c, a, t + 1 / 3), o = Te(c, a, t), r = Te(c, a, t - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(r * 255),
        alpha: s
    }
}
const be = (t, e, n) => {
        const s = t * t;
        return Math.sqrt(Math.max(0, n * (e * e - s) + s))
    },
    To = [Be, lt, yt],
    bo = t => To.find(e => e.test(t));

function En(t) {
    const e = bo(t);
    let n = e.parse(t);
    return e === yt && (n = Po(n)), n
}
const di = (t, e) => {
    const n = En(t),
        s = En(e),
        i = { ...n
        };
    return o => (i.red = be(n.red, s.red, o), i.green = be(n.green, s.green, o), i.blue = be(n.blue, s.blue, o), i.alpha = R(n.alpha, s.alpha, o), lt.transform(i))
};

function Vo(t) {
    var e, n;
    return isNaN(t) && Wt(t) && (((e = t.match(he)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Ws)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const pi = {
        regex: gr,
        countKey: "Vars",
        token: "${v}",
        parse: L
    },
    mi = {
        regex: Ws,
        countKey: "Colors",
        token: "${c}",
        parse: O.parse
    },
    gi = {
        regex: he,
        countKey: "Numbers",
        token: "${n}",
        parse: ht.parse
    };

function Ve(t, {
    regex: e,
    countKey: n,
    token: s,
    parse: i
}) {
    const o = t.tokenised.match(e);
    o && (t["num" + n] = o.length, t.tokenised = t.tokenised.replace(e, s), t.values.push(...o.map(i)))
}

function ne(t) {
    const e = t.toString(),
        n = {
            value: e,
            tokenised: e,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0
        };
    return n.value.includes("var(--") && Ve(n, pi), Ve(n, mi), Ve(n, gi), n
}

function yi(t) {
    return ne(t).values
}

function vi(t) {
    const {
        values: e,
        numColors: n,
        numVars: s,
        tokenised: i
    } = ne(t), o = e.length;
    return r => {
        let a = i;
        for (let c = 0; c < o; c++) c < s ? a = a.replace(pi.token, r[c]) : c < s + n ? a = a.replace(mi.token, O.transform(r[c])) : a = a.replace(gi.token, Et(r[c]));
        return a
    }
}
const So = t => typeof t == "number" ? 0 : t;

function Ao(t) {
    const e = yi(t);
    return vi(t)(e.map(So))
}
const nt = {
        test: Vo,
        parse: yi,
        createTransformer: vi,
        getAnimatableNone: Ao
    },
    xi = (t, e) => n => `${n>0?e:t}`;

function Pi(t, e) {
    return typeof t == "number" ? n => R(t, e, n) : O.test(t) ? di(t, e) : t.startsWith("var(") ? xi(t, e) : bi(t, e)
}
const Ti = (t, e) => {
        const n = [...t],
            s = n.length,
            i = t.map((o, r) => Pi(o, e[r]));
        return o => {
            for (let r = 0; r < s; r++) n[r] = i[r](o);
            return n
        }
    },
    Co = (t, e) => {
        const n = { ...t,
                ...e
            },
            s = {};
        for (const i in n) t[i] !== void 0 && e[i] !== void 0 && (s[i] = Pi(t[i], e[i]));
        return i => {
            for (const o in s) n[o] = s[o](i);
            return n
        }
    },
    bi = (t, e) => {
        const n = nt.createTransformer(e),
            s = ne(t),
            i = ne(e);
        return s.numVars === i.numVars && s.numColors === i.numColors && s.numNumbers >= i.numNumbers ? tt(Ti(s.values, i.values), n) : xi(t, e)
    },
    Pt = (t, e, n) => {
        const s = e - t;
        return s === 0 ? 1 : (n - t) / s
    },
    Bn = (t, e) => n => R(t, e, n);

function wo(t) {
    return typeof t == "number" ? Bn : typeof t == "string" ? O.test(t) ? di : bi : Array.isArray(t) ? Ti : typeof t == "object" ? Co : Bn
}

function Mo(t, e, n) {
    const s = [],
        i = n || wo(t[0]),
        o = t.length - 1;
    for (let r = 0; r < o; r++) {
        let a = i(t[r], t[r + 1]);
        if (e) {
            const c = Array.isArray(e) ? e[r] || L : e;
            a = tt(c, a)
        }
        s.push(a)
    }
    return s
}

function me(t, e, {
    clamp: n = !0,
    ease: s,
    mixer: i
} = {}) {
    const o = t.length;
    if (ee(o === e.length), o === 1) return () => e[0];
    t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
    const r = Mo(e, s, i),
        a = r.length,
        c = l => {
            let u = 0;
            if (a > 1)
                for (; u < t.length - 2 && !(l < t[u + 1]); u++);
            const f = Pt(t[u], t[u + 1], l);
            return r[u](f)
        };
    return n ? l => c(et(t[0], t[o - 1], l)) : c
}

function Do(t, e) {
    const n = t[t.length - 1];
    for (let s = 1; s <= e; s++) {
        const i = Pt(0, e, s);
        t.push(R(n, 1, i))
    }
}

function Vi(t) {
    const e = [0];
    return Do(e, t.length - 1), e
}

function Ro(t, e) {
    return t.map(n => n * e)
}

function Lo(t, e) {
    return t.map(() => e || ai).splice(0, t.length - 1)
}

function se({
    duration: t = 300,
    keyframes: e,
    times: n,
    ease: s = "easeInOut"
}) {
    const i = po(s) ? s.map(Ln) : Ln(s),
        o = {
            done: !1,
            value: e[0]
        },
        r = Ro(n && n.length === e.length ? n : Vi(e), t),
        a = me(r, e, {
            ease: Array.isArray(i) ? i : Lo(e, i)
        });
    return {
        calculatedDuration: t,
        next: c => (o.value = a(c), o.done = c >= t, o)
    }
}

function cn(t, e) {
    return e ? t * (1e3 / e) : 0
}
const Eo = 5;

function Si(t, e, n) {
    const s = Math.max(e - Eo, 0);
    return cn(n - t(s), e - s)
}
const Se = .001,
    Bo = .01,
    Fo = 10,
    ko = .05,
    Oo = 1;

function jo({
    duration: t = 800,
    bounce: e = .25,
    velocity: n = 0,
    mass: s = 1
}) {
    let i, o, r = 1 - e;
    r = et(ko, Oo, r), t = et(Bo, Fo, Y(t)), r < 1 ? (i = l => {
        const u = l * r,
            f = u * t,
            h = u - n,
            d = Fe(l, r),
            p = Math.exp(-f);
        return Se - h / d * p
    }, o = l => {
        const f = l * r * t,
            h = f * n + n,
            d = Math.pow(r, 2) * Math.pow(l, 2) * t,
            p = Math.exp(-f),
            m = Fe(Math.pow(l, 2), r);
        return (-i(l) + Se > 0 ? -1 : 1) * ((h - d) * p) / m
    }) : (i = l => {
        const u = Math.exp(-l * t),
            f = (l - n) * t + 1;
        return -Se + u * f
    }, o = l => {
        const u = Math.exp(-l * t),
            f = (n - l) * (t * t);
        return u * f
    });
    const a = 5 / t,
        c = Uo(i, o, a);
    if (t = ut(t), isNaN(c)) return {
        stiffness: 100,
        damping: 10,
        duration: t
    }; {
        const l = Math.pow(c, 2) * s;
        return {
            stiffness: l,
            damping: r * 2 * Math.sqrt(s * l),
            duration: t
        }
    }
}
const Io = 12;

function Uo(t, e, n) {
    let s = n;
    for (let i = 1; i < Io; i++) s = s - t(s) / e(s);
    return s
}

function Fe(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const Wo = ["duration", "bounce"],
    No = ["stiffness", "damping", "mass"];

function Fn(t, e) {
    return e.some(n => t[n] !== void 0)
}

function zo(t) {
    let e = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!Fn(t, No) && Fn(t, Wo)) {
        const n = jo(t);
        e = { ...e,
            ...n,
            mass: 1
        }, e.isResolvedFromDuration = !0
    }
    return e
}

function Ai({
    keyframes: t,
    restDelta: e,
    restSpeed: n,
    ...s
}) {
    const i = t[0],
        o = t[t.length - 1],
        r = {
            done: !1,
            value: i
        },
        {
            stiffness: a,
            damping: c,
            mass: l,
            duration: u,
            velocity: f,
            isResolvedFromDuration: h
        } = zo({ ...s,
            velocity: -Y(s.velocity || 0)
        }),
        d = f || 0,
        p = c / (2 * Math.sqrt(a * l)),
        m = o - i,
        x = Y(Math.sqrt(a / l)),
        T = Math.abs(m) < 5;
    n || (n = T ? .01 : 2), e || (e = T ? .005 : .5);
    let v;
    if (p < 1) {
        const g = Fe(x, p);
        v = P => {
            const V = Math.exp(-p * x * P);
            return o - V * ((d + p * x * m) / g * Math.sin(g * P) + m * Math.cos(g * P))
        }
    } else if (p === 1) v = g => o - Math.exp(-x * g) * (m + (d + x * m) * g);
    else {
        const g = x * Math.sqrt(p * p - 1);
        v = P => {
            const V = Math.exp(-p * x * P),
                w = Math.min(g * P, 300);
            return o - V * ((d + p * x * m) * Math.sinh(w) + g * m * Math.cosh(w)) / g
        }
    }
    return {
        calculatedDuration: h && u || null,
        next: g => {
            const P = v(g);
            if (h) r.done = g >= u;
            else {
                let V = d;
                g !== 0 && (p < 1 ? V = Si(v, g, P) : V = 0);
                const w = Math.abs(V) <= n,
                    M = Math.abs(o - P) <= e;
                r.done = w && M
            }
            return r.value = r.done ? o : P, r
        }
    }
}

function kn({
    keyframes: t,
    velocity: e = 0,
    power: n = .8,
    timeConstant: s = 325,
    bounceDamping: i = 10,
    bounceStiffness: o = 500,
    modifyTarget: r,
    min: a,
    max: c,
    restDelta: l = .5,
    restSpeed: u
}) {
    const f = t[0],
        h = {
            done: !1,
            value: f
        },
        d = S => a !== void 0 && S < a || c !== void 0 && S > c,
        p = S => a === void 0 ? c : c === void 0 || Math.abs(a - S) < Math.abs(c - S) ? a : c;
    let m = n * e;
    const x = f + m,
        T = r === void 0 ? x : r(x);
    T !== x && (m = T - f);
    const v = S => -m * Math.exp(-S / s),
        g = S => T + v(S),
        P = S => {
            const C = v(S),
                U = g(S);
            h.done = Math.abs(C) <= l, h.value = h.done ? T : U
        };
    let V, w;
    const M = S => {
        d(h.value) && (V = S, w = Ai({
            keyframes: [h.value, p(h.value)],
            velocity: Si(g, S, h.value),
            damping: i,
            stiffness: o,
            restDelta: l,
            restSpeed: u
        }))
    };
    return M(0), {
        calculatedDuration: null,
        next: S => {
            let C = !1;
            return !w && V === void 0 && (C = !0, P(S), M(S)), V !== void 0 && S > V ? w.next(S - V) : (!C && P(S), h)
        }
    }
}
const Ho = t => {
        const e = ({
            timestamp: n
        }) => t(n);
        return {
            start: () => A.update(e, !0),
            stop: () => G(e),
            now: () => F.isProcessing ? F.timestamp : performance.now()
        }
    },
    On = 2e4;

function jn(t) {
    let e = 0;
    const n = 50;
    let s = t.next(e);
    for (; !s.done && e < On;) e += n, s = t.next(e);
    return e >= On ? 1 / 0 : e
}
const Go = {
    decay: kn,
    inertia: kn,
    tween: se,
    keyframes: se,
    spring: Ai
};

function ie({
    autoplay: t = !0,
    delay: e = 0,
    driver: n = Ho,
    keyframes: s,
    type: i = "keyframes",
    repeat: o = 0,
    repeatDelay: r = 0,
    repeatType: a = "loop",
    onPlay: c,
    onStop: l,
    onComplete: u,
    onUpdate: f,
    ...h
}) {
    let d = 1,
        p = !1,
        m, x;
    const T = () => {
        x = new Promise(D => {
            m = D
        })
    };
    T();
    let v;
    const g = Go[i] || se;
    let P;
    g !== se && typeof s[0] != "number" && (P = me([0, 100], s, {
        clamp: !1
    }), s = [0, 100]);
    const V = g({ ...h,
        keyframes: s
    });
    let w;
    a === "mirror" && (w = g({ ...h,
        keyframes: [...s].reverse(),
        velocity: -(h.velocity || 0)
    }));
    let M = "idle",
        S = null,
        C = null,
        U = null;
    V.calculatedDuration === null && o && (V.calculatedDuration = jn(V));
    const {
        calculatedDuration: dt
    } = V;
    let z = 1 / 0,
        K = 1 / 0;
    dt !== null && (z = dt + r, K = z * (o + 1) - r);
    let k = 0;
    const pt = D => {
            if (C === null) return;
            d > 0 && (C = Math.min(C, D)), d < 0 && (C = Math.min(D - K / d, C)), S !== null ? k = S : k = Math.round(D - C) * d;
            const At = k - e * (d >= 0 ? 1 : -1),
                yn = d >= 0 ? At < 0 : At > K;
            k = Math.max(At, 0), M === "finished" && S === null && (k = K);
            let vn = k,
                xn = V;
            if (o) {
                const ge = Math.min(k, K) / z;
                let Ht = Math.floor(ge),
                    it = ge % 1;
                !it && ge >= 1 && (it = 1), it === 1 && Ht--, Ht = Math.min(Ht, o + 1), !!(Ht % 2) && (a === "reverse" ? (it = 1 - it, r && (it -= r / z)) : a === "mirror" && (xn = w)), vn = et(0, 1, it) * z
            }
            const Ct = yn ? {
                done: !1,
                value: s[0]
            } : xn.next(vn);
            P && (Ct.value = P(Ct.value));
            let {
                done: Pn
            } = Ct;
            !yn && dt !== null && (Pn = d >= 0 ? k >= K : k <= 0);
            const tr = S === null && (M === "finished" || M === "running" && Pn);
            return f && f(Ct.value), tr && St(), Ct
        },
        B = () => {
            v && v.stop(), v = void 0
        },
        q = () => {
            M = "idle", B(), m(), T(), C = U = null
        },
        St = () => {
            M = "finished", u && u(), B(), m()
        },
        mt = () => {
            if (p) return;
            v || (v = n(pt));
            const D = v.now();
            c && c(), S !== null ? C = D - S : (!C || M === "finished") && (C = D), M === "finished" && T(), U = C, S = null, M = "running", v.start()
        };
    t && mt();
    const gn = {
        then(D, At) {
            return x.then(D, At)
        },
        get time() {
            return Y(k)
        },
        set time(D) {
            D = ut(D), k = D, S !== null || !v || d === 0 ? S = D : C = v.now() - D / d
        },
        get duration() {
            const D = V.calculatedDuration === null ? jn(V) : V.calculatedDuration;
            return Y(D)
        },
        get speed() {
            return d
        },
        set speed(D) {
            D === d || !v || (d = D, gn.time = Y(k))
        },
        get state() {
            return M
        },
        play: mt,
        pause: () => {
            M = "paused", S = k
        },
        stop: () => {
            p = !0, M !== "idle" && (M = "idle", l && l(), q())
        },
        cancel: () => {
            U !== null && pt(U), q()
        },
        complete: () => {
            M = "finished"
        },
        sample: D => (C = 0, pt(D))
    };
    return gn
}

function $o(t) {
    let e;
    return () => (e === void 0 && (e = t()), e)
}
const Ko = $o(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    _o = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
    Kt = 10,
    Xo = 2e4,
    Yo = (t, e) => e.type === "spring" || t === "backgroundColor" || !si(e.ease);

function qo(t, e, {
    onUpdate: n,
    onComplete: s,
    ...i
}) {
    if (!(Ko() && _o.has(e) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia")) return !1;
    let r = !1,
        a, c, l = !1;
    const u = () => {
        c = new Promise(g => {
            a = g
        })
    };
    u();
    let {
        keyframes: f,
        duration: h = 300,
        ease: d,
        times: p
    } = i;
    if (Yo(e, i)) {
        const g = ie({ ...i,
            repeat: 0,
            delay: 0
        });
        let P = {
            done: !1,
            value: f[0]
        };
        const V = [];
        let w = 0;
        for (; !P.done && w < Xo;) P = g.sample(w), V.push(P.value), w += Kt;
        p = void 0, f = V, h = w - Kt, d = "linear"
    }
    const m = oo(t.owner.current, e, f, { ...i,
            duration: h,
            ease: d,
            times: p
        }),
        x = () => {
            l = !1, m.cancel()
        },
        T = () => {
            l = !0, A.update(x), a(), u()
        };
    return m.onfinish = () => {
        l || (t.set(ao(f, i)), s && s(), T())
    }, {
        then(g, P) {
            return c.then(g, P)
        },
        attachTimeline(g) {
            return m.timeline = g, m.onfinish = null, L
        },
        get time() {
            return Y(m.currentTime || 0)
        },
        set time(g) {
            m.currentTime = ut(g)
        },
        get speed() {
            return m.playbackRate
        },
        set speed(g) {
            m.playbackRate = g
        },
        get duration() {
            return Y(h)
        },
        play: () => {
            r || (m.play(), G(x))
        },
        pause: () => m.pause(),
        stop: () => {
            if (r = !0, m.playState === "idle") return;
            const {
                currentTime: g
            } = m;
            if (g) {
                const P = ie({ ...i,
                    autoplay: !1
                });
                t.setWithVelocity(P.sample(g - Kt).value, P.sample(g).value, Kt)
            }
            T()
        },
        complete: () => {
            l || m.finish()
        },
        cancel: T
    }
}

function Zo({
    keyframes: t,
    delay: e,
    onUpdate: n,
    onComplete: s
}) {
    const i = () => (n && n(t[t.length - 1]), s && s(), {
        time: 0,
        speed: 1,
        duration: 0,
        play: L,
        pause: L,
        stop: L,
        then: o => (o(), Promise.resolve()),
        cancel: L,
        complete: L
    });
    return e ? ie({
        keyframes: [0, 1],
        duration: 0,
        delay: e,
        onComplete: i
    }) : i()
}
const Jo = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    Qo = t => ({
        type: "spring",
        stiffness: 550,
        damping: t === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    ta = {
        type: "keyframes",
        duration: .8
    },
    ea = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    na = (t, {
        keyframes: e
    }) => e.length > 2 ? ta : ft.has(t) ? t.startsWith("scale") ? Qo(e[1]) : Jo : ea,
    ke = (t, e) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (nt.test(e) || e === "0") && !e.startsWith("url(")),
    sa = new Set(["brightness", "contrast", "saturate", "opacity"]);

function ia(t) {
    const [e, n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") return t;
    const [s] = n.match(he) || [];
    if (!s) return t;
    const i = n.replace(s, "");
    let o = sa.has(e) ? 1 : 0;
    return s !== n && (o *= 100), e + "(" + o + i + ")"
}
const ra = /([a-z-]*)\(.*?\)/g,
    Oe = { ...nt,
        getAnimatableNone: t => {
            const e = t.match(ra);
            return e ? e.map(ia).join(" ") : t
        }
    },
    oa = { ...Ns,
        color: O,
        backgroundColor: O,
        outlineColor: O,
        fill: O,
        stroke: O,
        borderColor: O,
        borderTopColor: O,
        borderRightColor: O,
        borderBottomColor: O,
        borderLeftColor: O,
        filter: Oe,
        WebkitFilter: Oe
    },
    ln = t => oa[t];

function Ci(t, e) {
    let n = ln(t);
    return n !== Oe && (n = nt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const wi = t => /^0[^.\s]+$/.test(t);

function aa(t) {
    if (typeof t == "number") return t === 0;
    if (t !== null) return t === "none" || t === "0" || wi(t)
}

function ca(t, e, n, s) {
    const i = ke(e, n);
    let o;
    Array.isArray(n) ? o = [...n] : o = [null, n];
    const r = s.from !== void 0 ? s.from : t.get();
    let a;
    const c = [];
    for (let l = 0; l < o.length; l++) o[l] === null && (o[l] = l === 0 ? r : o[l - 1]), aa(o[l]) && c.push(l), typeof o[l] == "string" && o[l] !== "none" && o[l] !== "0" && (a = o[l]);
    if (i && c.length && a)
        for (let l = 0; l < c.length; l++) {
            const u = c[l];
            o[u] = Ci(e, a)
        }
    return o
}

function la({
    when: t,
    delay: e,
    delayChildren: n,
    staggerChildren: s,
    staggerDirection: i,
    repeat: o,
    repeatType: r,
    repeatDelay: a,
    from: c,
    elapsed: l,
    ...u
}) {
    return !!Object.keys(u).length
}

function un(t, e) {
    return t[e] || t.default || t
}
const ua = {
        skipAnimations: !1
    },
    fn = (t, e, n, s = {}) => i => {
        const o = un(s, t) || {},
            r = o.delay || s.delay || 0;
        let {
            elapsed: a = 0
        } = s;
        a = a - ut(r);
        const c = ca(e, t, n, o),
            l = c[0],
            u = c[c.length - 1],
            f = ke(t, l),
            h = ke(t, u);
        let d = {
            keyframes: c,
            velocity: e.getVelocity(),
            ease: "easeOut",
            ...o,
            delay: -a,
            onUpdate: p => {
                e.set(p), o.onUpdate && o.onUpdate(p)
            },
            onComplete: () => {
                i(), o.onComplete && o.onComplete()
            }
        };
        if (la(o) || (d = { ...d,
                ...na(t, d)
            }), d.duration && (d.duration = ut(d.duration)), d.repeatDelay && (d.repeatDelay = ut(d.repeatDelay)), !f || !h || ro.current || o.type === !1 || ua.skipAnimations) return Zo(d);
        if (!s.isHandoff && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
            const p = qo(e, t, d);
            if (p) return p
        }
        return ie(d)
    };

function re(t) {
    return !!(j(t) && t.add)
}
const Mi = t => /^\-?\d*\.?\d+$/.test(t);

function hn(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}

function dn(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
class pn {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return hn(this.subscriptions, e), () => dn(this.subscriptions, e)
    }
    notify(e, n, s) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](e, n, s);
            else
                for (let o = 0; o < i; o++) {
                    const r = this.subscriptions[o];
                    r && r(e, n, s)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const fa = t => !isNaN(parseFloat(t)),
    Bt = {
        current: void 0
    };
class ha {
    constructor(e, n = {}) {
        this.version = "10.18.0", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (s, i = !0) => {
            this.prev = this.current, this.current = s;
            const {
                delta: o,
                timestamp: r
            } = F;
            this.lastUpdated !== r && (this.timeDelta = o, this.lastUpdated = r, A.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.scheduleVelocityCheck = () => A.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: s
        }) => {
            s !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = fa(this.current), this.owner = n.owner
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, n) {
        this.events[e] || (this.events[e] = new pn);
        const s = this.events[e].add(n);
        return e === "change" ? () => {
            s(), A.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : s
    }
    clearListeners() {
        for (const e in this.events) this.events[e].clear()
    }
    attach(e, n) {
        this.passiveEffect = e, this.stopPassiveEffect = n
    }
    set(e, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, n, s) {
        this.set(n), this.prev = e, this.timeDelta = s
    }
    jump(e) {
        this.updateAndNotify(e), this.prev = e, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return Bt.current && Bt.current.push(this), this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? cn(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(e) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function H(t, e) {
    return new ha(t, e)
}
const Di = t => e => e.test(t),
    da = {
        test: t => t === "auto",
        parse: t => t
    },
    Ri = [ht, b, $, Z, Pr, xr, da],
    wt = t => Ri.find(Di(t)),
    pa = [...Ri, O, nt],
    ma = t => pa.find(Di(t));

function ga(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, H(n))
}

function mn(t, e) {
    const n = pe(t, e);
    let {
        transitionEnd: s = {},
        transition: i = {},
        ...o
    } = n ? t.makeTargetAnimatable(n, !1) : {};
    o = { ...o,
        ...s
    };
    for (const r in o) {
        const a = Fr(o[r]);
        ga(t, r, a)
    }
}

function je(t, e) {
    [...e].reverse().forEach(s => {
        const i = t.getVariant(s);
        i && mn(t, i), t.variantChildren && t.variantChildren.forEach(o => {
            je(o, e)
        })
    })
}

function ya(t, e) {
    if (Array.isArray(e)) return je(t, e);
    if (typeof e == "string") return je(t, [e]);
    mn(t, e)
}

function va(t, e, n) {
    var s, i;
    const o = Object.keys(e).filter(a => !t.hasValue(a)),
        r = o.length;
    if (r)
        for (let a = 0; a < r; a++) {
            const c = o[a],
                l = e[c];
            let u = null;
            Array.isArray(l) && (u = l[0]), u === null && (u = (i = (s = n[c]) !== null && s !== void 0 ? s : t.readValue(c)) !== null && i !== void 0 ? i : e[c]), u != null && (typeof u == "string" && (Mi(u) || wi(u)) ? u = parseFloat(u) : !ma(u) && nt.test(l) && (u = Ci(c, l)), t.addValue(c, H(u, {
                owner: t
            })), n[c] === void 0 && (n[c] = u), u !== null && t.setBaseTarget(c, u))
        }
}

function xa(t, e) {
    return e ? (e[t] || e.default || e).from : void 0
}

function Pa(t, e, n) {
    const s = {};
    for (const i in t) {
        const o = xa(i, e);
        if (o !== void 0) s[i] = o;
        else {
            const r = n.getValue(i);
            r && (s[i] = r.get())
        }
    }
    return s
}

function Ta({
    protectedKeys: t,
    needsAnimating: e
}, n) {
    const s = t.hasOwnProperty(n) && e[n] !== !0;
    return e[n] = !1, s
}

function ba(t, e) {
    const n = t.get();
    if (Array.isArray(e)) {
        for (let s = 0; s < e.length; s++)
            if (e[s] !== n) return !0
    } else return n !== e
}

function Li(t, e, {
    delay: n = 0,
    transitionOverride: s,
    type: i
} = {}) {
    let {
        transition: o = t.getDefaultTransition(),
        transitionEnd: r,
        ...a
    } = t.makeTargetAnimatable(e);
    const c = t.getValue("willChange");
    s && (o = s);
    const l = [],
        u = i && t.animationState && t.animationState.getState()[i];
    for (const f in a) {
        const h = t.getValue(f),
            d = a[f];
        if (!h || d === void 0 || u && Ta(u, f)) continue;
        const p = {
            delay: n,
            elapsed: 0,
            ...un(o || {}, f)
        };
        if (window.HandoffAppearAnimations) {
            const T = t.getProps()[Fs];
            if (T) {
                const v = window.HandoffAppearAnimations(T, f, h, A);
                v !== null && (p.elapsed = v, p.isHandoff = !0)
            }
        }
        let m = !p.isHandoff && !ba(h, d);
        if (p.type === "spring" && (h.getVelocity() || p.velocity) && (m = !1), h.animation && (m = !1), m) continue;
        h.start(fn(f, h, d, t.shouldReduceMotion && ft.has(f) ? {
            type: !1
        } : p));
        const x = h.animation;
        re(c) && (c.add(f), x.then(() => c.remove(f))), l.push(x)
    }
    return r && Promise.all(l).then(() => {
        r && mn(t, r)
    }), l
}

function Ie(t, e, n = {}) {
    const s = pe(t, e, n.custom);
    let {
        transition: i = t.getDefaultTransition() || {}
    } = s || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = s ? () => Promise.all(Li(t, s, n)) : () => Promise.resolve(),
        r = t.variantChildren && t.variantChildren.size ? (c = 0) => {
            const {
                delayChildren: l = 0,
                staggerChildren: u,
                staggerDirection: f
            } = i;
            return Va(t, e, l + c, u, f, n)
        } : () => Promise.resolve(),
        {
            when: a
        } = i;
    if (a) {
        const [c, l] = a === "beforeChildren" ? [o, r] : [r, o];
        return c().then(() => l())
    } else return Promise.all([o(), r(n.delay)])
}

function Va(t, e, n = 0, s = 0, i = 1, o) {
    const r = [],
        a = (t.variantChildren.size - 1) * s,
        c = i === 1 ? (l = 0) => l * s : (l = 0) => a - l * s;
    return Array.from(t.variantChildren).sort(Sa).forEach((l, u) => {
        l.notify("AnimationStart", e), r.push(Ie(l, e, { ...o,
            delay: n + c(u)
        }).then(() => l.notify("AnimationComplete", e)))
    }), Promise.all(r)
}

function Sa(t, e) {
    return t.sortNodePosition(e)
}

function Ei(t, e, n = {}) {
    t.notify("AnimationStart", e);
    let s;
    if (Array.isArray(e)) {
        const i = e.map(o => Ie(t, o, n));
        s = Promise.all(i)
    } else if (typeof e == "string") s = Ie(t, e, n);
    else {
        const i = typeof e == "function" ? pe(t, e, n.custom) : e;
        s = Promise.all(Li(t, i, n))
    }
    return s.then(() => t.notify("AnimationComplete", e))
}
const Aa = [...Xe].reverse(),
    Ca = Xe.length;

function wa(t) {
    return e => Promise.all(e.map(({
        animation: n,
        options: s
    }) => Ei(t, n, s)))
}

function Ma(t) {
    let e = wa(t);
    const n = Ra();
    let s = !0;
    const i = (c, l) => {
        const u = pe(t, l);
        if (u) {
            const {
                transition: f,
                transitionEnd: h,
                ...d
            } = u;
            c = { ...c,
                ...d,
                ...h
            }
        }
        return c
    };

    function o(c) {
        e = c(t)
    }

    function r(c, l) {
        const u = t.getProps(),
            f = t.getVariantContext(!0) || {},
            h = [],
            d = new Set;
        let p = {},
            m = 1 / 0;
        for (let T = 0; T < Ca; T++) {
            const v = Aa[T],
                g = n[v],
                P = u[v] !== void 0 ? u[v] : f[v],
                V = jt(P),
                w = v === l ? g.isActive : null;
            w === !1 && (m = T);
            let M = P === f[v] && P !== u[v] && V;
            if (M && s && t.manuallyAnimateOnMount && (M = !1), g.protectedKeys = { ...p
                }, !g.isActive && w === null || !P && !g.prevProp || ue(P) || typeof P == "boolean") continue;
            let C = Da(g.prevProp, P) || v === l && g.isActive && !M && V || T > m && V,
                U = !1;
            const dt = Array.isArray(P) ? P : [P];
            let z = dt.reduce(i, {});
            w === !1 && (z = {});
            const {
                prevResolvedValues: K = {}
            } = g, k = { ...K,
                ...z
            }, pt = B => {
                C = !0, d.has(B) && (U = !0, d.delete(B)), g.needsAnimating[B] = !0
            };
            for (const B in k) {
                const q = z[B],
                    St = K[B];
                if (p.hasOwnProperty(B)) continue;
                let mt = !1;
                te(q) && te(St) ? mt = !ei(q, St) : mt = q !== St, mt ? q !== void 0 ? pt(B) : d.add(B) : q !== void 0 && d.has(B) ? pt(B) : g.protectedKeys[B] = !0
            }
            g.prevProp = P, g.prevResolvedValues = z, g.isActive && (p = { ...p,
                ...z
            }), s && t.blockInitialAnimation && (C = !1), C && (!M || U) && h.push(...dt.map(B => ({
                animation: B,
                options: {
                    type: v,
                    ...c
                }
            })))
        }
        if (d.size) {
            const T = {};
            d.forEach(v => {
                const g = t.getBaseTarget(v);
                g !== void 0 && (T[v] = g)
            }), h.push({
                animation: T
            })
        }
        let x = !!h.length;
        return s && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (x = !1), s = !1, x ? e(h) : Promise.resolve()
    }

    function a(c, l, u) {
        var f;
        if (n[c].isActive === l) return Promise.resolve();
        (f = t.variantChildren) === null || f === void 0 || f.forEach(d => {
            var p;
            return (p = d.animationState) === null || p === void 0 ? void 0 : p.setActive(c, l)
        }), n[c].isActive = l;
        const h = r(u, c);
        for (const d in n) n[d].protectedKeys = {};
        return h
    }
    return {
        animateChanges: r,
        setActive: a,
        setAnimateFunction: o,
        getState: () => n
    }
}

function Da(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !ei(e, t) : !1
}

function rt(t = !1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function Ra() {
    return {
        animate: rt(!0),
        whileInView: rt(),
        whileHover: rt(),
        whileTap: rt(),
        whileDrag: rt(),
        whileFocus: rt(),
        exit: rt()
    }
}
class La extends st {
    constructor(e) {
        super(e), e.animationState || (e.animationState = Ma(e))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: e
        } = this.node.getProps();
        this.unmount(), ue(e) && (this.unmount = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: e
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        e !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let Ea = 0;
class Ba extends st {
    constructor() {
        super(...arguments), this.id = Ea++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: e,
            onExitComplete: n,
            custom: s
        } = this.node.presenceContext, {
            isPresent: i
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === i) return;
        const o = this.node.animationState.setActive("exit", !e, {
            custom: s ? ? this.node.getProps().custom
        });
        n && !e && o.then(() => n(this.id))
    }
    mount() {
        const {
            register: e
        } = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const Fa = {
        animation: {
            Feature: La
        },
        exit: {
            Feature: Ba
        }
    },
    In = (t, e) => Math.abs(t - e);

function ka(t, e) {
    const n = In(t.x, e.x),
        s = In(t.y, e.y);
    return Math.sqrt(n ** 2 + s ** 2)
}
class Bi {
    constructor(e, n, {
        transformPagePoint: s,
        contextWindow: i,
        dragSnapToOrigin: o = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const f = Ce(this.lastMoveEventInfo, this.history),
                    h = this.startEvent !== null,
                    d = ka(f.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!h && !d) return;
                const {
                    point: p
                } = f, {
                    timestamp: m
                } = F;
                this.history.push({ ...p,
                    timestamp: m
                });
                const {
                    onStart: x,
                    onMove: T
                } = this.handlers;
                h || (x && x(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), T && T(this.lastMoveEvent, f)
            }, this.handlePointerMove = (f, h) => {
                this.lastMoveEvent = f, this.lastMoveEventInfo = Ae(h, this.transformPagePoint), A.update(this.updatePoint, !0)
            }, this.handlePointerUp = (f, h) => {
                this.end();
                const {
                    onEnd: d,
                    onSessionEnd: p,
                    resumeAnimation: m
                } = this.handlers;
                if (this.dragSnapToOrigin && m && m(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const x = Ce(f.type === "pointercancel" ? this.lastMoveEventInfo : Ae(h, this.transformPagePoint), this.history);
                this.startEvent && d && d(f, x), p && p(f, x)
            }, !qs(e)) return;
        this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = s, this.contextWindow = i || window;
        const r = de(e),
            a = Ae(r, this.transformPagePoint),
            {
                point: c
            } = a,
            {
                timestamp: l
            } = F;
        this.history = [{ ...c,
            timestamp: l
        }];
        const {
            onSessionStart: u
        } = n;
        u && u(e, Ce(a, this.history)), this.removeListeners = tt(X(this.contextWindow, "pointermove", this.handlePointerMove), X(this.contextWindow, "pointerup", this.handlePointerUp), X(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(), G(this.updatePoint)
    }
}

function Ae(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}

function Un(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}

function Ce({
    point: t
}, e) {
    return {
        point: t,
        delta: Un(t, Fi(e)),
        offset: Un(t, Oa(e)),
        velocity: ja(e, .1)
    }
}

function Oa(t) {
    return t[0]
}

function Fi(t) {
    return t[t.length - 1]
}

function ja(t, e) {
    if (t.length < 2) return {
        x: 0,
        y: 0
    };
    let n = t.length - 1,
        s = null;
    const i = Fi(t);
    for (; n >= 0 && (s = t[n], !(i.timestamp - s.timestamp > ut(e)));) n--;
    if (!s) return {
        x: 0,
        y: 0
    };
    const o = Y(i.timestamp - s.timestamp);
    if (o === 0) return {
        x: 0,
        y: 0
    };
    const r = {
        x: (i.x - s.x) / o,
        y: (i.y - s.y) / o
    };
    return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r
}

function I(t) {
    return t.max - t.min
}

function Ue(t, e = 0, n = .01) {
    return Math.abs(t - e) <= n
}

function Wn(t, e, n, s = .5) {
    t.origin = s, t.originPoint = R(e.min, e.max, t.origin), t.scale = I(n) / I(e), (Ue(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = R(n.min, n.max, t.origin) - t.originPoint, (Ue(t.translate) || isNaN(t.translate)) && (t.translate = 0)
}

function Ft(t, e, n, s) {
    Wn(t.x, e.x, n.x, s ? s.originX : void 0), Wn(t.y, e.y, n.y, s ? s.originY : void 0)
}

function Nn(t, e, n) {
    t.min = n.min + e.min, t.max = t.min + I(e)
}

function Ia(t, e, n) {
    Nn(t.x, e.x, n.x), Nn(t.y, e.y, n.y)
}

function zn(t, e, n) {
    t.min = e.min - n.min, t.max = t.min + I(e)
}

function kt(t, e, n) {
    zn(t.x, e.x, n.x), zn(t.y, e.y, n.y)
}

function Ua(t, {
    min: e,
    max: n
}, s) {
    return e !== void 0 && t < e ? t = s ? R(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? R(n, t, s.max) : Math.min(t, n)), t
}

function Hn(t, e, n) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    }
}

function Wa(t, {
    top: e,
    left: n,
    bottom: s,
    right: i
}) {
    return {
        x: Hn(t.x, n, i),
        y: Hn(t.y, e, s)
    }
}

function Gn(t, e) {
    let n = e.min - t.min,
        s = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), {
        min: n,
        max: s
    }
}

function Na(t, e) {
    return {
        x: Gn(t.x, e.x),
        y: Gn(t.y, e.y)
    }
}

function za(t, e) {
    let n = .5;
    const s = I(t),
        i = I(e);
    return i > s ? n = Pt(e.min, e.max - s, t.min) : s > i && (n = Pt(t.min, t.max - i, e.min)), et(0, 1, n)
}

function Ha(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n
}
const We = .35;

function Ga(t = We) {
    return t === !1 ? t = 0 : t === !0 && (t = We), {
        x: $n(t, "left", "right"),
        y: $n(t, "top", "bottom")
    }
}

function $n(t, e, n) {
    return {
        min: Kn(t, e),
        max: Kn(t, n)
    }
}

function Kn(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const _n = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    vt = () => ({
        x: _n(),
        y: _n()
    }),
    Xn = () => ({
        min: 0,
        max: 0
    }),
    E = () => ({
        x: Xn(),
        y: Xn()
    });

function N(t) {
    return [t("x"), t("y")]
}

function ki({
    top: t,
    left: e,
    right: n,
    bottom: s
}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: s
        }
    }
}

function $a({
    x: t,
    y: e
}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}

function Ka(t, e) {
    if (!e) return t;
    const n = e({
            x: t.left,
            y: t.top
        }),
        s = e({
            x: t.right,
            y: t.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: s.y,
        right: s.x
    }
}

function we(t) {
    return t === void 0 || t === 1
}

function Ne({
    scale: t,
    scaleX: e,
    scaleY: n
}) {
    return !we(t) || !we(e) || !we(n)
}

function ot(t) {
    return Ne(t) || Oi(t) || t.z || t.rotate || t.rotateX || t.rotateY
}

function Oi(t) {
    return Yn(t.x) || Yn(t.y)
}

function Yn(t) {
    return t && t !== "0%"
}

function oe(t, e, n) {
    const s = t - n,
        i = e * s;
    return n + i
}

function qn(t, e, n, s, i) {
    return i !== void 0 && (t = oe(t, i, s)), oe(t, n, s) + e
}

function ze(t, e = 0, n = 1, s, i) {
    t.min = qn(t.min, e, n, s, i), t.max = qn(t.max, e, n, s, i)
}

function ji(t, {
    x: e,
    y: n
}) {
    ze(t.x, e.translate, e.scale, e.originPoint), ze(t.y, n.translate, n.scale, n.originPoint)
}

function _a(t, e, n, s = !1) {
    const i = n.length;
    if (!i) return;
    e.x = e.y = 1;
    let o, r;
    for (let a = 0; a < i; a++) {
        o = n[a], r = o.projectionDelta;
        const c = o.instance;
        c && c.style && c.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && xt(t, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }), r && (e.x *= r.x.scale, e.y *= r.y.scale, ji(t, r)), s && ot(o.latestValues) && xt(t, o.latestValues))
    }
    e.x = Zn(e.x), e.y = Zn(e.y)
}

function Zn(t) {
    return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
}

function Q(t, e) {
    t.min = t.min + e, t.max = t.max + e
}

function Jn(t, e, [n, s, i]) {
    const o = e[i] !== void 0 ? e[i] : .5,
        r = R(t.min, t.max, o);
    ze(t, e[n], e[s], r, e.scale)
}
const Xa = ["x", "scaleX", "originX"],
    Ya = ["y", "scaleY", "originY"];

function xt(t, e) {
    Jn(t.x, e, Xa), Jn(t.y, e, Ya)
}

function Ii(t, e) {
    return ki(Ka(t.getBoundingClientRect(), e))
}

function qa(t, e, n) {
    const s = Ii(t, n),
        {
            scroll: i
        } = e;
    return i && (Q(s.x, i.offset.x), Q(s.y, i.offset.y)), s
}
const Ui = ({
        current: t
    }) => t ? t.ownerDocument.defaultView : null,
    Za = new WeakMap;
class Ja {
    constructor(e) {
        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = E(), this.visualElement = e
    }
    start(e, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: s
        } = this.visualElement;
        if (s && s.isPresent === !1) return;
        const i = u => {
                const {
                    dragSnapToOrigin: f
                } = this.getProps();
                f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(de(u, "page").point)
            },
            o = (u, f) => {
                const {
                    drag: h,
                    dragPropagation: d,
                    onDragStart: p
                } = this.getProps();
                if (h && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Js(h), !this.openGlobalLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), N(x => {
                    let T = this.getAxisMotionValue(x).get() || 0;
                    if ($.test(T)) {
                        const {
                            projection: v
                        } = this.visualElement;
                        if (v && v.layout) {
                            const g = v.layout.layoutBox[x];
                            g && (T = I(g) * (parseFloat(T) / 100))
                        }
                    }
                    this.originPoint[x] = T
                }), p && A.update(() => p(u, f), !1, !0);
                const {
                    animationState: m
                } = this.visualElement;
                m && m.setActive("whileDrag", !0)
            },
            r = (u, f) => {
                const {
                    dragPropagation: h,
                    dragDirectionLock: d,
                    onDirectionLock: p,
                    onDrag: m
                } = this.getProps();
                if (!h && !this.openGlobalLock) return;
                const {
                    offset: x
                } = f;
                if (d && this.currentDirection === null) {
                    this.currentDirection = Qa(x), this.currentDirection !== null && p && p(this.currentDirection);
                    return
                }
                this.updateAxis("x", f.point, x), this.updateAxis("y", f.point, x), this.visualElement.render(), m && m(u, f)
            },
            a = (u, f) => this.stop(u, f),
            c = () => N(u => {
                var f;
                return this.getAnimationState(u) === "paused" && ((f = this.getAxisMotionValue(u).animation) === null || f === void 0 ? void 0 : f.play())
            }),
            {
                dragSnapToOrigin: l
            } = this.getProps();
        this.panSession = new Bi(e, {
            onSessionStart: i,
            onStart: o,
            onMove: r,
            onSessionEnd: a,
            resumeAnimation: c
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: l,
            contextWindow: Ui(this.visualElement)
        })
    }
    stop(e, n) {
        const s = this.isDragging;
        if (this.cancel(), !s) return;
        const {
            velocity: i
        } = n;
        this.startAnimation(i);
        const {
            onDragEnd: o
        } = this.getProps();
        o && A.update(() => o(e, n))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: e,
            animationState: n
        } = this.visualElement;
        e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: s
        } = this.getProps();
        !s && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(e, n, s) {
        const {
            drag: i
        } = this.getProps();
        if (!s || !_t(e, i, this.currentDirection)) return;
        const o = this.getAxisMotionValue(e);
        let r = this.originPoint[e] + s[e];
        this.constraints && this.constraints[e] && (r = Ua(r, this.constraints[e], this.elastic[e])), o.set(r)
    }
    resolveConstraints() {
        var e;
        const {
            dragConstraints: n,
            dragElastic: s
        } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, o = this.constraints;
        n && gt(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = Wa(i.layoutBox, n) : this.constraints = !1, this.elastic = Ga(s), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && N(r => {
            this.getAxisMotionValue(r) && (this.constraints[r] = Ha(i.layoutBox[r], this.constraints[r]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: e,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!e || !gt(e)) return !1;
        const s = e.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const o = qa(s, i.root, this.visualElement.getTransformPagePoint());
        let r = Na(i.layout.layoutBox, o);
        if (n) {
            const a = n($a(r));
            this.hasMutatedConstraints = !!a, a && (r = ki(a))
        }
        return r
    }
    startAnimation(e) {
        const {
            drag: n,
            dragMomentum: s,
            dragElastic: i,
            dragTransition: o,
            dragSnapToOrigin: r,
            onDragTransitionEnd: a
        } = this.getProps(), c = this.constraints || {}, l = N(u => {
            if (!_t(u, n, this.currentDirection)) return;
            let f = c && c[u] || {};
            r && (f = {
                min: 0,
                max: 0
            });
            const h = i ? 200 : 1e6,
                d = i ? 40 : 1e7,
                p = {
                    type: "inertia",
                    velocity: s ? e[u] : 0,
                    bounceStiffness: h,
                    bounceDamping: d,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...o,
                    ...f
                };
            return this.startAxisValueAnimation(u, p)
        });
        return Promise.all(l).then(a)
    }
    startAxisValueAnimation(e, n) {
        const s = this.getAxisMotionValue(e);
        return s.start(fn(e, s, 0, n))
    }
    stopAnimation() {
        N(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        N(e => {
            var n;
            return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause()
        })
    }
    getAnimationState(e) {
        var n;
        return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(e) {
        const n = "_drag" + e.toUpperCase(),
            s = this.visualElement.getProps(),
            i = s[n];
        return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        N(n => {
            const {
                drag: s
            } = this.getProps();
            if (!_t(n, s, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: r,
                    max: a
                } = i.layout.layoutBox[n];
                o.set(e[n] - R(r, a, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: e,
            dragConstraints: n
        } = this.getProps(), {
            projection: s
        } = this.visualElement;
        if (!gt(n) || !s || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        N(r => {
            const a = this.getAxisMotionValue(r);
            if (a) {
                const c = a.get();
                i[r] = za({
                    min: c,
                    max: c
                }, this.constraints[r])
            }
        });
        const {
            transformTemplate: o
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), N(r => {
            if (!_t(r, e, null)) return;
            const a = this.getAxisMotionValue(r),
                {
                    min: c,
                    max: l
                } = this.constraints[r];
            a.set(R(c, l, i[r]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        Za.set(this.visualElement, this);
        const e = this.visualElement.current,
            n = X(e, "pointerdown", c => {
                const {
                    drag: l,
                    dragListener: u = !0
                } = this.getProps();
                l && u && this.start(c)
            }),
            s = () => {
                const {
                    dragConstraints: c
                } = this.getProps();
                gt(c) && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: i
            } = this.visualElement,
            o = i.addEventListener("measure", s);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), s();
        const r = _(window, "resize", () => this.scalePositionWithinConstraints()),
            a = i.addEventListener("didUpdate", ({
                delta: c,
                hasLayoutChanged: l
            }) => {
                this.isDragging && l && (N(u => {
                    const f = this.getAxisMotionValue(u);
                    f && (this.originPoint[u] += c[u].translate, f.set(f.get() + c[u].translate))
                }), this.visualElement.render())
            });
        return () => {
            r(), n(), o(), a && a()
        }
    }
    getProps() {
        const e = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: s = !1,
                dragPropagation: i = !1,
                dragConstraints: o = !1,
                dragElastic: r = We,
                dragMomentum: a = !0
            } = e;
        return { ...e,
            drag: n,
            dragDirectionLock: s,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: r,
            dragMomentum: a
        }
    }
}

function _t(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t)
}

function Qa(t, e = 10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
}
class tc extends st {
    constructor(e) {
        super(e), this.removeGroupControls = L, this.removeListeners = L, this.controls = new Ja(e)
    }
    mount() {
        const {
            dragControls: e
        } = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || L
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const Qn = t => (e, n) => {
    t && A.update(() => t(e, n))
};
class ec extends st {
    constructor() {
        super(...arguments), this.removePointerDownListener = L
    }
    onPointerDown(e) {
        this.session = new Bi(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Ui(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: e,
            onPanStart: n,
            onPan: s,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: Qn(e),
            onStart: Qn(n),
            onMove: s,
            onEnd: (o, r) => {
                delete this.session, i && A.update(() => i(o, r))
            }
        }
    }
    mount() {
        this.removePointerDownListener = X(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}

function nc() {
    const t = y.useContext(ce);
    if (t === null) return [!0, null];
    const {
        isPresent: e,
        onExitComplete: n,
        register: s
    } = t, i = y.useId();
    return y.useEffect(() => s(i), []), !e && n ? [!1, () => n && n(i)] : [!0]
}
const Yt = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function ts(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const Mt = {
        correct: (t, e) => {
            if (!e.target) return t;
            if (typeof t == "string")
                if (b.test(t)) t = parseFloat(t);
                else return t;
            const n = ts(t, e.target.x),
                s = ts(t, e.target.y);
            return `${n}% ${s}%`
        }
    },
    sc = {
        correct: (t, {
            treeScale: e,
            projectionDelta: n
        }) => {
            const s = t,
                i = nt.parse(t);
            if (i.length > 5) return s;
            const o = nt.createTransformer(t),
                r = typeof i[0] != "number" ? 1 : 0,
                a = n.x.scale * e.x,
                c = n.y.scale * e.y;
            i[0 + r] /= a, i[1 + r] /= c;
            const l = R(a, c, .5);
            return typeof i[2 + r] == "number" && (i[2 + r] /= l), typeof i[3 + r] == "number" && (i[3 + r] /= l), o(i)
        }
    };
class ic extends Es.Component {
    componentDidMount() {
        const {
            visualElement: e,
            layoutGroup: n,
            switchLayoutGroup: s,
            layoutId: i
        } = this.props, {
            projection: o
        } = e;
        hr(rc), o && (n.group && n.group.add(o), s && s.register && i && s.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), o.setOptions({ ...o.options,
            onExitComplete: () => this.safeToRemove()
        })), Yt.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {
            layoutDependency: n,
            visualElement: s,
            drag: i,
            isPresent: o
        } = this.props, r = s.projection;
        return r && (r.isPresent = o, i || e.layoutDependency !== n || n === void 0 ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || A.postRender(() => {
            const a = r.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: e
        } = this.props.visualElement;
        e && (e.root.didUpdate(), queueMicrotask(() => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: e,
            layoutGroup: n,
            switchLayoutGroup: s
        } = this.props, {
            projection: i
        } = e;
        i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: e
        } = this.props;
        e && e()
    }
    render() {
        return null
    }
}

function Wi(t) {
    const [e, n] = nc(), s = y.useContext(qe);
    return Es.createElement(ic, { ...t,
        layoutGroup: s,
        switchLayoutGroup: y.useContext(Os),
        isPresent: e,
        safeToRemove: n
    })
}
const rc = {
        borderRadius: { ...Mt,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: Mt,
        borderTopRightRadius: Mt,
        borderBottomLeftRadius: Mt,
        borderBottomRightRadius: Mt,
        boxShadow: sc
    },
    Ni = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    oc = Ni.length,
    es = t => typeof t == "string" ? parseFloat(t) : t,
    ns = t => typeof t == "number" || b.test(t);

function ac(t, e, n, s, i, o) {
    i ? (t.opacity = R(0, n.opacity !== void 0 ? n.opacity : 1, cc(s)), t.opacityExit = R(e.opacity !== void 0 ? e.opacity : 1, 0, lc(s))) : o && (t.opacity = R(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
    for (let r = 0; r < oc; r++) {
        const a = `border${Ni[r]}Radius`;
        let c = ss(e, a),
            l = ss(n, a);
        if (c === void 0 && l === void 0) continue;
        c || (c = 0), l || (l = 0), c === 0 || l === 0 || ns(c) === ns(l) ? (t[a] = Math.max(R(es(c), es(l), s), 0), ($.test(l) || $.test(c)) && (t[a] += "%")) : t[a] = l
    }(e.rotate || n.rotate) && (t.rotate = R(e.rotate || 0, n.rotate || 0, s))
}

function ss(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const cc = zi(0, .5, ui),
    lc = zi(.5, .95, L);

function zi(t, e, n) {
    return s => s < t ? 0 : s > e ? 1 : n(Pt(t, e, s))
}

function is(t, e) {
    t.min = e.min, t.max = e.max
}

function W(t, e) {
    is(t.x, e.x), is(t.y, e.y)
}

function rs(t, e, n, s, i) {
    return t -= e, t = oe(t, 1 / n, s), i !== void 0 && (t = oe(t, 1 / i, s)), t
}

function uc(t, e = 0, n = 1, s = .5, i, o = t, r = t) {
    if ($.test(e) && (e = parseFloat(e), e = R(r.min, r.max, e / 100) - r.min), typeof e != "number") return;
    let a = R(o.min, o.max, s);
    t === o && (a -= e), t.min = rs(t.min, e, n, a, i), t.max = rs(t.max, e, n, a, i)
}

function os(t, e, [n, s, i], o, r) {
    uc(t, e[n], e[s], e[i], e.scale, o, r)
}
const fc = ["x", "scaleX", "originX"],
    hc = ["y", "scaleY", "originY"];

function as(t, e, n, s) {
    os(t.x, e, fc, n ? n.x : void 0, s ? s.x : void 0), os(t.y, e, hc, n ? n.y : void 0, s ? s.y : void 0)
}

function cs(t) {
    return t.translate === 0 && t.scale === 1
}

function Hi(t) {
    return cs(t.x) && cs(t.y)
}

function dc(t, e) {
    return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
}

function Gi(t, e) {
    return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
}

function ls(t) {
    return I(t.x) / I(t.y)
}
class pc {
    constructor() {
        this.members = []
    }
    add(e) {
        hn(this.members, e), e.scheduleRender()
    }
    remove(e) {
        if (dn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(e) {
        const n = this.members.findIndex(i => e === i);
        if (n === 0) return !1;
        let s;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                s = o;
                break
            }
        }
        return s ? (this.promote(s), !0) : !1
    }
    promote(e, n) {
        const s = this.lead;
        if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
            s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, n && (e.resumeFrom.preserveOpacity = !0), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {
                crossfade: i
            } = e.options;
            i === !1 && s.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {
                options: n,
                resumingFrom: s
            } = e;
            n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function us(t, e, n) {
    let s = "";
    const i = t.x.translate / e.x,
        o = t.y.translate / e.y;
    if ((i || o) && (s = `translate3d(${i}px, ${o}px, 0) `), (e.x !== 1 || e.y !== 1) && (s += `scale(${1/e.x}, ${1/e.y}) `), n) {
        const {
            rotate: c,
            rotateX: l,
            rotateY: u
        } = n;
        c && (s += `rotate(${c}deg) `), l && (s += `rotateX(${l}deg) `), u && (s += `rotateY(${u}deg) `)
    }
    const r = t.x.scale * e.x,
        a = t.y.scale * e.y;
    return (r !== 1 || a !== 1) && (s += `scale(${r}, ${a})`), s || "none"
}
const mc = (t, e) => t.depth - e.depth;
class gc {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(e) {
        hn(this.children, e), this.isDirty = !0
    }
    remove(e) {
        dn(this.children, e), this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(mc), this.isDirty = !1, this.children.forEach(e)
    }
}

function yc(t, e) {
    const n = performance.now(),
        s = ({
            timestamp: i
        }) => {
            const o = i - n;
            o >= e && (G(s), t(o - e))
        };
    return A.read(s, !0), () => G(s)
}

function vc(t) {
    window.MotionDebug && window.MotionDebug.record(t)
}

function xc(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}

function Pc(t, e, n) {
    const s = j(t) ? t : H(t);
    return s.start(fn("", s, e, n)), s.animation
}
const fs = ["", "X", "Y", "Z"],
    Tc = {
        visibility: "hidden"
    },
    hs = 1e3;
let bc = 0;
const at = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};

function $i({
    attachResizeListener: t,
    defaultParent: e,
    measureScroll: n,
    checkIsScrollRoot: s,
    resetTransform: i
}) {
    return class {
        constructor(r = {}, a = e == null ? void 0 : e()) {
            this.id = bc++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, at.totalNodes = at.resolvedTargetDeltas = at.recalculatedProjection = 0, this.nodes.forEach(Ac), this.nodes.forEach(Rc), this.nodes.forEach(Lc), this.nodes.forEach(Cc), vc(at)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let c = 0; c < this.path.length; c++) this.path[c].shouldResetTransform = !0;
            this.root === this && (this.nodes = new gc)
        }
        addEventListener(r, a) {
            return this.eventHandlers.has(r) || this.eventHandlers.set(r, new pn), this.eventHandlers.get(r).add(a)
        }
        notifyListeners(r, ...a) {
            const c = this.eventHandlers.get(r);
            c && c.notify(...a)
        }
        hasListeners(r) {
            return this.eventHandlers.has(r)
        }
        mount(r, a = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = xc(r), this.instance = r;
            const {
                layoutId: c,
                layout: l,
                visualElement: u
            } = this.options;
            if (u && !u.current && u.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (l || c) && (this.isLayoutDirty = !0), t) {
                let f;
                const h = () => this.root.updateBlockedByResize = !1;
                t(r, () => {
                    this.root.updateBlockedByResize = !0, f && f(), f = yc(h, 250), Yt.hasAnimatedSinceResize && (Yt.hasAnimatedSinceResize = !1, this.nodes.forEach(ps))
                })
            }
            c && this.root.registerSharedNode(c, this), this.options.animate !== !1 && u && (c || l) && this.addEventListener("didUpdate", ({
                delta: f,
                hasLayoutChanged: h,
                hasRelativeTargetChanged: d,
                layout: p
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const m = this.options.transition || u.getDefaultTransition() || Oc,
                    {
                        onLayoutAnimationStart: x,
                        onLayoutAnimationComplete: T
                    } = u.getProps(),
                    v = !this.targetLayout || !Gi(this.targetLayout, p) || d,
                    g = !h && d;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || h && (v || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, g);
                    const P = { ...un(m, "layout"),
                        onPlay: x,
                        onComplete: T
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (P.delay = 0, P.type = !1), this.startAnimation(P)
                } else h || ps(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = p
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const r = this.getStack();
            r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, G(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Ec), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: r
            } = this.options;
            return r && r.getProps().transformTemplate
        }
        willUpdate(r = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let u = 0; u < this.path.length; u++) {
                const f = this.path[u];
                f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1)
            }
            const {
                layoutId: a,
                layout: c
            } = this.options;
            if (a === void 0 && !c) return;
            const l = this.getTransformTemplate();
            this.prevTransformTemplateValue = l ? l(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ds);
                return
            }
            this.isUpdating || this.nodes.forEach(Mc), this.isUpdating = !1, this.nodes.forEach(Dc), this.nodes.forEach(Vc), this.nodes.forEach(Sc), this.clearAllSnapshots();
            const a = performance.now();
            F.delta = et(0, 1e3 / 60, a - F.timestamp), F.timestamp = a, F.isProcessing = !0, ye.update.process(F), ye.preRender.process(F), ye.render.process(F), F.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(wc), this.sharedNodes.forEach(Bc)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, A.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            A.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let c = 0; c < this.path.length; c++) this.path[c].updateScroll();
            const r = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = E(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: a
            } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0)
        }
        updateScroll(r = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a && (this.scroll = {
                animationId: this.root.animationId,
                phase: r,
                isRoot: s(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!i) return;
            const r = this.isLayoutDirty || this.shouldResetTransform,
                a = this.projectionDelta && !Hi(this.projectionDelta),
                c = this.getTransformTemplate(),
                l = c ? c(this.latestValues, "") : void 0,
                u = l !== this.prevTransformTemplateValue;
            r && (a || ot(this.latestValues) || u) && (i(this.instance, l), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(r = !0) {
            const a = this.measurePageBox();
            let c = this.removeElementScroll(a);
            return r && (c = this.removeTransform(c)), jc(c), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: c,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {
                visualElement: r
            } = this.options;
            if (!r) return E();
            const a = r.measureViewportBox(),
                {
                    scroll: c
                } = this.root;
            return c && (Q(a.x, c.offset.x), Q(a.y, c.offset.y)), a
        }
        removeElementScroll(r) {
            const a = E();
            W(a, r);
            for (let c = 0; c < this.path.length; c++) {
                const l = this.path[c],
                    {
                        scroll: u,
                        options: f
                    } = l;
                if (l !== this.root && u && f.layoutScroll) {
                    if (u.isRoot) {
                        W(a, r);
                        const {
                            scroll: h
                        } = this.root;
                        h && (Q(a.x, -h.offset.x), Q(a.y, -h.offset.y))
                    }
                    Q(a.x, u.offset.x), Q(a.y, u.offset.y)
                }
            }
            return a
        }
        applyTransform(r, a = !1) {
            const c = E();
            W(c, r);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                !a && u.options.layoutScroll && u.scroll && u !== u.root && xt(c, {
                    x: -u.scroll.offset.x,
                    y: -u.scroll.offset.y
                }), ot(u.latestValues) && xt(c, u.latestValues)
            }
            return ot(this.latestValues) && xt(c, this.latestValues), c
        }
        removeTransform(r) {
            const a = E();
            W(a, r);
            for (let c = 0; c < this.path.length; c++) {
                const l = this.path[c];
                if (!l.instance || !ot(l.latestValues)) continue;
                Ne(l.latestValues) && l.updateSnapshot();
                const u = E(),
                    f = l.measurePageBox();
                W(u, f), as(a, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, u)
            }
            return ot(this.latestValues) && as(a, this.latestValues), a
        }
        setTargetDelta(r) {
            this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(r) {
            this.options = { ...this.options,
                ...r,
                crossfade: r.crossfade !== void 0 ? r.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== F.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(r = !1) {
            var a;
            const c = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = c.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== c;
            if (!(r || l && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget)) return;
            const {
                layout: f,
                layoutId: h
            } = this.options;
            if (!(!this.layout || !(f || h))) {
                if (this.resolvedRelativeTargetAt = F.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const d = this.getClosestProjectingParent();
                    d && d.layout && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = E(), this.relativeTargetOrigin = E(), kt(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox), W(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = E(), this.targetWithTransforms = E()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Ia(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : W(this.target, this.layout.layoutBox), ji(this.target, this.targetDelta)) : W(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const d = this.getClosestProjectingParent();
                        d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = E(), this.relativeTargetOrigin = E(), kt(this.relativeTargetOrigin, this.target, d.target), W(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    at.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Ne(this.parent.latestValues) || Oi(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var r;
            const a = this.getLead(),
                c = !!this.resumingFrom || this !== a;
            let l = !0;
            if ((this.isProjectionDirty || !((r = this.parent) === null || r === void 0) && r.isProjectionDirty) && (l = !1), c && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === F.timestamp && (l = !1), l) return;
            const {
                layout: u,
                layoutId: f
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || f)) return;
            W(this.layoutCorrected, this.layout.layoutBox);
            const h = this.treeScale.x,
                d = this.treeScale.y;
            _a(this.layoutCorrected, this.treeScale, this.path, c), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox);
            const {
                target: p
            } = a;
            if (!p) {
                this.projectionTransform && (this.projectionDelta = vt(), this.projectionTransform = "none", this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = vt(), this.projectionDeltaWithTransform = vt());
            const m = this.projectionTransform;
            Ft(this.projectionDelta, this.layoutCorrected, p, this.latestValues), this.projectionTransform = us(this.projectionDelta, this.treeScale), (this.projectionTransform !== m || this.treeScale.x !== h || this.treeScale.y !== d) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p)), at.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(r = !0) {
            if (this.options.scheduleRender && this.options.scheduleRender(), r) {
                const a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(r, a = !1) {
            const c = this.snapshot,
                l = c ? c.latestValues : {},
                u = { ...this.latestValues
                },
                f = vt();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            const h = E(),
                d = c ? c.source : void 0,
                p = this.layout ? this.layout.source : void 0,
                m = d !== p,
                x = this.getStack(),
                T = !x || x.members.length <= 1,
                v = !!(m && !T && this.options.crossfade === !0 && !this.path.some(kc));
            this.animationProgress = 0;
            let g;
            this.mixTargetDelta = P => {
                const V = P / 1e3;
                ms(f.x, r.x, V), ms(f.y, r.y, V), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (kt(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Fc(this.relativeTarget, this.relativeTargetOrigin, h, V), g && dc(this.relativeTarget, g) && (this.isProjectionDirty = !1), g || (g = E()), W(g, this.relativeTarget)), m && (this.animationValues = u, ac(u, l, this.latestValues, V, v, T)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = V
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(r) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (G(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = A.update(() => {
                Yt.hasAnimatedSinceResize = !0, this.currentAnimation = Pc(0, hs, { ...r,
                    onUpdate: a => {
                        this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a)
                    },
                    onComplete: () => {
                        r.onComplete && r.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const r = this.getStack();
            r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(hs), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const r = this.getLead();
            let {
                targetWithTransforms: a,
                target: c,
                layout: l,
                latestValues: u
            } = r;
            if (!(!a || !c || !l)) {
                if (this !== r && this.layout && l && Ki(this.options.animationType, this.layout.layoutBox, l.layoutBox)) {
                    c = this.target || E();
                    const f = I(this.layout.layoutBox.x);
                    c.x.min = r.target.x.min, c.x.max = c.x.min + f;
                    const h = I(this.layout.layoutBox.y);
                    c.y.min = r.target.y.min, c.y.max = c.y.min + h
                }
                W(a, c), xt(a, u), Ft(this.projectionDeltaWithTransform, this.layoutCorrected, a, u)
            }
        }
        registerSharedNode(r, a) {
            this.sharedNodes.has(r) || this.sharedNodes.set(r, new pc), this.sharedNodes.get(r).add(a);
            const l = a.options.initialPromotionConfig;
            a.promote({
                transition: l ? l.transition : void 0,
                preserveFollowOpacity: l && l.shouldPreserveFollowOpacity ? l.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const r = this.getStack();
            return r ? r.lead === this : !0
        }
        getLead() {
            var r;
            const {
                layoutId: a
            } = this.options;
            return a ? ((r = this.getStack()) === null || r === void 0 ? void 0 : r.lead) || this : this
        }
        getPrevLead() {
            var r;
            const {
                layoutId: a
            } = this.options;
            return a ? (r = this.getStack()) === null || r === void 0 ? void 0 : r.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: r
            } = this.options;
            if (r) return this.root.sharedNodes.get(r)
        }
        promote({
            needsReset: r,
            transition: a,
            preserveFollowOpacity: c
        } = {}) {
            const l = this.getStack();
            l && l.promote(this, c), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const r = this.getStack();
            return r ? r.relegate(this) : !1
        }
        resetRotation() {
            const {
                visualElement: r
            } = this.options;
            if (!r) return;
            let a = !1;
            const {
                latestValues: c
            } = r;
            if ((c.rotate || c.rotateX || c.rotateY || c.rotateZ) && (a = !0), !a) return;
            const l = {};
            for (let u = 0; u < fs.length; u++) {
                const f = "rotate" + fs[u];
                c[f] && (l[f] = c[f], r.setStaticValue(f, 0))
            }
            r.render();
            for (const u in l) r.setStaticValue(u, l[u]);
            r.scheduleRender()
        }
        getProjectionStyles(r) {
            var a, c;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return Tc;
            const l = {
                    visibility: ""
                },
                u = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, l.opacity = "", l.pointerEvents = Xt(r == null ? void 0 : r.pointerEvents) || "", l.transform = u ? u(this.latestValues, "") : "none", l;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const m = {};
                return this.options.layoutId && (m.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, m.pointerEvents = Xt(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !ot(this.latestValues) && (m.transform = u ? u({}, "") : "none", this.hasProjected = !1), m
            }
            const h = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(), l.transform = us(this.projectionDeltaWithTransform, this.treeScale, h), u && (l.transform = u(h, l.transform));
            const {
                x: d,
                y: p
            } = this.projectionDelta;
            l.transformOrigin = `${d.origin*100}% ${p.origin*100}% 0`, f.animationValues ? l.opacity = f === this ? (c = (a = h.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && c !== void 0 ? c : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : l.opacity = f === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
            for (const m in Jt) {
                if (h[m] === void 0) continue;
                const {
                    correct: x,
                    applyTo: T
                } = Jt[m], v = l.transform === "none" ? h[m] : x(h[m], f);
                if (T) {
                    const g = T.length;
                    for (let P = 0; P < g; P++) l[T[P]] = v
                } else l[m] = v
            }
            return this.options.layoutId && (l.pointerEvents = f === this ? Xt(r == null ? void 0 : r.pointerEvents) || "" : "none"), l
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(r => {
                var a;
                return (a = r.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }), this.root.nodes.forEach(ds), this.root.sharedNodes.clear()
        }
    }
}

function Vc(t) {
    t.updateLayout()
}

function Sc(t) {
    var e;
    const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
        const {
            layoutBox: s,
            measuredBox: i
        } = t.layout, {
            animationType: o
        } = t.options, r = n.source !== t.layout.source;
        o === "size" ? N(f => {
            const h = r ? n.measuredBox[f] : n.layoutBox[f],
                d = I(h);
            h.min = s[f].min, h.max = h.min + d
        }) : Ki(o, n.layoutBox, s) && N(f => {
            const h = r ? n.measuredBox[f] : n.layoutBox[f],
                d = I(s[f]);
            h.max = h.min + d, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[f].max = t.relativeTarget[f].min + d)
        });
        const a = vt();
        Ft(a, s, n.layoutBox);
        const c = vt();
        r ? Ft(c, t.applyTransform(i, !0), n.measuredBox) : Ft(c, s, n.layoutBox);
        const l = !Hi(a);
        let u = !1;
        if (!t.resumeFrom) {
            const f = t.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {
                    snapshot: h,
                    layout: d
                } = f;
                if (h && d) {
                    const p = E();
                    kt(p, n.layoutBox, h.layoutBox);
                    const m = E();
                    kt(m, s, d.layoutBox), Gi(p, m) || (u = !0), f.options.layoutRoot && (t.relativeTarget = m, t.relativeTargetOrigin = p, t.relativeParent = f)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: n,
            delta: c,
            layoutDelta: a,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u
        })
    } else if (t.isLead()) {
        const {
            onExitComplete: s
        } = t.options;
        s && s()
    }
    t.options.transition = void 0
}

function Ac(t) {
    at.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function Cc(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function wc(t) {
    t.clearSnapshot()
}

function ds(t) {
    t.clearMeasurements()
}

function Mc(t) {
    t.isLayoutDirty = !1
}

function Dc(t) {
    const {
        visualElement: e
    } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function ps(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function Rc(t) {
    t.resolveTargetDelta()
}

function Lc(t) {
    t.calcProjection()
}

function Ec(t) {
    t.resetRotation()
}

function Bc(t) {
    t.removeLeadSnapshot()
}

function ms(t, e, n) {
    t.translate = R(e.translate, 0, n), t.scale = R(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
}

function gs(t, e, n, s) {
    t.min = R(e.min, n.min, s), t.max = R(e.max, n.max, s)
}

function Fc(t, e, n, s) {
    gs(t.x, e.x, n.x, s), gs(t.y, e.y, n.y, s)
}

function kc(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const Oc = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    ys = t => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(t),
    vs = ys("applewebkit/") && !ys("chrome/") ? Math.round : L;

function xs(t) {
    t.min = vs(t.min), t.max = vs(t.max)
}

function jc(t) {
    xs(t.x), xs(t.y)
}

function Ki(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !Ue(ls(e), ls(n), .2)
}
const Ic = $i({
        attachResizeListener: (t, e) => _(t, "resize", e),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    Me = {
        current: void 0
    },
    _i = $i({
        measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
        }),
        defaultParent: () => {
            if (!Me.current) {
                const t = new Ic({});
                t.mount(window), t.setOptions({
                    layoutScroll: !0
                }), Me.current = t
            }
            return Me.current
        },
        resetTransform: (t, e) => {
            t.style.transform = e !== void 0 ? e : "none"
        },
        checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
    }),
    Uc = {
        pan: {
            Feature: ec
        },
        drag: {
            Feature: tc,
            ProjectionNode: _i,
            MeasureLayout: Wi
        }
    },
    Wc = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

function Nc(t) {
    const e = Wc.exec(t);
    if (!e) return [, ];
    const [, n, s] = e;
    return [n, s]
}

function He(t, e, n = 1) {
    const [s, i] = Nc(t);
    if (!s) return;
    const o = window.getComputedStyle(e).getPropertyValue(s);
    if (o) {
        const r = o.trim();
        return Mi(r) ? parseFloat(r) : r
    } else return Le(i) ? He(i, e, n + 1) : i
}

function zc(t, { ...e
}, n) {
    const s = t.current;
    if (!(s instanceof Element)) return {
        target: e,
        transitionEnd: n
    };
    n && (n = { ...n
    }), t.values.forEach(i => {
        const o = i.get();
        if (!Le(o)) return;
        const r = He(o, s);
        r && i.set(r)
    });
    for (const i in e) {
        const o = e[i];
        if (!Le(o)) continue;
        const r = He(o, s);
        r && (e[i] = r, n || (n = {}), n[i] === void 0 && (n[i] = o))
    }
    return {
        target: e,
        transitionEnd: n
    }
}
const Hc = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    Xi = t => Hc.has(t),
    Gc = t => Object.keys(t).some(Xi),
    Ps = t => t === ht || t === b,
    Ts = (t, e) => parseFloat(t.split(", ")[e]),
    bs = (t, e) => (n, {
        transform: s
    }) => {
        if (s === "none" || !s) return 0;
        const i = s.match(/^matrix3d\((.+)\)$/);
        if (i) return Ts(i[1], e); {
            const o = s.match(/^matrix\((.+)\)$/);
            return o ? Ts(o[1], t) : 0
        }
    },
    $c = new Set(["x", "y", "z"]),
    Kc = Ut.filter(t => !$c.has(t));

function _c(t) {
    const e = [];
    return Kc.forEach(n => {
        const s = t.getValue(n);
        s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0))
    }), e.length && t.render(), e
}
const Tt = {
    width: ({
        x: t
    }, {
        paddingLeft: e = "0",
        paddingRight: n = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({
        y: t
    }, {
        paddingTop: e = "0",
        paddingBottom: n = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, {
        top: e
    }) => parseFloat(e),
    left: (t, {
        left: e
    }) => parseFloat(e),
    bottom: ({
        y: t
    }, {
        top: e
    }) => parseFloat(e) + (t.max - t.min),
    right: ({
        x: t
    }, {
        left: e
    }) => parseFloat(e) + (t.max - t.min),
    x: bs(4, 13),
    y: bs(5, 14)
};
Tt.translateX = Tt.x;
Tt.translateY = Tt.y;
const Xc = (t, e, n) => {
        const s = e.measureViewportBox(),
            i = e.current,
            o = getComputedStyle(i),
            {
                display: r
            } = o,
            a = {};
        r === "none" && e.setStaticValue("display", t.display || "block"), n.forEach(l => {
            a[l] = Tt[l](s, o)
        }), e.render();
        const c = e.measureViewportBox();
        return n.forEach(l => {
            const u = e.getValue(l);
            u && u.jump(a[l]), t[l] = Tt[l](c, o)
        }), t
    },
    Yc = (t, e, n = {}, s = {}) => {
        e = { ...e
        }, s = { ...s
        };
        const i = Object.keys(e).filter(Xi);
        let o = [],
            r = !1;
        const a = [];
        if (i.forEach(c => {
                const l = t.getValue(c);
                if (!t.hasValue(c)) return;
                let u = n[c],
                    f = wt(u);
                const h = e[c];
                let d;
                if (te(h)) {
                    const p = h.length,
                        m = h[0] === null ? 1 : 0;
                    u = h[m], f = wt(u);
                    for (let x = m; x < p && h[x] !== null; x++) d ? ee(wt(h[x]) === d) : d = wt(h[x])
                } else d = wt(h);
                if (f !== d)
                    if (Ps(f) && Ps(d)) {
                        const p = l.get();
                        typeof p == "string" && l.set(parseFloat(p)), typeof h == "string" ? e[c] = parseFloat(h) : Array.isArray(h) && d === b && (e[c] = h.map(parseFloat))
                    } else f != null && f.transform && (d != null && d.transform) && (u === 0 || h === 0) ? u === 0 ? l.set(d.transform(u)) : e[c] = f.transform(h) : (r || (o = _c(t), r = !0), a.push(c), s[c] = s[c] !== void 0 ? s[c] : e[c], l.jump(h))
            }), a.length) {
            const c = a.indexOf("height") >= 0 ? window.pageYOffset : null,
                l = Xc(e, t, a);
            return o.length && o.forEach(([u, f]) => {
                t.getValue(u).set(f)
            }), t.render(), le && c !== null && window.scrollTo({
                top: c
            }), {
                target: l,
                transitionEnd: s
            }
        } else return {
            target: e,
            transitionEnd: s
        }
    };

function qc(t, e, n, s) {
    return Gc(e) ? Yc(t, e, n, s) : {
        target: e,
        transitionEnd: s
    }
}
const Zc = (t, e, n, s) => {
        const i = zc(t, e, s);
        return e = i.target, s = i.transitionEnd, qc(t, e, n, s)
    },
    Ge = {
        current: null
    },
    Yi = {
        current: !1
    };

function Jc() {
    if (Yi.current = !0, !!le)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
                e = () => Ge.current = t.matches;
            t.addListener(e), e()
        } else Ge.current = !1
}

function Qc(t, e, n) {
    const {
        willChange: s
    } = e;
    for (const i in e) {
        const o = e[i],
            r = n[i];
        if (j(o)) t.addValue(i, o), re(s) && s.add(i);
        else if (j(r)) t.addValue(i, H(o, {
            owner: t
        })), re(s) && s.remove(i);
        else if (r !== o)
            if (t.hasValue(i)) {
                const a = t.getValue(i);
                !a.hasAnimated && a.set(o)
            } else {
                const a = t.getStaticValue(i);
                t.addValue(i, H(a !== void 0 ? a : o, {
                    owner: t
                }))
            }
    }
    for (const i in n) e[i] === void 0 && t.removeValue(i);
    return e
}
const Vs = new WeakMap,
    qi = Object.keys(It),
    tl = qi.length,
    Ss = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
    el = Ye.length;
class nl {
    constructor({
        parent: e,
        props: n,
        presenceContext: s,
        reducedMotionConfig: i,
        visualState: o
    }, r = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.scheduleRender = () => A.render(this.render, !1, !0);
        const {
            latestValues: a,
            renderState: c
        } = o;
        this.latestValues = a, this.baseTarget = { ...a
        }, this.initialValues = n.initial ? { ...a
        } : {}, this.renderState = c, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = r, this.isControllingVariants = fe(n), this.isVariantNode = ks(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
        const {
            willChange: l,
            ...u
        } = this.scrapeMotionValuesFromProps(n, {});
        for (const f in u) {
            const h = u[f];
            a[f] !== void 0 && j(h) && (h.set(a[f], !1), re(l) && l.add(f))
        }
    }
    scrapeMotionValuesFromProps(e, n) {
        return {}
    }
    mount(e) {
        this.current = e, Vs.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), Yi.current || Jc(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ge.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        Vs.delete(this.current), this.projection && this.projection.unmount(), G(this.notifyUpdate), G(this.render), this.valueSubscriptions.forEach(e => e()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const e in this.events) this.events[e].clear();
        for (const e in this.features) this.features[e].unmount();
        this.current = null
    }
    bindToMotionValue(e, n) {
        const s = ft.has(e),
            i = n.on("change", r => {
                this.latestValues[e] = r, this.props.onUpdate && A.update(this.notifyUpdate, !1, !0), s && this.projection && (this.projection.isTransformDirty = !0)
            }),
            o = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(e, () => {
            i(), o()
        })
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    loadFeatures({
        children: e,
        ...n
    }, s, i, o) {
        let r, a;
        for (let c = 0; c < tl; c++) {
            const l = qi[c],
                {
                    isEnabled: u,
                    Feature: f,
                    ProjectionNode: h,
                    MeasureLayout: d
                } = It[l];
            h && (r = h), u(n) && (!this.features[l] && f && (this.features[l] = new f(this)), d && (a = d))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && r) {
            this.projection = new r(this.latestValues, this.parent && this.parent.projection);
            const {
                layoutId: c,
                layout: l,
                drag: u,
                dragConstraints: f,
                layoutScroll: h,
                layoutRoot: d
            } = n;
            this.projection.setOptions({
                layoutId: c,
                layout: l,
                alwaysMeasureLayout: !!u || f && gt(f),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof l == "string" ? l : "both",
                initialPromotionConfig: o,
                layoutScroll: h,
                layoutRoot: d
            })
        }
        return a
    }
    updateFeatures() {
        for (const e in this.features) {
            const n = this.features[e];
            n.isMounted ? n.update() : (n.mount(), n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : E()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, n) {
        this.latestValues[e] = n
    }
    makeTargetAnimatable(e, n = !0) {
        return this.makeTargetAnimatableFromInstance(e, this.props, n)
    }
    update(e, n) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let s = 0; s < Ss.length; s++) {
            const i = Ss[s];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const o = e["on" + i];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = Qc(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(e = !1) {
        if (e) return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const s = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (s.initial = this.props.initial), s
        }
        const n = {};
        for (let s = 0; s < el; s++) {
            const i = Ye[s],
                o = this.props[i];
            (jt(o) || o === !1) && (n[i] = o)
        }
        return n
    }
    addVariantChild(e) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e)
    }
    addValue(e, n) {
        n !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, n)), this.values.set(e, n), this.latestValues[e] = n.get()
    }
    removeValue(e) {
        this.values.delete(e);
        const n = this.valueSubscriptions.get(e);
        n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, n) {
        if (this.props.values && this.props.values[e]) return this.props.values[e];
        let s = this.values.get(e);
        return s === void 0 && n !== void 0 && (s = H(n, {
            owner: this
        }), this.addValue(e, s)), s
    }
    readValue(e) {
        var n;
        return this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (n = this.getBaseTargetFromProps(this.props, e)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, e, this.options)
    }
    setBaseTarget(e, n) {
        this.baseTarget[e] = n
    }
    getBaseTarget(e) {
        var n;
        const {
            initial: s
        } = this.props, i = typeof s == "string" || typeof s == "object" ? (n = sn(this.props, s)) === null || n === void 0 ? void 0 : n[e] : void 0;
        if (s && i !== void 0) return i;
        const o = this.getBaseTargetFromProps(this.props, e);
        return o !== void 0 && !j(o) ? o : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, n) {
        return this.events[e] || (this.events[e] = new pn), this.events[e].add(n)
    }
    notify(e, ...n) {
        this.events[e] && this.events[e].notify(...n)
    }
}
class Zi extends nl {
    sortInstanceNodePosition(e, n) {
        return e.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, n) {
        return e.style ? e.style[n] : void 0
    }
    removeValueFromRenderState(e, {
        vars: n,
        style: s
    }) {
        delete n[e], delete s[e]
    }
    makeTargetAnimatableFromInstance({
        transition: e,
        transitionEnd: n,
        ...s
    }, {
        transformValues: i
    }, o) {
        let r = Pa(s, e || {}, this);
        if (i && (n && (n = i(n)), s && (s = i(s)), r && (r = i(r))), o) {
            va(this, s, r);
            const a = Zc(this, s, r, n);
            n = a.transitionEnd, s = a.target
        }
        return {
            transition: e,
            transitionEnd: n,
            ...s
        }
    }
}

function sl(t) {
    return window.getComputedStyle(t)
}
class il extends Zi {
    constructor() {
        super(...arguments), this.type = "html"
    }
    readValueFromInstance(e, n) {
        if (ft.has(n)) {
            const s = ln(n);
            return s && s.default || 0
        } else {
            const s = sl(e),
                i = (Us(n) ? s.getPropertyValue(n) : s[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(e, {
        transformPagePoint: n
    }) {
        return Ii(e, n)
    }
    build(e, n, s, i) {
        Je(e, n, s, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, n) {
        return nn(e, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: e
        } = this.props;
        j(e) && (this.childSubscription = e.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
    renderInstance(e, n, s, i) {
        $s(e, n, s, i)
    }
}
class rl extends Zi {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1
    }
    getBaseTargetFromProps(e, n) {
        return e[n]
    }
    readValueFromInstance(e, n) {
        if (ft.has(n)) {
            const s = ln(n);
            return s && s.default || 0
        }
        return n = Ks.has(n) ? n : _e(n), e.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return E()
    }
    scrapeMotionValuesFromProps(e, n) {
        return Xs(e, n)
    }
    build(e, n, s, i) {
        tn(e, n, s, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(e, n, s, i) {
        _s(e, n, s, i)
    }
    mount(e) {
        this.isSVGTag = en(e.tagName), super.mount(e)
    }
}
const ol = (t, e) => Ze(t) ? new rl(e, {
        enableHardwareAcceleration: !1
    }) : new il(e, {
        enableHardwareAcceleration: !0
    }),
    al = {
        layout: {
            ProjectionNode: _i,
            MeasureLayout: Wi
        }
    },
    cl = { ...Fa,
        ...eo,
        ...Uc,
        ...al
    },
    Jl = ur((t, e) => zr(t, e, cl, ol));

function Ji() {
    const t = y.useRef(!1);
    return bt(() => (t.current = !0, () => {
        t.current = !1
    }), []), t
}

function ll() {
    const t = Ji(),
        [e, n] = y.useState(0),
        s = y.useCallback(() => {
            t.current && n(e + 1)
        }, [e]);
    return [y.useCallback(() => A.postRender(s), [s]), e]
}
class ul extends y.Component {
    getSnapshotBeforeUpdate(e) {
        const n = this.props.childRef.current;
        if (n && e.isPresent && !this.props.isPresent) {
            const s = this.props.sizeRef.current;
            s.height = n.offsetHeight || 0, s.width = n.offsetWidth || 0, s.top = n.offsetTop, s.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function fl({
    children: t,
    isPresent: e
}) {
    const n = y.useId(),
        s = y.useRef(null),
        i = y.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        });
    return y.useInsertionEffect(() => {
        const {
            width: o,
            height: r,
            top: a,
            left: c
        } = i.current;
        if (e || !s.current || !o || !r) return;
        s.current.dataset.motionPopId = n;
        const l = document.createElement("style");
        return document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${r}px !important;
            top: ${a}px !important;
            left: ${c}px !important;
          }
        `), () => {
            document.head.removeChild(l)
        }
    }, [e]), y.createElement(ul, {
        isPresent: e,
        childRef: s,
        sizeRef: i
    }, y.cloneElement(t, {
        ref: s
    }))
}
const De = ({
    children: t,
    initial: e,
    isPresent: n,
    onExitComplete: s,
    custom: i,
    presenceAffectsLayout: o,
    mode: r
}) => {
    const a = Vt(hl),
        c = y.useId(),
        l = y.useMemo(() => ({
            id: c,
            initial: e,
            isPresent: n,
            custom: i,
            onExitComplete: u => {
                a.set(u, !0);
                for (const f of a.values())
                    if (!f) return;
                s && s()
            },
            register: u => (a.set(u, !1), () => a.delete(u))
        }), o ? void 0 : [n]);
    return y.useMemo(() => {
        a.forEach((u, f) => a.set(f, !1))
    }, [n]), y.useEffect(() => {
        !n && !a.size && s && s()
    }, [n]), r === "popLayout" && (t = y.createElement(fl, {
        isPresent: n
    }, t)), y.createElement(ce.Provider, {
        value: l
    }, t)
};

function hl() {
    return new Map
}

function dl(t) {
    return y.useEffect(() => () => t(), [])
}
const ct = t => t.key || "";

function pl(t, e) {
    t.forEach(n => {
        const s = ct(n);
        e.set(s, n)
    })
}

function ml(t) {
    const e = [];
    return y.Children.forEach(t, n => {
        y.isValidElement(n) && e.push(n)
    }), e
}
const Ql = ({
    children: t,
    custom: e,
    initial: n = !0,
    onExitComplete: s,
    exitBeforeEnter: i,
    presenceAffectsLayout: o = !0,
    mode: r = "sync"
}) => {
    const a = y.useContext(qe).forceRender || ll()[0],
        c = Ji(),
        l = ml(t);
    let u = l;
    const f = y.useRef(new Map).current,
        h = y.useRef(u),
        d = y.useRef(new Map).current,
        p = y.useRef(!0);
    if (bt(() => {
            p.current = !1, pl(l, d), h.current = u
        }), dl(() => {
            p.current = !0, d.clear(), f.clear()
        }), p.current) return y.createElement(y.Fragment, null, u.map(v => y.createElement(De, {
        key: ct(v),
        isPresent: !0,
        initial: n ? void 0 : !1,
        presenceAffectsLayout: o,
        mode: r
    }, v)));
    u = [...u];
    const m = h.current.map(ct),
        x = l.map(ct),
        T = m.length;
    for (let v = 0; v < T; v++) {
        const g = m[v];
        x.indexOf(g) === -1 && !f.has(g) && f.set(g, void 0)
    }
    return r === "wait" && f.size && (u = []), f.forEach((v, g) => {
        if (x.indexOf(g) !== -1) return;
        const P = d.get(g);
        if (!P) return;
        const V = m.indexOf(g);
        let w = v;
        if (!w) {
            const M = () => {
                f.delete(g);
                const S = Array.from(d.keys()).filter(C => !x.includes(C));
                if (S.forEach(C => d.delete(C)), h.current = l.filter(C => {
                        const U = ct(C);
                        return U === g || S.includes(U)
                    }), !f.size) {
                    if (c.current === !1) return;
                    a(), s && s()
                }
            };
            w = y.createElement(De, {
                key: ct(P),
                isPresent: !1,
                onExitComplete: M,
                custom: e,
                presenceAffectsLayout: o,
                mode: r
            }, P), f.set(g, w)
        }
        u.splice(V, 0, w)
    }), u = u.map(v => {
        const g = v.key;
        return f.has(g) ? v : y.createElement(De, {
            key: ct(v),
            isPresent: !0,
            presenceAffectsLayout: o,
            mode: r
        }, v)
    }), y.createElement(y.Fragment, null, f.size ? u : u.map(v => y.cloneElement(v)))
};

function gl(t) {
    const e = Vt(() => H(t)),
        {
            isStatic: n
        } = y.useContext(Ke);
    if (n) {
        const [, s] = y.useState(t);
        y.useEffect(() => e.on("change", s), [])
    }
    return e
}
const yl = t => t && typeof t == "object" && t.mix,
    vl = t => yl(t) ? t.mix : void 0;

function xl(...t) {
    const e = !Array.isArray(t[0]),
        n = e ? 0 : -1,
        s = t[0 + n],
        i = t[1 + n],
        o = t[2 + n],
        r = t[3 + n],
        a = me(i, o, {
            mixer: vl(o[0]),
            ...r
        });
    return e ? a(s) : a
}

function Qi(t, e) {
    const n = gl(e()),
        s = () => n.set(e());
    return s(), bt(() => {
        const i = () => A.update(s, !1, !0),
            o = t.map(r => r.on("change", i));
        return () => {
            o.forEach(r => r()), G(s)
        }
    }), n
}

function Pl(t) {
    Bt.current = [], t();
    const e = Qi(Bt.current, t);
    return Bt.current = void 0, e
}

function tu(t, e, n, s) {
    if (typeof t == "function") return Pl(t);
    const i = typeof e == "function" ? e : xl(e, n, s);
    return Array.isArray(t) ? As(t, i) : As([t], ([o]) => i(o))
}

function As(t, e) {
    const n = Vt(() => []);
    return Qi(t, () => {
        n.length = 0;
        const s = t.length;
        for (let i = 0; i < s; i++) n[i] = t[i].get();
        return e(n)
    })
}

function Tl(t, e, n) {
    return typeof t == "string" ? t = document.querySelectorAll(t) : t instanceof Element && (t = [t]), Array.from(t || [])
}
const qt = new WeakMap;
let J;

function bl(t, e) {
    if (e) {
        const {
            inlineSize: n,
            blockSize: s
        } = e[0];
        return {
            width: n,
            height: s
        }
    } else return t instanceof SVGElement && "getBBox" in t ? t.getBBox() : {
        width: t.offsetWidth,
        height: t.offsetHeight
    }
}

function Vl({
    target: t,
    contentRect: e,
    borderBoxSize: n
}) {
    var s;
    (s = qt.get(t)) === null || s === void 0 || s.forEach(i => {
        i({
            target: t,
            contentSize: e,
            get size() {
                return bl(t, n)
            }
        })
    })
}

function Sl(t) {
    t.forEach(Vl)
}

function Al() {
    typeof ResizeObserver > "u" || (J = new ResizeObserver(Sl))
}

function Cl(t, e) {
    J || Al();
    const n = Tl(t);
    return n.forEach(s => {
        let i = qt.get(s);
        i || (i = new Set, qt.set(s, i)), i.add(e), J == null || J.observe(s)
    }), () => {
        n.forEach(s => {
            const i = qt.get(s);
            i == null || i.delete(e), i != null && i.size || J == null || J.unobserve(s)
        })
    }
}
const Zt = new Set;
let Ot;

function wl() {
    Ot = () => {
        const t = {
                width: window.innerWidth,
                height: window.innerHeight
            },
            e = {
                target: window,
                size: t,
                contentSize: t
            };
        Zt.forEach(n => n(e))
    }, window.addEventListener("resize", Ot)
}

function Ml(t) {
    return Zt.add(t), Ot || wl(), () => {
        Zt.delete(t), !Zt.size && Ot && (Ot = void 0)
    }
}

function Dl(t, e) {
    return typeof t == "function" ? Ml(t) : Cl(t, e)
}
const Rl = 50,
    Cs = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    }),
    Ll = () => ({
        time: 0,
        x: Cs(),
        y: Cs()
    }),
    El = {
        x: {
            length: "Width",
            position: "Left"
        },
        y: {
            length: "Height",
            position: "Top"
        }
    };

function ws(t, e, n, s) {
    const i = n[e],
        {
            length: o,
            position: r
        } = El[e],
        a = i.current,
        c = n.time;
    i.current = t["scroll" + r], i.scrollLength = t["scroll" + o] - t["client" + o], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = Pt(0, i.scrollLength, i.current);
    const l = s - c;
    i.velocity = l > Rl ? 0 : cn(i.current - a, l)
}

function Bl(t, e, n) {
    ws(t, "x", e, n), ws(t, "y", e, n), e.time = n
}

function Fl(t, e) {
    const n = {
        x: 0,
        y: 0
    };
    let s = t;
    for (; s && s !== e;)
        if (s instanceof HTMLElement) n.x += s.offsetLeft, n.y += s.offsetTop, s = s.offsetParent;
        else if (s.tagName === "svg") {
        const i = s.getBoundingClientRect();
        s = s.parentElement;
        const o = s.getBoundingClientRect();
        n.x += i.left - o.left, n.y += i.top - o.top
    } else if (s instanceof SVGGraphicsElement) {
        const {
            x: i,
            y: o
        } = s.getBBox();
        n.x += i, n.y += o;
        let r = null,
            a = s.parentNode;
        for (; !r;) a.tagName === "svg" && (r = a), a = s.parentNode;
        s = r
    } else break;
    return n
}
const kl = {
        Enter: [
            [0, 1],
            [1, 1]
        ],
        Exit: [
            [0, 0],
            [1, 0]
        ],
        Any: [
            [1, 0],
            [0, 1]
        ],
        All: [
            [0, 0],
            [1, 1]
        ]
    },
    $e = {
        start: 0,
        center: .5,
        end: 1
    };

function Ms(t, e, n = 0) {
    let s = 0;
    if ($e[t] !== void 0 && (t = $e[t]), typeof t == "string") {
        const i = parseFloat(t);
        t.endsWith("px") ? s = i : t.endsWith("%") ? t = i / 100 : t.endsWith("vw") ? s = i / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? s = i / 100 * document.documentElement.clientHeight : t = i
    }
    return typeof t == "number" && (s = e * t), n + s
}
const Ol = [0, 0];

function jl(t, e, n, s) {
    let i = Array.isArray(t) ? t : Ol,
        o = 0,
        r = 0;
    return typeof t == "number" ? i = [t, t] : typeof t == "string" && (t = t.trim(), t.includes(" ") ? i = t.split(" ") : i = [t, $e[t] ? t : "0"]), o = Ms(i[0], n, s), r = Ms(i[1], e), o - r
}
const Il = {
    x: 0,
    y: 0
};

function Ul(t) {
    return "getBBox" in t && t.tagName !== "svg" ? t.getBBox() : {
        width: t.clientWidth,
        height: t.clientHeight
    }
}

function Wl(t, e, n) {
    let {
        offset: s = kl.All
    } = n;
    const {
        target: i = t,
        axis: o = "y"
    } = n, r = o === "y" ? "height" : "width", a = i !== t ? Fl(i, t) : Il, c = i === t ? {
        width: t.scrollWidth,
        height: t.scrollHeight
    } : Ul(i), l = {
        width: t.clientWidth,
        height: t.clientHeight
    };
    e[o].offset.length = 0;
    let u = !e[o].interpolate;
    const f = s.length;
    for (let h = 0; h < f; h++) {
        const d = jl(s[h], l[r], c[r], a[o]);
        !u && d !== e[o].interpolatorOffsets[h] && (u = !0), e[o].offset[h] = d
    }
    u && (e[o].interpolate = me(e[o].offset, Vi(s)), e[o].interpolatorOffsets = [...e[o].offset]), e[o].progress = e[o].interpolate(e[o].current)
}

function Nl(t, e = t, n) {
    if (n.x.targetOffset = 0, n.y.targetOffset = 0, e !== t) {
        let s = e;
        for (; s && s !== t;) n.x.targetOffset += s.offsetLeft, n.y.targetOffset += s.offsetTop, s = s.offsetParent
    }
    n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth, n.y.targetLength = e === t ? e.scrollHeight : e.clientHeight, n.x.containerLength = t.clientWidth, n.y.containerLength = t.clientHeight
}

function zl(t, e, n, s = {}) {
    return {
        measure: () => Nl(t, s.target, n),
        update: i => {
            Bl(t, n, i), (s.offset || s.target) && Wl(t, n, s)
        },
        notify: () => e(n)
    }
}
const Dt = new WeakMap,
    Ds = new WeakMap,
    Re = new WeakMap,
    Rs = t => t === document.documentElement ? window : t;

function Hl(t, {
    container: e = document.documentElement,
    ...n
} = {}) {
    let s = Re.get(e);
    s || (s = new Set, Re.set(e, s));
    const i = Ll(),
        o = zl(e, t, i, n);
    if (s.add(o), !Dt.has(e)) {
        const a = () => {
                for (const h of s) h.measure()
            },
            c = () => {
                for (const h of s) h.update(F.timestamp)
            },
            l = () => {
                for (const h of s) h.notify()
            },
            u = () => {
                A.read(a, !1, !0), A.read(c, !1, !0), A.update(l, !1, !0)
            };
        Dt.set(e, u);
        const f = Rs(e);
        window.addEventListener("resize", u, {
            passive: !0
        }), e !== document.documentElement && Ds.set(e, Dl(e, u)), f.addEventListener("scroll", u, {
            passive: !0
        })
    }
    const r = Dt.get(e);
    return A.read(r, !1, !0), () => {
        var a;
        G(r);
        const c = Re.get(e);
        if (!c || (c.delete(o), c.size)) return;
        const l = Dt.get(e);
        Dt.delete(e), l && (Rs(e).removeEventListener("scroll", l), (a = Ds.get(e)) === null || a === void 0 || a(), window.removeEventListener("resize", l))
    }
}

function Ls(t, e) {
    io(!!(!e || e.current))
}
const Gl = () => ({
    scrollX: H(0),
    scrollY: H(0),
    scrollXProgress: H(0),
    scrollYProgress: H(0)
});

function eu({
    container: t,
    target: e,
    layoutEffect: n = !0,
    ...s
} = {}) {
    const i = Vt(Gl);
    return (n ? bt : y.useEffect)(() => (Ls("target", e), Ls("container", t), Hl(({
        x: r,
        y: a
    }) => {
        i.scrollX.set(r.current), i.scrollXProgress.set(r.progress), i.scrollY.set(a.current), i.scrollYProgress.set(a.progress)
    }, { ...s,
        container: (t == null ? void 0 : t.current) || void 0,
        target: (e == null ? void 0 : e.current) || void 0
    })), [t, e, JSON.stringify(s.offset)]), i
}

function $l(t) {
    t.values.forEach(e => e.stop())
}

function Kl() {
    const t = new Set,
        e = {
            subscribe(n) {
                return t.add(n), () => void t.delete(n)
            },
            start(n, s) {
                const i = [];
                return t.forEach(o => {
                    i.push(Ei(o, n, {
                        transitionOverride: s
                    }))
                }), Promise.all(i)
            },
            set(n) {
                return t.forEach(s => {
                    ya(s, n)
                })
            },
            stop() {
                t.forEach(n => {
                    $l(n)
                })
            },
            mount() {
                return () => {
                    e.stop()
                }
            }
        };
    return e
}
const _l = (t, e, n) => {
    const s = e - t;
    return ((n - t) % s + s) % s + t
};

function Xl() {
    const t = Vt(Kl);
    return bt(t.mount, []), t
}
const nu = Xl;

function su(...t) {
    const e = y.useRef(0),
        [n, s] = y.useState(t[e.current]),
        i = y.useCallback(o => {
            e.current = typeof o != "number" ? _l(0, t.length, e.current + 1) : o, s(t[e.current])
        }, [t.length, ...t]);
    return [n, i]
}
export {
    Ql as A, eu as a, tu as b, gl as c, nu as d, Jl as m, su as u
};
//# sourceMappingURL=framer-motion-CjpMPw5U.js.map