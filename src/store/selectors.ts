import { createSelector } from "reselect";
import { AppState } from "./rootReducer";
import SideBar from '../components/Sidebar/Sidebar';


const getSidebar = (state: AppState) => state.portfolio.sidebar;

const modalOpen = (state: AppState) => state.portfolio.modalOpen;

const getFormData = (state: AppState) => state.portfolio.formData;

const getFormSubmitted = (state: AppState) => state.portfolio.formSubmitted;

export const getSidebarSelector = createSelector(getSidebar, (sidebar) => sidebar);


export const modalOpenSelector = createSelector(modalOpen, (modalOpen) => modalOpen);

export const getFormDataSelector = createSelector(getFormData, (formData) => formData);

export const getFormSubmittedSelector = createSelector(
  getFormSubmitted,
  (formSubmitted) => formSubmitted
);