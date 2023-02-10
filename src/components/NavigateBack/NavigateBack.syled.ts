import { motion } from "framer-motion";
import styled from "styled-components";

export const GoBack = styled(motion.div).attrs({
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
})`
  position: absolute;
  top: 5%;
  right: 2%;
  color: white;
  z-index: 20;
`;
