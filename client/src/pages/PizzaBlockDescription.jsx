import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductItem, selectProducts } from '../redux/slices/productSlice';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const PizzaBlockDescription = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const {item, status} = useSelector(selectProducts)

    useEffect(() => {
        dispatch(fetchProductItem(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div style={{display: 'flex', gap: 100, fontSize: '28px', textAlign: 'justify', height: 'fit-content'}}>
            {
                status === 'loading' ?
                    (
                      <Skeleton/>
                    )
                    : status === 'error' ?
                    'Что-то пошло не так. Не удалось отобразить пиццу.'
                    :<PizzaBlock {...item}/>
            }
            <p>{item.recipe}</p>

        </div>
    );
};

export default PizzaBlockDescription;