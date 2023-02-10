import { throttle } from "./throttle";
import React, { useState, useEffect, useContext, useRef } from "react";
import AppContext from "../state/AppState/AppContext";

const useWheel = () => {
  const {
    setSection,
    canScroll,
    section,
    setCanScroll,
    setisLeaveIntroVisible,
  } = useContext(AppContext);

  const ref = useRef<null | boolean>(null);
  const sectionRef = useRef<null | number>(null);

  useEffect(() => {
    ref.current = canScroll;
  }, [canScroll]);

  useEffect(() => {
    sectionRef.current = section;
  }, [section]);

  useEffect(() => {
    setCanScroll(false);
  }, []);

  const evaluateSection = (e: any) => {
    if (ref.current === true) {
      e.deltaY > 0 && setSection((prev) => prev + 1);
      e.deltaY < 0 && setSection((prev) => prev - 1);
    }
    sectionRef.current === 1 && e.deltaY > 0 && setisLeaveIntroVisible(true);
  };

  const throttled = throttle(750, evaluateSection);

  console.log(throttled);

  useEffect(() => {
    document.addEventListener("wheel", (e) => throttled(e));
  }, []);

  return null;
};

export default useWheel;
