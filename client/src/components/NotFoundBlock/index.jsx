import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
    return (
        <>
            <h1 className={styles.root}>
                <span>😕</span>
                <br />
                Ничего не найдено
            </h1>
            <p className={styles.description}>
                К сожалению ничего не найдено
            </p>
        </>
    );
};

export default NotFoundBlock;