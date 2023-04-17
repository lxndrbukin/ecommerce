import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    sizes: [],
    categories: [],
  },
  reducers: {
    setSizes: (state, action) => {
      if (state.sizes.includes(action.payload)) {
        const filteredSizes = state.sizes.filter((size) => {
          return size !== action.payload;
        });
        state.sizes = filteredSizes;
      } else {
        state.sizes.push(action.payload);
      }
    },
    setCategories: (state, action) => {
      if (state.categories.includes(action.payload)) {
        const filteredCategories = state.categories.filter((category) => {
          return category !== action.payload;
        });
        state.categories = filteredCategories;
      } else {
        state.categories.push(action.payload);
      }
    },
  },
});

export default filterSlice.reducer;
export const { setCategories, setSizes } = filterSlice.actions;
