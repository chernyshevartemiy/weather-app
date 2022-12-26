import React from 'react';
import { useAppSelector } from '../hooks/hooks';

type IProps = {
  value: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input: React.FC<IProps> = (props) => {
  const { value, onChangeInput } = props;
  const { status } = useAppSelector((state) => state.weather);
  return (
    <form>
      <div className='h-16'>
        <input
          className='bg-[#1F2937] border border-gray-600 text-md rounded-lg focus:ring-blue-500 block w-full p-2.5 placeholder-gray-400 text-white  focus:border-blue-500'
          placeholder='&#xF002;   Search'
          value={value}
          onChange={(e) => onChangeInput(e)}
        />
        {status === 'fulfilled' ? (
          <span className='text-green-700 text-xs px-2.5'>Success!</span>
        ) : status === null ? (
          ''
        ) : status === 'pending' ? (
          <span className='text-xs px-2.5'>Loading..</span>
        ) : (
          <span className='text-red-500 text-xs px-2.5'>
            Enter a valid city name
          </span>
        )}
      </div>
    </form>
  );
};
