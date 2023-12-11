import React from 'react';
import { useEffect, useState } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
    const [pizzaItems, setPizzaItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    const [activeSort, setActiveSort] = useState({
      name: "Популярности", sort: 'rating'
    });
    const [directionSort, setDirectionSort] = useState(true);
    const [activeCategory, setActiveCategory]=useState(0);


    useEffect(()=>{
      const category = activeCategory > 0 ? `category=${activeCategory}` : `category=`;
      const sort = `sortBy=${activeSort.sort}`;
      const order = `order=${directionSort ? 'asc' : 'desc'}`;
      const url = `https://6570b79e09586eff6641d8d9.mockapi.io/items?${category}&${sort}&${order}`;
      setIsLoading(true);
      fetch(url)
        .then(res => res.json())
        .then(res => {
          setPizzaItems(res);
        }).finally(()=>{setIsLoading(false);})
    },[activeCategory, activeSort, directionSort])

    return (
        <>
            <div className="content__top">
                <Categories activeCategory={activeCategory}
                            onClickCategory={(id)=>setActiveCategory(id)}          
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
                  new Array(9).fill(1).map((item, i) => <Skeleton key={i}/>)
                ):
                (
                  pizzaItems.map(item=>{
                    return <PizzaBlock key={item.id} {...item}/>
                  })
                )
              }
          </div>
        </>
    );
};

export default Home;