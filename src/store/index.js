import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './slices/catalogSlice';
import filterReducer from './slices/filterSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});

export * from './slices/filterSlice';
export * from './slices/cartSlice';
export * from './thunks/fetchItems';
