import {
    R as w,
    g as j,
    r as S
} from "./vendor-DR5RWKqR.js";
var O = function() {
        return O = Object.assign || function(t) {
            for (var n, e = 1, r = arguments.length; e < r; e++) {
                n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }, O.apply(this, arguments)
    },
    x = function(t, n) {
        var e = {};
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
        if (t != null && typeof Object.getOwnPropertySymbols == "function")
            for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++) n.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (e[r[i]] = t[r[i]]);
        return e
    };

function m(t) {
    var n = function(e) {
        var r = e.bgStyle,
            i = e.borderRadius,
            o = e.iconFillColor,
            c = e.round,
            l = e.size,
            u = x(e, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
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
            rx: i,
            ry: i,
            fill: t.color,
            style: r
        }), w.createElement("path", {
            d: t.path,
            fill: o
        }))
    };
    return n.defaultProps = {
        bgStyle: {},
        borderRadius: 0,
        iconFillColor: "white",
        size: 64
    }, n
}
var U = m({
    color: "#7f7f7f",
    networkName: "email",
    path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"
});

function v(t) {
    var n = Object.entries(t).filter(function(e) {
        var r = e[1];
        return r != null
    }).map(function(e) {
        var r = e[0],
            i = e[1];
        return "".concat(encodeURIComponent(r), "=").concat(encodeURIComponent(String(i)))
    });
    return n.length > 0 ? "?".concat(n.join("&")) : ""
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
        var n = {}.hasOwnProperty;

        function e() {
            for (var o = "", c = 0; c < arguments.length; c++) {
                var l = arguments[c];
                l && (o = i(o, r(l)))
            }
            return o
        }

        function r(o) {
            if (typeof o == "string" || typeof o == "number") return o;
            if (typeof o != "object") return "";
            if (Array.isArray(o)) return e.apply(null, o);
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) return o.toString();
            var c = "";
            for (var l in o) n.call(o, l) && o[l] && (c = i(c, l));
            return c
        }

        function i(o, c) {
            return c ? o ? o + " " + c : o + c : o
        }
        t.exports ? (e.default = e, t.exports = e) : window.classNames = e
    })()
})(_);
var P = _.exports;
const E = j(P);
var B = function() {
        var t = function(n, e) {
            return t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(r, i) {
                r.__proto__ = i
            } || function(r, i) {
                for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
            }, t(n, e)
        };
        return function(n, e) {
            if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            t(n, e);

            function r() {
                this.constructor = n
            }
            n.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r)
        }
    }(),
    d = function() {
        return d = Object.assign || function(t) {
            for (var n, e = 1, r = arguments.length; e < r; e++) {
                n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }, d.apply(this, arguments)
    },
    W = function(t, n, e, r) {
        function i(o) {
            return o instanceof e ? o : new e(function(c) {
                c(o)
            })
        }
        return new(e || (e = Promise))(function(o, c) {
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
                s.done ? o(s.value) : i(s.value).then(l, u)
            }
            a((r = r.apply(t, n || [])).next())
        })
    },
    L = function(t, n) {
        var e = {
                label: 0,
                sent: function() {
                    if (o[0] & 1) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            },
            r, i, o, c;
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
                if (r = 1, i && (o = a[0] & 2 ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, a[1])).done) return o;
                switch (i = 0, o && (a = [a[0] & 2, o.value]), a[0]) {
                    case 0:
                    case 1:
                        o = a;
                        break;
                    case 4:
                        return e.label++, {
                            value: a[1],
                            done: !1
                        };
                    case 5:
                        e.label++, i = a[1], a = [0];
                        continue;
                    case 7:
                        a = e.ops.pop(), e.trys.pop();
                        continue;
                    default:
                        if (o = e.trys, !(o = o.length > 0 && o[o.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                            e = 0;
                            continue
                        }
                        if (a[0] === 3 && (!o || a[1] > o[0] && a[1] < o[3])) {
                            e.label = a[1];
                            break
                        }
                        if (a[0] === 6 && e.label < o[1]) {
                            e.label = o[1], o = a;
                            break
                        }
                        if (o && e.label < o[2]) {
                            e.label = o[2], e.ops.push(a);
                            break
                        }
                        o[2] && e.ops.pop(), e.trys.pop();
                        continue
                }
                a = n.call(t, e)
            } catch (s) {
                a = [6, s], i = 0
            } finally {
                r = o = 0
            }
            if (a[0] & 5) throw a[1];
            return {
                value: a[0] ? a[1] : void 0,
                done: !0
            }
        }
    },
    C = function(t, n) {
        var e = {};
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
        if (t != null && typeof Object.getOwnPropertySymbols == "function")
            for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++) n.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (e[r[i]] = t[r[i]]);
        return e
    },
    H = function(t) {
        return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function"
    },
    N = function(t, n) {
        return {
            left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - t / 2,
            top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - n / 2
        }
    },
    R = function(t, n) {
        return {
            top: (window.screen.height - n) / 2,
            left: (window.screen.width - t) / 2
        }
    };

function A(t, n, e) {
    var r = n.height,
        i = n.width,
        o = C(n, ["height", "width"]),
        c = d({
            height: r,
            width: i,
            location: "no",
            toolbar: "no",
            status: "no",
            directories: "no",
            menubar: "no",
            scrollbars: "yes",
            resizable: "no",
            centerscreen: "yes",
            chrome: "yes"
        }, o),
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
var z = function(t) {
        B(n, t);

        function n() {
            var e = t !== null && t.apply(this, arguments) || this;
            return e.openShareDialog = function(r) {
                var i = e.props,
                    o = i.onShareWindowClose,
                    c = i.windowHeight,
                    l = c === void 0 ? 400 : c,
                    u = i.windowPosition,
                    a = u === void 0 ? "windowCenter" : u,
                    s = i.windowWidth,
                    f = s === void 0 ? 550 : s,
                    h = d({
                        height: l,
                        width: f
                    }, a === "windowCenter" ? N(f, l) : R(f, l));
                A(r, h, o)
            }, e.handleClick = function(r) {
                return W(e, void 0, void 0, function() {
                    var i, o, c, l, u, a, s, f, h, y;
                    return L(this, function(k) {
                        switch (k.label) {
                            case 0:
                                return i = this.props, o = i.beforeOnClick, c = i.disabled, l = i.networkLink, u = i.onClick, a = i.url, s = i.openShareDialogOnClick, f = i.opts, h = l(a, f), c ? [2] : (r.preventDefault(), o ? (y = o(), H(y) ? [4, y] : [3, 2]) : [3, 2]);
                            case 1:
                                k.sent(), k.label = 2;
                            case 2:
                                return s && this.openShareDialog(h), u && u(r, h), [2]
                        }
                    })
                })
            }, e
        }
        return n.prototype.render = function() {
            var e = this.props;
            e.beforeOnClick;
            var r = e.children,
                i = e.className,
                o = e.disabled,
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
                    "react-share__ShareButton--disabled": !!o,
                    disabled: !!o
                }, i),
                y = d(d(a ? {
                    backgroundColor: "transparent",
                    border: "none",
                    padding: 0,
                    font: "inherit",
                    color: "inherit",
                    cursor: "pointer"
                } : {}, s), o && c);
            return w.createElement("button", d({}, f, {
                "aria-label": f["aria-label"] || u,
                className: h,
                onClick: this.handleClick,
                ref: l,
                style: y
            }), r)
        }, n.defaultProps = {
            disabledStyle: {
                opacity: .6
            },
            openShareDialogOnClick: !0,
            resetButtonStyle: !0
        }, n
    }(S.Component),
    g = function() {
        return g = Object.assign || function(t) {
            for (var n, e = 1, r = arguments.length; e < r; e++) {
                n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }, g.apply(this, arguments)
    };

function b(t, n, e, r) {
    function i(o, c) {
        var l = e(o),
            u = g({}, o),
            a = Object.keys(l);
        return a.forEach(function(s) {
            delete u[s]
        }), w.createElement(z, g({}, r, u, {
            forwardedRef: c,
            networkName: t,
            networkLink: n,
            opts: e(o)
        }))
    }
    return i.displayName = "ShareButton-".concat(t), S.forwardRef(i)
}

function D(t, n) {
    var e = n.subject,
        r = n.body,
        i = n.separator;
    return "mailto:" + v({
        subject: e,
        body: r ? r + i + t : t
    })
}
var K = b("email", D, function(t) {
        return {
            subject: t.subject,
            body: t.body,
            separator: t.separator || " "
        }
    }, {
        openShareDialogOnClick: !1,
        onClick: function(t, n) {
            window.location.href = n
        }
    }),
    X = m({
        color: "#3b5998",
        networkName: "facebook",
        path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
    }),
    I = function() {
        var t = function(n, e) {
            return t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(r, i) {
                r.__proto__ = i
            } || function(r, i) {
                for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
            }, t(n, e)
        };
        return function(n, e) {
            if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            t(n, e);

            function r() {
                this.constructor = n
            }
            n.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r)
        }
    }(),
    V = function(t) {
        I(n, t);

        function n(e) {
            var r = t.call(this, e) || this;
            return r.name = "AssertionError", r
        }
        return n
    }(Error);

function p(t, n) {
    if (!t) throw new V(n)
}

function F(t, n) {
    var e = n.quote,
        r = n.hashtag;
    return p(t, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + v({
        u: t,
        quote: e,
        hashtag: r
    })
}
var Y = b("facebook", F, function(t) {
        return {
            quote: t.quote,
            hashtag: t.hashtag
        }
    }, {
        windowWidth: 550,
        windowHeight: 400
    }),
    J = m({
        color: "#007fb1",
        networkName: "linkedin",
        path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
    });

function T(t, n) {
    var e = n.title,
        r = n.summary,
        i = n.source;
    return p(t, "linkedin.url"), "https://linkedin.com/shareArticle" + v({
        url: t,
        mini: "true",
        title: e,
        summary: r,
        source: i
    })
}
var Q = b("linkedin", T, function(t) {
    var n = t.title,
        e = t.summary,
        r = t.source;
    return {
        title: n,
        summary: e,
        source: r
    }
}, {
    windowWidth: 750,
    windowHeight: 600
});

function M(t, n) {
    var e = n.title,
        r = n.via,
        i = n.hashtags,
        o = i === void 0 ? [] : i,
        c = n.related,
        l = c === void 0 ? [] : c;
    return p(t, "twitter.url"), p(Array.isArray(o), "twitter.hashtags is not an array"), p(Array.isArray(l), "twitter.related is not an array"), "https://twitter.com/share" + v({
        url: t,
        text: e,
        via: r,
        hashtags: o.length > 0 ? o.join(",") : void 0,
        related: l.length > 0 ? l.join(",") : void 0
    })
}
var Z = b("twitter", M, function(t) {
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
    ee = m({
        color: "#25D366",
        networkName: "whatsapp",
        path: "m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"
    });

function q() {
    return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent)
}

function $(t, n) {
    var e = n.title,
        r = n.separator;
    return p(t, "whatsapp.url"), "https://" + (q() ? "api" : "web") + ".whatsapp.com/send" + v({
        text: e ? e + r + t : t
    })
}
var te = b("whatsapp", $, function(t) {
    return {
        title: t.title,
        separator: t.separator || " "
    }
}, {
    windowWidth: 550,
    windowHeight: 400
});
export {
    K as E, Y as F, Q as L, Z as T, te as W, ee as a, J as b, X as c, U as d
};
//# sourceMappingURL=react-share-DTvmqVZ7.js.map