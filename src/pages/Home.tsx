import React from 'react';
import { getForecast } from '../async/weatherApi';
import { Input } from '../components/Input';
import { Weather } from '../components/Weather';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { getWeather } from '../store/slices/weatherSlice';
import { debounce } from 'lodash';

export const Home = () => {
  const isMounted = React.useRef<boolean>(false);
  const [value, setValue] = React.useState<string>('');
  const dispatch = useAppDispatch();
  const { weather, status } = useAppSelector((state) => state.weather);
  const searchHandler = React.useCallback(
    debounce((e) => {
      dispatch(getWeather(e));
    }, 1000),
    []
  );
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    searchHandler(e.target.value);
  };
  React.useEffect(() => {
    if (isMounted.current) {
      searchHandler(value);
    }
    isMounted.current = true;
  }, [value]);
  return (
    <main className='text-gray-100 max-w-screen-xl mx-auto px-4 lg:px-6 flex flex-col items-center mt-14'>
      <Input value={value} onChangeInput={onChangeInput} />
      <span className='text-3xl mb-5 font-bold'>
        {Math.ceil(weather?.main.temp ? weather.main.temp : 0)}°C
      </span>
      <span className='mb-5 font-semibold'>
        <span>{weather?.name}, </span>
        <span className='uppercase'>{weather?.sys.country}</span>
      </span>
      <ul className='flex mb-10'>
        <li className='after:content-["•"] after:mx-3 after:opacity-70'>
          <span>Feels like: </span>
          {Math.ceil(weather?.main.feels_like ? weather?.main.feels_like : 0)}°C
        </li>
        <li className='after:content-["•"] after:mx-3 after:opacity-70'>
          Humidity: {weather?.main.humidity}%
        </li>
        <li>Info: {weather?.weather[0].main}</li>
      </ul>
      <div className='flex flex-wrap gap-4 justify-center py-4'></div>
    </main>
  );
};
