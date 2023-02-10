import { motion } from "framer-motion";
import styled from "styled-components";

const parent = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: 0.4,
      staggerChildren: 0.3,
    },
  },
  exit: {
    x: 40,
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const child = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    x: 40,
    opacity: 0,
    ease: "easeIn",
    // transition: { duration: 0.5 },
  },
};

const smallParent = {
  anim: {
    opacity: 1,
    transition: {
      delay: 1,
      when: "beforeChildren",
    },
  },
  init: {
    opacity: 0,
  },
};

const smallChild = {
  anim: {
    opacity: 1,
    transition: {
      repeat: 4,
      repeatType: "reverse",
      duration: 1,
    },
  },
  init: {
    opacity: 0,
  },
};

export const Headline = styled.h1`
  font-size: 1.3rem;
`;

export const Paragraph = styled.span`
  font-size: 0.8rem;
`;

export const Card = styled(motion.div).attrs({
  variants: child,
})`
  background-color: #162227;
  width: fit-content;
  padding: 1.5rem;
  flex-direction: column;
  gap: 1rem;
  display: flex;
  position: relative;
  color: white;
  border-radius: 12px;
  transition: box-shadow 0.5s, background-color 0.2s;

  &:hover {
    background-color: blue;
    box-shadow: -1px 0px 30px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const CardWrapper = styled(motion.div).attrs({
  variants: parent,
  animate: "animate",
  initial: "initial",
  exit: "exit",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 40%;
  height: 100%;
  padding: 0 4rem;
`;

export const DeepDiveButton = styled(motion.div).attrs({
  variants: smallChild,
})`
  font-size: 1.2rem;
  color: white;
  /* background-color: blue; */
  /* padding: 0.4rem 1rem; */
  border: 1px solid white;
  border-radius: 8px;
  text-align: center;
  padding: 0.2rem 0;
`;

export const DeepDiveWrapper = styled(motion.div).attrs({
  variants: smallParent,
  animate: "anim",
  initial: "init",
})`
  width: 100%;
`;

export const ExitOverlay = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3, easing: "backOut" } },
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: white;
  height: 100vh;
  z-index: 300;
`;
