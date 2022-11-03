export const countProductPlus = (count) => {
  return {
    type: "PLUS",
    payload: fetch("http://localhost:3000/product/" + count)
      .then((response) => response.json())
      .then((data) => {
        return data;
      }),
  };
};