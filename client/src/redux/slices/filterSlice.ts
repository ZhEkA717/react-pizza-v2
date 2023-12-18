import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { TypeFilterSlice, TypeFilters, TypeSortObj } from '../../types/filter.type';

const initialState: TypeFilterSlice = {
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
    setFilters: (state, action:PayloadAction<TypeFilters>) => {
      console.log(action.payload);
      const {categoryId, pageCount, sortObj} = action.payload;
      state.categoryId = Number(categoryId);
      state.pageCount = Number(pageCount);
      state.sortObj = sortObj;
    }
  },
})

export const selectFilter = (state: RootState) => state.filter;

export const { setSearchValue, setCategoryId, setSort, setPageCount, setFilters } = filterSlice.actions;

export default filterSlice.reducer;