import React, { useState } from 'react';
import arrowTop from '../img/arrow-top.svg';

const Sort = () => {
  const typesSort = ['популярности','цене', 'алфавиту'];
  const [activeType, setActiveType] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const updateActiveType = (i) => {
    setActiveType(i);
    setIsOpen(false);
  }

    return (
        <div className="sort">
        <div className="sort__label">
          <img src={arrowTop} alt="" />
          <b>Сортировка по:</b>
          <button disabled={isOpen} onClick={()=>setIsOpen(!isOpen)}>{typesSort[activeType]}</button>
        </div>
        {
          isOpen &&
          (<div className="sort__popup">
              <ul>
                {typesSort.map((type, i) => {
                  return (
                    <li key={i}
                        onClick={()=>updateActiveType(i)}
                        className={activeType === i ? "active" : ""}
                    >
                      {type}
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