import React, { createContext } from "react";

export interface IState {
  section: number | null;
  setSection: React.Dispatch<React.SetStateAction<number>>;
  canScroll: boolean;
  setCanScroll: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string | null;
  isLeaveIntroVisible: boolean;
  setisLeaveIntroVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const State = {
  section: null,
  setSection: () => {},
  canScroll: false,
  setCanScroll: () => {},
  selectedCategory: null,
  setSelectedCategory: () => {},
  isLeaveIntroVisible: false,
  setisLeaveIntroVisible: () => {},
};

export default createContext<IState>(State);
