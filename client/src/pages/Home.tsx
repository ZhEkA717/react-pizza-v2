/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import Categories from '../components/Categories';
import Sort, { typesSort } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PaginationControlled from '../components/PaginationControlled';
import { selectFilter, setFilters } from '../redux/slices/filterSlice';
import { fetchProduct, selectProducts } from '../redux/slices/productSlice';
import { TypeProductsSlice } from '../types/pizza.type';
import { AppDispatch } from '../redux/store';

const LIMIT = 4;

const Home = () => {
    const {searchValue, categoryId, sortObj, pageCount} = useSelector(selectFilter);
    const dispatch = useDispatch<AppDispatch>();
    const isSearch = useRef(false);
    const isMounted = useRef(false);

    const { items: pizzaItems, status }:TypeProductsSlice = useSelector(selectProducts); 

    const navigate = useNavigate();

    const fetchPizzas = () => {
      const param = {
        category: categoryId > 0 ? categoryId : "",
        sortBy: sortObj?.sortProperty,
        order: 'asc',
        page: pageCount,
        limit: LIMIT, 
      }
      dispatch(fetchProduct(param));
    }

    useEffect(()=>{
      const queryString = window.location.search;
      if (queryString) {
        const params = qs
          .parse(queryString.substring(1));

        const sortObj  = typesSort
          .find(item => item.sortProperty === params.sortProperty);

        const resObj = {
          categoryId: params.categoryId as string,
          sortProperty: params.sortProperty as string,
          pageCount: params.pageCount as string,
          sortObj,
        }
        dispatch(setFilters(resObj));

        isSearch.current = true;
      }
    }, [dispatch]);

    useEffect(()=>{   
      if (!isSearch.current) {
        fetchPizzas();
      }
      isSearch.current = false;
    },[categoryId, sortObj, pageCount, searchValue]);

    useEffect(()=> {
      if (isMounted.current) {
        const queryString = qs.stringify({
          sortProperty: sortObj?.sortProperty,
          categoryId,
          pageCount,
        });
        navigate(`?${queryString}`);
      }
      isMounted.current = true;
    },[categoryId, sortObj, pageCount, navigate]);

  return (
    <>
      <div className="content__top">
          <Categories />
          <Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          status === 'loading' ?
          (
            new Array(LIMIT).fill(1).map((_, i) => <Skeleton key={i}/>)
          ): status === 'error' ?
          'Что-то пошло не так. Не удалось отобразить пиццы.':
          (
            pizzaItems
              ?.filter(item => item.title.toLowerCase().includes(searchValue))
              ?.map(item=>{
              return <PizzaBlock key={item.id} {...item} />
            })
          )
        }
      </div>
      <PaginationControlled />
    </>
  );
};

export default Home;