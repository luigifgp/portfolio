import { sidebarActionCreator } from "../types/actionsCreatorTypes";


export const sidebarA: sidebarActionCreator = (sidebar) => {
    return {
      type: "SIDEBAR_ACTIVE",
      sidebar,
    };
}