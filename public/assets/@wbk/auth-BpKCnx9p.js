import {
    M as pe,
    B as U,
    I as q,
    O as Be,
    C as Ve,
    b as We,
    a as Ge,
    T as Ue,
    S as mt
} from "./ui-CXvSo9mp.js";
import {
    d as ht,
    j as e,
    e as _t,
    A as oe,
    C as Ze,
    W as vt,
    t as re,
    f as se,
    m as ne,
    h as pt,
    i as fe,
    E as ft,
    k as He,
    n as xt,
    o as gt,
    p as bt,
    q as Ke,
    v as de,
    g as jt,
    w as yt,
    x as wt,
    y as Ct
} from "../@hy/experiences-909RjQqY.js";
import {
    r as z,
    c as G,
    g as Nt
} from "../vendor-DR5RWKqR.js";
import {
    u as xe,
    F as Lt,
    a as ee,
    C as I
} from "../react-hook-form-4Is_Po-Y.js";
import {
    u as ge
} from "./analytics-B7lR_Cat.js";
import {
    s as be,
    E as Ye
} from "./logger-B2PJ36TD.js";
import {
    b as je,
    d as kt
} from "./hooks-_YU-oIZS.js";
import {
    A as At,
    f as Pt
} from "./svg-__R6E2rp.js";
var Dt = z.createContext(null),
    Je = Dt,
    V = ({
        autoFetch: t
    } = {}) => {
        const s = z.useContext(Je);
        if (!s) throw new Error("useAuth must be used within an AuthProvider, refer to usage instructions: https://github.com/nadude/webook-frontend/blob/main/packages/auth/README.md");
        return z.useEffect(() => {
            t && !s.autoInit && !s.user && s.fetchUser()
        }, [t]), s
    },
    St = Object.defineProperty,
    Ot = Object.defineProperties,
    Tt = Object.getOwnPropertyDescriptors,
    ue = Object.getOwnPropertySymbols,
    Qe = Object.prototype.hasOwnProperty,
    Xe = Object.prototype.propertyIsEnumerable,
    $e = (t, s, a) => s in t ? St(t, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : t[s] = a,
    w = (t, s) => {
        for (var a in s || (s = {})) Qe.call(s, a) && $e(t, a, s[a]);
        if (ue)
            for (var a of ue(s)) Xe.call(s, a) && $e(t, a, s[a]);
        return t
    },
    C = (t, s) => Ot(t, Tt(s)),
    E = (t, s) => {
        var a = {};
        for (var o in t) Qe.call(t, o) && s.indexOf(o) < 0 && (a[o] = t[o]);
        if (t != null && ue)
            for (var o of ue(t)) s.indexOf(o) < 0 && Xe.call(t, o) && (a[o] = t[o]);
        return a
    },
    R = (t, s, a) => new Promise((o, i) => {
        var u = d => {
                try {
                    r(a.next(d))
                } catch (h) {
                    i(h)
                }
            },
            n = d => {
                try {
                    r(a.throw(d))
                } catch (h) {
                    i(h)
                }
            },
            r = d => d.done ? o(d.value) : Promise.resolve(d.value).then(u, n);
        r((a = a.apply(t, s)).next())
    }),
    Mt = ({
        render: t,
        onClosed: s
    }) => {
        const {
            locale: a,
            i18n: {
                useTranslation: o
            }
        } = V(), {
            t: i
        } = o(["auth_common"]), {
            mutateAsync: u,
            isPending: n
        } = ht({
            lang: a
        }), r = d => R(void 0, null, function*() {
            var h, g, v;
            try {
                yield u(), _t("token", (v = (g = (h = oe) == null ? void 0 : h.config) == null ? void 0 : g.cookie) == null ? void 0 : v.domain), d(), s && s()
            } catch {}
        });
        return e.jsx(pe, {
            render: t,
            body: ({
                close: d
            }) => e.jsxs("div", {
                className: "p-4",
                children: [e.jsx("div", {
                    className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-600/30 text-white opacity-50",
                    children: e.jsx("svg", {
                        className: "h-10 w-10",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        children: e.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "1.2",
                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        })
                    })
                }), e.jsx("p", {
                    className: "my-6 text-center text-xl",
                    children: i("auth_common:confirm_logout")
                }), e.jsxs("div", {
                    className: "flex items-baseline justify-evenly gap-4",
                    children: [e.jsx(U, {
                        onClick: d,
                        shape: "outlined",
                        theme: "white",
                        className: "w-full",
                        disabled: n,
                        children: i("auth_common:cancel")
                    }), e.jsx(U, {
                        theme: "error",
                        className: "w-full uppercase",
                        onClick: () => {
                            r(d)
                        },
                        loading: n,
                        children: i("auth_common:logout")
                    })]
                })]
            })
        })
    },
    Ma = Mt,
    et = {},
    ye = {},
    we = {},
    Ce = {};
Object.defineProperty(Ce, "__esModule", {
    value: !0
});

function qt(t, s) {
    if (!t) throw new Error(s)
}
Ce.default = qt;
var Et = G && G.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
};
Object.defineProperty(we, "__esModule", {
    value: !0
});
const ie = Et(Ce);

function Ft(t) {
    ie.default(Array.isArray(t.domains), "domains must be an array"), ie.default(Array.isArray(t.topLevelDomains), "topLevelDomains must be an array"), ie.default(Array.isArray(t.secondLevelDomains), "secondLevelDomains must be an array"), ie.default(typeof t.distanceFunction == "function", "distanceFunction must be a function")
}
we.default = Ft;
var Ne = {},
    Le = {};
Object.defineProperty(Le, "__esModule", {
    value: !0
});

function It(t) {
    return encodeURI(t).replace(/%20/g, " ").replace(/%25/g, "%").replace(/%5E/g, "^").replace(/%60/g, "`").replace(/%7B/g, "{").replace(/%7C/g, "|").replace(/%7D/g, "}")
}
Le.default = It;
var ke = {};
Object.defineProperty(ke, "__esModule", {
    value: !0
});

function Vt(t) {
    const {
        domain: s,
        domains: a,
        distanceFunction: o,
        threshold: i
    } = t;
    let u, n = 1 / 0,
        r = null;
    if (!(!s || !a)) {
        for (let d = 0; d < a.length; d++) {
            if (s === a[d]) return s;
            u = o(s, a[d]), u < n && (n = u, r = a[d])
        }
        if (n <= i && r !== null) return r
    }
}
ke.default = Vt;
var Ae = {},
    Pe = {};
Object.defineProperty(Pe, "__esModule", {
    value: !0
});
const Ut = /\s/;

function $t(t) {
    return t.trim ? t.trim() : zt(Rt(t))
}

function Rt(t) {
    return t.trimLeft ? t.trimLeft() : t.replace(/^\s\s*/, "")
}

function zt(t) {
    if (t.trimRight) return t.trimRight();
    let s = t.length;
    for (; Ut.test(t.charAt(--s)););
    return t.slice(0, s + 1)
}
Pe.default = $t;
var Bt = G && G.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
};
Object.defineProperty(Ae, "__esModule", {
    value: !0
});
const Wt = Bt(Pe),
    Gt = 2;

function Zt(t) {
    const a = Wt.default(t).split("@");
    if (a.length < Gt) return !1;
    for (let r = 0; r < a.length; r++)
        if (a[r] === "") return !1;
    let o = "",
        i = "";
    const u = a.pop(),
        n = u.split(".");
    if (n.length === 0) return !1;
    if (n.length == 1) i = n[0];
    else {
        o = n[0];
        for (let r = 1; r < n.length; r++) i += n[r] + ".";
        i = i.substring(0, i.length - 1)
    }
    return {
        topLevelDomain: i,
        secondLevelDomain: o,
        domain: u,
        address: a.join("@")
    }
}
Ae.default = Zt;
var De = G && G.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
};
Object.defineProperty(Ne, "__esModule", {
    value: !0
});
const Ht = De(Le),
    _e = De(ke),
    Kt = De(Ae);

function Yt(t) {
    const s = Ht.default(t.email.toLowerCase()),
        a = Kt.default(s);
    if (!a) return;
    const {
        domains: o,
        domainThreshold: i,
        distanceFunction: u,
        secondLevelDomains: n,
        topLevelDomains: r
    } = t;
    if (n && r && n.indexOf(a.secondLevelDomain) !== -1 && r.indexOf(a.topLevelDomain) !== -1) return;
    let d = _e.default({
        domain: a.domain,
        domains: o,
        distanceFunction: u,
        threshold: i
    });
    if (d) return d == a.domain ? void 0 : {
        address: a.address,
        domain: d,
        full: a.address + "@" + d
    };
    const h = _e.default({
            domain: a.secondLevelDomain,
            domains: n,
            distanceFunction: u,
            threshold: t.secondLevelThreshold
        }),
        g = _e.default({
            domain: a.topLevelDomain,
            domains: r,
            distanceFunction: u,
            threshold: t.topLevelThreshold
        });
    if (a.domain) {
        d = a.domain;
        let v = !1;
        if (h && h != a.secondLevelDomain && (d = d.replace(a.secondLevelDomain, h), v = !0), g && g != a.topLevelDomain && a.secondLevelDomain !== "" && (d = d.replace(new RegExp(a.topLevelDomain + "$"), g), v = !0), v) return {
            address: a.address,
            domain: d,
            full: a.address + "@" + d
        }
    }
}
Ne.default = Yt;
var Se = {},
    Y = {},
    Oe = {};
Object.defineProperty(Oe, "__esModule", {
    value: !0
});

function Jt(t, s) {
    if (t == null || t.length === 0) return s == null || s.length === 0 ? 0 : s.length;
    if (s == null || s.length === 0) return t.length;
    let a = 0,
        o = 0,
        i = 0,
        u = 0;
    const n = 5;
    for (; a + o < t.length && a + i < s.length;) {
        if (t.charAt(a + o) == s.charAt(a + i)) u++;
        else {
            o = 0, i = 0;
            for (let r = 0; r < n; r++) {
                if (a + r < t.length && t.charAt(a + r) == s.charAt(a)) {
                    o = r;
                    break
                }
                if (a + r < s.length && t.charAt(a) == s.charAt(a + r)) {
                    i = r;
                    break
                }
            }
        }
        a++
    }
    return (t.length + s.length) / 2 - u
}
Oe.default = Jt;
var Qt = G && G.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
};
Object.defineProperty(Y, "__esModule", {
    value: !0
});
Y.POPULAR_TLDS = Y.POPULAR_DOMAINS = Y.DEFAULT_CONFIG = void 0;
const Xt = Qt(Oe),
    tt = ["msn.com", "bellsouth.net", "telus.net", "comcast.net", "optusnet.com.au", "earthlink.net", "qq.com", "sky.com", "icloud.com", "sympatico.ca", "googlemail.com", "att.net", "xtra.co.nz", "web.de", "cox.net", "gmail.com", "ymail.com", "aim.com", "rogers.com", "verizon.net", "rocketmail.com", "optonline.net", "sbcglobal.net", "aol.com", "aim.com", "me.com", "mailw.com", "btinternet.com", "charter.net", "shaw.ca", "hey.com", "proton.me", "pm.com", "protonmail.com", "zoho.com", "yandex.com", "titan.email"];
Y.POPULAR_DOMAINS = tt;
const at = ["com", "com.au", "com.tw", "co", "ca", "co.nz", "co.uk", "de", "fr", "it", "ru", "org", "edu", "gov", "jp", "nl", "kr", "se", "eu", "ie", "co.il", "us", "at", "be", "dk", "hk", "es", "gr", "ch", "no", "cz", "net", "net.au", "info", "biz", "mil", "co.jp", "sg", "hu", "uk", "sk", "ar", "cf", "cl", "cn", "ga", "gq", "ir", "ml", "mx", "nu", "nz", "ph", "pl", "ro", "tk", "tw", "ua", "vg", "ws", "xn", "za", "app", "au", "ai", "biz", "br", "blog", "cloud", "club", "cc", "de", "dev", "digital", "fi", "finance", "id", "in", "io", "me", "mobi", "network", "pw", "so", "xyz", "software", "to", "tech"];
Y.POPULAR_TLDS = at;
const ea = {
    domainThreshold: 2,
    domains: tt,
    secondLevelThreshold: 2,
    secondLevelDomains: ["yahoo", "hotmail", "mail", "live", "outlook"],
    topLevelThreshold: 2,
    topLevelDomains: at,
    distanceFunction: Xt.default
};
Y.DEFAULT_CONFIG = ea;
Object.defineProperty(Se, "__esModule", {
    value: !0
});
const Q = Y;

function ta(t) {
    return {
        email: t.email,
        domains: t.domains || Q.DEFAULT_CONFIG.domains,
        topLevelDomains: t.topLevelDomains || Q.DEFAULT_CONFIG.topLevelDomains,
        secondLevelDomains: t.secondLevelDomains || Q.DEFAULT_CONFIG.secondLevelDomains,
        distanceFunction: t.distanceFunction || Q.DEFAULT_CONFIG.distanceFunction,
        domainThreshold: t.domainThreshold || Q.DEFAULT_CONFIG.domainThreshold,
        secondLevelThreshold: t.secondLevelThreshold || Q.DEFAULT_CONFIG.secondLevelThreshold,
        topLevelThreshold: t.topLevelThreshold || Q.DEFAULT_CONFIG.topLevelThreshold,
        suggested: t.suggested || void 0,
        empty: t.suggested || void 0
    }
}
Se.default = ta;
var Te = G && G.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
};
Object.defineProperty(ye, "__esModule", {
    value: !0
});
const aa = Te(we),
    sa = Te(Ne),
    na = Te(Se);

function oa(t) {
    const s = na.default(t);
    aa.default(s || {});
    const a = sa.default(s);
    return !a && t.empty && t.empty(), a && t.suggested && t.suggested(a), a
}
ye.default = oa;
(function(t) {
    var s = G && G.__importDefault || function(u) {
        return u && u.__esModule ? u : {
            default: u
        }
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.POPULAR_TLDS = t.POPULAR_DOMAINS = t.run = void 0;
    const a = s(ye);
    t.run = a.default;
    const o = Y;
    Object.defineProperty(t, "POPULAR_DOMAINS", {
        enumerable: !0,
        get: function() {
            return o.POPULAR_DOMAINS
        }
    }), Object.defineProperty(t, "POPULAR_TLDS", {
        enumerable: !0,
        get: function() {
            return o.POPULAR_TLDS
        }
    });
    const i = {
        run: a.default,
        POPULAR_DOMAINS: o.POPULAR_DOMAINS,
        POPULAR_TLDS: o.POPULAR_TLDS
    };
    t.default = i
})(et);
const ve = Nt(et);
var ra = ({
        email: t
    }) => z.useMemo(() => {
        if (t) return ve.run({
            email: t,
            domains: [...ve.POPULAR_DOMAINS, "uxbert.com", "supertech.sa", "gov.sa", "edu.sa", "com.sa", "sdaia.gov.sa", "moi.gov.sa", "mcit.gov.sa", "mofa.gov.sa", "mc.gov.sa", "mep.gov.sa", "hrsd.gov.sa", "moj.gov.sa", "mewa.gov.sa", "mof.gov.sa", "hotmail.com"],
            topLevelDomains: [...ve.POPULAR_TLDS, "sa", "com.sa", "gov.sa"]
        })
    }, [t]),
    la = t => {
        var s = t,
            {
                text: a,
                className: o = ""
            } = s,
            i = E(s, ["text", "className"]);
        const {
            i18n: {
                useTranslation: u
            }
        } = V(), {
            t: n
        } = u(["auth_common"]);
        return e.jsxs(U, C(w({
            theme: "transparent",
            shape: "text",
            className: re("hover:bg-primary/10 -mx-1 mb-2 flex min-h-[30px] min-w-[36px] shrink-0 items-center gap-2 !px-1 py-1 text-sm hover:opacity-60 focus:ring-1", o)
        }, i), {
            children: [e.jsx("svg", {
                className: "h-6 w-6 shrink-0 ltr:rotate-180",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: e.jsx("path", {
                    d: "M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z",
                    fill: "currentColor"
                })
            }), e.jsx("span", {
                className: "ltr:pr-2 rtl:pl-2",
                children: a || n("auth_common:back")
            })]
        }))
    },
    X = la,
    ia = ({
        onSuccess: t
    }) => {
        const {
            watch: s,
            control: a,
            formState: {
                errors: o
            },
            handleSubmit: i,
            setValue: u
        } = ee(), {
            isNewUser: n,
            locale: r,
            setAccessToken: d,
            i18n: {
                useTranslation: h
            }
        } = V(), {
            t: g
        } = h(["auth_common", "auth_validation"]), {
            mutateAsync: v,
            isPending: L,
            error: D
        } = pt({
            lang: r
        }), {
            mutateAsync: A,
            isPending: O,
            error: f
        } = fe(), {
            loginEvent: j
        } = ge(), x = s("mode"), _ = L || O, N = (D == null ? void 0 : D.message) || (f == null ? void 0 : f.message), p = c => R(void 0, null, function*() {
            var l, m, b, k, P, M, B;
            try {
                const W = {
                    email: ((l = c == null ? void 0 : c.email) == null ? void 0 : l.trim()) || "",
                    locale: r
                };
                if (x === "reset-email") yield A(W), u("mode", "reset-otp");
                else {
                    const y = yield v(C(w({}, W), {
                        password: c.password
                    }));
                    if ((m = y == null ? void 0 : y.user) != null && m.force_verify_email) {
                        d(((b = y == null ? void 0 : y.user) == null ? void 0 : b.access_token) || ""), yield A(C(w({}, W), {
                            checkout_verify: !0
                        })), u("mode", "otp");
                        return
                    }
                    if (de({
                            name: "token",
                            value: ((k = y == null ? void 0 : y.user) == null ? void 0 : k.access_token) || "",
                            expiration: 7,
                            domain: (B = (M = (P = oe) == null ? void 0 : P.config) == null ? void 0 : M.cookie) == null ? void 0 : B.domain
                        }), n) {
                        u("email", y.user.email), u("mode", "update-profile");
                        return
                    }
                    t && t(y.user), j({
                        method: "email",
                        user: y.user
                    }), be(y.user)
                }
            } catch {}
        });
        return e.jsxs("form", {
            onSubmit: i(p),
            id: "email-login",
            name: "email-login-form",
            className: "",
            children: [e.jsx(I, {
                control: a,
                name: "email",
                rules: {
                    required: g("auth_validation:required"),
                    pattern: {
                        value: ft,
                        message: g("auth_validation:invalid_email")
                    }
                },
                defaultValue: "",
                render: c => {
                    var {
                        field: l
                    } = c, m = l, {
                        onChange: b
                    } = m, k = E(m, ["onChange"]), P;
                    return e.jsx(q, C(w({}, k), {
                        type: "email",
                        label: e.jsx("span", {
                            className: "font-semibold",
                            children: g("auth_common:email")
                        }),
                        placeholder: "you@email.com",
                        onChange: M => {
                            b(M)
                        },
                        error: (P = o.email) == null ? void 0 : P.message
                    }))
                }
            }), e.jsx("div", {
                className: "h-4"
            }), e.jsx(se, {
                initial: !1,
                children: x !== "reset-email" && e.jsxs(ne.div, {
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
                    children: [e.jsx(I, {
                        control: a,
                        name: "password",
                        rules: {
                            required: g("auth_validation:required")
                        },
                        defaultValue: "",
                        render: c => {
                            var {
                                field: l
                            } = c, m = l, {
                                onChange: b
                            } = m, k = E(m, ["onChange"]), P;
                            return e.jsx(q, C(w({}, k), {
                                id: "password",
                                type: "password",
                                label: g("auth_common:password"),
                                onChange: M => {
                                    b(M)
                                },
                                error: (P = o.password) == null ? void 0 : P.message,
                                hideErrorSpace: !0
                            }))
                        }
                    }, "login-password"), e.jsx("div", {
                        className: "flex justify-end text-sm",
                        children: e.jsx(U, {
                            className: "hover:!text-primary my-4 flex justify-end !p-0.5 !text-blue-500 underline-offset-2 !ring-0 hover:underline",
                            theme: "transparent",
                            shape: "text",
                            type: "button",
                            onClick: () => {
                                u("password", ""), u("mode", "reset-email")
                            },
                            children: g("auth_common:reset_password_question")
                        })
                    })]
                })
            }), e.jsx("div", {
                className: "text-center",
                id: "v2-captcha-section"
            }), !!N && e.jsx("p", {
                className: "text-error pb-2 text-center text-sm",
                children: N
            }), e.jsx(U, {
                type: "submit",
                form: "email-login",
                className: "mt-4 w-full",
                loading: _,
                id: "email-login-button",
                shape: "solid",
                children: e.jsx("span", {
                    className: "text-xl font-bold",
                    children: g(x === "reset-email" ? "auth_common:send_otp" : "auth_common:login")
                })
            }), e.jsx(se, {
                initial: !1,
                children: x !== "reset-email" && e.jsxs(ne.div, {
                    className: "overflow-hidden text-center",
                    initial: {
                        height: 0
                    },
                    animate: {
                        height: "auto"
                    },
                    exit: {
                        height: 0
                    },
                    children: [e.jsx("hr", {
                        className: "border-body-lighter mb-4 mt-6"
                    }), e.jsx("p", {
                        className: "text-sm",
                        children: g("auth_common:dont_have_account")
                    }), e.jsx(U, {
                        className: "mt-3 w-full max-w-[200px] !py-1",
                        theme: "white",
                        shape: "outlined",
                        type: "button",
                        onClick: () => u("mode", "signup"),
                        children: g("auth_common:signup")
                    })]
                })
            })]
        })
    },
    da = ia,
    ua = ({
        render: t,
        seconds: s
    }) => {
        const {
            count: a,
            reset: o,
            set: i
        } = kt({
            id: "withcount-down",
            initialSeconds: s
        });
        return t({
            count: a,
            reset: o,
            set: i
        })
    },
    st = ua,
    ca = () => {
        const {
            getValues: t,
            setValue: s,
            watch: a
        } = ee(), {
            accessToken: o,
            setAccessToken: i,
            locale: u,
            i18n: {
                useTranslation: n
            }
        } = V(), {
            mutateAsync: r,
            isPending: d,
            error: h
        } = He({
            lang: u
        }), {
            mutateAsync: g,
            isPending: v,
            error: L
        } = fe(), {
            mutateAsync: D,
            isPending: A,
            error: O
        } = xt(), f = d || v || A, j = (h == null ? void 0 : h.message) || (L == null ? void 0 : L.message) || (O == null ? void 0 : O.message), {
            t: x
        } = n(["auth_common"]), _ = a("otp"), N = a("mode"), p = l => R(void 0, null, function*() {
            var m, b, k, P, M, B;
            try {
                const $ = {
                    email: t("email"),
                    otp: l,
                    locale: u
                };
                if (N === "reset-otp") yield r(C(w({}, $), {
                    verify_otp: !0
                })), s("mode", "reset-password");
                else {
                    const W = yield r(C(w({}, $), {
                        otp: l
                    }));
                    if (W != null && W.user) {
                        const y = C(w({}, W.user), {
                            new_user: W.new_user || !1
                        });
                        de({
                            name: "token",
                            value: (y == null ? void 0 : y.access_token) || "",
                            expiration: 7,
                            domain: (k = (b = (m = oe) == null ? void 0 : m.config) == null ? void 0 : b.cookie) == null ? void 0 : k.domain
                        })
                    }
                    o && (de({
                        name: "token",
                        value: o,
                        expiration: 7,
                        domain: (B = (M = (P = oe) == null ? void 0 : P.config) == null ? void 0 : M.cookie) == null ? void 0 : B.domain
                    }), i(""))
                }
            } catch ($) {
                console.log($)
            }
        }), c = () => R(void 0, null, function*() {
            try {
                const l = {
                    email: t("email"),
                    resend: !0,
                    locale: u
                };
                N === "reset-otp" ? yield g(l): yield D(l)
            } catch {}
        });
        return e.jsxs("div", {
            className: "",
            children: [e.jsx("div", {
                className: "text-center text-2xl font-bold",
                children: x("auth_common:verify_your_email_address")
            }), e.jsx(Be, {
                formId: "otp-verify",
                legend: e.jsx("p", {
                    className: "px-2 py-4 text-center text-sm text-zinc-500",
                    children: x("auth_common:enter_the_otp", {
                        email: t("email")
                    })
                }),
                onChange: l => {
                    s("otp", l)
                },
                onSubmit: p,
                onlyNumbers: !0,
                disabled: f,
                error: j,
                renderButton: ({
                    resetState: l
                }) => e.jsxs("div", {
                    className: "mt-6 text-center text-sm",
                    children: [e.jsx(st, {
                        seconds: 60,
                        render: ({
                            count: m,
                            reset: b
                        }) => e.jsxs("div", {
                            className: "flex items-center justify-center gap-2",
                            children: [e.jsx("p", {
                                className: "mx-1 font-medium text-zinc-500",
                                children: x("auth_common:didnt_receive_it")
                            }), e.jsx(U, {
                                type: "button",
                                shape: "text",
                                className: "px-2 py-1 text-sm",
                                disabled: m > 0,
                                loading: f,
                                onClick: () => R(void 0, null, function*() {
                                    try {
                                        yield c(), b(), l()
                                    } catch {}
                                }),
                                id: "resend-otp",
                                children: `${x("auth_common:resend_otp")} ${m>0?`(${m})`:""}`
                            })]
                        })
                    }), e.jsx("div", {
                        className: "p-4",
                        children: e.jsx(U, {
                            type: "submit",
                            form: "otp-verify",
                            disabled: (_ == null ? void 0 : _.length) !== 4,
                            loading: f,
                            className: "mt-6 w-full",
                            id: "verify-otp",
                            children: e.jsx("span", {
                                className: "text-xl font-bold",
                                children: x(N === "reset-otp" ? "auth_common:reset_password" : "auth_common:verify")
                            })
                        })
                    })]
                })
            })]
        })
    },
    ma = ca,
    ha = ({
        password: t = "",
        error: s
    }) => {
        const {
            i18n: {
                useTranslation: a
            }
        } = V(), {
            t: o
        } = a(["auth_validation"]), i = (t == null ? void 0 : t.trim().length) >= 8;
        return e.jsx("ul", {
            className: "mb-4 space-y-1 text-sm",
            children: e.jsxs("li", {
                className: `flex items-start gap-1 ${i?"text-primary-success":s?"text-primary-red":""}`,
                children: [i ? e.jsx("svg", {
                    className: "text-success h-6 w-6 shrink-0",
                    viewBox: "0 0 28 28",
                    children: e.jsx("path", {
                        d: "M13.9561 22.5928C14.1143 22.5928 14.3428 22.5312 14.5713 22.417C19.6074 19.8242 21.2773 18.4619 21.2773 15.3066V8.77637C21.2773 7.73926 20.873 7.36133 20.0029 7.00098C19.0361 6.59668 15.8193 5.46289 14.8789 5.14648C14.5889 5.05859 14.2637 4.99707 13.9561 4.99707C13.6572 4.99707 13.332 5.05859 13.042 5.14648C12.0928 5.44531 8.87598 6.60547 7.91797 7.00098C7.04785 7.35254 6.64355 7.73926 6.64355 8.77637V15.3066C6.64355 18.4619 8.38379 19.7012 13.3496 22.417C13.5781 22.54 13.8066 22.5928 13.9561 22.5928ZM12.9805 17.7412C12.6465 17.7412 12.374 17.6006 12.1279 17.2842L9.97461 14.6738C9.81641 14.4717 9.7373 14.2607 9.7373 14.041C9.7373 13.584 10.0977 13.2148 10.5459 13.2148C10.8271 13.2148 11.0381 13.3203 11.2666 13.6016L12.9541 15.7373L16.5752 9.94531C16.7686 9.6377 17.0146 9.47949 17.2959 9.47949C17.7354 9.47949 18.1484 9.78711 18.1484 10.2529C18.1484 10.4551 18.043 10.6748 17.9199 10.877L13.7979 17.2754C13.5957 17.583 13.3145 17.7412 12.9805 17.7412Z",
                        fill: "currentColor"
                    })
                }) : e.jsx("svg", {
                    className: "text-error h-6 w-6 shrink-0",
                    viewBox: "0 0 28 28",
                    children: e.jsx("path", {
                        d: "M13.9561 22.5928C14.1143 22.5928 14.3428 22.5312 14.5713 22.417C19.6074 19.8242 21.2773 18.4619 21.2773 15.3066V8.77637C21.2773 7.73926 20.873 7.36133 20.0029 7.00098C19.0361 6.59668 15.8193 5.46289 14.8789 5.14648C14.5889 5.05859 14.2637 4.99707 13.9561 4.99707C13.6572 4.99707 13.332 5.05859 13.042 5.14648C12.0928 5.44531 8.87598 6.60547 7.91797 7.00098C7.04785 7.35254 6.64355 7.73926 6.64355 8.77637V15.3066C6.64355 18.4619 8.38379 19.7012 13.3496 22.417C13.5781 22.54 13.8066 22.5928 13.9561 22.5928ZM10.9678 17.2402C10.502 17.2402 10.1328 16.8623 10.1328 16.3965C10.1328 16.1768 10.2207 15.9658 10.3877 15.8076L12.7783 13.417L10.3877 11.0176C10.2207 10.8594 10.1328 10.6572 10.1328 10.4375C10.1328 9.96289 10.502 9.60254 10.9678 9.60254C11.2139 9.60254 11.4072 9.68164 11.5654 9.84863L13.9648 12.2393L16.373 9.83984C16.5488 9.66406 16.7334 9.59375 16.9707 9.59375C17.4365 9.59375 17.8057 9.9541 17.8057 10.4199C17.8057 10.6484 17.7178 10.8418 17.5508 11.0088L15.1602 13.417L17.5508 15.7988C17.709 15.9658 17.7969 16.168 17.7969 16.3965C17.7969 16.8623 17.4277 17.2402 16.9531 17.2402C16.7158 17.2402 16.5137 17.1436 16.3467 16.9941L13.9648 14.6035L11.583 16.9941C11.4248 17.1523 11.2139 17.2402 10.9678 17.2402Z",
                        fill: "currentColor"
                    })
                }), e.jsx("span", {
                    children: o("auth_validation:password_validation")
                })]
            })
        })
    },
    nt = ha,
    _a = () => {
        const {
            setValue: t,
            control: s,
            handleSubmit: a,
            formState: {
                errors: o,
                isValid: i
            },
            watch: u,
            getFieldState: n
        } = ee(), {
            mutateAsync: r,
            isPending: d,
            error: h
        } = gt(), {
            locale: g,
            i18n: {
                useTranslation: v
            }
        } = V(), {
            t: L
        } = v(["auth_common", "auth_validation"]), D = u("new_password"), A = n("new_password"), O = f => R(void 0, [f], function*({
            new_password: j,
            confirm_password: x,
            otp: _,
            email: N
        }) {
            try {
                yield r({
                    email: N,
                    new_password: j,
                    retype_password: x,
                    verification_code: _,
                    lang: g
                }), t("mode", "reset-password-success"), t("password", ""), t("new_password", ""), t("confirm_password", "")
            } catch {}
        });
        return e.jsxs("form", {
            id: "reset-password-form",
            onSubmit: a(O),
            children: [e.jsx(I, {
                control: s,
                name: "new_password",
                rules: {
                    required: L("auth_validation:required"),
                    minLength: {
                        value: 8,
                        message: L("auth_validation:invalid_password")
                    }
                },
                defaultValue: "",
                render: f => {
                    var {
                        field: j
                    } = f, x = j, {
                        onChange: _
                    } = x, N = E(x, ["onChange"]), p;
                    return e.jsx(q, C(w({}, N), {
                        type: "password",
                        label: L("auth_common:new_password"),
                        onChange: c => {
                            _(c)
                        },
                        error: (p = o.new_password) == null ? void 0 : p.message
                    }))
                }
            }), e.jsx("div", {
                className: "mt-2",
                children: e.jsx(nt, {
                    password: D || ""
                })
            }), e.jsx(se, {
                children: A.isDirty && !A.invalid && e.jsx(ne.div, {
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
                    children: e.jsx(I, {
                        control: s,
                        name: "confirm_password",
                        rules: {
                            required: L("auth_validation:required"),
                            validate: f => f === D || L("auth_validation:passwords_not_match")
                        },
                        defaultValue: "",
                        render: f => {
                            var {
                                field: j
                            } = f, x = j, {
                                onChange: _
                            } = x, N = E(x, ["onChange"]), p;
                            return e.jsx(q, C(w({}, N), {
                                autoComplete: "off",
                                type: "password",
                                label: L("auth_common:confirm_password"),
                                onChange: c => {
                                    _(c)
                                },
                                onPaste: c => {
                                    c.preventDefault()
                                },
                                error: (p = o.confirm_password) == null ? void 0 : p.message
                            }))
                        }
                    })
                })
            }), (h == null ? void 0 : h.message) && e.jsx("p", {
                className: "text-error text-center text-sm",
                children: h.message
            }), e.jsx(U, {
                type: "submit",
                form: "reset-password-form",
                className: "mt-4 w-full",
                loading: d,
                disabled: !i,
                id: "reset-password-form-button",
                children: e.jsx("span", {
                    className: "text-xl font-bold",
                    children: L("auth_common:update_password")
                })
            })]
        })
    },
    va = _a,
    pa = () => {
        const {
            i18n: {
                useTranslation: t
            }
        } = V(), {
            setValue: s
        } = ee(), {
            t: a
        } = t(["auth_common"]);
        return e.jsxs("div", {
            className: "text-center",
            children: [e.jsx(Pt, {
                className: "text-success mx-auto h-60 w-60"
            }), e.jsx("h2", {
                className: "pb-1",
                children: a("auth_common:password_updated")
            }), e.jsx(U, {
                className: "mt-8 w-full",
                onClick: () => {
                    s("mode", "email")
                },
                children: e.jsx("span", {
                    className: "text-xl font-bold",
                    children: a("auth_common:login")
                })
            })]
        })
    },
    fa = pa,
    xa = ({
        onSubmit: t
    }) => {
        var s, a, o;
        const {
            locale: i,
            i18n: {
                useTranslation: u
            }
        } = V(), {
            control: n,
            setValue: r,
            handleSubmit: d,
            formState: {
                errors: h
            },
            watch: g
        } = ee(), {
            t: v
        } = u(["auth_common", "auth_validation"]), L = g("email"), D = g("password"), A = g("selected_country"), O = g("error"), f = ra({
            email: L
        });
        return e.jsxs("form", {
            id: "signup-form-info",
            className: "space-y-4",
            onSubmit: d(t),
            noValidate: !0,
            children: [e.jsxs("div", {
                className: "mt-1 flex flex-col-reverse items-center justify-between gap-4 sm:flex-row",
                children: [e.jsxs("div", {
                    className: "grow space-y-2",
                    children: [e.jsx("h4", {
                        className: "text-2xl",
                        children: v("auth_common:welcome")
                    }), e.jsx("p", {
                        className: "text-sm text-zinc-500",
                        children: v("auth_common:welcome_text")
                    })]
                }), e.jsx("div", {
                    className: "bg-body-lighter/50 flex h-20 w-20 max-w-[100px] shrink-0 items-center justify-center rounded-full sm:max-w-none",
                    children: e.jsxs("svg", {
                        width: "50",
                        height: "50",
                        viewBox: "0 0 50 50",
                        children: [e.jsx("path", {
                            d: "M24.9984 22.9281C20.4144 22.9281 16.6984 19.2121 16.6984 14.6281C16.6984 10.0442 20.4144 6.32812 24.9984 6.32812C29.5823 6.32812 33.2984 10.0442 33.2984 14.6281C33.2984 19.2121 29.5823 22.9281 24.9984 22.9281Z",
                            fill: "#A1A1AA"
                        }), e.jsx("path", {
                            d: "M6.32472 42.0165C7.129 32.1131 15.1668 27.0781 24.9638 27.0781C34.8986 27.0781 43.061 31.8365 43.669 42.0181C43.6933 42.4237 43.669 43.6781 42.1103 43.6781C34.4212 43.6781 22.9954 43.6781 7.83293 43.6781C7.31254 43.6781 6.28091 42.5559 6.32472 42.0165Z",
                            fill: "#A1A1AA"
                        })]
                    })
                })]
            }), e.jsxs("fieldset", {
                className: "flex flex-col gap-2 py-1 sm:flex-row",
                children: [e.jsx("div", {
                    className: "grow",
                    children: e.jsx(I, {
                        control: n,
                        name: "first_name",
                        rules: {
                            required: v("auth_validation:required"),
                            maxLength: {
                                value: 25,
                                message: v("auth_validation:max_length", {
                                    max: 25
                                })
                            }
                        },
                        defaultValue: "",
                        render: j => {
                            var {
                                field: x
                            } = j, _ = x, {
                                onChange: N
                            } = _, p = E(_, ["onChange"]), c;
                            return e.jsx(q, C(w({
                                id: "first_name",
                                autoComplete: "off",
                                label: v("auth_common:first_name")
                            }, p), {
                                onChange: l => {
                                    N(l)
                                },
                                error: (c = h.first_name) == null ? void 0 : c.message
                            }))
                        }
                    })
                }), e.jsx("div", {
                    className: "grow",
                    children: e.jsx(I, {
                        control: n,
                        name: "last_name",
                        rules: {
                            required: v("auth_validation:required"),
                            maxLength: {
                                value: 25,
                                message: v("auth_validation:max_length", {
                                    max: 25
                                })
                            }
                        },
                        defaultValue: "",
                        render: j => {
                            var {
                                field: x
                            } = j, _ = x, {
                                onChange: N
                            } = _, p = E(_, ["onChange"]), c;
                            return e.jsx(q, C(w({
                                id: "last_name",
                                autoComplete: "off",
                                label: v("auth_common:last_name")
                            }, p), {
                                onChange: l => {
                                    N(l)
                                },
                                error: (c = h.last_name) == null ? void 0 : c.message
                            }))
                        }
                    })
                })]
            }), e.jsxs("fieldset", {
                className: "my-4",
                children: [e.jsxs("div", {
                    className: "relative",
                    children: [e.jsx(I, {
                        control: n,
                        name: "email",
                        rules: {
                            required: v("auth_validation:required")
                        },
                        defaultValue: "",
                        render: j => {
                            var {
                                field: x
                            } = j, _ = x, {
                                onChange: N
                            } = _, p = E(_, ["onChange"]), c, l, m;
                            return e.jsx(q, C(w({
                                id: "email",
                                autoComplete: "off",
                                label: v("auth_common:email")
                            }, p), {
                                onChange: b => {
                                    N(b)
                                },
                                error: ((c = h.email) == null ? void 0 : c.message) || ((m = (l = O == null ? void 0 : O.error) == null ? void 0 : l.email) == null ? void 0 : m[0])
                            }))
                        }
                    }), e.jsx("p", {
                        className: "pt-0.5 text-sm text-gray-400",
                        children: v("auth_validation:email_warning")
                    }), f && e.jsxs("div", {
                        className: `absolute w-full rounded-lg bg-yellow-100 p-2 text-sm text-gray-800 ${(s=h.email)!=null&&s.message||(o=(a=O==null?void 0:O.error)==null?void 0:a.email)!=null&&o[0]?"bottom-0":"-bottom-4"}`,
                        children: [v("auth_validation:did_you_mean"), e.jsx("button", {
                            onClick: () => r("email", f.full, {
                                shouldValidate: !0
                            }),
                            className: "text-primary mx-1 cursor-pointer font-semibold hover:underline",
                            children: f.full
                        })]
                    })]
                }), e.jsx("div", {
                    className: "mt-4",
                    children: e.jsx(I, {
                        control: n,
                        name: "confirm_email",
                        rules: {
                            required: v("auth_validation:required"),
                            validate: j => j === L || v("auth_validation:emails_not_match")
                        },
                        defaultValue: "",
                        render: j => {
                            var {
                                field: x
                            } = j, _ = x, {
                                onChange: N
                            } = _, p = E(_, ["onChange"]), c;
                            return e.jsx(q, C(w({
                                id: "confirm_email",
                                autoComplete: "off",
                                label: v("auth_common:confirm_email")
                            }, p), {
                                onChange: l => {
                                    N(l)
                                },
                                onPaste: l => {
                                    l.preventDefault()
                                },
                                error: (c = h.confirm_email) == null ? void 0 : c.message
                            }))
                        }
                    })
                })]
            }), e.jsxs("fieldset", {
                children: [e.jsx(I, {
                    control: n,
                    name: "password",
                    rules: {
                        required: v("auth_validation:required"),
                        minLength: {
                            value: 8,
                            message: v("auth_validation:invalid_password")
                        }
                    },
                    defaultValue: "",
                    render: j => {
                        var {
                            field: x
                        } = j, _ = x, {
                            onChange: N
                        } = _, p = E(_, ["onChange"]), c, l, m;
                        return e.jsx(q, C(w({}, p), {
                            type: "password",
                            label: v("auth_common:password"),
                            autoComplete: "off",
                            onChange: b => {
                                N(b)
                            },
                            error: ((c = h.password) == null ? void 0 : c.message) || ((m = (l = O == null ? void 0 : O.error) == null ? void 0 : l.password) == null ? void 0 : m[0])
                        }))
                    }
                }), e.jsx("div", {
                    className: "mt-2",
                    children: e.jsx(nt, {
                        password: D || ""
                    })
                })]
            }), e.jsx(I, {
                name: "phone",
                control: n,
                rules: {
                    required: v("auth_validation:required"),
                    validate: j => {
                        var x, _, N;
                        const p = (x = A == null ? void 0 : A.mobile_starts_with) == null ? void 0 : x.length;
                        if (j.includes(" ")) return v("auth_validation:invalid_mobile");
                        if (p) {
                            const c = (_ = A == null ? void 0 : A.mobile_starts_with) == null ? void 0 : _.some(m => j.startsWith(m)),
                                l = j.length >= Number((N = A == null ? void 0 : A.phone_number_lengths) == null ? void 0 : N[0]);
                            return c && l || v("auth_validation:invalid_mobile")
                        }
                    }
                },
                render: j => {
                    var {
                        field: x
                    } = j, _ = x, {
                        value: N
                    } = _, p = E(_, ["value"]), c, l, m, b, k;
                    return e.jsx(We, C(w({
                        lang: i,
                        label: v("auth_common:mobile")
                    }, p), {
                        country: A,
                        mobile: N || "",
                        onChange: (P, M) => {
                            r(P === "country" ? "selected_country" : "phone", M)
                        },
                        error: ((c = h == null ? void 0 : h.phone) == null ? void 0 : c.message) || ((m = (l = O == null ? void 0 : O.error) == null ? void 0 : l.phone) == null ? void 0 : m[0]),
                        placeholder: A ? `${((b=A==null?void 0:A.mobile_starts_with)==null?void 0:b[0])||""}${"x".repeat((((k=A.phone_number_lengths)==null?void 0:k[0])||7)-1)}` : ""
                    }))
                }
            })]
        })
    },
    ga = xa,
    ba = ({
        onSuccess: t
    }) => {
        var s, a;
        const {
            locale: o,
            i18n: {
                useTranslation: i,
                Trans: u
            }
        } = V(), {
            mutateAsync: n,
            isPending: r,
            error: d
        } = bt({
            lang: o
        }), {
            setValue: h,
            watch: g,
            reset: v,
            control: L,
            formState: {
                errors: D
            }
        } = ee(), {
            t: A
        } = i(["auth_common", "auth_validation", "auth_error"]), {
            signupEvent: O
        } = ge(), f = d, j = ((s = f == null ? void 0 : f.error) == null ? void 0 : s.user) || ((a = f == null ? void 0 : f.error) == null ? void 0 : a.message) || (f == null ? void 0 : f.message) || A("auth_error:unknown_error"), x = g("step") || "info", _ = z.useMemo(() => {
            let p = {
                step: 1,
                text: "back_to_login",
                prevStep: "info"
            };
            switch (x) {
                case "password":
                    p = {
                        step: 2,
                        text: "back",
                        prevStep: "info"
                    };
                    break
            }
            return p
        }, [x]), N = p => R(void 0, null, function*() {
            var c, l, m;
            try {
                const b = p,
                    {
                        selected_country: k,
                        newsletterAgree: P
                    } = b,
                    M = E(b, ["selected_country", "newsletterAgree"]),
                    B = jt("referral_key"),
                    $ = C(w({}, M), {
                        newsletter: P,
                        country_code: k == null ? void 0 : k.dial_code,
                        country: k == null ? void 0 : k.code,
                        referral_key: B
                    }),
                    W = yield n({
                        user: $,
                        locale: o
                    }), y = C(w({}, W || {}), {
                        new_user: !1
                    });
                de({
                    name: "token",
                    value: (y == null ? void 0 : y.access_token) || "",
                    expiration: 7,
                    domain: (m = (l = (c = oe) == null ? void 0 : c.config) == null ? void 0 : l.cookie) == null ? void 0 : m.domain
                }), be(y), t && t(y), O({
                    method: "email",
                    user: y
                })
            } catch (b) {
                b instanceof Ye && h("error", b)
            }
        });
        return e.jsxs("div", {
            className: "overflow-y-visible",
            id: "signup-wrapper",
            children: [e.jsx("div", {
                className: "relative",
                children: e.jsx("div", {
                    className: "flex items-center justify-between",
                    children: e.jsx(X, {
                        className: "mb-2 text-base font-medium uppercase",
                        onClick: () => {
                            if (x === "info") return h("mode", "email");
                            h("step", _.prevStep), v()
                        },
                        text: A(`auth_common:${_.text}`)
                    })
                })
            }), e.jsx(se, {
                initial: !1,
                presenceAffectsLayout: !0,
                mode: "wait",
                children: e.jsx(ne.div, {
                    className: "relative z-50 min-h-[250px]",
                    initial: {
                        x: o != null && o.startsWith("ar") ? "100%" : "-100%",
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    exit: {
                        x: o != null && o.startsWith("ar") ? "-100%" : "100%",
                        opacity: 0
                    },
                    transition: {
                        duration: .2
                    },
                    children: e.jsx(ga, {
                        onSubmit: N
                    })
                }, `${x}-${o}`)
            }), e.jsxs("div", {
                className: "mt-8 space-y-2",
                children: [d && j && e.jsx("div", {
                    className: "text-error pb-2 text-center text-sm",
                    children: j != null && j.includes("exists") ? e.jsxs(u, {
                        i18nKey: "account_exists",
                        ns: "auth_common",
                        children: [e.jsx("button", {
                            className: "text-primary hover:underline",
                            "aria-label": "Login",
                            type: "button",
                            onClick: () => h("mode", "email")
                        }), e.jsx("button", {
                            className: "text-primary hover:underline",
                            "aria-label": "Reset Password",
                            type: "button",
                            onClick: () => h("mode", "reset-email")
                        })]
                    }) : e.jsx("p", {
                        children: j
                    })
                }), e.jsx(I, {
                    name: "agreeTerms",
                    control: L,
                    rules: {
                        required: A("auth_validation:required")
                    },
                    defaultValue: !1,
                    render: p => {
                        var {
                            field: c
                        } = p, l = c, {
                            onChange: m,
                            value: b
                        } = l, k = E(l, ["onChange", "value"]), P;
                        return e.jsx(Ve, C(w({}, k), {
                            label: e.jsx("span", {
                                className: "text-sm",
                                children: e.jsx(u, {
                                    i18nKey: "agree",
                                    ns: "auth_common",
                                    children: e.jsx("a", {
                                        className: "text-primary font-semibold underline",
                                        href: `/${o}/terms`,
                                        children: A("auth_common:agree")
                                    })
                                })
                            }),
                            checked: b,
                            onChange: M => m(M),
                            error: (P = D.agreeTerms) == null ? void 0 : P.message
                        }))
                    }
                }), e.jsx(I, {
                    name: "newsletterAgree",
                    control: L,
                    defaultValue: !0,
                    render: p => {
                        var {
                            field: c
                        } = p, l = c, {
                            onChange: m,
                            value: b
                        } = l, k = E(l, ["onChange", "value"]), P;
                        return e.jsx(Ve, C(w({}, k), {
                            label: e.jsx("span", {
                                className: "text-sm",
                                children: e.jsx(u, {
                                    i18nKey: "newsletterAgree",
                                    ns: "auth_common",
                                    children: e.jsx("strong", {})
                                })
                            }),
                            checked: b,
                            onChange: M => m(M),
                            error: (P = D.newsletterAgree) == null ? void 0 : P.message
                        }))
                    }
                }), e.jsx("div", {
                    className: "pt-4",
                    children: e.jsx(U, {
                        type: "submit",
                        form: `signup-form-${x}`,
                        className: "w-full",
                        loading: r,
                        children: e.jsx("span", {
                            className: "text-lg font-bold",
                            children: A("auth_common:create_account")
                        })
                    })
                })]
            })]
        })
    },
    ja = ba,
    ya = () => {
        var t, s, a, o;
        const {
            locale: i,
            i18n: {
                useTranslation: u
            }
        } = V(), {
            control: n,
            setValue: r,
            setError: d,
            register: h,
            handleSubmit: g,
            formState: {
                errors: v
            },
            watch: L
        } = ee(), {
            mutateAsync: D,
            isPending: A,
            error: O
        } = Ke({
            lang: i
        }), {
            t: f
        } = u(["auth_common", "auth_validation", "auth_error"]), {
            signupEvent: j
        } = ge(), x = ((t = O == null ? void 0 : O.error) == null ? void 0 : t.user) || (O == null ? void 0 : O.message) || f("auth_error:unknown_error"), _ = L("selected_country"), N = p => R(void 0, null, function*() {
            var c;
            try {
                const l = p,
                    {
                        selected_country: m
                    } = l,
                    b = E(l, ["selected_country"]),
                    k = C(w({}, b), {
                        country_code: m == null ? void 0 : m.dial_code,
                        country: m == null ? void 0 : m.code
                    }),
                    P = yield D({
                        user: k,
                        locale: i
                    });
                be(P), j({
                    method: "email",
                    user: P
                })
            } catch (l) {
                if (l instanceof Ye && (r("error", l), (c = l == null ? void 0 : l.error) != null && c.phone)) return d("phone", {
                    message: l.error.phone.toString()
                }), r("step", "info")
            }
        });
        return e.jsxs("form", {
            id: "signup-form-update-profile",
            className: "space-y-4",
            onSubmit: g(N),
            noValidate: !0,
            children: [e.jsxs("div", {
                className: "mt-1 flex flex-col-reverse items-center justify-between gap-4 sm:flex-row",
                children: [e.jsxs("div", {
                    className: "grow space-y-2",
                    children: [e.jsx("h4", {
                        className: "text-2xl",
                        children: f("auth_common:complete_your_account")
                    }), e.jsx("p", {
                        className: "text-sm text-zinc-500",
                        children: f("auth_common:complete_your_account_desc")
                    })]
                }), e.jsx("div", {
                    className: "bg-body-lighter/50 flex h-20 w-20 max-w-[100px] shrink-0 items-center justify-center rounded-full sm:max-w-none",
                    children: e.jsxs("svg", {
                        width: "50",
                        height: "50",
                        viewBox: "0 0 50 50",
                        children: [e.jsx("path", {
                            d: "M24.9984 22.9281C20.4144 22.9281 16.6984 19.2121 16.6984 14.6281C16.6984 10.0442 20.4144 6.32812 24.9984 6.32812C29.5823 6.32812 33.2984 10.0442 33.2984 14.6281C33.2984 19.2121 29.5823 22.9281 24.9984 22.9281Z",
                            fill: "#A1A1AA"
                        }), e.jsx("path", {
                            d: "M6.32472 42.0165C7.129 32.1131 15.1668 27.0781 24.9638 27.0781C34.8986 27.0781 43.061 31.8365 43.669 42.0181C43.6933 42.4237 43.669 43.6781 42.1103 43.6781C34.4212 43.6781 22.9954 43.6781 7.83293 43.6781C7.31254 43.6781 6.28091 42.5559 6.32472 42.0165Z",
                            fill: "#A1A1AA"
                        })]
                    })
                })]
            }), e.jsxs("fieldset", {
                className: "flex flex-col gap-2 py-1 sm:flex-row",
                children: [e.jsx("div", {
                    className: "grow",
                    children: e.jsx(q, C(w({
                        id: "first_name",
                        label: f("auth_common:first_name")
                    }, h("first_name", {
                        required: f("auth_validation:required"),
                        maxLength: {
                            value: 25,
                            message: f("auth_validation:max_length", {
                                max: 25
                            })
                        }
                    })), {
                        onChange: p => {
                            r("first_name", p)
                        },
                        error: (s = v.first_name) == null ? void 0 : s.message
                    }))
                }), e.jsx("div", {
                    className: "grow",
                    children: e.jsx(q, C(w({
                        id: "last_name",
                        autoComplete: "off",
                        label: f("auth_common:last_name")
                    }, h("last_name", {
                        required: f("auth_validation:required"),
                        maxLength: {
                            value: 25,
                            message: f("auth_validation:max_length", {
                                max: 25
                            })
                        }
                    })), {
                        onChange: p => {
                            r("last_name", p)
                        },
                        error: (a = v.last_name) == null ? void 0 : a.message
                    }))
                })]
            }), e.jsx("fieldset", {
                className: "my-4",
                children: e.jsx("div", {
                    className: "relative",
                    children: e.jsx(q, C(w({
                        id: "email",
                        autoComplete: "off",
                        label: f("auth_common:email")
                    }, h("email", {
                        required: f("auth_validation:required")
                    })), {
                        onChange: p => {
                            r("email", p)
                        },
                        error: (o = v.email) == null ? void 0 : o.message,
                        disabled: !0
                    }))
                })
            }), e.jsx(I, {
                name: "phone",
                control: n,
                rules: {
                    required: f("auth_validation:required"),
                    validate: p => {
                        var c, l, m;
                        const b = (c = _ == null ? void 0 : _.mobile_starts_with) == null ? void 0 : c.length;
                        if (p.includes(" ")) return f("auth_validation:invalid_mobile");
                        if (b) {
                            const k = (l = _ == null ? void 0 : _.mobile_starts_with) == null ? void 0 : l.some(M => p.startsWith(M)),
                                P = p.length >= Number((m = _ == null ? void 0 : _.phone_number_lengths) == null ? void 0 : m[0]);
                            return k && P || f("auth_validation:invalid_mobile")
                        }
                    }
                },
                render: p => {
                    var {
                        field: c
                    } = p, l = c, {
                        value: m
                    } = l, b = E(l, ["value"]), k, P, M;
                    return e.jsx(We, C(w({
                        lang: i,
                        label: f("auth_common:mobile")
                    }, b), {
                        country: _,
                        mobile: m || "",
                        onChange: (B, $) => {
                            r(B === "country" ? "selected_country" : "phone", $)
                        },
                        error: (k = v == null ? void 0 : v.phone) == null ? void 0 : k.message,
                        placeholder: _ ? `${((P=_==null?void 0:_.mobile_starts_with)==null?void 0:P[0])||""}${"x".repeat((((M=_.phone_number_lengths)==null?void 0:M[0])||7)-1)}` : ""
                    }))
                }
            }), e.jsxs("div", {
                className: "mt-8 space-y-2",
                children: [O && x && e.jsx("p", {
                    className: "text-error pb-2 text-center text-sm",
                    children: x
                }), e.jsx(U, {
                    type: "submit",
                    form: "signup-form-update-profile",
                    className: "mt-4 w-full",
                    loading: A,
                    children: e.jsx("span", {
                        className: "text-lg font-bold",
                        children: f("auth_common:update_account")
                    })
                })]
            })]
        })
    },
    wa = ya,
    Ca = ({
        title: t,
        onSuccess: s,
        initialMode: a = "email",
        className: o
    }) => {
        const {
            locale: i,
            i18n: {
                useTranslation: u
            }
        } = V(), {
            t: n
        } = u(["auth_common"]), r = Ze.find(D => D.code === "SA"), d = xe({
            defaultValues: {
                email: "",
                mode: a,
                selected_country: r
            }
        }), h = d.watch("mode"), g = z.useMemo(() => ["email", "otp", "reset-otp", "reset-email", "reset-password"].includes(h), [h]), v = z.useMemo(() => {
            let D = {
                steps: 2,
                activeStep: 1,
                topComponent: e.jsx("div", {
                    className: "text-2xl font-bold",
                    children: t || n("auth_common:signup_title")
                })
            };
            switch (h) {
                case "otp":
                    D = {
                        steps: 2,
                        activeStep: 2,
                        topComponent: e.jsx("div", {
                            className: "px-2",
                            children: e.jsx(X, {
                                className: "text-base font-medium uppercase",
                                onClick: () => d.setValue("mode", "email"),
                                text: n("auth_common:change_email_address"),
                                id: "change-email_address"
                            })
                        })
                    };
                    break;
                case "reset-email":
                    D = {
                        steps: 3,
                        activeStep: 1,
                        topComponent: e.jsxs("div", {
                            children: [e.jsx(X, {
                                onClick: () => d.setValue("mode", "email"),
                                text: n("auth_common:back_to_login"),
                                id: "back-login"
                            }), e.jsx("p", {
                                className: "text-2xl font-bold",
                                children: n("auth_common:reset_password_title")
                            }), e.jsx("p", {
                                className: "text-sm text-gray-500",
                                children: n("auth_common:reset_password_text")
                            })]
                        })
                    };
                    break;
                case "reset-otp":
                    D = {
                        steps: 3,
                        activeStep: 2,
                        topComponent: e.jsx("div", {
                            children: e.jsx(X, {
                                onClick: () => d.setValue("mode", "email"),
                                text: n("auth_common:back_to_login"),
                                id: "back-login"
                            })
                        })
                    };
                    break;
                case "reset-password":
                    D = {
                        steps: 3,
                        activeStep: 3,
                        topComponent: e.jsxs("div", {
                            children: [e.jsx(X, {
                                onClick: () => d.setValue("mode", "email"),
                                text: n("auth_common:back_to_login"),
                                id: "back-login"
                            }), e.jsx("p", {
                                className: "text-2xl font-bold",
                                children: n("auth_common:reset_password_title")
                            }), e.jsx("p", {
                                className: "text-sm text-gray-500",
                                children: n("auth_common:password_description")
                            })]
                        })
                    };
                    break
            }
            return D
        }, [d, h, n, t]), L = z.useMemo(() => {
            switch (h) {
                case "otp":
                case "reset-otp":
                    return e.jsx(ma, {});
                case "reset-password":
                    return e.jsx(va, {});
                case "reset-password-success":
                    return e.jsx(fa, {});
                case "signup":
                    return e.jsx(ja, {
                        onSuccess: s
                    });
                case "update-profile":
                    return e.jsx(wa, {});
                default:
                    return e.jsx(da, {
                        onSuccess: s
                    })
            }
        }, [h]);
        return e.jsx(vt, {
            children: e.jsx(Lt, C(w({}, d), {
                children: e.jsxs("div", {
                    className: re("bg-body-light overflow-hidden rounded-lg p-4", o),
                    children: [g && e.jsx("div", {
                        className: "mb-4 flex items-start justify-between gap-2",
                        children: v.topComponent
                    }), e.jsx(se, {
                        initial: !1,
                        mode: "wait",
                        children: e.jsx(ne.div, {
                            initial: {
                                x: i != null && i.startsWith("ar") ? "100%" : "-100%",
                                opacity: 0
                            },
                            animate: {
                                x: 0,
                                opacity: 1
                            },
                            exit: {
                                x: i != null && i.startsWith("ar") ? "-100%" : "100%",
                                opacity: 0
                            },
                            transition: {
                                duration: .2
                            },
                            children: L
                        }, `${h}-${i}-${h}`)
                    })]
                })
            }))
        })
    },
    qa = ({
        show: t,
        onSuccess: s,
        onClose: a,
        flatLayout: o,
        className: i,
        btnClassName: u
    }) => {
        const {
            isMobile: n
        } = je(), {
            user: r,
            locale: d,
            i18n: {
                useTranslation: h
            }
        } = V(), {
            t: g
        } = h(["auth_common"]), {
            mutateAsync: v,
            isPending: L,
            error: D
        } = He({
            lang: d
        }), {
            mutateAsync: A,
            isPending: O,
            error: f
        } = fe(), {
            setValue: j,
            watch: x
        } = xe(), _ = x("otp"), N = z.useCallback(() => R(void 0, null, function*() {
            try {
                t && (yield A({
                    email: (r == null ? void 0 : r.email) || "",
                    locale: d,
                    checkout_verify: !0
                }))
            } catch {}
        }), [d, A, t, r == null ? void 0 : r.email]), p = m => R(void 0, null, function*() {
            try {
                yield v({
                    email: (r == null ? void 0 : r.email) || "",
                    otp: m || _,
                    verify_otp: !0
                }), s && s()
            } catch {}
        });
        z.useEffect(() => {
            N()
        }, [N]);
        const c = e.jsx("div", {
                className: `flex w-full items-center justify-between px-2 ${n?"":"pt-2"}`,
                children: e.jsx(X, {
                    text: g("auth_common:change_tickets"),
                    onClick: a
                })
            }),
            l = e.jsxs("div", {
                className: re("px-4 pb-4", i),
                children: [e.jsx("h2", {
                    className: "pb-1 text-2xl font-semibold",
                    children: g("auth_common:verify_your_email_address")
                }), e.jsx("p", {
                    className: "text-sm",
                    children: g("auth_common:verify_your_email_address_desc", {
                        email: (r == null ? void 0 : r.email) || ""
                    })
                }), e.jsx("div", {
                    className: "pt-10",
                    children: e.jsx(Be, {
                        formId: "checkout-vefity-otp",
                        onChange: m => {
                            j("otp", m)
                        },
                        onSubmit: m => R(void 0, null, function*() {
                            j("otp", m), p(m)
                        }),
                        onlyNumbers: !0,
                        disabled: L,
                        error: (D == null ? void 0 : D.message) || (f == null ? void 0 : f.message),
                        renderButton: ({
                            resetState: m
                        }) => e.jsxs("div", {
                            className: "mt-6 text-center text-sm",
                            children: [e.jsx(st, {
                                seconds: 60,
                                render: ({
                                    count: b,
                                    reset: k
                                }) => e.jsxs("div", {
                                    className: "flex items-center justify-center gap-2",
                                    children: [e.jsx("p", {
                                        className: "mx-1 font-medium text-zinc-500",
                                        children: g("auth_common:didnt_receive_it")
                                    }), e.jsx(U, {
                                        type: "button",
                                        shape: "text",
                                        className: "shrink-0 px-2 py-1 text-sm",
                                        disabled: O || b > 0,
                                        loading: L,
                                        onClick: () => R(void 0, null, function*() {
                                            try {
                                                yield N(), k(), m()
                                            } catch {}
                                        }),
                                        id: "resend-otp",
                                        children: `${g("auth_common:resend_otp")} ${b>0?`(${b})`:""}`
                                    })]
                                })
                            }), e.jsx(U, {
                                type: "submit",
                                form: "checkout-vefity-otp",
                                disabled: (_ == null ? void 0 : _.length) !== 4,
                                loading: L,
                                className: re("mt-6 w-full", u),
                                id: "verify-otp",
                                children: e.jsx("span", {
                                    className: "text-xl font-bold",
                                    children: g("auth_common:verify")
                                })
                            })]
                        })
                    })
                })]
            });
        return o ? l : n ? e.jsx(Ge, {
            className: "z-[999]",
            sectionClassName: "pb-8",
            show: t,
            onClose: a,
            stickyHeader: () => c,
            body: () => l
        }) : e.jsx(pe, {
            show: t,
            stickyHeader: () => c,
            body: () => l,
            zIndex: 999
        })
    },
    Na = 13,
    Ea = ({
        show: t,
        onSuccess: s,
        onClose: a,
        flatLayout: o,
        className: i,
        showVisaCheckbox: u
    }) => {
        var n, r, d, h, g, v, L, D, A, O, f, j, x, _, N, p, c, l, m, b, k, P, M, B, $;
        const {
            isMobile: W
        } = je(), {
            user: y,
            locale: ce,
            i18n: {
                useTranslation: ot
            }
        } = V(), {
            t: S
        } = ot(["auth_common"]), {
            mutateAsync: rt,
            isPending: Me,
            error: F
        } = Ke({
            lang: ce
        }), {
            register: te,
            setValue: ae,
            handleSubmit: lt,
            formState: {
                errors: Z
            },
            control: me,
            watch: it
        } = xe({
            defaultValues: {
                first_name: (y == null ? void 0 : y.first_name) || "",
                last_name: (y == null ? void 0 : y.last_name) || "",
                email: (y == null ? void 0 : y.email) || "",
                gender: (y == null ? void 0 : y.gender) || "",
                dob: yt(y == null ? void 0 : y.dob),
                passport_data: {
                    nationality: ((n = y == null ? void 0 : y.passport_data) == null ? void 0 : n.nationality) || (y == null ? void 0 : y.nationality) || "",
                    passport: ((r = y == null ? void 0 : y.passport_data) == null ? void 0 : r.passport) || "",
                    expiry_date: ((d = y == null ? void 0 : y.passport_data) == null ? void 0 : d.expiry_date) || "",
                    issue_date: ((h = y == null ? void 0 : y.passport_data) == null ? void 0 : h.issue_date) || ""
                }
            }
        }), dt = it("require_visa"), ut = T => R(void 0, null, function*() {
            var H;
            try {
                const J = C(w({}, T), {
                    nationality: (H = T.passport_data) == null ? void 0 : H.nationality,
                    passport_data: T.require_visa === "yes" ? T == null ? void 0 : T.passport_data : void 0
                });
                yield rt({
                    user: J,
                    locale: ce
                }), s && s()
            } catch {}
        }), he = e.jsxs("form", {
            id: "checkout-complete-profile",
            onSubmit: lt(ut),
            className: re("space-y-4 px-4 pb-24", i),
            children: [e.jsxs("div", {
                children: [e.jsx("h2", {
                    className: "pb-1 text-2xl font-semibold",
                    children: S("auth_common:complete_your_account")
                }), e.jsx("p", {
                    className: "text-sm",
                    children: S("auth_common:complete_your_account_desc")
                })]
            }), e.jsxs("fieldset", {
                className: "flex flex-col gap-2 py-1 sm:flex-row",
                children: [e.jsx("div", {
                    className: "grow",
                    children: e.jsx(q, C(w({
                        id: "first_name",
                        label: S("auth_common:first_name")
                    }, te("first_name", {
                        required: S("auth_validation:required"),
                        maxLength: {
                            value: 25,
                            message: S("auth_validation:max_length", {
                                max: 25
                            })
                        }
                    })), {
                        onChange: T => {
                            ae("first_name", T)
                        },
                        error: ((g = Z.first_name) == null ? void 0 : g.message) || ((L = (v = F == null ? void 0 : F.error) == null ? void 0 : v.first_name) == null ? void 0 : L[0])
                    }))
                }), e.jsx("div", {
                    className: "grow",
                    children: e.jsx(q, C(w({
                        id: "last_name",
                        autoComplete: "off",
                        label: S("auth_common:last_name")
                    }, te("last_name", {
                        required: S("auth_validation:required"),
                        maxLength: {
                            value: 25,
                            message: S("auth_validation:max_length", {
                                max: 25
                            })
                        }
                    })), {
                        onChange: T => {
                            ae("last_name", T)
                        },
                        error: ((D = Z.last_name) == null ? void 0 : D.message) || ((O = (A = F == null ? void 0 : F.error) == null ? void 0 : A.last_name) == null ? void 0 : O[0])
                    }))
                })]
            }), e.jsx(I, {
                name: "gender",
                control: me,
                rules: {
                    required: S("auth_validation:required")
                },
                render: ({
                    field: T
                }) => {
                    var H, J, le;
                    return e.jsx(Ue, C(w({
                        label: S("auth_common:gender"),
                        options: [{
                            text: S("auth_common:male"),
                            value: "male"
                        }, {
                            text: S("auth_common:female"),
                            value: "female"
                        }]
                    }, T), {
                        type: "single",
                        error: ((H = Z.gender) == null ? void 0 : H.message) || ((le = (J = F == null ? void 0 : F.error) == null ? void 0 : J.gender) == null ? void 0 : le[0])
                    }))
                }
            }), e.jsx(q, C(w({
                type: "date",
                className: "w-full uppercase",
                pattern: "\\d{4}-\\d{2}-\\d{2}",
                max: `${new Date().getFullYear()-Na}-01-01`,
                label: S("auth_common:birthdate")
            }, te("dob", {
                required: S("auth_validation:required")
            })), {
                onChange: T => {
                    ae("dob", T)
                },
                error: ((f = Z.dob) == null ? void 0 : f.message) || ((x = (j = F == null ? void 0 : F.error) == null ? void 0 : j.dob) == null ? void 0 : x[0])
            })), e.jsx(I, {
                name: "passport_data.nationality",
                control: me,
                rules: {
                    required: S("auth_validation:required")
                },
                defaultValue: "",
                render: T => {
                    var {
                        field: H
                    } = T, J = H, {
                        onChange: le
                    } = J, ct = E(J, ["onChange"]), qe, Ee, Fe, Ie;
                    return e.jsx(mt, C(w({
                        id: "nationality"
                    }, ct), {
                        autoComplete: "off",
                        portal: !1,
                        onChange: K => le((K == null ? void 0 : K.value) || ""),
                        label: S("auth_common:nationality"),
                        placeholder: S("auth_common:nationality"),
                        options: Ze.map(K => ({
                            id: K.code,
                            value: K.code,
                            text: K[`name_${ce}`] || K.name,
                            icon: e.jsx("img", {
                                className: "shrink-0",
                                src: `https://wbk-assets.s3.me-south-1.amazonaws.com/flags/w80/${K.code.toLowerCase()}.png`,
                                width: 20,
                                height: 14,
                                alt: K.name
                            })
                        })),
                        error: ((Ee = (qe = Z == null ? void 0 : Z.passport_data) == null ? void 0 : qe.nationality) == null ? void 0 : Ee.message) || ((Ie = (Fe = F == null ? void 0 : F.error) == null ? void 0 : Fe.nationality) == null ? void 0 : Ie[0])
                    }))
                }
            }), u && e.jsxs(e.Fragment, {
                children: [e.jsx(I, {
                    name: "require_visa",
                    control: me,
                    rules: {
                        required: S("auth_validation:required")
                    },
                    render: ({
                        field: T
                    }) => {
                        var H;
                        return e.jsx(Ue, C(w({
                            label: S("auth_common:require_visa"),
                            type: "single",
                            options: [{
                                text: S("auth_common:yes"),
                                value: "yes"
                            }, {
                                text: S("auth_common:no"),
                                value: "no"
                            }]
                        }, T), {
                            error: (H = Z.require_visa) == null ? void 0 : H.message
                        }))
                    }
                }), e.jsx(se, {
                    initial: !1,
                    children: dt === "yes" && e.jsxs(ne.div, {
                        className: "space-y-4 overflow-hidden",
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: "auto"
                        },
                        exit: {
                            height: 0
                        },
                        children: [e.jsx(q, C(w({
                            id: "passport",
                            label: S("auth_common:passport"),
                            placeholder: S("auth_common:passport")
                        }, te("passport_data.passport", {
                            required: S("auth_validation:required"),
                            minLength: {
                                value: 7,
                                message: S("auth_validation:min_length", {
                                    min: 7
                                })
                            },
                            maxLength: {
                                value: 25,
                                message: S("auth_validation:max_length", {
                                    max: 25
                                })
                            }
                        })), {
                            onChange: T => {
                                ae("passport_data.passport", T)
                            },
                            error: ((N = (_ = Z.passport_data) == null ? void 0 : _.passport) == null ? void 0 : N.message) || ((c = (p = F == null ? void 0 : F.error) == null ? void 0 : p.passport) == null ? void 0 : c[0])
                        })), e.jsxs("div", {
                            className: "flex flex-col gap-4 py-1 sm:flex-row",
                            children: [e.jsx(q, C(w({
                                type: "date",
                                groupClassName: "grow",
                                pattern: "\\d{4}-\\d{2}-\\d{2}",
                                max: new Date().toISOString().split("T")[0],
                                label: S("auth_common:issue_date")
                            }, te("passport_data.issue_date", {
                                required: S("auth_validation:required")
                            })), {
                                onChange: T => {
                                    ae("passport_data.issue_date", T)
                                },
                                error: ((m = (l = Z.passport_data) == null ? void 0 : l.issue_date) == null ? void 0 : m.message) || ((k = (b = F == null ? void 0 : F.error) == null ? void 0 : b.issue_date) == null ? void 0 : k[0])
                            })), e.jsx(q, C(w({
                                type: "date",
                                groupClassName: "grow",
                                min: new Date().toISOString().split("T")[0],
                                pattern: "\\d{4}-\\d{2}-\\d{2}",
                                label: S("auth_common:expiry_date")
                            }, te("passport_data.expiry_date", {
                                required: S("auth_validation:required")
                            })), {
                                onChange: T => {
                                    ae("passport_data.expiry_date", T)
                                },
                                error: ((M = (P = Z.passport_data) == null ? void 0 : P.expiry_date) == null ? void 0 : M.message) || (($ = (B = F == null ? void 0 : F.error) == null ? void 0 : B.expiry_date) == null ? void 0 : $[0])
                            }))]
                        })]
                    })
                })]
            })]
        });
        return o ? he : W ? e.jsx(Ge, {
            fullscreen: !0,
            show: t,
            onClose: a,
            stickyHeader: ({
                close: T
            }) => e.jsx(Re, {
                onClose: T
            }),
            stickyFooter: () => e.jsx(ze, {
                isPending: Me
            }),
            body: () => he,
            className: "z-[999]"
        }) : e.jsx(pe, {
            className: "overflow-y-auto",
            zIndex: 999,
            show: t,
            onClose: a,
            stickyHeader: ({
                close: T
            }) => e.jsx(Re, {
                onClose: T
            }),
            stickyFooter: () => e.jsx(ze, {
                isPending: Me
            }),
            body: () => he
        })
    },
    Re = ({
        onClose: t
    }) => {
        const {
            i18n: {
                useTranslation: s
            }
        } = V(), {
            t: a
        } = s(["auth_common"]);
        return e.jsx("div", {
            className: "bg-body-light flex w-full items-center justify-between rounded-t-md p-2 pb-1",
            children: e.jsx(X, {
                tabIndex: -1,
                className: "mb-0",
                text: a("auth_common:change_tickets"),
                onClick: t
            })
        })
    },
    ze = ({
        isPending: t
    }) => {
        const {
            i18n: {
                useTranslation: s
            }
        } = V(), {
            t: a
        } = s(["auth_common"]);
        return e.jsx("div", {
            className: "bg-body-light p-4 pb-6 md:pb-4",
            children: e.jsx(U, {
                className: "w-full",
                type: "submit",
                form: "checkout-complete-profile",
                loading: t,
                children: e.jsx("span", {
                    className: "text-xl font-bold",
                    children: a("auth_common:confirm")
                })
            })
        })
    },
    Fa = (t, s) => o => {
        const {
            user: i,
            isNewUser: u,
            loading: n
        } = V({
            autoFetch: !0
        }), {
            isWebView: r
        } = je();
        return n ? e.jsxs(e.Fragment, {
            children: [e.jsx("style", {
                children: "body{overflow:hidden}"
            }), (s == null ? void 0 : s.loadingComponent) || e.jsx("div", {
                className: "relative flex h-[calc(100svh-50px)] items-center justify-center overflow-hidden rounded-md py-20",
                children: e.jsx(At, {
                    className: "h-24 w-24"
                })
            })]
        }) : !i || u ? e.jsx("section", {
            "data-webview": !!r,
            className: 'relative flex min-h-[95vh] items-center after:absolute after:inset-0 after:bg-black/80 data-[webview=false]:before:absolute data-[webview=false]:before:inset-0 data-[webview=false]:before:z-[-1] data-[webview=false]:before:bg-[url("/images/default-cover.jpg")] data-[webview=false]:before:bg-cover data-[webview=false]:before:bg-no-repeat',
            children: e.jsxs("div", {
                className: "container relative z-10 mx-auto grid grid-cols-1 py-10 lg:grid-cols-2",
                children: [!r && e.jsx("div", {
                    className: "flex items-center pb-8",
                    children: e.jsx("figure", {
                        className: "mx-auto w-full",
                        children: e.jsx("img", {
                            className: "mx-auto h-full w-full max-w-[160px] lg:max-w-xs",
                            src: "/icons/logo.svg",
                            alt: ""
                        })
                    })
                }), e.jsx("div", {
                    className: "mx-auto w-full max-w-lg",
                    children: e.jsx(Ca, {
                        title: s == null ? void 0 : s.title
                    })
                })]
            })
        }) : e.jsx(t, C(w({}, o), {
            user: i
        }))
    },
    Ia = t => {
        var s = t,
            {
                children: a
            } = s,
            o = E(s, ["children"]);
        const [i, u] = z.useState(o), {
            data: n,
            isLoading: r
        } = wt({
            lang: o.locale
        }, {
            enabled: i.autoInit
        }), d = () => {
            i.autoInit || u(L => C(w({}, L), {
                autoInit: !0
            }))
        }, h = L => {
            u(D => C(w({}, D), {
                accessToken: L
            }))
        }, g = z.useMemo(() => !!(n != null && n._id) && (!!(n != null && n.is_guest) || !!(n != null && n.force_verify_email)), [n == null ? void 0 : n._id, n == null ? void 0 : n.force_verify_email, n == null ? void 0 : n.is_guest]), v = z.useMemo(() => Ct("twk") === "true", []);
        return e.jsx(Je.Provider, {
            value: C(w({}, i), {
                locale: o.locale,
                user: n,
                isNewUser: g,
                isTawakkalnaUser: v,
                loading: r,
                fetchUser: d,
                setAccessToken: h
            }),
            children: a
        })
    };
export {
    Ca as A, Ma as L, qa as O, Ea as P, Fa as W, Ia as a, ra as b, V as u
};
//# sourceMappingURL=auth-BpKCnx9p.js.map