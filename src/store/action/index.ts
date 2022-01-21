import { modalOpenActionCreator } from '../types/actionsCreatorTypes';
import {
  sidebarActionCreator,
  formSubmittedActionCreator,
} from "../types/actionsCreatorTypes";


export const sidebarA: sidebarActionCreator = (sidebar) => {
    return {
      type: "SIDEBAR_ACTIVE",
      sidebar,
    };
}

export const formSubmitted: formSubmittedActionCreator = (formSubmitted) => {
  return {
    type: "FORM_SUBMITTED",
    formSubmitted,
  };
};

export const modalOpen: modalOpenActionCreator = (modalOpen) => {
  return {
    type: "MODAL_OPEN",
    modalOpen,
  }
}