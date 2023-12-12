import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PaginationControlled from '../components/PaginationControlled';
import { SearchContext } from '../App';
import env from "react-dotenv";

const LIMIT = 4;

const Home = () => {
    const categoryId = useSelector(state => state.filter.categoryId);
    const sortObj = useSelector(state => state.filter.sortObj);
    const pageCount = useSelector(state => state.filter.pageCount);

    const [pizzaItems, setPizzaItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const {searchValue} = useContext(SearchContext);

    useEffect(()=>{      
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

    },[categoryId, sortObj, pageCount, searchValue])

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
              return <PizzaBlock key={item.id} {...item}/>
            })
          )
        }
      </div>
      <PaginationControlled />
    </>
  );
};

export default Home;