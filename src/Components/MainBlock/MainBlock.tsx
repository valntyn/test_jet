import { MainPagination } from '../MainPagination';
import { MainTable } from '../MainTable';
import { SearchBar } from '../SearchBar';
import './MainBlock.scss';

type PropTypes = {
  currentPage: number,
  totalPages: number,
};

export const MainBlock: React.FC<PropTypes> = ({ currentPage, totalPages }) => {
  return (
    <div className="mainblock">
      <div className="mainblock__upper-box">
        <div className="mainblock__info-box">
          <h2 className="mainblock__title">List of Your Words</h2>
        </div>
        <SearchBar />
      </div>
      <MainTable />
      <MainPagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};
