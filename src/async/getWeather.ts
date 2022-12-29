import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { WeatherResponse } from '../types';
import type { WeatherState } from '../store/slices/weatherSlice';
import type { Coords } from '../App';

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async (coord: Coords | string, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const { weather } = state as { weather: WeatherState };
      const { isMounted } = weather;
      if (!isMounted) {
        if (typeof(coord) === 'object') {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?&units=metric&lat=${coord.latitude}&lon=${coord.longitude}&appid=20c4bd51cf84f12ebda1a2d7f69862bc`
          );
          const data: WeatherResponse = response.data;
          return data;
        }
      } else {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${coord}&units=metric&appid=20c4bd51cf84f12ebda1a2d7f69862bc`
        );
        console.log(response);
        const data: WeatherResponse = response.data;
        if (data) {
          return data;
        }
        return rejectWithValue('rejected');
      }
    } catch (error: any) {
      return rejectWithValue('rejected');
    }
  }
);
