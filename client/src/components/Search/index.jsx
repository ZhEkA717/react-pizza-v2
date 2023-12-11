import styles from './Search.module.scss';
import searchIcon from '../../img/search-icon.svg';
import { useContext } from 'react';
import { SearchContext } from '../../App';

const Search = () => {
    const {searchValue, setSearchValue } = useContext(SearchContext)
    return (
        <div className={styles.root}>
            <img className={styles.icon} src={searchIcon} alt="search" />
            <input value={searchValue} 
                  className={styles.input} 
                  onChange={(event) => setSearchValue(event.target.value)}
                  type="text" 
                  placeholder='Поиск пиццы..' />
        </div>
    );
};

export default Search;