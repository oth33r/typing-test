import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  text: string[];
  pressingCount: number;
  currentCharIndex: number;
  currentWordIndex: number;
}

const initialState: CounterState = {
  text: ['way', 'begin', 'fine', 'open', 'good', 'fax', 'good', 'dog', 'for', 'children', 'not', 'stay', 'music', 'thing', 'these', 'many', 'this', 'house', 'test'],
  pressingCount: 0,
  currentCharIndex: 0,
  currentWordIndex: 0,
}

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    incrementPressingCount: (state) => {
      state.pressingCount += 1;
    }
  },
})

// Action creators are generated for each case reducer function
export const { incrementPressingCount } = textSlice.actions

export default textSlice.reducer