import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./slices/textSlice";
import testReducer from "./slices/testSlice";

export const store = configureStore({
  reducer: {
    textSlice: textReducer,
    testSlice: testReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
