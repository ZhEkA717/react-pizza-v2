import { FC, memo } from 'react';
import { useDispatch } from 'react-redux';
import '../scss/app.scss';

import { CategoriesProps, setCategoryId } from '../redux';

const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые'];

export const Categories:FC<CategoriesProps> = memo(({categoryId}) => {
  const dispatch = useDispatch();
  return (
  <div className="categories">
      <ul>
        {categories.map((item, i)=>{
          return (
            <li key={i} 
              onClick={() =>dispatch(setCategoryId(i)) }
              className={categoryId === i ? "active" : ""}
            >
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
});