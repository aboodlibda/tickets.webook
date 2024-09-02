'use client'

// src/useElementResize.ts
import { useEffect, useState } from "react";
var useElementResize = ({ id }) => {
  const element = document.getElementById(id);
  const [state, setState] = useState({
    width: element == null ? void 0 : element.clientWidth,
    height: element == null ? void 0 : element.clientHeight
  });
  useEffect(() => {
    if (element) {
      const handler = () => {
        const { clientWidth, clientHeight } = element;
        if (state.width !== clientWidth || state.height !== clientHeight) {
          setState({
            width: innerWidth,
            height: innerHeight
          });
        }
      };
      handler();
      window.addEventListener("resize", handler, {
        capture: false,
        passive: true
      });
      return () => {
        window.removeEventListener("resize", handler);
      };
    }
  }, [element]);
  return state;
};

export {
  useElementResize
};
//# sourceMappingURL=chunk-TS66YLT6.mjs.map