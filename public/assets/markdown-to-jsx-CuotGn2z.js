import {
    r as R
} from "./vendor-DR5RWKqR.js";

function A() {
    return A = Object.assign ? Object.assign.bind() : function(t) {
        for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var l in o) Object.prototype.hasOwnProperty.call(o, l) && (t[l] = o[l])
        }
        return t
    }, A.apply(this, arguments)
}
const ve = ["children", "options"];
var W, Z;
(function(t) {
    t.blockQuote = "0", t.breakLine = "1", t.breakThematic = "2", t.codeBlock = "3", t.codeFenced = "4", t.codeInline = "5", t.footnote = "6", t.footnoteReference = "7", t.gfmTask = "8", t.heading = "9", t.headingSetext = "10", t.htmlBlock = "11", t.htmlComment = "12", t.htmlSelfClosing = "13", t.image = "14", t.link = "15", t.linkAngleBraceStyleDetector = "16", t.linkBareUrlDetector = "17", t.linkMailtoDetector = "18", t.newlineCoalescer = "19", t.orderedList = "20", t.paragraph = "21", t.ref = "22", t.refImage = "23", t.refLink = "24", t.table = "25", t.tableSeparator = "26", t.text = "27", t.textBolded = "28", t.textEmphasized = "29", t.textEscaped = "30", t.textMarked = "31", t.textStrikethroughed = "32", t.unorderedList = "33"
})(W || (W = {})),
function(t) {
    t[t.MAX = 0] = "MAX", t[t.HIGH = 1] = "HIGH", t[t.MED = 2] = "MED", t[t.LOW = 3] = "LOW", t[t.MIN = 4] = "MIN"
}(Z || (Z = {}));
const q = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((t, i) => (t[i.toLowerCase()] = i, t), {
        for: "htmlFor"
    }),
    V = {
        amp: "&",
        apos: "'",
        gt: ">",
        lt: "<",
        nbsp: " ",
        quot: "“"
    },
    be = ["style", "script"],
    $e = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
    Ee = /mailto:/i,
    we = /\n{2,}$/,
    ee = /^(\s*>[\s\S]*?)(?=\n{2,})/,
    Se = /^ *> ?/gm,
    Ce = /^ {2,}\n/,
    Ae = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
    ne = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
    te = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
    Oe = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
    Te = /^(?:\n *)*\n/,
    Le = /\r\n?/g,
    Me = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,
    Re = /^\[\^([^\]]+)]/,
    ze = /\f/g,
    Ie = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,
    Ue = /^\s*?\[(x|\s)\]/,
    re = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
    ie = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
    le = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
    D = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,
    je = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
    oe = /^<!--[\s\S]*?(?:-->)/,
    Be = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
    P = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
    Ne = /^\{.*\}$/,
    He = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
    De = /^<([^ >]+@[^ >]+)>/,
    Pe = /^<([^ >]+:\/[^ >]+)>/,
    _e = /-([a-z])?/gi,
    ce = /^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,
    Fe = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
    Ge = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
    We = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
    Ze = /(\[|\])/g,
    qe = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
    Ve = /\t/g,
    Xe = /(^ *\||\| *$)/g,
    Qe = /^ *:-+: *$/,
    Je = /^ *:-+ *$/,
    Ke = /^ *-+: *$/,
    I = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",
    Ye = new RegExp(`^([*_])\\1${I}\\1\\1(?!\\1)`),
    en = new RegExp(`^([*_])${I}\\1(?!\\1|\\w)`),
    nn = new RegExp(`^==${I}==`),
    tn = new RegExp(`^~~${I}~~`),
    rn = /^\\([^0-9A-Za-z\s])/,
    ln = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
    on = /^\n+/,
    cn = /^([ \t]*)/,
    an = /\\([^\\])/g,
    X = / *\n+$/,
    sn = /(?:^|\n)( *)$/,
    _ = "(?:\\d+\\.)",
    F = "(?:[*+-])";

function ae(t) {
    return "( *)(" + (t === 1 ? _ : F) + ") +"
}
const se = ae(1),
    de = ae(2);

function ue(t) {
    return new RegExp("^" + (t === 1 ? se : de))
}
const dn = ue(1),
    un = ue(2);

function pe(t) {
    return new RegExp("^" + (t === 1 ? se : de) + "[^\\n]*(?:\\n(?!\\1" + (t === 1 ? _ : F) + " )[^\\n]*)*(\\n|$)", "gm")
}
const fe = pe(1),
    he = pe(2);

function me(t) {
    const i = t === 1 ? _ : F;
    return new RegExp("^( *)(" + i + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + i + " (?!" + i + " ))\\n*|\\s*\\n*$)")
}
const ge = me(1),
    ye = me(2);

function Q(t, i) {
    const o = i === 1,
        l = o ? ge : ye,
        p = o ? fe : he,
        m = o ? dn : un;
    return {
        match(f, s, d) {
            const v = sn.exec(d);
            return v && (s.list || !s.inline && !s.simple) ? l.exec(f = v[1] + f) : null
        },
        order: 1,
        parse(f, s, d) {
            const v = o ? +f[2] : void 0,
                C = f[0].replace(we, `
`).match(p);
            let T = !1;
            return {
                items: C.map(function(L, e) {
                    const r = m.exec(L)[0].length,
                        n = new RegExp("^ {1," + r + "}", "gm"),
                        a = L.replace(n, "").replace(m, ""),
                        c = e === C.length - 1,
                        u = a.indexOf(`

`) !== -1 || c && T;
                    T = u;
                    const h = d.inline,
                        k = d.list;
                    let x;
                    d.list = !0, u ? (d.inline = !1, x = a.replace(X, `

`)) : (d.inline = !0, x = a.replace(X, ""));
                    const b = s(x, d);
                    return d.inline = h, d.list = k, b
                }),
                ordered: o,
                start: v
            }
        },
        render: (f, s, d) => t(f.ordered ? "ol" : "ul", {
            key: d.key,
            start: f.type === "20" ? f.start : void 0
        }, f.items.map(function(v, C) {
            return t("li", {
                key: C
            }, s(v, d))
        }))
    }
}
const pn = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`),
    fn = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
    ke = [ee, ne, te, re, le, ie, oe, ce, fe, ge, he, ye],
    hn = [...ke, /^[^\n]+(?:  \n|\n{2,})/, D, P];

function mn(t) {
    return t.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
}

function gn(t) {
    return Ke.test(t) ? "right" : Qe.test(t) ? "center" : Je.test(t) ? "left" : null
}

function J(t, i, o, l) {
    const p = o.inTable;
    o.inTable = !0;
    let m = t.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce((s, d) => (d.trim() === "|" ? s.push(l ? {
        type: "26"
    } : {
        type: "27",
        text: d
    }) : d !== "" && s.push.apply(s, i(d, o)), s), []);
    o.inTable = p;
    let f = [
        []
    ];
    return m.forEach(function(s, d) {
        s.type === "26" ? d !== 0 && d !== m.length - 1 && f.push([]) : (s.type !== "27" || m[d + 1] != null && m[d + 1].type !== "26" || (s.text = s.text.trimEnd()), f[f.length - 1].push(s))
    }), f
}

function yn(t, i, o) {
    o.inline = !0;
    const l = t[2] ? t[2].replace(Xe, "").split("|").map(gn) : [],
        p = t[3] ? function(f, s, d) {
            return f.trim().split(`
`).map(function(v) {
                return J(v, s, d, !0)
            })
        }(t[3], i, o) : [],
        m = J(t[1], i, o, !!p.length);
    return o.inline = !1, p.length ? {
        align: l,
        cells: p,
        header: m,
        type: "25"
    } : {
        children: m,
        type: "21"
    }
}

function K(t, i) {
    return t.align[i] == null ? {} : {
        textAlign: t.align[i]
    }
}

function w(t) {
    return function(i, o) {
        return o.inline ? t.exec(i) : null
    }
}

function S(t) {
    return function(i, o) {
        return o.inline || o.simple ? t.exec(i) : null
    }
}

function $(t) {
    return function(i, o) {
        return o.inline || o.simple ? null : t.exec(i)
    }
}

function M(t) {
    return function(i) {
        return t.exec(i)
    }
}

function kn(t, i, o) {
    if (i.inline || i.simple || o && !o.endsWith(`
`)) return null;
    let l = "";
    t.split(`
`).every(m => !ke.some(f => f.test(m)) && (l += m + `
`, m.trim()));
    const p = l.trimEnd();
    return p == "" ? null : [l, p]
}

function O(t) {
    try {
        if (decodeURIComponent(t).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return
    } catch {
        return null
    }
    return t
}

function Y(t) {
    return t.replace(an, "$1")
}

function z(t, i, o) {
    const l = o.inline || !1,
        p = o.simple || !1;
    o.inline = !0, o.simple = !0;
    const m = t(i, o);
    return o.inline = l, o.simple = p, m
}

function xn(t, i, o) {
    const l = o.inline || !1,
        p = o.simple || !1;
    o.inline = !1, o.simple = !0;
    const m = t(i, o);
    return o.inline = l, o.simple = p, m
}

function vn(t, i, o) {
    const l = o.inline || !1;
    o.inline = !1;
    const p = t(i, o);
    return o.inline = l, p
}
const j = (t, i, o) => ({
    children: z(i, t[1], o)
});

function B() {
    return {}
}

function N() {
    return null
}

function bn(...t) {
    return t.filter(Boolean).join(" ")
}

function H(t, i, o) {
    let l = t;
    const p = i.split(".");
    for (; p.length && (l = l[p[0]], l !== void 0);) p.shift();
    return l || o
}

function $n(t = "", i = {}) {
    i.overrides = i.overrides || {}, i.slugify = i.slugify || mn, i.namedCodesToUnicode = i.namedCodesToUnicode ? A({}, V, i.namedCodesToUnicode) : V;
    const o = i.createElement || R.createElement;

    function l(e, r, ...n) {
        const a = H(i.overrides, `${e}.props`, {});
        return o(function(c, u) {
            const h = H(u, c);
            return h ? typeof h == "function" || typeof h == "object" && "render" in h ? h : H(u, `${c}.component`, c) : c
        }(e, i.overrides), A({}, r, a, {
            className: bn(r == null ? void 0 : r.className, a.className) || void 0
        }), ...n)
    }

    function p(e) {
        e = e.replace(Ie, "");
        let r = !1;
        i.forceInline ? r = !0 : i.forceBlock || (r = qe.test(e) === !1);
        const n = C(v(r ? e : `${e.trimEnd().replace(on,"")}

`, {
            inline: r
        }));
        for (; typeof n[n.length - 1] == "string" && !n[n.length - 1].trim();) n.pop();
        if (i.wrapper === null) return n;
        const a = i.wrapper || (r ? "span" : "div");
        let c;
        if (n.length > 1 || i.forceWrapper) c = n;
        else {
            if (n.length === 1) return c = n[0], typeof c == "string" ? l("span", {
                key: "outer"
            }, c) : c;
            c = null
        }
        return R.createElement(a, {
            key: "outer"
        }, c)
    }

    function m(e) {
        const r = e.match($e);
        return r ? r.reduce(function(n, a, c) {
            const u = a.indexOf("=");
            if (u !== -1) {
                const h = function(g) {
                        return g.indexOf("-") !== -1 && g.match(Be) === null && (g = g.replace(_e, function(y, E) {
                            return E.toUpperCase()
                        })), g
                    }(a.slice(0, u)).trim(),
                    k = function(g) {
                        const y = g[0];
                        return (y === '"' || y === "'") && g.length >= 2 && g[g.length - 1] === y ? g.slice(1, -1) : g
                    }(a.slice(u + 1).trim()),
                    x = q[h] || h,
                    b = n[x] = function(g, y) {
                        return g === "style" ? y.split(/;\s?/).reduce(function(E, U) {
                            const G = U.slice(0, U.indexOf(":"));
                            return E[G.trim().replace(/(-[a-z])/g, xe => xe[1].toUpperCase())] = U.slice(G.length + 1).trim(), E
                        }, {}) : g === "href" || g === "src" ? O(y) : (y.match(Ne) && (y = y.slice(1, y.length - 1)), y === "true" || y !== "false" && y)
                    }(h, k);
                typeof b == "string" && (D.test(b) || P.test(b)) && (n[x] = R.cloneElement(p(b.trim()), {
                    key: c
                }))
            } else a !== "style" && (n[q[a] || a] = !0);
            return n
        }, {}) : null
    }
    const f = [],
        s = {},
        d = {
            0: {
                match: $(ee),
                order: 1,
                parse: (e, r, n) => ({
                    children: r(e[0].replace(Se, ""), n)
                }),
                render: (e, r, n) => l("blockquote", {
                    key: n.key
                }, r(e.children, n))
            },
            1: {
                match: M(Ce),
                order: 1,
                parse: B,
                render: (e, r, n) => l("br", {
                    key: n.key
                })
            },
            2: {
                match: $(Ae),
                order: 1,
                parse: B,
                render: (e, r, n) => l("hr", {
                    key: n.key
                })
            },
            3: {
                match: $(te),
                order: 0,
                parse: e => ({
                    lang: void 0,
                    text: e[0].replace(/^ {4}/gm, "").replace(/\n+$/, "")
                }),
                render: (e, r, n) => l("pre", {
                    key: n.key
                }, l("code", A({}, e.attrs, {
                    className: e.lang ? `lang-${e.lang}` : ""
                }), e.text))
            },
            4: {
                match: $(ne),
                order: 0,
                parse: e => ({
                    attrs: m(e[3] || ""),
                    lang: e[2] || void 0,
                    text: e[4],
                    type: "3"
                })
            },
            5: {
                match: S(Oe),
                order: 3,
                parse: e => ({
                    text: e[2]
                }),
                render: (e, r, n) => l("code", {
                    key: n.key
                }, e.text)
            },
            6: {
                match: $(Me),
                order: 0,
                parse: e => (f.push({
                    footnote: e[2],
                    identifier: e[1]
                }), {}),
                render: N
            },
            7: {
                match: w(Re),
                order: 1,
                parse: e => ({
                    target: `#${i.slugify(e[1])}`,
                    text: e[1]
                }),
                render: (e, r, n) => l("a", {
                    key: n.key,
                    href: O(e.target)
                }, l("sup", {
                    key: n.key
                }, e.text))
            },
            8: {
                match: w(Ue),
                order: 1,
                parse: e => ({
                    completed: e[1].toLowerCase() === "x"
                }),
                render: (e, r, n) => l("input", {
                    checked: e.completed,
                    key: n.key,
                    readOnly: !0,
                    type: "checkbox"
                })
            },
            9: {
                match: $(i.enforceAtxHeadings ? ie : re),
                order: 1,
                parse: (e, r, n) => ({
                    children: z(r, e[2], n),
                    id: i.slugify(e[2]),
                    level: e[1].length
                }),
                render: (e, r, n) => l(`h${e.level}`, {
                    id: e.id,
                    key: n.key
                }, r(e.children, n))
            },
            10: {
                match: $(le),
                order: 0,
                parse: (e, r, n) => ({
                    children: z(r, e[1], n),
                    level: e[2] === "=" ? 1 : 2,
                    type: "9"
                })
            },
            11: {
                match: M(D),
                order: 1,
                parse(e, r, n) {
                    const [, a] = e[3].match(cn), c = new RegExp(`^${a}`, "gm"), u = e[3].replace(c, ""), h = (k = u, hn.some(y => y.test(k)) ? vn : z);
                    var k;
                    const x = e[1].toLowerCase(),
                        b = be.indexOf(x) !== -1,
                        g = {
                            attrs: m(e[2]),
                            noInnerParse: b,
                            tag: (b ? x : e[1]).trim()
                        };
                    return n.inAnchor = n.inAnchor || x === "a", b ? g.text = e[3] : g.children = h(r, u, n), n.inAnchor = !1, g
                },
                render: (e, r, n) => l(e.tag, A({
                    key: n.key
                }, e.attrs), e.text || r(e.children, n))
            },
            13: {
                match: M(P),
                order: 1,
                parse: e => ({
                    attrs: m(e[2] || ""),
                    tag: e[1].trim()
                }),
                render: (e, r, n) => l(e.tag, A({}, e.attrs, {
                    key: n.key
                }))
            },
            12: {
                match: M(oe),
                order: 1,
                parse: () => ({}),
                render: N
            },
            14: {
                match: S(fn),
                order: 1,
                parse: e => ({
                    alt: e[1],
                    target: Y(e[2]),
                    title: e[3]
                }),
                render: (e, r, n) => l("img", {
                    key: n.key,
                    alt: e.alt || void 0,
                    title: e.title || void 0,
                    src: O(e.target)
                })
            },
            15: {
                match: w(pn),
                order: 3,
                parse: (e, r, n) => ({
                    children: xn(r, e[1], n),
                    target: Y(e[2]),
                    title: e[3]
                }),
                render: (e, r, n) => l("a", {
                    key: n.key,
                    href: O(e.target),
                    title: e.title
                }, r(e.children, n))
            },
            16: {
                match: w(Pe),
                order: 0,
                parse: e => ({
                    children: [{
                        text: e[1],
                        type: "27"
                    }],
                    target: e[1],
                    type: "15"
                })
            },
            17: {
                match: (e, r) => r.inAnchor ? null : w(He)(e, r),
                order: 0,
                parse: e => ({
                    children: [{
                        text: e[1],
                        type: "27"
                    }],
                    target: e[1],
                    title: void 0,
                    type: "15"
                })
            },
            18: {
                match: w(De),
                order: 0,
                parse(e) {
                    let r = e[1],
                        n = e[1];
                    return Ee.test(n) || (n = "mailto:" + n), {
                        children: [{
                            text: r.replace("mailto:", ""),
                            type: "27"
                        }],
                        target: n,
                        type: "15"
                    }
                }
            },
            20: Q(l, 1),
            33: Q(l, 2),
            19: {
                match: $(Te),
                order: 3,
                parse: B,
                render: () => `
`
            },
            21: {
                match: kn,
                order: 3,
                parse: j,
                render: (e, r, n) => l("p", {
                    key: n.key
                }, r(e.children, n))
            },
            22: {
                match: w(Fe),
                order: 0,
                parse: e => (s[e[1]] = {
                    target: e[2],
                    title: e[4]
                }, {}),
                render: N
            },
            23: {
                match: S(Ge),
                order: 0,
                parse: e => ({
                    alt: e[1] || void 0,
                    ref: e[2]
                }),
                render: (e, r, n) => s[e.ref] ? l("img", {
                    key: n.key,
                    alt: e.alt,
                    src: O(s[e.ref].target),
                    title: s[e.ref].title
                }) : null
            },
            24: {
                match: w(We),
                order: 0,
                parse: (e, r, n) => ({
                    children: r(e[1], n),
                    fallbackChildren: r(e[0].replace(Ze, "\\$1"), n),
                    ref: e[2]
                }),
                render: (e, r, n) => s[e.ref] ? l("a", {
                    key: n.key,
                    href: O(s[e.ref].target),
                    title: s[e.ref].title
                }, r(e.children, n)) : l("span", {
                    key: n.key
                }, r(e.fallbackChildren, n))
            },
            25: {
                match: $(ce),
                order: 1,
                parse: yn,
                render(e, r, n) {
                    const a = e;
                    return l("table", {
                        key: n.key
                    }, l("thead", null, l("tr", null, a.header.map(function(c, u) {
                        return l("th", {
                            key: u,
                            style: K(a, u)
                        }, r(c, n))
                    }))), l("tbody", null, a.cells.map(function(c, u) {
                        return l("tr", {
                            key: u
                        }, c.map(function(h, k) {
                            return l("td", {
                                key: k,
                                style: K(a, k)
                            }, r(h, n))
                        }))
                    })))
                }
            },
            27: {
                match: M(ln),
                order: 4,
                parse: e => ({
                    text: e[0].replace(je, (r, n) => i.namedCodesToUnicode[n] ? i.namedCodesToUnicode[n] : r)
                }),
                render: e => e.text
            },
            28: {
                match: S(Ye),
                order: 2,
                parse: (e, r, n) => ({
                    children: r(e[2], n)
                }),
                render: (e, r, n) => l("strong", {
                    key: n.key
                }, r(e.children, n))
            },
            29: {
                match: S(en),
                order: 3,
                parse: (e, r, n) => ({
                    children: r(e[2], n)
                }),
                render: (e, r, n) => l("em", {
                    key: n.key
                }, r(e.children, n))
            },
            30: {
                match: S(rn),
                order: 1,
                parse: e => ({
                    text: e[1],
                    type: "27"
                })
            },
            31: {
                match: S(nn),
                order: 3,
                parse: j,
                render: (e, r, n) => l("mark", {
                    key: n.key
                }, r(e.children, n))
            },
            32: {
                match: S(tn),
                order: 3,
                parse: j,
                render: (e, r, n) => l("del", {
                    key: n.key
                }, r(e.children, n))
            }
        };
    i.disableParsingRawHTML === !0 && (delete d[11], delete d[13]);
    const v = function(e) {
            let r = Object.keys(e);

            function n(a, c) {
                let u = [],
                    h = "";
                for (; a;) {
                    let k = 0;
                    for (; k < r.length;) {
                        const x = r[k],
                            b = e[x],
                            g = b.match(a, c, h);
                        if (g) {
                            const y = g[0];
                            a = a.substring(y.length);
                            const E = b.parse(g, n, c);
                            E.type == null && (E.type = x), u.push(E), h = y;
                            break
                        }
                        k++
                    }
                }
                return u
            }
            return r.sort(function(a, c) {
                    let u = e[a].order,
                        h = e[c].order;
                    return u !== h ? u - h : a < c ? -1 : 1
                }),
                function(a, c) {
                    return n(function(u) {
                        return u.replace(Le, `
`).replace(ze, "").replace(Ve, "    ")
                    }(a), c)
                }
        }(d),
        C = (T = function(e, r) {
            return function(n, a, c) {
                const u = e[n.type].render;
                return r ? r(() => u(n, a, c), n, a, c) : u(n, a, c)
            }
        }(d, i.renderRule), function e(r, n = {}) {
            if (Array.isArray(r)) {
                const a = n.key,
                    c = [];
                let u = !1;
                for (let h = 0; h < r.length; h++) {
                    n.key = h;
                    const k = e(r[h], n),
                        x = typeof k == "string";
                    x && u ? c[c.length - 1] += k : k !== null && c.push(k), u = x
                }
                return n.key = a, c
            }
            return T(r, e, n)
        });
    var T;
    const L = p(t);
    return f.length ? l("div", null, L, l("footer", {
        key: "footer"
    }, f.map(function(e) {
        return l("div", {
            id: i.slugify(e.identifier),
            key: e.identifier
        }, e.identifier, C(v(e.footnote, {
            inline: !0
        })))
    }))) : L
}
const wn = t => {
    let {
        children: i = "",
        options: o
    } = t, l = function(p, m) {
        if (p == null) return {};
        var f, s, d = {},
            v = Object.keys(p);
        for (s = 0; s < v.length; s++) m.indexOf(f = v[s]) >= 0 || (d[f] = p[f]);
        return d
    }(t, ve);
    return R.cloneElement($n(i, o), l)
};
export {
    wn as M
};
//# sourceMappingURL=markdown-to-jsx-CuotGn2z.js.map