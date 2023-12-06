import { useState } from 'react';
import '../scss/app.scss';

function Categories() {
    const [active, setActive]=useState(0);
    const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые'];
    
    return (
    <div className="categories">
        <ul>
          {categories.map((item, i)=>{
            return (
              <li key={i} 
                onClick={()=>setActive(i)}
                className={active === i ? "active" : ""}
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