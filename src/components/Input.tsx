import React from 'react';
import { useAppSelector } from '../hooks/hooks';

type IProps = {
  value: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  theme: boolean;
};

export const Input: React.FC<IProps> = (props) => {
  const { value, onChangeInput, theme } = props;
  const { status } = useAppSelector((state) => state.weather);
  return (
    <form className={theme ? 'dark' : ''}>
      <div className='h-16'>
        <input
          className='bg-gray-50 border-gray-300 dark:bg-[#1F2937] text-black border-2 dark:border-gray-600 text-md rounded focus:ring-blue-500 block w-full p-2.5 placeholder-gray-400 dark:text-white  focus:border-blue-500'
          placeholder='&#xF002;   Search'
          value={value}
          onChange={(e) => onChangeInput(e)}
        />
        {status === 'fulfilled' ? (
          <span className='text-green-600 text-xs px-2.5'>Success!</span>
        ) : status === null ? (
          ''
        ) : status === 'pending' ? (
          <span className='text-xs px-2.5 dark:text-white text-gray-900 '>Loading..</span>
        ) : (
          <span className='text-red-500 text-xs px-2.5'>
            Error: couldn't find weather
          </span>
        )}
      </div>
    </form>
  );
};
