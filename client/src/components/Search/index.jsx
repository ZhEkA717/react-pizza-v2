import styles from './Search.module.scss';
import searchIcon from '../../img/search-icon.svg';

const Search = () => {
    return (
        <div className={styles.root}>
            <img className={styles.icon} src={searchIcon} alt="search" />
            <input className={styles.input} type="text" placeholder='Поиск пиццы..' />
        </div>
    );
};

export default Search;