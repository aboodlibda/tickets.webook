'use client'

// src/useWindowResize.ts
import { useEffect, useState } from "react";
var useWindowResize = ({ width = 0, height = 0 } = {}) => {
  const [state, setState] = useState({ width: window.innerWidth, height: window.innerHeight });
  useEffect(() => {
    const handler = () => {
      const { innerWidth, innerHeight } = window;
      if (state.width !== innerWidth || state.height !== innerHeight) {
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
  }, []);
  return {
    width: state.width,
    height: state.height,
    isLessWidth: state.width <= width,
    isLessHeight: state.height <= height
  };
};

export {
  useWindowResize
};
//# sourceMappingURL=chunk-6X6KWJNW.mjs.map