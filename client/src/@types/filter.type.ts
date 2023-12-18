export interface TypeFilterSlice {
    searchValue: string,
    categoryId: number,
    pageCount: number,
    sortObj: TypeSortObj
}

export type TypeSortObj = {
    name: string,
    sortProperty: string
}


export type TypeFilters = {
    categoryId: string,
    pageCount: string,
    sortObj?: TypeSortObj,
    sortProperty: string,
}