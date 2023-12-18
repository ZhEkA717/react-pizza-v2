export interface TypeProductsSlice {
    items: TypePizza[],
    item: TypePizza,
    status: TypeStatus,
}

type TypeStatus = 'loading' | 'success' | 'error';

export type TypePizza = {
    id: string,
    imageUrl: string,
    title: string,
    types: number[],
    sizes: number[],
    price: number,
    category: number,
    rating: number,
    recipe: string
}