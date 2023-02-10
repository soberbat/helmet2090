import styled from "styled-components";
import { motion } from "framer-motion";

export const MainWrap = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})`
  width: 100%;
  width: 100vw;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 30;
`;

export const Wrapper = styled(motion.div)`
  position: fixed;
  z-index: 5;
  width: 100vw;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: black;
  opacity: 0.9;
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 30vh;
  z-index: 20;
  background-color: white;
  opacity: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const Text = styled.p``;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;
export const Button = styled.button`
  background-color: #0f171a;
  color: white;
  border-radius: 15px;
  border: none;
  padding: 0.6rem 3rem;

  :hover {
    background-color: blue;
  }
`;
