import './SearchBar.scss';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';

import { useAppDispatch } from '../../app/hooks';
import { ReactComponent as Search } from '../../assets/search 1.svg';
import { setQuery } from '../../features/querySlice/querySlice';
import { getSearchWith } from '../../helplers/searchHelpers';

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const query = searchParams.get('query') || '';
  const [search, setSearch] = useState(query);

  const debouncedOnChange = useDebouncedCallback((event) => {
    dispatch(setQuery(event.target.value));
  }, 500);

  const handleQuery
    = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);

      setSearchParams(
        getSearchWith(searchParams, {
          query: event.target.value || null,
          page: '1',
        }),
      );
    };

  useEffect(() => {
    dispatch(setQuery(query));
  }, []);

  return (
    <label className="searchbar" htmlFor="input">
      <Search className="searchbar__img" />
      <input
        id="input"
        type="text"
        value={search}
        placeholder="Search"
        className="searchbar__input"
        onChange={(e) => {
          handleQuery(e);
          debouncedOnChange(e);
        }}
        autoComplete="off"
      />
    </label>
  );
};
