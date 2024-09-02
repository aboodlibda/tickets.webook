import {
    r as f
} from "../vendor-DR5RWKqR.js";
import {
    j as e,
    y as ve,
    z as D,
    B as je,
    D as ye,
    o as we,
    m as Ne,
    F as I,
    W as Ce,
    t as ee
} from "../@hy/experiences-DjqdbvJK.js";
import {
    E as Se
} from "./logger-B2PJ36TD.js";
import {
    B as Pe,
    M as V,
    a as te,
    b as Me
} from "./ticketing-Bgv9YQT6.js";
import {
    u as Te
} from "./analytics-BQky3x7x.js";
import {
    u as se
} from "./auth-CKGQqgCY.js";
import {
    a as W,
    b as $e,
    c as Ae
} from "./hooks-DLzdNyzN.js";
import {
    f as ae,
    B as E,
    $ as Ee,
    a as Oe,
    b as Fe,
    c as ze,
    C as Q,
    g as Ie
} from "./ui-DjgVGgjs.js";
import {
    g as J,
    C as Re,
    L as oe,
    T as Be,
    b as Le,
    M as De,
    c as Ve,
    V as We,
    d as qe,
    e as Ge
} from "./svg-C7kIVvDi.js";
var ne = f.createContext(null),
    He = Object.defineProperty,
    Ue = Object.defineProperties,
    Ze = Object.getOwnPropertyDescriptors,
    R = Object.getOwnPropertySymbols,
    re = Object.prototype.hasOwnProperty,
    ce = Object.prototype.propertyIsEnumerable,
    K = (t, o, s) => o in t ? He(t, o, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : t[o] = s,
    b = (t, o) => {
        for (var s in o || (o = {})) re.call(o, s) && K(t, s, o[s]);
        if (R)
            for (var s of R(o)) ce.call(o, s) && K(t, s, o[s]);
        return t
    },
    j = (t, o) => Ue(t, Ze(o)),
    Qe = (t, o) => {
        var s = {};
        for (var n in t) re.call(t, n) && o.indexOf(n) < 0 && (s[n] = t[n]);
        if (t != null && R)
            for (var n of R(t)) o.indexOf(n) < 0 && ce.call(t, n) && (s[n] = t[n]);
        return s
    },
    ie = (t, o, s) => new Promise((n, r) => {
        var u = a => {
                try {
                    i(s.next(a))
                } catch (c) {
                    r(c)
                }
            },
            d = a => {
                try {
                    i(s.throw(a))
                } catch (c) {
                    r(c)
                }
            },
            i = a => a.done ? n(a.value) : Promise.resolve(a.value).then(u, d);
        i((s = s.apply(t, o)).next())
    }),
    yt = t => {
        var o = t,
            {
                children: s
            } = o,
            n = Qe(o, ["children"]);
        const [r] = f.useState(n);
        return e.jsx(ne.Provider, {
            value: j(b({}, r), {
                locale: n.locale
            }),
            children: s
        })
    },
    P = () => {
        const t = f.useContext(ne);
        if (!t) throw new Error("usePackages must be used within an WbkPackagesProvider, refer to usage instructions: https://github.com/nadude/webook-frontend/blob/main/packages/packages/README.md");
        return t
    },
    le = {
        ticketingPackage: {},
        number_of_people: 0,
        sessionEnd: Date.now() + 1e3 * 60 * 10,
        paymentMethod: "credit_card",
        checkoutMode: "tickets",
        selected: [],
        totalTickets: {
            items: [],
            total: 0
        },
        coupon: {
            discount: 0,
            ticket_ids: [],
            promo_code: ""
        },
        totals: {
            gross: 0,
            gross_after_discount: 0,
            totalFee: 0,
            vat: 0,
            discount_total: 0,
            net: 0,
            net_after_discount: 0
        },
        checkoutLoading: !1,
        canCheckout: !1,
        agreeTerms: {
            terms: !1,
            package: !1
        }
    },
    de = f.createContext(j(b({}, le), {
        user: {},
        clearAll: () => {},
        setTicketErrors: () => {},
        setPaymentMethod: () => {},
        setCheckoutMode: () => {},
        toggleItem: () => {},
        setNumberOfPeople: () => {},
        setCoupon: () => {},
        checkout: () => ie(void 0, null, function*() {}),
        setAgreeTerms: () => {}
    }));

function O() {
    return f.useContext(de)
}
var Je = t => t.conditions.map(o => o.operator === "all" ? o : j(b({}, o), {
        condition_items: o.condition_items.filter(s => Number(s.discount) === 100)
    })),
    Ke = ({
        ticketingPackage: t,
        children: o
    }) => {
        const [s, n] = f.useState(j(b({}, le), {
            ticketingPackage: t,
            number_of_people: Number(t == null ? void 0 : t.min_quantity) || 1,
            selected: Je(t)
        })), {
            user: r
        } = se(), [u, d] = f.useState(!1), [i, a] = f.useState(null), {
            bookingSource: c,
            locale: x,
            i18n: {
                useTranslation: k
            }
        } = P(), {
            t: C
        } = k("packages_common"), {
            cartEvent: v,
            beginCheckout: T
        } = Te(), {
            isWebView: N
        } = W(), m = () => {
            n(p => j(b({}, p), {
                selected: []
            }))
        }, w = p => {
            n(l => j(b({}, l), {
                coupon: p
            }))
        }, S = p => {
            n(l => j(b({}, l), {
                ticket_errors: p
            }))
        }, g = p => {
            n(l => j(b({}, l), {
                paymentMethod: p
            }))
        }, $ = p => {
            n(l => j(b({}, l), {
                checkoutMode: p
            }))
        }, F = p => {
            n(l => j(b({}, l), {
                number_of_people: p
            }))
        }, B = p => {
            n(l => j(b({}, l), {
                agreeTerms: b(b({}, l.agreeTerms), p)
            }))
        }, z = (p, l) => {
            n(y => j(b({}, y), {
                selected: y.selected.map(h => h._id === p ? h.condition_items.find(_ => _._id === l._id) ? (v({
                    type: "remove",
                    currency: t.currency,
                    id: l._id,
                    itemValue: +l.ticket_price,
                    title: l.event.title,
                    quantity: s.number_of_people,
                    vat: +l.ticket_vat
                }), j(b({}, h), {
                    condition_items: h.condition_items.filter(_ => _._id !== l._id)
                })) : (v({
                    type: "add",
                    currency: t.currency,
                    id: l._id,
                    itemValue: +l.ticket_price,
                    title: l.event.title,
                    quantity: s.number_of_people,
                    vat: +l.ticket_vat
                }), j(b({}, h), {
                    condition_items: h.condition_items.concat(l)
                })) : h)
            }))
        }, L = f.useMemo(() => {
            let p = 0;
            const l = 0;
            let y = 0;
            const h = 0;
            for (const _e of s.selected)
                for (const Z of _e.condition_items) {
                    const be = Number(Z.ticket_price) * s.number_of_people,
                        ke = Number(Z.ticket_vat) * s.number_of_people;
                    p += be, y += ke
                }
            const A = Number(t == null ? void 0 : t.fee_amount) || 0,
                _ = Number(t == null ? void 0 : t.fee_vat) || 0,
                he = A + _,
                q = +(A * s.number_of_people * .15).toFixed(2) || 0,
                G = he * s.number_of_people - q,
                H = y + q,
                U = p + H + G;
            return {
                gross: p,
                gross_after_discount: p - l,
                totalFee: G,
                vat: H - h,
                discount_total: l + h,
                net: U,
                net_after_discount: U - l - h
            }
        }, [s.number_of_people, s.selected, t == null ? void 0 : t.fee_amount, t == null ? void 0 : t.fee_vat]), me = () => ie(void 0, null, function*() {
            var p;
            const l = {
                redirect: window.origin + `/${x}/payment-success`,
                redirect_failed: window.origin + `/${x}/payment-failed`,
                booking_source: `${c}-${N?"app":"web"}`,
                lang: x,
                payment_method: s.paymentMethod,
                number_of_people: s.number_of_people,
                bundle_id: t._id,
                conditions: s.selected.map(y => ({
                    _id: y._id,
                    operator: y.operator,
                    condition_items: y.condition_items.map(h => ({
                        event: h.event._id,
                        ticket: h.ticket._id
                    }))
                }))
            };
            try {
                d(!0);
                const y = s.selected.flatMap(_ => _.condition_items),
                    h = y.map(_ => ({
                        _id: _._id,
                        original_price: _.ticket_price,
                        vat: _.ticket_vat,
                        price: _.ticket_price,
                        qty: s.number_of_people,
                        ticket_id: _.ticket._id,
                        currency: _.event.currency,
                        title: _.event.title,
                        zone: _.event.venue_name,
                        ticket_class: _.ticket.title
                    }));
                T({
                    items: h,
                    coupon: s.coupon,
                    zone: y.map(_ => _.event.venue_name).join(",")
                });
                const A = yield je({
                    order: l,
                    locale: x,
                    email: r == null ? void 0 : r.email,
                    usePaymentApi: !!l.is_wallet || L.net_after_discount <= 0
                });
                if (A.booked_type === "free") {
                    window.location.href = `/${x}/payment-success/${ye(A.order_id)}`;
                    return
                }
                if (!A.redirect_url) throw new Se({
                    error: new Error(C("packages_common:missing_url_message")),
                    name: "CheckoutNoRedirectUrlException"
                });
                we({
                    name: "last_book_page",
                    value: window.location.pathname,
                    expiration: .01
                }), window.location.href = A.redirect_url
            } catch (y) {
                const h = y;
                if (d(!1), (p = h == null ? void 0 : h.message) != null && p.includes("JSON")) return a(new Error(C("packages_common:missing_url_message")));
                a(h)
            }
        }), pe = f.useMemo(() => {
            const p = s.selected.flatMap(l => l.condition_items);
            return {
                items: p,
                total: s.number_of_people * p.length
            }
        }, [s.number_of_people, s.selected]), xe = L.net_after_discount <= V, ge = f.useMemo(() => s.ticket_errors && Object.values(s.ticket_errors).filter(Boolean).length > 0, [s.ticket_errors]), fe = f.useMemo(() => s.selected.some(p => p.condition_items.length === 0), [s.selected]) || ge || !xe || !s.paymentMethod || !s.agreeTerms.terms || !s.agreeTerms.package;
        return e.jsx(de.Provider, {
            value: j(b({}, s), {
                user: r,
                totals: L,
                setCoupon: w,
                clearAll: m,
                setTicketErrors: S,
                toggleItem: z,
                setNumberOfPeople: F,
                setPaymentMethod: g,
                setCheckoutMode: $,
                checkout: me,
                checkoutLoading: u,
                checkoutError: i,
                setAgreeTerms: B,
                totalTickets: pe,
                canCheckout: !fe
            }),
            children: o
        })
    },
    Xe = Ke,
    Ye = () => {
        const {
            ticketingPackage: t,
            number_of_people: o,
            setNumberOfPeople: s
        } = O(), {
            locale: n,
            i18n: {
                useTranslation: r
            }
        } = P(), {
            t: u
        } = r("packages_booking"), d = f.useMemo(() => {
            const i = Number(t == null ? void 0 : t.min_quantity) || 1,
                a = Number(t == null ? void 0 : t.max_quantity) || i,
                c = Math.max(i, a);
            return Array.from({
                length: c
            }, (x, k) => i + k)
        }, [t == null ? void 0 : t.max_quantity, t == null ? void 0 : t.min_quantity]);
        return e.jsxs("div", {
            className: "p-2 md:p-4",
            children: [e.jsx("p", {
                children: u("packages_booking:number_of_people")
            }), e.jsx(ae, {
                locale: n,
                options: {
                    dragFree: !0
                },
                children: d.map(i => e.jsx(E, {
                    theme: "primary",
                    onClick: () => s(i),
                    className: `hover:bg-primary/5 m-1 w-12 shrink-0 border-2 border-transparent bg-white/10 py-1 font-sans text-sm shadow-md ${i===o?"border-primary bg-primary/10 text-primary":"border-transparent"}`,
                    children: i
                }, i))
            })]
        })
    },
    et = Ye,
    tt = ({
        condition: t
    }) => {
        var o;
        const {
            selected: s,
            toggleItem: n,
            ticket_errors: r,
            setTicketErrors: u
        } = O(), {
            locale: d,
            i18n: {
                useTranslation: i
            }
        } = P(), {
            t: a
        } = i("packages_booking"), c = f.useMemo(() => s.find(m => m._id === t._id), [t._id, s]), x = t.operator === "all", k = Number(t.min) || 0, C = Number(t.max) || 1, v = (c == null ? void 0 : c.condition_items.length) || 0, T = v >= C, N = f.useMemo(() => r == null ? void 0 : r[(c == null ? void 0 : c._id) || ""], [c == null ? void 0 : c._id, r]);
        return f.useEffect(() => {
            const m = v > 0 && k > 0,
                w = v < k;
            m && c && (w ? u({
                [c._id]: a("packages_booking:minimum_tickets", {
                    count: k
                })
            }) : N && u({
                [c._id]: ""
            }))
        }, [k, c, v, a, N]), e.jsxs("div", {
            className: "space-y-1 p-2 md:p-4",
            children: [e.jsx("p", {
                children: t[`title_${d}`] || t.title_en
            }), !x && e.jsxs("div", {
                className: "flex items-center justify-between text-sm text-zinc-400",
                children: [e.jsx("p", {
                    children: a("packages_booking:select_up_to", {
                        max: C
                    })
                }), e.jsx("p", {
                    children: a("packages_booking:selected_from_to", {
                        from: v,
                        to: C
                    })
                })]
            }), !!N && e.jsx("p", {
                className: "text-sm text-red-500",
                children: N
            }), e.jsx(ae, {
                locale: d,
                className: "gap-2 py-1",
                as: "ul",
                options: {
                    dragFree: !0
                },
                children: (o = t.condition_items) == null ? void 0 : o.map(m => {
                    const w = x || Number(m.discount) === 100,
                        S = !w && !!(c != null && c.condition_items.find(F => F._id === m._id)),
                        g = Number(m.capacity) <= 0,
                        $ = g || T && !S;
                    return e.jsxs("li", {
                        className: `relative flex shrink-0 flex-col gap-1 rounded-md ${x?"h-52 basis-32":"h-72 basis-72"} ${$&&!w||g?"cursor-not-allowed":""}`,
                        children: [e.jsxs("div", {
                            className: `relative h-full rounded-lg border-2 ${S?"border-primary":"border-transparent"}`,
                            children: [e.jsxs(E, {
                                as: x || $ ? "div" : "button",
                                theme: "primary",
                                className: `relative h-full w-full overflow-hidden bg-transparent bg-cover bg-center bg-no-repeat px-0 py-0 ring-offset-0 hover:bg-transparent focus:bg-transparent focus:ring-2 active:bg-transparent ${g?"grayscale":""}`,
                                style: {
                                    backgroundImage: `url(${m.event.poster})`
                                },
                                onClick: () => {
                                    $ || n(t._id, m)
                                },
                                phill: !1,
                                rounded: !0,
                                children: [S && e.jsxs(e.Fragment, {
                                    children: [e.jsx(J, {
                                        className: "text-primary absolute inset-y-0 z-30 m-2 h-6 w-6 ltr:right-0 rtl:left-0"
                                    }), e.jsx("div", {
                                        className: "bg-primary/40 absolute inset-0 z-10"
                                    })]
                                }), w && e.jsx("div", {
                                    className: "absolute inset-0 z-20 bg-black/20",
                                    children: e.jsx("div", {
                                        className: "text-success absolute inset-0 flex items-end justify-center p-1 pb-2",
                                        children: e.jsxs("div", {
                                            className: "flex items-center gap-1 rounded-md bg-black/80 px-2 py-0.5",
                                            children: [e.jsx(J, {
                                                className: "h-4 w-4"
                                            }), e.jsx("p", {
                                                children: a("packages_booking:included")
                                            })]
                                        })
                                    })
                                })]
                            }), g && e.jsx("div", {
                                className: "absolute inset-0 rounded-md bg-black/80",
                                children: e.jsx("p", {
                                    className: "absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 -rotate-[20deg] p-2 text-center font-black uppercase text-red-400 ltr:text-3xl rtl:text-4xl",
                                    children: a("packages_booking:sold_out")
                                })
                            })]
                        }), e.jsxs("div", {
                            className: "px-1",
                            children: [e.jsx("p", {
                                className: `line-clamp-1 text-sm ${S?"text-primary":""}`,
                                children: m.event.title
                            }), !x && e.jsx("p", {
                                className: "line-clamp-1 text-[11px] text-zinc-400",
                                children: m.event.venue_name
                            })]
                        })]
                    }, m._id)
                })
            })]
        })
    },
    st = tt,
    M = ({
        discountPrice: t,
        originalPrice: o,
        className: s,
        currency: n
    }) => {
        const {
            i18n: {
                useTranslation: r
            }
        } = P(), {
            t: u
        } = r(["packages_common"]), d = typeof t == "number" && t >= 0 && t < o;
        return e.jsxs("div", {
            className: ee("flex items-center gap-2", s),
            children: [e.jsx("p", {
                className: d ? "text-white/60 line-through" : "",
                children: u("packages_common:price", {
                    price: I(o),
                    currency: u(`packages_common:${n}`)
                })
            }), d ? e.jsx("p", {
                className: "shrink-0 text-white",
                children: u("packages_common:price", {
                    price: I(t),
                    currency: u(`packages_common:${n}`)
                })
            }) : null]
        })
    },
    at = ({
        title: t,
        description: o,
        amount: s,
        currency: n
    }) => e.jsxs("div", {
        className: "flex items-center justify-between text-[13px]",
        children: [e.jsxs("div", {
            className: "flex w-full grow items-center gap-2",
            children: [e.jsx("p", {
                children: t
            }), o && e.jsx("div", {
                className: "relative grow",
                children: e.jsx(Ie, {
                    className: "p-2",
                    side: "bottom",
                    content: e.jsx("div", {
                        className: "text-xs",
                        dangerouslySetInnerHTML: {
                            __html: o
                        }
                    }),
                    children: e.jsx("span", {
                        className: "font-inter flex h-5 w-5 items-center justify-center rounded-full bg-white/5 focus:bg-white/10 focus:outline-none",
                        children: "i"
                    })
                })
            })]
        }), e.jsx(M, {
            className: "shrink-0",
            originalPrice: s,
            currency: n || "SAR"
        })]
    }),
    ue = at,
    ot = () => {
        var t, o;
        const {
            locale: s,
            i18n: {
                useTranslation: n
            }
        } = P(), {
            t: r
        } = n("packages_booking"), {
            isWebView: u
        } = W(), [d, i] = f.useState(!1), {
            ticketingPackage: a,
            selected: c,
            totals: x,
            number_of_people: k,
            setCheckoutMode: C,
            checkoutMode: v,
            checkoutLoading: T,
            checkout: N,
            totalTickets: m,
            canCheckout: w
        } = O();
        f.useEffect(() => {
            d && m.total <= 0 && i(!1)
        }, [d, m]);
        const S = f.useMemo(() => c.some(g => g.condition_items.length === 0), [c]);
        return e.jsxs("div", {
            className: `bg-body-light 2lg:hidden fixed bottom-0 z-[99] h-[72px] w-full ${u?"px-4 pb-8":"safe-bottom p-1"}`,
            children: [e.jsx(Ee, {
                open: d && m.total > 0,
                children: e.jsxs(Oe, {
                    children: [e.jsx(Fe, {
                        onClick: () => i(!1),
                        className: "fixed inset-0 backdrop-blur-[3px]"
                    }), e.jsx(ze, {
                        className: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-in-from-bottom-0 fixed bottom-20 w-full",
                        children: e.jsx(Ne.div, {
                            className: "mx-auto w-full max-w-md overflow-hidden",
                            initial: {
                                height: 0
                            },
                            animate: {
                                height: d ? "auto" : 0
                            },
                            children: e.jsxs("div", {
                                className: "mx-2 rounded-lg bg-[#141414]",
                                children: [e.jsx("div", {
                                    className: "flex justify-end p-1",
                                    children: e.jsx("button", {
                                        className: "m-1 flex items-center justify-center rounded-full bg-zinc-700 p-2 font-bold text-zinc-400",
                                        onClick: () => i(!1),
                                        "aria-label": "Close Tickets Summary",
                                        children: e.jsx(Re, {
                                            className: "h-3 w-3"
                                        })
                                    })
                                }), e.jsxs("div", {
                                    className: "space-y-2 px-4",
                                    children: [e.jsx("p", {
                                        className: "font-bold",
                                        children: r("packages_booking:packages_tickets", {
                                            count: k,
                                            tickets: m.total
                                        })
                                    }), e.jsx("ul", {
                                        className: "space-y-2 text-sm",
                                        id: "seat-tickets",
                                        children: m.items.map(g => e.jsx("li", {
                                            children: e.jsx("p", {
                                                children: `${k} x ${g.event.title}`
                                            })
                                        }, g._id))
                                    })]
                                }), e.jsx("hr", {
                                    className: "border-body-lighter my-4 border-dashed"
                                }), e.jsxs("div", {
                                    className: "space-y-1 px-2 pb-2",
                                    children: [e.jsxs("div", {
                                        className: "flex items-center justify-between text-xs",
                                        children: [e.jsx("p", {
                                            children: r("packages_booking:subtotal")
                                        }), e.jsx(M, {
                                            originalPrice: x.gross,
                                            discountPrice: x.gross_after_discount,
                                            currency: a.currency || "SAR"
                                        })]
                                    }), !!a.fee_amount && e.jsx(ue, {
                                        title: ((t = a.fee_title) == null ? void 0 : t[s]) || "",
                                        description: (o = a.fee_description) == null ? void 0 : o[s],
                                        amount: x.totalFee,
                                        currency: a.currency || "SAR"
                                    }), e.jsxs("div", {
                                        className: "flex items-center justify-between text-xs",
                                        children: [e.jsx("p", {
                                            children: r("packages_booking:vat")
                                        }), e.jsx(M, {
                                            originalPrice: x.vat,
                                            currency: a.currency || "SAR"
                                        })]
                                    }), e.jsxs("div", {
                                        className: "flex flex-wrap items-center justify-between font-semibold",
                                        children: [e.jsx("p", {
                                            children: r("packages_booking:total")
                                        }), e.jsx(M, {
                                            originalPrice: x.net,
                                            discountPrice: x.net_after_discount,
                                            currency: a.currency || "SAR"
                                        })]
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }), e.jsx(te, {
                locale: s,
                mode: v,
                modes: ["tickets", "checkout"],
                className: "relative z-50 mx-auto max-w-lg grow overflow-hidden",
                children: e.jsx("div", {
                    className: "mx-auto overflow-hidden p-1 text-center",
                    children: v === "tickets" ? e.jsxs("div", {
                        className: "flex w-full items-center justify-between gap-4",
                        children: [m.total > 0 ? e.jsx(E, {
                            theme: "white",
                            shape: "text",
                            className: "grow bg-white/5 focus:ring-white/20",
                            onClick: () => {
                                i(g => !g)
                            },
                            children: e.jsxs("div", {
                                className: "flex w-full items-center justify-around gap-2",
                                children: [e.jsxs("div", {
                                    children: [e.jsx("p", {
                                        className: "text-xs text-zinc-400",
                                        children: r("packages_booking:tickets_total", {
                                            count: m.total
                                        })
                                    }), e.jsx("p", {
                                        className: "text-sm font-semibold",
                                        children: r("packages_common:price", {
                                            price: I(x.net_after_discount),
                                            currency: r(a.currency || "SAR")
                                        })
                                    })]
                                }), e.jsx("svg", {
                                    width: "10",
                                    height: "7",
                                    className: `shrink-0 text-zinc-400 transition ${d?"":"rotate-180"}`,
                                    children: e.jsx("path", {
                                        d: "M9.91148 5.92015L5.30211 0.792139C5.16825 0.643212 4.93098 0.624239 4.77216 0.749759L4.74901 0.769661L0.0892809 5.91931C-0.0450745 6.06785 -0.0255751 6.29039 0.132834 6.41637C0.200789 6.47042 0.287 6.50008 0.376106 6.50008H9.6239C9.83161 6.50008 10 6.34219 10 6.14742C10 6.06425 9.96865 5.98375 9.91148 5.92015Z",
                                        fill: "currentColor"
                                    })
                                })]
                            })
                        }) : e.jsx("p", {
                            className: "text-center text-xs",
                            children: r("packages_booking:select_ticket_continue")
                        }), e.jsx(E, {
                            className: "h-12 grow basis-1/2 flex-col gap-0 py-1",
                            onClick: () => {
                                C("checkout")
                            },
                            disabled: S,
                            children: e.jsx("p", {
                                className: "font-semibold",
                                children: r("packages_booking:next")
                            })
                        })]
                    }) : e.jsx(E, {
                        loading: T,
                        className: "min-h-[50px] w-full max-w-md py-1 font-semibold",
                        onClick: () => N(),
                        id: "proceed-to-payment",
                        "data-package-name": a == null ? void 0 : a.title,
                        disabled: !w,
                        children: e.jsx("div", {
                            className: "space-y-1",
                            children: e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [e.jsx(oe, {
                                    className: `h-4 w-4 pb-0.5 ${w?"":"grayscale"}`
                                }), r("packages_booking:proceed"), e.jsx(M, {
                                    originalPrice: x.net_after_discount,
                                    currency: a.currency || "SAR"
                                })]
                            })
                        })
                    })
                })
            })]
        })
    },
    nt = ot,
    X = [De, Ve, We, qe, Ge],
    rt = ({
        className: t,
        withTabby: o,
        logosOnly: s
    }) => {
        const n = o ? X.concat(Le) : X,
            {
                i18n: {
                    useTranslation: r
                }
            } = P(),
            {
                t: u
            } = r("packages_booking");
        return s ? e.jsx(e.Fragment, {
            children: n.map((d, i) => e.jsx(d, {
                className: t
            }, i))
        }) : e.jsxs("div", {
            className: ee("rounded-lg border border-t-0 border-white/20", t),
            children: [e.jsxs("div", {
                className: "flex w-full items-center justify-between",
                children: [e.jsx("div", {
                    className: "mt-0 h-5 w-full border-t border-white/20 ltr:rounded-l-lg rtl:rounded-r-lg"
                }), e.jsx("p", {
                    className: "-mt-4 shrink-0 grow px-2 text-center text-xs text-zinc-400",
                    children: u("packages_booking:available_pay_methods")
                }), e.jsx("div", {
                    className: "mt-0 h-5 w-full border-t border-white/20 ltr:rounded-r-lg rtl:rounded-l-lg"
                })]
            }), e.jsx("div", {
                className: "-mt-2 flex w-full flex-wrap items-center justify-center gap-4 p-1 pb-3 pt-1.5",
                children: n.map((d, i) => e.jsx(d, {}, i))
            })]
        })
    },
    ct = rt,
    it = () => {
        var t, o, s, n, r, u;
        const {
            number_of_people: d,
            totalTickets: i,
            ticketingPackage: a,
            totals: c,
            checkout: x,
            checkoutError: k,
            checkoutLoading: C,
            agreeTerms: v,
            setAgreeTerms: T,
            canCheckout: N
        } = O(), {
            locale: m,
            i18n: {
                useTranslation: w,
                Trans: S
            }
        } = P(), {
            t: g
        } = w("packages_booking"), $ = k == null ? void 0 : k.message, F = (a == null ? void 0 : a.is_tabby) === "1", B = c.net_after_discount <= V;
        return e.jsx(Ce, {
            children: e.jsxs("div", {
                className: "bg-body-light top-4 z-50 rounded-lg p-2 md:p-4 lg:sticky",
                children: [e.jsx("h2", {
                    className: "pb-2 text-xl",
                    children: g("packages_booking:booking_summary")
                }), i.total > 0 ? e.jsxs(e.Fragment, {
                    children: [e.jsxs("div", {
                        className: "space-y-2",
                        children: [e.jsx("p", {
                            className: "font-bold",
                            children: g("packages_booking:packages_tickets", {
                                count: d,
                                tickets: i.total
                            })
                        }), e.jsx("ul", {
                            className: "space-y-2 text-sm",
                            id: "seat-tickets",
                            children: i.items.map(z => e.jsx("li", {
                                children: e.jsx("p", {
                                    children: `${d} x ${z.event.title}`
                                })
                            }, z._id))
                        })]
                    }), e.jsxs("div", {
                        className: "mt-8 space-y-2",
                        children: [e.jsx("div", {
                            className: "mt-0 h-[1px] w-full bg-white/20"
                        }), e.jsxs("div", {
                            className: "flex items-center justify-between text-sm",
                            children: [e.jsx("p", {
                                children: g("packages_booking:subtotal")
                            }), e.jsx(M, {
                                originalPrice: c.gross,
                                discountPrice: c.gross_after_discount,
                                currency: a.currency || "SAR"
                            })]
                        }), (a == null ? void 0 : a.fee_amount) && +a.fee_amount > 0 && e.jsx(ue, {
                            title: ((t = a.fee_title) == null ? void 0 : t[m]) || "",
                            description: ((o = a.fee_description) == null ? void 0 : o[m]) || "",
                            amount: c.totalFee,
                            currency: a.currency || "SAR"
                        }), e.jsxs("div", {
                            className: "flex items-center justify-between text-sm",
                            children: [e.jsxs("p", {
                                children: [g("packages_booking:vat"), " 15%"]
                            }), e.jsx(M, {
                                originalPrice: c.vat,
                                currency: a.currency || "SAR"
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-wrap items-center justify-between text-lg font-bold",
                            children: [e.jsx("p", {
                                children: g("packages_booking:total")
                            }), e.jsx(M, {
                                originalPrice: c.net,
                                discountPrice: c.net_after_discount,
                                currency: a.currency || "SAR"
                            })]
                        }), e.jsxs("div", {
                            className: "space-y-6 rounded-lg pt-4",
                            children: [$ && e.jsx("p", {
                                className: "text-center text-sm text-red-500",
                                children: $
                            }), !B && e.jsx("p", {
                                className: "text-error text-sm",
                                children: g("packages_booking:payment_maximum_amount", {
                                    amount: I(V),
                                    currency: g(a.currency || "SAR")
                                })
                            }), e.jsxs("div", {
                                children: [e.jsxs("div", {
                                    className: "space-y-4",
                                    children: [e.jsx(Q, {
                                        label: e.jsx("span", {
                                            className: "text-sm",
                                            children: e.jsx(S, {
                                                i18nKey: "agree",
                                                ns: "packages_booking",
                                                children: e.jsx("a", {
                                                    className: "text-primary font-semibold underline",
                                                    href: `/${m}/terms`,
                                                    target: "_blank",
                                                    children: ""
                                                })
                                            })
                                        }),
                                        groupClassName: "text-sm",
                                        className: "mt-px",
                                        checked: v.terms,
                                        onChange: () => T({
                                            terms: !v.terms
                                        })
                                    }), e.jsx(Q, {
                                        label: g("packages_booking:agree_date", {
                                            from: D(new Date((n = (s = a == null ? void 0 : a.start_date) == null ? void 0 : s.split(" ")) == null ? void 0 : n[0]), `${m}-GB`, {
                                                dateStyle: "long",
                                                timeZone: void 0
                                            }),
                                            to: D(new Date((u = (r = a == null ? void 0 : a.end_date) == null ? void 0 : r.split(" ")) == null ? void 0 : u[0]), `${m}-GB`, {
                                                dateStyle: "long",
                                                timeZone: void 0
                                            })
                                        }),
                                        groupClassName: "text-sm",
                                        className: "mt-px",
                                        checked: v.package,
                                        onChange: () => T({
                                            package: !v.package
                                        })
                                    })]
                                }), e.jsxs(E, {
                                    loading: C,
                                    className: "2lg:flex mt-8 hidden w-full gap-2 py-3 text-center text-lg font-semibold",
                                    onClick: () => x(),
                                    id: "proceed-to-payment",
                                    "data-event-name": a == null ? void 0 : a.title,
                                    disabled: !N,
                                    children: [e.jsx(oe, {
                                        className: `h-4 w-4 pb-0.5 ${N?"":"grayscale"}`
                                    }), g("packages_booking:proceed"), e.jsx(M, {
                                        originalPrice: c.net_after_discount,
                                        currency: a.currency || "SAR"
                                    })]
                                }), e.jsx("div", {
                                    className: "pt-12",
                                    children: e.jsx(ct, {
                                        withTabby: F
                                    })
                                })]
                            })]
                        })]
                    })]
                }) : e.jsxs("div", {
                    className: "space-y-10 py-12 text-center",
                    children: [e.jsx(Be, {
                        className: "mx-auto h-24 w-24 text-zinc-500"
                    }), e.jsx("p", {
                        children: g("packages_booking:select_ticket_continue")
                    })]
                })]
            })
        })
    },
    Y = it,
    lt = () => {
        var t;
        const {
            isTawakkalnaUser: o
        } = se(), {
            locale: s
        } = P(), {
            ticketingPackage: n,
            checkoutMode: r
        } = O(), {
            isWebView: u
        } = W(), d = $e({
            id: "booking-section-ref"
        }), i = f.useMemo(() => {
            let a = d.height || "100%";
            return d.height && (a = d.height - 185), u && typeof a == "number" && (a = a + 83), o && typeof a == "number" && (a = a - 84), a
        }, [d.height, u, o]);
        return e.jsxs("section", {
            className: "2lg:flex-row 2lg:overflow-visible 2lg:bg-transparent 2lg:px-6 2lg:pb-6 container relative flex max-w-screen-2xl grow flex-col gap-4 overflow-hidden px-0 py-0",
            children: [e.jsxs("div", {
                className: "bg-body-light 2lg:space-y-1 2lg:bg-transparent flex grow flex-col overflow-hidden",
                children: [e.jsx(te, {
                    locale: s,
                    mode: r,
                    modes: ["tickets", "checkout"],
                    children: e.jsx("div", {
                        id: "booking-section-ref",
                        children: e.jsx("div", {
                            className: "2lg:!h-auto 2lg:rounded-lg 2lg:bg-body-light overflow-y-auto",
                            style: {
                                height: i
                            },
                            children: r === "tickets" ? e.jsxs(e.Fragment, {
                                children: [e.jsx(et, {}), (t = n == null ? void 0 : n.conditions) == null ? void 0 : t.map(a => e.jsx(st, {
                                    condition: a
                                }, a._id))]
                            }) : e.jsx("div", {
                                className: "2lg:hidden mx-auto w-full max-w-lg",
                                children: e.jsx(Y, {})
                            })
                        })
                    })
                }), e.jsx(nt, {})]
            }), e.jsx("aside", {
                className: "2lg:block 2lg:max-w-md mx-auto hidden w-full max-w-lg shrink-0",
                children: e.jsx(Y, {})
            })]
        })
    },
    dt = lt,
    ut = () => {
        const {
            checkoutMode: t,
            setCheckoutMode: o,
            sessionEnd: s
        } = O(), {
            i18n: {
                useTranslation: n
            }
        } = P(), {
            t: r
        } = n(["ticketing_common", "packages_booking"]), {
            count: u,
            stop: d
        } = Ae({
            id: "booking-count-down",
            initialSeconds: (s - Date.now()) / 1e3
        });
        f.useEffect(() => {
            u <= 0 && (d(), window.location.reload())
        }, [u]);
        const i = f.useMemo(() => {
                const c = Date.now() / 1e3,
                    k = c + u - c;
                return D(k, "en", {
                    minute: "2-digit",
                    second: "2-digit"
                })
            }, [u]),
            a = t === "tickets";
        return e.jsxs("section", {
            className: "2lg:px-6 container flex max-w-screen-2xl items-center justify-between px-2 py-0",
            children: [e.jsx(Me, {
                className: a ? "invisible" : "",
                text: r("packages_booking:booking_summary"),
                onClick: () => {
                    o("tickets")
                }
            }), e.jsx("div", {
                className: "shrink-0 text-xs",
                children: u <= 0 ? r("packages_booking:time_out") : r("packages_booking:time_left", {
                    time: i
                })
            })]
        })
    },
    mt = ut,
    wt = ({
        packageId: t
    }) => {
        const {
            locale: o
        } = P(), {
            data: s,
            isLoading: n
        } = ve({
            slug: t,
            lang: o
        });
        if (n) return e.jsx(Pe, {});
        if (!s) throw new Error(`Package "${t}" not found`);
        return e.jsxs(e.Fragment, {
            children: [e.jsx("style", {
                children: `
        @media only screen and (max-width: 1169px){body{overflow: hidden;}
        main{display:flex; flex-direction:column;height:100vh;}
        #root > footer{display:none}
      `
            }), e.jsxs(Xe, {
                ticketingPackage: s,
                children: [e.jsx(mt, {}), e.jsx(dt, {})]
            }, o)]
        })
    };
export {
    yt as W, wt as a
};
//# sourceMappingURL=packages-DQ_Airc8.js.map