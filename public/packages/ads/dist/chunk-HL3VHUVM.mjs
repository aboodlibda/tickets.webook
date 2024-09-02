'use client'

// src/hooks/useAds.ts
import { useMemo } from "react";
import { loadScriptAsync } from "@wbk/utils";
var CAN_RUN = typeof window !== "undefined";
var useAds = () => {
  const searchParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  const type = searchParams.get("type");
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const initGPT = () => {
    if (!CAN_RUN)
      return;
    loadScriptAsync({
      id: "gpt-js",
      url: "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
      target: "head"
    });
    window.googletag = window.googletag || { cmd: [] };
    googletag.cmd.push(() => {
      googletag.pubads().disableInitialLoad();
      googletag.pubads().enableSingleRequest();
      googletag.pubads().enableVideoAds();
      googletag.pubads().collapseEmptyDivs();
      googletag.enableServices();
    });
  };
  const initVideoScript = () => {
    if (!CAN_RUN)
      return;
    loadScriptAsync({
      id: "foxpush-script",
      snippet: `
      var foxpush_account_id = '21795300705';
      var foxpush_child_id = '41141015';
      var foxpush_unit_name  = 'monetization_system/23095303796';`
    });
    loadScriptAsync({
      id: "foxpush-js",
      url: "https://www.foxpush.com/programmatic_video/webook_mpu.js"
    });
  };
  const resolveExploreType = (type2) => {
    if (type2 === "experiences") {
      return "experience";
    }
    return type2 || "events";
  };
  const shouldRenderMpu = (total, idx) => {
    const nonZeroBasedIndex = idx + 1;
    const INDEX = 4;
    if (total <= INDEX) {
      return idx === total - 1;
    }
    return nonZeroBasedIndex % INDEX === 0;
  };
  const canRenderAds = useMemo(() => {
    if ((pathname == null ? void 0 : pathname.includes("ewc-")) || (pathname == null ? void 0 : pathname.includes("esports-")) || (pathname == null ? void 0 : pathname.includes("esl-"))) {
      return false;
    }
    return true;
  }, [pathname]);
  return {
    initGPT,
    canRenderAds,
    exploreType: resolveExploreType(type),
    resolveExploreType,
    shouldRenderMpu,
    initVideoScript
  };
};
var useAds_default = useAds;

export {
  useAds_default
};
//# sourceMappingURL=chunk-HL3VHUVM.mjs.map