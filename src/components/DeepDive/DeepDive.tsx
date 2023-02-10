import React, { useEffect } from "react";
import AppContext from "../../state/AppState/AppContext";
import useApp from "../../state/AppState/useApp";
import { Wrapper } from "./DeepDive.styles";

interface IDeepDıve {
  closeModal: () => void;
  isModalOpen: boolean;
}

const DeepDive = ({ closeModal, isModalOpen }: IDeepDıve) => {
  return (
    <Wrapper>
      <button onClick={closeModal}> X</button>
    </Wrapper>
  );
};

export default DeepDive;
