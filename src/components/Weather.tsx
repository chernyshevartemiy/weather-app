import React from 'react';

export const Weather: React.FC<any> = ({ day }) => {
  const maxTemp = () => {
    if (Math.ceil(day.main.temp_max) < 0) {
      return `(${Math.ceil(day.main.temp_max)})`;
    } else {
      return Math.ceil(day.main.temp_max);
    }
  };
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const getDay = () => {
    const { dt_txt: date } = day;
    const fullDate = new Date(date);
    return weekday[fullDate.getDay()];
  };
  const { dt_txt: date } = day;
  const event = new Date(date);
  return (
    <div className='w-[130px] h-[160px] flex flex-col items-center bg-[#374151] rounded-lg border-2 border-[#DCDEE0] hover:-translate-y-2 transition-all cursor-pointer'>
      <span className='my-3'>{getDay()}</span>
      <img
        className='h-12 mb-5'
        src={`https://openweathermap.org/img/w/${day.weather[0].icon}.png`}
        alt=''
      />
      <span className='font-semibold'>
        {Math.ceil(day.main.temp_min)}°C-{maxTemp()}°C
      </span>
    </div>
  );
};
