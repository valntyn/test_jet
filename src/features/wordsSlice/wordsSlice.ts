/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import { words } from "../../variables/constant";
import { Words } from "../../types/wordsType";

type WordState = {
  words: Words[];
};

const initialState: WordState = {
  words,
};

export const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    toggleStatus: (state, action) => {
      const findItem = state.words.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.status = !findItem.status;
      }
    },
    addWordToList: (state, action) => {
      state.words.push(action.payload);
    },
  },
});

export const { toggleStatus, addWordToList } = wordsSlice.actions;

export default wordsSlice.reducer;
