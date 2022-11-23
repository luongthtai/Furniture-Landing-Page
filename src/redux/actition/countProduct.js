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

export const plusProduct = (item) => {
  return {
    type: "PLUS-PRODUCT",
    payload: item
  }
}

export const prevProduct = (item) => {
  return {
    type: "PREV-PRODUCT",
    payload: item
  }
}
