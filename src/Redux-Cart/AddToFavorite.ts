import { AddToFavoriteType } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface FavoriteState {
  items: AddToFavoriteType[];
}

const initialState: FavoriteState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<AddToFavoriteType>) {
      state.items.push(action.payload);
    },
    updateFoodQuanityInFavorit(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const food = state.items.find((item) => item.id === action.payload.id);
      if (food) {
        food.quantity += action.payload.quantity;
      }
    },
    removeFoodFromFavorite(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addToFavorite,
  updateFoodQuanityInFavorit,
  removeFoodFromFavorite,
} = favoriteSlice.actions;
export default favoriteSlice.reducer;
