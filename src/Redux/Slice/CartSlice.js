import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      const cartItem = state.cart.find((item) => item.id === action.payload);
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.cart.push({
          quantity: 1,
          id: action.payload,
        });
      }
    },
    removefromCart: (state, action) => {
      const cartItem = state.cart.find((item) => item.id === action.payload);
      if (cartItem) {
        cartItem.quantity -= 1;
        if (cartItem.quantity === 0) {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        const cartItem = state.cart.find((item) => item.id === id);
        if (cartItem) {
          cartItem.quantity = quantity;
        }
      },
  },
});

export default cartSlice.reducer;
export const { addtoCart, removefromCart, deleteCart, updateQuantity } = cartSlice.actions;