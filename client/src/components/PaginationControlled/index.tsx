import Pagination from '@mui/material/Pagination';
import styles from '../PaginationControlled/Pagination.module.scss'
import { useDispatch } from 'react-redux';
import { setPageCount } from '../../redux/slices/filterSlice';
import { ChangeEvent, FC, memo } from 'react';
import { PaginationProps } from '../../types/filter.type';

const PAGES = 3;

const PaginationControlled: FC<PaginationProps> = memo(({pageCount}) => {
  const dispatch = useDispatch();

  const handleChange = (_:ChangeEvent<unknown>, value: number) => {
    dispatch(setPageCount(value));
  };

  return (
      <Pagination className={styles.root} count={PAGES} page={pageCount} onChange={handleChange} />
  );
});

export default PaginationControlled;