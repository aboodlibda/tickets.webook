import {
    R as w,
    g as x,
    r as S
} from "./vendor-DR5RWKqR.js";
var O = function() {
        return O = Object.assign || function(t) {
            for (var i, e = 1, r = arguments.length; e < r; e++) {
                i = arguments[e];
                for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o])
            }
            return t
        }, O.apply(this, arguments)
    },
    j = function(t, i) {
        var e = {};
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && i.indexOf(r) < 0 && (e[r] = t[r]);
        if (t != null && typeof Object.getOwnPropertySymbols == "function")
            for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++) i.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
        return e
    };

function k(t) {
    var i = function(e) {
        var r = e.bgStyle,
            o = e.borderRadius,
            n = e.iconFillColor,
            c = e.round,
            l = e.size,
            u = j(e, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
        return w.createElement("svg", O({
            viewBox: "0 0 64 64",
            width: l,
            height: l
        }, u), c ? w.createElement("circle", {
            cx: "32",
            cy: "32",
            r: "31",
            fill: t.color,
            style: r
        }) : w.createElement("rect", {
            width: "64",
            height: "64",
            rx: o,
            ry: o,
            fill: t.color,
            style: r
        }), w.createElement("path", {
            d: t.path,
            fill: n
        }))
    };
    return i.defaultProps = {
        bgStyle: {},
        borderRadius: 0,
        iconFillColor: "white",
        size: 64
    }, i
}

function g(t) {
    var i = Object.entries(t).filter(function(e) {
        var r = e[1];
        return r != null
    }).map(function(e) {
        var r = e[0],
            o = e[1];
        return "".concat(encodeURIComponent(r), "=").concat(encodeURIComponent(String(o)))
    });
    return i.length > 0 ? "?".concat(i.join("&")) : ""
}
var _ = {
    exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
    (function() {
        var i = {}.hasOwnProperty;

        function e() {
            for (var n = "", c = 0; c < arguments.length; c++) {
                var l = arguments[c];
                l && (n = o(n, r(l)))
            }
            return n
        }

        function r(n) {
            if (typeof n == "string" || typeof n == "number") return n;
            if (typeof n != "object") return "";
            if (Array.isArray(n)) return e.apply(null, n);
            if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) return n.toString();
            var c = "";
            for (var l in n) i.call(n, l) && n[l] && (c = o(c, l));
            return c
        }

        function o(n, c) {
            return c ? n ? n + " " + c : n + c : n
        }
        t.exports ? (e.default = e, t.exports = e) : window.classNames = e
    })()
})(_);
var P = _.exports;
const E = x(P);
var B = function() {
        var t = function(i, e) {
            return t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(r, o) {
                r.__proto__ = o
            } || function(r, o) {
                for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (r[n] = o[n])
            }, t(i, e)
        };
        return function(i, e) {
            if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            t(i, e);

            function r() {
                this.constructor = i
            }
            i.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r)
        }
    }(),
    d = function() {
        return d = Object.assign || function(t) {
            for (var i, e = 1, r = arguments.length; e < r; e++) {
                i = arguments[e];
                for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o])
            }
            return t
        }, d.apply(this, arguments)
    },
    W = function(t, i, e, r) {
        function o(n) {
            return n instanceof e ? n : new e(function(c) {
                c(n)
            })
        }
        return new(e || (e = Promise))(function(n, c) {
            function l(s) {
                try {
                    a(r.next(s))
                } catch (f) {
                    c(f)
                }
            }

            function u(s) {
                try {
                    a(r.throw(s))
                } catch (f) {
                    c(f)
                }
            }

            function a(s) {
                s.done ? n(s.value) : o(s.value).then(l, u)
            }
            a((r = r.apply(t, i || [])).next())
        })
    },
    N = function(t, i) {
        var e = {
                label: 0,
                sent: function() {
                    if (n[0] & 1) throw n[1];
                    return n[1]
                },
                trys: [],
                ops: []
            },
            r, o, n, c;
        return c = {
            next: l(0),
            throw: l(1),
            return: l(2)
        }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
            return this
        }), c;

        function l(a) {
            return function(s) {
                return u([a, s])
            }
        }

        function u(a) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; e;) try {
                if (r = 1, o && (n = a[0] & 2 ? o.return : a[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, a[1])).done) return n;
                switch (o = 0, n && (a = [a[0] & 2, n.value]), a[0]) {
                    case 0:
                    case 1:
                        n = a;
                        break;
                    case 4:
                        return e.label++, {
                            value: a[1],
                            done: !1
                        };
                    case 5:
                        e.label++, o = a[1], a = [0];
                        continue;
                    case 7:
                        a = e.ops.pop(), e.trys.pop();
                        continue;
                    default:
                        if (n = e.trys, !(n = n.length > 0 && n[n.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                            e = 0;
                            continue
                        }
                        if (a[0] === 3 && (!n || a[1] > n[0] && a[1] < n[3])) {
                            e.label = a[1];
                            break
                        }
                        if (a[0] === 6 && e.label < n[1]) {
                            e.label = n[1], n = a;
                            break
                        }
                        if (n && e.label < n[2]) {
                            e.label = n[2], e.ops.push(a);
                            break
                        }
                        n[2] && e.ops.pop(), e.trys.pop();
                        continue
                }
                a = i.call(t, e)
            } catch (s) {
                a = [6, s], o = 0
            } finally {
                r = n = 0
            }
            if (a[0] & 5) throw a[1];
            return {
                value: a[0] ? a[1] : void 0,
                done: !0
            }
        }
    },
    C = function(t, i) {
        var e = {};
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && i.indexOf(r) < 0 && (e[r] = t[r]);
        if (t != null && typeof Object.getOwnPropertySymbols == "function")
            for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++) i.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
        return e
    },
    R = function(t) {
        return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function"
    },
    A = function(t, i) {
        return {
            left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - t / 2,
            top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - i / 2
        }
    },
    L = function(t, i) {
        return {
            top: (window.screen.height - i) / 2,
            left: (window.screen.width - t) / 2
        }
    };

function H(t, i, e) {
    var r = i.height,
        o = i.width,
        n = C(i, ["height", "width"]),
        c = d({
            height: r,
            width: o,
            location: "no",
            toolbar: "no",
            status: "no",
            directories: "no",
            menubar: "no",
            scrollbars: "yes",
            resizable: "no",
            centerscreen: "yes",
            chrome: "yes"
        }, n),
        l = window.open(t, "", Object.keys(c).map(function(a) {
            return "".concat(a, "=").concat(c[a])
        }).join(", "));
    if (e) var u = window.setInterval(function() {
        try {
            (l === null || l.closed) && (window.clearInterval(u), e(l))
        } catch (a) {
            console.error(a)
        }
    }, 1e3);
    return l
}
var D = function(t) {
        B(i, t);

        function i() {
            var e = t !== null && t.apply(this, arguments) || this;
            return e.openShareDialog = function(r) {
                var o = e.props,
                    n = o.onShareWindowClose,
                    c = o.windowHeight,
                    l = c === void 0 ? 400 : c,
                    u = o.windowPosition,
                    a = u === void 0 ? "windowCenter" : u,
                    s = o.windowWidth,
                    f = s === void 0 ? 550 : s,
                    h = d({
                        height: l,
                        width: f
                    }, a === "windowCenter" ? A(f, l) : L(f, l));
                H(r, h, n)
            }, e.handleClick = function(r) {
                return W(e, void 0, void 0, function() {
                    var o, n, c, l, u, a, s, f, h, y;
                    return N(this, function(m) {
                        switch (m.label) {
                            case 0:
                                return o = this.props, n = o.beforeOnClick, c = o.disabled, l = o.networkLink, u = o.onClick, a = o.url, s = o.openShareDialogOnClick, f = o.opts, h = l(a, f), c ? [2] : (r.preventDefault(), n ? (y = n(), R(y) ? [4, y] : [3, 2]) : [3, 2]);
                            case 1:
                                m.sent(), m.label = 2;
                            case 2:
                                return s && this.openShareDialog(h), u && u(r, h), [2]
                        }
                    })
                })
            }, e
        }
        return i.prototype.render = function() {
            var e = this.props;
            e.beforeOnClick;
            var r = e.children,
                o = e.className,
                n = e.disabled,
                c = e.disabledStyle,
                l = e.forwardedRef;
            e.networkLink;
            var u = e.networkName;
            e.onShareWindowClose, e.openShareDialogOnClick, e.opts;
            var a = e.resetButtonStyle,
                s = e.style;
            e.url, e.windowHeight, e.windowPosition, e.windowWidth;
            var f = C(e, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]),
                h = E("react-share__ShareButton", {
                    "react-share__ShareButton--disabled": !!n,
                    disabled: !!n
                }, o),
                y = d(d(a ? {
                    backgroundColor: "transparent",
                    border: "none",
                    padding: 0,
                    font: "inherit",
                    color: "inherit",
                    cursor: "pointer"
                } : {}, s), n && c);
            return w.createElement("button", d({}, f, {
                "aria-label": f["aria-label"] || u,
                className: h,
                onClick: this.handleClick,
                ref: l,
                style: y
            }), r)
        }, i.defaultProps = {
            disabledStyle: {
                opacity: .6
            },
            openShareDialogOnClick: !0,
            resetButtonStyle: !0
        }, i
    }(S.Component),
    v = function() {
        return v = Object.assign || function(t) {
            for (var i, e = 1, r = arguments.length; e < r; e++) {
                i = arguments[e];
                for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o])
            }
            return t
        }, v.apply(this, arguments)
    };

function b(t, i, e, r) {
    function o(n, c) {
        var l = e(n),
            u = v({}, n),
            a = Object.keys(l);
        return a.forEach(function(s) {
            delete u[s]
        }), w.createElement(D, v({}, r, u, {
            forwardedRef: c,
            networkName: t,
            networkLink: i,
            opts: e(n)
        }))
    }
    return o.displayName = "ShareButton-".concat(t), S.forwardRef(o)
}
var G = k({
        color: "#3b5998",
        networkName: "facebook",
        path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
    }),
    I = function() {
        var t = function(i, e) {
            return t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(r, o) {
                r.__proto__ = o
            } || function(r, o) {
                for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (r[n] = o[n])
            }, t(i, e)
        };
        return function(i, e) {
            if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            t(i, e);

            function r() {
                this.constructor = i
            }
            i.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r)
        }
    }(),
    z = function(t) {
        I(i, t);

        function i(e) {
            var r = t.call(this, e) || this;
            return r.name = "AssertionError", r
        }
        return i
    }(Error);

function p(t, i) {
    if (!t) throw new z(i)
}

function V(t, i) {
    var e = i.quote,
        r = i.hashtag;
    return p(t, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + g({
        u: t,
        quote: e,
        hashtag: r
    })
}
var U = b("facebook", V, function(t) {
        return {
            quote: t.quote,
            hashtag: t.hashtag
        }
    }, {
        windowWidth: 550,
        windowHeight: 400
    }),
    K = k({
        color: "#007fb1",
        networkName: "linkedin",
        path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
    });

function F(t, i) {
    var e = i.title,
        r = i.summary,
        o = i.source;
    return p(t, "linkedin.url"), "https://linkedin.com/shareArticle" + g({
        url: t,
        mini: "true",
        title: e,
        summary: r,
        source: o
    })
}
var X = b("linkedin", F, function(t) {
    var i = t.title,
        e = t.summary,
        r = t.source;
    return {
        title: i,
        summary: e,
        source: r
    }
}, {
    windowWidth: 750,
    windowHeight: 600
});

function T(t, i) {
    var e = i.title,
        r = i.via,
        o = i.hashtags,
        n = o === void 0 ? [] : o,
        c = i.related,
        l = c === void 0 ? [] : c;
    return p(t, "twitter.url"), p(Array.isArray(n), "twitter.hashtags is not an array"), p(Array.isArray(l), "twitter.related is not an array"), "https://twitter.com/share" + g({
        url: t,
        text: e,
        via: r,
        hashtags: n.length > 0 ? n.join(",") : void 0,
        related: l.length > 0 ? l.join(",") : void 0
    })
}
var Y = b("twitter", T, function(t) {
        return {
            hashtags: t.hashtags,
            title: t.title,
            via: t.via,
            related: t.related
        }
    }, {
        windowWidth: 550,
        windowHeight: 400
    }),
    J = k({
        color: "#25D366",
        networkName: "whatsapp",
        path: "m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"
    });

function q() {
    return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent)
}

function M(t, i) {
    var e = i.title,
        r = i.separator;
    return p(t, "whatsapp.url"), "https://" + (q() ? "api" : "web") + ".whatsapp.com/send" + g({
        text: e ? e + r + t : t
    })
}
var Q = b("whatsapp", M, function(t) {
    return {
        title: t.title,
        separator: t.separator || " "
    }
}, {
    windowWidth: 550,
    windowHeight: 400
});
export {
    U as F, X as L, Y as T, Q as W, G as a, J as b, K as c
};
//# sourceMappingURL=react-share-BH4UzKnY.js.map