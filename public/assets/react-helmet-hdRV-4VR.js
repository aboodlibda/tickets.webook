import {
    P as m
} from "./@react-three/drei-zjl_KbSs.js";
import {
    g as D,
    r as Z,
    R as L
} from "./vendor-DR5RWKqR.js";

function K(t) {
    return t && typeof t == "object" && "default" in t ? t.default : t
}
var z = Z,
    ee = K(z);

function U(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}

function te(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
}
var re = !!(typeof window < "u" && window.document && window.document.createElement);

function ne(t, e, n) {
    if (typeof t != "function") throw new Error("Expected reducePropsToState to be a function.");
    if (typeof e != "function") throw new Error("Expected handleStateChangeOnClient to be a function.");
    if (typeof n < "u" && typeof n != "function") throw new Error("Expected mapStateOnServer to either be undefined or a function.");

    function r(o) {
        return o.displayName || o.name || "Component"
    }
    return function(a) {
        if (typeof a != "function") throw new Error("Expected WrappedComponent to be a React component.");
        var f = [],
            i;

        function u() {
            i = t(f.map(function(s) {
                return s.props
            })), c.canUseDOM ? e(i) : n && (i = n(i))
        }
        var c = function(s) {
            te(p, s);

            function p() {
                return s.apply(this, arguments) || this
            }
            p.peek = function() {
                return i
            }, p.rewind = function() {
                if (p.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                var g = i;
                return i = void 0, f = [], g
            };
            var d = p.prototype;
            return d.UNSAFE_componentWillMount = function() {
                f.push(this), u()
            }, d.componentDidUpdate = function() {
                u()
            }, d.componentWillUnmount = function() {
                var g = f.indexOf(this);
                f.splice(g, 1), u()
            }, d.render = function() {
                return ee.createElement(a, this.props)
            }, p
        }(z.PureComponent);
        return U(c, "displayName", "SideEffect(" + r(a) + ")"), U(c, "canUseDOM", re), c
    }
}
var oe = ne;
const ae = D(oe);
var ie = typeof Element < "u",
    ue = typeof Map == "function",
    ce = typeof Set == "function",
    fe = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;

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
        if (ue && t instanceof Map && e instanceof Map) {
            if (t.size !== e.size) return !1;
            for (a = t.entries(); !(r = a.next()).done;)
                if (!e.has(r.value[0])) return !1;
            for (a = t.entries(); !(r = a.next()).done;)
                if (!j(r.value[1], e.get(r.value[0]))) return !1;
            return !0
        }
        if (ce && t instanceof Set && e instanceof Set) {
            if (t.size !== e.size) return !1;
            for (a = t.entries(); !(r = a.next()).done;)
                if (!e.has(r.value[0])) return !1;
            return !0
        }
        if (fe && ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
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
        if (ie && t instanceof Element) return !1;
        for (r = n; r-- !== 0;)
            if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && t.$$typeof) && !j(t[o[r]], e[o[r]])) return !1;
        return !0
    }
    return t !== t && e !== e
}
var se = function(e, n) {
    try {
        return j(e, n)
    } catch (r) {
        if ((r.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
        throw r
    }
};
const le = D(se);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var B = Object.getOwnPropertySymbols,
    pe = Object.prototype.hasOwnProperty,
    de = Object.prototype.propertyIsEnumerable;

function Te(t) {
    if (t == null) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(t)
}

function me() {
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
var ve = me() ? Object.assign : function(t, e) {
    for (var n, r = Te(t), o, a = 1; a < arguments.length; a++) {
        n = Object(arguments[a]);
        for (var f in n) pe.call(n, f) && (r[f] = n[f]);
        if (B) {
            o = B(n);
            for (var i = 0; i < o.length; i++) de.call(n, o[i]) && (r[o[i]] = n[o[i]])
        }
    }
    return r
};
const he = D(ve);
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
    M = {
        accesskey: "accessKey",
        charset: "charSet",
        class: "className",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        "http-equiv": "httpEquiv",
        itemprop: "itemProp",
        tabindex: "tabIndex"
    },
    _ = {
        DEFAULT_TITLE: "defaultTitle",
        DEFER: "defer",
        ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
        ON_CHANGE_CLIENT_STATE: "onChangeClientState",
        TITLE_TEMPLATE: "titleTemplate"
    },
    ge = Object.keys(M).reduce(function(t, e) {
        return t[M[e]] = e, t
    }, {}),
    ye = [l.NOSCRIPT, l.SCRIPT, l.STYLE],
    y = "data-react-helmet",
    Ee = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    Ae = function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    },
    be = function() {
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
    Oe = function(t, e) {
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
    Se = function(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e && (typeof e == "object" || typeof e == "function") ? e : t
    },
    H = function(e) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        return n === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    },
    Ce = function(e) {
        var n = P(e, l.TITLE),
            r = P(e, _.TITLE_TEMPLATE);
        if (r && n) return r.replace(/%s/g, function() {
            return Array.isArray(n) ? n.join("") : n
        });
        var o = P(e, _.DEFAULT_TITLE);
        return n || o || void 0
    },
    Pe = function(e) {
        return P(e, _.ON_CHANGE_CLIENT_STATE) || function() {}
    },
    N = function(e, n) {
        return n.filter(function(r) {
            return typeof r[e] < "u"
        }).map(function(r) {
            return r[e]
        }).reduce(function(r, o) {
            return h({}, r, o)
        }, {})
    },
    we = function(e, n) {
        return n.filter(function(r) {
            return typeof r[l.BASE] < "u"
        }).map(function(r) {
            return r[l.BASE]
        }).reverse().reduce(function(r, o) {
            if (!r.length)
                for (var a = Object.keys(o), f = 0; f < a.length; f++) {
                    var i = a[f],
                        u = i.toLowerCase();
                    if (e.indexOf(u) !== -1 && o[u]) return r.concat(o)
                }
            return r
        }, [])
    },
    R = function(e, n, r) {
        var o = {};
        return r.filter(function(a) {
            return Array.isArray(a[e]) ? !0 : (typeof a[e] < "u" && _e("Helmet: " + e + ' should be of type "Array". Instead found type "' + Ee(a[e]) + '"'), !1)
        }).map(function(a) {
            return a[e]
        }).reverse().reduce(function(a, f) {
            var i = {};
            f.filter(function(d) {
                for (var T = void 0, g = Object.keys(d), E = 0; E < g.length; E++) {
                    var A = g[E],
                        b = A.toLowerCase();
                    n.indexOf(b) !== -1 && !(T === v.REL && d[T].toLowerCase() === "canonical") && !(b === v.REL && d[b].toLowerCase() === "stylesheet") && (T = b), n.indexOf(A) !== -1 && (A === v.INNER_HTML || A === v.CSS_TEXT || A === v.ITEM_PROP) && (T = A)
                }
                if (!T || !d[T]) return !1;
                var w = d[T].toLowerCase();
                return o[T] || (o[T] = {}), i[T] || (i[T] = {}), o[T][w] ? !1 : (i[T][w] = !0, !0)
            }).reverse().forEach(function(d) {
                return a.push(d)
            });
            for (var u = Object.keys(i), c = 0; c < u.length; c++) {
                var s = u[c],
                    p = he({}, o[s], i[s]);
                o[s] = p
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
    Re = function(e) {
        return {
            baseTag: we([v.HREF, v.TARGET], e),
            bodyAttributes: N(S.BODY, e),
            defer: P(e, _.DEFER),
            encode: P(e, _.ENCODE_SPECIAL_CHARACTERS),
            htmlAttributes: N(S.HTML, e),
            linkTags: R(l.LINK, [v.REL, v.HREF], e),
            metaTags: R(l.META, [v.NAME, v.CHARSET, v.HTTPEQUIV, v.PROPERTY, v.ITEM_PROP], e),
            noscriptTags: R(l.NOSCRIPT, [v.INNER_HTML], e),
            onChangeClientState: Pe(e),
            scriptTags: R(l.SCRIPT, [v.SRC, v.INNER_HTML], e),
            styleTags: R(l.STYLE, [v.CSS_TEXT], e),
            title: Ce(e),
            titleAttributes: N(S.TITLE, e)
        }
    },
    x = function() {
        var t = Date.now();
        return function(e) {
            var n = Date.now();
            n - t > 16 ? (t = n, e(n)) : setTimeout(function() {
                x(e)
            }, 0)
        }
    }(),
    Y = function(e) {
        return clearTimeout(e)
    },
    Ie = typeof window < "u" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || x : global.requestAnimationFrame || x,
    Le = typeof window < "u" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || Y : global.cancelAnimationFrame || Y,
    _e = function(e) {
        return console && typeof console.warn == "function" && console.warn(e)
    },
    I = null,
    je = function(e) {
        I && Le(I), e.defer ? I = Ie(function() {
            $(e, function() {
                I = null
            })
        }) : ($(e), I = null)
    },
    $ = function(e, n) {
        var r = e.baseTag,
            o = e.bodyAttributes,
            a = e.htmlAttributes,
            f = e.linkTags,
            i = e.metaTags,
            u = e.noscriptTags,
            c = e.onChangeClientState,
            s = e.scriptTags,
            p = e.styleTags,
            d = e.title,
            T = e.titleAttributes;
        F(l.BODY, o), F(l.HTML, a), Me(d, T);
        var g = {
                baseTag: C(l.BASE, r),
                linkTags: C(l.LINK, f),
                metaTags: C(l.META, i),
                noscriptTags: C(l.NOSCRIPT, u),
                scriptTags: C(l.SCRIPT, s),
                styleTags: C(l.STYLE, p)
            },
            E = {},
            A = {};
        Object.keys(g).forEach(function(b) {
            var w = g[b],
                k = w.newTags,
                J = w.oldTags;
            k.length && (E[b] = k), J.length && (A[b] = g[b].oldTags)
        }), n && n(), c(e, E, A)
    },
    X = function(e) {
        return Array.isArray(e) ? e.join("") : e
    },
    Me = function(e, n) {
        typeof e < "u" && document.title !== e && (document.title = X(e)), F(l.TITLE, n)
    },
    F = function(e, n) {
        var r = document.getElementsByTagName(e)[0];
        if (r) {
            for (var o = r.getAttribute(y), a = o ? o.split(",") : [], f = [].concat(a), i = Object.keys(n), u = 0; u < i.length; u++) {
                var c = i[u],
                    s = n[c] || "";
                r.getAttribute(c) !== s && r.setAttribute(c, s), a.indexOf(c) === -1 && a.push(c);
                var p = f.indexOf(c);
                p !== -1 && f.splice(p, 1)
            }
            for (var d = f.length - 1; d >= 0; d--) r.removeAttribute(f[d]);
            a.length === f.length ? r.removeAttribute(y) : r.getAttribute(y) !== i.join(",") && r.setAttribute(y, i.join(","))
        }
    },
    C = function(e, n) {
        var r = document.head || document.querySelector(l.HEAD),
            o = r.querySelectorAll(e + "[" + y + "]"),
            a = Array.prototype.slice.call(o),
            f = [],
            i = void 0;
        return n && n.length && n.forEach(function(u) {
            var c = document.createElement(e);
            for (var s in u)
                if (u.hasOwnProperty(s))
                    if (s === v.INNER_HTML) c.innerHTML = u.innerHTML;
                    else if (s === v.CSS_TEXT) c.styleSheet ? c.styleSheet.cssText = u.cssText : c.appendChild(document.createTextNode(u.cssText));
            else {
                var p = typeof u[s] > "u" ? "" : u[s];
                c.setAttribute(s, p)
            }
            c.setAttribute(y, "true"), a.some(function(d, T) {
                return i = T, c.isEqualNode(d)
            }) ? a.splice(i, 1) : f.push(c)
        }), a.forEach(function(u) {
            return u.parentNode.removeChild(u)
        }), f.forEach(function(u) {
            return r.appendChild(u)
        }), {
            oldTags: a,
            newTags: f
        }
    },
    V = function(e) {
        return Object.keys(e).reduce(function(n, r) {
            var o = typeof e[r] < "u" ? r + '="' + e[r] + '"' : "" + r;
            return n ? n + " " + o : o
        }, "")
    },
    Ne = function(e, n, r, o) {
        var a = V(r),
            f = X(n);
        return a ? "<" + e + " " + y + '="true" ' + a + ">" + H(f, o) + "</" + e + ">" : "<" + e + " " + y + '="true">' + H(f, o) + "</" + e + ">"
    },
    He = function(e, n, r) {
        return n.reduce(function(o, a) {
            var f = Object.keys(a).filter(function(c) {
                    return !(c === v.INNER_HTML || c === v.CSS_TEXT)
                }).reduce(function(c, s) {
                    var p = typeof a[s] > "u" ? s : s + '="' + H(a[s], r) + '"';
                    return c ? c + " " + p : p
                }, ""),
                i = a.innerHTML || a.cssText || "",
                u = ye.indexOf(e) === -1;
            return o + "<" + e + " " + y + '="true" ' + f + (u ? "/>" : ">" + i + "</" + e + ">")
        }, "")
    },
    W = function(e) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return Object.keys(e).reduce(function(r, o) {
            return r[M[o] || o] = e[o], r
        }, n)
    },
    xe = function(e) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return Object.keys(e).reduce(function(r, o) {
            return r[ge[o] || o] = e[o], r
        }, n)
    },
    Fe = function(e, n, r) {
        var o, a = (o = {
                key: n
            }, o[y] = !0, o),
            f = W(r, a);
        return [L.createElement(l.TITLE, f, n)]
    },
    De = function(e, n) {
        return n.map(function(r, o) {
            var a, f = (a = {
                key: o
            }, a[y] = !0, a);
            return Object.keys(r).forEach(function(i) {
                var u = M[i] || i;
                if (u === v.INNER_HTML || u === v.CSS_TEXT) {
                    var c = r.innerHTML || r.cssText;
                    f.dangerouslySetInnerHTML = {
                        __html: c
                    }
                } else f[u] = r[i]
            }), L.createElement(e, f)
        })
    },
    O = function(e, n, r) {
        switch (e) {
            case l.TITLE:
                return {
                    toComponent: function() {
                        return Fe(e, n.title, n.titleAttributes)
                    },
                    toString: function() {
                        return Ne(e, n.title, n.titleAttributes, r)
                    }
                };
            case S.BODY:
            case S.HTML:
                return {
                    toComponent: function() {
                        return W(n)
                    },
                    toString: function() {
                        return V(n)
                    }
                };
            default:
                return {
                    toComponent: function() {
                        return De(e, n)
                    },
                    toString: function() {
                        return He(e, n, r)
                    }
                }
        }
    },
    Q = function(e) {
        var n = e.baseTag,
            r = e.bodyAttributes,
            o = e.encode,
            a = e.htmlAttributes,
            f = e.linkTags,
            i = e.metaTags,
            u = e.noscriptTags,
            c = e.scriptTags,
            s = e.styleTags,
            p = e.title,
            d = p === void 0 ? "" : p,
            T = e.titleAttributes;
        return {
            base: O(l.BASE, n, o),
            bodyAttributes: O(S.BODY, r, o),
            htmlAttributes: O(S.HTML, a, o),
            link: O(l.LINK, f, o),
            meta: O(l.META, i, o),
            noscript: O(l.NOSCRIPT, u, o),
            script: O(l.SCRIPT, c, o),
            style: O(l.STYLE, s, o),
            title: O(l.TITLE, {
                title: d,
                titleAttributes: T
            }, o)
        }
    },
    ke = function(e) {
        var n, r;
        return r = n = function(o) {
            Oe(a, o);

            function a() {
                return Ae(this, a), Se(this, o.apply(this, arguments))
            }
            return a.prototype.shouldComponentUpdate = function(i) {
                return !le(this.props, i)
            }, a.prototype.mapNestedChildrenToProps = function(i, u) {
                if (!u) return null;
                switch (i.type) {
                    case l.SCRIPT:
                    case l.NOSCRIPT:
                        return {
                            innerHTML: u
                        };
                    case l.STYLE:
                        return {
                            cssText: u
                        }
                }
                throw new Error("<" + i.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
            }, a.prototype.flattenArrayTypeChildren = function(i) {
                var u, c = i.child,
                    s = i.arrayTypeChildren,
                    p = i.newChildProps,
                    d = i.nestedChildren;
                return h({}, s, (u = {}, u[c.type] = [].concat(s[c.type] || [], [h({}, p, this.mapNestedChildrenToProps(c, d))]), u))
            }, a.prototype.mapObjectTypeChildren = function(i) {
                var u, c, s = i.child,
                    p = i.newProps,
                    d = i.newChildProps,
                    T = i.nestedChildren;
                switch (s.type) {
                    case l.TITLE:
                        return h({}, p, (u = {}, u[s.type] = T, u.titleAttributes = h({}, d), u));
                    case l.BODY:
                        return h({}, p, {
                            bodyAttributes: h({}, d)
                        });
                    case l.HTML:
                        return h({}, p, {
                            htmlAttributes: h({}, d)
                        })
                }
                return h({}, p, (c = {}, c[s.type] = h({}, d), c))
            }, a.prototype.mapArrayTypeChildrenToProps = function(i, u) {
                var c = h({}, u);
                return Object.keys(i).forEach(function(s) {
                    var p;
                    c = h({}, c, (p = {}, p[s] = i[s], p))
                }), c
            }, a.prototype.warnOnInvalidChildren = function(i, u) {
                return !0
            }, a.prototype.mapChildrenToProps = function(i, u) {
                var c = this,
                    s = {};
                return L.Children.forEach(i, function(p) {
                    if (!(!p || !p.props)) {
                        var d = p.props,
                            T = d.children,
                            g = q(d, ["children"]),
                            E = xe(g);
                        switch (c.warnOnInvalidChildren(p, T), p.type) {
                            case l.LINK:
                            case l.META:
                            case l.NOSCRIPT:
                            case l.SCRIPT:
                            case l.STYLE:
                                s = c.flattenArrayTypeChildren({
                                    child: p,
                                    arrayTypeChildren: s,
                                    newChildProps: E,
                                    nestedChildren: T
                                });
                                break;
                            default:
                                u = c.mapObjectTypeChildren({
                                    child: p,
                                    newProps: u,
                                    newChildProps: E,
                                    nestedChildren: T
                                });
                                break
                        }
                    }
                }), u = this.mapArrayTypeChildrenToProps(s, u), u
            }, a.prototype.render = function() {
                var i = this.props,
                    u = i.children,
                    c = q(i, ["children"]),
                    s = h({}, c);
                return u && (s = this.mapChildrenToProps(u, s)), L.createElement(e, s)
            }, be(a, null, [{
                key: "canUseDOM",
                set: function(i) {
                    e.canUseDOM = i
                }
            }]), a
        }(L.Component), n.propTypes = {
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
            return o || (o = Q({
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
    Ue = function() {
        return null
    },
    Be = ae(Re, je, Q)(Ue),
    G = ke(Be);
G.renderStatic = G.rewind;
export {
    G as H
};
//# sourceMappingURL=react-helmet-hdRV-4VR.js.map