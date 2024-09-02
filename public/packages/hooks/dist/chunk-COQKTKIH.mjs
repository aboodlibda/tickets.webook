'use client'

// src/useWebsiteLocale.ts
var useWebsiteLocale = ({
  defaultLang,
  supportedLngs = ["en", "ar", "en-US", "ar-SA", "en-us", "ar-sa"]
} = {}) => {
  var _a;
  const isBrowser = typeof window !== "undefined";
  const pathname = isBrowser ? window.location.pathname : "";
  const firstSegment = ((_a = pathname == null ? void 0 : pathname.split("/")) == null ? void 0 : _a[1]) || "";
  const isValidLang = supportedLngs.includes(firstSegment);
  const lang = isValidLang ? firstSegment : defaultLang;
  const shortLang = (lang == null ? void 0 : lang.startsWith("ar")) ? "ar" : "en";
  return { lang, shortLang };
};

export {
  useWebsiteLocale
};
//# sourceMappingURL=chunk-COQKTKIH.mjs.map