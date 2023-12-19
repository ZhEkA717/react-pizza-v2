import { TypeCartItem } from "../redux/cart/type";

const updateTotalPrice = (arr: TypeCartItem[]) => arr
  .reduce((start: number, {product, count} : TypeCartItem) => start + product.price*count, 0);

  export default updateTotalPrice;