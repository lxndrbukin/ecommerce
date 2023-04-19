import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
  },
  reducers: {
    addItem: (state, action) => {
      if (
        state.items.some((item) => item.name === action.payload.name) &&
        state.items.some((item) => item.size === action.payload.size)
      ) {
        const updatedList = state.items.map((item) => {
          if (
            item.name === action.payload.name &&
            item.size === action.payload.size
          ) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
        localStorage.setItem('cartItems', JSON.stringify(updatedList));
        state.items = updatedList;
      } else if (
        state.items.some((item) => item.name === action.payload.name) &&
        !state.items.some((item) => item.size === action.payload.size)
      ) {
        state.items.push({ ...action.payload, quantity: 1 });
        localStorage.setItem('cartItems', JSON.stringify(state.items));
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        localStorage.setItem('cartItems', JSON.stringify(state.items));
      }
    },
    removeItem: (state, action) => {
      const updatedList = state.items.filter(
        (item) =>
          item.name !== action.payload.name && item.size !== action.payload.size
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedList));
      state.items = updatedList;
    },
    increment: (state, action) => {
      const updatedList = state.items.map((item) => {
        if (item.name === action.payload.name) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      localStorage.setItem('cartItems', JSON.stringify(updatedList));
      state.items = updatedList;
    },
    decrement: (state, action) => {
      const updatedList = state.items.map((item) => {
        if (item.name === action.payload.name && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      });
      localStorage.setItem('cartItems', JSON.stringify(updatedList));
      state.items = updatedList;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increment, decrement } = cartSlice.actions;
