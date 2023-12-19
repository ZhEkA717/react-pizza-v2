export interface TypeCartSlice {
    totalPrice: number,
    items: TypeCartItem[]
  }
  
export type TypeCartItem = {
  count: number,
  product: TypeCartProduct
}

export type TypeCartProduct = {
  id: string,
  title: string,
  imageUrl: string,
  price: number,
  type: string,
  size: number
}