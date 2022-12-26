import React from 'react';
import { Input } from '../components/Input';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { getWeather } from '../store/slices/weatherSlice';
import { debounce } from 'lodash';
import getIcon from '../helpers/getIcon';
import getTempIcon from '../helpers/getTemp';

export const Home = () => {
  const [value, setValue] = React.useState<string>('');
  const dispatch = useAppDispatch();
  const { weather, status, isMounted } = useAppSelector(
    (state) => state.weather
  );
  const searchHandler = React.useCallback(
    debounce((e) => {
      console.log('Hello, World!');
      dispatch(getWeather(e));
    }, 1000),
    []
  );
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    searchHandler(e.target.value);
  };
  React.useEffect(() => {
    if (!isMounted) {
      dispatch(getWeather('Kyiv'));
    }
  }, [value]);
  return (
    <main className='text-gray-100 max-w-screen-xl mx-auto px-4 lg:px-6 flex flex-col items-center mt-10'>
      <Input value={value} onChangeInput={onChangeInput} />
      <img
        className='h-40'
        src={getIcon(weather?.weather[0].id ? weather?.weather[0].id : 800)}
        alt=''
      />
      <span className='text-5xl mb-5 font-bold flex items-center justify-center'>
        <img
        className='h-20 mr-3'
          src={getTempIcon(
            Math.ceil(weather?.main.temp ? weather.main.temp : 0)
          )}
          alt=''
        />
        {Math.ceil(weather?.main.temp ? weather.main.temp : 0)}°C
      </span>
      <span className='mb-5 font-semibold'>
        <span className='text-2xl '>{weather?.name}, </span>
        <span className='uppercase text-2xl'>{weather?.sys.country}</span>
      </span>
      <ul className='flex flex-col sm:flex-row items-center mb-4 space-y-2 sm:space-y-0'>
        <li className='sm:after:content-["•"] sm:after:mx-3 after:opacity-70'>
          <span className='text-lg'>
            Feels like:{' '}
            {Math.ceil(weather?.main.feels_like ? weather?.main.feels_like : 0)}
            °C
          </span>
        </li>
        <li className='sm:after:content-["•"] sm:after:mx-3 after:opacity-70 text-lg'>
          Humidity: {weather?.main.humidity}%
        </li>
        <li className='text-lg'>Info: {weather?.weather[0].main}</li>
      </ul>
      <ul className='flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0'>
        <li className='sm:after:content-["•"] after:mx-3 after:opacity-70 text-lg'>
          <span></span>
        </li>
        <li className='sm:after:content-["•"] after:mx-3 after:opacity-70'>
          <span></span>
        </li>
        <li className='sm:after:content-["•"] after:mx-3 after:opacity-70'>
          <span></span>
        </li>
      </ul>
      <div className='flex flex-wrap gap-4 justify-center py-4'></div>
    </main>
  );
};
