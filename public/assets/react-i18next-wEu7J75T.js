import {
    g as G,
    R as F,
    r as N
} from "./vendor-DR5RWKqR.js";
import {
    m as Q
} from "./@wbk/ui-DjgVGgjs.js";
var _ = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
};
const ee = G(_);
var te = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;

function V(t) {
    var e = {
            type: "tag",
            name: "",
            voidElement: !1,
            attrs: {},
            children: []
        },
        n = t.match(/<\/?([^\s]+?)[/\s>]/);
    if (n && (e.name = n[1], (ee[n[1]] || t.charAt(t.length - 2) === "/") && (e.voidElement = !0), e.name.startsWith("!--"))) {
        var o = t.indexOf("-->");
        return {
            type: "comment",
            comment: o !== -1 ? t.slice(4, o) : ""
        }
    }
    for (var c = new RegExp(te), s = null;
        (s = c.exec(t)) !== null;)
        if (s[0].trim())
            if (s[1]) {
                var i = s[1].trim(),
                    p = [i, ""];
                i.indexOf("=") > -1 && (p = i.split("=")), e.attrs[p[0]] = p[1], c.lastIndex--
            } else s[2] && (e.attrs[s[2]] = s[3].trim().substring(1, s[3].length - 1));
    return e
}
var ne = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
    se = /^\s*$/,
    re = Object.create(null);

function M(t, e) {
    switch (e.type) {
        case "text":
            return t + e.content;
        case "tag":
            return t += "<" + e.name + (e.attrs ? function(n) {
                var o = [];
                for (var c in n) o.push(c + '="' + n[c] + '"');
                return o.length ? " " + o.join(" ") : ""
            }(e.attrs) : "") + (e.voidElement ? "/>" : ">"), e.voidElement ? t : t + e.children.reduce(M, "") + "</" + e.name + ">";
        case "comment":
            return t + "<!--" + e.comment + "-->"
    }
}
var ae = {
    parse: function(t, e) {
        e || (e = {}), e.components || (e.components = re);
        var n, o = [],
            c = [],
            s = -1,
            i = !1;
        if (t.indexOf("<") !== 0) {
            var p = t.indexOf("<");
            o.push({
                type: "text",
                content: p === -1 ? t : t.substring(0, p)
            })
        }
        return t.replace(ne, function(g, a) {
            if (i) {
                if (g !== "</" + n.name + ">") return;
                i = !1
            }
            var h, $ = g.charAt(1) !== "/",
                T = g.startsWith("<!--"),
                x = a + g.length,
                v = t.charAt(x);
            if (T) {
                var y = V(g);
                return s < 0 ? (o.push(y), o) : ((h = c[s]).children.push(y), o)
            }
            if ($ && (s++, (n = V(g)).type === "tag" && e.components[n.name] && (n.type = "component", i = !0), n.voidElement || i || !v || v === "<" || n.children.push({
                    type: "text",
                    content: t.slice(x, t.indexOf("<", x))
                }), s === 0 && o.push(n), (h = c[s - 1]) && h.children.push(n), c[s] = n), (!$ || n.voidElement) && (s > -1 && (n.voidElement || n.name === g.slice(2, -1)) && (s--, n = s === -1 ? o : c[s]), !i && v !== "<" && v)) {
                h = s === -1 ? o : c[s].children;
                var l = t.indexOf("<", x),
                    f = t.slice(x, l === -1 ? void 0 : l);
                se.test(f) && (f = " "), (l > -1 && s + h.length >= 0 || f !== " ") && h.push({
                    type: "text",
                    content: f
                })
            }
        }), o
    },
    stringify: function(t) {
        return t.reduce(function(e, n) {
            return e + M("", n)
        }, "")
    }
};

function L() {
    if (console && console.warn) {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        typeof e[0] == "string" && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e)
    }
}
const W = {};

function P() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    typeof e[0] == "string" && W[e[0]] || (typeof e[0] == "string" && (W[e[0]] = new Date), L(...e))
}
const J = (t, e) => () => {
    if (t.isInitialized) e();
    else {
        const n = () => {
            setTimeout(() => {
                t.off("initialized", n)
            }, 0), e()
        };
        t.on("initialized", n)
    }
};

function U(t, e, n) {
    t.loadNamespaces(e, J(t, n))
}

function D(t, e, n, o) {
    typeof n == "string" && (n = [n]), n.forEach(c => {
        t.options.ns.indexOf(c) < 0 && t.options.ns.push(c)
    }), t.loadLanguages(e, J(t, o))
}

function oe(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const o = e.languages[0],
        c = e.options ? e.options.fallbackLng : !1,
        s = e.languages[e.languages.length - 1];
    if (o.toLowerCase() === "cimode") return !0;
    const i = (p, g) => {
        const a = e.services.backendConnector.state[`${p}|${g}`];
        return a === -1 || a === 2
    };
    return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && e.services.backendConnector.backend && e.isLanguageChangingTo && !i(e.isLanguageChangingTo, t) ? !1 : !!(e.hasResourceBundle(o, t) || !e.services.backendConnector.backend || e.options.resources && !e.options.partialBundledLanguages || i(o, t) && (!c || i(s, t)))
}

function ie(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return !e.languages || !e.languages.length ? (P("i18n.languages were undefined or empty", e.languages), !0) : e.options.ignoreJSONStructure !== void 0 ? e.hasLoadedNamespace(t, {
        lng: n.lng,
        precheck: (c, s) => {
            if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && c.services.backendConnector.backend && c.isLanguageChangingTo && !s(c.isLanguageChangingTo, t)) return !1
        }
    }) : oe(t, e, n)
}
const ue = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
    ce = {
        "&amp;": "&",
        "&#38;": "&",
        "&lt;": "<",
        "&#60;": "<",
        "&gt;": ">",
        "&#62;": ">",
        "&apos;": "'",
        "&#39;": "'",
        "&quot;": '"',
        "&#34;": '"',
        "&nbsp;": " ",
        "&#160;": " ",
        "&copy;": "©",
        "&#169;": "©",
        "&reg;": "®",
        "&#174;": "®",
        "&hellip;": "…",
        "&#8230;": "…",
        "&#x2F;": "/",
        "&#47;": "/"
    },
    le = t => ce[t],
    pe = t => t.replace(ue, le);
let K = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0,
    unescape: pe
};

function fe() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    K = { ...K,
        ...t
    }
}

function q() {
    return K
}
let Y;

function de(t) {
    Y = t
}

function z() {
    return Y
}

function B(t, e) {
    if (!t) return !1;
    const n = t.props ? t.props.children : t.children;
    return e ? n.length > 0 : !!n
}

function R(t) {
    if (!t) return [];
    const e = t.props ? t.props.children : t.children;
    return t.props && t.props.i18nIsDynamicList ? A(e) : e
}

function me(t) {
    return Object.prototype.toString.call(t) !== "[object Array]" ? !1 : t.every(e => N.isValidElement(e))
}

function A(t) {
    return Array.isArray(t) ? t : [t]
}

function ge(t, e) {
    const n = { ...e
    };
    return n.props = Object.assign(t.props, e.props), n
}

function X(t, e) {
    if (!t) return "";
    let n = "";
    const o = A(t),
        c = e.transSupportBasicHtmlNodes && e.transKeepBasicHtmlNodesFor ? e.transKeepBasicHtmlNodesFor : [];
    return o.forEach((s, i) => {
        if (typeof s == "string") n += `${s}`;
        else if (N.isValidElement(s)) {
            const p = Object.keys(s.props).length,
                g = c.indexOf(s.type) > -1,
                a = s.props.children;
            if (!a && g && p === 0) n += `<${s.type}/>`;
            else if (!a && (!g || p !== 0)) n += `<${i}></${i}>`;
            else if (s.props.i18nIsDynamicList) n += `<${i}></${i}>`;
            else if (g && p === 1 && typeof a == "string") n += `<${s.type}>${a}</${s.type}>`;
            else {
                const h = X(a, e);
                n += `<${i}>${h}</${i}>`
            }
        } else if (s === null) L("Trans: the passed in value is invalid - seems you passed in a null child.");
        else if (typeof s == "object") {
            const {
                format: p,
                ...g
            } = s, a = Object.keys(g);
            if (a.length === 1) {
                const h = p ? `${a[0]}, ${p}` : a[0];
                n += `{{${h}}}`
            } else L("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", s)
        } else L("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", s)
    }), n
}

function he(t, e, n, o, c, s) {
    if (e === "") return [];
    const i = o.transKeepBasicHtmlNodesFor || [],
        p = e && new RegExp(i.map(l => `<${l}`).join("|")).test(e);
    if (!t && !p && !s) return [e];
    const g = {};

    function a(l) {
        A(l).forEach(u => {
            typeof u != "string" && (B(u) ? a(R(u)) : typeof u == "object" && !N.isValidElement(u) && Object.assign(g, u))
        })
    }
    a(t);
    const h = ae.parse(`<0>${e}</0>`),
        $ = { ...g,
            ...c
        };

    function T(l, f, u) {
        const m = R(l),
            b = v(m, f.children, u);
        return me(m) && b.length === 0 || l.props && l.props.i18nIsDynamicList ? m : b
    }

    function x(l, f, u, m, b) {
        l.dummy ? (l.children = f, u.push(N.cloneElement(l, {
            key: m
        }, b ? void 0 : f))) : u.push(...N.Children.map([l], d => {
            const r = { ...d.props
            };
            return delete r.i18nIsDynamicList, F.createElement(d.type, Q({}, r, {
                key: m,
                ref: d.ref
            }, b ? {} : {
                children: f
            }))
        }))
    }

    function v(l, f, u) {
        const m = A(l);
        return A(f).reduce((d, r, j) => {
            const O = r.children && r.children[0] && r.children[0].content && n.services.interpolator.interpolate(r.children[0].content, $, n.language);
            if (r.type === "tag") {
                let w = m[parseInt(r.name, 10)];
                u.length === 1 && !w && (w = u[0][r.name]), w || (w = {});
                const E = Object.keys(r.attrs).length !== 0 ? ge({
                        props: r.attrs
                    }, w) : w,
                    S = N.isValidElement(E),
                    k = S && B(r, !0) && !r.voidElement,
                    I = p && typeof E == "object" && E.dummy && !S,
                    H = typeof t == "object" && t !== null && Object.hasOwnProperty.call(t, r.name);
                if (typeof E == "string") {
                    const C = n.services.interpolator.interpolate(E, $, n.language);
                    d.push(C)
                } else if (B(E) || k) {
                    const C = T(E, r, u);
                    x(E, C, d, j)
                } else if (I) {
                    const C = v(m, r.children, u);
                    x(E, C, d, j)
                } else if (Number.isNaN(parseFloat(r.name)))
                    if (H) {
                        const C = T(E, r, u);
                        x(E, C, d, j, r.voidElement)
                    } else if (o.transSupportBasicHtmlNodes && i.indexOf(r.name) > -1)
                    if (r.voidElement) d.push(N.createElement(r.name, {
                        key: `${r.name}-${j}`
                    }));
                    else {
                        const C = v(m, r.children, u);
                        d.push(N.createElement(r.name, {
                            key: `${r.name}-${j}`
                        }, C))
                    }
                else if (r.voidElement) d.push(`<${r.name} />`);
                else {
                    const C = v(m, r.children, u);
                    d.push(`<${r.name}>${C}</${r.name}>`)
                } else if (typeof E == "object" && !S) {
                    const C = r.children[0] ? O : null;
                    C && d.push(C)
                } else x(E, O, d, j, r.children.length !== 1 || !O)
            } else if (r.type === "text") {
                const w = o.transWrapTextNodes,
                    E = s ? o.unescape(n.services.interpolator.interpolate(r.content, $, n.language)) : n.services.interpolator.interpolate(r.content, $, n.language);
                w ? d.push(N.createElement(w, {
                    key: `${r.name}-${j}`
                }, E)) : d.push(E)
            }
            return d
        }, [])
    }
    const y = v([{
        dummy: !0,
        children: t || []
    }], h, A(t || []));
    return R(y[0])
}

function ye(t) {
    let {
        children: e,
        count: n,
        parent: o,
        i18nKey: c,
        context: s,
        tOptions: i = {},
        values: p,
        defaults: g,
        components: a,
        ns: h,
        i18n: $,
        t: T,
        shouldUnescape: x,
        ...v
    } = t;
    const y = $ || z();
    if (!y) return P("You will need to pass in an i18next instance by using i18nextReactModule"), e;
    const l = T || y.t.bind(y) || (k => k);
    s && (i.context = s);
    const f = { ...q(),
        ...y.options && y.options.react
    };
    let u = h || l.ns || y.options && y.options.defaultNS;
    u = typeof u == "string" ? [u] : u || ["translation"];
    const m = X(e, f),
        b = g || m || f.transEmptyNodeValue || c,
        {
            hashTransKey: d
        } = f,
        r = c || (d ? d(m || b) : m || b);
    y.options && y.options.interpolation && y.options.interpolation.defaultVariables && (p = p && Object.keys(p).length > 0 ? { ...p,
        ...y.options.interpolation.defaultVariables
    } : { ...y.options.interpolation.defaultVariables
    });
    const j = p ? i.interpolation : {
            interpolation: { ...i.interpolation,
                prefix: "#$?",
                suffix: "?$#"
            }
        },
        O = { ...i,
            count: n,
            ...p,
            ...j,
            defaultValue: b,
            ns: u
        },
        w = r ? l(r, O) : b;
    a && Object.keys(a).forEach(k => {
        const I = a[k];
        if (typeof I.type == "function" || !I.props || !I.props.children || w.indexOf(`${k}/>`) < 0 && w.indexOf(`${k} />`) < 0) return;

        function H() {
            return F.createElement(F.Fragment, null, I)
        }
        a[k] = F.createElement(H, null)
    });
    const E = he(a || e, w, y, f, O, x),
        S = o !== void 0 ? o : f.defaultTransParent;
    return S ? N.createElement(S, v, E) : E
}
const Ee = {
        type: "3rdParty",
        init(t) {
            fe(t.options.react), de(t)
        }
    },
    Z = N.createContext();
class be {
    constructor() {
        this.usedNamespaces = {}
    }
    addUsedNamespaces(e) {
        e.forEach(n => {
            this.usedNamespaces[n] || (this.usedNamespaces[n] = !0)
        })
    }
    getUsedNamespaces() {
        return Object.keys(this.usedNamespaces)
    }
}

function $e(t) {
    let {
        children: e,
        count: n,
        parent: o,
        i18nKey: c,
        context: s,
        tOptions: i = {},
        values: p,
        defaults: g,
        components: a,
        ns: h,
        i18n: $,
        t: T,
        shouldUnescape: x,
        ...v
    } = t;
    const {
        i18n: y,
        defaultNS: l
    } = N.useContext(Z) || {}, f = $ || y || z(), u = T || f && f.t.bind(f);
    return ye({
        children: e,
        count: n,
        parent: o,
        i18nKey: c,
        context: s,
        tOptions: i,
        values: p,
        defaults: g,
        components: a,
        ns: h || u && u.ns || l || f && f.options && f.options.defaultNS,
        i18n: f,
        t: T,
        shouldUnescape: x,
        ...v
    })
}
const xe = (t, e) => {
    const n = N.useRef();
    return N.useEffect(() => {
        n.current = t
    }, [t, e]), n.current
};

function Ce(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {
        i18n: n
    } = e, {
        i18n: o,
        defaultNS: c
    } = N.useContext(Z) || {}, s = n || o || z();
    if (s && !s.reportNamespaces && (s.reportNamespaces = new be), !s) {
        P("You will need to pass in an i18next instance by using initReactI18next");
        const m = (d, r) => typeof r == "string" ? r : r && typeof r == "object" && typeof r.defaultValue == "string" ? r.defaultValue : Array.isArray(d) ? d[d.length - 1] : d,
            b = [m, {}, !1];
        return b.t = m, b.i18n = {}, b.ready = !1, b
    }
    s.options.react && s.options.react.wait !== void 0 && P("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
    const i = { ...q(),
            ...s.options.react,
            ...e
        },
        {
            useSuspense: p,
            keyPrefix: g
        } = i;
    let a = t || c || s.options && s.options.defaultNS;
    a = typeof a == "string" ? [a] : a || ["translation"], s.reportNamespaces.addUsedNamespaces && s.reportNamespaces.addUsedNamespaces(a);
    const h = (s.isInitialized || s.initializedStoreOnce) && a.every(m => ie(m, s, i));

    function $() {
        return s.getFixedT(e.lng || null, i.nsMode === "fallback" ? a : a[0], g)
    }
    const [T, x] = N.useState($);
    let v = a.join();
    e.lng && (v = `${e.lng}${v}`);
    const y = xe(v),
        l = N.useRef(!0);
    N.useEffect(() => {
        const {
            bindI18n: m,
            bindI18nStore: b
        } = i;
        l.current = !0, !h && !p && (e.lng ? D(s, e.lng, a, () => {
            l.current && x($)
        }) : U(s, a, () => {
            l.current && x($)
        })), h && y && y !== v && l.current && x($);

        function d() {
            l.current && x($)
        }
        return m && s && s.on(m, d), b && s && s.store.on(b, d), () => {
            l.current = !1, m && s && m.split(" ").forEach(r => s.off(r, d)), b && s && b.split(" ").forEach(r => s.store.off(r, d))
        }
    }, [s, v]);
    const f = N.useRef(!0);
    N.useEffect(() => {
        l.current && !f.current && x($), f.current = !1
    }, [s, g]);
    const u = [T, s, h];
    if (u.t = T, u.i18n = s, u.ready = h, h || !h && !p) return u;
    throw new Promise(m => {
        e.lng ? D(s, e.lng, a, () => m()) : U(s, a, () => m())
    })
}
export {
    $e as T, Ee as i, Ce as u
};
//# sourceMappingURL=react-i18next-wEu7J75T.js.map