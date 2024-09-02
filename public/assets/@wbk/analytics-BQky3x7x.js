import {
    s as P,
    g as p,
    a as v,
    C as q,
    b as A,
    l as T,
    r as N,
    j as B
} from "../@hy/experiences-DjqdbvJK.js";
import {
    r as y
} from "../vendor-DR5RWKqR.js";
var $ = "cookie_consent",
    S = "checkout_data",
    m = "user_data",
    j = t => {
        const i = {
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
        P(m, JSON.stringify(i))
    },
    Y = Object.defineProperty,
    Z = Object.defineProperties,
    Q = Object.getOwnPropertyDescriptors,
    D = Object.getOwnPropertySymbols,
    z = Object.prototype.hasOwnProperty,
    x = Object.prototype.propertyIsEnumerable,
    I = (t, i, e) => i in t ? Y(t, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : t[i] = e,
    w = (t, i) => {
        for (var e in i || (i = {})) z.call(i, e) && I(t, e, i[e]);
        if (D)
            for (var e of D(i)) x.call(i, e) && I(t, e, i[e]);
        return t
    },
    b = (t, i) => Z(t, Q(i)),
    W = (t, i) => {
        var e = {};
        for (var s in t) z.call(t, s) && i.indexOf(s) < 0 && (e[s] = t[s]);
        if (t != null && D)
            for (var s of D(t)) i.indexOf(s) < 0 && x.call(t, s) && (e[s] = t[s]);
        return e
    },
    h = (t, i, e) => new Promise((s, c) => {
        var a = _ => {
                try {
                    r(e.next(_))
                } catch (n) {
                    c(n)
                }
            },
            o = _ => {
                try {
                    r(e.throw(_))
                } catch (n) {
                    c(n)
                }
            },
            r = _ => _.done ? s(_.value) : Promise.resolve(_.value).then(a, o);
        r((e = e.apply(t, i)).next())
    }),
    k = t => h(void 0, null, function*() {
        const i = q.find(o => o.code === t.cell_country_code),
            e = `+${i==null?void 0:i.dial_code}${t.cell_number}`,
            [s, c] = yield Promise.all([A(e), A(t.email)]), a = b(w({}, t), {
                mobile: e,
                phone_hash: s,
                email_hash: c,
                access_token: "",
                event_order_details: ""
            });
        return j(a), a
    }),
    F = ({
        event: t,
        title: i,
        price: e,
        quantity: s,
        zone: c,
        product_id: a
    }) => ({
        currency: (t == null ? void 0 : t.currencyCode) || "SAR",
        value: e || (t == null ? void 0 : t.startingPrice) || 0,
        items: [{
            item_id: (t == null ? void 0 : t.id) || a,
            item_name: (t == null ? void 0 : t.title) || i,
            item_category: (t == null ? void 0 : t.category) || "N/A",
            price: e || (t == null ? void 0 : t.startingPrice) || 0,
            quantity: s || 1,
            zone: (t == null ? void 0 : t.zone) || c || "",
            google_business_vertical: "retail",
            id: (t == null ? void 0 : t.id) || a
        }]
    }),
    R = ({
        item: t,
        quantity: i,
        event: e,
        itemValue: s,
        currency: c,
        id: a,
        title: o,
        zone: r,
        vat: _
    }) => {
        const n = p(m) || "",
            u = v(n),
            g = t ? +t.price + (+t.vat || 0) : (s || 0) + (_ || 0) || s || 0,
            f = t && t.original_price ? +t.original_price - g : 0;
        return {
            order: {
                currency: (t == null ? void 0 : t.currency) || c,
                value: g * (i || 1),
                items: [{
                    item_id: (t == null ? void 0 : t._id) || a,
                    item_name: (e == null ? void 0 : e.title) || o,
                    item_category: (e == null ? void 0 : e.category) || "N/A",
                    organization_slug: (e == null ? void 0 : e.organization_slug) || "",
                    quantity: i,
                    price: g,
                    discount: f,
                    ticket_class: t == null ? void 0 : t.title,
                    zone: (e == null ? void 0 : e.zone) || r,
                    google_business_vertical: "retail",
                    id: (t == null ? void 0 : t._id) || a
                }],
                number_items: i,
                item_ids: [(t == null ? void 0 : t._id) || a]
            },
            userData: u
        }
    },
    U = ({
        items: t,
        coupon: i,
        event: e,
        zone: s
    }) => {
        const c = t.reduce((n, u) => n + (+u.price + (u.vat ? +u.vat : 0)) * u.qty, 0),
            a = p(m) || "",
            o = v(a),
            r = {
                item_name: e == null ? void 0 : e.title,
                item_category: (e == null ? void 0 : e.category) || "N/A",
                zone: (e == null ? void 0 : e.zone) || s
            };
        return P(S, JSON.stringify(r)), {
            order: {
                currency: t[0].currency,
                value: c,
                coupon: i.promo_code || "",
                items: t == null ? void 0 : t.map(n => {
                    const u = n.ticket_id || n._id,
                        g = +(+n.price + (n.vat ? +n.vat : 0)),
                        f = +n.original_price - g,
                        E = u && i.ticket_ids.includes(u),
                        C = (n == null ? void 0 : n.zone) || (e == null ? void 0 : e.zone) || s,
                        L = n.ticket_class || n.title;
                    return {
                        item_id: u,
                        item_name: (e == null ? void 0 : e.title) || n.title,
                        item_category: (e == null ? void 0 : e.category) || "N/A",
                        organization_slug: (e == null ? void 0 : e.organization_slug) || "",
                        quantity: n.qty,
                        price: g,
                        discount: E ? +n.price * i.discount / 100 : f,
                        zone: C,
                        google_business_vertical: "retail",
                        ticket_class: L,
                        id: u
                    }
                }),
                number_items: t == null ? void 0 : t.reduce((n, u) => n + u.qty, 0),
                item_ids: t == null ? void 0 : t.map(n => n.ticket_id || n._id)
            },
            userData: o
        }
    },
    K = t => {
        const i = t.summary || t.summaries || [],
            e = p(m) || "",
            s = v(e),
            c = p(S) || "",
            a = v(c),
            o = i.flatMap(n => n.tickets_details.map(u => {
                var g, f;
                return {
                    item_id: u.event_ticket_id,
                    item_name: ((g = n.event) == null ? void 0 : g.title) || "",
                    item_category: a == null ? void 0 : a.item_category,
                    quantity: 1,
                    price: +u.ticket_price,
                    ticket_class: u.event_ticket_title,
                    item_category2: ((f = n.event) == null ? void 0 : f.city) || "",
                    zone: a == null ? void 0 : a.zone,
                    google_business_vertical: "retail",
                    id: u.event_ticket_id
                }
            })),
            r = i == null ? void 0 : i[0].event;
        return {
            order: {
                transaction_id: t.order_id,
                event_id: r == null ? void 0 : r._id,
                event_slug: r == null ? void 0 : r.slug,
                currency: t.total.currency,
                shipping: 0,
                tax: t.total.vat_total,
                value: t.total.grand_total,
                discount: t.total.discount_amount,
                payment_type: t.booked_type,
                coupon: t.promo_code || "",
                items: o,
                number_items: o.length,
                item_ids: o.map(n => n.item_id)
            },
            userData: s
        }
    },
    ot = class {
        constructor(t) {
            this.initPH = () => {
                var a;
                if (!(typeof window < "u" && !!((a = this.apiKey) != null && a.trim()))) return;
                const r = p($);
                let _ = !1;
                if (r) {
                    const g = v(r);
                    _ = this.isConsentGranted(g)
                }
                const n = this.config.api_host || "https://us.i.posthog.com",
                    u = b(w({}, this.config), {
                        api_host: n,
                        persistence: _ ? "localStorage+cookie" : "memory"
                    });
                T({
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
                user: r
            }) {
                const _ = yield k(r);
                this.capture("signup", {
                    method: o
                }, {
                    $set: _
                })
            }), this.loginEvent = a => h(this, [a], function*({
                method: o,
                user: r
            }) {
                const _ = yield k(r);
                this.capture("login", {
                    method: o
                }, {
                    $set: _
                })
            }), this.setUser = a => {
                this.identify(a._id, b(w({}, a), {
                    access_token: ""
                }))
            }, this.viewItemEvent = a => h(this, null, function*() {
                const o = p(m) || "",
                    r = v(o),
                    _ = F(a);
                this.capture("view_item", _, {
                    $set: r
                })
            }), this.viewItemListEvent = ({
                events: a,
                listId: o = "",
                listName: r = ""
            }) => {
                const _ = p(m) || "",
                    n = v(_);
                this.capture("view_item_list", {
                    item_list_id: o,
                    item_list_name: r,
                    items: a.map(u => ({
                        item_id: u.id,
                        item_name: u.title,
                        item_category: u.category || "N/A"
                    }))
                }, {
                    $set: n
                })
            }, this.generateLeadEvent = a => {
                const o = p(m) || "",
                    r = v(o);
                this.capture("generate_lead", {
                    event: "generate_lead",
                    currency: a.currency,
                    value: a.event_start_price,
                    slug: a.slug,
                    name: a.title
                }, {
                    $set: r
                })
            }, this.cartEvent = a => {
                const o = R(a),
                    r = a.type === "add" ? "add_to_cart" : "remove_from_cart";
                this.capture(r, o.order, {
                    $set: o.userData
                })
            }, this.beginCheckout = a => {
                const o = U(a);
                this.capture("purchase", o.order, {
                    $set: o.userData
                })
            }, this.purchaseEvent = a => h(this, null, function*() {
                const o = K(a);
                this.capture("purchase", o.order, {
                    $set: o.userData
                }), N(S)
            }), this.shareEvent = ({
                method: a,
                id: o,
                contentType: r
            }) => {
                this.capture("share", {
                    method: a,
                    id: o,
                    content_type: r
                })
            }, this.capture = (a, o, r) => {
                typeof posthog < "u" && (posthog.capture(a, o, r), this.log && console.log("posthog capture:", {
                    event_name: a,
                    properties: o,
                    options: r
                }))
            }, this.identify = (a, o, r) => {
                typeof posthog < "u" && (posthog.identify(a, o, r), this.log && console.log("posthog identify:", {
                    id: a,
                    properties: o,
                    propertiesOnce: r
                }))
            };
            var i = t,
                {
                    apiKey: e,
                    log: s
                } = i,
                c = W(i, ["apiKey", "log"]);
            this.apiKey = e, this.config = c, this.log = !!s, this.initPH()
        }
    },
    X = y.createContext(null),
    G = X,
    tt = () => {
        const t = y.useContext(G);
        if (!t) throw new Error("useAnalytics must be used within an AnalyticsProvider");
        return t
    },
    nt = tt;

function et(...t) {
    window.dataLayer || (window.dataLayer = []), window.dataLayer.push(arguments)
}
var rt = class {
        constructor({
            gtmIds: t,
            log: i
        }) {
            this.initGTM = () => {
                if (!(typeof window < "u" && !!this.gtmIds.length)) return;
                const s = p($);
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
                    for (const a of c) a && (T({
                        id: a,
                        target: "head",
                        snippet: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${a}');`
                    }), T({
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
                delete c.date, et("consent", e, c)
            }, this.pageView = () => {}, this.signupEvent = e => h(this, [e], function*({
                method: s,
                user: c
            }) {
                const a = yield k(c);
                this.pushToDataLayer({
                    event: "signup",
                    method: s,
                    user: a
                }), j(a)
            }), this.loginEvent = e => h(this, [e], function*({
                method: s,
                user: c
            }) {
                const a = yield k(c);
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
                    a = F(e);
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
                const s = R(e);
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
                })
            }, this.beginCheckout = e => {
                const s = U(e);
                this.pushToDataLayer({
                    ecommerce: null
                }), this.pushToDataLayer({
                    event: "begin_checkout",
                    ecommerce: s.order,
                    user_data: {
                        data: [s.userData]
                    }
                })
            }, this.purchaseEvent = e => h(this, null, function*() {
                const s = K(e);
                this.pushToDataLayer({
                    ecommerce: null
                }), this.pushToDataLayer({
                    event: "purchase",
                    ecommerce: s.order,
                    user_data: {
                        data: [s.userData]
                    }
                }), N(S)
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
            }, this.gtmIds = t, this.log = !!i, this.initGTM()
        }
    },
    at = ({
        children: t,
        trackers: i,
        currentLocation: e
    }) => {
        const [s] = y.useState(() => i);
        y.useEffect(() => {
            if (typeof window < "u") {
                const l = new URLSearchParams(window.location.search),
                    d = l.get("utm_source"),
                    O = l.get("utm_medium"),
                    V = l.get("utm_campaign") || "",
                    H = l.get("utm_id") || "",
                    M = l.get("utm_content") || "",
                    J = l.get("utm_term") || "";
                d && O && P("utms", JSON.stringify({
                    utm_source: d,
                    utm_medium: O,
                    utm_campaign: V,
                    utm_id: H,
                    utm_content: M,
                    utm_term: J
                }))
            }
        }, []), y.useEffect(() => {
            if (e)
                for (const l of s) l.pageView()
        }, [e]);
        const c = l => {
                for (const d of s) d.setCookieConsent(l)
            },
            a = () => {
                for (const l of s) l.pageView()
            },
            o = l => h(void 0, null, function*() {
                for (const d of s) d.signupEvent(l), d.setUser(l.user)
            }),
            r = l => h(void 0, null, function*() {
                for (const d of s) d.loginEvent(l), d.setUser(l.user)
            }),
            _ = l => {
                for (const d of s) d.setUser(l)
            },
            n = l => h(void 0, null, function*() {
                for (const d of s) d.viewItemEvent(l)
            }),
            u = l => {
                for (const d of s) d.viewItemListEvent(l)
            },
            g = l => {
                for (const d of s) d.generateLeadEvent(l)
            },
            f = l => {
                for (const d of s) d.cartEvent(l)
            },
            E = l => {
                for (const d of s) d.beginCheckout(l)
            },
            C = l => h(void 0, null, function*() {
                for (const d of s) d.purchaseEvent(l)
            }),
            L = l => {
                for (const d of s) d.shareEvent(l)
            };
        return B.jsx(G.Provider, {
            value: {
                setCookieConsent: c,
                signupEvent: o,
                loginEvent: r,
                setUser: _,
                viewItemEvent: n,
                viewItemListEvent: u,
                generateLeadEvent: g,
                cartEvent: f,
                beginCheckout: E,
                purchaseEvent: C,
                shareEvent: L,
                pageView: a
            },
            children: t
        })
    },
    ct = at;
export {
    rt as G, ot as P, ct as p, nt as u
};
//# sourceMappingURL=analytics-BQky3x7x.js.map