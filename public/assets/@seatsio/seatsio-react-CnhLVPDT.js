import {
    r as yt
} from "../vendor-DR5RWKqR.js";
var G = {
    exports: {}
};
(() => {
    var b = {
            n: e => {
                var t = e && e.__esModule ? () => e.default : () => e;
                return b.d(t, {
                    a: t
                }), t
            },
            d: (e, t) => {
                for (var r in t) b.o(t, r) && !b.o(e, r) && Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: e => {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
        },
        k = {};
    b.r(k), b.d(k, {
        SeatsioChartManager: () => ct,
        SeatsioDesigner: () => st,
        SeatsioEventManager: () => nt,
        SeatsioSeatingChart: () => $
    });
    const H = yt;
    var x = b.n(H);

    function w(e) {
        return w = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t
        } : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, w(e)
    }
    var K = function e(t, r) {
        return Object.keys(t).length !== Object.keys(r).length || Object.keys(r).some(function(n) {
            var c = t[n],
                u = r[n];
            if (c && u) {
                if (typeof c == "function" && typeof u == "function") return c.toString() !== u.toString();
                if (w(c) === "object" && w(u) === "object") return e(c, u)
            }
            return c !== u
        })
    };

    function h(e) {
        return h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t
        } : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, h(e)
    }
    var L = ["divId", "container", "onRenderStarted", "chartJsUrl", "region"];

    function F(e, t, r, n, c, u, f) {
        try {
            var o = e[u](f),
                i = o.value
        } catch (s) {
            return void r(s)
        }
        o.done ? t(i) : Promise.resolve(i).then(n, c)
    }

    function D(e) {
        return function() {
            var t = this,
                r = arguments;
            return new Promise(function(n, c) {
                var u = e.apply(t, r);

                function f(i) {
                    F(u, n, c, f, o, "next", i)
                }

                function o(i) {
                    F(u, n, c, f, o, "throw", i)
                }
                f(void 0)
            })
        }
    }

    function N(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (c = function(u, f) {
                if (h(u) !== "object" || u === null) return u;
                var o = u[Symbol.toPrimitive];
                if (o !== void 0) {
                    var i = o.call(u, f);
                    if (h(i) !== "object") return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(u)
            }(n.key, "string"), h(c) === "symbol" ? c : String(c)), n)
        }
        var c
    }

    function B(e, t) {
        return B = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
            return r.__proto__ = n, r
        }, B(e, t)
    }

    function Q(e, t) {
        if (t && (h(t) === "object" || typeof t == "function")) return t;
        if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return function(r) {
            if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r
        }(e)
    }

    function j(e) {
        return j = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, j(e)
    }
    var O = function(e) {
        (function(a, l) {
            if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function");
            a.prototype = Object.create(l && l.prototype, {
                constructor: {
                    value: a,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(a, "prototype", {
                writable: !1
            }), l && B(a, l)
        })(s, e);
        var t, r, n, c, u, f, o, i = (f = s, o = function() {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
            if (typeof Proxy == "function") return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch {
                return !1
            }
        }(), function() {
            var a, l = j(f);
            if (o) {
                var y = j(this).constructor;
                a = Reflect.construct(l, arguments, y)
            } else a = l.apply(this, arguments);
            return Q(this, a)
        });

        function s(a) {
            var l;
            return function(y, p) {
                if (!(y instanceof p)) throw new TypeError("Cannot call a class as a function")
            }(this, s), (l = i.call(this, a)).container = x().createRef(), l
        }
        return t = s, r = [{
            key: "componentDidMount",
            value: (u = D(function*() {
                this.rendering || (this.rendering = this.createAndRenderChart())
            }), function() {
                return u.apply(this, arguments)
            })
        }, {
            key: "componentDidUpdate",
            value: (c = D(function*(a) {
                K(this.props, a) && this.chart && (this.destroyChart(), this.createAndRenderChart())
            }), function(a) {
                return c.apply(this, arguments)
            })
        }, {
            key: "createAndRenderChart",
            value: (n = D(function*() {
                var a = yield this.getSeatsio(), l = this.extractConfigFromProps();
                l.container = this.container.current, this.chart = this.createChart(a, l).render(), this.props.onRenderStarted && this.props.onRenderStarted(this.chart)
            }), function() {
                return n.apply(this, arguments)
            })
        }, {
            key: "extractConfigFromProps",
            value: function() {
                var a = this.props;
                return a.divId, a.container, a.onRenderStarted, a.chartJsUrl, a.region,
                    function(l, y) {
                        if (l == null) return {};
                        var p, E, W = function(I, pt) {
                            if (I == null) return {};
                            var C, T, q = {},
                                z = Object.keys(I);
                            for (T = 0; T < z.length; T++) C = z[T], pt.indexOf(C) >= 0 || (q[C] = I[C]);
                            return q
                        }(l, y);
                        if (Object.getOwnPropertySymbols) {
                            var Y = Object.getOwnPropertySymbols(l);
                            for (E = 0; E < Y.length; E++) p = Y[E], y.indexOf(p) >= 0 || Object.prototype.propertyIsEnumerable.call(l, p) && (W[p] = l[p])
                        }
                        return W
                    }(a, L)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.destroyChart()
            }
        }, {
            key: "destroyChart",
            value: function() {
                this.chart && this.chart.state !== "DESTROYED" && this.chart.destroy()
            }
        }, {
            key: "getSeatsio",
            value: function() {
                return typeof seatsio > "u" ? this.loadSeatsio() : seatsio.region !== this.props.region ? (seatsio = void 0, this.loadSeatsio()) : Promise.resolve(seatsio)
            }
        }, {
            key: "loadSeatsio",
            value: function() {
                var a = this;
                return new Promise(function(l, y) {
                    var p = document.createElement("script");
                    p.onload = function() {
                        seatsio.region = a.props.region, l(seatsio)
                    }, p.onerror = function() {
                        return y("Could not load ".concat(p.src))
                    }, p.src = a.props.chartJsUrl.replace("{region}", a.props.region), document.head.appendChild(p)
                })
            }
        }, {
            key: "render",
            value: function() {
                return x().createElement("div", {
                    ref: this.container,
                    style: {
                        height: "100%",
                        width: "100%"
                    }
                })
            }
        }], r && N(t.prototype, r), Object.defineProperty(t, "prototype", {
            writable: !1
        }), s
    }(x().Component);

    function v(e) {
        return v = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t
        } : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, v(e)
    }

    function V(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function X(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (c = function(u, f) {
                if (v(u) !== "object" || u === null) return u;
                var o = u[Symbol.toPrimitive];
                if (o !== void 0) {
                    var i = o.call(u, f);
                    if (v(i) !== "object") return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(u)
            }(n.key, "string"), v(c) === "symbol" ? c : String(c)), n)
        }
        var c
    }

    function M(e, t) {
        return M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
            return r.__proto__ = n, r
        }, M(e, t)
    }

    function Z(e, t) {
        if (t && (v(t) === "object" || typeof t == "function")) return t;
        if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return function(r) {
            if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r
        }(e)
    }

    function S(e) {
        return S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, S(e)
    }
    O.defaultProps = {
        chartJsUrl: "https://cdn-{region}.seatsio.net/chart.js"
    };
    var $ = function(e) {
        (function(o, i) {
            if (typeof i != "function" && i !== null) throw new TypeError("Super expression must either be null or a function");
            o.prototype = Object.create(i && i.prototype, {
                constructor: {
                    value: o,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(o, "prototype", {
                writable: !1
            }), i && M(o, i)
        })(f, e);
        var t, r, n, c, u = (n = f, c = function() {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
            if (typeof Proxy == "function") return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch {
                return !1
            }
        }(), function() {
            var o, i = S(n);
            if (c) {
                var s = S(this).constructor;
                o = Reflect.construct(i, arguments, s)
            } else o = i.apply(this, arguments);
            return Z(this, o)
        });

        function f() {
            return V(this, f), u.apply(this, arguments)
        }
        return t = f, (r = [{
            key: "createChart",
            value: function(o, i) {
                return new o.SeatingChart(i)
            }
        }]) && X(t.prototype, r), Object.defineProperty(t, "prototype", {
            writable: !1
        }), f
    }(O);

    function d(e) {
        return d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t
        } : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, d(e)
    }

    function tt(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function et(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (c = function(u, f) {
                if (d(u) !== "object" || u === null) return u;
                var o = u[Symbol.toPrimitive];
                if (o !== void 0) {
                    var i = o.call(u, f);
                    if (d(i) !== "object") return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(u)
            }(n.key, "string"), d(c) === "symbol" ? c : String(c)), n)
        }
        var c
    }

    function U(e, t) {
        return U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
            return r.__proto__ = n, r
        }, U(e, t)
    }

    function rt(e, t) {
        if (t && (d(t) === "object" || typeof t == "function")) return t;
        if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return function(r) {
            if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r
        }(e)
    }

    function P(e) {
        return P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, P(e)
    }
    var nt = function(e) {
        (function(o, i) {
            if (typeof i != "function" && i !== null) throw new TypeError("Super expression must either be null or a function");
            o.prototype = Object.create(i && i.prototype, {
                constructor: {
                    value: o,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(o, "prototype", {
                writable: !1
            }), i && U(o, i)
        })(f, e);
        var t, r, n, c, u = (n = f, c = function() {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
            if (typeof Proxy == "function") return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch {
                return !1
            }
        }(), function() {
            var o, i = P(n);
            if (c) {
                var s = P(this).constructor;
                o = Reflect.construct(i, arguments, s)
            } else o = i.apply(this, arguments);
            return rt(this, o)
        });

        function f() {
            return tt(this, f), u.apply(this, arguments)
        }
        return t = f, (r = [{
            key: "createChart",
            value: function(o, i) {
                return new o.EventManager(i)
            }
        }]) && et(t.prototype, r), Object.defineProperty(t, "prototype", {
            writable: !1
        }), f
    }(O);

    function m(e) {
        return m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t
        } : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, m(e)
    }

    function ot(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function it(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (c = function(u, f) {
                if (m(u) !== "object" || u === null) return u;
                var o = u[Symbol.toPrimitive];
                if (o !== void 0) {
                    var i = o.call(u, f);
                    if (m(i) !== "object") return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(u)
            }(n.key, "string"), m(c) === "symbol" ? c : String(c)), n)
        }
        var c
    }

    function J(e, t) {
        return J = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
            return r.__proto__ = n, r
        }, J(e, t)
    }

    function ut(e, t) {
        if (t && (m(t) === "object" || typeof t == "function")) return t;
        if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return function(r) {
            if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r
        }(e)
    }

    function _(e) {
        return _ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, _(e)
    }
    var ct = function(e) {
        (function(o, i) {
            if (typeof i != "function" && i !== null) throw new TypeError("Super expression must either be null or a function");
            o.prototype = Object.create(i && i.prototype, {
                constructor: {
                    value: o,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(o, "prototype", {
                writable: !1
            }), i && J(o, i)
        })(f, e);
        var t, r, n, c, u = (n = f, c = function() {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
            if (typeof Proxy == "function") return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch {
                return !1
            }
        }(), function() {
            var o, i = _(n);
            if (c) {
                var s = _(this).constructor;
                o = Reflect.construct(i, arguments, s)
            } else o = i.apply(this, arguments);
            return ut(this, o)
        });

        function f() {
            return ot(this, f), u.apply(this, arguments)
        }
        return t = f, (r = [{
            key: "createChart",
            value: function(o, i) {
                return new o.ChartManager(i)
            }
        }]) && it(t.prototype, r), Object.defineProperty(t, "prototype", {
            writable: !1
        }), f
    }(O);

    function g(e) {
        return g = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t
        } : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, g(e)
    }

    function ft(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function at(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (c = function(u, f) {
                if (g(u) !== "object" || u === null) return u;
                var o = u[Symbol.toPrimitive];
                if (o !== void 0) {
                    var i = o.call(u, f);
                    if (g(i) !== "object") return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(u)
            }(n.key, "string"), g(c) === "symbol" ? c : String(c)), n)
        }
        var c
    }

    function A(e, t) {
        return A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
            return r.__proto__ = n, r
        }, A(e, t)
    }

    function lt(e, t) {
        if (t && (g(t) === "object" || typeof t == "function")) return t;
        if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return function(r) {
            if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r
        }(e)
    }

    function R(e) {
        return R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, R(e)
    }
    var st = function(e) {
        (function(o, i) {
            if (typeof i != "function" && i !== null) throw new TypeError("Super expression must either be null or a function");
            o.prototype = Object.create(i && i.prototype, {
                constructor: {
                    value: o,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(o, "prototype", {
                writable: !1
            }), i && A(o, i)
        })(f, e);
        var t, r, n, c, u = (n = f, c = function() {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
            if (typeof Proxy == "function") return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch {
                return !1
            }
        }(), function() {
            var o, i = R(n);
            if (c) {
                var s = R(this).constructor;
                o = Reflect.construct(i, arguments, s)
            } else o = i.apply(this, arguments);
            return lt(this, o)
        });

        function f() {
            return ft(this, f), u.apply(this, arguments)
        }
        return t = f, (r = [{
            key: "createChart",
            value: function(o, i) {
                return new o.SeatingChartDesigner(i)
            }
        }]) && at(t.prototype, r), Object.defineProperty(t, "prototype", {
            writable: !1
        }), f
    }(O);
    G.exports = k
})();
var ht = G.exports;
export {
    ht as b
};
//# sourceMappingURL=seatsio-react-CnhLVPDT.js.map