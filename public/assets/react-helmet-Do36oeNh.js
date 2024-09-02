import {
    g as M,
    r as te,
    R as I
} from "./vendor-DR5RWKqR.js";
var W = {
        exports: {}
    },
    re = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    ne = re,
    oe = ne;

function z() {}

function V() {}
V.resetWarningCache = z;
var ae = function() {
    function t(r, o, a, s, i, c) {
        if (c !== oe) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation", u
        }
    }
    t.isRequired = t;

    function e() {
        return t
    }
    var n = {
        array: t,
        bigint: t,
        bool: t,
        func: t,
        number: t,
        object: t,
        string: t,
        symbol: t,
        any: t,
        arrayOf: e,
        element: t,
        elementType: t,
        instanceOf: e,
        node: t,
        objectOf: e,
        oneOf: e,
        oneOfType: e,
        shape: e,
        exact: e,
        checkPropTypes: V,
        resetWarningCache: z
    };
    return n.PropTypes = n, n
};
W.exports = ae();
var ie = W.exports;
const m = M(ie);

function ce(t) {
    return t && typeof t == "object" && "default" in t ? t.default : t
}
var X = te,
    ue = ce(X);

function U(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}

function se(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
}
var fe = !!(typeof window < "u" && window.document && window.document.createElement);

function le(t, e, n) {
    if (typeof t != "function") throw new Error("Expected reducePropsToState to be a function.");
    if (typeof e != "function") throw new Error("Expected handleStateChangeOnClient to be a function.");
    if (typeof n < "u" && typeof n != "function") throw new Error("Expected mapStateOnServer to either be undefined or a function.");

    function r(o) {
        return o.displayName || o.name || "Component"
    }
    return function(a) {
        if (typeof a != "function") throw new Error("Expected WrappedComponent to be a React component.");
        var s = [],
            i;

        function c() {
            i = t(s.map(function(f) {
                return f.props
            })), u.canUseDOM ? e(i) : n && (i = n(i))
        }
        var u = function(f) {
            se(p, f);

            function p() {
                return f.apply(this, arguments) || this
            }
            p.peek = function() {
                return i
            }, p.rewind = function() {
                if (p.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                var y = i;
                return i = void 0, s = [], y
            };
            var T = p.prototype;
            return T.UNSAFE_componentWillMount = function() {
                s.push(this), c()
            }, T.componentDidUpdate = function() {
                c()
            }, T.componentWillUnmount = function() {
                var y = s.indexOf(this);
                s.splice(y, 1), c()
            }, T.render = function() {
                return ue.createElement(a, this.props)
            }, p
        }(X.PureComponent);
        return U(u, "displayName", "SideEffect(" + r(a) + ")"), U(u, "canUseDOM", fe), u
    }
}
var pe = le;
const Te = M(pe);
var de = typeof Element < "u",
    me = typeof Map == "function",
    ve = typeof Set == "function",
    he = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;

function j(t, e) {
    if (t === e) return !0;
    if (t && e && typeof t == "object" && typeof e == "object") {
        if (t.constructor !== e.constructor) return !1;
        var n, r, o;
        if (Array.isArray(t)) {
            if (n = t.length, n != e.length) return !1;
            for (r = n; r-- !== 0;)
                if (!j(t[r], e[r])) return !1;
            return !0
        }
        var a;
        if (me && t instanceof Map && e instanceof Map) {
            if (t.size !== e.size) return !1;
            for (a = t.entries(); !(r = a.next()).done;)
                if (!e.has(r.value[0])) return !1;
            for (a = t.entries(); !(r = a.next()).done;)
                if (!j(r.value[1], e.get(r.value[0]))) return !1;
            return !0
        }
        if (ve && t instanceof Set && e instanceof Set) {
            if (t.size !== e.size) return !1;
            for (a = t.entries(); !(r = a.next()).done;)
                if (!e.has(r.value[0])) return !1;
            return !0
        }
        if (he && ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
            if (n = t.length, n != e.length) return !1;
            for (r = n; r-- !== 0;)
                if (t[r] !== e[r]) return !1;
            return !0
        }
        if (t.constructor === RegExp) return t.source === e.source && t.flags === e.flags;
        if (t.valueOf !== Object.prototype.valueOf && typeof t.valueOf == "function" && typeof e.valueOf == "function") return t.valueOf() === e.valueOf();
        if (t.toString !== Object.prototype.toString && typeof t.toString == "function" && typeof e.toString == "function") return t.toString() === e.toString();
        if (o = Object.keys(t), n = o.length, n !== Object.keys(e).length) return !1;
        for (r = n; r-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(e, o[r])) return !1;
        if (de && t instanceof Element) return !1;
        for (r = n; r-- !== 0;)
            if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && t.$$typeof) && !j(t[o[r]], e[o[r]])) return !1;
        return !0
    }
    return t !== t && e !== e
}
var ye = function(e, n) {
    try {
        return j(e, n)
    } catch (r) {
        if ((r.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
        throw r
    }
};
const ge = M(ye);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var B = Object.getOwnPropertySymbols,
    Ee = Object.prototype.hasOwnProperty,
    Ae = Object.prototype.propertyIsEnumerable;

function be(t) {
    if (t == null) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(t)
}

function Oe() {
    try {
        if (!Object.assign) return !1;
        var t = new String("abc");
        if (t[5] = "de", Object.getOwnPropertyNames(t)[0] === "5") return !1;
        for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
        var r = Object.getOwnPropertyNames(e).map(function(a) {
            return e[a]
        });
        if (r.join("") !== "0123456789") return !1;
        var o = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(a) {
            o[a] = a
        }), Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    } catch {
        return !1
    }
}
var Se = Oe() ? Object.assign : function(t, e) {
    for (var n, r = be(t), o, a = 1; a < arguments.length; a++) {
        n = Object(arguments[a]);
        for (var s in n) Ee.call(n, s) && (r[s] = n[s]);
        if (B) {
            o = B(n);
            for (var i = 0; i < o.length; i++) Ae.call(n, o[i]) && (r[o[i]] = n[o[i]])
        }
    }
    return r
};
const Ce = M(Se);
var S = {
        BODY: "bodyAttributes",
        HTML: "htmlAttributes",
        TITLE: "titleAttributes"
    },
    l = {
        BASE: "base",
        BODY: "body",
        HEAD: "head",
        HTML: "html",
        LINK: "link",
        META: "meta",
        NOSCRIPT: "noscript",
        SCRIPT: "script",
        STYLE: "style",
        TITLE: "title"
    };
Object.keys(l).map(function(t) {
    return l[t]
});
var v = {
        CHARSET: "charset",
        CSS_TEXT: "cssText",
        HREF: "href",
        HTTPEQUIV: "http-equiv",
        INNER_HTML: "innerHTML",
        ITEM_PROP: "itemprop",
        NAME: "name",
        PROPERTY: "property",
        REL: "rel",
        SRC: "src",
        TARGET: "target"
    },
    N = {
        accesskey: "accessKey",
        charset: "charSet",
        class: "className",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        "http-equiv": "httpEquiv",
        itemprop: "itemProp",
        tabindex: "tabIndex"
    },
    L = {
        DEFAULT_TITLE: "defaultTitle",
        DEFER: "defer",
        ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
        ON_CHANGE_CLIENT_STATE: "onChangeClientState",
        TITLE_TEMPLATE: "titleTemplate"
    },
    Pe = Object.keys(N).reduce(function(t, e) {
        return t[N[e]] = e, t
    }, {}),
    we = [l.NOSCRIPT, l.SCRIPT, l.STYLE],
    g = "data-react-helmet",
    Re = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    _e = function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    },
    Ie = function() {
        function t(e, n) {
            for (var r = 0; r < n.length; r++) {
                var o = n[r];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(),
    h = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    },
    Le = function(t, e) {
        if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    },
    q = function(t, e) {
        var n = {};
        for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n
    },
    je = function(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e && (typeof e == "object" || typeof e == "function") ? e : t
    },
    x = function(e) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        return n === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    },
    Ne = function(e) {
        var n = P(e, l.TITLE),
            r = P(e, L.TITLE_TEMPLATE);
        if (r && n) return r.replace(/%s/g, function() {
            return Array.isArray(n) ? n.join("") : n
        });
        var o = P(e, L.DEFAULT_TITLE);
        return n || o || void 0
    },
    Me = function(e) {
        return P(e, L.ON_CHANGE_CLIENT_STATE) || function() {}
    },
    H = function(e, n) {
        return n.filter(function(r) {
            return typeof r[e] < "u"
        }).map(function(r) {
            return r[e]
        }).reduce(function(r, o) {
            return h({}, r, o)
        }, {})
    },
    He = function(e, n) {
        return n.filter(function(r) {
            return typeof r[l.BASE] < "u"
        }).map(function(r) {
            return r[l.BASE]
        }).reverse().reduce(function(r, o) {
            if (!r.length)
                for (var a = Object.keys(o), s = 0; s < a.length; s++) {
                    var i = a[s],
                        c = i.toLowerCase();
                    if (e.indexOf(c) !== -1 && o[c]) return r.concat(o)
                }
            return r
        }, [])
    },
    R = function(e, n, r) {
        var o = {};
        return r.filter(function(a) {
            return Array.isArray(a[e]) ? !0 : (typeof a[e] < "u" && ke("Helmet: " + e + ' should be of type "Array". Instead found type "' + Re(a[e]) + '"'), !1)
        }).map(function(a) {
            return a[e]
        }).reverse().reduce(function(a, s) {
            var i = {};
            s.filter(function(T) {
                for (var d = void 0, y = Object.keys(T), E = 0; E < y.length; E++) {
                    var A = y[E],
                        b = A.toLowerCase();
                    n.indexOf(b) !== -1 && !(d === v.REL && T[d].toLowerCase() === "canonical") && !(b === v.REL && T[b].toLowerCase() === "stylesheet") && (d = b), n.indexOf(A) !== -1 && (A === v.INNER_HTML || A === v.CSS_TEXT || A === v.ITEM_PROP) && (d = A)
                }
                if (!d || !T[d]) return !1;
                var w = T[d].toLowerCase();
                return o[d] || (o[d] = {}), i[d] || (i[d] = {}), o[d][w] ? !1 : (i[d][w] = !0, !0)
            }).reverse().forEach(function(T) {
                return a.push(T)
            });
            for (var c = Object.keys(i), u = 0; u < c.length; u++) {
                var f = c[u],
                    p = Ce({}, o[f], i[f]);
                o[f] = p
            }
            return a
        }, []).reverse()
    },
    P = function(e, n) {
        for (var r = e.length - 1; r >= 0; r--) {
            var o = e[r];
            if (o.hasOwnProperty(n)) return o[n]
        }
        return null
    },
    xe = function(e) {
        return {
            baseTag: He([v.HREF, v.TARGET], e),
            bodyAttributes: H(S.BODY, e),
            defer: P(e, L.DEFER),
            encode: P(e, L.ENCODE_SPECIAL_CHARACTERS),
            htmlAttributes: H(S.HTML, e),
            linkTags: R(l.LINK, [v.REL, v.HREF], e),
            metaTags: R(l.META, [v.NAME, v.CHARSET, v.HTTPEQUIV, v.PROPERTY, v.ITEM_PROP], e),
            noscriptTags: R(l.NOSCRIPT, [v.INNER_HTML], e),
            onChangeClientState: Me(e),
            scriptTags: R(l.SCRIPT, [v.SRC, v.INNER_HTML], e),
            styleTags: R(l.STYLE, [v.CSS_TEXT], e),
            title: Ne(e),
            titleAttributes: H(S.TITLE, e)
        }
    },
    F = function() {
        var t = Date.now();
        return function(e) {
            var n = Date.now();
            n - t > 16 ? (t = n, e(n)) : setTimeout(function() {
                F(e)
            }, 0)
        }
    }(),
    Y = function(e) {
        return clearTimeout(e)
    },
    Fe = typeof window < "u" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || F : global.requestAnimationFrame || F,
    De = typeof window < "u" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || Y : global.cancelAnimationFrame || Y,
    ke = function(e) {
        return console && typeof console.warn == "function" && console.warn(e)
    },
    _ = null,
    Ue = function(e) {
        _ && De(_), e.defer ? _ = Fe(function() {
            $(e, function() {
                _ = null
            })
        }) : ($(e), _ = null)
    },
    $ = function(e, n) {
        var r = e.baseTag,
            o = e.bodyAttributes,
            a = e.htmlAttributes,
            s = e.linkTags,
            i = e.metaTags,
            c = e.noscriptTags,
            u = e.onChangeClientState,
            f = e.scriptTags,
            p = e.styleTags,
            T = e.title,
            d = e.titleAttributes;
        D(l.BODY, o), D(l.HTML, a), Be(T, d);
        var y = {
                baseTag: C(l.BASE, r),
                linkTags: C(l.LINK, s),
                metaTags: C(l.META, i),
                noscriptTags: C(l.NOSCRIPT, c),
                scriptTags: C(l.SCRIPT, f),
                styleTags: C(l.STYLE, p)
            },
            E = {},
            A = {};
        Object.keys(y).forEach(function(b) {
            var w = y[b],
                k = w.newTags,
                ee = w.oldTags;
            k.length && (E[b] = k), ee.length && (A[b] = y[b].oldTags)
        }), n && n(), u(e, E, A)
    },
    Q = function(e) {
        return Array.isArray(e) ? e.join("") : e
    },
    Be = function(e, n) {
        typeof e < "u" && document.title !== e && (document.title = Q(e)), D(l.TITLE, n)
    },
    D = function(e, n) {
        var r = document.getElementsByTagName(e)[0];
        if (r) {
            for (var o = r.getAttribute(g), a = o ? o.split(",") : [], s = [].concat(a), i = Object.keys(n), c = 0; c < i.length; c++) {
                var u = i[c],
                    f = n[u] || "";
                r.getAttribute(u) !== f && r.setAttribute(u, f), a.indexOf(u) === -1 && a.push(u);
                var p = s.indexOf(u);
                p !== -1 && s.splice(p, 1)
            }
            for (var T = s.length - 1; T >= 0; T--) r.removeAttribute(s[T]);
            a.length === s.length ? r.removeAttribute(g) : r.getAttribute(g) !== i.join(",") && r.setAttribute(g, i.join(","))
        }
    },
    C = function(e, n) {
        var r = document.head || document.querySelector(l.HEAD),
            o = r.querySelectorAll(e + "[" + g + "]"),
            a = Array.prototype.slice.call(o),
            s = [],
            i = void 0;
        return n && n.length && n.forEach(function(c) {
            var u = document.createElement(e);
            for (var f in c)
                if (c.hasOwnProperty(f))
                    if (f === v.INNER_HTML) u.innerHTML = c.innerHTML;
                    else if (f === v.CSS_TEXT) u.styleSheet ? u.styleSheet.cssText = c.cssText : u.appendChild(document.createTextNode(c.cssText));
            else {
                var p = typeof c[f] > "u" ? "" : c[f];
                u.setAttribute(f, p)
            }
            u.setAttribute(g, "true"), a.some(function(T, d) {
                return i = d, u.isEqualNode(T)
            }) ? a.splice(i, 1) : s.push(u)
        }), a.forEach(function(c) {
            return c.parentNode.removeChild(c)
        }), s.forEach(function(c) {
            return r.appendChild(c)
        }), {
            oldTags: a,
            newTags: s
        }
    },
    J = function(e) {
        return Object.keys(e).reduce(function(n, r) {
            var o = typeof e[r] < "u" ? r + '="' + e[r] + '"' : "" + r;
            return n ? n + " " + o : o
        }, "")
    },
    qe = function(e, n, r, o) {
        var a = J(r),
            s = Q(n);
        return a ? "<" + e + " " + g + '="true" ' + a + ">" + x(s, o) + "</" + e + ">" : "<" + e + " " + g + '="true">' + x(s, o) + "</" + e + ">"
    },
    Ye = function(e, n, r) {
        return n.reduce(function(o, a) {
            var s = Object.keys(a).filter(function(u) {
                    return !(u === v.INNER_HTML || u === v.CSS_TEXT)
                }).reduce(function(u, f) {
                    var p = typeof a[f] > "u" ? f : f + '="' + x(a[f], r) + '"';
                    return u ? u + " " + p : p
                }, ""),
                i = a.innerHTML || a.cssText || "",
                c = we.indexOf(e) === -1;
            return o + "<" + e + " " + g + '="true" ' + s + (c ? "/>" : ">" + i + "</" + e + ">")
        }, "")
    },
    Z = function(e) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return Object.keys(e).reduce(function(r, o) {
            return r[N[o] || o] = e[o], r
        }, n)
    },
    $e = function(e) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return Object.keys(e).reduce(function(r, o) {
            return r[Pe[o] || o] = e[o], r
        }, n)
    },
    Ge = function(e, n, r) {
        var o, a = (o = {
                key: n
            }, o[g] = !0, o),
            s = Z(r, a);
        return [I.createElement(l.TITLE, s, n)]
    },
    We = function(e, n) {
        return n.map(function(r, o) {
            var a, s = (a = {
                key: o
            }, a[g] = !0, a);
            return Object.keys(r).forEach(function(i) {
                var c = N[i] || i;
                if (c === v.INNER_HTML || c === v.CSS_TEXT) {
                    var u = r.innerHTML || r.cssText;
                    s.dangerouslySetInnerHTML = {
                        __html: u
                    }
                } else s[c] = r[i]
            }), I.createElement(e, s)
        })
    },
    O = function(e, n, r) {
        switch (e) {
            case l.TITLE:
                return {
                    toComponent: function() {
                        return Ge(e, n.title, n.titleAttributes)
                    },
                    toString: function() {
                        return qe(e, n.title, n.titleAttributes, r)
                    }
                };
            case S.BODY:
            case S.HTML:
                return {
                    toComponent: function() {
                        return Z(n)
                    },
                    toString: function() {
                        return J(n)
                    }
                };
            default:
                return {
                    toComponent: function() {
                        return We(e, n)
                    },
                    toString: function() {
                        return Ye(e, n, r)
                    }
                }
        }
    },
    K = function(e) {
        var n = e.baseTag,
            r = e.bodyAttributes,
            o = e.encode,
            a = e.htmlAttributes,
            s = e.linkTags,
            i = e.metaTags,
            c = e.noscriptTags,
            u = e.scriptTags,
            f = e.styleTags,
            p = e.title,
            T = p === void 0 ? "" : p,
            d = e.titleAttributes;
        return {
            base: O(l.BASE, n, o),
            bodyAttributes: O(S.BODY, r, o),
            htmlAttributes: O(S.HTML, a, o),
            link: O(l.LINK, s, o),
            meta: O(l.META, i, o),
            noscript: O(l.NOSCRIPT, c, o),
            script: O(l.SCRIPT, u, o),
            style: O(l.STYLE, f, o),
            title: O(l.TITLE, {
                title: T,
                titleAttributes: d
            }, o)
        }
    },
    ze = function(e) {
        var n, r;
        return r = n = function(o) {
            Le(a, o);

            function a() {
                return _e(this, a), je(this, o.apply(this, arguments))
            }
            return a.prototype.shouldComponentUpdate = function(i) {
                return !ge(this.props, i)
            }, a.prototype.mapNestedChildrenToProps = function(i, c) {
                if (!c) return null;
                switch (i.type) {
                    case l.SCRIPT:
                    case l.NOSCRIPT:
                        return {
                            innerHTML: c
                        };
                    case l.STYLE:
                        return {
                            cssText: c
                        }
                }
                throw new Error("<" + i.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
            }, a.prototype.flattenArrayTypeChildren = function(i) {
                var c, u = i.child,
                    f = i.arrayTypeChildren,
                    p = i.newChildProps,
                    T = i.nestedChildren;
                return h({}, f, (c = {}, c[u.type] = [].concat(f[u.type] || [], [h({}, p, this.mapNestedChildrenToProps(u, T))]), c))
            }, a.prototype.mapObjectTypeChildren = function(i) {
                var c, u, f = i.child,
                    p = i.newProps,
                    T = i.newChildProps,
                    d = i.nestedChildren;
                switch (f.type) {
                    case l.TITLE:
                        return h({}, p, (c = {}, c[f.type] = d, c.titleAttributes = h({}, T), c));
                    case l.BODY:
                        return h({}, p, {
                            bodyAttributes: h({}, T)
                        });
                    case l.HTML:
                        return h({}, p, {
                            htmlAttributes: h({}, T)
                        })
                }
                return h({}, p, (u = {}, u[f.type] = h({}, T), u))
            }, a.prototype.mapArrayTypeChildrenToProps = function(i, c) {
                var u = h({}, c);
                return Object.keys(i).forEach(function(f) {
                    var p;
                    u = h({}, u, (p = {}, p[f] = i[f], p))
                }), u
            }, a.prototype.warnOnInvalidChildren = function(i, c) {
                return !0
            }, a.prototype.mapChildrenToProps = function(i, c) {
                var u = this,
                    f = {};
                return I.Children.forEach(i, function(p) {
                    if (!(!p || !p.props)) {
                        var T = p.props,
                            d = T.children,
                            y = q(T, ["children"]),
                            E = $e(y);
                        switch (u.warnOnInvalidChildren(p, d), p.type) {
                            case l.LINK:
                            case l.META:
                            case l.NOSCRIPT:
                            case l.SCRIPT:
                            case l.STYLE:
                                f = u.flattenArrayTypeChildren({
                                    child: p,
                                    arrayTypeChildren: f,
                                    newChildProps: E,
                                    nestedChildren: d
                                });
                                break;
                            default:
                                c = u.mapObjectTypeChildren({
                                    child: p,
                                    newProps: c,
                                    newChildProps: E,
                                    nestedChildren: d
                                });
                                break
                        }
                    }
                }), c = this.mapArrayTypeChildrenToProps(f, c), c
            }, a.prototype.render = function() {
                var i = this.props,
                    c = i.children,
                    u = q(i, ["children"]),
                    f = h({}, u);
                return c && (f = this.mapChildrenToProps(c, f)), I.createElement(e, f)
            }, Ie(a, null, [{
                key: "canUseDOM",
                set: function(i) {
                    e.canUseDOM = i
                }
            }]), a
        }(I.Component), n.propTypes = {
            base: m.object,
            bodyAttributes: m.object,
            children: m.oneOfType([m.arrayOf(m.node), m.node]),
            defaultTitle: m.string,
            defer: m.bool,
            encodeSpecialCharacters: m.bool,
            htmlAttributes: m.object,
            link: m.arrayOf(m.object),
            meta: m.arrayOf(m.object),
            noscript: m.arrayOf(m.object),
            onChangeClientState: m.func,
            script: m.arrayOf(m.object),
            style: m.arrayOf(m.object),
            title: m.string,
            titleAttributes: m.object,
            titleTemplate: m.string
        }, n.defaultProps = {
            defer: !0,
            encodeSpecialCharacters: !0
        }, n.peek = e.peek, n.rewind = function() {
            var o = e.rewind();
            return o || (o = K({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: !0,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            })), o
        }, r
    },
    Ve = function() {
        return null
    },
    Xe = Te(xe, Ue, K)(Ve),
    G = ze(Xe);
G.renderStatic = G.rewind;
export {
    G as H
};
//# sourceMappingURL=react-helmet-Do36oeNh.js.map