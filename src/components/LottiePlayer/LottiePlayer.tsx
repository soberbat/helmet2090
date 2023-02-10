import React, { useRef, useEffect, useState, useContext } from "react";

import Lottie from "react-lottie-player";
import lottie from "../../../public/lottie.json";
import styled from "styled-components";
import AppContext from "../../state/AppState/AppContext";
import { SectionHelper } from "../Flow/Flow.syled";

const LottieWrapper = styled.div`
  position: fixed;
  right: 3%;
  z-index: 999;
  width: 50px;
  bottom: 3%;
`;

const LottiePlayer = () => {
  const [isPlaying, setisPlaying] = useState(true);

  const { section } = useContext(AppContext);

  return (
    <>
      <SectionHelper> {section} </SectionHelper>
      <LottieWrapper onClick={() => setisPlaying(!isPlaying)}>
        <Lottie animationData={lottie} loop play={isPlaying} />
      </LottieWrapper>
    </>
  );
};

export default LottiePlayer;
