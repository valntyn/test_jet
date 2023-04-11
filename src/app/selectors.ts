import { createSelector } from '@reduxjs/toolkit';

import { Words } from '../types/wordsType';

export const selectAllWords
 = (state: { words: { words: Words[] } }) => state.words.words;

export const selectQuery = (state: {
  appliedQuery: { appliedQuery: string };
}) => state.appliedQuery.appliedQuery;

export const selectWordsBySearch = createSelector(
  [selectAllWords, selectQuery],
  (allWords: Words[], query: string) => {
    if (query) {
      return allWords.filter(
        ({
          native, english,
        }) => native.toLowerCase().trim().includes(query)
          || english.toLowerCase().trim().includes(query),
      );
    }

    return allWords;
  },
);
