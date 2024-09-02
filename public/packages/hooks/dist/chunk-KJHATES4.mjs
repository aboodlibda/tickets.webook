'use client'

// src/usePageShow.ts
import { useEffect } from "react";
var usePageShow = ({ onShow }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onpageshow = function(event) {
        if (event.persisted) {
          onShow();
        }
      };
    }
  }, []);
  return null;
};

export {
  usePageShow
};
//# sourceMappingURL=chunk-KJHATES4.mjs.map