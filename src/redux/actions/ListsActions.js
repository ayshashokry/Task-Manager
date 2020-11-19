const intialState = [
  {
    title: "To-Do",
    id: 0,
    cards: [
      { id: 0, text: "Create a new website" },
      { id: 1, text: "style task manager" },
      { id: 2, text: "Buy laptop" }
    ]
  }
];


const ListReducer=(state=intialState,action)=>{
    switch(action.type){
        default:
            return state
    }
}