import { Reducer } from "redux";
import { portfolioState } from "../types/storeTypes";
import { SideBarAction } from "../types/actionsType";

type actions = SideBarAction;

const intitialState: portfolioState = {
  sidebar: false,
};

const sidebarReducer: Reducer<portfolioState, actions> = (
  state = intitialState,
  action
) => {
  switch (action.type) {
    case "SIDEBAR_ACTIVE":
      return { ...state, sidebar: action.sidebar };
    default:
      return { ...state };
  }
};
export default sidebarReducer;
