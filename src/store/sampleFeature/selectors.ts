import type { RootState } from '../store';

export const selectMyData = (state: RootState) => state.sampleSlice.myData;