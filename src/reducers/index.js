import { combineReducers } from "redux";
import dashboardReducer from "./dashboardReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  dash: dashboardReducer,
  errors: errorReducer
});
