import { TestMode, TimeOptions, WordsOptions } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  isStarted: boolean;
  mode: TestMode;
  wordsCount?: WordsOptions;
  timeLimit?: TimeOptions;
}

const initialState: CounterState = {
  isStarted: false,
  mode: TestMode.WORDS,
  wordsCount: 25,
  timeLimit: 15,
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<TestMode>) => {
      state.mode = action.payload;
    },
    setWordsLimit: (state, action: PayloadAction<WordsOptions>) => {
      if (state.mode === TestMode.WORDS) {
        state.wordsCount = action.payload;
      }
    },
    setTimeLimit: (state, action: PayloadAction<TimeOptions>) => {
      if (state.mode === TestMode.TIME) {
        state.timeLimit = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMode, setWordsLimit, setTimeLimit } = testSlice.actions;

export default testSlice.reducer;
