import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import env from 'react-dotenv';

export const fetchProduct = createAsyncThunk(
  'product/fetchProductStatus',
  async (params) => {
    const {data} = await axios.get(env.API_URL, {params})
    return data;
  }
)

export const fetchProductItem = createAsyncThunk(
  'product/fetchProductItemStatus',
  async (id) => {
    const {data} = await axios.get(env.API_URL + id,)
    return data;
  }
)

const initialState = {
    items: [],
    item: {},
    status: 'loading',

}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action) {
       state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase('product/fetchProductStatus/pending', (state) => {
      state.status = 'loading';
      state.items = [];
    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    })
    builder.addCase(fetchProduct.rejected, (state) => {
      state.status = 'error';
      state.items = [];
    })

    builder.addCase(fetchProductItem.pending, (state) => {
      state.status = 'loading';
      state.item = {};
    })

    builder.addCase(fetchProductItem.fulfilled, (state, action) => {
      state.item = action.payload;
      state.status = 'success';
    })

    builder.addCase(fetchProductItem.rejected, (state) => {
      state.status = 'error';
      state.item =  {};
    })
  },
})

export const selectProducts = state => state.products;
export const { setProducts } = productSlice.actions;

export default productSlice.reducer;