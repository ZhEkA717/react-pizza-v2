import styles from './Search.module.scss';
import debounce from 'lodash.debounce';
import searchIcon from '../../img/search-icon.svg';
import { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

const Search = () => {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const [value, setValue] = useState('');

    const onClickClear = () => {
        setValue('');
        dispatch(setSearchValue(''));
        inputRef.current.focus();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateSearchValue = useCallback(
        debounce((value)=>{
            dispatch(setSearchValue(value));
        },500),
        [],
    );

    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }

    return (
        <div className={styles.root}>
            <img className={styles.icon} src={searchIcon} alt="search" />
            <input value={value} 
                  ref={inputRef}
                  className={styles.input} 
                  onChange={(event) => onChangeInput(event)}
                  type="text" 
                  placeholder='Поиск пиццы...' />
            {value && 
            <div className={styles.clear}
                  onClick={onClickClear}    
            >X</div>}
        </div>
    );
};

export default Search;