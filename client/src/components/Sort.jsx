import { useState } from 'react';
import arrowTop from '../img/arrow-top.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';
const Sort = () => {
  const typesSort = [
    {name: 'популярности', sort: 'rating'},
    {name: 'цене', sort: 'price'},
    {name: 'алфавиту', sort: 'title'}
  ];
  const sort = useSelector(state => state.filter.sort);
  const dispatch = useDispatch();


  const [isOpen, setIsOpen] = useState(false);

  const updateActiveType = (type) => {
    dispatch(setSort(type));
    setIsOpen(false);
  }

    return (
        <div className="sort">
        <div className="sort__label">
          <img src={arrowTop} alt="" />
          <b>Сортировка по:</b>
          <button disabled={isOpen} onClick={()=>setIsOpen(!isOpen)}>{sort.name}</button>
        </div>
        {
          isOpen &&
          (<div className="sort__popup">
              <ul>
                {typesSort.map((type, i) => {
                  return (
                    <li key={i}
                        onClick={()=>updateActiveType(type)}
                        className={type.sort === sort.sort ? "active" : ""}
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