import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TypeCartItem, TypeCartProduct, TypeCartSlice } from '../../types/cart.type';
import { RootState } from '../store';

const initialState: TypeCartSlice = {
    items: [],
    totalPrice: 0,
}

const findProduct = (
  arr: TypeCartItem[], 
  id: string, 
  type: string, 
  size: number) : {index: number | undefined, findItem: TypeCartItem | undefined} => {
  let index;
  const findItem = arr.find(({product}, i) => {
    index = i;
    return (product.id === id && product.type === type && product.size === size); 
  })
  return {
    index,
    findItem
  }
}

const updateTotalPrice = (arr: TypeCartItem[]) => arr
  .reduce((start: number, {product, count} : TypeCartItem) => start + product.price*count, 0);


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<TypeCartItem>) {
      const {id, type, size} = action.payload.product;

      const {findItem} = findProduct(state.items, id, type, size);

      if (findItem) {
        findItem.count += 1;
      } else {
        state.items.push(action.payload);
      }
  
      state.totalPrice = updateTotalPrice(state.items);
    },
    removeProduct(state, action:PayloadAction<TypeCartProduct>) {
      const {id, type, size} = action.payload;
      const {index} = findProduct(state.items, id, type, size);
      if (index) {
        delete state.items[index];

      }
      state.items = state.items.filter(item => item && item);
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
      console.log(action.payload);

      const {id, type, size} = action.payload.product;
      const {count} = action.payload;
      const {findItem, index} = findProduct(state.items, id, type, size);
      if (count > 1 ) {
        findItem && (findItem.count -= 1);
      } else {
        if (index) {
          delete state.items[index];
        }
        state.items = state.items.filter(item => item && item)
      }
      state.totalPrice = updateTotalPrice(state.items);
    }
  },
})

export const selectCart = (state: RootState) => state.cart;


export const { addProduct, removeProduct, clearProduct, plusProduct, minusProduct } = cartSlice.actions;

export default cartSlice.reducer;
