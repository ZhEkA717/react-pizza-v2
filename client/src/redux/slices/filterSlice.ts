import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { TypeSortObj } from '../../@types/filter.type';

const initialState = {
  searchValue: '',
  categoryId: 0,
  pageCount: 1,
  sortObj: {
    name: 'популярности',
    sortProperty: 'rating',
  }
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action:PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCategoryId: (state, action:PayloadAction<number>) => {
        state.categoryId = action.payload;
    },
    setSort: (state, action:PayloadAction<TypeSortObj>) => {
      state.sortObj = action.payload;
    },
    setPageCount: (state, action:PayloadAction<number>) => {
      state.pageCount = action.payload;
    },
    setFilters: (state, action) => {
      state.categoryId = Number(action.payload.categoryId);
      state.pageCount = Number(action.payload.pageCount);
      state.sortObj = action.payload.sortObj;
    }
  },
})

export const selectFilter = (state: RootState) => state.filter;

export const { setSearchValue, setCategoryId, setSort, setPageCount, setFilters } = filterSlice.actions;

export default filterSlice.reducer;