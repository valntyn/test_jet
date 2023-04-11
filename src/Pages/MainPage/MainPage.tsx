/* eslint-disable import/order */
import { useEffect, useState } from 'react';

import { ReactComponent as Menu } from '../../assets/menu-svg.svg';
import { MainBlock } from '../../Components/MainBlock';
import { MainWrapper } from '../../Components/MainWrapper';
import { MobMenu } from '../../Components/MobMenu/MobMenu';

import './MainPage.scss';
import { useSearchParams } from 'react-router-dom';
import {
  DEFAULT_ITEMS_PER_PAGE,
  DEFAULT_PAGE,
} from '../../variables/variables';
import { useSelector } from 'react-redux';
import { selectWordsBySearch } from '../../app/selectors';
import { setVisibleWords } from '../../features/visibleWordsSlice';
import { useAppDispatch } from '../../app/hooks';

export const Main = () => {
  const [isActive, setIsActive] = useState(false);

  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const words = useSelector(selectWordsBySearch);
  const quantity = words.length;

  const currentPage = +(searchParams.get('page') || DEFAULT_PAGE);
  const itemsPerPage = +(searchParams.get('perPage') || DEFAULT_ITEMS_PER_PAGE);
  const totalPages = Math.ceil(quantity / itemsPerPage);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  const currentItem = words.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    dispatch(setVisibleWords(currentItem));
  }, [quantity, currentPage, words, itemsPerPage]);

  return (
    <MainWrapper>
      <div className="main">
        <div className="main__box">
          <h3 className="main__title">Hello JetUp 👋🏼,</h3>
          <button
            type="button"
            className="main__button"
            onClick={() => setIsActive(!isActive)}
          >
            <Menu className="main__menu" />
          </button>
        </div>
        <MainBlock totalPages={totalPages} currentPage={currentPage} />
      </div>
      {isActive && <MobMenu isActive={isActive} setIsActive={setIsActive} />}
    </MainWrapper>
  );
};
