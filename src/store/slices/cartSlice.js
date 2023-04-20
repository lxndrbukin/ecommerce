import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

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
          if (item.size === action.payload.size) {
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
      } else {
        state.items.push({ ...action.payload, id: nanoid(), quantity: 1 });
        localStorage.setItem('cartItems', JSON.stringify(state.items));
      }
    },
    removeItem: (state, action) => {
      const updatedList = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedList));
      state.items = updatedList;
    },
    increment: (state, action) => {
      const updatedList = state.items.map((item) => {
        if (item.id === action.payload.id) {
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
        if (item.id === action.payload.id && item.quantity > 1) {
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
