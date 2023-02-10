import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div).attrs({})`
  position: fixed;
  display: flex;

  width: 100vw;
  height: 100vh;
  z-index: 20;
`;

export const Side = styled(motion.div).attrs({})`
  width: 50vw;
  height: 100%;
  z-index: 20;
  background-color: black;
`;
