import { TypeCartItem } from "../redux/cart/type";

const deleteItemFromCart = (index: number | undefined, arr: TypeCartItem[]) => {
    if (index || index === 0) {
        delete arr[index];
      }
      return arr.filter(item => item && item)
}

export default deleteItemFromCart;