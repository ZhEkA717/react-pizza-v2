import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';
import { useEffect, useState } from 'react';

function App() {
  const url = "https://6570b79e09586eff6641d8d9.mockapi.io/items";
  const [pizzaItems, setPizzaItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setPizzaItems(res);
      }).finally(()=>{setIsLoading(false);})
  },[])

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
              {
                isLoading ?
                (
                  new Array(6).fill(1).map((item, i) => <Skeleton key={i}/>)
                ):
                (
                  pizzaItems.map(item=>{
                    return <PizzaBlock key={item.id} {...item}/>
                  })
                )
              }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
