import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { MY_DATA_CONSTANT } from '../../constants';

// Define the shape of your data item
export interface MyDataItem {
  id: string | number;
  name: string;
  // Add other properties as needed
}

// Define the initial state interface
interface SampleState {
  myData: MyDataItem[];
}

const initialState: SampleState = {
  myData: [],
};

export const sampleSlice = createSlice({
  name: 'sample',
  initialState,
  reducers: {
    getMyData(state) {
      state.myData = MY_DATA_CONSTANT;
    },
    setMyData(state, action: PayloadAction<MyDataItem[]>) {
      state.myData = action.payload;
    },
  },

});

export const { getMyData, setMyData } = sampleSlice.actions;

export default sampleSlice.reducer;
