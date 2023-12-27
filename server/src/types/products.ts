export interface IProduct {
    id: number,
    imageUrl: string,
    title: string,
    price: number,
    rating: number,
    recipe: string,
    types: number[],
    sizes: number[],
    typeId: number,
    categoryId: number,
    sizeId: number
}