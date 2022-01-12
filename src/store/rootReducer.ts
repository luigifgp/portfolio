import { combineReducers } from "redux";

import portfolioReducer from "./reducers/portfolioReducer";


const rootReducer = combineReducers({
  portfolio: portfolioReducer,

});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
