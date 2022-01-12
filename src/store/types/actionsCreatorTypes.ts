
import { SideBarAction, FormSubmittedAction } from "./actionsType";


export type sidebarActionCreator = (sidebar: boolean) => SideBarAction;
export type formSubmittedActionCreator = (formSubmitted: boolean) => FormSubmittedAction;