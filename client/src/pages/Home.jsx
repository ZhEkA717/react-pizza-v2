import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PaginationControlled from '../components/PaginationControlled';
import { SearchContext } from '../App';

const API_URL = 'https://6570b79e09586eff6641d8d9.mockapi.io/items?';

const Home = () => {
    const categoryId = useSelector(state => state.filter.categoryId);
    const sort = useSelector(state => state.filter.sort);
    
    const [pizzaItems, setPizzaItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    // const [activeSort, setActiveSort] = useState({
    //   name: "Популярности", sort: 'rating'
    // });

    const [currentPage, setCurrentPage] = useState(1);

    const {searchValue} = useContext(SearchContext);

    const limit = 5;

    const [pages, setPages] = useState(1);

    const countPages = (count, limit) => {
      const p = Math.floor(count/limit);
      const pRemainder = count - limit * p;
      return pRemainder ? p + 1 : p;
    };


    useEffect(()=>{
      const category = categoryId > 0 ? categoryId : "";
      const sortBy = `sortBy=${sort.sort}`;
      const order = 'asc';
      
      fetch(API_URL + new URLSearchParams({
        category,
        sortBy,
      }))
        .then(res => res.json())
        .then(res => {
          setPages(countPages(res.length, limit));
        });


      setIsLoading(true);
      fetch(API_URL + new URLSearchParams({
        category,
        sortBy,
        order,
        page: currentPage,
        limit, 
      }))
        .then(res => res.json())
        .then(res => {
          setPizzaItems(res);
        }).finally(()=>{setIsLoading(false);})
    },[categoryId, sort, currentPage])

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
          {
            pages !== 1 && 
            <PaginationControlled page={currentPage} pages={pages} changePage={(value)=>setCurrentPage(value)}/>
          }
        </>
    );
};

export default Home;