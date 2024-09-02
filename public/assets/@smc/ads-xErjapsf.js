import {
    r as f
} from "../vendor-DR5RWKqR.js";
import {
    j as w,
    t as b,
    u as L,
    a as U,
    l as x
} from "../@hy/experiences-909RjQqY.js";
import {
    b as S
} from "../@wbk/hooks-_YU-oIZS.js";
var M = f.createContext(null),
    N = () => {
        const n = f.useContext(M);
        if (!n) throw new Error("useAdsProvider must be used within an SmcAdsProvider, refer to usage instructions: https://github.com/nadude/webook-frontend/blob/main/packages/ads/README.md");
        return n
    },
    T = Object.defineProperty,
    z = Object.defineProperties,
    B = Object.getOwnPropertyDescriptors,
    y = Object.getOwnPropertySymbols,
    R = Object.prototype.hasOwnProperty,
    D = Object.prototype.propertyIsEnumerable,
    j = (n, t, e) => t in n ? T(n, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : n[t] = e,
    E = (n, t) => {
        for (var e in t || (t = {})) R.call(t, e) && j(n, e, t[e]);
        if (y)
            for (var e of y(t)) D.call(t, e) && j(n, e, t[e]);
        return n
    },
    $ = (n, t) => z(n, B(t)),
    I = (n, t) => {
        var e = {};
        for (var r in n) R.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
        if (n != null && y)
            for (var r of y(n)) t.indexOf(r) < 0 && D.call(n, r) && (e[r] = n[r]);
        return e
    },
    k = ({
        type: n = "slot",
        slotId: t = U(),
        format: e,
        adUnit: r,
        size: p = [],
        show: a,
        mapping: l,
        targeting: g,
        className: s,
        onRendered: m
    }) => {
        const [_, h] = f.useState(!1), i = f.useRef(null), v = typeof window < "u" && typeof(window == null ? void 0 : window.googletag) < "u";
        return f.useEffect(() => (v && googletag.cmd.push(() => {
            var d, o;
            let u = null;
            if (n === "outOfPage") {
                const c = e === "SLOT_ID" ? t : googletag.enums.OutOfPageFormat[e || "BOTTOM_ANCHOR"];
                u = googletag.defineOutOfPageSlot(r, c)
            } else {
                const c = p.length > 0 ? p : "fluid";
                u = googletag.defineSlot(r, c, t)
            }
            if (u && (i.current = u, i.current.addService(googletag.pubads()), googletag.display(i.current)), l != null && l.length) {
                const c = googletag.sizeMapping();
                for (const O of l) c.addSize(O[0], O[1]);
                (d = i.current) == null || d.defineSizeMapping(c.build() || [])
            }
            if (g)
                for (const c in g)(o = i.current) == null || o.setTargeting(c, g[c])
        }), () => {
            v && googletag.cmd.push(() => {
                i.current && googletag.destroySlots([i.current])
            })
        }), [v]), f.useEffect(() => {
            const d = typeof a > "u" || a,
                o = i.current;
            d && o && googletag.cmd.push(() => {
                googletag.pubads().refresh([o])
            })
        }, [a]), f.useEffect(() => {
            v && googletag.cmd.push(() => {
                googletag.pubads().addEventListener("slotRenderEnded", d => {
                    d.slot.getSlotElementId() === t && (m ? m(d) : d.isEmpty && h(!0))
                })
            })
        }, []), !v || _ || n === "outOfPage" && e !== "SLOT_ID" ? null : w.jsx("div", {
            id: t,
            className: s
        })
    },
    C = k,
    q = "",
    V = n => {
        var t = n,
            {
                adUnit: e,
                className: r,
                slotId: p,
                children: a
            } = t,
            l = I(t, ["adUnit", "className", "slotId", "children"]);
        const {
            env: g
        } = N(), {
            data: s,
            isLoading: m,
            isError: _
        } = L({
            queryKey: ["ads"],
            queryFn: () => fetch(`${q}/@smc/ads/ads.json`).then(u => u.json()),
            staleTime: 1 / 0,
            gcTime: 1 / 0
        }), [h, i] = f.useState(!0), v = typeof window < "u" ? window.location.pathname : "", d = g === "development" ? "test" : e, o = s == null ? void 0 : s[d];
        return _ || !m && !o ? null : w.jsxs("div", {
            className: `${h?"hidden":r}`,
            children: [(o == null ? void 0 : o.adUnit) && w.jsx(C, $(E({}, l), {
                adUnit: o.adUnit,
                slotId: p || e,
                targeting: E({
                    URL: v
                }, (o == null ? void 0 : o.targeting) || {}),
                onRendered: u => {
                    u.isEmpty || i(!1), l.onRendered && l.onRendered(u)
                }
            })), a]
        })
    },
    P = V,
    F = ({
        adUnit: n,
        slotId: t,
        className: e
    }) => {
        const {
            isMobile: r
        } = S();
        return r ? null : w.jsx(P, {
            adUnit: n,
            slotId: t,
            className: b("relative z-20 mx-auto flex min-h-[122px] max-w-full items-center justify-center overflow-hidden py-4 [&>div]:mx-auto", e),
            mapping: [
                [
                    [1e3, 100],
                    [
                        [728, 90],
                        [970, 90]
                    ]
                ],
                [
                    [750, 100],
                    [728, 90]
                ]
            ]
        })
    },
    J = F,
    G = ({
        adUnit: n,
        slotId: t,
        className: e
    }) => {
        const {
            isMobile: r
        } = S();
        return r ? w.jsx(P, {
            adUnit: n,
            slotId: t,
            className: b("relative z-20 mx-auto -mb-4 flex min-h-[66px] max-w-full items-center justify-center overflow-hidden pt-4 [&>div]:mx-auto", e),
            mapping: [
                [
                    [0, 0],
                    [
                        [320, 50],
                        [320, 48]
                    ]
                ]
            ]
        }) : null
    },
    W = G,
    H = ({
        adUnit: n,
        className: t,
        slotId: e,
        children: r
    }) => {
        const {
            isMobile: p
        } = S(), a = p ? "mmpu" : "mpu";
        return w.jsx(P, {
            slotId: e ? `${e}-${a}` : void 0,
            adUnit: `${n}/${a}`,
            className: b("relative z-20 flex min-h-[250px] w-full items-center justify-center overflow-hidden [&>div>div>iframe]:rounded-md", t),
            mapping: [
                [
                    [0, 0],
                    [
                        [300, 250],
                        [336, 280]
                    ]
                ]
            ],
            children: r
        })
    },
    Y = H,
    A = typeof window < "u",
    K = () => {
        const t = new URLSearchParams(typeof window < "u" ? window.location.search : "").get("type"),
            e = typeof window < "u" ? window.location.pathname : "",
            r = () => {
                A && (x({
                    id: "gpt-js",
                    url: "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
                    target: "head"
                }), window.googletag = window.googletag || {
                    cmd: []
                }, googletag.cmd.push(() => {
                    googletag.pubads().disableInitialLoad(), googletag.pubads().enableSingleRequest(), googletag.pubads().enableVideoAds(), googletag.pubads().collapseEmptyDivs(), googletag.enableServices()
                }))
            },
            p = () => {
                A && (x({
                    id: "foxpush-script",
                    snippet: `
      var foxpush_account_id = '21795300705';
      var foxpush_child_id = '41141015';
      var foxpush_unit_name  = 'monetization_system/23095303796';`
                }), x({
                    id: "foxpush-js",
                    url: "https://www.foxpush.com/programmatic_video/webook_mpu.js"
                }))
            },
            a = s => s === "experiences" ? "experience" : s || "events",
            l = (s, m) => {
                const _ = m + 1,
                    h = 4;
                return s <= h ? m === s - 1 : _ % h === 0
            },
            g = f.useMemo(() => !(e != null && e.includes("ewc-") || e != null && e.includes("esports-") || e != null && e.includes("esl-")), [e]);
        return {
            initGPT: r,
            canRenderAds: g,
            exploreType: a(t),
            resolveExploreType: a,
            shouldRenderMpu: l,
            initVideoScript: p
        }
    },
    ee = K,
    te = n => {
        var t = n,
            {
                children: e
            } = t,
            r = I(t, ["children"]);
        return w.jsx(M.Provider, {
            value: {
                env: r.env || "production"
            },
            children: e
        })
    };
export {
    P as D, J as L, Y as M, te as S, W as a, ee as u
};
//# sourceMappingURL=ads-xErjapsf.js.map