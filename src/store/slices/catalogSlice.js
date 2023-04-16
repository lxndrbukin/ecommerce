import { createSlice } from '@reduxjs/toolkit';
import catalog from '../../static/catalog.json';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    data: catalog.data,
  },
});

export default catalogSlice.reducer;
