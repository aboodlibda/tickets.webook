'use client'
import {
  cartData,
  checkoutData,
  productData,
  purchaseData,
  userData
} from "./chunk-NEKWE37Q.mjs";
import {
  setUserInLocalStorage
} from "./chunk-REY2IGVX.mjs";
import {
  postMessageToWebview
} from "./chunk-PFIXY22P.mjs";
import {
  CHECKOUT_DATA_COOKIE_NAME,
  CONSENT_COOKIE_NAME,
  USER_DATA_STORAGE_KEY
} from "./chunk-T2NN7R53.mjs";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-BTG5EALA.mjs";

// src/trackers/gtm.ts
import { getItem, loadScriptAsync, removeItem, safeParseJson } from "@wbk/utils";
function gtag(..._args) {
  if (!window.dataLayer)
    window.dataLayer = [];
  window.dataLayer.push(arguments);
}
var GtmTracker = class {
  constructor({ gtmIds, log }) {
    /**
     * Init GTM script and set default cookie consent
     * @returns void
     */
    this.initGTM = () => {
      const canRun = typeof window !== "undefined" && !!this.gtmIds.length;
      if (!canRun)
        return;
      const consent = getItem(CONSENT_COOKIE_NAME);
      if (consent) {
        const parsed = safeParseJson(consent);
        this.setCookieConsent({ type: "default", data: parsed });
      } else {
        this.setCookieConsent({
          type: "default",
          data: {
            analytics_storage: "denied",
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
            date: (/* @__PURE__ */ new Date()).toISOString()
          }
        });
      }
      const ids = this.gtmIds.filter((id) => !!id.trim());
      if (!ids.length)
        return;
      for (const id of ids) {
        if (!id)
          continue;
        loadScriptAsync({
          id,
          target: "head",
          snippet: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${id}');`
        });
        loadScriptAsync({
          id: `${id}_noscript`,
          type: "noscript",
          snippet: `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        });
      }
    };
    /**
     * GTM consent mode guide
     * https://developers.google.com/tag-platform/security/guides/consent
     */
    this.setCookieConsent = ({ type, data }) => {
      const cloned = __spreadProps(__spreadValues({}, data), { date: void 0 });
      delete cloned.date;
      gtag("consent", type, cloned);
    };
    this.pageView = () => {
    };
    this.signupEvent = (_0) => __async(this, [_0], function* ({ method, user }) {
      const data = yield userData(user);
      this.pushToDataLayer({
        event: "signup",
        method,
        user: data
      });
      setUserInLocalStorage(data);
    });
    this.loginEvent = (_0) => __async(this, [_0], function* ({ method, user }) {
      const data = yield userData(user);
      this.pushToDataLayer({
        event: "login",
        method,
        user: data
      });
    });
    this.setUser = (user) => {
      this.pushToDataLayer({
        user: __spreadProps(__spreadValues({}, user), { access_token: "" })
      });
    };
    this.viewItemEvent = (props) => __async(this, null, function* () {
      const userDataString = getItem(USER_DATA_STORAGE_KEY) || "";
      const userData2 = safeParseJson(userDataString);
      const data = productData(props);
      this.pushToDataLayer({ ecommerce: null });
      this.pushToDataLayer({
        event: "view_item",
        ecommerce: data,
        user_data: {
          data: [userData2]
        }
      });
    });
    this.viewItemListEvent = ({ events, listId = "", listName = "" }) => {
      this.pushToDataLayer({ ecommerce: null });
      this.pushToDataLayer({
        event: "view_item_list",
        ecommerce: {
          item_list_id: listId,
          item_list_name: listName,
          items: events.map((event) => ({
            item_id: event.id,
            item_name: event.title,
            item_category: event.category || "N/A"
          }))
        }
      });
    };
    this.generateLeadEvent = (event) => {
      this.pushToDataLayer({
        event: "generate_lead",
        currency: event.currency,
        value: event.event_start_price,
        slug: event.slug,
        name: event.title
      });
    };
    this.cartEvent = (props) => {
      const data = cartData(props);
      this.pushToDataLayer({ ecommerce: null });
      const event = props.type === "add" ? "add_to_cart" : "remove_from_cart";
      this.pushToDataLayer({
        event,
        ecommerce: data.order,
        user_data: {
          data: [data.userData]
        }
      });
      postMessageToWebview(JSON.stringify({ eventName: event.toUpperCase(), data }));
    };
    this.beginCheckout = (props) => {
      const data = checkoutData(props);
      this.pushToDataLayer({ ecommerce: null });
      this.pushToDataLayer({
        event: "begin_checkout",
        ecommerce: data.order,
        user_data: {
          data: [data.userData]
        }
      });
      postMessageToWebview(JSON.stringify({ eventName: "BEGIN_CHECKOUT", data }));
    };
    this.purchaseEvent = (payment) => __async(this, null, function* () {
      const data = purchaseData(payment);
      this.pushToDataLayer({ ecommerce: null });
      this.pushToDataLayer({
        event: "purchase",
        ecommerce: data.order,
        user_data: {
          data: [data.userData]
        }
      });
      postMessageToWebview(
        JSON.stringify({
          eventName: "PURCHASE",
          data,
          // backward compatibility
          order: {
            order_id: payment.order_id,
            total: payment.total
          }
        })
      );
      removeItem(CHECKOUT_DATA_COOKIE_NAME);
    });
    this.shareEvent = ({ method, id, contentType }) => {
      this.pushToDataLayer({
        event: "share",
        method,
        id,
        content_type: contentType
      });
    };
    /**
     * Unified function to push data to dataLayer
     */
    this.pushToDataLayer = (obj) => {
      if (typeof window !== "undefined") {
        const dataLayer = window == null ? void 0 : window.dataLayer;
        if (dataLayer) {
          dataLayer.push(obj);
          if (this.log) {
            console.log("Pushed to dataLayer:", obj);
          }
        }
      }
    };
    this.gtmIds = gtmIds;
    this.log = !!log;
    this.initGTM();
  }
};

export {
  GtmTracker
};
//# sourceMappingURL=chunk-5BCRYQWM.mjs.map