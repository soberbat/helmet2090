import React, { useContext } from "react";
import AppContext from "../../state/AppState/AppContext";
import useApp from "../../state/AppState/useApp";
import {
  Button,
  ButtonsWrapper,
  MainWrap,
  Overlay,
  Text,
  Wrapper,
} from "./LeaveIntro.styles";

interface ILeaveItnro {
  onExitClick: () => void;
}

const LeaveIntro = ({ onExitClick }: ILeaveItnro) => {
  const { setisLeaveIntroVisible } = useContext(AppContext);

  const handleClick = (isVisible: boolean, isYes: boolean) => {
    setisLeaveIntroVisible(isVisible);
    isYes && onExitClick();
  };

  return (
    <MainWrap>
      <Wrapper />
      <Overlay>
        <Text>Do you want to leave the Deep Dive?</Text>
        <ButtonsWrapper>
          <Button onClick={(e) => handleClick(false, true)}> Yes </Button>
          <Button onClick={(e) => handleClick(false, false)}> No</Button>
        </ButtonsWrapper>
      </Overlay>
    </MainWrap>
  );
};

export default LeaveIntro;
