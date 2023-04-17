import { createSlice } from '@reduxjs/toolkit';
import { fetchItems } from '../thunks/fetchItems';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default catalogSlice.reducer;
