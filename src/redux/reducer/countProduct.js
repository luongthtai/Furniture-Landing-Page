const initialState = {
  bought: [],
};

export const countProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS":
      state.bought.push(action.payload);
      // const newBought = state.bought.filter((item, index) => state.bought.indexOf(item) === index);
      
      const newBought = [...new Set(state.bought)]
      
      return {
        bought: newBought,
      };

    case "DELETE-PRODUCT":
      return {
        bought: state.bought.filter((item) => {
          return item._id !== action.payload;
        }),
      };

    default:
      return state;
  }
};
