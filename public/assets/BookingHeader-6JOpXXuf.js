import {
    j as e
} from "./@hy/experiences-909RjQqY.js";
import {
    f as i,
    I as r,
    g as c,
    L as m
} from "./index-CH6M7U1f.js";
import {
    B as a
} from "./BackButton-WupiqBfd.js";
const h = ({
    event: s,
    isRestaurant: l
}) => {
    var t;
    return e.jsx(i, {
        children: e.jsx("header", {
            className: "bg-body 2lg:mb-0 mb-1 py-2",
            children: e.jsxs("div", {
                className: "2lg:px-6 container flex max-w-screen-2xl items-center justify-between gap-2",
                children: [e.jsxs("div", {
                    children: [e.jsx(a, {
                        className: "2lg:flex mb-0 hidden items-start ltr:mr-1 rtl:mr-1"
                    }), e.jsx(a, {
                        className: "mb-0 justify-start text-left ring-0 focus:ring-0 rtl:text-right",
                        customComponent: e.jsxs(e.Fragment, {
                            children: [e.jsx("div", {
                                className: "mt-1.5 flex shrink-0 grow items-center gap-2",
                                children: e.jsx(r, {
                                    className: "h-12 shrink-0 items-start overflow-hidden rounded-md",
                                    src: (t = s.image11) == null ? void 0 : t.url,
                                    width: 50,
                                    height: 50,
                                    alt: s.title || ""
                                })
                            }), e.jsxs("div", {
                                className: "2lg:space-y-1 space-y-px",
                                children: [e.jsx("h1", {
                                    className: "2lg:text-lg line-clamp-2 text-sm",
                                    children: s.title
                                }), e.jsxs("div", {
                                    children: [s.schedule && !l && e.jsx(c, {
                                        schedule: s.schedule,
                                        showIcon: !1,
                                        className: "2lg:text-xs !line-clamp-1 text-[10px]"
                                    }), s.zone && e.jsx("p", {
                                        className: "2lg:text-xs text-[10px]",
                                        children: s.zone.title
                                    })]
                                })]
                            })]
                        })
                    })]
                }), e.jsx("div", {
                    className: "mt-1 flex shrink-0 items-center gap-4 [&>button]:text-xs [&>button]:text-zinc-400 md:[&>button]:text-base",
                    children: e.jsx(m, {})
                })]
            })
        })
    })
};
export {
    h as B
};
//# sourceMappingURL=BookingHeader-6JOpXXuf.js.map