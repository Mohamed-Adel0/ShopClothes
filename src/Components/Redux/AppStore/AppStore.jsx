import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "../CartSlice/CartSlice";
const AppStore = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
});

export default AppStore;