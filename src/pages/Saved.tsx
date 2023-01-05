import React from 'react';
import { Cart } from '../components/Cart';
import { useAppSelector } from '../hooks/hooks';

type ISaved = {
  theme: boolean;
};

const Saved: React.FC<ISaved> = ({ theme }) => {
  const { savedWeather } = useAppSelector((state) => state.saved);
  return (
    <main className={theme ? 'dark' : ''}>
      <div className='text-gray-700 dark:text-gray-100  max-w-screen-xl mx-auto px-4 lg:px-6 flex flex-col items-center py-10 space-y-4'>
        {savedWeather.length === 0 ? <h2 className='font-medim text-lg'>You don't have saved weather</h2> : ''}

        {savedWeather.map((weather, i) => {
          return <Cart index={i} key={weather.name} name={weather.name} />;
        })}
      </div>
    </main>
  );
};

export default Saved;
