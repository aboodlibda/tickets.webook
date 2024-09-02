import {
    j as t,
    t as h
} from "./@hy/experiences-909RjQqY.js";
import {
    B as x
} from "./@wbk/ui-CXvSo9mp.js";
import {
    e as g,
    d as f,
    u as d
} from "./vendor-DR5RWKqR.js";
import {
    u as j
} from "./react-i18next-C9Q2F8A2.js";
const w = ({
    text: s,
    className: r = "",
    backToExplore: o,
    nativeBack: n,
    customComponent: m,
    ...c
}) => {
    const {
        pathname: i
    } = g(), e = f(), {
        lang: p
    } = d(), {
        t: a
    } = j("common"), l = () => {
        if (n) {
            e(-1);
            return
        }
        if (o) {
            e(`/${p}/explore`, {
                replace: !0
            });
            return
        }
        const u = i.split("/").slice(0, -1).join("/") || "/";
        e(u, {
            replace: !0
        })
    };
    return t.jsx(x, {
        theme: "transparent",
        shape: "text",
        className: h("hover:bg-primary/10 -mx-1 mb-2 flex min-h-[30px] min-w-[36px] shrink-0 items-center gap-2 !px-1 py-1 text-sm hover:opacity-60 focus:ring-1", r),
        onClick: l,
        ...c,
        children: m || t.jsxs(t.Fragment, {
            children: [t.jsx("img", {
                src: "/icons/common/arrow.svg",
                width: 20,
                height: 20,
                className: "ltr:rotate-180",
                alt: s || a("common:back")
            }), t.jsx("span", {
                className: "ltr:pr-2 rtl:pl-2",
                children: s || a("common:back")
            })]
        })
    })
};
export {
    w as B
};
//# sourceMappingURL=BackButton-WupiqBfd.js.map