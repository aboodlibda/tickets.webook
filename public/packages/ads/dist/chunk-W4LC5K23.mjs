'use client'
import {
  useAdsProvider
} from "./chunk-T47IKODD.mjs";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-E5AFJQUS.mjs";

// src/components/AdSlot.tsx
import { useEffect, useRef, useState } from "react";
import { uuid } from "@wbk/utils";
import { jsx } from "react/jsx-runtime";
var AdSlot = ({
  type = "slot",
  slotId = uuid(),
  format,
  adUnit,
  size = [],
  show,
  mapping,
  targeting,
  className,
  onRendered
}) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const slot = useRef(null);
  const canRun = typeof window !== "undefined" && typeof (window == null ? void 0 : window.googletag) !== "undefined";
  useEffect(() => {
    if (canRun) {
      googletag.cmd.push(() => {
        var _a, _b;
        let createdSlot = null;
        if (type === "outOfPage") {
          const divId = format === "SLOT_ID" ? slotId : googletag.enums.OutOfPageFormat[format || "BOTTOM_ANCHOR"];
          createdSlot = googletag.defineOutOfPageSlot(adUnit, divId);
        } else {
          const initialSize = size.length > 0 ? size : "fluid";
          createdSlot = googletag.defineSlot(adUnit, initialSize, slotId);
        }
        if (createdSlot) {
          slot.current = createdSlot;
          slot.current.addService(googletag.pubads());
          googletag.display(slot.current);
        }
        if (mapping == null ? void 0 : mapping.length) {
          const sizeMapping = googletag.sizeMapping();
          for (const map of mapping) {
            sizeMapping.addSize(map[0], map[1]);
          }
          (_a = slot.current) == null ? void 0 : _a.defineSizeMapping(sizeMapping.build() || []);
        }
        if (targeting) {
          for (const key in targeting) {
            (_b = slot.current) == null ? void 0 : _b.setTargeting(key, targeting[key]);
          }
        }
      });
    }
    return () => {
      if (canRun) {
        googletag.cmd.push(() => {
          if (slot.current) {
            googletag.destroySlots([slot.current]);
          }
        });
      }
    };
  }, [canRun]);
  useEffect(() => {
    const startShow = typeof show === "undefined" || show;
    const currentSlot = slot.current;
    if (startShow && currentSlot) {
      googletag.cmd.push(() => {
        googletag.pubads().refresh([currentSlot]);
      });
    }
  }, [show]);
  useEffect(() => {
    if (!canRun)
      return;
    googletag.cmd.push(() => {
      googletag.pubads().addEventListener("slotRenderEnded", (event) => {
        if (event.slot.getSlotElementId() === slotId) {
          if (onRendered) {
            onRendered(event);
          } else if (event.isEmpty) {
            setIsEmpty(true);
          }
        }
      });
    });
  }, []);
  if (!canRun || isEmpty || type === "outOfPage" && format !== "SLOT_ID")
    return null;
  return /* @__PURE__ */ jsx("div", { id: slotId, className });
};
var AdSlot_default = AdSlot;

// src/components/CatF.tsx
import { useState as useState3 } from "react";
import { motion } from "framer-motion";
import { Button } from "@wbk/ui";
import { CloseIcon } from "@wbk/svg";

// src/components/DynamicAdSlot.tsx
import { useState as useState2 } from "react";
import { useQuery } from "@tanstack/react-query";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var BASE_URL = "";
var DynamicAdSlot = (_a) => {
  var _b = _a, { adUnit, className, slotId, children } = _b, props = __objRest(_b, ["adUnit", "className", "slotId", "children"]);
  const { env } = useAdsProvider();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["ads"],
    queryFn: () => fetch(`${BASE_URL}/@smc/ads/ads.json`).then((res) => res.json()),
    staleTime: Infinity,
    gcTime: Infinity
  });
  const [isEmpty, setIsEmpty] = useState2(true);
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const key = env === "development" ? "test" : adUnit;
  const adData = data == null ? void 0 : data[key];
  if (isError || !isLoading && !adData)
    return null;
  return /* @__PURE__ */ jsxs("div", { className: `${isEmpty ? "hidden" : className}`, children: [
    (adData == null ? void 0 : adData.adUnit) && /* @__PURE__ */ jsx2(
      AdSlot_default,
      __spreadProps(__spreadValues({}, props), {
        adUnit: adData.adUnit,
        slotId: slotId || adUnit,
        targeting: __spreadValues({
          URL: pathname
        }, (adData == null ? void 0 : adData.targeting) || {}),
        onRendered: (event) => {
          if (!event.isEmpty) {
            setIsEmpty(false);
          }
          if (props.onRendered) {
            props.onRendered(event);
          }
        }
      })
    ),
    children
  ] });
};
var DynamicAdSlot_default = DynamicAdSlot;

// src/components/CatF.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var AdSlotCatF = ({ adUnit }) => {
  const [show, setShow] = useState3(false);
  return /* @__PURE__ */ jsxs2(
    motion.div,
    {
      initial: { y: 100 },
      animate: { y: show ? 0 : 100 },
      transition: { duration: 0.3 },
      className: "fixed bottom-0 z-20 mx-auto flex min-h-[60px] w-full items-center justify-center bg-white md:hidden",
      children: [
        /* @__PURE__ */ jsx3("div", { className: "absolute -top-6 right-0 z-10 flex h-6 w-6 items-center justify-center rounded-tl-lg bg-white/70", children: /* @__PURE__ */ jsx3(
          Button,
          {
            className: "flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700 p-0 hover:bg-zinc-600 focus:bg-zinc-600",
            shape: "text",
            theme: "transparent",
            onClick: () => setShow(false),
            children: /* @__PURE__ */ jsx3(CloseIcon, { className: "fill-white" })
          }
        ) }),
        /* @__PURE__ */ jsx3(
          DynamicAdSlot_default,
          {
            adUnit,
            className: "z-20 overflow-hidden",
            mapping: [
              [
                [0, 0],
                [
                  [320, 50],
                  [320, 48]
                ]
              ]
            ],
            onRendered: (event) => setShow(!event.isEmpty)
          }
        )
      ]
    }
  );
};
var CatF_default = AdSlotCatF;

// src/components/LB.tsx
import { twMerge } from "tailwind-merge";
import { useDeviceDetect } from "@wbk/hooks";
import { jsx as jsx4 } from "react/jsx-runtime";
var AdSlotLB = ({ adUnit, slotId, className }) => {
  const { isMobile } = useDeviceDetect();
  if (isMobile) {
    return null;
  }
  return /* @__PURE__ */ jsx4(
    DynamicAdSlot_default,
    {
      adUnit,
      slotId,
      className: twMerge(
        "relative z-20 mx-auto flex min-h-[122px] max-w-full items-center justify-center overflow-hidden py-4 [&>div]:mx-auto",
        className
      ),
      mapping: [
        [
          [1e3, 100],
          [
            [728, 90],
            [970, 90]
          ]
        ],
        [
          [750, 100],
          [728, 90]
        ]
      ]
    }
  );
};
var LB_default = AdSlotLB;

// src/components/LSkin.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var AdSlotLSkin = ({ adUnit }) => {
  return /* @__PURE__ */ jsx5(
    DynamicAdSlot_default,
    {
      adUnit,
      className: "3xl:block fixed left-4 top-[10%] z-20 hidden",
      mapping: [
        [
          [1760, 0],
          [160, 600]
        ],
        [
          [0, 0],
          [120, 600]
        ]
      ]
    }
  );
};
var LSkin_default = AdSlotLSkin;

// src/components/MLB.tsx
import { twMerge as twMerge2 } from "tailwind-merge";
import { useDeviceDetect as useDeviceDetect2 } from "@wbk/hooks";
import { jsx as jsx6 } from "react/jsx-runtime";
var AdSlotMLB = ({ adUnit, slotId, className }) => {
  const { isMobile } = useDeviceDetect2();
  if (!isMobile) {
    return null;
  }
  return /* @__PURE__ */ jsx6(
    DynamicAdSlot_default,
    {
      adUnit,
      slotId,
      className: twMerge2(
        "relative z-20 mx-auto -mb-4 flex min-h-[66px] max-w-full items-center justify-center overflow-hidden pt-4 [&>div]:mx-auto",
        className
      ),
      mapping: [
        [
          [0, 0],
          [
            [320, 50],
            [320, 48]
          ]
        ]
      ]
    }
  );
};
var MLB_default = AdSlotMLB;

// src/components/MPU.tsx
import { twMerge as twMerge3 } from "tailwind-merge";
import { useDeviceDetect as useDeviceDetect3 } from "@wbk/hooks";
import { jsx as jsx7 } from "react/jsx-runtime";
var AdSlotMPU = ({ adUnit, className, slotId, children }) => {
  const { isMobile } = useDeviceDetect3();
  const adUnitPrefix = isMobile ? "mmpu" : "mpu";
  return /* @__PURE__ */ jsx7(
    DynamicAdSlot_default,
    {
      slotId: slotId ? `${slotId}-${adUnitPrefix}` : void 0,
      adUnit: `${adUnit}/${adUnitPrefix}`,
      className: twMerge3(
        "relative z-20 flex min-h-[250px] w-full items-center justify-center overflow-hidden [&>div>div>iframe]:rounded-md",
        className
      ),
      mapping: [
        [
          [0, 0],
          [
            [300, 250],
            [336, 280]
          ]
        ]
      ],
      children
    }
  );
};
var MPU_default = AdSlotMPU;

// src/components/RSkin.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var AdSlotRSkin = ({ adUnit }) => {
  return /* @__PURE__ */ jsx8(
    DynamicAdSlot_default,
    {
      adUnit,
      className: "3xl:block fixed right-4 top-[10%] z-20 hidden",
      mapping: [
        [
          [1760, 0],
          [160, 600]
        ],
        [
          [0, 0],
          [120, 600]
        ]
      ]
    }
  );
};
var RSkin_default = AdSlotRSkin;

// src/components/TemporarySticky.tsx
import { useEffect as useEffect2, useRef as useRef2, useState as useState4 } from "react";
import { useWindowScroll } from "@wbk/hooks";
import { jsx as jsx9 } from "react/jsx-runtime";
var TemporarySticky = (_a) => {
  var _b = _a, { top, duration } = _b, props = __objRest(_b, ["top", "duration"]);
  const { y } = useWindowScroll();
  const [isSticky, setIsSticky] = useState4(false);
  const done = useRef2(false);
  const ref = useRef2(null);
  const timeoutId = useRef2(void 0);
  useEffect2(() => {
    if (done.current || !ref.current)
      return;
    const sticky = ref.current.getBoundingClientRect().top <= top;
    setIsSticky(sticky);
    if (sticky) {
      if (!timeoutId.current) {
        timeoutId.current = setTimeout(() => {
          setIsSticky(false);
          done.current = true;
        }, duration * 1e3);
      }
    } else {
      setIsSticky(false);
    }
  }, [y, duration, top]);
  useEffect2(() => {
    return () => {
      clearTimeout(timeoutId.current);
    };
  }, []);
  const stickyStyles = isSticky ? {
    top: `${top}px`,
    position: "sticky",
    zIndex: 1e3
  } : {};
  return /* @__PURE__ */ jsx9(
    "div",
    __spreadProps(__spreadValues({
      ref
    }, props), {
      style: __spreadValues(__spreadValues({}, stickyStyles), props.style)
    })
  );
};
var TemporarySticky_default = TemporarySticky;

export {
  AdSlot_default,
  DynamicAdSlot_default,
  CatF_default,
  LB_default,
  LSkin_default,
  MLB_default,
  MPU_default,
  RSkin_default,
  TemporarySticky_default
};
//# sourceMappingURL=chunk-W4LC5K23.mjs.map