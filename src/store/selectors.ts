import { createSelector } from "reselect";
import { AppState } from "./rootReducer";
import SideBar from '../components/Sidebar/Sidebar';


const getSidebar = (state: AppState) => state.portfolio.sidebar;

const getFormSubmitted = (state: AppState) => state.portfolio.formSubmitted;

const modalOpen = (state: AppState) => state.portfolio.modalOpen;

export const getSidebarSelector = createSelector(getSidebar, (sidebar) => sidebar);

export const getFormSubmittedSlector = createSelector(getFormSubmitted, (formSubmitted) => formSubmitted);

export const modalOpenSelector = createSelector(modalOpen, (modalOpen) => modalOpen);