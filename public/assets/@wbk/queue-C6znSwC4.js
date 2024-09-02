import {
    r as i
} from "../vendor-DR5RWKqR.js";
import {
    y as v,
    j as s,
    t as y
} from "../@hy/experiences-909RjQqY.js";
var g = Object.defineProperty,
    j = Object.defineProperties,
    P = Object.getOwnPropertyDescriptors,
    m = Object.getOwnPropertySymbols,
    _ = Object.prototype.hasOwnProperty,
    x = Object.prototype.propertyIsEnumerable,
    p = (t, e, r) => e in t ? g(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    q = (t, e) => {
        for (var r in e || (e = {})) _.call(e, r) && p(t, r, e[r]);
        if (m)
            for (var r of m(e)) x.call(e, r) && p(t, r, e[r]);
        return t
    },
    N = (t, e) => j(t, P(e)),
    O = (t, e) => {
        var r = {};
        for (var n in t) _.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
        if (t != null && m)
            for (var n of m(t)) e.indexOf(n) < 0 && x.call(t, n) && (r[n] = t[n]);
        return r
    },
    Q = (t, e, r) => new Promise((n, a) => {
        var d = u => {
                try {
                    o(r.next(u))
                } catch (c) {
                    a(c)
                }
            },
            l = u => {
                try {
                    o(r.throw(u))
                } catch (c) {
                    a(c)
                }
            },
            o = u => u.done ? n(u.value) : Promise.resolve(u.value).then(d, l);
        o((r = r.apply(t, e)).next())
    }),
    h, b = ({
        autoRefresh: t
    } = {}) => {
        const [e, r] = i.useState(), [n, a] = i.useState(!0), d = typeof window < "u" ? window.location.pathname : "", l = i.useCallback(() => Q(void 0, null, function*() {
            try {
                const u = d.split("/").slice(2, 4) || [];
                let c = v(`queueData_q_session_-${u.join("-")}`);
                c || (c = v(`queueData_q_session_-${u.join("-")}-book`));
                const f = c ? JSON.parse(decodeURIComponent(c)) : null;
                f && r(f)
            } catch {
                return null
            } finally {
                a(!1)
            }
        }), [d]);
        i.useEffect(() => {
            l()
        }, [l]);
        const o = i.useMemo(() => (e == null ? void 0 : e.Queued) === "yes" && e.WaitingNumber > 0, [e == null ? void 0 : e.Queued, e == null ? void 0 : e.WaitingNumber]);
        return i.useEffect(() => (o && t && (h = setTimeout(() => {
            window.location.reload()
        }, 6e4)), () => {
            clearTimeout(h)
        }), [t, o]), {
            shouldWaitQueue: n,
            isActive: o,
            queue: e
        }
    },
    w = i.createContext(null),
    E = () => {
        const t = i.useContext(w);
        if (!t) throw new Error("useQueueProvider must be used within an WbkQueueProvider, refer to usage instructions: https://github.com/nadude/webook-frontend/blob/main/packages/queue/README.md");
        return t
    },
    S = ({
        children: t
    }) => {
        const {
            isActive: e,
            shouldWaitQueue: r
        } = b();
        return r || e ? null : s.jsx(s.Fragment, {
            children: t
        })
    },
    k = ({
        className: t = ""
    }) => {
        const {
            locale: e,
            i18n: {
                useTranslation: r,
                Trans: n
            }
        } = E(), {
            queue: a,
            isActive: d
        } = b({
            autoRefresh: !0
        }), {
            t: l
        } = r("queue_common");
        if (!a || !d) return null;
        const o = a.WaitingNumber / a.TotalInQueue * 100;
        return s.jsxs("div", {
            className: y("rounded-md bg-white/5 p-4", t),
            children: [s.jsx("p", {
                className: "mb-2 text-xl font-bold",
                children: l("queue_common:queue_title")
            }), s.jsx("p", {
                className: "text-text text-sm",
                children: s.jsx(n, {
                    i18nKey: "queue_common:queue_position",
                    values: {
                        total: Math.max((a == null ? void 0 : a.WaitingNumber) || 0, 1)
                    },
                    children: s.jsx("span", {
                        className: "text-lg font-bold"
                    })
                })
            }), s.jsx("div", {
                className: "bg-body relative h-10 w-full rounded-full",
                children: s.jsx("div", {
                    className: "bg-tertiary after:bg-candy-stripes after:ltr:animate-candy-stripes-ltr after:rtl:animate-candy-stripes-rtl absolute top-1/2 h-8 min-w-[80px] -translate-y-1/2 overflow-hidden rounded-full after:absolute after:inset-0 after:z-10 after:bg-[length:75px_75px] ltr:left-1 rtl:right-1",
                    style: {
                        width: `${100-Math.min(o,99)}%`
                    }
                })
            }), s.jsxs("div", {
                className: "text-text my-2 text-sm",
                children: [s.jsx("p", {
                    children: l("queue_common:queue_p1")
                }), s.jsx("p", {
                    children: l("queue_common:queue_p2")
                })]
            }), a != null && a.MessageAR || a != null && a.MessageEN ? s.jsx("p", {
                className: "max-w-[550px] text-white",
                children: e != null && e.startsWith("ar") ? a == null ? void 0 : a.MessageAR : a == null ? void 0 : a.MessageEN
            }) : null]
        })
    },
    A = t => {
        var e = t,
            {
                children: r
            } = e,
            n = O(e, ["children"]);
        const [a] = i.useState(n);
        return s.jsx(w.Provider, {
            value: N(q({}, a), {
                locale: n.locale
            }),
            children: r
        })
    };
export {
    S as H, k as Q, A as W, b as u
};
//# sourceMappingURL=queue-C6znSwC4.js.map