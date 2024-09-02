'use client'
import {
  cartData,
  checkoutData,
  productData,
  purchaseData,
  userData
} from "./chunk-NEKWE37Q.mjs";
import {
  CHECKOUT_DATA_COOKIE_NAME,
  CONSENT_COOKIE_NAME,
  USER_DATA_STORAGE_KEY
} from "./chunk-T2NN7R53.mjs";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-BTG5EALA.mjs";

// src/trackers/postHog.ts
import { getItem, loadScriptAsync, removeItem, safeParseJson } from "@wbk/utils";
var PostHogTracker = class {
  constructor(_a) {
    /**
     * Init PostHog script and set default cookie consent
     * @returns void
     */
    this.initPH = () => {
      var _a;
      const canRun = typeof window !== "undefined" && !!((_a = this.apiKey) == null ? void 0 : _a.trim());
      if (!canRun)
        return;
      const consent = getItem(CONSENT_COOKIE_NAME);
      let granted = false;
      if (consent) {
        const parsed = safeParseJson(consent);
        granted = this.isConsentGranted(parsed);
      }
      const api_host = this.config.api_host || "https://us.i.posthog.com";
      const initConfig = __spreadProps(__spreadValues({}, this.config), {
        api_host,
        persistence: granted ? "localStorage+cookie" : "memory"
      });
      loadScriptAsync({
        id: this.apiKey,
        target: "head",
        snippet: `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");
      2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);
      var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;
      n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
      posthog.init('${this.apiKey}', ${JSON.stringify(initConfig)})`
      });
    };
    /**
     * Steps for cookie consent in PostHog
     * 1. Default persistence is `memory`
     * 2. If user consents, set persistence to `localStorage+cookie`, else keep it `memory`
     * https://posthog.com/tutorials/nextjs-cookie-banner#controlling-posthog-persistence-based-on-consent
     */
    this.setCookieConsent = ({ data }) => {
      const isGranted = this.isConsentGranted(data);
      posthog.set_config({ persistence: isGranted ? "localStorage+cookie" : "memory" });
    };
    this.isConsentGranted = (consent) => {
      return consent.analytics_storage === "granted";
    };
    this.pageView = () => {
      this.capture("$pageview");
    };
    this.signupEvent = (_0) => __async(this, [_0], function* ({ method, user }) {
      const data = yield userData(user);
      this.capture("signup", { method }, { $set: data });
    });
    this.loginEvent = (_0) => __async(this, [_0], function* ({ method, user }) {
      const data = yield userData(user);
      this.capture("login", { method }, { $set: data });
    });
    this.setUser = (user) => {
      this.identify(user._id, __spreadProps(__spreadValues({}, user), { access_token: "" }));
    };
    this.viewItemEvent = (props) => __async(this, null, function* () {
      const userDataString = getItem(USER_DATA_STORAGE_KEY) || "";
      const userData2 = safeParseJson(userDataString);
      const data = productData(props);
      this.capture("view_item", data, {
        $set: userData2
      });
    });
    this.viewItemListEvent = ({ events, listId = "", listName = "" }) => {
      const userDataString = getItem(USER_DATA_STORAGE_KEY) || "";
      const userData2 = safeParseJson(userDataString);
      this.capture(
        "view_item_list",
        {
          item_list_id: listId,
          item_list_name: listName,
          items: events.map((event) => ({
            item_id: event.id,
            item_name: event.title,
            item_category: event.category || "N/A"
          }))
        },
        {
          $set: userData2
        }
      );
    };
    this.generateLeadEvent = (event) => {
      const userDataString = getItem(USER_DATA_STORAGE_KEY) || "";
      const userData2 = safeParseJson(userDataString);
      this.capture(
        "generate_lead",
        {
          event: "generate_lead",
          currency: event.currency,
          value: event.event_start_price,
          slug: event.slug,
          name: event.title
        },
        {
          $set: userData2
        }
      );
    };
    this.cartEvent = (props) => {
      const data = cartData(props);
      const eventName = props.type === "add" ? "add_to_cart" : "remove_from_cart";
      this.capture(eventName, data.order, {
        $set: data.userData
      });
    };
    this.beginCheckout = (props) => {
      const data = checkoutData(props);
      this.capture("purchase", data.order, {
        $set: data.userData
      });
    };
    this.purchaseEvent = (payment) => __async(this, null, function* () {
      const data = purchaseData(payment);
      this.capture("purchase", data.order, {
        $set: data.userData
      });
      removeItem(CHECKOUT_DATA_COOKIE_NAME);
    });
    this.shareEvent = ({ method, id, contentType }) => {
      this.capture("share", { method, id, content_type: contentType });
    };
    this.capture = (event_name, properties, options) => {
      if (typeof posthog !== "undefined") {
        posthog.capture(event_name, properties, options);
        if (this.log) {
          console.log("posthog capture:", { event_name, properties, options });
        }
      }
    };
    this.identify = (id, properties, propertiesOnce) => {
      if (typeof posthog !== "undefined") {
        posthog.identify(id, properties, propertiesOnce);
        if (this.log) {
          console.log("posthog identify:", { id, properties, propertiesOnce });
        }
      }
    };
    var _b = _a, { apiKey, log } = _b, config = __objRest(_b, ["apiKey", "log"]);
    this.apiKey = apiKey;
    this.config = config;
    this.log = !!log;
    this.initPH();
  }
};

export {
  PostHogTracker
};
//# sourceMappingURL=chunk-MO5A4M63.mjs.map