export const countProductPlus = (count) => {
  return {
    type: "PLUS",
    payload: count
  };
};

export const deleteProduct = (id) => {
  return {
    type: "DELETE-PRODUCT",
    payload: id
  }
}

export const plusProduct = (id, quantity) => {
  return {
    type: "PLUS-PRODUCT",
    payload: {id, quantity}
  }
}
