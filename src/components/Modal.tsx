import React from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { getWeather } from '../async/getWeather';
import { useLocation, useNavigate } from 'react-router-dom';

type IModal = {
  isVisible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  theme: boolean;
};

const Modal: React.FC<IModal> = ({ isVisible, setVisible, theme }) => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = React.useState<string>('');
  const handleClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as Element;
    if (target.id === 'wrapper') {
      setVisible((prev) => !prev);
    }
  };
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const goHandler = (q: string) => {
    dispatch(getWeather(q));
    setVisible((prev) => !prev);
    setSearch('');
    if (location.pathname === '/saved' || '/contact') {
      navigate('/');
    }
  };
  if (!isVisible) return null;
  return (
    <div
      className={`fixed inset-0 backdrop-brightness-50 flex items-center justify-center`}
      id='wrapper'
      onClick={(e) => handleClose(e)}
    >
      <div className={`${theme && 'dark'} w-[400px] flex flex-col shadow-lg`}>
        <button
          className='self-end text-white'
          onClick={() => setVisible((prev) => !prev)}
        >
          X
        </button>
        <form
          onSubmit={() => goHandler(search)}
          className='dark:bg-[#374151] bg-gray-50 dark:text-gray-200 p-2.5 rounded text-xl font-semibold shadow-md border-[2px] border-gray-500 flex flex-col'
        >
          <label className='mb-5'>Search for weather</label>
          <input
            ref={inputRef}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='dark:bg-[#374151] bg-gray-50 border-b-2 border-gray-400 text-md w-full p-2.5 placeholder-gray-400 text-black dark:text-white text-sm mb-5 font-medium outline-none'
            placeholder='&#xF002;   Bratislava'
          />
          <button
            type='submit'
            onClick={() => goHandler(search)}
            className='dark:bg-[#1956db] dark:hover:bg-[#0e48c5] bg-gray-200 hover:bg-gray-300
            transition-all focus:ring-2 focus:ring-gray-400 font-medium rounded focus:outline-none self-start px-2.5 text-lg'
          >
            Go!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
