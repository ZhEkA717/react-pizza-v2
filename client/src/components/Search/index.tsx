import styles from './Search.module.scss';
import debounce from 'lodash.debounce';
import searchIcon from '../../img/search-icon.svg';
import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/filter/slice';

const Search = () => {
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState('');

    const onClickClear = () => {
        setValue('');
        dispatch(setSearchValue(''));
        const el = inputRef.current as HTMLInputElement;
        el.focus();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateSearchValue = useCallback(
        debounce((value: string)=>{
            dispatch(setSearchValue(value));
        },500),
        [],
    );

    const onChangeInput = (event: ChangeEvent) => {
        const el = event.target as HTMLInputElement;
        setValue(el.value);
        updateSearchValue(el.value);
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