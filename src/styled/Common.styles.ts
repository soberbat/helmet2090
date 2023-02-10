import { motion } from "framer-motion";
import styled from "styled-components";

export const SectionWrapper = styled(motion.div).attrs({
  // initial: {
  //   opacity: 0,
  //   x: "-100%",
  // },
  // animate: {
  //   opacity: 1,
  //   x: 0,
  //   transition: {
  //     duration: 1,
  //     when: "beforeChildren",
  //   },
  // },
  exit: {
    backgroundColor: "white",
    transition: {
      duration: 0.5,
    },
  },
})`
  width: 100vw;
  position: fixed;
  height: 100vh;
  z-index: 12;
`;
