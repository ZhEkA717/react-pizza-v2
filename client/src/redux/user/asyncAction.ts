import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../http/userApi";
import { TypeUser } from "../../http/type";

export const fetchAuth = createAsyncThunk<string, TypeUser>(
    'user/fetchAuth',
    async (params) => await login(params.email, params.password)
  )