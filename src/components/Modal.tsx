import React from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { getWeather } from '../store/slices/weatherSlice';
type IModal = {
  isVisible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<IModal> = ({ isVisible, setVisible }) => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = React.useState<string>('');
  const handleClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as Element;
    if (target.id === 'wrapper') {
      setVisible((prev) => !prev);
    }
  };
  const inputRef = React.useRef<HTMLInputElement>(null);
  const goHandler = (q: string) => {
    dispatch(getWeather(q));
    setVisible((prev) => !prev);
    setSearch('');
  };
  if (!isVisible) return null;
  return (
    <div
      className='fixed inset-0 backdrop-brightness-50 flex items-center justify-center'
      id='wrapper'
      onClick={(e) => handleClose(e)}
    >
      <div className='w-[400px] flex flex-col mb-[10rem]'>
        <button
          className='self-end text-white'
          onClick={() => setVisible((prev) => !prev)}
        >
          X
        </button>
        <form
          onSubmit={() => goHandler(search)}
          className='bg-[#374151] text-gray-200 p-2.5 rounded text-xl font-semibold shadow-md border-[2px] border-gray-500 flex flex-col'
        >
          <label className='mb-5'>Search for weather</label>
          <input
            ref={inputRef}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='bg-[#374151] border-b border-gray-500 text-md w-full p-2.5 placeholder-gray-400 text-white text-sm mb-5 font-medium outline-none'
            placeholder='&#xF002;   Bratislava'
          />
          <button
            type='submit'
            onClick={() => goHandler(search)}
            className='bg-[#1956db] hover:bg-[#0e48c5]
            transition-all focus:ring-2 focus:ring-gray-300 font-medium rounded  focus:outline-none self-start px-2.5 text-lg'
          >
            Go!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
