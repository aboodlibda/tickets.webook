'use client'

// src/useCountDown.ts
import { useCallback, useEffect, useMemo, useState } from "react";
var countDownIntervals = {};
var START = Date.now();
var useCountDown = ({ id, initialSeconds = 60 }) => {
  const destinationDate = START + initialSeconds * 1e3;
  const [count, setCount] = useState(initialSeconds);
  const set = (n) => {
    clearInterval(countDownIntervals[id]);
    setCount(n);
    init();
  };
  const reset = () => {
    setCount(initialSeconds);
    init();
  };
  const stop = () => {
    clearInterval(countDownIntervals[id]);
    setCount(0);
  };
  const decrease = useCallback(() => {
    setCount((prev) => {
      if (prev <= 1) {
        clearInterval(countDownIntervals[id]);
      }
      return prev - 1;
    });
  }, [id]);
  const init = useCallback(() => {
    countDownIntervals[id] = setInterval(decrease, 1e3);
  }, [decrease, id]);
  useEffect(() => {
    init();
    return () => clearInterval(countDownIntervals[id]);
  }, [init]);
  const timer = useMemo(() => {
    const distance = destinationDate - Date.now();
    return {
      days: Math.floor(distance / (1e3 * 60 * 60 * 24)),
      hours: Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)),
      minutes: Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60)),
      seconds: Math.floor(distance % (1e3 * 60) / 1e3)
    };
  }, [count, destinationDate]);
  return {
    timer,
    isTimeUp: timer.days <= 0 && timer.hours <= 0 && timer.minutes <= 0 && timer.seconds <= 0,
    count,
    reset,
    set,
    stop
  };
};

export {
  useCountDown
};
//# sourceMappingURL=chunk-GCBQORAS.mjs.map