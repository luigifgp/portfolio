import { combineReducers } from "redux";

import sidebarReducer from "./reducers/sidebarReducer";


const rootReducer = combineReducers({
  sidebar: sidebarReducer,

});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
