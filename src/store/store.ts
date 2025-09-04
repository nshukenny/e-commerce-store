import { configureStore } from '@reduxjs/toolkit';

import sampleReducer from './sampleFeature/slice';

export const store = configureStore({
  reducer: {
    sampleSlice: sampleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
