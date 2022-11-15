const initialState = {
  bought: [],
};

export const countProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS":
      state.bought.push(action.payload);

      const uniqueIds = [];

      const unique = state.bought.filter((element) => {
        const isDuplicate = uniqueIds.includes(element._id);

        if (!isDuplicate) {
          uniqueIds.push(element._id);

          return true;
        }

        return false;
      });

      return {
        ...state,
        bought: unique,
      };

    case "DELETE-PRODUCT":
      return {
        ...state,
        bought: state.bought.filter((item) => {
          return item._id !== action.payload;
        }),
      };

    case "PLUS-PRODUCT":
      let subTotal = 0;

      // console.log(action.payload);

      // state.bought.map((item) => {
      //   if (item._id === action.payload.id)
      //     return item.price * action.payload.quantity
      // });

      state.bought.map((item) => subTotal += item.price)

      console.log(subTotal);
      return {
        ...state,
        totals: subTotal,
      };

    default:
      return state;
  }
};
