'use client'

// src/useDevice.ts
import { useEffect, useMemo, useState } from "react";
var useDeviceDetect = () => {
  const [userAgent, setUserAgent] = useState("SSR");
  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setUserAgent(navigator.userAgent);
    }
  }, []);
  const isSSR = useMemo(() => {
    return !!userAgent.match(/SSR/i);
  }, [userAgent]);
  const isAndroid = useMemo(() => {
    return !!userAgent.match(/Android/i);
  }, [userAgent]);
  const isIOS = useMemo(() => {
    return !!userAgent.match(/iPhone|iPad|iPod|Mobile/i);
  }, [userAgent]);
  const isMac = useMemo(() => {
    return !!userAgent.match(/Mac/i);
  }, [userAgent]);
  const isOpera = useMemo(() => {
    return !!userAgent.match(/Opera Mini/i);
  }, [userAgent]);
  const isWindowsMobile = useMemo(() => {
    return !!userAgent.match(/IEMobile/i);
  }, [userAgent]);
  const isSafari = useMemo(() => {
    return !!userAgent.match(/Safari/i) && userAgent.indexOf("Chrome") <= -1;
  }, [userAgent]);
  const isWebView = useMemo(() => {
    return userAgent.match(/WBKWebView/i);
  }, [userAgent]);
  const isMobile = useMemo(() => {
    return isAndroid || isIOS || isOpera || isWindowsMobile;
  }, [isAndroid, isIOS, isOpera, isWindowsMobile]);
  const isDesktop = useMemo(() => {
    return !isMobile;
  }, [isMobile]);
  return {
    isSSR,
    isAndroid,
    isIOS,
    isMac,
    isOpera,
    isWindowsMobile,
    isSafari,
    isMobile,
    isDesktop,
    isWebView
  };
};

export {
  useDeviceDetect
};
//# sourceMappingURL=chunk-A2N5J3GA.mjs.map