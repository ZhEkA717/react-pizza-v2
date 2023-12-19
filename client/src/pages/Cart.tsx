import CartItem from '../components/CartItem';
import removeImg from '../img/trash.svg'
import backImg from '../img/grey-arrow-left.svg'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from '../components/EmptyCart';
import { selectCart } from '../redux/cart/selectors';
import { TypeCartSlice } from '../redux/cart/type';
import { clearProduct } from '../redux/cart/slice';
import getCountPizza from '../utils/getCountPizza';

const Cart = () => {
  const {totalPrice, items: products}: TypeCartSlice = useSelector(selectCart);
  const dispatch = useDispatch();
    return (
      <div className="content">
        <div className="container container--cart">
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">Корзина</h2>
              {products.length > 0 && <div onClick={() => dispatch(clearProduct())} className="cart__clear">
                <img src={removeImg} alt="remove" />
                <span>Очистить корзину</span>
              </div>}
            </div>
            <div className="content__items content__items_cart">
                {
                  products.length?
                  products.map((item, i) => <CartItem key={i} {...item}/>)
                  : <EmptyCart/>
                }
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span> Всего пицц: <b>{getCountPizza(products)} шт.</b> </span>
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