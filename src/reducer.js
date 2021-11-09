export const initialState = {
  basket: [],
};

export const actionTypes = {
  ADD_TO_BASKET: "AGREGADO AL CARRITO",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "AGREGADO AL CARRITO":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};
export default reducer;
