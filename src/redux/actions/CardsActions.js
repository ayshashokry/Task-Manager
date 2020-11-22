import { ADD_CARD } from "./rootActions";

export const addCard = (listID, text) => {
  return {
    type: ADD_CARD,
    payload: { text, listID }
  };
};
