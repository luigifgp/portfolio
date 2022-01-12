import { Reducer } from "redux";
import { portfolioState } from "../types/storeTypes";
import { SideBarAction, FormSubmittedAction } from "../types/actionsType";

type actions = SideBarAction | FormSubmittedAction;

const intitialState: portfolioState = {
  sidebar: false,
  formSubmitted: false,
};

const portfolioReducer: Reducer<portfolioState, actions> = (
  state = intitialState,
  action
) => {
  switch (action.type) {
    case "SIDEBAR_ACTIVE":
      return { ...state, sidebar: action.sidebar };
    case "FORM_SUBMITTED":
      return { ...state, formSubmitted: action.formSubmitted };
    default:
      return { ...state };
  }
};
export default portfolioReducer;
