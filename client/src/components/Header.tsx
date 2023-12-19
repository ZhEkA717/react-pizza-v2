import '../scss/app.scss';
import logoPizza from '../img/pizza-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import SearchPizza from './Search';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/cart/selectors';
import cartIconImg from "../img/cart-icon.svg";
import getCountPizza from '../utils/getCountPizza';

function Header() {
  const {totalPrice, items} = useSelector(selectCart);
  const {pathname} = useLocation();
    return (
      <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logoPizza} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <SearchPizza/>
        <div className="header__cart">
          {pathname !== '/cart' && 
          <Link to="/cart" className="button button--cart">
          <span>{totalPrice} ₽</span>
          <div className="button__delimiter"></div>
          <img src={cartIconImg} alt="cart-icon" />
          <span>{getCountPizza(items)}</span>
        </Link>}
        </div>
      </div>
    </div>
    )
}
  
export default Header;