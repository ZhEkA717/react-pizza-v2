import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filter/slice';
import cartReducer from './cart/slice';
import productReducer from './product/slice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    products: productReducer,
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;