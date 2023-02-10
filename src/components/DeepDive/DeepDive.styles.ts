import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div).attrs({
  initial: {
    // opacity: 0,
    y: "+100%",
  },
  animate: {
    // opacity: 1,
    y: "0",
    transition: {
      duration: 0.8,
      easing: "anticipate",
    },
  },
  exit: {
    y: "+100%",
    transition: {
      duration: 0.4,
      easing: "easeIn",
    },
  },
})`
  background-color: white;
  width: 100vw;
  position: fixed;
  bottom: 0;
  overflow-x: scroll;
  left: 0;
  border-radius: 70px 70px 0 0;
  z-index: 15;
  height: 90vh;
`;
