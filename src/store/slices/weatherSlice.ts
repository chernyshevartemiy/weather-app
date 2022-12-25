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

type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type WeatherState = {
  status: string;
  weather: [];
};

const initialState: WeatherState = {
  status: '',
  weather: [],
};

type WeatherResponse = {
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

export const getWeather = createAsyncThunk(
  'weather/getForecast',
  async (q: string) => {
    try {
      const data: WeatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=20c4bd51cf84f12ebda1a2d7f69862bc`
      );
      console.log(data);
    } catch (error) {}
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setForecast(state, action: PayloadAction<[]>) {
      state.weather = action.payload;
    },
  },
});

export default weatherSlice.reducer;
export const { setForecast } = weatherSlice.actions;
