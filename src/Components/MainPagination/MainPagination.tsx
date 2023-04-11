import ReactPaginate from 'react-paginate';
import './MainPagination.scss';
import { useSearchParams } from 'react-router-dom';

import { getSearchWith } from '../../helplers/searchHelpers';
import { LabelLink } from '../LabelLink';

type PropTypes = {
  currentPage: number,
  totalPages: number,
};

export const MainPagination: React.FC<PropTypes> = ({
  currentPage,
  totalPages,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (newPage: number) => {
    setSearchParams(
      getSearchWith(searchParams, { page: `${newPage}` || null }),
    );
  };

  return (
    <div className="pagination">
      <p className="pagination__quantity">
        Showing data
      </p>
      <div className="pagination__box">
        <ReactPaginate
          containerClassName="pagination__position"
          previousLinkClassName="pagination__item"
          nextLinkClassName="pagination__item"
          pageLinkClassName="pagination__item"
          breakLinkClassName="pagination__item"
          activeLinkClassName="pagination__item--active"
          disabledClassName="pagination__item--disabled"
          marginPagesDisplayed={1}
          forcePage={+currentPage - 1}
          pageRangeDisplayed={3}
          previousLabel={
            <LabelLink currentPage={currentPage} value="<" />
          }
          nextLabel={
            <LabelLink currentPage={currentPage} value=">" />
          }
          breakLabel="..."
          onPageChange={(data) => handleClick(data.selected + 1)}
          pageCount={totalPages}
        />
      </div>
    </div>
  );
};
