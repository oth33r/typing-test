import { configureStore } from '@reduxjs/toolkit'
import textReducer from './slices/textSlice'

export const store = configureStore({
  reducer: {
    textSlice: textReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch