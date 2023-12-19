import { ChangeEvent, FC, memo } from 'react';
import { useDispatch } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import styles from '../PaginationControlled/Pagination.module.scss'

import { setPageCount, PaginationProps } from '../../redux';

const PAGES = 3;

const PaginationControlled: FC<PaginationProps> = memo(({pageCount}) => {
  const dispatch = useDispatch();

  const handleChange = (_:ChangeEvent<unknown>, value: number) => {
    dispatch(setPageCount(value));
  };

  return (
      <Pagination size="large" className={styles.root} count={PAGES} page={pageCount} onChange={handleChange} />
  );
});

export default PaginationControlled;