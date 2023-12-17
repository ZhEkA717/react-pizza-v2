import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import env from 'react-dotenv';

export const fetchProduct = createAsyncThunk(
  'product/fetchProductSatus',
  async (params) => {
    const {data} = await axios.get(env.API_URL, {params})
    return data;
  }
)

const initialState = {
    items: [],
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
    builder.addCase('product/fetchProductSatus/pending', (state) => {
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
  },
})

export const selectProducts = state => state.products;
export const { setProducts } = productSlice.actions;

export default productSlice.reducer;