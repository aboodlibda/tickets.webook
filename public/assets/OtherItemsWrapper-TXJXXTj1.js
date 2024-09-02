import {
    j as e,
    t as g,
    G as y
} from "./@hy/experiences-909RjQqY.js";
import {
    u as w,
    L as N,
    r as u
} from "./vendor-DR5RWKqR.js";
import {
    B as n
} from "./@wbk/ui-CXvSo9mp.js";
import {
    u as f
} from "./@wbk/queue-C6znSwC4.js";
import {
    r as O
} from "./index-CH6M7U1f.js";
import {
    u as j,
    T as k
} from "./react-i18next-C9Q2F8A2.js";
const _ = ({
        event: s,
        onClick: r,
        className: m = "",
        btnClassName: d = ""
    }) => {
        const {
            lang: x
        } = w(), o = O(s.__typename), {
            t: i
        } = j(["common", "event"]), {
            isActive: h,
            queue: l,
            shouldWaitQueue: c
        } = f();
        if (l || h || c) return null;
        const a = `/${x}/${o}/${s.slug}`,
            t = o === "auctions" ? a : `${a}/book`;
        return e.jsxs(n, {
            queueProtected: !r,
            as: r ? "button" : N,
            to: t,
            onClick: () => {
                r && r()
            },
            theme: "white",
            className: g("bg-body-lighter hover:bg-body-lighter active:bg-body-lighter relative flex basis-full flex-col items-center justify-between overflow-hidden rounded-lg p-0", "border-body-lighter border sm:basis-[calc(50%-16px)]", "text-start text-sm", m),
            children: [e.jsx("div", {
                className: "relative w-full",
                children: e.jsx("img", {
                    className: "h-40 w-full object-cover",
                    src: s.image11.url,
                    alt: s.image11.title
                })
            }), e.jsxs("div", {
                className: "flex w-full grow flex-col justify-between space-y-2 p-2 text-white",
                children: [e.jsx("div", {
                    className: "grow",
                    children: e.jsx("p", {
                        className: "line-clamp-2 text-sm font-bold",
                        children: s.title
                    })
                }), e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [e.jsx("div", {
                        className: "text-xs",
                        children: s.startingPrice > 0 && e.jsx(k, {
                            i18nKey: "starts_from_price_bolded",
                            ns: "event",
                            values: {
                                price: y(s.startingPrice),
                                currency: i(s.currencyCode || "SAR")
                            },
                            children: e.jsx("span", {
                                className: "text-base font-semibold"
                            })
                        })
                    }), e.jsx(n, {
                        as: "div",
                        className: g("shrink-0", d),
                        tabIndex: -1,
                        children: s.buttonLabel || i("event:buy")
                    })]
                })]
            })]
        })
    },
    I = ({
        contentfulEvent: s,
        children: r
    }) => {
        var l, c;
        const m = !!((c = (l = s == null ? void 0 : s.otherBookingSection) == null ? void 0 : l.contentCollection) != null && c.items),
            [d, x] = u.useState(m),
            {
                t: o
            } = j("booking"),
            i = u.useMemo(() => {
                var p, b;
                const a = !!(s != null && s.otherBookingSection),
                    t = (b = (p = s == null ? void 0 : s.otherBookingSection) == null ? void 0 : p.contentCollection) == null ? void 0 : b.items;
                return !a || !(t != null && t.length) ? null : [s].concat(t)
            }, [s]),
            h = () => {
                x(!1)
            };
        return d ? e.jsxs("div", {
            className: "2lg:py-4 container space-y-4 px-4 py-2",
            children: [e.jsx("h2", {
                className: "2l:text-lg text-base",
                children: o("booking:select_your_booking")
            }), e.jsx("div", {
                className: "flex flex-wrap justify-center gap-4 md:justify-start",
                children: i == null ? void 0 : i.map(a => e.jsx(_, {
                    className: "lg:basis-[calc(33.3%-16px)] xl:basis-[calc(25%-16px)]",
                    onClick: (s == null ? void 0 : s.slug) === a.slug ? h : void 0,
                    event: a
                }, a.id))
            })]
        }) : r
    };
export {
    I as O
};
//# sourceMappingURL=OtherItemsWrapper-TXJXXTj1.js.map