import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import env from 'react-dotenv';
import { RootState } from '../store';
import { TypePizza, TypeProductsSlice } from '../../types/pizza.type';

export type TypeFetchParams = {
  category: number | string,
  sortBy: string | undefined,
  order: string,
  page: number,
  limit: number, 
}

export const fetchProduct = createAsyncThunk<TypePizza[], TypeFetchParams>(
  'product/fetchProductStatus',
  async (params) => {
    const {data} = await axios.get<TypePizza[]>(env.API_URL, {params});
    return data;
  }
)

export const fetchProductItem = createAsyncThunk<TypePizza, string>(
  'product/fetchProductItemStatus',
  async (id) => {
    const {data} = await axios.get<TypePizza>(env.API_URL + id,)
    return data;
  }
)

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

export const selectProducts = (state: RootState) => state.products;

export default productSlice.reducer;