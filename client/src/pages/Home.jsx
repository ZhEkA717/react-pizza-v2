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

const API_URL = 'https://6570b79e09586eff6641d8d9.mockapi.io/items?';

const Home = () => {
    const categoryId = useSelector(state => state.filter.categoryId);
    const sortObj = useSelector(state => state.filter.sortObj);
    
    const [pizzaItems, setPizzaItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);

    const {searchValue} = useContext(SearchContext);

    const limit = 4,
          pages = 3;

    // const countPages = (count, limit) => {
    //   const p = Math.floor(count/limit);
    //   const pRemainder = count - limit * p;
    //   return pRemainder ? p + 1 : p;
    // };


    useEffect(()=>{      
      setIsLoading(true);
 
      axios.get(API_URL, {
        params: {
          category: categoryId > 0 ? categoryId : "",
          sortBy: sortObj.sortProperty,
          order: 'asc',
          page: currentPage,
          limit, 
        }
      })    
        .then(({data}) => {
          setPizzaItems(data);
        }).finally(()=>{setIsLoading(false);})

    },[categoryId, sortObj, currentPage, searchValue])

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
            new Array(3).fill(1).map((item, i) => <Skeleton key={i}/>)
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
      <PaginationControlled page={currentPage} pages={pages} changePage={(value)=>setCurrentPage(value)}/>
    </>
  );
};

export default Home;