import {
    s as k,
    g as p,
    b as v,
    C as q,
    c as A,
    l as P,
    r as z,
    j as W
} from "../@hy/experiences-909RjQqY.js";
import {
    r as y
} from "../vendor-DR5RWKqR.js";
var D = "cookie_consent",
    O = "checkout_data",
    m = "user_data",
    $ = t => {
        const n = {
            _id: t._id || "",
            user_id: t._id || "",
            email: t.email || "",
            phone: t.mobile || "",
            cell_country_code: t.cell_country_code || "",
            cell_number: t.cell_number || "",
            mobile: t.mobile || "",
            email_hash: t.email_hash || "",
            phone_hash: t.phone_hash || "",
            first_name: t.first_name || "",
            last_name: t.last_name || "",
            city: t.city || "",
            country: t.country || "",
            address: t.address || ""
        };
        k(m, JSON.stringify(n))
    },
    Y = Object.defineProperty,
    X = Object.defineProperties,
    Z = Object.getOwnPropertyDescriptors,
    C = Object.getOwnPropertySymbols,
    R = Object.prototype.hasOwnProperty,
    U = Object.prototype.propertyIsEnumerable,
    j = (t, n, e) => n in t ? Y(t, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : t[n] = e,
    w = (t, n) => {
        for (var e in n || (n = {})) R.call(n, e) && j(t, e, n[e]);
        if (C)
            for (var e of C(n)) U.call(n, e) && j(t, e, n[e]);
        return t
    },
    b = (t, n) => X(t, Z(n)),
    Q = (t, n) => {
        var e = {};
        for (var s in t) R.call(t, s) && n.indexOf(s) < 0 && (e[s] = t[s]);
        if (t != null && C)
            for (var s of C(t)) n.indexOf(s) < 0 && U.call(t, s) && (e[s] = t[s]);
        return e
    },
    h = (t, n, e) => new Promise((s, c) => {
        var a = d => {
                try {
                    i(e.next(d))
                } catch (r) {
                    c(r)
                }
            },
            o = d => {
                try {
                    i(e.throw(d))
                } catch (r) {
                    c(r)
                }
            },
            i = d => d.done ? s(d.value) : Promise.resolve(d.value).then(a, o);
        i((e = e.apply(t, n)).next())
    }),
    S = t => h(void 0, null, function*() {
        const n = q.find(o => o.code === t.cell_country_code),
            e = `+${n==null?void 0:n.dial_code}${t.cell_number}`,
            [s, c] = yield Promise.all([A(e), A(t.email)]), a = b(w({}, t), {
                mobile: e,
                phone_hash: s,
                email_hash: c,
                access_token: "",
                event_order_details: ""
            });
        return $(a), a
    }),
    x = ({
        event: t,
        title: n,
        price: e,
        quantity: s,
        zone: c,
        product_id: a
    }) => ({
        currency: (t == null ? void 0 : t.currencyCode) || "SAR",
        value: e || (t == null ? void 0 : t.startingPrice) || 0,
        items: [{
            item_id: (t == null ? void 0 : t.id) || a,
            item_name: (t == null ? void 0 : t.title) || n,
            item_category: (t == null ? void 0 : t.category) || "N/A",
            price: e || (t == null ? void 0 : t.startingPrice) || 0,
            quantity: s || 1,
            zone: (t == null ? void 0 : t.zone) || c || "",
            google_business_vertical: "retail",
            id: (t == null ? void 0 : t.id) || a
        }]
    }),
    F = ({
        item: t,
        quantity: n,
        event: e,
        itemValue: s,
        currency: c,
        id: a,
        title: o,
        zone: i,
        vat: d
    }) => {
        const r = p(m) || "",
            u = v(r),
            g = t ? +t.price + (+t.vat || 0) : (s || 0) + (d || 0) || s || 0,
            f = t && t.original_price ? +t.original_price - g : 0;
        return {
            order: {
                currency: (t == null ? void 0 : t.currency) || c,
                value: g * (n || 1),
                items: [{
                    item_id: (t == null ? void 0 : t._id) || a,
                    item_name: (e == null ? void 0 : e.title) || o,
                    item_category: (e == null ? void 0 : e.category) || "N/A",
                    organization_slug: (e == null ? void 0 : e.organization_slug) || "",
                    quantity: n,
                    price: g,
                    discount: f,
                    ticket_class: t == null ? void 0 : t.title,
                    zone: (e == null ? void 0 : e.zone) || i,
                    google_business_vertical: "retail",
                    id: (t == null ? void 0 : t._id) || a
                }],
                number_items: n,
                item_ids: [(t == null ? void 0 : t._id) || a]
            },
            userData: u
        }
    },
    K = ({
        items: t,
        coupon: n,
        event: e,
        zone: s
    }) => {
        const c = t.reduce((r, u) => r + (+u.price + (u.vat ? +u.vat : 0)) * u.qty, 0),
            a = p(m) || "",
            o = v(a),
            i = {
                item_name: e == null ? void 0 : e.title,
                item_category: (e == null ? void 0 : e.category) || "N/A",
                zone: (e == null ? void 0 : e.zone) || s
            };
        return k(O, JSON.stringify(i)), {
            order: {
                currency: t[0].currency,
                value: c,
                coupon: n.promo_code || "",
                items: t == null ? void 0 : t.map(r => {
                    const u = r.ticket_id || r._id,
                        g = +(+r.price + (r.vat ? +r.vat : 0)),
                        f = +r.original_price - g,
                        E = u && n.ticket_ids.includes(u),
                        T = (r == null ? void 0 : r.zone) || (e == null ? void 0 : e.zone) || s,
                        L = r.ticket_class || r.title;
                    return {
                        item_id: u,
                        item_name: (e == null ? void 0 : e.title) || r.title,
                        item_category: (e == null ? void 0 : e.category) || "N/A",
                        organization_slug: (e == null ? void 0 : e.organization_slug) || "",
                        quantity: r.qty,
                        price: g,
                        discount: E ? +r.price * n.discount / 100 : f,
                        zone: T,
                        google_business_vertical: "retail",
                        ticket_class: L,
                        id: u
                    }
                }),
                number_items: t == null ? void 0 : t.reduce((r, u) => r + u.qty, 0),
                item_ids: t == null ? void 0 : t.map(r => r.ticket_id || r._id)
            },
            userData: o
        }
    },
    G = t => {
        const n = t.summary || t.summaries || [],
            e = p(m) || "",
            s = v(e),
            c = p(O) || "",
            a = v(c),
            o = n.flatMap(r => r.tickets_details.map(u => {
                var g, f;
                return {
                    item_id: u.event_ticket_id,
                    item_name: ((g = r.event) == null ? void 0 : g.title) || "",
                    item_category: a == null ? void 0 : a.item_category,
                    quantity: 1,
                    price: +u.ticket_price,
                    ticket_class: u.event_ticket_title,
                    item_category2: ((f = r.event) == null ? void 0 : f.city) || "",
                    zone: a == null ? void 0 : a.zone,
                    google_business_vertical: "retail",
                    id: u.event_ticket_id
                }
            })),
            i = n == null ? void 0 : n[0].event;
        return {
            order: {
                transaction_id: t.order_id,
                event_id: i == null ? void 0 : i._id,
                event_slug: i == null ? void 0 : i.slug,
                currency: t.total.currency,
                shipping: 0,
                tax: t.total.vat_total,
                value: t.total.grand_total,
                discount: t.total.discount_amount,
                payment_type: t.booked_type,
                coupon: t.promo_code || "",
                items: o,
                number_items: o.length,
                item_ids: o.map(r => r.item_id)
            },
            userData: s
        }
    },
    rt = class {
        constructor(t) {
            this.initPH = () => {
                var a;
                if (!(typeof window < "u" && !!((a = this.apiKey) != null && a.trim()))) return;
                const i = p(D);
                let d = !1;
                if (i) {
                    const g = v(i);
                    d = this.isConsentGranted(g)
                }
                const r = this.config.api_host || "https://us.i.posthog.com",
                    u = b(w({}, this.config), {
                        api_host: r,
                        persistence: d ? "localStorage+cookie" : "memory"
                    });
                P({
                    id: this.apiKey,
                    target: "head",
                    snippet: `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");
      2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);
      var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;
      n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
      posthog.init('${this.apiKey}', ${JSON.stringify(u)})`
                })
            }, this.setCookieConsent = ({
                data: a
            }) => {
                const o = this.isConsentGranted(a);
                posthog.set_config({
                    persistence: o ? "localStorage+cookie" : "memory"
                })
            }, this.isConsentGranted = a => a.analytics_storage === "granted", this.pageView = () => {
                this.capture("$pageview")
            }, this.signupEvent = a => h(this, [a], function*({
                method: o,
                user: i
            }) {
                const d = yield S(i);
                this.capture("signup", {
                    method: o
                }, {
                    $set: d
                })
            }), this.loginEvent = a => h(this, [a], function*({
                method: o,
                user: i
            }) {
                const d = yield S(i);
                this.capture("login", {
                    method: o
                }, {
                    $set: d
                })
            }), this.setUser = a => {
                this.identify(a._id, b(w({}, a), {
                    access_token: ""
                }))
            }, this.viewItemEvent = a => h(this, null, function*() {
                const o = p(m) || "",
                    i = v(o),
                    d = x(a);
                this.capture("view_item", d, {
                    $set: i
                })
            }), this.viewItemListEvent = ({
                events: a,
                listId: o = "",
                listName: i = ""
            }) => {
                const d = p(m) || "",
                    r = v(d);
                this.capture("view_item_list", {
                    item_list_id: o,
                    item_list_name: i,
                    items: a.map(u => ({
                        item_id: u.id,
                        item_name: u.title,
                        item_category: u.category || "N/A"
                    }))
                }, {
                    $set: r
                })
            }, this.generateLeadEvent = a => {
                const o = p(m) || "",
                    i = v(o);
                this.capture("generate_lead", {
                    event: "generate_lead",
                    currency: a.currency,
                    value: a.event_start_price,
                    slug: a.slug,
                    name: a.title
                }, {
                    $set: i
                })
            }, this.cartEvent = a => {
                const o = F(a),
                    i = a.type === "add" ? "add_to_cart" : "remove_from_cart";
                this.capture(i, o.order, {
                    $set: o.userData
                })
            }, this.beginCheckout = a => {
                const o = K(a);
                this.capture("purchase", o.order, {
                    $set: o.userData
                })
            }, this.purchaseEvent = a => h(this, null, function*() {
                const o = G(a);
                this.capture("purchase", o.order, {
                    $set: o.userData
                }), z(O)
            }), this.shareEvent = ({
                method: a,
                id: o,
                contentType: i
            }) => {
                this.capture("share", {
                    method: a,
                    id: o,
                    content_type: i
                })
            }, this.capture = (a, o, i) => {
                typeof posthog < "u" && (posthog.capture(a, o, i), this.log && console.log("posthog capture:", {
                    event_name: a,
                    properties: o,
                    options: i
                }))
            }, this.identify = (a, o, i) => {
                typeof posthog < "u" && (posthog.identify(a, o, i), this.log && console.log("posthog identify:", {
                    id: a,
                    properties: o,
                    propertiesOnce: i
                }))
            };
            var n = t,
                {
                    apiKey: e,
                    log: s
                } = n,
                c = Q(n, ["apiKey", "log"]);
            this.apiKey = e, this.config = c, this.log = !!s, this.initPH()
        }
    },
    tt = y.createContext(null),
    J = tt,
    et = () => {
        const t = y.useContext(J);
        if (!t) throw new Error("useAnalytics must be used within an AnalyticsProvider");
        return t
    },
    at = et,
    ct = () => {
        const [t, n] = y.useState(!1), {
            setCookieConsent: e
        } = at();
        y.useEffect(() => {
            const o = p(D);
            if (!o) return n(!0);
            const i = v(o),
                d = 2 * 24 * 60 * 60 * 1e3,
                r = Object.values(i).some(g => g === "denied"),
                u = new Date().getTime() - new Date(i.date).getTime() > d;
            n(r && u)
        }, []);
        const s = o => {
            k(D, JSON.stringify(o)), e({
                type: "update",
                data: o
            })
        };
        return {
            showConsent: t,
            acceptConsent: () => {
                const o = {
                    analytics_storage: "granted",
                    ad_storage: "granted",
                    ad_user_data: "granted",
                    ad_personalization: "granted",
                    date: new Date().toISOString()
                };
                s(o)
            },
            rejectConsent: () => {
                const o = {
                    analytics_storage: "denied",
                    ad_storage: "denied",
                    ad_user_data: "denied",
                    ad_personalization: "denied",
                    date: new Date().toISOString()
                };
                s(o)
            }
        }
    },
    N = t => {
        var n;
        typeof window < "u" && ((n = window.ReactNativeWebView) == null || n.postMessage(t))
    };

function st(...t) {
    window.dataLayer || (window.dataLayer = []), window.dataLayer.push(arguments)
}
var lt = class {
        constructor({
            gtmIds: t,
            log: n
        }) {
            this.initGTM = () => {
                if (!(typeof window < "u" && !!this.gtmIds.length)) return;
                const s = p(D);
                if (s) {
                    const a = v(s);
                    this.setCookieConsent({
                        type: "default",
                        data: a
                    })
                } else this.setCookieConsent({
                    type: "default",
                    data: {
                        analytics_storage: "denied",
                        ad_storage: "denied",
                        ad_user_data: "denied",
                        ad_personalization: "denied",
                        date: new Date().toISOString()
                    }
                });
                const c = this.gtmIds.filter(a => !!a.trim());
                if (c.length)
                    for (const a of c) a && (P({
                        id: a,
                        target: "head",
                        snippet: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${a}');`
                    }), P({
                        id: `${a}_noscript`,
                        type: "noscript",
                        snippet: `<iframe src="https://www.googletagmanager.com/ns.html?id=${a}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
                    }))
            }, this.setCookieConsent = ({
                type: e,
                data: s
            }) => {
                const c = b(w({}, s), {
                    date: void 0
                });
                delete c.date, st("consent", e, c)
            }, this.pageView = () => {}, this.signupEvent = e => h(this, [e], function*({
                method: s,
                user: c
            }) {
                const a = yield S(c);
                this.pushToDataLayer({
                    event: "signup",
                    method: s,
                    user: a
                }), $(a)
            }), this.loginEvent = e => h(this, [e], function*({
                method: s,
                user: c
            }) {
                const a = yield S(c);
                this.pushToDataLayer({
                    event: "login",
                    method: s,
                    user: a
                })
            }), this.setUser = e => {
                this.pushToDataLayer({
                    user: b(w({}, e), {
                        access_token: ""
                    })
                })
            }, this.viewItemEvent = e => h(this, null, function*() {
                const s = p(m) || "",
                    c = v(s),
                    a = x(e);
                this.pushToDataLayer({
                    ecommerce: null
                }), this.pushToDataLayer({
                    event: "view_item",
                    ecommerce: a,
                    user_data: {
                        data: [c]
                    }
                })
            }), this.viewItemListEvent = ({
                events: e,
                listId: s = "",
                listName: c = ""
            }) => {
                this.pushToDataLayer({
                    ecommerce: null
                }), this.pushToDataLayer({
                    event: "view_item_list",
                    ecommerce: {
                        item_list_id: s,
                        item_list_name: c,
                        items: e.map(a => ({
                            item_id: a.id,
                            item_name: a.title,
                            item_category: a.category || "N/A"
                        }))
                    }
                })
            }, this.generateLeadEvent = e => {
                this.pushToDataLayer({
                    event: "generate_lead",
                    currency: e.currency,
                    value: e.event_start_price,
                    slug: e.slug,
                    name: e.title
                })
            }, this.cartEvent = e => {
                const s = F(e);
                this.pushToDataLayer({
                    ecommerce: null
                });
                const c = e.type === "add" ? "add_to_cart" : "remove_from_cart";
                this.pushToDataLayer({
                    event: c,
                    ecommerce: s.order,
                    user_data: {
                        data: [s.userData]
                    }
                }), N(JSON.stringify({
                    eventName: c.toUpperCase(),
                    data: s
                }))
            }, this.beginCheckout = e => {
                const s = K(e);
                this.pushToDataLayer({
                    ecommerce: null
                }), this.pushToDataLayer({
                    event: "begin_checkout",
                    ecommerce: s.order,
                    user_data: {
                        data: [s.userData]
                    }
                }), N(JSON.stringify({
                    eventName: "BEGIN_CHECKOUT",
                    data: s
                }))
            }, this.purchaseEvent = e => h(this, null, function*() {
                const s = G(e);
                this.pushToDataLayer({
                    ecommerce: null
                }), this.pushToDataLayer({
                    event: "purchase",
                    ecommerce: s.order,
                    user_data: {
                        data: [s.userData]
                    }
                }), N(JSON.stringify({
                    eventName: "PURCHASE",
                    data: s,
                    order: {
                        order_id: e.order_id,
                        total: e.total
                    }
                })), z(O)
            }), this.shareEvent = ({
                method: e,
                id: s,
                contentType: c
            }) => {
                this.pushToDataLayer({
                    event: "share",
                    method: e,
                    id: s,
                    content_type: c
                })
            }, this.pushToDataLayer = e => {
                if (typeof window < "u") {
                    const s = window == null ? void 0 : window.dataLayer;
                    s && (s.push(e), this.log && console.log("Pushed to dataLayer:", e))
                }
            }, this.gtmIds = t, this.log = !!n, this.initGTM()
        }
    },
    ot = ({
        children: t,
        trackers: n,
        currentLocation: e
    }) => {
        const [s] = y.useState(() => n);
        y.useEffect(() => {
            if (typeof window < "u") {
                const l = new URLSearchParams(window.location.search),
                    _ = l.get("utm_source"),
                    I = l.get("utm_medium"),
                    V = l.get("utm_campaign") || "",
                    H = l.get("utm_id") || "",
                    M = l.get("utm_content") || "",
                    B = l.get("utm_term") || "";
                _ && I && k("utms", JSON.stringify({
                    utm_source: _,
                    utm_medium: I,
                    utm_campaign: V,
                    utm_id: H,
                    utm_content: M,
                    utm_term: B
                }))
            }
        }, []), y.useEffect(() => {
            if (e)
                for (const l of s) l.pageView()
        }, [e]);
        const c = l => {
                for (const _ of s) _.setCookieConsent(l)
            },
            a = () => {
                for (const l of s) l.pageView()
            },
            o = l => h(void 0, null, function*() {
                for (const _ of s) _.signupEvent(l), _.setUser(l.user)
            }),
            i = l => h(void 0, null, function*() {
                for (const _ of s) _.loginEvent(l), _.setUser(l.user)
            }),
            d = l => {
                for (const _ of s) _.setUser(l)
            },
            r = l => h(void 0, null, function*() {
                for (const _ of s) _.viewItemEvent(l)
            }),
            u = l => {
                for (const _ of s) _.viewItemListEvent(l)
            },
            g = l => {
                for (const _ of s) _.generateLeadEvent(l)
            },
            f = l => {
                for (const _ of s) _.cartEvent(l)
            },
            E = l => {
                for (const _ of s) _.beginCheckout(l)
            },
            T = l => h(void 0, null, function*() {
                for (const _ of s) _.purchaseEvent(l)
            }),
            L = l => {
                for (const _ of s) _.shareEvent(l)
            };
        return W.jsx(J.Provider, {
            value: {
                setCookieConsent: c,
                signupEvent: o,
                loginEvent: i,
                setUser: d,
                viewItemEvent: r,
                viewItemListEvent: u,
                generateLeadEvent: g,
                cartEvent: f,
                beginCheckout: E,
                purchaseEvent: T,
                shareEvent: L,
                pageView: a
            },
            children: t
        })
    },
    ut = ot;
export {
    lt as G, rt as P, ct as a, ut as p, at as u
};
//# sourceMappingURL=analytics-B7lR_Cat.js.map