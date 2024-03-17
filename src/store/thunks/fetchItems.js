import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('catalog/fetchItems', async () => {
  const res = await axios.get(
    'https://lxndrbukin.github.io/apis/shoppingly_catalog.json'
  );
  return res.data;
});
