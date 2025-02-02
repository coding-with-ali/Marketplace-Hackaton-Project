"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  quantity: number;
  _id: string;
  name: string;
  price: number;
  image: string;
}

const cartSlice = createSlice({
  name: "Cart",
  initialState: [] as CartItem[],
  reducers: {
    add(state, action: PayloadAction<CartItem>) {
      const existingItem = state.find((item) => item._id === action.payload._id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    updateQuantity(state, action: PayloadAction<{ _id: string; quantity: number }>) {
      const item = state.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    remove(state, action: PayloadAction<string>) {
      return state.filter((item) => item._id !== action.payload);
    },
  },
});

export const { add, updateQuantity, remove } = cartSlice.actions;
export default cartSlice.reducer;

