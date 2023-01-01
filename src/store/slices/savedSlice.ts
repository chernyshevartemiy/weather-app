import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Weather = {
  name: string;
  isSaved?: boolean;
};

type savedState = {
  savedWeather: Weather[];
};

const initialState: savedState = {
  savedWeather: [],
};

const savedSlice = createSlice({
  name: 'saved',
  initialState,
  reducers: {
    addWeather: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        const findWeather = state.savedWeather.find(
          (weather) => weather.name === action.payload
        );
        if (findWeather) {
          findWeather.isSaved = !findWeather.isSaved;
          state.savedWeather = state.savedWeather.filter((weather) => {
            if (weather.isSaved) {
              return true;
            }
          });
        } else {
          state.savedWeather.push({
            name: action.payload,
            isSaved: true,
          });
        }
      }
      return
    },
  },
});

export default savedSlice.reducer;
export const { addWeather } = savedSlice.actions;
