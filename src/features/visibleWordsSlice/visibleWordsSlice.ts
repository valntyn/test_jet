/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Words } from '../../types/wordsType';

type VisibleState = {
  visibleWords: Words[];
};

const initialState: VisibleState = {
  visibleWords: [],
};

export const visibleWordsSlice = createSlice({
  name: 'visibleWords',
  initialState,
  reducers: {
    setVisibleWords: (state, action: PayloadAction<Words[]>) => {
      state.visibleWords = action.payload;
    },
  },
});

export const {
  setVisibleWords,
} = visibleWordsSlice.actions;

export default visibleWordsSlice.reducer;
