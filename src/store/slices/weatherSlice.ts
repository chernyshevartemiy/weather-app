import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { WeatherResponse } from '../../types';
import { getWeather } from '../../async/getWeather';

export type WeatherState = {
  status: string | null;
  weather: WeatherResponse | null | undefined;
  isMounted: boolean;
};

const initialState: WeatherState = {
  status: null,
  weather: null,
  isMounted: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather(state, action: PayloadAction<WeatherResponse>) {
      state.weather = action.payload;
      console.log(state.weather);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeather.fulfilled, (state, action) => {
      if (!state.isMounted) {
        state.weather = action.payload;
        state.status = null;
        state.isMounted = true;
      } else {
        state.weather = action.payload;
        state.status = 'fulfilled';
      }
    });
    builder.addCase(getWeather.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(getWeather.rejected, (state, action) => {
      if (action.payload === 'rejected') {
        state.status = action.payload;
        state.weather = null;
      }
    });
  },
});

export default weatherSlice.reducer;
export const { setWeather } = weatherSlice.actions;
