import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypePizza, TypeProductsSlice } from './type';
import { fetchProduct, fetchProductItem } from './asyncAction';

const initialState: TypeProductsSlice = {
    items: [],
    item: {} as TypePizza,
    status: 'loading',
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    })
    builder.addCase(fetchProduct.fulfilled, (state, action: PayloadAction<TypePizza[]>) => {
      state.items = action.payload;
      state.status = 'success';
    })
    builder.addCase(fetchProduct.rejected, (state) => {
      state.status = 'error';
      state.items = [];
    })

    builder.addCase(fetchProductItem.pending, (state) => {
      state.status = 'loading';
      state.item = initialState.item;
    })

    builder.addCase(fetchProductItem.fulfilled, (state, action: PayloadAction<TypePizza>) => {
      state.item = action.payload;
      state.status = 'success';
    })

    builder.addCase(fetchProductItem.rejected, (state) => {
      state.status = 'error';
      state.item =  initialState.item;
    })
  },
})

export default productSlice.reducer;