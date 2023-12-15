import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../redux/slices/filterSlice';
import cartReducer from '../redux/slices/cartSlice';
import productReducer from '../redux/slices/productSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    products: productReducer,
  },
})