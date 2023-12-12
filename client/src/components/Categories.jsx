import { useDispatch, useSelector } from 'react-redux';
import '../scss/app.scss';
import { setCategoryId } from '../redux/slices/filterSlice';

function Categories() {
    const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые'];
    const categoryId = useSelector(state => state.filter.categoryId);
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
}
  
export default Categories;