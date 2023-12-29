import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import '../scss/app.scss';
import { pizzaLogoIcon, cartIcon } from '../img';

import { Search } from '../components';
import { selectCart } from '../redux';
import { getCountPizza } from '../utils';

export const Header = () => {
  const {totalPrice, items} = useSelector(selectCart);
  const {pathname} = useLocation();
    return (
      <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={pizzaLogoIcon} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search/> 
        <div className="header__cart">
          {pathname !== '/cart' && 
          <Link to="/cart" className="button button--cart">
          <span>{totalPrice} ₽</span>
          <div className="button__delimiter"></div>
          <img src={cartIcon} alt="cart-icon" />
          <span>{getCountPizza(items)}</span>
        </Link>}
        </div>
      </div>
    </div>
    )
}