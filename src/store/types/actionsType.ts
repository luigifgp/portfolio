

export interface SideBarAction {
    type: "SIDEBAR_ACTIVE"
    sidebar: boolean;
}


export interface FormSubmittedAction {
  type: "FORM_SUBMITTED";
  formSubmitted: boolean;
}

export interface ModalOpenAction{
  type: "MODAL_OPEN",
  modalOpen: boolean;

}

export const actionIds = {
  SIDEBAR_ACTIVE: "SIDEBAR_ACTIVE",
  FORM_SUBMITTED: "FORM_SUBMITTED",
  MODAL_OPEN: "MODAL_OPEN",
};