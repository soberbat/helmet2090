import React, { useState, useRef, useEffect, useContext } from "react";

import { SectionWrapper } from "../styled/Common.styles";
import {
  Card,
  CardWrapper,
  DeepDiveButton,
  DeepDiveWrapper,
  Headline,
  Paragraph,
  ExitOverlay,
} from "./Intro.styles";

import { data } from "./data";
import { AnimatePresence, motion } from "framer-motion";
import DeepDive from "../components/DeepDive/DeepDive";
import useApp from "../state/AppState/useApp";
import AppContext from "../state/AppState/AppContext";
import { NavigateBack } from "../components/NavigateBack/NavigateBack";
import LeaveIntro from "../components/LeaveIntro/LeaveIntro";

const Intro = () => {
  const {
    setCanScroll,
    setSelectedCategory,
    setSection,
    isLeaveIntroVisible,
    setisLeaveIntroVisible,
  } = useContext(AppContext);

  const [specsData, setSpecsData] = useState(data);
  const [isSelected, setisSelected] = useState(false);
  const [isDeepDiveOpen, setisDeepDiveOpen] = useState<boolean | undefined>(
    undefined
  );
  const [isExitOverlayVisible, setisExitOverlayVisible] =
    useState<boolean>(false);

  const showOverlay = () => setisExitOverlayVisible(true);

  const handleClick = (key: string, headline: string) => {
    setSelectedCategory(headline);
    const newArr = specsData.filter((item) => item.key === key);
    setSpecsData(newArr);
    setisSelected(true);
    setCanScroll(false);
  };

  const handleNavigateClick = (e: any) => {
    e.stopPropagation();
    setSpecsData(data);
    setisSelected(false);
    setSelectedCategory("İnitial");
  };

  useEffect(() => {
    isDeepDiveOpen && setCanScroll(false);
    isDeepDiveOpen === false && setisLeaveIntroVisible(false);
  }, [isDeepDiveOpen]);

  const closeModal = () => setisDeepDiveOpen(false);

  const exit = {
    opacity: 0,
    x: 20,
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <SectionWrapper>
      <CardWrapper>
        <AnimatePresence>
          {specsData.map(({ headline, paragrahp, key }) => (
            <Card
              key={key}
              exit={exit}
              onClick={() => handleClick(key, headline)}
            >
              <Headline>{headline}</Headline>
              <Paragraph>{paragrahp}</Paragraph>

              <AnimatePresence>
                {isSelected && <NavigateBack onClick={handleNavigateClick} />}
              </AnimatePresence>
            </Card>
          ))}
        </AnimatePresence>

        {isSelected && (
          <>
            <DeepDiveWrapper onClick={() => setisDeepDiveOpen(true)}>
              <DeepDiveButton>Deep Dive</DeepDiveButton>
            </DeepDiveWrapper>
          </>
        )}
      </CardWrapper>
      <AnimatePresence>
        {isDeepDiveOpen && (
          <DeepDive isModalOpen={isDeepDiveOpen} closeModal={closeModal} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isLeaveIntroVisible && !isDeepDiveOpen && (
          <LeaveIntro onExitClick={showOverlay} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isExitOverlayVisible && (
          <ExitOverlay onAnimationComplete={(e) => setSection(2)} />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Intro;
