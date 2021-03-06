import { Reducer } from "redux";
import { portfolioState } from "../types/storeTypes";
import { SideBarAction, FormSubmittedAction, ModalOpenAction, FormDataAction } from '../types/actionsType';

type actions = SideBarAction | FormSubmittedAction | ModalOpenAction | FormDataAction;


const emptyForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};


const intitialState: portfolioState = {
  sidebar: false,
  formSubmitted: false,
  modalOpen: false,
  formData: emptyForm,
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
    case "FORM_DATA":
      return {...state, formData: action.formData}
    case "MODAL_OPEN":
      return {...state, modalOpen: action.modalOpen};
    default:
      return { ...state };
  }
};
export default portfolioReducer;
