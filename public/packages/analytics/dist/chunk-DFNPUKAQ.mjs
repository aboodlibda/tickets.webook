'use client'

// src/context/useAnalytics.ts
import { useContext } from "react";

// src/context/context.tsx
import { createContext } from "react";
var analyticsContext = createContext(null);
var context_default = analyticsContext;

// src/context/useAnalytics.ts
var useAnalytics = () => {
  const context = useContext(context_default);
  if (!context) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider");
  }
  return context;
};
var useAnalytics_default = useAnalytics;

export {
  context_default,
  useAnalytics_default
};
//# sourceMappingURL=chunk-DFNPUKAQ.mjs.map