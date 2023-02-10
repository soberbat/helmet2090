import { childVariant, parentVariant } from "./SectionTwo.animations";
import { motion } from "framer-motion";
import styled from "styled-components";

interface ICard {
  flex: number;
}

export const Wrapper = styled(motion.div).attrs({
  variants: parentVariant,
  initial: "initial",
  animate: "animate",
})`
  background-color: white;
  width: 100vw;
`;

export const CardContainer = styled(motion.div).attrs({
  variants: parentVariant,
})`
  background-color: white;
  padding: 1rem 1rem;
  display: flex;
  gap: 1rem;
`;

export const Card = styled(motion.div).attrs({
  variants: childVariant,
})<ICard>`
  height: 40vh;
  background-color: orange;
  flex: ${({ flex }) => flex};
`;
