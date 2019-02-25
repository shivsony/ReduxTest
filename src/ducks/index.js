import { combineReducers } from "redux-immutable";
import { routerReducer } from "react-router-redux";

import temp from "./temp";

// Reducer
const rootReducer = combineReducers({
  router: routerReducer,
  temp
});

export default rootReducer;
