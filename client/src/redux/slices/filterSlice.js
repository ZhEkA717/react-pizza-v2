import { createSlice } from '@reduxjs/toolkit'

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
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setCategoryId: (state, action) => {
        state.categoryId = action.payload;
    },
    setSort: (state, action) => {
      state.sortObj = action.payload;
    },
    setPageCount: (state, action) => {
      state.pageCount = action.payload;
    },
    setFilters: (state, action) => {
      state.categoryId = Number(action.payload.categoryId);
      state.pageCount = Number(action.payload.pageCount);
      state.sortObj = action.payload.sortObj;
    }
  },
})

export const selectFilter = state => state.filter;

export const { setSearchValue, setCategoryId, setSort, setPageCount, setFilters } = filterSlice.actions;

export default filterSlice.reducer;