import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PaginationControlled from '../components/PaginationControlled';
import { SearchContext } from '../App';
import { setCategoryId } from '../redux/slices/filterSlice';

const API_URL = 'https://6570b79e09586eff6641d8d9.mockapi.io/items?';

const Home = () => {
    const categoryId = useSelector(state => state.filter.categoryId)
    const dispatch = useDispatch();
    
    const [pizzaItems, setPizzaItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    const [activeSort, setActiveSort] = useState({
      name: "Популярности", sort: 'rating'
    });
    const [directionSort, setDirectionSort] = useState(true);
    // const [activeCategory, setActiveCategory]=useState(0);

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
      const sortBy = `sortBy=${activeSort.sort}`.sort;
      const order = directionSort ? 'asc' : 'desc';
      
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
    },[categoryId, activeSort, directionSort, currentPage])

    return (
        <>
            <div className="content__top">
                <Categories activeCategory={categoryId}
                            onClickCategory={(id)=>dispatch(setCategoryId(id))}          
                />
                <Sort activeSort={activeSort}
                      onClickSort={(id)=>setActiveSort(id)}
                      directionSort={directionSort}
                      setDirectionSort={(direction)=>setDirectionSort(direction)}                    
                />
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