const initialState = {
  countProduct: 0,
  bought: []
}

export const countProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS":
      return {
        countProduct: state.countProduct + 1,
        bought: [action.payload]
      }
    default:
      return state;
  }
};
