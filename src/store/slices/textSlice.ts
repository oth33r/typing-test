import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IncrementType = "word" | "char" | "pressCount";

export interface CounterState {
  text: string[];
  pressingCount: number;
  currentCharIndex: number;
  currentWordIndex: number;
}

const initialState: CounterState = {
  text: [
    "way",
    "begin",
    "fine",
    "open",
    "good",
    "fax",
    "good",
    "dog",
    "for",
    "children",
    "not",
    "stay",
    "music",
    "thing",
    "these",
    "many",
    "this",
    "house",
    "test",
  ],
  pressingCount: 0,
  currentCharIndex: 0,
  currentWordIndex: 0,
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<IncrementType>) => {
      switch (action.payload) {
        case "char":
          state.currentCharIndex += 1;
          break;
        case "word":
          state.currentCharIndex = 0;
          state.currentWordIndex += 1;
          break;
        case "pressCount":
          state.pressingCount += 1;
          break;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = textSlice.actions;

export default textSlice.reducer;
