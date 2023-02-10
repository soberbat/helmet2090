import React, { useRef, useState } from "react";

export default function useApp() {
  const [section, setSection] = useState(0);
  const [canScroll, setCanScroll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(true);
  const [isLeaveIntroVisible, setisLeaveIntroVisible] = useState(false);

  const scrollableRef = useRef<boolean | null>(true);

  return {
    section,
    setSection,
    scrollableRef,
    setCanScroll,
    canScroll,
    selectedCategory,
    setSelectedCategory,
    isLeaveIntroVisible,
    setisLeaveIntroVisible,
  };
}
