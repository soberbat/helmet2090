import { useAnimationControls } from "framer-motion";
import React, { useEffect } from "react";
import { Side, Wrapper } from "./Splash.styles";

const Splash = () => {
  const controlsRight = useAnimationControls();
  const controlsLeft = useAnimationControls();

  useEffect(() => {
    controlsLeft.start({
      x: "100%",
      transition: { ease: "circIn", duration: 2 },
    });
    controlsRight.start({
      x: "-100%",
      transition: { ease: "circIn", duration: 2 },
    });
  }, []);

  return (
    <Wrapper>
      <Side animate={controlsRight} />
      <Side animate={controlsLeft} />
    </Wrapper>
  );
};

export default Splash;
