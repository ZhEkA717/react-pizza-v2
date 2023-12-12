import Pagination from '@mui/material/Pagination';
import styles from '../PaginationControlled/Pagination.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setPageCount } from '../../redux/slices/filterSlice';

const PAGES = 3;

function PaginationControlled() {
  const pageCount = useSelector(state => state.filter.pageCount);
  const dispatch = useDispatch();

  const handleChange = (_, value) => {
    dispatch(setPageCount(value));
  };

  return (
      <Pagination className={styles.root} count={PAGES} page={pageCount} onChange={handleChange} />
  );
}

export default PaginationControlled;