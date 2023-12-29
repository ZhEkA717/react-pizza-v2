import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TypeUserSlice } from './type';
import { fetchAuth } from './asyncAction';

const initialState: TypeUserSlice = {
  isAuth: false,
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setIsAuth(state, action){
      state.isAuth = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state) => {
      state.isAuth = false;
    });
    builder.addCase(fetchAuth.fulfilled, (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.isAuth = !!action.payload;
    });
    builder.addCase(fetchAuth.rejected, (state) => {
      state.isAuth = false;
    });
  }
})

export const { setIsAuth } = userSlice.actions;

export default userSlice.reducer;