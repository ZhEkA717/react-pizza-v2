/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useRef } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import env from "react-dotenv";
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import Categories from '../components/Categories';
import Sort, { typesSort } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PaginationControlled from '../components/PaginationControlled';
import { setFilters } from '../redux/slices/filterSlice';
import { SearchContext } from '../App';

const LIMIT = 4;

const Home = () => {
    const categoryId = useSelector(state => state.filter.categoryId);
    const sortObj = useSelector(state => state.filter.sortObj);
    const pageCount = useSelector(state => state.filter.pageCount);
    const dispatch = useDispatch();
    const isSearch = useRef(false);
    const isMounted = useRef(false);

    const [pizzaItems, setPizzaItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const {searchValue} = useContext(SearchContext);

    const navigate = useNavigate();

    const fetchPizzas = () => {
      setIsLoading(true);
      axios.get(env.API_URL, {
        params: {
          category: categoryId > 0 ? categoryId : "",
          sortBy: sortObj.sortProperty,
          order: 'asc',
          page: pageCount,
          limit: LIMIT, 
        }
      })    
        .then(({data}) => {
          setPizzaItems(data);
        }).finally(()=>{setIsLoading(false);})
    }

    useEffect(()=>{
      const queryString = window.location.search;
      if (queryString) {
        const params = qs
          .parse(queryString.substring(1));
        const sortObj = typesSort
          .find(item => item.sortProperty === params.sortProperty);
        
        dispatch(setFilters({
          ...params,
          sortObj,
        }));
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
          sortProperty: sortObj.sortProperty,
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
          isLoading ?
          (
            new Array(6).fill(1).map((_, i) => <Skeleton key={i}/>)
          ):
          (
            pizzaItems
              .filter(item => item.title.toLowerCase().includes(searchValue))
              .map(item=>{
              return <PizzaBlock key={item.id} items={pizzaItems} {...item} />
            })
          )
        }
      </div>
      <PaginationControlled />
    </>
  );
};

export default Home;