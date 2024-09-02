'use client'
import {
  useAnalytics_default
} from "./chunk-DFNPUKAQ.mjs";
import {
  CONSENT_COOKIE_NAME
} from "./chunk-T2NN7R53.mjs";

// src/cookie/useCookieConsent.ts
import { useEffect, useState } from "react";
import { getItem, safeParseJson, setItem } from "@wbk/utils";
var useCookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const { setCookieConsent } = useAnalytics_default();
  useEffect(() => {
    const consent = getItem(CONSENT_COOKIE_NAME);
    if (!consent) {
      return setShowConsent(true);
    }
    const parsed = safeParseJson(consent);
    const EXPIRY_DURATION = 2 * 24 * 60 * 60 * 1e3;
    const isDenied = Object.values(parsed).some((v) => v === "denied");
    const isExpired = (/* @__PURE__ */ new Date()).getTime() - new Date(parsed.date).getTime() > EXPIRY_DURATION;
    setShowConsent(isDenied && isExpired);
  }, []);
  const saveConsent = (data) => {
    setItem(CONSENT_COOKIE_NAME, JSON.stringify(data));
    setCookieConsent({ type: "update", data });
  };
  const acceptConsent = () => {
    const data = {
      analytics_storage: "granted",
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      date: (/* @__PURE__ */ new Date()).toISOString()
    };
    saveConsent(data);
  };
  const rejectConsent = () => {
    const data = {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      date: (/* @__PURE__ */ new Date()).toISOString()
    };
    saveConsent(data);
  };
  return {
    showConsent,
    acceptConsent,
    rejectConsent
  };
};

export {
  useCookieConsent
};
//# sourceMappingURL=chunk-PANOJVNQ.mjs.map