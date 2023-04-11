/* eslint-disable import/order */

import { rows } from '../../variables/constant';
import { Button } from '../ButtonTable';
import './MainTable.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useCallback } from 'react';
import { toggleStatus } from '../../features/wordsSlice/wordsSlice';
import { Words } from '../../types/wordsType';
import { selectedWords }
  from '../../features/visibleWordsSlice/selectVisibleWords';

export const MainTable = () => {
  const dispatch = useAppDispatch();
  const visibleWords = useAppSelector(selectedWords);

  const changeStatus = useCallback(
    (person: Words) => {
      dispatch(toggleStatus(person));
    },
    [visibleWords],
  );

  return (
    <table className="table">
      <thead>
        <tr>
          {rows.map((title) => (
            <td className="table__head" key={title}>
              {title}
            </td>
          ))}
          <td className="table__head--centered table__head">Status</td>
          <div className="table__strip" />
        </tr>
      </thead>
      <tbody>
        {visibleWords.map((word) => {
          const {
            native, english, id, status,
          } = word;

          return (
            <tr key={id}>
              <th>{native}</th>
              <th>{english}</th>
              <th className="table__active-box">
                <Button word={word} onChange={changeStatus} status={status}>
                  {status ? 'Learnt' : 'To learn'}
                </Button>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
