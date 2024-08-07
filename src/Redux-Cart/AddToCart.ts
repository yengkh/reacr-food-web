import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FoodItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
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
    removeFoodFromCart(state, action: PayloadAction<number>) {
      state.foods = state.foods.filter((food) => food.id !== action.payload);
    },

    changeFoodQumatity(state, action) {
      const { foodId, quantity } = action.payload;
      const indexFoodId = state.foods.findIndex((item) => item.id === foodId);
      if (quantity > 0) {
        state.foods[indexFoodId].quantity = quantity;
      } else {
        // delete state.foods[indexFoodId];
        state.foods = state.foods.filter((item) => item.id !== foodId);
      }
    },
    updateFoodQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const food = state.foods.find((food) => food.id === action.payload.id);
      if (food) {
        food.quantity += action.payload.quantity;
        if (food.quantity <= 0) {
          state.foods = state.foods.filter(
            (food) => food.id !== action.payload.id
          );
        }
      }
    },
  },
});

export const {
  addFoodToCart,
  removeFoodFromCart,
  updateFoodQuantity,
  changeFoodQumatity,
} = cartSlice.actions;
export default cartSlice.reducer;
