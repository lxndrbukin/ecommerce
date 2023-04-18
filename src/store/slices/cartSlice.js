import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      if (!state.items.some((item) => item.name === action.payload.name)) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedArray = state.items.map((item) => {
          if (item.name === action.payload.name) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        state.items = updatedArray;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addItem } = cartSlice.actions;
