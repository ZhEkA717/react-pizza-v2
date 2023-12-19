import { useDispatch } from 'react-redux';
import { plusIcon, minusIcon } from '../img';

import { minusProduct, plusProduct, removeProduct, TypeCartItem } from '../redux';

export const CartItem = ({count, product}: TypeCartItem) => {
  const dispatch = useDispatch();
    return (
      <div className="cart__item">
        <div className="cart__item-img">
          <img
            className="pizza-block__image"
            src={product.imageUrl}
            alt="Pizza"
          />
        </div>
        <div className="cart__item-info">
          <h3>{product.title}</h3>
          <p>{product.type}, {product.size} см.</p>
        </div>
        <div className="cart__item-count">
          <div onClick={()=>dispatch(minusProduct({count, product}))} 
               className="button button--outline button--circle cart__item-count-minus">
            <img src={minusIcon} alt="minus" />
          </div>
          <b>{count}</b>
          <div onClick={()=>dispatch(plusProduct(product))} 
               className="button button--outline button--circle cart__item-count-plus">
            <img src={plusIcon} alt="plus" />
          </div>
        </div>
        <div className="cart__item-price">
          <b>{product.price * count} ₽</b>
        </div>
        <div onClick={()=>dispatch(removeProduct(product))} className="cart__item-remove">
          <div className="button button--outline button--circle">
            <div>☓</div>
          </div>
        </div>
      </div>
    );
};