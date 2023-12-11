import Pagination from '@mui/material/Pagination';
import styles from '../PaginationControlled/Pagination.module.scss'

function PaginationControlled({currentPage, pages, changePage}) {
  const handleChange = (event, value) => {
    changePage(value);
  };

  return (
      <Pagination className={styles.root} count={pages} page={currentPage} onChange={handleChange} />
  );
}

export default PaginationControlled;