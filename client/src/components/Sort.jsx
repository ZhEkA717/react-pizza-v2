import { useState } from 'react';
import arrowTop from '../img/arrow-top.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';
const Sort = () => {
  const typesSort = [
    {name: 'популярности', sortProperty: 'rating'},
    {name: 'цене', sortProperty: 'price'},
    {name: 'алфавиту', sortProperty: 'title'}
  ];
  const sortObj = useSelector(state => state.filter.sortObj);
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
          <button disabled={isOpen} onClick={()=>setIsOpen(!isOpen)}>{sortObj.name}</button>
        </div>
        {
          isOpen &&
          (<div className="sort__popup">
              <ul>
                {typesSort.map((type, i) => {
                  return (
                    <li key={i}
                        onClick={()=>updateActiveType(type)}
                        className={type.sort === sortObj.sortProperty ? "active" : ""}
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