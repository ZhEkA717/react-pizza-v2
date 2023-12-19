export interface TypeFilterSlice {
    searchValue: string,
    categoryId: number,
    pageCount: number,
    sortObj: TypeSortObj | undefined
}

export type TypeSortObj = {
    name: string,
    sortProperty: string
}

export type TypeFilters = {
    categoryId: string,
    pageCount: string,
    sortProperty: string,
    sortObj: TypeSortObj | undefined
}

export type CategoriesProps = {
    categoryId: number
} 

export type SortProps = {
    sortObj: TypeSortObj | undefined,
}

export type PaginationProps = {
    pageCount: number
}