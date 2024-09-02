'use client'
import {
  context_default
} from "./chunk-DGWFSW7S.mjs";

// src/context/root/useAdsProvider.ts
import { useContext } from "react";
var useAdsProvider = () => {
  const context = useContext(context_default);
  if (!context) {
    throw new Error(
      "useAdsProvider must be used within an SmcAdsProvider, refer to usage instructions: https://github.com/nadude/webook-frontend/blob/main/packages/ads/README.md"
    );
  }
  return context;
};

export {
  useAdsProvider
};
//# sourceMappingURL=chunk-T47IKODD.mjs.map