import { combineReducers } from "redux";
import { commentReducer } from "./commentReducer";

export default combineReducers({
  comment: commentReducer,
});
