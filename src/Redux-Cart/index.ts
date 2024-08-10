import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./AddToCart";
import favoriteReducer from "./AddToFavorite";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
