import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
  cart: [],
};
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      state.item.push(action.payload);
    },
    cart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQuanity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuanity: 1 };
        state.cart.push(tempProduct);
      }
    },
    removecart: (state, action) => {
      const arrayRemove = state.cart.filter((r) => r.id !== action.payload.id);
      state.cart = arrayRemove;
    },
  },
});
