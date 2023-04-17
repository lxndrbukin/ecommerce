import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('catalog/fetchItems', async () => {
  const res = await axios.get(
    'https://lxndrbukin.github.io/ecommerce/catalog.json'
  );
  return res.data;
});
