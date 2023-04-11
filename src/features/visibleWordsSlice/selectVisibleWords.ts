import { RootState } from '../../app/store';

export const selectedWords
  = (state: RootState) => state.visibleWords.visibleWords;
