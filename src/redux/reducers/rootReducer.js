import { combineReducers } from "redux";
import ListsReducer from "./ListsReducer";
import BoardsReducer from "./BoardsReducer";
import CardsReducer from "./CardsReducer";
const rootReducer = combineReducers({
  lists: ListsReducer,
  boards: BoardsReducer,
  cards: CardsReducer
});

export default rootReducer;
