import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    totalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      const {id, type, size} = action.payload.product;

      const findItem = state.items.find(({product}) => {
        return (product.id === id && product.type === type && product.size === size);
      })

      if (findItem) {
        findItem.count += 1;
      } else {
        state.items.push(action.payload);
      }
  

      state.totalPrice = state.items.reduce((start, item) => start + item.product.price*item.count, 0);
      console.log(id, type, size)
    },

  },
})

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
