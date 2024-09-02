'use client'
import {
  useWindowResize
} from "./chunk-6X6KWJNW.mjs";

// src/useBreakpoints.ts
var BOOK_PAGE_BREAKEPOINT = 1170;
var useBreakpoints = () => {
  const { width } = useWindowResize();
  const is2lg = width >= BOOK_PAGE_BREAKEPOINT;
  return {
    is2lg
  };
};

export {
  useBreakpoints
};
//# sourceMappingURL=chunk-6QGFSTGV.mjs.map