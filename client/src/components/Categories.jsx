import '../scss/app.scss';

function Categories({activeCategory, onClickCategory}) {
    const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые'];
    
    return (
    <div className="categories">
        <ul>
          {categories.map((item, i)=>{
            return (
              <li key={i} 
                onClick={()=>onClickCategory(i)}
                className={activeCategory === i ? "active" : ""}
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