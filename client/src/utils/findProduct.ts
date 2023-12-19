import { TypeCartItem } from "../redux/cart/type";

const findProduct = (
  arr: TypeCartItem[],
  id: string,
  type: string,
  size: number
): { index: number | undefined; findItem: TypeCartItem | undefined } => {
  let index;
  const findItem = arr.find(({ product }, i) => {
    index = i;
    return product.id === id && product.type === type && product.size === size;
  });
  return {
    index,
    findItem,
  };
};

export default findProduct;
