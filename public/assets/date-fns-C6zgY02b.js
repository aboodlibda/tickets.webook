import {
    _ as $,
    r as u,
    t as s,
    j as O,
    k as _,
    s as H,
    l as Z
} from "./@wbk/ui-DjgVGgjs.js";

function at(a, t) {
    if (!(a instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function fe(a, t) {
    if ($(a) != "object" || !a) return a;
    var e = a[Symbol.toPrimitive];
    if (e !== void 0) {
        var r = e.call(a, t);
        if ($(r) != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(a)
}

function de(a) {
    var t = fe(a, "string");
    return $(t) == "symbol" ? t : t + ""
}

function ce(a, t) {
    for (var e = 0; e < t.length; e++) {
        var r = t[e];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(a, de(r.key), r)
    }
}

function nt(a, t, e) {
    return t && ce(a.prototype, t), Object.defineProperty(a, "prototype", {
        writable: !1
    }), a
}

function ee(a, t) {
    u(2, arguments);
    var e = s(a),
        r = O(t);
    return isNaN(r) ? new Date(NaN) : (r && e.setDate(e.getDate() + r), e)
}

function ve(a, t) {
    u(2, arguments);
    var e = s(a),
        r = O(t);
    if (isNaN(r)) return new Date(NaN);
    if (!r) return e;
    var n = e.getDate(),
        i = new Date(e.getTime());
    i.setMonth(e.getMonth() + r + 1, 0);
    var o = i.getDate();
    return n >= o ? i : (e.setFullYear(i.getFullYear(), i.getMonth(), n), e)
}

function te(a, t) {
    u(2, arguments);
    var e = s(a).getTime(),
        r = O(t);
    return new Date(e + r)
}

function x(a, t) {
    var e, r, n, i, o, l, v, d;
    u(1, arguments);
    var h = _(),
        c = O((e = (r = (n = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : h.weekStartsOn) !== null && r !== void 0 ? r : (v = h.locale) === null || v === void 0 || (d = v.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && e !== void 0 ? e : 0);
    if (!(c >= 0 && c <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var m = s(a),
        f = m.getDay(),
        w = (f < c ? 7 : 0) + f - c;
    return m.setDate(m.getDate() - w), m.setHours(0, 0, 0, 0), m
}

function R(a) {
    return u(1, arguments), x(a, {
        weekStartsOn: 1
    })
}

function me(a) {
    u(1, arguments);
    var t = s(a),
        e = t.getFullYear(),
        r = new Date(0);
    r.setFullYear(e + 1, 0, 4), r.setHours(0, 0, 0, 0);
    var n = R(r),
        i = new Date(0);
    i.setFullYear(e, 0, 4), i.setHours(0, 0, 0, 0);
    var o = R(i);
    return t.getTime() >= n.getTime() ? e + 1 : t.getTime() >= o.getTime() ? e : e - 1
}

function ge(a) {
    u(1, arguments);
    var t = me(a),
        e = new Date(0);
    e.setFullYear(t, 0, 4), e.setHours(0, 0, 0, 0);
    var r = R(e);
    return r
}

function N(a) {
    var t = new Date(Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds()));
    return t.setUTCFullYear(a.getFullYear()), a.getTime() - t.getTime()
}

function q(a) {
    u(1, arguments);
    var t = s(a);
    return t.setHours(0, 0, 0, 0), t
}
var he = 864e5;

function it(a, t) {
    u(2, arguments);
    var e = q(a),
        r = q(t),
        n = e.getTime() - N(e),
        i = r.getTime() - N(r);
    return Math.round((n - i) / he)
}
var we = 6e4;

function ot(a, t) {
    u(2, arguments);
    var e = O(t);
    return te(a, e * we)
}

function ut(a, t) {
    u(2, arguments);
    var e = O(t),
        r = e * 7;
    return ee(a, r)
}

function st(a, t) {
    u(2, arguments);
    var e = O(t);
    return ve(a, e * 12)
}

function lt(a) {
    u(1, arguments);
    var t;
    if (a && typeof a.forEach == "function") t = a;
    else if ($(a) === "object" && a !== null) t = Array.prototype.slice.call(a);
    else return new Date(NaN);
    var e;
    return t.forEach(function(r) {
        var n = s(r);
        (e === void 0 || e < n || isNaN(Number(n))) && (e = n)
    }), e || new Date(NaN)
}

function ft(a) {
    u(1, arguments);
    var t;
    if (a && typeof a.forEach == "function") t = a;
    else if ($(a) === "object" && a !== null) t = Array.prototype.slice.call(a);
    else return new Date(NaN);
    var e;
    return t.forEach(function(r) {
        var n = s(r);
        (e === void 0 || e > n || isNaN(n.getDate())) && (e = n)
    }), e || new Date(NaN)
}

function Oe(a, t) {
    u(2, arguments);
    var e = s(a),
        r = s(t),
        n = e.getTime() - r.getTime();
    return n < 0 ? -1 : n > 0 ? 1 : n
}

function Te(a, t) {
    u(2, arguments);
    var e = q(a),
        r = q(t);
    return e.getTime() === r.getTime()
}

function De(a) {
    return u(1, arguments), a instanceof Date || $(a) === "object" && Object.prototype.toString.call(a) === "[object Date]"
}

function ye(a) {
    if (u(1, arguments), !De(a) && typeof a != "number") return !1;
    var t = s(a);
    return !isNaN(Number(t))
}

function dt(a, t) {
    u(2, arguments);
    var e = s(a),
        r = s(t),
        n = e.getFullYear() - r.getFullYear(),
        i = e.getMonth() - r.getMonth();
    return n * 12 + i
}
var Ce = 6048e5;

function Me(a, t, e) {
    u(2, arguments);
    var r = x(a, e),
        n = x(t, e),
        i = r.getTime() - N(r),
        o = n.getTime() - N(n);
    return Math.round((i - o) / Ce)
}

function ct(a) {
    u(1, arguments);
    var t = s(a),
        e = t.getMonth();
    return t.setFullYear(t.getFullYear(), e + 1, 0), t.setHours(23, 59, 59, 999), t
}

function be(a) {
    u(1, arguments);
    var t = s(a);
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
}

function vt(a) {
    u(1, arguments);
    var t = s(a),
        e = new Date(0);
    return e.setFullYear(t.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e
}

function Ye(a, t) {
    var e, r, n, i, o, l, v, d;
    u(1, arguments);
    var h = _(),
        c = O((e = (r = (n = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : h.weekStartsOn) !== null && r !== void 0 ? r : (v = h.locale) === null || v === void 0 || (d = v.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && e !== void 0 ? e : 0);
    if (!(c >= 0 && c <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var m = s(a),
        f = m.getDay(),
        w = (f < c ? -7 : 0) + 6 - (f - c);
    return m.setDate(m.getDate() + w), m.setHours(23, 59, 59, 999), m
}

function mt(a) {
    return u(1, arguments), Ye(a, {
        weekStartsOn: 1
    })
}

function _e(a, t) {
    u(2, arguments);
    var e = O(t);
    return te(a, -e)
}
var ke = 864e5;

function Se(a) {
    u(1, arguments);
    var t = s(a),
        e = t.getTime();
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
    var r = t.getTime(),
        n = e - r;
    return Math.floor(n / ke) + 1
}

function G(a) {
    u(1, arguments);
    var t = 1,
        e = s(a),
        r = e.getUTCDay(),
        n = (r < t ? 7 : 0) + r - t;
    return e.setUTCDate(e.getUTCDate() - n), e.setUTCHours(0, 0, 0, 0), e
}

function re(a) {
    u(1, arguments);
    var t = s(a),
        e = t.getUTCFullYear(),
        r = new Date(0);
    r.setUTCFullYear(e + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
    var n = G(r),
        i = new Date(0);
    i.setUTCFullYear(e, 0, 4), i.setUTCHours(0, 0, 0, 0);
    var o = G(i);
    return t.getTime() >= n.getTime() ? e + 1 : t.getTime() >= o.getTime() ? e : e - 1
}

function pe(a) {
    u(1, arguments);
    var t = re(a),
        e = new Date(0);
    e.setUTCFullYear(t, 0, 4), e.setUTCHours(0, 0, 0, 0);
    var r = G(e);
    return r
}
var Ee = 6048e5;

function xe(a) {
    u(1, arguments);
    var t = s(a),
        e = G(t).getTime() - pe(t).getTime();
    return Math.round(e / Ee) + 1
}

function ae(a, t) {
    var e, r, n, i, o, l, v, d;
    u(1, arguments);
    var h = s(a),
        c = h.getUTCFullYear(),
        m = _(),
        f = O((e = (r = (n = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : m.firstWeekContainsDate) !== null && r !== void 0 ? r : (v = m.locale) === null || v === void 0 || (d = v.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && e !== void 0 ? e : 1);
    if (!(f >= 1 && f <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var w = new Date(0);
    w.setUTCFullYear(c + 1, 0, f), w.setUTCHours(0, 0, 0, 0);
    var D = H(w, t),
        y = new Date(0);
    y.setUTCFullYear(c, 0, f), y.setUTCHours(0, 0, 0, 0);
    var C = H(y, t);
    return h.getTime() >= D.getTime() ? c + 1 : h.getTime() >= C.getTime() ? c : c - 1
}

function Ne(a, t) {
    var e, r, n, i, o, l, v, d;
    u(1, arguments);
    var h = _(),
        c = O((e = (r = (n = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : h.firstWeekContainsDate) !== null && r !== void 0 ? r : (v = h.locale) === null || v === void 0 || (d = v.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && e !== void 0 ? e : 1),
        m = ae(a, t),
        f = new Date(0);
    f.setUTCFullYear(m, 0, c), f.setUTCHours(0, 0, 0, 0);
    var w = H(f, t);
    return w
}
var We = 6048e5;

function Ue(a, t) {
    u(1, arguments);
    var e = s(a),
        r = H(e, t).getTime() - Ne(e, t).getTime();
    return Math.round(r / We) + 1
}

function g(a, t) {
    for (var e = a < 0 ? "-" : "", r = Math.abs(a).toString(); r.length < t;) r = "0" + r;
    return e + r
}
var Y = {
        y: function(t, e) {
            var r = t.getUTCFullYear(),
                n = r > 0 ? r : 1 - r;
            return g(e === "yy" ? n % 100 : n, e.length)
        },
        M: function(t, e) {
            var r = t.getUTCMonth();
            return e === "M" ? String(r + 1) : g(r + 1, 2)
        },
        d: function(t, e) {
            return g(t.getUTCDate(), e.length)
        },
        a: function(t, e) {
            var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
            switch (e) {
                case "a":
                case "aa":
                    return r.toUpperCase();
                case "aaa":
                    return r;
                case "aaaaa":
                    return r[0];
                case "aaaa":
                default:
                    return r === "am" ? "a.m." : "p.m."
            }
        },
        h: function(t, e) {
            return g(t.getUTCHours() % 12 || 12, e.length)
        },
        H: function(t, e) {
            return g(t.getUTCHours(), e.length)
        },
        m: function(t, e) {
            return g(t.getUTCMinutes(), e.length)
        },
        s: function(t, e) {
            return g(t.getUTCSeconds(), e.length)
        },
        S: function(t, e) {
            var r = e.length,
                n = t.getUTCMilliseconds(),
                i = Math.floor(n * Math.pow(10, r - 3));
            return g(i, e.length)
        }
    },
    U = {
        am: "am",
        pm: "pm",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    $e = {
        G: function(t, e, r) {
            var n = t.getUTCFullYear() > 0 ? 1 : 0;
            switch (e) {
                case "G":
                case "GG":
                case "GGG":
                    return r.era(n, {
                        width: "abbreviated"
                    });
                case "GGGGG":
                    return r.era(n, {
                        width: "narrow"
                    });
                case "GGGG":
                default:
                    return r.era(n, {
                        width: "wide"
                    })
            }
        },
        y: function(t, e, r) {
            if (e === "yo") {
                var n = t.getUTCFullYear(),
                    i = n > 0 ? n : 1 - n;
                return r.ordinalNumber(i, {
                    unit: "year"
                })
            }
            return Y.y(t, e)
        },
        Y: function(t, e, r, n) {
            var i = ae(t, n),
                o = i > 0 ? i : 1 - i;
            if (e === "YY") {
                var l = o % 100;
                return g(l, 2)
            }
            return e === "Yo" ? r.ordinalNumber(o, {
                unit: "year"
            }) : g(o, e.length)
        },
        R: function(t, e) {
            var r = re(t);
            return g(r, e.length)
        },
        u: function(t, e) {
            var r = t.getUTCFullYear();
            return g(r, e.length)
        },
        Q: function(t, e, r) {
            var n = Math.ceil((t.getUTCMonth() + 1) / 3);
            switch (e) {
                case "Q":
                    return String(n);
                case "QQ":
                    return g(n, 2);
                case "Qo":
                    return r.ordinalNumber(n, {
                        unit: "quarter"
                    });
                case "QQQ":
                    return r.quarter(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "QQQQQ":
                    return r.quarter(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "QQQQ":
                default:
                    return r.quarter(n, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        q: function(t, e, r) {
            var n = Math.ceil((t.getUTCMonth() + 1) / 3);
            switch (e) {
                case "q":
                    return String(n);
                case "qq":
                    return g(n, 2);
                case "qo":
                    return r.ordinalNumber(n, {
                        unit: "quarter"
                    });
                case "qqq":
                    return r.quarter(n, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "qqqqq":
                    return r.quarter(n, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "qqqq":
                default:
                    return r.quarter(n, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        M: function(t, e, r) {
            var n = t.getUTCMonth();
            switch (e) {
                case "M":
                case "MM":
                    return Y.M(t, e);
                case "Mo":
                    return r.ordinalNumber(n + 1, {
                        unit: "month"
                    });
                case "MMM":
                    return r.month(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "MMMMM":
                    return r.month(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "MMMM":
                default:
                    return r.month(n, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        L: function(t, e, r) {
            var n = t.getUTCMonth();
            switch (e) {
                case "L":
                    return String(n + 1);
                case "LL":
                    return g(n + 1, 2);
                case "Lo":
                    return r.ordinalNumber(n + 1, {
                        unit: "month"
                    });
                case "LLL":
                    return r.month(n, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "LLLLL":
                    return r.month(n, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "LLLL":
                default:
                    return r.month(n, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        w: function(t, e, r, n) {
            var i = Ue(t, n);
            return e === "wo" ? r.ordinalNumber(i, {
                unit: "week"
            }) : g(i, e.length)
        },
        I: function(t, e, r) {
            var n = xe(t);
            return e === "Io" ? r.ordinalNumber(n, {
                unit: "week"
            }) : g(n, e.length)
        },
        d: function(t, e, r) {
            return e === "do" ? r.ordinalNumber(t.getUTCDate(), {
                unit: "date"
            }) : Y.d(t, e)
        },
        D: function(t, e, r) {
            var n = Se(t);
            return e === "Do" ? r.ordinalNumber(n, {
                unit: "dayOfYear"
            }) : g(n, e.length)
        },
        E: function(t, e, r) {
            var n = t.getUTCDay();
            switch (e) {
                case "E":
                case "EE":
                case "EEE":
                    return r.day(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "EEEEE":
                    return r.day(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEEE":
                    return r.day(n, {
                        width: "short",
                        context: "formatting"
                    });
                case "EEEE":
                default:
                    return r.day(n, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        e: function(t, e, r, n) {
            var i = t.getUTCDay(),
                o = (i - n.weekStartsOn + 8) % 7 || 7;
            switch (e) {
                case "e":
                    return String(o);
                case "ee":
                    return g(o, 2);
                case "eo":
                    return r.ordinalNumber(o, {
                        unit: "day"
                    });
                case "eee":
                    return r.day(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "eeeee":
                    return r.day(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeeee":
                    return r.day(i, {
                        width: "short",
                        context: "formatting"
                    });
                case "eeee":
                default:
                    return r.day(i, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        c: function(t, e, r, n) {
            var i = t.getUTCDay(),
                o = (i - n.weekStartsOn + 8) % 7 || 7;
            switch (e) {
                case "c":
                    return String(o);
                case "cc":
                    return g(o, e.length);
                case "co":
                    return r.ordinalNumber(o, {
                        unit: "day"
                    });
                case "ccc":
                    return r.day(i, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "ccccc":
                    return r.day(i, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccccc":
                    return r.day(i, {
                        width: "short",
                        context: "standalone"
                    });
                case "cccc":
                default:
                    return r.day(i, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        i: function(t, e, r) {
            var n = t.getUTCDay(),
                i = n === 0 ? 7 : n;
            switch (e) {
                case "i":
                    return String(i);
                case "ii":
                    return g(i, e.length);
                case "io":
                    return r.ordinalNumber(i, {
                        unit: "day"
                    });
                case "iii":
                    return r.day(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "iiiii":
                    return r.day(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "iiiiii":
                    return r.day(n, {
                        width: "short",
                        context: "formatting"
                    });
                case "iiii":
                default:
                    return r.day(n, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        a: function(t, e, r) {
            var n = t.getUTCHours(),
                i = n / 12 >= 1 ? "pm" : "am";
            switch (e) {
                case "a":
                case "aa":
                    return r.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "aaa":
                    return r.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "aaaaa":
                    return r.dayPeriod(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "aaaa":
                default:
                    return r.dayPeriod(i, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        b: function(t, e, r) {
            var n = t.getUTCHours(),
                i;
            switch (n === 12 ? i = U.noon : n === 0 ? i = U.midnight : i = n / 12 >= 1 ? "pm" : "am", e) {
                case "b":
                case "bb":
                    return r.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "bbb":
                    return r.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "bbbbb":
                    return r.dayPeriod(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "bbbb":
                default:
                    return r.dayPeriod(i, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        B: function(t, e, r) {
            var n = t.getUTCHours(),
                i;
            switch (n >= 17 ? i = U.evening : n >= 12 ? i = U.afternoon : n >= 4 ? i = U.morning : i = U.night, e) {
                case "B":
                case "BB":
                case "BBB":
                    return r.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "BBBBB":
                    return r.dayPeriod(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "BBBB":
                default:
                    return r.dayPeriod(i, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        h: function(t, e, r) {
            if (e === "ho") {
                var n = t.getUTCHours() % 12;
                return n === 0 && (n = 12), r.ordinalNumber(n, {
                    unit: "hour"
                })
            }
            return Y.h(t, e)
        },
        H: function(t, e, r) {
            return e === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
                unit: "hour"
            }) : Y.H(t, e)
        },
        K: function(t, e, r) {
            var n = t.getUTCHours() % 12;
            return e === "Ko" ? r.ordinalNumber(n, {
                unit: "hour"
            }) : g(n, e.length)
        },
        k: function(t, e, r) {
            var n = t.getUTCHours();
            return n === 0 && (n = 24), e === "ko" ? r.ordinalNumber(n, {
                unit: "hour"
            }) : g(n, e.length)
        },
        m: function(t, e, r) {
            return e === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
                unit: "minute"
            }) : Y.m(t, e)
        },
        s: function(t, e, r) {
            return e === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
                unit: "second"
            }) : Y.s(t, e)
        },
        S: function(t, e) {
            return Y.S(t, e)
        },
        X: function(t, e, r, n) {
            var i = n._originalDate || t,
                o = i.getTimezoneOffset();
            if (o === 0) return "Z";
            switch (e) {
                case "X":
                    return j(o);
                case "XXXX":
                case "XX":
                    return E(o);
                case "XXXXX":
                case "XXX":
                default:
                    return E(o, ":")
            }
        },
        x: function(t, e, r, n) {
            var i = n._originalDate || t,
                o = i.getTimezoneOffset();
            switch (e) {
                case "x":
                    return j(o);
                case "xxxx":
                case "xx":
                    return E(o);
                case "xxxxx":
                case "xxx":
                default:
                    return E(o, ":")
            }
        },
        O: function(t, e, r, n) {
            var i = n._originalDate || t,
                o = i.getTimezoneOffset();
            switch (e) {
                case "O":
                case "OO":
                case "OOO":
                    return "GMT" + X(o, ":");
                case "OOOO":
                default:
                    return "GMT" + E(o, ":")
            }
        },
        z: function(t, e, r, n) {
            var i = n._originalDate || t,
                o = i.getTimezoneOffset();
            switch (e) {
                case "z":
                case "zz":
                case "zzz":
                    return "GMT" + X(o, ":");
                case "zzzz":
                default:
                    return "GMT" + E(o, ":")
            }
        },
        t: function(t, e, r, n) {
            var i = n._originalDate || t,
                o = Math.floor(i.getTime() / 1e3);
            return g(o, e.length)
        },
        T: function(t, e, r, n) {
            var i = n._originalDate || t,
                o = i.getTime();
            return g(o, e.length)
        }
    };

function X(a, t) {
    var e = a > 0 ? "-" : "+",
        r = Math.abs(a),
        n = Math.floor(r / 60),
        i = r % 60;
    if (i === 0) return e + String(n);
    var o = t;
    return e + String(n) + o + g(i, 2)
}

function j(a, t) {
    if (a % 60 === 0) {
        var e = a > 0 ? "-" : "+";
        return e + g(Math.abs(a) / 60, 2)
    }
    return E(a, t)
}

function E(a, t) {
    var e = t || "",
        r = a > 0 ? "-" : "+",
        n = Math.abs(a),
        i = g(Math.floor(n / 60), 2),
        o = g(n % 60, 2);
    return r + i + e + o
}
var K = function(t, e) {
        switch (t) {
            case "P":
                return e.date({
                    width: "short"
                });
            case "PP":
                return e.date({
                    width: "medium"
                });
            case "PPP":
                return e.date({
                    width: "long"
                });
            case "PPPP":
            default:
                return e.date({
                    width: "full"
                })
        }
    },
    ne = function(t, e) {
        switch (t) {
            case "p":
                return e.time({
                    width: "short"
                });
            case "pp":
                return e.time({
                    width: "medium"
                });
            case "ppp":
                return e.time({
                    width: "long"
                });
            case "pppp":
            default:
                return e.time({
                    width: "full"
                })
        }
    },
    Ie = function(t, e) {
        var r = t.match(/(P+)(p+)?/) || [],
            n = r[1],
            i = r[2];
        if (!i) return K(t, e);
        var o;
        switch (n) {
            case "P":
                o = e.dateTime({
                    width: "short"
                });
                break;
            case "PP":
                o = e.dateTime({
                    width: "medium"
                });
                break;
            case "PPP":
                o = e.dateTime({
                    width: "long"
                });
                break;
            case "PPPP":
            default:
                o = e.dateTime({
                    width: "full"
                });
                break
        }
        return o.replace("{{date}}", K(n, e)).replace("{{time}}", ne(i, e))
    },
    Pe = {
        p: ne,
        P: Ie
    },
    Fe = ["D", "DD"],
    Le = ["YY", "YYYY"];

function He(a) {
    return Fe.indexOf(a) !== -1
}

function Re(a) {
    return Le.indexOf(a) !== -1
}

function J(a, t, e) {
    if (a === "YYYY") throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (a === "YY") throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (a === "D") throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (a === "DD") throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))
}
var qe = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    Ge = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    Qe = /^'([^]*?)'?$/,
    Be = /''/g,
    Xe = /[a-zA-Z]/;

function gt(a, t, e) {
    var r, n, i, o, l, v, d, h, c, m, f, w, D, y, C, k, T, I;
    u(2, arguments);
    var B = String(t),
        S = _(),
        p = (r = (n = e == null ? void 0 : e.locale) !== null && n !== void 0 ? n : S.locale) !== null && r !== void 0 ? r : Z,
        W = O((i = (o = (l = (v = e == null ? void 0 : e.firstWeekContainsDate) !== null && v !== void 0 ? v : e == null || (d = e.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && l !== void 0 ? l : S.firstWeekContainsDate) !== null && o !== void 0 ? o : (c = S.locale) === null || c === void 0 || (m = c.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
    if (!(W >= 1 && W <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var P = O((f = (w = (D = (y = e == null ? void 0 : e.weekStartsOn) !== null && y !== void 0 ? y : e == null || (C = e.locale) === null || C === void 0 || (k = C.options) === null || k === void 0 ? void 0 : k.weekStartsOn) !== null && D !== void 0 ? D : S.weekStartsOn) !== null && w !== void 0 ? w : (T = S.locale) === null || T === void 0 || (I = T.options) === null || I === void 0 ? void 0 : I.weekStartsOn) !== null && f !== void 0 ? f : 0);
    if (!(P >= 0 && P <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!p.localize) throw new RangeError("locale must contain localize property");
    if (!p.formatLong) throw new RangeError("locale must contain formatLong property");
    var F = s(a);
    if (!ye(F)) throw new RangeError("Invalid time value");
    var oe = N(F),
        ue = _e(F, oe),
        se = {
            firstWeekContainsDate: W,
            weekStartsOn: P,
            locale: p,
            _originalDate: F
        },
        le = B.match(Ge).map(function(M) {
            var b = M[0];
            if (b === "p" || b === "P") {
                var L = Pe[b];
                return L(M, p.formatLong)
            }
            return M
        }).join("").match(qe).map(function(M) {
            if (M === "''") return "'";
            var b = M[0];
            if (b === "'") return je(M);
            var L = $e[b];
            if (L) return !(e != null && e.useAdditionalWeekYearTokens) && Re(M) && J(M, t, String(a)), !(e != null && e.useAdditionalDayOfYearTokens) && He(M) && J(M, t, String(a)), L(ue, M, p.localize, se);
            if (b.match(Xe)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + b + "`");
            return M
        }).join("");
    return le
}

function je(a) {
    var t = a.match(Qe);
    return t ? t[1].replace(Be, "'") : a
}

function ie(a, t) {
    if (a == null) throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (a[e] = t[e]);
    return a
}

function Ke(a) {
    return ie({}, a)
}
var A = 1e3 * 60,
    Q = 60 * 24,
    V = Q * 30,
    z = Q * 365;

function ht(a, t, e) {
    var r, n, i;
    u(2, arguments);
    var o = _(),
        l = (r = (n = e == null ? void 0 : e.locale) !== null && n !== void 0 ? n : o.locale) !== null && r !== void 0 ? r : Z;
    if (!l.formatDistance) throw new RangeError("locale must contain localize.formatDistance property");
    var v = Oe(a, t);
    if (isNaN(v)) throw new RangeError("Invalid time value");
    var d = ie(Ke(e), {
            addSuffix: !!(e != null && e.addSuffix),
            comparison: v
        }),
        h, c;
    v > 0 ? (h = s(t), c = s(a)) : (h = s(a), c = s(t));
    var m = String((i = e == null ? void 0 : e.roundingMethod) !== null && i !== void 0 ? i : "round"),
        f;
    if (m === "floor") f = Math.floor;
    else if (m === "ceil") f = Math.ceil;
    else if (m === "round") f = Math.round;
    else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
    var w = c.getTime() - h.getTime(),
        D = w / A,
        y = N(c) - N(h),
        C = (w - y) / A,
        k = e == null ? void 0 : e.unit,
        T;
    if (k ? T = String(k) : D < 1 ? T = "second" : D < 60 ? T = "minute" : D < Q ? T = "hour" : C < V ? T = "day" : C < z ? T = "month" : T = "year", T === "second") {
        var I = f(w / 1e3);
        return l.formatDistance("xSeconds", I, d)
    } else if (T === "minute") {
        var B = f(D);
        return l.formatDistance("xMinutes", B, d)
    } else if (T === "hour") {
        var S = f(D / 60);
        return l.formatDistance("xHours", S, d)
    } else if (T === "day") {
        var p = f(C / Q);
        return l.formatDistance("xDays", p, d)
    } else if (T === "month") {
        var W = f(C / V);
        return W === 12 && k !== "month" ? l.formatDistance("xYears", 1, d) : l.formatDistance("xMonths", W, d)
    } else if (T === "year") {
        var P = f(C / z);
        return l.formatDistance("xYears", P, d)
    }
    throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")
}

function Je(a) {
    u(1, arguments);
    var t = s(a),
        e = t.getFullYear(),
        r = t.getMonth(),
        n = new Date(0);
    return n.setFullYear(e, r + 1, 0), n.setHours(0, 0, 0, 0), n.getDate()
}
var Ae = 6048e5;

function wt(a) {
    u(1, arguments);
    var t = s(a),
        e = R(t).getTime() - ge(t).getTime();
    return Math.round(e / Ae) + 1
}

function Ve(a) {
    u(1, arguments);
    var t = s(a),
        e = t.getTime();
    return e
}

function Ot(a) {
    return u(1, arguments), Math.floor(Ve(a) / 1e3)
}

function ze(a, t) {
    var e, r, n, i, o, l, v, d;
    u(1, arguments);
    var h = s(a),
        c = h.getFullYear(),
        m = _(),
        f = O((e = (r = (n = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : m.firstWeekContainsDate) !== null && r !== void 0 ? r : (v = m.locale) === null || v === void 0 || (d = v.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && e !== void 0 ? e : 1);
    if (!(f >= 1 && f <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var w = new Date(0);
    w.setFullYear(c + 1, 0, f), w.setHours(0, 0, 0, 0);
    var D = x(w, t),
        y = new Date(0);
    y.setFullYear(c, 0, f), y.setHours(0, 0, 0, 0);
    var C = x(y, t);
    return h.getTime() >= D.getTime() ? c + 1 : h.getTime() >= C.getTime() ? c : c - 1
}

function Ze(a, t) {
    var e, r, n, i, o, l, v, d;
    u(1, arguments);
    var h = _(),
        c = O((e = (r = (n = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : h.firstWeekContainsDate) !== null && r !== void 0 ? r : (v = h.locale) === null || v === void 0 || (d = v.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && e !== void 0 ? e : 1),
        m = ze(a, t),
        f = new Date(0);
    f.setFullYear(m, 0, c), f.setHours(0, 0, 0, 0);
    var w = x(f, t);
    return w
}
var et = 6048e5;

function Tt(a, t) {
    u(1, arguments);
    var e = s(a),
        r = x(e, t).getTime() - Ze(e, t).getTime();
    return Math.round(r / et) + 1
}

function tt(a) {
    u(1, arguments);
    var t = s(a),
        e = t.getMonth();
    return t.setFullYear(t.getFullYear(), e + 1, 0), t.setHours(0, 0, 0, 0), t
}

function Dt(a, t) {
    return u(1, arguments), Me(tt(a), be(a), t) + 1
}

function yt(a, t) {
    u(2, arguments);
    var e = s(a),
        r = s(t);
    return e.getTime() > r.getTime()
}

function Ct(a, t) {
    u(2, arguments);
    var e = s(a),
        r = s(t);
    return e.getTime() < r.getTime()
}

function Mt(a, t) {
    u(2, arguments);
    var e = s(a),
        r = s(t);
    return e.getTime() === r.getTime()
}

function bt(a, t) {
    u(2, arguments);
    var e = s(a),
        r = s(t);
    return e.getFullYear() === r.getFullYear() && e.getMonth() === r.getMonth()
}

function Yt(a, t) {
    u(2, arguments);
    var e = s(a),
        r = s(t);
    return e.getFullYear() === r.getFullYear()
}

function _t(a) {
    return u(1, arguments), Te(a, Date.now())
}

function kt(a, t) {
    u(2, arguments);
    var e = O(t);
    return ee(a, -e)
}

function St(a, t) {
    u(2, arguments);
    var e = s(a),
        r = O(t),
        n = e.getFullYear(),
        i = e.getDate(),
        o = new Date(0);
    o.setFullYear(n, r, 15), o.setHours(0, 0, 0, 0);
    var l = Je(o);
    return e.setMonth(r, Math.min(i, l)), e
}

function pt(a, t) {
    u(2, arguments);
    var e = s(a),
        r = O(t);
    return isNaN(e.getTime()) ? new Date(NaN) : (e.setFullYear(r), e)
}
export {
    R as A, x as B, wt as C, Tt as D, De as E, st as F, at as G, ht as H, ot as I, nt as _, Te as a, ee as b, Ct as c, _t as d, it as e, gt as f, be as g, ct as h, Mt as i, q as j, ve as k, dt as l, bt as m, yt as n, Ot as o, Dt as p, ut as q, Yt as r, kt as s, St as t, pt as u, vt as v, lt as w, ft as x, mt as y, Ye as z
};
//# sourceMappingURL=date-fns-C6zgY02b.js.map