import { useDispatch } from 'react-redux';
import '../scss/app.scss';
import React from 'react';
import { CategoriesProps } from '../redux/filter/type';
import { setCategoryId } from '../redux/filter/slice';

const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые'];

const Categories:React.FC<CategoriesProps> = React.memo(({categoryId}) => {
  const dispatch = useDispatch();
  console.log('render');
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
  
export default Categories;