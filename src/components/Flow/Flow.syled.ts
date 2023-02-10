import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  z-index: 2;
  position: relative;
  background-color: #0f171a;
  overflow: initial;
`;

export const SectionHelper = styled.span`
  position: fixed;
  bottom: 0;
  left: 20px;
  font-size: 30px;
  color: white;
  z-index: 200;
`;

export const Card = styled(motion.div).attrs({
  initial: {
    opacity: 0,
    x: "-100%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    x: "+100%",
    transition: {
      duration: 0.4,
    },
  },
})`
  background-color: black;
  width: 100vw;
  position: fixed;

  height: 100vh;
`;
