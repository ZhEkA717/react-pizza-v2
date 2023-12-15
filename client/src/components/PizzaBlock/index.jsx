import { useState } from 'react';
import '../../scss/app.scss';
import plus from '../../img/plus.svg';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/slices/cartSlice';

const PizzaBlock = ({id,title, imageUrl, types, sizes, price, items}) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  
  const typesPizza = ['тонкое', 'традиционное'];

  const [activeType, setActiveType] = useState(0)
  const [activeSize, setActiveSize] = useState(0)

  const updateCount = () => {
    setCount(prev => prev + 1)
    const count = 1;
    const product = {
      id,
      title, imageUrl,
      price,
      type: typesPizza[activeType],
      size: sizes[activeSize]
    }
    dispatch(addProduct({count,product}));
  }

    return (
        <div className="pizza-block">
  <img
    className="pizza-block__image"
    src={imageUrl}
    alt="Pizza"
  />
  <h4 className="pizza-block__title">{title}</h4>
  <div className="pizza-block__selector">
    <ul>
      {
        types.map((item,i, arr)=>{
          return (
            <li key={i}
                onClick={()=>setActiveType(item)}
                className={activeType === item || arr.length === 1  ? "active" : ""}
            > 
              {typesPizza[item]}
            </li>
          )
        })
      }
    </ul>
    <ul>      
      {sizes.map((item, i)=>{
        return (
          <li key={i} 
              onClick={()=>setActiveSize(i)}
              className={activeSize === i ? "active" : ""}>{item} см.
          </li>
        )
      })}
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от {price} ₽</div>
    <button onClick={updateCount} className="button button--outline button--add">
      <img src={plus} alt="plus" />
      <span>Добавить</span>
      <i>{count}</i>
    </button>
  </div>
</div>
    );
};

export default PizzaBlock;