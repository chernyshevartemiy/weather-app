import React from 'react';
import sun from '.././assets/images/sun.svg';
import { getForecast } from '../async/weatherApi';
import { Weather } from '../components/Weather';

export const Home = () => {
  const [forecast, setForecast] = React.useState<any>([]);
  const [weather, setWeather] = React.useState<any>({});
  React.useEffect(() => {
    const getData = async () => {
      const data = await getForecast();
      const [weatherInfo, ...forecastInfo] = data;
      setForecast(forecastInfo);
      setWeather(weatherInfo);
    };
    getData();
  }, []);
  return (
    <main className='text-gray-100 max-w-screen-xl mx-auto px-4 lg:px-6 flex flex-col items-center mt-14'>
      <span className='text-3xl mb-5 font-bold'>
        {Math.ceil(forecast[0]?.main?.temp)}°C
      </span>
      <span className='mb-5 font-semibold'>
        {weather?.name}, <span className='uppercase'>{weather?.country}</span>
      </span>
      <ul className='flex mb-10'>
        <li className='after:content-["•"] after:mx-3 after:opacity-70'>
          Feels like: {Math.ceil(forecast[0]?.main?.feels_like)}°C
        </li>
        <li className='after:content-["•"] after:mx-3 after:opacity-70'>
          Humidity: {forecast[0]?.main?.humidity}%
        </li>
        <li>Info: {forecast[0]?.weather[0]?.main}</li>
      </ul>
      <div className='flex flex-wrap gap-4 justify-center py-4'>
        {forecast.map((day: any) => {
          return <Weather day={day} key={day.dt} />;
        })}
      </div>
    </main>
  );
};
