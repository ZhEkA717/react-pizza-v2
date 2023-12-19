export { default as cartSlice } from './cart/slice';
export { default as filterSlice } from './filter/slice';
export {default as productSlice} from './product/slice';

export { addProduct, removeProduct, clearProduct, plusProduct, minusProduct } from './cart/slice';
export { setSearchValue, setCategoryId, setSort, setPageCount, setFilters } from './filter/slice';

export { selectCart } from './cart/selectors';
export { selectFilter } from './filter/selectors';
export { selectProducts} from './product/selectors';


export type { TypeCartSlice, TypeCartItem, TypeCartProduct } from './cart/type';
export type {TypeFilterSlice, TypeSortObj, TypeFilters, CategoriesProps, SortProps, PaginationProps} from './filter/type';
export type { TypeProductsSlice, TypePizza, TypeFetchParams} from './product/type';
export type { AppDispatch, RootState } from './store';

export { fetchProduct, fetchProductItem } from './product/asyncAction';
