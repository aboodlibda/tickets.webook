import {
    j as i
} from "./@hy/experiences-909RjQqY.js";
import {
    u as w,
    d as v,
    r as B
} from "./vendor-DR5RWKqR.js";
import "./@wbk/contentful-13WVeXE2.js";
import {
    u as b,
    H as E,
    S as F
} from "./index-CH6M7U1f.js";
import {
    u as _,
    A as L
} from "./@wbk/auth-BpKCnx9p.js";
import {
    c as T
} from "./@wbk/ticketing-Bdd9xK0p.js";
import {
    u as y
} from "./@wbk/queue-C6znSwC4.js";
import {
    B as A
} from "./BookingPageSkeleton-BGvz8kC6.js";
import {
    B as S
} from "./BookingHeader-6JOpXXuf.js";
import {
    O as W
} from "./OtherItemsWrapper-TXJXXTj1.js";
import {
    u as H
} from "./react-i18next-C9Q2F8A2.js";
import "./@wbk/logger-B2PJ36TD.js";
import "./@wbk/svg-__R6E2rp.js";
import "./@wbk/analytics-B7lR_Cat.js";
import "./@wbk/hooks-_YU-oIZS.js";
import "./@wbk/ui-CXvSo9mp.js";
import "./date-fns-DGsxi8Uo.js";
import "./@react-three/drei-zjl_KbSs.js";
import "./three-CFPVlYAJ.js";
import "./@react-three/fiber-CXtEzY3H.js";
import "./i18next-CIEwNdMy.js";
import "./i18next-http-backend-Dv63VUCH.js";
import "./i18next-browser-languagedetector-C7fhXu5-.js";
import "./@smc/ads-xErjapsf.js";
import "./react-hot-toast-BeOYc3BL.js";
import "./@contentful/rich-text-react-renderer-DDXKQ87Q.js";
import "./@contentful/rich-text-types-Ck9EBoAh.js";
import "./react-hook-form-4Is_Po-Y.js";
import "./react-helmet-hdRV-4VR.js";
import "./framer-motion-CjpMPw5U.js";
import "./@wbk/packages-DLtJIzhz.js";
import "./react-share-DTvmqVZ7.js";
import "./markdown-to-jsx-CuotGn2z.js";
import "./@seatsio/seatsio-react-CnhLVPDT.js";
import "./BackButton-WupiqBfd.js";
const ho = () => {
    var a, n, l, p, u;
    const {
        isActive: r,
        shouldWaitQueue: c
    } = y(), {
        user: t,
        loading: d,
        isNewUser: g
    } = _({
        autoFetch: !0
    }), {
        slug: e,
        lang: s
    } = w(), {
        data: m,
        isLoading: f
    } = b({
        lang: s,
        limit: 1,
        where: {
            slug: e
        }
    }), h = v(), {
        t: x
    } = H(["booking"]), j = !t || g, k = !!t && !(t != null && t.force_verify_email), o = (a = m == null ? void 0 : m.items) == null ? void 0 : a[0];
    return B.useEffect(() => {
        r && h(`/${s}/events/${e}`, {
            replace: !0
        })
    }, [r, s, e]), f || d || r || c ? i.jsx(A, {}) : k && !o ? i.jsx(E, {}) : i.jsxs(i.Fragment, {
        children: [o && i.jsxs(i.Fragment, {
            children: [i.jsx(F, {
                title: ((n = o.seo) == null ? void 0 : n.title) || o.title,
                description: (l = o.seo) == null ? void 0 : l.description,
                image: ((u = (p = o.seo) == null ? void 0 : p.image) == null ? void 0 : u.url) || o.image11.url
            }), i.jsx(S, {
                event: o
            })]
        }), j ? i.jsx("div", {
            className: "2lg:my-0 mx-auto my-8 w-full max-w-lg grow overflow-hidden shadow-2xl [&>div>div]:rounded-none [&>div>div]:md:rounded-lg",
            children: i.jsx(L, {
                title: x("booking:authenticate_to_book"),
                initialMode: t != null && t.force_verify_email ? "otp" : "email"
            })
        }) : i.jsx(W, {
            contentfulEvent: o,
            children: i.jsx(T, {
                slug: (o == null ? void 0 : o.ticketingUrlSlug) || "",
                showResell: o == null ? void 0 : o.showResellBanner,
                calendarTimeLabel: o == null ? void 0 : o.calendarTimeLabel,
                calendarTimeFormat: o == null ? void 0 : o.calendarTimeFormat
            })
        })]
    })
};
export {
    ho as
    default
};
//# sourceMappingURL=index-DlNI-4Fn.js.map