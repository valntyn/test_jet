import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import appliedQueryReducer from '../features/querySlice/querySlice';
import storeReducer from '../features/scoreSlice/scoreSlice';
import visibleWordsReducer
  from '../features/visibleWordsSlice/visibleWordsSlice';
import wordsReducer from '../features/wordsSlice/wordsSlice';

export const store = configureStore({
  reducer: {
    words: wordsReducer,
    visibleWords: visibleWordsReducer,
    score: storeReducer,
    appliedQuery: appliedQueryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
/* eslint-enable @typescript-eslint/indent */
