var Tr = (e, t, n) => {
    if (!t.has(e)) throw TypeError("Cannot " + n)
};
var y = (e, t, n) => (Tr(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    P = (e, t, n) => {
        if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
        t instanceof WeakSet ? t.add(e) : t.set(e, n)
    },
    T = (e, t, n, r) => (Tr(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var Kn = (e, t, n, r) => ({
        set _(s) {
            T(e, t, s, n)
        },
        get _() {
            return y(e, t, r)
        }
    }),
    V = (e, t, n) => (Tr(e, t, "access private method"), n);
import {
    r as x,
    g as gl
} from "../vendor-DR5RWKqR.js";
import {
    E as D,
    C as Cs
} from "../@wbk/logger-B2PJ36TD.js";
import {
    A as yl,
    L as sa,
    T as ia,
    C as mr,
    a as _l,
    b as oa,
    E as vl,
    M as bl,
    c as xl,
    V as wl,
    d as Al,
    e as Sl
} from "../@wbk/svg-__R6E2rp.js";
import {
    u as ks,
    O as aa
} from "../@wbk/auth-BpKCnx9p.js";
import {
    u as Cl
} from "../@wbk/analytics-B7lR_Cat.js";
import {
    u as kl,
    a as Tl,
    b as On,
    c as Pl
} from "../@wbk/hooks-_YU-oIZS.js";
import {
    B as le,
    C as jl,
    P as Ml,
    R as ua,
    a as Ts,
    M as fr,
    D as la,
    I as El
} from "../@wbk/ui-CXvSo9mp.js";
import {
    f as Ps,
    i as _i
} from "../date-fns-DGsxi8Uo.js";
var ca = {
        exports: {}
    },
    pr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rl = x,
    Fl = Symbol.for("react.element"),
    Dl = Symbol.for("react.fragment"),
    Ol = Object.prototype.hasOwnProperty,
    Nl = Rl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Bl = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function da(e, t, n) {
    var r, s = {},
        i = null,
        o = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) Ol.call(t, r) && !Bl.hasOwnProperty(r) && (s[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) s[r] === void 0 && (s[r] = t[r]);
    return {
        $$typeof: Fl,
        type: e,
        key: i,
        ref: o,
        props: s,
        _owner: Nl.current
    }
}
pr.Fragment = Dl;
pr.jsx = da;
pr.jsxs = da;
ca.exports = pr;
var m = ca.exports,
    Ll = Object.defineProperty,
    Vl = Object.defineProperties,
    Il = Object.getOwnPropertyDescriptors,
    nr = Object.getOwnPropertySymbols,
    ha = Object.prototype.hasOwnProperty,
    ma = Object.prototype.propertyIsEnumerable,
    vi = (e, t, n) => t in e ? Ll(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    M = (e, t) => {
        for (var n in t || (t = {})) ha.call(t, n) && vi(e, n, t[n]);
        if (nr)
            for (var n of nr(t)) ma.call(t, n) && vi(e, n, t[n]);
        return e
    },
    K = (e, t) => Vl(e, Il(t)),
    Ul = (e, t) => {
        var n = {};
        for (var r in e) ha.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && nr)
            for (var r of nr(e)) t.indexOf(r) < 0 && ma.call(e, r) && (n[r] = e[r]);
        return n
    },
    j = (e, t, n) => new Promise((r, s) => {
        var i = u => {
                try {
                    a(n.next(u))
                } catch (c) {
                    s(c)
                }
            },
            o = u => {
                try {
                    a(n.throw(u))
                } catch (c) {
                    s(c)
                }
            },
            a = u => u.done ? r(u.value) : Promise.resolve(u.value).then(i, o);
        a((n = n.apply(e, t)).next())
    }),
    $l = class {
        constructor() {
            this._config = null
        }
        get config() {
            return this._config
        }
        init(e) {
            this._config = this.setDefaults(e)
        }
        update(e) {
            this._config = M(M({}, this._config), this.setDefaults(e))
        }
        setDefaults(e) {
            return M({
                grecaptcha: M({
                    v3Key: "",
                    spammyCountryCodes: [973, 965]
                }, e.grecaptcha)
            }, e)
        }
    },
    N = new $l,
    js = e => typeof localStorage < "u" && "localStorage" in window ? localStorage.getItem(e) : null,
    qp = (e, t) => {
        typeof localStorage < "u" && localStorage.setItem(e, t)
    },
    Hp = e => {
        typeof localStorage < "u" && localStorage.removeItem(e)
    },
    Ue = (e, t = 2) => new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: t
    }).format(+e),
    zp = (e, t = 15) => {
        const r = 1 + t / 100;
        return e ? +Ue(+e * r) : 0
    },
    Wp = (e, t) => Math.round(Math.abs((e - t) / e) * 100),
    Kl = async ({
        id: e,
        target: t = "body",
        type: n = "script",
        snippet: r,
        url: s
    }) => new Promise((i, o) => {
        if (document.getElementById(e)) i(!0);
        else {
            let u;
            n !== "link" ? (u = document.createElement(n), u.type = "text/javascript", s ? u.src = s : u.innerHTML = r || "") : (u = document.createElement("link"), u.rel = "stylesheet", s ? u.href = s : u.innerHTML = r || ""), u.id = e, u.onload = i, u.onerror = o, document[t].prepend(u)
        }
    }),
    Qp = (e, t) => {
        const n = document.getElementById(e);
        n && n.scrollIntoView({
            behavior: "smooth",
            ...t
        })
    },
    Jp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    },
    Yp = ({
        utm: e,
        idx: t,
        id: n = ""
    }) => e ? `?${e}`.replace("{{i}}", `${t+1}`).replace("{{id}}", n || "") : "",
    Zp = e => {
        const t = new URLSearchParams(e);
        return ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id"].forEach(r => t.delete(r)), t
    },
    Gl = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
        const t = Math.random() * 16 | 0;
        return (e == "x" ? t : t & 3 | 8).toString(16)
    }),
    ql = e => {
        if (typeof e != "string") return "";
        let t = e.replace(" ", "T").replace(/\//g, "-");
        const n = t == null ? void 0 : t.split("T")[0],
            [r, s, i] = (n == null ? void 0 : n.split("-")) || "";
        return r.length <= 2 && (t = `${i}-${s}-${r}`), t
    },
    Hl = e => {
        let t = (e == null ? void 0 : e.replace(" ", "T")) || Date.now();
        typeof t == "string" && (t = ql(t));
        try {
            return new Date(t)
        } catch {
            return new Date
        }
    },
    Ve = (e, t, n) => {
        const r = {
                numberingSystem: "latn",
                timeZone: "Asia/Riyadh",
                hourCycle: "h24",
                hour12: !0
            },
            s = typeof e == "string" ? Hl(e) : typeof e == "number" ? e * 1e3 : e;
        return new Intl.DateTimeFormat(t, { ...r,
            ...n
        }).format(s)
    },
    Xp = (e, t) => {
        const n = new Date(e * 1e3),
            r = new Date(t * 1e3);
        return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth() && n.getDate() === r.getDate()
    },
    eg = (e, t) => {
        const n = new Date(e * 1e3),
            r = new Date(t * 1e3);
        return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
    },
    tg = (e, t) => {
        const n = new Date(e * 1e3),
            r = new Date(t * 1e3);
        return n.getFullYear() === r.getFullYear()
    },
    bi = (e, t, n) => ({
        year: Ve(e, t || "en", {
            year: (n == null ? void 0 : n.year) || "numeric"
        }),
        month: Ve(e, t || "en", {
            month: (n == null ? void 0 : n.month) || "long"
        }),
        day: Ve(e, t || "en", {
            day: (n == null ? void 0 : n.day) || "2-digit"
        }),
        time: Ve(e, t || "en", {
            timeStyle: (n == null ? void 0 : n.time) || "short"
        }).replace(/\s/gi, " ")
    }),
    ng = e => {
        try {
            if (!e) return;
            const t = new Date(e);
            if (!t.getTime()) throw new Error("Invalid date");
            return t
        } catch {
            return
        }
    },
    rg = async e => {
        if (!e || typeof crypto > "u") return "";
        const t = new TextEncoder().encode(e),
            n = await crypto.subtle.digest("SHA-256", t);
        return Array.from(new Uint8Array(n)).map(i => i.toString(16).padStart(2, "0")).join("")
    },
    fa = {
        exports: {}
    },
    pa = {
        exports: {}
    };
(function() {
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        t = {
            rotl: function(n, r) {
                return n << r | n >>> 32 - r
            },
            rotr: function(n, r) {
                return n << 32 - r | n >>> r
            },
            endian: function(n) {
                if (n.constructor == Number) return t.rotl(n, 8) & 16711935 | t.rotl(n, 24) & 4278255360;
                for (var r = 0; r < n.length; r++) n[r] = t.endian(n[r]);
                return n
            },
            randomBytes: function(n) {
                for (var r = []; n > 0; n--) r.push(Math.floor(Math.random() * 256));
                return r
            },
            bytesToWords: function(n) {
                for (var r = [], s = 0, i = 0; s < n.length; s++, i += 8) r[i >>> 5] |= n[s] << 24 - i % 32;
                return r
            },
            wordsToBytes: function(n) {
                for (var r = [], s = 0; s < n.length * 32; s += 8) r.push(n[s >>> 5] >>> 24 - s % 32 & 255);
                return r
            },
            bytesToHex: function(n) {
                for (var r = [], s = 0; s < n.length; s++) r.push((n[s] >>> 4).toString(16)), r.push((n[s] & 15).toString(16));
                return r.join("")
            },
            hexToBytes: function(n) {
                for (var r = [], s = 0; s < n.length; s += 2) r.push(parseInt(n.substr(s, 2), 16));
                return r
            },
            bytesToBase64: function(n) {
                for (var r = [], s = 0; s < n.length; s += 3)
                    for (var i = n[s] << 16 | n[s + 1] << 8 | n[s + 2], o = 0; o < 4; o++) s * 8 + o * 6 <= n.length * 8 ? r.push(e.charAt(i >>> 6 * (3 - o) & 63)) : r.push("=");
                return r.join("")
            },
            base64ToBytes: function(n) {
                n = n.replace(/[^A-Z0-9+\/]/ig, "");
                for (var r = [], s = 0, i = 0; s < n.length; i = ++s % 4) i != 0 && r.push((e.indexOf(n.charAt(s - 1)) & Math.pow(2, -2 * i + 8) - 1) << i * 2 | e.indexOf(n.charAt(s)) >>> 6 - i * 2);
                return r
            }
        };
    pa.exports = t
})();
var zl = pa.exports,
    qr = {
        utf8: {
            stringToBytes: function(e) {
                return qr.bin.stringToBytes(unescape(encodeURIComponent(e)))
            },
            bytesToString: function(e) {
                return decodeURIComponent(escape(qr.bin.bytesToString(e)))
            }
        },
        bin: {
            stringToBytes: function(e) {
                for (var t = [], n = 0; n < e.length; n++) t.push(e.charCodeAt(n) & 255);
                return t
            },
            bytesToString: function(e) {
                for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                return t.join("")
            }
        }
    },
    xi = qr;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Wl = function(e) {
    return e != null && (ga(e) || Ql(e) || !!e._isBuffer)
};

function ga(e) {
    return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e)
}

function Ql(e) {
    return typeof e.readFloatLE == "function" && typeof e.slice == "function" && ga(e.slice(0, 0))
}(function() {
    var e = zl,
        t = xi.utf8,
        n = Wl,
        r = xi.bin,
        s = function(i, o) {
            i.constructor == String ? o && o.encoding === "binary" ? i = r.stringToBytes(i) : i = t.stringToBytes(i) : n(i) ? i = Array.prototype.slice.call(i, 0) : !Array.isArray(i) && i.constructor !== Uint8Array && (i = i.toString());
            for (var a = e.bytesToWords(i), u = i.length * 8, c = 1732584193, l = -271733879, d = -1732584194, h = 271733878, f = 0; f < a.length; f++) a[f] = (a[f] << 8 | a[f] >>> 24) & 16711935 | (a[f] << 24 | a[f] >>> 8) & 4278255360;
            a[u >>> 5] |= 128 << u % 32, a[(u + 64 >>> 9 << 4) + 14] = u;
            for (var g = s._ff, p = s._gg, _ = s._hh, v = s._ii, f = 0; f < a.length; f += 16) {
                var w = c,
                    b = l,
                    A = d,
                    k = h;
                c = g(c, l, d, h, a[f + 0], 7, -680876936), h = g(h, c, l, d, a[f + 1], 12, -389564586), d = g(d, h, c, l, a[f + 2], 17, 606105819), l = g(l, d, h, c, a[f + 3], 22, -1044525330), c = g(c, l, d, h, a[f + 4], 7, -176418897), h = g(h, c, l, d, a[f + 5], 12, 1200080426), d = g(d, h, c, l, a[f + 6], 17, -1473231341), l = g(l, d, h, c, a[f + 7], 22, -45705983), c = g(c, l, d, h, a[f + 8], 7, 1770035416), h = g(h, c, l, d, a[f + 9], 12, -1958414417), d = g(d, h, c, l, a[f + 10], 17, -42063), l = g(l, d, h, c, a[f + 11], 22, -1990404162), c = g(c, l, d, h, a[f + 12], 7, 1804603682), h = g(h, c, l, d, a[f + 13], 12, -40341101), d = g(d, h, c, l, a[f + 14], 17, -1502002290), l = g(l, d, h, c, a[f + 15], 22, 1236535329), c = p(c, l, d, h, a[f + 1], 5, -165796510), h = p(h, c, l, d, a[f + 6], 9, -1069501632), d = p(d, h, c, l, a[f + 11], 14, 643717713), l = p(l, d, h, c, a[f + 0], 20, -373897302), c = p(c, l, d, h, a[f + 5], 5, -701558691), h = p(h, c, l, d, a[f + 10], 9, 38016083), d = p(d, h, c, l, a[f + 15], 14, -660478335), l = p(l, d, h, c, a[f + 4], 20, -405537848), c = p(c, l, d, h, a[f + 9], 5, 568446438), h = p(h, c, l, d, a[f + 14], 9, -1019803690), d = p(d, h, c, l, a[f + 3], 14, -187363961), l = p(l, d, h, c, a[f + 8], 20, 1163531501), c = p(c, l, d, h, a[f + 13], 5, -1444681467), h = p(h, c, l, d, a[f + 2], 9, -51403784), d = p(d, h, c, l, a[f + 7], 14, 1735328473), l = p(l, d, h, c, a[f + 12], 20, -1926607734), c = _(c, l, d, h, a[f + 5], 4, -378558), h = _(h, c, l, d, a[f + 8], 11, -2022574463), d = _(d, h, c, l, a[f + 11], 16, 1839030562), l = _(l, d, h, c, a[f + 14], 23, -35309556), c = _(c, l, d, h, a[f + 1], 4, -1530992060), h = _(h, c, l, d, a[f + 4], 11, 1272893353), d = _(d, h, c, l, a[f + 7], 16, -155497632), l = _(l, d, h, c, a[f + 10], 23, -1094730640), c = _(c, l, d, h, a[f + 13], 4, 681279174), h = _(h, c, l, d, a[f + 0], 11, -358537222), d = _(d, h, c, l, a[f + 3], 16, -722521979), l = _(l, d, h, c, a[f + 6], 23, 76029189), c = _(c, l, d, h, a[f + 9], 4, -640364487), h = _(h, c, l, d, a[f + 12], 11, -421815835), d = _(d, h, c, l, a[f + 15], 16, 530742520), l = _(l, d, h, c, a[f + 2], 23, -995338651), c = v(c, l, d, h, a[f + 0], 6, -198630844), h = v(h, c, l, d, a[f + 7], 10, 1126891415), d = v(d, h, c, l, a[f + 14], 15, -1416354905), l = v(l, d, h, c, a[f + 5], 21, -57434055), c = v(c, l, d, h, a[f + 12], 6, 1700485571), h = v(h, c, l, d, a[f + 3], 10, -1894986606), d = v(d, h, c, l, a[f + 10], 15, -1051523), l = v(l, d, h, c, a[f + 1], 21, -2054922799), c = v(c, l, d, h, a[f + 8], 6, 1873313359), h = v(h, c, l, d, a[f + 15], 10, -30611744), d = v(d, h, c, l, a[f + 6], 15, -1560198380), l = v(l, d, h, c, a[f + 13], 21, 1309151649), c = v(c, l, d, h, a[f + 4], 6, -145523070), h = v(h, c, l, d, a[f + 11], 10, -1120210379), d = v(d, h, c, l, a[f + 2], 15, 718787259), l = v(l, d, h, c, a[f + 9], 21, -343485551), c = c + w >>> 0, l = l + b >>> 0, d = d + A >>> 0, h = h + k >>> 0
            }
            return e.endian([c, l, d, h])
        };
    s._ff = function(i, o, a, u, c, l, d) {
        var h = i + (o & a | ~o & u) + (c >>> 0) + d;
        return (h << l | h >>> 32 - l) + o
    }, s._gg = function(i, o, a, u, c, l, d) {
        var h = i + (o & u | a & ~u) + (c >>> 0) + d;
        return (h << l | h >>> 32 - l) + o
    }, s._hh = function(i, o, a, u, c, l, d) {
        var h = i + (o ^ a ^ u) + (c >>> 0) + d;
        return (h << l | h >>> 32 - l) + o
    }, s._ii = function(i, o, a, u, c, l, d) {
        var h = i + (a ^ (o | ~u)) + (c >>> 0) + d;
        return (h << l | h >>> 32 - l) + o
    }, s._blocksize = 16, s._digestsize = 16, fa.exports = function(i, o) {
        if (i == null) throw new Error("Illegal argument " + i);
        var a = e.wordsToBytes(s(i, o));
        return o && o.asBytes ? a : o && o.asString ? r.bytesToString(a) : e.bytesToHex(a)
    }
})();
var Jl = fa.exports;
const Yl = gl(Jl);
var De = e => {
        const t = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        return `${Yl(e+t)}|${t}`
    },
    gr = ({
        name: e,
        value: t,
        expiration: n = 1,
        domain: r
    }) => {
        Zl(e, r), ya({
            name: e,
            value: t,
            expiration: n,
            domain: r
        })
    },
    ya = ({
        name: e,
        value: t,
        expiration: n = 1,
        domain: r
    }) => {
        let s = "";
        if (n > 0) {
            const o = new Date().getTime() + 86400 * Number(n) * 1e3;
            s = `;expires=${new Date(o)}`
        } else s = `;expires=${new Date(0)}`;
        let i = `${e}=${t};path=/` + s;
        r && (i += `;domain=${r}`), document.cookie = i
    },
    Nn = e => {
        if (typeof document < "u") {
            const t = e + "=",
                n = document.cookie.split(";");
            for (let r = 0; r < n.length; r++) {
                let s = n[r];
                for (; s.charAt(0) === " ";) s = s.substring(1, s.length);
                if (s.indexOf(t) === 0) return s.substring(t.length, s.length)
            }
        }
        return null
    },
    Zl = (e, t) => {
        ya({
            name: e,
            value: "",
            expiration: 0,
            domain: t
        })
    },
    sg = ({
        url: e,
        path: t,
        supportedLngs: n = ["en", "ar"],
        defaultLang: r = "en",
        cookieName: s = "lang"
    }) => {
        var i, o;
        let a = Nn(s) || "";
        n.includes(a) || (a = r);
        const u = t ? `/${t}` : "",
            c = (o = (i = new URL(e)) == null ? void 0 : i.searchParams) == null ? void 0 : o.toString(),
            l = c ? `?${c}` : "";
        return `/${a}${u}${l}`
    },
    ig = e => e && /^[\u0621-\u064A\x20]+$/.test(e == null ? void 0 : e.trim()),
    G = e => {
        var t;
        return e && ((t = e == null ? void 0 : e.split("-")) == null ? void 0 : t[0]) || "en"
    },
    og = e => window.btoa(encodeURIComponent(e)),
    ag = e => decodeURIComponent(window.atob(e)),
    Xl = [{
        name: "Central",
        cities: [{
            value: "Riyadh",
            en: "Riyadh",
            ar: "الرياض"
        }, {
            value: "Duwadimi",
            en: "Duwadimi",
            ar: "الدوادمي"
        }, {
            value: "Afif",
            en: "Afif",
            ar: "عفيف"
        }, {
            value: "Aflaj",
            en: "Aflaj",
            ar: "الأفلاج"
        }, {
            value: "Al Kharj",
            en: "Al Kharj",
            ar: "الخرج"
        }, {
            value: "Ar Rass",
            en: "Ar Rass",
            ar: "الرس"
        }, {
            value: "Burydah",
            en: "Burydah",
            ar: "بريدة"
        }, {
            value: "Majma'ah",
            en: "Majma'ah",
            ar: "المجمعة"
        }, {
            value: "Sajir",
            en: "Sajir",
            ar: "ساجر"
        }, {
            value: "Shaqra",
            en: "Shaqra",
            ar: "شقراء"
        }, {
            value: "Unayzah",
            en: "Unayzah",
            ar: "عنيزة"
        }, {
            value: "Az Zulfi",
            en: "Az Zulfi",
            ar: "الزلفي"
        }, {
            value: "Dariyah",
            en: "Dariyah",
            ar: "ضرية"
        }, {
            value: "Midhnab",
            en: "Midhnab",
            ar: "المذنب"
        }, {
            value: "Quwayiyadh",
            en: "Quwayiyadh",
            ar: "القويعية"
        }, {
            value: "Bukayriyah",
            en: "Bukayriyah",
            ar: "البكيرية"
        }, {
            value: "Muzahimiyah",
            en: "Muzahimiyah",
            ar: "المزاحمية"
        }, {
            value: "Riyadh Al Khabra",
            en: "Riyadh Al Khabra",
            ar: "رياض الخبراء"
        }, {
            value: "Badaya",
            en: "Badaya",
            ar: "البدايع"
        }, {
            value: "Tumair",
            en: "Tumair",
            ar: "تمير"
        }, {
            value: "Howtat Bani Tamim",
            en: "Howtat Bani Tamim",
            ar: "حوطة بني تميم"
        }, {
            value: "Rumah",
            en: "Rumah",
            ar: "رماح"
        }, {
            value: "Rafai Al Jimsh",
            en: "Rafai Al Jimsh",
            ar: "رفايع الجمش"
        }, {
            value: "Uyun Al Juwa",
            en: "Uyun Al Juwa",
            ar: "عيون الجواء"
        }, {
            value: "Bijadiyah",
            en: "Bijadiyah",
            ar: "البجادية"
        }, {
            value: "Dhurma",
            en: "Dhurma",
            ar: "ضرما"
        }, {
            value: "Hawtat Sudair",
            en: "Hawtat Sudair",
            ar: "حوطة سدير"
        }, {
            value: "Uglat Assugour",
            en: "Uglat Assugour",
            ar: "عقلة الصقور"
        }, {
            value: "Huraymila",
            en: "Huraymila",
            ar: "حريملاء"
        }, {
            value: "Asiyah",
            en: "Asiyah",
            ar: "الأسياح"
        }, {
            value: "Dilam",
            en: "Dilam",
            ar: "الدلم"
        }, {
            value: "Al Hariq",
            en: "Al Hariq",
            ar: "الحريق"
        }, {
            value: "Marat",
            en: "Marat",
            ar: "مرات"
        }, {
            value: "Ash Shimasiyah",
            en: "Ash Shimasiyah",
            ar: "الشماسية"
        }, {
            value: "Ruwaidhah",
            en: "Ruwaidhah",
            ar: "الرويضة"
        }, {
            value: "Thadiq",
            en: "Thadiq",
            ar: "ثادق"
        }, {
            value: "Ar Rayn",
            en: "Ar Rayn",
            ar: "الرين"
        }, {
            value: "Ghat",
            en: "Ghat",
            ar: "الغاط"
        }, {
            value: "Artawiyah",
            en: "Artawiyah",
            ar: "الأرطاوية"
        }, {
            value: "Uyayinah",
            en: "Uyayinah",
            ar: "العيينة"
        }]
    }, {
        name: "Westren",
        cities: [{
            value: "Al Qunfudhah",
            en: "Al Qunfudhah",
            ar: "القنفذة"
        }, {
            value: "Al Ula",
            en: "Al Ula",
            ar: "العلا"
        }, {
            value: "Jeddah",
            en: "Jeddah",
            ar: "جدة"
        }, {
            value: "Khurmah",
            en: "Khurmah",
            ar: "الخرمة"
        }, {
            value: "Makkah",
            en: "Makkah",
            ar: "مكة المكرمة"
        }, {
            value: "Madinah",
            en: "Madinah",
            ar: "المدينة المنورة"
        }, {
            value: "Rabeigh",
            en: "Rabeigh",
            ar: "رابغ"
        }, {
            value: "Ranyah",
            en: "Ranyah",
            ar: "رنية"
        }, {
            value: "Taif",
            en: "Taif",
            ar: "الطائف"
        }, {
            value: "Turbah",
            en: "Turbah",
            ar: "تربة"
        }, {
            value: "Yanbu",
            en: "Yanbu",
            ar: "ينبع"
        }, {
            value: "Hawiyyah",
            en: "Hawiyyah",
            ar: "الحوية"
        }, {
            value: "Badr Hunain",
            en: "Badr Hunain",
            ar: "بدر حنين"
        }, {
            value: "Khaybar",
            en: "Khaybar",
            ar: "خيبر"
        }, {
            value: "Al Lith",
            en: "Al Lith",
            ar: "الليث"
        }, {
            value: "Wadi Hali",
            en: "Wadi Hali",
            ar: "وادي حلي"
        }, {
            value: "Mahd Al Dahab",
            en: "Mahd Al Dahab",
            ar: "مهد الذهب"
        }, {
            value: "Jumum",
            en: "Jumum",
            ar: "الجموم"
        }, {
            value: "Hanakiyah",
            en: "Hanakiyah",
            ar: "الحناكية"
        }, {
            value: "Khulais",
            en: "Khulais",
            ar: "خليص"
        }, {
            value: "Yanbu Al Nakhal",
            en: "Yanbu Al Nakhal",
            ar: "ينبع النخل"
        }, {
            value: "Muwayah",
            en: "Muwayah",
            ar: "المويه"
        }, {
            value: "Adham",
            en: "Adham",
            ar: "أضم"
        }, {
            value: "Thuwal",
            en: "Thuwal",
            ar: "ثول"
        }, {
            value: "Asfan",
            en: "Asfan",
            ar: "عسفان"
        }, {
            value: "Mudhaylif",
            en: "Mudhaylif",
            ar: "المظيلف"
        }, {
            value: "Bahrah",
            en: "Bahrah",
            ar: "بحرة"
        }, {
            value: "Dhalm",
            en: "Dhalm",
            ar: "ظلم"
        }, {
            value: "Wasqah",
            en: "Wasqah",
            ar: "الوسقة"
        }, {
            value: "Kamil",
            en: "Kamil",
            ar: "الكامل"
        }, {
            value: "Qawz",
            en: "Qawz",
            ar: "القوز"
        }, {
            value: "Medrekah",
            en: "Medrekah",
            ar: "مدركة"
        }]
    }, {
        name: "Eastren",
        cities: [{
            value: "Buqaiq",
            en: "Buqaiq",
            ar: "بقيق"
        }, {
            value: "Dammam",
            en: "Dammam",
            ar: "الدمام"
        }, {
            value: "Al Khubar",
            en: "Al Khubar",
            ar: "الخبر"
        }, {
            value: "Hafar Al Baten",
            en: "Hafar Al Baten",
            ar: "حفر الباطن"
        }, {
            value: "Hufuf",
            en: "Hufuf",
            ar: "الهفوف"
        }, {
            value: "Jubail",
            en: "Jubail",
            ar: "الجبيل"
        }, {
            value: "Batha Border",
            en: "Batha Border",
            ar: "منفذ البطحاء"
        }, {
            value: "Khafji",
            en: "Khafji",
            ar: "الخفجي"
        }, {
            value: "Dhahran",
            en: "Dhahran",
            ar: "الظهران"
        }, {
            value: "An Nairiyah",
            en: "An Nairiyah",
            ar: "النعيرية"
        }, {
            value: "Rafha",
            en: "Rafha",
            ar: "رفحا"
        }, {
            value: "Rahima (Ras Tannurah)",
            en: "Rahima (Ras Tannurah)",
            ar: "رحيمة(راس تنورة)"
        }, {
            value: "Qatif",
            en: "Qatif",
            ar: "القطيف"
        }, {
            value: "Sayhat",
            en: "Sayhat",
            ar: "سيهات"
        }, {
            value: "King Khalid Military City",
            en: "King Khalid Military City",
            ar: "مدينة الملك خالد العسكرية"
        }, {
            value: "Safwa",
            en: "Safwa",
            ar: "صفوى"
        }, {
            value: "Qaryat Al 'Ulya",
            en: "Qaryat Al 'Ulya",
            ar: "القرية العليا"
        }, {
            value: "Anak",
            en: "Anak",
            ar: "عنك"
        }, {
            value: "Sarrar",
            en: "Sarrar",
            ar: "الصرار"
        }, {
            value: "Oyoun",
            en: "Oyoun",
            ar: "العيون"
        }, {
            value: "Rafiah",
            en: "Rafiah",
            ar: "الرفيعة"
        }, {
            value: "Qaysumah",
            en: "Qaysumah",
            ar: "القيصومة"
        }, {
            value: "Tarout",
            en: "Tarout",
            ar: "تاروت"
        }]
    }, {
        name: "Southren",
        cities: [{
            value: "Abha",
            en: "Abha",
            ar: "أبها"
        }, {
            value: "Al Baha",
            en: "Al Baha",
            ar: "الباحة"
        }, {
            value: "As Sulayyil",
            en: "As Sulayyil",
            ar: "السليل"
        }, {
            value: "An Namas",
            en: "An Namas",
            ar: "النماص"
        }, {
            value: "Biljurashi",
            en: "Biljurashi",
            ar: "بلجرشي"
        }, {
            value: "Jazan",
            en: "Jazan",
            ar: "جيزان"
        }, {
            value: "Khamis Mushayt",
            en: "Khamis Mushayt",
            ar: "خميس مشيط"
        }, {
            value: "Sabt Al Alaya (Balqarn)",
            en: "Sabt Al Alaya (Balqarn)",
            ar: "سبت العلايا (بلقرن)"
        }, {
            value: "Sharurah",
            en: "Sharurah",
            ar: "شرورة"
        }, {
            value: "Sabya",
            en: "Sabya",
            ar: "صبيا"
        }, {
            value: "Muhayil",
            en: "Muhayil",
            ar: "محايل عسير"
        }, {
            value: "Najran",
            en: "Najran",
            ar: "نجران"
        }, {
            value: "Wadi Al Dawasir (Al Khamasin)",
            en: "Wadi Al Dawasir (Al Khamasin)",
            ar: "وادي الدواسر (الخماسين)"
        }, {
            value: "Majardah",
            en: "Majardah",
            ar: "المجاردة"
        }, {
            value: "Abu Arish",
            en: "Abu Arish",
            ar: "أبو عريش"
        }, {
            value: "Rijal Almea'a",
            en: "Rijal Almea'a",
            ar: "رجال ألمع"
        }, {
            value: "Dhahran Al Janoub",
            en: "Dhahran Al Janoub",
            ar: "ظهران الجنوب"
        }, {
            value: "Samtah",
            en: "Samtah",
            ar: "صامطة"
        }, {
            value: "Tathlith",
            en: "Tathlith",
            ar: "تثليث"
        }, {
            value: "Mukhwah",
            en: "Mukhwah",
            ar: "المخواة"
        }, {
            value: "Sarat Abidah",
            en: "Sarat Abidah",
            ar: "سراة عبيدة"
        }, {
            value: "Tanumah",
            en: "Tanumah",
            ar: "تنومة"
        }, {
            value: "Al Dayer",
            en: "Al Dayer",
            ar: "الداير"
        }, {
            value: "Ad Darb",
            en: "Ad Darb",
            ar: "الدرب"
        }, {
            value: "Ahad Rafidah",
            en: "Ahad Rafidah",
            ar: "أحد رفيدة"
        }, {
            value: "Baysh",
            en: "Baysh",
            ar: "بيش"
        }, {
            value: "Qilwah",
            en: "Qilwah",
            ar: "قلوة"
        }, {
            value: "Al Aqiq",
            en: "Al Aqiq",
            ar: "العقيق"
        }, {
            value: "Tareeb",
            en: "Tareeb",
            ar: "طريب"
        }, {
            value: "Namera",
            en: "Namera",
            ar: "نمرة"
        }, {
            value: "Mandaq",
            en: "Mandaq",
            ar: "المندق"
        }, {
            value: "Ahad Masarihah",
            en: "Ahad Masarihah",
            ar: "احد المسارحة"
        }, {
            value: "Damad",
            en: "Damad",
            ar: "ضمد"
        }, {
            value: "Ardah",
            en: "Ardah",
            ar: "العارضة"
        }, {
            value: "Habuna",
            en: "Habuna",
            ar: "حبونا"
        }, {
            value: "Edabi",
            en: "Edabi",
            ar: "العيدابي"
        }, {
            value: "Wadi Ibn Hashbal",
            en: "Wadi Ibn Hashbal",
            ar: "وادي بن هشبل"
        }, {
            value: "Bishah",
            en: "Bishah",
            ar: "بيشة"
        }, {
            value: "Bariq",
            en: "Bariq",
            ar: "بارق"
        }, {
            value: "Wadayne",
            en: "Wadayne",
            ar: "الواديين"
        }, {
            value: "Farasan Island",
            en: "Farasan Island",
            ar: "جزيرة فرسان"
        }, {
            value: "Bashayer",
            en: "Bashayer",
            ar: "البشائر"
        }, {
            value: "Billasmar",
            en: "Billasmar",
            ar: "بللسمر"
        }, {
            value: "Tendaha",
            en: "Tendaha",
            ar: "تندحة"
        }, {
            value: "Atawilah",
            en: "Atawilah",
            ar: "الاطاولة"
        }, {
            value: "Badr Al Janoub",
            en: "Badr Al Janoub",
            ar: "بدر الجنوب"
        }, {
            value: "Haqu (Mahalah)",
            en: "Haqu (Mahalah)",
            ar: "الحقو المحلة"
        }, {
            value: "Rayth",
            en: "Rayth",
            ar: "الريث"
        }]
    }, {
        name: "Northren",
        cities: [{
            value: "Ar'ar",
            en: "Ar'ar",
            ar: "عرعر"
        }, {
            value: "Dawmat Al Jandal",
            en: "Dawmat Al Jandal",
            ar: "دومة الجندل"
        }, {
            value: "Dhuba",
            en: "Dhuba",
            ar: "ضبا"
        }, {
            value: "Qurayyat",
            en: "Qurayyat",
            ar: "القريات"
        }, {
            value: "Skaka",
            en: "Skaka",
            ar: "سكاكا"
        }, {
            value: "Tabarjal",
            en: "Tabarjal",
            ar: "طبرجل"
        }, {
            value: "Tabuk",
            en: "Tabuk",
            ar: "تبوك"
        }, {
            value: "Taima",
            en: "Taima",
            ar: "تيماء"
        }, {
            value: "Turayf",
            en: "Turayf",
            ar: "طريف"
        }, {
            value: "Ummlujj",
            en: "Ummlujj",
            ar: "أملج"
        }, {
            value: "Al Wajh",
            en: "Al Wajh",
            ar: "الوجة"
        }, {
            value: "Haql",
            en: "Haql",
            ar: "حقل"
        }, {
            value: "Hail",
            en: "Hail",
            ar: "حائل"
        }, {
            value: "Baqaa",
            en: "Baqaa",
            ar: "بقعا"
        }, {
            value: "Ash Shamli",
            en: "Ash Shamli",
            ar: "الشملي"
        }, {
            value: "Al Hait",
            en: "Al Hait",
            ar: "الحائط"
        }, {
            value: "Uwayqilah",
            en: "Uwayqilah",
            ar: "العويقيلة"
        }, {
            value: "Ash Shinan",
            en: "Ash Shinan",
            ar: "الشنان"
        }, {
            value: "Ghazalah",
            en: "Ghazalah",
            ar: "الغزالة"
        }]
    }],
    ec = () => {
        const e = [];
        for (const t of Xl) e.push(...t.cities);
        return e
    },
    ug = (e = "en") => ec().sort((t, n) => n.value === "Riyadh" ? 1 : (t[e || ""] || t.value).localeCompare(n[e || ""] || n.value)).map(t => ({
        id: t.value,
        value: t.value,
        text: t[e || ""] || t.value
    })),
    lg = [{
        name: "Saudi Arabia",
        name_ar: "السعودية",
        code: "SA",
        dial_code: "966",
        mobile_starts_with: ["5"],
        phone_number_lengths: [9]
    }, {
        name: "Afghanistan",
        name_ar: "أفغانستان",
        code: "AF",
        dial_code: "93",
        mobile_starts_with: ["7"],
        phone_number_lengths: [9]
    }, {
        name: "Åland Islands",
        name_ar: "جزر أولاند",
        code: "AX",
        dial_code: "358",
        mobile_starts_with: ["18"],
        phone_number_lengths: [6, 7, 8]
    }, {
        name: "Albania",
        name_ar: "ألبانيا",
        code: "AL",
        dial_code: "355",
        mobile_starts_with: ["6"],
        phone_number_lengths: [9]
    }, {
        name: "Algeria",
        name_ar: "الجزائر",
        code: "DZ",
        dial_code: "213",
        mobile_starts_with: ["5", "6", "7"],
        phone_number_lengths: [9]
    }, {
        name: "American Samoa",
        name_ar: "ساموا الأمريكية",
        code: "AS",
        dial_code: "1684",
        mobile_starts_with: ["684733", "684258"],
        phone_number_lengths: [10]
    }, {
        name: "Andorra",
        name_ar: "أندورا",
        code: "AD",
        dial_code: "376",
        mobile_starts_with: ["3", "4", "6"],
        phone_number_lengths: [6]
    }, {
        name: "Angola",
        name_ar: "أنغولا",
        code: "AO",
        dial_code: "244",
        mobile_starts_with: ["9"],
        phone_number_lengths: [9]
    }, {
        name: "Anguilla",
        name_ar: "أنغويلا",
        code: "AI",
        dial_code: "1264",
        mobile_starts_with: ["2645", "2647"],
        phone_number_lengths: [10]
    }, {
        name: "Antigua and Barbuda",
        name_ar: "أنتيغوا وباربودا",
        code: "AG",
        dial_code: "1268",
        mobile_starts_with: ["2687"],
        phone_number_lengths: [10]
    }, {
        name: "Argentina",
        name_ar: "الأرجنتين",
        code: "AR",
        dial_code: "54",
        mobile_starts_with: ["1", "2", "3"],
        phone_number_lengths: [8, 9, 10, 11, 12]
    }, {
        name: "Armenia",
        name_ar: "أرمينيا",
        code: "AM",
        dial_code: "374",
        mobile_starts_with: ["3", "4", "5", "7", "9"],
        phone_number_lengths: [8]
    }, {
        name: "Aruba",
        name_ar: "أروبا",
        code: "AW",
        dial_code: "297",
        mobile_starts_with: ["5", "6", "7", "9"],
        phone_number_lengths: [7]
    }, {
        name: "Australia",
        name_ar: "أستراليا",
        code: "AU",
        dial_code: "61",
        mobile_starts_with: ["4"],
        phone_number_lengths: [9]
    }, {
        name: "Austria",
        name_ar: "النمسا",
        code: "AT",
        dial_code: "43",
        mobile_starts_with: ["6"],
        phone_number_lengths: [10, 11, 12, 13, 14]
    }, {
        name: "Azerbaijan",
        name_ar: "أذربيجان",
        code: "AZ",
        dial_code: "994",
        mobile_starts_with: ["4", "5", "6", "7"],
        phone_number_lengths: [9]
    }, {
        name: "Bahamas",
        name_ar: "باهاماس",
        code: "BS",
        dial_code: "1242",
        mobile_starts_with: ["242"],
        phone_number_lengths: [10]
    }, {
        name: "Bahrain",
        name_ar: "البحرين",
        code: "BH",
        dial_code: "973",
        mobile_starts_with: ["3"],
        phone_number_lengths: [8]
    }, {
        name: "Bangladesh",
        name_ar: "بنغلاديش",
        code: "BD",
        dial_code: "880",
        mobile_starts_with: ["1"],
        phone_number_lengths: [8, 9, 10]
    }, {
        name: "Barbados",
        name_ar: "باربادوس",
        code: "BB",
        dial_code: "1246",
        mobile_starts_with: ["246"],
        phone_number_lengths: [10]
    }, {
        name: "Belarus",
        name_ar: "بيلاروس",
        code: "BY",
        dial_code: "375",
        mobile_starts_with: ["25", "29", "33", "44"],
        phone_number_lengths: [9]
    }, {
        name: "Belgium",
        name_ar: "بلجيكا",
        code: "BE",
        dial_code: "32",
        mobile_starts_with: ["4", "3"],
        phone_number_lengths: [9, 8]
    }, {
        name: "Belize",
        name_ar: "بليز",
        code: "BZ",
        dial_code: "501",
        mobile_starts_with: ["6"],
        phone_number_lengths: [7]
    }, {
        name: "Benin",
        name_ar: "بنين",
        code: "BJ",
        dial_code: "229",
        mobile_starts_with: ["4", "6", "9"],
        phone_number_lengths: [8]
    }, {
        name: "Bermuda",
        name_ar: "برمودا",
        code: "BM",
        dial_code: "1441",
        mobile_starts_with: ["4413", "4415", "4417"],
        phone_number_lengths: [10]
    }, {
        name: "Bhutan",
        name_ar: "بوتان",
        code: "BT",
        dial_code: "975",
        mobile_starts_with: ["17"],
        phone_number_lengths: [8]
    }, {
        name: "Bolivia, Plurinational State of bolivia",
        name_ar: "بوليفيا",
        code: "BO",
        dial_code: "591",
        mobile_starts_with: ["6", "7"],
        phone_number_lengths: [8]
    }, {
        name: "Bosnia and Herzegovina",
        name_ar: "البوسنة والهرسك",
        code: "BA",
        dial_code: "387",
        mobile_starts_with: ["6"],
        phone_number_lengths: [8]
    }, {
        name: "Botswana",
        name_ar: "بوتسوانا",
        code: "BW",
        dial_code: "267",
        mobile_starts_with: ["71", "72", "73", "74", "75", "76"],
        phone_number_lengths: [8]
    }, {
        name: "Bouvet Island",
        name_ar: "جزيرة بوفيه",
        code: "BV",
        dial_code: "47"
    }, {
        name: "Brazil",
        name_ar: "البرازيل",
        code: "BR",
        dial_code: "55",
        mobile_starts_with: ["119", "129", "139", "149", "159", "169", "179", "189", "199", "219", "229", "249", "279", "289", "319", "329", "339", "349", "359", "379", "389", "419", "429", "439", "449", "459", "469", "479", "489", "499", "519", "539", "549", "559", "619", "629", "639", "649", "659", "669", "679", "689", "699", "719", "739", "749", "759", "779", "799", "819", "829", "839", "849", "859", "869", "879", "889", "899", "919", "929", "939", "949", "959", "969", "979", "989", "999"],
        phone_number_lengths: [10, 11]
    }, {
        name: "British Indian Ocean Territory",
        name_ar: "إقليم المحيط الهندي البريطاني",
        code: "IO",
        dial_code: "246"
    }, {
        name: "Brunei Darussalam",
        name_ar: "بروناي",
        code: "BN",
        dial_code: "673",
        mobile_starts_with: ["7", "8"],
        phone_number_lengths: [7]
    }, {
        name: "Bulgaria",
        name_ar: "بلغاريا",
        code: "BG",
        dial_code: "359",
        mobile_starts_with: ["87", "88", "89", "98", "99", "43"],
        phone_number_lengths: [8, 9]
    }, {
        name: "Burkina Faso",
        name_ar: "بوركينا فاسو",
        code: "BF",
        dial_code: "226",
        mobile_starts_with: ["6", "7"],
        phone_number_lengths: [8]
    }, {
        name: "Burundi",
        name_ar: "بوروندي",
        code: "BI",
        dial_code: "257",
        mobile_starts_with: ["7", "29"],
        phone_number_lengths: [8]
    }, {
        name: "Cambodia",
        name_ar: "كمبوديا",
        code: "KH",
        dial_code: "855",
        mobile_starts_with: ["1", "6", "7", "8", "9"],
        phone_number_lengths: [8, 9]
    }, {
        name: "Cameroon",
        name_ar: "الكاميرون",
        code: "CM",
        dial_code: "237",
        mobile_starts_with: ["6"],
        phone_number_lengths: [9]
    }, {
        name: "Canada",
        name_ar: "كندا",
        code: "CA",
        dial_code: "1",
        mobile_starts_with: ["204", "226", "236", "249", "250", "289", "306", "343", "365", "367", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "600", "604", "613", "639", "647", "672", "705", "709", "778", "780", "807", "819", "825", "867", "873", "902", "905"],
        phone_number_lengths: [10]
    }, {
        name: "Cape Verde",
        name_ar: "الرأس الأخضر",
        code: "CV",
        dial_code: "238",
        mobile_starts_with: ["5", "9"],
        phone_number_lengths: [7]
    }, {
        name: "Cayman Islands",
        name_ar: "جزر كايمان",
        code: "KY",
        dial_code: "345",
        mobile_starts_with: ["345"],
        phone_number_lengths: [10]
    }, {
        name: "Central African Republic",
        name_ar: "جمهورية أفريقيا الوسطى",
        code: "CF",
        dial_code: "236",
        mobile_starts_with: ["7"],
        phone_number_lengths: [8]
    }, {
        name: "Chad",
        name_ar: "تشاد",
        code: "TD",
        dial_code: "235",
        mobile_starts_with: ["6", "7", "9"],
        phone_number_lengths: [8]
    }, {
        name: "Chile",
        name_ar: "تشيلي",
        code: "CL",
        dial_code: "56",
        mobile_starts_with: ["9"],
        phone_number_lengths: [9]
    }, {
        name: "China",
        name_ar: "الصين",
        code: "CN",
        dial_code: "86",
        mobile_starts_with: ["13", "14", "15", "17", "18", "19", "16"],
        phone_number_lengths: [11]
    }, {
        name: "Christmas Island",
        name_ar: "جزيرة كريسماس",
        code: "CX",
        dial_code: "61"
    }, {
        name: "Cocos (Keeling) Islands",
        name_ar: "جزر كوكوس",
        code: "CC",
        dial_code: "61"
    }, {
        name: "Colombia",
        name_ar: "كولومبيا",
        code: "CO",
        dial_code: "57",
        mobile_starts_with: ["3"],
        phone_number_lengths: [10]
    }, {
        name: "Comoros",
        name_ar: "جزر القمر",
        code: "KM",
        dial_code: "269",
        mobile_starts_with: ["3", "76"],
        phone_number_lengths: [7]
    }, {
        name: "Congo",
        name_ar: "جمهورية الكونغو",
        code: "CG",
        dial_code: "242",
        mobile_starts_with: ["0"],
        phone_number_lengths: [9]
    }, {
        name: "Congo, The Democratic Republic of the Congo",
        name_ar: "جمهورية الكونغو الديمقراطية",
        code: "CD",
        dial_code: "243",
        mobile_starts_with: ["8", "9"],
        phone_number_lengths: [9]
    }, {
        name: "Cook Islands",
        name_ar: "جزر كوك",
        code: "CK",
        dial_code: "682",
        mobile_starts_with: ["5", "7"],
        phone_number_lengths: [5]
    }, {
        name: "Costa Rica",
        name_ar: "كوستاريكا",
        code: "CR",
        dial_code: "506",
        mobile_starts_with: ["5", "6", "7", "8"],
        phone_number_lengths: [8]
    }, {
        name: "Cote d'Ivoire",
        name_ar: "ساحل العاج",
        code: "CI",
        dial_code: "225",
        mobile_starts_with: ["0", "4", "5", "6", "7", "8"],
        phone_number_lengths: [10]
    }, {
        name: "Croatia",
        name_ar: "كرواتيا",
        code: "HR",
        dial_code: "385",
        mobile_starts_with: ["9"],
        phone_number_lengths: [8, 9]
    }, {
        name: "Cuba",
        name_ar: "كوبا",
        code: "CU",
        dial_code: "53",
        mobile_starts_with: ["5"],
        phone_number_lengths: [8]
    }, {
        name: "Cyprus",
        name_ar: "قبرص",
        code: "CY",
        dial_code: "357",
        mobile_starts_with: ["9"],
        phone_number_lengths: [8]
    }, {
        name: "Czech Republic",
        name_ar: "جمهورية التشيك",
        code: "CZ",
        dial_code: "420",
        mobile_starts_with: ["6", "7"],
        phone_number_lengths: [9]
    }, {
        name: "Denmark",
        name_ar: "الدنمارك",
        code: "DK",
        dial_code: "45",
        mobile_starts_with: ["2", "30", "31", "40", "41", "42", "50", "51", "52", "53", "60", "61", "71", "81", "91", "92", "93"],
        phone_number_lengths: [8]
    }, {
        name: "Djibouti",
        name_ar: "جيبوتي",
        code: "DJ",
        dial_code: "253",
        mobile_starts_with: ["77"],
        phone_number_lengths: [8]
    }, {
        name: "Dominica",
        name_ar: "دومينيكا",
        code: "DM",
        dial_code: "1767",
        mobile_starts_with: ["767"],
        phone_number_lengths: [10]
    }, {
        name: "Dominican Republic",
        name_ar: "جمهورية الدومينيكان",
        code: "DO",
        dial_code: "1849",
        mobile_starts_with: ["809", "829", "849"],
        phone_number_lengths: [10]
    }, {
        name: "Ecuador",
        name_ar: "الإكوادور",
        code: "EC",
        dial_code: "593",
        mobile_starts_with: ["9"],
        phone_number_lengths: [9]
    }, {
        name: "Egypt",
        name_ar: "مصر",
        code: "EG",
        dial_code: "20",
        mobile_starts_with: ["1"],
        phone_number_lengths: [8, 10]
    }, {
        name: "El Salvador",
        name_ar: "السلفادور",
        code: "SV",
        dial_code: "503",
        mobile_starts_with: ["7"],
        phone_number_lengths: [8]
    }, {
        name: "Equatorial Guinea",
        name_ar: "غينيا الاستوائية",
        code: "GQ",
        dial_code: "240",
        mobile_starts_with: ["222", "551"],
        phone_number_lengths: [9]
    }, {
        name: "Eritrea",
        name_ar: "إريتريا",
        code: "ER",
        dial_code: "291",
        mobile_starts_with: ["1", "7", "8"],
        phone_number_lengths: [7]
    }, {
        name: "Estonia",
        name_ar: "إستونيا",
        code: "EE",
        dial_code: "372",
        mobile_starts_with: ["5", "81", "82", "83"],
        phone_number_lengths: [7, 8]
    }, {
        name: "Ethiopia",
        name_ar: "إثيوبيا",
        code: "ET",
        dial_code: "251",
        mobile_starts_with: ["9"],
        phone_number_lengths: [9]
    }, {
        name: "Falkland Islands (Malvinas)",
        name_ar: "جزر فوكلاند",
        code: "FK",
        dial_code: "500",
        mobile_starts_with: ["5", "6"],
        phone_number_lengths: [5]
    }, {
        name: "Faroe Islands",
        name_ar: "جزر فارو",
        code: "FO",
        dial_code: "298",
        mobile_starts_with: [],
        phone_number_lengths: [6]
    }, {
        name: "Fiji",
        name_ar: "فيجي",
        code: "FJ",
        dial_code: "679",
        mobile_starts_with: ["2", "7", "8", "9"],
        phone_number_lengths: [7]
    }, {
        name: "Finland",
        name_ar: "فنلندا",
        code: "FI",
        dial_code: "358",
        mobile_starts_with: ["4", "5"],
        phone_number_lengths: [9, 10]
    }, {
        name: "France",
        name_ar: "فرنسا",
        code: "FR",
        dial_code: "33",
        mobile_starts_with: ["6", "7"],
        phone_number_lengths: [9]
    }, {
        name: "French Guiana",
        name_ar: "غويانا الفرنسية",
        code: "GF",
        dial_code: "594",
        mobile_starts_with: ["694"],
        phone_number_lengths: [9]
    }, {
        name: "French Polynesia",
        name_ar: "بولينزيا الفرنسية",
        code: "PF",
        dial_code: "689",
        mobile_starts_with: ["8"],
        phone_number_lengths: [8]
    }, {
        name: "French Southern Territories",
        name_ar: "أراض فرنسية جنوبية وأنتارتيكية",
        code: "TF",
        dial_code: "262"
    }, {
        name: "Gabon",
        name_ar: "الغابون",
        code: "GA",
        dial_code: "241",
        mobile_starts_with: ["2", "3", "4", "5", "6", "7"],
        phone_number_lengths: [7]
    }, {
        name: "Gambia",
        name_ar: "غامبيا",
        code: "GM",
        dial_code: "220",
        mobile_starts_with: ["7", "9"],
        phone_number_lengths: [7]
    }, {
        name: "Georgia",
        name_ar: "جورجيا",
        code: "GE",
        dial_code: "995",
        mobile_starts_with: ["5", "7"],
        phone_number_lengths: [9]
    }, {
        name: "Germany",
        name_ar: "ألمانيا",
        code: "DE",
        dial_code: "49",
        mobile_starts_with: ["15", "16", "17"],
        phone_number_lengths: [10, 11]
    }, {
        name: "Ghana",
        name_ar: "غانا",
        code: "GH",
        dial_code: "233",
        mobile_starts_with: ["2", "5"],
        phone_number_lengths: [9]
    }, {
        name: "Gibraltar",
        name_ar: "جبل طارق",
        code: "GI",
        dial_code: "350",
        mobile_starts_with: ["5"],
        phone_number_lengths: [8]
    }, {
        name: "Greece",
        name_ar: "اليونان",
        code: "GR",
        dial_code: "30",
        mobile_starts_with: ["6"],
        phone_number_lengths: [10]
    }, {
        name: "Greenland",
        name_ar: "جرينلاند",
        code: "GL",
        dial_code: "299",
        mobile_starts_with: ["2", "4", "5"],
        phone_number_lengths: [6]
    }, {
        name: "Grenada",
        name_ar: "غرينادا",
        code: "GD",
        dial_code: "1473",
        mobile_starts_with: ["473"],
        phone_number_lengths: [10]
    }, {
        name: "Guam",
        name_ar: "غوام",
        code: "GU",
        dial_code: "1671",
        mobile_starts_with: ["671"],
        phone_number_lengths: [10]
    }, {
        name: "Guatemala",
        name_ar: "غواتيمالا",
        code: "GT",
        dial_code: "502",
        mobile_starts_with: ["3", "4", "5"],
        phone_number_lengths: [8]
    }, {
        name: "Guernsey",
        name_ar: "غيرنزي",
        code: "GG",
        dial_code: "44"
    }, {
        name: "Guinea",
        name_ar: "غينيا",
        code: "GN",
        dial_code: "224",
        mobile_starts_with: ["6"],
        phone_number_lengths: [9]
    }, {
        name: "Guinea-Bissau",
        name_ar: "غينيا بيساو",
        code: "GW",
        dial_code: "245",
        mobile_starts_with: ["5", "6", "7"],
        phone_number_lengths: [7]
    }, {
        name: "Guyana",
        name_ar: "غيانا",
        code: "GY",
        dial_code: "592",
        mobile_starts_with: ["6"],
        phone_number_lengths: [7]
    }, {
        name: "Haiti",
        name_ar: "هايتي",
        code: "HT",
        dial_code: "509",
        mobile_starts_with: ["3", "4"],
        phone_number_lengths: [8]
    }, {
        name: "Heard Island and Mcdonald Islands",
        name_ar: "جزيرة هيرد وجزر ماكدونالد",
        code: "HM",
        dial_code: "672"
    }, {
        name: "Holy See (Vatican City State)",
        name_ar: "الفاتيكان",
        code: "VA",
        dial_code: "379"
    }, {
        name: "Honduras",
        name_ar: "هندوراس",
        code: "HN",
        dial_code: "504",
        mobile_starts_with: ["3", "7", "8", "9"],
        phone_number_lengths: [8]
    }, {
        name: "Hong Kong",
        name_ar: "هونغ كونغ",
        code: "HK",
        dial_code: "852",
        mobile_starts_with: ["4", "5", "6", "70", "71", "72", "73", "81", "82", "83", "84", "85", "86", "87", "88", "89", "9"],
        phone_number_lengths: [8]
    }, {
        name: "Hungary",
        name_ar: "المجر",
        code: "HU",
        dial_code: "36",
        mobile_starts_with: ["20", "30", "31", "50", "70"],
        phone_number_lengths: [9]
    }, {
        name: "Iceland",
        name_ar: "آيسلندا",
        code: "IS",
        dial_code: "354",
        mobile_starts_with: ["6", "7", "8"],
        phone_number_lengths: [7]
    }, {
        name: "India",
        name_ar: "الهند",
        code: "IN",
        dial_code: "91",
        mobile_starts_with: ["6", "7", "8", "9"],
        phone_number_lengths: [10]
    }, {
        name: "Indonesia",
        name_ar: "إندونيسيا",
        code: "ID",
        dial_code: "62",
        mobile_starts_with: ["8"],
        phone_number_lengths: [9, 10, 11, 12]
    }, {
        name: "Iran, Islamic Republic of Persian Gulf",
        name_ar: "إيران",
        code: "IR",
        dial_code: "98",
        mobile_starts_with: ["9"],
        phone_number_lengths: [10]
    }, {
        name: "Iraq",
        name_ar: "العراق",
        code: "IQ",
        dial_code: "964",
        mobile_starts_with: ["7"],
        phone_number_lengths: [10]
    }, {
        name: "Ireland",
        name_ar: "أيرلندا",
        code: "IE",
        dial_code: "353",
        mobile_starts_with: ["82", "83", "84", "85", "86", "87", "88", "89"],
        phone_number_lengths: [9]
    }, {
        name: "Isle of Man",
        name_ar: "جزيرة مان",
        code: "IM",
        dial_code: "44"
    }, {
        name: "Italy",
        name_ar: "إيطاليا",
        code: "IT",
        dial_code: "39",
        mobile_starts_with: ["3"],
        phone_number_lengths: [9, 10]
    }, {
        name: "Jamaica",
        name_ar: "جامايكا",
        code: "JM",
        dial_code: "1876",
        mobile_starts_with: ["876"],
        phone_number_lengths: [10]
    }, {
        name: "Japan",
        name_ar: "اليابان",
        code: "JP",
        dial_code: "81",
        mobile_starts_with: ["70", "80", "90"],
        phone_number_lengths: [10]
    }, {
        name: "Jersey",
        name_ar: "جيرزي",
        code: "JE",
        dial_code: "44"
    }, {
        name: "Jordan",
        name_ar: "الأردن",
        code: "JO",
        dial_code: "962",
        mobile_starts_with: ["7"],
        phone_number_lengths: [9]
    }, {
        name: "Kazakhstan",
        name_ar: "كازاخستان",
        code: "KZ",
        dial_code: "7",
        mobile_starts_with: ["70", "74", "77"],
        phone_number_lengths: [10]
    }, {
        name: "Kenya",
        name_ar: "كينيا",
        code: "KE",
        dial_code: "254",
        mobile_starts_with: ["7", "1"],
        phone_number_lengths: [9]
    }, {
        name: "Kiribati",
        name_ar: "كيريباتي",
        code: "KI",
        dial_code: "686",
        mobile_starts_with: ["9", "30"],
        phone_number_lengths: [5]
    }, {
        name: "Korea, Democratic People's Republic of Korea",
        name_ar: "كوريا الشمالية",
        code: "KP",
        dial_code: "850"
    }, {
        name: "Korea, Republic of South Korea",
        name_ar: "كوريا الجنوبية",
        code: "KR",
        dial_code: "82",
        mobile_starts_with: ["1"],
        phone_number_lengths: [9, 10]
    }, {
        name: "Kuwait",
        name_ar: "الكويت",
        code: "KW",
        dial_code: "965",
        mobile_starts_with: ["5", "6", "9"],
        phone_number_lengths: [8]
    }, {
        name: "Kyrgyzstan",
        name_ar: "قيرغيزستان",
        code: "KG",
        dial_code: "996",
        mobile_starts_with: ["5", "7", "8", "9"],
        phone_number_lengths: [9]
    }, {
        name: "Laos",
        name_ar: "لاوس",
        code: "LA",
        dial_code: "856",
        mobile_starts_with: ["20"],
        phone_number_lengths: [10]
    }, {
        name: "Latvia",
        name_ar: "لاتفيا",
        code: "LV",
        dial_code: "371",
        mobile_starts_with: ["2"],
        phone_number_lengths: [8]
    }, {
        name: "Lebanon",
        name_ar: "لبنان",
        code: "LB",
        dial_code: "961",
        mobile_starts_with: ["3", "7", "8"],
        phone_number_lengths: [7, 8]
    }, {
        name: "Lesotho",
        name_ar: "ليسوتو",
        code: "LS",
        dial_code: "266",
        mobile_starts_with: ["5", "6"],
        phone_number_lengths: [8]
    }, {
        name: "Liberia",
        name_ar: "ليبيريا",
        code: "LR",
        dial_code: "231",
        mobile_starts_with: ["4", "5", "6", "7"],
        phone_number_lengths: [7, 8]
    }, {
        name: "Libyan Arab Jamahiriya",
        name_ar: "ليبيا",
        code: "LY",
        dial_code: "218",
        mobile_starts_with: ["9"],
        phone_number_lengths: [9]
    }, {
        name: "Liechtenstein",
        name_ar: "ليختنشتاين",
        code: "LI",
        dial_code: "423",
        mobile_starts_with: ["7"],
        phone_number_lengths: [7]
    }, {
        name: "Lithuania",
        name_ar: "ليتوانيا",
        code: "LT",
        dial_code: "370",
        mobile_starts_with: ["6"],
        phone_number_lengths: [8]
    }, {
        name: "Luxembourg",
        name_ar: "لوكسمبورغ",
        code: "LU",
        dial_code: "352",
        mobile_starts_with: ["6"],
        phone_number_lengths: [9]
    }, {
        name: "Macao",
        name_ar: "ماكاو",
        code: "MO",
        dial_code: "853",
        mobile_starts_with: ["6"],
        phone_number_lengths: [8]
    }, {
        name: "Macedonia",
        name_ar: "مقدونيا",
        code: "MK",
        dial_code: "389",
        mobile_starts_with: ["7"],
        phone_number_lengths: [8]
    }, {
        name: "Madagascar",
        name_ar: "مدغشقر",
        code: "MG",
        dial_code: "261",
        mobile_starts_with: ["3"],
        phone_number_lengths: [9]
    }, {
        name: "Malawi",
        name_ar: "مالاوي",
        code: "MW",
        dial_code: "265",
        mobile_starts_with: ["77", "88", "99"],
        phone_number_lengths: [9]
    }, {
        name: "Malaysia",
        name_ar: "ماليزيا",
        code: "MY",
        dial_code: "60",
        mobile_starts_with: ["1", "6"],
        phone_number_lengths: [8, 9, 10]
    }, {
        name: "Maldives",
        name_ar: "جزر المالديف",
        code: "MV",
        dial_code: "960",
        mobile_starts_with: ["7", "9"],
        phone_number_lengths: [7]
    }, {
        name: "Mali",
        name_ar: "مالي",
        code: "ML",
        dial_code: "223",
        mobile_starts_with: ["6", "7"],
        phone_number_lengths: [8]
    }, {
        name: "Malta",
        name_ar: "مالطا",
        code: "MT",
        dial_code: "356",
        mobile_starts_with: ["7", "9"],
        phone_number_lengths: [8]
    }, {
        name: "Marshall Islands",
        name_ar: "جزر مارشال",
        code: "MH",
        dial_code: "692",
        mobile_starts_with: [],
        phone_number_lengths: [7]
    }, {
        name: "Martinique",
        name_ar: "مارتينيك",
        code: "MQ",
        dial_code: "596",
        mobile_starts_with: ["696"],
        phone_number_lengths: [9]
    }, {
        name: "Mauritania",
        name_ar: "موريتانيا",
        code: "MR",
        dial_code: "222",
        mobile_starts_with: [],
        phone_number_lengths: [8]
    }, {
        name: "Mauritius",
        name_ar: "موريشيوس",
        code: "MU",
        dial_code: "230",
        mobile_starts_with: ["5"],
        phone_number_lengths: [8]
    }, {
        name: "Mayotte",
        name_ar: "مايوت",
        code: "YT",
        dial_code: "262",
        mobile_starts_with: ["639"],
        phone_number_lengths: [9]
    }, {
        name: "Mexico",
        name_ar: "المكسيك",
        code: "MX",
        dial_code: "52",
        mobile_starts_with: [""],
        phone_number_lengths: [10, 11]
    }, {
        name: "Micronesia, Federated States of Micronesia",
        name_ar: "ولايات ميكرونيسيا المتحدة",
        code: "FM",
        dial_code: "691",
        mobile_starts_with: [],
        phone_number_lengths: [7]
    }, {
        name: "Moldova",
        name_ar: "مولدوفا",
        code: "MD",
        dial_code: "373",
        mobile_starts_with: ["6", "7"],
        phone_number_lengths: [8]
    }, {
        name: "Monaco",
        name_ar: "موناكو",
        code: "MC",
        dial_code: "377",
        mobile_starts_with: ["4", "6"],
        phone_number_lengths: [8, 9]
    }, {
        name: "Mongolia",
        name_ar: "منغوليا",
        code: "MN",
        dial_code: "976",
        mobile_starts_with: ["5", "8", "9"],
        phone_number_lengths: [8]
    }, {
        name: "Montenegro",
        name_ar: "الجبل الأسود",
        code: "ME",
        dial_code: "382",
        mobile_starts_with: ["6"],
        phone_number_lengths: [8]
    }, {
        name: "Montserrat",
        name_ar: "مونتسرات",
        code: "MS",
        dial_code: "1664",
        mobile_starts_with: ["664"],
        phone_number_lengths: [10]
    }, {
        name: "Morocco",
        name_ar: "المغرب",
        code: "MA",
        dial_code: "212",
        mobile_starts_with: ["6", "7"],
        phone_number_lengths: [9]
    }, {
        name: "Mozambique",
        name_ar: "موزمبيق",
        code: "MZ",
        dial_code: "258",
        mobile_starts_with: ["8"],
        phone_number_lengths: [9]
    }, {
        name: "Myanmar",
        name_ar: "ميانمار",
        code: "MM",
        dial_code: "95",
        mobile_starts_with: ["9"],
        phone_number_lengths: [8, 9, 10]
    }, {
        name: "Namibia",
        name_ar: "ناميبيا",
        code: "NA",
        dial_code: "264",
        mobile_starts_with: ["60", "81", "82", "85"],
        phone_number_lengths: [9]
    }, {
        name: "Nauru",
        name_ar: "ناورو",
        code: "NR",
        dial_code: "674",
        mobile_starts_with: ["555"],
        phone_number_lengths: [7]
    }, {
        name: "Nepal",
        name_ar: "نيبال",
        code: "NP",
        dial_code: "977",
        mobile_starts_with: ["97", "98"],
        phone_number_lengths: [10]
    }, {
        name: "Netherlands",
        name_ar: "هولندا",
        code: "NL",
        dial_code: "31",
        mobile_starts_with: ["6"],
        phone_number_lengths: [9]
    }, {
        name: "New Caledonia",
        name_ar: "كاليدونيا الجديدة",
        code: "NC",
        dial_code: "687",
        mobile_starts_with: ["7", "8", "9"],
        phone_number_lengths: [6]
    }, {
        name: "New Zealand",
        name_ar: "نيوزيلندا",
        code: "NZ",
        dial_code: "64",
        mobile_starts_with: ["2"],
        phone_number_lengths: [8, 9, 10]
    }, {
        name: "Nicaragua",
        name_ar: "نيكاراغوا",
        code: "NI",
        dial_code: "505",
        mobile_starts_with: ["8"],
        phone_number_lengths: [8]
    }, {
        name: "Niger",
        name_ar: "النيجر",
        code: "NE",
        dial_code: "227",
        mobile_starts_with: ["9"],
        phone_number_lengths: [8]
    }, {
        name: "Nigeria",
        name_ar: "نيجيريا",
        code: "NG",
        dial_code: "234",
        mobile_starts_with: ["70", "80", "81", "90", "91"],
        phone_number_lengths: [10]
    }, {
        name: "Niue",
        name_ar: "نييوي",
        code: "NU",
        dial_code: "683",
        mobile_starts_with: [],
        phone_number_lengths: [4]
    }, {
        name: "Norfolk Island",
        name_ar: "جزيرة نورفولك",
        code: "NF",
        dial_code: "672",
        mobile_starts_with: ["5", "8"],
        phone_number_lengths: [5]
    }, {
        name: "Northern Mariana Islands",
        name_ar: "جزر ماريانا الشمالية",
        code: "MP",
        dial_code: "1670",
        mobile_starts_with: ["670"],
        phone_number_lengths: [10]
    }, {
        name: "Norway",
        name_ar: "النرويج",
        code: "NO",
        dial_code: "47",
        mobile_starts_with: ["4", "9"],
        phone_number_lengths: [8]
    }, {
        name: "Oman",
        name_ar: "عمان",
        code: "OM",
        dial_code: "968",
        mobile_starts_with: ["9"],
        phone_number_lengths: [8]
    }, {
        name: "Pakistan",
        name_ar: "باكستان",
        code: "PK",
        dial_code: "92",
        mobile_starts_with: ["3"],
        phone_number_lengths: [10]
    }, {
        name: "Palau",
        name_ar: "بالاو",
        code: "PW",
        dial_code: "680",
        mobile_starts_with: [],
        phone_number_lengths: [7]
    }, {
        name: "Palestinian",
        name_ar: "فلسطين",
        code: "PS",
        dial_code: "970",
        mobile_starts_with: ["5"],
        phone_number_lengths: [9]
    }, {
        name: "Panama",
        name_ar: "بنما",
        code: "PA",
        dial_code: "507",
        mobile_starts_with: ["6"],
        phone_number_lengths: [8]
    }, {
        name: "Papua New Guinea",
        name_ar: "بابوا غينيا الجديدة",
        code: "PG",
        dial_code: "675",
        mobile_starts_with: ["7"],
        phone_number_lengths: [8]
    }, {
        name: "Paraguay",
        name_ar: "باراغواي",
        code: "PY",
        dial_code: "595",
        mobile_starts_with: ["9"],
        phone_number_lengths: [9]
    }, {
        name: "Peru",
        name_ar: "بيرو",
        code: "PE",
        dial_code: "51",
        mobile_starts_with: ["9"],
        phone_number_lengths: [9]
    }, {
        name: "Philippines",
        name_ar: "الفلبين",
        code: "PH",
        dial_code: "63",
        mobile_starts_with: ["9"],
        phone_number_lengths: [10]
    }, {
        name: "Pitcairn",
        name_ar: "جزر بيتكيرن",
        code: "PN",
        dial_code: "64"
    }, {
        name: "Poland",
        name_ar: "بولندا",
        code: "PL",
        dial_code: "48",
        mobile_starts_with: ["4", "5", "6", "7", "8"],
        phone_number_lengths: [9]
    }, {
        name: "Portugal",
        name_ar: "البرتغال",
        code: "PT",
        dial_code: "351",
        mobile_starts_with: ["9"],
        phone_number_lengths: [9]
    }, {
        name: "Puerto Rico",
        name_ar: "بورتوريكو",
        code: "PR",
        dial_code: "1939",
        mobile_starts_with: ["787", "939"],
        phone_number_lengths: [10]
    }, {
        name: "Qatar",
        name_ar: "قطر",
        code: "QA",
        dial_code: "974",
        mobile_starts_with: ["3", "5", "6", "7"],
        phone_number_lengths: [8]
    }, {
        name: "Romania",
        name_ar: "رومانيا",
        code: "RO",
        dial_code: "40",
        mobile_starts_with: ["7"],
        phone_number_lengths: [9]
    }, {
        name: "Russia",
        name_ar: "روسيا",
        code: "RU",
        dial_code: "7",
        mobile_starts_with: ["9", "495", "498", "499"],
        phone_number_lengths: [10]
    }, {
        name: "Rwanda",
        name_ar: "رواندا",
        code: "RW",
        dial_code: "250",
        mobile_starts_with: ["7"],
        phone_number_lengths: [9]
    }, {
        name: "Reunion",
        name_ar: "لا ريونيون",
        code: "RE",
        dial_code: "262",
        mobile_starts_with: ["692", "693"],
        phone_number_lengths: [9]
    }, {
        name: "Saint Helena, Ascension and Tristan Da Cunha",
        name_ar: "سانت هيلانة وأسينشين وتريستان دا كونا",
        code: "SH",
        dial_code: "290",
        mobile_starts_with: [],
        phone_number_lengths: [4]
    }, {
        name: "Saint Kitts and Nevis",
        name_ar: "سانت كيتس ونيفيس",
        code: "KN",
        dial_code: "1869",
        mobile_starts_with: ["869"],
        phone_number_lengths: [10]
    }, {
        name: "Saint Lucia",
        name_ar: "سانت لوسيا",
        code: "LC",
        dial_code: "1758",
        mobile_starts_with: ["758"],
        phone_number_lengths: [10]
    }, {
        name: "Saint Martin",
        name_ar: "تجمع سان مارتين",
        code: "MF",
        dial_code: "590"
    }, {
        name: "Saint Pierre and Miquelon",
        name_ar: "سان بيير وميكلون",
        code: "PM",
        dial_code: "508",
        mobile_starts_with: ["55", "41"],
        phone_number_lengths: [6]
    }, {
        name: "Saint Vincent and the Grenadines",
        name_ar: "سانت فينسنت والغرينادين",
        code: "VC",
        dial_code: "1784",
        mobile_starts_with: ["784"],
        phone_number_lengths: [10]
    }, {
        name: "Samoa",
        name_ar: "ساموا",
        code: "WS",
        dial_code: "685",
        mobile_starts_with: ["7"],
        phone_number_lengths: [7]
    }, {
        name: "San Marino",
        name_ar: "سان مارينو",
        code: "SM",
        dial_code: "378",
        mobile_starts_with: ["3", "6"],
        phone_number_lengths: [10]
    }, {
        name: "Sao Tome and Principe",
        name_ar: "ساو تومي وبرينسيب",
        code: "ST",
        dial_code: "239",
        mobile_starts_with: ["98", "99"],
        phone_number_lengths: [7]
    }, {
        name: "Senegal",
        name_ar: "السنغال",
        code: "SN",
        dial_code: "221",
        mobile_starts_with: ["7"],
        phone_number_lengths: [9]
    }, {
        name: "Serbia",
        name_ar: "صربيا",
        code: "RS",
        dial_code: "381",
        mobile_starts_with: ["6"],
        phone_number_lengths: [8, 9]
    }, {
        name: "Seychelles",
        name_ar: "سيشل",
        code: "SC",
        dial_code: "248",
        mobile_starts_with: ["2"],
        phone_number_lengths: [7]
    }, {
        name: "Sierra Leone",
        name_ar: "سيراليون",
        code: "SL",
        dial_code: "232",
        mobile_starts_with: ["21", "25", "30", "33", "34", "40", "44", "50", "55", "76", "77", "78", "79", "88"],
        phone_number_lengths: [8]
    }, {
        name: "Singapore",
        name_ar: "سنغافورة",
        code: "SG",
        dial_code: "65",
        mobile_starts_with: ["8", "9"],
        phone_number_lengths: [8]
    }, {
        name: "Slovakia",
        name_ar: "سلوفاكيا",
        code: "SK",
        dial_code: "421",
        mobile_starts_with: ["9"],
        phone_number_lengths: [9]
    }, {
        name: "Slovenia",
        name_ar: "سلوفينيا",
        code: "SI",
        dial_code: "386",
        mobile_starts_with: ["3", "4", "5", "6", "7"],
        phone_number_lengths: [8]
    }, {
        name: "Solomon Islands",
        name_ar: "جزر سليمان",
        code: "SB",
        dial_code: "677",
        mobile_starts_with: ["7", "8"],
        phone_number_lengths: [7]
    }, {
        name: "Somalia",
        name_ar: "الصومال",
        code: "SO",
        dial_code: "252",
        mobile_starts_with: ["61", "62", "63", "65", "66", "68", "69", "71", "90"],
        phone_number_lengths: [9]
    }, {
        name: "South Africa",
        name_ar: "جنوب أفريقيا",
        code: "ZA",
        dial_code: "27",
        mobile_starts_with: ["1", "2", "3", "4", "5", "6", "7", "8"],
        phone_number_lengths: [9]
    }, {
        name: "South Sudan",
        name_ar: "جنوب السودان",
        code: "SS",
        dial_code: "211",
        mobile_starts_with: ["9"],
        phone_number_lengths: [9]
    }, {
        name: "South Georgia and the South Sandwich Islands",
        name_ar: "جورجيا الجنوبية وجزر ساندويتش الجنوبية",
        code: "GS",
        dial_code: "500"
    }, {
        name: "Spain",
        name_ar: "إسبانيا",
        code: "ES",
        dial_code: "34",
        mobile_starts_with: ["6", "7"],
        phone_number_lengths: [9]
    }, {
        name: "Sri Lanka",
        name_ar: "سريلانكا",
        code: "LK",
        dial_code: "94",
        mobile_starts_with: ["7"],
        phone_number_lengths: [9]
    }, {
        name: "Sudan",
        name_ar: "السودان",
        code: "SD",
        dial_code: "249",
        mobile_starts_with: ["9"],
        phone_number_lengths: [9]
    }, {
        name: "Suriname",
        name_ar: "سورينام",
        code: "SR",
        dial_code: "597",
        mobile_starts_with: ["6", "7", "8"],
        phone_number_lengths: [7]
    }, {
        name: "Svalbard and Jan Mayen",
        name_ar: "سفالبارد ويان ماين",
        code: "SJ",
        dial_code: "47",
        mobile_starts_with: ["79"],
        phone_number_lengths: [8]
    }, {
        name: "Swaziland",
        name_ar: "إسواتيني",
        code: "SZ",
        dial_code: "268"
    }, {
        name: "Sweden",
        name_ar: "السويد",
        code: "SE",
        dial_code: "46",
        mobile_starts_with: ["7"],
        phone_number_lengths: [9]
    }, {
        name: "Switzerland",
        name_ar: "سويسرا",
        code: "CH",
        dial_code: "41",
        mobile_starts_with: ["74", "75", "76", "77", "78", "79"],
        phone_number_lengths: [9]
    }, {
        name: "Syrian Arab Republic",
        name_ar: "سوريا",
        code: "SY",
        dial_code: "963",
        mobile_starts_with: ["9"],
        phone_number_lengths: [9]
    }, {
        name: "Taiwan",
        name_ar: "تايوان",
        code: "TW",
        dial_code: "886",
        mobile_starts_with: ["9"],
        phone_number_lengths: [9]
    }, {
        name: "Tajikistan",
        name_ar: "طاجيكستان",
        code: "TJ",
        dial_code: "992",
        mobile_starts_with: ["9"],
        phone_number_lengths: [9]
    }, {
        name: "Tanzania, United Republic of Tanzania",
        name_ar: "تنزانيا",
        code: "TZ",
        dial_code: "255",
        mobile_starts_with: ["7", "6"],
        phone_number_lengths: [9]
    }, {
        name: "Thailand",
        name_ar: "تايلاند",
        code: "TH",
        dial_code: "66",
        mobile_starts_with: ["6", "8", "9"],
        phone_number_lengths: [9]
    }, {
        name: "Timor-Leste",
        name_ar: "تيمور الشرقية",
        code: "TL",
        dial_code: "670",
        mobile_starts_with: ["7"],
        phone_number_lengths: [8]
    }, {
        name: "Togo",
        name_ar: "توغو",
        code: "TG",
        dial_code: "228",
        mobile_starts_with: ["9"],
        phone_number_lengths: [8]
    }, {
        name: "Tokelau",
        name_ar: "توكيلاو",
        code: "TK",
        dial_code: "690",
        mobile_starts_with: [],
        phone_number_lengths: [4]
    }, {
        name: "Tonga",
        name_ar: "تونغا",
        code: "TO",
        dial_code: "676",
        mobile_starts_with: [],
        phone_number_lengths: [5]
    }, {
        name: "Trinidad and Tobago",
        name_ar: "ترينيداد وتوباغو",
        code: "TT",
        dial_code: "1868",
        mobile_starts_with: ["868"],
        phone_number_lengths: [10]
    }, {
        name: "Tunisia",
        name_ar: "تونس",
        code: "TN",
        dial_code: "216",
        mobile_starts_with: ["2", "4", "5", "9"],
        phone_number_lengths: [8]
    }, {
        name: "Turkey",
        name_ar: "تركيا",
        code: "TR",
        dial_code: "90",
        mobile_starts_with: ["5"],
        phone_number_lengths: [10]
    }, {
        name: "Turkmenistan",
        name_ar: "تركمانستان",
        code: "TM",
        dial_code: "993",
        mobile_starts_with: ["6"],
        phone_number_lengths: [8]
    }, {
        name: "Turks and Caicos Islands",
        name_ar: "جزر توركس وكايكوس",
        code: "TC",
        dial_code: "1649",
        mobile_starts_with: ["6492", "6493", "6494"],
        phone_number_lengths: [10]
    }, {
        name: "Tuvalu",
        name_ar: "توفالو",
        code: "TV",
        dial_code: "688",
        mobile_starts_with: [],
        phone_number_lengths: [5]
    }, {
        name: "Uganda",
        name_ar: "أوغندا",
        code: "UG",
        dial_code: "256",
        mobile_starts_with: ["7"],
        phone_number_lengths: [9]
    }, {
        name: "Ukraine",
        name_ar: "أوكرانيا",
        code: "UA",
        dial_code: "380",
        mobile_starts_with: ["39", "50", "63", "66", "67", "68", "73", "9"],
        phone_number_lengths: [9]
    }, {
        name: "United Arab Emirates",
        name_ar: "الإمارات العربية المتحدة",
        code: "AE",
        dial_code: "971",
        mobile_starts_with: ["5"],
        phone_number_lengths: [9]
    }, {
        name: "United Kingdom",
        name_ar: "المملكة المتحدة",
        code: "GB",
        dial_code: "44",
        mobile_starts_with: ["7"],
        phone_number_lengths: [10]
    }, {
        name: "United States",
        name_ar: "الولايات المتحدة",
        code: "US",
        dial_code: "1",
        mobile_starts_with: ["201", "202", "203", "205", "206", "207", "208", "209", "210", "212", "213", "214", "215", "216", "217", "218", "219", "220", "223", "224", "225", "227", "228", "229", "231", "234", "239", "240", "248", "251", "252", "253", "254", "256", "260", "262", "267", "269", "270", "272", "274", "276", "278", "281", "283", "301", "302", "303", "304", "305", "307", "308", "309", "310", "312", "313", "314", "315", "316", "317", "318", "319", "320", "321", "323", "325", "327", "330", "331", "332", "334", "336", "337", "339", "341", "346", "347", "351", "352", "360", "361", "364", "369", "380", "385", "386", "401", "402", "404", "405", "406", "407", "408", "409", "410", "412", "413", "414", "415", "417", "419", "423", "424", "425", "430", "432", "434", "435", "440", "441", "442", "443", "445", "447", "458", "463", "464", "469", "470", "475", "478", "479", "480", "484", "501", "502", "503", "504", "505", "507", "508", "509", "510", "512", "513", "515", "516", "517", "518", "520", "530", "531", "534", "539", "540", "541", "551", "557", "559", "561", "562", "563", "564", "567", "570", "571", "572", "573", "574", "575", "580", "582", "585", "586", "601", "602", "603", "605", "606", "607", "608", "609", "610", "612", "614", "615", "616", "617", "618", "619", "620", "623", "626", "627", "628", "629", "630", "631", "636", "640", "641", "646", "650", "651", "657", "659", "660", "661", "662", "667", "669", "678", "679", "680", "681", "682", "689", "701", "702", "703", "704", "706", "707", "708", "712", "713", "714", "715", "716", "717", "718", "719", "720", "724", "725", "726", "727", "730", "731", "732", "734", "737", "740", "743", "747", "752", "754", "757", "760", "762", "763", "764", "765", "769", "770", "772", "773", "774", "775", "779", "781", "785", "786", "787", "801", "802", "803", "804", "805", "806", "808", "810", "812", "813", "814", "815", "816", "817", "818", "820", "828", "830", "831", "832", "835", "838", "840", "843", "845", "847", "848", "850", "854", "856", "857", "858", "859", "860", "862", "863", "864", "865", "870", "872", "878", "901", "903", "904", "906", "907", "908", "909", "910", "912", "913", "914", "915", "916", "917", "918", "919", "920", "925", "927", "928", "929", "931", "934", "935", "936", "937", "938", "939", "940", "941", "945", "947", "949", "951", "952", "954", "956", "957", "959", "970", "971", "972", "973", "975", "978", "979", "980", "984", "985", "986", "989", "888", "800", "833", "844", "855", "866", "877", "279"],
        phone_number_lengths: [10]
    }, {
        name: "Uruguay",
        name_ar: "الأوروغواي",
        code: "UY",
        dial_code: "598",
        mobile_starts_with: ["9"],
        phone_number_lengths: [8]
    }, {
        name: "Uzbekistan",
        name_ar: "أوزبكستان",
        code: "UZ",
        dial_code: "998",
        mobile_starts_with: ["9", "88", "33"],
        phone_number_lengths: [9]
    }, {
        name: "Vanuatu",
        name_ar: "فانواتو",
        code: "VU",
        dial_code: "678",
        mobile_starts_with: ["5", "7"],
        phone_number_lengths: [7]
    }, {
        name: "Venezuela, Bolivarian Republic of Venezuela",
        name_ar: "فنزويلا",
        code: "VE",
        dial_code: "58",
        mobile_starts_with: ["4"],
        phone_number_lengths: [10]
    }, {
        name: "Vietnam",
        name_ar: "فيتنام",
        code: "VN",
        dial_code: "84",
        mobile_starts_with: ["8", "9", "3", "7", "5"],
        phone_number_lengths: [9]
    }, {
        name: "Virgin Islands, British",
        name_ar: "جزر العذراء البريطانية",
        code: "VG",
        dial_code: "1284",
        mobile_starts_with: ["284"],
        phone_number_lengths: [10]
    }, {
        name: "Virgin Islands, U.S.",
        name_ar: "جزر العذراء الأمريكية",
        code: "VI",
        dial_code: "1340",
        mobile_starts_with: ["340"],
        phone_number_lengths: [10]
    }, {
        name: "Wallis and Futuna",
        name_ar: "واليس وفوتونا",
        code: "WF",
        dial_code: "681",
        mobile_starts_with: [],
        phone_number_lengths: [6]
    }, {
        name: "Yemen",
        name_ar: "اليمن",
        code: "YE",
        dial_code: "967",
        mobile_starts_with: ["7"],
        phone_number_lengths: [9]
    }, {
        name: "Zambia",
        name_ar: "زامبيا",
        code: "ZM",
        dial_code: "260",
        mobile_starts_with: ["9", "7"],
        phone_number_lengths: [9]
    }, {
        name: "Zimbabwe",
        name_ar: "زيمبابوي",
        code: "ZW",
        dial_code: "263",
        mobile_starts_with: ["71", "73", "77"],
        phone_number_lengths: [9]
    }],
    cg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    tc = e => {
        try {
            return JSON.parse(e)
        } catch {
            return e
        }
    },
    Gn = {},
    nc = () => `#${Math.floor(Math.random()*16777215).toString(16)}`,
    dg = e => {
        if (Gn[e]) return Gn[e];
        const t = Nn("color"),
            n = tc(t || "");
        if (n) {
            const s = n[e];
            if (s) return Gn[e] = s, s
        }
        const r = nc();
        return Gn[e] = r, gr({
            name: "color",
            value: JSON.stringify({
                [e]: r
            })
        }), r
    },
    O = e => j(void 0, [e], function*({
        baseUrl: t,
        url: n,
        options: r,
        raw: s,
        includeAuth: i = !0,
        includeToken: o = !0
    }) {
        var a;
        const u = (a = N.config) == null ? void 0 : a.wbk;
        if (!t && !u) {
            const g = "WBK `ApiConfig` was not initialized. See instructions in https://github.com/nadude/webook-frontend/blob/main/packages/api/README.md";
            throw console.error(g), new Error(g)
        }
        const c = t || (u == null ? void 0 : u.api),
            l = n.startsWith("/") ? n : `/${n}`,
            d = Nn("token") || "",
            h = yield fetch(`${c}${l}`, K(M({}, r), {
                headers: M(M(M({
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }, o && {
                    token: u == null ? void 0 : u.apiToken
                }), i && {
                    Authorization: `Bearer ${d}`
                }), r == null ? void 0 : r.headers)
            }));
        if (s) return h;
        const f = yield h.json();
        if (!h.ok) throw f.message || (f.message = (f == null ? void 0 : f.error) || "Something went wrong"), f.statusCode = h.status, f;
        return f
    }),
    rn = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    tn = typeof window > "u" || "Deno" in globalThis;

function Ee() {}

function rc(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Hr(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function _a(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function wi(e, t) {
    const {
        type: n = "all",
        exact: r,
        fetchStatus: s,
        predicate: i,
        queryKey: o,
        stale: a
    } = e;
    if (o) {
        if (r) {
            if (t.queryHash !== Ms(o, t.options)) return !1
        } else if (!yn(t.queryKey, o)) return !1
    }
    if (n !== "all") {
        const u = t.isActive();
        if (n === "active" && !u || n === "inactive" && u) return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || s && s !== t.state.fetchStatus || i && !i(t))
}

function Ai(e, t) {
    const {
        exact: n,
        status: r,
        predicate: s,
        mutationKey: i
    } = e;
    if (i) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (Ft(t.options.mutationKey) !== Ft(i)) return !1
        } else if (!yn(t.options.mutationKey, i)) return !1
    }
    return !(r && t.state.status !== r || s && !s(t))
}

function Ms(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Ft)(e)
}

function Ft(e) {
    return JSON.stringify(e, (t, n) => zr(n) ? Object.keys(n).sort().reduce((r, s) => (r[s] = n[s], r), {}) : n)
}

function yn(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !yn(e[n], t[n])) : !1
}

function va(e, t) {
    if (e === t) return e;
    const n = Si(e) && Si(t);
    if (n || zr(e) && zr(t)) {
        const r = n ? e : Object.keys(e),
            s = r.length,
            i = n ? t : Object.keys(t),
            o = i.length,
            a = n ? [] : {};
        let u = 0;
        for (let c = 0; c < o; c++) {
            const l = n ? c : i[c];
            (!n && r.includes(l) || n) && e[l] === void 0 && t[l] === void 0 ? (a[l] = void 0, u++) : (a[l] = va(e[l], t[l]), a[l] === e[l] && e[l] !== void 0 && u++)
        }
        return s === o && u === s ? e : a
    }
    return t
}

function rr(e, t) {
    if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e)
        if (e[n] !== t[n]) return !1;
    return !0
}

function Si(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function zr(e) {
    if (!Ci(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!Ci(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function Ci(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function sc(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function Wr(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? va(e, t) : t
}

function ic(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}

function oc(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Es = Symbol(),
    St, nt, Ut, Wo, ac = (Wo = class extends rn {
        constructor() {
            super();
            P(this, St, void 0);
            P(this, nt, void 0);
            P(this, Ut, void 0);
            T(this, Ut, t => {
                if (!tn && window.addEventListener) {
                    const n = () => t();
                    return window.addEventListener("visibilitychange", n, !1), () => {
                        window.removeEventListener("visibilitychange", n)
                    }
                }
            })
        }
        onSubscribe() {
            y(this, nt) || this.setEventListener(y(this, Ut))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = y(this, nt)) == null || t.call(this), T(this, nt, void 0))
        }
        setEventListener(t) {
            var n;
            T(this, Ut, t), (n = y(this, nt)) == null || n.call(this), T(this, nt, t(r => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
            }))
        }
        setFocused(t) {
            y(this, St) !== t && (T(this, St, t), this.onFocus())
        }
        onFocus() {
            const t = this.isFocused();
            this.listeners.forEach(n => {
                n(t)
            })
        }
        isFocused() {
            var t;
            return typeof y(this, St) == "boolean" ? y(this, St) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
        }
    }, St = new WeakMap, nt = new WeakMap, Ut = new WeakMap, Wo),
    Rs = new ac,
    $t, rt, Kt, Qo, uc = (Qo = class extends rn {
        constructor() {
            super();
            P(this, $t, !0);
            P(this, rt, void 0);
            P(this, Kt, void 0);
            T(this, Kt, t => {
                if (!tn && window.addEventListener) {
                    const n = () => t(!0),
                        r = () => t(!1);
                    return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", r)
                    }
                }
            })
        }
        onSubscribe() {
            y(this, rt) || this.setEventListener(y(this, Kt))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = y(this, rt)) == null || t.call(this), T(this, rt, void 0))
        }
        setEventListener(t) {
            var n;
            T(this, Kt, t), (n = y(this, rt)) == null || n.call(this), T(this, rt, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            y(this, $t) !== t && (T(this, $t, t), this.listeners.forEach(r => {
                r(t)
            }))
        }
        isOnline() {
            return y(this, $t)
        }
    }, $t = new WeakMap, rt = new WeakMap, Kt = new WeakMap, Qo),
    sr = new uc;

function lc(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function ba(e) {
    return (e ? ? "online") === "online" ? sr.isOnline() : !0
}
var xa = class {
    constructor(e) {
        this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
    }
};

function Pr(e) {
    return e instanceof xa
}

function wa(e) {
    let t = !1,
        n = 0,
        r = !1,
        s, i, o;
    const a = new Promise((v, w) => {
            i = v, o = w
        }),
        u = v => {
            var w;
            r || (g(new xa(v)), (w = e.abort) == null || w.call(e))
        },
        c = () => {
            t = !0
        },
        l = () => {
            t = !1
        },
        d = () => Rs.isFocused() && (e.networkMode === "always" || sr.isOnline()) && e.canRun(),
        h = () => ba(e.networkMode) && e.canRun(),
        f = v => {
            var w;
            r || (r = !0, (w = e.onSuccess) == null || w.call(e, v), s == null || s(), i(v))
        },
        g = v => {
            var w;
            r || (r = !0, (w = e.onError) == null || w.call(e, v), s == null || s(), o(v))
        },
        p = () => new Promise(v => {
            var w;
            s = b => {
                (r || d()) && v(b)
            }, (w = e.onPause) == null || w.call(e)
        }).then(() => {
            var v;
            s = void 0, r || (v = e.onContinue) == null || v.call(e)
        }),
        _ = () => {
            if (r) return;
            let v;
            try {
                v = e.fn()
            } catch (w) {
                v = Promise.reject(w)
            }
            Promise.resolve(v).then(f).catch(w => {
                var U;
                if (r) return;
                const b = e.retry ? ? (tn ? 0 : 3),
                    A = e.retryDelay ? ? lc,
                    k = typeof A == "function" ? A(n, w) : A,
                    C = b === !0 || typeof b == "number" && n < b || typeof b == "function" && b(n, w);
                if (t || !C) {
                    g(w);
                    return
                }
                n++, (U = e.onFail) == null || U.call(e, n, w), sc(k).then(() => d() ? void 0 : p()).then(() => {
                    t ? g(w) : _()
                })
            })
        };
    return {
        promise: a,
        cancel: u,
        continue: () => (s == null || s(), a),
        cancelRetry: c,
        continueRetry: l,
        canStart: h,
        start: () => (h() ? _() : p().then(_), a)
    }
}

function cc() {
    let e = [],
        t = 0,
        n = h => {
            h()
        },
        r = h => {
            h()
        },
        s = h => setTimeout(h, 0);
    const i = h => {
            s = h
        },
        o = h => {
            let f;
            t++;
            try {
                f = h()
            } finally {
                t--, t || c()
            }
            return f
        },
        a = h => {
            t ? e.push(h) : s(() => {
                n(h)
            })
        },
        u = h => (...f) => {
            a(() => {
                h(...f)
            })
        },
        c = () => {
            const h = e;
            e = [], h.length && s(() => {
                r(() => {
                    h.forEach(f => {
                        n(f)
                    })
                })
            })
        };
    return {
        batch: o,
        batchCalls: u,
        schedule: a,
        setNotifyFunction: h => {
            n = h
        },
        setBatchNotifyFunction: h => {
            r = h
        },
        setScheduler: i
    }
}
var ae = cc(),
    Ct, Jo, Aa = (Jo = class {
        constructor() {
            P(this, Ct, void 0)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), Hr(this.gcTime) && T(this, Ct, setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ? ? (tn ? 1 / 0 : 5 * 60 * 1e3))
        }
        clearGcTimeout() {
            y(this, Ct) && (clearTimeout(y(this, Ct)), T(this, Ct, void 0))
        }
    }, Ct = new WeakMap, Jo),
    Gt, qt, Me, ye, An, kt, Fe, Ge, Yo, dc = (Yo = class extends Aa {
        constructor(t) {
            super();
            P(this, Fe);
            P(this, Gt, void 0);
            P(this, qt, void 0);
            P(this, Me, void 0);
            P(this, ye, void 0);
            P(this, An, void 0);
            P(this, kt, void 0);
            T(this, kt, !1), T(this, An, t.defaultOptions), this.setOptions(t.options), this.observers = [], T(this, Me, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, T(this, Gt, t.state || hc(this.options)), this.state = y(this, Gt), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        setOptions(t) {
            this.options = { ...y(this, An),
                ...t
            }, this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && y(this, Me).remove(this)
        }
        setData(t, n) {
            const r = Wr(this.state.data, t, this.options);
            return V(this, Fe, Ge).call(this, {
                data: r,
                type: "success",
                dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                manual: n == null ? void 0 : n.manual
            }), r
        }
        setState(t, n) {
            V(this, Fe, Ge).call(this, {
                type: "setState",
                state: t,
                setStateOptions: n
            })
        }
        cancel(t) {
            var r, s;
            const n = (r = y(this, ye)) == null ? void 0 : r.promise;
            return (s = y(this, ye)) == null || s.cancel(t), n ? n.then(Ee).catch(Ee) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(y(this, Gt))
        }
        isActive() {
            return this.observers.some(t => t.options.enabled !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 && !this.isActive()
        }
        isStale() {
            return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
        }
        isStaleByTime(t = 0) {
            return this.state.isInvalidated || this.state.data === void 0 || !_a(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = y(this, ye)) == null || n.continue()
        }
        onOnline() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnReconnect());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = y(this, ye)) == null || n.continue()
        }
        addObserver(t) {
            this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), y(this, Me).notify({
                type: "observerAdded",
                query: this,
                observer: t
            }))
        }
        removeObserver(t) {
            this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (y(this, ye) && (y(this, kt) ? y(this, ye).cancel({
                revert: !0
            }) : y(this, ye).cancelRetry()), this.scheduleGc()), y(this, Me).notify({
                type: "observerRemoved",
                query: this,
                observer: t
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || V(this, Fe, Ge).call(this, {
                type: "invalidate"
            })
        }
        fetch(t, n) {
            var c, l, d;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (y(this, ye)) return y(this, ye).continueRetry(), y(this, ye).promise
            }
            if (t && this.setOptions(t), !this.options.queryFn) {
                const h = this.observers.find(f => f.options.queryFn);
                h && this.setOptions(h.options)
            }
            const r = new AbortController,
                s = {
                    queryKey: this.queryKey,
                    meta: this.meta
                },
                i = h => {
                    Object.defineProperty(h, "signal", {
                        enumerable: !0,
                        get: () => (T(this, kt, !0), r.signal)
                    })
                };
            i(s);
            const o = () => !this.options.queryFn || this.options.queryFn === Es ? Promise.reject(new Error(`Missing queryFn: '${this.options.queryHash}'`)) : (T(this, kt, !1), this.options.persister ? this.options.persister(this.options.queryFn, s, this) : this.options.queryFn(s)),
                a = {
                    fetchOptions: n,
                    options: this.options,
                    queryKey: this.queryKey,
                    state: this.state,
                    fetchFn: o
                };
            i(a), (c = this.options.behavior) == null || c.onFetch(a, this), T(this, qt, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((l = a.fetchOptions) == null ? void 0 : l.meta)) && V(this, Fe, Ge).call(this, {
                type: "fetch",
                meta: (d = a.fetchOptions) == null ? void 0 : d.meta
            });
            const u = h => {
                var f, g, p, _;
                Pr(h) && h.silent || V(this, Fe, Ge).call(this, {
                    type: "error",
                    error: h
                }), Pr(h) || ((g = (f = y(this, Me).config).onError) == null || g.call(f, h, this), (_ = (p = y(this, Me).config).onSettled) == null || _.call(p, this.state.data, h, this)), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
            };
            return T(this, ye, wa({
                fn: a.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: h => {
                    var f, g, p, _;
                    if (h === void 0) {
                        u(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    this.setData(h), (g = (f = y(this, Me).config).onSuccess) == null || g.call(f, h, this), (_ = (p = y(this, Me).config).onSettled) == null || _.call(p, h, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                },
                onError: u,
                onFail: (h, f) => {
                    V(this, Fe, Ge).call(this, {
                        type: "failed",
                        failureCount: h,
                        error: f
                    })
                },
                onPause: () => {
                    V(this, Fe, Ge).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    V(this, Fe, Ge).call(this, {
                        type: "continue"
                    })
                },
                retry: a.options.retry,
                retryDelay: a.options.retryDelay,
                networkMode: a.options.networkMode,
                canRun: () => !0
            })), y(this, ye).start()
        }
    }, Gt = new WeakMap, qt = new WeakMap, Me = new WeakMap, ye = new WeakMap, An = new WeakMap, kt = new WeakMap, Fe = new WeakSet, Ge = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        fetchFailureCount: t.failureCount,
                        fetchFailureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...r,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...r,
                        ...Sa(r.data, this.options),
                        fetchMeta: t.meta ? ? null
                    };
                case "success":
                    return { ...r,
                        data: t.data,
                        dataUpdateCount: r.dataUpdateCount + 1,
                        dataUpdatedAt: t.dataUpdatedAt ? ? Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success",
                        ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    const s = t.error;
                    return Pr(s) && s.revert && y(this, qt) ? { ...y(this, qt),
                        fetchStatus: "idle"
                    } : { ...r,
                        error: s,
                        errorUpdateCount: r.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: r.fetchFailureCount + 1,
                        fetchFailureReason: s,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...r,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...r,
                        ...t.state
                    }
            }
        };
        this.state = n(this.state), ae.batch(() => {
            this.observers.forEach(r => {
                r.onQueryUpdate()
            }), y(this, Me).notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }, Yo);

function Sa(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: ba(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function hc(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Oe, Zo, mc = (Zo = class extends rn {
        constructor(t = {}) {
            super();
            P(this, Oe, void 0);
            this.config = t, T(this, Oe, new Map)
        }
        build(t, n, r) {
            const s = n.queryKey,
                i = n.queryHash ? ? Ms(s, n);
            let o = this.get(i);
            return o || (o = new dc({
                cache: this,
                queryKey: s,
                queryHash: i,
                options: t.defaultQueryOptions(n),
                state: r,
                defaultOptions: t.getQueryDefaults(s)
            }), this.add(o)), o
        }
        add(t) {
            y(this, Oe).has(t.queryHash) || (y(this, Oe).set(t.queryHash, t), this.notify({
                type: "added",
                query: t
            }))
        }
        remove(t) {
            const n = y(this, Oe).get(t.queryHash);
            n && (t.destroy(), n === t && y(this, Oe).delete(t.queryHash), this.notify({
                type: "removed",
                query: t
            }))
        }
        clear() {
            ae.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        get(t) {
            return y(this, Oe).get(t)
        }
        getAll() {
            return [...y(this, Oe).values()]
        }
        find(t) {
            const n = {
                exact: !0,
                ...t
            };
            return this.getAll().find(r => wi(n, r))
        }
        findAll(t = {}) {
            const n = this.getAll();
            return Object.keys(t).length > 0 ? n.filter(r => wi(t, r)) : n
        }
        notify(t) {
            ae.batch(() => {
                this.listeners.forEach(n => {
                    n(t)
                })
            })
        }
        onFocus() {
            ae.batch(() => {
                this.getAll().forEach(t => {
                    t.onFocus()
                })
            })
        }
        onOnline() {
            ae.batch(() => {
                this.getAll().forEach(t => {
                    t.onOnline()
                })
            })
        }
    }, Oe = new WeakMap, Zo),
    Ne, _e, Tt, Be, Xe, Xo, fc = (Xo = class extends Aa {
        constructor(t) {
            super();
            P(this, Be);
            P(this, Ne, void 0);
            P(this, _e, void 0);
            P(this, Tt, void 0);
            this.mutationId = t.mutationId, T(this, _e, t.mutationCache), T(this, Ne, []), this.state = t.state || Ca(), this.setOptions(t.options), this.scheduleGc()
        }
        setOptions(t) {
            this.options = t, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            y(this, Ne).includes(t) || (y(this, Ne).push(t), this.clearGcTimeout(), y(this, _e).notify({
                type: "observerAdded",
                mutation: this,
                observer: t
            }))
        }
        removeObserver(t) {
            T(this, Ne, y(this, Ne).filter(n => n !== t)), this.scheduleGc(), y(this, _e).notify({
                type: "observerRemoved",
                mutation: this,
                observer: t
            })
        }
        optionalRemove() {
            y(this, Ne).length || (this.state.status === "pending" ? this.scheduleGc() : y(this, _e).remove(this))
        }
        continue () {
            var t;
            return ((t = y(this, Tt)) == null ? void 0 : t.continue()) ? ? this.execute(this.state.variables)
        }
        async execute(t) {
            var s, i, o, a, u, c, l, d, h, f, g, p, _, v, w, b, A, k, C, U;
            T(this, Tt, wa({
                fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
                onFail: (S, F) => {
                    V(this, Be, Xe).call(this, {
                        type: "failed",
                        failureCount: S,
                        error: F
                    })
                },
                onPause: () => {
                    V(this, Be, Xe).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    V(this, Be, Xe).call(this, {
                        type: "continue"
                    })
                },
                retry: this.options.retry ? ? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => y(this, _e).canRun(this)
            }));
            const n = this.state.status === "pending",
                r = !y(this, Tt).canStart();
            try {
                if (!n) {
                    V(this, Be, Xe).call(this, {
                        type: "pending",
                        variables: t,
                        isPaused: r
                    }), await ((i = (s = y(this, _e).config).onMutate) == null ? void 0 : i.call(s, t, this));
                    const F = await ((a = (o = this.options).onMutate) == null ? void 0 : a.call(o, t));
                    F !== this.state.context && V(this, Be, Xe).call(this, {
                        type: "pending",
                        context: F,
                        variables: t,
                        isPaused: r
                    })
                }
                const S = await y(this, Tt).start();
                return await ((c = (u = y(this, _e).config).onSuccess) == null ? void 0 : c.call(u, S, t, this.state.context, this)), await ((d = (l = this.options).onSuccess) == null ? void 0 : d.call(l, S, t, this.state.context)), await ((f = (h = y(this, _e).config).onSettled) == null ? void 0 : f.call(h, S, null, this.state.variables, this.state.context, this)), await ((p = (g = this.options).onSettled) == null ? void 0 : p.call(g, S, null, t, this.state.context)), V(this, Be, Xe).call(this, {
                    type: "success",
                    data: S
                }), S
            } catch (S) {
                try {
                    throw await ((v = (_ = y(this, _e).config).onError) == null ? void 0 : v.call(_, S, t, this.state.context, this)), await ((b = (w = this.options).onError) == null ? void 0 : b.call(w, S, t, this.state.context)), await ((k = (A = y(this, _e).config).onSettled) == null ? void 0 : k.call(A, void 0, S, this.state.variables, this.state.context, this)), await ((U = (C = this.options).onSettled) == null ? void 0 : U.call(C, void 0, S, t, this.state.context)), S
                } finally {
                    V(this, Be, Xe).call(this, {
                        type: "error",
                        error: S
                    })
                }
            } finally {
                y(this, _e).runNext(this)
            }
        }
    }, Ne = new WeakMap, _e = new WeakMap, Tt = new WeakMap, Be = new WeakSet, Xe = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        failureCount: t.failureCount,
                        failureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        isPaused: !0
                    };
                case "continue":
                    return { ...r,
                        isPaused: !1
                    };
                case "pending":
                    return { ...r,
                        context: t.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: t.isPaused,
                        status: "pending",
                        variables: t.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return { ...r,
                        data: t.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...r,
                        data: void 0,
                        error: t.error,
                        failureCount: r.failureCount + 1,
                        failureReason: t.error,
                        isPaused: !1,
                        status: "error"
                    }
            }
        };
        this.state = n(this.state), ae.batch(() => {
            y(this, Ne).forEach(r => {
                r.onMutationUpdate(t)
            }), y(this, _e).notify({
                mutation: this,
                type: "updated",
                action: t
            })
        })
    }, Xo);

function Ca() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Ce, Sn, ea, pc = (ea = class extends rn {
    constructor(t = {}) {
        super();
        P(this, Ce, void 0);
        P(this, Sn, void 0);
        this.config = t, T(this, Ce, new Map), T(this, Sn, Date.now())
    }
    build(t, n, r) {
        const s = new fc({
            mutationCache: this,
            mutationId: ++Kn(this, Sn)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(s), s
    }
    add(t) {
        const n = qn(t),
            r = y(this, Ce).get(n) ? ? [];
        r.push(t), y(this, Ce).set(n, r), this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        var r;
        const n = qn(t);
        if (y(this, Ce).has(n)) {
            const s = (r = y(this, Ce).get(n)) == null ? void 0 : r.filter(i => i !== t);
            s && (s.length === 0 ? y(this, Ce).delete(n) : y(this, Ce).set(n, s))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        var r;
        const n = (r = y(this, Ce).get(qn(t))) == null ? void 0 : r.find(s => s.state.status === "pending");
        return !n || n === t
    }
    runNext(t) {
        var r;
        const n = (r = y(this, Ce).get(qn(t))) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
        return (n == null ? void 0 : n.continue()) ? ? Promise.resolve()
    }
    clear() {
        ae.batch(() => {
            this.getAll().forEach(t => {
                this.remove(t)
            })
        })
    }
    getAll() {
        return [...y(this, Ce).values()].flat()
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Ai(n, r))
    }
    findAll(t = {}) {
        return this.getAll().filter(n => Ai(t, n))
    }
    notify(t) {
        ae.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            })
        })
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return ae.batch(() => Promise.all(t.map(n => n.continue().catch(Ee))))
    }
}, Ce = new WeakMap, Sn = new WeakMap, ea);

function qn(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ? ? String(e.mutationId)
}

function Qr(e) {
    return {
        onFetch: (t, n) => {
            const r = async () => {
                var g, p, _, v, w;
                const s = t.options,
                    i = (_ = (p = (g = t.fetchOptions) == null ? void 0 : g.meta) == null ? void 0 : p.fetchMore) == null ? void 0 : _.direction,
                    o = ((v = t.state.data) == null ? void 0 : v.pages) || [],
                    a = ((w = t.state.data) == null ? void 0 : w.pageParams) || [],
                    u = {
                        pages: [],
                        pageParams: []
                    };
                let c = !1;
                const l = b => {
                        Object.defineProperty(b, "signal", {
                            enumerable: !0,
                            get: () => (t.signal.aborted ? c = !0 : t.signal.addEventListener("abort", () => {
                                c = !0
                            }), t.signal)
                        })
                    },
                    d = t.options.queryFn && t.options.queryFn !== Es ? t.options.queryFn : () => Promise.reject(new Error(`Missing queryFn: '${t.options.queryHash}'`)),
                    h = async (b, A, k) => {
                        if (c) return Promise.reject();
                        if (A == null && b.pages.length) return Promise.resolve(b);
                        const C = {
                            queryKey: t.queryKey,
                            pageParam: A,
                            direction: k ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        l(C);
                        const U = await d(C),
                            {
                                maxPages: S
                            } = t.options,
                            F = k ? oc : ic;
                        return {
                            pages: F(b.pages, U, S),
                            pageParams: F(b.pageParams, A, S)
                        }
                    };
                let f;
                if (i && o.length) {
                    const b = i === "backward",
                        A = b ? ka : Jr,
                        k = {
                            pages: o,
                            pageParams: a
                        },
                        C = A(s, k);
                    f = await h(k, C, b)
                } else {
                    f = await h(u, a[0] ? ? s.initialPageParam);
                    const b = e ? ? o.length;
                    for (let A = 1; A < b; A++) {
                        const k = Jr(s, f);
                        f = await h(f, k)
                    }
                }
                return f
            };
            t.options.persister ? t.fetchFn = () => {
                var s, i;
                return (i = (s = t.options).persister) == null ? void 0 : i.call(s, r, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            } : t.fetchFn = r
        }
    }
}

function Jr(e, {
    pages: t,
    pageParams: n
}) {
    const r = t.length - 1;
    return e.getNextPageParam(t[r], t, n[r], n)
}

function ka(e, {
    pages: t,
    pageParams: n
}) {
    var r;
    return (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n)
}

function gc(e, t) {
    return t ? Jr(e, t) != null : !1
}

function yc(e, t) {
    return !t || !e.getPreviousPageParam ? !1 : ka(e, t) != null
}
var te, st, it, Ht, zt, ot, Wt, Qt, ta, _c = (ta = class {
        constructor(e = {}) {
            P(this, te, void 0);
            P(this, st, void 0);
            P(this, it, void 0);
            P(this, Ht, void 0);
            P(this, zt, void 0);
            P(this, ot, void 0);
            P(this, Wt, void 0);
            P(this, Qt, void 0);
            T(this, te, e.queryCache || new mc), T(this, st, e.mutationCache || new pc), T(this, it, e.defaultOptions || {}), T(this, Ht, new Map), T(this, zt, new Map), T(this, ot, 0)
        }
        mount() {
            Kn(this, ot)._++, y(this, ot) === 1 && (T(this, Wt, Rs.subscribe(async e => {
                e && (await this.resumePausedMutations(), y(this, te).onFocus())
            })), T(this, Qt, sr.subscribe(async e => {
                e && (await this.resumePausedMutations(), y(this, te).onOnline())
            })))
        }
        unmount() {
            var e, t;
            Kn(this, ot)._--, y(this, ot) === 0 && ((e = y(this, Wt)) == null || e.call(this), T(this, Wt, void 0), (t = y(this, Qt)) == null || t.call(this), T(this, Qt, void 0))
        }
        isFetching(e) {
            return y(this, te).findAll({ ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return y(this, st).findAll({ ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = y(this, te).get(t.queryHash)) == null ? void 0 : n.state.data
        }
        ensureQueryData(e) {
            const t = this.getQueryData(e.queryKey);
            if (t === void 0) return this.fetchQuery(e); {
                const n = this.defaultQueryOptions(e),
                    r = y(this, te).build(this, n);
                return e.revalidateIfStale && r.isStaleByTime(n.staleTime) && this.prefetchQuery(n), Promise.resolve(t)
            }
        }
        getQueriesData(e) {
            return y(this, te).findAll(e).map(({
                queryKey: t,
                state: n
            }) => {
                const r = n.data;
                return [t, r]
            })
        }
        setQueryData(e, t, n) {
            const r = this.defaultQueryOptions({
                    queryKey: e
                }),
                s = y(this, te).get(r.queryHash),
                i = s == null ? void 0 : s.state.data,
                o = rc(t, i);
            if (o !== void 0) return y(this, te).build(this, r).setData(o, { ...n,
                manual: !0
            })
        }
        setQueriesData(e, t, n) {
            return ae.batch(() => y(this, te).findAll(e).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, t, n)]))
        }
        getQueryState(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = y(this, te).get(t.queryHash)) == null ? void 0 : n.state
        }
        removeQueries(e) {
            const t = y(this, te);
            ae.batch(() => {
                t.findAll(e).forEach(n => {
                    t.remove(n)
                })
            })
        }
        resetQueries(e, t) {
            const n = y(this, te),
                r = {
                    type: "active",
                    ...e
                };
            return ae.batch(() => (n.findAll(e).forEach(s => {
                s.reset()
            }), this.refetchQueries(r, t)))
        }
        cancelQueries(e = {}, t = {}) {
            const n = {
                    revert: !0,
                    ...t
                },
                r = ae.batch(() => y(this, te).findAll(e).map(s => s.cancel(n)));
            return Promise.all(r).then(Ee).catch(Ee)
        }
        invalidateQueries(e = {}, t = {}) {
            return ae.batch(() => {
                if (y(this, te).findAll(e).forEach(r => {
                        r.invalidate()
                    }), e.refetchType === "none") return Promise.resolve();
                const n = { ...e,
                    type: e.refetchType ? ? e.type ? ? "active"
                };
                return this.refetchQueries(n, t)
            })
        }
        refetchQueries(e = {}, t) {
            const n = { ...t,
                    cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ? ? !0
                },
                r = ae.batch(() => y(this, te).findAll(e).filter(s => !s.isDisabled()).map(s => {
                    let i = s.fetch(void 0, n);
                    return n.throwOnError || (i = i.catch(Ee)), s.state.fetchStatus === "paused" ? Promise.resolve() : i
                }));
            return Promise.all(r).then(Ee)
        }
        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const n = y(this, te).build(this, t);
            return n.isStaleByTime(t.staleTime) ? n.fetch(t) : Promise.resolve(n.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(Ee).catch(Ee)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = Qr(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(Ee).catch(Ee)
        }
        resumePausedMutations() {
            return sr.isOnline() ? y(this, st).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return y(this, te)
        }
        getMutationCache() {
            return y(this, st)
        }
        getDefaultOptions() {
            return y(this, it)
        }
        setDefaultOptions(e) {
            T(this, it, e)
        }
        setQueryDefaults(e, t) {
            y(this, Ht).set(Ft(e), {
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            const t = [...y(this, Ht).values()];
            let n = {};
            return t.forEach(r => {
                yn(e, r.queryKey) && (n = { ...n,
                    ...r.defaultOptions
                })
            }), n
        }
        setMutationDefaults(e, t) {
            y(this, zt).set(Ft(e), {
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            const t = [...y(this, zt).values()];
            let n = {};
            return t.forEach(r => {
                yn(e, r.mutationKey) && (n = { ...n,
                    ...r.defaultOptions
                })
            }), n
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = { ...y(this, it).queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash || (t.queryHash = Ms(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === Es && (t.enabled = !1), t
        }
        defaultMutationOptions(e) {
            return e != null && e._defaulted ? e : { ...y(this, it).mutations,
                ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted: !0
            }
        }
        clear() {
            y(this, te).clear(), y(this, st).clear()
        }
    }, te = new WeakMap, st = new WeakMap, it = new WeakMap, Ht = new WeakMap, zt = new WeakMap, ot = new WeakMap, Wt = new WeakMap, Qt = new WeakMap, ta),
    we, Q, Cn, ve, Pt, Jt, Le, kn, Yt, Zt, jt, Mt, at, Xt, Et, dn, Tn, Yr, Pn, Zr, jn, Xr, Mn, es, En, ts, Rn, ns, Fn, rs, hr, Pa, na, Ta = (na = class extends rn {
        constructor(t, n) {
            super();
            P(this, Et);
            P(this, Tn);
            P(this, Pn);
            P(this, jn);
            P(this, Mn);
            P(this, En);
            P(this, Rn);
            P(this, Fn);
            P(this, hr);
            P(this, we, void 0);
            P(this, Q, void 0);
            P(this, Cn, void 0);
            P(this, ve, void 0);
            P(this, Pt, void 0);
            P(this, Jt, void 0);
            P(this, Le, void 0);
            P(this, kn, void 0);
            P(this, Yt, void 0);
            P(this, Zt, void 0);
            P(this, jt, void 0);
            P(this, Mt, void 0);
            P(this, at, void 0);
            P(this, Xt, new Set);
            this.options = n, T(this, we, t), T(this, Le, null), this.bindMethods(), this.setOptions(n)
        }
        bindMethods() {
            this.refetch = this.refetch.bind(this)
        }
        onSubscribe() {
            this.listeners.size === 1 && (y(this, Q).addObserver(this), ki(y(this, Q), this.options) ? V(this, Et, dn).call(this) : this.updateResult(), V(this, Mn, es).call(this))
        }
        onUnsubscribe() {
            this.hasListeners() || this.destroy()
        }
        shouldFetchOnReconnect() {
            return ss(y(this, Q), this.options, this.options.refetchOnReconnect)
        }
        shouldFetchOnWindowFocus() {
            return ss(y(this, Q), this.options, this.options.refetchOnWindowFocus)
        }
        destroy() {
            this.listeners = new Set, V(this, En, ts).call(this), V(this, Rn, ns).call(this), y(this, Q).removeObserver(this)
        }
        setOptions(t, n) {
            const r = this.options,
                s = y(this, Q);
            if (this.options = y(this, we).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean") throw new Error("Expected enabled to be a boolean");
            V(this, Fn, rs).call(this), y(this, Q).setOptions(this.options), r._defaulted && !rr(this.options, r) && y(this, we).getQueryCache().notify({
                type: "observerOptionsUpdated",
                query: y(this, Q),
                observer: this
            });
            const i = this.hasListeners();
            i && Ti(y(this, Q), s, this.options, r) && V(this, Et, dn).call(this), this.updateResult(n), i && (y(this, Q) !== s || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && V(this, Tn, Yr).call(this);
            const o = V(this, Pn, Zr).call(this);
            i && (y(this, Q) !== s || this.options.enabled !== r.enabled || o !== y(this, at)) && V(this, jn, Xr).call(this, o)
        }
        getOptimisticResult(t) {
            const n = y(this, we).getQueryCache().build(y(this, we), t),
                r = this.createResult(n, t);
            return bc(this, r) && (T(this, ve, r), T(this, Jt, this.options), T(this, Pt, y(this, Q).state)), r
        }
        getCurrentResult() {
            return y(this, ve)
        }
        trackResult(t, n) {
            const r = {};
            return Object.keys(t).forEach(s => {
                Object.defineProperty(r, s, {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (this.trackProp(s), n == null || n(s), t[s])
                })
            }), r
        }
        trackProp(t) {
            y(this, Xt).add(t)
        }
        getCurrentQuery() {
            return y(this, Q)
        }
        refetch({ ...t
        } = {}) {
            return this.fetch({ ...t
            })
        }
        fetchOptimistic(t) {
            const n = y(this, we).defaultQueryOptions(t),
                r = y(this, we).getQueryCache().build(y(this, we), n);
            return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, n))
        }
        fetch(t) {
            return V(this, Et, dn).call(this, { ...t,
                cancelRefetch: t.cancelRefetch ? ? !0
            }).then(() => (this.updateResult(), y(this, ve)))
        }
        createResult(t, n) {
            var U;
            const r = y(this, Q),
                s = this.options,
                i = y(this, ve),
                o = y(this, Pt),
                a = y(this, Jt),
                c = t !== r ? t.state : y(this, Cn),
                {
                    state: l
                } = t;
            let d = { ...l
                },
                h = !1,
                f;
            if (n._optimisticResults) {
                const S = this.hasListeners(),
                    F = !S && ki(t, n),
                    H = S && Ti(t, r, n, s);
                (F || H) && (d = { ...d,
                    ...Sa(l.data, t.options)
                }), n._optimisticResults === "isRestoring" && (d.fetchStatus = "idle")
            }
            let {
                error: g,
                errorUpdatedAt: p,
                status: _
            } = d;
            if (n.select && d.data !== void 0)
                if (i && d.data === (o == null ? void 0 : o.data) && n.select === y(this, kn)) f = y(this, Yt);
                else try {
                    T(this, kn, n.select), f = n.select(d.data), f = Wr(i == null ? void 0 : i.data, f, n), T(this, Yt, f), T(this, Le, null)
                } catch (S) {
                    T(this, Le, S)
                } else f = d.data;
            if (n.placeholderData !== void 0 && f === void 0 && _ === "pending") {
                let S;
                if (i != null && i.isPlaceholderData && n.placeholderData === (a == null ? void 0 : a.placeholderData)) S = i.data;
                else if (S = typeof n.placeholderData == "function" ? n.placeholderData((U = y(this, Zt)) == null ? void 0 : U.state.data, y(this, Zt)) : n.placeholderData, n.select && S !== void 0) try {
                    S = n.select(S), T(this, Le, null)
                } catch (F) {
                    T(this, Le, F)
                }
                S !== void 0 && (_ = "success", f = Wr(i == null ? void 0 : i.data, S, n), h = !0)
            }
            y(this, Le) && (g = y(this, Le), f = y(this, Yt), p = Date.now(), _ = "error");
            const v = d.fetchStatus === "fetching",
                w = _ === "pending",
                b = _ === "error",
                A = w && v,
                k = f !== void 0;
            return {
                status: _,
                fetchStatus: d.fetchStatus,
                isPending: w,
                isSuccess: _ === "success",
                isError: b,
                isInitialLoading: A,
                isLoading: A,
                data: f,
                dataUpdatedAt: d.dataUpdatedAt,
                error: g,
                errorUpdatedAt: p,
                failureCount: d.fetchFailureCount,
                failureReason: d.fetchFailureReason,
                errorUpdateCount: d.errorUpdateCount,
                isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
                isFetchedAfterMount: d.dataUpdateCount > c.dataUpdateCount || d.errorUpdateCount > c.errorUpdateCount,
                isFetching: v,
                isRefetching: v && !w,
                isLoadingError: b && !k,
                isPaused: d.fetchStatus === "paused",
                isPlaceholderData: h,
                isRefetchError: b && k,
                isStale: Fs(t, n),
                refetch: this.refetch
            }
        }
        updateResult(t) {
            const n = y(this, ve),
                r = this.createResult(y(this, Q), this.options);
            if (T(this, Pt, y(this, Q).state), T(this, Jt, this.options), y(this, Pt).data !== void 0 && T(this, Zt, y(this, Q)), rr(r, n)) return;
            T(this, ve, r);
            const s = {},
                i = () => {
                    if (!n) return !0;
                    const {
                        notifyOnChangeProps: o
                    } = this.options, a = typeof o == "function" ? o() : o;
                    if (a === "all" || !a && !y(this, Xt).size) return !0;
                    const u = new Set(a ? ? y(this, Xt));
                    return this.options.throwOnError && u.add("error"), Object.keys(y(this, ve)).some(c => {
                        const l = c;
                        return y(this, ve)[l] !== n[l] && u.has(l)
                    })
                };
            (t == null ? void 0 : t.listeners) !== !1 && i() && (s.listeners = !0), V(this, hr, Pa).call(this, { ...s,
                ...t
            })
        }
        onQueryUpdate() {
            this.updateResult(), this.hasListeners() && V(this, Mn, es).call(this)
        }
    }, we = new WeakMap, Q = new WeakMap, Cn = new WeakMap, ve = new WeakMap, Pt = new WeakMap, Jt = new WeakMap, Le = new WeakMap, kn = new WeakMap, Yt = new WeakMap, Zt = new WeakMap, jt = new WeakMap, Mt = new WeakMap, at = new WeakMap, Xt = new WeakMap, Et = new WeakSet, dn = function(t) {
        V(this, Fn, rs).call(this);
        let n = y(this, Q).fetch(this.options, t);
        return t != null && t.throwOnError || (n = n.catch(Ee)), n
    }, Tn = new WeakSet, Yr = function() {
        if (V(this, En, ts).call(this), tn || y(this, ve).isStale || !Hr(this.options.staleTime)) return;
        const n = _a(y(this, ve).dataUpdatedAt, this.options.staleTime) + 1;
        T(this, jt, setTimeout(() => {
            y(this, ve).isStale || this.updateResult()
        }, n))
    }, Pn = new WeakSet, Zr = function() {
        return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(y(this, Q)) : this.options.refetchInterval) ? ? !1
    }, jn = new WeakSet, Xr = function(t) {
        V(this, Rn, ns).call(this), T(this, at, t), !(tn || this.options.enabled === !1 || !Hr(y(this, at)) || y(this, at) === 0) && T(this, Mt, setInterval(() => {
            (this.options.refetchIntervalInBackground || Rs.isFocused()) && V(this, Et, dn).call(this)
        }, y(this, at)))
    }, Mn = new WeakSet, es = function() {
        V(this, Tn, Yr).call(this), V(this, jn, Xr).call(this, V(this, Pn, Zr).call(this))
    }, En = new WeakSet, ts = function() {
        y(this, jt) && (clearTimeout(y(this, jt)), T(this, jt, void 0))
    }, Rn = new WeakSet, ns = function() {
        y(this, Mt) && (clearInterval(y(this, Mt)), T(this, Mt, void 0))
    }, Fn = new WeakSet, rs = function() {
        const t = y(this, we).getQueryCache().build(y(this, we), this.options);
        if (t === y(this, Q)) return;
        const n = y(this, Q);
        T(this, Q, t), T(this, Cn, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this))
    }, hr = new WeakSet, Pa = function(t) {
        ae.batch(() => {
            t.listeners && this.listeners.forEach(n => {
                n(y(this, ve))
            }), y(this, we).getQueryCache().notify({
                query: y(this, Q),
                type: "observerResultsUpdated"
            })
        })
    }, na);

function vc(e, t) {
    return t.enabled !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1)
}

function ki(e, t) {
    return vc(e, t) || e.state.data !== void 0 && ss(e, t, t.refetchOnMount)
}

function ss(e, t, n) {
    if (t.enabled !== !1) {
        const r = typeof n == "function" ? n(e) : n;
        return r === "always" || r !== !1 && Fs(e, t)
    }
    return !1
}

function Ti(e, t, n, r) {
    return (e !== t || r.enabled === !1) && (!n.suspense || e.state.status !== "error") && Fs(e, n)
}

function Fs(e, t) {
    return t.enabled !== !1 && e.isStaleByTime(t.staleTime)
}

function bc(e, t) {
    return !rr(e.getCurrentResult(), t)
}
var xc = class extends Ta {
        constructor(e, t) {
            super(e, t)
        }
        bindMethods() {
            super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
        }
        setOptions(e, t) {
            super.setOptions({ ...e,
                behavior: Qr()
            }, t)
        }
        getOptimisticResult(e) {
            return e.behavior = Qr(), super.getOptimisticResult(e)
        }
        fetchNextPage(e) {
            return this.fetch({ ...e,
                meta: {
                    fetchMore: {
                        direction: "forward"
                    }
                }
            })
        }
        fetchPreviousPage(e) {
            return this.fetch({ ...e,
                meta: {
                    fetchMore: {
                        direction: "backward"
                    }
                }
            })
        }
        createResult(e, t) {
            var g, p;
            const {
                state: n
            } = e, r = super.createResult(e, t), {
                isFetching: s,
                isRefetching: i,
                isError: o,
                isRefetchError: a
            } = r, u = (p = (g = n.fetchMeta) == null ? void 0 : g.fetchMore) == null ? void 0 : p.direction, c = o && u === "forward", l = s && u === "forward", d = o && u === "backward", h = s && u === "backward";
            return { ...r,
                fetchNextPage: this.fetchNextPage,
                fetchPreviousPage: this.fetchPreviousPage,
                hasNextPage: gc(t, n.data),
                hasPreviousPage: yc(t, n.data),
                isFetchNextPageError: c,
                isFetchingNextPage: l,
                isFetchPreviousPageError: d,
                isFetchingPreviousPage: h,
                isRefetchError: a && !c && !d,
                isRefetching: i && !l && !h
            }
        }
    },
    ut, lt, Ae, qe, en, Zn, Dn, is, ra, wc = (ra = class extends rn {
        constructor(t, n) {
            super();
            P(this, en);
            P(this, Dn);
            P(this, ut, void 0);
            P(this, lt, void 0);
            P(this, Ae, void 0);
            P(this, qe, void 0);
            T(this, ut, t), this.setOptions(n), this.bindMethods(), V(this, en, Zn).call(this)
        }
        bindMethods() {
            this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
        }
        setOptions(t) {
            var r;
            const n = this.options;
            this.options = y(this, ut).defaultMutationOptions(t), rr(this.options, n) || y(this, ut).getMutationCache().notify({
                type: "observerOptionsUpdated",
                mutation: y(this, Ae),
                observer: this
            }), n != null && n.mutationKey && this.options.mutationKey && Ft(n.mutationKey) !== Ft(this.options.mutationKey) ? this.reset() : ((r = y(this, Ae)) == null ? void 0 : r.state.status) === "pending" && y(this, Ae).setOptions(this.options)
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || (t = y(this, Ae)) == null || t.removeObserver(this)
        }
        onMutationUpdate(t) {
            V(this, en, Zn).call(this), V(this, Dn, is).call(this, t)
        }
        getCurrentResult() {
            return y(this, lt)
        }
        reset() {
            var t;
            (t = y(this, Ae)) == null || t.removeObserver(this), T(this, Ae, void 0), V(this, en, Zn).call(this), V(this, Dn, is).call(this)
        }
        mutate(t, n) {
            var r;
            return T(this, qe, n), (r = y(this, Ae)) == null || r.removeObserver(this), T(this, Ae, y(this, ut).getMutationCache().build(y(this, ut), this.options)), y(this, Ae).addObserver(this), y(this, Ae).execute(t)
        }
    }, ut = new WeakMap, lt = new WeakMap, Ae = new WeakMap, qe = new WeakMap, en = new WeakSet, Zn = function() {
        var n;
        const t = ((n = y(this, Ae)) == null ? void 0 : n.state) ? ? Ca();
        T(this, lt, { ...t,
            isPending: t.status === "pending",
            isSuccess: t.status === "success",
            isError: t.status === "error",
            isIdle: t.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        })
    }, Dn = new WeakSet, is = function(t) {
        ae.batch(() => {
            var n, r, s, i, o, a, u, c;
            if (y(this, qe) && this.hasListeners()) {
                const l = y(this, lt).variables,
                    d = y(this, lt).context;
                (t == null ? void 0 : t.type) === "success" ? ((r = (n = y(this, qe)).onSuccess) == null || r.call(n, t.data, l, d), (i = (s = y(this, qe)).onSettled) == null || i.call(s, t.data, null, l, d)) : (t == null ? void 0 : t.type) === "error" && ((a = (o = y(this, qe)).onError) == null || a.call(o, t.error, l, d), (c = (u = y(this, qe)).onSettled) == null || c.call(u, void 0, t.error, l, d))
            }
            this.listeners.forEach(l => {
                l(y(this, lt))
            })
        })
    }, ra),
    ja = x.createContext(void 0),
    pt = e => {
        const t = x.useContext(ja);
        if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return t
    },
    Ac = ({
        client: e,
        children: t
    }) => (x.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), m.jsx(ja.Provider, {
        value: e,
        children: t
    })),
    Ma = x.createContext(!1),
    Sc = () => x.useContext(Ma);
Ma.Provider;

function Cc() {
    let e = !1;
    return {
        clearReset: () => {
            e = !1
        },
        reset: () => {
            e = !0
        },
        isReset: () => e
    }
}
var kc = x.createContext(Cc()),
    Tc = () => x.useContext(kc);

function Ea(e, t) {
    return typeof e == "function" ? e(...t) : !!e
}

function Pc() {}
var jc = (e, t) => {
        (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1))
    },
    Mc = e => {
        x.useEffect(() => {
            e.clearReset()
        }, [e])
    },
    Ec = ({
        result: e,
        errorResetBoundary: t,
        throwOnError: n,
        query: r
    }) => e.isError && !t.isReset() && !e.isFetching && r && Ea(n, [e.error, r]),
    Rc = e => {
        e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3)
    },
    Fc = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
    Dc = (e, t, n) => t.fetchOptimistic(e).catch(() => {
        n.clearReset()
    });

function Ra(e, t, n) {
    const r = pt(),
        s = Sc(),
        i = Tc(),
        o = r.defaultQueryOptions(e);
    o._optimisticResults = s ? "isRestoring" : "optimistic", Rc(o), jc(o, i), Mc(i);
    const [a] = x.useState(() => new t(r, o)), u = a.getOptimisticResult(o);
    if (x.useSyncExternalStore(x.useCallback(c => {
            const l = s ? () => {} : a.subscribe(ae.batchCalls(c));
            return a.updateResult(), l
        }, [a, s]), () => a.getCurrentResult(), () => a.getCurrentResult()), x.useEffect(() => {
            a.setOptions(o, {
                listeners: !1
            })
        }, [o, a]), Fc(o, u)) throw Dc(o, a, i);
    if (Ec({
            result: u,
            errorResetBoundary: i,
            throwOnError: o.throwOnError,
            query: r.getQueryCache().get(o.queryHash)
        })) throw u.error;
    return o.notifyOnChangeProps ? u : a.trackResult(u)
}

function ne(e, t) {
    return Ra(e, Ta)
}

function re(e, t) {
    const n = pt(),
        [r] = x.useState(() => new wc(n, e));
    x.useEffect(() => {
        r.setOptions(e)
    }, [r, e]);
    const s = x.useSyncExternalStore(x.useCallback(o => r.subscribe(ae.batchCalls(o)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult()),
        i = x.useCallback((o, a) => {
            r.mutate(o, a).catch(Pc)
        }, [r]);
    if (s.error && Ea(r.options.throwOnError, [s.error])) throw s.error;
    return { ...s,
        mutate: i,
        mutateAsync: s.mutate
    }
}

function hg(e, t) {
    return Ra(e, xc)
}
var Oc = e => j(void 0, [e], function*({
        subscriptionId: t,
        lang: n
    }) {
        try {
            const r = `/subscriptions/user_subscriptions/${t}?lang=${n}`;
            return (yield O({
                url: r
            })).data
        } catch (r) {
            throw new D({
                error: r,
                name: "getSubscriptionByIdException",
                context: {
                    tags: {
                        journey: "subscribe"
                    },
                    extra: {
                        subscriptionId: t
                    }
                }
            })
        }
    }),
    mg = e => ne({
        queryKey: ["getSubscriptionById", e],
        queryFn: () => Oc(e)
    }),
    Nc = e => j(void 0, null, function*() {
        var t = e,
            {
                locale: n
            } = t,
            r = Ul(t, ["locale"]);
        try {
            const s = G(n);
            return (yield O({
                url: "/survey/answer",
                options: {
                    method: "POST",
                    body: JSON.stringify(K(M({}, r), {
                        lang: s
                    }))
                }
            })).data
        } catch (s) {
            throw new D({
                error: s,
                name: "answerSurveyException"
            })
        }
    }),
    fg = () => re({
        mutationFn: Nc
    }),
    Bc = e => j(void 0, [e], function*({
        lang: t
    }) {
        try {
            const n = `/survey/questions?lang=${t}&limit=15`;
            return (yield O({
                url: n
            })).data
        } catch (n) {
            throw new D({
                error: n,
                name: "getSurveyException",
                context: {
                    tags: {
                        journey: "survey"
                    }
                }
            })
        }
    }),
    pg = e => ne({
        queryKey: ["getSurvey", e],
        queryFn: () => Bc(e)
    }),
    Te = (e = "unspecific") => j(void 0, null, function*() {
        return new Promise((t, n) => {
            var r, s;
            try {
                if (typeof grecaptcha > "u") return n("Error loading recaptcha, please refresh and try again.");
                if (!((s = (r = N.config) == null ? void 0 : r.grecaptcha) != null && s.v3Key)) return n("No reCAPTCHA v3 key found in config, please follow usage instruction in https://github.com/nadude/webook-frontend/blob/main/packages/api/README.md");
                grecaptcha.ready(() => {
                    var i, o;
                    return grecaptcha.execute(((o = (i = N.config) == null ? void 0 : i.grecaptcha) == null ? void 0 : o.v3Key) || "", {
                        action: e
                    }).then(a => {
                        t(a)
                    })
                })
            } catch (i) {
                console.log(i), n(i)
            }
        })
    }),
    Lc = e => j(void 0, [e], function*({
        otp: t,
        amount: n,
        phone: r,
        email: s
    }) {
        var i;
        try {
            const o = De(s),
                a = yield Te("redeem_qitaf"), u = yield O({
                    url: "/qitaf/redeem-to-wallet",
                    options: {
                        method: "POST",
                        body: JSON.stringify({
                            otp: t,
                            points: n,
                            msisdn: r,
                            signature: o,
                            captcha: a
                        })
                    }
                });
            if (u.status !== "success") throw new Error(((i = u == null ? void 0 : u.error) == null ? void 0 : i.message) || (u == null ? void 0 : u.message) || "Something went wrong");
            return u
        } catch (o) {
            throw new D({
                error: o,
                name: "redeemQitafException",
                context: {
                    tags: {
                        journey: "qitaf"
                    }
                }
            })
        }
    }),
    gg = () => re({
        mutationFn: Lc
    }),
    Vc = e => j(void 0, [e], function*({
        phone: t,
        lang: n,
        email: r
    }) {
        var s;
        try {
            const i = De(r),
                o = yield Te("qitaf_otp"), a = yield O({
                    url: "/qitaf/otp",
                    options: {
                        method: "POST",
                        body: JSON.stringify({
                            msisdn: t,
                            lang: n,
                            signature: i,
                            captcha: o
                        })
                    }
                });
            if (a.status !== "success") throw new Error(((s = a == null ? void 0 : a.error) == null ? void 0 : s.message) || (a == null ? void 0 : a.message) || "Something went wrong");
            return a
        } catch (i) {
            throw new D({
                error: i,
                name: "sendQitafOtp",
                context: {
                    tags: {
                        journey: "qitaf"
                    }
                }
            })
        }
    }),
    yg = () => re({
        mutationFn: Vc
    }),
    Ic = e => j(void 0, null, function*() {
        try {
            const n = `/sevenrooms/availability?${new URLSearchParams(K(M({},e),{party_size:e.party_size.toString()})).toString()}`,
                r = yield O({
                    url: n
                });
            if (r.status !== "success") throw new Error((r == null ? void 0 : r.message) || "Something went wrong");
            return r.data.availability
        } catch (t) {
            throw new D({
                error: t,
                name: "getRestaurantAvailabilityException"
            })
        }
    }),
    _g = (e, t) => ne(M({
        queryKey: ["getRestaurantAvailability", e],
        queryFn: () => Ic(e)
    }, t)),
    Uc = e => j(void 0, [e], function*({
        event_slug: t,
        lang: n
    }) {
        try {
            const s = `/sevenrooms/tables?lang=${G(n)}&event_slug=${t}`,
                i = yield O({
                    url: s
                });
            if (i.status !== "success") throw new Error((i == null ? void 0 : i.message) || "Something went wrong");
            return i.data.tables
        } catch (r) {
            throw new D({
                error: r,
                name: "getRestaurantTablesException"
            })
        }
    }),
    vg = (e, t) => ne(M({
        queryKey: ["getRestaurantTables", e],
        queryFn: () => Uc(e)
    }, t)),
    $c = e => j(void 0, [e], function*({
        memberId: t,
        memberPin: n
    }) {
        try {
            const r = yield O({
                url: "/saudireward/verify",
                options: {
                    method: "POST",
                    body: JSON.stringify({
                        memberId: t,
                        memberPin: n
                    })
                }
            });
            if (r.status !== "success") throw r;
            return K(M({}, r.data), {
                memberPin: n
            })
        } catch (r) {
            throw new D({
                error: r,
                name: "verifySaudiRewardsMemberException"
            })
        }
    }),
    bg = () => re({
        mutationFn: $c
    }),
    Kc = e => j(void 0, null, function*() {
        var t, n;
        try {
            const r = yield Te("interest"), s = yield O({
                url: "/halayalla/booking-interest",
                options: {
                    method: "POST",
                    body: JSON.stringify(K(M({}, e), {
                        captcha: r
                    })),
                    headers: {
                        Authorization: ""
                    }
                }
            });
            if (((t = s == null ? void 0 : s.status) == null ? void 0 : t.toLowerCase()) !== "success") {
                const i = s.error || {},
                    o = typeof i == "string" ? i : (n = Object.values(i)) == null ? void 0 : n[0],
                    a = Array.isArray(o) ? o[0] : o;
                throw new Error(a || "Something went wrong")
            }
        } catch (r) {
            throw new D({
                name: "registerInterestException",
                error: r
            })
        }
    }),
    xg = () => re({
        mutationFn: Kc
    }),
    Gc = e => j(void 0, null, function*() {
        var t, n, r;
        try {
            const s = yield O({
                url: "/subscibe-to-newsletter",
                options: {
                    method: "POST",
                    body: JSON.stringify(e)
                }
            });
            if (((t = s.status) == null ? void 0 : t.toLowerCase()) !== "success") {
                const i = typeof s.message == "string" ? s.message : (r = (n = s == null ? void 0 : s.error) == null ? void 0 : n.email) == null ? void 0 : r[0];
                throw new Error(i || "Something went wrong")
            }
            return s.data
        } catch (s) {
            throw new D({
                error: s,
                name: "subscribeException"
            })
        }
    }),
    wg = () => re({
        mutationFn: Gc
    }),
    qc = e => j(void 0, [e], function*({
        slug: t,
        lang: n
    }) {
        var r, s;
        try {
            const i = G(n);
            return (yield O({
                url: `/organizations/${t}?lang=${i}&visible_in=${(s=(r=N.config)==null?void 0:r.wbk)==null?void 0:s.appSource}`,
                includeAuth: !1
            })).data
        } catch (i) {
            throw new D({
                error: i,
                name: "getOrganizationBySlugException"
            })
        }
    }),
    Ag = (e, t) => ne(M({
        queryKey: ["organizationsBySlug", e],
        queryFn: () => qc(e)
    }, t)),
    Hc = e => j(void 0, [e], function*({
        slug: t,
        lang: n
    }) {
        var r, s;
        try {
            const i = G(n),
                o = yield O({
                    url: `/bundles/${t}?lang=${i}&visible_in=${(s=(r=N.config)==null?void 0:r.wbk)==null?void 0:s.appSource}`,
                    includeAuth: !1
                });
            return K(M({}, o.data), {
                conditions: o.data.conditions.map(a => K(M({}, a), {
                    condition_items: a.condition_items.sort((u, c) => +c.capacity - +u.capacity).map(u => K(M({}, u), {
                        _id: Gl()
                    }))
                }))
            })
        } catch (i) {
            throw new D({
                error: i,
                name: "getPackageBySlugException"
            })
        }
    }),
    Sg = (e, t) => ne(M({
        queryKey: ["getTicketingPackage ", e],
        queryFn: () => Hc(e)
    }, t)),
    zc = e => j(void 0, [e], function*({
        event_id: t,
        season_id: n,
        promo_code: r,
        locale: s
    }) {
        try {
            const i = G(s),
                o = yield Te("promo_code"), a = De(r), u = yield O({
                    url: `/verify-promo-code?lang=${i}`,
                    options: {
                        method: "POST",
                        body: JSON.stringify({
                            lang: i,
                            event_id: t,
                            season_id: n,
                            promo_code: r,
                            captcha: o,
                            signature: a
                        })
                    }
                });
            if (u.status !== "success") throw u;
            return {
                discount: Number(u.promo_code.discount),
                ticket_ids: u.promo_code.tickets || []
            }
        } catch (i) {
            throw new D({
                error: i,
                name: "verifyCouponException"
            })
        }
    }),
    Cg = () => re({
        mutationFn: zc
    }),
    Wc = e => j(void 0, [e], function*({
        slug: t,
        lang: n
    }) {
        var r, s;
        try {
            const i = G(n);
            return (yield O({
                url: `/event-detail/${t}?lang=${i}&visible_in=${(s=(r=N.config)==null?void 0:r.wbk)==null?void 0:s.appSource}`,
                includeAuth: !1
            })).data
        } catch (i) {
            throw new D({
                error: i,
                name: "getEventBySlugException"
            })
        }
    }),
    Qc = e => j(void 0, [e], function*({
        slug: t,
        lang: n
    }) {
        var r, s;
        try {
            const i = G(n);
            return (yield O({
                url: `/event-detail/${t}?lang=${i}&visible_in=${(s=(r=N.config)==null?void 0:r.wbk)==null?void 0:s.appSource}&visibility=private`,
                includeAuth: !1
            })).data
        } catch (i) {
            throw new D({
                error: i,
                name: "getPrivateEventBySlugException"
            })
        }
    }),
    kg = (e, t) => ne(M({
        queryKey: ["getTicketingEvent", e],
        queryFn: () => e.private ? Qc(e) : Wc(e)
    }, t)),
    Jc = e => j(void 0, [e], function*({
        slug: t,
        lang: n
    }) {
        var r, s;
        try {
            const i = G(n);
            return (yield O({
                url: `/events-group/${t}?lang=${i}&visible_in=${(s=(r=N.config)==null?void 0:r.wbk)==null?void 0:s.appSource}`,
                includeAuth: !1
            })).data
        } catch (i) {
            throw new D({
                error: i,
                name: "getEventGroupBySlugException"
            })
        }
    }),
    Tg = (e, t) => ne(M({
        queryKey: ["eventGroupBySlug", e],
        queryFn: () => Jc(e)
    }, t)),
    jr = {},
    Yc = e => j(void 0, [e], function*({
        slug: t,
        day: n
    }) {
        var r, s;
        try {
            if (jr[n]) return jr[n];
            const i = yield O({
                url: `/event-detail/${t}/timeslot-capacity?time_slot=${n}&visible_in=${(s=(r=N.config)==null?void 0:r.wbk)==null?void 0:s.appSource}`,
                includeAuth: !1
            });
            return jr[n] = i.data, i.data
        } catch (i) {
            throw new D({
                error: i,
                name: "getEventSlotsBySlug"
            })
        }
    }),
    Pg = (e, t) => ne(M({
        queryKey: ["getEventSlotsBySlug", e],
        queryFn: () => Yc(e)
    }, t)),
    Zc = e => j(void 0, [e], function*({
        lang: t,
        page: n,
        perPage: r,
        slug: s
    }) {
        var i, o;
        try {
            const a = G(t),
                u = new URLSearchParams;
            u.append("lang", a), u.append("visible_in", ((o = (i = N.config) == null ? void 0 : i.wbk) == null ? void 0 : o.appSource) || ""), u.append("page", (n == null ? void 0 : n.toString()) || "0"), u.append("per_page", (r == null ? void 0 : r.toString()) || "10");
            const c = `/organizations/${s}/events`;
            return (yield O({
                url: `${c}?${decodeURIComponent(u.toString())}`,
                includeAuth: !1
            })).data
        } catch (a) {
            throw new D({
                error: a,
                name: "eventsListByOrganizationSlugException"
            })
        }
    }),
    jg = e => ne({
        queryKey: ["eventsListByOrganizationSlug", e],
        queryFn: () => Zc(e)
    }),
    Xc = e => j(void 0, [e], function*({
        lang: t
    }) {
        try {
            const n = G(t);
            return (yield O({
                url: `/user/booking-history?lang=${n}`
            })).data
        } catch (n) {
            throw new D({
                error: n,
                name: "getBookingsException",
                context: {
                    tags: {
                        journey: "profile"
                    }
                }
            })
        }
    }),
    ed = e => j(void 0, [e], function*({
        lang: t
    }) {
        try {
            const n = G(t);
            return {
                orders: (yield O({
                    url: `/halayalla/booking-history?lang=${n}`
                })).data.map(td),
                seasons: []
            }
        } catch (n) {
            throw new D({
                error: n,
                name: "getHyExperiencesBookings",
                context: {
                    tags: {
                        journey: "profile"
                    }
                }
            })
        }
    }),
    td = e => {
        var t;
        return {
            _id: e._id,
            type: "experience",
            status: (t = e.status) == null ? void 0 : t.toLowerCase(),
            total_price: e.total_price,
            order_date_time: Math.floor(new Date(e.created_at).getTime() / 1e3),
            has_transfered_tickets: !1,
            survey_completed: !0,
            survey_sent: !0,
            event_url: "",
            current_time: 0,
            transfer_count: e.num_of_people,
            event: {
                _id: e.venue_id,
                title: e.venue_name,
                slug: "",
                poster: e.venue_image,
                venue: {
                    city: e.venue_city
                },
                has_timeslots: !0,
                start_date_time: 0,
                end_date_time: 0,
                status: "",
                tbc: !1,
                venue_name: e.venue_name
            },
            total_tickets: e.transaction_products.length,
            tickets: e.time_slots.map(n => ({
                _id: n.id,
                currency: e.currency,
                qty: +n.num_of_people,
                price: n.facility.price_per_slot.toString(),
                vat: n.facility.vat_per_slot.toString(),
                qr_code: "",
                time_slot: {
                    time_to: new Date(+n.time.to * 1e3)
                },
                opentimeslot_end_date: {
                    date: new Date(+n.time.to * 1e3)
                },
                ticket_category: {
                    _id: "",
                    title: n.facility.name,
                    color: ""
                },
                total_price: n.price,
                is_open_timeslot: !1
            })),
            home_team: {
                _id: "",
                name: "",
                logo: ""
            },
            away_team: {
                _id: "",
                name: "",
                logo: ""
            }
        }
    },
    Mg = e => ne({
        queryKey: ["getBookings", e],
        queryFn: () => Xc(e)
    }),
    Eg = e => ne({
        queryKey: ["getHyExperiencesBookings", e],
        queryFn: () => ed(e)
    }),
    nd = e => j(void 0, [e], function*({
        token: t
    }) {
        var n;
        try {
            const r = yield O({
                url: "/validate-token",
                options: {
                    method: "POST",
                    body: JSON.stringify({
                        token: t
                    })
                }
            });
            if (r.status !== "success") throw new Error(((n = r == null ? void 0 : r.error) == null ? void 0 : n.message) || (r == null ? void 0 : r.message) || "Something went wrong");
            return r
        } catch (r) {
            throw new D({
                error: r,
                name: "validateOfflineOrderTokenException",
                context: {
                    tags: {
                        journey: "profile"
                    },
                    extra: {
                        token: t
                    }
                }
            })
        }
    }),
    rd = e => j(void 0, null, function*() {
        try {
            const t = G(e.lang),
                n = yield Te("claimTickets");
            return (yield O({
                url: "/update-user-claim-order",
                options: {
                    method: "POST",
                    body: JSON.stringify(K(M({}, e), {
                        captcha: n,
                        lang: t
                    }))
                }
            })).data
        } catch (t) {
            throw new D({
                error: t,
                name: "claimOfflineOrderAndUpdateUserException",
                context: {
                    tags: {
                        journey: "profile"
                    },
                    extra: K(M({}, e), {
                        password: "__hidden__"
                    })
                }
            })
        }
    }),
    sd = e => j(void 0, null, function*() {
        try {
            return (yield O({
                url: "/claim-order",
                options: {
                    method: "POST",
                    body: JSON.stringify({
                        token: e
                    })
                }
            })).data
        } catch (t) {
            throw new D({
                error: t,
                name: "claimOfflineOrderException",
                context: {
                    tags: {
                        journey: "profile"
                    },
                    extra: {
                        token: e
                    }
                }
            })
        }
    }),
    Rg = () => re({
        mutationFn: nd
    }),
    Fg = () => re({
        mutationFn: rd
    }),
    Dg = () => re({
        mutationFn: sd
    }),
    id = e => j(void 0, [e], function*({
        id: t,
        lang: n = "en",
        type: r = "waiting"
    }) {
        var s, i, o, a, u, c;
        try {
            const l = G(n),
                d = `${(i=(s=N.config)==null?void 0:s.wbk)==null?void 0:i.ticketingDomain}/${n}/payment-success`,
                h = `${(a=(o=N.config)==null?void 0:o.wbk)==null?void 0:a.ticketingDomain}/${n}/payment-failed`,
                g = yield O({
                    url: `${r==="bundle"?"bundles/proceed-waiting-payment":r==="upgrade"?"/proceed-upgrade-payment":"/formula1/proceed-waiting-payment"}/${t}?lang=${l}`,
                    options: {
                        method: "POST",
                        body: JSON.stringify({
                            locale: l,
                            lang: l,
                            redirect: d,
                            redirect_failed: h,
                            booking_source: (c = (u = N.config) == null ? void 0 : u.wbk) == null ? void 0 : c.appSource
                        })
                    }
                });
            return g.summaries ? K(M({}, g.data), {
                summaries: g.summaries
            }) : g.data
        } catch (l) {
            throw new D({
                error: l,
                name: "getGeneratedPaymentException",
                context: {
                    extra: {
                        id: t,
                        type: r
                    },
                    tags: {
                        journey: "checkout"
                    }
                }
            })
        }
    }),
    Og = e => ne({
        queryKey: ["getGeneratedPayment", e],
        queryFn: () => id(e)
    }),
    od = e => j(void 0, [e], function*({
        orderId: t,
        type: n,
        lang: r,
        encoded: s
    }) {
        try {
            const i = G(r),
                o = n === "bundle" ? "bundle" : n === "season" ? "season" : "event";
            let a = `/order/${t}/${o}?lang=${i}`;
            s && (a += "&wbk_session=yes");
            const u = yield O({
                url: a
            });
            return o === "season" ? K(M({}, u.data), {
                summary: u.data.summary.map(c => K(M({}, c), {
                    event: c.season || c.event,
                    tickets_details: c.tickets_details.map(l => K(M({}, l), {
                        event_ticket_id: l.season_ticket_id || l.event_ticket_id,
                        event_ticket_title: l.season_ticket_title || l.event_ticket_title,
                        event_ticket_title_ar: l.season_ticket_title_ar || l.event_ticket_title_ar,
                        event_ticket_title_en: l.season_ticket_title_en || l.event_ticket_title_en
                    })),
                    isSeason: !!c.season
                }))
            }) : u.data
        } catch (i) {
            throw new D({
                error: i,
                name: "getOrderByIdException",
                context: {
                    extra: {
                        orderId: t
                    }
                }
            })
        }
    }),
    ad = e => j(void 0, [e], function*({
        orderId: t,
        lang: n
    }) {
        try {
            const r = G(n),
                s = `/halayalla/booking-detail/${t}?lang=${r}`,
                i = yield O({
                    url: s,
                    options: {
                        method: "POST",
                        body: JSON.stringify({
                            lang: r
                        })
                    }
                });
            return ud(i.data)
        } catch (r) {
            throw new D({
                error: r,
                name: "getHyExperienceOrderByIdException",
                context: {
                    extra: {
                        orderId: t
                    }
                }
            })
        }
    }),
    ud = e => {
        var t, n, r;
        const s = e.venue_details.latlng.split(", ");
        return {
            order_id: e._id,
            booked_type: (t = e.status) == null ? void 0 : t.toLowerCase(),
            type: "experience",
            order_created_at: {
                date: e.created_at,
                timezone: "",
                timezone_type: 0
            },
            promo_code: ((n = e.coupon) == null ? void 0 : n.code) || "",
            user: {
                email: e.customer_email,
                name: e.customer_name,
                phone: e.customer_cell_number
            },
            total: {
                currency: e.currency,
                comission_amount: e.time_slots.reduce((i, o) => i + o.facility.commission_per_slot, 0),
                discount_amount: ((r = e.coupon) == null ? void 0 : r.discounted_amount) || 0,
                sub_total: e.net_price,
                grand_total: e.total_price,
                vat_total: e.vat
            },
            summary: [{
                event: {
                    _id: e.venue_id,
                    title: e.product_name,
                    address: e.venue_details.address,
                    city: e.venue_details.city,
                    venue_name: e.venue_details.name,
                    start_date_time: 0,
                    end_date_time: 0,
                    has_timeslots: !0,
                    venue: {
                        city: e.venue_details.city
                    },
                    location: {
                        lat: s[0],
                        lng: s[1]
                    },
                    poster: e.venue_details.image,
                    slug: e.venue_details.slug,
                    status: "",
                    tags: []
                },
                tickets: e.time_slots.map(i => ({
                    _id: i.id,
                    title: i.facility.name,
                    currency: e.currency,
                    qty: +i.num_of_people,
                    row: i.facility.name,
                    seat: i.facility.description,
                    section: "",
                    price: i.price * +i.num_of_people - i.facility.vat_per_slot * +i.num_of_people,
                    vat: i.facility.vat_per_slot * +i.num_of_people,
                    status: "active"
                })),
                tickets_details: []
            }],
            transactions: [{
                amount: e.total_price,
                transaction_id: e.transaction_id,
                type: "payment_gateway"
            }]
        }
    },
    Ng = e => ne({
        queryKey: ["getOrderById", e],
        queryFn: () => od(e)
    }),
    Bg = e => ne({
        queryKey: ["getHyExperienceOrderById", e],
        queryFn: () => ad(e)
    }),
    ld = e => j(void 0, [e], function*({
        transactionId: t,
        lang: n
    }) {
        try {
            const r = G(n),
                s = `/wallet/transaction-details?transaction_id=${t}&lang=${r}`;
            return yield O({
                url: s
            })
        } catch (r) {
            throw new D({
                error: r,
                name: "getTransactionByIdException",
                context: {
                    tags: {
                        journey: "checkout"
                    },
                    extra: {
                        transactionId: t
                    }
                }
            })
        }
    }),
    Lg = e => ne({
        queryKey: ["getTransactionById", e],
        queryFn: () => ld(e)
    }),
    cd = e => j(void 0, null, function*() {
        var t;
        try {
            const n = De(e.phone),
                r = yield Te("contact"), s = yield O({
                    url: "/contact-us",
                    options: {
                        method: "POST",
                        body: JSON.stringify(K(M({}, e), {
                            captcha: r,
                            signature: n
                        }))
                    }
                });
            if (((t = s.status) == null ? void 0 : t.toLowerCase()) !== "success") {
                const i = Object.values((s == null ? void 0 : s.error) || {})[0] || (s == null ? void 0 : s.error);
                throw new Error(String(i))
            }
            return s.data
        } catch (n) {
            throw new D({
                error: n,
                name: "contactUsException"
            })
        }
    }),
    Vg = () => re({
        mutationFn: cd
    }),
    dd = e => j(void 0, null, function*() {
        try {
            const t = yield fetch("https://formbucket.com/f/buk_Dllr6QO09kyRwPlofIr8sO1r", {
                method: "POST",
                body: JSON.stringify(e),
                headers: {
                    accept: "application/javascript",
                    "content-type": "application/json"
                }
            });
            if (!t.ok) throw new Error("Failed to submit");
            return yield t.json()
        } catch (t) {
            throw new D({
                error: t,
                name: "advertiseException"
            })
        }
    }),
    Ig = () => re({
        mutationFn: dd
    }),
    hd = e => j(void 0, [e], function*({
        slug: t
    }) {
        var n, r;
        try {
            return (yield O({
                baseUrl: (r = (n = N.config) == null ? void 0 : n.wbk) == null ? void 0 : r.socketApi,
                url: `/auctions/${t}/bids`
            })).map(i => ({
                name: i.username,
                id: i.user_id,
                amount: i.amount,
                date: i.created_at
            }))
        } catch (s) {
            throw new D({
                error: s,
                name: "getAuctionHistoryException",
                context: {
                    extra: {
                        slug: t
                    }
                }
            })
        }
    }),
    Ug = (e, t) => ne(M({
        queryKey: ["getAuctionHistory", e],
        queryFn: () => hd(e)
    }, t)),
    md = e => j(void 0, [e], function*({
        email: t,
        password: n,
        locale: r
    }) {
        var s, i, o, a, u, c, l, d, h, f, g, p, _, v, w;
        try {
            const b = De(t),
                A = yield Te("login"), k = G(r), C = yield O({
                    url: "/login",
                    baseUrl: (i = (s = N.config) == null ? void 0 : s.wbk) == null ? void 0 : i.authApi,
                    options: {
                        method: "POST",
                        body: JSON.stringify({
                            email: t,
                            password: n,
                            captcha: A,
                            signature: b,
                            app_source: (a = (o = N.config) == null ? void 0 : o.wbk) == null ? void 0 : a.appSource,
                            login_with: "email",
                            lang: k
                        })
                    }
                });
            if (((u = C == null ? void 0 : C.status) == null ? void 0 : u.toLowerCase()) === "success" && ((c = C == null ? void 0 : C.data) != null && c.access_token)) return {
                new_user: !1,
                user: C.data
            };
            const U = C == null ? void 0 : C.data,
                S = typeof(U == null ? void 0 : U[0]) == "string" ? U[0] : ((l = C == null ? void 0 : C.error) == null ? void 0 : l.mobile) || ((d = C == null ? void 0 : C.error) == null ? void 0 : d.phone) || ((h = C == null ? void 0 : C.error) == null ? void 0 : h.cell_number) || ((f = C == null ? void 0 : C.error) == null ? void 0 : f.email) || ((p = (g = C == null ? void 0 : C.original) == null ? void 0 : g.error) == null ? void 0 : p.description) || ((_ = C == null ? void 0 : C.error) == null ? void 0 : _.description) || ((w = (v = C == null ? void 0 : C.error) == null ? void 0 : v.captcha) == null ? void 0 : w[0]),
                F = Array.isArray(S) ? S[0] : S;
            throw new Error(F)
        } catch (b) {
            throw new D({
                error: b,
                name: "loginException",
                context: {
                    tags: {
                        journey: "auth"
                    },
                    extra: {
                        email: t
                    }
                }
            })
        }
    }),
    $g = ({
        lang: e
    }) => {
        const t = pt();
        return re({
            mutationFn: md,
            onSuccess: n => {
                t.setQueryData(["user", {
                    lang: e
                }], M({}, n.user))
            }
        })
    },
    fd = () => j(void 0, null, function*() {
        var e, t;
        try {
            return yield O({
                url: "/auth/logout",
                baseUrl: (t = (e = N.config) == null ? void 0 : e.wbk) == null ? void 0 : t.authApi,
                options: {
                    method: "POST"
                }
            }), !0
        } catch (n) {
            throw new D({
                error: n,
                name: "logoutException"
            })
        }
    }),
    Kg = e => {
        const t = pt();
        return re({
            mutationFn: fd,
            onSuccess: () => {
                t.setQueryData(["user", e], null)
            }
        })
    },
    pd = e => j(void 0, [e], function*({
        email: t,
        locale: n
    }) {
        var r, s, i, o, a, u, c, l;
        try {
            const d = yield Te("resend_otp"), h = De(t), f = G(n), g = yield O({
                url: "/signup",
                baseUrl: (s = (r = N.config) == null ? void 0 : r.wbk) == null ? void 0 : s.authApi,
                options: {
                    method: "POST",
                    body: JSON.stringify({
                        email: t,
                        resend: !0,
                        captcha: d,
                        signature: h,
                        app_source: (o = (i = N.config) == null ? void 0 : i.wbk) == null ? void 0 : o.appSource,
                        lang: f,
                        skip_email_verification: !0
                    })
                }
            });
            let p = g;
            if (g != null && g.original && (p = g.original), ((a = p == null ? void 0 : p.status) == null ? void 0 : a.toLowerCase()) === "success") return g.data;
            const _ = ((u = p == null ? void 0 : p.error) == null ? void 0 : u.description) || ((l = (c = p == null ? void 0 : p.original) == null ? void 0 : c.error) == null ? void 0 : l.description) || Object.values((p == null ? void 0 : p.error) || {})[0];
            throw new Error(_)
        } catch (d) {
            throw new D({
                error: d,
                name: "resendOtpException",
                context: {
                    tags: {
                        journey: "auth"
                    }
                }
            })
        }
    }),
    gd = e => j(void 0, [e], function*({
        email: t,
        otp: n,
        verify_otp: r,
        guest_id: s,
        locale: i
    }) {
        var o, a, u, c, l, d;
        try {
            const h = G(i),
                f = De(t),
                g = yield Te("login"), p = yield O({
                    url: "/verify-otp",
                    baseUrl: (a = (o = N.config) == null ? void 0 : o.wbk) == null ? void 0 : a.authApi,
                    options: {
                        method: "POST",
                        body: JSON.stringify({
                            email: t,
                            code: n,
                            captcha: g,
                            signature: f,
                            lang: h,
                            verify_otp: r,
                            guest_id: s
                        })
                    }
                });
            if (((u = p.status) == null ? void 0 : u.toLowerCase()) === "success") return r || !((c = p == null ? void 0 : p.data) != null && c.user) ? p.data : K(M({}, p.data), {
                user: K(M({}, p.data.user), {
                    cell_number: p.data.user.phone || p.data.user.cell_number
                })
            });
            const _ = ((l = p == null ? void 0 : p.error) == null ? void 0 : l.description) || (p == null ? void 0 : p.error) || {},
                w = (d = Object.values(typeof _ == "string" ? {
                    error: _
                } : _)) == null ? void 0 : d[0],
                b = Array.isArray(w) ? w[0] : w;
            throw new Error(b)
        } catch (h) {
            throw new D({
                error: h,
                name: "verifyOtpException",
                context: {
                    tags: {
                        journey: "auth"
                    }
                }
            })
        }
    }),
    Gg = () => re({
        mutationFn: pd
    }),
    qg = ({
        lang: e
    }) => {
        const t = pt();
        return re({
            mutationFn: gd,
            onSuccess: () => {
                t.setQueryData(["user", {
                    lang: e
                }], n => n && K(M({}, n), {
                    email_verified: !0,
                    force_verify_email: !1
                }))
            }
        })
    },
    yd = e => j(void 0, [e], function*({
        email: t,
        locale: n,
        checkout_verify: r
    }) {
        var s, i, o, a, u;
        try {
            const c = De(t),
                l = yield Te("forgot_password"), d = G(n), h = yield O({
                    url: "/forgot-password",
                    baseUrl: (i = (s = N.config) == null ? void 0 : s.wbk) == null ? void 0 : i.authApi,
                    options: {
                        method: "POST",
                        body: JSON.stringify({
                            email: t,
                            captcha: l,
                            signature: c,
                            lang: d,
                            checkout_verify: r
                        })
                    }
                });
            if (((o = h.status) == null ? void 0 : o.toLowerCase()) !== "success" || (a = h == null ? void 0 : h.error) != null && a.code) {
                const f = typeof(h == null ? void 0 : h.error) == "string" ? h.error : (u = h == null ? void 0 : h.error) == null ? void 0 : u.code;
                throw new Error(h.verify_message || f || "Something went wrong...")
            }
            return !0
        } catch (c) {
            throw new D({
                error: c,
                name: "forgotPasswordException",
                context: {
                    tags: {
                        journey: "auth"
                    },
                    extra: {
                        email: t
                    }
                }
            })
        }
    }),
    _d = e => j(void 0, null, function*() {
        var t, n, r, s;
        try {
            const i = De(e.new_password),
                o = yield Te("resetpassword"), a = yield O({
                    url: "/change-password",
                    baseUrl: (n = (t = N.config) == null ? void 0 : t.wbk) == null ? void 0 : n.authApi,
                    options: {
                        method: "POST",
                        body: JSON.stringify(K(M({}, e), {
                            signature: i,
                            captcha: o,
                            email: e.email,
                            lang: G(e.locale)
                        }))
                    }
                }), u = typeof(a == null ? void 0 : a.error) == "string" ? a.error : (r = a == null ? void 0 : a.error) == null ? void 0 : r.code;
            if (((s = a.status) == null ? void 0 : s.toLowerCase()) !== "success" || u) throw new Error(u || "Something went wrong...");
            return !0
        } catch (i) {
            throw new D({
                error: i,
                name: "changePasswordException",
                context: {
                    tags: {
                        journey: "auth"
                    }
                }
            })
        }
    }),
    Hg = () => re({
        mutationFn: yd
    }),
    zg = () => re({
        mutationFn: _d
    }),
    vd = e => j(void 0, [e], function*({
        user: t,
        locale: n = "en"
    }) {
        var r, s, i, o, a;
        try {
            const u = G(n),
                c = yield O({
                    url: `/update-profile?lang=${u}`,
                    baseUrl: (s = (r = N.config) == null ? void 0 : r.wbk) == null ? void 0 : s.authApi,
                    options: {
                        method: "POST",
                        body: JSON.stringify(K(M({}, t), {
                            lang: u,
                            skip_phone_validation: !0
                        }))
                    }
                });
            if (((i = c.status) == null ? void 0 : i.toLowerCase()) !== "success") throw (c == null ? void 0 : c.error) || {
                message: (o = c.original) == null ? void 0 : o.error,
                phone: (a = c.original) == null ? void 0 : a.error
            };
            const l = `${t.country_code?`+${t.country_code}`:"0"}${c.data.user.cell_number}`;
            return K(M({}, c.data.user), {
                cell_number: l,
                phone: l
            })
        } catch (u) {
            throw new D({
                error: u,
                name: "updateUserInfoException",
                context: u
            })
        }
    }),
    Wg = ({
        lang: e
    }) => {
        const t = pt();
        return re({
            mutationFn: vd,
            onSuccess: n => {
                t.setQueryData(["user", {
                    lang: e
                }], n)
            }
        })
    },
    bd = e => j(void 0, [e], function*({
        user: t,
        locale: n = "en"
    }) {
        var r, s, i, o, a;
        try {
            const u = G(n),
                c = yield Te("signup"), l = De(t.email || ""), d = js("utms"), h = d ? JSON.parse(d) : null, f = yield O({
                    url: `/register?lang=${u}`,
                    baseUrl: (s = (r = N.config) == null ? void 0 : r.wbk) == null ? void 0 : s.authApi,
                    options: {
                        method: "POST",
                        body: JSON.stringify(M(K(M({}, t), {
                            lang: u,
                            captcha: c,
                            signature: l,
                            skip_phone_validation: !0,
                            check_user: !0
                        }), h))
                    }
                });
            if (((i = f.status) == null ? void 0 : i.toLowerCase()) !== "success") throw (f == null ? void 0 : f.error) || {
                message: (o = f.original) == null ? void 0 : o.error,
                phone: (a = f.original) == null ? void 0 : a.error
            };
            const g = `${t.country_code?`+${t.country_code}`:"0"}${f.data.user.cell_number}`;
            return K(M({}, f.data.user), {
                cell_number: g,
                phone: g
            })
        } catch (u) {
            const c = (u == null ? void 0 : u.error) || u,
                l = typeof c == "string" ? {
                    message: c
                } : c;
            throw new D({
                error: u,
                name: "registerException",
                context: K(M({}, l), {
                    extra: K(M({}, t), {
                        password: "****"
                    })
                })
            })
        }
    }),
    Qg = ({
        lang: e
    }) => {
        const t = pt();
        return re({
            mutationFn: bd,
            onSuccess: n => {
                t.setQueryData(["user", {
                    lang: e
                }], n)
            }
        })
    },
    xd = e => j(void 0, null, function*() {
        var t, n, r, s, i, o, a, u;
        try {
            const c = yield O({
                url: "/tawakkalna/verify-user",
                baseUrl: (n = (t = N.config) == null ? void 0 : t.wbk) == null ? void 0 : n.authApi,
                options: {
                    method: "POST",
                    body: JSON.stringify(e)
                }
            });
            if (((r = c.status) == null ? void 0 : r.toLowerCase()) !== "ok") {
                const l = Object.values((c == null ? void 0 : c.error) || {})[0],
                    d = Array.isArray(l) ? l[0] : l;
                throw new Error(d)
            }
            return (i = (s = c.data) == null ? void 0 : s.user) != null && i.access_token && gr({
                name: "token",
                value: c.data.user.access_token,
                expiration: 7,
                domain: (u = (a = (o = N) == null ? void 0 : o.config) == null ? void 0 : a.cookie) == null ? void 0 : u.domain
            }), c.data
        } catch (c) {
            throw new D({
                error: c,
                name: "getTawakkalnaUserException",
                context: {
                    tags: {
                        journey: "auth"
                    }
                }
            })
        }
    }),
    wd = e => j(void 0, [e], function*({
        guest_id: t,
        email: n,
        lang: r
    }) {
        var s, i, o, a, u, c, l;
        try {
            const d = yield Te("twk_signup"), h = De(n), f = G(r), g = yield O({
                url: "/tawakkalna/singup",
                baseUrl: (i = (s = N.config) == null ? void 0 : s.wbk) == null ? void 0 : i.authApi,
                options: {
                    method: "POST",
                    body: JSON.stringify({
                        guest_id: t,
                        email: n,
                        lang: f,
                        captcha: d,
                        signature: h
                    })
                }
            });
            if (((o = g.status) == null ? void 0 : o.toLowerCase()) !== "ok") {
                const p = Object.values((g == null ? void 0 : g.error) || {})[0],
                    _ = Array.isArray(p) ? p[0] : p;
                throw new Error(_)
            }
            return (a = g.data.user) != null && a.access_token && gr({
                name: "token",
                value: g.data.user.access_token,
                expiration: 7,
                domain: (l = (c = (u = N) == null ? void 0 : u.config) == null ? void 0 : c.cookie) == null ? void 0 : l.domain
            }), M({
                email: n
            }, g)
        } catch (d) {
            throw new D({
                error: d,
                name: "linkTawakkalnaUserException",
                context: {
                    tags: {
                        journey: "auth"
                    }
                }
            })
        }
    }),
    Jg = e => ne({
        queryKey: ["twk-user"],
        queryFn: () => xd(e)
    }),
    Yg = () => {
        const e = pt();
        return re({
            mutationFn: wd,
            onSuccess: t => {
                e.setQueryData(["twk-user"], n => K(M({}, n), {
                    email: t.email
                }))
            }
        })
    },
    Ad = e => j(void 0, [e], function*({
        lang: t
    }) {
        var n, r, s, i, o;
        try {
            const a = G(t);
            if (!Nn("token")) return null;
            const c = yield O({
                url: `/user/profile?lang=${a}`,
                baseUrl: (r = (n = N.config) == null ? void 0 : n.wbk) == null ? void 0 : r.authApi
            });
            if (((s = c.status) == null ? void 0 : s.toLowerCase()) !== "success") {
                const l = Object.values((c == null ? void 0 : c.error) || {})[0] || ((o = (i = c == null ? void 0 : c.original) == null ? void 0 : i.error) == null ? void 0 : o.description),
                    d = Array.isArray(l) ? l[0] : l;
                throw new Error(d)
            }
            return c.data
        } catch {
            return null
        }
    }),
    Zg = (e, t) => ne(M({
        queryKey: ["user", e],
        queryFn: () => Ad(e)
    }, t)),
    Sd = e => j(void 0, [e], function*({
        url: t,
        options: n,
        raw: r
    }) {
        var s;
        const i = (s = N.config) == null ? void 0 : s.blog;
        if (!i) {
            const o = "Blog `ApiConfig` was not initialized. See instructions in https://github.com/nadude/webook-frontend/blob/main/packages/api/README.md";
            throw new Error(o)
        }
        return O({
            baseUrl: i.api,
            url: t,
            raw: r,
            options: n,
            includeAuth: !1,
            includeToken: !1
        })
    }),
    Cd = e => j(void 0, [e], function*({
        lang: t
    }) {
        try {
            const n = G(t);
            return yield Sd({
                url: `/blog/wp-json/wp/v2/posts?lang=${n}&categories=${n==="en"?"57":"58"}&&orderby=date&order=desc`
            })
        } catch (n) {
            throw new D({
                error: n,
                name: "getBlogException"
            })
        }
    }),
    Xg = e => ne({
        queryKey: ["getBlogList", e],
        queryFn: () => Cd(e)
    }),
    Ds = e => j(void 0, [e], function*({
        url: t,
        options: n,
        raw: r
    }) {
        var s;
        const i = (s = N.config) == null ? void 0 : s.hy;
        if (!i) {
            const o = "HY `ApiConfig` was not initialized. See instructions in https://github.com/nadude/webook-frontend/blob/main/packages/api/README.md";
            throw new Error(o)
        }
        return O({
            baseUrl: i.api,
            url: t,
            raw: r,
            options: K(M({}, n), {
                headers: K(M({}, n == null ? void 0 : n.headers), {
                    token: i.apiToken
                })
            })
        })
    }),
    kd = e => j(void 0, [e], function*({
        lang: t,
        city: n,
        slug: r
    }) {
        var s;
        try {
            const i = G(t),
                a = {
                    lang: t,
                    venue_url: `${n==="all-cities"?"everywhere":n}/${r}`,
                    venue_id: ""
                },
                u = yield Ds({
                    url: `/book/venue/detail?lang=${i}`,
                    options: {
                        method: "POST",
                        body: JSON.stringify(a),
                        headers: {
                            Authorization: ""
                        }
                    }
                });
            if (!((s = u == null ? void 0 : u.data) != null && s.venue_id)) throw new Error("No experience found");
            return u.data
        } catch (i) {
            throw new D({
                error: i,
                name: "getExperiencesBySlugException"
            })
        }
    }),
    Td = (e, t) => ne(M({
        queryKey: ["getExperiencesBySlug", e],
        queryFn: () => kd(e)
    }, t)),
    Pd = e => j(void 0, [e], function*({
        venue_id: t,
        booking_date: n,
        code: r,
        locale: s
    }) {
        var i, o;
        try {
            const a = G(s),
                u = yield Ds({
                    url: `/payment/verify-coupon?lang=${a}`,
                    options: {
                        method: "POST",
                        body: JSON.stringify({
                            lang: a,
                            code: r,
                            venue_id: t,
                            booking_date: n
                        })
                    }
                });
            if (((i = u == null ? void 0 : u.status) == null ? void 0 : i.toLowerCase()) !== "success") {
                const c = (u == null ? void 0 : u.error) || {},
                    l = typeof c == "string" ? c : (o = Object.values(c)) == null ? void 0 : o[0],
                    d = typeof l == "string" ? l : l == null ? void 0 : l[0];
                throw new Error(d || "something went wrong")
            }
            return u.coupon
        } catch (a) {
            throw new D({
                error: a,
                name: "verifyHyCouponException"
            })
        }
    }),
    jd = () => re({
        mutationFn: Pd
    }),
    Md = "https://webook.com/shop",
    Ed = e => j(void 0, [e], function*({
        lang: t,
        params: n
    }) {
        try {
            const r = G(t),
                s = new URLSearchParams(n);
            return (yield O({
                baseUrl: Md,
                url: `/${r==="en"?"en/":""}wp-json/wp/v2/product?${s}`,
                includeAuth: !1,
                includeToken: !1
            })).sort((o, a) => o.title.rendered.localeCompare(a.title.rendered))
        } catch (r) {
            throw new D({
                error: r,
                name: "getShopProductsException"
            })
        }
    }),
    ey = e => ne({
        queryKey: ["getShop", e],
        queryFn: () => Ed(e)
    }),
    Os = e => {
        var t;
        const r = (typeof e.message == "object" ? e.message : e == null ? void 0 : e.errors) || {},
            s = (t = Object.values(r)) == null ? void 0 : t[0],
            i = typeof s == "string" ? s : s == null ? void 0 : s[0];
        e.message = i || (e == null ? void 0 : e.message);
        const o = e;
        return o == null ? void 0 : o.ticket_errors
    },
    Rd = (e, t) => {
        const n = new Blob([e]),
            r = window.URL.createObjectURL(n),
            s = document.createElement("a");
        s.href = r, s.setAttribute("download", `${t}.pdf`), document.body.appendChild(s), s.click()
    },
    ty = e => j(void 0, [e], function*({
        orderId: t,
        title: n,
        lang: r
    }) {
        var s, i;
        try {
            const o = G(r),
                u = yield(yield O({
                    url: `/download/event/receipts?lang=${o}&source=${(i=(s=N.config)==null?void 0:s.wbk)==null?void 0:i.appSource}`,
                    options: {
                        method: "POST",
                        body: JSON.stringify({
                            order_id: t,
                            lang: o
                        })
                    },
                    raw: !0
                })).blob();
            Rd(u, n)
        } catch (o) {
            throw new D({
                error: o,
                name: "downloadReceiptException"
            })
        }
    }),
    ny = e => j(void 0, [e], function*({
        order: t,
        usePaymentApi: n,
        isSeason: r,
        isSeat: s,
        email: i,
        locale: o
    }) {
        var a, u, c, l, d, h;
        try {
            const f = G(o),
                g = r ? "/checkout/season/hold-best-available" : s ? "/event-seat/checkout" : "/checkout",
                _ = Nn("twk") === "true" ? "twk" : (u = (a = N.config) == null ? void 0 : a.wbk) == null ? void 0 : u.appSource,
                v = js("utms"),
                w = v ? JSON.parse(v) : null,
                b = yield O({
                    baseUrl: n ? (l = (c = N.config) == null ? void 0 : c.wbk) == null ? void 0 : l.paymentApi : void 0,
                    url: `${g}?lang=${f}`,
                    options: {
                        method: "POST",
                        body: JSON.stringify(M(K(M({}, t), {
                            app_source: _,
                            lang: f
                        }), w))
                    }
                });
            if (((d = b == null ? void 0 : b.status) == null ? void 0 : d.toLowerCase()) !== "success") {
                const A = typeof(b == null ? void 0 : b.message) == "object" ? b == null ? void 0 : b.message : {
                        message: ((h = b == null ? void 0 : b.error) == null ? void 0 : h.message) || (b == null ? void 0 : b.message)
                    },
                    k = Object.values(A || {})[0],
                    C = Array.isArray(k) ? k[0] : k;
                throw new Error(C || "Something went wrong")
            }
            return b.data
        } catch (f) {
            const g = f,
                p = Os(g);
            throw new Cs({
                error: g,
                order: K(M({}, t), {
                    email: i
                }),
                ticketErrors: p
            })
        }
    }),
    ry = e => j(void 0, [e], function*({
        usePaymentApi: t,
        order: n,
        email: r,
        locale: s
    }) {
        var i, o, a, u;
        try {
            const c = G(s),
                l = yield O({
                    baseUrl: t ? (o = (i = N.config) == null ? void 0 : i.wbk) == null ? void 0 : o.paymentApi : void 0,
                    url: `/bundles/checkout?lang=${c}`,
                    options: {
                        method: "POST",
                        body: JSON.stringify(K(M({}, n), {
                            lang: c
                        }))
                    }
                });
            if (((a = l == null ? void 0 : l.status) == null ? void 0 : a.toLowerCase()) !== "success") throw new Error(((u = l == null ? void 0 : l.error) == null ? void 0 : u.message) || (l == null ? void 0 : l.message) || "Something went wrong");
            return l.data
        } catch (c) {
            const l = c,
                d = Os(l);
            throw new Cs({
                error: l,
                order: K(M({}, n), {
                    email: r
                }),
                ticketErrors: d
            })
        }
    }),
    Fd = e => j(void 0, [e], function*({
        order: t,
        locale: n,
        email: r,
        usePaymentApi: s
    }) {
        var i, o, a, u, c, l;
        try {
            const d = G(n),
                h = "/halayalla/checkout",
                f = (o = (i = N.config) == null ? void 0 : i.wbk) == null ? void 0 : o.appSource,
                g = js("utms"),
                p = g ? JSON.parse(g) : null,
                _ = yield O({
                    baseUrl: s ? (u = (a = N.config) == null ? void 0 : a.wbk) == null ? void 0 : u.paymentApi : void 0,
                    url: `${h}?lang=${d}`,
                    options: {
                        method: "POST",
                        body: JSON.stringify(M(K(M({}, t), {
                            app_source: f,
                            lang: d
                        }), p))
                    }
                });
            if (((c = _ == null ? void 0 : _.status) == null ? void 0 : c.toLowerCase()) !== "success") {
                const v = _.error || {},
                    w = typeof v == "string" ? v : (l = Object.values(v)) == null ? void 0 : l[0],
                    b = Array.isArray(w) ? w[0] : w;
                throw new Error(b || "Something went wrong")
            }
            return _
        } catch (d) {
            const h = d,
                f = Os(h);
            throw new Cs({
                error: h,
                order: K(M({}, t), {
                    email: r
                }),
                ticketErrors: f
            })
        }
    }),
    Dd = (e, t) => {
        const n = new Blob([e]),
            r = window.URL.createObjectURL(n),
            s = document.createElement("a");
        s.href = r, s.setAttribute("download", `${t}.pdf`), document.body.appendChild(s), s.click()
    },
    sy = e => j(void 0, [e], function*({
        orderId: t,
        title: n,
        lang: r
    }) {
        var s, i;
        try {
            const o = G(r),
                a = yield Ds({
                    url: `/payment/${t}/download-tickets?lang=${o}&source=${(i=(s=N.config)==null?void 0:s.wbk)==null?void 0:i.appSource}`,
                    raw: !0
                });
            if (!a.ok) throw new Error("Failed to download");
            const u = yield a.blob();
            Dd(u, n)
        } catch (o) {
            throw new D({
                error: o,
                name: "downloadTicketHYException"
            })
        }
    });
const Od = "modulepreload",
    Nd = function(e) {
        return "/" + e
    },
    Pi = {},
    iy = function(t, n, r) {
        let s = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"),
                o = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
            s = Promise.all(n.map(a => {
                if (a = Nd(a), a in Pi) return;
                Pi[a] = !0;
                const u = a.endsWith(".css"),
                    c = u ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${a}"]${c}`)) return;
                const l = document.createElement("link");
                if (l.rel = u ? "stylesheet" : Od, u || (l.as = "script", l.crossOrigin = ""), l.href = a, o && l.setAttribute("nonce", o), document.head.appendChild(l), u) return new Promise((d, h) => {
                    l.addEventListener("load", d), l.addEventListener("error", () => h(new Error(`Unable to preload CSS for ${a}`)))
                })
            }))
        }
        return s.then(() => t()).catch(i => {
            const o = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (o.payload = i, window.dispatchEvent(o), !o.defaultPrevented) throw i
        })
    };
var Bd = function() {
        return null
    },
    Ld = {
        queries: {
            retry: 0,
            refetchOnWindowFocus: !1
        },
        mutations: {
            retry: 0
        }
    },
    oy = ({
        children: e,
        defaults: t
    }) => {
        const [n] = x.useState(() => new _c({
            defaultOptions: t || Ld
        }));
        return m.jsxs(Ac, {
            client: n,
            children: [e, m.jsx(Bd, {})]
        })
    };
const Ns = x.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    }),
    yr = x.createContext({}),
    _r = x.createContext(null),
    Bs = typeof document < "u",
    Ls = Bs ? x.useLayoutEffect : x.useEffect,
    Fa = x.createContext({
        strict: !1
    }),
    Vs = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    Vd = "framerAppearId",
    Da = "data-" + Vs(Vd),
    Id = {
        skipAnimations: !1,
        useManualTiming: !1
    };
class ji {
    constructor() {
        this.order = [], this.scheduled = new Set
    }
    add(t) {
        if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0
    }
    remove(t) {
        const n = this.order.indexOf(t);
        n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t))
    }
    clear() {
        this.order.length = 0, this.scheduled.clear()
    }
}

function Ud(e) {
    let t = new ji,
        n = new ji,
        r = 0,
        s = !1,
        i = !1;
    const o = new WeakSet,
        a = {
            schedule: (u, c = !1, l = !1) => {
                const d = l && s,
                    h = d ? t : n;
                return c && o.add(u), h.add(u) && d && s && (r = t.order.length), u
            },
            cancel: u => {
                n.remove(u), o.delete(u)
            },
            process: u => {
                if (s) {
                    i = !0;
                    return
                }
                if (s = !0, [t, n] = [n, t], n.clear(), r = t.order.length, r)
                    for (let c = 0; c < r; c++) {
                        const l = t.order[c];
                        o.has(l) && (a.schedule(l), e()), l(u)
                    }
                s = !1, i && (i = !1, a.process(u))
            }
        };
    return a
}
const Hn = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    $d = 40;

function Oa(e, t) {
    let n = !1,
        r = !0;
    const s = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        i = Hn.reduce((d, h) => (d[h] = Ud(() => n = !0), d), {}),
        o = d => {
            i[d].process(s)
        },
        a = () => {
            const d = performance.now();
            n = !1, s.delta = r ? 1e3 / 60 : Math.max(Math.min(d - s.timestamp, $d), 1), s.timestamp = d, s.isProcessing = !0, Hn.forEach(o), s.isProcessing = !1, n && t && (r = !1, e(a))
        },
        u = () => {
            n = !0, r = !0, s.isProcessing || e(a)
        };
    return {
        schedule: Hn.reduce((d, h) => {
            const f = i[h];
            return d[h] = (g, p = !1, _ = !1) => (n || u(), f.schedule(g, p, _)), d
        }, {}),
        cancel: d => Hn.forEach(h => i[h].cancel(d)),
        state: s,
        steps: i
    }
}
const {
    schedule: Is,
    cancel: ay
} = Oa(queueMicrotask, !1);

function Kd(e, t, n, r) {
    const {
        visualElement: s
    } = x.useContext(yr), i = x.useContext(Fa), o = x.useContext(_r), a = x.useContext(Ns).reducedMotion, u = x.useRef();
    r = r || i.renderer, !u.current && r && (u.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: a
    }));
    const c = u.current;
    x.useInsertionEffect(() => {
        c && c.update(n, o)
    });
    const l = x.useRef(!!(n[Da] && !window.HandoffComplete));
    return Ls(() => {
        c && (Is.render(c.render), l.current && c.animationState && c.animationState.animateChanges())
    }), x.useEffect(() => {
        c && (c.updateFeatures(), !l.current && c.animationState && c.animationState.animateChanges(), l.current && (l.current = !1, window.HandoffComplete = !0))
    }), c
}

function Nt(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function Gd(e, t, n) {
    return x.useCallback(r => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Nt(n) && (n.current = r))
    }, [t])
}

function _n(e) {
    return typeof e == "string" || Array.isArray(e)
}

function vr(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const Us = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    $s = ["initial", ...Us];

function br(e) {
    return vr(e.animate) || $s.some(t => _n(e[t]))
}

function Na(e) {
    return !!(br(e) || e.variants)
}

function qd(e, t) {
    if (br(e)) {
        const {
            initial: n,
            animate: r
        } = e;
        return {
            initial: n === !1 || _n(n) ? n : void 0,
            animate: _n(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}

function Hd(e) {
    const {
        initial: t,
        animate: n
    } = qd(e, x.useContext(yr));
    return x.useMemo(() => ({
        initial: t,
        animate: n
    }), [Mi(t), Mi(n)])
}

function Mi(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Ei = {
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
    vn = {};
for (const e in Ei) vn[e] = {
    isEnabled: t => Ei[e].some(n => !!t[n])
};

function zd(e) {
    for (const t in e) vn[t] = { ...vn[t],
        ...e[t]
    }
}
const Ks = x.createContext({}),
    Ba = x.createContext({}),
    Wd = Symbol.for("motionComponentSymbol");

function Qd({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: r,
    Component: s
}) {
    e && zd(e);

    function i(a, u) {
        let c;
        const l = { ...x.useContext(Ns),
                ...a,
                layoutId: Jd(a)
            },
            {
                isStatic: d
            } = l,
            h = Hd(a),
            f = r(a, d);
        if (!d && Bs) {
            h.visualElement = Kd(s, f, l, t);
            const g = x.useContext(Ba),
                p = x.useContext(Fa).strict;
            h.visualElement && (c = h.visualElement.loadFeatures(l, p, e, g))
        }
        return m.jsxs(yr.Provider, {
            value: h,
            children: [c && h.visualElement ? m.jsx(c, {
                visualElement: h.visualElement,
                ...l
            }) : null, n(s, a, Gd(f, h.visualElement, u), f, d, h.visualElement)]
        })
    }
    const o = x.forwardRef(i);
    return o[Wd] = s, o
}

function Jd({
    layoutId: e
}) {
    const t = x.useContext(Ks).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function Yd(e) {
    function t(r, s = {}) {
        return Qd(e(r, s))
    }
    if (typeof Proxy > "u") return t;
    const n = new Map;
    return new Proxy(t, {
        get: (r, s) => (n.has(s) || n.set(s, t(s)), n.get(s))
    })
}
const Zd = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Gs(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(Zd.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
const ir = {};

function Xd(e) {
    Object.assign(ir, e)
}
const Bn = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    Dt = new Set(Bn);

function La(e, {
    layout: t,
    layoutId: n
}) {
    return Dt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ir[e] || e === "opacity")
}
const fe = e => !!(e && e.getVelocity),
    eh = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    th = Bn.length;

function nh(e, {
    enableHardwareAcceleration: t = !0,
    allowTransformNone: n = !0
}, r, s) {
    let i = "";
    for (let o = 0; o < th; o++) {
        const a = Bn[o];
        if (e[a] !== void 0) {
            const u = eh[a] || a;
            i += `${u}(${e[a]}) `
        }
    }
    return t && !e.z && (i += "translateZ(0)"), i = i.trim(), s ? i = s(e, r ? "" : i) : n && r && (i = "none"), i
}
const Va = e => t => typeof t == "string" && t.startsWith(e),
    Ia = Va("--"),
    rh = Va("var(--"),
    qs = e => rh(e) ? sh.test(e.split("/*")[0].trim()) : !1,
    sh = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    ih = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
    ht = (e, t, n) => n > t ? t : n < e ? e : n,
    sn = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    mn = { ...sn,
        transform: e => ht(0, 1, e)
    },
    zn = { ...sn,
        default: 1
    },
    fn = e => Math.round(e * 1e5) / 1e5,
    Hs = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
    oh = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
    ah = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

function Ln(e) {
    return typeof e == "string"
}
const Vn = e => ({
        test: t => Ln(t) && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    et = Vn("deg"),
    Ie = Vn("%"),
    R = Vn("px"),
    uh = Vn("vh"),
    lh = Vn("vw"),
    Ri = { ...Ie,
        parse: e => Ie.parse(e) / 100,
        transform: e => Ie.transform(e * 100)
    },
    Fi = { ...sn,
        transform: Math.round
    },
    Ua = {
        borderWidth: R,
        borderTopWidth: R,
        borderRightWidth: R,
        borderBottomWidth: R,
        borderLeftWidth: R,
        borderRadius: R,
        radius: R,
        borderTopLeftRadius: R,
        borderTopRightRadius: R,
        borderBottomRightRadius: R,
        borderBottomLeftRadius: R,
        width: R,
        maxWidth: R,
        height: R,
        maxHeight: R,
        size: R,
        top: R,
        right: R,
        bottom: R,
        left: R,
        padding: R,
        paddingTop: R,
        paddingRight: R,
        paddingBottom: R,
        paddingLeft: R,
        margin: R,
        marginTop: R,
        marginRight: R,
        marginBottom: R,
        marginLeft: R,
        rotate: et,
        rotateX: et,
        rotateY: et,
        rotateZ: et,
        scale: zn,
        scaleX: zn,
        scaleY: zn,
        scaleZ: zn,
        skew: et,
        skewX: et,
        skewY: et,
        distance: R,
        translateX: R,
        translateY: R,
        translateZ: R,
        x: R,
        y: R,
        z: R,
        perspective: R,
        transformPerspective: R,
        opacity: mn,
        originX: Ri,
        originY: Ri,
        originZ: R,
        zIndex: Fi,
        backgroundPositionX: R,
        backgroundPositionY: R,
        fillOpacity: mn,
        strokeOpacity: mn,
        numOctaves: Fi
    };

function zs(e, t, n, r) {
    const {
        style: s,
        vars: i,
        transform: o,
        transformOrigin: a
    } = e;
    let u = !1,
        c = !1,
        l = !0;
    for (const d in t) {
        const h = t[d];
        if (Ia(d)) {
            i[d] = h;
            continue
        }
        const f = Ua[d],
            g = ih(h, f);
        if (Dt.has(d)) {
            if (u = !0, o[d] = g, !l) continue;
            h !== (f.default || 0) && (l = !1)
        } else d.startsWith("origin") ? (c = !0, a[d] = g) : s[d] = g
    }
    if (t.transform || (u || r ? s.transform = nh(e.transform, n, l, r) : s.transform && (s.transform = "none")), c) {
        const {
            originX: d = "50%",
            originY: h = "50%",
            originZ: f = 0
        } = a;
        s.transformOrigin = `${d} ${h} ${f}`
    }
}
const Ws = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function $a(e, t, n) {
    for (const r in t) !fe(t[r]) && !La(r, n) && (e[r] = t[r])
}

function ch({
    transformTemplate: e
}, t, n) {
    return x.useMemo(() => {
        const r = Ws();
        return zs(r, t, {
            enableHardwareAcceleration: !n
        }, e), Object.assign({}, r.vars, r.style)
    }, [t])
}

function dh(e, t, n) {
    const r = e.style || {},
        s = {};
    return $a(s, r, e), Object.assign(s, ch(e, t, n)), s
}

function hh(e, t, n) {
    const r = {},
        s = dh(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = s, r
}
const mh = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function or(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || mh.has(e)
}
let Ka = e => !or(e);

function fh(e) {
    e && (Ka = t => t.startsWith("on") ? !or(t) : e(t))
}
try {
    fh(require("@emotion/is-prop-valid").default)
} catch {}

function ph(e, t, n) {
    const r = {};
    for (const s in e) s === "values" && typeof e.values == "object" || (Ka(s) || n === !0 && or(s) || !t && !or(s) || e.draggable && s.startsWith("onDrag")) && (r[s] = e[s]);
    return r
}

function Di(e, t, n) {
    return typeof e == "string" ? e : R.transform(t + n * e)
}

function gh(e, t, n) {
    const r = Di(t, e.x, e.width),
        s = Di(n, e.y, e.height);
    return `${r} ${s}`
}
const yh = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    _h = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function vh(e, t, n = 1, r = 0, s = !0) {
    e.pathLength = 1;
    const i = s ? yh : _h;
    e[i.offset] = R.transform(-r);
    const o = R.transform(t),
        a = R.transform(n);
    e[i.array] = `${o} ${a}`
}

function Qs(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: s,
    originY: i,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: u = 0,
    ...c
}, l, d, h) {
    if (zs(e, c, l, h), d) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: f,
        style: g,
        dimensions: p
    } = e;
    f.transform && (p && (g.transform = f.transform), delete f.transform), p && (s !== void 0 || i !== void 0 || g.transform) && (g.transformOrigin = gh(p, s !== void 0 ? s : .5, i !== void 0 ? i : .5)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), o !== void 0 && vh(f, o, a, u, !1)
}
const Ga = () => ({ ...Ws(),
        attrs: {}
    }),
    Js = e => typeof e == "string" && e.toLowerCase() === "svg";

function bh(e, t, n, r) {
    const s = x.useMemo(() => {
        const i = Ga();
        return Qs(i, t, {
            enableHardwareAcceleration: !1
        }, Js(r), e.transformTemplate), { ...i.attrs,
            style: { ...i.style
            }
        }
    }, [t]);
    if (e.style) {
        const i = {};
        $a(i, e.style, e), s.style = { ...i,
            ...s.style
        }
    }
    return s
}

function xh(e = !1) {
    return (n, r, s, {
        latestValues: i
    }, o) => {
        const u = (Gs(n) ? bh : hh)(r, i, o, n),
            c = ph(r, typeof n == "string", e),
            l = n !== x.Fragment ? { ...c,
                ...u,
                ref: s
            } : {},
            {
                children: d
            } = r,
            h = x.useMemo(() => fe(d) ? d.get() : d, [d]);
        return x.createElement(n, { ...l,
            children: h
        })
    }
}

function qa(e, {
    style: t,
    vars: n
}, r, s) {
    Object.assign(e.style, t, s && s.getProjectionStyles(r));
    for (const i in n) e.style.setProperty(i, n[i])
}
const Ha = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function za(e, t, n, r) {
    qa(e, t, void 0, r);
    for (const s in t.attrs) e.setAttribute(Ha.has(s) ? s : Vs(s), t.attrs[s])
}

function Ys(e, t, n) {
    var r;
    const {
        style: s
    } = e, i = {};
    for (const o in s)(fe(s[o]) || t.style && fe(t.style[o]) || La(o, e) || ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (i[o] = s[o]);
    return i
}

function Wa(e, t, n) {
    const r = Ys(e, t, n);
    for (const s in e)
        if (fe(e[s]) || fe(t[s])) {
            const i = Bn.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
            r[i] = e[s]
        }
    return r
}

function Oi(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach((n, r) => {
        t[0][r] = n.get(), t[1][r] = n.getVelocity()
    }), t
}

function Zs(e, t, n, r) {
    if (typeof t == "function") {
        const [s, i] = Oi(r);
        t = t(n !== void 0 ? n : e.custom, s, i)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
        const [s, i] = Oi(r);
        t = t(n !== void 0 ? n : e.custom, s, i)
    }
    return t
}

function Qa(e) {
    const t = x.useRef(null);
    return t.current === null && (t.current = e()), t.current
}
const os = e => Array.isArray(e),
    wh = e => !!(e && typeof e == "object" && e.mix && e.toValue),
    Ah = e => os(e) ? e[e.length - 1] || 0 : e;

function Xn(e) {
    const t = fe(e) ? e.get() : e;
    return wh(t) ? t.toValue() : t
}

function Sh({
    scrapeMotionValuesFromProps: e,
    createRenderState: t,
    onMount: n
}, r, s, i) {
    const o = {
        latestValues: Ch(r, s, i, e),
        renderState: t()
    };
    return n && (o.mount = a => n(r, a, o)), o
}
const Ja = e => (t, n) => {
    const r = x.useContext(yr),
        s = x.useContext(_r),
        i = () => Sh(e, t, r, s);
    return n ? i() : Qa(i)
};

function Ch(e, t, n, r) {
    const s = {},
        i = r(e, {});
    for (const h in i) s[h] = Xn(i[h]);
    let {
        initial: o,
        animate: a
    } = e;
    const u = br(e),
        c = Na(e);
    t && c && !u && e.inherit !== !1 && (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
    let l = n ? n.initial === !1 : !1;
    l = l || o === !1;
    const d = l ? a : o;
    return d && typeof d != "boolean" && !vr(d) && (Array.isArray(d) ? d : [d]).forEach(f => {
        const g = Zs(e, f);
        if (!g) return;
        const {
            transitionEnd: p,
            transition: _,
            ...v
        } = g;
        for (const w in v) {
            let b = v[w];
            if (Array.isArray(b)) {
                const A = l ? b.length - 1 : 0;
                b = b[A]
            }
            b !== null && (s[w] = b)
        }
        for (const w in p) s[w] = p[w]
    }), s
}
const pe = e => e,
    {
        schedule: z,
        cancel: mt,
        state: de,
        steps: Mr
    } = Oa(typeof requestAnimationFrame < "u" ? requestAnimationFrame : pe, !0),
    kh = {
        useVisualState: Ja({
            scrapeMotionValuesFromProps: Wa,
            createRenderState: Ga,
            onMount: (e, t, {
                renderState: n,
                latestValues: r
            }) => {
                z.read(() => {
                    try {
                        n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                    } catch {
                        n.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                }), z.render(() => {
                    Qs(n, r, {
                        enableHardwareAcceleration: !1
                    }, Js(t.tagName), e.transformTemplate), za(t, n)
                })
            }
        })
    },
    Th = {
        useVisualState: Ja({
            scrapeMotionValuesFromProps: Ys,
            createRenderState: Ws
        })
    };

function Ph(e, {
    forwardMotionProps: t = !1
}, n, r) {
    return { ...Gs(e) ? kh : Th,
        preloadedFeatures: n,
        useRender: xh(t),
        createVisualElement: r,
        Component: e
    }
}

function He(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}
const Ya = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

function xr(e, t = "page") {
    return {
        point: {
            x: e[`${t}X`],
            y: e[`${t}Y`]
        }
    }
}
const jh = e => t => Ya(t) && e(t, xr(t));

function ze(e, t, n, r) {
    return He(e, t, jh(n), r)
}
const Mh = (e, t) => n => t(e(n)),
    We = (...e) => e.reduce(Mh);

function Za(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        };
        return t === null ? (t = e, n) : !1
    }
}
const Ni = Za("dragHorizontal"),
    Bi = Za("dragVertical");

function Xa(e) {
    let t = !1;
    if (e === "y") t = Bi();
    else if (e === "x") t = Ni();
    else {
        const n = Ni(),
            r = Bi();
        n && r ? t = () => {
            n(), r()
        } : (n && n(), r && r())
    }
    return t
}

function eu() {
    const e = Xa(!0);
    return e ? (e(), !1) : !0
}
class gt {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}

function Li(e, t) {
    const n = t ? "pointerenter" : "pointerleave",
        r = t ? "onHoverStart" : "onHoverEnd",
        s = (i, o) => {
            if (i.pointerType === "touch" || eu()) return;
            const a = e.getProps();
            e.animationState && a.whileHover && e.animationState.setActive("whileHover", t);
            const u = a[r];
            u && z.postRender(() => u(i, o))
        };
    return ze(e.current, n, s, {
        passive: !e.getProps()[r]
    })
}
class Eh extends gt {
    mount() {
        this.unmount = We(Li(this.node, !0), Li(this.node, !1))
    }
    unmount() {}
}
class Rh extends gt {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = We(He(this.node.current, "focus", () => this.onFocus()), He(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const tu = (e, t) => t ? e === t ? !0 : tu(e, t.parentElement) : !1;

function Er(e, t) {
    if (!t) return;
    const n = new PointerEvent("pointer" + e);
    t(n, xr(n))
}
class Fh extends gt {
    constructor() {
        super(...arguments), this.removeStartListeners = pe, this.removeEndListeners = pe, this.removeAccessibleListeners = pe, this.startPointerPress = (t, n) => {
            if (this.isPressing) return;
            this.removeEndListeners();
            const r = this.node.getProps(),
                i = ze(window, "pointerup", (a, u) => {
                    if (!this.checkPressEnd()) return;
                    const {
                        onTap: c,
                        onTapCancel: l,
                        globalTapTarget: d
                    } = this.node.getProps(), h = !d && !tu(this.node.current, a.target) ? l : c;
                    h && z.update(() => h(a, u))
                }, {
                    passive: !(r.onTap || r.onPointerUp)
                }),
                o = ze(window, "pointercancel", (a, u) => this.cancelPress(a, u), {
                    passive: !(r.onTapCancel || r.onPointerCancel)
                });
            this.removeEndListeners = We(i, o), this.startPress(t, n)
        }, this.startAccessiblePress = () => {
            const t = i => {
                    if (i.key !== "Enter" || this.isPressing) return;
                    const o = a => {
                        a.key !== "Enter" || !this.checkPressEnd() || Er("up", (u, c) => {
                            const {
                                onTap: l
                            } = this.node.getProps();
                            l && z.postRender(() => l(u, c))
                        })
                    };
                    this.removeEndListeners(), this.removeEndListeners = He(this.node.current, "keyup", o), Er("down", (a, u) => {
                        this.startPress(a, u)
                    })
                },
                n = He(this.node.current, "keydown", t),
                r = () => {
                    this.isPressing && Er("cancel", (i, o) => this.cancelPress(i, o))
                },
                s = He(this.node.current, "blur", r);
            this.removeAccessibleListeners = We(n, s)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {
            onTapStart: r,
            whileTap: s
        } = this.node.getProps();
        s && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && z.postRender(() => r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !eu()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd()) return;
        const {
            onTapCancel: r
        } = this.node.getProps();
        r && z.postRender(() => r(t, n))
    }
    mount() {
        const t = this.node.getProps(),
            n = ze(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(t.onTapStart || t.onPointerStart)
            }),
            r = He(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = We(n, r)
    }
    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
    }
}
const as = new WeakMap,
    Rr = new WeakMap,
    Dh = e => {
        const t = as.get(e.target);
        t && t(e)
    },
    Oh = e => {
        e.forEach(Dh)
    };

function Nh({
    root: e,
    ...t
}) {
    const n = e || document;
    Rr.has(n) || Rr.set(n, {});
    const r = Rr.get(n),
        s = JSON.stringify(t);
    return r[s] || (r[s] = new IntersectionObserver(Oh, {
        root: e,
        ...t
    })), r[s]
}

function Bh(e, t, n) {
    const r = Nh(t);
    return as.set(e, n), r.observe(e), () => {
        as.delete(e), r.unobserve(e)
    }
}
const Lh = {
    some: 0,
    all: 1
};
class Vh extends gt {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: n,
            margin: r,
            amount: s = "some",
            once: i
        } = t, o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof s == "number" ? s : Lh[s]
        }, a = u => {
            const {
                isIntersecting: c
            } = u;
            if (this.isInView === c || (this.isInView = c, i && !c && this.hasEnteredView)) return;
            c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
            const {
                onViewportEnter: l,
                onViewportLeave: d
            } = this.node.getProps(), h = c ? l : d;
            h && h(u)
        };
        return Bh(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(Ih(t, n)) && this.startObserver()
    }
    unmount() {}
}

function Ih({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return n => e[n] !== t[n]
}
const Uh = {
    inView: {
        Feature: Vh
    },
    tap: {
        Feature: Fh
    },
    focus: {
        Feature: Rh
    },
    hover: {
        Feature: Eh
    }
};

function nu(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}

function wr(e, t, n) {
    const r = e.getProps();
    return Zs(r, t, n !== void 0 ? n : r.custom, e)
}
const ct = e => e * 1e3,
    Qe = e => e / 1e3,
    $h = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    Kh = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    Gh = {
        type: "keyframes",
        duration: .8
    },
    qh = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    Hh = (e, {
        keyframes: t
    }) => t.length > 2 ? Gh : Dt.has(e) ? e.startsWith("scale") ? Kh(t[1]) : $h : qh;

function zh({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: s,
    repeat: i,
    repeatType: o,
    repeatDelay: a,
    from: u,
    elapsed: c,
    ...l
}) {
    return !!Object.keys(l).length
}

function Xs(e, t) {
    return e[t] || e.default || e
}
const Wh = e => e !== null;

function Ar(e, {
    repeat: t,
    repeatType: n = "loop"
}, r) {
    const s = e.filter(Wh),
        i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
    return !i || r === void 0 ? s[i] : r
}
let er;

function Qh() {
    er = void 0
}
const dt = {
        now: () => (er === void 0 && dt.set(de.isProcessing || Id.useManualTiming ? de.timestamp : performance.now()), er),
        set: e => {
            er = e, queueMicrotask(Qh)
        }
    },
    ru = e => /^0[^.\s]+$/u.test(e);

function Jh(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || ru(e) : !0
}
let us = pe;
const su = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    Yh = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function Zh(e) {
    const t = Yh.exec(e);
    if (!t) return [, ];
    const [, n, r, s] = t;
    return [`--${n??r}`, s]
}

function iu(e, t, n = 1) {
    const [r, s] = Zh(e);
    if (!r) return;
    const i = window.getComputedStyle(t).getPropertyValue(r);
    if (i) {
        const o = i.trim();
        return su(o) ? parseFloat(o) : o
    }
    return qs(s) ? iu(s, t, n + 1) : s
}
const Xh = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    Vi = e => e === sn || e === R,
    Ii = (e, t) => parseFloat(e.split(", ")[t]),
    Ui = (e, t) => (n, {
        transform: r
    }) => {
        if (r === "none" || !r) return 0;
        const s = r.match(/^matrix3d\((.+)\)$/u);
        if (s) return Ii(s[1], t); {
            const i = r.match(/^matrix\((.+)\)$/u);
            return i ? Ii(i[1], e) : 0
        }
    },
    e0 = new Set(["x", "y", "z"]),
    t0 = Bn.filter(e => !e0.has(e));

function n0(e) {
    const t = [];
    return t0.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t
}
const nn = {
    width: ({
        x: e
    }, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({
        y: e
    }, {
        paddingTop: t = "0",
        paddingBottom: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {
        top: t
    }) => parseFloat(t),
    left: (e, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: e
    }, {
        top: t
    }) => parseFloat(t) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: t
    }) => parseFloat(t) + (e.max - e.min),
    x: Ui(4, 13),
    y: Ui(5, 14)
};
nn.translateX = nn.x;
nn.translateY = nn.y;
const ou = e => t => t.test(e),
    r0 = {
        test: e => e === "auto",
        parse: e => e
    },
    au = [sn, R, Ie, et, lh, uh, r0],
    $i = e => au.find(ou(e)),
    Rt = new Set;
let ls = !1,
    cs = !1;

function uu() {
    if (cs) {
        const e = Array.from(Rt).filter(r => r.needsMeasurement),
            t = new Set(e.map(r => r.element)),
            n = new Map;
        t.forEach(r => {
            const s = n0(r);
            s.length && (n.set(r, s), r.render())
        }), e.forEach(r => r.measureInitialState()), t.forEach(r => {
            r.render();
            const s = n.get(r);
            s && s.forEach(([i, o]) => {
                var a;
                (a = r.getValue(i)) === null || a === void 0 || a.set(o)
            })
        }), e.forEach(r => r.measureEndState()), e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        })
    }
    cs = !1, ls = !1, Rt.forEach(e => e.complete()), Rt.clear()
}

function lu() {
    Rt.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (cs = !0)
    })
}

function s0() {
    lu(), uu()
}
class ei {
    constructor(t, n, r, s, i, o = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = s, this.element = i, this.isAsync = o
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (Rt.add(this), ls || (ls = !0, z.read(lu), z.resolveKeyframes(uu))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n,
            element: r,
            motionValue: s
        } = this;
        for (let i = 0; i < t.length; i++)
            if (t[i] === null)
                if (i === 0) {
                    const o = s == null ? void 0 : s.get(),
                        a = t[t.length - 1];
                    if (o !== void 0) t[0] = o;
                    else if (r && n) {
                        const u = r.readValue(n, a);
                        u != null && (t[0] = u)
                    }
                    t[0] === void 0 && (t[0] = a), s && o === void 0 && s.set(t[0])
                } else t[i] = t[i - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Rt.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, Rt.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const ti = (e, t) => n => !!(Ln(n) && ah.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
    cu = (e, t, n) => r => {
        if (!Ln(r)) return r;
        const [s, i, o, a] = r.match(Hs);
        return {
            [e]: parseFloat(s),
            [t]: parseFloat(i),
            [n]: parseFloat(o),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    },
    i0 = e => ht(0, 255, e),
    Fr = { ...sn,
        transform: e => Math.round(i0(e))
    },
    wt = {
        test: ti("rgb", "red"),
        parse: cu("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => "rgba(" + Fr.transform(e) + ", " + Fr.transform(t) + ", " + Fr.transform(n) + ", " + fn(mn.transform(r)) + ")"
    };

function o0(e) {
    let t = "",
        n = "",
        r = "",
        s = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), s = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), s = e.substring(4, 5), t += t, n += n, r += r, s += s), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: s ? parseInt(s, 16) / 255 : 1
    }
}
const ds = {
        test: ti("#"),
        parse: o0,
        transform: wt.transform
    },
    Bt = {
        test: ti("hsl", "hue"),
        parse: cu("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + Ie.transform(fn(t)) + ", " + Ie.transform(fn(n)) + ", " + fn(mn.transform(r)) + ")"
    },
    me = {
        test: e => wt.test(e) || ds.test(e) || Bt.test(e),
        parse: e => wt.test(e) ? wt.parse(e) : Bt.test(e) ? Bt.parse(e) : ds.parse(e),
        transform: e => Ln(e) ? e : e.hasOwnProperty("red") ? wt.transform(e) : Bt.transform(e)
    };

function a0(e) {
    var t, n;
    return isNaN(e) && Ln(e) && (((t = e.match(Hs)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(oh)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const du = "number",
    hu = "color",
    u0 = "var",
    l0 = "var(",
    Ki = "${}",
    c0 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function bn(e) {
    const t = e.toString(),
        n = [],
        r = {
            color: [],
            number: [],
            var: []
        },
        s = [];
    let i = 0;
    const a = t.replace(c0, u => (me.test(u) ? (r.color.push(i), s.push(hu), n.push(me.parse(u))) : u.startsWith(l0) ? (r.var.push(i), s.push(u0), n.push(u)) : (r.number.push(i), s.push(du), n.push(parseFloat(u))), ++i, Ki)).split(Ki);
    return {
        values: n,
        split: a,
        indexes: r,
        types: s
    }
}

function mu(e) {
    return bn(e).values
}

function fu(e) {
    const {
        split: t,
        types: n
    } = bn(e), r = t.length;
    return s => {
        let i = "";
        for (let o = 0; o < r; o++)
            if (i += t[o], s[o] !== void 0) {
                const a = n[o];
                a === du ? i += fn(s[o]) : a === hu ? i += me.transform(s[o]) : i += s[o]
            }
        return i
    }
}
const d0 = e => typeof e == "number" ? 0 : e;

function h0(e) {
    const t = mu(e);
    return fu(e)(t.map(d0))
}
const ft = {
        test: a0,
        parse: mu,
        createTransformer: fu,
        getAnimatableNone: h0
    },
    m0 = new Set(["brightness", "contrast", "saturate", "opacity"]);

function f0(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(Hs) || [];
    if (!r) return e;
    const s = n.replace(r, "");
    let i = m0.has(t) ? 1 : 0;
    return r !== n && (i *= 100), t + "(" + i + s + ")"
}
const p0 = /\b([a-z-]*)\(.*?\)/gu,
    hs = { ...ft,
        getAnimatableNone: e => {
            const t = e.match(p0);
            return t ? t.map(f0).join(" ") : e
        }
    },
    g0 = { ...Ua,
        color: me,
        backgroundColor: me,
        outlineColor: me,
        fill: me,
        stroke: me,
        borderColor: me,
        borderTopColor: me,
        borderRightColor: me,
        borderBottomColor: me,
        borderLeftColor: me,
        filter: hs,
        WebkitFilter: hs
    },
    ni = e => g0[e];

function pu(e, t) {
    let n = ni(e);
    return n !== hs && (n = ft), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const y0 = new Set(["auto", "none", "0"]);

function _0(e, t, n) {
    let r = 0,
        s;
    for (; r < e.length && !s;) {
        const i = e[r];
        typeof i == "string" && !y0.has(i) && bn(i).values.length && (s = e[r]), r++
    }
    if (s && n)
        for (const i of t) e[i] = pu(n, s)
}
class gu extends ei {
    constructor(t, n, r, s) {
        super(t, n, r, s, s == null ? void 0 : s.owner, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            element: n,
            name: r
        } = this;
        if (!n.current) return;
        super.readKeyframes();
        for (let u = 0; u < t.length; u++) {
            const c = t[u];
            if (typeof c == "string" && qs(c)) {
                const l = iu(c, n.current);
                l !== void 0 && (t[u] = l), u === t.length - 1 && (this.finalKeyframe = c)
            }
        }
        if (this.resolveNoneKeyframes(), !Xh.has(r) || t.length !== 2) return;
        const [s, i] = t, o = $i(s), a = $i(i);
        if (o !== a)
            if (Vi(o) && Vi(a))
                for (let u = 0; u < t.length; u++) {
                    const c = t[u];
                    typeof c == "string" && (t[u] = parseFloat(c))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n
        } = this, r = [];
        for (let s = 0; s < t.length; s++) Jh(t[s]) && r.push(s);
        r.length && _0(t, r, n)
    }
    measureInitialState() {
        const {
            element: t,
            unresolvedKeyframes: n,
            name: r
        } = this;
        if (!t.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = nn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
        const s = n[n.length - 1];
        s !== void 0 && t.getValue(r, s).jump(s, !1)
    }
    measureEndState() {
        var t;
        const {
            element: n,
            name: r,
            unresolvedKeyframes: s
        } = this;
        if (!n.current) return;
        const i = n.getValue(r);
        i && i.jump(this.measuredOrigin, !1);
        const o = s.length - 1,
            a = s[o];
        s[o] = nn[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([u, c]) => {
            n.getValue(u).set(c)
        }), this.resolveNoneKeyframes()
    }
}

function v0(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}
const Gi = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (ft.test(e) || e === "0") && !e.startsWith("url("));

function b0(e) {
    const t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t) return !0
}

function x0(e, t, n, r) {
    const s = e[0];
    if (s === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    const i = e[e.length - 1],
        o = Gi(s, t),
        a = Gi(i, t);
    return !o || !a ? !1 : b0(e) || n === "spring" && r
}
class yu {
    constructor({
        autoplay: t = !0,
        delay: n = 0,
        type: r = "keyframes",
        repeat: s = 0,
        repeatDelay: i = 0,
        repeatType: o = "loop",
        ...a
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: s,
            repeatDelay: i,
            repeatType: o,
            ...a
        }, this.updateFinishedPromise()
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && s0(), this._resolved
    }
    onKeyframesResolved(t, n) {
        this.hasAttemptedResolve = !0;
        const {
            name: r,
            type: s,
            velocity: i,
            delay: o,
            onComplete: a,
            onUpdate: u,
            isGenerator: c
        } = this.options;
        if (!c && !x0(t, r, s, i))
            if (o) this.options.duration = 0;
            else {
                u == null || u(Ar(t, this.options, n)), a == null || a(), this.resolveFinishedPromise();
                return
            }
        const l = this.initPlayback(t, n);
        l !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...l
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        })
    }
}

function _u(e, t) {
    return t ? e * (1e3 / t) : 0
}
const w0 = 5;

function vu(e, t, n) {
    const r = Math.max(t - w0, 0);
    return _u(n - e(r), t - r)
}
const Dr = .001,
    A0 = .01,
    S0 = 10,
    C0 = .05,
    k0 = 1;

function T0({
    duration: e = 800,
    bounce: t = .25,
    velocity: n = 0,
    mass: r = 1
}) {
    let s, i, o = 1 - t;
    o = ht(C0, k0, o), e = ht(A0, S0, Qe(e)), o < 1 ? (s = c => {
        const l = c * o,
            d = l * e,
            h = l - n,
            f = ms(c, o),
            g = Math.exp(-d);
        return Dr - h / f * g
    }, i = c => {
        const d = c * o * e,
            h = d * n + n,
            f = Math.pow(o, 2) * Math.pow(c, 2) * e,
            g = Math.exp(-d),
            p = ms(Math.pow(c, 2), o);
        return (-s(c) + Dr > 0 ? -1 : 1) * ((h - f) * g) / p
    }) : (s = c => {
        const l = Math.exp(-c * e),
            d = (c - n) * e + 1;
        return -Dr + l * d
    }, i = c => {
        const l = Math.exp(-c * e),
            d = (n - c) * (e * e);
        return l * d
    });
    const a = 5 / e,
        u = j0(s, i, a);
    if (e = ct(e), isNaN(u)) return {
        stiffness: 100,
        damping: 10,
        duration: e
    }; {
        const c = Math.pow(u, 2) * r;
        return {
            stiffness: c,
            damping: o * 2 * Math.sqrt(r * c),
            duration: e
        }
    }
}
const P0 = 12;

function j0(e, t, n) {
    let r = n;
    for (let s = 1; s < P0; s++) r = r - e(r) / t(r);
    return r
}

function ms(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const M0 = ["duration", "bounce"],
    E0 = ["stiffness", "damping", "mass"];

function qi(e, t) {
    return t.some(n => e[n] !== void 0)
}

function R0(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!qi(e, E0) && qi(e, M0)) {
        const n = T0(e);
        t = { ...t,
            ...n,
            mass: 1
        }, t.isResolvedFromDuration = !0
    }
    return t
}

function bu({
    keyframes: e,
    restDelta: t,
    restSpeed: n,
    ...r
}) {
    const s = e[0],
        i = e[e.length - 1],
        o = {
            done: !1,
            value: s
        },
        {
            stiffness: a,
            damping: u,
            mass: c,
            duration: l,
            velocity: d,
            isResolvedFromDuration: h
        } = R0({ ...r,
            velocity: -Qe(r.velocity || 0)
        }),
        f = d || 0,
        g = u / (2 * Math.sqrt(a * c)),
        p = i - s,
        _ = Qe(Math.sqrt(a / c)),
        v = Math.abs(p) < 5;
    n || (n = v ? .01 : 2), t || (t = v ? .005 : .5);
    let w;
    if (g < 1) {
        const b = ms(_, g);
        w = A => {
            const k = Math.exp(-g * _ * A);
            return i - k * ((f + g * _ * p) / b * Math.sin(b * A) + p * Math.cos(b * A))
        }
    } else if (g === 1) w = b => i - Math.exp(-_ * b) * (p + (f + _ * p) * b);
    else {
        const b = _ * Math.sqrt(g * g - 1);
        w = A => {
            const k = Math.exp(-g * _ * A),
                C = Math.min(b * A, 300);
            return i - k * ((f + g * _ * p) * Math.sinh(C) + b * p * Math.cosh(C)) / b
        }
    }
    return {
        calculatedDuration: h && l || null,
        next: b => {
            const A = w(b);
            if (h) o.done = b >= l;
            else {
                let k = f;
                b !== 0 && (g < 1 ? k = vu(w, b, A) : k = 0);
                const C = Math.abs(k) <= n,
                    U = Math.abs(i - A) <= t;
                o.done = C && U
            }
            return o.value = o.done ? i : A, o
        }
    }
}

function Hi({
    keyframes: e,
    velocity: t = 0,
    power: n = .8,
    timeConstant: r = 325,
    bounceDamping: s = 10,
    bounceStiffness: i = 500,
    modifyTarget: o,
    min: a,
    max: u,
    restDelta: c = .5,
    restSpeed: l
}) {
    const d = e[0],
        h = {
            done: !1,
            value: d
        },
        f = S => a !== void 0 && S < a || u !== void 0 && S > u,
        g = S => a === void 0 ? u : u === void 0 || Math.abs(a - S) < Math.abs(u - S) ? a : u;
    let p = n * t;
    const _ = d + p,
        v = o === void 0 ? _ : o(_);
    v !== _ && (p = v - d);
    const w = S => -p * Math.exp(-S / r),
        b = S => v + w(S),
        A = S => {
            const F = w(S),
                H = b(S);
            h.done = Math.abs(F) <= c, h.value = h.done ? v : H
        };
    let k, C;
    const U = S => {
        f(h.value) && (k = S, C = bu({
            keyframes: [h.value, g(h.value)],
            velocity: vu(b, S, h.value),
            damping: s,
            stiffness: i,
            restDelta: c,
            restSpeed: l
        }))
    };
    return U(0), {
        calculatedDuration: null,
        next: S => {
            let F = !1;
            return !C && k === void 0 && (F = !0, A(S), U(S)), k !== void 0 && S >= k ? C.next(S - k) : (!F && A(S), h)
        }
    }
}
const xu = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    F0 = 1e-7,
    D0 = 12;

function O0(e, t, n, r, s) {
    let i, o, a = 0;
    do o = t + (n - t) / 2, i = xu(o, r, s) - e, i > 0 ? n = o : t = o; while (Math.abs(i) > F0 && ++a < D0);
    return o
}

function In(e, t, n, r) {
    if (e === t && n === r) return pe;
    const s = i => O0(i, 0, 1, e, n);
    return i => i === 0 || i === 1 ? i : xu(s(i), t, r)
}
const N0 = In(.42, 0, 1, 1),
    B0 = In(0, 0, .58, 1),
    wu = In(.42, 0, .58, 1),
    L0 = e => Array.isArray(e) && typeof e[0] != "number",
    Au = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    Su = e => t => 1 - e(1 - t),
    ri = e => 1 - Math.sin(Math.acos(e)),
    Cu = Su(ri),
    V0 = Au(ri),
    ku = In(.33, 1.53, .69, .99),
    si = Su(ku),
    I0 = Au(si),
    U0 = e => (e *= 2) < 1 ? .5 * si(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    zi = {
        linear: pe,
        easeIn: N0,
        easeInOut: wu,
        easeOut: B0,
        circIn: ri,
        circInOut: V0,
        circOut: Cu,
        backIn: si,
        backInOut: I0,
        backOut: ku,
        anticipate: U0
    },
    Wi = e => {
        if (Array.isArray(e)) {
            us(e.length === 4);
            const [t, n, r, s] = e;
            return In(t, n, r, s)
        } else if (typeof e == "string") return us(zi[e] !== void 0), zi[e];
        return e
    },
    xn = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    },
    X = (e, t, n) => e + (t - e) * n;

function Or(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function $0({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let s = 0,
        i = 0,
        o = 0;
    if (!t) s = i = o = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t,
            u = 2 * n - a;
        s = Or(u, a, e + 1 / 3), i = Or(u, a, e), o = Or(u, a, e - 1 / 3)
    }
    return {
        red: Math.round(s * 255),
        green: Math.round(i * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
const Nr = (e, t, n) => {
        const r = e * e,
            s = n * (t * t - r) + r;
        return s < 0 ? 0 : Math.sqrt(s)
    },
    K0 = [ds, wt, Bt],
    G0 = e => K0.find(t => t.test(e));

function Qi(e) {
    const t = G0(e);
    let n = t.parse(e);
    return t === Bt && (n = $0(n)), n
}
const Ji = (e, t) => {
        const n = Qi(e),
            r = Qi(t),
            s = { ...n
            };
        return i => (s.red = Nr(n.red, r.red, i), s.green = Nr(n.green, r.green, i), s.blue = Nr(n.blue, r.blue, i), s.alpha = X(n.alpha, r.alpha, i), wt.transform(s))
    },
    fs = new Set(["none", "hidden"]);

function q0(e, t) {
    return fs.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function ps(e, t) {
    return n => n > 0 ? t : e
}

function H0(e, t) {
    return n => X(e, t, n)
}

function ii(e) {
    return typeof e == "number" ? H0 : typeof e == "string" ? qs(e) ? ps : me.test(e) ? Ji : Q0 : Array.isArray(e) ? Tu : typeof e == "object" ? me.test(e) ? Ji : z0 : ps
}

function Tu(e, t) {
    const n = [...e],
        r = n.length,
        s = e.map((i, o) => ii(i)(i, t[o]));
    return i => {
        for (let o = 0; o < r; o++) n[o] = s[o](i);
        return n
    }
}

function z0(e, t) {
    const n = { ...e,
            ...t
        },
        r = {};
    for (const s in n) e[s] !== void 0 && t[s] !== void 0 && (r[s] = ii(e[s])(e[s], t[s]));
    return s => {
        for (const i in r) n[i] = r[i](s);
        return n
    }
}

function W0(e, t) {
    var n;
    const r = [],
        s = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let i = 0; i < t.values.length; i++) {
        const o = t.types[i],
            a = e.indexes[o][s[o]],
            u = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
        r[i] = u, s[o]++
    }
    return r
}
const Q0 = (e, t) => {
    const n = ft.createTransformer(t),
        r = bn(e),
        s = bn(t);
    return r.indexes.var.length === s.indexes.var.length && r.indexes.color.length === s.indexes.color.length && r.indexes.number.length >= s.indexes.number.length ? fs.has(e) && !s.values.length || fs.has(t) && !r.values.length ? q0(e, t) : We(Tu(W0(r, s), s.values), n) : ps(e, t)
};

function Pu(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? X(e, t, n) : ii(e)(e, t)
}

function J0(e, t, n) {
    const r = [],
        s = n || Pu,
        i = e.length - 1;
    for (let o = 0; o < i; o++) {
        let a = s(e[o], e[o + 1]);
        if (t) {
            const u = Array.isArray(t) ? t[o] || pe : t;
            a = We(u, a)
        }
        r.push(a)
    }
    return r
}

function Y0(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: s
} = {}) {
    const i = e.length;
    if (us(i === t.length), i === 1) return () => t[0];
    if (i === 2 && e[0] === e[1]) return () => t[1];
    e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const o = J0(t, r, s),
        a = o.length,
        u = c => {
            let l = 0;
            if (a > 1)
                for (; l < e.length - 2 && !(c < e[l + 1]); l++);
            const d = xn(e[l], e[l + 1], c);
            return o[l](d)
        };
    return n ? c => u(ht(e[0], e[i - 1], c)) : u
}

function Z0(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const s = xn(0, t, r);
        e.push(X(n, 1, s))
    }
}

function X0(e) {
    const t = [0];
    return Z0(t, e.length - 1), t
}

function em(e, t) {
    return e.map(n => n * t)
}

function tm(e, t) {
    return e.map(() => t || wu).splice(0, e.length - 1)
}

function ar({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut"
}) {
    const s = L0(r) ? r.map(Wi) : Wi(r),
        i = {
            done: !1,
            value: t[0]
        },
        o = em(n && n.length === t.length ? n : X0(t), e),
        a = Y0(o, t, {
            ease: Array.isArray(s) ? s : tm(t, s)
        });
    return {
        calculatedDuration: e,
        next: u => (i.value = a(u), i.done = u >= e, i)
    }
}
const Yi = 2e4;

function nm(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Yi;) t += n, r = e.next(t);
    return t >= Yi ? 1 / 0 : t
}
const rm = e => {
        const t = ({
            timestamp: n
        }) => e(n);
        return {
            start: () => z.update(t, !0),
            stop: () => mt(t),
            now: () => de.isProcessing ? de.timestamp : dt.now()
        }
    },
    sm = {
        decay: Hi,
        inertia: Hi,
        tween: ar,
        keyframes: ar,
        spring: bu
    },
    im = e => e / 100;
class oi extends yu {
    constructor({
        KeyframeResolver: t = ei,
        ...n
    }) {
        super(n), this.holdTime = null, this.startTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: a
            } = this.options;
            a && a()
        };
        const {
            name: r,
            motionValue: s,
            keyframes: i
        } = this.options, o = (a, u) => this.onKeyframesResolved(a, u);
        r && s && s.owner ? this.resolver = s.owner.resolveKeyframes(i, o, r, s) : this.resolver = new t(i, o, r, s), this.resolver.scheduleResolve()
    }
    initPlayback(t) {
        const {
            type: n = "keyframes",
            repeat: r = 0,
            repeatDelay: s = 0,
            repeatType: i,
            velocity: o = 0
        } = this.options, a = sm[n] || ar;
        let u, c;
        a !== ar && typeof t[0] != "number" && (u = We(im, Pu(t[0], t[1])), t = [0, 100]);
        const l = a({ ...this.options,
            keyframes: t
        });
        i === "mirror" && (c = a({ ...this.options,
            keyframes: [...t].reverse(),
            velocity: -o
        })), l.calculatedDuration === null && (l.calculatedDuration = nm(l));
        const {
            calculatedDuration: d
        } = l, h = d + s, f = h * (r + 1) - s;
        return {
            generator: l,
            mirroredGenerator: c,
            mapPercentToKeyframes: u,
            calculatedDuration: d,
            resolvedDuration: h,
            totalDuration: f
        }
    }
    onPostResolved() {
        const {
            autoplay: t = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n = !1) {
        const {
            resolved: r
        } = this;
        if (!r) {
            const {
                keyframes: S
            } = this.options;
            return {
                done: !0,
                value: S[S.length - 1]
            }
        }
        const {
            finalKeyframe: s,
            generator: i,
            mirroredGenerator: o,
            mapPercentToKeyframes: a,
            keyframes: u,
            calculatedDuration: c,
            totalDuration: l,
            resolvedDuration: d
        } = r;
        if (this.startTime === null) return i.next(0);
        const {
            delay: h,
            repeat: f,
            repeatType: g,
            repeatDelay: p,
            onUpdate: _
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - l / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const v = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
            w = this.speed >= 0 ? v < 0 : v > l;
        this.currentTime = Math.max(v, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = l);
        let b = this.currentTime,
            A = i;
        if (f) {
            const S = Math.min(this.currentTime, l) / d;
            let F = Math.floor(S),
                H = S % 1;
            !H && S >= 1 && (H = 1), H === 1 && F--, F = Math.min(F, f + 1), !!(F % 2) && (g === "reverse" ? (H = 1 - H, p && (H -= p / d)) : g === "mirror" && (A = o)), b = ht(0, 1, H) * d
        }
        const k = w ? {
            done: !1,
            value: u[0]
        } : A.next(b);
        a && (k.value = a(k.value));
        let {
            done: C
        } = k;
        !w && c !== null && (C = this.speed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
        const U = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
        return U && s !== void 0 && (k.value = Ar(u, this.options, s)), _ && _(k.value), U && this.finish(), k
    }
    get duration() {
        const {
            resolved: t
        } = this;
        return t ? Qe(t.calculatedDuration) : 0
    }
    get time() {
        return Qe(this.currentTime)
    }
    set time(t) {
        t = ct(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t, n && (this.time = Qe(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: t = rm,
            onPlay: n
        } = this.options;
        this.driver || (this.driver = t(s => this.tick(s))), n && n();
        const r = this.driver.now();
        this.holdTime !== null ? this.startTime = r - this.holdTime : (!this.startTime || this.state === "finished") && (this.startTime = r), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: t
        } = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0, this.tick(t, !0)
    }
}
const ju = e => Array.isArray(e) && typeof e[0] == "number";

function Mu(e) {
    return !!(!e || typeof e == "string" && e in ai || ju(e) || Array.isArray(e) && e.every(Mu))
}
const hn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    ai = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: hn([0, .65, .55, 1]),
        circOut: hn([.55, 0, 1, .45]),
        backIn: hn([.31, .01, .66, -.59]),
        backOut: hn([.33, 1.53, .69, .99])
    };

function om(e) {
    return Eu(e) || ai.easeOut
}

function Eu(e) {
    if (e) return ju(e) ? hn(e) : Array.isArray(e) ? e.map(om) : ai[e]
}

function am(e, t, n, {
    delay: r = 0,
    duration: s = 300,
    repeat: i = 0,
    repeatType: o = "loop",
    ease: a,
    times: u
} = {}) {
    const c = {
        [t]: n
    };
    u && (c.offset = u);
    const l = Eu(a);
    return Array.isArray(l) && (c.easing = l), e.animate(c, {
        delay: r,
        duration: s,
        easing: Array.isArray(l) ? "linear" : l,
        fill: "both",
        iterations: i + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    })
}
const um = v0(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    lm = new Set(["opacity", "clipPath", "filter", "transform"]),
    ur = 10,
    cm = 2e4;

function dm(e) {
    return e.type === "spring" || e.name === "backgroundColor" || !Mu(e.ease)
}

function hm(e, t) {
    const n = new oi({ ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const s = [];
    let i = 0;
    for (; !r.done && i < cm;) r = n.sample(i), s.push(r.value), i += ur;
    return {
        times: void 0,
        keyframes: s,
        duration: i - ur,
        ease: "linear"
    }
}
class Zi extends yu {
    constructor(t) {
        super(t);
        const {
            name: n,
            motionValue: r,
            keyframes: s
        } = this.options;
        this.resolver = new gu(s, (i, o) => this.onKeyframesResolved(i, o), n, r), this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        var r;
        let {
            duration: s = 300,
            times: i,
            ease: o,
            type: a,
            motionValue: u,
            name: c
        } = this.options;
        if (!(!((r = u.owner) === null || r === void 0) && r.current)) return !1;
        if (dm(this.options)) {
            const {
                onComplete: d,
                onUpdate: h,
                motionValue: f,
                ...g
            } = this.options, p = hm(t, g);
            t = p.keyframes, t.length === 1 && (t[1] = t[0]), s = p.duration, i = p.times, o = p.ease, a = "keyframes"
        }
        const l = am(u.owner.current, c, t, { ...this.options,
            duration: s,
            times: i,
            ease: o
        });
        return l.startTime = dt.now(), this.pendingTimeline ? (l.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : l.onfinish = () => {
            const {
                onComplete: d
            } = this.options;
            u.set(Ar(t, this.options, n)), d && d(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: l,
            duration: s,
            times: i,
            type: a,
            ease: o,
            keyframes: t
        }
    }
    get duration() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            duration: n
        } = t;
        return Qe(n)
    }
    get time() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            animation: n
        } = t;
        return Qe(n.currentTime || 0)
    }
    set time(t) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: r
        } = n;
        r.currentTime = ct(t)
    }
    get speed() {
        const {
            resolved: t
        } = this;
        if (!t) return 1;
        const {
            animation: n
        } = t;
        return n.playbackRate
    }
    set speed(t) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: r
        } = n;
        r.playbackRate = t
    }
    get state() {
        const {
            resolved: t
        } = this;
        if (!t) return "idle";
        const {
            animation: n
        } = t;
        return n.playState
    }
    attachTimeline(t) {
        if (!this._resolved) this.pendingTimeline = t;
        else {
            const {
                resolved: n
            } = this;
            if (!n) return pe;
            const {
                animation: r
            } = n;
            r.timeline = t, r.onfinish = null
        }
        return pe
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n
        } = t;
        n.playState === "finished" && this.updateFinishedPromise(), n.play()
    }
    pause() {
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n
        } = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n,
            keyframes: r,
            duration: s,
            type: i,
            ease: o,
            times: a
        } = t;
        if (!(n.playState === "idle" || n.playState === "finished")) {
            if (this.time) {
                const {
                    motionValue: u,
                    onUpdate: c,
                    onComplete: l,
                    ...d
                } = this.options, h = new oi({ ...d,
                    keyframes: r,
                    duration: s,
                    type: i,
                    ease: o,
                    times: a,
                    isGenerator: !0
                }), f = ct(this.time);
                u.setWithVelocity(h.sample(f - ur).value, h.sample(f).value, ur)
            }
            this.cancel()
        }
    }
    complete() {
        const {
            resolved: t
        } = this;
        t && t.animation.finish()
    }
    cancel() {
        const {
            resolved: t
        } = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {
            motionValue: n,
            name: r,
            repeatDelay: s,
            repeatType: i,
            damping: o,
            type: a
        } = t;
        return um() && r && lm.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !s && i !== "mirror" && o !== 0 && a !== "inertia"
    }
}
const ui = (e, t, n, r = {}, s, i) => o => {
    const a = Xs(r, e) || {},
        u = a.delay || r.delay || 0;
    let {
        elapsed: c = 0
    } = r;
    c = c - ct(u);
    let l = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: h => {
            t.set(h), a.onUpdate && a.onUpdate(h)
        },
        onComplete: () => {
            o(), a.onComplete && a.onComplete()
        },
        name: e,
        motionValue: t,
        element: i ? void 0 : s
    };
    zh(a) || (l = { ...l,
        ...Hh(e, l)
    }), l.duration && (l.duration = ct(l.duration)), l.repeatDelay && (l.repeatDelay = ct(l.repeatDelay)), l.from !== void 0 && (l.keyframes[0] = l.from);
    let d = !1;
    if ((l.type === !1 || l.duration === 0 && !l.repeatDelay) && (l.duration = 0, l.delay === 0 && (d = !0)), d && !i && t.get() !== void 0) {
        const h = Ar(l.keyframes, a);
        if (h !== void 0) {
            z.update(() => {
                l.onUpdate(h), l.onComplete()
            });
            return
        }
    }
    return !i && Zi.supports(l) ? new Zi(l) : new oi(l)
};

function lr(e) {
    return !!(fe(e) && e.add)
}

function li(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function ci(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class di {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return li(this.subscriptions, t), () => ci(this.subscriptions, t)
    }
    notify(t, n, r) {
        const s = this.subscriptions.length;
        if (s)
            if (s === 1) this.subscriptions[0](t, n, r);
            else
                for (let i = 0; i < s; i++) {
                    const o = this.subscriptions[i];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Xi = 30,
    mm = e => !isNaN(parseFloat(e));
class fm {
    constructor(t, n = {}) {
        this.version = "11.2.6", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, s = !0) => {
            const i = dt.now();
            this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), s && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t, this.updatedAt = dt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = mm(this.current))
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new di);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(), z.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t, this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n = !0) {
        this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = dt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Xi) return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Xi);
        return _u(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
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

function wn(e, t) {
    return new fm(e, t)
}

function pm(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, wn(n))
}

function gm(e, t) {
    const n = wr(e, t);
    let {
        transitionEnd: r = {},
        transition: s = {},
        ...i
    } = n || {};
    i = { ...i,
        ...r
    };
    for (const o in i) {
        const a = Ah(i[o]);
        pm(e, o, a)
    }
}

function ym({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

function Ru(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: s
} = {}) {
    var i;
    let {
        transition: o = e.getDefaultTransition(),
        transitionEnd: a,
        ...u
    } = t;
    const c = e.getValue("willChange");
    r && (o = r);
    const l = [],
        d = s && e.animationState && e.animationState.getState()[s];
    for (const h in u) {
        const f = e.getValue(h, (i = e.latestValues[h]) !== null && i !== void 0 ? i : null),
            g = u[h];
        if (g === void 0 || d && ym(d, h)) continue;
        const p = {
            delay: n,
            elapsed: 0,
            ...Xs(o || {}, h)
        };
        let _ = !1;
        if (window.HandoffAppearAnimations) {
            const b = e.getProps()[Da];
            if (b) {
                const A = window.HandoffAppearAnimations(b, h, f, z);
                A !== null && (p.elapsed = A, _ = !0)
            }
        }
        f.start(ui(h, f, g, e.shouldReduceMotion && Dt.has(h) ? {
            type: !1
        } : p, e, _));
        const v = f.animation;
        v && (lr(c) && (c.add(h), v.then(() => c.remove(h))), l.push(v))
    }
    return a && Promise.all(l).then(() => {
        z.update(() => {
            a && gm(e, a)
        })
    }), l
}

function gs(e, t, n = {}) {
    var r;
    const s = wr(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let {
        transition: i = e.getDefaultTransition() || {}
    } = s || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = s ? () => Promise.all(Ru(e, s, n)) : () => Promise.resolve(),
        a = e.variantChildren && e.variantChildren.size ? (c = 0) => {
            const {
                delayChildren: l = 0,
                staggerChildren: d,
                staggerDirection: h
            } = i;
            return _m(e, t, l + c, d, h, n)
        } : () => Promise.resolve(),
        {
            when: u
        } = i;
    if (u) {
        const [c, l] = u === "beforeChildren" ? [o, a] : [a, o];
        return c().then(() => l())
    } else return Promise.all([o(), a(n.delay)])
}

function _m(e, t, n = 0, r = 0, s = 1, i) {
    const o = [],
        a = (e.variantChildren.size - 1) * r,
        u = s === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
    return Array.from(e.variantChildren).sort(vm).forEach((c, l) => {
        c.notify("AnimationStart", t), o.push(gs(c, t, { ...i,
            delay: n + u(l)
        }).then(() => c.notify("AnimationComplete", t)))
    }), Promise.all(o)
}

function vm(e, t) {
    return e.sortNodePosition(t)
}

function bm(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const s = t.map(i => gs(e, i, n));
        r = Promise.all(s)
    } else if (typeof t == "string") r = gs(e, t, n);
    else {
        const s = typeof t == "function" ? wr(e, t, n.custom) : t;
        r = Promise.all(Ru(e, s, n))
    }
    return r.then(() => {
        z.postRender(() => {
            e.notify("AnimationComplete", t)
        })
    })
}
const xm = [...Us].reverse(),
    wm = Us.length;

function Am(e) {
    return t => Promise.all(t.map(({
        animation: n,
        options: r
    }) => bm(e, n, r)))
}

function Sm(e) {
    let t = Am(e);
    const n = km();
    let r = !0;
    const s = u => (c, l) => {
        var d;
        const h = wr(e, l, u === "exit" ? (d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom : void 0);
        if (h) {
            const {
                transition: f,
                transitionEnd: g,
                ...p
            } = h;
            c = { ...c,
                ...p,
                ...g
            }
        }
        return c
    };

    function i(u) {
        t = u(e)
    }

    function o(u) {
        const c = e.getProps(),
            l = e.getVariantContext(!0) || {},
            d = [],
            h = new Set;
        let f = {},
            g = 1 / 0;
        for (let _ = 0; _ < wm; _++) {
            const v = xm[_],
                w = n[v],
                b = c[v] !== void 0 ? c[v] : l[v],
                A = _n(b),
                k = v === u ? w.isActive : null;
            k === !1 && (g = _);
            let C = b === l[v] && b !== c[v] && A;
            if (C && r && e.manuallyAnimateOnMount && (C = !1), w.protectedKeys = { ...f
                }, !w.isActive && k === null || !b && !w.prevProp || vr(b) || typeof b == "boolean") continue;
            let S = Cm(w.prevProp, b) || v === u && w.isActive && !C && A || _ > g && A,
                F = !1;
            const H = Array.isArray(b) ? b : [b];
            let ge = H.reduce(s(v), {});
            k === !1 && (ge = {});
            const {
                prevResolvedValues: I = {}
            } = w, Re = { ...I,
                ...ge
            }, be = se => {
                S = !0, h.has(se) && (F = !0, h.delete(se)), w.needsAnimating[se] = !0;
                const he = e.getValue(se);
                he && (he.liveStyle = !1)
            };
            for (const se in Re) {
                const he = ge[se],
                    Je = I[se];
                if (f.hasOwnProperty(se)) continue;
                let $e = !1;
                os(he) && os(Je) ? $e = !nu(he, Je) : $e = he !== Je, $e ? he != null ? be(se) : h.add(se) : he !== void 0 && h.has(se) ? be(se) : w.protectedKeys[se] = !0
            }
            w.prevProp = b, w.prevResolvedValues = ge, w.isActive && (f = { ...f,
                ...ge
            }), r && e.blockInitialAnimation && (S = !1), S && (!C || F) && d.push(...H.map(se => ({
                animation: se,
                options: {
                    type: v
                }
            })))
        }
        if (h.size) {
            const _ = {};
            h.forEach(v => {
                const w = e.getBaseTarget(v),
                    b = e.getValue(v);
                b && (b.liveStyle = !0), _[v] = w ? ? null
            }), d.push({
                animation: _
            })
        }
        let p = !!d.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (p = !1), r = !1, p ? t(d) : Promise.resolve()
    }

    function a(u, c) {
        var l;
        if (n[u].isActive === c) return Promise.resolve();
        (l = e.variantChildren) === null || l === void 0 || l.forEach(h => {
            var f;
            return (f = h.animationState) === null || f === void 0 ? void 0 : f.setActive(u, c)
        }), n[u].isActive = c;
        const d = o(u);
        for (const h in n) n[h].protectedKeys = {};
        return d
    }
    return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: i,
        getState: () => n
    }
}

function Cm(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !nu(t, e) : !1
}

function _t(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function km() {
    return {
        animate: _t(!0),
        whileInView: _t(),
        whileHover: _t(),
        whileTap: _t(),
        whileDrag: _t(),
        whileFocus: _t(),
        exit: _t()
    }
}
class Tm extends gt {
    constructor(t) {
        super(t), t.animationState || (t.animationState = Sm(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        this.unmount(), vr(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let Pm = 0;
class jm extends gt {
    constructor() {
        super(...arguments), this.id = Pm++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: n
        } = this.node.presenceContext, {
            isPresent: r
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r) return;
        const s = this.node.animationState.setActive("exit", !t);
        n && !t && s.then(() => n(this.id))
    }
    mount() {
        const {
            register: t
        } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const Mm = {
        animation: {
            Feature: Tm
        },
        exit: {
            Feature: jm
        }
    },
    eo = (e, t) => Math.abs(e - t);

function Em(e, t) {
    const n = eo(e.x, t.x),
        r = eo(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class Fu {
    constructor(t, n, {
        transformPagePoint: r,
        contextWindow: s,
        dragSnapToOrigin: i = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const d = Lr(this.lastMoveEventInfo, this.history),
                    h = this.startEvent !== null,
                    f = Em(d.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!h && !f) return;
                const {
                    point: g
                } = d, {
                    timestamp: p
                } = de;
                this.history.push({ ...g,
                    timestamp: p
                });
                const {
                    onStart: _,
                    onMove: v
                } = this.handlers;
                h || (_ && _(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, d)
            }, this.handlePointerMove = (d, h) => {
                this.lastMoveEvent = d, this.lastMoveEventInfo = Br(h, this.transformPagePoint), z.update(this.updatePoint, !0)
            }, this.handlePointerUp = (d, h) => {
                this.end();
                const {
                    onEnd: f,
                    onSessionEnd: g,
                    resumeAnimation: p
                } = this.handlers;
                if (this.dragSnapToOrigin && p && p(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const _ = Lr(d.type === "pointercancel" ? this.lastMoveEventInfo : Br(h, this.transformPagePoint), this.history);
                this.startEvent && f && f(d, _), g && g(d, _)
            }, !Ya(t)) return;
        this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.contextWindow = s || window;
        const o = xr(t),
            a = Br(o, this.transformPagePoint),
            {
                point: u
            } = a,
            {
                timestamp: c
            } = de;
        this.history = [{ ...u,
            timestamp: c
        }];
        const {
            onSessionStart: l
        } = n;
        l && l(t, Lr(a, this.history)), this.removeListeners = We(ze(this.contextWindow, "pointermove", this.handlePointerMove), ze(this.contextWindow, "pointerup", this.handlePointerUp), ze(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), mt(this.updatePoint)
    }
}

function Br(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function to(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function Lr({
    point: e
}, t) {
    return {
        point: e,
        delta: to(e, Du(t)),
        offset: to(e, Rm(t)),
        velocity: Fm(t, .1)
    }
}

function Rm(e) {
    return e[0]
}

function Du(e) {
    return e[e.length - 1]
}

function Fm(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        r = null;
    const s = Du(e);
    for (; n >= 0 && (r = e[n], !(s.timestamp - r.timestamp > ct(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    const i = Qe(s.timestamp - r.timestamp);
    if (i === 0) return {
        x: 0,
        y: 0
    };
    const o = {
        x: (s.x - r.x) / i,
        y: (s.y - r.y) / i
    };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
}

function ke(e) {
    return e.max - e.min
}

function ys(e, t = 0, n = .01) {
    return Math.abs(e - t) <= n
}

function no(e, t, n, r = .5) {
    e.origin = r, e.originPoint = X(t.min, t.max, e.origin), e.scale = ke(n) / ke(t), (ys(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = X(n.min, n.max, e.origin) - e.originPoint, (ys(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}

function pn(e, t, n, r) {
    no(e.x, t.x, n.x, r ? r.originX : void 0), no(e.y, t.y, n.y, r ? r.originY : void 0)
}

function ro(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + ke(t)
}

function Dm(e, t, n) {
    ro(e.x, t.x, n.x), ro(e.y, t.y, n.y)
}

function so(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + ke(t)
}

function gn(e, t, n) {
    so(e.x, t.x, n.x), so(e.y, t.y, n.y)
}

function Om(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? X(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? X(n, e, r.max) : Math.min(e, n)), e
}

function io(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}

function Nm(e, {
    top: t,
    left: n,
    bottom: r,
    right: s
}) {
    return {
        x: io(e.x, n, s),
        y: io(e.y, t, r)
    }
}

function oo(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}

function Bm(e, t) {
    return {
        x: oo(e.x, t.x),
        y: oo(e.y, t.y)
    }
}

function Lm(e, t) {
    let n = .5;
    const r = ke(e),
        s = ke(t);
    return s > r ? n = xn(t.min, t.max - r, e.min) : r > s && (n = xn(e.min, e.max - s, t.min)), ht(0, 1, n)
}

function Vm(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const _s = .35;

function Im(e = _s) {
    return e === !1 ? e = 0 : e === !0 && (e = _s), {
        x: ao(e, "left", "right"),
        y: ao(e, "top", "bottom")
    }
}

function ao(e, t, n) {
    return {
        min: uo(e, t),
        max: uo(e, n)
    }
}

function uo(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const lo = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    Lt = () => ({
        x: lo(),
        y: lo()
    }),
    co = () => ({
        min: 0,
        max: 0
    }),
    ie = () => ({
        x: co(),
        y: co()
    });

function je(e) {
    return [e("x"), e("y")]
}

function Ou({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}

function Um({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function $m(e, t) {
    if (!t) return e;
    const n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}

function Vr(e) {
    return e === void 0 || e === 1
}

function vs({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !Vr(e) || !Vr(t) || !Vr(n)
}

function vt(e) {
    return vs(e) || Nu(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function Nu(e) {
    return ho(e.x) || ho(e.y)
}

function ho(e) {
    return e && e !== "0%"
}

function cr(e, t, n) {
    const r = e - n,
        s = t * r;
    return n + s
}

function mo(e, t, n, r, s) {
    return s !== void 0 && (e = cr(e, s, r)), cr(e, n, r) + t
}

function bs(e, t = 0, n = 1, r, s) {
    e.min = mo(e.min, t, n, r, s), e.max = mo(e.max, t, n, r, s)
}

function Bu(e, {
    x: t,
    y: n
}) {
    bs(e.x, t.translate, t.scale, t.originPoint), bs(e.y, n.translate, n.scale, n.originPoint)
}

function Km(e, t, n, r = !1) {
    const s = n.length;
    if (!s) return;
    t.x = t.y = 1;
    let i, o;
    for (let a = 0; a < s; a++) {
        i = n[a], o = i.projectionDelta;
        const u = i.instance;
        u && u.style && u.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && Vt(e, {
            x: -i.scroll.offset.x,
            y: -i.scroll.offset.y
        }), o && (t.x *= o.x.scale, t.y *= o.y.scale, Bu(e, o)), r && vt(i.latestValues) && Vt(e, i.latestValues))
    }
    t.x = fo(t.x), t.y = fo(t.y)
}

function fo(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}

function tt(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function po(e, t, [n, r, s]) {
    const i = t[s] !== void 0 ? t[s] : .5,
        o = X(e.min, e.max, i);
    bs(e, t[n], t[r], o, t.scale)
}
const Gm = ["x", "scaleX", "originX"],
    qm = ["y", "scaleY", "originY"];

function Vt(e, t) {
    po(e.x, t, Gm), po(e.y, t, qm)
}

function Lu(e, t) {
    return Ou($m(e.getBoundingClientRect(), t))
}

function Hm(e, t, n) {
    const r = Lu(e, n),
        {
            scroll: s
        } = t;
    return s && (tt(r.x, s.offset.x), tt(r.y, s.offset.y)), r
}
const Vu = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    zm = new WeakMap;
class Wm {
    constructor(t) {
        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ie(), this.visualElement = t
    }
    start(t, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: r
        } = this.visualElement;
        if (r && r.isPresent === !1) return;
        const s = l => {
                const {
                    dragSnapToOrigin: d
                } = this.getProps();
                d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(xr(l, "page").point)
            },
            i = (l, d) => {
                const {
                    drag: h,
                    dragPropagation: f,
                    onDragStart: g
                } = this.getProps();
                if (h && !f && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Xa(h), !this.openGlobalLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), je(_ => {
                    let v = this.getAxisMotionValue(_).get() || 0;
                    if (Ie.test(v)) {
                        const {
                            projection: w
                        } = this.visualElement;
                        if (w && w.layout) {
                            const b = w.layout.layoutBox[_];
                            b && (v = ke(b) * (parseFloat(v) / 100))
                        }
                    }
                    this.originPoint[_] = v
                }), g && z.postRender(() => g(l, d));
                const {
                    animationState: p
                } = this.visualElement;
                p && p.setActive("whileDrag", !0)
            },
            o = (l, d) => {
                const {
                    dragPropagation: h,
                    dragDirectionLock: f,
                    onDirectionLock: g,
                    onDrag: p
                } = this.getProps();
                if (!h && !this.openGlobalLock) return;
                const {
                    offset: _
                } = d;
                if (f && this.currentDirection === null) {
                    this.currentDirection = Qm(_), this.currentDirection !== null && g && g(this.currentDirection);
                    return
                }
                this.updateAxis("x", d.point, _), this.updateAxis("y", d.point, _), this.visualElement.render(), p && p(l, d)
            },
            a = (l, d) => this.stop(l, d),
            u = () => je(l => {
                var d;
                return this.getAnimationState(l) === "paused" && ((d = this.getAxisMotionValue(l).animation) === null || d === void 0 ? void 0 : d.play())
            }),
            {
                dragSnapToOrigin: c
            } = this.getProps();
        this.panSession = new Fu(t, {
            onSessionStart: s,
            onStart: i,
            onMove: o,
            onSessionEnd: a,
            resumeAnimation: u
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            contextWindow: Vu(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(), !r) return;
        const {
            velocity: s
        } = n;
        this.startAnimation(s);
        const {
            onDragEnd: i
        } = this.getProps();
        i && z.postRender(() => i(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: n
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {
            drag: s
        } = this.getProps();
        if (!r || !Wn(t, s, this.currentDirection)) return;
        const i = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = Om(o, this.constraints[t], this.elastic[t])), i.set(o)
    }
    resolveConstraints() {
        var t;
        const {
            dragConstraints: n,
            dragElastic: r
        } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
        n && Nt(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = Nm(s.layoutBox, n) : this.constraints = !1, this.elastic = Im(r), i !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && je(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Vm(s.layoutBox[o], this.constraints[o]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!t || !Nt(t)) return !1;
        const r = t.current,
            {
                projection: s
            } = this.visualElement;
        if (!s || !s.layout) return !1;
        const i = Hm(r, s.root, this.visualElement.getTransformPagePoint());
        let o = Bm(s.layout.layoutBox, i);
        if (n) {
            const a = n(Um(o));
            this.hasMutatedConstraints = !!a, a && (o = Ou(a))
        }
        return o
    }
    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: s,
            dragTransition: i,
            dragSnapToOrigin: o,
            onDragTransitionEnd: a
        } = this.getProps(), u = this.constraints || {}, c = je(l => {
            if (!Wn(l, n, this.currentDirection)) return;
            let d = u && u[l] || {};
            o && (d = {
                min: 0,
                max: 0
            });
            const h = s ? 200 : 1e6,
                f = s ? 40 : 1e7,
                g = {
                    type: "inertia",
                    velocity: r ? t[l] : 0,
                    bounceStiffness: h,
                    bounceDamping: f,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...i,
                    ...d
                };
            return this.startAxisValueAnimation(l, g)
        });
        return Promise.all(c).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(ui(t, r, 0, n, this.visualElement))
    }
    stopAnimation() {
        je(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        je(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        })
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`,
            r = this.visualElement.getProps(),
            s = r[n];
        return s || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        je(n => {
            const {
                drag: r
            } = this.getProps();
            if (!Wn(n, r, this.currentDirection)) return;
            const {
                projection: s
            } = this.visualElement, i = this.getAxisMotionValue(n);
            if (s && s.layout) {
                const {
                    min: o,
                    max: a
                } = s.layout.layoutBox[n];
                i.set(t[n] - X(o, a, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: n
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!Nt(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const s = {
            x: 0,
            y: 0
        };
        je(o => {
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== !1) {
                const u = a.get();
                s[o] = Lm({
                    min: u,
                    max: u
                }, this.constraints[o])
            }
        });
        const {
            transformTemplate: i
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), je(o => {
            if (!Wn(o, t, null)) return;
            const a = this.getAxisMotionValue(o),
                {
                    min: u,
                    max: c
                } = this.constraints[o];
            a.set(X(u, c, s[o]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        zm.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = ze(t, "pointerdown", u => {
                const {
                    drag: c,
                    dragListener: l = !0
                } = this.getProps();
                c && l && this.start(u)
            }),
            r = () => {
                const {
                    dragConstraints: u
                } = this.getProps();
                Nt(u) && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: s
            } = this.visualElement,
            i = s.addEventListener("measure", r);
        s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), r();
        const o = He(window, "resize", () => this.scalePositionWithinConstraints()),
            a = s.addEventListener("didUpdate", ({
                delta: u,
                hasLayoutChanged: c
            }) => {
                this.isDragging && c && (je(l => {
                    const d = this.getAxisMotionValue(l);
                    d && (this.originPoint[l] += u[l].translate, d.set(d.get() + u[l].translate))
                }), this.visualElement.render())
            });
        return () => {
            o(), n(), i(), a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: s = !1,
                dragConstraints: i = !1,
                dragElastic: o = _s,
                dragMomentum: a = !0
            } = t;
        return { ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: s,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: a
        }
    }
}

function Wn(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function Qm(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class Jm extends gt {
    constructor(t) {
        super(t), this.removeGroupControls = pe, this.removeListeners = pe, this.controls = new Wm(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || pe
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const go = e => (t, n) => {
    e && z.postRender(() => e(t, n))
};
class Ym extends gt {
    constructor() {
        super(...arguments), this.removePointerDownListener = pe
    }
    onPointerDown(t) {
        this.session = new Fu(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Vu(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: s
        } = this.node.getProps();
        return {
            onSessionStart: go(t),
            onStart: go(n),
            onMove: r,
            onEnd: (i, o) => {
                delete this.session, s && z.postRender(() => s(i, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = ze(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}

function Zm() {
    const e = x.useContext(_r);
    if (e === null) return [!0, null];
    const {
        isPresent: t,
        onExitComplete: n,
        register: r
    } = e, s = x.useId();
    return x.useEffect(() => r(s), []), !t && n ? [!1, () => n && n(s)] : [!0]
}
const tr = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function yo(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const un = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (R.test(e)) e = parseFloat(e);
                else return e;
            const n = yo(e, t.target.x),
                r = yo(e, t.target.y);
            return `${n}% ${r}%`
        }
    },
    Xm = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            const r = e,
                s = ft.parse(e);
            if (s.length > 5) return r;
            const i = ft.createTransformer(e),
                o = typeof s[0] != "number" ? 1 : 0,
                a = n.x.scale * t.x,
                u = n.y.scale * t.y;
            s[0 + o] /= a, s[1 + o] /= u;
            const c = X(a, u, .5);
            return typeof s[2 + o] == "number" && (s[2 + o] /= c), typeof s[3 + o] == "number" && (s[3 + o] /= c), i(s)
        }
    };
class ef extends x.Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
            layoutId: s
        } = this.props, {
            projection: i
        } = t;
        Xd(tf), i && (n.group && n.group.add(i), r && r.register && s && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), i.setOptions({ ...i.options,
            onExitComplete: () => this.safeToRemove()
        })), tr.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: r,
            drag: s,
            isPresent: i
        } = this.props, o = r.projection;
        return o && (o.isPresent = i, s || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? o.promote() : o.relegate() || z.postRender(() => {
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), Is.postRender(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r
        } = this.props, {
            projection: s
        } = t;
        s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), r && r.deregister && r.deregister(s))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function Iu(e) {
    const [t, n] = Zm(), r = x.useContext(Ks);
    return m.jsx(ef, { ...e,
        layoutGroup: r,
        switchLayoutGroup: x.useContext(Ba),
        isPresent: t,
        safeToRemove: n
    })
}
const tf = {
        borderRadius: { ...un,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: un,
        borderTopRightRadius: un,
        borderBottomLeftRadius: un,
        borderBottomRightRadius: un,
        boxShadow: Xm
    },
    Uu = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    nf = Uu.length,
    _o = e => typeof e == "string" ? parseFloat(e) : e,
    vo = e => typeof e == "number" || R.test(e);

function rf(e, t, n, r, s, i) {
    s ? (e.opacity = X(0, n.opacity !== void 0 ? n.opacity : 1, sf(r)), e.opacityExit = X(t.opacity !== void 0 ? t.opacity : 1, 0, of (r))) : i && (e.opacity = X(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let o = 0; o < nf; o++) {
        const a = `border${Uu[o]}Radius`;
        let u = bo(t, a),
            c = bo(n, a);
        if (u === void 0 && c === void 0) continue;
        u || (u = 0), c || (c = 0), u === 0 || c === 0 || vo(u) === vo(c) ? (e[a] = Math.max(X(_o(u), _o(c), r), 0), (Ie.test(c) || Ie.test(u)) && (e[a] += "%")) : e[a] = c
    }(t.rotate || n.rotate) && (e.rotate = X(t.rotate || 0, n.rotate || 0, r))
}

function bo(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const sf = $u(0, .5, Cu),
    of = $u(.5, .95, pe);

function $u(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(xn(e, t, r))
}

function xo(e, t) {
    e.min = t.min, e.max = t.max
}

function Pe(e, t) {
    xo(e.x, t.x), xo(e.y, t.y)
}

function wo(e, t, n, r, s) {
    return e -= t, e = cr(e, 1 / n, r), s !== void 0 && (e = cr(e, 1 / s, r)), e
}

function af(e, t = 0, n = 1, r = .5, s, i = e, o = e) {
    if (Ie.test(t) && (t = parseFloat(t), t = X(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
    let a = X(i.min, i.max, r);
    e === i && (a -= t), e.min = wo(e.min, t, n, a, s), e.max = wo(e.max, t, n, a, s)
}

function Ao(e, t, [n, r, s], i, o) {
    af(e, t[n], t[r], t[s], t.scale, i, o)
}
const uf = ["x", "scaleX", "originX"],
    lf = ["y", "scaleY", "originY"];

function So(e, t, n, r) {
    Ao(e.x, t, uf, n ? n.x : void 0, r ? r.x : void 0), Ao(e.y, t, lf, n ? n.y : void 0, r ? r.y : void 0)
}

function Co(e) {
    return e.translate === 0 && e.scale === 1
}

function Ku(e) {
    return Co(e.x) && Co(e.y)
}

function cf(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}

function Gu(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
}

function ko(e) {
    return ke(e.x) / ke(e.y)
}
class df {
    constructor() {
        this.members = []
    }
    add(t) {
        li(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if (ci(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(s => t === s);
        if (n === 0) return !1;
        let r;
        for (let s = n; s >= 0; s--) {
            const i = this.members[s];
            if (i.isPresent !== !1) {
                r = i;
                break
            }
        }
        return r ? (this.promote(r), !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: s
            } = t.options;
            s === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {
                options: n,
                resumingFrom: r
            } = t;
            n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function To(e, t, n) {
    let r = "";
    const s = e.x.translate / t.x,
        i = e.y.translate / t.y,
        o = (n == null ? void 0 : n.z) || 0;
    if ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
        const {
            transformPerspective: c,
            rotate: l,
            rotateX: d,
            rotateY: h,
            skewX: f,
            skewY: g
        } = n;
        c && (r = `perspective(${c}px) ${r}`), l && (r += `rotate(${l}deg) `), d && (r += `rotateX(${d}deg) `), h && (r += `rotateY(${h}deg) `), f && (r += `skewX(${f}deg) `), g && (r += `skewY(${g}deg) `)
    }
    const a = e.x.scale * t.x,
        u = e.y.scale * t.y;
    return (a !== 1 || u !== 1) && (r += `scale(${a}, ${u})`), r || "none"
}
const hf = (e, t) => e.depth - t.depth;
class mf {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        li(this.children, t), this.isDirty = !0
    }
    remove(t) {
        ci(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(hf), this.isDirty = !1, this.children.forEach(t)
    }
}

function ff(e, t) {
    const n = dt.now(),
        r = ({
            timestamp: s
        }) => {
            const i = s - n;
            i >= t && (mt(r), e(i - t))
        };
    return z.read(r, !0), () => mt(r)
}

function pf(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}

function gf(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}

function yf(e, t, n) {
    const r = fe(e) ? e : wn(e);
    return r.start(ui("", r, t, n)), r.animation
}
const Ir = ["", "X", "Y", "Z"],
    _f = {
        visibility: "hidden"
    },
    Po = 1e3;
let vf = 0;
const bt = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};

function Ur(e, t, n, r) {
    const {
        latestValues: s
    } = t;
    s[e] && (n[e] = s[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function qu({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: s
}) {
    return class {
        constructor(o = {}, a = t == null ? void 0 : t()) {
            this.id = vf++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, bt.totalNodes = bt.resolvedTargetDeltas = bt.recalculatedProjection = 0, this.nodes.forEach(wf), this.nodes.forEach(Tf), this.nodes.forEach(Pf), this.nodes.forEach(Af), pf(bt)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let u = 0; u < this.path.length; u++) this.path[u].shouldResetTransform = !0;
            this.root === this && (this.nodes = new mf)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new di), this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const u = this.eventHandlers.get(o);
            u && u.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, a = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = gf(o), this.instance = o;
            const {
                layoutId: u,
                layout: c,
                visualElement: l
            } = this.options;
            if (l && !l.current && l.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || u) && (this.isLayoutDirty = !0), e) {
                let d;
                const h = () => this.root.updateBlockedByResize = !1;
                e(o, () => {
                    this.root.updateBlockedByResize = !0, d && d(), d = ff(h, 250), tr.hasAnimatedSinceResize && (tr.hasAnimatedSinceResize = !1, this.nodes.forEach(Mo))
                })
            }
            u && this.root.registerSharedNode(u, this), this.options.animate !== !1 && l && (u || c) && this.addEventListener("didUpdate", ({
                delta: d,
                hasLayoutChanged: h,
                hasRelativeTargetChanged: f,
                layout: g
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const p = this.options.transition || l.getDefaultTransition() || Ff,
                    {
                        onLayoutAnimationStart: _,
                        onLayoutAnimationComplete: v
                    } = l.getProps(),
                    w = !this.targetLayout || !Gu(this.targetLayout, g) || f,
                    b = !h && f;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || b || h && (w || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, b);
                    const A = { ...Xs(p, "layout"),
                        onPlay: _,
                        onComplete: v
                    };
                    (l.shouldReduceMotion || this.options.layoutRoot) && (A.delay = 0, A.type = !1), this.startAnimation(A)
                } else h || Mo(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = g
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, mt(this.updateProjection)
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
            this.isUpdateBlocked() || (this.isUpdating = !0, window.HandoffCancelAllAnimations && window.HandoffCancelAllAnimations(), this.nodes && this.nodes.forEach(jf), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: o
            } = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let l = 0; l < this.path.length; l++) {
                const d = this.path[l];
                d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1)
            }
            const {
                layoutId: a,
                layout: u
            } = this.options;
            if (a === void 0 && !u) return;
            const c = this.getTransformTemplate();
            this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(jo);
                return
            }
            this.isUpdating || this.nodes.forEach(Cf), this.isUpdating = !1, this.nodes.forEach(kf), this.nodes.forEach(bf), this.nodes.forEach(xf), this.clearAllSnapshots();
            const a = dt.now();
            de.delta = ht(0, 1e3 / 60, a - de.timestamp), de.timestamp = a, de.isProcessing = !0, Mr.update.process(de), Mr.preRender.process(de), Mr.render.process(de), de.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Is.read(() => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Sf), this.sharedNodes.forEach(Mf)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, z.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            z.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let u = 0; u < this.path.length; u++) this.path[u].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = ie(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: a
            } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1), a && (this.scroll = {
                animationId: this.root.animationId,
                phase: o,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!s) return;
            const o = this.isLayoutDirty || this.shouldResetTransform,
                a = this.projectionDelta && !Ku(this.projectionDelta),
                u = this.getTransformTemplate(),
                c = u ? u(this.latestValues, "") : void 0,
                l = c !== this.prevTransformTemplateValue;
            o && (a || vt(this.latestValues) || l) && (s(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(o = !0) {
            const a = this.measurePageBox();
            let u = this.removeElementScroll(a);
            return o && (u = this.removeTransform(u)), Df(u), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: u,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {
                visualElement: o
            } = this.options;
            if (!o) return ie();
            const a = o.measureViewportBox(),
                {
                    scroll: u
                } = this.root;
            return u && (tt(a.x, u.offset.x), tt(a.y, u.offset.y)), a
        }
        removeElementScroll(o) {
            const a = ie();
            Pe(a, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u],
                    {
                        scroll: l,
                        options: d
                    } = c;
                if (c !== this.root && l && d.layoutScroll) {
                    if (l.isRoot) {
                        Pe(a, o);
                        const {
                            scroll: h
                        } = this.root;
                        h && (tt(a.x, -h.offset.x), tt(a.y, -h.offset.y))
                    }
                    tt(a.x, l.offset.x), tt(a.y, l.offset.y)
                }
            }
            return a
        }
        applyTransform(o, a = !1) {
            const u = ie();
            Pe(u, o);
            for (let c = 0; c < this.path.length; c++) {
                const l = this.path[c];
                !a && l.options.layoutScroll && l.scroll && l !== l.root && Vt(u, {
                    x: -l.scroll.offset.x,
                    y: -l.scroll.offset.y
                }), vt(l.latestValues) && Vt(u, l.latestValues)
            }
            return vt(this.latestValues) && Vt(u, this.latestValues), u
        }
        removeTransform(o) {
            const a = ie();
            Pe(a, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                if (!c.instance || !vt(c.latestValues)) continue;
                vs(c.latestValues) && c.updateSnapshot();
                const l = ie(),
                    d = c.measurePageBox();
                Pe(l, d), So(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, l)
            }
            return vt(this.latestValues) && So(a, this.latestValues), a
        }
        setTargetDelta(o) {
            this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = { ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== de.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o = !1) {
            var a;
            const u = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = u.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = u.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = u.isSharedProjectionDirty);
            const c = !!this.resumingFrom || this !== u;
            if (!(o || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget)) return;
            const {
                layout: d,
                layoutId: h
            } = this.options;
            if (!(!this.layout || !(d || h))) {
                if (this.resolvedRelativeTargetAt = de.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const f = this.getClosestProjectingParent();
                    f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ie(), this.relativeTargetOrigin = ie(), gn(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), Pe(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = ie(), this.targetWithTransforms = ie()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Dm(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Pe(this.target, this.layout.layoutBox), Bu(this.target, this.targetDelta)) : Pe(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const f = this.getClosestProjectingParent();
                        f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ie(), this.relativeTargetOrigin = ie(), gn(this.relativeTargetOrigin, this.target, f.target), Pe(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    bt.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || vs(this.parent.latestValues) || Nu(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var o;
            const a = this.getLead(),
                u = !!this.resumingFrom || this !== a;
            let c = !0;
            if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (c = !1), u && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === de.timestamp && (c = !1), c) return;
            const {
                layout: l,
                layoutId: d
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(l || d)) return;
            Pe(this.layoutCorrected, this.layout.layoutBox);
            const h = this.treeScale.x,
                f = this.treeScale.y;
            Km(this.layoutCorrected, this.treeScale, this.path, u), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = ie());
            const {
                target: g
            } = a;
            if (!g) {
                this.projectionTransform && (this.projectionDelta = Lt(), this.projectionTransform = "none", this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = Lt(), this.projectionDeltaWithTransform = Lt());
            const p = this.projectionTransform;
            pn(this.projectionDelta, this.layoutCorrected, g, this.latestValues), this.projectionTransform = To(this.projectionDelta, this.treeScale), (this.projectionTransform !== p || this.treeScale.x !== h || this.treeScale.y !== f) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), bt.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o = !0) {
            if (this.options.scheduleRender && this.options.scheduleRender(), o) {
                const a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(o, a = !1) {
            const u = this.snapshot,
                c = u ? u.latestValues : {},
                l = { ...this.latestValues
                },
                d = Lt();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            const h = ie(),
                f = u ? u.source : void 0,
                g = this.layout ? this.layout.source : void 0,
                p = f !== g,
                _ = this.getStack(),
                v = !_ || _.members.length <= 1,
                w = !!(p && !v && this.options.crossfade === !0 && !this.path.some(Rf));
            this.animationProgress = 0;
            let b;
            this.mixTargetDelta = A => {
                const k = A / 1e3;
                Eo(d.x, o.x, k), Eo(d.y, o.y, k), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (gn(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Ef(this.relativeTarget, this.relativeTargetOrigin, h, k), b && cf(this.relativeTarget, b) && (this.isProjectionDirty = !1), b || (b = ie()), Pe(b, this.relativeTarget)), p && (this.animationValues = l, rf(l, c, this.latestValues, k, w, v)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (mt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = z.update(() => {
                tr.hasAnimatedSinceResize = !0, this.currentAnimation = yf(0, Po, { ...o,
                    onUpdate: a => {
                        this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a)
                    },
                    onComplete: () => {
                        o.onComplete && o.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Po), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {
                targetWithTransforms: a,
                target: u,
                layout: c,
                latestValues: l
            } = o;
            if (!(!a || !u || !c)) {
                if (this !== o && this.layout && c && Hu(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
                    u = this.target || ie();
                    const d = ke(this.layout.layoutBox.x);
                    u.x.min = o.target.x.min, u.x.max = u.x.min + d;
                    const h = ke(this.layout.layoutBox.y);
                    u.y.min = o.target.y.min, u.y.max = u.y.min + h
                }
                Pe(a, u), Vt(a, l), pn(this.projectionDeltaWithTransform, this.layoutCorrected, a, l)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new df), this.sharedNodes.get(o).add(a);
            const c = a.options.initialPromotionConfig;
            a.promote({
                transition: c ? c.transition : void 0,
                preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var o;
            const {
                layoutId: a
            } = this.options;
            return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
        }
        getPrevLead() {
            var o;
            const {
                layoutId: a
            } = this.options;
            return a ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: o
            } = this.options;
            if (o) return this.root.sharedNodes.get(o)
        }
        promote({
            needsReset: o,
            transition: a,
            preserveFollowOpacity: u
        } = {}) {
            const c = this.getStack();
            c && c.promote(this, u), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: o
            } = this.options;
            if (!o) return;
            let a = !1;
            const {
                latestValues: u
            } = o;
            if ((u.z || u.rotate || u.rotateX || u.rotateY || u.rotateZ || u.skewX || u.skewY) && (a = !0), !a) return;
            const c = {};
            u.z && Ur("z", o, c, this.animationValues);
            for (let l = 0; l < Ir.length; l++) Ur(`rotate${Ir[l]}`, o, c, this.animationValues), Ur(`skew${Ir[l]}`, o, c, this.animationValues);
            o.render();
            for (const l in c) o.setStaticValue(l, c[l]), this.animationValues && (this.animationValues[l] = c[l]);
            o.scheduleRender()
        }
        getProjectionStyles(o) {
            var a, u;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return _f;
            const c = {
                    visibility: ""
                },
                l = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, c.opacity = "", c.pointerEvents = Xn(o == null ? void 0 : o.pointerEvents) || "", c.transform = l ? l(this.latestValues, "") : "none", c;
            const d = this.getLead();
            if (!this.projectionDelta || !this.layout || !d.target) {
                const p = {};
                return this.options.layoutId && (p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, p.pointerEvents = Xn(o == null ? void 0 : o.pointerEvents) || ""), this.hasProjected && !vt(this.latestValues) && (p.transform = l ? l({}, "") : "none", this.hasProjected = !1), p
            }
            const h = d.animationValues || d.latestValues;
            this.applyTransformsToTarget(), c.transform = To(this.projectionDeltaWithTransform, this.treeScale, h), l && (c.transform = l(h, c.transform));
            const {
                x: f,
                y: g
            } = this.projectionDelta;
            c.transformOrigin = `${f.origin*100}% ${g.origin*100}% 0`, d.animationValues ? c.opacity = d === this ? (u = (a = h.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && u !== void 0 ? u : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : c.opacity = d === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
            for (const p in ir) {
                if (h[p] === void 0) continue;
                const {
                    correct: _,
                    applyTo: v
                } = ir[p], w = c.transform === "none" ? h[p] : _(h[p], d);
                if (v) {
                    const b = v.length;
                    for (let A = 0; A < b; A++) c[v[A]] = w
                } else c[p] = w
            }
            return this.options.layoutId && (c.pointerEvents = d === this ? Xn(o == null ? void 0 : o.pointerEvents) || "" : "none"), c
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var a;
                return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }), this.root.nodes.forEach(jo), this.root.sharedNodes.clear()
        }
    }
}

function bf(e) {
    e.updateLayout()
}

function xf(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {
            layoutBox: r,
            measuredBox: s
        } = e.layout, {
            animationType: i
        } = e.options, o = n.source !== e.layout.source;
        i === "size" ? je(d => {
            const h = o ? n.measuredBox[d] : n.layoutBox[d],
                f = ke(h);
            h.min = r[d].min, h.max = h.min + f
        }) : Hu(i, n.layoutBox, r) && je(d => {
            const h = o ? n.measuredBox[d] : n.layoutBox[d],
                f = ke(r[d]);
            h.max = h.min + f, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + f)
        });
        const a = Lt();
        pn(a, r, n.layoutBox);
        const u = Lt();
        o ? pn(u, e.applyTransform(s, !0), n.measuredBox) : pn(u, r, n.layoutBox);
        const c = !Ku(a);
        let l = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {
                    snapshot: h,
                    layout: f
                } = d;
                if (h && f) {
                    const g = ie();
                    gn(g, n.layoutBox, h.layoutBox);
                    const p = ie();
                    gn(p, r, f.layoutBox), Gu(g, p) || (l = !0), d.options.layoutRoot && (e.relativeTarget = p, e.relativeTargetOrigin = g, e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: u,
            layoutDelta: a,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: l
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: r
        } = e.options;
        r && r()
    }
    e.options.transition = void 0
}

function wf(e) {
    bt.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function Af(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function Sf(e) {
    e.clearSnapshot()
}

function jo(e) {
    e.clearMeasurements()
}

function Cf(e) {
    e.isLayoutDirty = !1
}

function kf(e) {
    const {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function Mo(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function Tf(e) {
    e.resolveTargetDelta()
}

function Pf(e) {
    e.calcProjection()
}

function jf(e) {
    e.resetSkewAndRotation()
}

function Mf(e) {
    e.removeLeadSnapshot()
}

function Eo(e, t, n) {
    e.translate = X(t.translate, 0, n), e.scale = X(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function Ro(e, t, n, r) {
    e.min = X(t.min, n.min, r), e.max = X(t.max, n.max, r)
}

function Ef(e, t, n, r) {
    Ro(e.x, t.x, n.x, r), Ro(e.y, t.y, n.y, r)
}

function Rf(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const Ff = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    Fo = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    Do = Fo("applewebkit/") && !Fo("chrome/") ? Math.round : pe;

function Oo(e) {
    e.min = Do(e.min), e.max = Do(e.max)
}

function Df(e) {
    Oo(e.x), Oo(e.y)
}

function Hu(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !ys(ko(t), ko(n), .2)
}
const Of = qu({
        attachResizeListener: (e, t) => He(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    $r = {
        current: void 0
    },
    zu = qu({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!$r.current) {
                const e = new Of({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), $r.current = e
            }
            return $r.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    Nf = {
        pan: {
            Feature: Ym
        },
        drag: {
            Feature: Jm,
            ProjectionNode: zu,
            MeasureLayout: Iu
        }
    },
    xs = {
        current: null
    },
    Wu = {
        current: !1
    };

function Bf() {
    if (Wu.current = !0, !!Bs)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => xs.current = e.matches;
            e.addListener(t), t()
        } else xs.current = !1
}

function Lf(e, t, n) {
    const {
        willChange: r
    } = t;
    for (const s in t) {
        const i = t[s],
            o = n[s];
        if (fe(i)) e.addValue(s, i), lr(r) && r.add(s);
        else if (fe(o)) e.addValue(s, wn(i, {
            owner: e
        })), lr(r) && r.remove(s);
        else if (o !== i)
            if (e.hasValue(s)) {
                const a = e.getValue(s);
                a.liveStyle === !0 ? a.jump(i) : a.hasAnimated || a.set(i)
            } else {
                const a = e.getStaticValue(s);
                e.addValue(s, wn(a !== void 0 ? a : i, {
                    owner: e
                }))
            }
    }
    for (const s in n) t[s] === void 0 && e.removeValue(s);
    return t
}
const No = new WeakMap,
    Vf = [...au, me, ft],
    If = e => Vf.find(ou(e)),
    Qu = Object.keys(vn),
    Uf = Qu.length,
    Bo = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
    $f = $s.length;

function Ju(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : Ju(e.parent)
}
class Kf {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: s,
        blockInitialAnimation: i,
        visualState: o
    }, a = {}) {
        this.resolveKeyframes = (h, f, g, p) => new this.KeyframeResolver(h, f, g, p, this), this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = ei, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.scheduleRender = () => z.render(this.render, !1, !0);
        const {
            latestValues: u,
            renderState: c
        } = o;
        this.latestValues = u, this.baseTarget = { ...u
        }, this.initialValues = n.initial ? { ...u
        } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!i, this.isControllingVariants = br(n), this.isVariantNode = Na(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
        const {
            willChange: l,
            ...d
        } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in d) {
            const f = d[h];
            u[h] !== void 0 && fe(f) && (f.set(u[h], !1), lr(l) && l.add(h))
        }
    }
    mount(t) {
        this.current = t, No.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Wu.current || Bf(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : xs.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        var t;
        No.delete(this.current), this.projection && this.projection.unmount(), mt(this.notifyUpdate), mt(this.render), this.valueSubscriptions.forEach(n => n()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const n in this.events) this.events[n].clear();
        for (const n in this.features)(t = this.features[n]) === null || t === void 0 || t.unmount();
        this.current = null
    }
    bindToMotionValue(t, n) {
        const r = Dt.has(t),
            s = n.on("change", o => {
                this.latestValues[t] = o, this.props.onUpdate && z.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0)
            }),
            i = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, () => {
            s(), i(), n.owner && n.stop()
        })
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    loadFeatures({
        children: t,
        ...n
    }, r, s, i) {
        let o, a;
        for (let u = 0; u < Uf; u++) {
            const c = Qu[u],
                {
                    isEnabled: l,
                    Feature: d,
                    ProjectionNode: h,
                    MeasureLayout: f
                } = vn[c];
            h && (o = h), l(n) && (!this.features[c] && d && (this.features[c] = new d(this)), f && (a = f))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && o) {
            const {
                layoutId: u,
                layout: c,
                drag: l,
                dragConstraints: d,
                layoutScroll: h,
                layoutRoot: f
            } = n;
            this.projection = new o(this.latestValues, n["data-framer-portal-id"] ? void 0 : Ju(this.parent)), this.projection.setOptions({
                layoutId: u,
                layout: c,
                alwaysMeasureLayout: !!l || d && Nt(d),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof c == "string" ? c : "both",
                initialPromotionConfig: i,
                layoutScroll: h,
                layoutRoot: f
            })
        }
        return a
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update() : (n.mount(), n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ie()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let r = 0; r < Bo.length; r++) {
            const s = Bo[r];
            this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
            const i = "on" + s,
                o = t[i];
            o && (this.propEventSubscriptions[s] = this.on(s, o))
        }
        this.prevMotionValues = Lf(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
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
    getVariantContext(t = !1) {
        if (t) return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial), r
        }
        const n = {};
        for (let r = 0; r < $f; r++) {
            const s = $s[r],
                i = this.props[s];
            (_n(i) || i === !1) && (n[s] = i)
        }
        return n
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = wn(n === null ? void 0 : n, {
            owner: this
        }), this.addValue(t, r)), r
    }
    readValue(t, n) {
        var r;
        let s = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return s != null && (typeof s == "string" && (su(s) || ru(s)) ? s = parseFloat(s) : !If(s) && ft.test(n) && (s = pu(t, n)), this.setBaseTarget(t, fe(s) ? s.get() : s)), fe(s) ? s.get() : s
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {
            initial: r
        } = this.props;
        let s;
        if (typeof r == "string" || typeof r == "object") {
            const o = Zs(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            o && (s = o[t])
        }
        if (r && s !== void 0) return s;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !fe(i) ? i : this.initialValues[t] !== void 0 && s === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new di), this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class Yu extends Kf {
    constructor() {
        super(...arguments), this.KeyframeResolver = gu
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {
        vars: n,
        style: r
    }) {
        delete n[t], delete r[t]
    }
}

function Gf(e) {
    return window.getComputedStyle(e)
}
class qf extends Yu {
    constructor() {
        super(...arguments), this.type = "html"
    }
    readValueFromInstance(t, n) {
        if (Dt.has(n)) {
            const r = ni(n);
            return r && r.default || 0
        } else {
            const r = Gf(t),
                s = (Ia(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof s == "string" ? s.trim() : s
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: n
    }) {
        return Lu(t, n)
    }
    build(t, n, r, s) {
        zs(t, n, r, s.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Ys(t, n, r)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        fe(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
    renderInstance(t, n, r, s) {
        qa(t, n, r, s)
    }
}
class Hf extends Yu {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Dt.has(n)) {
            const r = ni(n);
            return r && r.default || 0
        }
        return n = Ha.has(n) ? n : Vs(n), t.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return ie()
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Wa(t, n, r)
    }
    build(t, n, r, s) {
        Qs(t, n, r, this.isSVGTag, s.transformTemplate)
    }
    renderInstance(t, n, r, s) {
        za(t, n, r, s)
    }
    mount(t) {
        this.isSVGTag = Js(t.tagName), super.mount(t)
    }
}
const zf = (e, t) => Gs(e) ? new Hf(t, {
        enableHardwareAcceleration: !1
    }) : new qf(t, {
        allowProjection: e !== x.Fragment,
        enableHardwareAcceleration: !0
    }),
    Wf = {
        layout: {
            ProjectionNode: zu,
            MeasureLayout: Iu
        }
    },
    Qf = { ...Mm,
        ...Uh,
        ...Nf,
        ...Wf
    },
    Un = Yd((e, t) => Ph(e, t, Qf, zf));

function Zu() {
    const e = x.useRef(!1);
    return Ls(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}

function Jf() {
    const e = Zu(),
        [t, n] = x.useState(0),
        r = x.useCallback(() => {
            e.current && n(t + 1)
        }, [t]);
    return [x.useCallback(() => z.postRender(r), [r]), t]
}
class Yf extends x.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function Zf({
    children: e,
    isPresent: t
}) {
    const n = x.useId(),
        r = x.useRef(null),
        s = x.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        }),
        {
            nonce: i
        } = x.useContext(Ns);
    return x.useInsertionEffect(() => {
        const {
            width: o,
            height: a,
            top: u,
            left: c
        } = s.current;
        if (t || !r.current || !o || !a) return;
        r.current.dataset.motionPopId = n;
        const l = document.createElement("style");
        return i && (l.nonce = i), document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${u}px !important;
            left: ${c}px !important;
          }
        `), () => {
            document.head.removeChild(l)
        }
    }, [t]), m.jsx(Yf, {
        isPresent: t,
        childRef: r,
        sizeRef: s,
        children: x.cloneElement(e, {
            ref: r
        })
    })
}
const Kr = ({
    children: e,
    initial: t,
    isPresent: n,
    onExitComplete: r,
    custom: s,
    presenceAffectsLayout: i,
    mode: o
}) => {
    const a = Qa(Xf),
        u = x.useId(),
        c = x.useMemo(() => ({
            id: u,
            initial: t,
            isPresent: n,
            custom: s,
            onExitComplete: l => {
                a.set(l, !0);
                for (const d of a.values())
                    if (!d) return;
                r && r()
            },
            register: l => (a.set(l, !1), () => a.delete(l))
        }), i ? [Math.random()] : [n]);
    return x.useMemo(() => {
        a.forEach((l, d) => a.set(d, !1))
    }, [n]), x.useEffect(() => {
        !n && !a.size && r && r()
    }, [n]), o === "popLayout" && (e = m.jsx(Zf, {
        isPresent: n,
        children: e
    })), m.jsx(_r.Provider, {
        value: c,
        children: e
    })
};

function Xf() {
    return new Map
}

function e6(e) {
    return x.useEffect(() => () => e(), [])
}
const xt = e => e.key || "";

function t6(e, t) {
    e.forEach(n => {
        const r = xt(n);
        t.set(r, n)
    })
}

function n6(e) {
    const t = [];
    return x.Children.forEach(e, n => {
        x.isValidElement(n) && t.push(n)
    }), t
}
const Sr = ({
        children: e,
        custom: t,
        initial: n = !0,
        onExitComplete: r,
        exitBeforeEnter: s,
        presenceAffectsLayout: i = !0,
        mode: o = "sync"
    }) => {
        const a = x.useContext(Ks).forceRender || Jf()[0],
            u = Zu(),
            c = n6(e);
        let l = c;
        const d = x.useRef(new Map).current,
            h = x.useRef(l),
            f = x.useRef(new Map).current,
            g = x.useRef(!0);
        if (Ls(() => {
                g.current = !1, t6(c, f), h.current = l
            }), e6(() => {
                g.current = !0, f.clear(), d.clear()
            }), g.current) return m.jsx(m.Fragment, {
            children: l.map(w => m.jsx(Kr, {
                isPresent: !0,
                initial: n ? void 0 : !1,
                presenceAffectsLayout: i,
                mode: o,
                children: w
            }, xt(w)))
        });
        l = [...l];
        const p = h.current.map(xt),
            _ = c.map(xt),
            v = p.length;
        for (let w = 0; w < v; w++) {
            const b = p[w];
            _.indexOf(b) === -1 && !d.has(b) && d.set(b, void 0)
        }
        return o === "wait" && d.size && (l = []), d.forEach((w, b) => {
            if (_.indexOf(b) !== -1) return;
            const A = f.get(b);
            if (!A) return;
            const k = p.indexOf(b);
            let C = w;
            if (!C) {
                const U = () => {
                    d.delete(b);
                    const S = Array.from(f.keys()).filter(F => !_.includes(F));
                    if (S.forEach(F => f.delete(F)), h.current = c.filter(F => {
                            const H = xt(F);
                            return H === b || S.includes(H)
                        }), !d.size) {
                        if (u.current === !1) return;
                        a(), r && r()
                    }
                };
                C = m.jsx(Kr, {
                    isPresent: !1,
                    onExitComplete: U,
                    custom: t,
                    presenceAffectsLayout: i,
                    mode: o,
                    children: A
                }, xt(A)), d.set(b, C)
            }
            l.splice(k, 0, C)
        }), l = l.map(w => {
            const b = w.key;
            return d.has(b) ? w : m.jsx(Kr, {
                isPresent: !0,
                presenceAffectsLayout: i,
                mode: o,
                children: w
            }, xt(w))
        }), m.jsx(m.Fragment, {
            children: d.size ? l : l.map(w => x.cloneElement(w))
        })
    },
    hi = "-";

function r6(e) {
    const t = i6(e),
        {
            conflictingClassGroups: n,
            conflictingClassGroupModifiers: r
        } = e;

    function s(o) {
        const a = o.split(hi);
        return a[0] === "" && a.length !== 1 && a.shift(), Xu(a, t) || s6(o)
    }

    function i(o, a) {
        const u = n[o] || [];
        return a && r[o] ? [...u, ...r[o]] : u
    }
    return {
        getClassGroupId: s,
        getConflictingClassGroupIds: i
    }
}

function Xu(e, t) {
    var o;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
        r = t.nextPart.get(n),
        s = r ? Xu(e.slice(1), r) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const i = e.join(hi);
    return (o = t.validators.find(({
        validator: a
    }) => a(i))) == null ? void 0 : o.classGroupId
}
const Lo = /^\[(.+)\]$/;

function s6(e) {
    if (Lo.test(e)) {
        const t = Lo.exec(e)[1],
            n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n) return "arbitrary.." + n
    }
}

function i6(e) {
    const {
        theme: t,
        prefix: n
    } = e, r = {
        nextPart: new Map,
        validators: []
    };
    return a6(Object.entries(e.classGroups), n).forEach(([i, o]) => {
        ws(o, r, i, t)
    }), r
}

function ws(e, t, n, r) {
    e.forEach(s => {
        if (typeof s == "string") {
            const i = s === "" ? t : Vo(t, s);
            i.classGroupId = n;
            return
        }
        if (typeof s == "function") {
            if (o6(s)) {
                ws(s(r), t, n, r);
                return
            }
            t.validators.push({
                validator: s,
                classGroupId: n
            });
            return
        }
        Object.entries(s).forEach(([i, o]) => {
            ws(o, Vo(t, i), n, r)
        })
    })
}

function Vo(e, t) {
    let n = e;
    return t.split(hi).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }), n = n.nextPart.get(r)
    }), n
}

function o6(e) {
    return e.isThemeGetter
}

function a6(e, t) {
    return t ? e.map(([n, r]) => {
        const s = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([o, a]) => [t + o, a])) : i);
        return [n, s]
    }) : e
}

function u6(e) {
    if (e < 1) return {
        get: () => {},
        set: () => {}
    };
    let t = 0,
        n = new Map,
        r = new Map;

    function s(i, o) {
        n.set(i, o), t++, t > e && (t = 0, r = n, n = new Map)
    }
    return {
        get(i) {
            let o = n.get(i);
            if (o !== void 0) return o;
            if ((o = r.get(i)) !== void 0) return s(i, o), o
        },
        set(i, o) {
            n.has(i) ? n.set(i, o) : s(i, o)
        }
    }
}
const el = "!";

function l6(e) {
    const t = e.separator,
        n = t.length === 1,
        r = t[0],
        s = t.length;
    return function(o) {
        const a = [];
        let u = 0,
            c = 0,
            l;
        for (let p = 0; p < o.length; p++) {
            let _ = o[p];
            if (u === 0) {
                if (_ === r && (n || o.slice(p, p + s) === t)) {
                    a.push(o.slice(c, p)), c = p + s;
                    continue
                }
                if (_ === "/") {
                    l = p;
                    continue
                }
            }
            _ === "[" ? u++ : _ === "]" && u--
        }
        const d = a.length === 0 ? o : o.substring(c),
            h = d.startsWith(el),
            f = h ? d.substring(1) : d,
            g = l && l > c ? l - c : void 0;
        return {
            modifiers: a,
            hasImportantModifier: h,
            baseClassName: f,
            maybePostfixModifierPosition: g
        }
    }
}

function c6(e) {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
    }), t.push(...n.sort()), t
}

function d6(e) {
    return {
        cache: u6(e.cacheSize),
        splitModifiers: l6(e),
        ...r6(e)
    }
}
const h6 = /\s+/;

function m6(e, t) {
    const {
        splitModifiers: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: s
    } = t, i = new Set;
    return e.trim().split(h6).map(o => {
        const {
            modifiers: a,
            hasImportantModifier: u,
            baseClassName: c,
            maybePostfixModifierPosition: l
        } = n(o);
        let d = r(l ? c.substring(0, l) : c),
            h = !!l;
        if (!d) {
            if (!l) return {
                isTailwindClass: !1,
                originalClassName: o
            };
            if (d = r(c), !d) return {
                isTailwindClass: !1,
                originalClassName: o
            };
            h = !1
        }
        const f = c6(a).join(":");
        return {
            isTailwindClass: !0,
            modifierId: u ? f + el : f,
            classGroupId: d,
            originalClassName: o,
            hasPostfixModifier: h
        }
    }).reverse().filter(o => {
        if (!o.isTailwindClass) return !0;
        const {
            modifierId: a,
            classGroupId: u,
            hasPostfixModifier: c
        } = o, l = a + u;
        return i.has(l) ? !1 : (i.add(l), s(u, c).forEach(d => i.add(a + d)), !0)
    }).reverse().map(o => o.originalClassName).join(" ")
}

function f6() {
    let e = 0,
        t, n, r = "";
    for (; e < arguments.length;)(t = arguments[e++]) && (n = tl(t)) && (r && (r += " "), r += n);
    return r
}

function tl(e) {
    if (typeof e == "string") return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = tl(e[r])) && (n && (n += " "), n += t);
    return n
}

function p6(e, ...t) {
    let n, r, s, i = o;

    function o(u) {
        const c = t.reduce((l, d) => d(l), e());
        return n = d6(c), r = n.cache.get, s = n.cache.set, i = a, a(u)
    }

    function a(u) {
        const c = r(u);
        if (c) return c;
        const l = m6(u, n);
        return s(u, l), l
    }
    return function() {
        return i(f6.apply(null, arguments))
    }
}

function Z(e) {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0, t
}
const nl = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    g6 = /^\d+\/\d+$/,
    y6 = new Set(["px", "full", "screen"]),
    _6 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    v6 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    b6 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    x6 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    w6 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;

function Ke(e) {
    return At(e) || y6.has(e) || g6.test(e)
}

function Ye(e) {
    return on(e, "length", M6)
}

function At(e) {
    return !!e && !Number.isNaN(Number(e))
}

function Qn(e) {
    return on(e, "number", At)
}

function ln(e) {
    return !!e && Number.isInteger(Number(e))
}

function A6(e) {
    return e.endsWith("%") && At(e.slice(0, -1))
}

function L(e) {
    return nl.test(e)
}

function Ze(e) {
    return _6.test(e)
}
const S6 = new Set(["length", "size", "percentage"]);

function C6(e) {
    return on(e, S6, rl)
}

function k6(e) {
    return on(e, "position", rl)
}
const T6 = new Set(["image", "url"]);

function P6(e) {
    return on(e, T6, R6)
}

function j6(e) {
    return on(e, "", E6)
}

function cn() {
    return !0
}

function on(e, t, n) {
    const r = nl.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}

function M6(e) {
    return v6.test(e) && !b6.test(e)
}

function rl() {
    return !1
}

function E6(e) {
    return x6.test(e)
}

function R6(e) {
    return w6.test(e)
}

function F6() {
    const e = Z("colors"),
        t = Z("spacing"),
        n = Z("blur"),
        r = Z("brightness"),
        s = Z("borderColor"),
        i = Z("borderRadius"),
        o = Z("borderSpacing"),
        a = Z("borderWidth"),
        u = Z("contrast"),
        c = Z("grayscale"),
        l = Z("hueRotate"),
        d = Z("invert"),
        h = Z("gap"),
        f = Z("gradientColorStops"),
        g = Z("gradientColorStopPositions"),
        p = Z("inset"),
        _ = Z("margin"),
        v = Z("opacity"),
        w = Z("padding"),
        b = Z("saturate"),
        A = Z("scale"),
        k = Z("sepia"),
        C = Z("skew"),
        U = Z("space"),
        S = Z("translate"),
        F = () => ["auto", "contain", "none"],
        H = () => ["auto", "hidden", "clip", "visible", "scroll"],
        ge = () => ["auto", L, t],
        I = () => [L, t],
        Re = () => ["", Ke, Ye],
        be = () => ["auto", At, L],
        se = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
        he = () => ["solid", "dashed", "dotted", "double", "none"],
        Je = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
        $e = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
        yt = () => ["", "0", L],
        E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
        B = () => [At, Qn],
        oe = () => [At, L];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [cn],
            spacing: [Ke, Ye],
            blur: ["none", "", Ze, L],
            brightness: B(),
            borderColor: [e],
            borderRadius: ["none", "", "full", Ze, L],
            borderSpacing: I(),
            borderWidth: Re(),
            contrast: B(),
            grayscale: yt(),
            hueRotate: oe(),
            invert: yt(),
            gap: I(),
            gradientColorStops: [e],
            gradientColorStopPositions: [A6, Ye],
            inset: ge(),
            margin: ge(),
            opacity: B(),
            padding: I(),
            saturate: B(),
            scale: B(),
            sepia: yt(),
            skew: oe(),
            space: I(),
            translate: I()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", L]
            }],
            container: ["container"],
            columns: [{
                columns: [Ze]
            }],
            "break-after": [{
                "break-after": E()
            }],
            "break-before": [{
                "break-before": E()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...se(), L]
            }],
            overflow: [{
                overflow: H()
            }],
            "overflow-x": [{
                "overflow-x": H()
            }],
            "overflow-y": [{
                "overflow-y": H()
            }],
            overscroll: [{
                overscroll: F()
            }],
            "overscroll-x": [{
                "overscroll-x": F()
            }],
            "overscroll-y": [{
                "overscroll-y": F()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [p]
            }],
            "inset-x": [{
                "inset-x": [p]
            }],
            "inset-y": [{
                "inset-y": [p]
            }],
            start: [{
                start: [p]
            }],
            end: [{
                end: [p]
            }],
            top: [{
                top: [p]
            }],
            right: [{
                right: [p]
            }],
            bottom: [{
                bottom: [p]
            }],
            left: [{
                left: [p]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", ln, L]
            }],
            basis: [{
                basis: ge()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", L]
            }],
            grow: [{
                grow: yt()
            }],
            shrink: [{
                shrink: yt()
            }],
            order: [{
                order: ["first", "last", "none", ln, L]
            }],
            "grid-cols": [{
                "grid-cols": [cn]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", ln, L]
                }, L]
            }],
            "col-start": [{
                "col-start": be()
            }],
            "col-end": [{
                "col-end": be()
            }],
            "grid-rows": [{
                "grid-rows": [cn]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [ln, L]
                }, L]
            }],
            "row-start": [{
                "row-start": be()
            }],
            "row-end": [{
                "row-end": be()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", L]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", L]
            }],
            gap: [{
                gap: [h]
            }],
            "gap-x": [{
                "gap-x": [h]
            }],
            "gap-y": [{
                "gap-y": [h]
            }],
            "justify-content": [{
                justify: ["normal", ...$e()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...$e(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...$e(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [w]
            }],
            px: [{
                px: [w]
            }],
            py: [{
                py: [w]
            }],
            ps: [{
                ps: [w]
            }],
            pe: [{
                pe: [w]
            }],
            pt: [{
                pt: [w]
            }],
            pr: [{
                pr: [w]
            }],
            pb: [{
                pb: [w]
            }],
            pl: [{
                pl: [w]
            }],
            m: [{
                m: [_]
            }],
            mx: [{
                mx: [_]
            }],
            my: [{
                my: [_]
            }],
            ms: [{
                ms: [_]
            }],
            me: [{
                me: [_]
            }],
            mt: [{
                mt: [_]
            }],
            mr: [{
                mr: [_]
            }],
            mb: [{
                mb: [_]
            }],
            ml: [{
                ml: [_]
            }],
            "space-x": [{
                "space-x": [U]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [U]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", L, t]
            }],
            "min-w": [{
                "min-w": [L, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [L, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [Ze]
                }, Ze]
            }],
            h: [{
                h: [L, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [L, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [L, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [L, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Ze, Ye]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Qn]
            }],
            "font-family": [{
                font: [cn]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", L]
            }],
            "line-clamp": [{
                "line-clamp": ["none", At, Qn]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ke, L]
            }],
            "list-image": [{
                "list-image": ["none", L]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", L]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [v]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [v]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...he(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Ke, Ye]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Ke, L]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: I()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", L]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", L]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [v]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...se(), k6]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", C6]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, P6]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [g]
            }],
            "gradient-via-pos": [{
                via: [g]
            }],
            "gradient-to-pos": [{
                to: [g]
            }],
            "gradient-from": [{
                from: [f]
            }],
            "gradient-via": [{
                via: [f]
            }],
            "gradient-to": [{
                to: [f]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [v]
            }],
            "border-style": [{
                border: [...he(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [v]
            }],
            "divide-style": [{
                divide: he()
            }],
            "border-color": [{
                border: [s]
            }],
            "border-color-x": [{
                "border-x": [s]
            }],
            "border-color-y": [{
                "border-y": [s]
            }],
            "border-color-t": [{
                "border-t": [s]
            }],
            "border-color-r": [{
                "border-r": [s]
            }],
            "border-color-b": [{
                "border-b": [s]
            }],
            "border-color-l": [{
                "border-l": [s]
            }],
            "divide-color": [{
                divide: [s]
            }],
            "outline-style": [{
                outline: ["", ...he()]
            }],
            "outline-offset": [{
                "outline-offset": [Ke, L]
            }],
            "outline-w": [{
                outline: [Ke, Ye]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: Re()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [v]
            }],
            "ring-offset-w": [{
                "ring-offset": [Ke, Ye]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Ze, j6]
            }],
            "shadow-color": [{
                shadow: [cn]
            }],
            opacity: [{
                opacity: [v]
            }],
            "mix-blend": [{
                "mix-blend": [...Je(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": Je()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [u]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Ze, L]
            }],
            grayscale: [{
                grayscale: [c]
            }],
            "hue-rotate": [{
                "hue-rotate": [l]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [b]
            }],
            sepia: [{
                sepia: [k]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [u]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [c]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [l]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [v]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [b]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [k]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [o]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [o]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [o]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", L]
            }],
            duration: [{
                duration: oe()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", L]
            }],
            delay: [{
                delay: oe()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", L]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [A]
            }],
            "scale-x": [{
                "scale-x": [A]
            }],
            "scale-y": [{
                "scale-y": [A]
            }],
            rotate: [{
                rotate: [ln, L]
            }],
            "translate-x": [{
                "translate-x": [S]
            }],
            "translate-y": [{
                "translate-y": [S]
            }],
            "skew-x": [{
                "skew-x": [C]
            }],
            "skew-y": [{
                "skew-y": [C]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", L]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", L]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": I()
            }],
            "scroll-mx": [{
                "scroll-mx": I()
            }],
            "scroll-my": [{
                "scroll-my": I()
            }],
            "scroll-ms": [{
                "scroll-ms": I()
            }],
            "scroll-me": [{
                "scroll-me": I()
            }],
            "scroll-mt": [{
                "scroll-mt": I()
            }],
            "scroll-mr": [{
                "scroll-mr": I()
            }],
            "scroll-mb": [{
                "scroll-mb": I()
            }],
            "scroll-ml": [{
                "scroll-ml": I()
            }],
            "scroll-p": [{
                "scroll-p": I()
            }],
            "scroll-px": [{
                "scroll-px": I()
            }],
            "scroll-py": [{
                "scroll-py": I()
            }],
            "scroll-ps": [{
                "scroll-ps": I()
            }],
            "scroll-pe": [{
                "scroll-pe": I()
            }],
            "scroll-pt": [{
                "scroll-pt": I()
            }],
            "scroll-pr": [{
                "scroll-pr": I()
            }],
            "scroll-pb": [{
                "scroll-pb": I()
            }],
            "scroll-pl": [{
                "scroll-pl": I()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", L]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Ke, Ye, Qn]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
const Ot = p6(F6);
var D6 = ({
        v2elementId: e,
        autoRenderV2: t
    } = {}) => {
        const n = x.useRef(),
            r = x.useCallback(() => j(void 0, null, function*() {
                var u, c, l;
                try {
                    if (!((c = (u = N.config) == null ? void 0 : u.grecaptcha) != null && c.v3Key)) throw new Error("No reCAPTCHA v3 key found in config, please follow usage instruction in https://github.com/nadude/webook-frontend/blob/main/packages/api/README.md");
                    (l = document.getElementById("recaptcha_script")) == null || l.remove();
                    const d = `https://www.google.com/recaptcha/api.js?render=${N.config.grecaptcha.v3Key}`;
                    yield Kl({
                        id: "recaptcha_script",
                        url: d
                    })
                } catch (d) {
                    const h = d,
                        f = (h == null ? void 0 : h.message) || "[USE-CAPTCHA]: Something went wrong";
                    console.error(f)
                }
            }), []),
            s = x.useCallback(() => j(void 0, null, function*() {
                e && typeof window < "u" && (window != null && window.grecaptcha) && window.grecaptcha.ready(() => {
                    var u, c;
                    const l = document.getElementById(e);
                    if (l && !(l != null && l.firstChild)) try {
                        if (!((c = (u = N.config) == null ? void 0 : u.grecaptcha) != null && c.v2Key)) throw new Error("No reCAPTCHA v2 key found in config, please follow usage instruction in https://github.com/nadude/webook-frontend/blob/main/packages/api/README.md");
                        const d = document.createElement("div");
                        l.appendChild(d), window.grecaptcha.render(d, {
                            sitekey: N.config.grecaptcha.v2Key,
                            callback(h) {
                                n.current = h
                            }
                        })
                    } catch (d) {
                        console.log(d)
                    }
                })
            }), [e]),
            i = () => {
                if (!e) return;
                const u = document.getElementById(e);
                u != null && u.firstChild && (window.grecaptcha.reset(), u.firstChild.remove(), n.current = "")
            };
        x.useEffect(() => {
            r()
        }, [r]), x.useEffect(() => {
            t && s()
        }, [t, e, s]);
        const o = u => j(void 0, null, function*() {
                return new Promise((c, l) => {
                    var d, h;
                    try {
                        if (u && a(u) && !n.current) return l({
                            message: "Please complete captcha"
                        });
                        if (!((h = (d = N.config) == null ? void 0 : d.grecaptcha) != null && h.v3Key)) return l({
                            message: "No reCAPTCHA v3 key found in config, please follow usage instruction in https://github.com/nadude/webook-frontend/blob/main/packages/api/README.md"
                        });
                        window.grecaptcha.ready(() => {
                            var f, g;
                            window.grecaptcha.execute(((g = (f = N.config) == null ? void 0 : f.grecaptcha) == null ? void 0 : g.v3Key) || "", {
                                action: "forced-v2"
                            }).then(c)
                        })
                    } catch (f) {
                        l(f)
                    }
                })
            }),
            a = u => {
                var c, l, d;
                return (d = (l = (c = N.config) == null ? void 0 : c.grecaptcha) == null ? void 0 : l.spammyCountryCodes) == null ? void 0 : d.includes(u)
            };
        return {
            executeRecaptcha: o,
            renderV2Captcha: s,
            removeV2Captcha: i,
            isSpammyCountry: a
        }
    },
    O6 = ({
        children: e
    }) => (D6(), e),
    N6 = x.createContext(null),
    sl = N6,
    B6 = Object.defineProperty,
    L6 = Object.defineProperties,
    V6 = Object.getOwnPropertyDescriptors,
    dr = Object.getOwnPropertySymbols,
    il = Object.prototype.hasOwnProperty,
    ol = Object.prototype.propertyIsEnumerable,
    Io = (e, t, n) => t in e ? B6(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    $ = (e, t) => {
        for (var n in t || (t = {})) il.call(t, n) && Io(e, n, t[n]);
        if (dr)
            for (var n of dr(t)) ol.call(t, n) && Io(e, n, t[n]);
        return e
    },
    q = (e, t) => L6(e, V6(t)),
    mi = (e, t) => {
        var n = {};
        for (var r in e) il.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && dr)
            for (var r of dr(e)) t.indexOf(r) < 0 && ol.call(e, r) && (n[r] = e[r]);
        return n
    },
    fi = (e, t, n) => new Promise((r, s) => {
        var i = u => {
                try {
                    a(n.next(u))
                } catch (c) {
                    s(c)
                }
            },
            o = u => {
                try {
                    a(n.throw(u))
                } catch (c) {
                    s(c)
                }
            },
            a = u => u.done ? r(u.value) : Promise.resolve(u.value).then(i, o);
        a((n = n.apply(e, t)).next())
    }),
    ly = e => {
        var t = e,
            {
                children: n
            } = t,
            r = mi(t, ["children"]);
        const [s] = x.useState(r);
        return m.jsx(sl.Provider, {
            value: q($({}, s), {
                locale: r.locale
            }),
            children: n
        })
    },
    J = () => {
        const e = x.useContext(sl);
        if (!e) throw new Error("useExperiences must be used within an HyExperienceProvider, refer to usage instructions: https://github.com/nadude/webook-frontend/blob/main/packages/experiences/README.md");
        return e
    },
    I6 = 300,
    As = 15e4,
    al = e => {
        let t;
        const n = e == null ? void 0 : e[0];
        if (n) {
            const r = new Date(n).getFullYear(),
                s = new Date(n).getMonth(),
                i = new Date(n).getDate();
            t = {
                year: r,
                month: s,
                day: i
            }
        }
        return t
    },
    Uo = (e, t) => {
        const n = [],
            r = [];
        let s = e;
        t === "flexible" && (s = e.filter(i => i.has_flexible_pass));
        for (const i of s) i.is_addon ? r.push(i) : n.push(i);
        return {
            tickets: n,
            addons: r
        }
    },
    ul = {
        experience: {},
        experienceTickets: {
            tickets: [],
            addons: []
        },
        withFlexPass: !1,
        checkoutMode: "calendar",
        paymentMethod: "credit_card",
        tickets: [],
        bookingType: "specific",
        totals: {
            gross: 0,
            gross_after_discount: 0,
            vat: 0,
            discount_total: 0,
            net: 0,
            net_after_discount: 0
        },
        totalTickets: 0,
        checkoutLoading: !1,
        agreeTerms: !1,
        canCheckout: !1
    },
    ll = x.createContext(q($({}, ul), {
        user: null,
        addTicket: () => {},
        removeTicket: () => {},
        setCheckoutMode: () => {},
        clearAll: () => {},
        setTicketErrors: () => {},
        setBookingType: () => {},
        setPaymentMethod: () => {},
        selectSlot: () => {},
        selectCustomSlot: () => {},
        setSlotState: () => {},
        checkout: () => fi(void 0, null, function*() {}),
        setAgreeTerms: () => {}
    }));

function ue() {
    return x.useContext(ll)
}
var Ss = {
        coupon: {
            discount: 0,
            code: "",
            max_amount: 0
        }
    },
    cl = x.createContext(q($({}, Ss), {
        setCoupon: () => {},
        setRedeemType: () => {}
    }));

function $n() {
    return x.useContext(cl)
}
var Jn = ["Creating Magical Connection ✨", "Checking Cosmic Availability 🚀", "Polishing Adventure Choices ✨", "Scoring Stellar Deals Just for You 🌟", "Dancing with Secure Systems 💃🕺", "Crafting Your One-of-a-Kind Itinerary 🗺️", "Prepping for a Seamlessly Epic Journey 🌈", "Summoning Dreamy Experiences ✨", "Exploring Galactic Options 🌌", "Crafting Joyful Moments 🎨", "Gathering Starlight Surprises 🌠", "Weaving Wonder Tales 📚", "Painting Rainbow Escapes 🌈", "Spinning Enchanted Tales 🧚", "Charting New Journeys 🗺️", "Unfolding Fantasy Worlds 🏰", "Mixing Magic Potions 🧪"],
    U6 = () => {
        const [e, t] = x.useState(-1);
        return x.useEffect(() => {
            const n = setInterval(() => {
                let r;
                do r = Math.floor(Math.random() * Jn.length); while (r === e);
                t(r)
            }, 2e3);
            return () => clearInterval(n)
        }, [e]), m.jsx(Sr, {
            mode: "wait",
            children: !!Jn[e] && m.jsx(Un.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: .5
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .15
                },
                className: "p-2 text-center text-sm",
                children: Jn[e]
            }, Jn[e])
        })
    },
    $6 = U6,
    K6 = ({
        sideBar: e = !0,
        className: t
    }) => m.jsxs(m.Fragment, {
        children: [m.jsx("style", {
            children: "body{overflow:hidden}"
        }), m.jsxs("section", {
            className: Ot("container flex max-w-screen-2xl flex-col gap-4 overflow-hidden px-0 py-0 pb-12", "lg:bg-body-light lg:mt-0 lg:flex-row lg:overflow-visible lg:bg-transparent lg:px-6 lg:pb-8", t),
            children: [m.jsxs("div", {
                className: "lg:bg-body-light flex h-[calc(100svh-150px)] grow flex-col items-center justify-center space-y-1 rounded-xl lg:h-auto lg:min-h-[500px]",
                children: [m.jsx(yl, {
                    className: "h-20 w-52 md:h-32 md:w-72 md:py-4"
                }), m.jsx($6, {})]
            }), e && m.jsx("aside", {
                className: "lg:bg-body-light flex min-h-[500px] w-full max-w-lg grow items-center justify-center rounded-xl lg:block lg:max-w-md"
            })]
        })]
    }),
    G6 = K6,
    q6 = ({
        experience: e,
        children: t
    }) => {
        const n = x.useMemo(() => e.time_slot_mode !== "custom" && e.with_flexible_pass && Uo(e.facilities, "flexible").tickets.length > 0, [e]),
            [r, s] = x.useState(q($({}, ul), {
                bookingType: n ? "flexible" : "specific"
            })),
            {
                locale: i,
                i18n: {
                    useTranslation: o
                }
            } = J(),
            {
                coupon: a
            } = $n(),
            {
                user: u
            } = ks(),
            [c, l] = x.useState(!1),
            [d, h] = x.useState(null),
            [f, g] = x.useState(!1),
            {
                t: p
            } = o(["experience_booking"]),
            {
                cartEvent: _,
                beginCheckout: v
            } = Cl(),
            w = (E, B) => {
                var oe;
                s(ee => ee.tickets.findIndex(W => W.facility_id === E.facility_id) >= 0 ? q($({}, ee), {
                    tickets: ee.tickets.map(W => W.facility_id === E.facility_id ? q($({}, W), {
                        num_of_people: W.num_of_people + B
                    }) : W)
                }) : q($({}, ee), {
                    tickets: ee.tickets.concat(q($({}, E), {
                        num_of_people: B
                    }))
                })), _({
                    item: {
                        _id: E.facility_id,
                        title: E.name,
                        original_price: E.net_price_per_slot,
                        price: E.price_per_slot,
                        vat: E.vat_per_slot,
                        currency: "SAR",
                        qty: B
                    },
                    quantity: B,
                    type: "add",
                    event: {
                        id: e._id,
                        title: e.name,
                        category: (oe = e.category) == null ? void 0 : oe._id
                    }
                })
            },
            b = (E, B) => {
                var oe;
                s(ee => {
                    const ce = ee.tickets.find(Y => Y.facility_id === E.facility_id);
                    return ce && ce.num_of_people - B <= 0 ? q($({}, ee), {
                        tickets: ee.tickets.filter(Y => Y.facility_id !== E.facility_id)
                    }) : q($({}, ee), {
                        tickets: ee.tickets.map(Y => Y.facility_id === E.facility_id ? q($({}, Y), {
                            num_of_people: Math.max(Y.num_of_people - B, 0)
                        }) : Y)
                    })
                }), _({
                    item: {
                        _id: E.facility_id,
                        title: E.name,
                        original_price: E.net_price_per_slot,
                        price: E.price_per_slot,
                        vat: E.vat_per_slot,
                        currency: "SAR",
                        qty: B
                    },
                    quantity: B,
                    type: "remove",
                    event: {
                        id: e._id,
                        title: e.name,
                        category: (oe = e.category) == null ? void 0 : oe._id
                    }
                })
            },
            A = () => {
                s(E => q($({}, E), {
                    time_slot: void 0,
                    tickets: []
                }))
            },
            k = E => {
                s(B => q($({}, B), {
                    checkoutMode: E
                }))
            },
            C = E => {
                s(B => q($({}, B), {
                    ticket_errors: E
                }))
            },
            U = E => {
                s(B => q($({}, B), {
                    paymentMethod: E
                }))
            },
            S = E => {
                s(B => q($({}, B), {
                    agreeTerms: E
                }))
            },
            F = E => {
                s(B => q($({}, B), {
                    selectedSlot: E
                }))
            },
            H = E => {
                var B;
                const oe = Ps(E, "yyyy-MM-dd"),
                    ee = e.facilities.find(W => {
                        var Y;
                        return (Y = W.booking_times) == null ? void 0 : Y[oe]
                    }),
                    ce = (B = ee == null ? void 0 : ee.booking_times) == null ? void 0 : B[oe];
                if (ce != null && ce.length) {
                    const W = ce[0];
                    F(W), ge({
                        selectedMonth: new Date(W.start_ts * 1e3)
                    })
                }
            },
            ge = E => {
                s(B => q($({}, B), {
                    slotState: $($({}, B.slotState), E)
                }))
            },
            I = E => {
                s(B => q($({}, B), {
                    bookingType: E,
                    selectedSlot: E === "flexible" ? void 0 : B.selectedSlot
                }))
            };
        Tl({
            onShow: () => {
                l(!1)
            }
        });
        const Re = x.useMemo(() => r.tickets.reduce((E, B) => E + B.num_of_people, 0), [r.tickets]),
            be = x.useMemo(() => {
                let E = 0,
                    B = 0,
                    oe = 0,
                    ee = 0;
                const ce = e.vat_percentage / 100;
                for (const Se of r.tickets) {
                    const an = Se.discounted_price > 0,
                        gi = Se.net_price_per_slot * Se.num_of_people;
                    let kr = Se.vat_per_slot * Se.num_of_people;
                    if (an && (kr = Se.net_price_per_slot * Se.num_of_people * ce), E += gi, oe += kr, an) {
                        const pl = Se.discounted_price / (1 + ce),
                            yi = (Se.net_price_per_slot - pl) * Se.num_of_people;
                        B += yi, ee += yi * ce
                    }
                    a.discount > 0 && (B += gi * a.discount / 100, ee += kr * a.discount / 100)
                }
                let W = B;
                a.max_amount > 0 && (W = Math.min(B, a.max_amount), ee = Math.min(ee, a.max_amount * ce));
                const Y = E + oe,
                    xe = Math.max(0, Y - W - ee);
                return {
                    gross: E,
                    gross_after_discount: E - W,
                    vat: oe - ee,
                    discount_total: W,
                    net: Y,
                    net_after_discount: xe
                }
            }, [r.tickets, e.vat_percentage, a.discount, a.max_amount]),
            se = () => fi(void 0, null, function*() {
                var E, B, oe;
                const ce = {
                    selected_time_slots: r.tickets.map(W => {
                        var Y, xe, Se;
                        const an = {
                            facility: W.facility_id,
                            facility_name: W.name,
                            price: W.price_per_slot,
                            num_of_people: W.num_of_people
                        };
                        return r.bookingType === "flexible" ? an : q($({}, an), {
                            date: (Y = r.selectedSlot) == null ? void 0 : Y.date,
                            time: {
                                from: (xe = r.selectedSlot) == null ? void 0 : xe.start_ts,
                                to: (Se = r.selectedSlot) == null ? void 0 : Se.end_ts
                            }
                        })
                    }),
                    time_slot_mode: e.time_slot_mode,
                    lang: i,
                    booking_mode: "Guest",
                    request_source: "HY_WEB",
                    paytabs_profile: "HY_WEB",
                    payment_method: r.paymentMethod,
                    payment_type: r.bookingType === "flexible" ? "flexible-pass" : "venue-book",
                    payment_type_id: e._id,
                    amount: be.net_after_discount,
                    actual_amount: be.net,
                    return: "hy"
                };
                a.discount > 0 && (ce.coupon_code = a.code, ce.amount_after_discount = be.net_after_discount);
                try {
                    l(!0), v({
                        items: r.tickets.map(xe => ({
                            _id: xe.facility_id,
                            title: xe.name,
                            original_price: xe.net_price_per_slot,
                            price: xe.price_per_slot,
                            vat: xe.vat_per_slot,
                            currency: "SAR",
                            qty: xe.num_of_people
                        })),
                        coupon: {
                            discount: a.discount,
                            ticket_ids: r.tickets.map(xe => xe.facility_id),
                            promo_code: a.code
                        },
                        event: {
                            id: e._id,
                            title: e.name,
                            category: (E = e.category) == null ? void 0 : E._id
                        }
                    });
                    const W = yield Fd({
                        order: ce,
                        locale: i,
                        email: u == null ? void 0 : u.email,
                        usePaymentApi: !!ce.is_wallet || be.net_after_discount <= 0
                    });
                    if (!W.payment_url) throw new D({
                        error: new Error(p("experience_booking:missing_url_message")),
                        name: "CheckoutNoRedirectUrlException"
                    });
                    const Y = window.location.pathname;
                    gr({
                        name: "last_book_page",
                        value: Y,
                        expiration: .01
                    }), window.location.href = W.payment_url
                } catch (W) {
                    const Y = W;
                    if (l(!1), (B = Y == null ? void 0 : Y.message) != null && B.includes("JSON")) return h(new Error(p("experience_booking:missing_url_message")));
                    ((oe = Y == null ? void 0 : Y.message) == null ? void 0 : oe.includes("verified")) && g(!0), h(Y)
                }
            }),
            he = x.useMemo(() => Uo(e.facilities, r.bookingType), [r.bookingType, e.facilities]),
            Je = x.useMemo(() => !!r.ticket_errors && Object.values(r.ticket_errors).filter(Boolean).length > 0, [r.ticket_errors]),
            $e = be.net_after_discount > As,
            yt = !r.agreeTerms || Je || !Re || !r.paymentMethod || $e;
        return m.jsxs(ll.Provider, {
            value: q($({}, r), {
                experience: e,
                experienceTickets: he,
                withFlexPass: n,
                user: u,
                checkoutLoading: c,
                checkoutError: d,
                totalTickets: Re,
                totals: be,
                canCheckout: !yt,
                setBookingType: I,
                addTicket: w,
                removeTicket: b,
                selectSlot: F,
                selectCustomSlot: H,
                setSlotState: ge,
                clearAll: A,
                setAgreeTerms: S,
                setPaymentMethod: U,
                setCheckoutMode: k,
                setTicketErrors: C,
                checkout: se
            }),
            children: [m.jsx(aa, {
                show: f,
                onClose: () => g(!1),
                onSuccess: () => {
                    g(!1), se()
                }
            }), t]
        })
    },
    H6 = q6,
    z6 = ({
        children: e
    }) => {
        const [t, n] = x.useState(Ss), r = i => {
            n(o => q($({}, o), {
                coupon: i
            }))
        }, s = i => {
            n(o => q($({}, o), {
                redeem_type: i,
                coupon: Ss.coupon
            }))
        };
        return m.jsx(cl.Provider, {
            value: q($({}, t), {
                setCoupon: r,
                setRedeemType: s
            }),
            children: e
        })
    },
    W6 = z6,
    Q6 = () => {
        const {
            i18n: {
                useTranslation: e
            }
        } = J(), {
            t
        } = e(["experience_booking"]);
        return m.jsxs("div", {
            className: "mx-auto w-full max-w-2xl space-y-2 p-2 text-center text-red-400",
            children: [m.jsx(_l, {
                className: "mx-auto h-24 w-24"
            }), m.jsx("p", {
                className: "text-lg font-bold",
                children: t("experience_booking:no_tickets_available")
            })]
        })
    },
    Cr = Q6,
    J6 = ({
        className: e = ""
    }) => m.jsxs("svg", {
        width: "93",
        height: "93",
        viewBox: "0 0 93 93",
        fill: "none",
        className: e,
        xmlns: "http://www.w3.org/2000/svg",
        children: [m.jsx("path", {
            d: "M39.4186 4.92659C43.8424 2.5576 49.1576 2.5576 53.5814 4.92659L66.5063 11.8482L78.9629 19.5807C83.2264 22.2272 85.8841 26.8304 86.0443 31.8459L86.5125 46.5L86.0443 61.1541C85.8841 66.1696 83.2264 70.7728 78.963 73.4193L66.5063 81.1518L53.5814 88.0734C49.1576 90.4424 43.8424 90.4424 39.4186 88.0734L26.4937 81.1518L14.0371 73.4193C9.77359 70.7728 7.11594 66.1696 6.9557 61.1541L6.48751 46.5L6.9557 31.8459C7.11594 26.8304 9.77359 22.2272 14.0371 19.5807L26.4938 11.8482L39.4186 4.92659Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "2"
        }), m.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M23.1603 47.3883C21.9672 46.1952 21.9672 44.2608 23.1603 43.0677L44.0677 22.1603C45.2608 20.9672 47.1952 20.9672 48.3883 22.1603L58.9752 32.7472C60.1683 33.9403 60.1683 35.8747 58.9752 37.0677L38.0677 57.9752C36.8747 59.1683 34.9403 59.1683 33.7472 57.9752L23.1603 47.3883Z",
            fill: "#9333EA"
        }), m.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M41.6995 45.2047L36.7612 47.8009L37.7043 42.3021L33.7092 38.4077L39.2304 37.6055L41.6995 32.6024L44.1687 37.6055L49.6898 38.4077L45.6947 42.3021L46.6378 47.8009L41.6995 45.2047Z",
            fill: "white"
        }), m.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M31.8927 55.5335C31.0489 54.0722 31.5497 52.2035 33.011 51.3599L58.6427 36.5634C60.1039 35.7199 61.9722 36.2205 62.8158 37.6815L70.3103 50.6607C71.1541 52.122 70.6534 53.9907 69.192 54.8343L43.5603 69.6308C42.0992 70.4743 40.2309 69.9737 39.3872 68.5126L31.8927 55.5335Z",
            fill: "#DB2777"
        }), m.jsx("path", {
            d: "M54.5834 48.1666C53.421 48.1666 52.0616 49.4844 51.3334 50.3333C50.6052 49.4844 49.2458 48.1666 48.0834 48.1666C46.0258 48.1666 44.8334 49.7715 44.8334 51.8141C44.8334 55.2083 51.3334 59 51.3334 59C51.3334 59 57.8334 55.2083 57.8334 51.9583C57.8334 49.9157 56.641 48.1666 54.5834 48.1666Z",
            fill: "white"
        })]
    }),
    pi = J6,
    Y6 = () => {
        const {
            isMobile: e
        } = On();
        return e ? m.jsx(Ts, {
            className: "z-[999] overflow-visible pb-6",
            sectionClassName: "overflow-visible z-20 [&>div]:-mt-8",
            render: ({
                open: t
            }) => m.jsx($o, {
                open: t
            }),
            body: () => m.jsx(Ko, {})
        }) : m.jsx(fr, {
            render: ({
                open: t
            }) => m.jsx($o, {
                open: t
            }),
            body: () => m.jsx(Ko, {})
        })
    },
    $o = ({
        open: e
    }) => m.jsx(le, {
        theme: "white",
        shape: "text",
        className: "h-6 w-6 shrink-0 rounded-full p-0",
        onClick: t => {
            t.stopPropagation(), t.preventDefault(), e()
        },
        children: m.jsx(vl, {
            className: "h-4 w-4"
        })
    }),
    Ko = () => {
        const {
            locale: e,
            i18n: {
                useTranslation: t,
                Trans: n
            }
        } = J(), {
            t: r
        } = t(["experience_booking"]);
        return m.jsxs("div", {
            className: "relative space-y-2 p-6",
            children: [m.jsx("div", {
                className: "pb-8",
                children: m.jsx(pi, {
                    className: "text-body-lighter absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                })
            }), m.jsx("h4", {
                children: r("experience_booking:flexible_pass_smart")
            }), m.jsx("p", {
                children: m.jsx(n, {
                    i18nKey: "flexible_pass_smart_desc",
                    ns: "experience_booking",
                    children: m.jsx("strong", {})
                })
            }), m.jsx("p", {
                children: m.jsx("a", {
                    className: "text-primary font-semibold underline",
                    href: `/${e}/terms`,
                    target: "_blank",
                    rel: "noreferrer",
                    children: r("experience_booking:flexible_pass_terms")
                })
            })]
        })
    },
    Z6 = Y6,
    X6 = () => {
        const {
            experience: e,
            bookingType: t,
            setBookingType: n
        } = ue(), {
            i18n: {
                useTranslation: r
            }
        } = J(), {
            t: s
        } = r(["experience_booking"]);
        return m.jsx(ua, {
            name: "flexible_pass",
            className: "p-4",
            label: m.jsx("h2", {
                className: "text-base lg:text-lg",
                children: s("experience_booking:choose_booking_method")
            }),
            value: t,
            options: [{
                text: m.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [m.jsxs("div", {
                        children: [m.jsx("p", {
                            children: s("experience_booking:flexible_pass_buy")
                        }), m.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: s("experience_booking:flexible_pass_use", {
                                amount: e.flexible_pass_valid_for
                            })
                        })]
                    }), m.jsx(Z6, {})]
                }),
                value: "flexible"
            }, {
                text: m.jsxs("div", {
                    children: [m.jsx("p", {
                        children: s("experience_booking:select_date_time")
                    }), m.jsx("p", {
                        className: "text-sm text-gray-400",
                        children: s("experience_booking:flexible_pass_date_time")
                    })]
                }),
                value: "specific"
            }],
            onChange: i => n(i)
        })
    },
    ep = X6,
    tp = () => {
        const {
            i18n: {
                useTranslation: e
            }
        } = J(), {
            t
        } = e(["experience_booking"]), {
            isMobile: n
        } = On();
        return m.jsxs("div", {
            className: "flex flex-col items-center gap-4 sm:flex-row",
            children: [m.jsx(pi, {
                className: "text-body-lighter shrink-0"
            }), m.jsxs("p", {
                children: [t("experience_booking:flexible_pass_redemption"), n ? m.jsx(Ts, {
                    className: "z-[999] overflow-visible pb-6",
                    sectionClassName: "overflow-visible z-20 [&>div]:-mt-8",
                    render: ({
                        open: r
                    }) => m.jsx(le, {
                        shape: "text",
                        className: "px-2 py-1",
                        onClick: r,
                        children: t("experience_booking:learn_more")
                    }),
                    body: () => m.jsx(Go, {})
                }) : m.jsx(fr, {
                    render: ({
                        open: r
                    }) => m.jsx(le, {
                        shape: "text",
                        className: "px-2 py-1",
                        onClick: r,
                        children: t("experience_booking:learn_more")
                    }),
                    body: () => m.jsx(Go, {})
                })]
            })]
        })
    },
    Go = () => {
        const {
            locale: e,
            i18n: {
                useTranslation: t
            }
        } = J(), {
            t: n
        } = t(["experience_booking"]);
        return m.jsxs("div", {
            className: "relative space-y-2 p-6",
            children: [m.jsx("div", {
                className: "pb-8",
                children: m.jsx(pi, {
                    className: "text-body-lighter absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                })
            }), m.jsx("h4", {
                children: n("experience_booking:flexible_pass_how_to")
            }), m.jsx("p", {
                children: n("experience_booking:flexible_pass_how_to_desc")
            }), m.jsx("p", {
                children: m.jsx("a", {
                    className: "text-primary font-semibold underline",
                    href: `/${e}/terms`,
                    target: "_blank",
                    rel: "noreferrer",
                    children: n("experience_booking:flexible_pass_terms")
                })
            })]
        })
    },
    np = tp,
    rp = () => {
        const {
            locale: e,
            i18n: {
                useTranslation: t
            }
        } = J(), {
            selectSlot: n,
            experience: r,
            selectedSlot: s,
            slotState: i,
            setSlotState: o
        } = ue(), {
            t: a
        } = t(["experience_booking"]), u = x.useMemo(() => al(r.booking_dates_arr), [r.booking_dates_arr]);
        x.useEffect(() => {
            u && o({
                selectedMonth: new Date(u.year, u.month)
            })
        }, [u]);
        const c = x.useMemo(() => {
            var l;
            const d = i == null ? void 0 : i.selectedDay;
            if (!d) return [];
            const h = r.facilities.find(f => {
                var g;
                return (g = f.booking_times) == null ? void 0 : g[d]
            });
            return ((l = h == null ? void 0 : h.booking_times) == null ? void 0 : l[d]) || []
        }, [r.facilities, i == null ? void 0 : i.selectedDay]);
        return m.jsx(la, {
            mode: "single",
            lang: e,
            selected: i == null ? void 0 : i.selectedDate,
            month: i == null ? void 0 : i.selectedMonth,
            fromDate: u ? new Date(u.year, u.month, u.day) : void 0,
            weekStartsOn: 0,
            onMonthChange: l => {
                o({
                    selectedMonth: l
                })
            },
            components: {
                Row: ({
                    dates: l
                }) => {
                    const d = (i == null ? void 0 : i.selectedDate) && l.some(h => _i(h, i.selectedDate));
                    return m.jsxs(m.Fragment, {
                        children: [m.jsx("tr", {
                            className: "rdp-row",
                            children: l.map(h => {
                                var f;
                                const g = (i == null ? void 0 : i.selectedDate) && _i(h, i.selectedDate),
                                    p = Ps(h, "yyyy-MM-dd"),
                                    _ = (f = r.booking_dates_arr) == null ? void 0 : f.includes(p);
                                return m.jsx("td", {
                                    className: "rdp-cell",
                                    children: m.jsx("button", {
                                        name: "day",
                                        className: `rdp-button_reset rdp-button rdp-day flex flex-col items-center justify-center ${g?"rdp-day_selected":""}`,
                                        role: "gridcell",
                                        tabIndex: -1,
                                        type: "button",
                                        disabled: !_,
                                        onClick: () => {
                                            o({
                                                selectedDate: h,
                                                selectedDay: p
                                            }), n()
                                        },
                                        children: m.jsx("p", {
                                            children: h.getDate()
                                        })
                                    })
                                }, h.getDate())
                            })
                        }), d && m.jsxs(m.Fragment, {
                            children: [m.jsx("tr", {
                                children: m.jsx("td", {
                                    className: "h-2"
                                })
                            }), m.jsx("tr", {
                                children: m.jsxs("td", {
                                    colSpan: 7,
                                    className: "mt-1 rounded-md bg-white/5 p-2",
                                    children: [m.jsx("p", {
                                        className: "text-text text-sm",
                                        children: a("experience_booking:preferred_time")
                                    }), m.jsx("div", {
                                        className: "flex flex-wrap gap-2 py-2",
                                        children: c.length > 0 ? c.map((h, f) => {
                                            const g = h.start_time,
                                                p = h.end_time,
                                                _ = `${g} - ${p}`,
                                                v = (s == null ? void 0 : s.id) === h.id;
                                            return m.jsx(le, {
                                                shape: v ? "solid" : "outlined",
                                                theme: v ? "primary" : "white",
                                                "aria-selected": v,
                                                className: "border-input/30 aria-selected:bg-primary-700 aria-selected:text-primary-contrast h-[34px] px-2 text-sm disabled:border-none disabled:bg-transparent",
                                                onClick: () => {
                                                    i != null && i.selectedDay && n(h)
                                                },
                                                disabled: h.sold_out,
                                                children: m.jsxs("div", {
                                                    className: "flex flex-col items-center",
                                                    children: [m.jsx("p", {
                                                        className: `${h.sold_out?"line-through":""}`,
                                                        children: _
                                                    }), m.jsx("p", {
                                                        className: `${h.sold_out?"block text-xs":"hidden"}`,
                                                        children: a("experience_booking:sold_out")
                                                    })]
                                                })
                                            }, f)
                                        }) : m.jsx(Cr, {})
                                    })]
                                })
                            })]
                        })]
                    })
                }
            }
        })
    },
    sp = rp,
    ip = () => {
        const {
            i18n: {
                useTranslation: e
            }
        } = J(), {
            experienceTickets: t,
            selectedSlot: n
        } = ue(), {
            t: r
        } = e(["experience_booking"]), {
            isMobile: s
        } = On(), i = x.useMemo(() => {
            var o;
            const a = Object.values((o = t.tickets[0]) == null ? void 0 : o.booking_times).flat(1),
                u = a.slice(0, 6);
            return !u.some(l => l.id === (n == null ? void 0 : n.id)) && n && u.push(n), {
                short: u,
                all: a,
                hasMore: a.length > u.length
            }
        }, [t.tickets, n]);
        return m.jsxs("ul", {
            className: "w-full grow space-y-2",
            children: [i.short.map(o => m.jsx(Gr, {
                slot: o
            }, o.id)), i.hasMore && m.jsx(m.Fragment, {
                children: s ? m.jsx(Ts, {
                    className: "z-[999]",
                    render: ({
                        open: o
                    }) => m.jsx("li", {
                        className: "pt-2",
                        children: m.jsx(le, {
                            theme: "white",
                            shape: "text",
                            className: "w-full",
                            onClick: o,
                            children: r("experience_booking:show_more")
                        })
                    }),
                    body: ({
                        close: o
                    }) => m.jsx("ul", {
                        className: "grid grid-cols-2 gap-2 px-4 pb-8",
                        children: i.all.map(a => m.jsx(Gr, {
                            slot: a,
                            onClick: o
                        }, a.id))
                    })
                }) : m.jsx(fr, {
                    closeButton: !0,
                    size: "xl",
                    className: "overflow-auto",
                    render: ({
                        open: o
                    }) => m.jsx("li", {
                        className: "pt-2",
                        children: m.jsx(le, {
                            theme: "white",
                            shape: "text",
                            className: "w-full",
                            onClick: o,
                            children: r("experience_booking:show_more")
                        })
                    }),
                    body: ({
                        close: o
                    }) => m.jsx("ul", {
                        className: "grid grid-cols-2 gap-2 p-4",
                        children: i.all.map(a => m.jsx(Gr, {
                            slot: a,
                            onClick: o
                        }, a.id))
                    })
                })
            })]
        })
    },
    Gr = ({
        slot: e,
        onClick: t
    }) => {
        const {
            locale: n
        } = J(), {
            selectCustomSlot: r,
            selectedSlot: s
        } = ue(), i = bi(e.start_ts, n, {
            month: "short"
        }), o = bi(e.end_ts, n, {
            month: "short"
        }), a = i.month === o.month, u = `${i.day}${a?"":` ${i.month}`} - ${o.day} ${o.month}`, c = (s == null ? void 0 : s.id) === e.id;
        return m.jsx("li", {
            children: m.jsx(le, {
                className: "w-full",
                theme: c ? "primary" : "white",
                shape: c ? "solid" : "outlined",
                onClick: () => {
                    r(new Date(e.start_ts * 1e3)), t && t()
                },
                children: u
            })
        }, e.id)
    },
    op = ip,
    ap = () => {
        const {
            locale: e,
            i18n: {
                useTranslation: t
            }
        } = J(), {
            experienceTickets: n,
            selectedSlot: r,
            selectCustomSlot: s
        } = ue(), {
            t: i
        } = t(["experience_booking"]), o = x.useMemo(() => {
            var a;
            const u = (a = n.tickets[0]) == null ? void 0 : a.booking_times,
                c = {};
            for (const l in u) {
                const d = l.slice(0, 7),
                    h = u[l];
                c[d] ? c[d] = c[d].concat(h) : c[d] = h
            }
            return Object.entries(c)
        }, [n.tickets]);
        return m.jsx("div", {
            className: "space-y-4",
            children: o.map(([a, u]) => u.length > 0 ? m.jsx(ua, {
                label: m.jsx("strong", {
                    children: Ve(a, e, {
                        month: "long"
                    })
                }),
                name: a,
                options: u.map(c => {
                    const l = Ve(c.start_ts, `${e}-GB`, {
                            dateStyle: "full",
                            timeStyle: "short"
                        }),
                        d = Ve(c.end_ts, `${e}-GB`, {
                            dateStyle: "full",
                            timeStyle: "short"
                        });
                    return {
                        text: m.jsxs("div", {
                            className: "text-sm",
                            children: [m.jsxs("p", {
                                children: [i("experience_booking:from"), ": ", l]
                            }), m.jsxs("p", {
                                children: [i("experience_booking:to"), ": ", d]
                            })]
                        }),
                        value: c.id
                    }
                }),
                value: (r == null ? void 0 : r.id) || "",
                onChange: c => {
                    const l = u.find(d => d.id === c);
                    l && s(new Date(l.start_ts * 1e3))
                }
            }, a) : null)
        })
    },
    up = ap,
    lp = () => {
        const {
            locale: e
        } = J(), {
            selectCustomSlot: t,
            setSlotState: n,
            experience: r,
            selectedSlot: s,
            slotState: i
        } = ue(), o = r.facilities.length > 0, a = r.duration_unit === "days" && r.duration > 0, u = x.useMemo(() => al(r.booking_dates_arr), [r.booking_dates_arr]);
        return o ? a ? m.jsxs("div", {
            className: "flex flex-col gap-4 md:flex-row",
            children: [m.jsx(op, {}), m.jsx(la, {
                classNames: {
                    cell: "rdp-cell [&>button]:focus:!bg-none"
                },
                showOutsideDays: !0,
                mode: "range",
                lang: e,
                selected: {
                    from: s ? new Date(s.start_ts * 1e3) : void 0,
                    to: s ? new Date(s.end_ts * 1e3) : void 0
                },
                month: i == null ? void 0 : i.selectedMonth,
                fromDate: u ? new Date(u.year, u.month, u.day) : void 0,
                weekStartsOn: 0,
                disabled: c => !r.booking_dates_arr.includes(Ps(c, "yyyy-MM-dd")),
                onMonthChange: c => {
                    n({
                        selectedMonth: c
                    })
                },
                onDayClick: t
            })]
        }) : m.jsx(up, {}) : m.jsx(Cr, {})
    },
    cp = lp,
    dp = () => {
        const {
            i18n: {
                useTranslation: e
            }
        } = J(), {
            experience: t,
            selectedSlot: n,
            withFlexPass: r,
            bookingType: s,
            setCheckoutMode: i
        } = ue(), {
            t: o
        } = e(["experience_booking"]), a = t.time_slot_mode === "custom", u = t.booking_dates_arr || [];
        return m.jsx("div", {
            className: "relative space-y-4",
            children: u.length ? m.jsxs(m.Fragment, {
                children: [r && !a && m.jsxs(m.Fragment, {
                    children: [m.jsx("div", {
                        className: "bg-body-light space-y-2 p-4 lg:rounded-lg",
                        children: m.jsx(ep, {})
                    }), m.jsx("div", {
                        className: "bg-body !mt-0 h-5 lg:hidden"
                    })]
                }), m.jsxs("div", {
                    className: "bg-body-light space-y-2 p-4 lg:rounded-lg",
                    children: [s === "flexible" ? m.jsx(np, {}) : m.jsxs(m.Fragment, {
                        children: [m.jsx("h2", {
                            className: "text-base lg:text-lg",
                            children: `1. ${o("experience_booking:select_date_time")}`
                        }), a ? m.jsx(cp, {}) : m.jsx(sp, {})]
                    }), m.jsx("div", {
                        className: "hidden pt-4 text-end lg:block",
                        children: m.jsx(le, {
                            className: "w-full max-w-xs",
                            onClick: () => {
                                i("tickets")
                            },
                            disabled: s !== "flexible" && !n,
                            arrow: !0,
                            children: o("experience_booking:select_tickets")
                        })
                    })]
                })]
            }) : m.jsx("div", {
                className: "bg-body-light space-y-2 p-4 lg:rounded-lg",
                children: m.jsx(Cr, {})
            })
        })
    },
    hp = dp,
    Yn = ["calendar", "tickets", "summary", "checkout"],
    mp = x.forwardRef(function(t, n) {
        var r = t,
            {
                className: s
            } = r,
            i = mi(r, ["className"]);
        const {
            locale: o
        } = J(), {
            checkoutMode: a
        } = ue(), {
            is2lg: u
        } = kl(), c = u ? 0 : o != null && o.startsWith("ar") ? -100 : 100, l = x.useRef("tickets"), d = x.useRef("tickets");
        return m.jsx(Un.div, $({
            ref: n,
            className: Ot("grow overflow-hidden lg:grow-0 lg:space-y-1", s),
            initial: "enter",
            animate: "center",
            exit: "exit",
            custom: {
                mode: a
            },
            variants: {
                enter: ({
                    mode: h
                }) => {
                    l.current = h;
                    const f = Yn.indexOf(d.current),
                        g = Yn.indexOf(l.current),
                        p = Math.sign(g - f);
                    return {
                        x: c * p,
                        opacity: 0
                    }
                },
                center: ({
                    mode: h
                }) => (d.current = h, {
                    x: 0,
                    opacity: 1
                }),
                exit: () => {
                    const h = Yn.indexOf(d.current),
                        f = Yn.indexOf(l.current);
                    return {
                        x: Math.sign(h - f) * c,
                        opacity: 0
                    }
                }
            },
            transition: {
                duration: .2
            }
        }, i), `${a}-${c}`)
    }),
    dl = mp,
    fp = ({
        ticket: e,
        withExpandArrow: t,
        isAddon: n
    }) => {
        const {
            experience: r,
            tickets: s,
            addTicket: i,
            removeTicket: o,
            selectedSlot: a,
            checkoutError: u,
            ticket_errors: c,
            setTicketErrors: l
        } = ue(), {
            locale: d,
            i18n: {
                useTranslation: h
            }
        } = J(), {
            t: f
        } = h(["experience_booking"]), [g, p] = x.useState(!1), _ = x.useMemo(() => {
            var F;
            const H = s.filter(I => !I.is_addon),
                ge = s.filter(I => I.is_addon);
            return {
                ticket: ((F = s.find(I => I.facility_id === e.facility_id)) == null ? void 0 : F.num_of_people) || 0,
                addons: ge.reduce((I, Re) => I + Re.num_of_people, 0),
                all: H.reduce((I, Re) => I + Re.num_of_people, 0)
            }
        }, [e.facility_id, s]), v = x.useMemo(() => {
            if (n) return Math.max(_.all, 1);
            const F = Number(e.max_participants);
            if (a) {
                const H = +a.max_capacity || 0;
                return Math.min(F, H)
            }
            return Math.min(F, e.max_participants)
        }, [n, e.max_participants, a, _.all]), w = e.discounted_price > 0, b = w ? e.discounted_price : e.price_per_slot, A = v === 0, k = n ? _.addons >= _.all : v > 0 && _.all >= v || _.ticket >= v, C = x.useMemo(() => $($({}, c), u == null ? void 0 : u.ticketErrors), [u == null ? void 0 : u.ticketErrors, c]), U = x.useMemo(() => C == null ? void 0 : C[e.facility_id], [C, e.facility_id]);
        x.useEffect(() => {
            _.ticket > 0 && e.min_participants > 0 && (_.ticket < e.min_participants ? l(q($({}, C), {
                [e.facility_id]: f("experience_booking:minimum_tickets", {
                    count: e.min_participants
                })
            })) : U && l(q($({}, C), {
                [e.facility_id]: ""
            })))
        }, [_.ticket, e.facility_id, e.max_participants, e.min_participants, U]);
        const S = m.jsxs("div", {
            children: [w && !A && m.jsx("p", {
                className: "text-xs text-white/60 line-through",
                children: f("experience_booking:price", {
                    price: e.price_per_slot,
                    currency: f("experience_booking:SAR")
                })
            }), m.jsx("p", {
                className: "text-sm",
                children: f("experience_booking:price", {
                    price: Ue(b),
                    currency: f("experience_booking:SAR")
                })
            })]
        });
        return m.jsxs("li", {
            id: e.facility_id,
            className: `overflow-hidden px-px py-2 ${U?"text-error":A?"text-gray-400":""}`,
            children: [m.jsxs("div", {
                className: "flex items-stretch justify-between gap-2 pb-2 md:items-center",
                children: [t && m.jsx("button", {
                    onClick: () => p(F => !F),
                    disabled: !e.description,
                    className: "flex h-full w-5 shrink-0 items-center justify-center self-center p-1 disabled:opacity-30 md:mt-px",
                    "aria-label": "expand description",
                    children: m.jsx("svg", {
                        width: 25,
                        height: 25,
                        viewBox: "0 0 32 20",
                        className: `fill-current transition-transform delay-150 ease-in-out ${g?"rotate-0":"ltr:-rotate-90 rtl:rotate-90"}`,
                        children: m.jsx("path", {
                            d: "M16.0006 19.1204C15.4271 19.1204 14.8537 18.9014 14.4165 18.4644L0.657185 4.70499C-0.218085 3.82972 -0.218085 2.41062 0.657185 1.5357C1.5321 0.660788 2.95092 0.660788 3.82626 1.5357L16.0006 13.7108L28.1751 1.53613C29.0504 0.661213 30.469 0.661213 31.3439 1.53613C32.2196 2.41104 32.2196 3.83014 31.3439 4.70541L17.5848 18.4648C17.1474 18.9019 16.5739 19.1204 16.0006 19.1204Z"
                        })
                    })
                }), m.jsxs("div", {
                    className: "mt-1 flex grow items-center gap-2 sm:mt-0",
                    children: [m.jsx("div", {
                        className: "bg-primary mt-1 flex h-full w-6 shrink-0 items-center justify-center rounded p-1 text-xs md:w-8 md:text-sm",
                        children: e.name.slice(0, 2).toUpperCase()
                    }), m.jsxs("div", {
                        className: "spcae-y-2",
                        children: [m.jsx("p", {
                            className: "text-sm sm:text-base sm:font-semibold",
                            children: e[`name_${d}`] || e.name
                        }), m.jsx("div", {
                            className: "md:hidden",
                            children: S
                        })]
                    })]
                }), A ? m.jsx("span", {
                    className: "text-lg text-red-500",
                    children: f("experience_booking:sold_out")
                }) : m.jsxs("div", {
                    className: "ms:px-2 flex items-center gap-2",
                    children: [m.jsx("div", {
                        className: "hidden md:block",
                        children: S
                    }), m.jsxs("div", {
                        className: "flex items-center gap-2 font-sans text-3xl leading-none",
                        children: [m.jsx("button", {
                            onClick: () => {
                                o(e, 1), _.ticket === 1 && l(q($({}, C), {
                                    [e.facility_id]: ""
                                }))
                            },
                            disabled: _.ticket <= 0,
                            className: "remove-from-cart border-body-lighter flex h-9 w-9 items-center justify-center rounded-full border bg-white/5 hover:bg-white/10 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-black/10 disabled:text-zinc-700 sm:h-10 sm:w-10",
                            "data-event-name": r.name,
                            "data-ticket-name": e.name,
                            "data-ticket-group": r.group_slug,
                            children: m.jsx("svg", {
                                width: "12",
                                height: "2",
                                viewBox: "0 0 12 2",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: m.jsx("rect", {
                                    width: "12",
                                    height: "2",
                                    rx: "1",
                                    fill: "currentColor"
                                })
                            })
                        }), m.jsx("div", {
                            className: "border-body-lighter flex h-9 w-9 items-center justify-center rounded-full border sm:h-10 sm:w-10",
                            children: m.jsx("span", {
                                className: "text-base font-semibold text-gray-400",
                                children: _.ticket
                            })
                        }), m.jsx("button", {
                            onClick: () => i(e, 1),
                            disabled: k,
                            className: "add-to-cart border-body-lighter flex h-9 w-9 items-center justify-center rounded-full border bg-white/5 hover:bg-white/10 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-black/10 disabled:text-zinc-700 sm:h-10 sm:w-10",
                            "data-event-name": r.name,
                            "data-ticket-name": e.name,
                            "data-ticket-group": r.group_slug,
                            children: m.jsx("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 12 12",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: m.jsx("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M7 1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1Z",
                                    fill: "currentColor"
                                })
                            })
                        })]
                    })]
                })]
            }), !!U && m.jsx("p", {
                className: "px-4 pt-2 text-end text-xs text-red-500 md:px-6",
                children: U
            }), !!e.description && m.jsx(Un.div, {
                initial: {
                    height: 0
                },
                animate: {
                    height: g ? "auto" : 0
                },
                className: "text-text max-w-full overflow-hidden whitespace-pre-wrap",
                transition: {
                    duration: .25,
                    ease: "easeInOut"
                },
                dangerouslySetInnerHTML: {
                    __html: e.description
                },
                "data-testid": "collapsable-text"
            })]
        }, e.facility_id)
    },
    qo = fp,
    pp = () => {
        var e;
        const {
            i18n: {
                useTranslation: t
            }
        } = J(), {
            experienceTickets: n,
            selectedSlot: r
        } = ue(), {
            t: s
        } = t(["experience_booking"]), i = x.useMemo(() => n.tickets.some(o => !!o.description), [n.tickets]);
        return m.jsxs("div", {
            className: "space-y-4",
            children: [m.jsxs("div", {
                className: "bg-body-light h-full space-y-2 p-4 lg:space-y-4 lg:rounded-lg",
                children: [m.jsxs("div", {
                    children: [m.jsx("h2", {
                        className: "text-base lg:text-lg",
                        children: `${r?"2. ":"1."}${s("experience_booking:select_tickets")}`
                    }), m.jsx("p", {
                        className: "text-xs",
                        children: s("experience_booking:tickets_w_vat")
                    })]
                }), ((e = n.tickets) == null ? void 0 : e.length) > 0 ? m.jsx("ul", {
                    className: "divide-body-lighter divide-y",
                    children: n.tickets.map(o => m.jsx(qo, {
                        ticket: o,
                        withExpandArrow: i
                    }, o.facility_id))
                }) : m.jsx(Cr, {})]
            }), n.addons.length > 0 && m.jsxs("div", {
                className: "!mt-0 lg:space-y-4",
                children: [m.jsx("div", {
                    className: "bg-body h-5 lg:hidden"
                }), m.jsxs("div", {
                    className: "bg-body-light h-full space-y-2 p-4 lg:space-y-4 lg:rounded-lg",
                    children: [m.jsxs("div", {
                        children: [m.jsx("h2", {
                            className: "text-base lg:text-lg",
                            children: `${r?"3. ":"2."}${s("experience_booking:addons")}`
                        }), m.jsx("p", {
                            className: "text-xs",
                            children: s("experience_booking:addons_desc")
                        })]
                    }), m.jsx("ul", {
                        className: "divide-body-lighter divide-y",
                        children: n.addons.map(o => m.jsx(qo, {
                            ticket: o,
                            withExpandArrow: i,
                            isAddon: !0
                        }, o.facility_id))
                    })]
                })]
            })]
        })
    },
    gp = pp,
    Ho = [bl, xl, wl, Al, Sl],
    yp = ({
        className: e,
        withTabby: t,
        logosOnly: n
    }) => {
        const r = t ? Ho.concat(oa) : Ho,
            {
                i18n: {
                    useTranslation: s
                }
            } = J(),
            {
                t: i
            } = s("experience_booking");
        return n ? m.jsx(m.Fragment, {
            children: r.map((o, a) => m.jsx(o, {
                className: e
            }, a))
        }) : m.jsxs("div", {
            className: Ot("rounded-lg border border-t-0 border-white/20", e),
            children: [m.jsxs("div", {
                className: "flex w-full items-center justify-between",
                children: [m.jsx("div", {
                    className: "mt-0 h-5 w-full border-t border-white/20 ltr:rounded-l-lg rtl:rounded-r-lg"
                }), m.jsx("p", {
                    className: "-mt-4 shrink-0 grow px-2 text-center text-xs text-zinc-400",
                    children: i("experience_booking:available_pay_methods")
                }), m.jsx("div", {
                    className: "mt-0 h-5 w-full border-t border-white/20 ltr:rounded-r-lg rtl:rounded-l-lg"
                })]
            }), m.jsx("div", {
                className: "-mt-2 flex w-full flex-wrap items-center justify-center gap-4 p-1 pb-3 pt-1.5",
                children: r.map((o, a) => m.jsx(o, {}, a))
            })]
        })
    },
    hl = yp,
    It = ({
        discountPrice: e,
        originalPrice: t,
        className: n,
        currency: r
    }) => {
        const {
            i18n: {
                useTranslation: s
            }
        } = J(), {
            t: i
        } = s(["experience_booking"]), o = typeof e == "number" && e >= 0 && e < t;
        return m.jsxs("div", {
            className: Ot("flex items-center gap-2", n),
            children: [m.jsx("p", {
                className: o ? "text-white/60 line-through" : "",
                children: i("experience_booking:price", {
                    price: Ue(t),
                    currency: i(`experience_booking:${r}`)
                })
            }), o ? m.jsx("p", {
                className: "shrink-0 text-white",
                children: i("experience_booking:price", {
                    price: Ue(e),
                    currency: i(`experience_booking:${r}`)
                })
            }) : null]
        })
    },
    _p = ({
        ticket: e
    }) => {
        const {
            i18n: {
                useTranslation: t
            }
        } = J(), {
            ticket_errors: n,
            setTicketErrors: r,
            removeTicket: s
        } = ue(), {
            coupon: i
        } = $n(), {
            t: o
        } = t(["experience_booking"]), a = e.discounted_price > 0, u = i.discount > 0, c = a || u, l = a ? e.discounted_price : e.price_per_slot, d = l - l * (i.discount / 100), h = n == null ? void 0 : n[e.facility_id];
        return m.jsxs("li", {
            className: "flex items-center justify-between gap-2",
            children: [m.jsxs("div", {
                className: "flex grow items-center gap-1 text-xs sm:gap-2 md:text-sm",
                children: [m.jsx("span", {
                    className: "shrink-0",
                    children: `${e.num_of_people} x`
                }), m.jsx("span", {
                    className: "text-primary",
                    children: m.jsx(ia, {
                        double: !1,
                        className: "h-4 w-4"
                    })
                }), m.jsxs("div", {
                    children: [m.jsx("div", {
                        className: "inline-block gap-1 text-xs md:text-sm",
                        children: m.jsx("p", {
                            children: m.jsx("span", {
                                className: "ltr:mr-1 rtl:ml-1",
                                children: e.name
                            })
                        })
                    }), !!h && m.jsx("p", {
                        className: "text-xs text-red-500",
                        children: h
                    })]
                })]
            }), m.jsxs("div", {
                className: "flex shrink-0 items-center text-xs md:gap-2 md:text-sm",
                children: [m.jsxs("div", {
                    className: "text-end",
                    children: [m.jsx("div", {
                        className: c ? "text-xs line-through opacity-60" : "font-bold",
                        children: m.jsx("span", {
                            className: "text-xs font-normal md:text-sm",
                            children: o("experience_booking:price", {
                                price: Ue(e.price_per_slot),
                                currency: o("experience_booking:SAR")
                            })
                        })
                    }), c ? m.jsx("span", {
                        children: o("experience_booking:price", {
                            price: Ue(d),
                            currency: o("experience_booking:SAR")
                        })
                    }) : null]
                }), m.jsx(le, {
                    theme: "white",
                    shape: "text",
                    className: "h-6 w-6 rounded-md p-0.5 ltr:ml-1.5 rtl:mr-1.5",
                    onClick: () => {
                        r(q($({}, n), {
                            [e.facility_id]: ""
                        })), s(e, e.num_of_people)
                    },
                    children: m.jsx(mr, {
                        className: "h-2.5 w-2.5 lg:h-3 lg:w-3"
                    })
                })]
            })]
        })
    },
    ml = _p,
    vp = () => {
        const {
            locale: e,
            i18n: {
                useTranslation: t
            }
        } = J(), {
            experience: n,
            selectedSlot: r,
            totals: s
        } = ue(), {
            coupon: i,
            setCoupon: o
        } = $n(), [a, u] = x.useState(i.code), {
            mutateAsync: c,
            isPending: l,
            error: d
        } = jd(), {
            t: h
        } = t("experience_booking"), f = () => fi(void 0, null, function*() {
            if (a) try {
                const p = yield c({
                    booking_date: (r == null ? void 0 : r.date) || "",
                    venue_id: n.venue_id,
                    code: a,
                    locale: e
                });
                o({
                    code: a,
                    discount: +p.discount,
                    max_amount: +p.max_amount
                })
            } catch {}
        }), g = () => {
            o({
                code: "",
                discount: 0,
                max_amount: 0
            })
        };
        return m.jsxs("div", {
            children: [m.jsx("form", {
                onSubmit: p => {
                    p.preventDefault(), f()
                },
                children: m.jsxs("div", {
                    className: "group relative w-full",
                    children: [m.jsx(El, {
                        defaultValue: i.code,
                        label: m.jsx("span", {
                            className: "text-sm",
                            children: h("experience_booking:enter_coupon")
                        }),
                        disabled: i.discount > 0 || l,
                        className: `focus:border-primary w-full ${i.discount>0?"text-success-light":""}`,
                        placeholder: h("experience_booking:enter_coupon"),
                        error: d == null ? void 0 : d.message,
                        hideErrorSpace: !0,
                        hideErrorMark: !0,
                        onChange: p => {
                            u(p)
                        }
                    }), m.jsx("div", {
                        className: "absolute top-6 mx-2 flex h-[50px] items-center ltr:right-0 rtl:left-0",
                        children: m.jsx(le, {
                            className: `ring-offset-body-lighter h-8 text-sm font-bold ${i.discount>0?"bg-white/10":""}`,
                            theme: i.discount > 0 ? "white" : "primary",
                            shape: i.discount > 0 ? "text" : "solid",
                            type: i.discount > 0 ? "button" : "submit",
                            onClick: p => {
                                i.discount > 0 && (p.preventDefault(), g())
                            },
                            id: "checkout-apply-coupon",
                            "data-event-name": n == null ? void 0 : n.name,
                            "data-promo": i.discount > 0,
                            disabled: !(a != null && a.trim()),
                            loading: l,
                            children: i.discount > 0 ? h("experience_booking:remove") : h("experience_booking:apply")
                        })
                    })]
                })
            }), i.discount > 0 ? m.jsx("div", {
                className: "pt-1.5 text-sm text-green-500",
                children: h("experience_booking:coupon_applied_successfully", {
                    amount: i.max_amount > 0 && s.vat > i.max_amount ? `${i.max_amount}${h("experience_booking:SAR")}` : `${i.discount}%`
                })
            }) : null]
        })
    },
    bp = ["coupon"],
    xp = () => {
        const {
            i18n: {
                useTranslation: e
            }
        } = J(), {
            user: t
        } = ks(), {
            checkoutMode: n
        } = ue(), {
            redeem_type: r,
            setRedeemType: s
        } = $n(), {
            t: i
        } = e(["experience_booking"]);
        return m.jsxs("div", {
            className: `border-t border-white/20 pt-4 lg:border-b lg:pb-4 ${n==="summary"?"block":"hidden lg:block"}`,
            children: [m.jsx("div", {
                className: "flex items-center gap-2",
                children: bp.map(o => {
                    const a = o === r;
                    return m.jsxs(le, {
                        className: Ot("aria-selected:bg-primary-700 aria-selected:text-primary-contrast h-8 rounded-lg border-white/30 px-2 text-[13px] text-gray-400", !!r && !a && "border-white/20 text-white/20"),
                        shape: a ? "solid" : "outlined",
                        theme: a ? "primary" : "white",
                        role: "option",
                        "aria-selected": a,
                        onClick: () => {
                            a || s(o)
                        },
                        children: [m.jsx("span", {
                            children: i(`experience_booking:${o}`)
                        }), a && m.jsx("span", {
                            className: "flex h-4 w-4 items-center justify-center rounded-full bg-white/10",
                            onPointerUp: u => {
                                u.stopPropagation(), s(void 0)
                            },
                            children: m.jsx(mr, {
                                className: "h-2 w-2 opacity-70"
                            })
                        })]
                    }, o)
                })
            }), m.jsx(Sr, {
                initial: !1,
                mode: "wait",
                children: m.jsx(Un.div, {
                    className: "overflow-hidden",
                    initial: {
                        height: 0
                    },
                    animate: {
                        height: "auto"
                    },
                    exit: {
                        height: 0
                    },
                    children: !!r && m.jsx("div", {
                        className: "pb-2 pt-4",
                        children: t != null && t.email_verified ? m.jsx(vp, {}) : m.jsx(aa, {
                            show: !0,
                            className: "p-0 [&>div]:pt-4 [&>h2]:text-lg [&>h2]:font-semibold [&>p]:text-xs",
                            btnClassName: "mt-2",
                            flatLayout: !0
                        })
                    })
                }, r)
            })]
        })
    },
    wp = xp,
    Ap = ({
        className: e
    }) => {
        const {
            locale: t,
            i18n: {
                useTranslation: n,
                Trans: r
            }
        } = J(), {
            experience: s,
            totals: i,
            paymentMethod: o,
            setPaymentMethod: a,
            checkoutMode: u
        } = ue(), {
            t: c
        } = n(["experience_booking"]), l = I6, d = s.is_tabby, h = i.net_after_discount < l, f = d && i.net_after_discount >= l;
        return x.useEffect(() => {
            o === "tabby" && !f && a("credit_card")
        }, [o, f, a]), m.jsxs("fieldset", {
            className: `space-y-2 ${u==="checkout"?"block":"hidden lg:block"}`,
            children: [m.jsx("legend", {
                children: m.jsx("h2", {
                    className: e || "text-xl",
                    children: c("experience_booking:payment_method")
                })
            }), m.jsxs("label", {
                htmlFor: "credit_card_payment",
                className: `bg-body-light group flex w-full cursor-pointer flex-row-reverse items-start gap-3 rounded-lg border-2 bg-white/5 p-4 hover:bg-white/10 ${o==="credit_card"?"border-primary":"border-transparent"}`,
                children: [m.jsxs("div", {
                    className: "grow space-y-1.5",
                    children: [m.jsx("p", {
                        className: "text-sm font-semibold",
                        children: c("experience_booking:credit_card_payment")
                    }), m.jsx("div", {
                        className: "flex items-center gap-3",
                        children: m.jsx(hl, {
                            logosOnly: !0
                        })
                    })]
                }), m.jsx("input", {
                    className: "bg-body-lighter text-primary !ring-offset-body-lighter checked:!ring-primary hover:ring-primary mt-1.5 h-4 w-4 appearance-none border-0 !bg-none ring-1 ring-white/30 ring-offset-[3px] checked:!ring-2 checked:!ring-offset-[3px]",
                    type: "radio",
                    id: "credit_card_payment",
                    value: "credit_card",
                    checked: o === "credit_card",
                    onChange: () => a("credit_card")
                })]
            }), d && m.jsxs("label", {
                htmlFor: "tabby_payment",
                className: `bg-body-light group flex w-full flex-row-reverse items-start gap-3 rounded-lg border-2 bg-white/5 p-4 hover:bg-white/10 ${o==="tabby"?"border-primary":"border-transparent"} ${f?"cursor-pointer":"cursor-not-allowed opacity-50"}`,
                children: [m.jsx(fr, {
                    size: f ? "2xl" : "xl",
                    render: ({
                        open: g
                    }) => m.jsxs("div", {
                        className: "flex grow items-center justify-between gap-2",
                        children: [m.jsxs("div", {
                            className: "grow",
                            children: [m.jsx("p", {
                                className: "text-sm font-semibold",
                                children: c("experience_booking:pay_with_tabby")
                            }), m.jsx("p", {
                                className: "text-xs",
                                children: h ? c("experience_booking:tabby_minimum_amount", {
                                    price: Ue(l),
                                    currency: c("experience_booking:SAR")
                                }) : m.jsxs(r, {
                                    i18nKey: "tabby_payment_with_price_formal",
                                    values: {
                                        price: Ue(i.net_after_discount / 4),
                                        currency: c("experience_booking:SAR")
                                    },
                                    ns: "experience_booking",
                                    children: [m.jsx("strong", {}), m.jsx("button", {
                                        className: "text-sky-500 underline hover:text-sky-400 disabled:cursor-not-allowed",
                                        onClick: g,
                                        disabled: !f
                                    })]
                                })
                            })]
                        }), m.jsx(oa, {
                            className: "h-6 w-14 shrink-0"
                        })]
                    }),
                    body: ({
                        close: g
                    }) => m.jsxs("div", {
                        className: "relative rounded-none",
                        children: [m.jsx("button", {
                            className: "absolute top-2 mx-4 flex items-center justify-center rounded-full bg-white p-2 text-base font-bold text-gray-600 hover:bg-gray-200 focus:bg-gray-200 ltr:right-2 rtl:left-2",
                            onPointerUp: g,
                            children: m.jsx(mr, {
                                className: "h-3 w-3"
                            })
                        }), m.jsx("iframe", {
                            title: "Tabby Payment Installments",
                            className: "max-h-full w-full overflow-y-auto rounded-lg bg-white",
                            height: f ? "775" : "735",
                            src: f ? `//widgets.tabby.ai/webviews/product-page/installments/${t}/?currency=SAR&price=${i.net_after_discount}` : `//widgets.tabby.ai/webviews/product-page/installments/${t}/?installmentsCount=0`
                        })]
                    })
                }), m.jsx("input", {
                    className: "bg-body-lighter text-primary !ring-offset-body-lighter checked:!ring-primary hover:ring-primary mt-1.5 h-4 w-4 appearance-none border-0 !bg-none ring-1 ring-white/30 ring-offset-[3px] checked:!ring-2 checked:!ring-offset-[3px]",
                    type: "radio",
                    id: "tabby_payment",
                    value: "tabby",
                    checked: o === "tabby",
                    onChange: () => a("tabby")
                })]
            })]
        }, o)
    },
    Sp = Ap,
    Cp = ({
        className: e
    }) => {
        const {
            i18n: {
                useTranslation: t
            }
        } = J(), {
            experience: n,
            totals: r,
            checkoutMode: s
        } = ue(), {
            coupon: i
        } = $n(), {
            t: o
        } = t("experience_booking"), a = i.discount > 0;
        return m.jsxs("div", {
            className: Ot("space-y-2 py-2", ["tickets", "summary", "checkout"].includes(s) ? "block" : "hidden lg:block", e),
            children: [m.jsx("div", {
                className: "mb-4 h-[1px] w-full bg-white/20"
            }), m.jsxs("div", {
                className: "flex items-center justify-between text-[13px] text-gray-100",
                children: [m.jsx("p", {
                    children: o("experience_booking:subtotal")
                }), m.jsx(It, {
                    originalPrice: r.gross,
                    discountPrice: r.gross_after_discount,
                    currency: "SAR"
                })]
            }), a && m.jsxs("div", {
                className: "flex items-center justify-between text-[13px] text-green-600",
                children: [m.jsxs("p", {
                    children: [o("experience_booking:promo_code"), " (", i.code, ")"]
                }), m.jsx(It, {
                    originalPrice: -r.discount_total,
                    currency: "SAR"
                })]
            }), m.jsxs("div", {
                className: "flex items-center justify-between text-[13px] text-gray-100",
                children: [m.jsx("p", {
                    children: `${o("experience_booking:vat")} ${n.vat_percentage}%`
                }), m.jsx(It, {
                    originalPrice: r.vat,
                    currency: "SAR"
                })]
            }), m.jsxs("div", {
                className: "flex flex-wrap items-center justify-between text-base font-bold",
                children: [m.jsx("p", {
                    children: o("experience_booking:total")
                }), m.jsx(It, {
                    originalPrice: r.net_after_discount,
                    currency: "SAR"
                })]
            })]
        })
    },
    fl = Cp,
    kp = () => {
        const {
            locale: e,
            i18n: {
                useTranslation: t,
                Trans: n
            }
        } = J(), {
            experience: r,
            checkoutMode: s,
            tickets: i,
            totals: o,
            totalTickets: a,
            checkoutError: u,
            selectedSlot: c,
            agreeTerms: l,
            canCheckout: d,
            setAgreeTerms: h,
            checkoutLoading: f,
            checkout: g
        } = ue(), {
            t: p
        } = t(["experience_booking"]), _ = u == null ? void 0 : u.message, v = r.is_tabby, w = o.net_after_discount <= As, b = x.useMemo(() => {
            if (c) {
                const A = Ve(c.start_ts, `${e}-GB`, {
                        dateStyle: "medium",
                        timeStyle: "short"
                    }),
                    k = Ve(c.end_ts, `${e}-GB`, {
                        dateStyle: "medium",
                        timeStyle: "short"
                    });
                return `${A} - ${k}`
            }
            return ""
        }, [e, c]);
        return m.jsx(O6, {
            children: m.jsxs("div", {
                className: "space-y-4 p-4 lg:space-y-3 lg:rounded-lg",
                children: [s !== "checkout" && m.jsx("h2", {
                    className: "text-xl",
                    children: p("experience_booking:booking_summary")
                }), a > 0 ? m.jsxs(m.Fragment, {
                    children: [s !== "checkout" && m.jsxs(m.Fragment, {
                        children: [m.jsxs("ul", {
                            className: `space-y-1 ${s==="summary"?"block":"hidden lg:block"}`,
                            id: "seat-tickets",
                            children: [b && m.jsx("p", {
                                className: "text-sm",
                                children: m.jsx("span", {
                                    children: b
                                })
                            }), i.map((A, k) => m.jsx(ml, {
                                ticket: A
                            }, k))]
                        }), m.jsx(wp, {})]
                    }), m.jsx(Sp, {}), m.jsx(fl, {}), _ && m.jsx("p", {
                        className: "text-center text-sm text-red-500",
                        children: _
                    }), !w && m.jsx("p", {
                        className: "text-error text-sm",
                        children: p("experience_booking:payment_maximum_amount", {
                            amount: Ue(As),
                            currency: p("experience_booking:SAR")
                        })
                    }), m.jsx(hl, {
                        className: s !== "summary" ? "hidden" : "my-8 lg:hidden",
                        withTabby: v
                    }), m.jsx(jl, {
                        groupClassName: s === "checkout" ? "" : "hidden lg:block",
                        className: "mt-px",
                        label: m.jsx("span", {
                            className: "text-sm",
                            children: m.jsx(n, {
                                i18nKey: "agree",
                                ns: "experience_booking",
                                children: m.jsx("a", {
                                    className: "text-primary font-semibold underline",
                                    href: `/${e}/terms`,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: " "
                                })
                            })
                        }),
                        checked: l,
                        onChange: () => h(!l)
                    }), m.jsx(le, {
                        loading: f,
                        className: "!mt-8 hidden w-full gap-2 py-3 text-center text-lg font-semibold lg:flex",
                        onClick: () => g(),
                        id: "proceed-to-payment",
                        "data-event-name": r == null ? void 0 : r.name,
                        "data-event-venue": r == null ? void 0 : r.venue_id,
                        disabled: !d,
                        children: o.net_after_discount > 0 ? m.jsxs(m.Fragment, {
                            children: [m.jsx(sa, {
                                className: `h-4 w-4 pb-0.5 ${d?"":"grayscale"}`
                            }), m.jsx("span", {
                                children: p("experience_booking:proceed")
                            }), m.jsx(It, {
                                originalPrice: o.net_after_discount,
                                currency: "SAR",
                                className: "hidden lg:block"
                            })]
                        }) : p("experience_booking:confirm_booking")
                    })]
                }) : m.jsxs("div", {
                    className: "space-y-4 py-4 text-center",
                    children: [m.jsx(ia, {
                        className: "mx-auto h-24 w-24 text-zinc-500"
                    }), m.jsx("p", {
                        className: "text-sm text-gray-400",
                        children: p("experience_booking:select_ticket_continue")
                    })]
                })]
            })
        })
    },
    zo = kp,
    Tp = () => {
        const {
            i18n: {
                useTranslation: e
            }
        } = J(), {
            t
        } = e(["experience_booking"]), [n, r] = x.useState(!1), {
            isWebView: s
        } = On(), {
            experience: i,
            tickets: o,
            totals: a,
            setCheckoutMode: u,
            checkoutMode: c,
            checkoutLoading: l,
            checkout: d,
            selectedSlot: h,
            bookingType: f,
            totalTickets: g,
            canCheckout: p
        } = ue();
        return x.useEffect(() => {
            n && g <= 0 && r(!1)
        }, [n, g]), m.jsx("div", {
            "data-webview": s,
            className: "bg-body-light fixed bottom-0 z-[99] h-[72px] w-full p-1 data-[webview=true]:pb-7 lg:hidden",
            children: m.jsx(Sr, {
                initial: !1,
                mode: "popLayout",
                children: m.jsx(dl, {
                    className: "relative z-50 mx-auto max-w-lg grow overflow-hidden",
                    children: m.jsx("div", {
                        className: "mx-auto overflow-hidden p-1 text-center",
                        children: c === "calendar" ? m.jsx(le, {
                            className: "h-12 w-full",
                            onClick: () => {
                                u("tickets")
                            },
                            disabled: f !== "flexible" && !h,
                            arrow: !0,
                            children: t("experience_booking:select_tickets")
                        }) : c === "tickets" ? m.jsxs("div", {
                            className: "flex w-full items-center justify-between gap-4",
                            children: [g > 0 ? m.jsx(Ml, {
                                className: "relative flex h-screen w-screen items-end bg-black/10 !px-0 backdrop-blur-sm",
                                open: n && g > 0,
                                onOpenChange: _ => r(_),
                                onClick: () => r(!1),
                                content: m.jsxs(Un.div, {
                                    className: "relative z-50 mx-auto w-full max-w-md overflow-hidden rounded-lg bg-[#141414]",
                                    initial: {
                                        height: 0
                                    },
                                    animate: {
                                        height: n ? "auto" : 0
                                    },
                                    onClick: _ => _.stopPropagation(),
                                    children: [m.jsx("div", {
                                        className: "flex justify-end p-1",
                                        children: m.jsx("button", {
                                            className: "m-1 flex items-center justify-center rounded-full bg-zinc-700 p-2 font-bold text-zinc-400",
                                            onClick: () => r(!1),
                                            "aria-label": "Close Tickets Summary",
                                            children: m.jsx(mr, {
                                                className: "h-3 w-3"
                                            })
                                        })
                                    }), m.jsx("ul", {
                                        className: "h-full max-h-[calc(100vh-260px)] space-y-1 overflow-y-auto px-2 pt-2",
                                        id: "seat-tickets",
                                        children: o.map((_, v) => m.jsx(ml, {
                                            ticket: _
                                        }, v))
                                    }), m.jsx(fl, {
                                        className: "space-y-1 px-2"
                                    })]
                                }),
                                children: m.jsx(le, {
                                    theme: "white",
                                    shape: "text",
                                    className: "h-12 grow bg-white/5 focus:ring-white/20",
                                    children: m.jsxs("div", {
                                        className: "flex w-full items-center justify-around gap-2",
                                        children: [m.jsxs("div", {
                                            children: [m.jsx("p", {
                                                className: "text-xs text-zinc-400",
                                                children: t("experience_booking:tickets_total", {
                                                    count: g
                                                })
                                            }), m.jsx("p", {
                                                className: "text-sm font-semibold",
                                                children: t("experience_booking:price", {
                                                    price: Ue(a.net_after_discount),
                                                    currency: t("experience_booking:SAR")
                                                })
                                            })]
                                        }), m.jsx("svg", {
                                            width: "10",
                                            height: "7",
                                            className: `shrink-0 text-zinc-400 transition ${n?"":"rotate-180"}`,
                                            children: m.jsx("path", {
                                                d: "M9.91148 5.92015L5.30211 0.792139C5.16825 0.643212 4.93098 0.624239 4.77216 0.749759L4.74901 0.769661L0.0892809 5.91931C-0.0450745 6.06785 -0.0255751 6.29039 0.132834 6.41637C0.200789 6.47042 0.287 6.50008 0.376106 6.50008H9.6239C9.83161 6.50008 10 6.34219 10 6.14742C10 6.06425 9.96865 5.98375 9.91148 5.92015Z",
                                                fill: "currentColor"
                                            })
                                        })]
                                    })
                                })
                            }) : m.jsx("p", {
                                className: "text-center text-xs",
                                children: t("experience_booking:select_ticket_continue")
                            }), m.jsx(le, {
                                className: "h-12 grow basis-1/2 gap-0",
                                onClick: () => {
                                    u("summary")
                                },
                                disabled: !g,
                                arrow: !0,
                                children: m.jsx("p", {
                                    className: "font-semibold",
                                    children: t("experience_booking:next")
                                })
                            })]
                        }) : c === "summary" ? m.jsx(le, {
                            className: "h-12 w-full max-w-md py-1 font-semibold",
                            onClick: () => u("checkout"),
                            id: "proceed-to-payment",
                            "data-event-name": i == null ? void 0 : i.name,
                            "data-event-venue": i == null ? void 0 : i.venue_id,
                            arrow: !0,
                            children: t("experience_booking:select_payment")
                        }) : m.jsx(le, {
                            loading: l,
                            theme: "primary",
                            className: "h-12 w-full max-w-md py-1 font-semibold",
                            onClick: () => d(),
                            id: "proceed-to-payment",
                            "data-event-name": i == null ? void 0 : i.name,
                            "data-event-venue": i == null ? void 0 : i.venue_id,
                            disabled: !p,
                            children: a.net_after_discount > 0 ? m.jsxs("div", {
                                className: "flex shrink-0 items-center gap-2",
                                children: [m.jsx(sa, {
                                    className: `h-4 w-4 pb-0.5 ${p?"":"grayscale"}`
                                }), t("experience_booking:proceed"), m.jsx(It, {
                                    originalPrice: a.net_after_discount,
                                    currency: "SAR"
                                })]
                            }) : t("experience_booking:confirm_booking")
                        })
                    })
                })
            })
        })
    },
    Pp = Tp,
    jp = () => {
        const {
            checkoutMode: e
        } = ue(), {
            isTawakkalnaUser: t
        } = ks(), {
            isWebView: n
        } = On(), r = Pl({
            id: "booking-section-ref"
        }), s = x.useMemo(() => {
            let i = r.height || "100%";
            return r.height && (e === "calendar" ? i = r.height - 165 : i = r.height - 195), n && typeof i == "number" && (i = i + 83), t && typeof i == "number" && (i = i - 84), i
        }, [e, r.height, t, n]);
        return m.jsxs("section", {
            className: "container relative flex max-w-screen-2xl grow flex-col gap-4 overflow-hidden px-0 py-0 lg:flex-row lg:overflow-visible lg:px-6 lg:pb-4",
            children: [m.jsxs("div", {
                className: "bg-body-light flex grow flex-col overflow-hidden lg:space-y-1 lg:rounded-lg lg:bg-transparent",
                children: [m.jsx(Sr, {
                    initial: !1,
                    mode: "popLayout",
                    children: m.jsx(dl, {
                        children: m.jsx("div", {
                            id: "booking-section-ref",
                            children: m.jsx("div", {
                                className: "overflow-y-auto lg:!h-auto",
                                style: {
                                    height: s
                                },
                                children: e === "calendar" ? m.jsx(hp, {}) : e === "tickets" ? m.jsx(gp, {}) : m.jsx("div", {
                                    "data-twk": t,
                                    className: "mx-auto w-full max-w-lg pb-8 data-[twk=true]:pb-20 lg:hidden",
                                    children: m.jsx(zo, {})
                                })
                            })
                        })
                    })
                }), m.jsx(Pp, {})]
            }), m.jsx("aside", {
                className: "mx-auto hidden w-full max-w-lg space-y-2 lg:block lg:max-w-md",
                children: m.jsx("div", {
                    className: "bg-body-light rounded-lg",
                    children: m.jsx(zo, {})
                })
            })]
        })
    },
    Mp = jp,
    Ep = e => {
        var t = e,
            {
                text: n,
                className: r = ""
            } = t,
            s = mi(t, ["text", "className"]);
        return m.jsxs(le, q($({
            theme: "transparent",
            shape: "text",
            className: Ot("hover:bg-primary/10 m-1 min-h-[30px] min-w-[36px] shrink-0 items-center gap-1 p-0 text-xs hover:opacity-60 focus:ring-1 ltr:text-left rtl:text-right", r)
        }, s), {
            children: [m.jsx("svg", {
                className: "h-5 w-5 shrink-0 ltr:rotate-180",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: m.jsx("path", {
                    d: "M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z",
                    fill: "currentColor"
                })
            }), m.jsx("span", {
                className: "ltr:pr-2 rtl:pl-2",
                children: n
            })]
        }))
    },
    Rp = Ep,
    Fp = () => {
        const {
            checkoutMode: e,
            selectedSlot: t,
            setCheckoutMode: n,
            clearAll: r,
            bookingType: s
        } = ue(), {
            locale: i,
            i18n: {
                useTranslation: o
            }
        } = J(), {
            t: a
        } = o(["experience_booking"]), u = x.useMemo(() => e === "summary" ? a("experience_booking:change_tickets") : e === "checkout" ? a("experience_booking:booking_summary") : s === "flexible" ? a("experience_booking:flexible_pass") : t ? `${Ve(t.date,`${i}-GB`,{dateStyle:"full"})} - ${t.start_time}` : a("experience_booking:back"), [s, e, i, t, a]);
        return e === "calendar" ? null : m.jsx("section", {
            className: "container max-w-screen-2xl px-0 py-0 lg:px-6",
            children: m.jsx(Rp, {
                text: u,
                onClick: () => {
                    e === "checkout" ? n("summary") : e === "summary" ? (n("tickets"), r()) : (n("calendar"), r())
                }
            })
        })
    },
    Dp = Fp,
    cy = ({
        city: e,
        hySlug: t
    }) => {
        const {
            locale: n
        } = J(), {
            data: r,
            isLoading: s
        } = Td({
            lang: n,
            city: e,
            slug: t
        }, {
            enabled: !!t
        });
        if (s) return m.jsx(G6, {});
        if (!r) throw new Error(`Hy experience not found for ${t}`);
        return m.jsxs(m.Fragment, {
            children: [m.jsx("style", {
                children: `
        @media only screen and (max-width: 1023px){body{overflow: hidden;}
        main{display:flex; flex-direction:column;height:100vh;}
        #root > footer{display:none}
      `
            }), m.jsx(W6, {
                children: m.jsxs(H6, {
                    experience: r,
                    children: [m.jsx(Dp, {}), m.jsx(Mp, {})]
                })
            })]
        })
    };
export {
    wg as $, N as A, Ve as B, lg as C, ry as D, cg as E, og as F, Ue as G, kg as H, vg as I, zp as J, ny as K, Pg as L, Qp as M, _g as N, Cg as O, bg as P, yg as Q, gg as R, pt as S, Wp as T, bi as U, tg as V, O6 as W, eg as X, Xp as Y, ig as Z, Yp as _, Gl as a, ey as a0, Xg as a1, ly as a2, iy as a3, Ad as a4, xg as a5, Tg as a6, ag as a7, fg as a8, pg as a9, Yg as aA, Jg as aB, Zc as aC, jg as aD, Jp as aa, mg as ab, Ig as ac, ng as ad, Zp as ae, Hl as af, hg as ag, Ag as ah, sg as ai, oy as aj, cy as ak, dg as al, Ug as am, Ng as an, Bg as ao, Og as ap, Fg as aq, Dg as ar, Rg as as, Lg as at, ug as au, Mg as av, Eg as aw, sy as ax, ty as ay, Vg as az, tc as b, rg as c, Kg as d, Zl as e, Sr as f, js as g, $g as h, Hg as i, m as j, qg as k, Kl as l, Un as m, Gg as n, zg as o, Qg as p, Wg as q, Hp as r, qp as s, Ot as t, ne as u, gr as v, ql as w, Zg as x, Nn as y, Sg as z
};
//# sourceMappingURL=experiences-909RjQqY.js.map