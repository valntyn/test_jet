/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type ScoreState = {
  score: number[];
};

const initialState: ScoreState = {
  score: [],
};

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    addResultToList: (state, action) => {
      state.score.push(action.payload);
    },
  },
});

export const { addResultToList } = scoreSlice.actions;

export default scoreSlice.reducer;
