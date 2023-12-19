import { TypeCartItem } from "../redux/cart/type"

const getCountPizza = (products: TypeCartItem[]) => {
    return products.reduce((start, {count}) => start + count, 0 )
}

export default getCountPizza;