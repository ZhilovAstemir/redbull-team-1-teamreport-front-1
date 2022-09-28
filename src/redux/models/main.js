import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const initialState = {
  isLaunchGuidePage: false,
}

export const main = createSlice({
  name: "main",
  initialState,
  reducers: {
    changeGuidStatus: (state, action) => {
      state.isLaunchGuidePage = action.payload;
    },
  }
});


export const {
  changeGuidStatus,
} = main.actions;

export default main.reducer;
