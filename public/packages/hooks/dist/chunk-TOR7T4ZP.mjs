'use client'

// src/useWindowScroll.ts
import { useEffect, useState } from "react";
var useWindowScroll = () => {
  const [state, setState] = useState(() => ({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    toUp: false,
    toDown: false,
    diffY: 0
  }));
  useEffect(() => {
    const handler = () => {
      setState((prev) => {
        const { scrollX, scrollY, innerWidth, innerHeight } = window;
        return prev.x !== scrollX || prev.y !== scrollY ? {
          x: scrollX,
          y: scrollY,
          width: innerWidth,
          height: innerHeight,
          toUp: scrollY < prev.y,
          toDown: prev.y < scrollY,
          diffY: scrollY - prev.y
        } : prev;
      });
    };
    handler();
    window.addEventListener("scroll", handler, {
      capture: false,
      passive: true
    });
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return state;
};

export {
  useWindowScroll
};
//# sourceMappingURL=chunk-TOR7T4ZP.mjs.map