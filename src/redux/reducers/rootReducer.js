import { combineReducers } from "redux";
import ListsReducer from "./ListsReducer";
import BoardsReducer from "./BoardsReducer";
import CardsReducer from "./CardsReducer";

const RootReducer = combineReducers({
  lists: ListsReducer
});

export default RootReducer;
