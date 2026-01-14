import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0
  },
  reducers: {
    addToCart(state, action) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (!item) {
        state.items.push({ ...action.payload, quantity: 1 });
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
      state.totalQuantity = state.items.reduce((sum, i) => sum + i.quantity, 0);
    },
    increaseQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      item.quantity++;
      state.totalQuantity++;
    },
    decreaseQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
      }
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
