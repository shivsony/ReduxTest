import { combineReducers } from "redux-immutable";
import { routerReducer } from "react-router-redux";

// Reducer
const rootReducer = combineReducers({
  router: routerReducer
});

export default rootReducer;
