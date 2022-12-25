import React from 'react';
  
export const Input = () => {
  return (
    <form>
      <div className='mb-10'>
        <input
          className='bg-[#1F2937] border border-gray-600 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 placeholder-gray-400 text-white  focus:border-blue-500'
          placeholder='&#xF002;   Search'
          required
        />
      </div>
    </form>
  );
};
