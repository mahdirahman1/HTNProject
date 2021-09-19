const initialState = {
  data: [
    {
      id: "e1",
      event: "Google I/O",
      time: "5 AM",
      date: new Date(2021, 1, 29),
      attendees: 1203,
      description: "lorem",
    },
    {
      id: "e2",
      event: "Travis Scott Concert",
      time: "12 PM",
      date: new Date(3002, 8, 2),
      attendees: 4550,
      description: "lorem ipsum",
    },
    {
      id: "e3",
      event: "Eve's Birthday Party",
      time: "3 PM",
      date: new Date(1834, 6, 18),
      attendees: 103,
      description: "lorem ipsum lorem",
    },
    {
      id: "e4",
      event: "random1",
      time: "3 PM",
      date: new Date(1834, 6, 18),
      attendees: 103,
      description: "lorem ipsum lorem lorem",
    },
    {
      id: "e5",
      event: "random",
      time: "3 PM",
      date: new Date(1834, 6, 18),
      attendees: 103,
      description: "lorem ipsum lorem lorem lorem",
    },
    {
      id: "e6",
      event: "random",
      time: "3 PM",
      date: new Date(1834, 6, 18),
      attendees: 103,
      description: "lorem ipsum lorem lorem lorem lorem",
    },
  ],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      let newData = state.data.map((item) => Object.assign({}, item, {}));
      newData.push(action.payload);
      return Object.assign({}, state, {
        data: newData,
      });

    default:
      return state;
  }
};

export default itemReducer;
