const initialState = {
  bought: [],
  newBought: [],
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

      state.bought.map((item) => {
        return (item.__v = 1);
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
      state.bought.map((item) => {
        if (item._id === action.payload._id) {
          item.__v < 1 ? (item.__v = 1) : (item.__v = item.__v + 1);
        }
        return state.bought;
      });

      return {
        ...state,
      };

    case "PREV-PRODUCT":
      state.bought.map((item) => {
        if (item._id === action.payload._id) {
          item.__v < 2 ? (item.__v = 1) : (item.__v = item.__v - 1);
        }
        return state.bought;
      });

      return {
        ...state,
      };

    default:
      return state;
  }
};
