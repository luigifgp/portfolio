import { createSelector } from "reselect";
import { AppState } from "./rootReducer";
import SideBar from '../components/Sidebar/Sidebar';


const getSidebar = (state: AppState) => state.sidebar;

export const getSidebarSelector = createSelector(getSidebar, (sidebar) => sidebar);