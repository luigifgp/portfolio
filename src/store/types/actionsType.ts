import { FormData } from './storeTypes';


export interface SideBarAction {
    type: "SIDEBAR_ACTIVE"
    sidebar: boolean;
}

export interface ModalOpenAction{
  type: "MODAL_OPEN",
  modalOpen: boolean;

}


///


export interface FormSubmittedAction {
  type: "FORM_SUBMITTED";
  formSubmitted: boolean;
}

export interface FormDataAction {
  type: "FORM_DATA",
  formData: FormData;
}

export const actionIds = {
  SIDEBAR_ACTIVE: "SIDEBAR_ACTIVE",
  MODAL_OPEN: "MODAL_OPEN",
  FORM_SUBMITTED: "FORM_SUBMITTED",
  FORM_DATA: "FORM_DATA",
};