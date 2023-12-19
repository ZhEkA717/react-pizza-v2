import { FC } from 'react';
import { cartImg } from '../../img/';
import styles from './EmptyCart.module.scss';

export const EmptyCart: FC = () => {
    return (
        <div className={styles.root}>
            <img src={cartImg} alt="cart-icon" />
            <span>Ваша Корзина В Данный Момент Пуста!</span>
            <p>Перед оформлением заказа вы должны добавить продукты в корзину.</p>
            <p>Вы можете найти много интересных продуктов на "Главной" странице.</p>
        </div>
    );
};