const initialState = {
  countProduct: 0,
  name: "tai"
}

export const countProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS":
      return state + 1;
    case "PREV":
      return state - 1;
    default:
      return state;
  }
};
