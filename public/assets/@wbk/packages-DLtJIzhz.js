import {
    r as h
} from "../vendor-DR5RWKqR.js";
import {
    j as e,
    z as ve,
    B as D,
    D as je,
    F as ye,
    v as we,
    m as Ne,
    G as I,
    W as Ce,
    t as ee
} from "../@hy/experiences-909RjQqY.js";
import {
    E as Pe
} from "./logger-B2PJ36TD.js";
import {
    B as Se,
    M as V,
    a as te,
    b as Me
} from "./ticketing-Bdd9xK0p.js";
import {
    u as Te
} from "./analytics-B7lR_Cat.js";
import {
    u as se
} from "./auth-BpKCnx9p.js";
import {
    b as W,
    a as Ae,
    c as Ee,
    d as Oe
} from "./hooks-_YU-oIZS.js";
import {
    c as ne,
    B as O,
    P as $e,
    C as Q,
    d as Fe
} from "./ui-CXvSo9mp.js";
import {
    g as J,
    C as ze,
    L as oe,
    T as Ie,
    b as Re,
    M as Be,
    c as Le,
    V as De,
    d as Ve,
    e as We
} from "./svg-__R6E2rp.js";
var ae = h.createContext(null),
    qe = Object.defineProperty,
    Ge = Object.defineProperties,
    He = Object.getOwnPropertyDescriptors,
    R = Object.getOwnPropertySymbols,
    re = Object.prototype.hasOwnProperty,
    ce = Object.prototype.propertyIsEnumerable,
    K = (t, o, s) => o in t ? qe(t, o, {
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
    k = (t, o) => Ge(t, He(o)),
    Ue = (t, o) => {
        var s = {};
        for (var a in t) re.call(t, a) && o.indexOf(a) < 0 && (s[a] = t[a]);
        if (t != null && R)
            for (var a of R(t)) o.indexOf(a) < 0 && ce.call(t, a) && (s[a] = t[a]);
        return s
    },
    ie = (t, o, s) => new Promise((a, r) => {
        var u = n => {
                try {
                    l(s.next(n))
                } catch (c) {
                    r(c)
                }
            },
            i = n => {
                try {
                    l(s.throw(n))
                } catch (c) {
                    r(c)
                }
            },
            l = n => n.done ? a(n.value) : Promise.resolve(n.value).then(u, i);
        l((s = s.apply(t, o)).next())
    }),
    vt = t => {
        var o = t,
            {
                children: s
            } = o,
            a = Ue(o, ["children"]);
        const [r] = h.useState(a);
        return e.jsx(ae.Provider, {
            value: k(b({}, r), {
                locale: a.locale
            }),
            children: s
        })
    },
    S = () => {
        const t = h.useContext(ae);
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
    de = h.createContext(k(b({}, le), {
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

function $() {
    return h.useContext(de)
}
var Ze = t => t.conditions.map(o => o.operator === "all" ? o : k(b({}, o), {
        condition_items: o.condition_items.filter(s => Number(s.discount) === 100)
    })),
    Qe = ({
        ticketingPackage: t,
        children: o
    }) => {
        const [s, a] = h.useState(k(b({}, le), {
            ticketingPackage: t,
            number_of_people: Number(t == null ? void 0 : t.min_quantity) || 1,
            selected: Ze(t)
        })), {
            user: r
        } = se(), [u, i] = h.useState(!1), [l, n] = h.useState(null), {
            bookingSource: c,
            locale: g,
            i18n: {
                useTranslation: v
            }
        } = S(), {
            t: C
        } = v("packages_common"), {
            cartEvent: j,
            beginCheckout: T
        } = Te(), {
            isWebView: N
        } = W(), m = () => {
            a(p => k(b({}, p), {
                selected: []
            }))
        }, w = p => {
            a(d => k(b({}, d), {
                coupon: p
            }))
        }, P = p => {
            a(d => k(b({}, d), {
                ticket_errors: p
            }))
        }, x = p => {
            a(d => k(b({}, d), {
                paymentMethod: p
            }))
        }, A = p => {
            a(d => k(b({}, d), {
                checkoutMode: p
            }))
        }, F = p => {
            a(d => k(b({}, d), {
                number_of_people: p
            }))
        }, B = p => {
            a(d => k(b({}, d), {
                agreeTerms: b(b({}, d.agreeTerms), p)
            }))
        };
        Ae({
            onShow: () => {
                i(!1)
            }
        });
        const z = (p, d) => {
                a(y => k(b({}, y), {
                    selected: y.selected.map(_ => _._id === p ? _.condition_items.find(f => f._id === d._id) ? (j({
                        type: "remove",
                        currency: t.currency,
                        id: d._id,
                        itemValue: +d.ticket_price,
                        title: d.event.title,
                        quantity: s.number_of_people,
                        vat: +d.ticket_vat
                    }), k(b({}, _), {
                        condition_items: _.condition_items.filter(f => f._id !== d._id)
                    })) : (j({
                        type: "add",
                        currency: t.currency,
                        id: d._id,
                        itemValue: +d.ticket_price,
                        title: d.event.title,
                        quantity: s.number_of_people,
                        vat: +d.ticket_vat
                    }), k(b({}, _), {
                        condition_items: _.condition_items.concat(d)
                    })) : _)
                }))
            },
            L = h.useMemo(() => {
                let p = 0;
                const d = 0;
                let y = 0;
                const _ = 0;
                for (const fe of s.selected)
                    for (const Z of fe.condition_items) {
                        const be = Number(Z.ticket_price) * s.number_of_people,
                            ke = Number(Z.ticket_vat) * s.number_of_people;
                        p += be, y += ke
                    }
                const E = Number(t == null ? void 0 : t.fee_amount) || 0,
                    f = Number(t == null ? void 0 : t.fee_vat) || 0,
                    _e = E + f,
                    q = +(E * s.number_of_people * .15).toFixed(2) || 0,
                    G = _e * s.number_of_people - q,
                    H = y + q,
                    U = p + H + G;
                return {
                    gross: p,
                    gross_after_discount: p - d,
                    totalFee: G,
                    vat: H - _,
                    discount_total: d + _,
                    net: U,
                    net_after_discount: U - d - _
                }
            }, [s.number_of_people, s.selected, t == null ? void 0 : t.fee_amount, t == null ? void 0 : t.fee_vat]),
            me = () => ie(void 0, null, function*() {
                var p;
                const d = {
                    redirect: window.origin + `/${g}/payment-success`,
                    redirect_failed: window.origin + `/${g}/payment-failed`,
                    booking_source: `${c}-${N?"app":"web"}`,
                    lang: g,
                    payment_method: s.paymentMethod,
                    number_of_people: s.number_of_people,
                    bundle_id: t._id,
                    conditions: s.selected.map(y => ({
                        _id: y._id,
                        operator: y.operator,
                        condition_items: y.condition_items.map(_ => ({
                            event: _.event._id,
                            ticket: _.ticket._id
                        }))
                    }))
                };
                try {
                    i(!0);
                    const y = s.selected.flatMap(f => f.condition_items),
                        _ = y.map(f => ({
                            _id: f._id,
                            original_price: f.ticket_price,
                            vat: f.ticket_vat,
                            price: f.ticket_price,
                            qty: s.number_of_people,
                            ticket_id: f.ticket._id,
                            currency: f.event.currency,
                            title: f.event.title,
                            zone: f.event.venue_name,
                            ticket_class: f.ticket.title
                        }));
                    T({
                        items: _,
                        coupon: s.coupon,
                        zone: y.map(f => f.event.venue_name).join(",")
                    });
                    const E = yield je({
                        order: d,
                        locale: g,
                        email: r == null ? void 0 : r.email,
                        usePaymentApi: !!d.is_wallet || L.net_after_discount <= 0
                    });
                    if (E.booked_type === "free") {
                        window.location.href = `/${g}/payment-success/${ye(E.order_id)}`;
                        return
                    }
                    if (!E.redirect_url) throw new Pe({
                        error: new Error(C("packages_common:missing_url_message")),
                        name: "CheckoutNoRedirectUrlException"
                    });
                    we({
                        name: "last_book_page",
                        value: window.location.pathname,
                        expiration: .01
                    }), window.location.href = E.redirect_url
                } catch (y) {
                    const _ = y;
                    if (i(!1), (p = _ == null ? void 0 : _.message) != null && p.includes("JSON")) return n(new Error(C("packages_common:missing_url_message")));
                    n(_)
                }
            }),
            pe = h.useMemo(() => {
                const p = s.selected.flatMap(d => d.condition_items);
                return {
                    items: p,
                    total: s.number_of_people * p.length
                }
            }, [s.number_of_people, s.selected]),
            xe = L.net_after_discount <= V,
            ge = h.useMemo(() => s.ticket_errors && Object.values(s.ticket_errors).filter(Boolean).length > 0, [s.ticket_errors]),
            he = h.useMemo(() => s.selected.some(p => p.condition_items.length === 0), [s.selected]) || ge || !xe || !s.paymentMethod || !s.agreeTerms.terms || !s.agreeTerms.package;
        return e.jsx(de.Provider, {
            value: k(b({}, s), {
                user: r,
                totals: L,
                setCoupon: w,
                clearAll: m,
                setTicketErrors: P,
                toggleItem: z,
                setNumberOfPeople: F,
                setPaymentMethod: x,
                setCheckoutMode: A,
                checkout: me,
                checkoutLoading: u,
                checkoutError: l,
                setAgreeTerms: B,
                totalTickets: pe,
                canCheckout: !he
            }),
            children: o
        })
    },
    Je = Qe,
    Ke = () => {
        const {
            ticketingPackage: t,
            number_of_people: o,
            setNumberOfPeople: s
        } = $(), {
            locale: a,
            i18n: {
                useTranslation: r
            }
        } = S(), {
            t: u
        } = r("packages_booking"), i = h.useMemo(() => {
            const l = Number(t == null ? void 0 : t.min_quantity) || 1,
                n = Number(t == null ? void 0 : t.max_quantity) || l,
                c = Math.max(l, n);
            return Array.from({
                length: c
            }, (g, v) => l + v)
        }, [t == null ? void 0 : t.max_quantity, t == null ? void 0 : t.min_quantity]);
        return e.jsxs("div", {
            className: "p-2 md:p-4",
            children: [e.jsx("p", {
                children: u("packages_booking:number_of_people")
            }), e.jsx(ne, {
                locale: a,
                options: {
                    dragFree: !0
                },
                children: i.map(l => e.jsx(O, {
                    theme: "primary",
                    onClick: () => s(l),
                    className: `hover:bg-primary/5 m-1 w-12 shrink-0 border-2 border-transparent bg-white/10 py-1 font-sans text-sm shadow-md ${l===o?"border-primary bg-primary/10 text-primary":"border-transparent"}`,
                    children: l
                }, l))
            })]
        })
    },
    Xe = Ke,
    Ye = ({
        condition: t
    }) => {
        var o;
        const {
            selected: s,
            toggleItem: a,
            ticket_errors: r,
            setTicketErrors: u
        } = $(), {
            locale: i,
            i18n: {
                useTranslation: l
            }
        } = S(), {
            t: n
        } = l("packages_booking"), c = h.useMemo(() => s.find(m => m._id === t._id), [t._id, s]), g = t.operator === "all", v = Number(t.min) || 0, C = Number(t.max) || 1, j = (c == null ? void 0 : c.condition_items.length) || 0, T = j >= C, N = h.useMemo(() => r == null ? void 0 : r[(c == null ? void 0 : c._id) || ""], [c == null ? void 0 : c._id, r]);
        return h.useEffect(() => {
            const m = j > 0 && v > 0,
                w = j < v;
            m && c && (w ? u(k(b({}, r), {
                [c._id]: n("packages_booking:minimum_tickets", {
                    count: v
                })
            })) : N && u(k(b({}, r), {
                [c._id]: ""
            })))
        }, [v, c, j, n, N]), e.jsxs("div", {
            className: "space-y-1 p-2 md:p-4",
            children: [e.jsx("p", {
                children: t[`title_${i}`] || t.title_en
            }), !g && e.jsxs("div", {
                className: "flex items-center justify-between text-sm text-zinc-400",
                children: [e.jsx("p", {
                    children: n("packages_booking:select_up_to", {
                        max: C
                    })
                }), e.jsx("p", {
                    children: n("packages_booking:selected_from_to", {
                        from: j,
                        to: C
                    })
                })]
            }), !!N && e.jsx("p", {
                className: "text-sm text-red-500",
                children: N
            }), e.jsx(ne, {
                locale: i,
                className: "gap-2 py-1",
                as: "ul",
                options: {
                    dragFree: !0
                },
                children: (o = t.condition_items) == null ? void 0 : o.map(m => {
                    const w = g || Number(m.discount) === 100,
                        P = !w && !!(c != null && c.condition_items.find(F => F._id === m._id)),
                        x = Number(m.capacity) <= 0,
                        A = x || T && !P;
                    return e.jsxs("li", {
                        className: `relative flex shrink-0 flex-col gap-1 rounded-md ${g?"h-52 basis-32":"h-72 basis-72"} ${A&&!w||x?"cursor-not-allowed":""}`,
                        children: [e.jsxs("div", {
                            className: `relative h-full rounded-lg border-2 ${P?"border-primary":"border-transparent"}`,
                            children: [e.jsxs(O, {
                                as: g || A ? "div" : "button",
                                theme: "primary",
                                className: `relative h-full w-full overflow-hidden bg-transparent bg-cover bg-center bg-no-repeat px-0 py-0 ring-offset-0 hover:bg-transparent focus:bg-transparent focus:ring-2 active:bg-transparent ${x?"grayscale":""}`,
                                style: {
                                    backgroundImage: `url(${m.event.poster})`
                                },
                                onClick: () => {
                                    A || a(t._id, m)
                                },
                                phill: !1,
                                rounded: !0,
                                children: [P && e.jsxs(e.Fragment, {
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
                                                children: n("packages_booking:included")
                                            })]
                                        })
                                    })
                                })]
                            }), x && e.jsx("div", {
                                className: "absolute inset-0 rounded-md bg-black/80",
                                children: e.jsx("p", {
                                    className: "absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 -rotate-[20deg] p-2 text-center font-black uppercase text-red-400 ltr:text-3xl rtl:text-4xl",
                                    children: n("packages_booking:sold_out")
                                })
                            })]
                        }), e.jsxs("div", {
                            className: "px-1",
                            children: [e.jsx("p", {
                                className: `line-clamp-1 text-sm ${P?"text-primary":""}`,
                                children: m.event.title
                            }), !g && e.jsx("p", {
                                className: "line-clamp-1 text-[11px] text-zinc-400",
                                children: m.event.venue_name
                            })]
                        })]
                    }, m._id)
                })
            })]
        })
    },
    et = Ye,
    M = ({
        discountPrice: t,
        originalPrice: o,
        className: s,
        currency: a
    }) => {
        const {
            i18n: {
                useTranslation: r
            }
        } = S(), {
            t: u
        } = r(["packages_common"]), i = typeof t == "number" && t >= 0 && t < o;
        return e.jsxs("div", {
            className: ee("flex items-center gap-2", s),
            children: [e.jsx("p", {
                className: i ? "text-white/60 line-through" : "",
                children: u("packages_common:price", {
                    price: I(o),
                    currency: u(`packages_common:${a}`)
                })
            }), i ? e.jsx("p", {
                className: "shrink-0 text-white",
                children: u("packages_common:price", {
                    price: I(t),
                    currency: u(`packages_common:${a}`)
                })
            }) : null]
        })
    },
    tt = ({
        title: t,
        description: o,
        amount: s,
        currency: a
    }) => e.jsxs("div", {
        className: "flex items-center justify-between text-[13px]",
        children: [e.jsxs("div", {
            className: "flex w-full grow items-center gap-2",
            children: [e.jsx("p", {
                children: t
            }), o && e.jsx("div", {
                className: "relative grow",
                children: e.jsx(Fe, {
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
            currency: a || "SAR"
        })]
    }),
    ue = tt,
    st = () => {
        var t, o;
        const {
            locale: s,
            i18n: {
                useTranslation: a
            }
        } = S(), {
            t: r
        } = a("packages_booking"), {
            isWebView: u
        } = W(), [i, l] = h.useState(!1), {
            ticketingPackage: n,
            selected: c,
            totals: g,
            number_of_people: v,
            setCheckoutMode: C,
            checkoutMode: j,
            checkoutLoading: T,
            checkout: N,
            totalTickets: m,
            canCheckout: w
        } = $();
        h.useEffect(() => {
            i && m.total <= 0 && l(!1)
        }, [i, m]);
        const P = h.useMemo(() => c.some(x => x.condition_items.length === 0), [c]);
        return e.jsx("div", {
            className: `bg-body-light 2lg:hidden fixed bottom-0 z-[99] h-[72px] w-full ${u?"px-4 pb-8":"safe-bottom p-1"}`,
            children: e.jsx(te, {
                locale: s,
                mode: j,
                modes: ["tickets", "checkout"],
                className: "relative z-50 mx-auto max-w-lg grow overflow-hidden",
                children: e.jsx("div", {
                    className: "mx-auto overflow-hidden p-1 text-center",
                    children: j === "tickets" ? e.jsxs("div", {
                        className: "flex w-full items-center justify-between gap-4",
                        children: [m.total > 0 ? e.jsx($e, {
                            className: "relative flex h-screen w-screen items-end bg-black/10 !px-0 backdrop-blur-sm",
                            open: i && m.total > 0,
                            onOpenChange: x => l(x),
                            onClick: () => l(!1),
                            content: e.jsxs(Ne.div, {
                                className: "mx-auto w-full max-w-md overflow-hidden rounded-lg bg-[#141414]",
                                initial: {
                                    height: 0
                                },
                                animate: {
                                    height: i ? "auto" : 0
                                },
                                onClick: x => x.stopPropagation(),
                                children: [e.jsx("div", {
                                    className: "flex justify-end p-1",
                                    children: e.jsx("button", {
                                        className: "m-1 flex items-center justify-center rounded-full bg-zinc-700 p-2 font-bold text-zinc-400",
                                        onClick: () => l(!1),
                                        "aria-label": "Close Tickets Summary",
                                        children: e.jsx(ze, {
                                            className: "h-3 w-3"
                                        })
                                    })
                                }), e.jsxs("div", {
                                    className: "space-y-2 px-4",
                                    children: [e.jsx("p", {
                                        className: "font-bold",
                                        children: r("packages_booking:packages_tickets", {
                                            count: v,
                                            tickets: m.total
                                        })
                                    }), e.jsx("ul", {
                                        className: "space-y-2 text-sm",
                                        id: "seat-tickets",
                                        children: m.items.map(x => e.jsx("li", {
                                            children: e.jsx("p", {
                                                children: `${v} x ${x.event.title}`
                                            })
                                        }, x._id))
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
                                            originalPrice: g.gross,
                                            discountPrice: g.gross_after_discount,
                                            currency: n.currency || "SAR"
                                        })]
                                    }), !!n.fee_amount && e.jsx(ue, {
                                        title: ((t = n.fee_title) == null ? void 0 : t[s]) || "",
                                        description: (o = n.fee_description) == null ? void 0 : o[s],
                                        amount: g.totalFee,
                                        currency: n.currency || "SAR"
                                    }), e.jsxs("div", {
                                        className: "flex items-center justify-between text-xs",
                                        children: [e.jsx("p", {
                                            children: r("packages_booking:vat")
                                        }), e.jsx(M, {
                                            originalPrice: g.vat,
                                            currency: n.currency || "SAR"
                                        })]
                                    }), e.jsxs("div", {
                                        className: "flex flex-wrap items-center justify-between font-semibold",
                                        children: [e.jsx("p", {
                                            children: r("packages_booking:total")
                                        }), e.jsx(M, {
                                            originalPrice: g.net,
                                            discountPrice: g.net_after_discount,
                                            currency: n.currency || "SAR"
                                        })]
                                    })]
                                })]
                            }),
                            children: e.jsx(O, {
                                theme: "white",
                                shape: "text",
                                className: "h-12 grow bg-white/5 focus:ring-white/20",
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
                                                price: I(g.net_after_discount),
                                                currency: r(n.currency || "SAR")
                                            })
                                        })]
                                    }), e.jsx("svg", {
                                        width: "10",
                                        height: "7",
                                        className: `shrink-0 text-zinc-400 transition ${i?"":"rotate-180"}`,
                                        children: e.jsx("path", {
                                            d: "M9.91148 5.92015L5.30211 0.792139C5.16825 0.643212 4.93098 0.624239 4.77216 0.749759L4.74901 0.769661L0.0892809 5.91931C-0.0450745 6.06785 -0.0255751 6.29039 0.132834 6.41637C0.200789 6.47042 0.287 6.50008 0.376106 6.50008H9.6239C9.83161 6.50008 10 6.34219 10 6.14742C10 6.06425 9.96865 5.98375 9.91148 5.92015Z",
                                            fill: "currentColor"
                                        })
                                    })]
                                })
                            })
                        }) : e.jsx("p", {
                            className: "text-center text-xs",
                            children: r("packages_booking:select_ticket_continue")
                        }), e.jsx(O, {
                            className: "h-12 grow basis-1/2 flex-col gap-0 py-1",
                            onClick: () => {
                                C("checkout")
                            },
                            disabled: P,
                            children: e.jsx("p", {
                                className: "font-semibold",
                                children: r("packages_booking:next")
                            })
                        })]
                    }) : e.jsx(O, {
                        loading: T,
                        className: "min-h-[50px] w-full max-w-md py-1 font-semibold",
                        onClick: () => N(),
                        id: "proceed-to-payment",
                        "data-package-name": n == null ? void 0 : n.title,
                        disabled: !w,
                        children: e.jsx("div", {
                            className: "space-y-1",
                            children: e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [e.jsx(oe, {
                                    className: `h-4 w-4 pb-0.5 ${w?"":"grayscale"}`
                                }), r("packages_booking:proceed"), e.jsx(M, {
                                    originalPrice: g.net_after_discount,
                                    currency: n.currency || "SAR"
                                })]
                            })
                        })
                    })
                })
            })
        })
    },
    nt = st,
    X = [Be, Le, De, Ve, We],
    ot = ({
        className: t,
        withTabby: o,
        logosOnly: s
    }) => {
        const a = o ? X.concat(Re) : X,
            {
                i18n: {
                    useTranslation: r
                }
            } = S(),
            {
                t: u
            } = r("packages_booking");
        return s ? e.jsx(e.Fragment, {
            children: a.map((i, l) => e.jsx(i, {
                className: t
            }, l))
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
                children: a.map((i, l) => e.jsx(i, {}, l))
            })]
        })
    },
    at = ot,
    rt = () => {
        var t, o, s, a, r, u;
        const {
            number_of_people: i,
            totalTickets: l,
            ticketingPackage: n,
            totals: c,
            checkout: g,
            checkoutError: v,
            checkoutLoading: C,
            agreeTerms: j,
            setAgreeTerms: T,
            canCheckout: N
        } = $(), {
            locale: m,
            i18n: {
                useTranslation: w,
                Trans: P
            }
        } = S(), {
            t: x
        } = w("packages_booking"), A = v == null ? void 0 : v.message, F = (n == null ? void 0 : n.is_tabby) === "1", B = c.net_after_discount <= V;
        return e.jsx(Ce, {
            children: e.jsxs("div", {
                className: "bg-body-light top-4 z-50 rounded-lg p-2 md:p-4 lg:sticky",
                children: [e.jsx("h2", {
                    className: "pb-2 text-xl",
                    children: x("packages_booking:booking_summary")
                }), l.total > 0 ? e.jsxs(e.Fragment, {
                    children: [e.jsxs("div", {
                        className: "space-y-2",
                        children: [e.jsx("p", {
                            className: "font-bold",
                            children: x("packages_booking:packages_tickets", {
                                count: i,
                                tickets: l.total
                            })
                        }), e.jsx("ul", {
                            className: "space-y-2 text-sm",
                            id: "seat-tickets",
                            children: l.items.map(z => e.jsx("li", {
                                children: e.jsx("p", {
                                    children: `${i} x ${z.event.title}`
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
                                children: x("packages_booking:subtotal")
                            }), e.jsx(M, {
                                originalPrice: c.gross,
                                discountPrice: c.gross_after_discount,
                                currency: n.currency || "SAR"
                            })]
                        }), (n == null ? void 0 : n.fee_amount) && +n.fee_amount > 0 && e.jsx(ue, {
                            title: ((t = n.fee_title) == null ? void 0 : t[m]) || "",
                            description: ((o = n.fee_description) == null ? void 0 : o[m]) || "",
                            amount: c.totalFee,
                            currency: n.currency || "SAR"
                        }), e.jsxs("div", {
                            className: "flex items-center justify-between text-sm",
                            children: [e.jsxs("p", {
                                children: [x("packages_booking:vat"), " 15%"]
                            }), e.jsx(M, {
                                originalPrice: c.vat,
                                currency: n.currency || "SAR"
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-wrap items-center justify-between text-lg font-bold",
                            children: [e.jsx("p", {
                                children: x("packages_booking:total")
                            }), e.jsx(M, {
                                originalPrice: c.net,
                                discountPrice: c.net_after_discount,
                                currency: n.currency || "SAR"
                            })]
                        }), e.jsxs("div", {
                            className: "space-y-6 rounded-lg pt-4",
                            children: [A && e.jsx("p", {
                                className: "text-center text-sm text-red-500",
                                children: A
                            }), !B && e.jsx("p", {
                                className: "text-error text-sm",
                                children: x("packages_booking:payment_maximum_amount", {
                                    amount: I(V),
                                    currency: x(n.currency || "SAR")
                                })
                            }), e.jsxs("div", {
                                children: [e.jsxs("div", {
                                    className: "space-y-4",
                                    children: [e.jsx(Q, {
                                        label: e.jsx("span", {
                                            className: "text-sm",
                                            children: e.jsx(P, {
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
                                        checked: j.terms,
                                        onChange: () => T({
                                            terms: !j.terms
                                        })
                                    }), e.jsx(Q, {
                                        label: x("packages_booking:agree_date", {
                                            from: D(new Date((a = (s = n == null ? void 0 : n.start_date) == null ? void 0 : s.split(" ")) == null ? void 0 : a[0]), `${m}-GB`, {
                                                dateStyle: "long",
                                                timeZone: void 0
                                            }),
                                            to: D(new Date((u = (r = n == null ? void 0 : n.end_date) == null ? void 0 : r.split(" ")) == null ? void 0 : u[0]), `${m}-GB`, {
                                                dateStyle: "long",
                                                timeZone: void 0
                                            })
                                        }),
                                        groupClassName: "text-sm",
                                        className: "mt-px",
                                        checked: j.package,
                                        onChange: () => T({
                                            package: !j.package
                                        })
                                    })]
                                }), e.jsxs(O, {
                                    loading: C,
                                    className: "2lg:flex mt-8 hidden w-full gap-2 py-3 text-center text-lg font-semibold",
                                    onClick: () => g(),
                                    id: "proceed-to-payment",
                                    "data-event-name": n == null ? void 0 : n.title,
                                    disabled: !N,
                                    children: [e.jsx(oe, {
                                        className: `h-4 w-4 pb-0.5 ${N?"":"grayscale"}`
                                    }), x("packages_booking:proceed"), e.jsx(M, {
                                        originalPrice: c.net_after_discount,
                                        currency: n.currency || "SAR"
                                    })]
                                }), e.jsx("div", {
                                    className: "pt-12",
                                    children: e.jsx(at, {
                                        withTabby: F
                                    })
                                })]
                            })]
                        })]
                    })]
                }) : e.jsxs("div", {
                    className: "space-y-10 py-12 text-center",
                    children: [e.jsx(Ie, {
                        className: "mx-auto h-24 w-24 text-zinc-500"
                    }), e.jsx("p", {
                        children: x("packages_booking:select_ticket_continue")
                    })]
                })]
            })
        })
    },
    Y = rt,
    ct = () => {
        var t;
        const {
            isTawakkalnaUser: o
        } = se(), {
            locale: s
        } = S(), {
            ticketingPackage: a,
            checkoutMode: r
        } = $(), {
            isWebView: u
        } = W(), i = Ee({
            id: "booking-section-ref"
        }), l = h.useMemo(() => {
            let n = i.height || "100%";
            return i.height && (n = i.height - 185), u && typeof n == "number" && (n = n + 83), o && typeof n == "number" && (n = n - 84), n
        }, [i.height, u, o]);
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
                                height: l
                            },
                            children: r === "tickets" ? e.jsxs(e.Fragment, {
                                children: [e.jsx(Xe, {}), (t = a == null ? void 0 : a.conditions) == null ? void 0 : t.map(n => e.jsx(et, {
                                    condition: n
                                }, n._id))]
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
    it = ct,
    lt = () => {
        const {
            checkoutMode: t,
            setCheckoutMode: o,
            sessionEnd: s
        } = $(), {
            i18n: {
                useTranslation: a
            }
        } = S(), {
            t: r
        } = a(["ticketing_common", "packages_booking"]), {
            count: u,
            stop: i
        } = Oe({
            id: "booking-count-down",
            initialSeconds: (s - Date.now()) / 1e3
        });
        h.useEffect(() => {
            u <= 0 && (i(), window.location.reload())
        }, [u]);
        const l = h.useMemo(() => {
                const c = Date.now() / 1e3,
                    v = c + u - c;
                return D(v, "en", {
                    minute: "2-digit",
                    second: "2-digit"
                })
            }, [u]),
            n = t === "tickets";
        return e.jsxs("section", {
            className: "2lg:px-6 container flex max-w-screen-2xl items-center justify-between px-2 py-0",
            children: [e.jsx(Me, {
                className: n ? "invisible" : "",
                text: r("packages_booking:booking_summary"),
                onClick: () => {
                    o("tickets")
                }
            }), e.jsx("div", {
                className: "shrink-0 text-xs",
                children: u <= 0 ? r("packages_booking:time_out") : r("packages_booking:time_left", {
                    time: l
                })
            })]
        })
    },
    dt = lt,
    jt = ({
        packageId: t
    }) => {
        const {
            locale: o
        } = S(), {
            data: s,
            isLoading: a
        } = ve({
            slug: t,
            lang: o
        });
        if (a) return e.jsx(Se, {});
        if (!s) throw new Error(`Package "${t}" not found`);
        return e.jsxs(e.Fragment, {
            children: [e.jsx("style", {
                children: `
        @media only screen and (max-width: 1169px){body{overflow: hidden;}
        main{display:flex; flex-direction:column;height:100vh;}
        #root > footer{display:none}
      `
            }), e.jsxs(Je, {
                ticketingPackage: s,
                children: [e.jsx(dt, {}), e.jsx(it, {})]
            }, o)]
        })
    };
export {
    vt as W, jt as a
};
//# sourceMappingURL=packages-DLtJIzhz.js.map