import {
    r as i
} from "../vendor-DR5RWKqR.js";
import {
    x as f
} from "../@hy/experiences-DjqdbvJK.js";
var E = ({
        defaultLang: e,
        supportedLngs: s = ["en", "ar", "en-US", "ar-SA", "en-us", "ar-sa"]
    } = {}) => {
        var t;
        const n = typeof window < "u" ? window.location.pathname : "",
            o = ((t = n == null ? void 0 : n.split("/")) == null ? void 0 : t[1]) || "",
            u = s.includes(o) ? o : e,
            c = u != null && u.startsWith("ar") ? "ar" : "en";
        return {
            lang: u,
            shortLang: c
        }
    },
    W = () => {
        const [e, s] = i.useState(() => ({
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            toUp: !1,
            toDown: !1,
            diffY: 0
        }));
        return i.useEffect(() => {
            const t = () => {
                s(r => {
                    const {
                        scrollX: n,
                        scrollY: o,
                        innerWidth: a,
                        innerHeight: u
                    } = window;
                    return r.x !== n || r.y !== o ? {
                        x: n,
                        y: o,
                        width: a,
                        height: u,
                        toUp: o < r.y,
                        toDown: r.y < o,
                        diffY: o - r.y
                    } : r
                })
            };
            return t(), window.addEventListener("scroll", t, {
                capture: !1,
                passive: !0
            }), () => {
                window.removeEventListener("scroll", t)
            }
        }, []), e
    },
    m = ({
        width: e = 0,
        height: s = 0
    } = {}) => {
        const [t, r] = i.useState({
            width: window.innerWidth,
            height: window.innerHeight
        });
        return i.useEffect(() => {
            const n = () => {
                const {
                    innerWidth: o,
                    innerHeight: a
                } = window;
                (t.width !== o || t.height !== a) && r({
                    width: o,
                    height: a
                })
            };
            return n(), window.addEventListener("resize", n, {
                capture: !1,
                passive: !0
            }), () => {
                window.removeEventListener("resize", n)
            }
        }, []), {
            width: t.width,
            height: t.height,
            isLessWidth: t.width <= e,
            isLessHeight: t.height <= s
        }
    },
    v = 1170,
    I = () => {
        const {
            width: e
        } = m();
        return {
            is2lg: e >= v
        }
    },
    w = {},
    g = Date.now(),
    L = ({
        id: e,
        initialSeconds: s = 60
    }) => {
        const t = g + s * 1e3,
            [r, n] = i.useState(s),
            o = l => {
                clearInterval(w[e]), n(l), h()
            },
            a = () => {
                n(s), h()
            },
            u = () => {
                clearInterval(w[e]), n(0)
            },
            c = i.useCallback(() => {
                n(l => (l <= 1 && clearInterval(w[e]), l - 1))
            }, [e]),
            h = i.useCallback(() => {
                w[e] = setInterval(c, 1e3)
            }, [c, e]);
        i.useEffect(() => (h(), () => clearInterval(w[e])), [h]);
        const d = i.useMemo(() => {
            const l = t - Date.now();
            return {
                days: Math.floor(l / (1e3 * 60 * 60 * 24)),
                hours: Math.floor(l % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)),
                minutes: Math.floor(l % (1e3 * 60 * 60) / (1e3 * 60)),
                seconds: Math.floor(l % (1e3 * 60) / 1e3)
            }
        }, [r, t]);
        return {
            timer: d,
            isTimeUp: d.days <= 0 && d.hours <= 0 && d.minutes <= 0 && d.seconds <= 0,
            count: r,
            reset: a,
            set: o,
            stop: u
        }
    },
    b = () => {
        const [e, s] = i.useState("SSR");
        i.useEffect(() => {
            typeof navigator < "u" && s(navigator.userAgent)
        }, []);
        const t = i.useMemo(() => !!e.match(/SSR/i), [e]),
            r = i.useMemo(() => !!e.match(/Android/i), [e]),
            n = i.useMemo(() => !!e.match(/iPhone|iPad|iPod|Mobile/i), [e]),
            o = i.useMemo(() => !!e.match(/Mac/i), [e]),
            a = i.useMemo(() => !!e.match(/Opera Mini/i), [e]),
            u = i.useMemo(() => !!e.match(/IEMobile/i), [e]),
            c = i.useMemo(() => !!e.match(/Safari/i) && e.indexOf("Chrome") <= -1, [e]),
            h = i.useMemo(() => e.match(/WBKWebView/i), [e]),
            d = i.useMemo(() => r || n || a || u, [r, n, a, u]),
            l = i.useMemo(() => !d, [d]);
        return {
            isSSR: t,
            isAndroid: r,
            isIOS: n,
            isMac: o,
            isOpera: a,
            isWindowsMobile: u,
            isSafari: c,
            isMobile: d,
            isDesktop: l,
            isWebView: h
        }
    },
    D = ({
        id: e
    }) => {
        const s = document.getElementById(e),
            [t, r] = i.useState({
                width: s == null ? void 0 : s.clientWidth,
                height: s == null ? void 0 : s.clientHeight
            });
        return i.useEffect(() => {
            if (s) {
                const n = () => {
                    const {
                        clientWidth: o,
                        clientHeight: a
                    } = s;
                    (t.width !== o || t.height !== a) && r({
                        width: innerWidth,
                        height: innerHeight
                    })
                };
                return n(), window.addEventListener("resize", n, {
                    capture: !1,
                    passive: !0
                }), () => {
                    window.removeEventListener("resize", n)
                }
            }
        }, [s]), t
    },
    p = (e, s, t) => new Promise((r, n) => {
        var o = c => {
                try {
                    u(t.next(c))
                } catch (h) {
                    n(h)
                }
            },
            a = c => {
                try {
                    u(t.throw(c))
                } catch (h) {
                    n(h)
                }
            },
            u = c => c.done ? r(c.value) : Promise.resolve(c.value).then(o, a);
        u((t = t.apply(e, s)).next())
    }),
    y = "https://wbk-assets.s3.me-south-1.amazonaws.com/assets/all_email_provider_domains.txt",
    P = () => f({
        queryKey: ["emailProviders"],
        queryFn: () => p(void 0, null, function*() {
            return (yield fetch(y).then(s => s.text())).split(`
`)
        }),
        staleTime: 1 / 0,
        gcTime: 1 / 0
    }),
    x = ({
        onShow: e
    }) => (i.useEffect(() => {
        typeof window < "u" && (window.onpageshow = function(s) {
            s.persisted && e()
        })
    }, []), null);
export {
    b as a, D as b, L as c, m as d, x as e, E as f, W as g, P as h, I as u
};
//# sourceMappingURL=hooks-DLzdNyzN.js.map