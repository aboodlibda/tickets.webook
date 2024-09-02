'use client'

// src/clock/circle.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var ClockIcon = ({ className = "" }) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      className,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 2.3499C6.67048 2.3499 2.35002 6.67035 2.35002 11.9999C2.35002 17.3295 6.67048 21.6499 12 21.6499C17.3296 21.6499 21.65 17.3295 21.65 11.9999C21.65 6.67035 17.3296 2.3499 12 2.3499ZM0.650024 11.9999C0.650024 5.73147 5.73159 0.649902 12 0.649902C18.2685 0.649902 23.35 5.73147 23.35 11.9999C23.35 18.2683 18.2685 23.3499 12 23.3499C5.73159 23.3499 0.650024 18.2683 0.650024 11.9999Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.4644 7.96165C11.4845 7.70115 11.7017 7.5 11.963 7.5H12.0475C12.3043 7.5 12.5194 7.69465 12.545 7.95025L12.9999 12.5L16.248 14.356C16.4038 14.4451 16.4999 14.6107 16.4999 14.7902V14.8454C16.4999 15.1751 16.1865 15.4145 15.8684 15.3278L11.3986 14.1087C11.1672 14.0456 11.0132 13.8271 11.0316 13.588L11.4644 7.96165Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
};

export {
  ClockIcon
};
//# sourceMappingURL=chunk-QJIZRKKL.mjs.map