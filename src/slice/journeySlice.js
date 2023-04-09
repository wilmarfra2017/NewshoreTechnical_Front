import { createSlice } from '@reduxjs/toolkit';

const journeySlice = createSlice({
  name: 'journey',
  initialState: {
    journeyData: {},
    isLoading: false,
  },
  reducers: {
    setJourneyData: (state, action) => {
      state.isLoading = false;
      state.journeyData = action.payload;
    },
    startLoading: (state) => { 
      state.isLoading = true; 
    }, 
  },
});

export const { setJourneyData, startLoading } = journeySlice.actions;
export default journeySlice.reducer;
