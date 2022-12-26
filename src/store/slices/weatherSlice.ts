import { Weather } from './../../components/Weather';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  visibility: number;
};

type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

type Clouds = {
  all: number;
};

type Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

type Coord = {
  lon: number;
  lat: number;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type WeatherResponse = {
  coord: Coord;
  weather: Weather[];
  main: Main;
  wind: Wind;
  clouds: Clouds;
  dt: string;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

type WeatherState = {
  status: string | null;
  weather: WeatherResponse | null;
  isMounted: boolean;
};

const initialState: WeatherState = {
  status: null,
  weather: null,
  isMounted: false,
};

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async (q: string, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const { weather } = state as { weather: WeatherState };
      const { isMounted } = weather;
      if (!isMounted) {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=20c4bd51cf84f12ebda1a2d7f69862bc`
        );
        const data: WeatherResponse = response.data;
        return data;
      } else {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=20c4bd51cf84f12ebda1a2d7f69862bc`
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
    builder.addCase(getWeather.pending, (state, action) => {
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
