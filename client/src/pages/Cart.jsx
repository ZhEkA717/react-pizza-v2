import React from 'react';
import CartItem from '../components/CartItem';
import removeImg from '../img/trash.svg'
import backImg from '../img/grey-arrow-left.svg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Cart = () => {
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const products = useSelector(state => state.cart.items);
    return (
        <div className="content">
        <div className="container container--cart">
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">Корзина</h2>
              <div className="cart__clear">
                <img src={removeImg} alt="remove" />
                <span>Очистить корзину</span>
              </div>
            </div>
            <div className="content__items content__items_cart">
                {
                  products.map((item, i) => <CartItem key={i} {...item}/>)
                }
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span> Всего пицц: <b>{products.reduce((start, {count}) => start + count, 0 )} шт.</b> </span>
                <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
              </div>
              <div className="cart__bottom-buttons">
                <Link to="/" className="button button--outline button--add go-back-btn">
                  <img src={backImg} alt="" />
                  <span>Вернуться назад</span>
                </Link>
                <div className="button pay-btn">
                  <span>Оплатить сейчас</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cart;