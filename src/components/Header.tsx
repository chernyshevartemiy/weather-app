import React from 'react';
import icon from '.././assets/icons/icon.svg';
import { SlSocialGithub } from 'react-icons/sl';
import { TbSun, TbSunOff } from 'react-icons/tb';
import { FaDiscord, FaHome } from 'react-icons/fa';
import { VscLibrary } from 'react-icons/vsc';
import Modal from './Modal';
import { NavLink, useLocation } from 'react-router-dom';
import { RiContactsFill } from 'react-icons/ri';
import { CustomLink } from './CustomLink';

type IHeader = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header: React.FC<IHeader> = ({ theme, setTheme }) => {
  const [burger, setBurger] = React.useState<boolean>(false);
  const [isVisible, setVisible] = React.useState<boolean>(false);
  const location = useLocation();
  const getPath = () => {
    if (location.pathname === '/') {
      return 'Home';
    } else {
      const firstLetter = location.pathname.charAt(1).toUpperCase();
      return firstLetter + location.pathname.substring(2);
    }
  };
  return (
    <header className={theme ? 'dark sticky top-0' : 'sticky top-0'}>
      <div className='dark:bg-[#1F2937] bg-[#fefefe] drop-shadow-md'>
        <nav className=' flex items-center justify-between mx-auto max-w-screen-xl px-4 lg:px-6 py-2.5'>
          <div className='flex items-center min-w-[160px]'>
            <NavLink to='/'>
              <img className='mr-6 h-10' src={icon} alt='' />
            </NavLink>
            <span className='font-bold text-xl dark:text-white text-gray-800dark:border-gray-200 block lg:hidden'>
              {getPath()}
            </span>
          </div>
          <div className='hidden lg:flex'>
            <ul className='flex font-medium space-x-8 dark:text-gray-200 text-gray-700'>
              <li className='block'>
                <CustomLink to='/' children='Home' />
              </li>
              <li className='block'>
                <CustomLink to='saved' children='Saved' />
              </li>
              <li className='block'>
                <CustomLink to='contact' children='Contact' />
              </li>
            </ul>
          </div>
          <div className='flex items-center gap-4'>
            <div className='flex space-x-3'>
              <button>
                <a href='https://github.com/chernyshevartemiy' target='_blank'>
                  <SlSocialGithub
                    className='h-5 w-6
        transition-all dark:text-gray-400 text-gray-700 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer'
                  />
                </a>
              </button>
              <button>
                <a
                  href='https://discord.com/users/339701172564656128'
                  target='_blank'
                >
                  <FaDiscord
                    className='h-5
        transition-all w-6 text-gray-700 dark:text-gray-400 dark:hover:text-gray-100 hover:text-gray-900'
                  />
                </a>
              </button>
              <button
                className='transition-all'
                onClick={() => setTheme(!theme)}
              >
                {theme ? (
                  <TbSunOff
                    className='h-5 w-6 dark:text-gray-400
          transition-all text-gray-700 dark:hover:text-gray-100 hover:text-gray-900'
                  />
                ) : (
                  <TbSun
                    className='h-5 w-6 dark:text-gray-400
                  transition-all text-gray-700 dark:hover:text-gray-100 hover:text-gray-900'
                  />
                )}
              </button>
            </div>
            <button
              className='dark:text-white
            hidden
            sm:block
            bg-gray-200
            hover:bg-gray-300
            text-gray-700
            dark:hover:bg-[#0e48c5]
            dark:bg-[#1956db]
            transition-all focus:ring-2 focus:ring-gray-400 font-medium rounded text-sm px-3 lg:px-4 py-1.5 lg:py-2 focus:outline-none ml-2 
            '
              onClick={() => setVisible((prev) => !prev)}
            >
              Get started
            </button>

            <button
              onClick={() => setBurger((prev) => !prev)}
              className='p-2 block lg:hidden text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700
      transition-all focus:outline-none focus:ring-2 focus:ring-gray-400'
            >
              <svg
                className='w-6 h-6'
                fill={theme ? '#FFFFFF' : '#000000'}
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'></path>
              </svg>
            </button>
          </div>
        </nav>
        {burger && (
          <div className='dark:text-gray-100 text-gray-700 max-w-screen-xl mx-auto block lg:hidden font-semibold fixed w-full'>
            <ul className='flex-col px-4 bg-white dark:bg-[#1F2937] w-full shadow-md'>
              <li className='py-2 dark:hover:text-[#1956db] hover:text-gray-900 w-full cursor-pointer transition-all'>
                <NavLink
                  className='flex items-center space-x-2'
                  onClick={() => setBurger((prev) => !prev)}
                  to='/'
                >
                  <button className='flex items-center space-x-2'>
                    <FaHome />
                    <span>Home</span>
                  </button>
                </NavLink>
              </li>
              <li className='py-2 dark:hover:text-[#1956db] hover:text-gray-900 w-full cursor-pointer transition-all'>
                <NavLink
                  className='flex items-center space-x-2'
                  onClick={() => setBurger((prev) => !prev)}
                  to='saved'
                >
                  <button className='flex items-center space-x-2'>
                    <VscLibrary />
                    <span>Saved</span>
                  </button>
                </NavLink>
              </li>
              <li className='py-2 dark:hover:text-[#1956db] hover:text-gray-900 w-full cursor-pointer transition-all'>
                <NavLink
                  className='flex items-center space-x-2'
                  onClick={() => setBurger((prev) => !prev)}
                  to='contact'
                >
                  <button className='flex items-center space-x-2'>
                    <RiContactsFill />
                    <span>Contact</span>
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
      <Modal theme={theme} isVisible={isVisible} setVisible={setVisible} />
    </header>
  );
};
