
import { SideBarAction, FormSubmittedAction, ModalOpenAction, FormDataAction } from "./actionsType";
import { FormData } from "./storeTypes";


export type sidebarActionCreator = (sidebar: boolean) => SideBarAction;
export type formSubmittedActionCreator = (formSubmitted: boolean) => FormSubmittedAction;
export type modalOpenActionCreator = (modalOpen: boolean) => ModalOpenAction;
export type formDataActionCreator = (formData: FormData) => FormDataAction;