'use client'
import "./chunk-D3KYZLAD.mjs";
import {
  PostHogTracker
} from "./chunk-MO5A4M63.mjs";
import "./chunk-PRBYVLPX.mjs";
import {
  useCookieConsent
} from "./chunk-PANOJVNQ.mjs";
import {
  context_default,
  useAnalytics_default
} from "./chunk-DFNPUKAQ.mjs";
import {
  GtmTracker
} from "./chunk-5BCRYQWM.mjs";
import "./chunk-NEKWE37Q.mjs";
import "./chunk-REY2IGVX.mjs";
import "./chunk-PFIXY22P.mjs";
import "./chunk-T2NN7R53.mjs";
import {
  __async
} from "./chunk-BTG5EALA.mjs";

// src/context/provider.tsx
import { useEffect, useState } from "react";
import { setItem } from "@wbk/utils";
import { jsx } from "react/jsx-runtime";
var AnalyticsProvider = ({ children, trackers, currentLocation }) => {
  const [subscribers] = useState(() => trackers);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const search = new URLSearchParams(window.location.search);
      const utm_source = search.get("utm_source");
      const utm_medium = search.get("utm_medium");
      const utm_campaign = search.get("utm_campaign") || "";
      const utm_id = search.get("utm_id") || "";
      const utm_content = search.get("utm_content") || "";
      const utm_term = search.get("utm_term") || "";
      if (utm_source && utm_medium) {
        setItem(
          "utms",
          JSON.stringify({ utm_source, utm_medium, utm_campaign, utm_id, utm_content, utm_term })
        );
      }
    }
  }, []);
  useEffect(() => {
    if (currentLocation) {
      for (const subscriber of subscribers) {
        subscriber.pageView();
      }
    }
  }, [currentLocation]);
  const setCookieConsent = (props) => {
    for (const subscriber of subscribers) {
      subscriber.setCookieConsent(props);
    }
  };
  const pageView = () => {
    for (const subscriber of subscribers) {
      subscriber.pageView();
    }
  };
  const signupEvent = (props) => __async(void 0, null, function* () {
    for (const subscriber of subscribers) {
      subscriber.signupEvent(props);
      subscriber.setUser(props.user);
    }
  });
  const loginEvent = (props) => __async(void 0, null, function* () {
    for (const subscriber of subscribers) {
      subscriber.loginEvent(props);
      subscriber.setUser(props.user);
    }
  });
  const setUser = (props) => {
    for (const subscriber of subscribers) {
      subscriber.setUser(props);
    }
  };
  const viewItemEvent = (props) => __async(void 0, null, function* () {
    for (const subscriber of subscribers) {
      subscriber.viewItemEvent(props);
    }
  });
  const viewItemListEvent = (props) => {
    for (const subscriber of subscribers) {
      subscriber.viewItemListEvent(props);
    }
  };
  const generateLeadEvent = (props) => {
    for (const subscriber of subscribers) {
      subscriber.generateLeadEvent(props);
    }
  };
  const cartEvent = (props) => {
    for (const subscriber of subscribers) {
      subscriber.cartEvent(props);
    }
  };
  const beginCheckout = (props) => {
    for (const subscriber of subscribers) {
      subscriber.beginCheckout(props);
    }
  };
  const purchaseEvent = (props) => __async(void 0, null, function* () {
    for (const subscriber of subscribers) {
      subscriber.purchaseEvent(props);
    }
  });
  const shareEvent = (props) => {
    for (const subscriber of subscribers) {
      subscriber.shareEvent(props);
    }
  };
  return /* @__PURE__ */ jsx(
    context_default.Provider,
    {
      value: {
        setCookieConsent,
        signupEvent,
        loginEvent,
        setUser,
        viewItemEvent,
        viewItemListEvent,
        generateLeadEvent,
        cartEvent,
        beginCheckout,
        purchaseEvent,
        shareEvent,
        pageView
      },
      children
    }
  );
};
var provider_default = AnalyticsProvider;
export {
  provider_default as AnalyticsProvider,
  GtmTracker,
  PostHogTracker,
  useAnalytics_default as useAnalytics,
  useCookieConsent
};
//# sourceMappingURL=index.mjs.map