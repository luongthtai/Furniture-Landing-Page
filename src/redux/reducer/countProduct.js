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
        bought: unique,
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
