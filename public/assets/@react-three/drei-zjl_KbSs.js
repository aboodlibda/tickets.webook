import {
    a as rn,
    g as an,
    r as L
} from "../vendor-DR5RWKqR.js";
import {
    D as Ce,
    T as cn,
    a as Ke,
    b as Dt,
    R as An,
    c as ln,
    P as Bn,
    E as un,
    V as P,
    Q as Ee,
    d as ae,
    O as ce,
    S as At,
    e as x,
    M as z,
    f as $,
    L as Tt,
    g as le,
    F as Fe,
    C as V,
    h as hn,
    i as dn,
    j as Cn,
    k as Ae,
    l as w,
    m as Me,
    I as fn,
    n as pn,
    o as It,
    p as mn,
    q as En,
    B as Be,
    r as Fn,
    s as ge,
    t as bt,
    u as we,
    v as Mn,
    w as Je,
    x as gn,
    y as Ht,
    z as Gn,
    A as Rn,
    G as Lt,
    H as Dn,
    J as Tn,
    K as In,
    N as bn,
    U as Hn,
    W as Ln,
    X as ye,
    Y as Jn,
    Z as yn,
    _ as On,
    $ as Sn,
    a0 as Jt,
    a1 as Pn,
    a2 as xn,
    a3 as Un,
    a4 as Kn,
    a5 as wn,
    a6 as Nn,
    a7 as vn,
    a8 as _n,
    a9 as Qn,
    aa as lt,
    ab as Bt,
    ac as ut,
    ad as ht,
    ae as kn,
    af as jn,
    ag as Xn,
    ah as Yn,
    ai as Zn,
    aj as Wn,
    ak as Vn
} from "../three-CFPVlYAJ.js";
import {
    u as _e,
    a as U,
    b as yt
} from "./fiber-CXtEzY3H.js";
var dt = {},
    Ct = rn;
dt.createRoot = Ct.createRoot, dt.hydrateRoot = Ct.hydrateRoot;
var Ot = {
        exports: {}
    },
    qn = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    zn = qn,
    $n = zn;

function St() {}

function Pt() {}
Pt.resetWarningCache = St;
var es = function() {
    function B(e, s, o, r, a, i) {
        if (i !== $n) {
            var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw c.name = "Invariant Violation", c
        }
    }
    B.isRequired = B;

    function t() {
        return B
    }
    var n = {
        array: B,
        bigint: B,
        bool: B,
        func: B,
        number: B,
        object: B,
        string: B,
        symbol: B,
        any: B,
        arrayOf: t,
        element: B,
        elementType: B,
        instanceOf: t,
        node: B,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: Pt,
        resetWarningCache: St
    };
    return n.PropTypes = n, n
};
Ot.exports = es();
var ts = Ot.exports;
const eo = an(ts);

function Ge() {
    return Ge = Object.assign ? Object.assign.bind() : function(B) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var e in n)({}).hasOwnProperty.call(n, e) && (B[e] = n[e])
        }
        return B
    }, Ge.apply(null, arguments)
}

function ns(B) {
    let t;
    const n = new Set,
        e = (c, l) => {
            const A = typeof c == "function" ? c(t) : c;
            if (A !== t) {
                const u = t;
                t = l ? A : Object.assign({}, t, A), n.forEach(d => d(t, u))
            }
        },
        s = () => t,
        o = (c, l = s, A = Object.is) => {
            console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
            let u = l(t);

            function d() {
                const C = l(t);
                if (!A(u, C)) {
                    const m = u;
                    c(u = C, m)
                }
            }
            return n.add(d), () => n.delete(d)
        },
        i = {
            setState: e,
            getState: s,
            subscribe: (c, l, A) => l || A ? o(c, l, A) : (n.add(c), () => n.delete(c)),
            destroy: () => n.clear()
        };
    return t = B(e, s, i), i
}
const ss = typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    ft = ss ? L.useEffect : L.useLayoutEffect;

function os(B) {
    const t = typeof B == "function" ? ns(B) : B,
        n = (e = t.getState, s = Object.is) => {
            const [, o] = L.useReducer(f => f + 1, 0), r = t.getState(), a = L.useRef(r), i = L.useRef(e), c = L.useRef(s), l = L.useRef(!1), A = L.useRef();
            A.current === void 0 && (A.current = e(r));
            let u, d = !1;
            (a.current !== r || i.current !== e || c.current !== s || l.current) && (u = e(r), d = !s(A.current, u)), ft(() => {
                d && (A.current = u), a.current = r, i.current = e, c.current = s, l.current = !1
            });
            const C = L.useRef(r);
            ft(() => {
                const f = () => {
                        try {
                            const F = t.getState(),
                                R = i.current(F);
                            c.current(A.current, R) || (a.current = F, A.current = R, o())
                        } catch {
                            l.current = !0, o()
                        }
                    },
                    E = t.subscribe(f);
                return t.getState() !== C.current && f(), E
            }, []);
            const m = d ? u : A.current;
            return L.useDebugValue(m), m
        };
    return Object.assign(n, t), n[Symbol.iterator] = function() {
        console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
        const e = [n, t];
        return {
            next() {
                const s = e.length <= 0;
                return {
                    value: e.shift(),
                    done: s
                }
            }
        }
    }, n
}
const rs = B => typeof B == "object" && typeof B.then == "function",
    Z = [];

function xt(B, t, n = (e, s) => e === s) {
    if (B === t) return !0;
    if (!B || !t) return !1;
    const e = B.length;
    if (t.length !== e) return !1;
    for (let s = 0; s < e; s++)
        if (!n(B[s], t[s])) return !1;
    return !0
}

function Ut(B, t = null, n = !1, e = {}) {
    t === null && (t = [B]);
    for (const o of Z)
        if (xt(t, o.keys, o.equal)) {
            if (n) return;
            if (Object.prototype.hasOwnProperty.call(o, "error")) throw o.error;
            if (Object.prototype.hasOwnProperty.call(o, "response")) return e.lifespan && e.lifespan > 0 && (o.timeout && clearTimeout(o.timeout), o.timeout = setTimeout(o.remove, e.lifespan)), o.response;
            if (!n) throw o.promise
        }
    const s = {
        keys: t,
        equal: e.equal,
        remove: () => {
            const o = Z.indexOf(s);
            o !== -1 && Z.splice(o, 1)
        },
        promise: (rs(B) ? B : B(...t)).then(o => {
            s.response = o, e.lifespan && e.lifespan > 0 && (s.timeout = setTimeout(s.remove, e.lifespan))
        }).catch(o => s.error = o)
    };
    if (Z.push(s), !n) throw s.promise
}
const to = (B, t, n) => Ut(B, t, !1, n),
    no = (B, t, n) => void Ut(B, t, !0, n),
    so = B => {
        if (B === void 0 || B.length === 0) Z.splice(0, Z.length);
        else {
            const t = Z.find(n => xt(B, n.keys, n.equal));
            t && t.remove()
        }
    };
let re = 0;
const oo = os(B => (Ce.onStart = (t, n, e) => {
    B({
        active: !0,
        item: t,
        loaded: n,
        total: e,
        progress: (n - re) / (e - re) * 100
    })
}, Ce.onLoad = () => {
    B({
        active: !1
    })
}, Ce.onError = t => B(n => ({
    errors: [...n.errors, t]
})), Ce.onProgress = (t, n, e) => {
    n === e && (re = e), B({
        active: !0,
        item: t,
        loaded: n,
        total: e,
        progress: (n - re) / (e - re) * 100 || 100
    })
}, {
    errors: [],
    active: !1,
    progress: 0,
    item: "",
    loaded: 0,
    total: 0
}));

function pt(B, t) {
    if (t === cn) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), B;
    if (t === Ke || t === Dt) {
        let n = B.getIndex();
        if (n === null) {
            const r = [],
                a = B.getAttribute("position");
            if (a !== void 0) {
                for (let i = 0; i < a.count; i++) r.push(i);
                B.setIndex(r), n = B.getIndex()
            } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), B
        }
        const e = n.count - 2,
            s = [];
        if (n)
            if (t === Ke)
                for (let r = 1; r <= e; r++) s.push(n.getX(0)), s.push(n.getX(r)), s.push(n.getX(r + 1));
            else
                for (let r = 0; r < e; r++) r % 2 === 0 ? (s.push(n.getX(r)), s.push(n.getX(r + 1)), s.push(n.getX(r + 2))) : (s.push(n.getX(r + 2)), s.push(n.getX(r + 1)), s.push(n.getX(r)));
        s.length / 3 !== e && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
        const o = B.clone();
        return o.setIndex(s), o.clearGroups(), o
    } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", t), B
}
const is = parseInt(An.replace(/\D+/g, ""));
var as = Object.defineProperty,
    cs = (B, t, n) => t in B ? as(B, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : B[t] = n,
    M = (B, t, n) => (cs(B, typeof t != "symbol" ? t + "" : t, n), n);
const fe = new ln,
    mt = new Bn,
    As = Math.cos(70 * (Math.PI / 180)),
    Et = (B, t) => (B % t + t) % t;
let ls = class extends un {
    constructor(t, n) {
        super(), M(this, "object"), M(this, "domElement"), M(this, "enabled", !0), M(this, "target", new P), M(this, "minDistance", 0), M(this, "maxDistance", 1 / 0), M(this, "minZoom", 0), M(this, "maxZoom", 1 / 0), M(this, "minPolarAngle", 0), M(this, "maxPolarAngle", Math.PI), M(this, "minAzimuthAngle", -1 / 0), M(this, "maxAzimuthAngle", 1 / 0), M(this, "enableDamping", !1), M(this, "dampingFactor", .05), M(this, "enableZoom", !0), M(this, "zoomSpeed", 1), M(this, "enableRotate", !0), M(this, "rotateSpeed", 1), M(this, "enablePan", !0), M(this, "panSpeed", 1), M(this, "screenSpacePanning", !0), M(this, "keyPanSpeed", 7), M(this, "zoomToCursor", !1), M(this, "autoRotate", !1), M(this, "autoRotateSpeed", 2), M(this, "reverseOrbit", !1), M(this, "reverseHorizontalOrbit", !1), M(this, "reverseVerticalOrbit", !1), M(this, "keys", {
            LEFT: "ArrowLeft",
            UP: "ArrowUp",
            RIGHT: "ArrowRight",
            BOTTOM: "ArrowDown"
        }), M(this, "mouseButtons", {
            LEFT: z.ROTATE,
            MIDDLE: z.DOLLY,
            RIGHT: z.PAN
        }), M(this, "touches", {
            ONE: $.ROTATE,
            TWO: $.DOLLY_PAN
        }), M(this, "target0"), M(this, "position0"), M(this, "zoom0"), M(this, "_domElementKeyEvents", null), M(this, "getPolarAngle"), M(this, "getAzimuthalAngle"), M(this, "setPolarAngle"), M(this, "setAzimuthalAngle"), M(this, "getDistance"), M(this, "listenToKeyEvents"), M(this, "stopListenToKeyEvents"), M(this, "saveState"), M(this, "reset"), M(this, "update"), M(this, "connect"), M(this, "dispose"), this.object = t, this.domElement = n, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = () => l.phi, this.getAzimuthalAngle = () => l.theta, this.setPolarAngle = h => {
            let p = Et(h, 2 * Math.PI),
                g = l.phi;
            g < 0 && (g += 2 * Math.PI), p < 0 && (p += 2 * Math.PI);
            let H = Math.abs(p - g);
            2 * Math.PI - H < H && (p < g ? p += 2 * Math.PI : g += 2 * Math.PI), A.phi = p - g, e.update()
        }, this.setAzimuthalAngle = h => {
            let p = Et(h, 2 * Math.PI),
                g = l.theta;
            g < 0 && (g += 2 * Math.PI), p < 0 && (p += 2 * Math.PI);
            let H = Math.abs(p - g);
            2 * Math.PI - H < H && (p < g ? p += 2 * Math.PI : g += 2 * Math.PI), A.theta = p - g, e.update()
        }, this.getDistance = () => e.object.position.distanceTo(e.target), this.listenToKeyEvents = h => {
            h.addEventListener("keydown", He), this._domElementKeyEvents = h
        }, this.stopListenToKeyEvents = () => {
            this._domElementKeyEvents.removeEventListener("keydown", He), this._domElementKeyEvents = null
        }, this.saveState = () => {
            e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom
        }, this.reset = () => {
            e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(s), e.update(), i = a.NONE
        }, this.update = (() => {
            const h = new P,
                p = new P(0, 1, 0),
                g = new Ee().setFromUnitVectors(t.up, p),
                H = g.clone().invert(),
                y = new P,
                N = new Ee,
                j = 2 * Math.PI;
            return function() {
                const ct = e.object.position;
                g.setFromUnitVectors(t.up, p), H.copy(g).invert(), h.copy(ct).sub(e.target), h.applyQuaternion(g), l.setFromVector3(h), e.autoRotate && i === a.NONE && De(_t()), e.enableDamping ? (l.theta += A.theta * e.dampingFactor, l.phi += A.phi * e.dampingFactor) : (l.theta += A.theta, l.phi += A.phi);
                let v = e.minAzimuthAngle,
                    _ = e.maxAzimuthAngle;
                isFinite(v) && isFinite(_) && (v < -Math.PI ? v += j : v > Math.PI && (v -= j), _ < -Math.PI ? _ += j : _ > Math.PI && (_ -= j), v <= _ ? l.theta = Math.max(v, Math.min(_, l.theta)) : l.theta = l.theta > (v + _) / 2 ? Math.max(v, l.theta) : Math.min(_, l.theta)), l.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, l.phi)), l.makeSafe(), e.enableDamping === !0 ? e.target.addScaledVector(d, e.dampingFactor) : e.target.add(d), e.zoomToCursor && J || e.object.isOrthographicCamera ? l.radius = Ie(l.radius) : l.radius = Ie(l.radius * u), h.setFromSpherical(l), h.applyQuaternion(H), ct.copy(e.target).add(h), e.object.matrixAutoUpdate || e.object.updateMatrix(), e.object.lookAt(e.target), e.enableDamping === !0 ? (A.theta *= 1 - e.dampingFactor, A.phi *= 1 - e.dampingFactor, d.multiplyScalar(1 - e.dampingFactor)) : (A.set(0, 0, 0), d.set(0, 0, 0));
                let ne = !1;
                if (e.zoomToCursor && J) {
                    let se = null;
                    if (e.object instanceof ae && e.object.isPerspectiveCamera) {
                        const oe = h.length();
                        se = Ie(oe * u);
                        const de = oe - se;
                        e.object.position.addScaledVector(O, de), e.object.updateMatrixWorld()
                    } else if (e.object.isOrthographicCamera) {
                        const oe = new P(S.x, S.y, 0);
                        oe.unproject(e.object), e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / u)), e.object.updateProjectionMatrix(), ne = !0;
                        const de = new P(S.x, S.y, 0);
                        de.unproject(e.object), e.object.position.sub(de).add(oe), e.object.updateMatrixWorld(), se = h.length()
                    } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), e.zoomToCursor = !1;
                    se !== null && (e.screenSpacePanning ? e.target.set(0, 0, -1).transformDirection(e.object.matrix).multiplyScalar(se).add(e.object.position) : (fe.origin.copy(e.object.position), fe.direction.set(0, 0, -1).transformDirection(e.object.matrix), Math.abs(e.object.up.dot(fe.direction)) < As ? t.lookAt(e.target) : (mt.setFromNormalAndCoplanarPoint(e.object.up, e.target), fe.intersectPlane(mt, e.target))))
                } else e.object instanceof ce && e.object.isOrthographicCamera && (ne = u !== 1, ne && (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / u)), e.object.updateProjectionMatrix()));
                return u = 1, J = !1, ne || y.distanceToSquared(e.object.position) > c || 8 * (1 - N.dot(e.object.quaternion)) > c ? (e.dispatchEvent(s), y.copy(e.object.position), N.copy(e.object.quaternion), ne = !1, !0) : !1
            }
        })(), this.connect = h => {
            h === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), e.domElement = h, e.domElement.style.touchAction = "none", e.domElement.addEventListener("contextmenu", it), e.domElement.addEventListener("pointerdown", ot), e.domElement.addEventListener("pointercancel", te), e.domElement.addEventListener("wheel", rt)
        }, this.dispose = () => {
            var h, p, g, H, y, N;
            e.domElement && (e.domElement.style.touchAction = "auto"), (h = e.domElement) == null || h.removeEventListener("contextmenu", it), (p = e.domElement) == null || p.removeEventListener("pointerdown", ot), (g = e.domElement) == null || g.removeEventListener("pointercancel", te), (H = e.domElement) == null || H.removeEventListener("wheel", rt), (y = e.domElement) == null || y.ownerDocument.removeEventListener("pointermove", be), (N = e.domElement) == null || N.ownerDocument.removeEventListener("pointerup", te), e._domElementKeyEvents !== null && e._domElementKeyEvents.removeEventListener("keydown", He)
        };
        const e = this,
            s = {
                type: "change"
            },
            o = {
                type: "start"
            },
            r = {
                type: "end"
            },
            a = {
                NONE: -1,
                ROTATE: 0,
                DOLLY: 1,
                PAN: 2,
                TOUCH_ROTATE: 3,
                TOUCH_PAN: 4,
                TOUCH_DOLLY_PAN: 5,
                TOUCH_DOLLY_ROTATE: 6
            };
        let i = a.NONE;
        const c = 1e-6,
            l = new At,
            A = new At;
        let u = 1;
        const d = new P,
            C = new x,
            m = new x,
            f = new x,
            E = new x,
            F = new x,
            R = new x,
            G = new x,
            T = new x,
            D = new x,
            O = new P,
            S = new x;
        let J = !1;
        const b = [],
            ue = {};

        function _t() {
            return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed
        }

        function he() {
            return Math.pow(.95, e.zoomSpeed)
        }

        function De(h) {
            e.reverseOrbit || e.reverseHorizontalOrbit ? A.theta += h : A.theta -= h
        }

        function je(h) {
            e.reverseOrbit || e.reverseVerticalOrbit ? A.phi += h : A.phi -= h
        }
        const Xe = (() => {
                const h = new P;
                return function(g, H) {
                    h.setFromMatrixColumn(H, 0), h.multiplyScalar(-g), d.add(h)
                }
            })(),
            Ye = (() => {
                const h = new P;
                return function(g, H) {
                    e.screenSpacePanning === !0 ? h.setFromMatrixColumn(H, 1) : (h.setFromMatrixColumn(H, 0), h.crossVectors(e.object.up, h)), h.multiplyScalar(g), d.add(h)
                }
            })(),
            q = (() => {
                const h = new P;
                return function(g, H) {
                    const y = e.domElement;
                    if (y && e.object instanceof ae && e.object.isPerspectiveCamera) {
                        const N = e.object.position;
                        h.copy(N).sub(e.target);
                        let j = h.length();
                        j *= Math.tan(e.object.fov / 2 * Math.PI / 180), Xe(2 * g * j / y.clientHeight, e.object.matrix), Ye(2 * H * j / y.clientHeight, e.object.matrix)
                    } else y && e.object instanceof ce && e.object.isOrthographicCamera ? (Xe(g * (e.object.right - e.object.left) / e.object.zoom / y.clientWidth, e.object.matrix), Ye(H * (e.object.top - e.object.bottom) / e.object.zoom / y.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1)
                }
            })();

        function Te(h) {
            e.object instanceof ae && e.object.isPerspectiveCamera || e.object instanceof ce && e.object.isOrthographicCamera ? u /= h : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1)
        }

        function Ze(h) {
            e.object instanceof ae && e.object.isPerspectiveCamera || e.object instanceof ce && e.object.isOrthographicCamera ? u *= h : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1)
        }

        function We(h) {
            if (!e.zoomToCursor || !e.domElement) return;
            J = !0;
            const p = e.domElement.getBoundingClientRect(),
                g = h.clientX - p.left,
                H = h.clientY - p.top,
                y = p.width,
                N = p.height;
            S.x = g / y * 2 - 1, S.y = -(H / N) * 2 + 1, O.set(S.x, S.y, 1).unproject(e.object).sub(e.object.position).normalize()
        }

        function Ie(h) {
            return Math.max(e.minDistance, Math.min(e.maxDistance, h))
        }

        function Ve(h) {
            C.set(h.clientX, h.clientY)
        }

        function Qt(h) {
            We(h), G.set(h.clientX, h.clientY)
        }

        function qe(h) {
            E.set(h.clientX, h.clientY)
        }

        function kt(h) {
            m.set(h.clientX, h.clientY), f.subVectors(m, C).multiplyScalar(e.rotateSpeed);
            const p = e.domElement;
            p && (De(2 * Math.PI * f.x / p.clientHeight), je(2 * Math.PI * f.y / p.clientHeight)), C.copy(m), e.update()
        }

        function jt(h) {
            T.set(h.clientX, h.clientY), D.subVectors(T, G), D.y > 0 ? Te(he()) : D.y < 0 && Ze(he()), G.copy(T), e.update()
        }

        function Xt(h) {
            F.set(h.clientX, h.clientY), R.subVectors(F, E).multiplyScalar(e.panSpeed), q(R.x, R.y), E.copy(F), e.update()
        }

        function Yt(h) {
            We(h), h.deltaY < 0 ? Ze(he()) : h.deltaY > 0 && Te(he()), e.update()
        }

        function Zt(h) {
            let p = !1;
            switch (h.code) {
                case e.keys.UP:
                    q(0, e.keyPanSpeed), p = !0;
                    break;
                case e.keys.BOTTOM:
                    q(0, -e.keyPanSpeed), p = !0;
                    break;
                case e.keys.LEFT:
                    q(e.keyPanSpeed, 0), p = !0;
                    break;
                case e.keys.RIGHT:
                    q(-e.keyPanSpeed, 0), p = !0;
                    break
            }
            p && (h.preventDefault(), e.update())
        }

        function ze() {
            if (b.length == 1) C.set(b[0].pageX, b[0].pageY);
            else {
                const h = .5 * (b[0].pageX + b[1].pageX),
                    p = .5 * (b[0].pageY + b[1].pageY);
                C.set(h, p)
            }
        }

        function $e() {
            if (b.length == 1) E.set(b[0].pageX, b[0].pageY);
            else {
                const h = .5 * (b[0].pageX + b[1].pageX),
                    p = .5 * (b[0].pageY + b[1].pageY);
                E.set(h, p)
            }
        }

        function et() {
            const h = b[0].pageX - b[1].pageX,
                p = b[0].pageY - b[1].pageY,
                g = Math.sqrt(h * h + p * p);
            G.set(0, g)
        }

        function Wt() {
            e.enableZoom && et(), e.enablePan && $e()
        }

        function Vt() {
            e.enableZoom && et(), e.enableRotate && ze()
        }

        function tt(h) {
            if (b.length == 1) m.set(h.pageX, h.pageY);
            else {
                const g = Le(h),
                    H = .5 * (h.pageX + g.x),
                    y = .5 * (h.pageY + g.y);
                m.set(H, y)
            }
            f.subVectors(m, C).multiplyScalar(e.rotateSpeed);
            const p = e.domElement;
            p && (De(2 * Math.PI * f.x / p.clientHeight), je(2 * Math.PI * f.y / p.clientHeight)), C.copy(m)
        }

        function nt(h) {
            if (b.length == 1) F.set(h.pageX, h.pageY);
            else {
                const p = Le(h),
                    g = .5 * (h.pageX + p.x),
                    H = .5 * (h.pageY + p.y);
                F.set(g, H)
            }
            R.subVectors(F, E).multiplyScalar(e.panSpeed), q(R.x, R.y), E.copy(F)
        }

        function st(h) {
            const p = Le(h),
                g = h.pageX - p.x,
                H = h.pageY - p.y,
                y = Math.sqrt(g * g + H * H);
            T.set(0, y), D.set(0, Math.pow(T.y / G.y, e.zoomSpeed)), Te(D.y), G.copy(T)
        }

        function qt(h) {
            e.enableZoom && st(h), e.enablePan && nt(h)
        }

        function zt(h) {
            e.enableZoom && st(h), e.enableRotate && tt(h)
        }

        function ot(h) {
            var p, g;
            e.enabled !== !1 && (b.length === 0 && ((p = e.domElement) == null || p.ownerDocument.addEventListener("pointermove", be), (g = e.domElement) == null || g.ownerDocument.addEventListener("pointerup", te)), sn(h), h.pointerType === "touch" ? tn(h) : $t(h))
        }

        function be(h) {
            e.enabled !== !1 && (h.pointerType === "touch" ? nn(h) : en(h))
        }

        function te(h) {
            var p, g, H;
            on(h), b.length === 0 && ((p = e.domElement) == null || p.releasePointerCapture(h.pointerId), (g = e.domElement) == null || g.ownerDocument.removeEventListener("pointermove", be), (H = e.domElement) == null || H.ownerDocument.removeEventListener("pointerup", te)), e.dispatchEvent(r), i = a.NONE
        }

        function $t(h) {
            let p;
            switch (h.button) {
                case 0:
                    p = e.mouseButtons.LEFT;
                    break;
                case 1:
                    p = e.mouseButtons.MIDDLE;
                    break;
                case 2:
                    p = e.mouseButtons.RIGHT;
                    break;
                default:
                    p = -1
            }
            switch (p) {
                case z.DOLLY:
                    if (e.enableZoom === !1) return;
                    Qt(h), i = a.DOLLY;
                    break;
                case z.ROTATE:
                    if (h.ctrlKey || h.metaKey || h.shiftKey) {
                        if (e.enablePan === !1) return;
                        qe(h), i = a.PAN
                    } else {
                        if (e.enableRotate === !1) return;
                        Ve(h), i = a.ROTATE
                    }
                    break;
                case z.PAN:
                    if (h.ctrlKey || h.metaKey || h.shiftKey) {
                        if (e.enableRotate === !1) return;
                        Ve(h), i = a.ROTATE
                    } else {
                        if (e.enablePan === !1) return;
                        qe(h), i = a.PAN
                    }
                    break;
                default:
                    i = a.NONE
            }
            i !== a.NONE && e.dispatchEvent(o)
        }

        function en(h) {
            if (e.enabled !== !1) switch (i) {
                case a.ROTATE:
                    if (e.enableRotate === !1) return;
                    kt(h);
                    break;
                case a.DOLLY:
                    if (e.enableZoom === !1) return;
                    jt(h);
                    break;
                case a.PAN:
                    if (e.enablePan === !1) return;
                    Xt(h);
                    break
            }
        }

        function rt(h) {
            e.enabled === !1 || e.enableZoom === !1 || i !== a.NONE && i !== a.ROTATE || (h.preventDefault(), e.dispatchEvent(o), Yt(h), e.dispatchEvent(r))
        }

        function He(h) {
            e.enabled === !1 || e.enablePan === !1 || Zt(h)
        }

        function tn(h) {
            switch (at(h), b.length) {
                case 1:
                    switch (e.touches.ONE) {
                        case $.ROTATE:
                            if (e.enableRotate === !1) return;
                            ze(), i = a.TOUCH_ROTATE;
                            break;
                        case $.PAN:
                            if (e.enablePan === !1) return;
                            $e(), i = a.TOUCH_PAN;
                            break;
                        default:
                            i = a.NONE
                    }
                    break;
                case 2:
                    switch (e.touches.TWO) {
                        case $.DOLLY_PAN:
                            if (e.enableZoom === !1 && e.enablePan === !1) return;
                            Wt(), i = a.TOUCH_DOLLY_PAN;
                            break;
                        case $.DOLLY_ROTATE:
                            if (e.enableZoom === !1 && e.enableRotate === !1) return;
                            Vt(), i = a.TOUCH_DOLLY_ROTATE;
                            break;
                        default:
                            i = a.NONE
                    }
                    break;
                default:
                    i = a.NONE
            }
            i !== a.NONE && e.dispatchEvent(o)
        }

        function nn(h) {
            switch (at(h), i) {
                case a.TOUCH_ROTATE:
                    if (e.enableRotate === !1) return;
                    tt(h), e.update();
                    break;
                case a.TOUCH_PAN:
                    if (e.enablePan === !1) return;
                    nt(h), e.update();
                    break;
                case a.TOUCH_DOLLY_PAN:
                    if (e.enableZoom === !1 && e.enablePan === !1) return;
                    qt(h), e.update();
                    break;
                case a.TOUCH_DOLLY_ROTATE:
                    if (e.enableZoom === !1 && e.enableRotate === !1) return;
                    zt(h), e.update();
                    break;
                default:
                    i = a.NONE
            }
        }

        function it(h) {
            e.enabled !== !1 && h.preventDefault()
        }

        function sn(h) {
            b.push(h)
        }

        function on(h) {
            delete ue[h.pointerId];
            for (let p = 0; p < b.length; p++)
                if (b[p].pointerId == h.pointerId) {
                    b.splice(p, 1);
                    return
                }
        }

        function at(h) {
            let p = ue[h.pointerId];
            p === void 0 && (p = new x, ue[h.pointerId] = p), p.set(h.pageX, h.pageY)
        }

        function Le(h) {
            const p = h.pointerId === b[0].pointerId ? b[1] : b[0];
            return ue[p.pointerId]
        }
        n !== void 0 && this.connect(n), this.update()
    }
};

function Re(B) {
    if (typeof TextDecoder < "u") return new TextDecoder().decode(B);
    let t = "";
    for (let n = 0, e = B.length; n < e; n++) t += String.fromCharCode(B[n]);
    try {
        return decodeURIComponent(escape(t))
    } catch {
        return t
    }
}
const W = "srgb",
    k = "srgb-linear",
    Ft = 3001,
    Bs = 3e3;
class Qe extends Tt {
    constructor(t) {
        super(t), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(n) {
            return new fs(n)
        }), this.register(function(n) {
            return new ps(n)
        }), this.register(function(n) {
            return new Ts(n)
        }), this.register(function(n) {
            return new Is(n)
        }), this.register(function(n) {
            return new bs(n)
        }), this.register(function(n) {
            return new Es(n)
        }), this.register(function(n) {
            return new Fs(n)
        }), this.register(function(n) {
            return new Ms(n)
        }), this.register(function(n) {
            return new gs(n)
        }), this.register(function(n) {
            return new Cs(n)
        }), this.register(function(n) {
            return new Gs(n)
        }), this.register(function(n) {
            return new ms(n)
        }), this.register(function(n) {
            return new Ds(n)
        }), this.register(function(n) {
            return new Rs(n)
        }), this.register(function(n) {
            return new hs(n)
        }), this.register(function(n) {
            return new Hs(n)
        }), this.register(function(n) {
            return new Ls(n)
        })
    }
    load(t, n, e, s) {
        const o = this;
        let r;
        if (this.resourcePath !== "") r = this.resourcePath;
        else if (this.path !== "") {
            const c = le.extractUrlBase(t);
            r = le.resolveURL(c, this.path)
        } else r = le.extractUrlBase(t);
        this.manager.itemStart(t);
        const a = function(c) {
                s ? s(c) : console.error(c), o.manager.itemError(t), o.manager.itemEnd(t)
            },
            i = new Fe(this.manager);
        i.setPath(this.path), i.setResponseType("arraybuffer"), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials), i.load(t, function(c) {
            try {
                o.parse(c, r, function(l) {
                    n(l), o.manager.itemEnd(t)
                }, a)
            } catch (l) {
                a(l)
            }
        }, e, a)
    }
    setDRACOLoader(t) {
        return this.dracoLoader = t, this
    }
    setDDSLoader() {
        throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')
    }
    setKTX2Loader(t) {
        return this.ktx2Loader = t, this
    }
    setMeshoptDecoder(t) {
        return this.meshoptDecoder = t, this
    }
    register(t) {
        return this.pluginCallbacks.indexOf(t) === -1 && this.pluginCallbacks.push(t), this
    }
    unregister(t) {
        return this.pluginCallbacks.indexOf(t) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t), 1), this
    }
    parse(t, n, e, s) {
        let o;
        const r = {},
            a = {};
        if (typeof t == "string") o = JSON.parse(t);
        else if (t instanceof ArrayBuffer)
            if (Re(new Uint8Array(t.slice(0, 4))) === Kt) {
                try {
                    r[I.KHR_BINARY_GLTF] = new Js(t)
                } catch (l) {
                    s && s(l);
                    return
                }
                o = JSON.parse(r[I.KHR_BINARY_GLTF].content)
            } else o = JSON.parse(Re(new Uint8Array(t)));
        else o = t;
        if (o.asset === void 0 || o.asset.version[0] < 2) {
            s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
            return
        }
        const i = new ks(o, {
            path: n || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder
        });
        i.fileLoader.setRequestHeader(this.requestHeader);
        for (let c = 0; c < this.pluginCallbacks.length; c++) {
            const l = this.pluginCallbacks[c](i);
            l.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[l.name] = l, r[l.name] = !0
        }
        if (o.extensionsUsed)
            for (let c = 0; c < o.extensionsUsed.length; ++c) {
                const l = o.extensionsUsed[c],
                    A = o.extensionsRequired || [];
                switch (l) {
                    case I.KHR_MATERIALS_UNLIT:
                        r[l] = new ds;
                        break;
                    case I.KHR_DRACO_MESH_COMPRESSION:
                        r[l] = new ys(o, this.dracoLoader);
                        break;
                    case I.KHR_TEXTURE_TRANSFORM:
                        r[l] = new Os;
                        break;
                    case I.KHR_MESH_QUANTIZATION:
                        r[l] = new Ss;
                        break;
                    default:
                        A.indexOf(l) >= 0 && a[l] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + l + '".')
                }
            }
        i.setExtensions(r), i.setPlugins(a), i.parse(e, s)
    }
    parseAsync(t, n) {
        const e = this;
        return new Promise(function(s, o) {
            e.parse(t, n, s, o)
        })
    }
}

function us() {
    let B = {};
    return {
        get: function(t) {
            return B[t]
        },
        add: function(t, n) {
            B[t] = n
        },
        remove: function(t) {
            delete B[t]
        },
        removeAll: function() {
            B = {}
        }
    }
}
const I = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
    KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
    EXT_MATERIALS_BUMP: "EXT_materials_bump",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_TEXTURE_AVIF: "EXT_texture_avif",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
    EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class hs {
    constructor(t) {
        this.parser = t, this.name = I.KHR_LIGHTS_PUNCTUAL, this.cache = {
            refs: {},
            uses: {}
        }
    }
    _markDefs() {
        const t = this.parser,
            n = this.parser.json.nodes || [];
        for (let e = 0, s = n.length; e < s; e++) {
            const o = n[e];
            o.extensions && o.extensions[this.name] && o.extensions[this.name].light !== void 0 && t._addNodeRef(this.cache, o.extensions[this.name].light)
        }
    }
    _loadLight(t) {
        const n = this.parser,
            e = "light:" + t;
        let s = n.cache.get(e);
        if (s) return s;
        const o = n.json,
            i = ((o.extensions && o.extensions[this.name] || {}).lights || [])[t];
        let c;
        const l = new V(16777215);
        i.color !== void 0 && l.setRGB(i.color[0], i.color[1], i.color[2], k);
        const A = i.range !== void 0 ? i.range : 0;
        switch (i.type) {
            case "directional":
                c = new Cn(l), c.target.position.set(0, 0, -1), c.add(c.target);
                break;
            case "point":
                c = new dn(l), c.distance = A;
                break;
            case "spot":
                c = new hn(l), c.distance = A, i.spot = i.spot || {}, i.spot.innerConeAngle = i.spot.innerConeAngle !== void 0 ? i.spot.innerConeAngle : 0, i.spot.outerConeAngle = i.spot.outerConeAngle !== void 0 ? i.spot.outerConeAngle : Math.PI / 4, c.angle = i.spot.outerConeAngle, c.penumbra = 1 - i.spot.innerConeAngle / i.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
                break;
            default:
                throw new Error("THREE.GLTFLoader: Unexpected light type: " + i.type)
        }
        return c.position.set(0, 0, 0), c.decay = 2, Q(c, i), i.intensity !== void 0 && (c.intensity = i.intensity), c.name = n.createUniqueName(i.name || "light_" + t), s = Promise.resolve(c), n.cache.add(e, s), s
    }
    getDependency(t, n) {
        if (t === "light") return this._loadLight(n)
    }
    createNodeAttachment(t) {
        const n = this,
            e = this.parser,
            o = e.json.nodes[t],
            a = (o.extensions && o.extensions[this.name] || {}).light;
        return a === void 0 ? null : this._loadLight(a).then(function(i) {
            return e._getNodeRef(n.cache, a, i)
        })
    }
}
class ds {
    constructor() {
        this.name = I.KHR_MATERIALS_UNLIT
    }
    getMaterialType() {
        return Ae
    }
    extendParams(t, n, e) {
        const s = [];
        t.color = new V(1, 1, 1), t.opacity = 1;
        const o = n.pbrMetallicRoughness;
        if (o) {
            if (Array.isArray(o.baseColorFactor)) {
                const r = o.baseColorFactor;
                t.color.setRGB(r[0], r[1], r[2], k), t.opacity = r[3]
            }
            o.baseColorTexture !== void 0 && s.push(e.assignTexture(t, "map", o.baseColorTexture, W))
        }
        return Promise.all(s)
    }
}
class Cs {
    constructor(t) {
        this.parser = t, this.name = I.KHR_MATERIALS_EMISSIVE_STRENGTH
    }
    extendMaterialParams(t, n) {
        const s = this.parser.json.materials[t];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const o = s.extensions[this.name].emissiveStrength;
        return o !== void 0 && (n.emissiveIntensity = o), Promise.resolve()
    }
}
class fs {
    constructor(t) {
        this.parser = t, this.name = I.KHR_MATERIALS_CLEARCOAT
    }
    getMaterialType(t) {
        const e = this.parser.json.materials[t];
        return !e.extensions || !e.extensions[this.name] ? null : w
    }
    extendMaterialParams(t, n) {
        const e = this.parser,
            s = e.json.materials[t];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const o = [],
            r = s.extensions[this.name];
        if (r.clearcoatFactor !== void 0 && (n.clearcoat = r.clearcoatFactor), r.clearcoatTexture !== void 0 && o.push(e.assignTexture(n, "clearcoatMap", r.clearcoatTexture)), r.clearcoatRoughnessFactor !== void 0 && (n.clearcoatRoughness = r.clearcoatRoughnessFactor), r.clearcoatRoughnessTexture !== void 0 && o.push(e.assignTexture(n, "clearcoatRoughnessMap", r.clearcoatRoughnessTexture)), r.clearcoatNormalTexture !== void 0 && (o.push(e.assignTexture(n, "clearcoatNormalMap", r.clearcoatNormalTexture)), r.clearcoatNormalTexture.scale !== void 0)) {
            const a = r.clearcoatNormalTexture.scale;
            n.clearcoatNormalScale = new x(a, a)
        }
        return Promise.all(o)
    }
}
class ps {
    constructor(t) {
        this.parser = t, this.name = I.KHR_MATERIALS_DISPERSION
    }
    getMaterialType(t) {
        const e = this.parser.json.materials[t];
        return !e.extensions || !e.extensions[this.name] ? null : w
    }
    extendMaterialParams(t, n) {
        const s = this.parser.json.materials[t];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const o = s.extensions[this.name];
        return n.dispersion = o.dispersion !== void 0 ? o.dispersion : 0, Promise.resolve()
    }
}
class ms {
    constructor(t) {
        this.parser = t, this.name = I.KHR_MATERIALS_IRIDESCENCE
    }
    getMaterialType(t) {
        const e = this.parser.json.materials[t];
        return !e.extensions || !e.extensions[this.name] ? null : w
    }
    extendMaterialParams(t, n) {
        const e = this.parser,
            s = e.json.materials[t];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const o = [],
            r = s.extensions[this.name];
        return r.iridescenceFactor !== void 0 && (n.iridescence = r.iridescenceFactor), r.iridescenceTexture !== void 0 && o.push(e.assignTexture(n, "iridescenceMap", r.iridescenceTexture)), r.iridescenceIor !== void 0 && (n.iridescenceIOR = r.iridescenceIor), n.iridescenceThicknessRange === void 0 && (n.iridescenceThicknessRange = [100, 400]), r.iridescenceThicknessMinimum !== void 0 && (n.iridescenceThicknessRange[0] = r.iridescenceThicknessMinimum), r.iridescenceThicknessMaximum !== void 0 && (n.iridescenceThicknessRange[1] = r.iridescenceThicknessMaximum), r.iridescenceThicknessTexture !== void 0 && o.push(e.assignTexture(n, "iridescenceThicknessMap", r.iridescenceThicknessTexture)), Promise.all(o)
    }
}
class Es {
    constructor(t) {
        this.parser = t, this.name = I.KHR_MATERIALS_SHEEN
    }
    getMaterialType(t) {
        const e = this.parser.json.materials[t];
        return !e.extensions || !e.extensions[this.name] ? null : w
    }
    extendMaterialParams(t, n) {
        const e = this.parser,
            s = e.json.materials[t];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const o = [];
        n.sheenColor = new V(0, 0, 0), n.sheenRoughness = 0, n.sheen = 1;
        const r = s.extensions[this.name];
        if (r.sheenColorFactor !== void 0) {
            const a = r.sheenColorFactor;
            n.sheenColor.setRGB(a[0], a[1], a[2], k)
        }
        return r.sheenRoughnessFactor !== void 0 && (n.sheenRoughness = r.sheenRoughnessFactor), r.sheenColorTexture !== void 0 && o.push(e.assignTexture(n, "sheenColorMap", r.sheenColorTexture, W)), r.sheenRoughnessTexture !== void 0 && o.push(e.assignTexture(n, "sheenRoughnessMap", r.sheenRoughnessTexture)), Promise.all(o)
    }
}
class Fs {
    constructor(t) {
        this.parser = t, this.name = I.KHR_MATERIALS_TRANSMISSION
    }
    getMaterialType(t) {
        const e = this.parser.json.materials[t];
        return !e.extensions || !e.extensions[this.name] ? null : w
    }
    extendMaterialParams(t, n) {
        const e = this.parser,
            s = e.json.materials[t];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const o = [],
            r = s.extensions[this.name];
        return r.transmissionFactor !== void 0 && (n.transmission = r.transmissionFactor), r.transmissionTexture !== void 0 && o.push(e.assignTexture(n, "transmissionMap", r.transmissionTexture)), Promise.all(o)
    }
}
class Ms {
    constructor(t) {
        this.parser = t, this.name = I.KHR_MATERIALS_VOLUME
    }
    getMaterialType(t) {
        const e = this.parser.json.materials[t];
        return !e.extensions || !e.extensions[this.name] ? null : w
    }
    extendMaterialParams(t, n) {
        const e = this.parser,
            s = e.json.materials[t];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const o = [],
            r = s.extensions[this.name];
        n.thickness = r.thicknessFactor !== void 0 ? r.thicknessFactor : 0, r.thicknessTexture !== void 0 && o.push(e.assignTexture(n, "thicknessMap", r.thicknessTexture)), n.attenuationDistance = r.attenuationDistance || 1 / 0;
        const a = r.attenuationColor || [1, 1, 1];
        return n.attenuationColor = new V().setRGB(a[0], a[1], a[2], k), Promise.all(o)
    }
}
class gs {
    constructor(t) {
        this.parser = t, this.name = I.KHR_MATERIALS_IOR
    }
    getMaterialType(t) {
        const e = this.parser.json.materials[t];
        return !e.extensions || !e.extensions[this.name] ? null : w
    }
    extendMaterialParams(t, n) {
        const s = this.parser.json.materials[t];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const o = s.extensions[this.name];
        return n.ior = o.ior !== void 0 ? o.ior : 1.5, Promise.resolve()
    }
}
class Gs {
    constructor(t) {
        this.parser = t, this.name = I.KHR_MATERIALS_SPECULAR
    }
    getMaterialType(t) {
        const e = this.parser.json.materials[t];
        return !e.extensions || !e.extensions[this.name] ? null : w
    }
    extendMaterialParams(t, n) {
        const e = this.parser,
            s = e.json.materials[t];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const o = [],
            r = s.extensions[this.name];
        n.specularIntensity = r.specularFactor !== void 0 ? r.specularFactor : 1, r.specularTexture !== void 0 && o.push(e.assignTexture(n, "specularIntensityMap", r.specularTexture));
        const a = r.specularColorFactor || [1, 1, 1];
        return n.specularColor = new V().setRGB(a[0], a[1], a[2], k), r.specularColorTexture !== void 0 && o.push(e.assignTexture(n, "specularColorMap", r.specularColorTexture, W)), Promise.all(o)
    }
}
class Rs {
    constructor(t) {
        this.parser = t, this.name = I.EXT_MATERIALS_BUMP
    }
    getMaterialType(t) {
        const e = this.parser.json.materials[t];
        return !e.extensions || !e.extensions[this.name] ? null : w
    }
    extendMaterialParams(t, n) {
        const e = this.parser,
            s = e.json.materials[t];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const o = [],
            r = s.extensions[this.name];
        return n.bumpScale = r.bumpFactor !== void 0 ? r.bumpFactor : 1, r.bumpTexture !== void 0 && o.push(e.assignTexture(n, "bumpMap", r.bumpTexture)), Promise.all(o)
    }
}
class Ds {
    constructor(t) {
        this.parser = t, this.name = I.KHR_MATERIALS_ANISOTROPY
    }
    getMaterialType(t) {
        const e = this.parser.json.materials[t];
        return !e.extensions || !e.extensions[this.name] ? null : w
    }
    extendMaterialParams(t, n) {
        const e = this.parser,
            s = e.json.materials[t];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const o = [],
            r = s.extensions[this.name];
        return r.anisotropyStrength !== void 0 && (n.anisotropy = r.anisotropyStrength), r.anisotropyRotation !== void 0 && (n.anisotropyRotation = r.anisotropyRotation), r.anisotropyTexture !== void 0 && o.push(e.assignTexture(n, "anisotropyMap", r.anisotropyTexture)), Promise.all(o)
    }
}
class Ts {
    constructor(t) {
        this.parser = t, this.name = I.KHR_TEXTURE_BASISU
    }
    loadTexture(t) {
        const n = this.parser,
            e = n.json,
            s = e.textures[t];
        if (!s.extensions || !s.extensions[this.name]) return null;
        const o = s.extensions[this.name],
            r = n.options.ktx2Loader;
        if (!r) {
            if (e.extensionsRequired && e.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
            return null
        }
        return n.loadTextureImage(t, o.source, r)
    }
}
class Is {
    constructor(t) {
        this.parser = t, this.name = I.EXT_TEXTURE_WEBP, this.isSupported = null
    }
    loadTexture(t) {
        const n = this.name,
            e = this.parser,
            s = e.json,
            o = s.textures[t];
        if (!o.extensions || !o.extensions[n]) return null;
        const r = o.extensions[n],
            a = s.images[r.source];
        let i = e.textureLoader;
        if (a.uri) {
            const c = e.options.manager.getHandler(a.uri);
            c !== null && (i = c)
        }
        return this.detectSupport().then(function(c) {
            if (c) return e.loadTextureImage(t, r.source, i);
            if (s.extensionsRequired && s.extensionsRequired.indexOf(n) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
            return e.loadTexture(t)
        })
    }
    detectSupport() {
        return this.isSupported || (this.isSupported = new Promise(function(t) {
            const n = new Image;
            n.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", n.onload = n.onerror = function() {
                t(n.height === 1)
            }
        })), this.isSupported
    }
}
class bs {
    constructor(t) {
        this.parser = t, this.name = I.EXT_TEXTURE_AVIF, this.isSupported = null
    }
    loadTexture(t) {
        const n = this.name,
            e = this.parser,
            s = e.json,
            o = s.textures[t];
        if (!o.extensions || !o.extensions[n]) return null;
        const r = o.extensions[n],
            a = s.images[r.source];
        let i = e.textureLoader;
        if (a.uri) {
            const c = e.options.manager.getHandler(a.uri);
            c !== null && (i = c)
        }
        return this.detectSupport().then(function(c) {
            if (c) return e.loadTextureImage(t, r.source, i);
            if (s.extensionsRequired && s.extensionsRequired.indexOf(n) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
            return e.loadTexture(t)
        })
    }
    detectSupport() {
        return this.isSupported || (this.isSupported = new Promise(function(t) {
            const n = new Image;
            n.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", n.onload = n.onerror = function() {
                t(n.height === 1)
            }
        })), this.isSupported
    }
}
class Hs {
    constructor(t) {
        this.name = I.EXT_MESHOPT_COMPRESSION, this.parser = t
    }
    loadBufferView(t) {
        const n = this.parser.json,
            e = n.bufferViews[t];
        if (e.extensions && e.extensions[this.name]) {
            const s = e.extensions[this.name],
                o = this.parser.getDependency("buffer", s.buffer),
                r = this.parser.options.meshoptDecoder;
            if (!r || !r.supported) {
                if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                return null
            }
            return o.then(function(a) {
                const i = s.byteOffset || 0,
                    c = s.byteLength || 0,
                    l = s.count,
                    A = s.byteStride,
                    u = new Uint8Array(a, i, c);
                return r.decodeGltfBufferAsync ? r.decodeGltfBufferAsync(l, A, u, s.mode, s.filter).then(function(d) {
                    return d.buffer
                }) : r.ready.then(function() {
                    const d = new ArrayBuffer(l * A);
                    return r.decodeGltfBuffer(new Uint8Array(d), l, A, u, s.mode, s.filter), d
                })
            })
        } else return null
    }
}
class Ls {
    constructor(t) {
        this.name = I.EXT_MESH_GPU_INSTANCING, this.parser = t
    }
    createNodeMesh(t) {
        const n = this.parser.json,
            e = n.nodes[t];
        if (!e.extensions || !e.extensions[this.name] || e.mesh === void 0) return null;
        const s = n.meshes[e.mesh];
        for (const c of s.primitives)
            if (c.mode !== K.TRIANGLES && c.mode !== K.TRIANGLE_STRIP && c.mode !== K.TRIANGLE_FAN && c.mode !== void 0) return null;
        const r = e.extensions[this.name].attributes,
            a = [],
            i = {};
        for (const c in r) a.push(this.parser.getDependency("accessor", r[c]).then(l => (i[c] = l, i[c])));
        return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(t)), Promise.all(a).then(c => {
            const l = c.pop(),
                A = l.isGroup ? l.children : [l],
                u = c[0].count,
                d = [];
            for (const C of A) {
                const m = new Me,
                    f = new P,
                    E = new Ee,
                    F = new P(1, 1, 1),
                    R = new fn(C.geometry, C.material, u);
                for (let G = 0; G < u; G++) i.TRANSLATION && f.fromBufferAttribute(i.TRANSLATION, G), i.ROTATION && E.fromBufferAttribute(i.ROTATION, G), i.SCALE && F.fromBufferAttribute(i.SCALE, G), R.setMatrixAt(G, m.compose(f, E, F));
                for (const G in i)
                    if (G === "_COLOR_0") {
                        const T = i[G];
                        R.instanceColor = new pn(T.array, T.itemSize, T.normalized)
                    } else G !== "TRANSLATION" && G !== "ROTATION" && G !== "SCALE" && C.geometry.setAttribute(G, i[G]);
                It.prototype.copy.call(R, C), this.parser.assignFinalMaterial(R), d.push(R)
            }
            return l.isGroup ? (l.clear(), l.add(...d), l) : d[0]
        }))
    }
}
const Kt = "glTF",
    ie = 12,
    Mt = {
        JSON: 1313821514,
        BIN: 5130562
    };
class Js {
    constructor(t) {
        this.name = I.KHR_BINARY_GLTF, this.content = null, this.body = null;
        const n = new DataView(t, 0, ie);
        if (this.header = {
                magic: Re(new Uint8Array(t.slice(0, 4))),
                version: n.getUint32(4, !0),
                length: n.getUint32(8, !0)
            }, this.header.magic !== Kt) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
        if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
        const e = this.header.length - ie,
            s = new DataView(t, ie);
        let o = 0;
        for (; o < e;) {
            const r = s.getUint32(o, !0);
            o += 4;
            const a = s.getUint32(o, !0);
            if (o += 4, a === Mt.JSON) {
                const i = new Uint8Array(t, ie + o, r);
                this.content = Re(i)
            } else if (a === Mt.BIN) {
                const i = ie + o;
                this.body = t.slice(i, i + r)
            }
            o += r
        }
        if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.")
    }
}
class ys {
    constructor(t, n) {
        if (!n) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
        this.name = I.KHR_DRACO_MESH_COMPRESSION, this.json = t, this.dracoLoader = n, this.dracoLoader.preload()
    }
    decodePrimitive(t, n) {
        const e = this.json,
            s = this.dracoLoader,
            o = t.extensions[this.name].bufferView,
            r = t.extensions[this.name].attributes,
            a = {},
            i = {},
            c = {};
        for (const l in r) {
            const A = Ne[l] || l.toLowerCase();
            a[A] = r[l]
        }
        for (const l in t.attributes) {
            const A = Ne[l] || l.toLowerCase();
            if (r[l] !== void 0) {
                const u = e.accessors[t.attributes[l]],
                    d = ee[u.componentType];
                c[A] = d.name, i[A] = u.normalized === !0
            }
        }
        return n.getDependency("bufferView", o).then(function(l) {
            return new Promise(function(A, u) {
                s.decodeDracoFile(l, function(d) {
                    for (const C in d.attributes) {
                        const m = d.attributes[C],
                            f = i[C];
                        f !== void 0 && (m.normalized = f)
                    }
                    A(d)
                }, a, c, k, u)
            })
        })
    }
}
class Os {
    constructor() {
        this.name = I.KHR_TEXTURE_TRANSFORM
    }
    extendTexture(t, n) {
        return (n.texCoord === void 0 || n.texCoord === t.channel) && n.offset === void 0 && n.rotation === void 0 && n.scale === void 0 || (t = t.clone(), n.texCoord !== void 0 && (t.channel = n.texCoord), n.offset !== void 0 && t.offset.fromArray(n.offset), n.rotation !== void 0 && (t.rotation = n.rotation), n.scale !== void 0 && t.repeat.fromArray(n.scale), t.needsUpdate = !0), t
    }
}
class Ss {
    constructor() {
        this.name = I.KHR_MESH_QUANTIZATION
    }
}
class wt extends Xn {
    constructor(t, n, e, s) {
        super(t, n, e, s)
    }
    copySampleValue_(t) {
        const n = this.resultBuffer,
            e = this.sampleValues,
            s = this.valueSize,
            o = t * s * 3 + s;
        for (let r = 0; r !== s; r++) n[r] = e[o + r];
        return n
    }
    interpolate_(t, n, e, s) {
        const o = this.resultBuffer,
            r = this.sampleValues,
            a = this.valueSize,
            i = a * 2,
            c = a * 3,
            l = s - n,
            A = (e - n) / l,
            u = A * A,
            d = u * A,
            C = t * c,
            m = C - c,
            f = -2 * d + 3 * u,
            E = d - u,
            F = 1 - f,
            R = E - u + A;
        for (let G = 0; G !== a; G++) {
            const T = r[m + G + a],
                D = r[m + G + i] * l,
                O = r[C + G + a],
                S = r[C + G] * l;
            o[G] = F * T + R * D + f * O + E * S
        }
        return o
    }
}
const Ps = new Ee;
class xs extends wt {
    interpolate_(t, n, e, s) {
        const o = super.interpolate_(t, n, e, s);
        return Ps.fromArray(o).normalize().toArray(o), o
    }
}
const K = {
        FLOAT: 5126,
        FLOAT_MAT3: 35675,
        FLOAT_MAT4: 35676,
        FLOAT_VEC2: 35664,
        FLOAT_VEC3: 35665,
        FLOAT_VEC4: 35666,
        LINEAR: 9729,
        REPEAT: 10497,
        SAMPLER_2D: 35678,
        POINTS: 0,
        LINES: 1,
        LINE_LOOP: 2,
        LINE_STRIP: 3,
        TRIANGLES: 4,
        TRIANGLE_STRIP: 5,
        TRIANGLE_FAN: 6,
        UNSIGNED_BYTE: 5121,
        UNSIGNED_SHORT: 5123
    },
    ee = {
        5120: Int8Array,
        5121: Uint8Array,
        5122: Int16Array,
        5123: Uint16Array,
        5125: Uint32Array,
        5126: Float32Array
    },
    gt = {
        9728: Pn,
        9729: ge,
        9984: xn,
        9985: Un,
        9986: Kn,
        9987: bt
    },
    Gt = {
        33071: wn,
        33648: Nn,
        10497: we
    },
    Oe = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
    },
    Ne = {
        POSITION: "position",
        NORMAL: "normal",
        TANGENT: "tangent",
        ...is >= 152 ? {
            TEXCOORD_0: "uv",
            TEXCOORD_1: "uv1",
            TEXCOORD_2: "uv2",
            TEXCOORD_3: "uv3"
        } : {
            TEXCOORD_0: "uv",
            TEXCOORD_1: "uv2"
        },
        COLOR_0: "color",
        WEIGHTS_0: "skinWeight",
        JOINTS_0: "skinIndex"
    },
    X = {
        scale: "scale",
        translation: "position",
        rotation: "quaternion",
        weights: "morphTargetInfluences"
    },
    Us = {
        CUBICSPLINE: void 0,
        LINEAR: Jt,
        STEP: vn
    },
    Se = {
        OPAQUE: "OPAQUE",
        MASK: "MASK",
        BLEND: "BLEND"
    };

function Ks(B) {
    return B.DefaultMaterial === void 0 && (B.DefaultMaterial = new Ht({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: _n
    })), B.DefaultMaterial
}

function Y(B, t, n) {
    for (const e in n.extensions) B[e] === void 0 && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[e] = n.extensions[e])
}

function Q(B, t) {
    t.extras !== void 0 && (typeof t.extras == "object" ? Object.assign(B.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras))
}

function ws(B, t, n) {
    let e = !1,
        s = !1,
        o = !1;
    for (let c = 0, l = t.length; c < l; c++) {
        const A = t[c];
        if (A.POSITION !== void 0 && (e = !0), A.NORMAL !== void 0 && (s = !0), A.COLOR_0 !== void 0 && (o = !0), e && s && o) break
    }
    if (!e && !s && !o) return Promise.resolve(B);
    const r = [],
        a = [],
        i = [];
    for (let c = 0, l = t.length; c < l; c++) {
        const A = t[c];
        if (e) {
            const u = A.POSITION !== void 0 ? n.getDependency("accessor", A.POSITION) : B.attributes.position;
            r.push(u)
        }
        if (s) {
            const u = A.NORMAL !== void 0 ? n.getDependency("accessor", A.NORMAL) : B.attributes.normal;
            a.push(u)
        }
        if (o) {
            const u = A.COLOR_0 !== void 0 ? n.getDependency("accessor", A.COLOR_0) : B.attributes.color;
            i.push(u)
        }
    }
    return Promise.all([Promise.all(r), Promise.all(a), Promise.all(i)]).then(function(c) {
        const l = c[0],
            A = c[1],
            u = c[2];
        return e && (B.morphAttributes.position = l), s && (B.morphAttributes.normal = A), o && (B.morphAttributes.color = u), B.morphTargetsRelative = !0, B
    })
}

function Ns(B, t) {
    if (B.updateMorphTargets(), t.weights !== void 0)
        for (let n = 0, e = t.weights.length; n < e; n++) B.morphTargetInfluences[n] = t.weights[n];
    if (t.extras && Array.isArray(t.extras.targetNames)) {
        const n = t.extras.targetNames;
        if (B.morphTargetInfluences.length === n.length) {
            B.morphTargetDictionary = {};
            for (let e = 0, s = n.length; e < s; e++) B.morphTargetDictionary[n[e]] = e
        } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
    }
}

function vs(B) {
    let t;
    const n = B.extensions && B.extensions[I.KHR_DRACO_MESH_COMPRESSION];
    if (n ? t = "draco:" + n.bufferView + ":" + n.indices + ":" + Pe(n.attributes) : t = B.indices + ":" + Pe(B.attributes) + ":" + B.mode, B.targets !== void 0)
        for (let e = 0, s = B.targets.length; e < s; e++) t += ":" + Pe(B.targets[e]);
    return t
}

function Pe(B) {
    let t = "";
    const n = Object.keys(B).sort();
    for (let e = 0, s = n.length; e < s; e++) t += n[e] + ":" + B[n[e]] + ";";
    return t
}

function ve(B) {
    switch (B) {
        case Int8Array:
            return 1 / 127;
        case Uint8Array:
            return 1 / 255;
        case Int16Array:
            return 1 / 32767;
        case Uint16Array:
            return 1 / 65535;
        default:
            throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
    }
}

function _s(B) {
    return B.search(/\.jpe?g($|\?)/i) > 0 || B.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : B.search(/\.webp($|\?)/i) > 0 || B.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png"
}
const Qs = new Me;
class ks {
    constructor(t = {}, n = {}) {
        this.json = t, this.extensions = {}, this.plugins = {}, this.options = n, this.cache = new us, this.associations = new Map, this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
            refs: {},
            uses: {}
        }, this.cameraCache = {
            refs: {},
            uses: {}
        }, this.lightCache = {
            refs: {},
            uses: {}
        }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
        let e = !1,
            s = !1,
            o = -1;
        typeof navigator < "u" && typeof navigator.userAgent < "u" && (e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, s = navigator.userAgent.indexOf("Firefox") > -1, o = s ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || e || s && o < 98 ? this.textureLoader = new mn(this.options.manager) : this.textureLoader = new En(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Fe(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0)
    }
    setExtensions(t) {
        this.extensions = t
    }
    setPlugins(t) {
        this.plugins = t
    }
    parse(t, n) {
        const e = this,
            s = this.json,
            o = this.extensions;
        this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(r) {
            return r._markDefs && r._markDefs()
        }), Promise.all(this._invokeAll(function(r) {
            return r.beforeRoot && r.beforeRoot()
        })).then(function() {
            return Promise.all([e.getDependencies("scene"), e.getDependencies("animation"), e.getDependencies("camera")])
        }).then(function(r) {
            const a = {
                scene: r[0][s.scene || 0],
                scenes: r[0],
                animations: r[1],
                cameras: r[2],
                asset: s.asset,
                parser: e,
                userData: {}
            };
            return Y(o, a, s), Q(a, s), Promise.all(e._invokeAll(function(i) {
                return i.afterRoot && i.afterRoot(a)
            })).then(function() {
                for (const i of a.scenes) i.updateMatrixWorld();
                t(a)
            })
        }).catch(n)
    }
    _markDefs() {
        const t = this.json.nodes || [],
            n = this.json.skins || [],
            e = this.json.meshes || [];
        for (let s = 0, o = n.length; s < o; s++) {
            const r = n[s].joints;
            for (let a = 0, i = r.length; a < i; a++) t[r[a]].isBone = !0
        }
        for (let s = 0, o = t.length; s < o; s++) {
            const r = t[s];
            r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (e[r.mesh].isSkinnedMesh = !0)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera)
        }
    }
    _addNodeRef(t, n) {
        n !== void 0 && (t.refs[n] === void 0 && (t.refs[n] = t.uses[n] = 0), t.refs[n]++)
    }
    _getNodeRef(t, n, e) {
        if (t.refs[n] <= 1) return e;
        const s = e.clone(),
            o = (r, a) => {
                const i = this.associations.get(r);
                i != null && this.associations.set(a, i);
                for (const [c, l] of r.children.entries()) o(l, a.children[c])
            };
        return o(e, s), s.name += "_instance_" + t.uses[n]++, s
    }
    _invokeOne(t) {
        const n = Object.values(this.plugins);
        n.push(this);
        for (let e = 0; e < n.length; e++) {
            const s = t(n[e]);
            if (s) return s
        }
        return null
    }
    _invokeAll(t) {
        const n = Object.values(this.plugins);
        n.unshift(this);
        const e = [];
        for (let s = 0; s < n.length; s++) {
            const o = t(n[s]);
            o && e.push(o)
        }
        return e
    }
    getDependency(t, n) {
        const e = t + ":" + n;
        let s = this.cache.get(e);
        if (!s) {
            switch (t) {
                case "scene":
                    s = this.loadScene(n);
                    break;
                case "node":
                    s = this._invokeOne(function(o) {
                        return o.loadNode && o.loadNode(n)
                    });
                    break;
                case "mesh":
                    s = this._invokeOne(function(o) {
                        return o.loadMesh && o.loadMesh(n)
                    });
                    break;
                case "accessor":
                    s = this.loadAccessor(n);
                    break;
                case "bufferView":
                    s = this._invokeOne(function(o) {
                        return o.loadBufferView && o.loadBufferView(n)
                    });
                    break;
                case "buffer":
                    s = this.loadBuffer(n);
                    break;
                case "material":
                    s = this._invokeOne(function(o) {
                        return o.loadMaterial && o.loadMaterial(n)
                    });
                    break;
                case "texture":
                    s = this._invokeOne(function(o) {
                        return o.loadTexture && o.loadTexture(n)
                    });
                    break;
                case "skin":
                    s = this.loadSkin(n);
                    break;
                case "animation":
                    s = this._invokeOne(function(o) {
                        return o.loadAnimation && o.loadAnimation(n)
                    });
                    break;
                case "camera":
                    s = this.loadCamera(n);
                    break;
                default:
                    if (s = this._invokeOne(function(o) {
                            return o != this && o.getDependency && o.getDependency(t, n)
                        }), !s) throw new Error("Unknown type: " + t);
                    break
            }
            this.cache.add(e, s)
        }
        return s
    }
    getDependencies(t) {
        let n = this.cache.get(t);
        if (!n) {
            const e = this,
                s = this.json[t + (t === "mesh" ? "es" : "s")] || [];
            n = Promise.all(s.map(function(o, r) {
                return e.getDependency(t, r)
            })), this.cache.add(t, n)
        }
        return n
    }
    loadBuffer(t) {
        const n = this.json.buffers[t],
            e = this.fileLoader;
        if (n.type && n.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + n.type + " buffer type is not supported.");
        if (n.uri === void 0 && t === 0) return Promise.resolve(this.extensions[I.KHR_BINARY_GLTF].body);
        const s = this.options;
        return new Promise(function(o, r) {
            e.load(le.resolveURL(n.uri, s.path), o, void 0, function() {
                r(new Error('THREE.GLTFLoader: Failed to load buffer "' + n.uri + '".'))
            })
        })
    }
    loadBufferView(t) {
        const n = this.json.bufferViews[t];
        return this.getDependency("buffer", n.buffer).then(function(e) {
            const s = n.byteLength || 0,
                o = n.byteOffset || 0;
            return e.slice(o, o + s)
        })
    }
    loadAccessor(t) {
        const n = this,
            e = this.json,
            s = this.json.accessors[t];
        if (s.bufferView === void 0 && s.sparse === void 0) {
            const r = Oe[s.type],
                a = ee[s.componentType],
                i = s.normalized === !0,
                c = new a(s.count * r);
            return Promise.resolve(new Be(c, r, i))
        }
        const o = [];
        return s.bufferView !== void 0 ? o.push(this.getDependency("bufferView", s.bufferView)) : o.push(null), s.sparse !== void 0 && (o.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), o.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(o).then(function(r) {
            const a = r[0],
                i = Oe[s.type],
                c = ee[s.componentType],
                l = c.BYTES_PER_ELEMENT,
                A = l * i,
                u = s.byteOffset || 0,
                d = s.bufferView !== void 0 ? e.bufferViews[s.bufferView].byteStride : void 0,
                C = s.normalized === !0;
            let m, f;
            if (d && d !== A) {
                const E = Math.floor(u / d),
                    F = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + E + ":" + s.count;
                let R = n.cache.get(F);
                R || (m = new c(a, E * d, s.count * d / l), R = new Fn(m, d / l), n.cache.add(F, R)), f = new Qn(R, i, u % d / l, C)
            } else a === null ? m = new c(s.count * i) : m = new c(a, u, s.count * i), f = new Be(m, i, C);
            if (s.sparse !== void 0) {
                const E = Oe.SCALAR,
                    F = ee[s.sparse.indices.componentType],
                    R = s.sparse.indices.byteOffset || 0,
                    G = s.sparse.values.byteOffset || 0,
                    T = new F(r[1], R, s.sparse.count * E),
                    D = new c(r[2], G, s.sparse.count * i);
                a !== null && (f = new Be(f.array.slice(), f.itemSize, f.normalized));
                for (let O = 0, S = T.length; O < S; O++) {
                    const J = T[O];
                    if (f.setX(J, D[O * i]), i >= 2 && f.setY(J, D[O * i + 1]), i >= 3 && f.setZ(J, D[O * i + 2]), i >= 4 && f.setW(J, D[O * i + 3]), i >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                }
            }
            return f
        })
    }
    loadTexture(t) {
        const n = this.json,
            e = this.options,
            o = n.textures[t].source,
            r = n.images[o];
        let a = this.textureLoader;
        if (r.uri) {
            const i = e.manager.getHandler(r.uri);
            i !== null && (a = i)
        }
        return this.loadTextureImage(t, o, a)
    }
    loadTextureImage(t, n, e) {
        const s = this,
            o = this.json,
            r = o.textures[t],
            a = o.images[n],
            i = (a.uri || a.bufferView) + ":" + r.sampler;
        if (this.textureCache[i]) return this.textureCache[i];
        const c = this.loadImageSource(n, e).then(function(l) {
            l.flipY = !1, l.name = r.name || a.name || "", l.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (l.name = a.uri);
            const u = (o.samplers || {})[r.sampler] || {};
            return l.magFilter = gt[u.magFilter] || ge, l.minFilter = gt[u.minFilter] || bt, l.wrapS = Gt[u.wrapS] || we, l.wrapT = Gt[u.wrapT] || we, s.associations.set(l, {
                textures: t
            }), l
        }).catch(function() {
            return null
        });
        return this.textureCache[i] = c, c
    }
    loadImageSource(t, n) {
        const e = this,
            s = this.json,
            o = this.options;
        if (this.sourceCache[t] !== void 0) return this.sourceCache[t].then(A => A.clone());
        const r = s.images[t],
            a = self.URL || self.webkitURL;
        let i = r.uri || "",
            c = !1;
        if (r.bufferView !== void 0) i = e.getDependency("bufferView", r.bufferView).then(function(A) {
            c = !0;
            const u = new Blob([A], {
                type: r.mimeType
            });
            return i = a.createObjectURL(u), i
        });
        else if (r.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + t + " is missing URI and bufferView");
        const l = Promise.resolve(i).then(function(A) {
            return new Promise(function(u, d) {
                let C = u;
                n.isImageBitmapLoader === !0 && (C = function(m) {
                    const f = new lt(m);
                    f.needsUpdate = !0, u(f)
                }), n.load(le.resolveURL(A, o.path), C, void 0, d)
            })
        }).then(function(A) {
            return c === !0 && a.revokeObjectURL(i), Q(A, r), A.userData.mimeType = r.mimeType || _s(r.uri), A
        }).catch(function(A) {
            throw console.error("THREE.GLTFLoader: Couldn't load texture", i), A
        });
        return this.sourceCache[t] = l, l
    }
    assignTexture(t, n, e, s) {
        const o = this;
        return this.getDependency("texture", e.index).then(function(r) {
            if (!r) return null;
            if (e.texCoord !== void 0 && e.texCoord > 0 && (r = r.clone(), r.channel = e.texCoord), o.extensions[I.KHR_TEXTURE_TRANSFORM]) {
                const a = e.extensions !== void 0 ? e.extensions[I.KHR_TEXTURE_TRANSFORM] : void 0;
                if (a) {
                    const i = o.associations.get(r);
                    r = o.extensions[I.KHR_TEXTURE_TRANSFORM].extendTexture(r, a), o.associations.set(r, i)
                }
            }
            return s !== void 0 && (typeof s == "number" && (s = s === Ft ? W : k), "colorSpace" in r ? r.colorSpace = s : r.encoding = s === W ? Ft : Bs), t[n] = r, r
        })
    }
    assignFinalMaterial(t) {
        const n = t.geometry;
        let e = t.material;
        const s = n.attributes.tangent === void 0,
            o = n.attributes.color !== void 0,
            r = n.attributes.normal === void 0;
        if (t.isPoints) {
            const a = "PointsMaterial:" + e.uuid;
            let i = this.cache.get(a);
            i || (i = new Mn, Je.prototype.copy.call(i, e), i.color.copy(e.color), i.map = e.map, i.sizeAttenuation = !1, this.cache.add(a, i)), e = i
        } else if (t.isLine) {
            const a = "LineBasicMaterial:" + e.uuid;
            let i = this.cache.get(a);
            i || (i = new gn, Je.prototype.copy.call(i, e), i.color.copy(e.color), i.map = e.map, this.cache.add(a, i)), e = i
        }
        if (s || o || r) {
            let a = "ClonedMaterial:" + e.uuid + ":";
            s && (a += "derivative-tangents:"), o && (a += "vertex-colors:"), r && (a += "flat-shading:");
            let i = this.cache.get(a);
            i || (i = e.clone(), o && (i.vertexColors = !0), r && (i.flatShading = !0), s && (i.normalScale && (i.normalScale.y *= -1), i.clearcoatNormalScale && (i.clearcoatNormalScale.y *= -1)), this.cache.add(a, i), this.associations.set(i, this.associations.get(e))), e = i
        }
        t.material = e
    }
    getMaterialType() {
        return Ht
    }
    loadMaterial(t) {
        const n = this,
            e = this.json,
            s = this.extensions,
            o = e.materials[t];
        let r;
        const a = {},
            i = o.extensions || {},
            c = [];
        if (i[I.KHR_MATERIALS_UNLIT]) {
            const A = s[I.KHR_MATERIALS_UNLIT];
            r = A.getMaterialType(), c.push(A.extendParams(a, o, n))
        } else {
            const A = o.pbrMetallicRoughness || {};
            if (a.color = new V(1, 1, 1), a.opacity = 1, Array.isArray(A.baseColorFactor)) {
                const u = A.baseColorFactor;
                a.color.setRGB(u[0], u[1], u[2], k), a.opacity = u[3]
            }
            A.baseColorTexture !== void 0 && c.push(n.assignTexture(a, "map", A.baseColorTexture, W)), a.metalness = A.metallicFactor !== void 0 ? A.metallicFactor : 1, a.roughness = A.roughnessFactor !== void 0 ? A.roughnessFactor : 1, A.metallicRoughnessTexture !== void 0 && (c.push(n.assignTexture(a, "metalnessMap", A.metallicRoughnessTexture)), c.push(n.assignTexture(a, "roughnessMap", A.metallicRoughnessTexture))), r = this._invokeOne(function(u) {
                return u.getMaterialType && u.getMaterialType(t)
            }), c.push(Promise.all(this._invokeAll(function(u) {
                return u.extendMaterialParams && u.extendMaterialParams(t, a)
            })))
        }
        o.doubleSided === !0 && (a.side = Gn);
        const l = o.alphaMode || Se.OPAQUE;
        if (l === Se.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, l === Se.MASK && (a.alphaTest = o.alphaCutoff !== void 0 ? o.alphaCutoff : .5)), o.normalTexture !== void 0 && r !== Ae && (c.push(n.assignTexture(a, "normalMap", o.normalTexture)), a.normalScale = new x(1, 1), o.normalTexture.scale !== void 0)) {
            const A = o.normalTexture.scale;
            a.normalScale.set(A, A)
        }
        if (o.occlusionTexture !== void 0 && r !== Ae && (c.push(n.assignTexture(a, "aoMap", o.occlusionTexture)), o.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = o.occlusionTexture.strength)), o.emissiveFactor !== void 0 && r !== Ae) {
            const A = o.emissiveFactor;
            a.emissive = new V().setRGB(A[0], A[1], A[2], k)
        }
        return o.emissiveTexture !== void 0 && r !== Ae && c.push(n.assignTexture(a, "emissiveMap", o.emissiveTexture, W)), Promise.all(c).then(function() {
            const A = new r(a);
            return o.name && (A.name = o.name), Q(A, o), n.associations.set(A, {
                materials: t
            }), o.extensions && Y(s, A, o), A
        })
    }
    createUniqueName(t) {
        const n = Rn.sanitizeNodeName(t || "");
        return n in this.nodeNamesUsed ? n + "_" + ++this.nodeNamesUsed[n] : (this.nodeNamesUsed[n] = 0, n)
    }
    loadGeometries(t) {
        const n = this,
            e = this.extensions,
            s = this.primitiveCache;

        function o(a) {
            return e[I.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, n).then(function(i) {
                return Rt(i, a, n)
            })
        }
        const r = [];
        for (let a = 0, i = t.length; a < i; a++) {
            const c = t[a],
                l = vs(c),
                A = s[l];
            if (A) r.push(A.promise);
            else {
                let u;
                c.extensions && c.extensions[I.KHR_DRACO_MESH_COMPRESSION] ? u = o(c) : u = Rt(new Lt, c, n), s[l] = {
                    primitive: c,
                    promise: u
                }, r.push(u)
            }
        }
        return Promise.all(r)
    }
    loadMesh(t) {
        const n = this,
            e = this.json,
            s = this.extensions,
            o = e.meshes[t],
            r = o.primitives,
            a = [];
        for (let i = 0, c = r.length; i < c; i++) {
            const l = r[i].material === void 0 ? Ks(this.cache) : this.getDependency("material", r[i].material);
            a.push(l)
        }
        return a.push(n.loadGeometries(r)), Promise.all(a).then(function(i) {
            const c = i.slice(0, i.length - 1),
                l = i[i.length - 1],
                A = [];
            for (let d = 0, C = l.length; d < C; d++) {
                const m = l[d],
                    f = r[d];
                let E;
                const F = c[d];
                if (f.mode === K.TRIANGLES || f.mode === K.TRIANGLE_STRIP || f.mode === K.TRIANGLE_FAN || f.mode === void 0) E = o.isSkinnedMesh === !0 ? new Dn(m, F) : new Tn(m, F), E.isSkinnedMesh === !0 && E.normalizeSkinWeights(), f.mode === K.TRIANGLE_STRIP ? E.geometry = pt(E.geometry, Dt) : f.mode === K.TRIANGLE_FAN && (E.geometry = pt(E.geometry, Ke));
                else if (f.mode === K.LINES) E = new In(m, F);
                else if (f.mode === K.LINE_STRIP) E = new bn(m, F);
                else if (f.mode === K.LINE_LOOP) E = new Hn(m, F);
                else if (f.mode === K.POINTS) E = new Ln(m, F);
                else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + f.mode);
                Object.keys(E.geometry.morphAttributes).length > 0 && Ns(E, o), E.name = n.createUniqueName(o.name || "mesh_" + t), Q(E, o), f.extensions && Y(s, E, f), n.assignFinalMaterial(E), A.push(E)
            }
            for (let d = 0, C = A.length; d < C; d++) n.associations.set(A[d], {
                meshes: t,
                primitives: d
            });
            if (A.length === 1) return o.extensions && Y(s, A[0], o), A[0];
            const u = new ye;
            o.extensions && Y(s, u, o), n.associations.set(u, {
                meshes: t
            });
            for (let d = 0, C = A.length; d < C; d++) u.add(A[d]);
            return u
        })
    }
    loadCamera(t) {
        let n;
        const e = this.json.cameras[t],
            s = e[e.type];
        if (!s) {
            console.warn("THREE.GLTFLoader: Missing camera parameters.");
            return
        }
        return e.type === "perspective" ? n = new ae(Jn.radToDeg(s.yfov), s.aspectRatio || 1, s.znear || 1, s.zfar || 2e6) : e.type === "orthographic" && (n = new ce(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), e.name && (n.name = this.createUniqueName(e.name)), Q(n, e), Promise.resolve(n)
    }
    loadSkin(t) {
        const n = this.json.skins[t],
            e = [];
        for (let s = 0, o = n.joints.length; s < o; s++) e.push(this._loadNodeShallow(n.joints[s]));
        return n.inverseBindMatrices !== void 0 ? e.push(this.getDependency("accessor", n.inverseBindMatrices)) : e.push(null), Promise.all(e).then(function(s) {
            const o = s.pop(),
                r = s,
                a = [],
                i = [];
            for (let c = 0, l = r.length; c < l; c++) {
                const A = r[c];
                if (A) {
                    a.push(A);
                    const u = new Me;
                    o !== null && u.fromArray(o.array, c * 16), i.push(u)
                } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', n.joints[c])
            }
            return new yn(a, i)
        })
    }
    loadAnimation(t) {
        const n = this.json,
            e = this,
            s = n.animations[t],
            o = s.name ? s.name : "animation_" + t,
            r = [],
            a = [],
            i = [],
            c = [],
            l = [];
        for (let A = 0, u = s.channels.length; A < u; A++) {
            const d = s.channels[A],
                C = s.samplers[d.sampler],
                m = d.target,
                f = m.node,
                E = s.parameters !== void 0 ? s.parameters[C.input] : C.input,
                F = s.parameters !== void 0 ? s.parameters[C.output] : C.output;
            m.node !== void 0 && (r.push(this.getDependency("node", f)), a.push(this.getDependency("accessor", E)), i.push(this.getDependency("accessor", F)), c.push(C), l.push(m))
        }
        return Promise.all([Promise.all(r), Promise.all(a), Promise.all(i), Promise.all(c), Promise.all(l)]).then(function(A) {
            const u = A[0],
                d = A[1],
                C = A[2],
                m = A[3],
                f = A[4],
                E = [];
            for (let F = 0, R = u.length; F < R; F++) {
                const G = u[F],
                    T = d[F],
                    D = C[F],
                    O = m[F],
                    S = f[F];
                if (G === void 0) continue;
                G.updateMatrix && G.updateMatrix();
                const J = e._createAnimationTracks(G, T, D, O, S);
                if (J)
                    for (let b = 0; b < J.length; b++) E.push(J[b])
            }
            return new On(o, void 0, E)
        })
    }
    createNodeMesh(t) {
        const n = this.json,
            e = this,
            s = n.nodes[t];
        return s.mesh === void 0 ? null : e.getDependency("mesh", s.mesh).then(function(o) {
            const r = e._getNodeRef(e.meshCache, s.mesh, o);
            return s.weights !== void 0 && r.traverse(function(a) {
                if (a.isMesh)
                    for (let i = 0, c = s.weights.length; i < c; i++) a.morphTargetInfluences[i] = s.weights[i]
            }), r
        })
    }
    loadNode(t) {
        const n = this.json,
            e = this,
            s = n.nodes[t],
            o = e._loadNodeShallow(t),
            r = [],
            a = s.children || [];
        for (let c = 0, l = a.length; c < l; c++) r.push(e.getDependency("node", a[c]));
        const i = s.skin === void 0 ? Promise.resolve(null) : e.getDependency("skin", s.skin);
        return Promise.all([o, Promise.all(r), i]).then(function(c) {
            const l = c[0],
                A = c[1],
                u = c[2];
            u !== null && l.traverse(function(d) {
                d.isSkinnedMesh && d.bind(u, Qs)
            });
            for (let d = 0, C = A.length; d < C; d++) l.add(A[d]);
            return l
        })
    }
    _loadNodeShallow(t) {
        const n = this.json,
            e = this.extensions,
            s = this;
        if (this.nodeCache[t] !== void 0) return this.nodeCache[t];
        const o = n.nodes[t],
            r = o.name ? s.createUniqueName(o.name) : "",
            a = [],
            i = s._invokeOne(function(c) {
                return c.createNodeMesh && c.createNodeMesh(t)
            });
        return i && a.push(i), o.camera !== void 0 && a.push(s.getDependency("camera", o.camera).then(function(c) {
            return s._getNodeRef(s.cameraCache, o.camera, c)
        })), s._invokeAll(function(c) {
            return c.createNodeAttachment && c.createNodeAttachment(t)
        }).forEach(function(c) {
            a.push(c)
        }), this.nodeCache[t] = Promise.all(a).then(function(c) {
            let l;
            if (o.isBone === !0 ? l = new Sn : c.length > 1 ? l = new ye : c.length === 1 ? l = c[0] : l = new It, l !== c[0])
                for (let A = 0, u = c.length; A < u; A++) l.add(c[A]);
            if (o.name && (l.userData.name = o.name, l.name = r), Q(l, o), o.extensions && Y(e, l, o), o.matrix !== void 0) {
                const A = new Me;
                A.fromArray(o.matrix), l.applyMatrix4(A)
            } else o.translation !== void 0 && l.position.fromArray(o.translation), o.rotation !== void 0 && l.quaternion.fromArray(o.rotation), o.scale !== void 0 && l.scale.fromArray(o.scale);
            return s.associations.has(l) || s.associations.set(l, {}), s.associations.get(l).nodes = t, l
        }), this.nodeCache[t]
    }
    loadScene(t) {
        const n = this.extensions,
            e = this.json.scenes[t],
            s = this,
            o = new ye;
        e.name && (o.name = s.createUniqueName(e.name)), Q(o, e), e.extensions && Y(n, o, e);
        const r = e.nodes || [],
            a = [];
        for (let i = 0, c = r.length; i < c; i++) a.push(s.getDependency("node", r[i]));
        return Promise.all(a).then(function(i) {
            for (let l = 0, A = i.length; l < A; l++) o.add(i[l]);
            const c = l => {
                const A = new Map;
                for (const [u, d] of s.associations)(u instanceof Je || u instanceof lt) && A.set(u, d);
                return l.traverse(u => {
                    const d = s.associations.get(u);
                    d != null && A.set(u, d)
                }), A
            };
            return s.associations = c(o), o
        })
    }
    _createAnimationTracks(t, n, e, s, o) {
        const r = [],
            a = t.name ? t.name : t.uuid,
            i = [];
        X[o.path] === X.weights ? t.traverse(function(u) {
            u.morphTargetInfluences && i.push(u.name ? u.name : u.uuid)
        }) : i.push(a);
        let c;
        switch (X[o.path]) {
            case X.weights:
                c = ut;
                break;
            case X.rotation:
                c = ht;
                break;
            case X.position:
            case X.scale:
                c = Bt;
                break;
            default:
                switch (e.itemSize) {
                    case 1:
                        c = ut;
                        break;
                    case 2:
                    case 3:
                    default:
                        c = Bt;
                        break
                }
                break
        }
        const l = s.interpolation !== void 0 ? Us[s.interpolation] : Jt,
            A = this._getArrayFromAccessor(e);
        for (let u = 0, d = i.length; u < d; u++) {
            const C = new c(i[u] + "." + X[o.path], n.array, A, l);
            s.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(C), r.push(C)
        }
        return r
    }
    _getArrayFromAccessor(t) {
        let n = t.array;
        if (t.normalized) {
            const e = ve(n.constructor),
                s = new Float32Array(n.length);
            for (let o = 0, r = n.length; o < r; o++) s[o] = n[o] * e;
            n = s
        }
        return n
    }
    _createCubicSplineTrackInterpolant(t) {
        t.createInterpolant = function(e) {
            const s = this instanceof ht ? xs : wt;
            return new s(this.times, this.values, this.getValueSize() / 3, e)
        }, t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0
    }
}

function js(B, t, n) {
    const e = t.attributes,
        s = new kn;
    if (e.POSITION !== void 0) {
        const a = n.json.accessors[e.POSITION],
            i = a.min,
            c = a.max;
        if (i !== void 0 && c !== void 0) {
            if (s.set(new P(i[0], i[1], i[2]), new P(c[0], c[1], c[2])), a.normalized) {
                const l = ve(ee[a.componentType]);
                s.min.multiplyScalar(l), s.max.multiplyScalar(l)
            }
        } else {
            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            return
        }
    } else return;
    const o = t.targets;
    if (o !== void 0) {
        const a = new P,
            i = new P;
        for (let c = 0, l = o.length; c < l; c++) {
            const A = o[c];
            if (A.POSITION !== void 0) {
                const u = n.json.accessors[A.POSITION],
                    d = u.min,
                    C = u.max;
                if (d !== void 0 && C !== void 0) {
                    if (i.setX(Math.max(Math.abs(d[0]), Math.abs(C[0]))), i.setY(Math.max(Math.abs(d[1]), Math.abs(C[1]))), i.setZ(Math.max(Math.abs(d[2]), Math.abs(C[2]))), u.normalized) {
                        const m = ve(ee[u.componentType]);
                        i.multiplyScalar(m)
                    }
                    a.max(i)
                } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
            }
        }
        s.expandByVector(a)
    }
    B.boundingBox = s;
    const r = new jn;
    s.getCenter(r.center), r.radius = s.min.distanceTo(s.max) / 2, B.boundingSphere = r
}

function Rt(B, t, n) {
    const e = t.attributes,
        s = [];

    function o(r, a) {
        return n.getDependency("accessor", r).then(function(i) {
            B.setAttribute(a, i)
        })
    }
    for (const r in e) {
        const a = Ne[r] || r.toLowerCase();
        a in B.attributes || s.push(o(e[r], a))
    }
    if (t.indices !== void 0 && !B.index) {
        const r = n.getDependency("accessor", t.indices).then(function(a) {
            B.setIndex(a)
        });
        s.push(r)
    }
    return Q(B, t), js(B, t, n), Promise.all(s).then(function() {
        return t.targets !== void 0 ? ws(B, t.targets, n) : B
    })
}
const xe = new WeakMap;
class Xs extends Tt {
    constructor(t) {
        super(t), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
            position: "POSITION",
            normal: "NORMAL",
            color: "COLOR",
            uv: "TEX_COORD"
        }, this.defaultAttributeTypes = {
            position: "Float32Array",
            normal: "Float32Array",
            color: "Float32Array",
            uv: "Float32Array"
        }
    }
    setDecoderPath(t) {
        return this.decoderPath = t, this
    }
    setDecoderConfig(t) {
        return this.decoderConfig = t, this
    }
    setWorkerLimit(t) {
        return this.workerLimit = t, this
    }
    load(t, n, e, s) {
        const o = new Fe(this.manager);
        o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(t, r => {
            const a = {
                attributeIDs: this.defaultAttributeIDs,
                attributeTypes: this.defaultAttributeTypes,
                useUniqueIDs: !1
            };
            this.decodeGeometry(r, a).then(n).catch(s)
        }, e, s)
    }
    decodeDracoFile(t, n, e, s) {
        const o = {
            attributeIDs: e || this.defaultAttributeIDs,
            attributeTypes: s || this.defaultAttributeTypes,
            useUniqueIDs: !!e
        };
        this.decodeGeometry(t, o).then(n)
    }
    decodeGeometry(t, n) {
        for (const i in n.attributeTypes) {
            const c = n.attributeTypes[i];
            c.BYTES_PER_ELEMENT !== void 0 && (n.attributeTypes[i] = c.name)
        }
        const e = JSON.stringify(n);
        if (xe.has(t)) {
            const i = xe.get(t);
            if (i.key === e) return i.promise;
            if (t.byteLength === 0) throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")
        }
        let s;
        const o = this.workerNextTaskID++,
            r = t.byteLength,
            a = this._getWorker(o, r).then(i => (s = i, new Promise((c, l) => {
                s._callbacks[o] = {
                    resolve: c,
                    reject: l
                }, s.postMessage({
                    type: "decode",
                    id: o,
                    taskConfig: n,
                    buffer: t
                }, [t])
            }))).then(i => this._createGeometry(i.geometry));
        return a.catch(() => !0).then(() => {
            s && o && this._releaseTask(s, o)
        }), xe.set(t, {
            key: e,
            promise: a
        }), a
    }
    _createGeometry(t) {
        const n = new Lt;
        t.index && n.setIndex(new Be(t.index.array, 1));
        for (let e = 0; e < t.attributes.length; e++) {
            const s = t.attributes[e],
                o = s.name,
                r = s.array,
                a = s.itemSize;
            n.setAttribute(o, new Be(r, a))
        }
        return n
    }
    _loadLibrary(t, n) {
        const e = new Fe(this.manager);
        return e.setPath(this.decoderPath), e.setResponseType(n), e.setWithCredentials(this.withCredentials), new Promise((s, o) => {
            e.load(t, s, void 0, o)
        })
    }
    preload() {
        return this._initDecoder(), this
    }
    _initDecoder() {
        if (this.decoderPending) return this.decoderPending;
        const t = typeof WebAssembly != "object" || this.decoderConfig.type === "js",
            n = [];
        return t ? n.push(this._loadLibrary("draco_decoder.js", "text")) : (n.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), n.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(n).then(e => {
            const s = e[0];
            t || (this.decoderConfig.wasmBinary = e[1]);
            const o = Ys.toString(),
                r = ["/* draco decoder */", s, "", "/* worker */", o.substring(o.indexOf("{") + 1, o.lastIndexOf("}"))].join(`
`);
            this.workerSourceURL = URL.createObjectURL(new Blob([r]))
        }), this.decoderPending
    }
    _getWorker(t, n) {
        return this._initDecoder().then(() => {
            if (this.workerPool.length < this.workerLimit) {
                const s = new Worker(this.workerSourceURL);
                s._callbacks = {}, s._taskCosts = {}, s._taskLoad = 0, s.postMessage({
                    type: "init",
                    decoderConfig: this.decoderConfig
                }), s.onmessage = function(o) {
                    const r = o.data;
                    switch (r.type) {
                        case "decode":
                            s._callbacks[r.id].resolve(r);
                            break;
                        case "error":
                            s._callbacks[r.id].reject(r);
                            break;
                        default:
                            console.error('THREE.DRACOLoader: Unexpected message, "' + r.type + '"')
                    }
                }, this.workerPool.push(s)
            } else this.workerPool.sort(function(s, o) {
                return s._taskLoad > o._taskLoad ? -1 : 1
            });
            const e = this.workerPool[this.workerPool.length - 1];
            return e._taskCosts[t] = n, e._taskLoad += n, e
        })
    }
    _releaseTask(t, n) {
        t._taskLoad -= t._taskCosts[n], delete t._callbacks[n], delete t._taskCosts[n]
    }
    debug() {
        console.log("Task load: ", this.workerPool.map(t => t._taskLoad))
    }
    dispose() {
        for (let t = 0; t < this.workerPool.length; ++t) this.workerPool[t].terminate();
        return this.workerPool.length = 0, this
    }
}

function Ys() {
    let B, t;
    onmessage = function(r) {
        const a = r.data;
        switch (a.type) {
            case "init":
                B = a.decoderConfig, t = new Promise(function(l) {
                    B.onModuleLoaded = function(A) {
                        l({
                            draco: A
                        })
                    }, DracoDecoderModule(B)
                });
                break;
            case "decode":
                const i = a.buffer,
                    c = a.taskConfig;
                t.then(l => {
                    const A = l.draco,
                        u = new A.Decoder,
                        d = new A.DecoderBuffer;
                    d.Init(new Int8Array(i), i.byteLength);
                    try {
                        const C = n(A, u, d, c),
                            m = C.attributes.map(f => f.array.buffer);
                        C.index && m.push(C.index.array.buffer), self.postMessage({
                            type: "decode",
                            id: a.id,
                            geometry: C
                        }, m)
                    } catch (C) {
                        console.error(C), self.postMessage({
                            type: "error",
                            id: a.id,
                            error: C.message
                        })
                    } finally {
                        A.destroy(d), A.destroy(u)
                    }
                });
                break
        }
    };

    function n(r, a, i, c) {
        const l = c.attributeIDs,
            A = c.attributeTypes;
        let u, d;
        const C = a.GetEncodedGeometryType(i);
        if (C === r.TRIANGULAR_MESH) u = new r.Mesh, d = a.DecodeBufferToMesh(i, u);
        else if (C === r.POINT_CLOUD) u = new r.PointCloud, d = a.DecodeBufferToPointCloud(i, u);
        else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
        if (!d.ok() || u.ptr === 0) throw new Error("THREE.DRACOLoader: Decoding failed: " + d.error_msg());
        const m = {
            index: null,
            attributes: []
        };
        for (const f in l) {
            const E = self[A[f]];
            let F, R;
            if (c.useUniqueIDs) R = l[f], F = a.GetAttributeByUniqueId(u, R);
            else {
                if (R = a.GetAttributeId(u, r[l[f]]), R === -1) continue;
                F = a.GetAttribute(u, R)
            }
            m.attributes.push(s(r, a, u, f, E, F))
        }
        return C === r.TRIANGULAR_MESH && (m.index = e(r, a, u)), r.destroy(u), m
    }

    function e(r, a, i) {
        const l = i.num_faces() * 3,
            A = l * 4,
            u = r._malloc(A);
        a.GetTrianglesUInt32Array(i, A, u);
        const d = new Uint32Array(r.HEAPF32.buffer, u, l).slice();
        return r._free(u), {
            array: d,
            itemSize: 1
        }
    }

    function s(r, a, i, c, l, A) {
        const u = A.num_components(),
            C = i.num_points() * u,
            m = C * l.BYTES_PER_ELEMENT,
            f = o(r, l),
            E = r._malloc(m);
        a.GetAttributeDataArrayForAllPoints(i, A, f, m, E);
        const F = new l(r.HEAPF32.buffer, E, C).slice();
        return r._free(E), {
            name: c,
            array: F,
            itemSize: u
        }
    }

    function o(r, a) {
        switch (a) {
            case Float32Array:
                return r.DT_FLOAT32;
            case Int8Array:
                return r.DT_INT8;
            case Int16Array:
                return r.DT_INT16;
            case Int32Array:
                return r.DT_INT32;
            case Uint8Array:
                return r.DT_UINT8;
            case Uint16Array:
                return r.DT_UINT16;
            case Uint32Array:
                return r.DT_UINT32
        }
    }
}
let pe;
const Ue = () => {
    if (pe) return pe;
    const B = "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",
        t = "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",
        n = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]),
        e = new Uint8Array([32, 0, 65, 253, 3, 1, 2, 34, 4, 106, 6, 5, 11, 8, 7, 20, 13, 33, 12, 16, 128, 9, 116, 64, 19, 113, 127, 15, 10, 21, 22, 14, 255, 66, 24, 54, 136, 107, 18, 23, 192, 26, 114, 118, 132, 17, 77, 101, 130, 144, 27, 87, 131, 44, 45, 74, 156, 154, 70, 167]);
    if (typeof WebAssembly != "object") return {
        supported: !1
    };
    let s = B;
    WebAssembly.validate(n) && (s = t);
    let o;
    const r = WebAssembly.instantiate(a(s), {}).then(A => {
        o = A.instance, o.exports.__wasm_call_ctors()
    });

    function a(A) {
        const u = new Uint8Array(A.length);
        for (let C = 0; C < A.length; ++C) {
            const m = A.charCodeAt(C);
            u[C] = m > 96 ? m - 71 : m > 64 ? m - 65 : m > 47 ? m + 4 : m > 46 ? 63 : 62
        }
        let d = 0;
        for (let C = 0; C < A.length; ++C) u[d++] = u[C] < 60 ? e[u[C]] : (u[C] - 60) * 64 + u[++C];
        return u.buffer.slice(0, d)
    }

    function i(A, u, d, C, m, f) {
        const E = o.exports.sbrk,
            F = d + 3 & -4,
            R = E(F * C),
            G = E(m.length),
            T = new Uint8Array(o.exports.memory.buffer);
        T.set(m, G);
        const D = A(R, d, C, G, m.length);
        if (D === 0 && f && f(R, F, C), u.set(T.subarray(R, R + d * C)), E(R - E(0)), D !== 0) throw new Error(`Malformed buffer data: ${D}`)
    }
    const c = {
            0: "",
            1: "meshopt_decodeFilterOct",
            2: "meshopt_decodeFilterQuat",
            3: "meshopt_decodeFilterExp",
            NONE: "",
            OCTAHEDRAL: "meshopt_decodeFilterOct",
            QUATERNION: "meshopt_decodeFilterQuat",
            EXPONENTIAL: "meshopt_decodeFilterExp"
        },
        l = {
            0: "meshopt_decodeVertexBuffer",
            1: "meshopt_decodeIndexBuffer",
            2: "meshopt_decodeIndexSequence",
            ATTRIBUTES: "meshopt_decodeVertexBuffer",
            TRIANGLES: "meshopt_decodeIndexBuffer",
            INDICES: "meshopt_decodeIndexSequence"
        };
    return pe = {
        ready: r,
        supported: !0,
        decodeVertexBuffer(A, u, d, C, m) {
            i(o.exports.meshopt_decodeVertexBuffer, A, u, d, C, o.exports[c[m]])
        },
        decodeIndexBuffer(A, u, d, C) {
            i(o.exports.meshopt_decodeIndexBuffer, A, u, d, C)
        },
        decodeIndexSequence(A, u, d, C) {
            i(o.exports.meshopt_decodeIndexSequence, A, u, d, C)
        },
        decodeGltfBuffer(A, u, d, C, m, f) {
            i(o.exports[l[m]], A, u, d, C, o.exports[c[f]])
        }
    }, pe
};
let me = null,
    Nt = "https://www.gstatic.com/draco/versioned/decoders/1.5.5/";

function vt(B, t, n) {
    return e => {
        n && n(e), B && (me || (me = new Xs), me.setDecoderPath(typeof B == "string" ? B : Nt), e.setDRACOLoader(me)), t && e.setMeshoptDecoder(typeof Ue == "function" ? Ue() : Ue)
    }
}

function ke(B, t = !0, n = !0, e) {
    return _e(Qe, B, vt(t, n, e))
}
ke.preload = (B, t = !0, n = !0, e) => _e.preload(Qe, B, vt(t, n, e));
ke.clear = B => _e.clear(Qe, B);
ke.setDecoderPath = B => {
    Nt = B
};

function Zs(B, t, n) {
    const e = U(u => u.size),
        s = U(u => u.viewport),
        o = typeof B == "number" ? B : e.width * s.dpr,
        r = e.height * s.dpr,
        a = (typeof B == "number" ? n : B) || {},
        {
            samples: i = 0,
            depth: c,
            ...l
        } = a,
        A = L.useMemo(() => {
            const u = new Yn(o, r, {
                minFilter: ge,
                magFilter: ge,
                type: Zn,
                ...l
            });
            return c && (u.depthTexture = new Wn(o, r, Vn)), u.samples = i, u
        }, []);
    return L.useLayoutEffect(() => {
        A.setSize(o, r), i && (A.samples = i)
    }, [i, A, o, r]), L.useEffect(() => () => A.dispose(), []), A
}
const Ws = B => typeof B == "function",
    io = L.forwardRef(({
        envMap: B,
        resolution: t = 256,
        frames: n = 1 / 0,
        makeDefault: e,
        children: s,
        ...o
    }, r) => {
        const a = U(({
                set: f
            }) => f),
            i = U(({
                camera: f
            }) => f),
            c = U(({
                size: f
            }) => f),
            l = L.useRef(null);
        L.useImperativeHandle(r, () => l.current, []);
        const A = L.useRef(null),
            u = Zs(t);
        L.useLayoutEffect(() => {
            o.manual || (l.current.aspect = c.width / c.height)
        }, [c, o]), L.useLayoutEffect(() => {
            l.current.updateProjectionMatrix()
        });
        let d = 0,
            C = null;
        const m = Ws(s);
        return yt(f => {
            m && (n === 1 / 0 || d < n) && (A.current.visible = !1, f.gl.setRenderTarget(u), C = f.scene.background, B && (f.scene.background = B), f.gl.render(f.scene, l.current), f.scene.background = C, f.gl.setRenderTarget(null), A.current.visible = !0, d++)
        }), L.useLayoutEffect(() => {
            if (e) {
                const f = i;
                return a(() => ({
                    camera: l.current
                })), () => a(() => ({
                    camera: f
                }))
            }
        }, [l, e, a]), L.createElement(L.Fragment, null, L.createElement("perspectiveCamera", Ge({
            ref: l
        }, o), !m && s), L.createElement("group", {
            ref: A
        }, m && s(u.texture)))
    }),
    ao = L.forwardRef(({
        makeDefault: B,
        camera: t,
        regress: n,
        domElement: e,
        enableDamping: s = !0,
        keyEvents: o = !1,
        onChange: r,
        onStart: a,
        onEnd: i,
        ...c
    }, l) => {
        const A = U(D => D.invalidate),
            u = U(D => D.camera),
            d = U(D => D.gl),
            C = U(D => D.events),
            m = U(D => D.setEvents),
            f = U(D => D.set),
            E = U(D => D.get),
            F = U(D => D.performance),
            R = t || u,
            G = e || C.connected || d.domElement,
            T = L.useMemo(() => new ls(R), [R]);
        return yt(() => {
            T.enabled && T.update()
        }, -1), L.useEffect(() => (o && T.connect(o === !0 ? G : o), T.connect(G), () => void T.dispose()), [o, G, n, T, A]), L.useEffect(() => {
            const D = J => {
                    A(), n && F.regress(), r && r(J)
                },
                O = J => {
                    a && a(J)
                },
                S = J => {
                    i && i(J)
                };
            return T.addEventListener("change", D), T.addEventListener("start", O), T.addEventListener("end", S), () => {
                T.removeEventListener("start", O), T.removeEventListener("end", S), T.removeEventListener("change", D)
            }
        }, [r, a, i, T, A, m]), L.useEffect(() => {
            if (B) {
                const D = E().controls;
                return f({
                    controls: T
                }), () => f({
                    controls: D
                })
            }
        }, [B, T]), L.createElement("primitive", Ge({
            ref: l,
            object: T,
            enableDamping: s
        }, c))
    });
export {
    ao as O, eo as P, os as a, dt as b, so as c, io as d, oo as e, no as p, to as s, ke as u
};
//# sourceMappingURL=drei-zjl_KbSs.js.map