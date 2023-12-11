import { useState } from 'react';
import arrowTop from '../img/arrow-top.svg';
import arrowDown from '../img/arrow-down.svg';

const Sort = ({activeSort, onClickSort, directionSort, setDirectionSort}) => {
  const typesSort = [
    {name: 'популярности', sort: 'rating'},
    {name: 'цене', sort: 'price'},
    {name: 'алфавиту', sort: 'title'}
  ];


  const [isOpen, setIsOpen] = useState(false);

  const updateActiveType = (i) => {
    onClickSort(i);
    setIsOpen(false);
  }

    return (
        <div className="sort">
        <div className="sort__label">
          <img onClick={()=>setDirectionSort(!directionSort)} src={directionSort ? arrowDown : arrowTop} alt="" />
          <b>Сортировка по:</b>
          <button disabled={isOpen} onClick={()=>setIsOpen(!isOpen)}>{activeSort.name}</button>
        </div>
        {
          isOpen &&
          (<div className="sort__popup">
              <ul>
                {typesSort.map((type, i) => {
                  return (
                    <li key={i}
                        onClick={()=>updateActiveType(type)}
                        className={type.sort === activeSort.sort ? "active" : ""}
                    >
                      {type.name}
                    </li>
                  )
                })}
              </ul>
            </div>)
        }
        
      </div>
    );
};

export default Sort;