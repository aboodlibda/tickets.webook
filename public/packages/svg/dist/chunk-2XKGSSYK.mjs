'use client'

// src/check/animated.tsx
import { motion } from "framer-motion";
import { jsx, jsxs } from "react/jsx-runtime";
var AnimatedCheck = ({ className = "" }) => {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      viewBox: "0 0 121 120",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsx(
          motion.path,
          {
            initial: { scale: 0.2, opacity: 0 },
            animate: { scale: 1, opacity: 0.3 },
            transition: { duration: 0.5, delay: 0.2, type: "spring" },
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M60.5 110C88.1142 110 110.5 87.6142 110.5 60C110.5 32.3858 88.1142 10 60.5 10C32.8858 10 10.5 32.3858 10.5 60C10.5 87.6142 32.8858 110 60.5 110Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.path,
          {
            initial: { pathLength: 0, strokeLinecap: "inherit", strokeLinejoin: "inherit" },
            animate: { pathLength: 1, strokeLinecap: "round", strokeLinejoin: "round" },
            transition: { duration: 0.8, delay: 0.4, type: "spring" },
            d: "M35 64.5L52.5 79.5L87.5 42",
            stroke: "currentColor",
            strokeWidth: 10
          }
        )
      ]
    }
  );
};

// src/check/static.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var CheckIcon = ({ className = "" }) => {
  return /* @__PURE__ */ jsxs2(
    "svg",
    {
      width: "17",
      height: "16",
      viewBox: "0 0 17 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsx2("rect", { x: "0.5", width: "16", height: "16", rx: "8", fill: "currentColor" }),
        /* @__PURE__ */ jsx2(
          "path",
          {
            d: "M11.8472 4.70553C12.0558 4.46006 12.424 4.43021 12.6694 4.63886C12.9149 4.84751 12.9448 5.21565 12.7361 5.46112L7.77779 11.2945C7.56586 11.5438 7.19035 11.57 6.94578 11.3526L4.32078 9.01931C4.07999 8.80528 4.0583 8.43657 4.27233 8.19578C4.48637 7.95499 4.85508 7.9333 5.09587 8.14734L7.27511 10.0844L11.8472 4.70553Z",
            fill: "white"
          }
        )
      ]
    }
  );
};

export {
  AnimatedCheck,
  CheckIcon
};
//# sourceMappingURL=chunk-2XKGSSYK.mjs.map