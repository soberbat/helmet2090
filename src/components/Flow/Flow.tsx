import React, { useContext, useEffect } from "react";
import Environment from "../Scene/Scene";

import { Container, SectionHelper } from "./Flow.syled";

import Observer from "gsap/dist/Observer";

import { gsap } from "gsap";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import useWheel from "../../utils/useWheel";
import AppContext from "../../state/AppState/AppContext";
import Intro from "../../Intro/Intro";
import styled from "styled-components";
import Splash from "../Splash/Splash";
import SectionTwo from "../SectionTwo/SectionTwo";
import { resolve } from "node:path/win32";

const Deneme = styled(motion.div)`
  background-color: white;
  z-index: 400;

  overflow: scroll;
`;

export const Flow = () => {
  const { section } = useContext(AppContext);
  useWheel();

  return (
    <>
      <Container>
        {section !== 2 && <Environment />}
        <AnimatePresence>{section === 1 && <Intro />}</AnimatePresence>
        {section === 2 && <SectionTwo />}
      </Container>
    </>
  );
};
