import { createAsyncThunk } from "@reduxjs/toolkit";
import { TypeFetchParams, TypePizza } from "./type";
import axios from "axios";
import env from "react-dotenv";

export const fetchProduct = createAsyncThunk<TypePizza[], TypeFetchParams>(
    'product/fetchProductStatus',
    async (params) => {
      const {data} = await axios.get<TypePizza[]>(env.API_URL, {params});
      return data;
    }
  )
  
export const fetchProductItem = createAsyncThunk<TypePizza, string | undefined>(
  'product/fetchProductItemStatus',
  async (id) => {
    const {data} = await axios.get<TypePizza>(env.API_URL + id,)
    return data;
  }
)