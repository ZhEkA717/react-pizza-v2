import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { AppDispatch, selectProducts, fetchProductItem} from '../../redux';
import { PizzaBlock, Skeleton } from '../../components';

import styles from './PizzaBlockDescription.module.scss'

const PizzaBlockDescription = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { item, status } = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProductItem(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={styles.root}
    >
      {status === "loading" ? (
        <Skeleton />
      ) : status === "error" ? (
        "Что-то пошло не так. Не удалось отобразить пиццу."
      ) : (
        <PizzaBlock {...item} />
      )}
      <p>{item.recipe}</p>
    </div>
  );
};

export default PizzaBlockDescription;
