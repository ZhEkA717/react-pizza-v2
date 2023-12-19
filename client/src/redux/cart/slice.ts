import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TypeCartItem, TypeCartProduct, TypeCartSlice } from './type';
import updateTotalPrice from '../../utils/updateTotalPrice';
import findProduct from '../../utils/findProduct';
import deleteItemFromCart from '../../utils/deleteItemFromCart';

const initialState: TypeCartSlice = {
    items: [],
    totalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<TypeCartItem>) {
      const {id, type, size} = action.payload.product;
      const {findItem} = findProduct(state.items, id, type, size);

      findItem ? 
        findItem.count += 1 : 
        state.items.push(action.payload);
      state.totalPrice = updateTotalPrice(state.items);
    },
    removeProduct(state, action:PayloadAction<TypeCartProduct>) {
      const {id, type, size} = action.payload;
      const {index} = findProduct(state.items, id, type, size);

      state.items = deleteItemFromCart(index, state.items)
      state.totalPrice = updateTotalPrice(state.items);
    },
    clearProduct(state) {
      state.items = [];
      state.totalPrice = updateTotalPrice(state.items);
    },
    plusProduct(state, action:PayloadAction<TypeCartProduct>) {
      const {id, type, size} = action.payload;
      const {findItem} = findProduct(state.items, id, type, size);
      findItem && (findItem.count += 1);
      state.totalPrice = updateTotalPrice(state.items);
    },
    minusProduct(state, action:PayloadAction<TypeCartItem>) {
      const {product:{id, type, size}, count} = action.payload;
      const {findItem, index} = findProduct(state.items, id, type, size);
  
      count > 1 ? 
        findItem && (findItem.count -= 1) : 
        state.items = deleteItemFromCart(index, state.items);
    
      state.totalPrice = updateTotalPrice(state.items);
    }
  },
})

export const { addProduct, removeProduct, clearProduct, plusProduct, minusProduct } = cartSlice.actions;

export default cartSlice.reducer;
