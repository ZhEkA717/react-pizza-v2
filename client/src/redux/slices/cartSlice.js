import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    totalPrice: 0,
}

const findProduct = (arr, id, type, size) => {
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

const updateTotalPrice = (arr) => arr
  .reduce((start, item) => start + item.product.price*item.count, 0);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      const {id, type, size} = action.payload.product;

      const {findItem} = findProduct(state.items, id, type, size);

      if (findItem) {
        findItem.count += 1;
      } else {
        state.items.push(action.payload);
      }
  
      state.totalPrice = updateTotalPrice(state.items);
    },
    removeProduct(state, action) {
      const {id, type, size} = action.payload;
      const {index} = findProduct(state.items, id, type, size);
      delete state.items[index];
      state.items = state.items.filter(item => item && item);
      state.totalPrice = updateTotalPrice(state.items);
    },
    clearProduct(state) {
      state.items = [];
      state.totalPrice = updateTotalPrice(state.items);
    },
    plusProduct(state, action) {
      const {id, type, size} = action.payload;
      const {findItem} = findProduct(state.items, id, type, size);
      findItem && (findItem.count += 1);
      state.totalPrice = updateTotalPrice(state.items);
    },
    minusProduct(state, action) {
      const {id, type, size} = action.payload.product;
      const {count} = action.payload;
      const {findItem, index} = findProduct(state.items, id, type, size);
      if (count > 1 ) {
        findItem && (findItem.count -= 1);
      } else {
        delete state.items[index];
        state.items = state.items.filter(item => item && item)
      }
      state.totalPrice = updateTotalPrice(state.items);
    }
  },
})

export const { addProduct, removeProduct, clearProduct, plusProduct, minusProduct } = cartSlice.actions;

export default cartSlice.reducer;
