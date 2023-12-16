import React from 'react';
import plusImg from '../img/plus.svg'
import minusImg from '../img/minus.svg'
import { removeProduct, plusProduct, minusProduct } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({count, product}) => {
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
            <img src={minusImg} alt="minus" />
          </div>
          <b>{count}</b>
          <div onClick={()=>dispatch(plusProduct(product))} 
               className="button button--outline button--circle cart__item-count-plus">
            <img src={plusImg} alt="plus" />
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

export default CartItem;