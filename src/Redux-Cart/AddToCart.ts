import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FoodItem {
  name: string;
  price: number;
}

export interface CartState {
  foods: FoodItem[];
}

const initialState: CartState = {
  foods: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addFoodToCart(state, action: PayloadAction<FoodItem>) {
      state.foods.push(action.payload);
    },
  },
});

export const { addFoodToCart } = cartSlice.actions;
export default cartSlice.reducer;
