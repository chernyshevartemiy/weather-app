import React from 'react';
import { Input } from '../components/Input';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { getWeather } from '../async/getWeather';
import { debounce } from 'lodash';
import getIcon from '../helpers/getIcon';
import getTempIcon from '../helpers/getTemp';
import { addWeather } from '../store/slices/savedSlice';

type IHome = {
  theme: boolean;
};

export const Home: React.FC<IHome> = ({ theme }) => {
  const [value, setValue] = React.useState<string>('');
  const dispatch = useAppDispatch();
  const { weather } = useAppSelector((state) => state.weather);
  const { savedWeather } = useAppSelector((state) => state.saved);
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
    document.body.style.backgroundColor = theme ? '#101827' : '#DDDDDD';
  }, [theme]);
  return (
    <main className={theme ? 'dark' : ''}>
      <div className='text-gray-100  max-w-screen-xl mx-auto px-4 lg:px-6 flex flex-col items-center pt-10'>
        <Input theme={theme} value={value} onChangeInput={onChangeInput} />
        <img
          className='h-40'
          src={getIcon(weather?.weather[0].id ? weather?.weather[0].id : 800)}
          alt=''
        />
        <span className='text-5xl dark:text-white text-gray-700 mb-5 font-bold flex items-center justify-center'>
          <img
            className='h-20 mr-3'
            src={getTempIcon(
              Math.ceil(weather?.main.temp ? weather.main.temp : 0)
            )}
            alt=''
          />
          {Math.ceil(weather?.main.temp ? weather.main.temp : 0)}°C
        </span>
        <span className='mb-5 font-semibold dark:text-white text-gray-700'>
          <span className='text-2xl '>{weather?.name}, </span>
          <span className='uppercase text-2xl'>{weather?.sys.country}</span>
        </span>
        <ul className='flex flex-col sm:flex-row items-center mb-6 space-y-2 sm:space-y-0 dark:text-white text-gray-700'>
          <li className='sm:after:content-["•"] sm:after:mx-3 after:opacity-70'>
            <span className='font-bold'>Feels like: </span>
            <span>
              {Math.ceil(
                weather?.main.feels_like ? weather?.main.feels_like : 0
              )}
              °C
            </span>
          </li>
          <li className='sm:after:content-["•"] sm:after:mx-3 after:opacity-70'>
            <span className='font-bold'>Humidity:</span>{' '}
            <span>{weather?.main.humidity}%</span>
          </li>
          <li className=''>
            <span className='font-bold'>Info:</span>{' '}
            <span>{weather?.weather[0].main}</span>
          </li>
        </ul>
        <button
          className='dark:text-white
             bg-gray-200 hover:bg-gray-300
              text-gray-700 dark:hover:bg-[#0e48c5] dark:bg-[#1956db] transition-all focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none ml-2 '
          onClick={() => {
            dispatch(addWeather(weather?.name as string));
          }}
        >
          {savedWeather.find((el) => {
            if (el.name === (weather?.name as string)) {
              return true;
            }
          })
            ? '- Delete from saved'
            : '+ Add to saved'}
        </button>
      </div>
    </main>
  );
};
