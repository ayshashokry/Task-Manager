import { ADD_LIST, ADD_CARD, DRAG_HAPPEND } from "../actions/rootActions";

const intialState = [
  {
    title: "To-Do",
    id: `list-${0}`,
    cards: [
      { id: `card-${0}`, text: "Create a new website" },
      { id: `card-${1}`, text: "style task manager" },
      { id: `card-${2}`, text: "Buy laptop" }
    ]
  },
  {
    title: "To-Do",
    id: `list-${1}`,
    cards: [
      { id: `list-${0}`, text: "Create a new website" },
      { id: `list-${1}`, text: "style task manager" },
      { id: `list-${2}`, text: "Buy laptop" }
    ]
  }
];
let listID = 3;
let cardID = 4;
const ListsReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`
      };
      listID += 1;
      return [...state, newList];

    case ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `list-${cardID}`
      };
      cardID += 1;
      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });
      return newState;
    }
    case DRAG_HAPPEND:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type
      } = action.payload;
      const newState = [...state];

      //drag list around

      if (type === "list") {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
      }

      //in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      //in other list

      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.find(list => droppableIdStart === list.id);
        const card = listStart.cards.splice(droppableIndexStart, 1);
        const listEnd = state.find(list => droppableIdEnd === list.id);
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return newState;
    default:
      return state;
  }
};

export default ListsReducer;
