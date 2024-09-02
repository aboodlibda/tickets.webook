'use client'

// src/utils/webview.ts
var postMessageToWebview = (message) => {
  var _a;
  if (typeof window !== "undefined") {
    (_a = window.ReactNativeWebView) == null ? void 0 : _a.postMessage(message);
  }
};

export {
  postMessageToWebview
};
//# sourceMappingURL=chunk-PFIXY22P.mjs.map