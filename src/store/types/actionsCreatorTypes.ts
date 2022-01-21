
import { SideBarAction, FormSubmittedAction, ModalOpenAction } from "./actionsType";


export type sidebarActionCreator = (sidebar: boolean) => SideBarAction;
export type formSubmittedActionCreator = (formSubmitted: boolean) => FormSubmittedAction;
export type modalOpenActionCreator = (modalOpen: boolean) => ModalOpenAction;